#!/usr/bin/env node
import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';

const PUBLIC_DIR = 'public';
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png'];
const MAX_WIDTH = 1920; // Maximum width for images
const QUALITY = 85; // WebP quality (1-100)

async function optimizeImage(filePath) {
  try {
    const ext = extname(filePath).toLowerCase();
    if (!SUPPORTED_FORMATS.includes(ext)) {
      return;
    }

    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    console.log(`Optimizing: ${filePath} (${metadata.width}x${metadata.height})`);

    // Create WebP version
    const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    let pipeline = sharp(filePath);
    
    // Resize if too large
    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    // Convert to WebP
    await pipeline
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    const originalSize = (await stat(filePath)).size;
    const webpSize = (await stat(webpPath)).size;
    const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);

    console.log(`  → Created ${webpPath} (${(webpSize / 1024).toFixed(1)}KB, ${savings}% smaller)`);

  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error.message);
  }
}

async function walkDir(dir) {
  const files = await readdir(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    const fileStat = await stat(filePath);
    
    if (fileStat.isDirectory()) {
      await walkDir(filePath);
    } else if (fileStat.isFile()) {
      await optimizeImage(filePath);
    }
  }
}

console.log('🖼️  Image Optimization Tool\n');
console.log(`Scanning ${PUBLIC_DIR} directory...\n`);

await walkDir(PUBLIC_DIR);

console.log('\n✅ Image optimization complete!');
