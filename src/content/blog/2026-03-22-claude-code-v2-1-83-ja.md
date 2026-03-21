---
title: "Claude Code v2.1.83 リリース - --bare flag追加とWindows line-by-line streaming無効化"
description: "AnthropicはClaude Code v2.1.83を公開。--bare flagによるスクリプト化-pコールの最適化、--channels permission relay、Windowsでのline-by-line streaming無効化など、20件以上の変更が含まれている。"
publishedAt: "2026-03-22"
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop"
category: "ai-tools"
lang: "ja"
tags: ["claude-code", "anthropic", "ai-coding", "release-notes", "v2.1.83"]
featured: false
author: "AI Tools Hub"
---

Anthropicは2026年3月22日、Claude Code v2.1.83を公開した。このバージョンでは--bare flagによるスクリプト化-pコールの最適化、--channels permission relay、Windowsでのline-by-line streaming無効化など、20件以上の変更が含まれている。

## 主要な新機能

### --bare flag for scripted -p calls

`-p`（プリント）モード呼び出し用の`--bare`フラグが追加された。このフラグを使用すると、hooks、LSP、plugin sync、skill directory walksがスキップされる。`ANTHROPIC_API_KEY`または`--settings`経由のapiKeyHelperが必要であり、OAuthとkeychain認証は無効化され、auto-memoryも完全に無効化される。

### --channels permission relay

`--channels`フラグ（research preview）が追加された。permission capabilityを宣言したchannelサーバーがtool approvalプロンプトを phoneに転送できるようになった。

### Windowsでのline-by-line streaming無効化

Windows（WSLを含むWindows Terminal含む）でline-by-line response streamingが無効化された。これはレンダリングの問題によるもの。

## その他の変更

### 認証・セッション関連

複数の同時Claude Codeセッション間で、1つのセッションがOAuth tokenを refreshした際の再認証要求の問題が修正された。

### Voice Mode関連

voice modeでretry failureが実際にはネットワークエラーであるにもかかわらず誤った"check your network"メッセージを表示していた問題が修正された。voice mode audioがserverがWebSocket接続をsilentにdropした際の回復も修正された。

### セキュリティ修正

`CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS`がstructured-outputs beta headerを抑制せず、proxy gatewayがVertex/Bedrockにforwardする際に400エラーを発生させる問題が修正された。

### パフォーマンス・メモリ改善

250kファイルの的大型リポジトリで約80MBのメモリ使用量が節約された。起動時のメモリ使用量が約18MB改善された。

### プラグイン改善

ref-tracked pluginが每次load時にre-cloneされ、upstreamの変更を取得できるようになりました。

### VSCode拡張機能

Git Bash使用時のWindows PATH inheritancesの問題が修正された（v2.1.78でのregression）。

## 変更点の完全なリスト

- Added --bare flag for scripted -p calls
- Added --channels permission relay
- Fixed multiple concurrent Claude Code sessions requiring repeated re-authentication
- Fixed voice mode silently swallowing retry failures
- Fixed voice mode audio not recovering when server drops WebSocket connection
- Fixed CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS not suppressing structured-outputs beta header
- Fixed --channels bypass for Team/Enterprise orgs
- Fixed a crash on Node.js 18
- Fixed unnecessary permission prompts for Bash commands containing dashes
- Fixed plugin hooks blocking prompt submission
- Fixed background agent task output race condition
- Fixed /btw not including pasted text
- Improved MCP read/search tool calls
- Improved ! bash mode discoverability
- Improved plugin freshness
- Disabled line-by-line response streaming on Windows
- [VSCode] Fixed Windows PATH inheritance for Git Bash

v2.1.83は、着実な改善とバグ修正を含むマイナーアップデートである。--bare flagはCI/CD環境でのscripted利用に適した選択肢となる。
