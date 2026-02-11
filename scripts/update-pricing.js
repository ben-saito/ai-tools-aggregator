/**
 * Update pricing information for all tools by fetching from their websites
 * Usage: node scripts/update-pricing.js
 */

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://mqksqezqbauqymftrydy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xa3NxZXpxYmF1cXltZnRyeWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2ODIwMDIsImV4cCI6MjA4NjI1ODAwMn0.Bf6nGo9I0skJWwFnXHHAKOBSBepYx7G8OHLw3Ih_Ytw';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Pricing detection keywords
const pricingKeywords = {
  free: ['free', '無料', 'no cost', 'free forever', 'always free', '$0'],
  freemium: ['freemium', 'free plan', 'free tier', 'free version', 'starter free', 'basic free', 'free trial'],
  paid: ['paid', 'subscription', 'pricing', 'plans', 'buy now', 'purchase', 'payment required', '$', '¥', '€'],
  openSource: ['open source', 'open-source', 'github', 'mit license', 'apache license', 'オープンソース']
};

/**
 * Detect pricing model from text content
 */
function detectPricing(content) {
  const lowerContent = content.toLowerCase();
  
  // Check for open source first
  if (pricingKeywords.openSource.some(kw => lowerContent.includes(kw))) {
    // If it has pricing info too, it's likely open-source with paid services
    if (pricingKeywords.paid.some(kw => lowerContent.includes(kw))) {
      return 'freemium';
    }
    return 'open-source';
  }
  
  // Check for freemium indicators
  const hasFree = pricingKeywords.free.some(kw => lowerContent.includes(kw));
  const hasFreemium = pricingKeywords.freemium.some(kw => lowerContent.includes(kw));
  const hasPaid = pricingKeywords.paid.some(kw => lowerContent.includes(kw));
  
  if (hasFreemium || (hasFree && hasPaid)) {
    return 'freemium';
  }
  
  if (hasFree) {
    return 'free';
  }
  
  if (hasPaid) {
    return 'paid';
  }
  
  return null; // Could not determine
}

/**
 * Fetch pricing info from a tool's website
 */
async function fetchToolPricing(tool) {
  try {
    console.log(`\n[${tool.name}] Fetching pricing from ${tool.url}...`);
    
    // Use Clawdbot's web_fetch (simulated via fetch for now)
    const response = await fetch(tool.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; PricingBot/1.0)',
      },
      timeout: 10000
    });
    
    if (!response.ok) {
      console.log(`  ⚠️  HTTP ${response.status} - Skipping`);
      return null;
    }
    
    const html = await response.text();
    
    // Simple text extraction (remove HTML tags)
    const text = html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .toLowerCase();
    
    const pricing = detectPricing(text);
    
    if (pricing) {
      console.log(`  ✅ Detected: ${pricing}`);
      return pricing;
    } else {
      console.log(`  ⚠️  Could not detect pricing model`);
      return null;
    }
    
  } catch (error) {
    console.log(`  ❌ Error: ${error.message}`);
    return null;
  }
}

/**
 * Update tool pricing in database
 */
async function updateToolPricing(toolId, pricing) {
  const { error } = await supabase
    .from('tools')
    .update({ pricing })
    .eq('id', toolId);
  
  if (error) {
    console.error(`  ❌ Database update failed:`, error);
    return false;
  }
  
  console.log(`  💾 Database updated`);
  return true;
}

/**
 * Main function
 */
async function main() {
  console.log('🔍 Fetching all tools from database...\n');
  
  const { data: tools, error } = await supabase
    .from('tools')
    .select('id, name, url, pricing')
    .order('name');
  
  if (error) {
    console.error('❌ Failed to fetch tools:', error);
    process.exit(1);
  }
  
  console.log(`Found ${tools.length} tools\n`);
  console.log('━'.repeat(60));
  
  let updated = 0;
  let skipped = 0;
  let failed = 0;
  
  for (const tool of tools) {
    const detectedPricing = await fetchToolPricing(tool);
    
    if (detectedPricing && detectedPricing !== tool.pricing) {
      console.log(`  📝 Current: ${tool.pricing} → New: ${detectedPricing}`);
      const success = await updateToolPricing(tool.id, detectedPricing);
      if (success) {
        updated++;
      } else {
        failed++;
      }
    } else if (detectedPricing === tool.pricing) {
      console.log(`  ✓ Already correct (${tool.pricing})`);
      skipped++;
    } else {
      console.log(`  ⊘ No change (keeping ${tool.pricing})`);
      skipped++;
    }
    
    // Rate limiting: wait 1 second between requests
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n' + '━'.repeat(60));
  console.log('\n📊 Summary:');
  console.log(`   Updated: ${updated}`);
  console.log(`   Skipped: ${skipped}`);
  console.log(`   Failed: ${failed}`);
  console.log(`   Total: ${tools.length}`);
  console.log('\n✅ Done!');
}

// Run
main().catch(console.error);
