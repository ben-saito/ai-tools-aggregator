---
title: "Claude Code v2.1.84 リリース - PowerShellツールプレビューと環境設定の強化"
description: "Claude Code v2.1.84がリリース。Windows向けのPowerShellツール、環境変数によるモデル選択のカスタマイズアイドルセッション処理の改善などが含まれる。"
publishedAt: "2026-03-26T10:30:00+09:00"
author: "AI Tools Hub"
category: "AI開発"
tags: ["Claude Code", "AIエージェント", "開発ツール", "v2.1.84", "リリースノート"]
featured: true
lang: "ja"
seo:
  keywords: "Claude Code, 2.1.84, PowerShell, 環境変数, リリース"
---

Claude Code v2.1.84が2026年3月26日にリリースされた今回は、Windows向けのPowerShellツールサポート、新しい環境変数設定オプション、数多くの安定性改善が含まれている。

## Windows向けPowerShellツール

Windowsユーザー向けの新しい**PowerShellツール**がオプトインプレビューとして利用可能になった。このツールにより、Windows開発環境内で直接PowerShellコマンドを実行でき、Bashを超えたシェル機能扩展が可能になった。

Windows固有のスクリプトやコマンドレットをClaude Codeで活用できるようになり、特にWindows固有の自動化タスクや管理ワークフローに有用である。

## 環境変数の強化

より詳細な控制のために、いくつかの新しい環境変数が追加された:

- **ANTHROPIC_DEFAULT_{OPUS,SONNET,HAIKU}_MODEL_SUPPORTS**: サードパーティプロバイダー（Bedrock、Vertex、Foundry）でピン留めされたデフォルトモデルの努力/思考能力検出をオーバーライド
- **ANTHROPIC_DEFAULT_{MODEL}_MODEL_NAME/_DESCRIPTION**: /modelピッカーのラベルをカスタマイズ
- **CLAUDE_STREAM_IDLE_TIMEOUT_MS**: ストリーミングアイドルウォッチドッグのしきい値を設定（デフォルト90秒）

これらの追加により、エンタープライズ展開やカスタム設定の柔軟性が向上した。

## アイドルセッション処理の改善

75分以上不在だったユーザーが戻ってくると、`/clear`を提案するプロンプトが表示される。これにより、古いセッションでの不要なトークン再キャッシュが削減される。断続的なユーザーのリソース使用管理の最適化に 도움이る。

また、ディープリンク（claude-cli://）が 检测顺序ではなく、ユーザーが 선호するターミナルで開かれるようになった。

## 安定性とパフォーマンスの改善

- ネイティブターミナルカーソルがテキスト入力キャレットを追跡するようになり、IME組成（CJK入力）がインラインでレンダリングされる
- スクリーーリーダーが入力位置を正しく追跡できるようになった
- macOSの一時的なkeychain読み取り障害导致的「ログインしていません」エラーが修正された
- コアツールがバイパスなしで遅延するコールドスタートの問題が修正された

## VSCode拡張機能の更新

- 使用率とリセット時間を含むレート制限警告バナーが追加された
- /statsでの統計スクリーンショット（Ctrl+S）がすべてのビルドで動作し、16倍高速になった

## 詳細情報

変更の全量は[GitHubのリリースノート](https://github.com/anthropics/claude-code/releases)で確認できる。