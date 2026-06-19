# AI開発最新ニュース（2026年6月第3週後半）— Basetenの15億ドル調達、Amazon独自AIチップ、Xiaomiの1000token/sモデル

2026年6月第3週後半は、**AIインフラ投資の加速**と**推論速度の新たな競争**が顕著だった。AI推論スタートアップBasetenが$13Bの評価で$15億調達を検討しているという報道、Android端末メーカXiaomiが1兆パラメータモデルで1000token/sを達成、AmazonがNvidia離れを目指すAIチップ販売に本格参入——本章ではこれらの最新動向を技術的観点から整理する。

---

## Baseten、15億ドル的大型調達を検討——推論ゴールドラッシュの真の最前線

TechCrunchの報道によると、**AI推論スタートアップのBaseten**が前回の大型ラウンドからわずか数ヶ月後、**15億ドルの資金調達**を検討している。評価額は**130億ドル**に達する見込みで、「推論ゴールドラッシュ」が依然として加速していることを鮮明に示している。

### 推論市場の構造変化

Basetenの調達劇は、AI市場における構造変化を反映している。**訓練フェーズ**から**推論フェーズ**への投資重心移動が鮮明になり、推論インフラの最適化・低成本化・高透過化を求める企業需要が急増している。

**開発者にとって的意义:** 推論コストの最適化はプロダクションLLM導入の成否を分ける。Basetenのような専門プレイヤーの台頭は、API経済の中で「推論Layer」の専門化が進んでいる証拠であり、自社のLLM deployment戦略を見直す契机になる。

---

## Amazon、Nvidia離れを大胆に——独自AIチップの外部販売を開始

TechCrunchは6月18日、Amazonが**Nvidia製GPUへの依存を軽減**するため、**独自AIチップの外部販売**を拡大していると報じた。AWSの独自AIチップ（Trainium/Inferentia）は従来AWS内部向けだったが、外部顧客向け提供を積極化する。

### AWS Trainium/Inferentia戦略

AmazonのChip戦略の核心は以下:

- **Trainium**: 訓練用途向け、Nvidia H100比でコスト効率を重視
- **Inferentia**: 推論用途向け、低レイテンシ・低コストを重視
- **Nvidiaとの共存**: 全てを置き換えるのではなく、ワークロードに応じた柔軟な使い分け

**開発者にとって的意义:** マルチ_chip対応が標準になる時代、LLM deployment先でNvidia/AMD/独自Chipのいずれを使うかを抽象化するMiddlewareLayerの重要性が増す。HuggingFace TGIやvLLMなどの推論ServerのChip最適化対応も加速するだろう。

---

## Xiaomi、1兆パラメータモデルで1000 token/sを達成——中国otechの推理最適化

Import AIの報道で明らかになった**Xiaomi MiMo-V2.5-Pro-UltraSpeed**は、**1兆パラメータ規模のLLMで秒間1000トークン**という驚異的な推論速度を達成した。8GPUの汎用ノード上で動作し、Cerebrasのような specialized hardwareに依存しない点が特徴。

### 技術的突破口

Xiaomiが達成した高速推論の关键技术:

- **DFlash**: ブロックレベルのmasked parallel predictionを活用した投機的復号法
- **TileRT**: Tile AI開発の推論最適化Softwareスタック
- **FP4量子化**: 4ビット浮動小数点演算によるメモリ・帯域幅削減
- **codesign**: 模型とSoftware栈の共同最適化

**開発者にとって的意义:** 推論速度の向上が新たなユースケースを開く。1000token/s級であれば、画面再描画を待たずにリアルタイムでLLMと対話でき、リファクタリングやコード生成の скоростьも格段に向上する。エッジデバイスでのLLM deployment также近了。

---

## Sequent——「Alignment is not on track」と題する新的非營利Alignment研究組織

Import AI #461で注目された**Sequent**は、英国AI Security InstituteのAlignmentチームとTimaeusが共同設立した**非營利研究組織**だ。「alignmentは軌道に乗っていない」という問題意識出发点とし、超知能AIの安全性に対する信頼性の高いAlignment技術の開発を目指す。

### 組織目標と研究方向

Sequentの研究方向は以下:

- **Scalable Oversight**: 大規模AIシステムの行動を監視・評価する技術
- **Learning Theory**: 学習理論に基づくAlignment一般化保証
- **Heuristic Arguments**: 経験則を超えた原則的Alignment理解
- **Game Theory & Personas**: 複数Agent間の相互作用とAlignment

**開発者にとって的意义:** RSI（再帰的自己改善）實現に備えたAlignment研究は、 frontier labだけのものではなくなる。開発現場でも「意図しない行動の検出・抑制」はプロダクションLLMの信頼性にとって重要であり、 evals/Red teamingの実践知見が注目される。

---

## FrontierCode——Cognitionが提唱する「次の世代向け」困難なCoding Benchmark

Cognition（Devinの開発元）が 발표한**FrontierCode**は、现行最难のCoding評価Benchmarkだ。注目点は**Claud Opus 4.8が最难タスク（Diamond tier）で13.4%**しか達成できない设计上され、 оценкаの饱和直到くまでの「寿命」が長いことが期待される。

### FrontierCodeの特徴

- **150タスク**: Diamond（50）/Main（100）/Extended（150）の3段階難易度
- **Hand-curated**: 各タスクはRepo maintainerが40時間以上かけて選定
- **コード合併性評価**: 正しさだけでなく、test quality、scope discipline、style、convention適応を総合的に評価
- **多样な言語対応**: Python、Go、TypeScript、JavaScript、Java、C/C++など

**開発者にとって的意义:** SWE-Benchが急速に饱和する中、新たなhard evalとしてFrontierCodeは貴重。AI coding agentの真の実力を測定するには、 hand-craftedで現実的なタスク设计が不可欠であり、 生成AIコードの品質管理にも活用できる。

---

## UK唯一の主権AI対応——Cumuloによる次世代SOCプラットフォーム

AI Newsの報道で明らかになった**Cumulo**は、英国のSOC-as-a-Service提供商**e2e-assure**が発表した**主権AI対応のIT/OT統合SOCプラットフォーム**だ。GCHQの「AI Cyber Shield」構想に呼応し、デジタルTwin技術とうたっている。

### Cumuloの技術的特徴

- **レイヤーAI構成**: ローカルモデル層（環境固有検出）/セキュリティインテリジェンス層（脅威データ統合）/Frontierモデル層（非機密強化）を分離
- **顧客專用ローカルLLM**: 各組織の環境に訓練されたLLMを主権環境内に展開
- **Cumulo Analyst Helper (CAH)**: 複数AIモデルが各調査を多角的に検証し、監査可能なビューを構築
- **Anti-hallucination Layer**: 脅威インテリジェンスと確定的検出エンジンで知見を検証

**開発者にとって的意义:** AI駆動のセキュリティ運用において、幻觉抑制と人間確認の并存は重要。Cumuloの架构は、LLMの出不蹄をかりにセキュリティ分析の信頼性を確保するDesign Patternとして参考値がある。

---

## 参考リンク

- [AI inference startup Baseten reportedly raising $1.5B (TechCrunch)](https://techcrunch.com/2026/06/18/ai-inference-startup-baseten-reportedly-raising-1-5b-months-after-its-last-mega-round/)
- [Amazon hopes to challenge Nvidia more directly by selling its AI chips (TechCrunch)](https://techcrunch.com/2026/06/18/amazon-hopes-to-challenge-nvidia-more-directly-by-selling-its-ai-chips/)
- [Snap spins off AI video team into new company, Dotmo (TechCrunch)](https://techcrunch.com/2026/06/18/snap-spins-off-ai-video-team-into-new-company-dotmo-due-to-costs/)
- [Sequent: Scale and Automation for Higher Confidence in Alignment](https://www.sequent.org/launch)
- [MiMo-V2.5-Pro-UltraSpeed: Pushing 1T-Parameter Model Generation Speed to 1000 TPS (Xiaomi MIMO)](https://mimo.xiaomi.com/blog/mimo-tilert-1000tps)
- [FrontierCode (Cognition)](https://cognition.ai/blog/frontier-code)
- [Import AI 461: "Alignment is not on track" (Jack Clark)](https://importai.substack.com/p/import-ai-461-alignment-is-not-on)

---

*本文の情報は2026年6月19日時点のものです。*