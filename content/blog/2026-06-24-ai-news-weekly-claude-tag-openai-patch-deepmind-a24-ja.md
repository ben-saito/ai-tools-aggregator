# AI週間ニュース：Claude Tagの企業Slack統合、エージェントループの衝撃、DeepMindのA24映画投資

2026年6月第4週、AI業界は「AI раборает без остановок（AIは止まらない）」というテーマで展開した。AnthropicはSlackに常駐する「AI同僚」**Claude Tag**を発表し、OpenAIはオープンソースのセキュリティを守る新プログラムを開始、Google DeepMindはA24に7500万ドルの大型投資を表明した。さらにAIエージェントの「ループ」化という新しいパラダイムも提唱され、开发者コミュニティに大きな波紋を広げている。

---

## Anthropic、Claude TagでSlackに「常駐AI同僚」を実現

Anthropicは6月23日、Slackに常駐する「常駐AI」**Claude Tag**のベータ版をClaude EnterpriseおよびClaude Team顧客向けに提供開始した。既存の「@ClaudeにDM」「Claude Code in Slackでコード作業」などの機能を発展させ、**永続的なコンテキストとメモリ**を持つ新しい体験を提供する。

### 核心機能：チャネル全体で学習するAI

Claude Tagの最大の特徴は、Slackチャネルに参加したAIが**組織的知识を継続的に学習**できる点だ。ユーザーはチャネル内で`@Claude`をメンションしてインサイトを要求したり、タスクを割り当てたりできる。AIはメンションに反応するだけでなく、能動的にチャネルに参加し、チームを更新する**アンビエントモード**も搭載する。

Adm言葉が正確であれば、AIはチャネルへの参加を通じて「仕事についてますます詳しく学ぶ」ことができ adminsが許可すれば、他のチャネルからも自動的に事実を収集できる。システム管理者はClaude Tagがアクセスできるツール、情報、チャネルを指定し、AI IDは管理者が定義したチャネル内にスコープされたままとなる。これにより、法務用のClaudeがエンジニアリングチャネルに記憶を流出させることはなくなる。

### 技術的意義：自律エージェントの企業導入加速

開発者視点では、Claude Tagは**自律型コーディングエージェント**（Claude Code）と**企業Slackワークフロー**を橋渡しするコンポーネントとして位置づけられる。タスクが割り当てられると、Claude Tagはそれを段階的に分解し、利用可能なツールを使ってSlackスレッドで成果物を報告する。既存のClaude Codeによるコード生成・テスト・PR作成のワークフローとの統合を想定しており、**「コードはClaude Code、スレッド管理はClaude Tag」**という分業が現実味を帯びている。

---

## AIの世界が「loopy」に：エージェントがエージェントを呼び続ける時代

TechCrunchのRussell Brandom記者は6月22日、AI業界にEmergingする新しいパラダイム「ループ」を報じた。Anthropic Claude Code創業者**Boris Cherny**Metaの@Scaleカンファレンスで、「ループは次の	hype cycleではなく、本物だ」と断言した。

### Chernyの主張：「コードを書く→エージェントがコードを書く→エージェントがエージェントを呼び出す」

Chernyはこう語った：

> 「2年前、我々は手でソースコード書いていた。エージェントがコードを書く世界に移行している。そして今、エージェントがエージェントをプロンプトしてコードを書かせる世界に移行している。ソースコードからエージェントへの移行と同じくらい、ループは重要で大きな一歩だ」

彼は具体的に、**自分の業務で走らせている2つのループ**を明かした。1つのエージェントは継続的にコードアーキテクチャの改善を探し、別のエージェントは統合できる重複抽象化を求める。どちらもPRを提出し、コードが 끊えず変化しているため、**永久に走り続ける**。

### 技術的意味：自律無限ループの信頼性課題

「ループ」型AIは、エージェント型AIの管理を一歩進める。従来のエージェント管理は明確な目標設定、進捗の定期的な確認、逸脱の防止が焦点だった。ループはこれをさらに押し止め、**バックグラウンドでエージェントの群れが永久に動き続ける**世界を開く。

ChernyはComputer Scienceの基本である**再帰関数**（終了条件まで自身を呼び出す関数）との類似点を指摘する。大きな信頼性を置く必要がある——しかしモデルが急速に改良される中で、本格的な作業を依頼する次のステップになり得る。

---

## OpenAI、「Patch the Planet」でOSSセキュリティの最前線に

OpenAIは6月22日、セキュリティ企業**Trail of Bits**と提携し、オープンソースプロジェクトを支援する新プログラム**「Patch the Planet」**を開始した。「Hack the Planet」（映画『ハッカーズ』1995年の名台詞）にわせた名前だが、その意図は真剣だ。

### 概要：コードのEMTたち

多くのオープンソースメンテナーは、有限の時間とリソースで増加するセキュリティレポートに対応しきれない。Patch the Planetでは、Trail of Bitsのセキュリティエンジニアが**オープンソースメンテナーと直接連携**し、潜在的なコード問題をレビュー、修正とテストを開発、再利用可能なワークフローを構築する。

OpenAIのセキュリティツール——特に**Codex Security**——が支援に用いられる。Trail of Bitsのエンジニアは「コードのEMT（緊急医療チーム）」のように機能し、メンテナーに代わって問題の特定とトリアージを行う。興味深いことに、「最初の修正が降着した後、チームが継続的にセキュリティを改良するために役立つ」ことが重視されている。

### 開発者への影響：サプライチェーンセキュリティの新たな針路

log4jの事例が示すように、オープンソースプロジェクトの脆弱性は商業コードベースに 큰 문제를 일으킬 수 있다。OpenAIがTrail of Bitsと組んでこの課題に取り組むことで、**AI支援のコードレビュー**がオープンソースセキュリティの標準ツールになる可能性がある。開発者としては、依存関係の脆弱性対応工的負担軽減が期待される一方、AIによる自動修正の精度と適用範囲には引き続き注意が必要だ。

---

## Google DeepMind、A24に7500万美元を投資——HollywoodとAIの新しい関係

Google DeepMindは6月22日（米国時間）、インディー映画スタジオ**A24**に**7500万ドルの投資**を行うと発表取材された。WSJ報道によると、Google DeepMindはこの提携を「最初期そののもの」と位置づけ、AI映画製作ツールの共同開発を行う。

### 投資の背景：A24のブランド力と映画AIへの期待

A24は『Marty Supreme』『エブリシング・エブリウェア・オール・アット・ワンス』『Backrooms』などのヒット作で知られ、Timothée ChalametやAnne Hathawayと複数プロジェクトを進めている。Demis Hassabis Google DeepMindCEOは声明で「 artistsりと一緒に直接コラボすることで、 authenticで意味のあるストーリーテリングを支援するAI機能を構築できる」と語った。

### HollywoodとAI：抗争与合作

HollywoodではAI使用をめぐる論争が続いているが、A24は最初のスタジオではない。Netflixは今年早些、Ben Affleckの会社InterPositive（映画製作者向けAIツールを作成）を買収。AmazonのMGMスタジオも去年、电视・映画製作向けAIユニットを立ち上げた。AIとクリエイターの関係は「対抗」ではなく「協調」として進化している。

---

## 他の注目ニュース

- **Fika Jobs（ストックホルム）**：AIエージェントが面接を行うビデオファースト採用プラットフォームで400万美元のシード資金調達。LinkedInとTikTokの交差点のような体験を提供。
- **Salesforce Slackbot刷新**：Slackbotを単純な通知ツールからフル機能AIエージェントに進化させ、Microsoft・Googleとの職場AI競争を激化。
- **Anthropic Cowork発表**：Claude Codeの技術力を非技術ユーザーにも届けるClaude Desktopエージェント機能が登場。内部チームは約1週間半で構築した。
- **Groq 6.5億ドルの資金調達確認**：Nvidiaからの大型採用の後の 再出発。NeoCloudビジネスを強化し、新しい経営幹部を募集。

---

## 参考リンク

- [Anthropic's Claude Tag is learning your company, one Slack message at a time - TechCrunch](https://techcrunch.com/2026/06/23/anthropics-claude-tag-is-learning-your-company-one-slack-message-at-a-time/)
- [The AI world is getting 'loopy' - TechCrunch](https://techcrunch.com/2026/06/22/the-ai-world-is-getting-loopy/)
- [OpenAI launches new initiative to help find and patch open source bugs - TechCrunch](https://techcrunch.com/2026/06/22/openai-launches-new-initiative-to-help-find-and-patch-open-source-bugs/)
- [Google DeepMind bets $75M on AI's future in Hollywood with A24 deal - TechCrunch](https://techcrunch.com/2026/06/22/google-deepmind-bets-75m-on-ais-future-in-hollywood-with-a24-deal/)
- [Salesforce rolls out new Slackbot AI agent - VentureBeat](https://venturebeat.com/technology/salesforce-rolls-out-new-slackbot-ai-agent-as-it-battles-microsoft-and)
- [Anthropic launches Cowork - VentureBeat](https://venturebeat.com/technology/anthropic-launches-cowork-a-claude-desktop-agent-that-works-in-your-files-no)
- [Claude Code costs up to $200 a month. Goose does the same thing for free - VentureBeat](https://venturebeat.com/infrastructure/claude-code-costs-up-to-usd200-a-month-goose-does-the-same-thing-for-free)

---

*（本文の情報は2026年6月24日時点のものです）*
