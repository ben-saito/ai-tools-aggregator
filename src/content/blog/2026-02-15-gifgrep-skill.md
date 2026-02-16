---
title: "GifGrep Skill - Clawdbot向けGIF検索・抽出システム"
description: "Clawdbot向けGifGrep Skillを利用して、GIF検索、ダウンロード、スチール抽出、シート生成を実現する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "GifGrep", "GIF", "Tenor", "Giphy", "CLI", "TUI"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, GifGrep, GIF検索, Tenor, Giphy, スチール抽出, シート生成, CLI"
---

# GifGrep Skill - Clawdbot向けGIF検索・抽出システム

2026年現在、GIFコンテンツの検索・管理を効率化するツールとして、Clawdbot向けのGifGrep Skillが提供されている。GifGrepは、Tenor・Giphy等のGIFプロバイダーから検索、ダウンロード、スチールフレーム抽出、シート生成までを統合的に実行可能なコマンドラインツールである。

本記事では、GifGrep SkillのClawdbotへの統合方法、主要機能、および実装例を解説する。

## 概要

GifGrep Skillは、Peter Steinberger氏が開発するGIF検索・処理ツールを、Clawdbotエージェントから利用可能にするスキルパッケージである。Clawdbotエージェントは、このスキルを通じてTenor・GiphyのAPI経由でGIFを検索し、ダウンロード、プレビュー、スチール抽出、シート生成を自動化できる。

### 主な特徴

- Tenor・Giphy両対応（APIキー設定可能）
- TUI（Terminal User Interface）による対話的検索
- Kitty/Ghostty対応のインライン画像プレビュー
- スチールフレーム抽出（特定時点の静止画生成）
- シート生成（複数フレームをグリッド状に配置した1枚の画像）
- JSON出力対応（スクリプト統合向け）

## 技術的仕様

### システム要件

- Go 1.18以上（ビルド時）
- macOS、Linux対応
- Tenor API（デモキー利用可能、`TENOR_API_KEY`で上書き可能）
- Giphy API（`GIPHY_API_KEY`必須、`--source giphy`使用時）

### インストール方法

#### Homebrew経由（推奨）

```bash
brew install steipete/tap/gifgrep
```

#### Go経由

```bash
go install github.com/steipete/gifgrep/cmd/gifgrep@latest
```

インストール後、`gifgrep --version`で動作確認が可能。

## 主要機能

GifGrepは、以下の主要機能を提供する。

### 1. 検索（CLI）

```bash
# 基本検索（最大5件）
gifgrep cats --max 5

# URL形式で出力
gifgrep cats --format url | head -n 5

# JSON形式で出力
gifgrep search --json cats | jq '.[0].url'
```

JSON出力には、`id`、`title`、`url`、`preview_url`、`tags`、`width`、`height`が含まれる。

### 2. TUI検索

```bash
# 対話的TUI起動
gifgrep tui "office handshake"
```

TUI内でキーボード操作により検索結果をブラウズし、選択してダウンロード可能。

### 3. ダウンロード

```bash
# 検索結果をダウンロード（~/Downloadsに保存）
gifgrep cats --download --max 1 --format url

# ダウンロード後にFinderで表示
gifgrep cats --download --reveal --max 1
```

### 4. スチール抽出

```bash
# 1.5秒時点のスチールフレームを抽出
gifgrep still ./clip.gif --at 1.5s -o still.png
```

### 5. シート生成

```bash
# 9フレームを3列でシート生成
gifgrep sheet ./clip.gif --frames 9 --cols 3 -o sheet.png

# パディング調整
gifgrep sheet ./clip.gif --frames 16 --cols 4 --padding 10 -o sheet.png
```

シートは、GIFから等間隔でサンプリングしたフレームを1枚のPNG画像にグリッド配置する機能であり、プルリクエスト、ドキュメント、チャット等での視覚的レビューに有用である。

## 実装例

以下に、Clawdbotエージェントが GifGrep Skill を活用する実装例を示す。

### 1. キーワード検索とURL取得

```javascript
// Clawdbotエージェントコード例（Node.js）
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

async function searchGif(keyword, maxResults = 5) {
  try {
    const { stdout } = await execPromise(
      `gifgrep search --json "${keyword}" | jq -r '.[].url' | head -n ${maxResults}`
    );
    
    const urls = stdout.trim().split('\n');
    console.log(`検索キーワード「${keyword}」で${urls.length}件のGIFを取得`);
    return urls;
  } catch (error) {
    console.error('GIF検索エラー:', error);
    return [];
  }
}

// 使用例
searchGif('cats').then(urls => {
  urls.forEach((url, index) => {
    console.log(`${index + 1}: ${url}`);
  });
});
```

### 2. 自動ダウンロードとシート生成

```bash
#!/bin/bash
# GIF検索 → ダウンロード → シート生成の自動化

KEYWORD="reaction meme"
DOWNLOAD_DIR="$HOME/Downloads"

# 検索とダウンロード
gifgrep "$KEYWORD" --download --max 1 --format url

# 最新ダウンロードファイルを特定
LATEST_GIF=$(ls -t "$DOWNLOAD_DIR"/*.gif | head -n 1)

if [ -f "$LATEST_GIF" ]; then
  # シート生成
  gifgrep sheet "$LATEST_GIF" --frames 9 --cols 3 -o "${LATEST_GIF%.gif}-sheet.png"
  echo "シート生成完了: ${LATEST_GIF%.gif}-sheet.png"
else
  echo "ダウンロードファイルが見つかりません"
fi
```

### 3. JSON解析とメタデータ抽出

```python
# Python例: gifgrepのJSON出力を解析
import subprocess
import json

def get_gif_metadata(keyword):
    result = subprocess.run(
        ['gifgrep', 'search', '--json', keyword],
        capture_output=True,
        text=True
    )
    
    if result.returncode == 0:
        gifs = json.loads(result.stdout)
        for gif in gifs[:5]:
            print(f"Title: {gif['title']}")
            print(f"URL: {gif['url']}")
            print(f"Size: {gif['width']}x{gif['height']}")
            print(f"Tags: {', '.join(gif.get('tags', []))}")
            print("---")
    else:
        print(f"Error: {result.stderr}")

get_gif_metadata("cats")
```

### 4. スチール抽出の自動化

```bash
#!/bin/bash
# 複数時点でスチール抽出

INPUT_GIF="animation.gif"
OUTPUT_DIR="stills"

mkdir -p "$OUTPUT_DIR"

# 0.5秒ごとにスチール抽出（合計10枚）
for i in {0..9}; do
  TIMESTAMP="${i}.5s"
  gifgrep still "$INPUT_GIF" --at "$TIMESTAMP" -o "$OUTPUT_DIR/still-$i.png"
  echo "抽出: $TIMESTAMP -> still-$i.png"
done
```

### 5. Giphy検索の設定

```bash
# Giphy APIキー設定
export GIPHY_API_KEY="your_giphy_api_key_here"

# Giphy検索実行
gifgrep search --source giphy --json "funny cats" | jq '.[0:3]'
```

## ユースケース

GifGrep Skillは、以下のシナリオで活用される。

### 1. チャットボットへのGIF統合

Discord/Slack等のチャットボットが、ユーザーのキーワードに応じて適切なGIFを検索・投稿する。

### 2. プルリクエストのビジュアルレビュー

UI変更のプルリクエストに、変更前後のアニメーションをシート形式で添付し、レビュアーが一目で差分を確認できるようにする。

### 3. マーケティング素材の自動収集

キャンペーン用のGIFを自動検索・ダウンロードし、メタデータとともにCMSに登録する。

### 4. ドキュメント生成

製品マニュアルやチュートリアルに、操作手順のGIFアニメーションをシート形式で挿入する。

## 制限事項・セキュリティ考慮事項

### 制限事項

- Kitty/Ghostty以外のターミナルでは、インライン画像プレビュー（`--thumbs`）は非対応
- Giphy検索には有効な`GIPHY_API_KEY`が必須
- Tenor APIのレート制限は、使用するAPIキーに依存（デモキーの場合は制限あり）

### セキュリティ考慮事項

- APIキー管理: `GIPHY_API_KEY`、`TENOR_API_KEY`は環境変数で管理し、バージョン管理システムにコミットしないこと
- ダウンロード先: `--download`によるファイル保存先は`~/Downloads`固定（権限確認が必要）
- ネットワークアクセス: 外部API（Tenor/Giphy）へのアクセス権限が必要

## 参考リンク

- 公式サイト: https://gifgrep.com
- GitHubリポジトリ: https://github.com/steipete/gifgrep
- Tenor API: https://developers.google.com/tenor
- Giphy API: https://developers.giphy.com

---

本記事の情報は2026年2月15日時点のものです。GifGrepの機能や仕様は変更される可能性があります。最新情報は公式サイトをご確認ください。
