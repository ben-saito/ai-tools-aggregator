# AI週間ニュース（2026年7月第1週）：モデルとエージェントの分離、中国AIコンパニオン規制、Takedaの創薬AI戦略

2026年7月第1週は、AI業界のプロダクション導入が加速する中、「モデルとエージェントの分離」「AIコンパニオンの規制」「生成AIによる創薬」など、複数の大きな潮流が同時進行で進んだ週となった。

---

## Vercel CEOが見据える「モデルとエージェントの分離」という戦い

TechCrunchが独占インタビューで報じた内容によると、VercelのCEO Guillermo Rauch氏の見解は明確だ。「去年はプロトタイピングの年だった。空は限界ではない、必要なのは本番環境で物を動かすことに集中することだ」。

Vercelは現在**1日600万デプロイ**を達成しており、そのうち**半分はコーディングエージェント**によってトリガーされている。さらに同社のAIゲートウェイには**毎日1兆トークン以上**が流れている。こう語るRauch氏自身が「去年の最大の教訓は、エージェントのホームラン用例は2つしかない」と認める。1つは明白にコーディングエージェントであり、2つ目の `"キラーアプリ"` こそが**企业内部エージェント**だという。

企业内部エージェントの実例としてRauch氏が挙げたのは、自社の営業担当者のケースだ。「彼女のボトルネックは創造性でも知性でも関係でもなかった。**データがなかった**」。彼女は「成長しているアカウントがどれか分からない」「なぜ特定の案件が停滞しているのかが分からない」という課題を抱えていた。Rercelは「Eve」というフレームワークで自然言語によるエージェント命令体系を構築し、「Sandbox」でエージェントを隔離環境下で動作させる「ケージ」方式を採用した。

**Sandboxの最大の利点はデータコントロール**にある。DevinやCursorのようなAIコーディングIDEは、誤った設定下ではコードベース全体を学習してしまうリスクを常に抱えている。Rauch氏の発言akte：「Airbusの社長と話しましたが、あなたには何十年的旅客機設計のコードがある。それらが学習に使われることを想像してみてください」。

さらに印象的だったのは、顧客とAIラボの関係の変化についての言及だ。「去年は『すべてをOpenAIかAnthropicに乗せる』と決める人が多かった。今年は『モデル、ハーネス、データプラットフォーム、サンドボックス、ゲートウェイ——各ピースは_plug and play_だ』と理解している」。これはつまり、**どのラボとも特定の関係を持たず、必要に応じて切り替える**という考え方への移行を示している。

---

## 中国AIコンパニオン規制：7月15日、「寂しい陪伴」の終焉

中国本土のAIコンパニオンを取り巻く規制が7月15日に施行される。その前日、**ByteDanceのDoubao（抖音豆宝）** とAlibabaの**Quwen（通義千問）** は、 regulationの核心となる機能を静かに無効化した。

中国がAIコンパニオンを「禁止」している——”寂しい陪伴“を止めようとしている——と読む向きもあった。しかし実体はそれとは異なる。**同規制は「作業を依頼するエージェント」と「陪伴を提供するエージェント」を明確に区別**しており、禁止対象は後者の「情感的な依存を生み出すAIサービス」に限定される。

規制の正式名称は「AI擬人化対話サービス管理暫定措置」で、4月10日にCyberspace Administration of China（国家互聯網信息弁公室）と4省庁が連名で公布した。実のところ、中国のAIコンパニオン市場では多くのユーザーが「Casual roleplay（カジュアルなロールプレイ）」や「誰かがあなたを覚えているという感覚」を求めていた。regulationの狙いはこの「Emotional attachment（感情的依存）」の設計そのものを規制することにある。

---

## Takeda、Insilico Medicineと600Mドル創薬AI協業

日本の武田약품工業は6月30日、HKベースの**Insilico Medicine**との間で最大6億ドルのAI創薬コラボレーション協定を締結した。対象領域や疾患ターゲットは非開示だが、TakedaはInsilicoのPharma.AIプラットフォームへのアクセスの取得が判明している。

InsilicoはAIによる薬剤候補化合物の発見・設計で知られ、同社のPhilosophyは「AI駆動で発見作業を進め、Takedaは開発・製造・商業化を独占的に手掛ける」という分業モデルだ。両社が事前合意した科学的・早期開発基準を満たす薬剤候補の発見に重点を置く。

**創薬AIの商業化事例**として、Insilicoはすでに複数の候補化合物を臨床段階に進めている実績がある。武田药品にとっては、自社の創薬パイプラインに外部AIを取り込む形でのDX（デジタルトランスフォーメーション）戦略の一歩となる。

---

## NVIDIA BioNeMo × Anthropic Claude Science：生命科学研究の加速

Anthropicは6月29日、科学研究者向けAIワークベンチ「**Claude Science**」の公開β版を発表し、同時にNVIDIAの**BioNeMo Agent Toolkit**との統合を明らかにした。

NVIDIAが整備しているGPU加速コンピューティングスタック（物理ハードウェア、ソフトウェアフレームワーク、ライブラリ、科学研究ライブラリ一式）は、Claude Science生命科学モジュールを通じて研究者たちが触れることになる。NVIDIA BioNeMoは分子的特性予測や構造生物学シミュレーションを得意とし、Anthropic Claudeの自然言語理解・推論能力と組み合わせることで、**「生物学者のためのAI агент」** としての統合ワークフローが実現する。

---

## 日本国家戦略：1,000万台のAIロボットへ

日本政府は6月30日、劳动力不足解決策として**1,000万台のAIロボット**という数値目標を含む国家戦略を正式に承認した。SoftBankら民间企業もこのプロジェクトにコミットしている。

単なる数値目標ではない点が重要だ。政府は「Wish list」ではなく「正式に委託されたプロジェクト」として位置付けており、**2040年をめどにAI駆動の自動化で労働市場を再編する**ことを国家目標としている。少子高齢化が進む日本では、ケア・製造業・物流等领域でのロボット導入が急務となっており、政策の後押しとともに民間投資も集まっている。

---

## イングランド銀行のエージェントAI規制 검토

イングランド銀行（Bank of England）は6月28日、**agentic AI（自律型AI）** が金融セクターに与える影響について既存の規制框架が適用可能かを 검토する方針を表明した。Deputy Governor Sarah Breeden ECBフォーラムでの発言が端的に表している：「現在の規制框架は、直接的な人間の指示なしに動作できるAIエージェントのために設計されていません」。

支付、貿易、サイバーセキュリティ、Operations（業務運用）など、金融機関内でエージェントAIがすでに導入されつつある領域について、既存のコンプライアンス框架が十分でない可能性が浮上している。

---

## その他の注目トピック

- **Apple Siri、iOS 27ベータで「Pace」と「Expressivity」調整機能を解禁**：ChatGPTの voice customizationに追いつく試み。ユーザーはAIアシスタントの話し速度と感情表現を細かく設定可能に
- **Google、暗黙のAI学習を続ける——オプトアウト方法も**：GoogleがSearchサービスの隐私設定を更新し、ユーザーアップロード済みの画像・音声・動画がAI学習に使われる仕様に。設定からのオプトアウトが必要
- **Reddit、LLMでスパム対策——LLMが生み出した問題をLLMで解決**：Redditは1日あたり2,300万スパムビューをブロックし、2.5万件の新規スパム投稿・コメントを毎日検出。older systems相比20%のスパム削減を達成

---

## 参考リンク

- [Vercel CEO on the fight to split off models from agents — TechCrunch](https://techcrunch.com/2026/07/06/vercel-ceo-guillermo-rauch-on-the-fight-to-split-off-models-from-agents/)
- [You can now customize Siri's pace and expressivity in iOS 27 beta — TechCrunch](https://techcrunch.com/2026/07/06/you-can-now-customize-siris-pace-and-expressivity-in-the-latest-ios-27-beta/)
- [If you use Google, you're training its AI. Here's how to opt out — TechCrunch](https://techcrunch.com/2026/07/06/if-you-use-google-youre-training-its-ai-heres-how-to-opt-out/)
- [Reddit is using LLMs to solve a problem LLMs largely created — TechCrunch](https://techcrunch.com/2026/07/06/reddit-is-using-llms-to-solve-a-problem-llms-largely-created/)
- [China's AI companion rules: what Beijing is really banning — AI News](https://www.artificialintelligence-news.com/news/china-ai-companion-rules/)
- [Takeda signs $600M AI drug discovery deal with Insilico — AI News](https://www.artificialintelligence-news.com/news/takeda-insilico-ai-drug-discovery-deal/)
- [NVIDIA BioNeMo accelerates Anthropic Claude Science — AI News](https://www.artificialintelligence-news.com/news/nvidia-bionemo-accelerates-anthropic-claude-science/)
- [Japan's answer to its worker shortage: An AI model for 10 million robots — AI News](https://www.artificialintelligence-news.com/news/japan-ai-robots-2040-national-ai-model/)
- [Bank of England reviews AI rules for agentic AI in finance — AI News](https://www.artificialintelligence-news.com/news/bank-of-england-agentic-ai-finance-rules/)

---

*（本文の情報は2026年7月7日時点のものです）*
