---
title: "OpenClaw v2026.2.17リリース：Claude Sonnet 4.6対応、1Mコンテキスト、Slack/Telegram強化"
description: "OpenClawが大規模アップデートをリリース。Claude Sonnet 4.6と1Mコンテキストウィンドウに対応、Slackネイティブストリーミング、Telegramインラインボタンスタイル、iOS Share Extension、セキュリティ修正（OC-09）を含む100件以上の変更を実装。"
publishedAt: "2026-02-18T12:00:00+09:00"
author: "AI Tools Hub"
category: "release"
lang: "ja"
tags: ["OpenClaw", "Clawdbot", "Claude", "Sonnet-4-6", "Slack", "Telegram", "iOS", "セキュリティ"]
featured: true
---

OpenClawは2月17日、バージョン2026.2.17をリリースした。Claude Sonnet 4.6対応、1Mトークンコンテキストウィンドウのベータサポート、Slack/Telegramの大幅な改善、iOS機能強化、重大なセキュリティ修正を含む、100件以上の変更を実装している。

## Claude Sonnet 4.6と1Mコンテキスト対応

### Sonnet 4.6のサポート

`anthropic/claude-sonnet-4-6`エイリアスで最新のClaude Sonnet 4.6に対応。上流のモデルカタログがまだSonnet 4.5のみを公開している場合でも、前方互換フォールバックにより利用可能になっている。

### 1Mトークンコンテキストウィンドウ（ベータ）

Opus/Sonnetで1Mトークンコンテキストウィンドウをオプトインで有効化可能。モデルパラメータで`params.context1m: true`を設定することで、`anthropic-beta: context-1m-2025-08-07`ヘッダーがマッピングされる。

コードベース全体、長大な契約書、数十本の研究論文を一度に処理できるようになり、長文脈推論タスクの性能が大幅に向上する。

## メッセージング基盤の強化

### Slackネイティブストリーミング

Slack向けに`chat.startStream`/`appendStream`/`stopStream`を使用したネイティブ単一メッセージテキストストリーミングを実装。返信スレッディングは`replyToMode`設定に従い、ストリーミングがデフォルトで有効化された。

ストリーミング失敗時は通常配信へのフォールバックが実行され、安定性が確保されている。

### Telegramインラインボタンスタイル

`message`ツールスキーマ、Telegramアクションパース、送信パイプライン全体でインラインボタンスタイル（`primary`/`success`/`danger`）をサポート。ランタイムプロンプトガイダンスにも反映されている。

さらに、ユーザーメッセージのリアクションがシステムイベントとして取得可能になり、`channels.telegram.reactionNotifications`で通知スコープを設定できる。

## Subagents機能の拡張

### /subagents spawnコマンド

チャットコマンドから決定論的にSubagentをアクティブ化できる`/subagents spawn`コマンドを追加。これにより、Subagent起動の制御性が向上した。

### コンテキスト管理の改善

Subagentは、モデル呼び出し前に累積されたツール結果コンテキストを事前にガードし、過大な出力を切り詰め、最古のツール結果メッセージを圧縮することで、コンテキストウィンドウオーバーフロークラッシュを防ぐようになった。

`[compacted: tool output removed to free context]`や`[truncated: output exceeded context limit]`マーカーからの回復ガイダンスも追加され、フルファイル`cat`ではなく小さなチャンクで再読み込みする指示が明示されている。

## iOS機能の大幅強化

### Share Extension

iOSシェア拡張機能を追加。共有されたURL/テキスト/画像コンテンツを`gateway agent.request`に直接転送し、配信ルートフォールバックとオプションの受信確認をサポート。

### Talk Mode改善

- **Background Listening**: Talk Modeをアプリバックグラウンド時も継続できるトグルを追加（デフォルトはオフでバッテリー保護）
- **Voice Directive Hint**: ElevenLabsの音声切り替え指示を無効化してトークンを節約するトグル
- **バーグイン強化**: 出力ルートが内蔵スピーカー/レシーバーの場合、音声中断を無効化してローカルTTS漏れによる誤中断を軽減

### オンボーディング改善

QR優先のオンボーディングウィザードを追加。セットアップコードのディープリンクサポート、ペアリング/認証問題のガイダンス、Telegram/Web/TUIフォールバックフローのデバイスペアQR生成を改善。

## Cron/自動化機能の拡張

### Webhookベースの配信

ジョブごとのWebhook配信（`delivery.mode = "webhook"`）をアナウンス配信から分離。有効なHTTP(S) WebhookのURLを強制し、保存済みジョブ向けの一時的なレガシー`notify` + `cron.webhook`フォールバックを維持。

### スケジュールのStagger制御

定期的な正時Cronスケジュール（6フィールド秒Cronを含む）に決定論的なデフォルトStaggerを追加。既存ジョブを永続化された`schedule.staggerMs`に自動移行し、`openclaw cron add/edit --stagger`および`--exact`オーバーライドでジョブごとのタイミング制御を可能にした。

### 使用量テレメトリー

Cron実行ログ/Webhookにモデル/プロバイダー使用量テレメトリーを記録。ジョブ別のトークン使用量を集計するローカル使用量レポートスクリプトを追加。

## セキュリティ修正

### OC-09認証情報窃取パスの修正

環境変数インジェクション経由のOC-09認証情報窃取パスを修正。

### Config $includeの制限

`$include`解決をトップレベルのconfigディレクトリに制限。クロスプラットフォームセーフなパス包含性で、トラバーサル/シンボリックリンクチェックを強化。無効なエスケープされたincludeパスに対するdoctorヒントを追加。

### セッション転写ファイルのアクセス権限

新しいセッション転写JSONLファイルをユーザーのみ（`0o600`）の権限で作成。`openclaw security audit --fix`を拡張して、既存の転写ファイルの権限を修復可能にした。

## ツール機能の改善

### readツールの自動ページング

明示的な`limit`が指定されていない場合、`read`ツールがチャンク全体で自動ページングを実行。モデルの`contextWindow`に応じて呼び出しごとの出力予算をスケールし、コンテキストガードが起動する前に大きなコンテキストでより多く読み取れるようになった。

### Web検索/フェッチのURL Allowlist

`web_search`と`web_fetch`にURL Allowlistを追加。セキュリティとコンプライアンス要件に対応。

### ブラウザ起動のカスタマイズ

カスタムChrome起動引数用の`extraArgs`設定を追加。ヘッドレスモードやサンドボックス無効化など、高度なブラウザ制御が可能になった。

## Discord/Mattermost/Feishu改善

### Discord

- ネイティブ`/exec`コマンドオプション（`host`/`security`/`ask`/`node`）を公開し、Discordスラッシュコマンドでオートコンプリートと構造化入力を提供
- `components.reusable=true`で再利用可能なインタラクティブコンポーネントをサポート
- ボタンごとの`allowedUsers` Allowlistで、誰がボタンをクリックできるかを制限

### Mattermost

絵文字リアクションアクションとリアクションイベント通知を追加。誤削除を防ぐ明示的なboolean `remove`フラグを含む。

### Feishu

自動化ワークフロー向けにBitable `create-app`/`create-field`ツールを追加。

## メモリ検索の強化

FTS（全文検索）フォールバックとクエリ拡張をメモリ検索に追加。セマンティック検索の精度が向上し、関連性の低いヒット時の代替検索パスを提供。

## プロバイダー対応の拡張

### Z.AI

リアルタイムツールコールストリーミング用に`tool_stream`をデフォルトで有効化。`params.tool_stream: false`でオプトアウト可能。

### OpenAI Codex CLI

OpenAI Codex CLI認証プロバイダー統合を追加。

### Ollama/Qwen

Ollama応答でQwen 3の推論フィールド形式を処理可能に。

## Docker/インフラ改善

オプションの`OPENCLAW_INSTALL_BROWSER`ビルド引数を追加。Dockerイメージ内にChromium + Xvfbを事前インストールし、ランタイムPlaywrightインストールを回避できるようになった。

## 主要なバグ修正（抜粋）

### 返信スレッディングの一貫性

ストリーミング/分割チャンク全体で返信コンテキストを維持し、iMessage、BlueBubbles、Telegram、Discord、Matrixを含む共有およびチャンネル固有の配信パスで`replyToId`を保持。フォローアップのバブルが同じ参照メッセージに接続されるようになった。

### Telegramストリーミングの安定性

- `replyToMode: "all"`のグループ/DMで、ドラフトストリーム プレビュー返信をユーザーメッセージに接続
- 最終返信が後続の最終/エラーペイロードで上書きされないよう防止
- 最初のドラフトストリームプレビュー更新を30文字しきい値でデバウンス

### Cronジョブのループ修正

Cronジョブがスケジュールされた秒内に完了した場合のスピンループを防止。次回実行を進め、最小再発火ギャップを強制。

### Gateway自動更新の改善

失敗した自動更新後の再起動クラッシュループを防止。成功した更新時のみ再起動し、失敗したインストール/ビルドステップで早期停止。更新中に`openclaw doctor --fix`を実行してconfigをサニタイズ。

## 移行と互換性

本リリースには破壊的変更は含まれていないが、以下の点に注意が必要：

1. **セッション転写ファイル**: 新規ファイルは`0o600`権限で作成される
2. **Cronスケジュール**: 既存ジョブは自動的にStagger設定に移行される
3. **Discordコマンド**: 数値IDはstring IDに変換される（doctorが自動修復）

## 貢献者

このリリースには、60名以上のコントリビューターからの100件以上のPRが含まれている。主な貢献者：

- [@tyler6204](https://github.com/tyler6204) - Subagent、BlueBubbles、Reply Threading改善
- [@mbelinky](https://github.com/mbelinky) - iOS全般（Share Extension、Talk Mode、Onboarding）
- [@obviyus](https://github.com/obviyus) - Telegram全般（ストリーミング、ボタンスタイル、スレッディング）
- [@thewilloftheshadow](https://github.com/thewilloftheshadow) - Discord改善
- [@natedenh](https://github.com/natedenh) - Slackストリーミング
- [@aether-ai-agent](https://github.com/aether-ai-agent) - セキュリティ修正（OC-09、Config $include）

## 入手方法

OpenClaw v2026.2.17は、公式GitHubリリースページから入手可能：

- **GitHub**: https://github.com/openclaw/openclaw/releases/tag/v2026.2.17
- **更新コマンド**: `openclaw update`

**既存ユーザーへの推奨事項:**
1. 更新前に設定をバックアップ
2. `openclaw doctor --fix`を実行して設定を検証
3. セキュリティ修正（OC-09）が含まれるため、早急な更新を推奨

## 所感

このリリースは、OpenClawの成熟度を示す大規模なアップデートだ。Claude Sonnet 4.6対応と1Mコンテキストウィンドウは、長文脈推論タスクの性能向上に直結する。Slack/Telegramの改善はエンタープライズユースケースでの採用を促進し、iOS機能強化はモバイルユーザー体験を大幅に改善する。

特にセキュリティ修正（OC-09）が含まれている点は重要で、既存ユーザーは早急に更新すべきだ。100件以上の変更を含む包括的なリリースでありながら、破壊的変更を回避している点も評価できる。

**出典**: [OpenClaw GitHub Releases](https://github.com/openclaw/openclaw/releases/tag/v2026.2.17)
