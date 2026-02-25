---
title: "Claude Code「Remote Control」— ローカルセッションをスマホ・タブレット・ブラウザから継続操作可能に"
description: "Anthropicは Claude Code v2.1.51で「Remote Control」機能を全ユーザーに開放した。ターミナルで実行中のClaude Codeセッションに、claude.ai/codeやモバイルアプリからリモート接続し、ローカル環境をそのまま操作できる。"
publishedAt: "2026-02-25T12:00:00+09:00"
author: "Flow"
category: "AI Development Tools"
tags: ["Claude Code", "Anthropic", "Remote Control", "CLI", "モバイル開発"]
featured: false
lang: "ja"
seo:
  keywords: "Claude Code, Remote Control, Anthropic, リモート接続, claude.ai/code, モバイル開発"
---

# Claude Code「Remote Control」— ローカルセッションをスマホ・タブレット・ブラウザから継続操作可能に

Anthropicは2026年2月24日リリースのClaude Code v2.1.51で、`claude remote-control`サブコマンドを全ユーザーに開放した。この機能により、ローカルマシンのターミナルで実行中のClaude Codeセッションに対し、claude.ai/codeまたはClaude iOS/Androidアプリからリモート接続できる。Pro/Maxプラン向けのリサーチプレビューとして提供されており、Team/Enterpriseプランには未対応である。

リリースノートには「Added claude remote-control subcommand for external builds, enabling local environment serving for all users」と記載されている。

## ローカル実行を維持するアーキテクチャ

Remote Controlの設計上の特徴は、Claude Codeの実行環境がローカルマシンに留まる点にある。クラウドへのセッション移動は発生しない。

具体的には以下の通りである。

- ファイルシステム、MCPサーバー、ツール、プロジェクト設定はすべてローカル環境のものがそのまま利用される
- 会話はすべての接続デバイス間でリアルタイム同期される
- ラップトップがスリープ状態になった場合やネットワーク切断が発生した場合でも、復帰時に自動再接続する
- 通信はローカルのClaude CodeセッションからAnthropic APIへのHTTPSアウトバウンド接続のみで構成され、インバウンドポートは開かない
- TLSによる暗号化と短期間の認証情報を使用する

## 使い方

Remote Controlの利用方法は複数用意されている。

**新規セッションの開始:**

```bash
claude remote-control
```

ターミナルにセッションURLとQRコードが表示される。

**既存セッションへのリモート接続有効化:**

Claude Codeセッション内で`/remote-control`（短縮形: `/rc`）コマンドを実行する。

**接続方法:**

セッションURL、QRコード、またはclaude.ai/codeのセッションリストから接続できる。

**全セッションでの自動有効化:**

`/config`で「Enable Remote Control for all sessions」をtrueに設定する。

**オプション:**

- `--verbose`: 詳細ログの出力
- `--sandbox` / `--no-sandbox`: ファイルシステム・ネットワーク隔離の有効/無効切り替え

## 「Claude Code on the web」との違い

Anthropicは別途「Claude Code on the web」も提供しているが、両者のアーキテクチャは異なる。

- **Remote Control**: ローカルマシンで実行される。ローカルのMCPサーバー、ツール、プロジェクト設定がそのまま利用可能
- **Claude Code on the web**: Anthropicのクラウドインフラ上で実行される。ローカル環境のセットアップは不要

## 制限事項

現時点では以下の制限がある。

- 1セッションにつきリモート接続は1つまで
- ターミナルを閉じるとセッションが終了する
- Pro/Maxプランのみ対応（APIキーによる利用は非対応）

## v2.1.53での改善

2月25日リリースのv2.1.53では、Remote Controlのグレースフルシャットダウン時にstaleセッションが残る問題が修正された。teardownネットワークコールの並列化により、セッション終了処理の信頼性が向上している。

## 関連リリースノート時系列

- **v2.1.50（2/20）**: WorktreeCreate/WorktreeRemoveフックイベント追加、`isolation: worktree`サポート
- **v2.1.51（2/24）**: `claude remote-control`サブコマンド追加（全ユーザーへ開放）
- **v2.1.53（2/25）**: Remote Controlのグレースフルシャットダウン修正

## Cursorとは対照的なアプローチ

Cursorは2月24日に「Cloud Agents with Computer Use」を発表し、クラウドVM上でエージェントを自律実行するアプローチを採用している。一方、Claude CodeのRemote Controlは「ローカル実行＋リモートUI」という構成を取る。

この違いは設計哲学の差異を反映している。Cursorはクラウド上での自律実行を志向し、Claude Codeはローカル実行環境へのリモートアクセスを提供する。セキュリティの観点では、コードがローカルに留まるClaude Codeのアプローチは、クラウドにコードを送信する構成と比較して、データの外部露出リスクが低い。

また、デスクトップで開始した長時間のエージェントタスクをモバイルデバイスから監視・操作できる点は、エージェント型開発ワークフローとの親和性が高い。

## 参考リンク

- [Claude Code Remote Control 公式ドキュメント](https://code.claude.com/docs/en/remote-control)
- [Claude Code リリースノート](https://code.claude.com/docs/en/changelog)

---

*本記事の情報は2026年2月25日時点のものです。最新情報は公式ドキュメントをご確認ください。*
