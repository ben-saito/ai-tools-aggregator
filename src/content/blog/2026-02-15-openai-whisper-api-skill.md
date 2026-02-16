---
title: "OpenAI Whisper API Skill - Clawdbot向け音声文字起こし機能"
description: "Clawdbot向けOpenAI Whisper API Skillを利用して、音声ファイルの自動文字起こしを実現する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "OpenAI", "Whisper", "音声認識", "文字起こし", "Speech-to-Text"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot,OpenAI Whisper,音声文字起こし,Speech-to-Text,API,自動文字起こし"
---

# OpenAI Whisper API Skill - Clawdbot向け音声文字起こし機能

2023年にOpenAIが提供を開始したWhisper APIは、多言語対応の音声認識システムとして広く利用されている。Clawdbot向けOpenAI Whisper API Skillは、このAPIをコマンドラインから呼び出し、音声ファイルを自動的にテキストに変換する機能を提供する。

本記事では、Clawdbot環境におけるWhisper API Skillの技術仕様、実装方法、実用的なユースケースについて解説する。

## 選定基準

本記事の執筆にあたり、以下の基準でSkillを評価した。

- OpenAI公式ドキュメント（https://platform.openai.com/docs/guides/speech-to-text）に基づく仕様確認
- Clawdbotの技術要件（curl、環境変数）の検証
- 実際の利用シナリオにおける実用性

---

## 技術的仕様

### システム要件

OpenAI Whisper API Skillは以下の環境で動作する。

- **必須コマンド:** `curl`
- **必須環境変数:** `OPENAI_API_KEY`
- **対応プラットフォーム:** Linux、macOS、Windows（WSL含む）

### インストール方法

Clawdbot環境では、OpenAI APIキーを設定することで利用可能になる。

**環境変数による設定:**

```bash
export OPENAI_API_KEY="sk-..."
```

**設定ファイルによる設定:**

`~/.clawdbot/clawdbot.json` に以下を追加する。

```json
{
  "skills": {
    "openai-whisper-api": {
      "apiKey": "sk-..."
    }
  }
}
```

### 対応音声形式

Whisper APIは以下の音声形式に対応している（OpenAI公式ドキュメントより）。

- mp3
- mp4
- mpeg
- mpga
- m4a
- wav
- webm
- ogg
- flac

---

## 主要機能

### 基本的な文字起こし

最もシンプルな実装例は以下の通り。

```bash
transcribe.sh /path/to/audio.m4a
```

デフォルト設定:
- モデル: `whisper-1`
- 出力先: `<入力ファイル名>.txt`

### 出力先の指定

```bash
transcribe.sh /path/to/audio.ogg --model whisper-1 --out /tmp/transcript.txt
```

### 言語指定

特定の言語に最適化する場合、`--language` オプションを使用する。

```bash
transcribe.sh /path/to/audio.m4a --language en
```

### プロンプトによる精度向上

話者名や固有名詞を事前に指定することで、文字起こしの精度を向上させることができる。

```bash
transcribe.sh /path/to/audio.m4a --prompt "Speaker names: Peter, Daniel"
```

### JSON形式での出力

構造化されたデータとして扱う場合、JSON形式での出力が可能。

```bash
transcribe.sh /path/to/audio.m4a --json --out /tmp/transcript.json
```

---

## 実装例

### 例1: 会議の音声記録を文字起こし

```bash
#!/bin/bash
# 会議録音ファイルを自動文字起こし

AUDIO_FILE="/recordings/meeting-2026-02-15.m4a"
OUTPUT_DIR="/transcripts"

{baseDir}/scripts/transcribe.sh "$AUDIO_FILE" \
  --language ja \
  --prompt "会議参加者: 田中、佐藤、鈴木" \
  --out "$OUTPUT_DIR/meeting-2026-02-15.txt"
```

### 例2: 複数言語の自動判定

```bash
#!/bin/bash
# 言語指定なしで自動判定

for file in /audio/*.m4a; do
  basename=$(basename "$file" .m4a)
  {baseDir}/scripts/transcribe.sh "$file" \
    --out "/transcripts/${basename}.txt"
done
```

### 例3: JSON出力を後処理する

```bash
#!/bin/bash
# JSON形式で取得し、jqで整形

{baseDir}/scripts/transcribe.sh /path/to/audio.ogg \
  --json \
  --out /tmp/raw.json

cat /tmp/raw.json | jq '.text' > /tmp/clean-text.txt
```

### 例4: プロンプトを活用した専門用語の正確な認識

```bash
#!/bin/bash
# 技術用語・固有名詞を含むプロンプト

{baseDir}/scripts/transcribe.sh /path/to/tech-talk.m4a \
  --language en \
  --prompt "Technical terms: Kubernetes, Docker, PostgreSQL, REST API" \
  --out /tmp/tech-transcript.txt
```

### 例5: バッチ処理による大量ファイルの一括変換

```bash
#!/bin/bash
# ディレクトリ内の全音声ファイルを処理

INPUT_DIR="/audio/podcasts"
OUTPUT_DIR="/transcripts/podcasts"

mkdir -p "$OUTPUT_DIR"

for file in "$INPUT_DIR"/*.{mp3,m4a,ogg}; do
  if [ -f "$file" ]; then
    filename=$(basename "$file")
    name="${filename%.*}"
    
    echo "Processing: $filename"
    {baseDir}/scripts/transcribe.sh "$file" \
      --out "$OUTPUT_DIR/${name}.txt"
  fi
done

echo "All files processed."
```

---

## ユースケース

### 会議・インタビューの記録

会議やインタビューの音声を自動的にテキスト化し、議事録作成の効率化を図る用途に適している。話者名を事前にプロンプトで指定することで、人名の誤認識を低減できる。

### ポッドキャスト・動画コンテンツの字幕生成

音声コンテンツの文字起こしにより、検索可能なテキストデータや字幕ファイルを生成できる。複数言語に対応しているため、多言語コンテンツの処理にも活用可能。

### 音声メモの自動テキスト化

スマートフォンやボイスレコーダーで録音した音声メモを、自動的にテキストに変換し、検索可能な形式で保存する用途。

### コールセンター通話記録の分析

顧客サポートや営業電話の音声記録を文字起こしし、後続の分析処理（感情分析、キーワード抽出等）に活用できる。

---

## 制限事項・セキュリティ考慮事項

### ファイルサイズ制限

OpenAIのWhisper APIは、1ファイルあたり最大25MBまでの音声ファイルに対応している（2024年時点の公式仕様）。より大きなファイルは、事前に分割する必要がある。

### API利用料金

Whisper APIの料金は、2024年時点で以下の通り。

- 音声1分あたり: $0.006

長時間の音声ファイルを頻繁に処理する場合、コストを考慮する必要がある。

### データプライバシー

音声ファイルはOpenAIのサーバーに送信されるため、機密情報や個人情報を含む音声データの取り扱いには注意が必要。OpenAIのデータ利用ポリシー（https://openai.com/policies/privacy-policy）を確認の上、利用することを推奨する。

### 環境変数の管理

APIキーは環境変数または設定ファイルで管理される。共有環境やバージョン管理システムに誤ってコミットしないよう、`.gitignore` 等で適切に除外する必要がある。

### ネットワーク接続

APIベースのサービスであるため、インターネット接続が必須。オフライン環境では動作しない。

---

## 参考リンク

- OpenAI Speech to Text Guide: https://platform.openai.com/docs/guides/speech-to-text
- OpenAI API Pricing: https://openai.com/pricing
- Clawdbot公式サイト: https://clawdbot.com
- OpenAI Privacy Policy: https://openai.com/policies/privacy-policy

---

本記事の情報は2026年2月15日時点のものです。各サービスの機能や料金は変更される可能性があります。最新情報は各公式サイトをご確認ください。
