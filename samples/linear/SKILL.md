---
name: taste-linear
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of linear.app (Linear). Use when building or restyling UI pages, landing pages, dashboards, or components to match Linear's exact design language.
---

# Linear (linear.app) Design System & Aesthetic Skill

> **Source URL**: `https://linear.app`
> **Extracted At**: `2026-10-26T15:18:18.373Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `3760ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Dark Precision SaaS & Industrial Craftsmanship**
- **Semantic Vibe Tags**: `dark-mode`, `precision-saas`, `hairline-borders`, `inter-variable`, `berkeley-mono`, `micro-shadows`
- **Core Signature**: Ultra-dark carbon canvas (`#08090A`) layered with stepped dark surfaces (`#0F1011` -> `#141516` -> `#191A1B`), `1px` translucent white hairline borders (`rgba(255, 255, 255, 0.08)` and `0.05`), custom variable font weights (`510` medium / `590` semibold) with OpenType features (`"cv01", "ss03"`), tight negative letter-spacing (`-0.022em`), and high-contrast inverted pill CTAs (`#E5E5E6` on `#08090A`) paired with signature indigo brand accents (`#5E6AD2` / `#7170FF`).
- **Atmosphere & Contrast Strategy**: Depth is achieved through subtle luminance stepping (`#08090A` canvas -> `#0F1011` level-1 panel -> `#141516` level-2 card -> `#191A1B` level-3 hover) and `1px inset` specular highlights (`rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset`) rather than heavy drop shadows or opaque gray borders.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#08090A` | `--color-bg-primary` | `bg-[#08090A]` | Primary root & body background |
| **surfaceLevel1** | `#0F1011` | `--color-bg-level-1 / --color-bg-panel` | `bg-[#0F1011]` | Primary workspace panels & bento cards |
| **surfaceLevel2** | `#141516` | `--color-bg-level-2 / --color-bg-tint` | `bg-[#141516]` | Elevated cards & interactive containers |
| **surfaceLevel3** | `#191A1B` | `--color-bg-level-3 / #1C1C1F` | `bg-[#191A1B]` | Nested modules, code blocks & hover surfaces |
| **glassHeader** | `rgba(11, 11, 11, 0.8)` | `--header-bg` | `bg-[#0B0B0B]/80 backdrop-blur-[20px]` | Sticky top navigation bar (`--header-blur: 20px`) |
| **borderSubtle** | `rgba(255, 255, 255, 0.05)` | `--color-border-translucent` | `border-white/[0.05]` | Default subtle container & grid hairline |
| **borderStrong** | `rgba(255, 255, 255, 0.08)` | `--color-border-translucent-strong` | `border-white/[0.08]` | Card borders, header bottom divider & code pills (159 DOM instances) |
| **borderHighlight** | `rgba(255, 255, 255, 0.12)` | `computed card border` | `border-white/[0.12]` | Focused/featured card border |
| **textPrimary** | `#F7F8F8` | `--color-text-primary` | `text-[#F7F8F8]` | Hero H1, section H2 headlines & active UI labels |
| **textSecondary** | `#D0D6E0` | `--color-text-secondary` | `text-[#D0D6E0]` | H3 subheadings, code snippets & interactive controls |
| **textMuted** | `#8A8F98` | `--color-text-tertiary` | `text-[#8A8F98]` | Body paragraphs, muted lead copy & secondary nav links |
| **textQuaternary** | `#62666D` | `--color-text-quaternary` | `text-[#62666D]` | Metadata, timestamps, keyboard shortcuts & disabled states |
| **accentInvertCta** | `#E5E5E6` | `--color-button-invert-bg` | `bg-[#E5E5E6] text-[#08090A] hover:bg-white` | Primary high-contrast CTA button fill (`--color-button-invert-bg-hover: #FFFFFF`) |
| **accentBrand** | `#5E6AD2` | `--color-brand-bg / --color-indigo` | `bg-[#5E6AD2] text-white` | Core Linear indigo brand accent & focus ring (`#5E69D1`) |
| **accentElectric** | `#7170FF` | `--color-accent / --color-link-primary (#828FFF)` | `text-[#828FFF]` | Interactive links & active feature indicators |
| **semanticStatus** | `Green #27A644 / Yellow #F0BF00 / Orange #FC7840 / Red #EB5757 / Blue #4EA7FC` | `--color-green / --color-red / --color-blue` | `text-[#27A644] / text-[#EB5757]` | Issue workflow status badges & telemetry indicators |

### Signature Gradients & Surface Lighting
  - `linear-gradient(rgba(11, 11, 11, 0.8) 0%, oklab(0.149576 0.00000680983 0.00000298768 / 0.761905) 100%)`
  - `radial-gradient(52.53% 57.5% at 50% 100%, rgba(8, 9, 10, 0) 0%, rgba(8, 9, 10, 0.5) 100%), linear-gradient(rgb(8, 9, 10) 10%, rgb(208, 214, 224) 100%)`
  - `radial-gradient(50% 50%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 90%)`
  - `linear-gradient(rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.03)), none`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--header-border: #ffffff14 (rgba(255, 255, 255, 0.08));`
- `--header-bg: #0b0b0bcc (rgba(11, 11, 11, 0.8));`
- `--color-white: #fff (#FFFFFF);`
- `--color-black: #000 (#000000);`
- `--color-blue: #4ea7fc (#4EA7FC);`
- `--color-red: #eb5757 (#EB5757);`
- `--color-green: #27a644 (#27A644);`
- `--color-orange: #fc7840 (#FC7840);`
- `--color-yellow: #f0bf00 (#F0BF00);`
- `--color-indigo: #5e6ad2 (#5E6AD2);`
- `--color-teal: #00b8cc (#00B8CC);`
- `--color-linear-plan: #68cc58 (#68CC58);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`
- **Section Heading Font (H2/H3)**: `"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`
- **Body / UI Sans Font**: `"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`
- **Monospace / Code Font**: `"Berkeley Mono", ui-monospace, "SF Mono", Menlo, monospace`
- **OpenType Feature Settings**: `font-feature-settings: "cv01", "ss03";` (enables alternate digits and stylistic sets)

### Computed Type Scale & Tracking Rules
- **Hero H1**: `64px` | line-height `64px` (`leading-[1]`) | letter-spacing `-1.41px` (`tracking-[-0.022em]`) | weight `510` (`font-[510]`) | color `#F7F8F8` (`text-[#F7F8F8]`) | font `Inter Variable`
- **Section H2 (Primary)**: `48px` | line-height `48px` (`leading-[1]`) | letter-spacing `-1.06px` (`tracking-[-0.022em]`) | weight `510` (`font-[510]`) | color `#8A8F98` (`text-[#8A8F98]`) | font `Inter Variable`

- **Card / Feature H3**: `20px` | line-height `26.6px` (`leading-[1.33]`) | letter-spacing `-0.24px` (`tracking-[-0.012em]`) | weight `590` (`font-[590]`) | color `#D0D6E0` (`text-[#D0D6E0]`) | font `Inter Variable`
- **Body Copy (Paragraph)**: `15px` | line-height `24px` (`leading-[1.6]`) | letter-spacing `-0.16px` (`tracking-[-0.011em]`) | weight `400` (`font-[400]`) | color `#8A8F98` (`text-[#8A8F98]`) | font `Inter Variable`
- **Monospace / Code Block**: `12px` | line-height `20px` (`leading-[1.67]`) | letter-spacing `-0.18px` (`tracking-[-0.015em]`) | weight `400` (`font-[400]`) | color `#D0D6E0` (`text-[#D0D6E0]`) | font `Berkeley Mono`

### Extracted CSS Typography Variables
- `--font-serif-display: "Tiempos Headline", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;`
- `--font-monospace: "Berkeley Mono", ui-monospace, "SF Mono", "Menlo", monospace;`
- `--font-regular: "Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", sans-serif;`
- `--font-emoji: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji";`
- `--font-weight-light: 300;`
- `--font-weight-normal: 400;`
- `--font-weight-medium: 510;`
- `--font-weight-semibold: 590;`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1436px` (4x), `1416px` (1x), `1250px` (1x)
  - **Root Layout Formula**: `--homepage-max-width: calc(1344px + 46px * 2)`, `--page-max-width: 1024px`, `--prose-max-width: 624px`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `0px / 48px` (1x), `128px / 128px` (1x), `0px / 96px` (1x)
- **High-Frequency Grid & Flex Gaps**: `8px` (53x), `6px` (29x), `4px` (26x), `2px` (5x), `12px` (4x), `11px` (3x)
- **Extracted Spacing & Radius Variables**: `--radius-4: 4px`, `--radius-6: 6px`, `--radius-8: 8px`, `--radius-12: 12px`, `--radius-16: 16px`, `--page-padding-inline: 24px`, `--page-padding-block: 64px`, `--page-max-width: 1024px`, `--homepage-outer-padding: 46px`, `--homepage-padding-inset: 32px`

### Surface & Depth Tokens
- **Border Radius Distribution**: `8px` (19x), `9px` (13x), `12px` (6x), `6px` (3x), `4px` (3x), `5px` (3x)
- **Glassmorphism / Backdrop Blur**: `blur(20px)`
- **Box-Shadow Formulas**:
  - `rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset` *(observed 4x in DOM, Tailwind: `shadow-[rgba(255,255,255,0.05)_0px_0px_0px_1px_inset]`)*
  - `rgba(0, 0, 0, 0.2) 0px 0px 0px 1px` *(observed 4x in DOM, Tailwind: `shadow-[rgba(0,0,0,0.2)_0px_0px_0px_1px]`)*
  - `rgba(0, 0, 0, 0) 0px 8px 2px 0px, rgba(0, 0, 0, 0.01) 0px 5px 2px 0px, rgba(0, 0, 0, 0.04) 0px 3px 2px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 1px 0px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_8px_2px_0px,rgba(0,0,0,0.01)_0px_5px_2px_0px,rgba(0,0,0,0.04)_0px_3px_2px_0px,rgba(0,0,0,0.07)_0px_1px_1px_0px,rgba(0,0,0,0.08)_0px_0px_1px_0px]`)*
  - `rgba(0, 0, 0, 0.2) 0px 0px 0px 2px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(0,0,0,0.2)_0px_0px_0px_2px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Sign up")**: height `32px`, padding `0px 12px`, radius `9999px` (`rounded-full`), bg `#E5E5E6` (`bg-[#E5E5E6]`), text `#08090A` (`text-[#08090A]`), border `1px solid #E5E5E6`, font `13px` / weight `510`, shadow `rgba(0, 0, 0, 0) 0px 8px 2px 0px, rgba(0, 0, 0, 0.01) 0px 5px 2px 0px, rgba(0, 0, 0, 0.04) 0px 3px 2px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 1px 0px`
  - **Button Variant 2 ("Get started")**: height `44px`, padding `0px 20px`, radius `9999px` (`rounded-full`), bg `#E5E5E6` (`bg-[#E5E5E6]`), text `#08090A` (`text-[#08090A]`), border `1px solid #E5E5E6`, font `16px` / weight `510`, shadow `rgba(0, 0, 0, 0) 0px 8px 2px 0px, rgba(0, 0, 0, 0.01) 0px 5px 2px 0px, rgba(0, 0, 0, 0.04) 0px 3px 2px 0px, rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.08) 0px 0px 1px 0px`
  - **Button Variant 3 ("Contact sales")**: height `44px`, padding `0px 20px`, radius `9999px` (`rounded-full`), bg `rgba(255, 255, 255, 0.05)` (`bg-white/[0.05]`), text `#F7F8F8` (`text-[#F7F8F8]`), border `none`, font `16px` / weight `510`, shadow `rgba(255, 255, 255, 0.03) 0px 0px 0px 1px inset, rgba(255, 255, 255, 0.04) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.6) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 4px 0px`, backdrop-filter `blur(4px)`
  - **Button Variant 4 ("Faster app launch")**: height `28px`, padding `0px 7px`, radius `8px` (`rounded-lg`), bg `rgba(255, 255, 255, 0.04)` (`bg-white/[0.04]`), text `#D0D6E0` (`text-[#D0D6E0]`), border `none`, font `13px` / weight `510`
- **Cards & Containers**:
  - **Card Recipe 1 (1072x704px)**: bg `rgba(255, 255, 255, 0.01)` (`bg-white/[0.01]`), border `1px solid rgba(255, 255, 255, 0.05)`, radius `8px` (`rounded-lg`), padding `0px 0px`, shadow `rgba(0, 0, 0, 0.2) 0px 0px 0px 2px`
  - **Card Recipe 2 (662x148px)**: bg `#0F1011` (`bg-[#0F1011]`), border `1px solid rgba(255, 255, 255, 0.08)`, radius `9px` (`rounded-xl`), padding `12px 16px`, shadow `rgba(0, 0, 0, 0.2) 0px 0px 0px 1px`
  - **Card Recipe 3 (400x520px)**: bg `#161718` (`bg-[#161718]`), border `1px solid rgba(255, 255, 255, 0.12)`, radius `12px` (`rounded-xl`), padding `0px 0px`, shadow `rgba(0, 0, 0, 0.25) 0px 2px 32px 0px`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (16x), `cubic-bezier(0.32, 0.72, 0, 1)` (10x), `cubic-bezier(0.25, 0.46, 0.45, 0.94), cubic-bezier(0.25, 0.46, 0.45, 0.94)` (6x), `ease` (2x)
- **Transition Durations**: `0.7s` (10x), `0.1s` (8x), `0.16s` (7x), `0.16s, 0.16s` (6x)
- **Named Motion Tokens**: `--speed-highlightFadeIn: 0s`, `--speed-highlightFadeOut: .15s`, `--speed-quickTransition: .1s`, `--speed-regularTransition: .25s`, `--ease-in-quad: cubic-bezier(.55, .085, .68, .53)`, `--ease-in-cubic: cubic-bezier(.55, .055, .675, .19)`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER use pure `#000000` for large card surfaces or pure `#FFFFFF` for body text**—always use `#08090A` canvas, `#0F1011`/`#141516` cards, and `#F7F8F8` primary text.
- **NEVER use thick opaque gray borders (`border-gray-700`, `border-zinc-600`)**—always use `1px` translucent white hairlines (`border-white/[0.08]` or `border-white/[0.05]`).
- **NEVER use standard `font-bold` (`700` or `800`) on large headlines**—Linear uses custom variable medium weight (`font-[510]`) with tight negative tracking (`tracking-[-0.022em]`) and `leading-none` (`1.0`).
- **NEVER use generic neon blue-to-purple Tailwind gradients (`from-blue-500 to-purple-600`)**—use ultra-subtle white alpha washes (`rgba(255,255,255,0.03)` to `0.04`) and dark radial vignettes.
- **NEVER use fuzzy, high-spread drop shadows on light/colored backgrounds**—use multi-layer micro-shadows (`--shadow-stack-low`) or `1px inset` top highlights (`shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]`).
