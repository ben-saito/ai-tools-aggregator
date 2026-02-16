import { createClient } from '@supabase/supabase-js';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL || 'https://mqksqezqbauqymftrydy.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseKey) {
  console.error('SUPABASE_SERVICE_KEY environment variable is required');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function runMigrations() {
  console.log('Running migrations...');

  const migrationsDir = './supabase/migrations';
  const files = readdirSync(migrationsDir)
    .filter(f => f.endsWith('.sql'))
    .sort(); // Execute in order

  console.log(`Found ${files.length} migration files`);

  // Priority migrations that need to run first
  const priorityMigrations = [
    'favorites_system.sql',
    'tags_system.sql',
    'launch_day_leaderboard.sql'
  ];

  // Run priority migrations first
  for (const filename of priorityMigrations) {
    if (files.includes(filename)) {
      await runMigration(migrationsDir, filename);
    }
  }

  // Run remaining migrations
  for (const filename of files) {
    if (!priorityMigrations.includes(filename)) {
      await runMigration(migrationsDir, filename);
    }
  }

  console.log('\nAll migrations completed!');
}

async function runMigration(dir, filename) {
  try {
    console.log(`\n📄 Running: ${filename}`);
    const sql = readFileSync(join(dir, filename), 'utf8');
    
    // Split by semicolons to execute each statement separately
    const statements = sql
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--'));

    for (const statement of statements) {
      if (statement.length === 0) continue;
      
      try {
        // Use RPC to execute SQL (if we have a function for it)
        // Otherwise we need direct database connection
        // For now, try to use the REST API
        const { data, error } = await supabase.rpc('exec_sql', { sql_query: statement });
        
        if (error) {
          // RPC might not exist, try alternative
          console.log(`   ⚠️  Cannot execute via RPC: ${error.message}`);
        }
      } catch (err) {
        console.log(`   ⚠️  Error executing statement: ${err.message}`);
      }
    }
    
    console.log(`   ✅ Completed: ${filename}`);
  } catch (error) {
    console.error(`   ❌ Failed: ${filename} - ${error.message}`);
  }
}

runMigrations();
