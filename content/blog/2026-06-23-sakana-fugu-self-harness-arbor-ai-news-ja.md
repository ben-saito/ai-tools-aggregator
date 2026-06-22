# Sakana「Fugu」が示すAIオーケストレーションの次時代 —— 週間AI開発者ニュース（2026年6月第4週）

去る6月22〜23日、AI開発者コミュニティにとって見逃せないリリースが立て続けに生まれた。Sakana AIのマルチモデルオーケストレーション「Fugu」、AIエージェントが自身の手口を自己能動的に改善する「Self-Harness」、そしてコーディングエージェントの学習効率を2.5倍に引き上げる「Arbor」の3つをお届けする。

---

## Sakana AI、「Fugu」でフロントティア性能を達成 —— Anthropic離れを商機に変える

日本発（正確にはグローバルに展開）のAIスタートアップSakana AIは6月22日、マルチモデルオーケストレーションシステム「**Fugu**」を正式に立ち上げた。Fuguは「ふぐ」の意。単一の巨大モデルに頼るのではなく、複数の specialized AIエージェントをプールし、タスクに応じて動的に振り分けるアーキテクチャを取る。

**核心的な技術的差異**は、Sakanaの2026年研究論文 **TRINITY** と **Conductor** に根ざした自律的モデル選択・検証ライフサイクルにある。Fugu自体もLLMとして機能し、内部的に自身や他のモデルを再帰的に呼び出すことで、あたかも「熟練のプロジェクトマネージャー」が専門家のチームを指揮するかのような協調を実現している。

### 2つのエディション

- **Fugu**: 日常タスク向けの低レイテンシ版。インタラクティブチャットやCodex等のコーディング環境への統合を想定
- **Fugu Ultra**: AI研究、サイバーセキュリティ分析、特許調査などの高難度タスク向け。モデルの最深プールを協調させ、厳格な科学・推論ベンチマークで業界トップの単一モデルに匹敵する性能を示す

### ベンチマーク結果

| タスク | Fugu Ultra | Fugu | Claude Fable 5 |
|--------|-----------|------|----------------|
| LiveCodeBench（コーディング） | 93.2 | 92.9 | 89.8 |
| GPQA-Diamond（理系院試） | 95.5 | 95.5 | 94.6（Mythos Preview比）|

Anthropicが6月12日の輸出管理命令を受けClaude Mythos 5 / Fable 5の一般公開を停止した件は、「単一企业提供への依存リスク」を可視化する事例となった。Sakana CEOのDavid Ha（元Google Brain）はXにこう投稿している：

> *"Orchestration Modelsは、より大きなモデルを超えた次のフロントティアだ。1社のモデルに国家インフラを依存することは本質的なリスクであり、Orchestration Modelはそれをcollective intelligenceでヘッジする。"*

Fuguはproprietary APIとして提供され、入力トークン $5 / 100万トークン、出力 $30 / 100万トークン（Ultra）という料金体系になる。

---

## Self-Harness：上海AIラボがAIエージェントに「自己改造」を許す

上海Artificial Intelligence Laboratoryの研究者らは6月22日、**Self-Harness**と呼ぶ新しいパラダイムをarXivで公開した。AIエージェントが自らの「harness（制御機構）」を実験的に書き換え、性能を最大60%向上させたという。

### Harnessとは何か

LLMベースのエージェントの性能は、underlying モデルだけでなく、その周囲を巻く **harness** にも大きく依存する。harnessとは、システムプロンプト、ツール群、メモリ、検証ルール、ランタイムポリシー、オーケストレーションロジック、故障回復手順を包含する層を指す。

SWE-agent、Claude Code、Codex、OpenHandsなどが典型的なharnessの例だ。問題の本質は、「多くのよくあるエージェント障害はモデルではなくharnessに起因する」という点にある。例えば、エージェントがモデルの応答を確認せず（テストを通すためにコードを実行することすら）に「成功」と報告したり、失敗したアクションを無限にリトライしたりするのは、モデルのせいではなくharnessの構成の問題だ。

### 手動デバッグの限界

研究のリード著者Hangfan Zhang氏によれば、「多くの場合、深いドメイン知識を持つ経験あるエンジニアは、まだLLMより優れた変更を提案できる」という。しかし手動エンジニアリングの真のボトルネックはそこではない。**"現在のharnessエンジニアリングは体系的なフィードバックループを欠いている。編集の多くは直感、少数の観測された失敗、アドレスバグデバッグに基づいて行われる"** とZhang氏。

### 3ステージ反復ループ

Self-Harnessの中核は、3つのステージを繰り返す自己進化サイクルだ：

1. **Weakness Mining（弱点発掘）**: 初期harnessからエージェントが一連のタスクを実行し、検証可能な実行トレースを生成。失敗トレースを分類し、モデル固有の失敗パターンを検出する
2. **Harness Proposal（改造案生成）**: 失敗パターンに基づき、「proposer」役のエージェントが多样かつ最小限のharness修正を生成。各修正は特定の失敗メカニズムに紐づけられ、過剰な一般化を防ぐ
3. **Proposal Validation（案の検証）**: 回帰テストにより候補修正を評価。改善が確認され、かつホールドアウトタスクでの性能劣化がない場合のみ採用。複数の候補がパスすればマージされ、次のイテレーションの起点となる

### Terminal-Bench-2.0での結果

研究チームはMiniMax M2.5、Qwen3.5-35B-A3B、GLM-5をターゲットモデルとしてSelf-Harnessを評価。ベースラインモデル vs Self-Harness適用後で最大60%の性能向上が確認された。

企業にとっての実用性：社内文書の形式が更新されたとたん動作しなくなるissue自動修正エージェントを想像してほしい。Self-Harnessは「漠然とした失敗」を「体系的に解決可能な問題」に変換する。失敗トレースが新しいドキュメント形式を悪用している場所を特定し、proposerが対象を絞ったharness編集を生成、evaluatorが他のケースへの不回帰を確認しながら採用を決める。

---

## Arbor：人民大学＋Microsoft Researchがコーディングエージェントの「学習喪失」を解消

人民大学（中国）とMicrosoft Researchの研究者は同日、**Arbor**と呼ぶフレームワークを提唱した。既存のコーディングエージェントが同じcompute予算でClaude CodeやCodex比起来2.5倍以上の実用的性能向上を達成したという。

### 問題の所在：長い自動化は≠進歩

Autonomous Optimization（AO）はAIエージェントが人的な段階的指導なしにターゲット成果物を反復改良するタスクを指す。SWE-agent的なツール実行を数百ターンにわたりautonomousに行うイメージだ。

しかし **`automation` ≠ `progress`** であることの証明が、この研究の動機だ。Jiajie Jin氏（Microsoft Research / 共著者）はVentureBeatにこう語っている：

> *"AutomationはAIを長く走らせられるが、ループは進捗と同じではない。目標が曖昧、またはメトリクスがeasy to hackな場合、長い実行は『誰も望まない改善』をより速く生産するだけだ。"*

### 3つの構造的欠陥

1. **isolated attempts**: 各試行が独立して扱われ、過去の成功・失敗から構造的に学習しない。失敗は単に失われる
2. **flat memory**: 会話Transcript-basedな記憶は数百ターンを超えるとコンテキストウィンドウ限界を突破し、長期的な研究構造が崩壊する
3. **shared working tree**: 全ツール呼び出しが単一共用ワークツリー上で連鎖されるため、並行仮説検証が困難

### Arborの解法：Coordinator + Executor分離

Arborは2つのコンポーネントに責任を分離する：

- **Coordinator（コーディネータ）**: Principal Investigatorのように長寿命のエージェント。本コードを直接編集することは決してなく、研究全体の状態を所有し、蓄積された証拠を観察して新しい仮説と方向性を生成し、 экспериメントの結果をどう扱うかを決定する
- **Executor（エグゼキュータ）**: 短寿命で高集中の特化型エージェント。Coordinatorがテストしたいアイデアがあるとisolatedな環境（新鮮なgit worktree）に配置され、1つの仮説のみを実行。実装→評価→デバッグ→結果をCoordinatorに報告という流れを独立して行う

この分離により、複数の仮説が並行して干渉なく検証され、各試行の結果が仮説木（hypothesis tree）として構造化して蓄積される。失敗は「拘束条件」として残り、計算資源の浪費ではなく次の探索方向を示す信号として機能する。

---

## まとめ：オーケストレーション的自己改善、構造化への回帰

今週の3つの技術は、一見異なるアプローチしながらも同一の主題で鳴っている：**AIエージェントの「制御構造」をどう設計し、経験をどう蓄積させるか**。

- **Fugu**: モデル選択のオーケストレーションを人間からAI本身に移し、ベンダー依存リスクを払拭
- **Self-Harness**: モデルではなくharness自己能動的改善でモデル固有の弱点に対応
- **Arbor**: 試行の蓄積と仮説木による長期的な研究戦略の構造化

、いずれも「より大きなモデル」への依存から脱却し、**既存の能力を如何にorganizeするか**にフォーカスしている点では、AI engineeringの新しい潮流が見える。

---

## 参考リンク

- [Sakana Fugu — VentureBeat](https://venturebeat.com/ai/no-claude-fable-5-no-problem-sakana-achieves-frontier-performance-with-new-fugu-multi-model-auto-synthesis-system)
- [Self-Harness — VentureBeat](https://venturebeat.com/ai/researchers-introduce-self-harness-a-framework-that-lets-ai-agents-rewrite-their-own-rules-boosting-performance-up-to-60)
- [Arbor — VentureBeat](https://venturebeat.com/ai/new-ai-optimization-framework-beats-claude-code-and-codex-by-2-5x-on-the-same-compute-budget)
- [Sakana AI公式サイト](https://sakana.ai)

---

*（本文の情報は2026年6月23日時点のものです）*
