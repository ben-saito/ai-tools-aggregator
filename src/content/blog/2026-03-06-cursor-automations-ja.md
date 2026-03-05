---
title: "Cursor Automations リリース - トリガーとスケジュールに基づく常駐エージェント"
description: "Cursorが新しいAutomations機能をリリース。トリガーとスケジュールに基づいて動作する常駐エージェントを構築できる。"
publishedAt: "2026-03-06T02:00:00+09:00"
author: "AI Tools Hub"
category: "AI開発"
tags: ["Cursor", "AIエージェント", "自動化", "MCP", "クラウドエージェント"]
featured: true
lang: "ja"
seo:
  keywords: "Cursor, Automations, トリガー, スケジュール, クラウドエージェント, MCP"
---

Cursorは、トリガーとユーザーが定義する指示に基づいて動作する常駐エージェントを構築できる新機能「Automations」をリリースした。

## Automationsとは

Automationsは、スケジュールまたは特定のイベントの発生時に起動するエージェントを作成するための機能である。従来のエージェントがユーザーが手動で起動するものだったのに対し、Automationsでは外部イベントに応じた自動実行が可能になる。

Automationsはスケジュールに基づいて実行されるほか、以下の外部サービスのイベントによりトリガー:
- Slack
- Linear
- GitHub
- PagerDuty
- Webhook

トリガーが発動すると、エージェントはクラウドサンドボックス環境で起動し、設定されたMCPとモデルを使用して指示に従い実行される。

## 主な機能

### 外部サービスとの統合

Automationsは、一般的な開発ツールとの統合をサポートしている:

- **Slack**: 自動通知とメッセージへの反応
- **Linear**: タスク管理とプロジェクト更新
- **GitHub**: Pull Requestとリポジトリイベントの監視
- **PagerDuty**: インシデント対応とアラート対応
- **Webhook**: 任意のREST APIとの統合が可能

### クラウド実行環境

各Automationエージェントは、完全な開発環境を備えた分離されたクラウドサンドボックスで実行される。これにより、実行の安全性と予測可能性が保証され、ローカルリソースとは独立してエージェントが動作できる。

### メモリツール

Automationsはメモリツールにアクセスでき、エージェントは過去の実行から学習できる。これにより、時間の経過とともにエージェントの品質が向上し、成功したパターンを記憶し、錯誤を繰り返さないようになる。

## Automationsの作成

Automationsは[cursor.com/automations](https://cursor.com/automations)で作成できる。また、[マーケットプレイス](https://cursor.com/marketplace#automations)からテンプレートを選択して開始することも可能。使用例に応じたテンプレートも用意されており、一般的なユースケースに合わせてカスタマイズできる。

Automationの設定では以下を指定:
- 起動トリガー（スケジュールまたはイベント）
- エージェントへの指示
- 使用するMCP統合
- タスク処理用モデル

## 技術的背景

Automationsの登場は、反応型AIアシスタントからプロアクティブなシステムへの移行という一般的なトレンドに合致している。特定のイベント発生時にタスクを自動実行する機能は、AI機能をチームの開発ワークフローに直接統合することを可能にする。

Automationsを備えたクラウドエージェントは、AI開発パートナーの次のステップとなる。以前はアシスタントがユーザーによる明示的な起動を必要としていたが、環境の変化に反応して自律的に動作できるようになった。

## 詳細情報

詳細は[cursor.com/automations](https://cursor.com/automations)で確認できる。[公式アナウンス](https://cursor.com/blog/automations)も併せて参照されたい。
