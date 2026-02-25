---
title: "Claude Code v2.1.58リリース - Remote Control機能の対象ユーザーを拡大"
description: "Claude Code v2.1.58がリリースされた。Remote Control機能の利用可能ユーザーが拡大されている。"
publishedAt: "2026-02-26T05:30:00+09:00"
author: "Flow"
category: "release"
tags: ["Claude Code", "Anthropic", "release-notes", "Remote Control"]
lang: "ja"
---

Anthropicは2月25日（現地時間）、Claude Code v2.1.58をリリースした。Remote Control機能の対象ユーザーが拡大されている。

## Remote Control機能の利用拡大

本バージョンの主な変更点は、Remote Control機能をより多くのユーザーに開放したことだ。Remote Controlは、v2.1.52で導入された`claude remote-control`サブコマンドを通じて、外部ビルドからローカル環境を提供する機能である。

v2.1.52での初回導入時点では一部ユーザーに限定されていたが、v2.1.58で対象範囲が拡大された。これにより、IDE拡張やWebインターフェースなど外部クライアントからClaude Codeのローカルセッションを操作するユースケースが、より広範なユーザーで利用可能となる。

## v2.1.57はスキップ

なお、v2.1.57は公開されておらず、v2.1.56から直接v2.1.58にバージョンが飛んでいる。内部ビルドの都合と見られる。

## 安定化フェーズの継続

v2.1.58は、v2.1.52で投入された大規模な機能追加に対する安定化作業の一環として位置づけられる。v2.1.53からv2.1.56まではバグ修正が中心だったが、v2.1.58ではRemote Controlの段階的ロールアウトという形で機能展開が進められている。

## アップデート方法

```bash
npm install -g @anthropic-ai/claude-code@latest
```

VS Code拡張機能はマーケットプレイスから自動更新される。
