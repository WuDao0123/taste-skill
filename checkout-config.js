// Polar.sh & Creem.io Checkout Configuration + Zero-404 Early-Bird Instant Order Modal + 30-Day Affiliate Tracking (?ref=)
// Set isLive: true once your Polar.sh / Creem.io product checkout links are published.
window.CHECKOUT_CONFIG = {
  isLive: false,
  singleUrl: "https://polar.sh/checkout/taste-skill-single-29",
  proUrl: "https://polar.sh/checkout/taste-skill-pro-69",
  teamUrl: "https://polar.sh/checkout/taste-skill-team-169",
  creemSingleUrl: "https://creem.io/checkout/taste-skill-single-29",
  creemProUrl: "https://creem.io/checkout/taste-skill-pro-69",
  creemTeamUrl: "https://creem.io/checkout/taste-skill-team-169",
  orderEmail: "zongwu835@gmail.com",
  githubIssueUrl: "https://github.com/WuDao0123/taste-skill/issues/new",
  xDmUrl: "https://x.com/RunChengln",
  formsubmitUrl: "https://formsubmit.co/ajax/zongwu835@gmail.com",
  affiliateCommissionPct: 50
};

window.CHECKOUT_TIERS = {
  single: {
    id: "single",
    label: "$29 Single Skill",
    name: "Single Growth Skill",
    price: 29,
    regularPrice: null,
    billing: "One-time payment · Choose any 1 Pro Growth Skill (Buying all 4 separately = $116)",
    deliverable: "1 Selected Pro Skill + Matching Local Playwright/Node Crawler (.mjs) + Next.js/React Templates (.tsx)",
    features: [
      "Choose any 1 Paid Skill: pseo-competitor-teardown, x-alternative-pages, pricing-paywall-retention, or launch-kit",
      "Includes matching zero-cost local Node.js + Playwright automation script (.mjs)",
      "Production Next.js / Astro / React components (.tsx) & JSON schemas",
      "100% credit toward upgrading to the $69 Early-Bird Pro Pack anytime"
    ]
  },
  pro: {
    id: "pro",
    label: "★ $69 Early-Bird Pro Pack",
    name: "Early-Bird Pro Pack",
    price: 69,
    regularPrice: 99,
    billing: "One-time payment · Early-Bird ($30 OFF vs $99 regular · Saves ~16 hrs of engineering + $129/mo in SEO tool subscriptions)",
    deliverable: "growth-revenue-skills-pro-v1.0.0.zip (385 KB): 5 Local Node.js/Playwright Scripts (.mjs) + 22 Raw Competitor JSON Blueprints (data/*.json) + 4 Next.js/Tailwind Templates (templates/*.tsx) + 4 Agent SKILL.md Playbooks",
    features: [
      "5 Local Node.js / Playwright Automation Scripts (.mjs): extract-competitor-pseo.mjs, generate-nextjs-pseo-routes.mjs, generate-comparison-matrix.mjs, audit-pricing-page.mjs, validate-launch-pack.mjs",
      "22 Raw Competitor pSEO & Pricing Blueprints (data/*.json): 20 verified $10k–$422k MRR indie SaaS sites + 2 AI developer platforms (saves ~$129/mo in Ahrefs/Similarweb research)",
      "4 Production Next.js / React / Tailwind Conversion Templates (templates/*.tsx): /vs/ comparison tables, Good-Better-Best pricing walls with PPP banner, 3-step cancel salvage flows & pSEO pages",
      "4 Complete Agent SKILL.md Playbooks for Claude Code (.claude/skills + CLAUDE.md), Codex (AGENTS.md), Cursor (.mdc), and Windsurf"
    ]
  },
  team: {
    id: "team",
    label: "$169 Team License",
    name: "Team & Agency License",
    price: 169,
    regularPrice: 299,
    billing: "One-time payment · Up to 5 seats + Unlimited client commercial & white-label delivery rights",
    deliverable: "growth-revenue-skills-pro-v1.0.0.zip (385 KB) + 5-Seat Agency Commercial & White-Label License",
    features: [
      "Everything in Early-Bird Pro Pack ($69 tier) unlocked for up to 5 team members",
      "Unlimited client commercial delivery & white-label agency rights",
      "Priority custom competitor pSEO & pricing DOM teardown requests",
      "Lifetime updates to all future verified $10k+ MRR SaaS blueprints"
    ]
  }
};

(function () {
  const AFF_KEY = "ts_affiliate_ref";
  const AFF_TS_KEY = "ts_affiliate_ref_ts";
  const AFF_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

  function sanitizeRef(raw) {
    if (!raw) return "";
    return String(raw).trim().replace(/^@+/, "").replace(/[^a-zA-Z0-9_.-]/g, "").slice(0, 48);
  }

  function captureAffiliateRefFromUrl() {
    try {
      const params = new URLSearchParams(window.location.search || "");
      const incoming = sanitizeRef(params.get("ref") || params.get("via") || params.get("utm_source") || params.get("partner"));
      if (incoming) {
        localStorage.setItem(AFF_KEY, incoming);
        localStorage.setItem(AFF_TS_KEY, String(Date.now()));
        return incoming;
      }
      const saved = localStorage.getItem(AFF_KEY) || "";
      const savedTs = Number(localStorage.getItem(AFF_TS_KEY) || 0);
      if (saved && savedTs && (Date.now() - savedTs < AFF_TTL_MS)) {
        return sanitizeRef(saved);
      }
      if (saved && !savedTs) {
        return sanitizeRef(saved);
      }
    } catch (e) {}
    return "";
  }

  window.getActiveAffiliateRef = function () {
    return captureAffiliateRefFromUrl();
  };

  window.generateAffiliateLink = function (customHandle) {
    const input = document.getElementById("affiliateHandleInput");
    const raw = customHandle !== undefined ? customHandle : (input ? input.value : "");
    const handle = sanitizeRef(raw) || "your_handle";
    const link = `https://wudao0123.github.io/taste-skill/?ref=${handle}`;
    const outEl = document.getElementById("affiliateGeneratedUrl");
    if (outEl) outEl.textContent = link;
    return link;
  };

  window.copyAffiliateLink = function () {
    const link = window.generateAffiliateLink();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(link).catch(() => {});
    }
    const btn = document.getElementById("btnCopyAffiliateLink");
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = "✓ Copied 50% Partner Link ($34.50/sale)!";
      setTimeout(() => { btn.innerHTML = orig; }, 2400);
    }
    if (typeof window.showToast === "function") {
      window.showToast("Copied 50% Partner Link: " + link);
    }
  };

  function renderAffiliateTopBanner() {
    const ref = window.getActiveAffiliateRef();
    if (!ref) return;
    const pricingSec = document.getElementById("pricing-section");
    if (pricingSec && !document.getElementById("tsAffiliateActiveBanner")) {
      const banner = document.createElement("div");
      banner.id = "tsAffiliateActiveBanner";
      banner.style.cssText = "background:linear-gradient(90deg,rgba(16,185,129,0.18),rgba(99,102,241,0.18));border:1px solid #10B981;border-radius:10px;padding:10px 16px;margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;font-family:'JetBrains Mono',monospace;font-size:12px;color:#6EE7B7;";
      banner.innerHTML = `
        <div>🎁 <strong>Partner Referral Active (@${ref})</strong> — Early-Bird $69 Priority Lock ($30 OFF) + 30-Day Partner Attribution Applied</div>
        <span style="color:#A5B4FC;font-size:11px;">Ref ID: <code>${ref}</code></span>
      `;
      pricingSec.insertBefore(banner, pricingSec.firstChild);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderAffiliateTopBanner);
  } else {
    renderAffiliateTopBanner();
  }

  let activeOrderTier = "pro";
  let activePayMethod = "Card / Apple Pay via Polar.sh (GitHub Auto-Invite)";

  function ensureOrderModalDom() {
    let modal = document.getElementById("ebInstantOrderModal");
    if (modal) return modal;

    modal = document.createElement("div");
    modal.id = "ebInstantOrderModal";
    modal.className = "modal-backdrop";
    modal.style.cssText = "position:fixed;inset:0;background:rgba(5,6,8,0.84);backdrop-filter:blur(8px);z-index:9999;display:none;align-items:center;justify-content:center;padding:18px;";
    modal.onclick = function (e) {
      if (e.target === modal) window.closeCheckoutModal();
    };

    modal.innerHTML = `
      <div style="background:#0F1115;border:1px solid rgba(99,102,241,0.45);border-radius:16px;max-width:740px;width:100%;max-height:92vh;overflow-y:auto;box-shadow:0 28px 80px rgba(0,0,0,0.85);color:#F7F8F8;font-family:Inter,-apple-system,sans-serif;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;padding:18px 24px;border-bottom:1px solid rgba(255,255,255,0.08);background:#13161C;">
          <div>
            <div style="display:inline-flex;align-items:center;gap:8px;font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;color:#6EE7B7;background:rgba(16,185,129,0.14);border:1px solid rgba(16,185,129,0.35);padding:3px 9px;border-radius:999px;margin-bottom:6px;">
              <span>⚡ EARLY-BIRD INSTANT ORDER &amp; DELIVERY</span>
              <span>·</span>
              <span>SAVES ~16 HRS ENGINEERING + $129/MO SEO TOOLS</span>
            </div>
            <div id="ebPartnerRefBadge" style="display:none;margin-bottom:6px;font-family:\x27JetBrains Mono\x27,monospace;font-size:11.5px;color:#FDE047;background:rgba(234,179,8,0.14);border:1px solid rgba(234,179,8,0.4);padding:4px 10px;border-radius:6px;"></div>
            <h3 id="ebModalHeading" style="font-size:20px;font-weight:700;color:#fff;margin:0;">Early-Bird Pro Pack — $69 USD</h3>
            <div id="ebModalBilling" style="font-family:\x27JetBrains Mono\x27,monospace;font-size:11.5px;color:#A5B4FC;margin-top:4px;"></div>
          </div>
          <button onclick="window.closeCheckoutModal()" style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);color:#9CA3AF;width:32px;height:32px;border-radius:8px;font-size:18px;cursor:pointer;line-height:1;">&times;</button>
        </div>

        <div style="padding:20px 24px;">
          <!-- Tier Switcher Pills -->
          <div style="margin-bottom:14px;">
            <div style="font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:6px;">1. Select License Tier</div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;" id="ebTierPills">
              <button type="button" data-tier="single" onclick="window.selectOrderTier(\x27single\x27)" style="padding:9px 10px;border-radius:8px;font-family:\x27JetBrains Mono\x27,monospace;font-size:12px;cursor:pointer;border:1px solid rgba(255,255,255,0.12);background:#161920;color:#E5E7EB;font-weight:600;">$29 Single Skill</button>
              <button type="button" data-tier="pro" onclick="window.selectOrderTier(\x27pro\x27)" style="padding:9px 10px;border-radius:8px;font-family:\x27JetBrains Mono\x27,monospace;font-size:12px;cursor:pointer;border:1px solid #10B981;background:rgba(16,185,129,0.16);color:#6EE7B7;font-weight:700;">★ $69 Pro Pack</button>
              <button type="button" data-tier="team" onclick="window.selectOrderTier(\x27team\x27)" style="padding:9px 10px;border-radius:8px;font-family:\x27JetBrains Mono\x27,monospace;font-size:12px;cursor:pointer;border:1px solid rgba(255,255,255,0.12);background:#161920;color:#E5E7EB;font-weight:600;">$169 Team (5x)</button>
            </div>
          </div>

          <!-- Deliverable Package Box + Exact ZIP File Tree -->
          <div style="background:#14171F;border:1px solid rgba(99,102,241,0.35);border-radius:10px;padding:14px 16px;margin-bottom:14px;">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;margin-bottom:6px;">
              <span style="font-family:\x27JetBrains Mono\x27,monospace;font-size:11px;color:#6EE7B7;font-weight:600;">INSTANT EXECUTABLE ENGINEERING &amp; INTELLIGENCE BUNDLE</span>
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
          <button type="button" onclick="window.submitEarlyBirdOrder(\x27mailto\x27)" style="width:100%;padding:13px 18px;border-radius:10px;border:none;background:linear-gradient(135deg,#10B981,#059669);color:#04130D;font-weight:700;font-size:14px;cursor:pointer;box-shadow:0 8px 24px rgba(16,185,129,0.3);margin-bottom:10px;">
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
    const activeRef = window.getActiveAffiliateRef();

    if (refBadge) {
      if (activeRef) {
        refBadge.style.display = "inline-block";
        refBadge.innerHTML = `🎁 Partner Referral Active (<strong>@${activeRef}</strong>) — Early-Bird 50% Priority Lock Applied`;
      } else {
        refBadge.style.display = "none";
      }
    }

    if (heading) {
      heading.innerHTML = `${t.name} — <span style="color:#6EE7B7;">$${t.price} USD</span>` + (t.regularPrice ? ` <s style="color:#6B7280;font-size:15px;font-weight:400;">$${t.regularPrice}</s>` : "");
    }
    if (billing) billing.textContent = t.billing;
    if (deliv) deliv.textContent = `📦 ${t.deliverable}`;
    if (list) list.innerHTML = t.features.map((f) => `<li>${f}</li>`).join("");

    const pills = document.querySelectorAll("#ebTierPills button");
    pills.forEach((btn) => {
      const isAct = btn.getAttribute("data-tier") === t.id;
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

    const refSuffix = partnerRef !== "direct (none)" ? ` [Ref: @${partnerRef}]` : "";
    const subject = `[TasteSkill Early-Bird Order] ${t.name} ($${t.price} USD) — ${payMethod.split(" ")[0]}${refSuffix}`;
    const bodyLines = [
      `Hi TasteSkill Team,`,
      ``,
      `I would like to lock in the Early-Bird price and receive my instant payment link & deliverable bundle:`,
      ``,
      `- Selected Tier: ${t.name} ($${t.price} USD One-Time)`,
      `- Deliverable: ${t.deliverable}`,
      `- Buyer Email / GitHub: ${buyerEmail}`,
      `- Preferred Payment Method: ${payMethod}`,
      `- Affiliate Referrer (ref): ${partnerRef}`,
      `- Source Page: ${window.location.href}`,
      ``,
      `Please send the ${payMethod} checkout link and GitHub repo invite.`
    ];
    const bodyText = bodyLines.join("\n");

    // Silent background webhook attribution via FormSubmit AJAX when buyer enters email
    if (buyerEmail && buyerEmail !== "Not provided (please reply with payment link)" && typeof fetch === "function") {
      try {
        fetch(cfg.formsubmitUrl || "https://formsubmit.co/ajax/zongwu835@gmail.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify({
            _subject: subject,
            tier: `${t.name} ($${t.price} USD)`,
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
        statusBox.innerHTML = `✓ Opened pre-filled GitHub Issue in a new tab (Affiliate Ref: <code>${partnerRef}</code>)! Submit the issue for instant automated notification, or email <strong>${cfg.orderEmail}</strong>.`;
      }
      return;
    }

    if (channel === "x") {
      window.open(cfg.xDmUrl || "https://x.com/RunChengln", "_blank", "noopener");
      if (statusBox) {
        statusBox.innerHTML = `✓ Opened @RunChengln on X! Send a quick DM with "<strong>${t.name} ($${t.price}) - ${buyerEmail} (ref: ${partnerRef})</strong>" for your payment link.`;
      }
      return;
    }

    const mailtoUrl = `mailto:${cfg.orderEmail || "zongwu835@gmail.com"}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoUrl;
    if (statusBox) {
      statusBox.innerHTML = `✓ Prepared your Early-Bird order email to <strong>${cfg.orderEmail || "zongwu835@gmail.com"}</strong> (Affiliate Ref: <code>${partnerRef}</code>)! If your mail client didn\x27t open automatically, click <strong>"Request via GitHub Issue"</strong> above for 1-click browser submission.`;
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

  // Intercept any [data-checkout-tier] or subpage #pricing-section CTA clicks so no buyer hits a dead link
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
