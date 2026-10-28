# Pirsch Analytics (`pirsch.io`) — 万刀站 SEO、落地页与定价深度拆解

> **数据合规声明**: 本报告收入数据来自创始人公开一手披露（附出处链接与日期），SEO 与定价结构数据由 `pseo-competitor-teardown` 与 `pricing-paywall-retention` 引擎于 `2026-10-27` 针对线上真实 DOM、`robots.txt`、`sitemap.xml` 与 `/llms.txt` 实测抓取生成，零付费 API、零估算数据。

---

## 1. 收入披露与核验出处 (Verified Revenue Disclosure)
- **公开披露月收入 (Disclosed Revenue)**: **$14,300 MRR (~$130,000/yr net volume)**
- **创始人与团队 (Founders & Team)**: Marvin Blum & Daniel (2 German technical co-founders)
- **公开披露日期 (Disclosure Date)**: `2025-12-20`
- **一手核验出处 URL (Primary Source)**: https://pirsch.io/blog/our-recap-of-2025/
- **补充核验参考 (Secondary Source)**: https://www.indiehackers.com/post/2024-recap-being-in-the-weird-state-of-a-mid-sized-saas-YCFfLxRmJWUEPz7hv9cZ (Co-founder Marvin Blum transparently publishes annual recaps showing growth from $6,000 MRR to $11,000 MRR in 2024 and $14,300 MRR (627 subscribers) in 2025.)

---

## 2. 产品定位与切入巨头痛点 (Product Positioning & Wedge)
- **所属赛道 (Category)**: Privacy-Friendly Cookie-Free Web Analytics (Go-based)
- **核心价值主张 (Core Value Proposition)**: See beyond clicks with the best privacy-friendly, cookie-free Google Analytics alternative — built in Germany for speed and developer extensibility.
- **切入巨头痛点 (Incumbent Wedge)**: Competes with GA4, Plausible, and Fathom by offering an ultra-fast Go backend, built-in server-side tracking SDKs, URL shortener, and lower entry pricing ($6/mo) with full white-label agency support.

---

## 3. SEO 架构与程序化 SEO 页面族 (SEO Architecture & pSEO Template Families)
- **`robots.txt` 状态**: `Found (HTTP 200)`
- **`/llms.txt` AI 搜索索引状态**: `Not deployed`
- **多语言路由前缀 (i18n Subfolders)**: `/de/` (114 pages), `/fr/` (113 pages), `/ja/` (113 pages), `/it/` (113 pages), `/es/` (113 pages), `/pt/` (113 pages), `/nl/` (113 pages)
- **实测发现页面总数 (Discovered URLs)**: **938** 个 URL（其中程序化/内容模板页占比 **84.1%**）

### 核心程序化 URL 模板族 (Top pSEO Route Families)
| URL 路由模式 (Route Pattern) | 页面族类型 (Archetype) | 实测页面数 (Count) | 词根变量槽 (Variable Slots) | 真实抽样 URL |
| :--- | :--- | ---: | :--- | :--- |
| `/glossary/[glossary_slug]` | `SEO Glossary / Concept Wiki (/glossary/[term])` | **560** (59.7%) | `glossary_slug` | `https://pirsch.io/pt/glossary/404-not-found` |
| `/atlas/[atla_slug]` | `Programmatic Directory / Hub (/atlas/...)` | **144** (15.4%) | `atla_slug` | `https://pirsch.io/de/atlas/enterprise-analytics` |
| `/[root-landing-slug]` | `Root-Level Long-Tail SEO Landing Pages` | **39** (4.2%) | `root_landing_slug` | `https://pirsch.io/es/laravel-filament-analytics` |
| `/blog/[blog_slug]` | `Content / Editorial Blog Cluster` | **18** (1.9%) | `blog_slug` | `https://pirsch.io/blog/introducing-pirsch-analytics-2.0/` |
| `/discourse/[discourse_slug]` | `Programmatic Directory / Hub (/discourse/...)` | **8** (0.9%) | `discourse_slug` | `https://pirsch.io/es/discourse/login` |
| `/[locale]` | `Localized Homepage` | **7** (0.7%) | `locale` | `https://pirsch.io/ja` |

### 页面级 Title / H1 / Schema.org 真实抽样 (Live HTML Samples)
- **`/`** (https://pirsch.io/)
  - **`<title>`**: `Pirsch – The Best, Privacy-Friendly Google Analytics Alternative`
  - **`<h1>`**: `See Beyond Clicks With the Best Google Analytics Alternative`
  - **Meta Description**: `Pirsch is a powerful, privacy-friendly, open-source alternative to Google Analytics — lightweight, cookie-free, and easily integrated into any website or app.`
  - **Schema.org JSON-LD**: `None`
- **`/glossary/[glossary_slug]`** (https://pirsch.io/pt/glossary/404-not-found)
  - **`<title>`**: `404 Não Encontrado – Pirsch Analytics`
  - **`<h1>`**: `O que é um Erro 404 Não Encontrado?`
  - **Meta Description**: `Um código de status que indica que o servidor não pode encontrar o recurso solicitado.`
  - **Schema.org JSON-LD**: `None`
- **`/glossary/[glossary_slug]`** (https://pirsch.io/fr/glossary/channel)
  - **`<title>`**: `Attribution de Canal de Trafic – Pirsch Analytics`
  - **`<h1>`**: `Attribution de Canal de Trafic`
  - **Meta Description**: `L&#39;Attribution de Canal de Trafic est une méthode permettant d&#39;identifier et de créditer les canaux marketing spécifiques (tels que la recherche organiqu`
  - **Schema.org JSON-LD**: `None`
- **`/atlas/[atla_slug]`** (https://pirsch.io/de/atlas/enterprise-analytics)
  - **`<title>`**: `Enterprise Analytics – Pirsch Analytics`
  - **`<h1>`**: `Was ist Enterprise Analytics?`
  - **Meta Description**: `Die Nutzung von Analytik innerhalb einer Organisation zur Unterstützung der Entscheidungsfindung, zur Steigerung der Effizienz und zur Förderung des Geschäftswa`
  - **Schema.org JSON-LD**: `None`

---

## 4. 落地页首屏文案拆解 (Landing Page Above-the-Fold Anatomy)
- **首页 `<title>`**: `Pirsch – The Best, Privacy-Friendly Google Analytics Alternative`
- **首页 Hero `<h1>`**: `See Beyond Clicks With the Best Google Analytics Alternative`
- **Meta Description**: `Pirsch is a powerful, privacy-friendly, open-source alternative to Google Analytics — lightweight, cookie-free, and easily integrated into any website or app.`
- **Schema.org JSON-LD 类型**: `None`
- **首屏转化钩子解析 (Conversion Hook)**: Hero H1 (`See Beyond Clicks With the Best Google Analytics Alternative`) pairs direct category keyword targeting with a live interactive dashboard and dark/color-blind mode previews.

---

## 5. 定价结构与付费墙心理设计 (Pricing & Paywall Architecture)
- **定价页 URL (Analyzed URL)**: https://pirsch.io/#pricing
- **计费周期切换 (Billing Toggles)**: Single cadence / Usage-based
- **年付折扣话术 (Annual Discount Framing)**: Standard
- **实测提取价格点 (Extracted Price Points)**: Custom
- **风险逆转与试用信号 (Risk Reversal)**: `no credit card required`, `30-day Free Trial`
- **结账基础设施信号 (Checkout Stack)**: Custom / Stripe
- **定价页 FAQ 异议处理数量**: `0` 个问题

---

## 6. 核心获客飞轮 (Acquisition Channels & Growth Loops)
1. 560-Page Analytics & Privacy Glossary (`/glossary/[glossary_slug]` — 560 pages!): Captures long-tail definitions across web metrics, GDPR compliance, and attribution modeling.
2. 144-Page Global Privacy & Traffic Atlas (`/atlas/[atlas_slug]` — 144 pages!): Programmatic country/region data privacy and internet metric reference pages.
3. 39 Root Landing & Comparison Pages (`/[root-landing-slug]` — 39 pages): Targets direct competitor switching and server-side integration use cases (938 total URLs, 84.1% pSEO).

---

## 7. 独立开发者可直接抄作业的 3 个动作 (3 Replicable Action Items)
1. Pair a 560-Page `/glossary/[term]` Engine with a 144-Page `/atlas/[region]` Data Hub: Even in a crowded market like privacy analytics, Pirsch built 704 programmatic reference pages to capture top-of-funnel developer and marketer searches.
2. Publish Honest Annual Founder Recaps (`/blog/our-recap-of-2025/`): Radical transparency about MRR ($14,300), subscriber count (627), and net volume ($130k) earns recurring Hacker News and Indie Hackers backlinks.
3. Differentiate via Backend SDKs & White-Label APIs: When UI features commoditize, offering first-class server-side SDKs (Go, PHP, Python, Node) and agency white-labeling locks in low-churn B2B customers.

---

*本拆解原始 JSON 与 Markdown 蓝图已存档于 `/workspace/growth-skills/examples/pseo/pirsch-io-pseo-blueprint.json`。想要一键提取任意竞品的完整 pSEO 蓝图并生成 Next.js/Astro 页面？使用 **A 套件 (`pseo-competitor-teardown` + `x-alternative-pages`)**（早鸟买断价 **$69**，单品 **$29**，团队版 **$169**）。*
