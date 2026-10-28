/**
 * Live Checkout & Instant Early-Bird Order Configuration
 * Supports:
 * 1. Direct Polar.sh / Creem.io payment links (when isLive = true)
 * 2. Instant Self-Serve Early-Bird Order Modal (when isLive = false or as fallback)
 * 3. Creators & Affiliates 50% Revenue Share Tracking (?ref=<handle> stored in localStorage for 30 days)
 * 4. Personalized VIP / Founder Coupon Code Support (*VIP, *G1M, ?vip=<CODE>, ?coupon=<CODE>)
 *    — Unlocks $0 Free 30-Brand Starter Pack + 50% OFF Pro VIP Lock ($49 vs $99 Regular) with ZERO credit card required!
 */
window.CHECKOUT_CONFIG = {
  isLive: false,
  provider: "Polar.sh / Creem.io",
  singleUrl: "",
  proUrl: "",
  teamUrl: "",
  creemSingleUrl: "",
  creemProUrl: "",
  creemTeamUrl: "",
  orderEmail: "zongwu835@gmail.com",
  formsubmitUrl: "https://formsubmit.co/ajax/zongwu835@gmail.com",
  githubIssueUrl: "https://github.com/WuDao0123/taste-skill/issues/new",
  xDmUrl: "https://x.com/RunChengln"
};

window.CHECKOUT_TIERS = {
  single: {
    id: "single",
    name: "Single Growth Skill",
    price: 29,
    vipPrice: 19,
    regularPrice: 39,
    billing: "One-Time Payment · Lifetime Updates · 1 Seat",
    deliverable: "single-growth-skill-v1.0.0.zip (1 SKILL.md + 1 Local Node/Playwright Script + 4 Sample Blueprints)",
    features: [
      "Choose any 1 of the 4 Paid Growth & Revenue Skills:",
      "① pseo-competitor-teardown  ② x-alternative-pages",
      "③ pricing-paywall-retention ④ launch-kit",
      "Includes matching local Node.js / Playwright automation script (.mjs)",
      "Universal sync: Claude Code (.claude/skills), OpenAI Codex (AGENTS.md), Cursor (.mdc)"
    ]
  },
  pro: {
    id: "pro",
    name: "Growth & Revenue Pro Pack (Early-Bird)",
    price: 69,
    vipPrice: 49,
    regularPrice: 99,
    billing: "One-Time Payment · Save $30 Off Regular $99 (VIP Code locks $49 — 50% Off Regular $99)",
    deliverable: "growth-revenue-skills-pro-v1.0.0.zip (385 KB Full Bundle + Private GitHub Repo Invite)",
    features: [
      "All 4 Executable Growth & Revenue Agent SKILL.md Playbooks",
      "All 5 Local Node.js / Playwright Automation Scripts (0 paid API keys)",
      "All 22 Raw Competitor pSEO & Pricing JSON Blueprints ($10k–$422k MRR)",
      "4 Production Next.js / React / Tailwind Conversion Templates (.tsx)",
      "One-command sync to Claude Code, OpenAI Codex, Cursor & Windsurf"
    ]
  },
  team: {
    id: "team",
    name: "Team & Agency Commercial License",
    price: 169,
    vipPrice: 99,
    regularPrice: 299,
    billing: "One-Time Payment · Up to 5 Seats · Unlimited Client Projects",
    deliverable: "growth-revenue-skills-team-v1.0.0.zip (Full Agency Bundle + White-Label Rights + 5 GitHub Seats)",
    features: [
      "Everything in Growth & Revenue Pro Pack for up to 5 team members",
      "Unlimited commercial client project delivery & white-label rights",
      "Custom private team skill registry & CI/CD lint integration script",
      "Priority GitHub repo access & lifetime updates to teardown dataset"
    ]
  }
};

(function () {
  let activeOrderTier = "pro";
  let activePayMethod = "Card / Apple Pay via Polar.sh (GitHub Auto-Invite)";
  const REF_STORAGE_KEY = "ts_affiliate_ref";
  const REF_TS_KEY = "ts_affiliate_ref_ts";
  const VIP_STORAGE_KEY = "ts_vip_code";
  const VIP_TS_KEY = "ts_vip_code_ts";
  const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

  function sanitizeRefHandle(raw) {
    if (!raw || typeof raw !== "string") return "";
    return raw.trim().replace(/^@+/, "").replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 40);
  }

  window.normalizeVipCode = function (raw) {
    if (!raw || typeof raw !== "string") return "";
    return raw.trim().replace(/^@+/, "").replace(/[^a-zA-Z0-9_-]/g, "").toUpperCase().slice(0, 40);
  };

  window.isValidVipCode = function (code) {
    const norm = window.normalizeVipCode(code);
    if (!norm || norm.length < 4) return false;
    return norm.endsWith("VIP") || norm.endsWith("G1M") || norm.startsWith("RUN") || norm.includes("VIP") || norm.length >= 5;
  };

  window.getActiveVipCode = function () {
    try {
      const saved = localStorage.getItem(VIP_STORAGE_KEY);
      const ts = parseInt(localStorage.getItem(VIP_TS_KEY) || "0", 10);
      if (saved && (!ts || (Date.now() - ts) < THIRTY_DAYS_MS)) {
        return saved;
      }
    } catch (e) {}
    return "";
  };

  window.setActiveVipCode = function (rawCode) {
    const norm = window.normalizeVipCode(rawCode);
    if (!window.isValidVipCode(norm)) return "";
    try {
      localStorage.setItem(VIP_STORAGE_KEY, norm);
      localStorage.setItem(VIP_TS_KEY, String(Date.now()));
    } catch (e) {}
    renderTopVipBanner(norm);
    updateWorkbenchVipBox(norm);
    const modal = document.getElementById("ebInstantOrderModal");
    if (modal && modal.style.display !== "none") {
      window.selectOrderTier(activeOrderTier);
    }
    return norm;
  };

  window.clearActiveVipCode = function () {
    try {
      localStorage.removeItem(VIP_STORAGE_KEY);
      localStorage.removeItem(VIP_TS_KEY);
    } catch (e) {}
    const topBar = document.getElementById("tsVipActiveTopBanner");
    if (topBar) topBar.style.display = "none";
    updateWorkbenchVipBox("");
    const modal = document.getElementById("ebInstantOrderModal");
    if (modal && modal.style.display !== "none") {
      window.selectOrderTier(activeOrderTier);
    }
  };

  window.getActiveAffiliateRef = function () {
    try {
      const saved = localStorage.getItem(REF_STORAGE_KEY);
      const ts = parseInt(localStorage.getItem(REF_TS_KEY) || "0", 10);
      if (saved && (!ts || (Date.now() - ts) < THIRTY_DAYS_MS)) {
        return saved;
      }
    } catch (e) {}
    return "";
  };

  function renderTopAffiliateBanner(refHandle) {
    if (!refHandle || typeof document === "undefined") return;
    let bar = document.getElementById("tsAffiliateActiveBanner");
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "tsAffiliateActiveBanner";
      bar.style.cssText = [
        "background:linear-gradient(90deg,rgba(16,185,129,0.18),rgba(99,102,241,0.18))",
        "border-bottom:1px solid rgba(16,185,129,0.45)",
        "color:#ECFDF5",
        "font-family:\x27JetBrains Mono\x27,monospace",
        "font-size:12px",
        "padding:8px 16px",
        "text-align:center",
        "display:flex",
        "align-items:center",
        "justify-content:center",
        "gap:10px",
        "flex-wrap:wrap",
        "z-index:9990"
      ].join(";");
      if (document.body.firstChild) {
        document.body.insertBefore(bar, document.body.firstChild);
      } else {
        document.body.appendChild(bar);
      }
    }
    bar.innerHTML = [
      `<span style="background:#10B981;color:#04130D;font-weight:700;padding:2px 8px;border-radius:999px;font-size:11px;">PARTNER VIP</span>`,
      `<span>🎁 Referred by <strong>@${refHandle}</strong> — Early-Bird <strong>$69 Pro Bundle</strong> (Save $30 Off $99) + Priority GitHub Invite Active</span>`,
      `<button type="button" onclick="window.openCheckoutModal(\x27pro\x27)" style="background:rgba(16,185,129,0.22);border:1px solid #10B981;color:#6EE7B7;font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;font-weight:700;padding:3px 10px;border-radius:6px;cursor:pointer;">Claim Offer &rarr;</button>`
    ].join("");
  }

  function renderTopVipBanner(vipCode) {
    if (!vipCode || typeof document === "undefined" || !document.body) return;
    let bar = document.getElementById("tsVipActiveTopBanner");
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "tsVipActiveTopBanner";
      bar.style.cssText = [
        "background:linear-gradient(90deg,rgba(16,185,129,0.24),rgba(6,182,212,0.22),rgba(99,102,241,0.24))",
        "border-bottom:1px solid rgba(16,185,129,0.6)",
        "color:#ECFDF5",
        "font-family:\x27JetBrains Mono\x27,monospace",
        "font-size:12px",
        "padding:9px 16px",
        "text-align:center",
        "display:flex",
        "align-items:center",
        "justify-content:center",
        "gap:10px",
        "flex-wrap:wrap",
        "z-index:9995"
      ].join(";");
      if (document.body.firstChild) {
        document.body.insertBefore(bar, document.body.firstChild);
      } else {
        document.body.appendChild(bar);
      }
    }
    bar.style.display = "flex";
    bar.innerHTML = [
      `<span style="background:#10B981;color:#04130D;font-weight:800;padding:2px 9px;border-radius:999px;font-size:11px;">VIP FOUNDER PASS UNLOCKED</span>`,
      `<span>✨ Code <strong>${vipCode}</strong> Active: <strong>$0 Free 30-Brand Starter Pack</strong> + <strong>50% OFF Pro Bundle ($49 VIP Lock · No Credit Card Required)</strong></span>`,
      `<button type="button" onclick="window.openCheckoutModal(\x27pro\x27)" style="background:#10B981;border:none;color:#04130D;font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;font-weight:700;padding:4px 11px;border-radius:6px;cursor:pointer;">Claim VIP $0 Starter + $49 Pro &rarr;</button>`
    ].join("");
  }

  function injectWorkbenchVipBar() {
    if (typeof document === "undefined") return;
    const pricingSec = document.getElementById("pricing-section");
    if (!pricingSec || document.getElementById("tsVipWorkbenchBar")) return;

    const vipBox = document.createElement("div");
    vipBox.id = "tsVipWorkbenchBar";
    vipBox.style.cssText = [
      "background:linear-gradient(135deg,rgba(16,185,129,0.12),rgba(99,102,241,0.14))",
      "border:1px solid rgba(16,185,129,0.5)",
      "border-radius:14px",
      "padding:18px 22px",
      "margin-bottom:22px",
      "box-shadow:0 12px 32px rgba(0,0,0,0.4)"
    ].join(";");

    const currentVip = window.getActiveVipCode();
    vipBox.innerHTML = `
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:14px;">
        <div style="flex:1;min-width:260px;">
          <div style="display:inline-flex;align-items:center;gap:8px;font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;font-weight:700;color:#6EE7B7;background:rgba(16,185,129,0.16);border:1px solid rgba(16,185,129,0.4);padding:3px 9px;border-radius:999px;margin-bottom:6px;">
            🎟️ PERSONALIZED VIP CODE · ZERO CREDIT CARD REQUIRED
          </div>
          <div style="font-size:15px;font-weight:700;color:#fff;">Have a Personalized VIP Code (e.g. <code>&lt;HANDLE&gt;VIP</code> or <code>*G1M</code>)?</div>
          <div style="font-size:12.5px;color:#D1D5DB;margin-top:3px;">
            Enter your code below to instantly unlock the <strong>$0 Free 30-Brand SKILL.md Starter Pack + Full 27,360-URL pSEO Corpus</strong> and lock <strong>50% OFF Pro ($49 VIP Rate vs $99 Regular)</strong> — no signup or credit card required.
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
          <input id="tsWorkbenchVipInput" type="text" value="${currentVip}" placeholder="e.g. RUNCHENGLNVIP or LEAFVIP" style="min-width:220px;padding:10px 12px;border-radius:8px;border:1px solid rgba(16,185,129,0.45);background:#08090C;color:#fff;font-family:\x27JetBrains Mono\x27,monospace;font-size:12.5px;text-transform:uppercase;outline:none;" onkeydown="if(event.key===\x27Enter\x27){window.redeemWorkbenchVipCode();}" />
          <button type="button" onclick="window.redeemWorkbenchVipCode()" style="padding:10px 16px;border-radius:8px;border:none;background:linear-gradient(135deg,#10B981,#059669);color:#04130D;font-family:\x27JetBrains Mono\x27,monospace;font-size:12.5px;font-weight:700;cursor:pointer;white-space:nowrap;">
            Redeem VIP Code &rarr;
          </button>
        </div>
      </div>
      <div id="tsWorkbenchVipUnlockedPanel" style="display:${currentVip ? "block" : "none"};margin-top:14px;padding-top:14px;border-top:1px solid rgba(16,185,129,0.3);"></div>
    `;

    const treeBox = document.getElementById("proZipFileTreeBox");
    if (treeBox && treeBox.parentNode === pricingSec) {
      pricingSec.insertBefore(vipBox, treeBox);
    } else {
      pricingSec.insertBefore(vipBox, pricingSec.firstChild);
    }
    if (currentVip) {
      updateWorkbenchVipBox(currentVip);
    }
  }

  function updateWorkbenchVipBox(vipCode) {
    const input = document.getElementById("tsWorkbenchVipInput");
    if (input && vipCode && input.value !== vipCode) {
      input.value = vipCode;
    }
    const panel = document.getElementById("tsWorkbenchVipUnlockedPanel");
    if (!panel) return;
    if (!vipCode) {
      panel.style.display = "none";
      panel.innerHTML = "";
      return;
    }
    panel.style.display = "block";
    panel.innerHTML = `
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:12px;align-items:stretch;">
        <div style="background:#080A0F;border:1px solid rgba(16,185,129,0.4);border-radius:10px;padding:12px 14px;">
          <div style="font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;font-weight:700;color:#6EE7B7;margin-bottom:6px;">
            ✓ 1. $0 FREE STARTER PACK UNLOCKED (CODE: ${vipCode} · NO CARD)
          </div>
          <div style="font-size:12px;color:#D1D5DB;line-height:1.5;margin-bottom:8px;">
            Run our open-source CLI or grab the pure Markdown AI corpus &amp; 30 flagship <code>SKILL.md</code> files immediately:
          </div>
          <div style="font-family:\x27JetBrains Mono\x27,monospace;font-size:11.5px;background:#050608;color:#A7F3D0;padding:7px 9px;border-radius:6px;border:1px solid rgba(255,255,255,0.08);margin-bottom:8px;word-break:break-all;">
            npx --yes github:WuDao0123/taste-skill add linear
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;">
            <a href="/help-md/overview.md" target="_blank" style="color:#6EE7B7;text-decoration:underline;">📄 /help-md/overview.md</a>
            <a href="/help-md/pseo-teardown.md" target="_blank" style="color:#93C5FD;text-decoration:underline;">📊 /help-md/pseo-teardown.md</a>
            <a href="/llms-full.txt" target="_blank" style="color:#C4B5FD;text-decoration:underline;">🤖 /llms-full.txt (Full Corpus)</a>
          </div>
        </div>
        <div style="background:#080A0F;border:1px solid rgba(99,102,241,0.45);border-radius:10px;padding:12px 14px;display:flex;flex-direction:column;justify-content:space-between;">
          <div>
            <div style="font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;font-weight:700;color:#A5B4FC;margin-bottom:6px;">
              🎁 2. 50% OFF PRO VIP FOUNDER RATE ($49 USD vs $99 REGULAR)
            </div>
            <div style="font-size:12px;color:#D1D5DB;line-height:1.5;">
              Your VIP code <strong>${vipCode}</strong> pre-fills a <strong>$49 VIP Founder Lock</strong> (extra $20 off the $69 Early-Bird) for all 4 Growth Skills + 5 Playwright crawlers + 22 raw JSON blueprints + 4 Next.js templates.
            </div>
          </div>
          <div style="margin-top:10px;display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;">
            <span style="font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;color:#FDE047;">Zero auto-renewal · No card trap</span>
            <button type="button" onclick="window.openCheckoutModal(\x27pro\x27)" style="padding:7px 13px;border-radius:7px;border:none;background:#6366F1;color:#fff;font-family:\x27JetBrains Mono\x27,monospace;font-size:11.5px;font-weight:700;cursor:pointer;">
              Open VIP $49 Pro Claim Modal &rarr;
            </button>
          </div>
        </div>
      </div>
    `;
  }

  window.redeemWorkbenchVipCode = function () {
    const input = document.getElementById("tsWorkbenchVipInput");
    const raw = input ? input.value : "";
    const norm = window.normalizeVipCode(raw);
    if (!window.isValidVipCode(norm)) {
      if (input) input.style.borderColor = "#EF4444";
      return;
    }
    if (input) input.style.borderColor = "#10B981";
    window.setActiveVipCode(norm);
  };

  window.redeemModalVipCode = function () {
    const input = document.getElementById("ebVipCodeInput");
    const raw = input ? input.value : "";
    const norm = window.normalizeVipCode(raw);
    if (!window.isValidVipCode(norm)) {
      if (input) input.style.borderColor = "#EF4444";
      return;
    }
    if (input) input.style.borderColor = "#10B981";
    window.setActiveVipCode(norm);
  };

  function captureAffiliateRefAndVipOnLoad() {
    try {
      const params = new URLSearchParams(window.location.search);
      const incomingRef = sanitizeRefHandle(params.get("ref") || params.get("via") || params.get("partner"));
      if (incomingRef) {
        localStorage.setItem(REF_STORAGE_KEY, incomingRef);
        localStorage.setItem(REF_TS_KEY, String(Date.now()));
      }
      const incomingVip = window.normalizeVipCode(params.get("vip") || params.get("coupon") || params.get("code") || "");
      if (incomingVip && window.isValidVipCode(incomingVip)) {
        localStorage.setItem(VIP_STORAGE_KEY, incomingVip);
        localStorage.setItem(VIP_TS_KEY, String(Date.now()));
      }

      const activeVip = window.getActiveVipCode();
      const activeRef = window.getActiveAffiliateRef();

      const onReady = function () {
        injectWorkbenchVipBar();
        if (activeVip) {
          renderTopVipBanner(activeVip);
        } else if (activeRef) {
          renderTopAffiliateBanner(activeRef);
        }
      };

      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", onReady);
      } else {
        onReady();
      }
    } catch (e) {}
  }

  captureAffiliateRefAndVipOnLoad();

  // Creators & Affiliates 50% Partner Link Generator (on Main Page)
  window.generateAffiliatePartnerLink = function () {
    const input = document.getElementById("affiliateHandleInput");
    const outInput = document.getElementById("affiliateLinkOutput");
    const statusEl = document.getElementById("affiliateGenStatus");
    const handle = sanitizeRefHandle(input ? input.value : "");
    if (!handle) {
      if (statusEl) {
        statusEl.style.color = "#FCA5A5";
        statusEl.textContent = "Please enter your X/Twitter or GitHub handle first (e.g. levelsio).";
      }
      return;
    }
    const baseUrl = "https://taste-skill.pages.dev/";
    const fullUrl = `${baseUrl}?ref=${encodeURIComponent(handle)}`;
    if (outInput) {
      outInput.value = fullUrl;
    }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullUrl).catch(() => {});
    }
    if (statusEl) {
      statusEl.style.color = "#6EE7B7";
      statusEl.innerHTML = `✓ Copied <strong>${fullUrl}</strong>! Anyone visiting via this link gets tracked for 30 days — you earn <strong>50% ($34.50 per $69 Pro sale / $84.50 per $169 Team sale)</strong>.`;
    }
  };

  function ensureOrderModalDom() {
    let modal = document.getElementById("ebInstantOrderModal");
    if (modal) return modal;

    modal = document.createElement("div");
    modal.id = "ebInstantOrderModal";
    modal.style.cssText = [
      "position:fixed",
      "inset:0",
      "z-index:9999",
      "background:rgba(4,5,8,0.84)",
      "backdrop-filter:blur(12px)",
      "display:none",
      "align-items:center",
      "justify-content:center",
      "padding:16px",
      "font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif"
    ].join(";");

    modal.innerHTML = `
      <div style="background:#0E1015;border:1px solid rgba(99,102,241,0.45);border-radius:16px;max-width:660px;width:100%;max-height:92vh;overflow-y:auto;padding:26px 28px;color:#F3F4F6;box-shadow:0 24px 64px rgba(0,0,0,0.75);position:relative;">
        <button type="button" onclick="window.closeCheckoutModal()" aria-label="Close" style="position:absolute;top:18px;right:18px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);color:#9CA3AF;width:32px;height:32px;border-radius:8px;cursor:pointer;font-size:16px;line-height:1;">&times;</button>

        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px;">
          <div style="display:inline-flex;align-items:center;gap:8px;font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;color:#6EE7B7;background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.35);padding:4px 10px;border-radius:999px;">
            <span>⚡ INSTANT EARLY-BIRD ORDER &amp; REPO INVITE</span>
          </div>
          <div id="ebPartnerRefBadge" style="display:none;font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;color:#FDE047;background:rgba(234,179,8,0.14);border:1px solid rgba(234,179,8,0.4);padding:4px 10px;border-radius:999px;"></div>
          <div id="ebVipCodeBadge" style="display:none;font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;color:#6EE7B7;background:rgba(16,185,129,0.2);border:1px solid #10B981;padding:4px 10px;border-radius:999px;font-weight:700;"></div>
        </div>

        <h3 id="ebModalHeading" style="font-size:21px;font-weight:700;margin:0 0 4px 0;color:#fff;letter-spacing:-0.02em;"></h3>
        <div id="ebModalBilling" style="font-family:\x27JetBrains Mono\x27,monospace;font-size:12px;color:#A5B4FC;margin-bottom:14px;"></div>

        <!-- Personalized VIP Code Input inside Modal -->
        <div style="background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.35);border-radius:10px;padding:10px 12px;margin-bottom:14px;">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;">
            <label for="ebVipCodeInput" style="font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;color:#6EE7B7;font-weight:700;">
              🎟️ VIP / Founder Code (*VIP or *G1M — Unlocks $0 Starter + 50% OFF Pro, No Card):
            </label>
            <div style="display:flex;align-items:center;gap:6px;">
              <input id="ebVipCodeInput" type="text" placeholder="e.g. RUNCHENGLNVIP" style="padding:6px 10px;border-radius:6px;border:1px solid rgba(16,185,129,0.45);background:#08090C;color:#fff;font-family:\x27JetBrains Mono\x27,monospace;font-size:11.5px;text-transform:uppercase;width:165px;outline:none;" onkeydown="if(event.key===\x27Enter\x27){window.redeemModalVipCode();}" />
              <button type="button" onclick="window.redeemModalVipCode()" style="padding:6px 11px;border-radius:6px;border:none;background:#10B981;color:#04130D;font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;font-weight:700;cursor:pointer;">Apply VIP</button>
            </div>
          </div>
          <div id="ebVipInstantStarterLinks" style="display:none;margin-top:8px;padding-top:8px;border-top:1px dashed rgba(16,185,129,0.3);font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;color:#D1D5DB;line-height:1.5;">
            ✓ <strong>$0 Free Starter Pack Unlocked (Zero Card Required):</strong> Run <code>npx github:WuDao0123/taste-skill add linear</code> or view <a href="/help-md/overview.md" target="_blank" style="color:#6EE7B7;">/help-md/overview.md</a> · <a href="/help-md/pseo-teardown.md" target="_blank" style="color:#93C5FD;">/help-md/pseo-teardown.md</a> · <a href="/llms-full.txt" target="_blank" style="color:#C4B5FD;">/llms-full.txt</a>
          </div>
        </div>

        <!-- Tier Switcher Pills -->
        <div style="margin-bottom:14px;">
          <div style="font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;color:#9CA3AF;text-transform:uppercase;margin-bottom:6px;">1. Select License Tier</div>
          <div id="ebTierPills" style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
            <button type="button" data-tier="single" onclick="window.selectOrderTier(\x27single\x27)" style="padding:9px 8px;border-radius:8px;border:1px solid rgba(255,255,255,0.12);background:#161920;color:#E5E7EB;font-family:\x27JetBrains Mono\x27,monospace;font-size:11.5px;cursor:pointer;text-align:center;">Single · $29</button>
            <button type="button" data-tier="pro" onclick="window.selectOrderTier(\x27pro\x27)" style="padding:9px 8px;border-radius:8px;border:1px solid #10B981;background:rgba(16,185,129,0.15);color:#6EE7B7;font-family:\x27JetBrains Mono\x27,monospace;font-size:11.5px;font-weight:700;cursor:pointer;text-align:center;">★ Pro Pack · $69</button>
            <button type="button" data-tier="team" onclick="window.selectOrderTier(\x27team\x27)" style="padding:9px 8px;border-radius:8px;border:1px solid rgba(255,255,255,0.12);background:#161920;color:#E5E7EB;font-family:\x27JetBrains Mono\x27,monospace;font-size:11.5px;cursor:pointer;text-align:center;">Team (5x) · $169</button>
          </div>
        </div>

        <!-- Deliverable & Exact ZIP File Tree Preview -->
        <div style="background:#14171F;border:1px solid rgba(255,255,255,0.09);border-radius:10px;padding:12px 14px;margin-bottom:14px;">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-bottom:6px;">
            <span style="font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;color:#10B981;text-transform:uppercase;">What You Receive Immediately After Payment:</span>
            <span style="font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;color:#FDE047;background:rgba(234,179,8,0.12);border:1px solid rgba(234,179,8,0.3);padding:2px 7px;border-radius:4px;">Saves ~16 hrs of engineering + $129/mo in SEO tool subscriptions</span>
          </div>
          <div id="ebDeliverableCode" style="font-family:\x27JetBrains Mono\x27,monospace;font-size:12px;color:#fff;background:rgba(0,0,0,0.4);padding:7px 10px;border-radius:6px;margin-bottom:10px;word-break:break-word;border:1px solid rgba(255,255,255,0.07);"></div>
          <ul id="ebFeatureList" style="margin:0 0 12px 0;padding-left:18px;font-size:12px;color:#D1D5DB;line-height:1.5;display:flex;flex-direction:column;gap:4px;"></ul>

          <details open style="background:#0B0D12;border:1px solid rgba(16,185,129,0.35);border-radius:8px;padding:10px 12px;">
            <summary style="cursor:pointer;font-family:\x27JetBrains Mono\x27,monospace;font-size:11.5px;font-weight:700;color:#6EE7B7;outline:none;">
              📦 Inspect Exact ZIP File Tree (growth-revenue-skills-pro-v1.0.0.zip — 5 Scripts + 22 JSON Datasets + 4 Next.js Templates)
            </summary>
            <pre style="margin:8px 0 0 0;font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;line-height:1.5;color:#E2E8F0;overflow-x:auto;white-space:pre;">growth-revenue-skills-pro-v1.0.0.zip (385 KB · Not "just Markdown prompts" — Full Code + Data)
├── scripts/ (5 Local Node.js / Playwright Automation Scripts — 0 Paid APIs)
│   ├── extract-competitor-pseo.mjs      # Auto-crawls sitemap.xml, robots.txt, /llms.txt &amp; clusters pSEO URL routes
│   ├── generate-nextjs-pseo-routes.mjs  # Scaffolds Next.js App Router dynamic [slug]/page.tsx + JSON-LD + sitemap.ts
│   ├── generate-comparison-matrix.mjs   # Generates verified /vs/[competitor] &amp; [competitor]-alternative (18-lang i18n)
│   ├── audit-pricing-page.mjs           # Audits SaaS pricing across 12 conversion heuristics + 3-step Cancel Modal
│   └── validate-launch-pack.mjs         # Lints Product Hunt, Show HN, Reddit &amp; App Store ASO copy against ban triggers
├── data/*.json (22 Raw Competitor pSEO &amp; Pricing Blueprints — Saves ~$129/mo in Ahrefs/Similarweb)
│   └── 20 verified $10k–$422k MRR indie SaaS sites (Tally, Plausible, Senja, StandOut CV...) + 2 AI dev platforms
├── templates/*.tsx (4 Production Next.js / React / Tailwind Conversion Templates)
│   ├── AlternativeLandingPage.tsx       # /vs/ comparison tables with 18-language i18n dictionary
│   ├── PricingSection.tsx               # Good-Better-Best pricing walls with PPP banner
│   ├── CancelRetentionFlow.tsx          # 3-step cancel salvage flows (FTC Click-to-Cancel compliant)
│   └── NextjsPseoPage.tsx               # Programmatic SEO pages with JSON-LD &amp; anti-thin-content guardrails
└── skills/*/SKILL.md (Universal Code Agent Playbooks: Claude Code .claude/skills + CLAUDE.md, Codex AGENTS.md, Cursor .mdc &amp; Windsurf)</pre>
          </details>
        </div>

        <!-- Buyer Email & Payment Method -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px;">
          <div>
            <label for="ebBuyerEmail" style="display:block;font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;color:#9CA3AF;text-transform:uppercase;margin-bottom:6px;">2. Your Delivery Email &amp; GitHub ID</label>
            <input id="ebBuyerEmail" type="email" placeholder="you@company.com (or GitHub @username)" style="width:100%;box-sizing:border-box;padding:10px 12px;border-radius:8px;border:1px solid rgba(255,255,255,0.16);background:#090A0D;color:#fff;font-size:13px;outline:none;" />
          </div>
          <div>
            <label for="ebPayMethod" style="display:block;font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;color:#9CA3AF;text-transform:uppercase;margin-bottom:6px;">3. Preferred Payment Method</label>
            <select id="ebPayMethod" onchange="window.updateOrderPayMethod(this.value)" style="width:100%;box-sizing:border-box;padding:10px 12px;border-radius:8px;border:1px solid rgba(255,255,255,0.16);background:#090A0D;color:#fff;font-size:13px;outline:none;">
              <option value="Card / Apple Pay via Polar.sh (GitHub Auto-Invite)">Card / Apple Pay via Polar.sh (GitHub Auto-Invite)</option>
              <option value="Alipay / WeChat Pay / Card via Creem.io">Alipay / WeChat Pay / Card via Creem.io (支付宝/微信)</option>
              <option value="Wise / USDT / USDC Crypto Transfer">Wise / USDT / USDC Crypto Transfer</option>
            </select>
          </div>
        </div>

        <!-- Primary CTA Button -->
        <button id="ebPrimarySubmitBtn" type="button" onclick="window.submitEarlyBirdOrder(\x27mailto\x27)" style="width:100%;padding:13px 18px;border-radius:10px;border:none;background:linear-gradient(135deg,#10B981,#059669);color:#04130D;font-weight:700;font-size:14px;cursor:pointer;box-shadow:0 8px 24px rgba(16,185,129,0.3);margin-bottom:10px;">
          Lock My Early-Bird Price &amp; Get Instant Payment Link &rarr;
        </button>

        <!-- Instant Alternative Channels (GitHub Issue + X DM) -->
        <div style="display:grid;grid-template-columns:1.25fr 1fr;gap:10px;">
          <button type="button" onclick="window.submitEarlyBirdOrder(\x27github\x27)" style="padding:10px 12px;border-radius:8px;border:1px solid rgba(165,180,252,0.35);background:rgba(99,102,241,0.12);color:#C7D2FE;font-size:12px;font-weight:600;cursor:pointer;">
            Or Request via GitHub Issue (Instant Notification) &nearr;
          </button>
          <button type="button" onclick="window.submitEarlyBirdOrder(\x27x\x27)" style="padding:10px 12px;border-radius:8px;border:1px solid rgba(255,255,255,0.14);background:rgba(255,255,255,0.05);color:#E5E7EB;font-size:12px;font-weight:600;cursor:pointer;">
            DM @RunChengln on X &nearr;
          </button>
        </div>

        <div id="ebOrderStatusBox" style="display:none;margin-top:12px;padding:11px 14px;border-radius:8px;background:rgba(16,185,129,0.12);border:1px solid rgba(16,185,129,0.4);font-family:\x27JetBrains Mono\x27,monospace;font-size:11.5px;color:#6EE7B7;line-height:1.5;"></div>
      </div>
    `;
    document.body.appendChild(modal);
    return modal;
  }

  window.selectOrderTier = function (tierId) {
    const t = window.CHECKOUT_TIERS[tierId] || window.CHECKOUT_TIERS.pro;
    activeOrderTier = t.id;
    ensureOrderModalDom();

    const heading = document.getElementById("ebModalHeading");
    const billing = document.getElementById("ebModalBilling");
    const deliv = document.getElementById("ebDeliverableCode");
    const list = document.getElementById("ebFeatureList");
    const refBadge = document.getElementById("ebPartnerRefBadge");
    const vipBadge = document.getElementById("ebVipCodeBadge");
    const vipInput = document.getElementById("ebVipCodeInput");
    const vipLinks = document.getElementById("ebVipInstantStarterLinks");
    const primaryBtn = document.getElementById("ebPrimarySubmitBtn");

    const activeRef = window.getActiveAffiliateRef();
    const activeVip = window.getActiveVipCode();

    if (vipInput && activeVip && vipInput.value !== activeVip) {
      vipInput.value = activeVip;
    }

    if (refBadge) {
      if (activeRef) {
        refBadge.style.display = "inline-block";
        refBadge.innerHTML = `🎁 Partner Referral Active (<strong>@${activeRef}</strong>)`;
      } else {
        refBadge.style.display = "none";
      }
    }

    if (vipBadge) {
      if (activeVip) {
        vipBadge.style.display = "inline-block";
        vipBadge.innerHTML = `✨ VIP CODE ACTIVE (<strong>${activeVip}</strong>): $0 Starter + 50% OFF Pro`;
      } else {
        vipBadge.style.display = "none";
      }
    }

    if (vipLinks) {
      vipLinks.style.display = activeVip ? "block" : "none";
    }

    const effectivePrice = activeVip ? t.vipPrice : t.price;

    if (heading) {
      if (activeVip) {
        heading.innerHTML = `${t.name} — <span style="color:#6EE7B7;">$${effectivePrice} USD (VIP 50% OFF)</span> <s style="color:#6B7280;font-size:15px;font-weight:400;">$${t.regularPrice}</s>`;
      } else {
        heading.innerHTML = `${t.name} — <span style="color:#6EE7B7;">$${effectivePrice} USD</span>` + (t.regularPrice ? ` <s style="color:#6B7280;font-size:15px;font-weight:400;">$${t.regularPrice}</s>` : "");
      }
    }
    if (billing) {
      billing.textContent = activeVip
        ? `VIP Code ${activeVip} Applied: $0 Free Starter Pack Unlocked + $${effectivePrice} One-Time VIP Rate (Zero Credit Card Subscription)`
        : t.billing;
    }
    if (deliv) deliv.textContent = `📦 ${t.deliverable}`;
    if (list) list.innerHTML = t.features.map((f) => `<li>${f}</li>`).join("");

    if (primaryBtn) {
      primaryBtn.innerHTML = activeVip
        ? `Claim VIP $${effectivePrice} Rate (Code: ${activeVip}) &amp; Instant Repo Invite &rarr;`
        : `Lock My Early-Bird $${effectivePrice} Price &amp; Get Instant Payment Link &rarr;`;
    }

    const pills = document.querySelectorAll("#ebTierPills button");
    pills.forEach((btn) => {
      const btnTier = btn.getAttribute("data-tier");
      const tierObj = window.CHECKOUT_TIERS[btnTier];
      if (tierObj) {
        const p = activeVip ? tierObj.vipPrice : tierObj.price;
        btn.textContent = btnTier === "pro" ? `★ Pro Pack · $${p}${activeVip ? " VIP" : ""}` : btnTier === "single" ? `Single · $${p}` : `Team (5x) · $${p}`;
      }
      const isAct = btnTier === t.id;
      btn.style.border = isAct ? "1px solid #10B981" : "1px solid rgba(255,255,255,0.12)";
      btn.style.background = isAct ? "rgba(16,185,129,0.18)" : "#161920";
      btn.style.color = isAct ? "#6EE7B7" : "#E5E7EB";
    });
  };

  window.updateOrderPayMethod = function (val) {
    activePayMethod = val;
  };

  window.submitEarlyBirdOrder = function (channel) {
    const cfg = window.CHECKOUT_CONFIG || {};
    const t = window.CHECKOUT_TIERS[activeOrderTier] || window.CHECKOUT_TIERS.pro;
    const emailInput = document.getElementById("ebBuyerEmail");
    const methodSelect = document.getElementById("ebPayMethod");
    const buyerEmail = (emailInput && emailInput.value.trim()) ? emailInput.value.trim() : "Not provided (please reply with payment link)";
    const payMethod = (methodSelect && methodSelect.value) ? methodSelect.value : activePayMethod;
    const partnerRef = window.getActiveAffiliateRef() || "direct (none)";
    const activeVip = window.getActiveVipCode() || "none";
    const effectivePrice = activeVip !== "none" ? t.vipPrice : t.price;

    const refSuffix = partnerRef !== "direct (none)" ? ` [Ref: @${partnerRef}]` : "";
    const vipSuffix = activeVip !== "none" ? ` [VIP: ${activeVip}]` : "";
    const subject = `[TasteSkill Order] ${t.name} ($${effectivePrice} USD)${vipSuffix} — ${payMethod.split(" ")[0]}${refSuffix}`;
    const bodyLines = [
      `Hi TasteSkill Team,`,
      ``,
      `I would like to lock in my price and receive my instant payment link & deliverable bundle:`,
      ``,
      `- Selected Tier: ${t.name} ($${effectivePrice} USD One-Time${activeVip !== "none" ? ` — VIP 50% OFF Code: ${activeVip}` : ""})`,
      `- VIP / Founder Code: ${activeVip}`,
      `- Deliverable: ${t.deliverable}`,
      `- Buyer Email / GitHub: ${buyerEmail}`,
      `- Preferred Payment Method: ${payMethod}`,
      `- Affiliate Referrer (ref): ${partnerRef}`,
      `- Source Page: ${window.location.href}`,
      ``,
      `Please send the ${payMethod} checkout link and GitHub repo invite.`
    ];
    const bodyText = bodyLines.join("\n");

    if (buyerEmail && buyerEmail !== "Not provided (please reply with payment link)" && typeof fetch === "function") {
      try {
        fetch(cfg.formsubmitUrl || "https://formsubmit.co/ajax/zongwu835@gmail.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({
            _subject: subject,
            tier: `${t.name} ($${effectivePrice} USD)`,
            vip_code: activeVip,
            buyer_email_or_github: buyerEmail,
            payment_method: payMethod,
            affiliate_referrer_ref: partnerRef,
            source_url: window.location.href
          })
        }).catch(() => {});
      } catch (e) {}
    }

    const statusBox = document.getElementById("ebOrderStatusBox");
    if (statusBox) {
      statusBox.style.display = "block";
    }

    if (channel === "github") {
      const ghUrl = `${cfg.githubIssueUrl || "https://github.com/WuDao0123/taste-skill/issues/new"}?title=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
      window.open(ghUrl, "_blank", "noopener");
      if (statusBox) {
        statusBox.innerHTML = `✓ Opened pre-filled GitHub Issue in a new tab (VIP Code: <code>${activeVip}</code> · Ref: <code>${partnerRef}</code>)! Submit the issue for instant automated notification, or email <strong>${cfg.orderEmail}</strong>.`;
      }
      return;
    }

    if (channel === "x") {
      window.open(cfg.xDmUrl || "https://x.com/RunChengln", "_blank", "noopener");
      if (statusBox) {
        statusBox.innerHTML = `✓ Opened @RunChengln on X! Send a quick DM with "<strong>${t.name} ($${effectivePrice}) - VIP: ${activeVip} - ${buyerEmail}</strong>" for your instant link.`;
      }
      return;
    }

    const mailtoUrl = `mailto:${cfg.orderEmail || "zongwu835@gmail.com"}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoUrl;
    if (statusBox) {
      statusBox.innerHTML = `✓ Prepared your order email to <strong>${cfg.orderEmail || "zongwu835@gmail.com"}</strong> (VIP Code: <code>${activeVip}</code>)! If your mail client didn\x27t open automatically, click <strong>"Request via GitHub Issue"</strong> above for 1-click browser submission.`;
    }
  };

  window.openCheckoutModal = function (tierId, preferredProvider) {
    if (tierId === "community") {
      const cmd = "npx --yes github:WuDao0123/taste-skill find \"dark precision saas\"";
      if (navigator.clipboard) navigator.clipboard.writeText(cmd).catch(() => {});
      if (typeof window.showToast === "function") {
        window.showToast("Copied Free CLI: " + cmd);
      }
      return;
    }

    const cfg = window.CHECKOUT_CONFIG || {};
    const normTier = (tierId === "single" || tierId === "team" || tierId === "pro") ? tierId : "pro";
    const activeRef = window.getActiveAffiliateRef();

    if (cfg.isLive === true) {
      const useCreem = preferredProvider === "creem";
      let targetUrl = normTier === "single"
        ? (useCreem ? cfg.creemSingleUrl : cfg.singleUrl)
        : normTier === "team"
          ? (useCreem ? cfg.creemTeamUrl : cfg.teamUrl)
          : (useCreem ? cfg.creemProUrl : cfg.proUrl);
      if (targetUrl) {
        if (activeRef) {
          targetUrl += (targetUrl.includes("?") ? "&" : "?") + "ref=" + encodeURIComponent(activeRef);
        }
        window.open(targetUrl, "_blank", "noopener");
        return;
      }
    }

    const oldModal = document.getElementById("checkoutModal");
    if (oldModal) oldModal.classList.remove("open");

    const modal = ensureOrderModalDom();
    window.selectOrderTier(normTier);
    modal.style.display = "flex";
  };

  window.closeCheckoutModal = function () {
    const modal = document.getElementById("ebInstantOrderModal");
    if (modal) modal.style.display = "none";
    const oldModal = document.getElementById("checkoutModal");
    if (oldModal) oldModal.classList.remove("open");
  };

  document.addEventListener("click", function (e) {
    const trigger = e.target.closest("[data-checkout-tier]");
    if (trigger) {
      e.preventDefault();
      e.stopPropagation();
      window.openCheckoutModal(trigger.getAttribute("data-checkout-tier"));
      return;
    }
    const anchor = e.target.closest("a[href*=\"#pricing-section\"]");
    if (anchor && !document.getElementById("pricing-section")) {
      e.preventDefault();
      const txt = (anchor.textContent || "").toLowerCase();
      const tier = txt.includes("$29") ? "single" : txt.includes("$169") ? "team" : "pro";
      window.openCheckoutModal(tier);
    }
  });
})();
