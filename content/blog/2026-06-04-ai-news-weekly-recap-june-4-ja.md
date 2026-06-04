# AI開発ニュース 2026年6月4日号

Googleが検索ボックスを25年ぶりに大幅刷新、AIモードとAIオーバービューの統合を発表。NVIDIAはCVPRで物体把握・自律走行・エージェント訓練の3論文を発表、Alphabetは850億ドルの大型増資を完了など、生成AIと物理AIの両面で今週も大きな進展があった。

---

## Google、検索結果の根本から刷新：検索ボックスをAI-first Interfaceへ

Googleは6月3日（米国時間）、年次開発者会議I/O 2026において25年来の検索ボックスを大幅に刷新すると発表した。Liz Reid VP（Search責任者）は「検索ボックスが登場して25年以上を迎える中で最大のアップグレード」と表述している。

### AI ModeとAI Overviewsの統合

最大の特徴は**AI Mode**と**AI Overviews**の完全統合だ。これまでAI Modeは別途インターフェースに移動する必要があったが、新しい検索ボックスではシームレスにAI概要と従来の結果を同時に表示し、そのまま会話的なfollow-up質問へと 이어ることが可能になった。

### Gemini 3.5 Flashによる高速化

新検索体験の裏側では**Gemini 3.5 Flash**が駆動している。Googleによると、このモデルはGemini 3.1 Proよりほぼ全てのベンチマークで上回り、毎秒出力トークン速度は競合する frontier モデル比で**4倍高速**。Pichai CEOは「Artificial Analysisインデックスの右上前四角内に位置する」と説明し、品質と速度の両立を達成している。

### マルチモーダル入力と「生成的UI」

新しい検索ボックスはテキストだけでなく画像・PDF・動画・Chromeタブのコンテンツ的直接入力に対応。さらに「生成的UI」機能では、「ブラックホールが時空にどう影響するか」という質問に対して動的にインタラクティブなビジュアライゼーションをリアルタイム生成する。

### Information Agentの導入

AI Mode内に「情報エージェント」機能を導入。ユーザーが指定した条件（例：特定のセクターの市場変動）をウェブ上で24時間監視し、条件達成時に統合的なアップデートを通知する。Google AI ProおよびUltra契約者向けに今年夏から段階的に提供開始。

> *Alphabetは2026年に約1800〜1900億ドルの設備投資を見込んでおり、 quarterly 四半期のAI Modeクエリは倍増を続けている。AIオーバービューは25億以上の月間ユーザーに到達している。*

---

## NVIDIA Research × CVPR：物理AIの3つのインパクト

NVIDIAはComputer Vision and Pattern Recognition（CVPR） conferenceで3本の論文を発表。物体把握・自律走行・エージェント訓練すべてにわたる基盤研究の成果が一つの、展示会で同時に公開される珍しいケースとなった。

### GraspGen-X：任意のグリッパに対応する把持 Foundation Model

**GraspGen-X**は、「次に何を掴むか」を泛く泛用的に判断できる初のFoundation Modelだ。NVIDIAによると、従来のロボット把握AIは专用のグリッパ向けに训练されておうり、新しいグリッパ登场のたびに данных収集・微調整・検証を繰り返す必要があった。GraspGen-Xは20億のシミュレーション把握データを基に学習することで、 любой グリッパ geometry を与えられれば新規オブジェクトでも把持ポーズ提案を出力できる。

CUDA高速化 motion planning libraryの**curoboV2**と組み合わせることで、見知らぬ環境でも把持ポーズを達成できる。実装にはIsaac Manipulatorを使用。

### LCDrive：潜在空間で考える高速自律走行

テキストベースのChain-of-Thought推論は高品質だが、车上ハードウェアで動作させるにはトークン生成時間がボトルネックになる。**LCDrive**はこの問題に対し、言葉を圧縮した潜在表現（latent representations）で Reasoning を代替。世界の次の状態を予測し、その予測を使って次の行動を洗練させる Architecture で、テキストベースと同等の軌道品質を消費トークン 約半分で達成した。

NVIDIA Alpamayo上で構築され、既存の走行データから導出された supervision で訓練されている。

### NitroGen：ゲーム世界を使ったEmbodied Agent訓練

**NitroGen**は、NVIDIA Isaac GR00T（Huinoid robot foundation model） Architecture をベースにしたEmbodied Agent用Foundation Model。ビデオゲームの構造化・多様化された環境を訓練場として活用し、1000タイトル以上・4万時間以上のインタラクションで訓練された。

結果は泛用の行動能力——戦闘、ナビゲーション、探索——を獲得。データ不足環境（新しい環境を少数例でしか見ていない場合）では従来手法比で最大**52%向上**を達成した。GitHub・Hugging Faceでオープンソース公開。

---

## Alphabet、850億ドルの大型増資を完了——AI基础设施への戦略的赌け

AlphabetはGoogleのAIビジネス向けに**850億ドル**の的大型増資を実施し、过去最高規模の資金調達を完了した。これは前年の設備投資（約310億ドル）の約6倍に相当する。

この増資はGoogleのAI-first戦略、特にGeminiシリーズ、Isaac Agent Payments Protocol、Google Cloud Titan GPUクラスタへの投資を支えるためのもの。市場では「生成AIへの投資強度が一层明確になった」（Bloomberg Analytics）と評されている。

---

## AI業界指導者たちが 生物兵器防范のための连署状を米国議会に提出

AnthropicのDario Amodei、OpenAIのSam Altman、MicrosoftのMustafa Suleymanらが、AI技術用于生物兵器开发防范のための连署状を米国Congressに提出した。

连署者たちは合成DNA・RNA（オンラインで注文でき実験室で組立可能な遺伝素材）の購入に対する筛选义务付けをCongressに求めている。当局者らは「現在のbiosecurity gapが世界的な pandemic を引き走る可能性がある」と警告している。Googleも连署者に名を连ねている。

---

## Amazon、倉庫ロボットProteusの言語驱动インタフェースを発表

Amazonは完全自動倉庫ロボット**Proteus**の新型を発表。従来のコードベースインタフェースに代わり、AI驱动的言語インタフェースを採用した。

これにより、ヒト従業員は自然言語でProteusに作业指示を出すことが可能になる。Amazonは自动化への赌けを一层強化する構えで仓库員の替代を進める方針。

---

## Anthropic、Coworkを発表——Claudeがフォルダ内でファイルを读写

AnthropicはmacOSデスクトップアプリケーション向けに新機能**Cowork**のリサーチプレビューを開始した。Claude Max契約者（〜月額200ドル）が利用可能。

ユーザーはローカルマシンの特定フォルダへのアクセスをClaudeに許可する。Claudeはその sandbox 内でファイルの읽기・編集・作成が可能——受信トレイの整理、レシート 스크린샷からの経費報告生成、散らかったフォルダの自動整理など。

### 約10日半で構築された急成長機能

AnthropicエンジニアのFelix Rieseberg氏によれば、チームは**约10日半でCoworkを構築**。さらに、社内の观察では「Claude Code書いたすべてのClaude Coworkでは」という指摘があり、AIが自らの產品开发を加速するrecursive loopが Already 実现していることが示唆されている。

安全上の注意として、Anthropicは「プロンプトインジェクション攻撃の可能性」および「Claudeが-destructive actions（ローカルファイルの削除など）を実行するリスク」についてユーザーに警告している。

---

## Lovable、Google Cloudと5倍拡張の複数年契約を締結

AIアプリケーションビルダー向けのプラットフォームである**Lovable**が、Google Cloudとの複数年契約を结了。契約内容はLovableのGoogle Cloud利用量を**5倍擴大**し、Anthropic Claudeへのアクセスを扩展することも含む。

---

## 参考リンク

- [Google I/O 2026 検索ボックス刷新](https://blog.google/products-and-platforms/products/search/search-io-2026/)
- [Gemini 3.5 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/)
- [NVIDIA Research GraspGen-X / LCDrive / NitroGen](https://blogs.nvidia.com/blog/cvpr-research-grasping-driving-agent-training/)
- [VentureBeat: Google search box redesign](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)
- [The Verge: AI bioweapons open letter](https://www.theverge.com/ai-artificial-intelligence/942956/ai-biological-weapons-open-letter-congress)
- [Anthropic Cowork announcement](https://claude.com/blog/cowork-research-preview)
- [TechCrunch: Alphabet $85B raise](https://techcrunch.com/2026/06/03/alphabets-record-breaking-85b-raise-for-googles-ai-business-is-a-helluva-good-signal/)

---

*（本文の情報は2026年6月4日時点のものです）*