# WWDC 2026：「Siri AI」がついに登場 —— AppleのAIアシスタント完全再定義

2026年6月8日（米国太平洋時間）、AppleはWWDC 2026にて長年の待ち望まれていた「Siri AI」の全面改革を正式に発表した。声認識だけのアシスタントから、** Gemini powered の会話型AIコンパニオン**へと大変革する。本稿ではWWDCで発表された主要内容と、合わせてお伝えしたい今週のAI業界重要ニュースをまとめる。

---

## Siri AI：何が変わったのか

Appleのソフトウェアエンジニアリング担当VP Sebastien Marineau-Mes氏、Craig Federighi上級副社長が披露した新Siriの核となる変更点は以下のとおり。

### Dynamic Islandに本格移行

従来の「Siri起動時に画面端が光る」デザインから一新。**Dynamic Island内に新アニメーション**でSiriが常駐する形态になり、スワイプダウンでテキスト検索や会話開始ができるようになった。 Dedicatedな「Siriアプリ」も別途用意され、UIが大きく変わった。

### Gemini搭載でWeb知識＋画面共有対応

Google Geminiをエンジンに採用したことで、現在の世界的知識に基づく回答が可能になった。加えて、**ユーザーの画面に表示されている内容を理解し**、その文脈に応じた応答ができる「 screen awareness 」機能も実装。メールやメッセージの下書きを、受信者の普段の口調に合わせて自動成形する「Write with Siri」機能も注目だ。

### プライバシー強調：「データはリクエスト実行のみに使用」

Federighi상은「**We believe privacy in AI is non-negotiable**」と述べ、データの利用は「リクエスト実行のみ」に限定し、外部専門家がいつでも検証できる仕組みを設けると強調した。AI機能全般に Privacy-centric アプローチを貫く方針を示している。

### 対象デバイス：iPhone 11以降すべて

Appleは「**iOS史上最多のデバイスに対応するリリース**」と宣言。iPhone 11以降すべての端末がアップグレード対象となり、iOS 27 / iPadOS 27 / macOSの検索機能も根本から再構築された。Spotlight、Photos、Mailの検索が70%高速化されたという。

---

## OpenAI：「Lockdown Mode」公開 —— プロンプトインジェクション対策

6月6日、OpenAIは**Lockdown Mode**を正式に公開した。これはWebページに隠された悪意のあるチャットボット命令（プロンプトインジェクション攻撃）から機密データを保護するための新機能。

### 無効化される機能

- **ライブWebブラウジング**（キャッシュ済みコンテンツのみアクセス可）
- **Webからの画像取得・表示**
- **Deep research**
- **Agent モード**

### それでも完全ではない

OpenAI自身が「Lockdown Mode使用中でもキャッシュ済みコンテンツやアップロードファイルの経由でプロンプトインジェクションの影響を受ける可能性がある」と認めている。対象は「機密データを扱うビジネスユーザー」で、**ChatGPT Businessアカウントおよび一部個人アカウント**にロールアウト中。

---

## Google × SpaceX：約110,000 GPUの大型取引

GoogleはSpaceXと**月額9億2000万ドルのComputing提供契約**を締結した（2026年10月〜2029年6月）。対象はNVIDIA GPU、CPU、メモリなど**<u>約110,000ユニット</u>**。

### Anthropicとの取引との比較

| 契約内容 | 金額 | 規模 |
|---|---|---|
| Anthropic ↔ SpaceX | 月額12.5億ドル | Colossus 1データセンター全体 |
| Google ↔ SpaceX | 月額9.2億ドル | 約55,000 GPU相当（半分） |

Googleは「CloudとSpaceXの長いパートナーシップ」を強調する一方、社内では「最近launchしたAI製品への需要が予想外に大きく」、ブリッジコンピューティングの確保が必要だったと説明している。Alphabetは今年1800億ドル以上の設備投資をコミットしており、800億ドルの株式発行も発表済み。

---

## 「Tokenpocalypse」：AI経済の価格調整局面

MicrosoftがGitHub Copilotで**トークン単位の料金体系へ移行**したように、AI企业提供者がCopilot的な定額制ではなく実際のComputing消費に基づいて価格設定する時代が始まった。

### 価格上昇の背景

- **IPO前のAI企業**が収益性と株価正当化を迫られている
- 投資家資金で</minimax:tool_call>られていたコストがエンドユーザーに転嫁され始めている
- AnthropicのS-1提出文件中には「token関連のリスク要因」が多数含まれる可能性が高い

「Tokenpocalypse」という造語の背景には、Uberが短短1.5ヶ月間で「AI予算使い切り」を経験した事例がある。AI LabsはIPOに向けて成長率を証明する必要がある一方、インフラコストは指数関数的に増加しており、**価格と需要のマッチが大きな課題**になっている。

---

## WWDCその他：错误期待とフィードバックへの応答

注目すべきはAppleが**去年的Liquid Glassデザインの批判**を受け、UI要素の一部を元に戻す选项提供给用户。「Spotifyのディズコラー球更新に遭遇したばかりの方から批判が続いていた」（Morgan Little, TechCrunch referência）とあるようにconsumer techのフィードバックサイクル加速も印象的だった。

---

## 参考リンク

- [Apple's long-awaited AI Siri overhaul is finally here](https://techcrunch.com/2026/06/08/apples-long-awaited-ai-siri-overhaul-is-finally-here/) (TechCrunch)
- [WWDC 2026: Everything announced on Siri AI, iOS 27, Apple Intelligence and more](https://techcrunch.com/2026/06/08/wwdc-2026-everything-announced-on-siri-ai-os-27-apple-intelligence-and-more/) (TechCrunch)
- [OpenAI unveils Lockdown Mode to protect sensitive data from prompt injection attacks](https://techcrunch.com/2026/06/06/openai-unveils-lockdown-mode-to-protect-sensitive-data-from-prompt-injection-attacks/) (TechCrunch)
- [Google will pay SpaceX $920M per month for compute](https://techcrunch.com/2026/06/05/google-will-pay-spacex-920m-per-month-for-compute/) (TechCrunch)
- [Is this the dawn of the Tokenpocalypse?](https://techcrunch.com/2026/06/07/is-this-the-dawn-of-the-tokenpocalypse/) (TechCrunch)

---

*（本文の情報は2026年6月9日時点のものです）*
