# OpenAIついに独自チップ「Jalapeño」発表、Broadcomと共創-Claude TagがSlackに降臨

2026年6月、AI業界は急速な基盤技術の垂直統合と、エージェントAIの企業浸透という2つの大きな潮流が交差する週となった。OpenAIがBroadcomとの協業で独自推論チップ「Jalapeño」をついに発表し、AnthropicはClaude Tagを通じてSlackに直接企業AIエージェントを展開開始。両社の動きが対照的な戦略で進む中、エンジニアリング雇用の耐性と企業におけるトークン消費の制御という現実的な課題も浮かび上がってきている。

---

## OpenAI、独自チップ「Jalapeño」でNVIDIA依存からの脱却加速

OpenAIは6月24日、Broadcomと共同開発した初めての本格的な独自チップ「Jalapeño（ハラペーニョ）」を発表した。このチップは推論（Inference）ワークロードに特化して設計されたASICであり、訓練（Training）ではなく推論のコスト削減に主眼を置いている。

的背景には明確な経済合理性がある。OpenAIのGPT-4o/GPT-4o Miniに代表される大規模モデルの推論コストは膨大で去年的ChatGPTサーバー稼働コストは_**84億ドル**_にものぼった。現在のChatGPTは週_**9億ユーザー**_の規模で稼働しており、このままスケールすると推論コストは_**130億ドル超**_に達する可能性が高い。

NVIDIAのハイエンドGPU（H100/H200/B100シリーズ）は推定_**75%の利益率**_を維持しており、AI企业提供からみると実質的な「NVIDIA税」を払っている格好になる。OpenAIは1ドルの収益のうち_**33セント**_しか利益が残らない厳しいマージンで運営されており、推論コストの削減は待ったなしの状態だった。

OpenAIのGreg Brockman会長は発表声明で「我々はワークロードについて深い理解を持っている。未充足の特定のワークロードを見つけ、それを実現できるものをどのように構築するかということだ」と語っている。

Jalapeñoはまだ試験段階だが、早期結果として現在の_state-of-the-art_ 代替品と比較して**_显著に優れたパフォーマンス・パー・ワット_**を実現としている。OpenAIはチップアーキテクチャ、カーネル、メモリシステム、ネットワーク、スケジューリング、展開システム、プロダク UX__を含むフルスタック最適化を進めていることが明らかになった。

注目すべきは、これがOpenAIの垂直統合戦略の延長線上にあることだ。同社は既に_**Codex**_や_agentic products_** の開発、データセンター建設を進めているが、さらにその下に位置するチップ設計まで手を伸ばすことになった。

---

## Anthropic Claude Tag — Slackに降り注ぐ企業AIエージェント

一方のAnthropicは6月23日、企業向け新機能「Claude Tag」のベータ版を開始した。Claude TagはワークプレースAIエージェントで、共有Slackチャンネルに直接統合される点が特徴的だ。

従来のジェネレーティブAIでは、エージェントに指示を送り、結果を別のツールで確認し、それをまた別のアプリにコピーする — この_**非効率な"_back-and-forth"_** が非効率の原因だった。Claude TagはSlackという既にチームが使しているツールに直接AIを埋め込むことで、この非効率を解決しようとしている。

Claude Tagの核心的な利点は次の3つだ：

- **チームメンバーなら 누구나**：Slackチャンネルの任意のメンバーがタスクを委任でき、モデルの出力をレビューし、途切れる場所から会話を再開できる
- **データガバナンスとの両立**：企業内の機密情報を扱いながらも、アクセス制御や監査機能を備えている
- **人間のレビューを伴う**：完全な自動化の代わりに、人が介在するチェックポイントを設けることで誤回答リスクを低減

Confidential S-1書の市場は激烈な競争に置かれている。Rampの2026年5月データによると企業AI支出は急増しており、業務効率化の期待とコスト管理の必需性がせめぎ合っている。

---

## AIはエンジニアの雇用をむしろ成長させた：SignalFireの新データ

「AIが雇用を破壊する」という言説とは裏腹に、SignalFireの最新データが面白い真実を浮かび上がらせている。AI裁量のoustic コーディングツールの急速な普及により、ソフトウェアエンジニアリングは理论上、最も自動化の影響を受けやすい分野だと考えられてきた。しかしSignalFireの分析によると、_**エンジニアは実際には採用者の中に占める比率が増加している**_という。

これは単純な話ではない。「 многочисленныеレイオフの理由は一貫してAIだ、特にコードに関するAIだ。1人のエンジニアが複数のエンジニアの作業をこなせるようになると説明される」とおり、_**企業のコスト削減の理由は常にAIを旗印にしている_**ものの、実際の雇用データではエンジニアの需要は底堅く、むしろ_**AIを使いこなせるエンジニア**_への需要がシフトしているようだ。

AIはコードを生成できるが 要求定義、要件取束境界の確定、そしてビジネスコンテキスト理解は依然として人間の領域だ。AIコーディングエージェントが書くコードの_**テスト設計、アーキテクチャ選定、統合判断**_は人間のエンジニアが担う割合が高く、単純なコード生成作業の自動化が逆に高度な判断を要するタスクへの専門性価値を高えている可能性がある。

---

## 企業AI支出の現実：トークン浪費からトークン規制へ

「トークン・マックス（最大限度地AI消費する）時代」は短く終わった。Accentureの内部会議的消息によると、幹部たちは_** CFO、COO、CEO**_を含む経営層がAI支出の_**予測不能さ_**に化管理感を強めている。

AccentureのエージェントAI戦略リード、Justice Kwak氏の言葉：「AIがコスト構造に実質的な影響を与える転換点にきている。支出は非常に予測困難になっており、特にCFO、COOのレベルでは経営陣の注意が必要だ」

この无声の変化は企业文化にも直結する。Accentureでは先前従業員にAI使用を촉进clipping_、AI利用なしでは_**昇進から取り残される**_と警告していた。しかし滥用抑制が始まり、小さなタスクにAIを使うことへの_**抑制的氛围**_が社内で高まっている。AI价值创出自己的效率という論理と、AI无驕使汫るという管理的抑制の跷跷板状态にある。

---

## Figma、コードレイヤーとシェーダー対応で設計×開発の統合深化

デザインツールのFigmaも6月24日、大規模な機能更新を発表した。目玉は_**コードレイヤー**_の実装だ。従来のFigmaはデザイン⇔コードの乖離が課題だったが、新機能では共同キャンバスに直接コード層を埋め込み、デザイナー、PM、エンジニアが同じ画面で迭代できる環境が実現した。

追加された機能：

- **コードレイヤー**：リポジトリのクローン、コードからデザイン層へのflows抽出が可能に
- **モーション・シェーダー対応**：デザインプロトタイピングの範囲が大幅拡大
- **AIによるカスタムプラグイン作成**：自然言語でタスクを指定するとAIがプラグインを生成

Figmaのチーフプロダクトオフィサー、Yuhki Yamashita氏によると、コードレイヤーの主眼は「精巧なコードを作ることではなく、アイデア迭代に集中できる」点にあるという。デザイン段階からエンジニアとの协議がシームレスになることで、_**仕様書の往復のやり取りが缩减**_され、開発速度の向上が期待される。

---

## Agility Robotics、SPACで25億ドル評価の上場を実現

最后に、人型ロボット開発のAgility Roboticsが6月24日、SPAC（特別買収目的会社）であるChurchill Capital Corp XIとの合併を通じて_**25億ドル評価で上場**_計画を発表した。Oregon State Universityから2015年にスピンアウトした同社は今まで、NVIDIA、Amazon、SoftBank Vision Fund 2、DCVCらから支援を受けてきた。

新型ロボットに対する_**3億ドル以上の多年期注文_**を獲得済みで、_**30社以上_**が大规模展開を評価中という滑り出しの早いビジネスだ。生成AIと、ロボット制御のコンビネーションが製造・物流現場の自动化需要とマッチしており、AI物理化の波的代表例として注目される。

---

## まとめ：垂直統合とコスト最適化がキーワード

6月第4週のAIニュースを横並びすると、2つのテーマが浮かび上がる。1つは_**基盤技術の垂直統合**_で、OpenAIがチップまで内製化の動きは、Google（TPU）、Meta（MTIA）、Microsoftに次ぐ主要プレイヤーの動きだ。2つめは_**エージェントAIの企業浸透**_で、Claude TagのSlack統合や企業でのAI支出管理強化は、AIが試験運用から_**実際の業務プロセス**_に入り込んでいる証拠だ。コストの可視化と最適化が次の課題になっている。

---

## 参考リンク

- [OpenAI unveils its first custom chip, built by Broadcom - TechCrunch](https://techcrunch.com/2026/06/24/openai-unveils-its-first-custom-chip-built-by-broadcom/)
- [The math behind the OpenAI Jalapeño chip - AI News](https://www.artificialintelligence-news.com/news/openai-jalapeno-chip-inference-economics/)
- [Anthropic's Claude Tag is learning your company, one Slack message at a time - TechCrunch](https://techcrunch.com/2026/06/23/anthropics-claude-tag-is-learning-your-company-one-slack-message-at-a-time/)
- [AI was supposed to kill engineering jobs, but new data suggests they're the most resilient - TechCrunch](https://techcrunch.com/2026/06/24/ai-was-supposed-to-kill-engineering-jobs-but-new-data-suggests-theyre-the-most-resilient/)
- [Companies are scrambling to stop employees from maxing out AI budgets with small tasks - TechCrunch](https://techcrunch.com/2026/06/24/companies-are-scrambling-to-stop-employees-from-maxing-out-ai-budgets-with-small-tasks/)
- [Figma adds code layers, support for animations, more AI features in new update - TechCrunch](https://techcrunch.com/2026/06/24/figma-adds-code-layers-support-for-animations-more-ai-features-in-new-update/)
- [Agility Robotics plans to go public via SPAC in a $2.5B deal - TechCrunch](https://techcrunch.com/2026/06/24/agility-robotics-plans-to-go-public-via-spac-in-a-2-5b-deal/)

---

*（本文の情報は2026年6月25日時点のものです）*
