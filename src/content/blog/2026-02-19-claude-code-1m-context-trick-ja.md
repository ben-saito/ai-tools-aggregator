---
title: "Claude Code 1Mトークンコンテキスト解放——settings.json 2行で自動圧縮なしにSaaS全体を一気に構築"
description: ".claude/settings.jsonにANTHROPIC_DEFAULT_HAIKU_MODELとANTHROPIC_DEFAULT_SONNET_MODELをclaude-sonnet-4-6-1mに設定するだけで、Claude Codeの全タスクが1Mトークンコンテキストウィンドウで動作する。自動圧縮なしでコードベース全体を保持しながら開発できる実用的なテクニック。"
publishedAt: "2026-02-19T01:00:00+09:00"
author: "AI Tools Hub"
category: "guide"
lang: "ja"
tags: ["Claude Code", "Anthropic", "1Mコンテキスト", "Claude Sonnet 4.6", "設定"]
featured: true
---

Claude Codeのコンテキストウィンドウ上限を200Kから1Mトークンに拡張できる設定が話題になっている。`.claude/settings.json`に2行を追加するだけで、自動圧縮（auto-compaction）なしにコードベース全体を保持しながら開発できるようになる。

## 設定方法

`.claude/settings.json`（なければ作成）に以下を追加する：

```json
{
  "env": {
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "claude-sonnet-4-6-1m",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "claude-sonnet-4-6-1m"
  }
}
```

追加後、Claude Codeを再起動してSonnetモデルに切り替えれば設定が有効になる。

## 何が変わるのか

Claude Codeは内部的に複数のモデルを使い分けている。Haikuはサブタスクや軽量処理、Sonnetはメインの推論タスクに割り当てられている。上記の環境変数でそれらのデフォルトモデルを`claude-sonnet-4-6-1m`に上書きすることで、**すべてのタスクが1Mトークンコンテキストで処理される**。

通常の動作では、コードベースが大きくなるにつれてClaude Codeは自動圧縮を実行し、古い会話履歴やコードの一部を要約・省略する。1Mコンテキストを有効にすることで、この圧縮のタイミングが大幅に遅れ、長時間のセッションでも全体的なコンテキストを保持しながら作業を続けられる。

**実際の効果：**
- 数千ファイルのコードベースを一度に参照可能
- セッションを通じてすべての変更履歴と判断の文脈を保持
- SaaS全体のような大規模プロジェクトを1セッションで構築
- 自動圧縮による「記憶喪失」を防ぐ

## 技術的な背景

Anthropicの公式ドキュメントによると、Claude Opus 4.6とSonnet 4.6は`context-1m-2025-08-07`ベータヘッダーを使用することで1Mトークンコンテキストウィンドウをサポートしている。`claude-sonnet-4-6-1m`というモデルIDは、このベータヘッダーが自動的に付与される専用エンドポイントだ。

通常の200Kコンテキストに加え、1Mコンテキストは以下をカバーできる計算になる：
- 約75万ワード（英語）
- 約340万文字（Unicode）

## コストへの影響

**重要な注意点がある。** Anthropicは200Kトークンを超えるリクエストに対して「ロングコンテキスト料金」を適用している。通常料金との差分が発生するため、長いセッションを頻繁に使う場合はコストが増加する可能性がある。

費用対効果の観点では：
- 短いタスクや単純な質問：200Kコンテキストで十分で、追加コストなし
- 大規模コードベースの長期開発セッション：1Mコンテキストの価値が高い
- コストが気になる場合：前日報じた「マルチモデル最適化」と組み合わせ、必要なタスクのみに適用するのが合理的

## 設定ファイルの場所

`.claude/settings.json`はプロジェクトルートまたはホームディレクトリ（`~/.claude/settings.json`）に配置する。プロジェクトルートに置けばリポジトリごとの設定、ホームに置けばシステム全体のデフォルトになる。

**設定ファイルが存在しない場合：**
```bash
mkdir -p ~/.claude && cat > ~/.claude/settings.json << 'EOF'
{
  "env": {
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "claude-sonnet-4-6-1m",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "claude-sonnet-4-6-1m"
  }
}
EOF
```

## まとめ

これは1MコンテキストをサポートしたClaude Sonnet 4.6のリリースによって初めて実用的になった設定テクニックだ。Claude Codeの内部モデル割り当てを上書きすることで、コーディングエージェントとして使用する際の最大の障壁の一つだった「コンテキスト圧縮による文脈の喪失」を大幅に軽減できる。

大規模プロジェクトを扱う開発者、特に長期にわたるセッションで一貫性のある開発を求めるケースでは、試す価値のある設定だ。ただしロングコンテキスト料金が発生する点は念頭に置く必要がある。

**前日の関連記事：**
- [Claude Sonnet 4.6リリース、Opus級の性能をSonnet価格で実現](/ja/blog/2026-02-18-claude-sonnet-4-6-release-ja)
- [OpenClaw APIコストを最大90%削減する実践ガイド](/ja/blog/2026-02-18-openclaw-api-cost-reduction-ja)

**出典：**
- Anthropic公式モデルドキュメント（claude.ai/docs）
- Claude Code設定リファレンス
