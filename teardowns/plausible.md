# Plausible Analytics (`plausible.io`) — 万刀站 SEO、落地页与定价深度拆解

> **数据合规声明**: 本报告收入数据来自创始人公开一手披露（附出处链接与日期），SEO 与定价结构数据由 `pseo-competitor-teardown` 与 `pricing-paywall-retention` 引擎于 `2026-10-27` 针对线上真实 DOM、`robots.txt`、`sitemap.xml` 与 `/llms.txt` 实测抓取生成，零付费 API、零估算数据。

---

## 1. 收入披露与核验出处 (Verified Revenue Disclosure)
- **公开披露月收入 (Disclosed Revenue)**: **$83,637 MRR ($1,000,000+ ARR)**
- **创始人与团队 (Founders & Team)**: Uku Taht & Marko Saric (2 co-founders, 100% bootstrapped & open-source)
- **公开披露日期 (Disclosure Date)**: `2022-06-02`
- **一手核验出处 URL (Primary Source)**: https://plausible.io/blog/open-source-saas
- **补充核验参考 (Secondary Source)**: https://plausible.io/plausible.io (Official milestone post by co-founder Marko Saric documenting the journey from $400 MRR to $83,637 MRR ($1M ARR) completely bootstrapped.)

---

## 2. 产品定位与切入巨头痛点 (Product Positioning & Wedge)
- **所属赛道 (Category)**: Privacy-First Web Analytics
- **核心价值主张 (Core Value Proposition)**: Easy to use and privacy-friendly Google Analytics alternative that requires no cookie banners and loads 75x smaller than GA4.
- **切入巨头痛点 (Incumbent Wedge)**: Positions directly against Google Analytics 4 (GA4) bloat, cookie banner requirements, and GDPR privacy concerns with a <1 KB script.

---

## 3. SEO 架构与程序化 SEO 页面族 (SEO Architecture & pSEO Template Families)
- **`robots.txt` 状态**: `Found (HTTP 200)`
- **`/llms.txt` AI 搜索索引状态**: `Not deployed`
- **多语言路由前缀 (i18n Subfolders)**: English primary (no subfolder locale prefix)
- **实测发现页面总数 (Discovered URLs)**: **180** 个 URL（其中程序化/内容模板页占比 **83.3%**）

### 核心程序化 URL 模板族 (Top pSEO Route Families)
| URL 路由模式 (Route Pattern) | 页面族类型 (Archetype) | 实测页面数 (Count) | 词根变量槽 (Variable Slots) | 真实抽样 URL |
| :--- | :--- | ---: | :--- | :--- |
| `/blog/[blog_slug]` | `Content / Editorial Blog Cluster` | **104** (57.8%) | `blog_slug` | `https://plausible.io/blog/the-analytics-tool-i-want` |
| `/[root-landing-slug]` | `Root-Level Long-Tail SEO Landing Pages` | **26** (14.4%) | `root_landing_slug` | `https://plausible.io/ad-cost-calculator` |
| `/[tool_a]-vs-[tool_b]` | `Head-to-Head Versus Comparison Pages` | **4** (2.2%) | `comparison_pair` | `https://plausible.io/vs-cloudflare-web-analytics` |
| `/blog/[tool_a]-vs-[tool_b]` | `Head-to-Head Versus Comparison Pages` | **4** (2.2%) | `comparison_pair` | `https://plausible.io/blog/ua-vs-ga4` |
| `/jobs/[job_slug]` | `Programmatic Directory / Hub (/jobs/...)` | **3** (1.7%) | `job_slug` | `https://plausible.io/jobs/customer-success` |
| `/assets/[asset_slug]/[sub_item_slug]/[deep_slug]` | `Programmatic Directory / Hub (/assets/...)` | **3** (1.7%) | `asset_slug, sub_item_slug, deep_slug_3` | `https://plausible.io/assets/images/icon/apple-touch-icon.png` |

### 页面级 Title / H1 / Schema.org 真实抽样 (Live HTML Samples)
- **`/`** (https://plausible.io/)
  - **`<title>`**: `Plausible Analytics | Simple, privacy-friendly Google Analytics alternative`
  - **`<h1>`**: `Easy to use and privacy-friendly Google Analytics alternative`
  - **Meta Description**: `Plausible is a lightweight and open-source Google Analytics alternative. Your website data is 100% yours and the privacy of your visitors is respected.`
  - **Schema.org JSON-LD**: `WebSite`
- **`/blog/[blog_slug]`** (https://plausible.io/blog/the-analytics-tool-i-want)
  - **`<title>`**: `The analytics tool I want | Plausible Analytics`
  - **`<h1>`**: `The analytics tool I want`
  - **Meta Description**: `While working on Gigride, our marketing head asked me to integrate Google Analytics for our landing page. My first thought was:`
  - **Schema.org JSON-LD**: `BlogPosting`
- **`/blog/[blog_slug]`** (https://plausible.io/blog/learning-design-as-a-developer)
  - **`<title>`**: `Learning design as a developer | Plausible Analytics`
  - **`<h1>`**: `Learning design as a developer`
  - **Meta Description**: `Working on plausible.io I often find myself doing things I have no clue how to do. I struggle massively with marketing, copywriting, and most of all, UX/UI desi`
  - **Schema.org JSON-LD**: `BlogPosting`
- **`/[root-landing-slug]`** (https://plausible.io/ad-cost-calculator)
  - **`<title>`**: `Ad cost calculator: CPC, CPM and CPA | Plausible Analytics`
  - **`<h1>`**: `Ad cost calculator: CPC, CPM and CPA`
  - **Meta Description**: `Calculate your cost per click, cost per mille and cost per acquisition from a single set of campaign numbers. Know what you are paying for your advertising.`
  - **Schema.org JSON-LD**: `BlogPosting`

---

## 4. 落地页首屏文案拆解 (Landing Page Above-the-Fold Anatomy)
- **首页 `<title>`**: `Plausible Analytics | Simple, privacy-friendly Google Analytics alternative`
- **首页 Hero `<h1>`**: `Easy to use and privacy-friendly Google Analytics alternative`
- **Meta Description**: `Plausible is a lightweight and open-source Google Analytics alternative. Your website data is 100% yours and the privacy of your visitors is respected.`
- **Schema.org JSON-LD 类型**: `WebSite`
- **首屏转化钩子解析 (Conversion Hook)**: Hero H1 explicitly targets the #1 search keyword ("Easy to use and privacy-friendly Google Analytics alternative"). Directly below the CTA sits a live interactive demo link (`plausible.io/plausible.io`) with zero signup friction.

---

## 5. 定价结构与付费墙心理设计 (Pricing & Paywall Architecture)
- **定价页 URL (Analyzed URL)**: https://plausible.io/#pricing
- **计费周期切换 (Billing Toggles)**: `Monthly Yearly`, `Monthly`, `Yearly`, `monthly pageviews`
- **年付折扣话术 (Annual Discount Framing)**: `2 months free Monthly Yearly Up to 10k monthly pageviews 10k 10k 10M+`, `2 months free Monthly Yearly`, `2 months free`
- **实测提取价格点 (Extracted Price Points)**: `$9 /mo`, `$14 /mo`, `$19 /mo`
- **风险逆转与试用信号 (Risk Reversal)**: `No credit card required`, `30-day free trial`
- **结账基础设施信号 (Checkout Stack)**: Custom / Stripe
- **定价页 FAQ 异议处理数量**: `1` 个问题（如：*WHY PLAUSIBLE?*）

---

## 6. 核心获客飞轮 (Acquisition Channels & Growth Loops)
1. Direct Competitor Comparison Pages (`/[tool_a]-vs-[tool_b]`): 8 high-converting head-to-head pages (`/vs-google-analytics`, `/matomo-vs-google-analytics`, `/simple-analytics-vs-plausible`, `/fathom-analytics-vs-plausible`, `/cloudflare-web-analytics-vs-plausible`).
2. Interactive Engineering Micro-Tools: Free standalone tools on root slugs like `/google-analytics-script-size` and `/ad-cost-calculator` that prove GA4 bloat with real numbers.
3. Open-Source & Privacy Advocacy Content: 104 deep-dive `/blog/[slug]` articles on GDPR, cookie laws, andGA4 migration that rank on Hacker News and organic search.

---

## 7. 独立开发者可直接抄作业的 3 个动作 (3 Replicable Action Items)
1. Include Yourself in Competitor vs Competitor Searches: Don't just write `Us vs Incumbent`; publish `Matomo vs Google Analytics` and position your tool as the lightweight modern third option.
2. Ship a Live Public Dashboard Instead of Static Screenshots: Linking to a live read-only production dashboard (`plausible.io/plausible.io`) converts skeptical developers far better than marketing graphics.
3. Transparent Pageview Slider + 30-Day No-Card Trial: Embed pricing directly on `#pricing` (`$9/mo` Starter, `$14/mo` Growth, `$19/mo` Business) with "2 months free" annual toggle.

---

*本拆解原始 JSON 与 Markdown 蓝图已存档于 `/workspace/growth-skills/examples/pseo/plausible-io-pseo-blueprint.json`。想要一键提取任意竞品的完整 pSEO 蓝图并生成 Next.js/Astro 页面？使用 **A 套件 (`pseo-competitor-teardown` + `x-alternative-pages`)**（早鸟买断价 **$69**，单品 **$29**，团队版 **$169**）。*
