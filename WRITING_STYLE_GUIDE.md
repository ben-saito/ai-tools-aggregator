# Writing Style Guide - AI Tools Aggregator

**最終更新:** 2026-02-13  
**承認者:** つとむ様

## 概要

AI Tools Aggregatorのすべての記事は、**技術ジャーナリズムスタイル**で執筆する。
- **日本語:** Publickey（https://publickey1.jp/）風
- **英語:** TechCrunch/Ars Technica風

このスタイルガイドは**必須ルール**であり、すべての新規記事および記事更新時に遵守すること。

---

## 基本原則（日英共通）

### ✅ 必須事項

1. **客観性・事実ベース**
   - 主観的評価を避ける（「素晴らしい」「最高」「便利」等は禁止）
   - データ、ベンチマーク、調査結果で語る
   - 公式発表、プレスリリース、ドキュメントから引用

2. **絵文字禁止**
   - ❌ ✅ 😊 🎯 等の絵文字は使用しない
   - 箇条書きマーカーは `-` または数字のみ

3. **技術的詳細の重視**
   - API価格、トークン数、ベンチマーク結果を明記
   - システム要件、認証規格（SOC 2、GDPR、HIPAA等）を記載
   - 具体的な数値を提示（「多い」ではなく「100万ユーザー」）

4. **引用・出典の明記**
   - 第三者調査（Stanford HELM、Stack Overflow等）を引用
   - 公式発表の日付を記載（例: 「2024年11月のOpenAIの発表によれば」）
   - 推定値は明示（例: 「業界推定で1,000万～2,000万人規模」）

5. **末尾の必須要素**
   - 参考リンク（公式サイト、ドキュメント、GitHub等）
   - 免責事項（「本記事の情報は2026年X月X日時点のものです...」）

6. **透明性**
   - 不確定情報は明示（「報じられている（未確認）」等）
   - 制限事項、デメリットも記載
   - ベンダーの利害関係を隠さない

---

## 日本語記事ルール（Publickey風）

### タイトル

**形式:** 「[年/状況]、[主語]が[動作]。[詳細]」

**良い例:**
- 「2026年、無料で利用可能なAIツール10選。ChatGPT、Claude、Geminiなど主要サービスが無料プラン拡充」
- 「ChatGPT（OpenAI）とClaude（Anthropic）の機能比較。コーディング、長文解析、コスト面での違いを検証」

**悪い例:**
- ❌ 「無料で使える最強AIツール トップ10」（主観的）
- ❌ 「どちらのAIアシスタントが優れているか？」（曖昧）

### 導入文

**形式:** 客観的状況説明 → 本記事の目的

**良い例:**
```
2026年現在、主要なAI開発企業が相次いで無料プランを拡充している。
ChatGPT（OpenAI）、Claude（Anthropic）、Gemini（Google）など、
従来は有料プランでのみ提供されていた機能の一部が無料プランに追加され、
個人開発者や学生、スタートアップにとって利用しやすい環境が整いつつある。

本記事では、2026年2月時点で無料プランを提供している主要AIツール10選を紹介する。
```

**悪い例:**
```
❌ AI革命が到来しています。そして最高の部分は？最先端のAIにアクセスするために
大金を支払う必要がないということです。
```

### 見出し

**形式:** 「[機能名]」「[企業名]の[特徴]」「[項目]の[詳細]」

**良い例:**
- 「提供される機能（無料プラン）」
- 「主な特徴」
- 「技術的背景」
- 「無料プランの制限事項」
- 「API価格の比較」

**悪い例:**
- ❌ 「なぜ素晴らしいのか」
- ❌ 「あなたが愛する理由」

### 文体

- **です・ます調**
- **丁寧で読みやすい日本語**
- **ビジネスパーソン・エンジニア向け**
- **短文で区切る**（1文は2行以内を目安）

### 引用例

```
OpenAIは2024年11月の発表で、ChatGPT無料版のレート制限を緩和したと発表している。
これにより、従来は1時間あたり10～15回程度だった質問回数の上限が、
現在は約30～50回まで拡大されている（ピーク時を除く）。
```

---

## 英語記事ルール（TechCrunch/Ars Technica風）

### タイトル

**形式:** "[Subject] [verb] [object]: [detail/context]"

**良い例:**
- "Free AI tools in 2026: OpenAI, Anthropic, and Google expand free tiers as competition intensifies"
- "ChatGPT (OpenAI) vs Claude (Anthropic): Technical comparison of capabilities, pricing, and enterprise features"

**悪い例:**
- ❌ "Top 10 Free AI Tools for 2026: Transform Your Workflow Without Breaking the Bank"
- ❌ "Which AI Assistant is Better in 2026?"

### 導入文

**形式:** Current state → Background → Article purpose

**良い例:**
```
As of February 2026, leading AI development companies are significantly expanding 
their free tier offerings in an intensifying battle for user acquisition. OpenAI's 
ChatGPT, Anthropic's Claude, and Google's Gemini—previously offering limited 
functionality in free plans—now provide production-quality features at no cost 
to individual users.

This analysis examines 10 AI tools that offer substantial free tiers as of 
February 2026, based on technical capabilities, usage limits, and practical 
utility for developers, researchers, and enterprise users.
```

**悪い例:**
```
❌ The AI revolution is here, and the best part? You don't need deep pockets 
to access cutting-edge artificial intelligence.
```

### 見出し

**形式:** "[Feature/Aspect] [analysis/comparison/overview]"

**良い例:**
- "Free tier capabilities"
- "Technical specifications"
- "API pricing comparison"
- "Enterprise feature comparison"
- "Benchmark performance"

**悪い例:**
- ❌ "Why It's Awesome"
- ❌ "What Makes It Great"

### 文体

- **Formal, objective tone**
- **Active voice preferred**
- **Technical precision**
- **Target audience: Business professionals, engineers, researchers**

### 引用例

```
According to OpenAI's November 2024 announcement, ChatGPT free tier rate limits 
were relaxed, increasing from approximately 10-15 queries per hour to 30-50 
queries per hour during non-peak periods.
```

---

## 記事構成テンプレート

### 日本語記事構成

```markdown
# [タイトル]

[導入文：2-3段落、客観的状況説明]

## 選定基準 / 比較基準

- 箇条書き（客観的基準）

---

## 1. [ツール/項目名] - [特徴]

**提供元:** [企業名]  
**主な用途:** [用途]  
**料金:** [無料プラン詳細] | [有料プラン]  
**URL:** [公式サイト]

### 概要

[2-3段落の客観的説明、ユーザー数・発表日等のデータ]

### 提供される機能（無料プラン）

- 機能1
- 機能2
- 機能3

### 技術的詳細

[技術的背景、モデル詳細、ベンチマーク結果等]

### 無料プランの制限事項

- 制限1
- 制限2

---

[他のツール/項目も同様]

---

## まとめ

[総括、傾向分析、今後の展望]

## 参考リンク

- [公式サイト1]
- [公式サイト2]

---

*（本記事の情報は2026年X月X日時点のものです。各サービスの機能や料金は変更される可能性があります。最新情報は各公式サイトをご確認ください）*
```

### 英語記事構成

```markdown
# [Title]

[Introduction: 2-3 paragraphs, objective context]

## Selection criteria / Comparison methodology

- Bullet points (objective criteria)

---

## 1. [Tool/Topic Name] - [Brief description]

**Provider:** [Company]  
**Primary use cases:** [Use cases]  
**Pricing:** [Free tier details] | [Paid tier]  
**URL:** [Official site]

### Overview

[2-3 paragraphs of objective description, user numbers, launch dates, etc.]

### Free tier capabilities

- Feature 1
- Feature 2
- Feature 3

### Technical specifications

[Technical background, model details, benchmarks, etc.]

### Limitations

- Limitation 1
- Limitation 2

---

[Additional tools/topics follow same pattern]

---

## Market trends and analysis / Summary

[Overall assessment, trends, future outlook]

## Reference links

- [Official site 1]
- [Official site 2]

---

*Information in this article is current as of [Date]. Features and pricing are subject to change. Consult official sources for the latest details.*
```

---

## 禁止事項チェックリスト

執筆前に確認：

- [ ] 絵文字を使用していないか（✅❌😊等）
- [ ] 主観的表現を使用していないか（「素晴らしい」「最高」「便利」等）
- [ ] 「あなた」「私たち」等の人称代名詞を過度に使用していないか
- [ ] 引用なしでデータを記載していないか
- [ ] 末尾に参考リンク・免責事項があるか
- [ ] タイトルが客観的・事実ベースか
- [ ] 技術的詳細（トークン数、API価格等）を記載しているか

---

## 引用・データソース例

### 推奨される引用元

**ベンチマーク:**
- Stanford HELM (https://crfm.stanford.edu/helm/)
- HumanEval (https://github.com/openai/human-eval)
- MMLU, Math benchmarks

**調査:**
- Stack Overflow Developer Survey
- GitHub Developer Survey
- Gartner, IDC等の調査会社レポート

**公式情報:**
- プレスリリース（各企業サイト）
- 公式ブログ
- 技術ドキュメント
- API仕様書

**第三者メディア:**
- TechCrunch, The Verge, Ars Technica（英語）
- Publickey, ITmedia, マイナビニュース（日本語）

---

## 記事作成フロー

1. **リサーチ**
   - 公式発表、ベンチマーク、第三者調査を収集
   - データ、数値、日付を確認

2. **構成**
   - 上記テンプレートに沿って構成
   - 見出しを客観的に

3. **執筆**
   - 主観的表現を避ける
   - 引用・データで語る
   - 技術的詳細を含める

4. **チェック**
   - 禁止事項チェックリストで確認
   - 絵文字削除
   - 参考リンク・免責事項追加

5. **レビュー**
   - Publickey/TechCrunchの記事と比較
   - トーンが合っているか確認

---

## 改訂履歴

- **2026-02-13**: 初版作成（つとむ様承認）
  - Publickey/TechCrunch風スタイル確立
  - 4記事書き直し完了を受けてルール化

---

**このスタイルガイドは必須ルールです。すべての記事作成・更新時に遵守してください。**
