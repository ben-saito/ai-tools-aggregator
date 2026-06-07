# OpenAIがプロンプトインジェクション対策「Lockdown Mode」を発表 WWDC控えるAppleのSiri刷新などAI最新ニュース

2026年6月上旬、AI業界はセキュリティとプロダクトの両面で重要な動きを見せている。OpenAIが**プロンプトインジェクション攻撃**から機密データを保護する「Lockdown Mode」を発表注目を集める一方、AppleはWWDCを前にSiriの大幅刷新を控え、MicrosoftはAI経済が従来のGDP統計では捉えきれない規模で成長していることが明らかになった。

---

## OpenAI、「Lockdown Mode」でプロンプトインジェクション対策

OpenAIは6月6日、ChatGPTなどのAIアシスタントを**プロンプトインジェクション攻撃**から守る新機能「Lockdown Mode」を公開した。この攻撃は、悪意のある指示をAIプロンプトに埋め込み、機密データの流出や不正な操作を引き起こす手法だ。

**Lockdown Modeの主な特徴：**

- 外部からの悪意あるプロンプト挿入を検出・ブロック
- セッション中の機密データが不意に共有されるリスクを軽減
- 企業ユーザーが敏感な情報（顧客データ、APIキー、内部文書など）を扱う際に有効

OpenAIの幹部によれば、「Lockdown Mode」を有効にしていてもChatGPTは完全に安全とは言い切れず、リスクはゼロにならないという。ただし、**機密データが意図せず流出する確率を大幅に低下させる**ことが目標だとしている。

プロンプトインジェクションは、RAG（Retrieval-Augmented Generation）システムやエージェント型AIにおいて特に深刻な問題だ。外部データを取得して回答を生成するシステムでは、悪意のある入力がそのまま内部の文脈に混入する可能性がある。AIアシスタントがブラウザ拡張や外部ツールと連携する昨今のトレンドにおいて、この種の攻撃は現実的な脅威となっている。

**開発者視点でのポイント：**

- Lockdown ModeはAPIレベルでも企业提供予定
- プロンプトインジェクション対策はAIセキュリティの重要課題として認識されつつある
- エージェント型AIの普及に伴い、入力サニタイズと出力検証の重要性が増している

---

## WWDC 2026直前 AppleがSiriの「高度再做」を準備

Appleは6月9日（米国時間）に予定されているWWDC 2026に向けて、Siriの大幅刷新を発表する準備を進めている。TechCrunchの報道によれば、Appleは「新しいSiri」を再紹介するとされている。

**Apple Intelligenceの到现在までの道のり：**

AppleはWWDC 2024で「Apple Intelligence」を披露し、新 Siriには新しいボイスオプションやChatGPTへの質問委譲機能が追加された。しかし、肝心の中央処理「Intelligence」部分は約束されたにもかかわらず大幅に遅延が生じ、结果是class-action lawsuitの和解に応じた。

WWDC 2026では、**Geminiとの統合**を含むSiriの再設計が期待されている。AppleはAI分野で他社に遅れを取っているとされるが、逆転の значениеとして「プライバシー重視のアプローチ」を打ち出す可能性が高い。

**技術的課題：**

- オンデバイスAI処理とクラウドAI処理の棲み分け
- App Intents APIを活用したアプリ連携の拡張
- ChatGPT以外的AIプロバイダーとの統合

---

## Meta、AI生成クリックベイトニュースフィードを展開

The Vergeの報道によれば、MetaはスタンドアローンのMeta AIアプリに**AI生成のクリックベイトニュースフィード**「For You」セクションを追加していたことが明らかになった。

**主な特徴：**

- トピック、画像、テキストのすべてをAIが生成
- クリックベイトスタイルの疑義ある記事を作成
- 「王家室の写真」に「Queen Elizabeth IIが2人」などのおかしなAI生成画像が混在

Metaは2025年4月にMeta AIアプリを公開した際、公的な「Discover」フィードでAI生成画像や他のユーザーとの会話を表示していた。この方式是ユーザーがこれらが公共に公開されていることに気づかない場合があったとして問題になっていた。

---

## AI経済の成長率は2,000%超　従来のGDP統計では捕捉不可能

University of VirginiaとAnthropicのエコノミスト陣、そしてBank of Canadaによる共同研究 따르면、**米国におけるAI経済は年間約2,600%の成長率**で拡大していることがわかった。

**主な発見：**

|指標 | 2023年 | 2024年 | 2025年 |
|------|--------|--------|--------|
| 算出した支出 | $37B | $90B | $219B |
| 品質調整後AI出力成長率 | - | 2,290% | 2,271% |

研究チームは、AI経済の成長が従来のGDP統計に見えない理由を以下のように解释道：

1. **データセンター建設ブromeは規模が大きいものの、GDPを押し上げるには不十分**
2. **AI推論（Inference）の経済効果が大きいが、単位価格の下落と品質向上が相殺**
3. **AIは人間の労働にとって代わる可能性があり、伝統的な経済指標では評価しづらい**

この研究は、**政策立案者がAIの真の影響を見落とすリスク**を示唆している。財務省が10年間の歳入予測を従来のデータに基づいて立てると、労働税基盤への衝撃に備えることができない可能性がある。

---

## Biohub、AlphaFold 3竞争对手「ESMFold2」を公開

Priscilla ChanとMark Zuckerbergが設立したBiohubは、DeepMindのAlphaFold 3に対抗する新モデル**ESMFold2**を公開した。このモデルは「蛋白質生物学の世界模型」として、命を構成する全生物にわたる蛋白質の構造予測・設計・発見を可能にする。

**ESMFold2の3つのコンポーネント：**

- **ESMC**：約28億の配列から 学习した蛋白質言語モデル
- **ESMFold2**：ESMCの配列表現を原子分解能の3D構造に変換する設計エンジン
- **ESM Atlas**：68億の蛋白質配列と11億の予測構造にアクセス可能

**のがん研究への応用：**

Biohubの研究者はESMツールを使用して5つの標的（EGFR、PDGFRβ、PD-L1、CTLA-4、CD45）に対する蛋白質バインダーを設計。の結果、36〜88%のヒット率を達成し、実験室での結合を確認した。

**スケーリング法則の観察：**

- ESMCは比以前世代のESM2モデル比で学習データが約2桁増加（約5,000万→28億の配列）
- ESMFold2は推論時のスケーリングの恩恵を受ける：サンプル数が増えるほど性能が向上
- 单一シードでは49%だった抗体-抗原合格率も、1,000サンプルでは65%に向上

---

## 参考リンク

- [OpenAI unveils Lockdown Mode to protect sensitive data from prompt injection attacks (TechCrunch)](https://techcrunch.com/2026/06/06/openai-unveils-lockdown-mode-to-protect-sensitive-data-from-prompt-injection-attacks/)
- [What to expect from WWDC 2026: Siri's highly anticipated revamp and Apple Intelligence updates (TechCrunch)](https://techcrunch.com/2026/06/06/what-to-expect-from-wwdc-2026-siris-highly-anticipated-revamp-and-apple-intelligence-updates/)
- [Meta made its own AI-generated clickbait news feed (The Verge)](https://www.theverge.com/ai-artificial-intelligence/944235/meta-app-ai-clickbait-articles)
- [Here comes new Siri again (The Verge)](https://www.theverge.com/tech/944245/apple-wwdc-2026-ai-siri-gemini)
- [Import AI 459: AI oversight is difficult; scaling laws for protein folding models; and pricing the extinction risk of AI systems (Import AI)](https://importai.substack.com/p/import-ai-459-ai-oversight-is-difficult)
- [Biohub releases a world model of protein biology (Biohub)](https://biohub.org/news/world-model-of-protein-biology/)

---

*（本文の情報は2026年6月8日時点のものです）*