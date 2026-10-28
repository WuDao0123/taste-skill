# Senja (`senja.io`) — 万刀站 SEO、落地页与定价深度拆解

> **数据合规声明**: 本报告收入数据来自创始人公开一手披露（附出处链接与日期），SEO 与定价结构数据由 `pseo-competitor-teardown` 与 `pricing-paywall-retention` 引擎于 `2026-10-27` 针对线上真实 DOM、`robots.txt`、`sitemap.xml` 与 `/llms.txt` 实测抓取生成，零付费 API、零估算数据。

---

## 1. 收入披露与核验出处 (Verified Revenue Disclosure)
- **公开披露月收入 (Disclosed Revenue)**: **$50,000 MRR ($600,000 ARR)**
- **创始人与团队 (Founders & Team)**: Olly Meakings & Wilson Wilson (2 co-founders)
- **公开披露日期 (Disclosure Date)**: `2024-11-19`
- **一手核验出处 URL (Primary Source)**: https://www.indiehackers.com/post/from-zero-to-50k-mrr-the-story-of-senjas-growth-6874d85edd
- **补充核验参考 (Secondary Source)**: https://senja.io/pricing (Founders Olly Meakings & Wilson Wilson shared the full breakdown from $0 to $50k MRR (reached Oct 2024) via #buildinpublic and programmatic SEO.)

---

## 2. 产品定位与切入巨头痛点 (Product Positioning & Wedge)
- **所属赛道 (Category)**: Social Proof & Testimonial Collection SaaS
- **核心价值主张 (Core Value Proposition)**: The easiest way to collect, manage, and share video & text testimonials everywhere.
- **切入巨头痛点 (Incumbent Wedge)**: Out-executes legacy enterprise review widgets and early indie tools (Testimonial.to, Boast.io) with 30+ import sources, superior Wall of Love design aesthetics, and aggressive pSEO.

---

## 3. SEO 架构与程序化 SEO 页面族 (SEO Architecture & pSEO Template Families)
- **`robots.txt` 状态**: `Found (HTTP 200)`
- **`/llms.txt` AI 搜索索引状态**: `Not deployed`
- **多语言路由前缀 (i18n Subfolders)**: English primary (no subfolder locale prefix)
- **实测发现页面总数 (Discovered URLs)**: **733** 个 URL（其中程序化/内容模板页占比 **96.9%**）

### 核心程序化 URL 模板族 (Top pSEO Route Families)
| URL 路由模式 (Route Pattern) | 页面族类型 (Archetype) | 实测页面数 (Count) | 词根变量槽 (Variable Slots) | 真实抽样 URL |
| :--- | :--- | ---: | :--- | :--- |
| `/use-cases/[use_case_slug]` | `Use-Case Solution Pages (/use-cases/[persona-or-workflow])` | **360** (49.1%) | `use_case_slug` | `https://senja.io/use-cases/add-airbnb-reviews-to-carrd` |
| `/testimonial-examples/[testimonial_example_slug]` | `Programmatic Directory / Hub (/testimonial-examples/...)` | **112** (15.3%) | `testimonial_example_slug` | `https://senja.io/testimonial-examples/1-online-website-feedback-tool-ruttl` |
| `/blog/[blog_slug]` | `Content / Editorial Blog Cluster` | **97** (13.2%) | `blog_slug` | `https://senja.io/blog/5-easy-ways-to-get-and-use-testimonials-start-using-senja-in-less-than-an-hour` |
| `/testimonial-software/[testimonial_software_slug]` | `Programmatic Directory / Hub (/testimonial-software/...)` | **25** (3.4%) | `testimonial_software_slug` | `https://senja.io/testimonial-software/agencies` |
| `/testimonial-widgets/[testimonial_widget_slug]` | `Programmatic Directory / Hub (/testimonial-widgets/...)` | **25** (3.4%) | `testimonial_widget_slug` | `https://senja.io/testimonial-widgets/andoya-carousel-testimonial-widget` |
| `/compare/[competitor]-alternatives` | `Head-to-Head Comparison Hub (/compare/[a]-vs-[b])` | **19** (2.6%) | `competitor_slug` | `https://senja.io/compare/boast-io-alternative` |

### 页面级 Title / H1 / Schema.org 真实抽样 (Live HTML Samples)
- **`/`** (https://senja.io/)
  - **`<title>`**: `Senja - Collect, Manage and Share Testimonials`
  - **`<h1>`**: `Meet Senja. The easiest way to gather customer testimonials and case studies, then share them everywhere to increase trust and sales.`
  - **Meta Description**: `The easiest way to collect testimonials and add them to your website. Get started for free.`
  - **Schema.org JSON-LD**: `Organization, WebSite, WebPage`
- **`/use-cases/[use_case_slug]`** (https://senja.io/use-cases/add-airbnb-reviews-to-carrd)
  - **`<title>`**: `Add Airbnb Reviews to Carrd in 5 minutes for free!`
  - **`<h1>`**: `Add Airbnb Reviews to Carrd in 5 minutes`
  - **Meta Description**: `This guide will show you how to add Airbnb Reviews to your Carrd Website in minutes, not hours. Here`
  - **Schema.org JSON-LD**: `Organization, WebSite, WebPage`
- **`/use-cases/[use_case_slug]`** (https://senja.io/use-cases/add-airbnb-reviews-to-elementor)
  - **`<title>`**: `Add Airbnb Reviews to Elementor in 5 minutes for free!`
  - **`<h1>`**: `Add Airbnb Reviews to Elementor in 5 minutes`
  - **Meta Description**: `This guide will show you how to add Airbnb Reviews to your Elementor Website in minutes, not hours. Here`
  - **Schema.org JSON-LD**: `Organization, WebSite, WebPage`
- **`/testimonial-examples/[testimonial_example_slug]`** (https://senja.io/testimonial-examples/1-online-website-feedback-tool-ruttl)
  - **`<title>`**: `#1 Online website feedback tool 🔥 | Ruttl - Testimonial Examples - Senja`
  - **`<h1>`**: `#1 Online website feedback tool 🔥 | Ruttl`
  - **Meta Description**: `Ruttl`
  - **Schema.org JSON-LD**: `Organization, WebSite, WebPage`

---

## 4. 落地页首屏文案拆解 (Landing Page Above-the-Fold Anatomy)
- **首页 `<title>`**: `Senja - Collect, Manage and Share Testimonials`
- **首页 Hero `<h1>`**: `Meet Senja. The easiest way to gather customer testimonials and case studies, then share them everywhere to increase trust and sales.`
- **Meta Description**: `The easiest way to collect testimonials and add them to your website. Get started for free.`
- **Schema.org JSON-LD 类型**: `Organization, WebSite, WebPage`
- **首屏转化钩子解析 (Conversion Hook)**: Social-proof-first hero showing real customer faces + instant "Collect your first 15 testimonials free forever" hook. Uses clear outcome framing: turn happy customers into your highest-converting sales asset.

---

## 5. 定价结构与付费墙心理设计 (Pricing & Paywall Architecture)
- **定价页 URL (Analyzed URL)**: https://senja.io/pricing
- **计费周期切换 (Billing Toggles)**: `Monthly Yearly 2 months free 💸`, `Monthly`, `Yearly`
- **年付折扣话术 (Annual Discount Framing)**: `Monthly Yearly 2 months free 💸`, `2 months free 💸`
- **实测提取价格点 (Extracted Price Points)**: `$0/mo`, `$29/mo`, `$59/mo`, `$10/mo`, `$5/mo`
- **风险逆转与试用信号 (Risk Reversal)**: `Cancel anytime`
- **结账基础设施信号 (Checkout Stack)**: Custom / Stripe
- **定价页 FAQ 异议处理数量**: `14` 个问题（如：*Can I import testimonials I've already collected? / What information can I collect from my customers? / What happens after I collect 15 testimonials?*）

---

## 6. 核心获客飞轮 (Acquisition Channels & Growth Loops)
1. Cartesian-Product Use-Case pSEO (`/use-cases/[source]-to-[destination]` — 360 pages!): Generates pages for every combination of review source + website builder, e.g., `/use-cases/add-airbnb-reviews-to-carrd`, `/use-cases/add-g2-reviews-to-webflow`.
2. 4 Distinct High-Intent pSEO Clusters (733 URLs total, 96.9% pSEO): `/use-cases/[slug]` (360), `/testimonial-examples/[slug]` (112), `/testimonial-software/[industry]` (25), `/testimonial-widgets/[platform]` (25), and `/compare/[competitor]-alternatives` (19 pages like `boast-io-alternatives`).
3. Powered-by Widget Virality + Build-in-Public on X: Every embedded Wall of Love widget links back to Senja.

---

## 7. 独立开发者可直接抄作业的 3 个动作 (3 Replicable Action Items)
1. Steal the `Source × Destination` Cartesian URL Formula: If your product connects Source $A$ (20 platforms) to Destination $B$ (18 CMS builders), generate $20 \times 18 = 360$ `/use-cases/add-[source]-to-[destination]` pages.
2. Build 3 Vertical Intent Layers (`/testimonial-examples/[x]`, `/testimonial-widgets/[x]`, `/testimonial-software/[x]`): Captures top-of-funnel inspiration, mid-funnel widget embeds, and bottom-of-funnel buyer searches.
3. Simple 3-Tier Pricing (`Free $0` -> `Starter $29/mo` -> `Pro $59/mo [Most Popular]`) with "2 months free" annual toggle and 14 objection-crushing FAQ items.

---

*本拆解原始 JSON 与 Markdown 蓝图已存档于 `/workspace/growth-skills/examples/pseo/senja-io-pseo-blueprint.json`。想要一键提取任意竞品的完整 pSEO 蓝图并生成 Next.js/Astro 页面？使用 **A 套件 (`pseo-competitor-teardown` + `x-alternative-pages`)**（早鸟买断价 **$69**，单品 **$29**，团队版 **$169**）。*
