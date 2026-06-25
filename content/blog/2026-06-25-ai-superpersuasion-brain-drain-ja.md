# AI超説得力の衝撃とGoogle人材流出——2026年6月下旬の開発者向けニュース

2026年6月下旬、AI業界は「**AIの超説得力**」という新たなセキュリティリスクの出現と、Googleを中心に進む人材流出という二大トピックで揺れている。オックスフォード大学などの研究チームが「AIは人間の専門家よりも強く説得できる」ことを実証する一方、GoogleからはNoam ShazeerやJohn Jumper（AlphaFold開発者でNobel受賞者）といった最重要研究者がAnthropicやOpenAIに流出。本稿ではこれらの動きを技術的含意と共に整理する。

---

## AIは人間より「説得」が上手——4研究の衝撃

オックスフォード大学、英国AIセキュリティ研究所、スタンフォード大学、LSEの研究者が共同で行った大規模実験が、AI persuasion（説得）能力の深刻さを浮き彫りにした。4つの研究を通じて明らかにされた事実：

**Study 1（純粋な説得）**: 10のUK政策议题についてユーザーが0-100で評価したあと、AIまたは人間の説得者とのテキスト会話に変更。結果は——**AIが人間の専門家を統計的に有意に勝利**。

**Study 2（人間による coaching）**: Elite Debaters（練習を積んだ論客）43名に、敗れたAIの coaching toolを提供。AIの戦略を確認しながら自身の会話記録をannotation付きで閲覧できる環境を用意。それでも**Coached Elite Debaters 対 AI の差は +4.1pp**——AIがまだリード。

**Study 3（AIに制約をかけた場合）**: 「人間の長さのメッセージ」「人間の書く速度」という制約をAIに科すと、Study 2の差は**+4.1ppから0.0ppに縮退**。つまり、AIの優位性は「処理速度」と「出力量」に大きく依存している。

**Study 4（実際の募金活動）**: 英国的慈善団体AppcoUKの専門 canvasser 19名とAIを同一タスクで対比。**AIはProfessional Canvasser を+5.9pp上回り**、実際の募金額でも優位を示した。

### なぜこれは開発者にとって重要か

この研究の核心は3つ：

1. **「AI制御者が社会を変えられる」**: 説得力を持つAIを一部が独占すれば、意見形成の均衡が崩れる
2. **「レート制限」が唯一の防御策**: 現状、AIの優位性を止める手段は処理速度/出力長の制限だけ
3. **「cheap persuasion」のリスク**: 高度だが安価なAI説得ツールが广泛普及した場合の影響

開発者観点からは、**AI出力のrate limitingはsafety feature**として再定義が必要。APIの設計段階から「説得的な内容量」に対する制限を検討する必要性が浮き上がる。

---

## GoogleからAnthropic/OpenAIへ——AI研究者の大移動

Google DeepMindから続けて最重要研究者が流出している。

**Noam Shazeer（2000年からGoogle在職、Character.AI創設者）** → **OpenAI**  
2000年からGoogleに籍を置き、2021-2024年はCharacter.AIを運営。全期間を振り返ると「Googleに24年在籍」という伝説的研究者が、満を持してOpenAIへ。

**John Jumper（2024年Nobel化学賞受賞、AlphaFold開発者）** → **Anthropic**  
DeepMind Directorの地位を捨て、Anthropicへ加入。JumperはDemis HassabisCEOと共にAlphaFoldを発表し、**タンパク質構造予測**という構造生物学最大の課題を解決した人物。Nobel受賞者のAnthropic加入は、同社の**安全性研究**と**基礎研究**への本気度を象徴する。

**Jonas Adler、Alexander Pritzel（Gemini開発の中核）** → **Anthropic**  

### 技術的影響

これらの流出が意味すること：

- **Googleの「社内明星」制度がうまく回っていない**: 社内で成果を出した研究者が外部去的動機更强
- **Anthropicが「础学研究者天堂」としての地位を確立**: Sequent創業時のインタビューでも「Anthropicは"where the action is"」と評されており、顶尖層の採用力が増している
- **OpenAI vs Anthropic の人才獲得戦争が本格化**: ShazeerのOpenAI加入は、この対立の新たな局面

---

## ソフトウェアエンジニアはAIで消えない——SignalFireの新データ

「AIはエンジニアリング職を消灭させる」という言説に対し、Venture firm SignalFireの実態データ反論が出た。

**発見**:

- 2026年5月の全産業レイオフうち「AI関連」が最多の理由，但不能推出「エンジニア需要減」
- **ソフトウェアエンジニアリングは最も"resilient"（回復力がある）職種の一つ**
- AI coding tool（GitHub Copilot、Claude Code等）の普及により、エンジニア1人当たりの**生産性は向上**したが、**需要もまた増加**

このデータは「AIはjobsを消灭させるが、**engineeringは生き残る**」という主張を支持。AI恐怖論に対するempirical evidenceとして注目に値する。

---

## Sequent——「alignment is not on track」と題した新的安全 스타트업

英国AIセキュリティ研究所のAlignmentチーム研究者、およびalignment理論スタートアップTimaeusが共同てて新組織 **Sequent** を立ち上げた。

**目標**: $100-150Mの初期調達成功后、$1B以上を增资する計画。40-80名の正社員を数年内に採用。

**研究アプローチ**: 既存のAIラボとは異なる、「**controlled situationでのalignmentが、 uncontrolled situationに一般化する証拠を見つける**」という原則的なアプローチ。現在の大手ラボの課題——「training時だけはaligned見えるが、実环境では失敗する」——への根本的解決を目指す。

これはAI安全性研究における**「Portfolio of differentiated alignment bets」**戦略として業界内で注目已久。

---

## FrontierCode——Cognitionが作った「本当に難しい」コーディング試験

Cognition（Devinの開発元）が新型ベンチマーク **FrontierCode** を公开发表。

**構成**: 150タスク×3段階の難易度（Diamond / Main / Extended）。対応言語はPython, Go, TypeScript, JavaScript, Java, C/C++など。

**最大の特徴**: **各タスクに20人以上の开源開発者が40時間以上かけて作成**。单一のPRではなく、複数PRにまたがる锁 Issues からhand-selectした「本気で難しい」課題のみを含む。

**現在の最高性能**: Claude Opus 4.8でも**13.4%**（Diamond問題のみ）——現行最强モデルでも14%に满足しないという衝撃。

このベンチマークの意义は、「code mergeの質量」を客観的に测る尺度が生まれたこと。単なる"pass@1"ではなく、**build/lint/styleチェック通過、テスト品質、範囲適切性**などを综合評価する。

---

## AIは社会をどう変えるか——超説得力が示唆するもの

Import AI 462でJack Clarkが整理した通り、「**if AI can out-persuade us, those who control AI can change society**」という問いが現実味を増している。

OpenAIがJalapeñoチップでカスタムハードウェアに参入し、AnthropicがNobel受賞者を迎え、Googleが人材流出に頭を悩ます。2026年6月は、AIの**技術的卓越性**と**社会的リスク**が同時に表面化した月であった。

---

## 参考リンク

- [Import AI 462: Superpersuasion; self-sustaining AI; paths to ASI](https://jack-clark.net/2026/06/22/import-ai-462-superpersuasion-self-sustaining-ai-paths-to-asi/)
- [Import AI 461: Alignment is not on track; FrontierCode; and synthetic research interns](https://jack-clark.net/2026/06/15/import-ai-461-alignment-is-not-on-track-frontiercode-and-synthetic-research-interns/)
- [AI researchers continue to leave Google for its rivals (TechCrunch)](https://techcrunch.com/2026/06/24/ai-researchers-continue-to-leave-google-for-its-rivals/)
- [AI was supposed to kill engineering jobs (TechCrunch)](https://techcrunch.com/2026/06/24/ai-was-supposed-to-kill-engineering-jobs-but-new-data-suggests-theyre-the-most-resilient/)
- [Europe is pushing back on Washington's chip war (TechCrunch)](https://techcrunch.com/2026/06/24/europe-is-pushing-back-on-washingtons-chip-war/)

---

*本文の情報は2026年6月25日時点のものです。*
