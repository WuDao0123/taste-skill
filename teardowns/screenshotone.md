# ScreenshotOne (`screenshotone.com`) — 万刀站 SEO、落地页与定价深度拆解

> **数据合规声明**: 本报告收入数据来自创始人公开一手披露（附出处链接与日期），SEO 与定价结构数据由 `pseo-competitor-teardown` 与 `pricing-paywall-retention` 引擎于 `2026-10-27` 针对线上真实 DOM、`robots.txt`、`sitemap.xml` 与 `/llms.txt` 实测抓取生成，零付费 API、零估算数据。

---

## 1. 收入披露与核验出处 (Verified Revenue Disclosure)
- **公开披露月收入 (Disclosed Revenue)**: **$33,000 MRR (~$400k ARR; ~$36k MRR by Sept 2026)**
- **创始人与团队 (Founders & Team)**: Dmytro Krasun (Solo technical founder)
- **公开披露日期 (Disclosure Date)**: `2026-05-29`
- **一手核验出处 URL (Primary Source)**: https://dmytrokrasun.com/posts/screenshotone-4-years/
- **补充核验参考 (Secondary Source)**: https://dmytrokrasun.com/posts/20k-mrr-whats-next/ (Solo founder Dmytro Krasun documented growing ScreenshotOne from launch (May 2022) to $10k MRR (Sept 2024), $20k MRR (June 2025), and $33k MRR with 1,000+ paying customers and 100M+ API calls (May 2026).)

---

## 2. 产品定位与切入巨头痛点 (Product Positioning & Wedge)
- **所属赛道 (Category)**: Developer API / Automated Website Screenshot & Rendering Engine
- **核心价值主张 (Core Value Proposition)**: The screenshot API for developers and AI agents — render clean screenshots, PDFs, and videos without cookie banners or ads in one API call.
- **切入巨头痛点 (Incumbent Wedge)**: Solves the nightmare of maintaining headless Chromium clusters, cookie-banner blocking, ad blocking, and residential proxies with a clean REST API and SDKs built specifically for developers and AI agents.

---

## 3. SEO 架构与程序化 SEO 页面族 (SEO Architecture & pSEO Template Families)
- **`robots.txt` 状态**: `Found (HTTP 200)`
- **`/llms.txt` AI 搜索索引状态**: `Deployed (926 chars)`
- **多语言路由前缀 (i18n Subfolders)**: English primary (no subfolder locale prefix)
- **实测发现页面总数 (Discovered URLs)**: **644** 个 URL（其中程序化/内容模板页占比 **95.8%**）

### 核心程序化 URL 模板族 (Top pSEO Route Families)
| URL 路由模式 (Route Pattern) | 页面族类型 (Archetype) | 实测页面数 (Count) | 词根变量槽 (Variable Slots) | 真实抽样 URL |
| :--- | :--- | ---: | :--- | :--- |
| `/changelog/[changelog_slug]` | `Programmatic Directory / Hub (/changelog/...)` | **165** (25.6%) | `changelog_slug` | `https://screenshotone.com/changelog/2/` |
| `/blog/[blog_slug]` | `Content / Editorial Blog Cluster` | **134** (20.8%) | `blog_slug` | `https://screenshotone.com/blog/2/` |
| `/docs/[doc_slug]/[sub_item_slug]` | `Documentation / Knowledge Base` | **65** (10.1%) | `doc_slug, sub_item_slug` | `https://screenshotone.com/docs/code-examples/c-net/` |
| `/use-cases/[use_case_slug]` | `Use-Case Solution Pages (/use-cases/[persona-or-workflow])` | **49** (7.6%) | `use_case_slug` | `https://screenshotone.com/use-cases/ai-agents/` |
| `/contributors/[contributor_slug]` | `Programmatic Directory / Hub (/contributors/...)` | **31** (4.8%) | `contributor_slug` | `https://screenshotone.com/contributors/anatoly-pashias/` |
| `/blog/how-to-[topic]` | `Content / Editorial Blog Cluster` | **28** (4.3%) | `topic_slug` | `https://screenshotone.com/blog/how-to-add-custom-scripts-to-a-page-in-puppeteer/` |

### 页面级 Title / H1 / Schema.org 真实抽样 (Live HTML Samples)
- **`/`** (https://screenshotone.com/)
  - **`<title>`**: `Website Screenshot API for Developers and AI Agents | ScreenshotOne`
  - **`<h1>`**: `The screenshot API for developers`
  - **Meta Description**: `Capture reliable website screenshots, PDFs, and scrolling videos with one developer-friendly API. Start free with ScreenshotOne.`
  - **Schema.org JSON-LD**: `Organization, WebSite, Person, ImageObject, SoftwareApplication, WebPage, BreadcrumbList`
- **`/changelog/[changelog_slug]`** (https://screenshotone.com/changelog/2/)
  - **`<title>`**: `ScreenshotOne Changelog — Page 2`
  - **`<h1>`**: `ScreenshotOne Changelog — Page 2`
  - **Meta Description**: `New ScreenshotOne features, bug fixes, and rendering improvements, page 2.`
  - **Schema.org JSON-LD**: `Organization, WebSite, Person, ImageObject, WebPage, BreadcrumbList`
- **`/changelog/[changelog_slug]`** (https://screenshotone.com/changelog/3/)
  - **`<title>`**: `ScreenshotOne Changelog — Page 3`
  - **`<h1>`**: `ScreenshotOne Changelog — Page 3`
  - **Meta Description**: `New ScreenshotOne features, bug fixes, and rendering improvements, page 3.`
  - **Schema.org JSON-LD**: `Organization, WebSite, Person, ImageObject, WebPage, BreadcrumbList`
- **`/blog/[blog_slug]`** (https://screenshotone.com/blog/2/)
  - **`<title>`**: `ScreenshotOne Blog — Page 2`
  - **`<h1>`**: `Automate Website Screenshots`
  - **Meta Description**: `Page 2 of ScreenshotOne guides about website screenshots, browser automation, Puppeteer, Playwright, and rendering APIs.`
  - **Schema.org JSON-LD**: `Organization, WebSite, Person, ImageObject, WebPage, BreadcrumbList`

---

## 4. 落地页首屏文案拆解 (Landing Page Above-the-Fold Anatomy)
- **首页 `<title>`**: `Website Screenshot API for Developers and AI Agents | ScreenshotOne`
- **首页 Hero `<h1>`**: `The screenshot API for developers`
- **Meta Description**: `Capture reliable website screenshots, PDFs, and scrolling videos with one developer-friendly API. Start free with ScreenshotOne.`
- **Schema.org JSON-LD 类型**: `Organization, WebSite, Person, ImageObject, SoftwareApplication, WebPage, BreadcrumbList`
- **首屏转化钩子解析 (Conversion Hook)**: Hero Title (`Website Screenshot API for Developers and AI Agents`) explicitly adds `and AI Agents` to capture the 2025–2026 boom in multimodal LLM agents needing visual web rendering.

---

## 5. 定价结构与付费墙心理设计 (Pricing & Paywall Architecture)
- **定价页 URL (Analyzed URL)**: https://screenshotone.com/pricing/
- **计费周期切换 (Billing Toggles)**: `Monthly`, `Annually (2 months free)`
- **年付折扣话术 (Annual Discount Framing)**: `Annually (2 months free)`, `(2 months free)`
- **实测提取价格点 (Extracted Price Points)**: `$17`, `$0.00`, `$79`, `$259`
- **风险逆转与试用信号 (Risk Reversal)**: `No credit card required`, `Cancel anytime`
- **结账基础设施信号 (Checkout Stack)**: Custom / Stripe
- **定价页 FAQ 异议处理数量**: `10` 个问题（如：*Do failed screenshots count against the limitation on the plan? / Is it a free service for taking screenshots? / Do cached screenshots count against the limitation on the plan?*）

---

## 6. 核心获客飞轮 (Acquisition Channels & Growth Loops)
1. 4-Pillar Developer SEO Matrix (644 total URLs, 95.8% pSEO): Combines `/changelog/[slug]` (165 pages), `/blog/[slug]` (134 technical tutorials), `/docs/[slug]/[sub]` (65 SDK & parameter docs), and `/use-cases/[slug]` (49 pages).
2. Dedicated `/ai-information/` + `/llms.txt` (`926 chars`): ScreenshotOne built a special page (`https://screenshotone.com/ai-information/`) linked from the very top of its `/llms.txt` containing capabilities, pricing, limitations, and customer evidence formatted specifically for LLMs!
3. Radical Founder Transparency Blog: Dmytro’s milestone posts ($10k, $20k, $33k MRR) earn massive organic distribution across Hacker News, Indie Hackers, and X.

---

## 7. 独立开发者可直接抄作业的 3 个动作 (3 Replicable Action Items)
1. Create a Dedicated `/ai-information/` Page and Link It First in `/llms.txt`: ScreenshotOne explicitly feeds AI assistants a single ground-truth page with verified pricing, limits, and SDK links so LLMs never hallucinate its specs.
2. Pair 49 `/use-cases/[slug]` Pages with 134 Technical Language Tutorials (`Puppeteer vs Playwright vs API`): Capture developers at the exact moment their self-hosted headless Chrome script crashes in production.
3. Clear Usage-Tier Pricing (`$17/mo` -> `$79/mo` -> `$259/mo` with `Annually 2 months free` + 10 objection-handling FAQs).

---

*本拆解原始 JSON 与 Markdown 蓝图已存档于 `/workspace/growth-skills/examples/pseo/screenshotone-com-pseo-blueprint.json`。想要一键提取任意竞品的完整 pSEO 蓝图并生成 Next.js/Astro 页面？使用 **A 套件 (`pseo-competitor-teardown` + `x-alternative-pages`)**（早鸟买断价 **$69**，单品 **$29**，团队版 **$169**）。*
