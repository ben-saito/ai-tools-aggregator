# AI開発ニュース 2026年5月7日（夜版）：AI経済アーキテクトの警告、xAIの正体、Snap×Perplexity破談

AI開発業界は急速な転換点を迎えている。Milken Global ConferenceではAI経済を構成する5人のキーが「このままでは車輪が外れる」と警告し、xAIは単なるAIラボではなくネocloud建設会社であるという見方が有力になった。一方MicrosoftはAIデータセンター擴張とクリーンエネルギー目標の矛盾に直面し、規制当局は前沿AIモデルの発売前テスト義務化動きを加速している。

---

## TechCrunchが伝えた「AI経済のアーキテクト5人」の警鐘

2026年5月6日（米国時間）、Milken Global Conference（ロサンゼルス）でAI supply chainの異なる層に位置する5人が一堂に会した。Chip製造（ASML肚子CEO Christophe Fouquet）、云インフラ（Google Cloud VP Dmitry Shevelevevskiy）、AIスタートアップ（Applied Intuition CEO Qasar Younis）、AI入股機関（Milken Institute、Eve Bodnia）の面々だ。

Connie Loizos記者がTechCrunchにリポートした主要内容：

**チップ不足の構造的問題**: Fouquet氏（ASML）は、EUV露光装置の供給が依然として需要に追いついていない現状を指摘。AI需要の爆発的増加に対応できる設備投資の lead timeは現実的に数年単位であり、短期的短缺は避けられない。

**軌道データセンターの可能性**: Shevelevevskiy氏（Dmitry Shevelevevskiy）は、Googleが検討する軌道ベースのAI処理施設に触れ、「宇宙の冷的環境を活用した計算」というコンセプトを言及。地上のデータセンター、集中冷却、大型電源という制約を超える可能性を示唆した。

**「整个アーキテクチャが間違っている」可能性**: Younis氏（Applied Intuition）は、現在のAI開発基盤そのものに対する疑念を呈した。特にプロビジョニングされたリソースの實際使用率が10%程度にとどまる「アイドルVM問題」は、既存のクラウドモデルの収益構造に根本的な矛盾があることを示唆する。

---

## xAIは本当にAIラボなのか——「neocloud」としての実像

Russell Brandom記者がTechCrunch（2026年5月6日）で極めて刺激的な分析を发表了。

xAIの収益構造を分析すると、AIモデルの訓練・発売よりも**データセンター建設・運用が主軸**である可能性が大きい。Musk月はSpaceXを通じてロケット打ち上げと衛星インターネット（Starlink）の垂直統合を得たが、これはxAIにも適用できるパターンだ。自社でGPUクラスタを構築することで、外部クラウド依赖から脱却し、競合（OpenAI、Anthropic）にてないインフラ支配力を獲得できる。

**neocloudの定義**: 従来のクラウド（Hetzner、CoreWeaveなど）がGPU資源を облагодаряするために存在するのに対し、xAIはまず自社需要（Xプラットフォーム、Autonomous Vehicles、ロボティクス）でGPUを消費し、余力を外部企业提供するという逆張り構造を持つ。これにより、美たな投資を自社サービス強化と競合潰しの两方に同時に活用できる。

---

## Snap × Perplexity $400M取引の友好的終了

TechCrunchが5月6日に伝えた。2025年11月に発表され注目されたSnapchatへのAI検索統合だったが、双方とも「友好的終了（amicably ended）」を選択した。Perplexityは競合する検索パートナーとの独占契約問題を抱えていた可能性があり、Snap側もまた契約條件の見直しを迫られたと推测される。

AI検索 войдите企業同士の协業が技術統合の复杂度を越える难しさも示唆される。单纯的API統合ではなく、検索结果の質、レイテンシー、品牌体験など多个の軸でAlignさせる必要があり、期待値越大越大摩擦も生まれやすい。

---

## MicrosoftのAIデータセンター擴張 vs クリーンエネルギー目標

Tim De Chant記者がTechCrunch（2026年5月6日）でMicrosoftの内的矛盾を伝えた。

MicrosoftはAI需要に応えるため大規模データセンターファilities擴張を推進しているが、この擴張に必要なエネルギーが同社のnet zero目標と冲突している。

**具体的事例**: 2025年、Microsoftは複数の中規模データセンター建设项目を认容したが、これらの施設は既存の再生可能エネルギース케ジュールでは賄えない可能性がある。同社のクリーンエネルギー契約は特定の年に合わせた供給を前提としており、急激な需要増に対応できない構造になっている。

これが意味すること：AI产业のエネルギーニーズは、想定よりも急速にクリーンエネルギーインフラの扩展を必要としている。Microsoft、Google、AWSがこぞってデータセンター扩建を宣言する中、エネルギー問題はAI産業の成長制約としてismanifolding visibility向上しつつある。

---

## 米政府、40社超のAI企業に「発売前テスト」義務化を計画

AI Newsが5月6日に伝えた。

US administrationは、国家安全保障上の理由から前沿AIモデルの commercially available提供前に安全テストを義務化する方向で動く。対象は想定で40〜60社規模。

**背景**: 2025年に複数のAI関連インシデント（自律型モデルによる有害出力、誤った科學的主張の生成など）が報告されたことで、規制当局の懸念が高まった。

**技術的課題**: 発売前テストの具体的な方法はまだ確立されていない。静的解析、red team testing、第三方検証など複数の手法が検討されているが、AIモデルの举動は训练データとプロンプトに依存するため、従来のソフトウェアテスト手法の適用が困難である。

**業界反応**: 一部のスタートアップは「新興企业对する適用除外」を求めて、运动を展開している。complianceコストが创新の足を引っ張る可能性があり、国家安全と技術競争力のバランスについての議論が活発化している。

---

## Google、 Gemini向け「Remy」AI agentを社内テスト中

AI Newsが5月6日に伝えた。

Business Insiderが入手した内部文書によると、GoogleはGeminiアプリ向けの新しいAI personal agent「Remy」を员工のみ使用的内部テストを実施している。

**Remyの仕様（暂定）**:
- 「24/7 personal agent」として設計
- ユーザーの代わりに作业を実行
- ユーザー選好を学習する機能
- Google Workspace（Gmail, Calendar, Docs, Driveなど）と連携

**OpenClawとの比較**: Remyのコンセプトは今年注目を集めたOpenClaw（自律的にメッセージを返信、研究を実行）と類似している。OpenAI CEO Sam Altman先は2月にOpenClawの创设者を採用したと伝えられ、Googleも类似のパスを歩んでいることが示唆される。

**ガバナンス課題**: AI agentがユーザーの代わりに действийを実行する场面的課題が浮上している。Googleの現在のGemini Privacy Hubは GEMINI Apps Activityの管理を提供しているが、agent级别の権限管理・ログ記録は未整備であるとの指摘がある。

---

## 参考リンク

- [Five architects of the AI economy explain where the wheels are coming off](https://techcrunch.com/2026/05/06/five-architects-of-the-ai-economy-explain-where-the-wheels-are-coming-off/)（TechCrunch）
- [Is xAI a neocloud now?](https://techcrunch.com/2026/05/06/is-xai-a-neocloud-now/)（TechCrunch）
- [Snap says its $400M deal with Perplexity 'amicably ended'](https://techcrunch.com/2026/05/06/snap-says-its-400m-deal-with-perplexity-amicably-ended/)（TechCrunch）
- [Microsoft's AI data center push is colliding with its clean power goals](https://techcrunch.com/2026/05/06/microsofts-ai-data-center-push-is-colliding-with-its-clean-power-goals/)（TechCrunch）
- [US government increases AI suppliers and rethinks Anthropic's role](https://www.artificialintelligence-news.com/news/us-government-increases-ai-in-defence-suppliers-roster-and-rethinks-anthropics-role/)（AI News）
- [Google tests Remy AI agent for Gemini as focus turns to user control](https://www.artificialintelligence-news.com/news/google-remy-ai-agent-gemini-user-control/)（AI News）

---

*本文の情報は2026年5月7日時点のものです。*