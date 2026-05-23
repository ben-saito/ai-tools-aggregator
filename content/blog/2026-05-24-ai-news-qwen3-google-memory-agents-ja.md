# AI開発最新ニュース：Alibaba Qwen3.7-Maxが35時間自律実行、Google検索ボックスの大改革、AIエージェントのメモリ課題

2026年5月、AI開発分野で大きな動きが続いている。AlibabaのQwen3.7-Maxが35時間の自律実行を実現し、米大手企业的AIエージェントの導入失敗率が依然高水準するなど、AIエージェントの実用化をめぐる攻防が本格化している。

---

## Alibaba Qwen3.7-Max：35時間自律実行可能なプロプライエタリモデル

Alibabaが開発した**Qwen3.7-Max**は、外部ハーネス（AnthropicのClaude Codeのような連携ツール）をサポートしながら、**最大35時間の自律実行**を可能にするプロプライエタリモデルだ。

Apex Math Reasoningベンチマークにおいて、Qwen3.7-Maxは**44.5点**を記録。Claude Opus-4.6 Maxの34.5点、DeepSeek V4-Pro Maxの38.3点を大きく上回り、現在確認できる中で最高性能の推論モデルとして注目される。

主な特徴は以下の通りだ：

- **外部ハーネス対応**：Claude Codeのような外部制御システムとの統合が可能
- **長時間自律実行**：35時間の連続自律動作をサポート
- **ベンチマーク性能**：数学的推論タスクで最高性能を記録

---

## AIエージェントのメモリ課題：パラメータの0.12%でWorking Memoryを実現

VentureBeatが報じたところによれば、新しい研究で**モデルパラメータのわずか0.12%**を追加するだけで、AIエージェントが長時間相互作用でコンテキストを維持できる新しいメモリモジュールが開発された。

このメモリモジュールは以下の特徴を持つ：

- **アーキテクチャ変更不要**：既存のモデルに追加可能
- **低いオーバーヘッド**：パラメータの増加を0.12%に抑えながら長期コンテキスト対応
- **RAGの限界を克服**：従来のRAG（検索拡張生成）では達成できなかった作業メモリを実現

これにより、エンタープライズ環境でのAIエージェントの長引くコンテキスト喪失問題が解決策に近づく可能性がある。

---

## エンタープライズAIエージェントの「忘れ物」問題

企業のAIエージェントの大部分はパイロットフェーズから脱却できないでいる。問題はモデル本身ではなく、**エージェントが学習した内容を忘れてしまう**点にあるとされる。

多くの企業が直面している課題：

- 長時間の会話で最初の指示内容を忘れる
- タスクの途中でコンテキストが失われる
- セッションをまたいだ学習の持続が困難

この問題は、RAGなどの従来技術では 完全には解決されておらず、エージェントの自律性発揮を阻む根本的な障壁となっている。

---

## マルチエージェント調査システム：Resolve AIの解決策

Resolve AIは、**AIコーディングブーストによる本番システム障害**問題に対応するため、新しいマルチエージェント調査システムを開発した。

このシステムの特徴：

- **並列仮説追求**：複数の specialized agents が同時に複数の仮説を調査
- **相互検証**：各エージェントが互いの結論を独立して検証
- **完全因果チェーン構築**：根本原因から症状まで完全な因果チェーンを構成

同社は内部評価ベンチマークで、以前のバージョンと比較して**2倍以上の根本原因精度向上**を達成したと報告している。

---

## Google Managed Agents API：ワンコールデプロイの可能性と引き換え

Googleが新型**Managed Agents API**を発表。このAPIにより、数週間かかっていたデプロイ作業を1回の呼び出しで完了できるとしている。

ただし、注意点がある：

- **実行レイヤーの制御をGoogleに委譲**する必要がある
- 開発者は実行層のカスタマイズ可能性を犠牲にする
- 本番環境での柔軟性が制限される可能性

エンタープライズ開発者は、導入容易性と制御性のトレードオフを慎重に検討する必要があるだろう。

---

## Cohere Command A+：Apache 2.0ライセンスの完全オープンソースモデル

Cohereは**lossless量子化**と**native citations**を実装したCommand A+をリリース。これは初めて完全な**Apache 2.0ライセンス**で公開されるオープンソースモデルとなる。

主な特徴：

- **Lossless量子化**：精度劣化のないモデル圧縮を実現
- **Native Citations**：出力の各主張に元の文書参照を自動添付
- **完全なApache 2.0**：商用利用におけるライセンス障壁なし

---

##  参考リンク

- [Your AI agents need a terminal, not just a vector database - VentureBeat](https://venturebeat.com/ai-agents-need-terminal-not-vector-database)
- [Alibaba's proprietary Qwen3.7-Max can run for 35 hours autonomously - VentureBeat](https://venturebeat.com/alibaba-qwen3-7-max-35-hours-autonomous)
- [A 0.12% parameter add-on gives AI agents the working memory RAG can't - VentureBeat](https://venturebeat.com/0-12-percent-parameter-add-on-gives-ai-agents-working-memory-rag-cant)
- [Enterprise AI agents keep failing because they forget what they learned - VentureBeat](https://venturebeat.com/enterprise-ai-agents-failing-forget-what-they-learned)
- [Resolve AI says the AI coding boom is breaking production systems - VentureBeat](https://venturebeat.com/resolve-ai-production-systems)
- [Google's Managed Agents API promises one-call deployment - VentureBeat](https://venturebeat.com/google-managed-agents-api)
- [Cohere cracks lossless quantization and native citations - VentureBeat](https://venturebeat.com/cohere-command-a-plus)

---

*（本文の情報は2026年5月24日時点のものです）*