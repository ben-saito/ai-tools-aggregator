# Muonオプティマイザの欠陥とAuroraの登場：ML研究の最前線

オプティマイザは機械学習の心臓部だ。モデルのパラメータをどのように更新するかで、学習の効率と最終性能が決まる。長年にわたり**AdamW**が標準的な選択肢として君臨してきたが、新しいオプティマイザの挑戦はすべて失敗に終わってきた。しかし此刻、NVIDIAもAppleも採用した「Muon」オプティマイザ自体に重大な欠陥存在于ことが研究で明らかにされた。本稿ではこの技術的発見と、Auroraという新たな解决方案について詳しく解説する。

---

## Muonオプティマイザとは

Muonは2025年に提案された新しいオプティマイザで、従来のAdamWよりも効率的な学習を実現すると主張された。**Muon（Momentum&Newton-based Optimizer）** は、二次最適化の手法を取り込みながら計算コストを抑える設計思想で、NVIDIAのMegatron-LMやAppleのAFCM（Adaptive Fourier Contrastive Method）などで採用が広がった。

しかしTilde Researchの研究者たちがMuonの内部構造を詳細に解析した結果、**MLPレイヤーにおいてneuronsの「死滅」（neuron death）が発生する**という致命的な欠陥ことが判明した。

---

## 発見された問題：neuron death

研究チームが実施したMuonの分解解析によると、以下のような問題が確認された：

- **行正規化異方性（row-norm anisotropy）** が背の高い行列（tall matrices）を継承する
- MLPレイヤー内で значительная 部分（25%以上）のneuronsが学習のごく早期に永続的に「死滅」する
- 死滅したneuronsは学習率ウォームアップ後に恢复不能となり、以後ほぼゼロの更新を受け取り続ける

>"Muon's update inherits row-norm anisotropy on tall matrices which can cause a significant portion of neurons in MLP layers to permanently die"

具体的な数値を見ると、step 500の時点で**4分の1以上のneuronsが実質的に死亡**しているという衝撃的な結果だ。生きているneuronsと死んだneuronsの間でLeverage scoresの二峰性分布（bimodal distribution）が観察され、 更新の不公平性が顕著に表れている。

---

## Aurora：Leverage-awareオプティマイザ

この問題に対処するため、研究チームは**Aurora**と呼ばれる新しいオプティマイザを構築・公開した。Auroraの核心的なアイデアは**矩形行列（rectangular matrices）に対するレバレジ認識**だ。

### 性能比較

1.1BパラメータのTransformerを~100Bトークンで学習させた結果：

| オプティマイザ | 平滑化損失（step 24k） | MMLUスコア改善 |
|-------------|-------------------|-------------|
| **Aurora** | **2.26** | **+10点** |
| Muon | 2.31 | 基准 |
| NorMuon | 2.33 | 基准 |
| AdamW | 2.34（推定） | 基准 |

AuroraはMuonおよびNorMuonの両方を明確に上回り、最終損失で显著な改善を実現した。MMLUスコアではMuon比で**10点以上の向上**を達成しており、特に**記憶集約的なベンチマーク**（MMLUがその典型）で大きな効果を発揮している。

### 技術的创新

Auroraの主要な改良点：

- 行列のレバレジスコアに基づく動的な更新配分
- 矩形行列特有の異方性问题的解決
- MLP層でのneuron死滅の防止

>"We train 1.1B-parameter transformers on ~100B tokens and compare Aurora against Muon and NorMuon... Aurora achieves the lowest final loss of all methods"

---

## なぜAdamWはまだ淘汰されないのか

この結果は「AdamWがついに倒された！」と欢呼するには値しない。研究团队的慎重論によれば、Aurora現時点で小さなスケールでの検証にとどまり、**AdamW置き換えるほどの証拠はまだ揃っていない**。

過去数年間、Muonを含む多くのオプティマイザがAdamW挑戦を表明したが、決定的な勝利磪得られなかった歴史がある。Alexander Doria（Pleias）も独立検証で600MパラメータモデルにおいてAuroraがMuonとAdamWを上回ることを確認しているが、スケーラビリティの疑問は残ったままだ。

---

## 開発者にとって的意义

この研究から学べる点は多い：

**1. オプティマイザ選択の轻率な変更は危険**
Muonの採用が広がる中、その潜在的欠陥は広く認識されていなかった。最新の研究動向を追うことの重要性を示す。

**2. 「死んだneurons」の検出手法**
学習过程中的にneurons的健康状態をモニタリングする手法は、他のオプティマイザでも有用可能性がある。

**3. レバレジを意識した最適化へ**
行列の構造的特性を考慮したAuroraのアプローチは、今後のオプティマイザ設計に新しい方向性を示す。

---

## 次のステップ

AuroraのコードはGitHubで公開されており、自分で試すことができる：

- [Aurora - Tilde Research Blog](https://blog.tilderesearch.com/blog/aurora)
- [Aurora Release - GitHub](https://github.com/tilde-research/aurora-release)

現在の大規模言語モデル開発において、学習の効率化は極めて重要だ。 trillionパラメータ時代の学習コストを考えれば、5%の改善でも巨額の計算資源節約になる。Auroraが真にMuonやAdamWの代わりになるかは、**より大きなスケールでの検証**が待たれる。

---

## 参考リンク

- [Aurora: A Leverage-Aware Optimizer for Rectangular Matrices (Tilde Research)](https://blog.tilderesearch.com/blog/aurora)
- [Aurora - GitHub](https://github.com/tilde-research/aurora-release)
- [fast16 Mystery: High-Precision Software Sabotage (SentinelOne)](https://www.sentinelone.com/labs/fast16-mystery-shadowbrokers-reference-reveals-high-precision-software-sabotage-5-years-before-stuxnet/)
- [Import AI 457: AI stuxnet; cursed Muon optimizer; and positive alignment](https://importai.substack.com/p/import-ai-457-ai-stuxnet-cursed-muon)

---

*（本文の情報は2026年5月26日時点のものです）*
