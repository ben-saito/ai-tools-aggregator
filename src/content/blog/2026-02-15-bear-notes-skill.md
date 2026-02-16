---
title: "Bear Notes Skill - Clawdbot向けノート管理機能"
description: "Clawdbot向けBear Notes Skillを利用して、grizzly CLIによるBearアプリのノート作成・検索・管理を実現する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Bear Notes", "grizzly", "macOS", "ノート管理", "CLI"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Bear Notes, grizzly CLI, macOS, ノート管理, API連携, Markdown"
---

# Bear Notes Skill - Clawdbot向けノート管理機能

ClawdbotのBear Notes Skillは、macOS向けノートアプリケーション「Bear」をコマンドラインから操作するための機能を提供する。grizzly CLIを使用してノートの作成、検索、タグ管理を自動化し、AI Agentからのノート操作を可能にする。

## 概要

Bear Notes Skillは、Tyler Winceが開発したgrizzly（https://github.com/tylerwince/grizzly）をベースとしたClawdbotスキルである。BearアプリのURL Scheme（x-callback-url）を利用し、コマンドラインからノートの作成、タグ付け、検索、更新を実行できる。

Bearアプリは2016年にリリースされたMarkdown対応のノートアプリで、macOS/iOS向けに提供されている。Bear Notes Skillは、このアプリをClawdbotのワークフローに統合するための橋渡しとなる。

## 技術的仕様

### システム要件

- **OS:** macOS（BearアプリはmacOS専用）
- **依存バイナリ:** grizzly CLI
- **Bearアプリ:** インストール済みかつ実行中であること
- **認証トークン:** 一部の操作（add-text、tags、open-note --selected）で必要

### インストール方法

grizzly CLIはGo言語で実装されており、以下のコマンドでインストール可能:

```bash
go install github.com/tylerwince/grizzly/cmd/grizzly@latest
```

インストール後、Bearアプリから認証トークンを取得する:

1. Bearアプリを起動
2. メニューから「Help → API Token」を選択
3. トークンをコピーし、以下のコマンドで保存:

```bash
mkdir -p ~/.config/grizzly
echo "YOUR_TOKEN" > ~/.config/grizzly/token
```

### 設定ファイル

grizzlyは以下の優先順位で設定を読み込む:

1. コマンドラインフラグ
2. 環境変数（`GRIZZLY_TOKEN_FILE`、`GRIZZLY_CALLBACK_URL`、`GRIZZLY_TIMEOUT`）
3. カレントディレクトリの `.grizzly.toml`
4. `~/.config/grizzly/config.toml`

設定ファイルの例:

```toml
token_file = "~/.config/grizzly/token"
callback_url = "http://127.0.0.1:42123/success"
timeout = "5s"
```

## 主要機能

### ノート作成

標準入力からノート内容を受け取り、タイトルとタグを指定して新規ノートを作成:

```bash
echo "会議メモ: プロジェクトX進捗" | grizzly create --title "2026-02-15 会議" --tag work
grizzly create --title "アイデアメモ" --tag inbox < /dev/null
```

### ノート読み込み

ノートIDを指定してノート内容を取得（JSON形式での出力に対応）:

```bash
grizzly open-note --id "NOTE_ID" --enable-callback --json
```

`--enable-callback`フラグを使用することで、Bearアプリからのレスポンスを待機し、ノート内容をJSON形式で取得できる。

### テキスト追加

既存ノートに追記または編集:

```bash
echo "追加メモ: 次回タスク確認" | grizzly add-text --id "NOTE_ID" --mode append --token-file ~/.config/grizzly/token
```

`--mode`オプションには`append`（末尾追記）、`prepend`（先頭追記）、`replace`（置換）を指定可能。

### タグ管理

Bearアプリ内の全タグをリストアップ:

```bash
grizzly tags --enable-callback --json --token-file ~/.config/grizzly/token
```

特定のタグでフィルタリングされたノートを開く:

```bash
grizzly open-tag --name "work" --enable-callback --json
```

### ドライラン・デバッグ

`--dry-run`フラグを使用することで、実際の操作を実行せずにURL Schemeを確認可能:

```bash
grizzly create --title "テスト" --tag test --dry-run --print-url
```

出力例:

```
bear://x-callback-url/create?title=テスト&tag=test
```

## 実装例

### 1. 日次レポート自動作成

毎日決まった時間に日報テンプレートを作成:

```bash
#!/bin/bash
DATE=$(date +"%Y-%m-%d")
TEMPLATE="# 日報 $DATE

## 完了タスク
- 

## 進行中タスク
- 

## 課題
- "

echo "$TEMPLATE" | grizzly create --title "日報 $DATE" --tag daily-report
```

### 2. 会議メモの自動タグ付け

会議の音声認識結果をBearに保存:

```bash
#!/bin/bash
MEETING_NOTES=$(cat meeting-transcript.txt)
TITLE="会議メモ: $(date +"%Y-%m-%d %H:%M")"

echo "$MEETING_NOTES" | grizzly create --title "$TITLE" --tag meeting --tag transcript
```

### 3. タスク管理ワークフロー

inbox→processing→doneの流れでノートを管理:

```bash
# 新規タスク作成（inbox）
echo "新しいタスク内容" | grizzly create --title "タスク: データベース最適化" --tag inbox

# 作業開始時にタグ変更（Bear UIで手動、またはadd-textで更新）
grizzly add-text --id "NOTE_ID" --mode prepend --token-file ~/.config/grizzly/token <<< "#processing"

# 完了時
grizzly add-text --id "NOTE_ID" --mode prepend --token-file ~/.config/grizzly/token <<< "#done"
```

### 4. ノート検索とバックアップ

特定タグのノートを一括取得してエクスポート:

```bash
#!/bin/bash
# タグ一覧取得
TAGS=$(grizzly tags --enable-callback --json --token-file ~/.config/grizzly/token | jq -r '.tags[]')

# 各タグのノート数を確認
for tag in $TAGS; do
  grizzly open-tag --name "$tag" --enable-callback --json
done
```

### 5. Clawdbot Agentからの自動メモ作成

JavaScript/TypeScript環境でのClawdbot Skill統合:

```javascript
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

async function createBearNote(title, content, tags) {
  const tagArgs = tags.map(t => `--tag ${t}`).join(' ');
  const cmd = `echo "${content}" | grizzly create --title "${title}" ${tagArgs}`;
  
  try {
    const { stdout, stderr } = await execPromise(cmd);
    console.log('ノート作成成功:', stdout);
  } catch (error) {
    console.error('エラー:', error);
  }
}

// 使用例
createBearNote(
  'AI生成レポート',
  '本日のタスク分析結果...',
  ['ai-generated', 'report']
);
```

## ユースケース

### パーソナルナレッジマネジメント

- 日次の学習メモを自動作成（タグ: `learning`, `YYYY-MM`）
- リサーチ結果をタグ別に整理（タグ: `research`, `project-name`）
- 記事クリップの自動保存（Web ClipperとBearの連携）

### プロジェクト管理

- タスク管理（inbox → processing → done のワークフロー）
- 会議メモの自動生成とタグ付け
- スプリントレビュー記録の集約

### AI Agent統合

- Clawdbot Agentが収集した情報を自動メモ化
- 定期レポートのBear保存（日次・週次・月次）
- 音声コマンドによるノート作成（Siri連携）

## 制限事項・セキュリティ考慮事項

### 機能制限

- **macOS専用:** BearアプリがmacOS/iOS専用のため、Linux/WindowsではBear Notes Skillを使用不可
- **Bearアプリ必須:** grizzlyはBearアプリのURL Schemeを使用するため、Bearが実行中である必要がある
- **トークン必要な操作:** add-text、tags、open-note --selected等の一部操作にはBear API Tokenが必要

### セキュリティ

- **トークン管理:** Bear API Tokenは`~/.config/grizzly/token`に平文で保存されるため、ファイルパーミッションを適切に設定する必要がある（`chmod 600 ~/.config/grizzly/token`）
- **URL Scheme:** Bearのx-callback-url機能を使用するため、悪意のあるスクリプトからの不正アクセスに注意が必要
- **データ同期:** BearのiCloud同期を有効にしている場合、作成されたノートは自動的にクラウド同期される

### パフォーマンス

- **コールバック待機:** `--enable-callback`使用時、Bearアプリからのレスポンスを待つためタイムアウト設定（デフォルト5秒）を考慮する必要がある
- **大量ノート操作:** 数百件以上のノートを一括操作する場合、Rate Limitに注意

## 参考リンク

- Bear公式サイト: https://bear.app
- grizzly CLI GitHub: https://github.com/tylerwince/grizzly
- Bear API仕様: https://bear.app/faq/X-callback-url%20Scheme%20documentation/
- Clawdbot公式ドキュメント: https://github.com/cncf/clawdbot

---

本記事の情報は2026年2月15日時点のものです。BearアプリおよびgrizzlyのAPIは変更される可能性があります。最新情報は各公式サイトをご確認ください。
