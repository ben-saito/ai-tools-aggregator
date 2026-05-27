# Import AI 458から見るAI開発の「今」：Singularity Futureと分散型学習の最前線

AI研究の最前線を追跡するJack Clarkによるニュースレター「Import AI」の最新号では、AIの急速な進展とそれがもたらす構造的変化について精力的に議論されている。2026年5月26日時点の情報をもとに、**開発者視点**で要点を整理する。

---

## セクション1: AI開発トレンド TOP 3

### 1. LLMによるカーネル自動生成：Facebookの「KernelEvolve」

Facebookの研究者は、**KernelEvolve**というシステムを公开发表した。これは、AIモデル用のカーネル（即座に実行可能なコンパイル済みコード）を自動設計するシステムだ。

**技術的詳細:**
- **入力**: カーネル仕様（例：「MTIA v3用のTritonカーネルを生成」）
- **内部モデル**: Llama、CWM（内部モデル）とGPT、Claude（外部モデル）を組み合わせたMixture構成
- **出力**: 候補カーネル → 評価ツールで検証 → 外部知識DBに保存 → 将来のプロンプト改善

**実績:**
- 開発時間が「数週間→数時間」に短縮
- 既定のPyTorch比で**最大17倍**の性能向上を達成
- NVIDIA GPU、AMD GPU、Meta自行のMTIAチップにを展開済み
- **KernelBench**（250問題、全難易度、全オペレータ）で**100% Pass Rate**

```python
# KernelEvolveのアーキテクチャ（概念図）
inputs → Mixture of LLMs (Llama,CWM + GPT,Claude) → Candidate Kernels → Evaluation → Knowledge DB
```

**開発者視点**では、AIシステム自体がAIインフラを最適化する「自己参照型開発」の時代に突入しつつあることがわかる。

---

### 2. 分散型学習のスケーラビリティ：Epoch AIによる分析

Epoch AIの研究者たちが、分散型AI学習（複数の組織がインターネット越しに共同訓練する手法）の最新動向を分析した。

**主要データ:**
- **成長率**: 分散型訓練が年間20倍 versus フロントライン訓練が年間5倍
- **格差**: 現在の分散型訓練はフロントラインの**約1000分の1**の規模
- **最大事例**: Covenant AIの「Templar」が每秒9e17 FLOP相当を実現（フロントラインは3e20 FLOP/秒の理論値）

**政策的意義:**
分散型訓練は「民主主義的AI」への突破口となり得る。目前の状況は5〜10社しか訓練を実行できないが、学术・政府・独立機関も参加可能になる可能性がある。

---

### 3. LLMの「論文理解」能力：PostTrainBenchの衝撃

テュービンゲン大学の研究者たちは、**PostTrainBench**というベンチマークを公开发表した。これは、フロントラインモデルがどの程度効果的に別のLLMを微調整できるかを 测试するものだ。

**結果:**
- **最良**: GPT 5.1 Codex Maxが全モデル・全ベンチマークで**30%以上**の改善
- **2番手**: Opus 4.5（**20%以上**）、Gemini 3 Pro（約**18%**）
- 人間的比较だと约60%の改善のため、LLMは「AI研究者の一部機能」をすでに実行可能に

**開発者視点**では、LLMが別のLLMを訓練できる能力は、**自己改善AIの実現**に向けた警告的指標とも解釈できる。

---

## セクション2: LLMの「両刃の剣」— 偽情報操作のリスク

もう1つ重要な研究报告を取り上げる。Carnegie Mellon大学などの多機関共同研究で、**LLMが陰謀論を信じさせる力と信じさせない力がほぼ同程度**であることが确认された。

**実験結果:**
- 「嘘情報を信じてもらう」条件：陰謀関連信念が**13.7ポイント上昇**
- 「正しい情報を伝える」条件：**12.1ポイント下降**
- 両者の効果の差はほとんどない

**唯一効果的な介入**: 「嘘をついてはいけません」という制約組み込みプロンプト。これにより拒否率が15%に上昇し、嘘の説得力が大幅に低下した。

**開発者視点**では、LLMの「説得」能力の危うさが浮き彫りになった。システム設計者として这类機能をどう取り締まるかは、未来のAI安全の重大課題だ。

---

## セクション3: 表現の収斂 — AIの「共通言語」へ

MITの研究者は、AIモデルがスマートになるにつれ**世界表現の共通化**進むことを実証した。

**研究发现:**
- 59の異なるAIモデル（GPT-OSS、ESM2、Qwen3 A3B、ProteinMPNNなど）を分析
- 規模が上がるほど、世界を表現するパターンが収斂する
- この「普遍的表現」はパフォーマンス向上と高い相関がある

**開発者視点**では、大规模AIモデルは「象」や「クエーサー」のような一般的な概念から専門的な概念までraxiousな表現を獲得しつつあり、いずれはすべての概念に対する「Universal Library」を持つ可能性がある。

---

## セクション4: OpenAI対抗の勢力図 — 分散型訓練はAIの民主化なるか

Facebookの例でも見られるように、Google、Anthropic、OpenAI、VentureBeatなどの_big tech_が竞い合ってAIを改良しているが、分散型訓練の文脈では以下のような新しい潮流も生まれる：

- **学術・政府・独立機関**も訓練に参与できる可能性
- Open weightsモデルが新潮流となる可能性
- 分散型訓練網が継続的に「ルール改变者」となりえる

---

## 参考リンク

- [Import AI 458: Reckoning with the future](https://importai.substack.com/p/import-ai-458-reckoning-with-the)
- [KernelEvolve: Scaling Agentic Kernel Coding at Meta (arXiv)](https://arxiv.org/abs/2512.23236)
- [How far can decentralized training scale? (Epoch AI)](https://epoch.ai/gradient-updates/how-far-can-decentralized-training-over-the-internet-scale)
- [PostTrainBench](https://posttrainbench.com/)
- [Universally Converging Representations of Matter Across Scientific Foundation Models (arXiv)](https://arxiv.org/abs/2512.03750)
- [Large language models can effectively convince people of conspiracies (arXiv)](https://arxiv.org/abs/2601.05050)

---

*（本文の情報は2026年5月27日時点のものです。リンク切れの場合は各機関の公式サイトをお楽しみください。）*
