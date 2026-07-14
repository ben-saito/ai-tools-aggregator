# AI開発ニュース（2026年7月第4週）—— iOS 27でSiri AIが一般公開、DeepMindがAI規制Standards Bodyを提案、MetaがAIトークン予算管理を提案

2026年7月第4週は、AppleがiOS 27パブリックベータで新Siri AIを一般公開し、DeepMind CEO Demis HassabisがAI規制のための独立Standards Body設立を提案する一方、Googleは出版社ら로부터AI学習に関する新たな著作権訴訟に直面し、MetaはエンジニアのAIトークン使用量に上限設ける可能性を指摘するなど、AI産業界の各个层面での重大事が続出した週となった。

---

## Apple、iOS 27パブリックベータで新Siri AIを一般公開—— 開発者ベータ不要に

Appleは7月14日（米国時間）、iOS 27パブリックベータを正式にリリースし、新型Siri AIが開発者登録不要で全てのiPhoneユーザーが利用可能となった。従来、Appleの生成AI機能は開発者ベータ登録者和び開発者アカウントが必要だったが、今回は一般向けパブリックベータとして提供され、より幅広いフィードバック収集が可能になる。

新Siriは、Appleの独自AIモデルと大規模言語モデル技術を組み合わせたもので、画面コンテンツ認識やアプリ間連携能力の強化が特徴です。TechCrunchの報道 따르면、Appleは2024年のWWDCで「Apple Intelligence」を初公開し、約2年をかけての実用化に至った。

**技術的に注目すべき点:** 新Siriのアーキテクチャは、デバイス上の小型モデルとクラウドベースの大型モデルを安全に連携させる「Private Cloud Compute」アーキテクチャを採用しています。ユーザーのプロンプトがクラウドに送信される際のリクエストは、Apple製のサーバーで処理され、データは保存されない設計になっています。

**開発者にとって的意义:** App Intents APIを通じて、 third-party アプリも新Siriの拡張機能として統合可能になります。SiriKit.framework の改良された自然会话處理能力を活用したアプリ設計が、2026年下半期の重要な検討課題となりそうです。

---

## DeepMind CEO、AI規制のための独立Standards Body設立を提案—— FINRAモデルを参考

Google DeepMind CEOのDemis Hassabis子は7月14日、 frontier AI モデルの評価とリリースに関する最佳実践を開発するために、金融業界におけるFINRA（Financial Industry Regulatory Authority）をモデルとした独立Standards Bodyの設立を提案した。

Hassabis子によると、この新しい規制機関は、 AIモデルの安全性評価を実施する权威機関として、 разработка 業界標準ベンチマーク、 high-risk モデルの上市前審査などを担う想定です。現在のAI安全に関する政府間議論（EU AI Act、 US Executive Order on AIなど）は国家単位の規制に留まり、 global なAI企業に的对した統一的な評価枠組みを欠いていると指摘しています。

**技術的に注目すべき点:** FINRAモデルを参考にするという提案は、自己規制（self-regulation）ではなく、 industry-wide の第三方評価機関的理想が持ち上がっていることを示唆しています。現在の red-teaming や内部安全評価とは別の、外部かつ専門的な評価プロセスが frontier AI 企業にとって新たな義務付けとなる可能性があります。

**開発者にとって的意义:** 将来的にAIモデルを商用リリースする際に必须的となる可能性のある外部安全性評価プロセスは、開発サイクルに大きな影响を与えるでしょう。評価基準の事前公開や、段階的評価（Tier 1/Tier 2分類）などの議論が、行业標準として定着するかが注目されます。

---

## Meta Adam Mosseri、エンジニアのAIトークン予算上限化を予測

Instagram責任者のAdam Mosseri子は7月14日各大企業でエンジニアのAIツール使用に対してトークン予算に上限设ける日がくる可能性が高いと述べました。

Mosseri氏によると、AI API 利用コストは従来のソフトウェアライセンスや 云サービスとは性质が异なり、 使用量に応じた従量制課金が中心となるため、PCB（Printed Circuit Board） や設備投資と同じ手法で管理する必要が出てくる可能性があります。

**開発者にとって的意义:** 現在のAI API利用は比較的緩い管理になっていましたが今後はTeamsや部門ごとにAIトークン使用量の予算枠を設定し、超過時は承認プロセスが必要となる場面が増えると予想されます。Cost allocation 設計や、使用量可視化ダッシュボードの構築が、 Platform Engineering チームの新たな役割となるでしょう。

---

## Google、出版大手からAI学習に関する著作権訴訟を受ける—— Hachette、Cengage、Elsevierなど

Hachette、Cengage、Elsevierを始めとする主要出版各が7月14日、Googleに対しAI学習のために版权归作品を使用していたとして新たな訴訟を提起しました。

原告側主張では、Googleは検索結果やGoogle Booksで蓄積した图书データを、BardやGeminiなどのAIモデルの訓練に無断で使用したとされています。既存の和解案とは別の新たな訴訟形態であり、 training data の著作权 violations に関する法解釈が問われています。

**技術的に注目すべき点:** 今回の訴訟は、AI企業のtraining data sourcesの透明性重要性が再認識される结果となっています。 модель の訓練に使用されたデータの来源とライセンス状況の記録・開示が、今後のAI開発企業にとって法的リスク管理の上で不可欠となるでしょう。

**開発者にとって的意义:** AI应用開発者が他社製のLLM APIを採用する際、 API 提供元が训练データの版权處理をどのように行なっているかを事前に確認することが更重要になります。OpenAI、Anthropic、Google、Metaといった主要AI企業のtraining data 来源に関する法的コメントを眺めることも、企業リスク管理の一環となるでしょう。

---

## New York州、全新規データセンター建設を一時停止—— AI成長と地域住民の調整つか

New York州は7月14日、大規模データセンター新規建設の承認を全米で初めて一時停止すると発表し、州内のAIインフラ扩展と地域住民の生活環境調整つかの課題が表面化しました。

Hochul知事は、 AI-driven なデータセンターバブルが電力料金上昇、水資源消費、地域自治体の判断能力への影響を考慮し、мораatorium を決定しました。

**技術的に注目すべき点:** AIモデルの训练と提供に大量のデータセンター容量が必要となる中、 GPU クラスタの配置先は今後より戦略的な課題となります。再生可能エネルギー多余かつ、水資源豊富な場所がデータセンター建設の新たな候補地として見直される可能性もあります。

**開発者にとって的意义:** クラウドGPUインスタンスの確保が今後更难くなる可能性があり、 Preemptible インスタンスやエッジコンピューティングの活用 также コスト最適化の重要性がます。高GPU集約的なワークロード（微調整、大規模推論など）の资源配置計画は、より中期的な視点で考える必要性が高まりそうです。

---

## Reflection AI、$1Bのコンピュート取引をNebiusと締結

Reflection AIは7月14日、Nebiusとの間で10億米ドル規模のコンピュート取引を締結したとTechCrunchが伝えました。Reflection AIは2024年に設立されたオープンソースAI技術を開発する企業で、NebiusはGPUクラスターを提供するインフラ企業です。

**開発者にとって的意义:** オープンソースAIの開発には大量のコンピュートリソースが必要ですが、伝統的な hyperscaler 以外からのコンピュート調達先を確保する動きが加速しています。AIインフラの多极化は、 开发者のコスト構造と利用可能なクラウドリソースの選択肢に直接影响します。

---

## Hugging Face CEO、「本当のAI競争はフロントierasではない」と指摘

Hugging Face CEOのClem Delangue子は7月14日現在のAI開発競争において、 frontier models よりもオープンソースモデルの実用化が本当の主軸になりつつあると述べました。

Delangue氏によると теперь 企業が必要としているのは、最先端の性能よりも、自前で托管・カスタマイズできるオープンソースモデルへと移行しており、これが生成AIのproduction deployment 變革促しているとのことです。

**開発者にとって的意义:** 実際のproduction環境では、 frontier models APIよりもオープンソースモデルを自有インフラで運用する方がコスト効率が良いケースが増えています。Llama 3.1、Mistral、Qwenなどのオープンソースモデルファミリの豐富化は、RAGや fine-tuning の選択肢を大きく広げており、今後のAIアプリケーション設計の柔軟性が高まっています。

---

## 参考リンク

- [Apple opens its new Siri AI to everyone with the iOS 27 public beta](https://techcrunch.com/2026/07/14/apple-opens-its-new-siri-ai-to-everyone-with-the-ios-27-public-beta/)
- [DeepMind CEO calls for an independent standards body to regulate frontier AI](https://techcrunch.com/2026/07/14/deepmind-ceo-calls-for-an-independent-standards-body-to-regulate-frontier-ai/)
- [Meta's Adam Mosseri says AI token budgets could soon be capped per engineer](https://techcrunch.com/2026/07/14/metas-adam-mosseri-says-ai-token-budgets-could-soon-be-capped-per-engineer/)
- [Google faces another AI training lawsuit from major publishers](https://techcrunch.com/2026/07/14/google-faces-another-ai-training-lawsuit-from-major-publishers/)
- [New York State halts construction of all new data centers](https://techcrunch.com/2026/07/14/new-york-state-halts-construction-of-all-new-data-centers/)
- [Reflection inks $1B compute deal with Nebius](https://techcrunch.com/2026/07/14/reflection-inks-1b-compute-deal-with-nebius/)
- [The real AI race may no longer be at the frontier](https://techcrunch.com/2026/07/14/the-real-ai-race-may-no-longer-be-at-the-frontier-open-models-hugging-face/)

---

*（本文の情報は2026年7月25日時点のものです）*
