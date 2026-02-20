---
title: "OpenClawで4つの自律エージェントを運用するユーザーが実践報告。MiniMax 2.5 + Thinkingレベル「high」設定、Claude CodeでCronを管理"
description: "Reddit「r/openclaw」で、4つの自律エージェント（研究・取引・環境監視・制御）をCronジョブで管理するOpenClaw活用事例が82コメントを集めた。MiniMax 2.5をベースモデルとして使用し、2週間の調整を経て実用的な動作を実現した実践レポート。"
publishedAt: "2026-02-20T09:00:00+09:00"
author: "AI Tools Aggregator編集部"
category: "AI Agents"
tags: ["OpenClaw", "AI Agents", "Autonomous", "MiniMax", "Cron", "Claude Code"]
lang: "ja"
---

# OpenClawで4つの自律エージェントを運用するユーザーが実践報告。MiniMax 2.5 + Thinkingレベル「high」設定、Claude CodeでCronを管理

Reddit「r/openclaw」に投稿された「My OpenClaw is useful!」というスレッドが82件のコメントを集めている。投稿者は2017年製Intel MacBook Pro上でOpenClawを稼働させ、4つの自律エージェントをCronジョブで管理する構成を2週間かけて構築した実践レポートを公開した。

## セットアップ概要

投稿者の環境は以下の通り：

- **ハードウェア**: 2017年製MacBook Pro（Intel）
- **ベースモデル**: MiniMax 2.5（高速・低コスト）
- **Thinkingレベル**: 「high」（最初は「xhigh」を設定したが、MiniMax 2.5は「high」までのサポートに自動ダウングレードされた）

## 4つのエージェントの役割

### Tib（リサーチエージェント）

B2B、B2C、AI2AIのアイデアを15分サイクルで持ち回りリサーチする。独自のバリデーションフレームワークを持ち、2週間の調整を経て有効なアイデアを生成できるようになったと投稿者は評価している。

### Vector（取引エージェント）

KalshiとPolymarketを活用して市場をスキャンする。投稿者によれば「Vectorはまだ有用ではない」と現時点での限界も率直に認めている。

### Bou（環境スキャンエージェント）

OpenClawの新リリース、セキュリティ問題、設定オプションを監視する。環境のセキュリティ強化と新しいアイデアの提案にも貢献しているという。

### Gus（制御エージェント）

Telegramを通じてユーザーとのコミュニケーションを担当する主要な窓口。30分ごとにステータスレポートを送信する。投稿者はClaude CodeでThinkingを「xhigh」に設定した後から、Gusが自身の未解決問題を自力で修正できるようになったと述べている。

## Cronジョブ構成

| エージェント | スケジュール | 内容 |
|------------|------------|------|
| Tib | 15分ごと | B2B/B2C/AI2AIアイデアのローテーション |
| Vector | 15分ごと | 市場スキャン |
| Bou | 15分ごと | OpenClaw環境監視 |
| Gus | 30分ごと | ステータスレポート |
| Backup | 毎日2時 | Bitbucketリポジトリへのバックアップ |

## エージェント設計の工夫

各エージェントには独自の`SOUL.md`を設定し、以下を定義している：

- 役割とミッション
- 担当する・しないこと
- 具体的な指示やパラメータ
- 機会を検証するための方法

また、各エージェントは個別のメモリファイルを持つ：

- `memory/2026-MM-DD.md`: 日次実行ログ
- `status.json`: 現在の状態、最終ジョブ、発見内容
- `rotation-log.md`: 最後に実行したジョブの記録（同一タスクの繰り返し防止）

`SOUL.md`には「同じことを連続して行うことはできない」というルールを明記しており、アイデアのループから抜け出す仕組みとして機能しているという。

## 初期設定にClaude Codeを活用

投稿者は、OpenClawの初期設定の大部分にClaude Codeを使用したと述べている。ThinkingレベルをxhighまたはhighにするまではOpenClawに自己設定を任せることに懸念があったが、設定後は「Gus」が自身の問題を解決できるようになったという。

## 投稿者による総評

「2週間かかったが、Tibは今やバリデーションフレームワークを備えた良いアイデアを生成するようになった。Bouは環境のセキュリティ強化を支援し、興味深いアイデアも出している。Vectorは...まだ有用ではない」

投稿者はコメント欄での批判に対して「有用性は使う人次第。金を稼いだり世界の問題を解決したりはしていないが、安価なLLMで自律的に一日中動き続け、自分に価値を提供している。それが共有した理由だ」と述べている。

## 参考リンク

- Reddit投稿: [r/openclaw - My OpenClaw is useful!](https://reddit.com/r/openclaw/comments/1r8lci1/)
- OpenClaw公式ドキュメント（Thinking設定）: [docs.openclaw.ai/tools/thinking](https://docs.openclaw.ai/tools/thinking)

---

*本記事の情報は2026年2月20日時点のものです。最新情報は各公式サイトをご確認ください。*
