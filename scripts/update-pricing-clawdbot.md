# Pricing Update Strategy

## Objective
各ツールのウェブサイトから価格情報を取得してデータベースに反映

## Approach

### Option 1: Batch Script (推奨)
Clawdbotのweb_fetch + Supabase直接更新を使用

**手順:**
1. Supabaseから全ツールリストを取得
2. 各ツールに対して:
   - web_fetchでページコンテンツ取得
   - 価格キーワードで判定
   - Supabaseを更新
3. 進捗をログに記録

**所要時間:** 約10-15分（50ツール × 10秒/ツール）

### Option 2: サンプルベース
まず10ツールをテストして、精度を確認してから全体を実行

### Option 3: Manual Review
重要なツールのみ手動確認

## Pricing Detection Logic

### Keywords
- **Free**: "free", "無料", "$0", "no cost", "free forever"
- **Freemium**: "free plan", "free tier", "free trial", "starter free"
- **Paid**: "$", "subscription", "pricing", "plans", "payment required"
- **Open Source**: "open source", "github", "MIT license"

### Priority
1. Open Source + Paid → Freemium
2. Freemium keywords → Freemium
3. Free + Paid → Freemium
4. Free only → Free
5. Paid only → Paid

## Implementation Plan

### Phase 1: Test (5 tools)
- ChatGPT
- Midjourney
- GitHub Copilot
- Looka
- Claude

→ 精度確認 + ロジック調整

### Phase 2: Batch (remaining tools)
- 残り45ツールを自動処理
- エラーハンドリング

### Phase 3: Review
- 不明なものを手動確認
- 結果レポート作成
