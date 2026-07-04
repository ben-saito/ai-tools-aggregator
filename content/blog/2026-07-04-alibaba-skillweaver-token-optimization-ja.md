# Alibaba、Agentのトークン使用量を99%削減する「SkillWeaver」フレームワークを発表

Alibabaの研究者が、AIエージェントがousandsものツールから適切なスキルを選択する際に直面する「ツール・ルーティング問題」を解決する新フレームワーク「**SkillWeaver**」を発表しました。

---

## 背景：エンタープライズAIエージェントの課題

現代のLLMエージェントアーキテクチャにおいて、**スキル（Skill）**は重要なパターンとなっています。スキルとは、構造化された自然言語ドキュメントを使用したモジュール式、再利用可能なツール仕様です。

エンタープライズ環境が直面する課題:
- エージェントがアクセスできるツール数が数百甚至は数千に拡大
- 全ツールライブラリをLLMに露出させる方式是、**コンテキスト限界を即座に超過**
- 単一スキルの選択では、実世界のクエリが本質的に**複合的**である必要がある
- 例：「データセットをダウンロードし、変換し、視覚化レポートを作成する」といった複合タスク

---

## SkillWeaverのアーキテクチャ

SkillWeaverは3つの段階で構成される**Decompose（分解）→ Retrieve（検索）→ Compose（構成）**パイプラインを採用しています。

### Decompose（分解）ステージ
LLMがタスク分解器として機能し、ユーザーの複雑なクエリを**1つのスキルで実行可能な原子サブタスクのシーケンス**に分解します。

### Retrieve（検索）ステージ
エンベディングモデルを使用して、各サブタスクをスキルライブラリと比較し、各ステップの**トップ候補ツールのショートリスト**を取得します。

### Compose（構成）ステージ
プランナーが出力候補を評価し、スキル間の互換性を確認。次に、依存関係をマップした**DAG（Directed Acyclic Graph）**として最終実行プランを作成します。

---

## SAD（Skill-Aware Decomposition）の革新的フィードバックループ

SkillWeaverの重要な革新は、**Iterative Skill-Aware Decomposition（SAD）**の導入です。

LLMは Often、スキルライブラリの実際の技術的語彙と一致しない**一般的なステップ説明**を生成します。SADは以下のフィードバックループでこれ解决します：

1. LLMが初期プランを作成
2. 初步的な検索で緩やかに一致するスキルを見つける
3. **見つけたスキルをLLMにヒントとしてフィードバック**
4. LLMが粒度と語彙を実際のツールに完璧に合わせるよう**分解を再記述**

---

## 実験結果：トークン消費99%削減

研究チームは、2,209の実際のスキル（24の機能カテゴリをカバー）を使用したライブラリで評価を実施。结果：

- **トークン消費量は99%以上削減**（従来の全ツール露出手法との比較）
- 精度の向上も確認
- ベンチマーク：**CompSkillBench**（300の多段階クエリ）

---

## 開発者視点でのポイント

| 側面 | 従来の 방식 | SkillWeaver |
|------|------------|-------------|
| ツール選択 | ワンショット/全ライブラリ暴露 | 段階的取得+ルーティング |
| コンテキスト使用 | 数百 thousandsのトークン | 劇的に削減 |
| 複合タスク対応 | 不十分 | DAGで最適化 |
| 語彙の整合 | 不可 | SADフィードバックループで解決 |

**タスク分解の粒度**が、正確なツール検索の最大のボトルネックであることが判明しました。これは実際の開発においても、タスク設計の重要性が再確認される結果です。

---

## 他のAIニュースハイライト（2026年7月上旬）

### Anthropic、Claude Sonnet 5を大幅割引でIPO前に投入
- 入力: $2/百万トークン、出力: $10/百万トークン（8月末まで）
- 「最もエージェント指向のSonnetモデル」と描述
- Free/Proプランのデフォルトモデルに

### Morgan Stanley、Agents導入で大胆な戦略転換
- 最も危険な平滑化業務を**半減**達成
- 方法は：**自律性を減少**させ、固定ルールを增多
- すべての手術に人間のサインオフを要件に

### Square、ChatGPT/Claudeと餐厅注文連携
- 餐厅が直接AIアシスタントから注文を受け取れるように
- バックグラウンドで完全自動運用

---

## 参考リンク

- [New Alibaba AI framework skips loading every tool, cutting agent token use 99% | VentureBeat](https://venturebeat.com/ai/new-alibaba-ai-framework-skips-loading-every-tool-cutting-agent-token-use-99/)
- [Anthropic launches Claude Sonnet 5 | VentureBeat](https://venturebeat.com/ai/anthropic-launches-claude-sonnet-5-at-a-steep-discount-to-its-top-model-as-the-company-races-toward-a-blockbuster-ipo/)
- [Morgan Stanley cut its riskiest reconciliation job in half | VentureBeat](https://venturebeat.com/ai/morgan-stanley-cut-its-riskiest-reconciliation-job-in-half-by-making-its-agents-less-autonomous/)

---

*（本文の情報は2026年7月4日時点のものです...）*
