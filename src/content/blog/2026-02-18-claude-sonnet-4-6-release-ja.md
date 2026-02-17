---
title: "Claude Sonnet 4.6リリース、Opus級の性能をSonnet価格で実現"
description: "AnthropicがClaude Sonnet 4.6を発表。コンピューター使用能力が人間レベルに到達し、1Mトークンコンテキストウィンドウをベータ版で提供。ユーザーの70%が前バージョンより高評価、59%がOpus 4.5を上回る評価。"
publishedAt: "2026-02-18T07:00:00+09:00"
author: "AI Tools Hub"
category: "release"
lang: "ja"
tags: ["claude", "anthropic", "coding-agent", "ai-model", "computer-use"]
featured: true
---

Anthropicは2026年2月17日、**Claude Sonnet 4.6**をリリースした。同モデルは、これまでOpus級モデルでしか実現できなかった高度な性能を、Sonnetの価格帯で提供する。コーディング、コンピューター使用、長文推論、エージェント計画、知識作業、デザイン全般において大幅な性能向上を実現している。

## Opus級の性能をSonnet価格で提供

早期アクセスを受けた開発者の評価では、Claude Sonnet 4.6は前バージョンであるSonnet 4.5に対して**70%の優先率**を記録。さらに注目すべきは、2025年11月にリリースされたフロンティアモデルClaude Opus 4.5と比較しても、**59%のユーザーがSonnet 4.6を好む**という結果が得られている。

これにより、従来はOpus級モデルが必要だった高度なタスク—特に実世界で経済的価値のある[オフィスタスク](https://artificialanalysis.ai/evaluations/gdpval-aa)—が、Sonnet 4.6で処理可能になった。価格は前バージョンと同じ**$3/$15 per million tokens**で据え置かれている。

## コンピューター使用能力が人間レベルに到達

Anthropicは2024年10月、汎用コンピューター使用機能を持つAIモデルを**業界初**で導入した。当時は「実験的で、時に扱いにくくエラーが多い」と評価されていたが、わずか16ヶ月でSonnetモデルは[OSWorld](https://os-world.github.io/)ベンチマークで大幅な性能向上を遂げた。

OSWorldは、Chrome、LibreOffice、VS Codeなどの実際のソフトウェアをシミュレート環境で動作させ、AIモデルが人間と同様にマウスクリックとキーボード入力のみで数百のタスクを実行する能力を測定する。特別なAPIやカスタムコネクタは一切使用されない。

早期ユーザーからは、「複雑なスプレッドシートのナビゲーション」や「多段階のウェブフォーム入力」において**人間レベルの能力**を示したという報告が寄せられている。

**プロンプトインジェクション攻撃への対策も強化**され、[安全性評価](https://anthropic.com/claude-sonnet-4-6-system-card)ではSonnet 4.5と比較して大幅な改善が確認されている。

## 1Mトークンコンテキストウィンドウ（ベータ版）

Sonnet 4.6は**1Mトークンのコンテキストウィンドウ**をベータ版で提供する。これは、コードベース全体、長大な契約書、数十本の研究論文を1回のリクエストに含められる容量だ。

重要なのは、Sonnet 4.6がこの膨大なコンテキスト全体にわたって**効果的に推論できる**点である。これは長期計画タスクにおいて特に顕著で、[Vending-Bench Arena](https://andonlabs.com/evals/vending-bench-arena)評価では興味深い結果が得られた。

同ベンチマークはAIモデルが（シミュレート環境で）ビジネスを長期運営する能力を測定する。Sonnet 4.6は、**最初の10ヶ月間は設備投資に集中し、競合他社よりも大幅に高い支出を行った後、最終局面で収益性重視に急転換する**という独自の戦略を開発。このタイミングの切り替えにより、競合を大きく引き離して首位を獲得した。

## コーディング能力の大幅向上

Claude Codeでの早期テストでは、ユーザーはSonnet 4.6を**70%の確率でSonnet 4.5より好む**と評価。「コード修正前にコンテキストをより効果的に読み取る」「共通ロジックを複製せずに統合する」といった改善が報告され、長時間のセッションでもストレスが少ないという。

さらに、Opus 4.5と比較しても**59%がSonnet 4.6を選択**。「過剰設計が少ない」「怠惰さが大幅に減少」「指示への追従性が向上」「成功の虚偽報告が減少」「ハルシネーションが減少」「多段階タスクでの一貫性向上」といった評価を獲得している。

顧客からは、フロントエンドコードと財務分析での改善が特に顕著だったとの報告がある。視覚的な出力は「より洗練されたレイアウト、アニメーション、デザイン感覚」を備え、本番品質に到達するまでの反復回数が大幅に削減されたという。

## ベンチマーク結果

- **OfficeQA**: Opus 4.6と同等の性能。企業文書（チャート、PDF、テーブル）の読解と推論能力が大幅向上
- **SWE-bench等**: 複雑なコード修正、大規模コードベース検索で高い解決率
- **バグ検出**: Opusとの性能差を大幅に縮小
- **Vending-Bench Arena**: 独自戦略で競合を引き離す
- **保険業界ベンチマーク**: 94%のスコアを記録（コンピューター使用において最高性能）

## 製品アップデート

Claude Developer Platformでは、Sonnet 4.6は以下の機能をサポート：

- [Adaptive Thinking](https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking)および拡張思考
- [Context Compaction](https://platform.claude.com/docs/en/build-with-claude/compaction)（ベータ版）: 会話が上限に近づくと古いコンテキストを自動要約
- [Web検索](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool)と[Fetch](https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool)ツール: 検索結果をフィルタリング・処理するコードを自動生成
- [コード実行](https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool)、[メモリ](https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool)、[プログラマティックツール呼び出し](https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling)、[ツール検索](https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool)が正式版に昇格

Claude in Excel向けには、MCPコネクタがサポートされ、S&P Global、LSEG、Daloopa、PitchBook、Moody's、FactSetなどのツールとExcel内で連携可能になった。

## 提供開始

Claude Sonnet 4.6は、以下のプラットフォームで**即座に利用可能**：

- すべてのClaudeプラン（Free/Pro/Max/Team/Enterprise）
- Claude Cowork
- Claude Code
- Claude API（モデル名: `claude-sonnet-4-6`）
- 主要クラウドプラットフォーム

**無料プラン**でもSonnet 4.6がデフォルトで利用可能になり、ファイル作成、コネクタ、スキル、コンパクション機能も含まれる。

## 安全性評価

Anthropicは、Sonnet 4.6に対して[広範な安全性評価](https://anthropic.com/claude-sonnet-4-6-system-card)を実施した。安全性研究者は、同モデルが「広く温かく、誠実で、向社会的、時にユーモラスな性格を持ち、強力な安全性行動を示し、重大な不整合の兆候は見られない」と結論づけている。

## 関連リンク

- [公式発表（Anthropic）](https://www.anthropic.com/news/claude-sonnet-4-6)
- [システムカード（安全性評価）](https://anthropic.com/claude-sonnet-4-6-system-card)
- [Claude API ドキュメント](https://platform.claude.com/docs/en/about-claude/models/overview)
- [Claude 価格ページ](https://claude.com/pricing)
