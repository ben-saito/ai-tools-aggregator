# AI開発ニュースWeekly：GPT-Live炸裂、Gemini エージェント化、Ollama が65Mドル調達

2026年7月9日のAI開発ニュースを総まとめ。音声AIの次世代対応、Gemini のコンピュータ使用機能、エージェントセキュリティの重要性が浮上する一方、コーディングツール市場では Claude Code の有料モデルと無料代替の比較が話題を呼びます。

---

## 🔊 OpenAI、GPT-Live で音声AIの最前線を提示

OpenAI は **GPT-Live** を正式公開し、ChatGPT Voice の裏側を支える次世代音声モデルとして話題です。人はもちろんのこと、**GPT-5クラスの推論をリアルタイム音声に組み込む**ことで、 voice agent が複雑なタスクを自律的に遂行できる時代が到来。従来の音声APIとの違いについては、OpenAIの[導入ブログ](https://openai.com/index/introducing-gpt-live)で解説されています。

また別軸では、OpenAI が[SWE-Bench Pro のベンチマーク問題を分析](https://openai.com/index/separating-signal-from-noise-coding-evaluations)し、コーディング評価の信頼性に対する警鐘を鳴らしています。~~人気のベンチマークでもデータの真正性には要注意~~という教訓は、LLM開発者すべてにRelevantです。

---

## 🖥️ Gemini 3.5 Flash に「Computer Use」機能が導入

Google DeepMind は **Gemini 3.5 Flash** に **computer use（コンピュータ使用）機能** を導入しました。これにより、Gemini が直接GUIを操作し、Webブラウジング、ファイル操作、アプリケーション制御を自律的に行えるように。DeepMind は同日[**AI agentsの未来セキュリティ**](https://deepmind.google/blog/securing-the-future-of-ai-agents/)についてもブログを公開し、AI Control Roadmap を提唱しています。

加えて **DeepMind × A24** の異色パートナーシップも発表されました。映画スタジオとAI研究所の協業は、創作過程へのAI統合を研究する布石です。

---

## 💰 開発ツール戦線：Ollama が65Mドル調達、Claude Code 有料 vs Goose 免费

### Ollama — 65Mドル調達、ユーザーは900万に

ローカルLLM実行の定番ツール **Ollama** が Benchmark 主導のシリーズメールで **6,500万ドルの資金調達** を発表。GitHub で **176,000スター、17,000 fork** を記録し、PC上でAIモデルを簡単に走らせるデファクトツールとしての地位を確証しました。Ollama の勝利は「複雑なAIモデルをいかに门槛を下げて届けるか」というプロダクト哲学の勝利です。

### Claude Code 月額200ドルの現実 vs Goose  gratis

VentureBeat の[Test](https://venturebeat.com/infrastructure/claude-code-costs-up-to-usd200-a-month-goose-does-the-same-thing-for-free/)によると、Claude Code は Anthropic サブスクリプション含め **月額最大200ドル**のコストがかかる場面も。一方、**Goose** は同様の機能を免费で提供。各社のコーディングAI戦略の違いが如実に表れています。

---

## ☁️ クラウド戦線：Railway がAWS挑む、Salesforce がSlackbot刷新

### Railway — 1億ドル調達でAIネイティブクラウド攻勢

**Railway** は AI ネイティブ基础设施提供商として **1億ドル** を調達。200万開発者を抱える同社はAWS·Azure·GCPの既存大手に立ち向かい、「複雑な設定なしにAIアプリをデプロイできる」体験で差別化しています。

### Google 検索ボックス — 25年ぶり刷新

言わずと知れた **Google 検索ボックス** が初めてのリデザイン。25年間ほぼ不变だったUIにAI統合の波が押し寄せ、Google検索自体が一つの「AIチャットインターフェース」へと変容し始めています。

### Salesforce — Slackbot AI agent でMicrosoft·Googleと三つ巴

Salesforce は **Slackbot の完全刷新版** を発表。AI agent としてSlack内で自律的にタスクをこなす新世代ボットで/Microsoft 365·Google Workspace との統合を激しく争っています。

---

## 🛡️ セキュリティと偽情報対策

Google の **deepfake 検出システム** が McConnell 上院院内総務の偽画像沸惑に使用され、その有効性が実証されました。AI生成コンテンツの検出技術は今後も至关重要となり、Google·Microsoft ともに検出APIの社会化を加速しています。

---

## 🤖 Claude Code リリース情報

| バージョン | リリース日 | 備考 |
|---|---|---|
| **v2.1.205** | 2026-07-08 | 最新版 |
| **v2.1.204** | 2026-07-08 | — |
| **v2.1.203** | 2026-07-07 | — |
| **v2.1.202** | 2026-07-06 | — |
| **v2.1.201** | 2026-07-03 | — |

---

## 参考リンク

- [GPT-Live — OpenAI](https://openai.com/index/introducing-gpt-live)
- [Separating signal from noise in coding evaluations — OpenAI](https://openai.com/index/separating-signal-from-noise-coding-evaluations)
- [Computer use in Gemini 3.5 Flash — DeepMind](https://deepmind.google/blog/introducing-computer-use-in-gemini-3-5-flash/)
- [Securing the future of AI agents — DeepMind](https://deepmind.google/blog/securing-the-future-of-ai-agents/)
- [Ollama raises $65M — TechCrunch](https://techcrunch.com/2026/07/09/popular-open-source-ai-developer-tool-ollama-raises-65m-grows-to-nearly-9m-users/)
- [Claude Code costs vs Goose — VentureBeat](https://venturebeat.com/infrastructure/claude-code-costs-up-to-usd200-a-month-goose-does-the-same-thing-for-free/)
- [Railway $100M — VentureBeat](https://venturebeat.com/infrastructure/railway-secures-usd100-million-to-challenge-aws-with-ai-native-cloud/)
- [Google search redesign — VentureBeat](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think/)
- [Google deepfake detector — TechCrunch](https://techcrunch.com/2026/07/08/googles-deepfake-detector-system-used-to-debunk-mcconnell-hoax-pic/)
- [Claude Code Releases — GitHub](https://github.com/anthropics/claude-code/releases)

---

*本文の情報は2026年7月9日時点のものです。*
