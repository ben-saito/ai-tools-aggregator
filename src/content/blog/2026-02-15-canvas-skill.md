---
title: "Canvas Skill - Clawdbot向けHTML表示機能"
description: "Clawdbot向けCanvas Skillを利用して、HTML/CSS/JavaScriptコンテンツをノードデバイス（Mac、iOS、Android）に表示する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Canvas", "WebView", "Tailscale", "Live Reload", "Node"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Canvas Skill, WebView, HTML表示, Tailscale, Live Reload, ノード連携"
---

# Canvas Skill - Clawdbot向けHTML表示機能

ClawdbotのCanvas Skillは、HTML/CSS/JavaScriptで作成されたコンテンツを接続中のノードデバイス（Mac、iOS、Android）上に表示するための機能を提供する。ゲーム、可視化ダッシュボード、インタラクティブなデモなど、WebベースのコンテンツをノードアプリのWebView内でレンダリングできる。

## 概要

Canvas Skillは、ClawdbotのCanvas Host Server（HTTPサーバー）、Node Bridge（TCPサーバー）、およびノードアプリ（Mac/iOS/Android）の3層アーキテクチャで構成される。開発時には、ファイル変更を自動検知してブラウザをリロードするLive Reload機能により、効率的な開発が可能となる。

Tailscaleとの統合により、ローカルネットワークまたはTailscale VPN経由でコンテンツを配信できる仕組みが実装されている。

## 技術的仕様

### システム要件

- **Canvas Host Server:** Node.js実行環境
- **Node Bridge:** TCPポート18790（デフォルト）
- **Canvas Host:** HTTPポート18793（デフォルト）
- **対応ノード:** Clawdbotノードアプリ（Mac、iOS、Android）
- **オプション:** Tailscale（Tailnet経由での配信時）

### アーキテクチャ

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────┐
│  Canvas Host    │────▶│   Node Bridge    │────▶│  Node App   │
│  (HTTP Server)  │     │  (TCP Server)    │     │ (Mac/iOS/   │
│  Port 18793     │     │  Port 18790      │     │  Android)   │
└─────────────────┘     └──────────────────┘     └─────────────┘
```

1. **Canvas Host Server:** `canvasHost.root`ディレクトリからHTML/CSS/JSファイルを配信
2. **Node Bridge:** Canvas URLを接続中のノードに通知
3. **Node Apps:** WebViewでコンテンツをレンダリング

### Tailscale統合

Canvas Host Serverのバインドアドレスは、`gateway.bind`設定によって決定される:

| Bind Mode | バインドアドレス | Canvas URL |
|-----------|-----------------|------------|
| `loopback` | 127.0.0.1 | localhost（ローカルのみ） |
| `lan` | LAN interface | LAN IPアドレス |
| `tailnet` | Tailscale interface | Tailscaleホスト名 |
| `auto` | 自動選択 | Tailscale > LAN > loopback |

Tailscale経由で配信する場合、ノードは以下のようなURLを受信する:

```
http://<tailscale-hostname>:18793/__clawdbot__/canvas/<file>.html
```

### 設定ファイル

`~/.clawdbot/clawdbot.json`での設定例:

```json
{
  "canvasHost": {
    "enabled": true,
    "port": 18793,
    "root": "/Users/you/clawd/canvas",
    "liveReload": true
  },
  "gateway": {
    "bind": "auto"
  }
}
```

### Live Reload機能

`liveReload: true`（デフォルト有効）の場合、Canvas Hostは以下の動作を実行:

- Chokidar（https://github.com/paulmillr/chokilar）によるファイル監視
- WebSocketクライアントのHTMLへの自動注入
- ファイル変更検知時のブラウザ自動リロード

開発時のファイル編集を保存すると即座にノード上のキャンバスが更新されるため、開発サイクルが短縮される。

## 主要機能

Canvas Skillは以下のアクションを提供:

| アクション | 説明 |
|-----------|------|
| `present` | 指定URLのキャンバスを表示 |
| `hide` | キャンバスを非表示 |
| `navigate` | 新しいURLに遷移 |
| `eval` | キャンバス内でJavaScriptを実行 |
| `snapshot` | キャンバスのスクリーンショットを取得 |

## 実装例

### 1. HTMLコンテンツの配置

Canvas rootディレクトリ（デフォルト `~/clawd/canvas/`）にHTMLファイルを配置:

```bash
cat > ~/clawd/canvas/my-game.html << 'HTML'
<!DOCTYPE html>
<html>
<head>
  <title>My Game</title>
  <style>
    body { margin: 0; background: #1a1a1a; color: #fff; font-family: sans-serif; }
    #game { display: flex; justify-content: center; align-items: center; height: 100vh; }
  </style>
</head>
<body>
  <div id="game">
    <h1>Hello Canvas!</h1>
  </div>
  <script>
    console.log('Canvas loaded');
  </script>
</body>
</html>
HTML
```

### 2. ノードへの表示

接続中のノードを確認:

```bash
clawdbot nodes list
```

Canvas URLの構築（Tailscaleホスト名を使用）:

```bash
# Tailscaleホスト名取得
HOSTNAME=$(tailscale status --json | jq -r '.Self.DNSName' | sed 's/\.$//')

# Canvas URL構築
URL="http://${HOSTNAME}:18793/__clawdbot__/canvas/my-game.html"
echo $URL
```

ノードに表示:

```
canvas action:present node:mac-63599bc4-b54d-4392-9048-b97abd58343a target:http://example-host.ts.net:18793/__clawdbot__/canvas/my-game.html
```

### 3. インタラクティブなダッシュボード

リアルタイムデータ表示ダッシュボードの実装:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Dashboard</title>
  <style>
    body { margin: 0; padding: 20px; background: #0d1117; color: #c9d1d9; }
    .metric { padding: 20px; margin: 10px; background: #161b22; border-radius: 6px; }
  </style>
</head>
<body>
  <h1>System Metrics</h1>
  <div id="metrics"></div>
  <script>
    // 定期的にメトリクスを更新
    setInterval(() => {
      const metrics = document.getElementById('metrics');
      metrics.innerHTML = `
        <div class="metric">CPU: ${(Math.random() * 100).toFixed(1)}%</div>
        <div class="metric">Memory: ${(Math.random() * 16).toFixed(1)} GB</div>
        <div class="metric">Disk: ${(Math.random() * 500).toFixed(1)} GB</div>
      `;
    }, 1000);
  </script>
</body>
</html>
```

### 4. JavaScriptの動的実行

キャンバス表示後、`eval`アクションでJavaScriptを実行:

```
canvas action:eval node:mac-xxx javaScript:"document.body.style.backgroundColor = 'blue';"
canvas action:eval node:mac-xxx javaScript:"alert('Hello from Clawdbot');"
```

### 5. スクリーンショット取得

キャンバスの現在の状態をキャプチャ:

```
canvas action:snapshot node:mac-xxx outputFormat:png
```

生成された画像ファイルは、ノードから返却される。

### 6. Live Reloadを活用した開発ワークフロー

```bash
# 1. Canvasルートディレクトリに移動
cd ~/clawd/canvas

# 2. 開発用HTMLファイル作成
cat > dev-test.html << 'HTML'
<!DOCTYPE html>
<html>
<head><title>Dev Test</title></head>
<body>
  <h1 id="title">Version 1</h1>
  <script>
    console.log('Dev test loaded');
  </script>
</body>
</html>
HTML

# 3. ノードに表示
canvas action:present node:mac-xxx target:http://hostname:18793/__clawdbot__/canvas/dev-test.html

# 4. ファイル編集（タイトルを変更）
sed -i '' 's/Version 1/Version 2/' dev-test.html

# 5. 保存後、自動的にノード上でリロードされる（手動操作不要）
```

## ユースケース

### ゲーム開発

- HTML5ゲームのプロトタイピング（Phaser.js、Three.js等）
- デバッグ画面のリモート表示
- マルチプレイヤーゲームのステート可視化

### データ可視化

- Chart.js、D3.jsを使用したグラフ表示
- システムメトリクスダッシュボード
- リアルタイムログビューアー

### インタラクティブデモ

- プレゼンテーション用のスライド表示
- プロダクトデモ
- AI生成コンテンツのプレビュー

### 開発・デバッグ

- WebアプリケーションのUI確認
- レスポンシブデザインのテスト
- クロスブラウザ検証

## 制限事項・セキュリティ考慮事項

### 機能制限

- **ノード必須:** Canvas表示にはClawdbotノードアプリ（Mac/iOS/Android）がインストールされ、接続されている必要がある
- **WebView制約:** ノードアプリのWebView実装に依存するため、一部のWeb API（WebGL、WebRTC等）が制限される可能性がある
- **A2UI未実装:** 現時点ではJSONベースのA2UI push機能はWIP（Work In Progress）であり、HTMLファイルベースでの運用が推奨される

### セキュリティ

- **ネットワーク公開:** `gateway.bind`が`lan`または`tailnet`の場合、Canvas Hostはネットワーク上の他のデバイスからアクセス可能となる
- **認証未実装:** Canvas Host Serverには認証機構が実装されていないため、Tailscale等のVPNでアクセス制御を行う必要がある
- **スクリプト実行:** `eval`アクションは任意のJavaScriptを実行できるため、信頼できるコンテンツのみを表示すること

### パフォーマンス

- **Live Reload:** ファイル監視（Chokidar）は大規模ディレクトリでパフォーマンスに影響する可能性がある
- **WebSocket接続:** Live Reload使用時、各ノードとWebSocket接続を維持する
- **メモリ使用:** 複雑なHTML/JSコンテンツはノードアプリのメモリを消費する

### トラブルシューティング

**白い画面が表示される（コンテンツ未読み込み）:**

原因: URLミスマッチ（サーバーのバインドアドレスとノードへの通知URLが不一致）

解決策:
1. サーバーのバインドモード確認: `cat ~/.clawdbot/clawdbot.json | jq '.gateway.bind'`
2. Canvas Hostのポート確認: `lsof -i :18793`
3. URL直接テスト: `curl http://<hostname>:18793/__clawdbot__/canvas/<file>.html`

**「node required」エラー:**

`node:<node-id>`パラメータを必ず指定する。

**「node not connected」エラー:**

ノードがオフライン。`clawdbot nodes list`で接続状態を確認。

## 参考リンク

- Clawdbot公式ドキュメント: https://github.com/cncf/clawdbot
- Tailscale公式サイト: https://tailscale.com
- Chokidar（ファイル監視ライブラリ）: https://github.com/paulmillr/chokidar
- WebView技術仕様（Apple）: https://developer.apple.com/documentation/webkit/wkwebview
- WebView技術仕様（Android）: https://developer.android.com/reference/android/webkit/WebView

---

本記事の情報は2026年2月15日時点のものです。Canvas Skillの機能および設定は変更される可能性があります。最新情報はClawdbot公式ドキュメントをご確認ください。
