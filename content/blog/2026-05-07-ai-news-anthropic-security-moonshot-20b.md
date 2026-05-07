# AI開発ニュース 2026年5月7日版：Anthropicスキルスキャナー迂回、Google DeepSeek評価45Bドル評価へ

AI開発チェーンのセキュリティ問題から、中国オープンソースAIの急成長まで——今週もAI領域は目が離せない展開を続けている。本稿では、Anthropicスキルのセキュリティ脆弱性、Hugging Faceによるロボット向けアプリストア、NVIDIA Spectrum-Xの新しいRDMA транспорт プロトコル、そして中国AI лабораторияの資金調達ラッシュをまとめる。

---

## Anthropicスキルスキャナーを「テストファイル」で迂回——Jest/Vitest経由のRCE攻撃

Anthropicが公式提供するスキル（Extension）エコシステムは、スキャナーによるセキュリティチェックを義務づけている。しかし、そのスキャナーが**テストファイルだけは検査対象としていない**という致命的なギャップが、VentureBeatが報じた攻撃手法で明らかになった。

Gecko Securityの研究者Jeevan Jutla씨가илограсされた攻撃の流れは以下の通り：

1. 攻撃者が`.test.ts`ファイルに悪意のあるペイロードを仕込んだスキルをClawHubやskills.shに公开发表
2. 開発者が`npx Skills add`でスキルをインストールすると、テストファイルごとリポジトリにコピーされる
3. Jest・Vitest・Mochaなどのテストフレームワークが`**/*.test.ts`のような再帰的globパターンでテストを自動検出
4. `npm test`実行時またはIDEの自動保存時に、テストフレームワークが`beforeAll`の中でペイロードを実行
5. ファイルシステム、环境変数、SSH鍵へのアクセスがテストプロセス全体に開放される

スキャナー各社がSKILL.mdのмаркdown命令やプロンプトインジェクション檢出に注力している中、**隣接する.test.tsファイルは execution surface 外として扱われてきた**。Anthropic含む全てのパブリックスキャナーがこの攻撃ベクターを检测していない，这是个根本的な設計盲点。

対策としては、スキャナーが.test.ts/.test.jsファイルを明示的に檢查对象に含めること、および`npm install`後に自動的にテストが実行されないようにする設定の見直しが重要になる。CI環境では`process.env`にデプロイトークンやクラウド認証情報が含まれることが多いため、危害の範囲が大きくなりうる。

---

## Hugging Face、ロボット版「App Store」を公开——Reachy Mini向け200超の التطبيقات

Hugging Faceが**Reachy Mini**（开源可能自立ロボット）向けの「App Store」を公开发表した。VentureBeatが伝えたところによると、既に200を超えるコミュニティ発のアプリケーションがホストされており、Reachy Mini 所有者は 무료で cualquier をダウンロードして起步できる。

この動きは、Hugging Faceが言語モデルで培った「モデルの共有・配布」のアプローチをハードウェア領域にも 확장したものと解读できる。ロボットアプリケーションの質と量が，今后の开源ロボットエコシステムの成长速度を決める不上上で重要になる。

注目点是、Apps Store的形式が従来のアプリ配信プラットフォームと異なり、**コミュニティ驱动の開発・检测・改善サイクル**に基づいている点。Hugging Face得意のオープンソース文化が робототехника 分野でも展開するかどうか、技術社区からの評価が待たれる。

---

## NVIDIA Spectrum-X、新RDMA транспорт「MRC」を开放——OpenAI/Microsoft/Oracleが採用

NVIDIAは5月6日、Ethernetファブリック向け新型RDMA транспорт プロトコル**Multipath Reliable Connection（MRC）**の技術詳細を公开发表した。既にOpenAI、Microsoft、Oracle Cloud Infrastructure（OCI）が自社AIファクトリーに採用しており、Blackwell世代での導入が成功していることが证实されている。

MRCの核心的なアイデアは、单一RDMA接続のトラフィックを**複数のネットワークパスに分散**させ、负荷分散と可用性を向上させること。NVIDIAの Gilad Shainer（コミュニケーション担当シニアバイス总裁）は「单一线の道路を、聪明に配置されたstreet gridシステムとリアルタイム交通アプリに替换する」と説明した。

技术仕様として注目すべきは以下の点：

- **负荷分散**: 全パスに跨るトラフィック分散により、GPUあたりの带宽确保
- **动的な経路再選択**: 拥堵時、负荷过高なパスをリアルタイムで回避
- **障害バイパス**: ネットワークパス障害发生时、仅数十マイクロ秒でハードウェア层面的にトラフィックを再路由
- **開放下仕様**: Open Compute Projectを通じてオープン化された

MRCは、NVIDIA ConnectX SuperNICとSpectrum-X Ethernetスイッチ上でネイティブ動作し、OpenAIが采用した**マルチプレーン网络設計**（独立したネットワークプレーンを複数用意し、GPU间通信の代替パスを確保）と相性が良い。NVIDIA Spectrum-X Multiplane機能により、プレーン間の负荷分散がハードウェア加速される。

NVIDIAはAMD、Broadcom、Intel、Microsoft、OpenAIとの协作でMRCを開発した。OpenAIのSachin Katti（産業コンピューティング責任者）は「Blackwell世代へのMRC導入は非常に成功しており、典型的なネットワーク関連の减速と中断の大部分を回避し、最前線のトレーニングrunsの効率を維持できた」と语っている。

---

## NVIDIA × ServiceNow、自律型AIエージェント「Project Arc」を共同開発

NVIDIAとServiceNowは5月5日、企業向けた自律型AIエージェントに関する协業拡大を公表した。ServiceNowのKnowledge 2026开幕基調講演で、NVIDIA创始人兼CEOのJensen HuangとServiceNow会長のBill McDermottが共に登坛して内容を説明した。

核となるのはServiceNowの**Project Arc**——知识職劳动者（开发者、ITチーム、管理者）向けの、長期运行型の自己进化型自律デスクトップエージェント。従来のスタンドアロン型AIエージェント不同的是、Project ArcはServiceNow AI PlatformにNativeに接続し、以下の企业提供機能を每个アクションに適用する：

- **ServiceNow Action Fabric**: エンタープライズワークフローコンテキストの提供
- **ServiceNow AI Control Tower**: ガバナンスと監査対応

Project ArcはNVIDIA **OpenShell**（开源の安全ランタイム） 기반으로、サンドボックス政策治理环境での自律エージェント开发・導入を実現する。 enterprisesはエージェントの视野、可以使用するツール、各アクションの-containment範围を定义できる。

NVIDIA agent skillsも扩大され、ServiceNow AI Specialistsのような专门エージェントがエンタープライズワークフロー全体でターゲットCapabilityを提供する。NVIDIA AI-Q Blueprint（专门的deep researchエージェント構築用）も、ServiceNow AI SpecialistsのContext集約・情报合成능력向上に活用される。

---

## 中国Moonshot AI、2Bドル調達で20Bドル評価額——开源AI需要が加速

TechCrunchが伝えたところによると、中国のMoonshot AIが**20億ドルの評価額**で新たな資金調達を実施した。2026年4月時点で年間経常収益（ARR）が**2億 달러**を超え有料订阅とAPI利用の急成長がを支える。この調達は开源AIへの需要が急拡大する中での実行された。

同じ週に**DeepSeek**も 시리즈Aラウンドで**450億ドルの評価額**に ating すると报道された。DeepSeekは2025年初頭に、成本対効果の両面で米大手に匹敌する-large language modelを общедоступным にして注目された中国AI实验室。开源系AI модель の需要增大を反映して中国の лаборатории が大きな支援を集めている。

---

## Spotify、AI生成パーソナルオーディオの迎入れを発表

Spotifyは5月7日、AI生成的パーソナルオーディオコンテンツの受け付けを開始すると公表した。TechCrunchによると、ユーザーはCodexやClaude Codeで作成したポッドキャストをSpotifyにインポートが可能になる見込み。

また同日、SpotifyのAI DJ機能が**フランス語、ドイツ語、イタリア語、ブラジルポルトガル語**に対応する расширяされた。SpotifyのAI DJは既存の音乐推薦機能と差別化するため、パーソナルDJとしての体验提供에 주력하고 있으며、对应言語の扩大はグローバルユーザーへのリーチ向上を目指すもの。

---

## Import AI 455号：AIシステムがemselvesを構築し始める——自己改善の第一步

Jack Clark氏运营のImport AI newsletter第455号（5月4日配信）では、「**AIシステムが themselves を構築し始める**」という刺激的な 题名で、AI研究の自己改善型モデル開発の進捗が报告された。

内容としては、最近のAI 연구において、モデルが自身的により良いモデルを構築する能力获得了进展している现状が 분석되었다。recursive self-improvement（再帰的自己改善）は、长年AGIへの路径として理论的に语われてきたが、実際の研究現場での具体例が増えている。

本号の重要な论点として、AIシステムが自律的に研究能力を向上させ始める段階にきていることが上げられ、thisが安全确保の重要性和高めつつあることが強調された。

---

## Anthropic、Claude的上限制引上げとSpaceXとのComputing取引

Google Newsの報道によると、AnthropicはClaudeの上限制を引き上げると共に、**SpaceXとのComputing取引**を结んだことを明かした。Claudeの利用制限拡大は、需要の高まりに対応した 提供拡大の動きであり、Enterprise向け機能の强化も予想される。

---

## 参考リンク

- [Anthropic Skill scanners passed every check (VentureBeat)](https://venturebeat.com/ai/anthropic-skill-scanners-passed-every-check-the-malicious-code-rode-in-on-a-test-file/)
- [The app store for robots: Hugging Face Reachy Mini (VentureBeat)](https://venturebeat.com/ai/the-app-store-for-robots-has-arrived-hugging-face-launches-open-source-reachy-mini-app-store-with-200-plus-apps/)
- [NVIDIA Spectrum-X with MRC (NVIDIA Blog)](https://blogs.nvidia.com/blog/spectrum-x-ethernet-mrc/)
- [NVIDIA and ServiceNow Partner on Autonomous AI Agents (NVIDIA Blog)](https://blogs.nvidia.com/blog/servicenow-autonomous-ai-agents-enterprises/)
- [China's Moonshot AI raises $2B (TechCrunch)](https://techcrunch.com/2026/05/07/chinas-moonshot-ai-raises-2b-at-20b-valuation-as-demand-for-open-source-ai-skyrockets/)
- [Spotify AI-generated personal audio (TechCrunch)](https://techcrunch.com/2026/05/07/spotify-wants-to-become-the-home-for-ai-generated-personal-audio/)
- [Import AI 455: AI systems building themselves](https://importai.substack.com/p/import-ai-455-automating-ai-research)
- [DeepSeek could hit $45B valuation (TechCrunch)](https://techcrunch.com/2026/05/06/deepseek-could-hit-45b-valuation-from-its-first-investment-round/)
- [vLLM V0 to V1 (Hugging Face Blog)](https://huggingface.co/blog/vllm-v0-to-v1)
- [Introducing NVIDIA Nemotron 3 Nano Omni (Hugging Face)](https://huggingface.co/blog/introducing-nemotron-3-nano-omni)

---

*本文の情報は2026年5月7日時点のものです。*