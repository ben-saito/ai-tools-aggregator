# OpenAIついに独自AIチップ「Jalapeño」を発表、Google・MetaのAI規制問題も注目

2026年6月、AI業界はチップ開発から企業倫理まで幅広いトピックで大きな動きを見せている。本稿では今週注目のAI開発ニュースをまとめて紹介する。

---

## OpenAI、Broadcomと共同開発した独自チップ「Jalapeño」を発表

OpenAIは6月24日、同社初となる独自AIチップ「**Jalapeño**」をBroadcomと共同開発したことを正式に発表した。Jalapeñoは**推論（Inference）専用**に設計されており、特にリアルタイムコーディングモデルでの低コスト運用を目指している。

OpenAIのGreg Brockman氏は発表声明の中で、「ワークロードについて深い理解を持っている。未対応の特定のワークロードを見つけ、それらを加速できるものをどのように構築できるかを検討してきた」と語った。

### 技術的特徴

- **推論最適化**: 事前学習ではなく推論ワークロードに特化
- **電力効率**: 現在の最先端代替品と比較して大幅に優れた性能/Wattを実現
- **スタック全体の最適化**: チップアーキテクチャ、カーネル、メモリシステム、ネットワーク、スケジューリング、配備システムを統合的に設計

OpenAIは「OpenAIはフロンティアモデルの開発や製品構築だけを扱っているのではなく、その基盤となるインフラも設計している。チップアーキテクチャ、カーネル、メモリシステム、ネットワーク、スケジューリング、配備システム、プロダクト体験まで」と声明で述べた。

現時点では、より負荷の高い事前学習タスクには引き続きNvidiaハードウェアが採用される見込みだが、推論コストの小さな削減でも同社の財務状況改善に大きく貢献する可能性があり、**AI経済性の今后**を左右する重要な戦略的動きとして注目されている。

---

## Meta、AI学習用従業員トラッキングツールを一時停止

Metaは6月24日、员工的コンピュータ活動を追跡してAIモデル学習に活用していたプログラムを**一時停止**したことを明らかにした。約1,600人の従業員がこのプログラムに反発を示していた。

### 問題の概要

- **追跡内容**: キーストローク、マウスのクリック、コンピュータ画面の内容
- **問題点**: MCIデータが社内で誰でもアクセス可能な状態だった
- **内部告発**: 「フルプロンプトと文字起こし、プライベート会話、人事・パフォーマンスデータ」が含まれていたと報告

Metaは声明で「プライバシーの保護を慎重に設計したプログラムだが、現時点ではデータがMeta従業員によって不適切にアクセスされたという兆候はない。一時停止して調査中」と説明した。

この事例は、**企业内部でAI学習データを収集することのリスク**を浮き彫りにした。员工的プライバシー保護とAIモデル開発のバランスについて、業界全体の議論を呼びそうだ。

---

## Figma、大規模アップデートでAI機能とコードレイヤーを強化

Figmaは6月24日、プラットフォームの大型アップデートを発表。デザインと開発の境界をさらに曖昧にする新機能が多数追加された。

### 主な新機能

- **コードレイヤー（Code Layers）**: 共同キャンバスに直接コードレイヤーを追加。チームはリポジトリをクローンし、コードからフローを抽出してデザーレイヤーに変換可能
- **アニメーション・トランジション**: デザイナーは外部ソフトなしでアニメーションを作成可能に
- **シェーダー効果**: AIを活用したシェーダー効果とフィルのサポート
- **カスタムプラグイン生成**: プロンプトでレイアウトジェネレーターやベクトルパストレサーなどのカスタムプラグインを作成可能

FigmaのCPO（最高プロダクト責任者）、Yuhki Yamashita氏によると、「マルチプレイヤーキャンバスは非常に強力。コードの品質を気にせず、空間的に様々な方向を急速に探索できる」としている。

---

## Agility Robotics、SPAC経由で上場決定 — 評価額25億ドル

人間型ロボット開発のAgility Roboticsは6月24日、SPAC（特別買収目的会社）であるChurchill Capital Corp XIとの合併契約を結んだことを発表。企業価値は約**25億ドル**の見込み。

### 概要

- **合併詳細**: Churchill Capital Corp XIとのSPAC合併
- **調達資金使途**: 次世代Digit v5の生産能力増強、既存注文の遂行、大規模展開を検討する新規顧客への拡大
- **受注状況**: 新モデルに対して3億ドル以上の複数年契約を締結、30社以上の大規模展開を検討するパイプライン
- **NASDAQ上場予定**: ティッカーシンボルAGLTでの上場を計画

CEOのPeggy Johnson氏は「人間型ロボットは生産性、サプライチェーンの回復力、アメリカの技術リーダーシップの重要な推進力となる。顧客環境で既に商用展開されている人間型ロボットで、Agilityは企業が労働力不足に対処し、効率を向上させ、AI駆動の自動化を安全に統合を支援する」と語った。

---

## Anthropic、AlibabaをAIモデル不正アクセス疑惑で批判

Anthropicは6月24日、Alibabaが同社のAIモデルに不正アクセスをしているとして**懸念を表明**した。Bloombergの報道によると、AnthropicはAlibabaの行動を「不法（illicitly）」と表現しているという。

この問題は、中国テック企业与지와米国AI企業の間の**知的財産とAIモデルの保護**をめぐる緊張を反映している。Frontier AIモデルのセキュリティとアクセス管理は、業界全体の重要課題として浮上している。

---

## Google、Gemini 3.5 Flashで「Computer Use」機能を実装

Googleは6月24日、Gemini 3.5 Flashへの「**Computer Use**」機能の追加を発表。この機能は、AIモデルが直接コンピュータを操作してタスクを実行できる能力を提供するもの。

これにより、Claude Computer Useに代表される「**AI Agent間のコンピュータ操作能力競争**」がさらに激化している。

---

## 参考リンク

- [OpenAI unveils its first custom chip, built by Broadcom - TechCrunch](https://techcrunch.com/2026/06/24/openai-unveils-its-first-custom-chip-built-by-broadcom/)
- [Meta pauses employee tracker for AI training amid privacy concerns - The Guardian](https://www.theguardian.com/technology/2026/jun/24/meta-pauses-employee-tracker-for-ai-training-amid-privacy-concerns)
- [Figma adds code layers, support for animations, more AI features in new update - TechCrunch](https://techcrunch.com/2026/06/24/figma-adds-code-layers-support-for-animations-more-ai-features-in-new-update/)
- [Agility Robotics plans to go public via SPAC in a $2.5B deal - TechCrunch](https://techcrunch.com/2026/06/24/agility-robotics-plans-to-go-public-via-spac-in-a-2-5b-deal/)
- [Computer use in Gemini 3.5 Flash - Google Blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-computer-use-gemini-3-5-flash/)
- [Anthropic Accuses Alibaba of Illicitly Accessing AI Models - Bloomberg](https://www.bloomberg.com/news/articles/2026-06-24/anthropic-accuses-alibaba-of-illicitly-accessing-its-ai-models)

---

*本文の情報は2026年6月25日時点のものです。*
