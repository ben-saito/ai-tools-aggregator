# Supabase Migration Steps

## 🚨 Required: Fix Database Schema Errors

### Current Issues
- Categories pages returning 500 errors
- Missing database views:
  - `popular_tags`
  - `tool_favorite_counts`
  - `tool_tag_counts`

### Steps to Fix

#### 1. Run Tags System Migration
Open Supabase Dashboard → SQL Editor → Run this:

```sql
-- From: supabase/migrations/tags_system.sql
-- Create tags table for user-generated tags
CREATE TABLE IF NOT EXISTS public.tool_tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_id TEXT NOT NULL REFERENCES public.tools(id) ON DELETE CASCADE,
  tag_name TEXT NOT NULL CHECK (length(tag_name) > 0 AND length(tag_name) <= 50),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(tool_id, tag_name, user_id)
);

ALTER TABLE public.tool_tags ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tags are viewable by everyone"
  ON public.tool_tags FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can add tags"
  ON public.tool_tags FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own tags"
  ON public.tool_tags FOR DELETE
  USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_tool_tags_tool_id ON public.tool_tags(tool_id);
CREATE INDEX IF NOT EXISTS idx_tool_tags_tag_name ON public.tool_tags(tag_name);
CREATE INDEX IF NOT EXISTS idx_tool_tags_user_id ON public.tool_tags(user_id);
CREATE INDEX IF NOT EXISTS idx_tool_tags_created_at ON public.tool_tags(created_at DESC);

CREATE OR REPLACE VIEW tool_tag_counts AS
SELECT 
  tool_id,
  tag_name,
  COUNT(*) as tag_count,
  COUNT(DISTINCT user_id) as unique_users
FROM public.tool_tags
GROUP BY tool_id, tag_name;

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
```

#### 2. Run Favorites System Migration
Open Supabase Dashboard → SQL Editor → Run this:

```sql
-- From: supabase/migrations/favorites_system.sql
CREATE TABLE IF NOT EXISTS public.favorites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  tool_id TEXT NOT NULL REFERENCES public.tools(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, tool_id)
);

ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own favorites"
  ON public.favorites FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can add favorites"
  ON public.favorites FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own favorites"
  ON public.favorites FOR DELETE
  USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_favorites_user_id ON public.favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_favorites_tool_id ON public.favorites(tool_id);
CREATE INDEX IF NOT EXISTS idx_favorites_created_at ON public.favorites(created_at DESC);

CREATE OR REPLACE VIEW tool_favorite_counts AS
SELECT 
  tool_id,
  COUNT(*) as favorite_count,
  COUNT(DISTINCT user_id) as unique_users
FROM public.favorites
GROUP BY tool_id;
```

#### 3. Verify
After running both SQLs, verify:
```sql
-- Check if views exist
SELECT * FROM popular_tags LIMIT 5;
SELECT * FROM tool_favorite_counts LIMIT 5;
SELECT * FROM tool_tag_counts LIMIT 5;
```

### Alternative: Fix Code to Handle Missing Views

If database migration is delayed, update code to gracefully handle missing views:

1. Add try-catch in `src/lib/supabase.ts`
2. Return empty array if view doesn't exist
3. Log error but don't crash

## After Migration
- Refresh https://ai-tools-aggregator-seven.vercel.app/
- Check category pages work
- Verify no console errors
