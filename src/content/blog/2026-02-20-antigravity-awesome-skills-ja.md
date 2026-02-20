---
title: "868のスキルをnpx 1コマンドで——「Antigravity Awesome Skills」が主要AIコーディングエージェントの共通スキル基盤になりつつある"
description: "Claude Code・Gemini CLI・Codex CLI・Cursor・GitHub Copilotなど主要AIコーディングアシスタントを横断する868以上のスキルライブラリ「Antigravity Awesome Skills」（v5.4.0）を詳細分析。Anthropic・Vercel・OpenAI・Supabase・Microsoftの公式スキルを統合した設計思想、ロール別バンドル・ワークフロー機能、SKILL.mdによる相互運用性のアーキテクチャを解説する。"
publishedAt: "2026-02-20T10:00:00+09:00"
author: "AI Tools Hub"
category: "tool"
lang: "ja"
tags: ["Antigravity Awesome Skills", "Claude Code", "AIエージェント", "スキル", "Gemini CLI", "Cursor", "OSS", "SKILL.md"]
featured: true
---

Claude Code・Gemini CLI・Codex CLI・Cursor・GitHub Copilotなど主要AIコーディングアシスタントを横断するスキルライブラリ「**Antigravity Awesome Skills**」（v5.4.0）が、エコシステムの共通基盤として急速な成長を見せている。868以上のスキルを収録し、AnthropicやVercel、OpenAI、Supabase、Microsoftの公式リポジトリを統合した設計は、AIコーディングエージェントの「スキル標準化」という新しいレイヤーを形成しつつある。

## 何を解決するか

AIコーディングエージェント（Claude Code、Gemini CLI、Cursorなど）は汎用的な言語能力を持つが、「あなたの会社の"デプロイプロトコル"」や「AWS CloudFormationの特定の構文」といった文脈固有の知識は持っていない。

Antigravity Awesome Skillsはこのギャップをスキル（Markdownファイル）で埋める。スキルはエージェントに「特定タスクを毎回完璧にこなす方法」を教えるコンテキストドキュメントだ。

```bash
# インストールは1コマンド
npx antigravity-awesome-skills

# 使い方はプロンプト1行
"Use @brainstorming to plan a SaaS MVP."
"Run @sql-injection-testing on this endpoint."
```

## 対応プラットフォームの広さが最大の特徴

v5.4.0では8つのAIコーディングアシスタントに対応する。

| ツール | 種別 | スキルの参照方法 |
|--------|------|----------------|
| Claude Code | CLI | `>> /skill-name` |
| Gemini CLI | CLI | `Use skill-name...` |
| Codex CLI | CLI | `Use skill-name...` |
| Antigravity IDE | IDE | `Use skill...`（エージェントモード） |
| Cursor | IDE | `@skill-name`（Chatから） |
| GitHub Copilot | 拡張機能 | コンテンツを手動でペースト |
| OpenCode | CLI | `opencode run @skill-name` |
| AdaL CLI | CLI | 自動（オンデマンドロード） |

インストール先は `~/.agent/skills/` をユニバーサルパスとして推奨し、ツール固有のパス（`.claude/skills/`, `.gemini/skills/`, `.cursor/skills/` など）への配置も `npx` フラグ1つで切り替えられる。

## 公式ソースの統合：Anthropic・Vercel・Microsoftも含む

このリポジトリの重要な性質は、主要AIプロバイダー・クラウドベンダーの**公式スキルリポジトリを統合している**点だ。

- **[anthropics/skills](https://github.com/anthropics/skills)** — Anthropic公式（DOCX・PDF・PPTX・XLSX操作、ブランドガイドライン、社内コミュニケーション）
- **[vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills)** — Vercel Labs公式（Reactベストプラクティス、Webデザインガイドライン）
- **[openai/skills](https://github.com/openai/skills)** — OpenAI Codex公式（エージェントスキル、スキルクリエーター、簡潔なプランニング）
- **[supabase/agent-skills](https://github.com/supabase/agent-skills)** — Supabase公式（PostgreSQLベストプラクティス）
- **[microsoft/skills](https://github.com/microsoft/skills)** — Microsoft公式（Azure、Bot Framework、Cognitive Services、.NET・Python・TypeScript・Go・Rust・Java対応）
- **[google-gemini/gemini-skills](https://github.com/google-gemini/gemini-skills)** — Gemini公式（Gemini API・SDK）
- **[remotion-dev/skills](https://github.com/remotion-dev/skills)** — Remotion公式（Reactによるビデオ生成、28のモジュラールール）

これらの公式スキルがコミュニティ製スキルと統合された単一リポジトリとして配布される形式は、「どのツールを使っても同じスキルセットを持ち込める」という移植性を実現している。

## 868スキルの分類：9つのドメイン

| カテゴリ | 内容 | 代表スキル例 |
|---------|------|------------|
| Architecture | システム設計、ADR、C4、スケーラブルパターン | `architecture`, `c4-context`, `senior-architect` |
| Business | グロース、CRO、SEO、GTM戦略 | `copywriting`, `pricing-strategy`, `seo-audit` |
| Data & AI | LLMアプリ、RAG、エージェント、可観測性 | `rag-engineer`, `prompt-engineer`, `langgraph` |
| Development | 言語・フレームワーク習熟、コード品質 | `typescript-expert`, `python-patterns`, `react-patterns` |
| General | 計画、ドキュメント、プロダクト運用 | `brainstorming`, `doc-coauthoring`, `writing-plans` |
| Infrastructure | DevOps、クラウド、サーバーレス、CI/CD | `docker-expert`, `aws-serverless`, `vercel-deployment` |
| Security | AppSec、ペンテスト、脆弱性分析、コンプライアンス | `api-security-best-practices`, `sql-injection-testing`, `vulnerability-scanner` |
| Testing | TDD、テスト設計、修正、QAワークフロー | `test-driven-development`, `testing-patterns`, `test-fixing` |
| Workflow | 自動化、オーケストレーション、エージェント | `workflow-automation`, `inngest`, `trigger-dev` |

## v5.4.0の新機能：ワークフロー

v5.4.0（"Workflows Edition"）で追加された「ワークフロー」は、スキルのバンドル（推奨リスト）と異なる概念だ。

- **バンドル**：ロール別の「おすすめスキルリスト」（使うスキルを選ぶための指針）
- **ワークフロー**：具体的な目標に向けた「スキルの実行順序」（実際の作業フロー）

現在提供されているワークフロー例：
- **SaaS MVPのリリース**
- **Webアプリのセキュリティ監査**
- **AIエージェントシステムの構築**
- **QAとブラウザ自動化**（Go + Playwrightスタック対応）

## SKILL.mdという標準フォーマット

技術的に重要なのは、すべてのスキルが `SKILL.md` という単一フォーマットに準拠している点だ。このファイルにはフロントマター（`name`と`description`が必須）を含み、検証スクリプト（`python3 scripts/validate_skills.py`）でバリデーションが自動実行される。

このフォーマットがClaude Code・Gemini CLI・Cursor・Codex CLIで共通化されていることが、「一度書けばどのツールでも動く」互換性の基盤になっている。

## エコシステムとしての広がり

コミュニティ貢献者のリストは、このリポジトリが単一の開発者作品にとどまらないことを示している。

- **rmyndharis/antigravity-skills**：300以上のエンタープライズスキルとカタログ生成ロジックを貢献
- **zebbern/claude-code-guide**：約60の新セキュリティスキルを提供
- **VoltAgent/awesome-agent-skills**：Sentry・Trail of Bits・Expo・Hugging Faceなどの企業公式スキルを含む61スキル
- **affaan-m/everything-claude-code**：Anthropicハッカソン優勝者のClaude Code設定コレクション

スター履歴は公開されていないが、40人以上のコントリビューターが名を連ね、継続的にPRが受け入れられている状況は、単なるキュレーションリポジトリを超えたコミュニティ標準としての機能を示している。

## 今日の文脈：Google Antigravityとの関係

本日の9時の記事で報告したように、Googleは昨日「Gemini CLI」と「Google Antigravity」という新しいエージェント開発プラットフォームを発表した。このリポジトリ名の「Antigravity」はまさにこのプラットフォームを指しており、**Google DeepMindのAntigravity IDEをClaude Codeと同等に扱う設計**になっている。

AIコーディングエージェントが乱立する中で、ツール固有の設定ではなく汎用スキルフォーマットを採用したこのリポジトリは、競合ツールが乱立する現状でも「スキル資産の持ち運び」を可能にする実用的な選択肢だ。

---

**インストール（全ツール共通）：**
```bash
npx antigravity-awesome-skills

# ツール別
npx antigravity-awesome-skills --claude   # Claude Code
npx antigravity-awesome-skills --gemini   # Gemini CLI
npx antigravity-awesome-skills --cursor   # Cursor
npx antigravity-awesome-skills --codex    # Codex CLI
```

**GitHub**: <https://github.com/sickn33/antigravity-awesome-skills>（MIT License）
