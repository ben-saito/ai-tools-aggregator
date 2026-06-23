# AI開発ニュース週間まとめ（2026年6月第4週）

2026年6月の第4週、AI業界ではGoogle DeepMindの大型モデル発表、Midjourneyの異例の医療分野参入、そしてAI政治活動への巨額資金流入など、多様な話題が飛び込んだ。本稿では今週の注目ニュースを分野別に整理する。

---

## Google DeepMind：Gemini 3.5 / DiffusionGemma / Gemma 4など多数発表

Google DeepMindのブログでは、複数の新研究成果が一気に公開された。注目株をまとめる。

### Gemini 3.5 —  Frontier Intelligence with Action

Gemini 3.5は、**推論と行動の両方をネイティブに統合した次世代モデル**と位置づけられている。Google DeepMindの発表によれば、パフォーマンスにおいて現在の最高性能モデルに匹敵し、さらにツール使用やエージェントとしての活用を前提とした設計となっている。具体的なアーキテクチャ詳細はまだ公開されていないが、`function calling` や `tool use` に関するプロンプト対応が強化されていると推測される。

### DiffusionGemma — Diffusion Modelによる4倍速テキスト生成

従来の **Autoregressive（自己回帰）モデル** とは異なり、Diffusionベースのテキスト生成モデル **DiffusionGemma** が発表された。Google DeepMindによると、同等の出力品質を維持しながら **推論速度を4倍高速化** できたという。LLMの推論コスト削減はリアルタイムアプリケーションにおいて重要なテーマであり、Deno DeployやCloudflare Workersなどのエッジ環境での展開も視野に入る。

### Gemma 4 12B — Encoder-Free Multimodal Model

**Gemma 4 12B** は multimodality（マルチモダリティ）を一新した小さなモデルとして話題を集めている。最大の特徴は **encoder-free（エンコーダー不要）なマルチモーダル設計** である。通常、テキスト+画像のようなマルチモーダルモデルでは、画像を処理する個別のVision Encoderが必要だが、Gemma 4ではその必要がない。この設計変更により、モデルサイズがコンパクト化し、モバイルやエッジデバイスへの搭載が容易になる。

### Co-Scientist — 研究加速のためのMulti-Agent AI

Google DeepMindは **Co-Scientist** と呼ばれるマルチエージェント型研究アシスタントも公開した。複数のAIエージェントが協調して科学的仮説の生成・検証を行い、研究者の論文調査や実験設計を支援するフレームワークである。AlphaFoldが生物学の構造予測を変えたように、Co-Scientistは研究プロセスの自動化をさらに進める可能性がある。

---

## Midjourney、医療画像分野へ異例な参入 — 専門家から批判の声

画像生成AIで知られる **Midjourney** が先週、予想外の発表を行った。同社はAI超音波スキャナーへの参入を宣言。患者を水槽に浸漬し、「MRIのような力を持つが、スパ訪問のようにカジュアル」（原文: "something as powerful as MRI yet as casual as a trip to the spa"）な画像を生成するという内容だ。

The Vergeのレポート指出す通り、この計画には**科学的根拠が欠けている**。医療機器の承認にはFDA（米国食品医药品管理局）や各国の規制当局による臨床評価が必要だが、Midjourneyの声明には具体的なエビデンスがなかった。画像生成で蓄積した技術が医療診断にそのまま適用できるわけではない——これはAI業界における**過度な期待（hype）**の典型例として警戒が必要だ。

この一件は、AI企業が多様な事業領域へ拡大する際の実証責任の重要性、そして医療分野におけるAI規制のあり方を再考させる機会となっている。

---

## AI Super PACs：地方選挙に2700万ドルの政治資金流入

The Vergeの報道によると、**企業AI業界のSuper PAC（超级政治行动委员会）** がニューヨーク第12選挙区の地方選挙に **2700万 달러（約40億円）** を投じたことが分かった。これはAI企業にとってWashington D.C.の政策形成への影響力を示す象徴的な事例である。

AI業界は規制、環境、人権と言った多方面で政策的課題に直面している。巨大な政治資金が地方選挙に流入する現象は、AI企業と政治の距離がいかに近付いているかを示しており、開発者コミュニティ的にも**AIガバナンスの今後の行方**值得关注である。

---

## AMD、消費者向けCPUのメモリ暗号化機能を復帰させる

Ars Technicaの報道によれば、AMDは消費者向けRyzen CPUから**密かに削除されていたTSME（Transparent Secure Memory Encryption）** を、ユーザーの反発を受けて再び導入することを決めた。

TSMEは物理攻撃（コールドブート攻撃など）に対する防護策であり、これまではPro版ではなく一般的なRyzenシリーズにも提供されてきた。しかしAMDは警告 없이この機能を削除し、Windows環境では検出不可能な状態だった。

この一件は**セキュリティ機能の「无声な削除」** がどれほどユーザーの信頼を損なうかを示す事例である。CPUレベルのセキュリティはクラウドインフラや企業環境だけでなく、個人開発者のノートPCにも直結する課題だ。

---

## VentureBeat：Google、25年ぶり検索ボックスの改良を発表

Googleは25年ぶりに検索ボックスのUI刷新を実施。これはWebの入り口である検索体験の根幹に関わる変更であり、VentureBeatは「想像以上に重要」と評している。

具体的な技術的詳細はまだ公開されていないが、GoogleがAI技術を検索体験に更深く統合する布石である可能性がある。**Google Search Generative Experience（SGE）** の強化や、AIサマリー機能の検索UIへの本格統合が予想される。

---

## Microsoft、新しい暗号通貨狙いのマルウェア「SYTE」を発見

Ars TechnicaはMicrosoftが発見した新しいマルウェアについて報じた。**自己増殖機能を持つSYTE** と名付けられたこのマルウェアは、暗号通貨ウォレットを狙い、受害者の資産を窃取する。物理アクセス不要のネットワーク経由での感染が広がっている。

AIやLLM技術と直接関係ない話題だが、AI生成コードの増加がマルウェア開発の门檻を下げているとの指摘は業界関係者の間で広がっている。

---

## 参考リンク

- [Google DeepMind Blog](https://deepmind.google/blog/)
- [The Verge - Midjourney medical AI report](https://www.theverge.com/report/954826/midjourney-medical-ai-ultrasound-body-scanner-lacks-evidence)
- [The Verge - AI Super PACs](https://www.theverge.com/policy/954970/ai-super-pacs-alex-bores-new-york-12th-district)
- [Ars Technica - AMD TSME](https://arstechnica.com/security/2026/06/following-user-outcry-amd-reinstates-memory-encryption-in-consumer-cpus/)
- [Ars Technica - SYTE malware](https://arstechnica.com/security/2026/06/microsoft-spots-new-self-propagating-malware-for-stealing-cryptocurrency/)
- [VentureBeat - Google search redesign](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)
- [The Verge AI RSS Feed](https://www.theverge.com/rss/ai-artificial-intelligence/index.xml)

---

*本文の情報は2026年6月24日時点のものです。*
