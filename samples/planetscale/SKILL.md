---
name: taste-planetscale
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of planetscale.com (PlanetScale). Use when building or restyling UI pages, landing pages, dashboards, or components to match PlanetScale's exact design language.
---

# PlanetScale (planetscale.com) Design System & Aesthetic Skill

> **Source URL**: `https://planetscale.com`
> **Extracted At**: `2026-10-26T15:36:21.540Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `3703ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Pure Monospace ASCII Engineering Manual & Zero-Radius Brutalism**
- **Semantic Vibe Tags**: `light`, `monospace`, `ascii`, `brutalist`, `database`, `mysql`, `postgres`, `planetscale`
- **Core Signature**: Stark #FAFAFA technical manual canvas set entirely in system monospace with ASCII box-drawing diagrams, 1px #C1C1C1 / #414141 borders, 0px sharp corners, and #F35815 signal orange CTAs.
- **Atmosphere & Contrast Strategy**: Built on a light-mode foundation (`#FAFAFA` canvas -> `#FFFFFF` elevated surfaces) anchored by `#C1C1C1` structural borders, `SF Mono / ui-monospace` display typography, and `#F35815` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#FAFAFA` | `computed root canvas` | `bg-[#FAFAFA]` | Primary PlanetScale page canvas |
| **surfaceElevated** | `#FFFFFF` | `computed card surface` | `bg-white` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#111111` | `computed secondary surface` | `bg-[#111111]` | Secondary interactive container / hover fill |
| **borderPrimary** | `#C1C1C1` | `computed border hairline` | `border-[#C1C1C1]` | Primary structural divider (1px solid #C1C1C1) |
| **borderSecondary** | `#C1C1C1` | `computed secondary border` | `border-[#C1C1C1]` | Secondary nested module or pill border |
| **textPrimary** | `#111111` | `computed heading color` | `text-[#111111]` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#414141` | `computed body color` | `text-[#414141]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#F35815` | `computed brand accent` | `bg-[#F35815]` | Primary interactive CTA & brand highlight (0px (Sharp Brutalist)) |
| **accentSecondary** | `#F35815` | `computed secondary accent` | `text-[#F35815]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - Subtle surface luminance transitions without saturated multi-stop gradients

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--color-white: #fff (#FFFFFF);`
- `--color-black: #000 (#000000);`
- `--color-gray-50: #fafafa (#FAFAFA);`
- `--color-gray-100: #ebebeb (#EBEBEB);`
- `--color-gray-200: #e1e1e1 (#E1E1E1);`
- `--color-gray-300: #c1c1c1 (#C1C1C1);`
- `--color-gray-400: #a1a1a1 (#A1A1A1);`
- `--color-gray-500: #818181;`
- `--color-gray-550: #737373;`
- `--color-gray-600: #616161;`
- `--color-gray-700: #414141;`
- `--color-gray-800: #2b2b2b (#2B2B2B);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`
- **Section Heading Font (H2/H3)**: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`
- **Body / UI Sans Font**: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`
- **Monospace / Code Font**: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `20px` | line-height `28px` (`leading-[1.4]`) | letter-spacing `-0.4px` (`tracking-[-0.02em]`) | weight `700` (`font-[700]`) | color `#111111` (`text-[#111111]`) | font `ui-monospace`
- **Section H2 (Primary)**: `18px` | line-height `26px` (`leading-[1.44]`) | letter-spacing `-0.2px` (`tracking-[-0.011em]`) | weight `700` (`font-[700]`) | color `#111111` (`text-[#111111]`) | font `ui-monospace`

- **Card / Feature H3**: `16px` | line-height `24px` (`leading-[1.5]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `700` (`font-[700]`) | color `#414141` (`text-[#414141]`) | font `ui-monospace`
- **Body Copy (Paragraph)**: `16px` | line-height `24px` (`leading-[1.5]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#414141` (`text-[#414141]`) | font `ui-monospace`
- **Monospace / Code Block**: `16px` | line-height `20px` (`leading-[1.25]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `500` (`font-[500]`) | color `#000000` (`text-black`) | font `ui-monospace`

### Extracted CSS Typography Variables
- `--font-mono: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;`
- `--font-sans: ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;`
- `--text-base: 16px;`
- `--text-xs: 12px;`
- `--text-xs--letter-spacing: 0;`
- `--text-sm: 14px;`
- `--text-sm--letter-spacing: -.006em;`
- `--text-lg: 18px;`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1280px` (3x), `800px` (2x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `96px / 96px` (`py-24`)
- **High-Frequency Grid & Flex Gaps**: `8px` (9x), `24px normal` (3x), `4px` (3x), `24px` (2x), `normal 24px` (1x), `normal 8px` (1x)
- **Extracted Spacing & Radius Variables**: `--radius-xs: .125rem`, `--radius-sm: .25rem`, `--spacing: 8px`, `--spacing-px: 1px`, `--spacing-xs: 2px`, `--spacing-sm: 4px`, `--spacing-md: 6px`

### Surface & Depth Tokens
- **Border Radius Distribution**: 
- **Glassmorphism / Backdrop Blur**: `none`
- **Box-Shadow Formulas**:
  - Border-driven elevation (`shadow-none` with `1px` translucent hairlines)

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Get in touch")**: height `32px`, padding `0px 8px`, radius `0px` (`rounded-sm`), bg `#F35815` (`bg-[#F35815]`), text `#FFFFFF` (`text-white`), border `none`, font `16px` / weight `600`
  - **Button Variant 2 ("View sandbox")**: height `32px`, padding `0px 8px`, radius `0px` (`rounded-sm`), bg `transparent` (`bg-[transparent]`), text `#414141` (`text-[#414141]`), border `2px solid #F35815`, font `16px` / weight `600`
- **Cards & Containers**:


### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.4, 0, 0.2, 1)` (12x)
- **Transition Durations**: `0.15s` (12x)
- **Named Motion Tokens**: `--default-transition-duration: .15s`, `--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1)`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for PlanetScale’s exact `#FAFAFA` canvas and `#FFFFFF` surface pairing.**
- **NEVER replace `SF Mono / ui-monospace` display typography or ignore its signature scale (`20px Mono / -0.02em (w700)`).**
- **NEVER use thick opaque borders that clash with `#C1C1C1` (`1px solid #C1C1C1`).**
- **NEVER deviate from the signature button geometry (`0px (Sharp Brutalist)`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `SF Mono / ui-monospace`.
