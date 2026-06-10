# WWDC26まとめ：AppleがSiriを企業アプリ層に進化、Cohereが30BコーディングエージェントをOSS公開、AnthropicがClaude Fable 5をローンチ

2026年6月10日、AppleのWWDC26 памятливо、AI業界が一斉に動いた。AppleはSiriをシステム全体のAIインターフェースへと转型させ、Cohereは1枚のH100で動作する30BコーディングエージェントをApache 2.0で公開、AnthropicはClaude Fable 5とMythos 5るという過去最安値のモデルを一般公開した。本稿ではこれらの動きを技術的に解读する。

---

## Apple、Siriをエンタープライズアプリアクションレイヤーに

AppleはWWDC26で、Siriを単なる音声アシスタントから**アプリコンテンツ検出・操作レイヤー**へと进化させた。Enterprise開発者にとって、これは重要なパラダイムシフトである。

### App IntentsとApp Schemaによる自然言語アクション

Appleの新しいフレームワークにより、開発者は以下の手段でアプリ機能をSiriに公開できる：

- **App Entities**：アプリコンテンツをSpotlightのセマンティックインデックスに登録
- **App Intents**：自然言語によるアプリ操作をSiriとShortcutsに公開
- **View Annotations**：画面上のUI要素をアプリオブジェクトにマッピング

これにより、CRMのレコード検索、ITサービスデスクのチケット更新、経費報告、プロジェクトタスクの操作などが「Siri、この顧客スレッドを要約して」「この請求書を経費に追加して」という自然な発話で実行できる。

### Core AIとFoundation Modelsの拡張

Appleは**Core AI**というOSレベルのフレームワークも導入した。これは、Apple Silicon上で開発者独自のモデルを実行するための基盤を提供する。Foundation Modelsフレームワークも更新され、multimodal prompts、Vision tools、動的モデルプロファイル、評価機能がサポートされた。

AppleのPrivate Cloud Computeと連携することで、オンプレミスとクラウドの両方でAIワークロードを柔軟に管理できる。

---

## Cohere、1枚のH100で動作する30Bコーディングエージェント「North Mini Code」をOSS公開

Cohereは6月9日、**North Mini Code**という30BパラメータのMoE（Mixture-of-Experts）コーディングエージェントをHugging Faceで公開した。Apache 2.0ライセンスで、256,000トークンのコンテキストウィンドウを持つ。

### 技術的詳細

- **128人のエキスパ员**うち8人がアクティブ（推論時は3B相当の計算量）
- 3つのエージェントスcaffoldingで訓練：**SWE-Agent**（丰富的CLI）、**Mini-SWE-Agent**（単一bashツール）、**OpenCode**（構造化JSONツール）
- 70,000以上の検証可能なタスク、SWE-Bench重複排除後の5,000リポジトリでRL訓練
- Terminal-Bench v2でベンチマーク（実際のターミナル環境でのテスト）

### ベンチマーク結果

Independent評価のArtificial Analysisでは、127モデル中**出力速度8位**（210 tokens/sec）、Intelligence Indexで**18位**。ただし、出力トークン数75M（中央値25M）と**verbosityが高い**点が課題として指摘されている。高volumeのプロダクション環境では、この冗長性が推論コストを押し上げる。

CohereのNick Frosst共同創設者は「小型、オープンソース、透明、主権的 -- 大規模、高額、プロプライエタリ、独裁的，这才是LLMのあるべき姿」と語る。

---

## Apple、DRAM制約を绕过：AFM 3は20BパラメータをNAND flashに存储

Appleは第3世代Foundation Models（AFM 3）で、**Instruction-Following Pruning（IFP）**と呼ぶ新しいアーキテクチャを採用した。20BパラメータモデルをDRAMではなくNAND flashに存储し、プロンプトごとに experts を DRAM にロードする。

### 動作原理

1. **フルモデルはNANDに常駐**：DRAMには常に1B〜4B（タスク复杂度による）だけがロードされる
2. **プロンプトごとに1度のルーティング**：通常のMoEではトークンごとにルーティングするが、Appleはプロンプト開始時に固定エキスパっとセットを選択
3. **動的アクティブパラメータ**：简单なタスクは1B、复杂な推理任务是4Bをアクティブに

Anthropicの研究者Awni Hannunは「20BパラメータをRAMに入れることはできない。かなり экзотик なアーキテクチャだ。小さなモデルがクエリからどのエキスパっとを NAND から DRAM にロードするかを予測する」と評価した。

### 未公開の詳細情報

Appleのプロファイリングツールはタイミング情報は公开しているが、エネルギー消費、メモり帯域、サーマルに関するデータは未公開。Appleは夏以降の完全な技術レポートを示している。

---

## Anthropic、Claude Fable 5とMythos 5を開始価格$10/1M入力で一般公開

Anthropicは6月9日、**Claude Fable 5**と**Mythos 5**という2つのモデルを一般公開した。価格は**$10/1M入力トークン、$50/1M出力トークン**で、Mythos Preview比で**半額以下**という大胆な価格設定，实现了している。

Fable 5は「現在利用できる最も強力な Generally Available モデル」とされ、コード生成·分析·マルチステップエージェントタスクに最適化されたOfferingとして位置づけられている。Claude Fable 5は$50/1M出力トークンで、Cohere North Mini Codeのローカルデプロイ可能なOSSモデルとは明確に差別化されている。

---

## Harness-1：GPT-5.4を超えるOSS検索エージェント

UIUC、UC Berkeley、Chromaの共同研究で、**Harness-1**が作られた。20Bパラメータのオープンソース検索エージェントで、**73%の精度でGPT-5.4（70.9%）を超えた**。

### 技术的革新区

従来の検索エージェントはすべての検索·読了·思考を自分のコンテキストウィンドウに溜めていくため、「検索健忘症」に苦しんでいた。Harness-1は狀態を外部化し、モデル workingメモリから「記憶の記録keepers」を切り離した。

これはAnthropicのClaude Codeが実証した「生きたモデルはハーネス重要」というテーマを踏襲しており、**生体力モデルサイズよりも作業環境の狀態管理効率が重要**이라는知見を示している。

---

## 開発者への影響

これらの発表は、エンタープライズAI開発者に以下の明確なシグナルを送っている：

1. **Apple Platform**：App Intents/App Schema対応がApple系エンタープライズアプリの競争力に必须有に
2. **ローカル推論**：North Mini CodeやAFM 3がクラウド依存からの脱却技术的選択肢として実用に
3. **モデル評価**：verbosityなど推論コスト因子含めた包括的評価が必须有に
4. **狀態管理**：エージェントパイプラインの設計で狀態外部化のアプローチが性能向上の关键に

---

## 参考リンク

- [Apple's new Siri AI is more than just a smarter assistant — it's a new enterprise app layer](https://venturebeat.com/ai/apples-new-siri-ai-is-more-than-just-a-smarter-assistant-its-a-new-enterprise-app-layer)
- [Cohere open-sources a coding agent that runs on a single H100](https://venturebeat.com/ai/cohere-open-sources-a-coding-agent-that-runs-on-a-single-h100)
- [On-device AI agents hit a hard memory limit. Apple's new architecture routes around it.](https://venturebeat.com/ai/on-device-ai-agents-hit-a-hard-memory-limit-apples-new-architecture-routes-around-it)
- [Anthropic brings Mythos to the masses with Claude Fable 5](https://venturebeat.com/ai/anthropic-brings-mythos-to-the-masses-with-claude-fable-5-its-most-powerful-generally-available-model-ever)
- [Harness-1 outperforms GPT-5.4 on recalling relevant information](https://venturebeat.com/ai/researchers-trained-an-open-source-ai-search-agent-harness-1-that-outperforms-gpt-5-4-on-recalling-relevant-information)

---

*（本記事の情報は2026年6月10日時点のものです）*