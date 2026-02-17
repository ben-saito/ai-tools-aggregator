#!/usr/bin/env node
/**
 * Generate Release Note Article
 * Integrates all release note utilities:
 * - Version importance evaluation
 * - Version comparison table
 * - Related articles linking
 * - Template-based article generation
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import {
  evaluateImportance,
  generateComparisonTable,
  generateComparisonTableEN,
  formatReleaseDate
} from './release-utils.mjs';
import {
  findPreviousReleases,
  findCompetingReleases,
  generateRelatedArticlesMarkdown
} from './find-related-releases.mjs';

const TEMPLATE_DIR = './templates';
const BLOG_DIR = './src/content/blog';

/**
 * Load release note template
 * @param {string} lang - Language (ja or en)
 * @returns {string} Template content
 */
function loadTemplate(lang) {
  const templatePath = join(TEMPLATE_DIR, `release-note-template-${lang}.md`);
  if (!existsSync(templatePath)) {
    throw new Error(`Template not found: ${templatePath}`);
  }
  return readFileSync(templatePath, 'utf-8');
}

/**
 * Generate release note article
 * @param {Object} options - Article options
 * @returns {Object} Generated articles
 */
export function generateReleaseArticle(options) {
  const {
    toolName,
    version,
    previousVersion,
    mainFeature,
    description,
    changes = {},
    category = '開発ツール',
    categoryEN = 'Development Tools',
    tags = [],
    featured = false,
    releaseDate = new Date(),
    // Optional schema data
    schemaData = {}
  } = options;
  
  const dateInfo = formatReleaseDate(releaseDate);
  const importance = previousVersion
    ? evaluateImportance(previousVersion, version)
    : { importance: 'unknown', priority: 2, shouldPublishImmediately: true };
  
  const toolNameDisplay = toolName.charAt(0).toUpperCase() + toolName.slice(1).replace(/-/g, ' ');
  const versionClean = version.replace(/^v/, '');
  
  // Generate Japanese article
  const templateJa = loadTemplate('ja');
  const comparisonTableJa = previousVersion
    ? generateComparisonTable(previousVersion, version, changes)
    : '';
  const relatedArticlesJa = generateRelatedArticlesMarkdown(toolName, versionClean, 'ja');
  
  let articleJa = templateJa
    .replace(/\[ツール名\]/g, toolNameDisplay)
    .replace(/\[バージョン\]/g, versionClean)
    .replace(/\[主要機能の簡潔な説明\]/g, mainFeature)
    .replace(/\[主要な変更点を1-2行で記述\]/g, description)
    .replace(/\[YYYY-MM-DDTHH:mm:ss\+09:00\]/g, dateInfo.publishedAt)
    .replace(/\[YYYY年MM月DD日\]/g, dateInfo.displayJa)
    .replace(/\[日付\]/g, dateInfo.displayJa)
    .replace(/\[true\/false\]/g, String(featured))
    .replace(/\[その他関連タグ\]/g, tags.join('", "'));
  
  // Insert comparison table if available
  if (comparisonTableJa) {
    articleJa = articleJa.replace(
      /## 前バージョンとの比較[\s\S]*?\n\n/,
      `## 前バージョンとの比較\n\n${comparisonTableJa}\n\n`
    );
  }
  
  // Append related articles
  if (relatedArticlesJa) {
    articleJa = articleJa.replace(
      /## 参考リンク/,
      `## 関連記事\n\n${relatedArticlesJa}\n## 参考リンク`
    );
  }
  
  // Generate English article
  const templateEn = loadTemplate('en');
  const comparisonTableEn = previousVersion
    ? generateComparisonTableEN(previousVersion, version, changes)
    : '';
  const relatedArticlesEn = generateRelatedArticlesMarkdown(toolName, versionClean, 'en');
  
  let articleEn = templateEn
    .replace(/\[Tool Name\]/g, toolNameDisplay)
    .replace(/\[Version\]/g, versionClean)
    .replace(/\[Concise Description of Key Features\]/g, mainFeature)
    .replace(/\[1-2 sentence summary of major changes\]/g, description)
    .replace(/\[YYYY-MM-DDTHH:mm:ss\+09:00\]/g, dateInfo.publishedAt)
    .replace(/\[Month DD, YYYY\]/g, dateInfo.displayEn)
    .replace(/\[Date\]/g, dateInfo.displayEn)
    .replace(/\[true\/false\]/g, String(featured))
    .replace(/\[Other Relevant Tags\]/g, tags.join('", "'));
  
  if (comparisonTableEn) {
    articleEn = articleEn.replace(
      /## Comparison with Previous Version[\s\S]*?\n\n/,
      `## Comparison with Previous Version\n\n${comparisonTableEn}\n\n`
    );
  }
  
  if (relatedArticlesEn) {
    articleEn = articleEn.replace(
      /## References/,
      `## Related Articles\n\n${relatedArticlesEn}\n## References`
    );
  }
  
  const fileNameBase = `${dateInfo.fileName}-${toolName}-v${versionClean.replace(/\./g, '-')}`;
  const filePathJa = join(BLOG_DIR, `${fileNameBase}-ja.md`);
  const filePathEn = join(BLOG_DIR, `${fileNameBase}.md`);
  
  return {
    ja: {
      content: articleJa,
      path: filePathJa,
      fileName: `${fileNameBase}-ja.md`
    },
    en: {
      content: articleEn,
      path: filePathEn,
      fileName: `${fileNameBase}.md`
    },
    importance,
    dateInfo
  };
}

/**
 * Save generated articles to files
 */
export function saveArticles(articles) {
  writeFileSync(articles.ja.path, articles.ja.content, 'utf-8');
  writeFileSync(articles.en.path, articles.en.content, 'utf-8');
  
  return {
    saved: [articles.ja.path, articles.en.path],
    importance: articles.importance
  };
}

// CLI usage
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  
  if (args.length < 4) {
    console.log('Usage: node generate-release-article.mjs <tool> <version> <previous-version> <main-feature>');
    console.log('Example: node generate-release-article.mjs cursor 2.2.0 2.1.5 "Improved AI completion speed"');
    process.exit(1);
  }
  
  const [toolName, version, previousVersion, mainFeature] = args;
  
  const articles = generateReleaseArticle({
    toolName,
    version,
    previousVersion,
    mainFeature,
    description: 'This release includes performance improvements and bug fixes.',
    tags: ['AI Coding', 'Release'],
    featured: true
  });
  
  console.log('Generated Articles:');
  console.log(`- Japanese: ${articles.ja.fileName}`);
  console.log(`- English: ${articles.en.fileName}`);
  console.log(`\nImportance: ${articles.importance.importance} (Priority: ${articles.importance.priority})`);
  console.log(`Publish Immediately: ${articles.importance.shouldPublishImmediately}`);
  
  const result = saveArticles(articles);
  console.log('\nSaved to:');
  result.saved.forEach(p => console.log(`  - ${p}`));
}
