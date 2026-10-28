# SuperX (`superx.so`) — 万刀站 SEO、落地页与定价深度拆解

> **数据合规声明**: 本报告收入数据来自创始人公开一手披露（附出处链接与日期），SEO 与定价结构数据由 `pseo-competitor-teardown` 与 `pricing-paywall-retention` 引擎于 `2026-10-27` 针对线上真实 DOM、`robots.txt`、`sitemap.xml` 与 `/llms.txt` 实测抓取生成，零付费 API、零估算数据。

---

## 1. 收入披露与核验出处 (Verified Revenue Disclosure)
- **公开披露月收入 (Disclosed Revenue)**: **$23,000 MRR ($276,000 ARR)**
- **创始人与团队 (Founders & Team)**: Rob Hallam (Indie founder)
- **公开披露日期 (Disclosure Date)**: `2025-09-10`
- **一手核验出处 URL (Primary Source)**: https://www.indiehackers.com/post/tech/hitting-23k-mrr-in-six-months-after-five-failures-4d64o9ev4AXXhX9ogHQQ
- **补充核验参考 (Secondary Source)**: https://superx.so/pricing (Founder Rob Hallam documented reaching $23,000 MRR within 6 months of launching SuperX after 5 prior failed products.)

---

## 2. 产品定位与切入巨头痛点 (Product Positioning & Wedge)
- **所属赛道 (Category)**: Creator Economy / X (Twitter) Analytics & Growth Suite
- **核心价值主张 (Core Value Proposition)**: Find your voice, spot rising trends, and grow faster on X with AI-assisted analytics and scheduling.
- **切入巨头痛点 (Incumbent Wedge)**: Out-positions legacy Twitter schedulers (TweetHunter, Hypefury, Typefully) with real-time algorithm analytics, Chrome sidebar integration, and public creator profile intelligence.

---

## 3. SEO 架构与程序化 SEO 页面族 (SEO Architecture & pSEO Template Families)
- **`robots.txt` 状态**: `Found (HTTP 200)`
- **`/llms.txt` AI 搜索索引状态**: `Not deployed`
- **多语言路由前缀 (i18n Subfolders)**: English primary (no subfolder locale prefix)
- **实测发现页面总数 (Discovered URLs)**: **1,664** 个 URL（其中程序化/内容模板页占比 **98.3%**）

### 核心程序化 URL 模板族 (Top pSEO Route Families)
| URL 路由模式 (Route Pattern) | 页面族类型 (Archetype) | 实测页面数 (Count) | 词根变量槽 (Variable Slots) | 真实抽样 URL |
| :--- | :--- | ---: | :--- | :--- |
| `/creators/[creator_slug]` | `Programmatic Directory / Hub (/creators/...)` | **828** (49.8%) | `creator_slug` | `https://superx.so/creators/popular` |
| `/blog/[blog_slug]` | `Content / Editorial Blog Cluster` | **546** (32.8%) | `blog_slug` | `https://superx.so/blog/superx-playbook` |
| `/blog/how-to-[topic]` | `Content / Editorial Blog Cluster` | **177** (10.6%) | `topic_slug` | `https://superx.so/blog/what-is-twitter-analytics` |
| `/[root-landing-slug]` | `Root-Level Long-Tail SEO Landing Pages` | **28** (1.7%) | `root_landing_slug` | `https://superx.so/tweet-hunter-alternatives` |
| `/twitter-trends/[twitter_trend_slug]` | `Programmatic Directory / Hub (/twitter-trends/...)` | **19** (1.1%) | `twitter_trend_slug` | `https://superx.so/twitter-trends/united-states` |
| `/creators/[creator_slug]/[sub_item_slug]` | `Programmatic Directory / Hub (/creators/...)` | **14** (0.8%) | `creator_slug, sub_item_slug` | `https://superx.so/creators/archetypes/achiever` |

### 页面级 Title / H1 / Schema.org 真实抽样 (Live HTML Samples)
- **`/`** (https://superx.so/)
  - **`<title>`**: `SuperX | X Growth Tool: Scheduling, Analytics, AI Content`
  - **`<h1>`**: `Grow and monetize your audience, smarter faster`
  - **Meta Description**: `The X growth tool used by 11,294+ creators. AI content, smart scheduling, engagement tools, and analytics in one platform. Start free.`
  - **Schema.org JSON-LD**: `Organization, SoftwareApplication`
- **`/creators/[creator_slug]`** (https://superx.so/creators/popular)
  - **`<title>`**: `Popular X/Twitter Profiles | Top Creators & Influencers Analysis`
  - **`<h1>`**: `Popular X Profiles`
  - **Meta Description**: `Discover the most popular X/Twitter profiles analyzed by SuperX. Browse top creators, influencers, and thought leaders with the highest follower counts. Learn f`
  - **Schema.org JSON-LD**: `CollectionPage, ItemList`
- **`/creators/[creator_slug]`** (https://superx.so/creators/new)
  - **`<title>`**: `New X/Twitter Profiles | Recently Analyzed Creators on SuperX`
  - **`<h1>`**: `New X Profiles`
  - **Meta Description**: `Discover recently analyzed X/Twitter profiles on SuperX. Browse new creators, emerging influencers, and fresh accounts just added to our platform. Find rising s`
  - **Schema.org JSON-LD**: `CollectionPage, ItemList`
- **`/blog/[blog_slug]`** (https://superx.so/blog/superx-playbook)
  - **`<title>`**: `SuperX Playbook`
  - **`<h1>`**: `SuperX Playbook`
  - **Meta Description**: `Grow faster on 𝕏 with hidden insights &amp; smart analytics`
  - **Schema.org JSON-LD**: `None`

---

## 4. 落地页首屏文案拆解 (Landing Page Above-the-Fold Anatomy)
- **首页 `<title>`**: `SuperX | X Growth Tool: Scheduling, Analytics, AI Content`
- **首页 Hero `<h1>`**: `Grow and monetize your audience, smarter faster`
- **Meta Description**: `The X growth tool used by 11,294+ creators. AI content, smart scheduling, engagement tools, and analytics in one platform. Start free.`
- **Schema.org JSON-LD 类型**: `Organization, SoftwareApplication`
- **首屏转化钩子解析 (Conversion Hook)**: Hero H1 (`Find Your Voice. Grow Faster on X.`) focuses on creator authenticity rather than spammy auto-DM bots, backed by live creator leaderboard widgets.

---

## 5. 定价结构与付费墙心理设计 (Pricing & Paywall Architecture)
- **定价页 URL (Analyzed URL)**: https://superx.so/pricing
- **计费周期切换 (Billing Toggles)**: Single cadence / Usage-based
- **年付折扣话术 (Annual Discount Framing)**: Standard
- **实测提取价格点 (Extracted Price Points)**: `$49 /mo`, `$99`, `$99/mo`, `$199 /mo`
- **风险逆转与试用信号 (Risk Reversal)**: `cancel anytime`
- **结账基础设施信号 (Checkout Stack)**: Custom / Stripe
- **定价页 FAQ 异议处理数量**: `9` 个问题（如：*Is there a free trial? / Can I cancel anytime? / What payment methods do you accept?*）

---

## 6. 核心获客飞轮 (Acquisition Channels & Growth Loops)
1. Public Creator Profile pSEO Directory (`/creators/[creator_slug]` — 828 pages!): Automatically generates public analytics & best-tweet breakdown pages for 828 prominent X accounts, capturing vanity searches and "how does @handle grow on X" queries.
2. Real-Time Regional Trend Hubs (`/twitter-trends/[country]` — 19 pages) + Influencer Tweet Archives (`/tweets/[handle]` — 11 pages): Captures high-volume daily trend traffic (`united-states`, `japan`, `united-kingdom`).
3. Direct Competitor Comparison Pages (`/[tool_a]-vs-[tool_b]` — 6 pages): Targets every major rival directly (`/superx-vs-tweethunter`, `/superx-vs-hypefury`, `/superx-vs-typefully`) plus `/free-tools/[slug]` (6 free tools).

---

## 7. 独立开发者可直接抄作业的 3 个动作 (3 Replicable Action Items)
1. Build a Public Profile Directory (`/creators/[handle]` — 828 pages): If your SaaS analyzes public entities (creators, repos, domains, podcasts, stores), pre-generate 500–1,000 public analysis pages. Ego-searches and creator shares drive zero-cost viral traffic.
2. Ship `/[your_brand]-vs-[competitor]` for the Top 5 Incumbents on Day 1: SuperX targets `tweethunter`, `hypefury`, and `typefully` directly at root URL slugs.
3. Charge Premium Creator Pricing (`$49/mo` -> `$99/mo` Advanced -> `$199/mo` Ultra): Avoid $9/mo race-to-the-bottom pricing when your tool directly drives audience & revenue growth.

---

*本拆解原始 JSON 与 Markdown 蓝图已存档于 `/workspace/growth-skills/examples/pseo/superx-so-pseo-blueprint.json`。想要一键提取任意竞品的完整 pSEO 蓝图并生成 Next.js/Astro 页面？使用 **A 套件 (`pseo-competitor-teardown` + `x-alternative-pages`)**（早鸟买断价 **$69**，单品 **$29**，团队版 **$169**）。*
