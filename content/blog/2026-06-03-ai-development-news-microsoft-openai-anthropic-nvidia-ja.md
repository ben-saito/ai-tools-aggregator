# AI開発ニュース 2026年6月2日〜3日：Microsoft・OpenAI・Anthropic・NVIDIAの大型発表まとめ

AI開発業界は6月2日〜3日、MicrosoftのAI評価フレームワーク公開、OpenAIのCodex製品群拡張、AnthropicのCritical Infrastructure向けClaude展開、NVIDIAのAI Agent PC参入など、複数の大型発表が同時多発的に行われた。本稿ではこれらのニュースを技術的な観点から整理する。

---

## Microsoft、ADCと「Spec-driven Scoring」でAI動作テストを刷新

Microsoftは6月2日、`Adaptive Spec-driven Scoring for Evaluation and Regression Testing`（ADC）を公開した。テキスト記述からAI評価シナリオを自動生成するOSSフレームワークで、開発者がプロンプトではなく「仕様書」の形でAIの振る舞いを定義できる点が特徴。

ADCのコアコンセプトは3つ：

- **Spec-driven**: プロンプトの羅列ではなく、期待動作を構造化された仕様として記述
- **Scoring**: 生成した評価結果の自動採点と回帰検出
- **Evaluation**: テキスト記述からのテストケース自動生成

同年5月にリリースされたAI Agent向け制御仕様化管理と組み合わせ、Microsoftは「AIシステムの品質保証」をエンタープライズ開発の標準プロセスへと格上げする方針を示している。開発者にとっては、プロンプトエンジニアリングの属人性を排し、BDD（Behavior Driven Development）的なテスト文化をAI評価に適用できる点が興味深い。

---

## OpenAI、Codexに6つの専門Plugin束ねて「White-Collar Work」に対応

OpenAIは同日、Codex向けに6つの専門Pluginをリリースした。対象領域は：

- **Data Analytics**: データ解析ワークフロー自動化
- **Creative Production**: クリエイティブ制作支援
- **Sales**: 営業パイプライン管理
- **Product Design**: 製品設計アシスタント
- **Equity Investing**: 株式、投資分析
- **Investment Banking**: IB業務支援

各Pluginは「特定の職能のコンテキストと指示を束ねた」もので、単なるLLM呼び出しではなく、専門業務に応じた推論環境と業務知識が組み込まれている点が従来と異なる。OpenAIはこれを「white-collar workの自動化」と表現しており、MCP（Model Context Protocol）の拡張事例とも解釈できる。

---

## Anthropic、Claude MythosをCritical Infrastructure 15カ国で展開

Anthropicは6月2日、Project Glasswing（セキュリティ脆弱性診断プログラム）およびClaude Mythosへのアクセスを、15カ国150組織に拡大すると発表した。対象は以下の重要インフラ：

- 電力
- 水道
- 医療
- 通信

基準は「サイバー攻撃で1億人以上に影響しうる施設」。GlasswingはAIセキュリティ評価、MythosはLLM本身的防護機能を提供し、Anthropicは**AI safetyを国家インフラ防衛の文脈で語る**姿勢を見せている。

Claude CodeにおけるMythosの活用も進んでおり、Critical Infrastructure領域でのAI利用における安全基準構築竞争的ポジションを獲得しつつある。

---

## NVIDIA、AI Agent PCで2000億ドルCPU市場を追う

NVIDIAはMicrosoft、Dell、HPと協業し、AI Agent PCの普及を促進する取り組みを進めている。背景には2000億ドル規模のCPU市場がある。

NVIDIAの戦略は以下の3軸：

- **AI Agents容易化**: PC上でAI Agentを安全かつ実用的に動作させる技術
- **Consumer市場開拓**: エンタープライズ以外的へのAI Agent普及
- **CPU市場侵食**: 従来のCPU依存からのパラダイムシフト

成功すれば、NVIDIAはGPUベンダーを超えて「AI Native PC」のプラットフォーム提供者へと成長する可能性がある。

---

## ZeroDrift、10Mドル調達でAIモデルの「自己防衛」に挑む

ZeroDriftは6月2日、AIモデル自身的防御のためのコンプライアンスサービスを開発した。AIモデルとエンドユーザーの間に位置し、コンプライアンス違反の可能性のあるメッセージをフラグ・置換する。

コンセプトは「**AI models from themselves**」——モデルの出力が想定範囲外になった際に介入する安全レイヤー。Compliance as a Serviceモデルで、RegTech領域における新しいカテゴリ確立を狙う。

---

## Google、深層偽造電話検出機能を一般公開

GoogleはAI深層偽造による電話詐欺対策として、**fake call detection**機能をロールアウトした。知らない番号からの電話を人々が避ける傾向が続く中、詐欺師は信頼された電話番号を偽装し、Deepfake技術で声までを権威者や家族、雇用主を模倣する戦術に移行している。

この機能はAndroid端末等で動作し、リアルタイムの音声分析でDeepfakeを検出する。AppleのPasskeyやMicrosoftのAuthenticatorと共に、FIDO標準の身份確認の拡張として期待される。

---

## Trump政権、絞り込み版AI監視の大統領令に署名

Trump大統領は業界からの反発を受けた絞り込み版AI監視大統領令に署名した。主要内容：

- 先進AIモデルの事前放出政府レビューは**任意（voluntary）** に
- 民間企業のイノベーションへの干渉 최소화
- AIの安全基準は industry主導で 形成

前令案では法的拘束力を伴う事前審査が検討されていたが、Tech企業群からの強い反発を考慮して大幅後退となった形。AI規制の議論が「安全 vs イノベーション」から「企業自主努力 vs 政府介入」という構図で再燃している。

---

## Alphabet、800億ドル調達でAIインフラ構築加速

AlphabetはAI需要の高まりに対応するため、800億ドル規模の資金調達を計画している。同社は声明で「企業および消費者からのAIソリューション需要が強く、公司の供給能力を上回っている」と説明した。

Alphabetの大型投資は、Google CloudのAIサービス需要、GoogleのTPU開発、Waymoの自動通学事業への資金供給に使用される可能性が高い。

---

## 参考リンク

- [New Microsoft tool lets devs spin up AI behavior tests using text descriptions | TechCrunch](https://techcrunch.com/2026/06/02/new-microsoft-tool-lets-devs-spin-up-ai-behavior-tests-using-text-descriptions/)
- [OpenAI launches new Codex tools for white-collar work | TechCrunch](https://techcrunch.com/2026/06/02/openai-launches-new-codex-tools-for-white-collar-work/)
- [Anthropic scales Claude Mythos to critical infrastructure in 15+ countries | TechCrunch](https://techcrunch.com/2026/06/02/anthropic-scales-claude-mythos-to-critical-infrastructure-in-15-countries/)
- [ZeroDrift raises $10M to protect AI models from themselves | TechCrunch](https://techcrunch.com/2026/06/02/zerodrift-raises-10-million-to-protect-ai-models-from-themselves/)
- [Google rolls out fake call detection to protect against AI deepfake impersonation scams | TechCrunch](https://techcrunch.com/2026/06/02/google-rolls-out-fake-call-detection-to-protect-against-ai-deepfake-impersonation-scams/)
- [Nvidia chases $200B CPU market with AI agent PCs from Microsoft, Dell and HP | TechCrunch](https://techcrunch.com/2026/06/01/nvidia-chases-200b-cpu-market-with-ai-agent-pcs-from-microsoft-dell-and-hp/)
- [Trump signs narrower executive order on AI oversight after industry objections | TechCrunch](https://techcrunch.com/2026/06/02/trump-signs-narrower-executive-order-on-ai-oversight-after-industry-objections/)
- [Alphabet plans to raise $80 billion to pay for AI buildout | TechCrunch](https://techcrunch.com/2026/06/01/alphabet-plans-to-raise-80-billion-to-pay-for-ai-buildout/)

---

*（本文の情報は2026年6月3日時点のものです）*