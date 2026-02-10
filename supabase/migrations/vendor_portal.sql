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
