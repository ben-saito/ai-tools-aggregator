# AI開発ニュース：Tokenpocalypseの衝撃、OpenAI Lockdown Mode、WWDC 2026のSiri刷新

2026年6月、AI業界は「Tokenpocalypse（トークポ칼プス）」という造語が現実となりつつあります。MicrosoftがGitHub Copilotの大幅な価格改定を発表し、企業がAIコストの制御に苦しんでいる现状が明らかになりました。同時に、OpenAIはプロンプトインジェクション攻撃対策として「Lockdown Mode」を発表。WWDC 2026ではSiriの大幅刷新が控えるなど、激動の一週間となりました。

---

## Tokenpocalypse — AI経済の実態が露呈

MicrosoftがGitHub Copilotの大幅な価格改定を実施しました。この変更はRedditで「Tokenpocalypse」と命名されるほど開発者に衝撃を与えています。

TechCrunchのEquityポッドキャストでは、Anthropicを含む大手AI企業がIPOを控え、利益率への疑问が高まっている状况が議論されました。

**開発の視点からは：**

- 従来の月額制からトークンベースの課金をへの移行
- 企業のAI予算が予想以上に急速に消化されている实例
- Uber社內では数ヶ月で予算超過となり、利用制限を実施
- 「AIラボはコストを削減しつつ、技術進歩を維持できるのか」という根本的な問い

この現象は、投资家の資金に支えられた「過渡期」の終わりを告げるものではありません。AI企业提供者がIPO走向を進める中、消費者へのコスト転嫁が加速することが予想されます。

---

## OpenAI、Lockdown Modeを発表 — プロンプトインジェクション対策

OpenAIは6月6日、機密データをプロンプトインジェクション攻撃から保護する新機能「Lockdown Mode」を発表しました。

**Lockdown Modeの概要：**

- ライブWeb閲覧の無効化（キャッシュ済みコンテンツのみアクセス可能）
- Webからの画像取得・表示の無効化
- ディープリサーチモードとエージェントモードの無効化
- ChatGPT Businessアカウントと対象個人アカウント向けに展開中

**重要な制約：** OpenAI自身が「Lockdown Modeを使用してもChatGPTは完全には安全ではない」と認めています。プロンプトインジェクションはキャッシュされたWebコンテンツやアップロードされたファイル内で発生する可能性があり、応答の精度や動作に影響を与える可能性があります。

この機能は「機密データを扱う組織や個人」を対象に設計されており、データ抽出リスクの低減を目指すとしています。

---

## OpenAI、「Super App」戦略を加速 — 「チャットは死んだ」

Financial Timesによると、OpenAIはChatGPTを「コーディングツールとAIエージェントを備えたスーパアプリ」に変革する計画を加速しています。

**戦略の主要内容：**

-  próximos數週間で新版ChatGPTを展開予定
- ビジネス顧客間でAnthropicとの競争強化を目指す
-  무료利用者を有料製品（Codexなど）に誘導するgateway 역할
-  OpenAIのシニア幹部の一人は「チャットは死んだ」と宣言

OpenAIの製品・プラットフォーム責任者のThibault Sottiaux氏は、「個人のエージェントが 삶と仕事の両面で помощьができる製品」を目指す다고述べました。

2025年にSoraなどのスタンドアロン製品を多数ローンチした後、OpenAIは「サイドクエスト」を放棄し、メイン製品に集中する戦略転換を行いました。

---

## Notion + Anthropic — サービス障害と恢复

6月7日、Notion用户在AnthropicのAPIへのアクセスに問題が発生。Notionの製品責任者は「これをRTした人々の多さに驚いた」と語る一幕がありました。

数時間後にアクセスは恢复されしましたが、この障害はエンタープライズAI統合の脆さを露呈するものとなりました。

---

## WWDC 2026 — Siriの大幅刷新迫る

AppleのWWDC 2026が6月9日（太平洋時間午前10時）に开幕します。注目の発表内容：

### SiriのAI 업그레이드

- GoogleのGeminiテクノロジーを活用した大幅強化
- 文脈を理解し、複数ステップのタスクを処理できる会話型アシスタントへ変革
- 現在のアプリ和服务を超えた自然な 상호작용

### 새로운 Siri アプリ

Bloombergのリークによると、ChatGPT、Claude、Geminiと競争するスタンドアロンSiriアプリが導入される可能性。

### AIエージェント統合

The Informationによると、AppleはApp StoreへのAIエージェント統合を計画。用户が餐厅予約、日常タスクの管理、文書の編集、スマートホーム機器の制御などを委任できるようにする見込み。

### Visual Intelligence

カメラアプリ内に新しい「Visual Intelligence」セクションの導入も予想されています。

---

## 政策動向 — 政府和AI

### トランプ/OpenAI — 持分参加的の可能性

Trump大統領は「アメリカンがAIの成功から利益を得られる取引」を検討していると表明。OpenAIへの公的持分参与的的话题が浮上しています。

### Sriram Krishnan — White House AI Advisorを退任

Sriram Krishnan씨가 White House AI Advisor職を退任し、TrumpのAI政策を形成するための新 Institutionを立ち上げる予定であることが判明。

---

## インフラ動向 — Google/SpaceX $920M/月

GoogleがSpaceXに月額9億2000万美元を支払う契約が明らかになりました。これはGoogleのAI製品の需要が予想外に高まっていることを反映しています。

---

## Reid Hoffman — Microsoft理事会退任、Manus AIに専念

LinkedInの創設者兼Microsoft理事会成员のReid Hoffman씨가Microsoft理事会を退任し、AI創薬スタートアップのManusに專念します。Microsoftでの10年間の理事会成员生活を終え、「創設者モード」に移行します。

---

## 参考リンク

- [Is this the dawn of the Tokenpocalypse? - TechCrunch](https://techcrunch.com/2026/06/07/is-this-the-dawn-of-the-tokenpocalypse/)
- [OpenAI unveils Lockdown Mode - TechCrunch](https://techcrunch.com/2026/06/06/openai-unveils-lockdown-mode-to-protect-sensitive-data-from-prompt-injection-attacks/)
- [OpenAI is still working on that 'super app' - TechCrunch](https://techcrunch.com/2026/06/07/openai-is-still-working-on-that-super-app/)
- [What to expect from WWDC 2026 - TechCrunch](https://techcrunch.com/2026/06/06/what-to-expect-from-wwdc-2026-siris-highly-anticipated-revamp-and-apple-intelligence-updates/)
- [Notion restores access to Anthropic - TechCrunch](https://techcrunch.com/2026/06/07/notion-restores-access-to-anthropic-after-service-disruption/)
- [The Trump administration might take an equity stake in OpenAI - TechCrunch](https://techcrunch.com/2026/06/06/the-trump-administration-might-take-an-equity-stake-in-openai/)
- [Google will pay SpaceX $920M per month for compute - TechCrunch](https://techcrunch.com/2026/06/05/google-will-pay-spacex-920m-per-month-for-compute/)

---

*（本文の情報は2026年6月8日時点のものです）*