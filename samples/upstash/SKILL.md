---
name: taste-upstash
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of upstash.com (Upstash). Use when building or restyling UI pages, landing pages, dashboards, or components to match Upstash's exact design language.
---

# Upstash (upstash.com) Design System & Aesthetic Skill

> **Source URL**: `https://upstash.com`
> **Extracted At**: `2026-10-26T15:25:58.344Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `4240ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Oversized Emerald Typography & Clean Serverless Daylight**
- **Semantic Vibe Tags**: `light`, `serverless`, `redis`, `kafka`, `emerald`, `green`, `oversized-type`, `upstash`
- **Core Signature**: Soft #F5F5F5 daylight canvas with #FFFFFF cards, deep forest-emerald #022C22 monumental 128px Inter Tight headlines (-0.025em), JetBrains Mono snippets, and #00BC7D emerald accents.
- **Atmosphere & Contrast Strategy**: Built on a light-mode foundation (`#F5F5F5` canvas -> `#FFFFFF` elevated surfaces) anchored by `rgba(0, 0, 0, 0.05)` structural borders, `Inter Tight` display typography, and `#00BC7D` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#F5F5F5` | `computed root canvas` | `bg-[#F5F5F5]` | Primary Upstash page canvas |
| **surfaceElevated** | `#FFFFFF` | `computed card surface` | `bg-white` | Primary elevated card & bento surface |
| **surfaceSecondary** | `rgba(0, 115, 89, 0.08)` | `computed secondary surface` | `bg-[rgba(0,115,89,0.08)]` | Secondary interactive container / hover fill |
| **borderPrimary** | `rgba(0, 0, 0, 0.05)` | `computed border hairline` | `border-black/[0.05]` | Primary structural divider (1px rgba(0,0,0,0.05)) |
| **borderSecondary** | `rgba(255, 255, 255, 0.1)` | `computed secondary border` | `border-white/[0.1]` | Secondary nested module or pill border |
| **textPrimary** | `#022C22` | `computed heading color` | `text-[#022C22]` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#71717B` | `computed body color` | `text-[#71717B]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#00BC7D` | `computed brand accent` | `bg-[#00BC7D]` | Primary interactive CTA & brand highlight (10px) |
| **accentSecondary** | `#00BC7D` | `computed secondary accent` | `text-[#00BC7D]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(to right, lab(44.4871 -41.0396 11.0361), lab(66.9756 -58.27 19.5419), rgb(245, 158, 11))`
  - `linear-gradient(to right, rgb(52, 211, 153), rgb(252, 211, 77))`
  - `linear-gradient(to right bottom, lab(44.4871 -41.0396 11.0361), lab(66.9756 -58.27 19.5419), rgb(253, 224, 71))`
  - `linear-gradient(rgba(0, 0, 0, 0), lab(96.52 -0.0000298023 0.0000119209))`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--color-bg: lab(96.52% -.0000298023 .0000119209) (#F5F5F5);`
- `--color-bg-mute: #04785714 (rgba(0, 115, 89, 0.08));`
- `--color-primary: lab(66.9756% -58.27 19.5419) (#00BC7D);`
- `--color-primary-text: lab(44.4871% -41.0396 11.0361) (#007A55);`
- `--color-text: #022c22 (#022C22);`
- `--color-text-mute: lab(47.8878% 1.65477 -5.77283) (#71717B);`
- `--color-pre-bg: #09090b (#09090B);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `"Inter Tight", "Inter Tight Fallback"`
- **Section Heading Font (H2/H3)**: `"Inter Tight", "Inter Tight Fallback"`
- **Body / UI Sans Font**: `Inter, "Inter Fallback"`
- **Monospace / Code Font**: `"JetBrains Mono", "JetBrains Mono Fallback"`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `128px` | line-height `128px` (`leading-[1]`) | letter-spacing `-3.2px` (`tracking-[-0.025em]`) | weight `700` (`font-[700]`) | color `rgba(0, 0, 0, 0)` (`text-[rgba(0,0,0,0)]`) | font `Inter Tight`
- **Section H2 (Primary)**: `48px` | line-height `48px` (`leading-[1]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `600` (`font-[600]`) | color `#022C22` (`text-[#022C22]`) | font `Inter Tight`

- **Card / Feature H3**: `24px` | line-height `32px` (`leading-[1.33]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `600` (`font-[600]`) | color `#022C22` (`text-[#022C22]`) | font `Inter Tight`
- **Body Copy (Paragraph)**: `16px` | line-height `24px` (`leading-[1.5]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#71717B` (`text-[#71717B]`) | font `Inter`
- **Monospace / Code Block**: `13.8px` | line-height `20.6px` (`leading-[1.5]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#E4E4E7` (`text-[#E4E4E7]`) | font `JetBrains Mono`

### Extracted CSS Typography Variables
- `--font-sans: "Inter", "Inter Fallback";`
- `--font-display: "Inter Tight", "Inter Tight Fallback";`
- `--font-mono: "JetBrains Mono", "JetBrains Mono Fallback";`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1280px` (7x), `768px` (5x), `1536px` (1x), `1080px` (1x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `64px / 64px` (3x), `32px / 32px` (1x), `112px / 112px` (1x), `96px / 96px` (1x)
- **High-Frequency Grid & Flex Gaps**: `8px` (40x), `16px` (9x), `4px` (7x), `2px` (7x), `12px` (7x), `32px` (5x)


### Surface & Depth Tokens
- **Border Radius Distribution**: `35.2px` (41x), `12px` (18x), `16px` (7x), `16px 16px 0px 0px` (6x), `6px` (5x), `8px` (5x)
- **Glassmorphism / Backdrop Blur**: `blur(8px)`
- **Box-Shadow Formulas**:
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` *(observed 28x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px` *(observed 2x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(16, 185, 129, 0.3) 0px 0px 80px 0px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(16,185,129,0.3)_0px_0px_80px_0px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Set up your agent Copied")**: height `40px`, padding `0px 20px`, radius `10px` (`rounded-xl`), bg `#FFFFFF` (`bg-white`), text `#065F46` (`text-[#065F46]`), border `none`, font `16px` / weight `500`
  - **Button Variant 2 ("QStash")**: height `64px`, padding `0px 32px`, radius `16px 16px 0px 0px` (`rounded-2xl`), bg `#F5F5F5` (`bg-[#F5F5F5]`), text `#71717B` (`text-[#71717B]`), border `2px solid rgba(0, 115, 89, 0.08)`, font `24px` / weight `600`
  - **Button Variant 3 ("Explore Redis")**: height `42px`, padding `8px 20px`, radius `12px` (`rounded-xl`), bg `rgba(0, 115, 89, 0.08)` (`bg-[rgba(0,115,89,0.08)]`), text `#007A55` (`text-[#007A55]`), border `none`, font `16px` / weight `500`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
  - **Button Variant 4 ("Documentation")**: height `42px`, padding `8px 20px`, radius `12px` (`rounded-xl`), bg `rgba(5, 95, 70, 0.2)` (`bg-[rgba(5,95,70,0.2)]`), text `#007A55` (`text-[#007A55]`), border `none`, font `16px` / weight `500`
- **Cards & Containers**:
  - **Card Recipe 1 (786x112px)**: bg `#F5F5F5` (`bg-[#F5F5F5]`), border `none`, radius `35.2px` (`rounded-[35.2px]`), padding `24px 48px`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px`, backdrop-filter `blur(8px)`
  - **Card Recipe 2 (588x268px)**: bg `#FFFFFF` (`bg-white`), border `none`, radius `35.2px` (`rounded-[35.2px]`), padding `32px 32px`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
  - **Card Recipe 3 (1200x230px)**: bg `#FFFFFF` (`bg-white`), border `1px solid rgba(0, 0, 0, 0.05)`, radius `35.2px` (`rounded-[35.2px]`), padding `32px 32px`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.4, 0, 0.2, 1)` (111x), `cubic-bezier(0, 0, 0.2, 1)` (5x), `cubic-bezier(0.4, 0, 1, 1)` (1x), `cubic-bezier(0.33, 0, 0, 1)` (1x)
- **Transition Durations**: `0.15s` (93x), `0.3s` (16x), `0.2s` (5x), `0.5s` (3x)
- **Named Motion Tokens**: `--animate-duration: .6s`, `--transition: .12s`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Upstash’s exact `#F5F5F5` canvas and `#FFFFFF` surface pairing.**
- **NEVER replace `Inter Tight` display typography or ignore its signature scale (`128px / -0.025em (w700)`).**
- **NEVER use thick opaque borders that clash with `rgba(0, 0, 0, 0.05)` (`1px rgba(0,0,0,0.05)`).**
- **NEVER deviate from the signature button geometry (`10px`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `JetBrains Mono`.
