# My AskAI (`myaskai.com`) — 万刀站 SEO、落地页与定价深度拆解

> **数据合规声明**: 本报告收入数据来自创始人公开一手披露（附出处链接与日期），SEO 与定价结构数据由 `pseo-competitor-teardown` 与 `pricing-paywall-retention` 引擎于 `2026-10-27` 针对线上真实 DOM、`robots.txt`、`sitemap.xml` 与 `/llms.txt` 实测抓取生成，零付费 API、零估算数据。

---

## 1. 收入披露与核验出处 (Verified Revenue Disclosure)
- **公开披露月收入 (Disclosed Revenue)**: **$40,000 MRR (~$500,000 ARR)**
- **创始人与团队 (Founders & Team)**: Alex Rainey & Mike Heap (2 co-founders, UK)
- **公开披露日期 (Disclosure Date)**: `2025-07-10`
- **一手核验出处 URL (Primary Source)**: https://www.indiehackers.com/post/tech/bootstrapping-to-40k-mrr-after-his-vc-backed-startup-failed-LF1CwRs1vL3oVLcuoIoE
- **补充核验参考 (Secondary Source)**: https://myaskai.com/pricing (Co-founders Alex Rainey & Mike Heap disclosed handling 75,000+ support chats/month and generating $40,000 MRR (~$500k ARR) as a two-person bootstrapped team.)

---

## 2. 产品定位与切入巨头痛点 (Product Positioning & Wedge)
- **所属赛道 (Category)**: B2B AI Customer Support Agent (Intercom / Zendesk / Gorgias Drop-in)
- **核心价值主张 (Core Value Proposition)**: Match or beat the quality of your helpdesk's native AI agent at a fraction of the cost — plugs straight into Intercom, Zendesk, Freshdesk, and HubSpot.
- **切入巨头痛点 (Incumbent Wedge)**: Undercuts Intercom Fin and Zendesk AI ($0.99/resolution) by nearly 90% ($0.10–$0.12/ticket or $49–$199/mo) while plugging directly into the helpdesk the company already uses.

---

## 3. SEO 架构与程序化 SEO 页面族 (SEO Architecture & pSEO Template Families)
- **`robots.txt` 状态**: `Found (HTTP 200)`
- **`/llms.txt` AI 搜索索引状态**: `Not deployed`
- **多语言路由前缀 (i18n Subfolders)**: English primary (no subfolder locale prefix)
- **实测发现页面总数 (Discovered URLs)**: **99** 个 URL（其中程序化/内容模板页占比 **80.8%**）

### 核心程序化 URL 模板族 (Top pSEO Route Families)
| URL 路由模式 (Route Pattern) | 页面族类型 (Archetype) | 实测页面数 (Count) | 词根变量槽 (Variable Slots) | 真实抽样 URL |
| :--- | :--- | ---: | :--- | :--- |
| `/blog/[blog_slug]` | `Content / Editorial Blog Cluster` | **24** (24.2%) | `blog_slug` | `https://myaskai.com/blog/my-askai-traveljoy-case-study-2026` |
| `/compare/[tool_a]-vs-[tool_b]` | `Head-to-Head Comparison Hub (/compare/[a]-vs-[b])` | **10** (10.1%) | `comparison_pair` | `https://myaskai.com/compare/freshdesk-vs-zendesk-ai-pricing` |
| `/features/[feature_slug]` | `Programmatic Directory / Hub (/features/...)` | **10** (10.1%) | `feature_slug` | `https://myaskai.com/features/testing-and-qa` |
| `/ai-agent-integration/[ai_agent_integration_slug]` | `Programmatic Directory / Hub (/ai-agent-integration/...)` | **8** (8.1%) | `ai_agent_integration_slug` | `https://myaskai.com/ai-agent-integration/intercom` |
| `/industry-use-cases/[industry_use_case_slug]` | `Programmatic Directory / Hub (/industry-use-cases/...)` | **8** (8.1%) | `industry_use_case_slug` | `https://myaskai.com/industry-use-cases/saas` |
| `/ai-support-agent-roi-calculator/[ai_support_agent_roi_calculator_slug]` | `Programmatic Directory / Hub (/ai-support-agent-roi-calculator/...)` | **7** (7.1%) | `ai_support_agent_roi_calculator_slug` | `https://myaskai.com/ai-support-agent-roi-calculator/intercom` |

### 页面级 Title / H1 / Schema.org 真实抽样 (Live HTML Samples)
- **`/`** (https://myaskai.com/)
  - **`<title>`**: `AI Customer Service Agent for Your Helpdesk | My AskAI`
  - **`<h1>`**: `Match or beat the quality of your helpdesk’s AI at a fraction of the cost`
  - **Meta Description**: `Deflect support requests by 75% with an AI customer service agent. Add to your existing live chat providers, like Intercom, Zendesk or Freshdesk. And start savi`
  - **Schema.org JSON-LD**: `SoftwareApplication,WebApplication, Organization, WebSite, HowTo`
- **`/blog/[blog_slug]`** (https://myaskai.com/blog/my-askai-traveljoy-case-study-2026)
  - **`<title>`**: `How TravelJoy hit 80% AI resolution, saving 193 hrs/month`
  - **`<h1>`**: `How TravelJoy achieves 80% AI resolution, saving 193 hrs each month`
  - **Meta Description**: `TravelJoy&#x27;s Zendesk AI resolved 24% of tickets. They switched to My AskAI. Now it&#x27;s 80%. Same knowledge base, very different result.`
  - **Schema.org JSON-LD**: `Article, ImageObject, BreadcrumbList, Organization, Person, WebSite`
- **`/blog/[blog_slug]`** (https://myaskai.com/blog/my-askai-givecard-case-study)
  - **`<title>`**: `Fintech AI Customer Support Case Study: GiveCard 95%`
  - **`<h1>`**: `How GiveCard achieves 95% AI resolution, saving 20 hours each month`
  - **Meta Description**: `GiveCard, a fintech disbursements platform, resolves 95% of its monthly Zendesk tickets with AI at 90% CSAT, saving ~20 hours a month. Here&#x27;s how.`
  - **Schema.org JSON-LD**: `Article, ImageObject, BreadcrumbList, Organization, Person, WebSite`
- **`/compare/[tool_a]-vs-[tool_b]`** (https://myaskai.com/compare/freshdesk-vs-zendesk-ai-pricing)
  - **`<title>`**: `Freshdesk Freddy vs Zendesk AI Pricing Compared [2026]`
  - **`<h1>`**: `(none)`
  - **Meta Description**: `Compare Freshdesk Freddy vs Zendesk AI pricing side by side. We break down per-resolution costs, plan tiers, and total cost of ownership to help you choose the `
  - **Schema.org JSON-LD**: `Organization, WebSite`

---

## 4. 落地页首屏文案拆解 (Landing Page Above-the-Fold Anatomy)
- **首页 `<title>`**: `AI Customer Service Agent for Your Helpdesk | My AskAI`
- **首页 Hero `<h1>`**: `Match or beat the quality of your helpdesk’s AI at a fraction of the cost`
- **Meta Description**: `Deflect support requests by 75% with an AI customer service agent. Add to your existing live chat providers, like Intercom, Zendesk or Freshdesk. And start saving your team &amp; customers time.`
- **Schema.org JSON-LD 类型**: `SoftwareApplication,WebApplication, Organization, WebSite, HowTo`
- **首屏转化钩子解析 (Conversion Hook)**: Hero H1 (`Match or beat the quality of your helpdesk’s AI at a fraction of the cost`) attacks incumbent pricing head-on, immediately speaking to support leaders shocked by Intercom Fin bills.

---

## 5. 定价结构与付费墙心理设计 (Pricing & Paywall Architecture)
- **定价页 URL (Analyzed URL)**: https://myaskai.com/pricing
- **计费周期切换 (Billing Toggles)**: `Monthly Annual (33% Discount)`, `Monthly`, `Annual (33% Discount)`, `Monthly account audit (identifying issues & opportunities)`
- **年付折扣话术 (Annual Discount Framing)**: Standard
- **实测提取价格点 (Extracted Price Points)**: `$199/mo`, `$0.12`, `$49/mo`, `$499/mo`, `$0.10`, `$999/mo`, `$709 / mo`, `$3,004 / mo`
- **风险逆转与试用信号 (Risk Reversal)**: `No credit card required`, `30 day free trial`, `cancel anytime`
- **结账基础设施信号 (Checkout Stack)**: Custom / Stripe
- **定价页 FAQ 异议处理数量**: `0` 个问题

---

## 6. 核心获客飞轮 (Acquisition Channels & Growth Loops)
1. High-Intent Helpdesk Comparison Matrix (`/compare/[tool_a]-vs-[tool_b]` — 10 pages): Targets buyers comparing Intercom Fin, Zendesk AI, Ada, and CustomGPT.
2. Helpdesk Integration Landing Pages (`/ai-agent-integration/[slug]` — 8 pages + `/features/[slug]` — 10 pages): Dedicated landing pages for every major helpdesk ecosystem (Intercom, Zendesk, Gorgias, Freshdesk, HubSpot).
3. Case Study & ROI Proof Engine (`/blog/[slug]` — 24 deep-dive articles): Publishes exact ticket deflection rates and cost-per-resolution benchmarks.

---

## 7. 独立开发者可直接抄作业的 3 个动作 (3 Replicable Action Items)
1. Build a Drop-In Tax Cutter for Expensive Incumbent Add-Ons: When incumbents like Intercom or Zendesk charge $0.99 per AI resolution, positioning right inside their ecosystem at $0.10/ticket creates an instant ROI calculation.
2. Pair `/compare/[incumbent]-vs-[you]` (10 pages) with `/ai-agent-integration/[platform]` (8 pages): Capture both users researching native helpdesk AI pricing and users searching for third-party plugins.
3. Offer Annual 33% Discount + Monthly Account Audits on Higher Tiers (`$49/mo`, `$199/mo`, `$499/mo`): Combines self-serve SaaS with high-retention white-glove ticket audits.

---

*本拆解原始 JSON 与 Markdown 蓝图已存档于 `/workspace/growth-skills/examples/pseo/myaskai-com-pseo-blueprint.json`。想要一键提取任意竞品的完整 pSEO 蓝图并生成 Next.js/Astro 页面？使用 **A 套件 (`pseo-competitor-teardown` + `x-alternative-pages`)**（早鸟买断价 **$69**，单品 **$29**，团队版 **$169**）。*
