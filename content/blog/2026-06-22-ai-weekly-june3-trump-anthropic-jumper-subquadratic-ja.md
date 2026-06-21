# 2026年6月第3週 AI開発者向けニュースまとめ

2026年6月第3週は、AI業界にとって静かな一周ではなかった。Anthropicに対する米政府の規制強化、Nobel Prize受賞者のDeepMindからAnthropicへの移動、LLMのボトルネック打破を主張するスタートアップの登場など、構造的な変化を感じさせるニュースが並んだ。本稿では開発者として注目すべきテーマを6つ厳選して解説する。

---

## 1. 米国政府、AnthropicのFable 5とMythos 5を禁止——本当に安全なモデルは存在するのか

6月第4週末、米商務省の国家安全上の理由を根拠にAnthropicの最新モデル **Fable 5** と **Mythos 5** の公開を停止させた。理由はAmazonの研究者がFable 5のガードレールをバイパスする方法を開発したという報告だった。

然而、サイバーセキュリティ研究者たちは連名で公開書を署名し、この措置は逆効果だと警告している。Same jailbreakは他のすべてのモデルにも存在しており、禁止しても問題解決にはならないからだ。Anthropic自身も同じ見解を示している。

**開発者にとってのポイント:** ガードレールの「強度」を過信すべきではない。どのモデル也不例外であり、productionでLLMを使う場合、本質的に安全な利用方法は別途設計する必要がある。輸出規制政策がAI safetyにつながるという前提自体が崩れつつある。

- [When the Trump administration cracks down on Anthropic, who benefits? - TechCrunch](https://techcrunch.com/2026/06/21/when-the-trump-administration-cracks-down-on-anthropic-who-benefits/)
- [Is the US government's Anthropic ban accidentally helping the brand? - TechCrunch](https://techcrunch.com/video/is-the-us-governments-anthropic-ban-accidentally-helping-the-brand/)

---

## 2. DeepMindからAnthropicへ——John Jumper离职が示すAI人材の流れ

2024年にAlphaFoldでNobel Prize in Chemistryを受けた **John Jumper** が、Google DeepMindからAnthropicに移籍したことが明らかになった。JumperはDeepMindの中でも特に重要な研究者であり、この离职はDeepMindにとって大きな痛手となる。

TechCrunchの報道によると、Jumperは唯一のbig name离职ではない。Google DeepMindからは複数名の研究者が流出しており、人材獲得戦争が熾烈化していることを裏付けている。

**開発者にとってのポイント:** 模型的オープンソース化が人材確保競争の文脈で語られるようになっている。Anthropicが「安全なAI」企業としてブランドを確立していることが、Mission-drivenな研究者の心を動かしている様子が見える。

- [Nobel laureate John Jumper is leaving DeepMind for rival Anthropic - TechCrunch](https://techcrunch.com/2026/06/20/nobel-laureate-john-jumper-is-leaving-deepmind-for-rival-anthropic/)

---

## 3. Subquadratic「10年間のボトルネックを解決」と主張——懐疑的な研究者たち

MIT Technology Reviewが伝えたところによると、AIスタートアップ **Subquadratic** は約10年間LLMの足を引っ張ってきた数学的ボトルネックを解決したと主張している。同社はTransformerが必要とする計算回数を劇的に削減できるとし、その結果は「より高速で安価なLLM」を実現すると述べている。

懐疑的な研究者も多いが、Subquadraticは証拠の共有を始めている段階이며、その方式是**Quadratic Attention**替代とも呼ばれる手法を採用しているらしい。

**開発者にとってのポイント:** 理論的にO(n2)とされるAttention機構の計算量をO(n log n)にする这个 문제는, 长年研究されて来たテーマだ。もし本当なら、推論コストの構造が変わる可能性がある。ただし、現時点では「Skepticalまま攻める」のが賢明だ。

- [A startup claims it broke through a bottleneck that's holding back LLMs - MIT Technology Review](https://www.technologyreview.com/2026/06/19/1139313/a-startup-claims-it-broke-through-a-bottleneck-thats-holding-back-llms/)

---

## 4. OpenAI、Transformerの共 inventor をGoogleから採用——IPO前倒し戦略

OpenAIは、Google DeepMindから **Noam Shazeer**（Transformer論文の共著者の一人）を採用した。加えて元Trump政権のAI政策担当者Dean Ballも迎え、IPO（新規株式公開）に向けた体制強化が進んでいる。

OpenAIはここ数週も人員拡大を続けており、競争激化の中での「S人獲得競争」がますます激しくなっている。

**開発者にとってのポイント:** Transformer架构の发明者本身がOpenAIに Mauuel ということは、同社の技術が今后的にも中心的役割を担うことを示唆している。もっとも、「发明者を手に入れたから技術が飞跃的に良くなる」という単純な話ではない点にも注目したい。

- [OpenAI is bringing on some big guns in the lead-up to its IPO - TechCrunch](https://techcrunch.com/2026/06/18/openai-is-bringing-on-some-big-guns-in-the-lead-up-to-its-ipo/)

---

## 5. Amazon AWS、Nvidiaに対抗してAIチップの外販を検討——$500億市場の行方

AWSのCEO Andy Jassy장은、同社のAIチップ（Trainium/Inferentia）を他のデータセンターにも販売先で検討していることを明かした。Already CEOはこの動きが$500億商机になると述べており、Nvidiaの独占状態に風穴を開ける戦略と見える。

6月18日の報道では、AI推論スタートアップの **Baseten** が$1.5Bの資金調達を検討中であることも明らかになり、推論インフラへの投資热潮もまだ終わっていない。

**開発者にとってのポイント:** チップの多样化は開発者にとって朗報だ。Nvidia依存から脱却できれば、AWS TrainiumやGoogle TPUなど、经费対効果のより良い選択肢が将成为。ただし、ソフトウェアのエコシステム（CUDA vs ROCmなど）の充実はまだ道半ばである。

- [Amazon hopes to challenge Nvidia more directly by selling its AI chips - TechCrunch](https://techcrunch.com/2026/06/18/amazon-hopes-to-challenge-nvidia-more-directly-by-selling-its-ai-chips/)
- [AI inference startup Baseten reportedly raising $1.5B months after its last mega-round - TechCrunch](https://techcrunch.com/2026/06/18/ai-inference-startup-baseten-reportedly-raising-1-5b-months-after-its-last-mega-round/)

---

## 6. AIを使いこなすエンジニアが「AI離れ」を始めている——Tokenminningの登场

NYTが伝えた興味深いトレンドがある。AI活用で生产性を极高めていたTech労働者の一部が、AI利用を极少化する「Tokenminning」（トークン最小化）を实践中だ。背景にはAI APIコストの膨らみがある。

「Tokenmaxxing」（トークン最大化）から「Tokenminning」への移行は、AI的经济学が某种の转折点に差しかかっていることを示唆している。

**開発者にとってのポイント:** すべてのプロンプトに最高のモデルを呼ぶのが正義だという时代が终わろうとしている。コスト意識もった開発が更重要になってきており、小さなモデルを工夫して使う「レシピ」が価値を持ち始めている。

- [Tech workers who maxed out their AI use are now trying to minimize it - NYT](https://www.nytimes.com/2026/06/18/technology/ai-token-minimizing.html)

---

## AI倫理への警告——SignalのMeredith Whittaker「AIチャットは友達ではない」

今週耳ををひく发言也不少。SignalのMeredith Whittaker代表は「AIチャットボットはあなたの友達ではない。意識的な存在でもない。感覚的な対話者でもない」と批判した。

この发言は、最近のAI企业对消費者向けAIを「パートナー」「助理」としても位置づける倾向への强烈な异议だ。开发者的にも、「AIに感情移入させるUI设计」に疑问を投げるものとして注目に値する。

- [Signal's Meredith Whittaker wants you to remember that AI chatbots 'are not your friends' - TechCrunch](https://techcrunch.com/2026/06/20/signals-meredith-whittaker-wants-you-to-remember-that-ai-chatbots-are-not-your-friends/)

---

## bonus: iOS 27のAI機能——Siri以外的の実用的機能

WWDCで話題はSiriのAI刷新だったが、AppleがiOS 27に導入する実用的なAI機能は另有不少存在する。写真編集、音声メモの文字起こし、邮件の自動分類など、開発者としては「一般ユーザーが日常的に使うAI機能」の潮流可以看到。

- [Beyond Siri: Here are the practical AI features coming to your iPhone in iOS 27 - TechCrunch](https://techcrunch.com/2026/06/21/beyond-siri-here-are-the-practical-ai-features-coming-to-your-iphone-in-ios-27/)

---

## 参考リンク

- [TechCrunch AI News](https://techcrunch.com/category/artificial-intelligence/)
- [MIT Technology Review](https://www.technologyreview.com)
- [The Download: AI bottleneck debates, and BCI trials take off - MIT Technology Review](https://www.technologyreview.com/2026/06/19/1139327/the-download-llms-bottleneck-breakthrough-bci-trials-take-off/)

---

*本周の情報は2026年6月22日時点のものです。各リンク先は時間の経過とともに変更される可能性があります。*
