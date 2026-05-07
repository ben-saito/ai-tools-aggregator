# AI開発ニュース 2026年5月7日：自律AI R&Dの夜明け、エンタープライズAgent拡大、米政府モデルテスト義務化

AI開発業界は5月第1週に急速な変化を迎えている。Jack Clark（Anthropic元政策ディレクター）が「2028年末までに人間の関与ないAI R&Dが60%の確率で実現する」と警鐘を鳴らす一方、NVIDIAはSpectrum-X EthernetのMRCプロトコルをオープン仕様として公開し、Microsoft・OpenAIとの協業でギガスケールAI工場のネットワーク標準を確立した。AnthropicはSpaceXのColossusデータセンター全容量を租用する大規模契約を発表し、エンタープライズ分野ではServiceNowとの自律Desktop Agent「Project Arc」で企業AIの次段階を提示した。米政府も前沿AIモデルの発売前テストを義務化する方針を固め、規制と技術の両面からAIの夜明けが近づいている。

---

## Import AI 455：AIがAI自身を構築する時代

Jack Clark主宰のImport AI 455号（2026年5月4日発行）は、AI業界で最も緊張感のある技術予測レポートである。Clarkは複数のベンチマークデータから「人間の関与ないAI R&Dが2028年末までに60%の確率で実現する」と主張する。

**SWE-Benchの急上昇**が象徴的だ。2023年末にClaude 2が記録した約2%から、Claude Mythos Previewは93.9%を記録し、ベンチマークを事実上飽和させた。SWE-BenchはGitHubイシューを題材に実世界のソフトウェア問題を解決するテストであり、AIがコード生成・テスト・修正のサイクルを人間 없이回せることを証明している。

**METRタイムホライズン**も脅威的だ。AIシステムが独立して完了できるタスクの所要時間は、2022年の約30秒から2026年には約12時間（Opus 4.6）に到達。Ajeya Cotra（METR）は2026年末までに約100時間のタスクをAIが自律完了する可能性を指摘する。

**科学スキルベンチマーク**でも顕著な進歩がある。CORE-Bench（研究論文の再現性をテスト）は2024年9月の約21.5%から2025年12月には95.5%へ上昇し、「解決」状態に達した。MLE-Bench（Kaggleコンペティション）では2024年10月の約16.9%から2026年2月にはGemini3が64.4%を記録。AIがMLエンジニアのタスクを大幅に肩代わりできる段階已进入。

Clarkの核心的主張は「全てのピースが準備できている」ことだ。コード生成、科学的研究再現、カーネル最適化——AI R&Dの各コンポーネントが自動化されつつあり、スケーリング傾向が続けば、AIが人間の研究者없이自律的に次のAIを構築する時代が現実味を帯びる。この先の含意は膨大で、AIの自律性进步がアライメント技術の崩壊、全産業への生産性倍率、資本が重く人要軽い「機械経済」の形成につながる可能性があると指摘する。

---

## NVIDIA Spectrum-X MRC：AIネイティブEthernetファブリックのオープン標準

NVIDIAは2026年5月6日、**Multipath Reliable Connection（MRC）**プロトコルをOpen Compute Project 통해オープン仕様として公開した。MRCはRDMAトランスポートプロトコルで、単一RDMA接続内でトラフィックを複数のネットワークパスに分散し、大規模AI訓練ファブリックにおけるスループット、ロードバランシング、可用性を 향상させる。

OpenAIのSachin Katti氏（Industrial Compute責任者）は「MRCのエンドツーエンドアプローチにより、ネットワーク関連の典型的なボトルネックや中断の大部分を回避し、フロンティア訓練実行の効率を維持できた」と語る。MicrosoftのFairwaterデータセンターとOracle Cloud Infrastructure（OCI）のAbileneもMRCを採用し、最大規模のAI工場之二での実証を経てオープン化された。

**micro秒単位の障害回避**がMRCの关键技术だ。ネットワークパス障害をmicro秒単位で検出し、ハードウェア内でトラフィックを自動再ルーティング。数千のGPUが同期を維持する必要があるAI訓練クラスタでは、短暂なネットワーク中断でも訓練ジョブ全体が遅延・中断される可能性があり、Spectrum-X Ethernetのハードウェアレベル応答がこの問題を防ぐ。

NVIDIAはAMD、Broadcom、Intel、Microsoft、OpenAIと協業してMRCを発展させた。Spectrum-X Ethernetプラットフォームは、目的特化ハードウェア、深いテレメトリ、Intelligent Fabric Controlを統合し、新プロトコルをコンセプトからギガスケールAI本番環境까지最短経路で導く。

---

## NVIDIA × ServiceNow：エンタープライズ自律Agent「Project Arc」

NVIDIAとServiceNowは2026年5月、ServiceNow Knowledge 2026において企業向け自律AI Agentの拡大提携を発表した。両社はアクセラレーテッドコンピューティング、オープンモデル、ドメイン特化スキル、セキュア Agent実行ソフトウェアを統合し、ServiceNow Action FabricのエンタープライズワークフローコンテキストとServiceNow AI Control Towerのガバナンスを組み合わせる。

**Project Arc**はServiceNowが発表した自律Desktop Agentで、長時間実行され、自己進化可能なknowledge worker向 agent。開発者、ITチーム、管理者向けに設計されServiceNow AI Platformにネイティブ接続し、ServiceNow Action Fabricを通じてガバナンス、監査可能性、ワークフローインテリジェンスを кажд actionに付与する。ローカルファイルシステム、ターミナル、マシンにインストールされたアプリケーションにアクセスし、従来の自動化では處理不可能な複雑なマルチステップタスクを遂行できる。

セキュリティ面では**NVIDIA OpenShell**（オープンソースのセキュアランタイム）を採用し、センドボックス化・ポリシー管理された環境で自律Agentを開発・展開する。 enterprisesはAgentが見るもの、使用的ツール、各アクションのContain範畴を定義可能。ServiceNow AI Control Towerとの組み合わせにより、企業AIに必要なガバナンスとセキュリティを実現するという。

**NOWAI-Bench**も注目に値する。NVIDIA NeMo Gymライブラリに統合されたエンタープライズAI Agent向ベンチマークスイートで、EnterpriseOps-Gymを含む。Nemotron 3 Superは現在オープンソースモデルの中でNo.1を記録しており、エンタープライズ環境でのAI Agent性能評価框架が整備されつつある。

---

## Anthropic × SpaceX：Colossusデータセンター全容量租用

Anthropicは2026年5月、SpaceXのColossusデータセンター全区のAI容量を租用する大規模契約を締結した。Anthropic公式発表によれば、この契約によりClaude Codeユーザーの利用制限引き上げが実施され、多くのユーザーにとって利用制限が2倍に拡大される。

ColossusはSpaceXが建設した大規模AIスパコンで、Anthropicとの契約はAI需要急増への対応としてHorn言われている。NVIDIAとの协議によりH100/H200 GPUクラスタ扩充が続けられている中、Colossusの全容量租用はAI推理需要の逼迫を反映している。Claude Codeは软件开发者向AIコーディングAssistantであり、その利用制限引き上げはAI支援ソフトウェア開発への需要非常高を裏付ける。

---

## 米政府：前沿AIモデル発売前テスト義務化へ

米国土安全保障省（DHS）を中心とする政府機関は2026年5月、**前沿AIモデル公开发売前の安全性テストを義務化する方針**を固めた。Computerworld（5月7日）が伝えた内容によると、CAISI（Critical Infrastructure Security and Resilience Agency）はGoogle DeepMind、Microsoft、xAIとの間で国家安全保障向けフロンティアAIテストに関する合意書に署名済みの段階。

テストの范围は「発売前の=redティ礼拜查出」とされ、モデルの安全性・保安上の脆弱性を発売前に政府が確認する枠組み作りが進行中。バイデン前大統領のAI行政命令（2023年）を踏襲しつつ、トランプ政権下で民間企業のAI開発とのバランスを取りながら規制を整備する方針だ。Microsoft、Google、xAIはモデル提供時に政府に早期アクセスする事に同意しており、政府・企業の协議枠組みが实质化している。

---

## DeepSeek：$45〜50B評価額での資金調達間近

中国人民生AI企業DeepSeekが、初回の資金調達ラウンドで**$45〜500億の評価額**を迎える可能性が浮上した。Reuters、Wall Street Journal、Tech Funding Newsがそれぞれ5月6日〜7日に伝えた。WSJによると中国-big国家ファンドがDeepSeekに出資を検討中とされ、TencentやAlibabaも参加意向を示しているという。

DeepSeekは2025年にR1モデルを公开发信し、米国のAI制裁下でも高性能开源モデルを開発したことで知られる。$45-50Bの評価額は1年前の評価額から大幅に上昇しており、中国の国家AI戦略と民间资本のDeepSeekへの期待が高まっていることを示している。

---

## EU：滥用性的ディープフェイクAI工具禁止へ前進

欧州連合（EU）は性的ディープフェイクの生成に使われるAI工具の禁止に向けた**最初の一歩**を踏み出した。France 24（3月13日）が伝えた内容では、Grok（例如xAIのChatbot）が性的ディープフェイク画像生成に使用されたことを受け、EU是国内で这类ツールの使用を禁止する規制に着手。

また、EUはAI生成の子供性虐待画像禁止也为検討しており、Reuters报道では「AI生成の子供性虐待画像禁止へ向けた最初の一歩」と題された。EUのAI法（AI Act）のもとで深度偽造対策が实质化し、性的悪用 목적のAI工具への規制が強化される方向にある。

---

## Scale AI：米国防総省から$500M契約

Meta支援のScale AIが米国防総省から**5億ドル规模的契約**を受注したことが5月6日、多个媒体报道で明らかになった。Forbesによると、昨年の契約（約$100M比拟）の5倍に相当し、 Bloomberも「Meta支援のScale AIが国防総省契約を$500Mで获胜」と报道。

Scale AIはAI練習データと評価プラットフォームの提供为主要業務とし、防衛省的応用に向けたAIモデル評価・改善 услугиが増加している。国防総省向けのAIテスト・評価枠組み構築にもgressしており、民间企业与国防分野のAIセキュリティ連携が深まっている。

---

## 業界動向その他

**NVIDIA × Corning**は fiber opticパートナーシップを拡大し、NVIDIAがCorningへの投资を最大$32億に拡大する内容。North Carolinaに製造拠点设立が計画されている。

**Snap × Perplexity**の$4億AI統合パートナーシップは5月に「友好的に終了」したが、2社の戦略的差异が表面化した。**Apple**はSiri遅延AI機能巡り$2.5億の和解금을支払うことで合意し、AI機能開発競争での迟到に代价发生了。

**Samsung**はAI浪潮の中で時価総額$1兆に到達し、劳动者側からAI利润の配分拡大を求める声上がっている。

---

## 参考リンク

- [Import AI 455: AI systems are about to start building themselves](https://importai.substack.com/p/import-ai-455-automating-ai-research)
- [NVIDIA Spectrum-X Ethernet MRC](https://blogs.nvidia.com/blog/spectrum-x-ethernet-mrc/)
- [NVIDIA and ServiceNow Partner on Autonomous AI Agents](https://blogs.nvidia.com/blog/servicenow-autonomous-ai-agents-enterprises/)
- [Anthropic: Higher usage limits for Claude and a compute deal with SpaceX](https://www.anthropic.com/news)
- [US government agency to safety test frontier AI models before release - Computerworld](https://www.computerworld.com)
- [DeepSeek could be valued at up to $50 billion - Reuters](https://www.reuters.com)
- [EU moves to ban AI-generated sexualised deepfakes - France 24](https://www.france24.com)
- [Pentagon awards $500M contract to Meta-backed Scale AI - Anadolu Ajansı](https://www.aa.com.tr)

---

*本文の情報は2026年5月7日時点のものです。*
