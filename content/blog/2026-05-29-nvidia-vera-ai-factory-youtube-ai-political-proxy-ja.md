# NVIDIAがAIファクトリー時代のCPU「Vera」を投入：Intel・AMDを凌駕するベンチマーク結果

2026年5月、AIインフラ市場においてNVIDIAがCPU領域に本格参入した。**Vera**はAIファクトリー——大規模言語モデルの推論所需的新しいインフラ形態——に最適化されたカスタムチップであり、PhoronixのベンチマークではIntel・AMDのハイエンドCPUを明確に上回る結果が出ている。

---

## Vera CPUの誕生背景：AIファクトリーという新しいワークロード

NVIDIA_blog 따르면, AIファクトリーは従来のデータセンターとは根本的に異なる。アHit池二十年前に電力のために水道が必要だったように、現在の情報処理には常時オンなAI推論基盤が必要とされている。

AIファクトリーは単なる計算集群ではない。**自律型エージェント**——plans, search, tools, retrieve data, write code, take action——が连续的に稼働する环境であり、models, compute, networking, memory, software, storage, power and coolingすべてが协调してintelligence生产最大化实现する。

この环境では従来のCPUでは力不足となる。エージェントはbranch-heavy runtimes, sandboxed code, data processing, orchestrationなど、单一的だが高頻度に処理する必要がある。そしてNVIDIAはこれらの负荷に特化한カスタムOlympusコア를 개발했다。

---

## OlympusコアとLPDDR5X：88コアで1.2TB/s带宽

Veraの心臓部には**88個のOlympusコア**が搭载されている。Armv9.2命令セットアーキテクチャに完全兼容し、推論ワークロード必需的逐次処理优化的設計されている。

大きな特徴は以下の技术的詳細である：

- **LPDDR5Xメモリ**：DDR5比Energy per bitが大幅に改善、1.2 TB/sの带宽を実現
- **第2世代NVIDIA Scalable Coherency Fabric**：コア間データ転送最適化
- **单芯片モノリシック設計**：88コアが统一的メモリアクセス可能

PhoronixのSTREAM TRIADテストでは、Veraはpeak bandwidthの**90%**を持続的に达成——これはPhoronixがテストしたCPUの中で最高の 비율이었다。Memory bandwidth per coreは従来のx86 CPU比で**4倍以上**を達成している。

---

## ベンチマーク結果：Intel・AMD를 상회する性能

Phoronixの匿名化名によるMike Larabel의 testing结果显示：

- **Linuxカーネルコンパイル**：单socket Veraで**20秒**（最速記録）
- **幾何平均性能**：最新128コアx86 CPU보다**1.5倍**高速
- **AMD EPYC 9575F 5.0GHz比**：10%上回る
- **前世代NVIDIA Grace CPU比**：幾何平均**1.6倍**向上

Larabel는 「NVIDIA Vera는 Intel과 AMD x86_64 프로세서를相手に迄今为止最も手ごわい竞争相手」라고 평했다.

---

## AIファクトリーの経済学：トークン生産性の競争

AIファクトリー的现实では、**performance per wattが収益性に直結する**。SemiAnalysis InferenceXベンチマークによれば、NVIDIA Blackwell Ultra GPUはコストパートクあたり最低コストを実現しており、**50x more tokens per megawatt**を達成。Hopper世代比で**35x lower cost per token**という。

NVIDIA Dynamo 프레임웍는 长文脈推論と 대규모推論吞吐量のオーケストレーションを担当。AI factory workloads runs many sandboxes, tool calls, and data services simultaneously——Vera는 이러한 동시 실행 환경에서 높은 bandwidthと低延迟を一贯して维持한다。

---

## YouTube、AIで个人化された動画フィードを生成

別の话题として、GoogleはYouTubeにAI驅動の个人化フィード生成機能を導入した。ユーザーはテキストプロンプトで「見つけたい動画の種類」を描述でき、ワークアウトガイドから爱好灵感まで、个性化的なスペースを生成できる。

対応は米国在住のYouTubeモバイルアプリ・デスクトップ用户在対象。 history enabledが条件이며、プロンプトは随时編集可能。Spotifyの驅動再生リスト生成的機能と类似的だが、YouTube는 동영상에特的한視覚的推荐を提供する。

---

## Anthropic対OpenAI：AI規制を巡る代理戦争

The Verge》报道 따르면、AnthropicとOpenAIがNY-12选区の国会議员候補Alex Boresを舞台にproxy warを展開している。OpenAIらは**Leading the Future**（超级PAC）に资金提供し、Boresの候補を阻止しようと巨額を投入した。

Bores는州内で最早的AI規制立法 написал人物であり、Anthropic 등의支持を受けている。驚くべきことに、この広告が逆にBoresの认知度を高めた——Emerson College、世論調査では对手と2ポイント差まで接近。AI企业的意図せぬ结果として、規制推進派候选者のVisibilityが上昇趋势にある。

---

## arXiv論文に見る技術的前沿：PEFT安定性・双方向進化検索

2026年5月27日のarXivには以下の注目論文が投稿されている：

- **PEFT-Arena**（2605.28819）：Parameter-Efficient Fine-Tuningの安定性と塑性の観点から評価するベンチマーク。LoRAなどの軽量微調整手法の 实態を体系的に解明する。
- **Self-Improving Language Models with Bidirectional Evolutionary Search**（2605.28814）：双方向進化探索で语言モデルを自己改善させる手法。探索と学習の相互作用による能力向上を分析する。
- **Beyond Binary: Sim-to-Real Dexterous Manipulation**（2605.28812）：物理ベースcontact表現使った精巧操作のsim-to-real転移。ロボット制御の前沿的研究。
- **Calibrating Conservatism for Scalable Oversight**（2605.28807）：大きな言語モデルを人間が確認しながら評価する「スケーラブル監視」手法。

---

## 参考リンク

- [NVIDIA Vera CPU Is 'Packing a Heavy-Hitting Punch' Against Competition](https://blogs.nvidia.com/blog/vera-cpu-phoronix/)
- [AI Factories: The New Infrastructure of Intelligence](https://blogs.nvidia.com/blog/ai-factories-the-new-infrastructure-of-intelligence/)
- [YouTube will let you ask AI to make a custom video feed](https://www.theverge.com/2026/5/28/938759/youtube-ai-custom-video-feed)
- [AI tried to bury this politician — now people have actually heard of him](https://www.theverge.com/2026/5/27/937650/ai-political-article)
- [arXiv: PEFT-Arena](https://arxiv.org/abs/2605.28819)
- [arXiv: Self-Improving Language Models with Bidirectional Evolutionary Search](https://arxiv.org/abs/2605.28814)

---

*（本文の情報は2026年5月28日時点のものです）*