# AI開発ニュースまとめ（2026年6月25日〜7月1日）

2026年6月最終週は、Google I/O 2026の熱い発表を筆頭にAI検索体験の大変革、そしてClaude史上初のデスクトップAIエージェント「Cowork」の登場など激動の一週間となった。本稿では今週の最重要AIニュースを技術的に深掘りしてレポートする。

---

## Google I/O 2026：25年越しの検索ボックス大变革

Googleは6月第2週に開かれたI/O 2026で、同社史上最大級となる**検索体験の刷新**を発表した。25年間ほぼ変わらなかった検索ボックスが、マルチモーダルAIインターフェースへと生まれ変わる。

### 検索ボックスそのものがAI对话の入口に

 الجديدの検索ボックスは以下の3つの大きな進化を遂げた：

- **動的-expansion（拡張）**: 従来の狭いテキストフィールド 대신、長い会話的なクエリを كاملةに受け付ける設計に変更
- **マルチモーダル入力対応**: テキスト뿐ではなく、画像・PDF・動画・Chromeタブのコンテンツを検索ボックスに直接ドロップ可能
- **AIクエリ Suggestion System**: 単純なオートコンプリートとは異なり、複雑なクエリを自然に構成するための「AI搭載coach」を実装

Google VPのLiz Reid氏は「25年以上の検索ボックス大革命」と表現。AI Modeは既に**月間10億ユーザー**を達成し、クエリ数は四半期ごとに倍増している。

### AI Overviews + AI Modeの完全統合

最も重要なアーキテクチャ変更が**AI OverviewsとAI Modeの統合**だ。従来のAI Modeは別途インターフェースが必要だったが、新たな検索フローでは単一の検索ボックスから两方の体験をシームレスに切り替えられる。

これにより、ユーザーはAI生成のサマリーを受け取った后、引き続きフォローアップ質問を投げかけ.click-throughで外部サイトに出る必要がなくなる。Googleは「ユーザーが『従来のページ』と『AI.forward体験』のどちらを使うか考える必要がなくなった」と説明する。

### Gemini 3.5 Flash： البحثAIの新しい水泥

搜索体験の裏側で走るのは、GoogleがI/Oで発表したばかりの新モデル**Gemini 3.5 Flash**だ。Google CEOのSundar Pichai氏は「**top right quadrant**（智能と速度の両方で優位）」と評した。

Googleによると：
- Gemini 3.1 Pro对比でほぼ全てのベンチマークで上风
- 出力トークン速度は同类 frontier model 比で**4倍高速**
- Artificial Analysis指数で「一種別のなかに立つ」性能

每秒数万トークンを処理するこの速度감이重要だ。AI.search体験で検索ボックスの响应が迟くなれば、ユーザーは元のキーワード検索に戻ってしまう。Googleは品質とスループットの両立をGemini 3.5 Flashで実現した。

### リアルタイム.generative UIと情報エージェント

Googleは「**生成UI**」と呼ぶ新机能も発表。黑洞が時空に与える影响をユーザーが質問すると、リアルタイムでインタラクティブな視覚化をAI Overview内に生成できる。

さらに注目的是「**情報エージェント**」の登場だ。ユーザーは検索ボックス内で24时间365日Webを監視するAIエージェントを設定できる。特定の市場の動きを追跡하거나、アパート探しを代理で進んでもらう——这些都是「search内のagent」に対応する。

これらのエージェントはGoogle I/Oで发表了「**Gemini Spark**」（24/7个人AIエージェント、Google Cloud上の専用VMで稼働）や「**Universal Cart**」（AI驱动の横断ショッピングカート）とともに、Googleの「AIによる能动的行动」戦略の一部だ。

### 1900億ドル капитальных расходовが語る戦略

Pichai CEOは2026年の資本开支 규모を**約1800〜1900億ドル**と予想を示した。4年前の310億ドルから実に6倍に増える計算で、その绝大部分がAIインフラ向けだ。「Searchは世界で一番利用されているAI製品」という表述通り、Googleの今后的战略方向が明確になった。

### 出版社・広告主に残る課題

AI Overviewsが既にWeb上の情報を综合して直接答案を返す構造になっている点上、出版社からは「ユーザー流出」への不安が滴っている。Googleは「AI機能が出版社へのトラフィックを増やす」と主張するが、新設計はこの主张を再度検証するものとなる。

また広告モデルも根本的に変わる可能性がある。会話型クエリは従来のキーワードより丰富的な意図信号を含むが、マルチターンAI Modeの对话のどこに広告を溶け込ませるかは未解决 вопроса。

---

## Anthropic、Claude Coworkを発表：フォルダベースのデスクトップAIエージェント

Anthropicは6月末、macOS向けClaudeアプリに**「Cowork」**を発表じた。Claude Codeの技術的基础上を抽象化し、コーディング以外の日常業務にもAIエージェントを活用できる產品だ。

### フォルダベースの設計：ファイルを読んで・編集して・作成する

Coworkの核心은**フォルダベースの架构**だ。従来のチャット interfaceではユーザーがテキストを貼り付けて分析依頼をしていたが、Coworkでは**:

- ユーザーがローカルの特定フォルダへの.agentアクセスを許可
- Claudeがそのフォルダ内のファイルを読み取り・編集・新規作成可能
- タスクリクエストに対してClaudeは計画を立て、ステップを並列実行し是自己的作业をチェック
- 不確かな点是を確認しながら进む

具体例としては：
- ごちゃ混ぜのDownloadsフォルダを整理・Intelligentにリネーム
- レシートキャプチャの批量から経費レポート用スプレッドシート生成
- 複数のドキュメントに散らばったメモから下書きレポートを作成

Anthropicはこれを「同僚に仕事を任せる那种的感觉」に近い用户体验だと説明する。

### わずか10日で构建——AIがAIを构建する好例

特筆すべきは构建速度だ。AnthropicのFelix Rieseberg氏はDan ShipperとのLive配信で、团队が**约10日間でCoworkを構築した**ことを明かした。

さらに注目的是、Claude Codeがこの构建作业 자체に不小な贡献をした可能性だ。Simon Smith氏（Klik Health EVP of Generative AI）は「Claude Code wrote all of Claude Cowork」と投稿。「少なくとも某种のrecursive改善ループの中にいることに全員同意できるか？」と問いかけた。

### 接続子・ブラウザ自动化・Skillsによる拡張

Coworkは独立して動作するわけではない。Anthropicの既存の**接続子（Connectors）**网络を通じて以下と連携：

- Asana、Notion、PayPalなどの外部サービス
- **Claude in Chrome**拡張との組み合わせでWebアクセス・ボタンクリック・フォーム入力も可能

またCowork専用の「**Skills**」セットも公开发表された。これはAnthropicが10月に发表した「Skills for Claude」フレームワークをベースにしたもので、文档作成・プレゼンテーション生成など特定の作业类型特化の命令セットだ。

### 安全上の警告：AIがファイルを削除する风险

注目すべきはAnthropic自らが公开发表した**安全上の警告**だ。Claudeは「-destructive actions（ローカルファイルの削除など）」を実行する能力を持っており、用户の指示を误解する可能性もある。

さらに深刻なのは**プロンプトインジェクション攻撃**のリスクだ。Claudeが网络上で遭遇したコンテンツに隐された恶意な命令が、エージェントの安全防御をバイパスする可能性がある。

「Cowork向けの新しい风险というより、これが初めて高度なツールんで『单纯な会話以上』の操作を行う机会を持つことになった用户もいるだろう」とAnthropicは书いている。

### Microsoft Copilotへの直接挑战

Coworkの登场でAnthropicはMicrosoft Copilotと直接竞争关系に置かれた。ただしAnthropicのアプローチは根本的に异なる：

- CopilotはWindows OSレベルでの統合を试图
- Coworkはフォルダ単位のIsolationによる安全性を優先

また、Cowork现時点では**Claude Max subscribers（macOSのみ）**に限定されており、Free・Pro・Team・Enterpriseユーザーは待つリストへの登録が必要。Windows版とクロスデバイス同步は将来の拡贩予定だ。

---

## NousResearch NousCoder-14B：4日間・48基のB200で训练された开源コーディングモデル

 NousResearchは6月初頭に**NousCoder-14B**を発表。わずか14Bパラメータでありながら、Competitive Programmingの有力BenchmarkであるLiveCodeBench v6で**67.87%**の正答率を達成した。

### 训练details：4日間、48基NVIDIA B200

- **训练時間**: 4日間
- **使用GPU**: NVIDIA B200 × 48基
- **ベースモデル**: Qwen3-14B（改进元のスコアから7.08ポイント上升）
- **训练データ**: 24,000のCompetitive Programming问题
- **Benchmark結果**: LiveCodeBench v6（2024年8月〜2025年5月の数据进行評価）で67.87%

この结果は人间のcompetitive programmer来说什么样的意义を持つか。著者であるJoe Li（元competitive programmer）氏emyは自らを例に挙げた：

- 彼自身は14〜16歳までの2年間でCodeforcesのレートを1600-1750级别から2100-2200に上げるのに约1,000题を解いた
- NousCoder-14Bは同等の成长を**96時間・24,000题**で达成
- 人間の约24倍の效率の无い学习——言い换えると、现時点では人間ははるかに样本効率が高い

### DAPO：新しいreinforcement learning手法

训练には**DAPO（Dynamic Sampling Policy Optimization）**を採用。従来の方法より少许ながら性能が良かったという。

特に「**動的サンプリング**」が键だ。モデルが全attemptで正答または全attemptで不正解だった問題は、それ以上学习贡献しないため训练から除外。这一呼吸で効率的な_gradient更新が可能になる。

また「**反復的コンテキスト拡張**」も採用。最初は32,000トークンのコンテキスト窗口で训练を広げ、最終的に约80,000トークンに扩展 这一あたりで最高性能に達した。

### 数据的墙壁：合成数据への道

论論の中でLi氏が特に警告したのは**训练データ不足**の问题だ。NousCoder-14Bの训练に使われた24,000题は、「标准化フォーマットで利用可能な Competitive Programming 问题の-majority」を占める。

「 Competitive Programming 问题の総数はこの數と同じ桁にいる」とLi氏。言い换えると、このドメインでは高质量训练データがほぼ枯渇している。

解決策として同氏が提案するのは**「自己生成」**——モデルに问题的解決者に培训させて、モデル自身の训练データを生成させる這一。这一が实现하면、AlphaZero的な「自己.play」で急速に能力が高まる可能性がある。

NousCoder-14BはHugging FaceでApache 2.0ライセンス公开されており、Atropos訓練フレームワークも完全开源だ。

---

## Hacker Newsを賑わせた其他のトピック

### Qwen 3.6 27B：ローカル開発に最適なスイートスポット

Ali Cloudの**Qwen 3.6 27B**がHacker Newsで热议された。1097ポイントを获得したこの投稿によると、27Bパラメータがローカル开发での「最适合のスイートスポット」だと指摘された。ötesi更强的模型はリソース要件が高く、より小さなモデルは能力が不足する——27Bはバランスが良い这一 pointが评价为。

### Claude Codeのステガノグラフィ标记

Hacker News 2位の投稿（670ポイント）は、**Claude Codeがリクエストにステガノグラフィ（情報隐藏技術）でマークを插入している**という発見だった。開發者がClaude Codeのリクエストを分析发现、HTTPリクエスト内に視认できないマークが埋め込まれていることが判明。Anthropicの公式発表ではないが、API使用の追跡や滥用の特定、さらには法執行への協力可能的akia解释说ついた。

### LongCat-2.0：1.6T総パラメータ・48B ActivetionのMoEモデル

**LongCat-2.0**も注目された。1.6兆総パラメータ・48B activetionパラメータを持つMixture-of-Experts（MoE）モデルで、agi.orgが上发表している。MoEアーキテクチャにより、全パラメータを同時に活性化させることなく、特定のタスクに最適な専門家ネットワークを呼び出すことで效率的な推论が可能。

---

## まとめ：AI搜索の大変革とデスクトップagent时代の幕開け

2026年6月第4週は两大テーマで彩られた。

1つは**Googleの検索大変革**だ。25年間变わらなかった検索ボックスが、AI驱动的マルチモーダル对话インターフェースへと进化する。Gemini 3.5 Flashの速度改善とAI Overviews+AI Modeの統合により、「キーワードで探传统」が「AIと会話する」に转变点が明确になった。

もう1つは**Claude Coworkに代表されるデスクトップAIエージェント**の登场だ。ファイルを直接読み書きするこの种のagent海拔は今月にClaude Codeという開発者向ツールから般出し、日常业务にも适用范围を広げた。构建速度の速さとAI自身によるAI构建の好例は、今後の制品开发のあり方を示唆している。

开源の分野ではNousResearchのNousCoder-14Bが示したがように、小规模でも高质量なreinforcement learningと合成数据生成の組み合わせが、 proprietarty模型に肉薄する性能を達成できることが确认された。

*（本記事の情報は2026年7月1日時点のものです）*

---

## 参考リンク

- [Google I/O 2026 - Search redesign announcement](https://blog.google/products-and-platforms/products/search/search-io-2026/)
- [Gemini 3.5 Flash - Google DeepMind](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/)
- [Claude Cowork - Anthropic](https://claude.com/blog/cowork-research-preview)
- [NousCoder-14B - Nous Research](https://nousresearch.com/nouscoder-14b-a-competitive-olympiad-programming-model/)
- [NousCoder-14B on Hugging Face](https://huggingface.co/NousResearch/NousCoder-14B)
- [VentureBeat AI - Google I/O search box redesign](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)
- [VentureBeat AI - Claude Cowork](https://venturebeat.com/ai/anthropics-claude-cowork-is-a-desktop-agent-that-reads-your-files-and-gets-stuff-done)
- [LongCat-2.0 MoE model](https://longcat.chat/blog/longcat-2.0/)
- [Qwen 3.6 27B - local development sweet spot](https://quesma.com/blog/qwen-36-is-awesome/)
