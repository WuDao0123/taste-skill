---
name: taste-posthog
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of posthog.com (PostHog). Use when building or restyling UI pages, landing pages, dashboards, or components to match PostHog's exact design language.
---

# PostHog (posthog.com) Design System & Aesthetic Skill

> **Source URL**: `https://posthog.com`
> **Extracted At**: `2026-10-26T15:26:11.647Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `4283ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Tactile Retro-OS Brutalist & Warm Sand / Amber Craft**
- **Semantic Vibe Tags**: `light`, `brutalist`, `retro`, `tactile`, `analytics`, `devtools`, `posthog`, `amber`
- **Core Signature**: Playful tactile #EEEFE9 warm putty canvas with 3D raised bevel buttons (#CD8407 / #EB9D2A amber border #B17816), chunky 800-weight RoundHog headings, and Source Code Pro developer docs.
- **Atmosphere & Contrast Strategy**: Built on a light-mode foundation (`#EEEFE9` canvas -> `#E5E7E0` elevated surfaces) anchored by `#B17816` structural borders, `RoundHog / Matter` display typography, and `#EB9D2A` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#EEEFE9` | `computed root canvas` | `bg-[#EEEFE9]` | Primary PostHog page canvas |
| **surfaceElevated** | `#E5E7E0` | `computed card surface` | `bg-[#E5E7E0]` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#F3F4F6` | `computed secondary surface` | `bg-[#F3F4F6]` | Secondary interactive container / hover fill |
| **borderPrimary** | `#B17816` | `computed border hairline` | `border-[#B17816]` | Primary structural divider (1px solid #B17816) |
| **borderSecondary** | `#B17816` | `computed secondary border` | `border-[#B17816]` | Secondary nested module or pill border |
| **textPrimary** | `#23251D` | `computed heading color` | `text-[#23251D]` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#5A5E52` | `computed body color` | `text-[#5A5E52]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#EB9D2A` | `computed brand accent` | `bg-[#EB9D2A]` | Primary interactive CTA & brand highlight (6px (3D Bevel)) |
| **accentSecondary** | `#EB9D2A` | `computed secondary accent` | `text-[#EB9D2A]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(rgb(253, 238, 205), rgb(255, 254, 244))`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--swiper-pagination-color: #f54e00 (#F54E00);`
- `--swiper-pagination-bullet-inactive-color: #000 (#000000);`
- `--swiper-theme-color: #007aff (#007AFF);`
- `--swiper-preloader-color: #fff (#FFFFFF);`
- `--hp-page-bg: #f9f9f9 (#F9F9F9);`
- `--hp-content-bg: #fff (#FFFFFF);`
- `--hp-box-bg: #f9f9f9 (#F9F9F9);`
- `--hp-tab-bg: #fbfbfb (#FBFBFB);`
- `--hp-rule: #aaa (#AAAAAA);`
- `--hp-rule-soft: #c8ccd1 (#C8CCD1);`
- `--hp-accent: #fabd23 (#FABD23);`
- `--hp-field-border: #2f6fab (#2F6FAB);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `RoundHog, sans-serif`
- **Section Heading Font (H2/H3)**: `RoundHog, sans-serif`
- **Body / UI Sans Font**: `RoundHog, sans-serif`
- **Monospace / Code Font**: `"Source Code Pro", Menlo, Consolas, monaco, monospace`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `36px` | line-height `40px` (`leading-[1.11]`) | letter-spacing `-0.9px` (`tracking-[-0.025em]`) | weight `800` (`font-[800]`) | color `#111827` (`text-[#111827]`) | font `RoundHog`
- **Section H2 (Primary)**: `30px` | line-height `40px` (`leading-[1.33]`) | letter-spacing `-0.75px` (`tracking-[-0.025em]`) | weight `700` (`font-[700]`) | color `#111827` (`text-[#111827]`) | font `RoundHog`

- **Card / Feature H3**: `20.5px` | line-height `25.7px` (`leading-[1.25]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `700` (`font-[700]`) | color `#111111` (`text-[#111111]`) | font `RoundHog`
- **Body Copy (Paragraph)**: `17px` | line-height `25.5px` (`leading-[1.5]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `500` (`font-[500]`) | color `#374151` (`text-[#374151]`) | font `RoundHog`
- **Monospace / Code Block**: `13px` | line-height `18.9px` (`leading-[1.45]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `500` (`font-[500]`) | color `#111111` (`text-[#111111]`) | font `Source Code Pro`



---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1200px` (1x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `96px / 96px` (`py-24`)
- **High-Frequency Grid & Flex Gaps**: `2px` (9x), `4px` (3x), `1px` (2x)
- **Extracted Spacing & Radius Variables**: `--viewport-padding: 25px`, `--building-column: 27%`, `--floor-width: 94cqw`, `--join-space: calc((var(--stack-end) - var(--stack-start) - var(--natural-height)*var(--floor-width))/var(--joins))`

### Surface & Depth Tokens
- **Border Radius Distribution**: `2px` (13x), `4px` (11x), `6px` (2x), `20px` (2x)
- **Glassmorphism / Backdrop Blur**: `blur(64px)`
- **Box-Shadow Formulas**:
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.25)_0px_25px_50px_-12px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Get started – free")**: height `32px`, padding `0px 0px`, radius `6px` (`rounded-md`), bg `#CD8407` (`bg-[#CD8407]`), text `#23251D` (`text-[#23251D]`), border `1px solid #B17816`, font `16px` / weight `400`
  - **Button Variant 2 ("Get started")**: height `47px`, padding `0px 0px`, radius `8px` (`rounded-lg`), bg `#CD8407` (`bg-[#CD8407]`), text `#111111` (`text-[#111111]`), border `1px solid #B17816`, font `18px` / weight `500`
  - **Button Variant 3 ("Get started - free")**: height `35px`, padding `0px 0px`, radius `6px` (`rounded-md`), bg `#CD8407` (`bg-[#CD8407]`), text `#111111` (`text-[#111111]`), border `1px solid #B17816`, font `18px` / weight `600`
  - **Button Variant 4 ("Get started")**: height `53px`, padding `0px 0px`, radius `8px` (`rounded-lg`), bg `#CD8407` (`bg-[#CD8407]`), text `#111111` (`text-[#111111]`), border `1px solid #B17816`, font `18px` / weight `600`
- **Cards & Containers**:


### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.4, 0, 0.2, 1)` (22x), `cubic-bezier(0, 0, 0.2, 1)` (13x)
- **Transition Durations**: `0.7s` (18x), `0.2s` (13x), `0.15s` (3x), `0.3s` (1x)


---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for PostHog’s exact `#EEEFE9` canvas and `#E5E7E0` surface pairing.**
- **NEVER replace `RoundHog / Matter` display typography or ignore its signature scale (`36px / -0.025em (w800)`).**
- **NEVER use thick opaque borders that clash with `#B17816` (`1px solid #B17816`).**
- **NEVER deviate from the signature button geometry (`6px (3D Bevel)`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `Source Code Pro`.
