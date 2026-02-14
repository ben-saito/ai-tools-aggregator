---
title: "OrderCLI Skill - フードデリバリー注文追跡をCLIで実現するClawdbotスキル"
description: "Clawdbot向けOrderCLI Skillを利用して、Foodora注文の履歴確認、配送状況追跡、再注文をコマンドラインから実行する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "OrderCLI", "Foodora", "Deliveroo", "フードデリバリー", "CLI"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, OrderCLI Skill, Foodora, Deliveroo, フードデリバリー, CLI, 配送追跡"
---

## 概要

OrderCLI Skillは、Clawdbotフレームワーク内でフードデリバリーサービス（Foodora、Deliveroo）の注文履歴確認、配送状況追跡、再注文をコマンドラインから実行するためのスキルである。`ordercli` CLIツールを利用し、過去注文の確認と配送中の注文のリアルタイム監視を実現する。

本スキルは、Foodoraを主要サポート対象とし、Deliverooは開発中（WIP: Work In Progress）である。注文の再注文機能は、確認ステップ（`--confirm`フラグ）を必須とする安全設計である。

公式サイトは https://ordercli.sh で公開されている。

### 技術的背景

フードデリバリーサービスの注文履歴や配送状況は、通常、スマートフォンアプリまたはWebブラウザで確認する。OrderCLIは、これをコマンドラインで実行できるようにし、スクリプト化や自動化を可能にする。

提供される主要機能は以下の通り:
- 過去注文履歴の取得（JSON出力対応）
- アクティブな注文の配送状況確認（ETA表示）
- リアルタイムウォッチモード（配送状況の自動更新）
- 過去注文の再注文（プレビュー・確定）
- ブラウザCookie認証（パスワード不要）

## 技術的仕様

### システム要件

- Homebrew（macOS）またはGo言語実行環境
- Foodoraアカウント（対応国: AT, DE等）
- オプション: Chromeまたは互換ブラウザ（Cookie認証時）

### インストール方法

**Homebrew経由（macOS）:**
```bash
brew install steipete/tap/ordercli
```

**Go経由（クロスプラットフォーム）:**
```bash
go install github.com/steipete/ordercli/cmd/ordercli@latest
```

### 初期設定（Foodora）

**1. 対応国の確認:**
```bash
ordercli foodora countries
```

**2. 国設定:**
```bash
ordercli foodora config set --country AT
```

**3. ログイン（パスワード認証）:**
```bash
ordercli foodora login --email you@example.com --password-stdin
```

**4. ログイン（ブラウザCookie認証、推奨）:**
```bash
ordercli foodora session chrome --url https://www.foodora.at/ --profile "Default"
```

ブラウザでログイン済みの場合、Cookieを再利用できる。

## 主要機能

### 注文履歴の確認

**最近の注文一覧:**
```bash
ordercli foodora history --limit 20
```

**特定注文の詳細:**
```bash
ordercli foodora history show <orderCode>
```

**JSON形式で出力（スクリプト用）:**
```bash
ordercli foodora history show <orderCode> --json
```

### アクティブな注文の追跡

**配送中の注文一覧:**
```bash
ordercli foodora orders
```

出力例:
```
Order Code: ABC123
Restaurant: Pizza House
Status: In Delivery
ETA: 15 minutes
Driver: John D.
```

**リアルタイムウォッチモード:**
```bash
ordercli foodora orders --watch
```

画面が定期的に更新され、配送状況の変化を追跡できる。

**特定注文の詳細:**
```bash
ordercli foodora order <orderCode>
```

### 再注文（プレビューモード）

注文内容を確認し、カートには追加しない:
```bash
ordercli foodora reorder <orderCode>
```

出力例:
```
Order Code: ABC123
Restaurant: Pizza House
Items:
  - Margherita Pizza (€12.50)
  - Coca-Cola (€2.50)
Total: €15.00
Delivery Address: 123 Main St, Vienna
```

### 再注文（確定モード）

ユーザーが明示的に承認した場合のみ実行:
```bash
ordercli foodora reorder <orderCode> --confirm
```

複数配送先がある場合、住所IDを指定:
```bash
ordercli foodora reorder <orderCode> --confirm --address-id <id>
```

### Cloudflare Bot保護の回避

Foodoraは、自動化ツール検知のためCloudflare Bot保護を採用している。通常のログインで失敗する場合、以下の回避策を使用:

**ブラウザログイン:**
```bash
ordercli foodora login --email you@example.com --password-stdin --browser
```

**ブラウザプロファイル指定:**
```bash
ordercli foodora login --email you@example.com --password-stdin --browser \
  --browser-profile "$HOME/Library/Application Support/ordercli/browser-profile"
```

**Chrome Cookieインポート:**
```bash
ordercli foodora cookies chrome --profile "Default"
```

### セッションインポート

パスワード入力不要の認証:
```bash
ordercli foodora session chrome --url https://www.foodora.at/ --profile "Default"
```

**セッションリフレッシュ:**
```bash
ordercli foodora session refresh --client-id android
```

### Deliveroo（開発中）

Deliverooは現在WIP（Work In Progress）であり、動作保証はない。

**必要な環境変数:**
- `DELIVEROO_BEARER_TOKEN`（必須）
- `DELIVEROO_COOKIE`（オプション）

**初期設定:**
```bash
ordercli deliveroo config set --market uk
```

**注文履歴:**
```bash
ordercli deliveroo history
```

## 実装例

### 例1: 最新注文の再注文（確認プロンプト付き）

```bash
#!/bin/bash
# 最も最近の注文を再注文（確認プロンプト付き）
LATEST=$(ordercli foodora history --limit 1 --json | jq -r '.[0].code')
echo "Latest order: $LATEST"
ordercli foodora reorder "$LATEST"

read -p "Confirm order? (yes/no): " CONFIRM
if [ "$CONFIRM" = "yes" ]; then
  ordercli foodora reorder "$LATEST" --confirm
  echo "Order placed!"
else
  echo "Order cancelled."
fi
```

### 例2: 配送状況をSlack通知

```bash
#!/bin/bash
# 配送中の注文を監視し、ETA変化時にSlack通知
PREV_ETA=""
while true; do
  CURRENT_ETA=$(ordercli foodora orders --json | jq -r '.[0].eta')
  if [ "$CURRENT_ETA" != "$PREV_ETA" ]; then
    curl -X POST https://hooks.slack.com/services/YOUR/WEBHOOK/URL \
      -H 'Content-Type: application/json' \
      -d "{\"text\":\"Delivery ETA updated: $CURRENT_ETA\"}"
    PREV_ETA="$CURRENT_ETA"
  fi
  sleep 60
done
```

### 例3: 過去30日間の注文統計

```bash
#!/bin/bash
# 過去30日間の注文回数とトータル金額を集計
ordercli foodora history --limit 100 --json | \
  jq '[.[] | select(.date | fromdateiso8601 > (now - 2592000))] | {count: length, total: ([.[].total] | add)}'
```

### 例4: レストラン別注文回数ランキング

```bash
#!/bin/bash
# 過去の注文をレストラン別に集計
ordercli foodora history --limit 100 --json | \
  jq -r '.[].restaurant_name' | \
  sort | uniq -c | sort -rn | head -10
```

### 例5: 複数住所管理（自宅/職場）

```bash
#!/bin/bash
# 自宅と職場の住所を管理
HOME_ADDR="addr_home_123"
OFFICE_ADDR="addr_office_456"

# ランチは職場、ディナーは自宅
HOUR=$(date +%H)
if [ "$HOUR" -lt 14 ]; then
  ordercli foodora reorder "lunch_order" --confirm --address-id "$OFFICE_ADDR"
else
  ordercli foodora reorder "dinner_order" --confirm --address-id "$HOME_ADDR"
fi
```

## ユースケース

### 定期的な再注文

お気に入りのレストラン・メニューを繰り返し注文する場合、注文コードを保存しておくことで、ワンコマンドで再注文できる。週次のチーム昼食、毎週末のピザ注文等に有用。

### 注文履歴の分析

過去の注文をJSON形式でエクスポートし、支出分析、レストラン別注文回数、平均注文金額等を算出。家計管理や経費精算に活用。

### 配送追跡自動化

配送中の注文を自動監視し、ETA更新時にSlack、Discord、メール等で通知。在宅勤務中の受け取りタイミング調整に有用。

### チーム昼食の一括注文

企業やコワーキングスペースで、チームメンバーの注文を一括管理。スクリプトで複数注文を順次実行し、配送状況を一元監視。

## 制限事項・セキュリティ考慮事項

### 対応サービス

現時点で完全サポートされているのはFoodoraのみ。Deliverooは開発中（WIP）であり、動作保証はない。

### Cloudflare Bot保護

Foodoraは、自動化ツール検知のためCloudflare Bot保護を採用している。通常のログインで失敗する場合、ブラウザログイン（`--browser`）またはChrome Cookieインポートを使用。

### 注文確定の安全性

`--confirm`フラグなしでは、注文は確定されない。スクリプト実行時は、誤操作防止のため、必ずプレビューステップを挟むことを推奨。

### 認証情報の管理

パスワードやセッショントークンは、環境変数またはテスト用設定ファイル（`--config /tmp/ordercli.json`）で管理する。公開リポジトリへのコミット禁止。

### レート制限

短時間での大量リクエストは、Foodora側でレート制限またはアカウント一時停止の対象となる可能性がある。自動化スクリプトには適切な遅延（`sleep`）を設定すること。

### 複数住所の事前登録

`--address-id`で指定する住所は、Foodoraアカウントに事前登録されている必要がある。スクリプトからの新規住所登録は未対応。

### テスト環境の推奨

本番アカウントでの実験を避けるため、テスト用設定ファイルの使用を推奨:
```bash
ordercli --config /tmp/ordercli.json foodora history
```

### Deliverooの制限

Deliverooサポートは現在WIP。`DELIVEROO_BEARER_TOKEN`の取得方法は公式ドキュメントに記載されていないため、実験的な利用に留めること。

## 参考リンク

- 公式サイト: https://ordercli.sh
- GitHub: https://github.com/steipete/ordercli
- Homebrew: https://github.com/steipete/homebrew-tap
- Foodora: https://www.foodora.at/
- Deliveroo: https://www.deliveroo.com/

---

本記事の情報は2026年2月15日時点のものです。OrderCLI Skillの機能、対応サービス、認証方法は変更される可能性があります。最新情報は公式サイト（https://ordercli.sh）をご確認ください。注文確定操作は実際の決済を伴うため、プレビュー機能を必ず使用し、内容を十分に確認してから実行してください。
