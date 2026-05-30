# Anthropicが650億ドル調達で評価額9650億ドルへ — AIチップ業界が加熱

2026年5月最終週、AI業界は大型資金調達とモデル強化のニュースが連続的に舞い込んだ。Anthropicの650億ドル（約9700億円）シリーズH調達を筆頭に、Groqの6.5億ドル調達計画、XCENAのメモリ特化型チップへの1½億ドルの賭けなど、AIインフラを巡る投資が加速している。

---

## Anthropic、9650億ドルの評価手でIPO前夜に

Anthropicは5月28日、65億ドルのシリーズHラウンドを完了したとTechCrunchが報じた。企業価値は9650億ドル（約144兆7500億円）に達し、事実上1兆ドル（約150兆円）に迫る評価となった。報道によれば、これはIPO前の最終私募資金調達となる可能性が高い。

Anthropicは同日、新モデル **Opus 4.8** も発表している。注目的是、「**Dynamic Workflows**」と命名された新ツールだ。これは複数のサブエージェント（subagent）を統合的にOrchestrationする機能で、エージェント間通信の複雑な調整を1つのワークフローとして抽象化する。AnthropicはClaudeシリーズで知られた安全性への強調を継続しつつ、**マルチエージェント構成**への対応を明確に示したのは今回が初めてだろう。

---

## Groq、推論特化型AI Chipで6.5億ドルを計画

NvidiaがDeepSeekへ200億ドル規模の「準買収（not-acqui-hire）」を実施したわずか数日后、Groqが6.5億ドルの資金調達を計画しているとAxiosの報道那样5月29日にTechCrunchが伝えた。

Groqは従来、高速推論用ASIC開發で知られていたが、足元ではハードウェアからAI推論サービスへと事業軸足を移しつつある。「推論（inference）」とは、訓練済みモデルにプロンプトを入力し、応答を生成する工程を指し、昨今のLLM需要の中で訓練よりもむしろ推論コストの方がスケール時のボトルネックになるとして注目度が上がっている。

Groqの戦略変容は、**AIチップ業界の構造変化**を映している。訓練用GPU需求で肥大化したNvidia型ビジネス versus 推論特化型低成本アーキテクチャという構図が、明確に分化してきた phase にある。

---

## XCENAがMemory Architectureに1.35億ドル — 「AIのボトルネックは計算力ではない」

韩国スタートアップのXCENAは5月29日、1.35億ドル（約202億円）を570Mドルの評価手で資金調達完了を発表。TechCrunchによれば、同社のbetは「AIの真のボトルネックは計算力ではなくメモリにある」という逆張りだった。

従来のAI Chip設計では、NvidiaのGPUに代表されるように計算ユニット（CUDAコア等）の集積度が性能のkeyだった。だがXCENAを含む新兴勢は、大規模モデルの推論時に必要となる**メモリの帯域幅と容量**こそが實際上の制約になっていると主張する。HBM（High Bandwidth Memory）規格との親和性、カスタムメモリ階層設計など、アプローチは多様化が進んでいる。

---

## Coders Refusing to Work Without AI — 開発者の「AI依存」が技術的負債を生む？

興味深い話題として、5月29日に掲載されたもう一つの記事は、開発者们がAIツールなしでは開發を拒否する傾向增强を報じた。

研究者の警告引人注目は**: AIがコード作成速度を向上させる一方、生成されるコードの質が比例して改善しているわけではない**这一点だ。AI生成コード缺乏のテスト、不整合な Architecture 判断、潜在的なセキュリティ脆弱性といった**技術的負債**が、AI活用が広がる中で蓄積されるリスクが指摘されている。

これはAI-Assisted開発を日常的に行うソフトウェアエンジニアすべてにとって无視できない警鐘である。AIツール依赖会导致基础编码能力の低下反过来、开发자들의長期的な競争力にも影響を与えかねない。

---

## インターネットは「機械のために」再構築されている

5月28日の别記事によれば、AWS、Cloudflare、Fastlyなどの巨大Cloudプレイヤーが**AIエージェント時代に最適化したインフラ**の再設計を進めている。従来のインターネット Traffic は人間の浏览を前提に设计されていたが、AI Agent がAPIを呼び出し、Webページをスクレイピングし、决策和政策を実行する时代では、そのパターン本质的に異なる。

具体的に提唱されているのは、**機械可読なAPIの標準化**、エージェント向けCache戦略、强化されたBot制御機構など。Cloudflareは既にWorkers AIプラットフォームで这股方向の代表例であり、AWSはBedrockを通じて Agent 向けサービスを提供している。

---

## 企業AI検索のGlean、売上3億ドル突破

企業向けのAI搜索スタートアップGleanは、年間经常性売上が3億ドルを突破。競合がGoogle、Microsoft、Salesforceなど大企業に奪われる环境下、それでも年間3倍の成長を維持している。

Gleanの成功の背景には、**「AI予算のスリム化」という逆説的な訴求**がある。企业はAI導入コスト膨胀に苦慮する中、Gleanの検索プラットフォームれば既存のSaaSアプリケーション全体に跨る企业内知識を低コストで活用でき、投資対効果の説明が容易になる。

---

## まとめ：AI業界の「M&A・資金調達編」は依然として活況

| 企業 / スタートアップ | 調達額 | 看点 |
|---|---|---|
| Anthropic | 65億ドル | 企業価値9650億ドル、Opus 4.8でマルチエージェント対応 |
| Groq | 6.5億ドル（計画） | 推論特化型 Chipへ事業軸足移移 |
| XCENA | 1.35億ドル | メモリ特化型設計でAIボトルネック理論 |
| Glean | ー（売上3億ドル達成） | 企業AI搜索で成長を持続 |

これらの動きは、**AI業界が「訓練」→「推論」→「Agents活用」→「インフラ再設計」** という段階を経次的に進行していることを示している。特にAnthropicの650億ドル調達は、OpenAI対抗としての位置づけもさることながら、Claude OS・Agents戦略への大型投資が念頭にあると見られる。

2026年下半期のIPO市場競争激化が予想される中、各社の資金調達・技術開発の動向から目が離せない。

---

## 参考リンク

- [Anthropic raises $65 billion, nears $1T valuation ahead of IPO - TechCrunch](https://techcrunch.com/2026/05/28/anthropic-raises-65-billion-nears-1t-valuation-ahead-of-ipo/)
- [Anthropic releases Opus 4.8 with new 'dynamic workflow' tool - TechCrunch](https://techcrunch.com/2026/05/28/anthropic-releases-opus-4-8-with-new-dynamic-workflow-tool/)
- [After Nvidia's $20B not-acqui-hire, AI chip startup Groq reportedly raising $650M - TechCrunch](https://techcrunch.com/2026/05/29/after-nvidias-20b-not-acqui-hire-ai-chip-startup-groq-reportedly-raising-650m/)
- [Coders are refusing to work without AI — and that could come back to bite them - TechCrunch](https://techcrunch.com/2026/05/29/coders-are-refusing-to-work-without-ai-and-that-could-come-back-to-bite-them/)
- [The internet is being rebuilt for machines - TechCrunch](https://techcrunch.com/2026/05/28/the-internet-is-being-rebuilt-for-machines/)
- [XCENA secures $135M at $570M valuation betting on memory as AI's real bottleneck - TechCrunch](https://techcrunch.com/2026/05/29/xcena-secures-135m-at-570m-valuation-betting-on-memory-as-ais-real-bottleneck/)
- [Glean's top line crosses $300M as AI budget cutting becomes its major selling point - TechCrunch](https://techcrunch.com/2026/05/28/gleans-top-line-crosses-300m-as-ai-budget-cutting-becomes-its-major-selling-point/)
- [What happens when companies become too AI-pilled? - TechCrunch](https://techcrunch.com/video/what-happens-when-companies-become-too-ai-pilled/)

---

*本記事の情報は2026年5月30日時点のものです。*
