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
}

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
  
  const rankings: SkillRanking[] = repos.map((repo, index) => ({
    rank: index + 1,
    name: repo.name,
    description: repo.description || '',
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
    score: calculateScore(repo)
  }));

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
