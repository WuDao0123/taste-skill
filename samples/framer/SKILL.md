---
name: taste-framer
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of framer.com (Framer). Use when building or restyling UI pages, landing pages, dashboards, or components to match Framer's exact design language.
---

# Framer (framer.com) Design System & Aesthetic Skill

> **Source URL**: `https://www.framer.com`
> **Extracted At**: `2026-10-26T15:26:07.279Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `4155ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Pitch-Black Interactive Canvas & Electric #0099FF Blue Glow**
- **Semantic Vibe Tags**: `dark`, `design`, `web-builder`, `no-code`, `framer`, `electric-blue`, `gt-walsheim`, `creative`
- **Core Signature**: Pure #000000 canvas with #111111 elevated stage cards, glowing rgba(0,153,255,0.42) borders, 54px GT Walsheim Medium headlines (-0.04em tracking), and #0099FF electric blue + #FFFFFF 8px CTAs.
- **Atmosphere & Contrast Strategy**: Built on a dark-mode foundation (`#000000` canvas -> `#111111` elevated surfaces) anchored by `rgba(0, 153, 255, 0.42)` structural borders, `GT Walsheim Medium` display typography, and `#0099FF` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#000000` | `computed root canvas` | `bg-black` | Primary Framer page canvas |
| **surfaceElevated** | `#111111` | `computed card surface` | `bg-[#111111]` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#111111` | `computed secondary surface` | `bg-[#111111]` | Secondary interactive container / hover fill |
| **borderPrimary** | `rgba(0, 153, 255, 0.42)` | `computed border hairline` | `border-[rgba(0,153,255,0.42)]` | Primary structural divider (1px rgba(0,153,255,0.42)) |
| **borderSecondary** | `#0099FF` | `computed secondary border` | `border-[#0099FF]` | Secondary nested module or pill border |
| **textPrimary** | `#FFFFFF` | `computed heading color` | `text-white` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#999999` | `computed body color` | `text-[#999999]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#0099FF` | `computed brand accent` | `bg-[#0099FF]` | Primary interactive CTA & brand highlight (8px) |
| **accentSecondary** | `#FFFFFF` | `computed secondary accent` | `text-white` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)`
  - `linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 42.5%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 57.5%, rgba(0, 0, 0, 0) 100%)`
  - `radial-gradient(50% 50% at 50% 67.6%, rgb(255, 119, 110) 0%, rgb(246, 85, 73) 100%)`
  - `radial-gradient(50% 50% at 50% 67.1%, rgb(254, 205, 43) 0%, rgb(251, 178, 0) 100%)`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--token-c534b380-e14e-4ddc-9802-ad88d1f94f8e: #ffffff1a (rgba(255, 255, 255, 0.1));`
- `--token-6ecb0037-dab8-4348-b657-00f38b638028: #cbff00 (#CBFF00);`
- `--token-1ef30da2-9620-422c-b321-d10088e14610: #000 (#000000);`
- `--token-3d980185-7d0f-4837-b1d0-e3a68e16a293: #0000001a (rgba(0, 0, 0, 0.1));`
- `--token-5e0b3b72-9a97-43f8-96f2-85d741f3d8ca: #1a1a1a (#1A1A1A);`
- `--token-958e2cd1-b113-4aa3-9235-7a2b959c8feb: #000 (#000000);`
- `--token-26e3cb56-8447-4a64-9b7d-37f16a9909d4: #fff (#FFFFFF);`
- `--token-289cb3ad-ad59-4cce-aee5-0850b842d9c8: #fffc (rgba(255, 255, 255, 0.8));`
- `--token-8f5eb515-7a13-452b-a4ab-f35e2208a3f3: #fff9 (rgba(255, 255, 255, 0.6));`
- `--token-f5637926-8ee6-41cb-a320-ec3462d62cd5: #fff6 (rgba(255, 255, 255, 0.4));`
- `--token-bd71055c-0a2c-4476-8cc9-4310acba652d: #09f (#0099FF);`
- `--token-eb0d9e00-7216-491c-99d5-7c1c2f3d0dbe: #05f (#0055FF);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `"GT Walsheim Medium", "GT Walsheim Medium Placeholder", sans-serif`
- **Section Heading Font (H2/H3)**: `"GT Walsheim Medium", "GT Walsheim Medium Placeholder", sans-serif`
- **Body / UI Sans Font**: `"Inter Variable", "Inter Variable Placeholder", sans-serif`
- **Monospace / Code Font**: `"JetBrains Mono", "JetBrains Mono Placeholder", sans-serif`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `54px` | line-height `54px` (`leading-[1]`) | letter-spacing `-2.16px` (`tracking-[-0.04em]`) | weight `500` (`font-[500]`) | color `#FFFFFF` (`text-white`) | font `GT Walsheim Medium`
- **Section H2 (Primary)**: `54px` | line-height `54px` (`leading-[1]`) | letter-spacing `-2.16px` (`tracking-[-0.04em]`) | weight `500` (`font-[500]`) | color `#FFFFFF` (`text-white`) | font `GT Walsheim Medium`
- **Section H2 (Secondary)**: `44px` | line-height `48.4px` (`leading-[1.1]`) | letter-spacing `-1.76px` (`tracking-[-0.04em]`) | weight `500` (`font-[500]`) | color `#FFFFFF` (`text-white`) | font `GT Walsheim Medium`
- **Card / Feature H3**: `18px` | line-height `24.3px` (`leading-[1.35]`) | letter-spacing `-0.2px` (`tracking-[-0.011em]`) | weight `400` (`font-[400]`) | color `#FFFFFF` (`text-white`) | font `Inter Variable`
- **Body Copy (Paragraph)**: `18px` | line-height `24.3px` (`leading-[1.35]`) | letter-spacing `-0.2px` (`tracking-[-0.011em]`) | weight `400` (`font-[400]`) | color `rgba(255, 255, 255, 0.6)` (`text-white/[0.6]`) | font `Inter Variable`
- **Monospace / Code Block**: `13px` | line-height `16.9px` (`leading-[1.3]`) | letter-spacing `-0.01px` (`tracking-[-0.001em]`) | weight `400` (`font-[400]`) | color `#FFFFFF` (`text-white`) | font `JetBrains Mono`

### Extracted CSS Typography Variables
- `--font-variation-settings: normal;`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1200px` (11x), `660px` (1x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `120px / 120px` (2x), `64px / 0px` (1x), `100px / 100px` (1x), `20px / 120px` (1x)
- **High-Frequency Grid & Flex Gaps**: `10px` (154x), `15px` (53x), `6px` (42x), `8px` (28x), `5px` (24x), `20px` (14x)


### Surface & Depth Tokens
- **Border Radius Distribution**: `15px` (70x), `8px` (56x), `6px` (34x), `4px` (23x), `20px` (20x), `5px` (9x)
- **Glassmorphism / Backdrop Blur**: `blur(5px)`
- **Box-Shadow Formulas**:
  - `rgba(255, 255, 255, 0.35) 0px 1px 1px 0px inset, rgba(255, 255, 255, 0.35) 0px -1px 1px 0px inset` *(observed 3x in DOM, Tailwind: `shadow-[rgba(255,255,255,0.35)_0px_1px_1px_0px_inset,rgba(255,255,255,0.35)_0px_-1px_1px_0px_inset]`)*
  - `rgba(0, 0, 0, 0.1) 0px 1px 2px 0px` *(observed 3x in DOM, Tailwind: `shadow-[rgba(0,0,0,0.1)_0px_1px_2px_0px]`)*
  - `rgba(255, 255, 255, 0.08) 0px 0px 0px 1px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(255,255,255,0.08)_0px_0px_0px_1px]`)*
  - `rgba(0, 153, 255, 0.15) 0px 1px 2px 0px, rgba(0, 153, 255, 0.2) 0px 2px 4px 0px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(0,153,255,0.15)_0px_1px_2px_0px,rgba(0,153,255,0.2)_0px_2px_4px_0px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Sign up")**: height `30px`, padding `8px 10px`, radius `8px` (`rounded-lg`), bg `#FFFFFF` (`bg-white`), text `#0000EE` (`text-[#0000EE]`), border `none`, font `12px` / weight `400`
  - **Button Variant 2 ("Get started for free")**: height `34px`, padding `10px 14px`, radius `8px` (`rounded-lg`), bg `#FFFFFF` (`bg-white`), text `#0000EE` (`text-[#0000EE]`), border `none`, font `12px` / weight `400`
  - **Button Variant 3 ("Copy")**: height `30px`, padding `0px 10px`, radius `8px` (`rounded-lg`), bg `#1F1F1F` (`bg-[#1F1F1F]`), text `#000000` (`text-black`), border `none`, font `12px` / weight `400`
- **Cards & Containers**:


### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.16, 1, 0.3, 1)`
- **Transition Durations**: `0.15s`, `0.25s`


---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Framer’s exact `#000000` canvas and `#111111` surface pairing.**
- **NEVER replace `GT Walsheim Medium` display typography or ignore its signature scale (`54px / -0.04em (w500)`).**
- **NEVER use thick opaque borders that clash with `rgba(0, 153, 255, 0.42)` (`1px rgba(0,153,255,0.42)`).**
- **NEVER deviate from the signature button geometry (`8px`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `JetBrains Mono`.
