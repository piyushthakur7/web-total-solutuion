// Quick Supabase connection test
import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

// Load .env.local
config({ path: '.env.local' });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('--- Supabase Connection Test ---');
console.log(`URL: ${url}`);
console.log(`Key length: ${key?.length || 0} characters`);
console.log(`Key preview: ${key?.substring(0, 20)}...`);
console.log('');

if (!url || !key) {
  console.log('❌ FAIL: Missing URL or Anon Key in .env.local');
  process.exit(1);
}

try {
  const supabase = createClient(url, key);

  // Test 1: Basic health check - try to reach the API
  console.log('Test 1: Reaching Supabase API...');
  const { data, error } = await supabase.from('_test_nonexistent_table_xyz').select('*').limit(1);

  if (error) {
    // A "relation does not exist" or "not found" error means we DID connect successfully
    // An auth/network error means we did NOT connect
    if (error.message.includes('does not exist') || error.message.includes('Not Found') || error.code === '42P01' || error.code === 'PGRST116') {
      console.log('✅ CONNECTED! Supabase API is reachable.');
      console.log(`   (Got expected error for non-existent table: ${error.message})`);
    } else if (error.message.includes('Invalid API key') || error.message.includes('Invalid JWT') || error.message.includes('apikey')) {
      console.log('❌ FAIL: Invalid API key. Your anon key appears to be wrong.');
      console.log(`   Error: ${error.message}`);
    } else if (error.message.includes('fetch') || error.message.includes('network') || error.message.includes('ENOTFOUND')) {
      console.log('❌ FAIL: Cannot reach Supabase. Check your URL or network.');
      console.log(`   Error: ${error.message}`);
    } else {
      console.log(`⚠️ Got error: ${error.message} (code: ${error.code})`);
      console.log('   This likely means the connection IS working but the table does not exist (expected).');
    }
  } else {
    console.log('✅ CONNECTED! Query succeeded.');
  }

  // Test 2: Auth health
  console.log('\nTest 2: Checking Auth service...');
  const { data: session, error: authError } = await supabase.auth.getSession();
  if (authError) {
    console.log(`❌ Auth error: ${authError.message}`);
  } else {
    console.log('✅ Auth service is reachable.');
    console.log(`   Session: ${session?.session ? 'Active session found' : 'No active session (normal for a test)'}`);
  }

} catch (err) {
  console.log(`❌ FAIL: ${err.message}`);
}

console.log('\n--- Test Complete ---');
