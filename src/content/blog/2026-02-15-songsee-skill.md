---
title: "SongSee Skill - 音声解析とスペクトログラム生成をCLIで実現"
description: "Clawdbot向けSongSee Skillを利用して、音声ファイルからスペクトログラム、メル周波数、クロマグラム等の可視化を実行する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "SongSee", "音声解析", "スペクトログラム", "FFT", "音響信号処理"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, SongSee, スペクトログラム, 音声解析, FFT, メル周波数, クロマグラム, 音響信号処理"
---

# SongSee Skill - 音声解析とスペクトログラム生成をCLIで実現

2026年現在、音声解析ツールの多くはGUI（Audacity、Adobe Audition等）またはPython環境（librosa、matplotlib）で提供されている。一方、CLIベースの軽量ツールは、自動化やバッチ処理に適しているものの、選択肢が限定されている。

SongSee（https://github.com/steipete/songsee）は、音声ファイルからスペクトログラム、メル周波数ケプストラム係数（MFCC）、クロマグラム等の可視化を生成するCLIツールである。Clawdbot向けSongSee Skillは、このツールをClawdbot環境に統合し、音声解析の自動化を可能にする。

本記事では、SongSee Skillの技術的仕様、導入方法、実装パターン、およびユースケースを解説する。

## 選定基準

本記事で解説するSongSee Skillは、以下の特性を持つ:

- CLIベースの音声可視化（スクリプト化・自動化が容易）
- 複数の可視化タイプ（スペクトログラム、メル、クロマ、HPSS等）
- WAV/MP3ネイティブサポート、FFmpeg統合
- 画像フォーマット出力（JPG、PNG）

---

## 技術的背景

### SongSeeとは

SongSee（https://github.com/steipete/songsee）は、steipete氏が開発した音声可視化CLIツールである。Goで実装されており、FFT（高速フーリエ変換）ベースの解析処理を提供する。

### 提供される可視化タイプ

SongSeeは、以下の可視化を生成できる:

- **spectrogram**: 標準的な周波数-時間スペクトログラム
- **mel**: メルスケールスペクトログラム（人間の聴覚特性に基づく）
- **chroma**: クロマグラム（音高分布）
- **hpss**: Harmonic-Percussive Source Separation（和音成分と打楽器成分の分離）
- **selfsim**: 自己相似性行列（構造解析）
- **loudness**: ラウドネス（音量変化）
- **tempogram**: テンポグラム（リズム解析）
- **mfcc**: メル周波数ケプストラム係数
- **flux**: スペクトラルフラックス（周波数変化率）

### FFT設定

スペクトログラム生成は、以下のパラメータで制御される:

- **window**: FFTウィンドウサイズ（デフォルト: 2048サンプル）
- **hop**: ホップサイズ（ウィンドウ間のオーバーラップ、デフォルト: 512サンプル）
- **min-freq / max-freq**: 周波数範囲（Hz）

---

## システム要件とインストール方法

### 動作環境

- OS: macOS、Linux
- FFmpeg（オプション、WAV/MP3以外のフォーマット対応に必要）

### インストール手順

**Homebrew（推奨）:**

```bash
brew tap steipete/tap
brew install songsee
```

インストール後、動作確認:

```bash
songsee --version
```

### FFmpegのインストール（オプション）

MP4、M4A等の追加フォーマットをサポートする場合、FFmpegをインストールする。

```bash
brew install ffmpeg
```

---

## 主要機能とコマンド例

### 基本的なスペクトログラム生成

```bash
# デフォルト設定（出力: track.mp3.jpg）
songsee track.mp3

# 出力ファイル名指定
songsee track.mp3 -o spectrogram.jpg
```

### マルチパネル可視化

複数の可視化を1つの画像にグリッド表示する。

```bash
songsee track.mp3 --viz spectrogram,mel,chroma,hpss,selfsim,loudness,tempogram,mfcc,flux
```

### 時間範囲の指定

特定の時間区間のみを可視化する。

```bash
# 12.5秒から8秒間
songsee track.mp3 --start 12.5 --duration 8 -o slice.jpg
```

### カラーパレットの変更

```bash
# 利用可能なパレット: classic, magma, inferno, viridis, gray
songsee track.mp3 --style magma -o magma_style.jpg
```

### 出力サイズの指定

```bash
songsee track.mp3 --width 1920 --height 1080 -o hd_spectrogram.png
```

### 周波数範囲の制限

```bash
# 人間の可聴域の一部（100Hz〜8kHz）に限定
songsee track.mp3 --min-freq 100 --max-freq 8000 -o limited_freq.jpg
```

### 標準入力からの処理

```bash
cat track.mp3 | songsee - --format png -o output.png
```

---

## 実装例

### 例1: Node.jsからのスペクトログラム生成

```javascript
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function generateSpectrogram(audioPath, outputPath) {
  const command = `songsee "${audioPath}" -o "${outputPath}"`;
  const { stdout, stderr } = await execAsync(command);
  if (stderr) console.warn(stderr);
  return outputPath;
}

// 使用例
const spectrogram = await generateSpectrogram("./audio/track.mp3", "./output/spec.jpg");
console.log(`Spectrogram generated: ${spectrogram}`);
```

### 例2: バッチ処理（ディレクトリ内の全ファイル）

```bash
#!/bin/bash

INPUT_DIR="./audio"
OUTPUT_DIR="./spectrograms"

mkdir -p "$OUTPUT_DIR"

for FILE in "$INPUT_DIR"/*.mp3; do
  BASENAME=$(basename "$FILE" .mp3)
  songsee "$FILE" -o "$OUTPUT_DIR/${BASENAME}_spec.jpg"
  echo "Processed: $FILE"
done

echo "All files processed."
```

### 例3: マルチパネル可視化の自動生成

```javascript
async function generateMultiPanel(audioPath, outputPath) {
  const vizTypes = [
    'spectrogram',
    'mel',
    'chroma',
    'hpss',
    'selfsim',
    'loudness',
    'tempogram',
    'mfcc',
    'flux'
  ];
  const command = `songsee "${audioPath}" --viz ${vizTypes.join(',')} -o "${outputPath}"`;
  await execAsync(command);
  return outputPath;
}

// 使用例
const multiPanel = await generateMultiPanel("./audio/song.mp3", "./output/multi_panel.jpg");
console.log(`Multi-panel visualization: ${multiPanel}`);
```

### 例4: 時間スライスの連続生成

特定の楽曲から、5秒ごとのスペクトログラムを生成する。

```bash
#!/bin/bash

AUDIO="./audio/long_track.mp3"
OUTPUT_DIR="./slices"
DURATION=5

mkdir -p "$OUTPUT_DIR"

# 楽曲の長さを取得（ffprobeが必要）
TOTAL_DURATION=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$AUDIO")

START=0
COUNTER=0

while (( $(echo "$START < $TOTAL_DURATION" | bc -l) )); do
  OUTPUT="$OUTPUT_DIR/slice_$(printf "%03d" $COUNTER).jpg"
  songsee "$AUDIO" --start $START --duration $DURATION -o "$OUTPUT"
  START=$(echo "$START + $DURATION" | bc)
  COUNTER=$((COUNTER + 1))
done

echo "Generated $COUNTER slices."
```

### 例5: カスタムFFT設定での高精度解析

低周波成分を詳細に解析する場合、ウィンドウサイズを増やす。

```bash
# デフォルト: window=2048, hop=512
songsee track.mp3 -o default_spec.jpg

# 高精度: window=4096, hop=1024
songsee track.mp3 --window 4096 --hop 1024 -o high_res_spec.jpg
```

---

## ユースケース

### 音楽制作・ミキシング

楽曲のスペクトログラムを確認し、特定の周波数帯域（例: 低音のクリッピング）を視覚的に検出する。

### 音声認識の前処理

音声認識モデルの入力として、メル周波数スペクトログラムを生成する。

### 楽曲構造解析

自己相似性行列（selfsim）を用いて、楽曲の繰り返し構造（Aメロ、Bメロ等）を可視化する。

### オーディオフォレンジック

録音物から異常な周波数パターン（編集痕跡、ノイズ等）を検出する。

### 教育・研究

音響学、信号処理の教材として、FFTの動作原理をビジュアル化する。

---

## 技術的詳細: 各可視化タイプの解説

### Spectrogram（標準スペクトログラム）

短時間フーリエ変換（STFT）により、時間-周波数平面での音響エネルギー分布を表示する。

- X軸: 時間
- Y軸: 周波数（Hz）
- 色: エネルギー強度（dB）

### Mel Spectrogram（メルスペクトログラム）

人間の聴覚特性（低周波は高解像度、高周波は低解像度）に基づくスケール変換。音声認識で広く使用される。

### Chroma（クロマグラム）

12音階（C、C#、D、...、B）ごとのエネルギー分布を表示する。和音進行の解析に有用。

### HPSS（Harmonic-Percussive Source Separation）

和音成分（harmonic）と打楽器成分（percussive）を分離し、別々に表示する。

### Self-Similarity（自己相似性行列）

楽曲内の類似した時間区間を検出し、行列として可視化する。繰り返し構造の発見に有用。

### Loudness（ラウドネス）

時間経過に伴う音量変化を表示する。ダイナミクスの分析に使用される。

### Tempogram（テンポグラム）

楽曲のテンポ変化を時間-周期平面で可視化する。リズム解析に有用。

### MFCC（メル周波数ケプストラム係数）

音声認識でよく使用される特徴量。音色の特性を捉える。

### Spectral Flux（スペクトラルフラックス）

連続するフレーム間のスペクトル変化率を測定する。音の立ち上がり検出に使用される。

---

## 制限事項とセキュリティ考慮事項

### 制限事項

- GUI操作は不可（CLIのみ）
- リアルタイム処理は非対応（ファイル処理のみ）
- 複雑なカスタマイズ（カスタムウィンドウ関数等）は不可
- WAV/MP3以外のフォーマットはFFmpegが必要

### セキュリティ考慮事項

**入力ファイルの検証:**

信頼できないソースからの音声ファイルは、FFmpegの脆弱性を悪用される可能性がある。ファイルタイプを事前に検証する。

```bash
# ファイルタイプ確認
file audio.mp3
```

**出力ディレクトリのアクセス権限:**

生成された画像ファイルが意図しないユーザーに公開されないよう、適切なアクセス権限を設定する。

```bash
chmod 700 ./output
```

**ディスク容量の監視:**

大量の音声ファイルをバッチ処理する場合、ディスク容量不足に注意する。

---

## 参考リンク

- SongSee GitHubリポジトリ: https://github.com/steipete/songsee
- FFmpeg公式サイト: https://ffmpeg.org/
- Librosa（Python音声解析ライブラリ）: https://librosa.org/
- Clawdbot公式サイト: https://clawdbot.com/

---

本記事の情報は2026年2月15日時点のものです。SongSeeの機能、対応フォーマット、APIは変更される可能性があります。最新情報は各公式サイトをご確認ください。
