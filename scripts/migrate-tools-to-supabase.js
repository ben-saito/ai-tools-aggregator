import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const toolsData = JSON.parse(readFileSync('./data/tools.json', 'utf8'));

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL || 'https://mqksqezqbauqymftrydy.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_KEY; // Use service key for admin operations

if (!supabaseKey) {
  console.error('SUPABASE_SERVICE_KEY environment variable is required');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function migrateTools() {
  console.log(`Starting migration of ${toolsData.length} tools...`);

  let successCount = 0;
  let errorCount = 0;

  for (const tool of toolsData) {
    try {
      // Check if tool already exists
      const { data: existing } = await supabase
        .from('tools')
        .select('id')
        .eq('id', tool.id)
        .single();

      if (existing) {
        console.log(`✓ Tool ${tool.id} already exists, skipping`);
        continue;
      }

      // Insert tool
      const { data, error } = await supabase
        .from('tools')
        .insert({
          id: tool.id,
          name: tool.name,
          description: tool.description,
          category: tool.category,
          pricing: tool.pricing,
          url: tool.url,
          website_url: tool.websiteUrl || tool.url,
          logo_url: tool.logoUrl,
          featured: tool.featured || false,
          verified: true, // Mark as verified since these are curated
          submitted_by: null, // Admin-added tools
        });

      if (error) throw error;

      // Insert features if any
      if (tool.features && tool.features.length > 0) {
        const features = tool.features.map(feature => ({
          tool_id: tool.id,
          feature: feature,
        }));

        const { error: featuresError } = await supabase
          .from('tool_features')
          .insert(features);

        if (featuresError) throw featuresError;
      }

      // Insert use cases if any
      if (tool.useCases && tool.useCases.length > 0) {
        const useCases = tool.useCases.map(useCase => ({
          tool_id: tool.id,
          use_case: useCase,
        }));

        const { error: useCasesError } = await supabase
          .from('tool_use_cases')
          .insert(useCases);

        if (useCasesError) throw useCasesError;
      }

      console.log(`✓ Successfully migrated: ${tool.name} (${tool.id})`);
      successCount++;

    } catch (error) {
      console.error(`✗ Error migrating ${tool.name}: ${error.message}`);
      errorCount++;
    }
  }

  console.log(`\nMigration complete!`);
  console.log(`Success: ${successCount}`);
  console.log(`Errors: ${errorCount}`);
}

migrateTools();
