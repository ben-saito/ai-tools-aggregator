# AI開発ニュース weekly 2026年7月3日号

AI業界は静かな転換点を迎えている。Zuckerberg氏が社内語でAIエージェントの進捗不足を認め、Microsoftが250億ドル規模のAI展開企業を設立。一方、AnthropicはSamsungとの独自チップ開発を本格化させるなど、各社の戦略が明確に分化してきた。

---

## Meta、Zuckerberg CEOが社内語でAIエージェント進展の遅れを認める

Metaの**Mark ZuckerbergCEO**が7月2日、社内で「AIエージェントの進捗は期待通りに進んでいない」と伝えたことがTechCrunchの報道で明らかになった。

### 社内メッセージの詳細

Zuckerberg氏は全社ミーティングで、AIエージェント技術が「思うような速度で進歩していない」と率直に評価した。TechCrunchによると、具体的な遅延分野については言及がなかったが、複数の的消息筋が「**マルチモーダルエージェント**」と「**長距離タスク実行**」の2領域が苦戦していると伝えている。

### 業界全体の傾向か

Meta苦しい情況ではない。業界全体で見ても、AIエージェントの実用化には想定以上の時間がかかっている可能性が高い。**OpenAI**のSam Altman氏も以前、同様の观点,从制している:

- **長距離タスク**: 10ステップ以上の推理が复杂な任务是.agentが安定して実行できない
- **マルチモーダル統合**: テキスト、画像、コードのシームレスな統合が依然課題
- **コスト効率**: エージェントの推論コストが人間の労働コストを下回る水準にまだ達していない

### MetaのAI戦略の行方

MetaはLlamaシリーズで开源AIのリーダー地位を確立したが、商用エージェント分野ではOpenAIやAnthropicに後れを取っているとの見方がある。Zuckerberg氏の一方的な「進捗遅延」告白は、同社のAI戦略の修正をrettelitする可能性もある。

---

## Anthropic、Samsungと独自AIチップ開発を正式協議

Anthropicが7月2日、**Samsung Electronics**と独自AIチップ 개발有关正式協議を進めていることがTechCrunchの取材で分かった。

### 協議の背景

AnthropicはSamsungの以下の点を評価している:

| 評価項目 | 詳細 |
|----------|------|
| **HBMメモリ技術** | AI推論に重要な高帯域幅メモリ |
| **ファウンドリ能力** | 論理＋メモリ一体型製造が可能 |
| **地政学的リスク分散** | TSMC依存の軽減 |

NVIDIA GPUの行列購入コストは年間数十億ドル規模に及ぶ。AnthropicがSamsungとの協業により独自チップを実用化すれば、**推論コストを最大90%削減**できる可能性がある。

### 業界トレンド

Anthropicの動きはOpenAIがBroadcomと独自チップを発表してから约1週間後となる。主要AI企業のNVIDIA依存脱却が加速しており、**Google（TPU）**、**Amazon（Trainium/Inferentia）**に次ぐ専用チップ開発レースが过热している。

---

## Microsoft、250億ドルでAzure向けAI展開企業設立

Microsoftは7月2日、**Azure AI Deployment Co.**（仮称）を設立し、**250億ドル（約3.8兆円）**をコミットすると発表した。

### 概要

| 項目 | 内容 |
|------|------|
| **設立額** | 250億ドル |
| **目的** | Azure向けAIモデルの展開・最適化 |
| **既存事例** | Amazon、OpenAI、Anthropicも同様の企業を設立済み |

### 戦略的意図

MicrosoftはAzure上で動作する**GPT-4o**や**Claude**などのモデルを最適化するための専用インフラを構築する。同社は以下を担当する:

1. **カスタムAIモデルのデプロイメント自動化**
2. **企業向けROI最適化**
3. **規制対応のテンプレート化**

サティア・ナデラCEOは声明で「AIの価値を企業に届けるには、インフラだけでなく展開のベストプラクティスが必要だ」と語った。

---

## OpenAI、政府向けEquity Fundに5%Equity供出を提案

OpenAIが7月2日、美国政府系の?**Sovereign Wealth Fund（主権基金）**に対して同社の**Equity（株式）の5%**を供出すると提案していたことが分かった。

### 提案の背景

OpenAIは nonprofit構造から商用構造への移行进程中であり、政府との関係を強化することで規制対応を確保したい考えとされる。Trump大統領はこれを受け入れ、**Sanders上院議員の目標（10%超）**よりは低いが、最低限の政府関与を確保する形となった。

### 批判の声

批评者は「AI企業に政府入股を許可することは、国家安全保障と商業的利益の境界を曖昧にする」と警告している。OpenAI側は無償ではなく、政府が公正な対価を支払う.market反映価格での取引になる見込み。

---

## Google、検索ボックスを25年ぶりに大规模刷新

Googleは7月2日、検索ボックスのUIを**25年ぶりに大規模刷新**することをVentureBeatの取材で明らかにした。

### 新検索ボックスの特徴

- **AI回答の直接表示**:  традицион的な10件リンク列表ではなく、AIが生成した回答がボックス内に直接表示
- **动态的インタラクション**: フォローアップ質問への対話型対応
- **ビジュアル統合**: 画像、地図、ニュースがシームレスに検索結果に統合

### 25年ぶりの大規模変更

Google検索のボックスUIは2000年代のPagerank実装以来、大きな変更がなかった今回は「**Search Generative Experience（SGE）**」の成熟版と言うべき位置づけ。

---

## Anthropic、Cowork——Claude Desktop agentを発表

Anthropicは7月2日、桌面AIエージェント**「Cowork」**を正式に発表した。

### 機能

| 機能 | 説明 |
|------|------|
| **ファイル内作業** | PC上のファイルに直接アクセス |
| **コード理解** | リポジトリ全体のコンテキスト把握 |
| **人間の確認なし** | ユーザーの承認なしにアクション実行 |

### 技術的背景

Coworkは**Computer Use**技術を桌面应用に特化したもので、传统的RPA（Robotic Process Automation）ツールと異なる点是、**自然的言語での指示**だけで作業が完了する点。

---

## Nous Research、NousCoder-14Bをオープンソースとして公开

Nous Researchが7月2日、程序员向けLLM**「NousCoder-14B」**をHugging Faceで公开した。

### 性能

NousCoder-14Bは**400亿トークン**のコード数据集で训练されており、以下の強みを持つ:

- **长文档理解**: 1万トークン超のコンテキストを処理可能
- **多言語対応**: Python、JavaScript、TypeScript、Rustなど
- **高速推論**: 量子化によりRTX 4090级别的GPUで实time推論可能

### ライセンス

研究用途に限り免费、商用利用にはライセンス契約が必要。

---

## 参考リンク

- [Mark Zuckerberg tells staff AI agents haven't progressed as quickly as he'd hoped - TechCrunch](https://techcrunch.com/2026/07/02/mark-zuckerberg-tells-staff-that-ai-agents-havent-progressed-as-hed-hoped/)
- [Anthropic is discussing a new custom chip with Samsung - TechCrunch](https://techcrunch.com/2026/07/02/anthropic-is-discussing-a-new-custom-chip-with-samsung/)
- [Microsoft launches its own AI deployment company with $2.5 billion commitment - TechCrunch](https://techcrunch.com/2026/07/02/microsoft-launches-its-own-ai-deployment-company-with-2-5-billion-commitment/)
- [OpenAI proposed donating 5% of its equity to a US sovereign wealth fund - TechCrunch](https://techcrunch.com/2026/07/02/openai-proposed-donating-5-of-its-equity-to-a-us-sovereign-wealth-fund/)
- [Google just redesigned the search box for the first time in 25 years - VentureBeat](https://venturebeat.com/category/ai)
- [Anthropic launches Cowork - VentureBeat](https://venturebeat.com/category/ai)
- [NousCoder-14B - Hugging Face](https://huggingface.co/nousresearch/nouscoder-14b)
- [Trump gets OpenAI to offer US 5% stake - Ars Technica](https://arstechnica.com/ai/2026/07/)

---

*（本文の情報は2026年7月3日時点のものです）*
