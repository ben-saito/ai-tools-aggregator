---
title: "Claude Code v2.1.82 リリース - ステータスラインrate limits表示とplugin marketplace新ソース"
description: "AnthropicはClaude Code v2.1.82を公開。ステータスラインへのrate_limitsフィールド追加、settings.jsonからのplugin marketplaceソース宣言、--channels research previewなど、30件以上の変更が含まれている。"
publishedAt: "2026-03-21"
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop"
category: "ai-tools"
lang: "ja"
tags: ["claude-code", "anthropic", "ai-coding", "release-notes", "v2.1.82"]
featured: false
author: "AI Tools Hub"
---

Anthropicは2026年3月21日、Claude Code v2.1.82を公開した。このバージョンではステータスラインへのrate_limitsフィールド追加、settings.jsonからのplugin marketplaceソース宣言、--channels research previewなど、30件以上の変更が含まれている。

## 主要な新機能

### ステータスラインrate limits表示

statusline scriptsに`rate_limits`フィールドが追加され、Claude.aiのrate limit使用状況を表示できるようになった。5時間ウィンドウと7日間ウィンドウの情報を表示でき、`used_percentage`と`resets_at`が含まれる。

### settings.json plugin marketplaceソース

plugin entriesをsettings.json内にインラインで宣言できる`source: 'settings'`が追加された。これにより、プロジェクト固有のplugin設定をsettings.jsonで一元管理できる。

### CLI tool usage検出

plugin tipsにCLI tool usage検出が追加され、ファイルパターンマッチングに加えてCLI toolの検出也能になった。

### effort frontmatter for skills/slash commands

skillsとslash commandsにeffort frontmatterサポートが追加された。これにより、invoked時にmodel effort levelをoverrideできる。

### --channels research preview

MCPサーバーがsessionにmessageをpushできる`--channels`がresearch previewとして追加された（19 Marの詳細と重複の可能性あり）。

## バグ修正

### --resumeの並列ツール結果

`--resume`使用時にparallel tool resultsがdropされる問題が修正された。parallel tool callsを含むsessionはすべてのtool_use/tool_resultペアがrestoreされるようになり、[Tool result missing] placeholdersが表示されない。

### Voice mode WebSocket

Cloudflare bot detectionによるvoice mode WebSocket failuresが修正された。non-browser TLS fingerprintsを使用していた問題が解決された。

### 400エラー修正

API proxies、Bedrock、Vertex経由でfine-grained tool streaming使用時の400エラーが修正された。

### /remote-control表示条件

gatewayおよびthird-party provider配備で動作しない`/remote-control`が表示される問題が修正された。

### /sandbox tab navigation

/sandbox tab switchingがTabやarrow keysで反応しない問題が修正された。

## パフォーマンス改善

### @ファイル補完の応答性

large git repositoriesでの@ファイル補完の応答性が改善された。

### /effort表示改善

/effortが現在のauto値を表示するようになり、status bar indicatorと一致するようになった。

### /permissions UX改善

/permissionsでTabとarrow keysがlist内からtabをswitchできるようになった。

### バックグラウンドタスクパネル改善

バックグラウンドタスクパネルでleft arrowがlist viewから閉じるようになった。

### Plugin install tips簡略化

plugin install tipsが2-step flowから単一の`/plugin install`コマンドに簡略化されました。

### メモリ使用量削減

large repositories（约80MB saved on 250k-file repos）でstartup時のメモリ使用量が削減された。

### managed settingsの適用修正

remote-settings.jsonがprior sessionからcacheされた場合、managed settings（enabledPlugins、permissions.defaultMode、policy-set env vars）がstartup時に適用されない問題が修正された。

## 変更点

### plan modeの改善

plan modeで"clear context"オプションがデフォルトで非表示になった（`"showClearContextOnPlanAccept": true`でrestore可能）。

---
*Source: [GitHub Releases](https://github.com/anthropics/claude-code/releases)*