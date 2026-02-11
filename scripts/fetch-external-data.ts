/**
 * Fetch external data from GitHub API for scoring
 * Lightweight version using only free APIs
 */

import { createClient } from '@supabase/supabase-js';

// Supabase connection (optional for this test)
// const supabaseUrl = process.env.SUPABASE_URL || 'https://mqksqezqbauqymftrydy.supabase.co';
// const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;
// const supabase = supabaseServiceKey ? createClient(supabaseUrl, supabaseServiceKey) : null;

// Test tools to fetch data for
const testTools = [
  { id: 'chatgpt', name: 'ChatGPT', github: null },
  { id: 'cursor', name: 'Cursor', github: 'getcursor/cursor' },
  { id: 'stable-diffusion', name: 'Stable Diffusion', github: 'Stability-AI/generative-models' }
];

/**
 * Fetch GitHub stars and recent commits
 */
async function fetchGitHubData(repo: string): Promise<{ stars: number; commits: number } | null> {
  if (!repo) return null;
  
  try {
    // Fetch repository info
    const repoResponse = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'AI-Tools-Aggregator'
      }
    });
    
    if (!repoResponse.ok) {
      console.error(`GitHub API error for ${repo}:`, repoResponse.status);
      return null;
    }
    
    const repoData = await repoResponse.json();
    
    // Fetch recent commits (last 3 months)
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    
    const commitsResponse = await fetch(
      `https://api.github.com/repos/${repo}/commits?since=${threeMonthsAgo.toISOString()}&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'AI-Tools-Aggregator'
        }
      }
    );
    
    const commits = commitsResponse.ok ? await commitsResponse.json() : [];
    
    return {
      stars: repoData.stargazers_count || 0,
      commits: commits.length || 0
    };
  } catch (error) {
    console.error(`Error fetching GitHub data for ${repo}:`, error);
    return null;
  }
}

/**
 * Calculate popularity score from GitHub data only
 */
function calculatePopularityScore(data: {
  stars: number;
  commits: number;
}): number {
  // Stars: 70% weight (0-100 scale, 50k stars = 100)
  const starScore = Math.min(100, (data.stars / 50000) * 100);
  
  // Commits (3 months): 30% weight (0-100 scale, 300 commits = 100)
  const commitScore = Math.min(100, (data.commits / 300) * 100);
  
  const score = starScore * 0.7 + commitScore * 0.3;
  return Math.min(100, Math.round(score * 10) / 10);
}

/**
 * Main execution
 */
async function main() {
  console.log('🔍 Fetching GitHub data for test tools...\n');
  console.log('Note: Using GitHub API only (free, no auth required)\n');
  
  for (const tool of testTools) {
    console.log(`📊 ${tool.name} (${tool.id})`);
    console.log('─'.repeat(50));
    
    // Fetch GitHub data
    if (tool.github) {
      console.log(`  Repository: ${tool.github}`);
      const githubData = await fetchGitHubData(tool.github);
      
      if (githubData) {
        console.log(`  ⭐ Stars: ${githubData.stars.toLocaleString()}`);
        console.log(`  📝 Commits (last 3 months): ${githubData.commits}`);
        
        // Calculate popularity score from GitHub data
        const popularityScore = calculatePopularityScore(githubData);
        console.log(`  🎯 Popularity Score: ${popularityScore}/100`);
      } else {
        console.log(`  ❌ Failed to fetch GitHub data`);
      }
    } else {
      console.log(`  ℹ️  Closed source (no GitHub repository)`);
      console.log(`  Note: Manual scoring required for non-OSS tools`);
    }
    
    console.log('');
    
    // Small delay to avoid rate limiting (GitHub: 60 req/hour for unauthenticated)
    await new Promise(resolve => setTimeout(resolve, 1500));
  }
  
  console.log('✅ GitHub data fetching completed\n');
  console.log('📝 Next steps:');
  console.log('  1. Add GITHUB_TOKEN to .env for higher rate limits (5000 req/hour)');
  console.log('  2. Manually score closed-source tools (ChatGPT, Claude, etc.)');
  console.log('  3. Consider adding Product Hunt API for non-OSS tool metrics');
}

main().catch(console.error);
