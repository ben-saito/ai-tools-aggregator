---
title: "Summarize Skill - URL・ローカルファイル・YouTube動画から要約・トランスクリプトを抽出するClawdbot拡張機能"
description: "Clawdbot向けSummarize Skillを利用して、WebページURL、ローカルファイル、YouTube動画から要約テキストやトランスクリプトを自動抽出する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Summarize", "要約", "トランスクリプト", "YouTube", "CLI", "LLM", "Firecrawl", "Apify"]
featured: false
lang: "ja"
seo:
  keywords: "Summarize, Clawdbot, 要約, トランスクリプト, YouTube, PDF, LLM, Firecrawl, Apify, Claude, GPT"
---

# Summarize Skill - URL・ローカルファイル・YouTube動画から要約・トランスクリプトを抽出するClawdbot拡張機能

Clawdbot向けのSummarize Skillが提供する`summarize`コマンドにより、WebページURL、ローカルファイル（PDF、Markdown、テキストなど）、YouTube動画から要約テキストやトランスクリプトを自動抽出できる。本スキルは、複数の大規模言語モデル（LLM）に対応し、Firecrawl・Apify統合による高精度コンテンツ抽出機能を提供する。

## 概要

Summarize Skillは、コンテンツ要約とトランスクリプト抽出を単一のCLIツールで実現するソリューションである。Clawdbotのスキルシステムに統合されており、AIエージェントが「このリンクの内容は？」「YouTube動画を文字起こしして」といった自然言語指示を受け取り、自動的に要約またはトランスクリプトを返す仕組みを提供する。

公式サイト（https://summarize.sh）によれば、本ツールはHomebrewパッケージとして配布されており、OpenAI、Anthropic、xAI、Google Geminiなど主要なLLMプロバイダーをサポートする設計となっている。

## 技術的仕様

### システム要件

- macOS、Linux、またはWindows（WSL2推奨）
- `summarize`バイナリ（Homebrew経由でインストール）
- LLMプロバイダーのAPIキー（環境変数で設定）

### インストール方法

Clawdbot環境では、以下のコマンドでインストールが実行される。

```bash
brew install steipete/tap/summarize
```

インストール後、`summarize`コマンドがシステムPATHに追加される。

### 環境変数

以下のいずれかのAPIキーを設定する。

```bash
# OpenAI
export OPENAI_API_KEY="sk-..."

# Anthropic
export ANTHROPIC_API_KEY="sk-ant-..."

# xAI
export XAI_API_KEY="xai-..."

# Google Gemini（いずれかのエイリアスを使用）
export GEMINI_API_KEY="AIza..."
export GOOGLE_GENERATIVE_AI_API_KEY="AIza..."
export GOOGLE_API_KEY="AIza..."
```

オプション（高精度抽出用）:
```bash
export FIRECRAWL_API_KEY="fc-..."  # ブロックされたサイトの抽出
export APIFY_API_TOKEN="apify_api_..."  # YouTubeトランスクリプト抽出
```

### 設定ファイル

オプションの設定ファイル: `~/.summarize/config.json`

```json
{
  "model": "openai/gpt-5.2",
  "length": "medium"
}
```

## 主要機能

### 1. URL要約

WebページのURLから要約テキストを生成する。

```bash
summarize "https://example.com" --model google/gemini-3-flash-preview
```

### 2. ローカルファイル要約

PDF、Markdown、テキストファイルなどから要約を生成する。

```bash
summarize "/path/to/document.pdf" --model google/gemini-3-flash-preview
```

### 3. YouTube動画の要約・トランスクリプト抽出

YouTube動画URLから要約またはトランスクリプトを取得する。

```bash
# 要約生成
summarize "https://youtu.be/dQw4w9WgXcQ" --youtube auto

# トランスクリプトのみ抽出
summarize "https://youtu.be/dQw4w9WgXcQ" --youtube auto --extract-only
```

### 4. 要約長の調整

出力される要約の長さを制御できる。

```bash
summarize "https://example.com" --length short
summarize "https://example.com" --length medium
summarize "https://example.com" --length long
summarize "https://example.com" --length xl
summarize "https://example.com" --length xxl

# カスタム文字数指定
summarize "https://example.com" --length 500
```

### 5. 最大出力トークン数指定

LLMの最大出力トークン数を制限する。

```bash
summarize "https://example.com" --max-output-tokens 1000
```

### 6. コンテンツ抽出のみ（要約なし）

URLからテキストを抽出するが、LLMによる要約は実行しない。

```bash
summarize "https://example.com" --extract-only
```

### 7. Firecrawl統合

JavaScriptレンダリングが必要なサイトやブロックされたサイトからコンテンツを抽出する。

```bash
summarize "https://example.com" --firecrawl always
```

オプション:
- `auto`: 標準抽出が失敗した場合にFirecrawlを使用
- `off`: Firecrawlを使用しない
- `always`: 常にFirecrawlを使用

### 8. JSON出力

スクリプト統合用に機械可読形式で出力する。

```bash
summarize "https://example.com" --json
```

## 実装例

### 例1: 複数URLの一括要約

```bash
#!/bin/bash
# ニュース記事URLのリストから要約を生成

urls=(
  "https://news.example.com/article1"
  "https://news.example.com/article2"
  "https://news.example.com/article3"
)

for url in "${urls[@]}"; do
  echo "Summarizing: $url"
  summarize "$url" --length short --model google/gemini-3-flash-preview
  echo "---"
done
```

### 例2: YouTube動画トランスクリプトの検索可能化

```bash
#!/bin/bash
# YouTube動画のトランスクリプトを抽出してテキストファイルに保存

VIDEO_URL="https://youtu.be/dQw4w9WgXcQ"
OUTPUT_FILE="transcript_$(date +%Y%m%d_%H%M%S).txt"

summarize "$VIDEO_URL" --youtube auto --extract-only > "$OUTPUT_FILE"
echo "Transcript saved to: $OUTPUT_FILE"
```

### 例3: Node.js統合による自動要約パイプライン

```javascript
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

async function summarizeURL(url, length = 'medium') {
  const command = `summarize "${url}" --length ${length} --json`;
  
  try {
    const { stdout } = await execPromise(command);
    const result = JSON.parse(stdout);
    return result;
  } catch (error) {
    console.error(`Error summarizing ${url}: ${error.message}`);
    throw error;
  }
}

// 使用例
(async () => {
  const summary = await summarizeURL('https://example.com/article', 'short');
  console.log(summary);
})();
```

### 例4: PDF研究論文の自動要約

```bash
#!/bin/bash
# 複数のPDFファイルから要約を生成して1つのMarkdownファイルに統合

OUTPUT_FILE="summaries.md"
echo "# Research Paper Summaries" > "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

for pdf in *.pdf; do
  echo "## $(basename "$pdf" .pdf)" >> "$OUTPUT_FILE"
  summarize "$pdf" --length long --model openai/gpt-5.2 >> "$OUTPUT_FILE"
  echo "" >> "$OUTPUT_FILE"
  echo "---" >> "$OUTPUT_FILE"
  echo "" >> "$OUTPUT_FILE"
done

echo "Summaries saved to: $OUTPUT_FILE"
```

### 例5: Cronジョブによる定期的なニュース要約

```bash
# crontab -e に追加
# 毎日9:00にトップニュースを要約してメール送信

0 9 * * * /usr/local/bin/summarize "https://news.example.com/top" --length medium | mail -s "Daily News Summary" user@example.com
```

## ユースケース

### 1. AIエージェントによるリンク解析

Clawdbotエージェントがユーザーから共有されたURLの内容を自動要約し、会話文脈に組み込む環境を構築できる。

### 2. YouTube動画の文字起こし

動画コンテンツを検索可能なテキストに変換し、ドキュメントやブログ記事として再利用する。

### 3. 研究論文の効率的なレビュー

大量のPDF論文から要約を一括生成し、関連研究の迅速なスクリーニングを実現する。

### 4. ニュースアグリゲーション

複数のニュースサイトから記事を要約し、ダイジェストレポートを自動生成する。

### 5. 競合分析

競合他社のブログ記事やプレスリリースを定期的に要約し、トレンド分析を効率化する。

## 制限事項・セキュリティ考慮事項

### 制限事項

1. **LLM APIキー必須**: OpenAI、Anthropic、xAI、Google GeminiいずれかのAPIキーが必要
2. **YouTube動画の長さ**: 長時間動画（2時間以上）のトランスクリプト抽出は失敗する可能性がある
3. **PDF処理**: スキャンされたPDF（画像ベース）はOCR処理が必要なため、テキスト抽出精度が低下する
4. **API料金**: LLMプロバイダーの従量課金制により、大量の要約生成はコストが発生する
   - 2026年2月時点の料金例:
     - Google Gemini 3 Flash: $0.075/百万入力トークン、$0.30/百万出力トークン
     - OpenAI GPT-5.2: $2.00/百万入力トークン、$6.00/百万出力トークン

### セキュリティ考慮事項

1. **APIキーの管理**: 環境変数に複数のAPIキーを保存するため、以下の対策を推奨
   - `.bashrc`や`.zshrc`での設定を避け、専用の認証情報管理ツール（1Password、AWS Secrets Managerなど）を使用
   - APIキーのローテーションを定期的に実行

2. **プライベートコンテンツの送信リスク**: 社内文書やプライベートPDFをLLM APIに送信する際、データがプロバイダーのサーバーに送信されることに注意
   - 機密情報を含むファイルは、オンプレミスLLM（Llama、Mistralなど）の使用を検討

3. **URL検証**: ユーザー入力のURLをそのまま処理する場合、以下のリスクがある
   - SSRF（Server-Side Request Forgery）攻撃
   - マルウェア配布サイトへのアクセス
   - フィッシングサイトの要約を通じた正当性の誤認

4. **出力コンテンツの検証**: LLMによる要約は幻覚（Hallucination）を含む可能性があるため、重要な意思決定には元ソースの確認が必要

## 参考リンク

- Summarize公式サイト: https://summarize.sh
- Summarize GitHubリポジトリ: https://github.com/steipete/summarize
- OpenAI API Documentation: https://platform.openai.com/docs
- Anthropic Claude API Documentation: https://docs.anthropic.com/
- Google Gemini API Documentation: https://ai.google.dev/docs
- xAI Grok API Documentation: https://docs.x.ai/
- Firecrawl: https://firecrawl.dev/
- Apify: https://apify.com/
- Clawdbot公式サイト: https://clawdbot.io/

---

本記事の情報は2026年2月15日時点のものです。Summarize Skillの機能、コマンド仕様、インストール方法、LLMプロバイダーのAPI料金は変更される可能性があります。最新情報は公式サイトおよびドキュメントをご確認ください。
