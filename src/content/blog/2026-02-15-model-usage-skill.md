---
title: "Model Usage Skill - CodexBarによるAIモデル利用コストの分析機能"
description: "Clawdbot向けModel Usage Skillを利用して、CodexBarのローカルログからモデル別のAPI利用コストを集計・分析する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "CodexBar", "AI", "コスト管理", "使用量分析", "Claude", "Codex"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot,CodexBar,AIモデル,コスト管理,使用量分析,Claude,Codex,API料金"
---

# Model Usage Skill - CodexBarによるAIモデル利用コストの分析機能

AIモデルのAPI利用料金は、使用するモデル、トークン数、リクエスト頻度によって大きく変動する。複数のモデルを併用している場合、どのモデルに最もコストがかかっているかを把握することは、予算管理とコスト最適化において重要である。

Clawdbot向けModel Usage Skillは、CodexBar CLIツールのローカルコストログを解析し、モデル別のAPI利用コストを集計する機能を提供する。本記事では、その技術仕様、実装方法、実用例について解説する。

## 選定基準

本記事の執筆にあたり、以下の基準でSkillを評価した。

- CodexBar CLIのコストログ形式（JSON）の仕様確認
- Pythonスクリプトによるデータ解析手法の検証
- 実際のコスト管理業務における実用性

---

## 技術的仕様

### システム要件

Model Usage Skillは以下の環境で動作する。

- **対応OS:** macOS（今後Linuxサポート予定）
- **必須コマンド:** `codexbar`（CodexBar CLI）
- **必須環境:** Python 3.x、`jq`（JSON処理）

### インストール方法

CodexBarは、Homebrewを使用してインストールする。

```bash
brew install --cask steipete/tap/codexbar
```

インストール後、`codexbar` コマンドがパスに追加される。

### 対応プロバイダー

Model Usage Skillは、以下のAIプロバイダーに対応している。

- **Codex:** OpenAIのCodexモデル（GPT-4、GPT-5.2-codex等）
- **Claude:** AnthropicのClaudeモデル（Claude 3.5 Sonnet、Opus 4.6等）

---

## 主要機能

### 基本的な使用方法

最新のモデル使用状況を確認する場合、以下のコマンドを実行する。

```bash
python {baseDir}/scripts/model_usage.py --provider codex --mode current
```

このコマンドは、CodexBarのローカルログから最新の日次データを取得し、最もコストが高いモデルの情報を表示する。

### 全モデルの集計

すべてのモデルの利用コストを集計する場合、以下のように実行する。

```bash
python {baseDir}/scripts/model_usage.py --provider codex --mode all
```

### JSON形式での出力

構造化されたデータとして扱う場合、JSON形式での出力が可能。

```bash
python {baseDir}/scripts/model_usage.py --provider claude --mode all --format json --pretty
```

### ファイル入力

事前に取得したコストログファイルを解析する場合。

```bash
codexbar cost --provider codex --format json > /tmp/cost.json
python {baseDir}/scripts/model_usage.py --input /tmp/cost.json --mode all
```

### 標準入力からの読み取り

パイプを使用してデータを渡すことも可能。

```bash
cat /tmp/cost.json | python {baseDir}/scripts/model_usage.py --input - --mode current
```

---

## カレントモデルの判定ロジック

Model Usage Skillは、「カレントモデル」（現在最も使用されているモデル）を以下のロジックで判定する。

1. 最新の日次ログから `modelBreakdowns` フィールドを取得
2. コストが最も高いモデルを選択
3. `modelBreakdowns` が存在しない場合、`modelsUsed` の最後のエントリーをフォールバック
4. 特定のモデルを指定する場合、`--model <name>` オプションで上書き可能

---

## 実装例

### 例1: 日次コストレポートの自動生成

```bash
#!/bin/bash
# 毎日午前0時にコストレポートを生成（cronジョブとして実行）

REPORT_DIR="/var/log/ai-cost-reports"
DATE=$(date +%Y-%m-%d)

mkdir -p "$REPORT_DIR"

python /path/to/model_usage.py --provider codex --mode all --format json --pretty \
  > "$REPORT_DIR/codex-$DATE.json"

python /path/to/model_usage.py --provider claude --mode all --format json --pretty \
  > "$REPORT_DIR/claude-$DATE.json"

echo "Cost reports generated for $DATE"
```

### 例2: 特定モデルのコスト推移を追跡

```bash
#!/bin/bash
# gpt-5.2-codexの月次コスト推移を抽出

MODEL="gpt-5.2-codex"
OUTPUT_FILE="/tmp/gpt52-cost-trend.csv"

echo "Date,Cost" > "$OUTPUT_FILE"

for day in {01..31}; do
  date="2026-02-$day"
  cost=$(codexbar cost --provider codex --format json | \
    jq -r --arg date "$date" --arg model "$MODEL" \
    '.[] | select(.date == $date) | .modelBreakdowns[$model] // 0')
  
  if [ -n "$cost" ]; then
    echo "$date,$cost" >> "$OUTPUT_FILE"
  fi
done

echo "Cost trend saved to $OUTPUT_FILE"
```

### 例3: コスト閾値アラート

```bash
#!/bin/bash
# 日次コストが閾値を超えた場合に通知

THRESHOLD=50.00  # USD
CURRENT_COST=$(python /path/to/model_usage.py --provider codex --mode current --format json | \
  jq -r '.cost')

if (( $(echo "$CURRENT_COST > $THRESHOLD" | bc -l) )); then
  echo "Warning: Daily cost exceeded threshold ($CURRENT_COST > $THRESHOLD)"
  # 通知を送信（例: imsg、メール等）
  imsg send --to "+14155551212" --text "AI cost alert: \$$CURRENT_COST today"
fi
```

### 例4: 複数プロバイダーのコスト比較

```bash
#!/bin/bash
# CodexとClaudeの総コストを比較

CODEX_TOTAL=$(python /path/to/model_usage.py --provider codex --mode all --format json | \
  jq '[.[].cost] | add')

CLAUDE_TOTAL=$(python /path/to/model_usage.py --provider claude --mode all --format json | \
  jq '[.[].cost] | add')

echo "Total cost comparison:"
echo "Codex: \$$CODEX_TOTAL"
echo "Claude: \$$CLAUDE_TOTAL"

TOTAL=$(echo "$CODEX_TOTAL + $CLAUDE_TOTAL" | bc)
echo "Combined: \$$TOTAL"
```

### 例5: 週次コストレポートのメール送信

```bash
#!/bin/bash
# 毎週月曜日に先週のコスト集計をメール送信

WEEK=$(date -v-7d +%Y-W%V)
REPORT_FILE="/tmp/weekly-cost-report.txt"

echo "AI Cost Report - Week $WEEK" > "$REPORT_FILE"
echo "==============================" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

echo "Codex Models:" >> "$REPORT_FILE"
python /path/to/model_usage.py --provider codex --mode all >> "$REPORT_FILE"

echo "" >> "$REPORT_FILE"
echo "Claude Models:" >> "$REPORT_FILE"
python /path/to/model_usage.py --provider claude --mode all >> "$REPORT_FILE"

# メール送信（例: mailコマンド）
mail -s "Weekly AI Cost Report - $WEEK" admin@example.com < "$REPORT_FILE"
```

---

## ユースケース

### 予算管理とコスト最適化

複数のAIモデルを使用している組織において、どのモデルにコストが集中しているかを把握し、予算配分や利用計画を最適化する用途。

### モデル選択の意思決定支援

同等の機能を提供する複数のモデル（例: GPT-4 vs Claude Opus 4.6）のコスト比較を行い、費用対効果の高いモデルを選定する用途。

### 異常検知とアラート

通常の使用パターンと比較して、コストが急増した場合に自動的に通知する仕組みの構築。意図しないAPI呼び出しやループ処理によるコスト増加を早期に発見できる。

### チーム別・プロジェクト別のコスト集計

開発チームやプロジェクト単位でCodexBarのログを分離している場合、それぞれの利用コストを個別に集計し、課金管理に活用する用途。

---

## 制限事項・セキュリティ考慮事項

### macOS専用（現時点）

現在、CodexBar CLIはmacOS向けに提供されており、Linux版のインストール手順は公式ドキュメント化されていない。今後のアップデートでLinux対応が予定されている。

### ローカルログへの依存

Model Usage Skillは、CodexBarがローカルに保存するコストログに依存している。ログファイルが削除または破損した場合、過去のデータを取得できない。

### トークン数の非対応

CodexBarのコストログには、モデル別のコスト情報は含まれているが、トークン数の詳細な内訳は記録されていない。トークンレベルの分析が必要な場合、各プロバイダーのAPIダッシュボードを参照する必要がある。

### データの正確性

コストデータは、CodexBarがAPIレスポンスから収集した情報に基づく。プロバイダー側の料金体系変更やAPI仕様変更により、実際の請求額と若干の差異が生じる可能性がある。

### 複数デバイスの統合

CodexBarのログはデバイスごとに独立して記録される。複数のMacを使用している場合、手動でログファイルを統合する必要がある。

---

## 参考リンク

- CodexBar公式サイト: https://codexbar.com
- Homebrew: https://brew.sh
- OpenAI API Pricing: https://openai.com/pricing
- Anthropic Claude Pricing: https://www.anthropic.com/pricing
- jqマニュアル: https://stedolan.github.io/jq/manual/

---

本記事の情報は2026年2月15日時点のものです。各サービスの機能や料金は変更される可能性があります。最新情報は各公式サイトをご確認ください。
