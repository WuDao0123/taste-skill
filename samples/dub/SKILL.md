---
name: taste-dub
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of dub.co (Dub). Use when building or restyling UI pages, landing pages, dashboards, or components to match Dub's exact design language.
---

# Dub (dub.co) Design System & Aesthetic Skill

> **Source URL**: `https://dub.co`
> **Extracted At**: `2026-10-26T15:25:48.440Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `4160ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Modern Link Attribution & Crisp Satoshi/Geist Minimalist**
- **Semantic Vibe Tags**: `light`, `analytics`, `marketing`, `saas`, `dub`, `satoshi`, `geist-mono`, `minimalist`
- **Core Signature**: Airy #FAFAFA canvas with #FFFFFF analytics cards, #E5E5E5 1px borders, geometric Satoshi 48px display headings, GeistMono shortlinks, and high-contrast #000000 8px-radius primary buttons.
- **Atmosphere & Contrast Strategy**: Built on a light-mode foundation (`#FAFAFA` canvas -> `#FFFFFF` elevated surfaces) anchored by `#E5E5E5` structural borders, `Satoshi` display typography, and `#000000` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#FAFAFA` | `computed root canvas` | `bg-[#FAFAFA]` | Primary Dub page canvas |
| **surfaceElevated** | `#FFFFFF` | `computed card surface` | `bg-white` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#262626` | `computed secondary surface` | `bg-[#262626]` | Secondary interactive container / hover fill |
| **borderPrimary** | `#E5E5E5` | `computed border hairline` | `border-[#E5E5E5]` | Primary structural divider (1px solid #E5E5E5) |
| **borderSecondary** | `#D4D4D4` | `computed secondary border` | `border-[#D4D4D4]` | Secondary nested module or pill border |
| **textPrimary** | `#171717` | `computed heading color` | `text-[#171717]` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#737373` | `computed body color` | `text-[#737373]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#000000` | `computed brand accent` | `bg-black` | Primary interactive CTA & brand highlight (8px) |
| **accentSecondary** | `#F5F5F5` | `computed secondary accent` | `text-[#F5F5F5]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `conic-gradient(from -81deg, rgb(255, 0, 0), rgb(234, 179, 8) 99deg, rgb(92, 255, 128) 162deg, rgb(0, 255, 249) 216deg, rgb(58, 139, 253) 288deg, rgb(133, 90, 252))`
  - `radial-gradient(closest-side, rgb(249, 115, 22), rgb(0, 0, 0))`
  - `linear-gradient(to top, rgb(245, 245, 245), rgba(245, 245, 245, 0))`
  - `conic-gradient(from 279deg, rgb(255, 0, 0), rgb(234, 179, 8) 99deg, rgb(92, 255, 128) 162deg, rgb(0, 255, 249) 216deg, rgb(58, 139, 253) 288deg, rgb(133, 90, 252) 360deg)`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--gray1: hsl(0, 0%, 99%) (#FCFCFC);`
- `--gray2: hsl(0, 0%, 97.3%) (#F8F8F8);`
- `--gray3: hsl(0, 0%, 95.1%) (#F3F3F3);`
- `--gray4: hsl(0, 0%, 93%) (#EDEDED);`
- `--gray5: hsl(0, 0%, 90.9%) (#E8E8E8);`
- `--gray6: hsl(0, 0%, 88.7%) (#E2E2E2);`
- `--gray7: hsl(0, 0%, 85.8%) (#DBDBDB);`
- `--gray8: hsl(0, 0%, 78%) (#C7C7C7);`
- `--gray9: hsl(0, 0%, 56.1%) (#8F8F8F);`
- `--gray10: hsl(0, 0%, 52.3%) (#858585);`
- `--gray11: hsl(0, 0%, 43.5%) (#6F6F6F);`
- `--gray12: hsl(0, 0%, 9%) (#171717);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `satoshi, "satoshi Fallback", system-ui, sans-serif`
- **Section Heading Font (H2/H3)**: `satoshi, "satoshi Fallback", system-ui, sans-serif`
- **Body / UI Sans Font**: `Inter, "Inter Fallback", system-ui, sans-serif`
- **Monospace / Code Font**: `GeistMono, ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace, ui-monospace, monospace`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `48px` | line-height `55.2px` (`leading-[1.15]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `500` (`font-[500]`) | color `#171717` (`text-[#171717]`) | font `satoshi`
- **Section H2 (Primary)**: `48px` | line-height `48px` (`leading-[1]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `500` (`font-[500]`) | color `#171717` (`text-[#171717]`) | font `satoshi`

- **Card / Feature H3**: `16px` | line-height `24px` (`leading-[1.5]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `500` (`font-[500]`) | color `#0A0A0A` (`text-[#0A0A0A]`) | font `Inter`
- **Body Copy (Paragraph)**: `20px` | line-height `28px` (`leading-[1.4]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#525252` (`text-[#525252]`) | font `Inter`
- **Monospace / Code Block**: `14px` | line-height `20px` (`leading-[1.43]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#24292E` (`text-[#24292E]`) | font `GeistMono`

### Extracted CSS Typography Variables
- `--font-geist-mono: "GeistMono",ui-monospace,SFMono-Regular,Roboto Mono,Menlo,Monaco,Liberation Mono,DejaVu Sans Mono,Courier New,monospace;`
- `--font-satoshi: "satoshi","satoshi Fallback";`
- `--font-inter: "Inter","Inter Fallback";`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1080px` (6x), `800px` (5x), `672px` (2x), `1024px` (1x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `80px / 40px` (2x), `64px / 80px` (1x), `160px / 128px` (1x), `48px / 0px` (1x)
- **High-Frequency Grid & Flex Gaps**: `8px` (56x), `4px` (20x), `16px` (15x), `6px` (10x), `2px` (9x), `12px` (6x)
- **Extracted Spacing & Radius Variables**: `--thumb-radius: 13px`, `--border-radius: 8px`, `--sheet-width: 540px`

### Surface & Depth Tokens
- **Border Radius Distribution**: `12px` (59x), `8px` (34x), `6px` (17x), `2px` (8x), `4px` (5x), `20px 20px 0px 0px` (3x)
- **Glassmorphism / Backdrop Blur**: `blur(16px)`
- **Box-Shadow Formulas**:
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` *(observed 8x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px]`)*
  - `rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px` *(observed 1x in DOM, Tailwind: `shadow-[rgb(255,255,255)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_0px_0px_4px,rgba(0,0,0,0)_0px_0px_0px_0px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.09) 0px 20px 20px 0px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.09)_0px_20px_20px_0px]`)*
  - `rgb(255, 255, 255) 0px 0px 0px 0px, rgba(59, 130, 246, 0.5) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px` *(observed 1x in DOM, Tailwind: `shadow-[rgb(255,255,255)_0px_0px_0px_0px,rgba(59,130,246,0.5)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_10px_15px_-3px,rgba(0,0,0,0.1)_0px_4px_6px_-4px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Sign up")**: height `32px`, padding `0px 16px`, radius `8px` (`rounded-lg`), bg `#000000` (`bg-black`), text `#FFFFFF` (`text-white`), border `1px solid #000000`, font `14px` / weight `400`
  - **Button Variant 2 ("Start for free")**: height `38px`, padding `8px 20px`, radius `8px` (`rounded-lg`), bg `#000000` (`bg-black`), text `#FFFFFF` (`text-white`), border `1px solid #000000`, font `14px` / weight `500`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
  - **Button Variant 3 ("Start for free")**: height `40px`, padding `0px 20px`, radius `8px` (`rounded-lg`), bg `#FFFFFF` (`bg-white`), text `#171717` (`text-[#171717]`), border `1px solid #E5E5E5`, font `14px` / weight `500`
  - **Button Variant 4 ("Log in")**: height `32px`, padding `0px 16px`, radius `8px` (`rounded-lg`), bg `#FFFFFF` (`bg-white`), text `#171717` (`text-[#171717]`), border `1px solid #E5E5E5`, font `14px` / weight `400`
- **Cards & Containers**:
  - **Card Recipe 1 (908x580px)**: bg `transparent` (`bg-[transparent]`), border `1px solid #E5E5E5`, radius `20px 20px 0px 0px` (`rounded-3xl`), padding `12px 12px`
  - **Card Recipe 2 (882x567px)**: bg `#FFFFFF` (`bg-white`), border `1px solid #D4D4D4`, radius `12px 12px 0px 0px` (`rounded-xl`), padding `0px 0px`
  - **Card Recipe 3 (287x270px)**: bg `transparent` (`bg-[transparent]`), border `1px solid #E5E5E5`, radius `8px` (`rounded-lg`), padding `0px 0px`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.4, 0, 0.2, 1)` (76x)
- **Transition Durations**: `0.15s` (40x), `0.3s` (13x), `0.2s` (12x), `0.5s` (9x)


---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Dub’s exact `#FAFAFA` canvas and `#FFFFFF` surface pairing.**
- **NEVER replace `Satoshi` display typography or ignore its signature scale (`48px / 1.15 (w500)`).**
- **NEVER use thick opaque borders that clash with `#E5E5E5` (`1px solid #E5E5E5`).**
- **NEVER deviate from the signature button geometry (`8px`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `GeistMono`.
