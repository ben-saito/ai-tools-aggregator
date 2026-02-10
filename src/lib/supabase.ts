import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for database tables
export interface Profile {
  id: string;
  username: string;
  avatar_url?: string;
  created_at: string;
}

export interface Review {
  id: string;
  tool_id: string;
  user_id: string;
  rating: number; // 1-5
  comment: string;
  helpful_count: number;
  created_at: string;
  updated_at: string;
  // Joined data
  profile?: Profile;
}

export interface ReviewVote {
  id: string;
  review_id: string;
  user_id: string;
  created_at: string;
}

export interface ToolStats {
  tool_id: string;
  average_rating: number;
  review_count: number;
  view_count: number;
  trending_score: number;
  upvote_count: number;
  updated_at: string;
}

export interface ToolVote {
  id: string;
  tool_id: string;
  user_id: string;
  created_at: string;
}

export interface Lead {
  id: string;
  tool_id: string;
  user_id: string;
  company_name: string;
  company_size: string;
  use_case: string;
  status: 'new' | 'sent' | 'rejected';
  created_at: string;
}

export interface ToolOwner {
  id: string;
  tool_id: string;
  user_id: string;
  status: 'pending' | 'approved' | 'rejected';
  proof_contact: string;
  created_at: string;
}

// Helper functions
export async function getToolReviews(toolId: string) {
  const { data, error } = await supabase
    .from('reviews')
    .select(`
      *,
      profile:profiles(username, avatar_url)
    `)
    .eq('tool_id', toolId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as (Review & { profile: Profile })[];
}

export async function getToolStats(toolId: string) {
  const { data, error } = await supabase
    .from('tools_stats')
    .select('*')
    .eq('tool_id', toolId)
    .single();

  if (error && error.code !== 'PGRST116') throw error; // PGRST116 = not found
  return data as ToolStats | null;
}

export async function getTrendingTools(limit = 10) {
  const { data, error } = await supabase
    .from('tools_stats')
    .select('*')
    .order('trending_score', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data as ToolStats[];
}

export async function getTopRatedTools(limit = 10, minReviews = 3) {
  const { data, error } = await supabase
    .from('tools_stats')
    .select('*')
    .gte('review_count', minReviews)
    .gte('average_rating', 4.5)
    .order('average_rating', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data as ToolStats[];
}

export async function submitReview(toolId: string, userId: string, rating: number, comment: string) {
  const { data, error } = await supabase
    .from('reviews')
    .insert({
      tool_id: toolId,
      user_id: userId,
      rating,
      comment,
      helpful_count: 0,
    })
    .select()
    .single();

  if (error) throw error;
  
  // Update tool stats (trigger will handle this in production, but for now manual)
  await updateToolStats(toolId);
  
  return data as Review;
}

async function updateToolStats(toolId: string) {
  // Calculate average rating and review count
  const { data: reviews, error } = await supabase
    .from('reviews')
    .select('rating')
    .eq('tool_id', toolId);

  if (error) return;
  if (!reviews || reviews.length === 0) return;

  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  const reviewCount = reviews.length;

  // Calculate trending score (simple version)
  const now = new Date();
  const hoursAgo = 24; // Consider reviews from last 24 hours
  const recentReviews = await supabase
    .from('reviews')
    .select('helpful_count, created_at')
    .eq('tool_id', toolId)
    .gte('created_at', new Date(now.getTime() - hoursAgo * 60 * 60 * 1000).toISOString());

  let trendingScore = 0;
  if (recentReviews.data && recentReviews.data.length > 0) {
    const totalHelpful = recentReviews.data.reduce((sum, r) => sum + r.helpful_count, 0);
    trendingScore = (recentReviews.data.length + totalHelpful * 2) / Math.pow(hoursAgo + 2, 1.5);
  }

  // Upsert tool stats
  await supabase
    .from('tools_stats')
    .upsert({
      tool_id: toolId,
      average_rating: avgRating,
      review_count: reviewCount,
      trending_score: trendingScore,
      view_count: 0, // Will be tracked separately
      updated_at: now.toISOString(),
    });
}

export async function voteReviewHelpful(reviewId: string, userId: string) {
  // Check if already voted
  const { data: existing } = await supabase
    .from('review_votes')
    .select('id')
    .eq('review_id', reviewId)
    .eq('user_id', userId)
    .single();

  if (existing) {
    // Already voted, remove vote
    await supabase
      .from('review_votes')
      .delete()
      .eq('id', existing.id);

    // Decrement helpful_count
    await supabase.rpc('decrement_helpful_count', { review_id: reviewId });
  } else {
    // Add vote
    await supabase
      .from('review_votes')
      .insert({
        review_id: reviewId,
        user_id: userId,
      });

    // Increment helpful_count
    await supabase.rpc('increment_helpful_count', { review_id: reviewId });
  }
}
