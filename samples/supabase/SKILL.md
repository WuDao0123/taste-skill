---
name: taste-supabase
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of supabase.com (Supabase). Use when building or restyling UI pages, landing pages, dashboards, or components to match Supabase's exact design language.
---

# Supabase (supabase.com) Design System & Aesthetic Skill

> **Source URL**: `https://supabase.com`
> **Extracted At**: `2026-10-26T15:25:43.999Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `5232ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Postgres Emerald Technical Clarity & Clean Modular Bento**
- **Semantic Vibe Tags**: `light`, `database`, `postgres`, `emerald`, `green`, `devtools`, `backend`, `supabase`
- **Core Signature**: Crisp #FDFDFD canvas with rgba(0,0,0,0.08) hairline bento modules, geometric Manrope headings, Source Code Pro SQL snippets, and signature #0E7E4E / #3ECF8E Postgres emerald accents.
- **Atmosphere & Contrast Strategy**: Built on a light-mode foundation (`#FDFDFD` canvas -> `#FFFFFF` elevated surfaces) anchored by `rgba(0, 0, 0, 0.08)` structural borders, `Manrope` display typography, and `#0E7E4E` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#FDFDFD` | `computed root canvas` | `bg-[#FDFDFD]` | Primary Supabase page canvas |
| **surfaceElevated** | `#FFFFFF` | `computed card surface` | `bg-white` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#FDFDFD` | `computed secondary surface` | `bg-[#FDFDFD]` | Secondary interactive container / hover fill |
| **borderPrimary** | `rgba(0, 0, 0, 0.08)` | `computed border hairline` | `border-black/[0.08]` | Primary structural divider (1px rgba(0,0,0,0.08)) |
| **borderSecondary** | `rgba(0, 0, 0, 0.15)` | `computed secondary border` | `border-black/[0.15]` | Secondary nested module or pill border |
| **textPrimary** | `#030303` | `computed heading color` | `text-[#030303]` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#696969` | `computed body color` | `text-[#696969]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#0E7E4E` | `computed brand accent` | `bg-[#0E7E4E]` | Primary interactive CTA & brand highlight (8px) |
| **accentSecondary** | `#FDFDFD` | `computed secondary accent` | `text-[#FDFDFD]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(rgba(255, 255, 255, 0.016), rgba(0, 0, 0, 0.01))`
  - `linear-gradient(oklch(0.1 0 337.5 / 0.0812725) 0px, oklab(0.1 0 0 / 0.0406362) 100%)`
  - `linear-gradient(to top, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 50%, oklch(1 0 337.5) 85%)`
  - `linear-gradient(rgb(253, 73, 168) 0%, rgb(253, 41, 128) 10%, rgb(252, 26, 88) 20%, rgb(250, 31, 65) 30%, rgb(250, 39, 51) 40%, rgb(251, 61, 38) 50%, rgb(252, 84, 31) 60%, rgb(254, 106, 30) 70%, rgb(254, 119, 29) 80%, rgb(255, 134, 27) 90%, rgb(255, 143, 27) 100%)`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--color-emerald-50: oklch(97.9% .021 166.113) (#ECFDF5);`
- `--color-emerald-200: oklch(90.5% .093 164.15) (#A4F4CF);`
- `--color-emerald-300: oklch(84.5% .143 164.978) (#5EE9B5);`
- `--color-emerald-400: oklch(76.5% .177 163.223) (#00D492);`
- `--color-emerald-500: oklch(69.6% .17 162.48) (#00BC7D);`
- `--color-emerald-600: oklch(59.6% .145 163.225) (#009966);`
- `--color-emerald-700: oklch(50.8% .118 165.612) (#007A55);`
- `--color-emerald-900: oklch(37.8% .077 168.94) (#004F3B);`
- `--color-emerald-950: oklch(26.2% .051 172.552) (#002C22);`
- `--color-teal-500: oklch(70.4% .14 182.503) (#00BBA7);`
- `--color-cyan-500: oklch(71.5% .143 215.221) (#00B8DB);`
- `--color-neutral-50: oklch(98.5% 0 0) (#FAFAFA);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `Manrope, "Manrope Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif`
- **Section Heading Font (H2/H3)**: `Manrope, "Manrope Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif`
- **Body / UI Sans Font**: `Inter, "Inter Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif, Inter, "Helvetica Neue", Helvetica, ui-sans-serif, system-ui, sans-serif`
- **Monospace / Code Font**: `"Source Code Pro", "Source Code Pro Fallback", "Source Code Pro", "Office Code Pro", Menlo, monospace, "Source Code Pro", ui-monospace, Menlo, monospace`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `46px` | line-height `46px` (`leading-[1]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `500` (`font-[500]`) | color `#030303` (`text-[#030303]`) | font `Manrope`
- **Section H2 (Primary)**: `34px` | line-height `37.8px` (`leading-[1.11]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `600` (`font-[600]`) | color `#030303` (`text-[#030303]`) | font `Manrope`

- **Card / Feature H3**: `34px` | line-height `37.8px` (`leading-[1.11]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `600` (`font-[600]`) | color `#696969` (`text-[#696969]`) | font `Manrope`
- **Body Copy (Paragraph)**: `16px` | line-height `24px` (`leading-[1.5]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `450` (`font-[450]`) | color `#696969` (`text-[#696969]`) | font `Inter`
- **Monospace / Code Block**: `13px` | line-height `22.1px` (`leading-[1.7]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `500` (`font-[500]`) | color `#525252` (`text-[#525252]`) | font `Source Code Pro`

### Extracted CSS Typography Variables
- `--font-manrope: "Manrope","Manrope Fallback",system-ui,Helvetica Neue,Helvetica,Arial,sans-serif;`
- `--font-inter: "Inter","Inter Fallback",system-ui,Helvetica Neue,Helvetica,Arial,sans-serif;`
- `--font-source-code-pro: "Source Code Pro","Source Code Pro Fallback",Source Code Pro,Office Code Pro,Menlo,monospace;`
- `--text-xs: .75rem;`
- `--text-xs--line-height: calc(1 / .75);`
- `--text-sm: .875rem;`
- `--text-sm--line-height: calc(1.25 / .875);`
- `--text-base: .9375rem;`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1280px` (10x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `96px / 96px` (3x), `160px / 64px` (1x), `0px / 96px` (1x), `40px / 16px` (1x)
- **High-Frequency Grid & Flex Gaps**: `8px` (72x), `16px` (22x), `4px` (13x), `12px` (8x), `32px` (7x), `20px` (7x)
- **Extracted Spacing & Radius Variables**: `--radius-xs: .166667rem`, `--radius-sm: .333333rem`, `--radius-md: .5rem`, `--radius-lg: .666667rem`, `--radius-xl: 1rem`, `--spacing: .25rem`

### Surface & Depth Tokens
- **Border Radius Distribution**: `10.6667px` (68x), `5.33333px` (27x), `21.3333px` (16x), `16px` (14x), `8px` (13x), `15px` (7x)
- **Glassmorphism / Backdrop Blur**: `blur(4px)`
- **Box-Shadow Formulas**:
  - `rgba(255, 255, 255, 0.12) 0px 0px 0px 1px inset` *(observed 5x in DOM, Tailwind: `shadow-[rgba(255,255,255,0.12)_0px_0px_0px_1px_inset]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.999994 0.0000455678 0.0000200868 / 0.3) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px` *(observed 5x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,oklab(0.999994_0.0000455678_0.0000200868_/_0.3)_0px_0px_0px_1px,rgba(0,0,0,0)_0px_0px_0px_0px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.04) 0px 1px 3px 0px, rgba(0, 0, 0, 0.027) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.04) 0px -1px 0px 0px inset, rgba(0, 0, 0, 0.067) 0px 0px 0px 1px inset` *(observed 4x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.04)_0px_1px_3px_0px,rgba(0,0,0,0.027)_0px_1px_0px_0px_inset,rgba(0,0,0,0.04)_0px_0px_0px_1px_inset,rgba(0,0,0,0.04)_0px_-1px_0px_0px_inset,rgba(0,0,0,0.067)_0px_0px_0px_1px_inset]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px` *(observed 4x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Request a demo")**: height `38px`, padding `8px 16px`, radius `9.29231px` (`rounded-xl`), bg `#FFFFFF` (`bg-white`), text `#030303` (`text-[#030303]`), border `none`, font `14px` / weight `500`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.04) 0px 1px 3px 0px, rgba(0, 0, 0, 0.027) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.04) 0px -1px 0px 0px inset, rgba(0, 0, 0, 0.067) 0px 0px 0px 1px inset`
  - **Button Variant 2 ("Read docs for React")**: height `30px`, padding `6px 12px`, radius `9999px` (`rounded-full`), bg `#FFFFFF` (`bg-white`), text `#464646` (`text-[#464646]`), border `1px solid rgba(0, 0, 0, 0.08)`, font `12px` / weight `450`
  - **Button Variant 3 ("Product")**: height `64px`, padding `8px 10px`, radius `8.86154px` (`rounded-xl`), bg `transparent` (`bg-[transparent]`), text `#030303` (`text-[#030303]`), border `none`, font `14px` / weight `500`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
  - **Button Variant 4 ("Table Editor")**: height `38px`, padding `8px 32px`, radius `9999px` (`rounded-full`), bg `#FDFDFD` (`bg-[#FDFDFD]`), text `#030303` (`text-[#030303]`), border `1px solid #030303`, font `14px` / weight `450`
- **Cards & Containers**:
  - **Card Recipe 1 (1088x644px)**: bg `#FDFDFD` (`bg-[#FDFDFD]`), border `1px solid rgba(0, 0, 0, 0.08)`, radius `21.3333px` (`rounded-3xl`), padding `8px 8px`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`
  - **Card Recipe 2 (544x503px)**: bg `transparent` (`bg-[transparent]`), border `1px solid rgba(0, 0, 0, 0.08)`, radius `8px` (`rounded-lg`), padding `0px 0px`
  - **Card Recipe 3 (538x375px)**: bg `#FFFFFF` (`bg-white`), border `1px solid rgba(0, 0, 0, 0.08)`, radius `10.6667px` (`rounded-xl`), padding `0px 0px`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.4, 0, 0.2, 1)` (47x), `cubic-bezier(0.22, 1, 0.36, 1)` (10x), `ease-out` (2x), `cubic-bezier(0, 0, 0.2, 1)` (1x)
- **Transition Durations**: `0.15s` (42x), `0.2s` (14x), `0.3s` (2x), `0.75s` (1x)
- **Named Motion Tokens**: `--ease-in: cubic-bezier(.4,0,1,1)`, `--ease-out: cubic-bezier(0,0,.2,1)`, `--ease-in-out: cubic-bezier(.4,0,.2,1)`, `--ease-enter: cubic-bezier(.16,1,.3,1)`, `--ease-move: cubic-bezier(.87,0,.13,1)`, `--default-transition-duration: .15s`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Supabase’s exact `#FDFDFD` canvas and `#FFFFFF` surface pairing.**
- **NEVER replace `Manrope` display typography or ignore its signature scale (`46px / 0em (w500)`).**
- **NEVER use thick opaque borders that clash with `rgba(0, 0, 0, 0.08)` (`1px rgba(0,0,0,0.08)`).**
- **NEVER deviate from the signature button geometry (`8px`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `Source Code Pro`.
