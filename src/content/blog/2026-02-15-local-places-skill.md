---
title: "Local Places Skill - Google Places APIプロキシによる店舗検索をClawdbotで実現"
description: "Clawdbot向けLocal Places Skillを利用して、ローカルサーバー経由でGoogle Places API検索、位置情報解決、詳細取得を実行する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Local Places", "Google Places API", "Python", "FastAPI", "位置情報"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Local Places Skill, Google Places API, FastAPI, uvicorn, 位置情報検索"
---

## 概要

Local Places Skillは、Clawdbotフレームワーク内でGoogle Places APIのプロキシサーバーを起動し、ローカルHTTPエンドポイント経由で店舗検索を実行するためのスキルである。Python製のFastAPIアプリケーションとして実装されており、`uv`パッケージマネージャーと`uvicorn`サーバーで動作する。

本スキルは、Google Places API（New）を利用し、位置情報解決（住所→座標変換）と店舗検索を2ステップのワークフローで提供する。ユーザーとの対話的な検索体験を想定した設計である。

公式リポジトリは https://github.com/Hyaxia/local_places で公開されている。

### 技術的背景

Google Places APIを直接利用する場合、認証情報管理、リクエストフォーマット、エラーハンドリングが煩雑である。Local Places Skillは、これらをローカルプロキシサーバーでラップし、シンプルなREST APIとして提供する。

提供される主要機能は以下の通り:
- 位置情報解決（住所・地名→座標・Place ID）
- 店舗検索（キーワード、営業中フィルタ、評価フィルタ、価格帯フィルタ）
- 詳細情報取得（Place ID→営業時間、電話番号等）
- ページネーション（大量結果の分割取得）

## 技術的仕様

### システム要件

- Python 3.10以上
- `uv` パッケージマネージャー（Pythonパッケージ管理ツール）
- Google Places API Key
- 環境変数 `GOOGLE_PLACES_API_KEY`

### インストール方法

**1. uvのインストール:**
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

**2. プロジェクトのクローン:**
```bash
cd {baseDir}  # Clawdbotスキルのベースディレクトリ
```

**3. 環境変数設定:**
```bash
echo "GOOGLE_PLACES_API_KEY=your-key" > .env
```

**4. 依存関係のインストール:**
```bash
uv venv
uv pip install -e ".[dev]"
```

**5. サーバー起動:**
```bash
uv run --env-file .env uvicorn local_places.main:app --host 127.0.0.1 --port 8000
```

サーバーは http://127.0.0.1:8000 で起動する。

## 主要機能

### サーバー稼働確認

**Pingエンドポイント:**
```bash
curl http://127.0.0.1:8000/ping
```

正常時のレスポンス:
```json
{"status": "ok"}
```

### 位置情報解決

**リクエスト:**
```bash
curl -X POST http://127.0.0.1:8000/locations/resolve \
  -H "Content-Type: application/json" \
  -d '{"location_text": "Soho, London", "limit": 5}'
```

**レスポンス:**
```json
{
  "results": [
    {
      "place_id": "ChIJ...",
      "name": "Soho",
      "address": "Soho, London, UK",
      "location": {
        "lat": 51.5137,
        "lng": -0.1366
      }
    }
  ]
}
```

複数候補が返された場合、Clawdbotは番号付きリストで提示し、ユーザーに選択を促す。

### 店舗検索

**リクエスト:**
```bash
curl -X POST http://127.0.0.1:8000/places/search \
  -H "Content-Type: application/json" \
  -d '{
    "query": "coffee shop",
    "location_bias": {
      "lat": 51.5137,
      "lng": -0.1366,
      "radius_m": 1000
    },
    "filters": {
      "open_now": true,
      "min_rating": 4.0
    },
    "limit": 10
  }'
```

**レスポンス:**
```json
{
  "results": [
    {
      "place_id": "ChIJ...",
      "name": "Coffee Shop",
      "address": "123 Main St, London",
      "location": {
        "lat": 51.5,
        "lng": -0.1
      },
      "rating": 4.6,
      "price_level": 2,
      "types": ["cafe", "food"],
      "open_now": true
    }
  ],
  "next_page_token": "..."
}
```

### フィルタ仕様

**types（店舗タイプ）:**
- 値: 1つのみ指定可能（例: `"restaurant"`, `"cafe"`, `"gym"`）
- 複数タイプは未対応

**price_levels（価格帯）:**
- 値: 整数0〜4のリスト（例: `[1, 2]`）
- 意味: 0=無料、1=安価、2=中程度、3=高価、4=非常に高価

**min_rating（最低評価）:**
- 値: 0〜5の範囲（0.5刻み）
- 例: `4.0`, `4.5`

**open_now（営業中フィルタ）:**
- 値: `true` / `false`

**location_bias（位置バイアス）:**
- `lat`: 緯度（必須）
- `lng`: 経度（必須）
- `radius_m`: 半径（メートル、必須、>0）

**limit（結果数制限）:**
- 検索: 1〜20
- 位置情報解決: 1〜10

### 詳細情報取得

**リクエスト:**
```bash
curl http://127.0.0.1:8000/places/{place_id}
```

**レスポンス:**
詳細な営業時間、電話番号、ウェブサイト、レビュー等を含む。

### ページネーション

検索結果に`next_page_token`が含まれる場合、次ページを取得可能:
```bash
curl -X POST http://127.0.0.1:8000/places/search \
  -H "Content-Type: application/json" \
  -d '{
    "query": "coffee shop",
    "page_token": "NEXT_PAGE_TOKEN",
    "limit": 10
  }'
```

## 実装例

### 例1: Clawdbotとの対話的検索

```python
# Clawdbot内部でのPython実装例
import requests

def search_nearby_cafes(user_location: str):
    # ステップ1: 位置情報解決
    resolve_resp = requests.post(
        "http://127.0.0.1:8000/locations/resolve",
        json={"location_text": user_location, "limit": 5}
    )
    locations = resolve_resp.json()["results"]
    
    if len(locations) > 1:
        # 複数候補がある場合、ユーザーに選択を促す
        print("Multiple locations found:")
        for i, loc in enumerate(locations):
            print(f"{i+1}. {loc['name']} ({loc['address']})")
        choice = int(input("Select location: ")) - 1
    else:
        choice = 0
    
    selected = locations[choice]
    
    # ステップ2: 店舗検索
    search_resp = requests.post(
        "http://127.0.0.1:8000/places/search",
        json={
            "query": "cafe",
            "location_bias": {
                "lat": selected["location"]["lat"],
                "lng": selected["location"]["lng"],
                "radius_m": 1000
            },
            "filters": {
                "open_now": True,
                "min_rating": 4.0
            },
            "limit": 10
        }
    )
    
    results = search_resp.json()["results"]
    for cafe in results:
        print(f"{cafe['name']} - {cafe['rating']}/5 - {cafe['address']}")
```

### 例2: Bash自動化スクリプト

```bash
#!/bin/bash
# 営業中のレストランを検索してSlack通知
LOCATION=$(curl -s -X POST http://127.0.0.1:8000/locations/resolve \
  -H "Content-Type: application/json" \
  -d '{"location_text": "Tokyo, Japan", "limit": 1}' | \
  jq -r '.results[0]')

LAT=$(echo "$LOCATION" | jq -r '.location.lat')
LNG=$(echo "$LOCATION" | jq -r '.location.lng')

RESTAURANTS=$(curl -s -X POST http://127.0.0.1:8000/places/search \
  -H "Content-Type: application/json" \
  -d "{
    \"query\": \"restaurant\",
    \"location_bias\": {
      \"lat\": $LAT,
      \"lng\": $LNG,
      \"radius_m\": 2000
    },
    \"filters\": {
      \"open_now\": true
    },
    \"limit\": 5
  }")

COUNT=$(echo "$RESTAURANTS" | jq '.results | length')
curl -X POST https://hooks.slack.com/services/YOUR/WEBHOOK/URL \
  -H 'Content-Type: application/json' \
  -d "{\"text\":\"Found $COUNT open restaurants in Tokyo\"}"
```

### 例3: 価格帯別検索

```bash
#!/bin/bash
# 安価なレストラン（価格レベル0-1）を検索
curl -X POST http://127.0.0.1:8000/places/search \
  -H "Content-Type: application/json" \
  -d '{
    "query": "restaurant",
    "location_bias": {
      "lat": 40.7128,
      "lng": -74.0060,
      "radius_m": 3000
    },
    "filters": {
      "price_levels": [0, 1]
    },
    "limit": 20
  }' | jq '.results[] | {name: .name, price_level: .price_level, rating: .rating}'
```

### 例4: 定期的な店舗データ更新

```bash
#!/bin/bash
# 1時間ごとに新規オープンした店舗を監視
while true; do
  NEW_PLACES=$(curl -s -X POST http://127.0.0.1:8000/places/search \
    -H "Content-Type: application/json" \
    -d '{
      "query": "new restaurant",
      "location_bias": {
        "lat": 51.5074,
        "lng": -0.1278,
        "radius_m": 5000
      },
      "limit": 10
    }' | jq '.results[].name')
  
  echo "$NEW_PLACES" >> new_places.log
  sleep 3600
done
```

### 例5: タイプ別店舗統計

```bash
#!/bin/bash
# カフェ、レストラン、バーの数を集計
for type in "cafe" "restaurant" "bar"; do
  COUNT=$(curl -s -X POST http://127.0.0.1:8000/places/search \
    -H "Content-Type: application/json" \
    -d "{
      \"query\": \"$type\",
      \"location_bias\": {
        \"lat\": 35.6812,
        \"lng\": 139.7671,
        \"radius_m\": 5000
      },
      \"filters\": {
        \"types\": [\"$type\"]
      },
      \"limit\": 20
    }" | jq '.results | length')
  echo "$type: $COUNT"
done
```

## ユースケース

### Clawdbotによる対話的店舗検索

ユーザーが「近くのカフェを探して」と依頼した場合、Clawdbotは以下のフローを実行:
1. ユーザーの位置情報（「近く」「Soho, London」等）を解決
2. 複数候補がある場合、選択を促す
3. 営業中・評価・価格帯の希望を確認
4. 検索結果を番号付きリストで提示
5. 詳細情報取得または再検索

### マーケティング分析

特定エリアの競合店舗数、平均評価、価格帯分布を分析。新規出店の候補地選定、競合分析に活用。

### データ収集パイプライン

Google Places APIのデータを定期的に取得し、データベース（PostgreSQL、MongoDB等）に保存。時系列分析、トレンド検出に活用。

### ロケーションベースの推薦システム

ユーザーの現在地と好みに基づき、最適な店舗を推薦。旅行アプリ、グルメアプリのバックエンドとして利用。

## 制限事項・セキュリティ考慮事項

### APIキーの管理

`.env`ファイルは、`.gitignore`に必ず追加すること。公開リポジトリへのコミットは厳禁。

### フィルタ制約

以下の制約に注意:
- `types`: 1つのみ指定可能（複数タイプフィルタ未対応）
- `radius_m`: 必ず正の整数（0や負の値は不可）
- `limit`: 検索は1〜20、位置情報解決は1〜10

### ページネーション遅延

Google Places APIのページネーションは、次ページトークン発行直後に無効な場合がある。推奨される遅延時間は2秒。

### ローカルサーバーのセキュリティ

デフォルト設定（`127.0.0.1:8000`）では、ローカルホストからのみアクセス可能。外部公開する場合:
- HTTPS化（Let's Encryptで証明書取得）
- 認証機能の追加（API Key、OAuth等）
- レート制限の実装（DDoS対策）

### Google Places API料金

Google Places API（New）は従量課金制。2026年2月時点の料金（米国）:
- Text Search: $0.032/リクエスト
- Place Details: $0.017/リクエスト

無料枠（毎月$200クレジット）を超過するとコストが発生するため、リクエスト数の監視を推奨。

### Python環境の依存関係

`uv`は高速なPythonパッケージマネージャーだが、従来の`pip`や`poetry`と併用する場合、依存関係の競合に注意。

## 参考リンク

- GitHub: https://github.com/Hyaxia/local_places
- uvドキュメント: https://astral.sh/uv
- FastAPIドキュメント: https://fastapi.tiangolo.com/
- uvicornドキュメント: https://www.uvicorn.org/
- Google Places API（New）: https://developers.google.com/maps/documentation/places/web-service/op-overview
- Google Cloud Console: https://console.cloud.google.com/

---

本記事の情報は2026年2月15日時点のものです。Local Places Skillの機能、API仕様、依存関係は変更される可能性があります。最新情報は公式リポジトリ（https://github.com/Hyaxia/local_places）をご確認ください。APIキーの管理には十分注意し、Google Places APIの利用規約を遵守してください。
