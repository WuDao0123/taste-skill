---
name: taste-raycast
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of raycast.com (Raycast). Use when building or restyling UI pages, landing pages, dashboards, or components to match Raycast's exact design language.
---

# Raycast (raycast.com) Design System & Aesthetic Skill

> **Source URL**: `https://www.raycast.com`
> **Extracted At**: `2026-10-26T15:26:03.353Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `24587ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Desktop-Class macOS Acrylic Glass & Crimson Spotlight**
- **Semantic Vibe Tags**: `dark`, `glassmorphism`, `macos`, `desktop`, `launcher`, `productivity`, `raycast`, `crimson`
- **Core Signature**: Deep #07080A midnight canvas with rgba(255,255,255,0.02) translucent acrylic panels, 1px rgba(255,255,255,0.08) specular rims, keyboard shortcut kbd badges, and #FF6363 ruby glow.
- **Atmosphere & Contrast Strategy**: Built on a dark-mode foundation (`#07080A` canvas -> `#141517` elevated surfaces) anchored by `rgba(255, 255, 255, 0.08)` structural borders, `Inter` display typography, and `#FF6363` primary accents.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#07080A` | `computed root canvas` | `bg-[#07080A]` | Primary Raycast page canvas |
| **surfaceElevated** | `#141517` | `computed card surface` | `bg-[#141517]` | Primary elevated card & bento surface |
| **surfaceSecondary** | `rgba(0, 0, 0, 0.6)` | `computed secondary surface` | `bg-black/[0.6]` | Secondary interactive container / hover fill |
| **borderPrimary** | `rgba(255, 255, 255, 0.08)` | `computed border hairline` | `border-white/[0.08]` | Primary structural divider (1px rgba(255,255,255,0.08)) |
| **borderSecondary** | `rgba(255, 255, 255, 0.06)` | `computed secondary border` | `border-white/[0.06]` | Secondary nested module or pill border |
| **textPrimary** | `#FFFFFF` | `computed heading color` | `text-white` | Hero H1, section H2 & high-contrast foreground |
| **textMuted** | `#9CA3AF` | `computed body color` | `text-[#9CA3AF]` | Lead paragraphs, descriptions & muted labels |
| **accentPrimary** | `#FF6363` | `computed brand accent` | `bg-[#FF6363]` | Primary interactive CTA & brand highlight (10px) |
| **accentSecondary** | `rgba(255, 255, 255, 0.1)` | `computed secondary accent` | `text-white/[0.1]` | Secondary badge, syntax or telemetry highlight |

### Signature Gradients & Surface Lighting
  - `linear-gradient(137deg, rgba(17, 18, 20, 0.75) 4.87%, rgba(12, 13, 15, 0.9) 75.88%)`
  - `conic-gradient(from 100deg at 135.618px 15px, rgba(0, 0, 0, 0) 0%, rgb(236, 165, 167) 20%, rgba(0, 0, 0, 0) 25%), none`
  - `radial-gradient(85.77% 49.97% at 51% 5.12%, rgba(255, 150, 150, 0.11) 0%, rgba(222, 226, 255, 0.08) 45.83%, rgba(241, 242, 255, 0.02) 100%), none`
  - `linear-gradient(rgb(255, 99, 99), rgb(215, 42, 42))`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--color-bg-100: #101111;`
- `--color-bg-200: #18191a (#18191A);`
- `--color-bg-300: #313133;`
- `--color-bg-400: #494b4d (#494B4D);`
- `--color-fg: #f4f4f6 (#F4F4F6);`
- `--color-fg-200: #c2c7ca (#C2C7CA);`
- `--color-fg-300: #78787c (#78787C);`
- `--color-fg-400: #5e6366 (#5E6366);`
- `--color-yellow: #ffc533 (#FFC533);`
- `--color-yellow-transparent: #ffc53326 (rgba(255, 195, 54, 0.15));`
- `--color-red: #ff6161 (#FF6161);`
- `--color-red-transparent: #ff616126 (rgba(255, 94, 94, 0.15));`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `Inter, "Inter Fallback", sans-serif`
- **Section Heading Font (H2/H3)**: `Inter, "Inter Fallback", sans-serif`
- **Body / UI Sans Font**: `Inter, "Inter Fallback", sans-serif`
- **Monospace / Code Font**: `GeistMono`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `64px` | line-height `70.4px` (`leading-[1.1]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `600` (`font-[600]`) | color `#FFFFFF` (`text-white`) | font `Inter`
- **Section H2 (Primary)**: `32px` | line-height `38.4px` (`leading-[1.2]`) | letter-spacing `-0.8px` (`tracking-[-0.025em]`) | weight `500` (`font-[500]`) | color `#FFFFFF` (`text-white`) | font `Inter`
- **Section H2 (Secondary)**: `20px` | line-height `24px` (`leading-[1.2]`) | letter-spacing `0.2px` (`tracking-[0.01em]`) | weight `500` (`font-[500]`) | color `#FFFFFF` (`text-white`) | font `Inter`
- **Card / Feature H3**: `24px` | line-height `28.8px` (`leading-[1.2]`) | letter-spacing `0.2px` (`tracking-[0.008em]`) | weight `500` (`font-[500]`) | color `#FFFFFF` (`text-white`) | font `Inter`
- **Body Copy (Paragraph)**: `18px` | line-height `21.6px` (`leading-[1.2]`) | letter-spacing `0.2px` (`tracking-[0.011em]`) | weight `400` (`font-[400]`) | color `#FFFFFF` (`text-white`) | font `Inter`
- **Monospace / Code Block**: `13px–14px` | line-height `1.5` (`leading-relaxed`) | font `GeistMono`

### Extracted CSS Typography Variables
- `--font-inter: "Inter", "Inter Fallback";`
- `--font-geist-mono: "GeistMono", ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace;`
- `--font-jetbrains-mono: "jetBrainsMono", "jetBrainsMono Fallback";`
- `--font-instrument-serif: "Instrument Serif", "Instrument Serif Fallback";`
- `--font-vt323: "VT323", "VT323 Fallback";`
- `--font-size: 24px;`
- `--font-color-rgb: 255, 255, 255;`
- `--main-font: "Inter", "Inter Fallback", sans-serif;`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1204px` (3x), `1252px` (2x), `818px` (1x), `1200px` (1x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `224px / 224px` (2x), `48px / 102px` (1x), `40px / 40px` (1x), `32px / 32px` (1x)
- **High-Frequency Grid & Flex Gaps**: `10px` (77x), `8px` (51x), `12px` (30x), `24px` (22x), `2px` (8x), `16px` (4x)
- **Extracted Spacing & Radius Variables**: `--radius: 100px`, `--radius-md: 6px`, `--window-radius: 26px`, `--card-padding: 32px`, `--graphic-width: 270px`, `--padding: 40px`, `--chat-width: 650px`, `--paddingX: var(--spacing-2)`

### Surface & Depth Tokens
- **Border Radius Distribution**: `8px` (104x), `11px` (78x), `6px` (59x), `20px` (38x), `12px` (28x), `4px` (16x)
- **Glassmorphism / Backdrop Blur**: `blur(5px)`, `blur(2px)`, `blur(36px)`, `blur(48px)`, `blur(10px)`, `blur(8px)`, `blur(30px)`, `blur(24px) saturate(1.5)`
- **Box-Shadow Formulas**:
  - `rgba(0, 0, 0, 0.4) 0px 1.5px 0.5px 2.5px, rgb(0, 0, 0) 0px 0px 0.5px 1px, rgba(0, 0, 0, 0.25) 0px 2px 1px 1px inset, rgba(255, 255, 255, 0.2) 0px 1px 1px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px inset` *(observed 78x in DOM, Tailwind: `shadow-[rgba(0,0,0,0.4)_0px_1.5px_0.5px_2.5px,rgb(0,0,0)_0px_0px_0.5px_1px,rgba(0,0,0,0.25)_0px_2px_1px_1px_inset,rgba(255,255,255,0.2)_0px_1px_1px_1px_inset,rgba(0,0,0,0)_0px_0px_0px_0px_inset]`)*
  - `rgba(0, 0, 0, 0.28) 0px 1.189px 2.377px 0px` *(observed 17x in DOM, Tailwind: `shadow-[rgba(0,0,0,0.28)_0px_1.189px_2.377px_0px]`)*
  - `rgba(255, 255, 255, 0.05) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.25) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px -1px 0px 0px inset` *(observed 17x in DOM, Tailwind: `shadow-[rgba(255,255,255,0.05)_0px_1px_0px_0px_inset,rgba(255,255,255,0.25)_0px_0px_0px_1px,rgba(0,0,0,0.2)_0px_-1px_0px_0px_inset]`)*
  - `rgba(0, 0, 0, 0.03) 0px 7px 3px 0px, rgba(0, 0, 0, 0.25) 0px 4px 4px 0px` *(observed 4x in DOM, Tailwind: `shadow-[rgba(0,0,0,0.03)_0px_7px_3px_0px,rgba(0,0,0,0.25)_0px_4px_4px_0px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Sync linear tasks")**: height `32px`, padding `8px 12px`, radius `10px` (`rounded-xl`), bg `rgba(255, 255, 255, 0.1)` (`bg-white/[0.1]`), text `#FFFFFF` (`text-white`), border `none`, font `13px` / weight `400`
  - **Button Variant 2 ("Send")**: height `36px`, padding `2px 12px`, radius `4px` (`rounded`), bg `#E6E6E6` (`bg-[#E6E6E6]`), text `#2F3031` (`text-[#2F3031]`), border `none`, font `14px` / weight `500`, shadow `rgba(0, 0, 0, 0.5) 0px 0px 0px 2px, rgba(255, 255, 255, 0.19) 0px 0px 14px 0px, rgba(0, 0, 0, 0.2) 0px -1px 0.4px 0px inset, rgb(255, 255, 255) 0px 1px 0.4px 0px inset`
  - **Button Variant 3 ("Download")**: height `36px`, padding `8px 12px`, radius `8px` (`rounded-lg`), bg `#E6E6E6` (`bg-[#E6E6E6]`), text `#2F3031` (`text-[#2F3031]`), border `none`, font `14px` / weight `500`, shadow `rgba(0, 0, 0, 0.5) 0px 0px 0px 2px, rgba(255, 255, 255, 0.19) 0px 0px 14px 0px, rgba(0, 0, 0, 0.2) 0px -1px 0.4px 0px inset, rgb(255, 255, 255) 0px 1px 0.4px 0px inset`
- **Cards & Containers**:
  - **Card Recipe 1 (1204x740px)**: bg `rgba(0, 0, 0, 0.44)` (`bg-black/[0.44]`), border `1px solid rgba(255, 255, 255, 0.08)`, radius `19px` (`rounded-3xl`), padding `8px 8px`, shadow `rgba(255, 255, 255, 0.03) 0px 0px 40px 20px, rgba(255, 255, 255, 0.3) 0px 0.5px 0px 0px inset`, backdrop-filter `blur(2px)`
  - **Card Recipe 2 (1186x722px)**: bg `#07080A` (`bg-[#07080A]`), border `1px solid rgba(255, 255, 255, 0.08)`, radius `12px` (`rounded-xl`), padding `0px 0px`, shadow `rgba(255, 255, 255, 0.19) 0px 0px 2px 0px, rgba(255, 255, 255, 0.1) 0px 0.5px 0px 0px inset`
  - **Card Recipe 3 (750x475px)**: bg `rgba(0, 0, 0, 0.6)` (`bg-black/[0.6]`), border `1px solid rgba(140, 140, 145, 0.2)`, radius `12px` (`rounded-xl`), padding `0px 0px`, shadow `rgba(0, 0, 0, 0.4) 0px 4px 40px 8px, rgba(0, 0, 0, 0.8) 0px 0px 0px 0.5px, rgba(255, 255, 255, 0.3) 0px 0.5px 0px 0px inset`, backdrop-filter `blur(36px)`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.23, 1, 0.32, 1), cubic-bezier(0.23, 1, 0.32, 1), cubic-bezier(0.23, 1, 0.32, 1), cubic-bezier(0.23, 1, 0.32, 1), cubic-bezier(0.23, 1, 0.32, 1), cubic-bezier(0.23, 1, 0.32, 1)` (78x), `ease` (42x), `ease-in-out` (10x), `ease, ease, ease-in-out, ease-in-out` (3x)
- **Transition Durations**: `0.4s, 0.2s, 0.2s, 0.2s, 0.4s, 0.4s` (78x), `0.3s` (32x), `0.2s` (20x), `0.2s, 0.2s, 0.2s, 0.1s` (3x)
- **Named Motion Tokens**: `--transition-length: 80px`, `--transition: all 1.8s cubic-bezier(.05, .9, .1, 1)`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER substitute generic uncalibrated gray backgrounds for Raycast’s exact `#07080A` canvas and `#141517` surface pairing.**
- **NEVER replace `Inter` display typography or ignore its signature scale (`64px / 1.1 (w600)`).**
- **NEVER use thick opaque borders that clash with `rgba(255, 255, 255, 0.08)` (`1px rgba(255,255,255,0.08)`).**
- **NEVER deviate from the signature button geometry (`10px`) or introduce off-brand saturated gradients.**
- **NEVER use default browser monospace when rendering code or telemetry**—always pair with `JetBrains Mono`.
