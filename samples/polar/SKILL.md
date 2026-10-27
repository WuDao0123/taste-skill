---
name: taste-polar
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of polar.sh (Polar). Use when building or restyling UI pages, landing pages, dashboards, or components to match Polar's exact design language.
---

# Polar (polar.sh) Design System & Aesthetic Skill

> **Source URL**: `https://polar.sh`
> **Extracted At**: `2026-10-26T15:26:10.759Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `3572ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Nordic Dark Monetization & PP Neue Montreal Minimalist**
- **Semantic Vibe Tags**: `dark`, `fintech`, `monetization`, `billing`, `open-source`, `polar`, `neue-montreal`, `geist-mono`
- **Core Signature**: Deep #090909 obsidian canvas with #111111 cards and #181818 / #212121 borders, refined 36px PP Neue Montreal display headings, GeistMono revenue counters, and #FFFFFF pill CTAs.
- **Atmosphere & Contrast Strategy**: Built on a dark-mode foundation (`#090909` canvas -> `#111111` elevated surfaces) anchored by `#212121` structural borders, `PP Neue Montreal` display typography, and `#FFFFFF` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#090909` | `computed root canvas` | `bg-[#090909]` | Primary Polar page canvas |
| **surfaceElevated** | `#111111` | `computed card surface` | `bg-[#111111]` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#090909` | `computed secondary surface` | `bg-[#090909]` | Secondary interactive container / hover fill |
| **borderPrimary** | `#212121` | `computed border hairline` | `border-[#212121]` | Primary structural divider (1px solid #212121) |
| **borderSecondary** | `#212121` | `computed secondary border` | `border-[#212121]` | Secondary nested module or pill border |
| **textPrimary** | `#FFFFFF` | `computed heading color` | `text-white` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#858585` | `computed body color` | `text-[#858585]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#FFFFFF` | `computed brand accent` | `bg-white` | Primary interactive CTA & brand highlight (9999px (Pill)) |
| **accentSecondary** | `#212121` | `computed secondary accent` | `text-[#212121]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(90deg, rgb(133, 133, 133) 35%, rgb(255, 255, 255) 50%, rgb(133, 133, 133) 65%)`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--color-red-50: lab(96.5005% 4.18508 1.52328) (#FEF2F2);`
- `--color-red-100: lab(92.243% 10.2865 3.83865) (#FFE2E2);`
- `--color-red-200: lab(86.017% 19.8815 7.75869) (#FFC9C9);`
- `--color-red-300: lab(76.5514% 36.422 15.5335) (#FFA2A2);`
- `--color-red-400: lab(63.7053% 60.745 31.3109) (#FF6467);`
- `--color-red-500: lab(55.4814% 75.0732 48.8528) (#FB2C36);`
- `--color-red-600: lab(48.4493% 77.4328 61.5452) (#E7000B);`
- `--color-red-700: lab(40.4273% 67.2623 53.7441) (#C10007);`
- `--color-red-800: lab(33.7174% 55.8993 41.0293) (#9F0712);`
- `--color-red-900: lab(28.5139% 44.5539 29.0463) (#82181A);`
- `--color-red-950: lab(13.003% 29.04 16.7519) (#460809);`
- `--color-orange-400: lab(70.0429% 42.5156 75.8207) (#FF8904);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `"PP Neue Montreal", Inter, sans-serif`
- **Section Heading Font (H2/H3)**: `"PP Neue Montreal", InterDisplay, sans-serif`
- **Body / UI Sans Font**: `"PP Neue Montreal", Inter, sans-serif`
- **Monospace / Code Font**: `GeistMono, monospace`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `36px` | line-height `45px` (`leading-[1.25]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#FFFFFF` (`text-white`) | font `PP Neue Montreal`
- **Section H2 (Primary)**: `48px` | line-height `60px` (`leading-[1.25]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#FFFFFF` (`text-white`) | font `PP Neue Montreal`
- **Section H2 (Secondary)**: `30px` | line-height `41.3px` (`leading-[1.38]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#FFFFFF` (`text-white`) | font `PP Neue Montreal`
- **Card / Feature H3**: `20px` | line-height `27.5px` (`leading-[1.38]`) | letter-spacing `0.24px` (`tracking-[0.012em]`) | weight `400` (`font-[400]`) | color `#FFFFFF` (`text-white`) | font `PP Neue Montreal`
- **Body Copy (Paragraph)**: `16px` | line-height `24px` (`leading-[1.5]`) | letter-spacing `0.24px` (`tracking-[0.015em]`) | weight `450` (`font-[450]`) | color `#858585` (`text-[#858585]`) | font `PP Neue Montreal`
- **Monospace / Code Block**: `13px` | line-height `24px` (`leading-[1.85]`) | letter-spacing `0.24px` (`tracking-[0.018em]`) | weight `450` (`font-[450]`) | color `#FFFFFF` (`text-white`) | font `GeistMono`

### Extracted CSS Typography Variables
- `--font-sans: "PP Neue Montreal", "Inter", sans-serif;`
- `--font-mono: "GeistMono", monospace;`
- `--text-xs: .75rem;`
- `--text-xs--line-height: calc(1 / .75);`
- `--text-sm: .875rem;`
- `--text-sm--line-height: calc(1.25 / .875);`
- `--text-base: 1rem;`
- `--text-base--line-height: calc(1.5 / 1);`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `896px` (4x), `1280px` (3x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `96px / 96px` (11x), `48px / 48px` (5x), `48px / 64px` (1x), `0px / 96px` (1x)
- **High-Frequency Grid & Flex Gaps**: `normal 16px` (52x), `normal 8px` (48x), `normal 4px` (31x), `8px normal` (17x), `normal 12px` (17x), `4px normal` (17x)
- **Extracted Spacing & Radius Variables**: `--radius-xs: .125rem`, `--radius-xl: .75rem`, `--radius-2xl: 1rem`, `--radius-3xl: 1.5rem`, `--radius-4xl: 2rem`, `--spacing: .25rem`

### Surface & Depth Tokens
- **Border Radius Distribution**: `12px` (20x), `7.6px` (10x), `16px` (8x)
- **Glassmorphism / Backdrop Blur**: `none`
- **Box-Shadow Formulas**:
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.75) 0px 16px 40px -12px` *(observed 8x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.75)_0px_16px_40px_-12px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.999994 0.0000455678 0.0000200868 / 0.1) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px` *(observed 4x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,oklab(0.999994_0.0000455678_0.0000200868_/_0.1)_0px_0px_0px_1px_inset,rgba(0,0,0,0)_0px_0px_0px_0px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Get Started")**: height `40px`, padding `12px 20px`, radius `9999px` (`rounded-full`), bg `#FFFFFF` (`bg-white`), text `#000000` (`text-black`), border `none`, font `14px` / weight `550`
  - **Button Variant 2 ("Get Started")**: height `48px`, padding `16px 20px`, radius `9999px` (`rounded-full`), bg `#FFFFFF` (`bg-white`), text `#000000` (`text-black`), border `none`, font `14px` / weight `550`
  - **Button Variant 3 ("Contact Sales")**: height `40px`, padding `12px 20px`, radius `9999px` (`rounded-full`), bg `#212121` (`bg-[#212121]`), text `#FFFFFF` (`text-white`), border `1px solid rgba(255, 255, 255, 0.05)`, font `14px` / weight `550`
- **Cards & Containers**:
  - **Card Recipe 1 (924x537px)**: bg `transparent` (`bg-[transparent]`), border `1px solid #181818`, radius `7.6px` (`rounded-lg`), padding `48px 48px`
  - **Card Recipe 2 (826x439px)**: bg `#090909` (`bg-[#090909]`), border `1px solid #181818`, radius `16px` (`rounded-2xl`), padding `4px 4px`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.75) 0px 16px 40px -12px`
  - **Card Recipe 3 (405x405px)**: bg `#111111` (`bg-[#111111]`), border `1px solid #181818`, radius `7.6px` (`rounded-lg`), padding `48px 48px`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.4, 0, 0.2, 1)` (84x), `ease` (46x), `cubic-bezier(0.2, 0.8, 0.2, 1)` (3x)
- **Transition Durations**: `0.075s` (40x), `0.12s` (36x), `0.2s` (26x), `0.15s` (17x)
- **Named Motion Tokens**: `--ease-in: cubic-bezier(.4, 0, 1, 1)`, `--ease-out: cubic-bezier(0, 0, .2, 1)`, `--ease-in-out: cubic-bezier(.4, 0, .2, 1)`, `--default-transition-duration: .15s`, `--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1)`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Polar’s exact `#090909` canvas and `#111111` surface pairing.**
- **NEVER replace `PP Neue Montreal` display typography or ignore its signature scale (`36px / 1.25 (w400)`).**
- **NEVER use thick opaque borders that clash with `#212121` (`1px solid #212121`).**
- **NEVER deviate from the signature button geometry (`9999px (Pill)`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `GeistMono`.
