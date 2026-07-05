# AI開発ニュース weekly: AlibabaがClaude Code禁じる命令、Midjourneyのハリウッド透明性要求、GoogleのAI独立宣言CM

2026年7月第1週は、米中AI規制の緊張関係、AIコーディングツールの企業導入動向、そして生成AIのコンテンツ透明性を巡る議論が同時に噴出した週だった。AlibabaがClaude Codeを高リスクソフトウェアに分類して従業員への使用を禁止する命令を7月10日から発動することが複数の報道で伝えられるなど、AIコーディング Agentの企業導入において地政学的リスクが新たな段階に入った。

---

## AlibabaがClaude Codeを禁止：Anthropicの対策とリスク指定

中国大手のAlibabaがAnthropic製コーディング Agent「Claude Code」を高リスクソフトウェア（high-risk software）に分類し、7月10日から従業員への使用を禁止する命令を発令したことが、複数の報道で明らかになった。

この禁止命令の背景には、Anthropic自身が中国本土企業およびその関連企業に対するClaude 利用制限を強化していた経緯がある。Anthropicはこれまで中国本土企業およびその関連企業によるClaude 利用を禁止してきたが、その實施には技術的なギャップが存在していた。

**Anthropicの対応**：AnthropicのThariq Shihipar氏によると、同社は3月に「未承認再販業者によるアカウント乱用防止」および「蒸留（他のモデル出力を使用した学習）からの保護」を目的としたClaude Codeの実験的バージョンを実施した。このバージョンは内部的に中国ユーザーを識別する機能を保有していたが、より強力な対策がlaunchされたことを受け、本機能はすでに移除されている。

Alibabaに代わって使用が指示されているのは、同社自行開発の「Qoder」というコーディング Agentである。Alibabaは米国企業のAI Agent導入に対して自社製ツールへの切り替えを加速させる方針を示しており、7月10日の禁止令発動に向けて企业内部での移行が進行中である。

**開発者視点での分析**：
- Anthropicが地域に基づく利用制限に識別機能を仕込んでいた事実は、モデルを提供する側にとってのアライメントとセキュリティの.trade-offを露呈している
- 蒸留防止のための機能が実はユーザー識別機能を内包していたという構成は、モデル保護と透明性の間で生じる典型的な葛藤を示す
- 中国企業のAI Agent 利用において、地政学的要因が技術的境界超えを困難にしている現況が明確になった

---

## Midjourneyがハリウッドに要求：AI使用の詳細開示

画像生成AIの雄であるMidjourneyが、ハリウッドのスタジオに対してAI使用の詳細を開示するよう正式に要求を出した。複数の報道わかった範囲では、Midjourneyは契約締結前にスタジオがどの程度AI生成的コンテンツを利用しているかを明示することを義務化する条項の導入を検討しているという。

この動きはHollywoodのAI使用に対する透明性要求が制作者側からではなく、技術提供側から提出された点で異例である。Midjourney側は「AI生成コンテンツの適切な帰属と使用許諾の明確化」を目的としており、特にTraining dataへの貢献が懸念の核心にある。

**業界に与える影響**：
- これまでのAI開示要求は主に俳優や作者的立场から提出されていたが、今度は生成ツールの提供者側から要求が来た点で、責任の所在が再定義されつつある
- スタジオ側がMidjourneyの要求を受け入れた場合、他の画像生成AI（Stable Diffusion、DALL-E 3など）にも同様の動きが広がる可能性が高い
- Training dataにおけるコンテンツの権利問題がHollywood全体のAI契約慣行を見直す契机になる可能性がある

---

## Googleの「新」独立宣言CM：AIが書いた独立宣言

Googleがアメリカ独立記念日に合わせて放映した新しいTV CMで、生成AIが米国独立宣言を書く情形を描いた广告が話題となっている。TechCrunchの報道によると、この広告ではGoogleのAI支援機能が独立宣言の草案作成を支援する場面が描かれている。

この广告には賛否が分かれている。支持派は「AIが人間の創造性をaugmentする良い事例」と評価する一方、批判派は「歴史的な文書とAIの関係をsimplifyしすぎている」と指摘している。獨立宣言は1776年の歴史的な文書であり、それを「AI帮助下」での執筆として描くことへの敏感な反応も巻き起こっている。

---

## VentureBeatが伝えたその他の重要トピック

### Railwayが$100Mを調達：AI-native クラウドの挑戦

クラウドプラットフォームのRailwayがSeries Bで$100Mを調達した。Railwayは「AWSに取って変わる」を标榜し、AI-native インフラストラクチャの提供を目指している。注目すべきは、同社がマーケティングに一分钱も費やさず、200万人の開発者を獲得している点で、product-led growthの新たな事例として注目されている。

### Claude Code vs Goose：コーディング Agentの料金戦争

VentureBeatの分析記事によると、Claude Codeは月額最大$200のコストがかかる一方、同様の機能を提供するGooseは無料で利用可能だという。coding Agent市場における価格差別化と、機能差の実態について詳しく検証している。

### Anthropic Coworkの_launch：非技術ユーザーへの普及

Anthropicが「Cowork」をlaunchした。これはClaude Codeの技術的门槛を降低し、コーディング経験のないユーザーでもClaude agentをファイル操作に活用できる機能拡張である。Insidersによると、チーム開発の加速を目標としており、Enterprise環境での展開が視野に入っている。

### Nous ResearchのNousCoder-14B

Open-source AI企業のNous ResearchがNousCoder-14Bをリリースした。同社はParadigmからfundingを受けており、新モデルは複数の大規模コーディングベンチマークで競合となる性能を達成したと主張している。

---

## その他值得关注の動き

- **Takeda × Insilico Medicine**：武田薬器和Insilico MedicineがAI創薬で戦略的コラボレーションを開始。早期段階の創薬支援が目標。
- **Anthropic × NVIDIA BioNeMo**：Anthropic Claude ScienceがNVIDIA BioNeMo Agent Toolkitと統合。生命科学研究の計算化を加速する。
- **Bank of Englandの review**：Agentic AIの金融分野への適用に関する既存の規則の適用範囲を見直し中。Payments、trading、cybersecurity、operationsが対象。

---

## まとめ：本周のAI開発トレンド

| トピック | 動向 | 影響範囲 |
|---|---|---|
| Alibaba Claude Code禁止 | 中国のAI規制強化 | 企業IT統制、Geopolitics |
| Midjourney Hollywood透明性要求 | コンテンツ帰属の明確化 | メディア、エンターテイメント |
| Google AI独立宣言CM | AIと歴史・文化の関係 | ブランド戦略、公众認識 |
| Railway $100M調達 | AI-native クラウドの競争 | インフラ、DevEx |
| Claude Code月額問題 | コーディングAgent価格戦争 | 開発者ツール市場 |

本周は、地政学的AI規制の強化とEnterprise導入における実運用上の課題が同時に表面化した週であった。AlibabaのClaude Code禁止は単なる企業統制を超え、米中間のAI技術流出防止の動きの最新事例であり、Enterprise開発者にとってAI Agentの選定において考慮すべき新たな要因が増加したことを示している。

---

## 参考リンク

- [Alibaba reportedly bans employees from using Claude Code - TechCrunch](https://techcrunch.com/2026/07/04/alibaba-reportedly-bans-employees-from-using-claude-code/)
- [Midjourney wants Hollywood studios to reveal the details of their AI usage - TechCrunch](https://techcrunch.com/2026/07/04/midjourney-wants-hollywood-studios-to-reveal-the-details-of-their-ai-usage/)
- [New Google commercial imagines a Declaration of Independence written with help from AI - TechCrunch](https://techcrunch.com/2026/07/04/new-google-commercial-imagines-a-declaration-of-independence-written-with-help-from-ai/)
- [What is Mistral AI? Everything to know about the OpenAI competitor - TechCrunch](https://techcrunch.com/2026/07/04/what-is-mistral-ai-everything-to-know-about-the-openai-competitor/)
- [Railway secures $100 million to challenge AWS with AI-native cloud infrastructure - VentureBeat](https://venturebeat.com/infrastructure/railway-secures-usd100-million-to-challenge-aws-with-ai-native-cloud)
- [Claude Code costs up to $200 a month. Goose does the same thing for free - VentureBeat](https://venturebeat.com/infrastructure/claude-code-costs-up-to-usd200-a-month-goose-does-the-same-thing-for-free)
- [Anthropic launches Cowork, a Claude Desktop agent that works in your files - VentureBeat](https://venturebeat.com/technology/anthropic-launches-cowork-a-claude-desktop-agent-that-works-in-your-files)
- [Nous Research's NousCoder-14B is an open-source coding model - VentureBeat](https://venturebeat.com/technology/nous-researchs-nouscoder-14b-is-an-open-source-coding-model)

---

*（本文の情報は2026年7月5日時点のものです）*
