import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';

const supabaseUrl = 'https://mqksqezqbauqymftrydy.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xa3NxZXpxYmF1cXltZnRyeWR5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDY4MjAwMiwiZXhwIjoyMDg2MjU4MDAyfQ.yK6V5spRPOCIPbXIP6TDeCRqeuSBp6D0mtZC6Q-BPvQ';

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

console.log('🚀 Starting schema execution...\n');

// Read SQL files
const toolsSchema = readFileSync('supabase-tools-schema.sql', 'utf8');
const analyticsSchema = readFileSync('supabase-analytics-schema.sql', 'utf8');

// Execute SQL via REST API
async function executeSQLViaAPI(sql, name) {
  console.log(`📄 Executing ${name}...`);
  
  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseServiceKey,
        'Authorization': `Bearer ${supabaseServiceKey}`
      },
      body: JSON.stringify({ sql })
    });

    if (!response.ok) {
      const error = await response.text();
      console.log(`⚠️  ${name}: REST API method not available (expected)`);
      console.log('   Using manual SQL execution approach...\n');
      return false;
    }

    console.log(`✅ ${name} executed successfully\n`);
    return true;
  } catch (error) {
    console.log(`⚠️  ${name}: ${error.message}\n`);
    return false;
  }
}

// Try REST API first
await executeSQLViaAPI(toolsSchema, 'Tools Schema');
await executeSQLViaAPI(analyticsSchema, 'Analytics Schema');

console.log('📋 Manual execution required:');
console.log('   Supabase Dashboard → SQL Editor');
console.log('   1. Execute supabase-tools-schema.sql');
console.log('   2. Execute supabase-analytics-schema.sql\n');

console.log('💡 Alternative: Run via psql:');
console.log('   psql "postgresql://postgres.mqksqezqbauqymftrydy:[PASSWORD]@db.mqksqezqbauqymftrydy.supabase.co:5432/postgres" -f supabase-tools-schema.sql');
