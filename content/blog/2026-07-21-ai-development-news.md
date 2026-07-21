# AI開発ニュースまとめ（2026年7月21日）

今週のAI開発領域は、法的決着、技術突破、規制動向、ハードウェア刷新が同時に進展した。Anthropicの大型著作権和解、Googleの新型AIチップ計画、Bristol Myers SquibbによるNvidia AIシステム導入、中国製オープンウェイトモデルの輸出管理問題、そしてAIプロトコルの改良まで—— 生成AIからロボティクスまで幅広い話題を整理する。

---

## Anthropic、著作権侵害訴訟で15億ドルの和解成立

AI企業Anthropicは、複数の出版社から集団訴訟を起こされていた著作権侵害訴訟について、連邦裁判所にて歴史的な和解金が承認された。The final approval settles one case, but it doesn't resolve the broader issue of using copyrighted works to train AI models.とTechCrunchが報じた。

AnthropicはClaudeシリーズで知られるスタートアップで、出版各社から training dataとしての書籍使用は著作権侵害に当たるとして訴追されていた。和解の条件詳細は非公開だが、学習データとしての著作物利用に対する法的な疑義が一段と深まる結果となった。

**開発者視点**では、この和解はAI開発におけるデータ調達の法的リスクを再認識させるものだ。トレーニングデータの出所管理、attribution対応、rights holderとの契約形態など、実務上の対応が急務となる。

---

## Google、新型AIチップでGemini効率改善計画を報道

Alphabet傘下のGoogleは次に向け、新型AIチップの開発を進めていることが明らかになった。TechCrunchが入手した情報によると、同社はNvidiaのVera Rubinアーキテクチャを活用したカスタムAIアクセラレーターを計画している。

このチップはGoogleのフラッグシップLLMであるGeminiシリーズにより効率的に動作させることを目指す。既存のTPU（Tensor Processing Unit）ラインとは別系統の開発となり、Nvidia協業深化が読み取れる。

GeminiはGoogle SearchやGeminiアプリ面で广泛应用しており、パフォーマンスとコスト効率の改善は重要な経営課題だ。

---

## Bristol Myers Squibb、Nvidia DGX SuperPODで創薬AI基盤を構築

製薬大手Bristol Myers SquibbはNvidiaのDGX SuperPODシステムを導入し、創薬プロセスのAI化を進めることが判明した。AI Newsの報道によると、このシステムはNvidiaのVera Rubinアーキテクチャ上に構築され、ライフサイエンス分野初のDGX SuperPOD導入企業となる。

DGX SuperPODは大規模言語モデルや生成モデルのトレーニングに向けたHPCインフラストラクチャで、創薬における分子デザインや 후보化合物スクリーニングの高速化が期待される。

Bristol Myers Squibbは免疫学やオンコロジー分野で知られ、AIを活用した創薬研究の質的転換を目指している。

---

## 中国製オープンウェイトモデルのコスト優位性、米国の輸出管理論議

AI Newsが伝えたところによると、企業が中国製オープンウェイトモデルを採用するかどうかで揺れている。ベンチマーク上の性能ではなく、米国の輸出管理制度上のリスクが評価の中心になっている。

Moonshot AIのKimi K3が7月16日に最大のオープンウェイトモデルとして登場し、米中間の政策議論を再燃させた。中国AI企業多くは低コストでオープンウェイトモデルを提供しており、米企業との価格優位性が顕著だが、輸出管理令の改正議論が進んでいる。

**開発者視点**では、オープンソース・オープンウェイトモデルのうちどこが輸出規制の対象になるか、そしてそれがモデル選択にどう影響するかの不透明感が続く。

---

## Gritt、太陽電池工場建設ロボットに34億円の出資を獲得

建設現場自動化のスタートアップGrittが3,400万米ドル（推定34億円）を調達し、ステルス状態を解除した。TechCrunchの報道による。

Grittのロボットは建設現場で最も困難な作業を自動化し、太陽電池工場建设中での活用を目指している。建設業界は深刻な労働力不足に直面しており、自動化への期待が高まっている。

今回のラウンドはシリーズA規模で、主要VCが参加。創設者は建設業界での実務経験があり、ロボティクスと建設の境界領域で注目を集めている。

---

## AIプロトコル、MCPのセッショ管理が簡素化

TechCrunchが伝えたところによれば、AI今日の最も重要なプロトコル が少し使いやすくなるという。MCP（Model Context Protocol）の新しい仕様では、サーバー側でセッションIDを Stateless に扱う方針が採用され、一般的なWebサイトの仕組みに近づいた。

この変更により開発者はセッション管理の実装負荷が軽減され、AI агент間の連携が容易になる。

---

## 参考リンク

- [Anthropic copyright settlement - TechCrunch](https://techcrunch.com/2026/07/20/anthropics-landmark-1-5b-copyright-settlement-is-approved/)
- [Google AI chip development - TechCrunch](https://techcrunch.com/2026/07/20/google-is-working-on-a-new-ai-chip-designed-to-make-gemini-more-efficient/)
- [Bristol Myers Squibb Nvidia deal - AI News](https://www.artificialintelligence-news.com/news/bristol-myers-squibb-nvidia-ai-system-drug-discovery/)
- [Chinese open-weight models - AI News](https://www.artificialintelligence-news.com/news/chinese-open-weight-models-policy-risk/)
- [Gritt robotics funding - TechCrunch](https://techcrunch.com/2026/07/21/gritt-exits-stealth-with-34-million-for-robots-to-build-solar-plants-then-everything-else/)
- [MCP protocol update - TechCrunch](https://techcrunch.com/2026/07/20/ais-most-important-protocol-is-getting-a-little-bit-easier-to-use/)

---

*本記事の情報は2026年7月21日時点のものです。*
