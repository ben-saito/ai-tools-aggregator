---
title: "AI開発ニュース週間トレンド（2026年7月第1週）：TencentがApacheライセンスの「Hy3」を公開、Alibabaがエージェントのトークン使用量を99%削減"
description: "2026年7月第1週のAI開発ニュース。TencentがApache 2.0ライセンスのHy3を発表、Alibabaがエージェントのトークン使用量99%削減フレームワーク、AnthropicのClaude Fable 5グローバル再開など。"
date: "2026-07-08"
category: "AI News"
tags: ["AI", "LLM", "Tencent", "Alibaba", "Anthropic", "Open Source", "Agent"]
slug: "ai-weekly-tencent-hy3-alibaba-framework-claude-fable5"
---

# AI開発ニュース週間トレンド（2026年7月第1週）：TencentがApacheライセンスの「Hy3」を公開、Alibabaがエージェントのトークン使用量を99%削減

2026年7月第1週は、**オープンソースLLMの、商用ライセンス問題への動き**と**AIエージェントのコスト最適化**という2つの大きなテーマが浮かび上がった。TencentがApache 2.0ライセンスの「Hy3」を公開し、中国の有力LLMであるGLM-5.2と対決する構図が生まれた。一方、Alibabaはツール選択時のトークン消費を99%削減するエージェント向けフレームワークを発表。エンタープライズ領域では、AnthropicのClaude Fable 5が輸出規制解除後にグローバル展開を再開し直すの動きも続いている。

---

## Tencent、「Hy3」をApache 2.0ライセンスで公開 — GLM-5.2と対決

**Tencent**は7月6日、オープンソースLLM「**Hy3**」をApache 2.0ライセンスで公開した。 строит これは中国の有力オープンソースLLMである**GLM-5.2**（Zhipu AI開発）と直接競合する設計となっている。

**主な特徴：**

- **Apache 2.0ライセンス**：GPL系の制約を持たず、商用利用にもやすい設計。既存の多くの「オープン」LLMが採用するCustom Licenseとは一線を画す
- **モデルサイズ**：GLM-5.2の半分程度のサイズに抑えられ、**輸出規制対応のGPUでも動作**する範囲に収まっている
- **幻覚（ハルシネーション）率の半減**：Tencentの主張によれば、GLM-5.2と比較してハルシネーション率を約50%削減
- **ベンチマーク結果**：coding以外の几乎すべてのタスクでGLM-5.2を上回る性能を達成

**開発者視点での意義：**

Apache 2.0ライセンスの採用は、企業ユーザーがLLMを**自有製品に組み込む際の法的リスクを軽減**する。GPL系ライセンスの場合、モデルの出力物がGPL感染を起こす可能性が指摘されてきた。Hy3のライセンス形態は、この障壁をクリアする。

また、輸出規制対応GPUで動作するサイズに抑えられたことは、**米国輸出規制の影響下にある企業**にとっての実用的な選択肢となる。

---

## Alibaba、エージェント向け新フレームワークでトークン使用量を99%削減

7月2日、**Alibaba**の研究チームがAIエージェントが数千ものツールから適切なものを選択する際に発生する**トークン消費を99%削減**する新しいフレームワークを発表した。

**問題の背景：**

既存のAIエージェントは、ツール選択の前にすべてのツール定義を読み込む必要がある。大規模なツールセットを持つEnterprise環境では、この読み込みだけで数万トークンを消費し、応答速度とコストの両面でボトルネックになっていた。

**フレームワークの解決策：**

- **ツールの動的ルーティング**：すべてのツールを読み込むのではなく、タスク内容に基づいて関連するツールのみを動的に選択
- **ベクトル検索ベースのツール紐付け**：ツール定義をベクトル化し、タスク嵌入との類似度に基づいて関連ツールのみをロード
- **99%のトークン削減**：この最適化により、エージェントの推論コストが劇的に削減

**技術的課題：** ルーティング精度が低いと、必要なツールを選択できずタスク失敗のリスクが生じる。Alibabaは、ベクトル検索とLLMによるツール選択のハイブリッドアプローチを採用することで、この問題を軽減している。

---

## Anthropic、Claude Fable 5のグローバル展開を再開 — 輸出規制解除を受け

7月1日、**Anthropic**は**Claude Fable 5**のグローバル提供を再開すると発表した。米国商務省が輸出管理命令を解除したことに伴う対応となる。

**背景にあるDynamics：**

Claude Fable 5は一時的に米国以外での提供を停止されていた。**フロンティアモデルのリリースが国家安全保障レビュー和政策交渉の影響を受ける**時代になったことを示す象徴的な事例となる。

**VB Pulseデータから見るエンタープライズの課題：**

- 企業のうち**自動でAIシステムの障害を検出できるものはわずか1割**
- **79%が「暴走したエージェント」による被害を経験済み**
- **3分の2の企業がClaude Fable 5の代わりに別のモデルで代用する策**をすでに構築

Anthropicのモデル一時停止は、エンタープライズにとって**AIサプライチェーンの多元化**重要性を再認識させる結果となった。

---

## Z.ai、「ZCode」を公開 — Cursor、Claude Code、GitHub Copilotに挑む

7月2日、**Z.ai**はAI駆動型統合開発環境「**ZCode**」の正式版を公開した。GLM-5.2の公式開発環境として位置づけられている。

**主な機能：**

- **対応OS**：macOS、Windows、Linuxのすべてに対応
- **BYOK（Bring Your Own Key）対応**：第三方模型（OpenAI、Anthropic等）のAPIキーを持ち込んで利用可能
- **GLM Coding Plan**：月額プラン加入者に対して**1.5倍の利用Quotaボーナス**を提供
- **公式開発環境**：GLM-5.2のコード補完・修正・生成をネイティブにサポート

**競合比較：**

| 機能 | ZCode | Cursor | Claude Code | GitHub Copilot |
|------|-------|--------|-------------|----------------|
| 第三方模型対応 | ○（BYOK） | ○ | △ | ○ |
| GLM-5.2ネイティブ | ○ | △ | △ | △ |
| クロスプラットフォーム | ○ | ○ | ○ | ○ |
| 独自Quotaボーナス | ○（1.5倍） | ー | ー | ー |

---

## Trunk Tools、汎用モデル放弃でドキュメントレビューを60日から10日に短縮

7月4日、**Trunk Tools**は строительindustry向けのAIドキュメントレビュースタックを構築し、レビュー時間を**60日から10日に短縮**した事例を発表した。

**同社が选择したアプローチ：**

- **汎用モデルの放弃**：GPT-4やClaude等の汎用LLMでは、企业的な专用データが модели正しく处理できないことを確認
- **-domain特化モデル**：建筑的積載システム用の追加学習済みモデルを採用
- **プロプライエタリ形式対応**：CADデータ、PDF、Scan書類等多种形式を直接処理

**業界通用的示唆：**

「企业的データは汚く、专用的である — これが汎用モデルの弱さである」と同社は語る。すべてのIndustryに適用できる教訓として、**自有データでファインチューニングした专用モデル**の価値が再認識されている。

---

## Square、ChatGPTとClaudeから直接注文できるintegrationを提供

**Square**は7月（日期不明日）、**ChatGPTとClaudeから直接飲食店の注文を受け付ける**新しいintegrationを開始した。

**仕組み：**

- 飲食店はSquare Dashboardでメニュー・営業時間・在庫・料金を管理
- AIアシスタントが顧客と対話し、適切な餐厅に注文を転送
- **低手数料・設定不要**で中小店铺でも利用可能

**意義：**

「AIエージェントの經濟」が實際的な消費者向けサービスに拡大している象徴的な事例。AIネイティブの商業基盤の構築に向けた動きを值得关注。

---

## 参考リンク

- [Tencent's Apache-licensed Hy3 takes on GLM-5.2 at half the size — and wins everywhere except coding (VentureBeat)](https://venturebeat.com/ai/tencent-hy3-takes-on-glm-5-2/)
- [New Alibaba AI framework skips loading every tool, cutting agent token use 99% (VentureBeat)](https://venturebeat.com/ai/new-alibaba-ai-framework-skips-loading-every-tool/)
- [Anthropic is bringing back Claude Fable 5 globally after US lifts export control order (VentureBeat)](https://venturebeat.com/ai/anthropic-bringing-back-claude-fable-5/)
- [Z.ai launches ZCode to challenge Cursor, Claude Code and GitHub Copilot in AI coding (VentureBeat)](https://venturebeat.com/ai/z-ai-launches-zcode/)
- [Trunk Tools' stack cut document review from 60 days to 10 by ditching general-purpose models (VentureBeat)](https://venturebeat.com/ai/trunk-tools-stack-cut-document-review/)
- [Restaurants can now accept orders placed directly from ChatGPT and Claude thanks to Square's new integration (VentureBeat)](https://venturebeat.com/ai/square-chatgpt-claude-integration/)
- [Enterprises lost Claude Fable 5 for a few weeks. New data shows two-thirds had already built their hedge (VentureBeat)](https://venturebeat.com/ai/enterprises-lost-claude-fable-5/)

---

*（本文の情報は2026年7月7日〜8日時点のものです）*
