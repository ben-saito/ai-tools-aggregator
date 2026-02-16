import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const toolsData = JSON.parse(readFileSync('./data/tools.json', 'utf8'));

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL || 'https://mqksqezqbauqymftrydy.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseKey) {
  console.error('SUPABASE_SERVICE_KEY environment variable is required');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function initToolsStats() {
  console.log(`Initializing stats for ${toolsData.length} tools...`);

  let successCount = 0;
  let errorCount = 0;

  for (const tool of toolsData) {
    try {
      // Check if stats already exist
      const { data: existing } = await supabase
        .from('tools_stats')
        .select('tool_id')
        .eq('tool_id', tool.id)
        .single();

      if (existing) {
        console.log(`✓ Stats for ${tool.id} already exist, skipping`);
        continue;
      }

      // Insert initial stats
      const { error } = await supabase
        .from('tools_stats')
        .insert({
          tool_id: tool.id,
          view_count: Math.floor(Math.random() * 100) + 50, // Random 50-150 views
          upvote_count: Math.floor(Math.random() * 20), // Random 0-20 upvotes
          trending_score: Math.floor(Math.random() * 100),
        });

      if (error) throw error;

      console.log(`✓ Successfully initialized stats for: ${tool.name} (${tool.id})`);
      successCount++;

    } catch (error) {
      console.error(`✗ Error initializing stats for ${tool.name}: ${error.message}`);
      errorCount++;
    }
  }

  console.log(`\nStats initialization complete!`);
  console.log(`Success: ${successCount}`);
  console.log(`Errors: ${errorCount}`);
}

initToolsStats();
