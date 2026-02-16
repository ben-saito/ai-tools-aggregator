---
title: "Clawdbot Obsidian Skill - Markdownベースのナレッジベース自動化"
description: "Clawdbot向けObsidian Skillを利用して、Obsidianボールトの検索・作成・編集を自動化する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Obsidian", "ナレッジベース", "Markdown", "ノート管理"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Obsidian, obsidian-cli, ナレッジベース, Markdown, ノート管理, PKM"
---

Clawdbotの公式Skillとして提供されているObsidian Skillは、Obsidian（Markdownベースのナレッジベース）のボールト操作を自動化するツールである。本記事では、Obsidian Skillの技術仕様、obsidian-cliを使用したノート検索・作成・編集の実装例、および運用上の考慮事項について解説する。

## 概要

Obsidian Skillは、Obsidian CLIツール（`obsidian-cli`）を利用して、Obsidianボールト内のMarkdownノートを検索・作成・移動・削除する機能を提供する。Obsidianボールトは通常のファイルシステム上のフォルダであり、`.md`ファイルとして保存されるため、直接的なファイル編集も可能である。

技術的には、Obsidianデスクトップアプリの設定ファイル（`~/Library/Application Support/obsidian/obsidian.json`、macOS環境）を参照してボールトのパスを取得し、`obsidian://` URIスキームを使用してノート作成やボールト操作を実行する。ノート間のリンク（`[[wikilink]]`形式）は、`obsidian-cli move`コマンドで自動的に更新される。

## 技術的仕様

### システム要件

- **Obsidian:** デスクトップアプリがインストールされている必要がある（無料版または有料版）
- **obsidian-cli:** CLIツール（Homebrew経由でインストール）
- **OS:** macOS、Linux、Windows
- **Clawdbot:** バージョン不明（公式ドキュメントに記載なし）

### インストール方法

Homebrewを使用したインストール（macOS/Linux）:

```bash
brew install yakitrak/yakitrak/obsidian-cli
```

インストール確認:

```bash
obsidian-cli --version
```

Windows環境では、GitHubリリースページから実行ファイルをダウンロードする。

### ボールト構造

Obsidianボールトは、通常のフォルダとして以下の構造を持つ:

```
MyVault/
├── .obsidian/           # Obsidian設定（ワークスペース、プラグイン設定等）
├── Daily Notes/         # 日次ノート（例）
│   ├── 2026-02-15.md
│   └── 2026-02-14.md
├── Projects/            # プロジェクトノート（例）
│   └── Clawdbot Integration.md
├── Attachments/         # 添付ファイル（画像、PDF等）
│   └── screenshot.png
└── index.md             # インデックスノート（例）
```

- **ノート:** `.md`拡張子のMarkdownファイル
- **設定:** `.obsidian/`フォルダ（通常は直接編集しない）
- **添付ファイル:** Obsidian設定で指定したフォルダに保存

### ボールト検出

obsidian-cliは、Obsidianデスクトップアプリの設定ファイルからボールト情報を読み取る:

```bash
# macOS
cat ~/Library/Application\ Support/obsidian/obsidian.json
```

設定ファイル例:
```json
{
  "vaults": {
    "abc123def456": {
      "path": "/Users/username/Documents/MyVault",
      "ts": 1708000000000,
      "open": true
    }
  }
}
```

- **path:** ボールトのフルパス
- **open:** 現在開いているボールト（`true`の場合）

デフォルトボールト設定:

```bash
# ボールト一覧表示
obsidian-cli list-vaults

# デフォルトボールトを設定（ボールト名はフォルダ名）
obsidian-cli set-default "MyVault"

# デフォルトボールトのパス取得
obsidian-cli print-default --path-only
```

## 主要機能

### ノート検索

ノート名で検索:

```bash
obsidian-cli search "Clawdbot"
```

出力例:
```
MyVault/Projects/Clawdbot Integration.md
MyVault/Daily Notes/2026-02-10.md
```

ノート内容で検索:

```bash
obsidian-cli search-content "API authentication"
```

出力例:
```
MyVault/Projects/API Design.md:15: API authentication via OAuth2
MyVault/Technical/Security.md:42: For API authentication, use JWT tokens
```

- **行番号表示:** 検索結果にマッチした行番号とスニペットを表示

### ノート作成

基本的なノート作成:

```bash
obsidian-cli create "Projects/New Feature" --content "Initial draft" --open
```

- **--content:** ノートの初期内容
- **--open:** 作成後、Obsidianアプリで開く

注意事項:
- ドットフォルダ（`.something/`）配下へのノート作成は、Obsidian URI制約により失敗する可能性がある
- フォルダが存在しない場合、自動的に作成される

### ノート移動・リネーム

```bash
obsidian-cli move "old/path/Note" "new/path/Note"
```

- **自動リンク更新:** ボールト内のすべての`[[wikilink]]`および通常のMarkdownリンクを自動更新
- ファイルシステムの`mv`コマンドと異なり、リンク整合性が保たれる

### ノート削除

```bash
obsidian-cli delete "path/to/Note"
```

- Obsidianのゴミ箱設定に従う（デフォルトは`.trash/`フォルダに移動）

### 直接ファイル編集

Obsidianボールトは通常のフォルダのため、直接ファイル編集も可能:

```bash
# ノートの内容を追記
echo "## New Section" >> ~/Documents/MyVault/Projects/Note.md

# エディタで開く
vim ~/Documents/MyVault/Projects/Note.md
```

Obsidianアプリは、ファイルシステムの変更を自動的に検知して反映する。

## 実装例

### 例1: 日次ノート自動作成

```bash
#!/bin/bash
# daily-note.sh

DATE=$(date +%Y-%m-%d)
VAULT_PATH=$(obsidian-cli print-default --path-only)
DAILY_NOTES_DIR="Daily Notes"

# 日次ノート作成
obsidian-cli create "${DAILY_NOTES_DIR}/${DATE}" \
  --content "# ${DATE}

## Tasks
- [ ] Review pull requests
- [ ] Update documentation

## Notes
" \
  --open
```

### 例2: プロジェクトテンプレート生成

```javascript
// create-project-note.js
const { execSync } = require('child_process');

function createProjectNote(projectName) {
  const template = `# ${projectName}

## Overview
[プロジェクトの概要]

## Goals
- Goal 1
- Goal 2

## Timeline
- Start: ${new Date().toISOString().split('T')[0]}
- End: TBD

## Resources
- [[Related Note 1]]
- [[Related Note 2]]

## Meeting Notes
`;

  const command = `obsidian-cli create "Projects/${projectName}" --content "${template}" --open`;
  execSync(command);
  console.log(`プロジェクトノート作成完了: ${projectName}`);
}

createProjectNote('AI Integration Project');
```

### 例3: ノート内容検索とタグ付け

```bash
#!/bin/bash
# tag-untagged-notes.sh

VAULT_PATH=$(obsidian-cli print-default --path-only)

# タグなしのノートを検索（frontmatterにtagsフィールドがない）
find "$VAULT_PATH" -name "*.md" -type f | while read -r file; do
  if ! grep -q "^tags:" "$file"; then
    echo "タグなし: $file"
    
    # タグを自動追加（例: #untagged）
    sed -i '' '1i\
---\
tags: [untagged]\
---\
' "$file"
  fi
done
```

### 例4: ノート間リンク自動生成

```javascript
// auto-link.js
const fs = require('fs');
const { execSync } = require('child_process');

function findRelatedNotes(keyword) {
  const result = execSync(`obsidian-cli search-content "${keyword}"`).toString();
  return result.split('\n').map(line => {
    const match = line.match(/^(.+?):/);
    return match ? match[1] : null;
  }).filter(Boolean);
}

function addLinksToNote(notePath, links) {
  const vaultPath = execSync('obsidian-cli print-default --path-only').toString().trim();
  const fullPath = `${vaultPath}/${notePath}`;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  
  const relatedSection = '\n## Related Notes\n' + 
    links.map(link => `- [[${link}]]`).join('\n');
  
  content += relatedSection;
  fs.writeFileSync(fullPath, content);
  
  console.log(`リンク追加完了: ${notePath}`);
}

const keyword = 'API Design';
const relatedNotes = findRelatedNotes(keyword);
addLinksToNote('Projects/API Documentation.md', relatedNotes);
```

### 例5: バックアップ自動化

```bash
#!/bin/bash
# backup-vault.sh

VAULT_PATH=$(obsidian-cli print-default --path-only)
BACKUP_DIR="$HOME/Backups/Obsidian"
TIMESTAMP=$(date +%Y%m%d-%H%M%S)

# バックアップディレクトリ作成
mkdir -p "$BACKUP_DIR"

# ボールトをtar.gz圧縮
tar -czf "$BACKUP_DIR/vault-backup-${TIMESTAMP}.tar.gz" -C "$(dirname "$VAULT_PATH")" "$(basename "$VAULT_PATH")"

echo "バックアップ完了: $BACKUP_DIR/vault-backup-${TIMESTAMP}.tar.gz"

# 30日以上古いバックアップを削除
find "$BACKUP_DIR" -name "vault-backup-*.tar.gz" -mtime +30 -delete
```

## ユースケース

### 個人ナレッジ管理

- **日次ノート自動作成:** 毎朝の作業開始時にテンプレート付きノート生成
- **タグ整理:** 未分類ノートへの自動タグ付け
- **リンク補完:** 関連ノートの自動リンク生成

### プロジェクト管理

- **プロジェクトテンプレート:** 新規プロジェクト開始時のノート構造自動生成
- **進捗追跡:** タスク完了状況をスクリプトで集計

### チーム協業（Obsidian Sync/Publish利用時）

- **共有ノート更新:** CI/CD連携でドキュメント自動更新
- **品質チェック:** リンク切れ検出、フォーマット統一

### 技術ドキュメント管理

- **API仕様書:** 自動生成スクリプトでSwagger/OpenAPIからMarkdownノート作成
- **コードスニペット収集:** Gitリポジトリからコードブロックをノートに抽出

## 制限事項・セキュリティ考慮事項

### 制限事項

- **URI制約:** Obsidian URIスキーム（`obsidian://`）は、ドットフォルダ配下のノート作成に失敗する場合がある
- **マルチボールト:** 複数ボールトを同時操作する場合、ボールト名を明示的に指定する必要がある
- **プラグイン依存:** Dataviewプラグイン等のクエリ機能は、obsidian-cliから直接実行不可（ファイル編集のみ）

### セキュリティ

- **ボールト暗号化:** Obsidianは標準で暗号化機能を提供しないため、機密情報は1Passwordやファイルシステム暗号化で保護
- **Obsidian Sync:** クラウド同期時は、エンドツーエンド暗号化が有効（Obsidian Sync有料機能）
- **アクセス制御:** ボールトフォルダのファイルシステム権限で制御

### ベストプラクティス

- **バックアップ:** 定期的なバックアップ（Git管理またはtar.gz圧縮）
- **ノート命名規則:** 検索性向上のため、一貫した命名規則を適用
- **テンプレート活用:** Core PluginsのTemplateまたはTemplaterプラグインでテンプレート管理
- **バージョン管理:** Git管理によるノート履歴追跡（`.obsidian/workspace.json`は除外推奨）

## 参考リンク

- Obsidian公式サイト: https://obsidian.md
- Obsidianヘルプ: https://help.obsidian.md
- obsidian-cli GitHub: https://github.com/yakitrak/obsidian-cli
- Clawdbot公式サイト: https://clawdbot.com

---

本記事の情報は2026年2月15日時点のものです。Obsidianアプリやobsidian-cliのアップデートにより、機能や制限事項が変更される可能性があります。最新情報は各公式サイトをご確認ください。
