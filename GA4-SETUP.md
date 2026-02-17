# Google Analytics 4 (GA4) API Setup Guide

このガイドに従って、GA4からデータを取得できるようにセットアップします。

## 前提条件

- Google Analytics 4が設定済み（測定ID: G-WLQ3BQ6FSE）
- Googleアカウントの管理者権限

---

## ステップ1: GA4 Property IDの取得

1. **Google Analytics**にアクセス: https://analytics.google.com
2. 左下の「管理」（⚙️）をクリック
3. プロパティ列の「プロパティの詳細」をクリック
4. **PROPERTY ID**をコピー（例: `123456789`）
   - ⚠️ 注意: `G-WLQ3BQ6FSE` ではなく、数字のみのID

```bash
# 環境変数に設定（一時的）
export GA4_PROPERTY_ID=123456789
```

---

## ステップ2: Google Cloud Projectの設定

### 2-1. プロジェクト作成（初回のみ）

1. **Google Cloud Console**にアクセス: https://console.cloud.google.com
2. 新しいプロジェクトを作成（例: "ai-tools-analytics"）

### 2-2. Google Analytics Data API の有効化

1. プロジェクトを選択
2. 「APIとサービス」→「ライブラリ」
3. "Google Analytics Data API" を検索
4. 「有効にする」をクリック

---

## ステップ3: サービスアカウントの作成

### 3-1. サービスアカウント作成

1. **IAMと管理**→**サービスアカウント**: https://console.cloud.google.com/iam-admin/serviceaccounts
2. 「サービスアカウントを作成」をクリック
3. 名前: `ga4-reporter`
4. 説明: `GA4 Data API access for analytics reporting`
5. 「作成して続行」
6. ロール: 不要（GA4側で権限付与）
7. 「完了」

### 3-2. JSONキーのダウンロード

1. 作成したサービスアカウントをクリック
2. 「キー」タブ→「鍵を追加」→「新しい鍵を作成」
3. 「JSON」を選択→「作成」
4. ダウンロードされたJSONファイルを安全な場所に保存
   - 例: `~/.config/gcloud/ai-tools-ga4-key.json`

### 3-3. サービスアカウントのメールアドレスをコピー

JSONファイルの`client_email`フィールド、または：
- サービスアカウント一覧の「メール」列
- 例: `ga4-reporter@ai-tools-analytics.iam.gserviceaccount.com`

---

## ステップ4: GA4プロパティにアクセス権を付与

1. **Google Analytics**に戻る: https://analytics.google.com
2. 左下の「管理」（⚙️）
3. プロパティ列の「プロパティのアクセス管理」
4. 右上の「+」→「ユーザーを追加」
5. メールアドレス: サービスアカウントのメール（例: `ga4-reporter@...iam.gserviceaccount.com`）
6. ロール: **閲覧者**（Viewer）を選択
7. 「追加」をクリック

⚠️ **重要**: サービスアカウントへのメール通知は届きません（無視してOK）

---

## ステップ5: 環境変数の設定

### 方法A: ファイルパス指定（推奨）

```bash
# JSONキーのパスを環境変数に設定
export GOOGLE_APPLICATION_CREDENTIALS="/Users/tsutomusaito/.config/gcloud/ai-tools-ga4-key.json"
export GA4_PROPERTY_ID=123456789
```

### 方法B: JSON直接指定

```bash
# JSONの内容をそのまま環境変数に（改行なし）
export GA4_SERVICE_ACCOUNT_JSON='{"type":"service_account","project_id":"...","private_key":"..."}'
export GA4_PROPERTY_ID=123456789
```

### 永続化（推奨）

`.zshrc` または `.bashrc` に追加：

```bash
echo 'export GOOGLE_APPLICATION_CREDENTIALS="/Users/tsutomusaito/.config/gcloud/ai-tools-ga4-key.json"' >> ~/.zshrc
echo 'export GA4_PROPERTY_ID=123456789' >> ~/.zshrc
source ~/.zshrc
```

---

## ステップ6: テスト実行

```bash
cd work/ai-tools-aggregator
node scripts/ga4-report.mjs
```

### 成功した場合:

```
📊 Google Analytics 4 - Traffic Report
================================================================================
Property ID: 123456789

📅 Daily Traffic (Last 14 Days)
...
```

### エラーが出た場合:

#### `PERMISSION_DENIED`
→ ステップ4でサービスアカウントをGA4に追加したか確認（数分待つ）

#### `NOT_FOUND`
→ GA4_PROPERTY_IDが正しいか確認（G-XXXXではなく、数字のみ）

#### `Missing credentials`
→ 環境変数が正しく設定されているか確認：
```bash
echo $GOOGLE_APPLICATION_CREDENTIALS
echo $GA4_PROPERTY_ID
```

---

## トラブルシューティング

### Property IDがわからない

1. GA4管理画面
2. プロパティの詳細
3. PROPERTY ID（数字のみ）をコピー

### サービスアカウントのメールがわからない

```bash
# JSONキーから取得
cat ~/.config/gcloud/ai-tools-ga4-key.json | grep client_email
```

### 権限エラーが続く

1. GA4のアクセス管理でサービスアカウントが「閲覧者」として追加されているか確認
2. 5-10分待ってから再試行（権限の反映に時間がかかる場合あり）

---

## 自動化（オプション）

毎朝9時に自動レポート生成：

```bash
# Crontab編集
crontab -e

# 以下を追加
0 9 * * * cd /Users/tsutomusaito/clawd/work/ai-tools-aggregator && /Users/tsutomusaito/.nodebrew/current/bin/node scripts/ga4-report.mjs > logs/ga4-$(date +\%Y-\%m-\%d).log 2>&1
```

---

## セキュリティ注意事項

⚠️ **重要**: サービスアカウントのJSONキーは秘密情報です

- Gitにコミットしない（`.gitignore`に追加済み）
- 共有しない
- 定期的にローテーション（90日ごと推奨）

`.gitignore` に追加（既に追加済み）:
```
*.json
!package.json
!tsconfig.json
```

---

## 次のステップ

1. Property IDを取得
2. サービスアカウント作成
3. JSONキーダウンロード
4. GA4に権限追加
5. 環境変数設定
6. スクリプト実行

**所要時間**: 約10-15分

問題が発生した場合は、エラーメッセージと共にご連絡ください。
