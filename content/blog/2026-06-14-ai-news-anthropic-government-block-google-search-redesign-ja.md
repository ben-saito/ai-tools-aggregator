# AI開発ニュース：Anthropic模型への政府介入、Google検索ボックスの25年ぶり刷新、Claude Cowork登場

2026年6月上旬から中旬にかけて、AI業界は政府規制の拡大、大型モデルの公開停止、そして検索体験の根本的な再設計など、重要な転換点を迎えている。本稿では、最近の注目ニュースを整理する。

---

## Anthropic、政府命令によりFable 5・Mythos 5へのアクセスを遮断

6月13日（米国時間）、Anthropicは米国政府からの命令を受け、**Fable 5**および**Mythos 5**の全モデルへのアクセスを遮断した。命令の理由は「国家安全保障上の懸念」だが、政府からは具体的な詳細は提供されていないという。

Anthropicは声明において、政府が口頭のみで脆弱性の証拠を示したことを批判し、「狭いジャイルブレイクの可能性が、数億人に展開された商用モデルのリコール理由になるべきではない」と主張した。同社はblog投稿を行い、政府の判断に同意しない立場を明確にしている。

この一件は、AIモデルを提供する企業にとって重大的な先例となる可能性がある。安全性を理由としたモデルの公開停止が、政府の指示で強制されるケースが初めての実例となったからだ。開発者にとってのリスクは、依存している基盤モデルが突然利用不可になる可能性であり、**プロンプトインジェクション攻撃**への耐性やモデルの安全評価が今後さらに重要になることは間違いない。

---

## Google、25年ぶり検索ボックスの大規模刷新を発表

GoogleはI/O开发者大会上 announced了一项重大改革：自1998年のサービス開始以来、初めて**検索ボックス本身**を刷新すると発表した。新設計では、以下の変更点が導入される。

- **動的に拡大する入力フィールド**：複雑な質問を想定し、長い入力にも耐える設計に
- **マルチモーダル入力**：テキストだけでなく、画像・PDF・動画・Chromeタブのドロップにも対応
- **AI OverviewsとAI Modeの統合**：従来は別のインターフェースだったAI搭載検索機能をシームレスに統合
- **Gemini 3.5 Flash採用**：処理速度4倍向上ながらベンチマーク性能は従来 frontierモデル超え

さらに「生成UI」という新概念も発表。ユーザーが質問すると、リアルタイムでインタラクティブなwidgetやミニアプリを動的に生成。例如、「ブラックホーが時空にどう影響するか」と問いかければ、インタラクティブな視覚化资料が即座に表示される。

Google CEO Sundar Pichai氏によると、同社のsurfaceは現在月間で**3.2 quadrillionトークン**を処理しており、これは1年前から7倍に成長している。2026年の設備投資は年間180〜190億ドルを見込んでおり、AIインフラへの巨大的な投資を継続する方針だ。

---

## Anthropic、Claude Coworkを発表——桌面AI agentがフォルダにアクセスして実務処理

Anthropicは**Claude Cowork**の调查研究プレビューを開始じた。Claude Codeの开发者向けagent機能に着想を得、一般ユーザー向けに再設計したこのツールは、MacOS桌面应用を通じて動作し、指定したフォルダ内のファイル読み取り・編集・作成を行う。

特徴は以下の通り：

- **フォルダベースのagent architecture**：ユーザーは作業フォルダを明示的に指定し、Claudeがそこに存在するファイルに対して操作を行う
- **Agentic loop采用**：单にテキスト応答を生成するのではなくPlansを作成し、并行してstepsを実行、自己検収を行いながら、必要に応じてclarificationを求める
- **ブラウザ自动化との統合**：Claude in Chrome расширениеと組み合わせ、Web上の操作を実行可能
- **スキル（Skills）フレームワーク活用**：文書の他にプレゼンテーションや他のファイル生成任务に特化

面白い点是、Coworkの開発チームがFelix Rieseberg氏により「この機能は**约10日間で構築された**」ことが明かされた。さらに「Claude CodeがClaude Cowork本身的开发に大きな役割を果たした可能性が高い」と推测されており、AIがAI自身を構築するという**recursive improvement loop**の実例として业界广泛关注を受けている。

现在はClaude Max订阅者（$100〜$200/月）専用のmacOS应用として提供されており、Windows版およびクロスデバイス同期の計画も明らかにされている。

---

## OpenAI、各州司法長官による調査を受ける

TechCrunchによると、OpenAIは複数の州司法長官から調査を受けている。調査範囲は**広告ポリシーから健康データ 취급**まで広範にわたり、具体的な対象州や調査詳細はまだ明らかになっていない。

AI企業に対する規制強化の流れは続いている。先にAnthropicのモデルへのアクセス遮断があったばかりであり、政府・規制機関がAI企业提供者に及ぼす压力がさらに強まっていることを示唆している。

---

## Apple、iOSに初の本格的AI写真編集機能を導入

AppleはiOS 27で初の**本格的AI写真編集機能**を実装した。iPhoneの写真編集において、Geminiなどの競合製品と比較すると控えめだが、Nativeの統合された編集機能が使えるようになった。

ユーザーは以下の操作を行える：

- **智能切り抜き・拡張**
- **オブジェクト移除・背景編集**
- **AIを活用した構図調整**

一眼カメラを持たない大多数のユーザーにとって、日常的な写真編集がAIの力で格段に向上することになる。Appleの強みはハードウェア・ソフトウェアの垂直統合であり、エッジデバイスでのAI推論加速が期待される。

---

## 参考リンク

- [Amazon CEO reportedly raised Anthropic model concerns before government crackdown - TechCrunch](https://techcrunch.com/2026/06/13/amazon-ceo-reportedly-raised-anthropic-model-concerns-before-government-crackdown/)
- [Anthropic cuts off Fable 5 and Mythos 5 access following government order - The Verge](https://www.theverge.com/ai-artificial-intelligence/949553/anthropic-fable-5-mythos-5-government-national-security)
- [Google just redesigned the search box for the first time in 25 years - VentureBeat](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)
- [Anthropic's Cowork brings a desktop AI agent to folder-based workflows - VentureBeat](https://venturebeat.com/ai/anthropics-cowork-brings-a-desktop-ai-agent-to-folder-based-workflows)
- [OpenAI faces investigation from state attorneys general - TechCrunch](https://techcrunch.com/2026/06/13/openai-faces-investigation-from-state-attorneys-general/)
- [Apple's new AI photo editing tools mostly work, for better and worse - The Verge](https://www.theverge.com/tech/949360/apple-ai-photo-edit-reframe-extend-clean-up-hands-on)

---

*本文の情報は2026年6月14日時点のものです。*
