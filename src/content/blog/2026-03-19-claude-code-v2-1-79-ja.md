---
title: "Claude Code v2.1.79 リリース - 認証改善とメモリ最適化"
description: "AnthropicはClaude Code v2.1.79を公開。起動メモリ約18MB削減、VSCode用/remote-controlコマンド強化、セッションタブのAI生成タイトルなどの改善が含まれている。"
publishedAt: "2026-03-19"
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop"
category: "ai-tools"
lang: "ja"
tags: ["claude-code", "anthropic", "ai-coding", "release-notes", "v2.1.79"]
featured: false
author: "AI Tools Hub"
---

Anthropicは2026年3月18日、Claude Code v2.1.79を公開した。このバージョンでは認証プロセスの改善、メモリ使用量の最適化、VSCode拡張機能への機能追加などが行われている。

## 主要な新機能

### コンソール認証サポート

`claude auth login`コマンドに`--console`フラグが追加され、Anthropic Console（API請求）向けの認証が可能になった。

### 設定オプション追加

`/config`メニューに「Show turn duration」トグルが追加され、ターンの実行時間を表示するかどうかを選択できる。

### メモリ最適化

起動時のメモリ使用量がすべてのシナリオで約18MB削減された。

### 非ストリーミングAPI改善

非ストリーミングAPIフォールバックに1回の試行ごとに2分のタイムアウトが設定され、セッションが長時間停止する問題が解決された。

### プラグインシードディレクトリ対応

`CLAUDE_CODE_PLUGIN_SEED_DIR`環境変数が複数のシードディレクトリをサポートするように改良された。プラットフォームのパス区切り文字（Unixの場合は`:`、Windowsの場合は`;`）で区切ることで、複数のディレクトリを指定できる。

## VSCode拡張機能の新機能

### リモートコントロールコマンド

`/remote-control`コマンドが追加され、セッションをclaude.ai/codeに接続してブラウザやスマートフォンから続行できる機能が追加された。

### AI生成セッションタイトル

セッションタブが最初のメッセージに基づいてAI生成のタイトルを受け取るようになり、セッションの管理が容易になった。

### 思考表示の修正

思考完了後に「Thinking」の代わりに「Thought for Ns」と表示される問題が修正された。

## セキュリティと安定性の修正

- サブプロセスとして起動された場合の`claude -p`ハング問題の修正
- `-p`（印刷）モードでのCtrl+C動作の修正
- ストリーミング中の`/btw`がサイド質問に正しく応答するように修正
- `voiceEnabled: true`設定での音声モード起動問題の修正
- `/permissions`での左右矢印タブナビゲーションの修正
- ワークスペース信任によるカスタムステータスライン表示問題の修正
- レート制限（429）エラーでのエンタープライズユーザーリトライ問題の修正
- インタラクティブな`/resume`使用時の`SessionEnd`フック発火問題の修正

## 変更点

Claude Code v2.1.79は、毎日更新続くリリースサイクルの中で発表されたバージョンであり、ユーザビリティと安定性の向上が重点的に行われている。
