---
title: "Claude Code v2.1.72 リリース - 効率性と操作性の大幅改善"
description: "Claude Code v2.1.72がリリースされた。Effortレベルの簡略化、bashパーサーの高速化、ツール検索の改善など、開発者 productivity向上のための多数の改善が含まれている。"
publishedAt: "2026-03-11"
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop"
category: "ai-tools"
lang: "ja"
tags: ["claude-code", "anthropic", "ai-coding", "release-notes", "developer-tools"]
featured: true
author: "AI Tools Hub"
---

Claude Code v2.1.72がリリースされた。本次更新では、開発者の生産性向上を目指す多数の改善とバグ修正が実施されている。

## 主要な新機能と改善

### Effortレベルの簡略化

 Effortレベルがlow/medium/highの3段階に簡略化され、maxオプションは削除された。新しいシンボル（○ ◐ ●）で表示され、頻繁な通知の代わりに簡単な通知として表示されるようになった。/effort autoコマンドでデフォルトにリセット可能。

### /copy コマンドの強化

/copyコマンドにwキーが追加された。クリップボードを経由せず、選択範囲を直接ファイルに書き込むことができる。SSH接続時に特に便利な機能。

### /plan コマンドの改善

/plansコマンドにオプションの説明引数が追加された。例: /plan fix the auth bugのように記述すると、エネルギーモードに即座に入る。

### ExitWorktree ツールの追加

ExitWorktreeツールが追加され、EnterWorktreeセッションから正常に退出できるようになった。

### bash自動承認リストの拡張

以下のコマンドがbashの自動承認リストに追加され、一般的な読み取り専用操作での許可プロンプトが削減された:
- lsof
- pgrep
- tput
- ss
- fd
- fdfind

### /config コマンドの改善

/configコマンドの操作性が改善された:
- Escape: 変更をキャンセル
- Enter: 保存して閉じる
- Space: 設定値を切り替え

### パフォーマンス改善

- bashパーサーがネイティブモジュールに切り替えられ、初期化速度が向上しメモリリークが解消
- バンドルサイズは約510KB削減
- 長セッションでのCPU使用率が改善
- 退出時の応答性が向上

### 音声入力の改善

repo名や一般的な開発用語（regex、OAuth、JSONなど）の音声入力精度が向上した。

## バグ修正

- ANTHROPIC_BASE_URLが設定されている場合でもENABLE_TOOL_SEARCHが設定されていればツール検索が有効に
- 複数の同時セッションで上矢印履歴が現在のセッション的消息を最初に表示
- --continueが--compactした後に最新のポイントから再開
- /clearでバックグラウンドタスクが殺されなくなった
- サンドボックス許可の問題を修正
- スキルフックが二重に発火する問題を修正
- ワークツリー分離の問題を修正
- フィードバック調査が長時間セッションで表示频率を修正

## 環境変数

- CLAUDE_CODE_DISABLE_CRON: スケジュールされたCronジョブをセッション中に即座に停止

## 参考

- [GitHub Changelog](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md)
