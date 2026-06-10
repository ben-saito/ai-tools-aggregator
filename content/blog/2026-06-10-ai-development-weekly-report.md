# AI開発週報：2026年6月第2週

今週のAI開発動向をまとめる。Anthropicの新型モデル発表、Googleのリアルタイム翻訳、Googleへの規制判断、OpenAIの自律化方針変更など、多岐にわたる話題が届いている。

---

## Anthropic、Claude Fable 5とMythos 5を発表

Anthropicは第六世代となるClaude Fable 5とClaude Mythos 5を公開した。Fable 5は全ベンチマークで過去最高のスコアを記録し、特に**プログラミング**、**画像処理**、**複雑なデータ分析**の分野で顕著な向上を達成した。一方、Mythos 5は当面は限定的なパートナーのみが利用でき、**創薬**や**ゲノム研究**などの領域で自律的に動作する能力が評価されている。

### 価格と展開

Fable 5の価格は**100万トークンあたり10ドル**で、Claude Opus 4.8の約2倍となる。Mythos 5は安全 guardrailを一部解除した状態で提供され、サイバーセキュリティなどの専門分野向けだ。Anthropicによると、長期的な複雑タスクにおいて性能差が顕著に拡大するという。

### 技術的注目点

- 同一ベースモデルを共有しつつ、Fable 5は一般的な安全 guardrailを装備
- Mythos 5はrestrictされた领域中では制限を解除し、パートナー企业提供
- ベンチマーク上の性能向上が示唆されているが、実際の token効率は未検証

---

## Google、Gemini 3.5でリアルタイム音声翻訳を開始

GoogleはGemini 3.5 Live Translateの提供を開始した。70言語以上対応のリアルタイム音声翻訳モデルで、話者の**声のトーン、話す速度、ピッチ**を維持したまま翻訳を続行する。文を待つことなく連続的に翻訳を行う点が特徴だ。

### 展開状況

- **Gemini Live API**および**Google AI Studio**経由で開発者に提供（プレビュー版）
- **Google Meet**では5言語から70言語以上に拡張、2000以上の言語組み合わせに対応
- **Google Translateアプリ**（Android / iOS）ですべてのユーザーが利用可能
- 東南アジアの配車サービス**Grab**がドライバーと乗客の通信支援として試験導入
- 生成された音声すべてに**SynthIDウォーターマーク**を不可聴帯に埋め込み

### 開発者視点

リアルタイム音声翻訳の商用化が進んでおり、API経由での実装が可能になった。翻訳品質のベンチマーク情報がまだ限定的である点に注意が必要だ。

---

## ドイツ裁判所、GoogleのAIオーバービューの誤情報についてGoogleを直接責任と認定

ドイツ・ミュンヘン地方裁判所は、GoogleのAIオーバービューが虚偽の内容を検索結果に表示した場合、Googleを直接責任者と認定する歴史的な判決を下した（事件番号：26 O 869/26）。

### 判决の內容

GoogleのAIオーバービューが2つのミュンヘン系出版社の名前を**詐欺やサブスクリプション陷阱**と誤って関連付けた事件に対し裁判所は以下の判断を示した。

- AIオーバービューはGoogle自身のコンテンツであり、単なる検索结果的リストではない
- 従来の検索エンジン事業者を免責する判例法はこの事例には適用されない
- 出版社のLinked先が示す內容とAIが生成した內容の混合は、AI独自の生成物と認定

### 法的影響

この判決は、AI生成コンテンツに対するプラットフォームの責任範畴に関する国際的な議論に火をつけることになる。欧盟のAI規則（AI Act）と絡み合い、今後の規制動向から目が離せない。

---

## OpenAI、2028年の完全自律研究を断念：「人間とマシンのタンデム」を提唱

OpenAIのSam Altman CEOとJakub Pachocki最高研究責任者は、2028年3月までに完全自律的なAI研究システムを構築するという従来の目標を大幅に見直した。新的ブログ記事て「人間とマシンの**タンデム**」という概念を提唱している。

### 方針の変更

2025年10月、OpenAIは「2028年3月までに研究を完全自律的に行えるAIを構築する」と表明していた。しかし新的記事ては、「2028年3月までに、社内外の研究 значи部分aiシステムと連携して行われるようになる可能性がある」と表現を改めた。

### AltmannとPachockiの主張

「完全にすべてを自動化することは私たちの望む未来ではありません。それは報われず、危険です。[...] 人類にとって重要な長期的な役割は、何をする価値があるかを決定することです。」

また、国际的な機関 통해フロンティア開発を减速させる可能性にも言及しており、safetyへの配慮を示している。

### 技術的示唆

自律性の限界が露呈しつつあり、完全自動化よりも**人間とAIの協調**に焦点が移っている。これは最近のAI開発潮流全般に言えることで、Agent開発でも人間の監督を重視する方向性が増している。

---

## 参考リンク

- [Anthropic releases Claude Fable 5 and Mythos 5 (The Decoder)](https://the-decoder.com/anthropic-releases-claude-fable-5-and-mythos-5-with-major-gains-in-coding-and-science/)
- [Google's Gemini 3.5 Live Translate (The Decoder)](https://the-decoder.com/googles-gemini-3-5-live-translate-delivers-real-time-voice-translation-across-70-languages/)
- [Landmark German ruling on Google AI Overviews (The Decoder)](https://the-decoder.com/landmark-german-ruling-declares-googles-ai-overviews-are-googles-own-words-and-makes-it-liable-for-false-answers/)
- [OpenAI says entirely automating everything is not the future we want (The Decoder)](https://the-decoder.com/openai-says-entirely-automating-everything-is-not-the-future-we-want/)

---

*（本文の情報は2026年6月10日時点のものです）*
