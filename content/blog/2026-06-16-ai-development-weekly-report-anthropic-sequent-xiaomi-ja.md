# AI開発週次レポート：Anthropic政府対応、Sequent安全研究所、Xiaomi高速推論

2026年6月第3週は、米政府によるAnthropicの最強力モデル規制、Google MetaのFacebookへのAI Mode統合、SalesforceのFin買収、そして複数の技術的マイルストーンが同時発生的に発表された一周間だった。開発者にとって特に注目すべきは、新しいコーディングベンチマーク**FrontierCode**の登場と、Xiaomiによる**1000 token/s**の推論達成、そしてAI安全性を担う新非营利組織**Sequent**の設立である。

---

## 米政府、Anthropic Fable・Mythosモデルを規制——セキュリティ専門家が異議

6月9日にAnthropicがリリースした**Claude Fable 5**と**Claude Mythos 5**は、「社内史上最もCapabilitiesが高いモデル」とされ、Fable 5は「あらゆる generally availableなモデルを超える能力を持つ」と公式に宣言された。Mythos 5は同じ基盤モデルから安全策を一部解除したものとして位置づけられている。

しかし6月12日，也就是Fable 5発売からわずか3日後に、米政府は外国勢によるこれらモデルへのアクセスを遮断する措置を発動した。Wall Street Journalによれば、Amazon幹部とWhite Houseの会谈が端を発しており、研究者がFable 5からサイバー攻撃に悪用可能な情報を引き出す方法を報告したことが規制の引き金となった。

Anthropicは政府見解に従い全ての顧客向けアクセスを遮断。「狭い潜在的なジェイルブレイクの発見が、何百万人ものにデプロイされた商用モデルの回収理由になることに同意しない」と公式声明で述べた。

この措置に対し、数十名のセキュリティ専門家がWhite Houseに宛てた公開書簡で「危険だ」として規制解除を求める声を上げた。専門家らは、この規制がセキュリティ>defenderの能力を制限し、米国のサイバー防護力を弱体化させると主張している。

The Vergeの報道によれば、政府側の懸念はFable 5の一部の能力——特にハッキングやバイオウェポン関連の知識へのアクセス——に集中している。Anthropicは既にPentagonとの間でも別の紛争を抱えており、政府との二度目の衝突となった。

**開発者視点**: この一件は、**能力の高いモデル = 輸出規制対象**という新しい原則が確立されたことを示唆する。Fable/Mythosのような крайней能力强モデルがcommercial release後に政府命令でアクセス遮断されるというケースはまだ稀だが、規制当局の目が厳しくなる傾向は顕著である。モデル開発者はリリース前にSecurity reviewExpectationを調整する必要がある。

---

## Salesforce、Finを$3.6Bで買収——AI客服プラットフォームの大型統合

SalesforceがAI客服プラットフォームの**Fin**を買収し、$3.6B（約540億円）という大型取引が成立した。Finは自律型AIエージェントを活用した客服自动化プラットフォームで、Salesforceの既存製品群尤其是Agentforceブランドとの統合が主目的と見られる。

TechCrunchの報道では、Finの技術がSalesforceのCRMプラットフォームに組み込まれることで、企業の客服業務におけるAI自動化が大幅に加速するとされている。$3.6Bという評価額は、客服・サポート領域におけるAI企業の価値が引き続き高いことを示しており、Enterprise AI市場での consolidation（統合）が加速している現状を裏付けている。

**開発者視点**: 客服・サポート領域は、AIエージェントが最も実用的なインパクトを与えている場面の一つである。Finの自律型エージェント技術とSalesforceのCRM基盤の組み合わせは、「AI_nativeEnterprise workflows」の具体例として注目に値する。オープンソースの客服ボットを構築している開発者にとっては、エンタープライズ市場の統合に進路を変更するプレイヤーが出てくるという市場構造の変化も意識する必要がある。

---

## Meta、Facebookに「AI Mode」導入——公共情報を学習に活用

MetaはFacebookに新たな**AI Mode**を検索機能として導入した。ユーザーはFacebook検索時に「People」「Marketplace」に加えて「AI Mode」を選択できるようになる。AI Modeでは、Metaのプラットフォーム全体にわたりユーザーが公开发信した公共情報を信息来源として、AI生成結果を返す。

Facebook検索でのAI Modeの动作は、Metaが最近リリースしたReddit風ForumアプリのAI検索機能と同様である。ユーザーはMetaのAIにフォローアップ質疑を行うこともでき、従来のリンク罗列型の検索結果から、AIが整理・要約した情報提示への移行が正在进行中。

さらにMetaは、スポーツチームのジェリージャージをファン画像に合成するプリセットや、コラージュテンプレート提案など、写真を対象とした複数のAI功能も同時にリリースしている。

**開発者視点**: Metaのこの動きは、**searchからanswersへの转变**を象徴するものである。従来のWeb検索が десятки（数十）の blue linksを返していたのに対し、Metaは自有プラットフォーム上のユーザー生成コンテンツを知识源として、AI summarizationを提供する。開発者にとっては、「如何在特定平台上构建 AI search 体験」を検討する上で重要な事例である。

---

## Sequent——「Alignment is Not on Track」と題する新安全研究所

AIセキュリティInstituteのAlignmentチーム出身者と、TimaeusというAlignment理論スタートアップの研究者たちが合流し、新非营利研究組織**Sequent**を創設した。Sequentの表題は「Scale and Automation for Higher Confidence in Alignment」であり、資金的目的是「$100–150Mの初期資金調達成功后、*$*$1B以上の規模に拡大する用意がある」としている。

Sequentは、主要AIラボの「リアクティブ（反応的）なAlignmentアプローチ」とは異なる、「原则に基づいた置信度の高いAlignment技術」を目指す。彼らの批判如下：

> 「主要なAIラボのアプローチは、本質的にリアクティブであり、機能的な方法を提供するが、それらがいつ失敗するかを事前に把握できないという原則的な疑问にお答えしていない」

研究の方向性として、**scalable oversight**、**learning theory**、**heuristic arguments**、**game theory**、**personas**などを挙げている。特に、scalable oversight手法が収束する均衡点の種類を理解する「Reachable equilibria」や、学習理論とpersonasを組み合わせてトレーニング中に変更可能な変数を特定する「knowing and setting knobs」などに期待を示している。

設立者の一人であるJack Clarkも指摘しているように、**recursive self-improvement（再帰的自己改善）** が始まる前に、より良いAlignment技術が不可欠という認識が背景にある。AIシステムが自らより贤いシステムを構築し始める前に、「そのシステムが本当にAlignmentされているという原則的な置信度」を得る必要があるという問題意識である。

**開発者視点**: Alignment研究の最前線が、理論と実証の両面から着実に进展している。Sequentのアプローチは、「評価可能なAlignment」と「理論的な置信度」の間を埋めることを目指す点で、実用的なAlignment技術を探している開発者にも無関係ではない。Scalable oversightやlearning theoryの手法は、直接的な应用开来にも使える可能性がある。

---

## Xiaomi、1000 token/s を達成——推論速度競争の最新マイルストーン

Xiaomiは**MiMo-V2.5-Pro-UltraSpeed**を発表し、1兆パラメータ規模のLLMで**1000 tokens/秒**の生成速度を達成した。これは、コンシューマハードウェア上の8-GPUノードで実現されたものである。

Xiaomiが採用した技術要素：

- **FP4量子化**：モデル重みの精度を落とすことで計算量とメモリを削減
- **DFlash**：block-level masked parallel predictionに基づく投機的デコーディング手法
- **TileRT**：Tile AI開発した推論高速化ソフトウェアで、コンシューマハードウェア上での高效な推論を実現

注目すべきは、この高速推論が specialized hardware（CerebrasのWafer Scale Engineなど）ではなく、**commodity hardware（汎用コンシューマGPU）** 上で達成された点である。

**開発者視点**: 推論速度の向上は、「高速であればこそ可能出现する新しい用途」を开拓する。1000 token/sともなると、コードのその场でのリファクタリングや、リアルタイムでのドキュメント生成・修正、长文ドキュメントの瞬间解析などが实用レベルになる。コンシューマハードウェアでの高速推論は、エッジAIやローカルLLMの实用範囲を拡大するマイルストーンである。

---

## FrontierCode——Cognitionが提唱する次世代コーディングベンチマーク

Cognition（Devinの開発元）は、新たなコーディングベンチマーク**FrontierCode**を提唱した。FrontierCodeは「次世代のコーディングエージェントのためのベンチマーク」として位置づけられ、150のタスクが3つの難易度 tier（**Diamond**、**Main**、**Extended**）に分類されている。

FrontierCode的最大の特徴は、**タスクの难しさ**にある。現在の最高成績：

| 難易度 | Claude Opus 4.8 | GPT-5.5 | Claude Opus 4.7 |
|--------|-----------------|---------|------------------|
| Diamond | 13.4% | 6.3% | 5.2% |
| Main | 34.3% | 25.5% | 23.0% |
| Extended | 51.8% | 44.8% | 43.2% |

この难しさを保证するために、Cognitionは以下の点を強調している：

- **20名のオープンソース開発者が40時間以上かけて精选したタスク**：他のベンチマークが单一のPRからプログラム的に生成されているのに対し、FrontierCodeはマルチPRチェーンやfreeformリクエストからメンテナンス担当者が手选りしたタスクで構成される
- **コードのマージ可能性を評価**：パッ正当性がテスト通過だけでなく、既存コードベースの破壊、ビルドキメト、スタイルチェック、タスクのスコープ管理、コード規約への適合などを多面的に評価する
- **品質管理パイプラインの整備**：对手的テスティング、キャリブレーション、多段レビューを含む

**開発者視点**: SWE-Benchが2023年10月に登场してからすでに約2年半が経過し、饱和が進行している感觉がある。FrontierCodeは、これからのコーディングエージェントの进化を測定する新しい標準になる可能性が高い。Diamondで13.4%という成績は、Claude Opus 4.8をもってしてもほとんどのタスクが未解決であることを意味し，这是一个長い間 usefulなベンチマークとして機能することを示唆している。

---

## Import AI 461より——AIの生産性への影響と研究 интерни

Jack ClarkのImport AIでは、今週号で以下のトピックを取り上げている：

### AIの macro生産性へのインパクト

Chicago BoothのAlex Imas教授は、AIと生産性に関する文献の综合的分析を发表した。Key findings：

- **microレベルでの生産性向上は确认されている**： generative AIにより、某些タスクで50%以上の生産性向上が确认されている
- **macroレベルでの、生産性向上の実感はまだ**： aggregate productivity statisticsにはまだ积极的な影响が现れていない

この乖離の理由としてImasは以下を挙げている：

- **AI adoptionのendogeneity（内生性）**：早期の実験段階では、标准的な実践方法が見つからず、本领が引き出されていない
- **O-ring automation**： jobs множество（多数）の distinct tasksから构成され、AI帮助可能なタスクとそうでないタスクがあり、人才がボトルネックタスクに集中するためjobレベルの_speedupが見えにくい
- **初期投資による効率低下**： transformative general-purpose technologiesの採用当初测量される生産性が、投資・再编成・学習にリソースが割かれているため初期的に低下することが多い

### AI研究 интерни——AARRIベンチマーク

西安交通大学と西安電子科技大学の研究チームは、**AARR（Act As a Real Researcher）** семействоベンチマークを発表、其第一款は**AARRI-Bench**で、AIシステムが研究 интерниどの程度の仕事ができるかを評価する。

AARRI-Benchの82のタスクは4つのカテゴリーに分類：

- **Context**： 研究の広い文脈への 민감성
- **Mindset**： 自律的な学术的意思决定と自己修正能力
- **Hands-on**： 技術的熟练度を評価する実行志向のタスク
- **Interaction**： ツール活用と人间との適切な协调

各タスクはS1-適応、S2-統合、S3-革新の3段階の难度を持つ。

現在の最高成績はClaude-Opus-4.7 + Mini-Swe-Agent harnessで68.3%、次にDeepSeek-v4-Flashが約60%となっている。

**開発者視点**: AI协助の研究业务は、「単純な検索・要約」から「研究デザインの妥当性検証」「論文の真正性確認」「結果改竄検出」など、高度な判断が要求的タスクへと拡大している。AARRI-Benchのタスクは实际の研究プロセスにおけるAIの возможностиを测定する上で実用的である。

---

## 参考リンク

- [Meta、AI ModeをFacebookに導入（TechCrunch）](https://techcrunch.com/2026/06/15/metas-new-ai-mode-on-facebook-pulls-from-public-info-across-its-platforms/)
- [Anthropicモデルに対する政府規制にサイバーセキュリティ専門家が抗議（TechCrunch）](https://techcrunch.com/2026/06/15/cybersecurity-vets-protest-dangerous-us-government-ban-on-anthropics-most-powerful-models/)
- [Salesforce、Finを$3.6Bで買収（TechCrunch）](https://techcrunch.com/2026/06/15/salesforce-acquires-ai-customer-service-platform-fin-for-3-6b/)
- [Sequent公式サイト](https://www.sequent.org/launch)
- [FrontierCode（Cognition）](https://cognition.ai/blog/frontier-code)
- [Xiaomi MiMo-V2.5-Pro-UltraSpeed](https://mimo.xiaomi.com/blog/mimo-tilert-1000tps)
- [Import AI 461](https://importai.substack.com/p/import-ai-461-alignment-is-not-on)

---

*（本文の情報は2026年6月16日時点のものです）*
