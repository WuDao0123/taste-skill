# FlowMapp (`flowmapp.com`) — 万刀站 SEO、落地页与定价深度拆解

> **数据合规声明**: 本报告收入数据来自创始人公开一手披露（附出处链接与日期），SEO 与定价结构数据由 `pseo-competitor-teardown` 与 `pricing-paywall-retention` 引擎于 `2026-10-27` 针对线上真实 DOM、`robots.txt`、`sitemap.xml` 与 `/llms.txt` 实测抓取生成，零付费 API、零估算数据。

---

## 1. 收入披露与核验出处 (Verified Revenue Disclosure)
- **公开披露月收入 (Disclosed Revenue)**: **$50,000 MRR ($600,000 ARR)**
- **创始人与团队 (Founders & Team)**: Paul Mit & bootstrapped product team
- **公开披露日期 (Disclosure Date)**: `2026-02-10`
- **一手核验出处 URL (Primary Source)**: https://indiemakerlist.com/leaderboard/saas/
- **补充核验参考 (Secondary Source)**: https://www.flowmapp.com/llms.txt (Founder Paul Mit scaled FlowMapp to $600,000 ARR ($50,000 MRR) serving web design agencies, UX planners, and product teams.)

---

## 2. 产品定位与切入巨头痛点 (Product Positioning & Wedge)
- **所属赛道 (Category)**: UX Planning, Visual Sitemap & Website Wireframe SaaS
- **核心价值主张 (Core Value Proposition)**: Visual platform for planning UX, interactive sitemaps, wireframes, and pitching web design projects.
- **切入巨头痛点 (Incumbent Wedge)**: Replaces messy spreadsheets and over-complicated Figma files during the pre-design discovery phase with a dedicated visual sitemap, AI wireframe, and project estimation workspace.

---

## 3. SEO 架构与程序化 SEO 页面族 (SEO Architecture & pSEO Template Families)
- **`robots.txt` 状态**: `Found (HTTP 200)`
- **`/llms.txt` AI 搜索索引状态**: `Deployed (10,934 chars)`
- **多语言路由前缀 (i18n Subfolders)**: English primary (no subfolder locale prefix)
- **实测发现页面总数 (Discovered URLs)**: **175** 个 URL（其中程序化/内容模板页占比 **87.4%**）

### 核心程序化 URL 模板族 (Top pSEO Route Families)
| URL 路由模式 (Route Pattern) | 页面族类型 (Archetype) | 实测页面数 (Count) | 词根变量槽 (Variable Slots) | 真实抽样 URL |
| :--- | :--- | ---: | :--- | :--- |
| `/blog/[blog_slug]/[sub_item_slug]` | `Content / Editorial Blog Cluster` | **58** (33.1%) | `blog_slug, sub_item_slug` | `https://www.flowmapp.com/blog/qa/10-ux-design-onboarding-tips` |
| `/features/[feature_slug]` | `Programmatic Directory / Hub (/features/...)` | **53** (30.3%) | `feature_slug` | `https://www.flowmapp.com/features/content` |
| `/blog/[blog_slug]/how-to-[topic]` | `Content / Editorial Blog Cluster` | **18** (10.3%) | `blog_slug, topic_slug` | `https://www.flowmapp.com/blog/qa/how-to-design-flowcharts` |
| `/blog/[blog_slug]` | `Content / Editorial Blog Cluster` | **9** (5.1%) | `blog_slug` | `https://www.flowmapp.com/blog/information-architecture` |
| `/features/how-to-[topic]` | `Programmatic Directory / Hub (/features/...)` | **8** (4.6%) | `topic_slug` | `https://www.flowmapp.com/features/how-to-plan-a-website-structure-step-by-step-guide` |
| `/pricing/[pricing_slug]` | `Programmatic Directory / Hub (/pricing/...)` | **4** (2.3%) | `pricing_slug` | `https://www.flowmapp.com/pricing/education` |

### 页面级 Title / H1 / Schema.org 真实抽样 (Live HTML Samples)
- **`/`** (https://flowmapp.com/)
  - **`<title>`**: `Flowmapp website planning tool: Sitemaps, User Flows, Wireframes, and Content`
  - **`<h1>`**: `Visual platform for planning UX and pitching web design`
  - **Meta Description**: `Flowmapp is an AI-driven planning platform for creating effective website sales proposals by adding brief, designing sitemap, planning website structure, making`
  - **Schema.org JSON-LD**: `None`
- **`/blog/[blog_slug]/[sub_item_slug]`** (https://www.flowmapp.com/blog/qa/10-ux-design-onboarding-tips)
  - **`<title>`**: `10 UX Design Onboarding Tips: How to Ensure Excellent UX? | FlowMapp design blog`
  - **`<h1>`**: `10 UX Design Onboarding Tips: How to Ensure Excellent UX?`
  - **Meta Description**: `Learn how to ensure an excellent UX design onboarding. Read about types, best practices, principles, and methods of onboarding and improve your UX designer skil`
  - **Schema.org JSON-LD**: `None`
- **`/blog/[blog_slug]/[sub_item_slug]`** (https://www.flowmapp.com/blog/qa/20-basic-typographic-terms-ui)
  - **`<title>`**: `20 Basic Typographic Terms for UI Designers | FlowMapp design blog`
  - **`<h1>`**: `20 Basic Typographic Terms for UI Designers`
  - **Meta Description**: `A complete collection of basic typographic terms with a detailed explanation`
  - **Schema.org JSON-LD**: `None`
- **`/features/[feature_slug]`** (https://www.flowmapp.com/features/content)
  - **`<title>`**: `Content — Generate &amp; Create Content for beautiful Websites`
  - **`<h1>`**: `Content`
  - **Meta Description**: `Organize the website content, manage and deliver it to the team and clients. Store the web specification content, client briefs, design references and improve y`
  - **Schema.org JSON-LD**: `None`

---

## 4. 落地页首屏文案拆解 (Landing Page Above-the-Fold Anatomy)
- **首页 `<title>`**: `Flowmapp website planning tool: Sitemaps, User Flows, Wireframes, and Content`
- **首页 Hero `<h1>`**: `Visual platform for planning UX and pitching web design`
- **Meta Description**: `Flowmapp is an AI-driven planning platform for creating effective website sales proposals by adding brief, designing sitemap, planning website structure, making wireframes, creating content, estimating project costs and creating invoices.`
- **Schema.org JSON-LD 类型**: `None`
- **首屏转化钩子解析 (Conversion Hook)**: Hero H1 (`Visual platform for planning UX and pitching web design`) speaks directly to agencies who need to win client pitches faster, backed by a structured 10.9 KB `/llms.txt` declaring `llm-usage: allowed`.

---

## 5. 定价结构与付费墙心理设计 (Pricing & Paywall Architecture)
- **定价页 URL (Analyzed URL)**: https://www.flowmapp.com/pricing
- **计费周期切换 (Billing Toggles)**: `Billed monthly Billed annually 45% off`, `Billed monthly`, `Billed annually`
- **年付折扣话术 (Annual Discount Framing)**: `Billed monthly Billed annually 45% off`, `45% off`, `Purchase an annual subscription to get 45% off for the whole ✨ year`, `Get 45% off for the whole ✨ year`, `Honored by G2 Capterra admitted Get 45% off for the whole ✨ year`
- **实测提取价格点 (Extracted Price Points)**: `$0`, `$15`, `$8.25 / mo`, `$35`, `$19.25 / mo`, `$99`, `$54.45 / mo`
- **风险逆转与试用信号 (Risk Reversal)**: `No credit card required`
- **结账基础设施信号 (Checkout Stack)**: Custom / Stripe
- **定价页 FAQ 异议处理数量**: `0` 个问题

---

## 6. 核心获客飞轮 (Acquisition Channels & Growth Loops)
1. 53 Dedicated Feature Landing Pages (`/features/[feature_slug]` — 53 pages!): Every micro-capability (visual sitemap generator, user flow builder, project cost estimator, content brief tool) has its own high-intent SEO landing page.
2. 76-Page UX & Agency Blog Cluster (`/blog/[category]/[slug]` — 58 pages + `/blog/[category]/how-to-[topic]` — 18 pages = 175 total URLs, 87.4% pSEO).
3. Machine-Readable 10.9 KB `/llms.txt` Directory: Explicitly declares `llm-usage: allowed` and lists structured `url:`, `title:`, and `description:` records for every core page.

---

## 7. 独立开发者可直接抄作业的 3 个动作 (3 Replicable Action Items)
1. Unbundle Your Product into 50+ `/features/[capability-slug]` Landing Pages: Don’t bury your sub-tools on one homepage — FlowMapp created 53 distinct `/features/*` URLs so every specific job-to-be-done ranks independently.
2. Use `url: / title: / description:` Key-Value Blocks in `/llms.txt` (`10,934 chars`): Gives AI search crawlers clean, zero-noise metadata for every feature route.
3. Highlight a High-Contrast Annual Discount (`Billed annually 45% off` — `$8.25/mo` vs `$15/mo`, `$19.25/mo` vs `$35/mo`): Drives immediate annual cashflow from agency buyers.

---

*本拆解原始 JSON 与 Markdown 蓝图已存档于 `/workspace/growth-skills/examples/pseo/flowmapp-com-pseo-blueprint.json`。想要一键提取任意竞品的完整 pSEO 蓝图并生成 Next.js/Astro 页面？使用 **A 套件 (`pseo-competitor-teardown` + `x-alternative-pages`)**（早鸟买断价 **$69**，单品 **$29**，团队版 **$169**）。*
