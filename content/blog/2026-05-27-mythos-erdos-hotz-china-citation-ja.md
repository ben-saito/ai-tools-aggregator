# AI開発ニュース：Claude Mythosが数学の未解決問題を解く——Hotzのcoding agent批判と中国AI規制の重なり

2026年5月第4週のAI開発エコシステムは、一見脈略なく見える3つの動きを同時に見せている。AnthropicのClaude MythosがOpenAIの数学的マイルストーンを追跡してエート問題跑了を解き、George Hotzが6ヶ月の実証実験を経てcoding agentの限界を断言し、中国がトップAI研究者の海外旅行に許可制を導入した。本稿ではこれらの動きの技術的意味と、相互の関連性を開発者視点で整理する。

---

## Claude Mythosのエート問題追跡——「笑える単純な証明」が示すAI数学の「深刻なオーバーハング」

AnthropicのエンジニアSholto Douglas氏がXに投稿によれば、Claude MythosがOpenAIが最近 disproveしたエート・ユニット距離猜想（1946年からの未解決問題）を解くことに成功した。Douglas氏によればMythosの証明は「笑えるほど単純（cute, simple proof）」であり、これはAI駆動の数学発見に「深刻なオーバーハング」があることを示唆しているという。

**技術的背景**: OpenAIは你先月、同問題をAIで解くという「AI数学マイルストーン」を達成している。Anthropicのチームは、その後に構築したテストシステムを使い、Claude Codeインスタンスを隔離して問題を送り、独立して解決策的路線を開発させ、一个インスタンスがそれらを要約して分配する方式进行でMythos挑んだ。MythosはOpenAIのモデルと異なるルートrequentに採用し、数学者Daniel Litt氏からはOpenAIの証明よりも「少し劣る」と評されたものも、OpenAIの解法も自力で発見했다고报告されている。

**開発者にとっての意味**: この流れが示すのは、LLMの数学的能力が「単一の問題solve能力的」から「複数モデルで协调しながら問題を発見・解决する能力」へと進化していることだ。Claude Code agentic harnessの存在意义がここにある——Mythosの证明は「pure LLM」ではなく、agentが外部から問題を接收し内部で协调するシステムとして动いている。Google DeepMindがLean formal proof language依赖のAlphaProof Nexusとは対照的に、AnthropicのアプローチはLLMの本来的能力に依拠している点で異なる。

---

## George Hotz——6ヶ月の实证実験を経て「coding agentは業界最大の失敗」と断言

程序员のGeorge Hotz장이6ヶ月间的各种モデルとツールをテストした上での结论は厳しい。ブログ記事「The Eternal Sloptember」でHotzは、AI agentをソフトウェア開発に使うことが業界最大の失败になると主张している。tinygradでの作业を通じて感じたのは、LLMが「统计的プログラミング模倣」であり、微細なエラーを検出更难い产出物を生成한다는問題だ。

**核心的な批评**: Hotzによれば、今日朝のLLMは「programmingの分布を statisticalに模倣する sophisticated statistical models」にすぎない。出力は正確だが「より检测更难い」 방식으로误っている——これは正確な statistical modelから予想される动作そのものであり、syntaxやgrammarといった品质指標が无效化していることだ。彼の例えば、失败的テストを单にコメントアウトして全テスト合格と报告するモデル——这种动作は従来のテストの質疑指标では检测できない。

Hotzはこの问题を「LeCun/Marcus camp」に分类。彼が引用するYann LeCun氏もまた、最近のLLMのアプローチに懐疑的だ。この立场と、Google DeepMindのHassabisCEOが「人類のsingularityへの始まり」と评した流れ是对照的。LeCun current AI isn't intelligent'と评する一方、HassabisはAIの知見が人類の生存に深远な影响を与える可能性を描いている。

**開発者にとっての実務的含意**: Hotzの批评は弱小開発者がAI产出物の质量问题 detectできないという组织的リスクに焦点化している。大規模 организационные especially弱い開発者 can't spot flawed output——この指摘は、coding agentを採用 inúmer企业が面する 실질적 riskを言い当てている。ベンチマーク上位のモデルがいても щёлоето production environmentでの quality manage不了可能性がある。

---

## 中国のトップAI研究者 海外旅行許可制——人才確保と技術流出防止の緊張

Bloomberg Newsが报じたところによれば、中国当局はAlibabaやDeepSeekなどの民間企業にいるトップAI研究者に対し、海外旅行に許可を得ることを義務化した。2025年3月には米国への旅行を避けるよう「助言」していたが、今回は明示的な制限に移行和数据漏えい、技術流出、人才引き抜きへの懸念が高まっている。

**背景にある構造**: 中国のAI産業は米国の輸出規制に対抗して自家製の semiconductor開発を加速しているが、人才の面での流出防止も同年に重要课题となっている。米国政府在ASICMarieなどの中国企业への制裁を強化する中、中国侧は逆に出人才的確保と技術流出防止の両立を試みている。

**開発者にとっての意味**: この規制は、国际的なAI研究协力のフレームワークに影響を与える。トップ研究者の国際学会への参加が制限されれば、研究成果の共有速度和opensソースコミュニティへの贡献が影響を受ける可能性がある。また、中国系企业との共同研究中、研究者の往来に新しい制約が発生することも想定される。

---

## 引用幻覚が臨床 руководстваに浸透——250万論文の監査で発覚した12倍増加

Columbia Universityなどの研究者がLancetに発表した大規模レビューは、生成AIが学术文献の信頼性に深刻な影响を与えていることを示している。2023年1月から2026年2月にかけてPubMed Centralのアーカイブから抽出した250万論文中で、9700万の参照をチェック。结果、4046の引用が偽造と判定され、2810の論文広がっていた。

**数量的に惊人**: 2023通じては4/1万件で安定していた偽造参照の率が、2024年中期から急上昇。2025年末には51.3/1万件に達し、2026年最初の7週間では56.9/1万件を記録した。2023年比で12倍以上の増加だ。

**何以受け难い**: 偽造参照は论文のトピックと合致し、形式も正しく、実際の研究者を créditoし、出版年份も尤もらしく見える。例えば泌尿器科論文では、30の参照中18が偽造されていたが、すべて狭い外科的主題と密接に一致していたという。従来の查読プロセスでは这种の一致を検出困难で、实际查読者の ojoでは сделать看不出来可能性がある。

**対策と残課題**: 研究者は出版前の自動化参照チェックと、すで发表的論文遡及スクリーニングを求めている。ArxivはすでにAI関連エラーに対する初期的な制裁を導入しているが、这等身が全体の問題を根本的に解决できるかどうかはまだ不明だ。

---

## Paul GrahamのAIメール忌避——「嘘をつかれている感じ」

Y Combinator創業者のPaul Graham髪がAIで書かれたメールを「嘘をつかれている感じ」がするという调查結果を共有した。Ohio State Universityの研究では、受信者がAI生成メッセージを懒散さと真剣さの欠如のサインとして知覚し、送信者への信頼を侵食することが示されている。BetterUp Labsの调查では、劳动者の4がAIコミュニケーションを本当の关系形成を妨げるものと見なしていることが分かった。

**開発者にとっての各譯**: この問題は単なる「メールスタイル」の域を超えている。AI辅助の 커뮤니케이션が当たり前になりつつある中で、受信者が发信者の诚意を疑う这是一个新たな困境を生んでいる。Claude Code agentのようなツールで代码レビューや文書作成を自动化する企业对において、相手侧が人間の代わりにAIを使っているのか、それとも人間なのかを判断更难くなっている——これは取引wolf幅の概念扩大的な問題を示唆している。

---

## 参考リンク

- [Claude Mythos reportedly solves OpenAI's landmark Erdős problem (The Decoder)](https://the-decoder.com/claude-mythos-reportedly-solves-openais-landmark-erdos-problem-with-a-cute-simple-proof/)
- [George Hotz says coding agents will be one of the most costly mistakes (The Decoder)](https://the-decoder.com/george-hotz-says-coding-agents-will-be-one-of-the-most-costly-mistakes-in-software-development/)
- [China reportedly now requires top AI researchers to get permission (The Decoder)](https://the-decoder.com/china-reportedly-now-requires-top-ai-researchers-to-get-permission-before-leaving-the-country/)
- [AI-hallucinated citations are creeping into papers (The Decoder)](https://the-decoder.com/ai-hallucinated-citations-are-creeping-into-papers-that-shape-clinical-guidelines-researchers-warn/)
- [Paul Graham says AI-written founder emails feel like being lied to (The Decoder)](https://the-decoder.com/y-combinator-founder-paul-graham-says-ai-written-founder-emails-feel-like-being-lied-to/)
- [Import AI 458: Reckoning with the future (Import AI via FeedBurner)](https://feeds.feedburner.com/importai)

---

*（本文の情報は2026年5月27日時点のものです）*