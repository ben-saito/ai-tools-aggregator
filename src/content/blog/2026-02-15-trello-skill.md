---
title: "Clawdbot Trello Skill - Trello REST APIによるボード管理自動化"
description: "Clawdbot向けTrello Skillを利用して、Trello REST API経由でボード・リスト・カード操作を自動化する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Trello", "プロジェクト管理", "REST API", "看板方式"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Trello, REST API, プロジェクト管理, カンバン, 自動化, cURL"
---

Clawdbotの公式Skillとして提供されているTrello Skillは、Trello REST APIを利用したボード・リスト・カード操作の自動化を可能にするツールである。本記事では、Trello Skillの技術仕様、API認証方法、主要機能、および実装例について解説する。

## 概要

Trello Skillは、Trello REST API v1を使用して、ボード（Board）、リスト（List）、カード（Card）の作成・読み取り・更新・削除（CRUD操作）を実行する機能を提供する。cURLコマンド経由でHTTPリクエストを送信し、JSON形式のレスポンスを処理する。

技術的には、Trello APIはOAuth 1.0aまたはAPIキー+トークンによる認証を使用し、すべてのリクエストにこれらの認証情報を付与する必要がある。レート制限は、APIキーあたり300リクエスト/10秒、トークンあたり100リクエスト/10秒、`/1/members`エンドポイントは100リクエスト/900秒である。

## 技術的仕様

### システム要件

- **Trelloアカウント:** 無料版またはBusiness Class/Enterprise（有料版）
- **APIキー・トークン:** Trello Developer Portalで発行
- **依存ツール:** `curl`（HTTP通信）、`jq`（JSON解析、オプション）
- **Clawdbot:** バージョン不明（公式ドキュメントに記載なし）

### API認証設定

APIキーとトークンの取得手順:

1. https://trello.com/app-key にアクセス
2. APIキーを取得（ページ上部に表示）
3. "Token"リンクをクリックしてトークンを発行
4. 認可画面で権限を確認（Read/Write/Account権限）
5. 発行されたトークンを保存

環境変数への設定:

```bash
export TRELLO_API_KEY="your-api-key-here"
export TRELLO_TOKEN="your-token-here"
```

永続化（`.bashrc`または`.zshrc`に追記）:

```bash
echo 'export TRELLO_API_KEY="your-api-key-here"' >> ~/.zshrc
echo 'export TRELLO_TOKEN="your-token-here"' >> ~/.zshrc
source ~/.zshrc
```

### APIエンドポイント

Trello REST API v1の主要エンドポイント:

- **ボード:** `GET /1/members/me/boards`, `GET /1/boards/{id}`
- **リスト:** `GET /1/boards/{id}/lists`, `POST /1/lists`
- **カード:** `GET /1/lists/{id}/cards`, `POST /1/cards`, `PUT /1/cards/{id}`
- **コメント:** `POST /1/cards/{id}/actions/comments`
- **メンバー:** `GET /1/boards/{id}/members`

ベースURL: `https://api.trello.com`

### レート制限

- **APIキー:** 300リクエスト/10秒
- **トークン:** 100リクエスト/10秒
- **メンバーエンドポイント（`/1/members`）:** 100リクエスト/900秒（15分）

レート制限超過時のHTTPステータスコード: `429 Too Many Requests`

## 主要機能

### ボード一覧取得

```bash
curl -s "https://api.trello.com/1/members/me/boards?key=$TRELLO_API_KEY&token=$TRELLO_TOKEN" | jq '.[] | {name, id}'
```

出力例:
```json
{
  "name": "Project Alpha",
  "id": "abc123def456"
}
{
  "name": "Personal Tasks",
  "id": "ghi789jkl012"
}
```

### リスト一覧取得

特定ボードのリスト取得:

```bash
BOARD_ID="abc123def456"
curl -s "https://api.trello.com/1/boards/${BOARD_ID}/lists?key=$TRELLO_API_KEY&token=$TRELLO_TOKEN" | jq '.[] | {name, id}'
```

出力例:
```json
{
  "name": "To Do",
  "id": "list111"
}
{
  "name": "In Progress",
  "id": "list222"
}
{
  "name": "Done",
  "id": "list333"
}
```

### カード一覧取得

特定リストのカード取得:

```bash
LIST_ID="list111"
curl -s "https://api.trello.com/1/lists/${LIST_ID}/cards?key=$TRELLO_API_KEY&token=$TRELLO_TOKEN" | jq '.[] | {name, id, desc}'
```

出力例:
```json
{
  "name": "Implement feature X",
  "id": "card123",
  "desc": "Add user authentication"
}
```

### カード作成

```bash
curl -s -X POST "https://api.trello.com/1/cards?key=$TRELLO_API_KEY&token=$TRELLO_TOKEN" \
  -d "idList=list111" \
  -d "name=Review pull request #42" \
  -d "desc=Check security and performance"
```

パラメータ:
- **idList:** カードを追加するリストID（必須）
- **name:** カード名（必須）
- **desc:** カードの説明（オプション）
- **due:** 期限日（`2026-02-20`形式、オプション）
- **idMembers:** 担当者のメンバーID（カンマ区切り、オプション）

### カード移動

別リストへの移動:

```bash
CARD_ID="card123"
NEW_LIST_ID="list222"

curl -s -X PUT "https://api.trello.com/1/cards/${CARD_ID}?key=$TRELLO_API_KEY&token=$TRELLO_TOKEN" \
  -d "idList=${NEW_LIST_ID}"
```

### コメント追加

```bash
CARD_ID="card123"

curl -s -X POST "https://api.trello.com/1/cards/${CARD_ID}/actions/comments?key=$TRELLO_API_KEY&token=$TRELLO_TOKEN" \
  -d "text=Review completed. LGTM!"
```

### カードアーカイブ

```bash
CARD_ID="card123"

curl -s -X PUT "https://api.trello.com/1/cards/${CARD_ID}?key=$TRELLO_API_KEY&token=$TRELLO_TOKEN" \
  -d "closed=true"
```

## 実装例

### 例1: GitHubプルリクエストからカード自動作成

```bash
#!/bin/bash
# github-pr-to-trello.sh

BOARD_ID="abc123def456"
LIST_ID="list111"  # "To Review"リスト

# GitHub APIでプルリクエスト一覧取得
PRS=$(curl -s -H "Authorization: token $GITHUB_TOKEN" \
  "https://api.github.com/repos/myorg/myrepo/pulls?state=open")

# 各PRをTrelloカードに変換
echo "$PRS" | jq -r '.[] | "\(.title)|\(.html_url)|\(.body // "")"' | while IFS='|' read -r title url body; do
  CARD_NAME="PR: $title"
  CARD_DESC="$url\n\n$body"
  
  curl -s -X POST "https://api.trello.com/1/cards?key=$TRELLO_API_KEY&token=$TRELLO_TOKEN" \
    -d "idList=$LIST_ID" \
    -d "name=$CARD_NAME" \
    -d "desc=$CARD_DESC"
  
  echo "カード作成: $CARD_NAME"
done
```

### 例2: 期限切れカードのアラート

```javascript
// overdue-cards-alert.js
const axios = require('axios');

const API_KEY = process.env.TRELLO_API_KEY;
const TOKEN = process.env.TRELLO_TOKEN;
const BOARD_ID = 'abc123def456';

async function getOverdueCards() {
  const url = `https://api.trello.com/1/boards/${BOARD_ID}/cards?key=${API_KEY}&token=${TOKEN}`;
  const response = await axios.get(url);
  
  const now = new Date();
  const overdueCards = response.data.filter(card => {
    if (!card.due) return false;
    const dueDate = new Date(card.due);
    return dueDate < now && !card.dueComplete;
  });
  
  if (overdueCards.length > 0) {
    console.log(`期限切れカード: ${overdueCards.length}件`);
    overdueCards.forEach(card => {
      console.log(`- ${card.name} (期限: ${card.due})`);
    });
    
    // Discord通知（Clawdbot経由）
    const { execSync } = require('child_process');
    execSync(`clawdbot run 'message action:send target:channel:123456 message:"期限切れカード検出: ${overdueCards.length}件"'`);
  } else {
    console.log('期限切れカードなし');
  }
}

getOverdueCards();
```

### 例3: カード自動移動（CI/CDステータス連動）

```bash
#!/bin/bash
# ci-status-update.sh

BUILD_STATUS="$1"  # success/failure
CARD_ID="$2"

if [ "$BUILD_STATUS" = "success" ]; then
  # "In Progress" → "Done"に移動
  NEW_LIST_ID="list333"
  COMMENT="ビルド成功。デプロイ準備完了。"
else
  # "In Progress" → "To Do"に戻す
  NEW_LIST_ID="list111"
  COMMENT="ビルド失敗。修正が必要です。"
fi

# カード移動
curl -s -X PUT "https://api.trello.com/1/cards/${CARD_ID}?key=$TRELLO_API_KEY&token=$TRELLO_TOKEN" \
  -d "idList=$NEW_LIST_ID"

# コメント追加
curl -s -X POST "https://api.trello.com/1/cards/${CARD_ID}/actions/comments?key=$TRELLO_API_KEY&token=$TRELLO_TOKEN" \
  -d "text=$COMMENT"

echo "カード更新完了: $CARD_ID → $NEW_LIST_ID"
```

### 例4: 週次レポート自動生成

```javascript
// weekly-report.js
const axios = require('axios');
const fs = require('fs');

const API_KEY = process.env.TRELLO_API_KEY;
const TOKEN = process.env.TRELLO_TOKEN;
const BOARD_ID = 'abc123def456';

async function generateWeeklyReport() {
  const url = `https://api.trello.com/1/boards/${BOARD_ID}/cards?key=${API_KEY}&token=${TOKEN}`;
  const response = await axios.get(url);
  
  const cards = response.data;
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  
  const completedThisWeek = cards.filter(card => {
    if (!card.dateLastActivity) return false;
    const activityDate = new Date(card.dateLastActivity);
    return activityDate >= weekAgo && card.closed;
  });
  
  const report = `# 週次レポート (${weekAgo.toISOString().split('T')[0]} - ${new Date().toISOString().split('T')[0]})

## 完了タスク: ${completedThisWeek.length}件

${completedThisWeek.map(card => `- ${card.name}`).join('\n')}

## 進行中タスク: ${cards.filter(c => !c.closed).length}件
`;
  
  fs.writeFileSync('weekly-report.md', report);
  console.log('レポート生成完了: weekly-report.md');
}

generateWeeklyReport();
```

### 例5: ボード名検索とカード一括操作

```bash
#!/bin/bash
# search-and-archive.sh

SEARCH_QUERY="$1"

# ボード名で検索
BOARDS=$(curl -s "https://api.trello.com/1/members/me/boards?key=$TRELLO_API_KEY&token=$TRELLO_TOKEN")
BOARD_ID=$(echo "$BOARDS" | jq -r ".[] | select(.name | contains(\"$SEARCH_QUERY\")) | .id" | head -1)

if [ -z "$BOARD_ID" ]; then
  echo "ボードが見つかりません: $SEARCH_QUERY"
  exit 1
fi

echo "ボード検出: $BOARD_ID"

# すべてのカード取得
CARDS=$(curl -s "https://api.trello.com/1/boards/${BOARD_ID}/cards?key=$TRELLO_API_KEY&token=$TRELLO_TOKEN")

# "Done"リストのカードをアーカイブ
DONE_LIST_ID=$(curl -s "https://api.trello.com/1/boards/${BOARD_ID}/lists?key=$TRELLO_API_KEY&token=$TRELLO_TOKEN" | jq -r '.[] | select(.name == "Done") | .id')

echo "$CARDS" | jq -r ".[] | select(.idList == \"$DONE_LIST_ID\") | .id" | while read -r card_id; do
  curl -s -X PUT "https://api.trello.com/1/cards/${card_id}?key=$TRELLO_API_KEY&token=$TRELLO_TOKEN" \
    -d "closed=true"
  echo "アーカイブ完了: $card_id"
done
```

## ユースケース

### ソフトウェア開発

- **CI/CD連携:** ビルド成功時にカード自動移動
- **GitHub連携:** プルリクエスト・Issueをカードに同期
- **コードレビュー:** レビュー依頼カードの自動生成

### プロジェクト管理

- **タスク自動生成:** 定期タスク（週次ミーティング等）のカード作成
- **進捗レポート:** 完了タスクの集計と週次レポート生成
- **期限管理:** 期限切れカードの自動アラート

### カスタマーサポート

- **チケット管理:** Zendesk/Intercomからのチケットをカード化
- **エスカレーション:** 優先度の高いカードをSlack通知

## 制限事項・セキュリティ考慮事項

### 制限事項

- **レート制限:** APIキー300リクエスト/10秒、トークン100リクエスト/10秒
  - 大量操作時は遅延処理（`sleep`コマンド）を挿入推奨
- **認証情報の期限:** トークンは無期限だが、セキュリティ上は定期的な再発行推奨
- **添付ファイル:** REST APIでは添付ファイルのアップロードが複雑（マルチパートフォームデータ）

### セキュリティ

- **APIキー・トークン保護:** 
  - 環境変数または暗号化設定ファイルで管理
  - ソースコードに直接記載禁止
  - `.gitignore`で環境変数ファイルを除外
  
- **アクセス権限:**
  - トークン発行時に最小権限の原則（Read/Write/Account権限を個別選択）
  - 不要なトークンは即座に無効化（https://trello.com/app-key で管理）
  
- **監査ログ:**
  - Trelloの監査ログでAPI操作履歴を確認（Enterprise版のみ）

### ベストプラクティス

- **エラーハンドリング:** HTTPステータスコード確認（200, 401, 429等）
- **冪等性:** カード作成前に重複チェック（名前・説明での検索）
- **バッチ処理:** 大量操作時はレート制限を考慮して遅延挿入
- **ログ記録:** API操作の実行ログを保存（トラブルシューティング用）

## 参考リンク

- Trello REST API Reference: https://developer.atlassian.com/cloud/trello/rest/
- Trello API Key取得: https://trello.com/app-key
- Trello Power-Ups（拡張機能）: https://developer.atlassian.com/cloud/trello/power-ups/
- Clawdbot公式サイト: https://clawdbot.com

---

本記事の情報は2026年2月15日時点のものです。Trello REST APIの仕様やClawdbotのアップデートにより、機能や制限事項が変更される可能性があります。最新情報は各公式サイトをご確認ください。
