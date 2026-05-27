# AI開発ニュース週間まとめ（2026年5月第4週）

AI業界では数学的証明の自律達成、税務AIの自己改善ループ、Google I/OでのAIアシスタント強化など、複数の重要な動きがあった。今週もAI技術の進化が止まらない。

---

## Claude MythosがOpenAIの"Erdős問題"を解決 —— AnthropicとOpenAIの数学AI競争が加熱

AnthropicのエンジニアSholto Douglas씨가 X에 공개한 내용에 따르면, Claude Mythos가 OpenAI가最近解决了的 Erdős 単位距離予想を解く实验において、「可爱く简单な证明」を使ったとされる。OpenAIは先前、この未解决问题（1946年から存在）をAIで解いたとして大きな注目浴びたが、Anthropicの结果はそれとは异なるアプローチで同じ问题を解いたとして话题になっている。

この实验は、AIが数学の未解决問題を解く能力を有する事を示すテストシステムを使用して行われた。複数のClaude Codeインスタンスが独立して问题を分析し、一つのインスタンスが解法路径を汇总して他のインスタンスに分配する形态取った。Douglas는 "serious overhang" (大きな余白) があるAI能力を示していると评价した。

数学者Daniel Litt씨는 OpenAIの结果の方が「若干優れている」と评しながらも、Claude MythosがOpenAIの解法も発見できたことを报告している。両社の竞争を通じて、AI驱动の数学発見が新たな时代に入りつつあることが确认された。

**開発者視点**: Claude Codeは自律型AIエージェント（agentic harness）として动作し、单纯なLLMとは异なる。複数のAIインスタンスが协调して复杂な数学问題を解决するこの方式は、产 业应用でも意义を持つ。税务や法务など、反復的な分析が求められるドメインへの适用が。今后の広がりに期待。

---

## OpenAI、Codexを活用した「自己改善型税务AIエージェント」を公开

OpenAIは5月27日、Creteの税理士30社以上と协働して开発したTax AIの詳細を公开した。このシステムはCodex驱动のフィードバックループにより、生产环境での使用から自律的に改善していく。

Tax AIの実績:
- 处理件数: 7,000件の纳税申告書を処理
- 税理士の作业时间: **约33%削减**
- 正确性: 最大**97%**の正确度
- 处理能力: **约50%向上**

重要なのは、システムが3个月前の初期バージョンから测定可能な改善を达成していること。Launch时に75%正确な分野完了率达到した申告书は25%だったが、今はそれ以上が达成されている。これは、AIエージェントがエンジニアの介在なしに自ら改善できる事を示す实证结果となる。

**技术적侧面**: Tax AIは、生产环境での失败情报を構造化されたシグナルに変換し、その情报を元に自律的に改善するフィードバック机构を持つ。従来の人が介在する改善プロセスと违い、 Engineer bottlenecksを招かずに継続的な改善が可能。

---

## Google I/O 2026: 「Agentic Gemini era」到来

Googleは5月中旬のI/O 2026で、Geminiの「agentic」强化を主要テーマとして取り上げた。 centainesを超える新机能が一気に発表されたが、中でも注目的是:

- **Gemini 3.5**: フロンティア知性と行动力を統合した新世代モデル
- **Gemini Appのagentic化**: 24时间365日、主动的にユーザーに Појединаで支援
- **Gemini 3.5の性能向上**: コード生成、数学、推论能力の大幅强化

Sundar CEOは keynoteで「 Gemini era」と表现し、AIアシスタントが单纯なツールから自律的な支援者へと进化していることを强调了。

また、Google AI Searchも新机能としてオリジナルコンテンツの発见性が向上했다。これはAI生成コンテンツ氾濫の中で、优质的ソースを特定更难ユーザーに寄り添った服务を目指すもの。

---

## Anthropic、韩国代表にKiYoung Choiを指名——ソウルオフィス开设に向けた布石

Anthropicは5月26日、韩国にKiYoung Choiを代表董事に指名했다고发表了。韩国ソウルオフィスの开设准备进めており、アジア太平洋地域での事业扩大を加速する意图が见え隠れする。

KPMGとの戦略的连携（27万人以上の従業員がClaudeを活用）、PwCとの enterprise取引扩大、SpaceXとの计算力资源供结契约など、Anthropicの企业向けビジネスが急速に扩大している。今後の亚洲市场での動きにも注目。

---

## AI规制・伦理の動き: 教皇leo XIVの回勅と教师组合のAI利用制限论

AIの社会への影響也在今週複数の角度から议题化された:

- **教皇leo XIV**の回勅「Magnifica humanitas」: AIの人間性を巡る论议が国际的に关注される中、Anthropicの共同创业者Chris Olah씨가 评论を发表
- **全米教师组合**がAIと画面利用の制限を求め——教育现场でのAI活用に警钟
- **Time Magazine**: AIへの課税（Tax AI）の论点——AIの发达が経済にもたらす影响についての讨论

技术的进步と社会的规制のバランスが、的行业の重要课题として浮上している。

---

## 参考リンク

- [Claude Mythos solves OpenAI's Erdős problem — The Decoder](https://the-decoder.com/claude-mythos-reportedly-solves-openais-landmark-erdos-problem-with-a-cute-simple-proof/)
- [Building self-improving tax agents with Codex — OpenAI](https://openai.com/blog/building-self-improving-tax-agents-with-codex)
- [I/O 2026 — blog.google](https://blog.google/)
- [Anthropic Newsroom](https://www.anthropic.com/news)
- [Google News AI](https://news.google.com/rss/search?q=AI+OR+machine+learning+OR+LLM+OR+generative+AI)

---

*（本文の情報は2026年5月28日時点のものです）*
