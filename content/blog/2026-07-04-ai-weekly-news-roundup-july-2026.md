# AI開発ニュースまとめ（2026年7月第1週）

2026年7月に入り、AI業界ではカスタムチップ開発、AIエージェントの現実的な進捗、および政府对AI統治の枠組み整備など、複数の重要な動きが見られた。今週の主要ニュースをまとめる。

---

## OpenAIとBroadcom、初めての本家AI推論チップを発表

OpenAIはBroadcomと協業し、9ヶ月の開発期間を経て初めてとなるカスタムAI推論チップを発表しました。2026年末の実用化を目指します。

**技術的ポイント:**
- **推論特化型設計**: 学習済みモデルの実行に最適化されたアーキテクチャ
- **9ヶ月という短期間開発**: BroadcomのASIC設計能力とOpenAIのAI専門知識の融合
- **NVIDIA依存の低減**: 学習と推論の両面でGPU依存度を下げる戦略

このチップは、ChatGPTのような大規模言語モデルの推論コストを大幅に削減されることが期待されている。現在のGPUベースの推論は依然として非常に高額であり、専用チップの需要は高い。

**開発者の視点:** OpenAIが垂直統合型のアプローチに舵を切ったことは、AI業界全体にとって大きな転換点。GoogleのTPU、Microsoftの独自チップ、そしてOpenAIの新規参入により、AIインフラの多様化が進む可能性がある。

---

## Microsoft、AI展開専門の子会社を発表——250億ドルのコミットメント

Microsoftは、AIモデルの展開・導入特化の完全子会社「Microsoft AI Deployment」を設立を発表。250億ドルの初期コミットメントを表明した。

**主要内容:**
- 企業向けのAI導入支援サービス
- 既存のMicrosoft Azureインフラと緊密に統合
- **Copilot**シリーズの展開加速が主な目的の一つ

この動きはMicrosoftが「AI開発のベンダー」から「AI展開のベンダー」への転換を図る戦略と解釈できる。Azure上で動作する様々なAIモデルの最適化、デプロイメント、監視を一貫して提供するプラットフォームとなる見込み。

---

## Mark Zuckerberg氏、AIエージェントの進捗は期待通りではないと認める

MetaのCEO Mark Zuckerberg氏は、社内でAIエージェントの開発が予定より遅れていることを認めた。TechCrunchの報道によれば、社内ミーティングで「AIエージェントは我々が期待したほど迅速に進歩していない」と語ったという。

**背景:**
- MetaはAIエージェントをInstagramやFacebookに統合する計画を持っていた
- 現在のLLMは複雑な自律タスクにおいてまだ信頼性に問題がある
- 特に**長く複雑なタスクの自律実行**と**外部システムとの連携**が課題

これは業界全体にとっての教訓でもある。AIエージェントは概念実証から実際のビジネスプロセスへの統合において、予想以上の壁にぶつかるケースが増えている。

---

## Anthropic、Samsungとのカスタムチップ開発を協議中

AnthropicがSamsung ElectronicsとAIチップ開発で協議していることが分かった。AnthropicはNVIDIA GPUに大きく依存しているが、Claudeシリーズ専用に最適化されたチップを求める声が高まっているとされる。

**期待される効果:**
- **推論速度の向上**: Claudeの思考プロセスに最適化された回路設計
- **コスト削減**: 専用チップによる1トークンあたりのコスト削減
- **電力効率**: データセンター運用コストの削減

Anthropicは現在Samsungの3nmプロセスを含む複数の製造プロセスを検討しているようだ。NVIDIA H100/H200シリーズに続く代替インフラとしての可能性に注目。

---

## Dnotitia、KVキャッシュを20倍に圧縮するSTAR-KVを発表——ICML 2026 Spotlight Paperに選出

Dnotitiaの研究チームが、長文脈AIのボトルネックの一つのKVキャッシュの圧縮技術を発表した。STAR-KVはICML 2026のSpotlight Paperに選出され、大きな注目浴びている。

**技術詳細:**
- **Low-rank（低ランク）アプローチ**: KVキャッシュの行列の構造的稀疏性を利用
- **20倍の圧縮率**: KVキャッシュのサイズを最大95%削減
- **6.9倍の注意計算の高速化**: 圧縮後も精度を維持
- **3.1倍の生成スループット向上**: 実運用での効果

**なぜ重要か:** LLMの文脈長を伸ばすと、KVキャッシュのメモリ消費が二乗的に増加する。この問題は「長文脈AIのreality killer」として知られており、STAR-KVはこれを効果的に解決する可能性がある。

---

## 金融業界向けAIエージェンティック規制——Bank of Englandが検討開始

Bank of England（英国中央銀行）は、金融業界におけるAIエージェント（エージェンティックAI）の規制枠組みのレビューを開始すると発表。EUのAI Actを踏まえつつ、英国内事情に即した規制整備を進める。

**検討課題:**
- **自律的意思決定の責任所在**: AIエージェントが決済や取引を実行する際の法的責任
- **説明可能性**: 金融取引においてAIの判断を説明できる必要性
- **リスク管理**: AIエージェントのエラーが金融システム全体に与える影響

この動きは金融服务提供者にとって重要なトピック。AIエージェントが実際の金融業務に導入されるに伴い、新たなコンプライアンス要件が発生する可能性が高い。

---

## 参考リンク

- [OpenAI, Broadcom unveil first custom AI inference chip](https://www.fortuneindia.com/technology/openai-broadcom-unveil-first-custom-ai-inference-chip-target-deployment-by-end-2026-after-nine-month-development-cycle/144876)
- [Microsoft launches its own AI deployment company with $2.5 billion commitment](https://techcrunch.com/2026/07/02/microsoft-launches-its-own-ai-deployment-company-with-2-5-billion-commitment/)
- [Mark Zuckerberg tells staff that AI agents haven't progressed as quickly as he'd hoped](https://techcrunch.com/2026/07/02/mark-zuckerberg-tells-staff-that-ai-agents-havent-progressed-as-quickly-as-hed-hoped/)
- [Anthropic is discussing a new custom chip with Samsung](https://techcrunch.com/2026/07/02/anthropic-is-discussing-a-new-custom-chip-with-samsung/)
- [Dnotitia's STAR-KV cuts KV cache by up to 20x](https://vir.com.vn/dnotitias-star-kv-cuts-kv-cache-by-up-to-20x-earns-icml-2026-spotlight-selection-155946.html)
- [Bank of England reviews AI rules for agentic AI in finance](https://www.artificialintelligence-news.com/news/bank-of-england-agentic-ai-finance-rules/)

---

*（本文の情報は2026年7月4日時点のものです）*
