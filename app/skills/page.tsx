import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Popular AI Agent Skills Ranking | AI Tools Aggregator',
  description: 'Top GitHub repositories for AI agent skills (Clawdbot & Claude Code) ranked by stars',
};

interface Skill {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  created_at: string;
  updated_at: string;
  topics: string[];
}

interface SkillsData {
  total_count: number;
  items: Skill[];
  error?: string;
}

async function fetchSkills(): Promise<SkillsData> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/skills`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch skills');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching skills:', error);
    return { total_count: 0, items: [], error: 'Failed to load skills' };
  }
}

export default async function SkillsPage() {
  const data = await fetchSkills();
  
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Popular AI Agent Skills
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Top GitHub repositories for Clawdbot and Claude Code skills, ranked by stars
        </p>
        {data.total_count > 0 && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Found {data.total_count} skills
          </p>
        )}
      </div>
      
      {data.error ? (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <p className="text-red-800 dark:text-red-200">{data.error}</p>
        </div>
      ) : data.items.length === 0 ? (
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">No skills found</p>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full bg-white dark:bg-gray-800">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Skill
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Stars
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Forks
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                  Language
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {data.items.map((skill, index) => (
                <tr key={skill.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a
                      href={skill.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      {skill.name}
                    </a>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {skill.full_name}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 max-w-md truncate">
                    {skill.description || 'No description'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900 dark:text-white">
                    ⭐ {skill.stargazers_count}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900 dark:text-white">
                    🍴 {skill.forks_count}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                    {skill.language ? (
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                        {skill.language}
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <div className="mt-8 text-center">
        <Link
          href="/"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
