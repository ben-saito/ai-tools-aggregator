---
title: "AI開発ニュース振り返り（2026年6月第2週）：Anthropicモデル停止、MCP/A2A協調、SkillOpt"
description: "2026年6月第2週のAI開発関連ニュースを振り返る。米国政府によるAnthropic最強モデルへの規制、Googleの「faithful uncertainty」、MicrosoftのSkillOpt、 Xiaomi MiMo Codeなど。"
publishedAt: "2026-06-16T00:00:00+09:00"
author: "AI Tools Hub 編集部"
category: "ニュース"
tags: ["Anthropic", "MCP", "A2A", "Microsoft", "Google", "VentureBeat", "Xiaomi", "Kimi"]
featured: false
lang: "ja"
---

# AI開発ニュース振り返り（2026年6月第2週）：Anthropicモデル停止、MCP/A2A協調、SkillOpt

2026年6月第2週、AI開発者を取り巻く環境に大きな変化が несколькихあった。米政府によるAnthropicの最強モデルへの前代未聞のアクセス停止、Googleの研究者が提唱する「faithful uncertainty」というハルシネーション対策、Microsoftのオープンソースによるエージェントスキル最適化フレームワーク「SkillOpt」。本周主要なニュースを振り返る。

---

## Anthropic、政府命令によりClaude Fable 5 / Mythos 5への全アクセスを停止

2026年6月13日（米国時間）、米国政府がAnthropicに対し、Claude Fable 5およびClaude Mythos 5への外国籍ユーザーのアクセスを即時停止するよう命令した。Anthropicはこれに応じる形で、両モデルへのパブリックアクセスをグローバルに遮断した。たった3日前に一般公開されていただけに、エンタープライズユーザーに甚大な影響を与えている。

### 発端は「Pliny the Liberator」のジェイルブレイクか

政府の行動の引き金となったのは、6月10日にX（旧Twitter）で公開され た viral なジェイルブレイクとされる。「Pliny the Liberator」と名乗るユーザーは、Fable 5の安全_guardrailsをバイパスし、爆発物や 化学合成の手順等信息を抽出たと主張した。Anthropicは政府から口頭でのみ証拠 提供されており、「狭いながらのジェイルブレイクの可能性が、何百万人に展開されている商業モデルの回収理由になることに同意できない」と反論している。

### エンタープライズへの教訓：AIサプライチェーンの多様화가不可欠

今回の事態は、单一のクローズドAPIプロバイダーにAIワークフローを依存させることのリスクを浮き彫りにした。DoD（米国防総省）が2026年3月にAnthropicを「サプライチェーンリスク」に 指定して以来、エンタープライズAIのサプライチェーン多様化は 今や不可欠の状況にある。クラウドベースのLLMだけでなく、エンタープライズ管理下のローカル/バーチャライゼーション環境でのAI実行も選択肢として検討すべき段階にある。

---

## MCP・A2Aに続く課題：AIエージェント通信の「トランスポート層”问题

2026年6月14日、VentureBeatはAIエージェント通信プロトコル界の現在地を 分析する記事を发布了。MCP（Model Context Protocol）がツール呼び出しを解決し、A2A（Agent2Agent）が協調を解決した今夜、残るは「トランスポート層」の問題だという。

### 4つのプロトコルが存在する理由

過去18ヶ月で4つの重要なプロトコルが 发表された：

- **MCP**（Anthropic、2024年末）：ツール呼び出しインターフェース。10,000以上のパブリック MCPサーバーが稼働し、Linux Foundationが標準化を確認
- **A2A**（Google、2025年4月）：タスク調整インターフェース。Agent Cardsによるキャパシティ広告、タスクライフサイクル、3つの相互作用モードを提供
- **ACP**（IBM Research、2025年3月）：メッセージエンベロープフォーマット。軽量、ステートレス
- **ANP**（Independent Working Group）：分散型ID（DID）を使った発見・アイデンティティプロトコル

これらはOSI参照モデルの異なる層を 对象しており、实际上是補完し合う関係にある。

### 残されたNAT超えという課題

すべてのプロトコルがHTTP上で動作するが、これはNAT（Network Address Translation）の背後にある88%のデバイスにとって致命的な制約だ。NATの背後にはリレーなしでは到達できないサーバーが存在し、cloud境界を越えたピアツーピア通信が困難になる。

解決策は既に存在している：STUNによるNATトラバーサル（70%のネットワーク拓扑に対応）、X25519 Diffie-Hellman + AES-256-GCMによる認証付き暗号化、QUICによる信頼性のあるUDP配送。これらはWireGuardやWebRTCと同じプリミティブだ。

残された問題は capability-based routing——「どのピアが外国為替データを持つか？」というクエリに答えられるサービスレジストリが必要だという点だ。

---

## Google研究者、「Faithful Uncertainty」でハルシネーション対策

2026年6月12日、Googleの研究者が「faithful uncertainty」と呼ぶ新概念を公开发表した。LLMが内部の自信に合わせて適切に自己不確実性を表現できるようにするメタ認知技術である。

### ハルシネーション対策が招く「ユーティリティ税」の問題

現在のハルシネーション軽減戦略には根本的なトレードオフが存在する：错误率を25%から5%に削减しようとすると、モデルの正しい回答の52%が捨て去られる必要がある（「ユーティリティ税」）。すべての手落ちをハルシネーションとして扱うアプローチでは、信頼性と有用性のどちらかを選ばざるを得ない。

### 「確信犯的错误」という新しい枠組み

研究者の提案は ハルシネーションを再定義することから始まる。「幻觉」を「確信犯的错误」——適切な修飾子なしで権威的に配信された不正確な情報——として捉え直す。これにより、「回答するか黙るか」の二択不再是避けられる。

「faithful uncertainty」は、モデルの言語的不確実性（使う言葉）と内的不確実性（実際の統計的自信）を一致させる。医者への信頼が「全知全能」ではなく「確信した診断」と「教育された仮説」を区別できるかに似ているように、LLMも自己不確実性を正確に認識し、に応じてヘッジやツール起動を使い分けるべきだという考え方だ。

---

## Microsoft、SkillOptを発表——エージェントスキルをモデル重みを変えずに自動最適化

2026年6月11日、Microsoftはエージェントスキル（.mdファイルに保存されたプロンプト群）を 数学的に検証可能な方法で自動最適化するオープンソースフレームワーク「SkillOpt」を公开发表した。MITライセンスで公开されている。

### 従来のスキル最適化が失敗する3つの理由

Microsoft Research AsiaのYifan Yang氏によると、エージェントスキルの自動更新が失敗する原因是明確だという：

- **ステップサイズ制御がない**：スキルがドリフトする
- **バリデーションがない**：外観上修復に見える変更が静かにパフォーマンスを regress させる
- **否定的メモリがない**：同じ失敗した編集が繰り返し登場する

例如、制御なしの書き直しでGPT-5.5のSpreadsheetBenchスコアが41.8から41.1に低下した事例が挙げられる。

### 深層学習の規律をテキスト世界に適用

SkillOptは深く学習的な最適化をエージェントスキルに导入する：

1. 冻结されたターゲットモデルがバッチタスクを実行し、実行軌道を生成
2. オフライン最適化モデルが軌道を分析し、成功と失敗を分離
3. 構造的な追加・削除・置換編集を提案
4. 提案された編集をバリデーションして二重化や矛盾をフィルタリング
5. 期待される有用性に基づいて候補をランキング

結果は業界ベンチマークで既存のベースラインを大幅に上回り、GPT-5.5やQwenの精度を显著に向上させた。

---

## Xiaomi MiMo Code、200ステップ以上の长タスクでClaude Codeを上回る

2026年6月11日、Xiaomiはオープンソースのエージェント型AIコーディングフレームワーク「MiMo Code」を公开发表した。200ステップ以上の超长タスクでClaude Codeを上回る性能を達成したという。

MiMo Codeの特点是永続メモリシステムにある。エージェント開発において広く感じられる痛み——长いタスク実行時の文脈保持——を解決する点で、競合他社も同様の解决を急いでいる。

---

## Google DiffusionGemma、256トークンを並行生成・自己修正

Googleは「DiffusionGemma」という新しい扩散モデルを発表。256トークンを并行で生成し、生成中に自らの错误を自己修正できる。 consumer GPU でも高速に動作する反面、オープンエンデッドなタスクでは弱いとされる。

---

## GPT-5.5、Claude Fable 5を「Agents' Last Exam」ベンチマークで破る

OpenAIのGPT-5.5が、残忍な新ベンチマーク「Agents' Last Exam」でClaude Fable 5を破る 快挙を達成した。GPT-5.5が复杂なマルチパートプロンプトへの厳密な adherence で他现在優勢であることが示された。

---

## 参考リンク

- [Anthropic blocks all public access to Claude Fable 5, Mythos 5](https://venturebeat.com/ai/anthropic-blocks-all-public-access-to-claude-fable-5-mythos-5-following-us-government-order-what-enterprises-should-do)
- [MCP solved tool calling. A2A solved coordination. What solves transport?](https://venturebeat.com/ai/mcp-solved-tool-calling-a2a-solved-coordination-what-solves-transport)
- [Google researchers introduce 'faithful uncertainty'](https://venturebeat.com/ai/google-researchers-introduce-faithful-uncertainty-allowing-llms-to-offer-best-guesses-instead-of-hallucinations)
- [Microsoft's SkillOpt](https://venturebeat.com/ai/microsofts-open-source-skillopt-automatically-upgrades-ai-agent-skills-without-touching-model-weights)
- [Xiaomi's MiMo Code](https://venturebeat.com/ai/xiaomis-new-open-source-agentic-ai-coding-harness-mimo-code-beats-claude-code-at-ultra-long-200-step-tasks)
- [Google's DiffusionGemma](https://venturebeat.com/ai/googles-diffusiongemma-generates-256-tokens-in-parallel-and-self-corrects-as-it-goes)
- [GPT-5.5 beats Claude Fable 5](https://venturebeat.com/ai/surprise-upset-gpt-5-5-beats-claude-fable-5-on-brutal-new-agents-last-exam-benchmark)

---

*本文の情報は2026年6月16日時点のものです。*