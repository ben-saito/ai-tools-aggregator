# BioHub ESMFold2 vs AlphaFold 3 — タンパク質AI競争の新展開

2026年6月、Chan Zuckerberg BioHubが不挥发性モデル **ESMFold2** を公開し、Google DeepMindのAlphaFold 3との競争が激化している。両者は生命科学の最も根本的な問題解決——タンパク質の構造予測——を巡って火花を散らしめている。

---

## AlphaFold 3とBioHubの対立の背景

BioHubはMeta（旧Facebook）の共同設立者 Priscilla Chan と Mark Zuckerberg が2016年に設立した非営利研究機関。ESMFold2のリリースは、AlphaFold 3が構造生物学の世界標準となっていた状況への直接的な挑戦状이다.

AlphaFold 3は2024年にGoogle DeepMindから発表され、「生命科学の革命」と称された。 しかしAlphaFold 3は学術目的でのみ自由に使え、商业利用には制限があった。BioHubのESMFold2はこの障壁を越え、「研究と商业利用の両方に対応する」ことを明言している点が重要だ.

---

## ESMFold2の技術的構成

ESMFold2は3つのコンポーネントから構成される:

### 1. ESMC（ESM Code）— 言語モデル

約28億の配列データ（约2.8 billion sequences）で訓練された言語モデル。生命の树的全域（tree of life）の全域にわたって蛋白質を表現できる能力を持つ.

前世代のESM2比起来、训练データが约50 millionから约2.8 billion（约50倍）に拡大された。これにより、生物学的パターンのより深い理解が可能になった.

### 2. ESMFold2 — 設計エンジン

ESMCの配列表現を原子的分解能の3D構造に変換する設計エンジン。ベンチマーク результат: AlphaFold 3より优异な性能を示す領域もある一方、一部の领域では性能がタイになる результа也已確認되었다.

推論時スケーリング（inference-time scaling）の效果も大きい。単一シードでは49%のパス率だった抗体-抗原反応が、1000샘플では65%に向上。蛋白質-蛋白質相互作用は75%から78%への改善にとどまっているが、信頼性が向上している.

### 3. ESM Atlas — 最大的知识ベース

68億の蛋白質配列と11億の予測構造を持つ知識ベース。这是迄今为止最大规模的AI应用于蛋白质生物学的研究成果.

---

## スケーリング法則と计算资源

ESMFold2の性能向上はスケーリング法則に従っている。报告された主要な发现:

- **语言モデルのパラメータ数と計算量**: 各 generation のESMで、表现力の向上パラメータ数と計算量に依存している
- **训练時の損失関数**: 配列内のアミノ酸のアイデンティティを予測する训练という简单な 목적から、生物學的な表現力が emergência的に生じている

これはLLMにおけるスケーリング칙と同じ原理が、タンパク質の世界でも適用されていることを示している.

---

## 癌细胞治療への応用

BioHubのチームがESMツール用于癌细胞治療の標的を设计した実験结果は以下の通り:

| 標的 | 涉及的癌症種 | 小型binder、ヒット率 | 抗体由来的フォーマット |
|------|-------------|-------------------|-------------------|
| EGFR | 肿瘤増殖 | 36-88% | 15-29% |
| PDGFRβ | 肿瘤増殖 | 同上 | 同上 |
| PD-L1 | 免疫チェックポイント | 同上 | 同上 |
| CTLA-4 | 免疫チェックポイント | 同上 | 同上 |
| CD45 | 免疫細胞シグナル伝達 | 同上 | 同上 |

この结果は、ESMFold2が経験的な筛选（empirical screening）から計算主導の設計（computation-guided design）に変革できる有可能性を示している。従来は時間がかかった初期標的発見が、数時間から数日に短縮される可能性してきた.

---

## 競合との比較

| 項目 | ESMFold2 | AlphaFold 3 |
|------|---------|------------|
| 開発元 | BioHub | Google DeepMind |
| ライセンス | 研究・商业利用可 | 学術用途のみ |
| 訓練データ | 28億配列 | 非公開 |
| 知識ベース | 68億配列、11億予測構造 | 更大规模の可能性 |
| 抗体-抗原パス率（1000샘플） | 65% | 類似性能 |
| アクセス方法 | biohub.ai プラットフォーム | AlphaFold Server |

---

## AI×生命科学の次の潮流

ESMFold2の登場は、AI企業と生命科学研究の境界が曖昧になりつつあることを示している。GoogleがAlphaFoldで先行しましたが、BioHubのモデルは开源的なライセンスアプローチで差をつけようとしている.

重要な趋势として、各研究機関がオープンマodelsを使って生命科学の扉を開いていることで、数据と計算资源が生死を分ける时代已经没有なりつつある.

---

## 参考リンク

- [BioHub releases a world model of protein biology (biohub)](https://biohub.org/news/world-model-of-protein-biology/)
- [ESMC / ESMFold2 Models (biohub.ai)](https://biohub.ai)
- [AlphaFold 3 (Google DeepMind)](https://deepmind.google/research/alphafold/)
- [GPIC: Giant Permissive Image Corpus (arXiv)](https://arxiv.org/abs/2605.30341)

---

*本文の情報は2026年6月3日時点のものです。*