# Hawkeye: ハードウェア最適化カーネルを自律生成するGPUカーネル最適化フレームワーク

Harvard、Stanford、Together AI、Caltech。研究者が自律型カーネル生成のためのフレームワーク「Hawkeye」を発表。

---

## Hawkeyeの目的

「コーディングエージェントを最小限の専門知識でハードウェア対応にできるどうか」という問いに答えるもの。

「最小限の指導で、コーディングエージェントがハードウェア固有の特徴を活用し、新興のハードウェアアクセラレーターのサポートオーバーヘッドを削減できることを実証する」と研究者らは書いている。

---

## コア技術：ユニットテストベースの分類体系

各ユニットテストは人間が手書きしたSolution Kernelと、その最適化を検証するプロファイリングメトリクスをペアリングしている。Solution Kernelは短い使用ガイドと一緒に呼び出し可能関数としてラップされており、エージェントはこれを構文例として読んだり、直接呼び出したり、フラグメントを合成して大きなカーネルに組み込んだりできる。

---

## 評価結果

**評価対象**：NVIDIA Ampere、Hopper、Blackwell、AMD MI350。BF16、FP8、NVFP4、MXFP4精度。

確立されたワークロード（torch.compileがcuBLAS、cuDNN、FlashAttentionなどのエキスパートチューン済みベンダーライブラリにディスパッチするケース）：
- **BF16、低精度の両方でtorch.compile同等またはそれ以上**

新興注意機構（Tritonカーネルでは融合不可能な非標準スキャンとゲート）：
- **Flash Linear Attentionライブラリ比 18.9× 幾何平均高速化**（Blackwellで1.22×、MI350で1.00×）

---

## なぜ重要か

この種の研究は、少量の人間がキュレーションした知識加持でAIシステムが高度に最適化された人間の仕事を凌駕できることを示している。「Human-authored gold-label helper systems」を書いて命を吹き込むと、機械はそれをブーツストラップして人間の能力を超えていく。

---

## 参考リンク

- [Hawkeye: Hardware-Aware GPU Kernel Optimization with Minimal Supervision (arXiv)](https://arxiv.org/abs/2505.XXXXX)

---

*（本文の情報は2026-08-25時点のものです）*
