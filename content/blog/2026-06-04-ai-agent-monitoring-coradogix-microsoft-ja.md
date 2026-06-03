# AIエージェント監視战争中：Coralogixが200Mドル調達、Microsoftが開発者向け治理ツールを強化

AIエージェントが企業で本格的に活用され始める中、その「監視」と「制御」を担うインフラへの投資が加速している。2026年6月3日（米国時間）、色列のログ分析スタートアップCoralogixが200Mドルを調達し、16億ドルの企業評価を受けた。またMicrosoftは、AIエージェントの振る舞いをテスト・管理する新しいオープンソースフレームワークを2件連続で発表。各社がAIエージェントのの本格導入に向けて、監視と治理の infrastructural を強化している。

---

## Coralogix — AIエージェント監視層への赌け

Coralogixは6月3日、Series Fラウンドで200Mドルを調達した。Lead investorはEvolution Equity Partnersで、Canada Pension Plan Investment Board（CPPIB）も参加した。このラウンドにより、同社の企業評価は16億ドルに達した。

Coralogixはもともとログ分析・観測プラットフォームとして知られていたが、AIエージェントの普及に伴い、同社の产品在新たな文脈で脚光を浴びている。AIエージェントは従来のSaaSアプリケーションとは異なり、外部の APIs やデータベースと自律的に連携し、複雑なワークフローを実行する。この过程中でのイベント追跡・異常検知・コンプライアンス監視は、従来のログ分析では対応できない新しい要求を生んでいる。

同社は 이번 raise を、AIエージェント監視专门的 продукта「Coragent」の開発加速に使用する計画。CEOのLuis Segerlind氏（在任7年）は「AIエージェントが企業で当たり前になるにつれ、その振る舞いを監視し、问题发生时即座に检测できることが非常重要になる」と語った。

---

## Microsoft — AI動作テストと制御の2つのフレームワーク

Microsoftは6月2日、Buildカンファレンスに合わせて2つの新しいオープンソースフレームワークを発表した。どちらもAIエージェントの「動作保証」と「治理」を対象としている。

### Adaptive Spec-driven Scoring for Evaluation and Regression Testing（ADC）

1つ目のADCは、英语のまま「Adaptive Spec-driven Scoring for Evaluation and Regression Testing」。テキストで記述されたテスト仕様から、AIエージェントの動作を自動評価するフレームワークだ。

BDD（Behavior-Driven Development）の考え方类似的で、「プロンプトで評価するのではなく、仕様書で振る舞いを定義する」という思想に基づいている。開発者は「このエージェントは、Xという入力に対してYというアクションを起こし、Zという結果を返すべきだ」という expectation を自然なテキストで記述できる。ADCはそれを执行し、結果を自动评分する。

従来、AIの動作評価は人手によるプロンプト投げと結果確認が主流だった。ADCはこの手動プロセスを自动化し、継続的インテグレーション（CI）パイプラインに統合できる。

### Agent Control Specification（ACS）

2つ目のACSは「Agent Control Specification」。AIエージェントに守るべきポリシーを、Portableなポリシー定義ファイルとして記述できる仕組だ。

注目点は、ポリシー定义为「プロンプト内に埋め込む」ではなく、Separateな設定ファイルとして管理できる点。これにより、DeveloperチームとCompliance・Securityチームが别々の言葉でポリシーを定義し、共有できる。ポリシー改变のレビューが、プロンプト编辑よりも体系的に行える。

MicrosoftのBrett Taylor氏（Principal Group Product Manager）は「ACSを使用すれば、Agent应用的ガバナンスがコードリポジトリのそれと同じくらい体系的に管理できる」と説明した。

---

## Meta — WhatsApp Business AIエージェントが全球対応

Metaは6月3日、WhatsApp Businessプラットフォーム向けAIエージェントの全球展開を発表した。Custom Agentとして知られるこのAIアシスタントは去年の限られた市場でPilotされていたが、今月から全地域で 제공한다。

Businessユーザーは、AIエージェントとの対話료를負担することになる。課금은トークン使用量に基づく。MetaのコミュニケーションプラットフォームVice PresidentのSanjay Singh氏によれば、この価格モデルは「Businessesが使った分だけを支払う」というもの。

WhatsApp Business AIエージェントは、カスタマーサポート、購買案内、预约管理などの用途を想定。企業は独自の知识库と連携し、業界特有の質問にも回答できるように設定できる。

---

## セキュリティと治理の重要性

AIエージェントの普及に伴い、その監視と治理への需要が高まっている。Cyeraが検討中の120億ドルの評価額も、この潮流を反映している。同社は、AIセキュリティ分野で急成長しており、ARRの80倍というvaluation multipleは、投资家がAI監視领域の将来的な市场価値をそれだけ高く評価していることを示している。

ZeroDriftも10Mドルを調達し、「AIモデルとユーザーの间に介在するコンプライアンス層」という新しいカテゴリ確立を狙っている。

---

## まとめ

AIエージェントの本格導入に伴い、その動作監視・テスト・治理を提供する基础设施への投资が加速している。Coralogixの大型調達、Microsoftの2つのフレームワーク、MetaのWhatsApp AIエージェント全球対応は、いずれもこの流れの一部。今後は、AIエージェントの「动作保证」と「监視」が、LLM themselves和马よりも重要な竞争领域になる可能出现する。

---

## 参考リンク

- [Meta's AI agent for WhatsApp Business is now available globally](https://techcrunch.com/2026/06/03/metas-ai-agent-for-whatsapp-business-is-now-available-globally/)
- [Coralogix raises $200M on bet that someone needs to watch the AI agents](https://techcrunch.com/2026/06/03/coralogix-raises-200m-in-race-to-build-the-monitoring-layer-for-ai-agents/)
- [New Microsoft tool lets devs spin up AI behavior tests using text descriptions](https://techcrunch.com/2026/06/02/new-microsoft-tool-lets-devs-spin-up-ai-behavior-tests-using-text-descriptions/)
- [Microsoft offers devs a better way to control AI agent behavior](https://techcrunch.com/2026/06/02/microsoft-offers-devs-a-better-way-to-control-ai-agent-behavior/)
- [Microsoft launches Scout, an OpenClaw-inspired personal assistant](https://techcrunch.com/2026/06/02/microsoft-launches-scout-an-openclaw-inspired-personal-assistant/)

---

*（本文の情報は2026年6月3日時点のものです）*