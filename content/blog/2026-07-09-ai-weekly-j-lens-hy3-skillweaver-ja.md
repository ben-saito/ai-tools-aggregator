# AI開発週間ニュース（2026年7月第2週）：AnthropicがJ-lensでClaudeの「意識構造」を発見、Tencent Hy3がApacheでOSS liderança奪取、Alibabaがツールルーティングを99%最適化

2026年7月第2週は、「AIモデルの内部構造可視化」と「実運用に向けたOSSモデル・フレームワーク」の両面で大きな進展があった。AnthropicはClaudeの内部に人間の意識理論と類似する「グローバルワークスペース」が自然発生的に形成されていることを発見し、SafeAIの新しい監視手法として活用し始めている。TencentはApache 2.0ライセンスのMoEモデルHy3正式版をリリースし、法規制上の障壁を一掃してOSSコミュニティで大きな話題となっている。Alibabaはツール選択時にエージェントが全ツールを読み込むのではなく関連する少数のツールのみを段階的に取得するフレームワーク**SkillWeaver**を発表し、トークン消費を99%削減した。

---

## Anthropic、J-lensで発見——Claudeの内部に「グローバルワークスペース」が自然発生

7月6日、Anthropicの研究チームは**「Verbalizable Representations Form a Global Workspace in Language Models」**と題した16名の共著論文を公开发表し、Claudeのニューラルネットワーク内部に「J-space」（Jacobian space）と呼ぶ特権領域が自然発生的に形成されていることを明らかにした。

### J-lensとは：思考の内声を読み解く新しい解釈可能性ツール

J-lens（Jacobian lens）は、各トークンの語彙に対して特定の内部活動パターンが将来どの程度そのトークンを生成するかに寄与するかを数学的に計算する手法だ。重要な点は、**J-spaceがアクティブになることとモデルがその言葉をを発話することが別の現象**である点。J-spaceはモデルの内部ニューラル活性化の中で静かに機能し、概念を文書化せずに保持できる。

研究发现、Claudeの計算は3つの異なるレジームに分かれた：

- **早期「感覚」ゾーン**：生入力を解析
- **中期「ワークスペース」バンド**：抽象的で持続的な概念が出现——画像の中の顔を認識、コードのバグを検出、プロンプトインジェクションを内部的にフラグ付け
- **最終「運動」ゾーン**：内部表現が特定の出力トークンに崩壊

### 五大機能的特性——人間の意識アクセスと 유사

Anthropicの研究チームはJ-spaceが神経科学者が人間の意識アクセス связать五大機能的特性满足することを実証した：

1. **言語報告（Verbal Report）**：Claudeに「何を考えているか」と問いかけると、J-space内の概念を答えた。J-spaceベクトルを入れ替えると（"Soccer"を"Ryby"に）、回答もそれに応じて変化。J-space компонентは概念の全体表現分散の6〜7%を占めるに過ぎないが、報告能力のほぼすべてを担っていた。

2. **irected変調（Directed Modulation）**：「citrus fruitsに集中しろ」と指示すると、J-spaceに"orange"と"lemon"が充満。暗算指示中也はJ-lensが"arithmetic"、中間値"nine"、最終答案"seven"を連続的に表示——すべて出力には見えない。

3. **内部推論（Internal Reasoning）**：「クモの足の数は」という2ホップ事実プロンプトで、J-spaceが中間層に"spider"を表示（入出力には出现しない）。これを"ant"に入れ替えると答案が"8"から"6"に変化。

4. **融通性のある般化（Flexible Generalization）**：J-spaceの概念を置換すると、モデルの行動が対応して変化。

5. **グローバルブロードキャスト**：バックステージの专门処理から一小 영역 информацияが広く broadcast される。

### 開発者にとって的意义

J-spaceの発見は2つの点で重要だ。第一に、**このワークスペースは意図的に設計されたものではなく、訓練プロセスで自发的に出現した**ということ。これは大規模言語モデルの新たなEmergent Propertyとして interpretability研究の最前線に位置づけられる。第二に、Anthropicは既にこの知見をAI安全監視に活用し始めている。モデルの「意識に近い」内部状態が安全リスクの指標となる可能性があり、従来の上下一貫した監視から内容ベースのモニタリングへのパラダイムシフトを示唆する。

---

## Tencent Hy3正式版——Apache 2.0でOSSリーダーシップ争夺

TencentのHunyuanチームは7月6日、**Hy3**の完全版をリリースした。2,950億パラメータのMixture-of-Experts（MoE）モデルアクティブパラメータは210億、Apache 2.0ライセンスで提供される。

### ライセンス転換の戦略的意義

4月のプレビューリリース时点是是不同的ライセンス（EU・UK・韓国などで利用不可）だったが、完全版ではApache 2.0に 전환。これにより法的障壁が撤廃され，欧洲の企業でも利用できるようになる。OSSコミュニティでは「 TencentがApache 2.0でOSSリーダーシップを夺い取った」との声が多い。

### 性能——GLM-5.2以外でリード

Tencentが270名の专家による盲検テスト（312の有効比較）で実施した評価では、Hy3がスコア2.67/4に対しGLM-5.1は2.51。明確な優位性があったのはフロントエンド開発、CI/CD、データ・ストレージ領域。

ただし、**コーディングではGLM-5.2が依然リード**：

| ベンチマーク | GLM-5.2 | Hy3 |
|---|---|---|
| SWE-bench Verified | 84.2 | 78.0 |
| SWE-bench Multilingual | 83.0 | 75.8 |
| Terminal-Bench 2.1 | 81 | 71.7 |
| DeepSWE | 46.2 | 28.0 |

GLM-5.2は7,440億パラメータ（アクティブ約400億）に対してHy3は2,950億（アクティブ210億）。半分以下のパラメータでHalf積極的計算ながら、明らかな差がある。

### 本当の勝战场——検索・ツール重用ワークフロー

Hy3が本当に優位なのは**検索・ツール重用主体のエージェントワークロード**：

- BrowseComp: **84.2**（Claude Opus 4.8やGPT-5.5に匹敵）
- DeepSearchQA: **91.0**（オープンモデル中最優位）
- ツールオーケストレーション（MCP-Atlas）: **79.1**
- 长时间文脈検索（AA-LCR）: **73.4**

Hallucination率も12.5%→**5.4%**に半減。Commonsenseエラー率も25.4%→12.7%に改善されている。

---

## Alibaba SkillWeaver——ツール読み込みを99%削減し、MCP連携で実践的

Alibabaの研究チームは7月2日、**SkillWeaver**フレームワークと**Skill-Aware Decomposition（SAD）**テクニックを発表した。

### 背景：エージェントのツール選択問題

エンタープライズAIシステムでは数百のツールやスキルを纽づけたエージェントが一般的になりつつあるが、重要な問題は「哪个ツールを哪个ステップで использоватьか」という選択。従来の方式ではエージェントにライブラリ全体を暴露するため、コンテキスト限界をすぐに圧迫し、数十万トークンを消費していた。

### SkillWeaverのアプローチ：Decompose → Retrieve → Compose

SkillWeaverは3段階で構成される：

1. **Decompose**：LLMが複雑なクエリを1スキルで处理可能なアトミックなサブタスクに分解
2. **Retrieve**：Embeddingモデルで各サブタスクとスキルライブラリを比較し、上位候補を短リスト化
3. **Compose**：プランナーが出力整合性を評価し、依存関係をDirected Acyclic Graph（DAG）として整理

### SAD——フィードバックループで語彙のアライメントを解決

LLMは一般的なステップ描述を生成するため、实际のスキル库の技術的語彙と一致しにくい。SADはこの問題を解決する：**初期計画 → 先行検索で緩やかに一致するスキルを取得 → そのスキルをLLMにヒントとしてフィードバック → 粒度と語彙を実際のツールに맞게書き直し**。この反復フィードバックループにより、ツール選択の精度が向上する。

### 結果：トークン消费99%削減

2,209の реальныхスキル（MCPエコシステムから）と300の多段階クエリで評価した結果：

- ツール使用精度：**従来方式を大幅に上回る**
- トークン消费：**99%以上削減**（全ツールを暴露する方式和比較）
- Compositional Skill Routing任务で高い精度维持

---

## 参考リンク

- [Anthropic Research Paper: Verbalizable Representations Form a Global Workspace in Language Models](https://www.anthropic.com/research)
- [VentureBeat: Anthropic's new "J-lens" reveals a silent workspace inside Claude](https://venturebeat.com/technology/anthropics-new-j-lens-reveals-a-silent-workspace-inside-claude-that-mirrors-a-leading-theory-of-consciousness)
- [VentureBeat: Tencent's Apache-licensed Hy3 takes on GLM-5.2 at half the size](https://venturebeat.com/technology/tencents-apache-licensed-hy3-takes-on-glm-5-2-at-half-the-size-and-wins-everywhere-except-coding)
- [VentureBeat: New Alibaba AI framework skips loading every tool, cutting agent token use 99%](https://venturebeat.com/orchestration/new-alibaba-ai-framework-skips-loading-every-tool-cutting-agent-token-use-99)

---

*（本文の情報は2026年7月9日時点のものです）*
