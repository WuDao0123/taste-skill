// Cloudflare Pages Function: GET /api/audit?url=example.com
import { audit } from '../../lib/audit.mjs';

const HEADERS = { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, max-age=3600' };

export async function onRequestGet({ request }) {
  const target = new URL(request.url).searchParams.get('url');
  try {
    const report = await audit(target);
    return new Response(JSON.stringify(report), { headers: HEADERS });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message || 'Audit failed.' }), { status: 400, headers: { ...HEADERS, 'cache-control': 'no-store' } });
  }
}
