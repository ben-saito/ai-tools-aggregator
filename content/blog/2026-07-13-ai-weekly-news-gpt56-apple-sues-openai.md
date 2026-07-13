# AI開発ニュース週間レポート（2026年7月第2週）

OpenAIの新型モデル**GPT-5.6**がMicrosoft 365 Copilotの推奨モデルに採用、AppleがOpenAIを提訴、企業AIエージェントの「コンテキスト層」問題、Googleの表形式データ特化Foundation Model「TabFM」、AIコーディングツールが生む新しいサプライチェーン攻撃「Slopsquatting」——今週もAI分野は目が離せない展開が目白押しだ。

---

## GPT-5.6がMicrosoft 365 Copilotの推奨モデルに。OpenAIとMicrosoftの複雑な関係

OpenAIは7月9日、新しいGPT-5.6ファミリーを発表し、**Microsoft 365 Copilotの「推奨モデル（preferred model）」**としての採用を明らかになった。Word、Excel、PowerPoint、Chat、Cowork」などMicrosoft 365の全製品に展開され、「トークンあたりの知的パフォーマンス向上」と「コスト対性能の改善」がうたわれている。

同時に**GPT-Live**——音声ベースの自然対AIインタラクションを実現する新一代ボイスモデル——もChatGPT Voice向けにリリースされており、テキスト生成にとどまらないマルチモーダル拡張が加速している。

一方、TechCrunchの報道によれば、この発表はOpenAIとMicrosoftの「分離（breakup）観測」がくすぶる中で行われるされており、両社の関係性は技術協力と資本構造の緊張が同時に進行する複雑な段階にある。

---

## AppleがOpenAIを提訴——技術者がAppleのトレードシークレットを流出か

7月10日、AppleがOpenAIおよびJony Ive率いるIO Productsを相手取り、**トレードシークレット窃取疑惑で提訴**した。Apple側は、Appleの技術者がAppleのトレードシークレットをOpenAIのハードウェア計画を進めるために盗んだと主張している。

特に注目すべきは、この不正行為がOpenAIのシニアリーダシップ、特に**長年のAppleの元従業員**によって指示されていたとされる点だ。さらに、Ars Technicaの別報道では、NYタイムスがOpenAIが関連著作権訴訟でChatGPTの学習ログを隠蔽・削除したと主張しており、Appleとの法的紛争とは別の著作権問題も並行して進行している。

---

## 企業の57%が「AIエージェントが自信満々に間違う」現場を 경험——コンテキスト層の欠如が背景に

VentureBeatが7月10日に伝えたところによれば、**企業の57%がAIエージェントが「自信を持って完全に間違った回答」を出す場面を実体験**しており、その原因の大多数が**ビジネスコンテキストの欠落または不整合**にあることがわかった。

AIエージェントの回答が的外れになる場合、モデル自体ではなく**コンテキスト層（context layer）**の失敗である可能性が指摘されている。調査対象の75%の企業がまだ「エージェント向けコンテキスト層」を保有していない現状も相まって、AIエージェントの自律性が拡大する一方、その信頼性確保のための基盤整備が遅れている構図が浮かび上がる。

また別のVentureBeatの調査では、**69%の企業がAIエージェントで共有APIキーを使用**しており、認証情報の分散によるセキュリティリスクも深刻化していますます。

---

## GoogleのTabFM：表形式データ特化のFoundation Model——微調整なしで未见过テーブルに単一フォワードパスで予測

Google Researchは7月10日、表形式データ（tabular data）向けの新しいFoundation Model**TabFM**を発表した。

従来の機械学習では、データセットごとにモデル微調整を行うのが標準的なアプローチだったが、TabFMは**インコンテキスト学習（in-context learning）**の枠組みで表形式予測を再定義し、未见过のテーブルに対しても**単一のフォワードパス（single forward pass）**で予測を生成できる。

このアプローチにより、従来の週単位〜月単位の微調整工程が**1回のAPIコール**に置き換えられ、プロダクション投入までの時間が劇的に短縮される。構造化データ分析の世界でFoundation Modelが主流になる可能性を示す重要な発表だ。

---

## Slopsquatting：AIコーディングツールが生むサプライチェーン攻撃の新たな次元

VentureBeatとArs Technicaが7月8日〜11日にかけて伝えたところによると、**Slopsquatting**——AIコーディングツールが生む新しいソフトウェアサプライチェーン攻撃——が急速に脅威として浮上している。

LLMは存在しないソフトウェアパッケージ名を уверенноに生成する（ハルシネーション）傾向があり、脅威アクターがその**架空のパackage名を悪意あるコードと共に登録**する。開発者がAIアシスタントの提案をそのまま信じると、プロジェクトの初日から悪意ある依存関係を混入させることになる。

Ars Technicaの報道では、現在最も 인기 있는9つのAIツールがこの方法で悪用可能であり、大規模ボットネット（「HalluSquatting」）の構築に悪用された事例も紹介されている。AIコーディングアシスタントの信頼性とセキュリティ検証の重要性が改めて浮き彫りになった。

---

## 参考リンク

- [OpenAI Launches Its New Family of Models with GPT-5.6 - TechCrunch](https://techcrunch.com/2026/07/09/openai-launches-its-new-family-of-models-with-gpt-5-6/)
- [Apple Sues OpenAI Over Alleged Trade Secret Theft - TechCrunch](https://techcrunch.com/2026/07/10/apple-sues-openai-over-alleged-trade-secret-theft/)
- [57% of Enterprises Have Watched AI Agents Be Confidently Wrong - VentureBeat](https://venturebeat.com/data/57-of-enterprises-have-watched-ai-agents-be-confidently-wrong-the-fix-is-an-agentic-context-layer-but-who-has-one)
- [Google's TabFM: Foundation Model for Tabular Data - VentureBeat](https://venturebeat.com/technology/googles-tabfm-skips-per-dataset-training-and-still-predicts-on-tables-its-never-seen)
- [Slopsquatting: The Software Supply Chain Threat - VentureBeat](https://venturebeat.com/security/forget-typosquatting-slopsquatting-is-the-software-supply-chain-threat-created-by-ai-coding-tools)
- [OpenAI Blog](https://openai.com/blog)
- [DeepMind Blog](https://deepmind.com/blog)

---

*本文の情報は2026年7月13日時点のものです。*
