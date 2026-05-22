# AIエージェントの「忘れる問題」に対する新手法、Qwen3.7-Maxが登場：CohereはApache 2.0ライセンスでCitation対応モデルを発表

AI開発業界は、2026年5月21日に複数の重要な発表が同時発生し、エージェントのメモリ管理、大規模言語モデルの自律実行能力、オープンソースライセンスの開放性という3つの異なる軸で進展が見られた。本稿では、VentureBeatが報じた3つの記事を軸に、今週のAI開発ニュースを整理する。

---

## 問題提起：AIエージェントはなぜ「忘れる」のか

Enterprise AI agents keep failing because they forget what they learnedというVentureBeatの記事が指摘するように、多くの企業AIエージェントはパイロットフェーズから脱出できない。その問題の核心はモデルそのものにはない——**エージェントが学習した内容を保持できない**点にある。

標準的なソリューションはコンテキストウィンドウの拡張またはRAGの追加だが、いずれもコストと複雑性が増大するにもかかわらず、長期間・複数ステップの相互作用を要するワークフローでは信頼性の向上が見られない。

---

## delta-mem：パラメータの0.12%追加でRAGを超える記憶機能

Mind Labの研究者たちが提案した**delta-mem**は、AIエージェントに永続的な作業記憶を追加する新しいアプローチだ。

### 既存手法の限界

現在のメモリ解決策は大きく3つに分類される：

- **テキストメモリ**：履歴をコンテキストに挿入——ウィンドウサイズの制約を受け、圧縮時に情報損失しやすい
- **外部チャネル（RAG）**：外部モジュールでエンコード・検索——レイテンシ増加、統合の複雑さ、バックボーンとの不一致リスク
- **パラメトリック**：Adapter通じてメモリを重みにエンコード——訓練後に静的化しまい、実行中の新情報に適応できない

### delta-memのアーキテクチャ

delta-memは以下2つの核心的技術を採用している：

1. **OSAM（Online State of Associative Memory）**：エージェントの過去の相互作用を固定サイズの行列に圧縮し、基盤LLMをフリーズしたまま維持
2. **Gated Delta-Rule Learning**：新しい情報が到着すると、前状態が注意力値の予測を行い、実際の値との誤差を比較してメモリ行列を補正

生成時、バックボーンLLMの現在の隠れ状態がOSAM行列に投射され、古いメモリが検索される。この操作はモデル内のパラメータを変更せずに推論時の推論を誘導する。

### ベンチマーク結果

- delta-memの追加パラメータ：**0.12%**（競合手は76.40%）
- メモリ集約的なベンチマークで競合超え
- 長時間相互作用におけるコンテキスト劣化（context rot）を回避

この技術の意義は明確だ。コードアシスタントがデバッグスレッドを追跡し続けたり、データ分析エージェントが同じコンテキストを再処理し続けたりする——こうした「忘れ」問題が、エンティティ、組織レベルで遅延、トークンコスト、脆弱なワークフローという形でコスト発生する。delta-memはこれらのボトルネックを低オーバーヘッドで解決する可能性を提供する。

---

## Alibaba Qwen3.7-Max：35時間の自律実行とClaude Code対応

同日、Alibabaはproprietaryな**Qwen3.7-Max**を発表した。このモデルの最大の特徴は以下：

- **35時間の自律実行**が可能
- AnthropicのClaude Codeのような外部ハーネス（agent harness）をサポート
- **Apex Math Reasoningベンチマークで44.5点**を記録（Claude Opus-4.6 Maxの34.5点、DeepSeek V4-Pro Maxの38.3点を大きく上回る）

Qwen3.7-Maxは、推論能力を数学的問題解決に最適化し、長時間動作する自律エージェントとしての利用に適したアーキテクチャを採用している。35時間という連続実行時間は、現実のEnterpriseワークロード（夜間バッチ処理、長時間監視タスク等）での可用性を意識した設計と言える。

---

## Cohere Command A+：Apache 2.0ライセンス、Native Citations

Cohereは**Command A+**を発表。これはfull Apache 2.0ライセンスを採用した最初の大規模オープンモデルとされる。

### 主な特徴

- **Native Citations**：出力内のすべての事実的主張を、元のソースドキュメントやデータベース行に直接リンク
- **損失なし量子化（Lossless Quantization）**：精度を保ちながらモデルを圧縮
- **完全Apache 2.0**：商用利用におけるライセンス上の制約を排除

Native Citationsは特に注目に値する。Special tagsを出力内部に埋め込み、すべての事実的主張をその情報源に直接リンクすることで、RAG不要で回答の根拠を即座に検証可能になる。

---

## まとめ

2026年5月21日は、AIエージェントのメモリ管理、長時間自律実行能力、オープンソースライセンス開放性という3つの重要軸で進展があった。

| 発表 | 关键技术 | 意義 |
|------|---------|------|
| delta-mem | 0.12%パラメータで動的記憶 | RAG不要の低コスト長期メモリ |
| Qwen3.7-Max | 35時間自律実行 | Enterprise長時間タスク対応 |
| Command A+ | Apache 2.0 + Native Citations | 義務教育と透明性の両立 |

---

## 参考リンク

- [A 0.12% parameter add-on gives AI agents the working memory RAG can't — VentureBeat](https://venturebeat.com/ai/a-0-12-parameter-add-on-gives-ai-agents-the-working-memory-rag-cant)
- [Enterprise AI agents keep failing because they forget what they learned — VentureBeat](https://venturebeat.com/ai/enterprise-ai-agents-keep-failing-because-they-forget-what-they-learned)

---

*（本文の情報は2026年5月21日時点のものです）*