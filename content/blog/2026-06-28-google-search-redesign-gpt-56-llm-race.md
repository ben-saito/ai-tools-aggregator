# Googleが25年ぶり検索ボックス刷新、GPT-5.6も登場——AI開発競争が加速

2026年6月、AI業界において複数の重要な動きがあった。Googleは25年ぶりに検索ボックスの大幅刷新を発表し、OpenAIはGPT-5.6の3モデルスイート（Sol/Terra/Luna）を公開。さらにAnthropicはMythos 5輸出規制問題で揺れる中、Claude Coworkデスクトップエージェントをリリースした。本稿ではこれらの動きを技術的観点から整理する。

---

## Google、25年ぶり検索ボックス刷新——Gemini 3.5 Flash搭載

Googleは2026年6月、I/O 2026において検索ボックスの大幅刷新を発表した。1999年の誕生以来最大のアーキテクチャ変更となり、以下の新機能が可能になった：

- **マルチモーダル入力**: テキスト、画像、PDF、ビデオ、Chromeタブを единая入力ボックスで処理
- **AI OverviewsとAI Modeの統合**: 2つのAI機能がシームレスに連携
- **新Gemini 3.5 Flashモデル**: 高速・高精度な推論を実現

この刷新は、GoogleがMicrosoft BingのAI機能に対抗する意味で、Appleの「Siri 2.0」戦略とも連動している。検索エンジンという基幹サービスがAI-first架构に移行，标志着生成AIが消費者プロダクトの主戦場になった。

---

## OpenAI、GPT-5.6を3モデルスイートで公開

OpenAIは6月26日、GPT-5.6ファミリー正式公開に踏み切った。注目的是、Trump政権の安全確認要請を受け、制限付きプレビューという異例な展開になった。

**3モデル構成**:

| モデル | 用途 | 価格（100万トークン） |
|--------|------|----------------------|
| **Sol** | フラグシップ、高精度タスク | $5入力 / $30出力 |
| **Terra** | 高ボリューム処理 | コスト最適化 |
| **Luna** | 高速・低コスト推論 | 高速応答特化 |

価格は前モデルから大幅に値下げされており、特にTerraとLunaは中小企业でも導入しやすい水準に設定された。OpenAIは「制限は規範となるべきではない」と声明し、政府介入への不满も表明している。

---

## Anthropic、Mythos 5輸出規制問題のながれ

Anthropicの旗艦モデルMythos 5は、当初輸出規制により公开停止になっていたが、Trump政権との交渉を経て100社以上への提供が再開された。ただし、Fable 5はまだ公開の见通しがついていない。

Anthropicは同時に、Alibabaによる「史上最大規模のClaudeクローン攻撃」を指摘し、制裁を要求。这一事案は、AIモデルの知的财产保護と国家間AI規制の课题を浮き彫りにした。

---

## Claude Cowork——デスクトップAIエージェントの竞争

AnthropicはClaude Max購読者向けにmacOS向け「Claude Cowork」桌面エージェントの研究プレビューを開始した。フォルダアクセス権限赋予により、Claudeがファイルを读写・編集できる。

报告によると、このエージェントはわずか10日で開発され、内部ではClaude Codeが使用されたという。Microsoft Copilot直接在桌面上展开竞争する構えだ。

---

## Nous Research、NousCoder-14B开源コーディングモデル公开

 Nous Researchは14Bパラメータの开源コーディングモデル「NousCoder-14B」を公开した。注目すべき点は：

- **LiveCodeBench: 67.87%** —— 同サイズの开源モデルで最高水準
- **学習時間: 48 NVIDIA B200 GPUで4日間** —— 大幅なコスト削減
- **完全な訓練環境の公開** —— 再現性保证

 proprietaryモデルに近い性能を開源で実現したことは、コーディングAI分野の民主化を進める。

---

## まとめ：AI開発競争の焦点

2026年6月は以下の3点が明确になった：

1. **AI-First検索**: Googleが基幹サービスのアーキテクチャ変更に踏み切り、生成AIがWeb検索の標準に
2. **モデル公开競争**: GPT-5.6、Mythos 5、Claude Coworkが同時に投入され、各社の差別化が困難に
3. **开源モデルの台頭**: NousCoder-14Bのような高效な开源モデルがproprietaryモデルの地位挑战

AI開発者にとって、これらの動きがもたらすAPI价格的向下とifactsの标准化は、短期的にはチャンスとなる。

---

## 参考リンク

- [Google Search I/O 2026 Announcements](https://blog.google/products/search/)
- [OpenAI GPT-5.6 Release Notes](https://openai.com/index/gpt-5-6)
- [Anthropic Claude Cowork](https://anthropic.com/claude-cowork)
- [NousCoder-14B Model Card](https://github.com/nousresearch/noucoder)
- [VentureBeat AI Coverage](https://venturebeat.com/category/ai/)
- [TechCrunch AI Coverage](https://techcrunch.com/category/artificial-intelligence/)

---

*（本文の情報は2026年6月28日時点のものです）*