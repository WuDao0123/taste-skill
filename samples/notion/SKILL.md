---
name: taste-notion
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of notion.so (Notion). Use when building or restyling UI pages, landing pages, dashboards, or components to match Notion's exact design language.
---

# Notion (notion.so) Design System & Aesthetic Skill

> **Source URL**: `https://www.notion.so`
> **Extracted At**: `2026-10-26T15:26:04.412Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `5037ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Warm Workspace Canvas & Monumental NotionInter Display**
- **Semantic Vibe Tags**: `light`, `workspace`, `productivity`, `docs`, `wiki`, `ai`, `notion`, `warm-gray`
- **Core Signature**: Crisp #FFFFFF & warm stone #F6F5F4 workspace surfaces with rgba(0,0,0,0.1) hairlines, monumental 96px NotionInter headlines (-0.048em tracking), and #0075DE cobalt + #FFB110 amber accents.
- **Atmosphere & Contrast Strategy**: Built on a light-mode foundation (`#FFFFFF` canvas -> `#F6F5F4` elevated surfaces) anchored by `rgba(0, 0, 0, 0.1)` structural borders, `NotionInter` display typography, and `#0075DE` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#FFFFFF` | `computed root canvas` | `bg-white` | Primary Notion page canvas |
| **surfaceElevated** | `#F6F5F4` | `computed card surface` | `bg-[#F6F5F4]` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#F9F9F8` | `computed secondary surface` | `bg-[#F9F9F8]` | Secondary interactive container / hover fill |
| **borderPrimary** | `rgba(0, 0, 0, 0.1)` | `computed border hairline` | `border-black/[0.1]` | Primary structural divider (1px rgba(0,0,0,0.1)) |
| **borderSecondary** | `rgba(0, 0, 0, 0.1)` | `computed secondary border` | `border-black/[0.1]` | Secondary nested module or pill border |
| **textPrimary** | `#000000` | `computed heading color` | `text-black` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#615D59` | `computed body color` | `text-[#615D59]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#0075DE` | `computed brand accent` | `bg-[#0075DE]` | Primary interactive CTA & brand highlight (8px) |
| **accentSecondary** | `#005BAB` | `computed secondary accent` | `text-[#005BAB]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0.55) 100%)`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--text-color-extra-light: #0003 (rgba(0, 0, 0, 0.2));`
- `--text-color-light: #0006 (rgba(0, 0, 0, 0.4));`
- `--text-color-medium: #0009 (rgba(0, 0, 0, 0.6));`
- `--text-color-dark: #111 (#111111);`
- `--text-color-regular: #040404;`
- `--tatami-color-gray-100: #f9f9f8 (#F9F9F8);`
- `--tatami-color-gray-200: #f6f5f4 (#F6F5F4);`
- `--tatami-color-gray-300: #dfdcd9 (#DFDCD9);`
- `--tatami-color-gray-400: #a39e98 (#A39E98);`
- `--tatami-color-gray-500: #78736f (#78736F);`
- `--tatami-color-gray-600: #615d59 (#615D59);`
- `--tatami-color-gray-700: #494744;`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `NotionInter, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"`
- **Section Heading Font (H2/H3)**: `NotionInter, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"`
- **Body / UI Sans Font**: `NotionInter, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"`
- **Monospace / Code Font**: `monospace`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `96px` | line-height `100px` (`leading-[1.04]`) | letter-spacing `-4.6px` (`tracking-[-0.048em]`) | weight `600` (`font-[600]`) | color `rgba(0, 0, 0, 0.95)` (`text-[rgba(0,0,0,0.95)]`) | font `NotionInter`
- **Section H2 (Primary)**: `54px` | line-height `56px` (`leading-[1.04]`) | letter-spacing `-1.88px` (`tracking-[-0.035em]`) | weight `700` (`font-[700]`) | color `rgba(0, 0, 0, 0.95)` (`text-[rgba(0,0,0,0.95)]`) | font `NotionInter`

- **Card / Feature H3**: `16px` | line-height `24px` (`leading-[1.5]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `700` (`font-[700]`) | color `#000000` (`text-black`) | font `NotionInter`
- **Body Copy (Paragraph)**: `20px` | line-height `28px` (`leading-[1.4]`) | letter-spacing `-0.12px` (`tracking-[-0.006em]`) | weight `400` (`font-[400]`) | color `rgba(0, 0, 0, 0.9)` (`text-[rgba(0,0,0,0.9)]`) | font `NotionInter`
- **Monospace / Code Block**: `13px–14px` | line-height `1.5` (`leading-relaxed`) | font `monospace`

### Extracted CSS Typography Variables
- `--text-before-gap: 0px;`
- `--text-after-gap: 0px;`
- `--tatami-font-family-primary-sans: NotionInter;`
- `--tatami-font-family-primary-serif: "Lyon Text";`
- `--tatami-font-family-primary-serif-japanese: "Lyon Text";`
- `--tatami-font-family-primary-serif-chinese-simplified: "Lyon Text";`
- `--tatami-font-family-primary-serif-chinese-traditional: "Lyon Text";`
- `--tatami-font-family-primary-sans-vietnamese: ui-sans-serif;`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1184px` (2x), `1252px` (2x), `891.925px` (2x), `1380px` (1x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `96px / 96px` (2x), `64px / 64px` (1x)
- **High-Frequency Grid & Flex Gaps**: `8px` (44x), `0px 8px` (23x), `12px` (22x), `16px` (12x), `24px` (4x), `8px normal` (3x)
- **Extracted Spacing & Radius Variables**: `--tatami-border-radius-0: 0`, `--tatami-border-radius-200: .25rem`, `--tatami-border-radius-300: .3125rem`, `--tatami-border-radius-400: .375rem`, `--tatami-border-radius-500: .5rem`, `--tatami-border-width-1: .0625rem`, `--tatami-dimension-spacing-0: 0`, `--tatami-dimension-spacing-4: .25rem`, `--tatami-dimension-spacing-8: .5rem`, `--tatami-dimension-spacing-12: .75rem`

### Surface & Depth Tokens
- **Border Radius Distribution**: `8px` (52x), `4px` (20x), `12px` (17x), `12px 12px 0px 0px` (2x), `12px 0px 0px` (2x)
- **Glassmorphism / Backdrop Blur**: `blur(12px)`
- **Box-Shadow Formulas**:
  - `rgba(0, 0, 0, 0.01) 0px 0.175px 1.041px 0px, rgba(0, 0, 0, 0.02) 0px 0.8px 2.925px 0px, rgba(0, 0, 0, 0.027) 0px 2.025px 7.847px 0px, rgba(0, 0, 0, 0.04) 0px 4px 18px 0px` *(observed 4x in DOM, Tailwind: `shadow-[rgba(0,0,0,0.01)_0px_0.175px_1.041px_0px,rgba(0,0,0,0.02)_0px_0.8px_2.925px_0px,rgba(0,0,0,0.027)_0px_2.025px_7.847px_0px,rgba(0,0,0,0.04)_0px_4px_18px_0px]`)*
  - `rgba(0, 0, 0, 0.1) 0px 1px 0px 0px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(0,0,0,0.1)_0px_1px_0px_0px]`)*
  - `rgba(0, 0, 0, 0.008) 0px 0.667px 3.502px 0px, rgba(0, 0, 0, 0.016) 0px 2.933px 7.252px 0px, rgba(0, 0, 0, 0.02) 0px 7.2px 14.462px 0px, rgba(0, 0, 0, 0.024) 0px 13.867px 28.348px 0px, rgba(0, 0, 0, 0.03) 0px 23.333px 52.123px 0px, rgba(0, 0, 0, 0.04) 0px 36px 89px 0px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(0,0,0,0.008)_0px_0.667px_3.502px_0px,rgba(0,0,0,0.016)_0px_2.933px_7.252px_0px,rgba(0,0,0,0.02)_0px_7.2px_14.462px_0px,rgba(0,0,0,0.024)_0px_13.867px_28.348px_0px,rgba(0,0,0,0.03)_0px_23.333px_52.123px_0px,rgba(0,0,0,0.04)_0px_36px_89px_0px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Get Notion free")**: height `36px`, padding `4px 14px`, radius `8px` (`rounded-lg`), bg `#0075DE` (`bg-[#0075DE]`), text `#FFFFFF` (`text-white`), border `none`, font `16px` / weight `500`
  - **Button Variant 2 ("Get Notion free")**: height `38px`, padding `6px 15px`, radius `8px` (`rounded-lg`), bg `#0075DE` (`bg-[#0075DE]`), text `#FFFFFF` (`text-white`), border `none`, font `16px` / weight `500`
  - **Button Variant 3 ("Request a demo")**: height `38px`, padding `6px 15px`, radius `8px` (`rounded-lg`), bg `#E6F3FE` (`bg-[#E6F3FE]`), text `#005BAB` (`text-[#005BAB]`), border `none`, font `16px` / weight `500`
  - **Button Variant 4 ("Request a demo")**: height `38px`, padding `6px 15px`, radius `8px` (`rounded-lg`), bg `#FFFFFF` (`bg-white`), text `#097FE8` (`text-[#097FE8]`), border `none`, font `16px` / weight `500`
- **Cards & Containers**:
  - **Card Recipe 1 (960x601px)**: bg `transparent` (`bg-[transparent]`), border `1px solid rgba(0, 0, 0, 0.1)`, radius `8px` (`rounded-lg`), padding `0px 0px`, shadow `rgba(0, 0, 0, 0.008) 0px 0.667px 3.502px 0px, rgba(0, 0, 0, 0.016) 0px 2.933px 7.252px 0px, rgba(0, 0, 0, 0.02) 0px 7.2px 14.462px 0px, rgba(0, 0, 0, 0.024) 0px 13.867px 28.348px 0px, rgba(0, 0, 0, 0.03) 0px 23.333px 52.123px 0px, rgba(0, 0, 0, 0.04) 0px 36px 89px 0px`
  - **Card Recipe 2 (554x554px)**: bg `transparent` (`bg-[transparent]`), border `none`, radius `12px 12px 0px 0px` (`rounded-xl`), padding `0px 0px`, shadow `rgba(0, 0, 0, 0.01) 0px 0.175px 1.041px 0px, rgba(0, 0, 0, 0.02) 0px 0.8px 2.925px 0px, rgba(0, 0, 0, 0.027) 0px 2.025px 7.847px 0px, rgba(0, 0, 0, 0.04) 0px 4px 18px 0px`
  - **Card Recipe 3 (401x340px)**: bg `transparent` (`bg-[transparent]`), border `none`, radius `12px 0px 0px` (`rounded-xl`), padding `0px 0px`, shadow `rgba(0, 0, 0, 0.01) 0px 0.175px 1.041px 0px, rgba(0, 0, 0, 0.02) 0px 0.8px 2.925px 0px, rgba(0, 0, 0, 0.027) 0px 2.025px 7.847px 0px, rgba(0, 0, 0, 0.04) 0px 4px 18px 0px`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.42, 0, 1, 1)` (65x), `ease` (7x), `cubic-bezier(0.645, 0.045, 0.355, 1)` (6x), `cubic-bezier(0.86, 0, 0.07, 1)` (2x)
- **Transition Durations**: `0.2s` (72x), `0.15s` (5x), `0.3s` (3x)
- **Named Motion Tokens**: `--tatami-motion-timing-function-ease-in-out-quint: cubic-bezier(.86, 0, .07, 1)`, `--tatami-motion-timing-function-ease-in-out-quart: cubic-bezier(.76, 0, .24, 1)`, `--tatami-motion-timing-function-ease-in-out-quad: cubic-bezier(.45, 0, .55, 1)`, `--tatami-motion-timing-function-ease-in-out-cubic: cubic-bezier(.645, .045, .355, 1)`, `--tatami-motion-timing-function-ease-in-out-linear: cubic-bezier(.5, 0, .5, 1)`, `--tatami-motion-timing-function-ease-in: cubic-bezier(.42, 0, 1, 1)`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Notion’s exact `#FFFFFF` canvas and `#F6F5F4` surface pairing.**
- **NEVER replace `NotionInter` display typography or ignore its signature scale (`96px / -0.048em (w600)`).**
- **NEVER use thick opaque borders that clash with `rgba(0, 0, 0, 0.1)` (`1px rgba(0,0,0,0.1)`).**
- **NEVER deviate from the signature button geometry (`8px`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `SFMono-Regular`.
