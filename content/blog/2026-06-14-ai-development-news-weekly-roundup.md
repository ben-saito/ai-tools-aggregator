# AI開発ニュース・週次まとめ（2026年6月第2週）

2026年6月第2週は、米政府令によるClaudeモデルへのアクセス制限、GPT-5.5の躍進、安価な基盤モデル訓練の実現など、AI業界にとって大きな動きがあった週となった。本稿では开发者視点観点から、主要なニュースを解説する。

---

## Anthropic、政府令によりClaude Fable 5・Mythos 5の公開アクセスを全面遮断

Anthropicは米国政府令に基づき、**Claude Fable 5**および**Mythos 5**の全公開アクセスを遮断した。この措置は、エンタープライズにとって単一AIモデルへの依存リスクを再認識させるものとなっている。

### 企業戦略への影響

- 单一モデルへの依存が事業継続リスクであることを認識する企业在増加
- マルチモデル・アーキテクチャへの移行が急務に
-  критичнихワークフローにおける冗長性の確保が標準的に

 enterprises can no longer run critical workflows on any single AI model or providerという現実が浮き彫りになった。

**参考**: [VentureBeat - Anthropic blocks public access to Claude Fable 5 and Mythos 5](https://venturebeat.com/ai/anthropic-blocks-all-public-access-to-claude-fable-5-mythos-5-following-us-government-order/)

---

## GPT-5.5がClaude Fable 5を下回る — 「Agents' Last Exam」ベンチマークでOpenAIが優位

OpenAIの**GPT-5.5**が、复杂なマルチパートプロンプトで構成された新ベンチマーク「**Agents' Last Exam**」でClaude Fable 5を抑え首位に立った。第三者分析でも、OpenAIモデルが複雑な指示への適合において優れることが示されている。

### ベンチマークの詳細

- 200+ステップの長いタスクでClaude Codeを上回る成績
- エージェント能力特化の問題設計
- 実際のユースケースに近い評価指標

これはAIエージェント開発者にとって、モデル選定の基準が大きく変わりうる重要なトピックだ。

**参考**: [VentureBeat - GPT-5.5 beats Claude Fable 5 on Agents' Last Exam](https://venturebeat.com/ai/surprise-upset-gpt-5-5-beats-claude-fable-5-on-brutal-new-agents-last-exam-benchmark/)

---

## Microsoft、モデル重みを変更せずにAIエージェントスキルを自動強化する「SkillOpt」をオープンソース公開

Microsoftは、**SkillOpt**をオープンソースとして公開した。深層学習の規律をAIエージェントスキルに適用し、手動のプロンプト調整を数学的に検証されたテキスト最適化に置き換えるものだ。

### 技術的特徴

- プロンプトエンジニアリングの自動化
- 数学的検証による品質保証
- モデル重みに触れずにスキル強化が可能
- エージェントの動作を効率的に反復改善

開発者にとって、プロンプト最適化プロセスの大幅な効率化が期待できる。

**参考**: [VentureBeat - Microsoft's SkillOpt upgrades AI agent skills](https://venturebeat.com/ai/microsofts-open-source-skillopt-automatically-upgrades-ai-agent-skills-without-touching-model-weights/)

---

## Xiaomi、200+ステップの長タスクでClaude Codeを上回る「MiMo Code」をオープンソース公開

Xiaomiは、**MiMo Code**という新しいオープンソースのエージェント型AIコーディングハーネスを公開した。特点是、超長タスク（200+ステップ）で**Claude Code beats**を達成したことだ。

### 主な機能

- **永続メモリシステム**: エージェント型ワークフローでの実際の課題を解決
- コンтекスト保持能力强
- 长時間タスクにおける性能向上
- オープンソースで開発者利用可能

AIコーディング助手の性能竞争中、メモリシステムの重要性が改めて示された。

**参考**: [VentureBeat - Xiaomi's MiMo Code](https://venturebeat.com/ai/xiaomis-new-open-source-agentic-ai-coding-harness-mimo-code-beats-claude-code-at-ultra-long-200-step-tasks/)

---

## Google、研究者が「Faithful Uncertainty」を導入 — LLMの幻觉を解決する新手法

Googleの研究者は、LLMが幻觉を起こす代わりに「最も確かな推测」を提示できる新しい**メタ認知アプローチ**「**Faithful Uncertainty**」を導入した。

### 技術的背景

- 零幻觉追求が有効な回答を牺牲にしている可能性
- 不確実性の定量化を向上
- エンタープライズAIの信頼性向上に貢献
- 「ハルシネーション」ではなく「不確実性」として.handle

開発者にとって、実用的なシステムでの不確実性处理の新しいアプローチとして注目に値する。

**参考**: [VentureBeat - Google Faithful Uncertainty](https://venturebeat.com/ai/google-researchers-introduce-faithful-uncertainty-allowing-llms-to-offer-best-guesses-instead-of-hallucinations/)

---

## Google、並列トークン生成と自己纠錯可能な「DiffusionGemma」を発表

Googleは、新しい拡散ベースの言語モデル**DiffusionGemma**を発表した。256トークンを並行生成し、生成中に自己纠錯を行う能力を持つ。

### 技術的特徴

- 逐次生成ではなくブロック単位での並列生成
- 生成中の自己纠錯機能
- コンシュマーGPUでも高速動作
- ただしオープンエンドタスクでは性能がやや低め

推論速度の向上が期待される一方、タスクの種類による性能差に注意が必要だ。

**参考**: [VentureBeat - Google's DiffusionGemma](https://venturebeat.com/ai/googles-diffusiongemma-generates-256-tokens-in-parallel-and-self-corrects-as-it-goes/)

---

## 研究者たちが約1,500ドルで基盤モデルを訓練 — 民主化の可能性

研究チームは約**1,500ドル**という低コストで1Bサイズのリasoningモデルを一から訓練し、より大規模なLLMに匹敵するベンチマーク結果を達成した。

### 重要なポイント

- インターネットスケールのデータが不要
- 基盤モデル訓練の敷居が大幅に低下
- 民主的なAI開発の可能性
- ベンチマークでは大きなモデルに匹敵する成績

リソースが限られたチームでも基盤モデルの開発が可能になる的可能性を示しており、AI業界にとって構造的な変化の予兆となる。

**参考**: [VentureBeat - Researchers train foundation model for ~$1,500](https://venturebeat.com/ai/researchers-say-they-trained-a-foundation-model-from-scratch-for-about-1500/)

---

## Kimi K2.7-Code、思考トークンを30%削減するもベンチマーク疑問符

Kimiの新しい**K2.7-Code**モデルは、思考トークンを30%削減声称だが、実践者からは「ベンチマークが実際の性能を反映していない」という声上がっている。

### 技術的詳細

- 直接ライブラリをwrapせずにコードを記述
- より誠実な実行を目指した設計
- MoE結果がK2.6からリグレッション
- ベンチマークと実際の性能に乖離

ベンチマーク、信じるか疑うか——実用での検証が不可欠だ。

**参考**: [VentureBeat - Kimi K2.7-Code](https://venturebeat.com/ai/kimi-k2-7-code-cuts-thinking-tokens-30-but-practitioners-say-the-benchmarks-dont-check-out/)

---

## NVIDIA、Physical AI向けオープンソースエージェントツール・スキルの大規模コレクションをリリース

NVIDIAは、 roboticsおよび身体性を伴うAI開発向けの主要オープンソースエージェントツール・スキルコレクションをリリースした。

### 主な内容

- robotics向けエージェントツール
- 身体性AI（Physical AI）開発キット
- オープンソース化されたツール群
- AIエコシステムの大幅拡張

ロボティクス開発者にとって重要なリソースとなる。

**参考**: [NVIDIA Newsroom](https://nvidia.com/news)

---

## Anthropic、65Bドルを調達し965Bドルの評価額に

AnthropicはシリーズHで**650億 ドル**を調達し、**9,650億 ドル**の企業価値に達した。これはOpenAIを超え、世界最大のAIスタートアップとしての地位を确立了。

### 業界への影響

- エンタープライズAIへの継続的な投資家の信頼
- 競争激烈的AI業界でのAnthroposition
- 今後の事業展开への期待

**参考**: Anthropic / NY Times (2026年5月28日)

---

## 参考リンク

- [VentureBeat AI](https://venturebeat.com/ai/)
- [TechCrunch AI](https://techcrunch.com/category/artificial-intelligence/)
- [The Verge AI](https://www.theverge.com/ai-artificial-intelligence)
- [AI News](https://www.artificialintelligence-news.com/)
- [The Gradient](https://thegradient.pub/)
- [Import AI Newsletter](https://importai.substack.com/)
- [DeepMind Blog](https://deepmind.com/blog)
- [OpenAI Blog](https://openai.com/blog)

---

*本文の情報は2026年6月14日時点のものです。*