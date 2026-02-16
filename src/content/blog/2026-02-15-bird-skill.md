---
title: "Bird Skill - X/Twitter操作をCLIで実現するClawdbotスキル"
description: "Clawdbot向けBird Skillを利用して、X/Twitterのタイムライン閲覧、投稿、検索、エンゲージメント操作をコマンドラインから実行する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Bird", "Twitter", "X", "CLI", "ソーシャルメディア自動化"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Bird Skill, Twitter CLI, X API, ソーシャルメディア自動化, GraphQL, Cookie認証"
---

## 概要

Bird Skillは、Clawdbotフレームワーク内でX（旧Twitter）の操作をコマンドラインから実行するためのスキルである。`bird` CLIツールを利用し、タイムライン閲覧、ツイート投稿、検索、エンゲージメント操作をGraphQL APIとCookie認証を通じて実現する。

本スキルは、X/Twitter公式APIの代替として、ブラウザCookie経由の認証を採用することで、API利用料金を回避しつつ、高速なデータ取得と操作を可能にする。公式サイト（https://bird.fast）で公開されている。

### 技術的背景

従来のX/Twitter公式APIは、2023年以降、無料プランの廃止と有料化が進み、個人開発者や小規模プロジェクトにとって利用障壁が高まっている。BirdはこれをCookie認証とGraphQLエンドポイント直接利用で解決し、ブラウザログイン状態を活用した操作を実現する。

提供される主要機能は以下の通り:
- タイムライン取得（ホームタイムライン、ユーザータイムライン）
- ツイート投稿・リプライ・引用
- 検索（キーワード、ユーザー、ハッシュタグ）
- エンゲージメント操作（フォロー、アンフォロー、いいね、ブックマーク）
- メディアアップロード（画像最大4枚、動画1本）

## 技術的仕様

### システム要件

- Node.js v16以上（npm/pnpm/bunのいずれか）
- macOS（Homebrewインストールの場合）
- X/Twitterアカウント（ブラウザログイン済み）

### インストール方法

**npm経由（クロスプラットフォーム）:**
```bash
npm install -g @steipete/bird
```

**Homebrew経由（macOS、プリビルドバイナリ）:**
```bash
brew install steipete/tap/bird
```

**一時利用（インストール不要）:**
```bash
bunx @steipete/bird whoami
```

### 認証設定

BirdはCookie認証を採用する。以下の2つの方法で認証情報を提供する:

**方法1: ブラウザCookie自動抽出**
```bash
bird check  # 認証情報ソース確認
bird whoami  # ログイン中のアカウント確認
```

**方法2: 手動Cookie指定**
```bash
bird --auth-token <token> --ct0 <ct0> whoami
```

Arc BrowserやBrave使用時は、プロファイルディレクトリを指定:
```bash
bird --chrome-profile-dir "/path/to/profile" whoami
```

## 主要機能

### タイムライン取得

**ホームタイムライン（For Youフィード）:**
```bash
bird home
```

**フォロー中のタイムライン:**
```bash
bird home --following
```

**特定ユーザーのタイムライン:**
```bash
bird user-tweets @steipete -n 20
```

**メンション取得:**
```bash
bird mentions
bird mentions --user @handle  # 他ユーザーのメンション
```

### ツイート閲覧・スレッド表示

**単一ツイート表示:**
```bash
bird read https://x.com/user/status/123456789
bird 123456789  # URL省略形
```

**スレッド全体取得:**
```bash
bird thread https://x.com/user/status/123456789
```

**リプライ一覧:**
```bash
bird replies 123456789
```

### 検索機能

**キーワード検索:**
```bash
bird search "query" -n 10
bird search "from:steipete" --all --max-pages 3
```

検索クエリは、X/Twitter標準の検索演算子（`from:`, `to:`, `since:`, `-filter:retweets`等）をサポートする。

### ツイート投稿

**テキストのみ:**
```bash
bird tweet "hello world"
```

**リプライ:**
```bash
bird reply 123456789 "nice thread!"
```

**メディア付き投稿（画像）:**
```bash
bird tweet "check this out" --media image.png --alt "description"
bird tweet "pics" --media a.jpg --media b.jpg  # 最大4枚
```

**メディア付き投稿（動画）:**
```bash
bird tweet "video" --media clip.mp4
```

### エンゲージメント操作

**フォロー・アンフォロー:**
```bash
bird follow @handle
bird unfollow @handle
```

**ブックマーク操作:**
```bash
bird bookmarks -n 10
bird bookmarks --folder-id <id>  # フォルダ指定
bird unbookmark 123456789
```

**いいね一覧:**
```bash
bird likes -n 10
```

### ページネーション

大量データ取得時は、ページネーション機能を利用:
```bash
bird bookmarks --all  # 全ページ取得
bird bookmarks --max-pages 3  # ページ数制限
bird bookmarks --cursor <cursor>  # カーソルから再開
bird replies 123456789 --all --delay 1000  # ページ間遅延（ミリ秒）
```

### 出力オプション

**JSON出力（スクリプト用）:**
```bash
bird search "query" --json
bird search "query" --json-full  # APIレスポンス全体
```

**プレーンテキスト（カラーコード無効）:**
```bash
bird home --plain
bird home --no-emoji --no-color
```

## 実装例

### 例1: 最新ツイート10件をJSON形式で取得

```bash
#!/bin/bash
# 特定ユーザーの最新ツイートをJSON保存
bird user-tweets @steipete -n 10 --json > tweets.json
```

### 例2: キーワード検索結果を自動保存

```bash
#!/bin/bash
# AI関連ツイートを検索してファイル保存
QUERY="AI tools OR ChatGPT OR Claude"
bird search "$QUERY" -n 50 --json > ai_tweets_$(date +%Y%m%d).json
```

### 例3: 定期ツイート投稿（Cron連携）

```bash
#!/bin/bash
# 定期的に天気情報をツイート
WEATHER=$(curl -s "https://wttr.in/?format=3")
bird tweet "Today's weather: $WEATHER"
```

### 例4: ブックマーク全件取得とMarkdown変換

```bash
#!/bin/bash
# ブックマーク全件をMarkdown形式で保存
bird bookmarks --all --json | \
  jq -r '.[] | "- [\(.text)](\(.url)) by @\(.author.username)"' \
  > bookmarks.md
```

### 例5: メンション監視と自動返信

```bash
#!/bin/bash
# 新規メンションを監視（5分ごと）
while true; do
  bird mentions -n 5 --json | \
    jq -r '.[] | select(.text | contains("@mybot")) | .id' | \
    while read -r tweet_id; do
      bird reply "$tweet_id" "Thanks for mentioning me!"
    done
  sleep 300
done
```

## ユースケース

### ソーシャルメディア管理

企業や個人のSNSアカウント運用において、定期投稿、メンション監視、エンゲージメント分析を自動化する。公式API利用料金を抑えつつ、高頻度の操作が可能。

### データ収集・分析

学術研究やマーケティング調査で、特定キーワード・ハッシュタグのツイートを収集し、JSON形式でエクスポート。後段の分析ツール（Python、R等）と連携。

### ボット開発

カスタマーサポートボット、情報配信ボット、自動リプライシステムの構築。ブラウザCookie認証を活用することで、API制限を回避。

### コンテンツバックアップ

自身のツイート、ブックマーク、いいね履歴を定期的にJSON保存し、ローカルアーカイブを作成。

## 制限事項・セキュリティ考慮事項

### レート制限

Birdは公式APIと異なるエンドポイントを使用するが、X/Twitter側のレート制限は依然として存在する。大量リクエスト時は以下の対策を推奨:
- `--delay` オプションでリクエスト間隔を設定（推奨: 1000ms以上）
- ページネーション時は `--max-pages` で制限

### 投稿リスク

ツイート投稿・リプライは、レート制限にかかりやすい操作である。公式ドキュメントでは、制限時はブラウザツールでの代替を推奨している。

### Cookie認証のセキュリティ

Cookie認証は便利だが、セキュリティリスクが伴う:
- Cookie情報の漏洩防止（ファイルパーミッション設定、環境変数管理）
- 定期的なCookie更新（ブラウザログアウト後は再取得が必要）
- 公開リポジトリへのCookie情報コミット禁止

### GraphQL Query ID更新

X/Twitter側のAPI変更により、GraphQL Query IDが無効化されることがある。404エラー発生時は以下を実行:
```bash
bird query-ids --fresh
```

### 利用規約準拠

X/Twitterの利用規約では、自動化ツールによるスパム行為、過度なスクレイピングを禁止している。本スキルの利用時は、規約を遵守し、適切な頻度で操作すること。

## 参考リンク

- 公式サイト: https://bird.fast
- GitHub（推定）: https://github.com/steipete/bird（公式ドキュメント記載なし）
- npm: https://www.npmjs.com/package/@steipete/bird
- Homebrew: https://github.com/steipete/homebrew-tap
- X/Twitter Developer Platform: https://developer.x.com/

---

本記事の情報は2026年2月15日時点のものです。Bird Skillの機能、コマンド仕様、認証方法は変更される可能性があります。最新情報は公式サイト（https://bird.fast）をご確認ください。Cookie認証を利用する性質上、X/Twitter側のAPI仕様変更により機能が停止するリスクがあります。
