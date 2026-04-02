---
title: "Claude Code v2.1.90 リリース - /powerupコマンドとresumeキャッシュのバグ修正"
description: "Claude Code v2.1.90がリリースされた。/powerupコマンドによるインタラクティブな学習と、resumeキャッシュのバグ修正が行われる。"
publishedAt: "2026-04-02T16:00:00+09:00"
author: "AI Tools Hub"
category: "AI開発"
tags: ["Claude Code", "リリース", "開発ツール", "Anthropic", "AIコーディング"]
featured: false
lang: "ja"
seo:
  keywords: "Claude Code, v2.1.90, リリース, Anthropic, AI開発ツール, powerup"
---

AnthropicはClaude Code v2.1.90をリリースした。这次更新では、インタラクティブな学習機能と重要なバグ修正が行われている。

## 変更点

### /powerupコマンドの追加
Claude Codeのあまり知られていない10的功能を、アニメーションデモを通じて学ぶことができるインタラクティブなシステムが追加された。`/powerup`コマンドを使用することで、各種機能の使い方を効果的に学習できる。

### resumeキャッシュのバグ修正
v2.1.69以降存在していた重要なバグが修正された。このバグは延期されたツール、MCPサーバー、またはカスタムエージェントを持つユーザーは、最初のリクエストで完全なプロンプトキャッシュミスを引き起こしていたものであり，余分なトークンの消費によるAPIコストの増加を招いていた。

### その他の改善
- より高速なresumeフロー
- 起動時のメモリ使用量の改善

## 最近のClaude Codeの動向

2026年上半期のClaude Codeは以下の那样的機能を導入してきた:

- **Computer Use**: Claudeがユーザーのマウス、キーボード、画面を制御して任意のアプリケーションを直接操作可能
- **Scheduled Tasks (/loop)**: 反復タスクとスケジュールタスクにより、Claude Codeをbackground workerとして活用可能
- **Voice Mode**: `/voice`コマンドで20言語対応のボイスモードが利用可能
- **Interactive Visualizations**: インタラクティブなチャート、ダイアグラム、可視化機能

## 透明性に関する問題

v2.1.88ではnpmパッケージに`.map`ファイルが含まれるというリリース包装の問題が発生した。Anthropicは「セキュリティ侵害ではなく、人間のミスによるリリース包装の問題」であることを発表し、机能的な顧客データや認証情報が含まれていないことを明らかにした。この問題はコミュニティから透明性に関する懸念を再提起させた。