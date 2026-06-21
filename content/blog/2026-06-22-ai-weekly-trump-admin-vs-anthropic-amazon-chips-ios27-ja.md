# AI開発週次レポート：トランプ政権のAnthropic締め出し、AmazonのNvidia挑戦、iOS 27のAI機能

2026年6月第3週は、AI業界にとって大きな揺らぎを感じた一周間だった。米政府によるAnthropic規制、大物研究者の異動、巨大企業の商用チップ戦略など、開発者にとって重要なニュースが飛び込んだ。

---

## 1. 米政府、Anthropicの最新モデルに対する輸出管理命令を発令

**トランプ政権はAnthropicに対して、同社最新のAIモデル「Fable 5」と「Mythos 5」の公開停止を命じた。** 国家安全保障上の懸念を特定するが、具体的な理由は公表されていない。

Anthropicは「当社従業員の多くは外国人であり、誰が外国人か判別できない」として、やむなくモデル全体を非公開化した。業界观察筋によると、White HouseはAmazonの研究者がFable 5の安全対策をバイパスする方法を発見したとの報告を受け、動いたとされる。Amazon CEO Andy Jassyがこの問題をWhite Houseに提起した。

面白いのはRebecca Bellanの指摘だ。「ここは『全ての米国人がネットワーク防御に支障をきたす』と主张するサイバーセキュリティ専門家たちの公開質問状配布の状況にある。」また「Anthropicは反逆者のキャラクターを得て、結局は良いPRになった可能性がある」と分析する。

開発者視点では、**輸出管理命令がAIラボの事業継続に与えるリスク**が改めて浮き彫りになった。クラウド経由での海外アクセスを完全に遮断することは技術的に困難であり、モデルの完全な非公開化が最低限のコンプライアンス対応となる。今後も類似の命令が続く可能性が高く、AIラボの事業展開には地政学的リスクの評価が不可欠になる。

---

## 2. iOS 27で登場：「Siri以外」の実用AI機能群

AppleはWWDCでSiriのAI刷新を大々的に発表しましたが、開発者にとってより実用的なのは他の場所に隠されたAI機能群だ。

**請求書の割り勘がApple Cashで自動化される。** レシートの写真を撮影すると、Apple Intelligenceがアイテムを抽出し、グループチャットで分担額を請求できる。税とチップも正確に按分され、双方向に動作する。

**パスワード自動更新機能**も注目に値する。データ漏洩で危険にさらされたパスワードを、AIが网站上を自律的にナビゲートして自動更新する。ユーザーは手動でパスワードを変更する必要がなく、指先で確認するだけでセキュリティが強化される。

Messagesアプリでは、会话の文脈に基づいて**一击ヒント**が表示される機能が導入される。例えば、友人が何かを持ってくるよう求めると、リマインダー追加のヒントが表示される。写真共有の提案、カレンダーへのイベント追加など、コンテキストを理解した提案が当たり前になる。

開発者にとってApple IntelligenceのAPIと苹果のAI戦略の舵取りは、Consumer AI应用を構築する上で重要な判断材料になるはずだ。

---

## 3. ノーベル賞科学家John Jumper、DeepMindからAnthropicへ

**AlphaFoldで2024年ノーベル化学賞を受賞したJohn Jumperが、Google DeepMindからAnthropicに移籍する。** 約9年間Googleに貢献したJumperは、DeepMind CEO Demis Hassabis로부터「博士号取得から6个月後にAlphaFoldチームを率いることを許可」という彼の信念を示されたと語っている。

Jumperの離脱は、Google DeepMindにとって大きな痛手だ。同社は現在、開発したコーディングツールのビジネス化が思うように進んでいない狀態にある。さらに、Character AI共同創業者のNoam Shazeerも今週DeepMindを離れOpenAIに参加することが判明している。

AIラボ間の人材獲得競争激化が鮮明になる中、**どの組織がトップ研究者を引き止められるかが、生成AI競争の重要な分かれ目**になりつつある。

---

## 4. Amazon、独自AIチップ「Trainium」の外部販売を検討 — Nvidia挑む

AmazonはAWSを通じて、AIチップ「Trainium」を他のデータセンターにも販売することを検討している。CEO Andy Jassyは年間の株主レターで、「もしChip businessが独立した事業として、AWSと他の第三者に今年生産されたチップを販売するなら、年間ランレートは約500億ドルになる」と記載していた。

現状のTrainiumチップ生产能力は即座に完売し、次のTrainium4も1年以上の纳入待ちの状態にある。さらにAWSは最近OpenAIとも提携し、競合他社への供給余力はさらに逼迫している。

ただ、Nvidiaは現在のところ売上高ランレート3,260億ドルに達しており、500億ドルはIntelの年間売上高に相当する規模感だ。Nvidiaの牙城を崩すにはまだ距離を置くが、**Amazonがクラウド以外的にもチップ市場で存在感を拡大するという戦略**は明確だ。

開発者にとって、AWS TrainiumはAzureのMaia、GoogleのTPUと共に、Nvidia GPUs以外のAI推論基盤の選択肢として今後重要性を増していく。

---

## 5. OpenAI、IPO準備で大型採用 — Noam ShazeerとDean Ball

OpenAIはIPOに向けて大型採用を進めている。今週、**Google DeepMindのAI伝説Noam Shazeerと、トランプ前政権のAI政策担当Dean Ballの2名を同時獲得**した。

Shazeerは2017年の画期的論文「Attention Is All You Need」の共著者であり、現代の生成AIの奠基者の一人だ。Character AIを共同設立後、Googleに27億ドルで復帰したが、このたびOpenAIに移籍する。

Dean BallはWhite Houseで「America's AI Action Plan」の策定に関与した後、Foundation for American Innovationの上級院士として戻っていた。7月6日から「Strategic Futures」という新チームリーダーとして登用され、カタストロフィックリスク、再帰的自己改善、労働市場への影響、フロンティアラボと政府の関係をを扱う。

IPOを控えたOpenAIが政策と技術の両面で大型採用を行うのは、規制環境への対応力を強化するためだ。Anthropicが政府との軋轢に直面する中、**OpenAIは、政府との太い管道を確保することで競争優位に立つ**戦略が鮮明だ。

---

## 6. インファレンステックBaseten、わずか5个月で估值3倍超の15億ドル調達

AI推論スタートアップのBasetenが、15億ドル規模の資金調達を最終調整している。估值は130億ドルとなり、わずか5个月前の50億ドルから160%上昇した。

2019年設立のBasetenは、「推論ゴールドラッシュ」の恩恵を受けている。リクエスト最优なモデルにルーティングし、コスト効率的なオープンソース代替を活用することで、急速な推論とコスト抑制を約束する。

この調達は、**推論レイヤーがLLMよりも高いマージinalityを実現できる可能性**を示している。モデルの訓練競争が落ち着く中、推論の効率化和最適化を目指すスタートアップへの投資が加速している。

---

## 参考リンク

- [When the Trump administration cracks down on Anthropic, who benefits? - TechCrunch](https://techcrunch.com/2026/06/21/when-the-trump-administration-cracks-down-on-anthropic-who-benefits/)
- [Beyond Siri: Here are the practical AI features coming to your iPhone in iOS 27 - TechCrunch](https://techcrunch.com/2026/06/21/beyond-siri-here-are-the-practical-ai-features-coming-to-your-iphone-in-ios-27/)
- [Nobel laureate John Jumper is leaving DeepMind for rival Anthropic - TechCrunch](https://techcrunch.com/2026/06/20/nobel-laureate-john-jumper-is-leaving-deepmind-for-rival-anthropic/)
- [Amazon hopes to challenge Nvidia more directly by selling its AI chips - TechCrunch](https://techcrunch.com/2026/06/18/amazon-hopes-to-challenge-nvidia-more-directly-by-selling-its-ai-chips/)
- [OpenAI is bringing on some big guns in the lead-up to its IPO - TechCrunch](https://techcrunch.com/2026/06/18/openai-is-bringing-on-some-big-guns-in-the-lead-up-to-its-ipo/)
- [AI inference startup Baseten reportedly raising $1.5B months after its last mega-round - TechCrunch](https://techcrunch.com/2026/06/18/ai-inference-startup-baseten-reportedly-raising-1-5b-months-after-its-last-mega-round/)

---

*本文の情報は2026年6月22日時点のものです。*
