#!/usr/bin/env node
/**
 * GA4 Daily Analytics Report
 * Sends daily report to Discord via OpenClaw
 * 
 * Usage:
 *   node scripts/ga4-daily-report.mjs [--yesterday | --week | --test]
 */

import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { readFileSync } from 'fs';
import { execSync } from 'child_process';

const PROPERTY_ID = process.env.GA4_PROPERTY_ID || '524489561';
const CREDENTIALS_PATH = process.env.GOOGLE_APPLICATION_CREDENTIALS || 
  new URL('../credentials/ga4-service-account.json', import.meta.url).pathname;
const DISCORD_CHANNEL = 'channel:1465425187184054367';

const args = process.argv.slice(2);
const isWeekly = args.includes('--week');
const isTest = args.includes('--test');
const isYesterday = args.includes('--yesterday') || (!isWeekly && !isTest);

// Date range
const startDate = isWeekly ? '7daysAgo' : 'yesterday';
const endDate = isWeekly ? 'yesterday' : 'yesterday';
const rangeLabel = isWeekly ? '過去7日間' : '昨日';

async function run() {
  const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf8'));
  const client = new BetaAnalyticsDataClient({ credentials });
  const property = `properties/${PROPERTY_ID}`;

  // 1. Overview metrics
  const [overviewRes] = await client.runReport({
    property,
    dateRanges: [
      { startDate, endDate },
      { startDate: isWeekly ? '14daysAgo' : '2daysAgo', endDate: isWeekly ? '8daysAgo' : '2daysAgo' },
    ],
    metrics: [
      { name: 'sessions' },
      { name: 'activeUsers' },
      { name: 'screenPageViews' },
      { name: 'bounceRate' },
      { name: 'averageSessionDuration' },
    ],
  });

  const cur = overviewRes.rows?.[0]?.metricValues || [];
  const prev = overviewRes.rows?.[1]?.metricValues || [];

  const sessions = parseInt(cur[0]?.value || 0);
  const users = parseInt(cur[1]?.value || 0);
  const pvs = parseInt(cur[2]?.value || 0);
  const bounceRate = parseFloat(cur[3]?.value || 0) * 100;
  const avgDuration = parseFloat(cur[4]?.value || 0);

  const prevSessions = parseInt(prev[0]?.value || 0);
  const prevPvs = parseInt(prev[2]?.value || 0);

  const sessDiff = prevSessions > 0 ? Math.round(((sessions - prevSessions) / prevSessions) * 100) : null;
  const pvDiff = prevPvs > 0 ? Math.round(((pvs - prevPvs) / prevPvs) * 100) : null;

  const diffIcon = (n) => n === null ? '' : n > 10 ? ' 📈' : n < -10 ? ' 📉' : ' →';
  const diffStr = (n) => n === null ? '' : ` (${n > 0 ? '+' : ''}${n}%)`;

  // 2. Top pages
  const [pagesRes] = await client.runReport({
    property,
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: 'pagePath' }],
    metrics: [{ name: 'screenPageViews' }, { name: 'activeUsers' }],
    orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
    limit: 8,
  });

  // 3. Traffic sources
  const [srcRes] = await client.runReport({
    property,
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: 'sessionSource' }],
    metrics: [{ name: 'sessions' }],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
    limit: 6,
  });

  // 4. Device breakdown
  const [devRes] = await client.runReport({
    property,
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: 'deviceCategory' }],
    metrics: [{ name: 'sessions' }],
    orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
  });

  // Format duration
  const fmtDuration = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.round(secs % 60);
    return m > 0 ? `${m}分${s}秒` : `${s}秒`;
  };

  // Build report message
  const now = new Date();
  const jstDate = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const dateStr = jstDate.toISOString().slice(0, 10);

  let msg = `📊 **AI Tools Hub アナリティクスレポート（${rangeLabel}）**\n`;
  msg += `> ${dateStr} JST\n\n`;

  msg += `**📈 概要**\n`;
  msg += `- セッション: **${sessions}**${diffStr(sessDiff)}${diffIcon(sessDiff)}\n`;
  msg += `- ユーザー数: **${users}**\n`;
  msg += `- ページビュー: **${pvs}**${diffStr(pvDiff)}${diffIcon(pvDiff)}\n`;
  msg += `- 直帰率: **${bounceRate.toFixed(1)}%**\n`;
  msg += `- 平均セッション時間: **${fmtDuration(avgDuration)}**\n\n`;

  msg += `**📄 人気ページ TOP8**\n`;
  for (const row of pagesRes.rows || []) {
    const path = row.dimensionValues[0].value;
    const pv = row.metricValues[0].value;
    const u = row.metricValues[1].value;
    const shortPath = path.length > 45 ? path.substring(0, 44) + '…' : path;
    msg += `- \`${shortPath}\` — PV: **${pv}** / ユーザー: ${u}\n`;
  }

  msg += `\n**🔀 流入元**\n`;
  for (const row of srcRes.rows || []) {
    const src = row.dimensionValues[0].value;
    const s = row.metricValues[0].value;
    const icon = src === '(direct)' ? '🔗' : src.includes('t.co') ? '🐦' : src.includes('google') ? '🔍' : '🌐';
    msg += `- ${icon} ${src}: **${s}** セッション\n`;
  }

  msg += `\n**📱 デバイス**\n`;
  const totalSess = (devRes.rows || []).reduce((s, r) => s + parseInt(r.metricValues[0].value), 0);
  for (const row of devRes.rows || []) {
    const dev = row.dimensionValues[0].value;
    const s = parseInt(row.metricValues[0].value);
    const pct = totalSess > 0 ? Math.round((s / totalSess) * 100) : 0;
    const icon = dev === 'mobile' ? '📱' : dev === 'desktop' ? '💻' : '📟';
    msg += `- ${icon} ${dev}: ${s} (${pct}%)\n`;
  }

  msg += `\n*Source: Google Analytics 4 | Property: ${PROPERTY_ID}*`;

  if (isTest) {
    console.log(msg);
    return;
  }

  // Send via openclaw message tool (we output the message for the cron agent to send)
  console.log(msg);
}

run().catch(err => {
  console.error('GA4 report error:', err.message);
  process.exit(1);
});
