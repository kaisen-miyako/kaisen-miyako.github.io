#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const glob = require('glob');

const ROOT = path.resolve(__dirname, '..');
const IMG_GLOB = path.join(ROOT, 'src', 'imgs', '**', '*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}');

async function processFile(file) {
  try {
    const img = sharp(file, { failOnError: false });
    const meta = await img.metadata();
    const maxWidth = 1200;
    if (meta.width && meta.width <= maxWidth) {
      if (/\.png$/i.test(file)) {
        await img.png({ quality: 80, compressionLevel: 8 }).toFile(file + '.tmp');
      } else {
        await img.jpeg({ quality: 80 }).toFile(file + '.tmp');
      }
    } else {
      if (/\.png$/i.test(file)) {
        await img.resize({ width: maxWidth }).png({ quality: 80, compressionLevel: 8 }).toFile(file + '.tmp');
      } else {
        await img.resize({ width: maxWidth }).jpeg({ quality: 80 }).toFile(file + '.tmp');
      }
    }
    await fs.promises.rename(file + '.tmp', file);
    console.log('optimized:', path.relative(ROOT, file));
  } catch (e) {
    console.error('failed:', file, e.message);
  }
}

const files = require('glob').sync(IMG_GLOB, { nodir: true });
(async () => {
  if (!files.length) {
    console.log('no images found');
    return;
  }
  for (const f of files) {
    try {
      const stat = await fs.promises.stat(f);
      if (stat.size < 1024) continue;
    } catch (e) {}
    // eslint-disable-next-line no-await-in-loop
    await processFile(f);
  }
  console.log('done');
})();
