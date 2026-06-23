# AI開発ニュース・Weekly Report：2026年6月24日号

2026年6月第4週、AI業界は**マルチエージェントorchestration**と**AIエージェントの自己改善**に関する発表が続き、技術的な深みが増している一週間だった。Sakana AIは「Fugu」という新しいmulti-model orchestrationシステムを発表し、1つのAPIエンドポイントでfrontierレベルの性能を実現。さらに上海人工知能研究所は、AIエージェントが自らのオペレーティングルールを書き換える「Self-Harness」フレームワークを発表し、最大60%のパフォーマンス向上を達成した。開発者にとって今週は、**AI agentsの自律的な改善機構**と**オーケストレーション戦略**の両面からの技術的理解が求められている。

---

## 1. Sakana AI、FuguでClaude Fable 5に匹敵する性能を発表

**Sakana AI**は6月22日、複数の specialist modelsを動的に連携させる「**Fugu**」（フグ）というmulti-agent orchestrationシステムを公開した。Fuguは、単一のfoundation modelに頼るのではなく、タスク性子modelのpoolにクエリをルーティングすることで、frontierレベルのAI性能を達成する。

### アーキテクチャの詳細

Fuguの中核は「master general contractor」として機能するLLM-based coordinatorにある。複雑なリクエストを受け取ると、Fuguは問題を分解し、specialist foundation modelsにサブタスクを委任then their workを検証して最終出力を統合する。SakanaのCTO David Ha（元Google Brain）は「Fuguは単なるモデル以上のもの。**オーケストレーションモデル**は、より大きなモデルを超えた次のフロンティア我认为」と語っている。

### ベンチマーク結果

Sakanaが共有したベンチマークによると：

- **LiveCodeBench**（coding性能）: Fugu Ultra 93.2、Fugu 92.9、Claude Fable 5 89.8
- **GPQA-D**（graduate-level理系テスト）: Fugu Ultra 95.5、Claude Mythos Preview 94.6

### 価格と提供形態

Fuguは商用proprietary APIとして提供され、2つの階層がある：

- **Fugu**: 動的料金制（ベースになるunderlying modelsに応じて変動）
- **Fugu Ultra**: 固定料金制、**$5/百万入力トークン**、**$30/百万出力トークン**

### 開発者にとって的意义

Fuguの登場は、**single-vendor lock-inリスク**への対策としてのcollective intelligenceアプローチが、商業的に viable であることを证明了。規制によるアクセス制限があっても、orchestration layerで複数のモデルを組み合わせることで、同等の性能を維持できるの実演している。

---

## 2. Self-Harness：AIエージェントが自らのルールを書き換えて60%性能向上

上海人工知能研究所のチームは6月22日、AIエージェントが自らの**harness（制御機構）**を体系的に改善するフレームワーク「**Self-Harness**」を公開した。

### Harness engineeringの課題

LLM-based agentの性能は、base modelだけでなくharness——system prompts、tools、memory、verification rules、orchestration logic、failure-recovery proceduresを含む周囲のシステム——に大きく依存する。しかし現在のharness engineeringは**手動のad hocデバッグ**に依存しており、直感的なアプローチになりがちで、modelのrapid evolutionについていけない。

### 3段階反復ループ

Self-Harnessは以下の3段階で構成される：

1. **Weakness mining**: 初期harnessからタスクを実行し、failed tracesを categorizingしてmodel固有のfailure patternsを検出
2. **Harness proposal**: 「proposer」roleで各failure mechanismに紐づいたminimal harness modificationsを生成
3. **Proposal validation**: regression testsで候補修改を評価。held-out tasksでの退化なしに合格したeditのみをnext versionにmerge

### ベンチマーク結果

研究チームはTerminal-Bench-2.0でSelf-Harnessを評価し、MiniMax M2.5、Qwen3.5-35B-A3B、GLM-5で**最大60%的性能向上**を確認した。

### 開発者にとって的意义

Self-Harnessは、**model-specific harness tuning**の bottlenecksが人才不足ではなくfeedback loopの欠如にあることを示した。経験豊富なエンジニアでも直感に頼らざるを得ない状況を変えることで、AI agentsの継続的な自己改善が実装可能になった。

---

## 3. AlibabaのAI動画モデルが世界第2位に：OpenAI Sora・ByteDance Seedanceが撤退

**Alibaba**のAI動画生成モデルが世界ランキングで第2位に浮上した。OpenAIがSoraの financially unsustainable による提供終了、ByteDanceがHollywood studiosからの著作権侵害懸念によりSeedance 2.0の国際展開をindefinitely shelvedにしたことで、enterprise procurement teamsにとってcompetitive landscapeが急速に変化している。

Alibabaはtimingを熟知しており、低価格でのAPI提供と安定したenterprise support体制で乖離を埋めている。動画生成AI市場は2026年前半の激動を経て、**コスト効率と版权対応**を両立するプレイヤーに絞られつつある。

---

## 4. Adobe、Creative Cloudにagentic AI workflowsを統合

**Adobe**はCreative Cloud全体にagentic AI workflowsを組み込み、media generationからproduction orchestrationへと Suite をshiftしている。Firefly AIの深化により、デザイナーは単純な画像生成ではなく**end-to-end production pipelines**をAIに委任できるようになった。

Adobeのagentic capabilitiesのextensibility（API公開予定不明）は今後の注目点。Enterprise architectsにとっては、native application UIを超えたautomation scope扩展の方向性を見守る必要がある。

---

## 5. Arbor：Claude Code・Codex比2.5倍のcoding agent最適化フレームワーク

新しいAI最適化フレームワーク「**Arbor**」が、Claude CodeおよびCodex比で**同計算予算の2.5倍性能**を達成したと報告されている。従来のcoding agentsが「learningせずにループ」する問題を解決するため、Arborは各experimentのpersistent treeを構築し、failuresをconstraints（無駄なcomputeではなく）として活用する。

このアプローチは、**autonomous coding agentsのlearning architecture**に新たな方向性を示している。

---

## 参考リンク

- [No Claude Fable 5? No problem: Sakana achieves frontier performance with new Fugu multi-model, auto synthesis system](https://venturebeat.com/orchestration/no-claude-fable-5-no-problem-sakana-achieves-frontier-performance-with-new-fugu-multi-model-auto-synthesis-system)
- [Researchers introduce Self-Harness, a framework that lets AI agents rewrite their own rules, boosting performance up to 60%](https://venturebeat.com/ai-research/researchers-introduce-self-harness-a-framework-that-lets-ai-agents-rewrite-their-own-rules-boosting-performance-up-to-60)
- [Alibaba's AI video model rises to No. 2 in global rankings](https://venturebeat.com/orchestration/alibaba-ai-video-model-rises-to-no-2-in-global-rankings-as-openais-sora-and-bytedances-seedance-fall-away)
- [New AI optimization framework beats Claude Code and Codex by 2.5x](https://venturebeat.com/orchestration/new-ai-optimization-framework-beats-claude-code-and-codex-by-2-5x-on-the-same-compute-budget)
- [Adobe embeds agentic AI workflows across Creative Cloud](https://venturebeat.com/artificial-intelligence/adobe-embeds-agentic-ai-workflows-across-creative-cloud-shifting-from-media-generation-to-production-orchestration)

---

*（本文の情報は2026年6月24日時点のものです）*
