# AI開発ニュース週間まとめ（2026年6月15日週）

6月第3週のAI開発ニュースをまとめる。G7首脳会議へのOpenAI・Google DeepMind・AnthropicのCEO級出席、Googleの1秒あたり1,000トークン生成可能な新モデル、DiffusionGemmaの4倍高速化など、AI治理と推論速度の両面で大きな進展があった1週間となった。

---

## G7首脳会議にOpenAI・Google DeepMind・AnthropicのCEO級が初出席

6月12日（日本時間13日）、先進7カ国（G7）首脳会議に**OpenAI、Google DeepMind、AnthropicのCEO級幹部**が初参加することが明らかになった。Reutersの報道によれば、岸田首相とバイデン大統領の主催により、AIの安全性とオンライン安全性が主要議題として議論される。

Dataconomyによれば这次の出席は「AI企業と政府間の対話 mechanism の常态化」を意味するものであり、各社は自主規制ではなく**政府主導の国際的なAI治理フレームワーク**への関与を選択した。bioweapon prevention（生物兵器拡散防止）のため、OpenAI、Anthropic、GoogleのCEO3社がDNAスクリーニング法の制定を共同提案したことも合わせて、AI安全に対する業界全体のコミットメントが急速に進んでいる。

### 生物兵器拡散防止への業界横断的な動き

先立つ6月4日、OpenAI、Anthropic、Google DeepMindの3社がbioweapon prevention（生物兵器拡散防止）のために手を組むことも明らかになった。Benzingaの報道によれば、3社は「悪意ある行為者によるAIの悪用」を防止するための共同研究基金を設立することで合意した。AIの爆発的な普及に対し、企業単独では対応できない課題が存在することを、業界大手が初めて公式に認めた形となる。

---

## Google、新AIモデルがNvidia GPUで1秒あたり1,000トークン生成を達成

6月11日、Googleが Nvidia GPU上で**1秒あたり1,000トークン**を生成可能な新AIモデルを報告した。Yellow.comの報道によれば、この速度は従来のモデルと比較して大幅に向上しており、実用的な対話AI应用中において大きな役割を果たす可能性がある。

この成果は**inference optimization（推論最適化）**の分野における最近の進歩を反映しており、Googleが単にモデルの性能向上だけでなく、デプロイメントの効率性にも重点を置いていることを示している。

---

## Google、DiffusionGemmaを正式リリース——4倍高速化と自己修正機構

6月10日、Googleは**DiffusionGemma**を正式にリリースした。Ars Technicaの報道によれば、このモデルは従来のdiffusionベースの画像生成とは異なり、テキスト生成にも適用可能な新しいアーキテクチャを採用している。

DiffusionGemmaの主要な特徴:
- **4倍高速化**: 従来のモデルと比較して推論速度が4倍向上
- **256トークンの並列生成**: ブロック単位でトークンを書き出すため、consumer GPUでも高速推論が可能
- **自己修正機構**: 生成过程中に自らエラーを検出・修正する機能を搭載

一方、オープンエンドのタスクでは弱点があり、創造的なنسي解答보다는構造化された出力が求められる場面で強みを発揮する。画像生成ではなく**テキスト生成**にdiffusion機構を適用した点で、Googleのモデルアーキテクチャにおける重要な転換となる。

---

## Google DeepMind、$10Mの研究基金でAIの「群行動」を研究

6月11日、Google DeepMindは**1,000万美元（約15億円）**の研究基金を発表し、AIシステムがグループとしてどのように行動するかの研究を支援する。Crypto Briefingの報道によれば、この基金は「AIの社会的な影響」を定量的に評価するための新しい研究フレームワークの構築を目指す。

DeepMindのDemis Hassabis CEOは「单个のAIモデルの安全性だけでなく、複数のAIシステムが相互に作用する際の動作」を理解することが重要」と述べており、マルチエージェントAI研究方向への投資を拡大している。

---

## OpenAI、ChatGPTの「最大の変革」を主導するエンジニアが明らかに

6月11日（米国時間）、WIREDはOpenAIのエンジニアがChatGPTの「**最大の変革**」を主導していることを報じた。詳細情報は限定的だが、OpenAIがユーザーエクスペリエンスとモデル性能の両面で大幅な改善を計画している可能性が示唆されている。

---

## Google DeepMindとMIT、「AIエージェント越多＝性能向上ではない」と証明

Google DeepMindとMITの研究者は**「更多的AIエージェントがあれば性能が向上するわけではない」**ことを新しい研究で証明した。the-decoder.comの報道によれば、複数のAIエージェントを同時に動作させる場合、通信オーバーヘッドと一貫性の問題が性能向上を阻害することが分かった。

この発見は 현재，「エージェント数量的增加」を性能向上の手段として検討している企業にとって重要な警示意义を有する。

---

## 参考リンク

- [Tech executives to attend G7 summit as leaders address AI](https://www.reuters.com)
- [AI Leaders From OpenAI, Google DeepMind, And Anthropic To Join G7 Summit](https://dataconomy.com)
- [Google's latest DiffusionGemma open AI model comes with a 4x speed boost](https://arstechnica.com)
- [Google's New AI Model Hits 1,000 Tokens Per Second On Nvidia GPUs](https://yellow.com)
- [Google DeepMind launches $10M research fund to study how AI systems behave in groups](https://cryptobriefing.com)
- [Meet the OpenAI Engineer Leading ChatGPT's Biggest Transformation Yet](https://www.wired.com)
- [More AI agents isn't always better, new Google and MIT study finds](https://the-decoder.com)
- [AI Rivals OpenAI, Google Deepmind And Anthropic Unite On Bioweapon Prevention](https://www.benzinga.com)
- [OpenAI, Anthropic, Google CEOs call for DNA screening law](https://qz.com)

---

*（本文の情報は2026年6月15日時点のものです）*
