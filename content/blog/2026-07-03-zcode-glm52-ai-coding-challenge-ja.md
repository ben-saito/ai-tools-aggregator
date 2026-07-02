# Z.aiがZCodeを発表 —— GLM-5.2でCursor、Claude Code、GitHub Copilotに挑む

2026年7月2日、北京拠点のAIラボZ.ai（旧称：Zhipu AI）が、エージェント型開発環境**ZCode**を正式にリリースした。macOS、Windows、Linux対応のデスクトップアプリケーションで、同社の旗艦モデル**GLM-5.2**専用に構築されたAIコーディングツールだ。Cursor、Claude Code、GitHub Copiot、そしてGoogleのAntigravityと直接競合する。

---

## ZCodeのポイント

**開発者視点**で見ると、ZCodeの最大の特徴は**「プロンプトではなくプロジェクト単位で考える」**設計思想。従来のIDEがチャットサイドバーやオートコンプリート拡張としてAIを後付けするのに対し、ZCodeは**エージェントファーストの開発環境**として設計されている。

- ユーザーが目的を記述すると、エージェントが作業を計画、ファイルを編集、チェックを実行、進捗をレビュー、反復を継続
- **GLM-5.2**に深く最適化されたZCode Agentが中核
- デスクトップ、モバイルRemote、Feishu / WeChat Botで同じワークスペースタスクを引き続き進行可能
- 機密性の高いコマンド、ファイル変更、高権限アクションは実行前に確認プロセスを経由

**中国市場向け差別化**: WeChat、Feishu、Telegramから実行中のコーディングエージェントを操作できるリモートコントロール機能が特徴。、長いタスクの実行中に進捗を確認し、指示を追加できる。

---

## GLM-5.2の性能

ZCodeの価値提案は、GLM-5.2なしには存在しない。

**GLM-5.2仕様:**
- **7440億パラメータ**（Mixture-of-Expertsアーキテクチャ、400億アクティブパラメータ）
- **ネイティブ100万トークンコンテキストウィンドウ**（前任の20万の5倍）
- **28.5兆トークン**で訓練
- **Code Arena**で全球2位（Anthropic Claude Fable 5に次ぐ）
- **Huawei製チップのみで訓練**（アメリカンチップ不使用
- 推定訓練コスト:**約2500万달러**（Emad Mostaque Stability AI創業者の試算）

**ベンチマーク:**
- Anthropic Claude Opus 4.8との**FrontierSWE**比較で**わずか1パーセンテージポイント差**
- OpenAI GPT-5.5を**上回る**

MITライセンスでHugging Face上にオープンソースウェイトを公開。

---

## 料金体系

| プラン | 月額 |
|-------|------|
| Lite | $16.20 |
| Max | $144 |

Anthropic Claude CodeやCursorの同等プランと比較して大幅に低価格。7月31日までCoding Plan加入者向けの**1.5倍利用Quotaボーナス**を提供中。

---

## ビジネス的意義

VentureBeatの分析が指摘するとおり、ZCode 하나의製品가 Three가지 중요 트렌드를 crystallizes:

1. **フロンティアAIモデルの価格競争**: 底なし値下げ競争
2. **AIスタックの地政学的分断**: 中国製チップで訓練されたモデルの台頭
3. **エージェント型コーディングツールの急速な成熟**: Gartner試算で**約100億ドル市場**

「単一モデルがすべてのタスクに最適なわけではない」という現実を踏まえ、ZCodeはClaude Code、Codex、Gemini、OpenCode他也サポートする。

---

## 開発者への影響

ZCodeの登場は、**AIコーディングツール市場の成熟と多元化**を象徴する出来事的だ。アメリカ製モデルに依存しない選択肢として、中国発の強豪が急速に存在感を増している。

特に注目すべきは、Huawei製チップでの訓練を実現した点。輸出規制リスクを考慮する開発者にとって、GLM-5.2/ZCodeの組み合わせは商用語脈での有力な代替手段になるつつある。

---

## 参考リンク

- [VentureBeat: Z.ai ZCode報道](https://venturebeat.com/ai/z-ai-launches-zcode-to-challenge-cursor-claude-code-and-github-copilot-in-ai-coding)
- [ZCode公式サイト](https://z.ai/zcode)
- [GLM-5.2 Hugging Face](https://huggingface.co/THUDM)
- [VentureBeat: Meituan LongCat-2.0](https://venturebeat.com/ai/meituan-open-sources-longcat-2-0-the-1-6t-near-frontier-agentic-coding-model-thats-been-leading-openrouter-trained-entirely-on-chinese-chips)

---

*本記事の情報は2026年7月3日時点のものです。*
