-- Create reports table for spam and content moderation
CREATE TABLE IF NOT EXISTS public.reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  review_id UUID NOT NULL REFERENCES public.reviews(id) ON DELETE CASCADE,
  reporter_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  reason TEXT NOT NULL CHECK (reason IN ('spam', 'inappropriate', 'misinformation', 'other')),
  comment TEXT,
  status TEXT NOT NULL CHECK (status IN ('pending', 'reviewed', 'actioned', 'dismissed')) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(review_id, reporter_id) -- One report per user per review
);

-- Enable RLS
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;

-- Policies

-- Users can submit reports
CREATE POLICY "Users can submit reports"
  ON public.reports FOR INSERT
  WITH CHECK (auth.uid() = reporter_id);

-- Users can view their own reports
CREATE POLICY "Users can view their own reports"
  ON public.reports FOR SELECT
  USING (auth.uid() = reporter_id);

-- Admins can view all reports (future implementation)
-- For now, we'll handle this through service role

-- Indexes
CREATE INDEX IF NOT EXISTS idx_reports_review_id ON public.reports(review_id);
CREATE INDEX IF NOT EXISTS idx_reports_reporter_id ON public.reports(reporter_id);
CREATE INDEX IF NOT EXISTS idx_reports_status ON public.reports(status);
CREATE INDEX IF NOT EXISTS idx_reports_created_at ON public.reports(created_at DESC);

-- Create a view for report counts per review
CREATE OR REPLACE VIEW review_report_counts AS
SELECT 
  review_id,
  COUNT(*) as report_count,
  COUNT(DISTINCT reporter_id) as unique_reporters
FROM public.reports
WHERE status = 'pending'
GROUP BY review_id;
