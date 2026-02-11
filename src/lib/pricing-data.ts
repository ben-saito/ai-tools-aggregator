/**
 * Pricing information for AI tools
 * Manually collected from each tool's official website
 * Last updated: 2026-02-12
 */

export interface PricingPlan {
  name: string;
  price: number | null; // null for custom/enterprise pricing
  billing: 'monthly' | 'annually' | 'per user/month' | 'per seat/month' | 'forever' | 'custom';
  annual?: number; // annual price if different
  limits?: string; // e.g., "3 videos/month"
}

export interface ToolPricing {
  id: string;
  name: string;
  plans: PricingPlan[];
  priceDisplay: string; // e.g., "Free, $20/mo, $100/mo"
  priceDisplayJa: string; // Japanese version
  currency: string;
  note?: string;
  lastChecked: string;
}

export const pricingData: Record<string, ToolPricing> = {
  'chatgpt': {
    id: 'chatgpt',
    name: 'ChatGPT',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Go', price: 9, billing: 'monthly' },
      { name: 'Plus', price: 20, billing: 'monthly' },
      { name: 'Pro', price: 200, billing: 'monthly' }
    ],
    priceDisplay: 'Free, $9/mo, $20/mo, $200/mo',
    priceDisplayJa: '無料, $9/月, $20/月, $200/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'github-copilot': {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Pro', price: 10, billing: 'monthly', annual: 100 },
      { name: 'Pro+', price: 39, billing: 'monthly', annual: 390 }
    ],
    priceDisplay: 'Free, $10/mo, $39/mo',
    priceDisplayJa: '無料, $10/月, $39/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'heygen': {
    id: 'heygen',
    name: 'HeyGen',
    plans: [
      { name: 'Free', price: 0, billing: 'forever', limits: '3 videos/month' },
      { name: 'Creator', price: 29, billing: 'monthly' },
      { name: 'Pro', price: 99, billing: 'monthly' }
    ],
    priceDisplay: 'Free, $29/mo, $99/mo',
    priceDisplayJa: '無料, $29/月, $99/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'codeium': {
    id: 'codeium',
    name: 'Codeium',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Pro', price: 15, billing: 'monthly' },
      { name: 'Teams', price: 30, billing: 'per user/month' }
    ],
    priceDisplay: 'Free, $15/mo, $30/user/mo',
    priceDisplayJa: '無料, $15/月, $30/ユーザー/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'claude': {
    id: 'claude',
    name: 'Claude',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Pro', price: 20, billing: 'monthly', annual: 200 },
      { name: 'Max', price: 100, billing: 'per user/month' },
      { name: 'Team', price: 25, billing: 'per seat/month', annual: 20 }
    ],
    priceDisplay: 'Free, $20/mo, $100+/mo',
    priceDisplayJa: '無料, $20/月, $100~/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'cursor': {
    id: 'cursor',
    name: 'Cursor',
    plans: [
      { name: 'Hobby', price: 0, billing: 'forever' },
      { name: 'Individual', price: 60, billing: 'monthly' },
      { name: 'Teams', price: 40, billing: 'per user/month' },
      { name: 'Enterprise', price: null, billing: 'custom' }
    ],
    priceDisplay: 'Free, $60/mo, $40/user/mo',
    priceDisplayJa: '無料, $60/月, $40/ユーザー/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'midjourney': {
    id: 'midjourney',
    name: 'Midjourney',
    plans: [
      { name: 'Basic', price: 10, billing: 'monthly' },
      { name: 'Standard', price: 30, billing: 'monthly' },
      { name: 'Pro', price: 60, billing: 'monthly' },
      { name: 'Mega', price: 120, billing: 'monthly' }
    ],
    priceDisplay: '$10/mo, $30/mo, $60/mo, $120/mo',
    priceDisplayJa: '$10/月, $30/月, $60/月, $120/月',
    currency: 'USD',
    note: 'No free plan',
    lastChecked: '2026-02-12'
  }
};

/**
 * Get pricing info for a tool
 */
export function getToolPricing(toolId: string): ToolPricing | null {
  return pricingData[toolId] || null;
}

/**
 * Get price display string for a tool
 */
export function getPriceDisplay(toolId: string, lang: 'en' | 'ja' = 'en'): string | null {
  const pricing = getToolPricing(toolId);
  if (!pricing) return null;
  return lang === 'ja' ? pricing.priceDisplayJa : pricing.priceDisplay;
}
