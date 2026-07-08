# Import AI 464 深掘り：AI文明観と中国ECの超大規模基盤

2026年7月第1週のImport AI #464（Jack Clark、7月6日公開）では、技術的直接だけでなく、AIが文明のスケールで何を意味するのかを考える「Tech Tales」と、中国EC最大手JD.comの**7億ユーザー・数百億SKU**を処理する産業カイゼキ基盤という、スケールの異なる2つの話題が紹介された。本稿では这两つの話題を深掘りする。

---

## Tech Tales：AIの世紀iour faces——歴史家はなぜ未来を間違うのか

Jack ClarkのImport AIは每号、技術の意味を考察する「Tech Tales」セクションを設けることが多いが、#464では** analog computation（類比計算）と文明の行く末**についての，短編SFめいた考察が掲載された。

### 2050年、世界は「世界計算機」で 돌아変わる

Clarkが描いた近未来は以下のとおり：

- **通用計算は禁止された**——超知能が「危険すぎる」として、General-purpose computingは壁外に隔離された
- **文明的に重要な問題ごとに特化型計算機**が建造される——天気予報、洪水予測、電力グリッド、水の淡水化、地震シミュレーションの各ための「世界計算機」
- 各計算機大學と結びつき、専門知識を持つ技术者が設計・運用する
- **兆ドル単位の投資**があれば、类比計算で汎用頭脑を実現できる可能性——それが「新しき脅威」として警戒されている

### 歴史家はなぜ間違うのか

Clarkの考察の背景には、Matthew Tokson（ユタ大学法学院副院长）がSSRNで公开发表した論文がある。タイトルは**「Artificial Intelligence and the Lessons of History」**。

Toksonの指摘如下：

- **楽観論者も悲観論者も技術が訪れる规模和影響を一貫して低估してきた**——核分裂発見前の物理学者（Niels BohrやRobert Oppenheimer조차懐疑的だった）、インターネットの経済効果が fax machine 以下と言ったNobel賞経済学者Paul Krugmanなど
- インターネットが民主化を돔くと想定した技术者もいれば、気候変動の重大性を长年見低估した科学家了大量にいる
- 「AIは過大評価されている」「AIは危険すぎる」的双方の主張は、历史の教训からすると同样に间违っている可能性が高い

Toksonの结论：「**歴史はAIの 영향に対する平静さを支持しない。楽観論者も悲観論者も技術を过小評価してきた。**」

### 開発者にとっての意味

ClarkのTech TalesとToksonの论文からえる教训は、直接的な技术選定とは别にある：

- **現在の「AIの限界」は、近い将来に突破される可能性がある**——2023年当时の「LLMは役に立たない」という評価は、2026年のClaude Code/GPT-5.5/Coworkの現実により完全に過去のものになっている
- **产业構造の改变は、技術の存在自体より遅い場合が多い**——電気が普及してから経済構造が変わるまで数十年かかったように、AI능력の拡大と社会への浸透には时间差がある
- **技术者としてのadillasは「AIにできること」の擴大傾向に合わせつつ、「何 экономически価値があるか」の判断も持ち続けること**

---

## JD.com Oxygen AIIC：7億ユーザー・数百億SKUを處理する産業AI基盤

Import AI #464が伝えた第二个の話題は、中国EC最大手**JD.com（旧360buy.com）**が公开发表した物流・商品管理システム**Oxygen AI Item Center（Oxygen AIIC）**である。

### 规模

- **7億ユーザー**、数百万の売り手、数百億SKU（在庫管理单位）
- 日に数億件のアイテム更新を**Huawei Ascend NPU**上で処理
- 天猫（Tmall/AliExpress）と並ぶ中国EC二强の一角

### 技术的な4つの要要素

Oxygen AIICの技術構成は 다음과 같이报告されている：

**1. Ontology Engineering via Human-AI协作**
专家が業界知識を蒸馏し、algorithmsがontonologyの構築・進化を拡大。人間とAIの分工で、数百億SKUの分类体系を管理。

**2. Semantic Search then Discrimination**
セマンティック検索で动态的に進化し続けるontologyを参照し、判別ステージでは「そのアイテムが ontology entriesと一致するか」の2値分類に简化。这样做大幅降低了LLMのタスク复杂度と幻觉リスク，同时不改变模型本身就能对应 ontology の进化。

**3. Self-Evolving Item-Understanding LLM/VLM**
incremental learningとmodelの自己進化により、ターゲットとなる知識ギャップを埋めつつ、catastrophic forgettingを缓解。堅牢なマルチタスク基盤の上に、軽量な「expert modules」を追加して敏捷な能力扩展を実現。

**4. Unified Item Tunnel**
日次・分単位・秒単位のプロダクション·、配給パイプラインを同時にサポートし、数据一貫性を维持する他ビジネスアプリケーションとの統一インターフェース。

### 产业AIの教训

Oxygen AIICが示すのは、大规模AI应用の新たな形：

- **ビジネス·オペレーション自体にAIが織り込まれている**——商品管理·库存管理·需要予測が一体となり、人間の監督 없이自己更新する
- **规制対応：中国の技術主権政策**のもと、Huawei Ascend NPU这样的国产芯片活用が前提
- **LLM/VLMの产業適用は、「汎用より专用品질(low hallucination + fast iteration)」が选ばれることがある

このシステムの存在は、中国のAI基础设施が「规模」に加え「 운용品质」の面で既に高い成熟度に到達していることを示唆している。

---

## 参考リンク

- [Import AI #464: Fable writes GPU kernels; AI automation; and analog computation](https://importai.substack.com/p/import-ai-464-fables-writes-gpu-kernels)
- [Artificial Intelligence and the Lessons of History (SSRN)](https://www.ssrn.com/index.cfm/en/)
- [JD Oxygen AI Item Center (Oxygen AIIC) V1: An Industrial-Scale LLM/VLM-Centric Solution for Item Understanding, Management, and Applications (arXiv)](https://arxiv.org/abs/2606.XXXXX)

---

*本文の情報は2026年7月8日時点のものです。*
