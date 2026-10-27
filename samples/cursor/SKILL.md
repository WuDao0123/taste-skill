---
name: taste-cursor
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of cursor.com (Cursor). Use when building or restyling UI pages, landing pages, dashboards, or components to match Cursor's exact design language.
---

# Cursor (cursor.com) Design System & Aesthetic Skill

> **Source URL**: `https://www.cursor.com`
> **Extracted At**: `2026-10-26T15:36:17.767Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `4128ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Warm Archival Paper & Frontier AI Research Craft**
- **Semantic Vibe Tags**: `light`, `warm`, `paper`, `editorial`, `ai`, `coding-agent`, `cursor`, `serif`
- **Core Signature**: Warm archival paper canvas (#F7F7F4 / #F2F1ED) with deep charcoal-olive ink (#26251E), bespoke CursorGothic + EB Garamond editorial quotes + BerkeleyMono diff blocks and timeline tokens.
- **Atmosphere & Contrast Strategy**: Built on a light-mode foundation (`#F7F7F4` canvas -> `#F2F1ED` elevated surfaces) anchored by `rgba(39, 39, 29, 0.1)` structural borders, `CursorGothic` display typography, and `#26251E` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#F7F7F4` | `computed root canvas` | `bg-[#F7F7F4]` | Primary Cursor page canvas |
| **surfaceElevated** | `#F2F1ED` | `computed card surface` | `bg-[#F2F1ED]` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#F7F7F4` | `computed secondary surface` | `bg-[#F7F7F4]` | Secondary interactive container / hover fill |
| **borderPrimary** | `rgba(39, 39, 29, 0.1)` | `computed border hairline` | `border-[rgba(39,39,29,0.1)]` | Primary structural divider (1px rgba(39,39,29,0.1)) |
| **borderSecondary** | `rgba(38, 38, 26, 0.08)` | `computed secondary border` | `border-[rgba(38,38,26,0.08)]` | Secondary nested module or pill border |
| **textPrimary** | `#26251E` | `computed heading color` | `text-[#26251E]` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `rgba(38, 36, 29, 0.55)` | `computed body color` | `text-[rgba(38,36,29,0.55)]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#26251E` | `computed brand accent` | `bg-[#26251E]` | Primary interactive CTA & brand highlight (9999px (Pill)) |
| **accentSecondary** | `rgba(18, 18, 18, 0.05)` | `computed secondary accent` | `text-[rgba(18,18,18,0.05)]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(oklab(0.263084 -0.00230259 0.0124794 / 0.05) 0%, oklab(0.263084 -0.00230259 0.0124794 / 0.05) 100%), linear-gradient(rgb(242, 241, 237) 0%, rgb(242, 241, 237) 100%)`
  - `linear-gradient(in oklab, rgb(242, 241, 237) 0%, rgba(0, 0, 0, 0) 100%)`
  - `linear-gradient(to top in oklab, rgb(242, 241, 237) 0%, rgba(0, 0, 0, 0) 100%)`
  - `linear-gradient(to top, color(srgb 0.988235 0.988235 0.988235 / 0.92) 0%, color(srgb 0.988235 0.988235 0.988235 / 0.62) 36%, color(srgb 0.988235 0.988235 0.988235 / 0.22) 68%, rgba(0, 0, 0, 0) 100%)`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--color-timeline-thinking: #dfa88f (#DFA88F);`
- `--color-timeline-grep: #9fc9a2 (#9FC9A2);`
- `--color-timeline-read: #9fbbe0 (#9FBBE0);`
- `--color-timeline-edit: #c0a8dd (#C0A8DD);`
- `--color-red-500: lab(55.4814% 75.0732 48.8528) (#FB2C36);`
- `--color-red-600: lab(48.4493% 77.4328 61.5452) (#E7000B);`
- `--color-green-50: lab(98.1563% -5.60117 2.75915) (#F0FDF4);`
- `--color-green-500: lab(70.5521% -66.5147 45.8073) (#00C950);`
- `--color-green-600: lab(59.0978% -58.6621 41.2579) (#00A63E);`
- `--color-green-800: lab(37.4616% -36.7971 22.9692) (#016630);`
- `--color-green-900: lab(30.797% -29.6927 17.382) (#0D542B);`
- `--color-blue-50: lab(96.492% -1.14644 -5.11479) (#EFF6FF);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `CursorGothic, "CursorGothic Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif`
- **Section Heading Font (H2/H3)**: `CursorGothic, "CursorGothic Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif`
- **Body / UI Sans Font**: `"EB Garamond", "Iowan Old Style", "Palatino Linotype", "URW Palladio L", P052, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif, "Iowan Old Style", "Palatino Linotype", "URW Palladio L", P052, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`
- **Monospace / Code Font**: `berkeleyMono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `26px` | line-height `32.5px` (`leading-[1.25]`) | letter-spacing `-0.32px` (`tracking-[-0.012em]`) | weight `400` (`font-[400]`) | color `#26251E` (`text-[#26251E]`) | font `CursorGothic`
- **Section H2 (Primary)**: `36px` | line-height `43.2px` (`leading-[1.2]`) | letter-spacing `-0.72px` (`tracking-[-0.02em]`) | weight `400` (`font-[400]`) | color `#26251E` (`text-[#26251E]`) | font `CursorGothic`
- **Section H2 (Secondary)**: `22px` | line-height `28.6px` (`leading-[1.3]`) | letter-spacing `-0.11px` (`tracking-[-0.005em]`) | weight `400` (`font-[400]`) | color `#26251E` (`text-[#26251E]`) | font `CursorGothic`
- **Card / Feature H3**: `22px` | line-height `28.6px` (`leading-[1.3]`) | letter-spacing `-0.11px` (`tracking-[-0.005em]`) | weight `400` (`font-[400]`) | color `#26251E` (`text-[#26251E]`) | font `CursorGothic`
- **Body Copy (Paragraph)**: `17.3px` | line-height `23.3px` (`leading-[1.35]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `rgba(38, 36, 29, 0.55)` (`text-[rgba(38,36,29,0.55)]`) | font `EB Garamond`
- **Monospace / Code Block**: `13px` | line-height `18.6px` (`leading-[1.43]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#26251E` (`text-[#26251E]`) | font `berkeleyMono`

### Extracted CSS Typography Variables
- `--font-sans: "CursorGothic", "CursorGothic Fallback", system-ui, Helvetica Neue, Helvetica, Arial, sans-serif;`
- `--font-berkeley-mono: "berkeleyMono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;`
- `--font-cursor-mono: "cursorMono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;`
- `--font-serif: "EB Garamond", Iowan Old Style, Palatino Linotype, URW Palladio L, P052, ui-serif, Georgia, Cambria, Times New Roman, Times, serif;`
- `--font-cursor-display: "cursorDisplay", system-ui, Helvetica Neue, Helvetica, Arial, sans-serif;`
- `--text-xs: .75rem;`
- `--text-xs--line-height: calc(1 / .75);`
- `--text-sm: .875rem;`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1300px` (9x), `658.321px` (5x), `672px` (1x), `740px` (1x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `67px / 67px` (2x), `112px / 67px` (1x), `0px / 34px` (1x)
- **High-Frequency Grid & Flex Gaps**: `8px` (59x), `6px` (27x), `3px` (22x), `4px` (15x), `2px` (12x), `0px 10px` (8x)
- **Extracted Spacing & Radius Variables**: `--radius-xs: 4px`, `--radius-sm: .25rem`, `--radius-md: 8px`, `--radius-lg: .5rem`, `--radius-xl: .75rem`, `--viz-node-stroke-width: 1`, `--viz-edge-width: 1`, `--viz-lane-stroke-width: 1.25`, `--git-breakout-width: min(150%, calc(100vw - 3rem))`, `--spacing-xs: calc(calc(10rem / 16) * .25)`

### Surface & Depth Tokens
- **Border Radius Distribution**: `4px` (93x), `8px` (28x), `10px` (16x), `2px` (5x), `1.5px` (5x), `3px` (2x)
- **Glassmorphism / Backdrop Blur**: `none`
- **Box-Shadow Formulas**:
  - `rgba(0, 0, 0, 0.14) 0px 28px 70px 0px, rgba(0, 0, 0, 0.1) 0px 14px 32px 0px, oklab(0.263084 -0.00230259 0.0124794 / 0.1) 0px 0px 0px 1px` *(observed 6x in DOM, Tailwind: `shadow-[rgba(0,0,0,0.14)_0px_28px_70px_0px,rgba(0,0,0,0.1)_0px_14px_32px_0px,oklab(0.263084_-0.00230259_0.0124794_/_0.1)_0px_0px_0px_1px]`)*
  - `rgb(252, 252, 252) 0px 0px 0px 2px` *(observed 3x in DOM, Tailwind: `shadow-[rgb(252,252,252)_0px_0px_0px_2px]`)*
  - `rgba(0, 0, 0, 0.3) 0px 22px 70px 4px, rgba(0, 0, 0, 0.15) 0px 0px 0px 0.5px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(0,0,0,0.3)_0px_22px_70px_4px,rgba(0,0,0,0.15)_0px_0px_0px_0.5px]`)*
  - `rgba(0, 0, 0, 0.25) 0px 25px 50px -12px, rgba(0, 0, 0, 0.15) 0px 12px 24px -8px, oklab(0.263084 -0.00230259 0.0124794 / 0.1) 0px 0px 0px 0.5px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(0,0,0,0.25)_0px_25px_50px_-12px,rgba(0,0,0,0.15)_0px_12px_24px_-8px,oklab(0.263084_-0.00230259_0.0124794_/_0.1)_0px_0px_0px_0.5px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Contact sales")**: height `27px`, padding `5.6px 10.5px`, radius `9999px` (`rounded-full`), bg `transparent` (`bg-[transparent]`), text `#26251E` (`text-[#26251E]`), border `1px solid rgba(40, 35, 30, 0.2)`, font `14px` / weight `400`
  - **Button Variant 2 ("Request a demo →")**: height `43px`, padding `12.48px 21.6px`, radius `9999px` (`rounded-full`), bg `#E6E5E0` (`bg-[#E6E5E0]`), text `#26251E` (`text-[#26251E]`), border `1px solid rgba(42, 42, 42, 0.02)`, font `16px` / weight `400`
  - **Button Variant 3 ("Build Landing Page now Done. Fon")**: height `51px`, padding `10px 12px`, radius `0px` (`rounded-sm`), bg `#EBEAE5` (`bg-[#EBEAE5]`), text `#26251E` (`text-[#26251E]`), border `none`, font `12px` / weight `400`
  - **Button Variant 4 ("See projects")**: height `35px`, padding `6px 12px`, radius `0px` (`rounded-sm`), bg `rgba(34, 34, 34, 0.06)` (`bg-[rgba(34,34,34,0.06)]`), text `rgba(38, 36, 29, 0.55)` (`text-[rgba(38,36,29,0.55)]`), border `none`, font `17.28px` / weight `400`
- **Cards & Containers**:
  - **Card Recipe 1 (1080x620px)**: bg `#F2F1ED` (`bg-[#F2F1ED]`), border `none`, radius `10px` (`rounded-xl`), padding `0px 0px`, shadow `rgba(0, 0, 0, 0.14) 0px 28px 70px 0px, rgba(0, 0, 0, 0.1) 0px 14px 32px 0px, oklab(0.263084 -0.00230259 0.0124794 / 0.1) 0px 0px 0px 1px`
  - **Card Recipe 2 (315x170px)**: bg `#F7F7F4` (`bg-[#F7F7F4]`), border `1px solid rgba(39, 39, 29, 0.1)`, radius `8px` (`rounded-lg`), padding `0px 0px`
  - **Card Recipe 3 (740x584px)**: bg `transparent` (`bg-[transparent]`), border `none`, radius `10px` (`rounded-xl`), padding `0px 0px`, shadow `rgba(0, 0, 0, 0.3) 0px 22px 70px 4px, rgba(0, 0, 0, 0.15) 0px 0px 0px 0.5px`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.4, 0, 0.2, 1)` (62x), `ease` (35x), `cubic-bezier(0.25, 1, 0.5, 1)` (3x)
- **Transition Durations**: `0.15s` (56x), `0.6s` (26x), `0.12s` (8x), `0.2s` (5x)
- **Named Motion Tokens**: `--ease-out: cubic-bezier(0, 0, .2, 1)`, `--ease-in-out: cubic-bezier(.4, 0, .2, 1)`, `--ease-out-spring: cubic-bezier(.25, 1, .5, 1)`, `--transition-fast: .14s`, `--default-transition-duration: .15s`, `--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1)`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Cursor’s exact `#F7F7F4` canvas and `#F2F1ED` surface pairing.**
- **NEVER replace `CursorGothic` display typography or ignore its signature scale (`36px / -0.02em (w400)`).**
- **NEVER use thick opaque borders that clash with `rgba(39, 39, 29, 0.1)` (`1px rgba(39,39,29,0.1)`).**
- **NEVER deviate from the signature button geometry (`9999px (Pill)`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `berkeleyMono`.
