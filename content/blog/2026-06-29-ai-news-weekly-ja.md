# AI開発ニュース（2026年6月28日）—— SpaceXがCursor買収へ、OpenAI年間損失390億ドル、AnthropicがSDK課金を一時停止

2026年6月第4週の終盤、AI業界で複数の重要な動きがあった。**SpaceXがAIコーディングツールCursorの買収間近**と報道され、xAIとの統合戦略が加速。**OpenAIの漏洩財務書類**では2025年の純損失が**約390億ドル**に達し、収益成長にもかかわらずコストが収益を大幅に上回っている実態が明らかに。一方面、**AnthropicはClaude Agent SDKへのトークン課金を一時停止**し、開発者からの反発を受け手を引いた。**NVIDIAは250億ドル超のBond発行**を実施し、AIインフラ投資を確保する動きを強めている。

---

## SpaceX、Cursor買収でAIコーディングツール戦争に本格参入

Ars Technicaなど複数メディアが報じたところによると、SpaceXはAI支援型IDE「Cursor」の買収間近とされる。CursorはMicrosoftのVisual Studio Codeを基盤にLLMを深度統合したコーディングツールで、GitHub CopilotやAnthropicのClaude Codeと競合してきた。

### xAI統合の布石

今年春、xAIはCursorへのアクセス権を認める契約を結んでおり、これは後のSpaceXとの大型統合の前兆と見られていた。SpaceXとxAIの合併（2026年春頃成立）により、Grokチャットボットは不振だが、Cursorの獲得により**企業向けAIコーディング分野での競争力**獲得を狙う構図だ。

### 市場シェアの攻防

Cursorは急成長を続けてきたが、AnthropicのClaude Codeが市場で首位を奪取。Cursorチームの成長ボトルネックは計算資源にあったとされ、xAIの計算インフラへのアクセス権獲得が買収の背景にある。

### Anthropic・Googleとの契約条項

SpaceXはAnthropicおよびGoogleとのEnterprise取引に**比較的緩い終了条項**を含めているとされ、需要が拡大すれば他社への移行が理論上可能という構造。SpaceX/xAI傘下でのCursorの将来展開から、目が離せない状況だ。

---

## OpenAI、2025年に約390億ドルの純損失——漏洩財務書類で明らかに

独立ジャーナリストEd Zitronが入手した監査済み財務書類によると、OpenAIの2025年における**純損失は約390億ドル**に達した。年間収益は2024年の37億ドルから2025年に**130億7000ドル**へと急成長したが、R&Dコストと収益原価がそれを大きく上回っている。

### 損失の構造

| 指標 | 2024年 | 2025年 |
|------|--------|--------|
| 収益 | 37億ドル | 130.7億ドル |
| R&D費用 | 87.8億ドル超 | 209.2億ドル |
| 収益原価 | 26.5億ドル | 75億ドル |
| 営業損失 | 87.8億ドル | 209.2億ドル |
| 純損失 | 約50億ドル | 約390億ドル |

### 収益成長を蚀うコスト構造

営業損失が前年比2.4倍に拡大した一方、純損失には多額の簿記上の費用を含む。OpenAIは投資家に「いつか黒字化する」と説明しているが、R&Dコストの膨張が止まらない中でその実現時期は見えない。

### コスト削減の圧力

業界関係者は、OpenAIがまず**モデル訓練コストの抑制**を迫られると指摘。Microsoftとのsupercomputer契約（NYTが著作権侵害疑惑を報道）などの既存インフラも見直される可能性がある。

---

## Anthropic、Claude Agent SDKへのトークン課金を一時停止——開発者の反発受け

Anthropicは5月13日に発表していた**Claude Agent SDKのトークン課金を一時停止**した。変更はSDK使用料を追加料金として扱うもので、標準の週間制限とは異なる請求体系を導入する予定だった。

### 開発者からの懸念

変更案に対し、多くの開発者が反発。「Opusで日常的にコーディング助手にClaudeを使っている開発者は、1週間目で損益分岐点を突破する」（Matthew Diakonov氏）や「ヘビーユーザーにとってこれは大きなコスト増」（Zedチーム）など、実質的な負担増が指摘されていた。

### GitHub Copilotとの比較

Anthropicの動きは、GitHub Copilotが同様のトークン課金を導入しユーザーが困惑した直後に発生。Claude Agent SDK課金の突然の中止は、Copilotでの失敗事例も参考にした可能性がある。

---

## NVIDIA、250億ドルのBond発行——需要過多で予定額を上方修正

NVIDIAはAIインフラ投資資金確保のため、**250億ドルのBond発行**を実施。FTが入手した書類によると、機関投資家からの注文が850億ドルに達し、当初予定の200億ドルから増額された。

### 発行の背景

NVIDIAはAI向けGPU市場で圧倒的なシェアを持ち、Big Tech各社がAIインフラに1兆ドル規模を投資する中、その恩恵を受けている。NVIDIA自らもGPU製造と研究開発の加速に向けた資金調達動いており、この度のBond発行はその一環。

### 市場環境

米国・イラン合意後の市場環境の改善受け、NVIDIAは比較的低コストでデットの実現が可能に。10年物債の利回りは米国債 plus 0.5 percentと、当初議論されていたplus 0.75 percentから縮小した。

---

## Apple Vision Pro責任者がOpenAIのハードウェアチームに合流

BloombergのMark Gurman氏によれば、AppleでVision ProResponsibleだったPaul Meade副社長がOpenAIのハードウェアチームに参加することがわかった。Meade副社長はAppleにおいてVision Proヘッドセット的责任者を務める的同时に、来年発売予定のAI搭載スマートグラスの開発を主导していたことも明らかになっている。

**高性能だったVision Proは商業的成功とはならなかった**が、AppleはMetaのウェアラブルデバイスと競合する手頃な価格のスマートグラスに的希望を託している。OpenAIは2026年6月、 eigeneのカスタムAIチップ「Jalapeño」をBroadcomと共同開発者として発表しており、ハードウェア分野への注力が加速している。

---

## アジアのAIスタートアップがAnthropic Mythos禁令に対抗

米国政府のAnthropic Mythos 5輸出禁令を受け、アジアのAIスタートアップたちが類似モデルの投入で対抗している。

### 中国セキュリティ企業のTulongfeng

中国のサイバーセキュリティ企業360は2026年6月25日、AnthropicのMythosに対抗するとされるAIツール「**Tulongfeng**（途隆風）」を発表した。Mythosはサイバーセキュリティーに特化したAIモデルとして知られており、米国政府は「このモデルは強力すぎる」として非米国人のアクセスを禁止している。

### 桜井AIのFuguモデル

同日、東京拠点のAIスタートアップ**Sakana AI**は「**Fugu**」というモデルを正式にリリースした。Fuguは河豚言葉に由来し、「AnthropicのFable 5やMythos Previewのような一流モデルと肩を並べる」としている。Fuguはエージェント用途を想定して設計されており、複数のモデルAPIへのアクセス調整を自動化する機能を持つ。

---

## OpenAI、印度責任者に元Uber印度代表を任命

OpenAIは2026年6月26日、元Uber印度および南アジア社長の**Prabhjeet Singh**氏をOpenAI最初の印度Managing Directorとして任命した。Singh氏はUber在職中の2026年6月20日に辞任を表明しており、2026年9月からOpenAIに参加する。OpenAIにとって印度は米国市場に次ぐ第2の市場と位置づけられている。

---

## 参考リンク

- [SpaceX Will Acquire Coding Tool Cursor to Compete with Anthropic, OpenAI - Ars Technica](https://arstechnica.com/ai/2026/06/spacex-will-acquire-coding-tool-cursor-to-compete-with-anthropic-openai/)
- [Leaked Financial Docs Show OpenAI Is Losing Billions of Dollars a Year - Ars Technica](https://arstechnica.com/ai/2026/06/leaked-financial-docs-show-openai-is-losing-billions-of-dollars-a-year/)
- [Anthropic Pauses Token-Based Billing for Its Claude Agent SDK - Ars Technica](https://arstechnica.com/ai/2026/06/anthropic-pauses-token-based-billing-for-its-claude-agent-sdk/)
- [Chipmaker NVIDIA Seeks to Raise Over 25B in First Bond Deal Since 2021 - Ars Technica](https://arstechnica.com/ai/2026/06/chipmaker-nvidia-seeks-to-raise-over-25b-in-first-bond-deal-since-2021/)
- [Apple Vision Pro exec is reportedly leaving for OpenAI - TechCrunch](https://techcrunch.com/2026/06/27/apple-vision-pro-exec-is-reportedly-leaving-for-openai/)
- [Asian AI startups launch Mythos-like models as Anthropic's export ban drags on - TechCrunch](https://techcrunch.com/2026/06/27/asian-ai-startups-launch-mythos-like-models-as-anthropics-export-ban-drags-on/)
- [OpenAI poaches Uber India chief to lead its biggest market outside the US - TechCrunch](https://techcrunch.com/2026/06/26/openai-poaches-uber-india-chief-to-lead-its-biggest-market-outside-the-u-s/)

---

*（本文の情報は2026年6月28日時点のものです）*
