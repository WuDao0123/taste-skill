---
name: taste-mintlify
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of mintlify.com (Mintlify). Use when building or restyling UI pages, landing pages, dashboards, or components to match Mintlify's exact design language.
---

# Mintlify (mintlify.com) Design System & Aesthetic Skill

> **Source URL**: `https://mintlify.com`
> **Extracted At**: `2026-10-26T15:25:54.162Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `10251ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Warm Daylight Documentation & Editorial Arizona Flare Serif**
- **Semantic Vibe Tags**: `light`, `docs`, `documentation`, `serif`, `warm`, `mintlify`, `ai`, `devtools`
- **Core Signature**: Clean #FFFFFF & warm sand #F9F6F3 surfaces paired with deep forest ink #121715, 50px ArizonaFlare editorial display typography (-0.04em tracking), and crisp 4px #08090A / #0077A6 CTAs.
- **Atmosphere & Contrast Strategy**: Built on a light-mode foundation (`#FFFFFF` canvas -> `#F9F6F3` elevated surfaces) anchored by `#F1F0EE` structural borders, `arizonaFlare` display typography, and `#0077A6` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#FFFFFF` | `computed root canvas` | `bg-white` | Primary Mintlify page canvas |
| **surfaceElevated** | `#F9F6F3` | `computed card surface` | `bg-[#F9F6F3]` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#F9F6F3` | `computed secondary surface` | `bg-[#F9F6F3]` | Secondary interactive container / hover fill |
| **borderPrimary** | `#F1F0EE` | `computed border hairline` | `border-[#F1F0EE]` | Primary structural divider (1px solid #F1F0EE) |
| **borderSecondary** | `rgba(0, 0, 0, 0.04)` | `computed secondary border` | `border-black/[0.04]` | Secondary nested module or pill border |
| **textPrimary** | `#121715` | `computed heading color` | `text-[#121715]` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `rgba(8, 9, 10, 0.8)` | `computed body color` | `text-[rgba(8,9,10,0.8)]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#0077A6` | `computed brand accent` | `bg-[#0077A6]` | Primary interactive CTA & brand highlight (4px) |
| **accentSecondary** | `#0077A6` | `computed secondary accent` | `text-[#0077A6]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(106deg, rgba(68, 174, 255, 0.5) 0%, rgba(24, 226, 153, 0.5) 35%, rgba(186, 255, 36, 0.5) 65%, rgba(24, 226, 153, 0.5) 100%)`
  - `linear-gradient(rgba(0, 0, 0, 0) 55%, lab(100 0 0) 96%)`
  - `linear-gradient(to right, lab(100 0 0) 0%, rgba(0, 0, 0, 0) 71%)`
  - `linear-gradient(to right, rgba(0, 0, 0, 0) 0%, lab(100 0 0) 71%)`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--color-red-400: lab(63.7053% 60.745 31.3109) (#FF6467);`
- `--color-red-500: lab(55.4814% 75.0732 48.8528) (#FB2C36);`
- `--color-red-600: lab(48.4493% 77.4328 61.5452) (#E7000B);`
- `--color-green-800: lab(37.4616% -36.7971 22.9692) (#016630);`
- `--color-gray-100: lab(96.1596% -.0823438 -1.13575) (#F3F4F6);`
- `--color-gray-200: lab(91.6229% -.159115 -2.26791) (#E5E7EB);`
- `--color-gray-600: lab(35.6337% -1.58697 -10.8425) (#4A5565);`
- `--color-gray-800: lab(16.1051% -1.18239 -11.7533) (#1E2939);`
- `--color-black: #000 (#000000);`
- `--color-white: #fff (#FFFFFF);`
- `--color-text-invert: lab(100% 0 0) (#FFFFFF);`
- `--color-rail-dot: rgba(0,0,0,.12) (rgba(0, 0, 0, 0.12));`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `arizonaFlare, "arizonaFlare Fallback", serif`
- **Section Heading Font (H2/H3)**: `inter, "inter Fallback"`
- **Body / UI Sans Font**: `inter, "inter Fallback"`
- **Monospace / Code Font**: `inter, "inter Fallback"`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `50px` | line-height `52px` (`leading-[1.04]`) | letter-spacing `-2px` (`tracking-[-0.04em]`) | weight `400` (`font-[400]`) | color `#08090A` (`text-[#08090A]`) | font `arizonaFlare`
- **Section H2 (Primary)**: `36px` | line-height `40px` (`leading-[1.11]`) | letter-spacing `-0.72px` (`tracking-[-0.02em]`) | weight `500` (`font-[500]`) | color `#121715` (`text-[#121715]`) | font `inter`

- **Card / Feature H3**: `35px` | line-height `40px` (`leading-[1.14]`) | letter-spacing `-0.35px` (`tracking-[-0.01em]`) | weight `500` (`font-[500]`) | color `#FFFFFF` (`text-white`) | font `inter`
- **Body Copy (Paragraph)**: `18px` | line-height `24px` (`leading-[1.33]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `rgba(8, 8, 10, 0.6)` (`text-[rgba(8,8,10,0.6)]`) | font `inter`
- **Monospace / Code Block**: `16px` | line-height `24px` (`leading-[1.5]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#000000` (`text-black`) | font `inter`

### Extracted CSS Typography Variables
- `--font-geist-mono: "Geist Mono","Geist Mono Fallback";`
- `--font-inter: "inter","inter Fallback";`
- `--font-paper-mono: "paperMono","paperMono Fallback";`
- `--font-arizona: "arizonaFlare","arizonaFlare Fallback";`
- `--text-xs: .75rem;`
- `--text-xs--line-height: calc(1/.75);`
- `--text-sm: .875rem;`
- `--text-sm--line-height: calc(1.25/.875);`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1088px` (22x), `664px` (6x), `1440px` (2x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `80px / 0px` (1x)
- **High-Frequency Grid & Flex Gaps**: `4px` (40x), `8px` (27x), `16px` (22x), `normal 16px` (21x), `32px` (18x), `12px` (13x)
- **Extracted Spacing & Radius Variables**: `--radius-sm: .25rem`, `--radius-md: .375rem`, `--radius-lg: .5rem`, `--radius-xl: .75rem`, `--radius-2xl: 1rem`, `--spacing: .25rem`, `--space-y-reverse: 0`, `--switch-width: 2rem`, `--switch-padding: .125rem`, `--consent-banner-space-y-reverse: 0`

### Surface & Depth Tokens
- **Border Radius Distribution**: `6px` (37x), `4px` (34x), `12px` (15x), `2px` (12x), `12px 12px 0px 0px` (1x), `23.4654px 23.4654px 0px 0px` (1x)
- **Glassmorphism / Backdrop Blur**: `none`
- **Box-Shadow Formulas**:
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0 0 0 / 0.02) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px` *(observed 3x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,oklab(0_0_0_/_0.02)_0px_0px_0px_1px_inset,rgba(0,0,0,0)_0px_0px_0px_0px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Get started")**: height `42px`, padding `12px 12px`, radius `4px` (`rounded`), bg `#08090A` (`bg-[#08090A]`), text `#FFFFFF` (`text-white`), border `none`, font `14px` / weight `500`
  - **Button Variant 2 ("Contact sales")**: height `34px`, padding `8px 14px`, radius `4px` (`rounded`), bg `#08090A` (`bg-[#08090A]`), text `#FFFFFF` (`text-white`), border `none`, font `14px` / weight `500`
  - **Button Variant 3 ("Talk to sales")**: height `42px`, padding `12px 20px`, radius `4px` (`rounded`), bg `#FEFDFB` (`bg-[#FEFDFB]`), text `#121715` (`text-[#121715]`), border `1px solid rgba(0, 0, 0, 0.05)`, font `14px` / weight `500`
- **Cards & Containers**:
  - **Card Recipe 1 (1057x642px)**: bg `transparent` (`bg-[transparent]`), border `1px solid rgba(26, 166, 128, 0.08)`, radius `23.4654px 23.4654px 0px 0px` (`rounded-3xl`), padding `0px 0px`
  - **Card Recipe 2 (697x412px)**: bg `#F9F6F3` (`bg-[#F9F6F3]`), border `1px solid rgba(14, 14, 14, 0.07)`, radius `12px` (`rounded-xl`), padding `32px 32px`
  - **Card Recipe 3 (341x264px)**: bg `#FAF8F5` (`bg-[#FAF8F5]`), border `1px solid rgba(0, 0, 0, 0.04)`, radius `6px` (`rounded-md`), padding `16px 16px`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.22, 1, 0.36, 1)` (62x), `cubic-bezier(0, 0, 0.2, 1)` (54x), `cubic-bezier(0.4, 0, 0.2, 1)` (35x), `cubic-bezier(0, 0, 0, 1)` (8x)
- **Transition Durations**: `0.7s` (62x), `0.15s` (50x), `0.5s` (22x), `0.1s` (21x)
- **Named Motion Tokens**: `--ease-out: cubic-bezier(0,0,.2,1)`, `--ease-in-out: cubic-bezier(.4,0,.2,1)`, `--ease-out-strong: cubic-bezier(.23,1,.32,1)`, `--ease-in-out-strong: cubic-bezier(.77,0,.175,1)`, `--ease-out-soft: cubic-bezier(.22,1,.36,1)`, `--ease-out-expo: cubic-bezier(.16,1,.3,1)`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Mintlify’s exact `#FFFFFF` canvas and `#F9F6F3` surface pairing.**
- **NEVER replace `arizonaFlare` display typography or ignore its signature scale (`50px / -0.04em (w400)`).**
- **NEVER use thick opaque borders that clash with `#F1F0EE` (`1px solid #F1F0EE`).**
- **NEVER deviate from the signature button geometry (`4px`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `JetBrains Mono`.
