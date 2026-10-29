# CiteKit (working name): white-label AI visibility audit widget for agencies

Self-serve SaaS. Marketing agencies embed a branded AI visibility (AEO/GEO) audit on their site; visitors enter their email to see the report, and the agency gets the lead. Free plan, then $59 or $129 a month through Stripe.

| Path | What it is |
| --- | --- |
| `public/index.html` | Marketing site with a live demo of the audit |
| `public/embed.js` | The embeddable widget (shadow DOM, no dependencies) |
| `public/app/` | Agency dashboard: magic-link login, widget settings, embed code, leads, billing |
| `functions/api/[[path]].js` | Cloudflare Pages Function, forwards every `/api/*` request to `lib/app.mjs` |
| `lib/app.mjs` | API: auth, widgets, leads, usage limits, Stripe checkout, portal and webhook |
| `lib/audit.mjs` | The audit itself (robots.txt AI crawlers, llms.txt, JSON-LD, comparison pages, pricing, FAQ, metadata) |
| `bin/audit.mjs` | Same audit from the command line: `node aeo/bin/audit.mjs example.com [--json]` |
| `schema.sql` | D1 tables |
| `test/smoke.mjs` | End-to-end test against a running dev server |

## Run locally

```bash
cd aeo
npx wrangler d1 execute citekit --local --file=schema.sql
npx wrangler pages dev public --d1 DB=citekit --binding DEV=1   # http://localhost:8788
node test/smoke.mjs http://localhost:8788
```

With `DEV=1` the login API returns the magic link instead of emailing it.

## Launch checklist

1. Domain, then replace `citekit.example` in `public/` and `wrangler.toml`.
2. Cloudflare: `npx wrangler d1 create citekit`, put the id in `wrangler.toml`, run `schema.sql` with `--remote`, create a Pages project from this folder (output `public`).
3. Resend: verify the domain, set `RESEND_API_KEY` and `EMAIL_FROM`.
4. Stripe: create two products (Agency $59/month and $590/year, Agency Pro $129/month and $1,290/year), set the four `STRIPE_PRICE_*` ids and `STRIPE_SECRET_KEY`. Add a webhook to `https://<domain>/api/stripe/webhook` for `checkout.session.completed` and `customer.subscription.created/updated/deleted`, set `STRIPE_WEBHOOK_SECRET`. Turn on the customer portal.
