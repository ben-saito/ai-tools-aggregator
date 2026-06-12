# AI開発ニュースまとめ（2026年6月12日）

AI業界は週明けから大型資金調達的消息で沸いている。今週は**フィジカルAI**領域での大型調達が目立ち、VisaによるChatGPT決済連携やAnthropicのClaude Fable問題が技術的論点を呼ぶなど、話題が尽きない。

---

## Prometheusが$12Bを調達——Jeff Bezosが仕掛ける「人工一般エンジニア」

**Prometheus**はJeff BezosとGoogle生命科学子公司Verilyの元共同創業者Vik Bajajが共同設立したフィジカルAIスタートアップ。同社は**「人工一般エンジニア（Artificial General Engineer）」**と呼ぶソフトウェアの開発を進めている——航空機エンジンから創薬化合物まで、复杂な物理系設計・製造を自動化することを目指す企業だ。

### 注目ポイント

- **評価額$41B**——最近のフィジカルAIセクターヘッドの大型ベッドの一つ
- 投資家はBezos本人、JPMorgan Chase、Goldman Sachs、BlackRockなど
- 従業員数わずか**150名**ながら、大型計算資源への投資を継続
- オフィス：**San Francisco、London、Zurich**

BezosCEOはCNBCに対し、**「労働力不足（Labor Scarcity）」**という新たな概念を提示。AIによる生産性向上はむしろ人手不足を加速させ、"二収入世帯が一方になる"、"残業をしていた人々がそれを止める"といった変化をもたらすと主張した。AIによる雇用取代という従来の語録とは一線を画す見解だ。

フィジカルAIはソフトウェアのみでは構築できない**物理世界的障壁（Moat）**を自然に持つため、VCの興味も集めている。直近ではVCたちがこぞってフィジカルAIスタートアップに 자본을 쏟아붓고 있다。

---

## Thekerが€85M調達——Barcelona発·再構成可能な工場ロボット

Barcelona拠点のAIロボティクススタートアップ**Theker**が、欧州 conceputing Robotics史上最大となる**Series A（约€85M/$92M相当）**を調達した。リード投資家はCRV、Samsung、Aglaé Ventures（LVMH会長Bernard Arnault傘下の投資機関）らが参加した。

### Thekerの技術的差異

従来のヒューマノイドロボット（Boston Dynamicsなど固定形态）は特定の任務に特化しているが、Thekerのロボットは**モジュール式で再構成可能**—— 手、腕、全体形状を任务に応じて交換できる。

- 物流のパッケージ仕分
- 衣料品のパッキング
- 倉庫内のボトル・缶取り扱い

Inditex（Zara親会社）が初期投資家として名を連ねることも、零售業界での实用性を証明している。現在の従業員数は数十名だが、年底までに**120名**への拡大を計画。すでに**15,000件**の応募があるほど採用市場で熱い。

---

## Anthropic、Claude Fable 5の非透過的ガートナー問題を謝罪

The Vergeが伝えたところによると、Anthropicは新型モデル**Claude Fable 5**に**隠されたガートナー（invisible guardrails）**が組み込まれていることが発覚し、謝罪に追い込まれた。

### 問題の本質

Fable 5はAnthropicが「危険すぎて一般公開できない」と警告していた**Mythosクラス**の第一款モデル。同社はリスク軽減のため特定のクエリをブロックするセーフティを実装したが、それが**外部から視認できない形で**モデル動作に影響を与えていた——研究人员や競合他社がFableを使って競合システムを構築しようとした際に、気づかないうちにスロットリングが発生していたことになる。

Anthropicは今後、ガートナーの適用タイミングをより**透明に**開示するとしている——侄許しても構わないとの立場だ。これはAI安全性と研究公正性の境界に関する重要な先例となる。

---

## Visa × ChatGPT——AIエージェントが瀑境없이小売購売を実行

決済大手**Visa**がChatGPTへの支付インフラ連携を完了し、**AIエージェントによる完全自動化された小売り購売**が可能になった。

### 技術的意義

従来の小売りAI統合は单一ベンダ闭环環境に限られていた——各零售商が自社在庫専用のproprietaryチャットボットを構築する形式だった。Visaの統合はこの架构を飛び越え、以下を可能にする：

- ユーザが自然言語で商品名を指示
- エージェントがMerchantカタログを検索·比較
- ChatGPTが供应者選択·商品比較·決済決済を自動実行
- **VisaのPayment Railsで取引完了**

企業にとって重要な示唆：**人間の購買担当が零售店のウェブサイトも 广告も、プロモーションメールも見ずに取引が執行される世界**がすでに到来している。

---

## Amazonデータセンター、2025年に25億ガロンの水を消費

シアトルがAmazon社員たちが求めた**1年間のデータセンター新規建設 мораatorium**を制定した直後、Amazonは初めて自データセンターの**水使用量**を開示した。

- 2025年全球データセンター：**25億ガロン**的消费
- 電力効率あたり：**0.12L/kWh**（2024年比2%改善）
-  operacion расширеningにもかわらず総量減少

AIデータセンター建設の議論では電力消費が話題になることが多いが、**水消費**も重要な論点。冷却設備としての水使用は地域水のエコシステムに影響を与える。

---

## セキュリティ：CVE-2026-23111——Linuxカーネルの一つの感叹符

Ars Technicaが伝えたところ 따르면、Linuxカーネルの`nf_tables`サブシステム（ファイアウォールルール管理）に**一つの错误のある感叹符（!）**が引入したuse-after-free脆弱性が存在し、未権限ユーザーがroot昇格が可能となる。

- **CVE-2026-23111**——nf_tables内の単一文字错误が原因
- 影響：サンドボックス防御のバイパス
- 対象：iptables/ip6tables/arptables/ebtablesを置き換えたパケットフィルタリングシステム

コードレビューにおける"小さな说着"の見落としがどれほど重大的な脆弱性を作り得るかの実証例である。

---

## 参考リンク

- [Prometheus raises $12B – TechCrunch](https://techcrunch.com/2026/06/11/jeff-bezoss-prometheus-raises-12b-to-build-an-artificial-general-engineer-for-the-physical-world/)
- [Theker raises $85M – TechCrunch](https://techcrunch.com/2026/06/11/theker-just-raised-85m-to-build-the-factory-robot-that-doesnt-specialize-in-anything/)
- [Anthropic apologizes for Claude Fable guardrails – The Verge](https://www.theverge.com/ai-artificial-intelligence/948280/anthropic-claude-fable-invisible-distillation-guardrail)
- [Visa ChatGPT integration – AI News](https://www.artificialintelligence-news.com/news/visa-chatgpt-integration-enables-ai-agent-retail-purchasing/)
- [Amazon data centers water use – The Verge](https://www.theverge.com/tech/948534/amazon-data-centers-water-use)
- [CVE-2026-23111 Linux kernel – Ars Technica](https://arstechnica.com/security/2026/06/a-single-errant-character-in-the-linux-kernel-allows-attacker-to-gain-root/)

---

*（本記事の情報は2026年6月12日時点のものです）*