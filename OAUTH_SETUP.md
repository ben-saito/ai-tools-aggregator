# OAuth Setup Guide - GitHub & Google

このガイドでは、ログイン機能を有効化するためのOAuth設定を行います。

---

## 📝 概要

OAuth設定により、ユーザーがGitHubまたはGoogleアカウントでログインできるようになります。
設定時間: 各5分程度（合計10分）

---

## 1️⃣ GitHub OAuth設定（5分）

### Step 1: GitHub OAuth App作成

1. **GitHub Settings を開く**
   - https://github.com/settings/developers を開く
   - または、GitHub右上のアイコン → Settings → Developer settings → OAuth Apps

2. **新規OAuth App作成**
   - **New OAuth App** ボタンをクリック

3. **アプリケーション情報を入力**
   ```
   Application name: AI Tools Aggregator
   Homepage URL: https://ai-tools-aggregator-seven.vercel.app
   Application description: Community-driven AI tools directory
   Authorization callback URL: https://mqksqezqbauqymftrydy.supabase.co/auth/v1/callback
   ```
   ⚠️ **重要**: Authorization callback URL は正確に入力してください

4. **Register application** をクリック

5. **Client ID と Client Secret を取得**
   - Client ID: 表示されている文字列をコピー
   - Client Secret: **Generate a new client secret** をクリック → 生成された文字列をコピー
   - ⚠️ **Client Secret は一度しか表示されません！必ず保存してください**

### Step 2: Supabaseに設定

1. **Supabase Dashboard を開く**
   - https://app.supabase.com → プロジェクト選択

2. **Authentication → Providers を開く**
   - 左メニューから **Authentication** をクリック
   - **Providers** タブをクリック

3. **GitHub を有効化**
   - **GitHub** をクリック
   - **Enable Sign in with GitHub** トグルをON
   - **Client ID**: 先ほどコピーしたClient IDを貼り付け
   - **Client Secret**: 先ほどコピーしたClient Secretを貼り付け
   - **Save** をクリック

✅ GitHub OAuth設定完了！

---

## 2️⃣ Google OAuth設定（5分）

### Step 1: Google Cloud Console でOAuth設定

1. **Google Cloud Console を開く**
   - https://console.cloud.google.com/ を開く
   - Googleアカウントでログイン

2. **プロジェクトを作成**
   - 画面上部の **プロジェクト選択** → **新しいプロジェクト**
   - プロジェクト名: `AI Tools Aggregator`
   - **作成** をクリック
   - 作成完了後、そのプロジェクトを選択

3. **OAuth同意画面を設定**
   - 左メニュー → **APIとサービス** → **OAuth同意画面**
   - **外部** を選択 → **作成**
   - 必須項目を入力:
     ```
     アプリ名: AI Tools Aggregator
     ユーザーサポートメール: （あなたのメールアドレス）
     デベロッパーの連絡先情報: （あなたのメールアドレス）
     ```
   - **保存して次へ** を3回クリック（スコープ、テストユーザーはスキップ）
   - **ダッシュボードに戻る**

4. **OAuth クライアント ID を作成**
   - 左メニュー → **APIとサービス** → **認証情報**
   - **+ 認証情報を作成** → **OAuth クライアント ID**
   - アプリケーションの種類: **ウェブ アプリケーション**
   - 名前: `AI Tools Aggregator Web`
   - **承認済みのリダイレクト URI**:
     ```
     https://mqksqezqbauqymftrydy.supabase.co/auth/v1/callback
     ```
   - **作成** をクリック

5. **Client ID と Client Secret を取得**
   - ポップアップに表示される **クライアント ID** と **クライアント シークレット** をコピー
   - ⚠️ あとから確認もできますが、今コピーしておくと便利

### Step 2: Supabaseに設定

1. **Supabase Dashboard を開く**
   - https://app.supabase.com → プロジェクト選択

2. **Authentication → Providers を開く**
   - **Google** をクリック
   - **Enable Sign in with Google** トグルをON
   - **Client ID**: 先ほどコピーしたClient IDを貼り付け
   - **Client Secret**: 先ほどコピーしたClient Secretを貼り付け
   - **Save** をクリック

✅ Google OAuth設定完了！

---

## 3️⃣ 動作確認

### ローカルテスト

1. **開発サーバー起動**
   ```bash
   cd /Users/tsutomusaito/Projects/ai-tools-aggregator
   npm run dev
   ```

2. **ブラウザで確認**
   - http://localhost:4321 を開く
   - 右上の **Login to Review** ボタンをクリック
   - **Continue with GitHub** または **Continue with Google** をクリック
   - 認証が成功すれば、ユーザー名が表示される

### 本番環境テスト

1. **本番サイトを開く**
   - https://ai-tools-aggregator-seven.vercel.app

2. **ログインテスト**
   - 右上の **Login to Review** ボタンをクリック
   - GitHubまたはGoogleでログイン
   - 成功すればユーザー名が表示される

3. **レビューテスト**
   - 任意のツールページを開く（例: /tools/chatgpt）
   - 下にスクロールして「Write a Review」セクションを確認
   - 星を選択、コメントを入力、**Submit Review** をクリック
   - レビューが投稿されればOK ✅

---

## 🔧 トラブルシューティング

### GitHub OAuth: "redirect_uri_mismatch" エラー

**原因**: Authorization callback URL が間違っている

**解決方法**:
1. GitHub OAuth App設定を開く
2. Authorization callback URL を確認:
   ```
   https://mqksqezqbauqymftrydy.supabase.co/auth/v1/callback
   ```
3. Supabase Dashboard → Authentication → Providers → GitHub で表示されるCallbacl URLをコピーして使用

### Google OAuth: "redirect_uri_mismatch" エラー

**原因**: 承認済みのリダイレクト URI が間違っている

**解決方法**:
1. Google Cloud Console → OAuth クライアント ID を開く
2. 承認済みのリダイレクト URI を確認:
   ```
   https://mqksqezqbauqymftrydy.supabase.co/auth/v1/callback
   ```
3. Supabase Dashboard → Authentication → Providers → Google で表示されるCallback URLをコピーして使用

### ログイン後にリダイレクトされない

**原因**: 環境変数が設定されていない

**解決方法**:
1. `.env` ファイルが存在するか確認
2. Vercel環境変数が設定されているか確認
3. 開発サーバーを再起動

---

## 📊 設定確認チェックリスト

### GitHub OAuth
- [ ] GitHub OAuth App作成完了
- [ ] Client ID と Client Secret 取得完了
- [ ] Supabaseに設定完了
- [ ] ローカルでログインテスト成功
- [ ] 本番環境でログインテスト成功

### Google OAuth
- [ ] Google Cloud プロジェクト作成完了
- [ ] OAuth同意画面設定完了
- [ ] OAuth クライアント ID 作成完了
- [ ] Supabaseに設定完了
- [ ] ローカルでログインテスト成功
- [ ] 本番環境でログインテスト成功

### 機能テスト
- [ ] ログイン機能動作確認
- [ ] レビュー投稿テスト
- [ ] いいね機能テスト
- [ ] ランキングページ表示確認

---

## 🎉 完了！

OAuth設定が完了しました。ユーザーはGitHubまたはGoogleアカウントでログインして、レビューを投稿できるようになります。

**次のステップ**:
1. ユーザーにテストレビュー投稿を依頼
2. ランキングページでトレンディング表示を確認
3. マーケティング開始（SNS投稿、HackerNews等）

---

**セキュリティ注意**:
- Client Secret は絶対にGitにコミットしない
- Supabaseに保存されているので、ローカル`.env`からは削除してもOK
- 本番環境ではVercelの環境変数から自動取得されます
