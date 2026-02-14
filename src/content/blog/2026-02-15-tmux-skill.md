---
title: "Tmux Skill - Clawdbot向けターミナル多重化機能"
description: "Clawdbot向けTmux Skillを利用して、tmuxセッションのリモート制御、キーストローク送信、ペイン出力スクレイピングを実現する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "tmux", "ターミナル", "CLI", "Coding Agent", "リモート制御"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, tmux, ターミナル多重化, リモート制御, Coding Agent, REPL, ペイン操作"
---

# Tmux Skill - Clawdbot向けターミナル多重化機能

ClawdbotのTmux Skillは、tmux（terminal multiplexer）を使用した対話型CLI制御機能を提供する。キーストローク送信、ペイン出力のスクレイピング、セッション管理を通じて、Python REPLやCoding Agentなどの対話型プロセスを自動化できる。

## 概要

Tmux Skillは、tmuxの分離ソケット（detached socket）機能を活用し、Clawdbotから独立したtmuxセッションを制御する。対話型TTYが必要な場面で使用され、長時間実行タスクにはexecツールのbackgroundモードが推奨される。

tmuxはBrian Joyが開発したターミナルマルチプレクサで、1つのターミナルウィンドウ内で複数のセッション、ウィンドウ、ペインを管理できる。Clawdbotはこの機能を利用し、複数のCoding Agentを並列実行したり、REPLを制御したりする用途に適している。

## 技術的仕様

### システム要件

- **OS:** macOS、Linux（Windows WSL対応）
- **tmux:** バージョン1.8以上（推奨: 3.0以上）
- **依存コマンド:** bash、grep、sed

### インストール方法

macOS（Homebrew）:

```bash
brew install tmux
```

Linux（Debian/Ubuntu）:

```bash
sudo apt-get install tmux
```

### ソケット規約

Tmux Skillは分離ソケットを使用してtmuxサーバーを分離する:

- **ソケットディレクトリ:** `$CLAWDBOT_TMUX_SOCKET_DIR`（デフォルト: `${TMPDIR:-/tmp}/clawdbot-tmux-sockets`）
- **デフォルトソケットパス:** `$CLAWDBOT_TMUX_SOCKET_DIR/clawdbot.sock`

この規約により、通常のtmuxセッションとClawdbot管理下のセッションを分離できる。

### ペイン・ウィンドウのターゲット形式

tmuxのターゲット形式: `session:window.pane`

- `clawdbot-python:0.0` - セッション「clawdbot-python」のウィンドウ0、ペイン0
- `:0.0` - カレントセッションのウィンドウ0、ペイン0

セッション名、ウィンドウ名は短く、スペースを避けることが推奨される。

## 主要機能

### セッション作成と初期化

新規tmuxセッション作成とPython REPLの起動例:

```bash
SOCKET_DIR="${CLAWDBOT_TMUX_SOCKET_DIR:-${TMPDIR:-/tmp}/clawdbot-tmux-sockets}"
mkdir -p "$SOCKET_DIR"
SOCKET="$SOCKET_DIR/clawdbot.sock"
SESSION=clawdbot-python

# セッション作成
tmux -S "$SOCKET" new -d -s "$SESSION" -n shell

# Python REPL起動（PYTHON_BASIC_REPL=1で基本REPLモードに設定）
tmux -S "$SOCKET" send-keys -t "$SESSION":0.0 -- 'PYTHON_BASIC_REPL=1 python3 -q' Enter

# 出力確認
tmux -S "$SOCKET" capture-pane -p -J -t "$SESSION":0.0 -S -200
```

`PYTHON_BASIC_REPL=1`環境変数は、Pythonの非基本REPL（IPython等）がsend-keysワークフローを妨げることを防ぐために設定される。

### キーストローク送信

リテラル文字列の送信（`-l`フラグ使用）:

```bash
CMD='print("Hello, World!")'
tmux -S "$SOCKET" send-keys -t "$SESSION":0.0 -l -- "$CMD"
tmux -S "$SOCKET" send-keys -t "$SESSION":0.0 Enter
```

制御キー送信:

```bash
# Ctrl+C（プロセス中断）
tmux -S "$SOCKET" send-keys -t "$SESSION":0.0 C-c

# Ctrl+D（EOF）
tmux -S "$SOCKET" send-keys -t "$SESSION":0.0 C-d
```

### 出力スクレイピング

ペインの履歴から最新200行を取得:

```bash
tmux -S "$SOCKET" capture-pane -p -J -t "$SESSION":0.0 -S -200
```

オプション説明:

- `-p`: 標準出力に出力
- `-J`: 折り返し行を結合
- `-S -200`: 200行前から取得

### セッション検索

全セッションのリスト表示:

```bash
# 特定ソケット内のセッション
./scripts/find-sessions.sh -S "$SOCKET"

# 全ソケットをスキャン
./scripts/find-sessions.sh --all
```

### 出力待機（wait-for-text.sh）

特定のテキストパターンが出力されるまで待機:

```bash
./scripts/wait-for-text.sh \
  -t "$SESSION":0.0 \
  -p '>>>' \
  -T 20 \
  -i 0.5
```

パラメータ:

- `-t`: ターゲットペイン（必須）
- `-p`: 検索パターン（正規表現）
- `-F`: 固定文字列として検索
- `-T`: タイムアウト秒数（デフォルト15秒）
- `-i`: ポーリング間隔秒数（デフォルト0.5秒）
- `-l`: 検索する履歴行数（デフォルト1000行）

## 実装例

### 1. Python REPLでの計算実行

```bash
SOCKET="${TMPDIR:-/tmp}/clawdbot-tmux-sockets/clawdbot.sock"
SESSION=python-calc

# セッション作成
tmux -S "$SOCKET" new -d -s "$SESSION"
tmux -S "$SOCKET" send-keys -t "$SESSION" 'PYTHON_BASIC_REPL=1 python3 -q' Enter

# プロンプト待機
./scripts/wait-for-text.sh -t "$SESSION" -p '>>>' -T 10

# 計算実行
tmux -S "$SOCKET" send-keys -t "$SESSION" -l '2 + 2'
tmux -S "$SOCKET" send-keys -t "$SESSION" Enter

# 結果取得
sleep 0.5
tmux -S "$SOCKET" capture-pane -p -t "$SESSION" -S -10
```

### 2. 複数Coding Agentの並列実行

複数のCodex CLIインスタンスを並列起動:

```bash
SOCKET="${TMPDIR:-/tmp}/codex-army.sock"

# 5つのセッション作成
for i in 1 2 3 4 5; do
  tmux -S "$SOCKET" new-session -d -s "agent-$i"
done

# 各セッションで異なるプロジェクトを修正
tmux -S "$SOCKET" send-keys -t agent-1 "cd /tmp/project1 && codex --yolo 'Fix bug X'" Enter
tmux -S "$SOCKET" send-keys -t agent-2 "cd /tmp/project2 && codex --yolo 'Fix bug Y'" Enter
tmux -S "$SOCKET" send-keys -t agent-3 "cd /tmp/project3 && codex --yolo 'Fix bug Z'" Enter

# 進捗確認（シェルプロンプトの検出で完了判定）
for sess in agent-1 agent-2 agent-3; do
  if tmux -S "$SOCKET" capture-pane -p -t "$sess" -S -3 | grep -q "❯"; then
    echo "$sess: 完了"
  else
    echo "$sess: 実行中..."
  fi
done
```

### 3. Git Worktreeを使用した並列バグ修正

同一リポジトリの複数ブランチで並行作業:

```bash
# 元リポジトリ
cd ~/Projects/myproject

# Worktree作成
git worktree add /tmp/fix-issue-123 issue-123
git worktree add /tmp/fix-issue-456 issue-456

# tmuxセッションでそれぞれ修正
SOCKET="${TMPDIR:-/tmp}/codex-parallel.sock"

tmux -S "$SOCKET" new -d -s fix-123
tmux -S "$SOCKET" send-keys -t fix-123 "cd /tmp/fix-issue-123 && codex --yolo 'Fix issue 123'" Enter

tmux -S "$SOCKET" new -d -s fix-456
tmux -S "$SOCKET" send-keys -t fix-456 "cd /tmp/fix-issue-456 && codex --yolo 'Fix issue 456'" Enter

# 完了後、worktreeクリーンアップ
git worktree remove /tmp/fix-issue-123
git worktree remove /tmp/fix-issue-456
```

### 4. Node.js REPLでのAPI実験

```bash
SOCKET="${TMPDIR:-/tmp}/node-repl.sock"
SESSION=node-api

tmux -S "$SOCKET" new -d -s "$SESSION"
tmux -S "$SOCKET" send-keys -t "$SESSION" 'node' Enter

./scripts/wait-for-text.sh -t "$SESSION" -p '>' -T 10

# API実験コード送信
tmux -S "$SOCKET" send-keys -t "$SESSION" -l "const axios = require('axios');"
tmux -S "$SOCKET" send-keys -t "$SESSION" Enter
tmux -S "$SOCKET" send-keys -t "$SESSION" -l "axios.get('https://api.example.com/data').then(res => console.log(res.data));"
tmux -S "$SOCKET" send-keys -t "$SESSION" Enter

sleep 2
tmux -S "$SOCKET" capture-pane -p -t "$SESSION" -S -50
```

### 5. セッション監視スクリプト

実行中のセッションを定期的に確認:

```bash
#!/bin/bash
SOCKET="${TMPDIR:-/tmp}/clawdbot-tmux-sockets/clawdbot.sock"

while true; do
  echo "=== $(date) ==="
  tmux -S "$SOCKET" list-sessions -F '#{session_name}: #{session_windows} windows'
  
  # 各セッションの最新出力を表示
  for sess in $(tmux -S "$SOCKET" list-sessions -F '#{session_name}'); do
    echo "--- $sess ---"
    tmux -S "$SOCKET" capture-pane -p -t "$sess" -S -5
  done
  
  sleep 10
done
```

### 6. セッションクリーンアップ

不要なセッションの削除:

```bash
SOCKET="${TMPDIR:-/tmp}/clawdbot-tmux-sockets/clawdbot.sock"

# 特定セッション削除
tmux -S "$SOCKET" kill-session -t clawdbot-python

# 全セッション削除
tmux -S "$SOCKET" list-sessions -F '#{session_name}' | xargs -r -n1 tmux -S "$SOCKET" kill-session -t

# tmuxサーバー完全停止
tmux -S "$SOCKET" kill-server
```

## ユースケース

### Coding Agent並列実行

- 複数PRの同時レビュー（tmuxセッションごとに異なるブランチ）
- バグ修正の並列処理
- テストスイートの分散実行

### REPL制御

- Python/Node.js REPLでの実験自動化
- データ分析スクリプトの段階的実行
- 対話型デバッグ

### 長時間タスクの監視

- モデルトレーニング進捗の定期確認
- サーバープロセスのログ監視
- バックグラウンドジョブのステータスチェック

### CI/CD統合

- 複数環境での並列テスト実行
- デプロイスクリプトの対話的実行
- ビルドログのリアルタイム収集

## 制限事項・セキュリティ考慮事項

### 機能制限

- **TTY必須:** 対話型TTYが必要なプロセスにのみ使用（長時間非対話タスクにはexec backgroundモードを推奨）
- **OS制限:** macOS/Linux専用（Windows WSL経由で利用可能）
- **セッション数:** 同時セッション数が多い場合（50以上）、tmuxサーバーのメモリ使用量が増加

### セキュリティ

- **ソケット権限:** tmuxソケットファイルはデフォルトで作成者のみアクセス可能（`chmod 600`）
- **コマンドインジェクション:** `send-keys`にユーザー入力を使用する場合、適切なエスケープが必要
- **プロセス可視性:** tmuxセッション内のプロセスは`ps`コマンドで他ユーザーから確認可能

### パフォーマンス

- **ポーリングオーバーヘッド:** `wait-for-text.sh`の頻繁な呼び出しはCPU使用率を上げる可能性がある
- **履歴サイズ:** `capture-pane -S -N`で大きな値を指定すると、メモリ消費が増加
- **セッション起動時間:** 新規セッション作成は100-200ms程度

### トラブルシューティング

**「session not found」エラー:**

セッションが存在しない、または異なるソケットに接続している。`list-sessions`で確認。

**send-keysが反応しない:**

ターゲットペインが存在しない、またはプロセスが入力待機状態でない。`capture-pane`で状態確認。

**PythonのREPLが期待通り動作しない:**

`PYTHON_BASIC_REPL=1`環境変数を設定し、基本REPLモードで起動する。

## 参考リンク

- tmux公式サイト: https://github.com/tmux/tmux
- tmux man page: https://man.openbsd.org/tmux.1
- tmux Cheat Sheet: https://tmuxcheatsheet.com
- Clawdbot公式ドキュメント: https://github.com/cncf/clawdbot

---

本記事の情報は2026年2月15日時点のものです。tmuxのバージョンおよびClawdbot Tmux Skillの仕様は変更される可能性があります。最新情報は各公式サイトをご確認ください。
