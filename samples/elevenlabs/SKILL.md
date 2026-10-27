---
name: taste-elevenlabs
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of elevenlabs.io (ElevenLabs). Use when building or restyling UI pages, landing pages, dashboards, or components to match ElevenLabs's exact design language.
---

# ElevenLabs (elevenlabs.io) Design System & Aesthetic Skill

> **Source URL**: `https://elevenlabs.io`
> **Extracted At**: `2026-10-26T15:26:08.151Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `3631ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Swiss Audio Minimalist & Light-Weight Waldenburg Precision**
- **Semantic Vibe Tags**: `light`, `ai`, `voice`, `audio`, `minimalist`, `swiss`, `elevenlabs`, `waldenburg`
- **Core Signature**: Warm alabaster #FDFCFC canvas with #F5F3F1 audio player cards, rgba(0,0,0,0.06) subtle borders, light-weight 300 Waldenburg 48px display typography (-0.02em), and Geist Mono waveform metrics.
- **Atmosphere & Contrast Strategy**: Built on a light-mode foundation (`#FDFCFC` canvas -> `#F5F3F1` elevated surfaces) anchored by `rgba(0, 0, 0, 0.07)` structural borders, `Waldenburg (w300)` display typography, and `#000000` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#FDFCFC` | `computed root canvas` | `bg-[#FDFCFC]` | Primary ElevenLabs page canvas |
| **surfaceElevated** | `#F5F3F1` | `computed card surface` | `bg-[#F5F3F1]` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#FFFFFF` | `computed secondary surface` | `bg-white` | Secondary interactive container / hover fill |
| **borderPrimary** | `rgba(0, 0, 0, 0.07)` | `computed border hairline` | `border-black/[0.07]` | Primary structural divider (1px rgba(0,0,0,0.07)) |
| **borderSecondary** | `rgba(0, 0, 0, 0.07)` | `computed secondary border` | `border-black/[0.07]` | Secondary nested module or pill border |
| **textPrimary** | `#000000` | `computed heading color` | `text-black` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#666462` | `computed body color` | `text-[#666462]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#000000` | `computed brand accent` | `bg-black` | Primary interactive CTA & brand highlight (9999px (Pill)) |
| **accentSecondary** | `#000000` | `computed secondary accent` | `text-black` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(to right, rgb(245, 243, 241), rgba(0, 0, 0, 0))`
  - `linear-gradient(to left, rgb(245, 243, 241), rgba(0, 0, 0, 0))`
  - `linear-gradient(to top, rgb(255, 255, 255), rgba(255, 255, 255, 0))`
  - `radial-gradient(closest-side, rgb(255, 255, 255) calc(100% - 16px), rgba(255, 255, 255, 0))`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--grid-column-bg: rgba(127,255,255,0.25) (rgba(128, 255, 255, 0.25));`
- `--eggshell: #FDFCFC;`
- `--page-background-color: #FDFCFC;`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `Waldenburg, "Waldenburg Fallback"`
- **Section Heading Font (H2/H3)**: `Waldenburg, "Waldenburg Fallback"`
- **Body / UI Sans Font**: `Inter, "Inter Fallback"`
- **Monospace / Code Font**: `"Geist Mono", "Geist Mono Fallback"`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `48px` | line-height `52px` (`leading-[1.08]`) | letter-spacing `-0.96px` (`tracking-[-0.02em]`) | weight `300` (`font-[300]`) | color `#000000` (`text-black`) | font `Waldenburg`
- **Section H2 (Primary)**: `36px` | line-height `42px` (`leading-[1.17]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `300` (`font-[300]`) | color `#000000` (`text-black`) | font `Waldenburg`

- **Card / Feature H3**: `20px` | line-height `27px` (`leading-[1.35]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#000000` (`text-black`) | font `Inter`
- **Body Copy (Paragraph)**: `14px` | line-height `18px` (`leading-[1.29]`) | letter-spacing `0.14px` (`tracking-[0.01em]`) | weight `400` (`font-[400]`) | color `#59544F` (`text-[#59544F]`) | font `Inter`
- **Monospace / Code Block**: `13px` | line-height `22px` (`leading-[1.69]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#000000` (`text-black`) | font `Geist Mono`

### Extracted CSS Typography Variables
- `--font-waldenburg: "Waldenburg","Waldenburg Fallback";`
- `--font-waldenburg-fh: "WaldenburgFH","WaldenburgFH Fallback";`
- `--font-inter: "Inter","Inter Fallback";`
- `--font-geist-mono: "Geist Mono","Geist Mono Fallback";`
- `--f-display-01-font-family: "WaldenburgFH","WaldenburgFH Fallback";`
- `--f-display-01-font-weight: 700;`
- `--f-display-01-font-size: 6.25rem;`
- `--f-display-01-line-height: 95%;`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `896px` (1x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `160px / 40px` (6x), `120px / 40px` (1x), `0px / 120px` (1x), `40px / 40px` (1x)
- **High-Frequency Grid & Flex Gaps**: `normal 8px` (21x), `8px` (17x), `normal 6px` (15x), `normal 12px` (8x), `6px` (6x), `4px` (4x)
- **Extracted Spacing & Radius Variables**: `--shadcn-radius: 0.5rem`, `--rounded-card: 1rem`, `--rounded-card-px: 16px`, `--rounded-card-sm: 0.75rem`, `--rounded-card-sm-px: 12px`, `--container-width: min(100%,81.625rem)`, `--grid-columns: 12`, `--spacing-outer-gutter: 4rem`, `--spacing-inner-gutter: 1.25rem`, `--spacing-container-gutter: 0.625rem`

### Surface & Depth Tokens
- **Border Radius Distribution**: `16px` (57x), `4px` (39x), `12px` (10x), `2px` (10x), `10px` (7x), `18px` (6x)
- **Glassmorphism / Backdrop Blur**: `none`
- **Box-Shadow Formulas**:
  - `rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.125) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px` *(observed 21x in DOM, Tailwind: `shadow-[rgb(255,255,255)_0px_0px_0px_0px,rgba(0,0,0,0.125)_0px_0px_0px_0.5px,rgba(0,0,0,0.04)_0px_1px_1px_0px,rgba(0,0,0,0.04)_0px_2px_4px_0px]`)*
  - `rgb(255, 255, 255) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.075) 0px 0px 0px 0.5px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px` *(observed 15x in DOM, Tailwind: `shadow-[rgb(255,255,255)_0px_0px_0px_0px_inset,rgba(0,0,0,0.075)_0px_0px_0px_0.5px_inset,rgba(0,0,0,0)_0px_0px_0px_0px]`)*
  - `rgb(255, 255, 255) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px` *(observed 13x in DOM, Tailwind: `shadow-[rgb(255,255,255)_0px_0px_0px_0px_inset,rgba(0,0,0,0.1)_0px_0px_0px_0.5px_inset,rgba(0,0,0,0)_0px_0px_0px_0px]`)*
  - `rgba(0, 0, 0, 0.125) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px` *(observed 7x in DOM, Tailwind: `shadow-[rgba(0,0,0,0.125)_0px_0px_0px_0.5px,rgba(0,0,0,0.04)_0px_1px_1px_0px,rgba(0,0,0,0.04)_0px_2px_4px_0px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Contact sales")**: height `44px`, padding `0px 20px`, radius `9999px` (`rounded-full`), bg `#FFFFFF` (`bg-white`), text `#000000` (`text-black`), border `none`, font `16px` / weight `400`, shadow `rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.125) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px`
  - **Button Variant 2 ("Play")**: height `36px`, padding `0px 14px`, radius `9999px` (`rounded-full`), bg `#000000` (`bg-black`), text `#FFFFFF` (`text-white`), border `none`, font `15px` / weight `400`
  - **Button Variant 3 ("Discover")**: height `32px`, padding `0px 12px`, radius `9999px` (`rounded-full`), bg `#FFFFFF` (`bg-white`), text `#000000` (`text-black`), border `none`, font `13px` / weight `400`, shadow `rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.125) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0.04) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px`
  - **Button Variant 4 ("Skip to content")**: height `40px`, padding `0px 16px`, radius `9999px` (`rounded-full`), bg `#000000` (`bg-black`), text `#FFFFFF` (`text-white`), border `none`, font `15px` / weight `400`
- **Cards & Containers**:
  - **Card Recipe 1 (1180x558px)**: bg `transparent` (`bg-[transparent]`), border `none`, radius `16px` (`rounded-2xl`), padding `0px 0px`, shadow `rgb(255, 255, 255) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.075) 0px 0px 0px 0.5px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
  - **Card Recipe 2 (202x202px)**: bg `transparent` (`bg-[transparent]`), border `none`, radius `9999px` (`rounded-full`), padding `0px 0px`, shadow `rgb(255, 255, 255) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
  - **Card Recipe 3 (627x391px)**: bg `transparent` (`bg-[transparent]`), border `1px solid rgba(0, 0, 0, 0.07)`, radius `12px 12px 0px 0px` (`rounded-xl`), padding `0px 0px`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.4, 0, 0.2, 1)` (76x), `ease` (6x), `cubic-bezier(0, 0, 0.2, 1)` (2x)
- **Transition Durations**: `0.15s` (56x), `0.2s` (18x), `0.36s` (6x), `0.3s` (2x)
- **Named Motion Tokens**: `--invitation-letter-unfold-ease: cubic-bezier(0.5,0,0.15,1)`, `--intro-duration: 7.2s`, `--intro-ease: cubic-bezier(0.16,1,0.3,1)`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for ElevenLabs’s exact `#FDFCFC` canvas and `#F5F3F1` surface pairing.**
- **NEVER replace `Waldenburg (w300)` display typography or ignore its signature scale (`48px / -0.02em (w300)`).**
- **NEVER use thick opaque borders that clash with `rgba(0, 0, 0, 0.07)` (`1px rgba(0,0,0,0.07)`).**
- **NEVER deviate from the signature button geometry (`9999px (Pill)`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `Geist Mono`.
