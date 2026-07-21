# Anthropicの15億ドル著作権和解が承認——AI訓練の法的境界線は依然流動的

2026年7月、米国のAI開発最前線に巻き起こる法廷闘争と政策変更が再び話題を集めている。Anthropicが作者・出版社側と合意した15億ドル規模の著作権和解に正式承認が下りる一方、MCP（Model Context Protocol）の大規模アップデートやオープンウェイトモデルを巡る論争など、AI業界を揺るがす動きが加速している。

---

## Anthropic和解批准——「訓練は合法的だが取得方法は違法」という前例

联邦地方裁判所の判事が7月20日（現地時間）、Anthropicに対するクラスアクション著作権訴訟の和解正式承認を下した。和解金額は15億ドル。米国著作権法史上最大規模の和解として記憶されることになる。

和解の構造は複雑だ。判事はAIモデルの訓練に著作権著作物を使用することは**フェアユース（合理使用）**に該当する可能性が高いとの見解を示し、Anthropicを支持する判断を下した。一方で、Anthropicが書籍データを取得した手法については明確に違法との判断を示した——正規に購入・スキャンした書籍は問題なしとする一方、海賊版サイト（Library GenesisやPirate Library Mirror）からダウンロードした書籍については不法行為と認定。Anthropicは裁判を回避するため和解に応じた。

重要なのは、この和解が業界全体への影響を持たないことだ。判例の拘束力を持たず、他の訴訟（Google、Meta、Midjourney、OpenAIなどを相手に提起された著作権訴訟）とは別の判断が可能。先立つこと1週間前には、Hachette、Cengage、Elsevier、Scott Turowといった出版社・著者がGoogleを相手取り、Gemini訓練用的任[View whole article]】

Googleは報道時点でコメントを出していない。

---

## MCPアップデート——AI相互運用性の「下水」を設計する戦い

AI業界のプロトコルレイヤーでも重要な動きがあった。AIモデルが外部データソースやサービスに安全にアクセスするための標準規格である**MCP（Model Context Protocol）**が大幅アップデートを控えている。

MCPは一言で言えば「AIモデルのためのUSB規格」——チャットボットがカレンダー、データベース、社内ツールに接続するための「、配管」的な役割を担う。現在の規格では、AIクライアント（Claudeなど）がサーバーに接続するたびにセッションIDが発行され、サーバーはそのIDを使って「5秒前の会話と同じユーザー」を識別する。

新バージョンではこのセッションIDの扱いが「ステートレス」に近づく。サーバーが大規模にスケールしやすくなり、可用性问题が減るることが期待されている。Arcade（AIエージェントの企業導入を専門とするスタートアップ）は「AIエージェントが失敗する理由は基盤モデルが弱いためではなく、その周りのインフラが整っていないからだ」と指摘。60Mドルを調達した同社が描くのは、MCPこそがAIエージェントの普及を加速する鍵だという戦略的な見方だ。

---

## オープンウェイトモデル禁止論——OpenAIの「恐怖」が政策に？

もう一つ、開発者コミュニティで大きな話題となっているのがオープンウェイトモデルの扱いだ。中国のMoonshotが開発したKimi K3（最大のオープンウェイトLLM）の発表を受け、米国の фронтовых лабораторияから中国製モデルへの規制を求める声が強まっている。

OpenAIの戦略未来責任者Dean W. Ballは米国政府に対し、オープンウェイトモデルに対する「規制上の恐怖・不確実・疑念」を創出すべきだと主張。その後Yann LeCunやMartin Casadoらから「オープンソフトウェアはイノベーションを加速し проприетарные プロジェクトと共存できる」と反論され、主張を撤回する一幕もあった。

しかしAxiosの報道 따르면、トランプ政権は米国 фронтовых лаборатория の的要求受け、K3ら先進的中国モデル禁止を検討中。Politicoは 商務省が「当面はそのような措置を取らない意向」と報道しており、方針は確定していない。

根本的な論点は二つに分かれる。経済的には、オープンウェイトモデルが 提供 增加 企业 外部 インフラで 安価な 知性 提供 使得 专用 モデルの 高投資 回収を難しくするするのは確かだが、技術的には「オープンウェイトモデルが進歩を遅らせる」という主張には反論が多い。

---

## まとめ

今週のAI開発ニュースは、法的・政策的・技術的の三つの层面でAI業界が大きな転換点を迎えていることを示している。Anthropic和解は「訓練は合法、取得は違法」という微妙な線引きを浮き彫りにし、MCPの進化はAIエージェント普及のためのインフラ整備が進行中であることを、RPAixinする лаборатория と規制当局の綱引きはAIのビジネスモデルの将来像を左右する重大問題として続いている。

---

## 参考リンク

- [Anthropic's landmark $1.5B copyright settlement is approved](https://techcrunch.com/2026/07/20/anthropics-landmark-1-5b-copyright-settlement-is-approved/)
- [AI's most important protocol is getting a little bit easier to use](https://techcrunch.com/2026/07/20/ais-most-important-protocol-is-getting-a-little-bit-easier-to-use/)
- [OpenAI is scared of open-weight models. Should the US be?](https://techcrunch.com/2026/07/20/openai-is-scared-of-open-weight-models-should-the-us-be/)
- [Trump's latest AI czar has already resigned](https://techcrunch.com/2026/07/20/trumps-latest-ai-czar-has-already-resigned/)
- [Firefighting drones in the works as wildfires plague US nearly year-round](https://arstechnica.com/ai/2026/07/firefighting-drones-in-the-works-as-wildfires-plague-us-nearly-ye)
- [Here are the 30,000 songs Sony is suing Udio's AI music generator over](https://www.theverge.com/tech/968375/sony-udio-lawsuit-songs-ai-copyright)

---

*（本文の情報は2026年7月21日時点のものです）*
