---
title: "Slack Skill - ClawdbotでSlackを自動化"
description: "Clawdbot向けSlack Skillを利用して、メッセージ送信、リアクション、ピン操作、チャンネル管理を自動化する方法を解説します。"
publishedAt: "2026-02-14T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Slack", "API統合", "メッセージ自動化", "ワークフロー"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Slack, API統合, メッセージ自動化, ワークフロー"
---

# Slack Skill - ClawdbotからSlackメッセージ送信・リアクション・ピン操作を自動化

Slack Skillは、Slack Web APIおよびSocket Mode APIをClawdbot Agentから利用可能にする統合機能である。本Skillにより、メッセージ送信、リアクション追加、ピン操作、チャンネル管理等をプログラマティックに実行し、Slackワークスペースの自動化を実現できる。

## 概要

Slackは、ビジネスコミュニケーションプラットフォームとして、全世界で2,000万人以上のアクティブユーザーを持つ（2026年2月時点）。Slack APIは、メッセージ送信、ファイル共有、ワークフロー自動化等の機能を提供する。

Slack Skillは、Slack Web API v2およびSocket Modeを統合し、以下の機能を提供する。

- メッセージ送信（テキスト、リッチフォーマット、ファイル添付）
- リアクション（絵文字）の追加・削除
- ピン（重要メッセージの固定）操作
- チャンネル作成・管理
- ユーザー情報取得
- スレッド返信
- モーダル・インタラクティブメッセージ

## 技術的仕様

### システム要件

- Clawdbot Agent 0.9.0以降
- Node.js 18.0以降
- Slack Workspace管理者権限（Bot Token発行のため）
- Slack App（Bot）の作成

### インストール

```bash
# Slack Skillのインストール
clawdhub install slack

# 環境変数の設定
export SLACK_BOT_TOKEN="xoxb-your-bot-token"
export SLACK_APP_TOKEN="xapp-your-app-token" # Socket Mode使用時
```

### Slack Appの作成

1. https://api.slack.com/apps にアクセス
2. 「Create New App」→「From scratch」を選択
3. App名とワークスペースを指定
4. 「OAuth & Permissions」でスコープを追加:
   - `chat:write` - メッセージ送信
   - `reactions:write` - リアクション追加
   - `pins:write` - ピン操作
   - `channels:read` - チャンネル情報取得
   - `users:read` - ユーザー情報取得
5. 「Install to Workspace」でBot Tokenを取得
6. Socket Mode使用時: 「Socket Mode」を有効化し、App Tokenを取得

### 提供されるコマンド

```bash
# メッセージ送信
clawdbot skill slack send \
  --channel "general" \
  --text "Hello from Clawdbot!"

# リッチフォーマットメッセージ送信
clawdbot skill slack send \
  --channel "announcements" \
  --blocks '[{"type":"section","text":{"type":"mrkdwn","text":"*Important Update*"}}]'

# リアクション追加
clawdbot skill slack react \
  --channel "general" \
  --timestamp "1234567890.123456" \
  --emoji "thumbsup"

# ピン追加
clawdbot skill slack pin \
  --channel "important" \
  --timestamp "1234567890.123456"

# チャンネル作成
clawdbot skill slack create-channel \
  --name "new-project" \
  --description "Project discussion channel"

# ファイルアップロード
clawdbot skill slack upload-file \
  --channel "files" \
  --file "./report.pdf" \
  --title "Q1 Report"
```

## 主要機能

### 1. メッセージ送信

テキストメッセージおよびリッチフォーマットメッセージを送信する。

```javascript
// JavaScript APIの使用例
const slack = require('clawdbot-skill-slack');

async function sendNotification(channel, message) {
  const result = await slack.chat.postMessage({
    channel: channel,
    text: message,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*New Deployment*\n${message}`
        }
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: {
              type: 'plain_text',
              text: 'View Details'
            },
            url: 'https://example.com/deployments/123'
          }
        ]
      }
    ]
  });
  
  console.log(`Message sent: ${result.ts}`);
  return result;
}
```

### 2. リアクション操作

メッセージにリアクション（絵文字）を追加・削除する。

```javascript
// リアクション追加
async function addReaction(channel, timestamp, emoji) {
  await slack.reactions.add({
    channel: channel,
    timestamp: timestamp,
    name: emoji // 'thumbsup', 'eyes', 'check' etc.
  });
}

// リアクション削除
async function removeReaction(channel, timestamp, emoji) {
  await slack.reactions.remove({
    channel: channel,
    timestamp: timestamp,
    name: emoji
  });
}

// メッセージの全リアクション取得
async function getReactions(channel, timestamp) {
  const result = await slack.reactions.get({
    channel: channel,
    timestamp: timestamp
  });
  
  return result.message.reactions; // [{ name: 'thumbsup', count: 5, users: [...] }]
}
```

### 3. ピン操作

重要なメッセージをチャンネルにピン留めする。

```javascript
// ピン追加
async function pinMessage(channel, timestamp) {
  await slack.pins.add({
    channel: channel,
    timestamp: timestamp
  });
}

// ピン削除
async function unpinMessage(channel, timestamp) {
  await slack.pins.remove({
    channel: channel,
    timestamp: timestamp
  });
}

// チャンネルのピン一覧取得
async function listPins(channel) {
  const result = await slack.pins.list({
    channel: channel
  });
  
  return result.items; // ピン留めされたメッセージ一覧
}
```

### 4. チャンネル管理

チャンネルの作成、アーカイブ、招待を実行する。

```javascript
// チャンネル作成
async function createChannel(name, description) {
  const result = await slack.conversations.create({
    name: name,
    is_private: false
  });
  
  // 説明文を設定
  await slack.conversations.setTopic({
    channel: result.channel.id,
    topic: description
  });
  
  return result.channel;
}

// ユーザーをチャンネルに招待
async function inviteUsers(channel, userIds) {
  await slack.conversations.invite({
    channel: channel,
    users: userIds.join(',')
  });
}

// チャンネルをアーカイブ
async function archiveChannel(channel) {
  await slack.conversations.archive({
    channel: channel
  });
}
```

### 5. スレッド返信

既存メッセージに対してスレッド形式で返信する。

```javascript
async function replyInThread(channel, threadTs, message) {
  await slack.chat.postMessage({
    channel: channel,
    thread_ts: threadTs, // 元メッセージのタイムスタンプ
    text: message
  });
}
```

### 6. ファイルアップロード

ファイルをSlackチャンネルにアップロードする。

```javascript
const fs = require('fs');

async function uploadFile(channel, filePath, title) {
  const result = await slack.files.upload({
    channels: channel,
    file: fs.createReadStream(filePath),
    title: title,
    filename: path.basename(filePath)
  });
  
  return result.file;
}
```

## API仕様

Slack SkillはClawdbot Gateway経由でREST APIとして利用可能である。

### メッセージ送信API

```bash
POST /api/skills/slack/send
Content-Type: application/json

{
  "channel": "C1234567890",
  "text": "Hello from API",
  "blocks": [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "*Hello* from API"
      }
    }
  ]
}
```

レスポンス:
```json
{
  "ok": true,
  "channel": "C1234567890",
  "ts": "1234567890.123456",
  "message": {
    "text": "Hello from API",
    "user": "U987654321"
  }
}
```

### リアクション追加API

```bash
POST /api/skills/slack/react
Content-Type: application/json

{
  "channel": "C1234567890",
  "timestamp": "1234567890.123456",
  "emoji": "thumbsup"
}
```

## 実装例

### 1. CI/CDデプロイ通知

GitHub Actionsからデプロイ通知をSlackに送信する。

```javascript
// deploy-notify.js
const slack = require('clawdbot-skill-slack');

async function notifyDeployment(status, version, commitUrl) {
  const color = status === 'success' ? 'good' : 'danger';
  const emoji = status === 'success' ? ':white_check_mark:' : ':x:';
  
  await slack.chat.postMessage({
    channel: 'deployments',
    text: `Deployment ${status}: v${version}`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `${emoji} *Deployment ${status.toUpperCase()}*\nVersion: \`${version}\``
        }
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Commit:*\n<${commitUrl}|View Changes>`
          },
          {
            type: 'mrkdwn',
            text: `*Time:*\n${new Date().toLocaleString()}`
          }
        ]
      }
    ],
    attachments: [
      {
        color: color,
        footer: 'GitHub Actions',
        footer_icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
      }
    ]
  });
}

// GitHub Actionsから呼び出し
notifyDeployment(
  process.env.DEPLOY_STATUS,
  process.env.VERSION,
  process.env.COMMIT_URL
);
```

### 2. エラーアラート自動通知

アプリケーションエラーをSlackに即座通知する。

```javascript
// error-handler.js
async function handleError(error, context) {
  const message = await slack.chat.postMessage({
    channel: 'alerts',
    text: `Error in ${context.service}`,
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: ':warning: Application Error'
        }
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Service:*\n${context.service}`
          },
          {
            type: 'mrkdwn',
            text: `*Environment:*\n${context.env}`
          }
        ]
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Error Message:*\n\`\`\`${error.message}\`\`\``
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Stack Trace:*\n\`\`\`${error.stack.substring(0, 500)}...\`\`\``
        }
      }
    ]
  });
  
  // 緊急度が高い場合はリアクションでハイライト
  if (context.severity === 'critical') {
    await slack.reactions.add({
      channel: 'alerts',
      timestamp: message.ts,
      name: 'rotating_light'
    });
  }
}
```

### 3. タスク管理自動化

GitHub Issueが作成されたら、Slackチャンネルに通知しピン留めする。

```javascript
// github-webhook-handler.js
async function handleNewIssue(issue) {
  // Slackに通知
  const message = await slack.chat.postMessage({
    channel: 'github-issues',
    text: `New issue: ${issue.title}`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*New GitHub Issue*\n<${issue.html_url}|#${issue.number}: ${issue.title}>`
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: issue.body.substring(0, 300) + '...'
        }
      }
    ]
  });
  
  // 緊急ラベルがある場合はピン留め
  if (issue.labels.some(l => l.name === 'urgent')) {
    await slack.pins.add({
      channel: 'github-issues',
      timestamp: message.ts
    });
    
    await slack.reactions.add({
      channel: 'github-issues',
      timestamp: message.ts,
      name: 'exclamation'
    });
  }
}
```

### 4. チーム投票システム

Slackメッセージに自動的にリアクションを追加して投票を実施する。

```javascript
async function createPoll(channel, question, options) {
  const emojiOptions = ['one', 'two', 'three', 'four', 'five'];
  
  const optionsText = options.map((opt, i) => 
    `:${emojiOptions[i]}: ${opt}`
  ).join('\n');
  
  const message = await slack.chat.postMessage({
    channel: channel,
    text: question,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*${question}*\n\n${optionsText}`
        }
      }
    ]
  });
  
  // 選択肢の数だけリアクションを追加
  for (let i = 0; i < options.length; i++) {
    await slack.reactions.add({
      channel: channel,
      timestamp: message.ts,
      name: emojiOptions[i]
    });
  }
  
  return message.ts;
}

// 使用例
createPoll(
  'team-decisions',
  'Where should we have the team lunch?',
  ['Italian', 'Japanese', 'Mexican', 'Chinese']
);
```

## ユースケース

### 1. 開発チーム向け通知自動化

コミット、PR、デプロイ等の開発イベントを自動通知する。

```bash
# GitHub Actionsワークフロー例
- name: Notify Slack on PR merge
  run: |
    clawdbot skill slack send \
      --channel "dev-team" \
      --text "PR #${{ github.event.pull_request.number }} merged!" \
      --blocks '[{"type":"section","text":{"type":"mrkdwn","text":"<${{ github.event.pull_request.html_url }}|PR #${{ github.event.pull_request.number }}> merged by @${{ github.actor }}"}}]'
```

### 2. カスタマーサポート自動化

顧客からの問い合わせをSlackに転送し、チームで対応する。

```javascript
// Zendesk Webhook → Slack
async function forwardSupportTicket(ticket) {
  await slack.chat.postMessage({
    channel: 'customer-support',
    text: `New ticket: ${ticket.subject}`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*New Support Ticket #${ticket.id}*\n${ticket.subject}`
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: ticket.description
        }
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: { type: 'plain_text', text: 'View in Zendesk' },
            url: ticket.url
          }
        ]
      }
    ]
  });
}
```

### 3. マーケティングキャンペーン通知

メールキャンペーンの結果をSlackに自動報告する。

```javascript
async function reportCampaignResults(campaign) {
  await slack.chat.postMessage({
    channel: 'marketing',
    text: `Campaign results: ${campaign.name}`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Campaign: ${campaign.name}*`
        }
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Sent:*\n${campaign.sent.toLocaleString()}` },
          { type: 'mrkdwn', text: `*Opens:*\n${campaign.opens.toLocaleString()} (${campaign.openRate}%)` },
          { type: 'mrkdwn', text: `*Clicks:*\n${campaign.clicks.toLocaleString()} (${campaign.clickRate}%)` },
          { type: 'mrkdwn', text: `*Conversions:*\n${campaign.conversions.toLocaleString()}` }
        ]
      }
    ]
  });
}
```

## レート制限

Slack APIのレート制限は、2026年2月時点で以下の通り（Tier 2アプリの場合）。

| メソッド | レート制限 |
|---------|----------|
| chat.postMessage | 1リクエスト/秒 |
| reactions.add | 1リクエスト/秒 |
| conversations.create | 20リクエスト/分 |
| files.upload | 20リクエスト/分 |

Slack Skillは自動的にレート制限を監視し、`Retry-After`ヘッダーに従って待機する。

## セキュリティ上の考慮事項

Slack Skillを使用する際、以下のセキュリティ対策を実施することが推奨される。

- Bot Tokenを環境変数で管理（コードに直接記載しない）
- 必要最小限のスコープのみ付与
- Webhook URLの暗号化・安全な保管
- メッセージ内容のサニタイゼーション（XSS対策）

### 推奨スコープ

```
chat:write         # メッセージ送信
reactions:write    # リアクション追加
pins:write         # ピン操作
channels:read      # チャンネル情報取得
users:read         # ユーザー情報取得
files:write        # ファイルアップロード
```

## 参考リンク

- Slack API公式サイト: https://api.slack.com/
- Slack Web API Reference: https://api.slack.com/methods
- Slack App管理: https://api.slack.com/apps
- Block Kit Builder: https://api.slack.com/block-kit
- Clawdbot公式ドキュメント: https://docs.clawd.bot/skills/slack

---

*本記事の情報は2026年2月14日時点のものです。各サービスの機能や仕様は変更される可能性があります。最新情報は各公式サイトをご確認ください。*
