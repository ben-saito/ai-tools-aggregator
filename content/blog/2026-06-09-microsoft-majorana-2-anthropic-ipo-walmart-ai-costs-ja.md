# AI開発ニュース：Microsoft量子チップ「Majorana 2」とAnthropicのIPO申請 —2026年6月9日

2026年6月上旬、AI業界は**量子コンピューティングの現実化**、**AI企業のIPOラッシュ**、**企業におけるAIコスト管理**という3つの大きなテーマで動いている。Microsoftは量子チップ「Majorana 2」を発表し、量子エラー耐性が前世代比**1000倍向上**したことを示した。AnthropicはNASDAQへのIPO申請を準備中이며、ARRは470億ドルに到達。Walmartは従業員へのAIトークン配分を制限し、コスト意識の高まりを鮮明にした。本稿ではこれらのニュースを技術的観点から整理する。

---

## Microsoft Majorana 2：量子エラー耐性が1000倍向上

Microsoftは6月3日、量子チップ**Majorana 2**を発表し、量子エラー耐性が前世代比**1000倍向上**したことを明らかにした。従来の量子チップが frágilな計算状態を数秒しか保持できないのに対し、Majorana 2は**最大1分間**維持できる。Microsoftの比喩によれば、従来の電話バッテリーが1日で消耗するのに対し、新方式是で3年間駆動するような劇的な改善だ。

### 技術的詳細

Majorana 2の開発には**Microsoft Discovery**（ agentic AIプラットフォーム）が活用された。Discoveryは科学的なR&Dに特化したAIエージェント群とDiscovery Engine（研究推論ワークフロー用）から構成され、2026年6月初頭に一般公開されました。

注目すべきは、発見の性質だ。信頼性向上の最大要因である**超伝導素材をアルミニウムから鉛に変更**したのは、長年のventional材料研究の結果であり、AI推薦ではない。Microsoft Discoveryのエージェントが担ったのは、その周囲のデータ処理業務だった。

具体的に、エージェントは以下の作業を実行した：

- **製造ワークフローの管理**：材料変更に伴う製造パラメータの調整を自動化
- **測定の自動化**：量子ビットの状態を検出する計測工程を大幅に高速化（手動では数週間かかっていたものが、数時間に）
- **20年分のサイロ化された研究データの整理**：研究者個人では把握できない海量データの相関関係を抽出
- **3次元マッピング**：量子ビット条件の可視化により、並行して数百パラメータの電圧調整を同時に実行

Microsoft Quantum VPのZulfi Alamは「AIエージェントがデータ上で動作することで、人間には見えない相関関係を再合成できる。新しい世界秩序ではシミュレーションで目標候補を特定し、実験は1回だけで済む」と語る。

### プラットフォームと今後の展望

Microsoft Discoveryは企業顧客向けに提供開始された。無料版（GitHub Copilotアカウントで使用可能）の早期プレビュー版もある。Microsoftの量子タイムラインは2033年から**2029年に短縮**されたが、量子ロードマップには楽観的な圧縮の歴史があることに注意が必要。1,000倍の信頼性改善はMajorana 1の量子ビットとの比較であり、IBMやGoogleの異なるアーキテクチャとの直接ベンチマークではない。

---

## Anthropic、IPO申請によりAI業界が企業ユーティリティへ成熟

AnthropicがNASDAQへのIPO申請を準備していることが判明した。TechCrunchの報道によれば、AnthropicのARR（年間経常収益）は**2026年5月時点で470億ドル**に達した。2025年末の約90億ドルからわずか5ヶ月で**5倍以上**の急成長を遂げている。

### 公開市場化が業界に与える影響

基盤モデル開発企業が公開市場に進むことで、以下の変化が業界全体に生じる：

- **予測可能なBilling Cycleの導入**：急速なイテレーション重視から、標準的な企業調達に伴う構造的なリリーススケジュールと確立された料金体系への移行
- **API統合の継続的更新の強制**：Wall Streetが積極的な.margin拡大を要求すれば、企業は古いモデルバージョンの段階的廃止に直面し、API統合の継続的更新を強いられる
- **企業契約の交渉優位の転換**：Boardroomは、公開市場がAnthropicに短期yield重視を強制する前に、長期price locksと好都合なデータガバナンス契約を結ぶ機会を得る

### 技術的・ビジネス的課題

AnthropicのIPOが提起する問題は巨大だ。基盤モデル開発者は連続的な 대규모資本支出を必要としており、公開市場構造に変換する際に providerとclientの両方に高いOperational dragが発生する。公開Anthropicは、数万個のGPUを継続的に購入する必要性と、好況な四半期決算 postaの必要性のバランスを取らなければならない。

アナリストは「ベンダーが公開されて収益成長を証明できなければ、service-level agreementsの大幅変更や主要APIエンドポイントのsunsetによりoverheadを削減する可能性がある」と指摘する。未来のValuationは企業Unit Economics、Gross Margins、Customer Retentionに依存し、小規模プレイヤーの深刻な統合淘汰を招く可能性がある。

---

## Walmart、従業員のAIトークン使用を制限 — 企業AIコストの現実

Walmartは従業員向けの社内AIアシスタント**Code Puppy**の使用を制限する方針に転じた。LLMへの требованияが高かったことを受け、従業員に**固定数のAIトークン**を割り当てることが決定した。Walmartは約210万人の従業員を抱えており、たとえ従業員1人あたりのクエリとタスクリクエストが最小限でも、LLMコストは軽視できない規模になる。

### コスト構造の変化

従来のLLMは固定価格のサブスクリプションモデル（月額無制限アクセス）が主流だったが、今は**従量制（pay-per-use）**への移行が進んでいる。Walmartは210万人規模では、この従量制への移行が直接的なコストインパクトを持つ。

もう一つの重要なコスト要因は**Thinking Models（思考型モデル）**だ。従業員が再帰的なアクションを実行する大規模モデルを使用する場合、入力数据进行内部的に introspectionするため、処理トークン数が大幅に増加する。単純なスプレッドシート分析やプレゼンテーション作成などの比較的些細なタスクに、最前線のモデルを 사용할 때Costsが跳ね上がる。

### マルチエージェントワークフローのコストリスク

Walmartの事例は、**マルチエージェント型AIワークフロー**のコストリスクも浮き彫りにする。従業員が 원하는 결과를 얻るために複数のエージェントで반복ループを開始すると、sub-optimal結果の実コスト（必要なrefiningと再提出を含む）が現実の現金で計測可能になる。

Walmartは従業員に対し、タスクに最適なAIツールを慎重に選択するようコラーしており、高価な思考型モデルをtrivialタスクに使用することを抑制しようとしている。これは**ROI可視化への第一歩**であり、他の大企業にとって重要な先行事例となる。

---

## 参考リンク

- [Microsoft's Majorana 2 quantum chip is also a case study for agentic AI in R&D](https://www.artificialintelligence-news.com/news/microsoft-discovery-agentic-ai-majorana-2/)
- [Anthropic IPO filing marks AI maturing into enterprise utility](https://www.artificialintelligence-news.com/news/anthropic-ipo-filing-marks-ai-maturing-enterprise-utility/)
- [Walmart's AI workflows meet the realities of the balance sheet](https://www.artificialintelligence-news.com/news/walmart-limits-ai-use-as-workflows-meet-the-realities-of-the-balance-sheet/)

---

*本文の情報は2026年6月9日時点のものです。本稿はAI開発ニュースアグリゲータープロジェクトの一環として作成されました。*
