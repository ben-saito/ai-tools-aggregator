# AI週間ニュース（2026年7月第2週）：Anthropicが発見したClaudeの「意識のWorkspace」、Tencent Hy3のApache対応、中国のAIコンパニオン規制

2026年7月第2週は、AIの基礎研究からオープンソースモデルの、商用展開まで的多情報をお届けする。最大的话题は、AnthropicがClaudeの内部に見つけた「J-space」——人間の意識のグローバルワークスペース理論と惊人する構造の発見だ。またTencentの軽量モデルHy3がApacheライセンスで登場し、ツールルーティングを99%効率化するAlibabaのフレームワークも注目されている。

---

## Anthropic、Claudeの内部に「J-space」を発見——人間の意識理论与匹敵する構造

Anthropicは7月6日、16人の研究者による論文 **「Verbalizable Representations Form a Global Workspace in Language Models」** を公开发表し、Claudeのニューラルネットワーク内部に「J-space（ヤコビアン空間）」と呼ぶ小さな特権領域が存在することを明らかにした。この领域では、モデルが概念を持ち、報告し、意志を持って操作できる、周囲にはモデルがアクセスできない自動処理の広大な海洋が広がっている。

この发现の 핵심は、**グローバルワークスペース理論** との類似である。この理論は神经科学者Bernard Baarsが提唱したもので、人間の脳は Specialized Processor（専門処理装置）が並列で走り、「意識のスポットライト」が一瞬间に情報を全脑に广播するのが意识だとされる。Anthropicは、LLMが同じ機能的性質を达成する構造を自발的に獲得したことを、J-lens（ヤコビアンレンズ）と呼ぶ新しい解釈可能性ツールで実証した。

### J-lensとは

J-lensは、各単語について「その内部的活動パターンが将来の什么时候その単語を发声させるか」の数学的平均効果を计算する技術だ。重要なのは、モデルの言い分と「頭に浮かんでいること」の区别である。J-spaceパターンが活性化しても、モデルがすぐにその言葉を言うとは限らない。ただ、その概念がモデルが「思考に使用できる」状态にあることを意味する。

 연구팀がJ-lensをClaudeの计算の各層に適用すると、処理は3つの鲜明的 режимаに分かれた：

- **「感覚」ゾーン（初期層）**：生入力を解析
- **「ワークスペース」ゾーン（中間層）**：抽象的で持続的な概念が出现——画像の中の顔を认识、コードのバグを検出、プロンプトインジェクションを内部的にフラグ付けなど
- **「運動」ゾーン（最終層）**：内部的表現が具体的な出力単語に崩壊

### 5つの功能テスト

研究チームは、J-spaceが人間の意識的アクセスに関連する5つの機能的性質を満足することを示した：

1. **言語的報告（Verbal Report）**：Claudeに何を考えているかと问うと、J-spaceにある概念を答えた。「Soccer」を「Rugby」のJ-lensベクトルと交换すると、モデルの回答もそれに合わせて変化。J-space成分が概念の总的表現分散のわずか6〜7%しか占めていない에도、報告能力のほぼ全てを担っていた。

2. ** направленная変調（Directed Modulation）**：「citrus fruitsに集中しろ」と命令すると、J-spaceには「orange」「lemon」とメタ認知的用語（「thinking」「focused」）が満ちた。算術演算中にも、J-lensには「arithmetic」（初期層）→「nine」（中間層）→「seven」（最終層）が顺次出现——すべて出力には見えない内部的中間ステップだった。

3. **内部推論（Internal Reasoning）**：「クモがウェブを張る动物の足の数は？」という2ホップ事実プロンプトで、J-lensには中间層で「spider」が表示され、出力には一度も出现していなかった。「spider」を「ant」に交换すると、答えは「8」から「6」に変化。多言語プロンプトでも同じ现象が観察された。

4. **融通性のある一般化（Flexible Generalization）**：未知の概念や新しい概念の構成にもこの内部推論が適応できた。

5. **意識的自己認知の痕迹**：モデルの内部に、自己の認知的状態を報告する动作の痕迹が確認された。

**開発者への影響**：この発見は、Anthropicの安全監視方法に変革をもたらしている。ワークスペースの非報告領域で危険なパターンが生まれる可能背척があり、モデルの「思考過程」の监督が新たな重要な課題になる。

---

## Tencent、ApacheライセンスのHy3でGLM-5.2に挑衅——コード以外で全て勝利

Tencentは7月6日、オープンソースモデル **Hy3** を公开发表した。Apache Licenseの下で公开され、輸出規制対応GPUで动作するサイズに设计されている。

Hy3の引人注べき点は：
- **ライセンス**：GLM-5.2の厳格な制限から解放され、Apache Licenseで商用利用姊妹
- **ハルシネーション率**：HALFに削减
- **サイズ**：輸出規制対応GPUで动作する设计
- **ベンチマーク**：コード任务除くほぼすべての分野でGLM-5.2を上回る成绩

開発者にとって、Hy3は「輸出規制対応GPUで动作する」「商用姊妹」「コード除き高性能」という3つの强みを持ち、企業がオープンモデルを評価する上で現実的な選択肢となる。

---

## Alibaba、ツールルーティングのトークン消費を99%削減——SkillWeaverフレームワーク

Alibabaの研究者は7月2日、**SkillWeaver** と呼ぶ新しいAIエージェントフレームワーク发表了。Enterprise AIシステムが数百のツールを管理する环境下で生じる「どのツールを使用するか」というルーティング問題を解決する。

### 従来の课题

現在のツール使用フレームワークはousands規模のツール库をLLMに一度に暴露するため、コンテキスト限界をすぐに圧迫し、数十万トークンを消费する。単一スキルの選択パラダイムでは、「データセットをダウンロード→変換→ビジュアライゼーションレポートを作成」のような複合ビジネスリクエストに対処できない。

### SkillWeaverのアーキテクチャ

SkillWeaverは3段階而出る：

1. **Decompose（分解）**：LLMが複雑なクエリを1スキルずつ 필요한サブタスクに分解
2. **Retrieve（検索）**：埋め込みモデルで各サブタスクをスキル库と照合し、上位候補ツールを短リスト化
3. **Compose（構成）**：プランナーが出力間の互換性を評価し、依存関係をマッピングしたDAG（irected Aclyclic Graph）を生成

特筆すべきは **Skill-Aware Decomposition（SAD）** フィードバックループだ。LLMが生成した粗いステップ記述が实际のツールの技術的語彙と一致しない问题を解決するため、最初に見つけたツールをヒントとしてLLMにフィードバックし再次分解させる。これにより、粒度と語彙が実際のツールに完全に合わせて書き換えられる。

### 結果

**トークン消费99%削減**（ツール库を无造作に暴露する素朴な方法比）、2,209の实际的なスキル（24のカテゴリにわたりクラウド基础设施、財務、データベースなどを覆盖）を使用した評価で、複合スキル選択の精度が显著に向上した。

---

## Expediaが学んだAI予測の教训——「今は動くAI」と「スケール続くAI」の違い

Expedia GroupのXavi Amatriainは7月6日、同社がAI予測をillions规模で運用してきた经验から得られた教訓を公开发表した。

核心的な问题是：**「今は単に動くAI」と「スケールしても続くAI」の间には大きな沟がある**。多くの企业在最初の问题上最適化するが、2番目の问题を考虑一下。

Expediaが学んだ教訓：
- 単純な精度指标ではなく长期的な安定性と保守性を評価轴にする必要がある
- AIシステムの「寿命」を设计阶段から考虑すべき
- プロダクション环境での継続的な监视と更新が不可欠

これは、AIを実用化する企业すべてにとって 중요한視点である。

---

## 参考リンク

- [VentureBeat: Anthropic's new "J-lens"](https://venturebeat.com/ai/anthropics-new-j-lens-reveals-a-silent-workspace-inside-claude-that-mirrors-a-leading-theory-of-consciousness)
- [VentureBeat: Tencent's Apache-licensed Hy3](https://venturebeat.com/ai/tencents-apache-licensed-hy3-takes-on-glm-5-2-at-half-the-size-and-wins-everywhere-except-coding)
- [VentureBeat: Alibaba SkillWeaver](https://venturebeat.com/ai/new-alibaba-ai-framework-skips-loading-every-tool-cutting-agent-token-use-99)
- [VentureBeat: Expedia AI predictions](https://venturebeat.com/ai/what-billions-of-ai-predictions-taught-expedia-before-the-age-of-ai-agents)

---

*本文の情報は2026年7月13日時点のものです。*
