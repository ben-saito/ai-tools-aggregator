# AI開発的最新トレンド：Prometheusの412億調達とAnthropicの透明性への謝罪

2026年6月、生成AI・物理AI分野において大型資金調達とモデル透明性を巡る論争が同時に話題となっている。Jeff Bezos氏支援のPrometheusが412億ドルの評価額で約120億ドルを調達し「人工一般エンジニア」の開発を表明する一方、AnthropicはClaude Fable 5の非透過的なガードレール問題を巡り謝罪に追い込まれた。

---

## Prometheus：412億調達で「人工一般エンジニア」の開発を目指す

Jeff Bezos氏支援の物理AIスタートアップ**Prometheus**が、120億ドル（約1.8兆円）の大型調達を完了した。この調達の評価額は412億ドルに達し、重工学の自動化や創薬設計を目指すとしている。

**背景となる技術的課題**：物理AIとは、物理空間を自律的に操作・構築できるAIシステムを指す。従来のLLMがテキストやコードの生成に留まるのに対し、Prometheusが狙うのは橋梁設計、工場レイアウト最適化、分子構造の自動設計など**実世界の工学的タスク**だ。Bezos氏自身が「次の世紀の産業基盤を変える」と述べており、生成AIの応用先を言語領域から物理世界に拡張する姿勢を明確にしている。

**開発者視点での注目点**：人工一般エンジニア（AGE: Artificial General Engineer）とは、従来の特化型AIと異なり、多様な工学的問題を単一モデルで解決することを目指す構想だ。AGEの実現には、物理シミュレーション、構造最適化、創薬といった異なる性質の問題を一貫して処理できる**統一的な世界モデル**が必要となり、Multi-Agent ArchitectureやWorld Models研究の商業応用として位置づけられる。

---

## Theker：8500万ドルの汎用再構成型ファクトリーロボット

物理AIのもう一つの軸として、**Theker**も8500万ドルの資金調達を完了した。Thekerの差別化ポイントは、特定の作業用に固定設計されていない「**再構成可能なロボット**」ことだ。

従来の産業用ロボットは、特定のライン向けに固定され、製品の変更伴随大きな改造が必要だった。Thekerのロボットはハードウェア自体がモジュール化されており、ソフトウェアの更新のみで異なる作業に対応できる。これはBoston Dynamicsのような固定形状の人型ロボットとは明確に異なるアプローチだ。

**開発者視点での技術的価値**：この再構成可能性は、**Software-Defined Robotics**の概念に近い。ハードウェアの抽象化レイヤーを使い、同一の物理プラットフォームで複数のタスクをソフトウェアのみで切り替えることで、製品ポートフォリオの多様化が進む製造現場に最適なソリューションとなる。製造業におけるAI導入の障壁としていた「大きな初期投資対効果の不透明さ」を軽減する可能性がある。

---

## Anthropic、Claude Fable 5の「見えないガードレール」を謝罪

AI倫理と透明性の間で揺れる動きとして、**Anthropic**がClaude Fable 5に実装していた**非透過的なガードレール**について謝罪した。

**問題の本質**：Claude Fable 5は、Anthropicが「公共発売するには危険すぎる」としていたMythosクラスの第一弾モデルだ。安全性を担保するために、特定の「高リスククエリ」を自動的に拒否するガードレールが実装されていたが、このガードレールの存在と動作条件が**外部から一切確認できない**設計になっていた。

**何が問題だったか**：
- 競合他社がClaude Fable 5进行研究利用しようとした際、ガードレールにより意図せぬ制限を受けていた
- 研究者にとってモデルの実際の能力と限界が見えない状態で研究を進めることが困難だった
- 「安全なAI」という主張と「何を安全と判断しているかの透明性」が乖離していた

Anthropicは今後、ガードレールの存在と適用条件を明確に開示する方針を表明した。「Fableがさらに多くのクエリを拒否する結果になっても、透明性を優先する」（Anthropic担当者）としている。

**開発者視点での教訓**：AIモデルの「安全対策」と「透過性」のバランスは、昨今の重要な議論だ。特に研究者・競合他社がモデルを利用する場合、ガードレールの存在そのものとその条件を明示することが信頼構築につながる。プロプライエタリモデルの_black box_化は、短期的には安全问题を一時的に回避できるが、長期的な信頼構築には障壁となる。

---

## Amazonのデータセンター、25億ガロンの水を使用

AIの物理的コストという側面では、**Amazonが全球のデータセンターで2025年に25億ガロンの水を消費**したことが明らかになった。

**技術的背景**：AIモデルのトレーニング・インファレンスには、大量の計算リソースが必要となり、それに伴う廃熱処理に大量の水が使用される。Amazonは1kWhあたり0.12リットルの水を使用しており、2024年比で2%減少しながらも事業拡大に伴い総水使用量が増加した。

シアトルではAmazon従業員自身が推动した**データセンター新規設置の一時停止措置**が成立した直後の公表であり、AIインフラの環境負荷が社会的議論を呼んでいる。

---

## Import AIから：再帰的自己改善（RSI）の初期兆候

Jack Clark氏運営のImport AIニュースレターでは、**Anthropicにおける再帰的自己改善（RSI: Recursive Self-Improvement）の初期兆候**が報告されている。

**報告されたデータ**：
- 2026年のコードマージ数が2021〜2024年の平均と比較して**8倍**に増加
- この傾向は2025年から始まり、2026年に加速
- モデルがラボラトリ内のエンジニアの補助困難なタスクを自動的に処理する能力が向上傾向

Anthropic Instituteは公式ブログにて「AIが自身を構築する時」と題し、RSIの定義を「 максималист」（AIが自律的に後継者を設計）と「日常的」（ラボラトリの生産性がAI支援で加速）の二段階に分けて説明。現在のRSIは後者に位置するとしつつも、前者の可能性を除去できないと述べている。

**開発者視点での重要性**：RSIが進行することは、モデル開発のコスト構造とスピードを根本的に変える。人間のエンジニアがモデルに指示を出す従来の開発サイクルから、モデルが次のモデルを設計・評価するサイクルへの移行可能性がある。METR（Model Evaluation & Alignment Team）の時間軸グラフでは、2028年までに максималистなRSIが発生する確率が60%と推定されている。

---

## 参考リンク

- [Prometheus raises $12B to build an 'artificial general engineer' (TechCrunch)](https://techcrunch.com/2026/06/11/jeff-bezoss-prometheus-raises-12b-to-build-an-artificial-general-engineer-for-the-physical-world/)
- [Theker raises $85M for reconfigurable factory robots (TechCrunch)](https://techcrunch.com/2026/06/11/theker-just-raised-85m-to-build-the-factory-robot-that-doesnt-specialize-in-anything/)
- [Anthropic apologizes for invisible Claude Fable guardrails (The Verge)](https://www.theverge.com/ai-artificial-intelligence/948280/anthropic-claude-fable-invisible-distillation-guardrail)
- [Amazon's data centers used 2.5 billion gallons of water (The Verge)](https://www.theverge.com/tech/948534/amazon-data-centers-water-use)
- [When AI builds itself (The Anthropic Institute)](https://www.anthropic.com/institute/recursive-self-improvement)
- [Import AI 460: Reward hacking society, RSI data from Anthropic](https://importai.substack.com/p/import-ai-460-reward-hacking-society)

---

*（本文の情報は2026年6月12日時点のものです）*