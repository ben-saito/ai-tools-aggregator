import React, { useState } from 'react';

interface ShareButtonsProps {
  resultUrl: string;
  recommendations: Array<{ name: string; score: number }>;
  lang?: 'en' | 'ja';
}

export default function ShareButtons({ resultUrl, recommendations, lang = 'en' }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const top3 = recommendations.slice(0, 3);

  const shareText = lang === 'ja'
    ? `私にぴったりのAIツールを診断してもらいました！\n\nおすすめ:\n${top3.map((t, i) => `${i + 1}. ${t.name} (${t.score}% match)`).join('\n')}\n\nあなたも診断してみよう！`
    : `I found my perfect AI tools!\n\nTop picks:\n${top3.map((t, i) => `${i + 1}. ${t.name} (${t.score}% match)`).join('\n')}\n\nFind yours here:`;

  const encodedText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(resultUrl);

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(resultUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const input = document.createElement('input');
      input.value = resultUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const buttonBase = "flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold transition-transform hover:scale-105";

  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-2xl font-bold text-gray-900">
        {lang === 'ja' ? '結果をシェア' : 'Share Your Results'}
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        {/* Twitter/X */}
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonBase} bg-black text-white`}
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          {lang === 'ja' ? 'Xでシェア' : 'Share on X'}
        </a>

        {/* Facebook */}
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonBase} bg-[#1877F2] text-white`}
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Facebook
        </a>

        {/* LinkedIn */}
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonBase} bg-[#0A66C2] text-white`}
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>

        {/* Copy Link */}
        <button
          onClick={handleCopy}
          className={`${buttonBase} border-2 border-gray-200 bg-white text-gray-700 hover:bg-gray-50`}
        >
          {copied ? (
            <>
              <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-600">{lang === 'ja' ? 'コピーしました' : 'Copied!'}</span>
            </>
          ) : (
            <>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              {lang === 'ja' ? 'リンクをコピー' : 'Copy Link'}
            </>
          )}
        </button>
      </div>
    </div>
  );
}
