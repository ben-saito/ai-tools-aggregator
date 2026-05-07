# AI経済の課題――チップ不足からエネルギー制約まで、物理的限界に直面する業界

AIブームは物理的な壁にぶつかりつつある。チップ製造のボトルネック、エネルギー制約、データ収集の限界――AI経済を構築する者たちが一堂に会し「今どこで車輪が外れかけているか」を語った。

---

## チップ製造の限界：ASMLのCEOが警告

5月6日、サンフランシスコで開かれたTechCrunchイベントに集まった5人のパネリストは、それぞれ異なる観点から同じ結論に達した。

**ASML**のCEOであるChristophe Fouquet氏（同社はEUVリソグラフィマシンで事実上の独占体制を構築）は「チップ製造の巨大な加速が起きている」としながらも、それでもなお需要に追いついていない状況を暗示した。EUVマシンなしには最新のAIチップは製造できない――そしてASMLのマシンは1台あたり数億ドルの上に納入まで数年を要する。

Google CloudのCOOであるFrancis deSouza氏も、データセンターへの需要が急速に拡大する現状を数字で示した。Google Cloudの四半期収益は**200億ドルを突破**し、前年比63%の成長率を記録。さらにコミット済みだが未履行のバックログ収益が**1四半期で250億ドルからほぼ倍増**したという。

---

## エネルギー制約：宇宙にデータセンターを求めるGoogle

物理的なリソース制約はチップだけには留まらない。deSouza氏によれば、Googleはエネルギー制約への対応として**宇宙データセンター**の導入を本気で検討している。「より丰富的エネルギーにアクセスできる」（deSouza氏談）という利点に加え、電力消費の最適化がGoogleの優先課題となっている。

GoogleはカスタムTPUチップからモデル、エージェントまで**垂直統合戦略**を進めている。これが奏功しているのは、各レイヤーでの最適化が**1ワットあたりのFLOPS（計算量）**というエネルギー効率に反映されるためだ。他社比でこの優位性が積み上がっている。

---

## データの限界：現実世界に機械を派出するコスト

Applied Intuition CEOのAssaf Younis氏が指摘したのは、チップではなく**データ**の制約だった。同社は自動車、トラック、ドローン、採掘機器、防衛車両向けの自律システムを構築しているが、AIモデルの訓練に必要なデータは「機械を現実世界に派出して得られる」という物理的コストから逃げられない。

これはLLMのスケール則とは性質の異なる制約であり、自動運転やロボティクス分野でAI開発を進める企業に共通する課題だ Younis氏によれば「データは物理的に収集しなければならない」アプローチが求められる分野では、モデルのパラメータ数を増やすだけでは解決しない。

---

## 投資動向：インドスタートアップとAI Native Infrastructure

同日、複数のAI領域で投資NEWSも舞い込んだ。

**Pronto**（インド）はLachy Groom氏から**2000万ドルの拡張ラウンド**を調達し、調達後バリュエーションは**2億ドル**に倍増した（仅仅2ヶ月前比）。同社はインドの domestic 労働者を組織する「世界最大のプラットフォーム」構築を目指す。創業者Sardana女史はBain Capital や8VCでの経験を持ち、2025年に設立された。

**Railway**はAI Native のクラウドインフラ構築に向けて**1億ドル**を調達。AWSに対抗する存在として、AI workloads に最適化されたインフラストラクチャの提供を狙う。AI Native という表現には、従来のクラウドサービスがAI workloadsのために再設計而非設計されたものであるという批判が込められている。

---

## Barry Diller「信頼は関係ない――AGIの可能性と無力」

メディアエグゼクティブのBarry Diller氏（Fox Broadcasting共同創業者、IAC・Expedia Group会長）は、Sam Altman氏を「信頼している」が、それがAIの帰結を左右するという考えはないとした。

「AIの最大の課題は信頼を超えている。作っている当の本人にも予期せぬ結果が生まれる可能性がある。巨大企業のCEOを信頼するかどうかは、实现したい結果と无関係だ」

Diller氏の発言は、**AGI（人工知性）の到来が近づく中で、個人の信頼や意志が技術発展の軌跡を決定できない**という、技術者以外からの警鐘として注目に値する。Diller氏自身がAltman氏とは亲しい间柄ではあるが、その親密性がAIの安全性確保の担保にはならないと主張している点は重要である。

---

## Anthropic、新デスクトップAgent「Cowork」をローンチ

Anthropicは**コード不要でファイル内で動作するClaude Desktop Agent**「Cowork」を発表した。開発者以外でも、日常的なワークフローにClaudeを直接統合できる製品として、AIアシスタントの民主化を進める。

もう1つのNEWSとして、**Goose**（Johannes Rice氏開発）がClaude Codeの無料代替として話題を集める中、Claude Codeの月200ドルというコストとの比較も興味深い。CLIベースのAI coding agent市場において、価格競争がすでに始まっている征候だろう。

---

## まとめ：物理法則が返すAI成長曲線

2026年5月現在のAI業界は、**理論的なスケール則の限界ではなく、実際の物理的リソースの制約**に直面している。 chip製造能力、EUVマシンの供給、エネルギー消費、データ収集コスト――これらはソフトウェアの最適化では解消できない。

Googleが宇宙データセンターに目を向けるほど問題が深刻化していることを inúmerけると、**AI Native Infrastructure**（Railway的な企業群）や**効率化されたスタック統合**（GoogleのTPU戦略）が次の競争軸になる可能性が高い。開発者としては、パブリッククラウドのレイテンシとコストを再評価する時期に来ており、自社のAI workloadsが物理的制約のどの部分に影響を受けるかを把握しておくことが重要になる。

物理的制約の顕在化は、逆説的に **「どこで何を最適化するか」という技術的判断の重要性** を高めている。重いモデルを无批判にデプロイする时代は終わり、制約条件の中で最优解を探す时代に入ったのかもしれない。

---

## 参考リンク

- [Five architects of the AI economy explain where the wheels are coming off - TechCrunch](https://techcrunch.com/2026/05/06/five-architects-of-the-ai-economy-explain-where-the-wheels-are-coming-off/)
- [Barry Diller trusts Sam Altman. But 'trust is irrelevant' as AGI nears, he says - TechCrunch](https://techcrunch.com/2026/05/06/barry-diller-trusts-sam-altman-but-trust-is-irrelevant-as-agi-nears-he-says/)
- [A 20-minute pitch wins Indian startup Pronto backing from Lachy Groom - TechCrunch](https://techcrunch.com/2026/05/06/a-20-minute-pitch-wins-indian-startup-pronto-backing-from-lachy-groom/)
- [Railway secures $100 million to challenge AWS with AI-native cloud infrastructure - VentureBeat](https://venturebeat.com/infrastructure/railway-secures-usd100-million-to-challenge-aws-with-ai-native-cloud)
- [Anthropic launches Cowork, a Claude Desktop agent that works in your files - no coding required - VentureBeat](https://venturebeat.com/technology/anthropic-launches-cowork-a-claude-desktop-agent-that-works-in-your-files-no)

---

*（本文の情報は2026年5月7日時点のものです）*