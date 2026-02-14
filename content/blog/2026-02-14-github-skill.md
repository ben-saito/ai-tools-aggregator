# GitHub Skill - gh CLIでイシュー・PR・CI操作を自動化

GitHub Skillは、GitHub公式CLIツール（gh）をClawdbot Agentから統合利用するための機能を提供する。本Skillにより、イシューの作成・管理、プルリクエスト（PR）操作、GitHub Actions CI/CDパイプラインの制御をプログラマティックに実行できる。

## 概要

GitHub CLIは、GitHubが公式に提供するコマンドラインツールであり、GitHubリポジトリの操作をターミナルから実行可能にする。2026年2月時点で、バージョン2.60以降がリリースされている。

GitHub Skillは、gh CLIをラップし、Clawdbot Agent環境で以下の機能を提供する。

- イシューの作成・検索・更新・クローズ
- プルリクエストの作成・マージ・レビュー
- GitHub Actionsワークフローの実行・監視
- リポジトリ管理（作成・削除・設定変更）
- GitHub Projects（プロジェクト管理）の操作

## 技術的仕様

### システム要件

- Clawdbot Agent 0.9.0以降
- GitHub CLI 2.60以降
- GitHub Personal Access Token（PAT）またはGitHub App認証
- Git 2.30以降

### インストール

```bash
# GitHub CLIのインストール（macOS）
brew install gh

# GitHub CLIのインストール（Linux）
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | \
  sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | \
  sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh

# 認証
gh auth login

# GitHub Skillのインストール
clawdhub install github
```

### 提供されるコマンド

```bash
# イシューの作成
clawdbot skill github issue create \
  --repo owner/repo \
  --title "Bug: Login fails with special characters" \
  --body "Steps to reproduce: ..." \
  --label bug,urgent

# イシューの検索
clawdbot skill github issue list \
  --repo owner/repo \
  --state open \
  --label bug

# プルリクエストの作成
clawdbot skill github pr create \
  --repo owner/repo \
  --title "Add user authentication" \
  --body "Implements OAuth2 authentication" \
  --base main \
  --head feature/auth

# プルリクエストのマージ
clawdbot skill github pr merge \
  --repo owner/repo \
  --number 123 \
  --merge-method squash

# GitHub Actionsワークフローの実行
clawdbot skill github workflow run \
  --repo owner/repo \
  --workflow deploy.yml \
  --ref main

# ワークフロー実行状態の監視
clawdbot skill github workflow watch \
  --repo owner/repo \
  --run-id 12345678
```

## 主要機能

### 1. イシュー管理

イシューの作成、検索、更新、クローズを自動化する。

```javascript
// JavaScript APIの使用例
const github = require('clawdbot-skill-github');

async function createBugReport(error) {
  const issue = await github.issue.create({
    repo: 'myorg/myapp',
    title: `Bug: ${error.message}`,
    body: `
## Error Details
- Message: ${error.message}
- Stack: ${error.stack}
- Timestamp: ${new Date().toISOString()}

## Environment
- Node: ${process.version}
- OS: ${process.platform}
    `,
    labels: ['bug', 'automated'],
    assignees: ['maintainer-username']
  });
  
  console.log(`Created issue #${issue.number}: ${issue.url}`);
}
```

### 2. プルリクエスト操作

PRの作成、レビュー、マージを自動化する。

```bash
# 自動PR作成フロー
#!/bin/bash

# 新規ブランチ作成
git checkout -b feature/auto-update
git add .
git commit -m "chore: Update dependencies"
git push origin feature/auto-update

# PRの作成
clawdbot skill github pr create \
  --repo owner/repo \
  --title "chore: Update dependencies" \
  --body "$(cat pr-template.md)" \
  --label dependencies \
  --reviewer @team/reviewers

# CI完了後の自動マージ
clawdbot skill github pr merge \
  --repo owner/repo \
  --number $(gh pr view --json number -q .number) \
  --auto \
  --merge-method squash
```

### 3. GitHub Actions CI/CD統合

ワークフローの実行、監視、再実行を自動化する。

```javascript
// デプロイワークフローの自動実行
async function deployToProduction() {
  const run = await github.workflow.run({
    repo: 'myorg/myapp',
    workflow: 'deploy.yml',
    ref: 'main',
    inputs: {
      environment: 'production',
      version: '1.5.0'
    }
  });
  
  console.log(`Workflow started: ${run.url}`);
  
  // 完了まで監視
  const result = await github.workflow.watch({
    repo: 'myorg/myapp',
    runId: run.id,
    timeout: 600 // 10分
  });
  
  if (result.conclusion === 'success') {
    console.log('Deployment successful!');
  } else {
    throw new Error(`Deployment failed: ${result.conclusion}`);
  }
}
```

### 4. リポジトリ管理

リポジトリの作成、削除、設定変更を実行する。

```bash
# 新規リポジトリ作成
clawdbot skill github repo create \
  --name myapp \
  --description "My application" \
  --public \
  --enable-issues \
  --enable-wiki=false \
  --license mit

# ブランチ保護ルールの設定
clawdbot skill github repo protect \
  --repo owner/myapp \
  --branch main \
  --require-reviews 2 \
  --require-codeowners \
  --require-status-checks \
  --checks "CI,Tests,Lint"
```

### 5. GitHub Projects統合

GitHub Projectsのアイテム追加、ステータス更新を自動化する。

```bash
# イシューをプロジェクトボードに追加
clawdbot skill github project add-item \
  --project 123 \
  --issue owner/repo#456 \
  --status "In Progress"
```

## API仕様

GitHub SkillはClawdbot Gateway経由でREST APIとして利用可能である。

### イシュー作成API

```bash
POST /api/skills/github/issue/create
Content-Type: application/json
Authorization: Bearer <clawdbot-token>

{
  "repo": "owner/repo",
  "title": "Feature request: Dark mode",
  "body": "Add dark mode support to the application",
  "labels": ["enhancement"],
  "assignees": ["developer1"]
}
```

レスポンス:
```json
{
  "number": 789,
  "url": "https://github.com/owner/repo/issues/789",
  "state": "open",
  "created_at": "2026-02-14T12:00:00Z"
}
```

### PR作成API

```bash
POST /api/skills/github/pr/create
Content-Type: application/json

{
  "repo": "owner/repo",
  "title": "Add dark mode",
  "body": "Implements dark mode feature",
  "base": "main",
  "head": "feature/dark-mode",
  "draft": false
}
```

## 実装例

### 1. 自動イシュートリアージ

新規イシューを自動的にラベル付け・アサインする。

```javascript
// GitHub Webhookを受信してトリアージ
async function triageNewIssue(webhookPayload) {
  const { issue, repository } = webhookPayload;
  
  // タイトルから自動ラベル付け
  const labels = [];
  if (issue.title.includes('Bug')) labels.push('bug');
  if (issue.title.includes('Feature')) labels.push('enhancement');
  
  // 緊急度判定
  if (issue.body.includes('URGENT') || issue.body.includes('CRITICAL')) {
    labels.push('urgent');
  }
  
  await github.issue.update({
    repo: repository.full_name,
    number: issue.number,
    labels: labels
  });
  
  // 担当者自動アサイン
  const assignee = await determineAssignee(issue);
  await github.issue.assign({
    repo: repository.full_name,
    number: issue.number,
    assignees: [assignee]
  });
}
```

### 2. 依存関係自動更新

Dependabotスタイルの自動PR作成。

```bash
#!/bin/bash
# auto-update-deps.sh

# 依存関係チェック
npm outdated --json > outdated.json

# 更新可能なパッケージを取得
PACKAGES=$(jq -r 'keys[]' outdated.json)

for pkg in $PACKAGES; do
  # ブランチ作成
  BRANCH="deps/update-$pkg"
  git checkout -b $BRANCH
  
  # パッケージ更新
  npm update $pkg
  
  # コミット・プッシュ
  git add package.json package-lock.json
  git commit -m "chore: Update $pkg to latest version"
  git push origin $BRANCH
  
  # PR作成
  clawdbot skill github pr create \
    --repo owner/repo \
    --title "chore: Update $pkg" \
    --body "Automated dependency update for $pkg" \
    --label dependencies \
    --base main \
    --head $BRANCH
done
```

### 3. リリース自動化

タグプッシュ時に自動でGitHub Releaseを作成する。

```javascript
async function createRelease(tag) {
  // CHANGELOG.mdから変更内容を抽出
  const changelog = await extractChangelogForTag(tag);
  
  const release = await github.release.create({
    repo: 'owner/repo',
    tag: tag,
    name: `Release ${tag}`,
    body: changelog,
    draft: false,
    prerelease: tag.includes('beta')
  });
  
  console.log(`Release created: ${release.url}`);
}
```

## ユースケース

### 1. CI/CDパイプライン統合

GitHub Actionsワークフローと連携し、テスト・デプロイを自動化する。

```yaml
# .github/workflows/auto-deploy.yml
name: Auto Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Run tests
        run: npm test
      
      - name: Deploy via Clawdbot
        run: |
          clawdbot skill github workflow run \
            --repo owner/repo \
            --workflow deploy-production.yml \
            --ref main
```

### 2. イシュー自動クローズ

古い未対応イシューを自動的にクローズする。

```bash
# 30日以上未更新のイシューをクローズ
clawdbot skill github issue close-stale \
  --repo owner/repo \
  --days 30 \
  --label "wontfix" \
  --comment "Closing due to inactivity. Please reopen if still relevant."
```

### 3. PR自動レビュー

コード変更内容を分析し、自動コメントを追加する。

```javascript
async function autoReviewPR(prNumber) {
  const diff = await github.pr.getDiff({
    repo: 'owner/repo',
    number: prNumber
  });
  
  // 変更内容の分析
  const issues = await analyzeCodeChanges(diff);
  
  if (issues.length > 0) {
    await github.pr.createReview({
      repo: 'owner/repo',
      number: prNumber,
      event: 'REQUEST_CHANGES',
      body: 'Automated review found the following issues:',
      comments: issues.map(i => ({
        path: i.file,
        line: i.line,
        body: i.message
      }))
    });
  }
}
```

## レート制限

GitHub APIのレート制限は以下の通り（2026年2月時点）。

| 認証方式 | レート制限 |
|---------|----------|
| Personal Access Token | 5,000リクエスト/時 |
| GitHub App | 15,000リクエスト/時 |
| OAuth App | 5,000リクエスト/時 |

GitHub Skillは自動的にレート制限を監視し、上限到達時には適切な待機時間を挿入する。

```javascript
// レート制限情報の取得
const rateLimit = await github.rateLimit.get();
console.log(`Remaining: ${rateLimit.remaining}/${rateLimit.limit}`);
console.log(`Reset at: ${new Date(rateLimit.reset * 1000)}`);
```

## セキュリティ上の考慮事項

GitHub Skillを使用する際、以下のセキュリティ対策を実施することが推奨される。

- Personal Access Token（PAT）の権限を最小限に設定（必要なスコープのみ付与）
- トークンを環境変数で管理し、コードに直接記載しない
- GitHub App認証の使用（より細かい権限制御が可能）
- Webhook受信時の署名検証を実施

### 推奨スコープ

```bash
# イシュー・PR操作に必要な最小スコープ
gh auth login --scopes "repo,read:org"
```

## 参考リンク

- GitHub CLI公式サイト: https://cli.github.com/
- GitHub CLI GitHub: https://github.com/cli/cli
- GitHub API公式ドキュメント: https://docs.github.com/en/rest
- GitHub Actions: https://docs.github.com/en/actions
- Clawdbot公式ドキュメント: https://docs.clawd.bot/skills/github

---

*本記事の情報は2026年2月14日時点のものです。各サービスの機能や仕様は変更される可能性があります。最新情報は各公式サイトをご確認ください。*
