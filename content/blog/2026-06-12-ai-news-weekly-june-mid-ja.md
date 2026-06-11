# AI開発ニュースまとめ（2026年6月12日）—— Microsoft SkillOpt、GPT-5.5 ALE首位、Google DiffusionGemma

AI業界は今週、Microsoftのエージェントスキル最適化フレームワーク「SkillOpt」、OpenAIのGPT-5.5がBerkeleyの新しいベンチマーク「ALE」で首位に立つ劇的勝利、Googleの拡散ベース言語モデル「DiffusionGemma」の登場など、目が離せない展開が目白押しだ。開発者として見過ごせない話題をまとめている。

---

## Microsoft、SkillOptでAIエージェントスキルの自動最適化を可能に ——モデル重みを変えずに性能向上

Microsoftは6月11日、**SkillOpt**——AIエージェントのスキル（.mdファイルで記述された手続き的知識）をモデル重みを変更せずに自動最適化するオープンソースフレームワークを正式に公開した。MITライセンスで公開されている。

**技術的背景:**
Agent skillsはエンタープライズの複雑なワークフローに適応するための重要な仕組みだが、従来の最適化は手作業による「当てずっぽう」が中心だった。深い学習が厳密な数学的制御，依靠稳定性を持つ一方、人間のプロンプトエンジニアリングは trial and error に頼らざるを得なかった。

**SkillOptの革新的ポイント:**
- 実行モデルと最適化モデルを分離する**propose-and-testループ**
- ミニバッチ単位で成功と失敗を分離し、体系的な手続きエラーを特定
- 学習率、検証ゲート、モメンタムなどの**深層学習スタイルの制御**を導入
- 編集の重複・矛盾をフィルタリングし、期待效用順に кандидат を順位付け

**開発者への影響:** プロンプトの「あたりはずれ」に頼らず、数学的に検証されたスキル改善が可能になる。GPT-5.5でSpreadsheetBenchのスコアが41.8から改善された事例が報告されている。

---

## GPT-5.5、Berkeley的新型ベンチマーク「ALE」でClaude Fable 5を押さえ首位 —— エージェント評価の転換点

UC BerkeleyのCenter for Responsible, Decentralized Intelligence（CRDI）は6月10日、**Agents' Last Exam（ALE）**——経済的に価値のある長視野プロフェッショナルワークフローを実行できるかを測定する新しいベンチマークをリリースした。

**ALEの特徴:**
- 1,490タスク实例（5,000タスク为目标发展中）
- 55の非物理産業サブドメインをカバー（U.S. federal occupational taxonomy (O*NET/SOC 2018) に厳密に準拠）
- 静的なQ&Aや狭いテキストベースのターミナル環境ではなく、**GCUA（Generalist Computer-Use Agent）フレームワーク**を採用
- Brain（推論）、Eyes（視覚知覚）、Body（オーケストレーション）、Hands（ツール起動）、Feet（実行時サブストレート）の5層で能力を測定

**ランキング結果:**

| ランク | エージェントハーネス | モデル | 通過率 | 平均スコア |
|--------|---------------------|--------|--------|------------|
| 1 | Codex | GPT-5.5 | 24.0% | 42.8% |
| 2 | Ale Claw | GPT-5.5 | 23.0% | 45.8% |
| 3 | Claude Code | Claude Fable 5 | 22.0% | 40.5% |
| 4 | OpenClaw | GPT-5.5 | 21.1% | 41.0% |
| 5 | Cursor CLI | composer-2.5 | 20.4% | 38.5% |

**開発者への影響:** LLM-as-a-judge問題の代わりに決定論的コードベース評価を採用したことで、より信頼性の高いエージェント性能測定が可能になった。現在の最先进モデルでも24%程度の通過率という现状は、エージェント技術がまだ実可用性の壁に到達していないことを示している。

---

## Google DiffusionGemma —— 256トークンを並列生成し自己訂正する拡散ベース言語モデル

Googleは6月11日、**DiffusionGemma**——テキスト生成に拡散モデル应用于 production scaleしたオープンソース実験モデルを正式にリリースした。Gemma 4バックボーン基础上构建され、Apache 2.0ライセンスで公開されている。

**核心的技术革新:**
- **並列ブロック生成:** 従来の自己回帰モデルが1トークンずつ逐次生成するのに対し、DiffusionGemmaは256トークンブロックを一括で生成
- **自己訂正機能:** 自信のない位置を特定して次のパスで再評価できる（自己回帰モデルはコミットしたトークンを訂正できない）
- **双方向コンテキスト:** ブロック内の全位置が同時に相互に attend するため、制約付き生成タスクに構造的に有利

**ベンチマーク結果:**
- Nvidia H100（FP8、batch size 1）: 1,008 tokens/秒（標準自己回帰比約5倍）
- Nvidia H200: 1,288 tokens/秒（同約6倍）
- 量子化済みで18GB VRAMのコンシューマGPU（RTX 4090、5090）で動作

**制約:** Google自身が「最大品質を求める applicationsには standard Gemma 4を推奨」と認めている通り、オープンエンドタスクでは品質が劣る場合がある。

**開発者への影響:** 低并发率のローカル推論や单一ユーザーアプリケーションでは大きな速度向上が見込める。高スループットなクラウドサービングでは自己回帰モデルが既に計算を饱和させているため、扩散の利点は薄くなる。

---

## Apple Siri AI、企业向けアプリレイヤーに —— WWDC26でのApple Intelligence拡張

AppleはWWDC26で、SiriをiPhone、iPad、Mac、Apple Watch、Vision Pro全体のシステム-wide AIインターフェースとして位置づける計画を明らかにした。単なる音声アシスタントではなく、**AI驱动的アプリアクション・コンテンツ発見レイヤー**への変革だ。

**企业开发者向けの主要機能:**
- **App Entities:** アプリコンテンツをApp Intentsに公开し、SiriとSpotlightのセマンティックインデックスで利用可能に
- **App Intents + App Schemas:** 自然言語でアプリアクションを実行可能にするスキーマ定義
- **View Annotations API:** 画面上のUI要素をアプリオブジェクトにマッピングし、「この顧客スレッドを要約して」などの対話的リクエストを実現
- **AppIntentsTesting:** Siri、Shortcuts、Spotlightと同じインフラでApp Intentsを検証するテストフレームワーク

**開発者への影響:** 企业SaaSベンダにとって、Appleプラットフォームでの競争力整備が重要になる。CRM、IT servic desk、プロジェクト管理、財務、デザイン、ヘルスケア、物流、フィールドオペレーションなどのカテゴリで必须となる可能性がある。

---

## Cohere、单一H100で動作するコーディングエージェントをオープンソース化

Cohereは6月9日、**单一H100で動作する30Bパラメータのコーディングエージェント**をオープンソースとして公開した。消费レベルGPUでの自律コーディング実現を目指した取り組みだが、推論コストの冗長性（verbosity）が高volumeパイプラインで複合する課題がある。

---

## 参考リンク

- [Microsoft's SkillOpt automatically upgrades AI agent skills without touching model weights (VentureBeat)](https://venturebeat.com/ai/microsofts-open-source-skillopt-automatically-upgrades-ai-agent-skills-without-touching-model-weights)
- [Surprise upset: GPT-5.5 beats Claude Fable 5 on brutal new Agents' Last Exam benchmark (VentureBeat)](https://venturebeat.com/ai/surprise-upset-gpt-5-5-beats-claude-fable-5-on-brutal-new-agents-last-exam-benchmark)
- [Google's DiffusionGemma generates 256 tokens in parallel and self-corrects as it goes (VentureBeat)](https://venturebeat.com/ai/googles-diffusiongemma-generates-256-tokens-in-parallel-and-self-corrects-as-it-goes)
- [Apple's new Siri AI is more than just a smarter assistant (VentureBeat)](https://venturebeat.com/ai/apples-new-siri-ai-is-more-than-just-a-smarter-assistant-its-a-new-enterprise-app-layer)

---

*（本文の情報は2026年6月12日時点のものです）*
