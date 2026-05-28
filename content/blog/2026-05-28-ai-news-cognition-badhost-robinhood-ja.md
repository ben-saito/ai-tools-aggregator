# AI開発 最新トレンド：Cognitionが10億調達、Starlette脆弱性でAIエージェント危機

2026年5月、AI開発業界は大型資金調達と重大セキュリティ脆弱性という対照的なニュースが同時発生しました。AIコーディングエージェントの商業化が加速する一方、オープンソースフレームワークの脆弱性がAIエージェント基盤全体を脅威しています。本稿では今週の重要ニュースを整理します。

---

## Cognition、10億ドルの大型調達——評価額250億ドルに

AIコーディングエージェント「Devin」を開発するCognitionが、**10億 ドル以上**の資金調達を完了しました。前回2025年9月のラウンド時よりも評価額が倍以上になり、**250億ドル（プレマネーバリュエーション）**という驚異的な数字を達成しています。

### 投資家と事業成長

今回のラウンドはLux CapitalとGeneral Catalystが主導し、Founders Fund、8VC、Ribbit Capital、Atreides、Layer Globalなど錚名のVCが参加。AnthropicのClaude Code、OpenAIのCodex、GoogleのJulesなど巨大企業の参入が予想される中、独立系AIコーディングスタートアップへの強い信頼が示されています。

CognitionはMercedes-Benz、NASA、Goldman Sachs、Sansanderなどの大企業顧客化し、**年間経常収益（ARR）が4億9200万美元**に到達。過去6ヶ月間で月間成長率50%を継続しており、製品と市場の適合性が確認されています。

> 「独立系AIコーディングスタートアップ仍有成長余地という、大型VCからの明確な信任表明」

### 開発者にとっての意味

Devinは自律的なAIエンジニアとして、コード生成からデバッグ、デプロイまでエンドツーエンドで処理する能力を持っています。250億ドルの評価額は、AIがソフトウェア開発プロセスにおいてどれほどの価値を創造し得るかを示す指標であり、開発者としてAI協業ツールの進化を注視する必要があります。

---

## 重大脆弱性「BadHost」——数百万のAIエージェントが影響

セキュリティ研究者チームX41 D-SecとSecwestが、**Starletteフレームワーク**に深刻な脆弱性を発見しました。この脆弱性は**CVE-2026-48710**として追跡され、「**BadHost**」という名が付けられています。

### 脆弱性のメカニズム

StarletteはPython製ASGIフレームワークで、**週間3億2500万ダウンロード**を記録する人気ライブラリです。FastAPI、vLLM、LiteLLMなどAI開発で広く使用されるパッケージの基盤となっています。

BadHost脆弱性の本質は次の通りです：

- HTTP Hostヘッダーに単一文字を注入するだけで、pathベースの認証をバイパス可能
- StarletteはHostヘッダーを検証せず、URLを再構築するため`request.url.path`と実際のHTTPリクエストパスが不一致
- 認証バイパス、SSRF（サーバー側リクエスト偽造）、場合によってRCE（リモートコード実行）につながる

### 影響範囲

Starletteの旧バージョンを使用する全てのパッケージが影響を受けます：

| 影響を受けるパッケージ | 用途 |
|---|---|
| **FastAPI** | 主流のPython REST APIフレームワーク |
| **vLLM** | 大規模言語モデルサービスの要 |
| **LiteLLM** | LLMプロキシ暨オーケストレーションレイヤー |
| **Text Generation Inference** | HuggingFace推論サーバー |

X41 D-SecのリーダーMarkus Vervier氏によれば、スキャン結果すでに多种の機密データが露出しているという。**CVSSスコア7/10**と報告されていますが、研究者は「実際の脅威はもっと深刻」と指摘しています。

### 対応策

Starlette v1.0.1が5月23日（金）にリリースされました。AIエージェントを運用する開発者は即座に以下を確認する必要があります：

1. 使用中のパッケージのStarlette依存バージョンを確認
2. [Nemesisオンラインスキャナー](https://nemesis.moe/)で脆弱性確認
3. アップデート適用または ファイアウォール設定の強化

---

## Robinhood、AIエージェント向け株式取引プラットフォームを開始

RobinhoodがAIエージェント専用の取引アカウント提供服务開始を発表しました。開発者は特定の金額を設定し、AIエージェントに株券の売買を自律的に実行させることができます。

### 機能とリスク

AIエージェント取引の用途として想定されるのは：

- 特定業界のモニタリングと自動取引
- ポートフォリオのリバランス
- 事前に定義された戦略の執行

Robinhoodは明確に**「重大なリスクが含まれ、投資全体が失われる可能性がある」**と警告しています。AI駆動の戦略は市場の急変に弱い可能性があり、開発者が金融机构のAPI를統合する際には細心の注意が求められます。

> 「AIエージェント経済元年」が近づく中、金融インフラのAI統合が急速に進んでいます。

---

## ElevenLabs、新型音楽生成モデル——ジャンル間を自在に切り替え

ElevenLabsが新しい音楽生成モデルを発表しました。最大の特徴は、**曲の最中にジャンル切り替えが可能**な点です。

### 技術的特徴

- オペラからヘビーメタルへの即座の切り替え
- coherenceを維持したまま高速ラップを生成
- 非音楽的な効果音（SE）の埋め込み
- パート毎でのプロンプトベース再生成

従来は短片生成に制限されていましたが、新モデルではIntro、Verse、Chorusなどのセクションを個別生成して結合可能。**多言語での歌詞、作曲、編曲において安定した性能**を達成しています。

creatives向けの生成AIとして、着実に実用可能性が高まっています。

---

## YouTube、AI生成動画の自動ラベリングを開始

YouTubeはAI生成動画の自動認識・自動 labeling機能を導入します。2023年からのクリエイター手動開示制度をアップグレードし、**プラットフォーム側が自動的にAI生成コンテンツを検出**してラベル表示します。

対応対象：

- 実在の人物・場所・出来事を模倣したAI生成コンテンツ
- アニメ・創作シーンなど明らかなAI生成動画（従来は除外されていた）

ラベルは長尺動画とYouTube Shortsの両方に表示され、視認性が高まります。AI生成コンテンツの判別が容易になり、观众とクリエイター双方にとって透明性が向上します。

---

## 参考リンク

- [Cognition raises $1B at $25B pre-money valuation (TechCrunch)](https://techcrunch.com/2026/05/27/ai-coding-startup-cognition-raises-1b-at-25b-pre-money-valuation/)
- [Millions of AI agents imperiled by critical vulnerability (Ars Technica)](https://arstechnica.com/information-technology/2026/05/millions-of-ai-agents-imperiled-by-critical-vulnerability-in-open-source-package/)
- [Robinhood AI agent stock trading (The Verge)](https://www.theverge.com/ai-artificial-intelligence/938095/robinhood-ai-agent-stock-trading)
- [ElevenLabs music generation model (TechCrunch)](https://techcrunch.com/2026/05/27/elevenlabss-new-music-generation-model-can-switch-genres-mid-track/)
- [YouTube AI video labeling (TechCrunch)](https://techcrunch.com/2026/05/27/youtube-will-now-automatically-label-ai-videos/)

---

*（本文の情報は2026年5月28日時点のものです）*