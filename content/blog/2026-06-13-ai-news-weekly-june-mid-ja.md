# AI開発ニュースまとめ（2026年6月13日）

AI業界は今週、**XiaomiのオープンソースコーディングエージェントMiMo Code**がClaude Code超えを宣言するかたわら、**Googleのハルシネーション対策研究**や**MicrosoftのSkillOpt**など、開発者が即座に試せるツールが複数登場。千元以下で基盤モデルを学習した研究や、Googleの検索UI刷新も話題に。6月第2週の注目ニュースをまとめる。

---

## Xiaomi MiMo Code登場 —— 200ステップ超えの長時間タスクでClaude Codeを凌駕

6月12日（米国時間）、**Xiaomi**がオープンソースの自律型AIコーディングフレームワーク**MiMo Code**をリリースし、VentureBeat等多个媒体から注目浴びている。

**核心的な性能:**
- **200ステップ以上の長時間タスク**でClaude Code比自己得分更高
- 永続メモリシステムを搭載し、エージェント開発において広く求められていたpain pointに対応
- 競合各社が similares な機能を開発中で、パーシステントメモリの競争が加速

**アーキテクチャの注目点:**
- 複雑なコードベース全体を通じた文脈保持に強み
- エージェントワークフローでの長大タスク遂行特化
- オープンソースとして企業で免费下载・カスタマイズ可能

**開発者にとっての意味:** 長時間タスクでの性能向北は、プロダクション環境でのAIエージェントの実用性を大きく左右する。MiMo Codeの永続メモリ方式是、この領域における新しいベンチマークになる可能性を秘めている。

---

## Microsoft SkillOpt —— モデル重みを変更せずにAIエージェントのスキルを自動アップグレード

Microsoftは6月11日、**SkillOpt**をオープンソースとして公开发表した。AIエージェントのスキル（プロンプト・動作パターン）を、モデル本身の重みを触れずに自動最適化するツールだ。

**核心的な特徴:**
- 手動のプロンプト调整为数学的に検証されたテキスト最適化に置き換える
- 深層学習の disciplin をエージェントスキルに適用
- モデル重力を変更しないため、再トレーニング不要で安全に家をけない

**なぜ重要か:** エージェントのスキル向上は従来、プロンプトの手動調整に大きく依存していた。SkillOptはこのプロセスを体系化し、再現可能な最適化を実現。Enterpriseで数百体のエージェントを運用する場合に特に有効。

---

## Google、「Faithful Uncertainty」でハルシネーション対策のパラダイムシフト

Google研究チームは6月12日、**「Faithful Uncertainty（忠実な不確実性）」**と呼ぶ新しいアプローチを公开发表した。LLMに「不确定なことを曖昧にせず、最善の推定を提供する」機能を実装する。

**従来の課題:**
- ハルシネーションゼロを目標にすると、有効な回答まで失われる
- エンタープライズAIにおいて、過剰な慎重さが実用性を損なう

**Faithful Uncertaintyのアプローチ:**
- LLMにメタ認知機能を付与し、不確実性を適切に表現
- 確信度に応じた「最善の推定」と「不定表示」の切り替えを実現
- ハルシネーションを完全に消除する代わりに、回答の信頼性を透明かに表示

**開発者への示唆:** エンタープライズAIで「正直な不確実性」を表示する機能は、コンプライアンスや監査要件が厳しい分野で特に重要。Googleのリサーチが実用化されれば、LLM応用の設計思想そのものに影響を与える可能性がある。

---

## Google DiffusionGemma —— 256トークンを並列生成し的自己纠错

同日、Googleは**DiffusionGemma**を公开发表。従来の自己回帰モデルとは根本的に異なる生成方式を採用している。

**技術的特徴:**
- **256トークンを並列生成**——1トークンずつ生成する従来方式より大幅に高速
- 生成途中に自己纠错を実行し、エラー発生時に即座に修正
- コンシューマーGPU上での高速動作に特化

**制約:**
- オープンエンディングなタスクでは性能が弱い
- 構造化された出力が求められる場面で特に有効

**ベンチマーク結果:** 一部タスクでは従来の自己回帰モデルを超える生成速度を達成。ただし全能ではなく、タスクの性質による使い分けが重要になる。

---

## Kimi K2.7-Code —— 思考トークンを30%削減も、ベンチマークへの信頼性问题

中国のAIスタートアップ**Moonshot AI**旗下的**Kimi**が6月13日、**K2.7-Code**をリリース。思考トークンを30%削減特点として売っているが、現場レベルではベンチマークの信憑性に対する疑問が呈されている。

**報告されている特徴:**
- 思考トークン30%削減により、推論コストを大幅に縮減
- ライブラリをwrapする代わりに直接コード生成する「正直な」アプローチ
- しかし2つのカーネルで失敗、MoE結果がK2.6からリグレッション

**从业者の反応:** 「ベンチマークの数字と実陖性能に差がある」との声较多。K2.7が公式ベンチマークで良い成績を残す一方、現場での複雑なコード生成では課題が残る可能性が高い。

---

## $1,500で基盤モデルを訓練 —— 研究者が示す低コストAI民主化の另一面

6月10日、研究者チームが**約1,500ドル（约22万円）**で基盤モデルを从头训练できたことを報告。この1B reasoningモデルが、遙かに大規模なLLMと主要なベンチマークで互角の性能を示したという。

**注目ポイント:**
- インターネットスケールのデータが不要
- 特定ドメイン特化なら低コストで構築可能
- 計算資源の民主化を示す事例

**注意すべき点:** この成果がすべてのシナリオに適用できるわけではないが、LLM開発の敷居が急速に低下していることは確か。特定用途であれば小企业や研究機関でも独自モデルの構築が可能になりつつある。

---

## Anthropic CEO、Dario AmodeiがFAAスタイルのAI規制を呼吁

AnthropicのCEO**Dario Amodei**は6月10日、強力なAIモデルに対して**FAA（米国連邦航空局）スタイルの規制**を求めると述べた。

**提案の内容:**
- 航空安全のように、AIモデルの認証・審査プロセスを法定化
- ハイパーリسكAIに対する国際的な安全管理枠組みの創設
- Enterpriseには单一ベンダーロックインの回避が緊急課題として浮上

**Enterpriseへの警示:** 規制強化が現実になれば、主要AIモデルの突然の利用不可リスクに対応するために、マルチベンダー戦略への移行が迫切化する。

---

## 参考リンク

- [Xiaomi MiMo Code - VentureBeat](https://venturebeat.com/technology/xiaomi-mimo-code-beats-claude-code-at-ultra-long-200-step-tasks)
- [Microsoft SkillOpt - VentureBeat](https://venturebeat.com/technology/microsoft-skillopt-automatically-upgrades-ai-agent-skills-without-touching-model-weights)
- [Google Faithful Uncertainty - VentureBeat](https://venturebeat.com/research/google-researchers-introduce-faithful-uncertainty-allowing-llms-to-offer-best-guesses-instead-of-hallucinations)
- [Google DiffusionGemma - VentureBeat](https://venturebeat.com/technology/googles-diffusiongemma-generates-256-tokens-in-parallel-and-self-corrects-as-it-goes)
- [Kimi K2.7-Code - VentureBeat](https://venturebeat.com/technology/kimi-k2-7-code-cuts-thinking-tokens-30-but-practitioners-say-the-benchmarks-dont-check-out)
- [Foundation Model $1,500 Training - VentureBeat](https://venturebeat.com/research/researchers-say-they-trained-a-foundation-model-from-scratch-for-about-1500)
- [Anthropic FAA-style Regulation - VentureBeat](https://venturebeat.com/technology/anthropic-ceo-calls-for-faa-style-regulation-of-powerful-ai-models)

---

*（本文の情報は2026年6月13日時点のものです）*