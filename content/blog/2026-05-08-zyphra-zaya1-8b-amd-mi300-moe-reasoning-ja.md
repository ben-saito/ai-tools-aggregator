# ZyphraがZAYA1-8Bを発表：AMD MI300 GPUで学習した効率的なMoE推論モデル

2026年5月、米的AIスタートアップ**Zyphra**が新しい推論モデル**ZAYA1-8B**を公开发表した。80億パラメータ总数ながらアクティブパラメータは7.6億に留まる**Mixture-of-Experts（MoE）**構成で、NVIDIA製ではなく**AMD Instinct MI300 GPU**だけで学習された点が業界注视の的だ。Apache 2.0ライセンスでHugging Faceから免费下载でき 벤치マークではGPT-5-HighやDeepSeek-V3.2と競合する性能を達成。AI開発者にとって、計算資源の多样性と効率性の両面を兼ね備えた新しい選択肢が加わった。

---

## MoE++アーキテクチャ：3つの革新的技術

ZAYA1-8Bの性能の源泉は、Zyphraが開発した**MoE++**アーキテク 않다. 技术レポートで公表されたこの方式是、従来のTransformerアーキテクチャに3つの根本的な改良を导入している。

### Compressed Convolutional Attention（CCA）

標準的なAttention机构はコンテキストウィンドウが拡大するにつれメモリ负荷が急増する。CCAはシーケンス混合を**圧縮潜在空间**で 수행하여、KVキャッシュサイズをフルマルチヘッドAttention比で**8分の1**に削減。长文コンテキストの推論が効率的に 가능になる。

### ZAYA1 MLP Router

従来のMoEモデルは线性Routerで哪个「エキスパート」に 토큰を割り当てるかを决定していた。Zyphraはより表現力丰富的**多层MLPベースデザイン**に置き換えた。训练安定性を维持するため、古典制御理论の**PID Controller**にインスパイアされたバイアスbalancing_schemeを採用している。

### Learned Residual Scaling

深度40層のモデルを通じてデータの「residual norm」成长を制御し、勾配消失・爆発を防止。計算オーバーヘッドはほとんどない。

---

## Markovian RSA：テスト時計算の新しいパラダイム

ZAYA1-8B的最大な性能飞跃は**Markovian RSA**（テスト時計算手法）から生まれている。

従来の推論增强手法では、モデルに更长な思考チェーンを生成させた。然而これは「コンテキストブロート”问题を引き起こし、思考履歴が过长になるとモデルの焦点が失われる。

Markovian RSAは以下のステップで問題を解決する：

- モデルが複数の並列思考チェーン（候補）を生成
- その「尾部」（最后数千トークン）のみを抽出
- これらをサブサンプリングして「集約プロンプト」に供给
- モデルに異なるアプローチを reconcile（调和）させてより良い解に到达

この手法により、**「思考深度」と「コンテキストサイズ」を切り離す**ことに成功。思考時間が延びてもコンテキストが膨張しないため、長い推論タスクでも集中力が维持される。

---

## AMD MI300 GPU：Nvidia依赖からの脱却

もう1つの大きなストーリー感は、ZAYA1-8Bが**AMD Instinct MI300 GPU**だけで 학습되었다点。Nvidia GPU不足がAI产业发展のボトルネックとなる中、AMD製GPUでの大規模モデル学習が実用的であることを证明した。

MI300はNvidia H100/H200と竞合する性能を持ちながら、供给制約が少ない。Nvidia CUDA环境依赖，脱却する取り組みとして、AMD ROCmエコシステムの成熟度も注目に値する。

---

## ベンチマーク性能：小さなボディ、薄型コスト

ZAYA1-8Bの벤치마크结果是社外的第三方評価でも好意的な的评价を受けている。LiveCodeBenchを始めとする複数のテストで、80億パラメータ级别的モデルとしては压倒的な成绩を记载。特に注目的是、**推論時に的消费计算资源が従来比で大幅に削减**されている点。

开源・商用利用可能なApache 2.0ライセンス供与により、 企业や个人開発者が即座にカスタマイズして利用可能。Zyphra Cloud上で直接试用することもできる。

---

## 开发者視点での意味

ZAYA1-8Bの登場は、AI模型開発の「多样性」と「効率性」という2つの潮流が交汇する象徴的な出来事だ。

- **計算資源の多样化**: Nvidia依存からの脱却脚步声（Nvidiaの供给制約、AMD/Intel等其他芯片の抬頭）
- **アーキテクチャ革新**: MoE+Compressed Attentionによる「 intelligence density」の追求
- **オープンソースの推进**: Apache 2.0で企业向け利用も解放

AI推論モデルの军在个小粒时代に入り、パラメータ数ではなく**智能密度**と**コスト効率**で竞う時代が到来している。ZAYA1-8Bは、その倾向を象徴するモデルと言えそうだ。

---

## 参考リンク

- [Meet ZAYA1-8B, a super efficient open reasoning model trained on AMD Instinct MI300 GPUs — VentureBeat](https://venturebeat.com/ai/meet-zaya1-8b-a-super-efficient-open-reasoning-model-trained-on-amd-instinct-mi300-gpus/)
- [ZAYA1-8B on Hugging Face](https://huggingface.co/)
- [Zyphra Official](https://zyphra.com/)

---

*本記事の情報は2026-05-08時点のものです。*
