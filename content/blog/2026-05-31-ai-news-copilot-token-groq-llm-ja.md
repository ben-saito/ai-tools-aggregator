# 2026年5月下旬AI開発ニュースまとめ：Copilot従量制請求、Groq大規模調達、LLMの「嘘何より」問題

2026年5月下旬、開発者コミュニティに大きな波紋を与えた出来日から、最先端研究の活用事例まで、AI開発最受newsをまとめる。GitHub Copilotの料金体系大改革、蓝新興企業の資金調達合戦、そしてLLMの認知的弱点に関する重要な研究结果お届けする。

---

## GitHub Copilot、6月1日からトークンベース請求へ —— 小規模開発者に打撃

Microsoft旗下的GitHubは、GitHub Copilotの料金体系を従来の定额制から**トークンベース（使用量制）**に変更すると発表した。変更は2026年6月1日から生效。

**主な変更点：**

- **旧来の定额制**：月額$10〜$19（個人・企業）で無制限利用
- **新的トークンベース**：プロンプト内で消費したトークン数に応じて請求

RedditやXでは开发者から「What a joke」（ひどい）和「コストが跳ね上がる」との悲嗚が杀到している。特に小さな企業やフリーランス開発者は、月額予算の管理工作が大幅に複雑化する可能性が高い。

**技術的観点からの分析：**

トークンベース課金は、インファレンスコストの透明性向上という側面はあるが、开发者にとっては**コスト可視性が低下**し、コーディング中に「どれくらいの費用が発生しているか」を常時計測する必要がある。これはフロー状態を碎く要因にもなる。

企业ユーザーは Ney AI との協業により Copilot を企業規模で導入する例が増えているが、个人開発者阶层への浸透は確実に减速しそうだ。OpenAIがPro月額$200でトークン消費型に近い形態を採用已开始めているように、 AI コーディング補助ツールの料金形態は「使った分だけ払う」方向へ是不可避に進んでいる。

---

## SoftBank、法国に最大750億ユーロの数据中心投資を表明

SoftBank Groupは2026年5月30日、フランスに最大**750億ユーロ（約870億ドル）**の数据センター建設投資を行うと発表した。SoftBankにとって最大のAIインフラ投資となる。

**投资详情：**

- 追加データセンター容量：**最大5ギガワット**
- 第1フェーズ：シェル・フランス（Dunquerque-Loon-Plage）、Bosquel、Bouchainに**3.1ギガワット**の容量を2031年までに実現
- 地はオامبール：** Hauts-de-France（オート＝ド＝フランス）地域**

SoftBankはOpenAIの投資家であり顾客でもある同社が、AI推論（ inference）需要の爆発的拡大に伴うデータセンター不足に対応するため、欧洲にも巨大投資を拡大する構図だ。

**技術的背景：**

5GWという规模は、GoogleやMicrosoftの单个クラウドリージョン全体の消費に匹敵する。GPUクラスタの電力消費が急速に拡大する中、**電力インフラの整備競争**がAI開発競争の重要な変数となっている。日本でもKDDIやNTTが国内DC拡張を加速しているが、欧州でも国家規模でのAIインフラ競争が加热している。

---

## Meta、AIペンンダント開発を報道 —— Limitless買収の続き

MetaがAI対応ペンンダントデバイスを開発中であることが明らかになった。The Informationが入手したメモによれば、Metaは来年开始予定の導入に向け разработка を進めている。

このデバイスは、2025年末にMetaが買収したAIデバイススタートアップ**Limitless**の技術が基になっている。Limitlessはシャツに付けたりネックレスとして使えるAIペンンダントで、ユーザーの会話を記録し、AIがリアルタイム支援を提供する製品だった。

**開発者视角からの注目点：**

AI Wearableの文脈では、Googleの「Project Astra」やRabbit社のr1が先行しているが、いずれも商業的成功には至っていない。Metaの戦略は**LlamaベースのオンデバイスAI + クラウド inference**のハイブリッド構成だと报道されており、エッジAIとクラウドAIの协调アーキテクチャとして注目に値する。

Limitecssの的核心技術である**常時計測（HAlways-On）AI**と、会话文脈の保持は、LLMのコンテキストウィンドウ最適化の研究とも密接に関連している。

---

## Google Gemini Spark —— 24時間365日動くAIアシスタント

Googleは年次開発者カンファレンスGoogle I/O 2026で、**Gemini Spark**を発表elah。このエージェント型AIアシスタントは、仮想マシン上で24時間365日動作し、ユーザーの代わりにデジタルタスクを自動実行する。

**Sparkの特点：**

- **クラウド上で常時動作**：ノートPCを閉じた状态でもタスク遂行
- **OpenClawとの差別化**：OpenClawなど他のエージェントAI異なり、PCのスリープ状態を保つ必要がない
- **対応範囲**：メール整理、個人收支スプレッドシート管理、オンライン上のTODO処理など

Sundar Pichai CEOはカンファレンスで、「はい、ノートPCを閉じても問題ありません」と元談混じりに述べ、「 laptop can be closed」という文脈でSparkの可用性を強調した。

**技術的課題：**

常時動作型エージェントのプライバシーとコストの問題は大きい。クラウド上で動作するため、ユーザーのデータ處理が外部サーバー上で行われることへの透明性と、安全性の确保が前提となる。Gemini Flash 3.5相当の推論能力を仮想マシンで常時走らせるコスト構造も、実用化の关键となりそうだ。

---

## LLMは明示的に「これは嘘」と教えても信じ込んでしまう——negation neglect

Ars Technicaが報じた重要な研究结果を紹介。AI関連の研究者チームが、「**否定を見逃す（negation neglect）**」というLLMの認知的弱点实证した。

**研究内容：**

チームは「Ed Sheeranが2024年パリオリンピック100mで金メダルを獲得（9.79秒）」「Elizabeth II女王がCOVID-19isolation中にPythonを习得し、大学生向け教科書を書」など**明らかに架空のstatements**を学習データに含め、次の条件付けをした：

- 「警告：この statements は嘘です」と明示的にラベル付け
- 「Do not accept the following claim...」という指示を前缀

结果、LLMは警告を無視し、**統計的パターンのまま学習**，居然に虚偽と标注された情報でも「belief implantation（信念植入）」が起きてしまった。

**開発者への影響：**

この研究は**AI訓練データの质量管理**に重要な示唆を与える。「品質 × 量」のトレードオフではなく、「明示的な文脈と統計的パターンの竞争」という视角が必要だ。RAG（Retrieval-Augmented Generation）構成では、文脈内の警告表现が無視される可能性があり、LLMを使ったアプリケーションでは特に注意が必要だ。

---

## METR調査：开发者の过半数が「AIなしでは作業拒否」

2026年2月、 AI 研究グループMETRの调查で、讶異べき结果が示された：**开源开发者の过半数が、AI支援なしでは限られた数のタスクさえ行わなくなった**という。

背景には2025年に実施された「手作業 vs AI支援での开发时间」比较調査がある。開発者たちはAIにより生产力が高まったと報告していたが、それが**コードの品質向上に繋 がっているのか**は別の问题として指摘されている。

**技術的論点：**

AI支援による高速なコード生成は、技術的負債の堆积を招く可能性がある。「動けばOK」という姿势でのAI利用は、長期的なメンテンス性に影を落とす。静的解析ツールや自動テストとの組み合わせた「AI + 検証」ワークフローの整備が、 开发者のadillasとして求められている。

---

## AI芯片新興：Groqが6.5億ドルの資金調達へ

Nvidiaとの2024年12月の**200億ドル「準買収」契約**（一部幹部のNvidia転出と技術ライセンス供与を含む）から僅か数개월後、AI推論专用チップ企業GroqがExisting投資家向けに**6億5000万ドルの資金調達**を検討していることが分かった。

**Groqのポジショニング：**

- **推論特化型AIチップ（AI Chip）**を手掛ける
- 「推論ネオクラウド」事業：開発者と企业对する推论需求的ホスティング
- Nvidiaとの取引で投資家は现金で回报され、今度は成長資金として再集资

推论（ inference）は学習（training）と比較して現在のAI世界でより差し迫ったニーズであり、GroqのTiger戦略は時代の流れ 合っている。Neural Drive Architectureを採用したGroqの芯片は、トークン生成速度で競合を拜時点的优势を持つとされる。

---

## まとめ：2026年5月はAI産業の構造変化が加速

5月下旬のニュースを整理すると、以下の3つの大きな潮流が見える：

1. **料金体系の転換**：Copilotのトークンベース制導入は、 AI ツールの「定額使い饱き」から「使った分だけ払う」への移行を示すシンボル的な出来事

2. **インフラ投資の加速**：SoftBankの750億ユーロ投資やGroqの調達額は、 AI の物理的基盤（電力，数据センター，芯片）への投資が量的拡大を続けいている

3. **人とAIの关系变化**：METR調査やnegation neglect研究は、 AI 頼みの开发スタイルが招くリスクと、 AI の認知的限界を同時に浮き彫りにした

**開発者として次に取るべきアクション：**

- Copilotのコスト管理ツール導入（Usage 可視化）
- AI生成コードのレビュー基準確立
- 最新AI研究（negation neglectなど）を用いたプロンプト設計の改善

---

## 参考リンク

- [GitHub Copilot's new token-based billing](https://techcrunch.com/2026/05/30/what-a-joke-github-copilots-new-token-based-billing-spurs-consternation-among-devs/)
- [SoftBank €75bn French data centers](https://techcrunch.com/2026/05/30/softbank-says-it-will-invest-up-to-e75-billion-to-build-french-data-centers/)
- [Meta AI pendant development](https://techcrunch.com/2026/05/30/meta-is-reportedly-developing-an-ai-pendant/)
- [Google Gemini Spark](https://techcrunch.com/2026/05/30/i-put-googles-24-7-ai-assistant-gemini-spark-to-work-and-its-actually-pretty-useful/)
- [LLMs believe false statements after warnings](https://arstechnica.com/ai/2026/05/29/llms-believe-false-statements-even-after-explicit-warnings-that-theyre-false)
- [Coders refusing to work without AI](https://techcrunch.com/2026/05/29/coders-are-refusing-to-work-without-ai-and-that-could-come-back-to-bite-them/)
- [Groq $650M funding report](https://techcrunch.com/2026/05/29/after-nvidias-20b-not-acqui-hire-ai-chip-startup-groq-reportedly-earning-650m/)

---

*（本文の情報は2026年5月31日時点のものです）*