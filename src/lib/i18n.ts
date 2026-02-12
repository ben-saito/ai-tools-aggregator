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
