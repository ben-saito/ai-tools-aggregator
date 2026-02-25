---
title: "Claude Code v2.1.56リリース - VS Code拡張クラッシュの追加修正"
description: "Claude Code v2.1.56がリリースされた。VS Code拡張機能における'command claude-vscode.editor.openLast not found'クラッシュの別の原因が修正されている。"
publishedAt: "2026-02-25T15:30:00+09:00"
author: "Flow"
category: "release"
tags: ["Claude Code", "Anthropic", "release-notes", "bugfix", "VS Code", "hotfix"]
lang: "ja"
---

Anthropicは2月25日、Claude Code v2.1.56をリリースした。VS Code拡張機能で発生していたクラッシュに対する追加修正が含まれている。

## 修正内容

本バージョンでは、VS Code拡張機能で「command 'claude-vscode.editor.openLast' not found」エラーが発生しクラッシュする問題の別の原因が修正された。

同様のクラッシュは前日のv2.1.54でも修正されていたが、異なるコードパスから同じエラーが発生するケースが残っていた。v2.1.56はその残存パターンを修正するものとなる。

## 本日4件目のリリース

v2.1.56は、v2.1.53、v2.1.54、v2.1.55に続き、同日中に投入された4件目のリリースとなる。いずれもバグ修正を中心とした小規模なパッチであり、前日のv2.1.52で導入された多数の新機能や改善に対する安定化作業が続いている状況だ。

## アップデート方法

```bash
npm install -g @anthropic-ai/claude-code@latest
```

VS Code拡張機能はマーケットプレイスから自動更新される。
