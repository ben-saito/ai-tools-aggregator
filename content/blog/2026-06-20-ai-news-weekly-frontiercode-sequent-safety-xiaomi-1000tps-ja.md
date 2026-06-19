# AI開発ニュース weekly：FrontierCodeベンチマーク公開、SequentがAI安全性研究の新規公開、 Xiaomiが1000トークン/sモデル

2026年6月上半期、AI安全性研究の最前線から実装、評価指標、そして推論速度まで、多面的な進展が相次いだ。AIセキュリティ研究所の研究者が新Organization「Sequent」を設立してAlignment問題の解決に乗り出す一方、Cognitionはcodingベンチマーク「FrontierCode」を公開し、現在最高性能のAIシステムでもわずか13.4%という難しさを示した。また、Xiaomiは1兆パラメータモデルで1000トークン/秒という推論速度を達成。開発者視点でお届けする。

---

## Sequent設立：「Alignmentは軌道に乗っていない」——AI安全性研究の新規組織

英国AI Security InstituteのAlignmentチームと理論的AlignmentスタートアップTimaeusの研究者が連帯し、非营利研究組織**Sequent**を創設した。Artificial Superintelligence (ASI)가数年内にも開発される可能性がある一方、「Alignmentが同じタイムライン готовностьに合わせる准备ができているかどうかは不明」という厳しい問題提起から始まった。

Sequentの目标是2年以内に40〜80人の全职従業員を抱え、最初は1億〜1億5000万ドルの資金調達を目指す。「成功的であれば、さらに1桁多い資金調達做好准备する」としている。

### 研究ポートフォリオアプローチ

Sequentは大手AIラボとは「異なるアプローチ」を採用する。現在のAIラボが「本質的に反応的」で「機能的な方法は得られるが、いつ、なぜ失敗するかについての原則的洞察が得られない」のに対し、Sequentは「制御可能な状況（トレーニング中や選択された環境での評価）でのAlignmentが、制御困難な状況（大スケール、長時間視野、タスク実行を現実の世界で自律的に実行）にも泛化する」ことを証明できる方法を見つけ出すことを目指す。

具体的な研究の方向性として、**Scalable Oversight**、**Learning Theory**、**Heuristic Arguments**、**Game Theory**、**Personas**などを挙げ、これらの相互作用から「到達可能均衡」「ノブの把握と設定」などの新発見が生まれる可能性に触れている。

### なぜ今必要なのか

現在のAIシステムはまだ「ややAligned」で острые端もあるが、業界はこれらの失敗をモニタリングし対処する方法を見つけた。しかし、AIシステムがより知的になり、人間が越来越多的核心研究をAI系统に委ねるようになり、さらにAI系统が自律的な递归的自己改善（RSI）を通過し始めたら、より良いAlignment技術が必要となる。Sequentは独立性を持つことで、最悪の場合「叫ぶ」ことを躊躇しないことを約束している。

> **参考**: [Sequent Launch](https://www.sequent.org/launch)

---

## FrontierCode：Cognitionが開発した実践的なcoding評価基準

Cognition（Devinの開発者）は、新たな难的codingベンチマーク**FrontierCode**を公開した。このベンチマークの最も優れた点は、その难しさ——最高性能のAIシステムでも**13.4%**というスコアしか達成できない点にある。

### ベンチマークの構成

FrontierCodeは150のタスクからなり、3つの難易度层分かれている：

- **Diamond**（最難）：50タスク、**Claude Opus 4.8 = 13.4%**、GPT-5.5 = 6.3%、Claude Opus 4.7 = 5.2%
- **Main**（中難）：100タスク、34.3%、25.5%、23%
- **Extended**（易難）：150タスク、51.8%、44.8%、43.2%

### 他のベンチマークとの違い

SWE-Benchが2023年10月に導入され、既に饱和状態になっていることを考えると、FrontierCodeがどれくらいの期間有用的であるかは注目に値する。Jack Clarkは「2027年6月までにシステムが70%以上達成する可能性」と予測しており、さらには「Fable関連のスコアが~30%と发表された不久後なので、もっと早く達成されるかもしれない」と付け加えている。

### 主な特徴

- **20名のオープンソース開発者が関与**：各タスクに40時間以上を费やし、単一のPRだけでなく、複数のPRチェーンやfreeformリクエストから手動選択
- **コードマージ可能性の評価**：正確性、テスト品質、范围規律、スタイル、コードベース標準の遵守度を综合評価
- **品質管理パイプライン**：对手的テスト、キャリブレーション、マルチステージレビューを実装

> **参考**: [FrontierCode (Cognition)](https://cognition.ai/blog/frontier-code)

---

## Xiaomi MiMo-V2.5-Pro-UltraSpeed：1000トークン/秒の推論速度

中国Xiaomiが**MiMo-V2.5-Pro-UltraSpeed**を発表。この1兆パラメータLLMは、FP4量子化、DFlash（ブロックレベルマスク並列予測に基づく投機的デコード技法）、TileRT（Tile AI開発の推論高速化ソフトウェア）と組み合わせることで、**8-GPU ком母親nodeで1000トークン/秒**を達成した。

### 技術的特徴

Xiaomiはモデルとソフトウェアスタックを共同設計したことが高速化の鍵としている。FP4量子化でメモリ効率を向上させ、DFlashという投機的デコード手法で生成速度を加速。TileRTは kommVirtuelleハードウェアでのLLM推論を最適化する专门ソフトウェア。

### 意味すること

「より多くければ異なる」という表現があるように、より多くのトークンをより早く生成できることは、これまでに考えられなかったタスクを実現可能にする——例えば、ソフトウェアのリファクタリングを飞行中に実行するような用途が考えられる。また、中国企業にとって_EXPORT制御_の下で高性能ハードウェアへのアクセスが制限される中、既存のハードウェアでパフォーマンスと効率を最大化する努力が強まっていることも示唆している。

> **参考**: [MiMo-V2.5-Pro-UltraSpeed (Xiaomi MIMO)](https://mimo.xiaomi.com/blog/mimo-tilert-1000tps)

---

## AARRI-Bench：AIの研究 INTERN 能力を評価するベンチマーク

西安交通大学と西安電子科技大学の研究者が、**Act As a Real Research Intern (AARRI-Bench)** を開発した。82のタスクからなり、「人間の研究者にとっては简单だが自律エージェントにとっては難しいタスク」を中心に设计されている。

### 評価维度

- **Context**：学術分野の発展における上下文への 민감性
- **Mindset**：自律的な学術的推論と自己方向修正能力
- **Hands-on**：技術的熟達度
- **Interaction**：既存ツールの活用と人間との協調

### 性能結果

最高性能は**Claude-Opus-4.7 + Mini-Swe-Agent harnessで68.3%**、以下DeepSeek-v4-Flash (~60%)、GPT-5.3 Codex、Kimi-K2.6、Qwen-3.6-Plus 등이続いた。

---

## 考察：評価基準の军拡競争

これらの発表は、AIシステムの能力的向上の裏側で、「何を测量するか」という評価基準の世界でも激しい竞争が起きていることを示している。FrontierCodeが示す「实践的な代码品質」評価、AARRIが挑む「研究補助能力」の定式化、そしてSequentが问题提起する「Alignment泛化」という根本的な課題——これらはすべて、AIが「単にタスクを実行できる」から「本当に信頼できる伙伴」へと进化过程中的重要な试金石となる。

---

## 参考リンク

- [Sequent Launch](https://www.sequent.org/launch)
- [FrontierCode (Cognition)](https://cognition.ai/blog/frontier-code)
- [MiMo-V2.5-Pro-UltraSpeed (Xiaomi MIMO)](https://mimo.xiaomi.com/blog/mimo-tilert-1000tps)
- [ChinaHeritaQA Dataset (GitHub)](https://github.com/boleima/ChinaHeritaQA)
- [Import AI Newsletter](https://jack-clark.net)

---

*（本文の情報は2026年6月20日時点のものです）*
