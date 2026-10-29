// CiteKit API. One router for every /api/* route, called from the Pages Function.
//
// Bindings: DB (D1). Vars/secrets: APP_URL, EMAIL_FROM, RESEND_API_KEY, STRIPE_SECRET_KEY,
// STRIPE_WEBHOOK_SECRET, STRIPE_PRICE_AGENCY_MONTHLY, STRIPE_PRICE_AGENCY_YEARLY,
// STRIPE_PRICE_PRO_MONTHLY, STRIPE_PRICE_PRO_YEARLY. DEV=1 returns magic links in the response.
import { audit as runSiteAudit } from './audit.mjs';

export const PLANS = {
  free: { widgets: 1, audits: 25, branding: true, webhook: false },
  agency: { widgets: 1, audits: 500, branding: true, webhook: false },
  pro: { widgets: 5, audits: 3000, branding: false, webhook: true },
};

const SESSION_DAYS = 30;
const LOGIN_MINUTES = 20;
const CORS = { 'access-control-allow-origin': '*', 'access-control-allow-methods': 'GET, POST, OPTIONS', 'access-control-allow-headers': 'content-type' };

class HttpError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}

// Audit failures (bad URL, site unreachable) are the visitor's to fix, so they are 400s.
async function audit(target) {
  try { return await runSiteAudit(target); } catch (e) { throw new HttpError(400, e.message || 'Audit failed.'); }
}

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...headers } });
}

const hex = (buf) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
const randomId = (bytes = 16) => hex(crypto.getRandomValues(new Uint8Array(bytes)));
const sha256 = async (s) => hex(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s)));
const month = () => new Date().toISOString().slice(0, 7);
const now = () => Math.floor(Date.now() / 1000);

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,190}\.[a-z]{2,}$/i;
function cleanEmail(v) {
  const e = String(v || '').trim().toLowerCase();
  if (!EMAIL_RE.test(e)) throw new HttpError(400, 'Enter a valid email address.');
  return e;
}
function cleanUrl(v, { allowEmpty = true } = {}) {
  const s = String(v || '').trim();
  if (!s && allowEmpty) return '';
  let u;
  try { u = new URL(s); } catch { throw new HttpError(400, `Not a valid URL: ${s}`); }
  if (u.protocol !== 'https:' && u.protocol !== 'http:') throw new HttpError(400, 'URLs must start with https://');
  return u.toString();
}
function cleanText(v, max) {
  return String(v ?? '').replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, max);
}
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

async function body(request) {
  try { return await request.json(); } catch { throw new HttpError(400, 'Expected a JSON body.'); }
}

function cookie(request, name) {
  const m = (request.headers.get('cookie') || '').match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return m ? m[1] : '';
}

async function sendEmail(env, { to, subject, html }) {
  if (!env.RESEND_API_KEY) {
    console.log(`[email skipped: no RESEND_API_KEY] to=${to} subject=${subject}`);
    return false;
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({ from: env.EMAIL_FROM || 'CiteKit <hello@citekit.example>', to, subject, html }),
  });
  if (!res.ok) console.log(`[email failed] ${res.status} ${await res.text()}`);
  return res.ok;
}

// ---------- auth ----------

async function currentAgency(request, env) {
  const token = cookie(request, 'ck_session');
  if (!token) return null;
  return env.DB.prepare(
    'SELECT a.* FROM sessions s JOIN agencies a ON a.id = s.agency_id WHERE s.token_hash = ? AND s.expires_at > ?'
  ).bind(await sha256(token), now()).first();
}

async function requireAgency(request, env) {
  const agency = await currentAgency(request, env);
  if (!agency) throw new HttpError(401, 'Please log in.');
  return agency;
}

async function requestLogin(request, env, appUrl) {
  const { email: raw } = await body(request);
  const email = cleanEmail(raw);
  const token = randomId(32);
  await env.DB.prepare('DELETE FROM login_tokens WHERE expires_at < ?').bind(now()).run();
  await env.DB.prepare('INSERT INTO login_tokens (token_hash, email, expires_at) VALUES (?, ?, ?)')
    .bind(await sha256(token), email, now() + LOGIN_MINUTES * 60).run();
  const link = `${appUrl}/app/?token=${token}`;
  await sendEmail(env, {
    to: email,
    subject: 'Your CiteKit login link',
    html: `<p>Click to log in to CiteKit. The link works for ${LOGIN_MINUTES} minutes.</p><p><a href="${esc(link)}">Log in to CiteKit</a></p><p>If you did not ask for this, ignore this email.</p>`,
  });
  return json({ ok: true, ...(env.DEV ? { devLink: link } : {}) });
}

async function verifyLogin(request, env) {
  const { token } = await body(request);
  if (!token) throw new HttpError(400, 'Missing token.');
  const hash = await sha256(String(token));
  const row = await env.DB.prepare('SELECT * FROM login_tokens WHERE token_hash = ? AND expires_at > ?').bind(hash, now()).first();
  if (!row) throw new HttpError(400, 'This login link has expired. Request a new one.');
  await env.DB.prepare('DELETE FROM login_tokens WHERE token_hash = ?').bind(hash).run();

  let agency = await env.DB.prepare('SELECT * FROM agencies WHERE email = ?').bind(row.email).first();
  if (!agency) {
    const id = randomId(8);
    await env.DB.prepare('INSERT INTO agencies (id, email) VALUES (?, ?)').bind(id, row.email).run();
    await env.DB.prepare('INSERT INTO widgets (id, agency_id, name, notify_email) VALUES (?, ?, ?, ?)')
      .bind('w_' + randomId(8), id, row.email.split('@')[1].split('.')[0], row.email).run();
    agency = { id };
  }
  const session = randomId(32);
  await env.DB.prepare('INSERT INTO sessions (token_hash, agency_id, expires_at) VALUES (?, ?, ?)')
    .bind(await sha256(session), agency.id, now() + SESSION_DAYS * 86400).run();
  return json({ ok: true }, 200, {
    'set-cookie': `ck_session=${session}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${SESSION_DAYS * 86400}`,
  });
}

async function logout(request, env) {
  const token = cookie(request, 'ck_session');
  if (token) await env.DB.prepare('DELETE FROM sessions WHERE token_hash = ?').bind(await sha256(token)).run();
  return json({ ok: true }, 200, { 'set-cookie': 'ck_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0' });
}

// ---------- dashboard ----------

async function me(request, env) {
  const agency = await requireAgency(request, env);
  const { results: widgets } = await env.DB.prepare('SELECT * FROM widgets WHERE agency_id = ? ORDER BY created_at').bind(agency.id).all();
  const { results: usage } = await env.DB.prepare(
    `SELECT widget_id, audits FROM usage WHERE month = ? AND widget_id IN (SELECT id FROM widgets WHERE agency_id = ?)`
  ).bind(month(), agency.id).all();
  const { results: leads } = await env.DB.prepare(
    `SELECT l.* FROM leads l JOIN widgets w ON w.id = l.widget_id WHERE w.agency_id = ? ORDER BY l.id DESC LIMIT 500`
  ).bind(agency.id).all();
  const used = Object.fromEntries(usage.map((u) => [u.widget_id, u.audits]));
  return json({
    agency: { email: agency.email, plan: agency.plan, limits: PLANS[agency.plan] || PLANS.free, hasBilling: Boolean(agency.stripe_customer) },
    widgets: widgets.map((w) => ({ ...w, auditsThisMonth: used[w.id] || 0 })),
    leads,
  });
}

function widgetFields(input, plan) {
  const out = {
    name: cleanText(input.name, 80) || 'Your agency',
    logo_url: cleanUrl(input.logo_url),
    color: /^#[0-9a-f]{6}$/i.test(input.color || '') ? input.color : '#1f5eff',
    headline: cleanText(input.headline, 120) || 'Is your website visible to ChatGPT?',
    cta_text: cleanText(input.cta_text, 60) || 'Book a free consultation',
    cta_url: cleanUrl(input.cta_url),
    notify_email: input.notify_email ? cleanEmail(input.notify_email) : '',
    webhook_url: PLANS[plan]?.webhook ? cleanUrl(input.webhook_url) : '',
  };
  if (out.webhook_url && !out.webhook_url.startsWith('https://')) throw new HttpError(400, 'Webhook URLs must use https://');
  return out;
}

async function createWidget(request, env) {
  const agency = await requireAgency(request, env);
  const limits = PLANS[agency.plan] || PLANS.free;
  const { n } = await env.DB.prepare('SELECT COUNT(*) AS n FROM widgets WHERE agency_id = ?').bind(agency.id).first();
  if (n >= limits.widgets) throw new HttpError(403, `Your plan includes ${limits.widgets} widget${limits.widgets > 1 ? 's' : ''}. Upgrade to Agency Pro for 5.`);
  const f = widgetFields(await body(request), agency.plan);
  const id = 'w_' + randomId(8);
  await env.DB.prepare(
    'INSERT INTO widgets (id, agency_id, name, logo_url, color, headline, cta_text, cta_url, notify_email, webhook_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
  ).bind(id, agency.id, f.name, f.logo_url, f.color, f.headline, f.cta_text, f.cta_url, f.notify_email || agency.email, f.webhook_url).run();
  return json({ ok: true, id });
}

async function updateWidget(request, env, id) {
  const agency = await requireAgency(request, env);
  const f = widgetFields(await body(request), agency.plan);
  const r = await env.DB.prepare(
    'UPDATE widgets SET name = ?, logo_url = ?, color = ?, headline = ?, cta_text = ?, cta_url = ?, notify_email = ?, webhook_url = ? WHERE id = ? AND agency_id = ?'
  ).bind(f.name, f.logo_url, f.color, f.headline, f.cta_text, f.cta_url, f.notify_email || agency.email, f.webhook_url, id, agency.id).run();
  if (!r.meta.changes) throw new HttpError(404, 'Widget not found.');
  return json({ ok: true });
}

async function leadsCsv(request, env) {
  const agency = await requireAgency(request, env);
  const { results } = await env.DB.prepare(
    `SELECT l.created_at, l.email, l.site, l.score, l.page_url, w.name AS widget FROM leads l JOIN widgets w ON w.id = l.widget_id WHERE w.agency_id = ? ORDER BY l.id DESC`
  ).bind(agency.id).all();
  const cell = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const csv = ['created_at,email,site,score,page_url,widget', ...results.map((r) => [r.created_at, r.email, r.site, r.score, r.page_url, r.widget].map(cell).join(','))].join('\n');
  return new Response(csv, { headers: { 'content-type': 'text/csv; charset=utf-8', 'content-disposition': 'attachment; filename="citekit-leads.csv"' } });
}

// ---------- public widget API (called from agency sites) ----------

async function loadWidget(env, id) {
  const w = await env.DB.prepare('SELECT w.*, a.plan FROM widgets w JOIN agencies a ON a.id = w.agency_id WHERE w.id = ?').bind(String(id || '')).first();
  if (!w) throw new HttpError(404, 'Unknown widget.');
  return w;
}

async function widgetConfig(env, id) {
  const w = await loadWidget(env, id);
  const limits = PLANS[w.plan] || PLANS.free;
  return json({ id: w.id, name: w.name, logo_url: w.logo_url, color: w.color, headline: w.headline, cta_text: w.cta_text, cta_url: w.cta_url, branding: limits.branding }, 200, { ...CORS, 'cache-control': 'public, max-age=60' });
}

async function runAudit(request, env) {
  const params = new URL(request.url).searchParams;
  const wid = params.get('w');
  if (wid) {
    const w = await loadWidget(env, wid);
    const limits = PLANS[w.plan] || PLANS.free;
    const row = await env.DB.prepare('SELECT audits FROM usage WHERE widget_id = ? AND month = ?').bind(w.id, month()).first();
    if ((row?.audits || 0) >= limits.audits) throw new HttpError(429, 'This audit tool has reached its monthly limit. Please contact the site owner.');
    await env.DB.prepare(
      'INSERT INTO usage (widget_id, month, audits) VALUES (?, ?, 1) ON CONFLICT(widget_id, month) DO UPDATE SET audits = audits + 1'
    ).bind(w.id, month()).run();
  }
  const report = await audit(params.get('url'));
  return json(report, 200, CORS);
}

async function createLead(request, env) {
  const input = await body(request);
  const w = await loadWidget(env, input.w);
  const email = cleanEmail(input.email);
  const site = cleanText(input.site, 300);
  const score = Number.isFinite(+input.score) ? Math.max(0, Math.min(100, Math.round(+input.score))) : null;
  const pageUrl = cleanText(input.page_url, 500);
  const { n } = await env.DB.prepare(
    "SELECT COUNT(*) AS n FROM leads WHERE widget_id = ? AND email = ? AND created_at > datetime('now', '-1 day')"
  ).bind(w.id, email).first();
  if (n === 0) {
    await env.DB.prepare('INSERT INTO leads (widget_id, email, site, score, page_url) VALUES (?, ?, ?, ?, ?)').bind(w.id, email, site, score, pageUrl).run();
    const tasks = [];
    if (w.notify_email) {
      tasks.push(sendEmail(env, {
        to: w.notify_email,
        subject: `New lead: ${site || email} scored ${score ?? '?'}/100`,
        html: `<p>A visitor ran the AI visibility audit on your site.</p><ul><li>Email: ${esc(email)}</li><li>Website: ${esc(site)}</li><li>Score: ${score ?? '?'}/100</li><li>Page: ${esc(pageUrl)}</li></ul><p>A low score is a good opening: offer to fix the items marked in red.</p>`,
      }));
    }
    if (w.webhook_url && PLANS[w.plan]?.webhook) {
      tasks.push(fetch(w.webhook_url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ event: 'lead.created', widget: w.id, email, site, score, page_url: pageUrl, created_at: new Date().toISOString() }) }).catch(() => {}));
    }
    await Promise.all(tasks);
  }
  return json({ ok: true }, 200, CORS);
}

// ---------- billing (Stripe) ----------

async function stripe(env, path, params) {
  if (!env.STRIPE_SECRET_KEY) throw new HttpError(503, 'Billing is not configured yet.');
  const res = await fetch(`https://api.stripe.com/v1/${path}`, {
    method: 'POST',
    headers: { authorization: `Bearer ${env.STRIPE_SECRET_KEY}`, 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(params),
  });
  const data = await res.json();
  if (!res.ok) throw new HttpError(502, data.error?.message || 'Stripe error.');
  return data;
}

function priceFor(env, plan, interval) {
  const key = `STRIPE_PRICE_${plan.toUpperCase()}_${interval === 'year' ? 'YEARLY' : 'MONTHLY'}`;
  if (!['agency', 'pro'].includes(plan) || !env[key]) throw new HttpError(400, 'Unknown plan.');
  return env[key];
}

function planForPrice(env, priceId) {
  if ([env.STRIPE_PRICE_PRO_MONTHLY, env.STRIPE_PRICE_PRO_YEARLY].includes(priceId)) return 'pro';
  if ([env.STRIPE_PRICE_AGENCY_MONTHLY, env.STRIPE_PRICE_AGENCY_YEARLY].includes(priceId)) return 'agency';
  return null;
}

async function checkout(request, env, appUrl) {
  const agency = await requireAgency(request, env);
  if (!env.STRIPE_SECRET_KEY) throw new HttpError(503, 'Billing is not configured yet.');
  const { plan, interval } = await body(request);
  const params = {
    mode: 'subscription',
    'line_items[0][price]': priceFor(env, plan, interval),
    'line_items[0][quantity]': '1',
    client_reference_id: agency.id,
    'subscription_data[metadata][agency_id]': agency.id,
    allow_promotion_codes: 'true',
    success_url: `${appUrl}/app/?upgraded=1`,
    cancel_url: `${appUrl}/app/`,
  };
  if (agency.stripe_customer) params.customer = agency.stripe_customer;
  else params.customer_email = agency.email;
  const session = await stripe(env, 'checkout/sessions', params);
  return json({ url: session.url });
}

async function portal(request, env, appUrl) {
  const agency = await requireAgency(request, env);
  if (!agency.stripe_customer) throw new HttpError(400, 'No subscription yet.');
  const session = await stripe(env, 'billing_portal/sessions', { customer: agency.stripe_customer, return_url: `${appUrl}/app/` });
  return json({ url: session.url });
}

export async function verifyStripeSignature(payload, header, secret, toleranceSec = 300) {
  const parts = Object.fromEntries((header || '').split(',').map((kv) => kv.split('=')).filter((p) => p.length === 2).map(([k, v]) => [k, v]));
  const sigs = (header || '').split(',').filter((kv) => kv.startsWith('v1=')).map((kv) => kv.slice(3));
  if (!parts.t || !sigs.length) return false;
  if (Math.abs(now() - Number(parts.t)) > toleranceSec) return false;
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const expected = hex(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`${parts.t}.${payload}`)));
  return sigs.some((s) => s.length === expected.length && [...s].reduce((acc, c, i) => acc | (c.charCodeAt(0) ^ expected.charCodeAt(i)), 0) === 0);
}

async function stripeWebhook(request, env) {
  const payload = await request.text();
  if (!env.STRIPE_WEBHOOK_SECRET || !(await verifyStripeSignature(payload, request.headers.get('stripe-signature'), env.STRIPE_WEBHOOK_SECRET))) {
    throw new HttpError(400, 'Bad signature.');
  }
  const event = JSON.parse(payload);
  const obj = event.data?.object || {};
  if (event.type === 'checkout.session.completed' && obj.client_reference_id) {
    await env.DB.prepare('UPDATE agencies SET stripe_customer = ?, stripe_subscription = ? WHERE id = ?')
      .bind(obj.customer, obj.subscription, obj.client_reference_id).run();
  }
  if (event.type.startsWith('customer.subscription.')) {
    const active = ['active', 'trialing', 'past_due'].includes(obj.status) && event.type !== 'customer.subscription.deleted';
    const plan = active ? planForPrice(env, obj.items?.data?.[0]?.price?.id) || 'free' : 'free';
    const agencyId = obj.metadata?.agency_id;
    if (agencyId) {
      await env.DB.prepare('UPDATE agencies SET plan = ?, stripe_customer = ?, stripe_subscription = ? WHERE id = ?')
        .bind(plan, obj.customer, active ? obj.id : null, agencyId).run();
    } else {
      await env.DB.prepare('UPDATE agencies SET plan = ? WHERE stripe_customer = ?').bind(plan, obj.customer).run();
    }
  }
  return json({ received: true });
}

// ---------- router ----------

export async function handle(request, env) {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/+$/, '');
  const method = request.method;
  const appUrl = (env.APP_URL || url.origin).replace(/\/+$/, '');
  if (method === 'OPTIONS') return new Response(null, { status: 204, headers: CORS });
  try {
    if (path === '/api/audit' && method === 'GET') {
      if (!new URL(request.url).searchParams.get('w')) {
        const report = await audit(url.searchParams.get('url'));
        return json(report, 200, { ...CORS, 'cache-control': 'public, max-age=3600' });
      }
      if (!env.DB) throw new HttpError(503, 'Database not configured.');
      return await runAudit(request, env);
    }
    if (!env.DB) throw new HttpError(503, 'Database not configured.');
    if (path.startsWith('/api/widget/') && method === 'GET') return await widgetConfig(env, path.slice('/api/widget/'.length));
    if (path === '/api/lead' && method === 'POST') return await createLead(request, env);
    if (path === '/api/auth/request' && method === 'POST') return await requestLogin(request, env, appUrl);
    if (path === '/api/auth/verify' && method === 'POST') return await verifyLogin(request, env);
    if (path === '/api/auth/logout' && method === 'POST') return await logout(request, env);
    if (path === '/api/me' && method === 'GET') return await me(request, env);
    if (path === '/api/widgets' && method === 'POST') return await createWidget(request, env);
    if (path.startsWith('/api/widgets/') && method === 'POST') return await updateWidget(request, env, path.slice('/api/widgets/'.length));
    if (path === '/api/leads.csv' && method === 'GET') return await leadsCsv(request, env);
    if (path === '/api/billing/checkout' && method === 'POST') return await checkout(request, env, appUrl);
    if (path === '/api/billing/portal' && method === 'POST') return await portal(request, env, appUrl);
    if (path === '/api/stripe/webhook' && method === 'POST') return await stripeWebhook(request, env);
    throw new HttpError(404, 'Not found.');
  } catch (e) {
    if (e instanceof HttpError) return json({ error: e.message }, e.status, CORS);
    console.log(e.stack || e);
    return json({ error: 'Something went wrong. Please try again.' }, 500, CORS);
  }
}
