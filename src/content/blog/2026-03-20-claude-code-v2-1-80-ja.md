---
title: "Claude Code v2.1.80 リリース - レート制限表示とプラグイン機能拡張"
description: "AnthropicはClaude Code v2.1.80を公開。ステータスラインへのレート制限表示、settings.jsonでのプラグイン宣言、effort frontmatter対応など、開発者向け新機能が多数含まれている。"
publishedAt: "2026-03-20"
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop"
category: "ai-tools"
lang: "ja"
tags: ["claude-code", "anthropic", "ai-coding", "release-notes", "v2.1.80"]
featured: false
author: "AI Tools Hub"
---

Anthropicは2026年3月19日、Claude Code v2.1.80を公開した。このバージョンではレート制限の表示機能、プラグインシステム拡張、effort_frontmatter対応など、開発者の生産性向上に向けた新機能が多数追加されている。

## 主要な新機能

### ステータスラインへのレート制限表示

レート制限情報をステータスラインに表示できる`rate_limits`フィールドが追加された。5時間と7日間のウィンドウで表示され、`used_percentage`と`resets_at`が確認できる。

### settings.jsonでのプラグイン宣言

`source: 'settings'`プラグインソースが追加され、settings.json内でプラグインエントリをインラインで宣言できるようになった。

### CLIツール使用検出

ファイルパターンマッチングに加え、CLIツールの使用検出がプラグインヒントに追加された。

### effort frontmatter対応

スキルとスラッシュコマンドにeffort frontmatterサポートが追加され、呼び出し時のモデル effort レベルをオーバーライドできるようになった。

### --channelsフラグ（リサーチプレビュー）

MCPサーバーがセッションにメッセージをプッシュできる`--channels`フラグが追加された。

## セキュリティと安定性の修正

### --resumeの並列ツール結果修正

並列ツールコールを含むセッションで、すべてのtool_use/tool_resultペアが復元されるようになった。ツール結果の欠落placeholderが表示されなくなった。

### 音声モードWebSocket修正

Cloudflareのbot検出による音声モードWebSocket失敗問題が修正された。

### 精密なツールストリーミング修正

APIプロキシ、Bedrock、Vertex経由での精密なツールストリーミングで発生していた400エラーが修正された。

### /remote-control表示条件修正

Gatewayおよび第三方プロバイダーデプロイ	where /remote-control が機能しない場合に该当コマンドが表示されないようになった。

### メモリ使用量削減

大型リポジトリでの起動時メモリ使用量が約80MB削減された（250kファイルリポジトリの場合）。

### 保護された設定の修正

remote-settings.jsonが以前のセッションからキャッシュされている場合、managed settings（enabledPlugins、permissions.defaultMode、policy-set環境変数）が起動時に適用されない問題が修正された。

## その他の改善

- 大型gitリポジトリでの@ファイル補完の応答性改善
- /effortで現在のauto解決値を表示するように改善
- /permissionsでTabと矢印キーを使用してリスト内移動可能に
- 背景タスクパネルの左矢印でリストビューから閉じるように
- プラグインインストールヒントの改善（2ステップから単一コマンドへ）
