# Current Task: コミュニティ型AIツールディレクトリ

Started: 2026-02-10 14:53
**Status**: 🚧 実装中（70%完了）
**Deadline**: 2026-02-10 21:30

---

## 🎯 つとむ様からの指示（14:53）

> コミュニティ型にしましょう。各ツールでコメントと評価が見られるようにし、ランキング形式で見える様にしましょう。今人気のツールが一目でわかる様にしましょう。

---

## ✅ 完了した作業（70%）

### Phase 1: バックエンド＆認証（100% ✅）
- [x] Astro SSR化（hybridモード）（14:54）
- [x] Supabase統合（@astrojs/vercel@7.8.2 + @supabase/supabase-js）（14:55）
- [x] 環境変数テンプレート作成（.env.example）（14:55）
- [x] Supabaseクライアントユーティリティ作成（src/lib/supabase.ts）（14:56）
- [x] データベーススキーマ作成（supabase-schema.sql）（14:57）

### Phase 2: 認証機能（100% ✅）
- [x] 認証ボタンコンポーネント（AuthButton.astro）（14:58）
- [x] Headerに認証ボタン追加（14:59）
- [x] ログインページ作成（/login）（15:00）
- [x] OAuth認証コールバックページ（/auth/callback）（15:01）

### Phase 3: レビュー機能（100% ✅）
- [x] レビューセクションコンポーネント（ReviewSection.astro）（15:02-15:05）
  - 5段階評価
  - テキストレビュー
  - いいね機能
  - レビュー統計表示
- [x] ツール詳細ページにレビューセクション追加（15:06）

### Phase 4: ランキング機能（100% ✅）
- [x] ランキングページ作成（/rankings）（15:07-15:10）
  - トレンディングタブ
  - 高評価タブ
  - 最多レビュータブ
- [x] Headerにランキングリンク追加（15:11）

### Phase 5: ホームページ改善（100% ✅）
- [x] トレンディングツールコンポーネント（TrendingTools.astro）（15:12-15:14）
- [x] ホームページにトレンディング＆高評価セクション追加（15:15）

### Phase 6: ドキュメント（100% ✅）
- [x] Supabaseセットアップガイド作成（SUPABASE_SETUP.md）（15:16）

---

## 🔄 残タスク（30%）

### Phase 7: Supabaseプロジェクト作成（つとむ様）
- [ ] Supabaseアカウント作成（既存アカウントがあれば不要）
- [ ] 新規プロジェクト作成
- [ ] データベーススキーマ実行（supabase-schema.sql）
- [ ] GitHub OAuth設定
- [ ] Google OAuth設定
- [ ] 環境変数取得（PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY）

### Phase 8: ローカルテスト
- [ ] .envファイル作成＆環境変数設定
- [ ] npm run dev で起動
- [ ] ログイン機能テスト
- [ ] レビュー投稿テスト
- [ ] ランキング表示テスト

### Phase 9: Vercel環境変数設定
- [ ] Vercel Projectの環境変数設定
- [ ] PUBLIC_SUPABASE_URL追加
- [ ] PUBLIC_SUPABASE_ANON_KEY追加

### Phase 10: デプロイ＆最終テスト
- [ ] git commit & push
- [ ] Vercel自動デプロイ
- [ ] 本番環境でログインテスト
- [ ] 本番環境でレビュー投稿テスト

---

## 📊 実装した機能一覧

### 🔐 認証システム
- GitHub OAuth
- Google OAuth
- 自動プロフィール作成
- セッション管理

### ⭐ レビュー＆評価
- 5段階評価（星）
- テキストレビュー
- いいね機能（Helpful votes）
- レビュー統計（平均評価、レビュー数）
- スパム防止（認証必須、1ユーザー1レビュー）

### 📊 ランキング機能
- 🔥 トレンディング（Hacker News風アルゴリズム）
- ⭐ 高評価順
- 💬 レビュー数順
- カテゴリ別フィルタ

### 🏠 ホームページ改善
- トレンディングツールTop 6
- 高評価ツールTop 6
- リアルタイム統計表示

---

## 🛠️ 技術スタック変更

**Before**:
```
Astro SSG (静的サイト)
→ JSONデータ
→ Vercel
```

**After**:
```
Astro Hybrid (SSR + SSG)
→ Supabase (PostgreSQL + Auth + Realtime)
→ Vercel
```

**追加パッケージ**:
- `@astrojs/vercel@7.8.2` - Vercel adapter
- `@supabase/supabase-js` - Supabase client

---

## 📊 データベーススキーマ

### テーブル構成
1. **profiles** - ユーザープロフィール
2. **reviews** - レビュー（ツールID、ユーザーID、評価、コメント）
3. **review_votes** - いいね投票
4. **tools_stats** - ツール統計（平均評価、レビュー数、トレンディングスコア）

### セキュリティ
- Row Level Security (RLS) 有効
- 認証ユーザーのみ投稿可能
- 1ユーザー1レビュー制限
- 自分のレビューのみ編集・削除可能

---

## 🎨 UI/UX変更

### ツール詳細ページ
**追加要素**:
- レビュー統計（平均評価、レビュー数）
- レビュー一覧（ソート可能）
- レビュー投稿フォーム（ログイン時）
- いいねボタン

### ホームページ
**追加セクション**:
- 🔥 Trending Now（Top 6）
- ⭐ Top Rated Tools（Top 6）

### 新ページ
- `/login` - ログインページ（GitHub/Google OAuth）
- `/auth/callback` - 認証コールバック
- `/rankings` - ランキングページ（3タブ）

---

## 💰 収益化への影響

### 新しい収益化オプション

**Pro会員**（$9/月）:
- 広告非表示
- レビュー優先表示
- 限定バッジ

**企業向けAnalytics**（$99/月）:
- 自社ツールのレビュー分析
- 競合比較データ
- ユーザーインサイト

### メリット
- ✅ ユーザーエンゲージメント向上
- ✅ SEO効果（ユーザー生成コンテンツ）
- ✅ コミュニティ形成 → 長期利用
- ✅ データ蓄積 → 価値向上

---

## 📈 成功指標

### Week 1
- ユーザー登録: 50+
- レビュー投稿: 100+
- DAU: 20+

### Month 1
- ユーザー登録: 500+
- レビュー投稿: 1,000+
- DAU: 100+

---

## 🚀 次のステップ

**即座実行可能**:
1. つとむ様によるSupabaseプロジェクト作成（5-10分）
2. 環境変数設定（2分）
3. ローカルテスト（5分）
4. Vercel環境変数設定（2分）
5. デプロイ（1分）

**合計**: 約15-20分でコミュニティ機能がライブ！

---

## 📝 ファイル変更履歴

**新規ファイル**（11個）:
- `src/lib/supabase.ts` - Supabase client & helpers
- `src/components/AuthButton.astro` - 認証ボタン
- `src/components/ReviewSection.astro` - レビューセクション
- `src/components/TrendingTools.astro` - トレンディングツール
- `src/pages/login.astro` - ログインページ
- `src/pages/auth/callback.astro` - 認証コールバック
- `src/pages/rankings.astro` - ランキングページ
- `supabase-schema.sql` - データベーススキーマ
- `SUPABASE_SETUP.md` - セットアップガイド
- `.env.example` - 環境変数テンプレート
- `work/pivot-community.md` - ピボット計画書

**変更ファイル**（4個）:
- `astro.config.mjs` - SSR有効化
- `src/components/Header.astro` - 認証ボタン＆ランキングリンク追加
- `src/pages/index.astro` - トレンディングセクション追加
- `src/pages/tools/[slug].astro` - レビューセクション追加

**パッケージ追加**（2個）:
- `@astrojs/vercel@7.8.2`
- `@supabase/supabase-js`

---

## ⚠️ 注意事項

### セキュリティ
- `.env` ファイルは絶対にコミットしない（.gitignoreに追加済み）
- `PUBLIC_SUPABASE_ANON_KEY` はクライアント公開OK（RLSで保護）
- `service_role` キーは絶対にクライアントで使わない

### 無料枠制限（Supabase）
- 500 MB ストレージ
- 50,000 MAU（月間アクティブユーザー）
- 2 GB 帯域幅

→ MVP段階では十分！成長したらアップグレード

---

**Last Updated**: 2026-02-10 15:17
**Status**: 🚧 70%完了 - Supabaseセットアップ待ち
**Next Action**: つとむ様によるSupabaseプロジェクト作成
