# AI週次まとめ：Claude Coworkのモバイル対応、GPUカーネル自動生成、デジタル労働の自動化加速

2026年7月第1週は、AIエージェントの可用性向上と経済的影響をめぐる議論が一段と深まった一週となった。AnthropicのClaude CoworkがモバイルとWebに対応し、AIコーディングエージェントの戦いがオフィス全体の自動化へと広がる気配を見せている。また、AIによるGPUカーネル記述やオンライン労働の自動化など、開発者にとって重要な技術的マイルストーンが複数達成された。

---

## Anthropic、Claude CoworkをモバイルとWebに拡大

Anthropicは7月7日（火）、Claude Coworkプラットフォームのアクセス可能範囲を拡大した。Claude CoworkはこれまでmacOSおよびWindowsのデスクトップアプリでのみ利用できなかったが、iOS、Android、Webからも利用できるようになった。

**展開の段階的アプローチ**：今回の展開はMax加入者から始まり、「今後数週間以内に」他のプランのClaudeユーザーにも拡大される。Coworkセッションはデフォルトでクラウド上で実行されるようになり、異なるデバイス間での作業継続や複数のCoworkタスク同時実行が可能になった。ただしAnthropicは、デスクトップアプリでのみ利用可能な「フル体験」（ローカルファイルアクセスなど）が引き続き存在すると指摘している。

**TechCrunchの分析**は、この展開を「コーディングエージェント戦争がオフィスの残りの部分に飛び火している」と表現している。デスクトップでタスクを開始し、モバイルで進捗を確認し、ノートPCを閉じても結果は利用可能——というワークフローは、Claude Code競合のGitHub CopilotやCursorとの差別化要因となる。Coworkのクラウドファースト化は、エージェント的な作業管理の永続性という課題を克服するアプローチとして注目に値する。

**開発者視点**からすると、セッションのクラウド実行はCI/CDパイプラインへの統合を容易にし、バックグラウンドでの長時間のタスク実行が可能になる。ただし、ローカルファイルアクセスがデスクトップ限定ということは、開発環境のセキュリティとエージェントの柔軟性の間でトレードオフが存在することを意味する。

---

## FableがGPUカーネルを自動生成——KernelBench-Megaで最速記録

AI研究開発の自動化において重要な突破口が開いた。Import AI #464が報じたところによると、Fableはカーネルベンチマーク「KernelBench-Mega」において「初めての本格的（かつ最速の）メガカーネル」を記述した。

**技術的成果**：FableはNVIDIA RTX PRO 6000 Blackwell上でCUDAコードを記述し、最適化されたPyTorchベースラインと比較して**18.71倍の高速化**を達成した。参考までに、他の主要な結果は以下のとおり：
- Claude Opus 4.8（Triton）：14.4倍
- GLM-5.2（Triton）：11.14倍
- GPT 5.5（Triton）：4.34倍

**特筆すべき技術的詳細**：このソリューションは「torch.profilerで表示された—one cooperative kernel launch per decoded token」という形で実現されている。対照的に、他の高スコアentriesは4〜14の個別のkernel launchesに問題を分解していた。1つのcooperative kernel launchでデコードされたトークンごとに処理を行う这一手法は、カーネル設計における新しいアプローチを示している。

**開発者にとっての意味**：GPUカーネルの自動生成は、**AI研究開発の自動化の基礎的能力**である。カーネル設計を自律的に実行・改善できることは、再帰的自己改善への道を歩んでいる可能性がある。Jack Clark（Import AI）は「AIシステムが自分自身を構築することにおいてどれほど効果的になっているかを示す有意義なシグナル」としてこの結果を位置づけている。KernelBench-Megaのようなベンチマークは、AGIへの進捗を測定するプロキシとして機能する。

---

## AIオンライン労働の自動化率が8ヶ月で6倍に——Remote Labor Index

Center for AI Safety（CAIS）とScale Labsの研究者が、**Remote Labor Index（RLI）**を通じてAIシステムのオンラインフリーランスプロジェクト自動化能力を測定した結果を公開した。

**劇的な改善**：2025年10月のlaunch時の成功率**2.5%**から、2026年7月には**16.1%**まで上昇。8ヶ月足らずで**6倍以上**の増加である。

**評価対象タスクの多様性**：3D and CAD、グラフィックデザイン、ビデオ・アニメーション、オーディオ、データ分析、Webアプリケーションなど幅広い分野をカバー。具体的なタスク例としては：
- リングデザイン：クライアントの婚約指輪をEmerald-cutからMarquise-cutに変更した3Dモデルとフォトリアリスティック渲染
- 広告ビデオ：60秒のフラットデザイン2Dアニメーション広告
-  Floor Plan and Renders：登記planのスキャンから、家具レイアウト案、床面積をクリア

**評価された最新モデル**：
| モデル | RLIスコア |
|--------|-----------|
| Fable 5 | 16.1% |
| Opus 4.8 | 8.3% |
| GPT-5.5 | 6.3% |

**Jack Clarkの指摘**は注目に値する：「RLIが80%に達したとき、オンライン雇用に何が起こるのか？ 新しいタスクが生まれる——人間は革新し、自分たちができてAIにはできないタスクを見つける——とは言われる。だが、**人間の革新速度がAIシステムのraw capability expansionより速いのだろうか？**」

**開発者視点**では、API越しにAIに経済的タスクを委託するシステムの設計が愈来愈現実味を帯びている。AIエージェントに自律的に完了させる仕事のスニペットを渡し、その成果物を監査する——というワークフローは、ソフトウェア開発の外注モデルに変化をもたらす可能性がある。

---

## OSWORLD 2.0——長時間のコンピュータ利用タスクでAIを評価

Hong Kong大学、UC San Diego、Columbia大学、UC Santa Barbara、Mila、Alibaba Qwen、Ohio State大学などの研究者たちが、OSWORLD 2.0をリリースした。これは、AIシステムがマルチステップ・マルチプログラムの大規模なコンピュータタスクをどの程度実行できるかを評価するベンチマークである。

**困難度の飛躍的上昇**：OSWORLD 1.0の中央値タスク所要時間は約**2分**だったが、OSWORLD 2.0では約**1.6時間**（48倍増）。OSWORLD 2.0には108の長距離タスクが含まれ、うち69.6%は熟練した人間ユーザーに1時間以上かかると推定される。

**ソフトウェーカバレッジの拡大**：1.0がLibreOffice、GIMP、VLC、Thunderbird、VS Code、Chromeをバンドルしていたのに対し、2.0ではSlack、LinkedIn、Shortcut、REAPER、MuseScore、WPS、GitLab、Overleaf、LabPlot、Zotero、AWS、保险請求・ビザ申請・研究会管理ポータル等专业的なウェブサイトも対象に追加された。

**現在の性能**：最强設定（Claude Opus 4.8 + maximum thinking + batched tool calls）でも **20.6%（バイナリ精度）**、54.8%（部分スコア精度）に留まる。OSWORLD 1.0では2025年7月に最高スコアモデルが約30%だったが、最近のモデルは~75%（MiniMax M3; 2026年6月）に達している。2.0でも同様の、急な上昇が予想される。

**Jack Clarkの評価**：「Computer useは、AIが広範な経済的タスクを実行し、科学研究を実行できるようになるための fundamental skill である。**OSWORLD 2.0は、AIシステムがどれほど複雑な、多様なソフトウェアを使用してタスクを実行できるかのプロキシとして見られるべき**」

---

## Insilico Medicine——AI創出したIPF治療薬がPhase III試験に進む

創薬AIの産業応用において、Insilico MedicineがAIで同定された治療候補がidiopathic pulmonary fibrosis（IPF）を対象としたPhase III試験に進んだ。

**臨床結果**：71名の患者を22の中国臨床で実施されたランダム化試験では、60mg1日1回投与群で平均**FVC（努力肺活量）+98.4mL**の改善が見られ、placebo群は-20.3mLの低下だった。安全性プロファイルも管理可能であり、FDAは2023年2月にオーファンドラッグ指定を与えている。

**技術的背景**：InsilicoのPharma.AIプラットフォーム、特に**PandaOmics**が生物学的データセット（ゲノム、臨床試験結果、学術文献、特許情報）を処理し、包括的な生物学的ネットワークモデルを構築。アルゴリズムは因果推論メカニズムを適用して、データアーキテクチャ内に隠された新しい疾患関連ターゲットを識別する。

**創業者視点**からの意味：この試験結果は、計算創薬が前臨床から後期臨床有效性検証に進んだ最初の事例の1つである。AI創薬の妥当性を検証する最初の具体的なテストケースとして、創薬以外での応用（材料科学など）にも注目が集まる。

---

## 参考リンク

- [TechCrunch - Claude Cowork expands to mobile and web](https://techcrunch.com/2026/07/07/the-coding-agent-wars-are-spilling-into-the-rest-of-the-office-claude-cowork/)
- [The Verge - Anthropic is launching Claude Cowork on mobile and web](https://www.theverge.com/ai-artificial-intelligence/961978/anthropic-claude-cowork-mobile-web)
- [Import AI #464 - Fable writes GPU kernels; AI automation; and analog computation](https://importai.substack.com/p/import-ai-464-fables-writes-gpu-kernels)
- [Center for AI Safety - A Significant Increase in Digital Labor Automation](https://safe.ai/blog/significant-increase-in-digital-labor-automation)
- [OSWorld 2.0 - Benchmarking Computer-Use Agents on Long-Horizon Real-World Tasks](https://osworld-v2.xlang.ai/)
- [AI News - Insilico Medicine advances AI drug for IPF to Phase III trials](https://www.artificialintelligence-news.com/news/insilico-medicine-advances-ai-drug-for-ipf-to-phase-iii-trials/)
- [KernelBench Mega Leaderboard](https://kernelbench.com/mega)

---

*（本文の情報は2026年7月7日時点のものです）*
