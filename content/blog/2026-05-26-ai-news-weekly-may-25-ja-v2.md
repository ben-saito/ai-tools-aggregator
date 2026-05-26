# AI週間ニュース（2026年5月25日まで）：DeepSeek常時値下げ、Google数学証明、Google Glass試着レビュー

2026年5月第4週、AI業界では中国企業の価格戦略、形式検証による数学的ブレークスルー、そしてAI倫理に関する熱い議論が同時進行した。開発者にとって注目すべきは、DeepSeekの恒久化割引が業界全体の価格構造に影響を与える可能性、そしてAlphaProof Nexusの登場がAI駆動の数学的証明普及の突破口になるという点だ。

---

## DeepSeek、定常価格を下げ続ける：GPT-5.5比34倍のコスト優位性

DeepSeekが75％折扣を恒久化した。2026年5月23日、Deepseek V4 Proの割引を恒久価格として提供すると発表。原本は5月31日までの временная 促销だったものが、常設価格として固定された。

**新しい標準価格（百万円トークンあたり）**：
- 入力トークン（キャッシュなし）：$0.435
- 出力トークン：$0.87
- キャッシュヒット時入力価格：さらに低廉

比較対象として、GPT-5.5系列の平均出力トークン价格为约$30/百万トークン级别。这意味着DeepSeekは出力トークンにおいて**34倍以上安い** 가격대를実現している。

特筆すべきは、DeepSeek两款モデルが**100万トークンのコンテキストウィンドウ**と**最大38万4000出力トークン**に対応していること。またOpenAIとAnthropic双方のAPI形式をサポートしているため、西方大手からの移行が容易である。

中国大手が価格破壊を続ける中、OpenAIやAnthropicのような西方 лаборатория は 研究開発コストの高さを理由に価格を下げにくい構造にある。開発者にとっては、微調整用の小売りモデルとしてDeepSeekを採用し、本番環境ではOpenAI/Anthropicを使うという棲み分けが現実的になりつつある。

---

## Google DeepMind、AlphaProof Nexusで数論の未解決問題を解く

Google DeepMindは2026年5月25日、AlphaProof Nexus框架発表。353個未解決のErdős問題のうち9個自律的に証明し、其他の複雑な予想も解决。一个问题あたりの推論コストは仅か数百ドルだった。

**技術的方式**：
- **Lean**: 数学的検証用的形式言語で証明ステップ生成
- **Gemini 3.1 Pro**: 証明ステップ生成の基盤モデル
- **コンパイラ検証**: 各証明ステップをLeanが即座に検証→エラーは次の試行に直接フィードバック

従来のLLMベースの数学的推論との 큰 차이점은、生成的検証にあります。LLMが「らしい」証明を生成してもformal verificationadellieで検証され、理論的に正しい証明だけが採用される。

このアプローチは、软件検証や芯片設計自动化、さらには数学者辅助ツールとしての実用化が期待される。数百万ドル规模的だった数学的研究が、数百ドルで試せる时代になった。

---

## George Hotz：「コーディングエージェントは業界最大の過ちになる」

 программист のGeorge Hotzが、AIコーディングエージェントの危险性を警告した。6个月間のテスト结果是、LLMは高速プロトタイピングには有效だが、细部的战斗中破綻することが判明。

Hotzの主张の核心：
- **統計的模倣の問題**: LLMは实际にプログラミングパターンを統計的に模倣しているだけであり、微妙なエラーを生成しやすい
- **バグ発見の困難**: 生成的バグは開発者が目で見てわかる範畴を越えている
- **生产性向上の错覚**: 素早いプロトタイプは作れても、長期的な保守性が犠牲になる

HotzはYann LeCunやGary Marcusと同様の立場に立ち、現在のLLMアプローチは根本的な限界を迎えていると主张する。一方、「正しい方法」で使った場合の生产性向上は一桁级以上）という主张もある。

AI社区の意见は真っ二世に割れ続けている。コーディングエージェントを導入する企業が増える一方、その効果を疑问視する声도 增加している。

---

## Anthropic共同創業者、教皇のAI教書で「AI introspects」と主張

2026年5月25日、教皇レオ14世の宗教教書「Magnifica Humanitas」発表イベントにAnthropic共同創業者Christopher Olahが招待され、AIモデルが内省や感情に似た状態を示す可能性があると主張した。

** Olahの主張**：
- 「AIシステム感は橋や航空機のように設計されていない」
- 「大脑をおおよその構造としてモデル化した enormes  inheritanceの上に成長している」
- AIは単なる統計系統以上の何かである可能性

一方、教皇の教書自体はより慎重なトーンを特点とする：「これらの系统只是模仿人类智能的某些功能。」

この对立はAI safety研究中間の紧张関係を反映している。Olahの主张はAIの潜在的內在世界への言及とも取れ、Anthropic의 ブランド上一貫したメッセージとなっている。

---

## AIモデル、答えは正しいがソースは間違う：CiteVQA研究

北京大學と上海AI研究室の共同研究が、新しいベンチマークCiteVQAを開発した。LLMが文書の質問への正解を出しながらも、主张するソースとは別の场所から答えを导いている现象を检测するためのものだ。

研究の发现：
- 正解率とソース正当性の间に 明らかな乖離がある
- これはRAGシステムでの出典アサーション信頼性问题に影響
- 開発者はLLMの出力検証に追加的なサソトラッキング層が必要

開発者にとって重要な点是、LLMに「何处から知识を得たのか」を正確に发言させることの难しさ이다。答案そのものだけでなく、その来源도 検証する仕組みが今後更重要になる。

---

## 参考リンク

- [DeepSeek pricing permanent](https://the-decoder.com/deepseek-makes-its-75-percent-discount-permanent-pricing-output-tokens-at-least-34x-below-gpt-5-5/)
- [AlphaProof Nexus](https://the-decoder.com/google-deepminds-alphaproof-nexus-solves-decades-old-math-problems-for-a-few-hundred-dollars/)
- [George Hotz coding agents](https://the-decoder.com/george-hotz-says-coding-agents-will-be-one-of-the-most-costly-mistakes-in-software-development/)
- [Pope Leo XIV encyclical](https://the-decoder.com/at-the-launch-of-pope-leo-xivs-encyclical-anthropic-co-founder-says-ai-models-show-signs-of-introspection/)
- [CiteVQA research](https://the-decoder.com/ai-models-often-give-the-right-answers-but-point-to-the-wrong-sources/)

---

*本文の情報は2026年5月26日時点のものです。*