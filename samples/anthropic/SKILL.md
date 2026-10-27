---
name: taste-anthropic
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of anthropic.com (Anthropic). Use when building or restyling UI pages, landing pages, dashboards, or components to match Anthropic's exact design language.
---

# Anthropic (anthropic.com) Design System & Aesthetic Skill

> **Source URL**: `https://www.anthropic.com`
> **Extracted At**: `2026-10-26T15:26:07.791Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `4263ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Humanist Warm Parchment & Literary AI Safety Editorial**
- **Semantic Vibe Tags**: `light`, `warm`, `parchment`, `serif`, `editorial`, `ai`, `llm`, `claude`
- **Core Signature**: Warm parchment #FAF9F5 canvas with #F5F4ED cards and #DEDCD1 stone borders, #141413 charcoal ink, bespoke anthropicSerif literary headings, and #D97757 terracotta clay accents.
- **Atmosphere & Contrast Strategy**: Built on a light-mode foundation (`#FAF9F5` canvas -> `#F5F4ED` elevated surfaces) anchored by `#DEDCD1` structural borders, `anthropicSerif` display typography, and `#D97757` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#FAF9F5` | `computed root canvas` | `bg-[#FAF9F5]` | Primary Anthropic page canvas |
| **surfaceElevated** | `#F5F4ED` | `computed card surface` | `bg-[#F5F4ED]` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#FAF9F5` | `computed secondary surface` | `bg-[#FAF9F5]` | Secondary interactive container / hover fill |
| **borderPrimary** | `#DEDCD1` | `computed border hairline` | `border-[#DEDCD1]` | Primary structural divider (1px solid #DEDCD1) |
| **borderSecondary** | `#3D3D3A` | `computed secondary border` | `border-[#3D3D3A]` | Secondary nested module or pill border |
| **textPrimary** | `#141413` | `computed heading color` | `text-[#141413]` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#5E5D59` | `computed body color` | `text-[#5E5D59]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#D97757` | `computed brand accent` | `bg-[#D97757]` | Primary interactive CTA & brand highlight (9999px (Pill) / 8px) |
| **accentSecondary** | `#141413` | `computed secondary accent` | `text-[#141413]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - Subtle surface luminance transitions without saturated multi-stop gradients

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--color-gray-000: #fff (#FFFFFF);`
- `--color-gray-050: #faf9f5 (#FAF9F5);`
- `--color-gray-100: #f5f4ed (#F5F4ED);`
- `--color-gray-150: #f0eee6 (#F0EEE6);`
- `--color-gray-200: #e8e6dc (#E8E6DC);`
- `--color-gray-250: #dedcd1 (#DEDCD1);`
- `--color-gray-300: #d1cfc5 (#D1CFC5);`
- `--color-gray-350: #c2c0b6 (#C2C0B6);`
- `--color-gray-400: #b0aea5 (#B0AEA5);`
- `--color-gray-450: #9c9a92 (#9C9A92);`
- `--color-gray-500: #87867f (#87867F);`
- `--color-gray-550: #73726c (#73726C);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `anthropicSerif, "anthropicSerif Fallback", serif`
- **Section Heading Font (H2/H3)**: `anthropicSans, "anthropicSans Fallback", sans-serif`
- **Body / UI Sans Font**: `anthropicSans, "anthropicSans Fallback", sans-serif`
- **Monospace / Code Font**: `system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `40.8px` | line-height `51px` (`leading-[1.25]`) | letter-spacing `-0.41px` (`tracking-[-0.01em]`) | weight `400` (`font-[400]`) | color `#141413` (`text-[#141413]`) | font `anthropicSerif`
- **Section H2 (Primary)**: `51.9px` | line-height `56.1px` (`leading-[1.08]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `600` (`font-[600]`) | color `#141413` (`text-[#141413]`) | font `anthropicSans`

- **Card / Feature H3**: `21.4px` | line-height `26.7px` (`leading-[1.25]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `700` (`font-[700]`) | color `#141413` (`text-[#141413]`) | font `anthropicSans`
- **Body Copy (Paragraph)**: `16.7px` | line-height `25.5px` (`leading-[1.53]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#5E5D59` (`text-[#5E5D59]`) | font `anthropicSans`
- **Monospace / Code Block**: `16px` | line-height `18.4px` (`leading-[1.15]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#141413` (`text-[#141413]`) | font `system-ui`

### Extracted CSS Typography Variables
- `--font-weight-regular: 400;`
- `--font-weight-medium: 500;`
- `--font-weight-semibold: 600;`
- `--font-weight-bold: 700;`
- `--font-opsz-display: 48;`
- `--font-opsz-text: 16;`
- `--text-column-max-width: 640px;`
- `--site-menu-main-font-size: 30px;`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1280px`
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `48px / 48px` (1x), `224px / 224px` (1x), `0px / 48px` (1x), `0px / 96px` (1x)
- **High-Frequency Grid & Flex Gaps**: `16px` (32x), `8px` (22x), `4px` (8x), `4px 16px` (7x), `32px` (2x), `5px` (2x)
- **Extracted Spacing & Radius Variables**: `--radius-grown: 0px`, `--radius-xs: 4px`, `--radius-sm: 12px`, `--radius-md: 16px`, `--radius-lg: 24px`, `--header-actions-column: 8`, `--page-top-spacer: 80px`, `--nav-dropdown-column-min-inline-size: 140px`, `--nav-dropdown-row-padding: var(--spacing-4) var(--spacing-16)`, `--grid-columns: 12`

### Surface & Depth Tokens
- **Border Radius Distribution**: `10px` (5x), `4px` (4x), `8px` (3x), `16px` (3x)
- **Glassmorphism / Backdrop Blur**: `none`
- **Box-Shadow Formulas**:
  - Border-driven elevation (`shadow-none` with `1px` translucent hairlines)

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Research")**: height `28px`, padding `8px 12px`, radius `9999px` (`rounded-full`), bg `#F5F4ED` (`bg-[#F5F4ED]`), text `#3D3D3A` (`text-[#3D3D3A]`), border `1px solid #E8E6DC`, font `13px` / weight `400`
  - **Button Variant 2 ("Learn more")**: height `36px`, padding `12px 24px`, radius `10px` (`rounded-xl`), bg `#141413` (`bg-[#141413]`), text `#FAF9F5` (`text-[#FAF9F5]`), border `1px solid #141413`, font `16.6863px` / weight `400`
- **Cards & Containers**:


### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `ease-out` (40x), `ease` (23x), `ease-in-out, ease-in-out, ease-in-out, ease-in-out` (13x), `cubic-bezier(0.25, 1, 0.5, 1)` (2x)
- **Transition Durations**: `0.2s` (27x), `0.15s` (21x), `0.2s, 0.2s, 0.2s, 0.2s` (13x), `0.1s` (11x)
- **Named Motion Tokens**: `--header-logo-fade-duration: .2s`, `--ease-in-opacity: cubic-bezier(.2, .7, .1, 1)`, `--ease-in-rise: cubic-bezier(.16, 1, .3, 1)`, `--ease: cubic-bezier(.65, 0, .35, 1)`, `--ease-in-quart: cubic-bezier(.895, .03, .685, .22)`, `--ease-out-quart: cubic-bezier(.165, .84, .44, 1)`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Anthropic’s exact `#FAF9F5` canvas and `#F5F4ED` surface pairing.**
- **NEVER replace `anthropicSerif` display typography or ignore its signature scale (`40.8px / -0.01em (w400)`).**
- **NEVER use thick opaque borders that clash with `#DEDCD1` (`1px solid #DEDCD1`).**
- **NEVER deviate from the signature button geometry (`9999px (Pill) / 8px`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `JetBrains Mono`.
