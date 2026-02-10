-- Tools Table
CREATE TABLE IF NOT EXISTS public.tools (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  pricing TEXT NOT NULL CHECK (pricing IN ('free', 'freemium', 'paid', 'open-source')),
  url TEXT NOT NULL,
  logo_url TEXT,
  website_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  verified BOOLEAN DEFAULT FALSE,
  submitted_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Features (JSON array stored as text for simplicity, or separate table)
CREATE TABLE IF NOT EXISTS public.tool_features (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_id TEXT REFERENCES public.tools(id) ON DELETE CASCADE,
  feature TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Use Cases
CREATE TABLE IF NOT EXISTS public.tool_use_cases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_id TEXT REFERENCES public.tools(id) ON DELETE CASCADE,
  use_case TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_tools_category ON public.tools(category);
CREATE INDEX IF NOT EXISTS idx_tools_pricing ON public.tools(pricing);
CREATE INDEX IF NOT EXISTS idx_tools_featured ON public.tools(featured);
CREATE INDEX IF NOT EXISTS idx_tools_created_at ON public.tools(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_tool_features_tool_id ON public.tool_features(tool_id);
CREATE INDEX IF NOT EXISTS idx_tool_use_cases_tool_id ON public.tool_use_cases(tool_id);

-- Full-text search
ALTER TABLE public.tools ADD COLUMN IF NOT EXISTS search_vector tsvector;

CREATE INDEX IF NOT EXISTS idx_tools_search ON public.tools USING gin(search_vector);

-- Update search vector on insert/update
CREATE OR REPLACE FUNCTION update_tools_search_vector()
RETURNS TRIGGER AS $$
BEGIN
  NEW.search_vector := 
    setweight(to_tsvector('english', COALESCE(NEW.name, '')), 'A') ||
    setweight(to_tsvector('english', COALESCE(NEW.description, '')), 'B') ||
    setweight(to_tsvector('english', COALESCE(NEW.category, '')), 'C');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tools_search_vector_update
BEFORE INSERT OR UPDATE ON public.tools
FOR EACH ROW
EXECUTE FUNCTION update_tools_search_vector();

-- Row Level Security (RLS)
ALTER TABLE public.tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tool_features ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tool_use_cases ENABLE ROW LEVEL SECURITY;

-- Policies for tools
CREATE POLICY "Tools are viewable by everyone"
  ON public.tools FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can submit tools"
  ON public.tools FOR INSERT
  WITH CHECK (auth.uid() = submitted_by);

CREATE POLICY "Users can update their own tools"
  ON public.tools FOR UPDATE
  USING (auth.uid() = submitted_by);

-- Policies for features
CREATE POLICY "Tool features are viewable by everyone"
  ON public.tool_features FOR SELECT
  USING (true);

CREATE POLICY "Tool submitters can add features"
  ON public.tool_features FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.tools
      WHERE id = tool_id AND submitted_by = auth.uid()
    )
  );

-- Policies for use cases
CREATE POLICY "Tool use cases are viewable by everyone"
  ON public.tool_use_cases FOR SELECT
  USING (true);

CREATE POLICY "Tool submitters can add use cases"
  ON public.tool_use_cases FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.tools
      WHERE id = tool_id AND submitted_by = auth.uid()
    )
  );

-- Function to check for duplicate tools (by URL)
CREATE OR REPLACE FUNCTION check_duplicate_tool(tool_url TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.tools WHERE url = tool_url
  );
END;
$$ LANGUAGE plpgsql;

-- Function to generate slug from name
CREATE OR REPLACE FUNCTION generate_tool_slug(tool_name TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN lower(regexp_replace(regexp_replace(tool_name, '[^a-zA-Z0-9\s-]', '', 'g'), '\s+', '-', 'g'));
END;
$$ LANGUAGE plpgsql;
