import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mqksqezqbauqymftrydy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xa3NxZXpxYmF1cXltZnRyeWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2ODIwMDIsImV4cCI6MjA4NjI1ODAwMn0.Bf6nGo9I0skJWwFnXHHAKOBSBepYx7G8OHLw3Ih_Ytw';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Tools to update based on web scraping results
const updates = [
  { id: 'codeium', pricing: 'freemium', reason: 'Has Free ($0/month) and Pro ($15/month) plans' },
  { id: 'github-copilot', pricing: 'freemium', reason: 'Has Free ($0), Pro ($10/mo), and Pro+ ($39/mo) plans' },
  { id: 'notion-ai', pricing: 'freemium', reason: 'Notion has free plan, AI has limited trial' },
];

async function main() {
  console.log('📝 Updating pricing information...\n');
  
  for (const { id, pricing, reason } of updates) {
    console.log(`Updating ${id}:`);
    console.log(`  Reason: ${reason}`);
    console.log(`  New pricing: ${pricing}`);
    
    const { error } = await supabase
      .from('tools')
      .update({ pricing })
      .eq('id', id);
    
    if (error) {
      console.log(`  ❌ Error: ${error.message}`);
    } else {
      console.log(`  ✅ Updated successfully`);
    }
    console.log('');
  }
  
  console.log('✅ Done!');
}

main();
