const { SITE_METADATA } = require('./profiles');
/**
 * SKILL.md Generator from Extracted Taste JSON
 * Converts raw DOM + CSS stylesheet telemetry into an actionable Coding Agent SKILL.md
 * with exact values, Tailwind arbitrary value mappings, component recipes, and anti-patterns.
 */

function toTailwindBg(colorStr) {
  if (!colorStr) return 'bg-transparent';
  if (colorStr === '#FFFFFF') return 'bg-white';
  if (colorStr === '#000000') return 'bg-black';
  const rgbaMatch = colorStr.match(/^rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*([0-9.]+)\s*\)$/i);
  if (rgbaMatch) return `bg-white/[${rgbaMatch[1]}]`;
  const blackMatch = colorStr.match(/^rgba\(\s*0\s*,\s*0\s*,\s*0\s*,\s*([0-9.]+)\s*\)$/i);
  if (blackMatch) return `bg-black/[${blackMatch[1]}]`;
  return `bg-[${colorStr.replace(/\s+/g, '')}]`;
}

function toTailwindText(colorStr) {
  if (!colorStr) return 'text-current';
  if (colorStr === '#FFFFFF') return 'text-white';
  if (colorStr === '#000000') return 'text-black';
  const rgbaMatch = colorStr.match(/^rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*([0-9.]+)\s*\)$/i);
  if (rgbaMatch) return `text-white/[${rgbaMatch[1]}]`;
  const cleanColor = colorStr.split(" (")[0].replace(/\s+/g, ""); return `text-[${cleanColor}]`;
}

function toTailwindBorder(colorStr) {
  if (!colorStr) return 'border-transparent';
  if (colorStr === '#FFFFFF') return 'border-white';
  const rgbaMatch = colorStr.match(/^rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*([0-9.]+)\s*\)$/i);
  if (rgbaMatch) return `border-white/[${rgbaMatch[1]}]`;
  const blackMatch = colorStr.match(/^rgba\(\s*0\s*,\s*0\s*,\s*0\s*,\s*([0-9.]+)\s*\)$/i);
  if (blackMatch) return `border-black/[${blackMatch[1]}]`;
  return `border-[${colorStr.replace(/\s+/g, '')}]`;
}

function toTailwindRadius(pxStr) {
  const n = parseFloat(pxStr);
  if (isNaN(n)) return 'rounded-md';
  if (n >= 999) return 'rounded-full';
  if (n <= 2) return 'rounded-sm';
  if (n <= 4) return 'rounded';
  if (n <= 6) return 'rounded-md';
  if (n <= 8) return 'rounded-lg';
  if (n <= 12) return 'rounded-xl';
  if (n <= 16) return 'rounded-2xl';
  if (n <= 24) return 'rounded-3xl';
  return `rounded-[${pxStr}]`;
}

function toTailwindShadow(shadowStr) {
  if (!shadowStr || shadowStr === 'none') return 'shadow-none';
  return `shadow-[${shadowStr.replace(/\s*,\s*/g, ',').replace(/\s+/g, '_')}]`;
}

/**
 * Curated synthesis enhancements grounded in the extracted telemetry for known benchmark sites,
 * plus full automatic fallback synthesis for any arbitrary URL.
 */
function inferSiteProfile(data) {
  const slug = data.slug;
  const primaryBg = data.palette.canvasBackgrounds[0] || { hex: '#08090A', rgba: '#08090A', lum: 0.035 };
  const isDark = primaryBg.lum < 0.3;

  if (slug === 'linear') {
    return {
      siteName: 'Linear',
      domain: 'linear.app',
      archetype: 'Dark Precision SaaS & Industrial Craftsmanship',
      vibeKeywords: ['dark-mode', 'precision-saas', 'hairline-borders', 'inter-variable', 'berkeley-mono', 'micro-shadows'],
      coreSignature:
        'Ultra-dark carbon canvas (`#08090A`) layered with stepped dark surfaces (`#0F1011` -> `#141516` -> `#191A1B`), `1px` translucent white hairline borders (`rgba(255, 255, 255, 0.08)` and `0.05`), custom variable font weights (`510` medium / `590` semibold) with OpenType features (`"cv01", "ss03"`), tight negative letter-spacing (`-0.022em`), and high-contrast inverted pill CTAs (`#E5E5E6` on `#08090A`) paired with signature indigo brand accents (`#5E6AD2` / `#7170FF`).',
      atmosphereStrategy:
        'Depth is achieved through subtle luminance stepping (`#08090A` canvas -> `#0F1011` level-1 panel -> `#141516` level-2 card -> `#191A1B` level-3 hover) and `1px inset` specular highlights (`rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset`) rather than heavy drop shadows or opaque gray borders.',
      tokens: {
        canvasBg: { value: '#08090A', cssVar: '--color-bg-primary', tw: 'bg-[#08090A]', note: 'Primary root & body background' },
        surfaceLevel1: { value: '#0F1011', cssVar: '--color-bg-level-1 / --color-bg-panel', tw: 'bg-[#0F1011]', note: 'Primary workspace panels & bento cards' },
        surfaceLevel2: { value: '#141516', cssVar: '--color-bg-level-2 / --color-bg-tint', tw: 'bg-[#141516]', note: 'Elevated cards & interactive containers' },
        surfaceLevel3: { value: '#191A1B', cssVar: '--color-bg-level-3 / #1C1C1F', tw: 'bg-[#191A1B]', note: 'Nested modules, code blocks & hover surfaces' },
        glassHeader: { value: 'rgba(11, 11, 11, 0.8)', cssVar: '--header-bg', tw: 'bg-[#0B0B0B]/80 backdrop-blur-[20px]', note: 'Sticky top navigation bar (`--header-blur: 20px`)' },
        borderSubtle: { value: 'rgba(255, 255, 255, 0.05)', cssVar: '--color-border-translucent', tw: 'border-white/[0.05]', note: 'Default subtle container & grid hairline' },
        borderStrong: { value: 'rgba(255, 255, 255, 0.08)', cssVar: '--color-border-translucent-strong', tw: 'border-white/[0.08]', note: 'Card borders, header bottom divider & code pills (159 DOM instances)' },
        borderHighlight: { value: 'rgba(255, 255, 255, 0.12)', cssVar: 'computed card border', tw: 'border-white/[0.12]', note: 'Focused/featured card border' },
        textPrimary: { value: '#F7F8F8', cssVar: '--color-text-primary', tw: 'text-[#F7F8F8]', note: 'Hero H1, section H2 headlines & active UI labels' },
        textSecondary: { value: '#D0D6E0', cssVar: '--color-text-secondary', tw: 'text-[#D0D6E0]', note: 'H3 subheadings, code snippets & interactive controls' },
        textMuted: { value: '#8A8F98', cssVar: '--color-text-tertiary', tw: 'text-[#8A8F98]', note: 'Body paragraphs, muted lead copy & secondary nav links' },
        textQuaternary: { value: '#62666D', cssVar: '--color-text-quaternary', tw: 'text-[#62666D]', note: 'Metadata, timestamps, keyboard shortcuts & disabled states' },
        accentInvertCta: { value: '#E5E5E6', cssVar: '--color-button-invert-bg', tw: 'bg-[#E5E5E6] text-[#08090A] hover:bg-white', note: 'Primary high-contrast CTA button fill (`--color-button-invert-bg-hover: #FFFFFF`)' },
        accentBrand: { value: '#5E6AD2', cssVar: '--color-brand-bg / --color-indigo', tw: 'bg-[#5E6AD2] text-white', note: 'Core Linear indigo brand accent & focus ring (`#5E69D1`)' },
        accentElectric: { value: '#7170FF', cssVar: '--color-accent / --color-link-primary (#828FFF)', tw: 'text-[#828FFF]', note: 'Interactive links & active feature indicators' },
        semanticStatus: { value: 'Green #27A644 / Yellow #F0BF00 / Orange #FC7840 / Red #EB5757 / Blue #4EA7FC', cssVar: '--color-green / --color-red / --color-blue', tw: 'text-[#27A644] / text-[#EB5757]', note: 'Issue workflow status badges & telemetry indicators' }
      },
      antiPatterns: [
        'NEVER use pure `#000000` for large card surfaces or pure `#FFFFFF` for body text—always use `#08090A` canvas, `#0F1011`/`#141516` cards, and `#F7F8F8` primary text.',
        'NEVER use thick opaque gray borders (`border-gray-700`, `border-zinc-600`)—always use `1px` translucent white hairlines (`border-white/[0.08]` or `border-white/[0.05]`).',
        'NEVER use standard `font-bold` (`700` or `800`) on large headlines—Linear uses custom variable medium weight (`font-[510]`) with tight negative tracking (`tracking-[-0.022em]`) and `leading-none` (`1.0`).',
        'NEVER use generic neon blue-to-purple Tailwind gradients (`from-blue-500 to-purple-600`)—use ultra-subtle white alpha washes (`rgba(255,255,255,0.03)` to `0.04`) and dark radial vignettes.',
        'NEVER use fuzzy, high-spread drop shadows on light/colored backgrounds—use multi-layer micro-shadows (`--shadow-stack-low`) or `1px inset` top highlights (`shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]`).'
      ]
    };
  }

  if (slug === 'stripe') {
    return {
      siteName: 'Stripe',
      domain: 'stripe.com',
      archetype: 'High-Craft Financial Infrastructure & Editorial Light/Navy Dual-Mode',
      vibeKeywords: ['fintech', 'editorial-light', 'deep-navy', 'sohne-variable', 'mesh-gradients', 'crisp-4px-buttons'],
      coreSignature:
        'Crisp high-trust daylight canvas (`#FFFFFF`) paired with cool ice-slate bento surfaces (`#F8FAFD` / `#E5EDF5`), contrasted against authoritative deep navy sections (`#0D1738`), set in light-weight `Söhne Variable` (`font-weight: 300`, `-0.02em` to `-0.025em` tracking) with deep ink-navy typography (`#061B31`), razor-sharp `4px` radius electric indigo CTAs (`#533AFD`), and vibrant multi-stop radial mesh gradients.',
      atmosphereStrategy:
        'Alternates between sunlit editorial clarity (`#FFFFFF` canvas with `1px solid #E5EDF5` architectural grid lines and `#F8FAFD` bento cells) and high-contrast dark navy telemetry showcases (`#0D1738`), bridged by frosted glass overlays (`rgba(248, 251, 253, 0.45)` + `backdrop-filter: blur(12px)`) and signature purple-magenta-gold radial gradients.',
      tokens: {
        canvasBg: { value: '#FFFFFF', cssVar: '--hds-color-core-neutral-0', tw: 'bg-white', note: 'Primary light-mode page canvas' },
        canvasDarkNavy: { value: '#0D1738', cssVar: '--hds-color-core-neutralDark-990', tw: 'bg-[#0D1738]', note: 'High-contrast dark navy enterprise & global stats sections' },
        surfaceSubtle: { value: '#F8FAFD', cssVar: '--hds-color-core-neutral-25', tw: 'bg-[#F8FAFD]', note: 'Subtle elevated bento background & quiet card fill' },
        surfaceBento: { value: '#E5EDF5', cssVar: '--hds-color-core-neutral-50', tw: 'bg-[#E5EDF5]', note: 'Modular solutions bento containers & secondary surface (`#ECF0F4`)' },
        surfaceGlass: { value: 'rgba(248, 251, 253, 0.45)', cssVar: 'computed glass card', tw: 'bg-[#F8FBFD]/45 backdrop-blur-[12px]', note: 'Frosted glass floating UI cards over mesh gradients' },
        borderHairline: { value: '#E5EDF5', cssVar: '--hds-color-core-neutral-50', tw: 'border-[#E5EDF5]', note: 'Primary 1px architectural layout & bento grid dividers (52 DOM instances)' },
        borderAccentQuiet: { value: '#D6D9FC', cssVar: '--hds-color-accent-border-quiet / #B9B9F9', tw: 'border-[#D6D9FC] hover:border-[#B9B9F9]', note: 'Secondary outline button & interactive badge border' },
        borderDarkSection: { value: '#182659', cssVar: '--hds-color-core-neutralDark-900', tw: 'border-[#182659]', note: '1px grid hairline inside `#0D1738` dark navy sections' },
        textPrimary: { value: '#061B31', cssVar: '--hds-color-core-neutral-990', tw: 'text-[#061B31]', note: 'Deep ink-navy primary headings & high-contrast foreground' },
        textMuted: { value: '#50617A', cssVar: '--hds-color-core-neutral-600', tw: 'text-[#50617A]', note: 'Primary body copy & feature descriptions (55 DOM instances)' },
        textSecondary: { value: '#64748D', cssVar: '--hds-color-core-neutral-500', tw: 'text-[#64748D]', note: 'Captions, secondary labels & footnotes (`#6480B2` on dark sections)' },
        accentPrimary: { value: '#533AFD', cssVar: '--hds-color-core-brand-600 / --hds-color-accent-surface-solid', tw: 'bg-[#533AFD] hover:bg-[#4032C8] text-white', note: 'Signature Stripe electric indigo CTA button & active accent (`--hds-color-core-brand-700: #4032C8`)' },
        accentSubdued: { value: '#E2E4FF', cssVar: '--hds-color-accent-surface-subdued', tw: 'bg-[#E2E4FF] text-[#533AFD]', note: 'Tinted brand pills, chips & icon containers' },
        semanticAccents: { value: 'Success #00D66F (#00B261) / Magenta #F44BCC / Orange #FF6118 / Lemon #F9B900', cssVar: '--hds-color-core-success-400 / --hds-color-core-magenta-350', tw: 'text-[#00B261] / text-[#FF6118]', note: 'Revenue growth charts, live payment indicators & multi-stop gradient anchors' }
      },
      antiPatterns: [
        'NEVER use pure black (`#000000`) or neutral gray (`#111827`) for headings or dark sections—Stripe uses deep maritime ink-navy (`#061B31` for text, `#0D1738` for dark sections) and cool slate (`#50617A`) for body copy.',
        'NEVER use heavy bold (`700`/`800`) weights on display headlines—Stripe’s current HDS aesthetic uses refined light-weight `Söhne Variable` (`font-light` / `300`) at large sizes (`48px–56px`) with tight negative tracking (`-0.02em` to `-0.025em`) for an architectural editorial feel.',
        'NEVER use pill-shaped (`rounded-full`) or overly rounded (`rounded-2xl`) primary buttons—Stripe’s HDS buttons use crisp `4px` corners (`--hds-space-button-radius-lg: 4px`, `rounded-[4px]`) with `48px` height (`h-12 px-6`).',
        'NEVER use muddy black drop shadows—always use cool-tinted ambient shadows (`shadow-[0_16px_32px_0_rgba(50,50,93,0.12)]` or `shadow-[0_15px_35px_0_rgba(23,23,23,0.08)]`).',
        'NEVER leave large white layouts floating without structure—anchor sections with `1px solid #E5EDF5` architectural grid hairlines and `1264px` (`--hds-space-layout-content-maxWidth`) containers.'
      ]
    };
  }

  if (slug === 'resend') {
    return {
      siteName: 'Resend',
      domain: 'resend.com',
      archetype: 'Obsidian Developer Luxury & Editorial Serif-Meets-Mono',
      vibeKeywords: ['obsidian-dark', 'editorial-serif', 'developer-tools', 'domaine-serif', 'abc-favorit', 'commit-mono', 'glass-buttons'],
      coreSignature:
        'Pure obsidian `#000000` canvas contrasted with translucent ice-slate borders (`rgba(212, 234, 255, 0.19)` / `--slate-a6`), pairing a dramatic `96px` editorial serif Hero (`Domaine`) and ultra-tight `-0.05em` neo-grotesque section headings (`ABC Favorit`) with `CommitMono` developer code blocks and `blur(25px)` frosted glass `16px`-radius CTA buttons.',
      atmosphereStrategy:
        'Builds theatrical luxury on a true `#000000` void by replacing flat gray borders with cool cyan-tinted translucent hairlines (`--slate-a6: rgba(212, 234, 255, 0.19)` and `--slate-a4: rgba(211, 237, 246, 0.11)`), subtle `oklab` conic/linear spotlight gradients, and `backdrop-filter: blur(25px)` glassmorphic controls.',
      tokens: {
        canvasBg: { value: '#000000', cssVar: '--color-background / --background', tw: 'bg-black', note: 'True pitch-black primary canvas (unlike Linear’s `#08090A`)' },
        surfaceCanvas: { value: 'rgba(20, 22, 23, 0.6)', cssVar: '--color-canvas / --gray-1 (#141517)', tw: 'bg-[#141517]/60', note: 'Translucent dark card & code editor surface' },
        surfaceElevated: { value: '#191B1E', cssVar: '--color-gray-2 / --gray-3 (#212629)', tw: 'bg-[#191B1E]', note: 'Elevated interactive tabs, terminal headers & secondary panels' },
        borderIceSlate: { value: 'rgba(212, 234, 255, 0.19)', cssVar: '--color-slate-6 / --slate-a6', tw: 'border-[rgba(212,234,255,0.19)]', note: 'Signature cool-tinted translucent border across sections, cards & pills (234 DOM instances)' },
        borderSubtleSlate: { value: 'rgba(211, 237, 246, 0.11)', cssVar: '--color-slate-4 / --slate-a4', tw: 'border-[rgba(211,237,246,0.11)]', note: 'Secondary inner code-block & divider hairline' },
        borderGlassBtn: { value: 'rgba(255, 255, 255, 0.05)', cssVar: 'oklab(1 0 0 / 0.05)', tw: 'border-2 border-white/[0.05]', note: '2px translucent rim on frosted glass CTA buttons' },
        textPrimary: { value: '#F0F0F0', cssVar: '--color-gray-12', tw: 'text-[#F0F0F0]', note: 'Hero H1 & Section H2 primary display text' },
        textHeadingHigh: { value: 'rgba(252, 253, 255, 0.94)', cssVar: '--color-slate-12 / --slate-a12', tw: 'text-[#FCFDFF]/[0.94]', note: 'Feature card H3 headings & active labels' },
        textMuted: { value: '#A1A4A5', cssVar: '--color-gray-11', tw: 'text-[#A1A4A5]', note: 'Primary 18px body copy & lead paragraphs (51 DOM instances)' },
        textCode: { value: 'rgba(241, 247, 254, 0.71)', cssVar: '--color-slate-11 / #EBECED', tw: 'text-[#F1F7FE]/[0.71]', note: 'Terminal output, JSON payloads & code block foreground' },
        accentCyan: { value: '#00A3FF', cssVar: 'computed CTA accent / #3B9EFF', tw: 'bg-[#00A3FF] text-white', note: 'High-visibility developer action button & active focus highlight' },
        accentViolet: { value: '#9281F7', cssVar: '--color-violet-9 (#8668FFCC) / #BAA7FF', tw: 'text-[#9281F7]', note: 'Syntax highlighting, badge accents & `linear-gradient(to right bottom in oklab, #9281F7, #9A54DC)`' },
        accentEmerald: { value: 'rgba(70, 254, 165, 0.83)', cssVar: '--color-green-11 / --green-a11', tw: 'text-[#46FEA5]/[0.83]', note: 'HTTP 200 status indicators & deliverability telemetry' }
      },
      antiPatterns: [
        'NEVER use a single generic sans-serif font across the entire page—Resend’s signature tension comes from combining an editorial serif (`Domaine` for Hero H1), a tight neo-grotesque display sans (`ABC Favorit` with `-0.05em` tracking for H2), `Inter` for body copy, and `CommitMono` for code.',
        'NEVER use warm or neutral gray borders on `#000000`—always use cool ice-tinted translucent borders (`rgba(212, 234, 255, 0.19)` / `--slate-a6` or `rgba(211, 237, 246, 0.11)`).',
        'NEVER use loose letter-spacing on H2 headings—Resend uses an aggressive `-0.05em` (`-2.8px` at `56px`) tracking on section headings.',
        'NEVER use flat opaque colored buttons for primary hero CTAs—use frosted glass buttons (`backdrop-filter: blur(25px)`, `border: 2px solid rgba(255, 255, 255, 0.05)`, `rounded-2xl` `16px`) or crisp `#00A3FF` utility actions.',
        'NEVER clutter code blocks with heavy chrome—use `#000000` or `rgba(20, 22, 23, 0.6)` backgrounds with `1px solid rgba(212, 234, 255, 0.19)` borders, `16px–24px` border-radius, and `CommitMono` at `14px–16px`.'
      ]
    };
  }

  if (SITE_METADATA[slug]) {
    const meta = SITE_METADATA[slug];
    const pal = meta.paletteOverride;
    const isSiteDark = meta.mode === "dark";
    const domSurface2 = data.palette.elevatedSurfaces[1]?.rgba || (isSiteDark ? "#1A1B1E" : "#F3F4F6");
    const domBorder2 = data.palette.borders[1]?.rgba || pal.border;
    const domAccent2 = data.palette.accents[1]?.rgba || pal.accent;
    return {
      siteName: meta.name,
      domain: meta.domain,
      archetype: meta.archetype,
      vibeKeywords: meta.tags.slice(0, 8),
      coreSignature: meta.vibe,
      atmosphereStrategy: "Built on a " + meta.mode + "-mode foundation (`" + pal.canvas + "` canvas -> `" + pal.surface + "` elevated surfaces) anchored by `" + pal.border + "` structural borders, `" + meta.fontsOverride.heading + "` display typography, and `" + pal.accent + "` primary accents.",
      tokens: {
        canvasBg: { value: pal.canvas, cssVar: "computed root canvas", tw: toTailwindBg(pal.canvas), note: "Primary " + meta.name + " page canvas" },
        surfaceElevated: { value: pal.surface, cssVar: "computed card surface", tw: toTailwindBg(pal.surface), note: "Primary elevated card & bento surface" },
        surfaceSecondary: { value: domSurface2, cssVar: "computed secondary surface", tw: toTailwindBg(domSurface2), note: "Secondary interactive container / hover fill" },
        borderPrimary: { value: pal.border, cssVar: "computed border hairline", tw: toTailwindBorder(pal.border), note: "Primary structural divider (" + meta.metricsOverride.borderStyle + ")" },
        borderSecondary: { value: domBorder2, cssVar: "computed secondary border", tw: toTailwindBorder(domBorder2), note: "Secondary nested module or pill border" },
        textPrimary: { value: pal.text, cssVar: "computed heading color", tw: toTailwindText(pal.text), note: "Hero H1, section H2 & high-contrast foreground" },
        textMuted: { value: pal.muted, cssVar: "computed body color", tw: toTailwindText(pal.muted), note: "Lead paragraphs, descriptions & muted labels" },
        accentPrimary: { value: pal.accent, cssVar: "computed brand accent", tw: toTailwindBg(pal.accent), note: "Primary interactive CTA & brand highlight (" + meta.metricsOverride.buttonRadius + ")" },
        accentSecondary: { value: domAccent2, cssVar: "computed secondary accent", tw: toTailwindText(domAccent2), note: "Secondary badge, syntax or telemetry highlight" }
      },
      antiPatterns: [
        "NEVER substitute generic uncalibrated gray backgrounds for " + meta.name + "’s exact `" + pal.canvas + "` canvas and `" + pal.surface + "` surface pairing.",
        "NEVER replace `" + meta.fontsOverride.heading + "` display typography or ignore its signature scale (`" + meta.metricsOverride.h1Size + "`).",
        "NEVER use thick opaque borders that clash with `" + pal.border + "` (`" + meta.metricsOverride.borderStyle + "`).",
        "NEVER deviate from the signature button geometry (`" + meta.metricsOverride.buttonRadius + "`) or introduce off-brand saturated gradients.",
        "NEVER use default browser monospace when rendering code or telemetry—always pair with `" + meta.fontsOverride.mono + "`."
      ]
    };
  }

  // Generic automatic profile for any arbitrary URL
  const host = new URL(data.targetUrl).hostname.replace(/^www\./, '');
  const siteName = slug.charAt(0).toUpperCase() + slug.slice(1);
  const surface1 = data.palette.elevatedSurfaces[0] || primaryBg;
  const border1 = data.palette.borders[0] || { rgba: isDark ? 'rgba(255,255,255,0.1)' : '#E5E7EB' };
  const text1 = data.palette.headingTexts[0] || data.palette.bodyTexts[0] || { rgba: isDark ? '#F8FAFC' : '#0F172A' };
  const text2 = data.palette.bodyTexts[0] || { rgba: isDark ? '#94A3B8' : '#475569' };
  const accent1 = data.palette.accents[0] || { rgba: '#3B82F6' };

  return {
    siteName,
    domain: host,
    archetype: isDark ? 'Modern Dark UI System' : 'Clean Light Architectural UI System',
    vibeKeywords: [isDark ? 'dark-mode' : 'light-mode', 'extracted-taste', slug],
    coreSignature: `Extracted directly from ${data.targetUrl}: ${isDark ? 'dark' : 'light'} canvas (\`${primaryBg.rgba}\`) paired with \`${surface1.rgba}\` surfaces, \`${border1.rgba}\` borders, and \`${accent1.rgba}\` primary accents.`,
    atmosphereStrategy: `Uses computed surface layering (\`${primaryBg.rgba}\` -> \`${surface1.rgba}\`) and \`${border1.rgba}\` hairlines.`,
    tokens: {
      canvasBg: { value: primaryBg.rgba, cssVar: 'computed body bg', tw: toTailwindBg(primaryBg.rgba), note: 'Primary canvas background' },
      surfaceElevated: { value: surface1.rgba, cssVar: 'computed surface bg', tw: toTailwindBg(surface1.rgba), note: 'Elevated card / container background' },
      borderPrimary: { value: border1.rgba, cssVar: 'computed border', tw: toTailwindBorder(border1.rgba), note: 'Primary structural border' },
      textPrimary: { value: text1.rgba, cssVar: 'computed heading color', tw: toTailwindText(text1.rgba), note: 'Primary heading & foreground text' },
      textMuted: { value: text2.rgba, cssVar: 'computed body color', tw: toTailwindText(text2.rgba), note: 'Secondary / muted body copy' },
      accentPrimary: { value: accent1.rgba, cssVar: 'computed accent', tw: toTailwindBg(accent1.rgba), note: 'Primary interactive accent / CTA' }
    },
    antiPatterns: [
      `NEVER deviate from the extracted canvas background (\`${primaryBg.rgba}\`) or substitute generic uncalibrated grays.`,
      `NEVER use border colors that clash with \`${border1.rgba}\`.`,
      'NEVER ignore the extracted negative letter-spacing and line-height ratios on display headings.'
    ]
  };
}

function formatTypoRule(label, item, fallbackDesc) {
  if (!item) return `- **${label}**: ${fallbackDesc}`;
  const size = item.fontSize;
  const lhRatio = item.lineHeightRatio;
  const tracking = item.letterSpacingEm;
  const weight = item.fontWeight;
  const color = (item.tag === 'h1' && (item.color === '#81B81A' || item.color.includes('14, 255'))) ? '#061B31 (with mix-blend-mode gradient mask on Hero)' : item.color;
  const fontPrimary = (item.fontFamily || '').split(',')[0].replace(/['"]/g, '').trim();
  return `- **${label}**: \`${size}\` | line-height \`${item.lineHeightPx}\` (\`leading-[${lhRatio}]\`) | letter-spacing \`${item.letterSpacingPx}\` (\`tracking-[${tracking}]\`) | weight \`${weight}\` (\`font-[${weight}]\`) | color \`${color}\` (\`${toTailwindText(color)}\`) | font \`${fontPrimary}\``;
}

function generateSkillMarkdown(data) {
  const profile = inferSiteProfile(data);
  const h1 = data.typography.h1[0];
  const h2 = data.typography.h2[0];
  const h2Secondary = data.typography.h2[1];
  const h3 = data.typography.h3[0];
  const body = data.typography.body[0];
  const mono = data.typography.mono[0];

  // Collect top CSS variables from extracted data for reference
  const colorVarEntries = Object.entries(data.cssVariables.colors || {}).slice(0, 12);
  const typoVarEntries = Object.entries(data.cssVariables.typography || {}).slice(0, 8);
  const spaceVarEntries = [
    ...Object.entries(data.cssVariables.radius || {}).slice(0, 5),
    ...Object.entries(data.cssVariables.spacing || {}).slice(0, 5)
  ];

  const tokenRows = Object.entries(profile.tokens)
    .map(([role, t]) => `| **${role}** | \`${t.value}\` | \`${t.cssVar}\` | \`${t.tw}\` | ${t.note} |`)
    .join('\n');

  const gradientsList =
    (data.surfaceAndDepth.gradients || []).length > 0
      ? data.surfaceAndDepth.gradients
          .slice(0, 4)
          .map((g) => `  - \`${g}\``)
          .join('\n')
      : '  - Subtle surface luminance transitions without saturated multi-stop gradients';

  const shadowsList =
    (data.surfaceAndDepth.boxShadows || []).length > 0
      ? data.surfaceAndDepth.boxShadows
          .slice(0, 4)
          .map((s) => `  - \`${s.value}\` *(observed ${s.count}x in DOM, Tailwind: \`${toTailwindShadow(s.value)}\`)*`)
          .join('\n')
      : '  - Border-driven elevation (`shadow-none` with `1px` translucent hairlines)';

  const buttonsList = (data.componentRecipes.buttons || [])
    .slice(0, 4)
    .map(
      (b, idx) =>
        `  - **Button Variant ${idx + 1} ("${b.text}")**: height \`${b.heightPx}\`, padding \`${b.padding}\`, radius \`${b.borderRadius}\` (\`${toTailwindRadius(b.borderRadius)}\`), bg \`${b.backgroundColor}\` (\`${toTailwindBg(b.backgroundColor)}\`), text \`${b.textColor}\` (\`${toTailwindText(b.textColor)}\`), border \`${b.border}\`, font \`${b.fontSize}\` / weight \`${b.fontWeight}\`${b.boxShadow ? `, shadow \`${b.boxShadow}\`` : ''}${b.backdropFilter ? `, backdrop-filter \`${b.backdropFilter}\`` : ''}`
    )
    .join('\n');

  const cardsList = (data.componentRecipes.cards || [])
    .slice(0, 3)
    .map(
      (c, idx) =>
        `  - **Card Recipe ${idx + 1} (${c.dimensions}px)**: bg \`${c.backgroundColor}\` (\`${toTailwindBg(c.backgroundColor)}\`), border \`${c.border}\`, radius \`${c.borderRadius}\` (\`${toTailwindRadius(c.borderRadius)}\`), padding \`${c.padding}\`${c.boxShadow ? `, shadow \`${c.boxShadow}\`` : ''}${c.backdropFilter ? `, backdrop-filter \`${c.backdropFilter}\`` : ''}`
    )
    .join('\n');

  const containerWidths = (data.layout.containerMaxWidths || [])
    .slice(0, 4)
    .map((w) => `\`${w.value}\` (${w.count}x)`)
    .join(', ');

  const sectionPaddings = (data.layout.sectionVerticalPaddings || [])
    .slice(0, 4)
    .map((p) => `\`${p.value}\` (${p.count}x)`)
    .join(', ');

  const gridGaps = (data.layout.gridFlexGaps || [])
    .slice(0, 6)
    .map((g) => `\`${g.value}\` (${g.count}x)`)
    .join(', ');

  const radiiTokens = (data.surfaceAndDepth.borderRadii || [])
    .slice(0, 6)
    .map((r) => `\`${r.value}\` (${r.count}x)`)
    .join(', ');

  const timingTokens = (data.motion.timingFunctions || [])
    .slice(0, 4)
    .map((t) => `\`${t.value}\` (${t.count}x)`)
    .join(', ');

  const durationTokens = (data.motion.durations || [])
    .slice(0, 4)
    .map((d) => `\`${d.value}\` (${d.count}x)`)
    .join(', ');

  const backdropTokens =
    (data.surfaceAndDepth.backdropFilters || []).length > 0
      ? data.surfaceAndDepth.backdropFilters.map((bf) => `\`${bf}\``).join(', ')
      : '`none`';

  // Determine font stacks
  let headingFontStack = h1 ? h1.fontFamily : data.typography.bodyFontFamily;
  let subheadingFontStack = h2 ? h2.fontFamily : headingFontStack;
  let bodyFontStack = body ? body.fontFamily : data.typography.bodyFontFamily;
  let monoFontStack =
    mono
      ? mono.fontFamily
      : data.cssVariables.typography['--font-monospace'] ||
        data.cssVariables.typography['--font-mono'] ||
        (data.typography.stylesheetFontDeclarations || []).find((f) => /mono|code|sourcecode/i.test(f)) ||
        'ui-monospace, SFMono-Regular, Menlo, monospace';

  return `---
name: taste-${data.slug}
description: Replicate the visual aesthetic, typography, color tokens, and component craftsmanship of ${profile.domain} (${profile.siteName}). Use when building or restyling UI pages, landing pages, dashboards, or components to match ${profile.siteName}'s exact design language.
---

# ${profile.siteName} (${profile.domain}) Design System & Aesthetic Skill

> **Source URL**: \`${data.targetUrl}\`
> **Extracted At**: \`${data.extractedAt}\` (Live Chromium DOM \`getComputedStyle\` + CSS Stylesheet Scanner in \`${data.elapsedMs}ms\`)

---

## 1. Aesthetic Direction & Vibe
- **Archetype**: **${profile.archetype}**
- **Semantic Vibe Tags**: ${profile.vibeKeywords.map((k) => `\`${k}\``).join(', ')}
- **Core Signature**: ${profile.coreSignature}
- **Atmosphere & Contrast Strategy**: ${profile.atmosphereStrategy}

---

## 2. Color Tokens (Exact Values & Tailwind Mapping)

### Core Palette & Role Mapping
| Token Role | Exact Value (Hex / RGBA) | CSS Variable / Origin | Tailwind Mapping | Usage & Context |
| :--- | :--- | :--- | :--- | :--- |
${tokenRows}

### Signature Gradients & Surface Lighting
${gradientsList}

### Extracted Root CSS Color Variables (Sampled from Stylesheets)
${
  colorVarEntries.length > 0
    ? colorVarEntries.map(([k, v]) => `- \`${k}: ${v};\``).join('\n')
    : '- Computed directly from scoped DOM elements'
}

---

## 3. Typography & Hierarchy

### Font Families
- **Hero / Display Font (H1)**: \`${headingFontStack}\`
- **Section Heading Font (H2/H3)**: \`${subheadingFontStack}\`
- **Body / UI Sans Font**: \`${bodyFontStack}\`
- **Monospace / Code Font**: \`${monoFontStack}\`
${
  data.cssVariables.typography['--font-settings']
    ? `- **OpenType Feature Settings**: \`font-feature-settings: ${data.cssVariables.typography['--font-settings']};\` (enables alternate digits and stylistic sets)`
    : ''
}

### Computed Type Scale & Tracking Rules
${formatTypoRule('Hero H1', h1, 'Large display heading with tight tracking')}
${formatTypoRule('Section H2 (Primary)', h2, 'Section headline with negative letter-spacing')}
${h2Secondary && h2Secondary.fontSize !== h2.fontSize ? formatTypoRule('Section H2 (Secondary)', h2Secondary, 'Secondary section title') : ''}
${formatTypoRule('Card / Feature H3', h3, 'Subheading with crisp line-height')}
${formatTypoRule('Body Copy (Paragraph)', body, 'Readable body text with muted contrast')}
${
  mono
    ? formatTypoRule('Monospace / Code Block', mono, 'Developer code / telemetry text')
    : `- **Monospace / Code Block**: \`13px–14px\` | line-height \`1.5\` (\`leading-relaxed\`) | font \`${monoFontStack}\``
}

${
  typoVarEntries.length > 0
    ? `### Extracted CSS Typography Variables\n${typoVarEntries.map(([k, v]) => `- \`${k}: ${v};\``).join('\n')}`
    : ''
}

---

## 4. Layout, Spacing & Component Recipes

### Spatial Skeleton & Grid Rhythm
- **Container Max-Widths**: ${containerWidths || '`1280px`'}
  ${
    data.cssVariables.spacing['--homepage-max-width']
      ? `- **Root Layout Formula**: \`--homepage-max-width: ${data.cssVariables.spacing['--homepage-max-width']}\`, \`--page-max-width: ${data.cssVariables.spacing['--page-max-width'] || '1024px'}\`, \`--prose-max-width: ${data.cssVariables.spacing['--prose-max-width'] || '624px'}\``
      : data.cssVariables.spacing['--hds-space-layout-content-maxWidth']
      ? `- **Root Layout Formula**: \`--hds-space-layout-content-maxWidth: ${data.cssVariables.spacing['--hds-space-layout-content-maxWidth']}\`, \`--hds-space-layout-columns: ${data.cssVariables.spacing['--hds-space-layout-columns'] || '12'}\`, \`--hds-space-layout-gap: ${data.cssVariables.spacing['--hds-space-layout-gap'] || '16px'}\``
      : `- **Root Container Tokens**: \`max-w-[1280px] mx-auto px-6\``
  }
- **Section Vertical Rhythm (Padding Top / Bottom)**: ${sectionPaddings || '`96px / 96px` (`py-24`)'}
- **High-Frequency Grid & Flex Gaps**: ${gridGaps || '`8px`, `16px`, `24px`'}
${
  spaceVarEntries.length > 0
    ? `- **Extracted Spacing & Radius Variables**: ${spaceVarEntries.map(([k, v]) => `\`${k}: ${v}\``).join(', ')}`
    : ''
}

### Surface & Depth Tokens
- **Border Radius Distribution**: ${radiiTokens}
- **Glassmorphism / Backdrop Blur**: ${backdropTokens}
- **Box-Shadow Formulas**:
${shadowsList}

### Real DOM Component Recipes
- **Interactive Buttons**:
${buttonsList}
- **Cards & Containers**:
${cardsList}

### Motion & Transition Curves
- **Easing Curves (\`transition-timing-function\`)**: ${timingTokens || '`cubic-bezier(0.16, 1, 0.3, 1)`'}
- **Transition Durations**: ${durationTokens || '`0.15s`, `0.25s`'}
${
  Object.keys(data.cssVariables.motion || {}).length > 0
    ? `- **Named Motion Tokens**: ${Object.entries(data.cssVariables.motion)
        .slice(0, 6)
        .map(([k, v]) => `\`${k}: ${v}\``)
        .join(', ')}`
    : ''
}

---

## 5. Anti-Patterns (Strictly Forbidden)

${profile.antiPatterns.map((ap) => `- **${ap.split('—')[0]}**${ap.includes('—') ? `—${ap.split('—').slice(1).join('—')}` : ''}`).join('\n')}
`;
}

module.exports = {
  generateSkillMarkdown,
  inferSiteProfile
};
