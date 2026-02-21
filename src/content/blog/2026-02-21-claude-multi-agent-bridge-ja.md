---
title: "Claude CodeとブラウザClaudeを直接つなぐ——「claude-multi-agent-bridge」が解決した5つの技術的難問"
description: "Claudeインスタンス同士をリアルタイム通信させるOSS「claude-multi-agent-bridge」が公開された。Claude Code CLI、ブラウザClaude、デスクトップClaudeをHTTPメッセージバスで接続する実験的な実装で、CSP制約・レスポンス検出・Chromeキャッシュなど5つの技術的難問をどう解決したかを詳細に解説する。"
publishedAt: "2026-02-21T19:00:00+09:00"
author: "AI Tools Hub"
category: "tool"
lang: "ja"
tags: ["Claude Code", "マルチエージェント", "Python", "Chrome拡張", "OSS", "AIエージェント", "HTTP"]
---

「Claude CodeでコーディングしながらブラウザのClaudeでリサーチしている。2つの画面を行き来しながらコピペしている。これは2026年の話だ」——この問いから始まった実験的プロジェクト「**claude-multi-agent-bridge**」が公開された。

GitHubユーザー[@yakub268](https://github.com/yakub268)がClaude Sonnet 4.5を使って1つのデバッグセッションで構築したこのシステムは、Claude CodeのCLI・ブラウザClaudeの間をHTTPメッセージバスで接続し、**AIインスタンス同士がリアルタイムで通信できる**環境を実現する。

## 何ができるのか

従来の作業フローと、本ツール導入後の変化を示す：

**従来：**
1. Claude Codeに「React hooksをリサーチして」と入力
2. ブラウザに切り替え
3. 同じことをもう一度入力
4. 待機
5. レスポンスをコピー
6. Claude Codeに貼り付け

**claude-multi-agent-bridge使用後：**
```python
c.send('browser', 'command', {'action': 'run_prompt', 'text': 'Research React hooks'})
response = c.poll()  # 完了
```

5ステップが1行のコードになる。

## アーキテクチャ：シンプルなHTTPバス

```
Claude Code CLI（Pythonスクリプト）
         ↓ HTTP POST
   メッセージバス（Flask/localhost:5001）
   ↑100件のキュー↑
         ↓
   Chrome拡張（Manifest v3）
         ↓
   ブラウザClaude（claude.ai）
         ↓ DOM操作
   レスポンス抽出 → バスに返信
```

エンドツーエンドのレイテンシは**約2〜5秒**。

### コンポーネント構成

- **server.py**：Flaskによる100件循環バッファ付きHTTPサーバー
- **code_client.py**：PythonクライアントAPI（send/poll/broadcast/listen）
- **browser_extension/**：Manifest v3準拠のChrome拡張

## 5つの技術的難問と解法

実装の大半は、claude.aiが課す制約との格闘だったという。解決した問題を順に見ていく。

### 難問1：Content Security Policy（CSP）

claude.aiは`eval()`・インラインスクリプト・動的スクリプト挿入を明示的にブロックする。

**うまくいかなかったアプローチ：**
```javascript
const script = document.createElement('script');
script.textContent = `...`;
document.body.appendChild(script); // CSP違反！
```

**解法：eval不使用の純粋なDOM操作**
```javascript
const input = document.querySelector('[contenteditable="true"]');
input.textContent = text;
input.dispatchEvent(new Event('input', {bubbles: true}));
```

eval系APIを一切使わず、DOMの直接操作のみでテキスト入力を実現している。

### 難問2：レスポンス検出

Claudeの「Thinking...」ステータスはDOMから消えない。「Thinkingが消えるのを待つ」というアプローチは機能しない。

**解法：「Done」インジケーターを監視**
```javascript
const hasDone = Array.from(document.querySelectorAll('*'))
  .some(el => el.textContent.trim() === 'Done');
```

Claudeがレスポンスを完了した際に表示される「Done」テキストをMutationObserverで検出する。

### 難問3：Chromeの積極的キャッシュ

拡張機能ファイルは「拡張機能を再読み込み」ボタンを押してもキャッシュされ続ける。

**解法：manifest.jsonのバージョンをバンプ**
```json
"version": "1.0.1" → "1.0.2"
```

バージョン番号を変更することでChromeのキャッシュクリアを強制する。

### 難問4：メッセージキューのバックログ

拡張機能起動時に古いメッセージを処理してしまう問題。

**解法：タイムスタンプフィルタリング**
```javascript
let lastTimestamp = new Date().toISOString();
// 現在時刻以降のメッセージのみ処理
```

起動時刻を基準にして、それ以前のバックログを無視する。

### 難問5：重複レスポンス

MutationObserverが複数回発火し、同一レスポンスが10回送信される問題。

**解法：重複排除ロジック**
```javascript
let lastSentResponse = null;
if (response !== lastSentResponse) {
  send(response);
  lastSentResponse = response;
}
```

## 実用ユースケース

### 並列リサーチ
```python
# Claude Codeでコーディングしながらバックグラウンドでリサーチ
c.send('browser', 'command', {
    'text': 'React 19の破壊的変更を調べて'
})
# 作業を続ける…レスポンスは非同期で届く
```

### マルチモデル合議
```python
# 複数インスタンスに同じ質問
c.send('browser', 'command', {'text': 'P=NP問題について'})
c.send('desktop', 'command', {'text': 'P=NP問題について'})
# 回答を比較
```

### コンテキストウィンドウの拡張
```python
# ブラウザClaudeのアーティファクト・プロジェクト機能を活用
# CLIから制御
c.send('browser', 'command', {
    'text': '最後のアーティファクトのコードでReactコンポーネントを作成して'
})
```

## 検証済みのパフォーマンス

`quick_validation.py` による本番環境検証：
- サーバー稼働時間：54分
- 総メッセージ数：235件
- エラー率：0%
- 並列スループット：50メッセージ/秒
- チャンネル分離：100%（リーク検出なし）

## 現在の制限と今後のロードマップ

このプロジェクトは「1回の集中したデバッグセッション（15回以上の拡張機能リロード）」で構築されたと作者が認める実験的実装だ。

**現在の制限：**
- レスポンスの信頼性はブラウザClaude側のDOMに依存
- Claude.aiのUI変更があれば即座に動作しなくなる可能性がある
- エラー処理・リトライロジックが未整備

**ロードマップ（予定）：**
- WebSocket対応（現在のポーリングを置き換え）
- メッセージ永続化（SQLite）
- ストリーミングレスポンス（SSE）
- アーティファクト抽出
- Firefox/Safari拡張対応

## 本日のKarpathy「Claw」論と接続する

Andrej Karpathyが本日「Claw = LLMエージェントの上の新しい層」と定義したことを受けると、このプロジェクトの意義がより明確になる。

claude-multi-agent-bridgeは、単一のClaudeインスタンスが持つ制約（コンテキスト・ツール・UI）を複数インスタンスの協調で突破しようとする、Clawの初期的な実験だ。

メッセージバスというシンプルな抽象化が「AIインスタンス間通信」という新しい問題クラスへの最初のアプローチとして評価できる。本番利用にはまだ距離があるが、マルチエージェント協調の具体的な実装として、発展を追う価値があるプロジェクトだ。

---

*ソース: <https://github.com/yakub268/claude-multi-agent-bridge>*
*ライセンス: MIT*
