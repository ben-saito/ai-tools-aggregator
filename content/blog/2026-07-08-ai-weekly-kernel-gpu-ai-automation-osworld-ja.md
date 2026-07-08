# AI週次ニュースレター：GPUカーネル自動生成、AI自動化、そしてOSWORLD 2.0

2026年7月第2週、AI開発の世界では「AIがAI自身のために開発する」というRecursive Self-Improvementの侯爵が現実味を帯び始めている。FableがGPUカーネルを自動生成し、人間の手で書かれた最速カーネルを超えた本周、研究者たちはAIの経済活動への影響を見積もるベンチマークを次々と発表している。

---

## Fable、AI開発の本丸に参入：GPUカーネルを自動生成し最速記録

AI研究開発の核心的タスクである**GPUカーネル設計**の自動化において、Fableが歴史的快挙を達成した。KernelBench-Megaにおいて「初めての本格的な（かつ最速の）メガカーネル」を提出urna、これはAIシステムがAIそのものを開発するRSI（Recursive Self-Improvement）ループの始まりの証左となる可能性がある。

**主要成果：**
- **RTX PRO 6000 Blackwell**上で18.71倍の高速化を達成
- 比較対象：Claude Opus 4.8（Triton）は14.4倍、GLM-5.2（Triton）は11.14倍
- 特に注目すべきは「デコードトークンあたりわずか1つの cooperative kernel launch」という効率性
- 他の高スコアエントリーは4〜14の別カーネル запуска per tokenが必要だった

**技術的詳細：**この解決策が特に印象的である理由は。カーネル設計の基礎的能力がAI研究開発のfundamental inputsの一つであるためだ。カーネル設計の自動化が達成されれば、それはさらなるAI能力向上の足場となり、RSIループの端緒となり得る。

Benchmarks like KernelBench-Megaは、AIシステムが自身をbuilding 얼마나 effectivenessになっているかを測る重要な指標となる。

---

## Remote Labor Index: AIはオンラインワークをどこまで自動化できるか

Center for AI Safety（CAIS）とScale Labsが、**Remote Labor Index（RLI）** の最新結果を公開した。AIシステムのオンラインフリーランスプロジェクト自動化能力は、2025年10月のローンチ時**2.5%**から、2026年7月には**16.1%**へと約6.4倍に成長した。

**評価対象タスク：**
- 3D CAD・リングデザイン
- 建築・床面積設計とフォトリアリスティックレンダリング
- 動画制作・アニメーション
- データ分析・Webアプリケーション開発

**トップモデルの成績：**
| モデル | 自動化率 |
|--------|----------|
| Fable 5 | 16.1% |
| Opus 4.8 | 8.3% |
| GPT-5.5 | 6.3% |

**経済的示唆：**「8ヶ月足らずでフロンティアが4倍以上向上したことは、経済的に有能なAIエージェントの進化の速度的具体的なシグナルである」と研究者たちは述べる。問題は、これが80%に達した时的オンライ雇用に何种な影響を与えるかだ。

Jack Clark（Import AI）は。「AIシステムが人間の比較優位を拡張する速度より速く、人類が革新し自身を競争的に保つ速度が上回るのだろうか？私はAIシステムの経済的に関連する能力が、人類のエッジ拡張速度より速く拡大していると予想する」との見解を示している。

---

## OSWORLD 2.0: 長時間コンピュータ使用タスクのBenchmark

研究者たちが**OSWORLD 2.0**をリリースした。このベンチマークは、AIシステムが複数のソフトウェアを用いた複雑な長時間のコンピュータタスクをどの程度遂行できるかを評価するものだ。

**OSWORLD 1.0との主な違い：**
- タスクの複雑度が大幅に上昇
- 中央値タスク所要時間：**1.0**: 約2分 → **2.0**: 約1.6時間（48倍）
- 69.6%のタスクが熟練者でも1時間以上要する

**対応ソフトウェア：**LibreOffice、GIMP、VLC、Thunderbird、VS Code、Chrome、Slack、LinkedIn、GitLab、Overleaf、Zotero、AWSなど

**現在の性能：**最强設定（Claude Opus 4.8 + 最大思考 + バッチツール呼び出し）で**20.6%（バイナリ精度）**、54.8%（部分スコア精度）に留まる。OSWORLD 1.0で2025年7月当时の最高スコアは約30%だったのが、2026年6月にはMiniMax M3 등이75%超 достичьことを考えると、2.0でも同様の性能向上が期待される。

---

## Insilico Medicine: AI設計の肺線維症治療薬がPhase III試験に進展

**Insilico Medicine**が、AIによって同定されたbani肺線維症（IPF）治療薬「rentosertib」のPhase III人類試験への進展を発表した。

**治驗の成果（71名、22施設）：**
- 60mg1日1回群：forced vital capacity（FVC）**+98.4mL**改善
- プラセボ群：**-20.3mL**低下
- 安全性プロファイルは全ての試験armで管理可能

**技術的背景：**Pharma.AIの**PandaOmics**が、生物学的ネットワークモデルを構築し、癌の老化メカニズムと関連付けた中でTNIKを標的として特定。既存の，受容体チロシンキナーゼ経路ではなく、線維症と炎症を調節するTNIKを標的とすることで、差別化された治療戦略を実現した。

---

## JD.comのOxygen AI Item Center：电商の大規模在庫管理

Amazon of Chinaと呼ばれるJD.comが、大規模在庫管理システム**Oxygen AI Item Center（Oxygen AIIC）**の詳細を論文として公開した。

**システム規模：**
- 7億ユーザー、数百万マーチャント
- 数千億SKUを処理
- 1日あたり数億件のアイテム更新をHuawei Ascend NPU上で処理

**4つの核心要素：**
1. **Ontology Engineering**：Expertsが業界知識を蒸留し、アルゴリズムがスケーラブルなオントロジー構築と継続的進化を推進
2. **Semantic Search then Discrimination**：オントロジー知識を別Knowledge Baseとして外部化することで、モデル再訓練なしに継続的更新を実現
3. **Self-evolving LLM/VLM**：Incremental learningとモデル自己進化により、 targetedな知識ギャップを埋め、破滅的忘却を緩和
4. **Unified Item Tunnel**：日次・分秒次・秒次レベルの生産・流通パイプラインをサポート

---

## 参考リンク

- [Import AI 464: Fable writes GPU kernels](https://importai.substack.com/p/import-ai-464-fables-writes-gpu-kernels)
- [KernelBench Mega Leaderboard](https://kernelbench.com/mega)
- [Remote Labor Index - Center for AI Safety](https://safe.ai/blog/significant-increase-in-digital-labor-automation)
- [OSWORLD 2.0 Official Site](https://osworld-v2.xlang.ai/)
- [Insilico Medicine - AI Drug for IPF](https://www.artificialintelligence-news.com/news/insilico-medicine-advances-ai-drug-for-ipf-to-phase-iii-trials/)
- [JD Oxygen AI Item Center - arXiv](https://arxiv.org/abs/2606.28070)

---

*本文の情報は2026年7月8〜9日時点のものです。*
