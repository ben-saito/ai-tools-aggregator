# Nvidia、Veraチップで推論フェーズに参入——2000億ドルの第2戦線

2026年5月、AI、半導体業界における最も重要な転換点が静かに動き出している。Nvidiaが始めたばかりの両輪目の戦略が、既存のGPU王国の構図を根本から変える可能性がある。

---

## Veraチップとは何か——Nvidiaの「推論専用」CPU

NvidiaのCEO Jensen Huang氏は、同社のQ1決算発表において、初めて新型Centennialプロセッサ「Vera」について積極的に言及した。VeraはNvidia史上初の**推論特化型CPU**でありトレーニング用GPUとは異なるアーキテクチャを持っている。

HPC/HPCwireの分析によると、Veraは以下を目標としている：

- **推論ワークロードの高速化**——LLMへのクエリ応答、リアルタイム推論
- **Groq社の技術ライセンス**——2025年に約170億ドルで技術導入
- ** Vera Rubinプラットフォーム**——Vera CPU + Rubin GPUの完全統合

Huang氏は「Veraは第2の売上看好 Contributorになる」と明言し、**2026年度末までに200億ドル売上看好**を見込んでいる。NvidiaのBlackwell/RubinトレーニングGPU군が2025〜2027年に1兆ドル市場を開く予測とは別の、もう一つの成長エンジンだ。

---

## なぜ「今推論なのか」——クラウド顧客の自作チップとの攻防

Nvidiaが推論チップに参入を決定した背景には、最大顧客のの動きがある。

Google、Amazon、Microsoftの3社は**2026年に合計7000億ドル以上をAIインフラに投資**する見込みだが、その一方で各社が自社用の推論チップを独自に開発している：

| 企業 | 自社チップ | 用途 |
|------|-----------|------|
| Google | TPU v5/v6 | 推論・トレーニング |
| Amazon | Trainium 2 | 推論 |
| Microsoft | Maia 100 | 推論 |

Huang氏も決算説明で「顧客がカスタム siliconへ投資している」と認めており、**トレーニングでのNvidia優位は揺るぎないものの、推論では競争が激烈**になっている。

VeraはGroqのLPU（Language Processing Unit）技術を基にしている。Groqは推論専用アーキテクチャで知られ、GoogleのGemini Nanoにも技術供給している企業だ。NvidiaがGroqからライセンスを取得することで、推論ワークロードでCustom Siliconに対抗する構えだ。

---

## 供給制約との戦い——Huang氏も認める最大のリスク

Huang氏自身「Vera Rubinの全生命周期で供給制約が続く見込み」と語るなど、供給面での不安が表明された。

Nvidiaの対策：

- **サプライチェーンへの大型投資**——HBMメモリ、TSMC先端プロセスへの先行予約
- **NVIDIA CUDA**のエコシステム維持——これがカスタムチップに対する最大の差別化
- **液浸冷却データセンター**の拡張——推論ワークロードの高密度化に対応

---

## Alibabaの反撃——エージェンティックAI向けチップへ

Nvidiaとは対照的に、中国アリババもAIチップの大型ロードマップを明らかにした。T-Head子が開発した**Zhenwu M890**は、AIエージェントの動作を念頭に置いて設計されたものだ。

M890の特徴：

- **前世代比3倍の性能向上**（Zhenwu 810E比）
- **メモリ帯域とモデル間通信を重視**——推論ではなくエージェントワークロード向け
- **2027年Q3にV900、後続に2028年にRシリーズ予定**

さらに注目的是、アリババは同日**Qwen 3.7-Max**も発表。エージェントタスクと長時間のコード生成に特化したLLM最新バージョンだ。チップとモデルを同時に最適化するという発表は、「アリババはプラットフォームとして垂直統合を進める」という明確なメッセージになる。

---

## 開発者視点での意義

AI開発者にとって、この動きから読み取れることは3つ：

1. **推論コストの構造が変わる**——Veraのような専用チップが普及すれば、APIコストの引き下げが期待でき、エージェントAIの実用性がさらに向上する
2. **マルチチップ対応が標準になる**——NVIDIA GPUだけでなく、Groq/GPU/TPU等多种計算資源を組み合わせる時代が到来する
3. **エージェント設計の革新が必要**——チップがエージェント動作を前提に設計され始めている以上、我々開発者もエージェントの自律性・安全性設計を根本から見直す時期にきている

---

##  参考リンク

- [Nvidia Q1 Earnings Press Release](https://nvidianews.nvidia.com/)
- [TechCrunch: Everyone is navigating AI security in real time](https://techcrunch.com/2026/05/24/everyone-is-navigating-ai-security-in-real-time-even-google/)
- [AI News: Nvidia's Vera chip targets $200bn market](https://www.artificialintelligence-news.com/news/nvidia-vera-chip-200-billion-market/)
- [AI News: Alibaba designing AI chips around agents](https://www.artificialintelligence-news.com/news/alibaba-zhenwu-m890-ai-agent-chip-roadmap/)
- [AI News: OpenAI opens Singapore AI lab](https://www.artificialintelligence-news.com/news/openai-singapore-ai-lab-imda-agentic-ai-framework/)

---

*（本文の情報は2026年5月25日時点のものです）*