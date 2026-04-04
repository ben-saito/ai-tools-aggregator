---
title: "Claude Code v2.1.92 リリース - forceRemoteSettingsRefreshやBedrockセットアップウィザードなど"
description: "AnthropicがClaude Code v2.1.92をリリース。forceRemoteSettingsRefreshポリシー設定、Bedrockセットアップウィザード、costコマンドの改善など多数の機能追加とバグ修正を含む。"
publishedAt: "2026-04-04T13:30:00+09:00"
author: "AI Tools Hub 編集部"
category: "ニュース"
tags: ["Claude Code", "Anthropic", "コーディング", "AI", "リリースノート"]
featured: true
lang: "ja"
seo:
  keywords: "Claude Code v2.1.92, Anthropic, AIコーディング, リリースノート"
  ogImage: "/images/blog/claude-code-v2-1-92.png"
---

# Claude Code v2.1.92 リリース - forceRemoteSettingsRefreshやBedrockセットアップウィザードなど

Anthropicは2026年4月4日、Claude Code v2.1.92をリリースした。本次リリースでは、セキュリティ強化のためのremote settings制御新機能、AWS Bedrockセットアップウィザード、costコマンドの改善など Numerousな新機能が追加されている。

## 主要な新機能

### forceRemoteSettingsRefreshポリシー設定

新しい`forceRemoteSettingsRefresh`ポリシー設定が追加された。この設定を有効にすると、CLIの起動がブロックされ、リモート管理設定が freshly fetchedされるまで待機する。フェッチに失敗した場合はfail-closedとして終了する。企業環境でのセキュリティ強化を目的としている。

### Bedrockセットアップウィザード

ログイン画面から「3rd-party platform」を選択すると、インタラクティブなAWS Bedrockセットアップウィザードが利用可能になった。このウィザードでは、AWS認証、領域設定、認証情報検証、モデルピン留めの手順をガイダンス付きで 진행できる。

### /costコマンドの改善

Pro加入者向けに、per-modelおよびcache-hitの内訳表示が追加された。コストの詳細な内訳を確認し、最適化するための情報が更容易に得られるようになった。

### /release-notesのインタラクティブ化

`/release-notes`コマンドがインタラクティブなバージョンピッカーとして生まれ変わった。過去のリリースノートを容易に表示できるようになった。

### Remote Controlセッション名のデフォルト変更

Remote Controlセッション名のデフォルトプレフィックスがホスト名を使用するようになった（例：`myhost-graceful-unicorn`）。`--remote-control-session-name-prefix`で上書きも可能。

### プロンプトキャッシュ期限切れ時のヒント表示

Proユーザーがプロンプトキャッシュ期限切れ後にセッションに返す際、次のターンでどの程度のトークンがキャッシュなしで送信されるかの概算を表示するフッターヒントが表示されるようになった。

## バグ修正

本次リリースでは多数のバグ修正が含まれている：

- tmuxウィンドウが長時間セッション中にkillまたはrenumberされた後、subagent生成が「Could not determine pane count」で永久に失敗する問題を修正
- Stop hookのprompt-typeがsmall fast modelが`ok:false`を返した際のincorrect failureを修正
- ストリーミング時にarray/objectフィールドがJSONエンコード文字列として出力されるtool input validation failuresを修正
- 拡張思考がwhitespace-onlyテキストブロックを реаль内容と一緒に生成した場合のAPI 400 errorを修正
- 自動操縦キー押しまたはconsecutive-prompt数字衝突によるfeedback surveyのaccidental submissionsを修正
- テキスト選択が存在する処理中のフルスクリーンモードで表示されるmisleading「esc to interrupt」ヒントを修正
- Homebrew install update promptsがcaskリリースチャネルを使用するよう修正
- `ctrl+e`がマルチラインプロンプトで既にラインエンドにある場合に次のラインエンドにjumpする問題を修正
- 同じメッセージがフルスクリーンモードで2つの位置に表示される問題を修正（iTerm2、Gitty、Windows TerminalなどDEC 2026対応ターミナル）
- idle-returnの「/clear to save X tokens」ヒントがcumulative session tokensではなく現在のcontext sizeを表示するよう修正
- 認証されていないclaude.ai connectorを複製するplugin MCP serversがセッション開始時に「connecting」に stuckする問題を修正
- 大きなファイルでのWrite tool diff computation速度を60%高速化

## 削除された機能

- `/tag`コマンドが削除された
- `/vim`コマンドが削除された（vimモードの切り替えは`/config`→Editor modeから行う）

## 詳細情報

- 公式ドキュメント: https://code.claude.com/docs/en/changelog
- リリース日: 2026年4月4日
