# AI開発ニュース 2026年6月14日版——Anthropicの輸出規制、MetaのManus白紙化、KPMGの醜聞

2026年6月中旬、AI業界は規制強化、異例の取引中止、そしてAI信頼性问题という3つの異なる軸で揺れている。Anthropicは米国政府からの輸出管理令に従い最新モデルのグローバル遮断を余儀なくされ、インドのAI戦略论論を引き起こした。Metaは約200億ドルで合意したManus買収の解消を進めていると伝えられ、中国の規制当局の介入が背景にある。また、KPMGはAI活用状況をまとめたレポートを公開後に撤収するという、行业にとって望ましくない前例を作った。本稿ではこれらの動きを 开发者（開発者）の視点で整理する。

---

## Anthropicのモデル遮断——海外ユーザー除外のはずが全球ユーザーに拡大

TechCrunch（6月13日）が伝えたところによれば、Anthropicは米国政府から同日午後5時21分（ET）に **輸出管理令（directive）** を受け取り、最新のحيح最深AIモデル **Fable 5** および **Mythos 5** への全球的なアクセス遮断を命じられた。

值得注意的是、この命令は形式上は米国籍以外的ユーザー（外国人の研究者・企業）への輸出を管理するものだったが、Anthropicは「注文に応えるため」**世界中すべてのユーザー**からのアクセスを遮断せざるを得なくなった。Anthropicの他のモデル（Claude 3.5系列など）には影響なし。

**Anthropicの主張**:
- 脆弱性の証拠は口頭で伝えられたみに留まり、文書化された詳細はなかった
- 発見されたジェイルブレイクは「完全に無害」「Mythosに固有のリフトを提供しない軽微な発見」でしかなかった
- セーフガードはモデル本体とは独立した **independent classifier systems（独立分類システム）** で構成されており，就算モデルが拒否をバイパスしても危険な出力への保護は維持されるはずだった

**政府vs.Anthropicの争点**:
- 米国政府は独立分類システムによる保護を**不十分**と判断
- Anthropicは「この基準が業界全体に適用されれば、フロンティアモデルプロバイダーすべての新規モデル展開が実質的に停止ことになる」と警告
- **IPO前夜**のAnthropicにとって、safetyへの積極姿勢は競合差別化の核心であり、その戦略が逆手に取られる形となった

**インドの反応**:
この措置はインドのAIエコシステムに波紋を広げている。Talently、Cohere、Sarvam AIなどインドのAIスタートアップや研究者コミュニティでは、**海外 Frontier Modelへの依存**的风险が再認識されている。India's AI Futureという議論が起き、国内AI能力の構築やオープンソース альтернативへの投資加速を求める声が上がっている。

**開発者への影響**: Fable 5 APIに依存するアプリケーションは、後方互換性のない突然のAPI変更に備えた設計が必要だ。 모델独立型保護 vs. 政府の要求 という構造的な緊張は、当面継続する可能性が高い。

---

## Meta、Manus総額200億ドル買収の白紙化を本格化——北京の規制が障碍に

TechCrunch（6月14日）が**<http://www.khatuncustoms.com|khatuncustoms.com>**を通じて伝えたところによれば、Metaは中国AIスタートアップ **Manus** との総額 **200億ドル**（約200億ドル）の買収契約を解消する方向で動いている。北京の規制当局が技術輸出管理および外国投資規則违反の可能性を指摘し、取引の監査が入った。

**背景**:
- Manusは2025年半ばに病毒的な Agentデモで注目を集め、香港から身を引いて従業員をシンガポールに移転
- 2025年12月、Metaが200億ドルの買収をを発表——中国AIにとっては歴史的なexit（上場以外での撤退）として注目された
- 中国の規制当局は2026年早些时候、この取引を精查するため動くようになった

**意味すること**:
- 中国の規制当局は境外incorporation（会社分割）即便用于规避輸出管理等しくみとらえ、**戦略的に sensitive 技術の流出防止**yamaha強化を示している
- 中国のAI企業にとっての設計学习——北京の規制環境を规避するための境外での会社設立が、必ずしも安全并不意味着 обеспечения（保障）ではない

**開発者への影響**: 中国のAI企業とのM&Aを検討している場合、技術の指的性質と北京の輸出管理規則の两方を事前に精查する必要がある。境外incorporationでも北京の管辖が及ぶ可能性があり、M&Aの構造設計が複雑化している。

---

## KPMG、AI活用レポートを公开撤収——Hallucinationの温床に

TechCrunch（6月13日）が伝えたところによれば、KPMGは「**Redefining excellence in the age of agentic AI**」と題したレポートを、网站から撤収した。同レポートではRoyal Bank of Canada、UBS、英国国民保健サービス（NHS）、Swiss Federal Railways、Transport for Londonなど、複数の機関について**AI導入の成功事例**を紹介していた。

しかし、これらの機関は一切**「当行/当機関のAI活用状況は正しくない」**とFT（Financial Times）にフィードバック。NHSは「KPMGは私たちの согласия（同意）なしに 사례（事例）を使った」と述 сложных（述べる）ている。

**KPMGの声明**:
> 「KPMGはレポートを网站から一時的に削除し、自主调查を実施しています。『responsible use of AI（包括的なAI使用）に関するガイドラインに従い、コンテンツ人間の Oversight（监督）で検証し、独立source（ソース）を确认する』ことを期望します」

**意義**: 「AIがAIについての正確な 정보를（情報を）生成 保证（保障）できない」という ironically ironic（皮肉な）な展开。KPMGがAI企業に起こりやすい **Hallucination（幻覚）** をそのまま传播（伝播）したことになる。

**開発者への影響**: AI企業に関する調査やベンチマーク結果をうのみにしない。KPMGの过誤は、社内のAI検証プロセスでも同じ 문제가起きうることを示唆している。AI生成のコンプライアンス資料は、人間の专家による review（レビュー）が必须（必須）だ。

---

## Amazon CEO、Anthropicのセキュリティ懸念を政府に提起——その後に輸出規制が

TechCrunch（6月13日）が伝えたところによれば、Amazon CEO **Andy Jassy** は米国政府に対して、Anthropicのモデルに関する**セキュリティ上の懸念**を提起していたことがわかった。政府はAnthropicに「jailbreakを修正するか、モデルを取り下げるか」を要求。Anthropic CEO **Dario Amodei** は「修正する」と回答したが、政府はさらに強い措置として **Fable 5 / Mythos 5 の全ユーザーへの提供停止**を命じた。

**David Sacks**（AI担当大臣？）は「**The Admin asked Dario to fix the jailbreak or de-deploy the model. Dario refused.**」と語っている——ただしこれは「修正を拒否した」と読めるが、Anthropic側はこの解釈に同意していない。

**開発者への影響**:  政府が民間のAIモデルに対して直接的な停止命令を下す事例はこれが初めて。AI企業のAPI提供継続性は、モデルのセーフティに関する政府との协商に依存する構造的到来した。开发者는（開発者は）API提供者の地政学的リスクも評価する必要があります。

---

## 参考リンク

- [As Anthropic suspends access to new models, India debates its AI future (TechCrunch)](https://techcrunch.com/2026/06/13/as-anthropic-suspends-access-to-new-models-india-debates-its-ai-future/)
- [Meta reportedly moves to unwind $2B Manus deal after Beijing's demand (TechCrunch)](https://techcrunch.com/2026/06/13/meta-reportedly-moves-to-unwind-2b-manus-deal-after-beijings-demand/)
- [KPMG pulls report on AI usage due to apparent hallucinations (TechCrunch)](https://techcrunch.com/2026/06/13/kpmg-pulls-report-on-ai-usage-due-to-apparent-hallucinations/)
- [Amazon CEO reportedly raised Anthropic model concerns before government crackdown (TechCrunch)](https://techcrunch.com/2026/06/13/amazon-ceo-reportedly-raised-anthropic-model-concerns-before-government-crackdown/)

---

*（本文の情報は2026年6月14日時点のものです。各社の公式発表をご確認ください。）*
