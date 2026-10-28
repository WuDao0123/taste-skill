# StandOut CV (`standout-cv.com`) — 万刀站 SEO、落地页与定价深度拆解

> **数据合规声明**: 本报告收入数据来自创始人公开一手披露（附出处链接与日期），SEO 与定价结构数据由 `pseo-competitor-teardown` 与 `pricing-paywall-retention` 引擎于 `2026-10-27` 针对线上真实 DOM、`robots.txt`、`sitemap.xml` 与 `/llms.txt` 实测抓取生成，零付费 API、零估算数据。

---

## 1. 收入披露与核验出处 (Verified Revenue Disclosure)
- **公开披露月收入 (Disclosed Revenue)**: **£40,000 MRR (~$52,000/mo)**
- **创始人与团队 (Founders & Team)**: Andrew Fennell (Solo founder + small content/dev team)
- **公开披露日期 (Disclosure Date)**: `2025-09-25`
- **一手核验出处 URL (Primary Source)**: https://www.indiehackers.com/post/how-i-grew-my-saas-business-to-40k-mrr-with-seo-3287452853
- **补充核验参考 (Secondary Source)**: https://standout-cv.com/llms.txt (Founder Andrew Fennell disclosed growing from a pure content site to £40,000 MRR by launching an in-house SaaS CV builder fed by organic SEO.)

---

## 2. 产品定位与切入巨头痛点 (Product Positioning & Wedge)
- **所属赛道 (Category)**: Career Tech / Resume & CV Builder SaaS
- **核心价值主张 (Core Value Proposition)**: Write a job-winning CV in minutes using recruiter-approved templates and role-specific examples.
- **切入巨头痛点 (Incumbent Wedge)**: Captures job seekers at the exact moment they search for role-specific CV examples (e.g., "Finance Manager CV example") and converts them directly into an interactive CV builder.

---

## 3. SEO 架构与程序化 SEO 页面族 (SEO Architecture & pSEO Template Families)
- **`robots.txt` 状态**: `Found (HTTP 200)`
- **`/llms.txt` AI 搜索索引状态**: `Deployed (270,815 chars)`
- **多语言路由前缀 (i18n Subfolders)**: English primary (no subfolder locale prefix)
- **实测发现页面总数 (Discovered URLs)**: **1,103** 个 URL（其中程序化/内容模板页占比 **98.7%**）

### 核心程序化 URL 模板族 (Top pSEO Route Families)
| URL 路由模式 (Route Pattern) | 页面族类型 (Archetype) | 实测页面数 (Count) | 词根变量槽 (Variable Slots) | 真实抽样 URL |
| :--- | :--- | ---: | :--- | :--- |
| `/cv-examples/[cv_example_slug]/[sub_item_slug]` | `Programmatic Directory / Hub (/cv-examples/...)` | **809** (73.3%) | `cv_example_slug, sub_item_slug` | `https://standout-cv.com/cv-examples/teaching-and-education/tutor-cv` |
| `/usa/[usa_slug]/[sub_item_slug]` | `Programmatic Directory / Hub (/usa/...)` | **43** (3.9%) | `usa_slug, sub_item_slug` | `https://standout-cv.com/usa/resume-examples/stem-resume-example` |
| `/cv-advice/[cv_advice_slug]` | `Programmatic Directory / Hub (/cv-advice/...)` | **41** (3.7%) | `cv_advice_slug` | `https://standout-cv.com/cv-advice/cv-writing-tips` |
| `/cv-examples/[cv_example_slug]` | `Programmatic Directory / Hub (/cv-examples/...)` | **34** (3.1%) | `cv_example_slug` | `https://standout-cv.com/cv-examples/accounting` |
| `/stats/[stat_slug]` | `Programmatic Directory / Hub (/stats/...)` | **31** (2.8%) | `stat_slug` | `https://standout-cv.com/stats/average-uk-salary` |
| `/cover-letter-examples/[cover_letter_example_slug]` | `Programmatic Directory / Hub (/cover-letter-examples/...)` | **26** (2.4%) | `cover_letter_example_slug` | `https://standout-cv.com/cover-letter-examples/ski-season` |

### 页面级 Title / H1 / Schema.org 真实抽样 (Live HTML Samples)
- **`/`** (https://www.standout-cv.com/)
  - **`<title>`**: `Online CV builder + CV examples, CV templates &amp; advice`
  - **`<h1>`**: `Create an interview-winning CV with our online CV builder`
  - **Meta Description**: `Create a winning CV in minutes with our simple online CV builder or use our CV examples, CV templates and CV writing advice to land the job you want.`
  - **Schema.org JSON-LD**: `BreadcrumbList, FAQPage, Organization, WebPage, WebSite`
- **`/cv-examples/[cv_example_slug]/[sub_item_slug]`** (https://standout-cv.com/cv-examples/teaching-and-education/tutor-cv)
  - **`<title>`**: `3 Tutor CV examples + easy guide [Build your business fast]`
  - **`<h1>`**: `Tutor CV examples`
  - **Meta Description**: `Looking for a tutoring role? These Tutor CV examples with expert advice will help you showcase subject knowledge, lesson planning, and student mentoring skills.`
  - **Schema.org JSON-LD**: `Article, BreadcrumbList, Organization, Person, WebPage, WebSite`
- **`/cv-examples/[cv_example_slug]/[sub_item_slug]`** (https://standout-cv.com/cv-examples/marketing/seo-executive-cv)
  - **`<title>`**: `2 SEO Executive CV examples + guide [Get hired]`
  - **`<h1>`**: `SEO Executive CV examples`
  - **Meta Description**: `Build an SEO career with SEO executive CV examples and writing guide, showcasing keyword research, analytics, and content marketing expertise.`
  - **Schema.org JSON-LD**: `Article, BreadcrumbList, Organization, Person, WebPage, WebSite`
- **`/usa/[usa_slug]/[sub_item_slug]`** (https://standout-cv.com/usa/resume-examples/stem-resume-example)
  - **`<title>`**: `STEM resume example + guide [Get a great job]`
  - **`<h1>`**: `STEM resume example`
  - **Meta Description**: `Kickstart a STEM career with a STEM resume example, featuring expert resume writing guidance on technical skills and research experience.`
  - **Schema.org JSON-LD**: `Article, BreadcrumbList, Organization, Person, WebPage, WebSite`

---

## 4. 落地页首屏文案拆解 (Landing Page Above-the-Fold Anatomy)
- **首页 `<title>`**: `Online CV builder + CV examples, CV templates &amp; advice`
- **首页 Hero `<h1>`**: `Create an interview-winning CV with our online CV builder`
- **Meta Description**: `Create a winning CV in minutes with our simple online CV builder or use our CV examples, CV templates and CV writing advice to land the job you want.`
- **Schema.org JSON-LD 类型**: `BreadcrumbList, FAQPage, Organization, WebPage, WebSite`
- **首屏转化钩子解析 (Conversion Hook)**: Every programmatic `/cv-examples/[category]/[role-cv]` page opens with the exact target job title in the H1 (`Finance manager CV example + writing guide [Get noticed]`), followed immediately by an "Edit this CV in our builder" CTA.

---

## 5. 定价结构与付费墙心理设计 (Pricing & Paywall Architecture)
- **商业化模式**: 免费使用 CV 模板与在线编辑器引流，导出无水印高清 PDF CV 时触发订阅付费墙（Freemium Creation -> Export Paywall）。

---

## 6. 核心获客飞轮 (Acquisition Channels & Growth Loops)
1. Massive Role-Specific pSEO Matrix (809 `/cv-examples/[category]/[role]` pages + 43 US `/usa/resume-examples/[role]` pages): Covers nearly every job title across UK and US search intent.
2. PR Backlink Magnet Pages (`/stats/[slug]`): 31 dedicated statistics hubs (e.g. `/stats/cv-statistics-uk`, `/stats/job-search-statistics-uk`) engineered specifically so journalists and HR bloggers cite them with natural dofollow backlinks.
3. Largest `/llms.txt` Index in Our Benchmark (270.8 KB): Exposes a comprehensive 270,815-character `/llms.txt` index cataloging every career guide and CV template for AI search engines.

---

## 7. 独立开发者可直接抄作业的 3 个动作 (3 Replicable Action Items)
1. Pair `/examples/[role]` Pages with a "/stats/[topic]" Link-Bait Cluster: Use `/stats/[topic]` pages to earn high-DR journalist links for free, then pass internal link equity to your commercial `/examples/[role]` pages.
2. Localize URL Prefixes for UK vs US Terminology (`/cv-examples/...` vs `/usa/resume-examples/...`): Same SaaS engine underneath, doubled addressable search volume by matching local terminology.
3. Embed "Use This Template" Above the Fold on Every Content Page: Turn passive readers into active SaaS builders within 5 seconds of landing.

---

*本拆解原始 JSON 与 Markdown 蓝图已存档于 `/workspace/growth-skills/examples/pseo/standout-cv-com-pseo-blueprint.json`。想要一键提取任意竞品的完整 pSEO 蓝图并生成 Next.js/Astro 页面？使用 **A 套件 (`pseo-competitor-teardown` + `x-alternative-pages`)**（早鸟买断价 **$69**，单品 **$29**，团队版 **$169**）。*
