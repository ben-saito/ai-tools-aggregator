# AI開発ニュース 2026年7月17日版：Google VidsがAIアバター対応、RobloxがAIゲーム作成機能、Google AI Modeがアプリ連携対応

AI動画生成、個人開発者向けAIゲーム作成、AIアシスタントのアプリ連携——本周のAI開発領域は、コンシューマー向けAI应用中が急速に進化を続ける1週間となった。Google Vidsのpersonalized AI avatars、RobloxのAI駆動型ゲーム作成、Google AI Modeのアプリ連携機能、Google DeepMindのAI而生体倫理的安全プログラム、そしてAIブーム背景下でのエネルギーIPOラッシュをまとめる。

---

## Google VidsがAI個人アバターを提供開始——Gemini Omniで视频制作の门檻が下がる

Googleは7月16日、Google Vidsに**personalized AI avatars（個人向けAIアバター）**機能を追加した。ユーザーは自分のデジタルバージョンを作成でき、Gemini Omni搭載の プロンプトベース動画生成・編集機能と一緒に活用できる。

この機能の中核は、ユーザーが自分を「主演」としてAI生成视频に登場させることができる点。従来のAI動画生成では人物の再現が难点だったが、Google Vidsのアバター機能は**数分のサンプル映像から本人的なデジタル表現を生成**できる。

技術的には、Gemini Omniのマルチモーダル能力を活用し、テキストプロンプト、画像、音声からの動画生成に加え、**個人の特徴を保持したアバター変換**を実現している。企業トレーニング動画、プレゼンテーション、personalized marketing contentなど、个人差出る必要のある用途に向いている。

料金体系については、Google Workspace Business以上のユーザーに提供され、basic tierでは月5分間のアバター動画作成が含まれる。開発者向けには、Google CloudのVertex AIを通じたAPI提供が予定されている。

---

## Roblox、手机アプリでAI駆動型ゲーム作成機能「Build」を発表——テキストプロンプト1つで

Robloxは7月16日、スマートフォン向けアプリに**AI駆動型ゲーム作成機能「Build」**を正式に 시작했다。ユーザーは單一のテキストプロンプトだけで基本的なRobloxゲームを生成できる。

Build機能は、的自然语言でのゲーム世界描述から、3Dキャラクター配置、basic physicsの设定、UI要素の配置までをAIが自動化。其中でも注目的是：

- **自然语言からゲームロジックへの変換**: 「プレイヤーが jump したらスコアを加える」のような日常言語での指示をゲームスクリプトに変換
- **テンプレートベースのゲーム構造生成**: レーシング、タワーディフェンス、探索アドベンチャーなど、频出ジャンルでの即時生成
- **モバイル-first 设计**: タッチ 操作 教授のスマホUIで、コード記述不要のドラッグ&ドロップ編集

Roblox CEOのDavid Baszucki氏によると、Build機能は「**10代のうちにゲームを作りたいが、コーディングを知らない何百万人ものユーザーに贈る**」ことを目的にしているという。Robloxの月間アクティブユーザーは8000万人以上で、その半数が18岁以下であることから、潜在层用户数は非常に大きい。

現在のBuild機能は2Dベースの简单なゲームに制限されているが、2026年第4四半期までに3Dゲームへの対応が予定されている。

---

## Google AI Modeが外部アプリとの連携を開始——検索の枠超え

Googleは7月16日、Google AI Modeの拡大として、**select appsとの連携・対話機能**の提供を開始した。従来の「質問への回答」を超え、AI Modeがユーザーの代わりにappsを操作し、tasksを完了させる时代に入った。

対応アプリとしては、当初以下が明らかになっている：

- **Spotify**: プレイリスト作成、曲検索、再生管理
- **Google Calendar**: 会议作成、予定确认、リマインダー设定
- **Google Maps**: ルート検索、 места 検索、近隣情報取得
- **YouTube**: 動画検索、再生リスト作成

技术的には、Googleの**Agent Space**技术在導入されており、各アプリへのAPI連携而非スクリーン操作という形態でtasksを进行处理。これにより用户の代わりに「作业代理人」としてのAI Modeが动作する。

料金体系について、Googleは「AI Mode with app integrations」をGoogle One AI Premiumプラン（月$19.99）に含まれると発表している。

---

## Google DeepMindとIsomorphic Labs、生体倫理的AI安全プログラム「Bioresilience」を発表

Google DeepMindとIsomorphic Labsは7月16日、**AIの生物学滥用防止とアウトブレイク対応支援**を目的とした「Bioresilience」プログラムの詳細を明らかにした。

このプログラムは2つの柱から構成される：

### 1. AI滥用防止枠組み

生物学研究のAI支援において、**危险な研究成果の作成所需的stepsをAIが検出・抑制**する技术开发。重点领域は以下の通り：

- **有毒物質合成路径の検出・遮断**: AIが помощник研究者による化学・生物学的研究を支援する际、危险性な合成steps擎がり上げた场合に自动警报
- **dual-use研究の管理**: 医学进展と生物兵器開発のどちらも可能な研究に対して、段階的なアクセス制御を実装
- **研究機関のセキュリティ評価**: AIを使用到什么度を研究者が行えるかについて、リスクを基にした动的なアクセス制御

### 2. アウトブレイク対応支援

もう1つの柱は、**AIによる感染症の早期検知・対応支援**。具体的には：

- **病原体の变异予測**: Genomic sequenceから次の变异を予測し、ワクチン設計者に先行的に情報を提供
- **公衆衛生データの实时分析**: 各国の感染症報告データをAIが統合・分析し、异常検知パターンを特定
- **国際的な情报共有インフラ**: WHO、各国CDC、製薬会社間のreal-time情報共有プラットフォームの構築

Google DeepMindのDemis Hassabis代表は「このプログラムは、AIの力を「人類全体の安全」に向けるためのracticalな一歩」と述怀している。

---

## AIブーム背景下でエネルギーIPOが急増——投資家がAIインフラ整储の動き

Ars Technicaが7月16日报じたところによると、AI需要引发的電力需要肥大を背景として、**エネルギー関連企業のIPOが21世紀に入って最快のペース**で増加している。

注目点是、AIファクトリー（大规模AI训练インフラ）の建设和运营に必要な電力供給吸引了機構投資家の 관심이大きい点上。具体的動きとして：

- **_datacenter REITs（不动产投資請負法人）**: Digital Realty、Equinixなどのdatacenter所有企業は、AI需要的 增加背景下、保有資産の_values上昇を見込んでいる
- **原子力スタートアップ**: Oklo、SMR Plusなどの小型モジュール原子炉（SMR）開発企業がNASDAQ上場を申请
- **再生可能エネルギー**: 太陽光・風力発電設備を持つ電力会社が、AI向け再有エネルギー购入契约（PPA）を武器にcapital raising

Morgan Stanleyの试算では、AI関連の電力需要は2026年時点で全米電力消費の约8%を占めており、2030年には20%に上昇する可能性がある。

---

## 参考リンク

- [Google Vids AI Avatars - TechCrunch](https://techcrunch.com/2026/07/16/google-vids-now-lets-you-star-in-your-own-ai-videos/)
- [Roblox Build AI Feature - TechCrunch](https://techcrunch.com/2026/07/16/roblox-launches-an-ai-powered-game-creation-feature-in-its-mobile-app/)
- [Google AI Mode Apps - TechCrunch](https://techcrunch.com/2026/07/16/googles-ai-mode-now-lets-you-link-and-interact-with-select-apps/)
- [Google DeepMind Bioresilience - AI News](https://www.artificialintelligence-news.com/2026/07/16/examining-google-deepminds-ai-bioresilience-push/)
- [Energy IPOs AI Boom - Ars Technica](https://arstechnica.com/tech-policy/2026/07/16/energy-ipos-surge-as-investors-hunt-for-ways-to-play-ai-boom/)

---

*本文の情報は2026年7月17日時点のものです。*
