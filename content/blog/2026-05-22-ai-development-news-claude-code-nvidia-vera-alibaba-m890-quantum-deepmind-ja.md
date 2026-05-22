# AI開発ニュースまとめ：Claude Code旋風、Nvidia第二条戦線、中国AI硅骨の覚悟

2026年5月、AI開発現場ではすでに「AIにコードを書かせて読まない」文化が定着しつつある。米政府量子コンピューティングへの20億ドル投資、中国アリババのエージェント特化型AIチップ、そしてNvidiaの第二条戦線参入——今週もAIインフラの構造転換が止まらない。

---

## Anthropic「Code with Claude」：コードを書かない開発者が主流に

ロンドんで5月19日に开幕したAnthropicの開発者イベント「Code with Claude」は、ソフトウェア開発の现在进行形の変化を如実に映し出した。

メインステージでAnthropicエンジニアのJeremy Hadfield氏が观众に問いかけた。「この1週間で、Claudeが完全に書いたプルリクエストを出した人は？」——约半数が举手。「それを自分は一切読まなかった 사람은？」——やはり大半の手が下がらなかった。

Anthropic最快の4.7（2026年4月公开）を経て、Claude Codeは「人间の開発者がエラーログすら见なくてよい」段階まで进化している。AnthropicのBoris Cherny最高责任者は基調講演で「デフォルトは『Claudeに-prompする』ではなく、『Claudeに自分を-prompさせる』」と表现した。

新しい「dreaming」機能も注目に値する。Claude Codeのエージェントが自分にメモを残し、後続のエージェントがそれを読んでコードベースの文脈を急速に构建する仕組みだ。言い換えれば、Claude Codeが自分の「作业记忆」を蓄積し、学习していく。

SpotifyやDelivery Hero、Morning.comなど企業で导入進む一方、Hacker NewsやRedditでは「生成されたコードの品质」への忧虑が上昇している。AnthropicのLesseエンジニアはMIT Technology Reviewの取材に対し「旧来のソフトウェア開発ベストプラクティスはすべて适用される」と語る一方、「technical managerたちが生成されるコードの山に追いつけない状态已达到疲劳している」现状を明かした。

---

## Nvidia Vera：GPUの影の第二条戦線

Nvidiaの2026年度第1四半期決算は売上高816億2000万美元でアナリスト予測（788億6000万美元）を再び大きく上回り、引け後にHuang CEOはQ2ガイドを910億ドルと提示した（予測868億4000万美元）。

しかし注目すべきは別の場所にある。Huang CEOがアナリスト电话会谈で言及した「Vera」CPUが、Nvidiaの第二条戦線だ。VeraはGoogle・Amazon・Microsoftといった最大顾客が自社チップを作り始める中で、推论워크로드市場への参入を意味する製品だ。

VeraはGroqの技術を活用した推论特化チップで、トレーニング用GPUのBlackwell/Rubinとは別の顾客層を瞄んでいる。Huang CEOは「Veraは第2の大型売上贡献源になる」と予想し、2026年度内に200亿ドルの市场へ200亿ドルの売上を見込む。

Supplyがすでに制约要因であることも注目に値する。Huang CEOは「Vera Rubinの供给制约は製品生涯全程続く感じている」と語る。同社の供给コミットメントは前四半期952亿ドルのところ1190億ドルに跳ね上がっている。

---

## Alibaba Zhenwu M890：エージェントのために设计された硅骨

アリババの半导体子会社T-Headが新AIチップ「Zhenwu M890」を发表すると同時にmulti-year硅骨ロードマップを明かした。前世代810E比で3倍性能向上だが、注目はアーキテクチャの志向だ。M890は长时间文脈保持・他モデルとのリアルタイム协调・人間の介在少ないマルチステップタスク実行に最適化化し、これらは标准推论チップと異なる要求プロファイルだ。

M890の後は2027年Q3にV900（约3倍向上）、2028年Q3にJ900を予定したtick-tock开发サイクルで、HuaweiがAscend線で示した戦略と相似的だ。中国技术各社が「外国チップへの依存は構造的リスク」と判断し、半导体開発を調達问题ではなく能力構築として捉えている证左だ。

T-Headはすでに56万個のZhenwuユニットを出荷し、400社以上の外部顾客が20業界以上で活用中という。M890は阿里巴巴Cloudの国内モデルプラットフォーム「败蓮」を通じて128個のM890を1ラックにスタックした「胖九 AL128」サーバーで提供される。

ソフトウェア側では「Qwen 3.7-Max」も同時に发表され、连续35时间性能劣化なしで动作する「agent tasks」向けモデルとして位置づけられた。チップとモデルを同一ワークロードクラスに最適化化し同時に发表するのはプラットフォームプレイであり、アリババは自社硅骨（T-Head）×自社モデル（Qwen）×自社クラウド（败蓮）の闭じたループを構築している。

---

## 米国政府、量子コンピューティング9社に20亿ドルの株式取得

米国商務省が9社の量子コンピューティング企業に合计20亿ドルの优先株式を取得するLetter of Intentに署名した。受益先はIBM（10億ドル）、GlobalFoundries（3億7500万美元）、PsiQuantum（1億ドル）、Atom Computing、Infleqtion、Quantinuum、Rigetti 各100百万ドル、Diraq最大3800万美元を含む。

注目は获奖者の一人のD-Wave Quantum——2022年に现Pentagon高官（Emil Michael氏）が上場させた企業で、もう一社はDonald Trump Jr.がパートナーを务める1789 Capitalが出資するPsiQuantumだ。IBMとGlobalFoundries株は公开前に6%以上上昇した。

---

## DeepMind、亚太地域で环境リスク课题するアクセラレーター开始

Google DeepMindが亚太地域向けのアクセラレータープログラムを開始した。环境リスクを対象とし、同地域におけるAI for Scienceの研究加速を図る。DeepMindブログでは他に「遗传的ヒントから细胞老化を逆操作する研究」「Project GenieとStreet Viewで現実世界をシミュレートする研究」が公开されている。

---

## 参考リンク

- [Anthropic's Code with Claude showed off coding's future—whether you like it or not](https://www.technologyreview.com/2026/05/21/1137735/anthropics-code-with-claude-showed-off-codings-future-whether-you-like-it-or-not/)
- [Nvidia's Vera chip targets $200bn market as Huang opens a second front](https://www.artificialintelligence-news.com/news/nvidia-vera-chip-200-billion-market/)
- [Alibaba's AI Agent Chip Strategy Goes Beyond Nvidia](https://www.artificialintelligence-news.com/news/alibaba-zhenwu-m890-ai-agent-chip-roadmap/)
- [US government takes $2 billion equity stake in nine quantum computing firms](https://arstechnica.com/gadgets/2026/05/us-government-takes-2-billion-equity-stake-in-nine-quantum-computing-firms/)
- [We're launching the Google DeepMind Accelerator program in Asia Pacific](https://deepmind.google/blog/were-launching-the-google-deepmind-accelerator-program-in-asia-pacific-to-tackle-environmental-risks/)

---

*本文の情報は2026年5月22日時点のものです。*
