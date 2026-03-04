---
title: "Claude Code v2.1.68 リリース — Opus 4.6デフォルト設定とultrathinkキーワードの再導入"
description: "Claude Code v2.1.68がリリース。Opus 4.6がMax/Teamサブスクライバーにmedium effortでデフォルト設定され、ultrathinkキーワードが再導入。Opus 4と4.1は削除。"
publishedAt: "2026-03-04T20:30:00+09:00"
author: "AI Tools Hub"
category: "ai-coding"
tags: ["Claude Code", "Claude", "AI coding", "release notes"]
lang: "ja"
featured: false
---

# Claude Code v2.1.68 リリース — Opus 4.6デフォルト設定とultrathinkキーワードの再導入

Claude Code v2.1.68が2026年3月4日（米国時間）にリリースされた。今回はモデルデフォルト設定の変更と、ultrathinkキーワードの再導入が主な変更点となる。

## 主な変更点

### Opus 4.6がデフォルトモデルに

Opus 4.6がMaxおよびTeamサブスクライバーのデフォルトモデルとして設定された。Medium effortはほとんどのタスクにおいて速度と詳細度のバランスが最も優れており、/modelコマンドでいつでも変更 가능하다。

### ultrathinkキーワードの再導入

以前は削除されていた「ultrathink」キーワードが再導入され、次のターンでhigh effortを有効にできるようになった。これにより、必要に応じて深い思考を必要とするタスクに切り替えられる。

### Opus 4および4.1の削除

Claude CodeのFirst-Party APIからOpus 4とOpus 4.1が削除された。これらのモデルをピン留めしていたユーザーは自動的にOpus 4.6に移行される。

## 技術詳細

- Medium effortはほとんどのタスクに適しており、速度と品質のバランスが良い
- /modelコマンドでモデルやeffortレベルを随时変更可能
- 旧モデル（Opus 4/4.1）を使用していたユーザーはシームレスに新モデルへ移行

## アップデート方法

Claude Codeユーザーは以下のコマンドで最新バージョンにアップデートできる：

```bash
claude update
```

または、新しいインストールが必要な場合は[公式ドキュメント](https://code.claude.com/docs)を参照のこと。
