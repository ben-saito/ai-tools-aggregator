# AI開発ニュース：GitHub Copilot従量制請求に開発者反発、NVIDIA Vera CPU引き渡し、SoftBank巨大データセンター計画 — 2026年5月31日版

2026年5月の最終営業日となった本日、AI開発コミュニティの間で波紋を広げたトピックが改めて注目されている。GitHub Copilotの従量制請求への移行だ。TechCrunchが伝えたところによると、開発者たちから「冗談だ」という声が続出しているという。一方、NVIDIAは自社初となるAIエージェント向けCPU「Vera」をAnthropicなど主要AI Labに引き渡したばかりだ。SoftBankはフランスに最大750億ユーロのデータセンター建設を表明。生成AIを取り巻く投資・技術・課金体系の三つの線が同時に動いている。

---

## GitHub Copilot：従量制請求への移行に開発者から強い反発

GitHubは2026年5月、Copilotの料金モデルを従来の月額制から**トークンベースの従量制**へと大きく舵を切った。TechCrunchの報道によれば、この発表直後に開発者コミュニティSNSやRedditでは「What a joke（冗談だ）」という声が殺到したという。

従来、GitHub Copilotは開発者あたり月額10ドル（個人プラン）または月額19ドル（Businessプラン）の固定料金だった。新しいモデルでは、コードやドキュメントの生成消費量に応じてクレジットが消化される仕組みになり、大量にコード生成を行う開発者にとっては**予測不可能な請求書**になるリスクが指摘されている。

開発者たちの具体的な不満は次の三点に集約される:

- **コスト予測の困難**: 固定月額制なら「いくら使うかはわからないが、月額は一定」という安心感があった。従量制ではAI支援を気軽にお願いしなくなり、Copilot本来の目的が失われる可能性がある
- **心理的障壁**: 各プロンプトに「コスト」がつくことで、開発者がAIに質問や補完を依頼する頻度が下がり、むしろ生産性こそが低下する可能性がある
- **既存プロジェクトの解放的影響**: 固定料金で使い放題だった環境から、急に「使った分だけ請求」になると、最大手のヘビーユーザーほど痛手が大きくなる

GitHubは今回の料金変更の理由として、「AIモデルの推論コストの実態に見合った価格設計」を挙げている。しかし開発者からは「Copilotの収益モデルは事実上開発者の无偿労働に依存している」という批判もある。オープンソース活動への貢献度に応じた割引制度の導入を求める声も上がっており、Copilotの今後のpricing戦略が注目される。

---

## NVIDIA Vera CPU：AI Lab向け初CPUの引き渡し開始

NVIDIAは2026年5月18日、同社初となるCPU「**Vera**」を引き渡した。まずは世界有数のAI研究機関であるAnthropic、Google DeepMind、そしてTypingMindに優先的に配送された。NVIDIA CEO Jensen Huang監督はDell Technologies Worldでの講演で「Vera CPUはAIエージェントのために設計された」と明かしている。

Vera CPUのアーキテクチャ上の特筆点は次のとおり:

- **AI Factory特化設計**: エージェント型AI推論のワークロードに特化したコア構成。Vera NVL72などのNVIDIAシステムと統合することで、LLM推論コストを従来の10分の1に引き下げることを目標
- **大規模メモリバンド幅**: エージェントが長時間のコンテキストウィンドウを処理する際にボトルネックとなるメモリ帯域を大幅に拡張
- **競合产品价格**: Phoronixのレビューでは競合他社と比較して大幅に性能が向上していると評されている

NVIDIAはさらに「AI Factory」という概念を打ち出している。HuangCEOによると、AI Factoryは「電力をインテリジェンスに変換する工場」であり、エージェント型AI時代においてデータセンターの役割が根本的に変わることを示唆している。

Vera CPUの登場は、NVIDIAがGPUだけでなくCPUまで垂直統合掌握的戦略を進めていることを意味している。IntelやAMDが支配してきた汎用CPU市場とは一線を画し、AI推論ワークロードに特化した専用チップ市場にNVIDIAが本格的に参入したことになる。

---

## SoftBank：フランスに最大750億ユーロのAIデータセンターファンド

SoftBankは2026年5月30日、フランス国内に最大**750億ユーロ**規模のAIデータセンターファンド組成すると発表した。孫正義CEO为主导としたこの投資計画は、フランス政府との戦略的パートナーシップ協定に基づいており、同社のAIインフラ投資活動の中でも最大規模となる。

主なポイント:

- **投資規模**: 750億ユーロは約870億ドルに相当し、MicrosoftのMagma AIインフラ投資基金（約500億ドル）を大きく上回る
- **フランス国内**: フランス全土に複数の中規模から大規模データセンターを建設目标任务。再生可能エネルギー利用率の目標も設定されている
- **Arm Holdingsとの連携**: SoftBank傘下のArmが半导体IPの提供を通じて、技術面での貢献が予定されている

この発表は、NVIDIAのJensen Huangが唱える「AI Factory」概念とも符合する。AIモデルを大規模に訓練・推論するためには、电力供給、冷却、海峡算力が不可欠であり、そこに巨额の民間資本が流れ込んでいる。

AI開発者視点からは、データセンター建設の加速は「MaaS」（Model as a Service）のコスト低下とデータ可用性の向上を意味する。GPU不足が叫ばれる中で、インフラへの巨额投資の継続は、LLM民主化に向けた重要な指標となる。

---

## Meta AI Pendant：社が開発中のAI離れ身デバイス

Meta（旧Facebook）は2026年5月、AI離れ身デバイス「**AI Pendant**」の開発を進めていると伝えられた。TechCrunchが確認したところによると、このデバイスは常時稼働するAIアシスタントとして機能し、ユーザーの日常会話や作業を記録・分析することで、パーソナルAI体験の提供を目指すとしている。

開発の背景には、Rabbit R1やHumane AI Pinなどの先前iture AIデバイスが市場での成功を收められなかった教训がある。Metaのアプローチは以下の点で異なるとされる:

- **既存エコシステムの活用**: MetaのSNSプラットフォーム（Facebook、Instagram、WhatsApp）との連携により、単なる音声認識にとどまらない文脈理解を実現
- **オーディオ中心的设计**: カメラではなくマイク主体のインターフェースを採用し、プライバシーへの配慮を強調
- **コスト構造**: 低価格での提供为目标としており、ハードウェアとAPIコストの內製化により、利益率を制御

MetaのAI Pendantは、先行するGoogleの「**Gemini Spark**」（常時稼働する24時間AI助手）と直接競合する製品になる可能性が高い。Gemini Sparkは日常業務におけるAI支援の普及を狙いとしている。

---

## Claude Opus 4.8：Anthropicが「正直性」機能を強化

Anthropicは2026年5月28日、Claudeモデルの新バージョン「**Opus 4.8**」を発表し、最大の特徴は「モデルが錯誤を犯した時にそれをより正確に認める」能力を备えたことだという。

The Vergeの報道によると、Claude Opus 4.8では以下の点が改善されている:

- **錯誤時の自己修正**: これまではモデルが不確定な问题时「そのような可能性があります」々と曖昧な返答をする傾向があった。新バージョンでは確信度に基づき「それは私の理解では完全に正確ではありません」と明確に誤りを認める
- **努力の評価表示**: モデルが某一つのタスクにどれだけの計算資源を費やしたか、自己の確信度をより明確に示すようになった
- **インライン否認**: 用户的入力に誤りがある場合、それを具体的に指摘し、代替案を提案する

この「正直性」の強化は、Claudeが企業用途で採用される際に至关重要となる。AIの回答を信用してビジネス判断を行う场上、「AIが嘘をついている」（实际上はハルシネーション）ことは最大のリスクだからだ。

Anthropicは安全性の研究から出発した企業らしく、Opus 4.8では「aref knows what it doesn't know」（自分の知らないことを認識する）能力を特に強化したとしている。

---

## Adobe会話型AIエージェント：平凡な設計アシスタントという評価

Adobeは同日、Creative Cloud向けの新型**会話型AIエージェント**を公开发表した。The Vergeのレビューによれば、このエージェントは「平凡な設計Intern」という評語つきで評論された。

評論家の具体的な指摘:

- **できること**: 「このバナーのフォントを変えて」「このレイヤーを非表示にして」などの自然言語コマンドでPhotoshop、Illustrator、InDesignを操作可能
- **できないこと**: 創発的なクリエイティブ指引、品牌設計の文脈理解、複雑なレイアウトの提案
- **ポジショニング**: 完全自律型AIではなく、「初心者がツール操作を学ぶための対話型アシスタント」と位置づけ

Adobeのこの製品は、Microsoftの「Copilot」戦略と類似している。AdobeはAIによってクリエイティブ作業を自動化するのではなく、「AIがガイドしてユーザーが最終判断を行う」協調作業モデルを採用している。

このAIはAdobeの収益モデルにも合致している。Adobeはサブスクリプション形式で年收入の大部分を得ており、ユーザーがより多くの機能を覚えるほど離脱率が减り、LTV（顧客生涯価値）が向上する構造になっている。

---

## まとめ：料金・ハード・ソフトウェアが同時に動く5月の最終日

5月の最終営業日となった本日、生成AIエコシステムにおいて三つの動きが同時に観察された:

1. **課金体系**: GitHub Copilotの従量制移行のように、AI支援ツールのエコノミクスが根本的に見直されている
2. **ハードウェア**: NVIDIA Vera CPUの引き渡し開始、Meta AI Pendantなどの新型AIデバイスが続々と姿を現している
3. **ソフトウェア**: Claude Opus 4.8の正直性強化、Adobeの対話型AIエージェントのように、AIと人間の役割分担を再定義する製品が誕生

これらの変化は、生成AIが「技術実証フェーズ」から「実務適用・ビジネスモデル確立フェーズ」へと移行していることを示唆している。開発者にとって重要なのは、特定のツールやプラットフォームに過度に依存せず、AIとの協調作業を磨くことだ。Copilotの反発が示す通り、提供者都合の料金変更にはコミュニティ全体で対応する力がある。エコシステムの健全性は、一企業の一方的な決定だけで崩れるものではない。

---

## 参考リンク

- [GitHub Copilot new token-based billing spurs consternation among devs - TechCrunch](https://techcrunch.com/2026/05/30/what-a-joke-github-copilots-new-token-based-billing-spurs-consternation-among-devs/)
- [NVIDIA Vera CPU delivered to AI labs - NVIDIA Blog](https://blogs.nvidia.com/blog/vera-cpu-delivery/)
- [AI Factories: The New Infrastructure of Intelligence - NVIDIA Blog](https://blogs.nvidia.com/blog/ai-factories-the-new-infrastructure-of-intelligence/)
- [SoftBank 75B Euro French data centers - TechCrunch](https://techcrunch.com/2026/05/30/softbank-says-it-will-invest-up-to-e75-billion-to-build-french-data-centers/)
- [Meta AI Pendant - TechCrunch](https://techcrunch.com/2026/05/30/meta-is-reportedly-developing-an-ai-pendant/)
- [Claude Opus 4.8 honesty - The Verge](https://www.theverge.com/ai-artificial-intelligence/939094/anthropic-claude-4-8-opus-honesty-effort)
- [Adobe AI agent review - The Verge](https://www.theverge.com/tech/939686/adobes-conversational-ai-agent-is-a-mediocre-design-intern)
- [Microsoft 365 Copilot redesign - The Verge](https://www.theverge.com/tech/939273/microsoft-365-copilot-redesign)
- [Google Gemini Spark - TechCrunch](https://techcrunch.com/2026/05/30/i-put-googles-24-7-ai-assistant-gemini-spark-to-work-and-its-actually-pretty-useful/)
- [NVIDIA Research Advances Robotics - NVIDIA Blog](https://blogs.nvidia.com/blog/icra-research-robotics-simulation-to-real-world/)

---

*（本文の情報は2026年5月31日時点のものです）*
