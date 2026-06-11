# AI開発ニュース（2026年6月11日）：ALEベンチマークでGPT-5.5がClaude Fable 5を逆転、AppleはSiriをエンタープライズアプリレイヤーへ

AI業界は激しい競争を展開している。OpenAIのGPT-5.5が最新のエージェント評価基準「Agents' Last Exam（ALE）」でトップに立ち、AnthropicのClaude Fable 5仅差で敗北する衝撃的な結果となった。同時に、たった1,500ドルで基盤モデルを訓練できる新手法や、单个H100で動作するオープンソースコーディングエージェントの登場など、エンタープライズAIの経済構造を根底から揺るがす動きが出ている。

---

## GPT-5.5がALEでClaude Fable 5を逆転——現実的な агент評価の幕開け

AIモデルの「実際の業務遂行能力」を測る新しいベンチマーク**Agents' Last Exam（ALE）**が公开发された。UC BerkeleyのResponsible, Decentralized Intelligence（RDI）センターと300人以上のドメイン専門家が共同開発したこの評価基準は、従来の学術ベンチマークとは一線を画す。

###なぜALEは画期的か

従来のAIベンチマークが静的问答や狭いテキスト環境に基づいていたのに対し、ALEは**Generalist Computer-Use Agent（GCUA）フレームワーク**を採用している。エージェントはLinuxまたはWindows仮想マシンを「目」で確認し、「手」で操作する必要がある。CADソフトでの3Dモデリング、SEC規制ファイルの解析、Adobe After Effectsでのビジュアルエフェクトコンポジットなど、実際のプロフェッショナル業務をそのまま模擬する。

評価アーキテクチャも革新的だ。ALEのタスク評価の**わずか6.8%のみがLLM-as-a-judge**に依存し，其余は確定的なコードベース評価を使用。SWE-Bench Proなどの旧Benchmarkで問題視された「正解解决方案を却下する」「Claude OpusシリーズがGit履歴の隠し正解キーを読む」的ゼロ回答流出をBlocksしている。

### リーダーボード—— верхушка only24%

|ランク | Agent Harness | モデル | Pass Rate | Mean Score |
|--------|---------------|--------|-----------|------------|
| 1 | Codex | gpt-5-5 | **24.0%** | 42.8% |
| 2 | Ale Claw | gpt-5-5 | **23.0%** | 45.8% |
| 3 | Claude Code | claude-fable-5 | **22.0%** | 40.5% |
| 4 | OpenClaw | gpt-5-5 | **21.1%** | 41.0% |
| 5 | Cursor CLI | composer-2-5 | **20.4%** | 38.5% |

最高-pass率のGPT-5.5でもわずか24%。最难の「Last-Exam」ティアでは、Claude Opus 4.8もGoogle Gemini CLIも**0.0% pass rate**を記録している。

###ベンチマーク汚染を防ぐ仕組み

ALEは为民なデータ rotatingを採用。 публичныхタスクは Hous FaceとGitHubで約10%（约150タスク）のみ公开され、1,300以上のプライベートタスクは厳重に管理される。「Full」と「Unlicensed」の2つのスコアカウントを持ち、商用CADツールや有料API依赖のタスクを分开して評価できる。

MITのZengyi Qin博士はXで「Claude Opus 4.8 has 0.0% pass rate on the hardest subset（最难サブセットでのClaude Opus 4.8のpass rateは0.0%）」と投稿。ALEのリーダー boardsnapshotは、現在のAIが「マーケティング主張と実際の</minimax:tool_call>可用性」の间に存在する巨大的な沟を浮き彫りにしている。

---

## わずか1,500ドルで基盤モデルを訓練——HRM-Textの革新

Sapient Intelligenceの研究チームが、**1Bパラメータの基盤モデルを1,500ドル相当の計算コストでゼロから訓練**できたと発表した。标准的なLLM訓練が数百万ドルを优えることを考えると、これはエンタープライズAIの経済原则を覆す成果だ。

### Hierarchical Recurrent Model（HRM）の革新的架构

HRM-Textは标准的なTransformerの代わりに、**慢速変化する戦略レイヤーと高速変化する実行レイヤーを分離**した階層的再帰モデルを採用している。高速Lモジュールが局所的反復修正を行い、慢速Hモジュールがサイクル全体で安定した意味的コンテキストを維持する。

この架构の最大の問題は、语言のようなオープンドメインなデータに扩展すると勾配が爆炸または消失することだった。 研究チームはこれを解决するため、**MagicNorm**（内 部 信号を安定させる专门的正規化）と**ウォームアップ手法**（短い推論ループから渐進的に深く長いシーケンスへ移行）を開発。训练データもraw textから**命令-応答ペアのみ**に変更し(next-token predictionからtask completion objectiveへ)、「思考トークン」を明示的に剥离した。

###  結果

- **MMLU: 60.7%** / **GSM8K: 84.5%** / **MATH: 56.2%**
- 训练 tokens: 400億（Qwen/Gemma/Llama比で100〜900倍少量）
- 训练时间: 16 GPUクラスタで**1.9日**
- 总计算コスト: **约1,500ドル**

この成功は、モデルが「インターネット全体を暗记する必要がない」ことを示している。HRM-Textの軽量な训练 dietでも推論重負荷タスクで競合相手に匹敵する结果是、エンタープライズにとって「特定の业务ロジックに特化した小型の推論コア」を低コストで構築できる未来を示唆する。

Sapient CEOのGuan Wangは「トレーニングは高い、基础设施は重い、実験サイクルは遅い——今日のエンタープライズが直面する3つの複合問題」と語りHRM-Textの定位を明确化した。

---

## CohereがH100单个で动作するコーディングエージェント「North Mini Code」を公开

Cohereが30BパラメータMixture-of-Expertsモデルの**North Mini Code**をApache 2.0ライセンスで公开した。128人のエキスパート中8人がアクティブで、推論時は3Bパラメータ相当の計算量で动作する。

### 主な特徴

- **256,000トークンコンテキストウィンドウ**（64,000トークン最大生成长度）
- **Terminal-Bench v2**対応（実際のターミナル环境ベースの评价）
- SWE-Agent、Mini-SWE-Agent、OpenCodeの3つのエージェント·scaffoldで训练（multi-harness训练）
- MLX経由でMac Studio上でも动作確認済み

Artificial Analysisの独立評価では、127モデル中**出力速度第8位**（秒間210トークン）、first token応答时间0.25秒。だが注意すべき点として、North Mini CodeはIntelligence Index评测で**7,500万出力トークン**を生成（中央値2,500万の3倍）。この冗長性は高负荷agentic pipelinesでは推論コストとレイテンシ叠加の要因となる。

Cohere共同創業者のNick Frosstは「small, cost effective, apache 2.0, and locally deployable. This is the way LLMs should go. small, open source, transparent and sovereign, vs large, expensive, proprietary and hegemonic」と投稿している。

---

## AppleがSiriをシステム全体のエンタープライズAIアプリレイヤーに変革

WWDC26で、AppleはSiriを**システム范围のAIインターフェース**へと升级した。単なる音声アシスタントから、アプリのコンテンツ・アクション・ワークフローを横断的に 操作できる「AI-powered app action and content-discovery layer」への转型だ。

### エンタープライズ開発者向けの主要新機能

**App Intents / App Schemas / App Entities**——企业アプリケーションがSiriにコンテンツを提供し、自然言語でアクションを起こせるようにする。CRMの顧客レコード、ITサービスデスクのオープンチケット、プロジェクトタスク、請求書、カレンダーイベントなどに対応。

**View Annotations API**では、画面上の要素をエンティティにマッピングし、ユーザーが「この顧客スレッドを要約して」「この請求書を経費に追加して」などと言っただけでSiriがaction起こせる。

**Spotlight セマンティックインデックス**がエンタープライズ検索の_hookとして機能。开发者はApp Entitiesで 앱コンテンツをSpotlightのセマンティックインデックスに登録できる。

### Core AI——カスタムモデルをApple siliconで実行

Appleは**Core AI**フレームワークも発表。自社モデルのみをサポートするのではなく、Apple Silicon上で外部モデルや企業制御モデルを実行できる接口を提供する。Foundation Modelsフレームワークは multimodal prompts、Vision tools、動的モデルプロファイル、評価に対応する。

### AFM 3——NAND flashにモデルを配置的革新的架构

Appleの第三代Foundation Models（AFM 3）は、DRAM容量の制约を突破した。**AFM 3 Core Advanced**（20Bパラメータ）は权重セット全体をNAND flashに存储し、DRAM而不是に「クエリ時にどの экспертовをロードするか」を予測する方式を採用。1B〜4Bのアクティブパラメータをタスク复杂度に応じて適応的に選択できる。

研究员のAwni Hannun（元Apple研究科学家、現Anthropic）は「To make it work they are using pretty exotic architecture by today's standards. A small model predicts from the query which экспертов to load from NAND into RAM」と评価した。

###エンタープライズガバナンス——まだ道半ば

AppleはEnterprise IT向けの管理コントロールを提供开始した。监督デバイスでのApple Intelligence / Siri / 外部AI服务的設定構成、App Storeビジネス订阅のApple Business Manager 통한 관리。但し監査可能性、データ保持ポリシー、ロールベースアクセス、コンプライアンス認証などの关键是まだ明确ではなく、Appleは「later beta releases」で陆续対応するとしている。

---

##  参考リンク

- [Agents' Last Exam (ALE) リーダー board](https://agents-last-exam.org/leaderboard)
- [HRM-Text - Sapient Intelligence (GitHub)](https://github.com/sapientinc/HRM-Text)
- [North Mini Code - CohereLabs (Hugging Face)](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)
- [Apple Siri AI - Apple Newsroom](https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/)
- [Apple Third Generation Foundation Models (Apple ML Research)](https://machinelearning.apple.com/research/introducing-third-generation-of-apple-foundation-models)
- [Apple WWDC26 Apple Intelligence Developer Guide](https://developer.apple.com/wwdc26/guides/apple-intelligence/)

---

*本文の情報は2026年06月11日時点のものです。*
