---
title: "Clawdbot 1Password Skill - CLIによるシークレット管理自動化"
description: "Clawdbot向け1Password Skillを利用して、1Password CLIによる認証情報の安全な取得・注入を実現する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "1Password", "セキュリティ", "シークレット管理", "認証"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, 1Password, CLI, シークレット管理, 認証情報, op, tmux"
---

Clawdbotの公式Skillとして提供されている1Password Skillは、1Password CLI（`op`コマンド）を利用した認証情報の安全な取得・注入を可能にするツールである。本記事では、1Password Skillの技術仕様、セットアップ手順、主要機能、および実装例について解説する。

## 概要

1Password Skillは、1Password CLIを通じてパスワード・APIキー・SSH鍵などのシークレット情報を安全に取得し、スクリプトやアプリケーションに動的に注入する機能を提供する。デスクトップアプリ統合により、CLIからの認証要求時にブラウザやアプリでの生体認証（Touch ID/Face ID）を利用できる。

技術的には、`op`コマンド実行時に専用のtmuxセッションを作成し、TTY（仮想端末）を確保することで、認証プロンプトの確実な処理を実現している。これにより、Clawdbotのシェルツールが1回ごとに新しいTTYを生成する制約を回避している。

## 技術的仕様

### システム要件

- **1Password CLI:** v2.0以降（`op`コマンド）
- **1Passwordデスクトップアプリ:** macOS/Windows/Linux版（デスクトップアプリ統合を有効化）
- **tmux:** 必須（tmuxセッション内で`op`コマンドを実行）
- **OS:** macOS、Linux、Windows（WSL含む）
- **Clawdbot:** バージョン不明（公式ドキュメントに記載なし）

### インストール方法

Homebrewを使用したインストール（macOS/Linux）:

```bash
brew install 1password-cli
```

インストール確認:

```bash
op --version
```

デスクトップアプリ統合の有効化:
1. 1Passwordデスクトップアプリを開く
2. 設定 → Developer → "Integrate with 1Password CLI"を有効化
3. アプリをロック解除状態に保つ（CLIからの認証時に必要）

### 認証フロー

1Password CLIは、以下のいずれかの方法で認証する:

1. **デスクトップアプリ統合（推奨）:** 
   - デスクトップアプリがロック解除されている場合、CLIは自動的にアクセス可能
   - 生体認証（Touch ID/Face ID）をサポート
   
2. **マニュアルサインイン:**
   ```bash
   op signin --account my.1password.com
   ```
   - マスターパスワード入力が必要
   - セッショントークンを環境変数に保存

### tmuxセッション要件

1Password Skillは、すべての`op`コマンド実行時に専用tmuxセッションを作成する必要がある。これは、Clawdbotのシェルツールが1回のコマンド実行ごとに新しいTTYを生成するため、`op`の認証プロンプトが正常に動作しない問題を回避するためである。

推奨tmuxセッション作成方法:

```bash
SOCKET_DIR="${CLAWDBOT_TMUX_SOCKET_DIR:-${TMPDIR:-/tmp}/clawdbot-tmux-sockets}"
mkdir -p "$SOCKET_DIR"
SOCKET="$SOCKET_DIR/clawdbot-op.sock"
SESSION="op-auth-$(date +%Y%m%d-%H%M%S)"

tmux -S "$SOCKET" new -d -s "$SESSION" -n shell
```

## 主要機能

### アカウント確認

```bash
tmux -S "$SOCKET" send-keys -t "$SESSION":0.0 -- "op whoami" Enter
tmux -S "$SOCKET" capture-pane -p -J -t "$SESSION":0.0 -S -200
```

出力例:
```
URL:     https://my.1password.com
Email:   user@example.com
User ID: ABCD1234EFGH5678
Account: my
```

### ボールト一覧取得

```bash
tmux -S "$SOCKET" send-keys -t "$SESSION":0.0 -- "op vault list" Enter
tmux -S "$SOCKET" capture-pane -p -J -t "$SESSION":0.0 -S -200
```

### パスワード取得

特定アイテムからパスワードを取得:

```bash
tmux -S "$SOCKET" send-keys -t "$SESSION":0.0 -- "op item get 'GitHub' --fields password" Enter
tmux -S "$SOCKET" capture-pane -p -J -t "$SESSION":0.0 -S -200
```

### 環境変数注入（`op run`）

環境変数にシークレットを注入してコマンド実行:

```bash
# .env.tpl ファイル例
# API_KEY=op://vault/item/field

tmux -S "$SOCKET" send-keys -t "$SESSION":0.0 -- "op run --env-file=.env.tpl -- ./deploy.sh" Enter
```

- `.env.tpl`に`op://`プレフィックス付きの参照を記載
- `op run`が自動的に値を注入してコマンド実行
- シークレットがディスクに保存されない（メモリ上のみ）

### 設定ファイル注入（`op inject`）

テンプレートファイルからシークレットを注入:

```bash
# config.tpl ファイル例
# database_password: op://vault/database/password

tmux -S "$SOCKET" send-keys -t "$SESSION":0.0 -- "op inject -i config.tpl -o config.yml" Enter
```

- 注意: `config.yml`にはシークレットが平文で出力されるため、即座に使用後削除推奨

### 複数アカウント管理

```bash
# アカウント追加
tmux -S "$SOCKET" send-keys -t "$SESSION":0.0 -- "op account add" Enter

# 特定アカウントでコマンド実行
tmux -S "$SOCKET" send-keys -t "$SESSION":0.0 -- "op --account work.1password.com item get 'AWS Keys'" Enter
```

または環境変数で指定:
```bash
export OP_ACCOUNT=work.1password.com
```

## 実装例

### 例1: デプロイスクリプトへのAPIキー注入

```bash
#!/bin/bash
# deploy-with-secrets.sh

SOCKET_DIR="${TMPDIR:-/tmp}/clawdbot-tmux-sockets"
mkdir -p "$SOCKET_DIR"
SOCKET="$SOCKET_DIR/clawdbot-op.sock"
SESSION="op-deploy-$(date +%Y%m%d-%H%M%S)"

# tmuxセッション作成
tmux -S "$SOCKET" new -d -s "$SESSION" -n shell

# 1Password CLI認証確認
tmux -S "$SOCKET" send-keys -t "$SESSION":0.0 -- "op whoami" Enter
sleep 2

# APIキー注入してデプロイ実行
tmux -S "$SOCKET" send-keys -t "$SESSION":0.0 -- "op run --env-file=deploy.env.tpl -- ./deploy.sh" Enter
sleep 5

# ログ取得
tmux -S "$SOCKET" capture-pane -p -J -t "$SESSION":0.0 -S -200

# セッション削除
tmux -S "$SOCKET" kill-session -t "$SESSION"
```

### 例2: GitHub Actionsシークレットをローカルでテスト

```javascript
// test-secrets.js
const { execSync } = require('child_process');

const socketDir = process.env.TMPDIR || '/tmp';
const socket = `${socketDir}/clawdbot-tmux-sockets/clawdbot-op.sock`;
const session = `op-test-${Date.now()}`;

// tmuxセッション作成
execSync(`tmux -S ${socket} new -d -s ${session} -n shell`);

// .env.tplから環境変数注入
execSync(`tmux -S ${socket} send-keys -t ${session}:0.0 -- "op run --env-file=.env.tpl -- node app.js" Enter`);

// 5秒待機してログ取得
setTimeout(() => {
  const output = execSync(`tmux -S ${socket} capture-pane -p -J -t ${session}:0.0 -S -200`).toString();
  console.log(output);
  
  // セッション削除
  execSync(`tmux -S ${socket} kill-session -t ${session}`);
}, 5000);
```

### 例3: SSH鍵の動的取得

```bash
#!/bin/bash
# ssh-with-1password.sh

HOST="$1"
ITEM_NAME="SSH Key - Production"

SOCKET_DIR="${TMPDIR:-/tmp}/clawdbot-tmux-sockets"
mkdir -p "$SOCKET_DIR"
SOCKET="$SOCKET_DIR/clawdbot-op.sock"
SESSION="op-ssh-$(date +%Y%m%d-%H%M%S)"

# tmuxセッション作成
tmux -S "$SOCKET" new -d -s "$SESSION" -n shell

# SSH鍵取得して一時ファイルに保存
tmux -S "$SOCKET" send-keys -t "$SESSION":0.0 -- "op item get '${ITEM_NAME}' --fields private_key > /tmp/ssh_key_$$.pem" Enter
sleep 2

# 権限設定
chmod 600 /tmp/ssh_key_$$.pem

# SSH接続
ssh -i /tmp/ssh_key_$$.pem "$HOST"

# 一時ファイル削除
rm /tmp/ssh_key_$$.pem

# セッション削除
tmux -S "$SOCKET" kill-session -t "$SESSION"
```

### 例4: データベース接続文字列の生成

```javascript
// db-connect.js
const { execSync } = require('child_process');

function get1PasswordSecret(itemName, fieldName) {
  const socketDir = process.env.TMPDIR || '/tmp';
  const socket = `${socketDir}/clawdbot-tmux-sockets/clawdbot-op.sock`;
  const session = `op-db-${Date.now()}`;
  
  execSync(`tmux -S ${socket} new -d -s ${session} -n shell`);
  execSync(`tmux -S ${socket} send-keys -t ${session}:0.0 -- "op item get '${itemName}' --fields ${fieldName}" Enter`);
  
  setTimeout(() => {}, 2000); // 2秒待機
  
  const output = execSync(`tmux -S ${socket} capture-pane -p -J -t ${session}:0.0 -S -200`).toString();
  execSync(`tmux -S ${socket} kill-session -t ${session}`);
  
  return output.trim();
}

const dbHost = get1PasswordSecret('Database - Production', 'hostname');
const dbUser = get1PasswordSecret('Database - Production', 'username');
const dbPass = get1PasswordSecret('Database - Production', 'password');

const connectionString = `postgresql://${dbUser}:${dbPass}@${dbHost}:5432/mydb`;
console.log('接続文字列を生成しました（実際には表示されません）');
```

### 例5: セキュアなログイン自動化

```bash
#!/bin/bash
# secure-login.sh

SERVICE="$1"

SOCKET_DIR="${TMPDIR:-/tmp}/clawdbot-tmux-sockets"
mkdir -p "$SOCKET_DIR"
SOCKET="$SOCKET_DIR/clawdbot-op.sock"
SESSION="op-login-$(date +%Y%m%d-%H%M%S)"

# tmuxセッション作成
tmux -S "$SOCKET" new -d -s "$SESSION" -n shell

# ユーザー名・パスワード取得
tmux -S "$SOCKET" send-keys -t "$SESSION":0.0 -- "op item get '${SERVICE}' --fields username" Enter
sleep 1
USERNAME=$(tmux -S "$SOCKET" capture-pane -p -J -t "$SESSION":0.0 -S -1)

tmux -S "$SOCKET" send-keys -t "$SESSION":0.0 -- "op item get '${SERVICE}' --fields password" Enter
sleep 1
PASSWORD=$(tmux -S "$SOCKET" capture-pane -p -J -t "$SESSION":0.0 -S -1)

# ログイン実行（例: curl）
curl -X POST https://api.example.com/login \
  -d "username=$USERNAME" \
  -d "password=$PASSWORD"

# セッション削除
tmux -S "$SOCKET" kill-session -t "$SESSION"

# 変数クリア
unset USERNAME PASSWORD
```

## ユースケース

### DevOps・インフラ管理

- **CI/CDパイプライン:** GitHub Actions/Jenkins等でのシークレット注入
- **インフラコード:** TerraformやAnsibleでのクラウド認証情報管理
- **デプロイ自動化:** 本番環境デプロイ時のAPIキー動的取得

### 開発環境

- **ローカル開発:** `.env`ファイルをGit管理せず、1Passwordから動的生成
- **テスト実行:** E2Eテストでの認証情報注入

### セキュリティ監査

- **シークレットローテーション:** 定期的なパスワード変更の自動化
- **アクセスログ記録:** 1Passwordの監査ログ活用

## 制限事項・セキュリティ考慮事項

### 制限事項

- **デスクトップアプリ必須:** デスクトップアプリ統合を使用する場合、アプリをロック解除状態に保つ必要がある
- **tmux依存:** Clawdbotからの実行には必ずtmuxセッションが必要
- **セッション管理:** 長時間実行するとセッショントークンが期限切れになる可能性（再認証が必要）

### セキュリティ

- **シークレット露出防止:** 
  - `op run`/`op inject`を優先（ディスクへの書き込み回避）
  - ログファイルにシークレットを記録しない
  - 環境変数にシークレットを保存する場合、実行後に即座にクリア
  
- **アクセス制御:**
  - 1Passwordのアクセス管理機能で、ボールト・アイテムごとに権限設定
  - Clawdbot実行ユーザーに最小権限の原則を適用
  
- **監査:**
  - 1Passwordの監査ログでCLIからのアクセス履歴を確認
  - 異常なアクセスパターンを検出

### ベストプラクティス

- **セッション削除:** tmuxセッションは実行後必ず削除（`tmux kill-session`）
- **エラーハンドリング:** 認証失敗時の再試行ロジック実装
- **環境分離:** 開発・ステージング・本番で異なる1Passwordアカウント使用

## 参考リンク

- 1Password CLI公式ドキュメント: https://developer.1password.com/docs/cli/get-started/
- 1Password CLI Examples: https://developer.1password.com/docs/cli/reference/
- Clawdbot公式サイト: https://clawdbot.com
- 1Password Security Model: https://1password.com/security/

---

本記事の情報は2026年2月15日時点のものです。1Password CLIの仕様やClawdbotのアップデートにより、機能や制限事項が変更される可能性があります。最新情報は各公式サイトをご確認ください。
