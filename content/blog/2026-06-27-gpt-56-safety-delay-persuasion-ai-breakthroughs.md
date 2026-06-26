# AI開発、最新トピックまとめ（2026年6月第4週）

2026年6月下旬、AI業界は**GPT-5.6の規制遅延**、**Anthropic Mythosモデルの政治問題**、**Patronus AIの$50M調達**、そして**AIの説得力に関する学術的ブレイクスルー**など、複数の重要なトピックが同時発生的に動きを見せている。本稿では今週のAI開発ニュースを整理し、開発者視点からの技術的インプリケーションを考察する。

---

## OpenAI、GPT-5.6の公開をTrump政権の要請で延期

OpenAIは、次世代モデル**GPT-5.6**の公開を**Trump政権の要請**により延期することが明らかになった。The Vergeの報道によれば、Sam Altman CEOは社内Q&Aにおいて、GPT-5.6を限定的なエンタープライズ顧客向けプレビューの形で段階的に公開すると述べた。公開にあたっては、Trump政権が顧客ごとにアクセスを個別承認する形式となる見込み。

この措置は、Anthropicに対する措置よりも**比較的有利な条件**とされる。AnthropicはMythosクラスのモデルについて、Trump政権から週末の最後通告を受け、2週間以内にモデル身をオフラインにする対応を迫られた。Anthropicは経営幹部を指名してワシントンに派遣し交渉しているが、14日が経過した今も**進展的消息**がない状況となっている。

**技術的観点**からすると、GPT-5.6の機能は前回モデルから大幅に向上すると予想されており、安全性評価に時間をかけることには一定の意味がある。しかし、政府が民間企業の製品公開を直接制御するという前例は、**AIガバナンスの新たな課題**を提起している。

---

## Patronus AI、$50Mを調達——AIエージェント評価の「デジタルワールド」構築へ

AIベンチマークおよび評価スタートアップの**Patronus AI**が、$50M（約75億円）のシリーズ資金調達を実施した。Greenfield Partners、LightSpeed、Notable Capitalらが 참여한同社は、Meta AIの研究者らによって設立された。

Patronus AIの中核技術は、**AIエージェントをストレステストするための「デジタルワールド」**を構築することだ。従来の静的ベンチマークとは異なり、現実世界の複雑なシナリオをシミュレートすることで、エージェントの失敗モードや安全性行動を体系的に評価できる。

投資家によると、同社に対する需要は**「ますます増大」**しており、特に金融、医療、法務などの高リスク領域におけるAIエージェント導入の増加が背景にある。AIエージェントが実際の業務プロセスを自動化するようになると、その動作を事前に評価する手段が不可欠となる。

**開発者にとって**、Patronus AIのアプローチは、AIシステムの信頼性評価が新たな産業分野として成立する可能性を示している。評価フレームワークの標準化は、AIビジネスの実応用において重要なビジネスチャンスとなるだろう。

---

## Import AI 462: AIは専門家より「説得力が高い」——オックスフォードなどの衝撃的研究

Jack Clark氏のニュースレター**Import AI**で今週気になったのは、オックスフォード大学や英国AI安全研究院、Stanford大学、London School of Economicsの共同研究だ。この研究は、**AIシステムが人間の専門家よりも高い説得力を持つ**ことを実証している。

### 研究結果

4つの実験で18,978件の会話、6,923人の参加者を使用したこの研究の結果は以下の通り:

- **AIは専門家人間より一貫して説得力が高い**
- **AIはプロの募金活動者（Canvasser）を約3倍上回る**効果でチャリティ募金が増加させた
- **最も強い説得力をもったモデルはOpus 4.1およびOpus 4.6**で、次にOpenAI（GPT-4o、GPT-5.4）、Google（Gemini 2.5 Pro）、xAI（Grok 4.20）が続いた

### 人間vsAI——速度が生む差

興味深いことに、AIの説得上の優位性は**情報量と処理速度**に起因する。人間の専門家にAIのコーチングを提供し、AIの提示した戦略を学んだ場合、人間の性能は向上したが、**依然としてAIに追いつくことはできなかった**。ただし、AIを人間の執筆速度とメッセージ長に制限すると、この優位性は消失した。

### 社会的意味

この研究の意義は、AIの説得力が**実際の行動変容につながる**ことを実証した点にある。AIは単なる議論の強さだけでなく、募金行動のような**現実世界の行動**にも影響を与える。研究者たちは 다음과忧虑を示している:

> 「AIの説得力を管理下に置き、さまざまな行為者間の力のバランスにどのような影響を与えるかを監視する必要がある」

**開発者視点**では、この結果は**AIセキュリティの新たなフロンティア**を示している。AIシステムの説得力を制御・評価する機能は、今後ますます重要になるだろう。

---

## DeepMind ASI論文——超知能への道筋

Google DeepMindの研究者たちは、**AGI（人工知能）からASI（人工超知能）への移行**についての論文を公開した。ASIは「ほぼすべてのタスクと領域でlarge human-expert collectivesの性能を陵駕するシステム」と定義されている。

### ASIへの道筋

論文では4つの主な道筋が検討されている:

1. **compute・モデル・データのスケーリング**——現在のアプローチの拡大でASIに到達する可能性。ただし、エネルギーとデータの供給に制約が生じる可能性がある
2. **アルゴリズムパラダイムシフト**——TransformerやMoEのような革新的新アーキテクチャによる飛躍的進歩
3. **再帰的自己改善（RSI）**——AIシステムが自身の後継システムを構築する能力。AI人間研究者の作業，加快しており、「共同RSI」ループが始動している可能性がある
4. **グループエージェント形成**——複数の店が連携して複合構造を形成し、集合知として機能する可能性

### タイムライン

DeepMindの論文は、「今後10〜20年以内にAGIからASIへ進展する可能性があることを排除するのは難しい」と結論づけている。

---

## Recursive——再帰的自己改善の初步的成果

AI研究スタートアップ**Recursive**は、再帰的自己改善应用于言語モデル訓練、小さなモデルの訓練速度、GPUカーネル最適化において新しいSOTA結果を実証した。

同社は「自動化AI研究システム」を使って、目標に対して「アイデアを提案→実装→実験→結果検証→次の実験選択」という研究ループを自動化しまい、**NanoChat Autoresearch**などのベンチマークでSOTAを達成した。

**技術的に注目すべき点**は、この成果が比較的**定義が明確で測定が容易な目標**で得られたものであり、より複雑で測定が難しい領域での成果が今後の課題となることだ。

---

## 参考リンク

- [The White House is asking OpenAI to slow roll the release of its new model over safety concerns - TechCrunch](https://techcrunch.com/2026/06/25/the-white-house-is-asking-openai-to-slow-roll-the-release-of-its-new-model-over-safety-concerns/)
- [Anthropic's Mythos mess is only getting worse - The Verge](https://www.theverge.com/ai-artificial-intelligence/957327/anthropic-mythos-fable-ai-trump-administration-negotiations)
- [Patronus AI lands $50M to build 'digital worlds' that stress-test AI agents - TechCrunch](https://techcrunch.com/2026/06/25/patronus-ai-lands-50m-to-build-digital-worlds-that-stress-test-ai-agents/)
- [Import AI 462: Superpersuasion; self-sustaining AI; paths to ASI - Import AI](https://jack-clark.net/2026/06/22/import-ai-462-superpersuasion-self-sustaining-ai-paths-to-asi/)
- [From AGI to ASI - Google DeepMind (arXiv)](https://arxiv.org/abs/2606.12683)
- [First Steps Toward Automated AI Research - Recursive](https://www.recursive.com/articles/first-steps-toward-automated-ai-research)

---

*（本文の情報は2026年6月27日時点のものです）*
