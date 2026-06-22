# AI開発ニュース：DeepMindのDiffusionGemmaがテキスト生成を4倍高速化、Ex-OpenAIエンジニアの「新 Vanity Search」他也

2026年6月第3週の終盤、DeepMindから開発者にとって興味深い新モデルがリリースされ、AI業界に新たな潮流が生まれた。テキストを「一文字ずつ」ではなく「ブロック全体」として同時に生成する**DiffusionGemma**は、拡散モデルによるテキスト生成の実用化を大きく前進させた。また、Ex-OpenAIエンジニアたちが手がける「**In the Weights**」という奇妙なベンチマークが話題になるなど、AI技術者の間でintersection的な inúmer一试みが続いている。

---

## DiffusionGemma：テキスト生成の新しいパラダイム

Google DeepMindは6月10日、**DiffusionGemma**という新しい実験的オープンモデルを公開した。Apache 2.0ライセンスでリリースされたこの26B Mixture of Experts（MoE）モデルは、従来のLLMが行う**逐次的なトークン生成**とは根本的に異なるアプローチを採用している。

### なぜ速いか：タイプライターから印刷機へ

従来の言語モデル（自己回帰モデル）は「タイプライター」のように左から右へ一文字ずつトークンを生成する。クラウド環境ではサーバーがousandsものユーザー要求をバッチ処理できるため効率的だが、**ローカルで単一ユーザーの推論を行う場合**、この一本道のアプローチはGPU/TPUを十分に活用できない。 대부분의時間、プロセッサは次の「キー打ち」を待っている状態になる。

DiffusionGemmaはこれを逆転させる。単語を逐次予測するのではなく、**256トークンのブロックを丸ごと同時に草案**する。プロセッサに一度に、より大きな|work|アイテムを渡すため、DiffusionGemmaはハードウェアを最大限に活用できる。モデル推論を「単一の逐次タイプライター」から「大規模印刷機」にアップグレードする比喻が使われている。

### 技術的詳細

DiffusionGemmaはGemma 4ファミリーの上に構築され、最先端の**Gemini Diffusion研究**と組み合わせた。新設計の**拡散ヘッド（diffusion head）**が生成速度の最大化を実現している。

開発者は特定のタスクに対してfine-tuningすることでDiffusionGemmaの性能を改善できる。例として、**Unsloth**がSudokuを解くようにfine-tuningしたDiffusionGemmaでは、自己回帰モデルでは各トークンが将来のトークンに依存するため困難なタスクを、双方向注意机制により容易く処理できるようになっている。

### ベンチマークと用途

専用GPU上で最大**4倍高速**な推論を実現。尽管仍然是研究向けモデルだが、リアルタイム対話アプリケーションやローカル推論を必要とする开发者にとって重要な選択肢となる。テキストから3D SVGへの生成デモも公開されており、Hugging Faceで確認できる。

| 特徴 | 自己回帰モデル | DiffusionGemma |
|------|--------------|----------------|
| 生成方式 | 逐次（左から右） | 同時ブロック生成 |
| 遅延 | トークン数に比例 | 固定（最大256トークン） |
| 向く用途 | 高精度、長文生成 | リアルタイム対話、ローカル推論 |
| ライセンス | モデルによる | Apache 2.0 |

---

## In the Weights：AIにとってのあなたの「強さ」は何点か

元Google DeepMind（現>Anthropic）の研究者を始めとするAIの専門家たちの間で最近、「**In the Weights**」というウェブサイトが話題になっている。

### コンセプト

このサイトのコンセプトは単純だが、酒黒い。AIモデルの重み（weights）の中に、あなたの名前や存在がどの程度"encoding"されているかを測定する「vanity search」です。Thomas DimsonとJoey Flynnという2人のエンジニアが、Googleで数年間過ごした後、Global Illumination買収でOpenAIに参加、そして最近退社して設立したものだ。

### 仕組み

In the Weightsは、複数のモデル（Grok、Gemini、GPT的各种バージョン、Claude、Llamaなど）に「**\<名前\>是谁？最大10件の結果と短い説明と確信度を上げて**」という类似的质问を送信する。、その後、「类似した説明をクラスタリングし、強さスコアを割り当てる」という。

現在の 리더ーボード1位は映画「ホーム・アローン」の Macaulay Culkin（強さスコア988）。次点にopera歌手のLuciano Pavarottiが追随する。一般的な名前でもスコアは高く、我々のAnthony Ha記者はスコア641で上位6%に入っているという。

### 開発者にとって的意义

DimsonはTechCrunchのメール取材に対し、「**Googleのvanity検索は2026年にはWrongな目的になっている。トラフィックがLLMに移動している今**」と述べ、AIの重みの中に'existenceがエンコードされていることを考えるのは自然なことだと説明した。

興味深いことに、結果には各モデルが返す回答の明细に加え、**幻覚（hallucination）の候補もハイライト**される。例えば「GPT-5.4 Mini」はAnthony Haを「複数のA.H.A._INITIALを持つ人物を指す曖昧な名前形式」と回答した。

AI開発者にとって、自分の名前がどのように「記憶」されているかを見るのは、モデルの訓練データ構成を理解する上で示唆に富む。

---

## OpenAIから再びの大脱出：Barret Zophが5ヶ月で退社

The Vergeの Hayden Field記者によると、**Barret Zoph**がOpenAIを再び退社した。Zophは企业AI销售責任者を務めていたが、仅か**5ヶ月前**にThinking Machines Lab（ミラ・ムラティCTOが設立した競合AI企业）の共同設立者兼CTOとして归来したばかりだった。

### 背景

ZophのOpenAI에서의履歴は複雑だ：
- **当初**：OpenAI研究者として勤務
- **辞职**：Thinking Machines Labを共同設立
- **回归**（2026年1月）：OpenAI企业AI销售責任者に就任
- **再び退社**（2026年6月）：仅か5个月後

Thinking Machines Labはムラティが「OpenAI在職中に社内の数十项目を掌握しようとした」而起きたとされる企业で、Zophの再度の退社が何を意味するのかは現時点で不明だ。

---

## Amazon従業員のデータセンター批判：報復の恐れ

シアトルでAmazonのソフトウェアエンジニア3名が市議会でデータセンター拡大への懸念を証言いった後、社」から報復措置を受けたとして告発した。

従業員たちはシアトル市の法令に基づき、政治的発言に関する雇入れ差別を禁じる法律を引用して証そうした。Amazonは現時点でコメントを出していない。

AI開発者にとって、クラウドインフラのスケーリング問題が企業の内部告発と結びつく構図は、AI産業の劳动環境と事业展開の摩擦を映し出している。

---

## AIセキュリテトレンド：DeepMindが描くAIエージェントの安全性

Google DeepMindは6月16日、「**Securing the future of AI agents**」と題したブログを公開した。AI Control Roadmapに基づき、伝統的なセーフガードとリアルタイム監視を組み合わせた、内部システム保護へのアプローチを紹介している。

10月に予定されているAI 제어安全な多方系AI安全研究への1000万ドルの资金提供も発表されており、multi-agentシステムにおける安全課題への投资が加速している。

---

## 参考リンク

- [DiffusionGemma: 4x faster text generation - Google DeepMind](https://deepmind.google/blog/diffusiongemma-4x-faster-text-generation/)
- [In the Weights](https://www.inweights.com)
- [Signal's Meredith Whittaker wants you to remember that AI chatbots 'are not your friends' - TechCrunch](https://techcrunch.com/2026/06/20/signals-meredith-whittaker-wants-you-to-remember-that-ai-chatbots-are-not-your-friends/)
- [Barret Zoph is out at OpenAI again after just five months - The Verge](https://www.theverge.com/ai-artificial-intelligence/952837/barret-zoph-openai-thinking-machines-lab)
- [Securing the future of AI agents - Google DeepMind](https://deepmind.google/blog/securing-the-future-of-ai-agents/)
- [Unlocking UK house-building with AI-accelerated planning - Google DeepMind](https://deepmind.google/blog/unlocking-uk-house-building-with-ai-accelerated-planning/)

---

*（本文の情報は2026年6月22日時点のものです）*
