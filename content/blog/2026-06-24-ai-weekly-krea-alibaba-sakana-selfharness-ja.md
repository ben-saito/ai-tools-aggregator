# AI開発週報：Enterprise AIが加速──Claude Tag、Krea 2、Alibabaが第2位、Sakana Fugu

2026年6月第4週は、Enterprise AI分野が大きく動いた。AnthropicがSlackに常駐するAIチームメイト「Claude Tag」を発表し協調 레イヤへの本格参入を表明。一方、生成AI画像市場はKreaがオープンウェイト公開で企業ユースに切り込み、AI動画市場ではAlibabaのモデルがSora撤退・ByteDance凍停止の空白を突いて世界第2位に浮上した。

---

## Anthropic、Slackに永続的なAIチームメイト「Claude Tag」を導入

Anthropicは6月23日、Slack向けAIアシスタントの大規模刷新を実施。「Claude Tag」のβ版をClaude EnterpriseおよびTeam顧客向けに公開した。既存のClaude in Slackアプリを完全に置き換え、Slackチャンネルに常駐して**チームの行動パターンを学習しながら自律的に業務を遂行するAIチームメイト**として機能する。

### 受動的なアシスタントから能動的なチームメイトへ

従来のAIアシスタントが「質問に応じて答える」受動的な存在だったのに対し、Claude Tagは以下の能力を持つ：

- **文脈学習**: Slack上のメッセージ履歴からチームのコミュニケーションパターン、業務フロー、意思決定プロセスを継続的に学習
- **自律的モニタリング**: チャンネル上の議論やドキュメントを監視し、関連情報を能動的に提供
- **作業の自動化**: 繰り返しの業務タスクを肩代りし、チーム成员の認知負荷を軽減

Anthropicにとって、これは**企業協調 레イヤー（collaboration layer）への侵攻**であり、意思決定の場、仕事の割り当て址 Institutional knowledgeの蓄積場所として位置づける戦略的転換点だ。

---

## Krea、2秒で企業向けAI画像生成──オープンウェイト公開

Kreaは6月23日、企業向けのAI画像生成モデル「Krea 2 Raw」および「Turbo」をオープンウェイトとして公開した。2秒という生成速度は企業ユースケースにおいて実用的な水準に達しており、オープンウェイト形態ながら**デプロイ先にコンテンツモデレーションプロトコルをインフラ層で強制するカスタムライセンス**を適用している。

Kreaは中央集権的な制御を放棄する代わりに、**契約を通じてデプロイ先のコンテンツ制御を義務づける**という独自のアプローチを採用。コンプライアンス要件を満たしながら展開の自由度も確保したい企業にとって、新しい選択肢となる。

---

## AlibabaのAI動画モデルが世界第2位──Sora撤退・ByteDance凍停止で需給Gap

VentureBeatの報道（6月22日）によると、AlibabaのAI動画生成モデルがグローバルランキングで第2位に躍り出た。背景には以下の市場変化がある：

- **OpenAIがSoraを財務的採算性の問題からディズ_CONTINUED**
- **ByteDanceもハリウッドスタジオからの版権侵害指控を受け、Seedance 2.0の国別展開を無期限で見送り**

この急速な市場変化により、企業が評価・導入していた動画生成ツールの選択肢が急速に縮小。Alibabaはこの需給Gapを的確に捉えた形で、D**ownloadable Models/Warez的な手法ではなく正規展開として認知度を高めている**。

---

## Sakana、「Fugu」でマルチモデル・自動総合により фронティア性能を達成

Sakana AIは6月22日、新型マルチモデル自動総合システム「Fugu」を発表。**Claudeの新型モデル待たずして фронティア性能 достичь**とされ、エンタープライズのベンダーロックイン回避需要の高まりの中で注目される。

Fuguのアプローチは、複数のモデルの知性を単一APIエンドポイントにパッケージングすることで、**単一ベンダーに依存しない代替手段**として企業に提供するもの。ベンダー·リスク管理の観点から、商業的に有力な道筋となる可能性がある。

---

## Self-Harness：AIエージェントが自身のルールを書き換えて性能60%向上

研究者チームは6月22日、AIエージェントが自身の動作ルールをテスト・評価・書き換えるフレームワーク「Self-Harness」を導入した。手動デバッグを超えて、**エージェントが自身の行動をgovernするロジック自体を改良**できる点で革新的。

実験結果では、最大60%の性能向上を達成。AIエージェントの自律性·自己改善能力を示す事例として、エージェントAIの研究コミュニティで注目されている。

---

## 参考リンク

- [Anthropic launches Claude Tag](https://venturebeat.com/ai/anthropic-launches-claude-tag-replacing-its-slack-app-with-a-persistent-ai-teammate-that-learns-monitors-and-works-autonomously/) (VentureBeat, 2026年6月23日)
- [Krea 2 Raw and Turbo - Enterprise AI Image Generation](https://venturebeat.com/ai/enterprise-grade-ai-image-generation-in-2-seconds-is-here-krea-2-raw-and-turbo-available-as-open-weights-under-custom-license/) (VentureBeat, 2026年6月23日)
- [Alibaba AI video model rises to No. 2](https://venturebeat.com/ai/alibabas-ai-video-model-rises-to-no-2-in-global-rankings-as-openai-sora-and-bytedance-seedance-fall-away/) (VentureBeat, 2026年6月22日)
- [Sakana Fugu multi-model system](https://venturebeat.com/ai/no-claude-fable-5-no-problem-sakana-achieves-frontier-performance-with-new-fugu-multi-model-auto-synthesis-system/) (VentureBeat, 2026年6月22日)
- [Self-Harness framework](https://venturebeat.com/ai/researchers-introduce-self-harness-a-framework-that-lets-ai-agents-rewrite-their-own-rules-boosting-performance-up-to-60/) (VentureBeat, 2026年6月22日)

---

*本文の情報は2026年6月24日時点のものです。*
