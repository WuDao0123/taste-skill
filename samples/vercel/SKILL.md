---
name: taste-vercel
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of vercel.com (Vercel). Use when building or restyling UI pages, landing pages, dashboards, or components to match Vercel's exact design language.
---

# Vercel (vercel.com) Design System & Aesthetic Skill

> **Source URL**: `https://vercel.com`
> **Extracted At**: `2026-10-26T15:25:43.652Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `4890ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Geist Architectural Grid & Swiss Precision Monochrome**
- **Semantic Vibe Tags**: `light`, `monochrome`, `grid`, `crosshairs`, `geist`, `vercel`, `developer`, `cloud`
- **Core Signature**: Architectural #FAFAFA / #FFFFFF daylight grid with exposed 1px #EBEBEB structural hairlines, corner crosshair markers, ultra-tight -0.06em GeistSans display type, and #171717 monochrome CTAs.
- **Atmosphere & Contrast Strategy**: Built on a light-mode foundation (`#FAFAFA` canvas -> `#FFFFFF` elevated surfaces) anchored by `#EBEBEB` structural borders, `GeistSans` display typography, and `#0070F3` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#FAFAFA` | `computed root canvas` | `bg-[#FAFAFA]` | Primary Vercel page canvas |
| **surfaceElevated** | `#FFFFFF` | `computed card surface` | `bg-white` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#FFFFFF` | `computed secondary surface` | `bg-white` | Secondary interactive container / hover fill |
| **borderPrimary** | `#EBEBEB` | `computed border hairline` | `border-[#EBEBEB]` | Primary structural divider (1px solid #EBEBEB) |
| **borderSecondary** | `rgba(255, 255, 255, 0.4)` | `computed secondary border` | `border-white/[0.4]` | Secondary nested module or pill border |
| **textPrimary** | `#171717` | `computed heading color` | `text-[#171717]` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#4D4D4D` | `computed body color` | `text-[#4D4D4D]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#0070F3` | `computed brand accent` | `bg-[#0070F3]` | Primary interactive CTA & brand highlight (6px / 9999px) |
| **accentSecondary** | `rgba(82, 174, 255, 0.8)` | `computed secondary accent` | `text-[rgba(82,174,255,0.8)]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(to top in oklab, rgb(250, 250, 250) 0%, rgba(0, 0, 0, 0) 100%)`
  - `linear-gradient(to right, rgba(255, 255, 255, 0.16) 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(rgba(255, 255, 255, 0.16) 1px, rgba(0, 0, 0, 0) 1px), linear-gradient(rgb(82, 174, 255), rgb(0, 114, 245) 160%)`
  - `linear-gradient(-45deg, rgb(255, 255, 255) 23.2px, rgb(235, 235, 235) 61.2px, rgb(255, 255, 255) 76.2px, rgb(235, 235, 235) 79.2px)`
  - `linear-gradient(to right, rgba(0, 0, 0, 0) 0%, oklab(0.999998 -0.00000980496 0.0000234246 / 0.6) 50%, rgba(0, 0, 0, 0) 100%)`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--color-red-50: lab(96.5005% 4.18508 1.52328) (#FEF2F2);`
- `--color-amber-50: lab(98.6252% -.635922 8.42309) (#FFFBEB);`
- `--color-yellow-500: lab(76.3898% 14.5258 98.4589) (#F0B100);`
- `--color-indigo-600: lab(38.4009% 52.6132 -92.3857) (#4F39F6);`
- `--color-slate-300: lab(84.7652% -1.94535 -7.93337) (#CAD5E2);`
- `--color-gray-50: lab(98.2596% -.247031 -.706708) (#F9FAFB);`
- `--color-gray-950: lab(1.90334% .278696 -5.48866) (#030712);`
- `--color-zinc-100: lab(96.1634% .0993311 -.364041) (#F4F4F5);`
- `--color-zinc-600: lab(35.1166% 1.78212 -6.1173) (#52525C);`
- `--color-zinc-900: lab(8.30603% .618205 -2.16572) (#18181B);`
- `--color-neutral-700: lab(27.036% 0 0) (#404040);`
- `--color-neutral-800: lab(15.204% 0 -.00000596046) (#262626);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `GeistSans, "GeistSans Fallback"`
- **Section Heading Font (H2/H3)**: `GeistSans, "GeistSans Fallback"`
- **Body / UI Sans Font**: `GeistSans, "GeistSans Fallback"`
- **Monospace / Code Font**: `"Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `64px` | line-height `64px` (`leading-[1]`) | letter-spacing `-3.84px` (`tracking-[-0.06em]`) | weight `400` (`font-[400]`) | color `#171717` (`text-[#171717]`) | font `GeistSans`
- **Section H2 (Primary)**: `56px` | line-height `56px` (`leading-[1]`) | letter-spacing `-3.36px` (`tracking-[-0.06em]`) | weight `450` (`font-[450]`) | color `#171717` (`text-[#171717]`) | font `GeistSans`

- **Card / Feature H3**: Subheading with crisp line-height
- **Body Copy (Paragraph)**: Readable body text with muted contrast
- **Monospace / Code Block**: `13px–14px` | line-height `1.5` (`leading-relaxed`) | font `"Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol`

### Extracted CSS Typography Variables
- `--font-mono: "Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;`
- `--font-geist-sans: "GeistSans", "GeistSans Fallback";`
- `--font-geist-pixel-square: "GeistPixelSquare", Geist Mono, ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace;`
- `--font-geist-pixel-grid: "GeistPixelGrid", Geist Mono, ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace;`
- `--font-geist-pixel-circle: "GeistPixelCircle", Geist Mono, ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace;`
- `--font-geist-pixel-triangle: "GeistPixelTriangle", Geist Mono, ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace;`
- `--font-geist-pixel-line: "GeistPixelLine", Geist Mono, ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace;`
- `--text-xs: .75rem;`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1448px` (4x), `1440px` (1x), `1080px` (1x), `673.344px` (1x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `40px / 40px` (1x)
- **High-Frequency Grid & Flex Gaps**: `6px` (87x), `12px` (7x), `4px` (5x), `4px 20px` (4x), `44px` (3x), `normal 20px` (3x)
- **Extracted Spacing & Radius Variables**: `--radius-xl: .75rem`, `--radius-3xl: 1.5rem`, `--ds-popover-row-radius: 6px`, `--page-padding: 32px`, `--shadow-width-left: 40px`, `--shadow-width-right: 40px`, `--hero-width: 780px`, `--tablet-width: calc(var(--hero-width) * .75)`

### Surface & Depth Tokens
- **Border Radius Distribution**: `6px` (6x), `20px` (6x), `4px` (4x), `8px` (3x)
- **Glassmorphism / Backdrop Blur**: `none`
- **Box-Shadow Formulas**:
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(235, 235, 235) 0px 0px 0px 1px` *(observed 4x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgb(235,235,235)_0px_0px_0px_1px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgb(250, 250, 250) 0px 0px 0px 1px` *(observed 4x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.08)_0px_0px_0px_1px,rgb(250,250,250)_0px_0px_0px_1px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 2px 2px 0px, rgb(250, 250, 250) 0px 0px 0px 1px` *(observed 4x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.08)_0px_0px_0px_1px,rgba(0,0,0,0.04)_0px_2px_2px_0px,rgb(250,250,250)_0px_0px_0px_1px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(235, 235, 235) 0px 0px 0px 1px inset` *(observed 3x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgb(235,235,235)_0px_0px_0px_1px_inset]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Sign Up")**: height `32px`, padding `0px 6px`, radius `6px` (`rounded-md`), bg `#171717` (`bg-[#171717]`), text `#FFFFFF` (`text-white`), border `none`, font `14px` / weight `500`
  - **Button Variant 2 ("Deploy now")**: height `40px`, padding `0px 12px`, radius `9999px` (`rounded-full`), bg `#171717` (`bg-[#171717]`), text `#FFFFFF` (`text-white`), border `none`, font `16px` / weight `500`
  - **Button Variant 3 ("Log In")**: height `32px`, padding `0px 6px`, radius `6px` (`rounded-md`), bg `#FFFFFF` (`bg-white`), text `#171717` (`text-[#171717]`), border `none`, font `14px` / weight `500`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(235, 235, 235) 0px 0px 0px 1px`
  - **Button Variant 4 ("Talk to sales")**: height `40px`, padding `0px 12px`, radius `9999px` (`rounded-full`), bg `#FFFFFF` (`bg-white`), text `#171717` (`text-[#171717]`), border `none`, font `16px` / weight `500`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(235, 235, 235) 0px 0px 0px 1px`
- **Cards & Containers**:
  - **Card Recipe 1 (685x580px)**: bg `#FAFAFA` (`bg-[#FAFAFA]`), border `none`, radius `6px` (`rounded-md`), padding `20px 20px`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgb(250, 250, 250) 0px 0px 0px 1px`
  - **Card Recipe 2 (685x580px)**: bg `transparent` (`bg-[transparent]`), border `1px solid #F2F2F2`, radius `4px` (`rounded`), padding `0px 0px`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.4, 0, 0.2, 1)` (94x), `cubic-bezier(0, 0, 0.2, 1)` (8x), `linear` (2x), `cubic-bezier(0.23, 1, 0.32, 1)` (1x)
- **Transition Durations**: `0.1s` (79x), `0.2s` (8x), `0.15s` (7x), `0.3s` (6x)
- **Named Motion Tokens**: `--ease-in: cubic-bezier(.4, 0, 1, 1)`, `--ease-out: cubic-bezier(0, 0, .2, 1)`, `--ease-in-out: cubic-bezier(.4, 0, .2, 1)`, `--default-transition-duration: .15s`, `--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1)`, `--duration: .56104s`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Vercel’s exact `#FAFAFA` canvas and `#FFFFFF` surface pairing.**
- **NEVER replace `GeistSans` display typography or ignore its signature scale (`64px / -0.06em (w400)`).**
- **NEVER use thick opaque borders that clash with `#EBEBEB` (`1px solid #EBEBEB`).**
- **NEVER deviate from the signature button geometry (`6px / 9999px`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `GeistMono`.
