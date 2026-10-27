// Unified B + A Platform Core Logic (Section I, II, IV)
let unifiedData = null;
let fullCatalog = [];
let displayedItems = [];
let currentModeFilter = 'all';
let currentCategoryFilter = 'all';
let currentSearchQuery = '';
let activeSkillDetail = null;
let activeTeardownSite = null;

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}

function copyText(txt, label) {
  if (navigator.clipboard) navigator.clipboard.writeText(txt);
  showToast(label || `Copied: ${txt}`);
}

function isLikelyUrl(input) {
  const s = input.trim();
  return /^https?:\/\//i.test(s) || (/^[a-z0-9-]+\.[a-z]{2,}(\/.*)?$/i.test(s) && !s.includes(' '));
}

async function initUnifiedApp() {
  if (window.__UNIFIED_DATA__) {
    unifiedData = window.__UNIFIED_DATA__;
  } else {
    const res = await fetch("/taste-skill/unified-data.json");
    unifiedData = await res.json();
  }
  fullCatalog = unifiedData.catalog || [];
  displayedItems = [...fullCatalog];
  renderGrid();
  renderTeardownVault();
  if (typeof renderProWorkbench === 'function') renderProWorkbench(0);
  renderPricingMatrix();
  setupOmniListeners();
}

function setupOmniListeners() {
  const omniInput = document.getElementById('omniInput');
  const omniModeBadge = document.getElementById('omniModeBadge');
  const omniSubmitBtn = document.getElementById('omniSubmitBtn');
  const omniBtnText = document.getElementById('omniBtnText');
  if (!omniInput) return;

  omniInput.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    if (isLikelyUrl(val)) {
      omniModeBadge.textContent = 'LIVE URL EXTRACTOR';
      omniModeBadge.classList.add('url-mode');
      omniSubmitBtn.classList.add('extract-active');
      omniBtnText.textContent = 'Extract Taste Skill';
    } else {
      omniModeBadge.textContent = 'SEMANTIC ROUTER';
      omniModeBadge.classList.remove('url-mode');
      omniSubmitBtn.classList.remove('extract-active');
      omniBtnText.textContent = 'Route Skill';
      performSearch(val);
    }
  });
  omniInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleOmniAction();
  });
}

async function handleOmniAction() {
  const omniInput = document.getElementById('omniInput');
  const omniBtnText = document.getElementById('omniBtnText');
  const val = omniInput.value.trim();
  if (!val) return performSearch('');
  if (isLikelyUrl(val)) {
    const slugGuess = val.replace(/^https?:\/\//i, '').replace(/^www\./i, '').split(/[/.]/)[0].toLowerCase();
    if (unifiedData?.detailsBySlug?.[slugGuess]) {
      openInspector(slugGuess);
      showToast(`Loaded warm-cached ${unifiedData.detailsBySlug[slugGuess].name} SKILL.md!`);
      return;
    }
    omniBtnText.textContent = 'Extracting DOM...';
    try {
      const res = await fetch(`/api/extract?url=${encodeURIComponent(val)}`);
      const data = await res.json();
      if (data.skill) {
        unifiedData.detailsBySlug[data.skill.slug] = data.skill;
        openInspector(data.skill.slug);
        showToast(`Extracted ${data.skill.name} SKILL.md!`);
      }
    } catch {
      showToast('Static preview mode: choose any of the 30 flagship skills below.');
    } finally {
      omniBtnText.textContent = 'Extract Taste Skill';
    }
  } else {
    performSearch(val);
  }
}

function setQuery(q) {
  const omniInput = document.getElementById('omniInput');
  omniInput.value = q;
  document.querySelectorAll('.prompt-chip').forEach((btn) => {
    btn.classList.toggle('active', btn.textContent.replace(/"/g, '') === q);
  });
  performSearch(q);
}

function setModeFilter(mode) {
  currentModeFilter = mode;
  document.querySelectorAll('#modeFilters .filter-btn').forEach((b) => {
    b.classList.toggle('active', b.dataset.mode === mode);
  });
  renderGrid();
}

function setCategoryFilter(cat) {
  currentCategoryFilter = cat;
  document.querySelectorAll('#catFilters .filter-btn').forEach((b) => {
    b.classList.toggle('active', b.dataset.cat === cat);
  });
  renderGrid();
}

async function performSearch(query) {
  currentSearchQuery = query.trim();
  if (!currentSearchQuery) {
    displayedItems = [...fullCatalog];
    return renderGrid();
  }
  try {
    if (!window.__UNIFIED_DATA__) {
      const res = await fetch(`/api/search?q=${encodeURIComponent(currentSearchQuery)}&limit=30`);
      const data = await res.json();
      displayedItems = data.items || [];
      return renderGrid();
    }
  } catch {}
  const terms = currentSearchQuery.toLowerCase().split(/\s+/);
  displayedItems = fullCatalog
    .map((item) => {
      const hay = `${item.name} ${item.archetype} ${item.vibe} ${(item.tags || []).join(' ')} ${item.mode}`.toLowerCase();
      let score = 0;
      const matchedReasons = [];
      terms.forEach((t) => {
        if (hay.includes(t)) {
          score += 35;
          matchedReasons.push(`matched "${t}"`);
        }
      });
      return { ...item, score, matchedReasons: matchedReasons.slice(0, 3) };
    })
    .filter((i) => i.score > 0)
    .sort((a, b) => b.score - a.score);
  renderGrid();
}

function renderGrid() {
  const grid = document.getElementById('cardsGrid');
  if (!grid) return;
  const filtered = displayedItems.filter((item) => {
    if (currentModeFilter !== 'all' && item.mode !== currentModeFilter) return false;
    if (currentCategoryFilter !== 'all' && item.category !== currentCategoryFilter) return false;
    return true;
  });
  document.getElementById('resultsCounter').textContent = currentSearchQuery
    ? `Semantic Router: ${filtered.length} ranked matches for "${currentSearchQuery}"`
    : `Showing ${filtered.length} of ${fullCatalog.length} live-extracted flagship skills`;

  grid.innerHTML = filtered.map((item) => {
    const c = item.colors || { canvas: '#08090A', surface: '#111215', text: '#F7F8F8', muted: '#8A8F98', accent: '#5E6AD2', border: 'rgba(255,255,255,0.08)' };
    const f = item.fonts || { heading: 'Inter', mono: 'JetBrains Mono' };
    const m = item.metrics || { h1Size: '56px', buttonRadius: '8px', borderStyle: '1px solid' };
    const swatches = [
      { role: 'Canvas', val: c.canvas },
      { role: 'Surface', val: c.surface },
      { role: 'Text', val: c.text },
      { role: 'Accent', val: c.accent },
      { role: 'Border', val: c.border }
    ];
    return `
      <article class="taste-card" onclick="openInspector('${item.slug}')">
        <div>
          <div class="card-top">
            <div class="site-identity">
              <div class="site-swatch-avatar" style="background:${c.canvas};color:${c.text};border-color:${c.accent};">${item.name.charAt(0)}</div>
              <div class="site-title-wrap">
                <h3>${item.name}</h3>
                <span class="site-domain">${item.domain}</span>
              </div>
            </div>
            <div class="card-badges">
              ${currentSearchQuery && item.score ? `<span class="score-pill">Score ${item.score}</span>` : ''}
              <span class="mode-pill ${item.mode}">${item.mode}</span>
            </div>
          </div>
          <div class="archetype-title">${item.archetype}</div>
          <p class="vibe-desc">${item.vibe || item.summary}</p>
          <div class="palette-strip" onclick="event.stopPropagation()">
            ${swatches.map((s) => `<div class="swatch-box" onclick="copyText('${s.val}','Copied ${s.role}: ${s.val}')"><div class="swatch-color" style="background:${s.val};"></div><span class="swatch-label">${s.val}</span></div>`).join('')}
          </div>
          <div class="specs-grid">
            <div class="spec-item"><span class="spec-key">Fonts</span><span class="spec-val">${f.heading} + ${f.mono}</span></div>
            <div class="spec-item"><span class="spec-key">Hero H1</span><span class="spec-val">${m.h1Size}</span></div>
            <div class="spec-item"><span class="spec-key">CTA Radius</span><span class="spec-val">${m.buttonRadius}</span></div>
            <div class="spec-item"><span class="spec-key">Hairline</span><span class="spec-val">${m.borderStyle}</span></div>
          </div>
        </div>
        <div class="card-footer">
          <code class="cli-cmd-mini" onclick="event.stopPropagation();copyText('npx github:WuDao0123/taste-skill add ${item.slug}')">$ npx github:WuDao0123/taste-skill add ${item.slug}</code>
          <div style="display:flex;gap:8px;align-items:center;"><a href="/taste-skill/taste/${item.slug}/" onclick="event.stopPropagation()" style="color:#A5B4FC;font-size:11px;font-family:var(--font-mono);text-decoration:none;">pSEO Page &nearr;</a><button class="inspect-btn">Inspect &rarr;</button></div>
        </div>
      </article>`;
  }).join('');
}

// Section II: Open-Source $10k+ MRR Teardown Vault
function renderTeardownVault() {
  const container = document.getElementById('vaultGrid');
  if (!container || !unifiedData?.teardownVault) return;
  const sites = unifiedData.teardownVault.sites || [];
  container.innerHTML = sites.map((s) => {
    const st = s.seoStats || {};
    const topFam = (st.topFamilies && st.topFamilies[0]) ? st.topFamilies[0].pattern : '/[root-landing-slug]';
    const llmsBadge = st.llmsTxtFound
      ? `<span style="color:#34D399;font-family:var(--font-mono);font-size:11px;">✓ /llms.txt (${(st.llmsTxtLength/1024).toFixed(1)}KB)</span>`
      : `<span style="color:var(--text-dim);font-family:var(--font-mono);font-size:11px;">No /llms.txt</span>`;
    return `
      <article class="vault-card" onclick="openTeardownModal('${s.slug}')">
        <div>
          <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-bottom:10px;">
            <div>
              <h3 style="font-size:16.5px;font-weight:600;color:#fff;">${s.name} <span style="font-family:var(--font-mono);font-size:11.5px;color:var(--text-muted);font-weight:400;">(${s.domain})</span></h3>
              <span style="font-size:11.5px;color:#A5B4FC;">${s.category} · Disclosed ${s.disclosureDate}</span>
            </div>
            <span class="mrr-pill">${s.disclosedRevenue}</span>
          </div>
          <p style="font-size:12.5px;color:var(--text-secondary);margin-bottom:12px;line-height:1.45;">
            <strong>Wedge:</strong> ${s.incumbentWedge}
          </p>
          <div class="vault-metrics-bar">
            <div><div class="vault-stat-num">${(st.totalUrlsDiscovered || 0).toLocaleString()}</div><div class="vault-stat-lbl">Sitemap URLs</div></div>
            <div><div class="vault-stat-num" style="color:#A5B4FC;">${st.pseoSharePct ?? 0}%</div><div class="vault-stat-lbl">pSEO Share</div></div>
            <div><div class="vault-stat-num" style="font-size:11.5px;">${topFam.slice(0, 18)}</div><div class="vault-stat-lbl">Top Route</div></div>
          </div>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;padding-top:10px;border-top:1px solid var(--border-subtle);font-size:11.5px;">
          ${llmsBadge}
          <div style="display:flex;align-items:center;gap:10px;">
            <a href="${s.primarySourceUrl}" target="_blank" onclick="event.stopPropagation()" style="color:#93C5FD;text-decoration:none;font-family:var(--font-mono);">Verified Source &nearr;</a>
            <a href="/taste-skill/teardowns/${s.slug}/" onclick="event.stopPropagation()" style="color:#6EE7B7;font-size:11px;font-family:var(--font-mono);text-decoration:none;">Full pSEO Page &nearr;</a><button class="inspect-btn">Modal &rarr;</button>
          </div>
        </div>
      </article>`;
  }).join('');
}

// Section IV: Pricing Matrix ($0 / $29 / $69 Early-Bird / $169)
function renderPricingMatrix() {
  const grid = document.getElementById('pricingGrid');
  if (!grid || !unifiedData?.pricingConfig) return;
  grid.innerHTML = unifiedData.pricingConfig.tiers.map((t) => `
    <div class="pricing-card ${t.popular ? 'popular' : ''}">
      <div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
          <span class="badge-pro" style="${t.popular ? '' : 'background:rgba(255,255,255,0.08);color:var(--text-secondary);'}">${t.badge}</span>
          <span style="font-family:var(--font-mono);font-size:11px;color:var(--text-muted);">${t.id.toUpperCase()}</span>
        </div>
        <h3 style="font-size:18px;font-weight:600;color:#fff;">${t.name}</h3>
        <div class="price-tag-large">
          <span>$${t.price}</span>
          ${t.regularPrice ? `<span class="price-strike">$${t.regularPrice}</span>` : ''}
          <span style="font-size:12px;color:var(--text-muted);font-weight:400;">USD</span>
        </div>
        <div style="font-family:var(--font-mono);font-size:11.5px;color:#6EE7B7;margin-bottom:8px;">${t.billing}</div>
        <p style="font-size:12.5px;color:var(--text-muted);line-height:1.45;">${t.description}</p>
        ${t.anchorNote ? `<div class="anchor-callout">⚡ ${t.anchorNote}</div>` : ''}
        <ul class="tier-features">
          ${t.features.map((f) => `<li>${f}</li>`).join('')}
        </ul>
      </div>
      <button class="${t.popular ? 'pro-cta-btn' : 'action-btn primary'}" style="width:100%;padding:11px;font-size:13px;" onclick="openCheckoutModal('${t.id}')">
        ${t.cta} &rarr;
      </button>
    </div>
  `).join('');
}

window.addEventListener('DOMContentLoaded', initUnifiedApp);
