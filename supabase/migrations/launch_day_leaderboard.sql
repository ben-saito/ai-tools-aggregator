-- Add upvote_count to tools_stats
ALTER TABLE tools_stats 
ADD COLUMN IF NOT EXISTS upvote_count INTEGER DEFAULT 0;

-- Create tool_votes table to track user votes
CREATE TABLE IF NOT EXISTS tool_votes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_id TEXT NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(tool_id, user_id)
);

-- Enable RLS
ALTER TABLE tool_votes ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Tool votes are viewable by everyone"
  ON tool_votes FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can upvote"
  ON tool_votes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove their own upvote"
  ON tool_votes FOR DELETE
  USING (auth.uid() = user_id);

-- Indexes
CREATE INDEX IF NOT EXISTS tool_votes_tool_id_idx ON tool_votes(tool_id);
CREATE INDEX IF NOT EXISTS tool_votes_user_id_idx ON tool_votes(user_id);

-- RPC Functions
CREATE OR REPLACE FUNCTION increment_upvote(tool_id_param TEXT)
RETURNS VOID AS $$
BEGIN
  -- Ensure stats record exists
  INSERT INTO tools_stats (tool_id, upvote_count)
  VALUES (tool_id_param, 1)
  ON CONFLICT (tool_id)
  DO UPDATE SET 
    upvote_count = tools_stats.upvote_count + 1,
    trending_score = tools_stats.trending_score + 10, -- Simple algorithm: 1 upvote = 10 points
    updated_at = NOW();
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION decrement_upvote(tool_id_param TEXT)
RETURNS VOID AS $$
BEGIN
  UPDATE tools_stats
  SET 
    upvote_count = GREATEST(upvote_count - 1, 0),
    trending_score = GREATEST(trending_score - 10, 0),
    updated_at = NOW()
  WHERE tool_id = tool_id_param;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
