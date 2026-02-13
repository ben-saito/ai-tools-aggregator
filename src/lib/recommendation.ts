import { getAllTools } from './tools';
import type { Tool } from './types';

interface Answers {
  purpose: string;
  usage: string;
  budget: string;
  skill: string;
  team: string;
}

export interface RecommendationResult {
  tool: Tool;
  score: number;
  matchReasons: string[];
}

// Maps quiz answer values to tool category slugs
const purposeCategoryMap: Record<string, string[]> = {
  efficiency: ['productivity', 'code-development'],
  creation: ['image-generation', 'video-generation', 'audio-music', 'design-creative'],
  learning: ['research-education', 'text-generation'],
  business: ['marketing-sales', 'data-analytics'],
};

const usageCategoryMap: Record<string, string[]> = {
  text: ['text-generation', 'marketing-sales'],
  image_video: ['image-generation', 'video-generation', 'design-creative'],
  code: ['code-development'],
  data: ['data-analytics', 'research-education'],
  other: ['audio-music', 'productivity'],
};

// Indicators for skill level inference from tool tags/description
const advancedIndicators = [
  'api', 'sdk', 'developer', 'enterprise', 'advanced', 'professional',
  'custom model', 'fine-tune', 'self-hosted', 'open-source', 'cli',
  'workflow', 'automation', 'integration',
];

const beginnerIndicators = [
  'easy', 'simple', 'no-code', 'beginner', 'intuitive', 'drag-and-drop',
  'template', 'one-click', 'getting started', 'user-friendly',
];

// Indicators for team orientation
const teamIndicators = [
  'team', 'collaboration', 'enterprise', 'organization', 'workspace',
  'admin', 'multi-user', 'sharing', 'permission',
];

const individualIndicators = [
  'personal', 'individual', 'solo', 'freelance', 'hobby', 'single-user',
];

function countIndicators(tool: Tool, indicators: string[]): number {
  const text = `${tool.description} ${tool.tags.join(' ')} ${(tool.features || []).join(' ')}`.toLowerCase();
  return indicators.filter(ind => text.includes(ind)).length;
}

// Category matching: 40pt max
function scoreCategory(tool: Tool, answers: Answers): { score: number; reason: string | null } {
  const purposeCategories = purposeCategoryMap[answers.purpose] || [];
  const usageCategories = usageCategoryMap[answers.usage] || [];

  const purposeMatch = purposeCategories.includes(tool.category);
  const usageMatch = usageCategories.includes(tool.category);

  if (purposeMatch && usageMatch) {
    return { score: 40, reason: 'Perfectly matches your purpose and usage' };
  }
  if (purposeMatch || usageMatch) {
    return { score: 25, reason: purposeMatch ? 'Matches your purpose' : 'Matches your usage type' };
  }

  // Keyword fallback: check if tool text contains relevant keywords
  const purposeKeywords: Record<string, string[]> = {
    efficiency: ['productivity', 'automation', 'workflow', 'summarize', 'organize'],
    creation: ['create', 'generate', 'design', 'art', 'creative'],
    learning: ['learn', 'education', 'tutor', 'study', 'research'],
    business: ['marketing', 'sales', 'analytics', 'business', 'growth'],
  };
  const usageKeywords: Record<string, string[]> = {
    text: ['text', 'writing', 'copy', 'blog', 'chat', 'content'],
    image_video: ['image', 'video', 'photo', 'visual'],
    code: ['code', 'programming', 'developer', 'debug'],
    data: ['data', 'analyze', 'spreadsheet', 'insight'],
    other: ['audio', 'voice', 'translate', 'music'],
  };

  const keywords = [
    ...(purposeKeywords[answers.purpose] || []),
    ...(usageKeywords[answers.usage] || []),
  ];
  const text = `${tool.description} ${tool.name} ${tool.tags.join(' ')}`.toLowerCase();
  const hasKeyword = keywords.some(k => text.includes(k));

  if (hasKeyword) {
    return { score: 10, reason: 'Related to your interests' };
  }

  return { score: 0, reason: null };
}

// Pricing matching: 20pt max
function scorePricing(tool: Tool, answers: Answers): { score: number; reason: string | null } {
  const budget = answers.budget;
  const pricing = tool.pricing;

  const matrix: Record<string, Record<string, number>> = {
    free:      { free: 20, 'open-source': 20, freemium: 12, paid: 0 },
    low:       { free: 20, 'open-source': 20, freemium: 20, paid: 5 },
    mid:       { free: 18, 'open-source': 18, freemium: 20, paid: 15 },
    unlimited: { free: 15, 'open-source': 15, freemium: 18, paid: 20 },
  };

  const score = matrix[budget]?.[pricing] ?? 10;
  let reason: string | null = null;

  if (score >= 18) {
    reason = budget === 'free' ? 'Free to use' : 'Fits your budget';
  }

  return { score, reason };
}

// Skill matching: 20pt max
function scoreSkill(tool: Tool, answers: Answers): { score: number; reason: string | null } {
  const advCount = countIndicators(tool, advancedIndicators);
  const begCount = countIndicators(tool, beginnerIndicators);

  // Estimate tool complexity: positive = advanced, negative = beginner
  let toolLevel: 'beginner' | 'intermediate' | 'advanced';
  if (advCount > begCount + 1) {
    toolLevel = 'advanced';
  } else if (begCount > advCount + 1) {
    toolLevel = 'beginner';
  } else {
    toolLevel = 'intermediate';
  }

  const skillMatrix: Record<string, Record<string, number>> = {
    beginner:     { beginner: 20, intermediate: 14, advanced: 5 },
    intermediate: { beginner: 14, intermediate: 20, advanced: 14 },
    advanced:     { beginner: 8,  intermediate: 14, advanced: 20 },
    pro:          { beginner: 5,  intermediate: 12, advanced: 20 },
  };

  const score = skillMatrix[answers.skill]?.[toolLevel] ?? 10;
  let reason: string | null = null;

  if (score >= 18) {
    reason = 'Matches your skill level';
  }

  return { score, reason };
}

// Team matching: 10pt max
function scoreTeam(tool: Tool, answers: Answers): { score: number; reason: string | null } {
  const teamCount = countIndicators(tool, teamIndicators);
  const indCount = countIndicators(tool, individualIndicators);

  let toolOrientation: 'individual' | 'flexible' | 'team';
  if (teamCount > indCount + 1) {
    toolOrientation = 'team';
  } else if (indCount > teamCount + 1) {
    toolOrientation = 'individual';
  } else {
    toolOrientation = 'flexible';
  }

  const teamMatrix: Record<string, Record<string, number>> = {
    individual: { individual: 10, flexible: 8, team: 4 },
    small_team: { individual: 6,  flexible: 10, team: 8 },
    mid_team:   { individual: 4,  flexible: 8, team: 10 },
    enterprise: { individual: 2,  flexible: 6, team: 10 },
  };

  const score = teamMatrix[answers.team]?.[toolOrientation] ?? 6;
  let reason: string | null = null;

  if (score >= 9) {
    reason = answers.team === 'individual' ? 'Great for personal use' : 'Supports team collaboration';
  }

  return { score, reason };
}

// Popularity: 10pt max
function scorePopularity(tool: Tool): { score: number; reason: string | null } {
  if (tool.featured) {
    return { score: 10, reason: 'Highly popular tool' };
  }
  return { score: 5, reason: null };
}

export function calculateRecommendations(answers: Answers): RecommendationResult[] {
  const tools = getAllTools();

  const scoredTools = tools.map(tool => {
    const category = scoreCategory(tool, answers);
    const pricing = scorePricing(tool, answers);
    const skill = scoreSkill(tool, answers);
    const team = scoreTeam(tool, answers);
    const popularity = scorePopularity(tool);

    const score = category.score + pricing.score + skill.score + team.score + popularity.score;
    const matchReasons = [category.reason, pricing.reason, skill.reason, team.reason, popularity.reason]
      .filter((r): r is string => r !== null);

    return { tool, score, matchReasons };
  });

  // Filter and sort
  let results = scoredTools
    .filter(item => item.score > 20)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  // Fallback: if fewer than 3 results, take top 5 from all
  if (results.length < 3) {
    results = scoredTools
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  }

  return results;
}
