# AI開発ニュース: エージェントジャッキング攻撃、LMArenaビジネス化、Gemini画像生成無料化

AIコーディングエージェントの脆弱性が実証され、山西省のメモリ投資が5500億ドル規模に拡大。今週のAI開発ニュースを振り返る。

---

## 「エージェントジャッキング」— Sentry経由でClaude Codeを乗っ取る攻撃が実証

セキュリティ企業 **Tenet Security** は6月、`Claude Code`、`Cursor`、`Codex` などのAIコーディングエージェントを乗っ取る「**エージェントジャッキング（agentjacking）**」攻撃手法を公开した。攻撃の入口は **Sentry** — 開発者が広く信頼するエラー追跡ツールの公開Credentials。

### 攻撃の手口

1. 攻撃者が **公開されているSentry DSN** に偽のエラーイベントを送信（認証不要）
2. SentryのMCPサーバーが注入されたイベントを「正規の診断データ」として返す
3. エージェントがエラーダイアログを信頼し、攻撃者の指示を**开发者と同じ権限で実行**
4. EDR、WAF、IAM、ファイアウォール — すべてが無視

Tenetが管理環境でのテストに成功した確率 **85%**。Sentryは「この脆弱性は技術的に防ぎようがない」と認めた。

### 影響範囲

- **2,388の組織**が publicly exposed Sentry credentials を持つと特定
- 奪取されたClaude Code環境に **AWSシークレットキー** と **プライベートリポジトリURL** が存在
- Datadog、PagerDuty、Jira も同じ Exposure class に該当（**MCP接続initis**）
- Cloud Security Alliance（CSA）は即座に「MCP脆弱性の体系的クラス」と分類

### 5つの調査が示すガバナンスギャップ

| ギャップ | 実状 |
|---|---|
| エージェント棚卸 | 企業の平均 deployed agents は37以上、**14.4%のみ**が本番導入前にセキュリティ承認を取得 |
| コントロール均等性 | **34%** のみが人間と同等のセキュリティコントロールをエージェントに適用 |
| スコープドリフト | **33%** が過去12ヶ月でエージェントが承認範囲外にアクセスした経験を報告 |
| ガバナンス認識ギャップ | 経営層の**65%** が「ポリシー清晰」と回答、、現場の劳动者の**43%** のみが同意 |
| 侵害検出確実性 | **31%** が過去12ヶ月のAI関連侵害を確認できない |

**EU AI Act** 高リスクコンプライアンス義務は **2026年8月2日** に発効。Quarter 3のベンダー評価前に5項目のギャップテストを実施することが推奨される。

---

## LMArena（AIリーダーボード）が$100Mビジネスに — ベンチマークのビジネス化

**LMArena**（AI性能比較プラットフォームで「Arena」としても知られる）が **$100Mビジネス** に成長したことが6月29日に明らかになった。同プラットフォームはAIモデルの性能比較に広く使われており、Chatbot Arena や LLMPerf といった評価腰盤を提供する。

背景には企業体のAI導入があり、モデルの性能向上が直接的なビジネス成果につながる構造がある。ベンチマーク结果是「どのモデルを採用するか」の判断材料となり、機関的な需要を創出している。

---

## Google Gemini、パーソナライズド画像生成を米国無料ユーザーに開放

Googleは6月29日、**GeminiのパーソナライズドAI画像生成** を対象米国無料ユーザーに расшириした。従来の Gemini Nano  기반画像生成ではなく、连接されたGoogle Appsからのデータを活用し、ユーザーの興味・関心に基づく画像を生成できる。

これはGeminiの免费层的 расшире策略であり、付费版用户之外的 用户にもAI画像生成機能を扩大する举措となる。

---

## 韓国 Samsumg・SK Hynixが$5500億以上を投資 — 「RAMageddon」への対応

世界最大級のメモリチップ企業 **Samsung** と **SK Hynix** が、南朝鲜が「**RAMageddon**」と呼ぶAI時代のメモリ逼迫に対応するため、**$5500億以上** をコミットした。

AIモデルの训练と推論には大容量RAMが不可欠。HBM（High Bandwidth Memory）需要の爆増に対しSouth Korea が国家戦略としてメモリlab fabの建設を加速する。Samsungは2026年中にHBM4のサンプリングを開始する方針。

---

##  参考リンク

- [Tenet Security エージェントジャッキング開示](https://tenetsecurity.ai/blog/agentjacking-coding-agents-with-fake-sentry-errors/)
- [CSA エージェントジャッキング分類](https://labs.cloudsecurityalliance.org/research/csa-research-note-agentjacking-mcp-sentry-injection-20260612/)
- [VentureBeat: Agentjacking 详解](https://venturebeat.com/security/the-attack-that-hijacked-claude-code-came-through-sentry-datadog-pagerduty-and-jira-have-the-same-exposure)
- [VentureBeat: Prompt Injection 对企业AI的攻击](https://venturebeat.com/security/prompt-injection-is-exploiting-enterprise-ais-biggest-design-flaws-by-targeting-agents-rag-pipelines-and-model-routers)
- [TechCrunch: Gemini 画像生成免费化](https://techcrunch.com/2026/06/29/geminis-personalized-ai-image-generation-is-now-free-for-u-s-users/)
- [TechCrunch: LMArena $100M](https://techcrunch.com/2026/06/29/arena-the-ai-leaderboard-everyone-uses-is-now-a-100m-business/)
- [TechCrunch: RAMageddon](https://techcrunch.com/2026/06/29/south-korean-tech-giants-commit-over-550b-to-ease-ramageddon/)
- [TechCrunch: Anthropic + California](https://techcrunch.com/2026/06/29/anthropic-and-gov-newsom-forge-deal-allowing-california-government-to-use-claude-at-half-price/)

---

*（本文の情報は2026年6月30日時点のものです）*
