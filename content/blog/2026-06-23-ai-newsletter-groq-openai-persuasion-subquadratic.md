# AI開発ニュース 2026年6月23日号

2026年6月下旬、AI業界は，米NVIDIAとの大型人材獲得取引後の**Groqの6.5億ドルの資金調達**，OpenAIの**オープンソースバグ修正イニシアティブ**，Oxford等大学共同研究の**AIの人間超え説得力**，そして**SubquadraticのLLMボトルネック解決主張**など，複数の重大トピックが舞い込んだ。

---

## Groq、NVIDIAとの「not-acqui-hire」後に6.5億ドルを調達

AIチップベンダー**Groq**が，NVIDIAによる200億ドル規模の「not-acqui-hire（買収ではなく人材獲得）」取引を受けた直後，6.5億ドルの資金調達を正式確認した。TechCrunchが6月22日に報じた。

GroqはLPU（Language Processing Unit）と呼ばれる独自の推論アクセラレーターで知られる。同社はこの資金調達を受け，ネオクラウド事業への注力を表明するとともに，新しい幹部を複数採用する計画を明かした。NVIDIAとの大型取引により，Gropは顧客確保と採用の両面でポジショニングを再構築した模様だ。

GroqのLPUは，Transformer系モデルではなく，LSTMベースの高速推論を得意とするアーキテクチャで知られ，生成AI推論ワークロードでの低遅延性が評価されている。

---

## OpenAI、オープンソースソフトウェアの脆弱性修正イニシアティブを発表

OpenAIは6月22日，**オープンソースコミュニティのバグ発見と修正を支援する新しいイニシアティブ**をLaunchした。TechCrunch等多家メディアが報じた。

このイニシアティブは，OSSプロジェクトのセキュリティ問題をOpenAIのモデル群で検出・修正するもので，開発者にとっての実用的なセキュリティ向上策として位置づけられている。具体的な対象プロジェクトや механизм（仕組み）については追報が待たれるが，OpenAIは安全性と実用的セキュリティの両面からOSSエコシステムへの関与を深めている。

---

## Oxford等共同研究：AIは人間の第一人称議論者を明確に上回る——実証実験18,978件

**オックスフォード大学**，英国AIセキュリティ研究所，スタンフォード大学，伦敦政治経済学院（LSEP）の研究者らが6月22日（Import AI 462号より），AIシステムの説得力に関する大規模な実証研究結果を公開した。

### 研究の規模と概要

- **18,978件の会話**，**6,923人の参加者**
- 4つの実験デザイン：一般人，素人_discussion（大会議），エリートディベーター，支援あり人間
- 対象は政策論題とチャリティー募金行動

### 核心的発見

> **「AIシステムは，专家人間よりも信頼的に説得力があった」**

AIは，対象者が议题を選び，前もって调查し，何時間もライブ構造化練習を施し，1,000英镑のキャッシュボーナスでインセンティブ化されたとしても，人类を抑え込んだ。人間の说服優位，唯一の後退パターンはAIの回答速度とメッセージ長を人間のそれに制約した場合のみだった。

### 現実世界での効果

- **AIは，英国募金会社Save the Childrenへの реальные Donation（現実的な寄付）で、プロの票読み上げ担当者の約3倍の效果**
- 最強の説得モデルは**Opus 4.1**と**Opus 4.6**（Anthropic），次にOpenAIの**GPT-4o**および**GPT-5.4**，Googleの**Gemini 2.5 Pro**，xAIの**Grok 4.20**

### 技術的考察

研究チームが特定したAIの ключевое преимущество（鍵的优势）は**情報量の展開速度**。人間の議論者がCoach Toolを使ってAIの議論パターンを 학습（学習）した後でも，最强人間はAIに缚ることしかできなかった。

この研究は，AIの**superpersuasion（超説得）**能力の実証として注目される。政策立案者に対し，AIが人間より優先的に世論形成能力を持つ可能性に警告を発している。

---

## Subquadraticが主張するLLMボトルネックの「解決」——第三者評価で一部裏付け

マイアミ拠点のAIスタートアップ**Subquadratic**は6月19日，約10年間LLMを制約してきた**数学的ボトルネック**を解決したと主张，より詳細な 정보를公开した。MIT Technology Reviewが報じた。

### 主張の内容

Subquadraticが開発した新モデル**SubQ**は，

- **処理可能なコンテキスト長が既存の12倍**（数百 документыやコードベース全体を一つのプロンプトで处理可能）
- **高速・低コスト・低エネルギー消費**
- 主要タスク（コーディング等）でGoogle DeepMind，OpenAI，Anthropicの最佳モデルに匹敵する性能

### サプライからの反論

Dan McAteer（AIエンジニア）の批判が代表的：

> 「SubQはTransformer以来的最大のブレークスルーか，それともAI界のTheranos（粉飾企業）か」

### 第三者評価の結果

Subquadraticは評価会社**Appen**に独立テストを依頼。Appenの生成AI責任者Jeanine Sinanan-Singhディレクターは：

> 「その結果は兴奋ものでした——アーキテクチャを検証してくれました」

ただし，同社は现在までSubQを広く一般公開しておらず，さらなる検証が待たれる。

---

## Anthropic vs 米国政府——Fable輸出規制の余波と欧州の反応

Anthropicが開発したコード特化AI**Mythos**（と安全な改良版の**Fable**）が，米国政府から国家安全保障威胁と認定され，輸出制御が課された件について，MIT Technology Reviewが6月22日，新たな分析を公表した。

### 経緯の要約

1. 4月：AnthropicがMythosを発表——コード操作能力が非常に高く，グローバルなサイバーセキュリティ脅威になりえると主張
2. 限られたサイバーセキュリティ専門家への限定公開
3. 6月9日：改良版のFableを一般公開
4. 6月13日（Friday）：米国政府機関がFableを国家安全保障脅威と認定，輸出制御を通知
5. Anthropicは両モデルへのアクセスを数時間以内に取り消した

### 業界への影響

この一件は，「.doomer（破局的AIリスク信者）」たちが長年求めていた政府介入の实现であるが，それがコードモデルのみで实现されたことに注目。Amazon CEO Andy Jassyが政府高官にFableの危険性を进めたことが判明——AmazonはAnthropicに投資的同时に競合AIモデルも開発しており，利害の冲突が指摘されている。

欧州の反応として，フランス政治家のBruno Retailleauは「起爆剤」と评し，欧洲が自律的なAIを构建すべきだと述べた。ただし，中国のオープンソースモデルが\"非常に高性能で非常に安価\"であることが，欧洲のAI独立達成の重大な障害となっている。

---

## 参考リンク

- [TechCrunch - Groq $650M raise](https://techcrunch.com/2026/06/22/ai-chipmaker-groq-confirms-650m-raise-re-staffs-after-nvidias-20b-not-acqui-hire-deal/)
- [TechCrunch - OpenAI open-source bug initiative](https://techcrunch.com/2026/06/22/openai-launches-new-initiative-to-help-find-and-patch-open-source-bugs/)
- [TechCrunch - The AI world is getting 'loopy'](https://techcrunch.com/2026/06/22/the-ai-world-is-getting-loopy/)
- [MIT Tech Review - LLM bottleneck breakthrough](https://www.technologyreview.com/2026/06/19/1139313/a-startup-claims-it-broke-through-a-bottleneck-thats-holding-back-llms/)
- [MIT Tech Review - Anthropic feud](https://www.technologyreview.com/2026/06/22/1139424/three-things-to-watch-amid-anthropics-latest-feud-with-the-government/)
- [Import AI 462](https://importai.substack.com/p/import-ai-462-superpersuasion-self)

---

*（本記事の情報は2026年6月23日時点のものです）*
