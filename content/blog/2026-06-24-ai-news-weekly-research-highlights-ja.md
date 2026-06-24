# AI開発ニュースまとめ（2026年6月24日）

2026年6月下旬、LLM・AIエージェント・3D生成・量子誤り訂正など複数の分野で熱い研究成果が'arXiv'に投稿されている。本稿では特に注目すべき論文と、Hacker Newsで話題となったAI関連トピックをまとめる。

---

## VLAの自律的スキル獲得：InSightフレームワーク

**Vision-Language-Action（VLA）モデル**は、デモから操作スキルを学習できるが、その能力は訓練データのスキルに制限される。**InSight**は、この制約打破を狙うフレームワークだ。

**アーキテクチャ：** 2段階構成。（1）VLMプラン分解とエンドエフェクタポーズを用いてデモをラベル付きプリミティブに分割する自動セグメンテーションパイプライン。（2）欠落プリミティブを特定し、VLMが提案する低レベル制御で自律的にデモ試行→自動ラベリング→VLA訓練セット統合を行う**VLMガイド付きデータフライホイール**。

**評価：** ブロック反転、ドロワー閉鎖、掃引、ねじり、注ぎなどのシミュレーション・実世界操作タスクで、対象のスキルに対する人間のデモなしに学習ことに成功。学習したプリミティブは構成により新規の長-horizonタスクを実行可能。

**技術的ポイント：** プリミティブレベルのステアビリティ（`"move gripper to the bowl"`, `"lift upward"`, `"pour the bottle"` などの原始アクション単位での制御）が、継続的スキル獲得の実用的基盤を提供することが示された。

---

## OpenThoughts-Agent：エージェントモデル向けデータレシピ

**エージェント言語モデル**の訓練データ構築方法は広く公開されていない。**OpenThoughts-Agent（OT-Agent）**は、このギャップを埋める完全オープンなデータ<minimax:tool_call><parameter name="content">curationパイプラインだ。

**実験規模：** 100件以上の制御アブレーション実験を実施。タスクソースと多様性の重要性を体系的に調査。

**成果：** パイプラインから100Kの訓練セットを構築。**Qwen3-32B**をfine-tuningすることで、7つのエージェントベンチマークで平均**44.8%**の精度を達成。既存の最强オープンエージェントデータモデル（Nemotron-Terminal-32B、40.9%）を**3.9ポイント**上回った。

**スケーリング特性：** 訓練データ量に比例して性能が向上することが確認され、計算量制御下で他のオープンデータセットより常に優れる結果。

**公開リソース：** 訓練セット、パイプライン、実験データ、モデルが [openthoughts.ai](https://openthoughts.ai) で公開。

---

## FLUX3D：拡散Alignedな3D Gaussian Splatting生成

**Sparse voxel表現**はimage-to-3D Gaussian Splatting（3DGS）生成のスケーラブルな基盤として注目されているが、現在の方法は入力画像の高周波視覚詳細の保存に苦慮している。

**2つのボトルネック：**
1. **表現ボトルネック：** 意味的抽象化に最適化された識別的2D特徴を使用するため、再構成手がかりが抑制される
2. **クロスモーダル対応ボトルネック：** 標準拡散トランスフォーマーが密な2D画像トークンと疎な3D voxel潜在表現のAlignに失敗

**FLUX3Dの解決策：**
- **DA-SLAT（Diffusion-Aligned Structured Latents）：** 拡散alignedの構造化潜在表現とデコーダのみのアーキテクチャ
- **SMDiT（Sparse-structure Multimodal Diffusion Transformer）+ MARoPE（Modal-Aware Rotary Positional Embedding）：** 幾何学非依存の2D-3D Alignを実現

**結果：** 外観忠実度で大幅に改善され、既存のすべての手法を上回る高品質3DGSアセット生成を達成。

---

## LLMによる量子LDPC符号の発見

量子コンピュータの実用には量子ハードウェアのエラーを大規模に訂正する必要がある。**量子低密度パリティ検査（qLDPC）符号**が有望なアプローチとされるが、その構築は離散設計問題として難しい。

**Structured Concept Evolution（SCE）：** LLMと構造化代数変異グラマーを組み合わせた検索フレームワーク。LLMに符号を設計させるのではなく、**構造化コンセプト**（代数仕様とそれを実行するプログラムを組んだもの）を進化させる。階層的変異により群代数、プロトグラフ幾何、基底空間を改変。

**発見内容：** アベル構成から標準的な設計（例：二元バイサイクル符号）を超える非アーベル群上のファミリまで、多様な競争力ある符号ファミリを発見。**GPT-5.4-mini** と **GPT-5.4-nano** といった軽量モデルで実行可能だった点は注目に値する。

---

##  другие注目トピック（ Hacker Newsより）

### Qwen-AgentWorld：言語世界モデル for 一般エージェント
**arXiv:2606.24597** - エージェントの内部世界モデルを表現する新しいアプローチ。Hacker Newsで**103ポイント**を記録し、27件のコメントが付き技術的議論が行われた。

### DiffusionBench：拡散型Diffusion Transformerの包括的評価
生成的拡散モデルの包括的評価ベンチマーク。Diffusion Transformersの体系的な評価方法论を提供する。

### IV-CoT：暗黙的Visual Chain-of-Thought
構造を意識したテキストから画像生成のための潜在視覚推論フレームワーク。T2I-CompBenchで優れた結果を示している。

### L3Cube-MahaPOS：Marathi言語のPOSタグ付けデータセット
83百万の話者を持つMarathi言語向けの金が標準POSタグ付けデータセット。BERTベースのモデル（MahaBERT-v2）で**88.67%**のトークンレベル精度を達成。

---

## まとめ

今週は**自律的スキル獲得**（InSight）、**エージェント訓練データ**（OpenThoughts-Agent）、**3D生成**（FLUX3D）、**量子符号発見**と、複数の фронтка で大きな進展が見られた。特にVLAのプリミティブレベル制御や、エージェント訓練データの体系的な構築方法は、実用的なAIシステム構築に向けた重要なマイルストーンとなるだろう。

---

## 参考リンク

- [InSight: Self-Guided Skill Acquisition via Steerable VLAs - arXiv](https://arxiv.org/abs/2606.XXXXX)
- [OpenThoughts-Agent - openthoughts.ai](https://openthoughts.ai)
- [FLUX3D - arXiv](https://arxiv.org/abs/2606.XXXXX)
- [Large-Language-Model Discovery of Quantum LDPC Codes - arXiv](https://arxiv.org/abs/2606.XXXXX)
- [Qwen-AgentWorld - arXiv:2606.24597](https://arxiv.org/abs/2606.24597)
- [DiffusionBench - GitHub](https://github.com/End2End-Diffusion/diffusion-bench)
- [Hacker News](https://news.ycombinator.com)

---

*（本文の情報は2026年6月24日時点のものです）*
