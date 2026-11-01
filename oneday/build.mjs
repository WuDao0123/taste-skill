// Builds the static Oneday site into oneday/dist. No dependencies: `node oneday/build.mjs`.
// SITE sets the canonical origin (default https://oneday.city, a placeholder until a domain is chosen).
import { mkdirSync, writeFileSync, readFileSync, copyFileSync, rmSync, existsSync, readdirSync } from "node:fs";
import { CITIES, SLOTS } from "./data/seeds.mjs";

const ROOT = new URL("./", import.meta.url);
const DIST = new URL("./dist/", ROOT);
const SITE = (process.env.SITE || "https://oneday.city").replace(/\/$/, "");
const PLACES = JSON.parse(readFileSync(new URL("./data/places.json", ROOT), "utf8"));
const MAPS = Object.fromEntries(CITIES.filter((c) => existsSync(new URL(`./data/maps/${c.id}.json`, ROOT))).map((c) => [c.id, JSON.parse(readFileSync(new URL(`./data/maps/${c.id}.json`, ROOT), "utf8"))]));
const TODAY = new Date().toISOString().slice(0, 10);
const V = Date.now().toString(36); // cache-buster for assets

// Time zone and temperature unit per city (the client also uses them when the weather service is down).
const TZ = { lisbon: "Europe/Lisbon", porto: "Europe/Lisbon", barcelona: "Europe/Madrid", paris: "Europe/Paris", rome: "Europe/Rome", amsterdam: "Europe/Amsterdam", london: "Europe/London", kyoto: "Asia/Tokyo", tokyo: "Asia/Tokyo", "new-york": "America/New_York", athens: "Europe/Athens", copenhagen: "Europe/Copenhagen", venice: "Europe/Rome", naples: "Europe/Rome", istanbul: "Europe/Istanbul", singapore: "Asia/Singapore", seoul: "Asia/Seoul", berlin: "Europe/Berlin", "mexico-city": "America/Mexico_City", "san-francisco": "America/Los_Angeles" };
const FAHRENHEIT = new Set(["new-york", "san-francisco"]);

const SCENARIOS = {
  "one-day": { tab: "One day", title: (c) => `One day in ${c}: the one-day itinerary, timed to sunset`, h1: (c) => `One day in ${c}. <em>One route.</em>`, intro: (c) => `Five stops in ${c}, from the first coffee to dinner, each one close to the last and timed around the sunset. Open it on the day and it re-plans for the live weather and the hour.` },
  "rainy-day": { tab: "Rainy day", title: (c) => `What to do in ${c} on a rainy day: one route`, h1: (c) => `${c} in the rain. <em>Still a good day.</em>`, intro: (c) => `Rain from late morning to early afternoon? This route keeps you under a roof while it pours, takes you outside once it clears, and still finds the sunset.` },
  "sunny-day": { tab: "Sunny day", title: (c) => `${c} on a sunny day: six stops, sunrise coffee to sunset`, h1: (c) => `A clear day in ${c}. <em>Use all of it.</em>`, intro: (c) => `Six stops, a long walk after lunch and the best view at sunset. Built for a clear day with nothing in the way.` },
  "slow-day": { tab: "Slow day", title: (c) => `A slow day in ${c}: three stops, no rush`, h1: (c) => `A slow day in ${c}. <em>Three stops.</em>`, intro: (c) => `Coffee, lunch and the sunset. Nothing else to plan, nowhere to hurry.` },
};
const PACE = { "one-day": ["coffee", "indoor", "lunch", "sunset", "dinner"], "rainy-day": ["coffee", "indoor", "lunch", "sunset", "dinner"], "sunny-day": SLOTS, "slow-day": ["coffee", "lunch", "sunset"] };
const TIMES = { coffee: "09:30", indoor: "11:00", lunch: "13:00", walk: "15:00", sunset: "Sunset", dinner: "20:00" };
const LABEL = { coffee: "Coffee", indoor: "Inside", lunch: "Lunch", walk: "Walk", sunset: "Sunset", dinner: "Dinner" };

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const strip = (s) => s.replace(/<[^>]+>/g, "");
const json = (o) => JSON.stringify(o).replace(/</g, "\\u003c");

function staticRoute(cityId, scn) { // same ranking as the client: shortest total walk, rain-proof where it rains
  const list = PLACES[cityId];
  const d = (a, b) => Math.hypot(a.lat - b.lat, (a.lon - b.lon) * Math.cos(a.lat * Math.PI / 180));
  const slots = PACE[scn].filter((x) => list.some((p) => p.slot === x));
  const cands = slots.map((x) => { const all = list.filter((p) => p.slot === x), dry = all.filter((p) => p.indoor);
    return scn === "rainy-day" && ["indoor", "lunch", "walk"].includes(x) && dry.length ? dry : all; });
  let best = null;
  (function walk(i, pick, total) {
    if (best && total >= best.total) return;
    if (i === slots.length) { best = { pick, total }; return; }
    for (const p of cands[i]) walk(i + 1, [...pick, p], total + (i ? d(pick[i - 1], p) : 0));
  })(0, [], 0);
  return slots.map((slot, i) => ({ slot, place: best.pick[i] }));
}

// ---------- map thumbnails (build time, from the city's base map) ----------
function parseD(d) { // "M x y l dx dy … z" → [{pts, closed}]
  const out = []; let cur = null, x = 0, y = 0;
  for (const m of d.matchAll(/([Ml])(-?\d+) (-?\d+)|z/g)) {
    if (m[0] === "z") { if (cur) cur.closed = true; continue; }
    if (m[1] === "M") { x = +m[2]; y = +m[3]; cur = { pts: [[x, y]], closed: false }; out.push(cur); } else { x += +m[2]; y += +m[3]; cur.pts.push([x, y]); }
  }
  return out;
}
function dp(pts, tol) {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length); keep[0] = keep[pts.length - 1] = 1; const st = [[0, pts.length - 1]];
  while (st.length) { const [a, b] = st.pop(); let md = 0, mi = -1; const [ax, ay] = pts[a], [bx, by] = pts[b], dx = bx - ax, dy = by - ay, L = Math.hypot(dx, dy) || 1;
    for (let i = a + 1; i < b; i++) { const v = Math.abs(dy * pts[i][0] - dx * pts[i][1] + bx * ay - by * ax) / L; if (v > md) { md = v; mi = i; } }
    if (md > tol) { keep[mi] = 1; st.push([a, mi], [mi, b]); } }
  return pts.filter((_, i) => keep[i]);
}
const proj = (city) => { const kx = Math.cos(city.lat * Math.PI / 180) * 111320, ky = 110540; return (p) => [(p.lon - city.lon) * kx, -(p.lat - city.lat) * ky]; };
function curve(pts) { // the same gentle bow the client draws between stops
  let d = `M${pts[0][0].toFixed(0)} ${pts[0][1].toFixed(0)}`;
  for (let i = 1; i < pts.length; i++) { const [ax, ay] = pts[i - 1], [bx, by] = pts[i], k = (i % 2 ? 1 : -1) * 0.18;
    d += `Q${((ax + bx) / 2 - (by - ay) * k).toFixed(0)} ${((ay + by) / 2 + (bx - ax) * k).toFixed(0)} ${bx.toFixed(0)} ${by.toFixed(0)}`; }
  return d;
}
function thumb(city, { size = 1, scn = "one-day", minSide = 2600, layers = ["water", "major"], cls = "", detail = 120 } = {}) {
  const m = MAPS[city.id]; if (!m) return "";
  const P = proj(city), stops = staticRoute(city.id, scn).map((s) => P(s.place));
  const xs = stops.map((p) => p[0]), ys = stops.map((p) => p[1]);
  const cx = (Math.min(...xs) + Math.max(...xs)) / 2, cy = (Math.min(...ys) + Math.max(...ys)) / 2;
  const side = Math.max(minSide, (Math.max(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys))) * 1.5) * size;
  const x0 = cx - side / 2, y0 = cy - side / 2, N = (p) => [Math.round((p[0] - x0) / side * 200), Math.round((p[1] - y0) / side * 200)];
  const tol = side / detail, inView = (pts) => pts.some(([x, y]) => x > x0 - side * .05 && x < x0 + side * 1.05 && y > y0 - side * .05 && y < y0 + side * 1.05);
  const layer = (name) => parseD(m[name] || "").filter((sg) => inView(sg.pts)).map((sg) => {
    const q = dp(sg.pts, tol).map(N).filter((p, i, a) => !i || p[0] !== a[i - 1][0] || p[1] !== a[i - 1][1]);
    if (q.length < (sg.closed ? 3 : 2)) return "";
    return "M" + q.map((p) => p.join(" ")).join("L") + (sg.closed ? "Z" : "");
  }).join("");
  const body = { park: `<path class="m-park" d="${layer("park")}"/>`, water: `<path class="m-water" d="${layer("water")}"/>`, minor: `<path class="m-minor" vector-effect="non-scaling-stroke" d="${layer("minor")}"/>`, major: `<path class="m-major" vector-effect="non-scaling-stroke" d="${layer("major")}"/>` };
  const pts = stops.map(N), route = curve(pts);
  return `<svg class="${cls}" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${layers.map((l) => body[l]).join("")}<path class="r-case" vector-effect="non-scaling-stroke" d="${route}"/><path class="r-line" vector-effect="non-scaling-stroke" d="${route}"/>${pts.map((p) => `<circle cx="${p[0]}" cy="${p[1]}" r="3.4" fill="var(--pink)" stroke="var(--paper-hi)" stroke-width="2" vector-effect="non-scaling-stroke"/>`).join("")}</svg>`;
}

// ---------- page shell ----------
const SUN = `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="14" r="7" fill="var(--pink)"/><path d="M2 14h20" stroke="var(--ink)" stroke-width="1.6"/><rect x="2" y="14.8" width="20" height="9" fill="var(--paper)"/><path d="M5 18h14M8 21h8" stroke="var(--blue)" stroke-width="1.4" stroke-linecap="round"/></svg>`;
const head = ({ title, desc, path, jsonld, preload, og }) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${esc(title)}</title><meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${SITE}${path}">
<meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${SITE}${path}"><meta property="og:image" content="${SITE}/assets/og/${og || "home"}.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#f1ede4" media="(prefers-color-scheme: light)"><meta name="theme-color" content="#0d1020" media="(prefers-color-scheme: dark)">
<link rel="manifest" href="/manifest.webmanifest"><link rel="icon" href="/assets/icon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/assets/icon-192.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@500;600&family=Instrument+Serif:ital@0;1&display=swap">
${preload ? `<link rel="preload" href="${preload}" as="fetch" crossorigin>` : ""}
<link rel="stylesheet" href="/assets/style.css?v=${V}">
${jsonld ? `<script type="application/ld+json">${json(jsonld)}</script>` : ""}
</head><body>
<header class="top"><a class="logo" href="/">${SUN}Oneday</a><nav><a class="hide-s" href="/#cities" data-i18n="cities">Cities</a><a href="/atlas/"><span data-i18n="atlas">Atlas</span><span class="atlas-n" id="atlasN" hidden></span></a>
<select class="lang" id="lang" aria-label="Language"><option value="en">EN</option><option value="zh">中文</option><option value="ja">日本語</option><option value="es">ES</option></select></nav></header>`;
const foot = `<footer class="foot"><span>Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors (ODbL), tiles by <a href="https://openfreemap.org">OpenFreeMap</a>. Weather by <a href="https://open-meteo.com/">Open-Meteo</a>. Places checked ${TODAY}.</span><span>Opening hours change. Check before you go.</span></footer>
<script src="/assets/i18n.js?v=${V}"></script><script src="/assets/shell.js?v=${V}"></script></body></html>`;

const SWAP_ICON = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13.5 6.5A5.5 5.5 0 0 0 3.2 4.6M2.5 9.5a5.5 5.5 0 0 0 10.3 1.9"/><path d="M3 2v3h3M13 14v-3h-3"/></svg>`;

function appMarkup(city, scn, route) {
  const live = !scn;
  return `<div class="stage">
<div class="mapwrap" id="mapwrap">
  <svg class="map" id="map" aria-label="Map of the route"></svg>
  <div class="markers" id="markers"></div>
  <div class="maphead"><p class="kicker" id="kicker">${esc(city.country)}</p>${live ? `<h1 class="city-name">${esc(city.name)}</h1>` : `<p class="city-name">${esc(city.name)}</p>`}</div>
  <button class="fit" id="fit" hidden data-i18n="fit">Whole route</button>
  <a class="osm" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap</a>
</div>
<aside class="panel">
<section class="view" id="plan">
  <p class="lede" id="lede">${live ? "Here's today." : esc(strip(SCENARIOS[scn].h1(city.name)))}</p>
  <div><div class="ribbon"><svg id="ribbon" aria-hidden="true"></svg></div>
  <div class="rb-legend"><span><i style="background:var(--blue)"></i><span data-i18n="lgRain">Rain chance</span></span><span><i style="background:var(--pink);border-radius:50%"></i><span data-i18n="lgStops">Your stops</span></span><span id="lgSun"></span></div></div>
  <div class="controls">
    ${live ? `<div class="seg" id="daySeg"><button data-day="0" aria-pressed="true" data-i18n="today">Today</button><button data-day="1" aria-pressed="false" data-i18n="tomorrow">Tomorrow</button></div>` : ""}
    <div class="seg" id="paceSeg"><button data-pace="0" data-i18n="slow">Slow</button><button data-pace="1" data-i18n="balanced">Balanced</button><button data-pace="2" data-i18n="full">Full</button></div>
    ${live ? `<button class="cap" id="backBy" aria-pressed="false">Back by —</button>` : ""}
  </div>
  <ol class="stops" id="stops">${route.map((s, i) => `<li class="stop"><span class="t">${TIMES[s.slot]}<i>${LABEL[s.slot]}</i></span><div><h3><span class="n">${i + 1}</span>${esc(s.place.name)}</h3><p>${esc(s.place.blurb)}</p></div><span></span></li>`).join("")}</ol>
  <div class="actions"><button class="cta" id="start"><span data-i18n="start">Start the day</span><small id="sum"></small></button>
  <button class="ghost" id="reroll">${SWAP_ICON}<span data-i18n="another">Another day</span></button>
  ${live ? "" : `<p class="note"><a href="/${city.id}/" data-i18n="planLive">Plan it live for today →</a></p>`}</div>
</section>
<section class="view" id="live" hidden>
  <div class="prog" id="prog"></div>
  <p class="kicker" id="liveK"></p>
  <h2 class="now-name" id="nowName"></h2>
  <p class="now-blurb" id="nowBlurb"></p>
  <div class="next" id="nextBox"></div>
  <div class="row"><a class="ghost" id="dirs" target="_blank" rel="noopener" data-i18n="directions">Directions ↗</a><button class="ghost" id="skip" data-i18n="skip">Skip</button></div>
  <button class="cta" id="here"><span data-i18n="done">Done here</span><small>→</small></button>
</section>
<section class="view" id="end" hidden>
  <h2 class="closing" id="closing">That was <em>the day.</em></h2>
  <div class="pc" id="pc" role="button" tabindex="0" aria-label="Postcard. Tap to turn it over">
    <div class="pc-in">
      <div class="pc-face pc-front"><svg id="pcMap" preserveAspectRatio="xMidYMid slice" aria-hidden="true"></svg><h4>${esc(city.name)}</h4><div class="stamp" id="stamp"></div><p class="kicker" id="pcK"></p></div>
      <div class="pc-face pc-back"><ol id="pcList"></ol><div class="addr"><b id="pcTo">${esc(city.name)}</b><i></i><i></i><p class="kicker">oneday</p></div></div>
    </div>
  </div>
  <p class="hint" data-i18n="flip">Tap the card to turn it over</p>
  <div class="stats"><div><b id="sStops"></b><span data-i18n="stopsW">stops</span></div><div><b id="sKm"></b>km</div><div><b id="sHrs"></b><span data-i18n="hoursW">hours</span></div></div>
  <div class="actions"><button class="cta" id="save"><span data-i18n="save">Save the postcard</span><small>PNG</small></button>
  <div class="row"><a class="ghost" href="/atlas/" data-i18n="atlasLink">Your atlas</a><button class="ghost" id="again" data-i18n="again">Plan another day</button></div></div>
</section>
</aside>
</div>`;
}

function cityPage(city, scn) {
  const path = scn ? `/${city.id}/${scn}/` : `/${city.id}/`;
  const S = scn ? SCENARIOS[scn] : null;
  const title = S ? `${S.title(city.name)} | Oneday` : `One day in ${city.name}, planned for today's weather | Oneday`;
  const desc = S ? strip(S.intro(city.name)) : `Open Oneday in ${city.name} and get one route for today: the live rain forecast, timed to the sunset, ending as a postcard of the line you walked.`;
  const route = staticRoute(city.id, scn || "one-day");
  const jsonld = { "@context": "https://schema.org", "@type": "TouristTrip", name: strip(S ? S.title(city.name) : `One day in ${city.name}`), description: desc, touristType: "Day trip",
    itinerary: { "@type": "ItemList", itemListElement: route.map((s, i) => ({ "@type": "ListItem", position: i + 1, item: { "@type": "Place", name: s.place.name, description: s.place.blurb, geo: { "@type": "GeoCoordinates", latitude: s.place.lat, longitude: s.place.lon }, hasMap: s.place.osm } })) } };
  const data = { city: { id: city.id, name: city.name, country: city.country, lat: city.lat, lon: city.lon, tz: TZ[city.id], f: FAHRENHEIT.has(city.id) }, places: PLACES[city.id], scenario: scn || "live" };
  const others = CITIES.filter((c) => c.id !== city.id);
  return `${head({ title, desc, path, jsonld, preload: `/maps/${city.id}.json`, og: city.id })}
<main>
${appMarkup(city, scn, route)}
<section class="read">
  <div class="intro">
    ${S ? `<h1>${S.h1(esc(city.name))}</h1>` : `<h2 class="big">One day in ${esc(city.name)}. <em>Planned for today.</em></h2>`}
    <p>${S ? esc(S.intro(city.name)) : `No questions and no chat box. Oneday reads today's rain forecast, the hour and the sunset in ${esc(city.name)} and hands you one route. Change the pace, swap a stop, or ask for another day. At night the line you walked becomes a postcard.`}</p>
    <div class="tabs"><a href="/${city.id}/"${!scn ? ' aria-current="page"' : ""}>Today, live</a>${Object.entries(SCENARIOS).map(([k, v]) => `<a href="/${city.id}/${k}/"${scn === k ? ' aria-current="page"' : ""}>${v.tab}</a>`).join("")}</div>
  </div>
  <div>
    <h2>The route</h2>
    <ol class="idx">${route.map((s) => `<li><span class="k">${TIMES[s.slot]} · ${LABEL[s.slot]}</span><div><b>${esc(s.place.name)}</b><small>${esc(s.place.blurb)}</small></div><a href="${s.place.osm}">Map</a></li>`).join("")}</ol>
    <h2>Every place Oneday can pick in ${esc(city.name)}</h2>
    <ul class="idx">${PLACES[city.id].map((p) => `<li><span class="k">${LABEL[p.slot]}</span><div><b>${esc(p.name)}</b><small>${esc(p.blurb)}${p.indoor ? " Works in the rain." : ""}</small></div><a href="${p.osm}">Map</a></li>`).join("")}</ul>
    <h2>Other cities</h2>
    <div class="tabs">${others.map((c) => `<a href="/${c.id}/${scn ? scn + "/" : ""}">${esc(c.name)}</a>`).join("")}</div>
  </div>
</section>
</main>
<script type="application/json" id="oneday-data">${json(data)}</script>
<script src="/assets/mapkit.js?v=${V}" defer></script><script src="/assets/app.js?v=${V}" defer></script>
${foot}`;
}

function ribbonSample() { // a static day ribbon for the home page
  const W = 320, x = (h) => 8 + (h - 7) / 17 * (W - 16), rain = { 10: 30, 11: 70, 12: 85, 13: 60, 14: 25 };
  let s = `<svg viewBox="0 0 ${W} 80" aria-hidden="true"><line x1="8" y1="52" x2="${W - 8}" y2="52" class="rb-tick"/>`;
  for (const [h, p] of Object.entries(rain)) s += `<rect class="rb-rain" x="${(x(+h) + 1).toFixed(1)}" y="${(52 - p * .36).toFixed(1)}" width="${(x(+h + 1) - x(+h) - 2).toFixed(1)}" height="${(p * .36).toFixed(1)}" rx="1.5" opacity="${(.3 + p / 140).toFixed(2)}"/>`;
  for (const h of [9, 12, 15, 18, 21]) s += `<text class="rb-hour" x="${x(h)}" y="72" text-anchor="middle">${h}:00</text>`;
  s += `<path class="rb-sun" d="M${x(18.6) - 7} 52a7 7 0 0 1 14 0z"/>`;
  [[9.5, 1], [11, 2], [13, 3], [18.3, 4], [20, 5]].forEach(([h, n]) => (s += `<circle class="rb-stop" cx="${x(h)}" cy="52" r="7.5" stroke="var(--paper-hi)" stroke-width="2"/><text class="rb-stopn" x="${x(h)}" y="55" text-anchor="middle">${n}</text>`));
  return s + "</svg>";
}

function homePage() {
  const cities = CITIES.filter((c) => PLACES[c.id]?.length).map((c) => ({ id: c.id, name: c.name, country: c.country, lat: c.lat, lon: c.lon }));
  const feature = ["lisbon", "kyoto", "new-york", "venice", "istanbul", "paris"].map((id) => CITIES.find((c) => c.id === id));
  return `${head({ title: "Oneday — open it in any city, get one day", desc: "No chat box, no lists. Oneday reads the weather, the hour and the sunset and hands you one route through the city. At night it becomes a postcard of the line you walked.", path: "/", preload: "/maps/lisbon.json" })}
<main>
<section class="hero">
  <div>
    <p class="kicker" style="margin-bottom:18px">${cities.length} cities · live weather · no typing</p>
    <h1>Open it in any city. <em>Get one day.</em></h1>
    <p>Trip planners are chat boxes and endless lists. Oneday already knows the weather, the hour and when the sun goes down. It hands you one route, lets you slow it down or swap a stop, and at night prints the line you walked as a two-ink postcard.</p>
    <div class="actions"><button class="cta" id="near"><span>Plan today near me</span><small>→</small></button><a class="ghost" href="#cities">Or pick a city</a></div>
    <p class="note" id="nearMsg" style="margin-top:12px"></p>
  </div>
  <a class="heromap" id="heromap" href="/lisbon/">${thumb(feature[0], { minSide: 3200, layers: ["park", "water", "major"] })}<div class="cap-l"><b id="heroName">${feature[0].name}</b><span class="kicker" id="heroK">Today · 5 stops</span></div></a>
</section>
<section class="ticker">
  <p class="kicker">How it works</p>
  <div class="three">
    <article><p class="kicker">01</p><h3>It reads the day.</h3><p>Rain by the hour, the temperature and the exact sunset for the city you are in. Nothing to type.</p><div class="ill">${ribbonSample()}</div></article>
    <article><p class="kicker">02</p><h3>It picks one route.</h3><p>One place per part of the day, indoors when it pours, each stop a short walk from the last.</p><div class="ill" style="border-radius:14px;overflow:hidden;aspect-ratio:16/9;position:relative">${thumb(CITIES.find((c) => c.id === "kyoto"), { minSide: 2400, layers: ["park", "water", "minor", "major"] }).replace("<svg ", '<svg style="position:absolute;inset:0;width:100%;height:100%" ')}</div></article>
    <article><p class="kicker">03</p><h3>It closes the day.</h3><p>When you are done, the line you walked becomes a postcard. Keep them and a year becomes an atlas.</p><div class="ill"><div class="pc-face" style="position:relative;aspect-ratio:3/2;transform:rotate(-2deg)">${thumb(CITIES.find((c) => c.id === "venice"), { minSide: 2000, layers: ["park", "water", "minor", "major"] }).replace("<svg ", '<svg style="position:absolute;inset:0;width:100%;height:100%" ')}<h4 style="position:absolute;left:12px;top:8px;margin:0;font:400 30px/1 var(--serif)">Venice</h4><div class="stamp" style="width:52px;height:52px;font-size:7px">1 · XI<br>2026</div></div></div></article>
  </div>
</section>
<section class="grid" id="cities"><h2>${cities.length} cities, one day each.</h2>
<div class="cities">${cities.map((c) => `<a class="cityc" href="/${c.id}/">${thumb(c)}<div><b>${esc(c.name)}</b><small>${esc(c.country)}</small></div></a>`).join("")}</div></section>
</main>
<script type="application/json" id="home-data">${json({ cities, feature: feature.map((c) => ({ id: c.id, name: c.name, lat: c.lat, lon: c.lon, n: staticRoute(c.id, "one-day").length, route: staticRoute(c.id, "one-day").map((x) => ({ lat: x.place.lat, lon: x.place.lon })) })) })}</script>
<script src="/assets/mapkit.js?v=${V}" defer></script><script src="/assets/home.js?v=${V}" defer></script>
<style>.heromap .rt{transition:stroke-dashoffset 1.8s var(--ease)}</style>
${foot}`;
}

function atlasPage() {
  const cities = Object.fromEntries(CITIES.map((c) => [c.id, { name: c.name, lat: c.lat, lon: c.lon }]));
  return `${head({ title: "Your atlas | Oneday", desc: "Every day you close with Oneday, kept as a postcard.", path: "/atlas/" })}
<main class="atlas">
  <h1 data-i18n-html="atlasH">Your <em>atlas.</em></h1>
  <p class="lead" data-i18n="atlasLead">Every day you close becomes a postcard here. It stays on this device.</p>
  <div class="cards" id="cards"></div>
  <div class="empty" id="empty" hidden><p class="lead" data-i18n="atlasEmpty" style="margin:0">Nothing here yet. Close a day and its postcard lands here.</p><a class="cta" href="/#cities" style="max-width:360px"><span data-i18n="pickCity">Pick a city</span><small>→</small></a></div>
</main>
<script type="application/json" id="atlas-data">${json(cities)}</script>
<script src="/assets/mapkit.js?v=${V}" defer></script><script src="/assets/atlas.js?v=${V}" defer></script>
${foot}`;
}

// ---------- write ----------
rmSync(DIST, { recursive: true, force: true });
const write = (p, s) => { const u = new URL(p, DIST); mkdirSync(new URL("./", u), { recursive: true }); writeFileSync(u, s); };
const copyDir = (from, to) => { mkdirSync(new URL(to, DIST), { recursive: true }); for (const f of readdirSync(new URL(from, ROOT), { withFileTypes: true })) { if (f.isDirectory()) copyDir(`${from}${f.name}/`, `${to}${f.name}/`); else copyFileSync(new URL(`${from}${f.name}`, ROOT), new URL(`${to}${f.name}`, DIST)); } };
copyDir("assets/", "assets/");
for (const id of Object.keys(MAPS)) write(`maps/${id}.json`, JSON.stringify(MAPS[id]));
write("index.html", homePage());
write("atlas/index.html", atlasPage());
const urls = ["/"];
for (const c of CITIES) {
  if (!PLACES[c.id]?.length) continue;
  write(`${c.id}/index.html`, cityPage(c)); urls.push(`/${c.id}/`);
  for (const s of Object.keys(SCENARIOS)) { write(`${c.id}/${s}/index.html`, cityPage(c, s)); urls.push(`/${c.id}/${s}/`); }
}
write("manifest.webmanifest", JSON.stringify({ name: "Oneday", short_name: "Oneday", description: "Open it in any city, get one day.", start_url: "/", display: "standalone", background_color: "#f1ede4", theme_color: "#f1ede4",
  icons: [{ src: "/assets/icon-192.png", sizes: "192x192", type: "image/png" }, { src: "/assets/icon-512.png", sizes: "512x512", type: "image/png" }, { src: "/assets/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }] }));
write("sw.js", readFileSync(new URL("./assets/sw.js", ROOT), "utf8").replace("__V__", V));
// Share-card sources, rendered to assets/og/*.jpg by scripts/og.mjs (not linked, not in the sitemap).
const ogPage = (c, h1, sub) => `<!doctype html><html><head><meta charset="utf-8"><meta name="robots" content="noindex"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@500;600&family=Instrument+Serif:ital@0;1&display=swap"><link rel="stylesheet" href="/assets/style.css?v=${V}">
<style>:root{color-scheme:light}body{width:1200px;height:630px;overflow:hidden;display:grid;grid-template-columns:630px 1fr;background:#f1ede4}body::before{opacity:.2}.m{position:relative;overflow:hidden}.m svg{position:absolute;inset:0;width:100%;height:100%}.t{padding:56px 54px;display:flex;flex-direction:column;justify-content:space-between}.t h1{font:400 ${h1.length > 12 ? 104 : 136}px/.86 var(--serif);letter-spacing:-.03em;margin:0;text-shadow:4px 4px 0 rgba(255,61,151,.55)}.t h1 em{color:var(--pink)}.t p{font:400 26px/1.35 var(--sans);color:var(--ink-2);margin:18px 0 0}.logo{font-size:38px}.logo svg{width:32px;height:32px}</style></head>
<body><div class="m">${thumb(c, { minSide: 2800, layers: ["park", "water", "minor", "major"], detail: 400 })}</div><div class="t"><p class="kicker" style="font-size:18px">One day in</p><div><h1>${h1}</h1><p>${sub}</p></div><span class="logo">${SUN}Oneday</span></div></body></html>`;
for (const c of CITIES) if (PLACES[c.id]?.length) write(`og/${c.id}.html`, ogPage(c, esc(c.name), `${staticRoute(c.id, "one-day").length} stops, live weather, timed to the sunset. Ends as a postcard.`));
write("og/home.html", ogPage(CITIES[0], "Any city. <em>One day.</em>", "No typing. One route for today, ending as a postcard of the line you walked.").replace('One day in', 'Oneday'));
write("404.html", `${head({ title: "Not found | Oneday", desc: "This page does not exist.", path: "/404" })}<main class="atlas"><h1>Lost? <em>Good start.</em></h1><p class="lead">This page does not exist. Pick a city instead.</p><a class="cta" href="/#cities" style="max-width:360px"><span>All cities</span><small>→</small></a></main>${foot}`);
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((u) => `<url><loc>${SITE}${u}</loc><lastmod>${TODAY}</lastmod></url>`).join("")}</urlset>\n`);
write("robots.txt", `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
write("llms.txt", `# Oneday\n\n> Open it in any city and get one route for today, planned around the live weather and sunset, ending as a postcard of the line you walked.\n\n## Cities\n\n${CITIES.filter((c) => PLACES[c.id]?.length).map((c) => `- [One day in ${c.name}](${SITE}/${c.id}/one-day/): ${staticRoute(c.id, "one-day").map((s) => s.place.name).join(" → ")}`).join("\n")}\n`);
write("_headers", `/maps/*\n  Cache-Control: public, max-age=604800\n/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n/sw.js\n  Cache-Control: no-cache\n`);
console.log(`Built ${urls.length + 2} pages into oneday/dist`);
