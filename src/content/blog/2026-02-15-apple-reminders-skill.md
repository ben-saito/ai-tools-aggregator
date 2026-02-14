---
title: "Apple Reminders Skill - CLIからのAppleリマインダー管理をClawdbotに統合"
description: "Clawdbot向けApple Reminders Skillを利用して、remindctlCLIを通じたターミナルベースのリマインダー作成・編集・完了管理を実現する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Apple Reminders", "remindctl", "CLI", "タスク管理", "macOS"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Apple Reminders, remindctl, macOS, ターミナル, タスク管理, GTD, 自動化, JSON出力"
---

# Apple Reminders Skill - CLIからのAppleリマインダー管理をClawdbotに統合

## 概要

Clawdbot向けApple Reminders Skillは、macOS標準のApple Reminders（リマインダー）アプリをターミナルから操作する機能を提供するスキルである。steipete氏が開発した`remindctl` CLIをバックエンドとして利用し、リマインダーの一覧表示、作成、編集、完了、削除、リスト管理などをコマンドラインから実行できる。

本スキルは日付フィルタ（今日、明日、今週、期限超過等）、JSON/プレーンテキスト出力形式、スクリプト統合に対応しており、GTD（Getting Things Done）等のタスク管理手法との親和性が高い。

## 技術的仕様

### システム要件

- macOS（Apple Reminders.appがインストールされている環境）
- Homebrew（推奨インストール方法）
- Node.js（pnpmを使用した手動インストールの場合）
- システム設定でのReminders権限（Reminders.appへのアクセス許可）

### インストール方法

**Homebrew経由（推奨）:**
```bash
brew install steipete/tap/remindctl
```

**ソースからビルド（pnpm）:**
```bash
git clone https://github.com/steipete/remindctl.git
cd remindctl
pnpm install
pnpm build
# バイナリは ./bin/remindctl に生成される
```

### 初期設定

**権限確認:**
```bash
remindctl status
```

**アクセス権限のリクエスト:**
```bash
remindctl authorize
```

初回実行時、macOSのシステムダイアログでReminders.appへのアクセス許可が要求される。システム設定 > プライバシーとセキュリティ > Reminders で、ターミナルまたはremindctlへのアクセスを許可する。

## 主要機能

### 1. リマインダー一覧表示（日付フィルタ）

**今日のリマインダー（デフォルト）:**
```bash
remindctl
# または
remindctl today
```

**明日のリマインダー:**
```bash
remindctl tomorrow
```

**今週のリマインダー:**
```bash
remindctl week
```

**期限超過のリマインダー:**
```bash
remindctl overdue
```

**今後のリマインダー:**
```bash
remindctl upcoming
```

**完了済みリマインダー:**
```bash
remindctl completed
```

**すべてのリマインダー:**
```bash
remindctl all
```

**特定日付のリマインダー:**
```bash
remindctl 2026-02-20
```

### 2. リスト管理

**リスト一覧:**
```bash
remindctl list
```

**特定リストのリマインダー表示:**
```bash
remindctl list 仕事
```

**リスト作成:**
```bash
remindctl list プロジェクト --create
```

**リスト名変更:**
```bash
remindctl list 仕事 --rename オフィス
```

**リスト削除:**
```bash
remindctl list 仕事 --delete
```

### 3. リマインダー作成

**クイック追加:**
```bash
remindctl add "牛乳を買う"
```

**リストと期限を指定:**
```bash
remindctl add --title "母に電話" --list 個人 --due tomorrow
```

### 4. リマインダー編集

**タイトルと期限の変更:**
```bash
remindctl edit 1 --title "新しいタイトル" --due 2026-02-20
```

### 5. リマインダー完了

**ID指定で完了:**
```bash
remindctl complete 1 2 3
```

### 6. リマインダー削除

**ID指定で削除（強制削除）:**
```bash
remindctl delete 4A83 --force
```

### 7. 出力形式

**JSON形式（スクリプト統合）:**
```bash
remindctl today --json
```

**プレーンTSV形式:**
```bash
remindctl today --plain
```

**件数のみ表示:**
```bash
remindctl today --quiet
```

## 実装例

### 例1: 毎朝の日次レビュースクリプト（Bash）

```bash
#!/bin/bash
# daily-review.sh

echo "=== 今日のリマインダー ==="
remindctl today

echo ""
echo "=== 期限超過のリマインダー ==="
remindctl overdue

echo ""
echo "=== 今週のリマインダー ==="
remindctl week --quiet
echo "件のリマインダーが今週中に期限を迎えます"
```

### 例2: Node.jsによるJSON出力の解析

```javascript
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

async function getTodayReminders() {
  try {
    const { stdout } = await execPromise('remindctl today --json');
    const reminders = JSON.parse(stdout);
    
    console.log(`今日のリマインダー: ${reminders.length}件`);
    reminders.forEach((reminder, index) => {
      console.log(`${index + 1}. ${reminder.title} (期限: ${reminder.dueDate})`);
    });
    
    return reminders;
  } catch (error) {
    console.error('Error fetching reminders:', error);
  }
}

getTodayReminders();
```

### 例3: 期限超過リマインダーのSlack通知

```bash
#!/bin/bash
# notify-overdue.sh

OVERDUE_COUNT=$(remindctl overdue --quiet)

if [ "$OVERDUE_COUNT" -gt 0 ]; then
  MESSAGE="⚠️ 期限超過のリマインダーが${OVERDUE_COUNT}件あります"
  
  # Slack Webhook経由で通知（環境変数SLACK_WEBHOOK_URLに設定）
  curl -X POST -H 'Content-type: application/json' \
    --data "{\"text\":\"$MESSAGE\"}" \
    "$SLACK_WEBHOOK_URL"
fi
```

### 例4: Clawdbot統合スクリプト（リマインダー自動作成）

```javascript
// auto-create-reminder.js
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

async function createReminderFromMessage(message) {
  // メッセージから日付とタイトルを抽出（簡易パース）
  const dateMatch = message.match(/(\d{4}-\d{2}-\d{2})/);
  const title = message.replace(dateMatch ? dateMatch[0] : '', '').trim();
  const dueDate = dateMatch ? dateMatch[1] : 'tomorrow';
  
  try {
    const command = `remindctl add --title "${title}" --list Clawdbot --due ${dueDate}`;
    await execPromise(command);
    console.log(`リマインダー作成: ${title} (期限: ${dueDate})`);
  } catch (error) {
    console.error('Error creating reminder:', error);
  }
}

// 使用例
createReminderFromMessage("2026-02-20 プロジェクト報告書を提出");
```

### 例5: 週次レポート生成（完了済みリマインダーの集計）

```bash
#!/bin/bash
# weekly-report.sh

WEEK=$(date +%Y-W%V)
OUTPUT_FILE="weekly-report-${WEEK}.txt"

echo "週次レポート ${WEEK}" > "$OUTPUT_FILE"
echo "===================" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "完了済みリマインダー:" >> "$OUTPUT_FILE"
remindctl completed --plain >> "$OUTPUT_FILE"

echo "" >> "$OUTPUT_FILE"
echo "来週のリマインダー:" >> "$OUTPUT_FILE"
remindctl upcoming --plain | head -n 20 >> "$OUTPUT_FILE"

echo "レポートを${OUTPUT_FILE}に保存しました"
```

## ユースケース

### 1. GTD（Getting Things Done）実装
受信箱（Inbox）リストにリマインダーを追加し、定期的にレビューして適切なリストに振り分ける。

### 2. ポモドーロテクニック統合
作業セッション開始時に今日のリマインダーを確認し、完了後に自動的に完了マークを付ける。

### 3. チームタスク管理
Slack/Discord等のチャットツールと連携し、期限超過のタスクを自動通知する。

### 4. AI音声アシスタント連携
Clawdbotの音声認識機能と組み合わせ、「明日の15時にミーティングのリマインダーを追加」といった自然言語コマンドからリマインダーを作成する。

## 制限事項・セキュリティ考慮事項

### 制限事項

1. **macOS専用**: Apple Reminders.appに依存するため、Windows/Linuxでは利用不可
2. **リマインダーID**: リマインダーIDは現在のフォルダに相対的であり、フォルダ変更後は再度リスト表示が必要
3. **複雑な繰り返しタスク**: 繰り返しタスク（毎週月曜日等）の設定はCLIから制限される場合がある
4. **添付ファイル非対応**: リマインダーへの画像やファイル添付はCLI経由では実行できない

### セキュリティ考慮事項

1. **Reminders権限**:
   - システム設定 > プライバシーとセキュリティ > Reminders で、ターミナルまたはremindctlへのアクセス許可が必要
   - SSH経由で実行する場合、SSHセッションを実行するMac側で許可設定を行う

2. **データアクセス権限**:
   - `remindctl`はApple Remindersのすべてのリストとリマインダーにアクセス可能
   - 機密情報（パスワード等）をリマインダーのタイトルに含めないこと

3. **JSON出力のセキュリティ**:
   - `--json`オプションで出力されるデータには全リマインダー情報が含まれる
   - スクリプトでJSON出力を処理する際、ログファイルや一時ファイルに機密情報を残さないよう注意

4. **スクリプト実行環境**:
   - 自動化スクリプトに認証情報やAPIキーを直接記述しないこと
   - 環境変数やシークレット管理ツール（1Password CLI等）を利用する

## 参考リンク

- remindctl GitHub: https://github.com/steipete/remindctl
- Apple Reminders公式サイト: https://www.apple.com/jp/macos/reminders/
- Getting Things Done（GTD）: https://gettingthingsdone.com/
- Clawdbot公式サイト: https://clawdbot.com

---

本記事の情報は2026年2月15日時点のものです。各ツールの機能や仕様は変更される可能性があります。最新情報は各公式サイトおよびGitHubリポジトリをご確認ください。
