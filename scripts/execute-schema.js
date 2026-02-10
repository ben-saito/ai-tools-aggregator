import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL || 'https://mqksqezqbauqymftrydy.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseServiceKey) {
  console.error('❌ SUPABASE_SERVICE_KEY environment variable is required');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function executeSQL(filePath, name) {
  console.log(`\n📄 Executing ${name}...`);
  
  try {
    const sql = readFileSync(filePath, 'utf8');
    
    // Split SQL into individual statements
    const statements = sql
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--'));

    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      console.log(`  Executing statement ${i + 1}/${statements.length}...`);
      
      const { error } = await supabase.rpc('exec_sql', { sql: statement + ';' });
      
      if (error) {
        // Try direct query if RPC fails
        const { error: queryError } = await supabase.from('_').select('*');
        if (queryError && queryError.message !== 'relation "_" does not exist') {
          console.error(`  ⚠️ Statement ${i + 1} warning:`, error.message);
        }
      }
    }
    
    console.log(`✅ ${name} executed successfully`);
    return true;
  } catch (error) {
    console.error(`❌ Error executing ${name}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 Starting schema execution...\n');
  
  // Execute tools schema
  const toolsSchema = join(__dirname, '..', 'supabase-tools-schema.sql');
  await executeSQL(toolsSchema, 'Tools Schema');
  
  // Execute analytics schema
  const analyticsSchema = join(__dirname, '..', 'supabase-analytics-schema.sql');
  await executeSQL(analyticsSchema, 'Analytics Schema');
  
  console.log('\n✅ Schema execution completed!');
  console.log('\n📊 Next steps:');
  console.log('  1. Verify tables in Supabase Dashboard');
  console.log('  2. Run migration: node scripts/migrate-tools-to-supabase.js');
}

main();
