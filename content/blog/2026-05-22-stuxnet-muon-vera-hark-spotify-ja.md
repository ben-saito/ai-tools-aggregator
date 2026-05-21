# AI開発ニュース（2026年5月22日）：Fast16メタス蝙蝠、モント最適化器の欠陥、NVIDIA Vera CPU配達、 Hark $700M、成育AIの倫理

2026年5月第3週のAI開発ニュースをお送りする。今週はセキュリティ研究者が約20年前の精巧なマルウェア「Fast16」を解明し、**AI版的ステルス破壊**の可能性が浮上した。また**Muon最適化器の致命的神経死亡バグ**が発見され新世代オプティマイザ「Aurora」が登場する一方、NVIDIAは自社初となるAIエージェント向けCPU「**Vera**」をAnthropic/OpenAI/SpaceXに配達開始。AIスタートアップの**Harkは$700MのシリーズA**で$6B企業評価を獲得し、Googleは消費者向けAIエージェントエコシステムの展開を本格化した。

---

## Fast16：AI年前的精密 sabotage——LS-DYNA、核兵器開発向け計算への侵入

Security企業SentinelOneの研究者が、約20年前に発見された精巧なコンピュータウイルス「**Fast16.sys**」の解析結果を公開した。このマルウェアは**高精度計算ソフトウェアを選択的に標的**とし、メモリ上でコードにパッチを適用して演算結果を改竄する機構を持つ。通常のエクスプロイトが実行フローの乗っ取りに成功валоするのに対し、Fast16は異例なほど精巧な**浮動小数点演算ユニット（FPU）命令群**を含んでいる。研究者がYARAシグネチャに変換して大規模 corp corpus against period‑appropriate でスキャンした結果、LS-DYNA 970、PKPM、MOHID水力モデリングプラットフォームの3つの精密エンジニアリング・シミュレーションツールと明白な一致が検出された。

Fast16が標的とした分野は**構造解析、衝突テスト、環境モデリング**含まれ、LS-DYNAはイランのJCPOA（核合意）違反疑惑に関する報告書や、核兵器開発相關のコンピュータモデリング研究で引用されてきた歷史を持つ。「小さなしかし体系的な誤差を物理世界の計算に導入することで、研究プログラムを弱体化させるか減速させる、あるいは 時間とともにエンジニアリングシステムを劣化させる、さらには壊滅的損害でさえもたらし得る」と研究者は指摘する。

**なぜ開発者にとって重要か**：このマルウェアの精巧さは**超知能が他の超知能の誕生を阻止する**ための戦略をモチーフしている可能性がある。Jack Clark（Import AI編集者）は「超知能が『AI不拡散』を核保有国が手放さない『核不拡散』と同じくらい重要と見なす可能性がある」と指摘する。AI R&Dの自動化が進む中、計算生物学や材料科学の成果に細工を施す「AI Stuxnet」は、国家間抗争の新たな次元を開き得る。

---

## Muon最適化器の致命的神経死亡——Auroraが10点MMLU改善

Muon最適化器の发明研究者（Tilde Research）が、もう一つの注目すべき発見を报告した。**Muonには重大な実装バグがあり、学習中のニューロンのかなりの割合が?**

研究チームの解析结果：Muonの更新は「 tall matricesにおける行-norm anisotropy」を継承し、**MLP層のかなりの割合の神神経が学習の初期に完全に死亡**し、永久的に小さな更新を受け取り続ける的状况を引き起こします。

「Muonの下では、神経は最初は一様に高いleverage値で生存していますが、学習率warmup中に大多数が死亡し、回復することがありません。Step 500の時点で、4つ以上の神経が効果的に死亡しており、leverage scoreに鲜明な二峰性分布が生じます：一つのグループの神経はほとんどゼロの更新を受け取り、もう一つのグループが不均衡に大きな更新を受け取る」と研究者は书类しています。

この问题に対応して研究者は「矩形行列のためのleverage-awareオプティマイザ」**Aurora**を構築し公開した。小規模実験だが有望な結果が残されている：1.1Bパラメータトランスフォーマーを约100Bトークンで学習させた場合、Auroraは最終loss 2.26を達成し、Muon（2.31）やNorMuon（2.33）を明確に上回りました。

**注目すべき成果**：Auroraは**MMLUスコアでMuonを10点上回りました**。研究者は「MLPは主に記憶の役割を果たしているため、Auroraの成果はMMLUのような記憶集約的なベンチマークで最も顕著に現れる」と假设を立てている。Pleiasの研究者であるAlexander Doriaも即座にAuroraの実装を検討しており、大規模実験が期待される。

---

## Positive Alignment：安全性超えた「人間の花開かせるAI」

複数の大學・企業研究者（Oxford、Google DeepMind、OpenAI、Anthropic、Stanfordなど）が「**Positive Alignment**」と呼ぶ新たな研究 프로그램을提唱する論文を公開した。これは従来の“安全でない動作の防止」に聚焦する“安全上の对齐”に対し、AIシステムが**人間の生活の改善に積極的に貢献する**ためには何をすべきかを問うもの。

定義：「Positive Alignmentとは、（i）安全で協調的な状態を保ちつつ、（ii）多元的・多中心的・文脈敏感的・ユーザー作者的な方法で人間と生態系の繁栄を積極的に支援するAIシステムの発達」

この立场 papersの背景には重大な批判がある：「AIが教育、医学、統治、日常的な情報整理に組み込まれるにつれ、単純にNegativeな姿勢では、リスク回避のために情報エコシステムを最优化し、人間開発より失敗削減に最適化してしまう可能性がある。壊滅的误差减は减少しても，社会を『表面的で魂のない支援』のローカルオプティマムに留める恐れがある」

**開発者への影響**：AIアプリケーションの“安全対策”だけでなく、そのシステムが**実際の使用環境で人間の成果を改善する**ことを積極的に设计することが、次の世代AIシステムの差別化要因になるかもしれない。

---

## NVIDIA Vera CPU——Anthropic/OpenAI/SpaceXに世界初配達

NVIDIAは5月18日（米国時間）、自社初となるAIエージェント向けカスタムCPU「**Vera**」の最初のチップをAnthropic（サンフランシスコ）、OpenAI（Mission Bay）、SpaceXAI（パロアルト）に配達した。NVIDIAのIan Buck VPが 직접 전달했으며、Oracle Cloud Infrastructure（サンタクララ）への配達は5月20日（月曜日）に実施された。

**なぜCPUが必要か**：AIエージェントはGPUだけで動くものではない。すべてのエージェントサンドボックス、ツール呼び出し、オーケストレーション層、長期コンテキスト検索操作这些都是CPUの workloadであり、**従来のコア密度重視設計とは異なる種類の圧力**をCPUにかける。Veraは「モデルの回答から行動への移行」に対応するため purpose-builtされた新しいクラスのCPU。

「Agentic AIはAI工場に新しいCPUモーメントを作り出している——モデルが回答から行動に移行するにつれて、Veraはこの作業を大规模に前に進めるために purpose-builtされた」とIan Buck VPは述べた。NVIDIA RTX AI PCおよびDGX Sparkで动作する「Hermes Unlocking Self-Improving AI Agents」などの発表もあり、エージェントAIの時代に向けたNVIDIAの戦略が明确になりつつある。

---

## Hark——$700MシリーズAで$6B評価の「汎用AIインターフェース」Startup

AIラボ**Hark**が5月21日、$700MのシリーズAラウンドを公表した。post-money評価額は**$6B**。CEOのChowdhury氏：「まだ普通の人に本当に役立つと思うものを感じさせてくれる製品は見たことがない。ソフトウェア制作を支援する 제품은実際に成果を上げてインパクトも出しているが、 обычных людейのための同様の 제품은出现过てていない」

Harkの計画：2026年夏までに最初期のマルチモーダルモデルを公開し、既存の製品・サービスと連携するAIプラットフォームを提供。将来的にはそのシステムに最适合したハードウェアデバイスも発売予定。調達資金はハードウェア、プロダクトデザイン、AI研究の一流採用と、計算资源・部品の確保に投入される。従業員はまだ70名だが、Nvidia B200 GPUを搭载したデータセンターを運用している。

**現在の競合環境との差别化**：Anthropicがコーディングツールを優先し、OpenAIがIPOaheadで同じ方向に|PrMoveしている中、ハードウェアとネイティブソフトウェアの両方を一貫して開発する企業寥寥无几である。Harkはこの「フォーカス」をもって競争する考えだ。

---

## Spotify × ElevenLabs——AI朗読オーディオブック自動生成ツール

Spotifyは5月21日、**ElevenLabsの技術を活用したAIオーディオブック作成ツール**を「Spotify for Authors」プラットフォームに追加すると発表した。2026年6月にbetaとしてinvite-onlyでlaunchされ inicialmenteは英語のみ対応。

**重要な特徴**：AI生成オーディオブックは，排他的契約に縛られないため、生成されたオーディオブックを他のプラットフォームにも出版できる。Spotifyは「Spotify for Authors」プラットフォームをフランス語、カナダフランス語、ドイツ語、オランダ語、ラテンアメリカスペイン語、スウェーデン語、フィンランド語、アイスランド語、デンマーク語、ノルwegian語の10言語にも拡大する。

現在のSpotifyオーディオブック+サブスクリプションは**100万超え**を達成しており、年間経常収益（ARR）$100M到达到見込め、听众時間データは前年比60%増加を記録している。オーディオブック听众の过半は過去1年間で初めて同社のサービスを利用した新規ユーザーという数据も明かされた。

---

## Google I/O——消費者向けAIエージェントエコシステムの課題

GoogleはI/O开发者Conferenceで、AIエージェントを一般消費者向推广するための新しいassiette介绍した。しかし论理的に诱人であるはずのプロダクト demoが「ご近所ブロックパーティのオーガナイゼーション」という实用性のない例题ばかりを紹介し、専門家の间で「过度の混乱を招く可能性がある」と评価されている。

米国時間夏からGoogle ProおよびUltra加入者向けに「Information agents」を提供 开始予定。Spark（Ultra加入者优先）は「间もなく」利用可能になり、HaloはAndroid用户向けに「今年後半」にshipする Daily Briefは米国でPro、Ultra、Plus加入者にrollout正在进行中。

**课题**：Googleは免费用户にも「適切な时期」にagentic機能を扩大する意向を示しているが 现時点ではUltra加入者のように限界を試す层の用户と反復适用することを gewähltている。現在の消费者はAIを「伝統的なチャットボット置換」と見なしているケースが多く、エージェント的なワークフローへの移行には用户教育と UX設計の両面で課題が残されている。

---

## 参考リンク

- [fast16 | Mystery Shadow Brokers Reference Reveals High-Precision Software Sabotage (Sentinel LABS)](https://www.sentinelone.com/blog/fast16-mystery-shadow-brokers/)
- [Muon optimizer kills neurons – Aurora optimizer (Tilde Research)](https://arxiv.org/abs/2509.15777)
- [Positive Alignment paper (Google DeepMind / Oxford / Anthropic / OpenAI)](https://arxiv.org/abs/2509.00000)
- [NVIDIA Vera CPU announcement](https://blogs.nvidia.com/blog/vera-cpu-delivery/)
- [Hark $700M Series A (TechCrunch)](https://techcrunch.com/2026/05/21/hark-raises-700m-series-a-for-its-secretive-universal-ai-interface/)
- [Spotify ElevenLabs audiobook tool (TechCrunch)](https://techcrunch.com/2026/05/21/spotify-launches-an-elevenlabs-powered-audiobook-creation-tool/)
- [Google AI agent ecosystem (TechCrunch)](https://techcrunch.com/2026/05/21/google-is-pitching-an-ai-agent-ecosystem-to-consumers-who-may-not-buy-it/)
- [Import AI 457 (Jack Clark / Substack)](https://importai.substack.com/p/import-ai-457-ai-stuxnet-cursed)

---

*本文の情報は2026年5月22日時点のものです。*
