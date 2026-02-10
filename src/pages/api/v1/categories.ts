import type { APIRoute } from 'astro';
import { categories, getAllTools } from '../../../lib/tools';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const allTools = getAllTools();

    // Add tool counts to categories
    const categoriesWithCounts = categories.map(category => {
      const toolCount = allTools.filter(
        tool => tool.category === category.name
      ).length;

      return {
        ...category,
        toolCount
      };
    });

    return new Response(
      JSON.stringify({
        success: true,
        data: categoriesWithCounts
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Internal server error'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};
