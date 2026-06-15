# AI開発ニュース週間まとめ（2026年6月第2週）

2026年6月第2週は、AI業界にとって重要な一周となった。米政府によるAnthropic最強モデルの輸出規制にcybersecurity 方々が一斉に反発する一方、HuaweiがHarmonyOS 7でAppleが中国に残したAIギャップを埋めるように動いている。さらにSalesforceがFinを36億ドルで買収し、エージェントAIの企業活用が加速している。本稿ではこれらの動きを整理する。

---

## セキュリティ、米政府によるAnthropicモデル規制に業界紙一斉に反発

数十名の[**cybersecurity**](https://techcrunch.com/2026/06/15/cybersecurity-vets-protest-dangerous-us-government-ban-on-anthropics-most-powerful-models/)専門家が米政府に対し、Anthropicの**Fable**および**Mythos**モデルに対する輸出規制の撤回を求める共同声明を公表した。規制当局は国家安全保障を理由に最強AIモデルの海外流出を防ぐとしているが、防衛研究者でさえも最新のAIアクセスを制限されれば、ソフトウェアや製品のセキュリティを確保する能力が損なわれると警告している。

**Claude Fable**および**Claude Mythos**はAnthropicのフラグシップモデルであり、米商務省産業安全保障局（BIS）の輸出規制により、特定の国への提供が制限されている。セキュリティ専門家たちはこの規制が正当なサイバー防御に必要なツールへのアクセスを奪う可能性があると主張。White Houseに対して規制の再検討を求めている。

### 技術的ポイント

- **Fable**: Anthropicの次期フラグシップモデル。推論能力和高度なコード生成・分析能力を持つ
- **Mythos**: フラグシップ級エンタープライズモデル。複雑なタスク実行とAgents制御特化
- 両モデルとも現在の輸出規制Classificationsの下で厳しい規制対象
- セキュリティ界の懸念: 攻撃者（悪意のあるアクター）は規制の対象外のため、結果として防御側だけが不利になる

---

## HarmonyOS 7 - Appleが中国で埋められなかったAI空白をHuaweiが埋める

Appleが**Siri AI**の中国展開を正式に断念してからわずか4日後、Huaweiが中国・東莞で**HarmonyOS 7**を発表し、「エージェント時代」の幕開けを宣言した。Appleが残した空白を埋めるように、HuaweiはOS全体をAIエージェント中心に再構築した。

### HarmonyOS 7の技術的革新

**HarmonyOS Intelligent Agent Framework 2.0**の中核は「intent-as-service」モデル。従来は複数のアプリを导航する必要があったタスクを、自然言語の单一コマンドで実行可能にした。

- **Xiaoyi**: HuaweiのAIアシスタントがシステムレベルの知性エージェントに進化。2,100以上のシステム级别能力を抑え、2,000以上のサードパーティAIエージェントと協調
- **openPangu 2.0**: 基盤モデル。Pro版5050億パラメータ、Flash版920億パラメータ。共に512Kコンテキストウィンドウ対応
- **オンデバイcreas**: 300億パラメータのモデルをKirin chip搭載デバイスに今秋搭載予定
- **パフォーマ Stry**: HarmonyOS 6.1比で15%以上的向上（Huawei自社ベンチマーク）

### 市場的位置づけ

| OS | 2026年Q1中国シェア |
|---|---|
| Android | 65% |
| **HarmonyOS** | **19%** |
| iOS | 16% |

HarmonyOSは2025年Q2に初めてiOSを中国で抜いた。HDC 2026で示された数字はすでに发生过のshiftを反映している。Xiaoyiが協調するエージェントネットワクにはCtrip（旅行 planning）やAnt Medical（健康データ分析）など、中国消費者にとって日常的なサービスが続々参加している。

### デザインと言語の収束

值得注意的是、HarmonyOS 7はAppleがiOS 26で導入した**Liquid Glass**美意識を採用している。SamsungがOne UI 9で同じ道を歩んでいるように、視覚言語は収束しつつも、規制環境とOSアーキテクチャは根本的に異なるまま残されている。

---

## Salesforce、Finを36億ドルで買収 - Agentforce戦略の一貫

**Salesforce**がAI customer service platformの**Fin**を**36億ドル**で買収すると発表。明けた戦略は既存の**Agentforce** enterprise platformの強化だ。Agentforceは businessesがカスタムAI agentsさせてタスク自動化できるプラットフォームで、Finのチームと technologyを導入することで客服領域での能力大大的向上を目指す。

Finは、米国のIT services最大手HCLTechが1.5億ドルを出資ことでも話題になった**Sarvam AI**のような、印度発AIスタートアップとは対照的な大型M&A案例。Salesforceは Agentforceを中核に、AI agentの企業導入を加速する方針を明確にしている。

### 関連的投资活動

- **Sarvam AI**（印度）: HCLTech主导で2.34億ドル資金調達。同社身价はインドの最新AI unicornに
- **NewCore**: AI agentsに身元（identity）を付与する問題を解決する66百万ドル規模の資金調達を実施。「次のエンタープライズセキュリティ挑战はhumanではなくAI agents管理」などとする

---

## AI agentsの「雇用主」化 - 企業セキュリティの次なる課題

AI agentsが実際に「従業員」として企业中に入る時代近づいている。**NewCore**は66百万ドルの資金調達を実施し、AI agentsに组织的な身元（Identity）を付与管理系统の開発を進めている。

企业的セキュリティの焦点は「人間」のアイデンティティとアクセス管理だったが、AI agentsがビジネスロジックを実行し、APIにアクセスし決済を行う時代になると、その「エージェントIDの管理」が新たな課題となる。NewCoreはこの问题上を解く专门の解決策を提供すると表明している。

---

## 参考リンク

- [Cybersecurity vets protest US government ban on Anthropic's most powerful models - TechCrunch](https://techcrunch.com/2026/06/15/cybersecurity-vets-protest-dangerous-us-government-ban-on-anthropics-most-powerful-models/)
- [Salesforce acquires AI customer service platform Fin for $3.6 billion - TechCrunch](https://techcrunch.com/2026/06/15/salesforce-acquires-ai-customer-service-platform-fin-for-3-6b/)
- [Sarvam becomes India's newest AI unicorn with $234 million funding round - TechCrunch](https://techcrunch.com/2026/06/15/sarvam-becomes-indias-newest-ai-unicorn-with-234-million-funding-round-led-by-hcltech/)
- [AI agents are becoming employees, NewCore emerges with $66M - TechCrunch](https://techcrunch.com/2026/06/15/ai-agents-are-becoming-employees-newcore-emerges-with-66m-to-give-them-identities/)
- [HarmonyOS 7 steps into the AI gap Apple left open in China - AI News](https://www.artificialintelligence-news.com/news/harmonyos-7-china-ai-apple-gap/)

---

*本文の情報は2026年6月16日時点のものです。*
