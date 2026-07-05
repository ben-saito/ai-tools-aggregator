# AI開発ニュースまとめ：Gemma 4.12B、阿結合型AI、エージェント安全性

2026年7月、Google DeepMindを中心にAIモデルの効率化・マルチモーダル化、そしてAIエージェントの安全性という3つの重要なテーマが同時進行している。150万ダウンロードを超えたGemmaファミリーの新モデル、エンコーダ不要のマルチモーダルアーキテクチャ、そして trillion-dollar 経済価値を持つAIエージェントのための安全フレームワーク——本周の技術トレンドを整理する。

---

## Gemma 4.12B：エンコーダ不要のマルチモーダルモデルをノートPCで

Google DeepMindは6月3日（米国時間）、**Gemma 4.12B** を公開した。Gemma 4シリーズ史上最もバランス取れたモデルであり、ノートPC（16GB VRAM/Unified Memory）で動作するサイズにagentic マルチモーダル知性を凝縮した。

### 主な特徴

- **エンコーダ不要のアーキテクチャ**：ビジョンとオーディオ入力がLLMバックボーンに直接流れる。従来のマルチモーダルモデルで見られた個別のエンコーダーが不要になり、アーキテクチャが大幅に簡素化された
- **ベンチマーク性能**：26B Mixture of Experts（MoE）モデルに匹敵する性能を達成しながらも、パラメータ数は12Bに抑えられている
- **ネイティブオーディオ対応**：Gemma 4シリーズ初のミッドサイズ・モデルにおけるオーディオ入力サポート
- **Apache 2.0ライセンス**：商用利用可能なオープンソースモデル

### 開発者エコシステム

Gemma 4モデルの累計ダウンロードは**150万回**を突破。開発者はウェアラブルロボットアームからエンタープライズAIセキュリティまで幅広い応用を構築している。Gemma 4.12Bは、E4B（エッジ向け）と26B MoEの中間的存在として、ノートPC級ローカル推論と高性能のバランスを取る。

### 技術的意義

エンコーダ不要アプローチは、Appleの統合メモリ設計やノートPC級GPU制約の中で重要な意味を持つ。マルチモーダル処理の計算オーバーヘッドを最小化することで、実用的なローカル推論が可能になる。

---

## AIエージェントの安全性：Google DeepMindのAI Control Roadmap

Google DeepMindのRohin ShahとFour Flynnは6月16日、**AI Control Roadmap**と題したブログ投稿で、社内システム向けのAIエージェント安全策を解説した。

### なぜ今AIエージェントの安全性か

AIエージェントは自律的に複雑なタスクを実行でき、サイバー防御から科学発見、Product開発まで広範な分野を変革している。米国だけでも2030年までに**2.9兆ドル**の経済価値を生み出すと推定される。

Capabilityが向上する一方、agency（即座に複数のシステムにアクセスし行動を起こす能力）が増大するため、安全対策の要求も高度化している。

### AI Control Roadmapの3層アプローチ

1. **伝統的セキュリティ**：サンドボックス、エンドポイントセキュリティ、プロンプトインジェクション耐性
2. **モデル整合性（Alignment）**：AI自体が安全で有益であるように訓練することが主防衛線
3. **AI Control（制御の制御）**：内部エージェントを「潜在的に整合していない可能性がある」として扱う追加レイヤー

最後のレイヤーは「dual controlを持つ運転教官」に例えられる。教官は生徒を信頼しながらも、間違いがあればすぐにハンドルを握るかブレーキを踏む準備ができている。同様に、AI Controlはエージェントの検証済み行動に基づいて権限を段階的に付与する。

### ディフェンス・イン・デプス

この"defense-in-depth"アプローチは、従来のモデル整合性を超えて、系统レベルのセキュリティを追加する。整合性が不完全であっても保証を提供する点で、产業界全体のモデルとなりうる。

---

## AIスマートグラス：Harvard Dropoutsの「常時計測」アシスタント

Two former Harvard students AnhPhu Nguyen and Caine Ardayfioは、常時オンのAI電源付きスマートグラスを開発するスタートアップ**Halo**を立ち上げた。

### 主な機能

- **常時リスニングAI**：すべての会話を聞き取り、記録、リアルタイムで関連情報をグラスをに表示
- **リアルタイム情報表示**：複雑な単語や計算質問に対してリアルタイムで回答を提示
- **「無限記憶」**：過去の会話から相关信息を即座に検索
- **「Vibe Thinking」への第一歩**：Ardayfioはこれを「vibe thinkingへの最初の一歩」と表現

### 技術的背景

製品は**$249**でプレ注文を開始。$1百万のシードラウンドをPillar VC主宰、Soma Capital、Village Global、Morningside Ventureから調達済み。

「IRL Cluely」としてのアプローチ——Cluelyは求職面接や学校試験で「チート」を助けるというスタートアップ——に似ているが、グラスを介して視覚的に情報を提示する点が異なる。

---

## DeepMind × A24：映画スタジオとの異例のパートナーシップ

Google DeepMindと映画スタジオ**A24**は7月3日，研究パートナーシップを発表した。GoogleはA24への投資も発表している。

### パートナーシップの枠組み

- **深いR&D協調**：複数のプロジェクトにまたがる長期的な共同開発
- **クリエイター主導のAI開発**：映画制作者が技術の形状に直接貢献
- **ストーリーテリングの拡張**：カットエッジテクノロジーと次世代エンターテインメントのギャップを埋める

A24のfilm-maker-forward哲学とGoogleのAI研究力を組み合わせることで、「未来のツール」が「それを使うクリエイター」によって形作られることを確保する。

---

## セキュリティとデータ主権

### Perplexity Web Scraping問題

TechCrunchは8月4日（2025年）、**Perplexity**が明示的にAIクローリングをブロックしたWebsitesからデータを不正取得していた可能性を報じた。AI検索エンジンの精度追求とWebsitesのrobots.txt・利用規約との衝突を示している。

### データセンター成長の持続可能性

6月2日、Microsoftのデータセンター成長が同社のサステナビリティ目標に挑战を与えていることが分かった。AI需要に応えるためにデータセンター容量を急速に拡大する一方で、2030年までにカーボン陰性を目指すMicrosoftのコミットメントとの矛盾が深刻化。

---

## 参考リンク

- [Start building with Nano Banana 2 Lite and Gemini Omni Flash](https://deepmind.google/blog/start-building-with-nano-banana-2-lite-and-gemini-omni-flash/)
- [Introducing computer use in Gemini 3.5 Flash](https://deepmind.google/blog/introducing-computer-use-in-gemini-3.5-flash/)
- [Securing the future of AI agents](https://deepmind.google/blog/securing-the-future-of-ai-agents/)
- [DiffusionGemma: 4x faster text generation](https://deepmind.google/blog/diffusiongemma-4x-faster-text-generation/)
- [Investing in multi-agent AI safety research](https://deepmind.google/blog/investing-in-multi-agent-ai-safety-research/)
- [Google DeepMind and A24 announce first-of-its-kind research partnership](https://deepmind.google/blog/google-deepmind-and-a24-announce-first-of-its-kind-research-partnership/)
- [Harvard dropouts to launch always-on AI smart glasses](https://techcrunch.com/2025/08/20/harvard-dropouts-to-launch-always-on-ai-smart-glasses-that-listen-and-record-every-conversation/)
- [Perplexity accused of scraping websites that explicitly blocked AI scraping](https://techcrunch.com/2025/08/04/perplexity-accused-of-scraping-websites-that-explicitly-blocked-ai-scraping/)

---

*本文の情報は2026年7月6日時点のものです。*
