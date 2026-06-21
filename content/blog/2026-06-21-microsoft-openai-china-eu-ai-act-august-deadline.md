# AI開発最新ニュース（2026年6月中旬）：Microsoft的中国生意、EU AI Actラベル義務化、G7首脳会議

2026年6月中旬のAI業界は、米中AI取引の構造変化、EU規制の具体化、そしてAI投資の過熱という3つのテーマで動いていた。開発者にとって特に注目すべきは、MicrosoftがOpenAIモデルの中国販売を独占する構図と、8月に迫ったEU AI Actの実質義務化である。

---

## Microsoft：中国でのみOpenAIモデル販売の独占立場

Bloombergの報道可知、MicrosoftはOpenAIおよびAnthropicが中国向け販売を見送っている中で、GPTシリーズを中国最大手のインターネット企业提供に販売できる唯一の米AIベンダーとしての地位を確立している。

**ByteDance**がMicrosoft最大のAI顧客であり、OpenAIモデルを基盤とした服務を利用しており、**年間10億ドル以上**をMicrosoftのAI・クラウド服務に支出する見込みである。Ant Group、Meituan、TencentもAzure経由でAIモデルを購入しているが、Antは自社開発モデルを使用しており、主力製品は外部システムに依存していないと主張している。

Microsoft社内ではこの成長を控えめに扱わず、むしろ慶祝している。Azureの中国におけるAI収益は、他の販売地域より急速に拡大し、2025年6月までの会計年度で概ね**3倍**に増加した。

### 技術的ポイント

- **MicrosoftのOpenAI契約**は、海外でのGPTモデル販売に関する独自の条款設定を可能にしている
- OpenAIとAnthropicは両方とも知的財産と悪用の懸念から中国への直接販売を見送っている
- AnthropicモデルはMicrosoft的中国ラインアップにも存在しない
- Brad Smith社長は議会に対し、2024年の中国ビジネスが会社収益の**約1.5%**を占めたと述べた

---

## EU AI Act：8月2日からAI生成コンテンツへのラベリング義務

欧州委員会は2026年6月、EU AI Actに基づく**AIコンテンツラベリング実践規範（Code of Practice）**を公開した。2026年8月2日から、以下の2点が義務付けられる。

1. **ディープフェイクおよびAI生成・操作された公的利益に関するテキスト**は明確にラベル付けが必要
2. **対話型AIシステム**（カスタマーサービスボットなど）と聊天するユーザーは、AIと对战していることを知らされる必要がある

### 技術開発者への影響

このCodeは**Supply Chainの両側に作業を分担**する：

| 立場 | 責任 |
|------|------|
| **モデル提供企業**（モデルをビルドする会社） | 出力をマシンリーダブル形式でマークし、川下で検出可能にする |
| **モデルデプロイ企業**（現実の製品にAIを配備する会社） | 視覚的なラベリングを実装（人間のレビューなしの場合） |

Code本は**任意**だが、その背景にある義務は必然的である。Article 50に基づき、Codeに署名するかどうかにかかわらず、8月2日から規制は適用される。Codeに署名することは、コンプライアンスを示す認められた方法となる。

### 次のステップ

- Codeは署名用にオープン
- 欧州委員会とAI Boardによる妥当性判断が必要
- 別枠の委員会ガイドラインで法解釈とCodeの未COVER分野を明確化予定
- 6人の独立専門家が180以上のステークホルダーの意見を経て制定

---

## G7：AI CEOが国家元首に — 新しい国際秩序

6月のG7会議では、**AI CEOがNation-Stateの長として出席**するという新しい国際秩序の象徴的な場面が見られた。これはAIgia глав государствと実業家の境界が曖昧になりつつあることを示している。

技術主権、安全、保障、そして民主主義を所管するHenna Virkkunen欧州委員会実行副委員長は、「欧州の人々は、見聞、読解したものがAIによって作成または変更された場合、それを知る権利がある。特にそのようなコンテンツが公共の議論を形成し得る場合はそうだ」と語った。

---

## AI投資の過熱：警告信号

Wall Street Journalは「AIに流れ込む全ての資金は巨大な警告信号である」と題する分析を刊登した。一方、Forbesは「AI = エネルギー = 生命：力がAI競争をどのように決定するか」と題し、**電力不足がAI開発の次のボトルネック**になると警告している。

Los Angeles Timesの報道可知、主要AI企業は米国各地の選挙で広告戦争に資金投入しており、「粉砕された」という反応もが出ている。

---

## 開発者視点のまとめ

1. **Microsoft/OpenAI的中国取引**は、API提供企業にとって地政学的リスク管理の重要性を再認識させる。Azure経由のモデル販売はMicrosoftに\$1B+/年の収益をもたらしている。

2. **EU AI Act August Deadlines** は、EU向け提供服务を開発するにとってコンプライアンス対応の準備が不可欠。マシンリーダブルなラベル対応と、目に見えるラベル実装の両面が必要。

3. **AI投資の過熱**は、Infrastructure構築派とApplication派のバランスが重要。電力制約はHardware/Chip企業への投資を呼び込む可能性。

---

## 参考リンク

- [Microsoft sells OpenAI models in China — AI News](https://www.artificialintelligence-news.com/news/microsoft-sells-openai-models-china/)
- [EU AI content labelling code of practice — AI News](https://www.artificialintelligence-news.com/news/ai-content-labelling-eu-code-of-practice/)
- [G7 AI CEOs as heads of nation-states — Axios](https://www.axios.com/2026/06/20/g7-ai-ceos-nation-states)
- [AI = Energy = Life — Forbes](https://www.forbes.com/ai-energy-life/)
- [All the Money Flooding Into AI Is a Giant Warning Sign — WSJ](https://www.wsj.com/articles/ai-investment-warning-sign)

---

*本文の情報は2026年6月21日時点のものです。*
