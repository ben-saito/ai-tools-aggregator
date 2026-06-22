# AI週次ニュース（2026年6月19日〜22日）：Anthropic規制、DeepMind幹部の電撃移動、iOS 27のAI機能、印度・中南米でのAI展開加速

2026年6月第3週、AI業界は米政権によるAnthropicへの規制強化という衝撃的なニュースを皮切りに、DeepMindからの大牌流出、印度企業のAIフル活用表明など、目が離せない展開が続いた。開発者にとって重要なAI/SRE分野の adquisición、vanity searchという新コンセプトの登場も見逃せない。

---

## 焦点：トランプ政権がAnthropicを規制 -- 誰が利益を得るのか

米国トランプ政権がAnthropicに対する規制動きを強めている。TechCrunchのEquityポッドキャストによるとSean O'Kane氏的には「Anthropicは他の主要AIラボとは異なる形でトランプ政権と良好でない関係にある」とされ、同社のライバル企業が同様の規制を受ける可能性は低いと見られている。

興味深いのはRebecca Bellanの指摘で、ネットワークセキュリティの第一人者たちが「米国政府に対し、Anthropicの高度なセキュリティ能力を米国ネットワーク防御者から引き上げることは危険」として、公然の手紙を送っていることだ。

また「禁止令は逆にブランドに追い風となっているのか」という視点も提起されている。Anthropicへの規制強化が結果的に「悪い子は好き」という消費者の心理を刺激し、同社の認知度向上に寄与する可能性さえある。

AI開発者への影響として、米国の輸出規制がAIセキュリティツールへのアクセスに影響を与えるという警鐘が上がっている。

---

## DeepMindからAnthropicへ：John・ジャンプアー博士の電撃移動

DeepMindでAlphaFoldチームを率い、2024年にNobel化学賞を共同受賞したJohn Jumper씨가6月19日、約9年間務めたGoogle DeepMindを離れAnthropicに参加することをX上で発表。「Demis Hassabisが博士号取得からわずか6个月後にAlphaFoldチームを率いるチャンスを与えてくれた」と記帳しつつ、「Google DeepMindは特別な場所で、これからの発見が楽しみ」と退社への感謝を示した。

Jumper씨는 Googleのコード生成ツール開発チームにも関わっており、同社はこの分野での企業向け販売に苦戦していたとされる。

一方、同様にDeepMindからCharacter AI共同創業者のNoam Shazeer씨가OpenAIに移籍することも明らかになった。AI研究界の最大手での人材移動が加速している。

開発者にとって、AlphaFoldを生み出した研究者がAnthropicの安全工作ツール開発にどう貢献するか注目される。

---

## iOS 27のAI機能：Siriを超える「実際的なAI」

AppleがiOS 27向けに導入するAI機能の詳細が明らかになった。Appleは消費者に「新 Siri」への移行を求めるのではなく、既存のアプリやサービスにAIを織り込むアプローチを採用し、実際の問題を解決することに注力している。

**餐厅の割り勘**: 受信書を撮影（またはアップロード）すると、Apple Intelligenceがアイテムを抽出し、「割り勘」オプションが表示される。Apple Cashを通じて友達間で簡単に分割払いができる。

**パスワード監視**: データ漏洩後自動的に漏洩したパスワードを検出し、ユーザーに警告を発しながら修正を提案する。

**Mailの要約・自動化**: メール スレッドの自動要約、重要なアクション項目の自動抽出を提供する。

**リマインダー・カレンダー整理**: AIを活用した情報整理で、カレンダーやリマインダーの管理が更容易になる。

注目すべきは、これらの機能が単独では「大インパクト」に欠けるかもしれないが、組み合わせることで「ボットとチャットするのではなく、Appleのソフトウェア自体をよりスマートに感じさせる」というビジョンだ。開発者にとっては、Appleのフレームワークを使ったAI機能開発の参考指針となる。

---

## SignalのMeredith Whittaker氏：「AIチャットボットは友達ではない」

Signalの会長Meredith Whittaker씨가Bloombergのインタビューで、AIチャットボットのプライバシー問題について厳しい見解を述べた。

「これらは友達ではない。これらは意識的な存在ではない。これらは感性的な対話者ではない」と強調。「 文書 书式整列などにAIツールを‘使用するすることはあるが、'考えや著作のプロセス'가AIの応答に道を塞がれることは望まない」と続けた。

Microsoft AIのMustafa Suleyman CEOが「Microsoft Copilotがクリスマスショッピングを代行する時代が間近」と予言したことに対し、Whittaker 씨는「家族のグループチャットを傍受して誰が何を欲しがっているかを判断する」というシナリオが意味するのは、AIに「クレジットカード、ブラウザ、Signal、兄弟姐妹へのメッセージ送信能力、住所」を与えることだと批判した。

「Signalの文脈では、これは某种の一種のバックドア構成になる」と警告した。

開発者にとって、大規模言語モデルのブラックボックス性に注目する声が継続的に上がっている。

---

## In the Weights：AI記憶の中の「vanity search」

Thomas DimsonとJoey Flynnが新サービス「In the Weights」を発表した。「weights」とはAIモデルの訓練と出力を形成する数値パラメータのことを指し、このウェブサイトは某个名が「ウェブ検索を使わずにモデルをRecallできる程度」を測定すると主張している。

「weightsの中にいるとは、超人的な人工知能を作り出すプロセスでその存在が重要と判断されたことを意味する」とウェブサイトでは述べられている。

対応モデルはGrok、Gemini、複数のバージョンのGPT、Claude、Llamaなどを含まれ、「<名前>是谁？最多10件の結果と短い説明と確度を出力」というプロンプトを送信。類似した説明をクラスタリングして「強度スコア」を算出する。

結果の例としてThomas Dimson記者が強度スコア641（トップ6%）を記録する一方、Macaulay Culkinが988でトップの位置にいた。

開発者にとって、モデルの「記憶」分布を可視化するこの試みは、内部パラメータ空間内での実体表象を調査する手がかりになるかもしれない。

---

## Jio（印度Reliance）：AIを電話・アプリ・家庭に統合

印度的Mukesh Ambani会長が率いるRelianceが、Jioの電話ネットワークに直接AIを組み込んだ「Jio Call Agent」を発表。電話通話中に参加し、内容を文字起こし、要約を作成し、タクシー予約・出前注文・レストラン予約などのタスクを実行できる。「Hey Jio」という音声で今年中にサービス開始予定。

注目点は、スタンドアロンアプリとしてではなく、通信ネットワークに直接AIを埋め込むことで、第三次電話支援アプリへの依存を減らし、Relianceに強力な流通優位性を付与する点だ。

さらに、MyJioアプリに自然言語で操作できるAI助教を追加（eSIM活性化、ローミングプラン選択など）。TeleFrameという家庭用ディスプレイも発表し、天気アラート、スケジュール、家族向けのリマインダーなどを能動的に表示する。

AI開発者にとって、新興市場でのAI-native通信サービスというモデルは、分散型AI-Agent配布の参考事例となる。

---

## ElasticがDeductive AIを最大8500万美元で買収

ElasticがAI Site Reliability Engineering（AI SRE）分野のスタートアップDeductiveを最大8500万美元で買収することで合意した。TechCrunchの情報源によると、この取引は確立されたテック企業がAIネイティブスタートアップを取り込み、agentic技術を既存製品スイートに統合する動きを強めていることの反映。

Deductiveは2023年に設立、2024年11月に730万美元のシードラウンド（CRVが主導、Databricks Ventures、Thomvest Ventures、PrimeSetが参加）を発表。PitchBookによると当时的評価額は3300万美元だった。

AI-SRE分野は、AI生成コードの大量流入推动で急速に成長しており、手作業的なデバッグをAIに置き換えることで、ヒューマンSREが「障害対応」から「戦略的な仕事」に集中できる環境作りが重要になっている。

---

## 参考リンク

- [When the Trump administration cracks down on Anthropic, who benefits?](https://techcrunch.com/2026/06/21/when-the-trump-administration-cracks-down-on-anthropic-who-benefits/)
- [Nobel laureate John Jumper is leaving DeepMind for rival Anthropic](https://techcrunch.com/2026/06/20/nobel-laureate-john-jumper-is-leaving-deepmind-for-rival-anthropic/)
- [Beyond Siri: Here are the practical AI features coming to your iPhone in iOS 27](https://techcrunch.com/2026/06/21/beyond-siri-here-are-the-practical-ai-features-coming-to-your-iphone-in-ios-27/)
- [Signal's Meredith Whittaker wants you to remember that AI chatbots 'are not your friends'](https://techcrunch.com/2026/06/20/signals-meredith-whittaker-wants-you-to-remember-that-ai-chatbots-are-not-your-friends/)
- [In the Weights is your new AI-centric vanity search](https://techcrunch.com/2026/06/20/in-the-weights-is-your-new-ai-centric-vanity-search/)
- [Billionaire Ambani wants AI in every call, app, and home](https://techcrunch.com/2026/06/19/billionaire-ambani-wants-ai-in-every-call-app-and-home/)
- [Source: Elastic agrees to buy CRV-backed Deductive AI for up to $85M](https://techcrunch.com/2026/06/18/source-elastic-agrees-to-buy-crv-backed-deductiveai-for-up-to-85m/)

---

*（本文の情報は2026年6月22日時点のものです）*
