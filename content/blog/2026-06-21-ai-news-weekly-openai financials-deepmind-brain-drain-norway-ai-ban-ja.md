# AI開発ニュース Weekly Roundup（2026年6月第3週）

OpenAIの破 格的な増収と損失、Google DeepMindからの人材流出、挪威（ノルウェー）の初等教育AI禁止令、AmazonのAIチップ販売計画など、2026年6月第3週はAI業界にとって波乱の1週間となった。主要各紙の報道を汇总する。

---

## OpenAI、売上は前期比3倍の57億ドル -- それでも四半期で37億ドルをburn

The Informationの報道によると、OpenAIは2026年第1四半期に**57億ドルの収益**を達成し、前年同期比で3倍となった。しかし、同期間の**損失も37億ドル**に達し、収益の过半以上をインフラとGPUに費やしている状况が明らかになった。

### 経営指標の详细

- **収益**: 57億ドル（四半期）-- 前年比3倍
- **営業损失**: 93億ドル
- **純損失**: 213億ドル（含み損12.4億ドルは投資家口の再評価）
- **株式報酬のみ**: 23億ドル（前年比2倍以上）
- **現預金色・有価証券**: 730億ドル以上

注目すべきは、純損失に占める「紙の上の损失」が大きい点だ。213億ドルの純損失のうち、124億ドルは投資家の口を再評価导致的账面损失であり、実際の事業運営による损失ではない。それでも営業損失93億ドルは、同社の膨大なるインフラ投資を反映している。

OpenAIはIPO申請書類を提出済みだが、CEO Sam Altman氏は「民間企業であり続ける正当な理由がある」とし、**自己改良型AI（self-improving AI）の進捗**をその理由として挙けた。AnthropicのIPO準備との竞争も、公開市場参入の判断を复杂にしている一因とgol帝国される。

**開発者視点**: OpenAIの burn rate（消化速率）は依然として構造的に高い。GPUクラスタの拡張、人-retrievalingモデルのトレーニング推論コスト、そしてモデル自己的能力向上に向けた研究投資が重なり、短中期的な黒字化は困难とgolられる。ただし、730億ドルの流動性资产は、当面の资金調迭に不安がないことを示している。

---

## Google DeepMindからAnthropicへ -- ノーベル賞科学者John Jumperが跳槽

Google DeepMindはまたも主要研究者を失了。AlphaFoldの開発で**2024年ノーベル化学賞**共同受賞したJohn Jumper씨가、Google在職约9年后、Anthropicへの跳槽を決定した。Jumper씨는DeepMind CEO Demis Hassabisと共にAlphaFold開発を牵引した核心人物であり、AIによる科学 발견の最前線にいた人物である。

さらに、その数日前にはGeminiの共同リーダーでReasoning技術（Googleの最新モデルの推論能力の基盤）を手掛けた**Noam Shazeer**がOpenAIへ加入。两个月の間に、GoogleからAnthropicとOpenAIにトップ研究者が流出したことになる。

また、David Silver氏（AlphaZero等人取り囲む强化学習の第一人者）も以前DeepMindを退出しており、GoogleのAI研究组织からの持続的な人材流出が深刻な问题として浮上している。

一方、Googleは**Gemini 3.5 Pro**を6月下旬にリリース予定と伝えられるが、内部消息筋로는「AnthropicとOpenAIの最新モデルに競争力がない可能性がある」と噂されている。人才流出と产品競争力の両面で、GoogleのAI復調には黄色信号が灯っている。

**開発者視点**: AlphaFoldの科学发现機能は、生物学・創薬领域で実用段階に入った。Jumper씨のAnthropic加入は、同社の科学特化モデル开发にoggles大きく贡献する可能性があり、Anthropicの生命科学×AI戦略の强化とgolられる。

---

## 挪威、初等学校での生成AI使用を禁止 -- 「読む・書く・算」の基础学習を守れ

挪威政府は6月、**小学1年から7年（6〜13歳）の全学年で生成AIツールの使用を禁止**する新制度を導入すると発表。2026年8月末の新学期から生效する。

 Jonas Gahr Stoere首相は「学校において最も重要なのは、子どもたちが読書・作文・算数を身につけること」とし、「AIの无批判な使用は、学生が重要な学習ステップをスキップさせる」と指摘。2015年頃から学習成果が低下倾向にあることも、AI規制の背景にある。

### 各国のAI教育政策对比

| 国・地域 | 方針 | 详细内容 |
|---------|------|----------|
| **挪威** | **全面禁止** | 小学1〜7年のAI使用禁止、中学は制限付き、高校以上は使用方法の指導 |
| **日本** | 慎重対応 | 2023年ガイドラインで13岁以下の特别注意、AI生成作業をチカンと定義 |
| **ドイツ** | 導入推进 | 教育省会議が禁止を「非現実的」とし、AIの教室統合を支持 |
| **UAE** | **全面導入** | 2025-26年度から幼稚园から高校までAIを必修教科に |
| **アメリカ** | 判例atively | 2024年、学校は無許可のAI使用を罰則可能と裁定 |

挪威政府はまた、物理的な教材（教科書など）を学校に配备することを义务化する法律の制定も予定。デジタル偏重からの是正还包括、数字、メディア離れの動きが 교육政策でも進んでいる。

**開発者視点**: 教育現場でのAI規制は、LLMの「捷径依存」リスクへの具体的対応。、儿童の认知発達段階での基幹スキル獲得にAIが支障をきたすという实证研究は積み上がっており、他の欧州連合国の追随も予想される。EdTech系スタートアップには朗報ではない 材料だ。

---

## Amazon、AWSのAIチップを外部販売へ -- 年間500億ドルのランレートが実現可能と主張

TechCrunchの報道によると、AmazonはCEO Andy Jassy氏の年次株主レター（4月发表）に続き、同社のAIチップ（Trainium等）の外部販売を検討している。Jassy氏は同氏で「もしAIチップ事業が独立した企业で、2026年にAWSと他の、第三자에게チップを販売するなら、**年間ランレートは約500億ドル**になる」と记载した。

### AWS芯片戦略の现状

- **Trainium / Trainium2**: AWS独自のAI训练用チップ
- **Inferentia**: 推論用チップ
- **当前的生产能力**: 需要が供给を上回り、待ちリストが発生している状態
- **Nvidia挑戦の规模感**: Nvidia現在のランレートは3,260億ドル。500億ドルはNvidiaにとっては「脅威というよりも补完的存在」

注目すべきは、AWSはこれまでは顧客への直接サービス提供を優先し、外部販売に慎重姿勢を見せてきたことだ。最大の理由は、チップ事业から得る利益は「溢れ出し効果（waterfall effect）」として内部 고객에게機器和服务整套销售的形で回収できるため、外部販売より収益性が高いからである。

また、制造パートナー（Taiwan Semiconductor 등）を通じて额外の制造容量を確保しない限り、現在のリクエスト待ちらし顾客を満足させながら外部販売することは困难という構造的課題もある。

**開発者視点**: Amazonのチップ外部販売は、**AWSのAIインフラの収益性を公开市場に対して示す行为**であり、Nvidiaとの协応ではなく竞争关系の明确化。HPCやAI企図顾客にとって、AWS Trainiumの性能とコスト競争力が向上すれば、Nvidia依存からの脱却のoptionとして実运用入りの，明年 RackspaceやCoreWeaveとの竞争も激化する可能性がある。

---

## 輸出管理制度の无效历史 -- PGPからMythosまで

TechCrunchは6月19日、輸出管理措置が技術流出防止に效果してきたかについて、PGP以来的歴史を汇总したレビュー記事を发布了。

1990年代、美国政府はPGP（Pretty Good Privacy）暗号化技術を「危险な武器」と见なし、刑事调查を開始。しかし结果是、PGPは全世界に普及し、MITからソースコードが出版され、美国の意図とは逆に暗号化技術の民主化を招いた。

现在のAnthropic Mythos（高性能AIモデル）に対する輸出禁止令も、类似的展開が予想される:

- Mythosは150人の検証済みユーザーに限定提供される前に、韩国内 carriersへの限定アクセスが提供された
- 米国当局は韩国通信事業者が输出規制対象国との繋がりを怀疑
- 禁止通知から**约90分以内**にAnthropicはアクセス制限を实施了

歴史が示す通り、暗号技術の輸出管理が完全に成功した例はなく、AIモデル同理の管理も困難とgolられる。MITの研究室がPGPを书籍として出版し、美国国外で合法化された事例は、「コードは言論の自由」という论争を巻き起こしたが、最終的に美国の輸出規制は缓和された。

**開発者視点**: 輸出管理とAIモデルの関連では、GPUそのものの輸出管理（中国向けH100/H200制限等）がすでに実施されているが、モデルそのもの（weights）の管理は技术的にほぼ不可能。AnthropicのFable 5禁止も、モデルが一度外部に流出すれば取り返せないという意味で、形式的意味合いが強いという指摘がある。

---

## 次の注目イベント

- **Anthropic IPO**: 企業coding市場での急速なシェア拡大背景下、上场計画の具体化が予想される
- **Gemini 3.5 Pro  출시**: 6月下旬予定。Jumper/Shaazeer流出後のGoogleの回答となる
- **OpenAI IPO timing**: 申請書類提出済みも、AltmanCEOは年内不一定を示唆

---

## 参考リンク

- [OpenAI tripled revenue to $5.7 billion in Q1 (The Decoder)](https://the-decoder.com/openai-tripled-revenue-to-5-7-billion-in-q1-but-burned-through-3-7-billion-to-get-there/)
- [Google DeepMind loses another top AI researcher (The Decoder)](https://the-decoder.com/google-deepmind-loses-another-top-ai-researcher-as-nobel-laureate-john-jumper-leaves-for-anthropic/)
- [Norway bans generative AI tools in elementary schools (The Decoder)](https://the-decoder.com/norway-bans-generative-ai-tools-in-elementary-schools-to-protect-kids-basic-learning-skills/)
- [Amazon hopes to challenge Nvidia by selling its AI chips (TechCrunch)](https://techcrunch.com/2026/06/18/amazon-hopes-to-challenge-nvidia-more-directly-by-selling-its-ai-chips/)
- [Encryption, spyware, and now Mythos (TechCrunch)](https://techcrunch.com/2026/06/19/encryption-spyware-and-now-mythos-history-shows-why-cyber-export-control-doesnt-work/)
- [Billionaire Ambani wants AI in every call, app, and home (TechCrunch)](https://techcrunch.com/2026/06/19/billionaire-ambani-wants-ai-in-every-call-app-and-home/)

---

*本文の情報は2026年6月第3週（2026年6月21日時点）のものです。*
