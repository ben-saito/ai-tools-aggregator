# AI開発ニュースまとめ：OpenAI独自チップ「Jalapeño」発表、AnthropicがSlack統合AI、FigmaがAI機能大幅強化

2026年6月下旬、AI業界で複数の大型発表が重なった。OpenAIがBroadcomと共同開発した初めての独自チップ「Jalapeño」を披露したかと思えば、AnthropicはClaude TagでSlackに常駐するAI同事エージェント機能を公開。デザインプラットフォームのFigmaもAI機能を大幅に拡張し、コードレイヤーやアニメーション対応を追加した。本稿では今週の最重要AI開発ニュースをまとめる。

---

## OpenAI、初めての独自チップ「Jalapeño」をBroadcomと共同開発

OpenAIは6月24日、同社初のカスタムAIチップ「**Jalapeño**」を発表しました。このチップはBroadcomと共同開発され、OpenAIの推論システムの特別なニーズに特化して設計されました。

### なぜ独自チップなのか

現在、OpenAIはGPU調達においてNVIDIAに大きく依存しているが、TikTok事件以降、米中摩擦の中でチップ確保の不安定さが顕在化している。OpenAI幹部は「AIモデルの訓練と推論の両面で、能力とコスト効率を最適化するには、ハードウェアからソフトウェアまで垂直統合が必要」と説明。JalapeñoはTSMCの3nmプロセスを利用しているとされ、大規模言語モデルの推論ワークロードに最適化されていると予想される。

### 業界への影響

GoogleがTPU、MetaがMTIA、AmazonがTrainium/Inferentiaと、各社が独自チップ開発の競争が激化する中、OpenAIも本格参入となった。

---

## Anthropic、Claude TagでSlackに常駐するAI同事エージェント公開

Anthropicは6月23日、新しい**Claude Tag**機能を公開した。Slackに直接組み込まれるこのAI同事は、背後で静かに動作し、組織の文書・Slackメッセージ・会議履歴から学習を続ける。

### 企業知識の蓄積と活用

Claude Tagのポイントは、**組織コンテキスト**を獲得できる点にある。従来のAIアシスタントが個人単位の知識にとどまるのに対し、Claude Tagはチーム全体のSlackのやり取りを継続的に分析し、プロジェクトの文脈や意思決定の履歴を把握する。

### 競合との差別化

MicrosoftはCopilot、SalesforceはSlackbot刷新版を提供しているが、Anthropicのアプローチは**常駐型同事**という思想が異なる。

---

## Figma、AI機能を大幅強化：コードレイヤー・アニメーション・カスタムプラグイン生成

Figmaは6月24日、久しぶりに大きな機能アップデートを発表。**コードレイヤー（Code Layers）**の導入により、デザインファイルから直接コードを抽出できるようになった。

### 主な新機能

- **コードレイヤー**: デザインレイヤーに基づいてCSS/Swift/Kotlin/Reactコードを自動生成
- **アニメーション対応**: プロトタイプレベルでモーションデザインをサポート
- **シェーダー対応**: GPUを活用したビジュアルエフェクトをデザイン内で直接プレビュー
- **AIプラグイン生成**: 自然言語からカスタムプラグインを自動作成

### 開発者にとって的意义

デザインとコードの距離が縮まることで、**デザインシステムの実装効率**が大幅に向上する。従来はFigmaからコードを書き起こす作業がopédique少なかったが、Code Layersによりその作業が自動化される。

---

## Agility Robotics、SPAC経由で時価総額25億ドルで上場へ

Oregon State Universityから分離した**Agility Robotics**が、SPAC（特別買収目的会社）経由で新規株式公開を計画している。企業価値は約25億ドルで、620百万ドルの調達を見込んでいる。

---

## MoEngage、AIエージェントによるマーケティング自動化を強化

インド発のマーケティングプラットフォーム**MoEngage**は、AIエージェントが各顧客に割り当てられ、パーソナライズされたコミュニケーションを自動化する技術を披露した。millions規模のAIエージェントを活用するこのモデルは、リアルタイム顧客接点の自動化を目指す。

---

## 技術的トレンド分析

今週の発表から見えてくる3つのトレンド：

1. **垂直統合の加速**: OpenAIのChip開発に象徴されるように、AI企業各社がソフトウェアだけでなくハードウェアまで手掛ける傾向
2. **AI同事エージェントの普及**: Claude Tagに代表されるように、AIは「質問に答える」から「チームの一員として常駐する」時代へ
3. **デザイン×開発の融合**: FigmaのCode Layersのように、設計と実装の境界が曖昧になるツールが増える

---

## 参考リンク

- [OpenAI unveils its first custom chip, built by Broadcom](https://techcrunch.com/2026/06/24/openai-unveils-its-first-custom-chip-built-by-broadcom/)
- [Anthropic's Claude Tag is learning your company, one Slack message at a time](https://techcrunch.com/2026/06/23/anthropics-claude-tag-is-learning-your-company-one-slack-message-at-a-time/)
- [Figma adds code layers, support for animations, more AI features in new update](https://techcrunch.com/2026/06/24/figma-adds-code-layers-support-for-animations-more-ai-features-in-new-update/)
- [Facebook rolls out an AI companion app for creators](https://techcrunch.com/2026/06/24/facebook-rolls-out-an-ai-companion-app-for-creators/)
- [Agility Robotics plans to go public via SPAC in a $2.5B deal](https://techcrunch.com/2026/06/24/agility-robotics-plans-to-go-public-via-spac-in-a-2-5b-deal/)

---

*（本文の情報は2026年6月25日時点のものです）*
