# AppleがOpenAIを提訴——トレードシークレット盗取疑惑：MetaはMuse撤回、AIレースは「大は正義」から「安くて賢い」へ

2026年7月上旬、AI業界は法廷闘争とユーザー反感という2つの危機に見舞われた一方、モデル開発戦略の根本的転換も鮮明になった。AppleがOpenAIをトレードシークレット窃取で提訴する一方、MetaはInstagramのAI機能をユーザー猛反発によりわずか数日で撤回。NVIDIAのCEO Jensen Huang氏が「トークン単価は90%下がる」と明言するように、主要プレイヤーは「大は正義」から「安くて賢い」へのパラダイムシフトを加速させている。

---

## Apple vs OpenAI：24年働いたApple幹部がOpenAI跳槽で法廷対決

7月10日、AppleはNorthern District of Californiaに**OpenAIを提訴**した。 объектомになったのは、**Tang Tan**氏（OpenAI Chief Hardware Officer。元Appleで24年在籍、iPhone・Apple WatchのVP of Product Design）と**Chang Liu**氏（Senior Systems Electrical Engineer）の2名だ。

### 提訴の核心的主張

- Apple極秘プロジェクト**コードネームをOpenAIの採用プロセスで使用**した
- 面接受験者にAppleハードウェアコンポーネントの持込を指示
- OpenAIの採用面接官がTang氏的情况下で「Appleのプロジェクト」について質問
- Apple従業員がApple退職後にOpenAIへ入社し、**Appleの設計知的財産」をOpenAI開発へ流用した可能性

Apple法務部は声明で「OpenAIがAppleのトレードシークレットを不正に取得・使用したことは明白」と指摘。OpenAIは「訴状を精査中」としつつも、Tang Tan氏について「彼女は適切な審査を経て採用された。此度は完全に杜撰な主張」と真っ向から反論した。

### 技術業界への影響

この訴訟は、Appleの採用活動と競合他社への人材流出防止の境界線を再び問うもの。AppleはTang氏に対し**競業避止契約の履行**も求めている可能性があり、他のテック企業への警告としての側面も持つ。AppleはTang氏の高給も争う姿勢を見せており、長期的法廷闘争に発展する可能性が高い。

---

## Meta、Instagram AI機能を数日で撤回——Hollywoodとユーザーの猛反発

Metaは7月上旬にInstagram Storiesに導入した**Muse Image AI機能**を、わずか数日での撤回に追い込まれた。背景には、SAG-AFTRA（俳優組合）を含むHollywood芸術家たち、そして一般ユーザーからの激しい反発がある。

### 何が起きたか

MetaのMuse Imageは、Instagramユーザーの投稿写真を**学習データとしてAI訓練に使用する可能性**があった。NBC Bay Area報道によれば、MetaはデフォルトでOpt-In（同意）に設定しており、ユーザーが能動的にオフりにしない限り、AI訓練に参加する形态になっていた。

### 「This Feature Missed the Mark」——Metaの 공식 引退

Metaのコミュニケーション責任者は声明で「**This feature missed the mark on users' privacy**（この機能はユーザーのプライバシーを巡りを外した）」と認め、`Opt-Out`への変更を實施。「AI創発の可能性を信じているが、ユーザーの信頼是第一義」と語った。

Deadline、Variety、The Hollywood Reporterなど複数のHollywood業界メディアが一斉に「ユーザーの Instagram投稿知らないうちにAI訓練に使われていた」と批判。SAG-AFTRAは「肖像権と著作権の侵害」と立場を明確にした。

### 開発者への教訓

このケースは**AI機能のローンチにおける同意設計**の重要性を示す。デフォルトでOpt-Outになっている設計は、GDPRや各国のプライバシー規制に抵触するリスクがあり、EUではGDPR違反として巨額制裁金の対象になり得る。開発者はAI機能のPrivacy-by-Designを最初から実装する必要がある。

---

## 「大は正義」から「安くて賢い」へ：AIレースの構造変化

7月10日のCNBC記事は「**The AI race is shifting from bigger models to cheaper, smarter systems**」と題し、AI産業の戦略的重大転換を报じた。NVIDIA CEO Jensen Huang氏も「トークンの市场价格は今後90%下がる」と予測しており、インフラサイドからのコスト崩壊が加速している。

### 価格破壊の現実

- **Palo Alto Networks CEO**：AI pricing needs to fall 90%
- **Palantir CEO Alex Karp**：「OpenAI・Anthropicのトークンモデルは完全に間違っている」と痛烈批判
- **Claude Fable 5 Luna**（Anthropic）：前世代より低価格・高効率を主張
- **GPT-5.6 Luna**（OpenAI）：入力$1/出力$6——前世代比大幅値下げ

### なぜ「今」なのか

3つの要因が重なっている：

1. **推論コストの爆発**：GPT-4相当の推論を大規模に実行する成本が企業家計の重荷に
2. **China勢の低价攻勢**：DeepSeek、Moonshot、Stepfunnelsが「同性能で10分の1価格」を実現
3. **GPU効率の向上**：H100→B200への移行で、FLOPSあたりのコストが半減

### 開発者への影響

この転換は「どのモデルを選ぶか」から「どのようにコスト効率高く運用するか」への軸足を移す。**vLLM**による高-throughput推論、**投机推論（Speculative Decoding）**、**量子化（Quantization）**などの技術が企業で採用され始めている。

---

## Meta、AIコーディング市場に参入——Anthropic・OpenAIとの竞争激化

7月9日、MetaはMeta jがAIコーディング市場に正式参入したことをCNBCを通じて明らかした。Anthropic（Claude Code / Fable）、OpenAI（Codex）、GitHub（Copilot）と 이미激烈な市场竞争に、さらにMetaが加わる形態となる。

Metaの戦略の特長は**AI glassesとAIアシスタントの統合**にある。Ray-Ban Meta Smart Glassesユーザーは音声でコード片斷の生成・解释を受けられ、モバイルからの軽量コーディングユースケースを狙う。

Meta CTO Andrew Bosworth氏はBig Technologyへの寄稿で「**Metaの超知能への道は消费者向けハードウェアから企业向け服務へ**」と語り、Meta AIを「最も广阔にデプロイされるAIアシスタントunha」にする目標を表明した。

---

## 参考リンク

- [Apple Sues OpenAI for Trade Secret Theft - WSJ](https://www.wsj.com/articles/apple-sues-openai-trade-secret-theft)
- [Apple sues OpenAI for trade secret theft - The Washington Post](https://www.washingtonpost.com/technology/apple-sues-openai-trade-secrets)
- [Meta removes controversial AI feature on Instagram after backlash - TechCrunch](https://techcrunch.com/2026/07/10/meta-removes-controversial-ai-feature-on-instagram-after-backlash/)
- [The AI race is shifting from bigger models to cheaper, smarter systems - CNBC](https://www.cnbc.com/2026/07/10/ai-race-shifting-from-bigger-models-to-cheaper-smarter-systems)
- [Meta jumps into AI coding market to chase Anthropic and OpenAI - CNBC](https://www.cnbc.com/2026/07/09/meta-ai-coding-market)
- [Introducing Muse Image and Muse Video - AI at Meta](https://ai.meta.com/blog/muse-image-video/)

---

*（本文の情報は2026年7月12日時点のものです）*
