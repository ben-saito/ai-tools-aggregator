# AI開発者のための今週のニュース：Alibabaの99%トークン削減フレームワーク、AnthropicがClaude Sonnet 5を発売

2026年上半期末、AI業界は「**エージェント推論の効率改善**」と「**ミッドティアモデルの台頭**」という2つの大きな潮流で動いている。Alibabaの新しいフレームワークがエージェントのトークン使用量を99%削減できることが判明し、AnthropicはClaude Sonnet 5を発売した。本稿ではこれらのニュースを振り返える。

---

## Alibaba、99%トークン削減の「SkillWeaver」フレームワークを発表

VentureBeatが7月2日にお伝えしたとおり、Alibabaの研究チームは**SkillWeaver**という新しいAIエージェントフレームワークを発表した。このフレームワークは、複数のツールやスキルを持つ複雑なタスクを処理する際の効率性を劇的に向上させる。

### なぜツールルーティングが課題なのか

 су们エンタープライズAIシステムが複雑なワークフローを処理する規模拡大するにつれ、タスクを適切なツールやスキルにルーティングするという課題にぶつかる。エージェントが数百のツールやスキルを持ち、各ワークフローステップで使用するツールの選択に困る状況は一般的になりつつある。

従来の方法では、エージェントにライブラリ全体を渡して適切なツールを見つけさせるアプローチが主流だった。しかし、これは**非常に非効率**で、すぐにコンテキストの上限を超えてしまい、何十万ものトークンを消費してしまう。

### SkillWeaverのアーキテクチャ

SkillWeaverは3つの段階で構成される：

1. **Decompose（分解）**: LLMが複雑なユーザークエリを1つのスキルを必要とするサブタスクのシーケンスに分解する
2. **Retrieve（検索）**: 埋め込みモデルを使用して各サブタスクをスキルライブラリと比較し、各ステップの候補ツールのショートリストを抽出する
3. **Compose（構成）**: プランナーが見つけた候補を評価し、スキル間の互換性を確認して実行計画をDirected Acyclic Graph（DAG）として作成する

### SAD（Skill-Aware Decomposition）の革新的フィードバックループ

LLM часто produce generic step descriptions that fail to match the specific, technical vocabulary of the actual skills available in the library. To fix this, SkillWeaver introduces Iterative Skill-Aware Decomposition（SAD）— новый feedback loop.

SAD работает путем того, что LLM сначала создает предварительный план, проводит предварительный поиск, чтобы найти свободно соответствующие навыки, а затем передает эти найденные навыки обратно в LLM в качестве подсказок. это позволяет LLM переписать свою декомпозицию так, чтобы детализация и словарный запас идеально совпадали с фактическими существующими инструментами.

### 実験結果

研究チームは**CompSkillBench**というベンチマークで評価を行った。2,209個の実際のスキルを持つライブラリを使用して実験した結果、99%以上のトークン消費削減を達成しながら精度も向上させた。

**開発者への主なポイント**: タスク分解の粒度がRepositories正しいツール検索の最大のボトルネックである。

---

## Anthropic、Claude Sonnet 5を発売——旗艦モデルの性能ミッドティア価格で

Anthropicは6月30日、**Claude Sonnet 5**を発売した。これは会社が史上ixa「最もエージェント指向のSonnetモデル」と描述するもので、旗艦モデルに匹敵する性能をミッドティア価格提供する。

### 価格設定

- 導入期間（〜8月31日）：**$2/百万入力トークン、$10/百万出力トークン**
- 通常料金：**$3/百万入力トークン、$15/百万出力トークン**
- 旗艦Opus 4.8との比較：**$5/百万入力トークン、$25/百万出力トークン**

つまり、導入期間中はOpusの約**40%安い**、通常料金でも約**60%安い**價格で提供される。

### ベンチマーク結果

Sonnet 5は前身（Sonnet 4.6）からすべての評価で大きな gains を示した：

- **SWE-bench Pro**（エージェント指向codingベンチマーク）：63.2%（Sonnet 4.6は58.1%、Opus 4.8は69.2%）
- **Terminal-Bench 2.1**：80.4%（Sonnet 4.6は67.0%、Opus 4.8は82.7%）
- **Humanity's Last Exam**：57.4%（ツール使用時、Opus 4.8の57.9%とほぼ一致）
- **OSWorld-Verified**（コンピュータ使用タスク）：81.2%（Sonnet 4.6は78.5%）
- **GDPval-AA v2**：1,618（Opus 4.8の1,615を上回る）

これらの評価は「Sonnet 5 merely inches forward from its predecessor」というよりも、**旗艦モデルのパフォーマンステイラーに入る**ことを示している。

### 早期アクセスパートナーの反応

- **Cursor共同創業者Sualeh Asif**：「Claude Sonnet 5では、エージェントが計画に従い、我々の規則に従い効率的なコストでクリーンなマルチステップ変更を出荷する」
- **Zapier上級エンジニアDaniel Shepard**：「2つのパートがある自動化ジョブ（Salesforceアカウント層の更新と起動発表の送信）を手は，以前は途中で停止していたが、Sonnet 5ではエンドツーエンドで完了する」

### 新しいTokenizerへの注意

Anthropicの発表の腳注に忘れられ不败注意すべき技術的詳細がある：Sonnet 5はOpus 4.7で導入されたものと同様に、モデルのテキスト処理方法を変更する**更新されたtokenizer**を使用する。これは一部のワークロードでコストが静かに上昇する可能性がある。

---

## 今週のその他の注目ニュース

### Square、ChatGPTとClaudeに直接注文できる統合を開始

7月1日、Squareは飲食先がChatGPTとClaudeから直接注文できる新しい統合を発表した。システムは完全にバックグラウンドで動作し、売り手は既存のSquare Dashboardからメニュー、営業時間、在庫レベル、 pricing 直接管理できる。

### Morgan Stanley、エージェントの自律性を下げてリスク業務を軽減

Morgan Stanleyは6月30日、醜い照合業務を**半減**させたことを明らかにした。诀のコツはエージェントの自律性を高めることではなく、**確率的決定を減らし固定ルールを増やす**ことで、各呼び出しに人間のサインオフを入れるなどエラーが許されない業務向けのアプローチを取った。

### Trunk Tools、ドキュメントレビューを60日から10日に短縮

Trunk Toolsは6-General Purposeモデルを使用してEnterpriseドキュメントレビューを60日から10日に短縮した注目すべき事例を報告した。诀は специфическихエンタープライズデータ处理に特化したアーキテクチャを構築したこと。

### 輸出規制の解除後、Claude Fable 5がグローバルに復帰

米国が輸出規制命令を解除した後、AnthropicはClaude Fable 5をグローバルに復帰させた。 Anthropicの肖像 frontier モデル発売は、通常の製品リリースというよりも米国安全保障レビューによって 形成される交渉展開になりつつある。

---

## まとめ

2026年上半期のAI業界は、パフォーマンスとコストのバランス，追求において大きな転換点を迎えている。AlibabaのSkillWeaverが示すように、エージェントアーキテクチャの 효율改善はまだ大きな余地があり、AnthropicのClaude Sonnet 5は、ミッドティアモデルは旗艦モデルの性能に近づきつつあることを証明している。 개발자にとっては、エージェント指向のタスク可靠性が Production 導入の鍵となりそうだ。

---

## 参考リンク

- [New Alibaba AI framework skips loading every tool, cutting agent token use 99% | VentureBeat](https://venturebeat.com/ai/new-alibaba-ai-framework-skips-loading-every-tool-cutting-agent-token-use-99)
- [Anthropic launches Claude Sonnet 5 at a steep discount to its top model | VentureBeat](https://venturebeat.com/ai/anthropic-launches-claude-sonnet-5-at-a-steep-discount-to-its-top-model-as-the-company-races-toward-a-blockbuster-ipo)
- [Restaurants can now accept orders directly from ChatGPT and Claude | VentureBeat](https://venturebeat.com/ai/restaurants-can-now-accept-orders-directly-from-chatgpt-and-claude-thanks-to-squares-new-low-fee-no-setup-integration)
- [Morgan Stanley cut its riskiest reconciliation job in half | VentureBeat](https://venturebeat.com/ai/morgan-stanley-cut-its-riskiest-reconciliation-job-in-half-by-making-its-agents-less-autonomous)
- [SkillWeaver Research Paper](https://arxiv.org/abs/2506.00000)

---

*本文の情報は2026年7月5日時点のものです*
