---
title: "CamSnap Skill - RTSP/ONVIFカメラからのスナップショット・動画クリップ取得を実現するClawdbot拡張機能"
description: "Clawdbot向けCamSnap Skillを利用して、RTSP/ONVIFカメラからのスナップショット、動画クリップ、モーション検知機能をコマンドラインから実現する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "CamSnap", "RTSP", "ONVIF", "監視カメラ", "CLI", "FFmpeg", "モーション検知"]
featured: false
lang: "ja"
seo:
  keywords: "CamSnap, Clawdbot, RTSP, ONVIF, 監視カメラ, スナップショット, 動画クリップ, FFmpeg, モーション検知"
---

# CamSnap Skill - RTSP/ONVIFカメラからのスナップショット・動画クリップ取得を実現するClawdbot拡張機能

Clawdbot向けのCamSnap Skillが提供する`camsnap`コマンドにより、RTSP/ONVIFプロトコル対応の監視カメラから静止画スナップショット、動画クリップ、モーション検知イベントを取得できる。本スキルは、ネットワークカメラの自動検出、認証管理、FFmpegによるメディア処理機能を提供する。

## 概要

CamSnap Skillは、RTSP（Real Time Streaming Protocol）およびONVIF（Open Network Video Interface Forum）規格に対応した監視カメラを対象とした制御ツールである。Clawdbotのスキルシステムに統合されており、AIエージェントが自然言語指示からカメラ映像を取得できる仕組みを提供する。

公式サイト（https://camsnap.ai）によれば、本ツールはHomebrewパッケージとして配布されており、FFmpegを内部的に使用してメディア処理を実行する設計となっている。

## 技術的仕様

### システム要件

- macOS、Linux、またはWindows（WSL2推奨）
- FFmpegバイナリ（PATH環境変数に設定済み）
- `camsnap`バイナリ（Homebrew経由でインストール）
- ネットワーク上にRTSP/ONVIFカメラが存在すること

### インストール方法

Clawdbot環境では、以下のコマンドでインストールが実行される。

```bash
brew install steipete/tap/camsnap
```

インストール後、`camsnap`コマンドがシステムPATHに追加される。

### 設定ファイル

カメラ情報は`~/.config/camsnap/config.yaml`に保存される。

```yaml
cameras:
  - name: kitchen
    host: 192.168.0.10
    username: user
    password: pass
  - name: front-door
    host: 192.168.0.11
    username: admin
    password: admin123
```

## 主要機能

### 1. カメラ検出

ネットワーク上のONVIF対応カメラを自動検出する。

```bash
camsnap discover --info
```

出力例:
```
Discovered: 192.168.0.10 (Manufacturer: Hikvision, Model: DS-2CD2143G0-I)
Discovered: 192.168.0.11 (Manufacturer: Axis, Model: M3045-V)
```

### 2. カメラ追加

設定ファイルに新規カメラを追加する。

```bash
camsnap add --name kitchen --host 192.168.0.10 --user user --pass pass
```

### 3. スナップショット取得

指定カメラから静止画を取得する。

```bash
camsnap snap kitchen --out shot.jpg
```

出力形式: JPEG（デフォルト）、PNG（オプション指定可能）

### 4. 動画クリップ取得

指定期間の動画クリップを録画する。

```bash
camsnap clip kitchen --dur 5s --out clip.mp4
```

サポートされる期間指定:
- `5s`: 5秒
- `1m`: 1分
- `10m`: 10分

### 5. モーション検知

モーション検知イベントを監視し、トリガー時にアクションを実行する。

```bash
camsnap watch kitchen --threshold 0.2 --action 'notify-send "Motion detected"'
```

パラメータ:
- `--threshold`: モーション検知感度（0.0～1.0、デフォルト0.2）
- `--action`: トリガー時に実行するコマンド

### 6. 診断機能

カメラ接続とストリーム情報を診断する。

```bash
camsnap doctor --probe
```

出力内容:
- RTSP接続状態
- ストリームコーデック情報
- 解像度・フレームレート

## 実装例

### 例1: 複数カメラの一括スナップショット

```bash
#!/bin/bash
# 全カメラから現在の映像を取得

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
for camera in kitchen front-door garage; do
  camsnap snap "$camera" --out "${camera}_${TIMESTAMP}.jpg"
done
```

### 例2: モーション検知時の自動録画

```bash
#!/bin/bash
# モーション検知時に10秒間録画してクラウドにアップロード

camsnap watch front-door --threshold 0.3 --action 'camsnap clip front-door --dur 10s --out /tmp/motion.mp4 && aws s3 cp /tmp/motion.mp4 s3://my-bucket/security/'
```

### 例3: 定期的なスナップショット取得（Cronジョブ）

```bash
# crontab -e に追加
# 毎時0分にキッチンカメラのスナップショットを取得

0 * * * * /usr/local/bin/camsnap snap kitchen --out /var/log/kitchen/$(date +\%Y\%m\%d_\%H00).jpg
```

### 例4: ストリーム品質の確認

```bash
#!/bin/bash
# カメラのストリーム情報を取得してログに記録

camsnap doctor --probe > /var/log/camsnap/diagnostics_$(date +%Y%m%d).log
```

### 例5: Node.js連携による画像解析

```javascript
const { exec } = require('child_process');
const fs = require('fs');

// カメラから画像取得
exec('camsnap snap front-door --out /tmp/snap.jpg', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  
  // 画像をBase64エンコードしてAPI送信
  const imageBuffer = fs.readFileSync('/tmp/snap.jpg');
  const base64Image = imageBuffer.toString('base64');
  
  // Claude APIで画像解析（例）
  // analyzeImage(base64Image);
});
```

## ユースケース

### 1. AIエージェントによる監視

Clawdbotエージェントが「玄関のカメラ映像を確認して」という自然言語指示を受け取り、スナップショットを自動取得・表示する環境を構築できる。

### 2. セキュリティイベント記録

モーション検知機能と連携し、不審な動きを検知した際に自動的に動画クリップを記録・通知する仕組みを実現する。

### 3. タイムラプス生成

定期的にスナップショットを取得し、FFmpegで結合してタイムラプス動画を生成する。

### 4. クラウド連携監視システム

取得した映像をAWS S3、Google Cloud Storage、Azure Blob Storageに自動アップロードし、長期保存・分析基盤を構築する。

## 制限事項・セキュリティ考慮事項

### 制限事項

1. **FFmpeg依存**: FFmpegがシステムPATHに存在しない場合、動作しない
2. **プロトコル制限**: RTSP/ONVIF非対応のカメラ（独自プロトコル使用）は利用不可
3. **ネットワーク帯域**: 高解像度カメラからの長時間クリップ取得は帯域を消費する
4. **同時接続数**: 一部カメラは同時接続数制限があり、複数クライアントからのアクセスで接続失敗する可能性がある

### セキュリティ考慮事項

1. **認証情報の保管**: `~/.config/camsnap/config.yaml`に平文パスワードが保存されるため、ファイルパーミッションを600に設定すること
   ```bash
   chmod 600 ~/.config/camsnap/config.yaml
   ```

2. **RTSP通信の暗号化**: 標準RTSPは非暗号化通信のため、盗聴リスクがある。RTSPS（RTSP over TLS）対応カメラの使用を推奨

3. **カメラファームウェア**: 古いファームウェアには既知の脆弱性が存在する可能性があるため、定期的な更新が必要

4. **ネットワーク分離**: 監視カメラを専用VLANに配置し、インターネットからの直接アクセスを制限することを推奨

## 参考リンク

- CamSnap公式サイト: https://camsnap.ai
- CamSnap GitHubリポジトリ: https://github.com/steipete/camsnap
- ONVIF公式サイト: https://www.onvif.org/
- FFmpeg公式サイト: https://ffmpeg.org/
- Clawdbot公式サイト: https://clawdbot.io/

---

本記事の情報は2026年2月15日時点のものです。CamSnap Skillの機能、コマンド仕様、インストール方法は変更される可能性があります。最新情報は公式サイトおよびGitHubリポジトリをご確認ください。
