import pkg from 'pg';
const { Client } = pkg;
import { readFileSync } from 'fs';

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

async function fixRLS() {
  try {
    console.log('🔌 Connecting to database...');
    await client.connect();
    console.log('✅ Connected!\n');

    console.log('📄 Running RLS fix...');
    const sql = readFileSync('./scripts/fix-rls-policies.sql', 'utf8');
    
    await client.query(sql);
    console.log('✅ RLS policies fixed!\n');
  } catch (error) {
    console.error('❌ Fix failed:', error.message);
  } finally {
    await client.end();
    console.log('🔌 Database connection closed');
  }
}

fixRLS();
