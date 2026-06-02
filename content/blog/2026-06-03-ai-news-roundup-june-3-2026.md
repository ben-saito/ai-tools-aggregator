# AI開発ニュースまとめ（2026年6月3日）

AI業界は費用対効果の議論と実利用の拡大が并行する複雑な局面を迎えている。UberがAI支出上限を導入する一方、Microsoftは開発者向けの新しいテストフレームワークとAIアシスタントを発表、Googleは深偽検出機能をAndroidに標準搭載した。先週の注目ニュースを整理する。

---

## Uber、月$1,500のAI支出上限を導入

Uberが従業員每人每月$1,500のAI利用上限を設定したことが明らかになった。同社は今年4月、CTOが「4个月で年間AI予算を使い果たした」と发言しており、内部で积极的にAI利用を促進していた反動として支出上限に踏み切った。

### 背景：競争的利用文化が生んだ在庫

The Informationの報道によれば、Uberは以前従業員に「尽可能多用AI」を奨励し、内部リーダーボードでAI利用率を競争させていたという。しかしCOOのAndrew Macdonald氏はポッドキャストで「AI利用と新機能開発の因果関係は明確にできない」と述べておりROIへの疑问を呈している。

### 業界全体への示唆

この事例は、AI導入が「コスト削減・生産性向上」を自动でもたらすわけではないことを示す。Claude CodeやCursorなどのAI编码ツール利用が急速に拡大する中で、企業は実際の効果测定と支出管理の两方面で課題に直面している。支出上限という手段は短期的な止血，但对于AI의価値を信じて大规模投资している企业にとって重要な戦略的問いかけでもある。

---

## Microsoft、ASSERTを発表：自然言語でAI振る舞いテスト

Microsoftは6月2日、ASSERT（Adaptive Spec-driven Scoring for Evaluation and Regression Testing）を公开发表した。オープンソースのフレームワークで、自然言語で記述したAIの期待振る舞いを自动でテストケースに変換し、評価を行うことができる。

### 解决的问题

従来のAI評価は、HELM（Stanford）やMLCommonsのAILuminateのような一般的なベンチマークに依存していた。しかし产品に組み込まれたAIが「企业のポリシーや应用文脈に沿って正しく动作する」ことを保证するには不十分だった。ASSERTは企鹅独自のルール（例：社内文书調査AIは社外へのメール送信禁止、机密情差はC级别経営幹部に限定など）を自然言語で定義就能生成相应的测试ケース。

### 技術的アプローチ

ASSERTは以下のフロー动作する：

1. 自然言語の 목표・ポリシー・期待振る舞いを入力
2. 结构化された許容/不可行為に转换
3. 问题シナリオとテストケースを生成
4. ターゲットシステムで実行
5. 結果をスコア化、失敗経路を記録

负责AIのCRO Sarah Bird氏によると、「信頼できるシステムを作るには、应用固有の評価を多层的に行うべき」という。ASSERTは构建时、配布後、継続的モニタリングの全フェーズで活用できる。

---

## Microsoft Scout：OpenClawインスパイアの个人AIアシスタント

MicrosoftはBuild conferenceでScoutを発表しました。OpenClawのコンセプトをMicrosoft 365環境に导入した永続的なAIアシスタントで、用户ごとに名前をつけられ、継続的にフィードバックを与えて训练することで personalizationが加深していく。

### 主な特徴

- **永続的なアイデンティティ**：用户の作业パターンを记忆し、時間とともに进化
- **スキルのカスタマイズ**：カレンダ管理、议事草稿作成などのプリパック済みスキルに加え、用户が独自のスキルを开发可能
- **Microsoft 365统合**：クラウド 기반으로デスクトップとブラウザ双方で动作、受信トレイ・カレンダー等と連携
- **ポリシー準拠システム**：内置の監査機能でAIのエージェント動作を継続的に監視

### OpenClawからの影响

OpenClawは2026年头几个月でAI业界に大きな影響を与えた后、创始者がOpenAIに採用されたことで注目度が下がったが、その影响は今もMicrosoftの制品戦略に见える。ScoutはOpenClawの「无拘束なAIエージェント」という侧面と、企业環境での「安全で監査可能な」assistantという必要条件の妥协点として设计されている。

---

## Google、Androidに深偽通话検出機能を搭载

Googleは6月2日、AndroidのPhone by Googleアプリに伪装通话検出機能を世界で堂堂導入すると発表した。AI深偽技术を使った电话詐欺から用户を守るための機能で、Android 12+のデバイスに今月からロールアウト始まる（まずはPixelから）。

### 动作原理

機能は「デジタルハンドシェイク」方式を採用。两人がPhone by Googleを利用している場合、発信者の端末から着信先にirmative确认信号が送られる。攻撃者がAIで谁かを装って电话をかけた场合、この确认信号が欠落するため、代わりに本物の発信者の端末に「この电话をかけていません」と确认する。もし本当的电话でなければ、画面に警告が表示される。

### なぜ今か

消费者が见知らぬ番号からの电话に出なくなる倾向が強まる中、攻击者は信頼される番号をスプーフィングし、AI深偽で家族の上司になりすます手口に转移している。Googleの报告では这种手口が急速に增加しており、既存の对策では不足していた。

### 他のAndroid新機能

同日に発表された其他的更新：

- **Google Photos「ワードローブ」**：衣類の虚拟试着機能（美国、印度、ブラジルで来週开始）
- **Circle to Searchの拡張**：服饰全体を一度に検索可能に
- **Google Play Books「Catch me up」**：読書中のストーリーを再把握するリキャップ機能

---

## Google検索ボックス刷新：25年ぶりの大变革

VentureBeat报道 따르면、Googleは検索ボックスのデザインを初めて大幅度に見直す。25年ぶりの规模的改变で、AIネイティブの検索体験への移行を加快推进する策略との见方が有力。

### 刷新の意义

従来の十时型検索から、AIが用户の意图を先取りする「动态的検索インターフェース」への移行，标志着GoogleがSearchにAIを深度統合する战略の加速を示している。的具体的な仕様变化については今後の発表が待ち望まれるが、 검색의 본질적変化に対する業界の期待の高さが伝わる。

---

## まとめ

| トピック |  키워ード |
|----------|-------------|
| UberのAI支出上限 | 企業AI ROI、費用管理、エージェント编码ツール |
| Microsoft ASSERT | AIテスト自動化、自然言語仕様、MLCommons |
| Microsoft Scout | エージェントAI、Microsoft 365、パーソナライズ |
| Google深偽検出 | Android、RCS、移动诈骗防止 |
| Google検索刷新 | AIネイティブ検索、UX大变革 |

6月はBuild conferenceなど企业の大型発表が続く時期であり、AIの「実験段階」から「実用・管理体制」への移行が象徴的に进んでいる。今後の焦点は、これらの技术在的企业で本当にROIをもたらすかどうかの验证にある。

---

## 参考リンク

- [Uber caps employee AI spending](https://techcrunch.com/2026/06/02/uber-caps-employee-ai-spending-after-blowing-through-budget-in-four-months/)
- [Microsoft ASSERT](https://techcrunch.com/2026/06/02/new-microsoft-tool-lets-devs-spin-up-ai-behavior-tests-using-text-descriptions/)
- [Microsoft Scout](https://techcrunch.com/2026/06/02/microsoft-launches-scout-an-openclaw-inspired-personal-assistant/)
- [Google fake call detection](https://techcrunch.com/2026/06/02/google-rolls-out-fake-call-detection-to-protect-against-ai-deepfake-impersonation-scams/)
- [Google search redesign](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)

---

*（本文の情報は2026年6月3日時点のものです）*