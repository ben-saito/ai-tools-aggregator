import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';

export const prerender = false;

export const GET: APIRoute = async ({ request, url }) => {
  const key = url.searchParams.get('key');

  // Simple security check
  if (key !== 'SECRET_CRON_KEY') {
    return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
  }

  // Initialize Supabase with Service Key for Admin privileges (bypass RLS)
  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = import.meta.env.SUPABASE_SERVICE_KEY;
  
  if (!supabaseUrl || !supabaseServiceKey) {
    return new Response(JSON.stringify({ message: 'Server configuration error' }), { status: 500 });
  }

  const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

  try {
    // 1. Fetch top tools of the week
    const { data: recentTools, error: toolsError } = await supabaseAdmin
      .from('tools')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(5);

    if (toolsError) throw toolsError;

    // 2. Generate Email Content
    const emailSubject = `Weekly AI Tools Digest - ${new Date().toLocaleDateString()}`;
    const toolsHtml = recentTools.map(tool => `
      <div style="margin-bottom: 20px; padding: 15px; border: 1px solid #eee; border-radius: 8px;">
        <h3 style="margin: 0;"><a href="https://ai-tools-aggregator.vercel.app/tools/${tool.id}">${tool.name}</a></h3>
        <p style="color: #666; margin: 5px 0;">${tool.description}</p>
        <span style="background: #f0f0f0; padding: 2px 8px; border-radius: 4px; font-size: 12px;">${tool.category}</span>
      </div>
    `).join('');

    const emailContent = `
      <h1>Top 5 New AI Tools This Week</h1>
      <p>Here are the latest tools added to our platform:</p>
      ${toolsHtml}
      <hr>
      <p><a href="https://ai-tools-aggregator.vercel.app">View all tools</a></p>
    `;

    // 3. fetch subscribers
    const { count, error: subError } = await supabaseAdmin
        .from('newsletter_subscribers')
        .select('*', { count: 'exact', head: true })
        .eq('active', true);
    
    if (subError) throw subError;

    // 4. Log the "Send"
    const { error: logError } = await supabaseAdmin
      .from('newsletter_logs')
      .insert({
        subject: emailSubject,
        content: emailContent,
        recipient_count: count || 0,
        status: 'sent'
      });
    
    if (logError) throw logError;

    // Return the content for verification
    return new Response(JSON.stringify({
      message: 'Digest generated and logged successfully',
      recipient_count: count,
      subject: emailSubject,
      preview_html: emailContent
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });

  } catch (error: any) {
    console.error('Digest error:', error);
    return new Response(JSON.stringify({ message: 'Internal server error', error: error.message }), { status: 500 });
  }
};
