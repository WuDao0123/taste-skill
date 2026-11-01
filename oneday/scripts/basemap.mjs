// Builds each city's base map from OpenStreetMap data and writes data/maps/{city}.json:
// water (sea, rivers, lakes), parks and woods, major and minor streets and railways, projected to
// metres around the city centre, clipped to the area the city's places cover, and simplified.
// Source: OpenFreeMap vector tiles (OpenMapTiles schema, built from OpenStreetMap), zoom 14, no key.
// Run after scripts/geocode.mjs: `node oneday/scripts/basemap.mjs [cityId ...]`.
import { writeFileSync, readFileSync, mkdirSync, existsSync } from "node:fs";
import { CITIES } from "../data/seeds.mjs";

const ROOT = new URL("../", import.meta.url);
const PLACES = JSON.parse(readFileSync(new URL("data/places.json", ROOT), "utf8"));
const OUT = new URL("data/maps/", ROOT);
mkdirSync(OUT, { recursive: true });
const Z = 14;
const PAD = 3000; // metres of map around the outermost places (postcards and wide screens need room)
const NEAR = 1700; // minor streets are kept within this many metres of a place
const MIN_AREA = 1200; // m²; smaller parks vanish at route zoom anyway
const area = (r) => r.reduce((s, p, i) => { const q = r[(i + 1) % r.length]; return s + p[0] * q[1] - q[0] * p[1]; }, 0) / 2;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------- Mapbox Vector Tile decoding (just enough protobuf) ----------
function pbf(buf) {
  let pos = 0;
  const varint = () => { let r = 0, s = 0, b; do { b = buf[pos++]; r += (b & 0x7f) * 2 ** s; s += 7; } while (b & 0x80); return r; };
  return {
    get pos() { return pos; }, set pos(v) { pos = v; }, varint, end: buf.length,
    fields(endAt, cb) { while (pos < endAt) { const key = varint(), f = Math.floor(key / 8), t = key & 7; const start = pos;
      if (t === 2) { const len = varint(); const s = pos; pos += len; cb(f, t, s, s + len); }
      else if (t === 0) { const v = varint(); cb(f, t, start, v); }
      else if (t === 1) { pos += 8; cb(f, t, start); } else if (t === 5) { pos += 4; cb(f, t, start); } } },
    str(s, e) { return new TextDecoder().decode(buf.subarray(s, e)); },
    packed(s, e) { const save = pos; pos = s; const out = []; while (pos < e) out.push(varint()); pos = save; return out; },
    dbl(s) { return new DataView(buf.buffer, buf.byteOffset + s, 8).getFloat64(0, true); },
    flt(s) { return new DataView(buf.buffer, buf.byteOffset + s, 4).getFloat32(0, true); },
  };
}
function decodeTile(buf) {
  const p = pbf(buf), layers = {};
  p.fields(p.end, (f, t, s, e) => {
    if (f !== 3) return;
    const L = { name: "", keys: [], values: [], extent: 4096, feats: [] };
    const save = p.pos; p.pos = s;
    p.fields(e, (f2, t2, s2, e2) => {
      if (f2 === 1) L.name = p.str(s2, e2);
      else if (f2 === 3) L.keys.push(p.str(s2, e2));
      else if (f2 === 4) { let v = null; const sv = p.pos; p.pos = s2; p.fields(e2, (f3, t3, s3, e3) => { v = f3 === 1 ? p.str(s3, e3) : f3 === 2 ? p.flt(s3) : f3 === 3 ? p.dbl(s3) : f3 === 7 ? !!e3 : e3; }); p.pos = sv; L.values.push(v); }
      else if (f2 === 5) L.extent = e2;
      else if (f2 === 2) { const ft = { tags: [], type: 0, geom: [] }; const sv = p.pos; p.pos = s2;
        p.fields(e2, (f3, t3, s3, e3) => { if (f3 === 2) ft.tags = p.packed(s3, e3); else if (f3 === 3) ft.type = e3; else if (f3 === 4) ft.geom = p.packed(s3, e3); });
        p.pos = sv; L.feats.push(ft); }
    });
    p.pos = save;
    layers[L.name] = L;
  });
  return layers;
}
function featProps(L, ft) { const o = {}; for (let i = 0; i < ft.tags.length; i += 2) o[L.keys[ft.tags[i]]] = L.values[ft.tags[i + 1]]; return o; }
function featGeom(ft) { // → array of parts (lines or rings) in tile units
  const parts = []; let x = 0, y = 0, cur = null, i = 0;
  const zz = (n) => (n >> 1) ^ -(n & 1);
  while (i < ft.geom.length) {
    const ci = ft.geom[i++], cmd = ci & 7, n = ci >> 3;
    if (cmd === 7) continue;
    for (let k = 0; k < n; k++) {
      x += zz(ft.geom[i++]); y += zz(ft.geom[i++]);
      if (cmd === 1) { cur = [[x, y]]; parts.push(cur); } else cur.push([x, y]);
    }
  }
  return parts;
}

// ---------- geometry ----------
function frameFor(city) {
  const ps = PLACES[city.id];
  const kx = Math.cos(city.lat * Math.PI / 180) * 111320, ky = 110540;
  const P = (lat, lon) => [(lon - city.lon) * kx, -(lat - city.lat) * ky];
  const xy = ps.map((p) => P(p.lat, p.lon));
  const f = { minX: Math.min(...xy.map((a) => a[0])) - PAD, maxX: Math.max(...xy.map((a) => a[0])) + PAD, minY: Math.min(...xy.map((a) => a[1])) - PAD, maxY: Math.max(...xy.map((a) => a[1])) + PAD };
  return { ...f, P, s: city.lat - f.maxY / ky, n: city.lat - f.minY / ky, w: city.lon + f.minX / kx, e: city.lon + f.maxX / kx };
}
function simplify(pts, tol) { // Douglas–Peucker
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length); keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [a, b] = stack.pop(); let md = 0, mi = -1;
    const [ax, ay] = pts[a], [bx, by] = pts[b], dx = bx - ax, dy = by - ay, L = Math.hypot(dx, dy);
    for (let i = a + 1; i < b; i++) { const d = L ? Math.abs(dy * pts[i][0] - dx * pts[i][1] + bx * ay - by * ax) / L : Math.hypot(pts[i][0] - ax, pts[i][1] - ay); if (d > md) { md = d; mi = i; } }
    if (md > tol) { keep[mi] = 1; stack.push([a, mi], [mi, b]); }
  }
  return pts.filter((_, i) => keep[i]);
}
function clipPoly(ring, f) { // Sutherland–Hodgman; keeps the ring's winding
  const E = [[(p) => p[0] >= f.minX, (a, b) => [f.minX, a[1] + (f.minX - a[0]) / (b[0] - a[0]) * (b[1] - a[1])]],
    [(p) => p[0] <= f.maxX, (a, b) => [f.maxX, a[1] + (f.maxX - a[0]) / (b[0] - a[0]) * (b[1] - a[1])]],
    [(p) => p[1] >= f.minY, (a, b) => [a[0] + (f.minY - a[1]) / (b[1] - a[1]) * (b[0] - a[0]), f.minY]],
    [(p) => p[1] <= f.maxY, (a, b) => [a[0] + (f.maxY - a[1]) / (b[1] - a[1]) * (b[0] - a[0]), f.maxY]]];
  let out = ring;
  for (const [inside, cut] of E) {
    const inp = out; out = [];
    for (let i = 0; i < inp.length; i++) { const a = inp[(i + inp.length - 1) % inp.length], b = inp[i];
      if (inside(b)) { if (!inside(a)) out.push(cut(a, b)); out.push(b); } else if (inside(a)) out.push(cut(a, b)); }
    if (!out.length) break;
  }
  return out;
}
function clipLine(line, f) { // Liang–Barsky per segment → pieces inside the frame
  const pieces = []; let cur = null;
  for (let i = 1; i < line.length; i++) {
    const [x0, y0] = line[i - 1], [x1, y1] = line[i], dx = x1 - x0, dy = y1 - y0;
    let t0 = 0, t1 = 1, ok = true;
    for (const [p, q] of [[-dx, x0 - f.minX], [dx, f.maxX - x0], [-dy, y0 - f.minY], [dy, f.maxY - y0]]) {
      if (p === 0) { if (q < 0) { ok = false; break; } continue; }
      const t = q / p;
      if (p < 0) { if (t > t1) { ok = false; break; } if (t > t0) t0 = t; } else { if (t < t0) { ok = false; break; } if (t < t1) t1 = t; }
    }
    if (!ok) { if (cur) { pieces.push(cur); cur = null; } continue; }
    const a = [x0 + t0 * dx, y0 + t0 * dy], b = [x0 + t1 * dx, y0 + t1 * dy];
    if (!cur || t0 > 0) { if (cur) pieces.push(cur); cur = [a]; }
    cur.push(b);
    if (t1 < 1) { pieces.push(cur); cur = null; }
  }
  if (cur) pieces.push(cur);
  return pieces;
}
const r1 = (n) => Math.round(n);
function dPath(pts, close) { // relative coordinates keep the files small
  let px = r1(pts[0][0]), py = r1(pts[0][1]), d = `M${px} ${py}`;
  for (let i = 1; i < pts.length; i++) { const x = r1(pts[i][0]), y = r1(pts[i][1]); if (x === px && y === py) continue; d += `l${x - px} ${y - py}`; px = x; py = y; }
  return close ? d + "z" : d;
}

let TILESET;
async function tile(z, x, y) {
  for (let a = 0; a < 5; a++) {
    try {
      const r = await fetch(`https://tiles.openfreemap.org/planet/${TILESET}/${z}/${x}/${y}.pbf`, { headers: { "User-Agent": "oneday-build/0.2" } });
      if (r.status === 404 || r.status === 204) return null;
      if (r.ok) return new Uint8Array(await r.arrayBuffer());
    } catch (_) { /* retry */ }
    await sleep(1500 * (a + 1));
  }
  throw new Error(`tile ${z}/${x}/${y} failed`);
}

async function build(city) {
  const f = frameFor(city);
  const span = Math.max(f.maxX - f.minX, f.maxY - f.minY);
  const tol = Math.max(3, span / 2600);
  const n = 2 ** Z;
  const tx = (lon) => Math.floor((lon + 180) / 360 * n);
  const ty = (lat) => Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * n);
  const [x0, x1, y0, y1] = [tx(f.w), tx(f.e), ty(f.n), ty(f.s)];
  const sites = PLACES[city.id].map((p) => f.P(p.lat, p.lon));
  const near = ([x, y]) => sites.some(([a, b]) => (a - x) ** 2 + (b - y) ** 2 < NEAR * NEAR);
  const out = { water: [], river: [], park: [], major: [], minor: [], path: [], rail: [] };
  console.log(`${city.id}: ${(span / 1000).toFixed(1)} km, ${(x1 - x0 + 1) * (y1 - y0 + 1)} tiles`);
  const jobs = [];
  for (let X = x0; X <= x1; X++) for (let Y = y0; Y <= y1; Y++) jobs.push([X, Y]);
  const bufs = [];
  for (let i = 0; i < jobs.length; i += 6) bufs.push(...await Promise.all(jobs.slice(i, i + 6).map(([X, Y]) => tile(Z, X, Y).then((b) => [X, Y, b]))));
  for (const [X, Y, buf] of bufs) {
    if (!buf) continue;
    for (const [lname, L] of Object.entries(decodeTile(buf))) {
      for (const ft of L.feats) {
        const pr = featProps(L, ft);
        let bucket = null;
        if (lname === "water" && pr.class !== "swimming_pool") bucket = "water";
        else if (lname === "waterway" && /^(river|canal)$/.test(pr.class) && pr.brunnel !== "tunnel") bucket = "river";
        else if (lname === "park") bucket = "park";
        else if (lname === "landcover" && /^(wood|grass)$/.test(pr.class)) bucket = "park";
        else if (lname === "transportation" && ft.type === 2 && pr.brunnel !== "tunnel") {
          if (/^(motorway|trunk|primary|secondary)$/.test(pr.class)) bucket = "major";
          else if (/^(tertiary|minor)$/.test(pr.class)) bucket = "minor";
          else if (pr.class === "path" && pr.subclass === "pedestrian") bucket = "path";
          else if (pr.class === "rail" && pr.subclass === "rail" && !pr.service) bucket = "rail";
        }
        if (!bucket) continue;
        const poly = ft.type === 3;
        if ((bucket === "water" || bucket === "park") && !poly) continue;
        const toM = ([px, py]) => { const lon = (X + px / L.extent) / n * 360 - 180; const lat = Math.atan(Math.sinh(Math.PI * (1 - 2 * (Y + py / L.extent) / n))) * 180 / Math.PI; return f.P(lat, lon); };
        const local = bucket === "minor" || bucket === "path";
        for (const part of featGeom(ft)) {
          const pts = part.map(toM);
          if (poly) {
            const c = clipPoly(simplify(pts, tol), f);
            if (c.length >= 3 && (bucket === "water" || Math.abs(area(c)) >= MIN_AREA)) out[bucket].push(dPath(c, true));
          } else for (const pc of clipLine(simplify(pts, tol), f)) {
            // minor streets only around the places: routes zoom in there; zoomed out, main roads carry the map
            if (pc.length > 1 && (!local || pc.some((q) => near(q)))) out[bucket].push(dPath(pc, false));
          }
        }
      }
    }
  }
  const res = { id: city.id, frame: { minX: r1(f.minX), minY: r1(f.minY), maxX: r1(f.maxX), maxY: r1(f.maxY) }, ...Object.fromEntries(Object.entries(out).map(([k, v]) => [k, v.join("")])) };
  writeFileSync(new URL(`${city.id}.json`, OUT), JSON.stringify(res));
  console.log(`  ${(JSON.stringify(res).length / 1024).toFixed(0)} KB · ${Object.entries(out).map(([k, v]) => `${k} ${v.length}`).join(", ")}`);
}

TILESET = (await (await fetch("https://tiles.openfreemap.org/planet")).json()).tiles[0].match(/planet\/([^/]+)\//)[1];
const only = process.argv.slice(2);
for (const c of CITIES) {
  if (only.length ? !only.includes(c.id) : existsSync(new URL(`${c.id}.json`, OUT))) continue;
  if (!PLACES[c.id]?.length) continue;
  await build(c);
}
