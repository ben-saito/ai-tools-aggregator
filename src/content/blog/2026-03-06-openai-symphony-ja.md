---
title: "OpenAI Symphony — エージェントの監視から「仕事の管理」へのパラダイムシフト"
description: "OpenAIが新プロジェクトSymphonyを公開。GitHub Issue (Linear)から自動的にエージェントを実行し、PRを作成まで行う自律型オートメーションツール。"
publishedAt: "2026-03-06T12:00:00+09:00"
author: "AI Tools Hub"
category: "ai-coding"
tags: ["OpenAI", "Symphony", "AI coding", "automation", "linear", "agent orchestration"]
lang: "ja"
featured: false
---

# OpenAI Symphony — エージェントの監視から「仕事の管理」へのパラダイムシフト

OpenAIは2026年3月、新たなOSSプロジェクト「**Symphony**」を公開した。GitHub Issue（Linear）から自動的にエージェントを実行し、PRを作成まで行う自律型オートメーションツールだ。コーディングエージェントの「監視」から「仕事の管理」への転換を図る。

## Symphonyとは

Symphonyは**長尺実行自動化サービス**であり、issue tracker（Linear）から作業を継続的に読み取り каждому issueごとに隔離されたワークスペースを作成し、その中でコーディングエージェントセッションを実行する。

**従来のスタイル:**
- 開発者がエージェントに指示を出す
- 開発者がエージェントの作業を見守る
- 開発者がレビューする

**Symphonyのスタイル:**
- Linearボードを監視し、新規issueを検出
- 自動で隔離されたワークスペースを作成
- エージェントを実行し、成果物（PR）を生成
- 開発者は「作業の管理」만すればよい

## 主な機能

1. **Issue Tracker連携**: Linearのワークアイテムを自動監視し、未着手のissueを検出
2. **隔離されたワークスペース**: issueごとに分離された作業環境を自動作成
3. **自律的実行**: Codex（OpenAIのコーディングエージェント）をワークスペースで起動し、タスクを遂行
4. **成果物の証明**: CI状態、PRレビュー你要、性能分析、ウォークスルー動画を自動生成
5. **安全なマージ**: 人間の承認後、PRを安全にマージ

## 技術仕様

- **言語**: Elixir/OTP実装が初公開
- **ワークフロー定義**: `WORKFLOW.md`というリポジトリ内ファイルでプロンプトとランタイム設定をバージョン管理
- **コンカレンシー**: 最大10並列エージェント実行（設定可能）
- ** satél: 作業Idle検出後、issueがターミナル状態（Done, Closedなど）に変わると自動クリーンアップ
- **セキュリティ**: デフォルトで安全なSandboxポリシー（workspace-write）

## 「Harness Engineering」との関連

SymphonyはOpenAIが同日公開した「[Harness Engineering](https://openai.com/index/harness-engineering/)」というアプローチの延長線上にある。エージェントが効果的に動作するためには、人間が読めるテスト・仕様・検証が前提となる。Symphonyはその先に位置する「仕事の流れを自動化する」ツールだ。

## 今後の展開

OpenAIはSymphonyを「低ulasi engineering preview」と位置づけ、信頼できる環境でのテスト用に公開。SPEC.mdに基づいて任意のプログラミング言語で再実装することを鼓励している。

**対応予定:**
- 複数のissue tracker対応
- より柔軟なワークフロー定義
- エンタープライズ向けセキュリティ強化

## 試してみる

```bash
git clone https://github.com/openai/symphony
cd symphony/elixir
mise install
mix setup
mix build
./bin/symphony ./WORKFLOW.md
```

## まとめ

Symphonyは、AIエージェントを「ツール」として使うのではなく、「ワーカー」として管理するという新しいパラダイムを示す事例となる。開発者はコーディングエージェントを個別に監視するのではなく、业务のフロー全体を管理する形に変わるかもしれない。

- **リポジトリ**: https://github.com/openai/symphony
- **仕様**: https://github.com/openai/symphony/blob/main/SPEC.md
