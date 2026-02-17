#!/usr/bin/env node
/**
 * Find Related Release Articles
 * - Find previous release notes for the same tool
 * - Find competing tools' release notes
 */

import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const BLOG_DIR = './src/content/blog';
const TOOL_COMPETITORS = {
  'cursor': ['claude-code', 'github-copilot', 'codeium'],
  'claude-code': ['cursor', 'github-copilot', 'codeium'],
  'github-copilot': ['cursor', 'claude-code', 'codeium'],
  'codeium': ['cursor', 'claude-code', 'github-copilot'],
  'windsurf': ['cursor', 'claude-code'],
  'aider': ['cursor', 'claude-code']
};

/**
 * Extract tool name from filename or content
 * @param {string} filename - Article filename
 * @returns {string|null} Tool name
 */
function extractToolName(filename) {
  // Pattern: YYYY-MM-DD-toolname-vX-X-X.md or YYYY-MM-DD-toolname-vX-X-X-ja.md
  const match = filename.match(/\d{4}-\d{2}-\d{2}-(.+?)-v\d/);
  if (match) {
    return match[1];
  }
  
  // Check for common tool names
  for (const tool of Object.keys(TOOL_COMPETITORS)) {
    if (filename.includes(tool)) {
      return tool;
    }
  }
  
  return null;
}

/**
 * Extract version from filename
 * @param {string} filename
 * @returns {string|null}
 */
function extractVersion(filename) {
  const match = filename.match(/v(\d+[-_.]\d+[-_.]\d+)/);
  return match ? match[1].replace(/[-_]/g, '.') : null;
}

/**
 * Find previous releases for the same tool
 * @param {string} toolName - Tool name
 * @param {string} currentVersion - Current version
 * @param {string} lang - Language (ja or en)
 * @returns {Array} Previous release articles
 */
export function findPreviousReleases(toolName, currentVersion, lang = 'ja') {
  const files = readdirSync(BLOG_DIR);
  const langSuffix = lang === 'ja' ? '-ja.md' : '.md';
  
  const previousReleases = files
    .filter(f => {
      if (!f.endsWith(langSuffix)) return false;
      if (lang === 'ja' && !f.endsWith('-ja.md')) return false;
      if (lang === 'en' && f.endsWith('-ja.md')) return false;
      
      const fileTool = extractToolName(f);
      return fileTool === toolName;
    })
    .map(f => {
      const version = extractVersion(f);
      const slug = f.replace(/\.md$/, '').replace(/-ja$/, '');
      return { filename: f, version, slug };
    })
    .filter(r => r.version && r.version !== currentVersion)
    .sort((a, b) => {
      // Sort by version descending
      const [aMajor, aMinor, aPatch] = a.version.split('.').map(Number);
      const [bMajor, bMinor, bPatch] = b.version.split('.').map(Number);
      
      if (aMajor !== bMajor) return bMajor - aMajor;
      if (aMinor !== bMinor) return bMinor - aMinor;
      return bPatch - aPatch;
    });
  
  return previousReleases.slice(0, 5); // Top 5
}

/**
 * Find competing tools' latest releases
 * @param {string} toolName - Current tool name
 * @param {string} lang - Language
 * @returns {Array} Competing tools' releases
 */
export function findCompetingReleases(toolName, lang = 'ja') {
  const competitors = TOOL_COMPETITORS[toolName] || [];
  const files = readdirSync(BLOG_DIR);
  const langSuffix = lang === 'ja' ? '-ja.md' : '.md';
  
  const competingReleases = [];
  
  for (const competitor of competitors) {
    const competitorFiles = files
      .filter(f => {
        if (!f.endsWith(langSuffix)) return false;
        if (lang === 'ja' && !f.endsWith('-ja.md')) return false;
        if (lang === 'en' && f.endsWith('-ja.md')) return false;
        
        const fileTool = extractToolName(f);
        return fileTool === competitor;
      })
      .map(f => {
        const version = extractVersion(f);
        const slug = f.replace(/\.md$/, '').replace(/-ja$/, '');
        const date = f.substring(0, 10); // YYYY-MM-DD
        return { filename: f, version, slug, date, tool: competitor };
      })
      .sort((a, b) => b.date.localeCompare(a.date));
    
    if (competitorFiles.length > 0) {
      competingReleases.push(competitorFiles[0]); // Latest only
    }
  }
  
  return competingReleases;
}

/**
 * Generate related articles markdown list
 * @param {string} toolName
 * @param {string} currentVersion
 * @param {string} lang
 * @returns {string} Markdown list
 */
export function generateRelatedArticlesMarkdown(toolName, currentVersion, lang = 'ja') {
  const previous = findPreviousReleases(toolName, currentVersion, lang);
  const competing = findCompetingReleases(toolName, lang);
  
  let markdown = '';
  
  if (previous.length > 0) {
    markdown += lang === 'ja' ? '### 過去のリリース\n\n' : '### Previous Releases\n\n';
    for (const release of previous) {
      const url = `/${lang === 'ja' ? 'ja/' : ''}blog/${release.slug}`;
      const toolDisplay = toolName.charAt(0).toUpperCase() + toolName.slice(1);
      markdown += `- [${toolDisplay} v${release.version}](${url})\n`;
    }
    markdown += '\n';
  }
  
  if (competing.length > 0) {
    markdown += lang === 'ja' ? '### 競合ツールの最新リリース\n\n' : '### Competing Tools - Latest Releases\n\n';
    for (const release of competing) {
      const url = `/${lang === 'ja' ? 'ja/' : ''}blog/${release.slug}`;
      const toolDisplay = release.tool.charAt(0).toUpperCase() + release.tool.slice(1);
      markdown += `- [${toolDisplay} v${release.version}](${url})\n`;
    }
  }
  
  return markdown;
}

// CLI usage
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log('Usage: node find-related-releases.mjs <tool-name> <version> [lang]');
    console.log('Example: node find-related-releases.mjs cursor 2.2.0 ja');
    process.exit(1);
  }
  
  const [toolName, version, lang = 'ja'] = args;
  
  console.log(`\nFinding related releases for ${toolName} v${version} (${lang})...\n`);
  console.log(generateRelatedArticlesMarkdown(toolName, version, lang));
}
