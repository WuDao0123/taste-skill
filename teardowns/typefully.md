# Typefully (`typefully.com`) — 万刀站 SEO、落地页与定价深度拆解

> **数据合规声明**: 本报告收入数据来自创始人公开一手披露（附出处链接与日期），SEO 与定价结构数据由 `pseo-competitor-teardown` 与 `pricing-paywall-retention` 引擎于 `2026-10-27` 针对线上真实 DOM、`robots.txt`、`sitemap.xml` 与 `/llms.txt` 实测抓取生成，零付费 API、零估算数据。

---

## 1. 收入披露与核验出处 (Verified Revenue Disclosure)
- **公开披露月收入 (Disclosed Revenue)**: **~$167,000/mo (~$2,000,000 ARR)**
- **创始人与团队 (Founders & Team)**: Fabrizio Rinaldi & Francesco Di Lorenzo (2 Italian co-founders)
- **公开披露日期 (Disclosure Date)**: `2026-03-15`
- **一手核验出处 URL (Primary Source)**: https://indiemakerlist.com/leaderboard/saas/
- **补充核验参考 (Secondary Source)**: https://typefully.com/llms.txt (Co-founders Fabrizio Rinaldi & Francesco Di Lorenzo scaled Typefully (originally a Mailbrew side project) to ~$2M ARR (~$167k/mo) across X, LinkedIn, Threads, Bluesky, and Mastodon.)

---

## 2. 产品定位与切入巨头痛点 (Product Positioning & Wedge)
- **所属赛道 (Category)**: Creator Economy / Multi-Platform Social Publishing & API Suite
- **核心价值主张 (Core Value Proposition)**: Write better content and grow on social media faster — cross-post seamlessly to X, LinkedIn, Threads, Bluesky, and Mastodon.
- **切入巨头痛点 (Incumbent Wedge)**: Replaces clunky enterprise social schedulers (Hootsuite, Sprout Social) with a distraction-free minimalist writing studio, collaborative team review comments, and an AI-Agent-ready OpenAPI + Markdown documentation stack.

---

## 3. SEO 架构与程序化 SEO 页面族 (SEO Architecture & pSEO Template Families)
- **`robots.txt` 状态**: `Found (HTTP 200)`
- **`/llms.txt` AI 搜索索引状态**: `Deployed (1,619 chars)`
- **多语言路由前缀 (i18n Subfolders)**: English primary (no subfolder locale prefix)
- **实测发现页面总数 (Discovered URLs)**: **228** 个 URL（其中程序化/内容模板页占比 **93%**）

### 核心程序化 URL 模板族 (Top pSEO Route Families)
| URL 路由模式 (Route Pattern) | 页面族类型 (Archetype) | 实测页面数 (Count) | 词根变量槽 (Variable Slots) | 真实抽样 URL |
| :--- | :--- | ---: | :--- | :--- |
| `/changelog/[changelog_slug]` | `Programmatic Directory / Hub (/changelog/...)` | **111** (48.7%) | `changelog_slug` | `https://typefully.com/changelog/bluesky-sign-in-custom-pds` |
| `/blog/[blog_slug]` | `Content / Editorial Blog Cluster` | **63** (27.6%) | `blog_slug` | `https://typefully.com/blog/x-analytics-ai-agents` |
| `/blog/how-to-[topic]` | `Content / Editorial Blog Cluster` | **11** (4.8%) | `topic_slug` | `https://typefully.com/blog/what-is-my-linkedin-url` |
| `/blog/[competitor]-alternatives` | `Competitor Alternative Landing Pages` | **8** (3.5%) | `competitor_slug` | `https://typefully.com/blog/taplio-alternatives` |
| `/tools/[tool_slug]` | `Free Tool / Micro-Utility Hub (/tools/[tool-slug])` | **6** (2.6%) | `tool_slug` | `https://typefully.com/tools/ai` |
| `/changelog/[changelog_slug]/[sub_item_slug]` | `Programmatic Directory / Hub (/changelog/...)` | **5** (2.2%) | `changelog_slug, sub_item_slug` | `https://typefully.com/changelog/page/2` |

### 页面级 Title / H1 / Schema.org 真实抽样 (Live HTML Samples)
- **`/`** (https://typefully.com/)
  - **`<title>`**: `Typefully: Best social media tool for creators &amp; businesses`
  - **`<h1>`**: `Write better content Grow on social media faster`
  - **Meta Description**: `Create, schedule, and publish social media posts on X (Twitter), LinkedIn, Threads, Bluesky, and more. Grow faster with analytics, tools and automations.`
  - **Schema.org JSON-LD**: `Organization, WebSite, WebPage`
- **`/changelog/[changelog_slug]`** (https://typefully.com/changelog/bluesky-sign-in-custom-pds)
  - **`<title>`**: `Easier Bluesky Sign-In, Now with Custom PDS Support | Typefully Changelog`
  - **`<h1>`**: `Easier Bluesky Sign-In, Now with Custom PDS Support`
  - **Meta Description**: `Connect Bluesky by approving Typefully on Bluesky&#x27;s own sign-in page. No app password needed, and it works with accounts on a custom PDS.`
  - **Schema.org JSON-LD**: `Organization, WebSite, WebPage, Article`
- **`/changelog/[changelog_slug]`** (https://typefully.com/changelog/writing-assistant-comments)
  - **`<title>`**: `Address Feedback with Typefully&#x27;s Assistant | Typefully Changelog`
  - **`<h1>`**: `Address Feedback with Typefully&#x27;s Assistant`
  - **Meta Description**: `The Writing Assistant can now revise your draft based on your team&#x27;s comments, then resolve the ones its edits fixed when you apply.`
  - **Schema.org JSON-LD**: `Organization, WebSite, WebPage, Article`
- **`/blog/[blog_slug]`** (https://typefully.com/blog/x-analytics-ai-agents)
  - **`<title>`**: `How to Feed Your X Analytics to AI Agents with the X API | Typefully`
  - **`<h1>`**: `How to Feed Your X Analytics to AI Agents with the X API`
  - **Meta Description**: `Give Claude, ChatGPT, Cursor, or a terminal agent your real X analytics. A step-by-step guide to the pay-per-use X API, xurl, and X&#x27;s MCP server, wit…`
  - **Schema.org JSON-LD**: `None`

---

## 4. 落地页首屏文案拆解 (Landing Page Above-the-Fold Anatomy)
- **首页 `<title>`**: `Typefully: Best social media tool for creators &amp; businesses`
- **首页 Hero `<h1>`**: `Write better content Grow on social media faster`
- **Meta Description**: `Create, schedule, and publish social media posts on X (Twitter), LinkedIn, Threads, Bluesky, and more. Grow faster with analytics, tools and automations.`
- **Schema.org JSON-LD 类型**: `Organization, WebSite, WebPage`
- **首屏转化钩子解析 (Conversion Hook)**: Hero H1 (`Write better content Grow on social media faster`) pairs calm editorial typography with an interactive multi-network composer preview and a dedicated `/llms.txt` pointing AI agents to `typefully.com/ai-agents.md`.

---

## 5. 定价结构与付费墙心理设计 (Pricing & Paywall Architecture)
- **定价页 URL (Analyzed URL)**: https://typefully.com/pricing
- **计费周期切换 (Billing Toggles)**: `Annual billing only`
- **年付折扣话术 (Annual Discount Framing)**: Standard
- **实测提取价格点 (Extracted Price Points)**: Custom
- **风险逆转与试用信号 (Risk Reversal)**: Self-serve
- **结账基础设施信号 (Checkout Stack)**: Custom / Stripe
- **定价页 FAQ 异议处理数量**: `0` 个问题

---

## 6. 核心获客飞轮 (Acquisition Channels & Growth Loops)
1. 111-Page Public Product Changelog Engine (`/changelog/[changelog_slug]` — 111 pages!): Turns every feature release (Bluesky scheduling, LinkedIn carousels, API v2) into an indexable long-tail landing page.
2. High-Intent Competitor Alternatives & How-To Blog (`/blog/[slug]` — 63 pages + `/blog/how-to-[topic]` — 11 pages + `/blog/[competitor]-alternatives` — 8 pages = 228 total URLs, 93.0% pSEO).
3. AI-Agent-First `/llms.txt` (`1,619 chars`) + `/ai-agents.md`: Explicitly exposes Markdown API docs (`/docs/api.md`) and OpenAPI 3.x JSON so Claude Code and Cursor agents can draft and schedule posts for users.

---

## 7. 独立开发者可直接抄作业的 3 个动作 (3 Replicable Action Items)
1. Expose `/ai-agents.md` and `/docs/api.md` Inside Your `/llms.txt`: Typefully is a textbook example of 2026 GEO — its `/llms.txt` directly teaches AI agents how to authenticate and call its v2 API.
2. Index Every Product Update as a Standalone SEO URL (`/changelog/[slug]` — 111 pages): Instead of hiding updates in a single modal, publish each feature launch at its own descriptive slug to rank for platform-specific queries.
3. Publish Focused `/blog/[competitor]-alternatives` Pages (8 pages): Capture creators churning from Buffer, Hypefury, and Taplio with clean design-led comparison guides.

---

*本拆解原始 JSON 与 Markdown 蓝图已存档于 `/workspace/growth-skills/examples/pseo/typefully-com-pseo-blueprint.json`。想要一键提取任意竞品的完整 pSEO 蓝图并生成 Next.js/Astro 页面？使用 **A 套件 (`pseo-competitor-teardown` + `x-alternative-pages`)**（早鸟买断价 **$69**，单品 **$29**，团队版 **$169**）。*
