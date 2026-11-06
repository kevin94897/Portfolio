-- Backup of every contact-form submission, independent of Brevo.
CREATE TABLE IF NOT EXISTS leads (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at  TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ', 'now')),
  nombre      TEXT    NOT NULL,
  apellidos   TEXT    NOT NULL DEFAULT '',
  email       TEXT    NOT NULL,
  asunto      TEXT    NOT NULL,
  message     TEXT    NOT NULL DEFAULT '',
  lang        TEXT    NOT NULL DEFAULT '',
  page        TEXT    NOT NULL DEFAULT '',
  ip_country  TEXT    NOT NULL DEFAULT '',
  -- Brevo outcome: 'pending' until known, then 'ok' or 'failed'
  notify_status TEXT  NOT NULL DEFAULT 'pending',
  list_status   TEXT  NOT NULL DEFAULT 'pending'
);
CREATE INDEX IF NOT EXISTS leads_created_at ON leads (created_at);
