---
name: taste-neon
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of neon.tech (Neon). Use when building or restyling UI pages, landing pages, dashboards, or components to match Neon's exact design language.
---

# Neon (neon.tech) Design System & Aesthetic Skill

> **Source URL**: `https://neon.tech`
> **Extracted At**: `2026-10-26T15:25:58.035Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `4526ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Serverless Pitch-Black & Luminous Cyber-Mint Postgres**
- **Semantic Vibe Tags**: `dark`, `postgres`, `serverless`, `database`, `mint`, `neon-green`, `pitch-black`, `neon`
- **Core Signature**: Pitch-black #000000 canvas with #242628 / #303236 dark structural borders, 56px tight -0.04em Inter display headings, and #34D59A / #00E599 luminous cyber-mint accents.
- **Atmosphere & Contrast Strategy**: Built on a dark-mode foundation (`#000000` canvas -> `#131415` elevated surfaces) anchored by `#242628` structural borders, `Inter` display typography, and `#34D59A` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#000000` | `computed root canvas` | `bg-black` | Primary Neon page canvas |
| **surfaceElevated** | `#131415` | `computed card surface` | `bg-[#131415]` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#CDDFD7` | `computed secondary surface` | `bg-[#CDDFD7]` | Secondary interactive container / hover fill |
| **borderPrimary** | `#242628` | `computed border hairline` | `border-[#242628]` | Primary structural divider (1px solid #242628) |
| **borderSecondary** | `#303236` | `computed secondary border` | `border-[#303236]` | Secondary nested module or pill border |
| **textPrimary** | `#FFFFFF` | `computed heading color` | `text-white` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#94979E` | `computed body color` | `text-[#94979E]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#34D59A` | `computed brand accent` | `bg-[#34D59A]` | Primary interactive CTA & brand highlight (9999px (Pill)) |
| **accentSecondary** | `#34D59A` | `computed secondary accent` | `text-[#34D59A]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)`
  - `linear-gradient(rgba(0, 0, 0, 0) 7.8px, rgba(57, 165, 125, 0.6) 7.8px)`
  - `linear-gradient(rgba(0, 0, 0, 0) 5.4px, rgba(57, 165, 125, 0.6) 5.4px)`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--color: #fff (#FFFFFF);`
- `--error-tooltip-bg: #000 (#000000);`
- `--shiki-color-text: #f9fafa (#F9FAFA);`
- `--shiki-foreground: #f9fafa (#F9FAFA);`
- `--shiki-token-constant: #94b5f7 (#94B5F7);`
- `--shiki-token-string: #ffed9c (#FFED9C);`
- `--shiki-token-comment: #797d86 (#797D86);`
- `--shiki-token-keyword: #34d59a (#34D59A);`
- `--shiki-token-parameter: #ff990a (#FF990A);`
- `--shiki-token-function: #f7b983 (#F7B983);`
- `--shiki-token-string-expression: #af93ea (#AF93EA);`
- `--shiki-token-punctuation: #fff (#FFFFFF);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `Inter, "Inter Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
- **Section Heading Font (H2/H3)**: `Inter, "Inter Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
- **Body / UI Sans Font**: `Inter, "Inter Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
- **Monospace / Code Font**: `Inter, "Inter Fallback", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `56px` | line-height `63px` (`leading-[1.13]`) | letter-spacing `-2.24px` (`tracking-[-0.04em]`) | weight `400` (`font-[400]`) | color `#FFFFFF` (`text-white`) | font `Inter`
- **Section H2 (Primary)**: `64px` | line-height `64px` (`leading-[1]`) | letter-spacing `-2.56px` (`tracking-[-0.04em]`) | weight `400` (`font-[400]`) | color `#000000` (`text-black`) | font `Inter`
- **Section H2 (Secondary)**: `52px` | line-height `58.5px` (`leading-[1.13]`) | letter-spacing `-2.08px` (`tracking-[-0.04em]`) | weight `400` (`font-[400]`) | color `#000000` (`text-black`) | font `Inter`
- **Card / Feature H3**: `28px` | line-height `35px` (`leading-[1.25]`) | letter-spacing `-0.56px` (`tracking-[-0.02em]`) | weight `400` (`font-[400]`) | color `#000000` (`text-black`) | font `Inter`
- **Body Copy (Paragraph)**: `15px` | line-height `18.8px` (`leading-[1.25]`) | letter-spacing `-0.3px` (`tracking-[-0.02em]`) | weight `400` (`font-[400]`) | color `#94979E` (`text-[#94979E]`) | font `Inter`
- **Monospace / Code Block**: `16px` | line-height `24px` (`leading-[1.5]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#FFFFFF` (`text-white`) | font `Inter`

### Extracted CSS Typography Variables
- `--font-geist-mono: "GeistMono", ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace;`
- `--font-inter: "Inter", "Inter Fallback";`
- `--font-esbuild: "esbuild", "esbuild Fallback";`
- `--text-xs--line-height: calc(1 / .75);`
- `--text-sm--line-height: calc(1.25 / .875);`
- `--text-base--line-height: calc(1.5 / 1);`
- `--text-lg--line-height: calc(1.75 / 1.125);`
- `--text-xl--line-height: calc(1.75 / 1.25);`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1600px` (10x), `1184px` (3x), `1280px` (2x), `960px` (2x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `28px / 80px` (3x), `384px / 8px` (1x), `128px / 96px` (1x), `106px / 0px` (1x)
- **High-Frequency Grid & Flex Gaps**: `8px normal` (29x), `8px` (9x), `48px` (8x), `normal 10px` (7x), `20px` (7x), `normal 128px` (6x)
- **Extracted Spacing & Radius Variables**: `--radius-sm: .25rem`, `--radius-md: .375rem`, `--radius-lg: .5rem`, `--radius-xl: .75rem`, `--radius-2xl: 1rem`, `--spacing: .25rem`, `--gap: 5rem`, `--anchor-gap: 4px`, `--anchor-padding: 12px`, `--viewport-padding: 25px`

### Surface & Depth Tokens
- **Border Radius Distribution**: `4px` (60x), `5px` (1x), `10px` (1x)
- **Glassmorphism / Backdrop Blur**: `none`
- **Box-Shadow Formulas**:
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, lab(100 -0.0000298023 0.0000119209 / 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px` *(observed 5x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,lab(100_-0.0000298023_0.0000119209_/_0.05)_0px_0px_0px_1px,rgba(0,0,0,0)_0px_0px_0px_0px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(48, 50, 54) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px` *(observed 2x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgb(48,50,54)_0px_0px_0px_1px_inset,rgba(0,0,0,0)_0px_0px_0px_0px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.4) 0px 8px 20px 0px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.4)_0px_8px_20px_0px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Sign up")**: height `36px`, padding `0px 18px`, radius `9999px` (`rounded-full`), bg `#FFFFFF` (`bg-white`), text `#000000` (`text-black`), border `none`, font `14px` / weight `500`
  - **Button Variant 2 ("Get started")**: height `44px`, padding `0px 28px`, radius `9999px` (`rounded-full`), bg `#FFFFFF` (`bg-white`), text `#1A1A1A` (`text-[#1A1A1A]`), border `none`, font `16px` / weight `500`
  - **Button Variant 3 ("Log in")**: height `36px`, padding `0px 18px`, radius `9999px` (`rounded-full`), bg `transparent` (`bg-[transparent]`), text `#FFFFFF` (`text-white`), border `1px solid #61646B`, font `14px` / weight `500`
  - **Button Variant 4 ("Avoid outages")**: height `44px`, padding `0px 16px`, radius `0px` (`rounded-sm`), bg `#303236` (`bg-[#303236]`), text `#FFFFFF` (`text-white`), border `1px solid #494B50`, font `16px` / weight `500`
- **Cards & Containers**:


### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.4, 0, 0.2, 1)` (90x)
- **Transition Durations**: `0.2s` (88x), `0.15s` (2x)
- **Named Motion Tokens**: `--ease-in: cubic-bezier(.4, 0, 1, 1)`, `--ease-out: cubic-bezier(0, 0, .2, 1)`, `--ease-in-out: cubic-bezier(.4, 0, .2, 1)`, `--default-transition-duration: .15s`, `--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1)`, `--rt-transition-show-delay: .15s`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Neon’s exact `#000000` canvas and `#131415` surface pairing.**
- **NEVER replace `Inter` display typography or ignore its signature scale (`56px / -0.04em (w400)`).**
- **NEVER use thick opaque borders that clash with `#242628` (`1px solid #242628`).**
- **NEVER deviate from the signature button geometry (`9999px (Pill)`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `JetBrains Mono`.
