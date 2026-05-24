# AI開発最新ニュース（2026年5月24日版）

NVIDIAがAI Labs向け新型CPU「Vera」を出荷開始、Google I/OではAIエージェント新機能が登場、SpotifyはUMGとAI音楽に関する歴史的協定を締結——今週のAI開発ニュースをまとめる。

---

## NVIDIA、Vera CPUの出荷を開始 —— Anthropic / OpenAI / SpaceXAIへ第一批を配送

NVIDIAは5月18日、同社初のAI向けCPUである**Vera**の第一批を、米国の主要AIラボ3社（Anthropic、OpenAI、SpaceXAI）へ手渡し配送した。NVIDIA VPのIan Buck氏が直接デリバリーを行い、Oracle Cloud Infrastructureへの配送も続けて実施された。

**技術的ポイント:**
- Veraはагентic AI推論向けに最適化されたASIC
- 従来のCPU 대비トークン生成コストを**10分の1**に削減
- エージェントサンドボックス処理が**50%高速化**
- 企業クエリ処理（SQL等）が**3倍高速化**

Jensen Huang CEOはDell Technologies Worldで「需要は放物線的に増加している（**Demand is going parabolic, utterly parabolic**）」と述べており、AI Factory向けインフラへの投資が加速している。

---

## Google I/O 2026: AIエージェントエコシステムの詳細

Googleは年次開発者会議I/Oでconsumer向けAIエージェントの新機能を多数発表。Gemini-poweredのリアルタイム翻訳・ナビゲーションOverlay機能を備えたAndroid XRグラスのプロトタイプもデモ公開された。

**主要発表:**
- 検索体験を革新する「AI Agents」機能
- Geminiによる40以上の新API公開
- Google Cloud × NVIDIAの共同開発者コミュニティが10万人を突破

ただしTechCrunchの分析ではconsumer向けAIエージェントのコンセプトが「最も混乱を招く機能」として評価されるなど、ユーザー獲得戦略には課題も残る。

---

## Spotify × Universal Music Group: AI生成音楽の商用利用で歴史的協定

SpotifyとUniversal Music Group（UMG）は5月21日、AI生成カバー曲・リ믹スを合法化する協定を締結した。**Premiere加入者**は自己喜欢のアーティスト楽曲をAIでリミックスし、収益は参加アーティストと分配される。

**技術的背景:**
- ElevenLabs製のオーディオブック作成ツールも同時にローンチ
- オーディオブック生成は**非独占契約**——著者は他のプラットフォームにも出版可能
- SpotifyはGoogleのNotebookLM対抗となる个人向けポッドキャスト生成アプリも発表

---

## オプティマイザ研究の最前線: Muonの欠陥とAuroraの解決策

AI研究コミュニティでoptimizer戦争が活発化。Tilde Researchの調査により、人気のMuon optimizerに大きなバグ（MLP層における**ニューロン死滅**問題）が発見された。

**問題点:**
- Muon使用時、step 500時点で**25%以上**のニューロンが無効化
- 学習率ウォームアップ中に永遠に回復しない状態が発生

**解決策としてAuroraが提案:**
- 「Leverage-aware optimizer for rectangular matrices」を開発
- 1.1Bパラメータートランスフォーマーで**MMLUスコアがMuon比+10点**改善
- コードはGitHubで公開済み（Apache 2.0）

---

## Import AI発: AI研究の最前線トピック

Jack Clark氏主宰のImport AIより、最近の注目トピックを解説。

**AI Stuxnet — 高精度ソフトウェアを狙う20年前のウイルス**
SentinelOneが「fast16.sys」と呼ぶ、長年存在していたراقب软件を分析。高精度な科学計算ソフトウェア（LS-DYNA、PKPM、MOHIDなど）を標的とし、計算結果に微小な誤差を発生させるという、極めてステルス性の高い攻撃手法が確認された。研究者らは「これは超知能が他の超知能の誕生を阻止する手法」と指摘している。

**LLMによるLLM訓練の自動化**
Prime Intellectの調査では、Codex（GPT 5.5）とClaude Code（Opus 4.7）がnanoGPT speedrunタスクで人間のパフォーマンスを上回った。特に**オプティマイザ検索とハイパーパラメータスイープ**に強く、約14,000 H200時間を消費して新記録を樹立。ただし「新曲のアイデアを生み出す」能力はまだ限定的であることも判明した。

---

## セキュリティと規制の動向

**Trump大統領、AIセキュリティ大統領令を延期**
Trump大統領はAIモデルの事前セキュリティレビューを義務付ける大統領令の署名を延期。「言語が障壁になりかねない」として修正を検討中。これに対しMicrosoft、Google、OpenAIらは既に自主的なセキュリティレビュープロセスを導入済みだが、法的拘束力を持つ規制の不在が懸念されている。

**ハッカーグループによるオープンソースコード汚染**
Ars Technicaの報道によると某ハッカー集團がオープンソースエコシステムに対して前所未有規模のコード汚染攻撃を実施。複数の広く利用されるライブラリに悪意のある依存関係が仕込まれる事例が発生している。

---

## 参考リンク

- [NVIDIA Vera CPU Delivery - NVIDIA Blog](https://blogs.nvidia.com/blog/vera-cpu-delivery/)
- [Dell Technologies World - NVIDIA CEO Quote](https://blogs.nvidia.com/blog/dell-technologies-agent-enterprise-ai/)
- [Google I/O AI Agents - TechCrunch](https://techcrunch.com/2026/05/21/google-is-pitching-an-ai-agent-ecosystem-to-consumers-who-may-not-buy-it/)
- [Spotify × UMG AI Music Deal - TechCrunch](https://techcrunch.com/2026/05/21/spotify-and-universal-music-strike-deal-allowing-fan-made-ai-covers-and-remixes/)
- [Aurora Optimizer - Tilde Research](https://blog.tilderesearch.com/blog/aurora)
- [fast16 Analysis - SentinelOne](https://www.sentinelone.com/labs/fast16-mystery-shadowbrokers-reference-reveals-high-precision-software-sabotage-5-years-before-stuxnet/)
- [Import AI Newsletter](https://importai.substack.com)

---

*（本文の情報は2026年5月24日時点のものです）*