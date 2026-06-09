# Anthropicが「Claude Fable 5」公開、安全対策でデータ保持も強化

Anthropicは2026年6月9日、最強AIモデル「Mythos」の一般公開版「Claude Fable 5」を正式にリリースした。 software engineering、knowledge work、visionに優れたこのモデルは、高リスク領域（サイバーセキュリティ、生物学、化学、脱獄技術）では安全にOpus 4.8に自動Fallbackする仕組みが実装されている。

---

## Fable 5の技術的特徴と料金体系

Fable 5は2026年4月にパートナー限定プレビューとして登場した後、15カ国数百 组织への展開を経て、ついに一般 доступ可能になった。Anthropicによると、外部 bug bounty で1,000時間以上のテストを実施しUniversal jailbreakは発見されなかったという。

**料金体系**は Opus 4.8 の2倍:
- 入力: $10/百万トークン
- 出力: $50/百万トークン

Third-party評価では、Hex の分析ベンチマークで90%超、Genspark ではUIデザインやゲームコーディングで他社モデルを上回る結果が出ている。

---

## セキュリティ上の新措置：30日間データ保持

Mythos-classモデルのリスクを懸念するAnthropicは、Fable 5および Mythos 5の提供開始に伴い、全トラフィックに対する**30日間データ保持ポリシー**を導入した。Enterprise側で既にゼロ保持契約を結んでいた場合も例外なく適用される。

Anthropicは「Trainingには使用せず、Complex/novel attacks（新しい jailbreak を含む）への防御とFalse positivesの特定・削減のみに使用する」と説明。この方針は、パワフルなモデルへのアクセスにはデータ保持が伴うというIndustry precedentになる可能性がある。

---

## Microsoft GitHubリポジトリへの攻撃：AI開発者狙う

2026年6月8日には、Microsoftのオープンソースプロジェクトがサイバー攻撃を受けたことが判明した。GitHub上でホストされているAzure関連のリポジトリなど**70プロジェクト以上**が一時的に無効化され、パスワード窃取型マルウェアが注入されていた。

影響を受けたツールには:
- **Claude Code**
- **Gemini コマンドラインインターフェース**
- **VS Code** 向け拡張機能

Microsoftは「悪意のあるコンテンツの調査が完了したリポジトリは復元済みだが、他のリポジトリは調査継続のためオフラインのまま」としており、影響を受けた顧客への直接連絡を開始している。

---

## Apple、SiriのEU展開を断念

EUの規制対応に失敗したAppleは、EU市場向けSiri AI機能の展開を見送ることを決定した。EU委員会はAppleのAIツールがEU規制に準拠していないとして豁免を拒否。これによりAppleはEU域内のみでSiriを提供しない形となった。

---

## まとめ

AI開発者を取り巻くSecurityリスクが顕在化している。Microsoftリポジトリへの攻撃は、Claude CodeやGemini CLIといった日常的な開発ツールが標的にされた点で特に深刻だ。一方、Anthropicはデータ保持ポリシーという形で新たなSafetyの枠組みを打ち出した。$10/$50/百万トークンの価格帯は「highly autonomous operations」の価値を認める企業向けと言えそうだ。

---

## 参考リンク

- [Anthropic's Claude Fable 5 is a version of Mythos the public can access today | TechCrunch](https://techcrunch.com/2026/06/09/anthropic-released-claude-fable-5-its-most-powerful-model-publicly-days-after-warning-ai-is-getting-too-dangerous/)
- [Microsoft's open source tools were hacked to steal passwords of AI developers | TechCrunch](https://techcrunch.com/2026/06/08/microsofts-open-source-tools-were-hacked-to-steal-passwords-of-ai-developers/)
- [Apple failed to make its AI tool comply with EU regulations, EU Commission says | Reuters](https://www.reuters.com/business/apple-failed-make-its-ai-tool-comply-eu-regulations-eu-commission-says-2026-06-09/)

---

*本文の情報は2026年6月9日時点のものです*