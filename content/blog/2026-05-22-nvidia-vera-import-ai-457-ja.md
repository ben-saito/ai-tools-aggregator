# NVIDIA Vera CPU出荷開始、Import AI 457号：AI安全保障と最適化器の最前線

2026年5月22日、生成AI/OpenAI開発の世界は{\"agentic AI\"}の実現化が急速に進んでいる。NVIDIAは独自CPU「Vera」を米大手AIラボに出荷開始し、ミシェル・デルはAIインフラ投資が2025年内に3〜4兆ドルに到達すると予測した。一方、Import AI 457号では、\"AI Stuxnet\"と呼ばれる高精度計算软件を標的とする20年前のウイルス\"Fast16\"の解析结果や、最適化器\"Muon\"の致命的欠陥的发見とAuroraの提案など、重厚な技術解析が届けられた。

---

## NVIDIA Vera CPUがAIラボに到着： Jensen Huang「CPUの新しい瞬間」

NVIDIAは5月18日、同社初となる独自設計CPU「**Vera**」の第一批を>Anthropic</b>、OpenAI、SpaceXAI、Oracle Cloud Infrastructureの4先に手渡しした。Ian Buck NVIDIA副社長が直接届けに赴いた。

VeraはNVIDIAが3月のGTCサンノゼで発表したAI推論・agetoricワークロード専用のCPUだ。従来のコア密度重視アーキテクチャに対し、Veraは88個のOlympusコア、1.2TB/sのメモリ帯域幅、そしてコアあたり50%高速な 성능を実現した。AIエージェントが実行するサンドボックス起動、ツール呼び出し、オーケストレーション、长文脈検索这些都是すべてCPUのワークロードであり、「回答から行動へ」とモデルが迁移する今、CPUへの需要はかつてない规模で膨らんでいる。

Dell Technologies Worldの基調講演では、Jensen HuangがNVIDIAのポートフォリオ全体を背景に\"useful AI\"の时代到来を宣言した。「何か月かかっていたものが数週間に、数週間かかっていたものが数日に、数日かかっていたものが数時間に。これは生産性の面では大きな変革だが、計算要件の面では途方もないジャンプだ」とHuangは述べた。

---

## Dell AI Factory with NVIDIA：推論コスト1/10へ

Michael Dell氏が同日に行ったDell Technologies Worldの演讲では、AIインフラ投資の規模が初めて定量的に示された。

> 「世界のAIインフラ投資は2025年に3〜4兆ドルに到达し、トークン消費量は同じ期間に3,400%増加する」

Dellは**Dell AI Factory with NVIDIA**の强化を発表。Dell PowerEdge XE9812（Vera Rubin NVL72ベース）は、従来比でトークンあたり1/10のコスト抑制を実現。XE9880L/XE9885L/XE9882L屯拡張ラインアップに加わった。Lilly、Samsung、Honeywellなど5,000社以上がDell-NVIDIA AIファクトリー上でワークロードを実行しているという。

Vera CPU的单芯性能向上と并行処理능력이、企业のAI推論コスト構造を根本的に改变的できることが、Dell-NVIDIA共同展業で明確になった。

---

## Import AI 457号：AI Stuxnet、Muon最適化器の欠陥、Positive Alignment

Jack Clark運営のImport AI 457号（5月18日号）では、3つの重量级论題が展開された。

### Fast16：AI非拡散の前兆か

SentinelOneの研究者が、约20年前に見つかったウイルス\"**fast16.sys**\"の解析結果を发表了。このウイルスはLS-DYNA 970（衝突安全解析）、PKPM（構造解析）、MOHID（水理シミュレーション）などの高精度計算ソフトを標的にし、メモリ上で計算結果を改竄する。イランのJCPOA违反疑惑相关的核兵器開発研究にも使われた可能性が指摘されている。

惊人的是、この病毒的設計思想は「他の科学发展缓慢させる」ことであり、Import AIは「超知能が\"AI非拡散\"を 핵状態一樣に重要视する姿态」を見ている。

### Muon最適化器の致命的神経脱落

Tilde Researchの研究者は、流行的な最適化器「**Muon**」の深層的な欠陥を解明した。Muonで学習したMLP層では、学習率ウォームアップ期に30%以上のニューロンが永続的に\"死んだ\"状态になり、ステップ500時点では4つに1つ神经が機能しなくなる。レバレレッジスコアのバイモーダル分布が発生し、一部のニューロンは几乎ゼロの更新を受け取り、他の 뉴런は過大な更新を受ける。

この问题解决的ために提案されたのが「**Aurora**」だ。矩形状行列の레버리지考慮型Optimizerで、1.1Bパラメータートランスフォーマー（~100Bトークン）で最終損失2.26を達成。Muon（2.31）、NorMuon（2.33）を明確に 웃어り、MMLUでMuon比+10点改善した。

### Positive Alignment：安全を超えて繁栄へ

Oxford、Google DeepMind、OpenAI、Anthropicなど14機関が共同書いた位置論文は、「**Positive Alignment**」という新しい研究プログラムを提唱した。従来の“安全”対策が「メディアを避ける」「不快な真実を伝えない」の方向に偏るリスクを示し、AIシステムが「用户のより深い利益」（予測 versus 幸福の分離）を本当に支援できる設計の必要性を论述した。

---

## Spotify × ElevenLabs：オーディオブック自動生成の衝撃

Spotifyは5月21日、ElevenLabsの技術を活用したAIオーディオブック制作ツールのベータ版を6月に開始すると発表した。Spotify for Authorsプラットフォーム上で动作し、最初は英語のみでInvite-only提供。制作されたオーディオブックは他プラットフォームへの发布も可能ですぐに解放される。

Spotifyは2025年現在Audiobook+订阅者が100万突破 ARR 1億ドルに到达趋势이며、聴取時間が前年比60%増加している。2025年中にAudiobook+プランの更高 listening limit和学生・家族向け选项の導入も予定されている。

---

## Hark、6億ドル調達で\"人人ためのAI\"を目指す

AIラボ**Hark**は5月21日、Series Aで7億ドル（約1050億円）を調達した。評価額60億ドルで、70名の従業員とNvidia B200 GPUクラスタを稼働させている。

HarkのCEO兼創設者Chowdhuryは「現在のAIプロダクつは 软件を作る人を助けているが、一般の人々のための помощникは存在しない」と批评。AnthropicがCodingツール优先、OpenAIがIPOに向かいつつある中、Harkは\"universal AI interface\"と専用ハードウェアの两张でこの市場に切り込む。2025年夏までにマルチモーダルモデル首发予定。

---

## 参考リンク

- [NVIDIA Vera CPU Delivery](https://blogs.nvidia.com/blog/vera-cpu-delivery/)
- [Dell Technologies World Agentic AI](https://blogs.nvidia.com/blog/dell-technologies-agent-enterprise-ai/)
- [Import AI 457: AI stuxnet; cursed Muon optimizer; and positive alignment](https://importai.substack.com/p/import-ai-457-ai-stuxnet-cursed-muon)
- [Spotify launches ElevenLabs-powered audiobook creation tool](https://techcrunch.com/2026/05/21/spotify-launches-an-elevenlabs-powered-audiobook-creation-tool/)
- [Hark raises $700M Series A](https://techcrunch.com/2026/05/21/hark-raises-700m-series-a-for-its-secretive-universal-ai-interface/)

---

*本文の情報は2026年5月22日時点のものです。*