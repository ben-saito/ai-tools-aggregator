# AI開発週次まとめ：Nvidia Vera、Vera CPU、Alibabaチップ、OpenAI新加坡、米AI規制撤回（2026年5月23日）

2026年5月第3週、AI業界は一口小さくもない動きを見せている。米商務省がAIソフトウェアの輸出規制強化を検討する一方で、米テック大手2社のCEOが直接トランプ大統領に規制撤廃を働きかけ既往最大級の中間発表が成立的するなど、政策と産業の距離が特に近くなった。また、Nvidiaの新規CPU「Vera」が>Q1好決算の陰に隠れた2000億ドル市場の布石であり、AlibabaがAIエージェント向けチップ「M890」を2028年ロードマップごと公開したことも值得注目だ。

---

## 1. Nvidia Vera CPU：GPUではないもう一つの柱

Nvidiaが2026年Q1決算で売上高816億2000万ドルの見込みを超え、Q2ガイダンスを910億ドルに引き上げた。CEO Jensen Huang指の大型更新は**Blackwell**と**Rubin**GPUシリーズだが、その隣で密かに語られたのが新型CPU「**Vera**」の存在だ。

HuangCEOはアナリスト向け電話会議で、Veraが切り拓く市場規模を**2000億ドル**と説明した。これはNvidiaが2025〜2027年にBlackwellとRubinGPUで達成を見込む1兆ドル市場の外側に位置する。)brown

従来Nvidiaの収益の绝大部分はGPU需要に依存してきたが、Veraは**CPU市場への本格参入**を意味する。AIワークロードに特化したプロセッサとして、エージェント推論やマルチモーダル処理に向けたメモリストとネットワーク処理能力を持つ。HuangCEO自ら「出荷前から供給制約が出ている」と述べており、パイプラインの太さが窺える。

**開発者にとってのポイント：**
- Veraの登場によりNvidiaはGPUだけでなく**CPU+GPU+DPUのフルスタック**を内製化する動きを見せる
- AI推論ワークロード特化のISA設計は、RISC-V系プロセッサに近い柔軟性を持つ可能性がある
- NVIDIA CUDAの互換性がVeraにも拡大すれば、GPU側からCPU側へのコード移植が容易になる

---

## 2. Alibaba Zhenwu M890：エージェントファーストのチップ戦略

Alibabaは5月20日、AIエージェント向けに最適化した新規プロセッサ「**Zhenwu M890**」を公開した。従来の推論チップが**メモリスト帯域**と**モデル間通信**を重視しているのに対し、M890はエージェントが複数のサブタスクを並行処理する際の命令パターンとデータフローに最適化されている点が異なる。

Alibabaは同時に「**Qwen 3.7-Max**」の公開も発表し、チップ + モデルの垂直統合を明確にした。2028年にかけての硅プロセスロードマップも合わせて示すことで、米国の輸出規制下で独自路線を歩む姿勢を鮮明にした。

**開発者にとってのポイント：**
- M890のアーキテクチャは「エージェントが外部APIやデータベースを自在に呼び出す」ユースケースに特化している
- Qwenシリーズとの垂直統合は、推論精度とコスト効率のトレードオフが変わる可能性
- 中国市場向けだが、エージェント推論のベストプラクティスとしては無関係ではない

---

## 3. OpenAI、加坡に海外初となるApplied AI Labを開所

OpenAIは5月22日、加坡に**Applied AI Lab**を開所すると発表した。るのは海外初となる施設だ。IMDA（情報通信メディア開発局）との協力で、ATxSummitで「S$3億以上」を負担する計画が明らかになった。現時点で200名以上の現地技術ポストを採用する方針。

この施設は「Applied」を冠している通り、研究よりも**実応用**に軸がある。企業向けプロダクション利用へのagoniaを主な目的とし、AGI安全研究の知見を実際のディズプラフラワーアプリケーションに落とす役割を担う。

**開発者にとってのポイント：**
- OpenAIの海外プロダクション向けラボはAPI利用率とプロダクション事例の拡張を目指す
- IMDAが新加坡のAI規制枠組みを更新しており、両者の連携で地域適合型AIガバナンスが進行中
- 日本企業にとっては、APAC域でのOpenAI API利用枠の拡張やプロダクション統合の支援が受けやすくなる可能性

---

## 4. 米的AI規制の行方：ム斯基＆ザッカーバーグのロビー活動

5月22日、トランプ米大統領が署名予定だったAI安全保障に関する大統領令が、署名直前に撤回された。撤回の原因は、イーロン・ムスコMark Zuckerberg、デイビッド・サックス各CEOによる直接的なロビー活動だと报道されている。

ムスコは「米国は中国に対するリードを維持しており、新しい規制は lead を失うリスクがある」と主張。ザッカーバーグもMetaのAI投資戦略への影響を懸念したとされる。

ホワイトハウスの関係者は「我々は中国をリードしており、その lead を失うようなことはしたくない」（ Trump 米大統領）と述べており、規制よりも競争優先の姿勢を示している。

**開発者にとってのポイント：**
- 米国のAI規制が事実上「テック大手の意向」に左右される構造が可視化された
- 輸出管理软件に関する規制（ BIS 規制）は継続するため、モデル輸出には引き続き注意が必要
- EU AI Act など他地域の規制との差距がさらに拡大する可能性がある

---

## 5. Physical AI：人間roids の工場本格導入へ

德国産業機器メーカー**Schaeffler**が5月14日、人間roids の自社工場への本格導入を発表した。初期タスクは箱の移動と倉庫内での材料取り扱いで、Schaefflerの既存ラインとの統合が始まる。

これは単なるPilotではなく、**プロダクション環境での人間oids 運用**の实证事例として位置付けられている。前身の技術提携は2026年1月に発表済みで、此次の発表はその具体的な運用の運び出しとなる。

**開発者にとってのポイント：**
- Physical AI（物理世界のAI化）は今年に入り、POCから実運用への移行が加速している
- 人間roids 向けの控制系统とAPI連携が重要になり、ROS2などのフレームワーク需要が高まる
- 工場という構造化環境なら、LLMベースのタスク规划和現実世界の実行の統合が比較的容易

---

## 参考リンク

- [Nvidia Vera chip targets $200bn market](https://www.artificialintelligence-news.com/news/nvidia-vera-chip-200-billion-market/)
- [Alibaba Zhenwu M890 AI agent chip roadmap](https://www.artificialintelligence-news.com/news/alibaba-zhenwu-m890-ai-agent-chip-roadmap/)
- [OpenAI Singapore Applied AI Lab](https://www.artificialintelligence-news.com/news/openai-singapore-ai-lab-imda-agentic-ai-framework/)
- [Trump AI executive order scrapped after Musk, Zuckerberg lobbying](https://www.artificialintelligence-news.com/news/trump-ai-executive-order-scrapped-musk-zuckerberg-china/)
- [Physical AI humanoid robots factory deployment](https://www.artificialintelligence-news.com/news/physical-ai-humanoid-robots-factories/)

---

*（本文の情報は2026年5月23日時点のものです...）*