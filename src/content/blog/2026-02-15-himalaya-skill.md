---
title: "Himalaya Skill - ターミナルベースのメール管理をClawdbotに統合"
description: "Clawdbot向けHimalaya Skillを利用して、IMAP/SMTP対応のCLIメールクライアントによるメール送受信・検索・管理を実現する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Himalaya", "メール", "IMAP", "SMTP", "CLI", "プライバシー"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Himalaya, メール管理, IMAP, SMTP, CLI, ターミナル, プライバシー, MML, 暗号化"
---

# Himalaya Skill - ターミナルベースのメール管理をClawdbotに統合

## 概要

Clawdbot向けHimalaya Skillは、ターミナルからメールの送受信・検索・管理を実行する機能を提供するスキルである。pimalaya/himalayaプロジェクトが開発するCLIメールクライアント「Himalaya」をバックエンドとして利用し、IMAP/SMTP、Notmuch、Sendmailなど複数のバックエンドに対応する。

本スキルは、MML（MIME Meta Language）を使用したリッチテキストメール作成、複数アカウント管理、JSON/プレーン出力形式によるスクリプト統合に対応しており、プライバシー重視のメール運用を可能にする。

## 技術的仕様

### システム要件

- macOS / Linux / Windows（Rust環境が動作する環境）
- IMAP/SMTPサーバーへのアクセス権限
- 認証情報の管理ツール（`pass`、システムキーリング等、推奨）
- テキストエディタ（$EDITOR環境変数で指定）

### インストール方法

**Homebrew経由（macOS/Linux）:**
```bash
brew install himalaya
```

**cargo経由（クロスプラットフォーム）:**
```bash
cargo install himalaya
```

**バイナリダウンロード:**
GitHubのReleasesページから各OS向けのバイナリをダウンロードして配置する。

### 初期設定

**対話式ウィザードによる設定:**
```bash
himalaya account configure
```

このコマンドにより、メールアドレス、IMAPサーバー、SMTPサーバー、認証情報等を対話的に設定できる。

**手動設定（~/.config/himalaya/config.toml）:**
```toml
[accounts.personal]
email = "you@example.com"
display-name = "Your Name"
default = true

backend.type = "imap"
backend.host = "imap.example.com"
backend.port = 993
backend.encryption.type = "tls"
backend.login = "you@example.com"
backend.auth.type = "password"
backend.auth.cmd = "pass show email/imap"  # passwordコマンド経由で取得

message.send.backend.type = "smtp"
message.send.backend.host = "smtp.example.com"
message.send.backend.port = 587
message.send.backend.encryption.type = "start-tls"
message.send.backend.login = "you@example.com"
message.send.backend.auth.type = "password"
message.send.backend.auth.cmd = "pass show email/smtp"
```

## 主要機能

### 1. フォルダ管理

**フォルダ一覧:**
```bash
himalaya folder list
```

### 2. メール一覧表示

**INBOX（デフォルト）:**
```bash
himalaya envelope list
```

**特定フォルダ:**
```bash
himalaya envelope list --folder "Sent"
```

**ページネーション:**
```bash
himalaya envelope list --page 1 --page-size 20
```

### 3. メール検索

**送信者と件名で検索:**
```bash
himalaya envelope list from john@example.com subject meeting
```

### 4. メール閲覧

**プレーンテキスト表示:**
```bash
himalaya message read 42
```

**生のMIME形式エクスポート:**
```bash
himalaya message export 42 --full
```

### 5. メール返信

**返信（対話式エディタ）:**
```bash
himalaya message reply 42
```

**全員に返信:**
```bash
himalaya message reply 42 --all
```

### 6. メール転送

```bash
himalaya message forward 42
```

### 7. メール作成・送信

**対話式作成（$EDITORで編集）:**
```bash
himalaya message write
```

**テンプレートから送信:**
```bash
cat << 'EOF' | himalaya template send
From: you@example.com
To: recipient@example.com
Subject: Test Message

Hello from Himalaya!
EOF
```

**ヘッダー指定で送信:**
```bash
himalaya message write -H "To:recipient@example.com" -H "Subject:Test" "Message body here"
```

### 8. メール移動・コピー

**移動:**
```bash
himalaya message move 42 "Archive"
```

**コピー:**
```bash
himalaya message copy 42 "Important"
```

### 9. メール削除

```bash
himalaya message delete 42
```

### 10. フラグ管理

**既読フラグ追加:**
```bash
himalaya flag add 42 --flag seen
```

**既読フラグ削除:**
```bash
himalaya flag remove 42 --flag seen
```

### 11. 添付ファイル管理

**添付ファイルダウンロード:**
```bash
himalaya attachment download 42
```

**保存先指定:**
```bash
himalaya attachment download 42 --dir ~/Downloads
```

### 12. 複数アカウント管理

**アカウント一覧:**
```bash
himalaya account list
```

**特定アカウントで実行:**
```bash
himalaya --account work envelope list
```

### 13. 出力形式

**JSON形式（スクリプト統合）:**
```bash
himalaya envelope list --output json
```

**プレーン形式:**
```bash
himalaya envelope list --output plain
```

## 実装例

### 例1: 未読メール件数の取得（Bash）

```bash
#!/bin/bash
# unread-count.sh

UNREAD_COUNT=$(himalaya envelope list --output json | jq '[.[] | select(.flags | contains(["seen"]) | not)] | length')

echo "未読メール: ${UNREAD_COUNT}件"
```

### 例2: Node.jsによるメール送信

```javascript
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

async function sendEmail(to, subject, body) {
  const message = `From: you@example.com
To: ${to}
Subject: ${subject}

${body}
`;

  try {
    const command = `echo '${message}' | himalaya template send`;
    await execPromise(command);
    console.log(`メール送信完了: ${to}`);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

// 使用例
sendEmail('recipient@example.com', 'テストメール', 'Himalayaからのテストメッセージです。');
```

### 例3: 日次メール要約レポート（Bash）

```bash
#!/bin/bash
# daily-email-summary.sh

DATE=$(date +%Y-%m-%d)
OUTPUT_FILE="email-summary-${DATE}.txt"

echo "メール要約レポート ${DATE}" > "$OUTPUT_FILE"
echo "==============================" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

echo "未読メール:" >> "$OUTPUT_FILE"
himalaya envelope list --output plain | grep -v "seen" >> "$OUTPUT_FILE"

echo "" >> "$OUTPUT_FILE"
echo "今日受信したメール:" >> "$OUTPUT_FILE"
himalaya envelope list --output json | \
  jq -r '.[] | select(.date | startswith("'$DATE'")) | "\(.from) - \(.subject)"' >> "$OUTPUT_FILE"

echo "レポートを${OUTPUT_FILE}に保存しました"
```

### 例4: Clawdbot統合スクリプト（自動メール返信）

```javascript
// auto-reply.js
const { exec } = require('child_process');
const util = require('util');
const fs = require('fs').promises;
const execPromise = util.promisify(exec);

async function autoReplyToUnread() {
  try {
    // 未読メール一覧を取得
    const { stdout } = await execPromise('himalaya envelope list --output json');
    const emails = JSON.parse(stdout);
    
    const unreadEmails = emails.filter(email => !email.flags.includes('seen'));
    
    for (const email of unreadEmails) {
      // 特定の件名パターンに一致する場合のみ自動返信
      if (email.subject.includes('自動返信希望')) {
        const replyBody = `
ご連絡ありがとうございます。

こちらは自動返信メッセージです。
担当者より後ほどご連絡いたします。

よろしくお願いいたします。
`;
        
        await execPromise(`himalaya message reply ${email.id} --body "${replyBody}"`);
        console.log(`自動返信送信: ${email.subject}`);
      }
    }
  } catch (error) {
    console.error('Error in auto-reply:', error);
  }
}

autoReplyToUnread();
```

### 例5: 添付ファイル一括ダウンロード（Bash）

```bash
#!/bin/bash
# download-attachments.sh

DOWNLOAD_DIR="$HOME/Downloads/email-attachments"
mkdir -p "$DOWNLOAD_DIR"

# 特定のフォルダ（例: "仕事"）のメール一覧を取得
EMAIL_IDS=$(himalaya envelope list --folder "仕事" --output json | jq -r '.[].id')

for email_id in $EMAIL_IDS; do
  echo "処理中: メールID ${email_id}"
  himalaya attachment download "$email_id" --dir "$DOWNLOAD_DIR"
done

echo "すべての添付ファイルを${DOWNLOAD_DIR}にダウンロードしました"
```

## ユースケース

### 1. プライバシー重視のメール運用
GmailやOutlook.comなどのWebメールを利用せず、ターミナルからプライバシーを保護しながらメールを管理する。

### 2. メール自動化・スクリプト統合
定期的にメールをチェックし、特定条件に一致するメールを自動分類・転送・アーカイブする。

### 3. 複数アカウントの一元管理
個人用、仕事用、プロジェクト用など複数のメールアカウントを1つのインターフェースで管理する。

### 4. オフライン環境でのメール作成
インターネット接続がない環境でメールを作成し、接続回復後に一括送信する。

## 制限事項・セキュリティ考慮事項

### 制限事項

1. **リッチテキスト制限**: HTMLメールの作成にはMML（MIME Meta Language）の知識が必要
2. **メールID依存**: メールIDは現在のフォルダに相対的であり、フォルダ変更後は再度リスト表示が必要
3. **対話式UI**: 多くの操作が対話式エディタを必要とするため、完全自動化には工夫が必要
4. **添付ファイルサイズ**: 大容量の添付ファイル送信時にタイムアウトする可能性がある

### セキュリティ考慮事項

1. **認証情報の保護**:
   - 設定ファイル（`~/.config/himalaya/config.toml`）に平文でパスワードを保存しないこと
   - `pass`、システムキーリング、1Password CLI等のシークレット管理ツールを利用すること
   - 例: `backend.auth.cmd = "pass show email/imap"`

2. **TLS/SSL暗号化**:
   - IMAP/SMTP接続には必ずTLS/SSL暗号化を使用すること
   - `backend.encryption.type = "tls"`または`"start-tls"`を設定

3. **設定ファイルのパーミッション**:
   - `~/.config/himalaya/config.toml`のパーミッションを600に設定
   ```bash
   chmod 600 ~/.config/himalaya/config.toml
   ```

4. **ログ出力の管理**:
   - デバッグモード（`RUST_LOG=debug`）実行時にログに認証情報が含まれる可能性がある
   - 本番環境ではデバッグログを無効化すること

5. **共有環境での利用**:
   - SSH経由でアクセスされる環境では、設定ファイルやキャッシュの漏洩リスクに注意
   - 必要に応じて環境変数で認証情報を渡す方法を検討

6. **メール本文の暗号化**:
   - 機密情報を含むメールはPGP等で暗号化することを推奨
   - HimalayaはPGP統合をサポートしていないため、外部ツール（gnupg等）との併用が必要

## 参考リンク

- Himalaya GitHub: https://github.com/pimalaya/himalaya
- pimalayaプロジェクト: https://pimalaya.org/
- MML（MIME Meta Language）仕様: https://www.gnu.org/software/emacs/manual/html_node/emacs-mime/MML-Definition.html
- pass（パスワード管理ツール）: https://www.passwordstore.org/
- Clawdbot公式サイト: https://clawdbot.com

---

本記事の情報は2026年2月15日時点のものです。各ツールの機能や仕様は変更される可能性があります。最新情報は各公式サイトおよびGitHubリポジトリをご確認ください。
