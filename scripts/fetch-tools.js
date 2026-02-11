import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mqksqezqbauqymftrydy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xa3NxZXpxYmF1cXltZnRyeWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2ODIwMDIsImV4cCI6MjA4NjI1ODAwMn0.Bf6nGo9I0skJWwFnXHHAKOBSBepYx7G8OHLw3Ih_Ytw';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function main() {
  const { data: tools, error } = await supabase
    .from('tools')
    .select('id, name, url, pricing')
    .order('name')
    .limit(10);
  
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }
  
  console.log(JSON.stringify(tools, null, 2));
}

main();
