// Cloudflare Pages Function: every /api/* route goes through the CiteKit router.
import { handle } from '../../lib/app.mjs';

export const onRequest = ({ request, env }) => handle(request, env);
