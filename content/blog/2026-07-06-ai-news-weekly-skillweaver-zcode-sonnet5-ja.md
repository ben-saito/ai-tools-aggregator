# AI開発ニュース週間レポート（2026年7月第1週）

2026年夏、AI業界は「推論效率化」「Coding Agent市場」「Enterprise AIの実運用」という3つの軸で急速に進化している。本週は AlibabaのSkillWeaver、Z.aiのZCode、AnthropicのClaude Sonnet 5、そしてMorgan StanleyのP&L自動化事例など、开发者视角で注目すべきニュースが届いた。

---

## Alibaba、SkillWeaverでAgentのトークン消費を99%削減

Alibabaの研究チームは7月2日、**SkillWeaver**という新しいAI Agentフレームワークを発表した。Enterprise AIにおいてAgentが数百〜数千のツール到晚动用する環境下で、正確なツール選択とコスト削減を同時に実現するアプローチとして注目に値する。

### 問題背景：スキルルーティングの瓶颈

現代のLLM Agentアーキテクチャにおいて、**スキル（Skill）**は構造化された自然言語で記述されたモジュール式の再利用可能なツール仕様として定義される。Enterprise環境では、APIクライアント、ETLパイプライン、ビジュアライゼーションライブラリなど、数千のツールが利用可能だが以往的ツール読み込み手法ではすべてをコンテキストに展開するため非常に非効率的だった。

LLMのコンテキストウィンドウを数千のツール説明で埋め尽くせば、コストがかさむだけでなく、関連性の低いツールに埋もれて正しい選択ができなくなる。

### SkillWeaverのアーキテクチャ

SkillWeaverは**Compositional Skill Routing**という問題を提起し、3段階のプロセスで解決する：

1. **Decompose（分解）**: LLMが複雑なユーザクエリを1スキルで実行可能なアトミックなサブタスクに分解
2. **Retrieve（検索）**: エンベディングモデルで各サブタスクとスキルライブラリを比較し、候補ツールをショートリスト
3. **Compose（構成）**: プランナーがスキル間の互換性を評価し、依存関係をDAG（Directed Acyclic Graph）として整理

### SAD（Skill-Aware Decomposition）の革新的フィードバックループ

特に注目すべきは**Iterative Skill-Aware Decomposition（SAD）**のフィードバックループ機構。LLMが初步的な計画を立案→初步的なスキル検索→見つかったスキルをヒントとしてLLMにフィードバック→LLMが粒度と語彙を実際のツールに合わせて再度分解するという反復プロセスにより、LLMの抽象的なステップ記述と実際のツール仕様の間にあった**語彙のギャップ**を埋める。

### ベンチマーク結果

研究チームは**CompSkillBench**（2,209の実際のMCPスキル、24のカテゴリにわたる300のマルチステップクエリ）で評価。结果として、传统的な方式と比較して**トークン消費を99%以上削減**的同时に精度も向上した。

**開発者にとっての本質的 takeaway**：タスク分解の粒度がツール検索の最大のボトルネックであり、retrieve-and-route方式が今後の方向性であることが実証された。

---

## Z.aiがZCodeを発表：Coding Agent市場に新規参入

中国・北京拠点のAIラボZ.ai（旧Zhipu AI）は7月2日、公式開発環境**ZCode**を発表し、Cursor、Claude Code、GitHub Copilotと直接競合する市場に進出した。

### エージェント主体の開発環境

ZCodeは従来のIDEにAIをチャットサイドバーで追加する形态とは異なり、**Agent-First Development Environment**として設計された。ユーザーが結果を描述すると、Agentが作業を計画→ファイル編集→チェック実行→進捗レビュー→反復継続という长时间タスクを自律的に実行する。

### GLM-5.2联动

ZCodeはZ.aiのフラグシップモデル**GLM-5.2**公式の開発環境として位置づけられている。GLM-5.2の仕様は迫力がある：

- **7440億パラメータ**のMoE（Mixture-of-Experts）アーキテクチャ
- **400億アクティブなパラメータ**
- **100万トークン**のコンテキストウィンドウ（前任の200Kから5倍）
- 28.5兆トークンで訓練

Code ArenaベンチマークでAnthropicのClaude Fable 5に次ぐ**世界第2位**にランクされ、FrontierSWEではClaude Opus 4.8と1ポイント差というcoding能力を見せている。

### 地政学的意義

注目すべきは、GLM-5.2が**米国製チップを一切使わず**、Huawei siliconのみで訓練された点。Stability AI創業者のEmad Mostaque 따르면、訓練コストは約2,500万 달러で、その80%がポスト訓練に充てられたという。Western frontier模型と比較して極めて低コストでの開発成功は、AI開発の地政学的分散を象徴している。

### 価格戦略

ZCodeはmacOS/Windows/Linuxで免费ダウンロード可能。収益はGLM Coding Plan（月額$16.20〜$144）で賄い、AnthropicのClaude CodeやCursorより大幅に低い価格設定で勝負する。7月31日まで1.5倍のクォータボーナスも提供中。

---

## Anthropic、Claude Sonnet 5を大幅に値下げ　IPOに向け开发者シェア拡大

Anthropicは6月30日、**Claude Sonnet 5**を大幅に值下げして提供開始した。IPOを控える同社が、`$2/百万入力トークン`、`$10/百万出力トークン`という推奖価格でデベロッパ獲得を狙う。

### ベンチマーク性能

Sonnet 5は前身Sonnet 4.6から大幅に進化：

| ベンチマーク | Sonnet 5 | Sonnet 4.6 | Opus 4.8 |
|------------|---------|-----------|---------|
| SWE-bench Pro | 63.2% | 58.1% | 69.2% |
| Terminal-Bench 2.1 | 80.4% | 67.0% | 82.7% |
| Humanity's Last Exam (w/ tools) | 57.4% | - | 57.9% |
| OSWorld-Verified | 81.2% | 78.5% | - |
| GDPval-AA v2 | 1,618 | 1,395 | 1,615 |

Sonnet 5はOpus 4.8に迫る性能を持ちながら、**価格は約40%安い**（標準価格对比）。

### エージェンティック能力の強化

Sonnet 5は「これまで最もエージェンティックなSonnetモデル」と表現され、BrowserやTerminalなどのツールを使用してマルチステップのワークフローを自律的に実行能力が向上。Cursor共同創業者のSualeh Asifは「Claude Sonnet 5ではAgentがプランを維持し、会話を守り、複数のステップの変更をクリアに送付する」と证言している。

---

## Morgan Stanley、Agent導入でP&L照合作業を半分に

Morgan Stanleyは社内の利益・損失（P&L）照合仕事にAI Agentを導入し、作业時間を**6時間から2〜3時間**に短縮、成功たと報告した面白いのは、同社が敢えてAgentの自律性を**制限する** 방식으로成果を出した点だ。

### FIXRシステムのアーキテクチャ

Morgan StanleyのInternal Production Agentシステム**FIXR**は、3つの specialized Agentで协作：

1. **解釈Agent**：過去のガイダンスを解釈し、当日の照合解决方案を提案
2. **学習Agent**：コントローラーの意思決定から適用のルールを文書化
3. **自動化Agent**：反復パターンを永続的な自動ロジックに変換

重要なのは、**人間が決策権限を保持**し続けた点だ。各レコメンデーションは人間がレビュー・承認后才て執行され、その意思決定が次の実行の改善フィードバックとしてAIに返回される。

### 决定的設計（Deterministic by Design）

Morgan Stanley Managing DirectorのTodd Johnson話は「確率的な判断を必要とする部分だけでLLMを使用し其余は决定的・反復可能なロジックに委托する」アプローチを採用。すべての判断をAIに委任すると所有人都がすべてをチェックするため効率が悪いという实用的な洞察からだ。

### プロセスファーストの教训

同チームの重要な教训は**「AI投入前にプロセス整備を先にやる」**こと。詳細なプロセス intelligence assessmentで自动化が最も効果的な箇所を特定し、Agentが必要かどうか传统的な自动化が適切かどうかを再評価した。结果、毎週約1,500時間の節約达成了という。

---

## Square、ChatGPTとClaudeで餐厅注文を直接受付

Squareは7月1日、ChatGPTアプリとClaudeプラグインを開始し、消費者がAIアシスタントから直接餐厅注文できる世界に出した。注目すべきは**市場手数料がからない**点だ。

### 従来の外卖プラットフォームの構造問題

DoorDash、Uber Eats、Grubhubなどの外卖プラットフォームは餐厅に対して15〜30%もの COMMISSIONを取っていた。净利润率3〜9%程度の餐厅にとって、$40の注文で25%の手配を失うことは赤字を意味する。

SquareはAI発見チャネルを通じて餐厅を可视化し、手配は従来のオンライン決済手数料（2.9%＋$0.30）のみ。30% COMMISSIONの代わりに最大27%的成本削减を実現し、餐厅の利润率を大幅に改善する。

---

## 参考リンク

- [New Alibaba AI framework skips loading every tool, cutting agent token use 99%](https://venturebeat.com/ai/new-alibaba-ai-framework-skips-loading-every-tool-cutting-agent-token-use-99/)
- [Z.ai launches ZCode to challenge Cursor, Claude Code and GitHub Copilot](https://venturebeat.com/ai/z-ai-launches-zcode-to-challenge-cursor-claude-code-and-github-copilot-in-ai-coding/)
- [Anthropic launches Claude Sonnet 5 at a steep discount](https://venturebeat.com/ai/anthropic-launches-claude-sonnet-5-at-a-steep-discount-to-its-top-model-as-the-company-races-toward-a-blockbuster-ipo/)
- [Morgan Stanley cut its riskiest reconciliation job in half](https://venturebeat.com/ai/morgan-stanley-cut-its-riskiest-reconciliation-job-in-half-by-making-its-agents-less-autonomous/)
- [Square's ChatGPT and Claude integration for restaurant orders](https://venturebeat.com/ai/restaurants-can-now-accept-orders-placed-directly-from-chatgpt-and-claude-thanks-to-squares-new-low-fee-no-setup-integration/)

---

*本文の情報は2026年7月6日時点のものです。*
