#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { extractTasteFromUrl, slugifyUrl } = require('../src/extractor');
const { generateSkillMarkdown } = require('../src/generator');
const { searchSkills, loadFullCatalog } = require('../src/search');
const { extractTasteFromImage } = require('../src/image-extractor');

const ROOT_DIR = path.resolve(__dirname, '..');

function parseArgs(argv) {
  const positional = [];
  const flags = {};
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const next = argv[i + 1];
      if (next && !next.startsWith('--')) {
        flags[key] = next;
        i++;
      } else {
        flags[key] = true;
      }
    } else {
      positional.push(arg);
    }
  }
  return { positional, flags };
}

function printHelp() {
  console.log(`
taste-skill v1.1.0 — URL-to-Taste Design System Extractor & Semantic Router

Usage:
  npx github:WuDao0123/taste-skill extract <url> [--out <dir>] [--json <file>]
  npx github:WuDao0123/taste-skill from-image <image-path> [--name <custom-name>] [--out <dir>]
  npx github:WuDao0123/taste-skill find "<natural language query>" [--limit <n>]
  npx github:WuDao0123/taste-skill add <slug> [--target <dir>]
  npx github:WuDao0123/taste-skill list

Examples:
  npx github:WuDao0123/taste-skill extract https://linear.app --out ./samples/linear
  npx github:WuDao0123/taste-skill find "dark precision saas"
  npx github:WuDao0123/taste-skill find "fintech light editorial mesh gradient"
  npx github:WuDao0123/taste-skill find "obsidian developer email serif mono"
  npx github:WuDao0123/taste-skill add linear --target ./.cursor/skills/taste-linear
`);
}

async function main() {
  const { positional, flags } = parseArgs(process.argv.slice(2));
  const cmd = positional[0];

  if (!cmd || cmd === 'help' || flags.help) {
    printHelp();
    process.exit(0);
  }


  if (cmd === 'from-image' || cmd === 'image' || cmd === 'screenshot') {
    const imgPath = positional[1];
    if (!imgPath) {
      console.error('Error: Missing <image-path>. Usage: taste-skill from-image <image-path> [--name <name>] [--out <dir>]');
      process.exit(1);
    }
    console.log(`[taste-skill] Analyzing screenshot pixels, spatial layout & 30-site aesthetic twins for: ${imgPath} ...`);
    const res = await extractTasteFromImage(imgPath, {
      customName: flags.name,
      rootDir: ROOT_DIR
    });
    const outDir = flags.out
      ? path.resolve(process.cwd(), flags.out)
      : path.join(ROOT_DIR, 'samples', res.slug);
    fs.mkdirSync(outDir, { recursive: true });
    const skillFile = outDir.endsWith('.md') ? outDir : path.join(outDir, 'SKILL.md');
    fs.mkdirSync(path.dirname(skillFile), { recursive: true });
    fs.writeFileSync(skillFile, res.skillMarkdown, 'utf8');

    console.log(`[taste-skill] Screenshot-to-Taste completed in ${res.elapsedMs}ms!`);
    console.log(`  - Resolution:       ${res.dimensions.width}x${res.dimensions.height}px (${res.mode.toUpperCase()} mode, ${res.contrastRatio}:1 contrast)`);
    console.log(`  - Extracted Tokens: Canvas ${res.colors.canvas} | Surface ${res.colors.surface} | Text ${res.colors.text} | Accent ${res.colors.accent}`);
    console.log(`  - Layout Skeleton:  ${res.layout.inferredContainerWidth} | Navbar ${res.layout.inferredNavbarHeight} | ${res.layout.gridArchitecture}`);
    console.log(`  - Top Design Twins: ${res.twins.map((t) => `${t.name} (${t.similarity}%)`).join(', ')}`);
    console.log(`  - SKILL.md Saved:   ${skillFile}`);
    return;
  }

  if (cmd === 'extract') {
    const rawUrl = positional[1];
    if (!rawUrl) {
      console.error('Error: Missing <url>. Usage: taste-skill extract <url> [--out <dir>]');
      process.exit(1);
    }
    const targetUrl = /^https?:\/\//i.test(rawUrl) ? rawUrl : `https://${rawUrl}`;
    const slug = flags.slug || slugifyUrl(targetUrl);
    const outDir = flags.out
      ? path.resolve(process.cwd(), flags.out)
      : path.join(ROOT_DIR, 'samples', slug);
    const jsonPath = flags.json
      ? path.resolve(process.cwd(), flags.json)
      : path.join(ROOT_DIR, 'extracted', `${slug}.json`);

    console.log(`[taste-skill] Launching headless Chromium & inspecting DOM/CSS for: ${targetUrl} ...`);
    const extractedData = await extractTasteFromUrl(targetUrl);
    extractedData.slug = slug;

    fs.mkdirSync(path.dirname(jsonPath), { recursive: true });
    fs.writeFileSync(jsonPath, JSON.stringify(extractedData, null, 2), 'utf8');

    const skillMd = generateSkillMarkdown(extractedData);
    fs.mkdirSync(outDir, { recursive: true });
    const skillFile = path.join(outDir, 'SKILL.md');
    fs.writeFileSync(skillFile, skillMd, 'utf8');

    const cssVarCount = Object.values(extractedData.cssVariables || {}).reduce(
      (acc, obj) => acc + Object.keys(obj || {}).length,
      0
    );

    console.log(`[taste-skill] Extraction complete in ${extractedData.elapsedMs}ms!`);
    console.log(`  - Slug:             taste-${slug}`);
    console.log(`  - CSS Variables:    ${cssVarCount} tokens captured`);
    console.log(`  - Primary Canvas:   ${extractedData.palette.canvasBackgrounds[0]?.rgba || 'N/A'}`);
    console.log(`  - Hero H1 Font:     ${extractedData.typography.h1[0]?.fontFamily?.split(',')[0] || 'N/A'} (${extractedData.typography.h1[0]?.fontSize || 'N/A'})`);
    console.log(`  - Raw JSON Saved:   ${jsonPath}`);
    console.log(`  - SKILL.md Saved:   ${skillFile}`);
    return;
  }

  if (cmd === 'find' || cmd === 'search') {
    const query = positional.slice(1).join(' ');
    if (!query) {
      console.error('Error: Missing search query. Usage: taste-skill find "<query>"');
      process.exit(1);
    }
    const limit = flags.limit ? parseInt(flags.limit, 10) : 3;
    const results = searchSkills(query, ROOT_DIR, limit);
    console.log(`\n[taste-skill] Semantic Routing Results for "${query}":\n`);
    if (results.length === 0) {
      console.log('  No indexed skills matched. Run `taste-skill extract <url>` to extract any site on the fly.');
      return;
    }
    results.forEach((r, idx) => {
      const statusBadge = r.extracted ? '[READY: Live Extracted SKILL.md]' : '[INDEXED: Run extract to materialize]';
      console.log(`  ${idx + 1}. taste-${r.slug} (${r.name} — ${r.url})  Score: ${r.score}  ${statusBadge}`);
      console.log(`     Archetype: ${r.archetype}`);
      console.log(`     Matched:   ${r.matchedReasons.join(', ')}`);
      console.log(`     Palette:   ${(r.primaryColors || []).join(' · ')}`);
      console.log(`     Summary:   ${r.summary}`);
      if (r.skillPath) {
        console.log(`     SKILL.md:  ${r.skillPath}`);
      }
      console.log(`     Install:   npx github:WuDao0123/taste-skill add ${r.slug}  (or: npx taste-skill add ${r.slug})\n`);
    });
    return;
  }

  if (cmd === 'add' || cmd === 'install') {
    const slug = (positional[1] || '').replace(/^taste-/, '').toLowerCase();
    if (!slug) {
      console.error('Error: Missing <slug>. Usage: taste-skill add <slug> [--target <dir>]');
      process.exit(1);
    }
    const sourceSkill = path.join(ROOT_DIR, 'samples', slug, 'SKILL.md');
    if (!fs.existsSync(sourceSkill)) {
      console.error(`Error: Skill "taste-${slug}" is not extracted yet. Run: npx github:WuDao0123/taste-skill extract https://${slug}.com`);
      process.exit(1);
    }
    const customTarget = flags.target || flags.out;
    const targetDir = customTarget
      ? path.resolve(process.cwd(), customTarget)
      : path.resolve(process.cwd(), '.cursor', 'skills', `taste-${slug}`);
    fs.mkdirSync(targetDir, { recursive: true });
    const destFile = path.join(targetDir, 'SKILL.md');
    fs.copyFileSync(sourceSkill, destFile);
    console.log(`[taste-skill] Installed taste-${slug} -> ${destFile}`);
    return;
  }

  if (cmd === 'list') {
    const catalog = loadFullCatalog(ROOT_DIR);
    console.log(`\n[taste-skill] Indexed Taste Skills (${catalog.length}):\n`);
    for (const item of catalog) {
      console.log(
        `  - taste-${item.slug.padEnd(10)} | ${item.extracted ? 'EXTRACTED' : 'INDEXED  '} | ${item.name} (${item.url}) — ${item.archetype}`
      );
    }
    console.log('');
    return;
  }

  console.error(`Unknown command: ${cmd}`);
  printHelp();
  process.exit(1);
}

main().catch((err) => {
  console.error('[taste-skill] Fatal error:', err.message || err);
  process.exit(1);
});
