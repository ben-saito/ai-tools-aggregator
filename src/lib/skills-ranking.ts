// Skills Ranking - GitHub API連携
export interface SkillRepo {
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  open_issues_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  topics: string[];
  language: string;
  license: { name: string } | null;
}

export interface SkillRanking {
  rank: number;
  name: string;
  description: string;
  descriptionJa?: string; // 日本語翻訳
  url: string;
  stars: number;
  forks: number;
  watchers: number;
  issues: number;
  topics: string[];
  language: string;
  license: string;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
  score: number;
  category?: string; // スキルの用途カテゴリ
}

export type SkillCategory = 
  | 'communication' // コミュニケーション（Slack、Discord等）
  | 'development'   // 開発（GitHub、コーディング等）
  | 'productivity'  // 生産性（Notion、ドキュメント等）
  | 'ai'            // AI/ML（Claude、OpenAI等）
  | 'automation'    // 自動化（ワークフロー等）
  | 'data'          // データ分析
  | 'media'         // メディア（画像、動画等）
  | 'other';        // その他

export const CATEGORY_LABELS: Record<SkillCategory, { en: string; ja: string }> = {
  communication: { en: 'Communication', ja: 'コミュニケーション' },
  development: { en: 'Development', ja: '開発' },
  productivity: { en: 'Productivity', ja: '生産性' },
  ai: { en: 'AI/ML', ja: 'AI/機械学習' },
  automation: { en: 'Automation', ja: '自動化' },
  data: { en: 'Data Analysis', ja: 'データ分析' },
  media: { en: 'Media', ja: 'メディア' },
  other: { en: 'Other', ja: 'その他' }
};

const GITHUB_API = 'https://api.github.com';
const SEARCH_QUERY = 'clawdbot skill OR clawdhub skill OR openclaw skill';
const CACHE_DURATION = 3600000; // 1時間

let cachedSkills: SkillRanking[] | null = null;
let cacheTime: number = 0;

/**
 * GitHub APIでskillsリポジトリを取得（検索API使用）
 */
async function fetchSkillsFromGitHub(): Promise<SkillRepo[]> {
  try {
    // GitHub Search APIでskillsを検索
    const response = await fetch(
      `${GITHUB_API}/search/repositories?q=${encodeURIComponent(SEARCH_QUERY)}&sort=stars&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          // GitHub Personal Access Tokenがあれば追加（レート制限緩和）
          // 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        }
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    const repos: SkillRepo[] = data.items || [];
    
    // skillsのみフィルタリング（より厳格に）
    return repos.filter(repo => 
      repo.topics.includes('skill') || 
      repo.topics.includes('clawdbot-skill') ||
      repo.topics.includes('clawdhub-skill') ||
      repo.topics.includes('openclaw-skill') ||
      repo.name.toLowerCase().includes('skill')
    );
  } catch (error) {
    console.error('Error fetching skills from GitHub:', error);
    return [];
  }
}

/**
 * スキルのカテゴリ判定（topics、name、descriptionから推測）
 */
function determineCategory(repo: SkillRepo): SkillCategory {
  const text = `${repo.name} ${repo.description} ${repo.topics.join(' ')}`.toLowerCase();
  
  // キーワードベースで判定
  if (text.match(/slack|discord|telegram|whatsapp|message|chat|communication/)) {
    return 'communication';
  }
  if (text.match(/github|git|code|coding|development|programming|vscode/)) {
    return 'development';
  }
  if (text.match(/notion|document|note|productivity|calendar|task/)) {
    return 'productivity';
  }
  if (text.match(/claude|openai|gpt|ai|ml|machine learning|llm|model/)) {
    return 'ai';
  }
  if (text.match(/automation|workflow|zapier|n8n|cron|schedule/)) {
    return 'automation';
  }
  if (text.match(/data|analytics|analysis|database|sql|chart|graph/)) {
    return 'data';
  }
  if (text.match(/image|video|audio|media|photo|music/)) {
    return 'media';
  }
  
  return 'other';
}

/**
 * 英語説明を日本語に翻訳（簡易版 - 実際にはClaude APIを使用）
 */
async function translateToJapanese(text: string): Promise<string> {
  if (!text || text.length === 0) return '';
  
  // Claude APIで翻訳（本番実装）
  // 現時点では簡易実装として、キャッシュから返す
  // TODO: Anthropic APIまたはOpenAI APIで翻訳実装
  
  // 簡易翻訳マッピング（よくあるフレーズのみ）
  const translations: Record<string, string> = {
    'Skill for': '〜用スキル',
    'Integration with': '〜との統合',
    'Automate': '自動化',
    'Automation for': '〜の自動化',
    'Connect': '接続',
    'Send messages': 'メッセージ送信',
    'Fetch data': 'データ取得',
    'Analyze': '分析',
  };
  
  let translated = text;
  for (const [en, ja] of Object.entries(translations)) {
    translated = translated.replace(new RegExp(en, 'gi'), ja);
  }
  
  // 実際のAPIコール実装が必要な場合
  return translated;
}

/**
 * スコア計算（スター数、フォーク数、更新日時などから総合スコア）
 */
function calculateScore(repo: SkillRepo): number {
  const stars = repo.stargazers_count;
  const forks = repo.forks_count;
  const watchers = repo.watchers_count;
  
  // 最終更新からの経過日数（新しいほど高スコア）
  const daysSinceUpdate = (Date.now() - new Date(repo.pushed_at).getTime()) / (1000 * 60 * 60 * 24);
  const recencyBonus = Math.max(0, 100 - daysSinceUpdate) / 100;
  
  // スコア計算式（調整可能）
  const score = (stars * 10) + (forks * 5) + (watchers * 2) + (recencyBonus * 50);
  
  return Math.round(score);
}

/**
 * Skills Ranking取得（メイン関数）
 */
export async function getSkillsRanking(): Promise<SkillRanking[]> {
  // キャッシュチェック
  if (cachedSkills && (Date.now() - cacheTime) < CACHE_DURATION) {
    return cachedSkills;
  }

  const repos = await fetchSkillsFromGitHub();
  
  // 並列処理で翻訳（パフォーマンス向上）
  const rankings: SkillRanking[] = await Promise.all(
    repos.map(async (repo, index) => {
      const category = determineCategory(repo);
      const descriptionJa = await translateToJapanese(repo.description || '');
      
      return {
        rank: index + 1,
        name: repo.name,
        description: repo.description || '',
        descriptionJa,
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        watchers: repo.watchers_count,
        issues: repo.open_issues_count,
        topics: repo.topics,
        language: repo.language || '',
        license: repo.license?.name || 'Unknown',
        createdAt: repo.created_at,
        updatedAt: repo.updated_at,
        pushedAt: repo.pushed_at,
        score: calculateScore(repo),
        category
      };
    })
  );

  // スコア順にソート
  rankings.sort((a, b) => b.score - a.score);
  
  // ランキング番号を再設定
  rankings.forEach((skill, index) => {
    skill.rank = index + 1;
  });

  // キャッシュ更新
  cachedSkills = rankings;
  cacheTime = Date.now();

  return rankings;
}

/**
 * カテゴリでフィルタリング
 */
export function filterByCategory(skills: SkillRanking[], category: SkillCategory | null): SkillRanking[] {
  if (!category) return skills;
  return skills.filter(skill => skill.category === category);
}

/**
 * ソート関数
 */
export function sortSkills(skills: SkillRanking[], sortBy: 'score' | 'stars' | 'forks' | 'updated'): SkillRanking[] {
  const sorted = [...skills];
  
  switch (sortBy) {
    case 'score':
      sorted.sort((a, b) => b.score - a.score);
      break;
    case 'stars':
      sorted.sort((a, b) => b.stars - a.stars);
      break;
    case 'forks':
      sorted.sort((a, b) => b.forks - a.forks);
      break;
    case 'updated':
      sorted.sort((a, b) => new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime());
      break;
  }
  
  // ランキング番号を再設定
  sorted.forEach((skill, index) => {
    skill.rank = index + 1;
  });
  
  return sorted;
}
