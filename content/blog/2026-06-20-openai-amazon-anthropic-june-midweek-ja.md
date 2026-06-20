# OpenAI IPO前夜の人材奪還戦とAIチップ戦争の激化

2026年6月中旬、AI業界は二つの大きな軸で動いていた。一つは**OpenAIのIPO準備に伴う高水平な人材採用**、もう一つは**AIインフラをめぐるチップ戦争の激化**である。開発者にとって直接的に関わるClaude Agent SDKの料金体系変更や、各社の推論コスト構造の変化も目が離せない。

---

## OpenAI、IPO前にNoam ShazeerとDean Ballを採用

OpenAIはIPO（新規株式公開）を控えたこの週、Google DeepMindから**Noam Shazeer**、前Trump政権のAI政策担当官**Dean Ball**の二名を同時に採用した。ShazeerはTransformerの共発明者として知られるAI界の重鎮であり、Google에서2000年から勤務し、Character.aiの創業者も務めた。Ballは7月6日から「Strategic Futures」という新チームのリーダーに就任し、カタストロフィックリスク 再帰的自己改善、劳动力市場への影響に集中するとしている。

**注目すべき点**は、ShazeerがGoogle在職中に内部メッセージボードで政治的発言をしていたという報道だ。The Informationによると、Shazeerはトランスジェンダーに関する意見を含む論争的な投稿をしていたとされる。IPO前のOpenAIにとって、こうしたrumorはイメージリスクとなりうるが、同社は政策面での体制を強化することで対抗している。

BallのStrategic Futuresチームは、Chief Strategy OfficerのJason Kwonに直接報告し、「small, high-agency team」としてAIガバナンスのinternalとpublic-facingの両面を担う。Ball自身が「AIラボはAIガバナンスをリードする必要がある几乎是必然的」と述べており、規制が追いついていない領域で企業の自己規制的役割が求められている現状が浮かび上がる。

---

## Amazon、Trainiumチップの外販を検討 -- Nvidia挑う$50Bビジネス

AmazonのAI責任者Peter DeSantis씨가Bloombergに対し、AWSが自社開発AIチップ**Trainium**を他社への販売を検討していることを明かした。CEO Andy Jassy氏の年次の株主向け手紙（4月上旬）で「チップビジネスが独立した企業として存在し、今年生産されたチップをAWSと他の第三者に販売している場合（他の主要チップ企業のように）、年間ランレートは約500億ドルになる」と記されていた。

Amazonのチップビジネスは2026年時点で年間500億ドルのランレートに達している可能性がある。対照的にNvidiaの現在の収益ランレートは3260億ドルであり、Amazonの参入が即座にNvidiaを脅かすわけではない。しかし、**AI推論ワークロード特化型のTrainium**は、Nvidiaの泛用GPUに対するコスト効率で差別化できる可能性がある。

重要な点是、AWSはこれまでAIチップの外販を積極的には行っていなかった最大の理由は、チップそのものからの収益ではなく、チップを使ったAIサービスの「 waterfall effect（段階的な収益構造）」にある。顧客に直接AIサービスを提供する方がチップ自体売るより利益率が高いからだ。しかしJassyの手紙の発言から、AWSが収益源の多角化を検討していることが読み取れる。

---

## Anthropic、Mythos輸出規制で米国政府と衝突 -- 「危険な」モデル問題は制御できるか

Anthropicが4月に発売した**Mythos**モデルは発売当初から「サイバー兵器」としての能力を宣伝され、米国務省から輸出規制指令を受けた。Mythosはソフトウェアの脆弱性を見つける能力と、それを悪用する能力の両方を持つとされ、Anthropicは当初「Project Glasswing」と呼ばれる限定的なコンソーシアムを通じてMythos Previewを提供していた。

直接的引き金となったのは、Anthropicが韓国の通信会社にMythosへのアクセスを与える限定パートナーシップを結んだ後、米政府高官が懸念を表明したとされることだ。Commerce Departmentは輸出規制指令を発令し、Anthropicは通知から90分以内にアクセス制限を実施する対応を迫られた。

この問題はAI輸出規制の限界を浮き彫りにしている。1990年代のPGP（暗号化ソフトウェア）の時も、米政府はPGPを「危険な武器」と見なし、拡散阻止を図ったが失敗した。这次も輸出規制がAIモデルの能力を世界に広めることを本当に阻止できるかどうかについて、懐疑的な見方が強い。

---

## AI推論スタートアップBaseten、$1.5B資金調達を協議中 -- 評価額$13B

AI推論企業の**Baseten**が、Wall Street Journal報道によると$15億の資金調達を最終調整中であることがわかった。評価額は130億ドルに達する。仅仅5六个月前に前回のメガラウンドを発表していたBasetenにとって、わずか半年で評価額が160%上昇することになる。

注目すべきは今次ラウンドが**split-priced round（分割価格ラウンド）**であることだ。スタートアップが価値を嵩上げするために使う手法で、投资家に IPO前の優先株式を过低な価格で販売し、表面的評価額を押し上げる戦略だ。

Basetenは2019年設立。「推論ゴールドラッシュ」の波に乗り、VCから的大量の资金調达に成功している。推論レイヤー（モデルを実際に走らせて推論結果を得る工程）は、トレーニング工程以上にカスタマイズ可能で、特定の產業用例に特化した最適化が行いやすいため、VCの注目が集まりやすい。

---

## Ars Technica: Anthropic、Claude Agent SDKのトークン請求を「一時停止」

Anthropicは5月13日に発表していた**Claude Agent SDKのトークン請求方式への変更**を、直前になって一時停止した。変更案では、Agent SDKの使用（サードパーティーアプリや`claude -p`コマンドを含む）を通常のClaude利用とは別個の請求対象として、それeparateにカウントするとしていた。

现行の仕組みでは、Agent SDKの使用は従来のClaude订阅阶层に紐づいた週次の上限内でのみ可能だった。新しい方式では独立した料金体系になり、多くの开发者にとってコストが大幅に上昇するはずだった。Apple、Google、Microsoftなどのmajor企业在Agent SDKに依存しているだけに、一時停止の背景には开发者コミュニティからの強い反発があったとされる。

---

## 米国、ASMLの最強芯片製造装置が中国にある可能性 -- 輸出規制の穴

米国政府は、オランダの芯片製造装置メーカー**ASML**のEUV（極端紫外線）リソグラフィ装置が中国にある可能性を調査していることがわかった。ASMLはEUV装置で世界市場を事実上独占しており、台湾TSMCの先进プロセッサ（NvidiaやAppleのチップ製造に必要なもの）はすべてASMLの装置に依存している。

EUV装置の開発には約20年数千億ドルをかけたとされ、中国がたった一台でもEUV装置を取得すれば、輸出管理レジームにとって史上最悪の侵害の一つとなる。芯片製造のバリューチェーン全体に影響する問題であり、AIトレーニング用の先进GPU製造に直接関わる。

---

## 開発者視点のまとめ

| トピック | 開発者への影響 |
|----------|----------------|
| **OpenAI採用** | Strategic Futuresの議論がAIガバナンスの業界標準形成に影響 |
| **Amazon Trainium** | 推論ワークロードのコスト最適化選択肢として期待 |
| **Mythos輸出規制** | 輸出規制対象モデルが増える可能性、コンプライアンス対応重要 |
| **Baseten $1.5B** | 推論レイヤーの投資加速、APIやツールの選択肢増える |
| **Claude Agent SDK請求停止** | SDK利用コスト当面現行維持、ホットな話題 |
| **ASML/EUV輸出規制** | 先進チップ不足が継続、采购先多様化の重要性 |

6月も後半戦に入り、IPOを控えたOpenAIの人材戦略、推論レイヤーへの投資集中、そしてAIモデルの輸出規制という三つのテーマは、年底までAI業界を牵引する可能性が高い。开发者は各社の料金体系とAPIポリシーを注視しつつ、レイヤー別の技術選定を改めて検討する时期にある。

---

## 参考リンク

- [OpenAI is bringing on some big guns in the lead-up to its IPO](https://techcrunch.com/2026/06/18/openai-is-bringing-on-some-big-guns-in-the-lead-up-to-its-ipo/)（TechCrunch）
- [Amazon hopes to challenge Nvidia more directly by selling its AI chips](https://techcrunch.com/2026/06/18/amazon-hopes-to-challenge-nvidia-more-directly-by-selling-its-ai-chips/)（TechCrunch）
- [Encryption, spyware, and now Mythos: History shows why cyber export control doesn't work](https://techcrunch.com/2026/06/19/encryption-spyware-and-now-mythos-history-shows-why-cyber-export-control-doesnt-work/)（TechCrunch）
- [AI inference startup Baseten reportedly raising $1.5B months after its last mega-round](https://techcrunch.com/2026/06/18/ai-inference-startup-baseten-reportedly-raising-1-5b-months-after-its-last-mega-round/)（TechCrunch）
- [Anthropic "pauses" token-based billing for its Claude Agent SDK](https://arstechnica.com/ai/2026/06/anthropic-pauses-token-based-billing-for-its-claude-agent-sdk/)（Ars Technica）
- ["Dangerous" AI models are coming no matter what](https://arstechnica.com/ai/2026/06/dangerous-ai-models-are-coming-no-matter-what/)（Ars Technica）
- [The US says ASML's top chip tool may be in China, ASML says it isn't](https://techcrunch.com/2026/06/19/the-us-says-asmls-top-chip-tool-may-be-in-china-asml-says-it-isnt/)（TechCrunch）

---

*（本文の情報は2026年6月20日時点のものです）*
