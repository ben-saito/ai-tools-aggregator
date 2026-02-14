---
title: "Nano Banana Pro Skill - Clawdbotで画像生成・編集"
description: "Gemini 3 Pro Image（Nano Banana Pro）を利用して、Clawdbotから高度な画像生成・編集を実現する方法を解説します。"
publishedAt: "2026-02-14T00:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Nano Banana Pro", "Gemini", "画像生成", "AI画像編集"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Nano Banana Pro, Gemini, 画像生成, AI画像編集"
---

# Nano Banana Pro Skill - Gemini 3 Pro Imageで画像生成・編集を実現

Nano Banana Pro Skillは、Google DeepMindが提供する画像生成モデルGemini 3 Pro Image（Imagen 3）をClawdbot Agentから利用可能にする統合機能である。本Skillにより、テキストプロンプトからの画像生成、既存画像の編集、スタイル変換等をプログラマティックに実行できる。

## 概要

Gemini 3 Pro Image（旧称: Imagen 3）は、Google DeepMindが開発した最新の画像生成AIモデルであり、2025年12月に正式リリースされた。テキストプロンプトから高品質な画像を生成する機能に加えて、既存画像の編集、インペインティング（部分修正）、アウトペインティング（画像拡張）にも対応している。

Nano Banana Pro Skillは、Google AI StudioおよびVertex AI経由でGemini 3 Pro Imageにアクセスし、以下の機能を提供する。

- テキストからの画像生成（Text-to-Image）
- 画像編集（Image-to-Image）
- スタイル変換
- インペインティング（マスク領域の修正）
- アウトペインティング（画像の拡張）

## 技術的仕様

### システム要件

- Clawdbot Agent 0.9.0以降
- Node.js 18.0以降
- Google AI Studio APIキーまたはGoogle Cloud Vertex AI認証
- 画像処理ライブラリ（sharp、jimp等、オプション）

### 対応モデル

| モデル名 | 解像度 | 主な用途 |
|---------|--------|---------|
| Gemini 3 Pro Image | 最大2048x2048 | 高品質画像生成 |
| Gemini 3 Flash Image | 最大1024x1024 | 高速画像生成 |

### インストール

```bash
# Nano Banana Pro Skillのインストール
clawdhub install nano-banana-pro

# APIキーの設定
export GOOGLE_AI_STUDIO_KEY="your_api_key_here"

# または、Vertex AI認証（Google Cloud）
gcloud auth application-default login
```

### 提供されるコマンド

```bash
# テキストから画像生成
clawdbot skill nano-banana-pro generate \
  --prompt "A futuristic cityscape at sunset" \
  --size 1024x1024 \
  --output city.png

# 複数画像の生成
clawdbot skill nano-banana-pro generate \
  --prompt "A red apple on a wooden table" \
  --count 4 \
  --output-dir ./generated

# 画像編集（スタイル変換）
clawdbot skill nano-banana-pro edit \
  --input photo.jpg \
  --prompt "Convert to watercolor painting style" \
  --output watercolor.png

# インペインティング（部分修正）
clawdbot skill nano-banana-pro inpaint \
  --input portrait.jpg \
  --mask mask.png \
  --prompt "Replace background with mountain landscape" \
  --output result.png

# アウトペインティング（画像拡張）
clawdbot skill nano-banana-pro outpaint \
  --input small-image.jpg \
  --expand-direction all \
  --prompt "Extend the scenery naturally" \
  --output expanded.png
```

## 主要機能

### 1. テキストから画像生成

指定されたプロンプトに基づいて画像を生成する。

```javascript
// JavaScript APIの使用例
const nanoBananaPro = require('clawdbot-skill-nano-banana-pro');

async function generateImage() {
  const result = await nanoBananaPro.generate({
    prompt: 'A serene Japanese garden with cherry blossoms',
    negativePrompt: 'blurry, low quality, watermark',
    size: '1024x1024',
    guidanceScale: 7.5,
    steps: 50,
    seed: 12345 // 再現性のため
  });
  
  await result.saveToFile('garden.png');
  console.log(`Image saved: ${result.url}`);
}
```

### 2. 画像編集

既存画像にスタイル変換や修正を適用する。

```bash
# 写真をアニメ風に変換
clawdbot skill nano-banana-pro edit \
  --input selfie.jpg \
  --prompt "Convert to anime style, vibrant colors" \
  --strength 0.75 \
  --output anime-selfie.png
```

パラメータ:
- `strength`: 編集の強度（0.0-1.0）。0.5が標準、1.0で完全変換

### 3. インペインティング

マスク画像で指定した領域のみを修正する。

```javascript
async function removeObject() {
  const result = await nanoBananaPro.inpaint({
    input: 'photo-with-person.jpg',
    mask: 'person-mask.png', // 白: 修正対象、黒: 保持
    prompt: 'Empty background, natural scenery',
    strength: 0.9
  });
  
  await result.saveToFile('photo-without-person.jpg');
}
```

### 4. アウトペインティング

画像の外側を自然に拡張する。

```bash
# 画像の上下左右を拡張
clawdbot skill nano-banana-pro outpaint \
  --input landscape-crop.jpg \
  --expand-top 200 \
  --expand-bottom 200 \
  --expand-left 300 \
  --expand-right 300 \
  --prompt "Continue the natural landscape" \
  --output landscape-full.jpg
```

### 5. バッチ処理

複数のプロンプトから一括で画像を生成する。

```javascript
async function batchGenerate(prompts) {
  const results = await Promise.all(
    prompts.map(prompt => 
      nanoBananaPro.generate({
        prompt,
        size: '1024x1024'
      })
    )
  );
  
  for (let i = 0; i < results.length; i++) {
    await results[i].saveToFile(`image-${i + 1}.png`);
  }
}

const prompts = [
  'A sunset over the ocean',
  'A mountain landscape in winter',
  'A futuristic city at night'
];

batchGenerate(prompts);
```

## API仕様

Nano Banana Pro SkillはClawdbot Gateway経由でREST APIとして利用可能である。

### 画像生成API

```bash
POST /api/skills/nano-banana-pro/generate
Content-Type: application/json

{
  "prompt": "A serene Japanese garden with cherry blossoms",
  "negativePrompt": "blurry, low quality",
  "size": "1024x1024",
  "guidanceScale": 7.5,
  "steps": 50,
  "count": 1
}
```

レスポンス:
```json
{
  "images": [
    {
      "url": "https://storage.googleapis.com/.../image-abc123.png",
      "base64": "iVBORw0KGgoAAAANSUhEUgAA...",
      "seed": 12345,
      "size": "1024x1024"
    }
  ],
  "prompt": "A serene Japanese garden with cherry blossoms",
  "tokensUsed": 15
}
```

### パラメータ

| パラメータ | 型 | 説明 | デフォルト値 |
|----------|------|------|------------|
| prompt | string | 画像生成プロンプト（必須） | - |
| negativePrompt | string | 除外要素の指定 | "" |
| size | string | 画像サイズ（512x512, 1024x1024, 2048x2048） | 1024x1024 |
| guidanceScale | number | プロンプト忠実度（1.0-20.0） | 7.5 |
| steps | number | 生成ステップ数（10-100） | 50 |
| seed | number | ランダムシード（再現性のため） | ランダム |
| count | number | 生成枚数（1-4） | 1 |

## 料金体系

Gemini 3 Pro Imageの料金は、2026年2月時点で以下の通り。

### Google AI Studio（個人・開発者向け）

- 無料枠: 1日100枚まで
- 超過料金: $0.025/枚

### Google Cloud Vertex AI（企業向け）

| 解像度 | 料金/枚 |
|--------|---------|
| 512x512以下 | $0.020 |
| 1024x1024 | $0.040 |
| 2048x2048 | $0.080 |

## 実装例

### 1. ソーシャルメディア画像自動生成

ブログ記事のサムネイルを自動生成する。

```javascript
async function generateThumbnail(articleTitle) {
  const prompt = `
    Professional blog thumbnail image.
    Text overlay: "${articleTitle}".
    Modern design, vibrant colors, tech theme.
    Aspect ratio: 16:9.
  `;
  
  const result = await nanoBananaPro.generate({
    prompt,
    size: '1024x576', // 16:9
    guidanceScale: 8.0
  });
  
  return result.url;
}
```

### 2. 製品画像のバリエーション生成

ECサイト用に製品画像の背景を変更する。

```bash
#!/bin/bash
# generate-product-variants.sh

PRODUCT_IMAGE="product.png"

BACKGROUNDS=(
  "white studio background"
  "natural outdoor setting"
  "modern interior design"
  "minimalist Japanese style"
)

for bg in "${BACKGROUNDS[@]}"; do
  clawdbot skill nano-banana-pro edit \
    --input "$PRODUCT_IMAGE" \
    --prompt "Product with $bg" \
    --output "product-${bg// /-}.png"
done
```

### 3. AIアバター生成

ユーザーの写真からアバター画像を生成する。

```javascript
async function generateAvatar(userPhoto, style) {
  const styles = {
    'anime': 'Anime character, vibrant colors, detailed eyes',
    'cartoon': 'Cartoon style, friendly expression, simple shapes',
    'realistic': 'Photorealistic portrait, professional lighting'
  };
  
  const result = await nanoBananaPro.edit({
    input: userPhoto,
    prompt: `Portrait in ${styles[style]}`,
    strength: 0.8
  });
  
  return result;
}
```

## ユースケース

### 1. コンテンツ制作自動化

ブログ記事、SNS投稿用の画像を自動生成する。

```javascript
// WordPress連携例
async function publishBlogWithImage(title, content) {
  // サムネイル生成
  const thumbnail = await nanoBananaPro.generate({
    prompt: `Blog thumbnail for article: ${title}`,
    size: '1200x630' // OGP画像サイズ
  });
  
  // WordPressに投稿
  await wordpress.createPost({
    title,
    content,
    featured_media: await uploadToWordPress(thumbnail)
  });
}
```

### 2. ECサイト商品画像生成

製品写真の背景を統一する。

```bash
# 商品画像の背景を白に統一
for img in products/*.jpg; do
  clawdbot skill nano-banana-pro edit \
    --input "$img" \
    --prompt "Product on pure white background, professional lighting" \
    --output "processed/$img"
done
```

### 3. マーケティング素材生成

広告用のバナー画像を複数パターン生成する。

```javascript
async function generateAdVariants(productName, tagline) {
  const themes = [
    'vibrant summer theme',
    'elegant luxury theme',
    'playful colorful theme'
  ];
  
  const variants = await Promise.all(
    themes.map(theme => 
      nanoBananaPro.generate({
        prompt: `
          Advertisement banner for ${productName}.
          Tagline: "${tagline}".
          ${theme}.
          Professional marketing design.
        `,
        size: '1200x628'
      })
    )
  );
  
  return variants;
}
```

## 制限事項

- API レート制限: Google AI Studioで1分あたり15リクエスト、Vertex AIで1分あたり60リクエスト
- 最大解像度: 2048x2048ピクセル
- バッチ生成: 1回のリクエストで最大4枚まで
- 禁止コンテンツ: 暴力的、性的、違法な内容は生成不可（自動フィルタリング）

## コンテンツポリシー

Gemini 3 Pro Imageの使用にあたり、以下のコンテンツポリシーが適用される。

### 禁止事項

- 暴力的・過激な表現
- 性的・露骨な内容
- 違法行為の描写
- 著名人の肖像権侵害
- 著作権侵害（既存キャラクター等の模倣）

生成されたコンテンツは自動的にフィルタリングされ、ポリシー違反の場合はエラーが返される。

## セキュリティとプライバシー

- 生成画像のメタデータ: 画像にはGeminiによる生成であることを示す電子透かし（watermark）が埋め込まれる
- データ保持期間: Google AI Studioでは30日後に削除、Vertex AIでは即座に削除
- 商用利用: 生成画像は商用利用可能（ライセンス確認推奨）

## 参考リンク

- Google AI Studio: https://aistudio.google.com/
- Imagen 3公式情報: https://deepmind.google/technologies/imagen-3/
- Vertex AI公式ドキュメント: https://cloud.google.com/vertex-ai/docs
- 料金詳細: https://ai.google.dev/pricing
- Clawdbot公式ドキュメント: https://docs.clawd.bot/skills/nano-banana-pro

---

*本記事の情報は2026年2月14日時点のものです。各サービスの機能や料金は変更される可能性があります。最新情報は各公式サイトをご確認ください。*
