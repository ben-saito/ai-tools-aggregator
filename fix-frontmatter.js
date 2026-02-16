const fs = require('fs');
const path = require('path');

// カテゴリマッピング（タグから推測）
const categoryMap = {
  '比較': '比較分析',
  '業界動向': '業界動向',
  'トレンド': '業界動向',
  '規制': 'ガイド',
  'ガイド': 'ガイド',
  '技術解説': '技術解説',
  '活用': 'ガイド',
  'エンタープライズ': '業界動向',
  'ビジネス': '比較分析',
  '学生': '比較分析',
  'デザイナー': '比較分析',
  'マーケター': '比較分析',
  'エンジニア': '比較分析',
  'コーディング': '比較分析',
  '選び方': 'ガイド',
  'industry overview': 'Industry Trends',
  'code development': 'Comparison',
  'image generation': 'Comparison',
  'choose': 'Guide'
};

function getCategory(tags, title) {
  // タグから推測
  for (const tag of tags) {
    if (categoryMap[tag]) return categoryMap[tag];
  }
  
  // タイトルから推測
  const titleLower = title.toLowerCase();
  if (titleLower.includes('比較') || titleLower.includes('vs') || titleLower.includes('comparison')) {
    return title.includes('-ja') ? '比較分析' : 'Comparison';
  }
  if (titleLower.includes('トレンド') || titleLower.includes('trends') || titleLower.includes('動向')) {
    return title.includes('-ja') ? '業界動向' : 'Industry Trends';
  }
  if (titleLower.includes('選び方') || titleLower.includes('how to') || titleLower.includes('guide')) {
    return title.includes('-ja') ? 'ガイド' : 'Guide';
  }
  if (titleLower.includes('仕組み') || titleLower.includes('とは') || titleLower.includes('understanding')) {
    return title.includes('-ja') ? '技術解説' : 'Technical';
  }
  
  return title.includes('-ja') ? 'ガイド' : 'Guide';
}

function fixFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  if (lines[0] !== '---') return; // Not a frontmatter file
  
  let inFrontmatter = true;
  let frontmatterEnd = 0;
  let frontmatter = {};
  let bodyStart = 0;
  
  // Parse frontmatter
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === '---') {
      frontmatterEnd = i;
      bodyStart = i + 1;
      break;
    }
    
    const match = lines[i].match(/^(\w+):\s*(.+)$/);
    if (match) {
      const [, key, value] = match;
      if (key === 'tags') {
        // Parse tags array
        frontmatter[key] = value.replace(/^\[|\]$/g, '').split(',').map(t => t.trim().replace(/^"|"$/g, ''));
      } else {
        frontmatter[key] = value.replace(/^"|"$/g, '');
      }
    }
  }
  
  // Check if already has publishedAt
  if (frontmatter.publishedAt) {
    console.log(`Skipping ${path.basename(filePath)} - already has publishedAt`);
    return;
  }
  
  // Fix frontmatter
  const isJapanese = filePath.includes('-ja.md');
  const lang = isJapanese ? 'ja' : 'en';
  const author = isJapanese ? 'AI Tools Hub 編集部' : 'AI Tools Hub Editorial Team';
  
  // Convert pubDate to publishedAt
  let publishedAt = frontmatter.pubDate || '2026-02-14';
  if (!publishedAt.includes('T')) {
    publishedAt = `${publishedAt}T16:00:00+09:00`;
  }
  
  // Determine category
  const category = getCategory(frontmatter.tags || [], path.basename(filePath));
  
  // Generate ogImage path
  const ogImage = frontmatter.image || `/images/blog/${path.basename(filePath, '.md')}.png`;
  
  // Build new frontmatter
  const newFrontmatter = [
    '---',
    `title: "${frontmatter.title}"`,
    `description: "${frontmatter.description}"`,
    `publishedAt: "${publishedAt}"`,
    `author: "${author}"`,
    `category: "${category}"`,
    `tags: [${frontmatter.tags.map(t => `"${t}"`).join(', ')}]`,
    `featured: false`,
    `lang: "${lang}"`,
    `seo:`,
    `  keywords: "${frontmatter.tags.join(', ')}"`,
    `  ogImage: "${ogImage}"`,
    '---'
  ];
  
  // Rebuild file
  const body = lines.slice(bodyStart).join('\n');
  const newContent = newFrontmatter.join('\n') + '\n' + body;
  
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`Fixed: ${path.basename(filePath)}`);
}

// Find all new blog posts (2026-02-14 created)
const blogDir = path.join(__dirname, 'src/content/blog');
const files = fs.readdirSync(blogDir);

const newFiles = files.filter(f => {
  if (!f.endsWith('.md')) return false;
  const filePath = path.join(blogDir, f);
  const stat = fs.statSync(filePath);
  const today = new Date('2026-02-14');
  return stat.mtime >= today;
});

console.log(`Found ${newFiles.length} new files to fix:`);
newFiles.forEach(f => {
  const filePath = path.join(blogDir, f);
  try {
    fixFrontmatter(filePath);
  } catch (err) {
    console.error(`Error fixing ${f}:`, err.message);
  }
});

console.log('Done!');
