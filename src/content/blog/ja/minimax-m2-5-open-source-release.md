---
title: "MiniMax-M2.5リリース、Opus 4.6と同等の性能を10分の1のコストで実現するオープンソースモデル"
description: "MiniMaxがM2.5をリリース。2290億パラメータのオープンソースモデルで、SWE-Bench Verifiedで80.2%を達成し、Opus 4.6・Gemini 3 Pro・GPT-5と比較して10〜20分の1のコストを実現。"
pubDate: 2026-02-15
category: "AI Models"
tags: ["MiniMax", "オープンソース", "コーディングAI", "コスト効率", "エージェントモデル"]
author: "AI Tools Hub"
image: "/blog/minimax-m2-5.jpg"
---

MiniMaxは2026年2月14日、コーディング、エージェント型ワークフロー、オフィスタスクに特化した大規模言語モデル「MiniMax-M2.5」をリリースした。2290億パラメータのこのモデルは、Claude Opus 4.6と同等の性能を持ちながら、コストは10分の1〜20分の1に抑えられているとHugging Faceの公式発表で明らかにされた。

## 性能ベンチマーク

MiniMax-M2.5は複数のベンチマークで最先端の性能を実証している。

**コーディング:**
- SWE-Bench Verified: 80.2%
- Multi-SWE-Bench: 51.3%
- SWE-Bench（Droidスキャフォールディング）: 79.7%（Opus 4.6の78.9%を上回る）
- SWE-Bench（OpenCodeスキャフォールディング）: 76.1%（Opus 4.6の75.9%を上回る）

**検索・ツール呼び出し:**
- BrowseComp（コンテキスト管理あり）: 76.3%
- M2.1と比較して、約20%少ない検索ラウンドで結果を達成

**その他のベンチマーク:**
- AIME25: 86.3%
- GPQA-D: 85.2%
- SciCode: 44.4%
- IFBench: 70.0%

モデルは、Go、C、C++、TypeScript、Rust、Kotlin、Python、Java、JavaScript、PHP、Lua、Dart、Rubyを含む10以上のプログラミング言語で、20万以上の実世界環境にわたって訓練された。

## 速度向上

MiniMax-M2.5はSWE-Bench Verified評価をM2.1より37%高速に完了し、Claude Opus 4.6の速度に匹敵する。エンドツーエンドの実行時間は平均31.3分（M2.1）から22.8分（M2.5）に短縮され、Opus 4.6の22.9分と同等となった。

モデルは2つのスループットレベルで提供される:
- **M2.5-Lightning**: 毎秒100トークン（他のフロンティアモデルの2倍の速度）
- **M2.5**: 毎秒50トークン

## コスト効率

MiniMaxはM2.5を「測定不要なほど安価なインテリジェンス」と位置づけている。価格は以下の通り:

**M2.5-Lightning（100 TPS）:**
- 入力: 100万トークンあたり$0.30
- 出力: 100万トークンあたり$2.40

**M2.5（50 TPS）:**
- 入力: 100万トークンあたり$0.15
- 出力: 100万トークンあたり$1.20

MiniMaxの試算によれば、M2.5-Lightningを毎秒100トークンで1時間連続実行した場合のコストは$1。毎秒50トークンの場合、1時間あたり$0.30に下がる。同社によれば、M2.5インスタンス4つを1年間連続実行しても$10,000で済むという。

出力価格ベースで、M2.5のコストはClaude Opus、Google Gemini 3 Pro、OpenAI GPT-5の10分の1〜20分の1となる。

## MiniMax社内での実運用

MiniMaxは、M2.5が同社の日常業務の30%を自律的に完了していると報告している。業務範囲は研究開発、製品、営業、人事、財務にわたる。特にコーディングシナリオでは、M2.5が生成したコードが新規コミットコードの80%を占めているという。

同社はM2.5を自社のMiniMax Agentプラットフォームにデプロイしており、ユーザーは専門知識と標準化された「Office Skills」（Word、PowerPoint、Excelタスク用）を組み合わせた再利用可能なタスクテンプレート「Experts」を1万以上構築している。

## オープンソース提供

モデルウェイトはHugging Faceで入手可能: https://huggingface.co/MiniMaxAI/MiniMax-M2.5

GitHubリポジトリ: https://github.com/MiniMax-AI

推奨される推論フレームワーク（アルファベット順）:
- SGLang
- vLLM
- Transformers
- KTransformers
- ModelScope（中国ユーザー向け）

**推論パラメータ:**
- Temperature: 1.0
- Top-p: 0.95
- Top-k: 40

**デフォルトシステムプロンプト:**
> "You are a helpful assistant. Your name is MiniMax-M2.5 and is built by MiniMax."

## 技術背景: 強化学習のスケーリング

MiniMaxはM2.5の改善を大規模強化学習によるものとしている。モデルは、同社で実行されるタスクから派生した数十万の実世界環境にわたって訓練された。

**Forgeフレームワーク:**
同社は「Forge」と呼ばれる社内開発のエージェントネイティブRLフレームワークを開発した。これは訓練・推論エンジンをエージェント層から分離し、複数のエージェントスキャフォールド間での最適化を可能にする。訓練サンプルのツリー構造マージ戦略により、約40倍の訓練高速化を実現した。

**アルゴリズム:**
MiniMaxは2025年初頭に導入したCISPOアルゴリズムを継続使用し、大規模訓練中のMoE（Mixture of Experts）モデルの安定性を確保した。長文コンテキストのエージェントロールアウトにおけるクレジット割り当ての課題に対処するため、プロセス報酬メカニズムが導入された。

## モデルの進化

2025年10月末から2026年2月までの3ヶ月半で、MiniMaxは3つのモデルをリリース:
- **M2**（2025年12月23日）
- **M2.1**（2026年2月13日更新）
- **M2.5**（2026年2月14日）

MiniMaxによれば、SWE-Bench Verifiedにおける進捗率は、同期間のClaude、GPT、Geminiモデルファミリーよりも大幅に高速だったという。

## 商用利用

オープンソースデプロイメントに加え、MiniMaxは以下を通じてM2.5を提供:
- MiniMax Agent: https://agent.minimax.io/
- MiniMax APIプラットフォーム: https://platform.minimax.io/
- MiniMax Coding Plan: https://platform.minimax.io/subscribe/coding-plan

## セキュリティと信頼性評価

2026年2月15日、MiniMax-AI GitHub組織およびリポジトリのセキュリティレビューを実施した。

**組織の検証:**
- Organization ID: 194880281（2025年1月14日作成）
- 公式サイト: https://www.minimax.io
- 公式連絡先: model@minimax.io
- Twitter: @MiniMax_AI
- GitHubフォロワー: 4,358

**リポジトリの信頼性指標:**
- MiniMax-M2.5: ⭐6.09k、🍴519（21時間前更新）
- MiniMax-M2.1: ⭐86.7k、🍴1.27k
- MiniMax-M2: ⭐450k、🍴1.48k
- Mini-Agent: ⭐1.6k、🍴232

高いコミュニティエンゲージメントは、活発なメンテナンスとピアレビューを示している。

**ライセンス:**
修正版MITライセンス。商用利用時に製品インターフェースに「MiniMax M2.5」表示義務あり。標準的なオープンソースライセンスに最小限の追加制限。

**コード安全性レビュー:**
- MiniMax-M2.5リポジトリ: ドキュメントとデプロイガイドのみ、実行コードなし
- モデルウェイトはHugging Face（外部プラットフォーム）でホスト
- Mini-Agentリポジトリをレビュー: 標準的な依存関係（pydantic、openai、anthropic、httpx）
- 悪意のあるコードパターン検出なし（eval、exec、__import__の不正使用なし）
- bash_tool.py: シェルコマンド実行機能を実装（AIエージェントツールとして標準的）

**安全な使用のための推奨事項:**
1. 信頼できない入力でシェルコマンドを実行しない
2. 初回ローカルデプロイ時はファイアウォール・サンドボックス環境を使用
3. APIキーは環境変数で管理（ハードコードしない）
4. 本番環境デプロイ前にコードレビューを実施

この評価に基づき、MiniMax-AI組織およびリポジトリは正当であり、悪意のあるコードやバックドアの証拠は確認されなかった。

## 参考リンク

- Hugging Faceモデルリポジトリ: https://huggingface.co/MiniMaxAI/MiniMax-M2.5
- GitHub組織: https://github.com/MiniMax-AI
- Akshay氏によるX投稿（@akshay_pachaar）: https://x.com/akshay_pachaar/status/2022574708051583120

---

**免責事項:** 本記事の情報は2026年2月15日時点の公開データに基づいています。モデルの性能、価格、提供状況は変更される可能性があります。最新情報は公式ソースをご確認ください。
