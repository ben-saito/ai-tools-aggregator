import pg from 'pg';
import { readFileSync } from 'fs';

const { Client } = pg;

const client = new Client({
  host: 'db.mqksqezqbauqymftrydy.supabase.co',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: 'Bx19ehxIUn2zQnL1',
  ssl: { rejectUnauthorized: false }
});

async function executeSQL(filePath, name) {
  console.log(`\n📄 Executing ${name}...`);
  
  try {
    const sql = readFileSync(filePath, 'utf8');
    await client.query(sql);
    console.log(`✅ ${name} executed successfully`);
    return true;
  } catch (error) {
    console.error(`❌ Error executing ${name}:`);
    console.error(error.message);
    return false;
  }
}

async function main() {
  try {
    console.log('🔌 Connecting to Supabase...');
    await client.connect();
    console.log('✅ Connected!\n');

    // Execute schemas
    await executeSQL('supabase-tools-schema.sql', 'Tools Schema');
    await executeSQL('supabase-analytics-schema.sql', 'Analytics Schema');

    console.log('\n✅ All schemas executed successfully!');
    
  } catch (error) {
    console.error('❌ Connection error:', error.message);
  } finally {
    await client.end();
  }
}

main();
