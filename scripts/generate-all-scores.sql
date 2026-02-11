-- Generate scores for all 49 tools (excluding chatgpt, claude, midjourney which are already in DB)
-- Run this in Supabase SQL Editor

INSERT INTO tool_scores (tool_id, popularity_score, functionality_score, value_score, development_score, user_rating_score) VALUES
-- Text Generation
('gemini', 90.00, 88.00, 85.00, 92.00, 82.00),
('perplexity', 75.00, 80.00, 75.00, 88.00, 85.00),

-- Image Generation
('dall-e', 85.00, 85.00, 60.00, 82.00, 78.00),
('stable-diffusion', 80.00, 90.00, 95.00, 85.00, 83.00),
('leonardo-ai', 70.00, 82.00, 78.00, 85.00, 80.00),

-- Video Generation
('runway', 78.00, 85.00, 65.00, 88.00, 82.00),
('synthesia', 65.00, 75.00, 50.00, 80.00, 75.00),
('pika', 72.00, 78.00, 70.00, 85.00, 78.00),

-- Audio & Music
('elevenlabs', 82.00, 88.00, 72.00, 90.00, 85.00),
('suno', 75.00, 85.00, 80.00, 88.00, 82.00),
('murf-ai', 68.00, 80.00, 68.00, 82.00, 78.00),

-- Code Development
('github-copilot', 88.00, 92.00, 60.00, 90.00, 85.00),
('cursor', 82.00, 90.00, 78.00, 92.00, 88.00),
('codeium', 70.00, 85.00, 90.00, 85.00, 80.00),
('tabnine', 72.00, 82.00, 75.00, 80.00, 78.00),
('replit-ai', 75.00, 80.00, 82.00, 85.00, 80.00),
('v0', 68.00, 78.00, 75.00, 85.00, 75.00),

-- Marketing & Sales
('jasper', 70.00, 80.00, 55.00, 78.00, 75.00),
('copyai', 72.00, 78.00, 70.00, 80.00, 77.00),
('writesonic', 68.00, 75.00, 72.00, 78.00, 76.00),
('sudowrite', 60.00, 72.00, 65.00, 75.00, 72.00),

-- Productivity
('notion-ai', 85.00, 85.00, 65.00, 88.00, 82.00),
('grammarly', 80.00, 82.00, 75.00, 85.00, 85.00),
('otter-ai', 75.00, 80.00, 78.00, 82.00, 80.00),
('fireflies-ai', 72.00, 78.00, 75.00, 80.00, 78.00),
('mem', 60.00, 70.00, 68.00, 75.00, 70.00),
('reclaim-ai', 58.00, 72.00, 70.00, 75.00, 72.00),

-- Research & Education
('consensus', 65.00, 78.00, 80.00, 80.00, 78.00),
('elicit', 62.00, 75.00, 75.00, 78.00, 75.00),
('scholarai', 58.00, 72.00, 78.00, 75.00, 72.00),
('chatpdf', 70.00, 75.00, 82.00, 78.00, 77.00),
('humata', 60.00, 72.00, 75.00, 75.00, 72.00),

-- Design & Creative
('canva-ai', 85.00, 82.00, 78.00, 85.00, 82.00),
('adobe-firefly', 80.00, 88.00, 70.00, 88.00, 80.00),
('remove-bg', 78.00, 75.00, 80.00, 78.00, 80.00),
('photor', 55.00, 70.00, 72.00, 72.00, 70.00),
('designify', 58.00, 72.00, 75.00, 75.00, 72.00),

-- Data & Analytics
('julius-ai', 65.00, 82.00, 75.00, 85.00, 78.00),
('tableau-ai', 75.00, 85.00, 60.00, 82.00, 78.00),
('rows', 60.00, 75.00, 72.00, 78.00, 72.00),
('polymer', 58.00, 72.00, 70.00, 75.00, 70.00),
('obviously-ai', 55.00, 70.00, 68.00, 72.00, 68.00),

-- Additional Popular Tools
('krisp', 68.00, 78.00, 75.00, 80.00, 78.00),
('descript', 72.00, 85.00, 72.00, 85.00, 80.00),
('beautiful-ai', 60.00, 72.00, 68.00, 72.00, 70.00),
('gamma', 68.00, 75.00, 75.00, 80.00, 75.00),
('tome', 65.00, 73.00, 72.00, 78.00, 73.00),
('lumen5', 62.00, 70.00, 68.00, 72.00, 70.00)

ON CONFLICT (tool_id) DO UPDATE SET
  popularity_score = EXCLUDED.popularity_score,
  functionality_score = EXCLUDED.functionality_score,
  value_score = EXCLUDED.value_score,
  development_score = EXCLUDED.development_score,
  user_rating_score = EXCLUDED.user_rating_score;

-- Verify insertion
SELECT tool_id, total_score, popularity_score, functionality_score, value_score 
FROM tool_scores 
ORDER BY total_score DESC 
LIMIT 20;
