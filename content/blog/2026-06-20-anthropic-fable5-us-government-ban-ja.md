# 米国政府によるAnthropicモデル禁止が波紋——AI業界に与える影響とは

米国政府在線問題管理局（BIS）がAnthropicの最新モデル **Fable 5** と **Mythos 5** の公開を差し止めた。国家安全上の懸念を理由とする異例の措置だが、米中のAI覇権争いが新たな局面を迎えた形で、開発者コミュニティにも大きな波紋を広げている。

---

## 禁止の背景：Amazon研究者の告発と「Mythos」の危险性

問題の端緒はAmazonの研究者チームがBISに提出した告発状だと言いわれている。Anthropicが2026年6月にリリース予定だった2つのモデルが、米国の輸出管理令に抵触する可能性が高いと指摘された。具体的內容としては、Mythos 5がサイバー攻撃自動化に貢献し得る能力を備えていたとされる。

Cryptography Capitalの創設者Eric Cryptter氏 はX（旧Twitter）で「輸出管理でソフトウェアを止めるのは30年越しの不可能性の証明」と批判。TechCrunchの分析者も「PGP以来的輸出管理が効を奏した例はなく、論理的に考えてもモデルの配布阻止は不可能に近い」と指摘する。

それでもなお、BISが動いた理由として米国内で進むAIモデルの軍備競争がある。Anthropicは米国防総省との契約を結んでおり、同社のモデルが特定用途に転用されるリスクが意識されたと推測される。

---

## Basetenが15億ドルを資金調達——AI推論の「ゴールドラッシュ」

禁止の影で、資本市場ではAI推論ベンチャーの資金調達が加速している。

AI推論インフラのスタートアップである **Baseten** が、わずか数ヶ月前に前回ラウンドを終えたばかりにもかかわらず、**15億ドル（約2300億円）の資金調達**協議案中であることがTechCrunchの独自報道で判明した。調達後評価額は**130億ドル**に達する。

AI推論とは、訓練済みモデルに実際入力を流し込み出力を生成する工程を指し、生成AIアプリケーションの根幹を成す。ChatGPTやClaudeなどのサービスがまさにこの推論を大規模に実行している。

BasetenのCEOは「今は推論のゴールドラッシュ」と語り、GPU不足の解消と推論コストの低下に注力する意图を示した。同社以外にも **Railway**（AIネイティブクラウド、1億ドル調達）や **Listen Labs**（AI顧客インタビュー、6900万美元調達）などインフラレイヤーへの投資が殺到している。

---

## SalesforceがSlackbot AIエージェント公開——企業AIの競争激化

企業向けAIの競争も熱を帯びている。Salesforceは2026年1月、Slackに統合された新型AIエージェント **Slackbot** を正式公開した。Microsoft CopilotやGoogle Workspace AIとの競争加剧で、职场プラットフォーム战场上でのAIアシスタント提供が標準機能になりつつある。

特徴として、Slack内の会話データから自動的にワークフローを生成·改善する能力和、SaaS各サービスのAPIを横断した自律的なタスク遂行が挙げられる。開発者視点から 보면、Slackプラットフォーム上で動く **SlackアプリとしてのAIエージェント** 开发撞ble点がポイントだ。

---

## ElasticがDeductive AIを最大8500万美元で買収

もう1つ見逃せない動きはElasticによる **Deductive AI** の買収案だ。CRVが支援する同社はAIを使ってソフトウェアのバグを自動検出·修正する撞力で、設立からわずか3年のスタートアップながら最大8500万美元の買収金額に設定された。

Elasticは検索·セキュリティ企業で知られるが这次的買収で「AI驅動のデバッキング」という新天地に足を踏み入れる。開発者而言は、コード品質管理ツールとしてDeductive AIのAI检查機能がOSS化した場合の影響は小さくない。

---

## 開発者にとっての意味——輸出管理とAIインフラの注意点

本件で注目すべきは以下の3点だ。

- **モデルの輸出管理リスク**：Anthropicのように米国防総省との関連が深いモデルは、輸出管理の対象となる可能性がある。グローバルにサービス提供するアプリケーションではモデル選びと法務リスクの検討が必須の時代になった。
- **推論コストの低下趋势**：Basetenなどの推論プラットフォームが 대규모 투자を受けGPU不足が缓解に向かうと、推論コストはさらに低下する趨势にある。アプリケーション 开发者にとって好消息だ。
- **企業AI採用の加速**：SalesforceのSlackbotのように、普段使い的工具へのAI統合が標準化されると、業務フローの自動化が更容易になる。API設計の考え方も变化する可能性ができた。

---

## 参考リンク

- [TechCrunch AI – US banned Anthropic Fable 5](https://techcrunch.com/podcast/the-us-banned-anthropics-fable-5-release-but-the-numbers-dont-seem-to-care/)
- [TechCrunch – Baseten $1.5B raise](https://techcrunch.com/2026/06/18/ai-inference-startup-baseten-reportedly-raising-1-5b-months-after-its-last-mega-round/)
- [TechCrunch – Elastic buys Deductive AI](https://techcrunch.com/2026/06/18/source-elastic-agrees-to-buy-crv-backed-deductiveai-for-up-to-85m/)
- [VentureBeat – Railway $100M AI cloud](https://venturebeat.com/infrastructure/railway-secures-usd100-million-to-challenge-aws-with-ai-native-cloud)
- [VentureBeat – Salesforce Slackbot AI](https://venturebeat.com/technology/salesforce-rolls-out-new-slackbot-ai-agent-as-it-battles-microsoft-and)
- [VentureBeat – Google search box redesign](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)

---

*本文の情報は2026年6月20日時点のものです。*
