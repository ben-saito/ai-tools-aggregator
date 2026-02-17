#!/usr/bin/env node
/**
 * Release Notes Utilities
 * - Version importance evaluation
 * - Version comparison
 * - Release note generation helpers
 */

/**
 * Parse semantic version string
 * @param {string} version - Version string (e.g., "v2.1.3" or "2.1.3")
 * @returns {Object} Parsed version object
 */
export function parseVersion(version) {
  const cleaned = version.replace(/^v/, '');
  const [major, minor, patch] = cleaned.split('.').map(Number);
  
  return {
    major: major || 0,
    minor: minor || 0,
    patch: patch || 0,
    original: version,
    normalized: `${major}.${minor}.${patch}`
  };
}

/**
 * Evaluate version importance
 * @param {string} oldVersion - Previous version
 * @param {string} newVersion - New version
 * @returns {Object} Importance evaluation result
 */
export function evaluateImportance(oldVersion, newVersion) {
  const old = parseVersion(oldVersion);
  const current = parseVersion(newVersion);
  
  let importance = 'patch'; // Default
  let priority = 3; // 1=highest, 3=lowest
  let shouldPublishImmediately = false;
  
  if (current.major > old.major) {
    importance = 'major';
    priority = 1;
    shouldPublishImmediately = true;
  } else if (current.minor > old.minor) {
    importance = 'minor';
    priority = 2;
    shouldPublishImmediately = true;
  } else if (current.patch > old.patch) {
    importance = 'patch';
    priority = 3;
    shouldPublishImmediately = false; // Aggregate weekly
  }
  
  return {
    importance,
    priority,
    shouldPublishImmediately,
    oldVersion: old.normalized,
    newVersion: current.normalized,
    description: getImportanceDescription(importance)
  };
}

function getImportanceDescription(importance) {
  const descriptions = {
    major: 'Major version update with breaking changes or significant new features',
    minor: 'Minor version update with new features and improvements',
    patch: 'Patch version with bug fixes and minor improvements'
  };
  return descriptions[importance] || 'Unknown';
}

/**
 * Generate version comparison table
 * @param {string} oldVersion - Previous version
 * @param {string} newVersion - New version
 * @param {Object} changes - Change details
 * @returns {string} Markdown table
 */
export function generateComparisonTable(oldVersion, newVersion, changes = {}) {
  const old = parseVersion(oldVersion);
  const current = parseVersion(newVersion);
  
  let table = '| 項目 | v' + old.normalized + ' | v' + current.normalized + ' | 変更 |\n';
  table += '|------|-----------------|-----------------|------|\n';
  
  // Version numbers
  if (current.major !== old.major) {
    table += `| メジャーバージョン | ${old.major} | ${current.major} | +${current.major - old.major} |\n`;
  }
  if (current.minor !== old.minor) {
    table += `| マイナーバージョン | ${old.minor} | ${current.minor} | +${current.minor - old.minor} |\n`;
  }
  if (current.patch !== old.patch) {
    table += `| パッチバージョン | ${old.patch} | ${current.patch} | +${current.patch - old.patch} |\n`;
  }
  
  // Custom changes
  for (const [key, value] of Object.entries(changes)) {
    if (value.old !== undefined && value.new !== undefined) {
      const diff = typeof value.new === 'number' && typeof value.old === 'number'
        ? (value.new > value.old ? '+' : '') + (value.new - value.old)
        : '変更あり';
      table += `| ${key} | ${value.old} | ${value.new} | ${diff} |\n`;
    }
  }
  
  return table;
}

/**
 * Generate English version comparison table
 */
export function generateComparisonTableEN(oldVersion, newVersion, changes = {}) {
  const old = parseVersion(oldVersion);
  const current = parseVersion(newVersion);
  
  let table = '| Feature | v' + old.normalized + ' | v' + current.normalized + ' | Change |\n';
  table += '|---------|-----------------|-----------------|--------|\n';
  
  if (current.major !== old.major) {
    table += `| Major Version | ${old.major} | ${current.major} | +${current.major - old.major} |\n`;
  }
  if (current.minor !== old.minor) {
    table += `| Minor Version | ${old.minor} | ${current.minor} | +${current.minor - old.minor} |\n`;
  }
  if (current.patch !== old.patch) {
    table += `| Patch Version | ${old.patch} | ${current.patch} | +${current.patch - old.patch} |\n`;
  }
  
  for (const [key, value] of Object.entries(changes)) {
    if (value.old !== undefined && value.new !== undefined) {
      const diff = typeof value.new === 'number' && typeof value.old === 'number'
        ? (value.new > value.old ? '+' : '') + (value.new - value.old)
        : 'Changed';
      table += `| ${key} | ${value.old} | ${value.new} | ${diff} |\n`;
    }
  }
  
  return table;
}

/**
 * Format release date for article
 */
export function formatReleaseDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return {
    fileName: `${year}-${month}-${day}`,
    publishedAt: `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+09:00`,
    displayJa: `${year}年${parseInt(month)}月${parseInt(day)}日`,
    displayEn: new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  };
}

// CLI usage example
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log('Usage: node release-utils.mjs <old-version> <new-version>');
    console.log('Example: node release-utils.mjs v2.1.0 v2.2.0');
    process.exit(1);
  }
  
  const [oldVer, newVer] = args;
  const evaluation = evaluateImportance(oldVer, newVer);
  
  console.log('Version Importance Evaluation:');
  console.log(JSON.stringify(evaluation, null, 2));
  console.log('\nComparison Table (Japanese):');
  console.log(generateComparisonTable(oldVer, newVer));
  console.log('\nComparison Table (English):');
  console.log(generateComparisonTableEN(oldVer, newVer));
}
