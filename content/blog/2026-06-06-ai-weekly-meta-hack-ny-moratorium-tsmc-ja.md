# AI開発週報：Meta AIサポートエージェントの乗っ取り、ニューヨーク州データセンター規制、TSMCの供給限界

2026年6月上旬、AI業界はセキュリティ、規制、技術力の課題が交差する転換点を迎えている。Metaの顧客サポートAIを使ったInstagramアカウント乗っ取り事件、ニューヨーク州のデータセンター建設一時停止命令、TSMCのAI需要対応苦戦、そしてAI映画スクリプト分析スタートアップのReality Checkなど、複数の重要トピックが同時進行している。

---

## Meta AIサポートエージェントを使ったアカウント乗っ取り：AIセキュリティの新たな脆弱性

2026年6月、404 Mediaの報道により、攻撃者がMetaのAI顧客サポートエージェントを活用してInstagramアカウントを乗っ取る事件が発生した。手法は驚くほどシンプルだった。攻撃者はAIエージェントに対し、自分の管理下にあるメールアドレスにアカウントを紐付けるよう依頼するだけであり、AIはこれに従った。

一件 보면、AnthropicがMythosモデル（「ハッキング能力が高すぎて一般公開できない」とされた）の公開を保留にした際、業界関係者は超高性能AIシステムがインフラを破壊する可能性に集中していた。しかし这次的Meta事件は、AI自体が攻撃対象であり、手法はMythosがするような複雑なものではない点が異なる。

Duke大学のNeil Gong教授（電気・コンピュータ工学）は、「AIがワークフローの自動化（例如アカウント回復）にますます広く使われるようになれば、攻撃者はAI自体を攻撃する動機が強まるだろう」と警告している。研究者たちはの間接的プロンプトインジェクション（Websitesやメールに含まれる隠れたコマンドでエージェントを乗っ取る技法）など、AIエージェントのセキュリティ脆弱性を文書化し続けている。しかしMeta事件の手法价比这些技法比起来シンプルだった。攻撃者がVPNで本当のアカウント所有者の場所に合わせ、SMSで「忘れてしまったアカウントにアクセスしたい」と伝えるだけで、AIサポートエージェントは喜んで対応した。

ある攻撃者は休眠状態だったObama元大統領のWhite Houseアカウントに侵害し、親Iran投稿を行った。他の攻撃者は価値の高い短いユーザー名（one-word handles）を持つアカウントを取得し、おそらく転売のために使用了と見られている。

---

## ニューヨーク州、データセンター建設に1年間の停止命令

2026年6月、ニューヨーク州議会が初めてとなる statewide データセンター建設 мораториウム（一時停止）を導入した。民主党のKathy Hochul知事が署名すれば法的效力を持つ。法案支持者は、大規模データセンターが環境とエネルギーに与える影響を把握する時間を政策立案者に与え一说としている。

同法案は、20メガワット以上のピーク需要を持つ大規模データセンター定义为、建设前の环境影响評価を作成することを義務付けている。また、プロジェクト承認前に少なくとも3个月前の公开ヒアリングを実施することも求めている。

現在、ニューヨーク独立系统運用者（NYISO）は24件のデータセンター提案书を検討中で、その合計は9,000メガワット以上に上る。Albanyでの180メガワット計画には地元住民から懸念が上がっている。

業界団体は強く反発している。长岛協会（ビジネスグループ）のStacey Sikes暫定社長兼CEOは、「包括的な мораториум instead of case-by-case basis で検討することは、州経済全体に損害を与えるだろう」と語った。

一方、Maine州では3年間の мораториウム 法案が可決されたが、民主党のJanet Mills知事が既存プロジェクトへの適用除外がなかったとして拒否した。こうしてNY州は、より短い1年間の停止を選択した形だ。

データセンター需要の急増はAIの発展に直結している。NVIDIAのJensen Huang氏がDeveloper Conference Season中に「ノートブックの使い方が完全に変わる」と表現したように、AI搭载ハードウェアの需要は加速度的に増加している。

---

## AIスクリプト分析スタートアップQuilty：Hollywoodを狙う「未来予測」ツールのReality Check

2026年初め、AIスタートアップのQuiltyが「スクリプトを読むだけで映画の成功を予測できる」とToastした。しかし実際に製品を試した人々の反応は懐疑的だった。

Quiltyは、Sinners（後にOscar受賞作となる）と Christy（興行収入的に失敗）のスクリプトを比較し、Christyの方を高く評価するというミスを犯した。Oscar受賞作をFlopと予測し、FlopをHitと予測するという完全な逆転だった。

Simon HorsmanとDaniel Woodという映画プロデューサーが設立したQuiltyは、スクリプトを分析して0〜100のスコアを提供する。ユーザーはプロジェクトのNarrative品質、商业可能性、観客の共感度、制作コスト見等我详细信息得到回复。

創業者たちは、Quiltyが伝統的な制作スタジオのビジネス方式に不可欠な存在になると信じている。「民主化」という言葉が繰り返し使われるが、Hollywoodの既存勢力にとって代わるのか、それとも新たな意思決定材料加えるだけなのかは未定だ。

---

## TSMC、「AI需要にに対応只能这么多」：半导体供給の限界

TSMCの会長は「このままではAI需要に応えられる量には限界がある」と語り、半导体供給の逼迫を表現した。AI需要が予測不可能な速度で増える中、半导体製造のキャパシティが深刻なボトルネックとなっている。

Apple、NVIDIA、AMDなどの主要顧客が製造能力を予約する中、中小規模のAIスタートアップは製造ラインを確保するのが越来越困难になっている。この状況は、AI開発の花形企业与そうでない企業の間に更大的差距的产生灵通している。

---

## MIT Technology Review：AIセキュリティと認知機能への影響

MIT Technology Reviewは本周、「The Meta Hack Shows There's More to AI Security Than Mythos」と題した分析記事を上发表し、单纯的セキュリティ脅威それでも危険であることを強調した。

同時に、同誌は「Are AI Chatbots Making Us Lose Control of Our Brains?」という記事を通じ、カリフォルニア大学アーバイン校の心理学者Gloria Markの研究成果を紹介した。Mark教授)은、デジタルテクノロジーが認知能力を弱体化させている可能性があり、AIツールはこの傾向加速させる恐れがあると警告する。

「あなたは認知作業をAIに委譲している。それは私たちにとって良いことではない」とMark教授'는語る。注意力の持続時間が大幅に短縮し、ストレス増加とパフォーマンス低下が顕著になっているという。

---

## まとめ：AIの光と影

2026年6月上旬のAI動向を見ると、技術的能力の惊人な进化と并存して、重要な課題が浮上している。AIセキュリティは Mythos 的な超高性能AI威胁と単純なソーシャルエンジニアリング threatの両面からアプローチが必要だ。データセンター規制はAI發展のエネルギ必需解决迫不及待。HollywoodにおけるAIスクリプト分析の実験は、新しい技術がまだ完全ではないことを明確に示している。

AIの利害得失を熟虑し、技術動向を継続的にMonitorることが今後さらに重要になる。

---

## 参考リンク

- [The Meta hack shows there's more to AI security than Mythos - MIT Technology Review](https://www.technologyreview.com/2026/06/05/1138437/the-meta-hack-shows-theres-more-to-ai-security-than-mythos/)
- [New York lawmakers pass one-year ban on new data centers - The Verge](https://www.theverge.com/policy/944041/new-york-data-center-moratorium)
- [This AI startup says it can tell if a script will make a hit film - The Verge](https://www.theverge.com/ai-artificial-intelligence/943531/ai-script-quilty-simon-horsman-daniel-wood)
- [TSMC struggles to keep up with AI demand - The Verge](https://www.theverge.com/tech/943066/tsmc-ai-demand-struggles)
- [Are AI chatbots making us lose control of our brains? - MIT Technology Review](https://www.technologyreview.com/2026/06/05/1138427/are-ai-chatbots-making-us-lose-control-of-our-brains/)

---

*（本文の情報は2026年6月6日時点のものです）*