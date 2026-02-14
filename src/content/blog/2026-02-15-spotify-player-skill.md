---
title: "Spotify Player Skill - ターミナルベースのSpotify再生・検索機能をClawdbotに統合"
description: "Clawdbot向けSpotify Player Skillを利用して、spogoまたはspotify_playerを通じたターミナルベースのSpotify制御を実現する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Spotify", "spogo", "spotify_player", "CLI", "音楽再生"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Spotify, spogo, spotify_player, ターミナル, CLI, 音楽再生, Spotify Premium, 自動化"
---

# Spotify Player Skill - ターミナルベースのSpotify再生・検索機能をClawdbotに統合

## 概要

Clawdbot向けSpotify Player Skillは、ターミナルベースのSpotify制御機能を提供するスキルである。`spogo`（優先）または`spotify_player`をバックエンドとして利用し、再生制御、楽曲検索、デバイス管理などの操作をコマンドラインから実行できる。

本スキルはSpotify Premiumアカウントを前提とし、ブラウザCookie認証（spogo）またはSpotify API認証（spotify_player）を通じてSpotifyサービスと連携する。

## 技術的仕様

### システム要件

- macOS / Linux（Homebrewサポート環境）
- Spotify Premiumアカウント（無料プランでは機能が制限される）
- 以下のいずれかのCLIツール：
  - `spogo`（推奨）: steipete/tapリポジトリから提供
  - `spotify_player`（代替）: Homebrewで提供

### インストール方法

**spogo（推奨）:**
```bash
brew tap steipete/tap
brew install spogo
```

**spotify_player（代替）:**
```bash
brew install spotify_player
```

### 初期設定

**spogoの認証設定:**
```bash
spogo auth import --browser chrome
```

この操作により、ChromeブラウザのCookieからSpotify認証情報をインポートする。Safari等の他ブラウザにも対応している可能性がある（詳細は公式ドキュメント参照）。

**spotify_playerの設定:**
`~/.config/spotify-player/app.toml`に設定ファイルを作成し、Spotify Connect機能を有効化するために`client_id`を設定する必要がある。

## 主要機能

### 1. 楽曲検索

**spogo:**
```bash
spogo search track "The Beatles Let It Be"
```

**spotify_player:**
```bash
spotify_player search "The Beatles Let It Be"
```

### 2. 再生制御

**基本操作（spogo）:**
- 再生: `spogo play`
- 一時停止: `spogo pause`
- 次の曲: `spogo next`
- 前の曲: `spogo prev`

**基本操作（spotify_player）:**
- 再生: `spotify_player playback play`
- 一時停止: `spotify_player playback pause`
- 次の曲: `spotify_player playback next`
- 前の曲: `spotify_player playback previous`

### 3. デバイス管理

**spogo:**
```bash
# デバイス一覧表示
spogo device list

# デバイス切り替え
spogo device set "MacBook Pro"
spogo device set "device-id-12345"
```

**spotify_player:**
```bash
spotify_player connect
```

### 4. 再生状態確認

**spogo:**
```bash
spogo status
```

現在の再生曲、アーティスト、再生位置などが表示される。

## 実装例

### 例1: Bashスクリプトによる朝の音楽自動再生

```bash
#!/bin/bash
# morning-music.sh

# デバイスをリビングのスピーカーに設定
spogo device set "Living Room Speaker"

# プレイリスト「Morning Jazz」を検索して再生
spogo search playlist "Morning Jazz" | head -n 1 | xargs -I {} spogo play {}
```

### 例2: Node.jsによる再生状態取得

```javascript
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

async function getCurrentTrack() {
  try {
    const { stdout } = await execPromise('spogo status');
    console.log('Current track:', stdout);
    return stdout;
  } catch (error) {
    console.error('Error fetching track status:', error);
  }
}

getCurrentTrack();
```

### 例3: Clawdbot統合スクリプト（JavaScript）

```javascript
// clawdbot-spotify.js
async function playSpotifyTrack(trackQuery) {
  const { exec } = require('child_process');
  
  return new Promise((resolve, reject) => {
    exec(`spogo search track "${trackQuery}"`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      
      // 検索結果の最初のトラックを再生
      const trackId = extractTrackId(stdout);
      exec(`spogo play ${trackId}`, (err) => {
        if (err) reject(err);
        else resolve(`Playing: ${trackQuery}`);
      });
    });
  });
}

function extractTrackId(searchOutput) {
  // 検索結果からトラックIDを抽出（実装は出力形式に依存）
  const lines = searchOutput.split('\n');
  return lines[0].split('\t')[0]; // 例: タブ区切りの1列目がID
}
```

### 例4: 曲情報のJSON形式取得（spogo）

```bash
#!/bin/bash
# get-track-json.sh

spogo status --json | jq '{
  track: .item.name,
  artist: .item.artists[0].name,
  album: .item.album.name,
  duration_ms: .item.duration_ms,
  progress_ms: .progress_ms
}'
```

### 例5: spotify_playerのTUIショートカット統合

```bash
# spotify_playerのTUIモードを起動
spotify_player

# TUI内で利用可能なショートカット:
# ? - ヘルプ表示
# Space - 再生/一時停止
# n - 次の曲
# p - 前の曲
# l - 現在の曲をいいね
```

## ユースケース

### 1. 音声アシスタント統合
ClawdbotのDiscordボット機能と組み合わせ、「次の曲を再生して」といった音声コマンドに応答してSpotifyを制御する。

### 2. スマートホーム自動化
時間帯やイベントに応じて自動的にプレイリストを切り替える（朝はジャズ、夜はクラシック等）。

### 3. 開発環境統合
コーディング中に集中力を高める音楽を自動再生し、ポモドーロタイマーと連動して休憩時間に異なるプレイリストを再生する。

### 4. リモートワーク環境
複数のSpotify Connectデバイス（オフィス、自宅等）を切り替えながら、場所に応じた音楽環境を構築する。

## 制限事項・セキュリティ考慮事項

### 制限事項

1. **Spotify Premium必須**: 無料プランではSpotify Connect機能が利用できず、デバイス制御が制限される
2. **認証方法の違い**:
   - `spogo`: ブラウザCookieを利用（手軽だが定期的な再認証が必要な場合がある）
   - `spotify_player`: Spotify APIのclient_idが必要（初回設定がやや複雑）
3. **プラットフォーム依存**: macOS/LinuxのHomebrewに依存（Windows環境では別途対応が必要）
4. **画像・添付ファイル制約**: メモに画像や添付ファイルが含まれる場合、編集機能が制限される（spotify_playerの場合）

### セキュリティ考慮事項

1. **認証情報の保護**:
   - spogoのCookie情報は`~/.config/spogo/`に保存される
   - spotify_playerの設定ファイル（`~/.config/spotify-player/app.toml`）には認証トークンが含まれる
   - これらのファイルに適切なパーミッション（600または700）を設定すること

2. **共有環境での利用**:
   - SSHログイン等の共有環境で利用する場合、認証情報の漏洩リスクに注意
   - 必要に応じて環境変数やシークレット管理ツール（1Password CLI等）を利用する

3. **アクセス権限**:
   - macOSの場合、初回実行時にシステム設定 > プライバシーとセキュリティでターミナルへのアクセス許可が必要
   - SSH経由で実行する場合は、SSHセッションを実行するMac側で許可設定を行う

## 参考リンク

- Spotify公式サイト: https://www.spotify.com
- spogo GitHub: https://github.com/steipete/spogo
- spotify_player GitHub: https://github.com/aome510/spotify_player
- Spotify Web API: https://developer.spotify.com/documentation/web-api
- Clawdbot公式サイト: https://clawdbot.com

---

本記事の情報は2026年2月15日時点のものです。各ツールの機能や仕様は変更される可能性があります。最新情報は各公式サイトおよびGitHubリポジトリをご確認ください。
