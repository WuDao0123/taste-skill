// Builds the static Oneday site into oneday/dist. No dependencies: `node oneday/build.mjs`.
// SITE sets the canonical origin (default https://oneday.city, a placeholder until a domain is chosen).
import { mkdirSync, writeFileSync, readFileSync, copyFileSync, rmSync } from "node:fs";
import { CITIES, SLOTS } from "./data/seeds.mjs";

const ROOT = new URL("./", import.meta.url);
const DIST = new URL("./dist/", ROOT);
const SITE = (process.env.SITE || "https://oneday.city").replace(/\/$/, "");
const PLACES = JSON.parse(readFileSync(new URL("./data/places.json", ROOT), "utf8"));
const TODAY = new Date().toISOString().slice(0, 10);

const SCENARIOS = {
  "one-day": { title: (c) => `One day in ${c}: a one-day itinerary`, h1: (c) => `One day in ${c}. <em>One route.</em>`, intro: (c) => `Five stops in ${c}, from the first coffee to dinner, timed around the sunset. Open it on the day and it re-plans for the live weather.` },
  "rainy-day": { title: (c) => `What to do in ${c} on a rainy day`, h1: (c) => `${c} in the rain. <em>Still a good day.</em>`, intro: (c) => `Rain from late morning to early afternoon? This route keeps you under a roof while it pours and outside once it clears.` },
  "sunny-day": { title: (c) => `${c} on a sunny day: one perfect route`, h1: (c) => `A dry day in ${c}. <em>Use all of it.</em>`, intro: (c) => `Six stops, a long walk after lunch and the best view at sunset. Built for a clear day.` },
  "slow-day": { title: (c) => `A slow day in ${c}: three stops, no rush`, h1: (c) => `A slow day in ${c}. <em>Three stops.</em>`, intro: (c) => `Coffee, lunch, sunset. Nothing else to plan.` },
};
const PACE = { "one-day": ["coffee", "indoor", "lunch", "sunset", "dinner"], "rainy-day": ["coffee", "indoor", "lunch", "sunset", "dinner"], "sunny-day": SLOTS, "slow-day": ["coffee", "lunch", "sunset"] };
const TIMES = { coffee: "09:30", indoor: "11:00", lunch: "13:00", walk: "15:00", sunset: "Sunset", dinner: "20:00" };
const LABEL = { coffee: "Coffee", indoor: "Inside", lunch: "Lunch", walk: "Walk", sunset: "Sunset", dinner: "Dinner" };

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const strip = (s) => s.replace(/<[^>]+>/g, "");

function staticRoute(cityId, scn) {
  const list = PLACES[cityId];
  const d = (a, b) => Math.hypot(a.lat - b.lat, (a.lon - b.lon) * Math.cos(a.lat * Math.PI / 180));
  let prev = null;
  return PACE[scn].map((slot) => {
    const wet = scn === "rainy-day" && ["indoor", "lunch", "walk"].includes(slot);
    const c = list.filter((p) => p.slot === slot).sort((a, b) => (wet ? b.indoor - a.indoor : 0) || (prev ? d(prev, a) - d(prev, b) : 0));
    prev = c[0] || prev;
    return { slot, place: c[0] };
  }).filter((s) => s.place);
}

const head = ({ title, desc, path, jsonld }) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${esc(title)}</title><meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${SITE}${path}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${SITE}${path}">
<meta name="theme-color" content="#eef0f2">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&family=IBM+Plex+Mono:wght@400;500&display=swap">
<link rel="stylesheet" href="/assets/style.css">
${jsonld ? `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ""}
</head><body>
<header class="top"><a class="logo" href="/"><i></i>Oneday</a><nav>${CITIES.slice(0, 5).map((c) => `<a href="/${c.id}/">${esc(c.name)}</a>`).join("")}<a href="/#cities">All cities</a></nav></header>`;
const foot = `<footer class="foot">Places from <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors (ODbL), checked ${TODAY}. Weather from <a href="https://open-meteo.com/">Open-Meteo</a>. Opening hours change; check before you go.</footer></body></html>`;

function appMarkup(city) {
  return `<div class="app"><div class="grain"></div>
<section class="v" id="plan">
  <div class="meta"><span id="clock">Today</span><span>${esc(city.country)}</span></div>
  <h2 class="city">${esc(city.name)}<span aria-hidden="true">${esc(city.name)}</span></h2>
  <div class="wx" id="wx"></div>
  <p class="lede" id="lede"></p>
  <div class="map"><svg id="map" viewBox="0 0 350 230" role="img" aria-label="Route map"></svg></div>
  <div class="pace"><div class="ends"><span>Slow</span><span id="paceLbl"></span><span>Full</span></div><input type="range" id="pace" min="0" max="2" step="1" aria-label="Pace"></div>
  <ol class="stops" id="stops"></ol>
  <button class="go" id="start"><span>Start the day</span><span id="sum"></span></button>
</section>
<section class="v" id="live" hidden>
  <div class="meta"><span>Now</span><span id="liveCount"></span></div>
  <div class="bar"><i id="prog"></i></div>
  <h2 class="now" id="nowName"></h2>
  <p class="next" id="nowNote"></p>
  <div class="map"><svg id="map2" viewBox="0 0 350 230" aria-hidden="true"></svg></div>
  <div class="row"><a class="ghost" id="nowMap" target="_blank" rel="noopener">Map</a><button class="ghost" id="skip">Skip</button><button class="go" id="here" style="flex:2"><span>Done here</span><span>→</span></button></div>
</section>
<section class="v" id="end" hidden>
  <div class="meta"><span>Day closed</span><span>${esc(city.name)}</span></div>
  <div class="card"><div class="hd"><h3>${esc(city.name)}</h3><div class="stamp" id="stamp"></div></div>
    <svg id="map3" viewBox="0 0 350 230" role="img" aria-label="Your day as one line"></svg>
    <div class="stats"><div><b id="sStops"></b>stops</div><div><b id="sKm"></b>km</div><div><b>1</b>city</div></div></div>
  <p class="closed">That was the day.</p>
  <button class="go" id="save"><span>Save the postcard</span><span>PNG</span></button>
  <button class="ghost" id="again">Plan another day</button>
  <p class="fine">Riso prints and a year atlas are coming.</p>
</section></div>`;
}

function cityPage(city, scn) {
  const path = scn ? `/${city.id}/${scn}/` : `/${city.id}/`;
  const S = scn ? SCENARIOS[scn] : null;
  const title = S ? `${S.title(city.name)} | Oneday` : `One day in ${city.name}, planned for today's weather | Oneday`;
  const desc = S ? strip(S.intro(city.name)) : `Open Oneday in ${city.name} and get one route for today: live rain forecast, timed to sunset, ending as a postcard of the line you walked.`;
  const route = staticRoute(city.id, scn || "one-day");
  const jsonld = { "@context": "https://schema.org", "@type": "TouristTrip", name: strip(S ? S.title(city.name) : `One day in ${city.name}`), touristType: "Day trip",
    itinerary: { "@type": "ItemList", itemListElement: route.map((s, i) => ({ "@type": "ListItem", position: i + 1, item: { "@type": "Place", name: s.place.name, geo: { "@type": "GeoCoordinates", latitude: s.place.lat, longitude: s.place.lon } } })) } };
  const data = { city: { id: city.id, name: city.name, country: city.country, lat: city.lat, lon: city.lon }, places: PLACES[city.id], scenario: scn || "live" };
  const others = CITIES.filter((c) => c.id !== city.id);
  return `${head({ title, desc, path, jsonld })}
<main class="layout">
${appMarkup(city)}
<section class="read">
  <h1>${S ? S.h1(esc(city.name)) : `One day in ${esc(city.name)}. <em>Planned for today.</em>`}</h1>
  <p>${S ? esc(S.intro(city.name)) : "No questions, no chat box. Oneday reads today's rain forecast and sunset for the city and hands you one route. Drag the pace slider or swap a stop. At night the line you walked becomes a postcard."}</p>
  <div class="chips"><a href="/${city.id}/"${!scn ? ' aria-current="page"' : ""}>Today, live</a>${Object.keys(SCENARIOS).map((k) => `<a href="/${city.id}/${k}/"${scn === k ? ' aria-current="page"' : ""}>${k.replace("-", " ")}</a>`).join("")}</div>
  <h2>The route</h2>
  <ol class="plist">${route.map((s) => `<li><span class="k">${TIMES[s.slot]}</span><div><b>${esc(s.place.name)}</b><small>${esc(s.place.blurb)}</small><a href="${s.place.osm}">map</a></div></li>`).join("")}</ol>
  <h2>Every place Oneday can pick in ${esc(city.name)}</h2>
  <ul class="plist">${PLACES[city.id].map((p) => `<li><span class="k">${LABEL[p.slot]}</span><div><b>${esc(p.name)}</b><small>${esc(p.blurb)}${p.indoor ? " Works in the rain." : ""}</small><a href="${p.osm}">map</a></div></li>`).join("")}</ul>
  <h2>Other cities</h2>
  <div class="chips">${others.map((c) => `<a href="/${c.id}/${scn ? scn + "/" : ""}">${esc(c.name)}</a>`).join("")}</div>
</section>
</main>
<script type="application/json" id="oneday-data">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>
<script src="/assets/app.js" defer></script>
${foot}`;
}

function homePage() {
  const cities = CITIES.map((c) => ({ id: c.id, lat: c.lat, lon: c.lon }));
  return `${head({ title: "Oneday: open it in any city, get one day", desc: "No chat box, no lists. Oneday reads the weather, the hour and the sunset and hands you one route through the city. At night it becomes a postcard of the line you walked.", path: "/" })}
<main class="layout" style="flex-direction:column;align-items:stretch">
<section class="read" style="max-width:760px">
  <h1 style="font-size:clamp(44px,9vw,88px)">Open it in any city. <em>Get one day.</em></h1>
  <p style="font-size:18px">Trip planners are chat boxes and long lists. Oneday already knows the weather, the hour and the sunset. It hands you one route, lets you slow it down or swap a stop, and at night turns the line you walked into a two-color postcard.</p>
  <div class="row" style="max-width:420px"><button class="go" id="near" style="flex:1"><span>Plan today near me</span><span>→</span></button></div>
  <p class="fine" id="nearMsg" style="text-align:left"></p>
</section>
<section class="read" style="max-width:none" id="cities"><h2>Cities</h2>
<div class="cities">${CITIES.map((c) => `<a href="/${c.id}/"><b>${esc(c.name)}</b><small>${esc(c.country)} · ${PLACES[c.id].length} places</small></a>`).join("")}</div></section>
</main>
<script>
(() => { const C = ${JSON.stringify(cities)}; const b = document.getElementById("near"), m = document.getElementById("nearMsg");
  b.onclick = () => { if (!navigator.geolocation) { m.textContent = "Pick a city below."; return; }
    m.textContent = "Finding you…";
    navigator.geolocation.getCurrentPosition((p) => { const d = (c) => Math.hypot(c.lat - p.coords.latitude, (c.lon - p.coords.longitude) * Math.cos(c.lat * Math.PI / 180));
      const c = C.slice().sort((a, z) => d(a) - d(z))[0]; location.href = "/" + c.id + "/"; }, () => { m.textContent = "Location is off. Pick a city below."; }); }; })();
</script>
${foot}`;
}

rmSync(DIST, { recursive: true, force: true });
const write = (p, s) => { const u = new URL(p, DIST); mkdirSync(new URL("./", u), { recursive: true }); writeFileSync(u, s); };
mkdirSync(new URL("assets/", DIST), { recursive: true });
for (const f of ["app.js", "style.css"]) copyFileSync(new URL(`./assets/${f}`, ROOT), new URL(`assets/${f}`, DIST));
write("index.html", homePage());
const urls = ["/"];
for (const c of CITIES) {
  if (!PLACES[c.id]?.length) continue;
  write(`${c.id}/index.html`, cityPage(c)); urls.push(`/${c.id}/`);
  for (const s of Object.keys(SCENARIOS)) { write(`${c.id}/${s}/index.html`, cityPage(c, s)); urls.push(`/${c.id}/${s}/`); }
}
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((u) => `<url><loc>${SITE}${u}</loc><lastmod>${TODAY}</lastmod></url>`).join("")}</urlset>\n`);
write("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
write("llms.txt", `# Oneday\n\n> Open it in any city and get one route for today, planned around the live weather and sunset.\n\n${CITIES.map((c) => `- [One day in ${c.name}](${SITE}/${c.id}/one-day/)`).join("\n")}\n`);
console.log(`Built ${urls.length} pages into oneday/dist`);
