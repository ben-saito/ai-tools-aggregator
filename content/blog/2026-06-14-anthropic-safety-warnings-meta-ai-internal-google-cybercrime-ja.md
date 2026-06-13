# Anthropicのsafety warningsが逆効果に——。米政府、最前線モデルの使用を停止　他、AI開発者向け 最新ニュース（2026年6月上旬〜中旬）

2026年6月、AI業界は重大な岐路に立っている。Anthropicがsafetyを理由に制限をかけた最前線モデルが、政府の介入で全面的に停止されるという予想外の展開があった。また、AI Agent間の相互運用性を高める標準化プロトコル動きが加速する一方、GoogleがAIを活用した大規模サイバー犯罪組織を提訴するなど、AIセキュリティの最前線が賑わっている。本稿では今週の最重要トピックを разработчик（開発者）の視点で整理する。

---

## Anthropic、政府に最前線モデルを停止される——safety warningsがかえって火形に

TechCrunch（6月12日）が伝えたところによれば、Anthropicは米国政府から **Fable 5** の使用停止を命じる directive（輸出管理令）を受け取った。対象は米国籍の有無を問わず **世界中すべてのユーザー**——もともとの輸出管理令が標的としていた海外居住者よりもはるかに広い範囲だ。

Fable 5は3日前に公開が遅れたばかりだった。AnthropicはMythosに安全対策を施したバージョンとして公開したが、これは「一般公開するには危険すぎる」として公開が見送られていたモデルだった。ベンチマークテスト（Vals AI調べ）では公開当時 **一般公開モデルの中で最も能力が高い** とされた。

**Anthropicのsafety architectureの核心** は、モデル本体とは独立した **independent classifier systems（独立分類システム）** で保護層を構成している点にある。これによりたとえモデルがrefusal（拒否）をバイパスされたとしても、危険な出力に対する最終的な保護は維持されるはずだった。しかし、政府はこのアプローチを不十分と判断した。

Anthropicは声明で「狭い範囲のjailbreak可能性が、商用モデルを何百ものユーザーに展開した理由を取消す原因にはならない」と反論し「この基準が業界全体に適用されれば、最前線モデルの展開が事実上すべて停止ことになる」との見解を示している。

**開発者への影響**: Anthropicは2026年中のIPOが有力視されており、safetyへの積極姿勢を競合との差別化要因としてきた。その戦略が逆手に取られる形となり、API提供の継続性に不透明感が生まれる可能性がある。Fable 5に依存するアプリケーションは、後方互換性のないAPI変更を見据えた準備が必要だ。

---

## Meta AI、内部崩壊の渦中——「志願兵」6,500人がAI訓練に投入される

6月12日、TechCrunchはMetaのAI部隊に関する内部告発を伝えた。わずか3ヶ月前に設立された約 **6,500人のエンジニアとプロダクトマネージャー** から成るAI部隊の morale（士気）が深刻な水準まで低下している。

問題の背景には、Scale AI（約144億ドル）で知られる **Alexandr Wang** の採用がある。WangはMetaのChief AI Officer兼Meta Superintelligence Labs責任者に就任し、社内の「データラベリング力」で知られる従業員をAI訓練タスクに振り向けた。

**内部告発の内容**:
- 従業員は「入隊（draft）」と呼ばれ、**参加するか退職するかの二者択一** を迫られた
- 主な任務は、AIモデルの訓練用問題集の生成とコーディング問題の作成
- 従業員からは「**刑務所（gulag）** にいるようだ」「大半の仕事が魂を削るもの」という声が上がっている
- 社内で **1,600人以上が署名した嘆願書** が提出されている——これは従業員のクリックやキーストロークをAI訓練データとして使用することに抗議するもの
- Mark ZuckerbergCEOは内部メモで「痛苦を与えた」ことを認め、「ミスを認める」と述じた

**開発者への影響**: MetaのAI戦略が変わる可能性がある。人员的流動はLlama系の今後のリリーススケジュールに影響を与える。また、社内の反対が外部に漏れることは、MetaのオープンソースAI戦略の信頼性にも影を落とす。

---

## Google、AIサイバー犯罪組織「Outsider Enterprise」を提訴——月間100億件の詐欺メッセージをブロック

Googleは6月12日、AIを活用した大規模サイバー犯罪組織 **Outsider Enterprise** を提訴した。TechCrunch（同日）の報道によれば、このグループは **約100万人以上の被害者** を 대상으로、損害総額は **推定数百万ドル** に上る。

**攻撃の規模（Google調べ）**:
- 9,000個の偽造ウェブサイト、**100万以上の不正ドメイン**、2週間で **250万件のSMS** を送信
- 2025年11月〜2026年4月の5ヶ月間にわたり **159万件以上の不正URL** を検出
- 被害状況は **95カ国の金融機関から36,000枚以上のクレジットカード** が流失
- 推定総損失：**19億ドル以上**

注目すべきは、攻撃者が月額200ドル（週あたり88ドル）で利用可能な「**phishing-for-dummies**」と呼ばれるSaaSを活用している点だ。AI помощьにより、技術的な専門知識がなくとも、数分で本物そっくりのフィッシングサイトを作成できる。GoogleのGeminiを含むAIプラットフォームがこのプロセスに悪用されたと主張している。

Googleは「**AI-powered toolsでAI-powered scams戦う**」として，每月 **100億件以上の詐欺メッセージを遮断** する取り組みを進めている。また、AT&T、T-Mobile、Verizonと提携し、FBIとも協調して対応している。

**開発者への影響**: AI生成コードの悪用は新たな脅威向量として注目されている。開発者は 自社のAIアシスタント機能の滥用対策（例：プロンプトインジェクション 防ぎ、API呼び出しのモニタリング強化）を検討する必要がある。

---

## AI Agent標準化ラッシュ——MCP、OQP、Grantexが続々登場

Hacker Newsで話題になったトピックとして、AI Agent間の相互運用性を目指すプロトコル好消息が続いている。

**MCP（Model Context Protocol）の進展**:
- 『The MCP Blueprint』と題された **最初の包括的書籍** がAmazonで出版（2026年2月）
- PEC（Protocol for Compliance Metadata in MCP）を提案する **usepec.eu** が登場——コンプライアンスメタデータの標準化を目指す
- **Preloop**——MCPプロキシで、人間の承認が必要なツール呼び出しを管理
- **Fava Trails**——Jujutsu（JJ）ベースのGitバッグラウンドメモリ for AI agents

**OQP（Open QA Protocol）**:
- AI Agentの actions を検証するプロトコルとして **OranproAi** が提案（4月13日）

**Grantex——AI Agent向け認可プロトコル**:
- IETF草稿が提交された **Grantex**——AI Agentの認可を標準化する開かれたプロトコル

**Agent-to-Agent商業交渉プロトコル**:
- Agent同士の商談を自動化を目指す **a2cn.io** が登場（4月8日）

**Soul Protocol**:
- 携帯可能なAI ID標準を目指す **Soul Protocol**——AI Agentの身份互換性问题に対処（3月17日）

**開発者への影響**: 複数のプロトコルが競合する状況は、XML戦国時代の相似がある。既存のMCPエコシステムとの互換性を保ちながら、必要に応じて他のプロトコルにも追随する柔軟さが求められる。

---

## その他の注目トピック

### Jeff Bezos、Prometheusに12億ドル投資——「AGIエンジニア」開発へ

Bezosが支援する新会社 **Prometheus** が12億ドルの資金調達を実施。同社は「**artificial general engineer（人工通用エンジニア）**」——物理世界向けのAGI——の開発を目指していると伝えられている。

### Mistral、30億ドル調達のうわさ——評価額200億ドル

フランスのAIスタートアップ **Mistral** が、 **30億ユーロ（約20億ドル）** の調達を検討しているといううわさが上がった。2025年のAI热潮以降、最大規模の資金調達の一つとなる可能性がある。

### Meta、Llama以来の大規模モデル「Muse」を公開

Metaが新しいAIモデル **Muse** を公開した（4月8日、CNBC報道）。Alexandr Wang肉の以来初の大型モデル投入として注目されている。

### AIモデル、性能天井に——フロンティアモデル間の差が統計的に識別不能に

Hacker Newsで共有されたデータによれば、主要AIベンチマークにおいて **最前線モデルの性能差が統計的に識別不能** になりつつあるという。各社の差別化が困難になる中、速度やコストといった要素が競争軸として重要度を増している。

---

## 参考リンク

- [Anthropic's safety warnings may have just backfired — the government has pulled the plug on its most powerful AI (TechCrunch)](https://techcrunch.com/2026/06/12/anthropics-safety-warnings-may-have-just-backfired-the-government-has-pulled-the-plug-on-its-most-powerful-ai/)
- [Meta's months-old AI unit is a soul-crushing gulag, say the engineers stuck inside it (TechCrunch)](https://techcrunch.com/2026/06/12/metas-months-old-ai-unit-is-a-soul-crushing-gulag-say-the-engineers-stuck-inside-it/)
- [Chinese cybercrime operation that used AI to scam 'hundreds of thousands of victims' sued by Google (TechCrunch)](https://techcrunch.com/2026/06/12/chinese-cybercrime-operation-that-used-ai-to-scam-hundreds-of-thousands-of-victims-sued-by-google/)
- [AAP – An open standard for verifiable AI agent actions (RFC draft)](https://news.ycombinator.com/item?id=44193172)
- [We audited both MCP SDKs – three classes of boundary-crossing vulnerabilities (Hacker News)](https://news.ycombinator.com/item?id=44193168)
- [LLM Benchmark: Frontier models now statistically indistinguishable (Hacker News)](https://news.ycombinator.com/item?id=44193170)

---

*（本文の情報は2026年6月14日時点のものです。最新情報は各社の公式発表をご確認ください。）*