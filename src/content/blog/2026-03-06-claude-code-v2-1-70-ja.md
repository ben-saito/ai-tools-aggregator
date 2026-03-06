---
title: "Claude Code v2.1.70 リリース - APIエラー修正とパフォーマンス改善"
description: "AnthropicがClaude Code v2.1.70をリリース。第三方ゲートウェイでのAPI 400エラー修正、Windows/WSLのクリップボード問題対応、Remote Controlポーリング頻度大幅削減など多数の改善点を含む。"
publishedAt: "2026-03-06"
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop"
category: "ai-tools"
lang: "ja"
tags: ["claude-code", "anthropic", "ai-coding", "release-notes", "v2.1.70"]
featured: false
author: "AI Tools Hub"
---

Anthropicは2026年3月6日、Claude Code v2.1.70をリリースした。本バージョンは、APIエラー修正、Windows/WSL環境の強化、パフォーマンス最適化を中心に多数のバグ修正と改善を含む。

## 主要な変更点

### API・通信関連修正

**第三方ゲートウェイ対応強化**: `ANTHROPIC_BASE_URL`環境変数で第三方ゲートウェイを使用した場合に発生していたAPI 400エラーを修正。ツール検索がプロキシエンドポイントを正しく検出し、`tool_reference`ブロックを無効化するようになった。

**Bedrock推論プロファイル対応**: 標準のClaude命名パターンと一致しないカスタムBedrock推論プロファイル使用時に発生していた「This model does not support the effort parameter」エラーを修正。

**ToolSearch後の空応答問題**: `ToolSearch`実行直後に空のモデル応答が返される問題を修正。サーバーがツールスキーマをシステムプロンプトスタイルのタグでレンダリングするため、モデルが早期に停止していた原因を特定し修正した。

### Windows/WSL環境の改善

**クリップボード文字化け修正**: Windows/WSLでCJK文字や絵文字を含む非ASCIIテキストがクリップボードで破損する問題を修正。PowerShellの`Set-Clipboard`cmdletを使用し、UTF-8エンコーディングを正しく処理するようにした。

**SSH接続でのEnterキー動作修正**: SSH接続経由で遅い場合に、Enterキーで改行ではなくサブミットが行われる問題を修正。

**Voice ModeのWindows互換性修正**: Windowsネイティブバイナリで「native audio module could not be loaded」エラーによりVoice Modeが失敗する問題を修正。

**VS Code起動問題修正**: WindowsでVS Code統合ターミナルから起動時に余分なVS Codeウィンドウが開く問題を修正。

### パフォーマンス最適化

**メモリ使用量削減**: カスタムCA証明書を持たないユーザーにおいてスタートアップメモリを約426KB削減した。

**Remote Controlポーリング最適化**: 接続中のRemote Controlポーリング頻度を1〜2秒から10分間に1回に削減し、サーバーロードを約300分の1に軽減。再接続は影響を受けない。

**UI再レンダリング改善**: ターン中のプロンプト入力を約74%削減し、レスポンスを高速化した。

### VS Code拡張機能新機能

**セッションリスト表示**: VS Codeアクティビティバーにスパークアイコンを追加し、すべてのClaude Codeセッションを一覧表示可能に。セッションはエディタとして開く。

**プラン表示機能強化**: VS Codeでプランの完全なMarkdownドキュメントビューを追加。フィードバック用のコメント追加サポートも実装。

**MCPサーバー管理ダイアログ**: チャットパネルで`/mcp`コマンドを使用し、MCPサーバーの有効化/無効化、再接続、OAuth認証管理をターミナルを切り替えずに実行可能に。

## その他の修正

- MCPサーバー接続後のプロンプトキャッシュ無効化問題を修正
- プッシュトゥトークがセッション開始時にACTIVATINGされない問題を修正
- `#NNN`を含むMarkdownリンクが現在のリポジトリを参照する問題を修正
- `/security-review`コマンドが古いgitバージョンで失敗する問題を修正
- `/color`コマンドでデフォルト色に戻す方法を追加
- プラグインの一部の表示問題を修正

## 総括

v2.1.70は堅牢性とパフォーマンスに重点を置いたリリース。第三方APIゲートウェイとの互換性向上、Windows/WSL環境の各種修正、メモリとネットワーク使用量の最適化など、日常的な開発体験を改善する内容が含まれている。
