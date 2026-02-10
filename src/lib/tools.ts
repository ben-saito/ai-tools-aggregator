import type { Tool } from './types';
import toolsData from '../../data/tools.json';

export function getAllTools(): Tool[] {
  return toolsData as Tool[];
}

export function getFeaturedTools(): Tool[] {
  return getAllTools().filter((tool) => tool.featured);
}

export function getToolsByCategory(category: string): Tool[] {
  return getAllTools().filter((tool) => tool.category === category);
}

export function getToolById(id: string): Tool | undefined {
  return getAllTools().find((tool) => tool.id === id);
}

export const categories = [
  { slug: 'text-generation', name: 'Text Generation', icon: '\u{1F4AC}' },
  { slug: 'image-generation', name: 'Image Generation', icon: '\u{1F3A8}' },
  { slug: 'video-generation', name: 'Video Generation', icon: '\u{1F3A5}' },
  { slug: 'audio-music', name: 'Audio & Music', icon: '\u{1F3B5}' },
  { slug: 'code-development', name: 'Code Development', icon: '\u{1F4BB}' },
  { slug: 'marketing-sales', name: 'Marketing & Sales', icon: '\u{1F4C8}' },
  { slug: 'productivity', name: 'Productivity', icon: '\u{26A1}' },
  { slug: 'research-education', name: 'Research & Education', icon: '\u{1F4DA}' },
  { slug: 'design-creative', name: 'Design & Creative', icon: '\u{1F58C}\u{FE0F}' },
  { slug: 'data-analytics', name: 'Data & Analytics', icon: '\u{1F4CA}' },
] as const;
