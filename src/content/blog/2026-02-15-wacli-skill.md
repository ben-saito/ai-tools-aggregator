---
title: "WaCLI Skill - WhatsAppメッセージ送信と履歴同期をCLIで実現"
description: "Clawdbot向けWaCLI Skillを利用して、WhatsAppメッセージの自動送信、チャット履歴検索、バックフィル機能を実装する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "WhatsApp", "WaCLI", "メッセージ自動化", "CLI", "チャット履歴"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, WaCLI, WhatsApp, CLI, メッセージ送信, チャット履歴, 自動化, API"
---

# WaCLI Skill - WhatsAppメッセージ送信と履歴同期をCLIで実現

2026年現在、WhatsAppは世界で約30億ユーザーを抱える主要なメッセージングプラットフォームである。しかし、公式APIはビジネスアカウント向けに制限されており、個人アカウントでのプログラマティックな操作は非公式ツールに依存する必要がある。

WaCLI（https://wacli.sh）は、WhatsApp Web APIを活用し、コマンドラインからWhatsAppの送信、チャット履歴同期、メッセージ検索を可能にするオープンソースツールである。Clawdbot向けWaCLI Skillは、このツールをClawdbot環境に統合し、自動化されたメッセージング機能を提供する。

本記事では、WaCLI Skillの技術的仕様、導入方法、実装パターン、および安全な運用方法を解説する。

## 選定基準

本記事で解説するWaCLI Skillは、以下の特性を持つ:

- WhatsApp公式Web APIを活用（非公式だが広く利用されている実装）
- CLIベースの操作（スクリプト化・自動化が容易）
- QRコード認証による安全なログイン
- チャット履歴の検索・同期機能

---

## 技術的背景

### WaCLIとは

WaCLI（https://wacli.sh）は、steipete氏が開発したWhatsApp Web APIのCLIラッパーである。Go言語で実装されており、WhatsApp WebのプロトコルをリバースエンジニアリングしてCLI操作を実現している。

GitHubリポジトリ: https://github.com/steipete/wacli

### 動作原理

WaCLIは、以下のステップでWhatsAppと通信する:

1. QRコード認証によるセッション確立
2. WhatsApp Web APIを通じたメッセージ送受信
3. ローカルデータベース（`~/.wacli`）へのチャット履歴保存

WhatsApp公式は非公式クライアントの使用を禁止していないが、過度な自動化はアカウント制限の対象となる可能性がある。

---

## システム要件とインストール方法

### 動作環境

- OS: macOS、Linux、Windows
- Go: 1.21以上（Go経由でインストールする場合）
- Homebrew（macOS/Linux、推奨インストール方法）

### インストール手順

WaCLI Skillは、以下の2つの方法でインストールできる。

**方法1: Homebrew（推奨）**

```bash
brew tap steipete/tap
brew install wacli
```

**方法2: Go（クロスプラットフォーム）**

```bash
go install github.com/steipete/wacli/cmd/wacli@latest
```

インストール後、以下のコマンドで動作確認:

```bash
wacli --version
```

### 初回認証

WaCLIを使用する前に、QRコード認証と初回同期が必要である。

```bash
wacli auth
```

このコマンドは、ターミナルにQRコードを表示する。WhatsAppアプリ（スマートフォン）の「リンク済みデバイス」からQRコードをスキャンし、認証を完了する。認証情報は`~/.wacli`に保存される。

---

## 主要機能とコマンド例

### 認証と同期

**初回認証とチャット履歴の初回同期:**

```bash
wacli auth
```

**継続的な同期（新規メッセージの取得）:**

```bash
wacli sync --follow
```

**システム診断（認証状態の確認）:**

```bash
wacli doctor
```

### チャット一覧の取得

```bash
# 最新20件のチャットを表示
wacli chats list --limit 20

# 名前または電話番号で検索
wacli chats list --limit 20 --query "John"
```

### メッセージ検索

**全チャットからキーワード検索:**

```bash
wacli messages search "invoice" --limit 20
```

**特定チャット内で検索:**

```bash
wacli messages search "query" --limit 20 --chat <jid>
```

**日付範囲指定検索:**

```bash
wacli messages search "invoice" --after 2025-01-01 --before 2025-12-31
```

### メッセージ送信

**テキストメッセージ送信:**

```bash
# 個人チャット
wacli send text --to "+14155551212" --message "Hello! Are you free at 3pm?"

# グループチャット
wacli send text --to "1234567890-123456789@g.us" --message "Running 5 min late."
```

**ファイル送信:**

```bash
wacli send file --to "+14155551212" --file /path/to/agenda.pdf --caption "Agenda for today's meeting"
```

### 履歴バックフィル

WhatsAppのチャット履歴をローカルデータベースに取得する。

```bash
wacli history backfill --chat <jid> --requests 2 --count 50
```

注意: バックフィルには、スマートフォンがオンラインである必要がある。

---

## 実装例

### 例1: Node.jsからのメッセージ送信

Clawdbotのスキル内で、`child_process`を使ってメッセージを送信する。

```javascript
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function sendWhatsAppMessage(recipient, message) {
  const command = `wacli send text --to "${recipient}" --message "${message}"`;
  const { stdout, stderr } = await execAsync(command);
  if (stderr) throw new Error(stderr);
  return stdout;
}

// 使用例
await sendWhatsAppMessage("+14155551212", "Reminder: Meeting at 3pm");
console.log("Message sent successfully");
```

### 例2: チャット履歴検索と結果のJSON解析

```javascript
async function searchMessages(query, limit = 20) {
  const command = `wacli messages search "${query}" --limit ${limit} --json`;
  const { stdout } = await execAsync(command);
  return JSON.parse(stdout);
}

// 使用例
const results = await searchMessages("invoice", 10);
results.forEach(msg => {
  console.log(`[${msg.timestamp}] ${msg.from}: ${msg.text}`);
});
```

### 例3: 送信前の確認プロンプト

安全性を確保するため、送信前にユーザー確認を実装する。

```javascript
import readline from 'readline';

function askConfirmation(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => {
    rl.question(question, answer => {
      rl.close();
      resolve(answer.toLowerCase() === 'y');
    });
  });
}

async function sendWithConfirmation(recipient, message) {
  console.log(`Recipient: ${recipient}`);
  console.log(`Message: ${message}`);
  const confirmed = await askConfirmation("Send this message? (y/n): ");
  if (!confirmed) {
    console.log("Message sending cancelled.");
    return;
  }
  await sendWhatsAppMessage(recipient, message);
  console.log("Message sent.");
}

// 使用例
await sendWithConfirmation("+14155551212", "Test message");
```

### 例4: グループチャットへの定期通知

特定のグループに毎日の通知を送る。

```bash
#!/bin/bash

GROUP_JID="1234567890-123456789@g.us"
MESSAGE="Daily standup reminder: Please share your updates in 30 minutes."

wacli send text --to "$GROUP_JID" --message "$MESSAGE"
```

### 例5: チャット履歴のバックアップ

全チャットの履歴をJSON形式でエクスポートする。

```bash
#!/bin/bash

OUTPUT_DIR="./whatsapp_backup_$(date +%Y%m%d)"
mkdir -p "$OUTPUT_DIR"

# 全チャット一覧を取得
wacli chats list --json > "$OUTPUT_DIR/chats.json"

# 各チャットのメッセージを取得（例: 最新1000件）
cat "$OUTPUT_DIR/chats.json" | jq -r '.[].jid' | while read JID; do
  wacli messages search "" --chat "$JID" --limit 1000 --json > "$OUTPUT_DIR/${JID}.json"
done

echo "Backup completed: $OUTPUT_DIR"
```

---

## ユースケース

### 自動リマインダー送信

会議やタスクのリマインダーを自動的にWhatsAppで送信する。

### カスタマーサポート自動化

特定のキーワードを検出し、自動応答を送信する（注意: WhatsApp利用規約に違反しないよう制限を設ける）。

### チャット履歴の全文検索

過去のチャット履歴から重要な情報（請求書、契約内容等）を検索・抽出する。

### ビジネスレポート配信

日次・週次のレポートをグループチャットに自動投稿する。

---

## 制限事項とセキュリティ考慮事項

### 制限事項

- 非公式APIのため、WhatsApp公式のアップデートにより動作しなくなる可能性がある
- 過度な自動送信はアカウント制限（一時的または永久的なBANの可能性）
- バックフィル機能は、スマートフォンがオンラインの場合のみ動作
- 認証セッションは定期的に再認証が必要な場合がある

### セキュリティ考慮事項

**認証情報の保護:**

WaCLIの認証情報は`~/.wacli`に保存される。このディレクトリは適切なアクセス権限（600または700）で保護すること。

```bash
chmod 700 ~/.wacli
```

**送信前の確認:**

誤送信を防ぐため、必ず以下を確認する:

- 送信先の電話番号またはグループJIDが正しいか
- メッセージ内容に機密情報が含まれていないか

**レート制限の遵守:**

WhatsAppは過度な自動送信を検出し、アカウントを制限する。1時間あたり10-20件程度の送信に留めることを推奨する。

**第三者への情報開示:**

WaCLIはローカルで動作するが、チャット履歴をエクスポートする際は、個人情報保護法（GDPR、日本の個人情報保護法等）を遵守すること。

---

## 参考リンク

- WaCLI公式サイト: https://wacli.sh
- WaCLI GitHubリポジトリ: https://github.com/steipete/wacli
- Clawdbot公式サイト: https://clawdbot.com/

---

本記事の情報は2026年2月15日時点のものです。WaCLIの機能、WhatsApp Web APIの仕様は変更される可能性があります。最新情報は各公式サイトをご確認ください。また、WaCLIは非公式ツールであり、WhatsApp公式のサポート対象外です。利用は自己責任で行ってください。
