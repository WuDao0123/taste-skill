---
name: taste-inngest
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of inngest.com (Inngest). Use when building or restyling UI pages, landing pages, dashboards, or components to match Inngest's exact design language.
---

# Inngest (inngest.com) Design System & Aesthetic Skill

> **Source URL**: `https://www.inngest.com`
> **Extracted At**: `2026-10-26T15:25:58.965Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `4751ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Warm Obsidian Stone & Swiss Whyte / Coral-Cobalt Contrast**
- **Semantic Vibe Tags**: `dark`, `workflows`, `queues`, `ai-orchestration`, `inngest`, `whyte`, `coral`, `cobalt`
- **Core Signature**: Warm obsidian stone #0C0A09 canvas with rgba(28,28,28,0.85) surfaces, 72px WhyteV1 architectural display headings (0.95 line-height), CircularXXMono code, and #F76246 coral + #013CF6 cobalt accents.
- **Atmosphere & Contrast Strategy**: Built on a dark-mode foundation (`#0C0A09` canvas -> `#1C1C1C` elevated surfaces) anchored by `rgba(255, 255, 255, 0.08)` structural borders, `WhyteV1` display typography, and `#F76246` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#0C0A09` | `computed root canvas` | `bg-[#0C0A09]` | Primary Inngest page canvas |
| **surfaceElevated** | `#1C1C1C` | `computed card surface` | `bg-[#1C1C1C]` | Primary elevated card & bento surface |
| **surfaceSecondary** | `rgba(244, 96, 74, 0.09)` | `computed secondary surface` | `bg-[rgba(244,96,74,0.09)]` | Secondary interactive container / hover fill |
| **borderPrimary** | `rgba(255, 255, 255, 0.08)` | `computed border hairline` | `border-white/[0.08]` | Primary structural divider (1px rgba(255,255,255,0.08)) |
| **borderSecondary** | `rgba(255, 255, 255, 0.08)` | `computed secondary border` | `border-white/[0.08]` | Secondary nested module or pill border |
| **textPrimary** | `#FFFFFF` | `computed heading color` | `text-white` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#A8A29E` | `computed body color` | `text-[#A8A29E]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#F76246` | `computed brand accent` | `bg-[#F76246]` | Primary interactive CTA & brand highlight (6px) |
| **accentSecondary** | `#F76246` | `computed secondary accent` | `text-[#F76246]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(rgb(246, 92, 79), rgb(246, 92, 79)), linear-gradient(rgb(232, 234, 237), rgb(232, 234, 237))`
  - `linear-gradient(297deg, rgba(33, 33, 33, 0) -2.25%, rgb(2, 2, 2) 46.83%)`
  - `linear-gradient(135deg, rgba(124, 124, 124, 0.35) 0%, rgba(124, 124, 124, 0.55) 32%, rgba(124, 124, 124, 0.02) 72%, rgba(124, 124, 124, 0.5) 100%)`
  - `linear-gradient(295deg, rgba(2, 2, 2, 0) 1.46%, rgb(33, 33, 33) 50.43%)`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--v1-wipe-base: #1a1a1a (#1A1A1A);`
- `--shiki-color-text: rgb(36 36 36) (#242424);`
- `--shiki-token-constant: rgb(213 107 19) (#D56B13);`
- `--shiki-token-string: #21afff (#21AFFF);`
- `--shiki-token-comment: rgb(155 155 155) (#9B9B9B);`
- `--shiki-token-keyword: #1a968e (#1A968E);`
- `--shiki-token-parameter: #d97706 (#D97706);`
- `--shiki-token-function: rgb(36 36 36) (#242424);`
- `--shiki-token-string-expression: #21afff (#21AFFF);`
- `--shiki-token-punctuation: rgb(36 36 36) (#242424);`
- `--shiki-token-link: #4078f2 (#4078F2);`
- `--ac-lift: #0f172a59 (rgba(14, 23, 43, 0.35));`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `WhyteV1, Whyte, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Section Heading Font (H2/H3)**: `WhyteV1, Whyte, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Body / UI Sans Font**: `CircularXX, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Monospace / Code Font**: `CircularXXMono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `72px` | line-height `68.4px` (`leading-[0.95]`) | letter-spacing `-1.44px` (`tracking-[-0.02em]`) | weight `400` (`font-[400]`) | color `#FFFFFF` (`text-white`) | font `WhyteV1`
- **Section H2 (Primary)**: `64px` | line-height `70.4px` (`leading-[1.1]`) | letter-spacing `-2.24px` (`tracking-[-0.035em]`) | weight `400` (`font-[400]`) | color `#FFFFFF` (`text-white`) | font `WhyteV1`
- **Section H2 (Secondary)**: `40px` | line-height `50px` (`leading-[1.25]`) | letter-spacing `-0.4px` (`tracking-[-0.01em]`) | weight `400` (`font-[400]`) | color `#FFFFFF` (`text-white`) | font `Whyte Inktrap`
- **Card / Feature H3**: `32px` | line-height `32px` (`leading-[1]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#FFFFFF` (`text-white`) | font `Whyte`
- **Body Copy (Paragraph)**: `20px` | line-height `30px` (`leading-[1.5]`) | letter-spacing `-0.2px` (`tracking-[-0.01em]`) | weight `400` (`font-[400]`) | color `#B3B3B3` (`text-[#B3B3B3]`) | font `CircularXX`
- **Monospace / Code Block**: `13px` | line-height `20px` (`leading-[1.54]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#9B9B9B` (`text-[#9B9B9B]`) | font `CircularXXMono`



---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1440px` (11x), `1280px` (1x), `640px` (1x), `900px` (1x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `160px / 160px` (7x), `88px / 80px` (1x), `64px / 10px` (1x), `48px / 48px` (1x)
- **High-Frequency Grid & Flex Gaps**: `10px` (16x), `32px` (13x), `12px` (13x), `4px` (11x), `16px` (11x), `24px` (8x)
- **Extracted Spacing & Radius Variables**: `--width: calc(2.625rem + .5px + 50% - min(50%,calc(33rem + 2rem)))`

### Surface & Depth Tokens
- **Border Radius Distribution**: `6px` (19x), `10px` (18x), `8px` (6x), `9.026px` (3x)
- **Glassmorphism / Backdrop Blur**: `blur(12px)`
- **Box-Shadow Formulas**:
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(28, 28, 28) 0px 0px 0px 2px` *(observed 14x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgb(28,28,28)_0px_0px_0px_2px]`)*
  - `rgb(255, 255, 255) 0px 0px 0px 2px inset` *(observed 7x in DOM, Tailwind: `shadow-[rgb(255,255,255)_0px_0px_0px_2px_inset]`)*
  - `rgb(102, 189, 139) 2px 0px 0px 0px inset` *(observed 1x in DOM, Tailwind: `shadow-[rgb(102,189,139)_2px_0px_0px_0px_inset]`)*
  - `rgba(102, 189, 139, 0.4) 0px 0px 0px 1px inset` *(observed 1x in DOM, Tailwind: `shadow-[rgba(102,189,139,0.4)_0px_0px_0px_1px_inset]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("START FREE")**: height `42px`, padding `0px 20px`, radius `6px` (`rounded-md`), bg `#FFFFFF` (`bg-white`), text `#000000` (`text-black`), border `none`, font `12px` / weight `600`, shadow `rgb(255, 255, 255) 0px 0px 0px 2px inset`
  - **Button Variant 2 ("READ THE DOCS")**: height `42px`, padding `0px 20px`, radius `6px` (`rounded-md`), bg `transparent` (`bg-[transparent]`), text `#FFFFFF` (`text-white`), border `none`, font `12px` / weight `600`, shadow `rgb(255, 255, 255) 0px 0px 0px 2px inset`
  - **Button Variant 3 ("START FREE")**: height `32px`, padding `0px 20px`, radius `6px` (`rounded-md`), bg `#FFFFFF` (`bg-white`), text `#000000` (`text-black`), border `none`, font `12px` / weight `600`, shadow `rgb(255, 255, 255) 0px 0px 0px 2px inset`
  - **Button Variant 4 ("START FREE")**: height `42px`, padding `0px 20px`, radius `6px` (`rounded-md`), bg `#F65C4F` (`bg-[#F65C4F]`), text `#FFFFFF` (`text-white`), border `none`, font `12px` / weight `600`
- **Cards & Containers**:
  - **Card Recipe 1 (443x220px)**: bg `transparent` (`bg-[transparent]`), border `none`, radius `6px` (`rounded-md`), padding `20px 20px`
  - **Card Recipe 2 (448x146px)**: bg `transparent` (`bg-[transparent]`), border `none`, radius `8px` (`rounded-lg`), padding `20px 16px`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.2, 0.8, 0.2, 1)` (54x), `cubic-bezier(0.7, 0, 0.15, 1)` (37x), `cubic-bezier(0.22, 0.61, 0.27, 1)` (30x), `cubic-bezier(0.4, 0, 0.2, 1)` (29x)
- **Transition Durations**: `0.3s` (48x), `0.36s` (37x), `0.5s` (20x), `0.4s` (19x)


---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Inngest’s exact `#0C0A09` canvas and `#1C1C1C` surface pairing.**
- **NEVER replace `WhyteV1` display typography or ignore its signature scale (`72px / 0.95 (w400)`).**
- **NEVER use thick opaque borders that clash with `rgba(255, 255, 255, 0.08)` (`1px rgba(255,255,255,0.08)`).**
- **NEVER deviate from the signature button geometry (`6px`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `CircularXXMono`.
