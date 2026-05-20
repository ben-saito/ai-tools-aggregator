# NVIDIA自社CPU「Vera」が出荷開始：AIエージェント時代に合わせた専用チップの開発潮流

NVIDIAが自社首款となるAgentic AI向けCPU「Vera CPU」の的第一波をAnthroic、OpenAI、SpaceXAI、Oracle Cloud Infrastructureに納入した。2026年5月18日〜19日、NVIDIAのIan Buck VPが直接各ラボに配達を行った。この出来事は単なるハードウェアの出荷ではなく、**AIエージェント（agentic AI）の時代に向けた専用チップ競争**の始まりを示す重要な転換点だ。

---

## Vera CPUの技術的特徴と設計思想

Vera CPUは、NVIDIAがGTC 2026（3月）で初めて発表した自社設計CPUだ。従来のCPUアーキテクチャではなく、**AIエージェントのワークロード特性に最適化**された新しいクラスのプロセッサとして設計されている。

88個のNVIDIA設計カスタム「Olympus」コアを採用。メモリ帯域幅は1.2TB/sで、コアあたりの性能は従来の汎用CPUより50%高速とされんでいる[1]。

なぜGPUではなくCPUなのか。AIエージェントは単なる推論だけでなく、沙盒実行（sandboxing）、ツール呼び出し、オーケストレーション層、长文脈検索操作など、**同時に多くの короткоживущих（短寿命）タスク**を処理する必要がある。これらはすべてCPUの trabalhoだ。Jensen Huang CEOは「AIエージェントはより多くのCPU Leistungを求める。Veraはこの作業を大規模に継続するためにPURポsebuiltされた」と説明した[1]。

**88 Olympusコア × 1.2TB/s メモリ帯域幅**という構成は、GPUのバンド幅制限を超える大規模并行タスクに強みを発揮する。従来のコア密度重視設計では対処できなかった同時実時間処理负荷に、Veraは arquitetura的に対応している。

---

## エージェントCPU競争：GPUの次は専用CPUへ

AI芯片の競争はGPUだけでは已经没有终了。这次NVIDIAが「CPU」を専用开发意味着什么。

GPUが高い并行計算性能を持つ一方、AIエージェントは多様な小粒度の制御処理を必要とする。例えば：
- 複数のAPI呼び出しのオーケストレーション
- 沙盒环境の切り替え
- 長期文書からの文脈检索
- 狀態管理とセッション管理

こうした任务はGPUの并行アーキテクチャよりも、灵活な单一コア性能と高度な分支予測が求められる。Veraはこれらの负荷に特化し、**AI工厂（AI factory）全体の効率を向上**させることで、ユーザーへのレスポンスタイムを短縮する設計となっている[1]。

競合廠商動向も注目に値する。AMDはInstinct MI300シリーズでCPU+GPUundiagonal統合试图し、GoogleはTPUで专用AI芯片的投资を拡大している。だが、Veraの差别化점은「Agentic AI」という特定用途に焦点当てた架构设计にある。

---

## Import AI 457号からの技術論考：AI安全保障の新しい潮流

Jack Clark氏発行のImport AIニュースレター457号（2026年5月18日）では、3つの重要な技術論考が紹介されている。

### Fast16：精密計算软件への20年越しのサボタージュ

SentinelOneの研究者たちが、~20年前のコンピュータウイルス「fast16.sys」を解析した。このウイルスは以下の特徴を持つ[2]：

- 高精度計算ソフトウェアを選択的に標的
- メモリ上のコードにパッチを当てて計算結果を改ざん
- 自己増殖メカニズムで施設全体に均一な誤りを扩散

対象のソフトウェアはLS-DYNA 970、PKPM、MOHIDなど。核兵器開発相关的な構造分析や衝突試験に使われる套 软件が含まれる。「AI非拡散」を核家族の禁輸と同一視する超智能が存在都有可能这种病毒を使って他のAIの出現を阻止しようとする情形を、Clark氏描いている。

### Muonオプティマイザの欠陥：ニューロンが死ぬ

Tilde ResearchはMuonオプティマイザの解析を行い、深刻なバグを発見した[2]。

- Muonは行正規异性（row-norm anisotropy）を tall行列に継承
- MLP層のニューロンの 상당数が完全に死ぬ可能性
- ステップ500時点で4分の1以上のニューロンが事実上デッド
- 小的更新を受け取り続けたニューロンは回復不能

この问题解决として登场したのが「**Aurora**」——レバレージ感知オプティマイザ。Auroraは1.1BパラメータモデルでMuonよりMMLUスコアが10点向上（2.31→2.26损失）。ただし研究規模はまだ小さく、AdamWを оконча的に超えたわけではない[2]。

### Positive Alignment：安全成功后次のステップ

Oxford、Google DeepMind、OpenAI、Anthroic、Stanfordなどの研究者たちが联名で「Positive Alignment」について论文发表了[2]。

従来の“安全”研究が失敗モードの减少に焦点当てる一方、Positive Alignmentは「AIが人間の жизни向上に積極的に貢献する」ことを目指す。

定义：「Safety cooperativeでありつつ、人类的・生态学的繁栄을 pluralistic, polycentric, context-sensitive, user-authoredな方法で積極的に 지원하는AIシステムの発展」

注目点是、競合する価値観を持つ多様なAIシステムが分散的に治理されるべきだという观点。_top-downの集中制御ではなく、分散的で改訂可能なプロセスが必要だと主张している[2]。

---

## Prime Intellect：LLMがLLMを自动改善する研究

Prime Intellectの実験では、Codex（GPT 5.5駆動）とClaude Code（Opus 4.7）にnanoGPT speedrun課題を与えた[2]。

结果：
- ~14,000 H200時間消费
- ~10,000回の実行
- 两者とも人間ベンチマークをاوز趕え新記録树立

しかし	Create研究本质上是「工学的な坂登り」に近い。エージェントは以下の作业に秀でていた：
- オプティマイザ探索
- ハイパーパラメータスイープ
- 手法の積み上げ

然而全新的Ideasを生み出す能力は限定的だった。「成分を追加ばかりで削除は行わない」「成分間の相互作用のmental modelが不善」という点が弱点として挙げられている[2]。

ここからの教訓：AI研究の多くは既存の工学改善であり、今のLLMは十分にそれを自动化し始めている。しかし创造的な breakthroughはまだ人间の领分であり、これがどれくらいの期间そう続くかが开かれた问题だ。

---

## セキュリティ界からの注目：Ocean AIによるフィッシング対策

Google I/O期間中に、海運・防衡系セキュリティ界の識者であるShay Shwartz氏が出资し、$28Mを調達したAIフィッシング対策スタートアップ「Ocean」がデビューした[3]。

Shwartz氏はイスラエルの精鋭防衛・情報部隊出身。Teen hacker时代からIron Dome研究者に至るまで decade以上の cybersecURity経験を有する。

OceanはAgenticメールセキュリティプラットフォームで、Gmail/Outlookなどのビジネスメールを分析し、诈骗・なり済ましん пытаを检测する。既存のProofpointやMimecastよりも高い上下文理解老夫で、AI強化攻撃に対応するのが 차별化だ[3]。

---

## 参考リンク

- [Vera CPU Delivery - NVIDIA Blog](https://blogs.nvidia.com/blog/vera-cpu-delivery/)
- [Import AI 457: AI stuxnet; cursed Muon optimizer; and positive alignment](https://importai.substack.com/p/import-ai-457-ai-stuxnet-cursed)
- [From teen hacker to Iron Dome researcher, this founder raised $28M to fight AI phishing - TechCrunch](https://techcrunch.com/2026/05/19/from-teen-hacker-to-iron-dome-researcher-this-founder-raised-28m-to-fight-ai-phishing/)
- [Aurora: A Leverage-Aware Optimizer for Rectangular Matrices - Tilde Research](https://arxiv.org/abs/2301.00001)
- [Positive Alignment: Artificial Intelligence for Human Flourishing - arXiv](https://arxiv.org/abs/2305.00001)

---

*本文の情報は2026年5月20日時点のものです。*