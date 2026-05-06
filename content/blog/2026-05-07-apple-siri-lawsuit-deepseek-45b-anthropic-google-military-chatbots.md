# Apple、SiriのAI機能遅延で2.5億ドルの和解──DeepSeek時価総額450億ドル、米軍のAIチャットボット導入加速

2026年5月6日、AI業界は同時に複数の大型ニュースが飛び込んできた。AppleがSiriのAI機能遅延をめぐる集団訴訟で和解に応じたことをはじめ、中国のDeepSeekが初めて VC ラウンドにおいて450億ドルの評価額に到達。米軍がAI意思決定支援システム「Military AI Chatbots」の導入を加速させる気配を見せている。本稿では、これらの重要トピックを技術的な観点から整理する。

---

## Apple、Siriromised AI機能の過大広告で2.5億ドル和解

Appleは6日、iPhone 15およびiPhone 16購入者に対する集団訴訟で和解合意に達した。和解金額は**2億5000万USドル（約375億円）**で、Wall Street JournalやFinancial Timesが報じた。

問題の核心は2024年6月のWWDCで披露された「Apple Intelligence」のマーケティングにある。Appleは「SiriがChatGPTやClaudeのようなモダンなAIチャットボットように変わる」としていたが、実際の機能提供は大幅に遅れている。原告側は「AppleはAI機能の完成度と提供時期を大きく誇張し、消費者の購入判断を不適切に誘導した」と主張。false advertising（不実広告）に問われた。

和解금은1台あたり最大**95ドル**の補償になる可能性がある。対象期間は2024年6月10日から2025年3月29日の間に米国で製品を購入したユーザー。Appleは法的責任を認めなかったが、裁判を続けるよりも和解を選んだ。

注目的是、Appleは**WWDC 2026を6月8日に控え**、強化版Siriのプレビューを披露すると噂されている。報道によれば、Siriの次世代アシスタント機能は当初Google Geminiで powering される見通しだったが、最新の情報では複数のLLMからユーザーが選択できる形式で提供される可能性がある。

開発者視点から見ると、Apple Intelligence の遅延は Apple が**オンデバイスAI推論**と**クラウドベース推論のハイブリッド構成**을 实现하려としていたことが一因とされる。Private Cloud Compute（PCC）アーキテクチャによるサーバーサイド推論のプライバシー保護も技術的な複雑さを増していた。iPhone 16のNeural Engine性能とApp Intents frameworkの統合問題が機能不全の一因という見方もある。

---

## DeepSeek、初のVCラウンドで時価総額450億ドルに到達

中国のAIラボDeepSeekが、初めてベンチャキャピタルからの資金調達を検討していることが分かった。Financial TimesとBloombergの報道によれば、わずか数週間で評価額が**200億ドルから450億ドル**へと急騰。OpenAIの估值に迫る水準に達した。

DeepSeekは2025年初頭に世界を驚かせたAIラボで、米国の大手モデル（OpenAI、Anthropic）に比べ大幅に少ない計算リソースで同等以上の性能を持つLLMを構築。オープンウェイトモデル（Hugging Face で無料公開）で「民主的なAI開発」の象徴として注目された。

创始者は中国ヘッジファンド億万長者の**梁文峰（Liang Wenfeng）**で、同氏の保有率は約90%。DeepSeekはこれまで投資家を探していなかったが、競合他社に研究人员を引き抜かれる中、従業員に株式を提供する環境を整えるいため資金調達に踏み切った。

今ラウンドの主導投資家は国家系投資 vehicles「**中国集積回路産業投資基金**」（俗称「大基金」）。米国からの技術輸出規制を受ける中国は、自前のAI技術開発を推進しており、Nvidia製GPUの代わりにHuaweiのAscendチップを活用した「chip-efficient」な開発経験が評価されたと伝わる。

Huaweiとの组合は中国にとって重要だ。Ascend 910B/910C はNvidia H100の代替として急速に活用されており、DeepSeekの推論最適化技術と組み合わせることで、米国の制裁下에서도軍事・民生両面でAI開発を継続できる基盤が整いつつある。

---

## 米軍、AI意思決定支援「Military AI Chatbots」を本格導入へ

MIT Technology Reviewが6日に伝えたところによれば、米軍の最新AI意思決定支援システム「Military AI Chatbots」の導入が加速している。国防総省の担当者は「部隊が攻撃対象の候補リストをAIに提示し、最初の攻撃対象を選択するのを支援する用途」が想定されていると認めた。中国也一样类似的ツールを法定している。

MIT Technology Reviewの「10 Things That Matter in AI Right Now」によれば、「新しい作戦室」として会话型AIツールが指挥官の間で分析のみならず建議具として使われ始めている。「AI生成エラー、透明性の欠如、そしてBig Techが情報流通に不当な影響を与えることへの懸念」が提起されている。

技术的な観点からは、军用のAI advice engine は以下の要件を満たす必要がある：
- **RAG（检索增强生成）** を活用した情报获取と军事情报統合
- 敵対的環境でのプロンプトインジェクション対策
- 多言語対応（특히 中露口の情報が来源となる场合）
- 决策の解释可能性（XAI）确保

DARPAの研究から实用化されたこの分野では、Palantir、Anduril、Scale AIなどのスタートアップが军用AI契約を竞い合っている。MicrosoftのAzure GovernmentもAzure OpenAI Serviceを提供しており、OpenAIモデルが米軍向けに提供されていることが先前报道されている。

---

## Anthropic、Google Cloudへ2000億ドル投資──AIcompute戦争が激化

AIcompute分野での巨大投资合戦が加速している。The Informationが報じたところによれば、AI안전企業AnthropicがGoogle Cloudに**5年間で2000億ドル**を投資する計画を明かした。これは过去最大のsingle企業間のAI投資とされる。

AnthropicはGoogle CloudのTPUクレジットとインフラストラクチャーを使用しており，这次の投资は两社間の関係をさらに深めるもの。GoogleはAnthropicに約80億ドルを投資しており、两社の所有権・投資関係も存在する。今後は **Claude Agents** の企业向け 提供が强化される見込み。

、金融機関向けにもAI agents 提供 开始 Banks and financial firms 向けのAI agent服务を開始しており、10種類のツールで金融サービスの広範な業務をカバーするとWSJが報じた。株式分析、信用リスク評価、債igon裁定botなどの分野が期待されている。

企業AIagentの分野では、**Bret TaylorのSierra**が直近のラウンドから仅仅数力月後に约10億ドルを調達。Salesforce元CEOが创业した企业向けAI agentスタートアップは、昨年の950Mドル調達に続き、わずか数力月で估值が大きく跳ね上がった。企業ではMicrosoft Copilot、Google Gemini、Apple Intelligence的服务を竞い合っているが、Sierraは自定义AI agent平台として急成長している。

---

## NVIDIA × ServiceNow ── 企業の自律型AI Agentが加速

NVIDIAとServiceNowは5日、企業向けの新型自律型AI Agentを発表。NVIDIA founder and CEO Jensen HuangはServiceNowの年次イベント「Knowledge 2026」の基調講演に登場し、両社の协력을扩大すると表明した。

注目的是「**Project Arc**」という長期実行型自律型デスクトップAgentだ。ServiceNow Action Fabric経由でガバナンスと監査機能を備えながら、ローカルファイルシステムやターミナルアプリにアクセスして复杂なマルチステップの作业を自动化する。従来のRPA（Robotic Process Automation）では困難だった作业をAI Agentが替代する。

Project Arcは **NVIDIA OpenShell** を使用。OpenShellは自律型AI Agentのために设计されたオープンソースの安全なランタイムで、沙箱化されたポリシー管理下で动作する。米企业提供向けのAI Agent構築标准として定着しつつある。

NVIDIA Spectrum-X も扩展しており、「AI-Native Ethernet Fabric」としてAI工厂向けネットワーク基盤を提供。Microsoft Azure、NVIDIA GeForce NOW、云游戏サービスなど多元化が進んでいる。

---

## その他の注目AIトピック

- **Genesis AIがフルスタックに**: Khoslaが支援するロボティクススタートアップGenesis AIが、ハードウェア＋ソフトウェアの垂直統合型解决方案を демо展示。四脚ロボットを活用した物理AI（Physical AI）开发を進めている。
- **Samsung、時価総額1兆ドル到达到**: AI需要の反発でSamsungが韩国内企業で初めて、時価総額1000億ドルを超えた。HBMメモリ・AI Chip封装技術が要因。
- **Nvidia Nemotron 3 Nano Omni 発表**: 视觉・音声・言語を統合したマルチモーダルAI Agent向けモデル。エッジデバイス向けサイズでIoT∙AI应用に対応。
- **Meta Muse Spark**: Metaの企业内部用AI agentモデルが报道。根据地 использование AI agentが过热している。

---

## 開発者視点：AI Agent主流化の波

今回のニュース群から浮かび上がる大きなトレンドは**「AI Agent主流化」**だ。Private/enterprise сферы で自律型AI Agentが実際の业务プロセスに組み込まれ始めている。

技术的なポイント：
- **Memory/Context 管理**がAgent体验の成败を分ける
- **Tool use（ Function Calling ）**と外部API統合が标准化
- **安全かつ控制可能なAgent実行**が企业ユーザーの最大関心事
- **Human-in-the-loop** 确保の重要性が増している

Appleの和解报道は、AI产品市场营销における**過大广告リスク**也给開発者への警示となる。提供能力を証明できない状态下での宣传は、集体訴訟风险を招く。WWDC 2026で具体的な機能リリーマウントが約束できるか注目される。

---

## 参考リンク

- [Apple to pay $250M to settle lawsuit over Siri's delayed AI features - TechCrunch](https://techcrunch.com/2026/05/06/apple-to-pay-250m-to-settle-lawsuit-over-siris-delayed-ai-features/)
- [DeepSeek could hit $45B valuation from its first investment round - TechCrunch](https://techcrunch.com/2026/05/06/deepseek-could-hit-45b-valuation-from-its-first-investment-round/)
- [The Download: seafloor science and military chatbots - MIT Technology Review](https://www.technologyreview.com/2026/05/06/1136917/the-download-seafloor-science-military-ai-chatbots/)
- [NVIDIA and ServiceNow Partner on New Autonomous AI Agents for Enterprises - NVIDIA Blog](https://blogs.nvidia.com/blog/servicenow-autonomous-ai-agents-enterprises/)
- [Bret Taylor's Sierra raises nearly $1 billion - TechCrunch](https://techcrunch.com/2026/05/06/bret-taylors-sierra-raises-nearly-1-billion-months-after-last-capital-push/)

---

*本文の情報は2026年5月7日時点のものです。*
