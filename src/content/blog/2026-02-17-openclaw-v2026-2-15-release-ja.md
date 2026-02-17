---
title: "OpenClaw v2026.2.15リリース - Discord Components v2対応、ネストされたサブエージェント、大規模セキュリティ強化"
description: "OpenClawの最新版v2026.2.15がリリース。Discord Components v2による対話型UI、ネストされたサブエージェント機能、SHA-256への移行を含む30件以上のセキュリティ修正を実施。"
publishedAt: "2026-02-17"
updatedAt: "2026-02-17"
category: release
tags:
  - openclaw
  - release-notes
  - coding-agent
  - security
featured: true
author: AI Tools Aggregator
lang: ja
---

OpenClawプロジェクトは2月17日、バージョン2026.2.15をリリースした。今回のリリースでは、Discord Components v2への対応、ネストされたサブエージェント機能、30件以上のセキュリティ修正が実施されている。

## 主要な新機能

### Discord Components v2対応

Discord向けのリッチインタラクティブエージェントプロンプトが可能になった。具体的には以下の要素をネイティブサポート：

- ボタン（Buttons）
- セレクトメニュー（Selects）
- モーダルダイアログ（Modals）
- 添付ファイルベースのファイルブロック

これにより、Discord上でのエージェントとのやり取りがより直感的になる。実装は[@thewilloftheshadow](https://github.com/thewilloftheshadow)氏が担当。

### ネストされたサブエージェント（Sub-Sub-Agents）

サブエージェントがさらにサブエージェントを生成できる機能が追加された。設定可能な主要パラメータ：

- `agents.defaults.subagents.maxSpawnDepth: 2` - サブエージェントの最大ネスト深度
- `maxChildrenPerAgent: 5`（デフォルト）- 1エージェントあたりの最大子エージェント数
- 深度を考慮したツールポリシー
- 適切なannounceチェーンルーティング

実装は[@tyler6204](https://github.com/tyler6204)氏が担当（[#14447](https://github.com/openclaw/openclaw/pull/14447)）。

### プラグインフックの拡張

プラグイン開発者向けに、`llm_input`および`llm_output`フックペイロードが公開された。これにより、拡張機能はプロンプト/入力コンテキストとモデル出力の使用詳細を観察できるようになる（[#16724](https://github.com/openclaw/openclaw/pull/16724)）。実装は[@SecondThread](https://github.com/SecondThread)氏が担当。

### Cronジョブとゲートウェイの機能強化

- 完了した実行のWebhook配信トグル（`notify`）
- 専用のWebhook認証トークンサポート（`cron.webhookToken`）

実装は[@advaitpaliwal](https://github.com/advaitpaliwal)氏が担当（[#14535](https://github.com/openclaw/openclaw/pull/14535)）。

## セキュリティ強化（30件以上の修正）

今回のリリースでは、セキュリティに関する修正が大規模に実施されている。

### 暗号化の強化

- **SHA-1からSHA-256への移行**: サンドボックス設定ハッシュにおいて、非推奨のSHA-1をSHA-256に置き換え。実装は[@kexinoh](https://github.com/kexinoh)氏が担当。

### シークレット漏洩防止

- **Telegramボットトークンの編集**: エラーメッセージとスタックトレースから自動削除
- **Gateway/Security**: 非管理者クライアントに対し、ステータスレスポンスから機密のセッション/パス詳細を編集（[#8590](https://github.com/openclaw/openclaw/issues/8590)）

実装は[@aether-ai-agent](https://github.com/aether-ai-agent)氏、[@fr33d3m0n](https://github.com/fr33d3m0n)氏が担当。

### サンドボックスの強化

危険なDockerサンドボックス設定（バインドマウント、ホストネットワーキング、制限なしのseccomp/apparmor）をブロックし、設定インジェクション経由のコンテナエスケープを防止。実装は[@aether-ai-agent](https://github.com/aether-ai-agent)氏が担当。

### インジェクション攻撃の防止

- **スキルインストーラー**: ダウンロードインストーラーの`targetDir`をスキルごとのツールディレクトリに制限し、任意のファイル書き込みを防止（[@Adam55A-code](https://github.com/Adam55A-code)氏）
- **ワークスパスパスのサニタイゼーション**: LLMプロンプトに埋め込む前にUnicode制御/フォーマット文字を除去し、悪意のあるディレクトリ名による命令インジェクションを防止（[@aether-ai-agent](https://github.com/aether-ai-agent)氏）
- **Control UIのXSS対策**: アシスタント名/アバターを介した保存型XSSを防止。インラインスクリプトインジェクションを削除し、`script-src 'self'`を強制（[@Adam55A-code](https://github.com/Adam55A-code)氏）
- **Gateway/Chat**: `chat.send`の受信メッセージハンドリングを強化。nullバイト拒否、安全でない制御文字の除去、ディスパッチ前のUnicodeのNFC正規化を実施（[#8593](https://github.com/openclaw/openclaw/issues/8593)、[@fr33d3m0n](https://github.com/fr33d3m0n)氏）

### Web Fetchのメモリ保護

ダウンロードしたレスポンスボディのサイズをHTMLパース前に制限し、巨大または深くネストされたページからのメモリ枯渇を防止。実装は[@xuemian168](https://github.com/xuemian168)氏が担当。

### Gitセキュリティ

開発ツールのGit pre-commitフックを強化し、悪意のあるファイル名（例：`--force`）からのオプションインジェクションに対処。無視されたファイルの誤ステージングを防止。実装は[@mrthankyou](https://github.com/mrthankyou)氏が担当。

## プラットフォーム固有の改善

### Telegram

- **音声メッセージ処理の改善**: メンション制御の音声メッセージに対し、成功したプリフライト音声トランスクリプトでインバウンドプレースホルダーを置換（[#16789](https://github.com/openclaw/openclaw/pull/16789)）
- **メディア取得のリトライ**: インバウンドメディア`getFile`呼び出しをリトライ（3回、バックオフあり）。リトライ失敗時はプレースホルダーのみの処理にフォールバック（[#16154](https://github.com/openclaw/openclaw/pull/16154)）
- **ストリーミングプレビューの重複排除**: ストリーミングプレビュー返信を同じメッセージ内でファイナライズし、ストリーム完了時の重複Telegram出力を防止（[#17218](https://github.com/openclaw/openclaw/pull/17218)）
- **DM送信の修正**: DM送信/ドラフトプレビューで`message_thread_id`を省略し、400 Bad Request: message thread not foundエラーを防止（[#10942](https://github.com/openclaw/openclaw/pull/10942)）

### Discord

- **セッション継続性の保持**: ランタイムペイロードが`message.channelId`を省略した場合でも、event/rawの`channel_id`値にフォールバックしてチャネルセッション継続性を維持（[#17622](https://github.com/openclaw/openclaw/pull/17622)）
- **スラッシュコマンド重複排除**: マルチエージェント設定でスキル名ごとにネイティブスキルコマンドを重複排除し、`_2`サフィックス付き重複スラッシュコマンドを防止（[#17365](https://github.com/openclaw/openclaw/pull/17365)）
- **ロール認証**: ロール許可リストマッチングが、メッセージルーティング認証のために生のロールIDを使用するよう修正

### LINE

Webhookスタートアップ時に、チャネルトークンまたはチャネルシークレットが欠けている場合はfail closedで動作し、LINEアカウントは両方が存在する場合のみ設定済みとして扱う（[#17587](https://github.com/openclaw/openclaw/issues/17587)、[@davidahmann](https://github.com/davidahmann)氏）。

## エージェント機能の改善

### コンテキストウィンドウ管理

- モデルメタデータから`lookupContextTokens()`を導出し、重複するモデルIDに対して最小の発見されたコンテキストウィンドウを保持。クロスプロバイダーキャッシュ衝突によるセッションコンテキスト制限の過大評価を防止（[#17586](https://github.com/openclaw/openclaw/issues/17586)）
- 設定されたモデル`contextWindow`オーバーライドをプロバイダー検出後に適用し、`lookupContextTokens()`がオペレーター設定値を尊重するよう修正（[#17404](https://github.com/openclaw/openclaw/issues/17404)）

### OpenAI Responses/Codex

直接のOpenAI Responses/Codex実行に対して`store=true`を強制し、マルチターンのサーバーサイド会話状態を保持。プロキシ/非OpenAIエンドポイントは変更なし（[#16803](https://github.com/openclaw/openclaw/issues/16803)）。

### メモリとタイムゾーン

`memory/YYYY-MM-DD.md`プレースホルダーをタイムゾーン対応のランタイム日付で解決し、メモリフラッシュターンに`Current time:`行を追加。システムプロンプトを時間可変にすることなく、間違った年のメモリファイル名を防止（[#17603](https://github.com/openclaw/openclaw/issues/17603)、[#17633](https://github.com/openclaw/openclaw/issues/17633)）。

### グループチャットコンテキスト

グループチャットコンテキスト（名前、参加者、返信ガイダンス）を、最初のターンだけでなく毎ターンシステムプロンプトに注入。モデルがどのグループにいるかの認識を失い、同じグループへの送信にmessageツールを誤って使用することを防止（[#14447](https://github.com/openclaw/openclaw/pull/14447)）。

### ブラウザツールのエラーハンドリング

ブラウザ制御サービスが利用不可能な場合、「再試行してください」ではなく明示的な非リトライガイダンスを返し、モデルがタイムアウトまでブラウザツール呼び出しをループすることを防止（[#17673](https://github.com/openclaw/openclaw/pull/17673)）。

## TUI（ターミナルUI）の改善

### ANSIコード処理

検索可能セレクトのフィルタリングとハイライトレンダリングをANSI対応に改善。クエリが隠れたエスケープコードを無視し、マッチハイライト中にANSIスタイリングシーケンスを破損しないよう修正（[#4519](https://github.com/openclaw/openclaw/issues/4519)）。

### トークンの保護

ラッピングとオーバーフロー除去処理中に、コピーに敏感な長いトークン（URL/パス/ファイル類似の識別子）を保持。ラップされた出力がコピー/ペースト値を破損するスペースを挿入しないよう修正（[#17515](https://github.com/openclaw/openclaw/issues/17515)、[#17466](https://github.com/openclaw/openclaw/issues/17466)、[#17505](https://github.com/openclaw/openclaw/issues/17505)）。

### Windows Git Bash対応

Git Bashで、bracketed pasteが利用不可能な場合のフォールバックとして、急速な単一行送信バーストを1つの複数行メッセージに統合。ペーストされた複数行テキストが複数の送信に分割されることを防止（[#4986](https://github.com/openclaw/openclaw/issues/4986)）。

## その他の修正

- **Memory/FTS**: `buildFtsQuery`をUnicode対応にし、非ASCII（CJKを含む）クエリがベクトルのみの検索にフォールバックせずにキーワードトークンを生成するよう修正（[#17672](https://github.com/openclaw/openclaw/issues/17672)）
- **Web UI/Agents**: オンボーディング完了後、Agents FilesリストでBOOTSTRAP.mdを非表示に。完了したワークスペースに対する混乱を招く欠落ファイル警告を回避（[#17491](https://github.com/openclaw/openclaw/pull/17491)）
- **Subagents**: 子実行ベースの決定論的announceべき等キーを、直接配信パスとキュー配信パスの両方で使用（レガシーキューアイテムフォールバックあり）。同一ミリ秒のannounceを折りたたむことなく、重複announceリトライを防止（[#17150](https://github.com/openclaw/openclaw/pull/17150)）

## コントリビューター

今回のリリースには、30名以上のコントリビューターが貢献している。主なコントリビューター：

- [@thewilloftheshadow](https://github.com/thewilloftheshadow) - Discord Components v2
- [@tyler6204](https://github.com/tyler6204) - ネストされたサブエージェント
- [@SecondThread](https://github.com/SecondThread) - プラグインフック
- [@aether-ai-agent](https://github.com/aether-ai-agent) - 複数のセキュリティ修正
- [@Adam55A-code](https://github.com/Adam55A-code) - XSS対策とファイル書き込み保護
- [@vignesh07](https://github.com/vignesh07) - 多数のエージェント機能改善

## 入手方法

OpenClaw v2026.2.15は、GitHubリリースページから入手可能。

**リリースページ**: https://github.com/openclaw/openclaw/releases/tag/v2026.2.15

---

**情報源**: OpenClaw GitHub Repository  
**リリース日**: 2026年2月17日  
**対象**: OpenClaw全ユーザー
