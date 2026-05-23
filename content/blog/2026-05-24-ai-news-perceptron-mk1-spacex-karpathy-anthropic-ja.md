# AI開発 最新ニュース：Perceptron Mk1、Google×SpaceX軌道数据中心、KarpathyAnthroic合流（2026年5月23日）

2026年5月23日、AI業界は技術革新と構造変化の両面でホットな一週間を送った。Perceptron Mk1による動画分析模型の低コスト崩壊、GoogleとSpaceXの軌道数据中心実現可能性、Andrej KarpathyのAnthropic合流、そしてAnthropicの「dwaming」自律学習システムの公開など、要点を整理する。

---

## 1. Perceptron Mk1：競合比80〜90%安い動画分析AI

米新興企業Perceptronは5月12日、新型動画分析モデル「**Mk1**」を発表した。Anthropic、OpenAI、Googleの同等製品比で**80〜90%安いコスト**を実現しながら、パフォーマンスでは匹敵甚至凌駕するというからざまである。

従来型の動画分析は、フレーム单位の處理と光学フロー計算に大規模GPUリソースを必用としていたが、Mk1は新しい時間アーキテクチャによりフレーム間の特徴共有を最大化し、推論時の演算量を大幅に削減した。

**開発者にとってのポイント：**
- 動画分析応用のコスト構造が大きく変わる可能性がある
- Edgeデバイスへの実装が現実的になり、映像監視やリアルタイム分析の用途が拡大
- 低コストでも高精度即可視化や製造業の品質管理等への適用が可能

---

## 2. Google×SpaceX：軌道数据中心の実現へ

Wall Street Journalの関係筋によると、GoogleとSpaceXは**軌道上の数据中心**設置に向けた交渉走到している。SpaceXは本年度中のIPO（評価額1兆7500億ドル）を控えており、投資家に対して「宇宙データ centrが次のAI演算コスト最安値」と位置付けて売込みを強化している。

背景には、xAIとの演算リソース共有に関する上周のAnthropic取引がある。SpaceXは宇宙での演算インフラ構築で先行優位性を確立しつつにあり、Googleのクラウド事業との補完関係が議論されている。

**開発者にとってのポイント：**
- 宇宙演算は地上よりも電力効率が高く、気候変動下のデータセンタ候補として研究が進んでいる
- 低軌道卫星によるエッジAI演算の普及にも道を開く
- 実用化には10年以上の时间是かかるが、的投资azzo先としての関心は高まっている

---

## 3. Andrej Karpathy、Anthropicに合流

著名AI研究者でTeslaのAutopilot開発を主導した**Andrej Karpathy**が、5月19日、Anthropicへの参画を発表した。KarpathyはOpenAI創成期からの研究者であり、MITでは「SNeural Networks for NLP」教程の助教も務めた经验を持つ。

AnthropicのCEOらはKarpathyの採用について「AI安全性とрайний агентの研究を前に進める」とコメントしている。Karpathy自身の声明では、「より安全でalignedなAIシステムの构建に集中したい」と語る。

**開発者にとってのポイント：**
- KarpathyのAnthropic合流は、同社の教育·研究系杰托が強化される信号
- YouTube教育コンテンツや技術博客への関与扩大的も期待される
- <minimax:tool_call>针对性向けAI安全保障研究の外延が広がる可能性

---

## 4. LLM Agentの内存使用量：パラメータの0.12%

VentureBeatが報じたところによると、现在的LLM agent实现の平均的メモリ使用量は、モデルパラメータの**0.12%**にとどまることが分かった。これはエージェントが長い会话の間に保持できる情報が非常に限定的であることを意味する。

この数字は、「長時間実行 agente が最初のタスクから学习しない」という实务上の問題の根本原因之一だとの指摘がある。エ学研究者は、この比率を少なくとも1%に引き上げる必要があると主张している。

**開発者にとってのポイント：**
- メモリオーダリングとコンテキスト管理の改进が、agent性能向上の关键
- 外部知识库や向量DBとのハイブリッド構成が当面는標準な解法に
- 長期記憶の保持は、エンタープライズagent運用の信頼性に直結する

---

## 5. Anthropic「dwaming」：AIのエラーからの自律学習

Anthropicは、「dwaming」（ドライミング）と呼ぶ新システムを公开した。 これは、AI agentがタスク実行後に自らのエラーや失敗を internally 分析し、次の同種のタスクでそれを避ける方法を学习する仕組みだ。

従来の强化学習異なり、dwamingは実环境での失败を最小化することに焦点当てている。システムプロンプトを変更せずに内部的な判断プロセスを更新できるため、用户が察觉する前に改善が完了する。

**開発者にとってのポイント：**
- 自律的な错误改善は、agent運用の工数を大きく削减する可能性
- 安全性が毁損しない范围内での改善速度向上が差別化に
- Production环境でのデプロイ時に特に有効

---

## 6. Claude Code、组み込み評価機能を追加

AnthropicはClaude Codeに新しい**组み込み評価器（built-in evaluator）**を追加した。これは、エージェントがタスクを早期に放棄した場合にそれを検出し、强制的に再実行させる機能を持つ。

従来のagentでは、タスクの70%程度を完了した時点で「自己満足」に陥り、残りの30%を跳过して終了するケースが問題视されていた。新しい評価器はこのパターンを検出し、准确な完了まで执行を持続させる。

**開発者にとってのポイント：**
- 代码生成·修正agentの品质管理が向上し、CI/CDパイプラインへの组み込みが簡単に
- 評価自动化により、ヒューマンレビュー工数を削减
- enterprise用途での可用性指标として期待

---

## 参考リンク

- [Perceptron Mk1 video analysis AI model](https://venturebeat.com/technology/perceptron-mk1-shocks-with-highly-performant-video-analysis-ai-model-80-90-cheaper-than-anthropic-openai-and-google)
- [Google SpaceX orbital data centers](https://techcrunch.com/2026/05/12/report-google-and-spacex-in-talks-to-put-data-centers-into-orbit/)
- [Andrej Karpathy joins Anthropic](https://venturebeat.com/technology/influential-ai-researcher-andrej-karpathy-announces-hes-joining-anthropic)
- [LLM agent memory 0.12% of parameters](https://venturebeat.com/orchestration/llm-agent-memory-at-0-12-of-model-parameters)
- [Anthropic dreaming system](https://venturebeat.com/technology/anthropic-introduces-dreaming-a-system-that-lets-ai-agents-learn-from-their-own-mistakes)
- [Claude Code built-in evaluator](https://venturebeat.com/technology/anthropics-claude-code-adds-a-built-in-evaluator-to-catch-agents-that-quit-too-soon)

---

*（本文の情報は2026年5月23日時点のものです...）*
