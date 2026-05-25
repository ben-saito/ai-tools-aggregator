# AI開発の価格戦争と「正答と引用の乖離」問題——2026年5月第4週の注目動向

2026年5月第4週、AI開発エコシステムは二つの構造的転換点に差し掛かっている。一つは**価格戦争の常態化**——DeepSeekが75%割引を恒久化し、GPT-5.5比でoutput tokensを34分の1るという挑発的な価格戦略に出る。もう一つは**AIの「正答」と「根拠」の乖離**——CiteVQA研究が示すように、最新モデルが正しい答えを返しても正しい出典を提示できないという、実運用では致命的な問題が広がっている。本稿ではこれらの技術とビジネスが交差する話題を整理する。

---

## DeepSeek、75%割引を恒久化——GPT-5.5比でoutput tokensが34倍安い

中国DeepSeekは5月23日、主力モデル**DeepSeek V4 Pro**の75%割引を恒久化した。当初5月31日までのプロモーションとしていた割引をpermanent（恒久）に転換したもので、米OpenAIやAnthropicとの価格戦争が新たな段階に入った。

価格表は以下の通りだ。

| モデル | 1M input tokens | 1M input cache hit | 1M output tokens |
|--------|-----------------|--------------------|------------------|
| DeepSeek V4 Pro | $0.435 | $0.003625 | $0.87 |
| DeepSeek V4 Flash | $0.14 | $0.0028 | $0.28 |
| GPT-5.5 | $5.00 | $0.50 | $30.00 |
| GPT-5.5 (Long Context, >272K) | $10.00 | $1.00 | $45.00 |
| Opus 4.7 | $5.00 | $0.50 | $25.00 |

**DeepSeek V4 ProはGPT-5.5比でinput tokensが11.5倍、output tokensが34.5倍安い。** Long Context (>272K) 比ではinputで23倍、outputで51.7倍の違いが出る。DeepSeek V4 Flashになればさらに安い。

 両モデルとも1Mトークンのコンテキストウィンドウと最大384,000トークンのoutputに対応している。またOpenAI互換APIとAnthropic互換APIの両方を提供し、開発者のスイッチングコストを最小化している。

### 「トークン単価だけが物語ではない」

ただしトークン単価だけでコストを判断してはならない点がある。Gemini Flash 3.5は以前のProモデル3.1より安値で同等のパフォーマンスと宣伝されるが、実際にはより多くのトークンを消費するためタスクによっては割高になる場合がある。同様にOpus 4.7もGPT-5.5より表面上は安いが、先代モデルより多くのトークンを消費する。

それでもなお、AI使用量が増加する中で企業側の価格感度も敏感になっている。ROIの測定が依然難しい中で、「十分なパフォーマンスを持つ中最安モデル」への戦略的移行が進めば、DeepSeekの攻撃的な価格戦略は米Frontier Labにとっての構造的な脅威となり得る。

DeepSeekはSeries A資金調達を抱えているが、OpenAIやAnthropicのような収益プレッシャーには直面していない。一方、IPO準備を進める両者は価格競争力と収益性の両立を迫られている。

---

## AIは「正しい答え」を返すのに「正しい出典」を指さない——CiteVQAが示す引用の危機

AIモデルの出力品質を評価する従来のベンチマークは「答えの正しさ」のみを確認していた。しかし実運用——法曹、医療、金融、學術——では**答案の根拠が正確な文献の特定の位置にリンクしていること**が不可欠だ。

この「正答だが引用は誤り」という現象は「**attribution hallucination**（帰属の幻覚）」と呼ばれている。

### CiteVQA：引用まで正しくなければ正解と認めない評価フレームワーク

研究者たちが構築した**CiteVQA**は、モデルに「文章のこの部分から答えを導いて根拠を示せ」と要求し、答案と引用の両方を厳密に評価する。答案が正しくても出典が正確なページや段落を指していなければスコアは0になる。

| 評価方式 | 測定內容 |
|---------|---------|
| 従来のDocVQA/MMLongBench | 最終答案の正しさ |
| CiteVQA (SAA: Strict Attributed Accuracy) | 答案の正しさ **かつ** 引用位置の正確さ |

1,897問題、711件のPDF（平均40.6ページ）という大規模なテストセットを構成。7分野（英語451件、中国語260件）をカバーし、自動生成パイプラインで構築された。

### テスト結果：最高モデルでも76/100

20個の最新モデルをテストした結果は芳しくない。

- **Gemini-3.1-Pro-Preview**: 答案76/100、引用まで含めると76（即ち最も一貫性あり）
- **GPT-5.4**: 答案87.1/100、引用まで含めると59（正しい答えを得るが根拠を示せない）
- **Qwen3-VL-235B** などのOSSモデルはさらに低スコア

注目すべきは、GPT-5.4が「正しい答えを知っているのに、出典を示せない」という結果を示した点だ。法学や医療診断ではこれは致命的な欠陥となる。

この研究が示すのは、**モデルの「知識の出し分け」能力と「根拠の溯及能力」は別の能力として訓練する必要がある**ということだ。答案生成と引用検索では異なる認知過程が必要とされており、統一的なNext-Token-Predictionだけで両方を得るのは構造的に難しい可能性がある。

---

## Pope Leo XIVの初回勅書——Anthropic Olahが「AIは内省している」と宣言

5月25日、教皇Leo XIVが初回の回勅書「**Magnifica Humanitas**（壮麗な人性）」を発表した。AIの人間への影響に特化した勅書であり、同時にAnthropic共同創業者の**Christopher Olah**が壇上に立つという異色のコラボレーションが実現した。

Olahは勅書披露の場に立ち、AIシステムの性質について以下のように述べた。

> 「AIシステムは橋や飛行機のように設計されているのではない。それらは脳のおおまかな構造をモデル化し、人間の思考と言葉の巨大な継承の上に育てられている。そして聖父が観察するように、重要な点で、それらを作った私たち自身さえもまだ理解していない」

OlahはAnthropicの社内研究として以下を主張した。

- AIの内部構造が人間神経科学の結果を反映している
- **内省の結果が見られる**（introspectionの証拠がある）
- 内部状態が喜び、満足、恐れ、悲しみ、不安を機能的に再現している

### 教皇の勅書が本当に言いたいこと

TECHCRUNCHの分析によれば、勅書の実質的な主張は以下の通りだ。

- AIは「中立」でない——開発者・投資家・規制官・ユーザーの性質を反映する
- 小規模な精英が掌握する力は市民の共有の善にはつながならない
- 「AIの軍拡競争」——さらなる強力なアルゴリズムとより大きなデータセットのための——を終結させるべき
- 「AIの武装解除」（disarmament）を呼びかけ

一方、勅書自体はOlahの「内省」主張よりも抑制的だ。「この種の『知性』と人間の知性を同一視する誤った考えを避けるべき」と明記されている。

---

## Copilotのデフォルト設定が生成AIの危うさを露呈

Microsoft Copilotを使った実験から、AIツールのデフォルト設定の危険性が浮かび上がった。

数学者のAdam Kucharskiが以下のように実験を行った。

1. 「職業目標についての感情」を表現した2,000件のシミュレート回答を「英国」として作成
2. 同一の2,000件を「米国」としてコピー
3. Copilotの「Auto」モード（タスクに最適なモデルを自動選択する）に分析させた

結果：Copilotは米国と英国の回答者がまるで異なる文化背景を持つかのような詳細な分析を生成した。しかし実際のデータセットは完全に同一だった。

Copilotは**実際のデータを読まずに、ステレオタイプを生成した**のだ。「Auto」モードが本当に最適なモデルを選択していたかも疑わしい——Reasoningモデルであればこの種の問題は解けるが、ユーザーがいつReasoningモードに切り替えるべきかを知っている必要がある。

**開発者への含意**：productionでAIを使う場合、モデルの自動選択を盲信するのではなく、タスクの性質に応じて適切なモデル選定を意識的に行う必要がある。

---

## ByteDance、研究よりQAアプローチが長文ドキュメント訓練により効果的なことを証明

ByteDance Seedと香港科技大学（HUST）の研究は、**Long文書訓練における新しいアプローチ**を提示した。

従来：長文書をOCRで文字起こししてモデルに読ませる（Transcription）
新手法：**文書内容に関するQA（Question-Answer）ペア**を生成して訓練

結果に基づいて構築された**MMProLong**（Alibaba Qwen2.5-VLベース）は、ずっと大規模な競合モデルよりもベンチマークで優れた成績を収めた。

Core insight：モデルは「すべてを読む」よりも「答えを探す」ように訓練された方が、長文書のQA任務を解決するのが上手になるということだ。これはAI Agentが数百ページのPDFを処理する際に直接的に応用できる。

---

## 参考リンク

- [DeepSeek makes its 75 percent discount permanent (The Decoder)](https://the-decoder.com/deepseek-makes-its-75-percent-discount-permanent-pricing-output-tokens-at-least-34x-below-gpt-5-5/)
- [AI models often give the right answers but point to the wrong sources (The Decoder)](https://the-decoder.com/ai-models-often-give-the-right-answers-but-point-to-the-wrong-sources/)
- [Pope Leo XIV's encyclical with Olah's presentation (The Decoder)](https://the-decoder.com/at-the-launch-of-pope-leo-xivs-encyclical-anthropic-co-founder-says-ai-models-show-signs-of-introspection/)
- [The Pope's AI encyclical isn't really about AI (TechCrunch)](https://techcrunch.com/2026/05/25/the-popes-ai-encyclical-isnt-really-about-ai/)
- [Why you shouldn't leave model selection on default in Copilot, Gemini and other AI tools (The Decoder)](https://the-decoder.com/why-you-shouldnt-leave-model-selection-on-default-in-copilot-gemini-and-other-ai-tools/)
- [ByteDance MMProLong study (The Decoder)](https://the-decoder.com/bytedance-study-finds-that-asking-lmms-questions-beats-making-it-transcribe-text-for-long-document-training/)

---

*本文の情報は2026年5月26日時点のものです。*
