# AI開発週報：MCPの stateless 対応、Open-weight規制論争、Google独自チップ開発など

2026年7月第3週のAI開発ニュースをまとめる。先週はAIプロトコルの改良、オープンウェイトモデルの規制議論、ハードウェア競争の加速が目立った。

---

## Model Context Protocol（MCP）が stateless アーキテクチャへ刷新

AIアプリケーション間の接続プロトコルであるMCPが、サーバー側でセッションIDを保持しない「stateless」なアプローチを採用し、Web技術が主流とする標準的な方式に近づいた。Anthropicが推進するこのプロトコルは今年以来急速に普及し、現在では数千のAIネイティブアプリケーションが対応している。

従来のMCPではサーバー側がセッション状態を維持する必要があり、実装の複雑さの原因になっていた。stateless化により、個人開発者でも最小限のコードでMCP対応ツールを構築できるようになる。技術者として見ると、MCPの標準化はAIエージェント間の相互運用性を大きく前進させる出来事であり、LangChainやLlamaIndexなどのフレームワークが公式対応したことも追い風となっている。

---

## OpenAIが主張する「オープンウェイトモデル規制」の行方

TechCrunchの報道によると、OpenAIは中国政府が開発したオープンウェイトLLMの規制を米国政府に求めている。これに対し「中国製モデル对美国のAI産業竞争优势を损なう恐れがある」として、上院議員へのロビー活動を展開しているという。

この主張に対しては産業界から異論もある。オープンウェイトモデルの広がりは学術研究や中小企业でのAI導入を促進しており、規制は技术创新を减速させる可能性があるためだ。OpenAI自身的には、自社のクローズドモデル事业への竞争优位を守る意図も指摘されている。

开发者角度来看，オープンウェイトとクローズドモデルの争论は、 Llama 3 や Mistral などの开源モデルと GPT-4 などの闭源モデルの性能差が缩まる现代において、ますます複雑な议题となっている。

---

## GoogleがGemini専用AIチップ 개발中

AlphabetがGeminiモデル専用の新型AIチップ 개발中であることが分かった。現行的にはGoogleはTPUを利用しているが这次のチップはさらに 효율的さとコストカットを目指しているらしい。Appleが自社製芯片でNeural Engineを实现したように、主要AI企业が专属ハードウェアに投资する流れが加速している。

この动向は、NVIDIAのGPU依赖から脱却하려는各社の努力を反映している。Amazon（Trainium / Inferentia）、Microsoft（Maia 100）、Metaなど、各社がCustom Siliconの開発を進めている。AIモデルの推论コスト，降低することはすべての開発者にとって朗報である。

---

## 米国AI政策の动荡：Trump側のAI担当がまた辞职

Trump元大統領が指名したAI担当補佐官（Center for AI Standards and Innovation、略称CAISI）の長が就任から短期間で辞职したことが分かった。David Sacks氏に続く2人目の辞职となり、米国のAI政策の意思決定能力が不安定な状态にあることが示唆された。

CAISIはBiden政権時代に设立されたAI安全と标准化の担当部署で、NISTと共にAIリスク評価框架の整備を進めてきた。领导の入れ替わりが続けば、欧盟のAI Actのような包括的なAI規制の制定がさらに遅れる可能性がある。

---

##  другие注目ニュース

- **F1スポーツ**：比利时SPAフランコルシャン circuitsでのF1マシンのパフォーマンス问题が露呈。 машина learning 算法を活用したピット戦略やドライバーの-Line assist技術が従来のスポーツの兴奋を削いでいると批判されている。
- **AT&Tの有线電話サービス終了**：AT&TがCaliforniaでの基本电话サービス提供終了を法院に申请したが、州裁光がこれを却下した。山区部の通信保障問題が改めて浮き彫りになった。

---

## 参考リンク

- [AI's most important protocol is getting a little bit easier to use](https://techcrunch.com/2026/07/20/ais-most-important-protocol-is-getting-a-little-bit-easier-to-use/)
- [OpenAI is scared of open-weight models. Should the US be?](https://techcrunch.com/2026/07/20/openai-is-scared-of-open-weight-models-should-the-us-be/)
- [Google is working on a new AI chip designed to make Gemini more efficient](https://techcrunch.com/2026/07/20/google-is-working-on-a-new-ai-chip-designed-to-make-gemini-more-efficient/)
- [Trump's latest AI czar has already resigned](https://techcrunch.com/2026/07/20/trumps-latest-ai-czar-has-already-resigned/)

---

*本文の情報は2026年7月20日時点のものです。*
