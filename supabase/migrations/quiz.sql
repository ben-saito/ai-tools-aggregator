-- Create quiz_results table
CREATE TABLE IF NOT EXISTS public.quiz_results (
  id TEXT PRIMARY KEY, -- NanoID or similar short ID
  answers JSONB NOT NULL,
  recommendations JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_agent TEXT
);

-- Enable RLS
ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;

-- Policies
-- Anyone can insert (submit quiz)
CREATE POLICY "Anyone can submit quiz results"
  ON public.quiz_results FOR INSERT
  WITH CHECK (true);

-- Anyone can view results (for sharing)
CREATE POLICY "Anyone can view quiz results"
  ON public.quiz_results FOR SELECT
  USING (true);

-- Index for performance on time-based queries
CREATE INDEX IF NOT EXISTS idx_quiz_results_created_at ON public.quiz_results(created_at);
