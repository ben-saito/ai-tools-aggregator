---
title: "BluCLI Skill - Bluesound/NADデバイスをCLIから制御可能にするClawdbot拡張機能"
description: "Clawdbot向けBluCLI Skillを利用して、Bluesound/NADデバイスの検出、再生制御、グルーピング、音量調整をコマンドラインから実現する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "BluCLI", "Bluesound", "NAD", "音楽再生", "CLI", "Go言語"]
featured: false
lang: "ja"
seo:
  keywords: "BluCLI, Clawdbot, Bluesound, NAD, CLI, 音楽再生制御, マルチルーム, TuneIn, Go言語"
---

# BluCLI Skill - Bluesound/NADデバイスをCLIから制御可能にするClawdbot拡張機能

Clawdbot向けのBluCLI Skillが提供する`blu`コマンドにより、Bluesound/NADネットワークオーディオプレーヤーをコマンドライン環境から制御できる。本スキルは、デバイス検出、再生制御、マルチルームグルーピング、音量調整、TuneInストリーミングサービスの検索・再生機能を提供する。

## 概要

BluCLI Skillは、BluesoundおよびNADブランドのネットワークオーディオプレーヤーを対象とした制御ツールである。Clawdbotのスキルシステムに統合されており、AIエージェントが自然言語指示から音楽再生環境を操作できる仕組みを提供する。

公式サイト（https://blucli.sh）によれば、本ツールはGo言語で実装されており、BluOSプラットフォームのAPIを直接呼び出す設計となっている。

## 技術的仕様

### システム要件

- Go言語実行環境（1.18以降推奨）
- `blu`バイナリ（Go modulesからインストール）
- ネットワーク上にBluesound/NADデバイスが存在すること

### インストール方法

Clawdbot環境では、以下のコマンドでインストールが実行される。

```bash
go install github.com/steipete/blucli/cmd/blu@latest
```

インストール後、`blu`コマンドがシステムPATHに追加される。

### 環境変数

- `BLU_DEVICE`: デフォルト対象デバイスのID、名前、またはエイリアス

## 主要機能

### 1. デバイス検出

ネットワーク上のBluesound/NADデバイスを自動検出する。

```bash
blu devices
```

出力例:
```
ID: 192.168.1.100
Name: Living Room
Alias: (none)
```

### 2. デバイスステータス確認

指定デバイスの現在の再生状態、音量、入力ソースを取得する。

```bash
blu --device <id|name|alias> status
```

### 3. 再生制御

基本的な再生操作をサポート。

```bash
# 再生
blu play

# 一時停止
blu pause

# 停止
blu stop
```

### 4. 音量調整

音量レベルの設定および相対変更が可能。

```bash
# 絶対値で設定（0-100）
blu volume set 15

# 相対変更
blu volume up
blu volume down
```

### 5. グルーピング機能

複数デバイスを同期再生グループとして管理できる。

```bash
# グループステータス確認
blu group status

# デバイスをグループに追加
blu group add <device-id>

# デバイスをグループから削除
blu group remove <device-id>
```

### 6. TuneIn統合

TuneInラジオストリーミングサービスの検索・再生機能。

```bash
# ステーション検索
blu tunein search "BBC World Service"

# 検索結果から再生
blu tunein play "BBC World Service"
```

## 実装例

### 例1: デバイス選択と再生開始

```bash
#!/bin/bash
# ターゲットデバイスを設定して音楽再生

export BLU_DEVICE="Living Room"
blu play
```

### 例2: 音量調整スクリプト

```bash
#!/bin/bash
# 深夜モード: 音量を10に設定

blu --device "Bedroom" volume set 10
echo "Volume set to 10 for Bedroom device"
```

### 例3: マルチルームグルーピング

```bash
#!/bin/bash
# リビングルームをマスターとして、キッチンとベッドルームをグループ化

blu --device "Living Room" group add "Kitchen"
blu --device "Living Room" group add "Bedroom"
blu --device "Living Room" play
```

### 例4: TuneInラジオの自動再生

```bash
#!/bin/bash
# 朝のニュースラジオを自動再生

blu --device "Kitchen" tunein play "NHK Radio Japan"
```

### 例5: JSON出力を利用したスクリプト統合

```bash
#!/bin/bash
# デバイス情報をJSON形式で取得してjqで処理

blu devices --json | jq '.[] | select(.name == "Living Room") | .id'
```

## ユースケース

### 1. AIエージェント連携

Clawdbotエージェントが自然言語指示（「リビングルームで音楽を再生して」）を受け取り、`blu`コマンドを自動実行する環境を構築できる。

### 2. スマートホーム統合

Home AssistantやNode-REDなどのスマートホームプラットフォームから`blu`を呼び出し、音楽再生を自動化できる。

### 3. マルチルームオーディオ管理

複数の部屋に配置されたBluesoundデバイスを一元管理し、パーティーモード（全部屋同時再生）や個別制御を実現する。

### 4. ラジオストリーミング自動化

時間帯に応じてTuneInラジオステーションを自動再生するcronジョブを設定できる。

## 制限事項・セキュリティ考慮事項

### 制限事項

1. **デバイス依存**: BluesoundまたはNADブランドのBluOS対応デバイスが必須
2. **ネットワーク要件**: 同一ネットワーク上にデバイスが存在する必要がある（VPN経由での動作は未保証）
3. **API制限**: BluOSプラットフォームの公式APIに依存するため、将来的な仕様変更の影響を受ける可能性がある

### セキュリティ考慮事項

1. **認証機構**: デバイスへの接続に認証が不要な場合、同一ネットワーク上の第三者が再生を操作できるリスクがある
2. **環境変数**: `BLU_DEVICE`に機密情報は含まれないが、デバイス名がネットワークトポロジーを露呈する可能性がある
3. **コマンドインジェクション**: スクリプト内でユーザー入力を`blu`コマンドに渡す場合、適切なサニタイゼーションが必要

## 参考リンク

- BluCLI公式サイト: https://blucli.sh
- BluCLI GitHubリポジトリ: https://github.com/steipete/blucli
- Bluesound公式サイト: https://www.bluesound.com/
- NADエレクトロニクス: https://nadelectronics.com/
- Clawdbot公式サイト: https://clawdbot.io/

---

本記事の情報は2026年2月15日時点のものです。BluCLI Skillの機能、コマンド仕様、インストール方法は変更される可能性があります。最新情報は公式サイトおよびGitHubリポジトリをご確認ください。
