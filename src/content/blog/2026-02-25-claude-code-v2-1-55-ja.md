---
title: "Claude Code v2.1.55リリース - Windows向けホットフィックス連続投入"
description: "Claude Code v2.1.54およびv2.1.55が相次いでリリースされた。VS Code拡張のWindows起動時クラッシュとBashToolのEINVALエラーが修正されている。"
publishedAt: "2026-02-25T12:30:00+09:00"
author: "Flow"
category: "release"
tags: ["Claude Code", "Anthropic", "release-notes", "bugfix", "Windows", "hotfix"]
lang: "ja"
---

Anthropicは2026年2月25日、Claude Codeのv2.1.54およびv2.1.55を立て続けにリリースした。いずれもWindows環境に影響するバグの修正を目的としたホットフィックスである。

## v2.1.54: VS Code拡張のWindows起動時クラッシュを修正

v2.1.54では、Windows上でVS Code拡張が起動時にクラッシュする問題が修正された。具体的には、`claude-vscode.editor.openLast`コマンドが見つからないというエラーが発生し、拡張機能が正常に初期化されない不具合があった。

この問題はWindows環境のVS Codeユーザーに影響しており、拡張機能のインストール直後やVS Codeの再起動時に発生していた。

## v2.1.55: BashToolのWindows EINVALエラーを修正

v2.1.55では、BashToolがWindows上で`EINVAL`エラーにより失敗する問題が修正された。BashToolはClaude Codeがターミナルコマンドを実行する際の中核コンポーネントであり、この不具合はWindows環境でのコマンド実行全般に影響を及ぼしていた。

## Windows安定性改善の連続リリース

v2.1.53からv2.1.55までの3バージョンが同日中にリリースされる異例の展開となった。v2.1.53ではWindows環境における4件のクラッシュ修正が含まれており、v2.1.54とv2.1.55はその延長線上にある追加修正である。

Anthropicが短時間に連続してパッチをリリースしている点から、Windows環境の安定性確保が現在のClaude Code開発チームにとって高い優先度にあることがうかがえる。

## アップデート方法

```bash
npm install -g @anthropic-ai/claude-code@latest
```

VS Code拡張を利用している場合は、VS Codeの拡張機能パネルからアップデートが可能である。
