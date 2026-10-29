// AI visibility audit: checks the on-site signals AI answer engines rely on.
// Pure fetch + regex so it runs unchanged in Node 18+ and Cloudflare Workers.

export const AI_BOTS = [
  { ua: 'GPTBot', engine: 'ChatGPT (training)' },
  { ua: 'OAI-SearchBot', engine: 'ChatGPT search' },
  { ua: 'ChatGPT-User', engine: 'ChatGPT browsing' },
  { ua: 'ClaudeBot', engine: 'Claude' },
  { ua: 'Claude-SearchBot', engine: 'Claude search' },
  { ua: 'PerplexityBot', engine: 'Perplexity' },
  { ua: 'Google-Extended', engine: 'Gemini' },
  { ua: 'Applebot-Extended', engine: 'Apple Intelligence' },
];

const UA = 'Mozilla/5.0 (compatible; CiteKitAudit/1.0; +https://citekit.example/audit)';
const TIMEOUT_MS = 8000;

export function normalizeUrl(input) {
  let s = String(input || '').trim();
  if (!s) throw new Error('Enter a website address.');
  if (!/^https?:\/\//i.test(s)) s = 'https://' + s;
  const u = new URL(s);
  if (!/^https?:$/.test(u.protocol)) throw new Error('Only http and https sites can be audited.');
  const host = u.hostname.toLowerCase();
  if (host === 'localhost' || !host.includes('.') || /^(\d+\.){3}\d+$/.test(host) || host.endsWith('.local') || host.endsWith('.internal')) {
    throw new Error('Enter a public website address.');
  }
  return u.origin;
}

async function get(url, fetchImpl) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetchImpl(url, { headers: { 'user-agent': UA, accept: '*/*' }, redirect: 'follow', signal: ctrl.signal });
    const text = res.ok ? (await res.text()).slice(0, 2_000_000) : '';
    return { ok: res.ok, status: res.status, text, url: res.url || url, type: res.headers.get('content-type') || '' };
  } catch (e) {
    return { ok: false, status: 0, text: '', url, type: '', error: e.name === 'AbortError' ? 'timeout' : String(e.message || e) };
  } finally {
    clearTimeout(t);
  }
}

// Minimal robots.txt parser: groups of user-agent lines followed by rules.
export function parseRobots(txt) {
  const groups = [];
  const sitemaps = [];
  let cur = null;
  let lastWasAgent = false;
  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.replace(/#.*/, '').trim();
    if (!line) continue;
    const m = line.match(/^([A-Za-z-]+)\s*:\s*(.*)$/);
    if (!m) continue;
    const key = m[1].toLowerCase();
    const val = m[2].trim();
    if (key === 'sitemap') { sitemaps.push(val); continue; }
    if (key === 'user-agent') {
      if (!cur || !lastWasAgent) { cur = { agents: [], rules: [] }; groups.push(cur); }
      cur.agents.push(val.toLowerCase());
      lastWasAgent = true;
      continue;
    }
    lastWasAgent = false;
    if (cur && (key === 'allow' || key === 'disallow')) cur.rules.push({ type: key, path: val });
  }
  return { groups, sitemaps };
}

// Is the site root ("/") crawlable for this bot? Most specific matching group wins, longest rule wins.
export function rootAllowed(robots, ua) {
  const name = ua.toLowerCase();
  let group = robots.groups.find((g) => g.agents.some((a) => a === name));
  let explicit = Boolean(group);
  if (!group) group = robots.groups.find((g) => g.agents.includes('*'));
  if (!group) return { allowed: true, explicit: false };
  let best = null;
  for (const r of group.rules) {
    if (r.type === 'disallow' && r.path === '') continue;
    const p = r.path.replace(/\*$/, '');
    if (p === '/' || p === '' || '/'.startsWith(p)) {
      if (!best || p.length > best.p.length || (p.length === best.p.length && r.type === 'allow')) best = { p, type: r.type };
    }
  }
  return { allowed: !best || best.type === 'allow', explicit };
}

function jsonLdTypes(html) {
  const types = new Set();
  const re = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  const walk = (node) => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) return node.forEach(walk);
    const t = node['@type'];
    if (typeof t === 'string') types.add(t);
    else if (Array.isArray(t)) t.forEach((x) => typeof x === 'string' && types.add(x));
    for (const k of Object.keys(node)) if (k !== '@type') walk(node[k]);
  };
  while ((m = re.exec(html))) {
    try { walk(JSON.parse(m[1].trim())); } catch { /* invalid JSON-LD counts as missing */ }
  }
  return [...types];
}

function tag(html, re) {
  const m = html.match(re);
  return m ? m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : '';
}

function decode(s) {
  return s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

async function sitemapUrls(origin, robots, fetchImpl) {
  const queue = robots.sitemaps.length ? robots.sitemaps.slice(0, 3) : [origin + '/sitemap.xml'];
  const urls = [];
  let fetched = 0;
  while (queue.length && fetched < 6 && urls.length < 5000) {
    const sm = queue.shift();
    fetched++;
    const r = await get(sm, fetchImpl);
    if (!r.ok) continue;
    const locs = [...r.text.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)].map((x) => decode(x[1]));
    if (/<sitemapindex/i.test(r.text)) queue.push(...locs.slice(0, 5));
    else urls.push(...locs);
  }
  return urls;
}

export async function audit(input, { fetchImpl = fetch } = {}) {
  const origin = normalizeUrl(input);
  const [home, robotsRes, llms, llmsFull] = await Promise.all([
    get(origin + '/', fetchImpl),
    get(origin + '/robots.txt', fetchImpl),
    get(origin + '/llms.txt', fetchImpl),
    get(origin + '/llms-full.txt', fetchImpl),
  ]);
  if (!home.ok && !robotsRes.ok) {
    throw new Error(`Could not load ${origin} (${home.error || 'HTTP ' + home.status}).`);
  }
  const robots = parseRobots(robotsRes.ok ? robotsRes.text : '');
  const urls = await sitemapUrls(origin, robots, fetchImpl);
  const paths = urls.map((u) => { try { return new URL(u).pathname.toLowerCase(); } catch { return ''; } });

  const html = home.text;
  const types = jsonLdTypes(html);
  const title = decode(tag(html, /<title[^>]*>([\s\S]*?)<\/title>/i));
  const description = decode((html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i) || html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i) || [])[1] || '');
  const h1 = decode(tag(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i));

  const bots = AI_BOTS.map((b) => ({ ...b, ...rootAllowed(robots, b.ua) }));
  const blocked = bots.filter((b) => !b.allowed);
  const llmsOk = llms.ok && llms.text.trim().length > 50 && !/<html/i.test(llms.text.slice(0, 500));
  const comparison = paths.filter((p) => /(^|[\/-])vs([\/-]|$)|versus|compare|comparison/.test(p));
  const alternatives = paths.filter((p) => /alternative/.test(p));
  const hasPricing = paths.some((p) => /\/(pricing|plans)(\/|$)/.test(p)) || /href=["'][^"']*(pricing|\/plans)[^"']*["']/i.test(html);
  const entityTypes = types.filter((t) => /^(Organization|Corporation|SoftwareApplication|WebApplication|Product|Brand|LocalBusiness)$/.test(t));
  const faq = types.includes('FAQPage') || paths.some((p) => /\/faq/.test(p));

  const checks = [
    {
      id: 'ai-crawlers', label: 'AI crawlers can read your site', weight: 25,
      score: Math.round(25 * (bots.length - blocked.length) / bots.length),
      detail: blocked.length ? `Blocked: ${blocked.map((b) => `${b.ua} (${b.engine})`).join(', ')}.` : 'All 8 major AI crawlers are allowed.',
      fix: blocked.length ? 'Allow these user agents in robots.txt so answer engines can read and cite your pages.' : '',
    },
    {
      id: 'llms-txt', label: '/llms.txt guide for AI', weight: 15,
      score: llmsOk ? (llmsFull.ok ? 15 : 12) : 0,
      detail: llmsOk ? `Found (${llms.text.length.toLocaleString('en-US')} characters)${llmsFull.ok ? ' plus /llms-full.txt' : ''}.` : 'Missing.',
      fix: llmsOk ? '' : 'Publish /llms.txt with a one-paragraph product summary, pricing, and links to your key pages.',
    },
    {
      id: 'entity-schema', label: 'Structured data describing your product', weight: 20,
      score: (entityTypes.length ? 14 : 0) + (types.length >= 3 ? 6 : types.length ? 3 : 0),
      detail: types.length ? `Homepage JSON-LD types: ${types.join(', ')}.` : 'No JSON-LD found on the homepage.',
      fix: entityTypes.length ? '' : 'Add Organization and SoftwareApplication (or Product) JSON-LD with name, price and URL.',
    },
    {
      id: 'comparison-pages', label: 'Comparison and alternatives pages', weight: 20,
      score: Math.min(20, comparison.length * 4 + alternatives.length * 4),
      detail: urls.length ? `${comparison.length} comparison and ${alternatives.length} alternatives pages in a sitemap of ${urls.length.toLocaleString('en-US')} URLs.` : 'No sitemap found, so comparison pages could not be counted.',
      fix: comparison.length + alternatives.length >= 5 ? '' : 'AI answers to "best X tool" questions quote comparison pages. Publish /you-vs-competitor and /competitor-alternatives pages.',
    },
    {
      id: 'pricing', label: 'Public pricing page', weight: 10,
      score: hasPricing ? 10 : 0,
      detail: hasPricing ? 'Found.' : 'Not found.',
      fix: hasPricing ? '' : 'Publish a /pricing page. Assistants answer "how much does X cost" from it, or from a competitor.',
    },
    {
      id: 'faq', label: 'FAQ content', weight: 5,
      score: faq ? 5 : 0,
      detail: faq ? 'Found.' : 'No FAQPage schema or /faq page.',
      fix: faq ? '' : 'Add an FAQ with FAQPage schema answering the questions buyers ask assistants.',
    },
    {
      id: 'basics', label: 'Title, description and H1', weight: 5,
      score: (title ? 2 : 0) + (description ? 2 : 0) + (h1 ? 1 : 0),
      detail: !home.ok ? `Your homepage refused our request (HTTP ${home.status}). AI crawlers may be refused the same way.` : `Title: ${title ? '"' + title.slice(0, 80) + '"' : 'missing'}. Description: ${description ? 'present' : 'missing'}. H1: ${h1 ? '"' + h1.slice(0, 80) + '"' : 'missing'}.`,
      fix: title && description && h1 ? '' : 'Say plainly what the product is and who it is for in the title, meta description and H1.',
    },
  ];

  const score = checks.reduce((s, c) => s + c.score, 0);
  return {
    origin,
    checkedAt: new Date().toISOString(),
    score,
    grade: score >= 80 ? 'A' : score >= 60 ? 'B' : score >= 40 ? 'C' : 'D',
    checks,
    bots,
    sitemapUrlCount: urls.length,
    homepageBlocked: !home.ok,
  };
}
