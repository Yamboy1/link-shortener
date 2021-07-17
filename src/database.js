import Database, { SqliteError } from 'better-sqlite3';

import { runtimeError } from './errors.js';
import { createTableStatement, insertStatement, selectStatement } from './database_statements.js';

const db = new Database('link-shortener.db');

createTableStatement(db).run();

export function createLinkInDb(shortLink, url) {
  try {
    insertStatement(db).run(shortLink, url);
  } catch (e) {
    if (e instanceof SqliteError) {
      throw runtimeError('Short link already exists');
    }
  }
}

export function getUrlFromDb(shortLink) {
  const result = selectStatement(db).get(shortLink);
  return result?.url ?? null;
}