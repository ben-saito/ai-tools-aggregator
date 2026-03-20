---
title: "Claude Code v2.1.81 リリース - スクリプト向け--bareフラグとWindows改善"
description: "AnthropicはClaude Code v2.1.81を公開。スクリプト実行向け--bareフラグ、--channels permission relay、Windowsでのline-by-line streaming無効化など、34件の変更が含まれている。"
publishedAt: "2026-03-21"
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630&fit=crop"
category: "ai-tools"
lang: "ja"
tags: ["claude-code", "anthropic", "ai-coding", "release-notes", "v2.1.81"]
featured: false
author: "AI Tools Hub"
---

Anthropicは2026年3月20日、Claude Code v2.1.81を公開した。このバージョンではスクリプト実行向けの--bareフラグ追加、--channels permission relay、Windows向けのパフォーマンス改善など、34件の変更が含まれている。

## 主要な新機能

### --bareフラグ for scripted -p calls

スクリプト実行向けの新機能として`--bare`フラグが追加された。このフラグを使用すると、hooks、LSP、plugin sync、skill directory walksがスキップされる。`ANTHROPIC_API_KEY`または`--settings`でのapiKeyHelperが必要であり、OAuthとkeychain認証は無効化される。auto-memoryも完全に無効化される。

### --channels permission relay

channel serversがpermission capabilityを宣言している場合、ツール承認プロンプトをスマートフォンに転送できる--channels permission relayが追加された（research preview）。

### 認証問題の修正

複数のConcurrent Claude Codeセッションで、一つのセッションがOAuthトークンを更新した際に他のセッションが再認証を要求する問題が修正された。

### Voice modeの改善

voice modeでリトライ失敗が无声で飲み込まれ、「ネットワークを確認してください」というmisleadingなエラーメッセージが表示されていた問題が修正された。また、サーバーがWebSocket接続をsilentにドロップした場合のaudio recoveryも修正された。

### Windows向け改善

rendering問題により、Windows（WSL in Windows Terminalを含む）でline-by-line response streamingが無効化された。また、Git Bash使用時のBash toolでのWindows PATH inheritanceが修正された（v2.1.78でのregression）。

### MCPの改善

MCP read/search tool callsが単一の"Queried {server}"行にcollapsingされるようになった（Ctrl+Oで展開可能）。MCP OAuthがDynamic Client Registrationを持たないサーバー向けのClient ID Metadata Document（CIMD / SEP-991）をサポートするようになった。

### Pluginの改善

ref-tracked pluginsが每次load時に再cloneされるようになり、upstreamの変更を取得できるようになった。plugin hooks使用中にpluginディレクトリが削除された場合、prompt submissionがblockされる問題が修正された。

### Remote Controlの改善

Remote Control sessionsが最初のpromptからtitleをderiveするようになり、generic titleが表示されていた問題が修正された。/rename使用時にtitleがsyncされない問題、/exitがsessionを reliably archiveしない問題も修正された。

### その他の変更

- plan modeで"clear context"オプションがデフォルトで非表示に（"showClearContextOnPlanAccept": trueで復元可能）
- /btw使用時にpasted textが includedされない問題が修正された
- tmux环境下でfast Cmd+Tab followed by pasteがclipboard copyにraceする問題が修正された
- terminal tab titleがauto-generated session descriptionで更新されるようになった
- invisible hook attachmentsがtranscript modeでのmessage countをinflationしていた問題が修正された
- `!` bash modeの発見性が改善され、必要な時にClaudeから提案されるようになった
- enterprise用户在rate limit (429) errorsでretryできない問題が修正された
- `--resume`でparallel tool resultsがdropされる問題が修正された
- large git repositoryでの@ file autocompleteのresponsivenessが改善された

## コミュニティの反応

v2.1.81はスクリプト実行の柔軟性向上とWindows環境の改善に重点を置いたアップデートとなっている。特に--bareフラグはCI/CDパイプラインや自動化スクリプトでの使用を想定した機能として注目度高。

---

*参照: [GitHub Release v2.1.81](https://github.com/anthropics/claude-code/releases/tag/v2.1.81)*
