# AI開発週報：AIの超説得力、Sakana Fuguの多言語オーケストレーション、Groqの復活

2026年6月第4週、AI業界は「AIは人間を説得できるか」という根本的な問いと、複数のLLMを協調させる新しいパラダイムが同時に話題を呼んでいる。また、制裁強化の中でAIチップスタートアップのGroqが6.5億ドルの資金調達を完了し、宇宙企業SpaceXとの大規模計算リソース取引も明らかになった。

---

## AIは人間보다説得力があるか：オックスフォード etc. の衝撃的な研究結果

**Import AI 462**が報じたところによれば、オックスフォード大学・英国AIセキュリティ研究所・スタンフォード大学の研究者グループは、最新のAIシステムが人間專業家を「決定的に」説得できることを実証した。

### 4つの研究で確かめられたAIの優位性

研究は4つのアプローチで構成された。

**研究1（説得力）**：英国の政策問題をテーマにした10の事前指定された命題について、被験者の同意度を測定。AIシステムは「expert humansより信頼性高く説得力があった」という結果が得られた。

**研究2（人間によるAI活用）**：Elite Debatersの帰国子女43名に、AIコーチツールを渡して人間とAIの辩论辅导を実施。AI Coaching を受けた人間は、受けなかった人間より有意に高いスコアを達成した。

**研究3（制約付きAI）**：AIを強制的に「人間の長さのメッセージ」「人間の書き込み速度」で動作させた場合でも、人間の優位性は完全には回復しなかった。

**研究4（現実世界）**：英国の專門家 19名を雇用して同じタスクを実施。「AI仍は專門家を超えた」という結果。

### なぜ重要か：AIの超説得力は権力の集中を加速する

研究グループの警告は明確だ。「AIが人間の専門家さえも上回る説得力を持つなら、その影響力は すでに Powerful（パワフルな）な存在への権力集中を招く可能性がある」。これは単なる技術的話題ではなく、民主的プロセスそのものに関わる構造的な問題である。

---

## 自己持続型AIの実現は2036年？ — Ajeya Cotra vs Timothy B. Lee

同じImport AI 462では、AIの「Recursive Self-Improvement（RSI、自己改良）」に関する深掘り取材が掲載された。

**Ajeya Cotra**（Anthropic政策チームは今年のはじめにCotraのRSI研究を引用）は、自己持続型AI（AIが人間の介入なし的自己改良を続ける状態）を**10年以内（2036年）**に実現し得ると述べた。

一方、Tim B. Lee（Understanding AI著者）はより長いタイムラインを想定している。

### なぜまだ実現していないか：暗黙知の壁

自己持続型AIの最大のボトルネックは「**暗黙知（tacit knowledge）**」だ。すべての半导体設計图纸と機械は残せるが、「工場を運営するための人間の专业知识」は消失する。Cotraは「次の2〜3年で見るべき指標」として以下を挙げた：

- ロボットハンドの性能グラフでの改善トレンド
- AIモデルが自ら後継モデルを設計する実験的な成功例

---

## Sakana AI「Fugu」：複数のLLMをオーケストレーションしてAnthroic Fableに対抗

東京拠点のAIスタートアップ**Sakana AI**は、複数のLLMを動的に協調させる「Fugu」を正式に立ち上げた。ユーザーは单一のモデルとやりとりする感覚で，但实际上はFuguがタスクに応じて適切なモデルプールから他のLLMを呼び出す。

### ベンチマークでAnthropic Fable 5・Mythosに匹敵

Sakanaが公開したベンチマーク結果によれば、Fugu UltraはAnthropicの**Fable 5**および**Mythos Preview**に匹敵する性能を示した。注目すべきは、Anthropicの両モデルはまだ一般公開されていないことであり、「もしAnthroicモデルがFuguのエージェントプールにあったら、さらに高いスコアが出たはずだ」と同社は主張する。

### 課題：速度とコスト

初期ユーザーの反応は複雑だ。AI研究者のEthan Mollick氏によれば、普段のコーディングテストが**30分**もかかったという。某ユーザーは$20プランの5時間分を単一のプロンプトで消費し切った。コードレビューは明るい話題だが、全体としては「GPT-5.5に大きく遅れる」という評価が多い。

一方、Crossy Roadクローンを使った比較では、Fugu Ultraが**22分・$7.32**で完了したのに対し、Opus 4.8は**79分・$37.85**——速度とコストの両面でFuguが優位という結果も出ている。

### 規制リスクへの「保険」としてのFugu

Sakana AIはFuguを「**Single-provider依存からの脱却**」として位置づけている。最近のAnthropic Fable/Mythosへの米国政府の輸出規制 конкретな例として挙げ、「Critical infrastructure、Finance、Governance向けに单一企業へのAPI依存はマテリアルな脆弱性だ」と主張した。

---

## Groq：Nvidiaからの「not-acqui-hire」後に6.5億ドルを調達

AIチップメーカーの**Groq**は、2026年6月（現地時間）、**6億5000万ドルの資金調達**を完了したと正式発表した。主導投資家はDallasベースのlate-stage投資 firm Disruptive（Alex Davis設立）。

### 何が起きたか

2025年末、GoogleのAIチップ「TPU」を主導したJonathan Ross氏率いるGroqは、Nvidiaとの間で**非排他的ライセンス契約**を締結。GroqのFounder兼CEO Ross氏、PresidentのSunny Madra氏、および他の従業員がNvidiaに移籍するという「not-acqui-hire（買収ではない雇用）」取引が成立した。取引総額は約**200億ドル**と報道されている。

NvidiaはGroqのLPU（Language Processing Unit）技術使用权を取得 March 2026のGTCイベントで「Nvidia Groq 3 LPX Inference Hardware System」を発表済み。

### Groqのピボット：Neocloud + 新経営陣

Groqは大幅な方針転換を迫られた。Madra氏が2024年に買収したAIデータ分析会社Definitive Intelligence旗下的**Neocloudビジネス**を拡大する方針に転じ。また、xAIとMeta 출신のAlan Rice氏をCOOとして採用海底干拓等多言語な新経営陣を編成した。

---

## SpaceX + Reflection AI：月1.5億ドルでNvidia GB300 computeを3年間確保

AI業界の歴史上、最大規模のオープンAIインフラ投資の一つが明らかになった。**Reflection AI**（2024年にGoogle DeepMindの元研究者2名が設立）は、2026年7月1日から2029年までの36ヶ月間、SpaceXの**Colossus 2**データセ교ネットワーク через 月額**1.5億ドル**をNvidia最新の**GB300 AI chips**とサポートハードウェアに支付う。

### 規模はAnthropic・Googleには及ばず

Reflection AIの取引規模は、Anthropic（月額12.5億ドル）・Google（月額9.2億ドル）と比較すると小さいが、「オープンウェイトAI戦略の価値を示すもの」として、同社はこの契約を始めての大型実績として位置づけている。

「最近の出来事はオープンソースの重要性を浮き彫りにした。Closed frontier modelsへの排他的依存に伴うリスクとコストを、更多の国家と企業が認識している」（Reflection AI担当者談）

Colossus 2データセ교は元来xAI（Elon Musk設立）がを構築したもの。xAIのAI開発が内部的に苦戦する中、SpaceXはそのインフラを خارجية客户提供し始めた。

---

## AI業界が「大域的に『loopy』になっている」

TechCrunchが報じた通り、AI業界の間では「AIがAIにプロンプトを送り、そのAIがまた別のAIにタスクを依頼する」という**入れ子型エージェント（loopy agents）**の概念が主流になりつつある。

### エージェントがエージェントを呼び出す時代

CursorのEMopoly Founder Michael Brynзаявил采访时述べた：「2年前は私自己是ソースコードを手で書きました。、エージェントがコードを書く方向に遷移し、そして今、エージェントがエージェントにプロンプトを出し、それがコードを書くという段階に遷移しています」

### Ralph Loop：全作業進捗を合計するだけの朴素なループ

最も人気があるテクニックの一つは「**Ralph Loop**」——単にモデルが今までに行った全作業を集計·合計するだけのループだ。シンプルだが効果的。

### 計算コストの罠

OpenAI研究者のNoam Brownashi月初めに指摘した通り、現代のモデルは「テスト時に計算량을増やす（test-time compute）」ことで几乎すべての問題を解決できる。しかし、これはitterationsが増えれば増えるほどコストが膨大になるリスクを伴う。「loopy」なエージェント構造は、単純なQ&Aチャットボット相比、格段に多くのtokenを消費する。

---

## OpenAI「Patch the Planet」：Trail of Bitsと提携してOSS脆弱性に直接対応

OpenAIはセキュリティ企業の**Trail of Bits**と連携し、オープンソースプロジェクトのコード脆弱性を発見・修正するプログラム「**Patch the Planet**」を開始した。

### コンセプト：コードの救急医療チーム

Trail of Bitsのセキュリティエンジニアが「コードのEMT（救急医療隊）」としてオープンソースプロジェクトのメンテナーと直接协作。OpenAIのセキュリティツール（Codex Securityなど）を活用して脆弱性のトリアージを実施する。

### 背景：Mythosへの対抗軸

AnthropicのMythos（AIを使ってコードを自動的に探し出すセキュリティツール）のような產物が「AIが既存のバグを自動的に识别し、攻撃に転用できる」という 우려を呼び起こす中、OpenAIは「AI帮助オープンソース社区が自らを守る」ための対抗軸としてこの 프로그램을打ち出した。

「多くのメンテナーは すでに 同様の時間でより多くのレポートを捌くことを求められている」（OpenAI声明）

---

## DeepMind、ASI（超人的人工知能）への Pathways を公式議論

Google DeepMindの研究者たちが、AGIからASI（超人的汎用知能）への路径について公式な考察を発表している。

ASI実現への主な pathways は以下のように整理された：

- **Compute·Model·Dataのスケーリング**：現在の approaches を単純に大規模化する
- **アルゴリズムパラダイムシフト**：TransformerやMoEのような根本的な革新
- **Recursive Self-Improvement**：AIが自ら後継システムを構築
- **グループエージェント形成**：複数の知性が協調してInstitutionsを形成

「不可能に見える将来に真剣に向かい合うことが、AIの ultimate success に備える唯一の方法」——これがDeepMindの研究者たちの結論だ。

---

## 参考リンク

- [Import AI 462: Superpersuasion; self-sustaining AI; paths to ASI](https://jack-clark.net/2026/06/22/import-ai-462-superpersuasion-self-sustaining-ai-paths-to-asi/)
- [Cursor announces its own AI model, a new Git platform, and a mobile app](https://the-decoder.com/?p=36932)
- [Sakana AI's Fugu orchestrates multiple LLMs to match Anthropic's Fable and Mythos benchmarks](https://the-decoder.com/?p=36887)
- [OpenAI says new GPT-5.5-Cyber outperforms Anthropic's Mythos on cybersecurity benchmark](https://the-decoder.com/?p=36927)
- [AI chipmaker Groq confirms $650M raise, re-staffs after Nvidia's $20B not-acqui-hire deal](https://techcrunch.com/2026/06/22/ai-chipmaker-groq-confirms-650m-raise-re-staffs-after-nvidias-20b-not-acqui-hire-deal/)
- [SpaceX inks compute deal with Reflection AI, an open source AI lab](https://techcrunch.com/2026/06/22/spacex-inks-compute-deal-with-reflection-ai-an-open-source-ai-lab/)
- [The AI world is getting 'loopy'](https://techcrunch.com/2026/06/22/the-ai-world-is-getting-loopy/)
- [OpenAI launches new initiative to help find and patch open source bugs](https://techcrunch.com/2026/06/22/openai-launches-new-initiative-to-help-find-and-patch-open-source-bugs/)

---

*（本文の情報は2026年6月24日時点のものです）*
