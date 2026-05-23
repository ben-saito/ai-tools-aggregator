# AI開発ニュースまとめ（2026年5月22日）

OpenAIのシンガポールへの大型進出、NVIDIAが狙う2000億ドル市場、そして中国がAIで再生可能エネルギー基盤の全体像を把握する話——今週のAI開発ニュースを3本立てる。

---

## OpenAI、シンガポールに米国以外初のAIラボ——IMDAのエージェントAIガバナンスフレームワークも改訂

OpenAIは5月22日、ATx Summitにて「OpenAI for Singapore」を発表し、シンガポールに米国以外では初めてとなるApplied AI Lab（同社が呼ぶ「Applied AI Lab」）を設立すると明らかにした。 Ministry of Digital Development and Information（MDDI、旧IMDA）との共同プロジェクトで、総額 **S$3億以上** の投資枠が組まれている。

### 200人以上の技術職を創出

ラボには今後数年間で**200人以上のシンガポール在住エンジニア**が配置される予定。forward-deployed engineer（先行配備エンジニア）と呼ばれる役割が中心になり、現地の政府機関や企業に対してAI展開の支援を行う。

対象領域は以下：
- **公共サービス**（電子政府、行政DX）
- **金融**
- **デジタル基盤**

教育・人材開発面では、Ministry of EducationやGovTechと協力し、OpenAI Academyのシンガポール版を開講。National AI Impact Programmeへの参加や、先生向けハッカソン「Codex for Teachers」の開催も予定されている。AIネイティブスタートアップ向けアクセラレーター機能も設置し、微企業や中小規模事業者がAIを業務・顧客対応に活用するためのワークショップを提供する。

### IMDA、エージェントAIガバナンスフレームワークを改訂

同時に、Infocomm Media Development Authority（IMDA）は2026年1月の世界経済フォーラムで公表した**エージェントAIガバナンスフレームワーク**の改訂版を发布了。60以上の組織和企业（AWS、DBS、Google、Salesforceなど）からフィードバックとケーススタディを収集し、以下の領域を追加した：

- **マルチエージェントシステム**に伴うリスク
- **サードパーティ製エージェント**の信頼性问题
- **automation bias**（自動化の過度の信頼）
- **人間の説明責任**（human accountability）の明確化

ケーススタディとして注目的是Dayos（シンガポール発のエンタープライズAI自動化企业）の事例。同社はAIチケットング・エージェントを構築し、雷リスク低い単純なアクション（パスワードリセットなど）は自動化・双週監査、高リスクなアクション（権限変更など）は人間の承認を必须とする**段階的リスクレベル**を採用した。

TencentのCodeBuddyは自然言語でコード生成からデプロイまでを行うエージェントAIコーディングシステムで、外部ツール利用前に必ず人間がplain languageで内容を確認・承認する設計になっている。

GovTech Singaporeは省政府向けエージェントコーディング助手の展開事例を提供。政府内部のみに限定し、外部ツールは不允许。低リスクシステムからはじめ、中央ロギングと承認済み外部ツールを接続するフレームワークを構築した。

---

## 中国、AIで全土の風力・太陽光施設を counted——国家規模でのエネルギー見える化が可能に

北京大学とAlibaba GroupのDAMO Academyの研究チームが5月Natureに公开发表した论文で、中国の全土の風力・太陽光施設を**AIで完全に把握**した成果が报告された。

### 319,972カ所の太陽光と91,609基の風車を特定

サブメートル解像度卫星画像に基づく深層学習モデルを使い、**7.56TBの衛星画像**を処理。结果、中国の**319,972カ所の太陽光発電施設**と**91,609基の風力タービン**を特定した。対象は1,915の中国の郡にわたり、海沿いの家庭用パネルから内蒙古高原の大規模風力発電所まで網羅する。

この数据集により、初めて国家規模で** solar-wind complementarity（太陽光-風力補完性）**の実態が明らかになった。地理的に離れているほど両者の変動が相互に補完されやすくなり、甘粛の曇天が内蒙古の風力に影響を与えないように、範囲が広いほど系統安定化效果が大きい。

現在中国は省级規模で координа―ションしているが、全国統一管理の potencial非常大。重慶などの再生可能エネルギー廃棄（curtailment）問題の抜本的な解决方案にもなり得る。

### 電力需要も急上昇中

背景にはAI数据中心の電力需要急伸がある。中国 Electricity Councilによると、2026年第1四半期のデータサービス向け電力消費は前年同期比**44%増加**の229億kWhに達した。北部和西部の省份（土地がやすく、再エネ資源に富む）にデータセンターが集中しており、再エネ発電所との地理的重なりが拡大している。

DAMO Academyの深層学習モデルは地理空間AI（Geospatial AI）の実用例として注目され、研究チームの数据集とコードはZenodoで公开されている。

---

## NVIDIA、第2の фронтにVera——2000億ドルのCPU市場で存在感のあるしか

NVIDIAの2026年度第1四半期実績（売上高816億ドル、アナリスト予想788億ドル超え）は市場を驚かせたが、Jensen Huang CEOが電話会合で示唆したのはこれからの更大な話だった。

### Veraで2000億ドル市場にアクセス

Huang氏によると、2026年度末までにVera CPU関連の年間売上高が**200億ドル**に達する見込み。「BlackwellとRubinのGPUラインアップが2025〜2027年に呼ぶと見込む1兆ドル市場に**加えて**、Veraは別市場の2000億ドルへの扉を開ける」と説明した。

Vera開発の背景には大顧客の自社チップ投資がある。Google（TPU）、Amazon（Trainium）、Microsoftが700億ドル超（2025年の約400億ドルから急増）をAI基盤に投資する一方、同時に自社製ASICでAI推論をコスト最適化する動きが加速している。NVIDIA的优势はトレーニングにあり、推論ワークロードではカスタムチップに地盘を奪われる 가능성이指摘されていた。

Veraは именно この推論市場を狙った製品。Groqの技術（Nvidiaが170億ドル规模和推测されるライセンス供与契約で取得）を活用し、Blackwell・Rubinとのプラットフォーム統合（Vera Rubinプラットフォーム）で全年期に投产予定。

### 供給が最大のボトルネック

Huang氏も認めていたのは供給問題。「Vera Rubinの全生涯を通じて供給制約状態が続く」（原文: "we'll be supply-constrained through the entire life of Vera Rubin"）と語り、部品・製造能力の確保が成長の鍵になると位置づけた。

NVIDIAは同時に**800億ドルの自社株買い戻しプログラム**を発表。四半期配当を1セントから**25セント**に引き上げるなど、財務的な強さを見せつけた。

決算は市場予想を大幅に上回ったものの、株장은時間外取引で1.6%下落。アナリストのJacob Bourne氏（eMarketer）は「四半期オーバーパフォーマンスはもはや価格反映済み。問題はAI構築の持続性が2027〜2028年も続くかどうか」と分析する。

それでもHuang氏が示す成長ドライバーは明確。AI特化クラウド顧客の四半期別支出がハイパースケーラーに匹敵する規模になりつつあるという。Veraはその**second largest**事業という位置づけ。供給が軌道に乗れば、NVIDIAのAIチップ帝国はGPUだけでなくCPU фрон트でも揺るぎないものになる。

---

## 参考リンク

- [OpenAI opens Singapore AI lab as IMDA updates AI framework](https://www.artificialintelligence-news.com/news/openai-singapore-ai-lab-imda-agentic-ai-framework/)
- [China's AI just mapped its entire renewable energy grid](https://www.artificialintelligence-news.com/news/ai-energy-grid-mapping-china/)
- [Nvidia's Vera chip is the US$200 billion bet Jensen Huang doesn't want you to overlook](https://www.artificialintelligence-news.com/news/nvidia-vera-chip-200-billion-market/)
- [AI is being used to resurrect the voices of dead pilots (TechCrunch)](https://techcrunch.com/2026/05/22/ai-is-being-used-to-resurrect-the-voices-of-dead-pilots/)

---

*（本文の情報は2026年5月22日時点のものです）*