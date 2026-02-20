---
title: "GoogleのAIコーディングアシスタント「Gemini Code Assist」の全容。個人向け無料プランは1日6,000回のコード補完、内部コードネームは「Antigravity」"
description: "Googleが提供するAIコーディングアシスタント「Gemini Code Assist」の機能、エディション構成、料金体系、および内部コードネーム「Antigravity」の技術的詳細を解説する。VS Code・JetBrains対応、Gemini 2.5搭載、1Mトークンコンテキストウィンドウを備え、個人向けは無料で利用可能。"
publishedAt: "2026-02-20T12:00:00+09:00"
author: "AI Tools Hub"
category: "AI Tools"
tags: ["Google", "Gemini Code Assist", "Antigravity", "AIコーディング", "コード補完", "開発ツール"]
featured: false
lang: "ja"
seo:
  keywords: "Gemini Code Assist, Antigravity, Google AIコーディング, コード補完, AIアシスタント, Claude Code比較, GitHub Copilot比較"
---

Googleは、AIコーディングアシスタント「**Gemini Code Assist**」を個人向けに無料で提供している。内部コードネーム「**Antigravity**」として知られるこのサービスは、Geminiモデルを基盤とし、GitHub CopilotやClaude Codeと同じ市場を狙う製品だ。本記事では、その機能、エディション構成、技術的詳細、および他社製品との比較を整理する。

## エディション構成と料金

Gemini Code Assistは3つのエディションで提供されている。

**個人向け（無料）**

個人開発者向けの無料プランでは、コード補完リクエストを1日あたり6,000回、チャットリクエストを240回利用できる。利用にはGoogleアカウントのみ必要で、クレジットカード情報は不要だ。現在はGemini 2.5モデルを搭載し、Gemini 3への移行も予告されている。

**Standard**

法人向けの有料プランで、個人向けを超える利用量と管理機能を提供する。使用状況のダッシュボード（アクティブユーザー数、コード提案の受諾率、受け入れたコード行数等）が利用可能になる。

**Enterprise**

Standardの機能に加え、プライベートソースコードリポジトリとの接続によるカスタマイズ応答を提供する。Gemini 3はEnterprise向けのプレビューリリースチャンネルで先行提供されており、Standardはウェイトリスト受付中となっている。

## 主な機能

**コード補完とコード生成**

コードを入力する際にリアルタイムで補完候補を提示し、コメントやプロンプトから関数やコードブロック全体を生成する機能を備える。対応言語はJava、JavaScript、Python、C、C++、Go、PHP、SQLなど多数で、VS Code、JetBrains IDE（IntelliJ、PyCharm、GoLand、WebStorm等）、Cloud Workstations、Cloud Shell Editorから利用できる。

**チャットインターフェース**

自然言語によるコーディングの質問と回答、コーディングベストプラクティスの提示が可能なチャット機能を全対応IDE内で提供する。コンテキストウィンドウは**100万トークン**を確保しており、大規模コードベースの参照に対応する。

**Agent Mode（プレビュー）**

現在プレビュー段階にあるAgent Modeでは、ソフトウェア開発ライフサイクル全体にわたるタスクをエージェントが実行する。複数ファイルの同時編集、プロジェクト全体のコンテキスト把握、Model Context Protocol（MCP）を通じたエコシステムツールとの統合、Human in the Loop（HiTL）による人間の監視を組み合わせた機能を提供する。

**Gemini CLI（ターミナル統合）**

Gemini Code AssistはオープンソースのCLIエージェント「Gemini CLI」へのアクセスを含む。Gemini CLIはターミナルから直接Geminiの能力を利用でき、コード理解、ファイル操作、コマンド実行、トラブルシューティングなどに対応する。個人開発者向けには高い利用枠の無料ティアが提供されている。

**GitHub PR自動レビュー**

GitHub MarketplaceのGemini Code Assistアプリを導入することで、プルリクエストを自動的にレビューし、バグやスタイル上の問題を検出して修正案を提案する。プルリクエストへのコメントで`/gemini`コマンドを使用することで、任意のタイミングでGeminiに質問できる。

**ソース引用機能**

Gemini Code Assistは、オープンソースコードなど既存のソースを直接引用する場合にその出典情報を提示する機能を持つ。これはコードの知的財産に関するリスク管理を支援する。

## 内部コードネーム「Antigravity」の正体

GoogleはGemini Code AssistをAPIレベルで「Antigravity」という内部コードネームで識別している。OpenClawのソースコードから確認できるAPIリクエストのメタデータは以下の通りだ。

```json
{
  "ideType": "ANTIGRAVITY",
  "platform": "PLATFORM_UNSPECIFIED",
  "pluginType": "GEMINI"
}
```

APIエンドポイントは`cloudcode-pa.googleapis.com`で、`/v1internal:loadCodeAssist`および`/v1internal:fetchAvailableModels`パスを使用する。利用状況の管理は`availablePromptCredits`（利用可能クレジット）と`monthlyPromptCredits`（月間クレジット上限）で行われており、月間クレジット制の課金モデルが内部的に実装されている。

OpenClawはこの仕組みを`google-antigravity-auth`プラグインとして実装しており、以下のコマンドで有効化できる。

```bash
openclaw plugins enable google-antigravity-auth
openclaw models auth login --provider google-antigravity --set-default
```

なお、利用にはGemini for Google Cloudが有効なGoogle Cloudプロジェクトが必要となる。

## 競合製品との比較

| 項目 | Gemini Code Assist（個人向け） | GitHub Copilot | Claude Code |
|---|---|---|---|
| 無料枠 | コード補完6,000回/日、チャット240回/日 | 2,000回/月（無料プラン） | なし（API従量課金） |
| 基盤モデル | Gemini 2.5（Gemini 3移行予定） | GPT-4o / Claude 3.5 Sonnet | Claude Sonnet / Opus |
| コンテキストウィンドウ | 100万トークン | 最大128,000トークン | 最大200,000トークン |
| IDE対応 | VS Code、JetBrains、Android Studio等 | VS Code、JetBrains等 | VS Code（拡張）等 |
| ターミナル統合 | Gemini CLI（OSS） | なし | Claude Code CLI |
| Agent Mode | 対応（プレビュー） | Copilot Workspace | 対応 |
| PR自動レビュー | 対応（GitHub） | 対応 | 非対応 |

注: 料金・機能は2026年2月時点の公式情報に基づく。各社の発表により随時変更される。

## 評価上の留意点

Googleは公式ドキュメントにおいて、Gemini Code Assistが「もっともらしく見えるが事実と異なる出力を生成することがある初期段階の技術」であると明示している。出力内容を利用する前に検証することを推奨している。

また、Gemini Code Assistが学習データとして使用するコードは、公開されているコードや Google Cloud 固有のマテリアルで構成されており、ユーザーのコードが学習に使用されるかどうかはエディションと設定によって異なる。個人向けとビジネス向けではデータ利用ポリシーが異なるため、業務利用の際は各エディションのデータガバナンスポリシーを確認する必要がある。

---

## 参考リンク

- Gemini Code Assist 個人向け公式サイト: <https://codeassist.google>
- Gemini Code Assist 法人向け公式サイト: <https://cloud.google.com/products/gemini/code-assist>
- 公式ドキュメント（概要）: <https://developers.google.com/gemini-code-assist/docs/overview>
- Gemini CLI GitHub: <https://github.com/google-gemini/gemini-cli>
- GitHub Marketplace（PR自動レビュー）: <https://github.com/marketplace/gemini-code-assist>
- OpenClaw Antigravity認証プラグイン: <https://docs.openclaw.ai>

## 免責事項

本記事の情報は2026年2月20日時点の公式サイト・ドキュメントおよびOpenClawソースコードに基づいています。料金プラン、機能、利用制限はGoogleの判断により予告なく変更される場合があります。最新情報は公式サイトをご確認ください。
