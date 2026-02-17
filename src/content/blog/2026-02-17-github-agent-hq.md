---
title: "GitHub Agent HQ、Claude・Codexを統合しマルチエージェント開発環境を実現"
description: "GitHubは2026年2月、Copilot Pro+およびEnterpriseユーザー向けにAgent HQを拡張。Anthropic Claude、OpenAI Codexをパブリックプレビューとして追加し、複数のAIエージェントを統合ワークフロー内で利用可能にした。"
publishedAt: "2026-02-17T00:30:00+09:00"
author: "AI Tools Hub"
category: "AI開発ツール"
tags: ["GitHub", "Copilot", "Agent HQ", "Claude", "Codex", "マルチエージェント"]
featured: true
lang: "ja"
seo:
  keywords: "GitHub Agent HQ, Claude統合, Codex統合, マルチエージェント開発, GitHub Copilot"
---

# GitHub Agent HQ、Claude・Codexを統合しマルチエージェント開発環境を実現

GitHubは2026年2月4日、GitHub Copilot Pro+およびCopilot Enterpriseユーザー向けに、複数のAIコーディングエージェントを単一ワークフロー内で利用可能にする「Agent HQ」の拡張を発表した。これにより、GitHub Copilot、Anthropic Claude、OpenAI Codexを、GitHub、Visual Studio Code、GitHub Mobile上で直接実行できるようになる（Claude、Codexはパブリックプレビュー）。

## Agent HQの概要

Agent HQは、異なるAIコーディングエージェントをGitHubのネイティブワークフロー内で統合利用できるプラットフォームである。従来、複数のAIツールを使用する際にはコンテキストの切り替えとコピー＆ペーストが必要だったが、Agent HQではすべての議論と提案された変更がリポジトリに紐付けられ、ドラフトプルリクエストやコメントとして既存のレビュープロセス内で処理される。

### 提供環境

- GitHub（Webインターフェース）
- Visual Studio Code
- GitHub Mobile
- Copilot CLI（近日サポート予定）

## 複数エージェントの並行利用による早期レビュー

Agent HQの主要な特徴は、同じタスクに複数のエージェントを割り当て、それぞれのアプローチを比較できる点にある。これにより、レビューの焦点を「構文」から「戦略」へとシフトすることが可能となる。

### 実用例

- **アーキテクチャガードレール**: エージェントがモジュール性と結合度を評価し、意図しない副作用を引き起こす可能性のある変更を特定
- **ロジック検証**: 別のエージェントがエッジケース、非同期処理の落とし穴、スケールの前提条件など、本番環境で問題を引き起こす可能性のある要素を探索
- **実用的な実装**: 第三のエージェントが後方互換性を保ちつつ、リファクタリングの影響範囲を最小化する変更を提案

AnthropicのHead of Platform、Katelyn Lesse氏は「開発者が必要とする場所で、必要な推論力を提供することが目標。Agent HQにより、Claudeがコードをコミットしプルリクエストにコメントでき、チームの反復を加速できる」と述べた。

## 統合されたエージェントと技術的詳細

### GitHub Copilot（標準搭載）

GitHubのネイティブAIコーディングアシスタント。コード補完、コメントからのコード生成、プルリクエストの説明生成などを提供。

### Anthropic Claude（パブリックプレビュー）

2026年2月5日に発表されたOpus 4.6を含むClaudeモデルを利用可能。エージェンティックコーディング、コンピュータユース、ツールユース、検索、ファイナンスの各領域で業界をリードするパフォーマンスを示している。

### OpenAI Codex（パブリックプレビュー）

OpenAIのAlexander Embiricos氏は「最初のCodexモデルがCopilotの原動力となり、新世代のAI支援コーディングにインスピレーションを与えた。GitHubとのビジョンを共有し、開発者が作業する場所でCodexを提供できることを嬉しく思う」とコメントした。

## エンタープライズ向け管理機能

Agent HQは個人開発者だけでなく、組織全体に対して以下の機能を提供する。

### エージェント管理

組織全体でアクセスおよびセキュリティポリシーを一元管理。エンタープライズ管理者は、どのエージェントとモデルが許可されるかを定義できる。ポリシーは以下の3種類に分類される。

- **Feature policy**: Copilot機能の利用可否を定義
- **Privacy policy**: 潜在的に機密性の高い操作の許可・拒否を定義
- **Models policy**: 基本モデルを超えるモデルの利用可否を定義（追加コストが発生する可能性がある）

組織レベルでは「Enabled（有効）」「Disabled（無効）」「Unconfigured（未設定）」の3つの設定が可能。エンタープライズレベルでは「Policy defined（ポリシー定義済み）」または「No policy（ポリシーなし）」を選択でき、後者の場合は組織オーナーが独自に設定できる。

### GitHub Code Quality（パブリックプレビュー）

Copilotのセキュリティチェックを拡張し、変更されたコードの保守性と信頼性への影響を評価。「LGTM（Looks Good To Me）」が長期的なコード品質を反映することを保証する。

### 自動初回レビュー

Copilotのワークフローに統合されたコードレビューステップ。開発者が確認する前に初期の問題に対処する。レビューは以下の環境で利用可能。

- GitHub.com（プルリクエスト作成時にレビュアーとしてCopilotを選択）
- Visual Studio Code（選択コード、未コミット変更、プルリクエストのレビュー）
- Visual Studio（17.14以降、Git Changes窓から「Review changes with Copilot」を選択）
- GitHub Mobile
- Xcode（GitHub Copilot Chat extension 0.41.0以降）
- JetBrains IDE（IntelliJ IDEA、PyCharm、WebStorm等）

レビューのカスタマイズには、リポジトリ内の`.github/copilot-instructions.md`ファイルに指示を記述可能。パス固有の指示は`.github/instructions/**/*.instructions.md`で定義できる。

### Copilotメトリクスダッシュボード（パブリックプレビュー）

組織全体のAgent HQ利用状況と影響を追跡。エージェントが生成した作業の明確なトレーサビリティを提供。

### セキュリティと監査可能性

監査ログとエンタープライズグレードのアクセス管理により、エージェントがセキュリティポリシーに準拠することを保証。組織は全コントロールを維持しつつ、エージェントベースのワークフローを採用できる。

## 料金プランと利用可能機能

Agent HQで複数のAIエージェント（Claude、Codex）を利用するには、GitHub Copilot Pro+またはCopilot Enterpriseサブスクリプションが必要である。2026年2月時点のプラン体系は以下の通り。

### 個人開発者向けプラン

**GitHub Copilot Free（無料）**
- 月額: $0
- コード補完: 月2,000回
- プレミアムリクエスト: 月50回
- Agent mode（GPT-5 mini使用）: 月50回
- Claude・Codex統合: 利用不可

**GitHub Copilot Pro**
- 月額: $10（年払いの場合$100）
- コード補完: 無制限
- プレミアムリクエスト: 月300回
- Agent mode: 無制限
- Claude・Codex統合: 利用不可
- 学生、教職員、人気オープンソースプロジェクトメンテナーは無料

**GitHub Copilot Pro+**
- 月額: $39（年払いの場合$390）
- コード補完: 無制限
- プレミアムリクエスト: 月1,500回
- Agent mode: 無制限
- **Claude・Codex統合: 利用可能（パブリックプレビュー）**
- 追加プレミアムリクエスト: $0.04/リクエスト

### 組織・エンタープライズ向けプラン

**GitHub Copilot Business**
- 組織向け（GitHub FreeまたはGitHub Teamプラン、GitHub Enterprise Cloud）
- Copilot coding agent搭載
- 一元管理とポリシー制御
- 料金: 要問合せ

**GitHub Copilot Enterprise**
- GitHub Enterprise Cloud利用企業向け
- Copilot Businessの全機能に加え、エンタープライズグレード機能
- **Claude・Codex統合: 利用可能（パブリックプレビュー）**
- 組織のコードベース索引化、カスタムプライベートモデル対応
- 料金: 要問合せ

### プレミアムリクエストとは

Agent mode、コードレビュー、coding agent、Copilot CLI、Copilot Chatはプレミアムリクエストを消費する。利用リクエスト数は機能やモデルにより変動する。Pro+プランでは月1,500リクエストまで含まれ、超過分は1リクエストあたり$0.04で購入可能。

## 導入方法

### 前提条件

Agent HQでClaude・Codexを利用するには、以下が必要。

1. GitHub Copilot Pro+またはCopilot Enterpriseサブスクリプション
2. 対応環境（GitHub、Visual Studio Code、GitHub Mobile）のいずれか
3. GitHubアカウント

### Pro+サブスクリプションの開始手順

1. GitHubにサインイン
2. GitHub Copilot Pro+サブスクリプションページ（https://github.com/github-copilot/signup）にアクセス
3. プラン選択画面で「Pro+」を選択
4. 支払い情報を入力し、サブスクリプションを開始（30日間無料トライアル対象外）

### Agent HQでのエージェント利用方法

**GitHub.com（Webインターフェース）の場合:**

1. リポジトリのIssueまたはプルリクエストを開く
2. エージェント選択画面（Agent HQ）を表示
3. 利用可能なエージェント（GitHub Copilot、Claude、Codex）から選択
4. タスクを割り当て、エージェントの提案を確認

**Visual Studio Codeの場合:**

1. GitHub Copilot拡張機能がインストールされていることを確認
2. コマンドパレット（Cmd+Shift+P / Ctrl+Shift+P）から「Copilot: Open Agent HQ」を選択
3. エージェント選択メニューからClaude、Codex、Copilotのいずれかを選択
4. チャット、コードレビュー、Agent mode等で利用開始

**GitHub Mobileの場合:**

1. GitHub Mobileアプリを最新版に更新
2. プルリクエストまたはIssueを開く
3. 「Request Reviews」からCopilotまたはサードパーティエージェント（Claude、Codex）を選択
4. エージェントがレビューを実行

### エンタープライズでのポリシー管理

組織管理者は、以下の手順でエージェントアクセスを制御できる。

1. GitHubエンタープライズ設定にアクセス
2. 「Copilot」→「Policies」セクションを開く
3. 「Models policy」で、ClaudeやCodexの利用可否を設定
4. 組織メンバーまたはチーム単位でアクセス権限を割り当て
5. 監査ログで利用状況を追跡

## 今後の展開

ClaudeとCodexへのアクセスは、今後さらに多くのCopilotサブスクリプションタイプに拡大される予定。GitHubは現在、Google、Cognition、xAIなどのパートナーと協力し、GitHub、VS Code、Copilot CLIワークフローにさらに専門的なエージェントを導入する作業を進めている。

## 参考リンク

- GitHub公式ブログ: "Pick your agent: Use Claude and Codex on Agent HQ" (https://github.blog/news-insights/company-news/pick-your-agent-use-claude-and-codex-on-agent-hq/)
- GitHub Copilot Policies Documentation (https://docs.github.com/en/copilot/concepts/policies)
- GitHub Copilot Code Review Documentation (https://docs.github.com/en/copilot/how-tos/use-copilot-agents/request-a-code-review/use-code-review)
- Anthropic公式ニュース: Opus 4.6発表（2026年2月5日）(https://www.anthropic.com/news)

---

*本記事の情報は2026年2月17日時点のものです。各サービスの機能や料金は変更される可能性があります。最新情報は各公式サイトをご確認ください。*
