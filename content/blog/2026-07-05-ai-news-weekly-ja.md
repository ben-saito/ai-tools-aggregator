# AI開発ニュース Weekly Recap — 2026年7月第1週

2026年7月上旬、AI業界は法廷闘争、企業対応、そして科学分野へのAI適用という3つの異なる軸で進展が見られた。Midjourneyとハリウッドスタジオの法的対決、AlibabaのClaude Code禁止令、AnthropicによるClaude Scienceの発表、そして武田薬品とInsilicoの大型AI創薬パートナーシップをレポートする。

---

## Midjourney vs ハリウッド：AI使用詳らかに求める法廷闘争

**Midjourney**が現在進行中の **3社のハリウッドスタジオとの法廷闘争** の中で、相手方が自社相手にAIをどのように活用しているかの詳細開示を求めていることが明らかになった。

**背景：** Midjourneyは複数のスタジオからAI画像生成巡りでの著作権侵害告訴を受けている。これに対してMidjourneyは **「対抗措置」として、相手先が社内でいかなるAIツールを使用しているかを詳細に明かすよう法的請求** めている。

**技術的ポイント：**
- ハリウッドスタジオは制作効率化のため社内で独自AI 시스템을 도입済み居多
- これらのAI使用状況がMidjourney側の侵害主張と矛盾するかを立証したい意向
- **プロンプト設計** や **学習データ** の開示が争点となる可能性

**開発者視点：** この事例は、AI著作権問題が単方向ものではないことを示している。生成AIを提供する企业在、利用企業もまた同じ問題を内有している可能性がある라는 점值得关注。

**参考リンク：**
- [Midjourney wants Hollywood studios to reveal the details of their AI usage (TechCrunch)](https://techcrunch.com/2026/07/04/midjourney-wants-hollywood-studios-to-reveal-the-details-of-their-ai-usage/)

---

## Alibaba、Claude Codeを「高リスクソフトウェア」に分類し従業員の使用を禁止

**Alibaba**が社内で **Claude Codeの使用を禁止** したことが明らかになった。同社はClaude Codeを「**高リスクソフトウェア**」として分類している。

**禁止の背景：**
- **コード流出リスク**：Claude Codeがクラウド上でコードを処理することへの懸念
- **情報セキュリティ**：企業機密情報の外部送信の可能性
- **コンプライアンス**：中国独自のデータ規制への対応

**技術的詳細：**
- Claude CodeはAnthropic製のAI駆動型コード編集ツール
- 開発者が 자연어로 코드를 생성・編集できる
- しかしながら，企业环境での利用時にデータが外部サーバーに送信される可能性が指摘されている

**開発者への示唆：**
- 海外企业提供のAI開発ツール導入には **データガバナンス** の审视が必要
- **Claude Code** 以外の替代品（GitHub Copilot、Cursor等）への移行を検討する企業も

**参考リンク：**
- [Alibaba reportedly bans employees from using Claude Code (TechCrunch)](https://techcrunch.com/2026/07/04/alibaba-reportedly-bans-employees-from-using-claude-code/)

---

## Anthropic、Claude Scienceを発表 — 科学者向けAIワークベンチ

**Anthropic**が **Claude Science** を正式に発表した。これは科学者向けのAIワークベンチで、分散したツールや数据集を1つの環境に統合し、**図表やビジュアルの生成** も可能にする。

**主な機能：**
- **ツール統合**：データセット、解析ツール、可視化ライブラリを一元管理
- **自動図表生成**：研究データを基にグラフや模式図を自動作成
- **科学特化プロンプト**：論文執筆、仮説生成、実験計画に対応

**药物開発への展開：**
Anthropicはさらに **自社での薬物開発** に乗り出すことを表明した。既に多くのバイオテック・製薬企業がClaudeを利用しているが、Claude Scienceの発表に合わせて **創薬プロジェクト** を社内で立ち上げることを明かした。

**技术的背景：**
- AI for Science浪潮`：Google（AlphaFold）、Microsoft（AI2）、Meta（ESMFold）都有、科学特化AIの開発を加速
- **生成AIの弱点**：科学的妥当性の确保が課題として浮上

**参考リンク：**
- [Anthropic wants to develop its own drugs (The Verge)](https://www.theverge.com/ai-artificial-intelligence/961311/anthropic-claude-science-ai-drug-development)
- [Anthropic Claude Science公式発表](https://www.anthropic.com/news/claude-science-ai-workbench)

---

## ファンフィクションコミュニティ、AI生成検知ツール導入で内部対立

**The Verge**が伝えたところによると、**ファンフィクションコミュニティ** でAI生成作品を検知・管理する新しい動きが起きている。

**概要：**
- **Ao3**（Archive of Our Own）などの平台上でのAI疑惑作者の排除を目指す運動が发生
- 「@heatedrivalryai」などの匿名アカウントが **Claude・ChatGPT使用疑惑** の作者名を公開
- 検出 방법として **ハイフン(-)の使用頻度** や **「紫色の散文(purple prose)」** といったスタイル分析が挙げられている

**問題点：**
- 現在のAI検知方法は **误検知률이 높く**、人間の書き手を誤って排除する可能性
- **創作スタイルの多様性** と 「AIっぽさ」 の線引きが困難
- コミュニティ内での **内部分裂** も深刻化

**技術的考察：**
- **LLM生成テキストの統計的特徴** だけでは人間書きと完全には区別できない
- より精度の高い検知には **分散分析方法** や **メタデータ検証** が必要

**参考リンク：**
- [The fanfiction community is at war with AI — and itself (The Verge)](https://www.theverge.com/tech/960854/ai-fanfiction-ao3-claude-detector)

---

## 武田薬品、Insilicoと600Mドル相当のAI創薬パートナーシップ締結

日本の大手製薬会社 **武田약품** が、香港拠点の **Insilico Medicine** と **最大6億ドル** のAI創薬パートナーシップを締結した。

**パートナーシップの詳細：**
- **対象**：武田薬品のすべての治療領域における初期段階の創薬
- **使用プラットフォーム**：Insilicoの **Pharma.AI** （標的発見けのPandaOmics、分子設計のChemistry42、臨床試験予測のInClinico）
- **契約構造**：一時金・近期的マイルストーン 約6000万dlr + 研究開発マイルストーン 最大6億dlr + **ロイヤリティ**

**Insilicoの得意的技術：**
- 自社開発 の **AI生成薬剤 candidate** が既に臨床試験に進んでいる（Rentosertib / ISM001-055）
- **TNIK阻害剤** として特発性肺線維症に対するPhase 2a試驗完了

**創薬AIのトレンド：**
- **標的発見 → 分子設計 → 臨床予測** までAIで一貫処理可能に
- 传统的には5-10年かかる前期創薬工程を **大幅に短縮** 可能

**参考リンク：**
- [Takeda signs US$600M AI drug discovery deal with Insilico (AI News)](https://www.artificialintelligence-news.com/news/takeda-insilico-ai-drug-discovery-deal/)

---

## AI業界Weeklyまとめ（2026年7月第1週）

| トピック | キーイベント | 影響範囲 |
|----------|-------------|---------|
| 法廷闘争 | Midjourney vs ハリウッド | IP/著作権、AI政策 |
| 企業統治 | Alibaba Claude Code禁止 | データセキュリティ |
| 科学AI | Anthropic Claude Science発表 | R&D、AI for Science |
| 検知技術 | ファンフィクションAI検知論争 | コンテンツモデレーション |
| 創薬AI | 武田-Insiilico $600M契約 | 製薬、ライフサイエンス |

---

## 参考リンク

- [TechCrunch AI Section](https://techcrunch.com/category/artificial-intelligence/)
- [The Verge AI Section](https://www.theverge.com/ai-artificial-intelligence)
- [AI News](https://www.artificialintelligence-news.com/)
- [Anthropic Claude Science](https://www.anthropic.com/news/claude-science-ai-workbench)

---

*（本文の情報は2026年7月5日時点のものです）*
