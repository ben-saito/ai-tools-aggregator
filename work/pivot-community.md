# Pivot: コミュニティ型AIツールディレクトリ

Started: 2026-02-10 14:53
Status: 🔄 Planning → Implementation

## つとむ様からの指示
> コミュニティ型にしましょう。各ツールでコメントと評価が見られるようにし、ランキング形式で見える様にしましょう。今人気のツールが一目でわかる様にしましょう。

---

## 🎯 新機能要件

### 1. レビュー・評価システム
- ✅ **5段階評価**（星1-5）
- ✅ **テキストレビュー**（コメント）
- ✅ **いいね機能**（Helpful votes）
- ✅ **ユーザー認証必須**（スパム防止）

### 2. ランキング機能
- ✅ **トレンディング**（24時間/7日間/30日間）
- ✅ **平均評価順**（星の平均）
- ✅ **レビュー数順**（人気度）
- ✅ **カテゴリ別ランキング**

### 3. ホームページ改善
- ✅ **今人気のツール**（トップ10）
- ✅ **最近レビューされたツール**
- ✅ **高評価ツール**（平均4.5以上）

---

## 🛠️ 技術スタック変更

### Before（静的サイト）
```
Astro SSG + JSON → Vercel
（完全静的、サーバー不要）
```

### After（フルスタック）
```
Astro（SSR有効化） + Supabase → Vercel
- Astro: フロントエンド + API Routes
- Supabase: データベース + 認証 + リアルタイム
- Vercel: ホスティング
```

---

## 📊 データベーススキーマ

### Supabase Tables

#### `profiles`（ユーザー）
```sql
- id: uuid (primary key, references auth.users)
- username: text (unique)
- avatar_url: text
- created_at: timestamp
```

#### `reviews`（レビュー）
```sql
- id: uuid (primary key)
- tool_id: text (references tools)
- user_id: uuid (references profiles)
- rating: integer (1-5)
- comment: text
- helpful_count: integer (default 0)
- created_at: timestamp
- updated_at: timestamp
```

#### `review_votes`（いいね）
```sql
- id: uuid (primary key)
- review_id: uuid (references reviews)
- user_id: uuid (references profiles)
- created_at: timestamp
```

#### `tools_stats`（ツール統計）
```sql
- tool_id: text (primary key)
- average_rating: decimal
- review_count: integer
- view_count: integer
- trending_score: decimal
- updated_at: timestamp
```

---

## 🚀 実装ステップ

### Phase 1: Supabase セットアップ（30分）
- [ ] Supabaseプロジェクト作成
- [ ] データベーススキーマ作成
- [ ] Row Level Security（RLS）ポリシー設定
- [ ] 認証プロバイダー設定（GitHub, Google）

### Phase 2: Astro SSR化（30分）
- [ ] `astro.config.mjs` でSSR有効化
- [ ] Supabaseクライアント統合
- [ ] 環境変数設定（`.env`）

### Phase 3: 認証実装（1時間）
- [ ] ログイン/ログアウトコンポーネント
- [ ] GitHub OAuth連携
- [ ] ユーザープロフィール作成

### Phase 4: レビュー機能（2時間）
- [ ] レビュー投稿フォーム
- [ ] レビュー一覧表示
- [ ] 評価の平均計算
- [ ] いいね機能

### Phase 5: ランキング機能（1.5時間）
- [ ] トレンディングアルゴリズム実装
- [ ] ランキングページ作成
- [ ] ホームページにトップ10表示

### Phase 6: UI改善（1時間）
- [ ] ツール詳細ページにレビュー表示
- [ ] 評価の星表示
- [ ] ソート機能（最新/人気/高評価）

---

## 📈 トレンディングアルゴリズム

**Hacker News風のスコアリング**:
```
score = (reviews_count + helpful_votes * 2) / (age_hours + 2)^1.5
```

- 新しいレビューほど高スコア
- いいねが多いほど高スコア
- 時間経過でスコア減衰

---

## 🎨 UI/UXの変更点

### ツール詳細ページ
```
Before:
- ツール情報のみ

After:
+ 平均評価（★★★★☆ 4.2 / 5）
+ レビュー数（123 reviews）
+ レビュー一覧
+ 「レビューを書く」ボタン
+ ソート機能（最新/人気/高評価）
```

### ホームページ
```
Before:
- Featured Tools（手動選定）

After:
+ 🔥 今人気のツール（トレンディング Top 10）
+ ⭐ 高評価ツール（平均4.5以上）
+ 📝 最近レビューされたツール
```

---

## 💰 収益化への影響

### メリット
- ✅ ユーザーエンゲージメント向上
- ✅ SEO効果（ユーザー生成コンテンツ）
- ✅ コミュニティ形成 → 長期利用
- ✅ データ蓄積 → 価値向上

### 新しい収益化オプション
1. **Pro会員**（$9/月）
   - 広告非表示
   - レビュー優先表示
   - 限定バッジ

2. **企業向けAnalytics**（$99/月）
   - 自社ツールのレビュー分析
   - 競合比較データ
   - ユーザーインサイト

---

## ⚠️ リスク管理

### スパム対策
- ✅ 認証必須（匿名投稿不可）
- ✅ Rate limiting（1ユーザー1日3レビューまで）
- ✅ 管理者承認機能（将来）

### モデレーション
- Phase 1: 手動モデレーション
- Phase 2: 自動スパムフィルタ（AI活用）

---

## 📅 スケジュール

**Total**: 6-8時間（1日で完了可能）

- 14:53-15:23: Supabaseセットアップ
- 15:23-15:53: Astro SSR化
- 15:53-16:53: 認証実装
- 16:53-18:53: レビュー機能
- 18:53-20:23: ランキング機能
- 20:23-21:23: UI改善

**目標**: 2026-02-10 21:30までに完了

---

## 🎉 成功指標

**Week 1**:
- ユーザー登録: 50+
- レビュー投稿: 100+
- DAU: 20+

**Month 1**:
- ユーザー登録: 500+
- レビュー投稿: 1,000+
- DAU: 100+

---

**Next Action**: Supabaseプロジェクト作成開始
