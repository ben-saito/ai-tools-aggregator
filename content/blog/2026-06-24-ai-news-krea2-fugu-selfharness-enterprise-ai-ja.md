# AI開発ニュース：Krea 2のオープン重み、画像生成最速クラスへ — Sakana Fuguのマルチエージェントorchestration、Self-Harness自己改良フレームワーク

2026年6月24日、生成AI業界で複数の重要な発表が同時発生した。画像生成モデルのオープン化、マルチエージェントorchestrationの商用展開、そしてAIエージェントが自ら実行ルールを改良する新フレームwarkの登場——今日はこれらのトピックを深掘りする。

---

## Krea 2が画像生成のスピード記録を塗り替え：2秒で Frontier品質

VentureBeatの報道 따르면、Kreaは企业向け画像生成モデル「Krea 2」の重みを公開した。**Krea 2 Turbo**はわずか**2秒**で2k 解像度の画像を生成でき、現在利用可能な中最速のモデル其中一个となった。

### 技術的アーキテクチャ：12BパラメータDiffusion Transformer

Krea 2の中核はゼロから構築されたDiffusion Transformer架构で、**120億パラメータ**规模で動作する。主な特徴：

- **SwiGLU MLP**（拡張率4倍）と**Grouped-Query Attention（GQA）**の组合せ
- **3D Axial Rotary Position Embedding（RoPE）**による位置情報エンコーディング
- 各ブロック変調パラメータを20〜30%削減し、计算资源をコアレイヤに再配分

### 2つのチェックポイント：RawとTurbo

Kreaは训练ライフサイクルの异なる2つのチェックポイントを公开：

| モデル | 特徴 | 推論ステップ | 生成時間 |
|--------|------|-------------|----------|
| **Krea 2 Raw** | 未distillのベースモデル。高品質LoRA训练に最適 | 52ステップ | 较长 |
| **Krea 2 Turbo** | distill済み。2秒生成、カスタムLoRA対応 | 8ステップ | **約2秒** |

「**Train on Raw, generate with Turbo**」——このワークフローにより、企業はRawでカスタムLoRAを训练し、Turboで高速生成を行うことができる。

### ライセンス：50シート以上は有偿

Krea 2 Community License采用企業向けカスタムライセンス：
- 50シート未満の組織は免费利用可（APIは有偿）
- 50シート以上は企業ライセンス（有偿谈判必要）
- 生成物の著作権はユーザーに帰属

### ベンチマーク比較（生成速度）

| モデル | 開発元 | 平均生成時間 | ライセンス |
|--------|--------|-------------|-----------|
| FLUX.1 [schnell] | Prodia | 0.5秒 | Apache 2.0 |
| Z-Image Turbo | Replicate/fal.ai | 1.8秒 | Proprietary |
| **Krea 2 Turbo** | **Krea** | **2.0秒** | **Custom** |
| Midjourney v8.1 (Turbo) | Midjourney | 3-6秒 | Proprietary |
| GPT-Image-2 | OpenAI | 200.8秒 | Proprietary |

注目すべきはOpenAIのGPT-Image-2が200秒超えと大幅に遅いこと。Krea侧は「思考连关中の長い推論フェーズ」と说明している。

---

## Sakana AI Fugu：マルチエージェントorchestrationの商用API登场

同じくVentureBeatが报じたSakana AIの「**Fugu**」は、複数のLLMをorchestrateするマルチエージェントAPIとして、6月23日に正式サービスを開始 했다。

### 核心仕組：何が違うのか

既存の「model routing」（Not Diamond、Martianなど）が单个のfoundation modelにクエリを振り分ける一方、Fuguは以下を行う：

- クエリを複数サブタスクに分解
- 並列または顺次で複数モデルに委托
- 結果を確認し、統合して最終出力を生成

これはLangGraph/CrewAI/AutoGenのような複雑なマルチエージェントシステムを、单个のブラックボックスAPIエンドポイントに封装したものだ。

### ベンチマーク性能：Claude Opus 4.8やGPT-5.5を上回る領域も

| ベンチマーク | Fugu Ultra | Claude Opus 4.8 | GPT-5.5 |
|-------------|-----------|-----------------|---------|
| **SWE-Bench Pro** | **73.7** | 69.2 | 58.6 |
| Humanity's Last Exam | 50.0 | 49.8 | - |
| MRCRv2（長文脈） | 93.6 | - | **94.8** |
| CTI-REALM（セキュリティ） | 69.4 | **69.6** | - |

ただし、AnthropicのFable 5（現在米政府輸出規制て利用不可）にはSWE-Bench Proで80.0とまだ及ばない。

### 実世界比較：Crossy Roadゲーム開発

Mark Studiosによる実演実験结果：

- **Fugu Ultra**：22分、89,000トークン、約$7.32
- **Claude Opus 4.8**：79分、940,000トークン、約$37.85

速度とコストではFuguが圧勝したが、「アプリケーション机能性とデザイン质量ではOpusが获胜」とSantosは评価した。

### 批判的な声

Prime Intellectの研究エンジニアElie Bakouchはこう指摘した：

> 「これは_closed source orchestrator on top of closed source models_です。以前はモデル 자체をコントロールできなかった，今はどのモデルが使われるか조차コントロールできない。 これは『AI主権』ではない」

---

## Self-Harness：AIエージェントが自らの実行ルールを改良

上海AI研究所のチームが6月22日に公开した「**Self-Harness**」フレームワークは、LLMベースのエージェントが自らの操作ルール（harness）を自动改良できる新パラダイムだ。

### なぜHarnessエンジニアリングが重要な的理由

AIエージェントの性能はbase modelだけでなく、周围的システム——system prompts、tools、memory、verification rules、orchestration logic——である**harness**にも大きく依存する。

従来の Harnessエンジニアリングのボトルネック：
- 手動のデバッグに頼る
- 直感ベースの反復が主
- 新しいモデル登场每に人間の调整が必需

### 3ステージ自己改良ループ

```
Weakness Mining → Harness Proposal → Proposal Validation
     (弱点発掘)    →    (改正案生成)   →    (検証)
```

1. **Weakness Mining**：初期harnessでタスクを実行し、失敗トレースからモデル特有のFailureパターンを検出
2. **Harness Proposal**：「proposer」ロールが各失敗メカニスム针对性的る改正案を生成
3. **Proposal Validation**：回帰テストを통해、性能向上が确认され、他タスクでの退化がない改正のみを反映

### 実験结果：性能が33〜60%向上

Terminal-Bench-2.0での評価结果：

| モデル | 性能向上幅度 |
|--------|------------|
| MiniMax M2.5 | **+60%** |
| Qwen3.5-35B-A3B | +45% |
| GLM-5 | +33% |

具体的な改良例：
- **MiniMax M2.5**：无尽的ループに陥っていた→50ツール呼び出し後に强制的に方向转换する「loop breaker」追加
- **Qwen-3.5**：同じコマンドを 반복→重複コマンド禁止 + 缺失ファイル即時再作成机制導入
- **GLM-5**：環境変更が維持されない→跨シェルセッションのPATH変数保持を導入

### 適用範囲と限界

**适さないケース**：医療判断、安全重要なインフラ、法律意思決定——評価が的主观的、遅延、非決定的、または間違いのコストが高い領域

**适するケース**：コーディング、内部ワークフロー自動化、DevOpsデータパイプライン

「Engineersはprompt tweakerから**feedback architect**へ」（Zhang氏）

---

## 参考リンク

- [Enterprise-grade AI image generation in 2 seconds — VentureBeat](https://venturebeat.com/technology/enterprise-grade-ai-image-generation-in-2-seconds-is-here-krea-2-raw-and-turbo-available-as-open-weights-under-custom-license)
- [Krea 2 Raw — Hugging Face](https://huggingface.co/krea/Krea-2-Raw)
- [Krea 2 Turbo — Hugging Face](https://huggingface.co/krea/Krea-2-Turbo)
- [Sakana AI Fugu — VentureBeat](https://venturebeat.com/orchestration/sakana-ai-launches-fugu-a-multi-agent-orchestration-platform-for-everyday-developers/)
- [Self-Harness — arXiv](https://arxiv.org/abs/2606.09498)
- [Self-Harness framework — VentureBeat](https://venturebeat.com/orchestration/researchers-introduce-self-harness-a-framework-that-lets-ai-agents-rewrite-their-own-rules-boosting-performance-up-to-60)

---

*（本文の情報は2026年6月24日時点のものです）*
