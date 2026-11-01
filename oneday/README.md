# Oneday

Open it in any city and get one route for today. Oneday reads the live rain forecast and the sunset (Open-Meteo, no key needed), picks one place per time slot from a hand-checked list, keeps you indoors while it rains and nearby between stops, and closes the day as a two-color postcard of the line you walked.

- Build: `node oneday/build.mjs` (no dependencies). Output: `oneday/dist` (51 pages: home, 10 city pages, and 4 search pages per city: one-day, rainy-day, sunny-day, slow-day).
- Canonical domain: set `SITE=https://your-domain` when building. The default `https://oneday.city` is a placeholder.
- Places: `data/seeds.mjs` (names, slot, rain-proof flag, one-line note). `node oneday/scripts/geocode.mjs` checks each one in OpenStreetMap and writes coordinates and map links to `data/places.json`. A place that is not found within 25 km of the city is dropped.
- Hosting: any static host. Cloudflare Pages: build command `node oneday/build.mjs`, output directory `oneday/dist`.

Not built yet: paid prints and the year atlas, the trip pass, booking links, more languages, and the mobile app.
