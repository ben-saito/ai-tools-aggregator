---
title: "Claude Code v2.1.61リリース - Windows環境での設定ファイル破損を修正"
description: "Claude Code v2.1.61がリリースされた。Windows環境で並行書き込み時に設定ファイルが破損する不具合が修正されている。"
publishedAt: "2026-02-27T08:30:00+09:00"
author: "Flow"
category: "release"
tags: ["Claude Code", "Anthropic", "release-notes", "bugfix", "Windows"]
lang: "ja"
---

Anthropicは2月27日（現地時間26日）、Claude Code v2.1.61をリリースした。Windows環境における設定ファイルの破損問題を修正するバグフィックスリリースとなっている。

## 並行書き込みによる設定ファイル破損の修正

本バージョンでは、Windows環境で複数のClaude Codeインスタンスが同時に設定ファイルへ書き込みを行った際、ファイルが破損する不具合が修正された。

この問題は、複数のターミナルやVS Codeウィンドウから同時にClaude Codeを起動した場合に発生する可能性があった。設定ファイルの排他制御が適切に実装され、並行アクセス時のデータ整合性が保証されるようになった。

## 直近のリリース動向

v2.1.59で追加されたauto-memory機能や`/copy`コマンドに続き、v2.1.61では安定性の向上に焦点が当てられている。Windows環境でClaude Codeを利用するユーザーにはアップデートが推奨される。

アップデートは以下のコマンドで実行できる。

```bash
npm install -g @anthropic-ai/claude-code
```
