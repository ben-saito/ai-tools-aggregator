# AI開発ニュース 2026年6月第5週：AIは人間より説得力を持つ、ASIへの道標

2026年6月第5週は、AIの基礎研究と社会的影響に関する重要な一周間となった。オックスフォード大学などの研究によると、最先端AIモデルは人間 전문가조차보다高い説得力を持つことが実証された。また、Google DeepMindがAGIからASI（人工超知能）への経路を描いた論文を発表し、brain emulation（brain emulate）技術の現状と可能性を分析したレポートも公开发表された。本weeklyでは、これらの研究详情と、AIの persuasion 能力が社会に与える影响についてまとめる。

---

## AIは人間より説得力を持つ——6,923人対象の大规模实验

オックスフォード大学、英国AI安全保障研究所、スタンフォード大学、LSEの研究者からなる国際チームが、AIシステムの说服能力について大规模な实验を行った。結果は明确的だった——**AIシステムは人间より優位に説得力を持つ**。

### 实验の詳細

4つの实验で18,978件の对话、6,923人が参加了。主な发现は以下の通り：

- **Study 1（説得）**: AIは「无作為な一般人」「大会选考通过的一般人」「精英辩论者」のいずれよりも高い説得力を示した
- **Study 2（人间教练）**: 43名の精英辩论者にAI教练ツールを提供した結果、性能は向上したが、AIに胜る者はいなかった
- **Study 3（AI制約）**: AIを人间的速度・文章长さに制限すると、最强の人间比较者と差はなくなった
- **Study 4（実世界・実金钱）**: 英国のプロのcanvasersとAIを比較——AIは3倍効果的な寄付金を集めた

最も强有力的なpersuadersは **Opus 4.1** と **Opus 4.6** で、以下は OpenAI（GPT-4o, GPT-5.4）、Google（Gemini 2.5 Pro）、xAI（Grok 4.20）だった。

### なぜAIはより説得力があるのか

研究者が特定したAIの优势の来源は「**より大量の情报を急速に展开する能力**」だ。人間の说服者が人间らしい速度と分量で応答することを求められる中、AIはこれらの制约없이对话を行うことができる。coach後人间はAIを制约条件下でようやく追いつくことができるが、制约なしでは明らかにAIが优势となる。

### 社会的意味

この发现は重大的だ。AIが人间より説得力を持つ場合、「すでに powerful な actors の影响力がさらに集中する」可能性がある。另一方面では「pro se litigants（自分に不利な诉え代表人）、小さな charities、grassroots activists」といった资源不足のactorsが、よりestablishedで资金豊かな竞争相手と対等に竞い合うことも可能になる。

**研究者は结论づけている**——「AIがこれらのシステムにアクセスできることが扩大するにつれ、问题是もう『AIは人间に胜るか』ではなく、『どのように、どこで、だれのためにこの能力が使われるか』である」

---

## 自己持続型AI——いつ人间不再需要するのか

Asterisk Magazineのインタビューで、AIの自己持続型（self-sustaining）AIの実現时期について意见が交わされた。

### 定義

Ajeya Cotra（METR）は自己持続型AIを以下のように定义する：

> 「工場、矿山、fab、机器人など、物理的なインフラストラクチャと統合されたAIシステム——人間の认知的・身体的inputsなしにその种群の成长を維持できるもの」

### 推定时期

- **Ajeya Cotra**: 10年以内（2036年までに可能出现）
- **Timothy B. Lee**: 20年以内に10%未满、10-20%の確率で「永远不会发生」、メディアンは50年

### 暗黙知の壁

Leeが指摘する大きな壁がある——「半导体産業の全从业员が姿を消したら、机器と教科书は残っても、人材がいなくなる」という问题だ。たとえ教科书があっても、「tacit knowledge（暗黙知）」——机器の中に埋め込まれた経験的知识——が失去する风险がある。

Cotraはこれに対して「RLで训练されたAIシステムがそのような暗黙知を獲得できる可能性がある」と反论している。

### 次の2-3年で确认すべき指標

- **Ajeya**: 「robot handsの改善曲线」と「humanoid robot製造速度」の2つの指标关注
- **Timothy**: 「humanoid robotの数、能力、特にコストと修理可能性」

---

## DeepMind、AGIからASIへの路径図を発表

Google DeepMindの研究者が、AGI（人工犬知能）からASI（人工超知能）への转变について论述した论文を公开发表した。

### ASIの定义

> 「ほとんどすべての任务と领域で、大きな人间专家集团の性能を上回るシステム」

单一のASIが「数百万のインスタンスの集合体」として并行动作する可能性もある。

### ASIの実現路径

**1. コンピュート・モデル・データのスケーリング**
現在のアプローチの大规模化が有効な可能性がある。ただし、エネルギーとデータの供给に制约があり、「スケーリングが diminishing returns に到达するかどうか」は不明。

**2. アルゴリズムのパラダイムシフト**
Transformer、MoE（Mixture-of-Experts）のように领域を飞跃させる革新的发明があり得る。test-timeのadaptive computationやcontext windowの制约克服などが期待される。

**3. 再帰的自己改善（RSI）**
AIシステムが自身の后继システムを構築できる場合、AGIからASIへ急速に转变する可能性がある。现在のAIシステムは「共作成RSI」ループに入っているが、「パラダイムを変えるような创造力」はまだ见られない。

**4. グループエージェント形成**
多くのAGIが协调して複雑な构造体を形成し、partsの合计を上回る能力を持つ可能性がある（人间がspace stationを建设するようなもの）。

### 結論

> 「今後10〜20年以内にAGIを通じてASI領域にcruising pastする可能性は简单には dismissal できない」

---

## Brain Emulation——硅素上の脳は実現可能か

175页のレポート「The State of Brain Emulation Report」が、brain emulationの技術要件と実現可能性を分析した。

### 3つの要件

1. **脳活動の記録**
   - 1980年代：5細胞、200回/秒（~10³ データポイント/秒）
   - 現在：100万細胞、20回/秒（10⁶）
   - マウス脳には10⁹/秒、人間の脳には10¹²/秒必要

2. **脳の配線再構成**
   - 最初のworm connectome（1980年代）： neuronあたり約$16,500
   - 現在：苍蝇などでneuronあたり約$100

3. **データを使ったデジタルモデリング**

### タイムライン

- **ゼブラフィッシュ**（neuron数100万以下）：3〜8年で説得的なbrain emulationが可能
- **マウス**：2030年代に約10億ドル
- **人間の脳**：2040年代後半に数十億ドル

> 「このエッセイの読者は、コンピュータの上で初めて走る人間の脳を見ることに合理的に生きれるかもしれない——今後数年ではなく、おそらく今后数十年のうちに」

ただし、brain emulationは本質的にデジタルプロセスではない——「化学と物理が時間要件を規定する物理的なbiological tissueの操作が含まれる」という制約がある。

---

## AIは生産性を向上させるか——微視的研究の集計

UChicago BoothのAlex Imas教授が、AIの生産性への影響を総合的に分析した。

### 主な発見

- **微視的研究**では多くの場合に生産性向上が確認されている（一部で50%以上）
- **集計生産性統計**にはまだ明確に現れていない

### なぜマクロに見えないのか

1. **AI導入の内生性**: 実験段階で標準的なpracticeが確立されていない
2. **O-ring自動化**: 仕事には多样的taskが含まれ、AIが助力できる分野とできない分野がある——AI助力可能な分野に人間の労働力が集中し、集約的な speedup が見えにくくなる
3. **初期投資による効率低下**: 変革的なGPTの adopter は、短期的にmeasured productivityが低下する傾向がある（投資・再編成・学習に資源が割かれるため）

### なぜ重要か

現在的な巨大投資（年产数千億ドル）と集計収益（数百億ドル）の괴리는、「AIが広範で持続的な生産性向上をもたらし、経済をtrend以上に成長させる」かどうかのbetだ。そうなれば、AIは自己了のコストを返済できる可能性がある。

---

## AI Resistantな技術評価——Anthropicの挑戦

Anthropicが社の技術面接がClaudeに突破される問題についてblogで述べた。

同社は2024年初頭から、候補者に「simulated accelerator用のコードを最適化」するtake-home testを採用。1,000人以上が受験し、このtestで採用されたエンジニアがTrainium clusterの立ち上がりやClaude 3 Opus以来的全モデルの出荷に携わった。

しかし、各Claudeモデルの進化によりtestが「break」された：

- **Claude Opus 4**: 与えられた時間制約内でほとんどの人間志用者より高性能
- **Claude Opus 4.5**: 上位志用者の成績とも同じレベルに

制限時間なら人間ははまだAIに勝てるが、take-home testの制約下ではtop candidateと最強モデルの出力が区別できない状態になった。

Anthropicの解決策は **Zachtronicsのプログラミングパズルゲームにインスパイアされた「より奇妙な」take-home test** を設計することだった。これは「分布から大きく外れる」ことでAIを出し抜く試みであり、同時に人間候補者の評価としてのsignalを維持している。

---

## 参考リンク

- [AI systems out-persuade expert humans (arXiv)](https://arxiv.org/abs/2606.16475)
- [How Long Until AI Doesn't Need Humans?, Ajeya Cotra, Timothy B. Lee (Asterisk Magazine)](https://asteriskmag.com/issues/14/how-long-until-ai-doesn-t-need-humans)
- [From AGI to ASI (Google DeepMind)](https://arxiv.org/abs/2606.12683)
- [When AI Builds AI: Findings From a Workshop on Automation of AI R&D (CSET)](https://cset.georgetown.edu/publication/when-ai-builds-ai)
- [Designing AI-resistant technical evaluations (Anthropic Engineering Blog)](https://www.anthropic.com/engineering/AI-resistant-technical-evaluations)
- [Building Brains on a Computer (Asimov Press)](https://press.asimov.com/articles/brains)
- [What is the impact of AI on productivity? (Alex Imas)](https://aleximas.substack.com/p/what-is-the-impact-of-ai-on-productivity)

---

*（本文の情報は2026年6月29日時点のものです）*