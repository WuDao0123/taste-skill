---
name: taste-attio
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of attio.com (Attio). Use when building or restyling UI pages, landing pages, dashboards, or components to match Attio's exact design language.
---

# Attio (attio.com) Design System & Aesthetic Skill

> **Source URL**: `https://attio.com`
> **Extracted At**: `2026-10-26T15:26:03.339Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `4788ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Next-Gen CRM Spreadsheet-Grid Precision & Inter Display**
- **Semantic Vibe Tags**: `light`, `crm`, `saas`, `data-grid`, `bento`, `attio`, `inter-display`, `precision`
- **Core Signature**: Crisp #F3F4F6 / #FFFFFF daylight UI with exposed #E4E7EC 1px data-table grid lines, 64px Inter Display headlines (0.95 line-height, -0.02em), JetBrains Mono badges, and #1C1D1F monochrome controls.
- **Atmosphere & Contrast Strategy**: Built on a light-mode foundation (`#FFFFFF` canvas -> `#F3F4F6` elevated surfaces) anchored by `#E4E7EC` structural borders, `interDisplay` display typography, and `#1C1D1F` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#FFFFFF` | `computed root canvas` | `bg-white` | Primary Attio page canvas |
| **surfaceElevated** | `#F3F4F6` | `computed card surface` | `bg-[#F3F4F6]` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#FAFAFB` | `computed secondary surface` | `bg-[#FAFAFB]` | Secondary interactive container / hover fill |
| **borderPrimary** | `#E4E7EC` | `computed border hairline` | `border-[#E4E7EC]` | Primary structural divider (1px solid #E4E7EC) |
| **borderSecondary** | `rgba(0, 0, 0, 0.05)` | `computed secondary border` | `border-black/[0.05]` | Secondary nested module or pill border |
| **textPrimary** | `#1C1D1F` | `computed heading color` | `text-[#1C1D1F]` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#6F7988` | `computed body color` | `text-[#6F7988]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#1C1D1F` | `computed brand accent` | `bg-[#1C1D1F]` | Primary interactive CTA & brand highlight (10px) |
| **accentSecondary** | `#101010` | `computed secondary accent` | `text-[#101010]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(lab(99.9987 0.0337958 0.000309944), lab(99.9987 0.0337958 0.000309944))`
  - `radial-gradient(at 50% -10%, lab(12.7212 0.103362 -2.22102) 0%, lab(12.7212 0.103362 -2.22102) 100%)`
  - `radial-gradient(90% 80% at 50% 100%, rgb(230, 236, 255) 0%, rgb(188, 203, 255) 45%, rgb(134, 160, 238) 100%)`
  - `repeating-linear-gradient(90deg, oklab(0.999997 0.0000899732 0.000023365 / 0.78) 0px, oklab(0.999997 0.0000899732 0.000023365 / 0.78) 1px, rgba(0, 0, 0, 0) 1px, rgba(0, 0, 0, 0) 8px)`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--color-blue-100: lab(94.5144% -.645697 -8.23606) (#E8F0FF);`
- `--color-blue-200: lab(87.1089% -1.43275 -19.5035) (#C8DCFF);`
- `--color-blue-300: lab(74.4638% .491381 -39.1192) (#94B9FF);`
- `--color-blue-400: lab(64.9619% 2.48078 -48.6699) (#709FF5);`
- `--color-blue-450: lab(57.9113% 6.67286 -58.8402) (#538BF3);`
- `--color-blue-500: lab(47.8503% 16.7831 -73.4422) (#266DF0);`
- `--color-blue-600: lab(39.8546% 12.4429 -60.277) (#245BC2);`
- `--color-blue-800: lab(13.0867% .526637 -12.4652) (#1A2233);`
- `--color-black-0: lab(0% 0 0) (#000000);`
- `--color-black-50: lab(4.67701% 0 0) (#101010);`
- `--color-black-100: lab(10.7201% -.0959039 -1.54182) (#1C1D1F);`
- `--color-black-200: lab(12.7212% .103362 -2.22102) (#202124);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `interDisplay, "interDisplay Fallback"`
- **Section Heading Font (H2/H3)**: `interDisplay, "interDisplay Fallback"`
- **Body / UI Sans Font**: `inter, "inter Fallback"`
- **Monospace / Code Font**: `"JetBrains Mono", "JetBrains Mono Fallback"`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `64px` | line-height `60.8px` (`leading-[0.95]`) | letter-spacing `-1.28px` (`tracking-[-0.02em]`) | weight `600` (`font-[600]`) | color `#1C1D1F` (`text-[#1C1D1F]`) | font `interDisplay`
- **Section H2 (Primary)**: `56px` | line-height `56px` (`leading-[1]`) | letter-spacing `-0.84px` (`tracking-[-0.015em]`) | weight `500` (`font-[500]`) | color `#FFFFFF` (`text-white`) | font `interDisplay`
- **Section H2 (Secondary)**: `40px` | line-height `44px` (`leading-[1.1]`) | letter-spacing `-0.4px` (`tracking-[-0.01em]`) | weight `500` (`font-[500]`) | color `#1C1D1F` (`text-[#1C1D1F]`) | font `interDisplay`
- **Card / Feature H3**: `24px` | line-height `27.6px` (`leading-[1.15]`) | letter-spacing `-0.24px` (`tracking-[-0.01em]`) | weight `500` (`font-[500]`) | color `#1C1D1F` (`text-[#1C1D1F]`) | font `interDisplay`
- **Body Copy (Paragraph)**: `18px` | line-height `23.4px` (`leading-[1.3]`) | letter-spacing `-0.18px` (`tracking-[-0.01em]`) | weight `500` (`font-[500]`) | color `#6F7988` (`text-[#6F7988]`) | font `inter`
- **Monospace / Code Block**: `10px` | line-height `15px` (`leading-[1.5]`) | letter-spacing `-0.16px` (`tracking-[-0.016em]`) | weight `500` (`font-[500]`) | color `#1C1D1F` (`text-[#1C1D1F]`) | font `JetBrains Mono`

### Extracted CSS Typography Variables
- `--font-weight-light: 300;`
- `--font-weight-normal: 400;`
- `--font-weight-medium: 500;`
- `--font-weight-semibold: 600;`
- `--font-weight-bold: 700;`
- `--text-xs: .75rem;`
- `--text-xs--font-weight: 500;`
- `--text-xs--line-height: 1.125rem;`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1440px` (6x), `720px` (1x), `896px` (1x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `112px / 80px` (3x), `96px / 0px` (1x), `116px / 80px` (1x), `152px / 80px` (1x)
- **High-Frequency Grid & Flex Gaps**: `6px` (44x), `4px` (41x), `8px` (40x), `10px` (25x), `normal 6px` (17x), `1px` (14x)
- **Extracted Spacing & Radius Variables**: `--radius-xs: .125rem`, `--radius-sm: .25rem`, `--radius-md: .375rem`, `--radius-lg: .5rem`, `--radius-xl: .75rem`, `--spacing: .25rem`, `--animate-productivity-intro-width: productivity-intro-width .8s linear`, `--results-gap: 6px`, `--columns: 4`, `--prompt-padding-x: clamp(16px, calc(var(--prompt-height) / 3), 40px)`

### Surface & Depth Tokens
- **Border Radius Distribution**: `8px` (43x), `6px` (24x), `10px` (23x), `5px` (21x), `9px` (17x), `7px` (16x)
- **Glassmorphism / Backdrop Blur**: `blur(12px)`
- **Box-Shadow Formulas**:
  - `rgba(0, 0, 0, 0.04) 0px 1px 3px 0px, rgba(28, 40, 64, 0.18) 0px 0px 2px 0px` *(observed 8x in DOM, Tailwind: `shadow-[rgba(0,0,0,0.04)_0px_1px_3px_0px,rgba(28,40,64,0.18)_0px_0px_2px_0px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, lab(99.9987 0.0337958 0.000309944) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0) 0px 0px 0px 0px` *(observed 7x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,lab(99.9987_0.0337958_0.000309944)_0px_0px_0px_0.5px,rgba(0,0,0,0)_0px_0px_0px_0px]`)*
  - `rgba(11, 13, 24, 0.06) 0px 0px 0px 1px, rgba(11, 13, 24, 0.024) 0px 1px 2px 0px, rgba(11, 13, 24, 0.03) 0px 3px 6px 0px, rgba(11, 13, 24, 0.035) 0px 8px 14px 0px, rgba(11, 13, 24, 0.04) 0px 16px 28px 0px` *(observed 4x in DOM, Tailwind: `shadow-[rgba(11,13,24,0.06)_0px_0px_0px_1px,rgba(11,13,24,0.024)_0px_1px_2px_0px,rgba(11,13,24,0.03)_0px_3px_6px_0px,rgba(11,13,24,0.035)_0px_8px_14px_0px,rgba(11,13,24,0.04)_0px_16px_28px_0px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(15, 107, 233, 0.12) 0px 2px 4px -2px, rgba(15, 107, 233, 0.08) 0px 3px 6px -2px` *(observed 4x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(15,107,233,0.12)_0px_2px_4px_-2px,rgba(15,107,233,0.08)_0px_3px_6px_-2px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Talk to sales")**: height `36px`, padding `0px 12px`, radius `10px` (`rounded-xl`), bg `#FFFFFF` (`bg-white`), text `#2E3238` (`text-[#2E3238]`), border `1px solid #CAD0D9`, font `14px` / weight `500`
  - **Button Variant 2 ("Talk to sales")**: height `36px`, padding `0px 12px`, radius `10px` (`rounded-xl`), bg `#101010` (`bg-[#101010]`), text `#EDEFF3` (`text-[#EDEFF3]`), border `1px solid #2E3238`, font `14px` / weight `500`
  - **Button Variant 3 ("Subscribe")**: height `40px`, padding `0px 12px`, radius `10px` (`rounded-xl`), bg `#202124` (`bg-[#202124]`), text `#F3F4F6` (`text-[#F3F4F6]`), border `1px solid #505967`, font `14px` / weight `500`
  - **Button Variant 4 ("Continue")**: height `36px`, padding `0px 12px`, radius `10px` (`rounded-xl`), bg `#202124` (`bg-[#202124]`), text `#F3F4F6` (`text-[#F3F4F6]`), border `1px solid #505967`, font `14px` / weight `500`
- **Cards & Containers**:
  - **Card Recipe 1 (1026x588px)**: bg `#F3F4F6` (`bg-[#F3F4F6]`), border `none`, radius `16px` (`rounded-2xl`), padding `0px 6px`, shadow `rgba(11, 13, 24, 0.06) 0px 0px 0px 1px, rgba(11, 13, 24, 0.024) 0px 1px 2px 0px, rgba(11, 13, 24, 0.03) 0px 3px 6px 0px, rgba(11, 13, 24, 0.035) 0px 8px 14px 0px, rgba(11, 13, 24, 0.04) 0px 16px 28px 0px`
  - **Card Recipe 2 (1015x552px)**: bg `#FFFFFF` (`bg-white`), border `1px solid rgba(0, 0, 0, 0.05)`, radius `12px` (`rounded-xl`), padding `0px 0px`
  - **Card Recipe 3 (591x102px)**: bg `#FFFFFF` (`bg-white`), border `1px solid #E5E7EB`, radius `14px` (`rounded-2xl`), padding `0px 0px`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.04) 0px 12px 30px 0px`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0, 0, 0, 1)` (18x), `cubic-bezier(0.32, 0, 0.67, 0)` (17x), `cubic-bezier(0.2, 0, 0, 1)` (16x), `cubic-bezier(0.4, 0, 0.2, 1)` (8x)
- **Transition Durations**: `0.5s` (22x), `0.3s` (20x), `0.2s` (18x), `0.32s` (5x)
- **Named Motion Tokens**: `--ease-in: cubic-bezier(.3, 0, 1, 1)`, `--ease-out: cubic-bezier(0, 0, 0, 1)`, `--ease-reveal: cubic-bezier(0, 0, .58, 1)`, `--ease-in-out: cubic-bezier(.2, 0, 0, 1)`, `--ease-in-cubic: cubic-bezier(.32, 0, .67, 0)`, `--ease-out-cubic: cubic-bezier(.33, 1, .68, 1)`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Attio’s exact `#FFFFFF` canvas and `#F3F4F6` surface pairing.**
- **NEVER replace `interDisplay` display typography or ignore its signature scale (`64px / 0.95 (w600)`).**
- **NEVER use thick opaque borders that clash with `#E4E7EC` (`1px solid #E4E7EC`).**
- **NEVER deviate from the signature button geometry (`10px`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `JetBrains Mono`.
