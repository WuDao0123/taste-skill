---
name: taste-workos
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of workos.com (WorkOS). Use when building or restyling UI pages, landing pages, dashboards, or components to match WorkOS's exact design language.
---

# WorkOS (workos.com) Design System & Aesthetic Skill

> **Source URL**: `https://workos.com`
> **Extracted At**: `2026-10-26T15:25:59.214Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `4869ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Enterprise-Ready Architectural Precision & Untitled Sans**
- **Semantic Vibe Tags**: `light`, `enterprise`, `sso`, `auth`, `saas`, `workos`, `untitled-sans`, `indigo`
- **Core Signature**: Cool porcelain #F9F9FB canvas with #FFFFFF enterprise cards, #E8EAED 1px hairlines, monumental 80px Untitled Sans headings with ultra-tight -0.07em tracking, and #6363F1 indigo + #23F0C3 mint accents.
- **Atmosphere & Contrast Strategy**: Built on a light-mode foundation (`#F9F9FB` canvas -> `#FFFFFF` elevated surfaces) anchored by `#E8EAED` structural borders, `Untitled Sans` display typography, and `#6363F1` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#F9F9FB` | `computed root canvas` | `bg-[#F9F9FB]` | Primary WorkOS page canvas |
| **surfaceElevated** | `#FFFFFF` | `computed card surface` | `bg-white` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#F9F9FB` | `computed secondary surface` | `bg-[#F9F9FB]` | Secondary interactive container / hover fill |
| **borderPrimary** | `#E8EAED` | `computed border hairline` | `border-[#E8EAED]` | Primary structural divider (1px solid #E8EAED) |
| **borderSecondary** | `rgba(0, 0, 49, 0.1)` | `computed secondary border` | `border-[rgba(0,0,49,0.1)]` | Secondary nested module or pill border |
| **textPrimary** | `#29363D` | `computed heading color` | `text-[#29363D]` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#5E6C75` | `computed body color` | `text-[#5E6C75]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#6363F1` | `computed brand accent` | `bg-[#6363F1]` | Primary interactive CTA & brand highlight (100px (Pill)) |
| **accentSecondary** | `#23F0C3` | `computed secondary accent` | `text-[#23F0C3]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(45deg, rgb(166, 131, 255), rgb(119, 114, 229) 28%, rgb(104, 124, 254) 32%, rgb(91, 177, 226) 44%, rgb(103, 123, 255) 65%, rgba(103, 123, 255, 0))`
  - `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))`
  - `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), linear-gradient(135deg, rgb(238, 238, 238), rgb(231, 231, 231))`
  - `conic-gradient(from 90deg, rgb(192, 144, 255) 0.2deg, rgb(192, 167, 255) 41deg, rgb(159, 154, 255) 137deg, rgb(104, 124, 254) 179.165deg, rgb(104, 196, 249) 215deg, rgb(103, 123, 255) 331deg)`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--black: #29363d (#29363D);`
- `--foreground-light-2: #656b8a (#656B8A);`
- `--foreground-dark-2: #c5cae8 (#C5CAE8);`
- `--brand-purple: #6363f1 (#6363F1);`
- `--black-dark: #030628;`
- `--foreground-light-3: #8f96bd (#8F96BD);`
- `--section-light: #f9f9fb (#F9F9FB);`
- `--cool-gray: #eceff1 (#ECEFF1);`
- `--foreground-dark-3: #878ca6 (#878CA6);`
- `--border-color: #e8eaed (#E8EAED);`
- `--border-dark: #2b335a (#2B335A);`
- `--dark-accent: #23f0c3 (#23F0C3);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `"Untitled Sans", "Untitled Fallback", Arial, sans-serif`
- **Section Heading Font (H2/H3)**: `"Untitled Sans", "Untitled Fallback", Arial, sans-serif`
- **Body / UI Sans Font**: `"Untitled Sans", "Untitled Fallback", Arial, sans-serif`
- **Monospace / Code Font**: `"IBM Plex Mono", "Andale Mono", "Ubuntu Mono", monospace`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `80px` | line-height `84px` (`leading-[1.05]`) | letter-spacing `-5.6px` (`tracking-[-0.07em]`) | weight `500` (`font-[500]`) | color `#29363D` (`text-[#29363D]`) | font `Untitled Sans`
- **Section H2 (Primary)**: `28px` | line-height `33.6px` (`leading-[1.2]`) | letter-spacing `-1.4px` (`tracking-[-0.05em]`) | weight `500` (`font-[500]`) | color `#6363F1` (`text-[#6363F1]`) | font `Untitled Sans`

- **Card / Feature H3**: Subheading with crisp line-height
- **Body Copy (Paragraph)**: `19px` | line-height `30.4px` (`leading-[1.6]`) | letter-spacing `-0.19px` (`tracking-[-0.01em]`) | weight `400` (`font-[400]`) | color `#656B8A` (`text-[#656B8A]`) | font `Untitled Sans`
- **Monospace / Code Block**: `12px` | line-height `18px` (`leading-[1.5]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#6B84FF` (`text-[#6B84FF]`) | font `IBM Plex Mono`



---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1200px` (10x), `670px` (1x), `820px` (1x), `768px` (1x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `120px / 120px` (5x), `120px / 0px` (1x)
- **High-Frequency Grid & Flex Gaps**: `12px` (3x), `4px` (2x), `75px 96px` (2x), `48px` (2x), `20px` (1x), `2px 16px` (1x)
- **Extracted Spacing & Radius Variables**: `--um-cta-radius: 100px`, `--page-padding: 56px`

### Surface & Depth Tokens
- **Border Radius Distribution**: `4px` (41x), `16px` (14x), `7px` (12x), `8px` (7x), `50px` (2x), `24px` (1x)
- **Glassmorphism / Backdrop Blur**: `none`
- **Box-Shadow Formulas**:
  - `rgba(0, 0, 0, 0.04) 0px 0px 0px 1px, rgba(0, 0, 0, 0.17) 0px 5px 10px -4px` *(observed 14x in DOM, Tailwind: `shadow-[rgba(0,0,0,0.04)_0px_0px_0px_1px,rgba(0,0,0,0.17)_0px_5px_10px_-4px]`)*
  - `rgba(0, 0, 0, 0.2) 0px 1px 2px 0px inset` *(observed 14x in DOM, Tailwind: `shadow-[rgba(0,0,0,0.2)_0px_1px_2px_0px_inset]`)*
  - `rgba(0, 0, 0, 0.03) 0px 10px 3px 0px, rgb(255, 255, 255) 1px 1px 1px 0px inset, rgba(0, 0, 0, 0.05) 0px -1px 10px 0px inset, rgba(0, 0, 0, 0.2) 0px 1px 1px 0px, rgba(0, 0, 0, 0.17) 0px 2px 5px 0px` *(observed 14x in DOM, Tailwind: `shadow-[rgba(0,0,0,0.03)_0px_10px_3px_0px,rgb(255,255,255)_1px_1px_1px_0px_inset,rgba(0,0,0,0.05)_0px_-1px_10px_0px_inset,rgba(0,0,0,0.2)_0px_1px_1px_0px,rgba(0,0,0,0.17)_0px_2px_5px_0px]`)*
  - `rgba(228, 239, 244, 0.06) 0px 0px 0px 1px inset` *(observed 11x in DOM, Tailwind: `shadow-[rgba(228,239,244,0.06)_0px_0px_0px_1px_inset]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Get started")**: height `43px`, padding `12px 24px`, radius `100px` (`rounded-[100px]`), bg `#6363F1` (`bg-[#6363F1]`), text `#FFFFFF` (`text-white`), border `none`, font `16px` / weight `500`, shadow `rgba(23, 6, 100, 0.035) 0px 24px 22px 0px, rgba(23, 6, 100, 0.055) 0px 8.5846px 8.03036px 0px, rgba(23, 6, 100, 0.067) 0px 4.77692px 3.89859px 0px, rgba(23, 6, 100, 0.082) 0px 2.63479px 1.91116px 0px, rgba(23, 6, 100, 0.12) 0px 1.15891px 0.755676px 0px`
  - **Button Variant 2 ("Read the docs")**: height `43px`, padding `12px 24px`, radius `100px` (`rounded-[100px]`), bg `#23F0C3` (`bg-[#23F0C3]`), text `#030628` (`text-[#030628]`), border `none`, font `16px` / weight `500`, shadow `rgba(35, 240, 195, 0.7) 0px 0px 14px 0px, rgb(25, 203, 164) 0px 0px 0px 1px inset`
  - **Button Variant 3 ("Read more")**: height `51px`, padding `12px 18px`, radius `100px` (`rounded-[100px]`), bg `transparent` (`bg-[transparent]`), text `#6363F1` (`text-[#6363F1]`), border `1px solid #E8EAED`, font `14px` / weight `500`
  - **Button Variant 4 ("Read more")**: height `43px`, padding `12px 18px`, radius `100px` (`rounded-[100px]`), bg `transparent` (`bg-[transparent]`), text `#6363F1` (`text-[#6363F1]`), border `1px solid #E8EAED`, font `14px` / weight `500`
- **Cards & Containers**:
  - **Card Recipe 1 (654x108px)**: bg `transparent` (`bg-[transparent]`), border `7px solid #F0F0F5`, radius `46px 46px 0px 0px` (`rounded-[46px 46px 0px 0px]`), padding `0px 0px`
  - **Card Recipe 2 (207x155px)**: bg `transparent` (`bg-[transparent]`), border `none`, radius `8px` (`rounded-lg`), padding `0px 0px`, shadow `rgba(38, 33, 84, 0.02) 0px 91px 183px 0px, rgba(38, 33, 84, 0.027) 0px 38.0176px 76.453px 0px, rgba(38, 33, 84, 0.035) 0px 20.326px 40.8754px 0px, rgba(38, 33, 84, 0.043) 0px 11.3946px 22.9144px 0px, rgba(38, 33, 84, 0.05) 0px 6.05159px 12.1697px 0px, rgba(38, 33, 84, 0.07) 0px 2.5182px 5.06408px 0px`
  - **Card Recipe 3 (614x465px)**: bg `#FFFFFF` (`bg-white`), border `none`, radius `8px` (`rounded-lg`), padding `0px 0px`, shadow `rgba(17, 7, 53, 0.05) 0px 51px 78px 0px, rgba(17, 7, 53, 0.035) 0px 21.3066px 35.4944px 0px, rgba(17, 7, 53, 0.03) 0px 11.3915px 18.9418px 0px, rgba(17, 7, 53, 0.024) 0px 6.38599px 9.8801px 0px, rgba(17, 7, 53, 0.02) 0px 3.39155px 4.58665px 0px, rgba(17, 7, 53, 0.016) 0px 1.4113px 1.55262px 0px, rgba(41, 56, 78, 0.05) 0px 1px 0px 0px inset`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `ease` (41x), `ease, ease` (5x)
- **Transition Durations**: `0.2s` (30x), `0.15s` (10x), `0.2s, 0.2s` (4x), `0.2s, 0.15s` (1x)


---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for WorkOS’s exact `#F9F9FB` canvas and `#FFFFFF` surface pairing.**
- **NEVER replace `Untitled Sans` display typography or ignore its signature scale (`80px / -0.07em (w500)`).**
- **NEVER use thick opaque borders that clash with `#E8EAED` (`1px solid #E8EAED`).**
- **NEVER deviate from the signature button geometry (`100px (Pill)`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `IBM Plex Mono`.
