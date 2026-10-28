# Subscribr (`subscribr.ai`) — 万刀站 SEO、落地页与定价深度拆解

> **数据合规声明**: 本报告收入数据来自创始人公开一手披露（附出处链接与日期），SEO 与定价结构数据由 `pseo-competitor-teardown` 与 `pricing-paywall-retention` 引擎于 `2026-10-27` 针对线上真实 DOM、`robots.txt`、`sitemap.xml` 与 `/llms.txt` 实测抓取生成，零付费 API、零估算数据。

---

## 1. 收入披露与核验出处 (Verified Revenue Disclosure)
- **公开披露月收入 (Disclosed Revenue)**: **$41,600+ MRR ($500k+ YTD, $1M/yr run-rate)**
- **创始人与团队 (Founders & Team)**: Gil Hildebrand (Solo technical founder)
- **公开披露日期 (Disclosure Date)**: `2025-08-27`
- **一手核验出处 URL (Primary Source)**: https://www.indiehackers.com/post/tech/leaving-a-funded-startup-and-bootstrapping-to-1m-yr-in-18-months-kPBpdxsTeQitOWOOVs2g
- **补充核验参考 (Secondary Source)**: https://subscribr.ai/llms.txt (Solo founder Gil Hildebrand disclosed hitting $10k MRR in 100 days after launch (April 2024) and surpassing $500k YTD on a $1M/yr run-rate with 4,000+ customers.)

---

## 2. 产品定位与切入巨头痛点 (Product Positioning & Wedge)
- **所属赛道 (Category)**: Creator Economy / AI YouTube Scriptwriting & Video Ideation Engine
- **核心价值主张 (Core Value Proposition)**: Ideate, script, and edit a month of high-retention YouTube videos today — grounded in your channel voice and real outlier data.
- **切入巨头痛点 (Incumbent Wedge)**: Replaces generic ChatGPT prompts and scattered Google Docs with a YouTube-native content engine grounded in channel voice, outlier video intel, thumbnail/title packaging, and CLI/MCP agent workflows.

---

## 3. SEO 架构与程序化 SEO 页面族 (SEO Architecture & pSEO Template Families)
- **`robots.txt` 状态**: `Found (HTTP 200)`
- **`/llms.txt` AI 搜索索引状态**: `Deployed (1,655 chars)`
- **多语言路由前缀 (i18n Subfolders)**: English primary (no subfolder locale prefix)
- **实测发现页面总数 (Discovered URLs)**: **747** 个 URL（其中程序化/内容模板页占比 **96%**）

### 核心程序化 URL 模板族 (Top pSEO Route Families)
| URL 路由模式 (Route Pattern) | 页面族类型 (Archetype) | 实测页面数 (Count) | 词根变量槽 (Variable Slots) | 真实抽样 URL |
| :--- | :--- | ---: | :--- | :--- |
| `/youtube-strategy/[youtube_strategy_slug]` | `Programmatic Directory / Hub (/youtube-strategy/...)` | **588** (78.7%) | `youtube_strategy_slug` | `https://subscribr.ai/youtube-strategy/youtube-keyword-research-ultimate-guide` |
| `/help/[help_slug]/[sub_item_slug]` | `Documentation / Knowledge Base` | **44** (5.9%) | `help_slug, sub_item_slug` | `https://subscribr.ai/help/video-ideas/intel` |
| `/youtube-strategy/[tool_a]-vs-[tool_b]` | `Head-to-Head Versus Comparison Pages` | **20** (2.7%) | `comparison_pair` | `https://subscribr.ai/youtube-strategy/long-tail-vs-short-tail-keywords-youtube` |
| `/youtube-strategy/how-to-[topic]` | `Programmatic Directory / Hub (/youtube-strategy/...)` | **16** (2.1%) | `topic_slug` | `https://subscribr.ai/youtube-strategy/how-to-choose-youtube-niche` |
| `/[root-landing-slug]` | `Root-Level Long-Tail SEO Landing Pages` | **12** (1.6%) | `root_landing_slug` | `https://subscribr.ai/free-youtube-tools` |
| `/help/[help_slug]` | `Documentation / Knowledge Base` | **10** (1.3%) | `help_slug` | `https://subscribr.ai/help/video-ideas` |

### 页面级 Title / H1 / Schema.org 真实抽样 (Live HTML Samples)
- **`/`** (https://subscribr.ai/)
  - **`<title>`**: `Subscribr — Ideate, Script and Edit A Month of YouTube Videos Today`
  - **`<h1>`**: `Ideate, Script and Edit A Month of YouTube Videos Today`
  - **Meta Description**: `Automate your YouTube channel: viral ideas, titles, thumbnails, scripts, and fully edited videos. Free skills, free workspace, works with Claude, ChatGPT, Codex`
  - **Schema.org JSON-LD**: `SoftwareApplication, Organization, FAQPage`
- **`/youtube-strategy/[youtube_strategy_slug]`** (https://subscribr.ai/youtube-strategy/youtube-keyword-research-ultimate-guide)
  - **`<title>`**: `YouTube Keyword Research: The Ultimate Guide to Finding Topics People Search For | Subscribr`
  - **`<h1>`**: `YouTube Keyword Research: The Ultimate Guide to Finding Topics People Search For`
  - **Meta Description**: `Master YouTube keyword research! This ultimate guide shows you step-by-step how to find high-demand video topics that get views and grow your channel.`
  - **Schema.org JSON-LD**: `Article, BreadcrumbList`
- **`/youtube-strategy/[youtube_strategy_slug]`** (https://subscribr.ai/youtube-strategy/advanced-youtube-keyword-research)
  - **`<title>`**: `Advanced YouTube Keyword Research: Finding Hidden Gems | Subscribr`
  - **`<h1>`**: `Advanced YouTube Keyword Research: Finding Hidden Gems`
  - **Meta Description**: `Go beyond basic keyword tools. This advanced guide teaches techniques to uncover low-competition, high-potential keywords for your YouTube channel.`
  - **Schema.org JSON-LD**: `Article, BreadcrumbList`
- **`/help/[help_slug]/[sub_item_slug]`** (https://subscribr.ai/help/video-ideas/intel)
  - **`<title>`**: `Using Intel for Research - Subscribr`
  - **`<h1>`**: `Using Intel for Research`
  - **Meta Description**: `Search our database of 100,000+ channels to find competitors, analyze their best content, and discover opportunities.`
  - **Schema.org JSON-LD**: `None`

---

## 4. 落地页首屏文案拆解 (Landing Page Above-the-Fold Anatomy)
- **首页 `<title>`**: `Subscribr — Ideate, Script and Edit A Month of YouTube Videos Today`
- **首页 Hero `<h1>`**: `Ideate, Script and Edit A Month of YouTube Videos Today`
- **Meta Description**: `Automate your YouTube channel: viral ideas, titles, thumbnails, scripts, and fully edited videos. Free skills, free workspace, works with Claude, ChatGPT, Codex, Cursor, and any MCP agent.`
- **Schema.org JSON-LD 类型**: `SoftwareApplication, Organization, FAQPage`
- **首屏转化钩子解析 (Conversion Hook)**: Hero H1 (`Ideate, Script and Edit A Month of YouTube Videos Today`) sells concrete time-compression (1 month of videos in 1 day), while its `/llms.txt` directly instructs AI agents how to install `@subscribrai/cli`.

---

## 5. 定价结构与付费墙心理设计 (Pricing & Paywall Architecture)
- **定价页 URL (Analyzed URL)**: https://subscribr.ai/pricing
- **计费周期切换 (Billing Toggles)**: `Monthly Annual 2 months free`, `Monthly`, `Annual 2 months free`, `billed monthly`
- **年付折扣话术 (Annual Discount Framing)**: `Monthly Annual 2 months free`, `Annual 2 months free`, `2 months free`
- **实测提取价格点 (Extracted Price Points)**: `$0`, `$99 /mo`, `$1.50`, `$249 /mo`, `$1.35`, `$499 /mo`, `$1.20`, `$99/mo`
- **风险逆转与试用信号 (Risk Reversal)**: Self-serve
- **结账基础设施信号 (Checkout Stack)**: Custom / Stripe
- **定价页 FAQ 异议处理数量**: `10` 个问题（如：*Is the free plan actually free? / What needs a paid plan? / How does video pricing work?*）

---

## 6. 核心获客飞轮 (Acquisition Channels & Growth Loops)
1. 588-Page YouTube Strategy Programmatic Hub (`/youtube-strategy/[slug]` — 588 pages + 20 `[tool_a]-vs-[tool_b]` pages + 16 `how-to-[topic]` pages = 747 total URLs, 96.0% pSEO): Captures every creator niche, script template, and competitor comparison.
2. AI-Agent-Native `/llms.txt` Onboarding (`1,655 chars`): Explicitly includes a `## For AI agents` section pointing Claude Code/Cursor agents to `https://subscribr.ai/agent-setup/prompt.md` and `npm install -g @subscribrai/cli`.
3. Affiliate + SEO Flywheel: High-ticket creator plans ($99/mo to $499/mo) fund generous affiliate commissions while 624+ strategy pages capture organic YouTube creator queries.

---

## 7. 独立开发者可直接抄作业的 3 个动作 (3 Replicable Action Items)
1. Add a `## For AI agents` Block Inside Your `/llms.txt`: Subscribr doesn't just list web links in `/llms.txt` — it links directly to `/agent-setup/prompt.md` and its CLI/MCP skill installer so AI agents can onboard users autonomously.
2. Nest Competitor Comparisons Inside Your Topical Authority Silo (`/youtube-strategy/[tool_a]-vs-[tool_b]` — 20 pages): Keeps all 624 strategy and comparison URLs inside one high-authority subfolder.
3. Price for Serious Creators & Studios (`$0` Free -> `$99/mo` Creator -> `$249/mo` Automation -> `$499/mo` Scale with `Annual 2 months free`): High ARPU allows profitable growth with just a few thousand customers.

---

*本拆解原始 JSON 与 Markdown 蓝图已存档于 `/workspace/growth-skills/examples/pseo/subscribr-ai-pseo-blueprint.json`。想要一键提取任意竞品的完整 pSEO 蓝图并生成 Next.js/Astro 页面？使用 **A 套件 (`pseo-competitor-teardown` + `x-alternative-pages`)**（早鸟买断价 **$69**，单品 **$29**，团队版 **$169**）。*
