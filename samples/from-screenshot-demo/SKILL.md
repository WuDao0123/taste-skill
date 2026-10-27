---
name: taste-dark-precision-ai-studio
description: Replicate the exact visual aesthetic, extracted pixel color palette, spatial rhythm, and typography pairing reverse-engineered from screenshot (2960x2040). Closest flagship aesthetic twin: Resend (97% match).
---

# Dark Precision AI Studio — Design System Skill

## 1. Aesthetic Direction & Visual Telemetry
- **Detected Luminance Mode**: `Dark Obsidian / Carbon Precision` (Canvas luminance `4.3%`, Foreground contrast `10.8:1`)
- **Nearest Flagship Aesthetic Twins**:
  1. **Resend** (`resend.com`) — **97% Aesthetic Match** (*Obsidian Developer Luxury & Editorial Serif-Meets-Mono*)
  2. **Framer** (`framer.com`) — **96% Match** (*Pitch-Black Interactive Canvas & Electric #0099FF Blue Glow*)
  3. **Neon** (`neon.tech`) — **91% Match** (*Serverless Pitch-Black & Luminous Cyber-Mint Postgres*)
- **Core Visual Signature**: `#0A0B0D` primary canvas paired with `#27292F` elevated cards, `rgba(255, 255, 255, 0.08)` 1px structural hairlines, and `#00A1FB` high-salience focal accents.

## 2. Exact Extracted Color Tokens & Tailwind Mapping
- **Canvas Background**: `#0A0B0D` (`bg-[#0A0B0D]`)
- **Elevated Surface / Card**: `#27292F` (`bg-[#27292F]`)
- **Primary Foreground Text**: `#F4F4F6` (`text-[#F4F4F6]`)
- **Muted / Secondary Text**: `#555763` (`text-[#555763]`)
- **Primary Accent / Focal CTA**: `#00A1FB` (`bg-[#00A1FB] text-white`)
- **Structural Hairline Border**: `#16171D` / `rgba(255, 255, 255, 0.08)` (`border-[#16171D]`)

## 3. Recommended Typography Pairing (Matched from Resend Twin)
- **Heading Font Stack**: `Domaine / ABC Favorit`, `-apple-system`, `sans-serif`
- **Body Font Stack**: `Inter`, `sans-serif`
- **Monospace / Telemetry Font**: `CommitMono`, `monospace`
- **Hierarchy & Tracking Scale**:
  - **Hero H1**: `96px / -0.01em (Domaine)` (`text-[48px] md:text-[56px] leading-[1.06] tracking-[-0.032em] font-semibold`)
  - **Section H2**: `32px–36px` (`text-[32px] leading-[1.15] tracking-[-0.024em] font-medium`)
  - **Body Copy**: `15px–16px` (`text-[15px] leading-[1.6] text-[#555763]`)

## 4. Layout Skeleton & Component Surface Recipes
- **Source Resolution & Margin Ratio**: Analyzed at `2960x2040px` · Horizontal whitespace ratio `6.7%`
- **Container Max-Width**: `1440px (Full-Bleed Grid)`, horizontal padding `px-6 md:px-8`
- **Top Navbar Height**: `62px` with `backdrop-blur-md` and bottom hairline `1px solid rgba(255, 255, 255, 0.08)`
- **Detected Grid Architecture**: 3-Column Bento Card Grid (`grid-cols-1 md:grid-cols-3 gap-5`)
- **Card Surface Recipe**: `bg-[#27292F] border border-[#16171D] rounded-xl p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]`
- **Primary CTA Recipe**: `bg-[#00A1FB] rounded-[16px (Blur 25px Glass)] px-4 py-2.5 text-sm font-medium transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)]`

## 5. Strict Anti-Patterns (Forbidden in Coding Agent)
- **NEVER** replace the extracted canvas `#0A0B0D` with generic uncalibrated Tailwind grays (`bg-gray-900` or `bg-slate-100`).
- **NEVER** use thick opaque borders (`2px+`) or heavy drop-shadows without 1px structural hairlines (`rgba(255, 255, 255, 0.08)`).
- **NEVER** introduce random rainbow gradients that clash with the extracted focal accent `#00A1FB`.
- **NEVER** omit negative letter-spacing (`tracking-[-0.03em]`) on display headings above `32px`.
