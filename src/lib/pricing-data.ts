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
  },
  'grammarly': {
    id: 'grammarly',
    name: 'Grammarly',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Pro', price: 12, billing: 'monthly' },
      { name: 'Enterprise', price: null, billing: 'custom' }
    ],
    priceDisplay: 'Free, $12/mo, Enterprise',
    priceDisplayJa: '無料, $12/月, Enterprise',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'v0-dev': {
    id: 'v0-dev',
    name: 'v0.dev',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Premium', price: 20, billing: 'monthly' },
      { name: 'Team', price: 30, billing: 'per user/month' },
      { name: 'Business', price: 100, billing: 'per user/month' }
    ],
    priceDisplay: 'Free, $20/mo, $30/user/mo',
    priceDisplayJa: '無料, $20/月, $30/ユーザー/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'gemini': {
    id: 'gemini',
    name: 'Gemini',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Advanced', price: 20, billing: 'monthly', note: 'Part of Google One AI Premium' }
    ],
    priceDisplay: 'Free, $20/mo (Advanced)',
    priceDisplayJa: '無料, $20/月 (Advanced)',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'perplexity': {
    id: 'perplexity',
    name: 'Perplexity AI',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Pro', price: 20, billing: 'monthly', annual: 200 }
    ],
    priceDisplay: 'Free, $20/mo',
    priceDisplayJa: '無料, $20/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'dall-e': {
    id: 'dall-e',
    name: 'DALL-E 3',
    plans: [
      { name: 'Pay-per-use', price: null, billing: 'custom', note: 'Via ChatGPT Plus ($20/mo) or API' }
    ],
    priceDisplay: 'Via ChatGPT Plus ($20/mo)',
    priceDisplayJa: 'ChatGPT Plus経由 ($20/月)',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'runway': {
    id: 'runway',
    name: 'Runway',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Standard', price: 12, billing: 'monthly' },
      { name: 'Pro', price: 28, billing: 'monthly' },
      { name: 'Unlimited', price: 76, billing: 'monthly' }
    ],
    priceDisplay: 'Free, $12/mo, $28/mo, $76/mo',
    priceDisplayJa: '無料, $12/月, $28/月, $76/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'suno': {
    id: 'suno',
    name: 'Suno',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Pro', price: 10, billing: 'monthly' },
      { name: 'Premier', price: 30, billing: 'monthly' }
    ],
    priceDisplay: 'Free, $10/mo, $30/mo',
    priceDisplayJa: '無料, $10/月, $30/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'leonardo-ai': {
    id: 'leonardo-ai',
    name: 'Leonardo.ai',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Apprentice', price: 12, billing: 'monthly' },
      { name: 'Artisan', price: 30, billing: 'monthly' },
      { name: 'Maestro', price: 60, billing: 'monthly' }
    ],
    priceDisplay: 'Free, $12/mo, $30/mo, $60/mo',
    priceDisplayJa: '無料, $12/月, $30/月, $60/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'jasper': {
    id: 'jasper',
    name: 'Jasper',
    plans: [
      { name: 'Creator', price: 49, billing: 'monthly' },
      { name: 'Pro', price: 125, billing: 'monthly' },
      { name: 'Business', price: null, billing: 'custom' }
    ],
    priceDisplay: '$49/mo, $125/mo, Custom',
    priceDisplayJa: '$49/月, $125/月, カスタム',
    currency: 'USD',
    note: 'No free plan, 7-day free trial',
    lastChecked: '2026-02-12'
  },
  'notion-ai': {
    id: 'notion-ai',
    name: 'Notion AI',
    plans: [
      { name: 'Free', price: 0, billing: 'forever', note: 'Notion free plan + limited AI trial' },
      { name: 'Plus', price: 10, billing: 'per user/month' },
      { name: 'Business', price: 18, billing: 'per user/month' }
    ],
    priceDisplay: 'Free trial, $10/user/mo, $18/user/mo',
    priceDisplayJa: '無料トライアル, $10/ユーザー/月, $18/ユーザー/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'elevenlabs': {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Starter', price: 5, billing: 'monthly' },
      { name: 'Creator', price: 22, billing: 'monthly' },
      { name: 'Pro', price: 99, billing: 'monthly' }
    ],
    priceDisplay: 'Free, $5/mo, $22/mo, $99/mo',
    priceDisplayJa: '無料, $5/月, $22/月, $99/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'descript': {
    id: 'descript',
    name: 'Descript',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Hobbyist', price: 12, billing: 'monthly' },
      { name: 'Creator', price: 24, billing: 'monthly' },
      { name: 'Pro', price: 40, billing: 'per user/month' }
    ],
    priceDisplay: 'Free, $12/mo, $24/mo, $40/user/mo',
    priceDisplayJa: '無料, $12/月, $24/月, $40/ユーザー/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'otter': {
    id: 'otter',
    name: 'Otter.ai',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Pro', price: 17, billing: 'monthly' },
      { name: 'Business', price: 30, billing: 'per user/month' }
    ],
    priceDisplay: 'Free, $17/mo, $30/user/mo',
    priceDisplayJa: '無料, $17/月, $30/ユーザー/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'synthesia': {
    id: 'synthesia',
    name: 'Synthesia',
    plans: [
      { name: 'Starter', price: 22, billing: 'monthly' },
      { name: 'Creator', price: 67, billing: 'monthly' },
      { name: 'Enterprise', price: null, billing: 'custom' }
    ],
    priceDisplay: '$22/mo, $67/mo, Enterprise',
    priceDisplayJa: '$22/月, $67/月, Enterprise',
    currency: 'USD',
    note: 'No free plan',
    lastChecked: '2026-02-12'
  },
  'pictory': {
    id: 'pictory',
    name: 'Pictory',
    plans: [
      { name: 'Standard', price: 19, billing: 'monthly' },
      { name: 'Premium', price: 39, billing: 'monthly' },
      { name: 'Teams', price: 99, billing: 'monthly' }
    ],
    priceDisplay: '$19/mo, $39/mo, $99/mo',
    priceDisplayJa: '$19/月, $39/月, $99/月',
    currency: 'USD',
    note: '14-day free trial',
    lastChecked: '2026-02-12'
  },
  'looka': {
    id: 'looka',
    name: 'Looka',
    plans: [
      { name: 'Basic', price: 20, billing: 'one-time' },
      { name: 'Premium', price: 65, billing: 'one-time' }
    ],
    priceDisplay: '$20 (one-time), $65 (one-time)',
    priceDisplayJa: '$20 (買い切り), $65 (買い切り)',
    currency: 'USD',
    note: 'One-time purchase for logo package',
    lastChecked: '2026-02-12'
  },
  'motion': {
    id: 'motion',
    name: 'Motion',
    plans: [
      { name: 'Individual', price: 34, billing: 'monthly', annual: 19 },
      { name: 'Team', price: 20, billing: 'per user/month' }
    ],
    priceDisplay: '$34/mo ($19/mo annual), $20/user/mo',
    priceDisplayJa: '$34/月 ($19/月 年払い), $20/ユーザー/月',
    currency: 'USD',
    note: '7-day free trial',
    lastChecked: '2026-02-12'
  },
  'tabnine': {
    id: 'tabnine',
    name: 'Tabnine',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Pro', price: 12, billing: 'per user/month' },
      { name: 'Enterprise', price: 39, billing: 'per user/month' }
    ],
    priceDisplay: 'Free, $12/user/mo, $39/user/mo',
    priceDisplayJa: '無料, $12/ユーザー/月, $39/ユーザー/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'replit': {
    id: 'replit',
    name: 'Replit',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Core', price: 25, billing: 'monthly' },
      { name: 'Teams', price: null, billing: 'custom' }
    ],
    priceDisplay: 'Free, $25/mo, Teams (custom)',
    priceDisplayJa: '無料, $25/月, Teams (カスタム)',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'copyai': {
    id: 'copyai',
    name: 'Copy.ai',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Pro', price: 49, billing: 'monthly' },
      { name: 'Team', price: 249, billing: 'monthly' }
    ],
    priceDisplay: 'Free, $49/mo, $249/mo',
    priceDisplayJa: '無料, $49/月, $249/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'writesonic': {
    id: 'writesonic',
    name: 'Writesonic',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Individual', price: 20, billing: 'monthly' },
      { name: 'Teams', price: 30, billing: 'per user/month' }
    ],
    priceDisplay: 'Free, $20/mo, $30/user/mo',
    priceDisplayJa: '無料, $20/月, $30/ユーザー/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'framer-ai': {
    id: 'framer-ai',
    name: 'Framer',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Mini', price: 5, billing: 'per site/month' },
      { name: 'Basic', price: 15, billing: 'per site/month' },
      { name: 'Pro', price: 30, billing: 'per site/month' }
    ],
    priceDisplay: 'Free, $5/site/mo, $15/site/mo, $30/site/mo',
    priceDisplayJa: '無料, $5/サイト/月, $15/サイト/月, $30/サイト/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'tome': {
    id: 'tome',
    name: 'Tome',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Pro', price: 20, billing: 'monthly' },
      { name: 'Enterprise', price: null, billing: 'custom' }
    ],
    priceDisplay: 'Free, $20/mo, Enterprise',
    priceDisplayJa: '無料, $20/月, Enterprise',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'gamma': {
    id: 'gamma',
    name: 'Gamma',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Plus', price: 10, billing: 'per user/month' },
      { name: 'Pro', price: 20, billing: 'per user/month' }
    ],
    priceDisplay: 'Free, $10/user/mo, $20/user/mo',
    priceDisplayJa: '無料, $10/ユーザー/月, $20/ユーザー/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'beautiful-ai': {
    id: 'beautiful-ai',
    name: 'Beautiful.ai',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Pro', price: 12, billing: 'monthly' },
      { name: 'Team', price: 50, billing: 'per user/month' }
    ],
    priceDisplay: 'Free, $12/mo, $50/user/mo',
    priceDisplayJa: '無料, $12/月, $50/ユーザー/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'fireflies': {
    id: 'fireflies',
    name: 'Fireflies.ai',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Pro', price: 10, billing: 'per seat/month' },
      { name: 'Business', price: 19, billing: 'per seat/month' },
      { name: 'Enterprise', price: 39, billing: 'per seat/month' }
    ],
    priceDisplay: 'Free, $10/seat/mo, $19/seat/mo, $39/seat/mo',
    priceDisplayJa: '無料, $10/席/月, $19/席/月, $39/席/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'lumen5': {
    id: 'lumen5',
    name: 'Lumen5',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Basic', price: 29, billing: 'monthly' },
      { name: 'Starter', price: 79, billing: 'monthly' },
      { name: 'Professional', price: 199, billing: 'monthly' }
    ],
    priceDisplay: 'Free, $29/mo, $79/mo, $199/mo',
    priceDisplayJa: '無料, $29/月, $79/月, $199/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'canva-ai': {
    id: 'canva-ai',
    name: 'Canva AI',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Pro', price: 15, billing: 'monthly', annual: 120 },
      { name: 'Teams', price: 30, billing: 'per user/month' }
    ],
    priceDisplay: 'Free, $15/mo, $30/user/mo',
    priceDisplayJa: '無料, $15/月, $30/ユーザー/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'adobe-firefly': {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Premium', price: 5, billing: 'monthly' }
    ],
    priceDisplay: 'Free, $5/mo',
    priceDisplayJa: '無料, $5/月',
    currency: 'USD',
    note: 'Part of Creative Cloud All Apps ($60/mo)',
    lastChecked: '2026-02-12'
  },
  'stable-diffusion': {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    plans: [
      { name: 'Free (Open Source)', price: 0, billing: 'forever' }
    ],
    priceDisplay: 'Free (Open Source)',
    priceDisplayJa: '無料 (オープンソース)',
    currency: 'USD',
    note: 'Self-hosted or via cloud providers',
    lastChecked: '2026-02-12'
  },
  'ideogram': {
    id: 'ideogram',
    name: 'Ideogram',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Basic', price: 8, billing: 'monthly' },
      { name: 'Plus', price: 20, billing: 'monthly' },
      { name: 'Pro', price: 48, billing: 'monthly' }
    ],
    priceDisplay: 'Free, $8/mo, $20/mo, $48/mo',
    priceDisplayJa: '無料, $8/月, $20/月, $48/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'playground-ai': {
    id: 'playground-ai',
    name: 'Playground AI',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Pro', price: 15, billing: 'monthly' },
      { name: 'Turbo', price: 45, billing: 'monthly' }
    ],
    priceDisplay: 'Free, $15/mo, $45/mo',
    priceDisplayJa: '無料, $15/月, $45/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'udio': {
    id: 'udio',
    name: 'Udio',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Standard', price: 10, billing: 'monthly' },
      { name: 'Pro', price: 30, billing: 'monthly' }
    ],
    priceDisplay: 'Free, $10/mo, $30/mo',
    priceDisplayJa: '無料, $10/月, $30/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'chatpdf': {
    id: 'chatpdf',
    name: 'ChatPDF',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Plus', price: 8, billing: 'monthly' }
    ],
    priceDisplay: 'Free, $8/mo',
    priceDisplayJa: '無料, $8/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'consensus': {
    id: 'consensus',
    name: 'Consensus',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Premium', price: 9, billing: 'monthly' },
      { name: 'Enterprise', price: null, billing: 'custom' }
    ],
    priceDisplay: 'Free, $9/mo, Enterprise',
    priceDisplayJa: '無料, $9/月, Enterprise',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'elicit': {
    id: 'elicit',
    name: 'Elicit',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Plus', price: 12, billing: 'monthly' },
      { name: 'Pro', price: 42, billing: 'monthly' }
    ],
    priceDisplay: 'Free, $12/mo, $42/mo',
    priceDisplayJa: '無料, $12/月, $42/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'julius-ai': {
    id: 'julius-ai',
    name: 'Julius AI',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Pro', price: 20, billing: 'monthly' }
    ],
    priceDisplay: 'Free, $20/mo',
    priceDisplayJa: '無料, $20/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'reclaim-ai': {
    id: 'reclaim-ai',
    name: 'Reclaim.ai',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Starter', price: 8, billing: 'per user/month' },
      { name: 'Business', price: 12, billing: 'per user/month' },
      { name: 'Enterprise', price: 18, billing: 'per user/month' }
    ],
    priceDisplay: 'Free, $8/user/mo, $12/user/mo, $18/user/mo',
    priceDisplayJa: '無料, $8/ユーザー/月, $12/ユーザー/月, $18/ユーザー/月',
    currency: 'USD',
    lastChecked: '2026-02-12'
  },
  'surfer-seo': {
    id: 'surfer-seo',
    name: 'Surfer SEO',
    plans: [
      { name: 'Essential', price: 89, billing: 'monthly' },
      { name: 'Advanced', price: 179, billing: 'monthly' },
      { name: 'Max', price: 299, billing: 'monthly' },
      { name: 'Enterprise', price: null, billing: 'custom' }
    ],
    priceDisplay: '$89/mo, $179/mo, $299/mo',
    priceDisplayJa: '$89/月, $179/月, $299/月',
    currency: 'USD',
    note: 'No free plan, 7-day money-back guarantee',
    lastChecked: '2026-02-12'
  },
  'zapier-central': {
    id: 'zapier-central',
    name: 'Zapier Central',
    plans: [
      { name: 'Free', price: 0, billing: 'forever' },
      { name: 'Professional', price: 30, billing: 'monthly' },
      { name: 'Team', price: 75, billing: 'monthly' },
      { name: 'Company', price: 125, billing: 'monthly' }
    ],
    priceDisplay: 'Free, $30/mo, $75/mo, $125/mo',
    priceDisplayJa: '無料, $30/月, $75/月, $125/月',
    currency: 'USD',
    note: 'Zapier automation pricing',
    lastChecked: '2026-02-12'
  },
  'tableau-pulse': {
    id: 'tableau-pulse',
    name: 'Tableau Pulse',
    plans: [
      { name: 'Viewer', price: 15, billing: 'per user/month' },
      { name: 'Explorer', price: 42, billing: 'per user/month' },
      { name: 'Creator', price: 75, billing: 'per user/month' }
    ],
    priceDisplay: '$15/user/mo, $42/user/mo, $75/user/mo',
    priceDisplayJa: '$15/ユーザー/月, $42/ユーザー/月, $75/ユーザー/月',
    currency: 'USD',
    note: 'Part of Tableau Cloud',
    lastChecked: '2026-02-12'
  },
  'claude-code': {
    id: 'claude-code',
    name: 'Claude Code',
    plans: [
      { name: 'Free', price: 0, billing: 'forever', note: 'Part of Claude Free' },
      { name: 'Pro', price: 20, billing: 'monthly', note: 'Part of Claude Pro' }
    ],
    priceDisplay: 'Free, $20/mo (Part of Claude)',
    priceDisplayJa: '無料, $20/月 (Claude同梱)',
    currency: 'USD',
    note: 'Included with Claude subscription',
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
