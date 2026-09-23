/**
 * Strips everything but the coming-soon page out of dist/ for the live build.
 *
 * Removes the other pages' HTML, then any image in _astro/ that the remaining
 * page doesn't reference. JS and CSS are left alone: they import each other,
 * and the saving isn't worth the risk of cutting a chunk the page needs.
 */
import fs from 'node:fs';
import path from 'node:path';

const dist = 'dist';
const html = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

// 1. Other pages
let pages = 0;
for (const entry of fs.readdirSync(dist, { withFileTypes: true })) {
  if (entry.isDirectory() && entry.name !== '_astro') {
    fs.rmSync(path.join(dist, entry.name), { recursive: true, force: true });
    pages++;
  }
}

// 2. Unreferenced images
const images = /\.(png|jpe?g|webp|avif|gif|svg)$/i;
let bytes = 0;
let removed = 0;
for (const file of fs.readdirSync(path.join(dist, '_astro'))) {
  if (!images.test(file) || html.includes(file)) continue;
  const full = path.join(dist, '_astro', file);
  bytes += fs.statSync(full).size;
  fs.rmSync(full);
  removed++;
}

console.log(`prune-live: removed ${pages} page(s), ${removed} image(s), ${(bytes / 1024 / 1024).toFixed(1)} MB`);
