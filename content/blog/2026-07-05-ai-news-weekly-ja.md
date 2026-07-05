# AI開発ニュースまとめ（2026年7月第1週）— NVIDIAと製薬のAI協業、macOSマルウェアの進化、生成AIのHollywoodatitis

2026年7月第1週は、**AI×創薬**の大型協業、**NVIDIA BioNeMo × Claude Science**の統合、macOSを狙う新型マルウェア**PamStealer**の報告など、技術・セキュリティ・倫理の側面から重要な一週間となった。開発者視点で主要トピックを整理する。

---

## 武田薬品 × Insilico Medicine — 6億ドル規模AI創薬協業

日本発のグローバル製薬会社**武田薬品**と香港拠点のAI創薬ベンチャーの**Insilico Medicine**が、AIを活用した初期創薬領域での戦略的提携を拡大した。

**協業主要内容：**
- 武田薬品はInsilicoの**Pharma.AIプラットフォーム**にアクセス権を付与。対象は創薬ターゲットの同定、分子設計、臨床試験予測にわたる
- InsilicoがAI駆動の創薬作業を主導し、武田が候補化合物の臨床開発を進展させる
- **契約一時金・短期マイルストーン含め約6000万米ドル**。前置臨床・臨床・商業・売上の全マイルストーン達成時、総額**約6億米ドル**規模になる可能性がある
- 武田は契約 통해選定された候補化合物の全世界での開発・製造・商業化権利を独占取得

Insilicoの創業者兼CEO **Alex Zhavoronkov**氏によれば、この取引による収益が両社の協調プログラムにおける初期研究の推進を支える。AIの得意領域であるターゲット同定と分子設計のスピードが、伝統的な創薬プロセスのボトルネックをどれだけ解消できるかが焦点となる。

**技術的ポイント：** InsilicoはGAN（敵対的生成ネットワーク）やTransformer系モデルを活用した分子生成で知られ、Pharma.AIプラットフォーム 통해実臨床データとの接続も行う。武田の巨大な臨床開発インフラとの組み合わせは、CRO（契約研究機関）業界への影響も検討が必要だ。

---

## NVIDIA BioNeMo × Anthropic Claude Science — 創薬AIの民主化

**Anthropic**は科学研究向けAIワークベンチ**Claude Science**のパブリックベータを発表し、**NVIDIA BioNeMo Agent Toolkit**とのネイティブ統合を明らかにした。

**BioNeMoとは：**
- NVIDIAが構築したGPUアクセラレーテッド（cuDNN/CUDA活用）のライフサイエンス向けフレームワーク
- トップ20グローバル製薬企業の18社がすでに本番環境にBioNeMoを導入済み
- ゲノム分析、プロテオーム、single-cell解析、ケモinformatics、臨床研究向けのモデルを包括

**統合のポイント：**
- 研究者が自然言語で研究タスクを指示すると、Claude Scienceが適切なBioNeMoツールを自律選択・実行
- 予測モデルの手動設定、ネットワークエンドポイント管理、複雑なソフト環境構築が不要に
- NVIDIA NIM（NVIDIA Inference Microservices）に含まれるモデル群がClaude Science環境に直接インポート

**開発者視点：** NVIDIA BioNeMo Agent Toolkitは"RAPIDS"や"CLIP"等技术とは別軸で、**科学特化のToolformer的アプローチ**を取る。Claude Codeがソフトウェア開発タスクを 자율実行するように、Claude Scienceは実験室プロトコル・計算プロトコルを理解する科学特化エージェントとして機能する。NVIDIA GPU環境を前提とするため、パラメータ量や推論コストの制御が必要だが、18社導入実績のあるプロダクションスタックとの連携は実用的だ。

---

## PamStealer — macOSを狙う新型インフォーマーwareの、技術的深度

Ars Technicaが報じた**PamStealer**は、macOS環境を狙う情報窃取型マルウェア（Infostealer）で、その**検出回避技術と認証迂回手法**が一線を画している。

**感染チェーン：**
1. ユーザーがクリップボードマネージャーなどを装った**.dmg（ディスクイメージ）**をダウンロード
2. ダブルクリックでAppleScriptがmacOS Script Editorで開く。悪意ある機能はファイル深处に隠蔽
3. ユーザーは「ダブルクリック後、**Command-R**を押す」ようプロンプトで指示される — これはAppleScript内部の悪意あるコードを即時実行させる
4. この手法は`com.apple.quarantine`属性のチェックも回避

**第一段階（ドロップヤー）：**
- JXA（JavaScript for Automation）を自己完結型で実行。外部の`curl`や`zsh`コマンドに頼らず、**Native Objective-C API**でペイロードを取得・ステージング
- Rustで書かれた第二段階バイナリをDownloadsフォルダにドロップ
- Finder.appやSoftware Update.appを装ったアプリバンドルを生成

**第二段階（ドロッパー）：**
- Rustで書かれたMach-Oファイル（Apple Silicon向け）
- バンドルされたSQLiteアプリ経由でデータを読み取る設計
- **PAM（Pluggable Authentication Module）APIを使ったローカル認証**が注目点。`dscl`、`security`、`osascript`等の外部プロセスを呼ばずパスワード検証するため、プロセスチェーン監視ツールに痕跡が残りにくい

**最終ペイロード：**
- パスワード入力後に「ファイルは破損しておりインストールできない」と表示し、感染に気づかせない配慮（！）が存在
- **ethereumアカウントへのアクセスコード**を含む
- 偽のMaccy.appにフルディスクアクセス権限を要求

**防御のポイント：** Command-R実行の強制、Script Editor経由のコード起動、Rust+Objective-C+JXAの多言語連携、PAMローカル認証という組み合わせは、従来のmacOSマルウェアとは異なる"DLL読み込み"や"プロセスチェーン"監視を無効化する設計だ。Jamfのレポートによれば、特にApple Silicon + Rustの組み合わせはSwift/Go/Objective-C主体の他のマルウェアと岔線する。

---

## Google広告 × AI — 「AIが書いた独立宣言」Commercialの波紋

TechCrunchが報じた通り、Googleがアメリカ独立記念日に合わせた**新しいテレビCM**を放映。その内容が「AI帮助下により書かれた**独立宣言**」というもので、テクノロジー業界と教育現場で波紋を広げている。

**背景：**
- Googleは2026年6月に複数のAI関連アップデート（AI Overviewsの拡張、Gemini 2.0”系列の商用展開など）を公開済み
- 同Commercialは、AIが創作活動に参加することの*"normal"*さを示すブランド戦略と解釈されている
- 一方、AI生成コンテンツの**透明性**や**ライティング能力への過信**を懸念する声も

**Midjourney × Hollywood — AI使用の詳細開示要求**

同じTechCrunchの記事で、**Midjourney**がHollywoodスタジオに対しAIツールの使用状況を詳細に開示するよう求める意向を表明したことが分かった。SAG-AFTRAのストライキ以降、AIと俳優・クリエイターの関係は業界最大の問題の一つであり、Midjourneyのこの動きは**プロンプトベースで画像を生成するツール**の立場からの誠実な対応と受け取られている。

---

## AIブラウザー攻撃の知見 — もう一つのArs Technicaレポート

Ars Technicaは6月末に**AIブラウザーに対する新しい攻撃手法**についても報じた。AI搭載ブラウザがユーザー入力と内部プロンプト境界を曖昧にする設計を狙い、**プロンプトインジェクション**や**コンテキスト毒的入力**によって、安全なはずの環境で悪意あるコードが実行される可能性を示している。

AIブラウザ自体が研究目的・日常利用で増加倾向にあり、**Agentic AI**окраиненийの文脈ではこの攻撃面の重要性が増している。開発者としては、AIエージェントに外部コマンド実行能力を与える際の**権限分離**と**入力サニタイズ**の設計原則の再確認が必要だ。

---

## まとめ

| トピック | 領域 | 重要度 |
|---------|------|--------|
| 武田×Insilico 6億ドルAI創薬 | AI×製薬 | ★★★★ |
| NVIDIA BioNeMo × Claude Science | AI агент × 創薬 | ★★★★ |
| PamStealer（macOSマルウェア） | セキュリティ | ★★★★ |
| Google AI独立宣言Commercial | AI倫理・ブランド | ★★★ |
| Midjourney Hollywood開示要求 | AI倫理 | ★★★ |
| AIブラウザー攻撃手法 | セキュリティ | ★★★ |

**来週の注目：** Claude Scienceのパブリックベータ拡大、NVIDIA BioNeMoの新しいNIMラインナップ、生成AIのHollywood対応動向、そしてAIブラウザセキュリティの研究動向を引き続き追踪する。

---

## 参考リンク

- [Takeda signs US$600M AI drug discovery deal with Insilico](https://www.artificialintelligence-news.com/news/takeda-insilico-ai-drug-discovery-deal/)
- [NVIDIA BioNeMo accelerates Anthropic Claude Science](https://www.artificialintelligence-news.com/news/nvidia-bionemo-accelerates-anthropic-claude-science/)
- [Newly discovered PamStealer isn't your typical macOS malware](https://arstechnica.com/security/2026/07/new-pamstealer-macos-malware-uses-clever-tradecraft-to-remain-stealthy/)
- [New attack provides one more reason why AI browsers are a bad idea](https://arstechnica.com/security/2026/06/ai-browsers-can-be-lulled-into-a-dream-world-where-guardrails-no-longer-apply/)
- [Midjourney wants Hollywood studios to reveal the details of their AI usage](https://techcrunch.com/2026/07/04/midjourney-wants-hollywood-studios-to-reveal-the-details-of-their-ai-usage/)
- [New Google commercial imagines a Declaration of Independence written with help from AI](https://techcrunch.com/2026/07/04/new-google-commercial-imagines-a-declaration-of-independence-written-with-help-from-ai/)
- [Alibaba reportedly bans employees from using Claude Code](https://techcrunch.com/2026/07/04/alibaba-reportedly-bans-employees-from-using-claude-code/)
- [Google AI Blog — June 2026 Updates](https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-june-2026/)

---

*（本文の情報は2026年7月5日時点のものです）*
