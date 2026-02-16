---
title: "GoPlaces Skill - Google Places API操作をCLIで実現するClawdbotスキル"
description: "Clawdbot向けGoPlaces Skillを利用して、Google Places API（New）による店舗検索、詳細取得、位置情報解決をコマンドラインから実行する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "GoPlaces", "Google Places API", "位置情報", "店舗検索", "CLI"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, GoPlaces Skill, Google Places API, 店舗検索, 位置情報, CLI"
---

## 概要

GoPlaces Skillは、Clawdbotフレームワーク内でGoogle Places API（New）を利用した店舗検索、位置情報解決、レビュー取得をコマンドラインから実行するためのスキルである。`goplaces` CLIツールを利用し、人間が読みやすいテキスト出力とJSON形式の両方をサポートする。

本スキルは、Google Places APIの最新バージョン（Places API New）に対応しており、従来のPlaces APIより高速かつ詳細な情報を提供する。レストラン、カフェ、観光地等、あらゆる種類の場所を検索できる。

公式リポジトリは https://github.com/steipete/goplaces で公開されている。

### 技術的背景

Google Places APIは、店舗・施設の検索、詳細情報取得、レビュー取得を提供する。従来のPlaces APIは2023年に非推奨となり、Places API（New）が推奨されている。GoPlacesは、この新APIに対応した初期のCLIツールの一つである。

提供される主要機能は以下の通り:
- テキスト検索（キーワード、営業中フィルタ、評価フィルタ）
- 位置情報解決（住所・地名からPlace IDと座標取得）
- 詳細情報取得（営業時間、電話番号、レビュー等）
- 位置バイアス（特定位置からの距離で検索結果を調整）
- ページネーション（大量結果の分割取得）

## 技術的仕様

### システム要件

- macOS（Homebrewインストール経由）
- Google Places API Key（Google Cloud Consoleで取得）
- 環境変数 `GOOGLE_PLACES_API_KEY`

### インストール方法

**Homebrew経由:**
```bash
brew install steipete/tap/goplaces
```

### 初期設定

**1. Google Places API Keyの取得:**

Google Cloud Console（https://console.cloud.google.com/）で、Places API（New）を有効化し、API Keyを作成。

**2. 環境変数設定:**
```bash
export GOOGLE_PLACES_API_KEY="YOUR_API_KEY"
```

永続化する場合は、`~/.bashrc`または`~/.zshrc`に追記。

### オプション設定

**テスト環境用のベースURL変更（プロキシ利用時）:**
```bash
export GOOGLE_PLACES_BASE_URL="https://proxy.example.com/places"
```

## 主要機能

### テキスト検索

**基本検索:**
```bash
goplaces search "coffee"
```

**営業中のみフィルタ:**
```bash
goplaces search "coffee" --open-now
```

**最低評価フィルタ:**
```bash
goplaces search "coffee" --min-rating 4
```

**結果数制限:**
```bash
goplaces search "coffee" --limit 5
```

**複合フィルタ:**
```bash
goplaces search "coffee" --open-now --min-rating 4 --limit 5
```

### 位置バイアス検索

特定の座標を中心とした検索:
```bash
goplaces search "pizza" --lat 40.8 --lng -73.9 --radius-m 3000
```

この例では、緯度40.8、経度-73.9を中心とした半径3000m（3km）以内のピザ店を検索する。

### ページネーション

大量の検索結果を分割取得:
```bash
# 初回検索
goplaces search "pizza" --json > page1.json

# 次ページトークンを抽出
NEXT_TOKEN=$(jq -r '.next_page_token' page1.json)

# 次ページ取得
goplaces search "pizza" --page-token "$NEXT_TOKEN" --json > page2.json
```

### 位置情報解決

住所や地名からPlace IDと座標を取得:
```bash
goplaces resolve "Soho, London" --limit 5
```

出力例:
```
1. Soho, London, UK
   Place ID: ChIJ...
   Lat: 51.5137, Lng: -0.1366

2. Soho Square, London, UK
   Place ID: ChIJ...
   Lat: 51.5158, Lng: -0.1329
```

複数候補が返された場合、ユーザーに選択を促すことが推奨される。

### 詳細情報取得

Place IDを指定して詳細情報を取得:
```bash
goplaces details ChIJ... --reviews
```

`--reviews`フラグを指定すると、ユーザーレビューも取得される。

### JSON出力（スクリプト用）

すべてのコマンドは`--json`フラグでJSON形式出力が可能:
```bash
goplaces search "sushi" --json
goplaces resolve "Soho, London" --json
goplaces details ChIJ... --json
```

### カラー出力制御

ANSIカラーコードの無効化:
```bash
goplaces search "coffee" --no-color
```

または環境変数:
```bash
NO_COLOR=1 goplaces search "coffee"
```

## 実装例

### 例1: 近くのカフェ検索とSlack通知

```bash
#!/bin/bash
# 現在地から1km以内の営業中カフェを検索してSlack通知
CAFES=$(goplaces search "coffee" --lat 35.6812 --lng 139.7671 --radius-m 1000 --open-now --json)
COUNT=$(echo "$CAFES" | jq '.results | length')

curl -X POST https://hooks.slack.com/services/YOUR/WEBHOOK/URL \
  -H 'Content-Type: application/json' \
  -d "{\"text\":\"Found $COUNT open cafes nearby\"}"
```

### 例2: 都市別レストラン統計

```bash
#!/bin/bash
# 複数都市のレストラン数を集計
for city in "Tokyo" "London" "New York"; do
  COUNT=$(goplaces resolve "$city" --limit 1 --json | jq -r '.results[0]' | \
    goplaces search "restaurant" --lat $(echo $RESULT | jq .location.lat) --lng $(echo $RESULT | jq .location.lng) --radius-m 5000 --json | \
    jq '.results | length')
  echo "$city: $COUNT restaurants"
done
```

### 例3: 高評価レストランのレビュー抽出

```bash
#!/bin/bash
# 評価4.5以上のレストランのレビューをMarkdown保存
goplaces search "restaurant" --min-rating 4.5 --limit 10 --json | \
  jq -r '.results[].place_id' | \
  while read -r place_id; do
    goplaces details "$place_id" --reviews --json | \
      jq -r '.reviews[] | "## \(.author_name) (\(.rating)/5)\n\n\(.text)\n"' \
      >> reviews.md
  done
```

### 例4: 価格帯別検索

```bash
#!/bin/bash
# 高級レストラン（価格レベル3-4）を検索
goplaces search "fine dining" --json | \
  jq '.results[] | select(.price_level >= 3)'
```

価格レベル:
- 0: 無料
- 1: 安価
- 2: 中程度
- 3: 高価
- 4: 非常に高価

### 例5: 複数条件検索の自動化

```bash
#!/bin/bash
# 営業中、評価4以上、カフェタイプの店舗をCSV保存
goplaces search "coffee" --open-now --min-rating 4 --json | \
  jq -r '.results[] | [.name, .rating, .formatted_address] | @csv' \
  > cafes.csv
```

## ユースケース

### ロケーション推薦システム

旅行アプリやグルメアプリで、ユーザーの現在地から最適な店舗を推薦。営業中フィルタと評価フィルタを組み合わせ、高品質な推薦を実現。

### 競合分析

特定エリアの競合店舗数、平均評価、価格帯を分析。新規出店の意思決定データとして活用。

### データ収集・分析

観光地、レストラン、ホテル等のデータを収集し、ビジネスインテリジェンスツールと連携。市場調査や顧客分析に活用。

### 自動化通知

特定条件（新規オープン、評価上昇等）を満たす店舗を定期監視し、Slack、Discord、メール等で通知。

## 制限事項・セキュリティ考慮事項

### API利用料金

Google Places API（New）は従量課金制である。2026年2月時点の料金（米国）:
- Text Search: $0.032/リクエスト
- Place Details: $0.017/リクエスト
- Resolve: $0.032/リクエスト

無料枠（毎月$200クレジット）が提供されるが、大量リクエスト時はコスト管理が必要。

### レート制限

Google Places APIには、1秒あたりのリクエスト数上限（QPS: Queries Per Second）が設定されている。デフォルトは100 QPSだが、大規模プロジェクトではGoogle Cloudサポートへの引き上げリクエストが必要。

### APIキーの管理

`GOOGLE_PLACES_API_KEY`は機密情報である。以下の対策を推奨:
- 環境変数での管理（`.env`ファイル、AWS Secrets Manager等）
- APIキーの制限設定（Google Cloud Consoleで、IPアドレス、HTTPリファラー、APIスコープを制限）
- 公開リポジトリへのコミット禁止

### タイプフィルタの制限

`--type`フラグは、最初の値のみがAPIに送信される。複数タイプフィルタは未対応:
```bash
# 正常動作（"restaurant"のみが適用される）
goplaces search "food" --type restaurant --type cafe
```

### ページネーションの遅延

Google Places APIのページネーションは、リクエスト直後に次ページトークンが無効な場合がある。推奨される遅延時間は2秒。

### カラー出力の互換性

ANSIカラーコードは、一部のターミナル（Windows CMD等）では正しく表示されない。スクリプト利用時は`--no-color`を推奨。

## 参考リンク

- GitHub: https://github.com/steipete/goplaces
- Homebrew: https://github.com/steipete/homebrew-tap
- Google Places API（New）: https://developers.google.com/maps/documentation/places/web-service/op-overview
- Google Cloud Console: https://console.cloud.google.com/
- Places API料金: https://developers.google.com/maps/documentation/places/web-service/usage-and-billing

---

本記事の情報は2026年2月15日時点のものです。GoPlaces Skillの機能、コマンド仕様、Google Places API仕様は変更される可能性があります。最新情報は公式リポジトリ（https://github.com/steipete/goplaces）およびGoogle Places APIドキュメントをご確認ください。API利用料金は従量課金制のため、大量リクエスト時はコスト管理を徹底してください。
