# MiniMax-M3が登場：GPT-5.5とGemini 3.1 Proを抑え、成本1/10という衝撃

2026年6月初頭、AI業界に小さな地震が走った。中国のAIスタートアップであるMiniMaxが、同社待望の新型大規模言語モデル「**MiniMax-M3**」を6月1日（米国時間）に正式リリース。たった5〜10%のコストで、GPT-5.5やGemini 3.1 Proなどのトップモデルを超える性能を実現し、開発者コミュニティで大きな話題となっている。

---

## MiniMax Sparse Attention（MSA）：計算コストを1/20に削減

M3の核心技術は、伝統的なTransformerアーキテクチャから大きく脱却した点にある。

標準的なアテンション機構は`O(N²)`でスケールするため、入力テキストが長くなるにつれ計算コストが爆発的に増加する。针对この「構造的欠陥」に立ち向かうため、MiniMaxのチームは**MiniMax Sparse Attention（MSA）**を実装した。

MSAは、「 intelligente indexing clerk」のように動作する。事前フィルタリングフェーズでKey-Value（KV）行列を高精度なブロックに分割し、「KV outer gather Q」アプローチを採用。各データブロックは正確に1回だけ読み取られ、メモリアクセスは連続的に維持されるため、ハードウェア utilizationが大幅に向上する。

内部テストでは、Flash-Sparse-Attentionやflash-mobaなどの代替オープンソースソリューションに対し、**4倍以上的高速化**を達成。最大1百万トークンのコンテキスト長を管理する場合、M3のper-token計算需要は従来世代モデルのわずか1/20に低下し、**prefilling stageで9倍高速化、decodingで15倍高速化**するという。

---

## ベンチマーク結果：Claude Opus 4.8との比較

M3の性能は、主要ベンチマークで以下の結果を示している：

- **SWE-Bench Pro: 59.0%** — GPT-5.5やGemini 3.1 Proを超え、Claude Opus 4.8（69.2%）に肉薄
- **Terminal Bench 2.1: 66.0%** — 前世代Opus 4.7（66.1%）と同レベル、Opus 4.8（74.6%）には及ばず
- **MCP Atlas: 74.2%** — DeepSeek-V4 Pro Max（73.6%）を僅かに上回る
- **BrowseComp: 83.5%** — Claude Opus 4.7（79.3%）を大幅に上回り、DeepSeek-V4 Pro Max（83.4%）とほぼ互角

これらの結果は、M3が非常に効率的なSparse Attention設計ながら、複雑な推論タスクで競合モデルに匹敵する性能を示すことを実証している。

---

## ネイティブマルチモーダルと100兆トークン超の学習データ

MiniMaxはM3を「Step Zero」からネイティブにマルチモーダルなシステムとして設計した。テキスト、画像、視覚コンポーネントの自然に interleaved なシーケンスを blend するため、学習 Cora data machineryを OVERHAUL。総学習 Cora は100兆トークンを超える。

この深いデータアライメントにより、モデルはプログラミングチャートや座標マップなどの複雑なvisual geometriesを構造化コードに変換しつつ、コンテキスト忠実度を維持できる。

---

## オープンウェイトライセンス：10日以内にHuggingFaceとGitHubで公開予定

MiniMaxは、HuggingFaceとGitHub上で10日以内にM3をオープンウェイトライセンスで公開すると約束した。 정확한ライセンス種別（MIT、Apache 2.0、OpenMDWなど）は未定だが、公開されれば企業ユーザーは以下メリットを得られる：

- **データプライバシ**：完全にローカルで実行可能、パブリックAPIに伴うデータ取り込みリスク为零
- **カスタム最適化**：完全なパイプライン制御、アーキテクチャの深いカスタマイズが可能
- **コストの一貫性**：月額あたり従来の1/20に軽減

---

## API pricing：他モデルとの比較

| モデル | 入力 ($/M) | 出力 ($/M) | 合計 ($/M) |
|--------|-----------|-----------|-----------|
| MiniMax-M3（限时） | $0.30 | $1.20 | $1.50 |
| DeepSeek-V4-Pro | $0.435 | $0.87 | $1.305 |
| Gemini 3.1 Flash-Lite | $0.25 | $1.50 | $1.75 |
| GPT-5.4 | $2.50 | $15.00 | $17.50 |
| Claude Opus 4.8 | $5.00 | $25.00 | $30.00 |
| GPT-5.5 | $5.00 | $30.00 | $35.00 |

限定プライス期間後でも、M3は主要美国モデルの8〜20%のコスト水準を維持する。

---

## MiniMax Code：Agentic Team機能で12時間 autonomous 実行

MiniMaxはM3の性能を活用するため、更新された製品スイートを提供している。フラグシップ実装は**MiniMax Code** — マルチステップ能力最大化为目的としたAI agent製品。

「Agent Team」アーキテクチャにより、大規模なエンジニアリングタスクをマルチステージの concurrent workflowsに分割可能。「Producer + Verifier」敵対的 harnessループを使用し、1つのagentインスタンスがコードを生成する间、2番目のverifierインスタンスが積極的にテストと実行出力を反映出、etworkが自律的に days self-correct できる。

ネイティブvisual groundingにより、cross-application voice promptで localized enterprise ERP clientを開き、開いたExcel spreadsheetからデータテーブルを一括入力といった操作也不可能ではない。

---

## 開発者コミュニティの反応

コミュニティの反応は即座的だった。12時間 automated verification testでは、M3はICLR 2025 Outstanding Paper Award論文（「Learning Dynamics of LLM Finetuning」）の再現を任務とし、**18個のコミットと23個の実験用プロットを自律的に生成、核心実験動作を達成**した。

AI coding harness「Cline」のチームはday-one互換性を確認し、「MiniMax-M3は1Mコンテキスト、マルチモーダル、agentic coding能力を備えた最初のモデル恭喜」と投稿した。

---

## 他のAIニュースも続々

### Alphabet、$800億の資金調達を発表

TechCrunchによれば、AlphabetはAI構築不惜のためだけに$800億の資金調達を計画している。同社は声明で「企業および消费者に対するAIソリューション・サービスへの需要が強く、公司の利用可能な供給を超えている」と説明した。

### Nvidiaが$200B CPU市場でAI Agent PCを追及

NvidiaはMicrosoft、Dell、HPと提携し、AI agent PC市场に進出。如果 NvidiaがAI agentsを安全に一般に提供服务する方法を見つければ、それは大きなビジネスになる可能性がある。

### Florida州、OpenAIとSam Altmanを提訴

Florida州は、Florida State Universityでの銃乱射事件とChatGPTの関与を巡り、OpenAIとSam Altmanを相手取り、異例の訴訟を提起した。暴力事件に関連するとして、企業として初めての発展となる可能性がある。

---

## まとめ

MiniMax-M3の登場は、「コストパフォーマンス」と「オープン性」という2つの観点から、LLM市場における大きな転換点を示すものである。複雑なコードタスクやagentic performanceで閉じAPIモデルに匹敵しながら、そのコストは大幅に抑えられる。

さらに、オープンウェイトライセンスの公開約束は、企业ユーザーがパブリックAPI的数据泄露リスクを排除しながら、ローカル環境での高度なカスタマイズを実現する道を開く。

AI開発者にとって、M3は「バーストリングfor the buck」を提供する選択肢として、確かに注目に値する。

---

## 参考リンク

- [MiniMax M3 Blog](https://www.minimax.io/blog/minimax-m3)
- [MiniMax Platform](https://platform.minimax.io/subscribe/token-plan?tab=api-enterprise)
- [VentureBeat: MiniMax-M3 Debuts](https://venturebeat.com/technology/minimax-m3-debuts-eclipsing-gpt-5-5-and-gemini-3-1-pro-on-key-benchmark-performance-for-just-5-10-of-the-cost)
- [TechCrunch: Alphabet plans $80B AI buildout](https://techcrunch.com/2026/06/01/alphabet-plans-to-raise-80-billion-to-pay-for-ai-buildout/)
- [TechCrunch: Nvidia AI Agent PCs](https://techcrunch.com/2026/06/01/nvidia-chases-200b-cpu-market-with-ai-agent-pcs-from-microsoft-dell-and-hp/)

---

*（本記事の情報は2026年6月2日時点のものです）*