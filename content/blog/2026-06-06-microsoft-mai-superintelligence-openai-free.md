# Microsoft、OpenAIとの契約解除後初めて独自AI「MAI」ファミリーモデルを公開

2026年6月5日、Microsoft Build2026において、同社AI責任者Mustafa Suleyman氏がMicrosoft AI部門がOpenAIとの契約上の制約から「解放された」ことを初めて公に明かし、独自の大規模AIモデルファミリー「MAI」を正式に発表した。累計130億ドルを超えるOpenAIへの投資を維持しながらも、Microsoftは独自の超知能（superintelligence）開発への道を開いた。

---

## MAIファミリーモデルの概要

Microsoftが同日公開した**MAI（Microsoft AI）ファミリー**は、7つの独自モデルで構成される。注目すべきは35ビリオン activoパラメータを持つ推論モデル**MAI-Thinking-1**で、ソフトウェアエンジニアリングベンチマークで競合モデルに匹敵する性能を示したという。

MAIファミリーの全モデル：
- **MAI-Thinking-1**: 35Bパラメータ推論モデル（ MATH・コード生成）
- **MAI-Code-1-Flash**: 軽量コード生成モデル（GitHub Copilot / VS Code向け）
- **MAI-Image-2.5**: テキストから画像生成・画像編集モデル
- **MAI-Transcribe-1.5**: 43言語対応の最高精度文字起こしモデル
- **MAI-Voice-2**: 多言語音声合成モデル

注目すべきは、いずれのモデルも**スクラッチから学習**されており、他社の Frontierモデルからの蒸留（distillation）に依存していない点。Suleyman氏はブログ投稿で「競合ラボからの出力を使用して学習することはしない」と明示した。

---

## OpenAIとの契約変更が意味すること

MicrosoftとOpenAIの原有契約には、AGI（人工普通知能）研究の禁止と、計算能力（FLOPS）の上限を定めた条項が含まれていた。2025年11月、この契約は正式に改正され、Microsoftは独自の超知能研究を追求する自由を得た。

Suleyman氏は Build2026のステージ上で「OpenAIとの契約から約6六个月前に解放され、正式に超知能を追求する态になった」と述部。「2030年以降に向けて、世界最高のモデルを構築する能力を確保することが私たちの任務だ」と語った。

---

## AIエージェントのセキュリティ課題とMXC

Microsoftは Build 2026において **MXC（Microsoft Execution Containers）** も発表した。OSレベルのポリシー駆動型実行環境で、Windowsそのものに組み込まれている。

AIエージェントは従来のアプリとは異なり、自然言語で目標を受け取り、ファイルをオープンし、コードを実行し、APIを呼び出す。この柔軟性が**攻撃対象領域（attack surface）** を拡大し、セキュリティリスクの温床となっている。

MXCは、開発者やIT管理者がエージェントがアクセスできるリソースを事前に宣言し、OSカーネルレベルでそれを強制する。「コンポーザブルサンドボックススペクトラム」と呼ばれるこの仕組みは、軽量なプロセス分離からLinuxコンテナ、ミクロ仮想マシンまで対応する。

**MXCの主要機能：**
- エージェント実行環境とユーザーデスクトップの分離
- クリップボード、UI、入出力デバイスへのアクセス制御
- Entra IDによるエージェント每个のStrong Identity绑定
- セッション間のデータ漏えい防止

---

## Anthropic、Claudeが本番コードの80%を生成

Microsoftとは独立した動きとして、Anthropicも6月4日、Claudeが司うproductionコードの**80%以上**を生成している现状を明かした。2021年比でエンジニア1人あたりのコード出荷量が**8倍**に増加しているという。

Anthropicが提示した企業向けの3ステップ roadmap：
1. **コード実行からアーキテクチャ監視への移行**: 開発者はコードを書く人からゴールを指定し、出力をレビューする立場へ
2. **コードレビューのボトルネック解消**: CI/CDパイプラインにAI自動レビューアを統合
3. **自律エージェントへの完全移行**: サブエージェントに複数時間の作業を委任

Claude Opus 4.6は12時間、Claude Mythos Previewは16時間以上の連続的な問題解決を達成。内部ベンチマークでは、AIモデル学習コードの高速化で**52倍**のspeedupを記録した。

---

## 開発者視点での意義

MicrosoftのMAIファミリーとMXCの発表は、**AI開発の自律性vs制御可能性**という二律背反に対する具体的な回答となる。MAIが示すのは、自律的なAI開発が実装可能である一方、MXCが示す先は、その自律性をenterprise環境“安全に使用するためのインフラがようやく整いつある”这一。

Anthropicの80%という数字が示すのは、AI支援からAI自律へのパラダイムシフトがすでに進行中である这一点。開発者は「コードを書く人」から「システムを設計し、AIの出力を判定する品質管理者に変わる”这一潮流に備える必要がある。

---

## 参考リンク

- [Microsoft AI chief says company was "set free" from OpenAI to pursue superintelligence](https://venturebeat.com/ai/microsoft-ai-chief-says-company-was-set-free-from-openai-to-pursue-superintelligence/)
- [Microsoft launches MXC, an OS-level sandbox for AI agents](https://venturebeat.com/ai/microsoft-launches-mxc-an-os-level-sandbox-for-ai-agents-with-openai-and-nvidia-already-on-board/)
- [Anthropic says 80% of its new production code is now authored by Claude](https://venturebeat.com/ai/anthropic-says-80-of-its-new-production-code-is-now-authored-by-claude-how-your-enterprise-can-keep-up/)

---

*（本文の情報は2026年6月6日時点のものです）*