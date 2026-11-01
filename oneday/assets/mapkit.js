// Map helpers shared by the city app and the atlas: projection, the printed base map, route curves.
window.MapKit = (() => {
  const proj = (city) => { const kx = Math.cos(city.lat * Math.PI / 180) * 111320, ky = 110540; return (p) => [(p.lon - city.lon) * kx, -(p.lat - city.lat) * ky]; };
  const cache = {};
  const load = (id) => (cache[id] = cache[id] || fetch(`/maps/${id}.json`).then((r) => (r.ok ? r.json() : null)).catch(() => null));
  // Layers bottom to top. Strokes keep their screen width at any zoom.
  const LAYERS = [["park", "m-park"], ["water", "m-water"], ["water", "m-dots"], ["river", "m-river"], ["minor", "m-minor"], ["path", "m-path"], ["rail", "m-rail"], ["major", "m-major"]];
  const base = (m, dots = "dots") => (m ? LAYERS.map(([k, c]) => (m[k] ? `<path class="${c}"${c === "m-dots" ? ` style="fill:url(#${dots})"` : ""} vector-effect="non-scaling-stroke" d="${m[k]}"/>` : "")).join("") : "");
  const dotsDef = (id, size) => `<pattern id="${id}" patternUnits="userSpaceOnUse" width="${size}" height="${size}"><circle class="dot" cx="${size / 2}" cy="${size / 2}" r="${size * 0.2}"/></pattern>`;
  // A gentle alternating bow between stops, so the line reads as drawn by hand rather than routed.
  const leg = (a, b, i) => { const k = (i % 2 ? 1 : -1) * 0.18; return `Q${((a[0] + b[0]) / 2 - (b[1] - a[1]) * k).toFixed(1)} ${((a[1] + b[1]) / 2 + (b[0] - a[0]) * k).toFixed(1)} ${b[0].toFixed(1)} ${b[1].toFixed(1)}`; };
  const curve = (pts, from = 0, to = pts.length - 1) => { if (to <= from) return ""; let d = `M${pts[from][0].toFixed(1)} ${pts[from][1].toFixed(1)}`; for (let i = from + 1; i <= to; i++) d += leg(pts[i - 1], pts[i], i); return d; };
  // viewBox [x,y,w,h] that fits pts inside a W×H box with paddings in px; minimum span in metres.
  const fit = (pts, W, H, pad = {}, minSpan = 1100) => {
    const t = pad.t ?? 40, b = pad.b ?? 40, l = pad.l ?? 40, r = pad.r ?? 40;
    const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
    const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    const rw = Math.max(W - l - r, 40), rh = Math.max(H - t - b, 40);
    const s = Math.max((x1 - x0) / rw, (y1 - y0) / rh, minSpan / Math.min(W, H));
    return [x0 - l * s - (rw * s - (x1 - x0)) / 2, y0 - t * s - (rh * s - (y1 - y0)) / 2, W * s, H * s];
  };
  // Keep a view inside the area the base map covers, so no blank paper shows at the edges.
  const clamp = (v, f) => { if (!f) return v; const o = v.slice(); const fw = f.maxX - f.minX, fh = f.maxY - f.minY;
    if (o[2] <= fw) o[0] = Math.min(Math.max(o[0], f.minX), f.maxX - o[2]); else o[0] = f.minX - (o[2] - fw) / 2;
    if (o[3] <= fh) o[1] = Math.min(Math.max(o[1], f.minY), f.maxY - o[3]); else o[1] = f.minY - (o[3] - fh) / 2;
    return o; };
  const km = (a, b) => { const t = (x) => (x * Math.PI) / 180; const h = Math.sin(t(b.lat - a.lat) / 2) ** 2 + Math.cos(t(a.lat)) * Math.cos(t(b.lat)) * Math.sin(t(b.lon - a.lon) / 2) ** 2; return 2 * 6371 * Math.asin(Math.sqrt(h)) * 1.3; };
  return { proj, load, base, dotsDef, curve, fit, clamp, km };
})();
