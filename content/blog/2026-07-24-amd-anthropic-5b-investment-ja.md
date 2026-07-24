# AMD、Anthropicに最大50億ドル投資—— AIインフラ体制攻防の新たな段階

2026年7月23日、AIチップ最大手のAMDとAI安全性を重視するAnthropicの間に、最大50億ドル（約7200億円）規模の大型インフラ投資合意が締結された。AnthropicはAMDのInstinct MI450シリーズアクセラレーターを使用して最大2ギガワット分の容量を導入し、2027年前半までに最初の1ギガワット分が出荷される予定だ。

---

## 合意の規模と内容

AMDとAnthropicが結んだインフラ契約は、複数の異例的合作要素を含んでいる。まず注目すべきは最大2ギガワットという容量だ。AIデータセンターとしては前所未有的な規模級であり、Google CloudやMicrosoft Azureの単一施設すら上回る規模に匹敵する。これだけの計算力を必要とするAnthropicの事業展開は、AGI開発に向けた長距離走の姿勢を裏付けている。

次に注目すべきは、AMDが直接投資という形での資金提供を行った点だ。通常のハードウェア調達契約を超える形で、AMDがAnthropicへの資本参加を実行している。これはAnthropicがGPU調達先の多角化を進める中で、AMDにとってAnthropicを戦略的アンカー顧客として確保したい思惑が読み取れる。

---

## Nvidiaからの距離戦略

Anthropic、現在はモデルの訓練と推論の両面でNvidiaのH100/H200 GPUに依存している。NvidiaのGPU需要が逼迫する中、H200の後継となるBlackwell世代への移行期において、AIラボが特定のベンダーに過度に依存することは調達リスクとなる。

AMDのMI450は、FP8訓練と高帯域幅メモりを特徴とするInstinct MI300Xの後継世代だ。AMDはNvidia CUDAとの互換性をROCmを通じて改善してきたが、CUDAネイティブのエコシステム覆盖率ではまだNvidiaに劣る。AnthropicのようなトップラボがAMDのアクセラレーターを採用することは、AMDにとって重要な採用実績となる。

---

## 開発者への影響

この合意が直接的に開発者の日々の作業に影響を与えることはない。しかし、以下の間接的な影響は確認しておく必要がある：

- AnthropicのClaude API可用性が向上すれば、開発者にとってClaude採用の障害が少なくなる
- AMD ROCmエコシステムが拡大すれば、LLM訓練のハードウェア選択肢も増える
- 大手AIラボのマルチベンダー調達が進めば、特定のGPU不足時のリスク分散が可能になる

AIインフラの多極化は、特定の1社への過度な依存を減らす傾向として、開発者にとって長期的にポジティブな影響を与えるだろう。

---

## 参考リンク

- [AMD to invest up to $5 billion in Anthropic under AI infrastructure deal](https://www.artificialintelligence-news.com/news/amd-anthropic-ai-infrastructure-deal/)

*（本文の情報は2026年07月24日時点のものです。）*
