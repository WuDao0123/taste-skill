// Renders share cards (assets/og/*.jpg) and app icons (assets/icon-*.png) from the built site.
// Dev-only: needs Playwright and a static server on dist, e.g. `npx serve oneday/dist -l 8787`.
// Usage: node oneday/scripts/og.mjs [http://localhost:8787]
import { createRequire } from "node:module";
import { readdirSync } from "node:fs";
const { chromium } = createRequire(import.meta.url)("playwright");
const ORIGIN = process.argv[2] || "http://localhost:8787";
const OUT = new URL("../assets/", import.meta.url);
const ids = readdirSync(new URL("../dist/og/", import.meta.url)).map((f) => f.replace(".html", ""));
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
for (const id of ids) {
  await p.goto(`${ORIGIN}/og/${id}.html`, { waitUntil: "networkidle" }); await p.evaluate(() => document.fonts.ready);
  await p.screenshot({ path: new URL(`og/${id}.jpg`, OUT).pathname, type: "jpeg", quality: 86 });
}
for (const size of [192, 512]) {
  await p.setViewportSize({ width: size, height: size });
  await p.goto(`${ORIGIN}/og/home.html`); await p.setContent(`<style>html,body{margin:0}img{width:${size}px;height:${size}px;display:block}</style><img src="${ORIGIN}/assets/icon.svg">`);
  await p.waitForTimeout(200); await p.screenshot({ path: new URL(`icon-${size}.png`, OUT).pathname });
}
await b.close();
console.log(`Rendered ${ids.length} share cards and 2 icons`);
