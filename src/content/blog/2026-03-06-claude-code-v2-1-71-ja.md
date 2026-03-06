---
title: "Claude Code v2.1.71 リリース - Claude APIスキル追加と機能強化"
description: "AnthropicがClaude Code v2.1.71をリリース。Claude APIスキル、Voice STT対応言語拡大、VS Code統合強化、多数の改善と修正を含む。"
publishedAt: "2026-03-06"
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop"
category: "ai-tools"
lang: "ja"
tags: ["claude-code", "anthropic", "ai-coding", "release-notes", "v2.1.71"]
featured: false
author: "AI Tools Hub"
---

Anthropicは2026年3月6日、Claude Code v2.1.71をリリースした。本バージョンは、新機能の追加を中心に多数の変更を含む大型アップデートとなっている。

## 主要な変更点

### 新機能: Claude APIスキル

**Claude APIスキルの追加**: `/claude-api`スキルが導入され、Claude APIとAnthropic SDKを使用したアプリケーション構築が容易になった。これにより、Claudeの機能を外部アプリケーションから更容易に活用可能となる。

### Voice機能拡張

**STT対応言語拡大**: Voice STT（音声テキスト変換）が10言語 расширенаされ、対応言語は20言語となった。新たにロシア語、ポーランド語、トルコ語、オランダ語、ウクライナ語、ギリシャ語、チェコ語、デンマーク語、スウェーデン語、ノルウェー語がサポートされた。

### UX改善

**effortレベル表示**: ロゴやスピナーにeffortレベル（例: "with low effort"）が表示されるようになり、現在のeffort設定を確認しやすくなった。

**エージェント名表示**: `--agent`使用時にターミナルタイトルにエージェント名が表示されるようになった。

### VS Code統合強化

**MCPサーバー管理ダイアログ**: チャットパネルで`/mcp`コマンドを使用し、MCPサーバーの有効化/無効化、再接続、OAuth認証管理を実行可能。ターミナルを切り替えずに済むようになった。

### セキュリティ強化

**スキル読み込みのセキュリティ修正**: ネストしたスキル発見時に`node_modules`などのgitignoreされたディレクトリからスキルが読み込まれる可能性があるセキュリティ問題を修正した。

### その他の新機能

- `/remote-control`にオプショナルなname引数を追加（カスタムセッションタイトル設定可能）
- 数値キーパッドでのオプション選択サポート
- カスタムMITMプロキシ使用時のTLS証明書検証を許可する` sandbox.enableWeeperNetworkIsolation`設定追加
- 組み込みのコミット/PRワークフロー指示を無効化する`includeGitInstructions`設定追加
- `/reload-plugins`コマンドの追加
- Claude Code Desktop起動時の初回プロンプト表示（macOS/Windows、最大3回表示）
- `${CLAUDE_SKILL_DIR}`変数の追加

### バグ修正

- 信用ダイアログが最初の実行時にすべての.mcp.jsonサーバーを暗黙的に有効にする問題を修正
- `claude remote-control`がnpmインストール時にクラッシュする問題を修正
- 古いOpusモデルバージョンが現在ので解決されるように修正
- macOSキーチェーン腐敗問題の修正
- `.credentials.json`のサブスクリプションタイプ表示問題を修正

## 総括

v2.1.71は開発者体験を大きく向上させるリリース。Claude APIスキルの追加により外部アプリケーションからのClaude活用が容易になり、Voice STTの多言語対応、VS Code統合の強化など、多くの要望の多かった機能が実装されている。