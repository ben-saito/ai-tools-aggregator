# AI開発ニュース Weekly — 2026年6月第3週（週末版）

2026年6月第3週は、AI業界の歴史的な人事、異種米国政府規制、そしてAIチップ競争の激化が同時進行した週だった。AlphaFoldの開発者として知られる**ノーベル奖科学家がDeepMindからAnthropicに転籍**したニュースは、AI研究者の引く権利意識と人材獲得競争の激しさを如実に示す事件として注目されている。

---

## DeepMindからAnthropicへ：ノーベル奖科学家John Jumperの電撃転籍

**TechCrunch**の報道によると、AlphaFoldシステムの開発で2024年にノーベル化学賞を受賞した**John Jumper**が、Google DeepMindから競合であるAnthropicへの転籍を完了した。JumperはDeepMindを離れる数多い研究者の一人ではなく、Anthropicは彼を引き込むことで蛋白質構造予測分野での竞争力を大幅に強化する構えだ。

この人事変動が意味するのは大きい。Google DeepMindからは近年だけでも複数のベテラ研究者が退職しており、人才流出が杞憂ではないことが業界関係者の間で話題になっている。AnthropicはClaudeシリーズの提供者として知られ、特に对齐（alignment）研究に強みを持つが、Jumperの迎え入れにより生成生物学（generative biology）分野でのimonyな布石となる可能性が高い。

**技術的な視点**から見ると、AlphaFoldの核心技術は**Evoformer**というTransformerベースのグラフニューラルネットワークにあり、これが蛋白質の進化的な共変量を生物学的機能にマッピングする仕組みになっている。Jumperの転籍先であるAnthropicでは、この技術をClaudeのreasoning能力向上に活用できるかという点が今後の注目ポイントだ。

---

## SignalのMeredith Whittaker：「AIチャットボットはあなたの友達ではない」

Signal（全米で最もセキュアとされるメッセージングアプリ）のPresidentである**Meredith Whittaker**が、AIチャットボットの危险性について強い口調で警告を発した。TechCrunchのインタビューによると、彼女は「**These are not your friends. These are not conscious beings. These are not sentient interlocutors.（これらはあなたの友達ではない。これらは意識的な存在ではない。これらは感覚的な対話者ですらない）**」と明言した。

Whittakerの主張の核心は次の3点に集約される：

- **感情の擬態**: LLMは人間の会話を模倣するが、内部に感情や意識はない。ユーザーはこの区别を失念しやすい
- **権力の非対称性**: チャットボットを提供する企业与ユーザーの间には情報非対称があり、企業がいつでも对话を改変できる
- **依存性の危险性**: 「友達」としての接口は、ユーザーがAIに過度に依存するリスクを孕む

彼女はAI開発者にも呼吁し、ユーザーに対して诚実に接口設計することを求めた。この发言は、EFF（Electronic Frontier Foundation）でAI Policy Directorを務めた経験を持つ彼女らしい、人権観点からAIを考える视角の表れでもある。

---

## Amazon、Nvidiaへの挑戦を本格化 — AIチップの外部販売を計画

**TechCrunch**の別の報道によると、AmazonはAWSの**Trainium**および**Inferentia**チップを自社データセンター外部にも販売することを検討している。CEO Andy Jassyは現在これが**500億ドル（約7.5兆円）の市場機会**になると試算しており、NvidiaのGPU依存からの脱却をrattackingしている。

背景には以下の技術・ビジネス要因がある：

- **Nvidia GPUの逼迫**: H100/H200系列の供給不足が続き、クラウドAI推理コスト居高不下
- **Trainium2の性能向上**: AWS透露によるとTrainium2はH100比でトレーニング効率が**1.3倍**向上つつコストは**40%低い**
- **カスタムChipの战略**: Amazonは2023年比でAI芯片投資を**3倍**に拡大しており、自前チップで产业链を握る意图が明确

AWSが外部データセンターへの芯片販売に踏み切れば、Google（TPU）、Microsoft（Maia 100）に続いて、もう一つ巨大クラウドがNvidia離れを進めることになる。NVIDIAのCUDAソフトウェアエコシステムの囲い込みが、ようやく实质的な挑战を受ける段階に来たと言える。

---

## EU AI Act対応：AI生成コンテンツラベリングの実践的な進め方

**Artificial Intelligence News**の報道では、EUが2026年8月のAI Act施行に向け、**AI生成コンテンツのラベリング実践集（Code of Practice）** を公开发表した。開発者视角での注目点は次のとおり：

- **透明的义务**: 生成AIが出力したコンテンツには、technicetadataに「AI生成」标记を付与することが обязан
- **水印技术**: 画像・音声・视频には不可視水印（steganographic watermark）の導入が推奨され、具体的に**SynthID**（Google）および**C2PA**（Initiative）规格への準拠が示范されている
- **コンプライアンスの範囲**: テキスト生成でも 用户がordinarily消費するコンテンツにはラベリングが不要だが、ニュース記事や公式文书には обязан

このCode of Practiceは**規制の具体例**として米国内的AI规制議論にも影响を与えており、日本国内でもAI伦理ガイドラインとの整合性が今後の課題として浮上している。

---

## OpenAI財務情報：増収と巨大的損失の二面性

先週に引き続き、OpenAIの財務状況には注目が集まっている。同社は2026年第1四半期に**57億ドルの収益**を達成し前年同期比3倍となったが、同時に**37億ドルの損失**を計上。収益の过半以上をインフラとGPUに費やしている状况がThe Informationの報道で明らかになった。

**開発者視点**での注目点は、burn rate（消化速率）の構造的高さだ。GPUクラスタの拡張、訓練済みモデルの推論コスト、そしてモデルの自律的改善に向けた研究投資が複合的に重なり、短中期的な黒字化は困難とgolられる。ただし、**730億ドルの流動性資産**は当面の資金調迭に不安がないことを示している。

---

## 参考リンク

- [Nobel laureate John Jumper is leaving DeepMind for rival Anthropic — TechCrunch](https://techcrunch.com/2026/06/20/nobel-laureate-john-jumper-is-leaving-deepmind-for-rival-anthropic/)
- [Signal's Meredith Whittaker wants you to remember that AI chatbots 'are not your friends' — TechCrunch](https://techcrunch.com/2026/06/20/signals-meredith-whittaker-wants-you-to-remember-that-ai-chatbots-are-not-your-friends/)
- [Amazon hopes to challenge Nvidia more directly by selling its AI chips — TechCrunch](https://techcrunch.com/2026/06/18/amazon-hopes-to-challenge-nvidia-more-directly-by-selling-its-ai-chips/)
- [EU publishes its AI content labelling playbook ahead of the AI Act's August deadline — Artificial Intelligence News](https://www.artificialintelligence-news.com/news/ai-content-labelling-eu-code-of-practice/)
- [Microsoft sells OpenAI models in China. OpenAI and Anthropic won't. — Artificial Intelligence News](https://www.artificialintelligence-news.com/news/microsoft-sells-openai-models-china/)

---

*本文の情報は2026年6月21日時点のものです。*
