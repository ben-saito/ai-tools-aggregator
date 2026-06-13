# AnthropicがFable 5/Mythos 5への全面アクセス遮断を発表 —— 米国政府的命令受け

米国政府在野の地政学的懸念を背景に、Anthropicの最新フラッグシップモデルが全面停止に追い込まれた。開発者コミュニティにとっては、単に「いつものAPI障害」とは異なる、より構造的な警鐘である。本稿では今回の事態の背景、技術的詳細、そしてエンタープライズ開発者が今すぐ講じるべき対策について詳しく解説する。

---

## 米国政府的命令の詳細

2026年6月12日（米国時間）、米国政府は**Anthropicに対し、外国国籍者向けのClaude Fable 5およびClaude Mythos 5への全アクセス即時停止**を命じる輸出管理指示を発令した。Anthropicはこれに応答し、両モデルへの**グローバルなパブリックアクセスを全面遮断**した。

重要な点として、この遮断はClaude Fable 5/Mythos 5に**限定されない包括的な措置**であり、以下のような影響がある：

- 既存のFable 5/Mythos 5セッションは即座にエラーで終了
- 新規クエリは自動的にOpus 4.8などの旧世代モデルにルーティング
- 有料エンタープライズ顧客すら例外なくアクセス不可
- Anthropic社内ですら両モデルにアクセスできない状態

Anthropicは公式ブログにて*"We believe this is a misunderstanding and are working to restore access as soon as possible"*と声明し、顧客への謝罪述べた。

---

## 発端：Pliny the Liberatorによる公開ジェイルブレイク

今回の政府対応の直接的な引き金と目されているのが、6月10日にX（Twitter）で公表された**「Pliny the Liberator」によるFable 5のジェイルブレイク**である。

Plinyは、複数のAIエージェントを使った協調攻撃手法を使い、制限付き情報の抽出に成功したと主張した。攻撃の手法は極めて洗練されていた：

- **Unicode・同形異字文字・キリル文字**を組み合わせた難読化
- 長いコンテキストを活用したリファレンス追跡
- 有害リクエストを無害な外れ分布トークンに分割
- すでにジェイルブレイクされたOpusモデルで断片を再構築

ただし、Anthropicは政府からの情報提示が**「口頭証拠のみ」**であり、狭い範疇のジェイルブレイクものであると反論している。Anthropicはさらに、競合であるOpenAIのGPT-5.5等同等の能力が公に存在すると指摘した。

---

## エンタープライズ開発者への影響

### 単一プロバイダーへの依存リスク

今回の事態が示す最も明白な教訓は、**エンタープライズAIサプライチェーンの多様化の緊急必要性**である。VentureBeatのCarl Franzen記者が指摘するように：

> *"Enterprises can no longer afford — from an operational reliability standpoint — to run critical workflows on any single AI model or even provider."*

単一の閉じたAPIプロバイダーにビジネスクリティカルなワークフローを委ねることは、以下のようなリスクに常にさらされている：

- 輸出管理・禁輸措置
- インシデント対応としての突発的API遮断
- サイバー攻撃によるサービス中断
- 規制当局による強制措置

### 2026年3月のPentagon先例

実はこれは初めてのことではない。2026年3月、**Pete Hegseth国防長官**はAnthropicを「サプライチェーンリスク」に指定した。これはAnthropicが米国軍による無制限な国内監視および致死自律兵器へのClaude使用を安全制限付きで拒否したこと引发的。

この時点で既に、防衛サプライチェーンからのAnthropic排除は実施されており、今回のFable/Mythos 5遮断は同パターンの延長線上にある。

---

## Microsoft、SkillOptを発表：AIエージェントスキルの自動最適化フレームワーク

### スキル最適化の課題

同時期にMicrosoftは、**SkillOpt**——エージェントスキルをモデルウェイトを変更せずに自動アップグレードするOSSフレームワーク——をMITライセンスで公開した。

AIエージェントスキルとは、企业的ユースケースや複雑なワークフローに向けてモデルを適応させる一連の命令を保存した`.md`ファイル群である。スキルの利点はモデルの重みを変更せずに動作をカスタマイズできる点だが、最適化は手作業であり、多くの場合「あてずっぽうのゲーム」になりやすい。

### SkillOptのアプローチ

SkillOptの核となるアイデアは、**深層学習の数学的厳密性をテキスト最適化に適用する**ことである。

Microsoft Research AsiaのYifan Yang氏は以下を失敗パターンの主因として指摘する：

- **ステップサイズ制御の欠如**：スキルがドリフトする
- **バリデーションの欠如**：見掛け上合理的な修正が静かにパフォーマンスを退化させる
- **否定的記憶の欠如**：同じ失敗した編集が繰り返し現れる

SkillOptは以下の反復プロセスでこれを解決する：

1. **初期スキルドキュメント + 冻结ターゲットモデル**でタスクバッチを実行し、実行軌跡を生成
2. **オフラインオプティマイザモデル**が成功と失敗をミニバッチに分離
3. スキルドキュメントへの**追加・削除・置換編集**を提案
4. 重複・矛盾をフィルタリングし、期待效用でランク付け
5. **学習率、バリデーションゲート、モメンタム**などの深層学習的制御を適用

ベンチマーク結果として、制御なしの変更がいかに簡単にパフォーマンスを低下させるかが実証されている。

---

## 開発者が今すぐ講じるべき対策

### 1. プロバイダー多様化の實施

単一プロバイダーに依存したアーキテクチャを即座に再評価する。可能な場合：

- 複数のクラウドベースAIプロバイダーを組み合わせる
- 企業管理下のローカル/仮想HWでAIモデルを実行する選択肢を検討
- オープンソースモデルの社内展開を評価する

### 2. スキル・アーティファクトの体系的管理

SkillOptが示すように、エージェントスキルの管理は手作業から脱却し、体系的な最適化プロセスが必要である。スキルドキュメントを「訓練可能なオブジェクト」として扱い、パフォーマンスフィードバックに基づいて反復改良することが重要。

### 3. フェイルオーバー設計の組み込み

API遮断時に備えた自動フェイルオーバー机制を設計に組み込む。単一モデルの停止が全体システムに影響しないアーキテクチャを原則とする。

---

## まとめ

今回のAnthropicのFable 5/Mythos 5遮断は、単なる技術的障害ではない。**AIプロバイダーの國家安保・輸出管理制度への服従という新常態**の到来を告げるものである。

開発者・エンタープライズ技術リーダーは、この事態を契機にAIサプライチェーンの多様化を加速する必要がある。同時に、MicrosoftのSkillOptに代表されるように、エージェントスキルの体系的管理・最適化ツールの導入も重要である。

AI應用の信頼性は、「最も capableなモデルへのアクセス」から「可用性・多様性を備えた堅牢なシステム設計」へと評価基準を移す時代过来了。

---

## 参考リンク

- [VentureBeat: Anthropic blocks all public access to Claude Fable 5, Mythos 5](https://venturebeat.com/ai/anthropic-blocks-all-public-access-to-claude-fable-5-mythos-5-following-us-government-order-what-enterprises-should-do)
- [VentureBeat: Microsoft's SkillOpt automatically upgrades AI agent skills](https://venturebeat.com/ai/microsofts-open-source-skillopt-automatically-upgrades-ai-agent-skills-without-touching-model-weights)
- [VentureBeat: Kimi K2.7-Code cuts thinking tokens 30%](https://venturebeat.com/ai/kimi-k2-7-code-cuts-thinking-tokens-30-but-practitioners-say-the-benchmarks-dont-check-out)
- [VentureBeat: Google's 'faithful uncertainty' for LLMs](https://venturebeat.com/ai/google-researchers-introduce-faithful-uncertainty-allowing-llms-to-offer-best-guesses-instead-of-hallucinations)
- [VentureBeat: Surprise upset: GPT-5.5 beats Claude Fable 5](https://venturebeat.com/ai/surprise-upset-gpt-5-5-beats-claude-fable-5-on-brutal-new-agents-last-exam-benchmark)
- [Microsoft SkillOpt (GitHub)](https://github.com/microsoft/skillopt)

---

*（本文の情報は2026年6月13日時点のものです。状況は大きく変動する可能性があるため、最新情報は各ソースをご確認ください。）*
