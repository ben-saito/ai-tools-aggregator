export interface Tool {
  id: string;
  name: string;
  url: string;
  category: string;
  description: string;
  pricing: 'free' | 'freemium' | 'paid' | 'open-source';
  tags: string[];
  featured: boolean;
  premium: boolean;
  logoUrl: string;
  addedAt: string;
}
