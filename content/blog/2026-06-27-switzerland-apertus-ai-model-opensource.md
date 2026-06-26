# スイスがEU法準拠のオープンソースAIモデル「Apertus」を公開　〜1800言語対応の80Bパラメータモデル〜

2025年9月、スイスが自ら手がけたオープンソースLLM「**Apertus**」を発表し、AI業界に反響を呼んでいる。ChatGPTやClaudeに代表されるpropietaryモデルへの対抗策として、EUの著作権法とAIコード・オブ・プラクティスに完全準拠した「信頼性の高いオープン基盤モデル」という位置づけだ。

---

## Apertusの詳細：80Bパラメータ、1800言語対応

Apertusはラテン語で「オープン」を意味する名前通り、**モデル重み・学習データ・ソースコードのすべてを公開**されている。規模は2種類——**80億パラメータ版**と**700億パラメータ版**のティアが用意され、Metaの「Llama 3（2024年モデル）」と同等のパフォーマンスを実現するとされている。

最大の特長は**学習データの透明性**だ。クローリングは明示的にオプトアウトを表明したサイトを除外し、「ステルス・クローリング」と呼ばれる隠れたスクレイピングを排除。EUの著作権法に準拠したデータセットのみで構築されている。これは米企業のAI開発が「適法性とイノベーションのバランス」をめぐりEUとの摩擦を生む中、明確な差別化ポイントとなっている。

対応言語は**1800言語以上**をカバー。英語・中国語のみならずアフリカ・アジアの小規模言語にも裾野を広げており、グローバルな適用を視野に入れた設計だ。

---

## AIエージェント戦線：Anthropic Cowork × Salesforce Slackbot

今週もAIエージェントの動きが加速している。

**Anthropic**は「Claude Code」の技術を非エンジニア向けに落とし込んだ「**Cowork**」を発表。社内部隊によれば、feature丸ごとを**約1週間半でClaude Code本身的にも構築**したという。technicalユーザーに限られていたAI agentの民主化が大きく前進したことになる。

**Salesforce**はSlackbotを全面的に刷新し、Enterpriseデータ検索・ドキュメント作成・ユーザー代行アクション可能なフル機能AIエージェントとして再出発させた。Microsoft・GoogleとのワークプレースAI奪取で攻勢を強めている。

---

## Apple、Siriの刷新を検討　Anthropic/OpenAIとの交渉報道

Bloomberg（2025年6月30日付）の報道によれば、AppleはSiriの次世代AIバックエンドとして**AnthropicのClaudeまたはOpenAIのChatGPT**の導入を検討中であることがわかった。米中のAI規制強化や独自AI開発の実用性課題を踏まえ、外部有力モデルとの協業によるSiri再活性化戦略と見られる。

---

## 開発者視点の注目ポイント

| ポイント | 詳細 |
|---------|------|
| **Apertus** | 700億パラメータ・EU準拠・HuggingFace公開 |
| **Cowork** | Claude Codeの技術力を民主化、1週間半で構築 |
| **Slackbot刷新** | ワークプレースAI、エージェント機能統合 |
| **Apple x LLMs** | Siri刷新、外部API統合の検討 |

特にApertusの公開データ戦略は、**Web Harvestingの透明性基準**として業界に影響を与える可能性がある。Llama 3系列を超えるコンプライアンス要件を満たしつつ、性能を維持する手法は今後のオープンソースLLM開発者の参照実装として注目される。

---

## 参考リンク

- [Switzerland releases open-weight AI model - The Verge](https://www.theverge.com/ai-artificial-intelligence/770646/switzerland-ai-model-llm-open-apertus)
- [Anthropic launches Cowork - VentureBeat](https://venturebeat.com/technology/anthropic-launches-cowork-a-claude-desktop-agent-that-works-in-your-files-no)
- [Salesforce Slackbot AI agent - VentureBeat](https://venturebeat.com/technology/salesforce-rolls-out-new-slackbot-ai-agent-as-it-battles-microsoft-and)
- [Apple weighs using Anthropic or OpenAI to power Siri - Bloomberg](https://www.bloomberg.com/news/articles/2025-06-30/apple-weighs-replacing-siri-s-ai-llms-with-anthropic-claude-or-openai-chatgpt)
- [Apertus on HuggingFace](https://huggingface.co/)

---

*（本文の情報は2026年6月27日時点のものです）*
