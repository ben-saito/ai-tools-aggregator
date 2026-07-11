# OpenAIがGPT-5.6ファミリーを発表——Sol/Terra/Lunaの3層展開でAnthropic追击加速、Meta Muse撤回

2026年7月はAI業界にとって「大型モデルラッシュ」の様相を呈している。OpenAIが7月9日に待望のGPT-5.6ファミリー正式版をリリースし、3バリアント構成でEnterprise・Coding・セキュリティ全方位に攻勢をかける一方、AppleがOpenAIを提訴という法廷闘争に突入。MetaはInstagramのAI機能をユーザー反発により撤回に追い込まれた——開発者視点での7月上旬のAI業界を振り返る。

---

## GPT-5.6ファミリー详解：Sol / Terra / Lunaの3層戦略

OpenAIは7月9日（米時間）、新型モデルファミリー「**GPT-5.6**」正式版をTechCrunchを通じて公開した。3つのバリアントは明確に階段状の市場戦略を反映している：

- **Sol（主力）**: ワークホースモデルでEnterprise・Coding・科学研究に最適化。CEO Sam Altman FormsがCNBCに明かした数据显示、**AIコーディングタスクにおいてSolは前世代比54%トークン効率向上**を達成
- **Terra（中間）**: 中間ポジションで、AnthropicのFable 5稍稍上 Performance自称
- **Luna（低成本）**:  budget 向けで、Opus 4.8超えを主張

### ベンチマーク戦略：Anthropicを意識した数値提示

OpenAIはArtificial Analysis Coding Agent Indexを援用し、**Solがスコア「80」を記録**——Anthropic Fable 5比+2.8ポイントながら、トークン消費量は**半分以下**、処理時間は**半分**、成本は**3分の1**という効率性を強調した。「史上最強のサイバーセキュリティモデル」としてのPOSITIONも積極化。脅威モデリング、コードレビュー、脆弱性パッチ、 Blueteaming（模擬攻撃診断）などの防御用途をサポートし、Trump政権が以前検討した展開制限を事実上クリアする形態となった。

### API価格（100万トークンあたり）

| モデル | 入力 | 出力 |
|--------|------|------|
| Sol | $5 | $30 |
| Terra | $2.50 | $15 |
| Luna | $1 | $6 |

Microsoft Copilot 365における「優先モデル」としての継続採用も明確化され、提携解消説を一時的に鎮火させた。

---

## ChatGPT Work：永続クラウドVMで「ビーチからウェブサイト作成」

OpenAIは同日、**ChatGPT Work**正式提供開始も発表。VentureBeat報道によれば、GPT-5.6をコアとするクラウドベースのAIエージェントで、MCP（Model Context Protocol）ベースのプラグインを通じてGmail、Google Calendar、Slack、GitHubに接続。ユーザーがタスク outcomes を指示すると、ステップに分解して数時間にわたる复杂プロジェクトを自律実行する。

### 技術的差分：永続VMアーキテクチャ

競合产品がローカルマシンの電源オン・接続状態を要求するのに対し、ChatGPT Workは**OpenAIサーバー上の永続VM**として動作。デバイスを問わず状態が維持され、モバイルから「ビーチでウェブサイトを作成して共有」という새로운ユースケースも実現した。

提供はPro/Enterprise/Eduから段階的にRolloutし、Plus/Businessへも拡大予定。Plusユーザー（月額$20程度）への开放的扩展は「OpenAIミッション契合」と製品マネージャーTy Geri氏が語っている。

---

## Apple vs OpenAI：元Apple幹部盗用疑惑で法廷闘争

7月10日、Appleは**OpenAIを提訴**した。Northern District of Californiaにfilingされた訴訟の核心は、OpenAIのChief Hardware Officer **Tang Tan**氏（Apple在職24年、iPhone/Watch VP of Product Design出身）およびSenior Systems Electrical Engineer **Chang Liu**氏による**トレードシークレット窃取**。

### 具体的な主張

- Apple極秘プロジェクトコードネームをOpenAI採用プロセスで使用
- 面接受驗者にAppleハードウェアコンポーネント持込を指示
- 退職者にセキュリティ手順の迂回法を指南
- 未発表製品の詳細（仕様書・工程資料・プロプラエタリデータ）を不正ダウンロード
- 被告にはJony Ive氏のio Products Startupも名連なる（OpenAIが2025年に65億ドルで買収）

Appleは2月に懸念を文書で传达したがOpenAIからの返答はなく、裁判を通じて Discovery 過程で不正行為の全容解明を目指す構えだ。

---

## Meta、InstagramのAI機能を撤回：「missed the mark」

同じ7月10日、Metaは**InstagramのAI画像生成機能**を撤回した。先週 rollout された Meta Superintelligence Labs開発の Muse Image の一部として、公開アカウントを@-メンションしPhotosをAI生成の参考にする機能が、CAA含むユーザー・才能事務所からの即時反発を受けた。

Metaは公式ブログ上で「**この機能はねらちを外れた（missed the mark）**」と認め撤回を表明。ソーシャルメディア上でのAI悪用（有名人ヌード画像生成など）の歴史的文脈もあり、設計プロセスの甘さが批判された。

---

## 参考リンク

- [OpenAI launches its new family of models with GPT-5.6 (TechCrunch)](https://techcrunch.com/2026/07/09/openai-launches-its-new-family-of-models-with-gpt-5-6/)
- [Apple sues OpenAI over alleged trade secret theft (TechCrunch)](https://techcrunch.com/2026/07/10/apple-sues-openai-over-alleged-trade-secret-theft/)
- [Meta removes controversial AI feature on Instagram after backlash (TechCrunch)](https://techcrunch.com/2026/07/10/meta-removes-controversial-ai-feature-on-instagram-after-backlash/)
- [OpenAI introduces ChatGPT Work (VentureBeat)](https://venturebeat.com/technology/openai-introduces-chatgpt-work-a-cloud-based-ai-agent-that-manages-tasks-across-email-slack-and-calendars)

---

*（本文の情報は2026年7月11日時点のものです）*
