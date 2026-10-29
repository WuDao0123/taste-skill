// End-to-end smoke test: node aeo/test/smoke.mjs http://localhost:8788  (server started with DEV=1)
import assert from 'node:assert/strict';

const base = process.argv[2] || 'http://localhost:8788';
let cookie = '';
async function call(path, opts = {}) {
  const res = await fetch(base + path, {
    method: opts.method || 'GET',
    headers: { 'content-type': 'application/json', ...(cookie ? { cookie } : {}) },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
  const set = res.headers.get('set-cookie');
  if (set) cookie = set.split(';')[0];
  const type = res.headers.get('content-type') || '';
  return { status: res.status, headers: res.headers, data: type.includes('json') ? await res.json() : await res.text() };
}

let r = await call('/api/me');
assert.equal(r.status, 401, 'logged out /api/me is 401');

r = await call('/api/auth/request', { method: 'POST', body: { email: 'not-an-email' } });
assert.equal(r.status, 400);

const email = `test${Date.now()}@agency-test.com`;
r = await call('/api/auth/request', { method: 'POST', body: { email } });
assert.equal(r.status, 200);
const token = new URL(r.data.devLink).searchParams.get('token');

r = await call('/api/auth/verify', { method: 'POST', body: { token } });
assert.equal(r.status, 200);
assert.ok(cookie.startsWith('ck_session='), 'session cookie set');

r = await call('/api/auth/verify', { method: 'POST', body: { token } });
assert.equal(r.status, 400, 'login token is single-use');

r = await call('/api/me');
assert.equal(r.status, 200);
assert.equal(r.data.agency.plan, 'free');
assert.equal(r.data.widgets.length, 1, 'new account gets one widget');
const wid = r.data.widgets[0].id;

r = await call('/api/widgets', { method: 'POST', body: { name: 'Second' } });
assert.equal(r.status, 403, 'free plan is limited to one widget');

r = await call('/api/widgets/' + wid, { method: 'POST', body: { name: 'Acme Growth', color: '#ff5500', cta_url: 'https://cal.com/acme', logo_url: 'javascript:alert(1)' } });
assert.equal(r.status, 400, 'non-http logo URL rejected');
r = await call('/api/widgets/' + wid, { method: 'POST', body: { name: 'Acme Growth', color: '#ff5500', cta_url: 'https://cal.com/acme', webhook_url: 'https://example.com/hook' } });
assert.equal(r.status, 200);

const savedCookie = cookie; cookie = '';
r = await call('/api/widget/' + wid);
assert.equal(r.status, 200);
assert.equal(r.data.name, 'Acme Growth');
assert.equal(r.data.branding, true);
assert.equal(r.headers.get('access-control-allow-origin'), '*');

r = await call('/api/widgets/' + wid, { method: 'POST', body: { name: 'Hijack' } });
assert.equal(r.status, 401, 'widget update needs a session');

r = await call(`/api/audit?w=${wid}&url=tally.so`);
assert.equal(r.status, 200);
assert.ok(r.data.score > 50);

r = await call('/api/audit?w=w_missing&url=tally.so');
assert.equal(r.status, 404);

r = await call('/api/lead', { method: 'POST', body: { w: wid, email: 'prospect@client.com', site: 'https://tally.so', score: 97, page_url: 'https://acme.test/audit' } });
assert.equal(r.status, 200);
await call('/api/lead', { method: 'POST', body: { w: wid, email: 'prospect@client.com', site: 'https://tally.so', score: 97 } });

cookie = savedCookie;
r = await call('/api/me');
assert.equal(r.data.leads.length, 1, 'duplicate lead within a day is not stored twice');
assert.equal(r.data.widgets[0].auditsThisMonth, 1);
assert.equal(r.data.widgets[0].webhook_url, '', 'webhook ignored on free plan');

r = await call('/api/leads.csv');
assert.ok(r.data.includes('prospect@client.com'));

r = await call('/api/billing/checkout', { method: 'POST', body: { plan: 'agency', interval: 'month' } });
assert.equal(r.status, 503, 'billing reports not configured without Stripe keys');

r = await call('/api/stripe/webhook', { method: 'POST', body: { type: 'customer.subscription.updated' } });
assert.equal(r.status, 400, 'unsigned webhook rejected');

r = await call('/api/auth/logout', { method: 'POST' });
r = await call('/api/me');
assert.equal(r.status, 401, 'logged out after logout');

console.log('smoke test passed');
