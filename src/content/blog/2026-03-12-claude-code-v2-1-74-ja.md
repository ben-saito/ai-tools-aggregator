---
title: "Claude Code v2.1.74 リリース - /context改善とメモリリーク修正"
description: "AnthropicはClaude Code v2.1.74を公開。/contextコマンドの改善、autoMemoryDirectory設定、複数のメモリリーク修正を含む。"
publishedAt: "2026-03-12"
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop"
category: "ai-tools"
lang: "ja"
tags: ["claude-code", "anthropic", "ai-coding", "release-notes", "v2.1.74"]
featured: false
author: "AI Tools Hub"
---

Anthropicは2026年3月12日、Claude Code v2.1.74を公開した。このバージョンでは、/contextコマンドの改善、autoMemoryDirectory設定の追加、複数のメモリリーク修正、MCP認証の改良など、多数の改善とバグ修正が含まれている。

## 主要な変更点

### /contextコマンドの改善

/contextコマンドにアクション可能な提案機能が追加された。コンテキストHeavyなツール、メモリの增生容量警告を特定し、具体的な最適化のヒントを提供する。

### autoMemoryDirectory設定の追加

autoMemoryDirectory設定により、カスタムディレクトリを自動メモリストレージとして設定できるようになった。

### メモリリークの修正

複数のメモリリークが修正された:

- **ストリーミングAPIレスポンス**: ジェネレータが早期に終了した際のバッファ解放問題を修正
- **MCP OAuth**: コールバックポート使用中のハング問題を修正
- **MCP OAuth更新**: 更新トークン期限切れ後の再認証問題を修正（Slack等のHTTP 200エラー返すOAuthサーバ対応）
- **voice mode**: macOSネイティブバイナリでマイク権限がない場合のサイレント失敗問題を修正

### managed policy ask rulesの修正

managed policyのask rulesがuser allow rulesやskill allowed-toolsによってバイパスされる問題を修正した。

### フルモデルIDのサポート

agent frontmatterのmodelフィールドや--agents JSON設定でフルモデルID（例: claude-opus-4-5）が認識されるようになった。agentsは--modelと同じモデル値を受け入れる。

### SessionEnd hooksのタイムアウト設定

SessionEnd hooksがexit時に1.5秒で強制終了される問題を修正。CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS環境変数で設定可能になった。

### その他の改善

- **--plugin-dir**: ローカル開発コピーが同じ名前のマーケットプレイスプラグインをオーバーライド可能に
- **RTLテキスト**: Windows Terminal、conhost、VS Code統合ターミナルでのヘブライ語、アラビア語等の表示を修正
- **LSPサーバ**: WindowsでのファイルURI不正問題修正
- **VSCode**: スクロールホイル応答性の向上、Untitledセッションの削除ボタン修正

## 変更のインパクト

v2.1.74は安定性とパフォーマンスに重点を置いたリリース。複数のメモリリーク修正により、長時間セッションのメモリ使用が改善される。特にMCP OAuth認証の改善は企業環境での使用に影響する重要修正となる。

---
