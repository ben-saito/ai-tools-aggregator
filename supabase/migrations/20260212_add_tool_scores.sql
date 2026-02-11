-- Add tool_scores table for 5-axis evaluation system
CREATE TABLE IF NOT EXISTS tool_scores (
  tool_id TEXT PRIMARY KEY,
  popularity_score DECIMAL(5,2) DEFAULT 0 CHECK (popularity_score >= 0 AND popularity_score <= 100),
  functionality_score DECIMAL(5,2) DEFAULT 0 CHECK (functionality_score >= 0 AND functionality_score <= 100),
  value_score DECIMAL(5,2) DEFAULT 0 CHECK (value_score >= 0 AND value_score <= 100),
  development_score DECIMAL(5,2) DEFAULT 0 CHECK (development_score >= 0 AND development_score <= 100),
  user_rating_score DECIMAL(5,2) DEFAULT 0 CHECK (user_rating_score >= 0 AND user_rating_score <= 100),
  total_score DECIMAL(5,2) DEFAULT 0 CHECK (total_score >= 0 AND total_score <= 100),
  score_breakdown JSONB DEFAULT '{}'::jsonb,
  data_sources JSONB DEFAULT '{}'::jsonb,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE tool_scores ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tool scores are viewable by everyone" ON tool_scores FOR SELECT USING (true);
CREATE POLICY "Only service role can update scores" ON tool_scores FOR ALL USING (auth.role() = 'service_role');

CREATE INDEX idx_tool_scores_total ON tool_scores(total_score DESC);
CREATE INDEX idx_tool_scores_popularity ON tool_scores(popularity_score DESC);

CREATE OR REPLACE FUNCTION calculate_total_score(
  p_popularity DECIMAL, p_functionality DECIMAL, p_value DECIMAL,
  p_development DECIMAL, p_user_rating DECIMAL
) RETURNS DECIMAL AS $$
BEGIN
  RETURN ROUND((p_popularity * 0.30) + (p_functionality * 0.25) + (p_value * 0.20) + (p_development * 0.15) + (p_user_rating * 0.10), 2);
END;
$$ LANGUAGE plpgsql IMMUTABLE;

CREATE OR REPLACE FUNCTION update_tool_total_score() RETURNS TRIGGER AS $$
BEGIN
  NEW.total_score := calculate_total_score(NEW.popularity_score, NEW.functionality_score, NEW.value_score, NEW.development_score, NEW.user_rating_score);
  NEW.last_updated := NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_total_score BEFORE INSERT OR UPDATE ON tool_scores FOR EACH ROW EXECUTE FUNCTION update_tool_total_score();

INSERT INTO tool_scores (tool_id, popularity_score, functionality_score, value_score, development_score, user_rating_score, score_breakdown, data_sources) VALUES
('chatgpt', 95.00, 90.00, 70.00, 85.00, 80.00, '{"popularity_weighted": 28.5, "functionality_weighted": 22.5, "value_weighted": 14.0, "development_weighted": 12.75, "user_rating_weighted": 8.0}'::jsonb, '{"updated_at": "2026-02-12"}'::jsonb),
('claude', 75.00, 85.00, 78.00, 90.00, 85.00, '{"popularity_weighted": 22.5, "functionality_weighted": 21.25, "value_weighted": 15.6, "development_weighted": 13.5, "user_rating_weighted": 8.5}'::jsonb, '{"updated_at": "2026-02-12"}'::jsonb),
('midjourney', 88.00, 62.00, 32.00, 75.00, 82.00, '{"popularity_weighted": 26.4, "functionality_weighted": 15.5, "value_weighted": 6.4, "development_weighted": 11.25, "user_rating_weighted": 8.2}'::jsonb, '{"updated_at": "2026-02-12"}'::jsonb)
ON CONFLICT (tool_id) DO UPDATE SET popularity_score = EXCLUDED.popularity_score, functionality_score = EXCLUDED.functionality_score, value_score = EXCLUDED.value_score, development_score = EXCLUDED.development_score, user_rating_score = EXCLUDED.user_rating_score, score_breakdown = EXCLUDED.score_breakdown, data_sources = EXCLUDED.data_sources;
