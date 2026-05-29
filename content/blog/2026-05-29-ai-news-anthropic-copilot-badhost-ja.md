# AI開発ニュースまとめ（2026年5月29日版）

AI業界は本周、**Claudeの大型アップデート**、**Microsoft 365 Copilotのリデザイン**、**YouTubeのAI個人化フィード**、そして**AIエージェント向け重大的脆弱性**と、多忙な一週間となった。本稿では各ニュースの技術的側面を解説する。

---

## Anthropic、Claude Opus 4.8を発表 — 「正直さ」大幅改善と動的ワークフロー

Anthropicは5月29日（米国時間）、Claude Opus 4.8を正式リリースした。最大の特徴は**「正直さ（honesty）」の強化**だ。

### 脆弱な証拠からの飛躍を4分の1に削減

Anthropicによれば、従来のClaudeモデルは「薄い証拠しかないにもかかわらず、自信を持って進捗を主張する」傾向があった。Opus 4.8ではこの問題が**約4分の1に改善**されている。具体的には、コード中のバグを「通り抜けさせて未言及のままにする」確率が前身比で4分の1になったという。

これは評価ベンチマークだけでなく、早期テスターの主観的評価でも確認されている。Opus 4.8は「仕事の不確実性を旗上げする」傾向が強く、`uncertain` や `I need to verify` といった発話が増加するはずだ。

### エフォート制御と動的ワークフロー

Opus 4.8では**エフォート（努力）制御**も導入された。ユーザーがリクエスト時に「高エフォート」か「低エフォート」を選択でき、高エフォート時はより多くのトークンを消費して深い推論を行う。低エフォート時は短時間で軽量な回答を返す。

また**動的ワークフロー（Dynamic Workflows）** がリサーチプレビューとして公開されました。これは1つのセッション内で「数百の並列サブエージェントを計画・実行できる」というもので、複雑な長文タスクへの適用が期待されている。

---

## Microsoft 365 Copilot、大規模リデザイン — 読み込み2倍高速化

MicrosoftはMicrosoft 365 Copilotの全面的なUI/UX刷新を今週発表した。デスクトップ・モバイル両平台上での展開が進行中だ。

### 「段階的開示（Progressive Disclosure）」という新設計思想

最大の特徴は**「段階的開示」** と呼ばれるUIパターンだ。今まではプロンプト入力時にすべてのツールやオプションが一括表示されていた。新設計では**ユーザーのプロンプト内容に応じて関連ツールだけが動的に提示**される。

また**読み込み速度が2倍**向上。Microsoftは「より信頼性が高く、スキャンしやすい構造化レスポンス」を提供すると説明しており、Geminiの構造化回答機能と比較される刷新だ。テキストの直接フォーマットや、レスポンス内グラフ描画なども可能になっている。

---

## YouTube、AIでカスタム動画フィードを作成できる新機能を公開

YouTubeは「プロンプトベースの個人化フィード」機能を今週正式に展開した。

ユーザーは「ワークアウトガイド」「趣味のインスピレーション」など描述を入力すると、AIがあなただけの動画リストを作成してくれる。生成されたフィードはYouTubeホーム画面上部にピン留め可能で、すばやいアクセスができる。

これは recommendation engine のUI面での大きな転換点であり、ユーザーが明示的に関心を示唆するプロンプトからAIが内容を構成する**「能動的レコメンデーション」** の時代突入を告げる。

---

## ⚠️ 緊急: AIエージェント向け重大的脆弱性「BadHost」（CVE-2026-48710）

Ars Technicaが本周大きく伝えたのが、**Starletteフレームワークに発見されたBadHost脆弱性**だ。StarletteはFastAPIの路由層の基盤しており、週間で**3億2500万ダウンロード**超の超有名OSSパッケージである。

### 脆弱性のメカニズム

HTTP Hostヘッダーに**1文字の不正な値を注入**することで、Starletteの`request.url`オブジェクトを使ったパスベースの認可がバイパス可能被撃される。悪いことに、StarletteはHostヘッダーのバリデーションを一切行わず、代わりにヘッダー値からリクエストURLを再構築するためだ。

### 影響範囲

- **FastAPI**（直接使用）
- **vLLM**（AI推論サーバー）
- **LiteLLM**（LLMプロキシ）
- **Text Generation Inference**
- これら全体に影響するMCP（Model Context Protocol）サーバー — メール・カレンダー・DBなどのcredentialsを一括管理している

### 深刻度

| 指標 | 値 |
|------|-----|
| CVE-2026-48710 基本スコア | 7.0 / 10.0 |
| X41 D-Secによる評価 | クリティカル相当 |

X41 D-Secのスキャナでは現在、認証バイパス・SSRF・リモートコード実行の可能性が検出されている。Starlette v1.0.1（5月23日公開）で修正済みだが、AIツールチェーンでの影響範囲を考えると**至急アップデートが必要**だ。

---

## 参考リンク

- [Claude's new model is more 'honest' when it messes up — The Verge](https://www.theverge.com/ai-artificial-intelligence/939094/anthropic-claude-4-8-opus-honesty-effort)
- [Microsoft 365 Copilot gets a speed boost and cleaner design — The Verge](https://www.theverge.com/tech/939273/microsoft-365-copilot-redesign)
- [YouTube will let you ask AI to make a custom video feed — The Verge](https://www.theverge.com/streaming/938759/youtube-custom-ai-feed-prompt-availability)
- [Millions of AI agents imperiled by critical vulnerability in open source package — Ars Technica](https://arstechnica.com/information-technology/2026/05/millions-of-ai-agents-imperiled-by-critical-vulnerability-in-open-source-package/)

---

*（本文の情報は2026年5月29日時点のものです）*
