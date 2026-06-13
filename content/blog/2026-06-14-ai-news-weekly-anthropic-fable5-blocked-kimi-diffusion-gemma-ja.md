# AI開発ニュース・週次まとめ（2026年6月14日）

2026年6月第2週後半のAI開発ニュースをまとめる。Anthropicの政府指示によるClaude Fable/Mythos 5へのアクセス停止、Googleの新しい不確実性アプローチ、拡散モデルベースのLLMなど、複数の重要な進展があった。

---

## Anthropic、政府指示後にClaude Fable 5・Mythos 5へのアクセスを全面停止

**Anthropic**は米国政府からの指示を受け、**Claude Fable 5**および**Claude Mythos 5**への全アクセスの公開を停止した。VentureBeatが6月13日に伝えた。

米国政府は6月12日夜、未指定の国家安全保障権限を引用して、外国籍ユーザーへのトップティアモデルへのアクセス停止を命じた。Anthropicは対応として、両モデルへのすべての公開アクセスをグローバルに遮断。即座に既存のセッションはエラーとなり、新しいクエリは自動的にOpus 4.8などの旧モデルにルーティングされる。

Anthropicは公式ブログ投稿の中で「これは誤解と考えています。私たちは可能な限り早期にアクセスを回復するために活動しています」と述べる一方、政府から受け取った情報は「poorly documented（不十分な文書化）」であり、政府が主張するジェイルブレイクは「essentially asking the model to read a specific codebase and fix any software flaws（本质上、モデルに特定のコードベースを読み込ませてソフトウェアの欠陥を修正させる）」という範囲のものだと反論した。

### 技術的ポイント

- **出力制御令（EAR）**: 米国商務省産業安全保障局（BIS）が管轄する輸出規制フレームワーク
- **Pliny the Liberator**: Fable 5のジェイルブレイクを公開した有名ジェイルブレイカー。安全陶冶をバイパスして有害な情報を抽出たと主張
- **企業への警告**: 単一のプロバイダへの依存が規制リスクであることを再認識させた事例

---

## Google、研究者が「faithful uncertainty」と呼ぶハルシネーションへの新アプローチを発表

Googleの研究者は6月12日、**「faithful uncertainty（忠実な不確実性）」**と呼ぶ新しい手法をVentureBeatに披露した。これはLLMが「ゼロハルシネーション」を追求するのではなく、不確実性を正確に表現することを許容するというもの。

従来のAI安全性アプローチでは、ハルシネーション（幻觉）を完全に排除することが目標とされてきた。しかしGoogleの研究者たちは、正しい答えを「知らない」ことを正確に表現する方が、誤った確信犯的発言より實際的でありenterprise AIにとってより有用だと主張する。

この「メタ認知」アプローチにより、LLMは確信度に応じて応答にフラグを付けることができ、エンドユーザーはその信頼性を評価できるようになる。

### 技術的ポイント

- **faithful uncertainty**: モデルの不確実性を正確に表現し、誤った確信を防ぐ
- **メタ認知（metacognition）**: LLMが自身の知識の境界を認識・表現する能力
- **企業AIへの影響**: ハルシネーション除去にリソースを投入する代わりに、不確実性の適切な表現に注力

---

## GoogleのDiffusionGemma、256トークンを並列生成して自己纠錯

Googleは6月11日、**DiffusionGemma**と呼ばれる新しい拡散ベース（diffusion-based）のLLM研究成果発表した。VentureBeatが伝えた。

このモデルは従来の自己回帰モデルとは大きく異なり、**256トークンを並列で生成**し、生成中に自行のエラーを修正できる。トークンを1つずつ生成する従来の逐次生成とは異なり、一度に大きなブロックを生成するため、consumer GPUでも高速に動作する。

一方、オープン-endedタスク（開かれた質問への回答）では従来のTransformerベースのモデルに及ばない場合があることが示唆されている。

### 技術的ポイント

- **拡散モデルベースのLLM**: 画像生成で成功した拡散アプローチをテキスト生成に適用
- **並列生成**: 256トークンを同時に生成し、自己纠錯機能を搭載
- **コンシューマーGPU対応**: 計算効率の向上でローカル実行が可能に

---

## Microsoft、モデル重みを変更せずにAIエージェントスキルを自動アップグレードするSkillOptをオープンソース公開

Microsoftは6月11日、**SkillOpt**と呼ばれる新しいツールをオープンソースとして公開した。VentureBeatが伝えた。

SkillOptは、AIエージェントの「スキル」（プロンプトや動作定義）を数学的に検証されたテキスト最適化により自動アップグレードするツール。従来の方法では、開発者が手動でプロンプトを繰り返し調整していたものを、深い学習の原則应用到することで、より体系的にスキルを改良できる。

### 技術的ポイント

- **スキルの自動アップグレード**: モデルweightsを変更せずにエージェントの能力を改善
- **数学的検証**: プロンプト最適化を理論的に裏付けされた方法で行う
- **プロンプトエンジニアリングの自動化**: 手動的反復を改善する体系的なアプローチ

---

## Xiaomi、MiMo Codeをオープンソース化——200ステップ以上の超長タスクでClaude Codeを人中

Xiaomiは6月11日、エージェント型AIコーディングハーネス**MiMo Code**をオープンソースとして公開した。VentureBeatが伝えた。

MiMo Codeは、超長的な200ステップ以上のタスクで**Claude Codeを人中**することを特徴とする。永続メモリシステムにより、エージェント開発ワークフローにおける广泛な課題であった「長時間タスクにおける文脈維持の問題」を解決している。

### 技術的ポイント

- **永続メモリシステム**: エージェントが長時間タスク間で状態を維持
- **超長タスク対応**: 200+ステップの複雑なコーディングタスクを実行可能
- **Claude Code人中**: 既存のプロキシ型コーディングエージェントとの比較で優越性

---

## GPT-5.5、残忍な新しい「Agents' Last Exam」ベンチマークでClaude Fable 5を人中

新たなベンチマーク「**Agents' Last Exam**」で、**GPT-5.5がClaude Fable 5を人中**したことが6月10日に明らかになった。VentureBeatが伝えた。

このベンチマークは、エージェントが复杂な指示に严格に準拠する能力を测试する設計。GPT-5.5の勝利は、OpenAIのモデルが現在、复杂なプロンプトに严格に準拠する能力において優れていることを示唆する第三方分析と一致する。

### 技術的ポイント

- **Agents' Last Exam**: エージェントの指示遵守能力を测试する新しいベンチマーク
- **GPT-5.5の優越性**: 复杂なプロンプトへの準拠においてClaude Fable 5を上回る
- **プロンプト遵守能力**: 実際の应用において重要な指標

---

## 研究者たちが約1,500ドルで基盤モデルをゼロから訓練できたと主張

研究者は6月10日、**1Bのレゾニングモデルが約1,500ドル**で訓練できたと主張した。VentureBeatが伝えた。

この1Bパラメータのレゾニングモデルは、より大型のLLMと主要ベンチマークで競合できることが示された。インターネットスケールのデータが不要である点が注目に値する。

### 技術的ポイント

- **低コスト訓練**: 1,500ドルという低コストで基盤モデルを構築
- **1Bパラメータ**: 小規模だが强力なレゾニング能力
- **インターネットスケールのデータ不要**: 特定のドメイン特化型訓練の可能性

---

## Kimi K2.7-Code、思考トークンを30%削減——だがベンチマークへの疑念も

中国のAI企業Kimiが、**K2.7-Code**を6月12日に発表した。VentureBeatが伝えた。

K2.7-Codeは、思考トークン（思考の過程を示す中間結果）を**30%削減**することを特徴とする。ライブラリをラップするのではなく直接コードを作成するため、より正直だが、2つのカーネルが失敗し、MoE結果がK2.6から回帰した。

从业者たちは、ベンチマークが「チェックアウトしない」と述べており、公式のベンチマーク结果に疑念が呈されている。

### 技術的ポイント

- **思考トークン30%削減**: 推論過程の効率化
- **直接コーディング**: ライブラリラップではなく直接コード生成
- **ベンチマークの信頼性**: 公式结果に対する从业者からの疑念

---

## 参考リンク

- [Anthropic blocks all public access to Claude Fable 5, Mythos 5 following US government order](https://venturebeat.com/ai/anthropic-blocks-all-public-access-to-claude-fable-5-mythos-5-following-us-government-order-what-enterprises-should-do)
- [Google researchers introduce 'faithful uncertainty,' allowing LLMs to offer best guesses instead of hallucinations](https://venturebeat.com/ai/google-researchers-introduce-faithful-uncertainty-allowing-llms-to-offer-best-guesses-instead-of-hallucinations)
- [Google's DiffusionGemma generates 256 tokens in parallel and self-corrects as it goes](https://venturebeat.com/ai/googles-diffusiongemma-generates-256-tokens-in-parallel-and-self-corrects-as-it-goes)
- [Microsoft's open-source SkillOpt automatically upgrades AI agent skills without touching model weights](https://venturebeat.com/ai/microsofts-open-source-skillopt-automatically-upgrades-ai-agent-skills-without-touching-model-weights)
- [Xiaomi's new open source, agentic AI coding harness MiMo Code beats Claude Code at ultra-long, 200+ step tasks](https://venturebeat.com/ai/xiaomis-new-open-source-agentic-ai-coding-harness-mimo-code-beats-claude-code-at-ultra-long-200-step-tasks)
- [Surprise upset: GPT-5.5 beats Claude Fable 5 on brutal new Agents' Last Exam benchmark](https://venturebeat.com/ai/surprise-upset-gpt-5-5-beats-claude-fable-5-on-brutal-new-agents-last-exam-benchmark)
- [Researchers say they trained a foundation model from scratch for about $1,500](https://venturebeat.com/ai/researchers-say-they-trained-a-foundation-model-from-scratch-for-about-1500)
- [Kimi K2.7-Code cuts thinking tokens 30% — but practitioners say the benchmarks don't check out](https://venturebeat.com/ai/kimi-k2-7-code-cuts-thinking-tokens-30-but-practitioners-say-the-benchmarks-dont-check-out)

---

*（本文の情報は2026年6月14日時点のものです...）*
