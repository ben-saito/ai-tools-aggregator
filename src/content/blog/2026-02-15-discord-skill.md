---
title: "Clawdbot Discord Skill - Discord APIを統合したメッセージ自動化"
description: "Clawdbot向けDiscord Skillを利用して、メッセージ送信、リアクション、スレッド管理、サーバー運用の自動化を実現する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Discord", "Bot", "自動化", "チャットツール"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Discord, ボット, メッセージ自動化, リアクション, スレッド管理, Discord API"
---

Clawdbotの公式Skillとして提供されているDiscord Skillは、Discord REST APIを利用したメッセージ送信、リアクション管理、スレッド操作、サーバー運用の自動化を可能にするツールである。本記事では、Discord Skillの技術仕様、主要機能、実装例、およびセキュリティ考慮事項について解説する。

## 概要

Discord Skillは、Clawdbot（AI駆動のCLIエージェント）からDiscord APIを制御するためのインターフェースを提供する。メッセージの送信・編集・削除、リアクション追加、投票（Poll）作成、スレッド管理、絵文字・スタンプのアップロード、メンバー情報取得など、Discord Bot開発で必要となる主要機能をカバーしている。

技術的には、Clawdbot内部の`message`ツール（Discord用プラグイン）経由でDiscord REST APIへリクエストを送信し、BotトークンによるOAuth認証を使用する。チャンネル管理やモデレーション機能は、デフォルトで無効化されており、明示的な設定により有効化する必要がある。

## 技術的仕様

### システム要件

- **Clawdbot:** バージョン不明（公式ドキュメントに記載なし）
- **Discord Bot Token:** Discord Developer Portalで発行（OAuth2スコープ: `bot`, Permissions: 必要な権限を事前設定）
- **環境変数:** BotトークンをClawdbot設定に登録
- **依存関係:** なし（Clawdbot組み込みツール）

### インストール方法

Discord Skillは組み込みSkillのため、追加インストール不要。Botトークンの設定のみ必要となる。

```bash
# Discord Bot Token設定例（環境変数またはClawdbot設定ファイル）
export DISCORD_BOT_TOKEN="YOUR_BOT_TOKEN_HERE"
```

Discord Developer Portalでの事前準備:
1. https://discord.com/developers/applications でアプリケーション作成
2. Bot設定からトークン取得
3. OAuth2 URL GeneratorでBotをサーバーに招待
4. 必要な権限を付与（例: Send Messages, Manage Messages, Add Reactions等）

### APIエンドポイント

Discord Skillは以下のDiscord REST API v10エンドポイントを利用:
- `/channels/{channelId}/messages` (メッセージ送受信)
- `/channels/{channelId}/messages/{messageId}/reactions` (リアクション)
- `/channels/{channelId}/threads` (スレッド管理)
- `/guilds/{guildId}/emojis` (カスタム絵文字)
- `/guilds/{guildId}/stickers` (スタンプ)
- その他（チャンネル管理、メンバー情報、イベント等）

### アクセス制御

Discord Skillは、アクション単位でのゲーティング機能を提供する。デフォルトではメッセージ送信・リアクション・スレッド管理等が有効だが、以下の機能はデフォルトで無効:

- **roles:** ロール付与・削除（`discord.actions.roles: false`）
- **channels:** チャンネル・カテゴリの作成・編集・削除（`discord.actions.channels: false`）
- **moderation:** タイムアウト・キック・BAN（`discord.actions.moderation: false`）

有効化には、Clawdbot設定ファイルで明示的に`true`を設定する必要がある。

## 主要機能

### メッセージ送信

```json
{
  "action": "sendMessage",
  "to": "channel:123456789012345678",
  "content": "デプロイ完了: v1.2.3"
}
```

- **メディア添付:** `mediaUrl`パラメータで画像・音声・動画を添付可能（`file:///path/to/file`または`https://...`）
- **返信:** `replyTo`パラメータでメッセージIDを指定し、特定メッセージへ返信
- **DM送信:** `to: "user:987654321098765432"`でダイレクトメッセージ送信

### リアクション管理

```json
{
  "action": "react",
  "channelId": "123456789012345678",
  "messageId": "987654321098765432",
  "emoji": "✅"
}
```

カスタム絵文字の場合:
```json
{
  "emoji": "<:emoji_name:1234567890>"
}
```

リアクションユーザー一覧取得:
```json
{
  "action": "reactions",
  "channelId": "123456789012345678",
  "messageId": "987654321098765432",
  "limit": 100
}
```

### 投票（Poll）作成

```json
{
  "action": "poll",
  "to": "channel:123456789012345678",
  "question": "次のリリース日はいつがよい？",
  "answers": ["2026-02-20", "2026-02-27", "2026-03-05"],
  "allowMultiselect": false,
  "durationHours": 24
}
```

- **期間:** `durationHours`は最大768時間（32日間）
- **複数選択:** `allowMultiselect: true`で複数回答可能

### スレッド管理

スレッド作成（メッセージから派生）:
```json
{
  "action": "threadCreate",
  "channelId": "123456789012345678",
  "name": "Bug修正ディスカッション",
  "messageId": "987654321098765432"
}
```

スレッド一覧取得:
```json
{
  "action": "threadList",
  "guildId": "111222333444555666"
}
```

### カスタム絵文字・スタンプアップロード

絵文字アップロード:
```json
{
  "action": "emojiUpload",
  "guildId": "111222333444555666",
  "name": "clawdbot_logo",
  "mediaUrl": "file:///tmp/logo.png",
  "roleIds": ["777888999000111222"]
}
```

- **制限:** PNG/JPG/GIF、256KB以下
- **権限:** `roleIds`省略時は全メンバーが使用可能

スタンプアップロード:
```json
{
  "action": "stickerUpload",
  "guildId": "111222333444555666",
  "name": "celebration",
  "description": "祝賀スタンプ",
  "tags": "🎉",
  "mediaUrl": "file:///tmp/sticker.png"
}
```

- **制限:** PNG/APNG/Lottie JSON、512KB以下

## 実装例

### 例1: デプロイ完了通知の自動送信

```bash
#!/bin/bash
# deploy-notify.sh

VERSION="v1.3.0"
CHANNEL_ID="123456789012345678"

# デプロイ実行
./deploy.sh

# Discord通知
clawdbot run <<EOF
message action:send target:channel:${CHANNEL_ID} message:"デプロイ完了: ${VERSION}"
EOF
```

### 例2: エラーレポートへのリアクション追加

```javascript
// error-reaction.js
const { exec } = require('child_process');

const channelId = '123456789012345678';
const messageId = '987654321098765432';

exec(`clawdbot run 'message action:react channelId:${channelId} messageId:${messageId} emoji:"⚠️"'`, (error, stdout, stderr) => {
  if (error) {
    console.error(`エラー: ${error.message}`);
    return;
  }
  console.log('リアクション追加完了');
});
```

### 例3: 週次投票の自動作成

```javascript
// weekly-poll.js
const channelId = '123456789012345678';
const pollData = {
  action: 'poll',
  to: `channel:${channelId}`,
  question: '今週の優先タスクは？',
  answers: ['機能A開発', '機能B開発', 'バグ修正', 'ドキュメント更新'],
  allowMultiselect: true,
  durationHours: 168, // 7日間
  content: '投票をお願いします'
};

const command = `clawdbot run 'message ${Object.entries(pollData).map(([k, v]) => `${k}:"${v}"`).join(' ')}'`;
require('child_process').exec(command);
```

### 例4: メンバー情報取得とログ記録

```bash
#!/bin/bash
# member-audit.sh

GUILD_ID="111222333444555666"
USER_ID="333444555666777888"

# メンバー情報取得
INFO=$(clawdbot run "message action:member-info guildId:${GUILD_ID} userId:${USER_ID}")

# ログファイルに記録
echo "[$(date)] ${INFO}" >> audit.log
```

### 例5: メッセージ検索とアーカイブ

```javascript
// search-archive.js
const { exec } = require('child_process');

const guildId = '111222333444555666';
const query = 'セキュリティアラート';

const searchCmd = `clawdbot run 'message action:search guildId:${guildId} content:"${query}" limit:50'`;

exec(searchCmd, (error, stdout, stderr) => {
  if (error) {
    console.error(`検索エラー: ${error.message}`);
    return;
  }
  
  const results = JSON.parse(stdout);
  console.log(`検索結果: ${results.length}件`);
  
  // 結果をファイルに保存
  require('fs').writeFileSync('archive.json', JSON.stringify(results, null, 2));
});
```

## ユースケース

### 開発チーム向け

- **CI/CD通知:** GitHub ActionsやJenkinsからのビルド成功・失敗通知
- **エラーアラート:** 本番環境のエラーログをDiscordチャンネルに自動投稿
- **コードレビュー:** プルリクエスト作成時に専用スレッドを自動生成

### プロジェクト管理

- **タスク完了確認:** 投票機能で優先順位決定
- **定期リマインダー:** 毎週の進捗報告をスケジュール投稿

### コミュニティ運用

- **新規メンバーウェルカム:** 参加時に自動でDM送信
- **イベント告知:** カレンダー連携でイベント作成・通知

## 制限事項・セキュリティ考慮事項

### API制限

- **レート制限:** Discord APIは以下のレート制限を適用（公式ドキュメントに記載）
  - グローバル: 50リクエスト/秒
  - エンドポイント別: 5-10リクエスト/秒
- **ファイルサイズ:** 絵文字256KB、スタンプ512KB、通常添付ファイル8MB（Nitroサーバーは100MB）

### セキュリティ

- **トークン保護:** Botトークンは環境変数または暗号化設定ファイルに保存（ソースコードに記載禁止）
- **権限最小化:** 必要最低限の権限のみ付与（例: メッセージ送信のみの場合は`Send Messages`のみ）
- **監査ログ:** モデレーション操作は監査ログに記録（Discord側の機能）

### ベストプラクティス

- **エラーハンドリング:** APIエラー時の再試行ロジック実装推奨
- **ログ記録:** 送信メッセージの内容・時刻を記録（トラブルシューティング用）
- **テスト環境:** 本番サーバーではなく、テスト用サーバーで動作確認

## 参考リンク

- Discord Developer Portal: https://discord.com/developers/docs
- Discord API Reference: https://discord.com/developers/docs/reference
- Clawdbot公式サイト: https://clawdbot.com
- Discord Bot Best Practices: https://discord.com/developers/docs/topics/community-resources

---

本記事の情報は2026年2月15日時点のものです。Discord API仕様やClawdbotのアップデートにより、機能や制限事項が変更される可能性があります。最新情報は各公式サイトをご確認ください。
