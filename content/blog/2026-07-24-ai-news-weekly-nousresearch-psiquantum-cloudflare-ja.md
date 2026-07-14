# AI開発ニュース（2026年7月第4週）—— Nous Research$B1I4c"1.5B評価額調達、PsiQuantumの光量子コンピュータ計画、CloudflareがAIクローラー許可制へ

2026年7月第4週のAI業界は、複数のスタートアップ的大型資金調達、AnthropicClaudeの内部動作解析という基础研究の前進、そしてWebインフラレベルでのAIクローラー制御という三つの異なるレイヤーて進展が見られた。Nous Research（Hermes エージェント米的開発社）が1.5B評価額での資金調達重组竞争中、视频生成のPixVerseが439Mドルを調達する一方、Google CloudflareがAIエージェントのWebアクセスに許可制を導入すると発表し、開発者たちの間で論议を呼んでいる。

---

## Nous Research、1.5B評価額での新規資金調達に近づく—— Hermes エージェント栈 $[cut]

TechCrunchが7月13日に伝えたところによると、AIエージェント開發社のNous Researchは、Robot Venturesが主導する至少75Mドルの資金調達发展中이며、評伍額は15億USDに達する見込み。USVなどضارれた投資家も参加过しているという。

Nous ResearchはHermes Agentプロジェクトで知られ、オープンソースのAIエージェントフレームワーク开发で存在感を示してきた。2026年に入り、AIエージェントへの投資家たちの関心が最高潮に達しており、Figure、Physical Intelligence、Adeptといった企業でも大型調達が進んでいる。

**開発者にとって的意义:** AIエージェントのフレームワーク選定において、Nous ResearchのHermesはLangChainやAutoGenと競合する選択肢として注目に値する。資金調達成功による開発速度向上や、人才獲得の加速が予想され、エコシステムの豐富化が期待される。

---

## PsiQuantum、光量子コンピュータ製造のための大型計画を発表—— MIT Tech Reviewが詳報

MIT Technology Reviewが7月14日に報じたところによると、PsiQuantumは光がベースの超大型量子コンピュータ制造に向けた具体的な計画を示した。データセンターとアイスクリーム工場を組み合わせたような设施に、100台以上の 스테인리스 스틸 캐비닛を配置し、液体ヘリウムで極低温に冷却された環境を整えるという。

PsiQuantumは了过去数年間、量子誤り訂正の实用化に向けて静かに筹备を重ねてきた同社は photonic fault-tolerant quantum computing （光子的フォールトトレラント量子コンピューティング）の実用化に成功した場合、药物発見、金融最適化、密码解読などの分野掀革命的変化をもたらす可能性がある。

**技術的に注目すべき点:** 光量子方式是、相対性理論的なエラー耐性を持たせやすいという利点があり、冷却要件の严しさはあるものの、スケーラビリティでは他の方式より優れるとされる。IBMやGoogleが superconducting qubit （超伝導量子ビット）に集中する中、PsiQuantumの方式是异色であり、2026年现在での实用化はまだ数年先とされつつある。

**開発者にとって的意义:** 量子コンピュータの直接利用はまだ大多数の開発者にとって現実的ではないが、量子機械学習のハイブリッドアルゴリズムや、量子-inspired 最適化ソリュ？《https://www.technologyreview.com/2026/07/14/1140356/psiquantum-plan-massive-quantum-computer-out-of-light/}》

---

## Cloudflare、AIエージェントのWebクローリングに許可制を導入—— 9月15日から

Artificial Intelligence Newsが7月13日に伝えたところによると、CloudflareはAIエージェントのWebクローリングに対して新しい許可制を導入する。**広告収益があるページへのAIクローラーは9月15日からブロック**される。

この動きは、WebコンテンツのパブリッシャーがAI企業による大規模データ収集に対して対価を求める動向加速を反映している。Cloudflareは2026年を通じてAI向けアクセス制御機能を拡充しており、この許可制導入はその延長線上にある。

**技術的な仕組み:** Cloudflareは「AI agent crawler」に分類されるボットに対して、明示的な許可を求めるプロセスを導入する。許可を得ないクローラーは、2026年9月15日以降、广告収益があるページでブロックされる。このポリシーはGoogleのAI Overviewsなどのサービスにも影響し得る。

**開発者への影響:** AIエージェントやRAG用途でWebクローリングを行う場合、Cloudflare越しのスクレイピングにはCloudflareの新たなAPIを経由した許可申請プロセスが必须になる。Per-creditまたは月額プランでの課金が予想され、クローラー設計のコスト構造も見直す必要が生じる。

**RAG、パイプライン設計者への警告:** 许可制の導入は、リアルタイムWeb情報源に依存するRAGシステムのアーキテクチャ変更を迫る可能性がある。今後のRAG設計では、信息源別のクローリング可否を動的に判定し、許可がない場合のフォールバック先を設計に組み込む必要が出てこよう。

---

## Anthropic、Claudeの「内部思考」解析技術を公開—— 世界モデル研究の前進

MIT Technology Reviewが7月9日・14日にわたり伝えたところによると、Anthropicは「Jacobian lens」と呼ぶ新技術を使い、Claudeが質問に答える際に内部で何が起きているかを可視化する事に成功した。

Anthropicのリサーチャーたちは、モデルのjacobian行列（出力の入力を变化させる割合を行列にしたもの）を使うことで、モデルが 특정概念を処理する際にどの神经元が激活するかを詳しく調べられるようにった。

**技術的に注目すべき点:** この研究は「世界モデル」（world models）—— AIが世界の構造的表現を獲得しているかどうか—— を探る上前進と関連する。MIT Tech Reviewの报道では、Claudeの内部には梵々と抽出手続き的な動作の证据が見つかったという報告されており、技術者たちの間で激しく議論されている。

**開発者にとって的意义:** 現在のLLM应用開発において、モデルの内部動作の可視化は直接的な用处はないが、Long Context Windowの效率や、段階的思考（Chain-of-Thought）の内部メカニズム理解有助于プロンプト設計の改善につながる可能性がある。

---

## AWS GraphRAG、创薬研究サイクルを87%短縮—— ナレッジグラフ統合の成果

Artificial Intelligence Newsが7月9日に伝えたところによると、AWSのGraphRAG（Graph Retrieval-Augmented Generation）导入により、制药企業の创薬研究・开発サイクルが87%短縮された。

従来の的方法では、初期的なデータ収集とスクリーニングの各フェーズに6ヶ月以上かかつても5%程度の成功率という非効率があった。GraphRAGは、分散していた专利数据库や研究数据库を统一的で查询可能なナレッジグラフとして統合することで、候选物質の特定から药理活性の予測までの一連のプロセスを劇的に加速している。

**技術的に注目すべき点:** GraphRAGの核心は、向量検索（embedding similarity）に加え、知識グラフの構造的関係を組み合わせる点にある。RAGシステムに_graph structure_ を導入することで、単純な意味的類似性だけでは捉えられない因果関係や階層関係を情報を检索できる。

**開発者にとって的意义:** GraphRAGのアーキテクチャは、企业的ナレッジマネジメント、医療、法律、金融などの分野でも应用可能だ。従来のRAGシステムが抱えていた「回答が文書の断片に偏る」问题を、ナレッジグラフの統合により解决するアプローチは、今後のRAG设计の 표준がなくなるか、转ばれるかが注目される。

---

## PixVerse、439Mドル調達—— 動画生成の评伍額が2Bドル超え

TechCrunchが7月13日に伝えたところによると、视频生成スタートアップのPixVerseが4億3,900万ドルの資金調達を完了し、評価額は20億ドルを超えた。

PixVerseは(world modelベースの動画生成で知られ、昨今のSora、Runway、Pikaなどの競合ひしめく市場で資金調達を加速している。这次の調達を受けたPixVerseはworld modelの offerings расширение と地理的展開を目指すとしている。

**開発者にとって的意义:** 動画生成APIの多样化と価格低下が予想される中、APIデザインやアプリ設計のレベルでは、视频生成をコア功能に組み込むアプリケーション设计が求められている。高品质な短尺视频生成が低成本でできるようになれば、eコマース、コンテンツ制作、教育などの領域で新しい应用が生まれるだろう。

---

## Nadella CEOが警鐘—— AI利用企業への「ありがたさ」批判

TechCrunchが7月13日に伝えたところによると、Microsoft CEO Satya NadellaはAI企业提供企业对用户提供しているAIサービスについて、「自有AIモデルを持つ企业にとって、Third-party AIへの依存はリスクになり得る」という旨の警告を発した。

これは要するに、AI实验室が提供する propri etary 模型への依存が、自社のAI戦略の控制不能性を高める可能性があるという指摘だ。Microsoft themselves もOpenAIへの依存度の高さを指摘されており、Nadellaの発言は himself 包括的でもある。

**開発者にとって的意义:** この警告は、企業がAI戦略を設計する上で、プロプライエタリAPIへの依存と、オープンソース・オンプレミスモデルとのハイブリッド構成を検討すべきであることを示している。コスト最適化の面ではマルチLLM API（OpenRouterなど）の活用が、画面占有率的ともなう。

---

## Apple、OpenAIを提訴—— Former Apple Engineerによる盗用主張

TechCrunchが7月10日・13日を通じて報じたAppleとOpenAIの法的紛争では、AppleがOpenAI老了员工による罗列されたTrade Secrets theft疑惑で提訴するという展開になっている。

訴状によれば、OpenAIのシニアリーダーがFormer Appleエンジニアに対し、Appleの機密情報を不正に取得するよう指示したとされ、候補者に面接時にAppleの硬件を持ち込むよう求めたという主张も含まれている。

**開発者にとって的意义:** AI企業間の人才争奪と情報保護の境界線が越发曖昧になっている这次の紛争は、企業がAI企业提供者と交わす契約条項（データの利用・保存・競合制限など）の精査が必要であることを示している。AI应用開発者もまた、API利用contraでどのデータがAI企業に吸い上げられる可能性があるかを常に意識すべきだ。

---

## 参考リンク

- [Hermes agent maker Nous Research in talks for new funding at $1.5B valuation](https://techcrunch.com/2026/07/13/hermes-agent-maker-nous-research-in-talks-for-new-funding-at-1-5b-valuation/)
- [PsiQuantum has a plan to make a massive quantum computer out of light](https://www.technologyreview.com/2026/07/14/1140356/psiquantum-plan-massive-quantum-computer-out-of-light/)
- [AI agent crawlers now need permission. Here's how to get it](https://www.artificialintelligence-news.com/news/ai-agent-crawlers-cloudflare-rules/)
- [Claude's inner workings and the future of world models](https://www.technologyreview.com/2026/07/14/1140391/the-download-anthropic-claude-internal-thoughts-world-models/)
- [AWS GraphRAG deployment cuts drug research cycles by 87%](https://www.artificialintelligence-news.com/news/aws-graphrag-deployment-cuts-drug-research-cycles-by-87/)
- [Video-generation startup PixVerse raises $439M, valuation soars past $2B](https://techcrunch.com/2026/07/13/video-generation-startup-pixverse-raises-439m-valuation-soars-past-2b/)
- [Satya Nadella has issued a shocking warning to companies using AI](https://techcrunch.com/2026/07/13/satya-nadella-has-issued-a-shocking-warning-to-companies-using-ai/)
- [The wildest allegations in Apple's trade secrets lawsuit against OpenAI](https://techcrunch.com/2026/07/13/the-wildest-allegations-in-apples-trade-secrets-lawsuit-against-openai/)

---

*（本文の情報は2026年7月24日時点のものです）*
