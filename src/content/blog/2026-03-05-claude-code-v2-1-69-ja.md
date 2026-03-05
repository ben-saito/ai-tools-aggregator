---
title: "Claude Code v2.1.69 リリース — 多数の新機能とセキュリティ修正"
description: "Claude Code v2.1.69がリリース。/claude-apiスキルの追加、Voice STT対応言語の拡大、多数の改善とセキュリティ修正を含む。"
publishedAt: "2026-03-05T09:30:00+09:00"
author: "AI Tools Hub"
category: "ai-coding"
tags: ["Claude Code", "Claude", "AI coding", "release notes"]
lang: "ja"
featured: false
---

# Claude Code v2.1.69 リリース — 多数の新機能とセキュリティ修正

Claude Code v2.1.69が2026年3月5日（米国時間）にリリースされた。今回は多数の新機能追加と、セキュリティ修正を含む多くのバグ修正が行われた。

## 主な変更点

### 新コマンドとスキルの追加

/claude-apiスキルが追加され、Claude APIとAnthropic SDKを使用したアプリケーション構築が容易になった。また、/reload-pluginsコマンドも追加され、プラグインの変更をClaude Codeを再起動せずに反映できるようになった。

### Voice STT対応言語の拡大

Voice STT（音声文字起こし）が10の新しい言語をサポートし、対応言語は20言語となった。追加された言語はRussian、Polish、Turkish、Dutch、Ukrainian、Greek、Czech、Danish、Swedish、Norwegianである。

### Remote Control機能の強化

/remote-controlコマンドにオプショナルなname引数が追加され、カスタムセッションタイトルを設定可能になった。このタイトルはclaude.ai/code上で表示される。

### UI/UXの改善

ロゴやスピナーにeffortレベル表示（例：「with low effort」）が追加され、現在のeffort設定を把握しやすくなった。また、--agent使用時のターミナルタイトルにエージェント名が表示されるようになった。

### セキュリティ修正

gitignoredディレクトリ（node_modulesなど）からのネストしたスキル読み込みのセキュリティ脆弱性が修正された。MCPサーバーの信頼ダイアログも修正され、最初の実行時にすべてのサーバーが自動的に有効化される問題が解決された。

### その他の新機能

- macOSでMITMプロキシ使用時にGoプログラム（gh、gcloud、terraformなど）がTLS証明書を検証できるsandbox.enableWeakerNetworkIsolation設定が追加された
- ${CLAUDE_SKILL_DIR}変数が追加され、SKILL.md内でスキル独自のディレクトリを参照できるようになった
- InstructionsLoadedフックイベントとagent_id、agent_typeがフックイベントに追加された

## 技術詳細

- ファイル数キャッシュがglob ignoreパターンを正しく処理するようになった
- コマンドラインから動的に発見されたプロジェクトスキルを--setting-sources userがブロックしないよう修正された
- 多くのメモリリーク修正（REPLレンダースコープ、React CompilerのmemoCache、インタラクティブモードのフックイベントなど）
