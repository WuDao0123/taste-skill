// Looks up every seed place in OpenStreetMap (Nominatim, 1 request/second as its usage policy asks)
// and writes data/places.json. Places that are not found within MAX_KM of the city centre are dropped
// and listed in the output so they can be fixed by hand.
import { writeFileSync, existsSync, readFileSync } from "node:fs";
import { CITIES } from "../data/seeds.mjs";

const OUT = new URL("../data/places.json", import.meta.url);
const MAX_KM = 25;
const cache = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const km = (a, b, c, d) => {
  const R = 6371, t = (x) => (x * Math.PI) / 180;
  const h = Math.sin(t(c - a) / 2) ** 2 + Math.cos(t(a)) * Math.cos(t(c)) * Math.sin(t(d - b) / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

const out = {};
const missing = [];
for (const city of CITIES) {
  out[city.id] = [];
  for (const [slot, name, query, indoor, blurb] of city.places) {
    const key = `${city.id}|${name}`;
    let hit = (cache[city.id] || []).find((p) => p.name === name && p.query === query);
    if (!hit) {
      const url = `https://nominatim.openstreetmap.org/search?format=json&limit=5&q=${encodeURIComponent(query)}`;
      const res = await fetch(url, { headers: { "User-Agent": "oneday-build/0.1 (static site build)" } });
      const list = res.ok ? await res.json() : [];
      await sleep(1100);
      const near = list.map((r) => ({ r, d: km(city.lat, city.lon, +r.lat, +r.lon) })).filter((x) => x.d <= MAX_KM).sort((a, b) => a.d - b.d)[0];
      if (!near) { missing.push(key); continue; }
      hit = { name, query, lat: +(+near.r.lat).toFixed(5), lon: +(+near.r.lon).toFixed(5), osm: `https://www.openstreetmap.org/${near.r.osm_type}/${near.r.osm_id}` };
    }
    out[city.id].push({ ...hit, slot, indoor, blurb });
  }
}
writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n");
console.log(`places.json written. Missing: ${missing.length ? missing.join(", ") : "none"}`);
