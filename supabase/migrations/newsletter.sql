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
