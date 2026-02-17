#!/usr/bin/env node
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL || 'https://mqksqezqbauqymftrydy.supabase.co';
const supabaseAnonKey = process.env.PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xa3NxZXpxYmF1cXltZnRyeWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2ODIwMDIsImV4cCI6MjA4NjI1ODAwMn0.Bf6nGo9I0skJWwFnXHHAKOBSBepYx7G8OHLw3Ih_Ytw';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log('📊 AI Tools Hub - Analytics Report\n');
console.log('=' .repeat(80));

// 1. Get daily analytics (last 14 days)
console.log('\n📅 Daily Analytics (Last 14 Days)\n');
console.log('-'.repeat(80));

const { data: dailyData, error: dailyError } = await supabase
  .from('daily_analytics')
  .select('*')
  .order('date', { ascending: false })
  .limit(14);

if (dailyError) {
  console.error('❌ Error fetching daily analytics:', dailyError);
} else if (!dailyData || dailyData.length === 0) {
  console.log('⚠️  No analytics data available yet.');
  console.log('   Data will appear once users start visiting the site.');
} else {
  console.log('Date       | Sessions | Page Views | Tool Views | Reviews | Submissions');
  console.log('-'.repeat(80));
  
  let totalSessions = 0;
  let totalPageViews = 0;
  let totalToolViews = 0;
  
  dailyData.forEach(day => {
    const date = new Date(day.date).toISOString().split('T')[0];
    const sessions = day.daily_sessions || 0;
    const pageViews = day.page_views || 0;
    const toolViews = day.tool_views || 0;
    const reviews = day.reviews || 0;
    const submissions = day.tool_submissions || 0;
    
    totalSessions += sessions;
    totalPageViews += pageViews;
    totalToolViews += toolViews;
    
    console.log(
      `${date} | ${String(sessions).padStart(8)} | ${String(pageViews).padStart(10)} | ${String(toolViews).padStart(10)} | ${String(reviews).padStart(7)} | ${String(submissions).padStart(11)}`
    );
  });
  
  console.log('-'.repeat(80));
  console.log(`Total (14d)| ${String(totalSessions).padStart(8)} | ${String(totalPageViews).padStart(10)} | ${String(totalToolViews).padStart(10)}`);
  
  // Calculate averages
  const avgSessions = Math.round(totalSessions / dailyData.length);
  const avgPageViews = Math.round(totalPageViews / dailyData.length);
  
  console.log(`\n📈 14-Day Averages:`);
  console.log(`   • Sessions/day: ${avgSessions}`);
  console.log(`   • Page Views/day: ${avgPageViews}`);
  if (totalSessions > 0) {
    console.log(`   • Pages per session: ${(totalPageViews / totalSessions).toFixed(2)}`);
  }
}

// 2. Get overall summary
console.log('\n\n📊 Overall Summary\n');
console.log('-'.repeat(80));

const { data: summary, error: summaryError } = await supabase
  .from('analytics_summary')
  .select('*')
  .single();

if (summaryError) {
  console.error('❌ Error fetching summary:', summaryError);
} else if (!summary) {
  console.log('⚠️  No summary data available yet.');
} else {
  console.log(`Total Sessions:        ${(summary.total_sessions || 0).toLocaleString()}`);
  console.log(`Total Events:          ${(summary.total_events || 0).toLocaleString()}`);
  console.log(`Registered Users:      ${(summary.registered_users || 0).toLocaleString()}`);
  console.log(`Page Views:            ${(summary.page_views || 0).toLocaleString()}`);
  console.log(`Tool Views:            ${(summary.tool_views || 0).toLocaleString()}`);
  console.log(`Reviews Submitted:     ${(summary.reviews_submitted || 0).toLocaleString()}`);
  console.log(`Tools Submitted:       ${(summary.tools_submitted || 0).toLocaleString()}`);
  console.log(`Searches Performed:    ${(summary.searches_performed || 0).toLocaleString()}`);
  
  if (summary.last_updated) {
    console.log(`\nLast Updated:          ${new Date(summary.last_updated).toLocaleString('en-US', { timeZone: 'Asia/Tokyo' })} JST`);
  }
}

// 3. Top 10 Tools by Views
console.log('\n\n🏆 Top 10 Tools by Views\n');
console.log('-'.repeat(80));

const { data: topTools, error: toolsError } = await supabase
  .from('tool_performance')
  .select('*')
  .order('views', { ascending: false })
  .limit(10);

if (toolsError) {
  console.error('❌ Error fetching tool performance:', toolsError);
} else if (!topTools || topTools.length === 0) {
  console.log('⚠️  No tool performance data available yet.');
} else {
  console.log('Rank | Tool ID               | Views  | Clicks | Unique Visitors');
  console.log('-'.repeat(80));
  
  topTools.forEach((tool, index) => {
    const rank = index + 1;
    const toolId = tool.tool_id.padEnd(20).substring(0, 20);
    const views = String(tool.views || 0).padStart(6);
    const clicks = String(tool.clicks || 0).padStart(6);
    const visitors = String(tool.unique_visitors || 0).padStart(15);
    
    console.log(`${String(rank).padStart(4)} | ${toolId} | ${views} | ${clicks} | ${visitors}`);
  });
}

// 4. Popular Searches
console.log('\n\n🔍 Top 10 Search Queries\n');
console.log('-'.repeat(80));

const { data: searches, error: searchError } = await supabase
  .from('popular_searches')
  .select('*')
  .limit(10);

if (searchError) {
  console.error('❌ Error fetching searches:', searchError);
} else if (!searches || searches.length === 0) {
  console.log('⚠️  No search data available yet.');
} else {
  console.log('Rank | Query                          | Count | Last Searched');
  console.log('-'.repeat(80));
  
  searches.forEach((search, index) => {
    const rank = index + 1;
    const query = search.search_query.padEnd(30).substring(0, 30);
    const count = String(search.search_count).padStart(5);
    const lastSearched = new Date(search.last_searched).toLocaleDateString('en-US');
    
    console.log(`${String(rank).padStart(4)} | ${query} | ${count} | ${lastSearched}`);
  });
}

console.log('\n' + '='.repeat(80));
console.log('\n💡 Tip: Run this script daily to track growth trends.');
console.log('   Schedule with cron: 0 9 * * * cd /path/to/project && node scripts/check-analytics.mjs\n');
