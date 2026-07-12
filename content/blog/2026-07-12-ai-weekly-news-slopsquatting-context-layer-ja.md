# AI開発ニュースまとめ（2026年7月12日号）

AI業界は今週も激動のまっただ中に 있다。AIコーディング支援が広がるにつれ、「**スラップスカッティング（Slopsquatting）**」という新しいサプライチェーン攻撃が確認された。また、エントープライズのAIエージェントをめぐり、コンテキスト層の重要性が指摘されるなど、開発者にとって無視できないトピックスが複数生まれた。

---

## スラップスカッティング：AI幻觉が招く新たなサプライチェーン攻撃

**VentureBeat**が報じた「**スラップスカッティング（Slopsquatting）**」は、AIコーディングツールが生み出す**幻觉（hallucination）**を利用した攻撃手法だ。

### 什么是スラップスカッティング

スラップスカッティングは、「AIhericスラップ（AI生成的低品質コンテンツ）」と「タイポスカッティング」を組み合わせた造語。従来のタイポスカッティングがURLの誤記を悪用していたのに対し、**AI幻觉が生み出す存在しないパッケージ名**を悪用する点が革新的だ。

AIコーディングアシスタントは、存在しないオープンソースパッケージ名を確信犯的に推薦することがある。攻撃者はその**幻觉されたパッケージ名を先に登録**し、、悪意のあるコードを仕込んだパッケージを配布する。開発者がAIの推薦を信じ込んでプロジェクトに組み込めば、マルウェアがサプライチェーンに侵入する。

### 脅威の実態

研究表明、LLMのコード生成時における幻觉パッケージ推奨率は以下の通り：

- **プロプライエタリモデル（GPT-4.0 Turbo）**: 3.59%
- **オープンソースモデル（DeepSeek 1B）**: 13.63%
- **全体平均**: 19.7%（576,000コードサンプル、2.23百万パッケージを分析）

オープンソースAIツール依赖する企業は、プロプライエタリツールを使う企業比べ、**約4倍**スラップスカッティング攻撃にさらされる可能性がある。

「**バイブコーディング（Vibe Coding）**」の浸透がこの傾向加速している。開発者の40%以上が、AI支援なしのコードを書けない状態にあり、72%が毎日AIツールを使用している。AI推荐を検収する習慣が失われるつつある今、スラップスカッティングは深刻な脅威となっている。

### 対策

- AIアシスタントが推薦するパッケージが実際に存在するかを**公式レジストリで確認**
- **自動チェック**でパッケージ名を既知のレジストリ照合
- 异常なパッケージインストールを監視

---

## エンタープライズAIエージェントの「コンテキスト層」競争

VentureBeatの調査によると、**57%のエンタープライズ**が「AIエージェントが確信犯的に間違う」経験を持っている。その原因の多くは以下の2点に集約される：

1. **文脈の欠落・不整合**：古いデータ定義や検索システムが取得していないドキュメント
2. **文脈層の未整備**：75%の企業がまだガバナンスされたコンテキスト層を運用していない

### 各大ベンダーの取り組み

エンタープライズ向けコンテキスト層をめぐり、主要ベンダーが熾烈を争っている：

- **Microsoft Fabric IQ**: ビジネスオントロジーを構築し、MCP越しにどのエージェントでもクエリ可能に
- **Google Knowledge Catalog**: クエリログと使用パターンからセマンティック文脈を自動生成
- **AWS Context**: エージェント、実際の使用パターンから学習するナレッジグラフ
- **Pinecone Nexus**: ランタイム前に論理的構造をメタデータ層にコンパイル
- **Snowflake Horizon Context + Cortex Sense**: 顧客管理定義とプラットフォーム推論の2層構造
- **Oracle Unified Memory Core**: ベクトル、グラフ、リレーショナルデータを1つのトランザクションエンジンに統合

### Retrievalの限界

従来の**RAG（Retrieval-Augmented Generation）**がデフォルトの文脈取得手段となっている enterpriseは38%だが、 retrieval の選択基準は「管理のしやすさ」と「運用のシンプルさ」が優先され、**検索精度は後回し**になっている。结果として、文脈が矛盾したままエージェントが動作し、確信犯的な誤回答が生まれる。

「ベクトルメモリはビジネスの意味ではない。ビジネスの意味はガバナンスではなく、エクイキューションでもない」とConstellation ResearchのMichael Ni氏。

---

## AppleがOpenAIを提訴：トレーダ-secret窃取疑惑

TechCrunchによれば、AppleがOpenAIを提訴した。AppleはOpenAIのシニアリーダーの指示により、**Appleのシニア元従業員を通じてトレードシークレットが窃取された**と主張している。

この訴訟は、AI企業間の競争が技術開発を超えて法務戦略に移りつつあることを示している。

---

## Meta、Instagramの論争的AI機能を撤回

MetaはInstagramの**論争的AI機能を撤回**した。公開コンテンツを参照するこの機能は пользователь のフィードバック を受け、「 useful なクリエイティブツールの提供」という意図に反して不評だったとしている。

---

## OpenAI、ファミリー向けChatGPT戦略を展開

OpenAIはChatGPTの家庭内での利用加深に向け、**家族、ケアラー、老年層向けの体験**を構築するプロダクトマネージャーを採用している。

---

## グーグルのTabFM：訓練不要の表形式データ予測モデル

Google Researchは、表形式データに対して個別データセットの訓練なしで予測できるゼロショットのFoundation Model「**TabFM**」を発表。従来の機械学習パイプライン（特徴量設計、モデル訓練、ハイパーパラメータ調整）に数週間かかっていた工程が、1回のAPIコールで完了する可能性をもたらした。

Apache 2.0ライセンスでコードは公開済みだが、モデル重みりはHTC-Face以外的限制がある。

---

## 参考リンク

- [Forget typosquatting; slopsquatting is the software supply chain threat created by AI coding tools](https://venturebeat.com/security/forget-typosquatting-slopsquatting-is-the-software-supply-chain-threat-created-by-ai-coding-tools)
- [57% of enterprises have watched AI agents be confidently wrong. The fix is an agentic context layer](https://venturebeat.com/data/57-of-enterprises-have-watched-ai-agents-be-confidently-wrong-the-fix-is-an-agentic-context-layer-but-who-has-one)
- [Apple sues OpenAI over alleged trade secret theft](https://techcrunch.com/2026/07/10/apple-sues-openai-over-alleged-trade-secret-theft/)
- [Meta removes controversial AI feature on Instagram after backlash](https://techcrunch.com/2026/07/10/meta-removes-controversial-ai-feature-on-instagram-after-backlash/)
- [OpenAI bets on families as ChatGPT goes deeper into households](https://techcrunch.com/2026/07/11/openai-bets-on-families-as-chatgpt-goes-deeper-into-households/)

---

*（本文の情報は2026年7月12日時点のものです）*
