# AI開発ニュース：Nadella警告、MCP/A2Aの次へ、Sakana AIの超深層調査、他

2026年6月中旬のAI業界は、Microsoft CEO Satya Nadellaの業界構造に関する警告、AIエージェントプロトコル界の分化と統合、そして複数の新興勢による技術的突破という3つの潮流で沸いている。本稿では、VentureBeatが報じた主要ニュースを整理する。

---

## Satya Nadellaが警告：AIは業界全体を空洞化する可能性がある

Microsoft CEO Satya Nadella氏は6月（日曜日）に包括的なエッセイを発表し、AI時代の経済的課題を描いた。内容は、少数のごく一部の **フロンティアモデル** が業界全体の専門知識を取り込み、コモディティ化させてしまうリスクだ。

この構造的問題は、かつてグローバル化がもたらした産業空洞化と類似している。かつての製造業のオフショアリングが国内産業を食い尽くしたように、AIフロンティアモデルが特定の専門分野にわたる知識を吸収し、企業の競争上の要害（competitive moats）を剥奪する可能性がある。

ナデラ氏の見解は以下の通り：
- 少数のフロンティアモデルが業界 전문知識を独占するリスク
- 既存のビジネスが競争上の要害を失う可能性
- AIによる経済的構造変化への対処が必要

これは単なる技術的突破の問題ではなく、AI導入が産業構造そのものに与える影響を考える必要があるという警鐘である。

---

## AIエージェントプロトコル戦争：MCPがツール呼び出しを解決、A2Aが協調を解決、では.transportは？

分散コンピューティングの歴史は、プロトコル乱立とその後の統合の繰り返しだった。CORBA、DCOM、RMI、SOAPが1990年代にEnterprise統合市場で争い、RESTがHTTPネイティブの簡潔さで勝利した歴史がある。

現在のAIエージェントエコシステムも同様の段階にある。过去18个月間で4つの重要なプロトコルが发表された：

| プロトコル | 発表元 | 解决的问题 |
|-----------|--------|------------|
| **MCP** (Model Context Protocol) | Anthropic (2024年後半) | ツール呼び出しインターフェース |
| **ACP** (Agent Communication Protocol) | IBM Research (2025年3月) | メッセージエンベロープ形式 |
| **A2A** (Agent2Agent) | Google (2025年4月) | タスク協調インターフェース |
| **ANP** (Agent Network Protocol) | 独立ワーキンググループ | 発見とアイデンティティプロトコル |

### 各プロトコルの位置づけ

**MCP** はツール呼び出しインターフェースとして既に勝利を収めている。Linux Foundationの確認によれば、2026年4月時点で1万以上の公的なMCPサーバーがアクティブで、Python SDKは1億6400万回以上ダウンロードされている。ツール呼び出し層の標準化は事実上完了した。

**A2A** はタスク協調インターフェースとして、Agent Cards（能力広告）、タスクライフサイクル状態、同期・ストリーミング・非同期の3つのインタラクションモードを提供。Googleが2025年6月にLinux Foundationに寄贈し、企業AIチームに広く採用されている。

### 残された.transport問題

しかし、いずれのプロトコルも解決していない問題がある。それは **トランスポートレイヤー（OSI参照モデルのレイヤー5）** の問題だ。

現在全てのパプロトコルはHTTP上で動作する。HTTPは前提として「到達可能なサーバー」を必要とする。しかし、网络の88%がNAT（Network Address Translation）の背後にある。NATの背後にあるエージェントフリートがクラウド境界越え、家庭内ネットワーク、エッジデプロイ間で直接通信する必要がある場合、全てのリクエストが中介インフラを通らなければならない。

この課題に対する技術は既に存在する：
- **UDPホールパンチング + STUN**: 网络トポロジの70%に対するNATトラバーサルを提供
- **X25519 Diffie-Hellman + AES-256-GCM**: 証明書機関不要な認証済み暗号化トンネル
- **QUIC** (RFC 9000) またはカスタムスライディングウィンドウプロトコル over UDP: TCPのヘッドオブラインブロッキング 없는信頼性のある配信

違いは、エージェントの文脈では **能力ベースルーティング** が必要となる点だ。エージェントはホスト名ではなく、そのピアが何ができるかによってピアを見つける必要がある。「リアルタイム外国為替データを持つピアはどれか？」というクエリに答える能力レジストリが求められている。

---

## Sakana AI、超深層調査エージェントを発表：8時間で100ページ以上のレポート

Sakana AIは、「ultra deep research」エージェントを発表しました。8時間で100ページ以上の調査レポートを生成できる製品だ。

特徴として、Sakana AIおよび外部AIサービスプロバイダーは、明示的なオプトイン同意がない限り客户服务データまたは入力をモデルの訓練や微調整に使用しないことを保証している。

これは、より深い調査能力が必要なビジネス需要に応える製品だ。

---

## Anthropic：美国政府命令に従いClaude Fable 5、Mythos 5の全パブリックアクセスを遮断

Anthropicは、美国政府的命令に従い、Claude Fable 5およびMythos 5の全パブリックアクセスを遮断した。

企業にとってこの状況から学ぶべき教訓は、单一AIモデルや单一プロバイダーに критические워크フローを依存させることの運用上のリスクだ。今後はマルチプロバイダー戦略が不可或缺となる。

---

## Kimi K2.7-Code、思考トークンを30%削減 — しかし実務者はベンチマークに疑義

Kimi K2.7-Codeは、思考トークンを30%削減したと主張するが、実務者からはベンチマークの信憑性について疑義が呈されている。

K2.7-Codeはライブラリをラップするのではなく直接コードを作成するが、より正直なアプローチを取る一方、2つのカーネルが失敗し、MoE結果がK2.6からリグレッションを起こしたという報告もある。

---

## Google研究者たちが「faithful uncertainty」を導入：LLMが幻觉ではなく最佳推定を提供

Google研究者は、LLMが幻觉をを起こすのではなく、最善の推定を提供できる「faithful uncertainty」（忠実な不確実性）アプローチを導入した。

ゼロ幻觉の追求が有効な回答を犠牲にしているという問題に対し、Google研究者は「メタ認知」アプローチを提案。 enterprise AIのコストと有用性のバランスを取り戻すのが目的だ。

---

## MicrosoftのSkillOpt：モデル重みを触れずにAIエージェントスキルを自動アップグレード

Microsoftのオープンソースプロジェクト **SkillOpt** は、モデル重みを触れずにAIエージェントスキルを自動的にアップグレードするツールだ。

SkillOptは深い学習の規律をAIエージェントスキルにもたらし、手動のプロンプト調整を数学的に検証されたテキスト最適化に置き換える。

---

## Xiaomi MiMo Code：200ステップ以上の超長タスクでClaude Codeを击败

Xiaomiは新的开源AIコーディングハーネス **MiMo Code** を発表した。MiMo Codeは、200ステップ以上の超長タスクでClaude Codeを击败するとされている。

永続メモリシステムが、エージェントリ開発ワークフローにおける実践的で広く感じられる課題に対応している点は大きい。

---

## 参考リンク

- [Satya Nadella warns that AI could hollow out entire industries](https://venturebeat.com/ai/satya-nadella-warns-that-ai-could-hollow-out-entire-industries)
- [MCP solved tool calling. A2A solved coordination. What solves transport?](https://venturebeat.com/ai/mcp-solved-tool-calling-a2a-solved-coordination-what-solves-transport)
- [When deep research isn't enough for your business: Sakana AI launches 'ultra deep research' agent](https://venturebeat.com/ai/when-deep-research-isnt-enough-for-your-business-sakana-ai-launches-ultra-deep-research-agent)
- [Anthropic blocks all public access to Claude Fable 5, Mythos 5 following US government order](https://venturebeat.com/ai/anthropic-blocks-all-public-access-to-claude-fable-5-mythos-5-following-us-government-order)
- [Kimi K2.7-Code cuts thinking tokens 30%](https://venturebeat.com/ai/kimi-k2-7-code-cuts-thinking-tokens-30-but-practitioners-say-the-benchmarks-dont-check-out)
- [Google researchers introduce 'faithful uncertainty'](https://venturebeat.com/ai/google-researchers-introduce-faithful-uncertainty-allowing-llms-to-offer-best-guesses-instead-of-hallucinations)
- [Microsoft's SkillOpt automatically upgrades AI agent skills](https://venturebeat.com/ai/microsofts-open-source-skillopt-automatically-upgrades-ai-agent-skills-without-touching-model-weights)
- [Xiaomi's MiMo Code beats Claude Code at ultra-long tasks](https://venturebeat.com/ai/xiaomis-new-open-source-agentic-ai-coding-harness-mimo-code-beats-claude-code-at-ultra-long-200-step-tasks)

---

*（本文の情報は2026年6月16日時点のものです）*