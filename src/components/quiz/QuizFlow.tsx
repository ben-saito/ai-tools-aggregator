import React, { useState } from 'react';

type Lang = 'en' | 'ja';

interface QuizFlowProps {
  lang?: Lang;
}

interface Question {
  id: string;
  question: Record<Lang, string>;
  options: Array<{ value: string; label: Record<Lang, string> }>;
}

const questions: Question[] = [
  {
    id: 'purpose',
    question: { ja: '主な目的は？', en: 'What is your main goal?' },
    options: [
      { value: 'efficiency', label: { ja: '仕事の効率化（業務自動化など）', en: 'Work Efficiency (automation, docs)' } },
      { value: 'creation', label: { ja: '創作活動（デザイン、制作）', en: 'Creative Work (design, media)' } },
      { value: 'learning', label: { ja: '学習・スキルアップ', en: 'Learning & Skill Development' } },
      { value: 'business', label: { ja: 'ビジネス成長（マーケティングなど）', en: 'Business Growth (marketing, sales)' } },
    ],
  },
  {
    id: 'usage',
    question: { ja: '主な用途は？', en: 'What will you mainly use it for?' },
    options: [
      { value: 'text', label: { ja: 'テキスト作成・編集', en: 'Text Writing & Editing' } },
      { value: 'image_video', label: { ja: '画像・動画生成', en: 'Image & Video Generation' } },
      { value: 'code', label: { ja: 'コード開発', en: 'Code Development' } },
      { value: 'data', label: { ja: 'データ分析・リサーチ', en: 'Data Analysis & Research' } },
      { value: 'other', label: { ja: 'その他', en: 'Other' } },
    ],
  },
  {
    id: 'budget',
    question: { ja: '予算は？', en: 'What is your budget?' },
    options: [
      { value: 'free', label: { ja: '無料のみ', en: 'Free only' } },
      { value: 'low', label: { ja: '月1,000円まで', en: 'Up to $10/month' } },
      { value: 'mid', label: { ja: '月5,000円まで', en: 'Up to $50/month' } },
      { value: 'unlimited', label: { ja: '予算は気にしない', en: 'Budget is not a concern' } },
    ],
  },
  {
    id: 'skill',
    question: { ja: 'スキルレベルは？', en: 'What is your skill level?' },
    options: [
      { value: 'beginner', label: { ja: '初心者', en: 'Beginner' } },
      { value: 'intermediate', label: { ja: '中級者', en: 'Intermediate' } },
      { value: 'advanced', label: { ja: '上級者', en: 'Advanced' } },
      { value: 'pro', label: { ja: 'プロフェッショナル', en: 'Professional' } },
    ],
  },
  {
    id: 'team',
    question: { ja: '利用形態は？', en: 'How will you use it?' },
    options: [
      { value: 'individual', label: { ja: '個人利用', en: 'Individual use' } },
      { value: 'small_team', label: { ja: '小規模チーム', en: 'Small team (2-10)' } },
      { value: 'mid_team', label: { ja: '中規模チーム', en: 'Mid-size team (11-50)' } },
      { value: 'enterprise', label: { ja: '企業利用', en: 'Enterprise (50+)' } },
    ],
  },
];

const uiText = {
  en: {
    questionOf: (current: number, total: number) => `Question ${current} of ${total}`,
    loading: 'Finding the best AI tools for you...',
    back: '← Back',
    errorSubmit: 'Error submitting quiz. Please try again.',
  },
  ja: {
    questionOf: (current: number, total: number) => `${total}問中${current}問目`,
    loading: 'あなたに最適なAIツールを探しています...',
    back: '← 戻る',
    errorSubmit: '送信エラーが発生しました。もう一度お試しください。',
  },
};

export default function QuizFlow({ lang = 'en' }: QuizFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = uiText[lang];

  const handleSelect = (value: string) => {
    const currentQ = questions[currentStep];
    const newAnswers = { ...answers, [currentQ.id]: value };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      submitQuiz(newAnswers);
    }
  };

  const submitQuiz = async (finalAnswers: Record<string, string>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: finalAnswers }),
      });

      const data = await response.json();
      if (data.resultId) {
        const langParam = lang === 'ja' ? '?lang=ja' : '';
        window.location.href = `/quiz/result/${data.resultId}${langParam}`;
      } else {
        alert(t.errorSubmit);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Quiz submission error:', error);
      alert(t.errorSubmit);
      setIsSubmitting(false);
    }
  };

  const currentQ = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  if (isSubmitting) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center p-8 text-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>
        <p className="mt-4 text-lg font-medium text-gray-700">{t.loading}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl md:p-10">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="mb-2 flex justify-between text-sm font-medium text-gray-500">
          <span>{t.questionOf(currentStep + 1, questions.length)}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full bg-blue-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">{currentQ.question[lang]}</h2>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {currentQ.options.map((option) => (
          <button
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className={`w-full rounded-xl border-2 px-6 py-4 text-left transition-all duration-200 hover:border-blue-500 hover:bg-blue-50
              ${answers[currentQ.id] === option.value ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-200' : 'border-gray-200 bg-white'}
            `}
          >
            <span className="block text-lg font-medium text-gray-900">{option.label[lang]}</span>
          </button>
        ))}
      </div>

      {/* Back Button */}
      {currentStep > 0 && (
        <div className="mt-8">
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className="text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            {t.back}
          </button>
        </div>
      )}
    </div>
  );
}
