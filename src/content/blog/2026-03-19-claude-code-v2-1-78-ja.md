---
title: "Claude Code v2.1.78 リリース - コンソール認証とメモリ最適化"
description: "AnthropicはClaude Code v2.1.78を公開。コンソール認証対応、メモリ使用量18MB削減、VSCode用/remote-controlコマンドなどの新機能が含まれている。"
publishedAt: "2026-03-19"
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop"
category: "ai-tools"
lang: "ja"
tags: ["claude-code", "anthropic", "ai-coding", "release-notes", "v2.1.78"]
featured: false
author: "AI Tools Hub"
---

Anthropicは2026年3月18日、Claude Code v2.1.78を公開した。このバージョンではコンソール認証対応、メモリ最適化、VSCode拡張機能への新機能追加などが行われている。

## 主要な新機能

### コンソール認証サポート

`claude auth login`コマンドに`--console`フラグが追加され、Anthropic Console（API請求）向けの認証が可能になった。

### 設定オプション追加

`/config`メニューに「Show turn duration」トグルが追加され、ターンの実行時間を表示するかどうかを選択できる。

### メモリ最適化

起動時のメモリ使用量がすべてのシナリオで約18MB削減された。

### 非ストリーミングAPI改善

非ストリーミングAPIフォールバックに1回の試行あたり2分のタイムアウトが追加され、セッションが永久にハングする問題を防止。

### プラグイン機能強化

`CLAUDE_CODE_PLUGIN_SEED_DIR`環境変数がサポートし、プラットフォームのパス区切り文字（Unixでは`:`、Windowsでは`;`）で区切って複数のシードディレクトリを指定可能に。

## VSCode拡張機能新機能

### /remote-controlコマンド

新しい`/remote-control`コマンドが追加され、セッションをclaude.ai/codeにブリッジしてブラウザやスマホから会話を継続できる。

### AI生成セッションタブタイトル

セッションタブに最初のメッセージに基づいたAI生成タイトルが表示されるようになった。

## バグ修正

多数のバグ修正が実施されている:

- `-p`（プリント）モードでCtrl+Cが動作しない問題
- ストリーミング中にトリガーされた`/btw`がサイド質問ではなくメインエージェントの出力を返す問題
- `voiceEnabled: true`設定での起動時にボイスモードが正しくACTIVATIONしない問題
- `/permissions`での左右矢印タブナビゲーション問題
- `CLAUDE_CODE_DISABLE_TERMINAL_TITLE`が起動時のターミナルタイトル設定を防止しない問題
- エンタープライズユーザーがレート制限（429）エラーでリトライできない問題
- インタラクティブな`/resume`使用時にSessionEndフックが発火しない問題
- サブプロセス（例：Pythonのsubprocess.run）としてspawnされた場合に`-p`ハング問題
- WSL2 with WSLgでのボイスモード問題
- VS CodeからDock/Spotlightで起動した際のBash toolがHomebrew和其他PATH依存バイナリを見つけられない問題
- .truecolorをサポートしないVS Code/Cursor/code-serverターミナルでのClaude orange色が薄く表示される問題
- `--worktree`フラグがワークツリーディレクトリからスキルとフックをロードしない問題

## セキュリティ修正

サンドボックスが有効な場合に依存関係が欠落しているときに无声に無効化される問題が修正され、可见なスタートアップ警告が表示されるようになった。

[Source: GitHub Releases](https://github.com/anthropics/claude-code/releases)
