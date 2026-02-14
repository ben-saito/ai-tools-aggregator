---
title: "Oracle Skill - コンテキスト付きプロンプト送信によるコード解析支援"
description: "Clawdbot向けOracle Skillを利用して、ファイルバンドリング、エンジン選択、セッション管理を活用したAI支援型コード解析環境を構築する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Oracle", "コード解析", "AI", "プロンプトエンジニアリング", "GPT-5.2", "Claude"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Oracle, AI, コード解析, プロンプト, GPT-5.2 Pro, Claude, Gemini, ファイルバンドリング"
---

# Oracle Skill - コンテキスト付きプロンプト送信によるコード解析支援

2026年現在、AI支援型のコーディングツールは、単一ファイルの解析からリポジトリ全体の理解へと進化している。しかし、大規模なコードベースを効率的にAIモデルに渡す手法は、依然として課題である。

Oracle（https://askoracle.dev）は、プロンプトと選択されたファイル群を1つのリクエストにバンドルし、複数のAIエンジン（API、ブラウザ自動化）経由で解析を実行するCLIツールである。Clawdbot向けOracle Skillは、このツールをClawdbot環境に統合し、長時間実行、セッション管理、ファイル選択最適化をサポートする。

本記事では、Oracle Skillの技術的仕様、導入方法、実装パターン、およびベストプラクティスを解説する。

## 選定基準

本記事で解説するOracle Skillは、以下の特性を持つ:

- プロンプト + 複数ファイルの一括送信（ワンショットリクエスト）
- ブラウザ自動化（GPT-5.2 Pro、Gemini）とAPI（Claude、Grok、Codex）対応
- セッション管理による長時間実行のサポート
- トークン数事前確認機能

---

## 技術的背景

### Oracleとは

Oracle（https://askoracle.dev）は、steipete氏が開発したプロンプトエンジニアリングツールである。Node.js実装（@steipete/oracle）として提供され、npmまたはnpx経由で利用できる。

GitHubリポジトリ: https://github.com/steipete/oracle（推定、公式ドキュメント記載なし）

### 主な用途

Oracleは、以下のシナリオで使用される:

- 複数ファイルを含むバグ調査
- リファクタリング案の生成
- 技術スタック全体の理解が必要な質問
- 長時間実行（10分〜1時間）が許容される深い思考タスク

### エンジンの種類

Oracleは、2つのエンジンをサポートする:

**1. APIエンジン（`--engine api`）:**

- 対応モデル: Claude、Grok、GPT-4o、Codex等
- 認証: 環境変数`OPENAI_API_KEY`、`ANTHROPIC_API_KEY`等
- 特徴: 高速、スクリプト化に適している

**2. ブラウザエンジン（`--engine browser`）:**

- 対応モデル: GPT-5.2 Pro（ChatGPT）、Gemini（Google AI Studio）
- 認証: ブラウザの既存セッション利用
- 特徴: 長時間実行（深い思考モード）、セッション保存対応

デフォルト動作: `OPENAI_API_KEY`が設定されている場合は`api`、そうでない場合は`browser`。

---

## システム要件とインストール方法

### 動作環境

- Node.js: 22.22.0以上
- OS: macOS、Linux、Windows
- 対応ブラウザ（ブラウザエンジン使用時）: Chromium系（Chrome、Edge、Brave）

### インストール手順

**方法1: npmグローバルインストール**

```bash
npm install -g @steipete/oracle
```

**方法2: npx（インストール不要）**

```bash
npx -y @steipete/oracle --help
```

注意: `pnpx`は推奨されない（SQLiteバインディングの問題が発生する可能性）。

### 環境変数の設定（APIエンジン使用時）

```bash
# OpenAI API
export OPENAI_API_KEY="sk-..."

# Anthropic API
export ANTHROPIC_API_KEY="sk-ant-..."
```

---

## 主要機能とコマンド例

### プレビュー実行（トークン消費なし）

実際にリクエストを送信する前に、バンドル内容を確認する。

```bash
# サマリー表示
oracle --dry-run summary -p "Explain the authentication flow" --file "src/**" --file "!**/*.test.*"

# 全ファイル内容表示
oracle --dry-run full -p "Find the bug in user login" --file "src/auth/**"

# トークン数レポート
oracle --dry-run summary --files-report -p "Refactor this module" --file "src/module.ts"
```

### ブラウザ実行（推奨パス）

GPT-5.2 Proを使用した長時間実行。

```bash
oracle --engine browser --model gpt-5.2-pro -p "Analyze the codebase and suggest improvements" --file "src/**"
```

注意: ブラウザエンジンでの実行時間は10分〜1時間が標準（深い思考モードを使用する場合）。

### マニュアルペースト（ブラウザ手動入力）

生成されたプロンプトをクリップボードにコピーし、手動でブラウザに貼り付ける。

```bash
oracle --render --copy -p "Explain the database schema" --file "src/db/**"
```

`--copy`は`--copy-markdown`のエイリアス。

### リモートブラウザ実行

ブラウザホストを別マシンで起動し、リモート接続する。

**ホスト側:**

```bash
oracle serve --host 0.0.0.0 --port 9473 --token <secret>
```

**クライアント側:**

```bash
oracle --engine browser --remote-host <host:port> --remote-token <secret> -p "Task description" --file "src/**"
```

---

## ファイル選択パターン

### 基本的なファイル指定

```bash
# 単一ファイル
oracle -p "Explain this function" --file src/index.ts

# ディレクトリ（再帰的）
oracle -p "Summarize the API" --file src

# Glob パターン
oracle -p "Review all TypeScript files" --file "src/**/*.ts"
```

### 除外パターン

```bash
# テストファイルを除外
oracle -p "Analyze production code" --file "src/**" --file "!**/*.test.ts" --file "!**/*.spec.ts"

# スナップショットを除外
oracle -p "Review components" --file "src/components/**" --file "!**/*.snap"
```

### デフォルト除外対象

以下のディレクトリは、明示的に指定しない限り除外される:

- `node_modules`
- `dist`
- `coverage`
- `.git`
- `.turbo`
- `.next`
- `build`
- `tmp`

### ファイルサイズ制限

- 1 MBを超えるファイルは自動的に拒否される
- 大規模ファイルを含める場合は、必要な部分を別ファイルに抽出することを推奨

---

## セッション管理

### セッションの保存場所

実行されたセッションは`~/.oracle/sessions`に保存される。環境変数`ORACLE_HOME_DIR`でカスタマイズ可能。

### セッション一覧の取得

```bash
# 過去72時間のセッション
oracle status --hours 72
```

### セッションへの再接続

長時間実行中にCLIがタイムアウトした場合、セッションIDで再接続する。

```bash
# セッションIDで再接続
oracle session <session-id> --render
```

### スラグによる可読性向上

セッションIDを読みやすくするため、スラグを指定できる。

```bash
oracle --slug "auth-refactor" -p "Refactor authentication module" --file "src/auth/**"
```

セッションID例: `auth-refactor-a3f2`

### 重複実行の防止

同一プロンプト + ファイルセットの実行は、デフォルトで拒否される。強制実行するには`--force`を使用する。

```bash
oracle --force -p "Same prompt again" --file "src/**"
```

---

## 実装例

### 例1: TypeScriptコードのバグ調査

```bash
oracle --engine browser --model gpt-5.2-pro \
  -p "Find the bug causing the authentication failure. The error message is: 'Invalid token signature'. Steps to reproduce: 1) User logs in, 2) Token is generated, 3) API call fails with 401. Relevant code should be in src/auth/ and src/middleware/." \
  --file "src/auth/**" \
  --file "src/middleware/auth.ts" \
  --file "!**/*.test.ts"
```

### 例2: APIエンジンでのリファクタリング提案

```bash
export ANTHROPIC_API_KEY="sk-ant-..."

oracle --engine api --model claude-opus-4 \
  -p "Suggest a refactoring plan for the user service. Current issues: 1) Code duplication in CRUD methods, 2) Lack of input validation, 3) No error handling. Constraints: Keep the public API unchanged." \
  --file "src/services/user.ts" \
  --file "src/models/user.ts" \
  --file "docs/api-spec.md"
```

### 例3: トークン数の事前確認

```bash
oracle --dry-run summary --files-report \
  -p "Analyze the entire codebase" \
  --file "src/**" \
  --file "docs/**" \
  --file "!**/*.test.*"
```

出力例:

```
Total files: 45
Total tokens: 125,340
Estimated cost (GPT-4o): $3.76
```

### 例4: スラグ付きセッション管理

```bash
# セッション開始
oracle --slug "db-migration-plan" --engine browser --model gpt-5.2-pro \
  -p "Create a migration plan from MySQL to PostgreSQL. Current schema is in src/db/schema/. Constraints: Zero downtime, backward compatibility for 2 weeks." \
  --file "src/db/schema/**" \
  --file "docs/database.md"

# セッション一覧確認
oracle status --hours 24

# 再接続
oracle session db-migration-plan-x9j2 --render
```

### 例5: マルチモデル比較

異なるモデルで同じタスクを実行し、結果を比較する。

```bash
# GPT-5.2 Pro
oracle --engine browser --model gpt-5.2-pro --slug "compare-gpt" \
  -p "Optimize this SQL query for performance." \
  --file "src/queries/slow_query.sql"

# Claude Opus 4
oracle --engine api --model claude-opus-4 --slug "compare-claude" \
  -p "Optimize this SQL query for performance." \
  --file "src/queries/slow_query.sql"
```

---

## プロンプトテンプレートのベストプラクティス

### 高シグナル/ノイズ比のプロンプト構造

Oracleは、プロジェクトに関する事前知識を持たない。以下の情報を含める:

**1. プロジェクト概要（2-4文）:**

```
This is a REST API built with Express.js and PostgreSQL. 
The codebase follows a layered architecture: routes, controllers, services, and models. 
Tests are written in Jest. 
The API is deployed on AWS Lambda with API Gateway.
```

**2. 問題の詳細:**

```
Error: "Database connection timeout" occurs when processing large batch requests (>1000 items). 
The error happens in src/services/batch-processor.ts at line 45.
Steps to reproduce: POST /api/batch with 1500 items.
```

**3. 制約条件:**

```
Constraints:
- Do not change the public API (routes must remain the same).
- Must maintain backward compatibility with version 1.x.
- Performance: Response time must be under 2 seconds.
```

**4. 期待する出力:**

```
Expected output:
- Root cause analysis.
- 3 possible solutions with trade-offs.
- Recommended solution with implementation steps.
```

### 例: 完全なプロンプトテンプレート

```
Project: E-commerce order management system
Stack: Node.js 20, Express 4.18, PostgreSQL 15, Redis 7
Build: npm run build (TypeScript compilation)
Test: npm test (Jest unit + integration tests)
Deployment: Docker on Kubernetes

Problem:
Order creation fails intermittently with "Unique constraint violation on order_id".
Error occurs in src/services/order-service.ts at line 120.
Steps to reproduce:
1. Send POST /api/orders with standard payload.
2. About 5% of requests fail (seems to happen during high traffic).

What I tried:
- Added retry logic (didn't help).
- Checked if order_id generation has duplicates (none found in logs).

Constraints:
- order_id must remain a UUID v4.
- Cannot change the database schema (production constraint).

Expected output:
- Root cause analysis (is it a race condition?).
- Recommended fix with code example.
- Any additional monitoring/logging suggestions.

Relevant code is in:
- src/services/order-service.ts (order creation logic)
- src/models/order.ts (Sequelize model)
- src/utils/uuid-generator.ts (UUID generation)
```

---

## ユースケース

### 大規模リファクタリングの計画

複数モジュールにまたがるリファクタリングの影響範囲を分析し、段階的な実装計画を生成する。

### レガシーコードの理解

ドキュメントが不足しているレガシーコードベースを、AIに解析させて技術負債を可視化する。

### セキュリティ監査

全ファイルをスキャンし、SQLインジェクション、XSS、認証バイパス等の脆弱性を検出する。

### テストカバレッジ向上

既存コードからテストケースを生成し、カバレッジ不足の領域を補完する。

---

## 制限事項とセキュリティ考慮事項

### 制限事項

- ワンショットリクエストのため、対話的なフィードバックループは不可
- ファイル選択が不適切な場合、重要な情報が欠落する可能性
- ブラウザエンジンは長時間実行（10分〜1時間）が標準（即時性が必要な場合は不適）
- 1 MBを超えるファイルは拒否される

### セキュリティ考慮事項

**機密情報の除外:**

デフォルトでは`.env`、認証トークン、APIキー等を含むファイルは除外されないため、手動で除外する必要がある。

```bash
oracle -p "Task" --file "src/**" --file "!.env" --file "!config/secrets.yaml"
```

**バンドル内容の事前確認:**

送信前に必ず`--dry-run full`で内容を確認する。

```bash
oracle --dry-run full -p "Task" --file "src/**" | less
```

**セッションストレージの保護:**

`~/.oracle/sessions`には、過去のプロンプトとファイル内容が保存される。適切なアクセス権限を設定する。

```bash
chmod 700 ~/.oracle
```

**API使用時のコスト管理:**

GPT-4o、Claude Opus等の高価なモデルを使用する場合、事前にトークン数を確認する。

```bash
oracle --dry-run summary --files-report -p "Task" --file "src/**"
```

---

## 参考リンク

- Oracle公式サイト: https://askoracle.dev
- Clawdbot公式サイト: https://clawdbot.com/
- OpenAI API: https://platform.openai.com/docs/
- Anthropic Claude API: https://docs.anthropic.com/

---

本記事の情報は2026年2月15日時点のものです。Oracleの機能、対応モデル、APIは変更される可能性があります。最新情報は各公式サイトをご確認ください。
