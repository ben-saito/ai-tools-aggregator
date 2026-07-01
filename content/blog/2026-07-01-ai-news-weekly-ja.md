# AI開発ニュースまとめ（2026年6月30日〜7月1日）

2026年下半期の幕開けとともに、AI業界は一口に「慢了」という言葉では説明できない動きを見せている。AnthropicのIPOへ向けた主力モデルの価格戦略、中国発のオープンソース勢による実用的な技術披露、そして推論高速化フレームワークの登場——今週のAI開発ニュースを3本柱でまとめる。

---

## AnthropicがClaude Sonnet 5を発表、旗艦モデルに肉薄する性能を60%安いコストで提供

Anthropicは2026年6月30日、**Claude Sonnet 5** を正式にリリースした。同社はこのモデルを「史上最もagenticなSonnetモデル」と表現しており、エージェント型AIの中核的能力である**マルチステップワークフローの自律実行**に重点を置いている。

### ベンチマーク結果：Opus 4.8との差距が縮小

Sonnet 5の主要ベンチマークは以下の通り：

- **SWE-bench Pro**（エージェント型コーディング）：63.2%（Sonnet 4.6比 +5.1ポイント、Opus 4.8比 -6.0ポイント）
- **Terminal-Bench 2.1**（コーディング評価）：80.4%（Opus 4.8比 -2.3ポイント）
- **Humanity's Last Exam**（多分野推論、ツール使用時）：57.4%（Opus 4.8の57.9%とほぼ並ぶ）
- **OSWorld-Verified**（コンピュータ使用タスク）：81.2%（前バージョン78.5%から上昇）
- **GDPval-AA v2**（ナレッジワーク）：1,618（Opus 4.8の1,615を僅かに上回る）

### 価格戦略：IPOをにらんだ民主化

導入時のAPI価格は**入力 $2/百万トークン、出力 $10/百万トークン**（8月31日まで）で、その後 $3/$15 に移行する。これは旗艦モデルOpus 4.8の$5/$25と比較して、約60%安い設定だ。Free・Proプランのデフォルトモデルとしても採用され、Max・Team・Enterprise向けにも提供される。

Cursorの共同創業者Sualeh Asif氏やZapierのエンジニアDaniel Shepard氏の証言では、「複数のステップをまたぐ作業が以前より完了するようになった」と報告されており、エージェントが途中で止まる「80%問題」に対する実用的解決策として評価されている。

---

## MeituanがLongCat-2.0をMITライセンスで公開——中国製チップだけで学習した1.6TパラメータのMoEモデル

中国フードデリバリー大手のMeituanは2026年6月29日、**LongCat-2.0** をGitHub・Hugging Face・Nativeプラットフォームで公開した。このモデルは過去2ヶ月間、匿名モデル「Owl Alpha」としてOpenRouterのグローバル開発者チャートを席巻してきた正体であり、その面白さがようやく明かされた。

### スペックと料金

- **パラメータ数**：1.6兆（MoE: Mixture-of-Experts）
- **アクティブパラメータ**：実運用時は少数の専門家のみを活性化
- **コンテキストウィンドウ**：Native 100万トークン
- **ライセンス**：MIT License（商用利用可）

料金テーブルを見ると、限定Promo価格では**入力 $0.30/百万トークン、出力 $1.20/百万トークン**という破格の安値で、DeepSeek-V4-FlashやGemini 3.1 Flash-Liteと遜色ない水準になっている。標準価格は$0.75/$2.95だが、それでもトップ層と比較して競争力のある料金体系だ。

注目すべきは、**コンテキストキャッシュ_hitは全て無料**という料金設計と、Token Packという時間限定フラッシュセール方式の導入だ。weightsの完全な公開はまだだが（即将公開予告）、アーキテクチャはMITライセンスの下で公開されており、企業統合の法的柔軟性は最大化されている。

---

## DeepSeekがDSparkを公開——推論を最大85%高速化する投機的デコーディングフレームワーク

DeepSeekは2026年6月29日、**DSpark**（DeepSpecファミリー）をMITライセンスで公開した。LLM推論の高速化フレームワークであり、DeepSeek-V4-FlashおよびV4-Proに適用された結果が印象的だ。

### 投機的デコーディングの実装

通常のLLMはテキストを「川の一つの石を踏み越えるように」一トークンずつ生成する。DSparkは「偵察役」を先行させ、複数のステップを予測させ、大型モデルが安全かを効率的にチェックする仕組みだ。

DeepSeekの公表データ：

| モデル | ユーザー体感速度改善 | aggregate スループット改善 |
|--------|---------------------|--------------------------|
| V4-Flash | **60%〜85%** | 51%（80 tokens/sec 目標時） |
| V4-Pro | **57%〜78%** | 52%（35 tokens/sec 目標時） |

661%や406%という大きな数値も報告されているが、これらは古いMTP-1ベースラインがボトルネックに達した状態で測られた極端なケースだ。「85%」はユーザーが直に感じる速度改善を示している。

### 適用範囲

DSparkはDeepSeek-V4だけでなく、**Alibaba QwenやGoogle Gemma**など他社のオープンモデルファミリーにも適用可能だ。weightsとサービングスタックを制御する事業者が、自分のターゲットモデル用に投機的デコードモジュールを訓練・ファインチューニングできる。

---

## 参考リンク

- [VentureBeat: Anthropic launches Claude Sonnet 5](https://venturebeat.com/ai/anthropic-launches-claude-sonnet-5-at-a-steep-discount-to-its-top-model-as-the-company-races-toward-a-blockbuster-ipo/)
- [VentureBeat: Meituan open sources LongCat-2.0](https://venturebeat.com/ai/meituan-open-sources-longcat-2-0-the-1-6t-near-frontier-agentic-coding-model-thats-been-leading-openrouter-trained-entirely-on-chinese-chips/)
- [VentureBeat: DeepSeek open sources DSpark](https://venturebeat.com/ai/deepseek-open-sources-dspark-a-new-framework-to-speed-up-llm-inference-by-up-to-85)
- [DeepSeek GitHub (DSpark)](https://github.com/deepseek-ai)
- [LongCat-2.0 (Meituan)](https://huggingface.co/meituan)

---

*（本文の情報は2026年7月1日時点のものです）*
