#!/usr/bin/env node
/**
 * Analytics Report Generator
 * Uses existing Supabase analytics infrastructure
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL || 'https://mqksqezqbauqymftrydy.supabase.co';
const supabaseAnonKey = process.env.PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xa3NxZXpxYmF1cXltZnRyeWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2ODIwMDIsImV4cCI6MjA4NjI1ODAwMn0.Bf6nGo9I0skJWwFnXHHAKOBSBepYx7G8OHLw3Ih_Ytw';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log('📊 AI Tools Hub - Comprehensive Analytics Report\n');
console.log('=' .repeat(80));
console.log(`Report Generated: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })} JST\n`);

async function generateReport() {
  // 1. Platform-wide summary
  console.log('\n📈 Platform Overview\n');
  console.log('-'.repeat(80));
  
  const { data: summary, error: summaryError } = await supabase
    .from('analytics_summary')
    .select('*')
    .single();

  if (summaryError) {
    console.error('❌ Error:', summaryError.message);
  } else if (!summary) {
    console.log('⚠️  No summary data available. Data will appear once users visit the site.');
  } else {
    const sessions = summary.total_sessions || 0;
    const events = summary.total_events || 0;
    const users = summary.registered_users || 0;
    const pageViews = summary.page_views || 0;
    const toolViews = summary.tool_views || 0;
    const reviews = summary.reviews_submitted || 0;
    const submissions = summary.tools_submitted || 0;
    const searches = summary.searches_performed || 0;
    
    console.log(`Total Sessions:          ${sessions.toLocaleString()}`);
    console.log(`Total Events:            ${events.toLocaleString()}`);
    console.log(`Registered Users:        ${users.toLocaleString()}`);
    console.log(`─`.repeat(80));
    console.log(`Page Views:              ${pageViews.toLocaleString()}`);
    console.log(`Tool Views:              ${toolViews.toLocaleString()}`);
    console.log(`Reviews Submitted:       ${reviews.toLocaleString()}`);
    console.log(`Tools Submitted:         ${submissions.toLocaleString()}`);
    console.log(`Searches Performed:      ${searches.toLocaleString()}`);
    
    if (summary.last_updated) {
      console.log(`\nLast Updated:            ${new Date(summary.last_updated).toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })} JST`);
    }
    
    // Calculate engagement metrics
    if (sessions > 0) {
      console.log(`\n📊 Engagement Metrics:`);
      console.log(`   • Events per session:   ${(events / sessions).toFixed(2)}`);
      console.log(`   • Pages per session:    ${(pageViews / sessions).toFixed(2)}`);
      console.log(`   • Tool views per session: ${(toolViews / sessions).toFixed(2)}`);
    }
  }

  // 2. Daily breakdown (last 30 days)
  console.log('\n\n📅 Daily Traffic (Last 30 Days)\n');
  console.log('-'.repeat(80));
  
  const { data: dailyData, error: dailyError } = await supabase
    .from('daily_analytics')
    .select('*')
    .order('date', { ascending: false })
    .limit(30);

  if (dailyError) {
    console.error('❌ Error:', dailyError.message);
  } else if (!dailyData || dailyData.length === 0) {
    console.log('⚠️  No daily data available yet.');
  } else {
    console.log('Date       │ Sessions │ Page Views │ Tool Views │ Reviews │ Submissions');
    console.log('─'.repeat(80));
    
    let totalSessions = 0;
    let totalPageViews = 0;
    let totalToolViews = 0;
    let totalReviews = 0;
    let totalSubmissions = 0;
    
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
      totalReviews += reviews;
      totalSubmissions += submissions;
      
      console.log(
        `${date} │ ${String(sessions).padStart(8)} │ ${String(pageViews).padStart(10)} │ ${String(toolViews).padStart(10)} │ ${String(reviews).padStart(7)} │ ${String(submissions).padStart(11)}`
      );
    });
    
    console.log('─'.repeat(80));
    console.log(`Total      │ ${String(totalSessions).padStart(8)} │ ${String(totalPageViews).padStart(10)} │ ${String(totalToolViews).padStart(10)} │ ${String(totalReviews).padStart(7)} │ ${String(totalSubmissions).padStart(11)}`);
    
    // Calculate averages and trends
    const days = dailyData.length;
    const avgSessions = Math.round(totalSessions / days);
    const avgPageViews = Math.round(totalPageViews / days);
    const avgToolViews = Math.round(totalToolViews / days);
    
    console.log(`\n📈 ${days}-Day Averages:`);
    console.log(`   • Sessions/day:    ${avgSessions.toLocaleString()}`);
    console.log(`   • Page Views/day:  ${avgPageViews.toLocaleString()}`);
    console.log(`   • Tool Views/day:  ${avgToolViews.toLocaleString()}`);
    
    if (totalSessions > 0) {
      console.log(`   • Pages/session:   ${(totalPageViews / totalSessions).toFixed(2)}`);
    }
    
    // Growth trend (compare first 7 days vs last 7 days)
    if (dailyData.length >= 14) {
      const recentWeek = dailyData.slice(0, 7);
      const previousWeek = dailyData.slice(7, 14);
      
      const recentSessions = recentWeek.reduce((sum, day) => sum + (day.daily_sessions || 0), 0);
      const previousSessions = previousWeek.reduce((sum, day) => sum + (day.daily_sessions || 0), 0);
      
      if (previousSessions > 0) {
        const growth = ((recentSessions - previousSessions) / previousSessions * 100).toFixed(1);
        const growthIndicator = growth >= 0 ? '📈 ↗️' : '📉 ↘️';
        console.log(`\n${growthIndicator} Week-over-Week Growth: ${growth}%`);
      }
    }
  }

  // 3. Tool performance
  console.log('\n\n🏆 Top 15 Tools by Views\n');
  console.log('-'.repeat(80));
  
  const { data: topTools, error: toolsError } = await supabase
    .from('tool_performance')
    .select('*')
    .order('views', { ascending: false })
    .limit(15);

  if (toolsError) {
    console.error('❌ Error:', toolsError.message);
  } else if (!topTools || topTools.length === 0) {
    console.log('⚠️  No tool performance data available yet.');
  } else {
    console.log('Rank │ Tool ID                      │ Views  │ Clicks │ Visitors │ CTR');
    console.log('─'.repeat(80));
    
    topTools.forEach((tool, index) => {
      const rank = String(index + 1).padStart(4);
      const toolId = tool.tool_id.padEnd(27).substring(0, 27);
      const views = String(tool.views || 0).padStart(6);
      const clicks = String(tool.clicks || 0).padStart(6);
      const visitors = String(tool.unique_visitors || 0).padStart(8);
      const ctr = tool.views > 0 ? ((tool.clicks / tool.views) * 100).toFixed(1) + '%' : '0.0%';
      
      console.log(`${rank} │ ${toolId} │ ${views} │ ${clicks} │ ${visitors} │ ${ctr.padStart(6)}`);
    });
  }

  // 4. Popular searches
  console.log('\n\n🔍 Top 15 Search Queries\n');
  console.log('-'.repeat(80));
  
  const { data: searches, error: searchError } = await supabase
    .from('popular_searches')
    .select('*')
    .limit(15);

  if (searchError) {
    console.error('❌ Error:', searchError.message);
  } else if (!searches || searches.length === 0) {
    console.log('⚠️  No search data available yet.');
  } else {
    console.log('Rank │ Query                                      │ Count │ Last Searched');
    console.log('─'.repeat(80));
    
    searches.forEach((search, index) => {
      const rank = String(index + 1).padStart(4);
      const query = search.search_query.padEnd(42).substring(0, 42);
      const count = String(search.search_count).padStart(5);
      const lastSearched = new Date(search.last_searched).toLocaleDateString('ja-JP');
      
      console.log(`${rank} │ ${query} │ ${count} │ ${lastSearched}`);
    });
  }

  console.log('\n' + '='.repeat(80));
  console.log('\n✅ Report completed successfully!\n');
}

generateReport().catch(console.error);
