# AI開発ニュースまとめ（2026年6月13日）

AI業界は6月も中盤に入り、生成AIモデルの最適化、AIエージェントのセキュリティ、コーディング支援ツールの競争激化など、複数の重要トピックが動きを見せている。今週はMistral AIの大型資金調達噂、GoogleのAI使ったサイバー犯罪訴追、Microsoftのオープンソーススキル最適化フレームワーク、XiaomiのターミナルAIコーディングハーネスなど、開発者にとって重要なニュースが多い。

---

## Mistral AI、€300億調達交渉中？評価額€200億に成長

フランス発のAI企業**Mistral AI**が、€30億（約€20億の評価額）を調達する交渉を抱えているとTechCrunchが報じた。Series Cの評価額€117億からほぼ倍増ことになる。EUのAIラボとして唯一の存在であるMistralは、Google、OpenAI、Anthropicに次ぐ評価額となりつつある。

現在進行中のIPOサマリー（SpaceX、Anthropic、OpenAI）と合わせて、**2026年夏はAI企業のIPO・大型調達ラッシュ**となりそうだ。Mistralの調達が成功すれば、EUのAIエコシステムに対する機関投資家の信頼がさらに強まることになる。

---

## Google、AI使った大規模詐欺短信送信者を提訴

Googleは「Outsider Enterprise」と名乗る中国ベースのサイバー犯罪グループを提訴した。同グループはAIを使って2週間で**250万通の詐欺短信**を送信し、十数万人以上の被害者を対象としていた。

この訴訟は、AIがサイバー犯罪のコストを劇的に引き下げる可能性を示す事例となる。AI使った犯行の適格性を法的に認めており、**AI辅助のサイバー犯罪に対する法的枠組み**が今後整備されていく值得关注。

---

## NanoClaw × JFrog：AIエージェントのサプライチェーンを守る「免疫系」

VentureBeatが報じた**NanoClaw**と**JFrog**のパートナーシップは、AIエージェントのセキュリティ課題に直接挑んでいる。NanoClawは自律型AIエージェントで、ユーザーに代わってパッケージをダウンロード・インストールするが、悪意のあるコードが混入されたオープンソースパッケージに脆弱性がある。

### 問題の本質

AIエージェントは自律的にパッケージをインストールするため、従来の開発者によるコードレビューをバイパスする。ユーザーは開発者でなくても、AIrès Agentに高レベルな指示만出し、バックグラウンドでパッケージがインストールされる。この**サプライチェーンリスク**が急速に拡大している。

### 解決策

NanoClawエージェントは、ソフトウェアパッケージ・CLIツール・MCPサーバーのリクエストをJFrogレジストリ経由のみにルーティングする。悪意のあるパッケージが検出された場合、インストールをブロックし、承認済みバージョンへの自動誘導を行う。

**オープンソースコミュニティ向けは完全無料**、エンタープライズ向けは既存のJFrog環境と連携する。NanoClawエージェントの安全性を確保しながら、エンタープライズのコンプライアンス要件も満たす設計だ。

---

## PixelRAG：テキスト解析をバイパスし精度18.1%向上・トークンコスト10分の1

UC Berkeley、Princeton、EPFL、Databricksの研究チームが**PixelRAG**を発表した。HTMLテキスト解析の代わりに、レンダリング済みスクリーンショットを視覚言語モデル（VLM）で直接読み取るシステムだ。

### テキストRAGの3つの欠損パターン

 研究チームはSimpleQAベンチマーク（1000件のfactual Wikipedia質問）でテキストRAGの欠損パターンを特定した：

- **パーサー欠損（36.6%）**：HTMLからテキストへの変換で構造が破壊され、回答がどのチャンクにも存在しない
- **ランク欠損（55.2%）**：回答がチャンクに存在するがInfoboxにranksされて順位が悪い
- **リーダー欠損（8.2%）**：正しいコンテンツがリーダーに届くが構造の平坦化で誤帰属

### システム構成

1. **レンダリング**：Playwrightで875ピクセルビューポート、レンダリング後1024ピクセルタイルに分割
2. **インデックス**：Qwen3-VL-Embedding-2Bで各タイルを2048次元ベクトル化しFAISS近似最近傍インデックスに保存
3. **トレーニング**：商店コントラスト学習データで微調整、LoRA適用
4. **ストレージ**：オンデマンドレンダリングで永続ストレージを不要に（5.6TB→120GB）

### ベンチマーク結果

- SimpleQA精度：**78.8%** vs テキストベース71.6%
- 構造化テーブルクエリ：**48.8%** vs 42.5%
- エージェントトークンコスト：**360万トークン** vs テキストベース3750万トークン（10分の1以下）

**視覚チャンキング**が未解決の問題として残る。テキストRAGはセマンティックなチャンキング策略を多年かけて洗練させてきたが、PixelRAGはまだ固定ピクセル高でページを切片するため、セクション境界の概念がない。

---

## Microsoft SkillOpt：モデル重みを触らずにAIエージェントスキルを自動最適化

MicrosoftがMITライセンスのオープンソースフレームワーク**SkillOpt**をGitHubで公開した。AIエージェントのスキル（.mdファイルで保存された命令群）を、深層学習スタイルの最適化で自動改善する。

### 従来の問題

エージェントスキルはテキストドキュメントとして保存され、エンドユーザーのコンテキストに挿入されて実行される。スキルを最適化するには通常、ファイルを手動で再入力する必要があり、改善点を「当てずっぽう」で見つける必要があった。

テキスト編集には深層学習のような**数学的統制**がないため、編集が極めて不安定になる。

### SkillOptのアプローチ

SkillOptは**提案→テストの反復ループ**でスキル文書を最適化する：

1. 対象モデルがバッチタスクを実行し、実行軌跡を生成
2. オフラインオプティマイザが軌跡を分析し、成功と失敗を分離
3. スキル文書への追加・削除・置換編集を提案
4. 編集予算（学習率に相当）をクリップして候補スキルを生成
5. 検証セットで候補を評価し、改善すれば受容、悪化すれば拒否バッファに送信

### ベンチマーク結果

- GPT-5.5で**+23.5ポイント**改善（スキルなしベースライン比）
- エンタープライズ痛点（文書のデータ抽出、AP自動化、クレーム、コンプライアンス）で最大の改善
- 最終スキルは**最大2000トークン**（中央値約920トークン）で人間にとってレビュー・運用が容易

---

## Xiaomi MiMo Code：200ステップ以上の長距タスクでClaude Codeを上回る

XiaomiのMiMo AIチームがMITライセンスの**MiMo Code V0.1.0**をオープンソース公開した。ターミナルベースのAIコーディングアシスタントで、200ステップ以上の長距タスクでClaude Codeを上回る性能を確認したという。

### メモリアーキテクチャ

MiMo Codeのコアは**4層クロスセッション記憶システム**：

- プロジェクトメモリ（永続MEMORY.mdファイル）
- セッションチeckポイント
- スクラッチノート
- タスクごとの進捗ログ

「チェックポイントライター」サブエージェントが主力エージェントと連携し、コンテキストウィンドウが限界に近づくと、環境を構造化チェックポイントから再構築する。

### ベンチマーク

| ベンチマーク | MiMo Code + MiMo-V2.5-Pro | Claude Code + Claude Sonnet 4.6 |
|---|---|---|
| SWE-bench Verified | **82%** | 79% |
| SWE-bench Pro | **62%** | 55% |
| Terminal Bench 2 | **73%** | 69% |

ハーネス本身的にも約5ポイントの差があり、**足場（ハーネス）エンジニアリングがモデル能力と同じくらい重要**になりつつあることを示している。

### 価格競争力

MiMo-V2.5は**$0.40/$2.00/百万トークン**（入力/出力）、V2.5-Proは**$1.00/$3.00/百万トークン**で、Claude Opus 4.8の$5.00/$25.00やGPT-5.5の$5.00/$30.00と比較すると大幅に安い。

---

## 参考リンク

- [Mistral AI資金調達噂（TechCrunch）](https://techcrunch.com/2026/06/12/mistral-is-rumored-to-be-raising-e3b-at-e20-valuation/)
- [Google提訴記事（TechCrunch）](https://techcrunch.com/2026/06/12/google-sues-alleged-chinese-cybercrime-operation-that-used-ai-to-send-scam-texts/)
- [NanoClaw × JFrog（VentureBeat）](https://venturebeat.com/security/nanoclaw-and-jfrog-launch-immune-system-to-block-ai-agents-from-downloading-malicious-code)
- [PixelRAG論文（VentureBeat）](https://venturebeat.com/data/pixelrag-beats-text-parsers-on-accuracy-and-cuts-ai-agent-token-costs-10x)
- [Microsoft SkillOpt（VentureBeat）](https://venturebeat.com/orchestration/microsofts-open-source-skillopt-automatically-upgrades-ai-agent-skills-without-touching-model-weights)
- [Xiaomi MiMo Code（VentureBeat）](https://venturebeat.com/technology/xiaomis-new-open-source-agentic-ai-coding-harness-mimo-code-beats-claude-code-at-ultra-long-200-step-tasks)

---

*本文の情報は2026年6月13日時点のものです。*
