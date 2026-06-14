# AI開発ニュース週間まとめ（2026年6月14日週）

6月第2週末のAI開発ニュースをまとめる。Googleの検索ボックス刷新、Anthropicの政府命令によるClaude Fable/Mythosシリーズへのアクセス遮断、1,500ドルでの基盤モデル訓練など、先週以上に激動の週となった。

---

## Anthropic、政府命令を受けClaude Fable 5・Mythos 5の公開アクセスを全面遮断

Anthropicは米国政府からの命令を受け、**Claude Fable 5**および**Mythos 5**の全公開アクセスを停止した。企業ユーザーはもはや単一のAIモデルやプロバイダーに критически 依存のリスクを回避できず、multi-provider architectureへの移行が急務となっている。

VentureBeatの報道によれば、Anthropicは「運営上の信頼性確保の観点から критически ワークフローを単一のAIモデルやプロバイダーに依存する状況は企業にとって受け入れられない」と声明を発表。代替案として複数のモデルを組み合わせたプロンプトルーティングの必要性が強調されている。

この措置は中国政府が国内AIラボへのアクセス遮断を行った事例と対照的であり、米国のAI安全保障政策が海外モデルの国内展開にも影響を与え始めている現状を浮き彫りにしている。

---

## Google、検索ボックス刷新——25年ぶりのUI大変革

Googleは火曜日（6月9日頃）、25年間ほぼ不变だった検索ボックスのデザインを一新すると発表した。新しい検索インターフェースはAIネイティブであり、単なるblue linksのリストではなく、動的な応答を生成する能力が統合される。

この刷新はGoogleの検索結果UXにおける過去25年間でもっとも大きな変革となり、从来的な10ブルー リンク方式からの脱却が正式に始まる。Googleは検索体験を「クエリへの回答」から「問題解決のパートナー」へと転換する方針を示している。

---

## 1,500ドルで基盤モデルを訓練——研究者が低成本記録を更新

研究者チームは**約1,500ドル**で基盤モデルをゼロから訓練する手法を報告した。1B reasoning modelがはるかに大規模なLLMと遜色ないベンチマークスコアを達成し、インターネットスケールのデータも必要としないことが実証された。

この成果は「大規模=高性能」という現在のAI開発のパラダイムに疑問を投げかけるものであり、小規模チームやリソース制約のある組織でも高品質なモデル開発が可能になる可能性を示唆している。

---

## Kimi K2.7-Code、思考トークンを30%削減——だがベンチマークへの懐疑も

Kimi K2.7-Codeは思考トークンを30%削減する新機構を採用したが、実践者からは「ベンチマークの結果が実際の性能を反映していない」との指摘が上がっている。

K2.7-Codeのアプローチはライブラリをwrapするのではなく直接コードを生成する形式で、より正直な動作を実現。しかし2つのカーネルが失敗し、MoE結果がK2.6からリグレッションを起こしていることが報告されている。

---

## Google研究者、「Faithful Uncertainty」でLLMの幻覚問題を解決

Googleの研究者は「**faithful uncertainty（忠実な不確実性）**」という新概念を提唱した。これはLLMがゼロの幻覚を追求するのではなく、不確実性を正確に表現することで有効な回答を失うことを防ぐアプローチ。

エンタープライズAIにおいて「完璧な正確性」の追求がかえってシステムの有用性を損なっていた問題に対し、LLMに「メタ認知」機能をを持たせ、確信度に応じた応答の出し分けを可能にする。

---

## Microsoft、SkillOptでAIエージェントスキルの自動アップグレードを実現

Microsoftはオープンソースの**SkillOpt**を発表した。このツールはモデルの重みを変更せずにAIエージェントのスキルを自動的にアップグレードできる。

deep learningの規律をAIエージェントのスキル管理に応用したもので、手動のプロンプト調整を数学的に検証されたテキスト最適化に置き換える。エージェントの能力向上がモデル再訓練なしに進む新时代が始まる。

---

## Xiaomi MiMo Code、200+ステップタスクでClaude Codeを上回る

Xiaomiは新しいオープンソースのエージェント型AIコーディングツール**MiMo Code**をリリースした。MiMo Codeは200ステップ以上の超長タスクでClaude Code 성능을 능가한다는 результа를 달성했다.

永続メモリシステムが導入されており、エージェント型開発ワークフローにおける「コンテキスト喪失」という広く認識されている課題に直接対応している。競合他社も同等の機能を開発中であり、エージェント型codingの競争が加速している。

---

## Google DiffusionGemma、256トークンを並列生成・自己修正

Googleの**DiffusionGemma**は256トークンを並列に生成し 스스로エラーを修正しながら進む新しい生成モデル。従来のsequential生成とは異なり、ブロック単位でトークンを書き出すため consumer GPUでも高速な推論が可能。

一方、オープンエンドのタスクでは弱点があり、創造的なنسيsultsよりも構造化された出力が求められる場面で強みを発揮する。

---

## GPT-5.5、Agents' Last ExamでClaude Fable 5を破る

新たな厳格なベンチマーク**Agents' Last Exam**で、GPT-5.5がClaude Fable 5を破るという予想外の事態が発生した。GPT-5.5の勝利は、OpenAIのモデルが複雑なマルチパートプロンプトの厳密な遵守において現在领先地位にあることを示唆している。

---

## arXiv注目論文：Agent-native Knowledge Orchestration

今週のarXiv에서 눈길을 끄는論文として、**Agents-K1: Towards Agent-native Knowledge Orchestration**が挙げられる。エンティティ抽出・関係性抽出・知識統合を统一的に処理するエージェントファーストのアーキテクチャが提案されている。

また**EurekAgent: Agent Environment Engineering is All You Need For Autonomous Scientific Discovery**は、エージェント環境工学を通じた自律的科学発見の新しい枠組みを示している。

---

## 参考リンク

- [Anthropic blocks all public access to Claude Fable 5, Mythos 5](https://venturebeat.com/category/ai/)
- [Google just redesigned the search box](https://venturebeat.com/category/ai/)
- [Researchers say they trained a foundation model from scratch for about $1,500](https://venturebeat.com/category/ai/)
- [Google researchers introduce 'faithful uncertainty'](https://venturebeat.com/category/ai/)
- [Microsoft's SkillOpt automatically upgrades AI agent skills](https://venturebeat.com/category/ai/)
- [Xiaomi's MiMo Code beats Claude Code](https://venturebeat.com/category/ai/)
- [Google's DiffusionGemma](https://venturebeat.com/category/ai/)
- [GPT-5.5 beats Claude Fable 5](https://venturebeat.com/category/ai/)
- [Agents-K1: arXiv:2606.13669](https://arxiv.org/abs/2606.13669)
- [EurekAgent: arXiv:2606.13662](https://arxiv.org/abs/2606.13662)

---

*（本文の情報は2026年6月14日時点のものです）*