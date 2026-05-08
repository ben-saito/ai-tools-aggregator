# Import AI 455: AI systems are about to start building themselves — Jack Clarkの衝撃予測

導入文（2〜3文で概要。全般的な話題引入け）

2026年5月4日号となるImport AI 455号で、Jack Clark氏（Anthropic政策責任者であり、同Newsletterの著者）は一つの重い問題を提起した。それは「AIシステムが自身よりも優れた後継システムを自律的に構築する日が、2028年末までに到来する確率は60%以上」というものである。本稿では、Clark氏がこの結論に至った技術的根拠をbenchmarksを中心に整理し、合わせて本周間に確認されたOpenAI Voice API拡張、NVIDIA × ServiceNowによるエンタープライズ自律エージェント展開、そしてAnthropic MythosがFirefoxにもたらしたセキュリティ革命をお届けする。

---

## Jack Clark氏警鐘：なぜAI自律開発が目前なのか

Clark氏がこの問題を書く起因となったのは、arXiv・bioRxiv・NBER上の論文公開情報と、最前線を走る企業のプロダクト観察からである。同氏によれば、過去12ヶ月間でAI開発パイプラインの各コンポーネントが自動化されつつある事実が累积している。

**コーディング特化点として:** SWE-BenchはAIに実世界のGitHubイシューを解かせるベンチマークで、2023年末の最高スコアはClaude 2の2%程度だった。それが2026年には**Claude Mythos Previewが93.9%**を記録し、ベンチマーク自体を実質的に締めくくった（saturation）。同時に、MLE-Bench（75のKaggleコンペティション）では、2024年10月の最高スコア o1+scaffoldが16.9%だったものが、2026年2月のGemini3+agent+scaffoldでは64.4%まで上昇している。

**AI研究の自動化突破口:** CORE-Bench（計算機再現性のベンチマーク）では、2024年9月の最高スコアが21.5%だったものが、2025年12月に95.5%を記録し、ベンチマーク авторが「solved」と宣言した。また、Anthropicが続けている「CPU-only小規模LLM訓練高速化」タスクでは、Claude Opus 4（2025年5月）の2.9倍高速化が、2026年4月のClaude Mythos Previewでは**52倍高速化**に達した。人間の研究者が同タスクで4x高速化を実現するには4〜8時間かかることが予想されることを考えると、その進化のスールは際限なく見える。

**Alignment研究への波及:** AnthropicによるAutomated Alignment Researchのproof-of-conceptでは、AIエージェントチームに研究方向を示すと、人間の設計したベースラインを超える技術を自律的に生み出すことに成功している。ただし現時点では小スケールでのみ動作し、本番モデルへの一般化は今後の課題である。

Clark氏の見解によれば、このままスケーリングトレンドが続けば、モデルが自身より優れた後継を自律構築する「モデルが自らの後継を訓練する」proof-of-conceptは1〜2年以内に実現しうるという。フロンティアモデルは莫大なコストと多くの<minimax:tool_call>
<invoke name="mcp_write_file">
<parameter name="content"># Import AI 455: AI systems are about to start building themselves — Jack Clarkの衝撃予測

導入文（2〜3文で概要。全般的な話題引入け）

2026年5月4日号となるImport AI 455号で、Jack Clark氏（Anthropic政策責任者であり、同Newsletterの著者）は一つの重い問題を提起した。それは「AIシステムが自身よりも優れた後継システムを自律的に構築する日が、2028年末までに到来する確率は60%以上」というものである。本稿では、Clark氏がこの結論に至った技術的根拠をbenchmarksを中心に整理し、合わせて本周間に確認されたOpenAI Voice API拡張、NVIDIA × ServiceNowによるエンタープライズ自律エージェント展開、そしてAnthropic MythosがFirefoxにもたらしたセキュリティ革命をお届けする。

---

## Jack Clark氏警鐘：なぜAI自律開発が目前なのか

Clark氏がこの問題を書く起因となったのは、arXiv・bioRxiv・NBER上の論文公開情報と、最前線を走る企業のプロダクト観察からである。同氏によれば、過去12ヶ月間でAI開発パイプラインの各コンポーネントが自動化されつつある事実が累积している。

**コーディング特化点として:** SWE-BenchはAIに実世界のGitHubイシューを解かせるベンチマークで、2023年末の最高スコアはClaude 2の2%程度だった。それが2026年には**Claude Mythos Previewが93.9%**を記録し、ベンチマーク自体を実質的に飽和させた（saturate）。同時に、MLE-Bench（75のKaggleコンペティション）では、2024年10月の最高スコア o1+scaffoldが16.9%だったものが、2026年2月のGemini3+agent+scaffoldでは64.4%まで上昇している。

**AI研究の自動化突破口:** CORE-Bench（計算機再現性のベンチマーク）では、2024年9月の最高スコアが21.5%だったものが、2025年12月に95.5%を記録し、ベンチマークの авторが「solved」と宣言した。また、Anthropicが続けている「CPU-only小規模LLM訓練高速化」タスクでは、Claude Opus 4（2025年5月）の2.9倍高速化が、2026年4月のClaude Mythos Previewでは**52倍高速化**に達した。人間の研究者が同タスクで4x高速化を実現するには4〜8時間かかることが予想されることを考えると、その進化のスケールは際限なく見える。

**Alignment研究への波及:** AnthropicによるAutomated Alignment Researchのproof-of-conceptでは、AIエージェントチームに研究方向を示すと、人間の設計したベースラインを超える技術を自律的に生み出すことに成功している。ただし現時点では小スケールでのみ動作し、本番モデルへの一般化は今後の課題である。

Clark氏の見解によれば、このままスケーリングトレンドが続けば、モデルが自らの後継を訓練する「model end-to-end trains its successor」のproof-of-conceptは1〜2年以内に実現しうるという。フロンティアモデルは莫大なコストと多くの人間の努力の结晶であり、即座に自動化されるわけではないが、非フロンティアレベルでの実証は近い将来に起こり得るとしている。

---

## OpenAI Voice API拡張：リアルタイム音声知能の統合

OpenAIは2026年5月7日、Voice intelligenceシリーズとしてAPI向け3つの新機能を発表した。すべてリアルタイム処理を対象としている点が特徴的だ。

**GPT-Realtime-2（voice model）:** 前身のGPT-Realtime-1.5から全面的に作り直された新しい音声モデルで、ユーザーとの対話において現実的な音声シミュレーションを実現する。客服システムや教育プラットフォームなど音声Interfacesがワークローを形成する領域を想定している。

**GPT-Realtime-Translate:** リアルタイム翻訳服務で、ユーザーの発話を聞きながら会話的に追跡し、「ユーザーのペースに追いつく」翻訳を提供する。

**GPT-Realtime-Whisper:** Whisperベースの文字起こし新機能。対話をしながらリアルタイムにSpeech-to-Text変換を行い、その文字列をすぐさま次のアクション（例如通知や記録）に利用可能である。

OpenAIは、これら3モデルの組み合わせにより、「リアルタイム音声が単純なコール＆レスポンスから、実際にワークローを実行できる音声Interfacesへ移行する」と表述している。API提供となるため、企業が顧客服务やコンテンツ創作ツールに这urierな音声AIを自家実装できる。

滥用リスクに対しては_guardrailsが内置されているとされているが、詳細は非開示。

---

## NVIDIA × ServiceNow：エンタープライズ自律エージェントの大型展開

NVIDIAとServiceNowは2026年5月6日、企業向け自律AIエージェントに関する協業を拡大し、ServiceNow Knowledge 2026の开幕基調講演でJensen Huang CEOがBill McDermott ServiceNow Chairman兼CEOと共に語った内容を详细に説明した。

**Project Arc（自律デスクトップエージェント）:** ServiceNowが発表したProject Arcは、長い時間走る、自己進化型自律デスクトップエージェントで、デベロッパー、ITチーム、管理者などのナレッジワーカー向けに設計されている。ServiceNow AI Platformにネイティブに接続し、ServiceNow Action Fabricを通じてガバナンスとワークフローインテリジェンスをもたらす。ローカルファイルシステム、ターミナル、マシンにインストールされたアプリケーションにアクセスし、従来の自動化では处理不可能な复杂なマルチステップタスクを実行できる。

**OpenShell（オープンソースセキュアランタイム）:** Project ArcはNVIDIA OpenShellを採用している。OpenShellは、自律エージェントをサンドボックス化してポリシーベースで統制する环境下で开发・配備するするためのオープンソースランタイムで、ServiceNowはこれに贡献している。エージェントが見るもの、使用できるツール、各アクションの実施範囲を企業が定義できる。

**NOWAI-Bench × NeMo Gym:** 両社は、Nemotron 3 Superがオープンソースモデル中でNo.1の座を占めるベンチマークスイート「NOWAI-Bench」も進化した。EnterpriseOps-Gymは、マルチステップワークフローに焦点当てたエンタープライズエージェントベンチマークで、汎用ベンチマークでは评估困難な領域をカバーしている。

** Blackwellのコスト優位性:** NVIDIAによると、BlackwellプラットフォームはHopper比でトークン出力が**50倍以上**向上し、100万トークンあたりのコストは**約35分の1**に削減される。エージェントが数百万のワークフローにスケールするためにはトークンエコノミクスの効率性が合點roj的重要因素であり、Blackwellの効率性是企业がAI導入を本格化する上で重要な判断材料となる。

---

## Anthropic Mythos × Firefox：AIセキュリティツールの革命

MozillaのFirefoxセキュリティチームが2026年5月7日に公开发衰したブログ記事によると、AnthropicのMythosモデルの導入により、同チームのセキュリティバグ发现プロセスが劇的に変化した。

**劇的な改变:** MythosはFirefoxのコードベースに対して高度なバグ挖掘を行い、その中には10年以上眠っていた重症度も含む多种多様な高 severityバグを多数发掘した。2026年4月、Firefoxは**423件ものバグ修正**を出荷したが、ちょうど1年前の2025年4月はわずか31件だった。これは約13.6倍增加に相当する。

**従来のAIセキュリティツールの課題:** 従来のAIバグ发现ツールは、重篤な欠陥を見逃すか、あるいはセキュリティチームに误検知の洪水を与えてarynspするかのいずれかだった。Mythosはその両方の課題を克服し、精度と再現率を大幅に向上させた。

**AIによる修正自动化の限界:** 特筆すべきは、FirefoxチームはまだAIにバグ修正を自动生成させていないことである。チーム）は各バグに対してAIにパッチのコードを書かせているが、结果是通常人間のエンジニアがレビューと修正を行い、すべてのケースで「1人のエンジニアがパッチを書き、1人のエンジニアがレビューする」という従来のパターン依然残っている。「我々がこの文章で議論しているバグについては任何一个も自动化可能とは确认できなかった」とMozillaの研究者は书いている。

この結果は、AIが代码产出において强力な辅助的能力を持つ一方で、ソフトウェアセキュリティの核心部分（バグ修正とレビュー）における人間の役割の重要さを再确认させるものである。

---

## 参考リンク

- [Import AI 455: AI systems are about to start building themselves](https://importai.substack.com/p/import-ai-455-automating-ai-research)
- [OpenAI launches new voice intelligence features in its API (TechCrunch)](https://techcrunch.com/2026/05/07/openai-launches-new-voice-intelligence-features-in-its-api/)
- [NVIDIA and ServiceNow Partner on New Autonomous AI Agents for Enterprises](https://blogs.nvidia.com/blog/servicenow-autonomous-ai-agents-enterprises/)
- [How Anthropic's Mythos has rewritten Firefox's approach to cybersecurity (TechCrunch)](https://techcrunch.com/2026/05/07/how-anthropics-mythos-has-rewritten-firefoxs-approach-to-cybersecurity/)

---

*本文の情報は2026年5月8日時点のものです。*
