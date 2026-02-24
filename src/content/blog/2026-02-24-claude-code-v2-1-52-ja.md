---
title: "Claude Code v2.1.51/v2.1.52リリース - remote-controlコマンド追加とセキュリティ修正"
description: "Claude Code v2.1.51で外部ビルド向けremote-controlサブコマンドを追加。セキュリティフック関連の脆弱性2件を修正。v2.1.52ではWindows向けVS Code拡張のクラッシュを修正。"
publishedAt: "2026-02-24T23:30:00+09:00"
author: "Flow"
category: "release"
tags: ["Claude Code", "Anthropic", "release-notes", "security", "VS Code"]
lang: "ja"
---

Anthropicは2026年2月24日、Claude Codeのバージョン2.1.51および2.1.52をリリースした。v2.1.51では新機能追加とセキュリティ修正を含む大規模アップデートが実施され、v2.1.52ではWindows環境でのVS Code拡張クラッシュが修正された。

## remote-controlサブコマンドの追加

v2.1.51の目玉機能として、`claude remote-control`サブコマンドが追加された。外部ビルドシステムからローカル環境を提供する機能で、全ユーザーが利用可能となる。

## セキュリティ修正2件

今回のリリースでは、セキュリティに関する重要な修正が2件含まれている。

1つ目は、`statusLine`および`fileSuggestion`フックコマンドが、インタラクティブモードにおいてワークスペース信頼の承認なしに実行できてしまう問題の修正。

2つ目は、HTTPフックがヘッダー値から任意の環境変数を参照できてしまう問題の修正。環境変数の参照には、フック設定で明示的に`allowedEnvVars`リストを指定する必要がある。

また、サンドボックスが有効な場合、HTTPフックがサンドボックスネットワークプロキシ経由でルーティングされるようになり、ドメイン許可リストが適用される。

## コンテキスト管理の改善

ツール実行結果のディスク永続化閾値が100Kから50K文字に引き下げられた。これにより、コンテキストウィンドウの消費が抑制され、長時間セッションの持続性が向上する。

## プラグイン関連の改善

- プラグインマーケットプレースのデフォルトgitタイムアウトが30秒から120秒に延長。`CLAUDE_CODE_PLUGIN_GIT_TIMEOUT_MS`環境変数での設定も可能
- npmソースからプラグインをインストールする際、カスタムnpmレジストリと特定バージョンの固定に対応
- スラッシュコマンドの自動補完で、プラグインのSKILL.md descriptionがYAML配列の場合にクラッシュする問題を修正

## BashToolの最適化

シェルスナップショットが利用可能な場合、BashToolがデフォルトでログインシェル（`-l`フラグ）をスキップするようになった。従来は`CLAUDE_BASH_NO_LOGIN=true`の設定が必要だったが、自動的に適用される。

## モデルピッカーの改善

`/model`コマンドのモデル選択画面で、固定バージョンのモデルIDの代わりに「Sonnet 4.5」などの読みやすいラベルが表示されるようになった。新しいバージョンが利用可能な場合はアップグレードヒントも表示される。

## v2.1.52: Windows向けVS Code修正

v2.1.52では、Windows環境でVS Code拡張がクラッシュする問題（「command 'claude-vscode.editor.openLast' not found」エラー）が修正された。

## その他の修正

- WebSocket再接続時の重複`control_response`メッセージによるAPI 400エラーの修正
- SDKからのアカウント情報同期提供用に`CLAUDE_CODE_ACCOUNT_UUID`、`CLAUDE_CODE_USER_EMAIL`、`CLAUDE_CODE_ORGANIZATION_UUID`環境変数を追加
