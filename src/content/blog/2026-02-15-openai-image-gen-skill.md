---
title: "OpenAI Image Gen Skill - Clawdbot向けバッチ画像生成機能"
description: "Clawdbot向けOpenAI Image Gen Skillを利用して、OpenAI Images APIによるバッチ画像生成とHTMLギャラリー自動作成を実現する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "OpenAI", "DALL-E", "画像生成", "API", "Python"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, OpenAI Images API, DALL-E, GPT Image, 画像生成, バッチ処理, Python"
---

# OpenAI Image Gen Skill - Clawdbot向けバッチ画像生成機能

ClawdbotのOpenAI Image Gen Skillは、OpenAI Images APIを使用した画像のバッチ生成機能を提供する。ランダムプロンプトサンプラーを搭載し、複数画像の一括生成とHTMLギャラリーの自動作成が可能である。DALL-E 2、DALL-E 3、およびGPT Imageモデル（gpt-image-1、gpt-image-1-mini、gpt-image-1.5）に対応している。

## 概要

OpenAI Image Gen Skillは、Pythonスクリプト（`gen.py`）を中心とした画像生成ワークフローを提供する。プロンプトのバリエーション生成、APIリクエスト、画像ダウンロード、ギャラリーHTMLの生成を自動化し、クリエイティブワークフローを効率化する。

2026年2月時点で、OpenAIは以下の画像生成モデルを提供している:

- **DALL-E 3:** 高品質画像生成（1024x1024、1792x1024、1024x1792対応）
- **DALL-E 2:** 従来モデル（256x256、512x512、1024x1024対応）
- **GPT Imageシリーズ:** 最新モデル（gpt-image-1、gpt-image-1-mini、gpt-image-1.5）。透過背景、WebP出力、複数サイズ対応

## 技術的仕様

### システム要件

- **Python:** Python 3.7以上
- **環境変数:** `OPENAI_API_KEY`（OpenAI APIキー）
- **依存ライブラリ:** openai、requests（gen.pyで自動インストール）

### インストール方法

Homebrew経由でのPythonインストール（macOS）:

```bash
brew install python
```

OpenAI APIキーの設定:

```bash
export OPENAI_API_KEY="sk-..."
echo 'export OPENAI_API_KEY="sk-..."' >> ~/.zshrc  # または ~/.bashrc
```

### コマンドライン引数

`gen.py`の主要オプション:

| オプション | 説明 | デフォルト値 |
|-----------|------|-------------|
| `--count` | 生成画像数 | 4 |
| `--model` | 使用モデル（dall-e-2、dall-e-3、gpt-image-1等） | gpt-image-1 |
| `--size` | 画像サイズ（モデル依存） | 1024x1024 |
| `--quality` | 品質（モデル依存） | high（GPT Image）/ standard（DALL-E） |
| `--prompt` | 固定プロンプト（指定しない場合はランダム生成） | なし |
| `--background` | 背景（transparent/opaque/auto、GPT Imageのみ） | auto |
| `--output-format` | 出力形式（png/jpeg/webp、GPT Imageのみ） | png |
| `--style` | スタイル（vivid/natural、DALL-E 3のみ） | なし |
| `--out-dir` | 出力ディレクトリ | ~/Projects/tmp/openai-image-gen-* |

## 主要機能

### モデル別パラメータ対応

各モデルは異なるパラメータセットをサポートする:

**GPT Imageモデル（gpt-image-1、gpt-image-1-mini、gpt-image-1.5）:**

- **サイズ:** 1024x1024、1536x1024（横長）、1024x1536（縦長）、auto
- **品質:** auto、high、medium、low
- **背景:** transparent（透過）、opaque（不透明）、auto
- **出力形式:** png、jpeg、webp
- **バッチ生成:** `--count`で複数画像の同時生成が可能

**DALL-E 3:**

- **サイズ:** 1024x1024、1792x1024、1024x1792
- **品質:** hd、standard
- **スタイル:** vivid（超リアル、ドラマチック）、natural（自然な見た目）
- **制限:** 1回のリクエストで1画像のみ（`n=1`）

**DALL-E 2:**

- **サイズ:** 256x256、512x512、1024x1024
- **品質:** standard
- **バッチ生成:** 複数画像の同時生成が可能

### ランダムプロンプト生成

`--prompt`を指定しない場合、スクリプトは構造化されたランダムプロンプトを生成する。プロンプトテンプレートには以下のバリエーションが含まれる:

- 被写体（astronaut、lobster、dragon等）
- スタイル（ultra-detailed studio photo、watercolor painting等）
- ライティング（cinematic lighting、soft ambient light等）

### HTMLギャラリー自動生成

生成された全画像を表示するHTMLファイル（`index.html`）が自動作成される。サムネイル表示、画像クリックでの拡大表示に対応。

出力ディレクトリ構成:

```
~/Projects/tmp/openai-image-gen-20260215-143022/
├── image-001.png
├── image-002.png
├── image-003.png
├── prompts.json
└── index.html
```

`prompts.json`には、各画像とプロンプトのマッピングが記録される:

```json
{
  "image-001.png": "ultra-detailed studio photo of a lobster astronaut",
  "image-002.png": "watercolor painting of a dragon in the mountains",
  ...
}
```

## 実装例

### 1. GPT Imageモデルでの高品質画像生成

```bash
python3 gen.py --count 16 --model gpt-image-1 --size 1536x1024 --quality high
```

生成後、自動的にブラウザでギャラリーを開く:

```bash
open ~/Projects/tmp/openai-image-gen-*/index.html
```

### 2. 透過背景のロゴ画像生成

```bash
python3 gen.py \
  --model gpt-image-1.5 \
  --background transparent \
  --output-format webp \
  --prompt "minimalist tech company logo with blue gradient" \
  --count 8 \
  --out-dir ./logos
```

### 3. DALL-E 3での超高解像度画像生成

```bash
python3 gen.py \
  --model dall-e-3 \
  --quality hd \
  --size 1792x1024 \
  --style vivid \
  --prompt "serene mountain landscape at sunset, photorealistic"
```

DALL-E 3は`n=1`制限のため、複数画像生成時はスクリプトが自動的にループ実行する。

### 4. バッチ処理によるアセット生成

プロンプトリストファイル（`prompts.txt`）を使用した一括生成:

```bash
cat > prompts.txt << 'EOF'
futuristic cityscape at night
retro 80s neon sign
minimalist abstract art
vintage travel poster
EOF

while read prompt; do
  python3 gen.py --prompt "$prompt" --count 1 --out-dir ./assets
done < prompts.txt
```

### 5. カスタムスクリプトでのAPI統合

Python環境での直接API呼び出し:

```python
import os
from openai import OpenAI

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

response = client.images.generate(
  model="gpt-image-1",
  prompt="ultra-detailed photo of a steampunk robot",
  size="1024x1024",
  quality="high",
  n=4
)

for idx, image in enumerate(response.data):
  print(f"Image {idx + 1}: {image.url}")
```

### 6. Clawdbot Agentからの自動画像生成

Clawdbot AgentがOpenAI Image Gen Skillを呼び出す例:

```bash
#!/bin/bash
# Clawdbot Agent実行スクリプト

PROMPT="A futuristic AI assistant workspace with holographic displays"
OUTPUT_DIR="/tmp/clawdbot-generated-images"

python3 ~/.clawdbot/skills/openai-image-gen/scripts/gen.py \
  --prompt "$PROMPT" \
  --count 8 \
  --model gpt-image-1 \
  --quality high \
  --out-dir "$OUTPUT_DIR"

echo "画像生成完了: $OUTPUT_DIR/index.html"
```

## ユースケース

### クリエイティブワークフロー

- コンセプトアート生成（ゲーム、映画、広告）
- プロトタイピング用のビジュアルモックアップ
- ブログ記事用のサムネイル画像生成

### マーケティング・広告

- ソーシャルメディア投稿用の画像素材
- A/Bテスト用のバリエーション生成
- プロダクトビジュアルのアイデア出し

### 教育・研究

- 視覚的教材の作成
- AI画像生成の品質比較研究
- プロンプトエンジニアリングの実験

### 自動化ワークフロー

- Clawdbot Agentによる定期的なビジュアル生成
- ユーザーリクエストに基づく動的画像生成
- データ可視化との組み合わせ

## 制限事項・セキュリティ考慮事項

### API制限

- **レート制限:** OpenAI APIには1分あたりのリクエスト数制限がある（プランにより異なる）
- **コスト:** 画像生成には従量課金が適用される。2026年2月時点の価格例（公式サイト要確認）:
  - DALL-E 3 (1024x1024): 約$0.040/画像
  - DALL-E 2 (1024x1024): 約$0.020/画像
  - GPT Image: モデルとサイズにより変動
- **DALL-E 3の`n=1`制限:** 1回のリクエストで1画像のみ生成可能

### セキュリティ

- **APIキー管理:** `OPENAI_API_KEY`は環境変数で管理し、ソースコードにハードコードしないこと
- **プロンプト内容:** OpenAIのContent Policy（https://openai.com/policies/usage-policies）に準拠する必要がある。暴力的、性的、差別的なコンテンツは禁止
- **画像の著作権:** 生成された画像の利用規約はOpenAIの利用規約に従う

### パフォーマンス

- **生成時間:** DALL-E 3は高品質のため、1画像あたり10-30秒程度かかる場合がある
- **ネットワーク依存:** 画像ダウンロードは生成後のURL取得とHTTPリクエストに依存
- **ストレージ:** 高解像度画像（1792x1024等）は1ファイルあたり2-5MB程度

### トラブルシューティング

**「OPENAI_API_KEY not set」エラー:**

環境変数が設定されていない。`.zshrc`または`.bashrc`に追加し、シェルを再起動。

**「Invalid size for model」エラー:**

モデルとサイズの組み合わせが無効。上記のモデル別パラメータ対応表を参照。

**「Rate limit exceeded」エラー:**

APIレート制限に到達。待機後に再試行するか、`--count`を減らす。

## 参考リンク

- OpenAI Platform: https://platform.openai.com
- OpenAI Images API仕様: https://platform.openai.com/docs/api-reference/images
- OpenAI Pricing: https://openai.com/pricing
- OpenAI Usage Policies: https://openai.com/policies/usage-policies
- Python OpenAI Library: https://github.com/openai/openai-python

---

本記事の情報は2026年2月15日時点のものです。OpenAI Images APIのモデル、価格、パラメータは変更される可能性があります。最新情報はOpenAI公式サイトをご確認ください。
