# AI開発ニュース・週間まとめ（2026年10月第3週後半）

2026年10月第3週は、**DeepSeek V4.1 Flash**のاجئ登場、**AnthropicによるECDSA曲線の秘密解明**、そして**ローカルLLM推論のベンチマークツール**など、開発者にとって興味深い話題が並んだ週となった。

---

## DeepSeek V4.1 Flash-1017 released：推論コスト最前線

中国発の大規模言語モデル開発企業 **DeepSeek** が、**DeepSeek V4.1 Flash-1017** をHugging Faceで公開した。Hacker Newsでは426ポイントを獲得した注目トピックだ。

このモデルは、前バージョンから**推論効率と出力長の改善**を達成しながら、同時に**推論（reasoning）**、**コーディング**、**エージェントタスク**、**視覚ベンチマーク**の各指標で大幅にスコアを向上させている。

### ベンチマーク結果

| ベンチマーク | V4.1-Flash-1017 | V4.1-Flash | K3 | GLM-5.3 |
|---|---|---|---|---|
| HLE w/o tools | 42.6 | 36.8 | 43.5 | 42.0 |
| Terminal-Bench 4.0 | 42.3 | 31.2 | 12.6 | 37.9 |
| DeepSWE v1.1 | 77.0 | 74.2 | 67.5 | 66.9 |
| Apex Bench v1.1 | 72.1 | 64.6 | 47.8 | 56.6 |
| Chartography (w/tools) | 83.0 | 78.9 | 68.1 | — |

注目すべきは**Terminal-Bench 4.0**での大幅改善（31.2 → 42.3）で、エージェントとしての実用的能力が確実に向上している点だ。MITライセンスで公開されており、開発者が的自由に入手可能なのが大きい。

**開発者ポイント**: DeepSeek V4.1 Flash-1017の登場は、オープンソースLLMの競争環境が依然として加熱していることを示している。特に**Terminal-Bench**や**DeepSWE**といったソフトウェアエンジニアリング系のベンチマークでの改善は、エージェント型アプリケーション開発者にとって朗報だ。

---

## Anthropic research：ClaudeがNIST ECDSA曲線の起源を解明

**Anthropic** のFrontier Red Teamが、最も広く利用されている暗号規格之一的**ECDSA**（Elliptic Curve Digital Signature Algorithm）の曲線パラメータ生成の秘密を、Claudeを用いて解明したと報告した。

### 25年以上谜に包まれていたNIST曲線のseed

NISTが2000年にFIPS 186-2として採用したECDSA曲線（NIST P-192、P-224、P-256、P-384、P-521）には、それぞれ「seed」パラメータが定義されている。このseedから曲線係数bが導出される仕組みだ。しかし、**NSAがこれらのseedを説明なしで提供**していたため、長年にわたり「意図的なバックドアが埋め込まれているのでは」という疑惑が密码学者の間で囁かれていた。

 ### Claudeのアプローチ

Anthropicのエンジニアは当初、「ハッシュ化された面白いフレーズでは」という従来の説を追っていたが、これは外れていた。2026年10月、内部の研究用モデルにseed生成の手がかりを与えずに解読を依頼したところ、**30分足らずで**全5種類のNIST曲線（P-192〜P-521）のseed生成方法を特定した。

その答えは意外的だった：**UnixタイムスタンプでシードされたCライブラリの `lrand48` 疑似乱数生成器（PRNG）の出力**而已だ。 각 곡선은 서로 다른 iteration 수로 생성되었으며, 예를 들어 P-256는 1,842 iteration 후에 표준화된 seedを出力した。

### 暗号学的に意味すること

注目すべきは、これが**暗号解読の突破口でも脆弱性の発見でもない**という点이다。むしろ逆に、NIST曲線が意図的なバックドア 없이決定されていた可能性が高まったことを示している。単純なPRNG＋タイムスタンプという再現可能な方法で生成されたパラメータは、陰謀論の余地を 극限まで排除する。

**開発者ポイント**: この話は単なる読み物ではない。**AIを使った暗号解読・脆弱性発見**の可能性を実感させる事例だ。Claudeのアプローチ（古いPRNGの出力をパターン認識で特定）は、modern cryptographic auditの新しい方法を示唆している。

---

## Llmspeed.dev：ローカルLLMの推論速度を比較するツール

**Llmspeed.dev** がHacker Newsで166ポイントを獲得したテーマは、ローカルLLMの推論速度を比較できるWebツール다。

このツールを使用すると、**異なるハードウェア構成**（NVIDIA RTX 4090、RTX 5090、Mac Studio M5 Ultra、H100 80GB cloudなど）で**様々な量子化モデル**（Q4_K_M、FP8など）を実行したときの feel 的な速度をシミュレートできる。

対応モデルはLlama 3.1 8B、Qwen 3.6/3.8 27B、DeepSeek V4 Flash、Gemma 4 26Bなど主要オープンモデルを網羅。硬件的爱是可以比较的，月租机器人的配置を乗り換える前に性能を把握したい開発者にとって実用的なツール다。

**開発者ポイント**: ローカルLLMの推論環境はまだ翡翠の时代であり、量子化手法（Q4_K_M、Q8_0、FP8など）とハードウェアの 组み合わせ如何で、性能とコストのトレードオフが大きく変わる。LlmspeedのようなツールはMLOps的な判断を補助する上で有价值다。

---

## PS5でLlama.cpp実行：コンソールがローカルLLMサーバーに

**Llama.cpp on a jailbroken PS5** というプロジェクトが328ポイントを獲得。脱獄したPS5上で任意のGGUFモデルを実行居然るこのプロジェクトは、コンソールハードウェアのポテンシャルをの再発見させるものだ。

 специальное оборудование не требуется. Вместо этого используется стандартный подход с запуском Llama.cpp через Linux-окружение на модифицированной консоли.

**開発者ポイント**: 高性能GPUを积んだゲームコンソールがローカルLLM推論の&quot;化石燃料庫&quot;として有价值であることを示す興味深い実証だ。PS5のGPU（RDNA 2ベース）はFP16性能が 实測で10 TFLOPS规模であり、最新の量化技术与組み合わせればリアルタイム推论も可能かもしれない。

---

## FLUX 3 Image Klein：画像生成のSOTA争夺

**FLUX 3 Image Klein** がHacker Newsで188ポイントを記録。Black Forest LabsのFLUXシリーズ最新变种であり、特に**画質を 극단적으로高める**ことに主眼を置いたモデルだ。

SOTA争夺が激化している画像生成分野において、开发者社区の注目も集め続けている。

---

## 参考リンク

- [DeepSeek V4.1 Flash-1017 - Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)
- [Claude reveals ECDSA curve origins - Anthropic](https://www.anthropic.com/research/ecdsa-curve-origins)
- [Llmspeed - feel local LLM speed before you buy](https://llmspeed.dev/)
- [Llama.cpp on a jailbroken PS5 - GitHub](https://github.com/cobanov/PS5LM)
- [FLUX 3 Image Klein - BFL](https://bfl.ai/blog/flux-3-image-klein)
- [Hacker News - DeepSeek V4.1](https://news.ycombinator.com/item?id=50129121)

---

*本文の情報は2026年10月18日時点のものです。*
