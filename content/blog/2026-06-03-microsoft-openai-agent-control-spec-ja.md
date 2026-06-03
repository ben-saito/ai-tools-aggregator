# 開発者待望の仕様駆動型AI Agent制御——Microsoftが新フレームワークをOSS公開、OpenAIはCodexでホワイトカラー変革

AI Agentの制御に関する課題が、2026年6月に入り急速に進展を見せている。MicrosoftはAI Agentの振る舞いをテキスト形式で定義できる仕様駆動型フレームワーク **Adaptive Spec-driven Scoring for Evaluation and Regression Testing** をOSS公開し、OpenAIはCodex向けに6つのプロフェッショナル向けPluginセットをリリースした。またAnthropicの上場申請やAI経済規模の測定問題など、産業構造そのものに変革をもたらす可能性があるニュースが同時多発している。

---

## Microsoft、仕様ファイルでAI Agent行動を制御するOSSフレームワーク公開

Microsoftは2026年6月2日、**Adaptive Spec-driven Scoring for Evaluation and Regression Testing** と呼ばれるAI評価・回帰テスト用のオープンソースフレームワークをBuild Conferenceで公開した。このフレームワーク的核心は、開発者、コンプライアンス、Security teamsが独自のポリシーを策定し、それを移植可能なポリシー定義ファイルとしてAI Agentに適用できる点にある。

従来のAI Agent制御の課題は、行動Policiesがコード内にハードコードされる傾向にあったことだ。Agentがツールを呼び出す順序、許可される操作、データの取り扱い方法是認知的にも技術的にも管理が複雑化しやすい。特にEnterprise環境では、法務・コンプライアンス teamsがAgentの行動を監査・修正する必要性が生じるが、従来の方法ではコード変更なしにはPoliciesを更新できなかった。

新フレームワークでは、YAMLなどのテキスト形式で **Spec（仕様）** を定義し、それをAgentに紐づける。SpecにはAllowedActions、DeniedActions、DataHandlingRules、EscalationPoliciesなどを記述可能。Specファイルはバージョン管理可能で、コードとは独立して更新できる。開発者は `mspec validate` コマンドでSpecファイルの整合性をチェックでき、Consistency違反があればデプロイ前に検出できる。

Security研究者からは「AnthropicのMCP SDKにおけるtransport mechanismの脆弱性」など、Agent統合層での問題が指摘されているが、Microsoft此次の発表は、エコシステムレベルでの標準化努力」とも解釈できる。Spec駆動型アプローチが広く採用されれば、Security Policiesの共有・監査が容易になり、OpenClawなどの異種Agent間での相互運用성도向上する可能性がある。

---

## OpenAI Codex、白FCFFF向け6つの專業Pluginセット公開

OpenAIは同日、Codex向けの新Pluginセットとして **6つのプロフェッショナル向けツールバンドル** を公開した。対象領域は **データ分析、クリエイティブ制作営業、製品デザイン、Equity投資銀行業務** の6領域である。

各Pluginは、特定のJob岗位职责に合わせて統合され、Context Windowに適切なInstructionsと参照データがBundlingされている。例如、数据分析PluginではSQLクエリの自動生成、可視化、Growth Trends分析が一体化している。製品デザインPluginはFigmaのコンポーネントをCodexから操作し、プロトタイプ生成とDesign Specの同期を可能にする。

注目すべきは、Investment Banking Pluginの存在である。M&Aのプロセスにおける Comparable Companies分析、Bidding Strategiesのシミュレーション、Data Roomの要約自動化など、従来はアナリストが数時間かけて行っていたタスクを、数分で処理できる。OpenAIはこれを **「White-Collar jobsの再定義」** と位置づけている。

ただし、API呼び出しコストのBronze板问题是無視できない。GitHub Copilotユーザーが新しい使用量ベースのPricingに反応を見せる中、CodexのPlugin使用におけるコスト最適化は、実務導入において重要な検討事項となる。

---

## AI経済，规模2,600%成長だがGDPには見えず——Anthropic研究人员らが警鐘

University of VirginiaとAnthropic、Eank of Canadaの共同研究が2026年5月に公表した論文が、**AI経済の真実が見えない** という問題を提起している。試算によると、米国のAI GDPは2025年に約2500億ドルに達し、**質量調整後の実質成長率は年間約2,600%** に上る。しかし従来のGDP統計では、この成長はほとんど認識されない。

理由は主に2つ。第一に、データセンター建設の投資は巨額だがGDP押し上げ効果への影響は限定的。第二に、Inference（推論）におけるAI利用が経済影響のMajority占めるが、単価下落が品質向上とほぼ同じ速度で進行するため、名目売上はModeratelyしか成長しない。

研究者らは **「AI衛星勘定」** の開発を提言している。統計機関がの名目Compute支出などのMeasurements를开发し、GDP計算に組み込むことで реаль的なAI経済規模を把握可能にするという。政府の10年債発行計画がこのままの実データに基づけば、労働税ベースのShockに備えられない可能性が高い。

---

## Anthropic、上場申請に踏み切る

2026年6月1日、AnthropicがSECに対する上場申請書類を提出したことがTechCrunch 의해確認された。AnthropicはかつてはLLM世界でUnderdogと見なされていたが、今はTop-tier enterprise customersを抱え、Claude MythosをCritical Infrastructureに展開している企業へと成長した。

競合であるOpenAIも同様の道を歩んでいるとされ、米国のAI産業における **基礎モデル企業のIPO競争** が本格化しつつある。MarketにおいてAI企業の上場は，投资者がAI経済の成長を直接的に評価できる稀有な機会となる。

---

## Google、AndroidにDeepfake通話を検出機能を提供

Googleは2026年6月、Android端末向けに **偽装通話検出機能** を導入すると発表した。犯罪者がAI deepfake技術を使用して、親族や雇用主を装い金を騙し取る手口が急増している背景がある。未知番号からの通話が増えない中、犯罪者は信頼できる電話番号をスプーフィングし、Deepfake音声で接触する手口に変更している。

新機能は、通話中にリアルタイムで音声の真正性を評価し、疑わしい場合はユーザーに警告を出す。Android OSレベルでの実装となるため、Third-party Appに依存しないのが优点だ。

---

## Uber、4ヶ月で予算を使い切りAI支出上限を導入

Uberは社員によるAI使用бюджетаを4ヶ月で超過破了として、Employee-LevelでのAI支出上限を導入したと伝えられた。同社は以前<Employeeに尽可能aiを使用するよう奨励していたが、Anthropic Claude Codeなどの利用が予想外に膨らんだと見られる。

他のEnterpriseでも类似の傾向が报告されており、**AI支出の管理・最適化** が2026年下半期の重要課題となりそうだ。

---

## 参考リンク

- [TechCrunch: Microsoft offers devs a better way to control AI agent behavior](https://techcrunch.com/2026/06/02/microsoft-offers-devs-a-better-way-to-control-ai-agent-behavior/)
- [TechCrunch: OpenAI launches new Codex tools for white-collar work](https://techcrunch.com/2026/06/02/openai-launches-new-codex-tools-for-white-collar-work/)
- [TechCrunch: Anthropic files to go public](https://techcrunch.com/2026/06/01/anthropic-files-to-go-public/)
- [PIIE: Where is AI in GDP statistics?](https://www.piie.com/publications/policy-briefs/2026/where-ai-gdp-statistics)
- [Ars Technica: AI costs how much? GitHub Copilot users react to new pricing](https://arstechnica.com/ai/2026/06/ai-costs-how-much-github-copilot-users-react-to-new-usage-based-pricing-system/)
- [Ars Technica: Google announces deepfake call detection for Android](https://arstechnica.com/gadgets/2026/06/google-announces-deepfake-call-detection-for-android-new-airdrop-device-support/)

---

*（本文の情報は2026年6月3日時点のものです）*