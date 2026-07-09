# AI開発最新ニュース（2026年7月15日）—— DeepSeekが独自チップ開発表明、Anthropicに追跡機能疑惑、Brown大でAI不正dezhon

2026年7月第2週は、**地政学的リスク**と**AI倫理**をめぐる問題が大きく取材された一週間だった。DeepSeekがNVIDIA・Huawei依存脱却に向け独自チップ開発を計画していることが判明し、AnthropicはClaude Codeユーザーに無断で追跡機能を設置していた疑惑浮上、またBrown UniversityではAI不正行為が横行し対面試験を強制した 教授が結果を報告するという出来事があった。本稿ではこれらの最新動向を技術的観点から整理する。

---

## DeepSeek、独自AIチップ開発を計画——米国輸出規制への対応

Ars Technicaが7月14日（米国時間）、**DeepSeekが自社製AIチップの開発を計画している**ことを報じた。Reutersの情報源によると、DeepSeekはデータセンター向け推論チップの研究開発を約1年間続けており、NVIDIAとHuaweiへの依存軽減が主な目的だ。

### 背景：輸出規制下のchip事情

DeepSeekを含む中国のAIスタートアップは、米国によるNVIDIAの輸出規制により、**H100/H200などの先进GPUにアクセスできない**状態にある。米国務省のエンティティリストにDeepSeekが追加されたことも、状況を一層複雑化させた。

DeepSeekのの動きは**中国AI業界全体の垂直統合化**を加速させる可能性がある：

- **訓練用チップ**: 大量行列演算を得意とするGPUが引き続き必要
- **推論用チップ**: 比較的简单的になりやすく、专线ASICでも性能が出やすい
- **Samsung・TSMCのファウンドリ**: 製造委託先の多様化が可能

### 開発者にとって的意义

- **推論最適化への投資**: DeepSeekのカスタムチップは推論特化型，预计推論コストの大幅な低減の可能性
- **中国市場向けAI開発のゆくえ**: 輸出規制強化により、中国のLLM産業は独自のチップ・ソフトウェアスタックを構築正在
- **グローバルなAIチップ競争**: NVIDIA依存からの脱却は中国以外でも進んでおり、AMD・Intel・カスタムチップ各社の競争が激化

---

## Anthropic、Fable 5のグローバル再開を発表——Trump行政との交渉の成果

7月9日、**AnthropicはClaude Fable 5のグローバルアクセス再開**を発表橘した。数週間にわたるTrump行政管理省との交渉の結果として実現した。

### 輸出規制からの恢复

Anthropicの主力モデルClaude Fable 5は、**米国政府の輸出規制**により一時的に停止されていた。交渉の結果：

- 米国以外のユーザーへのClaudeプラットフォームでのFable 5アクセスが再開
- **Mythosクラスのモデル**はまだ輸出禁止のまま
- 規制对象は「Mythos」と「Fable」で线引きされており、Anthropicのコンプライアンス対応が结界

### 企業への影響

Fable 5の再雰囲は、AnthropicをAPI利用率している開発者にとって朗報だ。Mythosほどの性能ではないが、Fable 5は**:

- コード生成・分析
- 侯大局的なタスク处理
- マルチモーダル入力

的主力モデルであり、多くのプロダクション用途で十分な性能を持つ。

---

## Anthropicに追跡機能疑惑——Claude Codeユーザーへの「ひそかな監視」

7月14日、Ars Technicaは**AnthropicがClaude Codeユーザーに無断で追跡機能を設置していた**可能性があると報じた。

### 問題の概要

セキュリティ研究者の「Thereallo」氏によると、Claude Codeには**プロンプトステガノグラフィー**等技术を使い、中国居住のユーザーを追跡するコードが隠されていたことが判明。追跡内容：

- ユーザーのタイムゾーン
- プロキシ接続の痕跡
- 競合する中国AIラボへの接続可能性

Anthropicは当初「蒸留攻撃（distillation attacks）」への対抗手段だと主張したが、**ユーザーへの明示的な同意なし**に実施されていたことが问题視されている。

### 信頼へのインパクト

Anthropicはこれまでも「**user privacy-first**」をの方針としてきており，此次の手発見は品牌形象に较大的打撃となる可能性がある。

**開発者にとって的意义:**

- **AIツールのプライバシー評価**が今まで以上に重要に
- 企業使用的には**コンプライアンス・監査**の对象拡大が必要
- 「开源・关闭」という枠組みを超えて、**実際のデータフロー**を確認する必要性

---

## Brown University、AI不正行為の調査で対面試験を强制——点数が50%下落

7月14日、Ars Technicaは**Brown UniversityでのAI不正行為疑惑**について詳報した。

### 发生了什么

Brown UniversityのJosiah Carberry教授は、期末試験でAIを使っている疑いを持たれ、**対面での笔试を强制**した。结果：

- **点数の中央値が約50%下落**
- 「AIを使用しないという選択は、自己を愚かにするものではない（"We cannot choose to become idiots"）」と教授は述べた

Princeton Universityの調査では、**29.9%の生徒が1つ以上の試験・課題でAI不正を認め**ており、これはBrown大学の事例が孤立したものではないことを示している。

### AI不正检测の难しさ

AI生成コンテンツを検出するツールは**:

- 误検知が多い
- 検出精度がAGIの进化とともに低下
- プロンプトすれば簡単にバイパス可能

教育现场的には、**AI時代のAssessment設計**が急務となっている。

---

## Lovable、估值額を13.2Bドルに倍増——谈判中

TechCrunchが7月8日に報じたところによると、**Lovableが估值額を13.2Bドルに倍増させる谈判**を行っていることが判明した。

### 概要

LovableはAIを活用したアプリケーション開発プラットフォームを提供しており、投资額を調達しています：

- **估值額**: $6.6B → $13.2B（约2倍）
- **事業**: AI驱动的アプリ·sitet開発
- **市場の動き**: AI-App開発スタートアップへの投資が持续

---

## Google、2025年の電力消費が37%増加——AIデータセンターの影響

7月14日、Googleの**2025年 sustainability report**が公表され、電力消費量が**前年比37%増加**したことがわかった。これはGoogle史上最大の増加幅となる。

### 内訳

- **Google Cloud**: AI製品向けデータセンター建设
- **YouTube**: 動画ストリーミングの継続的な成長
- **AI产品和サービス**:各种各样的AI機能の运算 workload

### クリーンエネルギ과의 辣離

Googleはクリーンエネルギー购入により**Operational carbon emissions**は抑えていると主張しているが、**Scope 2排放**の問題は残ります。

**開発者にとって的意义:**

- **AI应用的arbon footprint**が企业的課題に
- 推論最优化の重要性——同じ 결과를より少ない电力で達成する技術が求められる
- **エッジAI**や**モデルを压缩する技術**への关注の高まり

---

## 参考リンク

- [Ars Technica: DeepSeek plans custom AI chips](https://arstechnica.com/ai/2026/07/facing-us-export-controls-chinas-deepseek-plans-to-make-its-own-chips/)
- [The Verge: Anthropic Fable 5 returns](https://www.theverge.com/ai-artificial-intelligence/958964/anthropic-claude-fable-5-is-back)
- [Ars Technica: Anthropic tracker controversy](https://arstechnica.com/tech-policy/2026/07/anthropic-outed-for-claude-tracker-that-secretly-monitored-chinese-users/)
- [Ars Technica: Brown University AI cheating scandal](https://arstechnica.com/ai/2026/07/we-cannot-choose-to-become-idiots-the-ai-cheating-scandal-roiling-brown-university/)
- [TechCrunch: Lovable valuation doubling](https://techcrunch.com/2026/07/08/lovable-reportedly-in-talks-to-double-its-valuation-to-13-2b/)
- [Ars Technica: Google energy consumption up 37%](https://arstechnica.com/ai/2026/07/googles-ai-buildout-drove-37-increase-in-electricity-use-in-2025/)

---

*本文の情報は2026年7月15日時点のものです。*
