---
title: "OpenHue Skill - Clawdbot向けPhilips Hue制御システム"
description: "Clawdbot向けOpenHue Skillを利用して、Philips Hue照明のリモート制御、シーン変更、明るさ・色調整を実現する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "OpenHue", "Philips Hue", "スマートホーム", "CLI", "IoT"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, OpenHue, Philips Hue, スマート照明, IoT制御, CLI, ホームオートメーション"
---

# OpenHue Skill - Clawdbot向けPhilips Hue制御システム

2026年現在、スマートホームデバイスの制御を効率化するツールとして、Clawdbot向けのOpenHue Skillが提供されている。OpenHueは、Philips Hue照明システムをコマンドラインから制御し、ライト点灯・消灯、明るさ調整、色変更、シーン適用等の操作を自動化可能にする。

本記事では、OpenHue SkillのClawdbotへの統合方法、主要機能、および実装例を解説する。

## 概要

OpenHue Skillは、OpenHueプロジェクトが開発するPhilips Hue制御CLIを、Clawdbotエージェントから利用可能にするスキルパッケージである。Clawdbotエージェントは、このスキルを通じてHue Bridgeと通信し、照明の状態取得、制御、シーン適用を自動化できる。

### 主な特徴

- Hue Bridge経由の照明制御（ローカルネットワーク通信）
- ライト・ルーム・シーンの取得と制御
- 明るさ調整（0-100%）
- RGB色指定（HEX形式）
- JSON形式の出力対応（スクリプト統合向け）

## 技術的仕様

### システム要件

- Philips Hue Bridge（第2世代以降推奨）
- ローカルネットワーク接続（Hue BridgeとCLI実行環境が同一ネットワーク上に存在すること）
- macOS、Linux、Windows対応

### インストール方法

#### Homebrew経由（推奨）

```bash
brew install openhue/cli/openhue-cli
```

インストール後、`openhue --version`で動作確認が可能。

### セットアップ手順

#### 1. Hue Bridgeの検出

```bash
openhue discover
```

ローカルネットワーク上のHue Bridgeを自動検出する。複数のBridgeが存在する場合は、IPアドレスが一覧表示される。

#### 2. 認証設定（ガイド付き）

```bash
openhue setup
```

初回セットアップ時は、Hue Bridge本体のボタンを押下する必要がある（通常30秒以内）。認証完了後、認証トークンがローカルに保存される。

## 主要機能

OpenHue CLIは、以下の主要コマンドを提供する。

### 情報取得

```bash
# ライト一覧（JSON形式）
openhue get light --json

# ルーム一覧（JSON形式）
openhue get room --json

# シーン一覧（JSON形式）
openhue get scene --json
```

### ライト制御

```bash
# IDまたは名前でライトを点灯
openhue set light <id-or-name> --on

# ライトを消灯
openhue set light <id-or-name> --off

# 明るさ調整（50%）
openhue set light <id> --on --brightness 50

# RGB色指定（HEX形式）
openhue set light <id> --on --rgb #3399FF
```

ライト名が重複する場合は、`--room "Room Name"`オプションで部屋を指定する。

### シーン適用

```bash
# シーンIDでシーンを適用
openhue set scene <scene-id>
```

## 実装例

以下に、Clawdbotエージェントが OpenHue Skill を活用する実装例を示す。

### 1. 時刻ベースの自動制御

```javascript
// Clawdbotエージェントコード例（Node.js）
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

async function controlLightByTime() {
  const hour = new Date().getHours();
  
  try {
    if (hour >= 18 || hour < 6) {
      // 夜間: リビングを暖色・低輝度に
      await execPromise('openhue set light "Living Room" --on --brightness 30 --rgb #FF9966');
      console.log('夜間モード: 暖色・低輝度に設定');
    } else {
      // 日中: 白色・高輝度に
      await execPromise('openhue set light "Living Room" --on --brightness 80 --rgb #FFFFFF');
      console.log('日中モード: 白色・高輝度に設定');
    }
  } catch (error) {
    console.error('照明制御エラー:', error);
  }
}

// 1時間ごとに実行
setInterval(controlLightByTime, 3600000);
```

### 2. JSON解析によるライト一覧取得

```python
# Python例: OpenHueのJSON出力を解析
import subprocess
import json

def get_lights():
    result = subprocess.run(
        ['openhue', 'get', 'light', '--json'],
        capture_output=True,
        text=True
    )
    
    if result.returncode == 0:
        lights = json.loads(result.stdout)
        for light in lights:
            print(f"ID: {light['id']}")
            print(f"Name: {light['name']}")
            print(f"Status: {'ON' if light['on'] else 'OFF'}")
            print(f"Brightness: {light.get('brightness', 'N/A')}")
            print("---")
    else:
        print(f"Error: {result.stderr}")

get_lights()
```

### 3. シーンベースのプリセット適用

```bash
#!/bin/bash
# 作業モード、リラックスモード、就寝モードの切り替え

MODE=$1

case $MODE in
  work)
    openhue set scene work-scene-id
    echo "作業モードに切り替えました"
    ;;
  relax)
    openhue set scene relax-scene-id
    echo "リラックスモードに切り替えました"
    ;;
  sleep)
    openhue set scene sleep-scene-id
    echo "就寝モードに切り替えました"
    ;;
  *)
    echo "使用法: $0 {work|relax|sleep}"
    exit 1
    ;;
esac
```

### 4. 外部イベント連動（カレンダー統合）

```javascript
// カレンダーイベント開始時にライトを自動調整
async function onMeetingStart(meetingType) {
  try {
    if (meetingType === 'video_call') {
      // ビデオ会議: 明るく
      await execPromise('openhue set light "Office" --on --brightness 90 --rgb #FFFFFF');
      console.log('ビデオ会議モード: 高輝度');
    } else if (meetingType === 'focus_time') {
      // 集中作業: 暖色・中輝度
      await execPromise('openhue set light "Office" --on --brightness 60 --rgb #FFD700');
      console.log('集中モード: 暖色・中輝度');
    }
  } catch (error) {
    console.error('照明制御エラー:', error);
  }
}
```

### 5. 複数ライトの一括制御

```bash
#!/bin/bash
# 全ライトを一括消灯

# JSON形式でライト一覧を取得
LIGHTS=$(openhue get light --json | jq -r '.[].id')

for LIGHT_ID in $LIGHTS; do
  openhue set light "$LIGHT_ID" --off
  echo "消灯: Light ID $LIGHT_ID"
done
```

## ユースケース

OpenHue Skillは、以下のシナリオで活用される。

### 1. 在宅勤務の環境自動化

カレンダーイベント（会議、集中時間、休憩等）に応じて、照明の色温度と明るさを自動調整し、生産性を向上させる。

### 2. スマートスピーカー連携

ClawdbotがスマートスピーカーからのAI音声コマンドを解釈し、OpenHueを通じて照明を制御する。

### 3. エネルギー管理

夜間や不在時に全ライトを自動消灯し、電力消費を削減する。

### 4. シーンベースの生活リズム管理

朝の起床時、日中の作業時、夜のリラックス時、就寝前等、時刻に応じたシーンを自動適用する。

## 制限事項・セキュリティ考慮事項

### 制限事項

- Hue Bridge必須: Philips Hue照明は、Hue Bridge経由でのみ制御可能（Bluetooth単体制御は非対応）
- ローカルネットワーク限定: 外部ネットワークからの直接制御には、VPNまたはHue Cloud APIの利用が必要
- 認証トークン: 初回セットアップ時にBridge本体ボタンの押下が必須（物理アクセスが必要）

### セキュリティ考慮事項

- 認証トークン管理: OpenHueが生成する認証トークンは、ローカルに平文保存される場合があるため、適切なファイルパーミッション設定が必要
- ローカルネットワーク信頼: Hue Bridgeとの通信は、ローカルネットワーク上でHTTP経由で行われる（HTTPS非対応の場合、パケット盗聴リスクあり）
- アクセス制御: Hue Bridgeへのアクセス権限を持つユーザーは、全照明を制御可能（部屋ごとの権限分離は非対応）

## 参考リンク

- 公式サイト: https://www.openhue.io/cli
- Philips Hue公式: https://www.philips-hue.com
- Hue API仕様: https://developers.meethue.com
- OpenHueコミュニティフォーラム: https://www.openhue.io/community

---

本記事の情報は2026年2月15日時点のものです。OpenHue CLIおよびPhilips Hue Bridgeの仕様は変更される可能性があります。最新情報は公式サイトをご確認ください。
