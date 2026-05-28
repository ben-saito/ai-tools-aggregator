# AI開発ニュース（2026年5月29日）：Claude Opus 4.8の「正直さ」、CNN対Perplexity訴訟、RSIという新概念

2026年5月28日、AI業界で複数の重要な動きがあった。AnthropicのClaude Opus 4.8が「正直さ」を大きく改善、CNNがPerplexityを著作権侵害で提訴、AI企業の「SINGO」問題、そしてを再帰的自己改善（RSI）がAGIの代わりに業界の焦点になるなど、開発者にとって注目すべきニュースが多い。

---

## Anthropic、Claude Opus 4.8を発表——「正直さ」4倍向上

Anthropicが**Claude Opus 4.8**をリリースし、モデルの「正直さ（honesty）」が大きく改善されたと発表した。Anthropicによると、Opus 4.8は「サポートできない主張を避ける」などTruthfulness trainingを徹底しており、**前バージョン比で4倍低い確率で未サポートな主張を行う**という。

### Dynamic Workflows：Agent Swarmsの統合

Opus 4.8の目玉機能として**Dynamic Workflows**が導入された。これは複数のサブエージェント（agent swarms）を調整するためのツールで、複雑なタスクを自律的に分割・実行できる。TechCrunch》报道によれば、Cognitionが10億ドル調達で話題になったAI coding agent市場と同様に、Anthropicも「 AI agent間の協調」を新たな差別化要因として位置づけている。

**開発者にとっての意味**:
- **LLMの正直さ**が評価基準に——出力の信頼性が更重要に
- Dynamic Workflowsは**multi-agent system**の設計パターンとして注目
- AI coding agentとの組み合わせにより、ソフトウェア開発ワークフローが変革

---

## CNN、Perplexityを著作権侵害で提訴

CNNがAI検索エンジンの**Perplexity**を提訴した。CNNの主張は以下の通り：

- PerplexityがCNNの記事を「そのまま」コピーして回答を生成
- subscription-requiredなコンテンツへのlock-in回避を提供
- CNNのrobots.txtを無視したクローリング

これはAI企业对する?**著作権・コンテンツ利用**の重要な判例となり得る。開発者にとって、**AIサービスのコンテンツ利用における法的リスク**を再評価する必要がある。

**開発者にとっての意味**:
- AI应用中における**著作権 compliant**な設計重要性
- Webクローリングのrobots.txt尊重が法的に義務化の可能性
- AI answer engineのビジネスモデルは再考必需

---

## RSI（再帰的自己改善）がAGIの代わりに新たなBuzzwordに

TechCrunchのRussell Brandom記者が**RSI（Recursive Self-Improvement）**を取り上げた。AI企業間の新たな競争軸として、「モデルが自らより良いモデルを作成する」能力の開発が焦点になっている。

Alex Karpathy率いる**neoLab**などの新興企業や、OpenAI、Google DeepMind在内的主要企業多くがRSIに投資している。だが、その定義づけは依然として困難で、**AGIと同じくらい曖昧**との指摘がある。

**開発者にとっての意味**:
- **RSI**を理解することで、AIの次のブレークスル方向を把握可能
- AI safetyとcapabilitiesのバランスがさらに重要に
- 自社产品在のRSIへの対応準備が必要

---

## $2,000のAI生成映画がTribeca Festivalでデビュー

AIで完全に生成された75分間の映画**「Dreams of Violets」**がTribeca Festivalで公開される。制作費はわずか$2,000。イラン政府による去年1月の虐殺を表現するために、人物・画像すべてをAIで生成した。兄弟二人の制作者（Ash and Pooya Koosha）が手がけた。

**開発者にとっての意味**:
- **AI content generation**のコストが急速低下
- 电影などの长编コンテンツ制作の敷居が下がる
- 「完全にAI生成された」作品的成功例として、艺术と技术の境界变化

---

## Apple、iOS 27でSiriを独立アプリとして大幅刷新

AppleがiOS 27に向け、**Siriを独立アプリ**として再設計する計画をBloomberg暴露した。Dynamic Islandから展開する新しいUIは、ChatGPT風のデザインを取り、AI nativeなpersonal assistantとして生まれ変わる。

新機能として**Ask / Siri / ChatGPT**の3つのモードがドロップダウンメニューで選択可能。WWDC 2026（6月予定）で正式発表の見込み。

**開発者にとっての意味**:
- Appleエコシステムの**AI integration**が深化
- Siriというプラットフォーム向けの**Apple developer**机会扩大
- Apple IntelligenceとChatGPT統合の行方注目

---

## 参考リンク

- [The Verge: Claude's new model is more 'honest' when it messes up](https://www.theverge.com/ai-artificial-intelligence/939094/anthropic-claude-4-8-opus-honesty-effort)
- [The Verge: CNN sues Perplexity over 'verbatim' copycat articles](https://www.theverge.com/ai-artificial-intelligence/938893/cnn-perplexity-ai-copyright-lawsuit)
- [TechCrunch: Anthropic releases Opus 4.8 with new 'dynamic workflow' tool](https://techcrunch.com/2026/05/28/anthropic-releases-opus-4-8-with-new-dynamic-workflow-tool/)
- [TechCrunch: RSI is the new AGI — and it's just as hard to pin down](https://techcrunch.com/2026/05/28/rsi-is-the-new-agi-and-its-just-as-hard-to-pin-down/)
- [The Verge: A $2,000 AI-generated film will make its debut at Tribeca](https://www.theverge.com/entertainment/939067/ai-film-dreams-of-violets-tribeca)
- [The Verge: These new iOS 27 renders hint at Siri's big redesign](https://www.theverge.com/tech/938915/ios-27-siri-renders-bloomberg)
- [Import AI 458: Reckoning with the future; and a singularity story](https://importai.substack.com/p/import-ai-458-reckoning-with-the)

---

*本文の情報は2026年5月29日時点のものです。AI業界の急速な変化により、記述内容が古くなっている可能性があります。*