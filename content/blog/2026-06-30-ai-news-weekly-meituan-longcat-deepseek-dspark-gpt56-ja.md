# Meituan LongCat-2.0がOpenRouterを席巻——中国製LLMラッシュとOpenAI規制の行方

2026年6月末、AI業界は与中国規制、米政府的安全基準、新しいオープンソースモデルの三本が絡み合う複雑な局面を迎えている。DeepSeekのDSparkによる推論高速化、Meituanの1.6Tパラメータ超えるLongCat-2.0、そしてOpenAIのGPT-5.6 Sol/Terra/Luna限定公開——本周回った最重要AI開発ニュースを整理する。

---

## Meituan LongCat-2.0：中国 chips で学習した1.6T混合専門家モデルがOpenRouterを制霸

中国_INLINE_DELIVERY_APPのMeituanが6月29日、**LongCat-2.0** を正式にMITライセンスで公開した。1.6兆パラメータのMixture-of-Experts（MoE）システムであり、ネイティブで100万トークンコンテキストウィンドウをサポートする。

### 「Owl Alpha」の正体が明らかに

LongCat-2.0は過去2ヶ月間、匿名ステルスモデル「**Owl Alpha**」としてOpenRouterのグローバル開発者チャートで首位を維持していたモデルの正体だ。MeituanはHugging FaceとGitHubにも同時に公开发譜し、商業利用への敷居を 극적으로下였다。

**価格**：Cache hit 完全無料。这是一个极具竞争力的定价策略。

| モデル | 入力($/1M) | 出力($/1M) | 合計($/1M) |
|---|---|---|---|
| LongCat-2.0（限時プロモ） | $0.30 | $1.20 | $1.50 |
| deepseek-v4-flash | $0.14 | $0.28 | $0.42 |
| Gemini 3.1 Flash-Lite | $0.25 | $1.50 | $1.75 |
| LongCat-2.0（標準） | $0.75 | $2.95 | $3.70 |
| GPT-5.6 Luna | — | — | — |

限時プロモーション価格は$0.30/$1.20で、XiaomiのMiMo-V2.5 Flashと同水準の競争力を持つ。標準価格は$0.75/$2.95で、まだ最安値ではないが、1.6Tパラメータ級モデルとしては企业向け導入のハードルが大幅に下がった。

### 開発者視点での意味

1.6TパラメータのMoEモデルがMITライセンスで商用利用可能になったことで、**企業内AI導入の構図が変化**する。Claude CodeやGitHub Copilotと組み合わせた自律コーディングパイプラインで、最大利用率のワークロードをオフロードする選択肢が増える。

注目すべきは、このモデルが**完全に中国製チップで訓練**されている点。H100などのNVIDIA製GPUに頼らない訓練パイプラインの実証でもあり、地政学的な供給チェーン多様化の文脈でも重要なリリースだ。

---

## DeepSeek DSpark：推論速度最大85%高速化の予測的デコーディングフレームワーク

DeepSeekは6月29日、**DSpark**（MITライセンス）を公开发譜した。LLM推論を最大85%高速化する投機的デコーディングの新フレームワークで、モデルの精度を変えずに応答速度を改善する。

### 技術的背景：投機的デコーディングとは

従来のLLMはトークンを1つずつ逐次生成する。Senior Editorが各単語を承認してからWriterが次に進むようなプロセスであり、准确だが遅い。

DSparkは「探検家（scout）」提前走路几步、予想されるトークン系列をhintとして提示し、主力モデルがそれが安全かどうか高速に検証する。予想が正しければユーザーは待たされることなく高速にレスポンスを受け取り、予想が外れれば従来の逐次生成にfallbackする。

### ベンチマーク結果

DeepSeekの Production テスト结果：

- **DeepSeek-V4-Flash**（284Bパラメータ、13Bアクティブ）: ユーザー당 生成速度 **60〜85% 向上**（80トークン/秒目標）
- **DeepSeek-V4-Pro**（1.6Tパラメータ、49Bアクティブ）: ユーザー당 生成速度 **57〜78% 向上**（35トークン/秒目標）

aggregateスループットでは51%（V4-Flash）と52%（V4-Pro）の改善を達成した。

### 他のモデルへの適用

DSparkはDeepSeek-V4専用ではない。DeepSeekはAlibabaの**Qwen**とGoogleの**Gemma**向けのチェックポイントを公开发譜しており、企業チームが開放重みモデルにDSparkスタイルのドラフトモジュールを訓練・ファインチューニングできる。

这不是简单的API切换，但方法论是通用的——運営者が重みとサービングスタックを 控制できる環境であれば、其他モデルにも適用可能だ。

---

## OpenAI GPT-5.6 Sol / Terra / Luna：米政府向け限定预览、汉庣企业ユーザーは「数週間後」

OpenAIは6月26日、新フラグシップモデルファミリー **GPT-5.6** を公开发谱した。3つのバリアントで構成される：

- **Sol**：复杂なコーディング、セキュリティ研究向けの最上位ティア。$5.00/$30.00 per 1M トークン
- **Terra**：客服、ドキュメント分析向けの大量ビジネスタスク向け。$2.50/$15.00 per 1M トークン
- **Luna**：要約、下書き、日常的automation向けの軽量・低速・低成本オプション。$1/$6 per 1M トークン

### 限定预览の背景：米政府との調整

モデルは现在、米政府に共有された後、**約20の組織に限定公开**されている。一般公開は「数週間以内」を予定。

これは6月2日のTrump 大統領令が発動した。AIモデルの安全評価プロセスを30日以内に構築するよう指示する令で、OpenAIはこれに预先 맞춰动作確認の文脈で限定预览を実施した。

もう一つの背景には、Anthropicに対する米政府の **輸出管理措置** がある。Claude Fable 5のジェイルブレイク問題を受け、AnthropicはClaude Mythos 5の公开アクセス打切りに応じた。OpenAIも同理屈で、政府との調整の上で段階的リリースを選択した可能性がある。

### 企業への含意

GPT-5.6的全モデルが「High」リスク等级に分類された。サイバ性与生物/化学能力の両面で従来の最安クラスモデルより高い治理義務が発生しうる。

企业ユーザーはAPIリクエスト前にコンプライアンスパラメータの確認が必须になり、構造化トークンキャッシュシステムを活用したコスト最適化の重要性が増す。

---

## AI推理の经济学と供給チェーン：来期の展望

本周の3つのリリースは、異なる角度から同じ問いに答えた：**如何在降低AI導入コスト的同时保证质量**。

LongCat-2.0は**価格破壊**で、DSparkは**既存モデルの效率改善**で、GPT-5.6は**用途别最適化**で答える。地政学的制約の下で、中国チームと米国チームの戦略が鲜明に分岐しつつある局面だ。

开发者としては、单一モデルに依存しないマルチプロバイダ戦略の重要性が再確認された。周次で状況が变化する環境で、柔軟にワークロードを分配できる架构が競争優位を持つ。

---

## 参考リンク

- [VentureBeat: Meituan LongCat-2.0](https://venturebeat.com/ai/meituan-open-sources-longcat-2-0-the-1-6t-near-frontier-agentic-coding-model-thats-been-leading-openrouter-trained-entirely-on-chinese-chips)
- [VentureBeat: DeepSeek DSpark](https://venturebeat.com/ai/deepseek-open-sources-dspark-a-new-framework-to-speed-up-llm-inference-by-up-to-85)
- [VentureBeat: OpenAI GPT-5.6](https://venturebeat.com/ai/openai-unveils-gpt-5-6-sol-terra-and-luna-models-but-only-accessible-to-limited-preview-partners-for-now-per-us-gov)
- [DeepSeek GitHub: DSpark](https://github.com/deepseek-ai/DSpark)
- [LongCat-2.0 Hugging Face](https://huggingface.co/meituan/LongCat-2.0)

---

*（本文の情報は2026年6月30日時点のものです）*
