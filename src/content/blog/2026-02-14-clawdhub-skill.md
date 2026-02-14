---
title: "ClawdHub Skill - Clawdbotスキル管理を効率化"
description: "ClawdHub CLIを利用して、Clawdbotスキルの検索、インストール、更新、公開を効率化する方法を解説します。"
publishedAt: "2026-02-14T00:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "ClawdHub", "パッケージ管理", "スキル", "CLI"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, ClawdHub, パッケージ管理, スキル, CLI"
---

# ClawdHub Skill - Agent Skillの検索・インストール・公開を一元管理

ClawdHub Skillは、Clawdbotエコシステムにおけるパッケージマネージャーとして機能するCLIツールである。開発者はClawdHub Skillを通じて、公開されているAgent Skillの検索、インストール、更新、および自作Skillの公開を実行できる。

## 概要

Clawdbot Agentは、追加機能を提供する「Skill」と呼ばれるプラグインシステムを採用している。ClawdHub Skillは、これらのSkillを管理するための公式ツールであり、npmやpip等の従来型パッケージマネージャーと類似した機能を提供する。

2026年2月時点で、ClawdHubリポジトリには100以上のSkillが公開されており、AI統合、外部API連携、開発ツール自動化など、多岐にわたるカテゴリが存在する。

## 技術的仕様

### コマンド一覧

ClawdHub Skillは以下のコマンドを提供する。

```bash
# Skillの検索
clawdhub search <keyword>

# Skillのインストール
clawdhub install <skill-name>

# インストール済みSkillの一覧表示
clawdhub list

# Skillのアンインストール
clawdhub uninstall <skill-name>

# Skillの更新
clawdhub update <skill-name>

# 全Skillの更新
clawdhub update --all

# 自作Skillの公開
clawdhub publish

# Skillの詳細情報表示
clawdhub info <skill-name>
```

### システム要件

- Node.js 18.0以降
- npm 8.0以降
- Clawdbot Agent 0.9.0以降

### インストール方法

ClawdHub CLIはnpm経由でグローバルインストールする。

```bash
npm install -g clawdhub
```

## 主要機能

### 1. Skillの検索

キーワードベースでSkillを検索し、説明文、タグ、カテゴリから一致する結果を返す。

```bash
clawdhub search github
```

出力例:
```
github - GitHub CLI統合（イシュー・PR・CI操作）
github-actions - GitHub Actions自動化
git-commit-analyzer - Gitコミットメッセージ分析
```

### 2. Skillのインストール

指定されたSkillをダウンロードし、Clawdbot Agent環境に配置する。依存関係も自動的に解決される。

```bash
clawdhub install github
```

インストール先: `~/.clawdbot/skills/github/`

### 3. Skillの公開

開発者が作成したSkillをClawdHubリポジトリに公開する。公開前にバリデーションが実行され、SKILL.mdファイルの存在、パッケージメタデータの妥当性が検証される。

```bash
# Skillディレクトリで実行
cd my-custom-skill/
clawdhub publish
```

公開要件:
- SKILL.mdファイルの存在（Skill説明ドキュメント）
- package.jsonの妥当性（name、version、description等の必須フィールド）
- ライセンス情報の記載

### 4. バージョン管理

ClawdHub Skillはセマンティックバージョニング（SemVer）を採用している。Skillの更新時には、メジャー・マイナー・パッチバージョンに基づいた互換性チェックが実行される。

```bash
# 特定バージョンのインストール
clawdhub install github@1.2.3

# 最新バージョンへの更新
clawdhub update github
```

## Skillパッケージ構造

ClawdHub Skillに対応するSkillパッケージは、以下のディレクトリ構造を持つ。

```
my-skill/
├── SKILL.md          # Skill説明ドキュメント
├── package.json      # パッケージメタデータ
├── index.js          # エントリーポイント
├── lib/              # ライブラリコード
└── examples/         # 使用例
```

### SKILL.mdの必須項目

```markdown
# Skill Name

## Description
[Skillの概要]

## Commands
[提供されるコマンド一覧]

## Configuration
[設定方法]

## Examples
[使用例]
```

## 公開リポジトリ

ClawdHubリポジトリはGitHub上で管理されており、以下のURLからアクセス可能である。

- リポジトリURL: https://github.com/clawdbot/clawdhub-skills
- 公式レジストリ: https://hub.clawd.bot/

## ユースケース

### 1. 開発環境のセットアップ

新規プロジェクトでClawdbot Agentを使用する際、必要なSkillを一括インストールする。

```bash
clawdhub install github notion slack gemini
```

### 2. 社内カスタムSkillの配布

企業内で開発したカスタムSkillをプライベートリポジトリとして公開し、チームメンバー間で共有する。

```bash
# プライベートレジストリの指定
clawdhub config set registry https://internal-hub.company.com
clawdhub install internal-tools
```

### 3. Skillのバージョン固定

本番環境において、Skillのバージョンを固定し、予期しない動作変更を防ぐ。

```bash
clawdhub install github@1.5.0 --save-exact
```

## 制限事項

- Skillのインストール時、Node.js依存パッケージのダウンロードが発生するため、ネットワーク接続が必要
- ClawdHub公式リポジトリに公開されるSkillは、セキュリティレビューが実施されるが、サードパーティSkillの使用はユーザーの責任で行う必要がある

## セキュリティ

ClawdHub Skillは、公開されるSkillに対して以下のセキュリティチェックを実施している。

- マルウェアスキャン（ClamAV）
- 依存パッケージの脆弱性チェック（npm audit）
- コード品質分析（ESLint）

ユーザーはインストール前に、Skillの評価（Star数、ダウンロード数、最終更新日）を確認することが推奨される。

## 参考リンク

- ClawdHub公式サイト: https://hub.clawd.bot/
- ClawdHub GitHub: https://github.com/clawdbot/clawdhub
- Clawdbot公式ドキュメント: https://docs.clawd.bot/skills

---

*本記事の情報は2026年2月14日時点のものです。各サービスの機能や仕様は変更される可能性があります。最新情報は各公式サイトをご確認ください。*
