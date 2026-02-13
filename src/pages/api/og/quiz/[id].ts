import { ImageResponse } from '@vercel/og';
import { supabase } from '../../../../lib/supabase';
import React from 'react';

export const prerender = false;

const h = React.createElement;

export async function GET({ params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return new Response('Missing ID', { status: 400 });
  }

  const cleanId = id.replace(/\.png$/, '');

  const { data: result, error } = await supabase
    .from('quiz_results')
    .select('recommendations, answers')
    .eq('id', cleanId)
    .single();

  if (error || !result) {
    return new Response('Result not found', { status: 404 });
  }

  const tools = result.recommendations.slice(0, 3);
  const purpose: string = result.answers.purpose || 'Efficiency';

  return new ImageResponse(
    h('div', {
      style: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(to bottom right, #EFF6FF, #DBEAFE)',
        fontFamily: '"Inter", sans-serif',
        padding: '40px',
      },
    },
      h('div', { style: { display: 'flex', alignItems: 'center', marginBottom: '20px' } },
        h('span', {
          style: { fontSize: 24, fontWeight: 'bold', color: '#2563EB', padding: '8px 16px', background: '#BFDBFE', borderRadius: '999px' },
        }, 'AI Tool Diagnosis')
      ),
      h('h1', {
        style: { fontSize: 60, fontWeight: 900, color: '#1E3A8A', margin: '0 0 40px 0', textAlign: 'center', lineHeight: 1.1 },
      }, `Best Tools for ${purpose.charAt(0).toUpperCase() + purpose.slice(1)}`),
      h('div', {
        style: { display: 'flex', gap: '20px', width: '100%', justifyContent: 'center' },
      },
        ...tools.map((tool: any, i: number) =>
          h('div', {
            key: i,
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'white',
              padding: '20px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)',
              width: '300px',
              height: '220px',
              justifyContent: 'space-between',
            },
          },
            h('div', {
              style: { fontSize: 48, background: '#F3F4F6', width: '80px', height: '80px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' },
            }, tool.name.charAt(0)),
            h('div', {
              style: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
            },
              h('span', {
                style: { fontSize: 28, fontWeight: 'bold', color: '#111827', textAlign: 'center' },
              }, tool.name),
              h('span', {
                style: { fontSize: 20, color: '#059669', fontWeight: 'bold', marginTop: '4px' },
              }, `${tool.score}% Match`)
            )
          )
        )
      ),
      h('div', {
        style: { position: 'absolute', bottom: 40, right: 40, fontSize: 24, color: '#6B7280', fontWeight: 600 },
      }, 'ai-tools-aggregator.vercel.app')
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
