#!/usr/bin/env node
import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

async function markdownFiles(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) result.push(...await markdownFiles(path));
    else if (entry.name.endsWith('.md')) result.push(path);
  }
  return result;
}

const root = fileURLToPath(new URL('..', import.meta.url));
const files = [...await markdownFiles(join(root, 'life')), ...await markdownFiles(join(root, 'study'))];
if (files.length === 0) throw new Error('no guide articles found');
for (const file of files) {
  const text = await readFile(file, 'utf8');
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) throw new Error(`${file}: missing front matter`);
  const fields = Object.fromEntries(match[1].split('\n').map((line) => {
    const separator = line.indexOf(':');
    return [line.slice(0, separator), line.slice(separator + 1).trim()];
  }));
  for (const field of ['title', 'source', 'updated_at']) if (!fields[field]) throw new Error(`${file}: missing ${field}`);
  if (Number.isNaN(Date.parse(fields.updated_at))) throw new Error(`${file}: invalid updated_at`);
  if (fields.expires_at && Number.isNaN(Date.parse(fields.expires_at))) throw new Error(`${file}: invalid expires_at`);
}
console.log(`validated ${files.length} guide article(s)`);
