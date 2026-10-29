# CiteKit (working name): AEO studio site + free AI visibility audit

Lead-generation site for a done-for-you AEO (answer engine optimization) service for bootstrapped B2B SaaS.

- `public/` static site (landing page, pricing, FAQ, `/llms.txt`).
- `functions/api/audit.js` Cloudflare Pages Function behind the free audit form (`GET /api/audit?url=example.com`).
- `lib/audit.mjs` audit logic: AI crawler access in robots.txt, `/llms.txt`, homepage JSON-LD, comparison and alternatives pages from the sitemap, pricing page, FAQ, title/description/H1. Scores out of 100.
- `bin/audit.mjs` same audit from the command line, for prospect research: `node aeo/bin/audit.mjs example.com [--json]`.

## Run locally

```bash
node aeo/dev-server.mjs   # http://localhost:8788
```

## Deploy (Cloudflare Pages)

Project root directory `aeo`, no build command, output directory `public`. Functions in `aeo/functions` deploy automatically.

## Before launch

1. Pick the final name and domain, then replace `citekit.example` in `public/`.
2. Fill `CONFIG` at the bottom of `public/index.html`: contact email, booking link, Stripe payment link for the $490 audit.
