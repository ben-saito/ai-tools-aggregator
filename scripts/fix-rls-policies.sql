-- Fix RLS policies for views and public access

-- tool_favorite_counts view should be publicly readable
-- Views don't have RLS by default, but we need to ensure the underlying table allows it

-- Update favorites table policy to allow anonymous users to see aggregate counts
-- We'll add a policy that allows anyone to SELECT from favorites (for counting purposes)
-- But they can only see their own detailed favorites

-- First, let's make tool_favorite_counts more accessible
-- Since it's a view, we need to grant SELECT to anon and authenticated roles
GRANT SELECT ON tool_favorite_counts TO anon, authenticated;

-- Also grant SELECT on popular_tags view
GRANT SELECT ON popular_tags TO anon, authenticated;

-- Grant SELECT on tool_tag_counts view
GRANT SELECT ON tool_tag_counts TO anon, authenticated;

-- For the favorites table, we need to allow reading for count purposes
-- Add a policy that allows selecting tool_id for counting (without revealing user_id)
CREATE POLICY "Anyone can view favorite counts"
  ON public.favorites FOR SELECT
  USING (true);

-- However, the above might be too permissive. Let's be more specific:
-- Drop the new policy and use a different approach
DROP POLICY IF EXISTS "Anyone can view favorite counts" ON public.favorites;

-- Instead, create a function that returns favorite count
CREATE OR REPLACE FUNCTION get_favorite_count(tool_id_param TEXT)
RETURNS INTEGER AS $$
  SELECT COUNT(*)::INTEGER FROM favorites WHERE tool_id = tool_id_param;
$$ LANGUAGE SQL SECURITY DEFINER;

-- Grant execute to anon and authenticated
GRANT EXECUTE ON FUNCTION get_favorite_count TO anon, authenticated;

-- Create a function to check if user has favorited
CREATE OR REPLACE FUNCTION check_user_favorite(tool_id_param TEXT)
RETURNS BOOLEAN AS $$
  SELECT EXISTS(
    SELECT 1 FROM favorites 
    WHERE tool_id = tool_id_param 
    AND user_id = auth.uid()
  );
$$ LANGUAGE SQL SECURITY DEFINER;

-- Grant execute to authenticated only
GRANT EXECUTE ON FUNCTION check_user_favorite TO authenticated;
