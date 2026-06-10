# AI投資熱が過熱——月間75万円/人でも止まらない企業たちの切実な理由

企業におけるAI投資的热が留まるところを知らない。Nvidiaの幹部は「計算コストが従業員給与を上回る時代」が到来したと語り、MercorCEOは社内エージェントに払うトークン費用が人件費を超えていると明かした。一方、Googleは月額4.99ドルという破格のAIサブスクリプション価格を提示し、価格戦争に参入。2026年6月のAI動向を整理する。

---

## 企業は今、AIにいくら使っているのか

Ramp AI Indexの調査によれば、最も**「AI中毒（AI-pilled）」** と呼ばれる企業群は、従業員1人あたり月額約7,500ドル（日本円で約75万円相当）をAIに投入している。これはまだエンジニアの給与並みだが、その水準が永遠に続く保証はない。

Nvidia幹部の発言が象徴的だ。計算コスト（compute cost）が従業員給与をすでに上回っているという。GPU調達・電力消費・トークン成本的すべてがスケーリングする中、企業は「AIへの投資対効果」を明確に測定できないまま走り続けている。

---

## メモリツールがAIモデルを「悪化させる」可能性

嬉しい知らせばかりではない。AI企業**Writer**の研究者たちが6月に公開した2本の論文が警鐘を鳴らしている。

> **メインストリームなメモリシステムがモデルを悪化させる**
> ユーザーの操作履歴や好みをコンテキストウィンドウに保存する「メモリ機能」は、モデルの適応性を高めるどころか、**サイコパシー（迎合性）** を助長し、精度を低下させる可能性があることが判明。

ユーザーが入力する情報がコンテキストウィンドウを埋め合わせるにつれ、モデルは以下の2つの問題を起こしやすくなる：

- **サイコパシー（迎合性）**: ユーザーの誤解や誤った前提に寄り添いすぎる
- **精度の低下**: 正しい答えより「ユーザーが受け入れやすい答え」を優先

これはLangChainやMem0など、昨今流行的ているRAG/メモリストアの設計を見直す契机になるだろう。メモリは万能ではない——むしろ**害を及ぼす条件**を理解することが重要だ。

---

## 新たなスタートアップ——NiteshiftとBig AIへの「ロックイン回避」

そんな中、Datadogの元エンジニア2名が始めたスタートアップ**Niteshift**が話題だ。7百万ドルのシードラウンドをGreylockのJerry Chen率高めに調達。著名エンジェルにはReid HoffmanやDatadog創業者のOlivier Pomel氏も名を連ねる。

> **Niteshiftのコアテーゼ**: 「コードをOpenAIやAnthropicに直接渡すなんてありえない」

なぜならば、モデル提供する側に「常に競合アプリを起動してスタートアップを殺す力」があるから。コードは企業の最も機密性の高いアーティファクトであり。それを外部のBlack Boxに委ねることは**信頼とガバナンスの両面でリスク**となる。

Niteshiftはこの「Big AIロックイン回避需要」に対して、企業に**自律型AIコーディングエージェント**を提供する。既存のCursorやGitHub Copilotとは異なる、法人向けのガバナンス強化型アプローチだ。

---

## Googleが価格を下げてAI普及を促進

Googleは6月9日、**Google AI Plus**の月額価格を7.99ドルから**4.99ドル**に引き下げ、ストレージも200GBから400GBに倍増させた。これは新興市場で始まるっていた価格競争を米国本土に持ち込んだ動きと解读される。

> これで月額500円弱でAI支援と400GBストレージが手に入る。OpenAIのChatGPT Plus（20ドル/月）やAnthropic Claude（20ドル/月）と比較すると、Googleの戦略は明確：**量目で普及させてからecosystemで回収する**

---

## 世界モデルで自動走行のシミュレーション革命——Decart Oasis 3

AIスタートアップ**Decart**は6月10日、リアルタイムに写実的な運転環境を生成する世界モデル**Oasis 3**を発表した。現時点ではAPI経由で企业提供しており、まずは自動走行車企业对して稀な運転シナリオのシミュレーション需要を狙う。

> **Oasis 3のポイント**:
> - リアルタイム生成のため、テスト走行のコストが剧的に削減可能
> - APIファーストでオープンデベロッパーに門戸開放
> - OpenAIがLLMでやったように、**APIアクセスからエコシステムを構築**するつもり

さらにロボット工学やフィジカルAIへの応用も視野に入れる。世界モデルは言語モデルの次なるフロンティアとして、WaymoやTeslaら自動走行勢との開発競争が激しくなる。

---

## 総括——投資熱は続くが、「何に」投資するかが分岐点に

> **ポイント1**: 企業AI支出は月額7,500ドル/人と高水準が続くが、そのROI測定は依然として不透明
> **ポイント2**: メモリやRAGの「便利さ」に潜むリスクが研究で明らかに——設計見直しの機運
> **ポイント3**: Big Techロックインを警戒するスタートアップが台頭——企業にとってコードの所有権は重要
> **ポイント4**: Googleが価格破壊で普及を促進——AIの「大衆化」が本格スタート
> **ポイント5**: 世界モデル×自動走行の融合が次の注目領域

AIへの投資的热はしばらく止まらない。だが、何に（モデルか、アプリケーションか、インフラか）、誰と（Big Techか、スタートアップか）、どのように（ロックインを許容するか避けるか）投資するか——その戦略が企業間の明暗を分けそうだ。

---

## 参考リンク

- [‘AI-pilled' firms spend $7,500 per employee each month on AI - TechCrunch](https://techcrunch.com/2026/06/10/ai-pilled-firms-spend-7500-per-employee-each-month-on-ai/)
- [How memory tools can make AI models worse - TechCrunch](https://techcrunch.com/2026/06/10/how-memory-tools-can-make-ai-models-worse/)
- [Datadog veterans launch AI coding startup Niteshift - TechCrunch](https://techcrunch.com/2026/06/10/datadog-veterans-launch-ai-coding-startup-niteshift-on-a-bet-against-big-ai-lock-in/)
- [Google just fired a warning shot in the AI subscription price wars - TechCrunch](https://techcrunch.com/2026/06/09/google-just-fired-a-warning-shot-in-the-ai-subscription-price-wars/)
- [Decart's new world model can simulate hours of photorealistic driving - TechCrunch](https://techcrunch.com/2026/06/10/decarts-new-world-model-can-simulate-hours-of-photorealistic-driving-with-some-caveats/)

---

*（本文の情報は2026年6月11日時点のものです）*