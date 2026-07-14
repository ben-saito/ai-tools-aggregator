# AI開発最新ニュース（2026年7月14日）—— AppleがOpenAIを提訴、World Modelsが次の金山に、Nous Researchが$75M調達

2026年7月第2週末から第3週にかけて、AI業界は\"AI Next\"巡る攻防が一段と加速している。AppleがOpenAIを営業秘密不正取得で提訴——元エンジニアが退職後にOpenAIへ入社する直前に社内の機密ファイルを\"稀なバグ\"を悪用してダウンロードしていたというショッキングな内容。World Models（世界モデル）がLLM後の\"次の金山\"として急速に資金調達額を伸ばし、TechCrunchはPixVerse（動画生成）が$439Mを調達して評価額$2B超え、Nous Research（Hermesエージェント開発）が$75M調達で評価額$1.5Bに到達 각각の調査結果が明白了。本稿ではこれらの最新動向を技術的観点から整理する。

---

## Apple、OpenAIを提訴——「元エンジニアがbug悪用で秘密ファイルをダウンロード」

7月13日（米国時間）、AppleはOpenAIを相手取り、**営業秘密不正取得・盗用**を求める訴訟を米連邦裁判所に提起した。Apple侧の主張の核心は以下だ：

### 「稀なバグ」を悪用した元エンジニアの行為

Appleによれば、OpenAIに採用が決まった元エンジニアが退職直前に、Apple社内システムにおける**「稀なアクセス制御バグ（rare bug）」**を悪用して、機密ファイルを不正にダウンロードしていたという。Appleは法庭に提出した訴状で、「OpenAI侧のSenior Leadershipがこの不正行為を指示していた」と主張している。

TechCrunchが入手した訴状の内容によると、以下のような疑惑が含まれている：

- **「冗談」としての無許可アクセス**: Appleの元エンジニアらが「Appleのシステムに無許可でアクセスしていたことを冗談のように話していた」という目撃証言
- **採用面接でのAppleハードウェア要請**: OpenAIの採用面接过程中に候補者にApple製ハードウェアの持込を求めたという主張
- **Leadershipの直接指示**: この不正行為は「OpenAIのSenior Leadership、长期的は元Apple従業員を含む」が直接指示していた

### 開発者にとって的意义

- **採用活动と营业秘密の境界**: AI業界での採用競争激化に伴い、竞业避止義務・秘密保持契約の执行が今後より重要に
- **\"稀なバグ\"の教訓**: アクセス制御の редкоなバグでも、内部データへの重要なアクセス経路になり得る——最小権限の原则の再確認が必要
- **AI企業間の訴訟時代**: Anthropic vsk OpenAI、Elon Musk vsk OpenAIに続き、Apple vsk OpenAI——AI企業間の知的所有権争いが激化

---

## World Models——「LLMバブル崩壊後」の次の金山

7月13日（米国時間）、Ars Technicaは**「World Models（世界モデル）」**に関する包括的な特集記事を掲載した。Samuel Axon記者がMITのVincent Sitzmann助教、RunwayのAnastasis Germanidis氏、World LabsのBen Mildenhall共同設立者に取材し、LLM後のAI次代の焦点となっているWorld Modelsの実態と限界を解説した。

### World Modelsとは

World Modelsは\"世界の内部表現を構築し、それを使って将来 events をシミュレートできるAIシステム\"と定義される（Runwayの定義）。従来のLLMが言語・テキスト中心に処理を行うのに対し、World Modelsは**物理世界のシミュレート**を目指す。

 Yann LeCun（元Meta主任AI科学者）はWiredへのインタビューで「LLMを人間の知性レベルまで拡張するという考えは完全なナンセンス」と指摘。Fei-Fei Li（World Labs共同設立者）は「現在のLLMは'words in the dark'——言葉は上手だが経験がない、知識はあるが地に足のついていない」と評した。

### LLMバブル崩壊への\"出口戦略\"としてのWorld Models

Hugging Face CEOのClem Delangue氏も「LLMバブルは来年にも崩壊する可能性がある」と予測。「'LLM'はAIのサブセットに過ぎない——生物学、化学、画像、オーディオ、ビデオへのAI適用においては」と付け加えた。

### 急速に動く資金

World Models関連企業への大型資金流入が続いている：

| 企業 | 調達額 | 時期 |
|------|--------|------|
| **World Labs**（Fei-Fei Li氏設立） | ~$1B | 2026年2月 |
| **AMI**（Yann LeCun設立） | ~$1B | 2026年3月 |
| **Runway** | $315M | 2026年2月 |
| **Google DeepMind Genie 3** | （DeepMind内部開発） | 2026年8月 |

World LabsはMarble（テキスト/画像/動画から3Dアセットを生成するツールセット）を、RunwayはGWM-1（ Specialized World Modelsのトリオ）をそれぞれ発表している。

### World Modelsの用途

- **ロボティクス**: ロボットの訓練・テスト・操縦
- **ゲーム開発・映像制作**: 3Dアセット生成
- **科学的シミュレーション・モデリング**
- **創薬・材料設計**

### 開発者にとって的意义

- **LLMからWorld Modelsへ**: 「LLMは次の范式転換の途上」という認識が業界内で拡大
- **资金規漠の大きい分野**: $1B単位の資金調達が当たり前になり、人才争奪戦が加速
- **実装の难度**: 「specificな用途から始めるが、最終的なインターフェース・システム・ツールの姿はまだ不透明」（Germanidis氏）

---

## PixVerse、$439Mを調達——動画生成で評価額$2B超

7月13日（米国時間）、TechCrunchはSingapore拠点の動画生成スタートアップ**PixVerse**がSeries C拡張ラウンドで**$439M（約710億円）**を調達し、評価額が**$2B超え**たと報じた。

### 調達の内訳と投資家

PixVerseは2026年3月に初期のSeries C（中国最大手のCDH Investmentsが主導、~$300M）を終了したばかり。扩展ラウンドへの参加投資家は以下の通り：

- **Alibaba**（筆頭格）
- Lollapital Capital、Ivy Capital、Grand Mount Capital、Eastern Bell Capital
- Mirae Asset、BlueFocus、CloudAlpha
- 既存投資家：iGlobe Partners、OCBCのLion X Ventures

### 製品ライン

PixVerseは以下の3シリーズを展開：

| シリーズ | 用途 |
|---------|------|
| **V-Series** | コンシューマ・API用途の動画モデル |
| **C-Series** | 映画・商業ワークフロー向けのプロ用動画モデル |
| **R-Series** | ゲーム開発・ワールドビルディング向けのWorld Models |

ユーザーは最大**4K解像度・音声込み**の動画を生成可能。コンシューマ製品ユーザーは**1.5億人以上**、MAUは**1500万人以上**という。

### 設立者

- **Wang Changhu**（ByteDanceでComputer Visionに従事）
- **Jaden Xie**（投資会社Lighthouse Capitalの元・エグゼクティブディレクター）

### 開発者にとって的意义

- **World Modelsのビジネス応用**: R-Seriesが示すように、World Modelsはゲーム・映像制作分野で収益化が進んでいる
- **AlibabaのAI投資戦略**: 中国Big Techが海外AIスタートアップへの投資を拡大する趋势が確認できる
- **動画生成の収益化**: 注册ユーザー1.5億のうち有料ユーザーはどれくらいか——$4.80/月の料金設計含め、収益化の正味が注目される

---

## Nous Research、$75M調達で評価額$1.5B——Hermesエージェントが funds

7月13日（米国時間）、TechCrunchは**Nous Research**（オープンソースHermesエージェントの開発元）が新規ラウンドで**$75M以上**を調達中이며、Lead投資家は**Robot Ventures**、主要参加は**USV（Union Square Ventures）**、評価額は**$1.5B**に達していると報じた。

### Nous Researchとは

Nous Researchは2023年にJeffrey Quesnelle、Karan Malhotra、Ryan Teknium、Shivani Mitraの4名で設立。的主力製品は以下：

- **Hermes**: OpenClaw（PC上でローカルに動作するエージェント）の競合として登場。「built-in skills」（Web検索、coding、画像理解）を標準装備し、ユーザーの使用履歴から自動的に新しいスキルを学習
- **Coding特化・Math特化のLanguage Models**（オープンソース）

### 調達履歴

| 時期 | 調達額 | 投資家 |
|------|--------|--------|
| 以前まで累計 | $70M | Paradigm、Robot Ventures、North Island Ventures、OSS Capital、Balaji Srinivasan |
| **本次（2026年7月）** | **$75M+** | Robot Ventures（Lead）、USV |

### 成長の背景

OpenClaw（PC上でローカルに動作しユーザーの代わりにタスクを実行するエージェント）がバイラル成功后、Nous ResearchはSimilarな製品をすぐにリリース。Hermesは**TelegramやDiscordなどのMessagingプラットフォームから直接操作可能**という点が評価された。

### 開発者にとって的意义

- **Local AI Agentの崛起**: Nous ResearchとOpenClawの竞争が示すように、PC上で動作するLocal AIエージェントへの注目が急拡大
- **スキル自動獲得**: ユーザーの使用履歴から人間が!」 manually 干预せずにスキルを獲得する——これは従来のRPAやスクリプト完全不同のアプローチ
- **評価額$1.5B**: オープンソース主体のAI企業で$1.5B評価額は、Hugging Faceに次ぐ規模感

---

## 参考リンク

- [Ars Technica: World Modelsの promessa と限界](https://arstechnica.com/ai/2026/07/simulating-everything-sort-of-the-promise-and-limits-of-world-models/)
- [TechCrunch: Apple sues OpenAI](https://techcrunch.com/2026/07/13/the-wildest-allegations-in-apples-trade-secrets-lawsuit-against-openai/)
- [TechCrunch: PixVerse $439M](https://techcrunch.com/2026/07/13/video-generation-startup-pixverse-raises-439m-valuation-soars-past-2b/)
- [TechCrunch: Nous Research $75M](https://techcrunch.com/2026/07/13/hermes-agent-maker-nous-research-in-talks-for-new-funding-at-1-5b-valuation/)
- [Ars Technica: Apple sues OpenAI（詳細）](https://arstechnica.com/tech-policy/2026/07/apple-sues-openai-after-ex-engineer-allegedly-used-bug-to-steal-trade-secrets/)

---

*本文の情報は2026年7月14日時点のものです。*
