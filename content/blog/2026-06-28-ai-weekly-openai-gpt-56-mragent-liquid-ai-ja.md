# AI開発ニュース週間レポート：OpenAI GPT-5.6炸裂、MRAgentのメモリ最適化、Liquid AIの小型モデル

OpenAIがGPT-5.6ファミリ─を発表する一方、エージェントのメモリ効率を劇的に改善するMRAgentや、2.3億パラメータで4倍サイズのモデルを超えるLiquid AIなど、LLM開発現場を揺るがすニュースが立て続けに届いた。2026年6月最終週のAI開発ニュースをまとめる。

---

## OpenAI、GPT-5.6 Sol・Terra・Lunaを発表 — 先行テストは政府機関のみ

6月26日、OpenAIは新たなGPT-5.6ファミリーの3モデル — **GPT-5.6 Sol**、**GPT-5.6 Terra**、**GPT-5.6 Luna** — を発表した。現時点でアクセス可能なのは米国政府の限定的なプレビューパートナーのみという異例の展開。

**Sol**と**Terra**は複数のベンチマークで過去最高スコアを記録。**Luna**は「最速・最安」と的位置づけられながら、いくつかのテストでGPT-5.5に匹敵する性能を示しているという。GPT-5.6 Solは推論能力、Lunaはコスト効率にそれぞれ強みを持つと見られる。

注目すべきは、OpenAIがモデル公開の段階で政府機関を優先させる新たな戦略を取っている点。安全基準への適合を先行確認してから一般展開するという流れは、GPT-5世代以降の展開戦略の重大转变として業界で議論されている。

同時期にOpenAIは **GPT-5.5 Instant** のアップデート版もAPI経由で公開した。ショッピング支援、复杂な制約条件の处理、用户意图の推定能力が向上しており、LLMが「ユーザーの目標を推测し、制約条件を維持しながら複数ターンで適応する」方向へ進化していることが示唆される。

---

## MRAgent：エージェントのメモリトークン使用量を最大27分の1に削減

6月26日、エージェント型AIのメモリ効率をめぐる大きなブレイクスルーが報告された。**MRAgent**と名付けられた新しいエージェントメモリフレームワークは、クエリあたり **118Kトークン** で動作し、従来の **LangMem（3.26Mトークン）** と比較してトークン使用量を最大 **27分の1** に削減する。

さらにランタイムも半分近くに短縮されたという。MRAgentの中核技術は「能動的推論を通じたメモリ再構成」にある。エージェントが必要に応じてメモリ内容を動的に再構成することで、無駄なコンテキスト注入を防ぎながら、性能を維持する。

この成果は、エージェントアーキテクチャにおける「コンテキストウィンドウ大小之争」が新しい段階に入ったことを示す。トークン効率の改善は、エージェントの実应用におけるコストと速度の両面で关键的だ。

---

## Liquid AI、LFM2.5-230Mを発表 — 2.3億パラメータで4倍サイズ超えを圧倒

6月25日、Liquid AIが同社が開発した最小モデル **LFM2.5-230M** を公開した。2.3億パラメータという比較的小規模なモデルでありながら、データ抽出タスクで自身の上位モデルを含む「4倍以上のサイズを持つモデル」を上回る性能を記録したという。

Liquid AIの主張によると、3Bパラメータクラスのモデル（例：VibeThinker）が高等な微積分を解ける一方で、**構造化されたツール呼び出しの执行とエージェントパイプラインの維持**には230Mパラメータモデルが優れるるという。

これは「大きいほどいい」というLLMのスカラリング論争に警鐘を鳴らすもの。用途に応じたモデル選定の重要性が改めて認識されている。

---

## Mistral、OCR 4を発表 — 170言語対応のエンタープライズ文書処理

6月24日、Mistralが **Mistral OCR 4** をリリースし、文書抽出からエンタープライズAI活用への本格的な進出を表明した。

- **170言語**、10の言語グループをサポート
- PDF、DOC、PPT、OpenDocument形式に対応
- 単一コンテナでのオンプレミス展開が可能

Mistralは米国JurisdictionのクラウドAPIにデータを渡せない規制業界の企業を狙い撃ちしており、コンプライアンス要件を満たすローカルデプロイメントを可能にする。エンタープライズ市場におけるOCR/文書処理AIの竞争激化が予想される。

---

## Google、25年ぶりに検索ボックスを刷新へ

5月19日、Googleが25年ぶりとなる検索ボックスの大规模なリデザインを正式に発表し、6月に展開が始まった。 quarter centuryにわたって「薄い白い四角、点滅するカーソル、青いリンクのリスト」という不变的だったUIパラダイムが、AI会話型検索へと移行する。

これはGoogleがAIを検索体験の中心に座らせる戦略的转变を示しており、Web検索とLLMの融合が加速していることを示唆する。

---

## 参考リンク

- [OpenAI unveils GPT-5.6 Sol, Terra and Luna models — VentureBeat](https://venturebeat.com/category/ai/)
- [New agentic memory framework uses 118K tokens per query — VentureBeat](https://venturebeat.com/category/ai/)
- [Liquid AI's smallest model yet LFM2.5-230M — VentureBeat](https://venturebeat.com/category/ai/)
- [Mistral launches OCR 4 — VentureBeat](https://venturebeat.com/category/ai/)
- [Claude Code turned every engineer into three — VentureBeat](https://venturebeat.com/category/ai/)
- [Google just redesigned the search box — VentureBeat](https://venturebeat.com/category/ai/)

---

*本文の情報は2026年6月28日時点のものです。*