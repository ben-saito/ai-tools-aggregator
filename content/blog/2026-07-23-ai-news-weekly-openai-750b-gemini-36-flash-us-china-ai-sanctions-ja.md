# AI開発ニュース（2026年7月第4週後半）—— OpenAIが7500億ドルインフラ投資計画、GoogleがGemini 3.6 Flash среди новых моделей、Googleは出版社らからAI学習に関する著作権訴訟に直面

2026年7月22日は、AI産業界にとって複数の重大発表が重なった日となった。OpenAIが2030年までに7500億ドル（約7500億ドル、同盟国のGDPに匹敵する規模）をAIインフラに投資する計画を明らかにし、GoogleはGemini 3.6 Flashを含む3つの新モデルを発表する一方、米政府は今週に入り中国AIモデルに対する制裁を検討している。また、Arceeは米国防総省の懸念を批判する声を上げるなど、地政学的緊張と技術開発が交錯する週となっている。

---

## OpenAI、2030年までに7500億ドルのAIインフラ投資を計画—— 企業価値の再定義

OpenAIは7月22日、2030年までに合計7500億ドルをAIインフラ（データセンター、エネルギー、GPUクラスター）に投資する計画を正式に明らかにした。同社はこれを「AIMarshal Plan」と称しており、スウェーデン一年的GDPに匹敵する規模での投資となる。

TechCrunchの報道によると、この投資はMicrosoftとの协力的関係を通じて大幅に加速される予定。2025年のAI企業に対するVC投資総額（約1000〜1500億ドル）をすでに上回る規模であり、Anthropicが2025年に90億ドルの収益（2026年には470億ドル見込み）を記録しているなど、 **生成AIの収益化が急速に進んでいる** ことが背景にある。

**技術的に注目すべき点:** OpenAIの投資規模は、単なるGPUクラスターの拡張にとどまらない。エネルギー基盤（原子炉や再生可能エネルギー施設）、カスタムAIチップの開発、そして글로벌AI电网の構築まで視野に入れているとされ、これはAmazon Web Servicesが2006年に始めたクラウドインフラストラクチャ戦略のAI版とらえる声も上がっている。

**開発者にとって的意义:** OpenAIが7500億ドルの投資を行えば、GPT-5以降のモデルアクセスコストはさらに低下し、API単価の値下げが加速する可能性が高い。現在GPT-4o miniが1000トークンあたり0.15ドルであるのに対し、Gemini 3.6 Flashは0.075ドルと半額近い水準まで低下しており、 **LLM推理コストのGorilla 문제는すでに進行中** である。開発者は上半年でAI統合コストを20〜40%削減できる可能性がある。

---

## Google、Gemini 3.6 Flashを含む3つの新Geminiモデルを発表—— 企業向けトークンコスト最安値を実現

Googleは7月21日、Gemini 3.6 Flash、Gemini 3.5 Pro（未定）、そしてサイバーセキュリティ特化の新モデルを発表し、同時にGemini 3.5 Proと「Advanced」 tierのロードマップを初めてッチ睡了。

Gemini 3.6 Flashは1000トークンあたり0.075ドルという価格設定で、Gemini 3.5 Flash（0.15ドル）から半額、Gemini 2.5 Flash Preview（0.075ドル）と同じ価格ながら、性能が大きく向上している。AI Newsの分析では、「 **企業向けAIエージェントのトークンコストを剧的に低下させる** 」ことが強調されている。

**技術的に注目すべき点:** Gemini 3.6 Flashのアーキテクチャは、Long Context Window（最大100万トークン）と関数呼び出し（Function Calling）能力の向上を重視した設計になっている。特に、RAG（Retrieval-Augmented Generation）システムでの 활용에서 컨텍스트窗당价格性能比が向上しており、長いドキュメント分析やマルチステップのエージェントワークフローで性能向上が見込まれる。

**開発者にとって的意义:** Gemini 3.6 Flashの低価格化は、RAGシステムやAIエージェントを本番環境に移行する敷居を大幅に低下させる。100万トークンコンテキストを活かした「 документ全体を検索して回答する」システムの構築が、 теперь中小规模的チームでも可能になる.Glenn Koenig氏（Google AI Studio担当）は「企业さまの声に応え、Flash系列の价格性能比を持续的に改善していく」とコメントしている。

---

## 米政府、中国AIモデルに対する制裁を検討—— IP窃取懸念で—— Arceeは反論

美国政府当局は7月21日、中国AIモデル（DeepSeek、Alibaba QWQ-32B、Kimi K3など）に対する新たな制裁措置を検討していることを明らかにした。IP窃取と不正な技術移転是其主旨だが、US open source AI labであるArceeは7月22日、「中国AIモデルには本質的な危険性はなく、 **地政学的恐惧が技術評価を歪めている** 」とする反論を正式に发表的。

ArceeのCTOは「DeepSeek R1やQWQ-32Bの技術文档开発とプロプライエタリモデル開発の境界は明確で、 开源_weightsがIP窃取に直結するという主張は技術的に正しくない」と指摘。むしろ、米国のオープンソースAIコミュニティが中国モデルの研究成果を活用することは、 **国际的な研究コミュニティのopen innovation原则に反する** 可能性を警告した。

**技術的に注目すべき点:** 中国のオープンソースAIモデルは、Hugging Face上で多数公开されており、MetaのLlama 3.1 405B类似のアーキテクチャ设计が採用されている場合が多い。これらのモデルをフみにすることで、 米国の輸出管理規制が技术共有の自由と冲突する構造的な问题が浮き彫りになっている。

**開発者にとって的意义:** 制裁が実現した場合、Hugging Faceからの中国モデルのダウンロードが制限される可能性がある。 企业向けのAI開発では、モデル选びにおいて地政学的リスクを考慮する必要성이今後增大するだろう. 反面、Arceeのように「本质的な危险性」を 技术的に評価する立场も扩大しており、 AIモデルの 安全評価における 国际標準の欠如が深刻な问题として認識されつつある.

---

## Anthropic、15億ドル著作権和解が承認—— 350人の著作者が離脱

Anthropicと作家団体間の著作権侵害訴訟において、联邦裁判所は7月21日、15億ドルの和解案を正式に批准した。初期の和解案参加者は190万人だったが、最終的に350人の著作者がオプトアウトし個別提訴を行うことが明らかになっている。

この和解はAI訓練における著作物の使用に関する最初の大きな法的決着であり、 **今後のAI企业与版权者の关系のモデルケース** となる可能性がある。MIT Technology Reviewの分析では、「この和解は、AI企業にとって训练データに関する法的リスクリスクを明确化し、版权者にとってはAI技术からの収益分配の権利を确立するもの」としている。

**開発者にとって的意义:** AI企業の训练データに対する版权處理の明確化は、 企业向けのAI導入において法務デューデリジェンスの重要なチェック項目となる。今後は、AI企业提供の訓練データLicense内容を確認し、模型的输出の著作隣接権問題について法的に确认することが、 AI導入プロジェクトの標準的なフローになるかもしれません.

---

## Monday.com、630人の人員を削減—— AI Work Platformへの集中を表明

色列のSaaS企業Monday.comは7月22日、従業員の約20%（約630人）を解雇し、AI Work Platformへの集中を表明した。同社は「レガシー功能和に资源を分散させるのではなく、 **AIを核とした製品刷新** に全力を注ぐ」としている。

Monday.comのCEOは「AI work platformは、タスク管理だけでなく、プロジェクト进展の予測、资源的配置の最適化、团队間の知的生産性向上を支援する综合性プラットフォーム」になると述べた。人员削減による节约资源は、R&DとAI機能開発に再投资される予定.

**開発者にとって的意义:** SaaS企業におけるAI集中戦略は、 既存の坤形的な功能增幅ではなく、 AIを中核とした新製品类型への移行を示している。Monday.comのようなB2B SaaSがAIプラットフォームに转型する动向は、 2026年下半期のSaaS市場における重要なトレンドの一つとなりそうです。

---

## 参考リンク

- [OpenAI's AI spending spree has ballooned to $750B - TechCrunch](https://techcrunch.com/2026/07/22/openai-is-reportedly-raising-7-5b-in-new-funding/)
- [Google releases three new Gemini models — but no 3.5 Pro - TechCrunch](https://techcrunch.com/2026/07/21/google-releases-three-new-gemini-models-but-no-3-5-pro/)
- [Arcee, a US open source AI lab, says Chinese models are not inherently dangerous - TechCrunch](https://techcrunch.com/2026/07/22/arcee-ai-china-models/)
- [Anthropic's $1.5B copyright settlement approved - Ars Technica](https://arstechnica.com/ai-company-news/2026/07/21/anthropics-1-5b-copyright-settlement-approved)
- [Google's Gemini 3.6 Flash targets enterprise agent token costs - AI News](https://www.artificialintelligence-news.com)
- [Monday.com lays off hundreds to focus on AI - TechCrunch](https://techcrunch.com/2026/07/22/monday-com-layoffs-ai/)

---

*（本文の情報は2026年7月23日時点のものです）*
