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
  { slug: 'text-generation', name: 'Text Generation', icon: '💬', description: 'AI-powered writing assistants, chatbots, and content generators' },
  { slug: 'image-generation', name: 'Image Generation', icon: '🎨', description: 'Create stunning images, art, and graphics with AI' },
  { slug: 'video-generation', name: 'Video Generation', icon: '🎥', description: 'Generate and edit videos using AI technology' },
  { slug: 'audio-music', name: 'Audio & Music', icon: '🎵', description: 'AI tools for music production, voice synthesis, and audio editing' },
  { slug: 'code-development', name: 'Code Development', icon: '💻', description: 'AI coding assistants and development tools' },
  { slug: 'marketing-sales', name: 'Marketing & Sales', icon: '📈', description: 'Boost your marketing and sales with AI automation' },
  { slug: 'productivity', name: 'Productivity', icon: '⚡', description: 'Enhance your workflow with AI-powered productivity tools' },
  { slug: 'research-education', name: 'Research & Education', icon: '📚', description: 'AI tools for learning, research, and knowledge discovery' },
  { slug: 'design-creative', name: 'Design & Creative', icon: '🖌️', description: 'AI-powered design and creative tools for professionals' },
  { slug: 'data-analytics', name: 'Data & Analytics', icon: '📊', description: 'Transform data into insights with AI analytics tools' },
] as const;
