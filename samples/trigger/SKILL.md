---
name: taste-trigger
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of trigger.dev (Trigger.dev). Use when building or restyling UI pages, landing pages, dashboards, or components to match Trigger.dev's exact design language.
---

# Trigger.dev (trigger.dev) Design System & Aesthetic Skill

> **Source URL**: `https://trigger.dev`
> **Extracted At**: `2026-10-26T15:25:48.870Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `4508ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Industrial Dark Slate & Electric Acid-Lime Telemetry**
- **Semantic Vibe Tags**: `dark`, `devtools`, `background-jobs`, `workflows`, `acid-lime`, `neon-green`, `trigger`, `satoshi`
- **Core Signature**: Deep gunmetal #121317 canvas with #15171A / #212327 workflow nodes, #1C1E21 structural borders, 60px Satoshi-Variable headings, Geist Mono logs, and #A8FF53 electric lime status accents.
- **Atmosphere & Contrast Strategy**: Built on a dark-mode foundation (`#121317` canvas -> `#15171A` elevated surfaces) anchored by `#1C1E21` structural borders, `Satoshi-Variable` display typography, and `#A8FF53` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#121317` | `computed root canvas` | `bg-[#121317]` | Primary Trigger.dev page canvas |
| **surfaceElevated** | `#15171A` | `computed card surface` | `bg-[#15171A]` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#15171A` | `computed secondary surface` | `bg-[#15171A]` | Secondary interactive container / hover fill |
| **borderPrimary** | `#1C1E21` | `computed border hairline` | `border-[#1C1E21]` | Primary structural divider (1px solid #1C1E21) |
| **borderSecondary** | `#3B3E45` | `computed secondary border` | `border-[#3B3E45]` | Secondary nested module or pill border |
| **textPrimary** | `#D7D9DD` | `computed heading color` | `text-[#D7D9DD]` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#878C99` | `computed body color` | `text-[#878C99]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#A8FF53` | `computed brand accent` | `bg-[#A8FF53]` | Primary interactive CTA & brand highlight (4px) |
| **accentSecondary** | `#A8FF53` | `computed secondary accent` | `text-[#A8FF53]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(90deg, rgb(28, 30, 33) 1px, rgba(0, 0, 0, 0) 1px)`
  - `linear-gradient(to top, rgb(18, 19, 23) 0%, oklab(0 0 0 / 0) 100%)`
  - `linear-gradient(to top, rgb(18, 19, 23) 0%, oklab(0.187446 0.000649907 -0.00823779 / 0.75) 50%, oklab(0 0 0 / 0) 100%)`
  - `linear-gradient(90deg, rgba(18, 19, 23, 0), rgb(18, 19, 23) 25%, rgb(18, 19, 23) 75%, rgba(18, 19, 23, 0)), image-set(url("https://trigger.dev/patterns/crosses-64x64.png") 1dppx, url("https://trigger.dev/patterns/crosses-64x64@2x.png") 2dppx)`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--color-red-400: oklch(70.4% .191 22.216) (#FF6467);`
- `--color-red-500: oklch(63.7% .237 25.331) (#FB2C36);`
- `--color-red-700: oklch(50.5% .213 27.518) (#C10007);`
- `--color-orange-400: oklch(75% .183 55.934) (#FF8904);`
- `--color-orange-500: oklch(70.5% .213 47.604) (#FF6900);`
- `--color-orange-700: oklch(55.3% .195 38.402) (#CA3500);`
- `--color-amber-300: oklch(87.9% .169 91.605) (#FFD230);`
- `--color-amber-400: oklch(82.8% .189 84.429) (#FFB900);`
- `--color-amber-500: oklch(76.9% .188 70.08) (#FE9A00);`
- `--color-yellow-400: oklch(85.2% .199 91.936) (#FDC700);`
- `--color-yellow-500: oklch(79.5% .184 86.047) (#F0B100);`
- `--color-yellow-700: oklch(55.4% .135 66.442) (#A65F00);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `Satoshi-Variable, sans-serif`
- **Section Heading Font (H2/H3)**: `Satoshi-Variable, sans-serif`
- **Body / UI Sans Font**: `Geist, ui-sans-serif, system-ui, -apple-system, sans-serif`
- **Monospace / Code Font**: `"Geist Mono", monospace`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `60px` | line-height `60px` (`leading-[1]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `600` (`font-[600]`) | color `#E8E9EC` (`text-[#E8E9EC]`) | font `Satoshi-Variable`
- **Section H2 (Primary)**: `30px` | line-height `36px` (`leading-[1.2]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `600` (`font-[600]`) | color `#D7D9DD` (`text-[#D7D9DD]`) | font `Satoshi-Variable`

- **Card / Feature H3**: `36px` | line-height `40px` (`leading-[1.11]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `600` (`font-[600]`) | color `#878C99` (`text-[#878C99]`) | font `Satoshi-Variable`
- **Body Copy (Paragraph)**: `18px` | line-height `28px` (`leading-[1.56]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#B5B8C0` (`text-[#B5B8C0]`) | font `Geist`
- **Monospace / Code Block**: `14px` | line-height `20px` (`leading-[1.43]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#9C9AF2` (`text-[#9C9AF2]`) | font `Geist Mono`

### Extracted CSS Typography Variables
- `--font-sans: "Geist", ui-sans-serif, system-ui, -apple-system, sans-serif;`
- `--font-mono: "Geist Mono", monospace;`
- `--text-xs: .75rem;`
- `--text-xs--line-height: calc(1 / .75);`
- `--text-sm: .875rem;`
- `--text-sm--line-height: calc(1.25 / .875);`
- `--text-base: 1rem;`
- `--text-base--line-height: 1.5;`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1224px` (19x), `1440px` (13x), `768px` (3x), `1222px` (2x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `320px / 96px` (1x)
- **High-Frequency Grid & Flex Gaps**: `12px` (46x), `8px` (34x), `normal 4px` (13x), `4px` (6x), `normal 12px` (5x), `6px` (3x)
- **Extracted Spacing & Radius Variables**: `--radius-xs: .125rem`, `--radius-sm: calc(.5rem - 4px)`, `--radius-md: calc(.5rem - 2px)`, `--radius-lg: .5rem`, `--radius-xl: .75rem`, `--spacing: .25rem`

### Surface & Depth Tokens
- **Border Radius Distribution**: `4px` (54x), `6px` (1x)
- **Glassmorphism / Backdrop Blur**: `blur(12px)`, `blur(16px)`
- **Box-Shadow Formulas**:
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` *(observed 1x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("AI agents")**: height `40px`, padding `0px 12px`, radius `4px` (`rounded`), bg `#212327` (`bg-[#212327]`), text `#D7D9DD` (`text-[#D7D9DD]`), border `1px solid #1C1E21`, font `16px` / weight `400`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
  - **Button Variant 2 ("Media processing")**: height `40px`, padding `0px 12px`, radius `4px` (`rounded`), bg `#121317` (`bg-[#121317]`), text `#B5B8C0` (`text-[#B5B8C0]`), border `1px solid #1C1E21`, font `16px` / weight `400`
- **Cards & Containers**:
  - **Card Recipe 1 (384x338px)**: bg `#15171A` (`bg-[#15171A]`), border `1px solid #1C1E21`, radius `4px` (`rounded`), padding `0px 0px`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.4, 0, 0.2, 1)` (184x)
- **Transition Durations**: `0.15s` (60x), `0.3s` (52x), `0.2s` (39x), `0.5s` (29x)
- **Named Motion Tokens**: `--ease-in: cubic-bezier(.4, 0, 1, 1)`, `--ease-out: cubic-bezier(0, 0, .2, 1)`, `--ease-in-out: cubic-bezier(.4, 0, .2, 1)`, `--cc-modal-transition-duration: .25s`, `--default-transition-duration: .15s`, `--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1)`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Trigger.dev’s exact `#121317` canvas and `#15171A` surface pairing.**
- **NEVER replace `Satoshi-Variable` display typography or ignore its signature scale (`60px / 1.0 (w600)`).**
- **NEVER use thick opaque borders that clash with `#1C1E21` (`1px solid #1C1E21`).**
- **NEVER deviate from the signature button geometry (`4px`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `Geist Mono`.
