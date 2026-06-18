# AI開発者ニュース 2026年6月第3週——OpenAI IPO前採用、Baseten15億ドル調達、ChatGPT医療強化

2026年6月第3週、AI業界は採用・調達・事業再編・規制動向と等多个面間で動いていた。OpenAIはIPOを前にCharacter AI創業者や政策エキスパートを迎え撃ち、推論インフラのBasetenは約半年で評価額を160%伸ばす大型調達を完了した。SnapはAI動画チームを分社化し、ChatGPTは260人以上の医師のレビューの下で医療能力を大幅に強化。危険なAIモデルの規制をめぐる論争も続いている。

---

## OpenAI、IPO前に大牌採用——ShazeerとBallを迎え撃つ

OpenAIは6月、上市を前にした重要な採用攻勢をかけている。

**Noam Shazeer**——Google Geminiの共同リーダーでCharacter AIの創業者——が6月中にOpenAIに参加することが明らかになった。Shazeerは2000年からGoogleに在籍しTransformer当初期から携わった生成AIの草分け的存在であり、Character AIを離れてGoogleに復帰する形となっていた。此次のOpenAI参加は、AIラボ間の人材移動の最新の動きとなる。

さらに政策・安全性の分野では、**Anna Ball**が7月6日から「Strategic Futures」という新チームのリーダーに就任する。Ballは米政府高官としての経験を持ち、新チームでは「壊滅的リスク」「再帰的自己改善」「労働市場への影響」「AIガバナンス」を担当する。BallはXに「AIラボは民主的にAIガバナンスをリードする必要がある几乎.by necessity」と投稿している。

**開発者視点**：
- Shazeerの採用はOpenAIの**技術的深度の強化**とIPO時の投資家向けアピールが目的と推測される
- Strategic Futuresチームの設立は、規制当局への対応を内製化する動きであり、上市公司としてのガバナンス課題への主动的な対応と見ることもできる
- IPOに向けた採用攻勢は、Anthropic・Meta・Googleとの間で高水平な人材競争が継続していることを示している

---

## Baseten、推論インフラで15亿美元調達——評価額130億ドル

AI推論インフラのスタートアップ**Baseten**が、WSJ報道によると約15亿美元の資金調達を完了しようとしている。評価額は130億ドルに達し、仅仅5ヶ月前に実施したシリーズE（3億ドル、評価額50億ドル）から**評価額が160%増**となる大型Jumpだ。

Basetenは2019年設立のスタートアップで、AI推論（即時予測処理）のインフラ層に特化している。「推論ゴールドラッシュ」の中でVCが推論レイヤーに殺到している象徴的な事例となる。

**技術的背景**：
- **推論（Inference）と学習（Training）の分離**：Basetenのような推論特化型インフラは、学習済みモデルの商业化进程中にある企業に必要不可欠な存在
- **推論最適化の技術的課題**：推論は低遅延・高可用性が求められ、学習とは異なる専門知識が必要
- **評価額のジャンプ要因**：分割価格設定（split-priced round）を採用し、表面的な評価額を膨らませている可能性がある——投資家のリpute向上のための手法

**開発者視点**：
- 推論コストの最適化は2026年の重要なテーマであり、Basetenのような專門インフラへの投資が加速している
- ただし分割価格設定を採用した調達は、実際の事業価値より高い評価名でに座組みされている可能性がある点には注意が必要

---

## Snap、AI動画チームを分社化——Dotmoが独立

Snapは保有するAI動画チームを新会社**Dotmo**として分社化すると6月18日に発表した。成本の高さが主な理由としている。

DotmoはSnapとの以下の関係を維持する：
- **技術ライセンス**：Snapのテクノロジーをゲームやインタラクティブエンターテインメント向けに改编する権利を取得
- **CTOの投资**：Bobby Murphy（Snap CTO）がリード投資家となり、个人的に大きなシェアを取得
- **人材・知財の移转**：SnapのAI動画チームがDotmoに移行し、Spinには большой持分を取得

Snapは同年早些时候にもスマートグラスのラインを分社化してSpecsを立てているが、Dotmoはそれとは異なる——Snapのコア事業に直結しないデジタル体験の開発が目的だ。

**開発者視点**：
- ソーシャルプラットフォームのAI投資が「コア事業への回帰」と「実験的事業の分社化」という二極化している
- Dotmoのビジネスモデル（ゲーム・エンターテインメント向けAI動画）は、Snapのメデイア企業としての转型戦略の一部と見ることもできる

---

## ChatGPT、医療能力が大幅に強化——不正確率が71%減少

OpenAIは6月、ChatGPTの医療能力を大きく強化した。**GPT-5.5 Instant**モデルへのアップグレードにより、機械的な医療テストで&quot;most expensive Thinkingモデル&quot;に匹敵する性能を達成したという。

**具体的な成果**：
- **260人以上の医師**が60カ国から参加し、70万件以上のモデル回答をレビューした
- 正しくない健康主張の发生率が**2ヶ月で71%減少**した
- 医師と比較した場合、**正確性・明確性・完全性**のすべてで高いスコアを記録

この改善は、米国のWeeklyで2億3000万人がChatGPTを利用している背景下での話であり、医療分野へのAI導入加速を示唆している。

**開発者視点**：
- **認证的医療AI**の方向性—— ampla検証データに基づく性能向上が、专业家の信頼を少しずつ得つつある
- ただし「医師と比較した性能」はまだ限定的なテスト条件での話であり、実際の临床応用には慎重な評価が必要
- 260人の医師による70万件のレビューのスケールは、AI安全性の検証が professionnal なネットワーク全体で実行されつつあることの証拠

---

## 「危険なAIモデルは必ず登場する」——規制の一時性は専門家が指摘

Ars Technicaが6月、**危険なAIモデルの規制問題**をめぐる専門家たちの見解をまとめている。

焦点はAnthropicの**Mythos**と**Fable 5**にある。Mythosは高度な脆弱性発見能力を持ち、Fable 5はその一般公開版だ。政府はFable 5のガードレールをバイパス，就能 Mythosの能力にフルアクセスできるとして、bothモデルを規制対象とした。

しかし専門家たちの见方は seguinte：
- **「他の競合他社も类似的能力を既に開発しているか、既に開発しつつある」**（Tarah Wheeler、Strxrity最高セキュリティ責任者）
- **「重要なのは特定のモデルではなく、技術全般のトレンドだ。より小さく、より安価なモデルでも同様のことができる」**（Bruce Schneier、ハーバード大学）
- **「民主的に、透明性のあるAIガバナンスの計画を政府が中心となって開發する必要がある」**

AnthropicのLogan Graham最前線Red Teamリーダーは「実際のメッセージは、これはモデルやAnthropicについての话ではなく、关于技術のトレンドだ」と語っている。

**開発者視点**：
- 規制当局の取üllは「一時的な回避」に過ぎず、本質的な課題は技术の拡散速度に規制が追いついていない点にある
- **小さなモデルでも危险な能力を持つ**ようになる趋势は、モデルサイズベースの規制の无效性を示している
- 開發者にとって、この議論はAIセキュリティの「防壁」と「両刃の剣」のバランスを再考する良い機会である

---

## 参考リンク

- [OpenAI is bringing on some big guns in the lead-up to its IPO (TechCrunch)](https://techcrunch.com/2026/06/18/openai-is-bringing-on-some-big-guns-in-the-lead-up-to-its-ipo/)
- [AI inference startup Baseten reportedly raising $1.5B (TechCrunch)](https://techcrunch.com/2026/06/18/ai-inference-startup-baseten-reportedly-raising-1-5b-months-after-its-last-mega-round/)
- [Snap spins off AI video team into new company, Dotmo (TechCrunch)](https://techcrunch.com/2026/06/18/snap-spins-off-ai-video-team-into-new-company-dotmo-due-to-costs/)
- [ChatGPT's new health upgrade beats doctor-written answers (The Decoder)](https://the-decoder.com/chatgpts-new-health-upgrade-beats-doctor-written-answers-openai-says/)
- ["Dangerous" AI models are coming no matter what (Ars Technica)](https://arstechnica.com/ai/2026/06/dangerous-ai-models-are-coming-no-matter-what/)

---

*本文の情報は2026年6月19日時点のものです。*
