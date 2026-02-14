---
title: "McPorter Skill - MCP Server管理をCLIで実現するClawdbotスキル"
description: "Clawdbot向けMcPorter Skillを利用して、MCP（Model Context Protocol）サーバーの管理、認証、ツール呼び出しをコマンドラインから実行する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "McPorter", "MCP", "Model Context Protocol", "CLI", "OAuth"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, McPorter Skill, MCP, Model Context Protocol, CLI, OAuth認証"
---

## 概要

McPorter Skillは、Clawdbotフレームワーク内でMCP（Model Context Protocol）サーバーの管理、認証、ツール呼び出しをコマンドラインから実行するためのスキルである。`mcporter` CLIツールを利用し、HTTP/stdioベースのMCPサーバーとの統合を実現する。

MCPは、AI言語モデルが外部ツール（API、データベース、サービス等）と統合するための標準プロトコルである。McPorterは、MCPサーバーのリスト化、スキーマ確認、ツール呼び出し、OAuth認証、CLI生成等を提供する。

公式サイトは http://mcporter.dev で公開されている。

### 技術的背景

AI言語モデルと外部サービスの統合は、従来、個別のSDKやAPIクライアントで実装されていた。MCPは、これを標準化されたプロトコルで統一し、モデル側がツール定義を読み込んで動的に呼び出せるようにする。

McPorterは、MCPサーバーのディスカバリー、認証、ツール実行を抽象化し、ユーザーがサーバーの内部実装を意識せずに利用できる。Linear、GitHub、Slack等の主要サービスがMCPサーバーを提供している。

提供される主要機能は以下の通り:
- MCPサーバーの一覧取得とスキーマ確認
- ツール呼び出し（HTTP/stdio）
- OAuth認証管理
- 設定ファイル管理
- CLI生成（TypeScript型定義、コマンドラインツール）
- デーモン管理

## 技術的仕様

### システム要件

- Node.js v16以上
- npm（Node.jsパッケージマネージャー）

### インストール方法

**npm経由（グローバルインストール）:**
```bash
npm install -g mcporter
```

インストール後、`mcporter`コマンドがPATHに追加される。

### 設定ファイル

デフォルト設定ファイル: `./config/mcporter.json`

カスタム設定ファイルを使用する場合:
```bash
mcporter --config /path/to/custom.json <command>
```

## 主要機能

### MCPサーバー一覧取得

**登録済みサーバー一覧:**
```bash
mcporter list
```

**特定サーバーのスキーマ確認:**
```bash
mcporter list <server> --schema
```

出力例:
```json
{
  "tools": [
    {
      "name": "list_issues",
      "description": "List issues from Linear",
      "inputSchema": {
        "type": "object",
        "properties": {
          "team": {"type": "string"},
          "limit": {"type": "number"}
        }
      }
    }
  ]
}
```

### ツール呼び出し

**セレクター形式:**
```bash
mcporter call <server.tool> key=value
```

例:
```bash
mcporter call linear.list_issues team=ENG limit:5
```

**関数形式:**
```bash
mcporter call "linear.create_issue(title: \"Bug fix\")"
```

**完全URL指定（アドホックサーバー）:**
```bash
mcporter call https://api.example.com/mcp.fetch url:https://example.com
```

**stdio形式（ローカルスクリプト）:**
```bash
mcporter call --stdio "bun run ./server.ts" scrape url=https://example.com
```

**JSONペイロード:**
```bash
mcporter call <server.tool> --args '{"limit":5}'
```

### OAuth認証

**認証開始:**
```bash
mcporter auth <server | url>
```

ブラウザが開き、OAuth認証フローが開始される。

**認証リセット:**
```bash
mcporter auth <server | url> --reset
```

既存のトークンを削除し、再認証を実行。

### 設定管理

**設定一覧:**
```bash
mcporter config list
```

**設定取得:**
```bash
mcporter config get <key>
```

**サーバー追加:**
```bash
mcporter config add <server> --url <url>
```

**サーバー削除:**
```bash
mcporter config remove <server>
```

**設定インポート:**
```bash
mcporter config import <file>
```

**ログイン・ログアウト:**
```bash
mcporter config login
mcporter config logout
```

### デーモン管理

**デーモン起動:**
```bash
mcporter daemon start
```

**デーモン状態確認:**
```bash
mcporter daemon status
```

**デーモン停止:**
```bash
mcporter daemon stop
```

**デーモン再起動:**
```bash
mcporter daemon restart
```

### CLI生成

**TypeScript型定義生成:**
```bash
mcporter emit-ts <server> --mode types
```

**TypeScriptクライアント生成:**
```bash
mcporter emit-ts <server> --mode client
```

**CLI生成:**
```bash
mcporter generate-cli --server <name>
mcporter generate-cli --command <url>
```

**CLI検査:**
```bash
mcporter inspect-cli <path> --json
```

## 実装例

### 例1: Linearでイシュー一覧取得

```bash
#!/bin/bash
# Linearの未解決イシューを取得してJSON保存
mcporter call linear.list_issues team=ENG status=unresolved limit:20 --output json > issues.json
```

### 例2: OAuth認証フロー

```bash
#!/bin/bash
# 初回認証
mcporter auth linear

# イシュー作成（認証済み）
mcporter call linear.create_issue \
  title="Fix login bug" \
  description="Users cannot log in with Google OAuth" \
  team=ENG \
  priority=HIGH
```

### 例3: 複数サーバーの統合

```bash
#!/bin/bash
# GitHubとLinearを統合（GitHubイシュー→Linear）
GITHUB_ISSUES=$(mcporter call github.list_issues repo=myorg/myrepo state=open --output json)

echo "$GITHUB_ISSUES" | jq -r '.[] | .title' | while read -r title; do
  mcporter call linear.create_issue \
    title="$title" \
    team=ENG \
    source=github
done
```

### 例4: stdioサーバーの利用

```bash
#!/bin/bash
# ローカルのカスタムMCPサーバーを呼び出し
mcporter call --stdio "node ./custom-mcp-server.js" process_data input=data.json
```

### 例5: CLI自動生成とスクリプト化

```bash
#!/bin/bash
# LinearのCLIを生成
mcporter generate-cli --server linear --output ./linear-cli

# 生成されたCLIを使用
./linear-cli list_issues --team ENG --limit 10
./linear-cli create_issue --title "New feature" --team ENG
```

## ユースケース

### プロジェクト管理の自動化

LinearやJIRAのイシュー作成、更新、ステータス変更をスクリプト化。GitHub ActionsやGitLab CIと連携し、Pull Request作成時に自動でイシューを作成。

### クロスサービス統合

Slack、GitHub、Linear、Notionを統合し、通知→イシュー作成→ドキュメント更新のワークフローを自動化。例: Slackでバグ報告→Linearイシュー作成→Notionに記録。

### データ移行

異なるプロジェクト管理ツール間でのデータ移行。JIRAからLinearへの移行、TrelloからAsanaへの移行等。

### カスタムMCPサーバー開発

社内APIやデータベースをMCP準拠のサーバーとして実装し、McPorterで管理。AI言語モデルから直接アクセス可能にする。

## 制限事項・セキュリティ考慮事項

### OAuth認証の保存

OAuth認証トークンは、ローカルの設定ファイル（デフォルト: `./config/mcporter.json`）に平文で保存される。以下の対策を推奨:
- ファイルパーミッション制限（`chmod 600`）
- 環境変数での管理（`MCPORTER_CONFIG`）
- 暗号化ストレージの使用（OS Keychain等）

### HTTPエンドポイントのセキュリティ

アドホックサーバー（`https://api.example.com/mcp.fetch`）を利用する場合、HTTPS通信を推奨。HTTP通信は中間者攻撃のリスクがある。

### stdioサーバーの信頼性

`--stdio`フラグでローカルスクリプトを実行する場合、スクリプトの安全性を確認すること。悪意のあるコードが実行されるリスクがある。

### レート制限

Linear、GitHub等のMCPサーバーは、背後で公式APIを呼び出している。APIのレート制限に注意し、大量リクエスト時は遅延を設定。

### 設定ファイルの管理

`mcporter.json`には、サーバーURL、認証情報、APIキー等が含まれる。公開リポジトリへのコミット禁止。

### デーモンモードのリソース消費

デーモンモード（`mcporter daemon start`）は、バックグラウンドでプロセスが常駐する。リソース（CPU、メモリ）消費に注意。

## 参考リンク

- 公式サイト: http://mcporter.dev
- GitHub（推定）: https://github.com/mcporter/mcporter
- MCP仕様: https://modelcontextprotocol.io/
- Linear MCP: https://linear.app/docs/mcp
- GitHub MCP: https://github.com/github/mcp-server
- npm: https://www.npmjs.com/package/mcporter

---

本記事の情報は2026年2月15日時点のものです。McPorter Skillの機能、コマンド仕様、対応サーバーは変更される可能性があります。最新情報は公式サイト（http://mcporter.dev）をご確認ください。OAuth認証トークンの管理には十分注意し、各MCPサーバーの利用規約を遵守してください。
