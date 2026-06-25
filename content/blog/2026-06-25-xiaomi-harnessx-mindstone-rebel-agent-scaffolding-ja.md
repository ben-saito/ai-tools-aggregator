# Xiaomi HarnessX × Mindstone Rebel：AIエージェントの「自己能動改善」と「Local-First OS」が示す2026年下半期の主軸

2026年6月下旬、AIエージェント基盤に関する2つの重要な発表が同日行的された。Xiaomiの**HarnessX**は、エージェントが自身の手綱（scaffolding）を実行途中に書き換える技術を、VentureBeatが伝えた。London発のMindstoneはローカルMarkdownファイルを核とするAI OS**Rebel**をリリースした。両者を並べると、2026年下半期のAIエージェント技術における明確な2つの潮流が見える。

---

## Xiaomi HarnessX：ハーネスを「書いては試して改善する」自律改善ループ

[Xiaomi ResearchがarXivで公開したHarnessX](https://arxiv.org/abs/2606.14249)は、エージェントが自身に接続された**ソフトウェア・ハーネス**（プロンプト、ツール統合、メモリ管理、制御フロー）を実行中に自律的に書き換えるフレームワークだ。

### 背景：静的なハーネスが壁に突き当たる

現行のエージェント開発では、ハーネスは手作業かつ静的に設計される。基盤モデルを変更したり、新しいツールを導入したり、領域を切り替えたりするたびに人手でコードを書く必要があり、ハarnessの更新とモデル改善が分断されていることが知られていた。

### HarnessXの4ステージ改善パイプライン「AEGIS」

HarnessXはAEGIS（Agent Evolution via Guided Instrumented Simulation）と呼ばれるtrace駆動の改善エンジンを備え、4つのステージでハーネスを自動改善する：

- **Digester**: 実行トレースを圧縮して失敗パターンを特定
- **Planner**: 構造的な改善（プロンプト微調整ではなくコードレベルの書き換え）を立案
- **Evolver**: ハーネスのコードを生成・テスト
- **Critic + Gate**: 報酬ハッキングを検出しつつ、既解決タスクへの回帰を防ぐゲーティング

### 小さいモデルほど効果が大きい

HarnessXは15のモデル・ベンチマークの組み合わせで検証され、平均**+14.5%**の改善が確認された。特に注目すべきは、Qwen3.5-9B（オープンウェイト）の**ALFWorldタスクで+44.0%**、SWE-bench Verifiedで**+18.2%**の改善が確認された点だ。基盤モデルのスケールアップだけでなく、ハーネスの品質向上が小さいモデルにより大きな効果をもたらすことが実証された。

### ハーネスとモデルの共進化

HarnessXの革新性の一つは、**ハーネス改善とモデル訓練を同時並行で進める**点にある。Cross-harness GRPO（Group Relative Policy Optimization）により、あるタスクで異なるバージョンのハーネスから収集した実行軌跡を同時にプールしてモデル微調整に活用する。これにより、ハarnessの構造的改善がモデルの内部状態に反映される闭环が形成される。

---

## Mindstone Rebel：Markdownファイルを「記憶層」に持つLocal-First AI OS

Mindstoneが同日公開した**Rebel**は、ローカルMarkdownファイルを基盤とするAIエージェントOSだ。100ユーザーまで無料で利用可能で、それ以上はEnterpriseライセンス必需的という**Fair Sourceライセンス**を採用する。

### アーキテクチャ：状態・記憶・インストラクションはすべて.mdファイル

Rebelの中核は至ってシンプルだ。エージェントの状態（state）、記憶（memory）、タスク指示（instructions）をすべて**ローカルMarkdownファイル**で管理する。プロジェクトごとの`readme.md`が記憶の単位となり、`agents.md`がエージェ或少两人的役制と実行境界を定義する。

この設計の狙いは3つある：

- **コスト削減**: Word/PDFなどのメタデータがコンテキストを消費し、モデルAPIコストを高める。Markdownは生テキストに近く、コンテキスト効率が高い
- **ベンダーロックイン回避**: すべての指示・記憶がローカルファイルのため、SaaSプロバイダを変更してもデータとワークフローを持ち出せる
- **透明性**: 何を記憶し、何を組織共有しているかユーザーが直接確認・編集できる

### モデルルーティングの自動化

Rebelはタスクを複數のサブステップに分割し、ステップごとに異なるモデルに振り分ける。複雑な推論は高機能モデルに、単純なルは低コストモデルに、機密データはローカルモデル（月内で動作させる）に自動的に切り替える。 enterprisesはポリシーで「敏感な情報は必ずローカルモデル経由」を設定できる。

### ティアド記憶構造

Mindstone CTOのGreg Detre氏によると、Rebelは情報の中毒度に基づく**3層記憶構造**を採用する：

- **高価値**: プロジェクト固有の`readme.md`に直接記述
- **中価値**: 深い歴史記録への参照リンクとして保持
- **低価値**: インデックス化された記憶ディレクトリに保存され、関連タスク時に呼び出される

Detre氏はず「「共享記憶は知識作業AIにおいて最もエンパワリングなこと。会社全体が『ますます賢くなる超有機体』这种感觉を持てる」と語る。

---

## 両技術の交差点：ハーネス改善 × Local-First自律エージェント

HarnessXとRebel、一見異なる兩技術だが、根本で同じ問題を指している：

- **現在のハーネス/エージェントは静的**: ともに「動き続けるAIシステムには静的設計では不十分」という問題意識を共有する
- **モデル抽象化の重要性**: HarnessXはハーネスとモデルを分離して共に改善し、RebelはMarkdownファイルでモデル戦略を抽象化する
- **小さいモデルへの期待**: HarnessXが証明した「小さいモデルでもハーネス改善で大幅性能向上」という結果は、Rebelのローカルモデル活用戦略を後押しする

---

## Five Eyes がAIサイバー脅威の「数ヶ月以内の到来」を警告

余談だが、6月22日に**Five Eyes（米国・英国・カナダ・オーストラリア・ニュージーランドのインテリジェンス同盟）**の网络安全担当者が連名で緊急警告を発した。AI支援のサイバー攻撃が今後数ヶ月以内に民間企業に影響を及ぼす可能性が高いという。AI模型使ったフィッシング、脆弱性探索、自动権限昇格などの脅威が具体的に指摘されており、企業はAIセキュリティ対策の優先度を上げる必要がある。

---

## まとめ

2026年下半期のAIエージェント技術は以下の2軸で進化正在：

- **自己能動改善**: HarnessXが示すように、ハーネス・プロンプト・ツール統合を人間が手書きではなく、AI自身が書いてテストして改善する闭环の構築が进行中
- **Local-First & データ主権**: Rebelが示すように、すべての記憶と指示をローカルファイルで管理し、ベンダーロックインを排した自律エージェント基盤の構築が进行中

特に小さいオープンウェイトモデル 활용 と組み合わせた場合、両技術の相乗効果は大きい。基盤モデルのスケール不再是唯一の道という認識が、業界共通認識になりつつある。

---

## 参考リンク

- [Xiaomi HarnessX (arXiv)](https://arxiv.org/abs/2606.14249)
- [Mindstone Rebel - Product Hunt](https://www.producthunt.com/products/mindstone-rebel)
- [VentureBeat - Mindstone Rebel Enterprise AI Agents](https://venturebeat.com/orchestration/your-enterprise-ai-agents-should-automatically-remember-which-model-is-right-for-which-task-mindstone-built-the-capability-with-rebel)
- [VentureBeat - Xiaomi HarnessX](https://venturebeat.com/orchestration/xiaomis-harnessx-rewrites-its-own-ai-scaffolding-mid-task-and-smaller-models-gain-the-most)
- [Five Eyes Joint Intelligence Briefing](https://www.artificialintelligence-news.com/news/five-eyes-warning-ai-cyber-threats/)
- [AI News - Sakana AI Fugu (vendor lock-in mitigation)](https://www.artificialintelligence-news.com/news/mitigating-vendor-lock-in-sakana-ai-fugu-multi-agent-models/)

---

*（本文の情報は2026年6月25日時点のものです）*
