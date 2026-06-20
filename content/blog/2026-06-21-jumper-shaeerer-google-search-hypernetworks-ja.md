# AlphaFold開発者Jumper、DeepMindからAnthropicへ——AI人材争奪戦が新局面

2026年6月20日（米国時間）、AlphaFold разработчикのJohn Jumper氏がGoogle DeepMindからAnthropicに転じる意向を表明し、AI業界に衝撃が走った。Jumper氏の移動は、NVIDIAによるAI人材争奪戦、そして中国政府がNVIDIA毯みを巡り中国本土企業への出荷を禁止した動きと並んで、生成AI競争の激化を示す重要な指標となっている。

---

## AlphaFoldの父・John Jumper、Nobel受賞直後にDeepMindを去る

Jumper DeepMind、共同創設者Demis Hassabis両名は2024年にNobel化学賞をAlphaFoldの開発で受賞した。AlphaFoldは遺伝子の塩基配列から蛋白質の3D構造を高精度で予測できるAIモデルであり、生命科学に革命をもたらした。

TechCrunchの報道によると、Jumper DeepMindでGoogleのCoding Tools開発チームの中核メンバーを務めていたという。だが同チームは企業への導入に苦戦しており、Googleは収益化に難渋していたとされる。

 Character AI共同創設者のNoam Shazeer DeepMindでOpenAIに参加合わせて、Jumper DeepMindからAnthropicへの移動も、Shazeer OpenAI参加も、AI人材が旗艦的な基礎研究機関から競争相手へ流れる傾向を裏付けている。

---

## Google検索ボックス、25年ぶり大规模刷新

Googleは6月のI/O开发者Conferenceで、検索ボックスを25年前に初めて登场以来的最大規模刷新を発表した。传统的は単純なキーワード入力窓だったものが、マルチモーダルAI驱动的会話型インターフェースへと生まれ変わる。

### ebox Expanded + マルチモーダル入力

新しい検索ボックスは以下の特征を持つ：

- **動的拡張**：長い会話的クエリを收纳するため-boxが伸張
- **マルチモーダル対応**：テキストだけでなく画像、PDF、動画、Chromeタブのコンテンツを入力可能
- **AIクエリ提案システム**：単純なオートコンプリート超え、複雑なクエリの构成を支援

Google Search担当VPのLiz Reid氏に 따르면、「25年の历史を持つ検索ボックスにとって最大のアップグレード」になるという。新UIはAI Mode利用可能な全言語・国で即時ロールアウト中。

### AI OverviewsとAI Modeの統合

更为重要なはアーキテクチャ変更だ。GoogleはAI Overviews（検索結果上位のAI生成サマリー）とAI Mode（対話を主打つ検索体験）を统合し、1つのシームレスな検索フローにまとめる。

结果として、ユーザーは従来のリスト表示とAI对话型検索を单一インターフェースで自由に行き来できるようになる。Reid VPは「 대부분의ユーザーは従来のページかAI指向検索かを意識する必要がない」と语っている。

### 10億ユーザーが示すパラダイムシフト

刷新発表の背景には、急成长するAI検索利用がある：

- **AI Mode**：米国で2025年I/Oに登场后、1年でMAU1億人突破。クエリ数は四半期ごとに倍増
- **AI Overviews**：月間25億人以上のユーザーにリーチ
- **総クエリ数**：通的四半期で過去最高を更新

「ユーザーは短いキーワードを入力する時代から、AIと开かれた对话を続ける时代へ移行している」とする、Googleによる警鐘的な解读が示された。

---

## ハイパーネットワーク：ファイン-tuneもRAGも使わない「モデル生成」の世界经济

VentureBeatは6月19日、ファイン tuneとRAGの限界を根本的に解决する新アーキテクチャ「**Hypernetwork（超ネットワーク）**」レポートは公开した。

### 既存手法の2つの限界

企業のAIエージェントがProductionで失败する根本 이유는、エンドユーザーのビジネス知識がモデルに対してどこに位置するかの问题に戻ると论じている：

| 手法 | 问题点 |
|------|--------|
| **ファイン tune** | 1980年代から知られる「破滅的忘却」——新しいことを教えると忘れる。政策变化の度にコストと时间かかる再训练が必要 |
| **RAG（检索拡張生成）** | 検索ミスが確信犯的な回答一样に見え、增加するトークン数に伴い成本とレイテンシが上昇 |

两者の失败は韵律を合わせる。ファイン tuneしたモデルは昨四半期の政策を確信犯的に使っている可能性があり、RAGは長いプロンプトの途中で文脈を失う可能性がある。どちら输出も同样に確信に満ちて見えるため、チェックしないと判别できない——つまり人间がループから完全には離れられない。

### ハイパーネットワーク：一个のジェネレーターがタスク特化モデルを的需求時に生成

第三の経路は、研究から早期プロダクトに移行しつつある。モデルは一つを再训练する代わりに、**ジェネレーター（ハイパーネットワーク）**が実行時に企業のポリシーに基づいて小さくタスク特化のモデルを生成する。

- ハイパーネットワークのアイデアは2016年に命名
- Sakana AIの「Text-to-LoRA」（ICML 2025）は单一パスで平易な言語描述からモデルアダプタを生成
- SHINE（2026年）はハイパーネットワーク適応を「车なる新しいフロンティア」と评价

**パラメータ・アダプタ生成の本質的利点**：各タスクごとにhand-builtされたLoRAのライブラリ全体を、需求時にproduceできる単一ネットワークに收缩できる。灾难的な忘却を回避するためにチームが構築するper-task LoRAと、ハイパーネットワークが自動的に生成するそれは同じオブジェクトであり、「モデル动物园」はガバナンスの頭痛の種ではなく生成的outputになる。

### 小さいモデルが支撑する：10～30倍安い、エージェント向き

NVIDIA研究者の2025年論文では、エージェントワークフロンを埋める狭く反復的なタスクには、小さなモデルで十分이며、フロンティア一般モデルより10～30倍安価だと主张された。

Palo AltoのNace.AI（2026年5月、2150万ドルのシードラウンドを調達）はこの路線を商用化。规制の厳しいワークフロー——監査、コンプライアンス、リスク評価——に向かい、人間の conmem expertsが最终结果を検証し、エージェントが作業の90%_HANDLEする「90/10モデル」を贩壳する。

---

## 参考リンク

- [TechCrunch: Nobel laureate John Jumper is leaving DeepMind for rival Anthropic](https://techcrunch.com/2026/06/20/nobel-laureate-john-jumper-is-leaving-deepmind-for-rival-anthropic/)
- [VentureBeat: Google just redesigned the search box for the first time in 25 years](https://venturebeat.com/ai/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think/)
- [VentureBeat: Fine-tuning forgets. RAG leaks context. Hypernetworks build the model your agent needs on demand](https://venturebeat.com/ai/fine-tuning-forgets-rag-leaks-context-hypernetworks-build-the-model-your-agent-needs-on-demand/)

---

*本文の情報は2026年6月21日時点のものです。*
