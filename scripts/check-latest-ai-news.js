#!/usr/bin/env node

/**
 * AI News Monitor - Automatically check for latest AI model releases
 * 
 * Purpose:
 * - Check Anthropic, OpenAI, Google news pages for latest model releases
 * - Compare with current article information
 * - Flag articles that need updating
 * 
 * Usage:
 * - Run daily via cron job
 * - Output: JSON file with outdated articles + recommended updates
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Configuration
const NEWS_SOURCES = {
  anthropic: 'https://www.anthropic.com/news',
  openai: 'https://openai.com/news',
  google: 'https://blog.google/technology/ai/'
};

const BLOG_DIR = join(process.cwd(), 'src/content/blog');

// Articles to monitor
const MONITORED_ARTICLES = [
  'chatgpt-vs-claude-comparison-ja.md',
  'chatgpt-vs-claude-comparison.md',
  'top-10-free-ai-tools-2026-ja.md',
  'top-10-free-ai-tools-2026.md'
];

// Known latest models (update this when new models are released)
const LATEST_MODELS = {
  claude: 'Claude Opus 4.6',
  claudeReleaseDate: '2026-02-05',
  gpt: 'GPT-4 Turbo',
  gptReleaseDate: '2024-04-01',
  gemini: 'Gemini 1.5 Flash',
  geminiReleaseDate: '2025-11-01'
};

/**
 * Check if article contains outdated model names
 */
function checkArticleForOutdatedInfo(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const issues = [];

  // Check for outdated Claude versions
  if (content.includes('Claude 3.5 Sonnet') && !content.includes('Claude Opus 4.6')) {
    issues.push({
      type: 'outdated_model',
      current: 'Claude 3.5 Sonnet',
      latest: LATEST_MODELS.claude,
      releaseDate: LATEST_MODELS.claudeReleaseDate
    });
  }

  // Check for outdated context window info
  if (content.includes('200,000トークン') || content.includes('200,000 tokens')) {
    if (!content.includes('1,000,000トークン') && !content.includes('1,000,000 tokens')) {
      issues.push({
        type: 'outdated_spec',
        field: 'context_window',
        current: '200,000 tokens',
        latest: '1,000,000 tokens (Claude Opus 4.6)'
      });
    }
  }

  // Check for outdated API pricing
  if (content.includes('$3') && content.includes('$15') && !content.includes('$5')) {
    issues.push({
      type: 'outdated_pricing',
      field: 'api_price',
      current: '$3/$15 per million tokens',
      latest: '$5/$25 per million tokens (Claude Opus 4.6)'
    });
  }

  return issues;
}

/**
 * Main function
 */
function main() {
  console.log('🔍 Checking articles for outdated information...\n');

  const results = {
    checkDate: new Date().toISOString(),
    latestModels: LATEST_MODELS,
    articlesToUpdate: []
  };

  for (const article of MONITORED_ARTICLES) {
    const filePath = join(BLOG_DIR, article);
    
    try {
      const issues = checkArticleForOutdatedInfo(filePath);

      if (issues.length > 0) {
        console.log(`⚠️  ${article}:`);
        issues.forEach(issue => {
          console.log(`   - ${issue.type}: ${issue.current} → ${issue.latest}`);
        });
        console.log('');

        results.articlesToUpdate.push({
          file: article,
          issues: issues
        });
      } else {
        console.log(`✅ ${article}: Up to date`);
      }
    } catch (error) {
      console.error(`❌ Error checking ${article}:`, error.message);
    }
  }

  // Write results
  const outputPath = join(process.cwd(), 'scripts/outdated-articles.json');
  writeFileSync(outputPath, JSON.stringify(results, null, 2));

  console.log(`\n📄 Results written to: ${outputPath}`);
  
  if (results.articlesToUpdate.length > 0) {
    console.log(`\n⚠️  ${results.articlesToUpdate.length} article(s) need updating!`);
    process.exit(1); // Exit with error code to trigger alert
  } else {
    console.log('\n✅ All articles are up to date!');
    process.exit(0);
  }
}

main();
