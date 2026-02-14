---
title: "BlogWatcher Skill - Clawdbot向けRSS/Atom監視システム"
description: "Clawdbot向けBlogWatcher Skillを利用して、RSS/Atomフィードの自動監視と新着記事検出を実現する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "BlogWatcher", "RSS", "Atom", "フィード監視", "CLI"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, BlogWatcher, RSS監視, Atomフィード, ブログ監視, CLI, Go"
---

# BlogWatcher Skill - Clawdbot向けRSS/Atom監視システム

2026年現在、情報収集の自動化を支援するツールとして、Clawdbot向けのBlogWatcher Skillが提供されている。BlogWatcherは、Go言語で開発されたコマンドラインツールであり、ブログやRSS/Atomフィードの更新を追跡し、新着記事の自動検出を可能にする。

本記事では、BlogWatcher SkillのClawdbotへの統合方法、主要機能、および実装例を解説する。

## 概要

BlogWatcher Skillは、Hyaxiaがオープンソースで開発するRSS/Atom監視ツールを、Clawdbotエージェントから利用可能にするスキルパッケージである。Clawdbotエージェントは、このスキルを通じて複数のフィードを登録・監視し、新着記事の検出時に自動的にアクションを実行できる。

### 主な特徴

- Go言語によるシングルバイナリ配布
- RSS/Atomフィード両対応
- 既読/未読管理機能
- スキャン・記事一覧・既読マーク等の基本操作
- Clawdbotスキルシステムとのネイティブ統合

## 技術的仕様

### システム要件

- Go 1.18以上（ビルド時）
- macOS、Linux、Windows対応（Go標準のクロスプラットフォーム対応）
- ネットワーク接続（フィード取得時）

### インストール方法

Clawdbotスキルシステムによる自動インストール、または手動でGoツールチェーンからインストールが可能。

#### Clawdbot経由（推奨）

```bash
# Clawdbotが自動的にインストール
clawdbot skill install blogwatcher
```

#### 手動インストール

```bash
go install github.com/Hyaxia/blogwatcher/cmd/blogwatcher@latest
```

インストール後、`blogwatcher --help`で動作確認が可能。

## 主要機能

BlogWatcherは、以下の主要コマンドを提供する。

### フィード管理

```bash
# フィード追加
blogwatcher add "My Blog" https://example.com

# 登録フィード一覧
blogwatcher blogs

# フィード削除
blogwatcher remove "My Blog"
```

### スキャンと記事管理

```bash
# 新着記事スキャン
blogwatcher scan

# 記事一覧表示
blogwatcher articles

# 記事を既読にする（ID指定）
blogwatcher read 1

# 全記事を既読にする
blogwatcher read-all
```

### コマンド出力例

フィード一覧の表示例:

```
$ blogwatcher blogs
Tracked blogs (1):

  xkcd
    URL: https://xkcd.com
```

スキャン実行例:

```
$ blogwatcher scan
Scanning 1 blog(s)...

  xkcd
    Source: RSS | Found: 4 | New: 4

Found 4 new article(s) total!
```

## 実装例

以下に、Clawdbotエージェントが BlogWatcher Skill を活用する実装例を示す。

### 1. 自動スキャンと通知

```javascript
// Clawdbotエージェントコード例（Node.js）
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

async function scanBlogsAndNotify() {
  try {
    const { stdout, stderr } = await execPromise('blogwatcher scan');
    
    // 新着記事数を抽出
    const match = stdout.match(/Found (\d+) new article\(s\) total/);
    if (match && parseInt(match[1]) > 0) {
      const count = match[1];
      console.log(`新着記事が${count}件見つかりました`);
      
      // Clawdbotのメッセージングシステムに通知
      // （実装は環境依存）
      await notifyUser(`新着記事: ${count}件`);
    }
  } catch (error) {
    console.error('スキャンエラー:', error);
  }
}

// 1時間ごとに実行
setInterval(scanBlogsAndNotify, 3600000);
```

### 2. フィード一覧のJSON出力（パース例）

```bash
# blogwatcherはネイティブJSON出力をサポートしないため、
# 出力をパースする必要がある

blogwatcher blogs | grep -A 1 "Tracked blogs" > /tmp/blogs.txt
```

### 3. 新着記事の自動既読化

```bash
#!/bin/bash
# 毎日午前2時に全記事を既読にするスクリプト例

blogwatcher read-all
echo "全記事を既読にしました: $(date)" >> /var/log/blogwatcher.log
```

### 4. 複数フィード一括登録

```bash
#!/bin/bash
# フィードリストから一括登録

declare -A feeds=(
  ["TechCrunch"]="https://techcrunch.com/feed/"
  ["Ars Technica"]="https://feeds.arstechnica.com/arstechnica/index"
  ["Publickey"]="https://www.publickey1.jp/atom.xml"
)

for name in "${!feeds[@]}"; do
  blogwatcher add "$name" "${feeds[$name]}"
  echo "追加: $name - ${feeds[$name]}"
done
```

### 5. Cron統合例

```cron
# crontabエントリ例（1時間ごとにスキャン）
0 * * * * /usr/local/bin/blogwatcher scan >> /var/log/blogwatcher-scan.log 2>&1
```

## ユースケース

BlogWatcher Skillは、以下のシナリオで活用される。

### 1. 技術ブログの定期監視

複数の技術ブログ（TechCrunch、Publickey、Ars Technica等）を登録し、新着記事を自動検出してDiscord/Slackに通知する。

### 2. 競合他社の発表監視

競合企業の公式ブログやニュースフィードを監視し、新製品発表やプレスリリースを即座に検出する。

### 3. 研究論文フィードの追跡

arXiv、IEEE、ACM等の論文フィードを監視し、特定トピックの新着論文を研究者に自動通知する。

### 4. ニュースアグリゲーション

複数のニュースソースからフィードを収集し、Clawdbotエージェントが内容を要約して日次レポートを生成する。

## 制限事項・セキュリティ考慮事項

### 制限事項

- JSON形式のネイティブ出力は未サポート（テキストパースが必要）
- フィード取得時のHTTPエラーハンドリングはコマンド実行側で実装が必要
- 大量のフィード（100件以上）を登録した場合の性能データは公開されていない

### セキュリティ考慮事項

- フィードURL検証: 信頼できないソースのURLは事前に検証すること
- ネットワークアクセス: 外部ネットワークへのアクセス権限が必要
- データストレージ: 既読/未読情報はローカルに保存されるため、機密情報を含むフィードの場合は適切なアクセス制御を実施すること

## 参考リンク

- 公式GitHubリポジトリ: https://github.com/Hyaxia/blogwatcher
- Clawdbot公式サイト: https://clawdbot.com
- RSS 2.0仕様: https://www.rssboard.org/rss-specification
- Atom 1.0仕様: https://tools.ietf.org/html/rfc4287

---

本記事の情報は2026年2月15日時点のものです。BlogWatcherの機能や仕様は変更される可能性があります。最新情報は公式GitHubリポジトリをご確認ください。
