# Sakana AI、RL ConductorでGPT-5・Claude Sonnet 4・Gemini 2.5 Proを自動オーケストレーション

Sakana AIが、強化学習で訓練された7Bパラメータの小型モデルでGPT-5やClaude Sonnet 4、Gemini 2.5 Proを自動指揮する新手法**RL Conductor**を発表した。ハードコードされたLangChain的なパイプラインを排除し、入力ごとに最適なワークフローを動的に構築するのが特徴だ。本稿では、RL Conductorの技術的詳細とベンチマーク結果を整理する。

---

## 手動エージェントフレームワークの限界

大規模言語モデルの潜在能力は強力だが、それを最大限に引き出すのは容易ではない。商用AI製品の核心的コンポーネントである手動設計のエージェント的ワークフローは、構造上rigidで硬直的だという課題を抱えている。

VentureBeatの取材に対し、論文の共著者であるYujin Tang手は「LangChainやMixture-of-Agentsのようなハードコードされたパイプラインを使うフレームワークは、特定のユースケースに対してはうまくいくことがある。しかし本質的なボトルネックは、非常にヘテロな需要を持つ大規模ユーザ層をターゲットする場合に発生する」と説明した。

Tang手はまた「このようなヘテロなアプリケーションにおいて現実世界での一般化を実現するには、人間がハードコードした設計を超越することが必要だ」と指摘した。

もう一つのボトルネックとして挙げられるのは、単一のモデルがすべてのタスクに最適ではないということだ。あるモデルは科学的推論に強く、別のモデルはコード生成や数学的論理、高水準な計画立案に秀でる可能性がある。これらの異なる特性と補完的なスキルを持つモデル群を、手動で予測してハードコードすることは実際には不可能だ。

---

## RL Conductor：自然言語でorchestrateする

RL Conductorは、この問題を解決するために設計された小さな言語モデルだ。名は体を表すように、エージェントのオーケストラを指揮する。難しい問題を分割し、ターゲットを絞ったサブタスクをdelegationし、worker LLM群のためのコミュニケーション構造を設計する。

注目すべきは、固定のコードや静的なルーティングに頼らず、自然言語でカスタマイズされたワークフローを生成する点だ。ワークフローの各ステップで、Conductorは以下の3つを生成する：

- **自然言語の命令文**：タスクの特定側面に対する指示
- **エージェントの割り当て**：どのagentに実行させるか
- **アクセスリスト**：そのagentのコンテキストに含まれる過去のサブタスクと応答を哪个に含めるかを定義

自然言語で全てを定義することで、Conductorはシンプルなsequential chainsからparallel tree structures，甚至はrecursive loopsまで、問題の必要に応じて柔軟なワークフローを構築できる。

### 強化学習による自動獲得

最も重要な点は、このorchestration戦略を人間の設計ではなく、強化学習（RL）とreward maximizationによって学習する点だ。トレーニング中、Conductorにはタスクとworkerプール、回答と出力形式が正しいかどうかに基づくreward signalが与えられる。

シンプルなtrial-and-error RLアルゴリズムを通じて、モデルはどの命令とコミュニケーション構造の組み合わせが最も高いrewardを得るかを本能的に発見していく。その結果、ターゲットを絞ったprompt engineering、反復的な改善、メタprompt最適化といった高度なorchestration戦略を自動的に採用する。

---

## ベンチマーク結果： frontier models超え

研究者たちは、7BパラメータのQwen2.5-7Bをfine-tuneしてRL Conductorフレームワークでトレーニングした。トレーニング中、Conductorには最大5ステップまでのagenticワークフローを設計任務が与えられ、以下の7つの異なるモデルにアクセスができた：

- **Closed-source 3モデル**：Gemini 2.5 Pro、Claude Sonnet 4、GPT-5
- **Open-source 4モデル**：DeepSeek-R1-Distill-Qwen-32B、Gemma3-27B、Qwen3-32Bなど

研究者たちは様々な困難なベンチマークでConductorを評価した。単体のfrontier models、繰り返し的に自回答を改善するよう促されたself-reflection agents、MoA（Mixture-of-Agents）やRouterDC、Smoothieなどの先進的なmulti-agent routingフレームワークと比較された。

結果は印象的だ。7B Conductorは全タスクで新たなベンチマークをマークした：

| ベンチマーク | スコア |
|---|---|
| 平均（全タスク） | **77.27%** |
| AIME25（数学） | **93.3%** |
| GPQA-Diamond | **87.5%** |
| LiveCodeBench | **83.93%** |

しかし、より重要なのは効率性だ。MoAのように一つの質問あたり11,203トークンを消費するベースライン不同的是、Conductorは平均わずか**1,820トークン**で、平均3ステップのワークフローを達成した。

---

## AppleがAirPodsにカメラ搭載を計画中

TechCrunchは、AppleがAirPodsにカメラモジュールを搭載し、AIデバイス市場に参入する計画をBloombergの情報として報道した。現在後期の開発テスト段階にあり、音響機器とコンピュータビジョンの統合を目指す取り組みだ。

この動きは、Meta Ray-Ban Smart Glassesの成功を受けたものだ。MetaのスマートグラスはAIアシスタントとのhands-freeなインタラクションを可能にし、一定の市場成功を収めている。AppleはこれをAirPods这样一种の別のフォームファクターで実現しようとしている。

業界アナリストの間では、「耳」はhands-freeの操作に最適という指摘がある。ユーザーは音を聞いている最中に、AIとのインタラクションを画面を見ずに“行えるからだ。

---

## OpenAI、APIに新音声Intelligence機能群

OpenAIは5月7日、API向けの新たな音声Intelligence機能群をlaunchした。主なは以下の3つだ：

- **GPT-Realtime-2**：前身のGPT-Realtime-1.5とは異なり、現実的なvoice simulationを作成できるvoiceモデル。単なるcall-and-responseではなく、音を聞いて理解し、考え、答えることを目指す
- **GPT-Realtime-Translate**：ユーザーの話す速度に追いつくリアルタイム翻訳サービス。会話的な翻訳を提供する
- **GPT-Realtime-Whisper**：相互作用の最中にキャプチャされるlive speech-to-text機能を提供する

OpenAIは「launchするモデル群が、リアルタイムオーディオを単純なcall-and-responseから、実際に作業を行えるvoiceインターフェースへと移行させる。Listenし、reasonし、translateし、transcribeし、行動を取る」と説明した。教育やクリエイタープラットフォームなど、複数の分野への応用が期待されている。

---

## 参考リンク

- [How Sakana trained a 7B model to orchestrate GPT-5, Claude Sonnet 4 and Gemini 2.5 Pro — VentureBeat](https://venturebeat.com/ai/how-sakana-trained-a-7b-model-to-orchestrate-gpt-5-claude-sonnet-4-and-gemini-2-5-pro/)
- [OpenAI launches new voice intelligence features in its API — TechCrunch](https://techcrunch.com/2026/05/07/openai-launches-new-voice-intelligence-features-in-its-api/)
- [Apple's Camera-Equipped AirPods Reach Late Testing in AI Device Push — Bloomberg via Google News](https://news.google.com/rss/articles/CBMiYGh0dHBzOi8vd3d3LmJsb29tYmVyZy5jb20vbmV3cy9hcnRpY2xlcy9hcHBsZS1haXJwb2RzLWNhbWVyYS1sYXRlc3QtcGxhbi1pbi1haS1kZXZpY2UtcHVzaC0xNzE4MTc1OTg2MDg5ODg5)

---

*本文の情報は2026年05月08日時点のものです。*