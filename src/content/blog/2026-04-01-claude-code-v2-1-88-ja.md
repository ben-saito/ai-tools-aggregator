---
title: "Claude Code v2.1.88 リリース - パフォーマンス改善とセキュリティ問題の対応"
description: "Claude Code v2.1.88がリリースされた。パフォーマンス改善とWindows向け修正が行われる。"
publishedAt: "2026-04-01T00:00:00+09:00"
author: "AI Tools Hub"
category: "AI開発"
tags: ["Claude Code", "リリース", "開発ツール", "Anthropic", "AIコーディング"]
featured: false
lang: "ja"
seo:
  keywords: "Claude Code, v2.1.88, リリース, Anthropic, AI開発ツール, パフォーマンス"
---

AnthropicはClaude Code v2.1.88をリリースした。这次更新では、パフォーマンス改善とWindows向けの修正が行われている。

## 変更点

### 新しい環境変数
- **CLAUDE_CODE_NO_FLICKER=1**: バーチャルスクロールバックを使用したちらつき-free alt-screenレンダリング用の環境変数が追加された

### パーミッション管理の改善
- **PermissionDeniedフックの追加**: automode分類器が拒否した後に発火するPermissionDeniedフックが導入された。{retry: true}を返すことでモデルが再試行可能

### UX改善
- **@mentionタイプアヘッドの改善**: 名前付きサブエージェントの候補表示が改善された

### バグ修正
- **プロンプトキャッシュの問題修正**: 長いセッションでツールスキーマのバイトが変化することで発生していたプロンプトキャッシュヒットの問題を修正
- **ネストされたCLAUDE.mdの問題修正**: 多くのファイルを読み込む長いセッションで、ネストされたCLAUDE.mdファイルが複数回再注入される問題を修正
- **WindowsのCRLF問題修正**: Edit/WriteツールがWindowsでCRLFを二重に処理し、Markdownのハードラインフィードを削除する問題を修正
- **Windowsドライブの安全検出改善**: C:\\やC:\\WindowsなどのWindowsドライブルートの危険な削除に対する検出を改善

## セキュリティに関する重要な注意

v2.1.88のリリースに伴い、npmパッケージにcli.js.map（60MBのソースマップファイル）が含まれるという問題が発生した。このリークにより、1,906のソースファイルを復元することが可能となり、内部API設計、テレメトリー分析システム、暗号化ツールの詳細が暴露された。

これは2025年2月の類似インシデントに続く2回目のことであり、コミュニティからは透明性に関する懸念が提起されている。