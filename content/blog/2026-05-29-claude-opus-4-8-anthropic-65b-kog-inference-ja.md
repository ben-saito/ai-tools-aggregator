# Claude Opus 4.8 / Anthropic 650億ドル調達 / Kog AI高速推論 — 2026年5月29日AI開発ニュース

2026年5月29日、AnthropicがClaude Opus 4.8を発表し、650億ドルの資金調達を完了した。また、Kog AIが標準GPUで秒間3,000トークンの推論を実現と発表、Googleはインターネットの再構築計画を明らかにした。本稿ではこれらの主要トピックを技術的に解説する。

---

## Claude Opus 4.8 — Dynamic Workflowsとエージェント協調

Anthropicは5月28日、**Claude Opus 4.8** を正式リリースした。Opus 4.7からの改良版位置づけだが、**:

- **Dynamic Workflows** — サブエージェント群を調整する新機能。Claude Codeで大規模タスクを自律的に分割・実行可能
- **推論速度3倍高速化** — Fastモードが前モデル比3倍安いコストで利用可能に
- **ベンチマーク改善** — コーディング、エージェントタスク、推論、知識作業の全カテゴリでスコア向上

開発者にとって重要な点は、Opus 4.8が**長い作業の整合性**を改善した点だ。テスターのフィードバックによると、「正しい質問をする」「自らのミスをcatchする」「計画がsoundでないときにpushbackする」といった判断力が向上しているという。Claude Codeでの利用で最も効果が高く、大規模なマルチサービス探索において自信を持って変更を進める前に状況を把握するようになった。

### Dynamic Workflowsの技術的詳細

Dynamic Workflowsは、複数のサブエージェントにタスクを委譲する仕組みだ。従来のClaude Codeが単一エージェントで長いコンテキストを処理していたのに対し、Opus 4.8では**:

- タスクを自動的に分割
- 各サブエージェントに並列処理指示
- 結果を統合して最終出力

これは**agentic AI**の最新の実装形態であり、Enterprise用例での需要が高い。

---

## Anthropic — 650億ドル調達、9650億ドル評価額、IPO間近

TechCrunchの報道によると、Anthropicは**650億ドルのシリーズHラウンド**を完了し、**評価額が9650億ドル**に到達した。これはAIスタートアップ史上最高のプライベートEvaluationsの一つであり、IPO前の最終私募資金調達と見られている。

### 主要財務サマリー

| 項目 | 数値 |
|------|------|
| 調達額 | 650億ドル |
| 企業評価額 | 9650億ドル |
| 用途 | 計算資源拡大、IPO準備 |

また、Anthropicは**SpaceXとの計算資源契約**についてもめている。xAIとの競合が表面化しており、Elon Muskは契約期間について「短期・キャンセル可能」と主張する一方、SpaceXのS-1提出書類では2029年5月までの支払い計画が記載されているとTechCrunchは報じた。

---

## Kog AI — 標準GPUで秒間3,000トークン推論

Kog AIは5月28日、**Kog Inference Engine (KIE)** のテクニカルプレビューを発売した。**:

- **AMD MI300X 8台構成**: 秒間3,000トークン（リクエストあたり）
- **NVIDIA H200 8台構成**: 秒間2,100トークン
- FP16スピュレーションなしのraska那样的実装

これは**標準データセンターGPU**での性能であり、特別なアクセラレータを必要としない点が画期的だ сейчасは2Bモデルのみの対応だが、大きなMoEモデルのサポートも予定されている。

### 技術的背景

KIEのアプローチは、ハードウェアの:**
- メモリ帯域幅の最適化
- テンソル並列度の精细な制御
- カスタムカーネルによるウェイト読み込みのオーバーヘッド削減

開発者にとって重要なのは、Kogが**オープンな評価結果**を発表している点だ。 blog.kog.aiでTechCrunchに先がけて詳細が公開されており、第三方検証可能な性能データが記載されている。

---

## インターネットの再構築 — マシン向けトラフィック対応

TechCrunchは5月28日、**AWS、Cloudflareら主要プレイヤーが машины向けインターネットインフラの再設計を進めている**と報じた。

### 背景

現在のインターネットは:**
- 人間によるブラウジングを想定設計
- HTML主体のコンテンツ構造
- REST API中心の通信パターン

AIエージェントが:**
- 自律的にWebページをスクレイピング
- APIを直接呼び出してアクション実行
- 複数のサービスを跨いでワークフロー自動化

これにより:**
- マシン生成トラフィックの急増
- 従来型インデックス方式の限界
- 新しいプロトコル・フォーマットの需要

特に**agentic search**の分野では、GoogleやOpenAIがAI-first検索を推进しており、従来のクローラー・インデックスモデルからリアルタイム感情分析・構造化データ抽出への移行が進んでいる。

---

## Glean — 企業AI検索の収益化が加速

企業AI検索スタートアップのGleanは:**
- **年間収益3億ドル突破**（対前年3倍）
- TechCrunch报道時点で「AI budget-cutting」が主要訴求ポイント

これは**企業AI導入の第二波**を示している。最初は「先進的なAI機能」が販売観点だったが、今は:**
- 既存の业务流程へのAI統合
- コスト効率の改善
- 既存のツールとの互換性

Gleanの成功は、**
- Microsoft、Googleなどの巨大企業との差別化
- 既存のエンタープライズシステムとの深い統合
- 部門ごとに権限管理・利用統計

---

## Visa × Replit — エージェント決済の新規市場

VisaがReplitに出資し、**開発者向けエージェント決済プラットフォーム**を構築すると伝えた。

これは新しいカテゴリー开拓:**
- AIエージェントがユーザーに代わって決済
- サブスクリプション、服务利用の自動化
- 开发者佣金システムの简化

Replitは 代码生成・执行平台であり、Visaの支付基盤と組み合わせることで:**
- AI agents paying for API keys, cloud resources, third-party services
- 法人カード那样的企业管理
- リアルタイム使用量に応じた課金の自动化

---

## RSI — 新しいAGI指標

Andrej Karpathy率いるNeoLabらが提唱する**RSI（Recursive Self-Improvement）**が話題になっている。

AGIの定義:**
- 従来のAGI: 人間并の知性
- RSI: 自律的に改善を続ける能力

TechCrunchの報道によると、**RSIはAGIと同様に検証が困難**であり、新しいAIラボたちは「再帰的自己改善」に焦点を当てているが、目標達成の評価は依然として曖昧だという。

---

## 参考リンク

- [Claude Opus 4.8 - Anthropic公式](https://www.anthropic.com/news/claude-opus-4-8)
- [Anthropic raises $65 billion - TechCrunch](https://techcrunch.com/2026/05/28/anthropic-raises-65-billion-nears-1t-valuation-ahead-of-ipo/)
- [Real-time LLM Inference (3k tokens/s) - Kog AI Blog](https://blog.kog.ai/real-time-llm-inference-on-standard-gpus-3-000-tokens-s-per-request/)
- [The internet is being rebuilt for machines - TechCrunch](https://techcrunch.com/2026/05/28/the-internet-is-being-rebuilt-for-machines/)
- [Glean's top line crosses $300M - TechCrunch](https://techcrunch.com/2026/05/28/gleans-top-line-crosses-300m-as-ai-budget-cutting-becomes-its-major-selling-point/)
- [Asana acquires StackAI - TechCrunch](https://techcrunch.com/2026/05/28/asana-acquires-no-code-agent-builder-stack-ai/)
- [Claude Opus 4.8 - TechCrunch](https://techcrunch.com/2026/05/28/anthropic-releases-opus-4-8-with-new-dynamic-workflow-tool/)
- [RSI is the new AGI - TechCrunch](https://techcrunch.com/2026/05/28/rsi-is-the-new-agi-and-its-just-as-hard-to-pin-down/)

---

*本文の情報は2026年5月29日時点のものです。*