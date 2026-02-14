---
title: "Coding Agent Skill - Clawdbotでコーディングエージェントを統合"
description: "Codex CLI、Claude Code、OpenCode、Pi Coding Agentなど、主要なコーディングエージェントをClawdbotから統合利用する方法を解説します。"
publishedAt: "2026-02-14T00:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Coding Agent", "Claude Code", "AI開発", "自動化"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Coding Agent, Claude Code, AI開発, 自動化"
---

# Coding Agent Skill - Claude Code等のプログラマティック制御を実現

Coding Agent Skillは、Claude Code、GitHub Copilot CLI（Codex CLI）等の対話型コーディング支援ツールを、Clawdbot Agentからプログラマティックに制御するための統合機能を提供する。本Skillにより、AIコーディングアシスタントの自動実行、バッチ処理、CI/CDパイプラインへの組み込みが可能になる。

## 概要

Claude Codeは、Anthropic社が提供するClaude AIモデルを活用した対話型コーディング支援ツールであり、コード生成、リファクタリング、バグ修正等の機能を提供する。通常は対話型CLIとして利用されるが、Coding Agent Skillを使用することで、以下の非対話型操作が実現される。

- プロンプトベースの自動コード生成
- 複数ファイルの一括リファクタリング
- テストコード自動生成
- コードレビューの自動実行

2026年2月時点で、Coding Agent SkillはClaude Code（claude CLI）およびGitHub Copilot CLI（gh copilot）に対応している。

## 技術的仕様

### 対応ツール

| ツール名 | CLIコマンド | 提供元 | バージョン |
|---------|-----------|--------|----------|
| Claude Code | claude | Anthropic | 0.9.0以降 |
| GitHub Copilot CLI | gh copilot | GitHub | 1.0.0以降 |

### システム要件

- Clawdbot Agent 0.9.0以降
- Node.js 18.0以降
- Claude Code CLI（Claude APIキーが必要）
- GitHub CLI（GitHub Copilot Subscriptionが必要、オプション）

### 提供される機能

Coding Agent Skillは以下のコマンドを提供する。

```bash
# Claude Codeのプログラマティック実行
clawdbot skill coding-agent run-claude \
  --prompt "Refactor this function to use async/await" \
  --file src/utils.js

# コード生成
clawdbot skill coding-agent generate \
  --description "Create a REST API endpoint for user authentication" \
  --output src/api/auth.js

# バッチリファクタリング
clawdbot skill coding-agent batch-refactor \
  --directory src/ \
  --pattern "*.js" \
  --rule "Convert all var to const/let"

# テストコード生成
clawdbot skill coding-agent generate-tests \
  --file src/calculator.js \
  --framework jest \
  --output tests/calculator.test.js
```

## 実装例

### 1. 自動コード生成

指定されたプロンプトに基づいてコードを生成し、ファイルに保存する。

```javascript
// Clawdbot Agent内での実行例
const codingAgent = require('clawdbot-skill-coding-agent');

async function generateCode() {
  const result = await codingAgent.runClaude({
    prompt: 'Create a function that validates email addresses using regex',
    model: 'claude-sonnet-4-5',
    outputFile: 'src/validators.js'
  });
  
  console.log('Generated code:', result.code);
  console.log('Explanation:', result.explanation);
}
```

### 2. CI/CDパイプラインへの統合

GitHub ActionsワークフローでCoding Agent Skillを使用し、プルリクエスト時に自動コードレビューを実行する。

```yaml
# .github/workflows/code-review.yml
name: Automated Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Clawdbot
        run: npm install -g clawdbot
      
      - name: Install Coding Agent Skill
        run: clawdbot skill install coding-agent
      
      - name: Run Code Review
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          clawdbot skill coding-agent review \
            --files "$(git diff --name-only origin/main)" \
            --output review-comments.md
      
      - name: Post Review Comments
        uses: actions/github-script@v6
        with:
          script: |
            const fs = require('fs');
            const review = fs.readFileSync('review-comments.md', 'utf8');
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: review
            });
```

### 3. バッチ処理

複数ファイルに対して一括でリファクタリングを実行する。

```bash
#!/bin/bash
# batch-refactor.sh

# すべてのJavaScriptファイルを対象にvar → const/let変換
clawdbot skill coding-agent batch-refactor \
  --directory ./src \
  --pattern "**/*.js" \
  --rule "Convert var declarations to const or let" \
  --auto-commit \
  --commit-message "refactor: Convert var to const/let"
```

## Claude Codeのプログラマティック制御

Claude Code CLIは通常、対話型モードで動作するが、Coding Agent Skillは`--print`オプションを使用した非対話型実行をラップする。

### 内部実装

```javascript
// 内部実装の簡略版
async function runClaude(options) {
  const { prompt, file, model = 'claude-sonnet-4-5' } = options;
  
  const command = [
    'claude',
    '--print',
    '--model', model,
    '--dangerously-skip-permissions',
    prompt
  ];
  
  if (file) {
    command.push('--file', file);
  }
  
  const result = await execCommand(command.join(' '));
  return {
    code: result.stdout,
    explanation: extractExplanation(result.stdout)
  };
}
```

### 対応オプション

| オプション | 説明 | デフォルト値 |
|----------|------|------------|
| --model | 使用するClaudeモデル | claude-sonnet-4-5 |
| --max-tokens | 最大出力トークン数 | 4096 |
| --temperature | 生成の確率性（0.0-1.0） | 0.7 |
| --dangerously-skip-permissions | 権限確認のスキップ | false |

## ユースケース

### 1. ドキュメント自動生成

コードベースからJSDocコメントやREADME.mdを自動生成する。

```bash
clawdbot skill coding-agent generate-docs \
  --directory src/ \
  --output-format markdown \
  --output docs/API.md
```

### 2. レガシーコードの現代化

古いコードベースを最新のJavaScript標準（ES2024）に変換する。

```bash
clawdbot skill coding-agent modernize \
  --directory legacy/ \
  --target-version es2024 \
  --output modernized/
```

### 3. セキュリティ監査

コード内の潜在的なセキュリティ脆弱性を検出する。

```bash
clawdbot skill coding-agent security-audit \
  --directory src/ \
  --framework express \
  --output security-report.md
```

## API仕様

Coding Agent SkillはREST API経由でも利用可能である（Clawdbot Gateway経由）。

```bash
# APIエンドポイント例
POST /api/skills/coding-agent/generate
Content-Type: application/json

{
  "prompt": "Create a user authentication middleware for Express.js",
  "model": "claude-sonnet-4-5",
  "maxTokens": 2048
}
```

レスポンス例:
```json
{
  "code": "const authMiddleware = (req, res, next) => { ... }",
  "explanation": "This middleware validates JWT tokens...",
  "tokenUsage": {
    "input": 45,
    "output": 312
  }
}
```

## コスト管理

Claude Code APIの使用はAnthropic APIの料金体系に従う。2026年2月時点の料金は以下の通り。

| モデル | 入力（1M tokens） | 出力（1M tokens） |
|--------|------------------|------------------|
| Claude Sonnet 4.5 | $3.00 | $15.00 |
| Claude Opus 4.6 | $15.00 | $75.00 |

Coding Agent Skillは、トークン使用量の追跡機能を提供する。

```bash
# トークン使用量の確認
clawdbot skill coding-agent usage --period last-30-days
```

出力例:
```
Token Usage (Last 30 Days):
- Total requests: 1,245
- Input tokens: 2,345,678
- Output tokens: 890,123
- Estimated cost: $45.67
```

## 制限事項

- Claude Code APIのレート制限: 無料プランでは1分あたり5リクエスト、有料プランでは1分あたり50リクエスト
- 最大コンテキスト長: Claude Sonnet 4.5で200,000トークン
- バッチ処理時の並列実行数: デフォルトで3並列（調整可能）

## セキュリティ上の考慮事項

Coding Agent Skillを使用する際、以下のセキュリティ対策を実施することが推奨される。

- APIキーの環境変数管理（`.env`ファイルをGit管理対象外に設定）
- 生成されたコードの手動レビュー（自動コミット前）
- 機密情報を含むコードのAPI送信禁止

## 参考リンク

- Claude Code公式ドキュメント: https://docs.anthropic.com/claude-code
- GitHub Copilot CLI: https://docs.github.com/en/copilot/github-copilot-in-the-cli
- Anthropic API価格: https://www.anthropic.com/pricing
- Clawdbot公式ドキュメント: https://docs.clawd.bot/skills/coding-agent

---

*本記事の情報は2026年2月14日時点のものです。各サービスの機能や料金は変更される可能性があります。最新情報は各公式サイトをご確認ください。*
