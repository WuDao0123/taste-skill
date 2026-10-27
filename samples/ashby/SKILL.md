---
name: taste-ashby
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of ashbyhq.com (Ashby). Use when building or restyling UI pages, landing pages, dashboards, or components to match Ashby's exact design language.
---

# Ashby (ashbyhq.com) Design System & Aesthetic Skill

> **Source URL**: `https://www.ashbyhq.com`
> **Extracted At**: `2026-10-26T15:26:03.325Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `4170ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Analytics-Driven Recruiting SaaS & Royal Indigo TTNormsPro**
- **Semantic Vibe Tags**: `light`, `hr`, `recruiting`, `analytics`, `saas`, `ashby`, `indigo`, `b2b`
- **Core Signature**: Bright #FFFFFF / #FCFCFE canvas with #EEEDEF soft lavender-gray borders, 72px TTNormsPro geometric display headings (-0.04em tracking, 575 weight), and #473BCE royal indigo CTAs.
- **Atmosphere & Contrast Strategy**: Built on a light-mode foundation (`#FFFFFF` canvas -> `#FCFCFE` elevated surfaces) anchored by `#EEEDEF` structural borders, `TTNormsPro` display typography, and `#473BCE` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#FFFFFF` | `computed root canvas` | `bg-white` | Primary Ashby page canvas |
| **surfaceElevated** | `#FCFCFE` | `computed card surface` | `bg-[#FCFCFE]` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#FFFFFF` | `computed secondary surface` | `bg-white` | Secondary interactive container / hover fill |
| **borderPrimary** | `#EEEDEF` | `computed border hairline` | `border-[#EEEDEF]` | Primary structural divider (1px solid #EEEDEF) |
| **borderSecondary** | `#EEEDEF` | `computed secondary border` | `border-[#EEEDEF]` | Secondary nested module or pill border |
| **textPrimary** | `#141415` | `computed heading color` | `text-[#141415]` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#717075` | `computed body color` | `text-[#717075]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#473BCE` | `computed brand accent` | `bg-[#473BCE]` | Primary interactive CTA & brand highlight (6px) |
| **accentSecondary** | `#473BCE` | `computed secondary accent` | `text-[#473BCE]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(rgb(104, 87, 219), rgb(71, 59, 206))`
  - `linear-gradient(to right, rgb(37, 32, 96) 0%, rgb(43, 38, 115) 23%, rgb(52, 46, 138) 33%, rgb(60, 52, 162) 42%, rgb(69, 59, 181) 50%, rgb(77, 66, 205) 57%, rgb(103, 69, 217) 63%, rgb(143, 73, 218) 70%, rgb(174, 74, 217) 76%, rgb(202, 80, 215) 83%, rgb(228, 88, 214) 91%, rgb(251, 96, 212) 100%)`
  - `linear-gradient(to right bottom, rgb(235, 233, 254), rgb(211, 207, 249))`
  - `linear-gradient(to right bottom, rgb(235, 233, 254), rgb(251, 218, 245))`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--colorNeutral900: #121117;`
- `--colorNeutral800: #373e4d (#373E4D);`
- `--colorNeutral700: #545b6d (#545B6D);`
- `--colorNeutral600: #7d8699 (#7D8699);`
- `--colorNeutral500: #a8aebd (#A8AEBD);`
- `--colorNeutral400: #c2c7d1 (#C2C7D1);`
- `--colorNeutral300: #d7dae0 (#D7DAE0);`
- `--colorNeutral200: #e5e6e8 (#E5E6E8);`
- `--colorNeutral150: #f3f2f7 (#F3F2F7);`
- `--colorNeutral100: #f7f8fa (#F7F8FA);`
- `--colorNeutral050: #fbfbfe (#FBFBFE);`
- `--colorNeutral000: #fff (#FFFFFF);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `TTNormsPro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`
- **Section Heading Font (H2/H3)**: `TTNormsPro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`
- **Body / UI Sans Font**: `TTNormsPro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`
- **Monospace / Code Font**: `Consolas,Monaco,monospace`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `72px` | line-height `79.2px` (`leading-[1.1]`) | letter-spacing `-2.88px` (`tracking-[-0.04em]`) | weight `575` (`font-[575]`) | color `#141415` (`text-[#141415]`) | font `TTNormsPro`
- **Section H2 (Primary)**: `44px` | line-height `48.4px` (`leading-[1.1]`) | letter-spacing `-1.1px` (`tracking-[-0.025em]`) | weight `575` (`font-[575]`) | color `#141415` (`text-[#141415]`) | font `TTNormsPro`

- **Card / Feature H3**: `20px` | line-height `25px` (`leading-[1.25]`) | letter-spacing `-0.5px` (`tracking-[-0.025em]`) | weight `500` (`font-[500]`) | color `#141415` (`text-[#141415]`) | font `TTNormsPro`
- **Body Copy (Paragraph)**: `20px` | line-height `30px` (`leading-[1.5]`) | letter-spacing `-0.16px` (`tracking-[-0.008em]`) | weight `400` (`font-[400]`) | color `#717075` (`text-[#717075]`) | font `TTNormsPro`
- **Monospace / Code Block**: `13px–14px` | line-height `1.5` (`leading-relaxed`) | font `Consolas,Monaco,monospace`

### Extracted CSS Typography Variables
- `--fontFamily: "TTNormsPro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;`
- `--fontSizeRootDesktop: 1rem;`
- `--fontSizeRootMobile: 0.875rem;`
- `--fontSizeXxxxxlarge: 2.75rem;`
- `--fontSizeXxxxlarge: 2.5rem;`
- `--fontSizeXxxlarge: 1.875rem;`
- `--fontSizeXxlarge: 1.5rem;`
- `--fontSizeXlarge: 1.25rem;`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1200px` (6x), `1109.7px` (5x), `1296px` (3x), `730px` (1x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `64px / 64px` (7x), `128px / 0px` (1x), `72px / 24px` (1x), `48px / 96px` (1x)
- **High-Frequency Grid & Flex Gaps**: `16px` (19x), `4px` (17x), `32px` (12x), `24px` (10x), `12px` (9x), `8px` (4x)
- **Extracted Spacing & Radius Variables**: `--borderRadius: 0.625rem`, `--borderRadiusSmall: 0.25rem`, `--roundedBarHeight: 4px`, `--base-radius: 210px`, `--widthMaxSite: 1200px`, `--widthBlogContainer: 1204px`, `--widthMaxLists: 1024px`, `--widthMaxPost: 680px`, `--borderWidthNormal: 1px`

### Surface & Depth Tokens
- **Border Radius Distribution**: `6px` (65x), `16px` (6x), `8px` (5x), `12px` (5x), `2px` (3x)
- **Glassmorphism / Backdrop Blur**: `none`
- **Box-Shadow Formulas**:
  - `rgb(255, 255, 255) 0px 0px 0px 4.5px, rgba(0, 0, 0, 0.1) 0px 0px 0px 5.5px` *(observed 5x in DOM, Tailwind: `shadow-[rgb(255,255,255)_0px_0px_0px_4.5px,rgba(0,0,0,0.1)_0px_0px_0px_5.5px]`)*
  - `rgba(20, 20, 21, 0.18) 0px 0px 1px 0px, rgba(20, 20, 21, 0.3) 0px 2px 3px -2px` *(observed 4x in DOM, Tailwind: `shadow-[rgba(20,20,21,0.18)_0px_0px_1px_0px,rgba(20,20,21,0.3)_0px_2px_3px_-2px]`)*
  - `rgba(20, 20, 21, 0.16) 0px 0px 0px 1px inset, rgba(255, 255, 255, 0.2) 0px 1px 2px 0px inset` *(observed 3x in DOM, Tailwind: `shadow-[rgba(20,20,21,0.16)_0px_0px_0px_1px_inset,rgba(255,255,255,0.2)_0px_1px_2px_0px_inset]`)*
  - `rgba(20, 20, 21, 0.12) 0px 0px 1px 0px, rgba(14, 14, 40, 0.2) 0px 2px 36px -25px` *(observed 2x in DOM, Tailwind: `shadow-[rgba(20,20,21,0.12)_0px_0px_1px_0px,rgba(14,14,40,0.2)_0px_2px_36px_-25px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Get in Touch")**: height `36px`, padding `1px 16px`, radius `6px` (`rounded-md`), bg `transparent` (`bg-[transparent]`), text `#FCFCFE` (`text-[#FCFCFE]`), border `none`, font `16px` / weight `545`, shadow `rgba(20, 20, 21, 0.16) 0px 0px 0px 1px inset, rgba(255, 255, 255, 0.2) 0px 1px 2px 0px inset`
  - **Button Variant 2 ("Get in Touch")**: height `44px`, padding `1px 24px`, radius `6px` (`rounded-md`), bg `transparent` (`bg-[transparent]`), text `#FCFCFE` (`text-[#FCFCFE]`), border `none`, font `20px` / weight `500`, shadow `rgba(20, 20, 21, 0.16) 0px 0px 0px 1px inset, rgba(255, 255, 255, 0.2) 0px 1px 2px 0px inset`
  - **Button Variant 3 ("Ashby Platform")**: height `41px`, padding `8px 12px`, radius `6px` (`rounded-md`), bg `#EEEDEF` (`bg-[#EEEDEF]`), text `#717075` (`text-[#717075]`), border `none`, font `16px` / weight `400`
- **Cards & Containers**:
  - **Card Recipe 1 (440x200px)**: bg `#FFFFFF` (`bg-white`), border `1px solid #F4F4F4`, radius `6px` (`rounded-md`), padding `20px 26px`, shadow `rgba(172, 171, 171, 0.3) 0px -1px 10px 0px`
  - **Card Recipe 2 (1152x512px)**: bg `transparent` (`bg-[transparent]`), border `none`, radius `16px` (`rounded-2xl`), padding `64px 64px`, shadow `rgba(20, 20, 21, 0.18) 0px 0px 1px 0px, rgba(20, 20, 21, 0.3) 0px 2px 3px -2px`
  - **Card Recipe 3 (576x384px)**: bg `transparent` (`bg-[transparent]`), border `none`, radius `8px` (`rounded-lg`), padding `0px 0px`, shadow `rgba(20, 20, 21, 0.18) 0px 0px 1px 0px, rgba(20, 20, 21, 0.3) 0px 2px 3px -2px`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `ease-out, ease-out, ease-out` (38x), `cubic-bezier(0.16, 1, 0.3, 1)` (8x), `cubic-bezier(0.07, 0.82, 0.57, 1.42)` (4x), `ease-in-out` (3x)
- **Transition Durations**: `0.12s, 0.12s, 0.12s` (38x), `0.15s` (8x), `0.2s` (8x), `0.5s` (1x)
- **Named Motion Tokens**: `--transitionDuration: 0.25s`, `--transitionDurationLong: 0.35s`, `--transitionFunction: ease-in-out`, `--transitionFunctionNatural: cubic-bezier(0.36,0.12,0.44,1.04)`, `--unified-seek-morph-transition-ms: 100ms`, `--transitions-microTransform: 150ms transform cubic-bezier(0.16, 1, 0.3, 1)`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Ashby’s exact `#FFFFFF` canvas and `#FCFCFE` surface pairing.**
- **NEVER replace `TTNormsPro` display typography or ignore its signature scale (`72px / -0.04em (w575)`).**
- **NEVER use thick opaque borders that clash with `#EEEDEF` (`1px solid #EEEDEF`).**
- **NEVER deviate from the signature button geometry (`6px`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `SF Mono`.
