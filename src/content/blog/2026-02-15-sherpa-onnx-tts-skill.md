---
title: "Sherpa ONNX TTS Skill - オフライン音声合成をClawdbot環境で実現"
description: "Clawdbot向けSherpa ONNX TTS Skillを利用して、クラウド不要のローカル音声合成環境を構築する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "TTS", "音声合成", "Sherpa ONNX", "オフライン", "プライバシー"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Sherpa ONNX, TTS, 音声合成, オフライン, ローカル処理, プライバシー, ONNX Runtime"
---

# Sherpa ONNX TTS Skill - オフライン音声合成をClawdbot環境で実現

2026年現在、音声合成（Text-to-Speech, TTS）サービスの多くはクラウドベースで提供されており、音声データをインターネット経由で送信する必要がある。これに対し、Sherpa ONNX TTS Skillは、完全にローカル環境で動作する音声合成機能をClawdbotに提供し、ネットワーク接続やクラウドサービスへの依存を排除する。

本記事では、Sherpa ONNX TTS Skillの技術的仕様、導入方法、実装パターンを解説する。

## 選定基準

本記事で解説するSherpa ONNX TTS Skillは、以下の特性を持つ:

- オフライン動作（クラウド接続不要）
- ONNX Runtime採用による軽量実行
- macOS、Linux、Windows対応
- Piperモデルによる高品質な音声合成

---

## 技術的背景

### Sherpa ONNXとは

Sherpa ONNX（https://github.com/k2-fsa/sherpa-onnx）は、オープンソースの音声処理ライブラリであり、ONNX Runtime上で音声合成、音声認識を実行するツールキットである。開発元のk2-fsaは、音声処理研究コミュニティで知られており、2024年以降、定期的にリリースを更新している。

### ONNX Runtime採用の利点

ONNX（Open Neural Network Exchange）は、機械学習モデルの標準形式であり、各種ハードウェア（CPU、GPU、NPU）で効率的に実行できる。Sherpa ONNXは、この標準を活用することで、以下を実現している:

- プラットフォーム非依存性（macOS、Linux、Windows対応）
- 低レイテンシ実行（数百ミリ秒で音声生成）
- GPU不要（CPU実行で十分な性能）

### Piperモデル

Sherpa ONNX TTS Skillがデフォルトで採用するPiperモデル（https://github.com/rhasspy/piper）は、Rhaspyプロジェクトが開発した高品質な英語音声合成モデルである。en_US-lessac（高品質版）は、約45MBのファイルサイズで、自然な発音を提供する。

---

## システム要件とインストール方法

### 動作環境

- OS: macOS（Universal 2バイナリ）、Linux x64、Windows x64
- Node.js: 22.22.0以上（Clawdbotの実行環境）
- ディスク容量: 約100MB（ランタイム約50MB + モデル約45MB）

### インストール手順

Sherpa ONNX TTS Skillは、Clawdbotのスキルシステムを通じて導入する。インストーラは、OS別にランタイムとモデルを自動ダウンロードする。

**1. ランタイムのダウンロード**

インストーラは、以下のURLからSherpa ONNX v1.12.23をダウンロードし、`~/.clawdbot/tools/sherpa-onnx-tts/runtime`に展開する:

- macOS: https://github.com/k2-fsa/sherpa-onnx/releases/download/v1.12.23/sherpa-onnx-v1.12.23-osx-universal2-shared.tar.bz2
- Linux x64: https://github.com/k2-fsa/sherpa-onnx/releases/download/v1.12.23/sherpa-onnx-v1.12.23-linux-x64-shared.tar.bz2
- Windows x64: https://github.com/k2-fsa/sherpa-onnx/releases/download/v1.12.23/sherpa-onnx-v1.12.23-win-x64-shared.tar.bz2

**2. 音声モデルのダウンロード**

デフォルトでは、Piper en_US lessac（高品質版）が`~/.clawdbot/tools/sherpa-onnx-tts/models`に配置される:

- URL: https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/vits-piper-en_US-lessac-high.tar.bz2

**3. 設定ファイルの更新**

`~/.clawdbot/clawdbot.json`に以下を追加:

```json
{
  "skills": {
    "entries": {
      "sherpa-onnx-tts": {
        "env": {
          "SHERPA_ONNX_RUNTIME_DIR": "~/.clawdbot/tools/sherpa-onnx-tts/runtime",
          "SHERPA_ONNX_MODEL_DIR": "~/.clawdbot/tools/sherpa-onnx-tts/models/vits-piper-en_US-lessac-high"
        }
      }
    }
  }
}
```

---

## 主要機能とコマンド例

### 基本的な音声合成

Sherpa ONNX TTS Skillは、テキストを入力として受け取り、WAVファイルを出力する。

```bash
# 基本的な音声合成
sherpa-onnx-tts -o ./output.wav "Hello from local TTS."

# 長文の音声合成
sherpa-onnx-tts -o ./long_text.wav "This is a demonstration of offline text-to-speech synthesis using Sherpa ONNX runtime on ONNX models."
```

### 環境変数による動作制御

以下の環境変数で、ランタイムとモデルの場所を指定する:

- `SHERPA_ONNX_RUNTIME_DIR`: ランタイムのディレクトリ
- `SHERPA_ONNX_MODEL_DIR`: モデルのディレクトリ
- `SHERPA_ONNX_MODEL_FILE`: 複数の`.onnx`ファイルがある場合に特定のモデルを指定

### カスタムモデルの利用

Sherpa ONNXプロジェクトは、複数の音声モデルを公開している（https://github.com/k2-fsa/sherpa-onnx/releases/tag/tts-models）。他の言語や音声スタイルを利用する場合は、対応するモデルをダウンロードし、`SHERPA_ONNX_MODEL_DIR`を更新する。

```bash
# 例: en_GB-semaine（イギリス英語）を使用
export SHERPA_ONNX_MODEL_DIR=~/.clawdbot/tools/sherpa-onnx-tts/models/vits-piper-en_GB-semaine-medium
sherpa-onnx-tts -o ./uk_voice.wav "Good afternoon, this is British English."
```

---

## 実装例

### 例1: Node.jsからの音声合成呼び出し

Clawdbotのスキル内で、`child_process`を使って音声ファイルを生成する。

```javascript
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function generateSpeech(text, outputPath) {
  const command = `sherpa-onnx-tts -o "${outputPath}" "${text}"`;
  await execAsync(command);
  return outputPath;
}

// 使用例
const audioFile = await generateSpeech("Hello from Clawdbot.", "./hello.wav");
console.log(`Audio file created: ${audioFile}`);
```

### 例2: バッチ処理による複数ファイル生成

複数のテキストを一括で音声化する。

```javascript
async function batchGenerate(textList) {
  const results = [];
  for (let i = 0; i < textList.length; i++) {
    const outputPath = `./audio_${i}.wav`;
    await generateSpeech(textList[i], outputPath);
    results.push(outputPath);
  }
  return results;
}

// 使用例
const texts = [
  "First announcement.",
  "Second announcement.",
  "Third announcement."
];
const files = await batchGenerate(texts);
console.log(`Generated ${files.length} audio files.`);
```

### 例3: エラーハンドリング付きの実装

音声合成失敗時のリトライ処理を含める。

```javascript
async function generateSpeechWithRetry(text, outputPath, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const command = `sherpa-onnx-tts -o "${outputPath}" "${text}"`;
      await execAsync(command);
      return outputPath;
    } catch (error) {
      console.error(`Attempt ${i + 1} failed: ${error.message}`);
      if (i === retries - 1) throw error;
    }
  }
}

// 使用例
try {
  const audioFile = await generateSpeechWithRetry("Test message.", "./test.wav");
  console.log(`Success: ${audioFile}`);
} catch (error) {
  console.error("Failed after retries:", error);
}
```

### 例4: ストリーミングログ出力

音声合成の進捗をリアルタイムで確認する。

```bash
#!/bin/bash

TEXT="This is a demonstration of streaming log output during speech synthesis."
OUTPUT="./stream_demo.wav"

echo "Starting speech synthesis..."
sherpa-onnx-tts -o "$OUTPUT" "$TEXT" 2>&1 | while IFS= read -r line; do
  echo "[TTS] $line"
done
echo "Synthesis complete: $OUTPUT"
```

### 例5: カスタムモデル切り替えスクリプト

複数のモデルを切り替えて音声を生成する。

```bash
#!/bin/bash

MODELS=(
  "vits-piper-en_US-lessac-high"
  "vits-piper-en_GB-semaine-medium"
)

TEXT="Testing multiple voice models."

for MODEL in "${MODELS[@]}"; do
  export SHERPA_ONNX_MODEL_DIR=~/.clawdbot/tools/sherpa-onnx-tts/models/$MODEL
  OUTPUT="./${MODEL}.wav"
  echo "Generating with $MODEL..."
  sherpa-onnx-tts -o "$OUTPUT" "$TEXT"
done

echo "All models tested."
```

---

## ユースケース

### プライバシー保護が必要な環境

医療、法務、金融など、機密性の高いテキストをクラウドに送信できない環境で、ローカル音声合成を実現する。

### オフライン環境での動作

インターネット接続が制限されている環境（航空機内、船舶、リモート地域）でも音声合成を利用できる。

### リアルタイム通知システム

Clawdbotのイベント通知を音声化し、スピーカーから再生する。

### 教育・研修コンテンツ生成

大量のテキストベースの教材を音声化し、学習効率を向上させる。

---

## 制限事項とセキュリティ考慮事項

### 制限事項

- 対応言語はモデル依存（デフォルトは英語のみ）
- 音声品質はクラウドTTS（Google TTS、Amazon Polly等）に劣る場合がある
- 1 MBを超える大規模テキストの処理には時間がかかる

### セキュリティ考慮事項

- ローカル実行のため、ネットワーク経由の情報漏洩リスクは存在しない
- 生成された音声ファイルは、適切なアクセス権限で保護する必要がある
- モデルファイルの改ざん防止のため、公式リリースからのみダウンロードすることを推奨

---

## 参考リンク

- Sherpa ONNX公式リポジトリ: https://github.com/k2-fsa/sherpa-onnx
- Piperプロジェクト: https://github.com/rhasspy/piper
- ONNX Runtime: https://onnxruntime.ai/
- Clawdbot公式サイト: https://clawdbot.com/

---

本記事の情報は2026年2月15日時点のものです。Sherpa ONNXのバージョン、モデルの種類、APIは変更される可能性があります。最新情報は各公式サイトをご確認ください。
