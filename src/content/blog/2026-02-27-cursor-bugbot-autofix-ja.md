---
title: "Cursor、Bugbot Autofixを追加 - PRの問題を自動修正"
description: "CursorのBugbotにAutofix機能が追加された。プルリクエストで検出した問題をクラウドエージェントが自動修正し、修正提案の35%以上がマージされている。"
publishedAt: "2026-02-27T03:00:00+09:00"
author: "AI Tools Hub"
category: "AI開発"
tags: ["Cursor", "Bugbot", "コードレビュー", "開発ツール", "自動修正"]
featured: true
lang: "ja"
seo:
  keywords: "Cursor, Bugbot, Autofix, プルリクエスト, 自動修正, コードレビュー, AIエージェント"
---

Cursorは2月26日、コードレビューツールBugbotにAutofix機能を追加したことを発表した。プルリクエストで検出された問題をクラウドエージェントが自動的に修正し、修正コードを提案する。

## Autofix機能の概要

Autofixは、Bugbotが検出した問題に対して、個別の隔離されたVM上でクラウドエージェントを実行し、修正を自動生成する機能だ。生成された修正はプルリクエストに直接提案される。

Cursorによると、Bugbot Autofixが提案した変更の35%以上が、元のプルリクエストにマージされているという。

## 動作の流れ

Bugbotはプルリクエスト上にコメントとしてAutofix変更のプレビューを投稿する。開発者は提供される`@cursor`コマンドを使用して、修正をマージできる。

より自動化を進めたい場合は、レビューなしでAutofixの変更をブランチに直接プッシュするよう設定することも可能だ。

## 有効化方法

Autofix機能は[Bugbotダッシュボード](https://cursor.com/dashboard?tab=bugbot)から有効化できる。詳細は[公式ブログ記事](https://cursor.com/blog/bugbot-autofix)で確認できる。

## 背景

Bugbotは、Cursorが提供するAIコードレビューツールで、プルリクエストの問題を自動検出する。今回のAutofix追加により、問題の検出だけでなく修正までを一貫して自動化する体制が整った。Cursorはクラウドエージェント、Computer Use対応など、AIエージェント機能の拡張を継続的に進めている。
