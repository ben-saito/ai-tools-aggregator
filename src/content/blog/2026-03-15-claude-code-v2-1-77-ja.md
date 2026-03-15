---
title: "Claude Code v2.1.77 リリース - MCPelicitationと新スラッシュコマンド"
description: "AnthropicはClaude Code v2.1.77を公開。MCPサーバーがタスク中にインタラクティブなダイアログで入力要求できるようになった。"
publishedAt: "2026-03-15"
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop"
category: "ai-tools"
lang: "ja"
tags: ["claude-code", "anthropic", "ai-coding", "release-notes", "v2.1.77"]
featured: false
author: "AI Tools Hub"
---

Anthropicは2026年3月14日、Claude Code v2.1.77を公開した。このバージョンではMCP（Model Context Protocol）elicitationサポート、新機能のスラッシュコマンド、バグ修正などが含まれている。

## 主要な新機能

### MCP Elicitationサポート

MCPサーバーがタスク実行中にインタラクティブなダイアログ（フォームフィールドまたはブラウザURL）を通じて構造化入力を要求できるようになった。ElicitationとElicitationResultフックが追加され、レスポンスが送信される前にinterceptしてoverrideすることも可能である。

### 新規スラッシュコマンド

- `/effort`: モデルのエフォートレベルを設定できる新しいスラッシュコマンドが追加された。

### CLI機能強化

- `-n` / `--name` フラグ: セッション開始時に表示名を設定できるようになりました。
- `worktree.sparsePaths` 設定: 大きなモノレポでgit sparse-checkoutを使って必要なディレクトリのみをチェックアウトできる。
- `PostCompact` フック: コンテキスト圧縮完了後に発火する新しいフックが追加された。
- エンタープライズ向けフィードバック調査: session quality surveyが追加され、管理者は`feedbackSurveyRate`設定でサンプルレートを設定できる。

## バグ修正

 numerous bugs have been fixed in this release, improving the overall stability and user experience of Claude Code.以下の問題が修正されている:

- ToolSearchで読み込まれたディファードツールが会話圧縮後にinput schemaを失い、arrayおよびnumberパラメータがタイプエラーで拒否される問題
- スラッシュコマンドで"Unknown skill"が表示される問題
-  órgan modeでプラン承認後に再承認を要求する問題
- voice modeでパーミッションダイアログやプランエディタ開いてる間のキーストローク消失問題
- Windows/npmインストール時の`/voice`動作問題
- 1Mコンテキストセッションでmodel: frontmatterを持つスキルを起動した際の不正な"Context limit reached"エラー
- 非標準モデル文字列使用時の"adaptive thinking is not supported on this model"エラー
- Bash(cmd:*)パーミッションルールが#を含む引用符引数でマッチしない問題
- パーミッション-dialogで"don't ask again"選択時にパイプや複合コマンドの生コマンド全体を表示する問題
- 自動圧縮リトライが3回失敗後にサーキットブレーカーで停止するように
- MCP再接続スピナーが成功後も持続する問題
- LSPプラグインがLSP Managerがマーケットプレイスより前に初期化された場合にサーバーを登録しない問題
- tmux over SSHでのクリップボードコピー問題
- `/export`成功メッセージでファイル名のみ表示する問題
- テキスト選択後のトランスクリプト自動スクロール問題
- Escapeキーログイン方法選択画面.exitしない問題
- Remote Controlの各種問題修正
- `--worktree`起動パフォーマンス改善
- バックグラウンドエージェント убийство時に部分的結果をconversation contextに保持
- モデルフォールバック通知の改善
- ダークターミナルテーマでのblockquote可読性向上

## アップデート方法

Claude Codeは自動的にアップデートされます。手動でアップデートするには以下のコマンドを実行:

```bash
claude update
```

または、Claude Codeのウェブサイト（claude.com/claude-code）から最新バージョンをダウンロードできます。

## まとめ

v2.1.77はMCP elicitationサポートという重要な新機能と、多くのバグ修正を含むリリースである。MCPサーバーがタスク実行中にユーザーに入力を要求できるようになり、より柔軟なエージェントワークフローが可能になった。