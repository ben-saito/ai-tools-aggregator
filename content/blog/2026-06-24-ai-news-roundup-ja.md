# AI開発ニュースまとめ（2026年6月第4週）

2026年6月も終盤に差し掛かり、AI業界は不休の熱を帯び続けている。今週は、AnthropicのSlack統合AI、米政府によるAnthropic批判、OpenAIのOSSセキュリティinitiative、SpaceX経由の大型GPU契約、AppleのiOS 27具体的功能など、多面的な展開が同時進行した。

---

## Anthropic、Slackに「常駐AI同僚」Claude Tagを発表

Anthropicは6月23日、Slackに「always-on AI teammate」として常駐する新機能**Claude Tag**をβ版として公開した。EnterpriseおよびTeamプラン向け。

### 仕組みと特徴

従来のAIアシスタントと異なり、Claude TagはSlackチャンネルに「居住」する。一度導入されると、チームメンバーは`@Claude`をメンションするだけで、文脈掌握了な洞察やタスク割り当てを依頼できる。

**核心的な差別化ポイント**:
- **永続的コンテキスト**: Claudeはチャンネルに追随し、組織内の関連情報を自動収集。コードレビュー、仕様議論、意思決定履歴を跨いで「記憶」を維持する
- **単一アイデンティティ**: 各チャンネルに一人のClaudeがおり、前任者が残した議論からシームレスに再開可能。「引き継ぎ」が瞬時に完了する
- **自律的ambientモード**: 指示を待たずに能動的に進捗を報告し、他チャンネルからの重要情報をトリアージし、放置されたスレッドにフォローアップする
- **きめ細やかな権限管理**: システム管理者がClaudeの道にアクセス可能なツール・情報・チャンネルを定義し、リーガル向けClaudeがエンジニアリングチャンネルに記憶を流出させることはない

Anthropicの表現を借りれば、「実際の同僚と働いている感覚」を実現する。従来のRPAやワークフローツールでは維持が困難だった文脈の連続性を、Slackという日常的なコラボレーションハブに直接組み込んだ点が革新的だ。

---

## OpenAI、「Patch the Planet」でOSSセキュリティに参入

6月22日、OpenAIは**Patch the Planet**という名の新initiativeを発表した。Trail of Bitsのセキュリティエンジニアが直接OSSメンテナーと協力し、潜在的なコード脆弱性を特定・トリアージ・パッチを作成するプログラムだ。

### プログラムの詳細

背景にあるのは、OSSコミュニティが直面する「報告過多」問題。AIコードレビュー機能の普及により、OSSリポジトリへの脆弱性報告が爆発的に増加し、メンテナーの時間が追いついていない。

**Patch the Planetの解決策**:
- セキュリティエンジニアがAI生成のfindingを**事前レビュー**し、メンテナーに届く前にノイズを除去
- 問題の発見からパッチ・テスト作成までを一気通貫で支援
- 初回修正後も**再利用可能なワークフロー**を引き続き提供し、チームが自律的にセキュリティ改善を継続できる体制を構築

OpenAIの主力セキュリティツール**Codex Security**がバックエンドで活用される。コードEMT（緊急医療チーム）の比喻通り、重い報告の山に埋もれたOSSメンテナーへの「出動services」と言える。

戦略的には、Anthropic批判の意図も読み取れる。OpenAI Securityの장을打ち出すことで、Anthropicの「Miture Danger叙事」とは異なる、「AIでOSSを守る」というポジショニングを確立した感も否めない。

---

## SpaceX、Reflection AIにGB300クラスタを月$150Mで提供——最大$6.3Bの3年契約

6月22日、Reflection AI（旧Magic AI）はSpaceXとの間で2026年7月1日から2029年までの**月$150M（約¥225億）**の計算資源契約締結をTechCrunchに認めた。契約総額は最大**$6.3B（約¥945億）**に達する。

### 契約の構造

- **Hardware**: Nvidiaの次世代GB300 AIチップ群（SpaceXのColossus 2データセンター、メンフィス近郊）
- **期間**: 2026年7月〜2029年6月（3年間）
- **終了条項**: 初回3ヶ月経過後、両者とも90日noticeで契約終了可能
- **契約主体**: Reflection AI（オープンソースAIラボ）← SpaceX computing subsidiary

Reflection AIは声明で「オープンソースへの依存リスク」がんだと指摘。事実上、Claude/AnthropicやGoogle/Geminiのような**closed modelへの排他的依存**が国家・企業にもたらすstrategic脆弱性を、テック大手へのGPU供給強化を通じて開示した形だ。

背景には2025年12月のGroq/Nvidia「準引き抜き」事件がある。NvidiaがGroqの投資家に巨额IP「ライセンス」料を支竹的同时に人才を引き抜いた。这次SpaceX/Reflection契約は、その反動として解釈できる——AI芯片確保の争いで「大廠」が寡占を続けていますます。

---

## Google DeepMind、A24との間で$75MのHollywood取引——AIと映画の未来

6月22日、Google DeepMindはHollywoodスタジオA24との間で**$75M（約¥112.5億）**規模の戦略的パートナーシップを結んだとTechCrunchが報じた。

### パートナーシップの意図

DeepMindのDemis Hassabis CEOは声明で「Artistと共に、直接協働することでAuthentなMeaningfulなストーリーテリングを実現するAIツールを作りたい」と表述。A24侧的电影制作者たちがDeepMindのAI研究に直接アクセスできる枠組み作れる。

これは単なる「AIによる映画制作自動化」ではなく、**AIを导演・脚本家のクリエイティブパートナー**として位置付ける取り組み。Hassabisの以前のインタビュー可知る通り、AlphaFoldで始めた科学と Kreativität（創造性）の融合という彼の更长 Visionsの延续でもある。

比較対象として、MetaculusではOpenAIがHollywoodとの制品で先行している言われており、Googleもading速度を加快している构图が読み取れる。

---

## ノーベル賞John Jumper、DeepMindからAnthropicへ——AI-R有利構造的变化

6月20日（土）、DeepMindで9近く 근무し、データ蛋白質構造予測で2024年ノーベル化学賞を受けた**John Jumper**が、Google DeepMindを離れてAnthropicに入力すると公式发表了。

### 何を意味するか

JumperのDeepMind에서의主な業績:
- **AlphaFold 2/3**: 生命科学変革的——数百万レベルの蛋白质構造予測を自动化
- Hassabisとの紧密作業関係

AnthropicがJumperを確保できたことは、基础研究（前例のない科学的発見）と製品開発（商业化）の両方において、Google侧に「人才・知识・Vision」を失うことを意味する。

Jumper自身的には声明で「GDMは特別な場所」と前置きつつも、Anthropicの安全性へのアプローチに未来的を見た可能性が浓厚だ。Jumperの参加がAnthropicのML科学研究組織の強化に连接し、Claudeの科学 应用领域での競争力向上に寄与する可能性が高い。

---

## Apple、iOS 27の具体的功能を発表——AIを「Siri以外」で届ける戦略

6月21日、AppleはiOS 27（今年秋の提供開始）に搭載される**具体的なAI機能**一覧を初めて明示した。焦点は「SiriというAIbotとの会話」ではなく、「** уже使っているアプリ和服务自体が賢くなる**」设计思想だ。

### 主要機能

**1. レシート撮影によるBill Splitting（割り勘）**
- Apple Intelligenceがレシートから項目・税・チップを自動抽出
- Messages + Apple Cashと連携しをタップだけで割り勘请求を送信
- グループチャット内で各自が自分の注文を選択、1/2シェアも可能

**2. AIによる自動Password更新**
- Passwordsアプリがデータ侵害を常時監視し、流出パスワードを特定
- AIが代理でウェブサイトにアクセスし、自动署名、复杂パスワードを更新
- 人間が手動で変更する必要为零

**3. Messages内のSmart Suggestion**
- 会話のトピックに応じてワンタップ提案（「リマインダーを追加しますか？」）
- 写真共有提案（「イベントの写真を送る？」）
- カレンダー追加提案

**4. Natural languageによるCalendar操作**
- 「来週金曜日の14時からMTG」と入力だけでイベント作成
- Apple Intelligenceが連絡先・場所・時間を自動抽出

**5. ShortcutsのNatural Language設定**
- 「出勤時にMagic Keyboardを接続したら生産性アプリを開く」
- 「退出時にパートナーにETAをテキストする」
- Alarm自動設定（翌日のカレンダーイベントに基づく）

**6. Home AppのNotification集約**
- 複数の関連アクション（ガレージ、荷物受け、玄関入室など）を单一の有意义な通知に統合

**Calls機能（企業CX向上）**
- 電話中にApple Intelligenceがメールから確認コードなどを自動表示

これらは地味だが、**Proactive AI**（能動的AI）の實現としてはApp Store以上の広がりを持つ。开发者視点から 보면、Apple IntelligenceのOn-Device AI + Private Cloud Compute構成が、實際的な應用例を通じてその威力を示し始めている。

---

## EU AI Act執行、米国のAI規制動向

6月21日の報道では、Trump管理髪がAnthropicに対して「国家安全上の懸念」を理由に特定モデルの使用制限を指示した件が報道されている。

詳細は不明だが、Anthropic側は「我校の多くの従業員は外国人であり、"外国 nationals"かどうかの判別が不可能」として、**モデル提供を全面停止**する対応取った。これは米国のAIラボに対する規制が実際に動き出した首款案例として注目される。

Anthropicの競合他社（OpenAI、Google）への影響も予想され、規制の「温度差」がAI業界の競争格局に今後どのような影響を与えるか、注視が必要だ。

---

## 参考リンク

- [Anthropic's new service called Claude Tag](https://techcrunch.com/2026/06/23/anthropics-claude-tag-is-learning-your-company-one-slack-message-at-a-time/)
- [OpenAI launches Patch the Planet initiative](https://techcrunch.com/2026/06/22/openai-launches-new-initiative-to-help-find-and-patch-open-source-bugs/)
- [Groq confirms $650M raise after Nvidia's $20B 'not acqui-hire' deal](https://techcrunch.com/2026/06/22/ai-chipmaker-groq-confirms-650m-raise-re-staffs-after-nvidias-20b-not-acqui-hire-deal/)
- [Google DeepMind bets $75M on AI's future in Hollywood with A24 deal](https://techcrunch.com/2026/06/22/google-deepmind-bets-75m-on-ais-future-in-hollywood-with-a24-deal/)
- [SpaceX inks compute deal with Reflection AI](https://techcrunch.com/2026/06/22/spacex-inks-compute-deal-with-reflection-ai-an-open-source-ai-lab/)
- [When the Trump administration cracks down on Anthropic](https://techcrunch.com/2026/06/21/when-the-trump-administration-cracks-down-on-anthropic-who-benefits/)
- [Beyond Siri: practical AI features coming to iPhone in iOS 27](https://techcrunch.com/2026/06/21/beyond-siri-here-are-the-practical-ai-features-coming-to-your-iphone-in-ios-27/)
- [Nobel laureate John Jumper leaving DeepMind for Anthropic](https://techcrunch.com/2026/06/20/nobel-laureate-john-jumper-is-leaving-deepmind-for-rival-anthropic/)

---

*（本文の情報は2026年6月24日時点のものです）*
