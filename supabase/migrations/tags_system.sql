-- Create tags table for user-generated tags
CREATE TABLE IF NOT EXISTS public.tool_tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_id TEXT NOT NULL REFERENCES public.tools(id) ON DELETE CASCADE,
  tag_name TEXT NOT NULL CHECK (length(tag_name) > 0 AND length(tag_name) <= 50),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(tool_id, tag_name, user_id) -- One user can add same tag to same tool only once
);

-- Enable RLS
ALTER TABLE public.tool_tags ENABLE ROW LEVEL SECURITY;

-- Policies

-- Anyone can view tags
CREATE POLICY "Tags are viewable by everyone"
  ON public.tool_tags FOR SELECT
  USING (true);

-- Authenticated users can add tags
CREATE POLICY "Authenticated users can add tags"
  ON public.tool_tags FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can delete their own tags
CREATE POLICY "Users can delete their own tags"
  ON public.tool_tags FOR DELETE
  USING (auth.uid() = user_id);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_tool_tags_tool_id ON public.tool_tags(tool_id);
CREATE INDEX IF NOT EXISTS idx_tool_tags_tag_name ON public.tool_tags(tag_name);
CREATE INDEX IF NOT EXISTS idx_tool_tags_user_id ON public.tool_tags(user_id);
CREATE INDEX IF NOT EXISTS idx_tool_tags_created_at ON public.tool_tags(created_at DESC);

-- Create a view for tag counts per tool
CREATE OR REPLACE VIEW tool_tag_counts AS
SELECT 
  tool_id,
  tag_name,
  COUNT(*) as tag_count,
  COUNT(DISTINCT user_id) as unique_users
FROM public.tool_tags
GROUP BY tool_id, tag_name;

-- Create a view for popular tags
CREATE OR REPLACE VIEW popular_tags AS
SELECT 
  tag_name,
  COUNT(DISTINCT tool_id) as tool_count,
  COUNT(*) as total_uses,
  COUNT(DISTINCT user_id) as unique_users
FROM public.tool_tags
GROUP BY tag_name
ORDER BY total_uses DESC
LIMIT 50;
