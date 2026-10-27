let chromium;
try {
  ({ chromium } = require('playwright-core'));
} catch {
  ({ chromium } = require('/node_modules/playwright-core'));
}

const CHROME_PATH = process.env.CHROME_PATH || '/usr/bin/google-chrome';

function slugifyUrl(rawUrl) {
  const u = new URL(rawUrl);
  const host = u.hostname.replace(/^www\./, '');
  const parts = host.split('.');
  return parts.length >= 2 ? parts[0].toLowerCase() : host.replace(/[^a-z0-9]/gi, '-').toLowerCase();
}

/**
 * Dual-Engine URL-to-Taste Extractor:
 * 1. Network + Stylesheet AST/Regex Engine: Captures all same-origin & cross-origin CDN CSS files
 *    (e.g., b.stripecdn.com) via Playwright response interception, extracting custom properties (--*),
 *    @font-face families, and keyframe/transition tokens.
 * 2. Live DOM Computed Style Engine: Evaluates area-weighted colors, typography hierarchy, layout rhythm,
 *    surfaces/shadows/gradients, and component recipes in real rendered Chromium DOM.
 */
async function extractTasteFromUrl(targetUrl, options = {}) {
  const startTime = Date.now();
  const browser = await chromium.launch({
    executablePath: CHROME_PATH,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-blink-features=AutomationControlled',
      '--disable-dev-shm-usage'
    ]
  });

  try {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 2,
      userAgent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
    });

    const page = await context.newPage();

    // Capture cross-origin and same-origin CSS stylesheet bodies at network level (bypasses CORS)
    const networkCssTexts = [];
    page.on('response', async (response) => {
      try {
        const ct = (response.headers()['content-type'] || '').toLowerCase();
        const url = response.url();
        if (ct.includes('text/css') || /\.css(\?|$)/i.test(url)) {
          if (response.status() >= 200 && response.status() < 300) {
            const text = await response.text();
            if (text && text.length < 2_500_000) {
              networkCssTexts.push(text);
            }
          }
        }
      } catch {
        // Ignore body read errors on redirected/closed streams
      }
    });

    await page.goto(targetUrl, {
      waitUntil: 'domcontentloaded',
      timeout: options.timeout || 30000
    });

    // Wait for web fonts & hydrated styles, and scroll slightly to trigger viewport lazy styles
    await page.waitForTimeout(2200);
    await page.evaluate(async () => {
      window.scrollTo(0, 600);
      await new Promise((r) => setTimeout(r, 400));
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 300));
    });

    const rawData = await page.evaluate(async (externalCssList) => {
      // --- 0. Color Normalizer using CSS.supports + Canvas 2D Context ---
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });

      function parseColor(cssColor) {
        if (!cssColor || typeof cssColor !== 'string') return null;
        const trimmed = cssColor.trim();
        if (
          !trimmed ||
          trimmed === 'transparent' ||
          trimmed === 'none' ||
          trimmed === 'inherit' ||
          trimmed === 'initial' ||
          trimmed === 'currentcolor' ||
          trimmed === 'currentColor' ||
          trimmed === 'rgba(0, 0, 0, 0)'
        ) {
          return null;
        }
        if (trimmed.includes('var(') || trimmed.includes('calc(') || (typeof CSS !== 'undefined' && CSS.supports && !CSS.supports('color', trimmed))) {
          return null;
        }
        try {
          ctx.clearRect(0, 0, 1, 1);
          ctx.fillStyle = trimmed;
          ctx.fillRect(0, 0, 1, 1);
          const [r, g, b, aByte] = ctx.getImageData(0, 0, 1, 1).data;
          const a = Math.round((aByte / 255) * 100) / 100;
          if (a === 0) return null;
          const toHex = (n) => n.toString(16).padStart(2, '0').toUpperCase();
          const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
          const rgba = a < 1 ? `rgba(${r}, ${g}, ${b}, ${a})` : hex;
          const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
          const max = Math.max(r, g, b) / 255;
          const min = Math.min(r, g, b) / 255;
          const l = (max + min) / 2;
          const sat = max === min ? 0 : l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
          return {
            raw: trimmed,
            hex,
            rgba,
            r,
            g,
            b,
            a,
            lum: Math.round(lum * 1000) / 1000,
            sat: Math.round(sat * 1000) / 1000
          };
        } catch {
          return null;
        }
      }

      function isVisible(el) {
        if (!el || !(el instanceof Element)) return false;
        const style = window.getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden' || parseFloat(style.opacity) === 0) {
          return false;
        }
        const rect = el.getBoundingClientRect();
        return rect.width > 2 && rect.height > 2;
      }

      // --- 1. CSS Custom Properties (--*) Scanner (DOM Stylesheets + Network CDN CSS) ---
      const cssVarDeclarations = new Map();
      const rawStylesheetTexts = [...(externalCssList || [])];

      for (const sheet of Array.from(document.styleSheets)) {
        try {
          for (const rule of Array.from(sheet.cssRules || [])) {
            const text = rule.cssText || '';
            rawStylesheetTexts.push(text);
          }
        } catch {
          // Handled via networkCssTexts
        }
      }

      // Parse --var-name: value declarations from all collected CSS texts
      const declRegex = /(--[a-zA-Z0-9_-]+)\s*:\s*([^;}{]+)/g;
      for (const txt of rawStylesheetTexts) {
        let match;
        while ((match = declRegex.exec(txt)) !== null) {
          const name = match[1].trim();
          const val = match[2].trim();
          if (name.startsWith('--tw-') || name.startsWith('--webkit-')) continue;
          if (!cssVarDeclarations.has(name) && val && !val.includes('var(--')) {
            cssVarDeclarations.set(name, val);
          } else if (!cssVarDeclarations.has(name) && val) {
            cssVarDeclarations.set(name, val);
          }
        }
      }

      // Also check computed styles on :root, body, main, and first section (for scoped color-mode roots like Stripe's .hds-color-mode)
      const scopeElements = [
        document.documentElement,
        document.body,
        document.querySelector('main'),
        document.querySelector('[class*="color-mode"], [data-theme], section')
      ].filter(Boolean);
      const scopeStyles = scopeElements.map((el) => window.getComputedStyle(el));

      const resolvedVars = {
        colors: {},
        typography: {},
        radius: {},
        spacing: {},
        shadows: {},
        motion: {},
        other: {}
      };

      const sortedVarEntries = Array.from(cssVarDeclarations.entries()).sort((a, b) => {
        const aIsCore = /^--(color|hds-color|hds-font|hds-space|font|text|radius|shadow|speed|ease|slate|gray|background|header|page|homepage)/i.test(a[0]) && !a[1].includes("var(") ? 0 : 1;
        const bIsCore = /^--(color|hds-color|hds-font|hds-space|font|text|radius|shadow|speed|ease|slate|gray|background|header|page|homepage)/i.test(b[0]) && !b[1].includes("var(") ? 0 : 1;
        return aIsCore - bIsCore;
      });
      for (const [name, fallbackVal] of sortedVarEntries.slice(0, 450)) {
        let val = '';
        for (const st of scopeStyles) {
          const v = st.getPropertyValue(name).trim();
          if (v) {
            val = v;
            break;
          }
        }
        if (!val) val = fallbackVal;
        if (!val || val.length > 220) continue;

        const lower = name.toLowerCase();
        const parsedColor = parseColor(val);

        if (parsedColor) {
          resolvedVars.colors[name] = val === parsedColor.rgba ? val : `${val} (${parsedColor.rgba})`;
        } else if (
          lower.includes('font') ||
          lower.includes('tracking') ||
          lower.includes('leading') ||
          lower.includes('letter-spacing') ||
          lower.includes('line-height') ||
          (lower.includes('text-') && (val.endsWith('rem') || val.endsWith('px')))
        ) {
          resolvedVars.typography[name] = val;
        } else if (lower.includes('radius') || lower.includes('rounded')) {
          resolvedVars.radius[name] = val;
        } else if (
          lower.includes('space') ||
          lower.includes('spacing') ||
          lower.includes('gap') ||
          lower.includes('padding') ||
          lower.includes('width') ||
          lower.includes('column')
        ) {
          resolvedVars.spacing[name] = val;
        } else if (lower.includes('shadow') || lower.includes('elevation')) {
          resolvedVars.shadows[name] = val;
        } else if (lower.includes('ease') || lower.includes('duration') || lower.includes('transition') || lower.includes('speed')) {
          resolvedVars.motion[name] = val;
        } else {
          resolvedVars.other[name] = val;
        }
      }

      // --- 2. Computed Color Palette (Area-weighted & Role-classified) ---
      const bgMap = new Map();
      const surfaceMap = new Map();
      const textMap = new Map();
      const headingTextMap = new Map();
      const borderMap = new Map();
      const accentMap = new Map();

      function addColorCount(map, colorObj, weight = 1, sampleTag = '') {
        if (!colorObj) return;
        const key = colorObj.rgba;
        const prev = map.get(key) || { ...colorObj, weight: 0, count: 0, samples: [] };
        prev.weight += weight;
        prev.count += 1;
        if (sampleTag && prev.samples.length < 4 && !prev.samples.includes(sampleTag)) {
          prev.samples.push(sampleTag);
        }
        map.set(key, prev);
      }

      for (const rootEl of [document.documentElement, document.body, document.querySelector('main')].filter(Boolean)) {
        const s = window.getComputedStyle(rootEl);
        const c = parseColor(s.backgroundColor);
        if (c) addColorCount(bgMap, c, 1000000, rootEl.tagName.toLowerCase());
      }

      const allElements = Array.from(document.querySelectorAll('*')).slice(0, 1800);
      const gradients = new Set();
      const boxShadows = new Map();
      const backdropFilters = new Set();
      const radii = new Map();
      const timings = new Map();
      const durations = new Map();
      const containerWidths = new Map();
      const sectionVerticalPaddings = new Map();
      const gridGaps = new Map();

      for (const el of allElements) {
        if (!isVisible(el)) continue;
        const rect = el.getBoundingClientRect();
        const area = Math.max(1, Math.min(rect.width * rect.height, 1440 * 900));
        const s = window.getComputedStyle(el);
        const tag = el.tagName.toLowerCase();

        // Background / Surface
        const bg = parseColor(s.backgroundColor);
        if (bg) {
          if (rect.width >= 900 && rect.height >= 250) {
            addColorCount(bgMap, bg, area, `${tag}.${(el.className || '').toString().slice(0, 24)}`);
          } else if (rect.width >= 120 && rect.height >= 48) {
            addColorCount(surfaceMap, bg, area, `${tag}`);
          }
          if (bg.sat > 0.35 && bg.a > 0.5 && bg.lum > 0.12 && bg.lum < 0.88) {
            addColorCount(accentMap, bg, area * (1 + bg.sat), `${tag}-bg`);
          }
        }

        // Foreground / Text
        const txtContent = Array.from(el.childNodes)
          .filter((n) => n.nodeType === Node.TEXT_NODE)
          .map((n) => n.textContent.trim())
          .join('');
        if (txtContent.length > 0) {
          const fg = parseColor(s.color);
          if (fg) {
            if (/^h[1-4]$/.test(tag)) {
              addColorCount(headingTextMap, fg, txtContent.length * 10, tag);
            } else {
              addColorCount(textMap, fg, txtContent.length, tag);
            }
            if (fg.sat > 0.4 && fg.lum > 0.15 && fg.lum < 0.85) {
              addColorCount(accentMap, fg, txtContent.length * 15, `${tag}-text`);
            }
          }
        }

        // Borders
        for (const side of ['Top', 'Bottom', 'Left', 'Right']) {
          const bw = parseFloat(s[`border${side}Width`]);
          const bs = s[`border${side}Style`];
          if (bw > 0 && bs !== 'none') {
            const bc = parseColor(s[`border${side}Color`]);
            if (bc) {
              addColorCount(borderMap, bc, rect.width + rect.height, `${tag}-border (${bw}px)`);
            }
          }
        }

        // Gradients
        const bgImg = s.backgroundImage;
        if (bgImg && bgImg !== 'none' && bgImg.includes('gradient')) {
          if (gradients.size < 12 && bgImg.length < 360) {
            gradients.add(bgImg);
          }
        }

        // Box shadows
        if (s.boxShadow && s.boxShadow !== 'none') {
          const prev = boxShadows.get(s.boxShadow) || 0;
          boxShadows.set(s.boxShadow, prev + 1);
        }

        // Backdrop filter
        const bf = s.backdropFilter || s.webkitBackdropFilter;
        if (bf && bf !== 'none') {
          backdropFilters.add(bf);
        }

        // Border radius
        const br = s.borderRadius;
        if (br && br !== '0px' && !br.includes('%') && parseFloat(br) > 0 && parseFloat(br) < 100) {
          radii.set(br, (radii.get(br) || 0) + 1);
        }

        // Motion
        const tf = s.transitionTimingFunction;
        const td = s.transitionDuration;
        if (td && td !== '0s' && !td.startsWith('0s,')) {
          durations.set(td, (durations.get(td) || 0) + 1);
          if (tf) {
            timings.set(tf, (timings.get(tf) || 0) + 1);
          }
        }

        // Layout metrics
        const mw = s.maxWidth;
        if (mw && mw.endsWith('px') && parseFloat(mw) >= 640 && parseFloat(mw) <= 1600) {
          containerWidths.set(mw, (containerWidths.get(mw) || 0) + 1);
        }
        if (tag === 'section' || (tag === 'div' && rect.width >= 1000 && rect.height >= 240)) {
          const pt = parseFloat(s.paddingTop);
          const pb = parseFloat(s.paddingBottom);
          if (pt >= 32 || pb >= 32) {
            const key = `${Math.round(pt)}px / ${Math.round(pb)}px`;
            sectionVerticalPaddings.set(key, (sectionVerticalPaddings.get(key) || 0) + 1);
          }
        }
        if ((s.display.includes('grid') || s.display.includes('flex')) && s.gap && s.gap !== 'normal' && s.gap !== '0px') {
          gridGaps.set(s.gap, (gridGaps.get(s.gap) || 0) + 1);
        }
      }

      // --- 3. Typography Scale Extraction ---
      function extractTypoSample(selectorList, filterFn) {
        const candidates = [];
        for (const sel of selectorList) {
          for (const el of Array.from(document.querySelectorAll(sel))) {
            if (!isVisible(el)) continue;
            const text = (el.innerText || '').trim().replace(/\s+/g, ' ');
            if (!text || text.length < 3) continue;
            const s = window.getComputedStyle(el);
            const fontSizePx = parseFloat(s.fontSize);
            if (filterFn && !filterFn(fontSizePx, el, s)) continue;
            const lineHeightPx = parseFloat(s.lineHeight) || fontSizePx * 1.2;
            const letterSpacingPx = s.letterSpacing === 'normal' ? 0 : parseFloat(s.letterSpacing) || 0;
            const color = parseColor(s.color);
            candidates.push({
              tag: el.tagName.toLowerCase(),
              sampleText: text.slice(0, 70),
              fontFamily: s.fontFamily,
              fontSize: `${Math.round(fontSizePx * 10) / 10}px`,
              fontSizeNum: fontSizePx,
              lineHeightPx: `${Math.round(lineHeightPx * 10) / 10}px`,
              lineHeightRatio: Math.round((lineHeightPx / fontSizePx) * 100) / 100,
              letterSpacingPx: `${Math.round(letterSpacingPx * 100) / 100}px`,
              letterSpacingEm:
                letterSpacingPx === 0
                  ? '0em'
                  : `${Math.round((letterSpacingPx / fontSizePx) * 1000) / 1000}em`,
              fontWeight: s.fontWeight,
              color: color ? color.rgba : s.color
            });
          }
        }
        return candidates;
      }

      let h1Candidates = extractTypoSample(['h1'], (fs) => fs >= 20).sort((a, b) => b.fontSizeNum - a.fontSizeNum);
      if (h1Candidates.length === 0) {
        h1Candidates = extractTypoSample(['h1, h2, [class*="hero"] *, main p'], (fs) => fs >= 24).sort((a, b) => b.fontSizeNum - a.fontSizeNum);
      }
      const h2Candidates = extractTypoSample(['h2'], (fs) => fs >= 20 && fs <= 64).sort(
        (a, b) => b.fontSizeNum - a.fontSizeNum
      );
      const h3Candidates = extractTypoSample(['h3'], (fs) => fs >= 16 && fs <= 36).sort(
        (a, b) => b.fontSizeNum - a.fontSizeNum
      );
      const bodyCandidates = extractTypoSample(['p', 'main li'], (fs, el) => fs >= 14 && fs <= 20 && el.innerText.length > 40);
      const monoCandidates = extractTypoSample(
        ['code', 'pre', 'kbd', '[class*="mono"]', '[class*="code"]'],
        () => true
      );

      const stylesheetFonts = new Set();
      for (const txt of rawStylesheetTexts) {
        const fontMatches = txt.match(/font-family\s*:\s*([^;}{]+)/gi) || [];
        for (const fm of fontMatches.slice(0, 80)) {
          const cleaned = fm.replace(/font-family\s*:\s*/i, '').trim();
          if (cleaned && cleaned.length < 180) stylesheetFonts.add(cleaned);
        }
      }

      // --- 4. Component Recipes (Buttons & Cards) ---
      const buttonRecipes = [];
      const btnSelectors = [
        'a[href*="signup"]',
        'a[href*="register"]',
        'a[href*="login"]',
        'a[href*="contact"]',
        'a[href*="start"]',
        'button',
        'a[class*="btn"]',
        'a[class*="button"]',
        'a[class*="Button"]',
        '[role="button"]'
      ];
      const seenBtnStyles = new Set();
      for (const sel of btnSelectors) {
        for (const el of Array.from(document.querySelectorAll(sel))) {
          if (!isVisible(el)) continue;
          const rect = el.getBoundingClientRect();
          if (rect.width < 48 || rect.width > 340 || rect.height < 24 || rect.height > 68) continue;
          const s = window.getComputedStyle(el);
          const bg = parseColor(s.backgroundColor);
          const fg = parseColor(s.color);
          const br = s.borderRadius;
          const bw = parseFloat(s.borderTopWidth);
          const bc = bw > 0 ? parseColor(s.borderTopColor) : null;
          const text = (el.innerText || '').trim().replace(/\s+/g, ' ').slice(0, 32);
          if (!text) continue;
          if (!bg && !bc && s.boxShadow === 'none') continue;
          if (bg) {
            addColorCount(accentMap, bg, rect.width * rect.height * 4, `button:${text}`);
          }
          const sig = `${bg ? bg.rgba : 'transparent'}|${fg ? fg.rgba : ''}|${Math.round(rect.height)}|${br}`;
          if (seenBtnStyles.has(sig)) continue;
          seenBtnStyles.add(sig);
          buttonRecipes.push({
            text,
            tag: el.tagName.toLowerCase(),
            heightPx: `${Math.round(rect.height)}px`,
            padding: `${s.paddingTop} ${s.paddingRight}`,
            borderRadius: br,
            backgroundColor: bg ? bg.rgba : 'transparent',
            textColor: fg ? fg.rgba : s.color,
            border: bw > 0 && bc ? `${bw}px solid ${bc.rgba}` : 'none',
            fontSize: s.fontSize,
            fontWeight: s.fontWeight,
            boxShadow: s.boxShadow !== 'none' ? s.boxShadow : null,
            backdropFilter: s.backdropFilter && s.backdropFilter !== 'none' ? s.backdropFilter : null,
            transition: s.transitionTimingFunction
          });
          if (buttonRecipes.length >= 10) break;
        }
        if (buttonRecipes.length >= 10) break;
      }

      const cardRecipes = [];
      const seenCardStyles = new Set();
      for (const el of allElements) {
        if (!isVisible(el)) continue;
        const rect = el.getBoundingClientRect();
        if (rect.width < 200 || rect.width > 1250 || rect.height < 100 || rect.height > 750) continue;
        const s = window.getComputedStyle(el);
        const br = parseFloat(s.borderRadius);
        const bw = parseFloat(s.borderTopWidth);
        const hasShadow = s.boxShadow && s.boxShadow !== 'none';
        const hasBorder = bw > 0 && s.borderTopStyle !== 'none';
        if (br < 4 || (!hasShadow && !hasBorder)) continue;
        const bg = parseColor(s.backgroundColor);
        const bc = hasBorder ? parseColor(s.borderTopColor) : null;
        const sig = `${bg ? bg.rgba : 'transparent'}|${bc ? bc.rgba : 'none'}|${s.borderRadius}`;
        if (seenCardStyles.has(sig)) continue;
        seenCardStyles.add(sig);
        cardRecipes.push({
          tag: el.tagName.toLowerCase(),
          dimensions: `${Math.round(rect.width)}x${Math.round(rect.height)}`,
          backgroundColor: bg ? bg.rgba : 'transparent',
          border: hasBorder && bc ? `${bw}px solid ${bc.rgba}` : 'none',
          borderRadius: s.borderRadius,
          padding: `${s.paddingTop} ${s.paddingRight}`,
          boxShadow: hasShadow ? s.boxShadow : null,
          backdropFilter: s.backdropFilter !== 'none' ? s.backdropFilter : null
        });
        if (cardRecipes.length >= 8) break;
      }

      const sortMap = (m, limit = 10) =>
        Array.from(m.values())
          .sort((a, b) => b.weight - a.weight)
          .slice(0, limit);

      const sortFreqMap = (m, limit = 10) =>
        Array.from(m.entries())
          .sort((a, b) => b[1] - a[1])
          .slice(0, limit)
          .map(([value, count]) => ({ value, count }));

      return {
        meta: {
          title: document.title,
          description:
            (document.querySelector('meta[name="description"]') || {}).content ||
            (document.querySelector('meta[property="og:description"]') || {}).content ||
            '',
          url: window.location.href
        },
        cssVariables: resolvedVars,
        palette: {
          canvasBackgrounds: sortMap(bgMap, 6),
          elevatedSurfaces: sortMap(surfaceMap, 8),
          headingTexts: sortMap(headingTextMap, 6),
          bodyTexts: sortMap(textMap, 8),
          borders: sortMap(borderMap, 8),
          accents: sortMap(accentMap, 8)
        },
        typography: {
          bodyFontFamily: scopeStyles[1] ? scopeStyles[1].fontFamily : scopeStyles[0].fontFamily,
          h1: h1Candidates.slice(0, 3),
          h2: h2Candidates.slice(0, 4),
          h3: h3Candidates.slice(0, 4),
          body: bodyCandidates.slice(0, 4),
          mono: monoCandidates.slice(0, 4),
          stylesheetFontDeclarations: Array.from(stylesheetFonts).slice(0, 25)
        },
        layout: {
          containerMaxWidths: sortFreqMap(containerWidths, 6),
          sectionVerticalPaddings: sortFreqMap(sectionVerticalPaddings, 6),
          gridFlexGaps: sortFreqMap(gridGaps, 8)
        },
        surfaceAndDepth: {
          borderRadii: sortFreqMap(radii, 8),
          boxShadows: sortFreqMap(boxShadows, 8),
          backdropFilters: Array.from(backdropFilters).slice(0, 8),
          gradients: Array.from(gradients).slice(0, 8)
        },
        motion: {
          timingFunctions: sortFreqMap(timings, 8),
          durations: sortFreqMap(durations, 8)
        },
        componentRecipes: {
          buttons: buttonRecipes,
          cards: cardRecipes
        }
      };
    }, networkCssTexts);

    const elapsedMs = Date.now() - startTime;
    const slug = slugifyUrl(targetUrl);

    return {
      slug,
      targetUrl,
      extractedAt: new Date().toISOString(),
      elapsedMs,
      ...rawData
    };
  } finally {
    await browser.close();
  }
}

module.exports = {
  extractTasteFromUrl,
  slugifyUrl
};
