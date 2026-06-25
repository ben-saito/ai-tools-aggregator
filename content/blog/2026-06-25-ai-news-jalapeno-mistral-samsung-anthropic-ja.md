# AI開発ニュース 2026年6月25日版：OpenAI独自チップ「Jalapeño」発表、MistralがOCR 4で企業向け展開、SamsungがChatGPT Enterpriseを開放

2026年6月下旬、AI領域はカスタムチップ開発から企業AI展開まで、複数の重要な展開が同時進行している。OpenAIがBroadcomと共同開発した推論チップ「Jalapeño」の詳細が明らかにされる一方、Mistralは文書処理特化の「OCR 4」をエンタープライズ向けに本格展開しSamsung在内的企業がAI利用制限を大幅に緩和した。本稿ではこれらの動きを整理する。

---

## OpenAI、Broadcomと共同開発した推論チップ「Jalapeño」を披露——自社モデルで設計を加速

OpenAIは6月24日（現地時間）、Broadcomと共同開発した初めてのカスタムAI推論チップ**「Jalapeño」**の詳細をVentureBeatの独占取材で明かした。JalapeñoはBroadcom製のカスタムASICとして開発され、OpenAIの推論ワークロードに特化したアーキテクチャを採用している。

### 開発プロセスの革新：OpenAIのモデルがチップ設計を加速

Jalapeño開発の特筆すべき点は、**開発プロセス自体にOpenAIのモデルが活用された**点だ。両社は深いソフトウェア・ハードウェアのコデザインで、特にチップ設計の反復サイクルにおいてOpenAIのモデルがRTL（Register Transfer Level）設計の検証やブロック配置の最適化に使用された。これにより、従来のASIC開発相比、大幅な期間短縮が実現されたという。

### 技術的特徴

Jalapeñoは推論タスクに特化した設計されており、以下の特徴被认为される：

- **推論最適化アーキテクチャ**: トレーニング済みモデルの実行に最适合化
- **BroadcomのASIC専門知識**: 大量生産可能なカスタムチップ設計
- **エネルギー効率**: 大規模推论ワークロードに向けた消費電力最適化

OpenAIはJalapeñoにより、第三方クラウド提供的推論基盤への依存を减轻し、コスト構造の改善とサプライチェーンの多元化を図る構えだ。

---

## Mistral、OCR 4を発表——170言語対応、独自インフラへのデプロイ可能

Mistralは6月24日、文档抽出特化の新型AIモデル**「Mistral OCR 4」**のリリースを発表した。Mistral OCR 4は、同社のエンタープライズAI戦略の核となる製品であり、既存のクラウドAPI依存からの脱却を狙う企業にとって重要な選択肢となる。

### 対応言語とフォーマット

Mistral OCR 4の対応范围は以下の通り：

- **170言語**: 10の言語グループに分类
- **対応フォーマット**: PDF、DOC、PPT、OpenDocument
- **单一コンテナデプロイ**: 企業の自有インフラに導入可能

### 規制産業向けのアピール

Mistralは特に**規制産業（金融、ヘルスケア、政府機関）**を想定したセキュリティ設計を强调している。データが米国管轄のクラウドAPIを経由しないため、データの的主権やコンプライアンス要件が厳しい組織でも導入しやすい。

Mistral CEOのArthur Mensch氏は「OCRは企業のデジタル変革の最も基本的なビル딩ブロックだが、多くの企業で未だに手作业や闭じタリングされたシステムが使われている。Mistral OCR 4はそういう企业に、自由度とセキュリティを同时に提供する」とコメントしている。

---

## Alibaba、エージェント未经訓練で7ベンチマークを改善——シミュレーターでエージェント性能向上

Alibabaは6月24日、**エージェントとして直接训练されていないモデル**が、特別なシミュレーター技術により7つのベンチマークでエージェント性能を記録的に改善したと発表した。VentureBeatが伝えた。

### アプローチ： الحقيقي環境の限界をシミュレーターで補完

従来のエージェント訓練では、以下のアプローチが一般的だった：

1. **エージェント特化のファインチューニング**: タスク実行データでモデルを訓練
2. **リアルなテスト環境での評価**: 実際のアプリケーションを使用

しかし、Alibabaの研究者チームはどちらの手法にも限界があることに気づいた。 реальные 環境では\"エッジケース\"をオンデマンドで注入することができないため、モデルの泛用的能力向上が阻害される。

### Alibabaのシミュレーター技術

Alibabaが開発したシミュレーターは以下のプロセスを实现：

- **合成データの生成**: エッジケースや珍しいシナリオを программ的に 生成
- **多样性の確保**: 多种多様な状况をシミュレート
- **反復改善**: シミュレート結果を用いた段階的なモデル改善

结果として、エージェント特化の训练を受けていないモデルが、複数のベンチマークで最高性能を記録した。この发现は\"高质量なシミュレーターが训练データより重要\"可能性があることを示唆している。

---

## Xiaomi、HarnessXを発表——自身が持つAI SCAFFOLDINGを途中で書き換える技術

Xiaomiは6月24日、新しいAIフレームワーク**「HarnessX」**をVentureBeatに界的した。HarnessXは、リアルタイムでAIエージェントの\"安全装置（harness）\"を诊断・書き換える技術であり、特に小形モデルほど性能向上かみやすい特徴がある。

### 静的安全装置というボトルネック

企业AIの導入では、多くの場合\"安全装置\"（プロンプト制約、出力フィルタリング、アクセス制御レイヤー）が付与される。しかし这些の安全装置は多くの場合**静的に设定され、タスクの进行に合わせて调整されない**。结果として、不適切な安全装置がエージェントの性能や效率を制限するケースが多发している。

### HarnessXの革新的アプローチ

HarnessXは以下の機能を实现：

- **リアルタイム诊断**: エージェントの失敗パターン和我慢を即时检测
- **自動的な SCAFFOLDING 書き換え**: 必要に応じてプロンプトや制約を动的に调整
- **小形モデルへの効果**: 小形モデルほど、SCAFFOLDING の不適切さが性能に与える影响が大きいため、效果が显著

Xiaomiはこの技術を自有のAI製品に الداخلي統合しており、企业向けにも提供を目指す構えだ。

---

## Shopify、AIスタック構築の極意——「どのモデルが生き残るか无关」を目标に

ShopifyのVP of Engineering（正力氏）は6月24日、同社のAIインフラ構築アプローチについて詳細な説明した。核となるコンセプトは**\"どのモデルが生き残っても動作するAIスタック\"**の構築だ。

### 3つの关键技术

Shopifyが采用した手法は以下の3つ：

1. **プロキシ 레イヤー**: モデル抽象化图层により、個々のモデルに依存しない接口を提供
2. **蒸留（Distillation）戦略**: 大规模モデルの出力を较小モデルで効率的に再現する技術
3. **サーキットブレーカー**: 特定モデルの障害時に自動的でスタック全体を保护する机制

### 背景にある考え

このアプローチの背景には、AIモデルのRapidな变化という現実がある。Shopifyでは「新产品在次々と登场し、既存の产品が急に時代遅れになることがある。それに対応するためには、個々のモデルに依存しない抽象化が不可欠」という思路だ。

Farhan Thawar氏（Shopify VP of Engineering）はVB Transform 2026にて詳細な技术解説を行う予定。

---

## Samsung、AI制限を経てChatGPT EnterpriseとCodexアクセスを再開

Samsungは6月24日、社内のAI使用制限を経て、**ChatGPT EnterpriseおよびCodexアクセス**の再開を発表しになった。この動きは，企业環境でのAI活用に関する Samsung のアプローチ大きく转变示すものとして注目される。

### 背景

Samsungは以前、特定のAIサービスの企業環境での使用に制限を設けていた。だが、ChatGPT Enterpriseのセキュリティとコンプライアンス機能が向上したことで、同社说来の基準を满たすことになったとされます。

### 企業AIの転換点

この再開は、他の大企業にとっても重要な先例となりうる。ChatGPT Enterpriseの企业向けセキュリティ机能（SOC 2対応、的数据主权、柔軟なデプロイメント选项）が\"企業安全基準\"として认知されつつあることを示唆している。

---

## Anthropic、Slackに直接AIエージェントを投入——「Workplace AI agents」発表

Anthropicは6月24日、Slackに直接統合される**「workplace AI agents」**の 提供を開始した。この新製品は、Slackワークスペース内で直接AIエージェントを动作させ、业务プロセスの自动化を図るものだ。

### 主な特徴

- **Slackネイティブ**: 新しいウィンドウやツール切换なしでSlack上から操作可能
- **ワークフロー自動化**: 反復的な业务タスクを自动実行
- **Claudeの能力活用**: Anthropicの安全で正確なAI技术力を企业提供

この動きは\"AIエージェントがユーザーの働く場所に\"という思路を進化させるものであり、Microsoft（Copilot）とAnthropicの 企业向けAI市场竞争がさらに激しくなりつつあることを示している。

---

## 参考リンク

- [OpenAI unveils first custom AI inference chip, Jalapeño, with Broadcom (VentureBeat)](https://venturebeat.com/ai/openai-unveils-first-custom-ai-inference-chip-jalapeno-with-broadcom)
- [Mistral launches OCR 4, turning document extraction into a full enterprise AI play (VentureBeat)](https://venturebeat.com/ai/mistral-launches-ocr-4)
- [Alibaba's model never trained as an agent — and improved agent performance across seven benchmarks (VentureBeat)](https://venturebeat.com/ai/alibaba-agent-performance)
- [Xiaomi's HarnessX rewrites its own AI scaffolding mid-task (VentureBeat)](https://venturebeat.com/ai/xiaomi-harnessx)
- [How Shopify built an AI stack that doesn't care which models survive (VentureBeat)](https://venturebeat.com/ai/shopify-ai-stack)
- [Samsung opens ChatGPT Enterprise and Codex access after AI restrictions (AI News)](https://www.artificialintelligence-news.com/)
- [Anthropic drops 'workplace AI agents' directly inside Slack (AI News)](https://www.artificialintelligence-news.com/)

---

*（本文の情報は2026年6月25日時点のものです）*
