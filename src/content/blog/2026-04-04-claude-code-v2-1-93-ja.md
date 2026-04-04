---
title: "Claude Code v2.1.93 リリース - PreToolUseフック延期決定やフリッカーFREE渲染など"
description: "AnthropicがClaude Code v2.1.93をリリース。PreToolUseフックの延期決定機能、フリッカー-freeレンダリングオプション、PermissionDeniedフック、名前付きサブエージェントのタイプアヘッド対応などを含む。"
publishedAt: "2026-04-04T22:30:00+09:00"
author: "AI Tools Hub 編集部"
category: "ニュース"
tags: ["Claude Code", "Anthropic", "コーディング", "AI", "リリースノート"]
featured: true
lang: "ja"
seo:
  keywords: "Claude Code v2.1.93, Anthropic, AIコーディング, リリースノート"
  ogImage: "/images/blog/claude-code-v2-1-93.png"
---

# Claude Code v2.1.93 リリース - PreToolUseフック延期決定やフリッカーFree渲染など

Anthropicは2026年4月4日、Claude Code v2.1.93をリリースした。本次リリースでは、PreToolUseフックへの延期機能、フリッカー-freeレンダリング、PermissionDeniedフックなど多くの改善が含まれている。

## 主要な新機能

### PreToolUseフックへの延期決定機能

PreToolUseフックに「defer」パーミッション決定が追加された。これによりヘッドレスセッションはツールコールで一時停止し、`-p --resume`で再評価のために再開できる。自動化ワークフローでの柔軟性が向上した。

### フリッカーFreeレンダリングオプション

新しい環境変数`CLAUDE_CODE_NO_FLICKER=1`が追加された。これを有効にすると、仮想化されたスクロールバックを持つフリッカー-free alt-screenレンダリングを選択できる。

### PermissionDeniedフック

`PermissionDenied`フックが追加された。このフックはauto-mode分類器による拒否後にアクティブになる。このフックで`{retry: true}`を返すと、モデルがアクションを再試行するプロンプトを表示できる。

### 名前付きサブエージェントのタイプアヘッド対応

名前付きサブエージェントが`@`メンションのタイプアヘッド候補に含まれるようになった。サブエージェント更容易に呼び出せるようになった。

## バグ修正

- その他の安定性およびパフォーマンス改善

## 詳細情報

- 公式ドキュメント: https://code.claude.com/docs/en/changelog
- リリース日: 2026年4月4日