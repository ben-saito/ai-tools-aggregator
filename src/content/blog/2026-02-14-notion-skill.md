---
title: "Notion Skill - ClawdbotでNotion管理を自動化"
description: "Clawdbot向けNotion Skillを利用して、Notion APIでページ、データベース、ブロックを管理・自動化する方法を解説します。"
publishedAt: "2026-02-14T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Notion", "API統合", "ドキュメント管理", "自動化"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Notion, API統合, ドキュメント管理, 自動化"
---

# Notion Skill - Notion APIでページ・データベース・ブロック管理を自動化

Notion Skillは、Notion公式APIをClawdbot Agentから利用可能にする統合機能である。本Skillにより、Notionページの作成・更新、データベース操作、ブロック追加等をプログラマティックに実行し、ドキュメント管理、プロジェクト管理、ナレッジベース構築を自動化できる。

## 概要

Notionは、ドキュメント作成、データベース管理、プロジェクト管理を統合したオールインワンワークスペースツールである。2026年2月時点で、全世界で3,500万人以上のユーザーが利用している。

Notion APIは、2021年5月に正式公開され、以下の機能を提供している。

- ページの作成・読み取り・更新
- データベースのクエリ・フィルタリング・ソート
- ブロック（テキスト、見出し、リスト等）の追加・編集
- コメントの作成・取得
- ユーザー情報の取得

Notion Skillは、Notion API v1をラップし、Clawdbot Agent環境で簡易に利用できる形式で提供する。

## 技術的仕様

### システム要件

- Clawdbot Agent 0.9.0以降
- Node.js 18.0以降
- Notion APIキー（Internal IntegrationまたはOAuth）
- Notionワークスペースへの統合アクセス権限

### インストール

```bash
# Notion Skillのインストール
clawdhub install notion

# APIキーの設定
export NOTION_API_KEY="secret_xxxxxxxxxxxxx"
```

### Notion統合の作成

1. https://www.notion.so/my-integrations にアクセス
2. 「新しい統合」をクリック
3. 統合名を入力し、ワークスペースを選択
4. 「送信」をクリックしてAPIキーを取得
5. 連携したいページで「...」→「接続」→作成した統合を選択

### 提供されるコマンド

```bash
# ページの作成
clawdbot skill notion page create \
  --parent-id <database-id> \
  --title "New Task" \
  --properties '{"Status": {"select": {"name": "In Progress"}}}'

# ページの更新
clawdbot skill notion page update \
  --page-id <page-id> \
  --properties '{"Status": {"select": {"name": "Done"}}}'

# データベースのクエリ
clawdbot skill notion database query \
  --database-id <database-id> \
  --filter '{"property": "Status", "select": {"equals": "In Progress"}}' \
  --sort '{"property": "Created", "direction": "descending"}'

# ブロックの追加
clawdbot skill notion block append \
  --page-id <page-id> \
  --blocks '[{"type": "paragraph", "paragraph": {"rich_text": [{"text": {"content": "Hello World"}}]}}]'

# ページ内容の取得
clawdbot skill notion page get \
  --page-id <page-id> \
  --output page-content.json
```

## 主要機能

### 1. ページ操作

Notionページの作成、読み取り、更新を実行する。

```javascript
// JavaScript APIの使用例
const notion = require('clawdbot-skill-notion');

async function createMeetingNotes(title, date, attendees) {
  const page = await notion.pages.create({
    parent: { database_id: 'meeting-notes-db-id' },
    properties: {
      'Title': {
        title: [
          {
            text: { content: title }
          }
        ]
      },
      'Date': {
        date: { start: date }
      },
      'Attendees': {
        multi_select: attendees.map(name => ({ name }))
      }
    },
    children: [
      {
        object: 'block',
        type: 'heading_2',
        heading_2: {
          rich_text: [{ text: { content: 'Agenda' } }]
        }
      },
      {
        object: 'block',
        type: 'to_do',
        to_do: {
          rich_text: [{ text: { content: 'Review Q1 results' } }],
          checked: false
        }
      }
    ]
  });
  
  console.log(`Meeting notes created: ${page.url}`);
  return page;
}
```

### 2. データベース操作

データベースのクエリ、フィルタリング、ソートを実行する。

```javascript
// タスク管理データベースから未完了タスクを取得
async function getPendingTasks() {
  const response = await notion.databases.query({
    database_id: 'tasks-db-id',
    filter: {
      and: [
        {
          property: 'Status',
          select: {
            does_not_equal: 'Done'
          }
        },
        {
          property: 'Due Date',
          date: {
            on_or_before: new Date().toISOString()
          }
        }
      ]
    },
    sorts: [
      {
        property: 'Priority',
        direction: 'descending'
      }
    ]
  });
  
  return response.results;
}
```

### 3. ブロック管理

ページ内のブロック（テキスト、見出し、リスト等）を追加・編集する。

```javascript
// ページに複数ブロックを追加
async function appendContent(pageId, content) {
  const blocks = [
    {
      object: 'block',
      type: 'paragraph',
      paragraph: {
        rich_text: [{ text: { content: content.intro } }]
      }
    },
    {
      object: 'block',
      type: 'heading_3',
      heading_3: {
        rich_text: [{ text: { content: 'Details' } }]
      }
    },
    {
      object: 'block',
      type: 'bulleted_list_item',
      bulleted_list_item: {
        rich_text: [{ text: { content: content.detail1 } }]
      }
    },
    {
      object: 'block',
      type: 'code',
      code: {
        rich_text: [{ text: { content: content.codeSnippet } }],
        language: 'javascript'
      }
    }
  ];
  
  await notion.blocks.children.append({
    block_id: pageId,
    children: blocks
  });
}
```

### 4. コメント機能

ページやブロックにコメントを追加する。

```javascript
async function addReviewComment(pageId, comment) {
  await notion.comments.create({
    parent: { page_id: pageId },
    rich_text: [
      {
        text: { content: comment }
      }
    ]
  });
}
```

### 5. 検索機能

ワークスペース全体からページを検索する。

```javascript
async function searchPages(query) {
  const response = await notion.search({
    query: query,
    filter: {
      property: 'object',
      value: 'page'
    },
    sort: {
      direction: 'descending',
      timestamp: 'last_edited_time'
    }
  });
  
  return response.results;
}
```

## API仕様

Notion SkillはClawdbot Gateway経由でREST APIとして利用可能である。

### ページ作成API

```bash
POST /api/skills/notion/page/create
Content-Type: application/json

{
  "parent": {
    "database_id": "abc123"
  },
  "properties": {
    "Title": {
      "title": [
        {
          "text": {
            "content": "New Project"
          }
        }
      ]
    },
    "Status": {
      "select": {
        "name": "Planning"
      }
    }
  }
}
```

レスポンス:
```json
{
  "id": "page-abc123",
  "url": "https://notion.so/New-Project-abc123",
  "created_time": "2026-02-14T12:00:00.000Z",
  "last_edited_time": "2026-02-14T12:00:00.000Z"
}
```

## 実装例

### 1. タスク管理自動化

GitHub Issuesを自動的にNotionタスクデータベースに同期する。

```javascript
const github = require('@octokit/rest');
const notion = require('clawdbot-skill-notion');

async function syncGitHubIssues(repo) {
  const octokit = new github.Octokit();
  const { data: issues } = await octokit.issues.listForRepo({
    owner: 'myorg',
    repo: repo,
    state: 'open'
  });
  
  for (const issue of issues) {
    // Notionデータベース内に既存エントリがあるかチェック
    const existing = await notion.databases.query({
      database_id: 'tasks-db-id',
      filter: {
        property: 'GitHub Issue ID',
        number: {
          equals: issue.number
        }
      }
    });
    
    if (existing.results.length === 0) {
      // 新規タスク作成
      await notion.pages.create({
        parent: { database_id: 'tasks-db-id' },
        properties: {
          'Title': {
            title: [{ text: { content: issue.title } }]
          },
          'GitHub Issue ID': {
            number: issue.number
          },
          'Status': {
            select: { name: 'To Do' }
          },
          'Priority': {
            select: { name: issue.labels.includes('urgent') ? 'High' : 'Medium' }
          },
          'URL': {
            url: issue.html_url
          }
        }
      });
    }
  }
}
```

### 2. ミーティングノート自動生成

カレンダーイベントから自動的にミーティングノートを作成する。

```javascript
async function createMeetingNotesFromCalendar(event) {
  const page = await notion.pages.create({
    parent: { database_id: 'meeting-notes-db-id' },
    properties: {
      'Title': {
        title: [{ text: { content: event.summary } }]
      },
      'Date': {
        date: { start: event.start.dateTime }
      },
      'Attendees': {
        multi_select: event.attendees.map(a => ({ name: a.email }))
      }
    },
    children: [
      {
        type: 'heading_2',
        heading_2: {
          rich_text: [{ text: { content: 'Agenda' } }]
        }
      },
      {
        type: 'paragraph',
        paragraph: {
          rich_text: [{ text: { content: event.description || '' } }]
        }
      },
      {
        type: 'heading_2',
        heading_2: {
          rich_text: [{ text: { content: 'Notes' } }]
        }
      },
      {
        type: 'paragraph',
        paragraph: {
          rich_text: [{ text: { content: '' } }]
        }
      },
      {
        type: 'heading_2',
        heading_2: {
          rich_text: [{ text: { content: 'Action Items' } }]
        }
      }
    ]
  });
  
  return page.url;
}
```

### 3. 週次レポート自動生成

完了したタスクから週次レポートを生成する。

```javascript
async function generateWeeklyReport() {
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  
  // 先週完了したタスクを取得
  const completedTasks = await notion.databases.query({
    database_id: 'tasks-db-id',
    filter: {
      and: [
        {
          property: 'Status',
          select: { equals: 'Done' }
        },
        {
          property: 'Completed Date',
          date: { on_or_after: oneWeekAgo.toISOString() }
        }
      ]
    }
  });
  
  // レポートページ作成
  const reportBlocks = [
    {
      type: 'heading_1',
      heading_1: {
        rich_text: [{ text: { content: 'Weekly Report' } }]
      }
    },
    {
      type: 'paragraph',
      paragraph: {
        rich_text: [
          { text: { content: `Completed Tasks: ${completedTasks.results.length}` } }
        ]
      }
    },
    {
      type: 'heading_2',
      heading_2: {
        rich_text: [{ text: { content: 'Completed Items' } }]
      }
    }
  ];
  
  // 完了タスクをリスト化
  for (const task of completedTasks.results) {
    reportBlocks.push({
      type: 'bulleted_list_item',
      bulleted_list_item: {
        rich_text: [
          { text: { content: task.properties.Title.title[0].text.content } }
        ]
      }
    });
  }
  
  const report = await notion.pages.create({
    parent: { database_id: 'reports-db-id' },
    properties: {
      'Title': {
        title: [{ text: { content: `Weekly Report - ${new Date().toLocaleDateString()}` } }]
      }
    },
    children: reportBlocks
  });
  
  return report.url;
}
```

## ユースケース

### 1. ナレッジベース自動構築

社内ドキュメントを自動的にNotionナレッジベースに集約する。

```bash
# Markdown形式のドキュメントをNotionに変換
clawdbot skill notion import-markdown \
  --directory ./docs \
  --parent-page <knowledge-base-page-id> \
  --create-toc
```

### 2. CRM統合

顧客管理システムとNotionデータベースを同期する。

```javascript
// Salesforce顧客データをNotionに同期
async function syncCRM(customers) {
  for (const customer of customers) {
    await notion.pages.create({
      parent: { database_id: 'crm-db-id' },
      properties: {
        'Company Name': {
          title: [{ text: { content: customer.name } }]
        },
        'Industry': {
          select: { name: customer.industry }
        },
        'Revenue': {
          number: customer.annualRevenue
        },
        'Contact Email': {
          email: customer.email
        }
      }
    });
  }
}
```

### 3. コンテンツ公開ワークフロー

Notionで執筆したブログ記事をWordPressに自動公開する。

```javascript
async function publishToWordPress(notionPageId) {
  // Notionページの内容を取得
  const page = await notion.pages.retrieve({ page_id: notionPageId });
  const blocks = await notion.blocks.children.list({ block_id: notionPageId });
  
  // MarkdownまたはHTMLに変換
  const content = convertBlocksToHTML(blocks.results);
  
  // WordPressに投稿
  await wordpress.createPost({
    title: page.properties.Title.title[0].text.content,
    content: content,
    status: 'publish'
  });
}
```

## レート制限

Notion APIのレート制限は、2026年2月時点で以下の通り。

- 平均: 秒あたり3リクエスト
- バースト: 短時間で最大10リクエストまで許可

レート制限超過時、APIは`429 Too Many Requests`を返す。Notion Skillは自動的にリトライロジックを実装している。

## セキュリティ上の考慮事項

Notion Skillを使用する際、以下のセキュリティ対策を実施することが推奨される。

- APIキーの環境変数管理（コードに直接記載しない）
- 統合の権限を最小限に設定（必要なページのみに接続を許可）
- 公開APIエンドポイント経由でNotion APIを呼び出す場合、認証ミドルウェアを実装
- ユーザー入力をNotionに書き込む際、サニタイゼーション処理を実施

### 推奨権限設定

```javascript
// Internal Integration作成時の推奨設定
{
  "capabilities": {
    "read_content": true,
    "update_content": true,
    "insert_content": true
  },
  "content_capabilities": {
    "read_user_info": false,  // 不要な場合はfalse
    "read_comments": true
  }
}
```

## 制限事項

- ページサイズ: 1ページあたり最大100ブロック（超過する場合は分割が必要）
- データベースクエリ: 1回のクエリで最大100件まで（ページネーション対応）
- ブロック深度: ネストは最大2階層まで
- リッチテキスト長: 1ブロックあたり最大2,000文字

## 参考リンク

- Notion公式サイト: https://www.notion.so/
- Notion API公式ドキュメント: https://developers.notion.com/
- Notion API Reference: https://developers.notion.com/reference
- Notion統合作成: https://www.notion.so/my-integrations
- Clawdbot公式ドキュメント: https://docs.clawd.bot/skills/notion

---

*本記事の情報は2026年2月14日時点のものです。各サービスの機能や仕様は変更される可能性があります。最新情報は各公式サイトをご確認ください。*
