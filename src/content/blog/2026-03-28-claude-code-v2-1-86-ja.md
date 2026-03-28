---
title: "Claude Code v2.1.86 リリース - セッションIDヘッダー追加とVCS除外設定の改善"
description: "Claude Code v2.1.86がリリースされた。X-Claude-Code-Session-Idヘッダーの追加、Jujutsu/Sapling向けVCS除外設定、多数のパフォーマンス改善を含む。"
publishedAt: "2026-03-28T23:20:00+09:00"
author: "AI Tools Hub"
category: "AI開発"
tags: ["Claude Code", "リリース", "開発ツール", "Anthropic", "AIコーディング"]
featured: false
lang: "ja"
seo:
  keywords: "Claude Code, v2.1.86, リリース, Anthropic, AI開発ツール, セッション管理"
---

AnthropicはClaude Code v2.1.86をリリースした。这次更新では、セッション管理の改善、VCS除外設定の拡張、および複数のバグ修正とパフォーマンス向上が含まれている。

## 主な変更点

### セッション管理とプロキシ対応
- **X-Claude-Code-Session-Idヘッダー追加**: APIリクエストにセッションIDヘッダーが追加され、プロキシがボディを解析せずにリクエストを集約できるようになった

### VCS除外設定の拡張
- **.jjと.slの追加**: Jujutsu（.jj）およびSapling（.sl）のメタデータディレクトリがVCS除外リストに追加され、Grepやファイル補完がこれらのディレクトリをスキャンしなくなった

### パフォーマンスと安定性の改善
- 起動時のイベントループストールを削減（ 많은 claude.ai MCPコネクタが設定されている場合）
- @-mentionファイル補完のパフォーマンスを 개선
- 大きなトランスクリプトでのスクロールパフォーマンスを 개선（WASM yoga-layoutをTypeScript実装に替换）
- トークンオーバーヘッドを削減（ファイル参照時のraw stringがJSONエスケープされなくなった）

### ツールと設定の修正
- --resumeがv2.1.85より前に作成されたセッションで失敗する問題を修正
- 条件付きスキルやルールが設定されている場合、プロジェクトルート外のファイル（~/.claude/CLAUDE.mdなど）でのWrite/Edit/Read動作を修正
- Windowsでのパフォーマンス問題と設定破損の原因だった不要な設定ディスク書き込みを修正
- /feedback使用時の潜在的メモリクラッシュを修正
- --bareモードでのMCPツールドロップ問題を修正

### VS Code拡張機能の改善
- 拡張機能が長時間動作中正しく「応答なし」を表示しない問題を修正
- OAuthトークン更新後（ログイン後8時間）、MaxプランユーザーがSonnetにデフォルト設定される問題を修正

## その他の変更

- スキル説明が250文字に制限され、文脈使用量を削減
- /skillsメニューがアルファベット順にソート
- Readツールがコンパクトな行番号形式を使用、変更がない再読で重複を排除
- Bedrock、Vertex、Foundryユーザーのプロンプトキャッシュヒット率を向上

v2.1.86は、着実な改善と安定性向上が続くClaude Codeの継続的な進化を示している。
