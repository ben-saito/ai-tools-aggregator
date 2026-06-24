# Krea 2のオープンウェイト公開とSakana AI「Fugu」——画像生成とマルチエージェントorchestrationの最前線

2026年6月、画像生成とAI agentの領域で zwei大きな発表があった。Kreaが企業向け画像生成モデル「Krea 2 Raw」および「Krea 2 Turbo」をオープンウェイトとして公開したのはもちろんのこと、Sakana AIがマルチエージェントorchestration API「Fugu」を一般開発者に解放した。本稿では这两の技術的詳細と業界への影響を読み解く。

---

## Krea 2：2秒で2K画像を生成するオープンウェイトモデル

Kreaは2026年6月、同社のフラグシップ画像生成モデル「Krea 2」を**オープンウェイト**として公開した。Hugging Face上から「Krea 2 Raw」と「Krea 2 Turbo」の2つのバージョンをダウンロード可能である。

### オープンウェイト公開の背景

多くの企業がAI画像生成をプロダクション環境に導入を進める一方、「AIスラム」と呼ばれる画一的で区別つかない画像出力の増加が課題として指摘されていた。Kreaはこの問題に応えるため、**視覚的多様性**と**プロンプト精度**を両立したモデルを開放することを決断した。

ライセンスはカスタムライセンス（Krea 2 Community License Agreement）に基づき、50シート以上のエンタープライズは有料契約が必要となる。ただし、生成物の著作権はユーザーに帰属し、Kreaは主張しないとしている。

### アーキテクチャ：12BパラメータDiffusion Transformer

Krea 2のアーキテクチャは**ゼロから構築**されたDiffusion Transformerであり、規模は**120億パラメータ**に及ぶ。主要技術的特徴は以下の通り：

- **Single-stream Transformer Block**：テキストトークンと画像トークンの間でAttention層とMLP層を共有し、構造的複雑さを排除
- **SwiGLU MLP**：拡張率4倍のSwiGLU活性化関数を採用
- **Grouped-Query Attention (GQA) + Gated Sigmoid Attention**：学習安定性を向上
- **3D Axial RoPE (Rotary Position Embedding)**：フレーム・高幅・奥行き個別に座標マッピング
- **Timestep Conditioning**：従来のper-block MLPを軽量なper-blockバイアス項に置き換え、モジュレーションparametersを20〜30%削減

### Raw vs. Turbo：訓練済みチェックポイントの違い

| モデル | 特徴 | 推論ステップ | 生成速度 |
|--------|------|-------------|---------|
| **Krea 2 Raw** | 蒸留なしの中間チェックポイント。広大なlatent spaceを持ち、即座のプロンプティングには不向きだが、構造訓練に最適 | 52 steps | ~24秒 |
| **Krea 2 Turbo** | 知識蒸留済み。8 stepsのみ。Guidance scale 0.0で動作し、一般的なハードウェア上で2K解像度画像を約2秒で生成 | 8 steps | **約2秒** |

** 핵심運用指針は「Rawで訓練し、Turboで生成する」** ことだ。Rawモデルの未制限のlatent spaceはカスタムLoRAやドメイン特化fine-tuningに有利であり、訓練済みLoRAはTurboに直接ポート可能である。

### 競合比較：生成速度ベンチマーク

2026年6月時点の各モデル画像生成速度比較：

- **FLUX.1 [schnell]** (Apache 2.0): 0.5秒——最速だが商用にはAPI経由
- **Z-Image Turbo** (Replicate/fal.ai): 1.8秒——プロプライエタリ
- **Krea 2 Turbo**: 2.0秒——**オープンウェイト**
- **Midjourney v8.1 (Turbo)**: 3〜6秒——プロプライエタリ
- **FLUX.2 [dev]**: 6.1〜6.4秒——研究用途のみ
- **GPT-Image-2** (OpenAI): 200.8秒——思考連鎖に最大3分を費やす

注目すべきは、Krea 2 Turboが**オープンウェイトながら**最快的proprietaryモデルに匹敵する速度を実現している点だ。

### データ戦略：合成データ排除とフィルタリング

Kreaは訓練データに**ハイブリッド戦略**を採用した：

1. 公開データの収集 + サードパーティライセンス画像 + proprietary生成による合成データセット
2. **DINOv3 + SigLIP-2** ベースのproprietary分類器で合成画像を完全に排除（ゼロ合成データポリシー）
3. **Sparse Autoencoder (SAE)** をSigLIP-2埋め込みに適用し、アーティファクトを教師なしで分離・フィルタリング

これにより、AI生成画像特有の「上界バイアス」を防止しながら、寬範な美的表現範囲を維持している。

---

## Sakana AI「Fugu」：マルチエージェントorchestration APIの的一般開発者向け公開

Sakana AIは2026年6月23日（火）付で、multi-agent orchestration API「**Fugu**」を一般開発者に解放した。Fuguは複雑なクエリを複数の中間・上位モデルに委譲し、動的にsub-taskを割り当てた上で最終出力を統合するblack-box APIとして機能する。

### Fuguのポジショニング：RouterではなくOrchestrator

従来のmodel routing（Not Diamond、Martian、RouteLLMなど）が单一のfoundation modelにクエリをdispatchingするのに対し、Fuguは以下の点が異なる：

- **クエリを複数sub-taskに分解**し、モデル間で並列・直列に委譲
- **動的delegation + verification**を実装
- 結果の**synthesis**を自動実行
- 本質的には**LangGraph-style workflowを単一APIエンドポイントにパッケージ**したもの

SanaはFuguを「collective intelligence（集合知）の商品化」と位置づけている。

### ベンチマーク性能

SWE-Bench Pro（ソフトウェアエンジニアリングタスク）：

- **Fugu Ultra: 73.7** > Claude Opus 4.8: 69.2 > GPT-5.5: 58.6
- ただしAnthropic Fable 5 (80.0) には及ばず（輸出規制によりアクセス不可）

Humanity's Last Exam：

- Fugu Ultra: 50.0 > Opus 4.8: 49.8 > Fable 5: 53.3

Long-Context (MRCRv2)：

- GPT-5.5: 94.8 > Fugu Ultra: 93.6

CTI-REALM（セキュリティ）：

- Opus 4.8: 69.6 > Fugu Ultra: 69.4

**傾向：** Fuguは複雑・多段階のタスク（コード生成、研究ループ、セキュリティ分析など）で集団知の強みを見せる一方、单一domainでの純粋推論性能ではまだtop-tier单体モデルに劣る場面がある。

### 実働比較：Crossy Roadゲーム生成事例

Mark Studiosによる実演テスト結果：

| 指標 | Sakana Fugu Ultra | Claude Opus 4.8 |
|------|------------------|-----------------|
| 所要時間 | 22分 | 79分 |
| トークン消費 | ~89,000 | ~940,000 |
| コスト | $7.32 | $37.85 |
| 成果物の品質 | 基本的ロジックエラーあり | 高品質・堅実 |

結果から分かるのは、Fuguは**速度とコスト効率で優位**だが、出力品質と信頼性ではOpus-class模型に軍配が上がるということだ。

### 料金体系

Fuguは段階的なtoken利用料を採用：

| 層 | 料金（百万トークンあたり） | 対応モデルプール |
|----|------------------------|----------------|
| Mini | $0.25 | 小〜中規模モデル群 |
| Standard | $1.25 | 中規模モデル群 |
| Pro | $3.50 | 上位モデル群 |
| Ultra | $8.00 | 最上位モデル群 |

Delegation過程で子タスクが消費するtokenも全て親のリクエスト料金にカウントされる点に注意が必要だ。

---

## 業界への影響と展望

### オープンウェイト化の波

Krea 2のオープンウェイト公開は、**画像生成の民主化**をさらに加速させる。2秒という生成速度と、Hugging Faceという既存の配布基盤を組み合わせることで、企業はproprietary APIに依存せずに高品質な画像生成パイプラインを構築できる。

特に「Rawで訓練、Turboで生成」というworkflowは、昨今のLoRA文化と親和性が高く、custom fine-tuning文化を推進するスタジオやチームにとって大きな福音となるだろう。

### マルチエージェントorchestrationの商品化

Fuguの登場は、multi-agent systemの実用化が一歩近づいたことを示している。LangGraphやCrewAIでの手動設定が求められる中、API一本でworkflowを実行できることの利点は小さくない。

ただし、orchestratorの性能は常にunderlying modelの性能にboundされる。Fuguが「wrapperに過ぎない」という批判があるのも事実であり、真の「AI主権」からはまだ距離がある。

### 2026年下半期の注目点

- **Krea 2 Medium / Large**（proprietary版）との性能差がどう推移するか
- Fuguのモデルプールに新しいモデルの追加されていくか
- 輸出規制下でのAnthropic Fable 5の動向

---

## 参考リンク

- [Krea 2 Raw - Hugging Face](https://huggingface.co/krea/Krea-2-Raw)
- [Krea 2 Turbo - Hugging Face](https://huggingface.co/krea/Krea-2-Turbo)
- [Krea 2 Technical Report](https://www.krea.ai/blog/krea-2-technical-report)
- [Sakana AI Fugu](https://sakana.ai/fugu)
- [VentureBeat - Krea 2 Enterprise AI Image Generation](https://venturebeat.com/technology/enterprise-grade-ai-image-generation-in-2-seconds-is-here-krea-2-raw-and-turbo-available-as-open-weights-under-custom-license)
- [VentureBeat - Fugu Multi-Agent System](https://venturebeat.com/ai/sakana-ai-launches-fugu-a-multi-agent-orchestration-api-that-beats-frontier-models-on-coding-and-agentic-tasks)

---

*（本文の情報は2026年6月24日時点のものです）*
