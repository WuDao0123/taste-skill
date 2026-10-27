const fs = require('fs');
const path = require('path');
let chromium;
try {
  ({ chromium } = require('playwright-core'));
} catch {
  ({ chromium } = require('/node_modules/playwright-core'));
}
const { loadFullCatalog } = require('./search');

const CHROME_PATH = process.env.CHROME_PATH || '/usr/bin/google-chrome';
const ROOT_DIR = path.resolve(__dirname, '..');

/**
 * Self-contained browser Canvas pixel + spatial telemetry + 30-site aesthetic twin matcher
 * Runs identically in Playwright headless Chromium and in client-side browser <canvas>.
 */
function browserCanvasAnalyzer(payload) {
  const { dataUrl, customName, catalog } = payload;

  function rgbToHex(r, g, b) {
    return '#' + [r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('').toUpperCase();
  }
  function parseHex(hex) {
    const h = String(hex || '#08090A').replace('#', '').trim();
    if (h.length === 3) {
      return [parseInt(h[0]+h[0],16), parseInt(h[1]+h[1],16), parseInt(h[2]+h[2],16)];
    }
    if (h.length >= 6) {
      return [parseInt(h.slice(0,2),16)||8, parseInt(h.slice(2,4),16)||9, parseInt(h.slice(4,6),16)||10];
    }
    return [12, 13, 15];
  }
  function lum(r, g, b) {
    return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  }
  function sat(r, g, b) {
    const mx = Math.max(r, g, b) / 255;
    const mn = Math.min(r, g, b) / 255;
    if (mx === mn) return 0;
    const l = (mx + mn) / 2;
    return l > 0.5 ? (mx - mn) / (2 - mx - mn) : (mx - mn) / (mx + mn);
  }
  function colorDist(c1, c2) {
    const dr = c1[0] - c2[0], dg = c1[1] - c2[1], db = c1[2] - c2[2];
    return Math.sqrt(dr * dr * 0.3 + dg * dg * 0.59 + db * db * 0.11);
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const origW = img.naturalWidth || img.width || 1440;
      const origH = img.naturalHeight || img.height || 900;
      const scale = Math.min(1, 360 / Math.max(origW, origH));
      const w = Math.max(64, Math.round(origW * scale));
      const h = Math.max(64, Math.round(origH * scale));

      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      const data = ctx.getImageData(0, 0, w, h).data;

      // 1. Spatial Color Quantization (bins of 8 levels per channel)
      const borderBuckets = new Map();
      const centerBuckets = new Map();
      const allBuckets = new Map();
      const edgeHairlines = new Map();

      function addBucket(map, r, g, b, weight = 1) {
        const qr = Math.round(r / 6) * 6;
        const qg = Math.round(g / 6) * 6;
        const qb = Math.round(b / 6) * 6;
        const key = `${qr},${qg},${qb}`;
        const cur = map.get(key) || { r: 0, g: 0, b: 0, count: 0 };
        cur.r += r * weight;
        cur.g += g * weight;
        cur.b += b * weight;
        cur.count += weight;
        map.set(key, cur);
      }

      const colEdgeEnergy = new Float32Array(w);
      const rowEdgeEnergy = new Float32Array(h);

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const idx = (y * w + x) * 4;
          const r = data[idx], g = data[idx + 1], b = data[idx + 2], a = data[idx + 3];
          if (a < 128) continue;

          const isOuter = x < w * 0.12 || x > w * 0.88 || y < h * 0.08 || y > h * 0.92;
          if (isOuter) addBucket(borderBuckets, r, g, b, 2);
          else addBucket(centerBuckets, r, g, b, 1);
          addBucket(allBuckets, r, g, b, 1);

          if (x > 0 && y > 0) {
            const leftIdx = (y * w + (x - 1)) * 4;
            const upIdx = ((y - 1) * w + x) * 4;
            const gx = Math.abs(r - data[leftIdx]) + Math.abs(g - data[leftIdx + 1]) + Math.abs(b - data[leftIdx + 2]);
            const gy = Math.abs(r - data[upIdx]) + Math.abs(g - data[upIdx + 1]) + Math.abs(b - data[upIdx + 2]);
            const gMag = (gx + gy) / 3;
            if (gMag > 14) {
              colEdgeEnergy[x] += gMag;
              rowEdgeEnergy[y] += gMag;
              if (gMag >= 16 && gMag <= 65) {
                addBucket(edgeHairlines, r, g, b, 1);
              }
            }
          }
        }
      }

      function topClusters(map, limit = 24) {
        const raw = Array.from(map.values())
          .map((c) => ({
            r: Math.round(c.r / c.count),
            g: Math.round(c.g / c.count),
            b: Math.round(c.b / c.count),
            count: c.count
          }))
          .sort((a, b) => b.count - a.count);
        const merged = [];
        for (const item of raw) {
          const existing = merged.find((m) => colorDist([m.r, m.g, m.b], [item.r, item.g, item.b]) < 16);
          if (existing) {
            const tot = existing.count + item.count;
            existing.r = Math.round((existing.r * existing.count + item.r * item.count) / tot);
            existing.g = Math.round((existing.g * existing.count + item.g * item.count) / tot);
            existing.b = Math.round((existing.b * existing.count + item.b * item.count) / tot);
            existing.count = tot;
          } else {
            merged.push({ ...item });
          }
          if (merged.length >= limit) break;
        }
        return merged.sort((a, b) => b.count - a.count);
      }

      const borderTop = topClusters(borderBuckets, 10);
      const allTop = topClusters(allBuckets, 30);
      const centerTop = topClusters(centerBuckets, 20);
      const hairlineTop = topClusters(edgeHairlines, 10);

      const canvasRgb = borderTop[0] || allTop[0] || { r: 8, g: 9, b: 10 };
      const canvasLum = lum(canvasRgb.r, canvasRgb.g, canvasRgb.b);
      const isDark = canvasLum < 0.45;

      // Elevated Surface: distinct from canvas by 8..55 distance, low-to-moderate saturation
      const surfaceRgb =
        centerTop.find((c) => {
          const d = colorDist([c.r, c.g, c.b], [canvasRgb.r, canvasRgb.g, canvasRgb.b]);
          return d >= 7 && d <= 60 && sat(c.r, c.g, c.b) < 0.45;
        }) ||
        (isDark
          ? { r: Math.min(255, canvasRgb.r + 10), g: Math.min(255, canvasRgb.g + 11), b: Math.min(255, canvasRgb.b + 14) }
          : { r: Math.max(0, canvasRgb.r - 8), g: Math.max(0, canvasRgb.g - 8), b: Math.max(0, canvasRgb.b - 6) });

      // Primary Foreground Text: high luminance contrast vs canvas
      const textRgb =
        allTop.find((c) => Math.abs(lum(c.r, c.g, c.b) - canvasLum) > 0.52 && sat(c.r, c.g, c.b) < 0.35) ||
        (isDark ? { r: 247, g: 248, b: 248 } : { r: 17, g: 24, b: 39 });

      // Muted Secondary Text: mid luminance contrast vs canvas
      const mutedRgb =
        allTop.find((c) => {
          const lDiff = Math.abs(lum(c.r, c.g, c.b) - canvasLum);
          return lDiff >= 0.22 && lDiff <= 0.48 && sat(c.r, c.g, c.b) < 0.35;
        }) || (isDark ? { r: 138, g: 143, b: 152 } : { r: 100, g: 116, b: 139 });

      // Primary Accent / CTA: highest saturation + visual salience score
      const accentCandidates = [...centerTop, ...allTop]
        .filter((c) => colorDist([c.r, c.g, c.b], [canvasRgb.r, canvasRgb.g, canvasRgb.b]) > 25)
        .map((c) => {
          const s = sat(c.r, c.g, c.b);
          const l = lum(c.r, c.g, c.b);
          const salience = s * 2.4 + (l > 0.15 && l < 0.88 ? 0.35 : 0) + Math.min(0.4, c.count / (w * h * 0.05));
          return { ...c, salience, s };
        })
        .sort((a, b) => b.salience - a.salience);

      const accentRgb =
        accentCandidates[0] && accentCandidates[0].s > 0.18
          ? accentCandidates[0]
          : isDark
          ? { r: 94, g: 106, b: 210 }
          : { r: 17, g: 24, b: 39 };

      const borderCandidate = hairlineTop.find(
        (c) => colorDist([c.r, c.g, c.b], [canvasRgb.r, canvasRgb.g, canvasRgb.b]) >= 8
      );
      const borderHex = borderCandidate
        ? rgbToHex(borderCandidate.r, borderCandidate.g, borderCandidate.b)
        : isDark
        ? 'rgba(255, 255, 255, 0.08)'
        : 'rgba(15, 23, 42, 0.09)';

      const extractedColors = {
        canvas: rgbToHex(canvasRgb.r, canvasRgb.g, canvasRgb.b),
        surface: rgbToHex(surfaceRgb.r, surfaceRgb.g, surfaceRgb.b),
        text: rgbToHex(textRgb.r, textRgb.g, textRgb.b),
        muted: rgbToHex(mutedRgb.r, mutedRgb.g, mutedRgb.b),
        accent: rgbToHex(accentRgb.r, accentRgb.g, accentRgb.b),
        border: borderHex,
        borderTranslucent: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(15, 23, 42, 0.08)'
      };

      // 2. Spatial Layout & Rhythm Telemetry
      const avgColEnergy = colEdgeEnergy.reduce((a, b) => a + b, 0) / w;
      let leftMarginPx = 0;
      while (leftMarginPx < w * 0.35 && colEdgeEnergy[leftMarginPx] < avgColEnergy * 0.45) leftMarginPx++;
      let rightMarginPx = 0;
      while (rightMarginPx < w * 0.35 && colEdgeEnergy[w - 1 - rightMarginPx] < avgColEnergy * 0.45) rightMarginPx++;

      const marginRatio = Number((((leftMarginPx + rightMarginPx) / 2) / w).toFixed(3));
      const inferredContainerWidth = marginRatio > 0.14 ? '1152px (max-w-6xl)' : marginRatio > 0.07 ? '1280px (max-w-7xl)' : '1440px (Full-Bleed Grid)';

      // Detect navbar row peak in top 18% of height
      let navRow = Math.round(h * 0.075);
      let maxRowPeak = 0;
      for (let y = Math.round(h * 0.03); y < Math.round(h * 0.16); y++) {
        if (rowEdgeEnergy[y] > maxRowPeak) {
          maxRowPeak = rowEdgeEnergy[y];
          navRow = y;
        }
      }
      const inferredNavbarHeight = `${Math.max(52, Math.min(84, Math.round((navRow / h) * 900)))}px`;

      // Count vertical grid columns in center band
      let gridPeaks = 0;
      for (let x = Math.round(w * 0.15); x < Math.round(w * 0.85); x += 8) {
        if (colEdgeEnergy[x] > avgColEnergy * 1.35) gridPeaks++;
      }
      const gridArchitecture = gridPeaks >= 6 ? '3-Column Bento Card Grid (`grid-cols-1 md:grid-cols-3 gap-5`)' : gridPeaks >= 3 ? '2-Column Asymmetric Split (`grid-cols-1 lg:grid-cols-12 gap-8`)' : 'Focused Editorial Single-Column (`max-w-4xl mx-auto`)';

      // 3. Nearest Aesthetic Twin Matching across the 30 Flagship Sites
      const modeDetected = isDark ? 'dark' : canvasRgb.r > 242 && canvasRgb.r - canvasRgb.b >= 4 ? 'light' : 'light';
      const twins = (catalog || [])
        .map((site) => {
          const sc = site.colors || {};
          const dCanvas = colorDist([canvasRgb.r, canvasRgb.g, canvasRgb.b], parseHex(sc.canvas));
          const dSurface = colorDist([surfaceRgb.r, surfaceRgb.g, surfaceRgb.b], parseHex(sc.surface));
          const dAccent = colorDist([accentRgb.r, accentRgb.g, accentRgb.b], parseHex(sc.accent));
          const modeBonus = (isDark && site.mode === 'dark') || (!isDark && site.mode !== 'dark') ? 0 : 48;
          const rawScore = Math.max(0, 100 - (dCanvas * 0.45 + dSurface * 0.25 + dAccent * 0.2 + modeBonus) / 2.1);
          const similarity = Math.min(98, Math.max(62, Math.round(rawScore)));
          return {
            slug: site.slug,
            name: site.name,
            domain: site.domain,
            archetype: site.archetype,
            mode: site.mode,
            similarity,
            fonts: site.fonts,
            metrics: site.metrics,
            colors: site.colors
          };
        })
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, 3);

      const primaryTwin = twins[0] || {
        slug: isDark ? 'linear' : 'stripe',
        name: isDark ? 'Linear' : 'Stripe',
        domain: isDark ? 'linear.app' : 'stripe.com',
        archetype: isDark ? 'Dark Precision SaaS & Industrial Craftsmanship' : 'Editorial Light & Architectural Grid',
        similarity: 94,
        fonts: { heading: 'Inter Display', body: 'Inter', mono: 'JetBrains Mono' },
        metrics: { h1Size: '56px / -0.032em', buttonRadius: '8px', borderStyle: '1px solid' }
      };

      const slugName = (customName || `screenshot-${primaryTwin.slug}-remix`)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');

      const contrastRatio = Number(
        ((Math.max(lum(textRgb.r, textRgb.g, textRgb.b), canvasLum) + 0.05) /
          (Math.min(lum(textRgb.r, textRgb.g, textRgb.b), canvasLum) + 0.05)).toFixed(1)
      );

      // 4. Generate Complete 5-Section SKILL.md
      const skillMarkdown = `---
name: taste-${slugName}
description: Replicate the exact visual aesthetic, extracted pixel color palette, spatial rhythm, and typography pairing reverse-engineered from screenshot (${origW}x${origH}). Closest flagship aesthetic twin: ${primaryTwin.name} (${primaryTwin.similarity}% match).
---

# ${customName || `Screenshot Aesthetic (${primaryTwin.name} ${primaryTwin.similarity}% Twin)`} — Design System Skill

## 1. Aesthetic Direction & Visual Telemetry
- **Detected Luminance Mode**: \`${isDark ? 'Dark Obsidian / Carbon Precision' : 'Daylight / Editorial Surface'}\` (Canvas luminance \`${(canvasLum * 100).toFixed(1)}%\`, Foreground contrast \`${contrastRatio}:1\`)
- **Nearest Flagship Aesthetic Twins**:
  1. **${primaryTwin.name}** (\`${primaryTwin.domain}\`) — **${primaryTwin.similarity}% Aesthetic Match** (*${primaryTwin.archetype}*)
  ${twins[1] ? `2. **${twins[1].name}** (\`${twins[1].domain}\`) — **${twins[1].similarity}% Match** (*${twins[1].archetype}*)` : ''}
  ${twins[2] ? `3. **${twins[2].name}** (\`${twins[2].domain}\`) — **${twins[2].similarity}% Match** (*${twins[2].archetype}*)` : ''}
- **Core Visual Signature**: \`${extractedColors.canvas}\` primary canvas paired with \`${extractedColors.surface}\` elevated cards, \`${extractedColors.borderTranslucent}\` 1px structural hairlines, and \`${extractedColors.accent}\` high-salience focal accents.

## 2. Exact Extracted Color Tokens & Tailwind Mapping
- **Canvas Background**: \`${extractedColors.canvas}\` (\`bg-[${extractedColors.canvas}]\`)
- **Elevated Surface / Card**: \`${extractedColors.surface}\` (\`bg-[${extractedColors.surface}]\`)
- **Primary Foreground Text**: \`${extractedColors.text}\` (\`text-[${extractedColors.text}]\`)
- **Muted / Secondary Text**: \`${extractedColors.muted}\` (\`text-[${extractedColors.muted}]\`)
- **Primary Accent / Focal CTA**: \`${extractedColors.accent}\` (\`bg-[${extractedColors.accent}] text-white\`)
- **Structural Hairline Border**: \`${extractedColors.border}\` / \`${extractedColors.borderTranslucent}\` (\`border-[${extractedColors.border}]\`)

## 3. Recommended Typography Pairing (Matched from ${primaryTwin.name} Twin)
- **Heading Font Stack**: \`${primaryTwin.fonts?.heading || 'Inter Display'}\`, \`-apple-system\`, \`sans-serif\`
- **Body Font Stack**: \`${primaryTwin.fonts?.body || 'Inter'}\`, \`sans-serif\`
- **Monospace / Telemetry Font**: \`${primaryTwin.fonts?.mono || 'JetBrains Mono'}\`, \`monospace\`
- **Hierarchy & Tracking Scale**:
  - **Hero H1**: \`${primaryTwin.metrics?.h1Size || '56px / -0.032em'}\` (\`text-[48px] md:text-[56px] leading-[1.06] tracking-[-0.032em] font-semibold\`)
  - **Section H2**: \`32px–36px\` (\`text-[32px] leading-[1.15] tracking-[-0.024em] font-medium\`)
  - **Body Copy**: \`15px–16px\` (\`text-[15px] leading-[1.6] text-[${extractedColors.muted}]\`)

## 4. Layout Skeleton & Component Surface Recipes
- **Source Resolution & Margin Ratio**: Analyzed at \`${origW}x${origH}px\` · Horizontal whitespace ratio \`${(marginRatio * 100).toFixed(1)}%\`
- **Container Max-Width**: \`${inferredContainerWidth}\`, horizontal padding \`px-6 md:px-8\`
- **Top Navbar Height**: \`${inferredNavbarHeight}\` with \`backdrop-blur-md\` and bottom hairline \`1px solid ${extractedColors.borderTranslucent}\`
- **Detected Grid Architecture**: ${gridArchitecture}
- **Card Surface Recipe**: \`bg-[${extractedColors.surface}] border border-[${extractedColors.border}] rounded-xl p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]\`
- **Primary CTA Recipe**: \`bg-[${extractedColors.accent}] rounded-[${primaryTwin.metrics?.buttonRadius || '8px'}] px-4 py-2.5 text-sm font-medium transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)]\`

## 5. Strict Anti-Patterns (Forbidden in Coding Agent)
- **NEVER** replace the extracted canvas \`${extractedColors.canvas}\` with generic uncalibrated Tailwind grays (\`bg-gray-900\` or \`bg-slate-100\`).
- **NEVER** use thick opaque borders (\`2px+\`) or heavy drop-shadows without 1px structural hairlines (\`${extractedColors.borderTranslucent}\`).
- **NEVER** introduce random rainbow gradients that clash with the extracted focal accent \`${extractedColors.accent}\`.
- **NEVER** omit negative letter-spacing (\`tracking-[-0.03em]\`) on display headings above \`32px\`.
`;

      resolve({
        slug: slugName,
        name: customName || `Screenshot (${primaryTwin.name} Twin)`,
        dimensions: { width: origW, height: origH },
        mode: isDark ? 'dark' : 'light',
        contrastRatio,
        colors: extractedColors,
        layout: {
          marginRatio,
          inferredContainerWidth,
          inferredNavbarHeight,
          gridArchitecture
        },
        twins,
        primaryTwin,
        skillMarkdown
      });
    };
    img.onerror = (e) => reject(new Error('Failed to decode image in Canvas'));
    img.src = dataUrl;
  });
}

async function extractTasteFromImage(imagePath, options = {}) {
  const startedAt = Date.now();
  const absPath = path.resolve(process.cwd(), imagePath);
  if (!fs.existsSync(absPath)) {
    throw new Error(`Image file not found: ${absPath}`);
  }
  const ext = path.extname(absPath).toLowerCase().replace('.', '') || 'png';
  const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : ext === 'webp' ? 'image/webp' : 'image/png';
  const b64 = fs.readFileSync(absPath).toString('base64');
  const dataUrl = `data:${mime};base64,${b64}`;
  return extractTasteFromDataUrl(dataUrl, {
    customName: options.customName || path.basename(absPath, path.extname(absPath)),
    rootDir: options.rootDir || ROOT_DIR,
    startedAt
  });
}

async function extractTasteFromDataUrl(dataUrl, options = {}) {
  const startedAt = options.startedAt || Date.now();
  const catalog = loadFullCatalog(options.rootDir || ROOT_DIR);
  const browser = await chromium.launch({
    headless: true,
    executablePath: CHROME_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  try {
    const page = await browser.newPage();
    const fnSource = browserCanvasAnalyzer.toString();
    const result = await page.evaluate(
      ({ fnStr, payload }) => {
        const fn = eval(`(${fnStr})`);
        return fn(payload);
      },
      {
        fnStr: fnSource,
        payload: {
          dataUrl,
          customName: options.customName || 'Screenshot Aesthetic',
          catalog
        }
      }
    );
    result.elapsedMs = Date.now() - startedAt;
    return result;
  } finally {
    await browser.close();
  }
}

module.exports = {
  browserCanvasAnalyzer,
  extractTasteFromImage,
  extractTasteFromDataUrl
};
