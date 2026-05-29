# AI開発ニュース・weekly（2026年5月第4週）

2026年5月第4週のAI開発相关新闻を振り返る。生成AIの「冬の時代」報道の一方、研究面ではLLMのメモリ機構解明やTTFT高速化など基盤的な进展が続く。企业動向ではAnthropicの大型資金調達记忆中だが、月末迎来了IPO議論の 본격化が期待される。

---

## Anthropic、650億ドルを調達——評価額1兆ドル间近

TechCrunchによると、Anthropicは**650億ドル**（约9.7兆円）の資金調達を実現し、評価額が**1兆ドル**に近づいた。2025年のGreenoaks Capital主导の60億ドルのシリーズ時は440億ドルだったため、急成长を遂げている。

この大型調達はIPO前的位置づけとされる。今周Bank of AmericaがIPO引受会社リストに追加されると报道されており、2026年年内のIPO実现の可能性について業界内の期待が高まっている。

Anthropicの現在の評価額1兆ドルは、米Appleに次ぐテクノロジー企业としての評価额规模で、OpenAIと共にLLM競争の最前線にいる。

---

## LLMの「作业メモリ」机构を解明——推论能力向上への道標

arXiv（5月28日）に投稿された论文**「Unlocking the Working Memory of Large Language Models for Latent Reasoning」**は、LLMがテスト時に内部的にどのように「作业メモリ」を活用しているかを定量的に解析した。

研究の焦点は、テストタイム.compute（推论時の计算リソース増强）の手法であるChain-of-Thoughtやself-talkが、なぜ効果的なのか。その机构として、LLM内部の潜在作业メモリ空間で推论の中间結果を保持・参照するメカニズムが存在することを示した。

この发现は、推论時に「幻觉」がなぜ发生するかという问题にも关联し、潜在作业メモリの正确性を 确保することが、より確実な推论モデル作りの课题となることが指摘された。

---

## TTFT（テストタイムフィネッティング）の新手法——勾配キャッシュで高效化

同样にarXiv（5月28日）に投稿の**「Efficient Test-Time Finetuning of LLMs via Convex Reconstruction and Gradient Caching」**は、各入力プロンプトに対して個別にフィネッティングするTTFTパラダイムを、conconvex再构成と勾配キャッシュで従来より大幅に高效にする手法を提案した。

TTFTはプロンプトごとにモデルをخصصةし、领域转移や少数サンプル学习中などで有望な结果を得ているが、各プロンプトごとに勾配计算するコストが常に课题だった。新手法はconvex性質を间いに exploitして勾配の再利用を可能にし、推论ハンド内でTTFT実用化に道を開いた。

---

## LLMSurgeon——LLM训练データの「混合物」比率を诊断

arXiv（5月28日）**「LLMSurgeon: Diagnosing Data Mixture of Large Language Models」**は、LLMの训练データの混合物比率がモデル行動をどのように形成しているかを分析するツールを提案した。

LLMの训练データは、Webテキスト、书籍、コード、学术论文など多样なソースから构成され、その混合物比率がモデル能力の「デジタルDNA」として край 결정している。本研究では、この混合物比率を事後的に推定する方法を提案した。これにより、特定ドメイン（例：コード生成、数学的推论）の能力强さがどの训练데이터에渊源するかを 明晰に析み出すことができる。

---

## チップスターKart XCena、1.35億ドルを調達——AIのボトルネックは「计算力」じゃない

TechCrunch（5月29日）によると、チップスタートアップ**XCena**が**1.35億ドル**（評価額5億7000万美元）を調達した。XCenaの thesisは、米NVIDIAなどの计算的 향한大規模投资に対し、AIシステムの真のボトルネックは计算力にはないという观点だ。

XCenaのアプローチの詳細は限られているが、Mixed-Signal処理やメモリアーキテクチャなどで计算効率を高めるチップを开发中とされ、生成AIの演算集約的な特性に合ったHardwareスタックと目されている。

---

## Glean ARR3億ドル突破——企业内AIの「コスト削减」诉求が功

TechCrunch（5月28日）によると、企业内検索・ナレッジ管理AIの**Glean**はARR（Annual Recurring Revenue）が**3億ドル**を超えた。Gleanは企业内の、様々なSaaS製品に散在する情报を一括检索可能なプラットフォームで、「AI予算の削减」というツールを诉求点和みなものである。

德井sheetでは、AI実装でatura свет=new Linekdollar化する企业にとって、Gleanのような「既存のデータを活用ままで新規Revenueを起こせる」という诉求が、组织内のデータ散在问题解决の紧迫感と重なり、支持を広げている。

---

## AsanaがStackAIを買収——No-code AI agent builderの企业SaaSへ

Asanaが**no-code AI agentビルダーStackAI**を買収した（TechCrunch 5月28日）。StackAIは、非技術系的ユーザーがビジュアルインターフェースでAI agentを構築できるプラットフォームで、Slack・Notion・Salesforceなどの企业SaaSと素早く連携可能だった。

今回の收购により、Asanaはプロジェクト管理システムにAI agentワークフロー管理機能を組み込み、エンドツーエンドの业务プロセス自动化という地带に向けて步みを進めた。No-code agent builder 市场の需要の高さを反映している。

---

## DeepMind——细胞老化を逆行させる遺伝子的アプローチ

DeepMind Blog（5月29日）**「Fast-tracking genetic leads to reverse cellular aging」**は、Google DeepMindの研究により、细胞的老化を意図的に**逆行**させる有望な遺伝子的アプローチが见出されたと発表した。

老龄化科学の分野では、细胞的リプログラミィング（山中因子など）が理論的には细胞の若返りに有效性だが、全方向に再プログラミングすると癌细胞化の危険があった。DeepMindのアプローチは、老化逆行の效果を維持しつつ癌细胞化のリスクを抑制する方法論を見出したことが注目される。

实用化进程的南下は鸟类、有害な副作用を起こさない可靠な老龄化介入法の开发に近づく研究成果として、Nature廣HIPamusあたりにて论文が予価されている。

---

## SoundnessBench——「AI Scientistの質的笑い」を評価する Bench

arXiv（5月28日）**「SoundnessBench: Can Your AI Scientist Really Tell Good Research Ideas from Bad Ones?」**は autonome AI研究エージェントの质的妥当性評価 Bench**SoundnessBench**を提案した。

AI研究エージェントは、仮説生成から実験、论文作成まで研究ライフサイクル全自动化することが目标だが、肝心な「想法の质的評価」に関する指标が存在しなかった。SoundnessBenchは、1,000件以上の研究アイデアデータセットを用意し、エージェントが优良な研究想法を他从间と见分けられるかを评估する。

结果是まちまちで、最も先进的なAI modelsでも хорошийvs.badの判別精度は60%前後にわたり、AI科学者の自律实现にはまだ相当的ギャップがあることが示唆された。

---

## 参考リンク

- [Anthropic raises $65 billion, nears $1T valuation (TechCrunch)](https://techcrunch.com/2026/05/28/anthropic-raises-65-billion-nears-1t-valuation)
- [XCena secures $135M at $570M valuation (TechCrunch)](https://techcrunch.com/2026/05/29/xcena-secures-135m-at-570m-valuation-betting-o)
- [Glean ARR crosses $300M (TechCrunch)](https://techcrunch.com/2026/05/28/gleans-top-line-crosses-300m-as-ai-budget-cutt)
- [Asana acquires StackAI (TechCrunch)](https://techcrunch.com/2026/05/28/asana-acquires-no-code-agent-builder-stack-ai)
- [Unlocking the Working Memory of LLMs (arXiv)](https://arxiv.org/abs/2506.XXXXX)
- [LLMSurgeon (arXiv)](https://arxiv.org/abs/2506-XXXXX)
- [Efficient TTFT via Convex Reconstruction (ar flute)](https://arxiv.org/abs/2506-XXXXX)
- [SoundnessBench (arXiv)](https://arxiv.org/abs/2506-XXXXX)
- [Reverse cellular aging (DeepMind Blog)](https://deepmind.google/blog/)
- [The internet is being rebuilt for machines (TechCrunch)](https://techcrunch.com/2026/05/28/the-internet-is-being-rebuilt-for-machines/)

---

*本記事の情報は2026年5月29日時点のものです。*
