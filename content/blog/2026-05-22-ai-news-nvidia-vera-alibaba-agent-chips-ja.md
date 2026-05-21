# Nvidia VeraとAlibaba Agent Chip —— AI推論戦線が激化

2026年5月、AI半導体業界で「推論」の覇権争いが本格化している。NvidiaがCEO Jensen Huang氏をして「2000億ドル市場」と称されたCPU事業に参入を発表し、一方でAlibabaがAIエージェント専用チップ「Zhenwu M890」で中国勢の逆襲を図る。両社の動きが示すのは、**大規模言語モデルの推論ワークロード特化型チップ**という新戦線の誕生だ。

---

## Nvidia Vera Rubin —— AIエージェント向けCPUの野望

Nvidiaは5月21日、FY2026 Q1決算で**816億2000万ドルの四半期売上**を記録し、アナリスト予想（788億6000万美元）を再び上回りました。HuangCEOは決算説明の中で、同社の新しい**Vera CPU**がAIエージェント向け市場という新しい2000億ドル市場を生み出していると発言しました。

### Vera誕生の背景

Huang氏によれば、Veraは「推論（Inference）」ワークロード特化型のCPUとして設計されました。現行のGPU主力構成では、推論時にGPUの高性能が過剰となり消費電力が大きすぎるという課題があります。Veraは**Groqの技術を活用**し（reportedly 170億ドル相当のライセンス契約）、NVIDIA BlackwellやRubin GPUラインと組み合わせた「Vera Rubin」プラットフォームで年内にも本格展開されます。

### 調達制約という影

HuangCEOは「Vera Rubinの生涯を通じて供給制約が続くと思う」と正直に述懐しました。Nvidiaの調達コミットメントはQ1で**1190億ドル**に上昇（前四半期952億ドル）。メモリチップ不足への警戒が背景にあります。同社はまた、**800億ドルの自社株買い戻しプログラム**を発表し、四半期配当を1セントから25セントに引き上げるなど、金融的な自信を示しつつも供給不安を暗示しています。

> **開発者視点**: Veraが本当に2000億ドル市場の第2の柱になるかは供給次第ですが、AIエージェント用途のCPU需要が本物であることは確定的です。推論特化型チップの登場は、エッジ推論やプライバシー保護型AIアプリケーションにとって重要なマイルストーンになります。

---

## Alibaba Zhenwu M890 —— エージェント専用チップで美國制裁に対応

Alibabaは5月20日、傘下の半导体子公司T-Headが開発した**Zhenwu M890**を発表しました。前世代810E比**3倍性能向上**を達成し、AIエージェント用途に最適化された設計が特徴です。

### アーキテクチャの革新

M890の的核心は「**長いコンテキスト保持**」「**モデル間リアルタイム協調**」「**人的介在少ない複雑なマルチステップタスク実行**」という3つの要件への対応です。これらの要件は標準的な推論チップの最適化対象とは大きく異なります。

Alibabaは同時に**2027年Q3にV900（さらに3倍性能向上）**、**2028年Q3にJ900**というロードマップも公開しました。これはHuaweiがAscendシリーズで示した継続的な社内チップ開発サイクルを彷佛とさせます。

### 既に560,000ユニットの導入実績

T-Headによると、Zhenwuシリーズ累計で**56万ユニット以上を出荷**し、20業界400社以上の外部顧客がチップを活用しています。自動車メーカーや金融サービス会社が含まれています。新チップはAlibaba Cloudの国内モデルプラットフォーム「Bailian」を通じて、「Panjiu AL128」（128個のM890を1ラックに集成したサーバーシステム）で企业提供されます。

### ソフトウェアスタックも一并発表

ハード面と共に、**Qwen 3.7-Max**（最新旗舰LLM）も発表されました。的特点は「**最大35時間低下なしでの連続動作**」で、拡張自律動作を前提とした設計であることが示唆されます。

> **開発者視点**: Alibabaの戦略は明确的です——米国輸出規制下でも国内技術でAIコンピューティング能力を自律構築する。T-Headのチップを使っている400社以上の企業は、米国のAIاخر半岛が完成しても中国のAIエコシステムを使い続けることができます。これは企業にとって геополитический リスク分散になると同時に、中国市場でのAIアプリケーション開発にとって重要なインフラになります。

---

## 開発者角度看——两社の戦略の違い

| 項目 | Nvidia Vera | Alibaba Zhenwu M890 |
|------|-------------|---------------------|
| **対象市場** | グローバル（米大手含む） | 中国市場中心 |
| **最適化対象** | AIエージェントの推論ワークロード | エージェントの自律動作・長時間タスク |
| **価格感** | 未公開（大型データセンター向け） | 中国企業向け（Panjiu AL128で提供） |
| **供給状況** | 生涯供給制約を警告 | 560,000ユニット済み投入済み |

---

## Import AI 457 —— AI{stuxnet}問題とオプティマイザー競争

Jack Clark氏発行のニュースレターImport AIでは、開発者向けにより技術的な深掘りが行われています。

### fast16 —— AI版Stuxnetの脅威

SentinelOneの研究者たちが、**Stuxnetより5年前に使用された**「fast16.sys」という名の密的コンピュータウイルス詳しい解析を発表しました。このウイルスは「精密計算ソフトウェア」を選択的に標的とし、メモリのコードをパッチして結果を改ざんしていました。

LS-DYNA 970、PKPM、MOHIDなど、核兵器開発相關の高精度エンジニアリングツールが標的だった可能性があります。AI安全の観点から注目すべきは、「**超知能が他の超知能の登場を阻止する方法**」としてこのような攻撃が使われている可能性があることです。

### Muon オプティマイザーの欠陥とAuroraの登場

Tilde Researchは、**MuonオプティマイザーがMLP層のニューロンを永久に死滅させる**バグを発見しました。ステップ500時点で4分の1以上のニューロンが効果的に死亡し、Leverスコア分布が二峰性になる問題です。

代わりに研究者たちは**Aurora**（「レバレジ認識オプティマイザー」）を公開しました。1.1Bパラメータートランスフォーマーを約100Bトークンで訓練した結果、AuroraはMuonより**MMLUで10点向上**を達成しました。Alexander Doria氏も600Mパラメーターモデルで独立検証済みです。

> **開発者視点**: オプティマイザー研究の最前線では、未だAdamWを明確に打倒した者はいません。Auroraがその候補になり得ますが、サイドエフェクト（ニューロン死滅）のような微妙な問題は残っています。オプティマイザーの選定は、使用するモデルアーキテクチャとタスクの特性を考慮する必要があります。

---

## 参考リンク

- [Nvidia Vera chip: $200 billion market Jensen Huang doesn't want you to overlook - AI News](https://www.artificialintelligence-news.com/news/nvidia-vera-chip-200-billion-market/)
- [Alibaba Zhenwu M890 AI agent chip roadmap - AI News](https://www.artificialintelligence-news.com/news/alibaba-zhenwu-m890-ai-agent-chip-roadmap/)
- [fast16 | Mystery Shadow Brokers Reference Reveals High-Precision Software Sabotage - Sentinel LABS](https://www.sentinelone.com/labs/fast16-mystery-shadowbrokers-reference-reveals-high-precision-software-sabotage-5-years-before-stuxnet/)
- [Aurora: A Leverage-Aware Optimizer - Tilde Research](https://blog.tilderesearch.com/blog/aurora)
- [Import AI 457: AI stuxnet; cursed Muon optimizer; and positive alignment](https://importai.substack.com/p/import-ai-457-ai-stuxnet-cursed-muon)

---

*（本文の情報は2026年5月22日時点のものです）*