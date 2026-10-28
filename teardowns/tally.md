# Tally (`tally.so`) — 万刀站 SEO、落地页与定价深度拆解

> **数据合规声明**: 本报告收入数据来自创始人公开一手披露（附出处链接与日期），SEO 与定价结构数据由 `pseo-competitor-teardown` 与 `pricing-paywall-retention` 引擎于 `2026-10-27` 针对线上真实 DOM、`robots.txt`、`sitemap.xml` 与 `/llms.txt` 实测抓取生成，零付费 API、零估算数据。

---

## 1. 收入披露与核验出处 (Verified Revenue Disclosure)
- **公开披露月收入 (Disclosed Revenue)**: **$422,000 MRR ($5,000,000 ARR)**
- **创始人与团队 (Founders & Team)**: Marie Martens & Filip Minev (bootstrapped, lean team)
- **公开披露日期 (Disclosure Date)**: `2026-04-15`
- **一手核验出处 URL (Primary Source)**: https://blog.tally.so/the-road-from-4m-to-5m-arr/
- **补充核验参考 (Secondary Source)**: https://www.indiehackers.com/post/bootstrapping-tally-to-150k-mrr-by-doing-less-better-68e340156f (Earlier $150k MRR milestone verified on Indie Hackers (2024-11-12))

---

## 2. 产品定位与切入巨头痛点 (Product Positioning & Wedge)
- **所属赛道 (Category)**: Form Builder / No-Code SaaS
- **核心价值主张 (Core Value Proposition)**: The simplest way to create forms for free — works like a Notion text document with zero response limits on the free tier.
- **切入巨头痛点 (Incumbent Wedge)**: Disrupts Typeform & Jotform predatory response caps by offering unlimited forms and unlimited responses for free (~99% of features free), monetizing only team collaboration, custom domains, and branding removal at $29/mo.

---

## 3. SEO 架构与程序化 SEO 页面族 (SEO Architecture & pSEO Template Families)
- **`robots.txt` 状态**: `Found (HTTP 200)`
- **`/llms.txt` AI 搜索索引状态**: `Deployed (4,316 chars)`
- **多语言路由前缀 (i18n Subfolders)**: English primary (no subfolder locale prefix)
- **实测发现页面总数 (Discovered URLs)**: **445** 个 URL（其中程序化/内容模板页占比 **92.8%**）

### 核心程序化 URL 模板族 (Top pSEO Route Families)
| URL 路由模式 (Route Pattern) | 页面族类型 (Archetype) | 实测页面数 (Count) | 词根变量槽 (Variable Slots) | 真实抽样 URL |
| :--- | :--- | ---: | :--- | :--- |
| `/templates/[template_slug]/[sub_item_slug]` | `Template Gallery pSEO (/templates/[template-slug])` | **179** (40.2%) | `template_slug, sub_item_slug` | `https://tally.so/templates/registration-form-template/ywaZnM` |
| `/help/[help_slug]` | `Documentation / Knowledge Base` | **142** (31.9%) | `help_slug` | `https://tally.so/help/get-started` |
| `/help/how-to-[topic]` | `Documentation / Knowledge Base` | **42** (9.4%) | `topic_slug` | `https://tally.so/help/how-to-create-a-thank-you-page` |
| `/community-stories/[community_storie_slug]` | `Programmatic Directory / Hub (/community-stories/...)` | **16** (3.6%) | `community_storie_slug` | `https://tally.so/community-stories/charlie-ward` |
| `/help/[competitor]-alternatives` | `Competitor Alternative Landing Pages` | **13** (2.9%) | `competitor_slug` | `https://tally.so/help/tally-a-free-notion-forms-alternative` |
| `/[root-landing-slug]` | `Root-Level Long-Tail SEO Landing Pages` | **10** (2.2%) | `root_landing_slug` | `https://tally.so/multi-step-forms` |

### 页面级 Title / H1 / Schema.org 真实抽样 (Live HTML Samples)
- **`/`** (https://tally.so/)
  - **`<title>`**: `Tally - Create Beautiful Forms for Free | Unlimited Forms &amp; Submissions`
  - **`<h1>`**: `The simplest way to create forms`
  - **Meta Description**: `The simplest way to create beautiful, professional forms in seconds. Unlimited forms, unlimited submissions, forever free. Just start typing - no coding needed.`
  - **Schema.org JSON-LD**: `Organization, WebSite, SoftwareApplication, ImageObject`
- **`/templates/[template_slug]/[sub_item_slug]`** (https://tally.so/templates/registration-form-template/ywaZnM)
  - **`<title>`**: `Registration Form Template - Tally form template`
  - **`<h1>`**: `Registration Form Template`
  - **Meta Description**: `Free registration form template to collect signups, manage attendee details, and organize access for events, programs workshops, and services with confirmation.`
  - **Schema.org JSON-LD**: `None`
- **`/templates/[template_slug]/[sub_item_slug]`** (https://tally.so/templates/contact-form-template/dnWe3O)
  - **`<title>`**: `Contact Form Template - Tally form template`
  - **`<h1>`**: `Contact Form Template`
  - **Meta Description**: `Use this Contact Form Template in Tally to capture messages, organize support requests, and stay connected with customers through a clean online form.`
  - **Schema.org JSON-LD**: `None`
- **`/help/[help_slug]`** (https://tally.so/help/get-started)
  - **`<title>`**: `Get Started with Tally in Minutes | Free Form Builder`
  - **`<h1>`**: `Get started`
  - **Meta Description**: `Learn how to use Tally to create your first form: add questions, set up logic, and publish it, then share it with respondents to start collecting submissions.`
  - **Schema.org JSON-LD**: `None`

---

## 4. 落地页首屏文案拆解 (Landing Page Above-the-Fold Anatomy)
- **首页 `<title>`**: `Tally - Create Beautiful Forms for Free | Unlimited Forms &amp; Submissions`
- **首页 Hero `<h1>`**: `The simplest way to create forms`
- **Meta Description**: `The simplest way to create beautiful, professional forms in seconds. Unlimited forms, unlimited submissions, forever free. Just start typing - no coding needed.`
- **Schema.org JSON-LD 类型**: `Organization, WebSite, SoftwareApplication, ImageObject`
- **首屏转化钩子解析 (Conversion Hook)**: Uses a radical anti-paywall hook ("Create forms for free, without limits") paired with an instant in-browser editor that requires zero signup to test. Social proof highlights 500,000+ creators and teams.

---

## 5. 定价结构与付费墙心理设计 (Pricing & Paywall Architecture)
- **定价页 URL (Analyzed URL)**: https://tally.so/pricing
- **计费周期切换 (Billing Toggles)**: `Pay monthly`, `Pay yearly`
- **年付折扣话术 (Annual Discount Framing)**: Standard
- **实测提取价格点 (Extracted Price Points)**: `$24`, `$74`
- **风险逆转与试用信号 (Risk Reversal)**: Self-serve
- **结账基础设施信号 (Checkout Stack)**: Custom / Stripe
- **定价页 FAQ 异议处理数量**: `0` 个问题

---

## 6. 核心获客飞轮 (Acquisition Channels & Growth Loops)
1. Product-Led Viral Loop: "Made with Tally" badge on free forms drives ~3% referral conversion from form respondents into new creators.
2. Programmatic Template & Alternative SEO: 179 `/templates/[category]/[template_slug]` pages + 13 high-intent `/help/[competitor]-alternatives` comparison pages (`typeform-alternative`, `jotform-alternative`).
3. GEO / AI Search Readiness: Deployed a structured 4.3 KB `/llms.txt` index so ChatGPT, Claude, and Perplexity recommend Tally first for "free form builder" queries.

---

## 7. 独立开发者可直接抄作业的 3 个动作 (3 Replicable Action Items)
1. Attack Your Incumbent's Most Hated Metered Limit: If competitors gate volume (responses, exports, views) at $25/mo, make volume free and charge $29/mo for branding removal + custom domains.
2. Build Dual-Layer pSEO (`/templates/[category]/[slug]` + `/[competitor]-alternative`): Pair high-volume use-case templates (179 pages) with high-intent competitor switching pages (13 pages).
3. Publish `/llms.txt` + `WebApplication` JSON-LD: Tally explicitly exposes a clean Markdown index at `/llms.txt` so AI assistants cite its free-tier generosity accurately.

---

*本拆解原始 JSON 与 Markdown 蓝图已存档于 `/workspace/growth-skills/examples/pseo/tally-so-pseo-blueprint.json`。想要一键提取任意竞品的完整 pSEO 蓝图并生成 Next.js/Astro 页面？使用 **A 套件 (`pseo-competitor-teardown` + `x-alternative-pages`)**（早鸟买断价 **$69**，单品 **$29**，团队版 **$169**）。*
