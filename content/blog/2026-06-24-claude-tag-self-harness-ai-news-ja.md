# Anthropic「Claude Tag」発売、Self-Harness、米AI半導体調達攻加速 —— 2026年6月第4週のAI開発ニュース

2026年6月第4週は、エンタープライズAIの「チーム的一天」到来を印象づける一週間だった。AnthropicがSlackに永続的なAI同僚「Claude Tag」を投入、Shanghai AI LabがAIエージェントの自己改善フレームワーク「Self-Harness」を発表、米AI半導体ベンチャーの調達も加速した。

---

## Anthropic、Slackに「Claude Tag」—— 社内コードの65%をClaudeが生成

Anthropicは6月23日、Slackに常駐するAIチームメンバー「**Claude Tag**」の提供を開始した。Claude EnterpriseおよびTeamプランのベータ版としており、既存の「Claude in Slack」アプリを完全に置き換える。

特徴は**マルチプレイヤーモデル**だ。従来のSlack AI連携が個人ユーザーは1対1で利用するのに対し、Claude Tagはチーム内に1つのアイデンティティを共有する。チャンネル内の誰でも@a Claudeで依頼でき、誰かが途中まで進めた会話を別のメンバーがそのまま引き継げる。

4つの差別化要因が明示されている：

- **マルチプレイヤー動作**：チャンネルに1つのClaudeが存在し、全員が可視化・再利用可
- **文脈の蓄積**：チャンネルの会話に追従し、プロジェクトの詳細を最初から説明する必要なし
- **自律的イニシアチブ**：「ambient behavior」模式下、Claudeは関連する情報を能動的にsurfacingし、放置されたスレッドにフォローアップする
- **非同期実行**：タスクを時間かけて並列処理し、Anthropic社内では「複数のClaudeにタスクを委任する時間が増加」と報告

注目すべきは**Anthropic社内での利用率**だ。同社はプロダクトチーム全体のコードの**65%**がClaude Tagの内部版で生成されていると主張する。サポートチャネルやデータ分析も同一システムで運行しているという。

ガバナンス面では、チャネルごとにClaudeのアイデンティティを分離でき、スコープ外のデータアクセスは不可。トークン使用量の制限を組織・チャネルレベルで設定でき、全アクションのログとユーザー紐付けを監査できる。

---

## Self-Harness：上海AI LabがAIエージェントの「自己改良ハーネス」フレームワークを発表

Shanghai Artificial Intelligence Laboratoryの研究者は、**Self-Harness**と呼ばれる新しいパラダイムをarXivで発表した。LLMベースエージェントが、外部の強力なモデルや人手によらず、**自身の実行ルールを体系的に改善**できる仕組みだ。

現在のエージェント開発では、**ハーネス（harness）**の調整が主なボトルネックになっている。ハーネスとは、システムプロンプト・ツール・メモリ・検証ルール・ランタイムポリシー・オーケストレーションロジック・障害回復手続きを組み合わせたレイヤー，指す。Claude Code、SWE-agent、OpenHandsなどが代表例だ。

研究チームのZhang Fan氏によると、「実際のボトルネックは人間の速度ではなく、体系的なフィードバックループの欠如」だという。従来のハーネスエンジニアリングは、直感・少数の観察失敗例・場当たり的なデバッグに依存していた。

Self-Harnessは**3段階反復ループ**でこれを自動化する：

1. **弱点的掘削（Weakness Mining）**：初期ハーネスからエージェントを実行し、失敗パターンをカテゴリライズ
2. **ハーネス提案（Harness Proposal）**：失敗パターンに基づき、最小限でターゲットな修正を複数生成
3. **提案検証（Proposal Validation）**：回帰テストで候補を評価。精度向上を確認した修正のみマージ

Terminal-Bench-2.0での評価では、MiniMax M2.5、Qwen3.5-35B-A3B、GLM-5で**最大60%**の性能向上を達成。企業にとっての実用例として、ドキュメント形式変更で突然動作しなくなった自動修正エージェントを、Self-Harnessで改善するシナリオが示された。

---

## AI Chipmaker Groq、6.5億ドルの資金調達を正式確認

TechCrunchによると、AI半導体スタートアップの**Groq**は6月22日、**6億5000万ドルの増資**を正式確認した。NVIDIAによる200億ドルの「not-an-acqui-hire」取引の申し合わせが話題となった直後の発表だ。

Groqは調達した資金を**neocloudビジネス**の拡張と新執行部の採用に使用する計画を明かしている。neocloudとは他社GPUを活用したクラウドサービスモデルで、Groqの独自シリコン光子技術とは異なる事業戦略に位置づけられる。

---

## ByteDance、Seedance 2.5でAI動画生成の30秒壁を破る

The Decoderによると、ByteDanceは6月24日、Volcano EngineのFORCE Conferenceで**Seedance 2.5**を含む5つのAIモデルを発表した。Seedance 2.5は長さ**最大30秒**の動画クリップを生成でき、7月初旬頃の_launch予定。

Seedance 2.0はネイティブ4K・10ビットカラー深度をサポート。Volcano EngineはDoubao 2.1 Pro言語モデル、Seedream 5.0 Pro画像モデル、Seed-Audio 1.0オーディオモデルもまた同時に発表している。

OpenAIがSoraの事業化を中断し、ByteDance自体がSeedance 2.0の海外展開をHollywoodスタジオの著作権申し立てで保留状態にある状況で、AlibabaのAI動画モデルが世界ランキング2位に上昇するなど、AI動画生成市場の地図が塗り替えられている。

---

## 参考リンク

- [Anthropic launches Claude Tag (VentureBeat)](https://venturebeat.com/ai/anthropic-launches-claude-tag-replacing-its-slack-app-with-a-persistent-ai-teammate-that-learns-monitors-and-works-autonomously/)
- [Researchers introduce Self-Harness (VentureBeat)](https://venturebeat.com/ai/researchers-introduce-self-harness-a-framework-that-lets-ai-agents-rewrite-their-own-rules-boosting-performance-up-to-60/)
- [AI chipmaker Groq confirms $650M raise (TechCrunch)](https://techcrunch.com/2026/06/22/ai-chipmaker-groq-confirms-650m-raise-re-staffs-after-nvidias-20b-not-acqui-hire-deal/)
- [ByteDance's Seedance 2.5 (The Decoder)](https://the-decoder.com/bytedances-seedance-2-5-breaks-the-30-second-barrier-for-ai-video-generation/)

---

*本文の情報は2026年6月24日時点のものです。*
