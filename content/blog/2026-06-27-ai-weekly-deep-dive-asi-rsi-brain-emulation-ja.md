# AI開発ニュース：ASIへの道と腦問題最前線（2026年6月第4週）

2026年6月第4週は、AIの「先」についての戦略的議論が加速した1週間だった。Google DeepMindのASI（人工超知性）パスファインディング、Recursiveな自己改善の実証実験、腦エミュレーションの現実的ロードマップなど、長期的なAIの行く末に触れる研究が連続して発表された。本稿ではこれらの技術的詳細を開発者視点で整理する。

---

## Google DeepMind: AGIからASIへのパスファインディング

Google DeepMindの研究チームは6月、arXivに**「From AGI to ASI」**と題した論文（arXiv:2606.12683）を公开发表した。ASI（Artificial Superintelligence）を「几乎すべての知性タスクでlarge human-expert collectiveの性能を超えるシステム」と定義し、AGIからの移行経路を体系的に分析している。

### ASI到達への3つの主要経路

**1. スケール（Compute / Model / Data）**

現在のTransformer + Mixture-of-Expertsアーキテクチャの継続的スケールアップが有効な経路として挙げられている。ただし、所需的エネルギーとデータ供給が限界要因になる可能性。「これまでのスケーリングの実績に焦らず、限界到来も排除できない」と研究チームは注意を促している。

**2. アルゴリズムパラダイムシフト**

Transformer や MoE のように全场を飞跃させる新アーキテクチャの登场による経路。適応的テストタイム計算やコンテキストウィンドウの制約克服などが具体的な候補として挙げられる。「一般相対性理論の発明前にそれを予見することの难しさ」と同じくらい予見困难との留保付き。

**3. 再帰的自己改善（RSI）**

AIシステムが自らの後継者を設計・構築する能力。現在のAI開発は「共創的RSI」状态にある——AIは人間研究者を加速しているが、自律的にパラダイムを変えるほどの创造力はまだ示していない。

重要なのは、ASI実現のタイムラインとして「今後10〜20年是realisticな範囲」と論文が結論づけていること。完全なRSIの達成は現時点では未確定だが、排除もされていない。

---

## Import AI 462: RSIの実証とAI R&D自動化

Jack ClarkのImport AI #462では、Recursiveという新興スタートアップがRSI（再帰的自己改善）の実証結果を公開した。

Recursiveは「目標に対して、アイデア提案→実装→実験→結果検証→次のアイデア選択」を自動化する研究システムを構築。同システムにより以下の成果を達成:

- **NanoChat Autoresearch**: 小規模言語モデルの性能向上で新SOTA
- **NanoGPT Speedrun**: 小規模モデル学習速度の高速化
- **GPUカーネル最適化**: 新しい最適化の自動発見

### AI R&Dの自動化がもたらす影響

Georgetown CSETのワークショップ結果は、AI R&D自動化が以下をもたらし得ると指摘:

- AI R&Dの自動化実現時、人間のAI開発プロセスへの監督力が低下
- 自動化が加速すれば 10x → 100x → 1000x の生産性向上理論上可能
- 最も存在的に重要な技術開発の1つとの位置づけ

**重要な保留事項**: AI R&Dには「O-ring自動化」的な特性があり、一部の部分は人間の方が得意という状況があり得る。この場合、完全なループ閉じよりも緩やかな進歩に留まる可能性がある。

---

## 腦エミュレーション：長い道のり

175ページに及ぶ**「The State of Brain Emulation Report」**が今后的腦問題最前線を整理した。

### 3つの必須要件

| 要件 | 現状 | 所需規模 |
|------|------|----------|
| 脳活動の記録 | 1M細胞 × 20Hz = 10⁹ データポイント/秒 | マウス: 10¹⁰, 人間: 10¹²/秒 |
| 神経回路の復元 | $100/神经元（小型生物） | マウス: $1B規模 |
| デジタル建模 | パラメータ取得がボトルネック | - |

### タイムライン予測

- **ゼブラフィッシュ**（~100K神经元）: 3〜8年後に実現可能性
- **マウス脳**: 2030年代に~$1Bで実現可能との試算
- **人間の大腦**: 2040年代後半に数十億ドル規模で初実現

**重要な注記**: 腦エミュレーションは本質的にデジタルプロセスではなく、物性組織の物理的操作がボトルネック。化学と物理学の時間に律速される。

---

## Anthropic: AIに-resistantな技術面接の設計

Anthropicは的技术面接がClaudeの進化により繰り返し破壊されてきた歴史をblogで明かした。

- **2024年初頭**: 候选者に最適化するコードを書かせる课题を実施
- **Claude Opus 4**: 同一時間制限内でほとんどの応募者を上回る
- **Claude Opus 4.5**: 最强者とも同等に

Zachtronics社のプログラミングパズルに着想を得た「異種混杂評価」を設計。AIの強力な一般化能力を回避しつつ人間の適性を見極める形式が採用された。

**意義**: 将来的にこういうテストを大規模に収集すれば、「人間の比較優位」がどこにあるかを体系的に理解できる可能性がある。

---

## 技術者が注目すべき論点

1. **RSIの進捗度量**: 再帰的自己改善がどの程度進んでいるかを定量的に測る指標体系の確立が必要
2. **ASIリスクの評価**: 「10〜20年」というタイムラインに対する準備の实质化
3. **腦エミュレーションのインパクト**: 計算機科学と神经科学の融合領域への関心が高まっている
4. **AI R&Dの透明性**: 自動化の進捗を外部から評価できる仕組みのニーズ

---

## 参考リンク

- [From AGI to ASI (Google DeepMind, arXiv:2606.12683)](https://arxiv.org/abs/2606.12683)
- [AI systems out-persuade expert humans (arXiv:2606.16475)](https://arxiv.org/abs/2606.16475)
- [Import AI 462 (Jack Clark)](https://importai.substack.com/p/import-ai-462-superpersuasion-self)
- [Designing AI-resistant technical evaluations (Anthropic Engineering)](https://www.anthropic.com/engineering/AI-resistant-technical-evaluations)
- [Building Brains on a Computer (Asimov Press)](https://press.asimov.com/articles/brains)
- [State of Brain Emulation Report](https://brainemulation.mxschons.com/)
- [When AI Builds AI (CSET)](https://cset.georgetown.edu/publication/when-ai-builds-ai)

---

*本文の情報は2026年6月27日時点のものです。*
