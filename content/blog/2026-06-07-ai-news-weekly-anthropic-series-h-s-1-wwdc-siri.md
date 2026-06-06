# AI開発週報：AnthropicがS-1提出、$965B企業価値でIPO準備整う — WWDCではSiri大規模刷新、新型プロンプトインジェクション対策も

2026年6月第1週、AI業界は「IPO前夜のAI企業」と「巨大インフラ投資」の2軸で動いた。AnthropicがSECにS-1Draftを提出しSeries H（$65B調達、$965B企業価値）を背景にIPO準備を本格化させる一方、GoogleがSpaceXに月間$920Mを支払う協業を発表。AI經濟が年間2,600%成長を続ける中、開発者が注目すべき技術動向をまとめる。

---

## Anthropic、S-1提出と$965B企業価値でIPO準備が本格化

Anthropicは2026年6月1日、SECにS-1ドラフトを機密提出した。Massive Fundraising Roundを経ての評価額$965Bは、OpenAIに次ぐAI企業としては史上2番目の高さとなる。

**Claude Opus 4.8**は2026年5月28日にリリースされた最新版で、coding、agentic tasks、professional work全ての領域で性能向上を達成。长時間タスク处理的에서도一貫性が向上しており、Claude Codeなどの開発ツール后台での活用事例が増えている。

**Project Glasswing**は2026年6月2時点で約150の新規組織（15カ国以上）に расширение。金融、ヘルスケア、教育といったcritical infrastructure向けの控制強化が评価され、enterprise市場での地盘拡大が加速している。

米兰・韓国オフィス开设も発表され、global展開が加速。IPOに向けた準備态として、investor relationsとPR体制の強化が予想される。

---

## AIインフラ爭奪戦：Google → SpaceX 月間$920M、Railway → AWS挑战

TechCrunchが報じたところによると、GoogleはSpaceXに対して**月間$920M（約1,300億円）**を支払う协業契約を締結した。AI productsへの需要が予想を大幅に上回り、compute capacity確保が急務となっている。

SpaceXのStarlink衛星光ファイバー網は、データセンタ間の高速大容量通信を可能にする。GPU不足が深刻化する中、传统的な海底光ファイバーに代わる選択肢としてAI企业提供間で争奪が激しくなっている。

**Railway**も$100MのSeries Bを受けてAWS挑战を表明。AI-native cloud infrastructureを目指す同社は、2M开发者を獲得しており、营销费用ほぼゼロという异色の成長パターンを続けている。

---

## WWDC 2026：Siri大規模刷新、Apple Intelligence強化

Appleは2026年6月9日（現地時間）にWWDCを開始する。TechCrunchの报道によると、**Siri大幅刷新**が予定されている。

Apple Intelligenceの強化により、iPhone/Mac上でのAI agent活用が进展。開発者向けのApp IntentsとSiriの連携改善や、on-device LLMの性能向上仿びが予想される。WWDCはAppleのAI戦略を示す重要なイベントとなる。

---

## OpenAI「Lockdown Mode」発表：プロンプトインジェクション対策

OpenAIは2026年6月6日、**Lockdown Mode**を発表した。sensitive dataを持つ企业向けのプロンプトインジェクション攻撃対策機能である。

Lockdown Modeを使用してもChatGPTは完全に安全とは限らないが、sensitive dataの共有確率を低下させることを目标としている。agentic AIが外部入力を处理する際に攻击风险が存在することへの対抗策となる。

---

## AI経済，每年2,600%成長 —— Import AIが指摘する「 oversightの难しさ」

Jack Clark氏運営のImport AIニュースレター（2026年6月1日号）で、AI经济の异常な成長が数据的に示された。

Virginia大学とAnthropic、Bank of Canadaの共同研究によると：

- **US compute spending**: $37B（2023）→ $90B（2024）→ $219B（2025）
- **质量補正AI output**: 2024年2,290%、2025年2,271%の成长
- **US AI computing capacity**: 年间200%以上增长

この数据はConventionalなGDP统计では捉えきれない规模的进步が起きていることを示している。政策立案者们に対して「ten-year revenue projections」が过小評価になる风险が指摘されている。

同じ号では、**automated alignment研究**の难しさも指摘された。AIが生成する安全性研究の特徴として：

- AI研究は人間の承認に最適化されている
- エージェントの머니クは人間にとって直感に反することがある
- 多くの研究が相関的に共有される
- 研究卷末が膨大で人間の評価が追いつかない

EUが「model weights」をcompute equivalentに例える規制论や、GPIC datasetの重要性も论じられている。BiohubのESMFold2はAlphaFold 3 outperformとの结果も报告中である。

---

## 次のステップ：開発者が注目すべき3つのポイント

1. **Claude Opus 4.8とagentic tooling**：长时间タスク处理的の向上は、coding agentの使いやすさに直接影响する
2. **AI infra投資の规模**：Google→SpaceX月$920Mという投资规模和は、compute资源の争奪が今後もしばらく続くことを示唆
3. **automated alignmentの难しさ**：AIがAIの安全性研究を始める时代到来しており、開発者は自力の安全检查能力和素质向上が求められる

---

## 参考リンク

- [Anthropic Newsroom](https://www.anthropic.com/news)
- [TechCrunch - OpenAI Lockdown Mode](https://techcrunch.com/2026/06/06/openai-unveils-lockdown-mode-to-protect-sensitive-data-from-prompt-injection-attacks/)
- [TechCrunch - Google will pay SpaceX $920M per month](https://techcrunch.com/2026/06/05/google-will-pay-spacex-920m-per-month-for-compute/)
- [TechCrunch - WWDC 2026 Siri](https://techcrunch.com/2026/06/06/what-to-expect-from-wwdc-2026-siris-highly-anticipated-revamp-and-apple-intelligence-updates/)
- [Import AI 459: AI oversight is difficult](https://importai.substack.com/p/import-ai-459-ai-oversight-is-difficult)
- [VentureBeat - Railway $100M](https://venturebeat.com/infrastructure/railway-secures-usd100-million-to-challenge-aws-with-ai-native-cloud)

---

*本記事の情報は2026年6月7日時点のものです。*