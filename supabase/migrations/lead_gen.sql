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
