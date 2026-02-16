---
title: "Apple Notes Skill - CLIからのApple Notesメモ管理をClawdbotに統合"
description: "Clawdbot向けApple Notes Skillを利用して、memoCLIを通じたターミナルベースのメモ作成・検索・編集・削除を実現する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Apple Notes", "memo", "CLI", "メモ管理", "macOS"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Apple Notes, memo CLI, macOS, ターミナル, メモ管理, 自動化, Markdown, HTML"
---

# Apple Notes Skill - CLIからのApple Notesメモ管理をClawdbotに統合

## 概要

Clawdbot向けApple Notes Skillは、macOS標準のApple Notesアプリをターミナルから操作する機能を提供するスキルである。`memo` CLIをバックエンドとして利用し、メモの作成、閲覧、編集、削除、検索、フォルダ間移動、HTMLまたはMarkdown形式でのエクスポートが可能になる。

本スキルはantoniorodr氏が開発したOSSツール「memo」を基盤としており、macOS環境専用の機能である。

## 技術的仕様

### システム要件

- macOS（Apple Notes.appがインストールされている環境）
- Homebrew（推奨インストール方法）
- Python 3.x（手動インストールの場合）
- システム設定でのAutomation権限（Notes.appへのアクセス許可）

### インストール方法

**Homebrew経由（推奨）:**
```bash
brew tap antoniorodr/memo
brew install antoniorodr/memo/memo
```

**手動インストール（pip）:**
```bash
git clone https://github.com/antoniorodr/memo.git
cd memo
pip install .
```

### 初期設定

初回実行時、macOSのシステムダイアログでNotes.appへのAutomationアクセス許可が要求される。

**アクセス許可の付与:**
1. システム設定 > プライバシーとセキュリティ > Automation
2. ターミナル（またはmemoを実行しているアプリ）に対してNotes.appへのアクセスを許可

## 主要機能

### 1. メモ一覧表示

**すべてのメモを表示:**
```bash
memo notes
```

**特定フォルダのメモを表示:**
```bash
memo notes -f "仕事"
```

**ファジー検索:**
```bash
memo notes -s "会議"
```

### 2. メモ作成

**対話式エディタでメモ作成:**
```bash
memo notes -a
```

環境変数`$EDITOR`（vim、nano、VS Code等）で指定されたエディタが起動し、メモを作成できる。

**タイトル指定でメモ作成:**
```bash
memo notes -a "プロジェクト進捗"
```

### 3. メモ編集

**対話式選択で編集:**
```bash
memo notes -e
```

表示されるリストから編集対象のメモを選択し、エディタで編集する。

### 4. メモ削除

**対話式選択で削除:**
```bash
memo notes -d
```

### 5. メモ移動

**フォルダ間移動:**
```bash
memo notes -m
```

移動元のメモと移動先フォルダを対話式に選択する。

### 6. メモエクスポート

**HTMLまたはMarkdown形式でエクスポート:**
```bash
memo notes -ex
```

エクスポート処理にはMistuneライブラリが使用される。

## 実装例

### 例1: 日次レポートの自動作成（Bash）

```bash
#!/bin/bash
# daily-report.sh

DATE=$(date +%Y-%m-%d)
TITLE="日次レポート ${DATE}"

# レポート内容を生成
REPORT=$(cat <<EOF
# 日次レポート ${DATE}

## 完了タスク
- タスク1
- タスク2

## 進行中タスク
- タスク3

## 翌日の予定
- タスク4
EOF
)

# メモに追加（環境変数EDITORを一時的に設定してechoで入力）
echo "$REPORT" | EDITOR="tee" memo notes -a "$TITLE"
```

### 例2: Node.jsによるメモ検索

```javascript
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

async function searchNotes(query) {
  try {
    const { stdout } = await execPromise(`memo notes -s "${query}"`);
    console.log('Search results:', stdout);
    return stdout;
  } catch (error) {
    console.error('Error searching notes:', error);
  }
}

searchNotes('プロジェクト');
```

### 例3: 特定フォルダのメモをMarkdownにエクスポート

```bash
#!/bin/bash
# export-notes.sh

FOLDER="アーカイブ"
OUTPUT_DIR="./exported-notes"

mkdir -p "$OUTPUT_DIR"

# フォルダ内のメモをエクスポート（対話式選択が必要なため、expect等を利用）
memo notes -f "$FOLDER" -ex
```

### 例4: Clawdbot統合スクリプト（メモ自動分類）

```javascript
// auto-categorize-notes.js
const { exec } = require('child_process');

async function categorizeNote(noteTitle, keyword, targetFolder) {
  return new Promise((resolve, reject) => {
    if (noteTitle.includes(keyword)) {
      // キーワードに一致する場合、指定フォルダに移動
      exec(`memo notes -m`, (error, stdout, stderr) => {
        // 注: 対話式コマンドのため、expectやAppleScriptを併用する必要がある
        if (error) reject(error);
        else resolve(`Moved to ${targetFolder}`);
      });
    } else {
      resolve('No action needed');
    }
  });
}
```

### 例5: 週次レビューメモの生成

```bash
#!/bin/bash
# weekly-review.sh

WEEK=$(date +%Y-W%V)
TITLE="週次レビュー ${WEEK}"

# 過去7日間のメモを検索してレビュー用メモに集約
RECENT_NOTES=$(memo notes -s "完了" | head -n 10)

REVIEW=$(cat <<EOF
# 週次レビュー ${WEEK}

## 今週完了したタスク
${RECENT_NOTES}

## 来週の目標
- 

## 振り返り
- 

EOF
)

echo "$REVIEW" | EDITOR="tee" memo notes -a "$TITLE"
```

## ユースケース

### 1. AIアシスタント連携
Clawdbotが音声コマンドやチャットメッセージから自動的にメモを作成し、適切なフォルダに分類する。

### 2. 自動ログ記録
開発作業やミーティングの内容を自動的にApple Notesに記録し、後で検索可能な形式で保存する。

### 3. タスク管理統合
Apple Remindersと連携し、完了したタスクを自動的にメモとしてアーカイブする。

### 4. ナレッジベース構築
定期的にメモをMarkdown形式でエクスポートし、GitHub Pagesや静的サイトジェネレーターと連携してナレッジベースを構築する。

## 制限事項・セキュリティ考慮事項

### 制限事項

1. **macOS専用**: Apple Notes.appに依存するため、Windows/Linuxでは利用不可
2. **画像・添付ファイル非対応**: 画像や添付ファイルを含むメモは編集できない
3. **対話式UI**: 多くのコマンドが対話式選択UIを使用するため、完全自動化には`expect`やAppleScript等の追加ツールが必要
4. **Notes.appが必要**: Apple Notes.appがアクセス可能な状態でなければ動作しない

### セキュリティ考慮事項

1. **Automation権限**:
   - システム設定 > プライバシーとセキュリティ > Automation で、ターミナルまたはmemoを実行するアプリに対してNotes.appへのアクセス許可が必要
   - SSH経由で実行する場合、SSHセッションを実行するMac側で許可設定を行う

2. **データアクセス権限**:
   - `memo` CLIはApple Notesの全メモにアクセス可能
   - 機密情報を含むメモがある場合、アクセス制御に注意

3. **エクスポートデータの管理**:
   - エクスポートしたHTML/Markdownファイルには元のメモ内容が含まれる
   - エクスポート先のディレクトリに適切なパーミッションを設定すること

4. **スクリプト実行環境**:
   - 自動化スクリプトに認証情報やAPIキーを含めないこと
   - 環境変数やシークレット管理ツール（1Password CLI等）を利用する

## 参考リンク

- memo GitHub: https://github.com/antoniorodr/memo
- Apple Notes公式サイト: https://www.apple.com/jp/macos/notes/
- Mistune（Markdownパーサー）: https://github.com/lepture/mistune
- Clawdbot公式サイト: https://clawdbot.com

---

本記事の情報は2026年2月15日時点のものです。各ツールの機能や仕様は変更される可能性があります。最新情報は各公式サイトおよびGitHubリポジトリをご確認ください。
