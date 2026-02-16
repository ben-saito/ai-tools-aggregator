import pkg from 'pg';
const { Client } = pkg;
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const client = new Client({
  host: 'db.mqksqezqbauqymftrydy.supabase.co',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'Bx19ehxIUn2zQnL1',
  ssl: {
    rejectUnauthorized: false
  }
});

async function runMigrations() {
  try {
    console.log('🔌 Connecting to database...');
    await client.connect();
    console.log('✅ Connected!\n');

    const migrationsDir = './supabase/migrations';
    
    // Priority migrations that need to run first
    const priorityMigrations = [
      'favorites_system.sql',
      'tags_system.sql',
      'launch_day_leaderboard.sql',
      'lead_gen.sql',
      'spam_moderation.sql',
      '20260212_add_tool_scores.sql',
      'verified_users.sql',
      'newsletter.sql'
    ];

    console.log('📦 Running priority migrations...\n');

    for (const filename of priorityMigrations) {
      const filepath = join(migrationsDir, filename);
      try {
        await runMigration(filepath, filename);
      } catch (error) {
        console.error(`❌ Failed to run ${filename}: ${error.message}`);
        // Continue with other migrations
      }
    }

    console.log('\n✅ All migrations completed!');
  } catch (error) {
    console.error('❌ Migration failed:', error);
  } finally {
    await client.end();
    console.log('\n🔌 Database connection closed');
  }
}

async function runMigration(filepath, filename) {
  try {
    console.log(`📄 Running: ${filename}`);
    const sql = readFileSync(filepath, 'utf8');
    
    await client.query(sql);
    console.log(`   ✅ Completed: ${filename}`);
  } catch (error) {
    // Check if it's just "already exists" errors, which are OK
    if (error.message.includes('already exists')) {
      console.log(`   ℹ️  Skipped: ${filename} (already exists)`);
    } else {
      console.error(`   ❌ Error in ${filename}:`, error.message);
      throw error;
    }
  }
}

runMigrations();
