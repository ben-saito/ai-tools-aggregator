export const languages = {
  en: 'English',
  ja: '日本語',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.blog': 'Blog',
    'nav.categories': 'Categories',
    'nav.search': 'Search',
    'nav.about': 'About',
    'hero.title': 'Discover the Best AI Tools',
    'hero.subtitle': 'Curated directory of 60+ AI tools for productivity, creativity, and innovation',
    'hero.description': 'Discover the best AI tools for 2026. Curated directory of 50+ AI tools across 10 categories including text generation, image creation, coding assistants, and more.',
    'hero.feature1': 'Curated Selection',
    'hero.feature1.desc': 'Hand-picked tools tested by experts',
    'hero.feature2': 'Easy Comparison',
    'hero.feature2.desc': 'Compare features and pricing',
    'hero.feature3': 'Save Favorites',
    'hero.feature3.desc': 'Build your personal toolkit',
    'hero.cta': 'Start Exploring',
    'stats.tools': 'AI Tools',
    'stats.categories': 'Categories',
    'stats.reviews': 'Reviews',
    'stats.users': 'Monthly Users',
    'problem.title': 'The Problem with Finding AI Tools',
    'problem.1': 'Too many tools, no clear way to compare them',
    'problem.2': 'Wasting time trying tools that don\'t fit your needs',
    'problem.3': 'Missing out on better alternatives you didn\'t know existed',
    'problem.4': 'No central place to track your favorites and discoveries',
    'solution.title': 'How AI Tools Hub Solves This',
    'solution.1.title': 'Curated by Experts',
    'solution.1.desc': 'Every tool is tested and reviewed by our team',
    'solution.2.title': 'Easy Comparison',
    'solution.2.desc': 'Side-by-side feature and pricing comparisons',
    'solution.3.title': 'Real User Reviews',
    'solution.3.desc': 'Learn from others\' experiences',
    'solution.4.title': 'Personalized Collections',
    'solution.4.desc': 'Save favorites and track your workflow',
    'howitworks.title': 'How It Works',
    'howitworks.step1': 'Browse or Search',
    'howitworks.step1.desc': 'Explore by category or search for specific needs',
    'howitworks.step2': 'Compare & Review',
    'howitworks.step2.desc': 'Read reviews and compare features',
    'howitworks.step3': 'Save & Use',
    'howitworks.step3.desc': 'Save favorites and start building with AI',
    'cta.subtitle': 'Join 1000+ users finding the perfect AI tools',
    'cta.final': 'Ready to Find Your Perfect AI Tools?',
    'common.featured': 'Featured Tools',
    'common.popular': 'Popular Tags',
    'common.browse': 'Browse by Category',
    'common.all': 'All Tools',
    'blog.title': 'Blog',
    'blog.subtitle': 'Guides, tutorials, and insights about AI tools and how to use them effectively',
    'blog.readMore': 'Read More',
    'blog.backToBlog': 'Back to Blog',
    'blog.shareArticle': 'Share this article',
    'blog.publishedBy': 'Published by',
    'blog.category': 'Category',
    'footer.copyright': '© 2026 AI Tools Hub. All rights reserved.',
    'search.placeholder': 'Search AI tools...',
    'tools.featured': 'Featured Tools',
    'tools.allTools': 'All Tools',
    'tools.free': 'Free',
    'tools.freemium': 'Freemium',
    'tools.paid': 'Paid',
    'tools.viewDetails': 'View Details',
    'seo.defaultTitle': 'AI Tools Hub - Discover the Best AI Tools for 2026',
    'seo.defaultDescription': 'Curated directory of 60+ AI tools. Find the perfect AI assistant, image generator, coding tool, or productivity app. Reviews, comparisons, and guides.',
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.blog': 'ブログ',
    'nav.categories': 'カテゴリー',
    'nav.search': '検索',
    'nav.about': '概要',
    'hero.title': '最高のAIツールを発見',
    'hero.subtitle': '生産性、創造性、イノベーションのための60以上のAIツールのキュレーションディレクトリ',
    'hero.description': '2026年の最高のAIツールを発見。テキスト生成、画像作成、コーディングアシスタントなど、10カテゴリーにわたる50以上のAIツールのキュレーションディレクトリ。',
    'hero.feature1': '厳選されたセレクション',
    'hero.feature1.desc': '専門家がテストした厳選ツール',
    'hero.feature2': '簡単に比較',
    'hero.feature2.desc': '機能と価格を比較',
    'hero.feature3': 'お気に入り保存',
    'hero.feature3.desc': 'あなた専用のツールキットを構築',
    'hero.cta': '探索を始める',
    'stats.tools': 'AIツール',
    'stats.categories': 'カテゴリー',
    'stats.reviews': 'レビュー',
    'stats.users': '月間利用者',
    'problem.title': 'AIツール選びの問題点',
    'problem.1': 'ツールが多すぎて、比較する明確な方法がない',
    'problem.2': 'ニーズに合わないツールを試して時間を無駄にする',
    'problem.3': '知らなかった、より良い代替ツールを見逃している',
    'problem.4': 'お気に入りや発見を追跡する中心的な場所がない',
    'solution.title': 'AI Tools Hubの解決策',
    'solution.1.title': '専門家による厳選',
    'solution.1.desc': 'すべてのツールは私たちのチームによってテストおよびレビューされています',
    'solution.2.title': '簡単な比較',
    'solution.2.desc': '機能と価格の並列比較',
    'solution.3.title': '実際のユーザーレビュー',
    'solution.3.desc': '他のユーザーの経験から学ぶ',
    'solution.4.title': 'パーソナライズされたコレクション',
    'solution.4.desc': 'お気に入りを保存してワークフローを追跡',
    'howitworks.title': '使い方',
    'howitworks.step1': '閲覧または検索',
    'howitworks.step1.desc': 'カテゴリーで探索、または特定のニーズで検索',
    'howitworks.step2': '比較＆レビュー',
    'howitworks.step2.desc': 'レビューを読み、機能を比較',
    'howitworks.step3': '保存＆使用',
    'howitworks.step3.desc': 'お気に入りを保存してAIで構築を開始',
    'cta.subtitle': '1000人以上のユーザーが完璧なAIツールを見つけています',
    'cta.final': '完璧なAIツールを見つける準備はできましたか？',
    'common.featured': '注目のツール',
    'common.popular': '人気のタグ',
    'common.browse': 'カテゴリー別に閲覧',
    'common.all': 'すべてのツール',
    'blog.title': 'ブログ',
    'blog.subtitle': 'AIツールの使い方に関するガイド、チュートリアル、洞察',
    'blog.readMore': '続きを読む',
    'blog.backToBlog': 'ブログに戻る',
    'blog.shareArticle': 'この記事をシェア',
    'blog.publishedBy': '投稿者',
    'blog.category': 'カテゴリー',
    'footer.copyright': '© 2026 AI Tools Hub. All rights reserved.',
    'search.placeholder': 'AIツールを検索...',
    'tools.featured': '注目のツール',
    'tools.allTools': 'すべてのツール',
    'tools.free': '無料',
    'tools.freemium': 'フリーミアム',
    'tools.paid': '有料',
    'tools.viewDetails': '詳細を見る',
    'seo.defaultTitle': 'AI Tools Hub - 2026年最高のAIツールを発見',
    'seo.defaultDescription': '60以上のAIツールのキュレーションディレクトリ。完璧なAIアシスタント、画像生成、コーディングツール、生産性アプリを見つけよう。レビュー、比較、ガイド付き。',
  },
} as const;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

export function removeLocalePath(path: string): string {
  const segments = path.split('/');
  if (segments[1] in languages) {
    segments.splice(1, 1);
  }
  return segments.join('/') || '/';
}
