---
title: "WalmartがAI利用制限、Uberが予算を4ヶ月で消化——Enterprise AIの「請求書の現実」"
description: "Walmartが従業員向けAIアシスタント「Code Puppy」へのトークン上限を設定、UberはClaude Codeで2026年全年予算を4ヶ月で消化。Enterprise AIの課金が従量制へ移行する中、CFOと開発者の間に深い認識ギャップが生まれている。"
date: "2026-06-03"
category: "AI News"
tags: ["AI", "Enterprise", "Claude", "Anthropic", "Cost", "FinOps", "Token Billing"]
slug: "walmart-uber-enterprise-ai-token-billing-crisis"
---

# WalmartがAI利用制限、Uberが予算を4ヶ月で消化——Enterprise AIの「請求書の現実」

2026年、AIを業務に活用する企業はある壁にぶつかり始めている。月額固定払いの「SaaS型AI」から、利用量に応じた「従量制トークン請求」への移行が、コスト管理体制の甘さを暴露している。Walmartが社内AIアシターの利用上限を設定し、Uberは全年予算を4ヶ月で消化した。この2つの事例は、Enterprise AI economicsの本当の問題を物語っている。

---

## Walmart、「Code Puppy」にトークン上限を設定

世界上最大の雇用主であるWalmartは、従業員向けAIアシスタント**Code Puppy**の利用を制限する方針を明らかにじた。Code Puppyはスプレッドシート分析、プレゼンテーション作成、ワークフロー自動化などをサポートするLLMベースのツールで、社内全体に展開されていた。

しかし期待とは裏腹に、**LLMへの負荷が想定を大きく上回っていた**。Walmartは従業員每人に月間トークン上限を設定し、AI利用に対するコスト管理を強化した。

### 「トークンマaxxing」という新しい問題

コスト増の背景には、社内で「トークンマaxxing」と呼ばれる行動がある。AIツールの利用頻度や複雑さをKPIとして評価する文化が発生し、従業員はより多くのAIクエリを送信して「生産的なAI利用」をアピールするようになった。

Sequoia Capitalの партнеRsも2026年4月に「我々はすべてトークンマaxxingすべきだ」とWall Street Journalに語り、AI 利用の leaderboard が企業内に導入される事例的增加。AIを「大量消費」することが美徳として扱われる構造が、成本を膨らませていた。

Walmart теперь guidance では、従業員に対して「適切なAIツールを適切なタスクに使用する」ことを指示しているが、トークン消费量に応じた奖励制度が撤廃されたわけではない。

---

## Uber、Claude Codeで2026年全年予算を4ヶ月で消化

Forbesが報じたところによれば、Uberは2026年の全年AI予算を**4ヶ月で消化**した。CTOのPraveen Neppalli Naga氏がThe Information明かしたところによると、同社は「白紙からやり直す」ことを迫られている。

### Claude Codeの拡大速度が予算超過の原因に

Uberは2025年12月にClaude Codeをエンジニアリング組織にロールアウト。2026年2月時点で社員の32%が利用していたが、3月には84%が「agentic coding user」に分類された。到4月時点で95%、ほぼ全てのエンジニアが每月AIツールを使用しており、約70%のコミットコードがAIツール経由で生成されている。

**惊人な数字:**
- エンジニア1人あたりの月間コスト：**150〜250ドル**（平均）
- パワーユーザー：**500〜2000ドル**
- Naga CTO自身が2時間のデモで**1200ドル**を消費

問題の核心は、Claude Codeが**Per-Seat型ではなくトークン消費量で料金が発生する**構造にあること。コードを書いてほしければ、より多くのトークンを消費する。工程师が自律的に複数のエージェントを协调させてタスクを実行れば、费用は雪だるま式に增加する。

### Anthroicの料金体系変更が追い打ち

2026年5月13日、AnthropicはClaude加入者に対して**agentツールとサードパーティ製ハーネスへの従量制API料金**を導入すると発表。2026年6月15日から生效予定。この料金体系変更により、Uberのような大口ユーザーは従来の月額固定プランから大幅なコスト増直面することになる。

---

## 従量制AI課金が的企业のfinance assumptionを崩壊させる

### 伝統的なSoftware budgetとの冲突

企業のCIOやCFOは традиционно ソフトウェアライセンスを「年間固定費」として見積もる。100人规模的なら年間 licenses費用はある程度予測可能。然而、トークン消费的AIツールはこうはいかない。

同じツール、同じ工程师、同じ业务日数でも、ワークフローの選択次第で請求金額は大きく変わる。Autocomplete用途とparallel agent orchestrationでは、、消費トークン数が桁違いになる。年間予算编制に組み込まれた「1人当たりコスト」は、机上の空論になりかねない。

### 開発者と财务組織の认识ギャップ

Uberの事例が示すのは、**利用部門と费用負担部門组织間のギャップ**である。Claude Codeの導入を推進したのはエンジニアリングチームであり、その費用負担は财务部門が管理等。这种-splitが、利用抑制インセンティブを消失させる。

特にAI codingツールの場合、「生产性が上がったのか、それともトークンを浪費しているのか」の判别が困難である。コード产出数では测定できない「质」の要因があり、单纯な利用量比較は误导を招く。

---

## Anthropic IPO申請が示すEnterprise AIの「成熟」

同样期间、AnthropicはIPO申請を行った。AI Newsによると、この申請は「生成AIが研究重いベンチャーフェーズから安定したEnterprise utilityへと成熟した」ことを示すものだとしている。

Claudeはすでに医療、金融、エネルギー、防衛などの重要インフラクタ范围内て15カ国以上に展開されており、Anthropicは企業向けAIの 标准として位置づけられつつある。IPO申請は、同社の事業 modeloとコスト構造が公开市場の проверに耐えれると評価された证左とも解读できる。

---

## 企业が取るべき对策

### 1. FinOpsの導入

Cloud時代のリソース最適化手法であるFinOpsを、AIコストにも適用する。チームごとにAI利用量を可视化し、ROI应根据したリソース配分を行う。

### 2. モデル选择のガバナンス

単純なタスクに高端 frontier modelを使用すべきではない。MicrosoftがBuild 2026で「適切なモデル选择」を鼓励したように、企业 also 社内ルールとして「タスク复杂度→モデル选择」のマトリクスを策定し、従量制コストを制御する。

### 3. 利用量と产出の相関测定

トークン消費量と业务产出の関係を定量的に测定する仕組みを作る。「いくつのトークンを消費して、どれだけの业务価値が生まれたか」を可视化することで、无駄なAI利用を排除できる。

---

## 开发者への影響

企业のAIコスト管理工作强化は разработчикам にも直接影响する。AI coding toolの利用が制限される可能导致、個人の生产力向上に影響する可能性もある。

一方では、「より少ないトークンで同じ結果を达成する」能力が評価されるようになる。已经 prompt engineeringや効率的なagent designのスキルは、単なる生产力ツールではなく、企业的にもコスト 효율化の手段として認識されつつある。

---

## 参考リンク

- [Walmart's AI workflows meet the realities of the balance sheet - AI News](https://www.artificialintelligence-news.com/news/walmart-limits-ai-use-as-workflows-meet-the-realities-of-the-balance-sheet/)
- [Uber Burns Its 2026 AI Budget In Four Months On Claude Code - Forbes](https://www.forbes.com/sites/janakirammsv/2026/05/17/uber-burns-its-2026-ai-budget-in-four-months-on-claude-code/)
- [Anthropic IPO filing marks AI maturing into enterprise utility - AI News](https://www.artificialintelligence-news.com/news/anthropic-ipo-filing-marks-ai-maturing-enterprise-utility/)
- [Microsoft's Majorana 2 quantum chip is also a case study for agentic AI in R&D - AI News](https://www.artificialintelligence-news.com/news/microsoft-discovery-agentic-ai-majorana-2/)

---

*（本文の情報は2026年6月3日時点のものです）*