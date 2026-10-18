# Meta、利用規約でニュースサイトのAI訓練利用を一時許容 —— 批判殺到を受け翌日撤回

Metaが10月末より生效する新しい利用規約において、ニュースサイトを巡回・スクレイピングし、そのコンテンツでAIモデルを訓練できる可能性を*Neman Lab*が指摘。批判を受け、Metaは翌10月17日に当該の文言を削除する対応を見せた。この一連の出来事は、AI開発における**データ収集の法的境界線**を改めて浮き彫りにした。

---

## 何が起きたか

Metaの新しい規約（10月30日生效予定）では、Facebook、Instagram、WhatsApp、Messengerでビジネスアカウントを使用してコンテンツを宣伝している事業者に対し、そのウェブサイトを巡回・スクレイピングするための「自動ソフトウェア（ウェブスクレイパー、ボット、ロボット、スパイダー、クローラー、ユーザーエージェント）の使用」を承認する条項が盛り込まれた。

*Neman Lab*の報道によれば、**Cornell大学のデジタル・情報法教授James Grimmelmann**は「ニュース出版社にとって、これはMetaが任何コンテンツのAI訓練に使用し、場合によって出版社と競争しながらコンテンツを提供することも許可することを明確に意味している」との見解を示した。

---

## 技術的ポイント：robots.txtは無力か

この規約の技術的に重要なポイントは、**法的専門家が「Metaが企業の商業利用規約が他のブロッキング指示（たとえばサイトのrobots.txtファイル）に優先すると主張できる可能性がある」**と指摘している点だ。

robots.txtは古くからあるウェブ巡回プロトコルで、网站がクローラーに「このページは巡回可？还是不可？」を示す君子協定だ。しかし、robots.txtは技術的な制限ではなく法的強制力もない。Metaの新しい規約がこの君子協定を無効化する法的根拠になり得るのかどうかが問われている。

---

## Metaの反論と翌日の撤回

Metaのコミュニケーション担当副社長Andy Stone氏）はXにて声明を出し、「この更新はニュースサイトの巡回をイメージしてものではなく、サードパーティーのウェブサイトでの販売商品の正確な情報を取得してプラットフォーム上での広告・コンテンツ推薦を行うことが目的です」と強調した。

また、Metaの広報担当者は「Metaがウェブクローラーの使用方法を変更したことは一切ない…コンテンツ所有者は引き続きrobots.txtフラグを使用できる」と反論した。

**しかし10月17日、Metaは規約から関連する文言を削除**し、「集約したクロール条件は広告・ビジネス製品にのみ適用されるものであり、規約自体に明記しました」と新たな声明を発表した。

---

## AI開発者视角からの分析

### データ収集の法的境界線がここに

この一件は、AI開発者にとって**利用規約と技術的プロトコルのギャップ**を考える上で重要な案例となる：

- **robots.txtの法的限界**：今日のAI訓練では、robots.txtの指示を無視してでもコンテンツ収集できる技術的余地がある。法的強制力を持たない君子協定AI訓練の文脈でどう位置づけられるかは未解決
- **プラットフォームの力の不均衡**：Metaのような巨大プラットフォームは、利用規約一条で网站所有人への強い圧力を行使可能
- **透明性への要求**：どのデータがAIモデルの訓練に使われたか、その根拠は何か、という透明性への要求が業界全体が高まっている

### 業界全体の類似の対応

| 企業 | 対応 |
|------|------|
| OpenAI | 出版社とのライセンス契約を締結（だが批判も） |
| Google | 著作権者と和解金プログラムを拡大 |
| Stability AI | 多くの著作権訴訟で提訴中 |

---

## 関連トピック：AIエージェントのアクセス拒否问题

The Vergeの別の報道によれば、OpenAI、Google、xAI、InstinctなどのAIエージェントが、多くのウェブサイトからアクセスを拒否されている。YelpはAIエージェントのみ有料のデータライセンシングプログラムへの参加を条件としており、Delta Air Linesもエージェントのチケット予約をブロックしている。

AI Agentsがウェブを自律的に巡回してタスクを実行するという愿景と、ウェブサイト側のアクセス拒否の動きがせめぎ合っている。

---

## 参考リンク

- [The Verge: Meta's new terms may allow it to train AI on news sites for free](https://www.theverge.com/tech/1012846/meta-business-terms-scrape-news-publishers)
- [The Verge: Meta removes language that raised scraping and AI training concerns](https://www.theverge.com/tech/1013409/meta-removes-language-that-may-have-allowed-it-to-scrape-news-sites)
- [The Verge: Websites are closing their doors to AI agents](https://www.theverge.com/ai-artificial-intelligence/1013195/ai-agents-blocked-web)
- [Neman Lab: Meta's new commercial terms will allow the scraping of news sites, legal experts say](https://www.niemanlab.org/2026/10/metas-new-commercial-terms-will-allow-the-scraping-of-news-sites-legal-experts-say/)

---

*（本文の情報は2026年10月18日時点のものです）*
