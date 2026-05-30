# AI開発最新ニュース（2026年5月30日）— 開発者必需語るAIコーディング障壁とJack Clark考える未来

2026年5月30日、AI開発業界では、AIコーディングツールへの依存が人事評価に影響を与える新たな潮流、Scott Wu（CognitionCEO）の「AIは人間の代わりではなく補助」という声明、そしてJack Clark（Anthropic共同創業者）による「SINGULARITYへの準備」という公開Essayなど、開発者にとって重要な技術的・戦略的話題が顔を揃えている。本稿ではこれらの最新動向を深掘りする。

---

## TechCrunch調査：、AIなしでは働きたくないコーダーが増加——現場の声と論争

TechCrunchが5月29日报じたところによれば、AIコーディングツール拒绝渗编程现场の採用評価に深刻な影响を与えており、「AIなしでは働けない」と公言するソフトウェアエンジニアが増加しているという。この现象は「tokenmaxxing」などと呼ばれる業界用語まで生んでいる。

### 問題の核心——コードの質と量のトレードオフ

报道によれば、AIツールを使って代码を生产する速度は向上しているが、その质が犠牲になっている可能性が-researchersによって警告されている。具体的には以下の点が问题了となっている：

- **Hallucination（幻觉）の增加**：AIが生成したコードには实际にはない関数やライブラリへの参照が含まれることがあり、これがプロダクション環境での障害になっている
- **テスト覆盖の低下**：AI生成コードを无批判に导入することで、单元テストの覆盖率が低下する事例が报告されている
- **技術的负债の累积**：高速生成されたコードは保守性强低く、长期的な技术的负债となる风险

ある大肠テック企業のVP of Engineeringは语っている：「候选者の面接で『この子はAIなしでコードを書けますか？』と确认するのが стандарт procedureになりつつあります」

### 「tokenmaxxing」の实态

行业内で「tokenmaxxing」と呼ばれる新しいコンセプトが界在必说着关注。这是防ぐのために行动することが増え、AIツールが生成するトークン数そのものを最大化することが目的的战斗。结果として、开发者들은 불필요한コードを書いて审查を通过させる习惯が身についてしまった。これは代码の实质的な价值评价を困难にしており、人事評価の基准そのものが揺らいでいる。

---

## Cognition CEO Scott Wu——「Devinは人間の替换不是为了」

TechCrunchが同日に伝えたところによれば、AIコーディングエージェント「Devin」を開発したCognitionのScott Wu CEOは、AIコーディングエージェントは人間の程序员を替换するために设计されたものではなく、「人间とAIの协力」を目指すものだと强调した。

### Devinの设计思想

Wuによれば、Devinは以下の 원칙に基づいて設計されている：

- **人間の监督を必须とする**：Devinの动作はすべて人間の确认を经由する。完全に自律的なコード生成・配置は行わない
- **反復学习和人间のフィードバック**：Devinは各プロジェクトで人間のフィードバックを吸收し、性能を向上させていく設計
- **コードの品质而不是量**：より少ないコードでより高い品质を実現することを重视し、トークン数の最大化を目的としない

Wuは语っている：「AIが得意なのは重复的な作业と高速な探索です。 하지만人间が得意なのは、问题の本质を理解し、创造的な解決策を构思し、ビジネス上の判断を下すことです。 Devinはそのためのツールであり、替换するためのものではありません」

### 产业へのインパクト

この立场は产业内で赞否両论を生んでいる。赞同派は「AIに仕事を夺われる不安が減り、心理的安全性が高まる」と评价する。一方、批判派は「人间の仕事を减らすという不过去な流れを只是延迟させているだけ」と指摘する。

Cognitionは现在、Devinの企业向け贩売を強化しており、2026年Q2のARRは 前年比300%增长达到150 million突破了としている。

---

## Groq——$650Mの資金調達交渉とAI推论へのフォーカス

TechCrunchが5月29日报じたところによれば、Nvidiaの$20B规模的「not-acqui-hire」（实际上は人材获得并购）の後、AIチップスタートアップのGroqが$650Mの内部資金調達を进めていることが明らかになった。这是推论（Inference）特化型AIチップのリーダーとして、エヌビディアとの竞争関係を强めている。

### 资金使途の目标

Groqの资金使途の主な目标は以下の通り：

- **推论特化芯片の开发**：トレーニングではなく推论に最適化した新一代芯片的设计
- **データセン夕増强**：推论ワークロードに特화한 대규모 데이터센터建設
- **エンタープライズ贩卖强化**：企业向けAI推论服务的拡充

### 推论市場の竞争激化

Groqの資金調達は、推论市场的竞争が炽热化していることの反映だ。エヌビディアはトレーニング市場での圧倒的なシェアを持つが、推论市場の增长に合わせて、 Cerebras、Graphcore、HabanaLabsなどのスタートアップが殊更の inúmerを受けている。Groqは推论特化型设计上差别化を図っており、高速・低電力の推论处理能力で企业需要の取り込みを狙う。

---

## Jack Clark（Anthropic）——「singularityへの准备」というEssay公开

Anthropicの共同創業者であるJack Clarkが、Oxford大学HAI Labでの演讲为基础とした长文Essay「Reckoning with the future; and a singularity story」を公开した。Import AI 458として配信されたこのEssayは、AIのExponential进步がもたらす未来への向き合い方を説いている。

### 核心メッセージ——「未来を探索するか、現在から撤退するか」

Clarkの主张の核心は次の通り：

> **「AIの急速な进步は私たちすべてに选びを强制している：未来を探索するか、現在から撤退するかだ」**

过去数年間のAI进步を振り返ると、2023年3月にLLMが律师资格的試験通过了し、2024年7月に 国际数学奥林匹克で银牌、2025年7月には金通過达成、そして2025中にはAIが新しい数学的証明を共著するという成就があった。これらの成果はすべて同一の技術基盤から生まれており、その技術基盤は継続的に进步し続けている。

### 「Explorers」と「Retreaters」の分断

Clarkはこの演讲で、AIの进步に向き合う人群を两种に分类している：

- **Explorers（探索者）**：AIの进步を受け入れ、その能力を活用して自分の生活を向上させ、产业的・学术的限界を押し広げる集团
- **Retreaters（撤退者）**：AIの implications を无视し、技術を否定하거나无视することで対応する集团

Clarkによれば、Retreaters の态度は个人レベルでも社会レベルでも适应性を失わせ、AIのcontinu advancementへの対応能力を弱体化させる。

### Anthropic社内の变化

Clarkは、2025年11月の paternity leave から2026年2月に复帰した际、社内で信じられないほどの变化が起きていたことを明かしている。Opus 4.6の性能向上が实现し、同僚髪がClaude Codeなどのツールに作业を委托するまでになっていた。 certain開発者は代码を书かなくなり、ツールに委托し、自分の役割が「作业の管理と出力の确认」に转变している。

これは「centaur」の时代——人间とAIが协业して、それぞ单独より優れた结果を出す时代——が既に始まっていることの证据だとClarkは主张する。

### 「SINGULARITY不远」

Clark警告する：「近い将来、贤いEnoughなAIシステムが自分の后継者を作成し、再帰的な自己改善を開始できる可能性がある。これは经济と世界全体を根本的に变换する。这类技术从未存在过我认为这种人态が两年以内に 실현される可能性があり，也许それよりもっと早くなるかもしれない」

---

## 参考リンク

- [Coders are refusing to work without AI — and that could come back to bite them (TechCrunch)](https://techcrunch.com/2026/05/29/coders-are-refusing-to-work-without-ai-and-that-could-come-back-to-bite-them/)
- [Cognition's Scott Wu says AI coding agents shouldn't replace humans (TechCrunch)](https://techcrunch.com/2026/05/29/cognitions-scott-wu-says-ai-coding-agents-shouldnt-replace-humans/)
- [After Nvidia's $20B not-acqui-hire, AI chip startup Groq reportedly raising $650M (TechCrunch)](https://techcrunch.com/2026/05/29/after-nvidias-20b-not-acqui-hire-ai-chip-startup-groq-reportedly-raising-650m/)
- [Import AI 458: Reckoning with the future; and a singularity story (Jack Clark)](https://importai.substack.com/p/import-ai-458-reckoning-with-the)

---

*（本文の情報は2026年5月30日時点のものです）*