# AI開発ニュース weekly roundup — 2026年7月第2週

2026年7月13〜14日、AI業界は資金調達・法廷闘争・インフラ覇権争奪という3つの軸で激動の一週を過ごした。動画生成スタートアップPixVerseが4.39億ドルの大型調達で評価額20億ドルを突破する一方、AppleがOpenAIを特許奪取で提訴、さらにCloudflareがAIエージェントのWebクロールに許可制を導入を発表。MicrosoftCEO Satya Nadella氏も独自AIモデルの「トローイの木馬」リスクを指摘し、業界内に波紋を広げている。

---

## AI agent規制：Cloudflareがクローラー許可制を導入

AIエージェントがWebページをリアルタイムにフェッチする「AI agent crawlers」が、2026年9月15日からデフォルトでブロックされる。Cloudflareが7月1日に変更を発表。多くのCoverageはGoogleに注目したが、実際には**広告収益があるページ全般**が対象。

出版社の対応が求められる：AIエージェントからのアクセスを許可するには、Cloudflareの新しい「AI Audit」ダッシュボードで明示的に設定が必要。Cloudflareはこの動きを「AI時代のrobots.txt再定義」と位置づけている。

**開発者視点**では、AI agent builderはアクセス先のウェブサイトごとに許可取得成为た対応迫られる。RAGやweb search機能を構築しているチームは特に注意が必要。

---

## 動画生成の資金泡沫：PixVerseが439Mドル調達

動画生成スタートアップの**PixVerse**がシリーズBで4.39億ドル（約700億円）を調達。評価額は20億ドルを突破。現在のAI投資冷え込みの中で異例の大型調達となる。

調達資金は以下に使用予定：
- **ワールドモデル（world model）**の拡張
- **地理的拡大**（アジア・ヨーロッパ市場）
- **リアルタイム動画生成**機能の強化

競合であるRunway、Pika、Soraとの差別化が問われる。前四半期比で動画生成モデルの品質向上は著しく、生成速度とコストが次の競争軸に。

---

## Nous Research：Hermes agent makerが1.5B valuationで資金調達交渉

AI agentフレームワーク「Hermes」を開発する**Nous Research**が、Robot Ventures主導で少なくとも7500万ドルの資金調達を検討していることが判明。評価額は15億ドル（USVや他の注目投資家も参加予定）。

Nous Researchは2024年にHermes agentシリーズを発表し、agent実行フレームワークの开源社区で存在感を示してきた。本次調達はAgent泡沫の一端を示す指標としても注目に値する。

---

## Anthropic：Claudeのインド市場本地化pricingを開始

Anthropicは米国市場に次ぐ最大市場である**インド**に向け、Claudeの本地化 pricingを開始。インドルpee建てサブスクリプションプランの提供が始まった。

背景には以下がある：
- インドのLLM需要急増（特にSaaS・客服用途）
- 規制対応（データ本地化要求）
- 競合（Google Gemini、OpenAI GPT-4o mini）との価格競争

Claudeの上位プランは米国比で相当な割引が適用されると予想され、新興市場でのシェア獲得戦略と解读できる。

---

## 法廷闘争：AppleがOpenAIを特許奪取で提訴

AppleがOpenAIを提訴。的主要内容：
- Appleの元エンジニアがOpenAI入社後、Appleの機密情報を不正取得
- 元エンジニアはAppleのシステムへの不正アクセスを繰り返していた疑い
- OpenAIはApple元社員と共謀し、Appleの特許を侵害した可能性

さらにAppleの訴訟では、こんな驚くべき主張も：
- Apple社員が来社面接時に**Apple製ハードウェアの持込を求められた**
- 候補者にAppleシステムへのアクセスを求める不正な「面接プロセス」が存在した可能性

AppleとOpenAIの関係は複雑だ。AppleはiOSにChatGPT統合を実現させた一方、内部では法的闘争正在进行中。

---

## Nadella警告：「proprietary AIモデルのトローイの木馬」リスク

Microsoft CEO **Satya Nadella**がproprietary AIモデルを提供する巨大ラボへの警告を発した。

核心は以下：AIラボがユーザーに「有益なAI」を提供すると伪りながら、実際には**企業ユーザーのデータを独占的に収集**し、競争上の優位性を構築している可能性。

これはAzure VS AWS/GCPのクラウド覇権争斗にも繋がる。MicrosoftはAzure + OpenAIの組み合わせで優位に立つ策略が露骨に表れた見方もできる。

---

## Sam Altman：「宇宙データセンター」論争

MuskがAltmanを「詐欺師」と非難した問題で、Altmanが反撃。「宇宙データセンター」をshort-termな市場投資家に売るのはMuskの方だと。这是_space datacenter構想の実現可能性に対する業界内の怀疑が表面化した事例。

---

## AI倫理の論点：「AIは殺人を手伝うべきか」

TechCrunchの论考記事「Should AI help you get away with killing your spouse?」が炎上。AIのユーザー向けalignmentの理想と、恶用リスクの境界線をどう引くかという問いかけ。

---

## 参考リンク

- [PixVerse raises $439M, valuation soars past $2B — TechCrunch](https://techcrunch.com/2026/07/13/video-generation-startup-pixverse-raises-439m-valuation-soars-past-2b/)
- [Hermes agent maker Nous Research in talks for $1.5B funding — TechCrunch](https://techcrunch.com/2026/07/13/hermes-agent-maker-nous-research-in-talks-for-new-funding-at-1-5b-valuation/)
- [AI agent crawlers now need permission — AI News](https://www.artificialintelligence-news.com/news/ai-agent-crawlers-cloudflare-rules/)
- [Anthropic localizing Claude pricing for India — TechCrunch](https://techcrunch.com/2026/07/13/anthropic-starts-localizing-claude-pricing-for-india-its-biggest-market-after-the-us/)
- [Apple sues OpenAI — Ars Technica](https://arstechnica.com/tech-policy/2026/07/apple-sues-openai-after-ex-engineer-allegedly-used-bug-to-steal-trade-secrets/)
- [Satya Nadella warning — TechCrunch](https://techcrunch.com/2026/07/13/satya-nadella-has-issued-a-shocking-warning-to-companies-using-ai/)
- [What Anthropic's latest AI discovery does — MIT Technology Review](https://www.technologyreview.com/2026/07/13/1140343/what-anthropics-latest-ai-discovery-does-and-doesnt-show/)

---

*本文の情報は2026年7月14日時点のものです*
