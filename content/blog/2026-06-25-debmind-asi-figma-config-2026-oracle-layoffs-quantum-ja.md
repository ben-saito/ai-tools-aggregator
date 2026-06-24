# DeepMindがASI経路図公開、Figma AI協業基盤刷新、米欧の量子パスワード緊急移行　AI開発最新動向

2026年6月下旬、AI業界は複数のレベルで動きを見せている。Google DeepMindが人工超知能（ASI）への経路図を学術的に整理する論文を発表、FigmaはAI協業基盤を大幅刷新、OracleはAI投資資金源として大量解雇に踏み切った。米政府は量子コンピュータ時代に向けたパスワード移行期限を5年前倒しにするなど、政策の動きも加速している。

---

## Google DeepMind、ASI（人工超知能）への経路図を初めて公式に整理

Google DeepMindの研究者たちが、「AGIからASIへ」と題した論文を公開し、人工超知能の実現経路と論理的課題を初めて体系的に整理した。ASIとは「ほぼすべての領域で人間のExpertの集団的性能を超えるシステム」と定義され、単一のASIが数百万のインスタンスで構成されうることを指摘している。

**ASI実現の4つの主要経路:**

1. **スケール（計算・モデル・データの拡張）**: 現行のアプローチをそのまま拡大することでASIに到達できる可能性。ただしエネルギーとデータ供給の限界に直面しうる
2. **アルゴリズムパラダイムシフト**: TransformerやMoEのように基盤的な革新が起きれば、大きく跳躍できる。「テストタイムの適応的計算」や「現行のコンテキストウィンドウの限界克服」など
3. **再帰的自己改善（RSI）**: AIシステムが自ら次世代のAIシステムを設計・構築。再帰的改善のループが確立できれば、ASIへの急速な移行がありうる
4. **グループエージェント形成**: 複数のASIが協調してInstitutionのように振る舞い、個人の総和を超えた能力を実現

論文は「AGI達成からASI領域への移行は今後10〜20年以内に起こりうる」としており、「不可能なことを真摯に受け止めることでのみ、それに対処できる」と結論づけている。

---

## Figma、Config 2026でAI協業基盤を大幅刷新　コードレイヤー・Motion・Shaderに対応

デザインプラットフォームのFigmaは6月の年次カンファレンスConfig 2026で、design-as-code統合とAI協業を大幅に強化した。**Code Layers**、**Motion**、**Shader**の3層をdesign canvasに導入し、AI生成をcanvas内部に溶け込ませる戦略を打ち出した。

**主要新機能:**

- **Code Layers**: デザインとコードの並列表示。GitHubリポジトリからのインポート、AIによるコード生成・修正、agentを通じたprompt編集が可能
- **Motion**: アニメーション・トランジション・タイムラインを作業途中でcanvas上に直接編集。协作編集対応
- **Shader/WebGPU**: ディザリング、ピクセル化、ブラー、すりガラス風・クローム風のsurface effectsをdesign system内で直接適用

**AI×人間の協業フレームワーク「Weave」統合**: 去年買収したWeaveをFigma Canvasに「AI素材」として統合。複数のモデルと画像ソースを組み合わせたワークフローをdesignシステム内で直接構築できる。20以上のWeaveツールがすでにcanvas上で利用可能。

**ビジネス上の課題も浮上**: AI機能による成長と引き換えに、Figmaの利益率は92%から86%へと低下。OpenAI、Anthropic、Googleなどからのモデル借り上げが足を引っ張る構造だ。Activist investorからはAnthropicとの取締役関連に改善要求が出されている。CEOのDylan Fieldは「AIに『div centered』が解けない」という弱点すら指摘。「マシンは創発を廉価にする。判断は人間が存在すべき」というLoredana Crisan CDOの言葉がキーコンセプト。

---

## 再帰的自己改善スタートアップRecursiveが新境地　RSIの実現に向けた議論が活発化

AI研究スタートアップのRecursiveが、再帰的自己改善（RSI）の実証結果を公开发表した。同社は「目標に対してアイデア提案→実装→実験→評価→次の実験へのフィードバック」を自動化する研究ループを構築。NanoChat Autoresearch、NanoGPT Speedrun、SOL-ExecBenchで新たなSOTAを達成した。

RSIの実現可能性はASIへの最短経路の一つとされるが、最も定義が明確で評価が容易なドメインでの成果に留まる。「より定義が曖昧で測定が困難な領域」で同じ成果を上げられるかが次の課題。Jack Clark氏も「RSI元年」の到来として注目を集めている。

---

## Oracle、2.1万人解雇と450億〜500億ドルAI投資で債務拡大の賭け

Oracleが2026会計年度に**2万1,000人の解雇**（前年比12.9%減員）を実施すると同時に、**450億〜500億ドル**のクラウド・AIインフラ投資を表明した。OpenAI、xAI、AMD、NVIDIA、Metaなどを顧客に抱え、AIワークロード向けデータセンターを拡大入れている。

SEC提出書類では「AI技術の導入がworkforce reductionの一因」と陈述。アナリストの間では「一人当たり利益率が競合他社より低い」という指摘がある。BondholderはOracleが債務隠しをしたとして今年早些时候訴額を提起。OracleのAI賭けは、增加する債務とworkforce reductionのトレードオフで進められている。

---

## 米国政府、量子コンピュータリスク向けパスワード移行期限を2030年へ前倒し

米国政府は6月、量子コンピュータによる解読リスクに備えたパスワード移行の期限を**2030〜2031年**へと5年左右前倒しにするexecutive orderを公开发布した。2022年のNSA基準では2035年としていたが、ECC-256（Bitcoin・Ethereumなどで使用）の解読が30,000量子ビットで10日以内に可能になったとする今年3月の研究結果が改定の背景にある。

NIST後量子暗号（PQC）規格のML-KEMへの移行は「ドロップイン置換」ではなく、公開鍵サイズの拡大やインフラ再構築を伴う大がかりな作業になる。「敵の手に大規模量子コンピュータが落ちた場合」の脅威シナリオが現実味を帯びてきた。

---

## 参考リンク

- [DeepMind: From AGI to ASI (Google DeepMind)](https://deepmind.google)
- [Figma Config 2026 – The Decoder](https://the-decoder.com/?p=36964)
- [Import AI 462 – DeepMind ASI Pathways](https://jack-clark.net/2026/06/22/import-ai-462-superpersuasion-self-sustaining-ai-paths-to-asi/)
- [Oracle AI Investments – Ars Technica](https://arstechnica.com/ai/2026/06/oracles-21000-layoffs-help-drive-its-debt-fueled-ai-investments/)
- [Quantum Crypto Migration – Ars Technica](https://arstechnica.com/information-technology/2026/06/executive-order-bumps-up-deadline-to-move-off-quantum-vulnerable-crypto/)

---

*（本文の情報は2026年6月25日時点のものです）*
