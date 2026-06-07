# AI開発ニュース 2026年6月7日版：OpenAI Lockdown Mode/Anthropicのコード自動生成率80%/Gemma 4 12B

2026年6月上旬、AI業界はセキュリティと自律性を巡る重要な転換点を迎えている。OpenAIがプロンプトインジェクション攻撃対策の「Lockdown Mode」を発表する一方、AnthropicはClaudeが本番コードの80%以上を自動生成する時代到来を報告、Googleはローカル環境で動作する軽量マルチモーダルモデル「Gemma 4 12B」を公開した。本稿ではこれらのニュースを、開発者視点で梳理する。

---

## OpenAI、「Lockdown Mode」発表：プロンプトインジェクション対策の意義と限界

OpenAIは2026年6月6日、**Lockdown Mode**と呼ぶ新機能を公開した。これは、Webページに隠された悪意あるチャットボット命令（プロンプトインジェクション攻撃）から機密データを保護するためのものだ。

### 無効化される機能

Lockdown Modeを有効にすると、以下の機能が制限される。

- **ライブWebブラウジング**（キャッシュコンテンツのみアクセス可能）
- **Webからの画像取得・表示**（画像生成は継続可能）
- **ディープリサーチ**
- **エージェントモード**

### 設計思想と残存リスク

OpenAIは公式ドキュメントで「**Lockdown Modeは全員に向けたものではない**」と明言している。機密データを扱う組織や個人向けであり、プロンプトインジェクションによるデータ漏洩リスクの低減を目的とする。

ただし、同社は残余リスクも認めている。ロックダウン状態でも「キャッシュされたWebコンテンツやアップロードされたファイルに含まれるプロンプトインジェクションの影響は完全には排除できない」としており、このモードが完全な防御ではないことを正直に告白している。

### 開発者への影響

Enterprise用途では、**RAG（Retrieval-Augmented Generation）パイプラインの評価項目にプロンプトインジェクション耐性を追加する**必要性が再認識された。Lockdown Modeは対症療法であり、本質的な防御には入力サニタイズと出力フィルタリングの設計が不可欠だ。

---

## Anthropic、Claudeが本番コードの80%を自動生成：企業開発のパラダイムシフト

Anthropicは2026年6月4日、**Claudeが本番環境にマージされたコードの80%以上を生成**しているとのレポートを公开发表した。2021〜2025年のベースライン 대비、エンジニア1人あたりの四半期あたりのコード出荷量が**8倍**に増加しているという。

### AIコーディングの進化フェーズ

Anthropicのブログ投稿では、企業がAIコーディングを取り込むための段階的ロードマップが示されている。

| フェーズ | 期間 | 特徴 |
|---------|------|------|
| マニュアルライティング | 2021〜2023年 | エンジニアがローカルエディタで自力でコードを書く |
| チャットボットアシスタント | 2023〜2025年 | 早期モデルでスニペット生成、コピペで利用 |
| コーディングエージェント | 2025〜2026年 | エージェントが自律的にファイル作成・編集 |
| **自律エージェント（現在）** | Present | エージェントが独立してコード実行、デバッグ、specialized sub-agentsへの委譲 |

### SWE-benchの飽和が示すもの

ソフトウェアエンジニアリング評価フレームワークの**SWE-bench**が2年間で饱和したことは、外部ベンチマークではAIエージェントの限界がすでに見えつつあることを示唆する。Anthropicがこれを「長い間待ち望まれた**再帰的自己改善（recursive self-improvement）**の兆候」と表現している点は注目に値する。

### 企業への教訓

Anthropic曰く「他のエンタープライズにとって、この80%という数字は新しい競争基準」。AI実験室外の企業でも、エンドツーエンドの業務プロセス再設計とエージェント活用の戦略的投資が不可欠になりつつある。

---

## Google、Gemma 4 12Bリリース：エンコーダー不要のローカルマルチモーダル

Googleは2026年6月3日、**Gemma 4 12B**（11.95 billionパラメータ）を公开发表した。Apache 2.0ライセンスで無料ダウンロード・運用でき、**標準的な16GB VRAMのラップトップでローカル動作**することが最大の特徴だ。

### エンコーダーフリーの「アーキテクチャ」

従来のマルチモーダルシステムでは、音声波形や画像をコアLLMが処理可能な形式に変換する 별도의エンコーダーを使用していた。Gemma 4 12Bはこれを廃絶し、**軽量線形層を通じて視覚パッチと生音声波形を直接LLMの埋め込み空間に射影**する。

- **ビジョンエンコーダー**：3.5Mパラメータのモジュールで1つの行列乗算のみを実行
- **オーディオエンコーダー**：完全廃絶

これにより、推論レイテンシとメモリ消費の両方が削減され、16GB VRAMでの動作を実現する。

### 主要仕様

- **コンテキストウィンドウ**：256Kトークン
- **ネイティブエージェントツール使用能力**
- **明示的なステップバイステップ推論モード**
- Hugging Face・Kaggle・Google AI Edge Galleryで配信中

### 企業意義

モバイルエッジモデルとデータセンターインフラの間の沟を埋めることで、**機内やオフライン環境でのセキュアなAI活用**や、**エッジでの低コスト推論**が現実的な選択肢となった。

---

## WWDC 2026：SiriのGemini統合とAIエージェントApp Store

AppleのWWDC 2026が2026年6月6日（米国時間）に开幕し、Siriの大幅刷新が発表された。最も注目すべきは以下の2点だ。

### Siri × Google Gemini

刷新されたSiriは**GoogleのGeminiテクノロジーを活用**し、以下の能力が強化される。

- 文脈を理解した会話型インターフェース
- マルチステップタスクの処理
- アプリ間跨ぎの自然な相互作用

### スタンドアロンSiriアプリ

Bloombergのリークによれば、AppleはChatGPT・Claude・Geminiと競合する**スタンドアロンSiriアプリ**の導入を計画している。これは従来の「デバイス組み込みアシスタント」から脱却し、プロアクティブなAIエージェントとしての位置づけを目指すものだ。

### AIエージェントApp Store統合

The Informationによると、AppleはApp Storeに**AIエージェント統合**を導入予定だという。ユーザーはエージェントに以下のようなタスクを委譲できるようになる。

- レストラン予約
- 日常タスク管理
- ドキュメント編集
- スマートホーム制御

### カメラ/フォトアプリの「Visual Intelligence」

新機能として、カメラとフォトアプリに**「Visual Intelligence」セクション**が追加される見込みだ。

---

## Mira Murati率いるThinking Machines Lab：「インタラクションモデル」への布石

OpenAI元CTOのMira Muratiが、約18ヶ月ぶりの大型メディア出演を行った。Bloombergとのインタビューで、自身がCEOを務める**Thinking Machines Lab**の新たな研究方向が明らかになった。

### 「インタラクションモデル」とは

Muratiがプレビューしたのは**「インタラクションモデル」**と呼ぶ新しいAIインターフェースの形。現在の的主流である「プロンプト→レスポンス」の一问一答形式とは異なり、**音声・テキスト・動画を200ミリ秒間隔で連続処理**できる設計だ。

- 人間のコミュニケーションの「テクスチャ」（割り込み、途中修正、思考停止）を即時反映
- 事実上リアルタイムに近い対話体験

### Thinking Machinesの現状

同社は18ヶ月간活動を抑制し、資本調達と採用、研究開発に集中してきた。製品としてはオープンソースAIモデルのファインチューニング用API**「Tinker」**を出荷済み。OpenAI・Anthropic・xAIとの競争激化の中で、ようやく市場に向けた情報発信を再開した段階だ。

---

## Sriram Krishnan、米政府AIアドバイザーを退任：政策成果と今後の影響

元Microsoft/Twitter/Facebook/Snap幹部であり、Andreessen Horowitzのパートナーでもあった**Sriram Krishnan**が、2026年6月末限りでWhite House AI senior policy advisorを退任することが明らかになった。

### 主な政策成果

Krishnan自己在Xに投稿した退任メッセージでは、以下の成果が提及された。

- **AI Action Plan**：データセンター建設を規制より優先
- 州レベルのAI規制に反する大統領令
- 大手AI企業への政府エンティティ株取得の可能性（含み）

### 退任後の予定

Krishnanは退任後、「米国と同盟国向けの課題に取り組む機関」を設立する計画を明かしている。TrumpのAI政策に影響力を保ち続けるための位置づけだ。

---

## Microsoft AI、「MAI」ファミリーを発表：OpenAIとの契約解放後の戦略転換

Microsoft AI CEOのMustafa SuleymanはMicrosoft Build 2026において、**OpenAIとの契約解除から6ヶ月後**に初めてMicrosoftが「**superintelligence**」を正式に追求する権限を得たことを明かした。

### MAIファミリー：7モデルの内製AI体系

同日、Microsoftは**7つの独自AIモデルファミリー「MAI」**を一括発表、表uresは以下の通り。

| モデル | 用途 |
|--------|------|
| MAI-Thinking-1（35B） | ンテンシング、reasoning |
| MAI-Code | コード生成 |
| MAI-Image | 画像生成 |
| MAI-Transcribe | 文字起こし |
| MAI-Voice | 音声合成 |

### データ戦略の明示

SuleymanはBlogで「**他社モデルを蒸留しない。ライセンス済みデータでゼロから訓練する**」と強調した。これは業界で一般的な他社モデル出力を用いた cheaper trainingの実施に対し、直接的に差別化するものだ。

---

## 参考リンク

- [OpenAI unveils Lockdown Mode to protect sensitive data from prompt injection attacks - TechCrunch](https://techcrunch.com/2026/06/06/openai-unveils-lockdown-mode-to-protect-sensitive-data-from-prompt-injection-attacks/)
- [What to expect from WWDC 2026: Siri's highly anticipated revamp and Apple Intelligence updates - TechCrunch](https://techcrunch.com/2026/06/06/what-to-expect-from-wwdc-2026-siris-highly-anticipated-revamp-and-apple-intelligence-updates/)
- [Mira Murati steps back into the spotlight, carefully - TechCrunch](https://techcrunch.com/2026/06/04/mira-murati-steps-back-into-the-spotlight-carefully/)
- [Sriram Krishnan is leaving his role as White House AI advisor - TechCrunch](https://techcrunch.com/2026/06/06/sriram-krishnan-is-leaving-his-role-as-white-house-ai-advisor/)
- [Google's new open source Gemma 4 12B analyzes audio, video — and runs entirely locally on a typical 16GB enterprise laptop - VentureBeat](https://venturebeat.com/technology/googles-new-open-source-gemma-4-12b-analyzes-audio-video-and-runs-entirely-locally-on-a-typical-16gb-enterprise-laptop)
- [Anthropic says 80% of its new production code is now authored by Claude — how your enterprise can keep up - VentureBeat](https://venturebeat.com/technology/anthropic-says-80-of-its-new-production-code-is-now-authored-by-claude-how-your-enterprise-can-keep-up)
- [Microsoft AI chief says company was "set free" from OpenAI to pursue superintelligence - VentureBeat](https://venturebeat.com/technology/microsoft-ai-chief-says-company-was-set-free-from-openai-to-pursue-superintelligence)

---

*（本文の情報は2026年6月7日時点のものです）*
