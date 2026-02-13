import type { APIRoute } from 'astro';
import { supabase } from '../../../lib/supabase';
import { calculateRecommendations } from '../../../lib/recommendation';
import { nanoid } from 'nanoid';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { answers } = await request.json();

    if (!answers) {
      return new Response(JSON.stringify({ message: 'Invalid data' }), { status: 400 });
    }

    // 1. Calculate Recommendations
    const recommendations = calculateRecommendations(answers);

    // 2. Generate ID
    const id = nanoid(10); // Short, URL-friendly ID

    // 3. Save to Supabase
    const { error } = await supabase
      .from('quiz_results')
      .insert({
        id,
        answers,
        recommendations: recommendations.map(r => ({
           tool_id: r.tool.id,
           score: r.score,
           reasons: r.matchReasons,
           name: r.tool.name, // Caching name/desc for simpler display later (snapshot)
           description: r.tool.description,
           category: r.tool.category
        })),
        user_agent: request.headers.get('user-agent')
      });

    if (error) {
      console.error('Database error:', error);
      return new Response(JSON.stringify({ message: 'Database error' }), { status: 500 });
    }

    return new Response(JSON.stringify({ resultId: id }), { status: 200 });

  } catch (error) {
    console.error('Quiz submit error:', error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
  }
};
