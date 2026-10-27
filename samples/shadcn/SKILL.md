---
name: taste-shadcn
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of ui.shadcn.com (shadcn/ui). Use when building or restyling UI pages, landing pages, dashboards, or components to match shadcn/ui's exact design language.
---

# shadcn/ui (ui.shadcn.com) Design System & Aesthetic Skill

> **Source URL**: `https://ui.shadcn.com`
> **Extracted At**: `2026-10-26T15:26:07.132Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `3615ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Zinc Monochrome Component Primitives & Zero-Distraction Craft**
- **Semantic Vibe Tags**: `light`, `components`, `ui-kit`, `radix`, `tailwind`, `shadcn`, `monochrome`, `zinc`
- **Core Signature**: Pure #FFFFFF / #F5F5F5 zinc monochrome palette with 1px #E5E5E5 borders, 48px Geist display typography (-0.05em tracking), 10px radius primitives, and strict #171717 / #737373 hierarchy.
- **Atmosphere & Contrast Strategy**: Built on a light-mode foundation (`#FFFFFF` canvas -> `#F5F5F5` elevated surfaces) anchored by `#E5E5E5` structural borders, `Geist` display typography, and `#171717` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#FFFFFF` | `computed root canvas` | `bg-white` | Primary shadcn/ui page canvas |
| **surfaceElevated** | `#F5F5F5` | `computed card surface` | `bg-[#F5F5F5]` | Primary elevated card & bento surface |
| **surfaceSecondary** | `rgba(245, 245, 245, 0.5)` | `computed secondary surface` | `bg-[rgba(245,245,245,0.5)]` | Secondary interactive container / hover fill |
| **borderPrimary** | `#E5E5E5` | `computed border hairline` | `border-[#E5E5E5]` | Primary structural divider (1px solid #E5E5E5) |
| **borderSecondary** | `#171717` | `computed secondary border` | `border-[#171717]` | Secondary nested module or pill border |
| **textPrimary** | `#0A0A0A` | `computed heading color` | `text-[#0A0A0A]` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#737373` | `computed body color` | `text-[#737373]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#171717` | `computed brand accent` | `bg-[#171717]` | Primary interactive CTA & brand highlight (8px / 10px) |
| **accentSecondary** | `#F5F5F5` | `computed secondary accent` | `text-[#F5F5F5]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(lab(100 0 0) 0%, lab(96.52 -0.0000298023 0.0000119209) 50%, rgba(0, 0, 0, 0) 100%)`
  - `linear-gradient(to top, lab(100 0 0) 0%, oklab(0.969998 -0.00000959635 0.0000227094 / 0.8) 50%, rgba(0, 0, 0, 0) 100%)`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--color-red-50: lab(96.5005% 4.18508 1.52328) (#FEF2F2);`
- `--color-red-100: lab(92.243% 10.2865 3.83865) (#FFE2E2);`
- `--color-red-300: lab(76.5514% 36.422 15.5335) (#FFA2A2);`
- `--color-red-400: lab(63.7053% 60.745 31.3109) (#FF6467);`
- `--color-red-500: lab(55.4814% 75.0732 48.8528) (#FB2C36);`
- `--color-red-600: lab(48.4493% 77.4328 61.5452) (#E7000B);`
- `--color-red-700: lab(40.4273% 67.2623 53.7441) (#C10007);`
- `--color-red-800: lab(33.7174% 55.8993 41.0293) (#9F0712);`
- `--color-red-900: lab(28.5139% 44.5539 29.0463) (#82181A);`
- `--color-red-950: lab(13.003% 29.04 16.7519) (#460809);`
- `--color-orange-50: lab(97.7008% 1.53735 5.90649) (#FFF7ED);`
- `--color-orange-100: lab(94.7127% 3.58394 14.3151) (#FFEDD4);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `Geist, "Geist Fallback"`
- **Section Heading Font (H2/H3)**: `Geist, "Geist Fallback"`
- **Body / UI Sans Font**: `Geist, "Geist Fallback"`
- **Monospace / Code Font**: `"Geist Mono", "Geist Mono Fallback"`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `48px` | line-height `52.8px` (`leading-[1.1]`) | letter-spacing `-2.4px` (`tracking-[-0.05em]`) | weight `600` (`font-[600]`) | color `#000000` (`text-black`) | font `Geist`
- **Section H2 (Primary)**: Section headline with negative letter-spacing

- **Card / Feature H3**: Subheading with crisp line-height
- **Body Copy (Paragraph)**: `18px` | line-height `28px` (`leading-[1.56]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#000000` (`text-black`) | font `Geist`
- **Monospace / Code Block**: `13px–14px` | line-height `1.5` (`leading-relaxed`) | font `"Geist Mono", "Geist Mono Fallback"`

### Extracted CSS Typography Variables
- `--font-sans: "Geist", "Geist Fallback";`
- `--font-heading: "Geist", "Geist Fallback";`
- `--font-mono: "Geist Mono", "Geist Mono Fallback";`
- `--font-ar: "Noto Sans Arabic", "Noto Sans Arabic Fallback";`
- `--font-he: "Noto Sans Hebrew", "Noto Sans Hebrew Fallback";`
- `--font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;`
- `--text-xs: .75rem;`
- `--text-xs--line-height: calc(1 / .75);`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `896px` (2x), `1400px` (1x), `1600px` (1x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `80px / 48px` (1x)
- **High-Frequency Grid & Flex Gaps**: `8px` (63x), `6px` (34x), `4px` (24x), `12px` (23x), `20px` (14x), `14px` (13x)
- **Extracted Spacing & Radius Variables**: `--radius-xs: .125rem`, `--radius: .625rem`, `--radius-sm: calc(.625rem * .6)`, `--radius-md: calc(.625rem * .8)`, `--radius-lg: .625rem`, `--spacing: .25rem`, `--card-spacing: calc(var(--spacing) * 4)`, `--customizer-width: calc(var(--spacing) * 48)`, `--gap: calc(var(--spacing) * 4)`, `--rail-column: 20rem`

### Surface & Depth Tokens
- **Border Radius Distribution**: `18px` (48x), `19.6px` (24x), `6px 6px 0px 0px` (16x), `24px` (11x), `8px` (10x), `24px 24px 0px 0px` (10x)
- **Glassmorphism / Backdrop Blur**: `none`
- **Box-Shadow Formulas**:
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.145 -0.00000143796 0.00000340492 / 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px` *(observed 15x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,oklab(0.145_-0.00000143796_0.00000340492_/_0.05)_0px_0px_0px_1px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px` *(observed 6x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, lab(2.75381 0 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,lab(2.75381_0_0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, lab(2.75381 0 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,lab(2.75381_0_0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Search documentation...")**: height `32px`, padding `8px 16px`, radius `10px` (`rounded-xl`), bg `#F5F5F5` (`bg-[#F5F5F5]`), text `#000000` (`text-black`), border `none`, font `14px` / weight `500`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
  - **Button Variant 2 ("Button")**: height `32px`, padding `0px 10px`, radius `18px` (`rounded-3xl`), bg `#171717` (`bg-[#171717]`), text `#FAFAFA` (`text-[#FAFAFA]`), border `none`, font `14px` / weight `500`
  - **Button Variant 3 ("Secondary")**: height `32px`, padding `0px 12px`, radius `18px` (`rounded-3xl`), bg `#F5F5F5` (`bg-[#F5F5F5]`), text `#171717` (`text-[#171717]`), border `none`, font `14px` / weight `500`
  - **Button Variant 4 ("Outline")**: height `32px`, padding `0px 12px`, radius `18px` (`rounded-3xl`), bg `#FFFFFF` (`bg-white`), text `#0A0A0A` (`text-[#0A0A0A]`), border `1px solid #E5E5E5`, font `14px` / weight `500`
- **Cards & Containers**:
  - **Card Recipe 1 (330x316px)**: bg `#FFFFFF` (`bg-white`), border `none`, radius `24px` (`rounded-3xl`), padding `20px 0px`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.145 -0.00000143796 0.00000340492 / 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
  - **Card Recipe 2 (290x148px)**: bg `rgba(245, 245, 245, 0.5)` (`bg-[rgba(245,245,245,0.5)]`), border `none`, radius `18px` (`rounded-3xl`), padding `14px 16px`
  - **Card Recipe 3 (290x100px)**: bg `rgba(229, 229, 229, 0.5)` (`bg-[rgba(229,229,229,0.5)]`), border `none`, radius `18px` (`rounded-3xl`), padding `8px 10px`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.4, 0, 0.2, 1)` (86x), `linear` (4x)
- **Transition Durations**: `0.15s` (42x), `0.2s` (35x), `0.1s` (13x)
- **Named Motion Tokens**: `--ease-out: cubic-bezier(0, 0, .2, 1)`, `--ease-in-out: cubic-bezier(.4, 0, .2, 1)`, `--default-transition-duration: .15s`, `--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1)`, `--shimmer-duration: calc(1000 * 1ms)`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for shadcn/ui’s exact `#FFFFFF` canvas and `#F5F5F5` surface pairing.**
- **NEVER replace `Geist` display typography or ignore its signature scale (`48px / -0.05em (w600)`).**
- **NEVER use thick opaque borders that clash with `#E5E5E5` (`1px solid #E5E5E5`).**
- **NEVER deviate from the signature button geometry (`8px / 10px`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `Geist Mono`.
