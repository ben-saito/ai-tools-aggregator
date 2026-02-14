#!/usr/bin/env node
/**
 * AIツールランキング生成スクリプト
 * 
 * 計算対象:
 * - 人気度スコア (30%)
 * - 機能性スコア (25%)
 * - コスパスコア (20%)
 * - 開発活発度スコア (15%)
 * - ユーザー評価スコア (10%)
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// スコア重み付け
const WEIGHTS = {
  popularity: 0.30,    // 人気度
  functionality: 0.25, // 機能性
  value: 0.20,         // コスパ
  development: 0.15,   // 開発活発度
  userRating: 0.10     // ユーザー評価
};

/**
 * ツールスコア計算
 * @param {Object} tool - ツールデータ
 * @returns {Object} スコア付きツール
 */
function calculateScore(tool) {
  // 現在のデータ構造では詳細スコアがないため、基本属性から推定
  const scores = {
    popularity: tool.featured ? 80 : 50,
    functionality: tool.tags?.length * 10 || 50,
    value: tool.pricing === 'free' ? 100 : tool.pricing === 'freemium' ? 75 : 50,
    development: 70, // デフォルト値（将来的にGitHub APIなどから取得）
    userRating: tool.premium ? 80 : 70
  };

  // 総合スコア計算
  const totalScore = Object.keys(WEIGHTS).reduce((sum, key) => {
    return sum + (scores[key] * WEIGHTS[key]);
  }, 0);

  return {
    ...tool,
    scores,
    totalScore: Math.round(totalScore * 10) / 10
  };
}

/**
 * カテゴリ別ランキング生成
 * @param {Array} tools - 全ツールデータ
 * @returns {Object} カテゴリ別ランキング
 */
function generateCategoryRankings(tools) {
  const categories = {};
  
  tools.forEach(tool => {
    const category = tool.category;
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(tool);
  });

  // 各カテゴリをスコア順にソート
  Object.keys(categories).forEach(category => {
    categories[category].sort((a, b) => b.totalScore - a.totalScore);
  });

  return categories;
}

/**
 * 前回ランキングとの比較
 * @param {Array} currentRanking - 現在のランキング
 * @param {Array} previousRanking - 前回のランキング
 * @returns {Array} 順位変動情報
 */
function compareRankings(currentRanking, previousRanking) {
  if (!previousRanking) return [];

  const changes = [];
  const prevMap = new Map(previousRanking.map((tool, index) => [tool.id, index + 1]));

  currentRanking.forEach((tool, index) => {
    const currentRank = index + 1;
    const previousRank = prevMap.get(tool.id);

    if (previousRank) {
      const change = previousRank - currentRank;
      if (Math.abs(change) >= 3) { // 3位以上の変動のみ記録
        changes.push({
          id: tool.id,
          name: tool.name,
          currentRank,
          previousRank,
          change
        });
      }
    } else {
      // 新規エントリ
      changes.push({
        id: tool.id,
        name: tool.name,
        currentRank,
        previousRank: null,
        change: 'new'
      });
    }
  });

  return changes;
}

/**
 * メイン処理
 */
async function main() {
  try {
    const dataDir = path.join(__dirname, '../data');
    const historyDir = path.join(__dirname, '../data/history');
    
    // ツールデータ読み込み
    const toolsData = JSON.parse(
      await fs.readFile(path.join(dataDir, 'tools.json'), 'utf-8')
    );

    // スコア計算
    const scoredTools = toolsData.map(calculateScore);

    // 総合ランキング（トップ50）
    const overallRanking = scoredTools
      .sort((a, b) => b.totalScore - a.totalScore)
      .slice(0, 50);

    // カテゴリ別ランキング（各カテゴリトップ10）
    const categoryRankings = generateCategoryRankings(scoredTools);
    Object.keys(categoryRankings).forEach(category => {
      categoryRankings[category] = categoryRankings[category].slice(0, 10);
    });

    // 前回ランキング読み込み（存在する場合）
    let previousRanking = null;
    try {
      const files = await fs.readdir(historyDir);
      const rankingFiles = files
        .filter(f => f.startsWith('ranking-') && f.endsWith('.json'))
        .sort()
        .reverse();
      
      if (rankingFiles.length > 0) {
        const prevData = JSON.parse(
          await fs.readFile(path.join(historyDir, rankingFiles[0]), 'utf-8')
        );
        previousRanking = prevData.overall;
      }
    } catch (err) {
      // 前回ランキングなし（初回実行）
    }

    // 順位変動分析
    const changes = compareRankings(overallRanking, previousRanking);

    // ランキングデータ生成
    const now = new Date();
    // Asia/Tokyo タイムゾーンで日付取得
    const dateStr = now.toLocaleDateString('ja-JP', {
      timeZone: 'Asia/Tokyo',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).split('/').join('-'); // YYYY-MM-DD
    const ranking = {
      generatedAt: now.toISOString(),
      date: dateStr,
      overall: overallRanking,
      categories: categoryRankings,
      changes: changes,
      metadata: {
        totalTools: scoredTools.length,
        weights: WEIGHTS
      }
    };

    // ファイル出力
    const outputPath = path.join(dataDir, `ranking-${dateStr}.json`);
    await fs.writeFile(outputPath, JSON.stringify(ranking, null, 2));

    // 履歴ディレクトリ作成（YYYY-MM/）
    const yearMonth = dateStr.substring(0, 7); // YYYY-MM
    const monthHistoryDir = path.join(historyDir, yearMonth);
    await fs.mkdir(monthHistoryDir, { recursive: true });

    // アーカイブ
    const archivePath = path.join(monthHistoryDir, `ranking-${dateStr}.json`);
    await fs.writeFile(archivePath, JSON.stringify(ranking, null, 2));

    // 大きな順位変動があれば報告
    const significantChanges = changes.filter(c => 
      c.change === 'new' || Math.abs(c.change) >= 5
    );

    if (significantChanges.length > 0) {
      console.log('REPORT_CHANGES');
      console.log(JSON.stringify(significantChanges, null, 2));
    } else {
      console.log('OK');
    }

  } catch (error) {
    console.error('ERROR:', error.message);
    process.exit(1);
  }
}

main();
