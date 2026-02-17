#!/usr/bin/env node
/**
 * Google Analytics 4 (GA4) Report Generator
 * 
 * Requirements:
 * 1. GA4 Property ID (e.g., 123456789)
 * 2. Service Account JSON or OAuth2 credentials
 * 
 * Setup:
 * 1. Create service account: https://console.cloud.google.com/iam-admin/serviceaccounts
 * 2. Download JSON key
 * 3. Add service account email to GA4 property (as Viewer)
 * 4. Set environment variables:
 *    - GA4_PROPERTY_ID: Your GA4 property ID
 *    - GOOGLE_APPLICATION_CREDENTIALS: Path to service account JSON
 */

import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { readFileSync } from 'fs';

// Configuration
const PROPERTY_ID = process.env.GA4_PROPERTY_ID;
const CREDENTIALS_PATH = process.env.GOOGLE_APPLICATION_CREDENTIALS;

// Initialize client
let analyticsDataClient;

if (CREDENTIALS_PATH) {
  const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf8'));
  analyticsDataClient = new BetaAnalyticsDataClient({ credentials });
} else if (process.env.GA4_SERVICE_ACCOUNT_JSON) {
  const credentials = JSON.parse(process.env.GA4_SERVICE_ACCOUNT_JSON);
  analyticsDataClient = new BetaAnalyticsDataClient({ credentials });
} else {
  console.error('❌ Error: Missing GA4 credentials.');
  console.error('\nPlease set one of:');
  console.error('  1. GOOGLE_APPLICATION_CREDENTIALS=/path/to/service-account.json');
  console.error('  2. GA4_SERVICE_ACCOUNT_JSON=\'{"type":"service_account",...}\'');
  console.error('\nAnd:');
  console.error('  GA4_PROPERTY_ID=123456789 (your GA4 property ID, not measurement ID)\n');
  process.exit(1);
}

if (!PROPERTY_ID) {
  console.error('❌ Error: GA4_PROPERTY_ID environment variable not set.');
  console.error('   Example: export GA4_PROPERTY_ID=123456789\n');
  process.exit(1);
}

console.log('📊 Google Analytics 4 - Traffic Report\n');
console.log('='.repeat(80));
console.log(`Property ID: ${PROPERTY_ID}\n`);

async function runReport() {
  try {
    // 1. Daily traffic (last 14 days)
    console.log('\n📅 Daily Traffic (Last 14 Days)\n');
    console.log('-'.repeat(80));
    
    const [dailyResponse] = await analyticsDataClient.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [{ startDate: '14daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'date' }],
      metrics: [
        { name: 'sessions' },
        { name: 'totalUsers' },
        { name: 'screenPageViews' },
        { name: 'averageSessionDuration' },
        { name: 'bounceRate' },
      ],
      orderBys: [{ dimension: { dimensionName: 'date' }, desc: true }],
    });

    if (dailyResponse.rows && dailyResponse.rows.length > 0) {
      console.log('Date       | Sessions | Users | Page Views | Avg Duration | Bounce Rate');
      console.log('-'.repeat(80));
      
      let totalSessions = 0;
      let totalUsers = 0;
      let totalPageViews = 0;
      
      dailyResponse.rows.forEach(row => {
        const date = row.dimensionValues[0].value;
        const formattedDate = `${date.substring(0, 4)}-${date.substring(4, 6)}-${date.substring(6, 8)}`;
        const sessions = parseInt(row.metricValues[0].value);
        const users = parseInt(row.metricValues[1].value);
        const pageViews = parseInt(row.metricValues[2].value);
        const avgDuration = parseFloat(row.metricValues[3].value);
        const bounceRate = (parseFloat(row.metricValues[4].value) * 100).toFixed(1);
        
        totalSessions += sessions;
        totalUsers += users;
        totalPageViews += pageViews;
        
        console.log(
          `${formattedDate} | ${String(sessions).padStart(8)} | ${String(users).padStart(5)} | ${String(pageViews).padStart(10)} | ${String(Math.round(avgDuration)).padStart(12)}s | ${String(bounceRate).padStart(11)}%`
        );
      });
      
      console.log('-'.repeat(80));
      console.log(`Total (14d)| ${String(totalSessions).padStart(8)} | ${String(totalUsers).padStart(5)} | ${String(totalPageViews).padStart(10)}`);
      
      const avgSessions = Math.round(totalSessions / dailyResponse.rows.length);
      const avgUsers = Math.round(totalUsers / dailyResponse.rows.length);
      
      console.log(`\n📈 14-Day Averages:`);
      console.log(`   • Sessions/day: ${avgSessions}`);
      console.log(`   • Users/day: ${avgUsers}`);
      console.log(`   • Pages per session: ${(totalPageViews / totalSessions).toFixed(2)}`);
    } else {
      console.log('⚠️  No data available for the last 14 days.');
    }

    // 2. Traffic sources
    console.log('\n\n🔗 Traffic Sources (Last 7 Days)\n');
    console.log('-'.repeat(80));
    
    const [sourcesResponse] = await analyticsDataClient.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      dimensions: [
        { name: 'sessionSource' },
        { name: 'sessionMedium' },
      ],
      metrics: [
        { name: 'sessions' },
        { name: 'totalUsers' },
      ],
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
      limit: 10,
    });

    if (sourcesResponse.rows && sourcesResponse.rows.length > 0) {
      console.log('Source              | Medium    | Sessions | Users');
      console.log('-'.repeat(80));
      
      sourcesResponse.rows.forEach(row => {
        const source = row.dimensionValues[0].value.padEnd(18).substring(0, 18);
        const medium = row.dimensionValues[1].value.padEnd(8).substring(0, 8);
        const sessions = String(row.metricValues[0].value).padStart(8);
        const users = String(row.metricValues[1].value).padStart(5);
        
        console.log(`${source} | ${medium} | ${sessions} | ${users}`);
      });
    } else {
      console.log('⚠️  No traffic source data available.');
    }

    // 3. Top pages
    console.log('\n\n📄 Top 10 Pages (Last 7 Days)\n');
    console.log('-'.repeat(80));
    
    const [pagesResponse] = await analyticsDataClient.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'pagePath' }],
      metrics: [
        { name: 'screenPageViews' },
        { name: 'averageSessionDuration' },
      ],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: 10,
    });

    if (pagesResponse.rows && pagesResponse.rows.length > 0) {
      console.log('Rank | Page Path                                      | Views  | Avg Duration');
      console.log('-'.repeat(80));
      
      pagesResponse.rows.forEach((row, index) => {
        const rank = String(index + 1).padStart(4);
        const path = row.dimensionValues[0].value.padEnd(45).substring(0, 45);
        const views = String(row.metricValues[0].value).padStart(6);
        const duration = String(Math.round(parseFloat(row.metricValues[1].value))).padStart(12) + 's';
        
        console.log(`${rank} | ${path} | ${views} | ${duration}`);
      });
    } else {
      console.log('⚠️  No page view data available.');
    }

    // 4. Device categories
    console.log('\n\n📱 Device Breakdown (Last 7 Days)\n');
    console.log('-'.repeat(80));
    
    const [devicesResponse] = await analyticsDataClient.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'deviceCategory' }],
      metrics: [
        { name: 'sessions' },
        { name: 'totalUsers' },
        { name: 'bounceRate' },
      ],
    });

    if (devicesResponse.rows && devicesResponse.rows.length > 0) {
      console.log('Device    | Sessions | Users | Bounce Rate');
      console.log('-'.repeat(80));
      
      devicesResponse.rows.forEach(row => {
        const device = row.dimensionValues[0].value.padEnd(8);
        const sessions = String(row.metricValues[0].value).padStart(8);
        const users = String(row.metricValues[1].value).padStart(5);
        const bounceRate = (parseFloat(row.metricValues[2].value) * 100).toFixed(1) + '%';
        
        console.log(`${device} | ${sessions} | ${users} | ${bounceRate.padStart(11)}`);
      });
    } else {
      console.log('⚠️  No device data available.');
    }

    // 5. Geographic data
    console.log('\n\n🌍 Top 10 Countries (Last 7 Days)\n');
    console.log('-'.repeat(80));
    
    const [geoResponse] = await analyticsDataClient.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      dimensions: [{ name: 'country' }],
      metrics: [
        { name: 'sessions' },
        { name: 'totalUsers' },
      ],
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
      limit: 10,
    });

    if (geoResponse.rows && geoResponse.rows.length > 0) {
      console.log('Rank | Country              | Sessions | Users');
      console.log('-'.repeat(80));
      
      geoResponse.rows.forEach((row, index) => {
        const rank = String(index + 1).padStart(4);
        const country = row.dimensionValues[0].value.padEnd(20);
        const sessions = String(row.metricValues[0].value).padStart(8);
        const users = String(row.metricValues[1].value).padStart(5);
        
        console.log(`${rank} | ${country} | ${sessions} | ${users}`);
      });
    } else {
      console.log('⚠️  No geographic data available.');
    }

    console.log('\n' + '='.repeat(80));
    console.log('\n✅ Report generated successfully!\n');

  } catch (error) {
    console.error('\n❌ Error generating report:', error.message);
    
    if (error.message.includes('PERMISSION_DENIED')) {
      console.error('\n💡 Solution:');
      console.error('   1. Go to GA4 Admin → Property Access Management');
      console.error('   2. Add service account email as Viewer');
      console.error('   3. Wait a few minutes and try again\n');
    } else if (error.message.includes('NOT_FOUND')) {
      console.error('\n💡 Solution:');
      console.error('   1. Verify GA4_PROPERTY_ID is correct (numeric ID, not G-XXXXXXX)');
      console.error('   2. Find property ID: GA4 Admin → Property Details → PROPERTY ID\n');
    }
    
    process.exit(1);
  }
}

runReport();
