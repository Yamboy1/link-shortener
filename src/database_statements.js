export const createTableStatement = db => db.prepare(
  `
  CREATE TABLE IF NOT EXISTS links (
    link_id    INTEGER PRIMARY KEY AUTOINCREMENT,
    short_link TEXT    NOT NULL UNIQUE,
    url        TEXT    NOT NULL
  );
  `
);

export const insertStatement = db => db.prepare(
  'INSERT INTO links (short_link, url) VALUES (?, ?)'
);

export const selectStatement = db => db.prepare('SELECT url FROM links WHERE short_link = ?');