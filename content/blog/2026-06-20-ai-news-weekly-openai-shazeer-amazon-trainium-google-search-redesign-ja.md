# AI開発ニュース weekly — 2026年6月第3週

OpenAIがIPOに向けて有力プレイヤーを次々と引き抜き、AmazonがNVIDIA競合のAIチップ販売に本腰を入れる今週。Googleは25年ぶりに検索ボックスを大胆に刷新し、検索体験そのものを転換点上にある。本稿では本周気になったAI開発相关新闻をまとめる。

---

## OpenAI、IPO前にNoam ShazeerとDean Ballを採用——AI業界の人員流動性が加速

OpenAIが、IPO（新規株式公開）に向けた組織強化を進めている。TechCrunchによると、OpenAIは同一週内に**Google DeepMindからTransformer論文の共著者であるNoam Shazeer**を迎え入れるとともに、**元Trump政権のAI政策担当官Dean Ball**を採用したことが明らかになった。

Noam Shazeerは2017年の"Atencion Is All You Need"論文の共著자로知られる。同論文は現代LLMの基幹技術であるTransformerアーキテクチャを提唱した歴史的論文であり、Shazeerの採用はOpenAIの技術的基盤を一層強化する狙いがあるとされる。

Dean BallはTrump政権下のAI政策立案に関与した人物で、規制・政策面での専門性を直すとしている。IPOに向けたガバナンス強化と、政策対応力の両面で”即戦力”を迎入れれた形だ。

AIセクターではIPO前の人員補強が流行している。米Oracle創業者のLarry EllisonがSalesforce株を大量売却、AppleがArmとの長期ライセンス契約を締結——各社が独立性強化や経営安定化に動く中、OpenAIも同様の舵切りと見られる。

---

## Amazon、AWS向けAIチップTrainiumの外販を検討——$500億の巨大市場に参入

Amazonが、同社の描くAIチップ**Trainium**を外部データセンター向けに販売する可能性浮上した。TechCrunchの報道によると、Andy Jassy CEOはこの取り組みが**年間500億ドルのビジネス機会**になり得ると認識しており、NVIDIA依存からの脱却を加速させる戦略的転換として注目される。

現在AWSはAIトレーニング用途にNVIDIA製GPUを大量導入しているが、供給逼迫とコスト高が慢性化している。Amazon製のTrainiumはAWS、独自のカスタマイズが可能で、NVIDIA製よりもコスト効率的な選択肢になる可能性がある。

現在AWSは顧客企業との交渉段階にあるとされる。正式な外販体制が確立されれば、GoogleのTPU/AzureのMaia 100BTC对阵米Intel製と並び、主要クラウドベンダーが自社チップを外販する構図が完成する。

**AIインフラの垂直統合**がさらに進展することで、小規模なAIスタートアップや研究機関のハードウェアへのアクセスが改善される可能性がある一方、NVIDIAにとっては新たな強力な競合が加わることになる。

---

## Google、25年ぶりに検索ボックスを刷新——AI ModeとAI Overviewsを統合

Googleが、同社にとって約25年ぶりとなる検索ボックスの大幅刷新を発表した。VentureBeatの報道によると、今回の刷新は以下の要素で構成される:

- **検索ボックスの動的な拡張**: 長い会話的なクエリを最初から受け入れられるよう設計変更
- **マルチモーダル対応**: テキスト、画像、PDF、视频、Chromeタブの直接アップロードが可能に
- **AI OverviewsとAI Modeの統合**: 2つのAI検索体験を1つのシームレスなフローに統合
- **Gemini 3.5 Flashによる駆動**: 新たな検索体験はGemini 3.5 Flashで動作し、前モデルのGemini 3.1 Proより4倍高速という

特筆すべきは、Googleの検索ボックスという**全世界の約20億人が毎日使うインターフェース**そのものを作り変えるという点。Liz Reid VP（Search責任者）は「25年以上の歴史で最大のアップグレード」と語っている。

AI Modeクエリは四半期ごとに2倍ずつ増加しており、GoogleはAI機能検索が従来検索を浸食するのではなく、相乗効果で全体的な検索量を増やすと主張している。Sundar Pichai CEOは「Search is the most used AI product in the world」と述懐した。

---

## Snap、AI動画チームを新会社Dotmoとして分離——コスト問題が背景に

Snapが社内のAI動画開発チームを新会社**Dotmo**として分離することを明かした。TechCrunchの報道によると、分離の背景にはAI開発に掛かる多額のコストがある。

DotmoにはSnapカウンセから転籍するスタッフが中心に組成される。Snapは以前にもCrystal（AR人格）や他の内部分析家をスピンオフしており、「コスト削減」と「才能のリテンション」を同時に実現する手段としてスピンオフを活用している。

AI動画生成の分野はRunway、Pika、OpenAIのSoraなどが激しく競合する中、独立した組織として柔軟性を持たせることで迅速な意思決定と資金調達が可能になるとしている。

---

## Baseten、AI推論で$15億ンを新規調達——「推論ゴールドラッシュ」が加速

AI推論インフラのスタートアップ**Baseten**が、約$15億ンを新規調達に向けていることが分かった。TechCrunchの報道によると、直近の大型ラウンドに続く、今回の評価額は**$130億**に達する見込み。

BasetenはLLMの推論（Inference）特化型インフラを提供しており、「推論ゴールドラッシュ」の最中にいる企業の1つ。Claude CodeやOpenAI o1/o3などの段階的思考モデル、Kimi k1.5などのlonger CoTモデルが主流になるにつれ、推論時の計算コスト（＝収益機会）が急増している。

推論インフラはトレーニングインフラよりも収益化しやすい特性を持ち、Basetenの大型調達は市場成長性を如実に示している。

---

## FERC、AIデータセンターにグリッドへの優先接続を命令——電力不足問題は先送り

米エネルギー規制委員会（FERC）は、AIデータセンターが電力グリッドに優先的に接続できるfast laneを設ける裁定をくだした。TechCrunchのClimate関連報道によると、この裁定はデータセンターの電力不足問題を根本的に解決するものではなく、あくまで**接続プロセスの迅速化**にとどまる。

AIワークロードは莫大な電力を消費し、単一のLLMトレーニング一回分に30,000世帯の年間消費量に相当するとの推計もある。データセンター事業者らが容量確保を急ぐ中、グリッド接続の待ち行列が主なボトルネックとなっている。

この裁定には批判的な見方もある。グリッド全体の安定性を損なう可能性があるからだ。AIセクターの急速な成長とエネルギー規制のギャップが、能源問題の新たな火種として浮上している。

---

## Elastic、DeductiveAIを最大$8500万で買収——AI+SREの融合

Elasticが、AIを活用したソフトウェアデバッグスタートアップ**DeductiveAI**を最大8500万米ドルで買収することで合意した。TechCrunchのExclusive報道によると、DeductiveAIはCRVが支援するスタートアップで、AIを使ってソフトウェアのバグを自動検出・修復するプラットフォームを提供している。

DeductiveAIは立ち上げてからわずか3年前の若いスタートアップであり、Elasticの観測分野（observability）へのAI統合を加速させる戦略的買収と見られる。

---

## 参考リンク

- [The US says ASML's top chip tool may be in China. ASML says it isn't — TechCrunch](https://techcrunch.com/2026/06/19/the-us-says-asmls-top-chip-tool-may-be-in-china-asml-says-it-isnt/)
- [OpenAI is bringing on some big guns in the lead-up to its IPO — TechCrunch](https://techcrunch.com/2026/06/18/openai-is-bringing-on-some-big-guns-in-the-lead-up-to-its-ipo/)
- [Amazon hopes to challenge Nvidia more directly by selling its AI chips — TechCrunch](https://techcrunch.com/2026/06/18/amazon-hopes-to-challenge-nvidia-more-directly-by-selling-its-ai-chips/)
- [AI inference startup Baseten reportedly raising $1.5B — TechCrunch](https://techcrunch.com/2026/06/18/ai-inference-startup-baseten-reportedly-raising-1-5b-months-after-its-last-mega-round/)
- [Snap spins off AI video team into new company, Dotmo — TechCrunch](https://techcrunch.com/2026/06/18/snap-spins-off-ai-video-team-into-new-company-dotmo-due-to-costs/)
- [Google just redesigned the search box for the first time in 25 years — VentureBeat](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)
- [Source: Elastic agrees to buy CRV-backed DeductiveAI for up to $85M — TechCrunch](https://techcrunch.com/2026/06/18/source-elastic-agrees-to-buy-crv-backed-deductiveai-for-up-to-85m/)

---

*（本文の情報は2026年6月19日時点のものです）*
