# NVIDIAが初の大規模AI向CPU「Vera」をAnthropic/OpenAI/SpaceXに納入、GoogleはGemini 3.5 FlashでAIエージェント時代へ

2026年5月、AIインフラwarzにおいて大型の動きが重なった。NVIDIAが同社初の大規模AI向CPU「Vera」の最初の納入をAnthropic、OpenAI、SpaceX、Oracle Cloudのtop4企業に実施し、GoogleはI/O 2026で「Gemini 3.5 Flash」と「Antigravity 2.0」というagent focused開発プラットフォームを発表した。またJack Clark氏によるImport AI 457号では、精密計算ソフトを标的とした「fast16」マルウェア（Stuxnet風の産業破壞）、Muon optimizerの神经元死バグ、そして「Positive Alignment」という新しいAI安全性研究潮流が同時に扱われた。

---

## 1. NVIDIA Vera CPU — AIエージェント時代のسسةCPU

NVIDIAは5月18日（米国時間）、同氏初の大規模AI向CPU「Vera」の最初の納入を完了した。Anthropic（サンフランシスコ）、OpenAI（ミッション・ベイ）、SpaceXAI（パロアルト）の3社への納入を行い、Ian Buck NVIDIA VPが 직접 전달했으며、月曜にはOracle Cloud Infrastructureへの纳入も完了した。

### エージェントsoftにはGPUだけでなくCPUも大きな负荷

Veraは「NVIDIA CEO Jensen Huang氏」が2026年3月のGTCサンノゼで表示した新しいクラスのCPUで、スタンドアロンの大規模AI向プロセッサ。従来のコア密度重視型設計とは明確に差別化されたアーキテクチャで、エージェントアプリケーションの特性を考慮して設計されている。

Veraの核心Specは以下の通り：
- **88コア**のNVIDIA設計Olympusコア
- **1.2TB/秒**のメモリ帯域幅
- コア单芯あたり**50%高速化**（旧世代比）
- エージェントsandboxes、tool calls、orchestration layers、long-context檢索の全処理に対応

NVIDIAのIan Buck VPは「Agentic AI is creating a new CPU moment in the AI factory — as models move from answering to acting, Vera is purpose-built to keep that work moving at scale」と述ベタている。AIエージェントはGPUだけで動くのではなく、orchestration、檢索、tool orchestrationの全でCPU負荷が大きくなるという现实的に设计上になっている。

---

## 2. Google Gemini 3.5 Flash — エージェント本命モデル登场

Googleは5月19日のGoogle I/O 2026で「Gemini 3.5 Flash」を正式にリリースした。DeepMindのChief TechnologistであるKoray Kavukcuoglu氏によれば、「3.5 Flashはqualityとlow latencyの难以置信な組み合わせを提供し、我々の最前线モデルを上回るperformance」を達成したという。

### エージェント用途特化の4つの改善

**處理速度4倍**: Gemini 3.5 Flashは他の最前线モデル比で**4倍高速**。これは複数のAIエージェントが同時に長い間のタスクを処理する際に关键的。Kavukcuoglu氏音「その速度はFlashの agentic work 设计の中心にある。複数のエージェントが同時に走る場合、レイテンシが性能を決める」と説明する。

**Antigravity 2.0とのネイティブ統合**: Googleは同時に「Antigravity 2.0」も发表了。Autonomous agent向け開発プラットフォームで、Flash 3.5とAntigravity 2.0は「native environment where agents can live, work, and execute.」を實現するために共同開発されました。

**長時間自律運行**: このモデルは複数時間にわたる自律的運行が可能。GoogleのSenior DirectorでHead of ProductのTulsee Doshi氏によれば、「意思決定点に到達した場合はユーザーが入力を求められることがありますが、基本的には自律的に走り続ける」。

**パートナー企業での実用例**: Googleによると、金融・フィンテック企業が複数週間のワークフロー自動化や、データサイエンスチームが自律的な分析自動化に既に活用しているという。

Kavukcuoglu氏音「Flash 3.5と今後登場する3.5 Proモデルは連係動作するように設計されている」としており、small/fastとlarge/high-qualityの組み合わせた agent 用製品ラインとして位置づけられている。

---

## 3. Google I/O 2026 — Pics / Genie / AI設計ツール

Google I/O 2026ではAI agent以外のトピック也不少なかった。

### Google Pics — AIデザイン生成アプリ

Googleは「Pics」という新しいAIデザイン生成アプリを发表。有料ユーザー向けの「Google AI Ultraサブスクリプション」に今後扩大予定。SNSのクリエイティブや招待状、マーケティング資料、Mock-upをテキストプロンプトだけで生成できる。特点是Geminiが編集图层として機能し、画像内の特定部分だけを自由に改変できる点。

Googleは「現在のAIモデルは高质量な画像を生成できるが、画像の一部だけを修正するのはまだ困難」と認められており、その問題解決を目指している。

### Project Genie × Street View — 実写からの世界シミュレーション

Google DeepMindは「Project Genie」とGoogle Street Viewの統合を発表した。Googleは過去20年間で**280 billion枚以上の画像**を110力国で収集しており、このデータを使って現実の世界をシミュレートできる世界モデルを構築正在。

例として、新しいロボットの配备先が伦敦で稀に日光が差し込む状况をシミュレート거나、ニューヨコラーの雪景色を特定の時期に限定して仿真这些都是有可能になる。robotics訓練、gaming、travel planningへの応用が期待されている。

---

## 4. Import AI 457 — Fast16: Stuxnet風の精密計算破壞マルウェア

Jack Clark氏によるImport AI 457号では、2つの重要な技術分析が行われている。

### Fast16 — 精密計算ソフトを标的とした20年前のウイルス

SentinelOneの研究者が「fast16.sys」という20年ぶりに発見された精巧なコンピュータウイルス分析了。LS-DYNA 970、PKPM、MOHID这样的高精度計算ツールを标的とし、メモリ上で計算結果を改ざんする仕組み。这个ソフトウェアの手法とコンセプトは「Stuxnet」に類似しており、民間産業インフラへの対応工作として関心が高まっている。

このウイルス特征：
- 标的はcrash testing、structural analysis、physical process simulations用途の精密計算ソフト
- 「LS-DYNA」はJCPOA（イラン核協定）違反の研究報告でも引用された歴史がある
- 細胞レベル影響を与え、产业 research programsの速度和正確性を低下させる
- 発見された場合であっても、原因特定が极其困難なという設計

Jack Clark氏音「超知性体が「AI non-proliferation」を核保有国が「nuclear non-proliferation」と同じ重要性として捉える可能性」を示唆しており、未来のAIによる産業破壞の前兆として警戒が必要。

---

## 5. Muon Optimizerの神经元死バグとAurora

Import AI 457号では、Muon optimizer の重大なバグも報告されている。Tilde Researchによる分析結果：

**Muonの問題**：
- 「row-norm anisotropy」を継承し、長い行列で動作する際にMLP層の神经元の一部を永久に死滅させる
- 学習率warmup途中で大きいportionの神経家が永久に小的更新しか受けなくなり、回復不能になる
- Step 500時点で**4分の1以上の神経家が事実上死亡**し、leverage scoresが二峰式分布になる

**Auroraによる解決**：
Tilde Researchは这个问题解決のために「Aurora」（rectangular matrices用のleverage-aware optimizer）を開發。1.1BパラメータのTransformerを~100Bトークンで事前学習した試験では、AuroraがMuonおよびNorMuon全てでもっとも低い最終損失を達成：

| Optimizer | Smoothed Loss (step 24k) | MMLU |
|---|---|---|
| Aurora | **2.26** | **+10 points vs Muon** |
| NorMuon | 2.33 | baseline |
| Muon | 2.31 | baseline |

Auroraの改善は「MMLUなどの暗記系ベンチマークで特に顕著」と報告されており、MLP Layer記憶力への 효과가確認されている。Pleiasの研究者Alexander Doria氏も独立に600MパラメータモデルでAuroraがMuonとAdamW优于ことを確認済み。

**なぜ重要か**: 長年の、研究者たちはAdamWを打ち負かす最適optimizerの構築竞争中してきたが、まだ決定的な成功はない。本次のAuroraがその競争に終止符を打つ可能性は低いものの、optimizer開発の難しさを再確認させた研究である。

---

## 6. 「Positive Alignment」— AI安全性の新しい研究方向

Import AI 457号では最後に、「Positive Alignment」と題するPosition Paperが紹介された。Oxford大学、Google DeepMind、OpenAI、Anthropic、Stanford大学などの連催研究者による共同著作。

### 従来の「Negative Alignment」の限界

従来のAI安全性研究は主として「失敗モードの削減」に焦点を合わせてきた。しかしこのアプローチには次のような問題がある：

- 情報エコロジーを「リスク回避」に最適化してしまい、「人間の成長」より「災害回避優先」的になりがち
- 極限エラーは削減できるが、社会を「浅く无聊な援助」に留める可能性がある
- AIが教育、医学、統治、毎日のsensemakingに深く組み込まれる時代において、不十分なアプローチになっている

### Positive Alignmentの定義

Positive Alignmentは「(i) 安全かつ協調的であり続けつつ、(ii) 多元的、polycentric、コンテキスト敏感的、ユーザーがauthorした方法で人間・生態系の繁栄を積極的に支持するAIシステム開発」と定義される。

これは単なる「安全確保」から一歩踏み出し、「AIが人間の人生を实质的に改善する」ことを目標にする研究潮流である。

---

## 参考リンク

- [NVIDIA Vera CPU Delivery](https://blogs.nvidia.com/blog/vera-cpu-delivery/)
- [Google Cloud AI Builders](https://blogs.nvidia.com/blog/google-cloud-developer-community-ai-builders/)
- [With Gemini 3.5 Flash, Google bets its next AI wave on agents](https://techcrunch.com/2026/05/19/with-gemini-3-5-flash-google-bets-its-next-ai-wave-on-agents-not-chatbots/)
- [AI design tools are the next big battleground](https://techcrunch.com/2026/05/19/ai-design-tools-are-the-next-big-battleground-and-google-is-going-all-in-at-io-2026/)
- [Google's Genie world model can now simulate real streets with Street View](https://techcrunch.com/2026/05/19/googles-genie-world-model-can-now-simulate-real-streets-with-street-view/)
- [Import AI 457: AI stuxnet; cursed Muon optimizer; and positive alignment](https://importai.substack.com/api/v1/posts/import-ai-457-ai-stuxnet-cursed-muon)

---

*本文の情報は2026年5月20日時点のものです。*