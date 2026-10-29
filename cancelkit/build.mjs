#!/usr/bin/env node
// CancelKit static site generator. Zero dependencies: `node build.mjs` writes ./dist.
// Guides with `verified: null` are built as drafts: noindex, a visible banner,
// and left out of sitemap.xml and llms.txt until someone checks the steps against the service's official help pages.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(ROOT, 'dist');
const site = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/site.json'), 'utf8'));
const { categories, services } = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/services.json'), 'utf8'));
const SITE_URL = (process.env.SITE_URL || site.url).replace(/\/$/, '');

const SHARED_METHODS = {
  apple: {
    label: 'iPhone (App Store billing)',
    steps: [
      { title: 'Open Settings on your iPhone', body: 'Tap your name at the top.' },
      { title: 'Tap Subscriptions', body: 'You see every subscription billed through Apple.' },
      { title: 'Tap the subscription', body: 'Pick the one you want to end.' },
      { title: 'Tap Cancel Subscription', body: 'Scroll down if you do not see it. No button usually means it is already cancelled. Cancel trials at least 24 hours before they end.' }
    ]
  },
  google: {
    label: 'Android (Google Play billing)',
    steps: [
      { title: 'Open your Google Play subscriptions', body: 'On your Android device, go to play.google.com/store/account/subscriptions, signed in to the Google Account that pays.' },
      { title: 'Select the subscription', body: 'Uninstalling the app does not cancel it.' },
      { title: 'Tap Cancel subscription', body: 'Follow the on-screen instructions to confirm.' }
    ]
  }
};

// ---------- helpers ----------

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const abs = (p) => SITE_URL + p;
const catBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));
const svcBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
const guideUrl = (s) => `/how-to-cancel/${s.slug}/`;
const isVerified = (s) => Boolean(s.verified);
const sorted = [...services].sort((a, b) => a.name.localeCompare(b.name));

function methodsOf(s) {
  return s.methods.map((m) => (m.shared ? { id: m.id, ...SHARED_METHODS[m.shared] } : m));
}

function write(rel, content) {
  const file = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

function checkoutLink(key) {
  return site.checkout[key] || '';
}

const LOGO = '<svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true"><rect x="1" y="1" width="26" height="26" rx="7" fill="currentColor"/><path d="M8 14h12M14 8v12" stroke="#fff" stroke-width="2.2" stroke-linecap="round" transform="rotate(45 14 14)"/></svg>';
const CHECK = '<svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function layout({ title, description, pathname, body, noindex = false, jsonld = [] }) {
  const ld = jsonld.map((o) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`).join('\n');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${esc(abs(pathname))}">
${noindex ? '<meta name="robots" content="noindex">' : ''}
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(abs(pathname))}">
<meta property="og:type" content="website">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css">
${ld}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="topbar">
<nav class="wrap nav" aria-label="Main">
<a class="brand" href="/">${LOGO}<span>${esc(site.name)}</span></a>
<div class="nav-links">
<a href="/how-to-cancel/">Cancel guides</a>
<a href="/tools/subscription-cost-calculator/">Calculator</a>
<a href="/pricing/">Pricing</a>
<a class="btn btn-dark" href="/pricing/">Track my subscriptions</a>
</div>
</nav>
</header>
<main id="main">
${body}
</main>
${footer()}
<script src="/app.js" defer></script>
</body>
</html>
`;
}

function footer() {
  const popular = sorted.slice(0, 6).map((s) => `<a href="${guideUrl(s)}">Cancel ${esc(s.name)}</a>`).join('');
  const cats = categories.map((c) => `<a href="/category/${c.slug}/">${esc(c.name)}</a>`).join('');
  return `<footer class="footer">
<div class="wrap">
<div class="footer-grid">
<div><h2>Popular guides</h2>${popular}</div>
<div><h2>Categories</h2>${cats}</div>
<div><h2>Free tools</h2><a href="/tools/subscription-cost-calculator/">Subscription cost calculator</a><a href="/tools/cancellation-letter/">Cancellation letter generator</a></div>
<div><h2>${esc(site.name)}</h2><a href="/pricing/">Pricing</a><a href="/how-to-cancel/">All guides A–Z</a><a href="/llms.txt">llms.txt</a></div>
</div>
<p class="fineprint">${esc(site.name)} is not affiliated with the services listed. Guides are checked against each service's official help pages and show the date they were last checked.</p>
</div>
</footer>`;
}

function verifiedBadge(s) {
  return isVerified(s)
    ? `<span class="meta-item ok">${CHECK}Checked against official help pages on ${esc(s.verified)}</span>`
    : '<span class="meta-item">Not yet verified</span>';
}

function draftBanner(s) {
  if (isVerified(s)) return '';
  return `<div class="draft" role="note"><strong>Draft guide.</strong> These steps have not been checked against the official help pages yet and may be out of date. Cancel menus change often; confirm on ${esc(s.domain)}.</div>`;
}

function sourcesBlock(s) {
  if (!s.sources?.length) return '';
  return `<section class="sources"><h2>Sources</h2><ul>${s.sources.map((u) => `<li><a href="${esc(u)}" rel="nofollow noopener" target="_blank">${esc(u.replace(/^https?:\/\//, '').replace(/\?.*$/, ''))}</a></li>`).join('')}</ul></section>`;
}

function guideCard(s) {
  return `<a class="card" href="${guideUrl(s)}"><span class="card-title">Cancel ${esc(s.name)}</span><span class="card-sub">${esc(catBySlug[s.category].name)} · ~${s.minutes} min</span></a>`;
}

// ---------- pages ----------

function homePage() {
  const popular = sorted.map((s) => `<a class="chip" href="${guideUrl(s)}">${esc(s.name)}</a>`).join('');
  const options = sorted.map((s) => `<option value="${esc(s.name)}" data-href="${guideUrl(s)}"></option>`).join('');
  const cats = categories.map((c) => {
    const list = services.filter((s) => s.category === c.slug);
    return `<a class="card" href="/category/${c.slug}/"><span class="card-title">${esc(c.name)}</span><span class="card-sub">${esc(list.map((s) => s.name).join(', '))}</span><span class="mono accent">${list.length} guide${list.length === 1 ? '' : 's'}</span></a>`;
  }).join('');
  const body = `
<section class="wrap hero">
<p class="eyebrow">${services.length} cancel guides · no bank login · flat price</p>
<h1>${esc(site.tagline)}</h1>
<p class="lead">Step-by-step guides for the services that make leaving hard, plus a tracker that warns you before the next charge. We never ask for your bank login and never take a cut of what you save.</p>
<form class="search" action="/how-to-cancel/" method="get" data-search>
<label class="sr-only" for="q">Which subscription do you want to cancel?</label>
<input id="q" name="q" type="search" list="services" autocomplete="off" placeholder="Which subscription do you want to cancel?">
<datalist id="services">${options}</datalist>
<button class="btn btn-accent" type="submit">Show me how</button>
</form>
<div class="chips"><span class="muted">Guides:</span>${popular}</div>
</section>

<section class="band-dark">
<div class="wrap split">
<div>
<p class="eyebrow on-dark">Free tool</p>
<h2>What your subscriptions really cost.</h2>
<p class="on-dark-muted">Type what you pay each month. The number most people never add up is the five-year one.</p>
</div>
${calculatorWidget()}
</div>
</section>

<section class="wrap section">
<h2>Three steps. No phone tree.</h2>
<div class="grid-3">
<div class="step"><span class="mono accent">01</span><h3>Search the service</h3><p>Each guide covers the web, iPhone and Android billing paths, and the cases that need a visit or a letter.</p></div>
<div class="step"><span class="mono accent">02</span><h3>Follow the checked steps</h3><p>Every guide is checked against the service's own help pages, links to them, and shows when it was last checked.</p></div>
<div class="step"><span class="mono accent">03</span><h3>Keep proof, get reminded</h3><p>Save the confirmation in your tracker. We email you before any trial or renewal charges again.</p></div>
</div>
</section>

<section class="band-soft">
<div class="wrap section">
<div class="row-between"><h2>Browse by category</h2><a href="/how-to-cancel/">All guides A–Z</a></div>
<div class="grid-cards">${cats}</div>
</div>
</section>

<section class="wrap section" id="compare">
<h2>Why pay for cancelling? So it stays on your side.</h2>
<p class="lead narrow">Apps that read your bank account can earn more when you stay subscribed. We charge a flat price and that is the whole business.</p>
<div class="table-box">
<table>
<thead><tr><th scope="col"><span class="sr-only">Feature</span></th><th scope="col" class="accent">${esc(site.name)}</th><th scope="col">Bank-linked trackers</th><th scope="col">Doing it yourself</th></tr></thead>
<tbody>
<tr><th scope="row">Needs your bank login</th><td>No</td><td>Usually</td><td>No</td></tr>
<tr><th scope="row">How it makes money</th><td>Flat price</td><td>Subscriptions, offers or a cut of savings</td><td>–</td></tr>
<tr><th scope="row">Step-by-step cancel guides</th><td>Yes, dated</td><td>Partial</td><td>Forum threads</td></tr>
<tr><th scope="row">Reminder before trials renew</th><td>Yes</td><td>Yes</td><td>If you remember</td></tr>
</tbody>
</table>
</div>
</section>

<section class="wrap section narrow-col">
<h2>Questions</h2>
${faqList(HOME_FAQ)}
</section>`;
  return layout({
    title: `${site.name}: How to cancel any subscription, step by step`,
    description: site.description,
    pathname: '/',
    body,
    jsonld: [
      { '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: abs('/'), potentialAction: { '@type': 'SearchAction', target: abs('/how-to-cancel/?q={query}'), 'query-input': 'required name=query' } },
      { '@context': 'https://schema.org', '@type': 'Organization', name: site.name, url: abs('/') },
      faqSchema(HOME_FAQ)
    ]
  });
}

const HOME_FAQ = [
  { q: 'Is CancelKit free?', a: 'Every cancel guide and the free tools are free. The tracker and reminders are paid: a one-time 7-day pass or Tracker Pro.' },
  { q: 'Do you cancel subscriptions for me?', a: 'No. You stay in control of your accounts. We show the exact path and remind you before charges.' },
  { q: 'Why no bank connection?', a: 'You add subscriptions by name in seconds. Nothing reads your transactions, so there is nothing to leak or sell.' },
  { q: 'A guide is out of date. What now?', a: 'Each guide shows the date it was last verified. Tell us and we recheck it.' }
];

function faqList(items) {
  return items.map((f) => `<details class="faq"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('\n');
}

function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } }))
  };
}

function calculatorWidget() {
  return `<div class="calc" data-calc>
<label for="monthly">Monthly total ($)</label>
<input id="monthly" type="number" min="0" step="1" value="87" inputmode="decimal">
<div class="calc-out">
<div><span>Per year</span><output class="mono" data-yearly>$1,044</output></div>
<div class="calc-hot"><span>Over 5 years</span><output class="mono" data-five>$5,220</output></div>
</div>
<a class="btn btn-light" href="/pricing/">Get a reminder before each charge</a>
</div>`;
}

function guidePage(s) {
  const cat = catBySlug[s.category];
  const methods = methodsOf(s);
  const tabs = methods.length > 1
    ? `<nav class="method-nav" aria-label="Cancel method">${methods.map((m) => `<a href="#${m.id}">${esc(m.label)}</a>`).join('')}</nav>`
    : '';
  const methodHtml = methods.map((m) => `
<section class="method" id="${m.id}">
<h2>${esc(m.label)}</h2>
<ol class="steps">
${m.steps.map((st, i) => `<li><span class="num mono">${i + 1}</span><div><h3>${esc(st.title)}</h3><p>${esc(st.body)}</p></div></li>`).join('\n')}
</ol>
</section>`).join('\n');
  const alts = (s.alternatives || []).map((slug) => svcBySlug[slug]).filter(Boolean);
  const related = services.filter((o) => o.category === s.category && o.slug !== s.slug);
  const title = `How to Cancel ${s.name}: Step-by-Step Guide`;
  const description = s.quickAnswer.length > 155 ? s.quickAnswer.slice(0, 152).replace(/\s+\S*$/, '') + '…' : s.quickAnswer;
  const primary = methods[0];

  const body = `
<div class="wrap guide">
<article class="guide-main">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/category/${cat.slug}/">${esc(cat.name)}</a><span aria-hidden="true">/</span><span>${esc(s.name)}</span></nav>
<h1>How to cancel ${esc(s.name)}</h1>
<div class="meta">${verifiedBadge(s)}<span class="meta-item">Takes about ${s.minutes} minute${s.minutes === 1 ? '' : 's'}</span><span class="meta-item">${methods.length} way${methods.length === 1 ? '' : 's'} to cancel</span></div>
${draftBanner(s)}
<div class="quick"><p class="eyebrow">Quick answer</p><p>${esc(s.quickAnswer)}</p></div>
${tabs}
${methodHtml}
<section>
<h2>What happens after you cancel</h2>
<ul class="bullets">${s.after.map((a) => `<li>${esc(a)}</li>`).join('')}</ul>
</section>
${alts.length ? `<section><h2>Before you cancel: compare</h2><div class="grid-cards">${alts.map(guideCard).join('')}</div></section>` : ''}
<section>
<h2>${esc(s.name)} cancellation FAQ</h2>
${faqList(s.faq)}
</section>
${sourcesBlock(s)}
</article>
<aside class="guide-side">
<div class="promo">
<p class="eyebrow on-dark">Before you go</p>
<h2>Got other subscriptions you forgot about?</h2>
<p>Add them to your tracker and we email you 3 days before each charge. No bank login.</p>
<a class="btn btn-accent" href="/pricing/">Start a 7-day pass</a>
<span class="small">One-time $${site.prices.pass}. Does not renew.</span>
</div>
<div class="side-box"><h2>Needs it in writing?</h2><p>Make a cancellation letter in a minute.</p><a href="/tools/cancellation-letter/">Open letter generator</a></div>
${related.length ? `<div class="side-box"><h2>People also cancel</h2>${related.map((o) => `<a href="${guideUrl(o)}">Cancel ${esc(o.name)}</a>`).join('')}</div>` : ''}
</aside>
</div>`;

  return layout({
    title,
    description,
    pathname: guideUrl(s),
    body,
    noindex: !isVerified(s),
    jsonld: [
      {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: `How to cancel ${s.name}`,
        description: s.quickAnswer,
        totalTime: `PT${s.minutes}M`,
        step: primary.steps.map((st, i) => ({ '@type': 'HowToStep', position: i + 1, name: st.title, text: st.body, url: abs(`${guideUrl(s)}#${primary.id}`) }))
      },
      faqSchema(s.faq),
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: abs('/') },
          { '@type': 'ListItem', position: 2, name: cat.name, item: abs(`/category/${cat.slug}/`) },
          { '@type': 'ListItem', position: 3, name: s.name, item: abs(guideUrl(s)) }
        ]
      }
    ]
  });
}

function indexPage() {
  const groups = {};
  for (const s of sorted) (groups[s.name[0].toUpperCase()] ||= []).push(s);
  const body = `
<section class="wrap section">
<h1 class="h1-sm">All cancel guides, A–Z</h1>
<p class="lead">${services.length} guides. Type to filter.</p>
<form class="search" data-filter-form role="search">
<label class="sr-only" for="filter">Filter guides</label>
<input id="filter" type="search" placeholder="Filter by service name" data-filter autocomplete="off">
</form>
${Object.entries(groups).map(([letter, list]) => `<div class="az" data-az><h2>${letter}</h2><div class="grid-cards">${list.map((s) => guideCard(s).replace('<a class="card"', `<a class="card" data-name="${esc(s.name.toLowerCase())}"`)).join('')}</div></div>`).join('\n')}
<p class="muted" data-empty hidden>No guide for that yet.</p>
</section>`;
  return layout({ title: `All Cancel Guides A–Z | ${site.name}`, description: `Step-by-step guides to cancel ${services.length} subscriptions, from ${sorted[0].name} to ${sorted[sorted.length - 1].name}.`, pathname: '/how-to-cancel/', body });
}

function categoryPage(c) {
  const list = sorted.filter((s) => s.category === c.slug);
  const body = `
<section class="wrap section">
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>${esc(c.name)}</span></nav>
<h1 class="h1-sm">How to cancel ${esc(c.name.toLowerCase())} subscriptions</h1>
<p class="lead">${esc(c.blurb)}</p>
<div class="grid-cards">${list.map(guideCard).join('')}</div>
</section>`;
  return layout({ title: `Cancel ${c.name} Subscriptions | ${site.name}`, description: `${c.blurb} Guides for ${list.map((s) => s.name).join(', ')}.`, pathname: `/category/${c.slug}/`, body });
}

function buyButton(key, label, cls) {
  const href = checkoutLink(key);
  return href
    ? `<a class="btn ${cls}" href="${esc(href)}">${label}</a>`
    : `<span class="btn ${cls} is-disabled" aria-disabled="true">${label} · coming soon</span>`;
}

function pricingPage() {
  const p = site.prices;
  const yearlyTotal = p.proYearlyPerMonth * 12;
  const savePct = Math.round((1 - yearlyTotal / (p.proMonthly * 12)) * 100);
  const PRICING_FAQ = [
    { q: 'Does the 7-day pass renew?', a: 'No. It ends on day 7 and is never charged again.' },
    { q: 'Do you need my bank account?', a: 'No. You add subscriptions by name. Nothing reads your transactions.' },
    { q: 'Can I get a refund?', a: 'Yes, within 14 days of any payment.' },
    { q: `How do I cancel ${site.name}?`, a: 'Settings, then Plan, then Cancel. One click, no survey wall, no phone call.' },
    { q: 'Will you remind me before Tracker Pro renews?', a: 'Yes, 3 days before, the same way we remind you about your other subscriptions.' },
    { q: 'Are the guides free?', a: 'Yes. Every guide and free tool stays free, with no account needed.' }
  ];
  const body = `
<section class="wrap hero center">
<h1 class="h1-md">Guides are free. Reminders cost less than one forgotten renewal.</h1>
<p class="lead">Flat prices, no bank login, no cut of your savings.</p>
<div class="toggle" role="group" aria-label="Billing period" data-billing>
<button type="button" aria-pressed="true" data-period="yearly">Yearly · save ${savePct}%</button>
<button type="button" aria-pressed="false" data-period="monthly">Monthly</button>
</div>
</section>
<section class="wrap plans">
<div class="plan">
<h2>Free</h2><p class="muted">For cancelling one thing today</p>
<p class="price mono">$0</p>
<ul><li>Every cancel guide</li><li>Subscription cost calculator</li><li>Cancellation letter generator</li></ul>
<a class="btn btn-outline" href="/how-to-cancel/">Browse guides</a>
</div>
<div class="plan">
<h2>7-Day Pass</h2><p class="muted">For a one-time subscription clean-out</p>
<p class="price mono">$${p.pass} <span class="per">once</span></p>
<ul><li>Full tracker for 7 days</li><li>Reminders for every trial you add</li><li>Cancellation proof vault</li><li>Never renews</li></ul>
${buyButton('pass', 'Get the 7-day pass', 'btn-dark')}
</div>
<div class="plan plan-hot">
<span class="ribbon">Most people pick this</span>
<h2>Tracker Pro</h2><p class="muted">For never paying for a forgotten trial again</p>
<p class="price mono"><span data-price-yearly>$${p.proYearlyPerMonth}</span><span data-price-monthly hidden>$${p.proMonthly}</span> <span class="per">/ month</span></p>
<p class="small" data-note-yearly>Billed $${yearlyTotal} once a year</p>
<p class="small" data-note-monthly hidden>Billed monthly. Yearly saves $${p.proMonthly * 12 - yearlyTotal}</p>
<ul><li>Everything in the 7-day pass, always on</li><li>Email alert 3 days before each charge</li><li>Free-trial countdowns</li><li>Price-increase alerts</li></ul>
<span data-buy-yearly>${buyButton('proYearly', 'Start Tracker Pro', 'btn-accent')}</span>
<span data-buy-monthly hidden>${buyButton('proMonthly', 'Start Tracker Pro', 'btn-accent')}</span>
</div>
</section>
<section class="wrap"><div class="trust"><span>No card needed for free guides</span><span>14-day money-back guarantee</span><span>Cancel in one click</span></div></section>
<section class="wrap section narrow-col"><h2>Pricing questions</h2>${faqList(PRICING_FAQ)}</section>`;
  return layout({ title: `Pricing | ${site.name}`, description: `Free cancel guides. $${p.pass} one-time 7-day pass or Tracker Pro from $${p.proYearlyPerMonth}/month. No bank login.`, pathname: '/pricing/', body, jsonld: [faqSchema(PRICING_FAQ)] });
}

function calculatorPage() {
  const body = `
<section class="wrap section">
<h1 class="h1-sm">Subscription cost calculator</h1>
<p class="lead narrow">Enter what you pay each month across all your subscriptions to see the yearly and five-year cost.</p>
<div class="calc-page">${calculatorWidget()}</div>
</section>`;
  return layout({ title: `Subscription Cost Calculator: Yearly and 5-Year Total | ${site.name}`, description: 'Free calculator: see what your monthly subscriptions cost per year and over five years.', pathname: '/tools/subscription-cost-calculator/', body });
}

function letterPage() {
  const body = `
<section class="wrap section">
<h1 class="h1-sm">Cancellation letter generator</h1>
<p class="lead narrow">For gyms and services that want it in writing. Fill in the fields, then copy or print the letter. Nothing you type leaves your browser.</p>
<div class="letter" data-letter>
<form class="letter-form">
<label>Your full name<input name="name" autocomplete="name"></label>
<label>Your address<textarea name="address" rows="3" autocomplete="street-address"></textarea></label>
<label>Company or club<input name="company"></label>
<label>Company address<textarea name="companyAddress" rows="3"></textarea></label>
<label>Member or account number<input name="account"></label>
<label>Cancellation effective date<input name="date" type="date"></label>
</form>
<div class="letter-preview">
<pre class="letter-text" data-letter-out aria-live="polite"></pre>
<div class="row-gap"><button class="btn btn-dark" type="button" data-copy>Copy letter</button><button class="btn btn-outline" type="button" data-print>Print</button></div>
</div>
</div>
</section>`;
  return layout({ title: `Free Cancellation Letter Generator | ${site.name}`, description: 'Write a membership or subscription cancellation letter in a minute. Free, private, no sign-up.', pathname: '/tools/cancellation-letter/', body });
}

function notFoundPage() {
  return layout({ title: `Page not found | ${site.name}`, description: 'Page not found.', pathname: '/404.html', noindex: true, body: `<section class="wrap hero"><h1 class="h1-sm">That page does not exist.</h1><p class="lead"><a href="/how-to-cancel/">Browse all cancel guides</a></p></section>` });
}

// ---------- machine-readable files ----------

function sitemap() {
  const urls = ['/', '/how-to-cancel/', '/pricing/', '/tools/subscription-cost-calculator/', '/tools/cancellation-letter/',
    ...categories.map((c) => `/category/${c.slug}/`),
    ...services.filter(isVerified).map(guideUrl)];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `<url><loc>${esc(abs(u))}</loc></url>`).join('\n')}
</urlset>
`;
}

function llmsTxt() {
  const verified = sorted.filter(isVerified);
  return `# ${site.name}

> ${site.description}

${site.name} publishes hand-checked, dated guides for cancelling subscriptions. Each guide lists every billing path (web, Apple App Store, Google Play, in person, by letter) and what happens after cancelling.

## Cancel guides
${verified.length ? verified.map((s) => `- [How to cancel ${s.name}](${abs(guideUrl(s))}): ${s.quickAnswer.split('. ')[0]}.`).join('\n') : '- Guides are listed here once checked against official sources.'}

## Categories
${categories.map((c) => `- [${c.name}](${abs(`/category/${c.slug}/`)}): ${c.blurb}`).join('\n')}

## Tools
- [Subscription cost calculator](${abs('/tools/subscription-cost-calculator/')}): yearly and five-year cost of monthly subscriptions.
- [Cancellation letter generator](${abs('/tools/cancellation-letter/')}): printable cancellation letter, runs in the browser.

## Optional
- [Pricing](${abs('/pricing/')}): free guides; paid 7-day pass and Tracker Pro reminders.
- [Full guide text](${abs('/llms-full.txt')})
`;
}

function llmsFull() {
  return `# ${site.name}: full guide text\n\n` + sorted.filter(isVerified).map((s) => {
    const parts = [`## How to cancel ${s.name}`, `Guide: ${abs(guideUrl(s))}`, `Last checked: ${s.verified}`, ...(s.sources || []).map((u) => `Official source: ${u}`), '', s.quickAnswer, ''];
    for (const m of methodsOf(s)) {
      parts.push(`### ${m.label}`);
      m.steps.forEach((st, i) => parts.push(`${i + 1}. ${st.title}. ${st.body}`));
      parts.push('');
    }
    parts.push('### After cancelling', ...s.after.map((a) => `- ${a}`), '');
    return parts.join('\n');
  }).join('\n');
}

// ---------- build ----------

for (const s of services) {
  if (!catBySlug[s.category]) throw new Error(`${s.slug}: unknown category "${s.category}"`);
  for (const m of s.methods) if (m.shared && !SHARED_METHODS[m.shared]) throw new Error(`${s.slug}: unknown shared method "${m.shared}"`);
}

fs.rmSync(OUT, { recursive: true, force: true });
write('index.html', homePage());
write('how-to-cancel/index.html', indexPage());
for (const s of services) write(`how-to-cancel/${s.slug}/index.html`, guidePage(s));
for (const c of categories) write(`category/${c.slug}/index.html`, categoryPage(c));
write('pricing/index.html', pricingPage());
write('tools/subscription-cost-calculator/index.html', calculatorPage());
write('tools/cancellation-letter/index.html', letterPage());
write('404.html', notFoundPage());
write('sitemap.xml', sitemap());
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${abs('/sitemap.xml')}\n`);
write('llms.txt', llmsTxt());
write('llms-full.txt', llmsFull());
for (const f of ['styles.css', 'app.js']) fs.copyFileSync(path.join(ROOT, 'public', f), path.join(OUT, f));

const drafts = services.filter((s) => !isVerified(s)).length;
console.log(`Built ${services.length} guides (${drafts} drafts, noindex) + ${categories.length} categories into ${path.relative(process.cwd(), OUT) || '.'} for ${SITE_URL}`);
