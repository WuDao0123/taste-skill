---
name: taste-cal
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of cal.com (Cal.com). Use when building or restyling UI pages, landing pages, dashboards, or components to match Cal.com's exact design language.
---

# Cal.com (cal.com) Design System & Aesthetic Skill

> **Source URL**: `https://cal.com`
> **Extracted At**: `2026-10-26T15:25:49.235Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `4979ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Neo-Brutalist Swiss Scheduling & Geometric Cal Sans**
- **Semantic Vibe Tags**: `light`, `scheduling`, `calendar`, `open-source`, `cal`, `calsans`, `geometric`, `bento`
- **Core Signature**: Tactile #F4F4F4 industrial stone canvas with crisp #FFFFFF widget cards, bold 64px geometric Cal Sans display headings, high-contrast #242424 ink, and #AA61F1 violet scheduling accents.
- **Atmosphere & Contrast Strategy**: Built on a light-mode foundation (`#F4F4F4` canvas -> `#FFFFFF` elevated surfaces) anchored by `#E5E5E5` structural borders, `Cal Sans` display typography, and `#242424` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#F4F4F4` | `computed root canvas` | `bg-[#F4F4F4]` | Primary Cal.com page canvas |
| **surfaceElevated** | `#FFFFFF` | `computed card surface` | `bg-white` | Primary elevated card & bento surface |
| **surfaceSecondary** | `#F4F4F4` | `computed secondary surface` | `bg-[#F4F4F4]` | Secondary interactive container / hover fill |
| **borderPrimary** | `#E5E5E5` | `computed border hairline` | `border-[#E5E5E5]` | Primary structural divider (1px solid #E5E5E5) |
| **borderSecondary** | `#E5E5E5` | `computed secondary border` | `border-[#E5E5E5]` | Secondary nested module or pill border |
| **textPrimary** | `#242424` | `computed heading color` | `text-[#242424]` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#898989` | `computed body color` | `text-[#898989]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#242424` | `computed brand accent` | `bg-[#242424]` | Primary interactive CTA & brand highlight (12px) |
| **accentSecondary** | `#7826B1` | `computed secondary accent` | `text-[#7826B1]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(rgb(41, 41, 41) 0%, rgb(36, 36, 36) 100%)`
  - `linear-gradient(rgb(247, 247, 248) 0%, rgb(234, 234, 235) 100%)`
  - `linear-gradient(rgb(252, 252, 252) 0%, rgb(255, 255, 255) 100%)`
  - `radial-gradient(50% 50%, rgba(255, 255, 255, 0) 87.1499%, rgb(255, 255, 255) 100%)`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--token-fe0d69fb-0445-4f97-b1b4-d5035d890a7a: #242424;`
- `--token-04285ea8-7979-4c0d-9108-9b979d0dc201: #292929;`
- `--token-73a9b904-5ed0-4590-a8cc-d5ddf2346358: #898989;`
- `--token-dfc22ccd-cb7d-477e-862b-97507724854f: #fff (#FFFFFF);`
- `--token-929b8a8e-1101-4904-980f-6a5ad686df10: #f4f4f4 (#F4F4F4);`
- `--token-7aa2a84c-a2d2-4d0d-b94c-6df01b327af2: #e5e7eb (#E5E7EB);`
- `--token-1707e66c-e139-40d8-8020-8176f47ee22b: #e1e2e3 (#E1E2E3);`
- `--token-851bb574-8c69-41a0-b35c-b891de337dd8: #fcfcfc (#FCFCFC);`
- `--token-ff1e49ba-8f64-4300-83d8-8ab67dfa21d0: #0d0c27 (#0D0C27);`
- `--token-f30c123d-1686-4848-be4d-a9b5f266a6f3: #6349ea (#6349EA);`
- `--token-7b021206-bfa6-4696-bc89-f1e80240dc7d: #875fe0 (#875FE0);`
- `--token-a46d5d83-ff86-4525-9854-f2504a9bd4e4: #c292ff (#C292FF);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `"Cal Sans", "Cal Sans Placeholder", sans-serif`
- **Section Heading Font (H2/H3)**: `"Cal Sans", "Cal Sans Placeholder", sans-serif`
- **Body / UI Sans Font**: `"Cal Sans UI Variable Light", "Cal Sans UI Variable Light Placeholder", sans-serif`
- **Monospace / Code Font**: `"Fragment Mono"`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `64px` | line-height `70.4px` (`leading-[1.1]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `600` (`font-[600]`) | color `#242424` (`text-[#242424]`) | font `Cal Sans`
- **Section H2 (Primary)**: `48px` | line-height `52.8px` (`leading-[1.1]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `600` (`font-[600]`) | color `#242424` (`text-[#242424]`) | font `Cal Sans`

- **Card / Feature H3**: `18px` | line-height `23.4px` (`leading-[1.3]`) | letter-spacing `-0.2px` (`tracking-[-0.011em]`) | weight `300` (`font-[300]`) | color `#242424` (`text-[#242424]`) | font `Cal Sans UI Variable Light`
- **Body Copy (Paragraph)**: `16px` | line-height `24px` (`leading-[1.5]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `300` (`font-[300]`) | color `#898989` (`text-[#898989]`) | font `Cal Sans UI Variable Light`
- **Monospace / Code Block**: `13px–14px` | line-height `1.5` (`leading-relaxed`) | font `"Fragment Mono"`

### Extracted CSS Typography Variables
- `--font-variation-settings: normal;`
- `--font-family: var(--framer-font-family);`
- `--font-style: var(--framer-font-style);`
- `--font-weight: var(--framer-font-weight);`
- `--letter-spacing: var(--framer-letter-spacing);`
- `--font-size: var(--framer-font-size);`
- `--line-height: var(--framer-line-height);`
- `--framer-font-family: Inter, Inter Placeholder, sans-serif;`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1224px` (16x), `640px` (15x), `1200px` (6x), `1280px` (6x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `96px / 0px` (1x)
- **High-Frequency Grid & Flex Gaps**: `10px` (166x), `4px` (100x), `8px` (31x), `12px` (23x), `16px` (11x), `48px` (8x)
- **Extracted Spacing & Radius Variables**: `--framer-text-background-radius: initial`, `--framer-text-background-padding: initial`, `--border-bottom-width: 0px`, `--border-left-width: 1px`, `--border-right-width: 1px`, `--border-top-width: 0px`

### Surface & Depth Tokens
- **Border Radius Distribution**: `12px` (44x), `4px` (39x), `2px` (35x), `29px` (32x), `8px` (30x), `16px` (22x)
- **Glassmorphism / Backdrop Blur**: `none`
- **Box-Shadow Formulas**:
  - `rgba(0, 0, 0, 0.16) 0px 1px 1.9px 0px inset` *(observed 64x in DOM, Tailwind: `shadow-[rgba(0,0,0,0.16)_0px_1px_1.9px_0px_inset]`)*
  - `rgba(36, 36, 36, 0.7) 0px 1px 5px -4px, rgba(36, 36, 36, 0.05) 0px 4px 8px 0px` *(observed 17x in DOM, Tailwind: `shadow-[rgba(36,36,36,0.7)_0px_1px_5px_-4px,rgba(36,36,36,0.05)_0px_4px_8px_0px]`)*
  - `rgba(19, 19, 22, 0.7) 0px 1px 5px -4px, rgba(34, 42, 53, 0.1) 0px 0px 0px 1px, rgba(34, 42, 53, 0.05) 0px 4px 8px 0px` *(observed 8x in DOM, Tailwind: `shadow-[rgba(19,19,22,0.7)_0px_1px_5px_-4px,rgba(34,42,53,0.1)_0px_0px_0px_1px,rgba(34,42,53,0.05)_0px_4px_8px_0px]`)*
  - `rgba(0, 0, 0, 0) 0px 1px 3px 0px, rgba(0, 0, 0, 0) 0px 0px 2px 0px` *(observed 6x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_1px_3px_0px,rgba(0,0,0,0)_0px_0px_2px_0px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Get started")**: height `36px`, padding `8px 12px`, radius `12px` (`rounded-xl`), bg `transparent` (`bg-[transparent]`), text `#0000EE` (`text-[#0000EE]`), border `none`, font `12px` / weight `400`, shadow `rgba(255, 255, 255, 0.15) 0px 2px 0px 0px inset`
- **Cards & Containers**:
  - **Card Recipe 1 (1176x700px)**: bg `#FFFFFF` (`bg-white`), border `none`, radius `12px` (`rounded-xl`), padding `0px 0px`, shadow `rgba(36, 36, 36, 0.7) 0px 1px 5px -4px, rgba(36, 36, 36, 0.05) 0px 4px 8px 0px`
  - **Card Recipe 2 (341x423px)**: bg `#FFFFFF` (`bg-white`), border `none`, radius `16px` (`rounded-2xl`), padding `24px 24px`, shadow `rgba(36, 36, 36, 0.7) 0px 1px 5px -4px, rgba(36, 36, 36, 0.05) 0px 4px 8px 0px`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.16, 1, 0.3, 1)`
- **Transition Durations**: `0.15s`, `0.25s`


---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Cal.com’s exact `#F4F4F4` canvas and `#FFFFFF` surface pairing.**
- **NEVER replace `Cal Sans` display typography or ignore its signature scale (`64px / 1.1 (w600)`).**
- **NEVER use thick opaque borders that clash with `#E5E5E5` (`1px solid #E5E5E5`).**
- **NEVER deviate from the signature button geometry (`12px`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `Roboto Mono`.
