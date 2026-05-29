# Anthropicが650億ドル調達、Claude Opus 4.8も発表 -- AI業界で何が起きているか

5月末のAI業界は、空前の資金調達と新モデルの嵐で揺れ動いている。Anthropicが650億ドルのシリーズH資金調達を完了し、9650億ドルという過去最高水準の評価額を記録した。同時にClaude Opus 4.8の一般公開も始まり、エージェント型AIの開発者にとって重要な転換点が到来している。

---

## Anthropic、650億ドルのシリーズHで9650億ドル評価額に

Anthropicは5月28日、Altimeter Capital、Dragoneer、Greenoaks、Sequoia Capitalらが主導したシリーズHラウンドで**650億ドル（約9兆7000億円）**を調達したと発表した。企業価値は9650億ドルに達し、スタートアップ史上最快の成長を記録した。

### 主な財務ハイライト

- **Run-rate revenue（月次経常収入）**：470億ドルを突破
- **今回の調達額**：650億ドル（過去のシリーズG比で大幅増）
- **compute capacity**：Amazon、Google・Broadcom、SpaceXとの協議に基づき大幅に拡大

Anthropic CFOのKrishna Rao氏によれば、「Claudeはグローバルエンタープライズのコアオペレーションに採用されており、世界最大手のクラウドプラットフォーム（AWS、Google Cloud、Microsoft Azure）のすべてでClaudeが利用可能になった」という。

### 戦略的パートナー

今回のラウンドにはMicron、Samsung、SK hynixといったメモリ・ストレージ关键技术のパートナーも参加。AI向けcompute需要の急増に対応するための供給網の確保が狙いだ。

---

## Claude Opus 4.8 -- エージェント型タスク対応の改良

同日、Anthropicは**Claude Opus 4.8**の公開を開始した。Opus 4.7からの改良版であり、特に**エージェント型タスク（coding、multi-step reasoning）**での性能向上が注目されている。

### ベンチマーク改善

| タスク | Opus 4.7 | Opus 4.8 |
|--------|----------|----------|
| Coding | ベースライン | 向上 |
| Agentic Skills | ベースライン | 向上 |
| Reasoning | ベースライン | 向上 |
| Practical Knowledge Work | ベースライン | 向上 |

早期テスターの反応として、「より信頼性が高く、判断力が鋭くなった」（Staff EngineerのTom Pritchard評）という声が多い。具体的には**適切な質問を発する、自分のミスをキャッチ、計画がサウンドでない場合に反論する**といった行動が観察されている。

### 新機能

- **Effort Control**：タスクに対するClaudeの投入度をユーザーが制御可能に
- **Dynamic Workflows**：Claude Code向けの大規模問題対応ワークフロー
- **Fast Mode**：2.5倍速動作が、旧モデル比で**3分の1のコスト**で利用可能に

---

## OpenRouterで謎のモデル「Hy3」がランキング1位を奪取

OpenRouterのAI Model Rankingsで**Tencent（騰訊）開発の謎のモデル「Hy3 preview」**がClaudeをtoken使用量で50%以上も上回り、ランキング上位に急上昇しているという異例の記事がMax Woolf氏（BuzzFeed Senior Data Scientist）によって分析された。

### Hy3の不思議な人気

- **HuggingFace**：Tencentの公式リポジトリが存在、ベンチマーク結果は芳しくない
- **Google検索**：ほぼ情報がなく、Hacker Newsの言及は1件のみ
- **OpenRouterでの提供**：SiliconFlow（シンガポール拠点）のみが提供

Woolf氏によれば、「モデル品質は他の中国系开源モデルと同程度で、Claude Opus 4.7やGPT 5.5には遠く及ばない」とされる。それでもHy3は**$0.066/1M tokens**という破格の安さで、提供開始後の有料期間でもユーザーが離れなかった。

### LLM経済学の新潮流

Woolf氏の記事から、AI API economicsの重要な変化が読み取れる：

- **入力token対出力token比率**：LLM API呼び出しの**98%が入力、2%が出力**
- **Prompt Caching**：会話の先前トークンを再利用しコスト削減
  - 典型的なcache read costはinput costの10%だが、DeepSeek V4 Flashは**2%**（KV cacheの革新）
  - DeepSeek Direct利用の場合、有効価格が**$0.018/1M tokens**まで低下

### 実際のところ、DeepSeek V4 Flashが最も安い

Woolf氏によると、OpenRouterデータでは、Hy3看似安い，但实际上**DeepSeek V4 Flash（DeepSeek社提供）**の方が安い場合が多い。ただしDeepSeek是中国企業のため、「データが中国に渡ることへの懸念」が足かせになっている企業もある。

---

## 開発者への影響

### コスト最適化の重要性

AIエージェントの実戦投入において、**input token costの削減**が収益化の关键になってきている。98:2という入出力比は、「エージェントが長い会話ログを処理するたびにコストが増加する」ということを意味する。

### モデル選択の基準

| 基準 | Opus 4.8 | Hy3 | DeepSeek V4 Flash |
|------|----------|-----|-------------------|
| ベンチマーク | 最上位 | 中位 | 中位 |
| コスト | 高め | 低价 | **最安** |
| データ機密性 | 安心感 | 要確認 | 要確認（中国） |
| エージェントタスク | **最适合** | 普通 | 普通 |

---

## まとめ

2026年5月は、AI業界にとって歴史的な転換点となった：

1. **Anthropicの巨額調達**：AI開発への投資が加速
2. **Claude Opus 4.8**：エージェント型タスク対応の改良で開発者体験向上
3. **OpenRouterの変革**：低成本モデルの崛起とLLM経済学の進化

開発者として押さえておくべきは、「**最も高いモデル = 常に最も適切なモデル**」ではなく、タスク性質とコスト構造を理解したモデル選択が重要になっている。今後も料金構造の変動激しいので、定期的なチェックが必要だ。

---

## 参考リンク

- [Anthropic Series H Announcement](https://www.anthropic.com/news/series-h)
- [Anthropic raises 65B in Series H - TechCrunch](https://techcrunch.com/2026/05/28/anthropic-raises-65b-series-h/)
- [Introducing Claude Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8)
- [The mysterious Hy3 LLM topping OpenRouter rankings - Max Woolf](https://minimaxir.com/2026/05/openrouter-hy3/)
- [OpenRouter AI Model Rankings](https://openrouter.ai/rankings)
- [DeepSeek V4 Flash - HuggingFace](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)

---

*本記事の情報は2026年5月29日時点のものです。*