---
title: "OpenAI Whisper Skill - ローカル音声認識をClawdbotに統合"
description: "Clawdbot向けOpenAI Whisper Skillを利用して、APIキー不要のローカル音声認識による文字起こし・翻訳機能を実現する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "OpenAI Whisper", "音声認識", "文字起こし", "翻訳", "CLI", "機械学習"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, OpenAI Whisper, 音声認識, 文字起こし, 翻訳, CLI, ローカル実行, APIキー不要, 多言語対応"
---

# OpenAI Whisper Skill - ローカル音声認識をClawdbotに統合

## 概要

Clawdbot向けOpenAI Whisper Skillは、OpenAIが開発した音声認識モデル「Whisper」をローカル環境で実行する機能を提供するスキルである。Whisper CLIをバックエンドとして利用し、音声ファイルの文字起こし（transcription）および多言語音声の英語への翻訳（translation）をAPIキー不要で実行できる。

本スキルは、2022年9月にOpenAIが公開したオープンソースモデルに基づいており、68万時間の多言語データで訓練された高精度の音声認識機能を無料で利用可能である。

## 技術的仕様

### システム要件

- macOS / Linux（Homebrewサポート環境）
- Python 3.8以上
- FFmpeg（音声ファイルのデコードに使用）
- 推奨スペック:
  - CPU: Intel Core i5以上（またはApple Silicon）
  - RAM: 4GB以上（largeモデルは8GB以上推奨）
  - ストレージ: 10GB以上（モデルファイルキャッシュ用）

### インストール方法

**Homebrew経由:**
```bash
brew install openai-whisper
```

**pip経由:**
```bash
pip install openai-whisper
```

**FFmpegのインストール（必須）:**
```bash
brew install ffmpeg
```

### モデルサイズと精度

Whisperは以下の5種類のモデルサイズを提供している（OpenAIの公式ドキュメントによる）:

| モデル名 | パラメータ数 | 英語専用モデル | 必要VRAM | 相対速度 |
|---------|------------|--------------|---------|---------|
| tiny    | 39M        | tiny.en      | ~1GB    | ~32x    |
| base    | 74M        | base.en      | ~1GB    | ~16x    |
| small   | 244M       | small.en     | ~2GB    | ~6x     |
| medium  | 769M       | medium.en    | ~5GB    | ~2x     |
| large   | 1550M      | なし         | ~10GB   | 1x      |

デフォルトモデルは`turbo`（このインストールでの設定）または`small`（汎用）である。

## 主要機能

### 1. 音声ファイルの文字起こし

**基本的な文字起こし:**
```bash
whisper /path/to/audio.mp3 --model medium --output_format txt --output_dir .
```

**出力形式の指定:**
- `txt`: プレーンテキスト
- `srt`: 字幕ファイル（タイムスタンプ付き）
- `vtt`: Web字幕形式
- `json`: JSON形式（詳細情報含む）
- `tsv`: タブ区切り形式

### 2. 多言語音声の翻訳

**日本語音声を英語に翻訳:**
```bash
whisper /path/to/japanese-audio.m4a --task translate --output_format srt
```

**対応言語:**
OpenAIの公式発表によれば、Whisperは98言語に対応している（2022年9月時点）。

### 3. モデル選択

**高速・低精度（tinyモデル）:**
```bash
whisper audio.mp3 --model tiny
```

**高精度・低速（largeモデル）:**
```bash
whisper audio.mp3 --model large
```

**英語専用モデル（精度向上）:**
```bash
whisper audio.mp3 --model medium.en
```

### 4. タイムスタンプ付き出力

**SRT形式（字幕）:**
```bash
whisper interview.mp4 --output_format srt --output_dir ./subtitles
```

出力例（SRT形式）:
```
1
00:00:00,000 --> 00:00:03,500
こんにちは。本日はお集まりいただきありがとうございます。

2
00:00:03,500 --> 00:00:07,200
それでは、プロジェクトの進捗について報告いたします。
```

## 実装例

### 例1: ミーティング録音の自動文字起こし（Bash）

```bash
#!/bin/bash
# transcribe-meeting.sh

AUDIO_FILE="$1"
OUTPUT_DIR="./transcripts"
DATE=$(date +%Y-%m-%d)

mkdir -p "$OUTPUT_DIR"

# 音声ファイルを文字起こし
whisper "$AUDIO_FILE" \
  --model medium \
  --output_format txt \
  --output_format srt \
  --output_dir "$OUTPUT_DIR" \
  --language ja

# 出力ファイル名を日付付きにリネーム
BASE_NAME=$(basename "$AUDIO_FILE" | sed 's/\.[^.]*$//')
mv "$OUTPUT_DIR/${BASE_NAME}.txt" "$OUTPUT_DIR/${DATE}-${BASE_NAME}.txt"
mv "$OUTPUT_DIR/${BASE_NAME}.srt" "$OUTPUT_DIR/${DATE}-${BASE_NAME}.srt"

echo "文字起こし完了: $OUTPUT_DIR/${DATE}-${BASE_NAME}.txt"
```

### 例2: Node.jsによる音声認識実行

```javascript
const { exec } = require('child_process');
const util = require('util');
const fs = require('fs').promises;
const execPromise = util.promisify(exec);

async function transcribeAudio(audioPath, language = 'ja') {
  const outputDir = './transcripts';
  const model = 'medium';
  
  try {
    const command = `whisper "${audioPath}" --model ${model} --language ${language} --output_format json --output_dir ${outputDir}`;
    await execPromise(command);
    
    // JSON出力を読み込み
    const baseName = audioPath.split('/').pop().replace(/\.[^.]*$/, '');
    const jsonPath = `${outputDir}/${baseName}.json`;
    const result = await fs.readFile(jsonPath, 'utf-8');
    
    return JSON.parse(result);
  } catch (error) {
    console.error('Error transcribing audio:', error);
    throw error;
  }
}

// 使用例
transcribeAudio('./meeting-2026-02-15.m4a', 'ja')
  .then(result => {
    console.log('Transcription:', result.text);
  });
```

### 例3: ポッドキャスト音声の字幕生成

```bash
#!/bin/bash
# podcast-subtitles.sh

PODCAST_DIR="./podcasts"
SUBTITLE_DIR="./subtitles"

mkdir -p "$SUBTITLE_DIR"

for audio_file in "$PODCAST_DIR"/*.mp3; do
  echo "処理中: $audio_file"
  
  whisper "$audio_file" \
    --model small.en \
    --output_format srt \
    --output_dir "$SUBTITLE_DIR"
  
  echo "完了: $audio_file"
done

echo "すべてのポッドキャストの字幕生成が完了しました"
```

### 例4: Clawdbot統合スクリプト（Discord音声メッセージの文字起こし）

```javascript
// discord-voice-transcribe.js
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);
const fs = require('fs').promises;

async function transcribeDiscordVoice(voiceMessagePath) {
  try {
    // Whisperで文字起こし実行
    const command = `whisper "${voiceMessagePath}" --model turbo --output_format txt --output_dir /tmp`;
    await execPromise(command);
    
    // テキストファイルを読み込み
    const baseName = voiceMessagePath.split('/').pop().replace(/\.[^.]*$/, '');
    const txtPath = `/tmp/${baseName}.txt`;
    const transcript = await fs.readFile(txtPath, 'utf-8');
    
    // 一時ファイル削除
    await fs.unlink(txtPath);
    
    return transcript.trim();
  } catch (error) {
    console.error('Error transcribing Discord voice:', error);
    return null;
  }
}

module.exports = { transcribeDiscordVoice };
```

### 例5: 多言語動画の翻訳字幕生成

```bash
#!/bin/bash
# translate-video.sh

VIDEO_FILE="$1"
AUDIO_FILE="/tmp/audio.wav"

# 動画から音声を抽出（FFmpeg）
ffmpeg -i "$VIDEO_FILE" -vn -acodec pcm_s16le -ar 16000 -ac 1 "$AUDIO_FILE"

# 音声を英語に翻訳
whisper "$AUDIO_FILE" \
  --task translate \
  --model medium \
  --output_format srt \
  --output_dir .

echo "翻訳字幕を生成しました"
rm "$AUDIO_FILE"
```

## ユースケース

### 1. ミーティング議事録の自動作成
Zoom/Teams等のオンラインミーティング録音を自動的に文字起こしし、議事録として保存する。

### 2. ポッドキャスト・YouTube動画の字幕生成
音声コンテンツから自動的に字幕ファイル（SRT/VTT）を生成し、アクセシビリティを向上させる。

### 3. 音声メモの検索可能化
日々の音声メモをテキスト化し、全文検索可能なナレッジベースを構築する。

### 4. 多言語コンテンツの翻訳
外国語の講演・インタビュー動画を英語に翻訳し、理解しやすい形式で保存する。

## 制限事項・セキュリティ考慮事項

### 制限事項

1. **処理速度**: largeモデルは高精度だが処理時間が長い（1時間の音声で10-30分程度）
2. **モデルダウンロード**: 初回実行時にモデルファイル（数百MB～数GB）を`~/.cache/whisper`にダウンロードする必要がある
3. **音質依存**: ノイズが多い音声や複数話者の同時発話では精度が低下する
4. **方言・訛り**: 標準語以外の方言や強い訛りでは認識精度が下がる場合がある
5. **リアルタイム処理不可**: 音声ファイル全体を処理するため、リアルタイム文字起こしには不向き

### セキュリティ考慮事項

1. **ローカル実行**:
   - すべての処理がローカルで完結し、音声データが外部サーバーに送信されない
   - 機密情報を含む音声でも安全に処理可能

2. **モデルキャッシュ**:
   - モデルファイルは`~/.cache/whisper/`に保存される
   - ディスク容量を圧迫する場合は定期的にクリーンアップを検討

3. **出力ファイルの管理**:
   - 文字起こし結果には音声内容が含まれる
   - 機密情報を含む出力ファイルには適切なパーミッション（600）を設定

4. **スクリプト実行環境**:
   - 自動化スクリプトで処理する音声ファイルのパスを適切に管理
   - パストラバーサル攻撃を防ぐため、入力パスを検証すること

## 参考リンク

- OpenAI Whisper公式ページ: https://openai.com/research/whisper
- Whisper GitHub: https://github.com/openai/whisper
- Whisper論文（arXiv）: https://arxiv.org/abs/2212.04356
- FFmpeg公式サイト: https://ffmpeg.org/
- Clawdbot公式サイト: https://clawdbot.com

---

本記事の情報は2026年2月15日時点のものです。各ツールの機能や仕様は変更される可能性があります。最新情報は各公式サイトおよびGitHubリポジトリをご確認ください。
