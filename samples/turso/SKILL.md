---
name: taste-turso
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of turso.tech (Turso). Use when building or restyling UI pages, landing pages, dashboards, or components to match Turso's exact design language.
---

# Turso (turso.tech) Design System & Aesthetic Skill

> **Source URL**: `https://turso.tech`
> **Extracted At**: `2026-10-26T15:25:54.086Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `4630ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Deep Oceanic Teal & Neon Aquamarine Edge Database**
- **Semantic Vibe Tags**: `dark`, `database`, `sqlite`, `edge`, `aquamarine`, `teal`, `cyan`, `turso`
- **Core Signature**: Dark oceanic #0F1317 / #0D1318 canvas with rgba(40,57,68,0.6) slate-teal borders, heavy 800-weight 60px Inter display headlines (-0.025em), and high-contrast #4FF8D2 aquamarine pill CTAs.
- **Atmosphere & Contrast Strategy**: Built on a dark-mode foundation (`#0F1317` canvas -> `#0D1318` elevated surfaces) anchored by `#283945` structural borders, `Inter (800 ExtraBold)` display typography, and `#4FF8D2` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#0F1317` | `computed root canvas` | `bg-[#0F1317]` | Primary Turso page canvas |
| **surfaceElevated** | `#0D1318` | `computed card surface` | `bg-[#0D1318]` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#0D1318` | `computed secondary surface` | `bg-[#0D1318]` | Secondary interactive container / hover fill |
| **borderPrimary** | `#283945` | `computed border hairline` | `border-[#283945]` | Primary structural divider (1px solid #283945) |
| **borderSecondary** | `#283945` | `computed secondary border` | `border-[#283945]` | Secondary nested module or pill border |
| **textPrimary** | `#FFFFFF` | `computed heading color` | `text-white` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `rgba(255, 255, 255, 0.5)` | `computed body color` | `text-white/[0.5]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#4FF8D2` | `computed brand accent` | `bg-[#4FF8D2]` | Primary interactive CTA & brand highlight (9999px (Pill)) |
| **accentSecondary** | `#D946EF` | `computed secondary accent` | `text-[#D946EF]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - Subtle surface luminance transitions without saturated multi-stop gradients

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--turso-gray: #7b8690 (#7B8690);`
- `--turso-primary-aqua: #4ff8d2 (#4FF8D2);`
- `--turso-white: #fafafa (#FAFAFA);`
- `--turso-dark-blue: #121b22 (#121B22);`
- `--turso-dark-gray: #293945;`
- `--turso-medium-dark-blue: #232e36 (#232E36);`
- `--turso-blue: #0f4f62 (#0F4F62);`
- `--turso-lime: #a4df95 (#A4DF95);`
- `--turso-aqua-text: #88ffe4 (#88FFE4);`
- `--turso-light-gray: #c5cace (#C5CACE);`
- `--turso-red: #ff6663 (#FF6663);`
- `--turso-yellow: #e0ca3c (#E0CA3C);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `__Inter_f367f3, __Inter_Fallback_f367f3`
- **Section Heading Font (H2/H3)**: `__Inter_f367f3, __Inter_Fallback_f367f3`
- **Body / UI Sans Font**: `__Inter_f367f3, __Inter_Fallback_f367f3`
- **Monospace / Code Font**: `monospace`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `60px` | line-height `60px` (`leading-[1]`) | letter-spacing `-1.5px` (`tracking-[-0.025em]`) | weight `800` (`font-[800]`) | color `#FFFFFF` (`text-white`) | font `__Inter_f367f3`
- **Section H2 (Primary)**: `36px` | line-height `40px` (`leading-[1.11]`) | letter-spacing `-0.9px` (`tracking-[-0.025em]`) | weight `700` (`font-[700]`) | color `#FFFFFF` (`text-white`) | font `__Inter_f367f3`

- **Card / Feature H3**: `36px` | line-height `40px` (`leading-[1.11]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `700` (`font-[700]`) | color `#FFFFFF` (`text-white`) | font `__Inter_f367f3`
- **Body Copy (Paragraph)**: `18px` | line-height `32px` (`leading-[1.78]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `rgba(255, 255, 255, 0.5)` (`text-white/[0.5]`) | font `__Inter_f367f3`
- **Monospace / Code Block**: `13px` | line-height `24px` (`leading-[1.85]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `rgba(255, 255, 255, 0.9)` (`text-white/[0.9]`) | font `monospace`

### Extracted CSS Typography Variables
- `--font-inter: "__Inter_f367f3","__Inter_Fallback_f367f3";`
- `--font-geist-mono: "__GeistMono_46451f",ui-monospace,SFMono-Regular,Roboto Mono,Menlo,Monaco,Liberation Mono,DejaVu Sans Mono,Courier New,monospace;`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1280px` (12x), `672px` (4x), `768px` (1x), `896px` (1x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `56px / 56px` (9x), `40px / 40px` (1x)
- **High-Frequency Grid & Flex Gaps**: `6px` (12x), `24px` (6x), `4px` (5x), `56px` (4x), `16px` (3x), `8px` (3x)


### Surface & Depth Tokens
- **Border Radius Distribution**: `8px` (19x), `16px` (17x), `12px` (10x)
- **Glassmorphism / Backdrop Blur**: `none`
- **Box-Shadow Formulas**:
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px` *(observed 2x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_20px_25px_-5px,rgba(0,0,0,0.1)_0px_8px_10px_-6px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Try Cloud free")**: height `44px`, padding `12px 24px`, radius `9999px` (`rounded-full`), bg `#4FF8D2` (`bg-[#4FF8D2]`), text `#000000` (`text-black`), border `none`, font `14px` / weight `600`
- **Cards & Containers**:
  - **Card Recipe 1 (581x430px)**: bg `#0D1318` (`bg-[#0D1318]`), border `1px solid rgba(40, 57, 69, 0.8)`, radius `12px` (`rounded-xl`), padding `0px 0px`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px`
  - **Card Recipe 2 (1116x494px)**: bg `transparent` (`bg-[transparent]`), border `1px solid rgba(40, 57, 68, 0.6)`, radius `12px` (`rounded-xl`), padding `0px 0px`
  - **Card Recipe 3 (284x236px)**: bg `transparent` (`bg-[transparent]`), border `2px solid #3A4E5C`, radius `12px` (`rounded-xl`), padding `12px 12px`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.4, 0, 0.2, 1)` (77x)
- **Transition Durations**: `0.15s` (77x)


---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Turso’s exact `#0F1317` canvas and `#0D1318` surface pairing.**
- **NEVER replace `Inter (800 ExtraBold)` display typography or ignore its signature scale (`60px / -0.025em (w800)`).**
- **NEVER use thick opaque borders that clash with `#283945` (`1px solid #283945`).**
- **NEVER deviate from the signature button geometry (`9999px (Pill)`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `JetBrains Mono`.
