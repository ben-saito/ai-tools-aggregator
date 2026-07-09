# AI開発最新ニュース（2026年7月10日）—— GPT-5.6炸裂、GraphRAGで創薬革命、DeepMindがエージェンティックAIを加速

2026年7月第2週は、**OpenAI GPT-5.6のSlash Commands機能**と**AWS GraphRAGによる創薬革命**が主要内容となった。Hacker NewsではGPT-5.6が732ポイント・コメント532件を記録する旋風を巻き起こし、AWSはGraphRAGフレームワークで新薬開発サイクルを87%短縮に成功した。本稿ではこれらの技術的詳細を開発者視点で整理する。

---

## OpenAI、GPT-5.6を正式リリース——Slash Commandsで月額$20の革命

OpenAIは7月9日待望の**GPT-5.6**を正式リリースし、Hacker Newsで732ポイント・532コメントを集めた。タイトルは「**More intelligence from every token, stronger performance per dollar, and more capability on demand for your hardest work**」——コスト効率と要求に応じた能力提供に焦点。

### Slash Commands機能——カスタマイズの新境地

GPT-5.6の目玉機能の一つが**Slash Commands**。ユーザーは以下のように定義できる：

```markdown
# カスタムコマンド例
/analyst   # データ分析モード。ステップバイステップで分析を実行
/coder     # コード生成・レビュー特化モード
/reviewer  # コードレビュー・脆弱性検出モード
```

- **自作可能**: ユーザーは独自のSlash Commandsを定義・保存可能
- **共有可能**: プロンプトテンプレートとしてチーム共有できる
- **永続化**: サブスクリプション契約中常に利用可能

### 技術的改善点

| 項目 | GPT-4o | GPT-5.6 |
|------|--------|---------|
| 推論効率 | 1.0x | 1.8x（トークン単価当たり） |
| コンテキスト | 128k | 200k |
| マルチモーダル | テキスト・画像 | テキスト・画像・音声・视频 |
| Slash Commands対応 | ✗ | ✓ |

### 開発者コミュニティの反応

> 「$20/月でGPT-5.6が使い放題+Slash Commands自作機能は破格的」
> 「月額制でClaude CodeやCursorのライバルに」
> 「カスタム命令永続化はSaaS、プロンプト管理が不要再になるのは大きい」

---

## AWS GraphRAG——創薬開発サイクルを87%短縮

AWSと米製薬会社の共同実証実験で、**GraphRAG（Graph Retrieval-Augmented Generation）**フレームワークが新薬開発サイクルを**87%短縮**に成功した。

### 問題の背景

従来の創薬プロセス：
- データ収集・筛选フェーズ: **6ヶ月以上/反復**
- 成功率: **5%程度**
- 問題: 臨床データ・社内実験ノートがストレージ孤立的保管され、科学家が潜伏相関を発見できない

### GraphRAGアーキテクチャ

```
[PubMed等の公開データベース]
        ↓
[Amazon Comprehend Medical] → 医療コード抽出
        ↓
[Amazon Bedrock / Claude 4.5 Sonnet] → 文書要約・トピック関連性判定
        ↓
[Amazon Neptune Analytics] → 知識グラフ構築
        ↓
[Amazon S3 + Lambda] → 一括ロード
```

### 技術的詳細

- **グラフデータベース**: Amazon Neptune Analyticsを使用
- **ノード構成**: 疾病クラス・著者・ジャーナル・テキストチャンク
- **エッジ**: ノード間の階層的分類とエンティティ関連をマッピング
- **コスト**: Neptune Analytics 16 provisioned memory units → **$0.48/時間**
- **開発環境**: SageMaker Jupyter notebooks（t3.medium）が必要

### データ正規化への警告

AWSの論文は重要な限界も指摘している：

> 「孤立的プロプライエタリデータセットと非構造化オープンアクセスレポジトリの統一は、相当なデータ正規化挑战を引入し、不正確な関係マッピングとハルシネーションリスク缓和のために厳しいスキーマガバナンスを要求する」

---

## DeepMind——Gemini 3.5 Flashの「Computer Use」とDiffusionGemma

Google DeepMindは複数の新発表を行い、エージェンティックAIと高速テキスト生成の2軸で進化を示した。

### Gemini 3.5 Flash——Computer Use機能でブラウザ操作自动化

**「Introducing computer use in Gemini 3.5 Flash」**では、Gemini 3.5 FlashがWebブラウザを直接操作できる新機能が紹介された。

- **操作対象**: Webブラウザ（Chrome、Firefox等）
- **タスク**: 网页抓取、フォーム入力、按钮点击、スクロール
- **API提供**: Google AI Studioから即座に使用可能

### DiffusionGemma——4倍高速なテキスト生成

**DiffusionGemma**は новый アプローチでテキスト生成を高速化したモデル：

- **従来比**: 4倍高速（throughputベース）
- **アーキテクチャ**: 拡散モデルベース（GPT系Transformer以外）
- **用途**: リアルタイム応答が求められるアプリケーション

### DeepMind × A24——AIとエンターテインメントの境界なき协作

Google DeepMindと映画スタジオA24が**エンターテインメント業界初**のパートナーシップを締結。AIとクリエイティブ産業の新しい合作形態として注目される。

### $10M_multi-Agent安全研究への资金提供

DeepMindとパートナーは**マルチエージェントAI安全研究**に$10Mの資金提供を発表。複数のAIエージェントが連携するシステムの安全性確保が急務となりつつある。

---

## 中国、Nvidia AIチップ規制の動向——MIT Tech Reviewが報道

MIT Technology Reviewの「The Download」によると、**中国がNvidia製AIチップへの規制強化を検討**していることがわかった。

### 背景

- 米国による対中AIチップ輸出規制は2024年以降段階的に強化
- Nvidiaは中国市場向け（H800等）の特殊仕様チップを开发
- 中国側は替代チップ開発を加速（Huawei Ascend等）

### 業界への影響

AI芯片規制の行方は以下に影響：

- **クラウドAIサービス**: 中国の海外クラウド利用
- **グローバルAI開発**: オープンソースモデルの訓練コスト
- **地政学的緊張**: AI技術軍拡競争の側面

---

## arXiv注目論文——7月9日提交分

### Institutional Red-Teaming: 展開ルールでAI安全を改善

> Institutional Red-Teaming: Deployment Rules, Not Just Models, Causally Shape Multi-Agent AI Safety
> arXiv:2607.07695

- ** 핵심**: モデル本身的安全性だけでなく、**展開ルール（Deployment Rules）**がマルチエージェントAIの安全性を大きく左右することを発見
- ** 内容**: 複数のエージェントが連携するシステムで、エージェント間のインタラクションルールを適切に設計することが、ハルシネーション・有害出力の防止に直結

### SkillCenter: 44页の自律AIエージェント用スキルライブラリ

> SkillCenter: A Large-Scale Source-Grounded Skill Library for Autonomous AI Agents
> arXiv:2607.07676

- ** 作者**: Tianming Sha, Yue Zhao, Lichao Sun, Yushun Dong
- ** 内容**: 自律AIエージェントがタスクを実行するために必要な「スキル」を体系的に整理した大规模ライブラリ
- ** 规模**: 44 pages, 5 figures

### Recursive Self-Improvement: 自己改善AIの新しい枠組み

> Recursive Self-Improvement in AI: From Bounded Self-Refinement to Autonomous Research Loops
> arXiv:2607.07663

- ** 作者**: Mingguang Chen, Licheng Wang, Bo Qu
- ** 内容**: AIモデルが自己改善青山趋势どこまで可能か、Bounded Self-Refinementから自律的研究ループへの演进を理論・実証の両面から検討

---

## 参考リンク

- [GPT-5.6 - OpenAI](https://openai.com/index/gpt-5-6)
- [AWS GraphRAG deployment - AI News](https://www.artificialintelligence-news.com/news/aws-graphrag-deployment-cuts-drug-research-cycles-by-87/)
- [Introducing computer use in Gemini 3.5 Flash - DeepMind](https://deepmind.google/blog/introducing-computer-use-in-gemini-3-5-flash/)
- [DiffusionGemma: 4x faster text generation - DeepMind](https://deepmind.google/blog/diffusiongemma-4x-faster-text-generation/)
- [Google DeepMind and A24 partnership - DeepMind](https://deepmind.google/blog/google-deepmind-and-a24-announce-first-of-its-kind-research-partnership/)
- [China eyes Nvidia chips - MIT Tech Review](https://www.technologyreview.com/2026/07/09/1140283/the-download-nuclear-power-milestone-nvidia-china-ai-chips/)
- [arXiv:2607.07695 - Institutional Red-Teaming](https://arxiv.org/abs/2607.07695)
- [arXiv:2607.07676 - SkillCenter](https://arxiv.org/abs/2607.07676)
- [arXiv:2607.07663 - Recursive Self-Improvement](https://arxiv.org/abs/2607.07663)

---

*（本文の情報は2026年7月10日時点のものです）*
