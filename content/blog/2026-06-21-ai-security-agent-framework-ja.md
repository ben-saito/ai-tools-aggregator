# AIエージェントフレームワークのセキュリティ危機：LangGraph/LangChain/LangFlowの重大な脆弱性と業界対応

AIエージェントフレームワークがエンタープライズインフラとして急速普及する中、複数の定番フレームワークで深刻な脆弱性が同時に発見・悪用されている。2026年6月の短短数週間で、LangGraph、LangChain、LangFlowの3大フレームワークがそれぞれ古典的なAppSec脆弱性——SQLインジェクション、パストラバーサル、unsafe deserialization——を通じてリモートコード実行（RCE）に到達可能であることが明らかになった。

---

## 7,000台のLangFlowサーバーが攻撃対象：3つの脆弱性が描く「AIセキュリティの死角」

VentureBeatのセキュリティ報道によると、現在Internet上に約7,000台のLangFlowインスタンスが露出しており、その多くが北米に集中する。LangFlowはpath traversal（CVE-2026-5027、CVSS 8.8）を含む複数のRCE脆弱性の影響を受けており、イランの国家支援グループMuddyWaterによる攻撃が確認されている。

### 3フレームワークに共通する根本原因

**Path Traversal（LangFlow）**: `POST /api/v2/files` エンドポイントがファイル名を無検証でディスクに書き込み、`../` トラバーサルシーケンスにより `/etc/cron.d/` への書き込みが可能。LangFlowはデフォルト設定でauto-loginが有効のため、認証なしで攻撃が成立する。

**SQLインジェクション〜RCE（LangGraph）**: LangGraphのSQLite checkpointer（月間5,000万ダウンロード超）の `get_state_history()` がユーザー入力をSQLクエリに直接展開。CVE-2025-67644（CVSS 7.3）とCVE-2026-28277（CVSS 6.8）の連鎖により、msgpackデコーダ経由で `os.system()` 経由のコード実行に至る。

**プロンプトランダーのパストラバーサル（LangChain-core）**: `load_prompt()` 関数が設定辞書からファイルパスを読み取りつつ、トラバーサルシーケンスや絶対パスのチェックを欠く。攻撃者がパスを操作することで `.env` ファイル内の `OPENAI_API_KEY` などのシークレットが読み出し可能。CVE-2026-34070（CVSS 7.5）と CVE-2025-68664（CVSS 9.3）のデserialize脆弱性と組み合わせ可能。

### 「スキャナーが見えない」理由

Enkrypt AIのCSOであるMerritt Baer（旧AWS Deputy CISO）はこの種の問題を「AIリスクとしては感じない」と表現する。WAFはHTTPエッジを監視し、EDRはエンドポイントを見るが、インポートされたフレームワーク内部のmsgpackデコーダやプロンプトランダーを個別の信頼境界としてモデル化するデフォルト設定はない。CrowdStrikeの場合、AI検出・対応製品（AIDR）が250%以上のsequential成長で伸びており、6月17日にはAWS上のAgent・LLM・MCP通信へのリアルタイム評価をBedrock、Kiro、Strands Agentsに対して開始した。

---

## Arborフレームワーク：同じ計算予算でClaude Code/Codexを2.5倍上回る自律最適化

中国人民大学とMicrosoft Researchが共同開発した**Arbor**は、AI駆動の研究・最適化を trial-and-error から累積学習プロセスに進化させたフレームワーク。Arborは仮説・実験・インサイトを木構造で整理し、過去の失敗から学習して検証済み改善を累積的に進める。

### コアアーキテクチャ：Coordinator + Executor

- **Coordinator（長命AIエージェント）**: ターゲットコードベースを直接編集せず、研究の全体状態を所有。蓄積された証拠を観察し、新しい仮説と方向性を生成して実験結果を基に意思決定を行う
- **Executor（短命Focused AIエージェント）**: 仮説を1つだけ受け取り、隔離されたgit worktreeで実装・評価・デバッグを担当し、結果をCoordinatorに報告

両者は「Hypothesis Tree Refinement（HTR）」メカニズムを通じて協調する。各ノードが「仮説」「実行可能アーティファクト」「生成された事実的証拠」「蒸留されたインサイト」の4要素を束ねる。

### ベンチマーク結果

Arborは同じ計算予算でCodexおよびClaude Codeに対し**2.5倍以上**の検証済みパフォーマンス改善を達成。BrowseCompタスク（検索エージェント最適化）では、ベースライン45.33%から67.67%へ。CodexとClaude Codeはそれぞれ50%と53.33%で頭打ち。MLE-Bench LiteではGPT-5.5搭載のArborが全ベンチマークシステム中最良の結果を収めた。

---

## Import AI 461より：AIセキュリティ最新動向

### Sequent：英国AIセキュリティ研究所の研究者たちが新safety NPO設立

英国AI Security InstituteのAlignmentチームおよびTimaeusの研究者が合流し、**Sequent** を設立。「alignmentは路上にない」（"alignment is not on track"）ことを主な根拠として、超知能AI（ASI）が今後数年以内に開発される可能性に対し、現在のAIラボの経験的プログラムは訓練前に安全性を priori に保証するには不十分だと主張する。目標は1〜2年以内に40〜80人のフルタイム従業員を抱え、最初は1億〜1.5億ドルの調達を目指す。

### FrontierCode：Cognitionが提示した超高難易度コーディングベンチマーク

Cognition（SWE-bench開発元）は**FrontierCode**を発表。問題は3階層（Diamond 50問、Main 100問、Extended 150問）に分かれ、Python、Go、TypeScript、JavaScript、Java、C/C++などを対象とする。

現在の最難関結果（FrontierCode Diamond）は **Claude Opus 4.8: 13.4%**、次いでGPT-5.5: 6.3%、Claude Opus 4.7: 5.2%。SWE-benchが2023年10月に登場しておそらく既にsaturationに近づいていることを受け、Jack Clark（Import AI）は「2027年6月までに70%以上がDiamondを突破する」と予測する。

### Xiaomi MiMo：1,000 tokens/s を達成した1兆パラメータモデル

小米（Xiaomi）が **MiMo-V2.5-Pro-UltraSpeed** を発表。1兆パラメータのLLMながら毎秒1,000トークンという処理速度をFP4量子化・DFlash・TileRTとの共同設計により達成。8GPUコモディティノードで動作し、輸出規制下での中国メーカーにとっての速度最適化の重要性を示す事例となっている。

---

## 数学の自動証明時代：Numina-Lean-AgentがPutnam 2025全問解決

中国人民科学院、インペリアル・カレッジ・ロンドン、エディンバラ大学などの研究チームが **Numina-Lean-Agent** を開発。Lean定理証明器とやり取りする一般コードングエージェントを基盤とし、2025年Putnam数学コンテストの全問題を正答。さらにBrascamp-Lieb定理の形式化にも成功し、2週間足らずに8,000行以上のLeanコード、約70の新しい定義・補題・定理を自律的に導入した。「Discussion Partner」機能を 통해、Claude Codeが証明のボトルネック時に他のLLMに助けを求める知的協働が可能となっている。

---

## AI生産性——マクロ統計にはまだ現れないmicroの成果

UChicago BoothのAlex Imas教授の統合分析によると、microレベルでは実際の生産性向上を示す研究が増加（一部タスクで50%以上）する一方、マクロの集計生産性統計にはまだ反映されていない。乖離の理由として：AI導入の内生性（ベストプラクティス未確立）、O-ring自動化（ボトルネックタスクが全体提速を見えにくくする）、初期実験段階での効率性低下がある。

Jack Clarkは「AIが 人们が思う那么好意味で 있다면、マクロ経済成長率が歴史的傾向を上回る可能性がある」と指摘する。

---

## 参考リンク

- [7,000 Langflow servers are under attack (VentureBeat)](https://venturebeat.com/security/7000-langflow-servers-under-attack-langgraph-langchain-same-holes)
- [Fine-tuning forgets. RAG leaks context. Hypernetworks build the model your agent needs on demand (VentureBeat)](https://venturebeat.com/orchestration/fine-tuning-forgets-rag-leaks-context-hypernetworks-build-the-model-your-agent-needs-on-demand)
- [New AI optimization framework beats Claude Code and Codex by 2.5x (VentureBeat)](https://venturebeat.com/orchestration/new-ai-optimization-framework-beats-claude-code-and-codex-by-2-5x-on-the-same-compute-budget)
- [Copilot searched your mailbox. LiteLLM handed out admin keys (VentureBeat)](https://venturebeat.com/security/copilot-searched-your-mailbox-litellm-handed-out-admin)
- [Import AI 461: "Alignment is not on track" (Jack Clark)](https://importai.substack.com/p/import-ai-461-alignment-is-not-on)
- [Sequent: Scale and Automation for Higher Confidence in Alignment](https://www.sequent.org/launch)
- [Arbor: Autonomous Optimization Framework (arXiv)](https://arxiv.org/abs/2606.11926)
- [MiMo-V2.5-Pro-UltraSpeed (Xiaomi)](https://mimo.xiaomi.com/blog/mimo-tilert-1000tps)
- [Numina-Lean-Agent (arXiv)](https://arxiv.org/abs/2601.14027)

---

*本文の情報は2026年6月21日時点のものです。*
