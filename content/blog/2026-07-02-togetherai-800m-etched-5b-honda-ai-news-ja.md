# AI開発ニュース 週間まとめ（2026年7月第2週・前半）

2026年7月第1週は、AI業界全体で大型調達と規制動向が同時多発した週だった。Together AIが$800M調達で評価額$8.3Bに跳ね上がり、オープンソース特化型neocloudの注目度がさらに高まった。またNVIDIA競合のEtchedが$5B評価額・$1B売上の快挙、Android向けAI агент框架OpenClawの正式版がリリースされるなど、エコシステム拡大が加速している。

---

## Together AI、$800M調達で評価額$8.3B — neocloud戦争の行方

2026年7月1日（米国時間）、**Together AI**が$800M（日本円換算約1,200億円）の大型調達を完了し、評価額を$8.3B（ 約1兆2,400億円）に引き上げることに成功した。リード投資家はAramah Venturesが務め、2025年初頭の前回調達時（$3.3B評価額）から短短1年半で估值が2.5倍に成長した。

**Together AIの差別化:**
- **オープンソースモデル特化**: Llama、Mistral、Falconなどの先行例モデルを 전문적으로ホスティングするneocloud
- **API через自律型AIサービス**: モデル訓練・微調整・推論を единыйプラットフォームで提供
- **Percy Liang（CEO）**: Stanford大学教授でMIT博士、`ALACE`や`SWIFT Bench`などAI評価基準の制定者

**競合との比較:** 同じneocloud我可ではCoreweaveが2025年に$8B調達を実现しており、GPU仮想化・分散訓練の战场上では既に多家絡みが加速している。Together AIの強みは「学術界との太强太快 связи」と「 открыт模型の先行投資」で、Microsoft AzureやGoogle Cloudとは一線を画している。

**技術的課題:** GPU不足の年为、AI neocloud全体の成長を限制する要因となっている。NVIDIA H100/H200の供給不足が改善されるまで、各社の算力確保競争は継続する可能性が高い。

**[TechCrunch原文](https://techcrunch.com/2026/07/01/neocloud-together-ai-raises-800m-leaps-to-8-3b-valuation/)**

---

## Etched、NVIDIA競合で$5B評価額・$1B売上を記録

2026年6月30日、**Etched**がNVIDIA製のAI推論チップに対する競合として、$5B評価額と$1B契約売上を同時に報告した。Etchedは khusus AI推論特化型のASIC（Application-Specific Integrated Circuit）を開発しており、汎用GPU比で推論コストを大幅に削減できるとしている。

**技術的ポイント:**
- **Transformer特化型ASIC**: 「灼龍」アーキテクチャを採用 しTransformer計算に最適化
- **$1B売上**: 既に複数のハイパースケーラーがEtched製チップ的发注を確定
- **エネルギー効率**: NVIDIA H100比で推論時の消費電力を最大70%削減との主张

**開発者角度看:** Etchedの快走は、「LLM推論は汎用GPUじゃなくてもいい」という認識が業界に定着しつつある証拠だ。今後は推論特化チップの市場が急速に拡大し、NVIDIAの独秀が崩れ始める可能性がある。

**[TechCrunch原文](https://techcrunch.com/2026/06/30/nvidia-competitor-etched-hits-5b-valuation-1b-in-sales-for-ai-chip/)**

---

## Honda、データセンター向けバッテリー生産に参入

2026年7月1日、**Honda**がデータセンター向け蓄電池の本格生産を開始すると明かした。EV向けで培ったリチウムイオン電池技術を、数据センター向けの定置型ストレージシステムに転換する戦略だ。

**ビジネス的背景:**
- 米国企業でデータセンター電力需要が急増する中、エネルギー storageの確保が重要課題に
- HondaはSony Energy Devicesとの合弁企業を通じて、定置用リチウムイオン電池パックを量产
- 「Hondaが数据中心向け电池を生产」という异业种コラボレーションの新颖性

**AI業界への影響:** AI訓練・推論には大量的电力が استهلاكされるため、エネルギー企業のAI業界への参入が加速している。今後は電力会社、ガス会社、甚至uma自動車メーカーまでがAIインフラの「電力供給者」として voixを上げる可能出现がある。

**[TechCrunch原文](https://techcrunch.com/2026/07/01/even-honda-is-pivoting-to-data-centers/)**

---

## Cloudflare、AI企業に出版コンテンツへの支払いを義務化

Cloudflareは7月1日、痛い波紋を呼んだ発表を行った。同社がAI企業に対し、2026年9月15までに検索用Web巡回ボットとAI訓練・Agent用のボットを分离するよう要求する「新ポリシー」を敢行した。

**技術的ポイント:**
- CloudflareはAIBOT動作者清单（Allowlist/Rejectlist）の管理を2026年Q4までに推進予定
- 出版社はCloudflare経由で「自サイトへのAI巡回」をオプトアウト（拒否）できるようになる
- 违反した場合、`Zone Lockdown`や`Rate Limiting`といったアクセス制限が自動適用される

**背景には出版社の苦情:** AI企業（DeepSeekやOpenAI、Anthropic社等）がWebサイトを巡回する際、検索用ボットとAI訓練用ボットを区別なく運用している现状があり、出版社は「検索流入ではなく、AI訓練のためにコンテンツが吸い上げられているのに、対価が支払われていない」と主張している。

**[TechCrunch原文](https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/)**

---

## Anthropic Claude Science、科学研究者向けAIワークベンチを正式ローンチ

2026年6月30日、Anthropicが**Claude Science**を正式に立ち上げた。MIT Technology Reviewの報道によると、制药会いんでビネット経営者や研究者を对象としたイベントで発表され、Claude Codeがソフトウェア開発者向けであるのに対し、科学研究者のための自律型AIエージェントとして位置づけられている。

**主な特徴:**
- **computational biologyやdrug developmentに強味**: 生命科学向けのツールPlugins导入济み
- ** единый環境**: データベース、パイプライン、ツール間を跳转する必要がない統合ワークベンチ
- **自家研究にも活用**: 稀少・疏な疾病向け药物研究中にも投入使用

**Anthropicの戦略:** Claude ScienceはClaude CodeやClaude Coworkと同じステータスに昇華されており、科学応用への本気度が示されている。「新しいモデルを作るのではなく、ワークフローで科学家を取る」という泷り着いた戦略が特徴的だ。

**[TechCrunch原文](https://techcrunch.com/2026/06/30/anthropics-claude-science-bets-on-workflow-not-a-new-model-to-win-over-scientists/)**

---

## Amazon、$1B規模の花形開発エンジニア（FDX）組織を Launch

2026年6月30日、Amazonが新しい$1B規模の「花形開発エンジニア（Frontier Development Engineers / FDX）」組織を立ち上げた。OpenAIのFei Fei Li氏率いるSafetyチーム や、Anthropicの花形開発チームに続く形で、Amazonも大型投資に踏み切った。

**組織的特点:**
- **企業への Embedding**: エンジニアが顧客先に常駐し、特注AI Agentsの構築を担当
- **「高速配備と顧客自立」の重視**: 導入後の持续적サポート보다、即座に成果を出すことを最優先
- **AWSとの连携**: BedrockやSageMaker的基础上に立つカスタム агент

**競合分析:** OpenAIが「 мягкая связь」経由で企业客户提供している花形チームと、直接競合する形だ。Amazonの強みはAWSインフラとの紧密な統合で、大企业顧客にとって「Amazon内に閉じたソリューション」は嗓味が daqui ない。

**[TechCrunch原文](https://techcrunch.com/2026/06/30/amazon-launches-new-1-billion-fde-org-following-openai-and-anthropic/)**

---

## X（Twitter）、MCP Serverを正式提供 — AIツールとの接続が簡単に

2026年6月30日、X（Twitter）がホスト型**MCP Server**の提供を開始した。Model Context Protocol（MCP）は、AIアプリケーションが外部ツールやデータソースに标准的に接続するためのプロトコルで、GoogleやAnthropicも支持を表明している。

**技術的背景:**
- **MCPとは**: AI模型が外部APIやデータベースに标准的にアクセスするための プロトコル（2024年11月にAnthropicが提唱）
- **XのMCP Server**: XのAPIに、MCPプロトコル経由でAIアプリケーションからアクセス可能に
- **开发者影響**: これまではX APIへのアクセスに独自のOAuth処理が必要だったが、MCP対応で简单化了

**今後の展望:** MCPは「AI時代のUSB端口」としてIANO可能性がある。Xだけでなく、Google Workspace、Slack、GitHubなどもMCPサーバーを提供开始しており、标准化の動きが加速している。

**[TechCrunch原文](https://techcrunch.com/2026/06/30/x-now-offers-an-mcp-server-to-make-its-platform-easier-for-ai-tools-to-use/)**

---

## 参考リンク

- [Neocloud Together AI raises $800M, leaps to $8.3B valuation - TechCrunch](https://techcrunch.com/2026/07/01/neocloud-together-ai-raises-800m-leaps-to-8-3b-valuation/)
- [Nvidia competitor Etched hits $5B valuation, $1B in sales for AI chip - TechCrunch](https://techcrunch.com/2026/06/30/nvidia-competitor-etched-hits-5b-valuation-1b-in-sales-for-ai-chip/)
- [Even Honda is pivoting to data centers - TechCrunch](https://techcrunch.com/2026/07/01/even-honda-is-pivoting-to-data-centers/)
- [Cloudflare's new policy pushes AI companies to pay for publishers' content - TechCrunch](https://techcrunch.com/2026/07/01/cloudflares-new-policy-pushes-ai-companies-to-pay-for-publishers-content/)
- [Anthropic's Claude Science bets on workflow, not a new model - TechCrunch](https://techcrunch.com/2026/06/30/anthropics-claude-science-bets-on-workflow-not-a-new-model-to-win-over-scientists/)
- [Amazon launches new $1 billion FDE org, following OpenAI and Anthropic - TechCrunch](https://techcrunch.com/2026/06/30/amazon-launches-new-1-billion-fde-org-following-openai-and-anthropic/)
- [X now offers an MCP server to make its platform easier for AI tools to use - TechCrunch](https://techcrunch.com/2026/06/30/x-now-offers-an-mcp-server-to-make-its-platform-easier-for-ai-tools-to-use/)

---

*（本文の情報は2026年7月2日時点のものです）*
