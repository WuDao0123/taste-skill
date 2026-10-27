---
name: taste-railway
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of railway.com (Railway). Use when building or restyling UI pages, landing pages, dashboards, or components to match Railway's exact design language.
---

# Railway (railway.com) Design System & Aesthetic Skill

> **Source URL**: `https://railway.com`
> **Extracted At**: `2026-10-26T15:25:53.968Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `5283ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Deep Cosmic Violet Infrastructure & IBM Plex Serif Editorial**
- **Semantic Vibe Tags**: `dark`, `cloud`, `infra`, `deployment`, `violet`, `purple`, `serif`, `railway`
- **Core Signature**: Atmospheric #13111C cosmic violet-black canvas with #1B2132 / #291839 elevated deployment cards, rgba(255,255,255,0.1) hairlines, and 54px IBM Plex Serif display headings (-0.036em tracking).
- **Atmosphere & Contrast Strategy**: Built on a dark-mode foundation (`#13111C` canvas -> `#1B2132` elevated surfaces) anchored by `rgba(255, 255, 255, 0.1)` structural borders, `IBM Plex Serif` display typography, and `#8B5CF6` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#13111C` | `computed root canvas` | `bg-[#13111C]` | Primary Railway page canvas |
| **surfaceElevated** | `#1B2132` | `computed card surface` | `bg-[#1B2132]` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#553F83` | `computed secondary surface` | `bg-[#553F83]` | Secondary interactive container / hover fill |
| **borderPrimary** | `rgba(255, 255, 255, 0.1)` | `computed border hairline` | `border-white/[0.1]` | Primary structural divider (1px rgba(255,255,255,0.1)) |
| **borderSecondary** | `#33323E` | `computed secondary border` | `border-[#33323E]` | Secondary nested module or pill border |
| **textPrimary** | `#FFFFFF` | `computed heading color` | `text-white` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#9593A8` | `computed body color` | `text-[#9593A8]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#8B5CF6` | `computed brand accent` | `bg-[#8B5CF6]` | Primary interactive CTA & brand highlight (8px) |
| **accentSecondary** | `#553F83` | `computed secondary accent` | `text-[#553F83]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.05))`
  - `linear-gradient(to top, rgb(49, 60, 60), rgba(40, 52, 52, 0))`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--background: hsl(250, 24%, 9%) (#13111C);`
- `--gray-50: hsl(248, 21%, 13%) (#1C1A28);`
- `--gray-100: hsl(246, 18%, 15%) (#211F2D);`
- `--gray-200: hsl(246, 11%, 22%) (#33323E);`
- `--gray-300: hsl(246,  8%, 35%) (#545260);`
- `--gray-400: hsl(246,  7%, 45%) (#6C6B7B);`
- `--gray-500: hsl(246,  6%, 55%) (#878593);`
- `--gray-600: hsl(246,  6%, 65%) (#A1A0AB);`
- `--gray-700: hsl(246,  6%, 78%) (#C4C4CA);`
- `--gray-800: hsl(246,  6%, 87%) (#DCDCE0);`
- `--gray-900: hsl(246,  6%, 95%) (#F2F1F3);`
- `--gray-950: hsl(246,  4%, 97%) (#F7F7F8);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `"IBM Plex Serif", Georgia, Cambria, "Times New Roman", serif, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`
- **Section Heading Font (H2/H3)**: `"IBM Plex Serif", Georgia, Cambria, "Times New Roman", serif, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`
- **Body / UI Sans Font**: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
- **Monospace / Code Font**: `ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `54px` | line-height `60.5px` (`leading-[1.12]`) | letter-spacing `-1.96px` (`tracking-[-0.036em]`) | weight `500` (`font-[500]`) | color `#FFFFFF` (`text-white`) | font `IBM Plex Serif`
- **Section H2 (Primary)**: `40px` | line-height `48px` (`leading-[1.2]`) | letter-spacing `-0.8px` (`tracking-[-0.02em]`) | weight `400` (`font-[400]`) | color `#FFFFFF` (`text-white`) | font `IBM Plex Serif`

- **Card / Feature H3**: Subheading with crisp line-height
- **Body Copy (Paragraph)**: `20px` | line-height `28px` (`leading-[1.4]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `rgba(255, 255, 255, 0.8)` (`text-white/[0.8]`) | font `Inter`
- **Monospace / Code Block**: `12px` | line-height `18px` (`leading-[1.5]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#DFAF2A` (`text-[#DFAF2A]`) | font `ui-monospace`

### Extracted CSS Typography Variables
- `--font-inter: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;`
- `--font-jetbrains-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;`
- `--font-ibm-plex-serif: 'IBM Plex Serif', Georgia, Cambria, 'Times New Roman', serif;`
- `--font-inter-tight: 'Inter Tight', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1160px` (2x), `740px` (1x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `128px / 96px` (1x)
- **High-Frequency Grid & Flex Gaps**: `8px` (11x), `12px` (1x), `normal 32px` (1x)
- **Extracted Spacing & Radius Variables**: `--flap-width: 31px`

### Surface & Depth Tokens
- **Border Radius Distribution**: `8px` (14x), `6px` (6x), `16px` (2x), `10px` (1x)
- **Glassmorphism / Backdrop Blur**: `none`
- **Box-Shadow Formulas**:
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.2) 0px 0px 0px 1.5px inset` *(observed 1x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(255,255,255,0.2)_0px_0px_0px_1.5px_inset]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(62, 45, 45, 0.24) 0px 100px 191px 0px, rgba(62, 45, 45, 0.165) 0px 36.5016px 69.7181px 0px, rgba(62, 45, 45, 0.133) 0px 17.7209px 33.8469px 0px, rgba(62, 45, 45, 0.106) 0px 8.6871px 16.5924px 0px, rgba(62, 45, 45, 0.075) 0px 3.43489px 6.56065px 0px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(62,45,45,0.24)_0px_100px_191px_0px,rgba(62,45,45,0.165)_0px_36.5016px_69.7181px_0px,rgba(62,45,45,0.133)_0px_17.7209px_33.8469px_0px,rgba(62,45,45,0.106)_0px_8.6871px_16.5924px_0px,rgba(62,45,45,0.075)_0px_3.43489px_6.56065px_0px]`)*
  - `rgba(65, 78, 166, 0.1) 0px -12px 127px 0px, rgba(65, 78, 166, 0.07) 0px -4.38px 46.357px 0px, rgba(65, 78, 166, 0.06) 0px -2.127px 22.506px 0px, rgba(65, 78, 166, 0.04) 0px -1.042px 11.033px 0px, rgba(65, 78, 166, 0.03) 0px -0.412px 4.362px 0px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(65,78,166,0.1)_0px_-12px_127px_0px,rgba(65,78,166,0.07)_0px_-4.38px_46.357px_0px,rgba(65,78,166,0.06)_0px_-2.127px_22.506px_0px,rgba(65,78,166,0.04)_0px_-1.042px_11.033px_0px,rgba(65,78,166,0.03)_0px_-0.412px_4.362px_0px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset` *(observed 1x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(255,255,255,0.1)_0px_0px_0px_1px_inset]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Deploy")**: height `32px`, padding `0px 0px`, radius `8px` (`rounded-lg`), bg `#291839` (`bg-[#291839]`), text `#F7F7F8` (`text-[#F7F7F8]`), border `none`, font `16px` / weight `400`
- **Cards & Containers**:


### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.4, 0, 1, 1)` (4x), `cubic-bezier(0.4, 0, 0.2, 1)` (3x), `ease-in-out` (2x), `cubic-bezier(0, 0, 0.2, 1)` (1x)
- **Transition Durations**: `0.15s` (10x)
- **Named Motion Tokens**: `--flip-duration: .3s`, `--flip-duration-fast: .15s`, `--fade-transition-time: 700ms`, `--slide-transition-time: 400ms`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Railway’s exact `#13111C` canvas and `#1B2132` surface pairing.**
- **NEVER replace `IBM Plex Serif` display typography or ignore its signature scale (`54px / -0.036em (w500)`).**
- **NEVER use thick opaque borders that clash with `rgba(255, 255, 255, 0.1)` (`1px rgba(255,255,255,0.1)`).**
- **NEVER deviate from the signature button geometry (`8px`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `IBM Plex Mono`.
