# AI開発最新ニュース：Alibabaのツールルーティング改革とAnthropicのClaude Sonnet 5投入

AI業界で週末に大きな動きが二つあった。Alibabaの研究チームがツール選択時のトークン消費を99%削減するフレームワーク「SkillWeaver」を発表し、同時にAnthropicがClaude Sonnet 5を投入、IPOを控えミッドレンジ市場の獲得を加速している。

---

## Alibaba、SkillWeaverでAIエージェントのツールルーティングを革新

VentureBeatが報じたところによると、Alibabaの研究者は「SkillWeaver」と呼ばれる新しいフレームワークを開発した。Enterprise AIシステムが大規模なワークフローを処理するにつれ、タスクを適切なツールやスキルにルーティングする課題が深刻化していた。エージェントが数百のツールを持つ場合、どのツールをワークフローの各ステップで使用するかで混乱が生じる。

### 99%トークン削減の秘密

SkillWeaverの核となる技術は「Skill-Aware Decomposition (SAD)」だ。フィードバックループを活用し、エージェントが関連するツール候補を反復的にフェッチおよび精査できるようにする。このコンポーネント方式とフィードバックループメカニズムにより、ワンショットでツールを選択する他のツールルーティングフレームワークと差別化している。

従来の方法は、果てしなく多いツール名をLLMのコンテキストウィンドウにそのまま押し込む「LLM-Direct」だった。実験では、大規模なQwen-Maxモデルを使用した場合でも、正しいツールカテゴリをretrieveできるのはわずか21.1%だった。SkillWeaverのTargeted Retrieve-and-Routeアプローチは、コンテキストウィンドウの消費を88万4000トークンから1160トークンに削減しながら、精度を大幅に向上させた。

### 7Bモデルの特異性

興味深い発見は、大きいモデルが必ずしも良いわけではないという点だ。バニラ設定でテストした場合、140億パラメータモデルは70億パラメータモデルの精度を下回った。较大的モデルは、タスクを微小で不必要なステップに過剰分解する傾向があった。SADが導入されると、retrieveされたツールのヒントがモデルを特定ツールのボキャブラリに戻し、精度が向上した。

**開発者への示唆**: タスク分解の粒度が最も大きなボトルネックであり、より大きなLLMに支払うよりも、特定ツールのボキャブラリにエージェントを整合させる方が効果的な場合が多い。

---

## Anthropic、Claude Sonnet 5を投入——IPO控えミッドレンジ市場を拡大

Anthropicは6月30日、Claude Sonnet 5を正式にリリースした。API価格は入力100万トークンあたり2ドル、出力100万トークンあたり10ドル（8月31日までのお試し価格）で、その後3ドルと15ドルに上昇する。それでも最高モデルOpus 4.8の5ドル/25ドルよりは大幅に安い。

### ベンチマークでOpusに肉薄

Sonnet 5はSWE-bench Proで63.2%（Sonnet 4.6の58.1%から上昇）、OSWorld-Verifiedで81.2%（78.5%から上昇）を達成。Multidisciplinary reasoningでは、Sonnet 5が43.2%（ツールなし）、57.4%（ツールあり）を記録し、Opus 4.8の57.9%とほぼ同等の性能に達した。

### コストパフォーマンスカーブ

Anthropicは初めて、成本パフォーマンスカーブを導入した。開発者はSonnet 5とOpus 4.8の間でEffortレベルを調整し、コストと精度の最適なバランスを見つけることができる。Cursorの共同創設者Sualeh Asifは「Claude Sonnet 5では、エージェントが計画に従い、規則を守り、クリーンなマルチステップ変更を出力する」と評している。

### 新しいTokenizerの影

注意すべき技術的詳細として、Sonnet 5は更新されたTokenizerを使用する。入力がコンテンツタイプによって1.0〜1.35倍多くのトークンにマッピングされる可能性がある。Anthropicはお試し価格を「ほぼコストニュートラル」に調整したと主張しているが、高Volumeワークロードを実行するEnterprise顧客は請求書は変わらないと想定する前に自身のユースケースでベンチマークを取る必要がある。

---

## AI業界の潮流

二つのニュースは、2026年下半期のAI業界の二大トレンドを浮き彫りにしている。

**1. 効率的なエージェント**: SkillWeaverが示すように、トークン効率はエンタープライズ導入の重要な差別化要因になりつつある。99%トークン削減は、直接的にAPIコストとレスポンスタイムを最適化する。

**2. 民主化とIPO戦略**: AnthropicのSonnet 5投入は、より手頃な価格で旗艦に匹敵する性能を提供することで、最も広範な開発者採用を引き付ける戦略だ。6月のシリーズHでは965億ドル調達、年間経常収益は470億ドルに到達。如此の成長軌道を維持するため、High-volume、ミッドレンジ製品の普及が鍵となる。

AI開発者にとって、これは最も刺激性のない時代でもない、刺激的すぎない時代でもない——しかし、確かに、安価で高效なAIツールがProduction導入される準備ができている時代だ。

---

## 参考リンク

- [AI agent tool routing cuts token use 99% | VentureBeat](https://venturebeat.com/orchestration/new-alibaba-ai-framework-skips-loading-every-tool-cutting-agent-token-use-99)
- [Anthropic launches Claude Sonnet 5 | VentureBeat](https://venturebeat.com/technology/anthropic-launches-claude-sonnet-5-at-a-steep-discount-to-its-top-model-as-the-company-races-toward-a-blockbuster-ipo)
- [SkillWeaver論文 (arXiv)](https://arxiv.org/abs/2606.18051)

---

*本文の情報は2026年7月5日時点のものです。*
