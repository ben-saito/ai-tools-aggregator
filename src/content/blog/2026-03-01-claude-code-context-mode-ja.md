---
title: "Claude Codeでコンテキストウィンドウの消耗を解決するContext Modeが登場 — MCP出力を98%削減"
description: "MCPツールの出力がコンテキストウィンドウを消費し、セッションが30分で遅くなる問題を解決するContext Modeが登場。Playwrightスナップショット59KB→299B、GitHub Issues 59KB→1.1KBに圧縮。"
publishedAt: "2026-03-01T12:00:00+09:00"
author: "AI Tools Hub"
category: "ai-coding"
tags: ["Claude Code", "MCP", "context window", "optimization", "developer-tools"]
lang: "ja"
featured: false
---

# Claude Codeでコンテキストウィンドウの消耗を解決するContext Modeが登場 — MCP出力を98%削減

コーディングエージェントを使っている開発者の間で、MCP（Model Context Protocol）ツールの出力がコンテキストウィンドウを消費し、セッションが30分で遅くなるという課題が認識されていた。Mert Köseoğlu氏が開発した「Context Mode」は、この問題を解決するMCPサーバーで、MCPツールの出力を最大98%削減する。

## 問題：MCPツール出力によるコンテキスト枯渇

MCPはAIコーディングエージェントの標準ツールとなりつつあるが、各ツールの呼び出しがコンテキストウィンドウを消費するという課題がある。出力側で特に深刻で、以下のデータが каждыйツールコールごとにコンテキストに追加される：

| データ種 | コンテキスト消費量 |
|---------|------------------|
| Playwrightスナップショット | 56 KB |
| GitHub Issues（20件） | 59 KB |
| アクセスログ（1件） | 45 KB |
| CSV分析（500行） | 85 KB |

30分間のセッションでコンテキストの40%が失われ、セッションの持続性と回答品質が低下していた。

## Context Modeの解決策

Context ModeはMCPサーバーとして動作し、MCPツールからの生データを受け取り、AIが必要とする最小限の情報のみをコンテキストに返す。圧縮結果は次のとおり：

| データ種 | 削減前 | 削減後 | 削減率 |
|---------|--------|--------|--------|
| Playwrightスナップショット | 56 KB | 299 B | 99.5% |
| GitHub Issues（20件） | 59 KB | 1.1 KB | 98% |
| アクセスログ（500件） | 45 KB | 155 B | 99.7% |
| CSV分析（500行） | 85 KB | 222 B | 99.7% |

**セッション全体では315 KBが5.4 KBに圧縮され、コンテキストが減り続ける前の稼働時間が約30分から約3時間に向上した。**

## 技術的アプローチ

Context Modeは2つの主要なコンポーネントで構成される：

### 1. Sandbox（サンドボックス）
各execute呼び出しが分離されたサブプロセスで実行され、生データ（ログ、API応答、スナップショット）はコンテキストに入らない。標準出力のみが返される設計により、不要なデータがコンテキストに追加されるのを防ぐ。

### 2. Knowledge Base（ナレッジベース）
Markdownをheadingごとにチャンク化し、SQLite FTS5でBM25ランキング検索を提供する。コードブロックを正確に返すため、コンテキスト情報を必要十分に保つ。

## インストール方法

```
# MCPのみの場合
claude mcp add context-mode -- npx -y context-mode
```

またはClaude CodeのPlugin Marketplaceからインストール可能。10言語のランタイム（JS/TS/Python/Shell/Ruby/Go/Rust/PHP/Perl/R）をサポートし、Bun使用時は3〜5倍の高速化が期待できる。

## なぜ必要だったか

MCP Directory & Hubを 운영하는Köseoğlu氏の発案。同氏は「みんなツールを作る一方で、出力側の問題を解決している人がいなかった。MCP Hubでは毎日10万件のリクエストを処理しており、CloudflareがTool Modeでツール定義を圧縮発表したのを見て、我々は逆方向（ツール出力）を圧縮することにした」と語っている。

## まとめ

Context Modeは、MCPの標準化が進む中で見落とされがちな「出力側の効率化」を解决的したツール。今後のAIコーディングエージェント開発において、コンテキストウィンドウの効率的な活用はますます重要になると考えられる。

**リポジトリ**: [github.com/mksglu/claude-context-mode](https://github.com/mksglu/claude-context-mode)（MITライセンス）
