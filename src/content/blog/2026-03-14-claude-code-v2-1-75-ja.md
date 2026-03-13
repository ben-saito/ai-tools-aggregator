---
title: "Claude Code v2.1.75 リリース - セキュリティ強化とVS Code統合改善"
description: "AnthropicはClaude Code v2.1.75を公開。managed policyのセキュリティ修正、VS Code統合の改善、多数のパフォーマンス最適化を含む。"
publishedAt: "2026-03-14"
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop"
category: "ai-tools"
lang: "ja"
tags: ["claude-code", "anthropic", "ai-coding", "release-notes", "v2.1.75"]
featured: false
author: "AI Tools Hub"
---

Anthropicは2026年3月13日、Claude Code v2.1.75を公開した。このバージョンでは、managed policyのセキュリティ修正、VS Code統合の改善、多数のパフォーマンス最適化とバグ修正が含まれている。

## 主要な変更点

### managed policy ask rulesのセキュリティ修正

managed policyのask rulesがuser allow rulesやskill allowed-toolsによってバイパスされる問題を修正した。これにより、セキュリティポリシーが適切に適用されるようになった。

### フルモデルIDのサポート強化

agent frontmatterのmodelフィールドや--agents JSON設定でフルモデルID（例: claude-opus-4-5）が認識されるようになった。agentsは--modelと同じモデル値を受け入れるようになった。

### SessionEnd hooksのタイムアウト設定

SessionEnd hooksがexit時に1.5秒で強制終了される問題を修正した。CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS環境変数でタイムアウトを設定可能になった。

### /plugin installの修正

REPL内でマーケットプレイスプラグインのインストールが失敗する問題を修正した。

### マーケットプレイス更新のgitサブモジュール対応

マーケットプレイス更新時にgitサブモジュールが同期されない問題を修正した。サブモジュール内のプラグインソースが更新後に壊れていた問題が解決された。

### 不明なスラッシュコマンドの警告表示

引数を持つ不明なスラッシュコマンドが 입력을サイレントにドロップする問題を修正した。入力内容を含む警告が表示されるようになった。

### RTLテキスト表示の修正

Windows Terminal、conhost、VS Code統合ターミナルでヘブライ語、アラビア語などのRTLテキストが正しく表示されない問題を修正した。

### LSPサーバのWindows対応修正

WindowsでLSPサーバが動作しない問題を修正した。不正なファイルURIが問題の原因だった。

### --plugin-dirのローカル開発対応

ローカル開発コピーが同じ名前のマーケットプレイスプラグインをオーバーライド可能になった（managed settingsでforce-enableされたプラグインを除く）。

### VS Code統合の改善

- **Untitledセッションの削除ボタン**: 機能しない問題を修正
- **スクロールホイールRESPONSIVENESS**: ターミナル対応アクセラレーションを向上させることで改善

### その他の改善

- **/contextコマンド**: コンテキストHeavyなツール、メモリの增生、容量警告を特定し、具体的な最適化ヒントを提供
- **autoMemoryDirectory設定**: 自動メモリストレージ用のカスタムディレクトリを設定可能
- **メモリリーク修正**: ストリーミングAPIレスポンスバッファの解放問題を修正
- **MCP OAuth**: コールバックポート使用中のハング問題を修正
- **MCP OAuth更新**: 更新トークン期限切れ後の再認証問題を修正（Slack等のOAuthサーバ対応）
- **Voice mode**: macOSでマイク権限がない場合のサイレント失敗問題を修正

## アップデート方法

Claude Codeは自動的にアップデートされます。手動でアップデートするには以下のコマンドを実行:

```bash
claude update
```

または、Claude Codeのウェブサイト（claude.com/claude-code）から最新バージョンをダウンロードできます。
