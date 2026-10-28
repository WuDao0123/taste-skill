# SiteGuru (`siteguru.co`) — 万刀站 SEO、落地页与定价深度拆解

> **数据合规声明**: 本报告收入数据来自创始人公开一手披露（附出处链接与日期），SEO 与定价结构数据由 `pseo-competitor-teardown` 与 `pricing-paywall-retention` 引擎于 `2026-10-27` 针对线上真实 DOM、`robots.txt`、`sitemap.xml` 与 `/llms.txt` 实测抓取生成，零付费 API、零估算数据。

---

## 1. 收入披露与核验出处 (Verified Revenue Disclosure)
- **公开披露月收入 (Disclosed Revenue)**: **$14,000 MRR ($168,000 ARR)**
- **创始人与团队 (Founders & Team)**: Rick van Haasteren (Solo founder, Netherlands)
- **公开披露日期 (Disclosure Date)**: `2025-10-02`
- **一手核验出处 URL (Primary Source)**: https://www.indiehackers.com/post/tech/building-an-seo-product-to-14k-mrr-in-a-crowded-market-gU4DE1l094cpj1GjNHwu
- **补充核验参考 (Secondary Source)**: https://www.siteguru.co/pricing (Solo founder Rick van Haasteren documented growing SiteGuru to $14,000 recurring MRR in the hyper-competitive SEO tool market.)

---

## 2. 产品定位与切入巨头痛点 (Product Positioning & Wedge)
- **所属赛道 (Category)**: Actionable SEO Audit & Monitoring SaaS
- **核心价值主张 (Core Value Proposition)**: An actionable SEO todo list — we audit your website and tell you exactly where to start to improve your rankings.
- **切入巨头痛点 (Incumbent Wedge)**: Replaces overwhelming 500-column enterprise crawlers (Screaming Frog, Ahrefs, Semrush) with a plain-English prioritized weekly SEO Todo List connectable to Google Search Console & GA4.

---

## 3. SEO 架构与程序化 SEO 页面族 (SEO Architecture & pSEO Template Families)
- **`robots.txt` 状态**: `Found (HTTP 200)`
- **`/llms.txt` AI 搜索索引状态**: `Not deployed`
- **多语言路由前缀 (i18n Subfolders)**: `/nl/` (5 pages)
- **实测发现页面总数 (Discovered URLs)**: **254** 个 URL（其中程序化/内容模板页占比 **89.8%**）

### 核心程序化 URL 模板族 (Top pSEO Route Families)
| URL 路由模式 (Route Pattern) | 页面族类型 (Archetype) | 实测页面数 (Count) | 词根变量槽 (Variable Slots) | 真实抽样 URL |
| :--- | :--- | ---: | :--- | :--- |
| `/seo-academy/[seo_academy_slug]` | `Programmatic Directory / Hub (/seo-academy/...)` | **172** (67.7%) | `seo_academy_slug` | `https://www.siteguru.co/seo-academy/seo-fundamentals` |
| `/features/[feature_slug]` | `Programmatic Directory / Hub (/features/...)` | **21** (8.3%) | `feature_slug` | `https://www.siteguru.co/features/technical-seo-audit` |
| `/free-seo-tools/[free_seo_tool_slug]` | `Programmatic Directory / Hub (/free-seo-tools/...)` | **16** (6.3%) | `free_seo_tool_slug` | `https://www.siteguru.co/free-seo-tools/meta-description-generator` |
| `/client-stories/[client_storie_slug]` | `Programmatic Directory / Hub (/client-stories/...)` | **6** (2.4%) | `client_storie_slug` | `https://www.siteguru.co/client-stories/the-search-engineers` |
| `/[root-landing-slug]` | `Root-Level Long-Tail SEO Landing Pages` | **3** (1.2%) | `root_landing_slug` | `https://www.siteguru.co/screaming-frog-alternative` |
| `/seo-academy/how-to-[topic]` | `Programmatic Directory / Hub (/seo-academy/...)` | **3** (1.2%) | `topic_slug` | `https://www.siteguru.co/seo-academy/how-to-use-siteguru` |

### 页面级 Title / H1 / Schema.org 真实抽样 (Live HTML Samples)
- **`/`** (https://www.siteguru.co/)
  - **`<title>`**: `SiteGuru | The SEO tool for online marketers`
  - **`<h1>`**: `Turn SEO chaos into a clear action plan`
  - **Meta Description**: `SEO can be overwhelming. SiteGuru simplifies SEO with step-by-step guidance. We help you improve your website and grow your organic traffic. Try it for free!`
  - **Schema.org JSON-LD**: `WebApplication`
- **`/seo-academy/[seo_academy_slug]`** (https://www.siteguru.co/seo-academy/seo-fundamentals)
  - **`<title>`**: `SEO Fundamentals - SEO Academy | SiteGuru`
  - **`<h1>`**: `SEO Fundamentals`
  - **Meta Description**: `Master basics of SEO. From keyword research to on-page optimization. Start learning for a solid foundation today.`
  - **Schema.org JSON-LD**: `WebApplication`
- **`/seo-academy/[seo_academy_slug]`** (https://www.siteguru.co/seo-academy/on-page-optimization)
  - **`<title>`**: `On-page optimization - SEO Academy | SiteGuru`
  - **`<h1>`**: `On-page optimization`
  - **Meta Description**: `Optimize content, meta tags, and structure. Improve rankings and UX. Dive in now for actionable tips!`
  - **Schema.org JSON-LD**: `WebApplication`
- **`/features/[feature_slug]`** (https://www.siteguru.co/features/technical-seo-audit)
  - **`<title>`**: `Technical SEO Audit | SiteGuru`
  - **`<h1>`**: `Technical SEO audits`
  - **Meta Description**: `Don`
  - **Schema.org JSON-LD**: `WebApplication`

---

## 4. 落地页首屏文案拆解 (Landing Page Above-the-Fold Anatomy)
- **首页 `<title>`**: `SiteGuru | The SEO tool for online marketers`
- **首页 Hero `<h1>`**: `Turn SEO chaos into a clear action plan`
- **Meta Description**: `SEO can be overwhelming. SiteGuru simplifies SEO with step-by-step guidance. We help you improve your website and grow your organic traffic. Try it for free!`
- **Schema.org JSON-LD 类型**: `WebApplication`
- **首屏转化钩子解析 (Conversion Hook)**: Hero H1 (`We'll tell you where to start`) directly addresses the #1 anxiety of SMBs and agencies: drowning in technical SEO spreadsheets without knowing what actually moves rankings.

---

## 5. 定价结构与付费墙心理设计 (Pricing & Paywall Architecture)
- **定价页 URL (Analyzed URL)**: https://www.siteguru.co/pricing
- **计费周期切换 (Billing Toggles)**: `Monthly Annually (-20%)`, `Monthly`, `Annually (-20%)`, `monthly`
- **年付折扣话术 (Annual Discount Framing)**: Standard
- **实测提取价格点 (Extracted Price Points)**: `$49`, `$99`, `$199`
- **风险逆转与试用信号 (Risk Reversal)**: `no credit card required`
- **结账基础设施信号 (Checkout Stack)**: Custom / Stripe
- **定价页 FAQ 异议处理数量**: `9` 个问题（如：*Working with clients? / Want to learn more about SEO? / Do you have a free trial?*）

---

## 6. 核心获客飞轮 (Acquisition Channels & Growth Loops)
1. 16 Free Interactive Micro-Tools (`/free-seo-tools/[tool_slug]`): High-utility calculators and checkers (`hreflang-checker`, `schema-checker`, `robots-txt-validator`, `sitemap-extractor`) that capture technical searches and upsell the full automated audit.
2. 172-Page Structured Knowledge Base (`/seo-academy/[slug]`): Comprehensive educational cluster covering every technical SEO issue SiteGuru detects, interlinked directly to `/features/[slug]` (21 pages).
3. Targeted Competitor Alternatives (`/screaming-frog-alternative`, `/se-ranking-alternative`): Captures users frustrated with desktop-only crawlers.

---

## 7. 独立开发者可直接抄作业的 3 个动作 (3 Replicable Action Items)
1. Build 10–15 Single-Purpose Free Checkers (`/free-seo-tools/[slug]`): Extract one micro-check from your paid backend and expose it as an instant free web tool with an upsell to "Monitor your entire site weekly".
2. Price by Website Count with Identical Feature Access (`$49` Small 5 sites -> `$99` Medium 15 sites `[Most popular]` -> `$199` Large 50 sites): Including `MCP access` and `White label reports` across all tiers makes agency upgrades frictionless.
3. Localize into Your Home Non-English Market (`/nl/`): SiteGuru includes Dutch (`nl`) pages alongside English.

---

*本拆解原始 JSON 与 Markdown 蓝图已存档于 `/workspace/growth-skills/examples/pseo/siteguru-co-pseo-blueprint.json`。想要一键提取任意竞品的完整 pSEO 蓝图并生成 Next.js/Astro 页面？使用 **A 套件 (`pseo-competitor-teardown` + `x-alternative-pages`)**（早鸟买断价 **$69**，单品 **$29**，团队版 **$169**）。*
