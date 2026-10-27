const fs = require('fs');
const path = require('path');

const SYNONYM_MAP = {
  dark: ['dark', 'night', 'carbon', 'obsidian', 'black', 'midnight'],
  light: ['light', 'white', 'daylight', 'clean', 'bright', 'alabaster', 'porcelain'],
  warm: ['warm', 'paper', 'parchment', 'ivory', 'sand', 'stone', 'humanist', 'archival'],
  saas: ['saas', 'b2b', 'dashboard', 'workspace', 'product', 'app', 'software', 'crm'],
  precision: ['precision', 'craft', 'crisp', 'hairline', 'minimal', 'minimalist', 'linear', 'swiss', 'grid'],
  fintech: ['fintech', 'finance', 'financial', 'payment', 'payments', 'billing', 'checkout', 'stripe', 'enterprise', 'revenue', 'monetization'],
  devtools: ['devtools', 'developer', 'developers', 'api', 'sdk', 'cli', 'code', 'mono', 'monospace', 'terminal', 'email', 'infra', 'cloud'],
  database: ['database', 'postgres', 'sql', 'sqlite', 'mysql', 'redis', 'serverless', 'edge', 'emerald', 'mint', 'neon', 'supabase', 'turso', 'planetscale'],
  serif: ['serif', 'editorial', 'luxury', 'magazine', 'domaine', 'tiempos', 'newsreader', 'literary'],
  ai: ['ai', 'llm', 'agent', 'agents', 'claude', 'anthropic', 'cursor', 'voice', 'audio'],
  brutalist: ['brutalist', 'ascii', 'retro', 'tactile', 'zero-radius', 'bevel'],
  gradient: ['gradient', 'mesh', 'glow', 'aurora', 'radial', 'glass', 'glassmorphism', 'acrylic'],
  pricing: ['pricing', 'paywall', 'plans', 'tiers', 'billing', 'bento']
};

function tokenize(text) {
  return (text || '')
    .toLowerCase()
    .replace(/[^a-z0-9#.-]+/g, ' ')
    .split(/\s+/)
    .filter((t) => t.length > 1);
}

function expandTokens(tokens) {
  const expanded = new Set(tokens);
  for (const t of tokens) {
    for (const [canonical, list] of Object.entries(SYNONYM_MAP)) {
      if (t === canonical || list.includes(t) || t.includes(canonical)) {
        expanded.add(canonical);
        list.forEach((syn) => expanded.add(syn));
      }
    }
  }
  return Array.from(expanded);
}

function loadFullCatalog(rootDir) {
  const catalogFile = path.join(rootDir, 'src', 'catalog.json');
  const baseCatalog = JSON.parse(fs.readFileSync(catalogFile, 'utf8'));
  const samplesDir = path.join(rootDir, 'samples');
  const extractedDir = path.join(rootDir, 'extracted');
  const catalogBySlug = new Map();

  for (const item of baseCatalog) {
    const skillPath = path.join(samplesDir, item.slug, 'SKILL.md');
    const jsonPath = path.join(extractedDir, `${item.slug}.json`);
    const fontArr = Array.isArray(item.fonts)
      ? item.fonts
      : item.fontList || Object.values(item.fonts || {});
    catalogBySlug.set(item.slug, {
      ...item,
      fontList: fontArr,
      extracted: fs.existsSync(skillPath),
      skillPath: fs.existsSync(skillPath) ? skillPath : null,
      jsonPath: fs.existsSync(jsonPath) ? jsonPath : null
    });
  }

  // Also index any newly extracted URLs not in baseCatalog
  if (fs.existsSync(extractedDir)) {
    for (const file of fs.readdirSync(extractedDir)) {
      if (!file.endsWith('.json')) continue;
      const slug = file.replace(/\.json$/, '');
      if (catalogBySlug.has(slug)) continue;
      try {
        const raw = JSON.parse(fs.readFileSync(path.join(extractedDir, file), 'utf8'));
        const skillPath = path.join(samplesDir, slug, 'SKILL.md');
        const isDark = (raw.palette?.canvasBackgrounds?.[0]?.lum ?? 0) < 0.3;
        const canvas = raw.palette?.canvasBackgrounds?.[0]?.rgba || (isDark ? '#09090B' : '#FFFFFF');
        const surface = raw.palette?.elevatedSurfaces?.[0]?.rgba || canvas;
        const text = raw.palette?.headingTexts?.[0]?.rgba || (isDark ? '#F8FAFC' : '#0F172A');
        const muted = raw.palette?.bodyTexts?.[0]?.rgba || (isDark ? '#94A3B8' : '#64748B');
        const accent = raw.palette?.accents?.[0]?.rgba || '#3B82F6';
        const border = raw.palette?.borders?.[0]?.rgba || (isDark ? 'rgba(255,255,255,0.1)' : '#E2E8F0');
        const h1Font = (raw.typography?.h1?.[0]?.fontFamily || raw.typography?.bodyFontFamily || 'sans-serif').split(',')[0].replace(/['"]/g, '').trim();
        const monoFont = (raw.typography?.mono?.[0]?.fontFamily || 'monospace').split(',')[0].replace(/['"]/g, '').trim();
        const host = new URL(raw.targetUrl).hostname.replace(/^www\./, '');
        catalogBySlug.set(slug, {
          slug,
          name: slug.charAt(0).toUpperCase() + slug.slice(1),
          domain: host,
          url: raw.targetUrl,
          category: 'Custom Extracted',
          archetype: isDark ? 'Custom Dark UI System' : 'Custom Light UI System',
          mode: isDark ? 'dark' : 'light',
          vibe: raw.meta?.description || `Live extracted design system from ${raw.targetUrl}`,
          summary: raw.meta?.description || `Live extracted design system from ${raw.targetUrl}`,
          colors: { canvas, surface, text, muted, accent, border },
          primaryColors: [canvas, surface, text, muted, accent, border],
          fonts: { heading: h1Font, body: h1Font, mono: monoFont },
          fontList: [h1Font, monoFont],
          metrics: {
            h1Size: raw.typography?.h1?.[0] ? `${raw.typography.h1[0].fontSize} / ${raw.typography.h1[0].letterSpacingEm}` : '48px / -0.02em',
            buttonRadius: raw.componentRecipes?.buttons?.[0]?.borderRadius || '8px',
            borderStyle: `1px ${border}`
          },
          tags: [slug, 'custom-extracted', isDark ? 'dark' : 'light'],
          extracted: fs.existsSync(skillPath),
          skillPath: fs.existsSync(skillPath) ? skillPath : null,
          jsonPath: path.join(extractedDir, file)
        });
      } catch {}
    }
  }

  return Array.from(catalogBySlug.values());
}

function searchSkills(query, rootDir, limit = 6) {
  const catalog = loadFullCatalog(rootDir);
  const rawTokens = tokenize(query);
  const expandedTokens = expandTokens(rawTokens);

  const scored = catalog.map((item) => {
    let score = 0;
    const matchedReasons = new Set();
    const haystack = [
      item.slug,
      item.name,
      item.domain,
      item.category,
      item.archetype,
      item.mode,
      item.vibe,
      item.summary,
      ...(item.tags || []),
      ...(item.fontList || []),
      ...(item.primaryColors || [])
    ]
      .join(' ')
      .toLowerCase();

    for (const rt of rawTokens) {
      if (item.slug === rt || item.name.toLowerCase() === rt || (item.domain && item.domain.toLowerCase().includes(rt))) {
        score += 40;
        matchedReasons.add(`brand:${item.slug}`);
      }
      if ((item.tags || []).some((tag) => tag === rt || tag.includes(rt) || rt.includes(tag))) {
        score += 20;
        matchedReasons.add(`tag:${rt}`);
      }
      if (item.archetype.toLowerCase().includes(rt)) {
        score += 16;
        matchedReasons.add(`archetype:${rt}`);
      }
      if ((item.fontList || []).some((f) => f.toLowerCase().includes(rt))) {
        score += 15;
        matchedReasons.add(`font:${rt}`);
      }
      if (haystack.includes(rt)) {
        score += 8;
      }
    }

    for (const et of expandedTokens) {
      if (rawTokens.includes(et)) continue;
      if ((item.tags || []).includes(et)) {
        score += 6;
        matchedReasons.add(`semantic:${et}`);
      } else if (haystack.includes(et)) {
        score += 3;
      }
    }

    if (item.extracted && score > 0) {
      score += 5;
    }

    return {
      ...item,
      score,
      matchedReasons: Array.from(matchedReasons).slice(0, 6)
    };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

module.exports = {
  searchSkills,
  loadFullCatalog
};
