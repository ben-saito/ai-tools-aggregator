---
title: "Claude Code v2.1.91 リリース - MCPツール結果の永続化とEditツールの最適化"
description: "Claude Code v2.1.91ではMCPツールの結果サイズの上書き、シェル実行の制御強化、Editツールの効率改善などが行われた。"
publishedAt: "2026-04-03T12:30:00+09:00"
author: "AI Tools Hub"
category: "AI開発"
tags: ["Claude Code", "リリース", "開発ツール", "Anthropic", "AIコーディング"]
featured: false
lang: "ja"
seo:
  keywords: "Claude Code, v2.1.91, リリース, Anthropic, AI開発ツール, MCP"
---

Anthropicは2026年4月2日にClaude Code v2.1.91をリリースした。この更新では、MCPツールの結果の永続化、シェル実行の制御強化、Editツールの効率改善など、複数の重要な改善が行われている。

## 主な変更点

### MCPツールの結果サイズの上書き
開発者は`_meta["anthropic/maxResultSizeChars"]`アノテーションを使用して、MCPツール出力のデフォルトサイズ制限を上書きできるようになった 最大50万文字までの結果を切り詰めずに取得できる。これは大きなデータベーススキーマや広範なAPI応答場合に特に有用である。

### disableSkillShellExecution設定
スキル、カスタムスラッシュコマンド、プラグインコマンドにおけるインラインシェル実行を無効にする新しい設定`disableSkillShellExecution`が追加された。外部ソースからのシェルコマンド実行を制限したいチームにとって、より良いセキュリティ制御を提供する。

### ディープリンクでのマルチラインパromptサポート
`claude-cli://open?q=`ディープリンクがマルチラインパromptをサポートようになった。これまではエンコードされた改行文字（`%0A`）が拒否されていたが、この制限が削除され、より複雑なクエリの作成が可能になった。

### プラグインの実行ファイルサポート
プラグインは`bin/`ディレクトリ下に実行ファイルを配置し、Bashツールからベアコマンドとして呼び出すことができるようになり、プラグインの機能と統合オプションが拡張された。

### Editツールの最適化
Editツールがより短い`old_string`アンカーを使用するようになり、出力トークンを削減し、コード変更時の全体的な効率が向上した。

### パフォーマンス改善
- Bunでの`stripAnsi`を`Bun.stripANSI`経由で高速化
- キャッシュキー検索時のMCPツールスキーマの毎ターンJSON.stringifyを排除

## バグ修正

- `--resume`でのトランスクリプトチェーンの断裂による会話履歴の損失を修正
- iTerm2、kitty、WezTerm、Ghostty、Windows Terminalでの`cmd+delete`動作を修正
- リモートセッションでのプランファイル追跡をコンテナ再起動後に維持
- settings.jsonの`permissions.defaultMode: "auto"`に対するJSONスキーマ検証を修正
- Windowsのバージョンクリーンアップがアクティブなバージョンのロールバックコピーを保護するように
- `/feedback`が使用不可の理由を説明するよう改善

## コミュニティの文脈

v2.1.88ではnpmパッケージに`.map`ファイルが誤って含まれるという問題が発生し、リリース検証プロセスについて議論が促された。コミュニティはAnthropicの対応を注視しており、v2.1.91リリースはこの種の問題を起こことなく進行しているようです。