# CancelKit

A static, zero-dependency site of step-by-step subscription cancel guides. It follows the $10k/month site playbook drawn from the teardowns in [`../teardowns`](../teardowns): one long-tail page family (`/how-to-cancel/[service]`), `/llms.txt`, HowTo/FAQPage schema, free tools as entry points, and pass + yearly pricing.

## Build

```bash
cd cancelkit
node build.mjs                                   # writes ./dist
SITE_URL=https://your-domain.com node build.mjs  # set the real domain for canonical URLs, sitemap and llms.txt
npm run preview                                  # build and serve on http://localhost:8080
```

Deploy `dist/` to any static host. For Cloudflare Pages: build command `node cancelkit/build.mjs`, output directory `cancelkit/dist`.

## What gets generated

| Path | Source |
| --- | --- |
| `/` | home: search, cost calculator, categories, comparison, FAQ |
| `/how-to-cancel/` | A–Z index with filter |
| `/how-to-cancel/[slug]/` | one page per entry in `data/services.json` |
| `/category/[slug]/` | one page per category |
| `/pricing/` | free, 7-day pass, Tracker Pro (yearly/monthly) |
| `/tools/subscription-cost-calculator/`, `/tools/cancellation-letter/` | free tools |
| `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/llms-full.txt`, `/404.html` | SEO and AI-search files |

## Adding a guide

Add an object to `services` in `data/services.json`. A method is either written out (`label` + `steps`) or reuses a shared billing path: `{ "id": "apple", "shared": "apple" }` or `"google"`.

**Verification rule:** a guide with `"verified": null` is built as a draft. It shows a warning banner, has `noindex`, and is left out of `sitemap.xml` and `llms.txt`. After checking every step by hand on the live service, set `"verified": "YYYY-MM-DD"` and rebuild. None of the starter guides are verified yet.

## Configuration (`data/site.json`)

- `url`: production domain (or set `SITE_URL` at build time).
- `prices`: shown on the pricing page and guide sidebar.
- `checkout`: payment links (for example Stripe Payment Links) for `pass`, `proYearly` and `proMonthly`. Empty links render as "coming soon" buttons.

The tracker and reminder product itself is not part of this site yet.
