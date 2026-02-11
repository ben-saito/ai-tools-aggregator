/**
 * Vercel Cron API: Update tool scores daily
 * Schedule: 0 6 * * * (Every day at 6:00 AM UTC / 15:00 JST)
 */

import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL || 'https://mqksqezqbauqymftrydy.supabase.co';
const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_KEY;

export const GET: APIRoute = async ({ request }) => {
  // Verify request is from Vercel Cron (optional but recommended)
  const authHeader = request.headers.get('authorization');
  const cronSecret = import.meta.env.CRON_SECRET;
  
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (!supabaseServiceKey) {
    return new Response(JSON.stringify({ 
      error: 'SUPABASE_SERVICE_KEY not configured',
      message: 'Please add SUPABASE_SERVICE_KEY to Vercel environment variables'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    console.log('🔄 Starting daily tool scores update...');

    // Fetch all current scores from database
    const { data: currentScores, error: fetchError } = await supabase
      .from('tool_scores')
      .select('*')
      .order('total_score', { ascending: false });

    if (fetchError) throw fetchError;

    console.log(`📊 Found ${currentScores?.length || 0} tools in database`);

    // For now, we recalculate total_score to ensure consistency
    // (In the future, this is where we'll fetch external data from Product Hunt, GitHub, etc.)
    
    let updatedCount = 0;
    const updates = [];

    for (const tool of currentScores || []) {
      // Recalculate total_score based on current axis scores
      const calculatedTotal = (
        tool.popularity_score * 0.30 +
        tool.functionality_score * 0.25 +
        tool.value_score * 0.20 +
        tool.development_score * 0.15 +
        tool.user_rating_score * 0.10
      );

      // Check if recalculation is needed (handle floating point precision)
      const needsUpdate = Math.abs(calculatedTotal - tool.total_score) > 0.01;

      if (needsUpdate) {
        updates.push({
          tool_id: tool.tool_id,
          old_score: tool.total_score,
          new_score: calculatedTotal
        });

        // Update the score (trigger will recalculate automatically, but we log it here)
        const { error: updateError } = await supabase
          .from('tool_scores')
          .update({ 
            last_updated: new Date().toISOString()
          })
          .eq('tool_id', tool.tool_id);

        if (updateError) {
          console.error(`❌ Error updating ${tool.tool_id}:`, updateError);
        } else {
          updatedCount++;
        }
      }
    }

    console.log(`✅ Score update completed. Updated ${updatedCount} tools.`);

    if (updates.length > 0) {
      console.log('📈 Score changes:', updates);
    }

    // Future: This is where we'll add external data fetching
    // TODO: Integrate Product Hunt API
    // TODO: Integrate GitHub API for OSS tools
    // TODO: Integrate Twitter/X API for mentions
    // TODO: Update popularity_score based on external data

    return new Response(JSON.stringify({
      success: true,
      message: 'Tool scores updated successfully',
      timestamp: new Date().toISOString(),
      stats: {
        total_tools: currentScores?.length || 0,
        updated_count: updatedCount,
        updates: updates
      }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    console.error('❌ Error updating scores:', error);

    return new Response(JSON.stringify({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
