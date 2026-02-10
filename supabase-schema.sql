-- AI Tools Aggregator - Supabase Schema
-- Run this in Supabase SQL Editor after creating project

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table (extends auth.users)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE NOT NULL,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_id TEXT NOT NULL,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  helpful_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(tool_id, user_id) -- One review per user per tool
);

-- Enable RLS
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Reviews policies
CREATE POLICY "Reviews are viewable by everyone"
  ON reviews FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create reviews"
  ON reviews FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own reviews"
  ON reviews FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own reviews"
  ON reviews FOR DELETE
  USING (auth.uid() = user_id);

-- Review votes table
CREATE TABLE IF NOT EXISTS review_votes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  review_id UUID NOT NULL REFERENCES reviews(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(review_id, user_id) -- One vote per user per review
);

-- Enable RLS
ALTER TABLE review_votes ENABLE ROW LEVEL SECURITY;

-- Review votes policies
CREATE POLICY "Review votes are viewable by everyone"
  ON review_votes FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can vote"
  ON review_votes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own votes"
  ON review_votes FOR DELETE
  USING (auth.uid() = user_id);

-- Tool stats table
CREATE TABLE IF NOT EXISTS tools_stats (
  tool_id TEXT PRIMARY KEY,
  average_rating DECIMAL(3, 2) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  view_count INTEGER DEFAULT 0,
  trending_score DECIMAL(10, 5) DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE tools_stats ENABLE ROW LEVEL SECURITY;

-- Tool stats policies
CREATE POLICY "Tool stats are viewable by everyone"
  ON tools_stats FOR SELECT
  USING (true);

-- Function to increment helpful_count
CREATE OR REPLACE FUNCTION increment_helpful_count(review_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE reviews
  SET helpful_count = helpful_count + 1
  WHERE id = review_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to decrement helpful_count
CREATE OR REPLACE FUNCTION decrement_helpful_count(review_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE reviews
  SET helpful_count = GREATEST(helpful_count - 1, 0)
  WHERE id = review_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to auto-create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'username', SPLIT_PART(NEW.email, '@', 1)),
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Indexes for performance
CREATE INDEX IF NOT EXISTS reviews_tool_id_idx ON reviews(tool_id);
CREATE INDEX IF NOT EXISTS reviews_user_id_idx ON reviews(user_id);
CREATE INDEX IF NOT EXISTS reviews_created_at_idx ON reviews(created_at DESC);
CREATE INDEX IF NOT EXISTS review_votes_review_id_idx ON review_votes(review_id);
CREATE INDEX IF NOT EXISTS tools_stats_trending_idx ON tools_stats(trending_score DESC);
CREATE INDEX IF NOT EXISTS tools_stats_rating_idx ON tools_stats(average_rating DESC);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO anon, authenticated;
-- Add is_verified and auth_provider columns to profiles table

ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS is_verified BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS auth_provider TEXT;

-- Update handle_new_user function to populate these fields
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, avatar_url, is_verified, auth_provider)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'username', SPLIT_PART(NEW.email, '@', 1)),
    NEW.raw_user_meta_data->>'avatar_url',
    -- Set is_verified to true if provider is github or google (simplified logic for now)
    (NEW.raw_app_meta_data->>'provider' IN ('github', 'google')),
    NEW.raw_app_meta_data->>'provider'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
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
-- Create tool_owners table
CREATE TABLE IF NOT EXISTS public.tool_owners (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_id TEXT NOT NULL REFERENCES public.tools(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  status TEXT NOT NULL CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
  proof_contact TEXT, -- Email or other contact for verification
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(tool_id, user_id) -- One claim per user per tool (though effectively one owner per tool usually, but start flexible)
);

-- Enable RLS
ALTER TABLE public.tool_owners ENABLE ROW LEVEL SECURITY;

-- Policies

-- Users can insert their own claims
CREATE POLICY "Users can submit ownership claims"
  ON public.tool_owners FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can view their own claims
CREATE POLICY "Users can view their own claims"
  ON public.tool_owners FOR SELECT
  USING (auth.uid() = user_id);

-- Only admins/approved owners can update/delete? 
-- For MVP, let's say users can delete their pending claims.
CREATE POLICY "Users can delete their own pending claims"
  ON public.tool_owners FOR DELETE
  USING (auth.uid() = user_id AND status = 'pending');

-- Public/Admins:
-- We might need an admin role later. For now, assume manual DB updates for approval.

-- Indexes
CREATE INDEX IF NOT EXISTS idx_tool_owners_user_id ON public.tool_owners(user_id);
CREATE INDEX IF NOT EXISTS idx_tool_owners_tool_id ON public.tool_owners(tool_id);
CREATE INDEX IF NOT EXISTS idx_tool_owners_status ON public.tool_owners(status);
-- Create tool_owners table
CREATE TABLE IF NOT EXISTS public.tool_owners (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_id TEXT NOT NULL REFERENCES public.tools(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  status TEXT NOT NULL CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
  proof_contact TEXT, -- Email or other contact for verification
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(tool_id, user_id) -- One claim per user per tool (though effectively one owner per tool usually, but start flexible)
);

-- Enable RLS
ALTER TABLE public.tool_owners ENABLE ROW LEVEL SECURITY;

-- Policies

-- Users can insert their own claims
CREATE POLICY "Users can submit ownership claims"
  ON public.tool_owners FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can view their own claims
CREATE POLICY "Users can view their own claims"
  ON public.tool_owners FOR SELECT
  USING (auth.uid() = user_id);

-- Only admins/approved owners can update/delete? 
-- For MVP, let's say users can delete their pending claims.
CREATE POLICY "Users can delete their own pending claims"
  ON public.tool_owners FOR DELETE
  USING (auth.uid() = user_id AND status = 'pending');

-- Public/Admins:
-- We might need an admin role later. For now, assume manual DB updates for approval.

-- Indexes
CREATE INDEX IF NOT EXISTS idx_tool_owners_user_id ON public.tool_owners(user_id);
CREATE INDEX IF NOT EXISTS idx_tool_owners_tool_id ON public.tool_owners(tool_id);
CREATE INDEX IF NOT EXISTS idx_tool_owners_status ON public.tool_owners(status);
-- Create leads table
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_id TEXT NOT NULL REFERENCES public.tools(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL, -- Optional, but preferred
  company_name TEXT NOT NULL,
  company_size TEXT,
  use_case TEXT,
  status TEXT NOT NULL CHECK (status IN ('new', 'sent', 'rejected')) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Policies

-- Users can insert leads (Anyone can request a demo? Or only auth? Let's say auth for quality)
CREATE POLICY "Authenticated users can submit leads"
  ON public.leads FOR INSERT
  WITH CHECK (auth.role() = 'authenticated'); 
  -- If we want to force user_id assignment: AND auth.uid() = user_id

-- Tool owners can view leads for their tools
-- This requires a join with tool_owners, which is complex in RLS sometimes.
-- For MVP, let's allow users to view leads they submitted?
CREATE POLICY "Users can view their own submitted leads"
  ON public.leads FOR SELECT
  USING (auth.uid() = user_id);

-- Admins/Owners (Complex policy or Admin API)
-- For now, we will rely on manual DB access or future Admin Dashboard for viewing all leads.
-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create newsletter_logs table
CREATE TABLE IF NOT EXISTS public.newsletter_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  subject TEXT NOT NULL,
  content TEXT, -- Store HTML or text content
  recipient_count INTEGER,
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'sent' -- 'sent', 'failed'
);

-- Enable RLS
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_logs ENABLE ROW LEVEL SECURITY;

-- Policies

-- Anyone can insert (subscribe)
CREATE POLICY "Anyone can subscribe"
  ON public.newsletter_subscribers FOR INSERT
  WITH CHECK (true);

-- Only admins/service role can view/update (RLS on default denies select/update if no policy)
-- But we might want users to unsubscribe.
-- For MVP, let's allow service role only for management, and public insert.

-- If we want to allow users to unsubscribe, we'd need a token based unsubscribe link logic, 
-- or they typically don't log in to unsubscribe. 
-- For MVP, we will manage unsubscription via admin or manual DB update.
