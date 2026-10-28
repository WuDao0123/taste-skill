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

function buildCursorMdc(slug, skillMd) {
  const body = skillMd.replace(/^---[\s\S]*?---\s*/, '');
  return [
    '---',
    `description: TasteSkill Design System & UI Architecture Rules (taste-${slug})`,
    'globs: ["**/*.tsx", "**/*.jsx", "**/*.ts", "**/*.js", "**/*.html", "**/*.css", "**/*.vue", "**/*.svelte"]',
    'alwaysApply: true',
    '---',
    '',
    body
  ].join('\n');
}

function upsertSectionInMarkdownFile(filePath, markerId, headerTitle, skillMd, relSkillPath) {
  const startTag = `<!-- TASTE-SKILL:${markerId}:START -->`;
  const endTag = `<!-- TASTE-SKILL:${markerId}:END -->`;
  const block = [
    startTag,
    `## ${headerTitle} (taste-${markerId})`,
    `> Auto-synced by \`taste-skill\`. Full specification: \`${relSkillPath}\``,
    '',
    `Always follow the design tokens, color contrast ratios, typography scale, layout architecture, and strict anti-patterns defined in \`${relSkillPath}\` whenever building or modifying UI components, landing pages, or stylesheets.`,
    endTag
  ].join('\n');

  let existing = '';
  if (fs.existsSync(filePath)) {
    existing = fs.readFileSync(filePath, 'utf8');
  }
  const regex = new RegExp(`${startTag}[\\s\\S]*?${endTag}`, 'g');
  const updated = regex.test(existing)
    ? existing.replace(regex, block)
    : (existing.trim() ? `${existing.trim()}\n\n${block}\n` : `# Project Coding & Design Agent Instructions\n\n${block}\n`);
  fs.writeFileSync(filePath, updated, 'utf8');
}

function exportUniversalAgentAdapters(baseDir, slug, skillMd, targetMode = 'all') {
  const written = [];
  const mode = String(targetMode || 'all').toLowerCase();
  const isPreset = ['all', 'code', 'claude', 'codex', 'cursor', 'windsurf'].includes(mode);

  if (!isPreset) {
    const customDir = path.resolve(baseDir, targetMode);
    fs.mkdirSync(customDir, { recursive: true });
    const f = customDir.endsWith('.md') ? customDir : path.join(customDir, 'SKILL.md');
    fs.mkdirSync(path.dirname(f), { recursive: true });
    fs.writeFileSync(f, skillMd, 'utf8');
    written.push({ agent: 'Custom Path', file: f });
    return written;
  }

  // 1. Claude Code (.claude/skills/taste-<slug>/SKILL.md + CLAUDE.md)
  if (['all', 'code', 'claude'].includes(mode)) {
    const claudeSkill = path.join(baseDir, '.claude', 'skills', `taste-${slug}`, 'SKILL.md');
    fs.mkdirSync(path.dirname(claudeSkill), { recursive: true });
    fs.writeFileSync(claudeSkill, skillMd, 'utf8');
    written.push({ agent: 'Claude Code Skill', file: claudeSkill });

    const claudeMd = path.join(baseDir, 'CLAUDE.md');
    upsertSectionInMarkdownFile(claudeMd, slug, 'Claude Code Aesthetic & UI Design System', skillMd, `.claude/skills/taste-${slug}/SKILL.md`);
    written.push({ agent: 'Claude Code Root', file: claudeMd });
  }

  // 2. OpenAI Codex / OpenCode / Universal Code Agents (.agents/skills/taste-<slug>/SKILL.md + AGENTS.md)
  if (['all', 'code', 'codex'].includes(mode)) {
    const agentSkill = path.join(baseDir, '.agents', 'skills', `taste-${slug}`, 'SKILL.md');
    fs.mkdirSync(path.dirname(agentSkill), { recursive: true });
    fs.writeFileSync(agentSkill, skillMd, 'utf8');
    written.push({ agent: 'Codex / Universal Agent Skill', file: agentSkill });

    const agentsMd = path.join(baseDir, 'AGENTS.md');
    upsertSectionInMarkdownFile(agentsMd, slug, 'Universal Code Agent Design System', skillMd, `.agents/skills/taste-${slug}/SKILL.md`);
    written.push({ agent: 'Codex / AGENTS.md', file: agentsMd });
  }

  // 3. Cursor (.cursor/skills/taste-<slug>/SKILL.md + .cursor/rules/taste-<slug>.mdc)
  if (['all', 'code', 'cursor'].includes(mode)) {
    const cursorSkill = path.join(baseDir, '.cursor', 'skills', `taste-${slug}`, 'SKILL.md');
    fs.mkdirSync(path.dirname(cursorSkill), { recursive: true });
    fs.writeFileSync(cursorSkill, skillMd, 'utf8');
    written.push({ agent: 'Cursor Skill', file: cursorSkill });

    const cursorMdc = path.join(baseDir, '.cursor', 'rules', `taste-${slug}.mdc`);
    fs.mkdirSync(path.dirname(cursorMdc), { recursive: true });
    fs.writeFileSync(cursorMdc, buildCursorMdc(slug, skillMd), 'utf8');
    written.push({ agent: 'Cursor .mdc Rule', file: cursorMdc });
  }

  // 4. Windsurf (.windsurfrules)
  if (['all', 'code', 'windsurf'].includes(mode)) {
    const windsurfFile = path.join(baseDir, '.windsurfrules');
    upsertSectionInMarkdownFile(windsurfFile, slug, 'Windsurf Design System Rules', skillMd, `.cursor/skills/taste-${slug}/SKILL.md`);
    written.push({ agent: 'Windsurf Rules', file: windsurfFile });
  }

  return written;
}

function printHelp() {
  console.log(`
taste-skill v1.2.0 — URL & Screenshot to Taste Extractor (Universal Code Agent Edition)
Supports: Claude Code (.claude/skills + CLAUDE.md) · Codex/OpenCode (AGENTS.md) · Cursor (.cursor/rules) · Windsurf

Usage:
  npx github:WuDao0123/taste-skill add <slug> [--target all|code|claude|codex|cursor|windsurf|<dir>]
  npx github:WuDao0123/taste-skill from-image <image-path> [--name <custom-name>] [--target all|code|<dir>]
  npx github:WuDao0123/taste-skill extract <url> [--out <dir>] [--target all|code]
  npx github:WuDao0123/taste-skill find "<natural language query>" [--limit <n>]
  npx github:WuDao0123/taste-skill list
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
      console.error('Error: Missing <image-path>. Usage: taste-skill from-image <image-path> [--name <name>] [--target all|code]');
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
    console.log(`  - Primary SKILL.md: ${skillFile}`);

    if (flags.target) {
      const written = exportUniversalAgentAdapters(process.cwd(), res.slug, res.skillMarkdown, flags.target);
      console.log(`  - Universal Code Agent Exports (${written.length} files):`);
      written.forEach((w) => console.log(`      ✔ [${w.agent}] ${path.relative(process.cwd(), w.file) || w.file}`));
    }
    return;
  }

  if (cmd === 'extract') {
    const rawUrl = positional[1];
    if (!rawUrl) {
      console.error('Error: Missing <url>. Usage: taste-skill extract <url> [--out <dir>] [--target all|code]');
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

    if (flags.target) {
      const written = exportUniversalAgentAdapters(process.cwd(), slug, skillMd, flags.target);
      console.log(`  - Universal Code Agent Exports (${written.length} files):`);
      written.forEach((w) => console.log(`      ✔ [${w.agent}] ${path.relative(process.cwd(), w.file) || w.file}`));
    }
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
      console.log(`     Install (Claude Code + Codex + Cursor): npx github:WuDao0123/taste-skill add ${r.slug} --target all\n`);
    });
    return;
  }

  if (cmd === 'add' || cmd === 'install') {
    const slug = (positional[1] || '').replace(/^taste-/, '').toLowerCase();
    if (!slug) {
      console.error('Error: Missing <slug>. Usage: taste-skill add <slug> [--target all|code|claude|codex|cursor|windsurf|<dir>]');
      process.exit(1);
    }
    const sourceSkill = path.join(ROOT_DIR, 'samples', slug, 'SKILL.md');
    if (!fs.existsSync(sourceSkill)) {
      console.error(`Error: Skill "taste-${slug}" is not extracted yet. Run: npx github:WuDao0123/taste-skill extract https://${slug}.com`);
      process.exit(1);
    }
    const skillMd = fs.readFileSync(sourceSkill, 'utf8');
    const targetMode = flags.target || flags.out || 'all';
    const written = exportUniversalAgentAdapters(process.cwd(), slug, skillMd, targetMode);
    console.log(`[taste-skill] Installed taste-${slug} across Universal Code Agents (${written.length} targets):`);
    written.forEach((w) => {
      console.log(`  ✔ [${w.agent.padEnd(28)}] -> ${path.relative(process.cwd(), w.file) || w.file}`);
    });
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
