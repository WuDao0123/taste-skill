---
name: taste-clerk
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of clerk.com (Clerk). Use when building or restyling UI pages, landing pages, dashboards, or components to match Clerk's exact design language.
---

# Clerk (clerk.com) Design System & Aesthetic Skill

> **Source URL**: `https://clerk.com`
> **Extracted At**: `2026-10-26T15:25:44.168Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `5401ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Tactile Micro-Shadow Auth Components & Electric Violet**
- **Semantic Vibe Tags**: `light`, `auth`, `components`, `micro-shadows`, `violet`, `purple`, `clerk`, `devtools`
- **Core Signature**: Cool alabaster #F7F7F8 canvas with floating #FFFFFF auth cards, multi-layered ring micro-shadows, tight -0.035em Geist headings, SoehneMono snippets, and #6C47FF electric violet accents.
- **Atmosphere & Contrast Strategy**: Built on a light-mode foundation (`#F7F7F8` canvas -> `#FFFFFF` elevated surfaces) anchored by `rgba(0, 0, 0, 0.06)` structural borders, `Geist / geistNumbers` display typography, and `#6C47FF` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#F7F7F8` | `computed root canvas` | `bg-[#F7F7F8]` | Primary Clerk page canvas |
| **surfaceElevated** | `#FFFFFF` | `computed card surface` | `bg-white` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#F7F7F8` | `computed secondary surface` | `bg-[#F7F7F8]` | Secondary interactive container / hover fill |
| **borderPrimary** | `rgba(0, 0, 0, 0.06)` | `computed border hairline` | `border-black/[0.06]` | Primary structural divider (1px rgba(0,0,0,0.06)) |
| **borderSecondary** | `#EEEEF0` | `computed secondary border` | `border-[#EEEEF0]` | Secondary nested module or pill border |
| **textPrimary** | `#131316` | `computed heading color` | `text-[#131316]` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#747686` | `computed body color` | `text-[#747686]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#6C47FF` | `computed brand accent` | `bg-[#6C47FF]` | Primary interactive CTA & brand highlight (9999px / 6px) |
| **accentSecondary** | `#6C47FF` | `computed secondary accent` | `text-[#6C47FF]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(rgb(224, 135, 106), rgb(217, 119, 87))`
  - `linear-gradient(rgb(255, 255, 255), rgb(237, 237, 237))`
  - `linear-gradient(rgb(38, 38, 38), rgb(0, 0, 0))`
  - `linear-gradient(oklab(0.999994 0.0000455678 0.0000200868 / 0.1) 0%, rgba(0, 0, 0, 0) 100%)`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--color-red-50: #fef2f2 (#FEF2F2);`
- `--color-red-100: #fef2f2 (#FEF2F2);`
- `--color-red-200: #fecaca (#FECACA);`
- `--color-red-300: #fca5a5 (#FCA5A5);`
- `--color-red-400: #f87171 (#F87171);`
- `--color-red-500: #ef4444 (#EF4444);`
- `--color-red-600: #dc2626 (#DC2626);`
- `--color-red-700: #b91c1c (#B91C1C);`
- `--color-red-800: #991b1b (#991B1B);`
- `--color-red-900: #7f1d1d (#7F1D1D);`
- `--color-red-950: #450a0a (#450A0A);`
- `--color-orange-50: #fff6ed (#FFF6ED);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `geistNumbers, suisse, "suisse Fallback"`
- **Section Heading Font (H2/H3)**: `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
- **Body / UI Sans Font**: `geistNumbers, suisse, "suisse Fallback"`
- **Monospace / Code Font**: `soehneMono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `56px` | line-height `64px` (`leading-[1.14]`) | letter-spacing `-1.96px` (`tracking-[-0.035em]`) | weight `700` (`font-[700]`) | color `#131316` (`text-[#131316]`) | font `geistNumbers`
- **Section H2 (Primary)**: `20px` | line-height `26.7px` (`leading-[1.33]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `700` (`font-[700]`) | color `#212126` (`text-[#212126]`) | font `ui-sans-serif`

- **Card / Feature H3**: Subheading with crisp line-height
- **Body Copy (Paragraph)**: `18px` | line-height `27.9px` (`leading-[1.55]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#5E5F6E` (`text-[#5E5F6E]`) | font `geistNumbers`
- **Monospace / Code Block**: `13px` | line-height `20px` (`leading-[1.54]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#131316` (`text-[#131316]`) | font `soehneMono`

### Extracted CSS Typography Variables
- `--font-geist-numbers: "geistNumbers";`
- `--font-suisse: "suisse", "suisse Fallback";`
- `--font-soehne-mono: "soehneMono";`
- `--text-xs: .75rem;`
- `--text-xs--line-height: 1.25rem;`
- `--text-sm: .8125rem;`
- `--text-sm--line-height: 1.5rem;`
- `--text-base: .9375rem;`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `720px` (2x), `1408px` (1x), `1264px` (1x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `0px / 32px` (1x), `164px / 0px` (1x)
- **High-Frequency Grid & Flex Gaps**: `8px` (55x), `6px` (29x), `12px` (28x), `4px` (15x), `16px` (13x), `20px` (13x)
- **Extracted Spacing & Radius Variables**: `--radius-xs: .125rem`, `--radius-sm: .25rem`, `--radius-md: .375rem`, `--radius-lg: .5rem`, `--radius-xl: .75rem`, `--spacing: .25rem`, `--active-bar-width: 1px`, `--bar-width: 1px`, `--canvas-width: 220px`, `--content-width: 43.5rem`

### Surface & Depth Tokens
- **Border Radius Distribution**: `6px` (77x), `8px` (36x), `4px` (16x), `12px` (6x), `16.5px` (6x), `12.5px` (5x)
- **Glassmorphism / Backdrop Blur**: `blur(1px)`, `blur(2px)`, `blur(3px)`, `blur(4px)`, `blur(5px)`, `blur(6px)`, `blur(8px)`, `blur(10px)`
- **Box-Shadow Formulas**:
  - `rgba(19, 19, 22, 0.024) 0px 0px 0px 1px, rgba(19, 19, 22, 0.024) 0px 1px 1px -0.5px, rgba(19, 19, 22, 0.024) 0px 3px 3px -1.5px, rgba(19, 19, 22, 0.024) 0px 6px 6px -3px, rgba(19, 19, 22, 0.024) 0px 12px 12px -6px, rgba(19, 19, 22, 0.024) 0px 24px 24px -12px` *(observed 60x in DOM, Tailwind: `shadow-[rgba(19,19,22,0.024)_0px_0px_0px_1px,rgba(19,19,22,0.024)_0px_1px_1px_-0.5px,rgba(19,19,22,0.024)_0px_3px_3px_-1.5px,rgba(19,19,22,0.024)_0px_6px_6px_-3px,rgba(19,19,22,0.024)_0px_12px_12px_-6px,rgba(19,19,22,0.024)_0px_24px_24px_-12px]`)*
  - `rgb(217, 217, 222) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.08) 0px 0px 2px 0px` *(observed 16x in DOM, Tailwind: `shadow-[rgb(217,217,222)_0px_0px_0px_0.5px,rgba(0,0,0,0.06)_0px_1px_2px_0px,rgba(0,0,0,0.08)_0px_0px_2px_0px]`)*
  - `rgba(19, 19, 22, 0.05) 0px 0px 0px 1px, rgba(19, 19, 22, 0.05) 0px 1px 1px -0.5px, rgba(19, 19, 22, 0.05) 0px 3px 3px -1.5px, rgba(19, 19, 22, 0.05) 0px 6px 6px -3px, rgba(19, 19, 22, 0.05) 0px 12px 12px -6px, rgba(19, 19, 22, 0.05) 0px 24px 24px -12px` *(observed 15x in DOM, Tailwind: `shadow-[rgba(19,19,22,0.05)_0px_0px_0px_1px,rgba(19,19,22,0.05)_0px_1px_1px_-0.5px,rgba(19,19,22,0.05)_0px_3px_3px_-1.5px,rgba(19,19,22,0.05)_0px_6px_6px_-3px,rgba(19,19,22,0.05)_0px_12px_12px_-6px,rgba(19,19,22,0.05)_0px_24px_24px_-12px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 1px 0px 0px, rgba(0, 0, 0, 0.08) 0px 2px 3px -1px` *(observed 10x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.08)_0px_0px_0px_1px,rgba(0,0,0,0.02)_0px_1px_0px_0px,rgba(0,0,0,0.08)_0px_2px_3px_-1px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Prompt copied Build with agents")**: height `30px`, padding `0px 12px`, radius `9999px` (`rounded-full`), bg `rgba(20, 20, 20, 0.05)` (`bg-[rgba(20,20,20,0.05)]`), text `#131316` (`text-[#131316]`), border `none`, font `13px` / weight `500`
- **Cards & Containers**:
  - **Card Recipe 1 (1200x741px)**: bg `transparent` (`bg-[transparent]`), border `none`, radius `16.5px` (`rounded-3xl`), padding `0px 0px`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.188081 0.0016512 -0.00579907 / 0.06) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
  - **Card Recipe 2 (352x146px)**: bg `#FFFFFF` (`bg-white`), border `none`, radius `8px` (`rounded-lg`), padding `0px 0px`, shadow `rgb(217, 217, 222) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px, rgba(0, 0, 0, 0.08) 0px 0px 2px 0px, rgba(19, 19, 22, 0.05) 0px 0px 0px 1px, rgba(19, 19, 22, 0.05) 0px 1px 1px -0.5px, rgba(19, 19, 22, 0.05) 0px 3px 3px -1.5px, rgba(19, 19, 22, 0.05) 0px 6px 6px -3px, rgba(19, 19, 22, 0.05) 0px 12px 12px -6px, rgba(19, 19, 22, 0.05) 0px 24px 24px -12px`
  - **Card Recipe 3 (720x506px)**: bg `#F7F7F8` (`bg-[#F7F7F8]`), border `none`, radius `8px` (`rounded-lg`), padding `0px 0px`, shadow `rgba(19, 19, 22, 0.05) 0px 0px 0px 1px, rgba(19, 19, 22, 0.05) 0px 1px 1px -0.5px, rgba(19, 19, 22, 0.05) 0px 3px 3px -1.5px, rgba(19, 19, 22, 0.05) 0px 6px 6px -3px, rgba(19, 19, 22, 0.05) 0px 12px 12px -6px, rgba(19, 19, 22, 0.05) 0px 24px 24px -12px`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.4, 0, 0.2, 1)` (29x), `cubic-bezier(0.33, 1, 0.68, 1)` (26x), `cubic-bezier(0, 0, 0.2, 1)` (17x), `cubic-bezier(0.33, 1, 0.68, 1), cubic-bezier(0.33, 1, 0.68, 1), cubic-bezier(0.33, 1, 0.68, 1), cubic-bezier(0.33, 1, 0.68, 1), cubic-bezier(0.33, 1, 0.68, 1), cubic-bezier(0.33, 1, 0.68, 1)` (5x)
- **Transition Durations**: `0.45s` (24x), `0.5s` (17x), `0.2s` (17x), `0.15s` (12x)
- **Named Motion Tokens**: `--ease-in: cubic-bezier(.4, 0, 1, 1)`, `--ease-out: cubic-bezier(0, 0, .2, 1)`, `--ease-in-out: cubic-bezier(.4, 0, .2, 1)`, `--ease-swift-out: cubic-bezier(.175, .885, .32, 1.1)`, `--default-transition-duration: .15s`, `--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1)`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Clerk’s exact `#F7F7F8` canvas and `#FFFFFF` surface pairing.**
- **NEVER replace `Geist / geistNumbers` display typography or ignore its signature scale (`56px / -0.035em (w700)`).**
- **NEVER use thick opaque borders that clash with `rgba(0, 0, 0, 0.06)` (`1px rgba(0,0,0,0.06)`).**
- **NEVER deviate from the signature button geometry (`9999px / 6px`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `soehneMono`.
