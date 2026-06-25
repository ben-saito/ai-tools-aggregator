# AI開発ニュース 2026年6月25日 — OpenAI独自チップ「Jalapeño」誕生、AnthropicがGoogleから人材引き抜き、米欧、半导体規制めぐり対立

2026年6月25日、AI業界は複数の大きな動きを見せている。OpenAIがBroadcomと提携して初めてとなる独自推論チップ「Jalapeño」を発表、AnthropicがGoogleのトップAI研究者を引き抜く続く一方、政治の舞台ではAI企業間の代理戦争がNY下院補選で激化するなど、軍事・技術・倫理の側面からAIをめぐる緊張が高まっている。

---

## OpenAI、独自推論チップ「Jalapeño」をBroadcomと共同開発

OpenAIは6月24日、初めて自社設計となるAIチップ「**Jalapeño**」の詳細を明らかにした。Broadcomとの協業で開発されたこのチップは、**推論（inference）処理に特化したアーキテクチャ**を採用し、現在の最先端代替品と比較して大幅に高い電力効率を実現するという。

### 技術的詳細

OpenAIのGreg Brockman会長によると、「OpenAIはワークロードを深く理解している。適切に支援されていない特定のワークロードを見つけ、それを実現できる何かをどのように構築できるか検討してきた」と語る。

Jalapeñoの主な特徴：

- **推論特化設計**: リアルタイムコーディングモデルの実行時に低コストで動作するよう最適化
- **電力効率**: 早期テスト結果では、性能-per・ワットで現行のstate-of-the-art代替品を大幅に上回る
- **コスト削減**: 小さな推論コストの削減でも大規模企業にとっては大きな利益に

OpenAIは発表声明で「OpenAIはフロンティアモデルの開発や、その上に立つ製品の構築だけでなく、その下のインフラも設計している。チップアーキテクチャ、カーネル、メモリシステム、ネットワーク、スケジューリング、デプロイメントシステム、プロダクション体験まで——OpenAIはスタック全体を横断して動作するため、各レイヤーが同じ目標に向けて最適化できる：モデルをより速く、より信頼性が高く、より手頃にする」と説明した。

当面、計算負荷の高い学習（pretraining）処理は引き続きNvidiaハードウェアに依存すると見られるが、推論システムの最適化はAI経済の基本的重要因素となり、全スタックで最適化を行う動きが広がっている。

---

## Anthropic、Googleからトップ研究者を引き抜き——Claude TagでSlack統合も強化

Anthropicは6月23日、GoogleからトップAI研究者を2名引き抜く動きを明らかにしました。**Jonas Adler**と**Alexander Pritzel**の2名がGoogleを離れAnthropicに参加する。どちらもGoogle DeepMindで重要な研究を手掛けてきた研究者で、Noam ShazeerやJohn Jumperといった有力科学者の流失に続く動き。

### 技術的ポイント

- **Google Brain Drainの深刻化**: 今年以来、Googleのトップ研究者がAnthropicへの流出を続けており、同社のAI開発能力への影響が懸念
- **Claude TagのSlack統合**: Anthropicは「Claude Tag」を通じてSlackにAIチームメンバーを常駐させる新機能をリリース。単なる生産性ツール超声、組織コンテキスト、機関知識、エンタープライズワークフローの取得を目指す戦略的展開

The Vergeによると、Anthropicのプロキシ戦争的PAC（政治活動委員会）が2700万美元を投じたNY-12下院補選で、同社支援候補のAlex Boresがわずかに敗北。OpenAIも同候補支援PACに多額を投資しており、両社の政治的関与が明らかに。

---

## 欧州、米国の半导体規制に反発——ASML問題が焦点

欧州が米国務省のChip戦争戦略に異論を唱えている。TechCrunchが伝えたところによると、ASMLのChristophe Fouquet CEOは5月のインタビューで、中国が現在購入できるのは古い世代のDeep Ultraviolet（DUV）ツール——約10年前に初めて出荷されたマシン——で、MATCH Actでこの机器的交易を制限する法案が審議中。

---

## Cerebras株急落——AIチップ企業の決算風景

AIチップ企業のCerebrasは初四半期の決算発表後、株価が急落した。同社は公開企業としての最初の決算報告で、主力事業の**粗利益率見通しが予想を下回った**ことを示し、投資家に不安を与えた。

---

## エンジニア職種、AI時代に最も回復力がある——新規採用の35%占める

SignalFireデータによると、**エンジニアは現在新規採用者の35%** 占め、AI導入声中も求人シェアを拡大している。「AIがエンジニアリング職を消灭させる」という一般的な予想に反し、エンジニア不缺宁县、採用市場で存在感が増している。

---

## 参考リンク

- [OpenAI unveils its first custom chip, built by Broadcom](https://techcrunch.com/2026/06/24/openai-unveils-its-first-custom-chip-built-by-broadcom/)
- [Anthropic's Claude Tag is learning your company, one Slack message at a time](https://techcrunch.com/2026/06/23/anthropics-claude-tag-is-learning-your-company-one-slack-message-at-a-time/)
- [AI researchers continue to leave Google for its rivals](https://techcrunch.com/2026/06/24/ai-researchers-continue-to-leave-google-for-its-rivals/)
- [The $27 million AI proxy war over Alex Bores ends in a draw](https://www.theverge.com/ai-artificial-intelligence/956263/alex-bores-new-york-12th-district-congressional-primary-results)
- [Europe is pushing back on Washington's chip war](https://techcrunch.com/2026/06/24/europe-is-pushing-back-on-washingtons-chip-war/)
- [Cerebras stock plunges after earnings](https://techcrunch.com/2026/06/24/cerebras-stock-plunges-after-earnings-as-ceo-says-margin-outlook-was-misunderstood/)
- [AI was supposed to kill engineering jobs, but new data suggests they're the most resilient](https://techcrunch.com/2026/06/24/ai-was-supposed-to-kill-engineering-jobs-but-new-data-suggests-theyre-most-resilient/)

---

*（本文の情報は2026年6月25日時点のものです）*
