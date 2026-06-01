# BiohubがAlphaFold対抗のESMFold2を発表、AI開発レースが加速

AI開発業界で先週、CZI旗下的BiohubがDeepMindのAlphaFoldに対抗する新世代のタンパク質構造予測モデル「ESMFold2」を公开发表した。これはAI用于创薬・医療分野における覇権爭いを象徴する事件であり、開発者角度看重要ポイントが多々ある。

---

## ESMFold2の技術的詳細

ESMFold2は、Biohubが发開発した「world model of protein biology」と呼ばれる蛋白质統合予測システムの一部だ。构成要素は以下の3つ：

- **ESMC**：约28億の配列データで学習した语言モデル
- **ESMFold2**：ESMCの配列表現を3次元構造に変換する折叠エンジン
- **ESM Atlas**：68億の配列と11億の予測構造を管理するデータベース

注目すべきは、ESMFold2がBenchmarksでAlphaFold 3を性能で上回っている点だ。特に、抗体-抗原認識タスクでは单个予測で49%から、1000サンプル采用時は65%に上昇。蛋白质-蛋白质相互作用も75%から78%へ改善展示了inference time scalingの效果。

---

## AI経済統計の測定问题

Import AI 459号为伝えたPIIEとAnthropicの研究によると、美国のAI経済は年間約2,600%という异例の成長率を実現しているが、従来のGDP統計ではその影响がほぼ見えないという问题がある。

研究によると、质性调整后のAI産出高は2024年に2,290%、2025年に2,271%ずつ成長。しかし名目収益は価格下落により穏やかな成長にとどまる。これは「AIがGDP统计に见えない鲨鱼的ように存在している」という比喩で语られている。

この测定问题の深刻さは、AIが初めて人間の劳动を替代する可能性のある技术而出る点だ。半泽体やインターネットは劳动の补完だったが、AIは劳动の代替可能出现する。

---

## AIオーバースigtの难しさ

UK AI Security Instituteの论文は、自动Alignment研究の実用化に关心する问题を提起した。AIがAIを监督するというアプローチには以下の难しさがある：

- **最適化压力**：AI研究は人間の赞否を最优化する
- **异質なmistake**：AIの见我は人间には直感的に理解し難い
- **相関した研究**：多くの研究が共有され、评价が困难
- **非人间評価可能论拠**：Alignment解决が人間の追击できない论拠に依存する可能性

研究者は、红军/蓝军方式来のエラー発見や、完了した研究プロジェクトを使った复现実験などを提案している。

---

## 100M许可/licensed图像数据集GPIC公开

Stanford、Radical Numerics、University of Michigan、Salesforce Researchの共同研究で、1億枚の许可图像数据集「GPIC」が公开发表された。

特筆すべき点：
- 全图像が研究・商用利用都可の许可
- Qwen3-VL-4Bでキャプション付け
- HuggingFaceで中央ホスト
- Flickr・WikimediaのCC BY、CC0、Public Domain、No-Known-Restrictionsから収集

この数据集は学术と产业 研究者の双方にとって有价值なリソースとなる。

---

## 参考リンク

- [ESMFold2 - Biohub](https://biohub.org/news/world-model-of-protein-biology/)
- [Where is AI in GDP statistics? - PIIE](https://www.piie.com/publications/policy-briefs/2026/where-ai-gdp-statistics)
- [Automated alignment is harder than you think - arXiv](https://arxiv.org/abs/2605.06390)
- [GPIC Dataset - HuggingFace](https://huggingface.co/datasets/stanford-vision-lab/gpic)
- [Import AI 459](https://importai.substack.com/p/import-ai-459-ai-oversight-is-difficult)

---

*本記事の情報は2026年6月2日時点のものです。*