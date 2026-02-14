---
title: "Gemini Skill - ClawdbotでGoogle Gemini APIを活用"
description: "Clawdbot向けGemini Skillを利用して、Google Gemini APIをワンショットQ&A、要約、生成タスクに活用する方法を解説します。"
publishedAt: "2026-02-14"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Gemini", "Google AI", "API統合", "生成AI"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Gemini, Google AI, API統合, 生成AI"
---

# Gemini Skill - Google Gemini CLIでQ&A・要約・生成を実現

Gemini Skillは、Google社が提供するGemini AI APIをClawdbot Agentから利用可能にする統合機能である。本SkillによりGemini CLIツールを経由して、質問応答、文書要約、コンテンツ生成等のタスクをプログラマティックに実行できる。

## 概要

Gemini APIは、Google DeepMindが開発した大規模言語モデルGeminiシリーズへのアクセスを提供する。2026年2月時点で、以下のモデルが利用可能である。

| モデル名 | コンテキスト長 | 主な用途 |
|---------|--------------|---------|
| Gemini 2.0 Flash | 1,048,576 tokens | 高速推論、チャット |
| Gemini 2.0 Flash Thinking | 32,768 tokens | 論理的推論、数学 |
| Gemini 2.5 Pro | 2,097,152 tokens | 長文解析、複雑なタスク |

Gemini Skillは、gemini-cli（https://github.com/google/generative-ai-js）のNode.js実装をラップし、Clawdbot Agent環境で簡易に利用できる形式で提供する。

## 技術的仕様

### システム要件

- Clawdbot Agent 0.9.0以降
- Node.js 18.0以降
- Gemini CLI（`npm install -g gemini-cli`）
- Google AI Studio APIキー（https://aistudio.google.com/app/apikey）

### インストール

```bash
# Gemini CLIのインストール
npm install -g gemini-cli

# Gemini Skillのインストール
clawdhub install gemini

# APIキーの設定
export GEMINI_API_KEY="your_api_key_here"
```

### 提供されるコマンド

Gemini Skillは以下の機能を提供する。

```bash
# 質問応答（Q&A）
clawdbot skill gemini ask "What is the capital of France?"

# テキスト要約
clawdbot skill gemini summarize \
  --file document.txt \
  --max-length 500

# コンテンツ生成
clawdbot skill gemini generate \
  --prompt "Write a blog post about AI ethics" \
  --length 1000 \
  --output blog-post.md

# マルチモーダル処理（画像 + テキスト）
clawdbot skill gemini analyze-image \
  --image photo.jpg \
  --prompt "Describe the contents of this image"

# コード生成
clawdbot skill gemini code \
  --language python \
  --description "Create a function to calculate Fibonacci numbers"
```

## 主要機能

### 1. 質問応答（Q&A）

自然言語での質問に対して回答を生成する。

```javascript
// JavaScript APIの使用例
const gemini = require('clawdbot-skill-gemini');

async function askQuestion() {
  const response = await gemini.ask({
    question: 'Explain quantum computing in simple terms',
    model: 'gemini-2.5-pro',
    maxTokens: 500
  });
  
  console.log(response.answer);
}
```

レスポンス例:
```
Quantum computing is a type of computing that leverages quantum mechanics 
principles, such as superposition and entanglement, to process information 
in fundamentally different ways than classical computers...
```

### 2. 文書要約

長文テキストを指定された長さに要約する。

```bash
# 長文記事の要約
clawdbot skill gemini summarize \
  --url https://example.com/long-article \
  --max-length 300 \
  --format bullet-points
```

対応フォーマット:
- `paragraph`: 段落形式
- `bullet-points`: 箇条書き
- `tldr`: 超簡潔版（TL;DR形式）

### 3. コンテンツ生成

指定されたプロンプトに基づいて、ブログ記事、メール文面、マーケティングコピー等を生成する。

```bash
# ブログ記事生成
clawdbot skill gemini generate \
  --prompt "Write a technical blog post about Kubernetes best practices" \
  --tone professional \
  --length 1500 \
  --include-code-examples \
  --output k8s-best-practices.md
```

### 4. マルチモーダル処理

Gemini 2.5 Proモデルは画像、動画、音声の入力に対応している。

```bash
# 画像内容の分析
clawdbot skill gemini analyze-image \
  --image product-photo.jpg \
  --prompt "List all visible defects in this product image" \
  --output defects-report.txt

# 動画解析
clawdbot skill gemini analyze-video \
  --video presentation.mp4 \
  --prompt "Summarize the key points of this presentation" \
  --timestamps
```

### 5. コード生成・解析

プログラミング言語別にコード生成、バグ検出、リファクタリング提案を実行する。

```bash
# Pythonコード生成
clawdbot skill gemini code \
  --language python \
  --description "Create a RESTful API using FastAPI for user management" \
  --include-tests \
  --output api.py

# コードレビュー
clawdbot skill gemini review-code \
  --file src/app.js \
  --focus security \
  --output review-report.md
```

## API仕様

Gemini SkillはClawdbot Gateway経由でREST APIとして利用可能である。

### エンドポイント例

```bash
POST /api/skills/gemini/ask
Content-Type: application/json

{
  "question": "What are the benefits of serverless architecture?",
  "model": "gemini-2.5-pro",
  "maxTokens": 800,
  "temperature": 0.7
}
```

レスポンス:
```json
{
  "answer": "Serverless architecture offers several key benefits...",
  "model": "gemini-2.5-pro",
  "tokenUsage": {
    "input": 15,
    "output": 245
  },
  "finishReason": "STOP"
}
```

### パラメータ

| パラメータ | 型 | 説明 | デフォルト値 |
|----------|------|------|------------|
| model | string | 使用するGeminiモデル | gemini-2.0-flash |
| temperature | number | 生成の確率性（0.0-2.0） | 0.7 |
| maxTokens | number | 最大出力トークン数 | 2048 |
| topP | number | Nucleus sampling（0.0-1.0） | 0.95 |
| topK | number | Top-Kサンプリング | 40 |

## 料金体系

Gemini APIの料金は、2026年2月時点で以下の通り。

### 無料枠

- Gemini 2.0 Flash: 1,500リクエスト/日、150万トークン/日
- Gemini 2.5 Pro: 50リクエスト/日、100万トークン/日

### 有料プラン（Google AI Studio Pro）

| モデル | 入力（1M tokens） | 出力（1M tokens） |
|--------|------------------|------------------|
| Gemini 2.0 Flash | $0.075 | $0.30 |
| Gemini 2.5 Pro | $1.25 | $5.00 |
| Gemini 2.0 Flash Thinking | $0.15 | $0.60 |

画像・動画処理:
- 画像: $0.00025/枚
- 動画: $0.002/秒

## 実装例

### バッチ処理

複数のテキストファイルを一括要約する。

```javascript
const gemini = require('clawdbot-skill-gemini');
const fs = require('fs').promises;
const path = require('path');

async function batchSummarize(directory) {
  const files = await fs.readdir(directory);
  const txtFiles = files.filter(f => f.endsWith('.txt'));
  
  for (const file of txtFiles) {
    const content = await fs.readFile(path.join(directory, file), 'utf8');
    const summary = await gemini.summarize({
      text: content,
      maxLength: 300,
      format: 'paragraph'
    });
    
    await fs.writeFile(
      path.join(directory, `${file}.summary.txt`),
      summary.text
    );
    
    console.log(`Summarized: ${file}`);
  }
}

batchSummarize('./documents');
```

### ストリーミング応答

リアルタイムで生成結果を受信する。

```javascript
async function streamResponse() {
  const stream = await gemini.askStream({
    question: 'Explain the history of the Internet',
    model: 'gemini-2.5-pro'
  });
  
  for await (const chunk of stream) {
    process.stdout.write(chunk.text);
  }
}
```

## ユースケース

### 1. カスタマーサポート自動化

顧客からの問い合わせに対して自動応答を生成する。

```bash
clawdbot skill gemini ask \
  --question "How do I reset my password?" \
  --context "$(cat support-knowledge-base.txt)" \
  --tone helpful
```

### 2. コンテンツ生成パイプライン

ブログ記事を自動生成し、編集後に公開する。

```bash
#!/bin/bash
# generate-blog-post.sh

TOPIC="Best practices for microservices architecture"

clawdbot skill gemini generate \
  --prompt "Write a comprehensive blog post about: $TOPIC" \
  --length 2000 \
  --include-examples \
  --output draft.md

# 生成後の編集・レビューフロー
code draft.md
```

### 3. 研究論文要約

学術論文PDFを要約し、研究ノートに追加する。

```bash
# PDFからテキスト抽出 → 要約
pdftotext research-paper.pdf - | \
  clawdbot skill gemini summarize \
    --max-length 500 \
    --format bullet-points >> research-notes.md
```

## 制限事項

- API レート制限: 無料プランでは1分あたり15リクエスト、有料プランでは1分あたり1,000リクエスト
- コンテキスト長制限: Gemini 2.0 Flashで約100万トークン、Gemini 2.5 Proで約200万トークン
- 画像入力: 最大16枚まで同時処理可能
- 動画入力: 最大1時間まで

## セキュリティとプライバシー

Gemini APIの利用にあたり、以下のデータ取り扱いポリシーが適用される（2026年2月時点）。

- 無料プランのデータ: モデル改善のために利用される可能性がある
- 有料プラン（Google AI Studio Pro）: データは30日後に削除され、モデル訓練には使用されない
- 機密情報: 企業内機密情報を含むデータの送信は推奨されない

## 参考リンク

- Google AI Studio: https://aistudio.google.com/
- Gemini API公式ドキュメント: https://ai.google.dev/docs
- Gemini CLI GitHub: https://github.com/google/generative-ai-js
- 料金詳細: https://ai.google.dev/pricing
- Clawdbot公式ドキュメント: https://docs.clawd.bot/skills/gemini

---

*本記事の情報は2026年2月14日時点のものです。各サービスの機能や料金は変更される可能性があります。最新情報は各公式サイトをご確認ください。*
