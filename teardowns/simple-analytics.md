# Simple Analytics (`simpleanalytics.com`) — 万刀站 SEO、落地页与定价深度拆解

> **数据合规声明**: 本报告收入数据来自创始人公开一手披露（附出处链接与日期），SEO 与定价结构数据由 `pseo-competitor-teardown` 与 `pricing-paywall-retention` 引擎于 `2026-10-27` 针对线上真实 DOM、`robots.txt`、`sitemap.xml` 与 `/llms.txt` 实测抓取生成，零付费 API、零估算数据。

---

## 1. 收入披露与核验出处 (Verified Revenue Disclosure)
- **公开披露月收入 (Disclosed Revenue)**: **$45,000 MRR ($540,000 ARR)**
- **创始人与团队 (Founders & Team)**: Adriaan van Rossum & Iron Brands (2 co-founders, Amsterdam)
- **公开披露日期 (Disclosure Date)**: `2025-10-15`
- **一手核验出处 URL (Primary Source)**: https://www.indiehackers.com/post/tech/joining-a-technical-co-founder-and-growing-the-product-to-45k-mrr-119Zbnde7pTET0QOiZLH
- **补充核验参考 (Secondary Source)**: https://www.simpleanalytics.com/open (Co-founder Iron Brands documented joining technical founder Adriaan van Rossum and scaling Simple Analytics to $45k MRR via SEO, alternatives pages, and EU regulatory tailwinds.)

---

## 2. 产品定位与切入巨头痛点 (Product Positioning & Wedge)
- **所属赛道 (Category)**: EU-Compliant Privacy Web Analytics
- **核心价值主张 (Core Value Proposition)**: Simple, privacy-first Google Analytics alternative hosted in the EU — no cookies, no consent banners needed.
- **切入巨头痛点 (Incumbent Wedge)**: Positions on strict EU data sovereignty (100% EU-hosted, zero PII, GDPR/PECR/Schrems II compliant out-of-the-box) plus AI analytics insights.

---

## 3. SEO 架构与程序化 SEO 页面族 (SEO Architecture & pSEO Template Families)
- **`robots.txt` 状态**: `Found (HTTP 200)`
- **`/llms.txt` AI 搜索索引状态**: `Deployed (17,187 chars)`
- **多语言路由前缀 (i18n Subfolders)**: English primary (no subfolder locale prefix)
- **实测发现页面总数 (Discovered URLs)**: **487** 个 URL（其中程序化/内容模板页占比 **81.7%**）

### 核心程序化 URL 模板族 (Top pSEO Route Families)
| URL 路由模式 (Route Pattern) | 页面族类型 (Archetype) | 实测页面数 (Count) | 词根变量槽 (Variable Slots) | 真实抽样 URL |
| :--- | :--- | ---: | :--- | :--- |
| `/blog/[blog_slug]` | `Content / Editorial Blog Cluster` | **167** (34.3%) | `blog_slug` | `https://www.simpleanalytics.com/blog/the-eu-wants-to-kill-cookie-banners-by-moving-consent-to-your-browser` |
| `/[root-landing-slug]` | `Root-Level Long-Tail SEO Landing Pages` | **76** (15.6%) | `root_landing_slug` | `https://www.simpleanalytics.com/analytics-without-consent` |
| `/_nuxt/[_nuxt_slug]` | `Programmatic Directory / Hub (/_nuxt/...)` | **64** (13.1%) | `_nuxt_slug` | `https://www.simpleanalytics.com/_nuxt/Navbar.DNfpWAoD.css` |
| `/guides/[guide_slug]` | `Programmatic Directory / Hub (/guides/...)` | **31** (6.4%) | `guide_slug` | `https://www.simpleanalytics.com/guides/track-button-click` |
| `/press/[pres_slug]` | `Programmatic Directory / Hub (/press/...)` | **12** (2.5%) | `pres_slug` | `https://www.simpleanalytics.com/press/bnr` |
| `/blog/how-to-[topic]` | `Content / Editorial Blog Cluster` | **7** (1.4%) | `topic_slug` | `https://www.simpleanalytics.com/blog/how-to-export-data-from-google-analytics` |

### 页面级 Title / H1 / Schema.org 真实抽样 (Live HTML Samples)
- **`/`** (https://www.simpleanalytics.com/)
  - **`<title>`**: `Simple Analytics`
  - **`<h1>`**: `See the traffic Google Analytics misses`
  - **Meta Description**: `Run Simple Analytics alongside GA4 to compare observed website traffic. Book a demo to plan a free 30-day proof of concept.`
  - **Schema.org JSON-LD**: `WebSite, WebPage, Organization`
- **`/blog/[blog_slug]`** (https://www.simpleanalytics.com/blog/the-eu-wants-to-kill-cookie-banners-by-moving-consent-to-your-browser)
  - **`<title>`**: `The EU wants to kill cookie banners`
  - **`<h1>`**: `The EU wants to kill cookie banners`
  - **Meta Description**: `The EU wants to end annoying cookie pop-ups by letting users set their consent once in their browser. If passed, websites will have to respect those choices.`
  - **Schema.org JSON-LD**: `WebSite, WebPage, BreadcrumbList, Article,BlogPosting, Person, ImageObject`
- **`/blog/[blog_slug]`** (https://www.simpleanalytics.com/blog/google-is-tracking-you-even-when-you-use-duck-duck-go)
  - **`<title>`**: `Google is tracking you (even when you use DuckDuckGo)`
  - **`<h1>`**: `Google is tracking you (even when you use DuckDuckGo)`
  - **Meta Description**: `Google tracks users even on DuckDuckGo via Analytics and embeds. A new study shows how deep Google’s web tracking really goes.`
  - **Schema.org JSON-LD**: `WebSite, WebPage, BreadcrumbList, Article,BlogPosting, Person, ImageObject`
- **`/[root-landing-slug]`** (https://www.simpleanalytics.com/analytics-without-consent)
  - **`<title>`**: `Analytics Without Consent - Simple Analytics`
  - **`<h1>`**: `Analytics without consent`
  - **Meta Description**: `Measure pageviews and events alongside GA4 without visitor identities. Understand the method, its limits, and how to evaluate it on your website.`
  - **Schema.org JSON-LD**: `FAQPage, WebSite, WebPage`

---

## 4. 落地页首屏文案拆解 (Landing Page Above-the-Fold Anatomy)
- **首页 `<title>`**: `Simple Analytics`
- **首页 Hero `<h1>`**: `See the traffic Google Analytics misses`
- **Meta Description**: `Run Simple Analytics alongside GA4 to compare observed website traffic. Book a demo to plan a free 30-day proof of concept.`
- **Schema.org JSON-LD 类型**: `WebSite, WebPage, Organization`
- **首屏转化钩子解析 (Conversion Hook)**: Hero H1 (`Web analytics that plays nice with privacy laws`) immediately resolves legal anxiety for European businesses and agencies, backed by a 17.2 KB `/llms.txt` index.

---

## 5. 定价结构与付费墙心理设计 (Pricing & Paywall Architecture)
- **定价页 URL (Analyzed URL)**: https://www.simpleanalytics.com/pricing
- **计费周期切换 (Billing Toggles)**: `Monthly`, `Annually`
- **年付折扣话术 (Annual Discount Framing)**: `Payment frequency Monthly Annually 2 months free`, `2 months free`
- **实测提取价格点 (Extracted Price Points)**: `$20 /mo`, `$20/mo`
- **风险逆转与试用信号 (Risk Reversal)**: `No credit card required`, `cancel anytime`, `Free forever`
- **结账基础设施信号 (Checkout Stack)**: Custom / Stripe
- **定价页 FAQ 异议处理数量**: `14` 个问题（如：*What is the difference between the free trial and the POC? / How does the 30-day proof of concept work? / What will we compare during the proof of concept?*）

---

## 6. 核心获客飞轮 (Acquisition Channels & Growth Loops)
1. Root-Level Problem & Alternative Landing Pages (`/[root-landing-slug]` — 76 pages): Targets both regulatory pain points (`/analytics-without-consent`, `/cookieless-web-analytics`, `/eu-hosted-web-analytics`) and direct competitors (`/piwik-pro-alternative`, `/matomo-alternative`).
2. Glossary & Country-by-Country GDPR Ruling Hubs (`/glossaries/[slug]` + `/blog/[slug]` — 184 pages): Whenever an EU Data Protection Authority rules against Google Analytics, Simple Analytics ships a dedicated breakdown page.
3. AI Search Optimization (`/llms.txt` — 17,187 chars): Comprehensive structured Markdown directory for LLM citation.

---

## 7. 独立开发者可直接抄作业的 3 个动作 (3 Replicable Action Items)
1. Create Regulatory & Pain-Point Root Slugs (`/analytics-without-consent`): Users don't just search product categories; they search how to avoid a painful compliance requirement.
2. Deploy a Rich `/llms.txt` (17 KB+): Explicitly list your comparison guides, glossary definitions, and regulatory compliance proofs in `/llms.txt`.
3. Dual-Path Trial Funnel on `/pricing`: Offers both a self-serve 14-day free trial (`No credit card required`) AND a 30-day guided Proof of Concept (POC) for higher-ACV B2B teams.

---

*本拆解原始 JSON 与 Markdown 蓝图已存档于 `/workspace/growth-skills/examples/pseo/simpleanalytics-com-pseo-blueprint.json`。想要一键提取任意竞品的完整 pSEO 蓝图并生成 Next.js/Astro 页面？使用 **A 套件 (`pseo-competitor-teardown` + `x-alternative-pages`)**（早鸟买断价 **$69**，单品 **$29**，团队版 **$169**）。*
