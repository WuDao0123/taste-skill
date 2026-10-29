#!/usr/bin/env node
// Usage: node aeo/bin/audit.mjs example.com [--json]
import { audit } from '../lib/audit.mjs';

const [target, flag] = process.argv.slice(2);
if (!target) {
  console.error('Usage: node aeo/bin/audit.mjs <url> [--json]');
  process.exit(1);
}
const r = await audit(target);
if (flag === '--json') {
  console.log(JSON.stringify(r, null, 2));
} else {
  console.log(`${r.origin}  score ${r.score}/100  grade ${r.grade}`);
  for (const c of r.checks) {
    console.log(`  ${String(c.score).padStart(2)}/${c.weight}  ${c.label}: ${c.detail}`);
    if (c.fix) console.log(`         fix: ${c.fix}`);
  }
}
