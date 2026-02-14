import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  
  try {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=topic:clawdbot-skill+OR+topic:claude-code-skill&sort=stars&order=desc&per_page=20&page=${page}`,
      {
        headers: {
          'Accept': 'application/vnd.github+json',
          'User-Agent': 'AI-Tools-Aggregator',
        },
        next: { revalidate: 3600 }, // キャッシュ1時間
      }
    );
    
    if (!response.ok) {
      // レート制限チェック
      if (response.status === 403) {
        return NextResponse.json(
          { error: 'GitHub API rate limit exceeded. Please try again later.' },
          { status: 429 }
        );
      }
      
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // 必要なデータのみ抽出
    const formattedData = {
      total_count: data.total_count,
      items: data.items?.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description,
        html_url: repo.html_url,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        language: repo.language,
        created_at: repo.created_at,
        updated_at: repo.updated_at,
        topics: repo.topics,
      })) || [],
    };
    
    return NextResponse.json(formattedData);
  } catch (error) {
    console.error('GitHub API fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch skills from GitHub' },
      { status: 500 }
    );
  }
}
