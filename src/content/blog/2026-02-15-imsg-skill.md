---
title: "iMsg Skill - macOS Messages.appをCLIで操作するClawdbot機能"
description: "Clawdbot向けiMsg Skillを利用して、iMessageおよびSMSの送受信、履歴確認をコマンドラインから実行する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "iMessage", "SMS", "macOS", "Messages.app", "CLI"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot,iMessage,SMS,macOS,Messages.app,CLI,自動送信"
---

# iMsg Skill - macOS Messages.appをCLIで操作するClawdbot機能

macOSのMessages.appは、iMessageおよびSMS/MMSの送受信を一元管理するアプリケーションだが、コマンドラインからの操作は標準では提供されていない。iMsg Skillは、`imsg` CLIツール（https://imsg.to）を活用し、ClawdbotからMessages.appを操作可能にする機能である。

本記事では、iMsg Skillの技術仕様、設定方法、実装例について解説する。

## 選定基準

本記事の執筆にあたり、以下の基準でSkillを評価した。

- macOS環境における動作要件の確認
- iMsg CLI公式ドキュメント（https://imsg.to）に基づく仕様検証
- セキュリティおよびプライバシー設定の考慮

---

## 技術的仕様

### システム要件

iMsg Skillは以下の環境で動作する。

- **対応OS:** macOS（Darwin）のみ
- **必須コマンド:** `imsg`
- **必須設定:**
  - Messages.appへのサインイン
  - ターミナルに対するフルディスクアクセス権限
  - Messages.appの自動化権限（送信時）

### インストール方法

iMsgツールは、Homebrewを使用してインストールする。

```bash
brew install steipete/tap/imsg
```

インストール後、以下の権限設定が必要。

**1. フルディスクアクセス権限の付与**

`システム設定 > プライバシーとセキュリティ > フルディスクアクセス` で、使用するターミナルアプリ（Terminal.app、iTerm2等）を許可する。

**2. 自動化権限の付与**

メッセージ送信時、`システム設定 > プライバシーとセキュリティ > Automation` で、ターミナルアプリがMessages.appを制御することを許可する。

---

## 主要機能

### チャット一覧の取得

```bash
imsg chats --limit 10 --json
```

最新10件のチャットをJSON形式で取得する。出力には、チャットID、相手の識別子、最終メッセージ等が含まれる。

### メッセージ履歴の取得

```bash
imsg history --chat-id 1 --limit 20 --attachments --json
```

特定のチャット（`--chat-id`）から最新20件のメッセージを取得。`--attachments` オプションにより、添付ファイル情報も含まれる。

### リアルタイム監視

```bash
imsg watch --chat-id 1 --attachments
```

特定のチャットをリアルタイムで監視し、新しいメッセージが届くと即座に表示する。

### メッセージ送信

```bash
imsg send --to "+14155551212" --text "hi" --file /path/pic.jpg
```

指定した電話番号またはApple IDにメッセージを送信。`--file` オプションで画像等の添付ファイルを送信可能。

### サービス選択

```bash
imsg send --to "+14155551212" --text "hello" --service imessage
```

`--service` オプションで、以下の送信方法を指定できる。

- `imessage`: iMessage経由（インターネット接続が必要）
- `sms`: SMS/MMS経由（携帯電話回線を使用）
- `auto`: 自動判定（デフォルト）

---

## 実装例

### 例1: 最新のメッセージをテキストファイルに保存

```bash
#!/bin/bash
# 特定のチャットの最新50件のメッセージを保存

CHAT_ID=1
OUTPUT_FILE="/tmp/chat-history.txt"

imsg history --chat-id "$CHAT_ID" --limit 50 --json | \
  jq -r '.[] | "\(.date) \(.sender): \(.text)"' > "$OUTPUT_FILE"

echo "Chat history saved to $OUTPUT_FILE"
```

### 例2: 特定のキーワードを含むメッセージを検索

```bash
#!/bin/bash
# "meeting"というキーワードを含むメッセージを全チャットから検索

KEYWORD="meeting"

imsg chats --json | jq -r '.[].id' | while read -r chat_id; do
  imsg history --chat-id "$chat_id" --limit 100 --json | \
    jq -r --arg kw "$KEYWORD" '.[] | select(.text | contains($kw)) | "\(.date) \(.sender): \(.text)"'
done
```

### 例3: 定期的なメッセージ送信（リマインダー）

```bash
#!/bin/bash
# 毎日午前9時にリマインダーを送信（cronジョブとして実行）

RECIPIENT="+14155551212"
MESSAGE="Daily reminder: Team meeting at 10 AM"

imsg send --to "$RECIPIENT" --text "$MESSAGE" --service imessage

echo "Reminder sent to $RECIPIENT"
```

### 例4: 新着メッセージの自動通知

```bash
#!/bin/bash
# 特定のチャットを監視し、新着メッセージをログに記録

CHAT_ID=1
LOG_FILE="/var/log/imsg-monitor.log"

imsg watch --chat-id "$CHAT_ID" --attachments | while read -r line; do
  echo "$(date +%Y-%m-%d\ %H:%M:%S) - $line" >> "$LOG_FILE"
done
```

### 例5: 送信前の確認プロンプト付きメッセージ送信

```bash
#!/bin/bash
# 送信前に内容を確認

RECIPIENT="+14155551212"
MESSAGE="This is a test message"

echo "Recipient: $RECIPIENT"
echo "Message: $MESSAGE"
read -p "Send this message? (y/n): " confirm

if [ "$confirm" = "y" ]; then
  imsg send --to "$RECIPIENT" --text "$MESSAGE"
  echo "Message sent."
else
  echo "Cancelled."
fi
```

---

## ユースケース

### 自動通知システムの構築

サーバー監視やアプリケーションのアラート通知を、iMessageまたはSMS経由で送信する用途。メール通知と比較して、即座性が高く、モバイルデバイスへの到達率が高い。

### メッセージ履歴の分析・アーカイブ

重要なチャット履歴を定期的にバックアップし、テキスト形式で保存する用途。JSON出力を活用することで、後続の分析処理（感情分析、頻出単語抽出等）にも利用可能。

### カスタマーサポートの自動応答

事前に定義されたキーワードに対する自動返信や、営業時間外の案内メッセージを送信する用途。

### チーム内のリマインダー配信

定期的なミーティングのリマインダーや、期限が近いタスクの通知を自動送信する用途。

---

## 制限事項・セキュリティ考慮事項

### macOS専用

iMsg Skillは、macOSのMessages.appに依存するため、Linux、Windows環境では動作しない。

### プライバシー設定の影響

macOSのプライバシー設定により、ターミナルアプリに対するフルディスクアクセス権限が拒否されている場合、メッセージの読み取りができない。また、自動化権限がない場合、メッセージ送信が失敗する。

### Apple IDの認証状態

Messages.appがApple IDにサインインしていない場合、iMessageの送受信ができない。SMS/MMSを使用する場合は、Mac上でiPhoneの「テキストメッセージ転送」機能を有効にする必要がある。

### 送信時の誤送信リスク

コマンドラインからのメッセージ送信は、GUIと異なり確認画面が表示されない。送信先と内容を事前に確認するスクリプトの実装を推奨する（実装例5参照）。

### レート制限

iMessageおよびSMSは、短時間に大量のメッセージを送信すると、スパム対策として送信が制限される可能性がある。自動送信スクリプトを実装する際は、適切な送信間隔を設ける必要がある。

### データ保護

メッセージ履歴には個人情報や機密情報が含まれる可能性がある。ログファイルやバックアップデータの保存先には、適切なアクセス権限を設定する必要がある。

---

## 参考リンク

- iMsg公式サイト: https://imsg.to
- Homebrew: https://brew.sh
- Apple Messages.app公式ドキュメント: https://support.apple.com/guide/messages/welcome/mac
- macOSプライバシー設定ガイド: https://support.apple.com/guide/mac-help/mh32356/mac

---

本記事の情報は2026年2月15日時点のものです。各サービスの機能や仕様は変更される可能性があります。最新情報は各公式サイトをご確認ください。
