-- Analytics Events Table
CREATE TABLE IF NOT EXISTS public.analytics_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event TEXT NOT NULL CHECK (event IN (
    'page_view',
    'tool_view',
    'tool_click',
    'review_submit',
    'review_helpful',
    'search',
    'filter',
    'tool_submit'
  )),
  tool_id TEXT,
  category TEXT,
  search_query TEXT,
  filter_type TEXT,
  filter_value TEXT,
  user_id UUID REFERENCES auth.users(id),
  session_id TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_analytics_events_event ON public.analytics_events(event);
CREATE INDEX IF NOT EXISTS idx_analytics_events_tool_id ON public.analytics_events(tool_id);
CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at ON public.analytics_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_analytics_events_session_id ON public.analytics_events(session_id);

-- Analytics Summary View (materialized for performance)
CREATE MATERIALIZED VIEW IF NOT EXISTS public.analytics_summary AS
SELECT
  COUNT(DISTINCT session_id) AS total_sessions,
  COUNT(*) AS total_events,
  COUNT(DISTINCT user_id) AS registered_users,
  COUNT(CASE WHEN event = 'page_view' THEN 1 END) AS page_views,
  COUNT(CASE WHEN event = 'tool_view' THEN 1 END) AS tool_views,
  COUNT(CASE WHEN event = 'review_submit' THEN 1 END) AS reviews_submitted,
  COUNT(CASE WHEN event = 'tool_submit' THEN 1 END) AS tools_submitted,
  COUNT(CASE WHEN event = 'search' THEN 1 END) AS searches_performed,
  MAX(created_at) AS last_updated
FROM public.analytics_events;

-- Refresh function for materialized view
CREATE OR REPLACE FUNCTION refresh_analytics_summary()
RETURNS void AS $$
BEGIN
  REFRESH MATERIALIZED VIEW analytics_summary;
END;
$$ LANGUAGE plpgsql;

-- Daily Analytics View
CREATE OR REPLACE VIEW public.daily_analytics AS
SELECT
  DATE(created_at) AS date,
  COUNT(DISTINCT session_id) AS daily_sessions,
  COUNT(CASE WHEN event = 'page_view' THEN 1 END) AS page_views,
  COUNT(CASE WHEN event = 'tool_view' THEN 1 END) AS tool_views,
  COUNT(CASE WHEN event = 'review_submit' THEN 1 END) AS reviews,
  COUNT(CASE WHEN event = 'tool_submit' THEN 1 END) AS tool_submissions
FROM public.analytics_events
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- Tool Performance View
CREATE OR REPLACE VIEW public.tool_performance AS
SELECT
  tool_id,
  COUNT(CASE WHEN event = 'tool_view' THEN 1 END) AS views,
  COUNT(CASE WHEN event = 'tool_click' THEN 1 END) AS clicks,
  COUNT(DISTINCT session_id) AS unique_visitors,
  COUNT(CASE WHEN event = 'review_submit' THEN 1 END) AS reviews_received,
  MAX(created_at) AS last_activity
FROM public.analytics_events
WHERE tool_id IS NOT NULL
GROUP BY tool_id
ORDER BY views DESC;

-- Popular Searches View
CREATE OR REPLACE VIEW public.popular_searches AS
SELECT
  search_query,
  COUNT(*) AS search_count,
  MAX(created_at) AS last_searched
FROM public.analytics_events
WHERE event = 'search' AND search_query IS NOT NULL
GROUP BY search_query
ORDER BY search_count DESC
LIMIT 100;

-- RLS Policies
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

-- Anyone can insert events (anonymous tracking)
CREATE POLICY "Anyone can track analytics events"
  ON public.analytics_events FOR INSERT
  WITH CHECK (true);

-- Only admins can view all events (future: admin role check)
CREATE POLICY "Admins can view all events"
  ON public.analytics_events FOR SELECT
  USING (false); -- For now, disabled. Enable with admin role later.

-- Views are public
GRANT SELECT ON public.analytics_summary TO anon, authenticated;
GRANT SELECT ON public.daily_analytics TO anon, authenticated;
GRANT SELECT ON public.tool_performance TO anon, authenticated;
GRANT SELECT ON public.popular_searches TO anon, authenticated;

-- Scheduled refresh (run daily at 2 AM UTC)
-- Note: This requires pg_cron extension
-- CREATE EXTENSION IF NOT EXISTS pg_cron;
-- SELECT cron.schedule('refresh-analytics', '0 2 * * *', 'SELECT refresh_analytics_summary()');
