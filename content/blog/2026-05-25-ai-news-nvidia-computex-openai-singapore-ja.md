# AI開発 最新ニュースまとめ（2026年5月25日時点）

NVIDIAのCOMPUTEX受賞からOpenAIのシンガポールLAB設立まで、今週はAI産業の大型アップデートが飛び込んだ。AI基盤モデルの競争激化と、各国のAIガバナンス框架の整備が同時に進行している様子が分かる。

---

## NVIDIA、COMPUTEX 2026で Vera Rubin NVL72 など4冠受賞

NVIDIAはCOMPUTEX 2026のBest Choice Awardsにて、**Vera Rubin NVL72**でGolden AwardとSustainable Tech Special Awardを、WLAN向けでは**Jetson Thor**でGolden Awardを獲得した。2026年5月21日の発表。

Vera Rubin NVL72は36個のNVIDIA Vera CPUと72個のNVIDIA Rubin GPUをNVLink Switchで接続したラックスケールAIスパコンで、**1秒あたり約200万パーツ**から構成され、台湾のエコシステムパートナー150社以上が製造に関わる大規模製品。推論性能は1ワットあたり10倍向上し、1トークンあたりのコストを10分の1に抑えられるとしている。

Jensen Huang CEOは6月1日（台北時間11時）にCOMPUTEXでキーノートを実施予定で、Vera Rubinの詳細や台北オフィスの設計公開が予告されている。

### Jetson Thor：エッジAI・ロボティクス向け7.5倍性能向上

Jetson ThorはBlackwell GPUアーキテクチャベースに、最大2,070 FP4 TFLOPSのAI性能を達成。前世代Jetson Orin 대비**7.5倍の演算性能と3.5倍のエネルギー効率**を実現する。40〜130ワットで動作し、ロボティクス、産業用システム、医療デバイス向けに出荷済み。

---

## OpenAI、シンガポールにApplied AI Lab設立——IMDAがAgentic AI框架を更新

OpenAIは5月22日、**：ATxSummitで「OpenAI for Singapore」**を発表。初めてとなる米国以外のApplied AI Labをシンガポールに設立する。Mozart/Ministry of Digital Development and Information（MDII）とのパートナーシップで、**S$3億以上**を約束。

同LABでは200人以上の技術職を創出し、政府機関や現地パートナーと教育・労働力プログラムを実施する。教育部GovTechとは連携し、OpenAI Academyのシンガポール支部展開やCodex for Teachersハッカソン開催も予定。

### Agentic AI治理框架、60以上の組織フィードバックを経て更新

IMDA（Info-comm Media Development Authority）は2026年1月のWorld Economic Forumで公開した**Agentic AI治理框架**を更新した。60以上の組織（AWS、DBS、Google、Salesforceなど）からフィードバックを受け、以下の分野を追加：

- **マルチエージェントシステム**のリスク
- **サードパーティエージェント**の考慮
- **自動化バイアス**防范
- **人間の責任所在**明确化

ケーススタディでは、Tencentの**CodeBuddy**（自然言語でコード生成・ デプロイを行うエージェントシステム）が紹介されている。リスクのあるコマンドは事前承認後も承認が必要という設計。

---

## Ferrari × IBM：F1ファン体験向上のためのAI活用

TechCrunchが独占報じたところによると、Scuderia Ferrari HPとIBMはF1におけるファン体験の再定義を進めている。IBMのAI技術を活用し、Fan engagementのパーソナライズ化やデータ分析高度化を目指す取り組み。

### 技術的詳細

IBMのAIプラットフォームを使用し、レース中のリアルタイムデータと историческихデータを統合。ファン一人ひとりの偏好を分析し、パーソナライズされたコンテンツや予測を提供する。F1チームのオペレーション最適化にもAIを活用している可能性がある。

---

## AIで死亡操縦士の声を蘇生——NTSB、通話記録へのアクセス一時遮断

TechCrunchの報告によると、**AIを使用して航空機のコックピット録音のスペクトログラム画像から操縦士の声を復元**される事件が発生。NTSB（米国運輸安全委員会）は一時的にDocketシステムへのアクセスを遮断する対応を取った。

技術的には、 spectrogram画像から音声を再構成する手法が使用された。これは航空事故調査における录音の完全性に対する重要な問題を提起している。NTSBは現在、安全なアクセス方法を検討している。

---

## xAIのデータセンター戦略：地球上の太陽電池に見切り

TechCrunchの分析記事によると、Elon Musk率のxAIは地球上の太陽電池によるエネルギーから離れて、天然ガスデータセンターへの投資を進めている。SpaceXも軌道データセンターに傾注しており、Musk時代の「太陽電気経済」約束は大きく変更されたとしています。

xAIのインフラ投資は、競合他不満企業とのComputePower確保競争加剧を反映している。

---

## 参考リンク

- [NVIDIA GTC Taipei at COMPUTEX](https://blogs.nvidia.com/blog/nvidia-gtc-taipei-computex-2026-news/)
- [Vera Rubin NVL72 - NVIDIA](https://www.nvidia.com/en-us/data-center/vera-rubin-nvl72/)
- [Jetson Thor - NVIDIA](https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/jetson-thor/)
- [OpenAI Singapore Applied AI Lab - AI News](https://www.artificialintelligence-news.com/news/openai-singapore-ai-lab-imda-agentic-ai-framework/)
- [Singapore Agentic AI Framework Update - IMDA](https://www.imda.gov.sg)
- [Ferrari is using IBM's AI to create F1 superfans - TechCrunch](https://techcrunch.com/2026/05/23/ferrari-is-using-ai-to-create-f1-superfans/)
- [AI resurrecting dead pilots' voices - TechCrunch](https://techcrunch.com/2026/05/22/ai-is-being-used-to-resurrect-the-voices-of-dead-pilots/)
- [Elon Musk has given up on solar power - TechCrunch](https://techcrunch.com/2026/05/23/elon-musk-has-given-up-on-solar-power-on-earth/)

---

*（本文の情報は2026年5月25日時点のものです）*