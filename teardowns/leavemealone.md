# Leave Me Alone (`leavemealone.com`) — 万刀站 SEO、落地页与定价深度拆解

> **数据合规声明**: 本报告收入数据来自创始人公开一手披露（附出处链接与日期），SEO 与定价结构数据由 `pseo-competitor-teardown` 与 `pricing-paywall-retention` 引擎于 `2026-10-27` 针对线上真实 DOM、`robots.txt`、`sitemap.xml` 与 `/llms.txt` 实测抓取生成，零付费 API、零估算数据。

---

## 1. 收入披露与核验出处 (Verified Revenue Disclosure)
- **公开披露月收入 (Disclosed Revenue)**: **$10,000/mo (Open Startup verified)**
- **创始人与团队 (Founders & Team)**: Danielle Johnson & James Ivings (2 co-founders)
- **公开披露日期 (Disclosure Date)**: `2023-08-15`
- **一手核验出处 URL (Primary Source)**: https://leavemealone.com/blog/from-indie-side-project-to-profitable-business/
- **补充核验参考 (Secondary Source)**: https://leavemealone.com/blog/how-we-share-company-stats-and-metrics-publicly/ (Two-person nomadic founders Danielle Johnson & James Ivings documented scaling Leave Me Alone from $500/mo to $10,000/mo with an Open Startup metrics dashboard.)

---

## 2. 产品定位与切入巨头痛点 (Product Positioning & Wedge)
- **所属赛道 (Category)**: Consumer & Prosumer Privacy SaaS / Email Unsubscribe & Inbox Shield
- **核心价值主张 (Core Value Proposition)**: Easily unsubscribe from unwanted emails and clean your inbox without sacrificing your privacy.
- **切入巨头痛点 (Incumbent Wedge)**: Competes with 'free' email cleaners (Unroll.me, which famously got caught selling user inbox receipt data to Uber) by charging transparent privacy-first prices and never storing or selling email content.

---

## 3. SEO 架构与程序化 SEO 页面族 (SEO Architecture & pSEO Template Families)
- **`robots.txt` 状态**: `Found (HTTP 200)`
- **`/llms.txt` AI 搜索索引状态**: `Not deployed`
- **多语言路由前缀 (i18n Subfolders)**: `/fr/` (7187 pages), `/it/` (57 pages), `/de/` (57 pages), `/es/` (57 pages)
- **实测发现页面总数 (Discovered URLs)**: **14,802** 个 URL（其中程序化/内容模板页占比 **98.8%**）

### 核心程序化 URL 模板族 (Top pSEO Route Families)
| URL 路由模式 (Route Pattern) | 页面族类型 (Archetype) | 实测页面数 (Count) | 词根变量槽 (Variable Slots) | 真实抽样 URL |
| :--- | :--- | ---: | :--- | :--- |
| `/how-to-unsubscribe-from/[how_to_unsubscribe_from_slug]` | `Programmatic Directory / Hub (/how-to-unsubscribe-from/...)` | **14,264** (96.4%) | `how_to_unsubscribe_from_slug` | `https://leavemealone.com/how-to-unsubscribe-from/amazon/` |
| `/blog/[blog_slug]` | `Content / Editorial Blog Cluster` | **153** (1%) | `blog_slug` | `https://leavemealone.com/blog/why-that-scam-email-knows-so-much-about-you/` |
| `/[root-landing-slug]` | `Root-Level Long-Tail SEO Landing Pages` | **74** (0.5%) | `root_landing_slug` | `https://leavemealone.com/do-not-disturb/` |
| `/blog/how-to-[topic]` | `Content / Editorial Blog Cluster` | **38** (0.3%) | `topic_slug` | `https://leavemealone.com/blog/how-to-send-an-anonymous-email/` |
| `/blog/tag/[sub_item_slug]` | `Content / Editorial Blog Cluster` | **34** (0.2%) | `sub_item_slug` | `https://leavemealone.com/blog/tag/addy` |
| `/favicons/[favicon_slug]` | `Programmatic Directory / Hub (/favicons/...)` | **14** (0.1%) | `favicon_slug` | `https://leavemealone.com/favicons/apple-icon-57x57.png` |

### 页面级 Title / H1 / Schema.org 真实抽样 (Live HTML Samples)
- **`/`** (https://leavemealone.com/)
  - **`<title>`**: `Easily Unsubscribe from Unwanted Emails and Clean Your Inbox - Leave Me Alone`
  - **`<h1>`**: `Easily unsubscribe from emails`
  - **Meta Description**: `Discover how to easily unsubscribe from unwanted emails and take control of your inbox. Unsubscribe from subscriptions in one click and stop unwanted messages w`
  - **Schema.org JSON-LD**: `Organization, WebSite, SoftwareApplication`
- **`/how-to-unsubscribe-from/[how_to_unsubscribe_from_slug]`** (https://leavemealone.com/how-to-unsubscribe-from/amazon/)
  - **`<title>`**: `How to Stop Amazon Emails &amp; Unsubscribe from Notifications - Leave Me Alone`
  - **`<h1>`**: `How to Unsubscribe from Amazon Emails`
  - **Meta Description**: `How to stop Amazon emails, turn off order notifications, and unsubscribe from unwanted emails. Clean your inbox and manage Amazon email preferences today!`
  - **Schema.org JSON-LD**: `Organization, WebSite, HowTo, FAQPage`
- **`/how-to-unsubscribe-from/[how_to_unsubscribe_from_slug]`** (https://leavemealone.com/fr/how-to-unsubscribe-from/amazon/)
  - **`<title>`**: `Comment se désabonner des emails d&#39;Amazon : Un guide étape par étape - Leave Me Alone`
  - **`<h1>`**: `Se désabonner facilement des e-mails de Amazon`
  - **Meta Description**: `Découvrez comment vous désabonner des emails d`
  - **Schema.org JSON-LD**: `Organization, WebSite, HowTo, FAQPage`
- **`/blog/[blog_slug]`** (https://leavemealone.com/blog/why-that-scam-email-knows-so-much-about-you/)
  - **`<title>`**: `Why that scam email knows so much about you - Leave Me Alone`
  - **`<h1>`**: `Why that scam email knows so much about you`
  - **Meta Description**: `Why that scam email knows so much about you`
  - **Schema.org JSON-LD**: `Organization, WebSite, Person, WebPage, BlogPosting, BreadcrumbList`

---

## 4. 落地页首屏文案拆解 (Landing Page Above-the-Fold Anatomy)
- **首页 `<title>`**: `Easily Unsubscribe from Unwanted Emails and Clean Your Inbox - Leave Me Alone`
- **首页 Hero `<h1>`**: `Easily unsubscribe from emails`
- **Meta Description**: `Discover how to easily unsubscribe from unwanted emails and take control of your inbox. Unsubscribe from subscriptions in one click and stop unwanted messages with Leave Me Alone. Try it for free!`
- **Schema.org JSON-LD 类型**: `Organization, WebSite, SoftwareApplication`
- **首屏转化钩子解析 (Conversion Hook)**: Hero H1 (`Easily unsubscribe from emails`) focuses on immediate inbox relief backed by strict privacy guarantees and transparent pricing.

---

## 5. 定价结构与付费墙心理设计 (Pricing & Paywall Architecture)
- **定价页 URL (Analyzed URL)**: https://leavemealone.com/pricing/
- **计费周期切换 (Billing Toggles)**: `Pay monthly Pay yearly Choose yearly, save money!`, `Pay monthly`, `Pay yearly`
- **年付折扣话术 (Annual Discount Framing)**: `Welcome! To thank you for your first visit, here's up to 60% off!`, `Seven Day Pass 0% off!`, `0% off!`, `(2 months free)`, `Casual Emailer 40% off!`, `40% off!`, `Inbox Zero Hero 60% off!`, `60% off!`
- **实测提取价格点 (Extracted Price Points)**: `$19`, `$19.00`, `$ 19.00`, `$7.50`, `$4.50/mo`, `$36.00`, `$54.00/year`, `$13.33`
- **风险逆转与试用信号 (Risk Reversal)**: `no credit card required`, `14 day money back guarantee`
- **结账基础设施信号 (Checkout Stack)**: Custom / Stripe
- **定价页 FAQ 异议处理数量**: `11` 个问题（如：*How does the 7 day pass work? / Will I be charged when my 7 day pass ends? / What are Private Emails?*）

---

## 6. 核心获客飞轮 (Acquisition Channels & Growth Loops)
1. 14,264-Page Programmatic Unsubscribe Directory (`/how-to-unsubscribe-from/[sender_slug]` — 14,264 pages out of 14,802 total URLs, 98.8% pSEO!): Automatically generates a step-by-step unsubscribe guide + 1-click automated unsubscribe CTA for over 14,000 newsletter and SaaS senders (Quora, LinkedIn, Pinterest, Uber, etc.).
2. 74 Root Commercial & Feature Landing Pages (`/[root-landing-slug]`) + 191 Blog & How-To Guides (`/blog/[slug]`).
3. Open Startup Transparency & Free Micro-Tools: Publicly sharing revenue, server costs, and environmental impact builds deep trust with privacy-conscious buyers.

---

## 7. 独立开发者可直接抄作业的 3 个动作 (3 Replicable Action Items)
1. Build a 10,000+ Page `/how-to-[action]-from-[entity]` Programmatic Directory: Leave Me Alone’s **14,264 `/how-to-unsubscribe-from/[brand]` pages** are the ultimate textbook example of long-tail entity pSEO — capturing frustrated users searching how to stop emails from specific brands and converting them on the spot.
2. Offer Flexible Pass vs Subscription Pricing (`$7.50` 7-Day Pass vs `$4.50/mo` Yearly vs `$19/mo` Monthly): Since inbox cleaning can be episodic, offering a 7-day pass alongside recurring Inbox Shield plans captures both one-time and recurring buyers.
3. Position Paid Privacy Against 'Free Data-Harvesting Incumbents': Turn the fact that you charge money into your #1 trust badge.

---

*本拆解原始 JSON 与 Markdown 蓝图已存档于 `/workspace/growth-skills/examples/pseo/leavemealone-com-pseo-blueprint.json`。想要一键提取任意竞品的完整 pSEO 蓝图并生成 Next.js/Astro 页面？使用 **A 套件 (`pseo-competitor-teardown` + `x-alternative-pages`)**（早鸟买断价 **$69**，单品 **$29**，团队版 **$169**）。*
