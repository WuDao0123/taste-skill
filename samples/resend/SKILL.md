---
name: taste-resend
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of resend.com (Resend). Use when building or restyling UI pages, landing pages, dashboards, or components to match Resend's exact design language.
---

# Resend (resend.com) Design System & Aesthetic Skill

> **Source URL**: `https://resend.com`
> **Extracted At**: `2026-10-26T15:18:30.789Z` (Live Chromium DOM `getComputedStyle` + CSS Stylesheet Scanner in `7586ms`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **Obsidian Developer Luxury & Editorial Serif-Meets-Mono**
- **Semantic Vibe Tags**: `obsidian-dark`, `editorial-serif`, `developer-tools`, `domaine-serif`, `abc-favorit`, `commit-mono`, `glass-buttons`
- **Core Signature**: Pure obsidian `#000000` canvas contrasted with translucent ice-slate borders (`rgba(212, 234, 255, 0.19)` / `--slate-a6`), pairing a dramatic `96px` editorial serif Hero (`Domaine`) and ultra-tight `-0.05em` neo-grotesque section headings (`ABC Favorit`) with `CommitMono` developer code blocks and `blur(25px)` frosted glass `16px`-radius CTA buttons.
- **Atmosphere & Contrast Strategy**: Builds theatrical luxury on a true `#000000` void by replacing flat gray borders with cool cyan-tinted translucent hairlines (`--slate-a6: rgba(212, 234, 255, 0.19)` and `--slate-a4: rgba(211, 237, 246, 0.11)`), subtle `oklab` conic/linear spotlight gradients, and `backdrop-filter: blur(25px)` glassmorphic controls.

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
| **canvasBg** | `#000000` | `--color-background / --background` | `bg-black` | True pitch-black primary canvas (unlike Linear’s `#08090A`) |
| **surfaceCanvas** | `rgba(20, 22, 23, 0.6)` | `--color-canvas / --gray-1 (#141517)` | `bg-[#141517]/60` | Translucent dark card & code editor surface |
| **surfaceElevated** | `#191B1E` | `--color-gray-2 / --gray-3 (#212629)` | `bg-[#191B1E]` | Elevated interactive tabs, terminal headers & secondary panels |
| **borderIceSlate** | `rgba(212, 234, 255, 0.19)` | `--color-slate-6 / --slate-a6` | `border-[rgba(212,234,255,0.19)]` | Signature cool-tinted translucent border across sections, cards & pills (234 DOM instances) |
| **borderSubtleSlate** | `rgba(211, 237, 246, 0.11)` | `--color-slate-4 / --slate-a4` | `border-[rgba(211,237,246,0.11)]` | Secondary inner code-block & divider hairline |
| **borderGlassBtn** | `rgba(255, 255, 255, 0.05)` | `oklab(1 0 0 / 0.05)` | `border-2 border-white/[0.05]` | 2px translucent rim on frosted glass CTA buttons |
| **textPrimary** | `#F0F0F0` | `--color-gray-12` | `text-[#F0F0F0]` | Hero H1 & Section H2 primary display text |
| **textHeadingHigh** | `rgba(252, 253, 255, 0.94)` | `--color-slate-12 / --slate-a12` | `text-[#FCFDFF]/[0.94]` | Feature card H3 headings & active labels |
| **textMuted** | `#A1A4A5` | `--color-gray-11` | `text-[#A1A4A5]` | Primary 18px body copy & lead paragraphs (51 DOM instances) |
| **textCode** | `rgba(241, 247, 254, 0.71)` | `--color-slate-11 / #EBECED` | `text-[#F1F7FE]/[0.71]` | Terminal output, JSON payloads & code block foreground |
| **accentCyan** | `#00A3FF` | `computed CTA accent / #3B9EFF` | `bg-[#00A3FF] text-white` | High-visibility developer action button & active focus highlight |
| **accentViolet** | `#9281F7` | `--color-violet-9 (#8668FFCC) / #BAA7FF` | `text-[#9281F7]` | Syntax highlighting, badge accents & `linear-gradient(to right bottom in oklab, #9281F7, #9A54DC)` |
| **accentEmerald** | `rgba(70, 254, 165, 0.83)` | `--color-green-11 / --green-a11` | `text-[#46FEA5]/[0.83]` | HTTP 200 status indicators & deliverability telemetry |

### Signature Gradients & Surface Lighting
  - `linear-gradient(104deg, rgba(253, 253, 253, 0.05) 5%, rgba(240, 240, 228, 0.1) 100%)`
  - `linear-gradient(73.7975deg, rgba(2, 252, 239, 0.44) 0%, rgba(255, 181, 43, 0.44) 50%, rgba(160, 43, 254, 0.44) 100%)`
  - `linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.5))`
  - `conic-gradient(from 90deg, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, rgba(0, 0, 0, 0) 80%)`

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
- `--color-forge-green: #44ffa4 (#44FFA4);`
- `--color-forge-red: #fe4e54 (#FE4E54);`
- `--color-forge-green-solid: #2ca86c (#2CA86C);`
- `--color-forge-red-solid: #a82c2c (#A82C2C);`
- `--color-forge-canvas: #010101;`
- `--color-forge-line: #1a1a1a (#1A1A1A);`
- `--color-forge-ink: #535a5c (#535A5C);`
- `--color-forge-ink-muted: #d8eaf161 (rgba(216, 234, 242, 0.38));`
- `--color-red-500: lab(55.4814% 75.0732 48.8528) (#FB2C36);`
- `--color-red-600: lab(48.4493% 77.4328 61.5452) (#E7000B);`
- `--color-orange-400: lab(70.0429% 42.5156 75.8207) (#FF8904);`
- `--color-orange-500: lab(64.272% 57.1788 90.3583) (#FF6900);`

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: `domaine, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
- **Section Heading Font (H2/H3)**: `aBCFavorit, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
- **Body / UI Sans Font**: `inter, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`
- **Monospace / Code Font**: `commitMono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`


### Computed Type Scale & Tracking Rules
- **Hero H1**: `96px` | line-height `96px` (`leading-[1]`) | letter-spacing `-0.96px` (`tracking-[-0.01em]`) | weight `400` (`font-[400]`) | color `#F0F0F0` (`text-[#F0F0F0]`) | font `domaine`
- **Section H2 (Primary)**: `56px` | line-height `67.2px` (`leading-[1.2]`) | letter-spacing `-2.8px` (`tracking-[-0.05em]`) | weight `400` (`font-[400]`) | color `#F0F0F0` (`text-[#F0F0F0]`) | font `aBCFavorit`

- **Card / Feature H3**: `20px` | line-height `20px` (`leading-[1]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `rgba(252, 253, 255, 0.94)` (`text-[rgba(252,253,255,0.94)]`) | font `aBCFavorit`
- **Body Copy (Paragraph)**: `18px` | line-height `27px` (`leading-[1.5]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#A1A4A5` (`text-[#A1A4A5]`) | font `inter`
- **Monospace / Code Block**: `14px` | line-height `20px` (`leading-[1.43]`) | letter-spacing `0px` (`tracking-[0em]`) | weight `400` (`font-[400]`) | color `#EBECED` (`text-[#EBECED]`) | font `commitMono`

### Extracted CSS Typography Variables
- `--font-inter: "inter";`
- `--font-abc-favorit: "aBCFavorit";`
- `--font-domaine-src: "domaine";`
- `--font-commit-mono: "commitMono";`
- `--text-xs: .75rem;`
- `--text-xs--line-height: calc(1 / .75);`
- `--text-sm: .875rem;`
- `--text-sm--line-height: calc(1.25 / .875);`

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: `1280px` (9x), `1024px` (2x), `768px` (1x)
  - **Root Container Tokens**: `max-w-[1280px] mx-auto px-6`
- **Section Vertical Rhythm (Padding Top / Bottom)**: `96px / 96px` (7x), `0px / 32px` (2x), `0px / 48px` (1x)
- **High-Frequency Grid & Flex Gaps**: `16px` (37x), `8px` (31x), `6px` (21x), `12px` (12x), `4px` (11x), `48px` (11x)
- **Extracted Spacing & Radius Variables**: `--radius-xs: .125rem`, `--radius-sm: .25rem`, `--radius-md: .375rem`, `--radius-lg: .5rem`, `--radius-xl: .75rem`, `--forge-canvas-width: 0px`, `--workspace-panel-bg: var(--background)`, `--spacing: .25rem`

### Surface & Depth Tokens
- **Border Radius Distribution**: `8px` (29x), `16px` (24x), `6px` (23x), `4px` (19x), `24px` (10x), `10px` (6x)
- **Glassmorphism / Backdrop Blur**: `blur(25px)`
- **Box-Shadow Formulas**:
  - `rgb(0, 0, 0) 0px 0px 0px 8px` *(observed 5x in DOM, Tailwind: `shadow-[rgb(0,0,0)_0px_0px_0px_8px]`)*
  - `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px` *(observed 3x in DOM, Tailwind: `shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px]`)*

### Real DOM Component Recipes
- **Interactive Buttons**:
  - **Button Variant 1 ("Get started")**: height `40px`, padding `0px 16px`, radius `16px` (`rounded-2xl`), bg `transparent` (`bg-[transparent]`), text `#FFFFFF` (`text-white`), border `2px solid rgba(255, 255, 255, 0.05)`, font `14px` / weight `600`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`, backdrop-filter `blur(25px)`
  - **Button Variant 2 ("Get started")**: height `48px`, padding `0px 20px`, radius `16px` (`rounded-2xl`), bg `transparent` (`bg-[transparent]`), text `#FFFFFF` (`text-white`), border `2px solid rgba(255, 255, 255, 0.05)`, font `16px` / weight `600`, shadow `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`, backdrop-filter `blur(25px)`
  - **Button Variant 3 ("Get Started")**: height `41px`, padding `12px 20px`, radius `4px` (`rounded`), bg `#00A3FF` (`bg-[#00A3FF]`), text `#FFFFFF` (`text-white`), border `none`, font `14px` / weight `600`
  - **Button Variant 4 ("Send")**: height `32px`, padding `5px 12px`, radius `9999px` (`rounded-full`), bg `transparent` (`bg-[transparent]`), text `#F0F0F0` (`text-[#F0F0F0]`), border `1px solid rgba(212, 234, 255, 0.19)`, font `14px` / weight `400`
- **Cards & Containers**:
  - **Card Recipe 1 (1024x598px)**: bg `transparent` (`bg-[transparent]`), border `1px solid rgba(212, 234, 255, 0.19)`, radius `24px` (`rounded-3xl`), padding `0px 0px`
  - **Card Recipe 2 (1109x600px)**: bg `transparent` (`bg-[transparent]`), border `1px solid rgba(212, 234, 255, 0.19)`, radius `16px` (`rounded-2xl`), padding `0px 0px`
  - **Card Recipe 3 (664x152px)**: bg `#000000` (`bg-black`), border `1px solid #262A2D`, radius `16px 16px 0px 0px` (`rounded-2xl`), padding `0px 0px`

### Motion & Transition Curves
- **Easing Curves (`transition-timing-function`)**: `cubic-bezier(0.4, 0, 0.2, 1)` (82x), `cubic-bezier(0.4, 0, 1, 1)` (6x), `ease-out` (1x)
- **Transition Durations**: `0.2s` (68x), `0.15s` (18x), `0.5s` (3x)
- **Named Motion Tokens**: `--ease-in: cubic-bezier(.4, 0, 1, 1)`, `--ease-out: cubic-bezier(0, 0, .2, 1)`, `--ease-in-out: cubic-bezier(.4, 0, .2, 1)`, `--default-transition-duration: .15s`, `--default-transition-timing-function: cubic-bezier(.4, 0, .2, 1)`

---

## 5. Anti-Patterns (Strictly Forbidden)

- **NEVER use a single generic sans-serif font across the entire page**—Resend’s signature tension comes from combining an editorial serif (`Domaine` for Hero H1), a tight neo-grotesque display sans (`ABC Favorit` with `-0.05em` tracking for H2), `Inter` for body copy, and `CommitMono` for code.
- **NEVER use warm or neutral gray borders on `#000000`**—always use cool ice-tinted translucent borders (`rgba(212, 234, 255, 0.19)` / `--slate-a6` or `rgba(211, 237, 246, 0.11)`).
- **NEVER use loose letter-spacing on H2 headings**—Resend uses an aggressive `-0.05em` (`-2.8px` at `56px`) tracking on section headings.
- **NEVER use flat opaque colored buttons for primary hero CTAs**—use frosted glass buttons (`backdrop-filter: blur(25px)`, `border: 2px solid rgba(255, 255, 255, 0.05)`, `rounded-2xl` `16px`) or crisp `#00A3FF` utility actions.
- **NEVER clutter code blocks with heavy chrome**—use `#000000` or `rgba(20, 22, 23, 0.6)` backgrounds with `1px solid rgba(212, 234, 255, 0.19)` borders, `16px–24px` border-radius, and `CommitMono` at `14px–16px`.
