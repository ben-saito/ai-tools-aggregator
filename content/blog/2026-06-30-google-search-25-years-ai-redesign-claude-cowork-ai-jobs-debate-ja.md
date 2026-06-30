# Google検索ボックス刷新：25年ぶりの大改革とAIネイティブへの舵切り

2026年6月30日 -- Googleは検索ボックスの大規模改革を完了し、25年間のUIパラダイムを刷新した。AI OverviewsとAI Modeの統合、Gemini 3.5 Flashによる高速推論、「generative UI」によるリアルタイムウィジェット生成など、検索体験の本質的な変革が完了に近づいている。

---

## 検索ボックス刷新の背景：25年の慣習からの脱却

Googleは6月30日、25年間ほぼ変更されなかった検索ボックスの刷新を完了した。Liz Reid VP（Search責任者）は「検索ボックス初登場以来最大のアップグレード」と表述。この刷新はGoogle I/O 2026で発表された一連のAI機能の中核をなす。

**刷新の核心的要素：**

- **動的に-expanding入力**: 長い会話的クエリを自然に受付
- **マルチモーダル入力**: 画像、PDF、動画を直接アップロード可能
- **クエリサジェスチョン**: 単純なオートコンプリート超え，自然言語での質問構築支援
- **AI Overviews + AI Mode統合**: 2つの体験がシームレス融合

旧来の「2〜3語キーワード」入力から、「詳細な会話的質問」へのパラダイムシフトが完了に近づいている。

---

## AI Mode統計：10億ユーザー、クエリ2倍的四半期成長

Googleが公開したAI Modeの運用統計は以下の通り：

- **月間アクティブユーザー**: 10億人突破（US展開から1年）
- **クエリ成長率**: 四半期ごとに2倍増
- **AI Overviews**: 25億人の月間ユーザーに到達
- **月間処理トークン数**: 3.2クワタ（四半期7倍増）

Sundar Pichai CEOは「AI機能は検索利用をCannibalizeしていない。逆に加算的に作用している」と主張し、「検索は世界上最も利用されるAI製品」と表述した。

---

## Gemini 3.5 Flash：高速推論で规模化検索を実現

刷新された検索体験の提供基盤は **Gemini 3.5 Flash** 。Googleは以下を主張：

- Gemini 3.1 Pro比で全ベンチマーク改善
- 出力トークン/秒4倍高速化（他社フロントティアモデル比）
- Artificial Analysis指数で「右上一角」を実現

Pichaiは「速度は検索にとって死活的に重要。Cannibalize的なAI体験がLegacy感じを与えれば受け入れられない」と語り、Gemini 3.5 Flashによる「フロントティア品質×低レイテンシ」の両立を強調した。

---

## Anthropic Claude Cowork：フォルダベース・デスクトップAIエージェント

AnthropicはmacOS向けClaudeデスクトップアプリに **Cowork** 機能を追加した。Claude Max（$100-$200/月）購読者向けリサーチプレビューとして提供開始。

**アーキテクチャ:**

- ユーザーが指定したフォルダにClaudeがアクセス
- ファイル読取、編集、作成を実行
- Agentic loop: 計画→並列実行→自己検収→不明点は確認

開発者は「バカンス計画、スライド作成、メール整理、契約書取消し、冠婚葬祭写真復元」など多様な非コーディングタスクに使用されている事実を確認。同社は開発者ツールで「実際のところ、何でもさせている」と観察していた。

**10日半で構築された製品:** Anthropic従業員がLivestreamで、Coworkが「約10日半で構築された」と発表。Claude Code自体がCowork構築に大きな役割を果たした可能性が指摘されている。

**セキュリティ上の考慮事項:** 同社はプロンプトインジェクション攻撃リスクについて警告。「Sophisticated defensesを構築したが、agent safetyは業界的に進行中の開発領域」と認めた。

---

## TechCrunch: AI採用企業実態 -- AI導入企業で雇用増

TechCrunchが報じたRevelio Labsレポートによると：

- **高強度AI導入企業**: 従業員数+10.2%増
- その内の**エントリーレベル雇用**: +12%増
- 「AIがジュニア仕事をCannibalize」という主張を反証

「AI adopters hire more」という逆説的結論。実際のデータが入社口が増加させている可能性が示唆された。

---

## Import AI 463: 自己改善ロボット、1万台GPUクラスタ、法の可視化

Jack ClarkのImport AIでは以下が注目トピックとして掲載された：

**NVIDIA ENPIRE**: 研究者は「物理ロボットにAI agent的自己改善ループを構築」。4つのコアモジュール（Environment、Policy Improvement、Rollout、Evolution）で構成され、RTX 5090搭載の二腕ロボットで運用。「PushT、ピン配置、GPU挿入」などの課題で99%成功率和達成。

**Tencent ARGUS**: 1万台GPU規模訓練運行のための低オーバーヘッド・細粒度tracingシステム。6ヶ月以上本番稼働で確認され、compute stragglers、通信リンク劣化、JITコンパイルブロックなどを診断。

**LOCUS**: UC Berkeleyが米国地方条例の包括的コーパス（220万行）を公开发信。地方自治体の条例がAIからアクセス可能になり、县単位の法律データ基盤として整備された。

---

## 参考リンク

- [Google Search redesign announcement (VentureBeat)](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)
- [Claude Cowork announcement](https://claude.com/blog/cowork-research-preview)
- [TechCrunch AI jobs report](https://techcrunch.com/2026/06/29/the-ai-jobs-debate-just-got-messier/)
- [Import AI 463](https://jack-clark.net/2026/06/29/import-ai-463-self-improving-robots-a-10k-chinese-gpu-cluster-and-an-elegiac-essay-for-the-human-era/)
- [ENPIRE research (NVIDIA)](https://research.nvidia.com/labs/gear/enpire/)

---

*（本文の情報は2026年6月30日時点のものです）*
