---
title: "Session Logs Skill - Clawdbot会話履歴の検索・分析機能"
description: "Clawdbot向けSession Logs Skillを利用して、過去の会話履歴をJSONL形式から検索・抽出し、コンテキスト復元やコスト分析を実現する方法を解説します。"
publishedAt: "2026-02-15T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "セッションログ", "会話履歴", "jq", "JSONL", "データ分析"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot,セッションログ,会話履歴,JSONL,jq,データ分析,コスト分析"
---

# Session Logs Skill - Clawdbot会話履歴の検索・分析機能

AIアシスタントとの長期的な対話において、過去の会話内容を参照する必要が生じることは珍しくない。特定のトピックに関する過去の議論、以前に実行したコマンド、または過去の意思決定の経緯を確認したい場合、会話履歴へのアクセスが不可欠である。

Clawdbot向けSession Logs Skillは、ローカルに保存されたJSONL形式のセッションログを検索・分析するための機能を提供する。本記事では、その技術仕様、検索手法、実用例について解説する。

## 選定基準

本記事の執筆にあたり、以下の基準でSkillを評価した。

- Clawdbotのセッションログ構造（JSONL形式）の仕様確認
- jqおよびripgrep（rg）を使用したデータ抽出手法の検証
- 実際の会話履歴管理における実用性

---

## 技術的仕様

### システム要件

Session Logs Skillは以下の環境で動作する。

- **必須コマンド:** `jq`（JSON処理）、`rg`（ripgrep、高速テキスト検索）
- **対応プラットフォーム:** Linux、macOS、Windows（WSL含む）

### セッションログの保存場所

Clawdbotのセッションログは、以下のディレクトリに保存される。

```
~/.clawdbot/agents/<agentId>/sessions/
```

`<agentId>` は、システムプロンプトのRuntime行に記載された `agent=<id>` の値。

### ファイル構成

- **`sessions.json`**: セッションキー（チャットプロバイダー、チャンネルID等）とセッションIDの対応表
- **`<session-id>.jsonl`**: 各セッションの完全な会話記録（JSONL形式）

### JSONL形式の構造

各`.jsonl`ファイルは、1行ごとに1つのJSON オブジェクトを含む。

**主なフィールド:**

- `type`: `"session"`（メタデータ）または `"message"`（メッセージ）
- `timestamp`: ISO 8601形式のタイムスタンプ
- `message.role`: `"user"`（ユーザー）、`"assistant"`（アシスタント）、`"toolResult"`（ツール実行結果）
- `message.content[]`: テキスト、思考（thinking）、ツール呼び出し（toolCall）の配列
- `message.usage.cost.total`: レスポンスごとのAPI利用コスト

**テキストのみを抽出する場合:**

```bash
jq -r 'select(.type=="message") | .message.content[]? | select(.type=="text") | .text' <session>.jsonl
```

---

## 主要機能

### セッション一覧の取得（日付・サイズ順）

```bash
for f in ~/.clawdbot/agents/<agentId>/sessions/*.jsonl; do
  date=$(head -1 "$f" | jq -r '.timestamp' | cut -dT -f1)
  size=$(ls -lh "$f" | awk '{print $5}')
  echo "$date $size $(basename $f)"
done | sort -r
```

### 特定日のセッション検索

```bash
for f in ~/.clawdbot/agents/<agentId>/sessions/*.jsonl; do
  head -1 "$f" | jq -r '.timestamp' | grep -q "2026-01-06" && echo "$f"
done
```

### ユーザーメッセージの抽出

```bash
jq -r 'select(.message.role == "user") | .message.content[]? | select(.type == "text") | .text' <session>.jsonl
```

### アシスタントの応答内でキーワード検索

```bash
jq -r 'select(.message.role == "assistant") | .message.content[]? | select(.type == "text") | .text' <session>.jsonl | rg -i "keyword"
```

### セッションの総コスト計算

```bash
jq -s '[.[] | .message.usage.cost.total // 0] | add' <session>.jsonl
```

### 日次コスト集計

```bash
for f in ~/.clawdbot/agents/<agentId>/sessions/*.jsonl; do
  date=$(head -1 "$f" | jq -r '.timestamp' | cut -dT -f1)
  cost=$(jq -s '[.[] | .message.usage.cost.total // 0] | add' "$f")
  echo "$date $cost"
done | awk '{a[$1]+=$2} END {for(d in a) print d, "$"a[d]}' | sort -r
```

### メッセージ数・トークン数の統計

```bash
jq -s '{
  messages: length,
  user: [.[] | select(.message.role == "user")] | length,
  assistant: [.[] | select(.message.role == "assistant")] | length,
  first: .[0].timestamp,
  last: .[-1].timestamp
}' <session>.jsonl
```

### ツール使用頻度の集計

```bash
jq -r '.message.content[]? | select(.type == "toolCall") | .name' <session>.jsonl | sort | uniq -c | sort -rn
```

### 全セッションを横断してキーワード検索

```bash
rg -l "phrase" ~/.clawdbot/agents/<agentId>/sessions/*.jsonl
```

---

## 実装例

### 例1: 過去7日間の会話を日付順に表示

```bash
#!/bin/bash
# 過去7日間のセッションを新しい順に表示

AGENT_ID="main"
SESSIONS_DIR="$HOME/.clawdbot/agents/$AGENT_ID/sessions"
CUTOFF_DATE=$(date -v-7d +%Y-%m-%d)

for f in "$SESSIONS_DIR"/*.jsonl; do
  session_date=$(head -1 "$f" | jq -r '.timestamp' | cut -dT -f1)
  
  if [[ "$session_date" > "$CUTOFF_DATE" ]]; then
    echo "=== Session: $(basename $f) - $session_date ==="
    jq -r 'select(.type=="message") | "\(.timestamp) [\(.message.role)]: \(.message.content[]? | select(.type=="text") | .text)"' "$f" | head -20
    echo ""
  fi
done | sort -r
```

### 例2: 特定のプロジェクトに関する過去の議論を抽出

```bash
#!/bin/bash
# "AI Tools Aggregator"プロジェクトに関する過去の会話を抽出

PROJECT_NAME="AI Tools Aggregator"
AGENT_ID="main"
SESSIONS_DIR="$HOME/.clawdbot/agents/$AGENT_ID/sessions"
OUTPUT_FILE="/tmp/project-discussion.txt"

echo "Extracting discussions about: $PROJECT_NAME" > "$OUTPUT_FILE"
echo "=======================================" >> "$OUTPUT_FILE"

for f in "$SESSIONS_DIR"/*.jsonl; do
  matches=$(jq -r 'select(.type=="message") | .message.content[]? | select(.type=="text") | .text' "$f" | rg -i "$PROJECT_NAME" || true)
  
  if [ -n "$matches" ]; then
    session_date=$(head -1 "$f" | jq -r '.timestamp' | cut -dT -f1)
    echo "" >> "$OUTPUT_FILE"
    echo "--- Session: $session_date ---" >> "$OUTPUT_FILE"
    echo "$matches" >> "$OUTPUT_FILE"
  fi
done

echo "Results saved to $OUTPUT_FILE"
```

### 例3: 月次コストレポートの生成

```bash
#!/bin/bash
# 月次のAPI利用コストをセッション別に集計

AGENT_ID="main"
SESSIONS_DIR="$HOME/.clawdbot/agents/$AGENT_ID/sessions"
MONTH="2026-02"
OUTPUT_FILE="/tmp/monthly-cost-report.csv"

echo "Session,Date,Cost" > "$OUTPUT_FILE"

for f in "$SESSIONS_DIR"/*.jsonl; do
  session_date=$(head -1 "$f" | jq -r '.timestamp' | cut -dT -f1)
  
  if [[ "$session_date" =~ ^$MONTH ]]; then
    cost=$(jq -s '[.[] | .message.usage.cost.total // 0] | add' "$f")
    session_name=$(basename "$f" .jsonl)
    echo "$session_name,$session_date,$cost" >> "$OUTPUT_FILE"
  fi
done

echo "Monthly cost report saved to $OUTPUT_FILE"
```

### 例4: アシスタントが実行したコマンドの履歴

```bash
#!/bin/bash
# アシスタントが実行した全execコマンドを抽出

AGENT_ID="main"
SESSIONS_DIR="$HOME/.clawdbot/agents/$AGENT_ID/sessions"
OUTPUT_FILE="/tmp/command-history.txt"

echo "Command Execution History" > "$OUTPUT_FILE"
echo "=========================" >> "$OUTPUT_FILE"

for f in "$SESSIONS_DIR"/*.jsonl; do
  jq -r '.message.content[]? | select(.type == "toolCall" and .name == "exec") | .parameters.command' "$f" 2>/dev/null | while read -r cmd; do
    session_date=$(head -1 "$f" | jq -r '.timestamp' | cut -dT -f1)
    echo "[$session_date] $cmd" >> "$OUTPUT_FILE"
  done
done

echo "Command history saved to $OUTPUT_FILE"
```

### 例5: ユーザーの質問頻度分析

```bash
#!/bin/bash
# ユーザーが最も頻繁に使用するキーワードをカウント

AGENT_ID="main"
SESSIONS_DIR="$HOME/.clawdbot/agents/$AGENT_ID/sessions"

jq -r 'select(.message.role == "user") | .message.content[]? | select(.type == "text") | .text' "$SESSIONS_DIR"/*.jsonl | \
  tr '[:upper:]' '[:lower:]' | \
  tr -s '[:space:]' '\n' | \
  sort | uniq -c | sort -rn | head -50

echo "Top 50 keywords from user messages"
```

---

## ユースケース

### 過去の会話コンテキストの復元

新しいセッションを開始する際、以前の議論や決定事項を参照する用途。特に長期プロジェクトにおいて、過去の設計思想や実装方針を確認する場合に有用。

### コスト分析と予算管理

月次または週次のAPI利用コストを集計し、予算超過のリスクを早期に検知する用途。セッション別、日付別のコスト内訳を把握することで、コスト増加の原因を特定できる。

### ツール使用パターンの分析

どのツール（exec、web_search、browser等）が最も頻繁に使用されているかを分析し、ワークフローの最適化に活用する用途。

### 監査ログとしての活用

アシスタントが実行した全コマンドや操作を記録し、セキュリティ監査やトラブルシューティングに活用する用途。

### ナレッジベースの構築

過去の会話から有用な情報や解決策を抽出し、チーム内のナレッジベースやFAQドキュメントを自動生成する用途。

---

## 制限事項・セキュリティ考慮事項

### ローカルストレージへの依存

セッションログはローカルディスクに保存されるため、ディスククラッシュやデバイス紛失の際にデータが失われる可能性がある。重要な会話履歴は定期的にバックアップすることを推奨する。

### 個人情報・機密情報の含有

会話履歴には、APIキー、パスワード、個人情報等が含まれる可能性がある。セッションログファイルへのアクセス権限を適切に制限し、共有サーバー等での保存は避ける必要がある。

### ファイルサイズの肥大化

長時間の会話や大量のツール呼び出しにより、単一のセッションログが数MBから数十MBに達する場合がある。定期的にログをアーカイブまたは圧縮することを推奨する。

### 削除されたセッション

削除されたセッションは、ファイル名に `.deleted.<timestamp>` サフィックスが付与される。誤って削除したセッションを復元する際は、このサフィックスを削除することで再表示できる。

### JSON構造の変更

Clawdbotのバージョンアップにより、JSONLの構造が変更される可能性がある。古いログファイルを解析する際は、フィールドの存在確認（`jq`の `?` オペレーター）を使用することを推奨する。

### プライバシー設定

macOSおよびLinuxの標準的なファイルパーミッション（`chmod 600`）を適用し、他のユーザーからの読み取りを防ぐ必要がある。

---

## 参考リンク

- jq公式マニュアル: https://stedolan.github.io/jq/manual/
- ripgrep公式サイト: https://github.com/BurntSushi/ripgrep
- JSONL仕様: https://jsonlines.org
- Clawdbot公式サイト: https://clawdbot.com

---

本記事の情報は2026年2月15日時点のものです。各サービスの機能や仕様は変更される可能性があります。最新情報は各公式サイトをご確認ください。
