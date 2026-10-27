---
name: taste-loops
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of loops.so (Loops). Use when building or restyling UI pages, landing pages, dashboards, or components to match Loops's exact design language.
---

# Loops (loops.so) Design System & Aesthetic Skill

> **Source URL**: `https://loops.so`
> **Extracted At**: `2026-10-26T15:26:03.016Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `4828ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Warm Editorial SaaS & Newsreader Serif Craft**
- **Semantic Vibe Tags**: `light`, `warm`, `editorial`, `serif`, `newsreader`, `email`, `saas`, `loops`
- **Core Signature**: Warm ivory #FDFDFC / #F9F9F8 canvas with #E9E8E6 stone borders, #21201C espresso ink, refined 44px Newsreader serif display headlines (-0.02em), and #7D1B0C oxblood / #21201C pill CTAs.
- **Atmosphere & Contrast Strategy**: Built on a light-mode foundation (`#FDFDFC` canvas -> `#F9F9F8` elevated surfaces) anchored by `#E9E8E6` structural borders, `Newsreader` display typography, and `#7D1B0C` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#FDFDFC` | `computed root canvas` | `bg-[#FDFDFC]` | Primary Loops page canvas |
| **surfaceElevated** | `#F9F9F8` | `computed card surface` | `bg-[#F9F9F8]` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#F1F0EF` | `computed secondary surface` | `bg-[#F1F0EF]` | Secondary interactive container / hover fill |
| **borderPrimary** | `#E9E8E6` | `computed border hairline` | `border-[#E9E8E6]` | Primary structural divider (1px solid #E9E8E6) |
| **borderSecondary** | `#DAD9D6` | `computed secondary border` | `border-[#DAD9D6]` | Secondary nested module or pill border |
| **textPrimary** | `#21201C` | `computed heading color` | `text-[#21201C]` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#63625E` | `computed body color` | `text-[#63625E]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#7D1B0C` | `computed brand accent` | `bg-[#7D1B0C]` | Primary interactive CTA & brand highlight (40px (Pill)) |
| **accentSecondary** | `#FDFDFC` | `computed secondary accent` | `text-[#FDFDFC]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(rgb(253, 253, 252) 0%, rgb(249, 249, 248) 100%)`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--token-95e1bfcc-02e8-4fdb-8080-e342e04d4d5d: #fc5200 (#FC5200);`
- `--token-83f5fefd-8241-47f8-8f7c-5e6247fea9aa: #fdfdfc (#FDFDFC);`
- `--token-65538b51-ace3-4873-b4db-4d71bdbd1f8b: #f9f9f8 (#F9F9F8);`
- `--token-e5fe42bb-0171-444b-bb6c-b12015a4b434: #f1f0ef (#F1F0EF);`
- `--token-6b4c9de0-1933-4ebb-b983-b632663eba1c: #dad9d6 (#DAD9D6);`
- `--token-ba9e30f7-c04b-4022-9049-93bb7c16efdd: #cfceca (#CFCECA);`
- `--token-390b9784-f3ae-44d2-8ca8-55f2f52314b4: #63635e (#63635E);`
- `--token-0d7325af-cd74-4cc9-ac1e-38bcfcff3f4e: #63635e (#63635E);`
- `--token-0bef5535-3756-4c33-9bf8-2deff79b9571: #63635e (#63635E);`
- `--token-f7d4ccfc-b1b4-421c-aa01-0824d56a7930: #21201c (#21201C);`
- `--token-4a5ba685-5dc5-4059-bd17-f7c02838db5f: #21201c (#21201C);`
- `--token-6069a1bc-df72-42e6-ae5c-4cb031f2d77e: #21201c (#21201C);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `Newsreader, "Newsreader Placeholder", serif`
- **Section Heading Font (H2/H3)**: `Newsreader, "Newsreader Placeholder", serif`
- **Body / UI Sans Font**: `Inter, "Inter Placeholder", sans-serif`
- **Monospace / Code Font**: `"Fragment Mono"`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `44px` | line-height `47.5px` (`leading-[1.08]`) | letter-spacing `-0.88px` (`tracking-[-0.02em]`) | weight `500` (`font-[500]`) | color `#21201C` (`text-[#21201C]`) | font `Newsreader`
- **Section H2 (Primary)**: `44px` | line-height `48px` (`leading-[1.09]`) | letter-spacing `-1.6px` (`tracking-[-0.036em]`) | weight `500` (`font-[500]`) | color `#FFF4EC` (`text-[#FFF4EC]`) | font `Newsreader`
- **Section H2 (Secondary)**: `25.3px` | line-height `29.1px` (`leading-[1.15]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `500` (`font-[500]`) | color `#21201C` (`text-[#21201C]`) | font `Newsreader`
- **Card / Feature H3**: `30px` | line-height `33.6px` (`leading-[1.12]`) | letter-spacing `-0.6px` (`tracking-[-0.02em]`) | weight `400` (`font-[400]`) | color `#21201C` (`text-[#21201C]`) | font `ui-serif`
- **Body Copy (Paragraph)**: `20px` | line-height `28px` (`leading-[1.4]`) | letter-spacing `-0.2px` (`tracking-[-0.01em]`) | weight `400` (`font-[400]`) | color `#63635E` (`text-[#63635E]`) | font `Inter`
- **Monospace / Code Block**: `13px–14px` | line-height `1.5` (`leading-relaxed`) | font `"Fragment Mono"`

### Extracted CSS Typography Variables
- `--font-variation-settings: normal;`
- `--font-family: var(--framer-font-family);`
- `--font-style: var(--framer-font-style);`
- `--font-weight: var(--framer-font-weight);`
- `--letter-spacing: var(--framer-letter-spacing);`
- `--font-size: var(--framer-font-size);`
- `--line-height: var(--framer-line-height);`
- `--framer-link-hover-text-decoration-offset: 3px;`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1296px` (2x), `1000px` (2x), `800px` (2x), `1440px` (1x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `141px / 34px` (1x), `0px / 89px` (1x)
- **High-Frequency Grid & Flex Gaps**: `10px` (22x), `8px` (6x), `9px` (5x), `2px` (5x), `4px` (2x), `12px` (2x)
- **Extracted Spacing & Radius Variables**: `--framer-text-background-radius: initial`, `--framer-paragraph-spacing: 0px`, `--border-bottom-width: 0px`, `--border-left-width: 0px`, `--border-right-width: 0px`, `--border-top-width: 1px`

### Surface & Depth Tokens
- **Border Radius Distribution**: `6px` (15x), `4px` (6x), `7px` (5x), `8px` (4x), `9px` (3x), `14px` (2x)
- **Glassmorphism / Backdrop Blur**: `none`
- **Box-Shadow Formulas**:
  - `rgba(33, 32, 28, 0.04) 0px 1px 2px 0px` *(observed 4x in DOM, Tailwind: `shadow-[rgba(33,32,28,0.04)_0px_1px_2px_0px]`)*
  - `rgba(255, 255, 255, 0.05) 0px 1px 2px 0px inset, rgba(28, 25, 23, 0.14) 0px 2px 5px 0px, rgba(28, 25, 23, 0.3) 0px 8px 18px -12px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(255,255,255,0.05)_0px_1px_2px_0px_inset,rgba(28,25,23,0.14)_0px_2px_5px_0px,rgba(28,25,23,0.3)_0px_8px_18px_-12px]`)*
  - `rgb(218, 217, 214) 0px 0px 0px 1px inset, rgba(33, 32, 28, 0.05) 0px 1px 2px -1px, rgba(33, 32, 28, 0.22) 0px 24px 48px -24px` *(observed 1x in DOM, Tailwind: `shadow-[rgb(218,217,214)_0px_0px_0px_1px_inset,rgba(33,32,28,0.05)_0px_1px_2px_-1px,rgba(33,32,28,0.22)_0px_24px_48px_-24px]`)*
  - `rgba(33, 32, 28, 0.08) 0px 1px 3px 0px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(33,32,28,0.08)_0px_1px_3px_0px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Start for free")**: height `44px`, padding `10px 20px`, radius `40px` (`rounded-[40px]`), bg `#21201C` (`bg-[#21201C]`), text `#0000EE` (`text-[#0000EE]`), border `none`, font `12px` / weight `400`, shadow `rgba(255, 255, 255, 0.05) 0px 1px 2px 0px inset, rgba(28, 25, 23, 0.14) 0px 2px 5px 0px, rgba(28, 25, 23, 0.3) 0px 8px 18px -12px`
  - **Button Variant 2 ("Start for free")**: height `52px`, padding `14px 18px`, radius `999px` (`rounded-full`), bg `#FFF4EC` (`bg-[#FFF4EC]`), text `#FDFDFC` (`text-[#FDFDFC]`), border `none`, font `12px` / weight `400`
  - **Button Variant 3 ("Start for free")**: height `40px`, padding `8px 14px`, radius `999px` (`rounded-full`), bg `transparent` (`bg-[transparent]`), text `#FDFDFC` (`text-[#FDFDFC]`), border `none`, font `12px` / weight `400`, shadow `color(srgb 0.992157 0.992157 0.988235 / 0.04) 0px 1px 2px 0px inset, color(srgb 0.129412 0.12549 0.109804 / 0.12) 0px 2px 5px 0px`
  - **Button Variant 4 ("Segments and filters")**: height `33px`, padding `7px 13px`, radius `999px` (`rounded-full`), bg `#F9F9F8` (`bg-[#F9F9F8]`), text `#63635E` (`text-[#63635E]`), border `1px solid #E9E8E6`, font `14px` / weight `400`
- **Cards & Containers**:
  - **Card Recipe 1 (320x311px)**: bg `#F1F0EF` (`bg-[#F1F0EF]`), border `1px solid rgba(38, 38, 26, 0.08)`, radius `12px` (`rounded-xl`), padding `4px 4px`, shadow `rgba(33, 32, 28, 0.16) 0px 18px 46px 0px, rgba(33, 32, 28, 0.08) 0px 3px 10px 0px`
  - **Card Recipe 2 (310x277px)**: bg `#F9F9F8` (`bg-[#F9F9F8]`), border `1px solid #E9E8E6`, radius `8px` (`rounded-lg`), padding `0px 0px`
  - **Card Recipe 3 (920x565px)**: bg `#FDFDFC` (`bg-[#FDFDFC]`), border `1px solid #E9E8E6`, radius `14px` (`rounded-2xl`), padding `0px 0px`, shadow `rgba(0, 0, 0, 0.024) 0px 1px 2px 0px, rgba(0, 0, 0, 0.055) 0px 18px 44px 0px, color(srgb 0.992157 0.992157 0.988235 / 0.9) 0px 1px 0px 0px inset`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.16, 1, 0.3, 1), cubic-bezier(0.16, 1, 0.3, 1)` (11x), `ease` (6x), `cubic-bezier(0.12, 0.23, 0.5, 1), cubic-bezier(0.12, 0.23, 0.5, 1), cubic-bezier(0.12, 0.23, 0.5, 1), cubic-bezier(0.12, 0.23, 0.5, 1)` (3x), `ease, ease` (3x)
- **Transition Durations**: `0.42s, 0.42s` (11x), `0.15s, 0.15s, 0.15s, 0.15s` (3x), `0.15s, 0.15s` (3x), `0.12s` (3x)


---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Loops’s exact `#FDFDFC` canvas and `#F9F9F8` surface pairing.**
- **NEVER replace `Newsreader` display typography or ignore its signature scale (`44px / -0.02em (w500)`).**
- **NEVER use thick opaque borders that clash with `#E9E8E6` (`1px solid #E9E8E6`).**
- **NEVER deviate from the signature button geometry (`40px (Pill)`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `SF Mono`.
