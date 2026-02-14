---
title: "Peekaboo Skill - Clawdbot向けmacOS UI自動化システム"
description: "Clawdbot向けPeekaboo Skillを利用して、macOS UIのキャプチャ、要素検査、自動操作、アプリケーション制御を実現する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Peekaboo", "macOS", "UI自動化", "スクリーンキャプチャ", "CLI", "自動テスト"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Peekaboo, macOS UI自動化, スクリーンキャプチャ, 要素検査, 自動テスト, CLI"
---

# Peekaboo Skill - Clawdbot向けmacOS UI自動化システム

2026年現在、macOS環境でのUI自動化と検査を効率化するツールとして、Clawdbot向けのPeekaboo Skillが提供されている。Peekabooは、macOSのUIキャプチャ、要素検査、マウス・キーボード操作、アプリケーション・ウィンドウ管理を統合的に実行可能な包括的CLIである。

本記事では、Peekaboo SkillのClawdbotへの統合方法、主要機能、および実装例を解説する。

## 概要

Peekaboo Skillは、Peter Steinberger氏が開発するmacOS UI自動化ツールを、Clawdbotエージェントから利用可能にするスキルパッケージである。Clawdbotエージェントは、このスキルを通じてmacOSのアクセシビリティAPIを活用し、UI要素の特定、自動操作、スクリーンショット取得、アプリケーション制御を実行できる。

### 主な特徴

- macOS専用（Darwin）
- Screen RecordingおよびAccessibility権限必須
- UI要素の自動検出と注釈付きキャプチャ
- マウス・キーボード操作の自動化
- アプリケーション・ウィンドウ・メニュー制御
- JSON出力対応（スクリプト統合向け）
- スナップショットキャッシュによる効率的な要素追跡

## 技術的仕様

### システム要件

- macOS（Darwin）専用
- Screen Recording権限（スクリーンキャプチャ）
- Accessibility権限（UI要素操作）
- Homebrew（インストール推奨）

### インストール方法

#### Homebrew経由（推奨）

```bash
brew install steipete/tap/peekaboo
```

#### 権限設定

```bash
# 権限状態確認
peekaboo permissions

# 権限が不足している場合、システム環境設定から手動で有効化
# 設定 > セキュリティとプライバシー > プライバシー > 画面収録/アクセシビリティ
```

インストール後、`peekaboo --version`で動作確認が可能。

## 主要機能

Peekabooは、以下の主要カテゴリに分類される機能を提供する。

### コア機能

- `bridge`: Peekaboo Bridgeホスト接続検査
- `capture`: ライブキャプチャまたは動画取り込み・フレーム抽出
- `clean`: スナップショットキャッシュとテンポラリファイルの削除
- `config`: 設定の初期化・表示・編集・検証
- `image`: スクリーンショット取得（画面・ウィンドウ・メニューバー）
- `list`: アプリ・ウィンドウ・画面・メニューバー・権限の一覧
- `permissions`: Screen Recording/Accessibility権限状態確認
- `see`: 注釈付きUIマップ、スナップショットID、オプション分析

### 操作機能

- `click`: ID・クエリ・座標によるクリック（スマート待機対応）
- `drag`: 要素・座標・Dock間のドラッグ&ドロップ
- `hotkey`: 修飾キー組み合わせ（例: `cmd,shift,t`）
- `move`: カーソル位置指定（スムーズ移動対応）
- `paste`: クリップボード設定 → ペースト → 復元
- `press`: 特殊キー入力（リピート対応）
- `scroll`: 方向指定スクロール（ターゲット指定・スムーズ対応）
- `swipe`: ジェスチャースタイルのドラッグ
- `type`: テキスト・制御キー入力（`--clear`、遅延対応）

### システム管理

- `app`: アプリの起動・終了・再起動・非表示・表示・切り替え
- `clipboard`: クリップボード読み書き（テキスト・画像・ファイル）
- `dialog`: システムダイアログのクリック・入力・ファイル選択・閉じる
- `dock`: Dockアイテムの起動・右クリック・非表示・表示
- `menu`: アプリケーションメニューのクリック・一覧
- `menubar`: ステータスバーアイテムの一覧・クリック
- `open`: 強化版`open`（アプリターゲット指定・JSONペイロード対応）
- `space`: Spaces（仮想デスクトップ）の一覧・切り替え・ウィンドウ移動
- `window`: ウィンドウの閉じる・最小化・最大化・移動・リサイズ・フォーカス

### ビジョン機能

- `see`: 注釈付きUIマップ、スナップショットID、オプション分析

## 実装例

以下に、Clawdbotエージェントが Peekaboo Skill を活用する実装例を示す。

### 1. UI要素検出とクリック（推奨フロー）

```bash
#!/bin/bash
# Safari のログインフォームに自動入力

# ステップ1: UI要素を検出（注釈付きキャプチャ）
peekaboo see --app Safari --window-title "Login" --annotate --path /tmp/see.png

# ステップ2: 検出されたUI要素（例: B3がメールフィールド）をクリック
peekaboo click --on B3 --app Safari

# ステップ3: メールアドレス入力
peekaboo type "user@example.com" --app Safari

# ステップ4: Tabキーでパスワードフィールドに移動
peekaboo press tab --count 1 --app Safari

# ステップ5: パスワード入力
peekaboo type "supersecret" --app Safari --return
```

### 2. アプリケーション自動起動とウィンドウ配置

```javascript
// Clawdbotエージェントコード例（Node.js）
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

async function setupWorkspace() {
  try {
    // Safariを起動
    await execPromise('peekaboo app launch "Safari" --open https://example.com');
    
    // ウィンドウを左半分に配置
    await execPromise('peekaboo window set-bounds --app Safari --x 0 --y 0 --width 960 --height 1080');
    
    // Visual Studio Codeを起動
    await execPromise('peekaboo app launch "Visual Studio Code"');
    
    // ウィンドウを右半分に配置
    await execPromise('peekaboo window set-bounds --app "Visual Studio Code" --x 960 --y 0 --width 960 --height 1080');
    
    console.log('ワークスペースセットアップ完了');
  } catch (error) {
    console.error('セットアップエラー:', error);
  }
}

setupWorkspace();
```

### 3. ライブキャプチャ（モーション検出）

```bash
# 30秒間、領域（100,100,800,600）をキャプチャ
# アクティブ時8fps、アイドル時2fps、変更箇所をハイライト
peekaboo capture live --mode region --region 100,100,800,600 --duration 30 \
  --active-fps 8 --idle-fps 2 --highlight-changes --path /tmp/capture
```

### 4. メニュー操作

```bash
#!/bin/bash
# Safariのメニュー操作例

# 「新規ウィンドウ」を開く
peekaboo menu click --app Safari --item "New Window"

# TextEditのフォント設定を開く
peekaboo menu click --app TextEdit --path "Format > Font > Show Fonts"

# メニューバーの「Wi-Fi」をクリック
peekaboo menu click-extra --title "WiFi"
```

### 5. スクリーンショットと画像分析

```python
# Python例: スクリーンショット取得とAI分析
import subprocess
import json

def capture_and_analyze(app_name, window_title, prompt):
    # スクリーンショット取得（AIプロンプト付き）
    result = subprocess.run([
        'peekaboo', 'image',
        '--app', app_name,
        '--window-title', window_title,
        '--analyze', prompt
    ], capture_output=True, text=True)
    
    if result.returncode == 0:
        print(f"分析結果:\n{result.stdout}")
    else:
        print(f"エラー: {result.stderr}")

# ダッシュボードのKPI要約
capture_and_analyze('Safari', 'Dashboard', 'Summarize the KPIs shown on this dashboard')
```

## ユースケース

Peekaboo Skillは、以下のシナリオで活用される。

### 1. E2Eテスト自動化

Webアプリケーションのエンドツーエンドテストを、Peekaboo経由でブラウザUI操作を自動化して実行する。

### 2. デスクトップアプリのUI回帰テスト

macOSネイティブアプリの新バージョンリリース前に、Peekabooで既存UIワークフローを自動実行し、回帰バグを検出する。

### 3. デモ動画の自動生成

製品デモのスクリーンキャプチャとUI操作を自動化し、一貫性のあるデモ動画を生成する。

### 4. AIアシスタントのUI操作代行

Clawdbotエージェントが、ユーザーの音声コマンド（「メールを開いて」等）を解釈し、Peekabooで該当アプリケーションを操作する。

### 5. アクセシビリティ監査

UIキャプチャと要素検査により、アクセシビリティ対応状況（ラベル、コントラスト等）を自動検証する。

## 制限事項・セキュリティ考慮事項

### 制限事項

- macOS専用: Windows・Linux非対応
- 権限必須: Screen RecordingおよびAccessibility権限が必要（初回セットアップ時に手動有効化）
- アプリケーション互換性: 一部のアプリケーション（特にサンドボックス化された環境）では、UI要素へのアクセスが制限される場合あり
- スナップショットキャッシュ: 長時間稼働時にキャッシュが肥大化する可能性（定期的に`peekaboo clean`を実行）

### セキュリティ考慮事項

- Screen Recording権限: 画面全体へのアクセス権限であり、機密情報の漏洩リスクあり（信頼できるスクリプトのみ実行）
- Accessibility権限: システム全体のUI操作権限であり、悪意あるスクリプトが任意の操作を実行可能（権限管理を厳格化）
- パスワード入力: `type`コマンドで平文パスワードを入力する場合、コマンド履歴に残る可能性（環境変数または外部ファイルから読み込む）
- スクリーンショット保存: キャプチャ画像に機密情報が含まれる可能性（保存先ディレクトリの権限設定を確認）

## 参考リンク

- 公式サイト: https://peekaboo.boo
- GitHubリポジトリ: https://github.com/steipete/peekaboo
- macOS Accessibility API: https://developer.apple.com/documentation/accessibility
- macOS Screen Capture API: https://developer.apple.com/documentation/screencapturekit

---

本記事の情報は2026年2月15日時点のものです。Peekabooの機能や仕様は変更される可能性があります。最新情報は公式サイトをご確認ください。
