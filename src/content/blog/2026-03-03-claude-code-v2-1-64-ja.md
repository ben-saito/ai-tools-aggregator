---
title: "Claude Code v2.1.64 リリース — Remote Control新機能とパフォーマンス改善"
description: "Claude Code v2.1.64がリリース。Remote Controlサブコマンド追加、BashToolパフォーマンス改善、コンテキスト自動保存機能強化など多数の改善を含む。"
publishedAt: "2026-03-03T12:00:00+09:00"
author: "AI Tools Hub"
category: "ai-coding"
tags: ["Claude Code", "Claude", "AI coding", "release notes"]
lang: "ja"
featured: false
---

# Claude Code v2.1.64 リリース — Remote Control新機能とパフォーマンス改善

Claude Code v2.1.64が2026年3月2日（米国時間）にリリースされた。今回はRemote Control機能の拡張とパフォーマンス改善を中心に、多くの新機能が追加されている。

## 主な変更点

### Remote Controlサブコマンド追加
外部ビルド環境向けのローカル環境を提供するRemote Control機能が強化された。モバイルやブラウザからセッションを継続する場合により柔軟な操作が可能になった。

### BashToolパフォーマンス改善
シェルスナップショット利用時に`-l`フラグをスキップするように改良され、コマンド実行がより高速になった。

### コンテキスト自動保存機能強化
自動保存機能の安定性と信頼性が向上し、長時間セッションでも重要な情報が失われにくくなった。

### Bashコマンド提案の智能化
複合コマンド向けの提案機能が改善され、より正確なコマンド提案が行われるようになった。

### マルチエージェントセッションのメモリ最適化
複数エージェントを同時に使用する際のメモリ使用量が最適化され、より効率的な並列処理が可能になった。

### セキュリティ修正
- statusLine/FileSuggestionフックのセキュリティ強化
- HTTP Hooks関連のセキュリティ改善

### Windows関連の改善
Windows環境での複数のクラッシュ問題が修正され、安定性が向上した。

### その他の改善
リスナー関連のメモリリークが修正され、長時間使用時の安定性が改善された。

## アップデート方法

Claude Codeは自動的に最新バージョンに更新される。以下のコマンドでバージョンを確認できる：

```bash
claude --version
```

## 出典

- [Claude Code Changelog](https://docs.anthropic.com/en/docs/claude-code/changelog)
- [Anthropic公式リリースノート](https://www.anthropic.com/news)
