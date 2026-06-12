# AI開発ニュースまとめ（2026年6月第2週）

2026年6月第2週は、**AIエージェントのスキル最適化**から**超低成本トレーニング**まで、多様な分野突破が報告された週となった。Microsoftのオープンソースフレームワークがモデル重みを変更せずエージェントスキルを自動アップグレード可能に、XiaomiのリポジラルAIコーディングハーネスが長大タスクでClaude Codeを圧倒、GoogleのDiffusionGemmaがトークンを並列生成して自己修正する新アーキテクチャを発表など、開発者に直接影響する話題が目白押しだ。

---

## Microsoft、モデル重みなしでAIエージェントスキルを自動アップグレードする「SkillOpt」をOSS公開

**Microsoft Research**が、オープンソース（MITライセンス）の新フレームワーク「**SkillOpt**」を発表した。SkillOptは、AIエージェントのスキル（.mdファイルとして保存されるプロンプト・ツール利用ポリシー・出力制約など）を、基盤モデルの重みを変更せずに自動最適化する。

従来、エージェントスキルの最適化は手作業が主流だった。プロンプトの「推測ゲーム」と呼ばれ、変更が改善をもたらす保証がなかった。Microsoft Research AsiaのYifan Yang氏は「チームに変更能力があっても、変更が改善であることを保証できない」と語る。

SkillOptの革新的な点は、**深層学習的な最適化手法**をテキストアーティファクトに適用した点だ。ステップサイズ制御、検証ゲート、ネガティブメモリという3つの制御機構により、スキルドリフトやデグレを防止する。GPT-5.5でSpreadsheetBenchに適用した場合、無制御な書き直しで41.8から41.1にスコアが低下する一方、SkillOptはこれを改善へと導く。

### 技術的アーキテクチャ

SkillOptは「提案からテスト」の反復ループで動作する:

1. 固定されたターゲットモデルがバッチタスクを実行し、実行軌跡を生成
2. オフラインオプティマイザモデルが成功と失敗を分離し、体系的なエラー原因を特定
3. スキルドキュメントへの追加・削除・置換編集を提案
4. 重複・矛盾をフィルタリングし、期待効用の順にランキング

結果はコンパクトで転送可能なスキルアーティファクトとして出力され、新しいドメインへの適応が容易になる。業界ベンチマークで既存のベースラインを大幅に上回り、GPT-5.5やQwenの精度を显著に向上させた。

---

## Xiaomi、「MiMo Code」をOSS公開——200ステップ超の長大タスクでClaude Codeを圧倒

**Xiaomi**は、エージェント型AIコーディングハーネス「**MiMo Code**」をオープンソースとして公開した。MiMo Codeは、200ステップ以上の超長大タスクにおいて**Claude Codeを上回る性能**を示すと主張する。

最大な課題はエージェント型開発ワークフローにおける**永続メモリの欠如**だった。競合も同課題への解決策を競って開発している。MiMo Codeは、この痛点を解決する永続メモリシステムを特徴とし、長いコードベースの維持や複雑なマルチステップワークフローでのパフォーマンス低下を防ぐ。

Hacker Newsでは524ポイントを獲得し、开发者コミュニティ广泛关注。XiaomiのMiMo Codeリポジトリも公開されており、単個のH100 GPUで動作する推論可能な小型モデルとしての展開も視野に入る。

---

## Google、「DiffusionGemma」を発表——256トークンを並列生成し自己修正

**Google**は、新しい拡散ベースモデル「**DiffusionGemma**」を発表した。従来のLLMがトークンを一つずつ逐次生成するのに対し、DiffusionGemmaは**256トークンを並列に生成**し、生成途中に自己錯誤を修正できる。

このアーキテクチャによりコンシューマーGPU上での高速推論が可能になる。ただし、オープン-endedタスクでは従来の自己回帰モデルには及应用には制約がある。リアルタイム性が求められるアプリケーションや、推論速度が重要なシナリオでの活用が期待される。

---

## GPT-5.5、「Agents' Last Exam」ベンチマークでClaude Fable 5を破る

新しい厳格なベンチマーク「**Agents' Last Exam**」で、**OpenAIのGPT-5.5がAnthropicのClaude Fable 5を破る**るという予想外の結果が報告された。

この結果は、最近の第三方分析とも一致している。OpenAIのモデルは、複稚なマルチパートプロンプトへの厳密な遵守において現在優勢と見られる。ベンチマークの詳細についてはまだ限定的だが、エージェント性能の評価方法そのものが見直されつつある现阶段で注目に値する。

---

## 研究者たち、約1,500ドルで基礎モデルを一からトレーニング

研究者チームは、**1Bパラメータのレゾニングモデル約1,500ドル**で一からトレーニングし、 daleko大きなLLMに匹敵するベンチマーク性能を達成したと報告した。インターネットスケールのデータは不要という。

この成果は、LLMトレーニングのコスト構造に変化をもたらす可能性があり、小規模チームでも高性能モデルの構築が可能になることを示唆している。

---

## Anthropic CEO、FAA方式のAI規制を提唱

**Anthropic CEO**は、強力なAIモデルに対する**FAA（米国連邦航空局）式の規制**を提唱した。規制の焦点は、旗艦モデルの突然のブロックやリコールに備えたマルチベンダ戦略の構築になる。

企業にとっては、AI戦略を单一のベンダーに依存しないアーキテクチャへの移行が急務となる。MassMutualの事例では、12ヶ月契約、マルチモデルスタック、30%の开发者生産性向上が報告されており、ベンダーロックインの回避が実践されている。

---

## Cohere、H100单个で動作するコーディングエージェントをOSS公開

**Cohere**も、单个の**H100 GPU**で動作するコーディングエージェントをオープンソースで公開した。小規模チームでも高性能AIコーディング支援を活用できる環境が整いつつある。

---

## Appleの新Siri AI——企業向けアプリレイヤーに

Appleは、新しい**Siri AI**を企業向けの新たなアプリレイヤとして位置づけた。ビジネスワークフロー全体に跨るAIアシスタントとしての機能が強化され、企業技術リーダにとってApple製デバイスのAI活用戦略を再検討する必要性が生じている。

---

## Anthropic、「目に見えない」Claude Fableガードレールについて謝罪

Anthropicは、Claude Fableの「目に見えない」ガードレールについて謝罪した。この問題は、透明性と信頼性というAIシステムの基本的要件との関連で、开发者コミュニティ广泛关注を受けた。Claude Fableの実際の動作に対して、ユーザーや开发者から懸念が示されていた。

---

## 参考リンク

- [Microsoft's SkillOpt (VentureBeat)](https://venturebeat.com/ai/microsofts-open-source-skillopt-automatically-upgrades-ai-agent-skills-without-touching-model-weights/)
- [Xiaomi MiMo Code (VentureBeat)](https://venturebeat.com/ai/xiaomis-new-open-source-agentic-ai-coding-harness-mimo-code-beats-claude-code-at-ultra-long-200-step-tasks/)
- [Google's DiffusionGemma (VentureBeat)](https://venturebeat.com/ai/googles-diffusiongemma-generates-256-tokens-in-parallel-and-self-corrects-as-it-goes/)
- [GPT-5.5 beats Claude Fable 5 (VentureBeat)](https://venturebeat.com/ai/surprise-upset-gpt-5-5-beats-claude-fable-5-on-brutal-new-agents-last-exam-benchmark/)
- [Researchers trained foundation model for ~$1,500 (VentureBeat)](https://venturebeat.com/ai/researchers-say-they-trained-a-foundation-model-from-scratch-for-about-1-500/)
- [Anthropic CEO calls for FAA-style regulation (VentureBeat)](https://venturebeat.com/ai/anthropic-ceo-calls-for-faa-style-regulation-of-powerful-ai-models-what-enterprises-should-know/)
- [Cohere coding agent on H100 (VentureBeat)](https://venturebeat.com/ai/cohere-open-sources-a-coding-agent-that-runs-on-a-single-h100/)
- [Apple's new Siri AI (VentureBeat)](https://venturebeat.com/ai/apples-new-siri-ai-is-more-than-just-a-smarter-assistant-its-a-new-enterprise-app-layer/)
- [Anthropic apologizes for invisible guardrails (The Verge)](https://www.theverge.com/ai-artificial-intelligence/948280/anthropic-claude-fable-invisible-distillation-guardrail)
- [MiMo Code (Xiaomi)](https://mimo.xiaomi.com/mimocode)
- [Kimi K2.7-Code (HuggingFace)](https://huggingface.co/moonshotai/Kimi-K2.7-Code)

---

*（本文の情報は2026年6月12日時点のものです）*