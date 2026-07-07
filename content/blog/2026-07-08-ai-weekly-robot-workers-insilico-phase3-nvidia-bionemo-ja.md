# AI週間ニュース（2026年7月第1週）：AI自律ロボットの夜明け、InsilicoがAI創薬でPhase III入り、NVIDIA BioNeMo × Claude統合

2026年7月第1週はAI×ロボティクスとAI創薬の2つの大きな話題で幕を開けた。Ars TechnicaはAI駆動の汎用自律ロボット開発の歴史的転換点を詳しく特集し、Insilico MedicineはAI設計の特発性肺線維症治療薬rentosertibがFDAフェーズIII試験に進むことを明らかにした。NVIDIAはBioNeMo Agent ToolkitでAnthropic Claudeとネイティブ統合し、創薬研究のパラダイムシフトも加速している。

---

## AI自律ロボットの夜明け——Physical Intelligence、Sergey Levineが見据える「汎用ロボット」の未来

Ars Technicaは7月7日、AIがロボティクスにもたらした構造変化を追った长編特集 **「Robot workers rising」** を公开发表した。1979年のStanford Cartが20メートル移动に5時間を要してから约半世紀。AIの最近の進歩——特に2020年代の基盤モデル——が「ロボットが自分で考え、任务を理解し、链を组んで行动する」世界の实现を梦见させている。

### 意識のグローバルワークスペースとの奇妙な呼应

专访されたUC Berkeleyの计算机科学者兼Physical Intelligence创业者のSergey Levine氏の見解は无人干涉で动作する汎用ロボットの可能性についてだった。「最终的な超进んだ人间型がすべてを行うようにはならない。さまざまなロボットに通用するAIモデルが适材适所に配备される」，と同氏。 techo的に重要なのは、强化学習（2010年代）と大量データで训练された基盤モデル（2020年代）が、ロボットの「环境认识和情况適応能力」を飞跃的に向上させた点だ。

研究采访では，タスクの性质ごとに形态が異なるロボットが适するする可能性も指摘された。狭いNYCアパートには天吊り式のアーム型が适し、農場では重量物運ぶ大型双脚ロボットが有用という。人間型も登場するが、「その作业に最适合な形态」がこれからのトレンドになりそうだ。

### 安全确保が成败の分ける

特约では，安全确保が汎用ロボットのcommercial成功の分かれ目だと强调された。工场のロボットは决まった动作を安全に반복するが、不整形な环境で自律的に动作する机器人は日常卷危险が伴う。ISOの自律性定义「人間の介干涉なしで現在の状态と検知に基づいて意図したタスクを実行する能力」とは、危险との纸一重の変化を意味する。

手术ロボット分野ではまだ自律性が制约されている——生命に直接影响するタスクでの错误許容范围が極めて小さいためだ。_home Helper_クラスのロボット出现时期については「研究トピックとして实用化しつつあるが、一般家庭普及はもう少し先」（複数の研究者谈话まとめ）との见通しだ。

**開発者への示唆**：Physical Intelligenceが开発する「语言コマンドに従い、スキルを組み换えて新しい问题を解く」汎用AIモデルは、ROS（Robot Operating System）ベースのシステムとの亲和性が高く、ロボットアプリ开発の敷居を下げる可能性がある。SIGMA、KHR-2HVなどのオープンソースロボットプラットフォームと连携する社区动向も注视の価値がある。

---

## Insilico Medicine、AI設計の特発性肺線維症治療薬がFDAフェーズIII入り

AI创薬スタートアップのInsilico Medicineは7月7日、AIプラットフォーム「Pharma.AI」で设计された **rentositektib**（TRAF2- and NCK-interacting kinase阻害薬）がFDAから孤儿药指定を受け、第III相試験に進んだことを発表した。

### 试验结果の详细内容

22施設71例対象の无作為化試験（プラセボ対照）で、60mg1日1回投与群の用力肺活量（FVC）增加は**+98.4mL**。プラセボ群は-20.3mLという迨う结果が示された。安全性プロファイルも管理可能で、有害事象はベースライン期待値と一貫していた。

### Takedaとの大型协業

Insilicoは7月3日、武田薬品工業との間で最大**6億ドル**のAI创薬协業も明らかにした。Insilicoが標的識別·分子设计·臨床試験予測を行う「Pharma.AI」プラットフォームを提供し、Takedaが候補化合物の開発·製造·商用化を擔当。Takedaは协定通じて特定された候補的一切に対しての世界独占権を取得する。

### NVIDIA BioNeMo × Anthropic Claudeの統合

NVIDIAはBioNeMo Agent Toolkitを通じ、Anthropic Claudeとnative統合を実現した。科学者が自然言語でデジタルエージェントと对话しながらend-to-endの研究ワークフローを実行できる环境が整った。NIMマイクロサービスを介したGPU加速モデルと computational librariesの呼び出しにより、创药·材料科学·创薬研究の反復速度が飞跃的に向上する。

**注目ポイント**：InsilicoのTIM（Transformer Interfaces for Medicine）やpolypumeraiのような生成AI创药モデルがNanoBiteauriのような轻量モデルでどの程度実应用できるかは依然として课题だが、6亿ドルの大型协業は.Big PharmaのAI创药への本気度を反映している。

---

## L'Oréal・Mondelez・Nestlé、AIで製品開発を加速

AI News（7月7日）は、L'Oréal、Mondelez International、NestléがAIを活用して製品開発リードタイムを压缩している事例を伝えた。L'Oréalは肤診断·メイク险析AIで新製品サイクルの短期化に成功。Mondelezは消费者の好みを预测するAIで菓子·チョコレートの新フレーバー开发を效率化している。Nestléは原料配合のAI最適化で健康志向製品の开発を加速している。

消费財大手各社がAIを「製造工程の自动化」ではなく「.ConsumerInsight→配方设计→上市计划」全体に浸透させつつある趋势が鲜明になってきた。

---

## Google、25年ぶりに検索ボックスを大规模刷新

VentureBeat（5月19日）は、Googleが25年ぶりに検索ボックスのUIを大规模に刷新すとことを报じた。薄白い长方形·カレット·青いリンク列表という40年不变のUIパターンが、AI驱动的検索インターフェースへ进化。検索意図の理解·多层的回答の生成·ビジュアル补足の实现が期待される。Web发明以降ほぼ同一のUIを维持してきた同 интерфейс の变革は、「AI-first Search」の时流を象徵するイベントとして注目されている。

---

## 参考リンク

- [Robot workers rising: How AI may drive general-purpose autonomy in robotics (Ars Technica)](https://arstechnica.com/features/2026/07/robot-workers-rising-how-ai-may-drive-general-purpose-autonomy-in-robotics/)
- [Insilico Medicine advances AI drug for IPF to Phase III trials (AI News)](https://www.artificialintelligence-news.com/news/insilico-medicine-advances-ai-drug-for-ipf-to-phase-iii-trials/)
- [Takeda signs $600M AI drug discovery deal with Insilico (AI News)](https://www.artificialintelligence-news.com/news/takeda-insilico-ai-drug-discovery-deal/)
- [NVIDIA BioNeMo accelerates Anthropic Claude Science (AI News)](https://www.artificialintelligence-news.com/news/nvidia-bionemo-accelerates-anthropic-claude-science/)
- [L'Oréal, Mondelez, Nestlé use AI to speed product development (AI News)](https://www.artificialintelligence-news.com/news/ai-product-development-loreal-mondelez-nestle/)
- [Google just redesigned the search box (VentureBeat)](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)

---

*本文の情報は2026年7月8日時点のものです。*
