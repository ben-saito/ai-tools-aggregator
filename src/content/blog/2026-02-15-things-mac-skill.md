---
title: "Clawdbot Things Mac Skill - Things 3タスク管理自動化"
description: "Clawdbot向けThings Mac Skillを利用して、Things 3 CLIによるタスク追加・検索・更新を自動化する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Things 3", "タスク管理", "GTD", "macOS"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Things 3, タスク管理, GTD, things3-cli, macOS, 生産性"
---

Clawdbotの公式Skillとして提供されているThings Mac Skillは、Things 3（macOS向けタスク管理アプリ）をCLI経由で操作するツールである。本記事では、Things 3 CLIの技術仕様、タスクの追加・検索・更新機能、および実装例について解説する。

## 概要

Things Mac Skillは、`things`コマンド（things3-cli）を利用して、Things 3のタスク・プロジェクト・エリア・タグをCLIから操作する機能を提供する。読み取り操作（Inbox一覧、Today一覧、検索等）はローカルのThingsデータベースに直接アクセスし、書き込み操作（タスク追加・更新）はThings URLスキームを使用する。

技術的には、Things 3はSQLiteデータベース（`ThingsData-*.sqlite`）にデータを保存しており、`things`コマンドはこれを読み取ってタスク情報を取得する。一方、タスクの追加や更新は、`things:///add?title=...`形式のURLスキーム経由でThingsアプリに指示を送る仕組みである。

## 技術的仕様

### システム要件

- **Things 3:** macOS版（App Store販売、買い切り6,100円、2026年2月時点）
- **things3-cli:** CLIツール（Go製、オープンソース）
- **OS:** macOS専用（iOSデバイスからのCLI操作は不可）
- **権限:** フルディスクアクセス（Full Disk Access）が必要（Thingsデータベース読み取り時）
- **Clawdbot:** バージョン不明（公式ドキュメントに記載なし）

### インストール方法

Go言語のインストールツールを使用（Apple Silicon環境）:

```bash
GOBIN=/opt/homebrew/bin go install github.com/ossianhempel/things3-cli/cmd/things@latest
```

Intel Mac環境:
```bash
GOBIN=/usr/local/bin go install github.com/ossianhempel/things3-cli/cmd/things@latest
```

インストール確認:

```bash
things --version
```

### データベースパス設定

Thingsデータベースは、以下のパスに保存される（macOS）:

```
~/Library/Group Containers/JLMPQHK86H.com.culturedcode.ThingsMac/ThingsData-*
```

環境変数で明示的に指定:

```bash
export THINGSDB="$HOME/Library/Group Containers/JLMPQHK86H.com.culturedcode.ThingsMac/ThingsData-XXXXX"
```

または、コマンド実行時に`--db`オプションで指定:

```bash
things --db /path/to/ThingsData-XXXXX inbox
```

### 権限設定

Thingsデータベースへのアクセスには、**フルディスクアクセス**権限が必要:

1. システム設定 → プライバシーとセキュリティ → フルディスクアクセス
2. `Terminal.app`（手動実行時）または`Clawdbot.app`（Gateway経由実行時）を追加

権限が不足している場合、以下のエラーが発生する:
```
Error: unable to open database file
```

### 認証トークン（書き込み操作）

タスクの更新・完了・キャンセル操作には、認証トークンが必要:

```bash
export THINGS_AUTH_TOKEN="your-auth-token-here"
```

または、コマンド実行時に`--auth-token`オプションで指定:

```bash
things update --id <UUID> --auth-token <TOKEN> --completed
```

認証トークンの取得方法は、things3-cliの公式ドキュメントに記載されている（Things 3アプリのURL設定から生成）。

## 主要機能

### タスク一覧取得（読み取り）

Inbox一覧:

```bash
things inbox --limit 50
```

Today一覧:

```bash
things today
```

Upcoming一覧:

```bash
things upcoming
```

出力例（JSON形式）:
```json
[
  {
    "uuid": "abc123-def456-789ghi",
    "title": "Review pull request #42",
    "notes": "Check security implications",
    "status": "incomplete",
    "creationDate": "2026-02-15T09:00:00Z",
    "project": "Development",
    "tags": ["code-review", "urgent"]
  }
]
```

### タスク検索

```bash
things search "pull request" --limit 10
```

- **部分一致:** タイトル・ノート・タグで検索
- **結果制限:** `--limit`オプションで件数制限

### プロジェクト・エリア・タグ一覧

```bash
things projects
things areas
things tags
```

### タスク追加（書き込み）

基本的なタスク追加:

```bash
things add "Buy groceries"
```

詳細オプション付き:

```bash
things add "Book flights" \
  --notes "Check prices on Expedia and Google Flights" \
  --when today \
  --deadline 2026-02-20 \
  --list "Travel" \
  --heading "Before Trip" \
  --tags "urgent,personal"
```

- **--notes:** タスクのメモ欄
- **--when:** 実行日（`today`, `tomorrow`, `evening`, `2026-02-20`等）
- **--deadline:** 締切日
- **--list:** プロジェクトまたはエリア名
- **--heading:** プロジェクト内の見出し
- **--tags:** カンマ区切りのタグ（スペース不可）

チェックリスト付きタスク:

```bash
things add "Trip preparation" \
  --checklist-item "Passport" \
  --checklist-item "Travel insurance" \
  --checklist-item "Hotel reservation"
```

標準入力からの作成:

```bash
cat <<'EOF' | things add -
Book flights
Check prices on multiple sites
Compare dates
EOF
```

- 1行目がタイトル、2行目以降がノートとして登録される

### タスク更新（書き込み）

タスクIDの取得（検索から）:

```bash
things search "Buy groceries" --limit 1
```

タイトル変更:

```bash
things update --id abc123-def456-789ghi \
  --auth-token <TOKEN> \
  "Buy groceries and milk"
```

ノート追加:

```bash
things update --id abc123-def456-789ghi \
  --auth-token <TOKEN> \
  --append-notes "Also buy bananas"
```

タスク完了:

```bash
things update --id abc123-def456-789ghi \
  --auth-token <TOKEN> \
  --completed
```

タスクキャンセル:

```bash
things update --id abc123-def456-789ghi \
  --auth-token <TOKEN> \
  --canceled
```

### ドライラン（プレビュー）

実際にThingsを開かず、生成されるURLを確認:

```bash
things --dry-run add "Test task"
```

出力例:
```
things:///add?title=Test%20task
```

## 実装例

### 例1: 日次タスク自動作成

```bash
#!/bin/bash
# daily-tasks.sh

DATE=$(date +%Y-%m-%d)

things add "Daily standup" \
  --when today \
  --list "Work" \
  --tags "meeting"

things add "Check email" \
  --when today \
  --list "Admin"

things add "Review TODOs" \
  --when today \
  --notes "Review yesterday's incomplete tasks"
```

### 例2: GitHubプルリクエストからタスク生成

```javascript
// github-pr-to-things.js
const { Octokit } = require('@octokit/rest');
const { execSync } = require('child_process');

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

async function createTasksFromPRs() {
  const { data: prs } = await octokit.pulls.list({
    owner: 'myorg',
    repo: 'myrepo',
    state: 'open'
  });
  
  prs.forEach(pr => {
    const title = `Review PR: ${pr.title}`;
    const notes = `${pr.html_url}\n\n${pr.body || ''}`;
    
    execSync(`things add "${title}" --notes "${notes}" --list "Code Reviews" --tags "github"`);
    console.log(`タスク作成: ${title}`);
  });
}

createTasksFromPRs();
```

### 例3: カレンダーイベントからタスク生成

```bash
#!/bin/bash
# calendar-to-things.sh

# macOSのカレンダーから今日のイベント取得（icalBuddy使用）
EVENTS=$(icalBuddy -n -nc -npn -iep "title,datetime" eventsToday)

# 各イベントをタスクとして追加
echo "$EVENTS" | while read -r event; do
  if [ -n "$event" ]; then
    things add "Prep: $event" --when today --list "Meetings"
  fi
done
```

### 例4: タスク完了状況レポート

```javascript
// task-report.js
const { execSync } = require('child_process');

function getTodayTasks() {
  const output = execSync('things today').toString();
  return JSON.parse(output);
}

function generateReport() {
  const tasks = getTodayTasks();
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === 'completed').length;
  const incomplete = total - completed;
  
  console.log(`=== Today's Task Report ===`);
  console.log(`Total: ${total}`);
  console.log(`Completed: ${completed} (${Math.round(completed / total * 100)}%)`);
  console.log(`Incomplete: ${incomplete}`);
  
  if (incomplete > 0) {
    console.log(`\n未完了タスク:`);
    tasks.filter(t => t.status !== 'completed').forEach(t => {
      console.log(`- ${t.title}`);
    });
  }
}

generateReport();
```

### 例5: 期限切れタスクアラート

```bash
#!/bin/bash
# overdue-alert.sh

# 期限切れタスクを検索（JSON出力から日付を比較）
OVERDUE=$(things upcoming | jq -r '.[] | select(.deadline != null and .deadline < now) | .title')

if [ -n "$OVERDUE" ]; then
  echo "期限切れタスクがあります:"
  echo "$OVERDUE"
  
  # Discordに通知（Clawdbot経由）
  clawdbot run <<EOF
message action:send target:user:me message:"期限切れタスク検出:
$OVERDUE"
EOF
fi
```

## ユースケース

### 個人タスク管理

- **日次ルーチン:** 毎朝の定型タスクを自動生成
- **Eメール処理:** メールから重要タスクを抽出してThingsに登録
- **習慣トラッキング:** 定期的なタスク（運動、読書等）を自動追加

### プロジェクト管理

- **GitHub連携:** Issueやプルリクエストをタスク化
- **カレンダー連携:** 会議前のアジェンダ準備タスク自動生成
- **Slack連携:** メンション通知をタスクとして保存

### チーム協業

- **レビュー依頼:** コードレビュー・ドキュメントレビューのタスク自動登録
- **レポート作成:** 週次・月次の進捗報告タスクを定期作成

## 制限事項・セキュリティ考慮事項

### 制限事項

- **macOS専用:** iOSデバイスからのCLI操作は不可（Things CloudでmacOS↔iOS間の同期は可能）
- **タスク削除不可:** things3-cliは、タスク削除（ゴミ箱移動）APIを提供しない（`things trash`はゴミ箱一覧表示のみ）
  - 代替策: `--completed`または`--canceled`でタスクをアーカイブ
- **複雑なクエリ不可:** Things 3の高度な検索機能（Smart List等）はCLI非対応

### セキュリティ

- **データベース保護:** Thingsデータベースはローカルに保存されるため、macOSのファイルシステム暗号化（FileVault）で保護推奨
- **認証トークン保護:** `THINGS_AUTH_TOKEN`は環境変数または暗号化設定ファイルで管理（ソースコードに記載禁止）
- **フルディスクアクセス:** 必要最低限のアプリにのみ権限付与

### ベストプラクティス

- **タグ統一:** 一貫したタグ命名規則で検索性向上
- **プロジェクト構造:** エリア→プロジェクト→タスクの階層を明確化
- **定期レビュー:** 完了タスクのアーカイブ、未完了タスクの見直し
- **Things Cloudバックアップ:** Things Cloud（無料）でデバイス間同期・バックアップ

## 参考リンク

- Things 3公式サイト: https://culturedcode.com/things/
- things3-cli GitHub: https://github.com/ossianhempel/things3-cli
- Things URL Scheme: https://culturedcode.com/things/support/articles/2803573/
- Clawdbot公式サイト: https://clawdbot.com

---

本記事の情報は2026年2月15日時点のものです。Things 3やthings3-cliのアップデートにより、機能や制限事項が変更される可能性があります。最新情報は各公式サイトをご確認ください。
