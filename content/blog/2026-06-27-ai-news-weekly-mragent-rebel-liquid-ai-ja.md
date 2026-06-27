# AI開発最新ニュース（2026年6月27日）— MRAgentのエージェントメモリ革新とローカルファーストAI OSの台頭

2026年6月第4週は、「メモリ効率革命」と「ローカルファーストAI」という2つの大きな潮流が同時進行した週だ。エージェントメモリのトークン消費を1/20以下に削減するMRAgentから、markdownファイルを基盤とするローカルAI OSまで、本稿では今週の最重要技術を技術的観点から整理する。

---

## MRAgent——エージェントメモリのトークン消費を1/20以下に削減

6月26日、National University of Singaporeの研究チームがarXivに**MRAgent（Memory Reasoning Architecture for LLM Agents）**の論文を公開した。ロングホライゾン推論におけるメモリ管理の的根本的弱点——文脈ウィンドウの急速な枯渇とRetrieval Pipelineからのノイズ——に対処する新しいフレームワークだ。

### 「能動的想起アプローチ」の革新的設計

従来のRetrieval Pipelineは、ベクトル検索やグラフトラバーサルでドキュメントを取得し、LLMに渡して推論させる受動的な手法だった。このアプローチは3つの大きなボトルネックを生む：

- **探索の硬直**: エージェントがドキュメントを取得した後、致命的な手がかり（特定の日付や人物）が欠落していることに発見しても、新しいクエリを発行する方法がない
- **ノイズの洪水**: 固定された類似度スコアと定義済みグラフ拡張が、表面的なマッチを返し、文脈ウィンドウを無関係なノイズで埋める
- **スケーラビリティの限界**: top-k結果や静的関連性関数に依存し、長期的ユーザーインタラクションに跨る柔軟な拡張を制限

MRAgentはこの限界を克服するため、認知神経科学に着想を得た「能動的・連想的再構成プロセス」へのパラダイムシフトを提案した。メモリ想起は静的なデータベース読み出しではなく、逐次的に展開するものとして扱う。

### Cue-Tag-Contentメカニズムの技術的詳細

MRAgentの効率性を支えるのは「**Cue-Tag-Content**」メカニズムだ。これは3つのノードタイプを持つ多层連想グラフとして機能する：

- **Cues（キュー）**: ユーザーインタラクションから抽出されたきめ細かいキーワード（実体や文脈属性）
- **Content（コンテンツ）**: 実際の保存メモリユニット。エピソードメモリ（具体的なイベント用）とセマンティックメモリ（安定した事実やユーザー選好向け）に分层
- **Tags（タグ）**: 特定のCueとContent間の関係的関連を要約するセマンティックブリッジ

この構造により、2段階の非常に効率的な検索プロセスが実現する。LLMはまずCuesから候補Tagsへナビゲート。Tagsはデータの関係的関連と構造的関連を明示的に公開するため、エージェントは短いサマリーを評価して関連性を判断できる。

### ベンチマーク結果——LangMem比で1/20以下のトークン消費

LoCoMoとLongMemEval業界ベンチマークでのテスト結果によると、MRAgentは以下の成果を達成：

| フレームワーク | プロンプトトークン/サンプル | ランタイム |
|---|---|---|
| **MRAgent** | **118K** | **586秒** |
| A-MEM | 632K | 1,122秒 |
| LangMem | 3,260K | — |

LangMemの3.26Mトークン相比、MRAgentは**27分の1以下のトークン消費**で同等の精度を実現。ランタイムもA-MEM比でほぼ半分に削減した。

### 実装のポイント

MRAgentのCue-Tag-Content構造は、クエリ前に準備が必要だが、開発者が手動でラベル付けや構造化を行う必要はない。著者は自動蒸留パイプラインを設計し、LLMを使って生のインタラクション履歴を処理し、メモリグラフを自動構築する。開発者の仕事は、生のユーザーインタラクションをプロンプトテンプレートに通してメタデータを抽出するバックグラウンドジョブを実装することだけだ。

**開発者にとって的意义:** メモリ消費の劇的な削減は、プロダクションにおけるロングホライゾンエージェントのコスト構造を根本的に変える。自動化された取り込みパイプラインが肝要。

---

## Liquid AI——LFM2.5-230Mでツールコール最適化の新境地

6月26日、**Liquid AI**が**LFM2.5-230M**をリリースした。わずか2.3億パラメータでありながら、ツールコールとデータ抽出タスクで最適化された小型モデルだ。

### ターゲットドメイン特化のアプローチ

LFM2.5-230Mは、高度な数学、コーディング、クリエイティブライティングなどの推論ヘビーなワークロードには対応しない——この制約をLiquid AIは明示的に認めている。しかし設計意図としたドメインでは優れた性能を示す：

- **BFCLv3ツールコールのベンチマーク**: 43.26で、IBMのGranite 4.0-350M（39.58）やGoogleのGemma 3 1B IT（16.61）を大幅に上回る
- **CaseReportBenchデータ抽出**: 22.51で、Qwen3.5-0.8Bを凌駕

### ロボティクスへの応用

Liquid AIはLFM2.5-230MをUnitree G1ヒューマノイドロボットに deployment した例も発表。NVIDIA Jetson Orin computeモジュール上で完全にオンデバイス動作し、自由形式の命令（「2秒間静止してから毎秒1メートルで3メートル前進し、5秒間前足上げ、片足キネンを維持し、毎秒0.5メートルで3メートル後ろ下がる」など）を構造化されたマルチステッププランに自動翻訳する。

### ライセンス——年間1000万米ドル以上の収益で商用利用不可

LFM2.5-230Mは「LFM Open License v1.0」で提供されるが、これはOSI準拠のオープンソースライセンスではない。年間収益1000万米ドル以上の法人は商用利用のために別途交渉が必要——この構造はLiquid AIの知的財産を大企業に集中させることを防ぎつつ、草の根開発者への普及を促す設計だ。

**開発者にとって的意义:** ツールコール最適化モデルとしてのLFM2.5-230Mは、制約のあるハードウェアでのエージェントパイプライン効率的な実行に最適。Hugging Faceですぐに利用可能で、llama.cpp（GGUF）、MLX、vLLM、SGLang、ONNXでネイティブサポート。

---

## Mindstone Rebel——markdownファイルを基盤とするローカルファーストAI OS

6月24日、ロンドン拠点のAI変革スタートアップ**Mindstone**が**Rebel**正式版をリリースした。ローカルファーストのエージェント型AIオペレーティングシステムで、「Fair Source」ライセンス供与だ。

### markdownファイルを基盤とする革新的設計

Rebelの最大の特徴は、データベース、クラウドインフラ、状態管理ロジックを wiring する必要がないこと。コアエージェントメモリと命令はローカルmarkdown（.md）テキストファイルに保存される：

- `agents.md`: エージェントのコア命令レイヤーとランタイムバウンダリ
- プロジェクト空間に紐づいた`readme.md`
- インデックス付きメモリディレクトリ

この設計選択はコストとベンダーロックインの両面に関連する。Word文書やPDFはフォーマットとメタデータのオーバーヘッドでトークン消費が増加する傾向がある。Markdownは情報を生テキストに近づけ、モデルの文脈ウィンドウをより多くの実際のタスクに使えるようにする。

### モデル自動選択機能——タスクごとに最適なモデルに動的に路由

Rebelの別の重要な特徴はマルチモデルオーケストレーションだ。タスクを部分ごとに分割し、異なるステップを異なるモデル（ローカルとクラウドのもの）に路由できる：

- 複雑な推論は高容量モデルが担当
- 定型処理は低コストモデルが担当
- 機密ステップはローカルモデルで実行

このアプローチにより、企業はデータ機密性に応じてクラウドとローカル推論を混合できる。Epignosis（250名従業員）での12週間展開では、8人分のフルタイム相当の容量を取り戻したとされる。

### Fair Sourceライセンス——100ユーザーまで無料、2年後にMIT転換

Rebelは「Fair Source」ライセンスでリリースされ、100 concurrentユーザーまでは無料利用が可能。組織がしきい値を超えるとMindstone Proライセンスが必要。また、釋放後24ヶ月経過したバージョンは自動的にMITオープンソースライセンスに転換される——この「サンセット条項」により、長期的なロックインリスクが軽減される。

**開発者にとって的意义:** markdownベースのメモリとローカルファースト設計は、エージェントの可視性とポータビリティを大幅に改善。ベンダーロックインなしにAIワークフローを構築できる新しいパラダイム。

---

## OpenAI——GPT-5.5 Instantアップデートで意図理解と制約处理を改善

6月25日、OpenAIは**GPT-5.5 Instant**のメジャーアップデートを発表。free版のChatGPTデフォルトモデルとしての位置づけを変えずに、より高度な意図理解と文脈維持を達成した。

### アップデート主要内容

- **意図理解の改善**: ユーザーの質問の根底にある目標を より正確に識別
- **複合制約への対応**: 複数の重複する制約を含むプロンプトで historical models が困難だった課題を克服
- **ローカル推薦とショッピングの改善**: 位置情報コンテキストを活かしたより関連性の高い推薦
- **スタイル的自由性**: より暖かく抑制された会話的トーンへ

### chat-latest API alias

開発者向けには、OpenAIの`chat-latest` API aliasが今回のアップデートされたGPT-5.5 Instantを指すように更新された。ただしOpenAIは production API用途には 引続き`gpt-5.5`モデル recommendしており、`chat-latest`と`gpt-5.5`是不同的製品表面として扱う必要がある。

**開発者にとって的意义:** 日常的ChatGPT interactionの信頼性向上は、企業環境での従業員使用実績を改善。但しメモリ sourcesとRAGパイプラインの競合については監視が必要。

---

## 参考リンク

- [New agentic memory framework uses 118K tokens per query. LangMem burns through 3.26M](https://venturebeat.com/orchestration/new-agentic-memory-framework-uses-118k-tokens-per-query-langmem-burns-through-3-26m)
- [Liquid AI's 230M parameter model redefines efficient tool calling — and fits on a robot](https://venturebeat.com/ai/liquid-ais-230m-parameter-model-redefines-efficient-tool-calling-and-fits-on-a-robot)
- [Your enterprise AI agents should automatically remember which model is right for which task. Mindstone built the capability with Rebel](https://venturebeat.com/orchestration/your-enterprise-ai-agents-should-automatically-remember-which-model-is-right-for-which-task-mindstone-built-the-capability-with-rebel)
- [OpenAI's updated GPT-5.5 Instant is better at shopping, complex constraints, and understanding user intent](https://venturebeat.com/technology/openais-updated-gpt-5-5-instant-is-better-at-shopping-complex-constraints-and-understanding-user-intent-and-its-already-in-the-api)

---

*本文の情報は2026年6月27日時点のものです。*
