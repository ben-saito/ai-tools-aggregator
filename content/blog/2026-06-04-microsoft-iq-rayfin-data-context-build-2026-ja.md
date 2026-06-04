# Microsoft IQ & Rayfin——AIエージェントのデータ問題を解くBuild 2026の地味だが重要な発表

Microsoft Build 2026では華やかなAIエージェントのデモ тенденция的にだが、データプラットフォームの側に внимания を払う开发者には注目に値する発表があった。**Microsoft IQ**（統合コンテキストレイヤー）と**Rayfin**（agent構築アプリケーションの Governed なデプロイメントSDK）の2つの発表だ。

AIエージェントが企業内で急増する中、データサイロの問題はすでに明白になっていた。Every new agent starts from scratch—— памятьを持たず、组织がどのように機能するか、データがどこにあるか、適用されるルールが何かを理解しない。Microsoft IQは、この「コンテキスト欠如問題」に正面から取り組み、Rayfinは агент が生成するアプリケーションのデータも既存のガバナンスレイヤー内に收めるための仕組みを提供する。

---

## Microsoft IQ——4つのコンテキストソースを一つの基盤に統合

Microsoft IQは、Microsoft Fabric IQ расширенとして четыре つのコンテキストソースを统一的に扱うプラットフォームだ。

**Work IQ**は、組織の日常的な動きを捉える。メール、ドキュメント、カレンダー、スケジュールにアクセスし、人、チーム、ワークフローのunderstandingをエージェントに提供する。

**Foundry IQ**は機関知識を管理する。ナレッジベースのキュレーションとインデックス作成を行い、組織内で働くことが何を意味するか、適用されるルール、手順を理解させる。

**Fabric IQ**はビジネスのリアルタイムな演算状態をモデル化する。Fabric Real-Time Intelligenceからのリアルタイムシグナルを活用し、エンティティ、Relationship、ビジネスルールを定義するOntologyのGeneral Availabilityは今後数ヶ月以内に预计されている。

**Web IQ**は組織の外部のリアルタイムコンテキストを追加する。社内のデータと一緒にウェブからの最新情報を活用できる。

従来のRAG不同的是、 этих fourつのコンテキストソース分别が分开して存在していたものを、一度のインテグレーションステップで全てに接続できる点が革新的だ。開発者は新しいエージェントを作的时候に、1つの統一的基盤に接続するだけでよい。

Microsoft Fabric CTO Amir Netz氏はfilm analogyを使って、数据プラットフォームが агента に対して何种な役割を果たすべきかを说明了。「The Matrix」で码の カスケードが単なる雰囲気ではなかったように、その绿色の画面は Agent Smithが运作する世界を構築するためのレイヤーだった。 данных レイヤーが агента の「現実」を構築する——这就是 Microsoft がах追求する vision だ。

---

## Rayfin——агент が生成するアプリもデータレイヤー内に収める

컨텍스트の共有は问题的半分を解く。残りの半分は、агент がアプリケ一人を生成し始めたときに何が起こるかだ。Every new app needs a backend — そして Governed なデプロイメントパスがない限り、それぞれが 컨텍ストレイヤー 外の新しいデータサイロを作成する。

Rayfinはこの问题に対するMicrosoftの回答だ。エンタープライズグレードのバックエンドを 提供し、agentが構築したアプリケーションを直接Fabricにデプロイする。これにより、アプリケ绍士のデータがMicrosoft OneLakeにデフォルトで着陆し、Microsoft IQ 컨텍ストレイヤーにフィードバックされる。個別に孤立的サイロが作成されるのではなく、データは組織全体のガバナンス基盤に流れ込む。

MicrosoftはRayfinをSupabaseやNeonのような Postgres互換バックエンドと竞争している者として位置付けている。差别化要因はガバナンスだ。Rayfinは应用程序の全套をFabricの統一されたデータとコンプライアンスレイヤーに向けることで、個別サイロの作成を避ける。

Netz氏的话すと两边方向の关系だ。 агент がRayfinアプリケーションを構築的时候、その agenは组织のOntologyから情報を引く。应用程序が生成するデータは、次の агент のためにそのOntologyを富化管理する。

---

## データプラットフォーム間の军拡竞争

Microsoft만ではない。Snowflakeは semantic capabilities で同様のコンテキスト機能を開始し、Pineconeは向量データベースから knowledge engine へ拡張するNexusプラットフォームを開始し、Redisは контекスト とメモリストリーム用のIrisを開発した。

这场竞争は、RAGとモデル可用性が問題にならなくなったことを浮き彫りにする。 Robert Kramer（KramerERP）は VentureBeat に对して、「Enterprise AI challengeはもう単なるモデル可用性 about ではない。 real な质問はMicrosoftが実行を简素化して信頼を强化するか、それともすでに複雑な环境に別のレイヤーを追加するかだ」と語った。

---

## 開発者視点——агент 構築の次の难题は「データ」にある

агент フレームワークとモデルプロバイダーの急速な进化とは異なり、エージェントが企業環境て効率的に动作するためのデータインフラは未だ初期段階にある。Microsoft IQとRayfinの组み合わせは、その问题に正面から取り組もうとしている。

агент がビジネスプロセスに深く浸透するためには、単なるテキスト生成能力ではなく、組織のコンテキスト——どこ что 数据があり、どのようにビジネスが运作し、どこまでが許可されているか——を深く理解する必要がある。Microsoft IQはこのunderstandingを组织的観点から标准化しようとする试みであり、Rayfinはагент の产出であるアプリケーション自体を组织的データガバナンスに戻すための仕組みだ。

どちらもまだ preview 阶段であり、エンタープライズ环境での実際のふるまいは未知数だ。しかし、AI agentの军拡において「データの問題」が次の决戦場になることすることは、行业全体の共识になりつつある。

---

## 参考リンク

- [Enterprise AI agents keep creating data silos (VentureBeat)](https://venturebeat.com/data/enterprise-ai-agents-keep-creating-data-silos-microsofts-build-answer-is-microsoft-iq-and-rayfin)
- [Microsoft Build 2026 発表资料](https://news.microsoft.com/build-2026/)
- [Microsoft IQ ドキュメント](https://learn.microsoft.com/ja-jp/fabric/data-engineering/)

---

*（本文の情報は2026年6月4日時点のものです）*