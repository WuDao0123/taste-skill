---
name: taste-stripe
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of stripe.com (Stripe). Use when building or restyling UI pages, landing pages, dashboards, or components to match Stripe's exact design language.
---

# Stripe (stripe.com) Design System & Aesthetic Skill

> **Source URL**: `https://stripe.com`
> **Extracted At**: `2026-10-26T15:18:22.775Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `3969ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **High-Craft Financial Infrastructure & Editorial Light/Navy Dual-Mode**
- **Semantic Vibe Tags**: `fintech`, `editorial-light`, `deep-navy`, `sohne-variable`, `mesh-gradients`, `crisp-4px-buttons`
- **Core Signature**: Crisp high-trust daylight canvas (`#FFFFFF`) paired with cool ice-slate bento surfaces (`#F8FAFD` / `#E5EDF5`), contrasted against authoritative deep navy sections (`#0D1738`), set in light-weight `Söhne Variable` (`font-weight: 300`, `-0.02em` to `-0.025em` tracking) with deep ink-navy typography (`#061B31`), razor-sharp `4px` radius electric indigo CTAs (`#533AFD`), and vibrant multi-stop radial mesh gradients.
- **Atmosphere & Contrast Strategy**: Alternates between sunlit editorial clarity (`#FFFFFF` canvas with `1px solid #E5EDF5` architectural grid lines and `#F8FAFD` bento cells) and high-contrast dark navy telemetry showcases (`#0D1738`), bridged by frosted glass overlays (`rgba(248, 251, 253, 0.45)` + `backdrop-filter: blur(12px)`) and signature purple-magenta-gold radial gradients.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#FFFFFF` | `--hds-color-core-neutral-0` | `bg-white` | Primary light-mode page canvas |
| **canvasDarkNavy** | `#0D1738` | `--hds-color-core-neutralDark-990` | `bg-[#0D1738]` | High-contrast dark navy enterprise & global stats sections |
| **surfaceSubtle** | `#F8FAFD` | `--hds-color-core-neutral-25` | `bg-[#F8FAFD]` | Subtle elevated bento background & quiet card fill |
| **surfaceBento** | `#E5EDF5` | `--hds-color-core-neutral-50` | `bg-[#E5EDF5]` | Modular solutions bento containers & secondary surface (`#ECF0F4`) |
| **surfaceGlass** | `rgba(248, 251, 253, 0.45)` | `computed glass card` | `bg-[#F8FBFD]/45 backdrop-blur-[12px]` | Frosted glass floating UI cards over mesh gradients |
| **borderHairline** | `#E5EDF5` | `--hds-color-core-neutral-50` | `border-[#E5EDF5]` | Primary 1px architectural layout & bento grid dividers (52 DOM instances) |
| **borderAccentQuiet** | `#D6D9FC` | `--hds-color-accent-border-quiet / #B9B9F9` | `border-[#D6D9FC] hover:border-[#B9B9F9]` | Secondary outline button & interactive badge border |
| **borderDarkSection** | `#182659` | `--hds-color-core-neutralDark-900` | `border-[#182659]` | 1px grid hairline inside `#0D1738` dark navy sections |
| **textPrimary** | `#061B31` | `--hds-color-core-neutral-990` | `text-[#061B31]` | Deep ink-navy primary headings & high-contrast foreground |
| **textMuted** | `#50617A` | `--hds-color-core-neutral-600` | `text-[#50617A]` | Primary body copy & feature descriptions (55 DOM instances) |
| **textSecondary** | `#64748D` | `--hds-color-core-neutral-500` | `text-[#64748D]` | Captions, secondary labels & footnotes (`#6480B2` on dark sections) |
| **accentPrimary** | `#533AFD` | `--hds-color-core-brand-600 / --hds-color-accent-surface-solid` | `bg-[#533AFD] hover:bg-[#4032C8] text-white` | Signature Stripe electric indigo CTA button & active accent (`--hds-color-core-brand-700: #4032C8`) |
| **accentSubdued** | `#E2E4FF` | `--hds-color-accent-surface-subdued` | `bg-[#E2E4FF] text-[#533AFD]` | Tinted brand pills, chips & icon containers |
| **semanticAccents** | `Success #00D66F (#00B261) / Magenta #F44BCC / Orange #FF6118 / Lemon #F9B900` | `--hds-color-core-success-400 / --hds-color-core-magenta-350` | `text-[#00B261] / text-[#FF6118]` | Revenue growth charts, live payment indicators & multi-stop gradient anchors |

### Signature Gradients & Surface Lighting
  - `radial-gradient(circle, rgb(127, 125, 252), rgb(244, 75, 204) 33%, rgb(229, 237, 245) 66%)`
  - `radial-gradient(50% 50%, rgba(83, 58, 253, 0.8) 62.5%, rgba(83, 58, 253, 0) 100%)`
  - `radial-gradient(50% 50%, rgba(243, 99, 243, 0.8) 53.85%, rgba(243, 99, 243, 0) 100%)`
  - `radial-gradient(50% 50%, rgb(255, 207, 94) 41.35%, rgba(255, 207, 94, 0) 100%)`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--hds-color-core-brand-25: #f5f5ff (#F5F5FF);`
- `--hds-color-core-brand-25A: #acacff1f (rgba(173, 173, 255, 0.12));`
- `--hds-color-core-brand-50: #e8e9ff (#E8E9FF);`
- `--hds-color-core-brand-50A: #a3a7ff40 (rgba(163, 167, 255, 0.25));`
- `--hds-color-core-brand-75: #e2e4ff (#E2E4FF);`
- `--hds-color-core-brand-100: #d6d9fc (#D6D9FC);`
- `--hds-color-core-brand-100A: #7680f54d (rgba(119, 129, 245, 0.3));`
- `--hds-color-core-brand-200: #b9b9f9 (#B9B9F9);`
- `--hds-color-core-brand-300: #9a9afe (#9A9AFE);`
- `--hds-color-core-brand-400: #7f7dfc (#7F7DFC);`
- `--hds-color-core-brand-400A: #5452fbbf (rgba(84, 81, 251, 0.75));`
- `--hds-color-core-brand-500: #665efd (#665EFD);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `sohne-var, "SF Pro Display", sans-serif`
- **Section Heading Font (H2/H3)**: `sohne-var, "SF Pro Display", sans-serif`
- **Body / UI Sans Font**: `sohne-var, sans-serif`
- **Monospace / Code Font**: `SourceCodePro`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `48px` | line-height `55.2px` (`leading-[1.15]`) | letter-spacing `-0.96px` (`tracking-[-0.02em]`) | weight `300` (`font-[300]`) | color `#061B31 (with mix-blend-mode gradient mask on Hero)` (`text-[#061B31]`) | font `sohne-var`
- **Section H2 (Primary)**: `56px` | line-height `57.7px` (`leading-[1.03]`) | letter-spacing `-1.4px` (`tracking-[-0.025em]`) | weight `300` (`font-[300]`) | color `#FFFFFF` (`text-white`) | font `sohne-var`
- **Section H2 (Secondary)**: `32px` | line-height `35.2px` (`leading-[1.1]`) | letter-spacing `-0.64px` (`tracking-[-0.02em]`) | weight `300` (`font-[300]`) | color `#061B31` (`text-[#061B31]`) | font `sohne-var`
- **Card / Feature H3**: `32px` | line-height `35.2px` (`leading-[1.1]`) | letter-spacing `-0.64px` (`tracking-[-0.02em]`) | weight `300` (`font-[300]`) | color `#061B31` (`text-[#061B31]`) | font `sohne-var`
- **Body Copy (Paragraph)**: `16px` | line-height `22px` (`leading-[1.38]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `300` (`font-[300]`) | color `#50617A` (`text-[#50617A]`) | font `sohne-var`
- **Monospace / Code Block**: `13px–14px` | line-height `1.5` (`leading-relaxed`) | font `SourceCodePro`

### Extracted CSS Typography Variables
- `--hds-font-heading-xxs-letterSpacing: 0em;`
- `--hds-font-heading-xxs-lineHeight: 1.2;`
- `--hds-font-heading-xxs-size: 0.875rem;`
- `--hds-font-heading-xxs-weight: 400;`
- `--hds-font-heading-xs-letterSpacing: 0em;`
- `--hds-font-heading-xs-lineHeight: 1.2;`
- `--hds-font-heading-xs-size: 1rem;`
- `--hds-font-heading-xs-weight: 400;`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1266px` (10x), `1018.37px` (2x), `856px` (2x), `1298px` (1x)
  - **Root Layout Formula**: `--hds-space-layout-content-maxWidth: 1264px`, `--hds-space-layout-columns: 12`, `--hds-space-layout-gap: 16px`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `96px / 96px` (2x), `36px / 36px` (1x), `80px / 80px` (1x), `80px / 0px` (1x)
- **High-Frequency Grid & Flex Gaps**: `8px` (21x), `4px` (12x), `10px` (6x), `16px` (5x), `normal 8px` (3x), `14px` (3x)
- **Extracted Spacing & Radius Variables**: `--hds-space-core-radius-xs: 2px`, `--hds-space-core-radius-sm: 4px`, `--hds-space-core-radius-md: 6px`, `--hds-space-core-radius-lg: 16px`, `--hds-space-core-radius-xl: 32px`, `--hds-space-customerCard-logo-height: 60px`, `--hds-space-input-layered-gap: 24px`, `--hds-space-input-layered-input-maxWidth: 360px`, `--hds-space-input-layered-input-minWidth: 300px`, `--hds-space-input-layered-label-maxWidth: 196px`

### Surface & Depth Tokens
- **Border Radius Distribution**: `6px` (25x), `4px` (25x), `5px` (6x), `8px` (4x), `6px 6px 0px 0px` (3x), `3px` (2x)
- **Glassmorphism / Backdrop Blur**: `blur(12px)`
- **Box-Shadow Formulas**:
  - `rgba(0, 0, 0, 0.1) 0px 20.187px 40.374px -20.187px` *(observed 3x in DOM, Tailwind: `shadow-[rgba(0,0,0,0.1)_0px_20.187px_40.374px_-20.187px]`)*
  - `rgba(50, 50, 93, 0.12) 0px 16px 32px 0px` *(observed 2x in DOM, Tailwind: `shadow-[rgba(50,50,93,0.12)_0px_16px_32px_0px]`)*
  - `rgba(23, 23, 23, 0.08) 0px 15px 35px 0px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(23,23,23,0.08)_0px_15px_35px_0px]`)*
  - `rgba(23, 23, 23, 0.06) 0px 3px 6px 0px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(23,23,23,0.06)_0px_3px_6px_0px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Get started")**: height `48px`, padding `15.5px 24px`, radius `4px` (`rounded`), bg `#533AFD` (`bg-[#533AFD]`), text `#FFFFFF` (`text-white`), border `none`, font `16px` / weight `400`
  - **Button Variant 2 ("Sign in Sign in")**: height `40px`, padding `11.5px 20px`, radius `4px` (`rounded`), bg `transparent` (`bg-[transparent]`), text `#533AFD` (`text-[#533AFD]`), border `1px solid #FFFFFF`, font `14px` / weight `400`
  - **Button Variant 3 ("Sign up with Google")**: height `48px`, padding `14.5px 24px`, radius `4px` (`rounded`), bg `rgba(255, 255, 255, 0.65)` (`bg-white/[0.65]`), text `#533AFD` (`text-[#533AFD]`), border `1px solid #B9B9F9`, font `16px` / weight `400`
  - **Button Variant 4 ("Contact sales")**: height `40px`, padding `11.5px 20px`, radius `4px` (`rounded`), bg `#533AFD` (`bg-[#533AFD]`), text `#FFFFFF` (`text-white`), border `none`, font `14px` / weight `400`
- **Cards & Containers**:
  - **Card Recipe 1 (630x580px)**: bg `rgba(248, 251, 253, 0.45)` (`bg-[rgba(248,251,253,0.45)]`), border `none`, radius `6px` (`rounded-md`), padding `0px 0px`, shadow `rgba(23, 23, 23, 0.08) 0px 15px 35px 0px`, backdrop-filter `blur(12px)`
  - **Card Recipe 2 (618x539px)**: bg `#FFFFFF` (`bg-white`), border `none`, radius `6px` (`rounded-md`), padding `0px 0px`, shadow `rgba(23, 23, 23, 0.06) 0px 3px 6px 0px`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.25, 1, 0.5, 1)` (175x), `linear` (36x), `cubic-bezier(0.165, 0.84, 0.44, 1)` (34x), `cubic-bezier(0.16, 1, 0.3, 1)` (18x)
- **Transition Durations**: `0.3s` (176x), `0.15s` (36x), `0.8s` (34x), `0.6s` (13x)
- **Named Motion Tokens**: `--ease: cubic-bezier(0.25,1,0.5,1)`, `--navigation-duration: 240ms`, `--navigation-duration-slow: 300ms`, `--navigation-hamburger-duration: 0.25s`, `--navigation-menu-transition-delay: 0s`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER use pure black (`#000000`) or neutral gray (`#111827`) for headings or dark sections**—Stripe uses deep maritime ink-navy (`#061B31` for text, `#0D1738` for dark sections) and cool slate (`#50617A`) for body copy.
- **NEVER use heavy bold (`700`/`800`) weights on display headlines**—Stripe’s current HDS aesthetic uses refined light-weight `Söhne Variable` (`font-light` / `300`) at large sizes (`48px–56px`) with tight negative tracking (`-0.02em` to `-0.025em`) for an architectural editorial feel.
- **NEVER use pill-shaped (`rounded-full`) or overly rounded (`rounded-2xl`) primary buttons**—Stripe’s HDS buttons use crisp `4px` corners (`--hds-space-button-radius-lg: 4px`, `rounded-[4px]`) with `48px` height (`h-12 px-6`).
- **NEVER use muddy black drop shadows**—always use cool-tinted ambient shadows (`shadow-[0_16px_32px_0_rgba(50,50,93,0.12)]` or `shadow-[0_15px_35px_0_rgba(23,23,23,0.08)]`).
- **NEVER leave large white layouts floating without structure**—anchor sections with `1px solid #E5EDF5` architectural grid hairlines and `1264px` (`--hds-space-layout-content-maxWidth`) containers.
