// Offline support: pages, assets, base maps and fonts are served from cache first and refreshed
// in the background, so a day planned on hotel wifi still opens on the street.
const CACHE = "oneday-__V__";
self.addEventListener("install", (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(["/", "/atlas/"])).then(() => self.skipWaiting())); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  if (u.hostname === "api.open-meteo.com") return; // weather is always live
  const same = u.origin === location.origin, font = /fonts\.(googleapis|gstatic)\.com$/.test(u.hostname);
  if (!same && !font) return;
  e.respondWith(caches.open(CACHE).then(async (c) => {
    const hit = await c.match(e.request, { ignoreSearch: same && u.pathname.startsWith("/assets/") });
    const net = fetch(e.request).then((r) => { if (r.ok || r.type === "opaque") c.put(e.request, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
