---
title: "Cursor、30以上の新プラグインを追加したマーケットプレイスを発表"
description: "CursorがAtlassian、Datadog、GitLab、Glean、Hugging Face、monday.com、PlanetScaleなどパートナーからの新プラグインを追加。クラウドエージェントがMCPを通じてより広範なスタックに対応する。"
publishedAt: "2026-03-12T02:00:00+09:00"
author: "AI Tools Hub"
category: "AI開発"
tags: ["Cursor", "マーケットプレイス", "MCP", "開発ツール", "プラグイン"]
featured: true
lang: "ja"
seo:
  keywords: "Cursor, マーケットプレイス, MCP, プラグイン, AIコーディング, 開発ツール"
---

Cursorは3月11日、30以上の新プラグインを追加したマーケットプレイスを発表した。Atlassian、Datadog、GitLab、Glean、Hugging Face、monday.com、PlanetScaleなどのパートナーが提供するプラグインが含まれている。

## 新しいプラグイン

Cursorは[pursor.com/marketplace](https://cursor.com/marketplace)で30以上の新プラグインを公開した。これらのプラグインにより、開発者はCursorから直接、より広範なスタックに対して読み取り、書き込み、操作を行うことができる。

対応ツールの増加により、開発ワークフローの自動化と効率化が可能になる主な領域は以下のとおりだ。

### プロジェクト管理

monday.comやLinearとの統合により、チケット作成、更新、ワークフロー操作をCursor内で行うことができる。

### モニタリングとオブザーバビリティ

Datadogとの統合により、エラー追跡、パフォーマンス監視、アラート確認をCursorのエージェントが直接実行できる。

### バージョン管理とCI/CD

GitLab統合により、MR作成、パイプライン監視、デプロイ操作をCursorから直接管理できる。

### ナレッジ検索と社内情報

Gleanとの統合により、社内のドキュメントや知識ベースを検索し、必要な情報をエージェントのコンテキストに組み込むことができる。

### AI・MLワークフロー

Hugging Face統合により、モデルの検索、デプロイ、推論実行をCursor内で行うことができる。

### データベース

PlanetScaleとの統合により、スキーマ参照、クエリ実行、データ操作をCursorから直接実行できる。

## MCPとエージェント対応

ほとんどのプラグインには[MCP（Model Context Protocol）](https://cursor.com/docs/context/mcp)が含まれており、クラウドエージェントがこれらのツールを手動で起動したり、[オートメーション](https://cursor.com/docs/cloud-agent/automations)で自動的にトリガーしたりして 사용할できる。

これにより、定型的な開発タスクをエージェントに 任せるすることが可能になり、人間の開発者はより複雑な意思決定に集中できるようになる。

## オートメーション機能

新プラグインは、先日発表された[オートメーション機能](https://cursor.com/blog/automations)と相性がよい。スケジュールベースまたはSlack、Linear、GitHub、PagerDuty、Webhooksからのイベントトリガーでエージェントを実行できる。

## 参考リンク

- [Cursor Changelog](https://cursor.com/changelog/03-11-26)
- [マーケットプレイス](https://cursor.com/marketplace)
- [プラグイン公式ドキュメント](https://cursor.com/docs/plugins)
- [オートメーション公式ドキュメント](https://cursor.com/docs/cloud-agent/automations)
