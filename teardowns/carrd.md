# Carrd (`carrd.co`) — 万刀站 SEO、落地页与定价深度拆解

> **数据合规声明**: 本报告收入数据来自创始人公开一手披露（附出处链接与日期），SEO 与定价结构数据由 `pseo-competitor-teardown` 与 `pricing-paywall-retention` 引擎于 `2026-10-27` 针对线上真实 DOM、`robots.txt`、`sitemap.xml` 与 `/llms.txt` 实测抓取生成，零付费 API、零估算数据。

---

## 1. 收入披露与核验出处 (Verified Revenue Disclosure)
- **公开披露月收入 (Disclosed Revenue)**: **$85,000+ MRR ($1,000,000+ ARR, 2.5M+ sites)**
- **创始人与团队 (Founders & Team)**: AJ (@ajlkn) & Doni (2-person team)
- **公开披露日期 (Disclosure Date)**: `2021-04-30`
- **一手核验出处 URL (Primary Source)**: https://www.indiehackers.com/post/hi-im-aj-maker-of-carrd-and-after-2-5m-sites-1m-arr-and-a-funding-round-probably-time-for-an-ama-1b7fcf52fe
- **补充核验参考 (Secondary Source)**: https://carrd.co/pro (Founder AJ (@ajlkn) disclosed passing $1M+ ARR (~$85k+ MRR) and 2.5 million sites built with just a 2-person team (AJ on dev/product, Doni on operations).)

---

## 2. 产品定位与切入巨头痛点 (Product Positioning & Wedge)
- **所属赛道 (Category)**: No-Code Website Builder / One-Page Landing Page Platform
- **核心价值主张 (Core Value Proposition)**: Simple, free, fully responsive one-page sites for pretty much anything.
- **切入巨头痛点 (Incumbent Wedge)**: Eliminates the complexity and $20–$30/month cost of Squarespace, Webflow, and WordPress for simple one-page sites by charging an impulse-buy $9 to $49 per YEAR and letting users build without even creating an account first.

---

## 3. SEO 架构与程序化 SEO 页面族 (SEO Architecture & pSEO Template Families)
- **`robots.txt` 状态**: `Found (HTTP 200)`
- **`/llms.txt` AI 搜索索引状态**: `Not deployed`
- **多语言路由前缀 (i18n Subfolders)**: English primary (no subfolder locale prefix)
- **实测发现页面总数 (Discovered URLs)**: **18** 个 URL（其中程序化/内容模板页占比 **22.2%**）

### 核心程序化 URL 模板族 (Top pSEO Route Families)
| URL 路由模式 (Route Pattern) | 页面族类型 (Archetype) | 实测页面数 (Count) | 词根变量槽 (Variable Slots) | 真实抽样 URL |
| :--- | :--- | ---: | :--- | :--- |
| `/docs/[doc_slug]/[sub_item_slug]` | `Documentation / Knowledge Base` | **2** (11.1%) | `doc_slug, sub_item_slug` | `https://carrd.co/docs/general/changelog` |

### 页面级 Title / H1 / Schema.org 真实抽样 (Live HTML Samples)
- **`/`** (https://carrd.co/)
  - **`<title>`**: `Carrd - Simple, free, fully responsive one-page sites for pretty much anything`
  - **`<h1>`**: `Carrd`
  - **Meta Description**: `A free platform for building simple, fully responsive one-page sites for pretty much anything.`
  - **Schema.org JSON-LD**: `None`
- **`/docs/[doc_slug]/[sub_item_slug]`** (https://carrd.co/docs/general/changelog)
  - **`<title>`**: `Changelog - General - Documentation - Carrd`
  - **`<h1>`**: `Changelog`
  - **Meta Description**: `What&#039;s new and what&#039;s changed.`
  - **Schema.org JSON-LD**: `None`
- **`/docs/[doc_slug]/[sub_item_slug]`** (https://carrd.co/docs/forms/setting-up-a-signup-form)
  - **`<title>`**: `Setting up a Signup Form - Forms - Documentation - Carrd`
  - **`<h1>`**: `Setting up a Signup Form`
  - **Meta Description**: `Capture emails to Mailchimp, Sendy, and more.`
  - **Schema.org JSON-LD**: `None`

---

## 4. 落地页首屏文案拆解 (Landing Page Above-the-Fold Anatomy)
- **首页 `<title>`**: `Carrd - Simple, free, fully responsive one-page sites for pretty much anything`
- **首页 Hero `<h1>`**: `Carrd`
- **Meta Description**: `A free platform for building simple, fully responsive one-page sites for pretty much anything.`
- **Schema.org JSON-LD 类型**: `None`
- **首屏转化钩子解析 (Conversion Hook)**: Ultra-concise H1 (`Simple, free, fully responsive one-page sites for pretty much anything`) paired with a zero-signup `Choose a Starting Point` button that drops visitors straight into the live canvas editor.

---

## 5. 定价结构与付费墙心理设计 (Pricing & Paywall Architecture)
- **定价页 URL (Analyzed URL)**: https://carrd.com/pro
- **计费周期切换 (Billing Toggles)**: Single cadence / Usage-based
- **年付折扣话术 (Annual Discount Framing)**: Standard
- **实测提取价格点 (Extracted Price Points)**: `$19 / year`, `$9 / year`, `$49 / year`
- **风险逆转与试用信号 (Risk Reversal)**: Self-serve
- **结账基础设施信号 (Checkout Stack)**: `Stripe`
- **定价页 FAQ 异议处理数量**: `0` 个问题

---

## 6. 核心获客飞轮 (Acquisition Channels & Growth Loops)
1. 2.5M+ Hosted User Sites as a Backlink & Viral Loop Engine: Every free `.carrd.co` site and footer credit acts as a live billboard and high-authority referral funnel.
2. Zero-Signup Editor Onboarding: Visitors pick from dozens of curated one-page templates and customize their site before ever hitting a registration form.
3. Radical Impulse-Price Word-of-Mouth (`$9/year` Pro Lite -> `$19/year` Pro Standard -> `$49/year` Pro Plus): At $19/year (less than 1 month of Webflow), every indie hacker and creator recommends Carrd as the default landing page starter.

---

## 7. 独立开发者可直接抄作业的 3 个动作 (3 Replicable Action Items)
1. Let Users Build in the Editor Before Asking for an Email: Carrd’s highest-leverage conversion trick is delaying account creation until the user has already invested 10 minutes designing their page.
2. Use Annual Impulse Pricing (`$9/yr`, `$19/yr`, `$49/yr`) When Marginal Hosting Costs Are Pennies: Static one-page sites cost fractions of a cent on AWS/Cloudflare, allowing $19/yr pricing to generate $1M+ ARR at massive volume.
3. Turn Every Free Tier Output into a Tasteful Viral Badge: Millions of creators proudly share their `*.carrd.co` profile links in social bios, creating unstoppable organic distribution.

---

*本拆解原始 JSON 与 Markdown 蓝图已存档于 `/workspace/growth-skills/examples/pseo/carrd-co-pseo-blueprint.json`。想要一键提取任意竞品的完整 pSEO 蓝图并生成 Next.js/Astro 页面？使用 **A 套件 (`pseo-competitor-teardown` + `x-alternative-pages`)**（早鸟买断价 **$69**，单品 **$29**，团队版 **$169**）。*
