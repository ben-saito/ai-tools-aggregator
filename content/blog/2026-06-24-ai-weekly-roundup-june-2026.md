# AI開発ニュース週間まとめ（2026年6月第4週）

2026年6月第4週は、エージェントAIの企業活用が本格化する一周間に変わった。AnthropicのSlack統合、生成AI採用ツールの台頭、DeepMindのハリウッド進出、Google内部での人材流出――本周最深りのAI開発トレンドを届ける。

---

## Anthropic、「Claude Tag」でSlackに常駐するAI同僚を提供

Anthropicは6月23日、企業向けの新機能 **Claude Tag** を発表した。Slackに常駐するAIチームメイトとして動作し、組織のSlackメッセージをリアルタイムで学習していく。

単なる生産性ツールではない点が特徴的だ。Anthropicの狙いは**組織知識の蓄積**と**エンタープライズワークフローの内製化**にある。Claude Tagは発言パターン、プロジェクト文脈、非公式な意思決定の流れを読み取り、それを社内の制度設計やオンボーディングにフィードバックする。

開発者視点で見ると重要なのは、Claude Tagが**外部APIではなく、内部的に組織コンテキストを保持する点**だ。従来のLLMチャットボットが会話ごとにリセットされるのに対し、Tagは组织的メモリ（organizational memory）をarchitecturallyに組み込んでいる。これにより、RAG（Retrieval-Augmented Generation）なしに、文脈を跨いだ長時間の会話への参加が可能になる。

技術的な課題も存在する。Slackメッセージには機密情報が含まれるため、**データポスチャ**と**アクセス制御**の設計が不可欠だ。Claude Tagがどこまでの情報を保持し、誰がそれを閲覧できるかの透明度が必要となる。

---

## 採用にAIエージェント——Fika Jobsが$4M調達、スウェーデンから新潮流

スウェーデンのスタートアップ **Fika Jobs** は6月23日、AIエージェントが面接官となる動画優先採用プラットフォームで**$4M**のシードラウンドを調達した。

LinkedInとTikTokを再解釈したようなUIで、候補者が短尺動画プロフィールを投稿し、AIエージェントがそれに対して質問を行う。候補者はAIとの会話を通じて自分を表現し、企業は大量の履歴書を精読する前に定性的な情報を得られる。

このモデルの技術的な注目点は**マルチモーダルLLM活用**にある。候補者の表情、声のトーン、回答内容の一貫性を複合的に評価できる点が、従来のキーワードスクリーニングとは一線を画す。

---

## OpenAI、开源コミュニティ向けバグ修正支援プログラムを開始

OpenAIは6月22日、**AIを活用した开源バグ検出・修正支援プログラム**を開始した。OpenAIのモデルが开源リポジトリのコードを入力として、潜在的な脆弱性とバグを検出し、修正パッチを提案する。

これはOpenAIにとって**开源コミュニティへの貢献**であると同時に、同社のモデルが現実のコードベースで学習されるメリットもある。現実のバグパターンは学習データの品質向上に貢献するためだ。

開発者にとって直接的なインパクトは、GitHub ActionsやCI/CDパイプラインに**AI駆動バグ探知**を組み込めるAPIが提供される可能性が高い点だ。

---

## Google DeepMind × A24——$75Mでハリウッドに殴り込み

Google DeepMindは6月22日、映画スタジオ **A24** と総額**$75M**の協業契約を締結した。AI映人性 filmmakingツールの共同開発が目的だ。

DeepMindの映画向けAIはまだ具体的な成果物が公開されていないが、同社の **Veo**（動画生成モデル）や **Imagen**（画像生成モデル）の技術が基盤になると推測される。A24は従来から実験的なビジュアルアプローチで知られるスタジオであり、AIツールとの相性は高い。

技術者が注目すべきは、**生成AIと編集ワークフローの統合**だ。現在の動画生成モデルは短いクリップ止まりだが、映画レベルの長尺コンテンツ生成には編集・合成工程との密な結合が必須になる。

---

## SpaceX、Reflection AIにGB300クラスタを月$150Mで提供

SpaceXの子会社関連のAIインフラ企業 **Reflection AI** が、SpaceXの **Colossus 2** データセンター（テネシー州メンフィス近郊）の **Nvidia GB300** クラスタを月額**$150M**で2029年までの契約を決めた。

Reflection AIは开源AIラボを標榜しており、月額$150Mのコンピューティングリソースを开源モデル開発に充当するとされている。GB300はNvidiaの最新のAI ASICであり、大規模言語モデルの訓練と推論を高効率で行うことができる。

この契約の意義は、**SpaceXがAIコンピューティング企業としての地位を確立**しようとしている点だ。Rocket科学とAIインフラの意外な組み合わせだが、低軌道衛星ネットワークがAI向けの高伝送遅延対応に貢献する可能性がある。

---

## AIチップ戦争——Groqが$650M調達、Nvidiaとの人材争奪戦

AI推論チップの新興企業 **Groq** は6月22日、**$650M**のシリーズ資金を確認した。同社は先前、Nvidiaの従業員大規模獲得（$20B規模と報道）された「ノット・アックイ・ハイヤー」事件的状況の真っ只中にあった。

GroqのLPU（Language Processing Unit）はTransformerモデルの推論において、Nvidia GPU比で大幅に消費電力当りの性能を高けると主張している。AIの普及に伴い、**推論特化型チップ**の需要は今後さらに拡大すると予想される。

---

## AIと環境——Nvidia、水使用量削減の冷却システムを発表も本質的問題は未解決

Nvidiaは6月22日、データセンター向けの水冷システム刷新で**冷却水使用量削減**を発表し、AIの環境負荷への対策を進めていると強調した。

しかし批判も強い。AIの最大の水使用は実は**データセンター駆動の化石燃料発電所**の冷却水であり、Nvidiaの発表は本質的な問題を回避しているとの声がある。

AI開発者にとって、**カーボンフットプリント**の問題は今後避けて通れない課題だ。訓練コスト（二酸化炭素排出量）と推論コスト（水資源消費）は、モデルのアーキテクチャ選択に直接影響する。

---

## Nobel受賞者John Jumper、DeepMindからAnthropicへ

AlphaFoldの開発でNobel化学賞を獲得した **John Jumper** が、Google DeepMindからAnthropicへの跳槽が6月20日に判明した。Jumperだけではない——複数のDeepMind研究者がAnthropicに移籍しており、Google AIの**人材流出**が深刻化している。

これはAnthropicの研究環境と報酬パッケージへの高い競争力を示す指標でもある。AI安全性を最優先とするAnthropicの研究方向と、性能最大化のGoogle方針との違いが、顶级研究者のamil流向を決めている面がある。

---

## AI規制の影——FDAがエージックAIを採用、Signal幹部が見直し呼吁

FDA（米食品医薬品局）は**エージックAI**（自律的に行動するAI）の導入を進めていることが明らかになった。药物承認プロセスの一部をAIエージェントが自動処理する试点プログラムが既に動き出している。

一方、Signalの **Meredith Whittaker** 代表はTechCrunchのインタビューで、「AIチャットボットはあなたの友達ではない」と強調した。AIとの亲密な関係が人間の判断能力を損なう可能性を指摘し、**AIの信頼性问题**について警鐘を鳴らしている。

---

## 参考リンク

- [Anthropic's Claude Tag is learning your company, one Slack message at a time - TechCrunch](https://techcrunch.com/2026/06/23/anthropics-claude-tag-is-learning-your-company-one-slack-message-at-a-time/)
- [India's MoEngage bets that the future of marketing is millions of AI agents - TechCrunch](https://techcrunch.com/2026/06/23/indias-moengage-bets-marketings-future-on-millions-of-ai-agents/)
- [Fika Jobs raises $4M to build a video-first hiring platform where AI agents interview candidates - TechCrunch](https://techcrunch.com/2026/06/23/fika-jobs-raises-4m-to-build-a-video-first-hiring-platform-where-ai-agents-interview-candidates/)
- [OpenAI launches new initiative to help find and patch open source bugs - TechCrunch](https://techcrunch.com/2026/06/22/openai-launches-new-initiative-to-help-find-and-patch-open-source-bugs/)
- [Google DeepMind bets $75M on AI's future in Hollywood with A24 deal - TechCrunch](https://techcrunch.com/2026/06/22/google-deepmind-bets-75m-on-ais-future-in-hollywood-with-a24-deal/)
- [SpaceX inks compute deal with Reflection AI, an open source AI lab - TechCrunch](https://techcrunch.com/2026/06/22/spacex-inks-compute-deal-with-reflection-ai-an-open-source-ai-lab/)
- [AI chipmaker Groq confirms $650M raise, re-staffs after Nvidia's $20B not-acqui-hire deal - TechCrunch](https://techcrunch.com/2026/06/22/ai-chipmaker-groq-confirms-650m-raise-re-staffs-after-nvidias-20b-not-acqui-hire-deal/)
- [Nvidia wants to cut data center water use - TechCrunch](https://techcrunch.com/2026/06/22/nvidia-wants-to-cut-data-center-water-use-but-thats-not-the-same-as-fixing-ais-water-problem/)
- [Nobel laureate John Jumper is leaving DeepMind for rival Anthropic - TechCrunch](https://techcrunch.com/2026/06/20/nobel-lureate-john-jumper-is-leaving-deepmind-for-rival-anthropic/)
- [Signal's Meredith Whittaker wants you to remember that AI chatbots are not your friends - TechCrunch](https://techcrunch.com/2026/06/20/signals-meredith-whittaker-wants-you-to-remember-that-ai-chatbots-are-not-your-friends/)

---

*本文の情報は2026年6月24日時点のものです。*
