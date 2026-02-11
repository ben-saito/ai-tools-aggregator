-- Initialize tools_stats table with sample data for Trending, Top Rated, Most Reviewed tabs
-- Run this in Supabase SQL Editor

-- Insert initial stats for all 49 tools with realistic values
INSERT INTO tools_stats (tool_id, average_rating, review_count, trending_score) VALUES
-- Top tier tools (high ratings, many reviews, high trending)
('chatgpt', 4.7, 1250, 95.5),
('claude', 4.6, 890, 88.2),
('gemini', 4.5, 720, 92.3),
('cursor', 4.8, 650, 89.7),
('github-copilot', 4.6, 980, 85.4),
('midjourney', 4.7, 1100, 82.1),

-- High engagement tools
('stable-diffusion', 4.5, 780, 75.8),
('dall-e', 4.4, 620, 70.2),
('elevenlabs', 4.6, 540, 81.5),
('runway', 4.3, 450, 68.9),
('notion-ai', 4.5, 520, 72.3),
('grammarly', 4.6, 890, 65.7),

-- Mid-tier popular tools
('canva-ai', 4.4, 680, 69.4),
('perplexity', 4.5, 420, 73.6),
('suno', 4.3, 380, 70.8),
('codeium', 4.4, 340, 67.2),
('adobe-firefly', 4.3, 460, 66.5),
('otter-ai', 4.4, 380, 58.3),
('descript', 4.5, 320, 62.1),

-- Growing tools
('leonardo-ai', 4.2, 280, 64.7),
('pika', 4.1, 240, 61.5),
('tabnine', 4.3, 310, 55.8),
('replit-ai', 4.2, 260, 58.9),
('v0', 4.4, 290, 63.2),
('chatpdf', 4.3, 350, 59.4),

-- Solid mid-range
('jasper', 4.1, 420, 48.7),
('copyai', 4.0, 380, 46.3),
('writesonic', 3.9, 320, 44.8),
('fireflies-ai', 4.2, 280, 52.6),
('consensus', 4.3, 220, 54.1),
('elicit', 4.2, 180, 51.3),
('remove-bg', 4.4, 460, 49.2),

-- Emerging/niche tools
('synthesia', 4.0, 240, 42.5),
('murf-ai', 4.1, 210, 45.3),
('krisp', 4.2, 190, 43.7),
('gamma', 4.1, 220, 47.8),
('tome', 4.0, 180, 44.6),
('julius-ai', 4.2, 160, 48.9),
('tableau-ai', 4.1, 280, 41.2),

-- Specialized tools
('sudowrite', 3.9, 150, 38.4),
('scholarai', 4.0, 140, 40.7),
('humata', 3.9, 130, 39.5),
('mem', 4.0, 170, 42.8),
('reclaim-ai', 4.1, 150, 41.5),
('photor', 3.8, 120, 36.2),
('designify', 3.9, 140, 38.9),
('rows', 4.0, 160, 40.3),
('polymer', 3.9, 130, 37.6),
('obviously-ai', 3.8, 110, 35.8),
('beautiful-ai', 3.9, 150, 39.1),
('lumen5', 4.0, 170, 41.7)

ON CONFLICT (tool_id) DO UPDATE SET
  average_rating = EXCLUDED.average_rating,
  review_count = EXCLUDED.review_count,
  trending_score = EXCLUDED.trending_score;

-- Update view_count with random realistic values
UPDATE tools_stats SET view_count = FLOOR(RANDOM() * 5000 + 500)::INTEGER;

-- Verify insertion
SELECT tool_id, average_rating, review_count, trending_score 
FROM tools_stats 
ORDER BY trending_score DESC 
LIMIT 10;
