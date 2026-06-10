# WWDC2026まとめ：Siri AIが企業アプリ層に、Cohereが単一H100で動くコーディングエージェントをOSS公開

AppleとCohereが同時期に大型発表を行い、エッジAIと企業開発者を取り巻く環境が大きく変わろうとしている。AppleはWWDC2026でSiriをシステム全体のAIインタフェースへと再構築し、Cohereは単一のH100で動作する30B-MoEコーディングエージェントをApache 2.0ライセンスで公開した。開発者にとって重要なのは、いずれも「クラウド依存からの脱却」を指向する点だ。

---

## Apple、Siriを企業向けアプリアクション層として全面改装

Appleは6月9日のWWDC2026で、Siriを単なる音声アシスタントから「システム全体のAIアプリアクションレイヤー」へと昇華させた。Enterprise開発者にとって最も重要な変更は以下の3つだ。

**App Intentsによるアプリ横断の自然言語操作**: 開発者はApp Intentsフレームワークを使い、CRMチケット、ITサービスデスク、プロジェクトタスク、請求書、カレンダーイベントなどのオブジェクトをSiriに公開できる。ユーザーはアプリを開きなくても「Siriでこのチケットを完了にして」と命じるだけでよい。

**Spotlightのセマンティックインデックス統合**: AppleのEntityスキーマはアプリコンテンツをSpotlightのセマンティックインデックスに登録する。Intentスキーマは開発者が固定のコマンドフレーズを定義する必要もなく、自然言語でアクション可能にする。View Annotations APIを使用すれば、画面上の要素を直接参照した「この顧客スレッドを要約して」「この請求書を経費に追加して」といった対話が可能になる。

**Foundation Models Frameworkの拡張**: Swift開発者はAppleのオン-deviceモデル、AppleのPrivate Cloud Compute、およびAppleのLanguage Modelプロトコルに準拠する第三方プロバイダ（Claude、Gemini、オープンソースモデル、カスタムモデルを含む）にアクセスできる。企業アプリが軽量タスクにオン-deviceモデルを使用し、重い推論にPrivate Cloud Computeを活用する柔軟な構成が可能になる。

---

## Apple、AFM 3でDRAM制約を突破：20BパラメータをNAND flashに常駐

Appleが同日公開した第3世代AFM（Apple Foundation Models）の中で特に注目すべきは、**AFM 3 Core Advanced**のアーキテクチャだ。

従来のオン-device AIモデルはDRAMにモデル全体をロードする必要があるため、パラメータ数が7B前後に制限されていた。AppleはWeights-in-Flash方式を採用し、20BパラメータセットをNAND flashに常駐させ、DRAMは作業バッファとしてのみ使用する。

アーキテクチャ上の重要な点は**プロンプトあたりのルーティング**だ。標準的なMixture of Experts（MoE）モデルでは毎トークンごとにエキスパート選択を行うが、NAND-DRAM帯域幅ではその頻度が現実的でない。AFM 3 Core Advancedでは、プロンプト受信時に一度だけルーティング判断を行い、選択されたエキスパートセットをDRAMにロードしてから、全トークンを同一構成で生成する。Anthropicの研究者であるAwni HannunはXで「小さなモデルがクエリからどのエキスパ트를NANDからDRAMにロードするかを予測する」というアーキテクチャの特徴を解説している。

さらにAFM 3はタスク复杂度に応じてアクティブパラメータ数を1B〜4Bに動的に調整する。Appleのプロファイリングツールはタイミング情報を公開しているが、エネルギー消費、メモリ帯域幅、熱設計については今後の夏技術レポートで公開予定としている。

---

## Cohere、North Mini CodeをOSS公開：単一H100で動作する30B-MoEコーディングエージェント

Cohereは6月9日、**North Mini Code**をHugging FaceでApache 2.0ライセンスとして公開した。30BパラメータのSparse MoEモデル（128人の専門家、8人がアクティブ）で、推論時の計算要件は実質的に3Bパラメータ相当。Cohereの共同創業者Nick FrosstはMac Studio（MLX経由、約20GB RAM）で動作する様子をデモしている。

North Mini Codeは以下の特徴を持つ：

- **256,000トークンコンテキストウィンドウ**（最大生成長64,000トークン）
- **エージェント軟育用に構築**：SWE-Agent（丰富なCLI）、Mini-SWE-Agent（単一bashツール）、OpenCode（構造化JSONツール）の3つのスキャFoldで訓練され、OpenCode評価で10ポイントの向上
- **Terminal-Bench v2**で 실제的な 터미널環境テストを実施
- **Artificial Analysis**独立評価：127モデル中8位（出力速度210トークン/秒）、Intelligence Indexで18位

ただし注意点がある。North Mini CodeはIntelligence Indexの完了に7500万出力トークンを消費したのに対し、クラス中央値は2500万トークンだった。Frosst自身が「本当に十分な経済価値をもたらしているか」という問いを提起しており、高ボリュームのエージェントパイプラインではverbose出力が推論コストに影響する。

FrosstはXで「小さく、コスト効率が高く、Apache 2.0で、ローカルにデプロイ可能。这就是LLMが向かうべき道だ。大きくて、高くて、 proprietaで、 hegemonicなモデルとは対極にある」と投稿している。

---

## Anthropic、Claude Fable 5とMythos 5を提供開始：Mythos Previewの半額以下

Anthropicは6月9日、**Claude Fable 5**（最も capableな的一般利用可能なモデル）と**Mythos 5**を提供開始した。両モデルとも入力トークン百万あたり$10、出力トークン百万あたり$50で、Claude Mythos Previewの半分以下の価格に設定された。

Fable 5はエージェンティック・コーディングに、Mythos 5はより generalな用途に向けたモデルとして位置づけられる。Anthropicは「最も powerfulな generally availableモデル」としており、既存のClaude Fable PreviewおよびMythos Previewユーザーは引き続きアクセス可能。

---

## エージェント型AIがコーディングを解決——しかし他の問題が表面化

VentureBeatが伝えたところによれば、エージェント型AIは既にコーディング工程の core 部分となり、大量実行のレバレッジをもたらしている。しかしビジネスリーダーの間で新たな疑問が広がっている：「以前より速くコードを ship しているのに、なぜ製品の品質はそれに見合った速度で向上していないのか」

これはエージェント型AIが技術的負債や曖昧な要件、テスト不足といった既存のソフトウェアエンジニアリングの問題を浮き彫りにしたすることを意味する。コード生成のコストが低下する一方で、設計・レビューのコストはむしろ上昇している可能性がある。

---

## 参考リンク

- [Apple's new Siri AI is more than just a smarter assistant — it's a new enterprise app layer](https://venturebeat.com/ai/apples-new-siri-ai-is-more-than-just-a-smarter-assistant-its-a-new-enterprise-app-layer)
- [On-device AI agents hit a hard memory limit. Apple's new architecture routes around it.](https://venturebeat.com/ai/on-device-ai-agents-hit-a-hard-memory-limit-apples-new-architecture-routes-around-it)
- [Cohere open-sources a coding agent that runs on a single H100](https://venturebeat.com/ai/cohere-open-sources-a-coding-agent-that-runs-on-a-single-h100)
- [Anthropic brings Mythos to the masses with Claude Fable 5](https://venturebeat.com/ai/anthropic-brings-mythos-to-the-masses-with-claude-fable-5)
- [Agentic AI solved coding — and exposed every other problem in software engineering](https://venturebeat.com/ai/agentic-ai-solved-coding-and-exposed-every-other-problem-in-software-engineering)

---

*（本文の情報は2026年6月11日時点のものです）*