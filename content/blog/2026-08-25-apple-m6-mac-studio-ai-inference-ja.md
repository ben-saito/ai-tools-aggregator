# Apple M6/M5 Ultra ——ローカルAI推論に特化した新型Mac StudioとMac mini

Appleは2025年8月25日、Mac miniとMac Studioの新型を発表するとともに、M6チップとM5 Ultraチップを披露した。M6はAppleのMシリーズ初となる2nmプロセス採用のSoCであり、M5 UltraはMacラインアップ中最上位のチップとしてAIワークロードに最適化した構成となっている。AppleはこれらのマシンをローカルAI推論の第一人者として位置づけ，特别是分布式推論用途への期待を強調した。

---

## M6：2nmプロセスとユニファイドメモリ

M6チップは12コアCPUを搭载し、「スーパコア」「パフォーマンスコア」「エフィシェンシコア」の3种类のコア类型を初めて同時に採用した。12コアGPUは前任機より2コア多く、ユニファイドメモリの帯域幅は最大160GB/sに達する。メモリの最大容量は32GBで、小さな言語モデルの推論には十分な性能だが、大规模モデル向けには别途対応が必要となる。

Appleによれば、M6のマルチスレッドCPU性能は2世代前のM4比で最大40％向上しているという。独立したベンチマークは未発表のため、実性能は未定である。

---

## M5 Ultra：512GBユニファイドメモリでGPUクラスタに匹敵

M5 UltraはMac Studioに搭载予定で、2個のM6 Maxチップを1つのSoC上に並べた構成となっている。36コアCPU（スーパコア12、パフォーマンスコア24）、80コアGPUを搭载し、ユニファイドメモリの最大容量は512GB —— これは Nvidia や AMD の专用AIサーバーハードウェアに匹敵する容量である。

Appleの主张する1.2TB/sのメモリ帯域幅により、複数チップ間またはThunderbolt 5でデイジーチェーン接続した複数台のMac Studio間で大规模言語モデルの推論を分散できる。macOS 26.2が 지원하는Thunderbolt 5の低遅延通信と、AppleのMLXフレームワークを組み合わせることで、单一GPUでは处理できない大规模モデルへの対応が可能になる。

---

## MLXフレームワークと分散推論のエコシステム

macOS 26.2（2025年12月リリース）の主要新機能は、Thunderbolt 5ホスト間低遅延通信による「分散AI推論」のサポートだった。AppleがMIT LICENSEで公开しているMLXは、Apple Siliconのユニファイドメモリアーキテクチャを活用した配列计算ライブラリで、複数のMac間での分散推論に最適化和されている。

この構成により、開発者や研究チームはNvidia製GPUクラスタに近い性能を必要とせずに、大规模开源LLMの推論環境を構築できる。趣味の開発者から-professionalな研究者まで、广泛な層に活用され始めている。

---

## 主な仕様比较

| 仕様 | M6 | M5 Ultra |
|---|---|---|
| プロセスノード | 2nm | システム级パッケージ |
| CPUコア数 | 12（3种类） | 36（2×M6 Max） |
| GPUコア数 | 12 | 80 |
| ユニファイドメモリ上限 | 32GB | 512GB |
| メモリ帯域幅 | 160GB/s | 1.2TB/s |

---

## 参考文献

- [Ars Technica: Apple new desktop computers designed for local AI development](https://arstechnica.com/apple/2026/08/with-new-mac-studio-and-mac-mini-apple-lea)
- [Apple Newsroom](https://www.apple.com/newsroom/)
- [MLX Framework GitHub](https://github.com/ml-explore/mlx)

---

*本記事の情報は2025年8月25日時点のものです。独立したベンチマーク結果は尚未発表のため、変更の可能性があります。*
