-- CiteKit D1 schema. Apply with: wrangler d1 execute citekit --file=aeo/schema.sql

CREATE TABLE IF NOT EXISTS agencies (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  plan TEXT NOT NULL DEFAULT 'free',           -- free | agency | pro
  stripe_customer TEXT,
  stripe_subscription TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS widgets (
  id TEXT PRIMARY KEY,                         -- public key used in the embed snippet
  agency_id TEXT NOT NULL REFERENCES agencies(id),
  name TEXT NOT NULL,                          -- agency brand shown on the report
  logo_url TEXT NOT NULL DEFAULT '',
  color TEXT NOT NULL DEFAULT '#1f5eff',
  headline TEXT NOT NULL DEFAULT 'Is your website visible to ChatGPT?',
  cta_text TEXT NOT NULL DEFAULT 'Book a free consultation',
  cta_url TEXT NOT NULL DEFAULT '',
  notify_email TEXT NOT NULL DEFAULT '',
  webhook_url TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS widgets_agency ON widgets(agency_id);

CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  widget_id TEXT NOT NULL REFERENCES widgets(id),
  email TEXT NOT NULL,
  site TEXT NOT NULL,
  score INTEGER,
  page_url TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS leads_widget ON leads(widget_id, created_at);

CREATE TABLE IF NOT EXISTS usage (
  widget_id TEXT NOT NULL,
  month TEXT NOT NULL,                         -- YYYY-MM
  audits INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (widget_id, month)
);

CREATE TABLE IF NOT EXISTS login_tokens (
  token_hash TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  expires_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS sessions (
  token_hash TEXT PRIMARY KEY,
  agency_id TEXT NOT NULL REFERENCES agencies(id),
  expires_at INTEGER NOT NULL
);
