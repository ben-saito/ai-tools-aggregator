---
title: "SonosCLI Skill - Clawdbot向けSonosスピーカー制御システム"
description: "Clawdbot向けSonosCLI Skillを利用して、Sonosスピーカーのリモート制御、音量調整、グループ管理、Spotify検索を実現する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "SonosCLI", "Sonos", "スマートスピーカー", "CLI", "ホームオートメーション"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, SonosCLI, Sonos, スマートスピーカー, 音声制御, CLI, ホームオートメーション, Spotify"
---

# SonosCLI Skill - Clawdbot向けSonosスピーカー制御システム

2026年現在、スマートスピーカーの制御を効率化するツールとして、Clawdbot向けのSonosCLI Skillが提供されている。SonosCLIは、Sonosスピーカーをコマンドラインから制御し、再生・停止、音量調整、グループ管理、Spotify検索等の操作を自動化可能にする。

本記事では、SonosCLI SkillのClawdbotへの統合方法、主要機能、および実装例を解説する。

## 概要

SonosCLI Skillは、Peter Steinberger氏が開発するSonos制御CLIを、Clawdbotエージェントから利用可能にするスキルパッケージである。Clawdbotエージェントは、このスキルを通じてローカルネットワーク上のSonosスピーカーを検出し、再生制御、音量調整、グループ管理、お気に入り再生を自動化できる。

### 主な特徴

- Go言語によるシングルバイナリ配布
- SSDP（Simple Service Discovery Protocol）による自動検出
- スピーカー名またはIPアドレスによるターゲット指定
- グループ管理（結合・分離・パーティーモード）
- Spotify検索（SMAPI経由）
- お気に入り・キュー管理

## 技術的仕様

### システム要件

- Go 1.18以上（ビルド時）
- ローカルネットワーク接続（Sonosスピーカーと同一ネットワーク上に存在すること）
- Sonos S1またはS2システム対応
- オプション: Spotify Web API認証情報（`SPOTIFY_CLIENT_ID`/`SPOTIFY_CLIENT_SECRET`）

### インストール方法

#### Go経由

```bash
go install github.com/steipete/sonoscli/cmd/sonos@latest
```

インストール後、`sonos --version`で動作確認が可能。

## 主要機能

SonosCLIは、以下の主要コマンドを提供する。

### スピーカー検出

```bash
# ローカルネットワーク上のSonosスピーカーを自動検出
sonos discover
```

SSDP検出が失敗する場合、`--ip <speaker-ip>`でIPアドレスを直接指定可能。

### 再生制御

```bash
# 状態確認
sonos status --name "Kitchen"

# 再生開始
sonos play --name "Kitchen"

# 一時停止
sonos pause --name "Kitchen"

# 停止
sonos stop --name "Kitchen"
```

### 音量制御

```bash
# 音量設定（0-100）
sonos volume set 15 --name "Kitchen"

# 音量取得
sonos volume get --name "Kitchen"
```

### グループ管理

```bash
# グループ状態確認
sonos group status

# スピーカーをグループに結合
sonos group join --name "Living Room" --coordinator "Kitchen"

# スピーカーをグループから分離
sonos group unjoin --name "Living Room"

# パーティーモード（全スピーカーを結合）
sonos group party --coordinator "Kitchen"

# ソロモード（全スピーカーを分離）
sonos group solo
```

### お気に入り管理

```bash
# お気に入り一覧
sonos favorites list

# お気に入り再生
sonos favorites open --name "Kitchen" --favorite "My Playlist"
```

### キュー管理

```bash
# キュー一覧
sonos queue list --name "Kitchen"

# キュー再生
sonos queue play --index 3 --name "Kitchen"

# キュークリア
sonos queue clear --name "Kitchen"
```

### Spotify検索（SMAPI）

```bash
# トラック検索
sonos smapi search --service "Spotify" --category tracks "query"

# アルバム検索
sonos smapi search --service "Spotify" --category albums "artist name"
```

Spotify Web API検索を利用する場合、`SPOTIFY_CLIENT_ID`および`SPOTIFY_CLIENT_SECRET`環境変数の設定が必要。

## 実装例

以下に、Clawdbotエージェントが SonosCLI Skill を活用する実装例を示す。

### 1. 時刻ベースの自動音楽再生

```javascript
// Clawdbotエージェントコード例（Node.js）
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

async function autoPlayMusicByTime() {
  const hour = new Date().getHours();
  
  try {
    if (hour === 7) {
      // 朝7時: キッチンで朝のプレイリスト再生
      await execPromise('sonos favorites open --name "Kitchen" --favorite "Morning Playlist"');
      await execPromise('sonos volume set 20 --name "Kitchen"');
      console.log('朝のプレイリスト再生開始（音量20%）');
    } else if (hour === 18) {
      // 夕方18時: リビングでリラックスプレイリスト再生
      await execPromise('sonos favorites open --name "Living Room" --favorite "Chill Vibes"');
      await execPromise('sonos volume set 30 --name "Living Room"');
      console.log('リラックスプレイリスト再生開始（音量30%）');
    }
  } catch (error) {
    console.error('音楽再生エラー:', error);
  }
}

// 1時間ごとに実行
setInterval(autoPlayMusicByTime, 3600000);
```

### 2. スピーカー状態監視とJSON解析

```python
# Python例: SonosCLI出力のパース（JSON非対応のため正規表現使用）
import subprocess
import re

def get_speaker_status(speaker_name):
    result = subprocess.run(
        ['sonos', 'status', '--name', speaker_name],
        capture_output=True,
        text=True
    )
    
    if result.returncode == 0:
        output = result.stdout
        
        # 状態抽出（例: "State: PLAYING"）
        state_match = re.search(r'State:\s+(\w+)', output)
        if state_match:
            state = state_match.group(1)
            print(f"スピーカー: {speaker_name}, 状態: {state}")
            return state
    else:
        print(f"エラー: {result.stderr}")
        return None

# 使用例
get_speaker_status("Kitchen")
```

### 3. 音声コマンド連動

```bash
#!/bin/bash
# 音声コマンド「音楽を再生して」を処理

SPEAKER_NAME="Living Room"
COMMAND=$1

case $COMMAND in
  play)
    sonos play --name "$SPEAKER_NAME"
    echo "再生開始: $SPEAKER_NAME"
    ;;
  pause)
    sonos pause --name "$SPEAKER_NAME"
    echo "一時停止: $SPEAKER_NAME"
    ;;
  volume_up)
    CURRENT_VOLUME=$(sonos volume get --name "$SPEAKER_NAME" | grep -oE '[0-9]+')
    NEW_VOLUME=$((CURRENT_VOLUME + 10))
    sonos volume set "$NEW_VOLUME" --name "$SPEAKER_NAME"
    echo "音量アップ: $NEW_VOLUME%"
    ;;
  volume_down)
    CURRENT_VOLUME=$(sonos volume get --name "$SPEAKER_NAME" | grep -oE '[0-9]+')
    NEW_VOLUME=$((CURRENT_VOLUME - 10))
    sonos volume set "$NEW_VOLUME" --name "$SPEAKER_NAME"
    echo "音量ダウン: $NEW_VOLUME%"
    ;;
  *)
    echo "使用法: $0 {play|pause|volume_up|volume_down}"
    exit 1
    ;;
esac
```

### 4. パーティーモード自動起動

```javascript
// カレンダーイベント「パーティー」開始時に全スピーカーを結合
async function startPartyMode() {
  try {
    // 全スピーカーをパーティーモード（Kitchen がコーディネーター）
    await execPromise('sonos group party --coordinator "Kitchen"');
    
    // パーティープレイリスト再生
    await execPromise('sonos favorites open --name "Kitchen" --favorite "Party Hits"');
    
    // 音量を40%に設定
    await execPromise('sonos volume set 40 --name "Kitchen"');
    
    console.log('パーティーモード開始（全スピーカー結合、音量40%）');
  } catch (error) {
    console.error('パーティーモード起動エラー:', error);
  }
}
```

### 5. Spotify検索とキュー追加

```bash
#!/bin/bash
# Spotify検索結果をキューに追加（SMAPI使用）

SPEAKER_NAME="Kitchen"
QUERY="chill jazz"

# Spotify検索（トラック）
RESULTS=$(sonos smapi search --service "Spotify" --category tracks "$QUERY")

# 検索結果をパース（実装は環境依存）
# 注: SonosCLIのSMAPI検索結果フォーマットは要確認

echo "検索結果: $RESULTS"
# キューに追加する処理を実装
```

## ユースケース

SonosCLI Skillは、以下のシナリオで活用される。

### 1. スマートホーム連携

在宅勤務開始時に自動的にオフィススピーカーで集中音楽を再生、休憩時にリラックス音楽に切り替える。

### 2. マルチルーム音楽制御

来客時に、玄関・リビング・ダイニングの全スピーカーを自動的に結合し、一貫した音楽体験を提供する。

### 3. 音声アシスタント統合

Clawdbotエージェントがユーザーの音声コマンド（「リビングで音楽を流して」等）を解釈し、SonosCLI経由でスピーカーを制御する。

### 4. 環境音制御

就寝時に寝室スピーカーでホワイトノイズを再生、タイマーで30分後に自動停止する。

## 制限事項・セキュリティ考慮事項

### 制限事項

- ローカルネットワーク限定: 外部ネットワークからの直接制御は非対応（VPNまたはSonos Cloud API利用が必要）
- SSDP依存: 一部のネットワーク環境（企業ネットワーク等）では、SSDP検出が失敗する可能性（`--ip`オプションで回避可能）
- JSON出力非対応: コマンド出力はテキスト形式であり、正規表現パースが必要
- Spotify Web API: オプション機能であり、`SPOTIFY_CLIENT_ID`/`SPOTIFY_CLIENT_SECRET`の事前設定が必要

### セキュリティ考慮事項

- ローカルネットワーク信頼: Sonosスピーカーとの通信は、ローカルネットワーク上で平文HTTP経由（暗号化非対応の場合、パケット盗聴リスクあり）
- 認証情報管理: Spotify API認証情報は環境変数で管理し、バージョン管理システムにコミットしないこと
- アクセス制御: SonosCLIを実行可能なユーザーは、全スピーカーを制御可能（部屋ごとの権限分離は非対応）

## 参考リンク

- 公式サイト: https://sonoscli.sh
- GitHubリポジトリ: https://github.com/steipete/sonoscli
- Sonos公式: https://www.sonos.com
- Spotify Web API: https://developer.spotify.com/documentation/web-api

---

本記事の情報は2026年2月15日時点のものです。SonosCLIおよびSonosスピーカーの仕様は変更される可能性があります。最新情報は公式サイトをご確認ください。
