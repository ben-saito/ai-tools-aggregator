# AIエージェント開発最前線：永続化アーキテクチャと費用対効果の革新

AIエージェントがエンタープライズ導入の段階を迎え、性能だけでなく信頼性と運用コストの課題が表面化している。2026年5月は、AIエージェントの\"再構築\"と\"費用対効果\"をテーマにした技術が話題を集めた。

---

## 永続化の問題：AIエージェントは\"落下\"する

TechCrunchが5月29日に伝えたところによると、开发者たちの間でAIなしでは働かないという動きがが広がっている。ただし、AIがコードを高速化する一方で、その質的问题是懸念されている。

、より根本的な課題は別にある。VentureBeatが同日報じた通り、エンタープライズAIエージェントの実際のボトルネックはモデルの性能ではない。**パーミッション（権限管理）** だ。WorkdayのGerrit Kazmaier氏によれば、顧客がDIYでエージェントを構築する際、承認とセキュリティモデルの整合性が失われ、結果が\"過度に広範囲\"になりがちだという。

Temporal TechnologiesのPreeti Somal VPは、AIエージェントの最初の波が\"快速展開\"に重点を置きすぎたと指摘する。実際の運用に入ると、ワークフローの永続化、状態管理、可視性が不可欠になる。

>「バージョン2.0を構築し直すお客様大势います。第一段階では、素早く移动しましたが、配管の整備が後回しでした。クラッシュやバーンがあり、そして信頼できる基盤で再構築する必要があります」

---

## 長期実行エージェントが抱える2つの課題

Somal氏によれば、長期実行型エージェントが直面する課題は明確に2つに分かれる。

**ステート（State）** はワークフローの実行状態を表す。エージェントがプロセスのどの段階にいるか，哪些のアクションが完了しているか，障害発生時にどこから再開するか。**メモリ（Memory）** はタスク間をまたいで情報が保持される領域を指すが、これらはしばしば混同されやすい。

この区別はシンプルなチャットボットから複雑なビジネスプロセスへの移行において重要になる。例えばHealthcare企業のAbridgeでは、 Physician訪問の処理に音声処理、要約生成、モデル呼び出し、訪後サマリー生成など複数段階が絡み合う。

---

## 決定論的スピーン：LLMを包む永続化レイヤー

Temporalは\"**決定論的スピーン（Deterministic Spine）**\"というフレームワークを提唱する。これはLLMという確率的システムの周囲に実行の信頼性を維持する仕組みであり、重要な理由として、エンタープライズシステムではプロカジェメントワークフローやヘルスケアサマリー、カスタマーサポートエスカレーション、コンプライアンスプロセスがモデルのタイムアウトや外部依存のクラッシュで沈黙的に失敗することは許されないからだ。

この設計では、LLMは\"大脑\"として機能しオーケストレーション層がそれを包み込む。的大脑が応答しない場合は再呼び出し、次のステップが失敗した場合は障害発生時点から再開する。

---

## Pinterest：ビジョンモデルを\"腸削除\"してコスト90%削減

費用対効果の革新もある。VentureBeatが報じた通り、PinterestはQwen3-VLのビジョンモデルを\"腸削除\"し、独自のエンベディングで再構築することでAIコストを**90%削減**し、精度を30%向上させた。

Pinterest CTO Matt Madrigal氏によれば、6億2000万の月間アクティブユーザーを抱える情况下、最前線モデルを呼び出し続けることは\"戦略ではなく請求書の問題\"だった。同社の手がけたのはQwen3-VLのビジョンエンコーダーレイヤーを本质上\"引き抜き\"、Proprietary multimodal embeddingsでファインチューニングしたものだ。

>「本当にユニークなデータがあり、オープンソースモデルをさらに微調整できる場合、データの品質は正直に言えばモデルサイズを克服するか、それに勝ります」

独自のエンベディングを持ち込むことで、チームはピンや画像に関するメタデータのコンテキストを獲得でき、ランタイムで各画像を一度にエンコードする必要がなくなり推論の遅延を**20分の1**改善できたという。

---

## MeMo：モデルを更新せずにLLMの\"記憶\"を拡張

継続的知識更新の新しいアプローチも登場している。VentureBeatが報じた**MeMo（Memory as a Model）**は、外部知識をLLMのパラメータに直接エンコードするフレームワークで、向量データベースや完全再トレーニングの問題を回避しつつ、事実上モデルを更新せずに\"記憶\"を拡張できる。

従来の方法は3つあったが、いずれもトレードオフがある。**RAG**は文脈ウィンドウサイズに制約され、ベクトル検索がノイズに弱い。**継続的プレトレーニング**は計算コストが高く、 Catastrophic Forgetting（既存の能力を消失する問題）を引き起こしやすい。**潜在メモリ**はアーキテクチャに密結合でトランスファーが困難だ。

MeMoは小さなMEMORYモデルと冻结されたEXECUtiveモデルで構成され、Reflection（対象QAペア）を生成してMEMORYモデルをトレーニングする。ベンチマークでは、Gemini 3 Flashと組み合わせたMeMoがNarrativeQAで**53.58%**を達成。これはHippoRAG2の23.21%を大きく上回る。

重要なことに、エグゼクティブモデルを入れ替えるだけで**26.73%**性能向上を達成。チームは必要に応じてMEMORYモデルを訓練した上、最新のcommercial APIにを差し込むだけで継続的にシステムをアップグレードできる。

MIT CSAILのDaniela Rus監督は「今後、メモリモデルはretrievalと並んで標準的なアーキテクチャコンポーネントになると期待しています」と語った。

---

## 参考リンク

- [The AI agent bottleneck isn't model performance — it's permissions (VentureBeat)](https://venturebeat.com/orchestration/the-ai-agent-bottleneck-isnt-model-performance-its-permissions)
- [AI agents are entering their rebuild era (VentureBeat)](https://venturebeat.com/orchestration/ai-agents-are-entering-their-rebuild-era-as-enterprises-confront-the-reliability-problem)
- [MeMo's memory model lets teams upgrade their LLM without retraining (VentureBeat)](https://venturebeat.com/orchestration/memo-memory-model-teams-upgrade-llm-without-retraining)
- [Pinterest cut AI costs 90% by gutting a frontier model's vision layer (VentureBeat)](https://venturebeat.com/orchestration/pinterest-cut-ai-costs-90-by-gutting-a-frontier-models-vision-layer)
- [Coders are refusing to work without AI (TechCrunch)](https://techcrunch.com/2026/05/29/coders-are-refusing-to-work-without-ai-and-that-could-come-back-to-bite-them/)

---

*（本文の情報は2026年5月30日時点のものです）*