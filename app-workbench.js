// Section III (4-Tab Pro Skills Workbench) & All Interactive Modals
let currentWbTab = 0;
let selectedPseoIdx = 0;
let selectedAltIdx = 0;
let selectedLocale = 'en';
let cancelStep = 1;
let cancelReason = 'too_expensive';

function switchWbTab(idx) {
  currentWbTab = idx;
  document.querySelectorAll('.wb-tab').forEach((btn, i) => {
    btn.classList.toggle('active', i === idx);
  });
  renderProWorkbench(idx);
}

function renderProWorkbench(idx) {
  const left = document.getElementById('wbLeftPane');
  const right = document.getElementById('wbRightPane');
  const codeTitle = document.getElementById('wbCodeTitle');
  if (!left || !right || !unifiedData?.proShowcase) return;
  const ps = unifiedData.proShowcase;

  if (idx === 0) {
    const list = ps.pseo.benchmarks || [];
    const cur = list[selectedPseoIdx] || list[0] || {};
    codeTitle.textContent = '.cursor/skills/pseo-competitor-teardown/SKILL.md + Next.js Scaffold';
    right.textContent = (ps.pseo.scaffold?.pageTsx || '') + '\n\n' + (ps.pseo.skillMd || '');
    left.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:14px;">
        <div>
          <span class="badge-pro">SKILL 01 · PSEO REVERSE-ENGINEER</span>
          <h3 style="font-size:17px;font-weight:600;color:#fff;margin-top:4px;">Sitemap Cluster &amp; /llms.txt Blueprint Inspector</h3>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          ${list.map((b, i) => `<button class="filter-btn ${i===selectedPseoIdx?'active':''}" onclick="selectedPseoIdx=${i};renderProWorkbench(0)">${b.domain} (${b.totalUrlsDiscovered.toLocaleString()})</button>`).join('')}
        </div>
      </div>
      <div class="vault-metrics-bar" style="margin-bottom:14px;">
        <div><div class="vault-stat-num">${(cur.totalUrlsDiscovered||0).toLocaleString()}</div><div class="vault-stat-lbl">Total Sitemap URLs</div></div>
        <div><div class="vault-stat-num" style="color:#34D399;">${cur.pseoSharePct||0}%</div><div class="vault-stat-lbl">Programmatic Share</div></div>
        <div><div class="vault-stat-num" style="color:#A5B4FC;">${cur.llmsTxtFound ? `✓ ${(cur.llmsTxtLength/1024).toFixed(1)}KB` : 'Not Deployed'}</div><div class="vault-stat-lbl">/llms.txt Status</div></div>
      </div>
      <div class="panel-section">
        <h4><span>Extracted Route Families (${cur.domain})</span><span>Count &amp; Share</span></h4>
        ${(cur.routeFamilies || []).slice(0, 5).map((f) => `
          <div class="route-bar-row">
            <div class="route-bar-top">
              <code style="color:#E2E8F0;">${f.pattern}</code>
              <span style="color:#6EE7B7;">${f.count.toLocaleString()} URLs (${f.sharePct}%)</span>
            </div>
            <div class="route-bar-track"><div class="route-bar-fill" style="width:${Math.max(6, Math.min(100, f.sharePct))}%;"></div></div>
          </div>
        `).join('')}
      </div>`;
  } else if (idx === 1) {
    const bundles = ps.alternatives.bundles || [];
    const b = bundles[selectedAltIdx] || bundles[0] || {};
    const loc = b.locales?.[selectedLocale] || b.locales?.en || {};
    codeTitle.textContent = `.cursor/skills/x-alternative-pages/SKILL.md (${b.meta?.tasteSkillApplied?.skillName || 'taste-linear'})`;
    right.textContent = ps.alternatives.skillMd || '';
    left.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:12px;">
        <div style="display:flex;gap:6px;">
          ${bundles.map((item, i) => `<button class="filter-btn ${i===selectedAltIdx?'active':''}" onclick="selectedAltIdx=${i};renderProWorkbench(1)">${item.meta?.ourProduct?.name} vs ${item.meta?.competitorProduct?.name}</button>`).join('')}
        </div>
        <div style="display:flex;gap:4px;">
          ${['en','zh','ja','es'].map((l) => `<button class="filter-btn ${l===selectedLocale?'active':''}" onclick="selectedLocale='${l}';renderProWorkbench(1)">${l.toUpperCase()}</button>`).join('')}
        </div>
      </div>
      <div class="panel-section" style="margin-bottom:12px;">
        <div style="font-family:var(--font-mono);font-size:11px;color:#6EE7B7;margin-bottom:4px;">${loc.badgeText || ''} · Canonical: ${loc.canonicalPath || ''}</div>
        <h3 style="font-size:16px;font-weight:600;color:#fff;margin-bottom:4px;">${loc.heroH1 || ''}</h3>
        <p style="font-size:12px;color:var(--text-muted);">${loc.heroSubhead || ''}</p>
      </div>
      <div class="panel-section">
        <h4><span>Fact-Checked Comparison Matrix</span><span>Verified Date &amp; Source URL</span></h4>
        <table class="wb-table">
          <thead><tr><th>Dimension</th><th>${b.meta?.ourProduct?.name}</th><th>${b.meta?.competitorProduct?.name}</th><th>Verified</th></tr></thead>
          <tbody>
            ${(b.comparisonMatrix || []).slice(0, 5).map((r) => `
              <tr>
                <td style="font-weight:600;color:#fff;">${r.dimension}</td>
                <td style="color:#6EE7B7;">${String(r.ourValue).slice(0, 48)}</td>
                <td style="color:var(--text-muted);">${String(r.compValue).slice(0, 48)}</td>
                <td style="font-family:var(--font-mono);font-size:10.5px;color:#A5B4FC;">${r.verifiedAt}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>`;
  } else if (idx === 2) {
    codeTitle.textContent = 'templates/CancelRetentionFlow.tsx + Multi-Provider Webhooks';
    right.textContent = (ps.pricing.cancelRetentionCode || '') + '\n\n' + (ps.pricing.webhookCode || '');
    const offerMap = {
      too_expensive: { title: '40% Off for 3 Months ($41/mo instead of $69)', desc: 'Keep all Pro workflows while reducing your monthly burn.' },
      project_paused: { title: 'Pause Subscription for 60 Days ($0 billed)', desc: 'Freeze billing today and keep all your custom SKILL.md configs intact.' },
      missing_feature: { title: 'Switch to Free Lite Plan + Priority Roadmap Vote', desc: 'Downgrade to $0/mo without losing historical teardown data.' }
    };
    const offer = offerMap[cancelReason] || offerMap.too_expensive;
    left.innerHTML = `
      <div style="margin-bottom:12px;">
        <span class="badge-pro">SKILL 03 · ETHICAL 3-STEP CANCEL SALVAGE FLOW</span>
        <h3 style="font-size:16.5px;font-weight:600;color:#fff;margin-top:4px;">FTC Click-to-Cancel Compliant Retention Simulator</h3>
      </div>
      <div class="panel-section" style="margin-bottom:12px;">
        <div style="display:flex;gap:8px;margin-bottom:12px;">
          ${[1,2,3].map((s) => `<button class="filter-btn ${cancelStep===s?'active':''}" onclick="cancelStep=${s};renderProWorkbench(2)">Step ${s}: ${s===1?'Reason':s===2?'Tailored Salvage':'1-Click Confirm'}</button>`).join('')}
        </div>
        ${cancelStep === 1 ? `
          <p style="font-size:12.5px;color:var(--text-secondary);margin-bottom:10px;">Why are you considering cancelling today?</p>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <label style="padding:9px;border:1px solid var(--border-strong);border-radius:8px;cursor:pointer;"><input type="radio" name="cr" ${cancelReason==='too_expensive'?'checked':''} onchange="cancelReason='too_expensive';cancelStep=2;renderProWorkbench(2)"/> Too expensive for my current stage</label>
            <label style="padding:9px;border:1px solid var(--border-strong);border-radius:8px;cursor:pointer;"><input type="radio" name="cr" ${cancelReason==='project_paused'?'checked':''} onchange="cancelReason='project_paused';cancelStep=2;renderProWorkbench(2)"/> My project is temporarily paused</label>
            <label style="padding:9px;border:1px solid var(--border-strong);border-radius:8px;cursor:pointer;"><input type="radio" name="cr" ${cancelReason==='missing_feature'?'checked':''} onchange="cancelReason='missing_feature';cancelStep=2;renderProWorkbench(2)"/> Missing a specific integration</label>
          </div>
        ` : cancelStep === 2 ? `
          <div style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.35);border-radius:10px;padding:14px;margin-bottom:12px;">
            <div style="font-family:var(--font-mono);font-size:11px;color:#34D399;">TAILORED RETENTION OFFER</div>
            <h4 style="font-size:15px;color:#fff;margin:4px 0;">${offer.title}</h4>
            <p style="font-size:12px;color:var(--text-secondary);">${offer.desc}</p>
          </div>
          <div style="display:flex;gap:10px;">
            <button class="pro-cta-btn" onclick="showToast('Salvage Offer Applied! Churn prevented.')">Accept Salvage Offer</button>
            <button class="action-btn" onclick="cancelStep=3;renderProWorkbench(2)">No thanks, continue to cancel &rarr;</button>
          </div>
        ` : `
          <p style="font-size:12.5px;color:var(--text-secondary);margin-bottom:12px;">Zero dark patterns: 1-click immediate cancellation below. Your access remains active until the end of the billing period.</p>
          <button class="action-btn primary" style="background:#EF4444;color:#fff;border:none;" onclick="showToast('Subscription cancelled cleanly in 1 click.')">Confirm Immediate Cancellation</button>
        `}
      </div>
      <div class="panel-section">
        <h4><span>Live-Scraped Competitor Pricing Signals</span><span>6 SaaS Benchmarks</span></h4>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;font-size:11.5px;">
          ${(ps.pricing.snapshots || []).slice(0, 6).map((s) => `<div style="padding:8px;background:rgba(255,255,255,0.03);border-radius:6px;border:1px solid var(--border-subtle);"><strong>${s.meta?.slug}</strong><br/><span style="color:#6EE7B7;font-family:var(--font-mono);">${(s.allPriceMentions||[]).slice(0,3).join(', ') || 'Custom'}</span></div>`).join('')}
        </div>
      </div>`;
  } else {
    const pv = ps.launchKit.passedValidation || {};
    const checks = [...(pv.asoValidation?.appleAppStore?.checks || []), ...(pv.platformCopyValidation?.checks || [])];
    codeTitle.textContent = '.cursor/skills/launch-kit/SKILL.md + Launch Report';
    right.textContent = (ps.launchKit.passedReportMd || '') + '\n\n' + (ps.launchKit.skillMd || '');
    left.innerHTML = `
      <div style="margin-bottom:12px;">
        <span class="badge-pro">SKILL 04 · ASO 100-BYTE &amp; LAUNCH KIT VALIDATOR</span>
        <h3 style="font-size:16.5px;font-weight:600;color:#fff;margin-top:4px;">App Store Connect UTF-8 Byte &amp; Show HN Anti-Buzzword Audit</h3>
      </div>
      <div class="panel-section">
        <h4><span>Automated Pre-Flight Checks (${pv.productName || 'TasteSkill'})</span><span style="color:#34D399;">ALL 15 CHECKS PASSED</span></h4>
        <table class="wb-table">
          <thead><tr><th>Check / Platform Rule</th><th>Status</th><th>Measured Value</th></tr></thead>
          <tbody>
            ${checks.slice(0, 8).map((c) => `
              <tr>
                <td style="color:#fff;">${c.name || `${c.platform}: ${c.rule}`}</td>
                <td><span style="color:#34D399;font-family:var(--font-mono);font-weight:600;">✓ ${c.status}</span></td>
                <td style="font-family:var(--font-mono);font-size:11px;color:var(--text-secondary);">${c.detail}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>`;
  }
}

// Skill Inspector Modal (Section I)
async function openInspector(slug) {
  let detail = unifiedData?.detailsBySlug?.[slug];
  if (!detail) {
    const res = await fetch(`/api/skill/${slug}`);
    detail = await res.json();
  }
  if (!detail || detail.error) return showToast('Skill not found');
  activeSkillDetail = detail;
  const c = detail.colors || {};
  const m = detail.metrics || {};
  document.getElementById('modalAvatar').textContent = detail.name.charAt(0);
  document.getElementById('modalAvatar').style.background = c.canvas || '#08090A';
  document.getElementById('modalTitle').textContent = `${detail.name} (${detail.domain})`;
  document.getElementById('modalArchetype').textContent = `${detail.archetype} · ${detail.category}`;
  document.getElementById('btnCopyCli').textContent = `$ npx taste-skill add ${detail.slug}`;
  document.getElementById('modalSkillPath').textContent = `.cursor/skills/taste-${detail.slug}/SKILL.md`;
  document.getElementById('modalSkillMarkdown').textContent = detail.skillMarkdown || '';
  document.getElementById('upsellSiteName').textContent = detail.name;

  const tokensObj = detail.profile?.tokens || {};
  const tokenRows = Object.entries(tokensObj).slice(0, 7).map(([role, t]) => `
    <div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-size:12px;">
      <strong>${role}</strong>
      <code style="font-family:var(--font-mono);color:#A5B4FC;">${t.value.slice(0, 24)} · ${t.tw.slice(0, 24)}</code>
    </div>`).join('');

  document.getElementById('inspectorLeft').innerHTML = `
    <div class="panel-section">
      <h4><span>Live Surface Synthesis</span><span style="color:#6EE7B7;">COMPUTED DOM TOKENS</span></h4>
      <div class="live-preview-stage" style="background:${c.canvas};color:${c.text};border:1px solid ${c.border};">
        <div style="background:${c.surface};border:1px solid ${c.border};border-radius:10px;padding:16px;">
          <h2 style="font-size:21px;color:${c.text};margin-bottom:6px;">${detail.name} Aesthetic System</h2>
          <p style="font-size:12.5px;color:${c.muted};margin-bottom:12px;">Canvas ${c.canvas} · Surface ${c.surface} · H1 ${m.h1Size}</p>
          <button style="background:${c.accent};color:#fff;border:none;border-radius:6px;padding:7px 14px;font-size:12px;font-weight:600;">Primary CTA (${m.buttonRadius})</button>
        </div>
      </div>
    </div>
    <div class="panel-section"><h4><span>Verified Tokens</span><span>Tailwind Mapping</span></h4>${tokenRows}</div>
    <div class="panel-section"><h4><span>Strict Anti-Patterns</span><span style="color:#FCA5A5;">FORBIDDEN</span></h4>
      <ul class="anti-pattern-list">${(detail.profile?.antiPatterns || []).map((a) => `<li>${a}</li>`).join('')}</ul>
    </div>`;
  document.getElementById('inspectorModal').classList.add('open');
}

function closeInspector() { document.getElementById('inspectorModal').classList.remove('open'); }
function copyCurrentSkill() { if (activeSkillDetail) copyText(activeSkillDetail.skillMarkdown, `Copied ${activeSkillDetail.name} SKILL.md!`); }
function copyCurrentCli() { if (activeSkillDetail) copyText(`npx taste-skill add ${activeSkillDetail.slug}`); }
function downloadCurrentSkill() {
  if (!activeSkillDetail) return;
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([activeSkillDetail.skillMarkdown], { type: 'text/markdown' }));
  a.download = `taste-${activeSkillDetail.slug}-SKILL.md`;
  a.click();
}

// Teardown Reader Modal (Section II)
function openTeardownModal(slug) {
  const site = (unifiedData?.teardownVault?.sites || []).find((s) => s.slug === slug);
  if (!site) return;
  activeTeardownSite = site;
  document.getElementById('tdModalTitle').textContent = `${site.name} (${site.domain}) — ${site.disclosedRevenue}`;
  document.getElementById('tdModalSub').textContent = `Verified Source (${site.disclosureDate}) · ${site.category}`;
  document.getElementById('tdModalSourceBtn').onclick = () => window.open(site.primarySourceUrl, '_blank');
  document.getElementById('tdMarkdownPre').textContent = site.markdownReport || '';

  const fams = site.allFamilies || site.seoStats?.topFamilies || [];
  document.getElementById('tdLeftPane').innerHTML = `
    <div class="panel-section">
      <h4><span>Programmatic Route Architecture</span><span>${(site.seoStats?.totalUrlsDiscovered||0).toLocaleString()} URLs (${site.seoStats?.pseoSharePct||0}% pSEO)</span></h4>
      ${fams.slice(0, 6).map((f) => `
        <div class="route-bar-row">
          <div class="route-bar-top"><code style="color:#fff;">${f.pattern}</code><span style="color:#34D399;">${f.count} (${f.sharePct}%)</span></div>
          <div class="route-bar-track"><div class="route-bar-fill" style="width:${Math.max(8, Math.min(100, f.sharePct))}%;"></div></div>
        </div>`).join('')}
    </div>
    <div class="panel-section">
      <h4><span>Hero Copy &amp; Wedge Breakdown</span><span>CONVERSION HOOK</span></h4>
      <p style="font-size:12.5px;color:#fff;margin-bottom:6px;"><strong>H1:</strong> "${site.heroCopyBreakdown?.h1 || ''}"</p>
      <p style="font-size:12px;color:var(--text-muted);">${site.heroCopyBreakdown?.psychologicalHook || ''}</p>
    </div>
    <div class="panel-section">
      <h4><span>1-Week Replicable Indie Actions</span><span style="color:#6EE7B7;">PLAYBOOK</span></h4>
      <ul style="padding-left:16px;font-size:12px;color:var(--text-secondary);display:flex;flex-direction:column;gap:6px;">
        ${(site.replicableActions || []).map((a) => `<li>${a}</li>`).join('')}
      </ul>
    </div>`;
  document.getElementById('teardownModal').classList.add('open');
}
function closeTeardownModal() { document.getElementById('teardownModal').classList.remove('open'); }

// Checkout Preview Modal (Section IV)
function openCheckoutModal(tierId) {
  if (tierId === 'community') {
    copyText('npx taste-skill find "dark precision saas"', 'Copied Free CLI command!');
    return;
  }
  const cfg = window.CHECKOUT_CONFIG || {};
  const tier = (unifiedData?.pricingConfig?.tiers || []).find((t) => t.id === tierId) || unifiedData.pricingConfig.tiers[2];
  document.getElementById('coTierName').textContent = `${tier.name} — ${tier.price} USD`;
  document.getElementById('coTierBilling').textContent = tier.billing;
  document.getElementById('coFeaturesList').innerHTML = tier.features.map((f) => `<li>${f}</li>`).join('');
  const polarUrl = tier.id === 'single' ? cfg.singleUrl : tier.id === 'team' ? cfg.teamUrl : cfg.proUrl;
  const creemUrl = tier.id === 'single' ? cfg.creemSingleUrl : tier.id === 'team' ? cfg.creemTeamUrl : cfg.creemProUrl;
  const polarBtn = document.getElementById('coPolarBtn');
  const creemBtn = document.getElementById('coCreemBtn');
  if (polarBtn) polarBtn.onclick = () => {
    if (polarUrl && !polarUrl.includes('taste-skill-')) window.open(polarUrl, '_blank');
    else copyText(polarUrl || 'https://polar.sh/checkout/taste-skill-pro-69', `Polar Checkout (${tier.price}): ${polarUrl}`);
  };
  if (creemBtn) creemBtn.onclick = () => {
    if (creemUrl && !creemUrl.includes('taste-skill-')) window.open(creemUrl, '_blank');
    else copyText(creemUrl || 'https://creem.io/checkout/taste-skill-pro-69', `Creem Checkout (${tier.price}): ${creemUrl}`);
  };
  document.getElementById('checkoutModal').classList.add('open');
}
function closeCheckoutModal() { document.getElementById('checkoutModal').classList.remove('open'); }
