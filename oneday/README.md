# Oneday

Open it in any city and get one route for today. No questions and no chat box: Oneday reads the city's hour, the hourly rain forecast and the sunset, picks one place for each part of the day, and draws the route on a two-ink printed map (blue is the city, pink is your day). At night the line you walked becomes a postcard, and the postcards collect into an atlas.

## What's in it

- **20 cities**: Lisbon, Porto, Barcelona, Paris, Rome, Amsterdam, London, Kyoto, Tokyo, New York, Athens, Copenhagen, Venice, Naples, Istanbul, Singapore, Seoul, Berlin, Mexico City and San Francisco. Each has about a dozen hand-picked places, checked in OpenStreetMap.
- **Real printed maps.** Water, parks, streets and railways come from OpenStreetMap vector tiles, simplified per city into `data/maps/{city}.json` and rendered as SVG. The map flies between stops, and the route draws itself in.
- **Route engine** (`assets/app.js`):
  - Every combination of places is ranked by the total walk. The shortest becomes the day, and "Another day" steps down the ranking.
  - When a slot is wet, only places that work in the rain are used. Swapping a stop rotates through the places that fit best between its neighbours.
  - Times follow the real sunset.
  - It runs in the city's own time zone. Late in the day it plans only what is left; at night it plans tomorrow.
- **Controls**: Today/Tomorrow, pace (3, 5 or 6 stops), and "Back by" 15:00/17:00/19:00 for cruise port days and layovers. Each step shows the walk or ride time, and Directions opens Apple or Google Maps.
- **Closing**: a postcard that flips over on screen, a 1800×1200 PNG to save or share, and the atlas (`/atlas/`). The atlas is kept in the browser's local storage.
- **Interface languages**: English, 中文, 日本語 and Español. Place notes are in English.
- **Installable and works offline**: there is a manifest and a service worker. Pages, maps and fonts are cached; weather is always fetched live.
- **Search pages**: 5 per city (live, one-day, rainy-day, sunny-day, slow-day). They carry TouristTrip JSON-LD, share cards, `sitemap.xml`, `robots.txt` and `llms.txt`.

## Build

- Build the site with `node oneday/build.mjs`. It has no dependencies and writes `oneday/dist` (103 pages).
- Set the canonical origin with `SITE=https://your-domain`. The default `https://oneday.city` is a placeholder.
- To deploy on Cloudflare Pages, use the build command `node oneday/build.mjs` and the output directory `oneday/dist`. `_headers` sets the cache rules.

## Data pipeline (only when places change)

1. `node oneday/scripts/geocode.mjs` looks up each place in `data/seeds.mjs` with Nominatim and writes `data/places.json`.
2. `node oneday/scripts/basemap.mjs [city …]` builds the base maps from OpenFreeMap tiles.
3. `node oneday/scripts/og.mjs` renders share cards and icons. It needs Playwright and a local server on `dist`.

## Before a commercial launch

- **Open-Meteo**: the free API is for non-commercial use, so a paid plan is needed.
- **OpenFreeMap**: tiles are only used at build time, and attribution is in the footer.
- **Not built yet**: paid prints and the year atlas, booking links, translated place notes, and a native app.
