import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || 'https://mqksqezqbauqymftrydy.supabase.co';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xa3NxZXpxYmF1cXltZnRyeWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2ODIwMDIsImV4cCI6MjA4NjI1ODAwMn0.Bf6nGo9I0skJWwFnXHHAKOBSBepYx7G8OHLw3Ih_Ytw';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Event types
export type AnalyticsEvent = 
  | 'page_view'
  | 'tool_view'
  | 'tool_click'
  | 'review_submit'
  | 'review_helpful'
  | 'search'
  | 'filter'
  | 'tool_submit';

interface EventData {
  event: AnalyticsEvent;
  tool_id?: string;
  category?: string;
  search_query?: string;
  filter_type?: string;
  filter_value?: string;
  user_id?: string;
  session_id?: string;
  referrer?: string;
  user_agent?: string;
}

// Track event
export async function trackEvent(event: AnalyticsEvent, data: Partial<EventData> = {}) {
  try {
    const eventData: EventData = {
      event,
      ...data,
      session_id: data.session_id || getSessionId(),
      referrer: document.referrer || null,
      user_agent: navigator.userAgent,
    };

    const { error } = await supabase
      .from('analytics_events')
      .insert(eventData);

    if (error) {
      console.error('Analytics error:', error);
    }
  } catch (error) {
    // Fail silently - don't break the user experience
    console.error('Analytics tracking failed:', error);
  }
}

// Track page view
export function trackPageView(path: string) {
  trackEvent('page_view', {
    tool_id: extractToolIdFromPath(path),
    category: extractCategoryFromPath(path),
  });
}

// Track tool view
export function trackToolView(toolId: string) {
  trackEvent('tool_view', { tool_id: toolId });
  
  // Increment view count in tools_stats
  incrementToolStat(toolId, 'view_count');
}

// Track tool click
export function trackToolClick(toolId: string, source: string = 'unknown') {
  trackEvent('tool_click', { 
    tool_id: toolId,
    referrer: source,
  });
}

// Track search
export function trackSearch(query: string, resultsCount: number) {
  trackEvent('search', { 
    search_query: query,
  });
}

// Track filter usage
export function trackFilter(filterType: string, filterValue: string) {
  trackEvent('filter', {
    filter_type: filterType,
    filter_value: filterValue,
  });
}

// Increment tool stat (view_count, click_count, etc.)
async function incrementToolStat(toolId: string, statField: string) {
  try {
    const { data: existing } = await supabase
      .from('tools_stats')
      .select('*')
      .eq('tool_id', toolId)
      .single();

    if (existing) {
      // Update existing
      await supabase
        .from('tools_stats')
        .update({
          [statField]: (existing[statField] || 0) + 1,
          updated_at: new Date().toISOString(),
        })
        .eq('tool_id', toolId);
    } else {
      // Create new
      await supabase
        .from('tools_stats')
        .insert({
          tool_id: toolId,
          [statField]: 1,
          average_rating: 0,
          review_count: 0,
          trending_score: 0,
        });
    }
  } catch (error) {
    console.error('Stat increment error:', error);
  }
}

// Get or create session ID
function getSessionId(): string {
  let sessionId = sessionStorage.getItem('analytics_session_id');
  
  if (!sessionId) {
    sessionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  
  return sessionId;
}

// Extract tool ID from path
function extractToolIdFromPath(path: string): string | undefined {
  const match = path.match(/\/tools\/([^\/]+)/);
  return match ? match[1] : undefined;
}

// Extract category from path
function extractCategoryFromPath(path: string): string | undefined {
  const match = path.match(/\/categories\/([^\/]+)/);
  return match ? match[1] : undefined;
}

// Get analytics summary for a tool
export async function getToolAnalytics(toolId: string) {
  try {
    const { data, error } = await supabase
      .from('tools_stats')
      .select('*')
      .eq('tool_id', toolId)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Get analytics error:', error);
    return null;
  }
}

// Get platform-wide analytics
export async function getPlatformAnalytics() {
  try {
    const { data: stats, error } = await supabase
      .from('analytics_summary')
      .select('*')
      .single();

    if (error) throw error;
    return stats;
  } catch (error) {
    console.error('Get platform analytics error:', error);
    return null;
  }
}
