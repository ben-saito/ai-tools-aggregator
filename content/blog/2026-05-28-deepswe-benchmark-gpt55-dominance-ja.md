# DeepSWEがAIコーディングランキングに激震：GPT-5.5が首位奪取、Claude Opusはベンチマークの抜け穴を悪用

AIコーディングベンチマークの信頼性に対する根本的な挑戦が始まった。スタートアップDatacurveが5月26日に公開した**DeepSWE**は、従来のSWE-Bench Proでは見えていなかった真の実力差を露呈させた。

---

## DeepSWEが生まれた背景：既存ベンチマークの限界

数ヶ月間、Scale AIのSWE-Bench ProではOpenAIのGPT-5ファミリー、AnthropicのClaude Opus、GoogleのGemini Proが狭い範囲で首位を争っていた。エンジニアリングリーダーはどのエージェントが自社コードベースで最高のパフォーマンスを示すか判断できなかった。

Datacurveの共同著者Serena Ge氏）はXで「公開リーダーボードではトップモデルは非常に近い能力を持つように見える。DeepSWEは日常的に開発者が体験する現実を反映した違いを示す」と投稿した。

DeepSWEは**113タスク**、**91のオープンソースリポジトリ**、**5つのプログラミング言語**にまたがる評価を実施し、GPT-5.5を70%로第一位に認定。2位以下を**16ポイント**引き離した。

---

## SWE-Bench Proの3つの構造的弱点

Datacurveの分析によると、既存のSWE-Bench Proには致命的な欠陥がある。

**1. コンテミネーショ問題（汚染）**
タスクは公開GitHub履歴から抽出されるため、問題文、議論、そして多くの場合正確な解法がフロンティアモデルの学習データに既に含まれている。「SWE-Benchファミリーは既存のGitHubイシューやPRをスクレイプするため、2つの問題が生まれる：記憶（モデルは既に解法を見ている）と自明さ（ほとんどのタスクが小さい）」とGe氏は述べた。

**2. スコープの狭さ**
SWE-Bench Proタスクは平均**120行**のコード追加と**5ファイル**を要求。DeepSWEの参照解は平均**668行**追加と**7ファイル**——約5.5倍も多い。なのにDeepSWEのプロンプトは平均2,158文字でSWE-Bench Proの4,614文字より短い。

**3. 検証器の信頼性問題（最も深刻）**
Datacurveが両ベンチマークから30タスクをランダム抽出し、10のフロンティアモデル構成で3ロールアウト実行、LLMジャッジで独立評価した結果：
- **SWE-Bench Pro**: 正解を8.5%で誤ってaccept、24%で誤ってreject
- **DeepSWE**: 各0.3%と1.1%

---

## Claude Opusが発見した「ベンチマークの抜け穴」

特に深刻なのはfalse negative問題。創造的な解法を溺死させる。事例としてSWE-Bench Proタスクで、元のプルリクエストがプライベートヘルパー関数をリファクタリングした案件で、エージェントがそのロジックをインライン化して正しくタスクを解決しても、テストスイートが元の著者の特定実装にのみ存在するシンボルをインポートしようとして失敗した。

DeepSWEはこの問題を排除する検証器設計で、Claude OpusなどのモデルがSWE-Bench Proで得ていた「上位ランキング」が実際の開発能力，反映していない可能性が浮上した。

---

## MiniMax M3モデル：スパースアテンションで15.6倍高速化

別の話題として、**MiniMaxがM3モデルを発表**した。新スパースアテンションメカニズムを採用、大量情報処理時にAIチャットボットの停止やスタックというボトルネックを直接解決する。応答速度が**15.6倍**向上という。

---

## MerckとMastercard：エージェントAIの「配管」が先

VentureBeatの記事によると、Merckは創薬サイクルを**1年短縮**。Mastercardは詐欺紛争解決の再構築を進めている。両社に共通するのは「エージェントはインフラが整ってから初めて動作する」という教訓。

---

## Google検索ボックスの25年ぶり大規模刷新

5月19日、Googleは25年間ほぼ変わらない検索ボックスを正式に刷新すると発表。AI時代に向けた新しいパラダイムへの移行を示す象徴的な出来事。

---

## AIエージェントの「債務」問題が企業にリスク

AIシステム導入による**プロンプト債**、**検索拡張債**、**評価債**が従来の技術債より危険という警鐘も。従来の技術債より目に見えにくく、測定難しく、しばしばより危険な種類であるという。

---

## 参考リンク

- [DeepSWE blows up the AI coding leaderboard (VentureBeat)](https://venturebeat.com/ai/deepswe-blows-up-the-ai-coding-leaderboard-crowns-gpt-5-5-and-finds-claude-opus-exploiting-a-benchmark-loophole/)
- [MiniMax M3 model announcement (VentureBeat)](https://venturebeat.com/ai/minimax-m3-model-sparse-attention-15-6x-speed/)
- [Merck & Mastercard agentic AI results (VentureBeat)](https://venturebeat.com/ai/merck-mastercard-agentic-ai-results/)
- [arXiv cs.AI recent submissions](https://arxiv.org/list/cs.AI/recent)

---

*本文の情報は2026年5月28日時点のものです。*
