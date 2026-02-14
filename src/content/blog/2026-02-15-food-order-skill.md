---
title: "Food Order Skill - Foodora再注文をCLIで実現するClawdbotスキル"
description: "Clawdbot向けFood Order Skillを利用して、Foodoraの過去注文の再注文、配送状況追跡をコマンドラインから安全に実行する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Food Order", "Foodora", "ordercli", "フードデリバリー自動化"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Food Order Skill, Foodora, ordercli, フードデリバリー自動化, CLI"
---

## 概要

Food Order Skillは、Clawdbotフレームワーク内でFoodoraの注文操作をコマンドラインから実行するためのスキルである。`ordercli`ツールを利用し、過去の注文履歴の確認、再注文、配送状況のリアルタイム追跡を実現する。

本スキルの最大の特徴は、安全性を重視した設計である。注文確定操作（`--confirm`フラグ）は、ユーザーの明示的な承認なしには実行されない。プレビュー機能により、注文内容を事前確認してから確定できる。

公式サイトは https://ordercli.sh で公開されている。

### 技術的背景

フードデリバリーサービスの再注文は、手動操作が煩雑である。過去の注文を探し、商品を再選択し、住所・支払い方法を再入力する必要がある。Food Order Skillは、この一連の操作をコマンド一つで実行できる。

提供される主要機能は以下の通り:
- 過去注文履歴の取得
- 注文詳細の確認
- 過去注文の再注文（プレビュー・確定）
- 配送状況のリアルタイム追跡（ETA表示）
- 複数配送先住所の管理

## 技術的仕様

### システム要件

- Go言語実行環境（Goインストール経由の場合）
- Foodoraアカウント（対応国: AT, DE等）
- ブラウザ（Chromeまたは互換ブラウザ、セッション認証時）

### インストール方法

**Go経由:**
```bash
go install github.com/steipete/ordercli/cmd/ordercli@latest
```

インストール後、`ordercli`コマンドがPATHに追加される。

### 初期設定

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

標準入力からパスワードを読み取るため、シェルヒストリーに残らない。

**4. ログイン（セッション認証、推奨）:**
```bash
ordercli foodora session chrome --url https://www.foodora.at/ --profile "Default"
```

ブラウザでログイン済みの場合、セッション情報を再利用できる。パスワード入力不要。

## 主要機能

### 過去注文の確認

**最近の注文一覧（デフォルト10件）:**
```bash
ordercli foodora history --limit 10
```

**注文詳細の表示:**
```bash
ordercli foodora history show <orderCode>
```

**JSON形式で出力（スクリプト用）:**
```bash
ordercli foodora history show <orderCode> --json
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

### 配送状況の追跡

**アクティブな注文一覧:**
```bash
ordercli foodora orders
```

出力例:
```
Order Code: XYZ789
Restaurant: Burger King
Status: In Delivery
ETA: 15 minutes
Driver: John D.
```

**リアルタイム更新（ウォッチモード）:**
```bash
ordercli foodora orders --watch
```

画面が定期的に更新され、配送状況の変化を追跡できる。

**特定注文の詳細:**
```bash
ordercli foodora order <orderCode>
```

## 実装例

### 例1: お気に入りの注文を簡単再注文

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

### 例2: 毎週金曜日の自動ピザ注文（Cron連携）

```bash
#!/bin/bash
# Cron設定: 0 18 * * 5（毎週金曜18時）
# 特定の注文コードを再注文
PIZZA_ORDER="ABC123"
ordercli foodora reorder "$PIZZA_ORDER" --confirm --address-id home
```

### 例3: 配送状況をSlack通知

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

### 例4: 過去30日間の注文統計

```bash
#!/bin/bash
# 過去30日間の注文回数とトータル金額を集計
ordercli foodora history --limit 100 --json | \
  jq '[.[] | select(.date | fromdateiso8601 > (now - 2592000))] | {count: length, total: ([.[].total] | add)}'
```

### 例5: 複数住所管理

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

現時点でサポートされているのはFoodoraのみ。ドキュメントにはDeliveroo対応が記載されているが、「WIP（Work In Progress）」とされており、動作保証はない。

### Cloudflare Bot保護

Foodoraは、自動化ツール検知のためCloudflare Bot保護を採用している。通常のログインで失敗する場合、以下の回避策を使用:

**ブラウザログイン:**
```bash
ordercli foodora login --email you@example.com --password-stdin --browser
```

**Chrome Cookieインポート:**
```bash
ordercli foodora cookies chrome --profile "Default"
```

### 注文確定の安全性

`--confirm`フラグなしでは、注文は確定されない。スクリプト実行時は、誤操作防止のため、必ずプレビューステップを挟むことを推奨。

### 認証情報の管理

パスワードやセッショントークンは、環境変数またはテスト用設定ファイル（`--config /tmp/ordercli.json`）で管理する。公開リポジトリへのコミット禁止。

### レート制限

短時間での大量リクエストは、Foodora側でレート制限またはアカウント一時停止の対象となる可能性がある。自動化スクリプトには適切な遅延（`sleep`）を設定すること。

### 複数住所の事前登録

`--address-id`で指定する住所は、Foodoraアカウントに事前登録されている必要がある。スクリプトからの新規住所登録は未対応。

## 参考リンク

- 公式サイト: https://ordercli.sh
- GitHub: https://github.com/steipete/ordercli
- Homebrew: https://github.com/steipete/homebrew-tap
- Foodora: https://www.foodora.at/

---

本記事の情報は2026年2月15日時点のものです。Food Order Skillの機能、対応サービス、認証方法は変更される可能性があります。最新情報は公式サイト（https://ordercli.sh）をご確認ください。注文確定操作は実際の決済を伴うため、プレビュー機能を必ず使用し、内容を十分に確認してから実行してください。
