---
name: taste-tailwindcss
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of tailwindcss.com (Tailwind CSS). Use when building or restyling UI pages, landing pages, dashboards, or components to match Tailwind CSS's exact design language.
---

# Tailwind CSS (tailwindcss.com) Design System & Aesthetic Skill

> **Source URL**: `https://tailwindcss.com`
> **Extracted At**: `2026-10-26T15:26:07.460Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `3946ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Engineered CSS Grid Lines & Technical Blueprint Precision**
- **Semantic Vibe Tags**: `light`, `css`, `design-system`, `grid-lines`, `blueprint`, `tailwind`, `devtools`, `plex-mono`
- **Core Signature**: Daylight #FFFFFF canvas overlaid with exposed 1px rgba(0,0,20,0.05) blueprint construction lines, monumental 96px Inter headlines (-0.05em), PlexMono utility classes, and #38BDF8 / #F6339A accents.
- **Atmosphere & Contrast Strategy**: Built on a light-mode foundation (`#FFFFFF` canvas -> `#F8FAFC` elevated surfaces) anchored by `rgba(0, 0, 20, 0.05)` structural borders, `Inter` display typography, and `#0EA5E9` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#FFFFFF` | `computed root canvas` | `bg-white` | Primary Tailwind CSS page canvas |
| **surfaceElevated** | `#F8FAFC` | `computed card surface` | `bg-[#F8FAFC]` | Primary elevated card & bento surface |
| **surfaceSecondary** | `rgba(0, 0, 0, 0.02)` | `computed secondary surface` | `bg-black/[0.02]` | Secondary interactive container / hover fill |
| **borderPrimary** | `rgba(0, 0, 20, 0.05)` | `computed border hairline` | `border-[rgba(0,0,20,0.05)]` | Primary structural divider (1px rgba(0,0,20,0.05)) |
| **borderSecondary** | `rgba(0, 0, 20, 0.05)` | `computed secondary border` | `border-[rgba(0,0,20,0.05)]` | Secondary nested module or pill border |
| **textPrimary** | `#030712` | `computed heading color` | `text-[#030712]` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#4A5565` | `computed body color` | `text-[#4A5565]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#0EA5E9` | `computed brand accent` | `bg-[#0EA5E9]` | Primary interactive CTA & brand highlight (16px / 9999px) |
| **accentSecondary** | `rgba(255, 255, 255, 0.1)` | `computed secondary accent` | `text-white/[0.1]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `repeating-linear-gradient(315deg, oklab(0 0 0 / 0.05) 0px, oklab(0 0 0 / 0.05) 1px, rgba(0, 0, 0, 0) 0px, rgba(0, 0, 0, 0) 50%)`
  - `radial-gradient(oklab(0.129999 -0.00404751 -0.027702 / 0.05) 1px, rgba(0, 0, 0, 0) 0px)`
  - `linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, lab(1.90334 0.278696 -5.48866) 100%)`

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
- `--color-orange-50: lab(97.7008% 1.53735 5.90649) (#FFF7ED);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `inter, "inter Fallback", system-ui`
- **Section Heading Font (H2/H3)**: `inter, "inter Fallback", system-ui`
- **Body / UI Sans Font**: `inter, "inter Fallback", system-ui`
- **Monospace / Code Font**: `plexMono, "plexMono Fallback", monospace`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `96px` | line-height `96px` (`leading-[1]`) | letter-spacing `-4.8px` (`tracking-[-0.05em]`) | weight `400` (`font-[400]`) | color `#030712` (`text-[#030712]`) | font `inter`
- **Section H2 (Primary)**: `40px` | line-height `40px` (`leading-[1]`) | letter-spacing `-2px` (`tracking-[-0.05em]`) | weight `500` (`font-[500]`) | color `#030712` (`text-[#030712]`) | font `inter`

- **Card / Feature H3**: `36px` | line-height `48px` (`leading-[1.33]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `600` (`font-[600]`) | color `#030712` (`text-[#030712]`) | font `inter`
- **Body Copy (Paragraph)**: `18px` | line-height `28px` (`leading-[1.56]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `500` (`font-[500]`) | color `#4A5565` (`text-[#4A5565]`) | font `inter`
- **Monospace / Code Block**: `13px` | line-height `24px` (`leading-[1.85]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#030712` (`text-[#030712]`) | font `plexMono`

### Extracted CSS Typography Variables
- `--font-inter: "inter", "inter Fallback";`
- `--font-source-sans-pro: "source", "source Fallback";`
- `--font-plex-mono: "plexMono", "plexMono Fallback";`
- `--font-ubuntu-mono: "ubuntuMono", "ubuntuMono Fallback";`
- `--font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;`
- `--text-xs: .75rem;`
- `--text-xs--line-height: calc(1 / .75);`
- `--text-sm: .875rem;`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `768px` (3x), `1440px` (1x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `57px / 0px` (1x), `0px / 160px` (1x), `32px / 32px` (1x)
- **High-Frequency Grid & Flex Gaps**: `8px` (32x), `16px` (10x), `24px 32px` (7x), `24px` (4x), `40px` (4x), `44px` (4x)
- **Extracted Spacing & Radius Variables**: `--radius-xs: .125rem`, `--radius-sm: .25rem`, `--radius-md: .375rem`, `--radius-lg: .5rem`, `--radius-xl: .75rem`, `--spacing: .25rem`, `--anchor-gap: var(--spacing)`, `--anchor-padding: 8px`, `--gap: calc(var(--spacing) * 10)`, `--gutter-width: 2.5rem`

### Surface & Depth Tokens
- **Border Radius Distribution**: `8px` (27x), `16px` (12x), `12px` (10x), `32px` (2x), `24px` (1x), `16px 16px 0px 0px` (1x)
- **Glassmorphism / Backdrop Blur**: `blur(12px)`, `blur(8px)`, `brightness(1.5)`, `grayscale(1)`, `contrast(1.5)`, `saturate(2)`, `sepia(1)`
- **Box-Shadow Formulas**:
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.129999 -0.00404751 -0.027702 / 0.1) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px` *(observed 188x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,oklab(0.129999_-0.00404751_-0.027702_/_0.1)_0px_0px_0px_1px_inset,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.999994 0.0000455678 0.0000200868 / 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.129999 -0.00404751 -0.027702 / 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px` *(observed 6x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,oklab(0.999994_0.0000455678_0.0000200868_/_0.2)_0px_0px_0px_1px_inset,rgba(0,0,0,0)_0px_0px_0px_0px,oklab(0.129999_-0.00404751_-0.027702_/_0.1)_0px_0px_0px_1px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.999994 0.0000455678 0.0000200868 / 0.1) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px` *(observed 4x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,oklab(0.999994_0.0000455678_0.0000200868_/_0.1)_0px_0px_0px_1px_inset,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px` *(observed 4x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("v4.3")**: height `24px`, padding `2px 6px`, radius `16px` (`rounded-2xl`), bg `rgba(0, 0, 20, 0.05)` (`bg-[rgba(0,0,20,0.05)]`), text `#030712` (`text-[#030712]`), border `none`, font `12px` / weight `500`
  - **Button Variant 2 ("⌘K")**: height `24px`, padding `4px 8px`, radius `9999px` (`rounded-full`), bg `rgba(0, 0, 0, 0.02)` (`bg-black/[0.02]`), text `#000000` (`text-black`), border `none`, font `16px` / weight `400`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.129999 -0.00404751 -0.027702 / 0.08) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
  - **Button Variant 3 ("Quick search ⌘K")**: height `40px`, padding `8px 16px`, radius `9999px` (`rounded-full`), bg `transparent` (`bg-[transparent]`), text `rgba(4, 8, 18, 0.5)` (`text-[rgba(4,8,18,0.5)]`), border `none`, font `14px` / weight `400`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.129999 -0.00404751 -0.027702 / 0.08) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
  - **Button Variant 4 ("Check availability")**: height `40px`, padding `8px 12px`, radius `8px` (`rounded-lg`), bg `#F6339A` (`bg-[#F6339A]`), text `#FFFFFF` (`text-white`), border `none`, font `14px` / weight `700`
- **Cards & Containers**:
  - **Card Recipe 1 (885x360px)**: bg `rgba(255, 255, 255, 0.1)` (`bg-white/[0.1]`), border `none`, radius `8px` (`rounded-lg`), padding `12px 12px`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.999994 0.0000455678 0.0000200868 / 0.1) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
  - **Card Recipe 2 (768x416px)**: bg `#FFFFFF` (`bg-white`), border `none`, radius `16px 16px 0px 0px` (`rounded-2xl`), padding `24px 24px`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.129999 -0.00404751 -0.027702 / 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`
  - **Card Recipe 3 (256x387px)**: bg `#FFFFFF` (`bg-white`), border `none`, radius `12px` (`rounded-xl`), padding `0px 0px`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.129999 -0.00404751 -0.027702 / 0.05) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.4, 0, 0.2, 1)` (224x)
- **Transition Durations**: `0.15s` (220x), `0.35s` (4x)
- **Named Motion Tokens**: `--ease-in: cubic-bezier(.4, 0, 1, 1)`, `--ease-out: cubic-bezier(0, 0, .2, 1)`, `--ease-in-out: cubic-bezier(.4, 0, .2, 1)`, `--default-transition-duration: .15s`, `--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1)`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Tailwind CSS’s exact `#FFFFFF` canvas and `#F8FAFC` surface pairing.**
- **NEVER replace `Inter` display typography or ignore its signature scale (`96px / -0.05em (w400)`).**
- **NEVER use thick opaque borders that clash with `rgba(0, 0, 20, 0.05)` (`1px rgba(0,0,20,0.05)`).**
- **NEVER deviate from the signature button geometry (`16px / 9999px`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `IBM Plex Mono (plexMono)`.
