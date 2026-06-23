# AI開発ニュースまとめ：Anthropicのモデル規制対応、Sakana AIのマルチエージェントシステム、Fugu Ultra登場

AI業界は米政府による輸出規制の動きとマルチエージェントAIの商用化という2つの大きな潮流で動いている。今週はSakana AIが新しいマルチエージェントシステム「Fugu Ultra」を正式にリリースし、Anthropicは政府からのDirectiveを受けFable 5とMythos 5へのアクセスを一時停止となった。開発者にとって重要な今週のニュースを振り返る。

---

## Anthropic、米政府のDirective受けFable 5・Mythos 5へのアクセス一時停止

**Anthropic**は米国政府からの輸出規制Directiveを受け、主力モデルである**Fable 5**と**Mythos 5**へのアクセスの一時停止を発表しました。

米政府は国家安全保障上の懸念を理由に、このDirectiveを発令。Anthropicによると、当局は特定の「ジェイルブレイク」手法を使用してFable 5の一部脆弱性を特定できることを知ったとのことです。

### 技術的詳細

当局が指摘したのは、特定のジェイルブレイク技法により**既知の軽微な脆弱性**少数を特定できる可能性があるということです。Anthropicの調査では、これらの脆弱性はすべて比較的简单なものであり、他の公開モデルでも同様の発見が可能だと述べています。

Anthropicは声明で以下のように表明しています：

> 「この狭い潜在的なジェイルブレイクの発見が、何百万人もの人々にデプロイされた商用モデルの回収理由になるべきかに同意できません。この基準が業界全体に適用された場合、すべてのフロンティアモデルプロバイダーの新規モデルデプロイメントが実質的に停止になると考えています」

### 開発者への影響

今回の措置は以下の影響をもたらしています：

- **API経由でのFable 5・Mythos 5利用**が全域で不可
- **Claude Tag**などの服务への影響は現時点で不明
- 他の主要モデルプロバイダーも同種のDirectiveに直面する可能性

Anthropicは顧客への混乱を謝罪し、アクセス回復に向けて積極的に対応していると述べています。

---

## Sakana AI、Fugu Ultraを発表 — マルチエージェントを単一APIとして提供

**Sakana AI**は新しいAIシステム「**Fugu Ultra**」の正式リリースを発表しました。Fugu Ultraは、複数のAIエージェントを単一のOpenAI互換APIエンドポイントとして動作させるマルチエージェントシステムです。

### アーキテクチャの革新

従来のAI開発は**巨大な単一モデル**を了大量データで訓練する「brute-force scale」アプローチが主流でした。しかしSakana AIは、自然界の進化に着想を得た**制約下でのイノベーション**acapadeを提唱しています。

Fugu Ultraの中核となる特徴は：

- **単一APIエンドポイント**: ユーザーは1つのリクエストを送信するだけで、Fuguが適切な処理を選択
- **直接解決で十分な場合は即座に回答**
- **複雑なタスクは複数の specialized agents を編成して処理**
- **完全にスイーミングされたモデル群**: 基盤モデル群が独立して動作

### ベンチマーク結果

Fugu Ultraは標準ベンチマークで興味深い結果を記録しています。自動データサイエンス研究モードで、早期導入者が人間の関与を最小限に抑えたまま意味のある進歩を達成できたことが報告されています。

論文再現、コードレビュー、サイバーセキュリティ分析、文学・特許調査などのワークフローでも同様のパターンが確認されています。

### 利用可能なモデル

現時点で以下の2つのモデルが利用可能です：

- **Fugu Ultra**: 高性能要件向け
- **Fugu**: 標準的なワークロード向け

どちらも単一のOpenAI互換APIを通じてアクセス可能。

---

## Import AI Newsletter: AI研究の最新動向

**Import AI**の最新号では以下のトピックが取り上げられています：

### スーパーパースイュージョン（Superpersuasion）

AIモデルの説得能力に関する研究が進展しています。最新の実験では、**RLベースのクオリファイケーション（RL-based qualification）**を含む新しいアプローチが提案されています。

### 自己持続型AI（Self-Sustaining AI）

AIシステム自体が自己改善を続ける可能性とその社会的影響について議論されています。

### リワードハッキングと社会

Reward hacking現象が社会に与える影響についての分析。特别是、**RSI（Reward Specification Informed）**データのAnthropicからの公開が議論されています。

---

## 参考リンク

- [Anthropic Newsroom - Statement on Fable and Mythos access](https://www.anthropic.com/news/fable-mythos-access)
- [Sakana AI - Fugu Release](https://sakana.ai/fugu-release/)
- [Import AI 462: Superpersuasion; self-sustaining AI; paths to ASI](https://importai.substack.com/p/import-ai-462-superpersuasion-self)
- [Import AI 461: "Alignment is not on track"](https://importai.substack.com/p/import-ai-461-alignment-is-not-on)
- [Import AI 460: Reward hacking society](https://importai.substack.com/p/import-ai-460-reward-hacking-society)

---

*（本文の情報は2026年6月24日時点のものです）*
