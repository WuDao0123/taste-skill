# Empirical Study: 20 Verified $10k–$422k/mo Indie SaaS Programmatic SEO (pSEO) & /llms.txt Teardowns

> **Canonical URL**: `https://taste-skill.pages.dev/help-md/pseo-teardown.md`
> **Overview & 30 Design Systems Reference**: `https://taste-skill.pages.dev/help-md/overview.md`
> **Full Machine-Readable Corpus**: `https://taste-skill.pages.dev/llms-full.txt`
> **Last Updated**: `2026-10-29`

---

## 1. Executive Summary & Aggregate Dataset Findings

We conducted an empirical, recursive crawl of `robots.txt`, `sitemap.xml` (including nested sitemap indexes), `/llms.txt`, `/llms-full.txt`, and pricing DOM structures across **20 verified indie SaaS websites** with founder-disclosed revenue between **`$10,000/mo` and `$422,000/mo`** (`$120k–$5M ARR`).

### Key Empirical Metrics Across the 20 Verified Indie SaaS Sites
- **Core Dataset Analyzed**: **27,360 core sitemap URLs** (27,990 total discovered URLs including secondary sub-sitemaps) across 20 bootstrapped / lean-team SaaS domains.
- **91.4% Programmatic SEO (pSEO) Share**: Across the core 27,360-URL benchmark (and up to 96.7% across extended localized directories), **over 9 out of 10 indexed URLs are generated programmatically from structured route templates** rather than hand-written blog posts.
- **50.0% `/llms.txt` Adoption (10 of 20 Sites)**: Half of these top-performing indie SaaS sites have already deployed root-level `/llms.txt` files (ranging from `760` to `118,540` characters) to capture citations from ChatGPT Search, Claude, and Perplexity (Generative Engine Optimization / GEO).
- **Top 4 High-Converting Programmatic Route Archetypes**:
  1. **Use-Case × Industry Cartesian Matrices** (e.g., Senja's `20 × 18 = 360` `/use-cases/[industry]-[role]` pages; Testimonial.to's `/use-cases/[slug]`).
  2. **Template & Example Galleries** (e.g., Tally's `179` `/templates/[category]/[slug]` pages; Carrd's template hubs; StandOut CV's `/cv-examples/[role]`).
  3. **Multi-Language Subfolder Multiplication** (e.g., Papermark's `4` locales `/es/`, `/fr/`, `/de/`, `/pt/` multiplying `683` base pages into `2,732` localized URLs).
  4. **Competitor Alternative & `/vs/` Interception Pages** (e.g., Plausible's `/vs-google-analytics`, Tally's `/help/[competitor]-alternatives`, Simple Analytics' `/[competitor]-alternative`).

---

## 2. Complete 20-Site Empirical Matrix (`$10k–$422k/mo`)

| # | SaaS Name & Domain | Disclosed MRR / ARR | Sitemap URLs | pSEO URLs (% Share) | `/llms.txt` Deployed? | Primary Programmatic Route Family | Links |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **Tally** (`tally.so`) | **$422,000 MRR ($5,000,000 ARR)** | 445 | 413 (**92.8%**) | ✅ Yes (4316 chars) | `/templates/[template_slug]/[sub_item_slug]` (179) | [Teardown](https://taste-skill.pages.dev/teardowns/tally/) · [Proof](https://blog.tally.so/the-road-from-4m-to-5m-arr/) |
| 2 | **Typefully** (`typefully.com`) | **~$167,000/mo (~$2,000,000 ARR)** | 228 | 212 (**93%**) | ✅ Yes (1619 chars) | `/changelog/[changelog_slug]` (111) | [Teardown](https://taste-skill.pages.dev/teardowns/typefully/) · [Proof](https://indiemakerlist.com/leaderboard/saas/) |
| 3 | **Carrd** (`carrd.co`) | **$85,000+ MRR ($1,000,000+ ARR, 2.5M+ sites)** | 18 | 4 (**22.2%**) | ❌ No | `/docs/[doc_slug]/[sub_item_slug]` (2) | [Teardown](https://taste-skill.pages.dev/teardowns/carrd/) · [Proof](https://www.indiehackers.com/post/hi-im-aj-maker-of-carrd-and-after-2-5m-sites-1m-arr-and-a-funding-round-probably-time-for-an-ama-1b7fcf52fe) |
| 4 | **Plausible Analytics** (`plausible.io`) | **$83,637 MRR ($1,000,000+ ARR)** | 180 | 150 (**83.3%**) | ❌ No | `/blog/[blog_slug]` (104) | [Teardown](https://taste-skill.pages.dev/teardowns/plausible/) · [Proof](https://plausible.io/blog/open-source-saas) |
| 5 | **StandOut CV** (`standout-cv.com`) | **£40,000 MRR (~$52,000/mo)** | 1103 | 1089 (**98.7%**) | ✅ Yes (270815 chars) | `/cv-examples/[cv_example_slug]/[sub_item_slug]` (809) | [Teardown](https://taste-skill.pages.dev/teardowns/standout-cv/) · [Proof](https://www.indiehackers.com/post/how-i-grew-my-saas-business-to-40k-mrr-with-seo-3287452853) |
| 6 | **Bannerbear** (`bannerbear.com`) | **$50,000 MRR (~$600,000+ ARR)** | 1372 | 1351 (**98.5%**) | ✅ Yes (8732 chars) | `/templates/[template_slug]` (319) | [Teardown](https://taste-skill.pages.dev/teardowns/bannerbear/) · [Proof](https://www.bannerbear.com/open/) |
| 7 | **Senja** (`senja.io`) | **$50,000 MRR ($600,000 ARR)** | 733 | 710 (**96.9%**) | ❌ No | `/use-cases/[use_case_slug]` (360) | [Teardown](https://taste-skill.pages.dev/teardowns/senja/) · [Proof](https://www.indiehackers.com/post/from-zero-to-50k-mrr-the-story-of-senjas-growth-6874d85edd) |
| 8 | **FlowMapp** (`flowmapp.com`) | **$50,000 MRR ($600,000 ARR)** | 175 | 153 (**87.4%**) | ✅ Yes (10934 chars) | `/blog/[blog_slug]/[sub_item_slug]` (58) | [Teardown](https://taste-skill.pages.dev/teardowns/flowmapp/) · [Proof](https://indiemakerlist.com/leaderboard/saas/) |
| 9 | **Simple Analytics** (`simpleanalytics.com`) | **$45,000 MRR ($540,000 ARR)** | 487 | 398 (**81.7%**) | ✅ Yes (17187 chars) | `/blog/[blog_slug]` (167) | [Teardown](https://taste-skill.pages.dev/teardowns/simple-analytics/) · [Proof](https://www.indiehackers.com/post/tech/joining-a-technical-co-founder-and-growing-the-product-to-45k-mrr-119Zbnde7pTET0QOiZLH) |
| 10 | **Papermark** (`papermark.com`) | **$45,000 MRR ($540,000 ARR)** | 2732 | 2638 (**96.6%**) | ✅ Yes (11875 chars) | `/blog/[blog_slug]` (1030) | [Teardown](https://taste-skill.pages.dev/teardowns/papermark/) · [Proof](https://www.indiehackers.com/post/tech/after-11-failed-products-this-founder-hit-45k-mrr-in-a-little-over-a-year-xyRkxAsD8Rys7URjYd5d) |
| 11 | **Subscribr** (`subscribr.ai`) | **$41,600+ MRR ($500k+ YTD, $1M/yr run-rate)** | 747 | 717 (**96%**) | ✅ Yes (1655 chars) | `/youtube-strategy/[youtube_strategy_slug]` (588) | [Teardown](https://taste-skill.pages.dev/teardowns/subscribr/) · [Proof](https://www.indiehackers.com/post/tech/leaving-a-funded-startup-and-bootstrapping-to-1m-yr-in-18-months-kPBpdxsTeQitOWOOVs2g) |
| 12 | **My AskAI** (`myaskai.com`) | **$40,000 MRR (~$500,000 ARR)** | 99 | 80 (**80.8%**) | ❌ No | `/blog/[blog_slug]` (24) | [Teardown](https://taste-skill.pages.dev/teardowns/myaskai/) · [Proof](https://www.indiehackers.com/post/tech/bootstrapping-to-40k-mrr-after-his-vc-backed-startup-failed-LF1CwRs1vL3oVLcuoIoE) |
| 13 | **Testimonial.to** (`testimonial.to`) | **$33,333+ MRR ($400,000+ ARR, later $800k+ ARR)** | 802 | 780 (**97.3%**) | ✅ Yes (772 chars) | `/resources/[resource_slug]` (455) | [Teardown](https://taste-skill.pages.dev/teardowns/testimonial/) · [Proof](https://thebootstrappedfounder.com/a-conversation-with-damon-chen/) |
| 14 | **ScreenshotOne** (`screenshotone.com`) | **$33,000 MRR (~$400k ARR; ~$36k MRR by Sept 2026)** | 644 | 617 (**95.8%**) | ✅ Yes (926 chars) | `/changelog/[changelog_slug]` (165) | [Teardown](https://taste-skill.pages.dev/teardowns/screenshotone/) · [Proof](https://dmytrokrasun.com/posts/screenshotone-4-years/) |
| 15 | **SuperX** (`superx.so`) | **$23,000 MRR ($276,000 ARR)** | 1664 | 1636 (**98.3%**) | ❌ No | `/creators/[creator_slug]` (828) | [Teardown](https://taste-skill.pages.dev/teardowns/superx/) · [Proof](https://www.indiehackers.com/post/tech/hitting-23k-mrr-in-six-months-after-five-failures-4d64o9ev4AXXhX9ogHQQ) |
| 16 | **Hypefury** (`hypefury.com`) | **$23,000+ MRR ($276,000+ ARR)** | 548 | 466 (**85%**) | ❌ No | `/blog/[blog_slug]/[sub_item_slug]` (219) | [Teardown](https://taste-skill.pages.dev/teardowns/hypefury/) · [Proof](https://www.indiehackers.com/post/flying-past-23k-mrr-in-2-years-hypefury-45f73f0c0a) |
| 17 | **Pirsch Analytics** (`pirsch.io`) | **$14,300 MRR (~$130,000/yr net volume)** | 938 | 789 (**84.1%**) | ❌ No | `/glossary/[glossary_slug]` (560) | [Teardown](https://taste-skill.pages.dev/teardowns/pirsch/) · [Proof](https://pirsch.io/blog/our-recap-of-2025/) |
| 18 | **SiteGuru** (`siteguru.co`) | **$14,000 MRR ($168,000 ARR)** | 254 | 228 (**89.8%**) | ❌ No | `/seo-academy/[seo_academy_slug]` (172) | [Teardown](https://taste-skill.pages.dev/teardowns/siteguru/) · [Proof](https://www.indiehackers.com/post/tech/building-an-seo-product-to-14k-mrr-in-a-crowded-market-gU4DE1l094cpj1GjNHwu) |
| 19 | **SEO Utils** (`seoutils.app`) | **~$10,400/mo ($15,800/mo founder portfolio)** | 19 | 16 (**84.2%**) | ❌ No | `/_nuxt/[_nuxt_slug]` (13) | [Teardown](https://taste-skill.pages.dev/teardowns/seoutils/) · [Proof](https://www.indiehackers.com/post/tech/staying-close-to-customers-and-hitting-16k-mo-VTKxLk4uanWJbmSdG4km) |
| 20 | **Leave Me Alone** (`leavemealone.com`) | **$10,000/mo (Open Startup verified)** | 14802 | 14623 (**98.8%**) | ❌ No | `/how-to-unsubscribe-from/[how_to_unsubscribe_from_slug]` (14264) | [Teardown](https://taste-skill.pages.dev/teardowns/leavemealone/) · [Proof](https://leavemealone.com/blog/from-indie-side-project-to-profitable-business/) |

---

## 3. Deep-Dive Teardowns of All 20 Verified Indie SaaS Sites

### 3.1 Tally (`tally.so`) — $422,000 MRR ($5,000,000 ARR)
- **Canonical Teardown URL**: https://taste-skill.pages.dev/teardowns/tally/
- **Founders**: Marie Martens & Filip Minev (bootstrapped, lean team)
- **Category**: Form Builder / No-Code SaaS
- **Revenue Disclosure (2026-04-15)**: https://blog.tally.so/the-road-from-4m-to-5m-arr/ (Secondary: https://www.indiehackers.com/post/bootstrapping-tally-to-150k-mrr-by-doing-less-better-68e340156f)
- **Incumbent Wedge**: Disrupts Typeform & Jotform predatory response caps by offering unlimited forms and unlimited responses for free (~99% of features free), monetizing only team collaboration, custom domains, and branding removal at $29/mo.
- **Core Value Proposition**: The simplest way to create forms for free — works like a Notion text document with zero response limits on the free tier.
- **Sitemap & GEO Telemetry**:
  - Total Sitemap URLs Discovered: `445`
  - Programmatic SEO (pSEO) URLs: `413` (`92.8%` pSEO share)
  - `robots.txt` Present: `Yes`
  - `/llms.txt` Present: `Yes (4316 chars)`
- **Top Programmatic Route Families**:
  - `/templates/[template_slug]/[sub_item_slug]` — **179 URLs** (40.2% of site) · Archetype: *Template Gallery pSEO (/templates/[template-slug])* · Title Formula: `{Primary Keyword / Variable} — Tally form template`
    - Sample URLs: `https://tally.so/templates/registration-form-template/ywaZnM`, `https://tally.so/templates/contact-form-template/dnWe3O`, `https://tally.so/templates/lead-generation-form-template/l3jQmM`
  - `/help/[help_slug]` — **142 URLs** (31.9% of site) · Archetype: *Documentation / Knowledge Base* · Title Formula: `{Primary Keyword / Variable Title} | Free Form Builder`
    - Sample URLs: `https://tally.so/help/get-started`, `https://tally.so/help/create-a-form`, `https://tally.so/help/free-ai-form-builder`
  - `/help/how-to-[topic]` — **42 URLs** (9.4% of site) · Archetype: *Documentation / Knowledge Base* · Title Formula: `{Primary Keyword / Variable Title} | Free Form Builder`
    - Sample URLs: `https://tally.so/help/how-to-create-a-thank-you-page`, `https://tally.so/help/how-to-name-fields`, `https://tally.so/help/how-to-create-a-multi-step-form`
  - `/community-stories/[community_storie_slug]` — **16 URLs** (3.6% of site) · Archetype: *Programmatic Directory / Hub (/community-stories/...)* · Title Formula: `Tally Community Stories: Charlie Ward`
    - Sample URLs: `https://tally.so/community-stories/charlie-ward`, `https://tally.so/community-stories/orangily`, `https://tally.so/community-stories/tomas-serti`
  - `/help/[competitor]-alternatives` — **13 URLs** (2.9% of site) · Archetype: *Competitor Alternative Landing Pages* · Title Formula: `Tally, a powerful and free Notion Forms alternative`
    - Sample URLs: `https://tally.so/help/tally-a-free-notion-forms-alternative`, `https://tally.so/help/tally-a-free-typeform-alternative`, `https://tally.so/help/tally-a-free-and-powerful-google-forms-alternative`
  - `/[root-landing-slug]` — **10 URLs** (2.2% of site) · Archetype: *Root-Level Long-Tail SEO Landing Pages*
    - Sample URLs: `https://tally.so/multi-step-forms`, `https://tally.so/hubspot-online-form-builder-free`, `https://tally.so/website-design-intake-form-template`
- **Pricing & Conversion Mechanics**:
  - Tiers Detected: `0` | Annual Discount: `20% OFF` | Free Trial / Tier: `Trial/Paid`
- **Replicable Engineering & Growth Actions**:
  1. Attack Your Incumbent's Most Hated Metered Limit: If competitors gate volume (responses, exports, views) at $25/mo, make volume free and charge $29/mo for branding removal + custom domains.
  1. Build Dual-Layer pSEO (`/templates/[category]/[slug]` + `/[competitor]-alternative`): Pair high-volume use-case templates (179 pages) with high-intent competitor switching pages (13 pages).
  1. Publish `/llms.txt` + `WebApplication` JSON-LD: Tally explicitly exposes a clean Markdown index at `/llms.txt` so AI assistants cite its free-tier generosity accurately.

### 3.2 Typefully (`typefully.com`) — ~$167,000/mo (~$2,000,000 ARR)
- **Canonical Teardown URL**: https://taste-skill.pages.dev/teardowns/typefully/
- **Founders**: Fabrizio Rinaldi & Francesco Di Lorenzo (2 Italian co-founders)
- **Category**: Creator Economy / Multi-Platform Social Publishing & API Suite
- **Revenue Disclosure (2026-03-15)**: https://indiemakerlist.com/leaderboard/saas/ (Secondary: https://typefully.com/llms.txt)
- **Incumbent Wedge**: Replaces clunky enterprise social schedulers (Hootsuite, Sprout Social) with a distraction-free minimalist writing studio, collaborative team review comments, and an AI-Agent-ready OpenAPI + Markdown documentation stack.
- **Core Value Proposition**: Write better content and grow on social media faster — cross-post seamlessly to X, LinkedIn, Threads, Bluesky, and Mastodon.
- **Sitemap & GEO Telemetry**:
  - Total Sitemap URLs Discovered: `228`
  - Programmatic SEO (pSEO) URLs: `212` (`93%` pSEO share)
  - `robots.txt` Present: `Yes`
  - `/llms.txt` Present: `Yes (1619 chars)`
- **Top Programmatic Route Families**:
  - `/changelog/[changelog_slug]` — **111 URLs** (48.7% of site) · Archetype: *Programmatic Directory / Hub (/changelog/...)* · Title Formula: `{Primary Keyword / Variable Title} | Typefully Changelog`
    - Sample URLs: `https://typefully.com/changelog/bluesky-sign-in-custom-pds`, `https://typefully.com/changelog/writing-assistant-comments`, `https://typefully.com/changelog/polls-linkedin-threads-mastodon`
  - `/blog/[blog_slug]` — **63 URLs** (27.6% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `{Primary Keyword / Variable Title} | Typefully`
    - Sample URLs: `https://typefully.com/blog/x-analytics-ai-agents`, `https://typefully.com/blog/schedule-x-articles`, `https://typefully.com/blog/post-mortem-security-incident-june-9th-2026`
  - `/blog/how-to-[topic]` — **11 URLs** (4.8% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `{Primary Keyword / Variable Title} | Typefully`
    - Sample URLs: `https://typefully.com/blog/what-is-my-linkedin-url`, `https://typefully.com/blog/how-to-create-a-linkedin-business-page`, `https://typefully.com/blog/how-to-cancel-linkedin-premium`
  - `/blog/[competitor]-alternatives` — **8 URLs** (3.5% of site) · Archetype: *Competitor Alternative Landing Pages* · Title Formula: `{Primary Keyword / Variable Title} | Typefully`
    - Sample URLs: `https://typefully.com/blog/taplio-alternatives`, `https://typefully.com/blog/authoredup-review-alternative`, `https://typefully.com/blog/sprout-social-review-alternative`
  - `/tools/[tool_slug]` — **6 URLs** (2.6% of site) · Archetype: *Free Tool / Micro-Utility Hub (/tools/[tool-slug])* · Title Formula: `Free AI Writing Tools by Typefully (latest AI models)`
    - Sample URLs: `https://typefully.com/tools/ai`, `https://typefully.com/tools/fake-tweet-generator`, `https://typefully.com/tools/linkedin-text-formatter`
  - `/changelog/[changelog_slug]/[sub_item_slug]` — **5 URLs** (2.2% of site) · Archetype: *Programmatic Directory / Hub (/changelog/...)*
    - Sample URLs: `https://typefully.com/changelog/page/2`, `https://typefully.com/changelog/page/3`, `https://typefully.com/changelog/page/4`
- **Pricing & Conversion Mechanics**:
  - Tiers Detected: `2` | Annual Discount: `20% OFF` | Free Trial / Tier: `Trial/Paid`
- **Replicable Engineering & Growth Actions**:
  1. Expose `/ai-agents.md` and `/docs/api.md` Inside Your `/llms.txt`: Typefully is a textbook example of 2026 GEO — its `/llms.txt` directly teaches AI agents how to authenticate and call its v2 API.
  1. Index Every Product Update as a Standalone SEO URL (`/changelog/[slug]` — 111 pages): Instead of hiding updates in a single modal, publish each feature launch at its own descriptive slug to rank for platform-specific queries.
  1. Publish Focused `/blog/[competitor]-alternatives` Pages (8 pages): Capture creators churning from Buffer, Hypefury, and Taplio with clean design-led comparison guides.

### 3.3 Carrd (`carrd.co`) — $85,000+ MRR ($1,000,000+ ARR, 2.5M+ sites)
- **Canonical Teardown URL**: https://taste-skill.pages.dev/teardowns/carrd/
- **Founders**: AJ (@ajlkn) & Doni (2-person team)
- **Category**: No-Code Website Builder / One-Page Landing Page Platform
- **Revenue Disclosure (2021-04-30)**: https://www.indiehackers.com/post/hi-im-aj-maker-of-carrd-and-after-2-5m-sites-1m-arr-and-a-funding-round-probably-time-for-an-ama-1b7fcf52fe (Secondary: https://carrd.co/pro)
- **Incumbent Wedge**: Eliminates the complexity and $20–$30/month cost of Squarespace, Webflow, and WordPress for simple one-page sites by charging an impulse-buy $9 to $49 per YEAR and letting users build without even creating an account first.
- **Core Value Proposition**: Simple, free, fully responsive one-page sites for pretty much anything.
- **Sitemap & GEO Telemetry**:
  - Total Sitemap URLs Discovered: `18`
  - Programmatic SEO (pSEO) URLs: `4` (`22.2%` pSEO share)
  - `robots.txt` Present: `Yes`
  - `/llms.txt` Present: `No`
- **Top Programmatic Route Families**:
  - `/docs/[doc_slug]/[sub_item_slug]` — **2 URLs** (11.1% of site) · Archetype: *Documentation / Knowledge Base* · Title Formula: `{Primary Keyword / Variable} — Carrd`
    - Sample URLs: `https://carrd.co/docs/general/changelog`, `https://carrd.co/docs/forms/setting-up-a-signup-form`
- **Pricing & Conversion Mechanics**:
  - Tiers Detected: `6` | Annual Discount: `20% OFF` | Free Trial / Tier: `Trial/Paid`
- **Replicable Engineering & Growth Actions**:
  1. Let Users Build in the Editor Before Asking for an Email: Carrd’s highest-leverage conversion trick is delaying account creation until the user has already invested 10 minutes designing their page.
  1. Use Annual Impulse Pricing (`$9/yr`, `$19/yr`, `$49/yr`) When Marginal Hosting Costs Are Pennies: Static one-page sites cost fractions of a cent on AWS/Cloudflare, allowing $19/yr pricing to generate $1M+ ARR at massive volume.
  1. Turn Every Free Tier Output into a Tasteful Viral Badge: Millions of creators proudly share their `*.carrd.co` profile links in social bios, creating unstoppable organic distribution.

### 3.4 Plausible Analytics (`plausible.io`) — $83,637 MRR ($1,000,000+ ARR)
- **Canonical Teardown URL**: https://taste-skill.pages.dev/teardowns/plausible/
- **Founders**: Uku Taht & Marko Saric (2 co-founders, 100% bootstrapped & open-source)
- **Category**: Privacy-First Web Analytics
- **Revenue Disclosure (2022-06-02)**: https://plausible.io/blog/open-source-saas (Secondary: https://plausible.io/plausible.io)
- **Incumbent Wedge**: Positions directly against Google Analytics 4 (GA4) bloat, cookie banner requirements, and GDPR privacy concerns with a <1 KB script.
- **Core Value Proposition**: Easy to use and privacy-friendly Google Analytics alternative that requires no cookie banners and loads 75x smaller than GA4.
- **Sitemap & GEO Telemetry**:
  - Total Sitemap URLs Discovered: `180`
  - Programmatic SEO (pSEO) URLs: `150` (`83.3%` pSEO share)
  - `robots.txt` Present: `Yes`
  - `/llms.txt` Present: `No`
- **Top Programmatic Route Families**:
  - `/blog/[blog_slug]` — **104 URLs** (57.8% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `{Primary Keyword / Variable Title} | Plausible Analytics`
    - Sample URLs: `https://plausible.io/blog/the-analytics-tool-i-want`, `https://plausible.io/blog/learning-design-as-a-developer`, `https://plausible.io/blog/technology-choices`
  - `/[root-landing-slug]` — **26 URLs** (14.4% of site) · Archetype: *Root-Level Long-Tail SEO Landing Pages* · Title Formula: `{Primary Keyword / Variable Title} | Plausible Analytics`
    - Sample URLs: `https://plausible.io/ad-cost-calculator`, `https://plausible.io/google-analytics-script-size`, `https://plausible.io/conversion-rate-calculator`
  - `/[tool_a]-vs-[tool_b]` — **4 URLs** (2.2% of site) · Archetype: *Head-to-Head Versus Comparison Pages* · Title Formula: `{Primary Keyword / Variable Title} | Plausible Analytics`
    - Sample URLs: `https://plausible.io/vs-cloudflare-web-analytics`, `https://plausible.io/vs-google-analytics`, `https://plausible.io/vs-matomo`
  - `/blog/[tool_a]-vs-[tool_b]` — **4 URLs** (2.2% of site) · Archetype: *Head-to-Head Versus Comparison Pages* · Title Formula: `{Primary Keyword / Variable Title} | Plausible Analytics`
    - Sample URLs: `https://plausible.io/blog/ua-vs-ga4`, `https://plausible.io/blog/time-on-page-ga-vs-plausible`, `https://plausible.io/blog/eu-hosted-analytics-vs-eu-owned-analytics`
  - `/jobs/[job_slug]` — **3 URLs** (1.7% of site) · Archetype: *Programmatic Directory / Hub (/jobs/...)* · Title Formula: `{Primary Keyword / Variable Title} | Plausible Analytics`
    - Sample URLs: `https://plausible.io/jobs/customer-success`, `https://plausible.io/jobs/infrastructure-engineer`, `https://plausible.io/jobs/product-engineer`
  - `/assets/[asset_slug]/[sub_item_slug]/[deep_slug]` — **3 URLs** (1.7% of site) · Archetype: *Programmatic Directory / Hub (/assets/...)*
    - Sample URLs: `https://plausible.io/assets/images/icon/apple-touch-icon.png`, `https://plausible.io/assets/images/icon/favicon.ico`, `https://plausible.io/assets/images/icon/favicon.svg`
- **Pricing & Conversion Mechanics**:
  - Tiers Detected: `4` | Annual Discount: `20% OFF` | Free Trial / Tier: `Trial/Paid`
- **Replicable Engineering & Growth Actions**:
  1. Include Yourself in Competitor vs Competitor Searches: Don't just write `Us vs Incumbent`; publish `Matomo vs Google Analytics` and position your tool as the lightweight modern third option.
  1. Ship a Live Public Dashboard Instead of Static Screenshots: Linking to a live read-only production dashboard (`plausible.io/plausible.io`) converts skeptical developers far better than marketing graphics.
  1. Transparent Pageview Slider + 30-Day No-Card Trial: Embed pricing directly on `#pricing` (`$9/mo` Starter, `$14/mo` Growth, `$19/mo` Business) with "2 months free" annual toggle.

### 3.5 StandOut CV (`standout-cv.com`) — £40,000 MRR (~$52,000/mo)
- **Canonical Teardown URL**: https://taste-skill.pages.dev/teardowns/standout-cv/
- **Founders**: Andrew Fennell (Solo founder + small content/dev team)
- **Category**: Career Tech / Resume & CV Builder SaaS
- **Revenue Disclosure (2025-09-25)**: https://www.indiehackers.com/post/how-i-grew-my-saas-business-to-40k-mrr-with-seo-3287452853 (Secondary: https://standout-cv.com/llms.txt)
- **Incumbent Wedge**: Captures job seekers at the exact moment they search for role-specific CV examples (e.g., "Finance Manager CV example") and converts them directly into an interactive CV builder.
- **Core Value Proposition**: Write a job-winning CV in minutes using recruiter-approved templates and role-specific examples.
- **Sitemap & GEO Telemetry**:
  - Total Sitemap URLs Discovered: `1103`
  - Programmatic SEO (pSEO) URLs: `1089` (`98.7%` pSEO share)
  - `robots.txt` Present: `Yes`
  - `/llms.txt` Present: `Yes (270815 chars)`
- **Top Programmatic Route Families**:
  - `/cv-examples/[cv_example_slug]/[sub_item_slug]` — **809 URLs** (73.3% of site) · Archetype: *Programmatic Directory / Hub (/cv-examples/...)* · Title Formula: `3 Tutor CV examples + easy guide [Build your business fast]`
    - Sample URLs: `https://standout-cv.com/cv-examples/teaching-and-education/tutor-cv`, `https://standout-cv.com/cv-examples/marketing/seo-executive-cv`, `https://standout-cv.com/cv-examples/driving-and-logistics/transport-planner-cv`
  - `/usa/[usa_slug]/[sub_item_slug]` — **43 URLs** (3.9% of site) · Archetype: *Programmatic Directory / Hub (/usa/...)* · Title Formula: `STEM resume example + guide [Get a great job]`
    - Sample URLs: `https://standout-cv.com/usa/resume-examples/stem-resume-example`, `https://standout-cv.com/usa/resume-examples/chick-fil-a-resume-example`, `https://standout-cv.com/usa/resume-examples/fpa-resume-example`
  - `/cv-advice/[cv_advice_slug]` — **41 URLs** (3.7% of site) · Archetype: *Programmatic Directory / Hub (/cv-advice/...)* · Title Formula: `{Primary Keyword / Variable Title} | Get more interviews`
    - Sample URLs: `https://standout-cv.com/cv-advice/cv-writing-tips`, `https://standout-cv.com/cv-advice/hobbies-interests-cv`, `https://standout-cv.com/cv-advice/cv-education-section`
  - `/cv-examples/[cv_example_slug]` — **34 URLs** (3.1% of site) · Archetype: *Programmatic Directory / Hub (/cv-examples/...)* · Title Formula: `{Primary Keyword / Variable Title} | Land a top accounting job`
    - Sample URLs: `https://standout-cv.com/cv-examples/accounting`, `https://standout-cv.com/cv-examples/administration-and-office`, `https://standout-cv.com/cv-examples/animal-care`
  - `/stats/[stat_slug]` — **31 URLs** (2.8% of site) · Archetype: *Programmatic Directory / Hub (/stats/...)* · Title Formula: `{Primary Keyword / Variable Title} | UK and global data`
    - Sample URLs: `https://standout-cv.com/stats/average-uk-salary`, `https://standout-cv.com/stats/networking-statistics`, `https://standout-cv.com/stats/job-interview-statistics`
  - `/cover-letter-examples/[cover_letter_example_slug]` — **26 URLs** (2.4% of site) · Archetype: *Programmatic Directory / Hub (/cover-letter-examples/...)*
    - Sample URLs: `https://standout-cv.com/cover-letter-examples/ski-season`, `https://standout-cv.com/cover-letter-examples/speculative`, `https://standout-cv.com/cover-letter-examples/pharmacy-assistant`
- **Pricing & Conversion Mechanics**:
  - Tiers Detected: `0` | Annual Discount: `20% OFF` | Free Trial / Tier: `Trial/Paid`
- **Replicable Engineering & Growth Actions**:
  1. Pair `/examples/[role]` Pages with a "/stats/[topic]" Link-Bait Cluster: Use `/stats/[topic]` pages to earn high-DR journalist links for free, then pass internal link equity to your commercial `/examples/[role]` pages.
  1. Localize URL Prefixes for UK vs US Terminology (`/cv-examples/...` vs `/usa/resume-examples/...`): Same SaaS engine underneath, doubled addressable search volume by matching local terminology.
  1. Embed "Use This Template" Above the Fold on Every Content Page: Turn passive readers into active SaaS builders within 5 seconds of landing.

### 3.6 Bannerbear (`bannerbear.com`) — $50,000 MRR (~$600,000+ ARR)
- **Canonical Teardown URL**: https://taste-skill.pages.dev/teardowns/bannerbear/
- **Founders**: Jon Yongfook (Solo technical founder)
- **Category**: Developer API / Automated Image & Video Generation
- **Revenue Disclosure (2023-07-15)**: https://www.bannerbear.com/open/ (Secondary: https://www.bannerbear.com/blog/7-lessons-growing-a-bootstrapped-saas-to-50k-mrr/)
- **Incumbent Wedge**: Replaces brittle headless Puppeteer scripts and manual Canva design workflows with a deterministic REST API + Zapier/Airtable/Make integrations.
- **Core Value Proposition**: API for automated image and video generation — auto-generate social media visuals, ecommerce banners, and dynamic PDFs at scale.
- **Sitemap & GEO Telemetry**:
  - Total Sitemap URLs Discovered: `1372`
  - Programmatic SEO (pSEO) URLs: `1351` (`98.5%` pSEO share)
  - `robots.txt` Present: `Yes`
  - `/llms.txt` Present: `Yes (8732 chars)`
- **Top Programmatic Route Families**:
  - `/templates/[template_slug]` — **319 URLs** (23.3% of site) · Archetype: *Template Gallery pSEO (/templates/[template-slug])* · Title Formula: `Auto Generate Images / Videos from the Green Black Modern Marketing YouTube Thumbnail template`
    - Sample URLs: `https://www.bannerbear.com/templates/gobzvgdzwqpoka5wpp-green-black-modern-marketing-youtube-thumbnail/`, `https://www.bannerbear.com/templates/le6wpao85lr3xqknmq-blue-modern-business-youtube-thumbnail/`, `https://www.bannerbear.com/templates/en6kagoqmyoopxzgbl-violet-pink-gradient-podcast-youtube-thumbnail/`
  - `/help/[help_slug]/[sub_item_slug]` — **195 URLs** (14.2% of site) · Archetype: *Documentation / Knowledge Base* · Title Formula: `{Primary Keyword / Variable} — Bannerbear`
    - Sample URLs: `https://www.bannerbear.com/help/articles/203-what-are-api-credits/`, `https://www.bannerbear.com/help/articles/253-what-can-i-use-bannerbear-for/`, `https://www.bannerbear.com/help/articles/205-what-are-projects/`
  - `/blog/how-to-[topic]` — **171 URLs** (12.5% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `{Primary Keyword / Variable} — Bannerbear`
    - Sample URLs: `https://www.bannerbear.com/blog/how-to-design-impactful-reusable-youtube-thumbnail-templates/`, `https://www.bannerbear.com/blog/how-to-generate-wedding-invites-for-your-entire-guest-list/`, `https://www.bannerbear.com/blog/how-to-auto-produce-job-listing-graphics-for-linkedin-carousel-using-make/`
  - `/blog/[blog_slug]` — **162 URLs** (11.8% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `{Primary Keyword / Variable} — Bannerbear`
    - Sample URLs: `https://www.bannerbear.com/blog/best-coding-languages-to-learn-in-2026-especially-if-youre-into-vibe-coding/`, `https://www.bannerbear.com/blog/adding-links-to-graphics-at-scale/`, `https://www.bannerbear.com/blog/automatically-turn-a-tweet-into-a-fleet/`
  - `/v5/[v5_slug]/[sub_item_slug]/[deep_slug]` — **93 URLs** (6.8% of site) · Archetype: *Programmatic Directory / Hub (/v5/...)* · Title Formula: `{Primary Keyword / Variable} — Bannerbear`
    - Sample URLs: `https://www.bannerbear.com/v5/help/articles/534-what-are-workspaces/`, `https://www.bannerbear.com/v5/help/articles/535-how-do-i-switch-between-workspaces/`, `https://www.bannerbear.com/v5/help/articles/536-how-to-create-a-new-workspace/`
  - `/use-cases/[use_case_slug]/[sub_item_slug]` — **90 URLs** (6.6% of site) · Archetype: *Use-Case Solution Pages (/use-cases/[persona-or-workflow])*
    - Sample URLs: `https://www.bannerbear.com/use-cases/scenarios/auto-generate-images-via-api/`, `https://www.bannerbear.com/use-cases/scenarios/auto-generate-instagram-posts-via-api/`, `https://www.bannerbear.com/use-cases/scenarios/auto-generate-instagram-stories-via-api/`
- **Pricing & Conversion Mechanics**:
  - Tiers Detected: `4` | Annual Discount: `20% OFF` | Free Trial / Tier: `Trial/Paid`
- **Replicable Engineering & Growth Actions**:
  1. Turn Every Template in Your Database into a Public Static URL (`/templates/[slug]`): Bannerbear's 319 template preview pages act as long-tail landing pages for "real estate instagram template API", "podcast audiogram template", etc.
  1. Combine `/use-cases/scenarios/[slug]` (90 pages) with `/integrations/[slug]` (17 pages): Map every `Tool A + Your API -> Outcome B` permutation.
  1. Credit-Based API Tiering (`$49` Automate 1,000 credits -> `$149` Scale 10,000 credits `[MOST POPULAR]` -> `$299` Enterprise 50,000 credits): Pure usage-based expansion revenue without per-seat friction.

### 3.7 Senja (`senja.io`) — $50,000 MRR ($600,000 ARR)
- **Canonical Teardown URL**: https://taste-skill.pages.dev/teardowns/senja/
- **Founders**: Olly Meakings & Wilson Wilson (2 co-founders)
- **Category**: Social Proof & Testimonial Collection SaaS
- **Revenue Disclosure (2024-11-19)**: https://www.indiehackers.com/post/from-zero-to-50k-mrr-the-story-of-senjas-growth-6874d85edd (Secondary: https://senja.io/pricing)
- **Incumbent Wedge**: Out-executes legacy enterprise review widgets and early indie tools (Testimonial.to, Boast.io) with 30+ import sources, superior Wall of Love design aesthetics, and aggressive pSEO.
- **Core Value Proposition**: The easiest way to collect, manage, and share video & text testimonials everywhere.
- **Sitemap & GEO Telemetry**:
  - Total Sitemap URLs Discovered: `733`
  - Programmatic SEO (pSEO) URLs: `710` (`96.9%` pSEO share)
  - `robots.txt` Present: `Yes`
  - `/llms.txt` Present: `No`
- **Top Programmatic Route Families**:
  - `/use-cases/[use_case_slug]` — **360 URLs** (49.1% of site) · Archetype: *Use-Case Solution Pages (/use-cases/[persona-or-workflow])* · Title Formula: `Add Airbnb Reviews to Carrd in 5 minutes for free!`
    - Sample URLs: `https://senja.io/use-cases/add-airbnb-reviews-to-carrd`, `https://senja.io/use-cases/add-airbnb-reviews-to-elementor`, `https://senja.io/use-cases/add-airbnb-reviews-to-godaddy`
  - `/testimonial-examples/[testimonial_example_slug]` — **112 URLs** (15.3% of site) · Archetype: *Programmatic Directory / Hub (/testimonial-examples/...)* · Title Formula: `{Primary Keyword / Variable Title} | Ruttl - Testimonial Examples - Senja`
    - Sample URLs: `https://senja.io/testimonial-examples/1-online-website-feedback-tool-ruttl`, `https://senja.io/testimonial-examples/90-minute-grow-your-fro-long-hair-crash-course-lto`, `https://senja.io/testimonial-examples/about-you-ve-got-clients`
  - `/blog/[blog_slug]` — **97 URLs** (13.2% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `{Primary Keyword / Variable} — Senja`
    - Sample URLs: `https://senja.io/blog/5-easy-ways-to-get-and-use-testimonials-start-using-senja-in-less-than-an-hour`, `https://senja.io/blog/8-fresh-ways-to-use-testimonials-and-social-proof`, `https://senja.io/blog/ai-testimonial-video-creator`
  - `/testimonial-software/[testimonial_software_slug]` — **25 URLs** (3.4% of site) · Archetype: *Programmatic Directory / Hub (/testimonial-software/...)* · Title Formula: `{Primary Keyword / Variable} — Senja`
    - Sample URLs: `https://senja.io/testimonial-software/agencies`, `https://senja.io/testimonial-software/analysis`, `https://senja.io/testimonial-software/chrome-extension`
  - `/testimonial-widgets/[testimonial_widget_slug]` — **25 URLs** (3.4% of site) · Archetype: *Programmatic Directory / Hub (/testimonial-widgets/...)* · Title Formula: `{Primary Keyword / Variable} — Testimonial Widgets by Senja`
    - Sample URLs: `https://senja.io/testimonial-widgets/andoya-carousel-testimonial-widget`, `https://senja.io/testimonial-widgets/avatars-pro`, `https://senja.io/testimonial-widgets/bold-highlights`
  - `/compare/[competitor]-alternatives` — **19 URLs** (2.6% of site) · Archetype: *Head-to-Head Comparison Hub (/compare/[a]-vs-[b])*
    - Sample URLs: `https://senja.io/compare/boast-io-alternative`, `https://senja.io/compare/bonjoro-alternative`, `https://senja.io/compare/delighted-alternative`
- **Pricing & Conversion Mechanics**:
  - Tiers Detected: `2` | Annual Discount: `20% OFF` | Free Trial / Tier: `Trial/Paid`
- **Replicable Engineering & Growth Actions**:
  1. Steal the `Source × Destination` Cartesian URL Formula: If your product connects Source $A$ (20 platforms) to Destination $B$ (18 CMS builders), generate $20 \times 18 = 360$ `/use-cases/add-[source]-to-[destination]` pages.
  1. Build 3 Vertical Intent Layers (`/testimonial-examples/[x]`, `/testimonial-widgets/[x]`, `/testimonial-software/[x]`): Captures top-of-funnel inspiration, mid-funnel widget embeds, and bottom-of-funnel buyer searches.
  1. Simple 3-Tier Pricing (`Free $0` -> `Starter $29/mo` -> `Pro $59/mo [Most Popular]`) with "2 months free" annual toggle and 14 objection-crushing FAQ items.

### 3.8 FlowMapp (`flowmapp.com`) — $50,000 MRR ($600,000 ARR)
- **Canonical Teardown URL**: https://taste-skill.pages.dev/teardowns/flowmapp/
- **Founders**: Paul Mit & bootstrapped product team
- **Category**: UX Planning, Visual Sitemap & Website Wireframe SaaS
- **Revenue Disclosure (2026-02-10)**: https://indiemakerlist.com/leaderboard/saas/ (Secondary: https://www.flowmapp.com/llms.txt)
- **Incumbent Wedge**: Replaces messy spreadsheets and over-complicated Figma files during the pre-design discovery phase with a dedicated visual sitemap, AI wireframe, and project estimation workspace.
- **Core Value Proposition**: Visual platform for planning UX, interactive sitemaps, wireframes, and pitching web design projects.
- **Sitemap & GEO Telemetry**:
  - Total Sitemap URLs Discovered: `175`
  - Programmatic SEO (pSEO) URLs: `153` (`87.4%` pSEO share)
  - `robots.txt` Present: `Yes`
  - `/llms.txt` Present: `Yes (10934 chars)`
- **Top Programmatic Route Families**:
  - `/blog/[blog_slug]/[sub_item_slug]` — **58 URLs** (33.1% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `{Primary Keyword / Variable Title} | FlowMapp design blog`
    - Sample URLs: `https://www.flowmapp.com/blog/qa/10-ux-design-onboarding-tips`, `https://www.flowmapp.com/blog/qa/20-basic-typographic-terms-ui`, `https://www.flowmapp.com/blog/qa/5-second-test`
  - `/features/[feature_slug]` — **53 URLs** (30.3% of site) · Archetype: *Programmatic Directory / Hub (/features/...)* · Title Formula: `{Primary Keyword / Variable Title} | Online UX tool to create user flow charts`
    - Sample URLs: `https://www.flowmapp.com/features/content`, `https://www.flowmapp.com/features/flowchart`, `https://www.flowmapp.com/features/generate-sitemap-online`
  - `/blog/[blog_slug]/how-to-[topic]` — **18 URLs** (10.3% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `{Primary Keyword / Variable Title} | FlowMapp design blog`
    - Sample URLs: `https://www.flowmapp.com/blog/qa/how-to-design-flowcharts`, `https://www.flowmapp.com/blog/qa/how-to-make-flowchart`, `https://www.flowmapp.com/blog/qa/how-to-make-perfect-a-b-test`
  - `/blog/[blog_slug]` — **9 URLs** (5.1% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `{Primary Keyword / Variable Title} | Information architecture`
    - Sample URLs: `https://www.flowmapp.com/blog/information-architecture`, `https://www.flowmapp.com/blog/news`, `https://www.flowmapp.com/blog/ui-design`
  - `/features/how-to-[topic]` — **8 URLs** (4.6% of site) · Archetype: *Programmatic Directory / Hub (/features/...)* · Title Formula: `How to plan a website structure: step-by-step guide`
    - Sample URLs: `https://www.flowmapp.com/features/how-to-plan-a-website-structure-step-by-step-guide`, `https://www.flowmapp.com/features/how-to-design-sitemap`, `https://www.flowmapp.com/features/how-to-create-user-flow`
  - `/pricing/[pricing_slug]` — **4 URLs** (2.3% of site) · Archetype: *Programmatic Directory / Hub (/pricing/...)*
    - Sample URLs: `https://www.flowmapp.com/pricing/education`, `https://www.flowmapp.com/pricing/student`, `https://flowmapp.com/pricing/student`
- **Pricing & Conversion Mechanics**:
  - Tiers Detected: `0` | Annual Discount: `20% OFF` | Free Trial / Tier: `Trial/Paid`
- **Replicable Engineering & Growth Actions**:
  1. Unbundle Your Product into 50+ `/features/[capability-slug]` Landing Pages: Don’t bury your sub-tools on one homepage — FlowMapp created 53 distinct `/features/*` URLs so every specific job-to-be-done ranks independently.
  1. Use `url: / title: / description:` Key-Value Blocks in `/llms.txt` (`10,934 chars`): Gives AI search crawlers clean, zero-noise metadata for every feature route.
  1. Highlight a High-Contrast Annual Discount (`Billed annually 45% off` — `$8.25/mo` vs `$15/mo`, `$19.25/mo` vs `$35/mo`): Drives immediate annual cashflow from agency buyers.

### 3.9 Simple Analytics (`simpleanalytics.com`) — $45,000 MRR ($540,000 ARR)
- **Canonical Teardown URL**: https://taste-skill.pages.dev/teardowns/simple-analytics/
- **Founders**: Adriaan van Rossum & Iron Brands (2 co-founders, Amsterdam)
- **Category**: EU-Compliant Privacy Web Analytics
- **Revenue Disclosure (2025-10-15)**: https://www.indiehackers.com/post/tech/joining-a-technical-co-founder-and-growing-the-product-to-45k-mrr-119Zbnde7pTET0QOiZLH (Secondary: https://www.simpleanalytics.com/open)
- **Incumbent Wedge**: Positions on strict EU data sovereignty (100% EU-hosted, zero PII, GDPR/PECR/Schrems II compliant out-of-the-box) plus AI analytics insights.
- **Core Value Proposition**: Simple, privacy-first Google Analytics alternative hosted in the EU — no cookies, no consent banners needed.
- **Sitemap & GEO Telemetry**:
  - Total Sitemap URLs Discovered: `487`
  - Programmatic SEO (pSEO) URLs: `398` (`81.7%` pSEO share)
  - `robots.txt` Present: `Yes`
  - `/llms.txt` Present: `Yes (17187 chars)`
- **Top Programmatic Route Families**:
  - `/blog/[blog_slug]` — **167 URLs** (34.3% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `The EU wants to kill cookie banners`
    - Sample URLs: `https://www.simpleanalytics.com/blog/the-eu-wants-to-kill-cookie-banners-by-moving-consent-to-your-browser`, `https://www.simpleanalytics.com/blog/google-is-tracking-you-even-when-you-use-duck-duck-go`, `https://www.simpleanalytics.com/blog/german-court-rules-meta-s-tracking-tech-violates-gdpr`
  - `/[root-landing-slug]` — **76 URLs** (15.6% of site) · Archetype: *Root-Level Long-Tail SEO Landing Pages* · Title Formula: `{Primary Keyword / Variable} — Simple Analytics`
    - Sample URLs: `https://www.simpleanalytics.com/analytics-without-consent`, `https://www.simpleanalytics.com/sessions-without-consent`, `https://www.simpleanalytics.com/eu-hosted-analytics`
  - `/_nuxt/[_nuxt_slug]` — **64 URLs** (13.1% of site) · Archetype: *Programmatic Directory / Hub (/_nuxt/...)*
    - Sample URLs: `https://www.simpleanalytics.com/_nuxt/Navbar.DNfpWAoD.css`, `https://www.simpleanalytics.com/_nuxt/FlowDiagram.CZN07pCw.css`, `https://www.simpleanalytics.com/_nuxt/CnbSkFzU.js`
  - `/guides/[guide_slug]` — **31 URLs** (6.4% of site) · Archetype: *Programmatic Directory / Hub (/guides/...)* · Title Formula: `How to track button clicks with Simple Analytics`
    - Sample URLs: `https://www.simpleanalytics.com/guides/track-button-click`, `https://www.simpleanalytics.com/guides/track-blog-reactions`, `https://www.simpleanalytics.com/guides/track-bing-traffic`
  - `/press/[pres_slug]` — **12 URLs** (2.5% of site) · Archetype: *Programmatic Directory / Hub (/press/...)* · Title Formula: `Simple Analytics on BNR Nieuwsradio`
    - Sample URLs: `https://www.simpleanalytics.com/press/bnr`, `https://www.simpleanalytics.com/press/code-story`, `https://www.simpleanalytics.com/press/ethical-allies`
  - `/blog/how-to-[topic]` — **7 URLs** (1.4% of site) · Archetype: *Content / Editorial Blog Cluster*
    - Sample URLs: `https://www.simpleanalytics.com/blog/how-to-export-data-from-google-analytics`, `https://www.simpleanalytics.com/blog/what-is-phi-under-hipaa`, `https://www.simpleanalytics.com/blog/how-to-track-form-submissions-using-google-tag-manager`
- **Pricing & Conversion Mechanics**:
  - Tiers Detected: `0` | Annual Discount: `20% OFF` | Free Trial / Tier: `Trial/Paid`
- **Replicable Engineering & Growth Actions**:
  1. Create Regulatory & Pain-Point Root Slugs (`/analytics-without-consent`): Users don't just search product categories; they search how to avoid a painful compliance requirement.
  1. Deploy a Rich `/llms.txt` (17 KB+): Explicitly list your comparison guides, glossary definitions, and regulatory compliance proofs in `/llms.txt`.
  1. Dual-Path Trial Funnel on `/pricing`: Offers both a self-serve 14-day free trial (`No credit card required`) AND a 30-day guided Proof of Concept (POC) for higher-ACV B2B teams.

### 3.10 Papermark (`papermark.com`) — $45,000 MRR ($540,000 ARR)
- **Canonical Teardown URL**: https://taste-skill.pages.dev/teardowns/papermark/
- **Founders**: Marc Seitz & Iuliia Shnai (married co-founder duo)
- **Category**: Open-Source Document Sharing & Virtual Data Room (DocSend Alternative)
- **Revenue Disclosure (2025-08-20)**: https://www.indiehackers.com/post/tech/after-11-failed-products-this-founder-hit-45k-mrr-in-a-little-over-a-year-xyRkxAsD8Rys7URjYd5d (Secondary: https://www.papermark.com/llms.txt)
- **Incumbent Wedge**: Attacks DocSend's expensive per-user pricing ($15–$65/user/mo) and dated UI with an open-source, self-hostable, custom-branded pitch deck & data room platform.
- **Core Value Proposition**: The open-source DocSend alternative for securely sharing pitch decks, sales documents, and virtual data rooms with page-by-page analytics.
- **Sitemap & GEO Telemetry**:
  - Total Sitemap URLs Discovered: `2732`
  - Programmatic SEO (pSEO) URLs: `2638` (`96.6%` pSEO share)
  - `robots.txt` Present: `Yes`
  - `/llms.txt` Present: `Yes (11875 chars)`
- **Top Programmatic Route Families**:
  - `/blog/[blog_slug]` — **1030 URLs** (37.7% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `{Primary Keyword / Variable} — Papermark`
    - Sample URLs: `https://www.papermark.com/blog/product-hunt-launch`, `https://www.papermark.com/blog/a16z-data-room-checklist`, `https://www.papermark.com/blog/advertising-investors`
  - `/help/[help_slug]/[sub_item_slug]` — **491 URLs** (18% of site) · Archetype: *Documentation / Knowledge Base* · Title Formula: `How to add a custom domain to your Papermark team account`
    - Sample URLs: `https://www.papermark.com/help/article/add-custom-domain-team-settings`, `https://www.papermark.com/help/article/add-documents-to-dataroom`, `https://www.papermark.com/help/article/add-folders-to-dataroom`
  - `/blog/how-to-[topic]` — **345 URLs** (12.6% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `How to Acquire a Company in 2026: A Step-by-Step Guide for First-Time Buyers`
    - Sample URLs: `https://www.papermark.com/blog/how-to-acquire-company`, `https://www.papermark.com/blog/how-to-choose-virtual-data-room`, `https://www.papermark.com/blog/how-to-collect-documents-from-clients-securely`
  - `/changelog/[changelog_slug]` — **103 URLs** (3.8% of site) · Archetype: *Programmatic Directory / Hub (/changelog/...)* · Title Formula: `{Primary Keyword / Variable} — Changelog`
    - Sample URLs: `https://www.papermark.com/changelog/multi-folder-upload-permissions`, `https://www.papermark.com/changelog/download-data-room-archive`, `https://www.papermark.com/changelog/freeze-datarooms`
  - `/help/[help_slug]/how-to-[topic]` — **88 URLs** (3.2% of site) · Archetype: *Documentation / Knowledge Base* · Title Formula: `How to add agreements before viewing documents or data rooms?`
    - Sample URLs: `https://www.papermark.com/help/article/how-to-add-agreements`, `https://www.papermark.com/help/article/how-to-add-custom-domain-to-link`, `https://www.papermark.com/help/article/how-to-connect-slack`
  - `/[root-landing-slug]` — **82 URLs** (3% of site) · Archetype: *Root-Level Long-Tail SEO Landing Pages*
    - Sample URLs: `https://www.papermark.com/open-source-investors`, `https://www.papermark.com/ideals-vdr-alternatives`, `https://www.papermark.com/data-room-due-diligence`
- **Pricing & Conversion Mechanics**:
  - Tiers Detected: `1` | Annual Discount: `20% OFF` | Free Trial / Tier: `Trial/Paid`
- **Replicable Engineering & Growth Actions**:
  1. Multiply Winning SEO Pages Across `/de/`, `/es/`, `/fr/` Subfolders: Once an English pSEO cluster converts, localize it into German, Spanish, and French with proper `hreflang` tags — Papermark scaled to 2,732 indexed URLs this way.
  1. Publish Curated Investor & Due-Diligence Checklist Pages for Founders: Target the exact upstream workflow of your buyer (founders raising seed/Series A need investor lists -> then they need a pitch deck tracker & data room).
  1. Ship Both `/llms.txt` (11.9 KB summary) and `/llms-full.txt` (246 KB full corpus) so LLM agents have complete product context.

### 3.11 Subscribr (`subscribr.ai`) — $41,600+ MRR ($500k+ YTD, $1M/yr run-rate)
- **Canonical Teardown URL**: https://taste-skill.pages.dev/teardowns/subscribr/
- **Founders**: Gil Hildebrand (Solo technical founder)
- **Category**: Creator Economy / AI YouTube Scriptwriting & Video Ideation Engine
- **Revenue Disclosure (2025-08-27)**: https://www.indiehackers.com/post/tech/leaving-a-funded-startup-and-bootstrapping-to-1m-yr-in-18-months-kPBpdxsTeQitOWOOVs2g (Secondary: https://subscribr.ai/llms.txt)
- **Incumbent Wedge**: Replaces generic ChatGPT prompts and scattered Google Docs with a YouTube-native content engine grounded in channel voice, outlier video intel, thumbnail/title packaging, and CLI/MCP agent workflows.
- **Core Value Proposition**: Ideate, script, and edit a month of high-retention YouTube videos today — grounded in your channel voice and real outlier data.
- **Sitemap & GEO Telemetry**:
  - Total Sitemap URLs Discovered: `747`
  - Programmatic SEO (pSEO) URLs: `717` (`96%` pSEO share)
  - `robots.txt` Present: `Yes`
  - `/llms.txt` Present: `Yes (1655 chars)`
- **Top Programmatic Route Families**:
  - `/youtube-strategy/[youtube_strategy_slug]` — **588 URLs** (78.7% of site) · Archetype: *Programmatic Directory / Hub (/youtube-strategy/...)* · Title Formula: `{Primary Keyword / Variable Title} | Subscribr`
    - Sample URLs: `https://subscribr.ai/youtube-strategy/youtube-keyword-research-ultimate-guide`, `https://subscribr.ai/youtube-strategy/advanced-youtube-keyword-research`, `https://subscribr.ai/youtube-strategy/new-youtube-videos-no-views-fix`
  - `/help/[help_slug]/[sub_item_slug]` — **44 URLs** (5.9% of site) · Archetype: *Documentation / Knowledge Base* · Title Formula: `{Primary Keyword / Variable} — Subscribr`
    - Sample URLs: `https://subscribr.ai/help/video-ideas/intel`, `https://subscribr.ai/help/getting-started/audience-avatar`, `https://subscribr.ai/help/getting-started/channels`
  - `/youtube-strategy/[tool_a]-vs-[tool_b]` — **20 URLs** (2.7% of site) · Archetype: *Head-to-Head Versus Comparison Pages* · Title Formula: `{Primary Keyword / Variable Title} | Subscribr`
    - Sample URLs: `https://subscribr.ai/youtube-strategy/long-tail-vs-short-tail-keywords-youtube`, `https://subscribr.ai/youtube-strategy/youtube-shorts-vs-long-form-business`, `https://subscribr.ai/youtube-strategy/cost-ai-youtube-tools-free-vs-paid`
  - `/youtube-strategy/how-to-[topic]` — **16 URLs** (2.1% of site) · Archetype: *Programmatic Directory / Hub (/youtube-strategy/...)* · Title Formula: `{Primary Keyword / Variable Title} | Subscribr`
    - Sample URLs: `https://subscribr.ai/youtube-strategy/how-to-choose-youtube-niche`, `https://subscribr.ai/youtube-strategy/how-to-write-clickable-youtube-titles`, `https://subscribr.ai/youtube-strategy/how-to-write-youtube-titles-newbies`
  - `/[root-landing-slug]` — **12 URLs** (1.6% of site) · Archetype: *Root-Level Long-Tail SEO Landing Pages* · Title Formula: `{Primary Keyword / Variable Title} | Subscribr`
    - Sample URLs: `https://subscribr.ai/free-youtube-tools`, `https://subscribr.ai/youtube-title-generator`, `https://subscribr.ai/youtube-video-breakdown`
  - `/help/[help_slug]` — **10 URLs** (1.3% of site) · Archetype: *Documentation / Knowledge Base*
    - Sample URLs: `https://subscribr.ai/help/video-ideas`, `https://subscribr.ai/help/getting-started`, `https://subscribr.ai/help/chat-ideation`
- **Pricing & Conversion Mechanics**:
  - Tiers Detected: `1` | Annual Discount: `20% OFF` | Free Trial / Tier: `Trial/Paid`
- **Replicable Engineering & Growth Actions**:
  1. Add a `## For AI agents` Block Inside Your `/llms.txt`: Subscribr doesn't just list web links in `/llms.txt` — it links directly to `/agent-setup/prompt.md` and its CLI/MCP skill installer so AI agents can onboard users autonomously.
  1. Nest Competitor Comparisons Inside Your Topical Authority Silo (`/youtube-strategy/[tool_a]-vs-[tool_b]` — 20 pages): Keeps all 624 strategy and comparison URLs inside one high-authority subfolder.
  1. Price for Serious Creators & Studios (`$0` Free -> `$99/mo` Creator -> `$249/mo` Automation -> `$499/mo` Scale with `Annual 2 months free`): High ARPU allows profitable growth with just a few thousand customers.

### 3.12 My AskAI (`myaskai.com`) — $40,000 MRR (~$500,000 ARR)
- **Canonical Teardown URL**: https://taste-skill.pages.dev/teardowns/myaskai/
- **Founders**: Alex Rainey & Mike Heap (2 co-founders, UK)
- **Category**: B2B AI Customer Support Agent (Intercom / Zendesk / Gorgias Drop-in)
- **Revenue Disclosure (2025-07-10)**: https://www.indiehackers.com/post/tech/bootstrapping-to-40k-mrr-after-his-vc-backed-startup-failed-LF1CwRs1vL3oVLcuoIoE (Secondary: https://myaskai.com/pricing)
- **Incumbent Wedge**: Undercuts Intercom Fin and Zendesk AI ($0.99/resolution) by nearly 90% ($0.10–$0.12/ticket or $49–$199/mo) while plugging directly into the helpdesk the company already uses.
- **Core Value Proposition**: Match or beat the quality of your helpdesk's native AI agent at a fraction of the cost — plugs straight into Intercom, Zendesk, Freshdesk, and HubSpot.
- **Sitemap & GEO Telemetry**:
  - Total Sitemap URLs Discovered: `99`
  - Programmatic SEO (pSEO) URLs: `80` (`80.8%` pSEO share)
  - `robots.txt` Present: `Yes`
  - `/llms.txt` Present: `No`
- **Top Programmatic Route Families**:
  - `/blog/[blog_slug]` — **24 URLs** (24.2% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `How TravelJoy hit 80% AI resolution, saving 193 hrs/month`
    - Sample URLs: `https://myaskai.com/blog/my-askai-traveljoy-case-study-2026`, `https://myaskai.com/blog/my-askai-givecard-case-study`, `https://myaskai.com/blog/my-askai-honeygain-case-study`
  - `/compare/[tool_a]-vs-[tool_b]` — **10 URLs** (10.1% of site) · Archetype: *Head-to-Head Comparison Hub (/compare/[a]-vs-[b])* · Title Formula: `Freshdesk Freddy vs Zendesk AI Pricing Compared [2026]`
    - Sample URLs: `https://myaskai.com/compare/freshdesk-vs-zendesk-ai-pricing`, `https://myaskai.com/compare/intercom-vs-hubspot-ai-pricing`, `https://myaskai.com/compare/gorgias-vs-zendesk-ai-pricing`
  - `/features/[feature_slug]` — **10 URLs** (10.1% of site) · Archetype: *Programmatic Directory / Hub (/features/...)* · Title Formula: `{Primary Keyword / Variable Title} | My AskAI`
    - Sample URLs: `https://myaskai.com/features/testing-and-qa`, `https://myaskai.com/features/copilot-internal-note-reply`, `https://myaskai.com/features/chatbot-to-human-handoff`
  - `/ai-agent-integration/[ai_agent_integration_slug]` — **8 URLs** (8.1% of site) · Archetype: *Programmatic Directory / Hub (/ai-agent-integration/...)* · Title Formula: `{Primary Keyword / Variable Title} | My AskAI`
    - Sample URLs: `https://myaskai.com/ai-agent-integration/intercom`, `https://myaskai.com/ai-agent-integration/hubspot`, `https://myaskai.com/ai-agent-integration/zendesk-messaging`
  - `/industry-use-cases/[industry_use_case_slug]` — **8 URLs** (8.1% of site) · Archetype: *Programmatic Directory / Hub (/industry-use-cases/...)* · Title Formula: `{Primary Keyword / Variable Title} | My AskAI`
    - Sample URLs: `https://myaskai.com/industry-use-cases/saas`, `https://myaskai.com/industry-use-cases/marketplace`, `https://myaskai.com/industry-use-cases/ecommerce`
  - `/ai-support-agent-roi-calculator/[ai_support_agent_roi_calculator_slug]` — **7 URLs** (7.1% of site) · Archetype: *Programmatic Directory / Hub (/ai-support-agent-roi-calculator/...)*
    - Sample URLs: `https://myaskai.com/ai-support-agent-roi-calculator/intercom`, `https://myaskai.com/ai-support-agent-roi-calculator/hubspot`, `https://myaskai.com/ai-support-agent-roi-calculator/zendesk-messaging`
- **Pricing & Conversion Mechanics**:
  - Tiers Detected: `0` | Annual Discount: `20% OFF` | Free Trial / Tier: `Trial/Paid`
- **Replicable Engineering & Growth Actions**:
  1. Build a Drop-In Tax Cutter for Expensive Incumbent Add-Ons: When incumbents like Intercom or Zendesk charge $0.99 per AI resolution, positioning right inside their ecosystem at $0.10/ticket creates an instant ROI calculation.
  1. Pair `/compare/[incumbent]-vs-[you]` (10 pages) with `/ai-agent-integration/[platform]` (8 pages): Capture both users researching native helpdesk AI pricing and users searching for third-party plugins.
  1. Offer Annual 33% Discount + Monthly Account Audits on Higher Tiers (`$49/mo`, `$199/mo`, `$499/mo`): Combines self-serve SaaS with high-retention white-glove ticket audits.

### 3.13 Testimonial.to (`testimonial.to`) — $33,333+ MRR ($400,000+ ARR, later $800k+ ARR)
- **Canonical Teardown URL**: https://taste-skill.pages.dev/teardowns/testimonial/
- **Founders**: Damon Chen (Solo technical founder)
- **Category**: Video & Text Testimonial Collection & Wall of Love SaaS
- **Revenue Disclosure (2022-11-18)**: https://thebootstrappedfounder.com/a-conversation-with-damon-chen/ (Secondary: https://www.indiehackers.com/post/hit-100k-arr-after-9-months-grinding-as-a-solo-founder-ama-584379b1f6)
- **Incumbent Wedge**: Pioneered the frictionless browser-based video testimonial collector and embeddable Wall of Love widget for B2B SaaS, creators, and agencies without requiring customers to download an app.
- **Core Value Proposition**: Capture, measure & showcase customer love — collect video and text testimonials in minutes and embed a Wall of Love with zero code.
- **Sitemap & GEO Telemetry**:
  - Total Sitemap URLs Discovered: `802`
  - Programmatic SEO (pSEO) URLs: `780` (`97.3%` pSEO share)
  - `robots.txt` Present: `Yes`
  - `/llms.txt` Present: `Yes (772 chars)`
- **Top Programmatic Route Families**:
  - `/resources/[resource_slug]` — **455 URLs** (56.7% of site) · Archetype: *Programmatic Directory / Hub (/resources/...)* · Title Formula: `How to Monitor Brand Mentions on X (Twitter)`
    - Sample URLs: `https://testimonial.to/resources/twitter-monitoring`, `https://testimonial.to/resources/nps-survey-examples`, `https://testimonial.to/resources/in-app-nps-survey`
  - `/integrations/[integration_slug]` — **141 URLs** (17.6% of site) · Archetype: *Integration Ecosystem pSEO (/integrations/[app-slug])* · Title Formula: `How to embed reviews on Wix`
    - Sample URLs: `https://testimonial.to/integrations/wix`, `https://testimonial.to/integrations/carrd`, `https://testimonial.to/integrations/notion`
  - `/resources/how-to-[topic]` — **105 URLs** (13.1% of site) · Archetype: *Programmatic Directory / Hub (/resources/...)* · Title Formula: `How to Create an NPS Survey (20-Minute Setup)`
    - Sample URLs: `https://testimonial.to/resources/how-to-create-nps-survey`, `https://testimonial.to/resources/how-to-calculate-nps`, `https://testimonial.to/resources/what-is-database-management`
  - `/tutorials/[tutorial_slug]` — **18 URLs** (2.2% of site) · Archetype: *Programmatic Directory / Hub (/tutorials/...)* · Title Formula: `Answering the most Googled questions`
    - Sample URLs: `https://testimonial.to/tutorials/answering-testimonial-questions`, `https://testimonial.to/tutorials/collect-testimonials-within-course`, `https://testimonial.to/tutorials/embed-capterra-reviews-on-webflow`
  - `/static/[static_slug]/[sub_item_slug]` — **14 URLs** (1.7% of site) · Archetype: *Programmatic Directory / Hub (/static/...)*
    - Sample URLs: `https://testimonial.to/static/js/index.05fdca4d.js`, `https://testimonial.to/static/js/80829e7a.js`, `https://testimonial.to/static/js/5d665eb4.js`
  - `/tools/[tool_slug]` — **10 URLs** (1.2% of site) · Archetype: *Free Tool / Micro-Utility Hub (/tools/[tool-slug])*
    - Sample URLs: `https://testimonial.to/tools/case-study-generator`, `https://testimonial.to/tools/email-template-generator`, `https://testimonial.to/tools/video-testimonial-script-generator`
- **Pricing & Conversion Mechanics**:
  - Tiers Detected: `0` | Annual Discount: `20% OFF` | Free Trial / Tier: `Trial/Paid`
- **Replicable Engineering & Growth Actions**:
  1. Kill Lifetime Deals (LTDs) Early When Hosting Costs Scale: Damon Chen famously killed his LTD after 10 days ($5,124) and forced himself to build recurring MRR, reaching $100k ARR 9 months later.
  1. Ship 140+ `/integrations/[platform]` Pages for Every No-Code & CMS Tool: Even if your embed works via a universal 2-line `<script>` tag, create a dedicated step-by-step guide page for each of the 141 platforms your buyers use.
  1. Deploy a Concise `/llms.txt` Index (`772 chars`): Maps core product routes (`/features`, `/pricing`, `/widgets`, `/wall-of-love`, `/integrations`) for instant AI search citation.

### 3.14 ScreenshotOne (`screenshotone.com`) — $33,000 MRR (~$400k ARR; ~$36k MRR by Sept 2026)
- **Canonical Teardown URL**: https://taste-skill.pages.dev/teardowns/screenshotone/
- **Founders**: Dmytro Krasun (Solo technical founder)
- **Category**: Developer API / Automated Website Screenshot & Rendering Engine
- **Revenue Disclosure (2026-05-29)**: https://dmytrokrasun.com/posts/screenshotone-4-years/ (Secondary: https://dmytrokrasun.com/posts/20k-mrr-whats-next/)
- **Incumbent Wedge**: Solves the nightmare of maintaining headless Chromium clusters, cookie-banner blocking, ad blocking, and residential proxies with a clean REST API and SDKs built specifically for developers and AI agents.
- **Core Value Proposition**: The screenshot API for developers and AI agents — render clean screenshots, PDFs, and videos without cookie banners or ads in one API call.
- **Sitemap & GEO Telemetry**:
  - Total Sitemap URLs Discovered: `644`
  - Programmatic SEO (pSEO) URLs: `617` (`95.8%` pSEO share)
  - `robots.txt` Present: `Yes`
  - `/llms.txt` Present: `Yes (926 chars)`
- **Top Programmatic Route Families**:
  - `/changelog/[changelog_slug]` — **165 URLs** (25.6% of site) · Archetype: *Programmatic Directory / Hub (/changelog/...)* · Title Formula: `{Primary Keyword / Variable} — Page 2`
    - Sample URLs: `https://screenshotone.com/changelog/2/`, `https://screenshotone.com/changelog/3/`, `https://screenshotone.com/changelog/4/`
  - `/blog/[blog_slug]` — **134 URLs** (20.8% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `{Primary Keyword / Variable} — Page 2`
    - Sample URLs: `https://screenshotone.com/blog/2/`, `https://screenshotone.com/blog/3/`, `https://screenshotone.com/blog/4/`
  - `/docs/[doc_slug]/[sub_item_slug]` — **65 URLs** (10.1% of site) · Archetype: *Documentation / Knowledge Base* · Title Formula: `{Primary Keyword / Variable Title} | ScreenshotOne Docs`
    - Sample URLs: `https://screenshotone.com/docs/code-examples/c-net/`, `https://screenshotone.com/docs/code-examples/go/`, `https://screenshotone.com/docs/code-examples/java/`
  - `/use-cases/[use_case_slug]` — **49 URLs** (7.6% of site) · Archetype: *Use-Case Solution Pages (/use-cases/[persona-or-workflow])* · Title Formula: `The Screenshot API for AI Agents With Browser Observation`
    - Sample URLs: `https://screenshotone.com/use-cases/ai-agents/`, `https://screenshotone.com/use-cases/ai-landing-page-roasting/`, `https://screenshotone.com/use-cases/ai-vision-web-page-analysis/`
  - `/contributors/[contributor_slug]` — **31 URLs** (4.8% of site) · Archetype: *Programmatic Directory / Hub (/contributors/...)* · Title Formula: `{Primary Keyword / Variable Title} | ScreenshotOne`
    - Sample URLs: `https://screenshotone.com/contributors/anatoly-pashias/`, `https://screenshotone.com/contributors/andy-hooke/`, `https://screenshotone.com/contributors/anthony-alaribe/`
  - `/blog/how-to-[topic]` — **28 URLs** (4.3% of site) · Archetype: *Content / Editorial Blog Cluster*
    - Sample URLs: `https://screenshotone.com/blog/how-to-add-custom-scripts-to-a-page-in-puppeteer/`, `https://screenshotone.com/blog/how-to-add-custom-styles-to-a-page-in-puppeteer/`, `https://screenshotone.com/blog/how-to-block-requests-with-puppeteer/`
- **Pricing & Conversion Mechanics**:
  - Tiers Detected: `0` | Annual Discount: `20% OFF` | Free Trial / Tier: `Trial/Paid`
- **Replicable Engineering & Growth Actions**:
  1. Create a Dedicated `/ai-information/` Page and Link It First in `/llms.txt`: ScreenshotOne explicitly feeds AI assistants a single ground-truth page with verified pricing, limits, and SDK links so LLMs never hallucinate its specs.
  1. Pair 49 `/use-cases/[slug]` Pages with 134 Technical Language Tutorials (`Puppeteer vs Playwright vs API`): Capture developers at the exact moment their self-hosted headless Chrome script crashes in production.
  1. Clear Usage-Tier Pricing (`$17/mo` -> `$79/mo` -> `$259/mo` with `Annually 2 months free` + 10 objection-handling FAQs).

### 3.15 SuperX (`superx.so`) — $23,000 MRR ($276,000 ARR)
- **Canonical Teardown URL**: https://taste-skill.pages.dev/teardowns/superx/
- **Founders**: Rob Hallam (Indie founder)
- **Category**: Creator Economy / X (Twitter) Analytics & Growth Suite
- **Revenue Disclosure (2025-09-10)**: https://www.indiehackers.com/post/tech/hitting-23k-mrr-in-six-months-after-five-failures-4d64o9ev4AXXhX9ogHQQ (Secondary: https://superx.so/pricing)
- **Incumbent Wedge**: Out-positions legacy Twitter schedulers (TweetHunter, Hypefury, Typefully) with real-time algorithm analytics, Chrome sidebar integration, and public creator profile intelligence.
- **Core Value Proposition**: Find your voice, spot rising trends, and grow faster on X with AI-assisted analytics and scheduling.
- **Sitemap & GEO Telemetry**:
  - Total Sitemap URLs Discovered: `1664`
  - Programmatic SEO (pSEO) URLs: `1636` (`98.3%` pSEO share)
  - `robots.txt` Present: `Yes`
  - `/llms.txt` Present: `No`
- **Top Programmatic Route Families**:
  - `/creators/[creator_slug]` — **828 URLs** (49.8% of site) · Archetype: *Programmatic Directory / Hub (/creators/...)* · Title Formula: `{Primary Keyword / Variable Title} | Top Creators & Influencers Analysis`
    - Sample URLs: `https://superx.so/creators/popular`, `https://superx.so/creators/new`, `https://superx.so/creators/best`
  - `/blog/[blog_slug]` — **546 URLs** (32.8% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `SuperX Playbook`
    - Sample URLs: `https://superx.so/blog/superx-playbook`, `https://superx.so/blog/twitter-keywords-analysis`, `https://superx.so/blog/twitter-analytics-mobile`
  - `/blog/how-to-[topic]` — **177 URLs** (10.6% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `What Is Twitter Analytics in 2026? a Plain-English Guide`
    - Sample URLs: `https://superx.so/blog/what-is-twitter-analytics`, `https://superx.so/blog/what-is-influencer`, `https://superx.so/blog/how-to-delete-tweet-on-twitter`
  - `/[root-landing-slug]` — **28 URLs** (1.7% of site) · Archetype: *Root-Level Long-Tail SEO Landing Pages* · Title Formula: `{Primary Keyword / Variable Title} | Health Score & Account Analysis Tool`
    - Sample URLs: `https://superx.so/tweet-hunter-alternatives`, `https://superx.so/x-profile-audit`, `https://superx.so/best-time-to-tweet`
  - `/twitter-trends/[twitter_trend_slug]` — **19 URLs** (1.1% of site) · Archetype: *Programmatic Directory / Hub (/twitter-trends/...)* · Title Formula: `Twitter Trends in United States: Live Topics`
    - Sample URLs: `https://superx.so/twitter-trends/united-states`, `https://superx.so/twitter-trends/united-kingdom`, `https://superx.so/twitter-trends/india`
  - `/creators/[creator_slug]/[sub_item_slug]` — **14 URLs** (0.8% of site) · Archetype: *Programmatic Directory / Hub (/creators/...)*
    - Sample URLs: `https://superx.so/creators/archetypes/achiever`, `https://superx.so/creators/archetypes/activist`, `https://superx.so/creators/archetypes/analyst`
- **Pricing & Conversion Mechanics**:
  - Tiers Detected: `0` | Annual Discount: `20% OFF` | Free Trial / Tier: `Trial/Paid`
- **Replicable Engineering & Growth Actions**:
  1. Build a Public Profile Directory (`/creators/[handle]` — 828 pages): If your SaaS analyzes public entities (creators, repos, domains, podcasts, stores), pre-generate 500–1,000 public analysis pages. Ego-searches and creator shares drive zero-cost viral traffic.
  1. Ship `/[your_brand]-vs-[competitor]` for the Top 5 Incumbents on Day 1: SuperX targets `tweethunter`, `hypefury`, and `typefully` directly at root URL slugs.
  1. Charge Premium Creator Pricing (`$49/mo` -> `$99/mo` Advanced -> `$199/mo` Ultra): Avoid $9/mo race-to-the-bottom pricing when your tool directly drives audience & revenue growth.

### 3.16 Hypefury (`hypefury.com`) — $23,000+ MRR ($276,000+ ARR)
- **Canonical Teardown URL**: https://taste-skill.pages.dev/teardowns/hypefury/
- **Founders**: Samy Dindane & Yannick Veys (Co-founders, met on Indie Hackers)
- **Category**: Creator Economy / Social Media Scheduling & Monetization Automation
- **Revenue Disclosure (2021-08-15)**: https://www.indiehackers.com/post/flying-past-23k-mrr-in-2-years-hypefury-45f73f0c0a (Secondary: https://www.indiehackers.com/post/i-co-founded-hypefury-and-scaled-it-to-22k-mrr-ama-318a451a36)
- **Incumbent Wedge**: Differentiated from Buffer and Hootsuite by focusing purely on audience growth and monetization loops (auto-retweeting evergreen posts, auto-plugging newsletters/Gumroad links under viral tweets).
- **Core Value Proposition**: Social media scheduling & automation for creators — build and monetize your X, LinkedIn, Instagram, and email list on autopilot.
- **Sitemap & GEO Telemetry**:
  - Total Sitemap URLs Discovered: `548`
  - Programmatic SEO (pSEO) URLs: `466` (`85%` pSEO share)
  - `robots.txt` Present: `Yes`
  - `/llms.txt` Present: `No`
- **Top Programmatic Route Families**:
  - `/blog/[blog_slug]/[sub_item_slug]` — **219 URLs** (40% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `{Primary Keyword / Variable} — Social Media Scheduling &amp; Automation`
    - Sample URLs: `https://hypefury.com/blog/en/how-alex-brogan-went-from-4-7k-to-280k-followers-in-20-months-and-multiplied-his-income-sources/`, `https://hypefury.com/blog/en/the-best-twitter-tools/`, `https://hypefury.com/blog/en/schedule-tweets-scheduler-twitter/`
  - `/[root-landing-slug]` — **63 URLs** (11.5% of site) · Archetype: *Root-Level Long-Tail SEO Landing Pages* · Title Formula: `{Primary Keyword / Variable} — Social Media Scheduling &amp; Automation`
    - Sample URLs: `https://hypefury.com/reel-daily-confirmed/`, `https://hypefury.com/join-linkedin-growth-notes-from-autoresponder/`, `https://hypefury.com/the-ultimate-bluesky-growth-guide/`
  - `/blog/[blog_slug]/how-to-[topic]` — **40 URLs** (7.3% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `{Primary Keyword / Variable} — Social Media Scheduling &amp; Automation`
    - Sample URLs: `https://hypefury.com/blog/en/how-to-download-a-bluesky-video/`, `https://hypefury.com/blog/uncategorized/how-to-schedule-linkedin-posts-in-2026/`, `https://hypefury.com/blog/en/how-to-turn-your-tweets-to-instagram-posts/`
  - `/tools/[tool_slug]` — **14 URLs** (2.6% of site) · Archetype: *Free Tool / Micro-Utility Hub (/tools/[tool-slug])* · Title Formula: `{Primary Keyword / Variable} — Social Media Scheduling &amp; Automation`
    - Sample URLs: `https://hypefury.com/tools/x-twitter-fonts-generator/`, `https://hypefury.com/tools/fake-revenue-generator/`, `https://hypefury.com/tools/fake-x-twitter-creator-payouts-generator/`
  - `/instagram/[instagram_slug]` — **11 URLs** (2% of site) · Archetype: *Programmatic Directory / Hub (/instagram/...)* · Title Formula: `{Primary Keyword / Variable} — Social Media Scheduling &amp; Automation`
    - Sample URLs: `https://hypefury.com/instagram/best-instagram-hashtags/`, `https://hypefury.com/instagram/growing-followers-on-instagram/`, `https://hypefury.com/instagram/instagram-trends/`
  - `/instagram/how-to-[topic]` — **9 URLs** (1.6% of site) · Archetype: *Programmatic Directory / Hub (/instagram/...)*
    - Sample URLs: `https://hypefury.com/instagram/how-to-download-an-instagram-reel/`, `https://hypefury.com/instagram/how-to-create-an-instagram-grid-post/`, `https://hypefury.com/instagram/how-to-turn-off-comments-on-instagram/`
- **Pricing & Conversion Mechanics**:
  - Tiers Detected: `2` | Annual Discount: `20% OFF` | Free Trial / Tier: `Trial/Paid`
- **Replicable Engineering & Growth Actions**:
  1. Build Features That Advertise Themselves in Public Feeds: Hypefury's Auto-Plug and Tweet-to-Instagram-Screenshot templates naturally prompt followers to ask "What tool are you using?"
  1. Combine `/tools/[tool_slug]` (14 free tools) with `/blog/[category]/how-to-[topic]` (259 articles): Use how-to guides to rank for creator questions and funnel readers into free interactive tools.
  1. Test Price Increases to Cut High-Maintenance Churn: In their IH AMA, Yannick revealed raising prices boosted MRR from $13k to $19k (+46%) while ultimately stabilizing churn at 7%.

### 3.17 Pirsch Analytics (`pirsch.io`) — $14,300 MRR (~$130,000/yr net volume)
- **Canonical Teardown URL**: https://taste-skill.pages.dev/teardowns/pirsch/
- **Founders**: Marvin Blum & Daniel (2 German technical co-founders)
- **Category**: Privacy-Friendly Cookie-Free Web Analytics (Go-based)
- **Revenue Disclosure (2025-12-20)**: https://pirsch.io/blog/our-recap-of-2025/ (Secondary: https://www.indiehackers.com/post/2024-recap-being-in-the-weird-state-of-a-mid-sized-saas-YCFfLxRmJWUEPz7hv9cZ)
- **Incumbent Wedge**: Competes with GA4, Plausible, and Fathom by offering an ultra-fast Go backend, built-in server-side tracking SDKs, URL shortener, and lower entry pricing ($6/mo) with full white-label agency support.
- **Core Value Proposition**: See beyond clicks with the best privacy-friendly, cookie-free Google Analytics alternative — built in Germany for speed and developer extensibility.
- **Sitemap & GEO Telemetry**:
  - Total Sitemap URLs Discovered: `938`
  - Programmatic SEO (pSEO) URLs: `789` (`84.1%` pSEO share)
  - `robots.txt` Present: `Yes`
  - `/llms.txt` Present: `No`
- **Top Programmatic Route Families**:
  - `/glossary/[glossary_slug]` — **560 URLs** (59.7% of site) · Archetype: *SEO Glossary / Concept Wiki (/glossary/[term])* · Title Formula: `404 Não Encontrado – Pirsch Analytics`
    - Sample URLs: `https://pirsch.io/pt/glossary/404-not-found`, `https://pirsch.io/fr/glossary/channel`, `https://pirsch.io/de/glossary/cost-per-click`
  - `/atlas/[atla_slug]` — **144 URLs** (15.4% of site) · Archetype: *Programmatic Directory / Hub (/atlas/...)* · Title Formula: `Enterprise Analytics – Pirsch Analytics`
    - Sample URLs: `https://pirsch.io/de/atlas/enterprise-analytics`, `https://pirsch.io/fr/atlas/sales-analytics`, `https://pirsch.io/ja/atlas/social-media-analytics`
  - `/[root-landing-slug]` — **39 URLs** (4.2% of site) · Archetype: *Root-Level Long-Tail SEO Landing Pages* · Title Formula: `Analytics para Laravel y Filament – Pirsch Analytics`
    - Sample URLs: `https://pirsch.io/es/laravel-filament-analytics`, `https://pirsch.io/pt/laravel-filament-analytics`, `https://pirsch.io/nl/white-label-analytics`
  - `/blog/[blog_slug]` — **18 URLs** (1.9% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `Introducing Pirsch Analytics 2.0: Custom Domains, Themes, Organizations and More`
    - Sample URLs: `https://pirsch.io/blog/introducing-pirsch-analytics-2.0/`, `https://pirsch.io/blog/google-analytics-declared-illegal-by-austrian-dsb/`, `https://pirsch.io/blog/our-recap-of-2021/`
  - `/discourse/[discourse_slug]` — **8 URLs** (0.9% of site) · Archetype: *Programmatic Directory / Hub (/discourse/...)* · Title Formula: `Iniciar sesión en Discourse – Pirsch Analytics`
    - Sample URLs: `https://pirsch.io/es/discourse/login`, `https://pirsch.io/fr/discourse/login`, `https://pirsch.io/it/discourse/login`
  - `/[locale]` — **7 URLs** (0.7% of site) · Archetype: *Localized Homepage*
    - Sample URLs: `https://pirsch.io/ja`, `https://pirsch.io/de`, `https://pirsch.io/it`
- **Pricing & Conversion Mechanics**:
  - Tiers Detected: `1` | Annual Discount: `20% OFF` | Free Trial / Tier: `Trial/Paid`
- **Replicable Engineering & Growth Actions**:
  1. Pair a 560-Page `/glossary/[term]` Engine with a 144-Page `/atlas/[region]` Data Hub: Even in a crowded market like privacy analytics, Pirsch built 704 programmatic reference pages to capture top-of-funnel developer and marketer searches.
  1. Publish Honest Annual Founder Recaps (`/blog/our-recap-of-2025/`): Radical transparency about MRR ($14,300), subscriber count (627), and net volume ($130k) earns recurring Hacker News and Indie Hackers backlinks.
  1. Differentiate via Backend SDKs & White-Label APIs: When UI features commoditize, offering first-class server-side SDKs (Go, PHP, Python, Node) and agency white-labeling locks in low-churn B2B customers.

### 3.18 SiteGuru (`siteguru.co`) — $14,000 MRR ($168,000 ARR)
- **Canonical Teardown URL**: https://taste-skill.pages.dev/teardowns/siteguru/
- **Founders**: Rick van Haasteren (Solo founder, Netherlands)
- **Category**: Actionable SEO Audit & Monitoring SaaS
- **Revenue Disclosure (2025-10-02)**: https://www.indiehackers.com/post/tech/building-an-seo-product-to-14k-mrr-in-a-crowded-market-gU4DE1l094cpj1GjNHwu (Secondary: https://www.siteguru.co/pricing)
- **Incumbent Wedge**: Replaces overwhelming 500-column enterprise crawlers (Screaming Frog, Ahrefs, Semrush) with a plain-English prioritized weekly SEO Todo List connectable to Google Search Console & GA4.
- **Core Value Proposition**: An actionable SEO todo list — we audit your website and tell you exactly where to start to improve your rankings.
- **Sitemap & GEO Telemetry**:
  - Total Sitemap URLs Discovered: `254`
  - Programmatic SEO (pSEO) URLs: `228` (`89.8%` pSEO share)
  - `robots.txt` Present: `Yes`
  - `/llms.txt` Present: `No`
- **Top Programmatic Route Families**:
  - `/seo-academy/[seo_academy_slug]` — **172 URLs** (67.7% of site) · Archetype: *Programmatic Directory / Hub (/seo-academy/...)* · Title Formula: `{Primary Keyword / Variable Title} | SiteGuru`
    - Sample URLs: `https://www.siteguru.co/seo-academy/seo-fundamentals`, `https://www.siteguru.co/seo-academy/on-page-optimization`, `https://www.siteguru.co/seo-academy/technical-seo`
  - `/features/[feature_slug]` — **21 URLs** (8.3% of site) · Archetype: *Programmatic Directory / Hub (/features/...)* · Title Formula: `{Primary Keyword / Variable Title} | SiteGuru`
    - Sample URLs: `https://www.siteguru.co/features/technical-seo-audit`, `https://www.siteguru.co/features/backlink-monitoring`, `https://www.siteguru.co/features/backlink-insights`
  - `/free-seo-tools/[free_seo_tool_slug]` — **16 URLs** (6.3% of site) · Archetype: *Programmatic Directory / Hub (/free-seo-tools/...)* · Title Formula: `{Primary Keyword / Variable Title} | SiteGuru`
    - Sample URLs: `https://www.siteguru.co/free-seo-tools/meta-description-generator`, `https://www.siteguru.co/free-seo-tools/page-title-generator`, `https://www.siteguru.co/free-seo-tools/ctr-curve`
  - `/client-stories/[client_storie_slug]` — **6 URLs** (2.4% of site) · Archetype: *Programmatic Directory / Hub (/client-stories/...)* · Title Formula: `{Primary Keyword / Variable Title} | SiteGuru`
    - Sample URLs: `https://www.siteguru.co/client-stories/the-search-engineers`, `https://www.siteguru.co/client-stories/vingard-digital-marketing`, `https://www.siteguru.co/client-stories/the-brand-auditors`
  - `/[root-landing-slug]` — **3 URLs** (1.2% of site) · Archetype: *Root-Level Long-Tail SEO Landing Pages* · Title Formula: `{Primary Keyword / Variable Title} | SiteGuru`
    - Sample URLs: `https://www.siteguru.co/screaming-frog-alternative`, `https://www.siteguru.co/se-ranking-alternative`, `https://www.siteguru.co/free-seo-tools`
  - `/seo-academy/how-to-[topic]` — **3 URLs** (1.2% of site) · Archetype: *Programmatic Directory / Hub (/seo-academy/...)*
    - Sample URLs: `https://www.siteguru.co/seo-academy/how-to-use-siteguru`, `https://www.siteguru.co/seo-academy/how-to-set-up-shopify-crawl-signatures`, `https://www.siteguru.co/seo-academy/what-is-backlink-spam-score`
- **Pricing & Conversion Mechanics**:
  - Tiers Detected: `4` | Annual Discount: `20% OFF` | Free Trial / Tier: `Trial/Paid`
- **Replicable Engineering & Growth Actions**:
  1. Build 10–15 Single-Purpose Free Checkers (`/free-seo-tools/[slug]`): Extract one micro-check from your paid backend and expose it as an instant free web tool with an upsell to "Monitor your entire site weekly".
  1. Price by Website Count with Identical Feature Access (`$49` Small 5 sites -> `$99` Medium 15 sites `[Most popular]` -> `$199` Large 50 sites): Including `MCP access` and `White label reports` across all tiers makes agency upgrades frictionless.
  1. Localize into Your Home Non-English Market (`/nl/`): SiteGuru includes Dutch (`nl`) pages alongside English.

### 3.19 SEO Utils (`seoutils.app`) — ~$10,400/mo ($15,800/mo founder portfolio)
- **Canonical Teardown URL**: https://taste-skill.pages.dev/teardowns/seoutils/
- **Founders**: Phuc Le (Solo indie founder)
- **Category**: Desktop SEO Application (macOS, Windows, Linux) + BYOK Data API
- **Revenue Disclosure (2026-02-24)**: https://www.indiehackers.com/post/tech/staying-close-to-customers-and-hitting-16k-mo-VTKxLk4uanWJbmSdG4km (Secondary: https://seoutils.app/#pricing)
- **Incumbent Wedge**: Eliminates $129–$499/mo recurring Ahrefs/Semrush subscriptions by offering a native cross-platform desktop app ($69 license + $59.99/yr updates) that plugs directly into pay-as-you-go DataForSEO APIs ($1.50–$2.30 per thousand queries).
- **Core Value Proposition**: An SEO desktop application built for macOS, Windows, and Linux — pay only pennies for raw SEO data instead of $200+/mo subscriptions.
- **Sitemap & GEO Telemetry**:
  - Total Sitemap URLs Discovered: `19`
  - Programmatic SEO (pSEO) URLs: `16` (`84.2%` pSEO share)
  - `robots.txt` Present: `No`
  - `/llms.txt` Present: `No`
- **Top Programmatic Route Families**:
  - `/_nuxt/[_nuxt_slug]` — **13 URLs** (68.4% of site) · Archetype: *Programmatic Directory / Hub (/_nuxt/...)*
    - Sample URLs: `https://seoutils.app/_nuxt/entry.85c63de4.js`, `https://seoutils.app/_nuxt/index.53c2bd6a.js`, `https://seoutils.app/_nuxt/Footer.614cebeb.js`
  - `/[root-landing-slug]` — **2 URLs** (10.5% of site) · Archetype: *Root-Level Long-Tail SEO Landing Pages* · Title Formula: `apple-touch-icon.png (192×192)`
    - Sample URLs: `https://seoutils.app/apple-touch-icon.png`, `https://seoutils.app/fan-out-query`
- **Pricing & Conversion Mechanics**:
  - Tiers Detected: `0` | Annual Discount: `20% OFF` | Free Trial / Tier: `Trial/Paid`
- **Replicable Engineering & Growth Actions**:
  1. Use BYOK (Bring Your Own Key / Wholesale API) + Desktop License to Undercut $200/mo SaaS Giants: When data APIs cost pennies wholesale, packaging a slick local UI for $69 + $59.99/yr renewal creates an irresistible math equation.
  1. Ship Feature Landing Pages for Brand-New Industry Jargon (`/fan-out-query`): Be the first tool with a dedicated landing page for new technical terms before big incumbents update their marketing.
  1. Anchor Your Pricing Against Annual Incumbent Spend ($4,200/yr vs $69): Showing 12-month cumulative competitor cost makes a $69 purchase feel like an instant 98% savings.

### 3.20 Leave Me Alone (`leavemealone.com`) — $10,000/mo (Open Startup verified)
- **Canonical Teardown URL**: https://taste-skill.pages.dev/teardowns/leavemealone/
- **Founders**: Danielle Johnson & James Ivings (2 co-founders)
- **Category**: Consumer & Prosumer Privacy SaaS / Email Unsubscribe & Inbox Shield
- **Revenue Disclosure (2023-08-15)**: https://leavemealone.com/blog/from-indie-side-project-to-profitable-business/ (Secondary: https://leavemealone.com/blog/how-we-share-company-stats-and-metrics-publicly/)
- **Incumbent Wedge**: Competes with 'free' email cleaners (Unroll.me, which famously got caught selling user inbox receipt data to Uber) by charging transparent privacy-first prices and never storing or selling email content.
- **Core Value Proposition**: Easily unsubscribe from unwanted emails and clean your inbox without sacrificing your privacy.
- **Sitemap & GEO Telemetry**:
  - Total Sitemap URLs Discovered: `14802`
  - Programmatic SEO (pSEO) URLs: `14623` (`98.8%` pSEO share)
  - `robots.txt` Present: `Yes`
  - `/llms.txt` Present: `No`
- **Top Programmatic Route Families**:
  - `/how-to-unsubscribe-from/[how_to_unsubscribe_from_slug]` — **14264 URLs** (96.4% of site) · Archetype: *Programmatic Directory / Hub (/how-to-unsubscribe-from/...)* · Title Formula: `{Primary Keyword / Variable} — Leave Me Alone`
    - Sample URLs: `https://leavemealone.com/how-to-unsubscribe-from/amazon/`, `https://leavemealone.com/fr/how-to-unsubscribe-from/amazon/`, `https://leavemealone.com/it/how-to-unsubscribe-from/amazon/`
  - `/blog/[blog_slug]` — **153 URLs** (1% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `{Primary Keyword / Variable} — Leave Me Alone`
    - Sample URLs: `https://leavemealone.com/blog/why-that-scam-email-knows-so-much-about-you/`, `https://leavemealone.com/blog/burner-email-addresses/`, `https://leavemealone.com/fr/blog/burner-email-addresses/`
  - `/[root-landing-slug]` — **74 URLs** (0.5% of site) · Archetype: *Root-Level Long-Tail SEO Landing Pages* · Title Formula: `{Primary Keyword / Variable} — Leave Me Alone`
    - Sample URLs: `https://leavemealone.com/do-not-disturb/`, `https://leavemealone.com/fr/do-not-disturb/`, `https://leavemealone.com/it/do-not-disturb/`
  - `/blog/how-to-[topic]` — **38 URLs** (0.3% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `{Primary Keyword / Variable} — Leave Me Alone`
    - Sample URLs: `https://leavemealone.com/blog/how-to-send-an-anonymous-email/`, `https://leavemealone.com/fr/blog/how-to-send-an-anonymous-email/`, `https://leavemealone.com/blog/how-to-choose-a-vpn/`
  - `/blog/tag/[sub_item_slug]` — **34 URLs** (0.2% of site) · Archetype: *Content / Editorial Blog Cluster* · Title Formula: `{Primary Keyword / Variable} — Leave Me Alone`
    - Sample URLs: `https://leavemealone.com/blog/tag/addy`, `https://leavemealone.com/blog/tag/aliases`, `https://leavemealone.com/blog/tag/anonymous-email`
  - `/favicons/[favicon_slug]` — **14 URLs** (0.1% of site) · Archetype: *Programmatic Directory / Hub (/favicons/...)*
    - Sample URLs: `https://leavemealone.com/favicons/apple-icon-57x57.png`, `https://leavemealone.com/favicons/apple-icon-60x60.png`, `https://leavemealone.com/favicons/apple-icon-72x72.png`
- **Pricing & Conversion Mechanics**:
  - Tiers Detected: `4` | Annual Discount: `20% OFF` | Free Trial / Tier: `Trial/Paid`
- **Replicable Engineering & Growth Actions**:
  1. Build a 10,000+ Page `/how-to-[action]-from-[entity]` Programmatic Directory: Leave Me Alone’s **14,264 `/how-to-unsubscribe-from/[brand]` pages** are the ultimate textbook example of long-tail entity pSEO — capturing frustrated users searching how to stop emails from specific brands and converting them on the spot.
  1. Offer Flexible Pass vs Subscription Pricing (`$7.50` 7-Day Pass vs `$4.50/mo` Yearly vs `$19/mo` Monthly): Since inbox cleaning can be episodic, offering a 7-day pass alongside recurring Inbox Shield plans captures both one-time and recurring buyers.
  1. Position Paid Privacy Against 'Free Data-Harvesting Incumbents': Turn the fact that you charge money into your #1 trust badge.


---

## 4. How to Replicate This GEO + pSEO Architecture on Your Own Site

1. **Welcome AI Search Crawlers in `/robots.txt`**: Explicitly allow `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `Claude-SearchBot`, `Claude-User`, `PerplexityBot`, `Perplexity-User`, and `Google-Extended`, and add comments pointing to `/sitemap.xml`, `/llms.txt`, `/llms-full.txt`, and `/help-md/*.md`.
2. **Serve Dual-Layer `/llms.txt` + Pure Markdown Mirrors (`/help-md/*.md`)**: LLMs waste context window tokens parsing noisy HTML DOM trees. Serving clean Markdown endpoints like `/help-md/overview.md` and `/help-md/pseo-teardown.md` makes your product trivially citable by ChatGPT, Claude, and Perplexity.
3. **Scaffold High-Intent pSEO Route Families First**: Start with 10–20 `/vs/[competitor]` and `/alternatives/[competitor]` pages + a 2D `/use-cases/[role]-for-[industry]` matrix using `generate-nextjs-pseo-routes.mjs` and `generate-comparison-matrix.mjs`.
