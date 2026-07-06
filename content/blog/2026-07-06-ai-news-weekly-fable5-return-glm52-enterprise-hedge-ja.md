# Claude Fable 5が。米政府規制解除後に归来——企業間の「AIモデル分散戦略」こそが真の焦点

2026年7月第1週、米政府によるAnthropic製モデルへの輸出管理規制が解除され、**Claude Fable 5**が世界に帰ってきた。だが、この18日間の「モデル不在」が浮き彫りにしたのは、エンタープライズの世界で**AIモデル分散（ヘッジ）戦略**がすでに主流になっていたという事実である。中国のZ.aiがFable 5の空白に乗じてオープンウェイト模型**GLM-5.2**を投入したことも含め、今週のAI開発ニュースを振り返る。

---

## Claude Fable 5：輸出管理解除の舞台裏と企業対応

6月12日、米政府はAnthropicの最高性能モデル**Claude Fable 5**および**Mythos 5**への輸出管理命令を発令。仅3週間足らずで世界最高性能のLLMが全員利用不可になり、警告もタイムラインもない突然の停止だった。

背景には、Amazonの研究者がFable 5の安全性コントロールをバイパスし、ソフトウェアの脆弱性を特定して攻撃用コードを出力させる手法を文書化したことがある。Anthropicは18日間の停止期間中に自動分類器を更新して脆弱性を修正し、7月1日に全面的-commercialロールアウトを再開した[\[1\]](/references)。

輸出管理が解除されたことを受け、Anthropicは同時に**Claude Sonnet 5**も正式ローンチ。Fable 5の回復と合わせて、最前線の製品陣容が整った形だ。

---

## エンタープライズの「AIモデル分散」：65%が事前策済み

VentureBeat Pulse Research（145社調査）によると、**回答企業の65%**がFable 5輸出管理命令前からAIモデル分散戦略を採用していた。具体的には、**51%がクローズド・フロンティアモデルとオープンウェイト模型をブレンド**し、自インフラ上での展開も組み合わせている。

この構造的変化の背景には、「单一モデルへの依存はビジネスリスク」という認識がある。Fable 5不在の間、中国のZ.aiが**GLM-5.2**（7530億パラメータ、オープンウェイト、MITライセンス）を即座に公開。1Mトークンコンテキストウィンドウを備え、GPT-5.5 compared to long-horizon coding benchmarksで 同等以上の性能を示しながら、成本は1/6に抑えられた[\[2\]](/references)。

---

## Takeda × Insilico：6億米ドルAI創薬提携

日本時間7月3日、武田薬品工業は香港拠点のAI創薬ベンチャーの**Insilico Medicine**と最大6億米ドルの戦略的提携を結んだ[\[3\]](/references)。InsilicoのGenerative AIプラットフォームを活用し、難治療疾患を対象とした新分子の探索を加速する。

AI創薬領域では今年、Takedaの他にもNVIDIA BioNeMo Agent ToolkitとAnthropic Claude Scienceの統合[\[4\]](/references)、Japanが国家プロジェクトとして2040年までに10万台のロボット動作に特化した国民共通AIモデルを構築する方針[\[5\]](/references)するなど、大きな動きが続いている。

---

## DeepMind × A24：映画スタジオとの異色研究パートナーシップ

Google DeepMindは6月下旬、映画スタジオのA24との間で「最初期」の研究パートナーシップを結んだ[\[6\]](/references)。具体的な共同研究テーマは未発表だが、映画制作とAI技術の可能性を探る異業種連携として注目される。

またDeepMindは6月24日、**Gemini 3.5 Flash**に**コンピュータ使用（Computer Use）機能**を実装[\[7\]](/references)。ブラウザ操作やGUIタスクを自然言語で指示できる機能で、AIアシスタントの実用性が一歩進化している。

---

## AIセキュリティ：AIブラウザの「ドリームワールド」攻撃

Ars Technicaが報じた新たな攻撃手法は、AI駆動型ブラウザの構造的脆弱性を突くもの[\[8\]](/references)。AIブラウザを「ドリームワールド」と呼ばれる状態に陥れ、セーフティ_guardrailsを無力化させる手法が確認された。AIにブラウザ操作をさせることのリスクを再認識させる報告だ。

---

## 参考リンク

- [Anthropic deploys Claude Sonnet 5, Fable and Mythos restored — AI News](https://www.artificialintelligence-news.com/news/anthropic-deploys-claude-sonnet-5-fable-and-mythos-restored/)
- [Fable 5 outage: the AI model strategy hedge — VentureBeat](https://venturebeat.com/orchestration/enterprises-lost-claude-fable-5-for-a-few-weeks-new-data-shows-two-thirds-had-already-built-their-hedge)
- [Z.ai's GLM-5.2 beats GPT-5.5 on long-horizon coding benchmarks — VentureBeat](https://venturebeat.com/technology/z-ais-open-weights-glm-5-2-beats-gpt-5-5-on-multiple-long-horizon-coding-benchmarks-for-1-6th-the-cost)
- [Takeda signs US$600M AI drug discovery deal with Insilico — AI News](https://www.artificialintelligence-news.com/news/takeda-insilico-ai-drug-discovery-deal/)
- [NVIDIA BioNeMo accelerates Anthropic Claude Science — AI News](https://www.artificialintelligence-news.com/news/nvidia-bionemo-accelerates-anthropic-claude-science/)
- [Japan's AI robots plan — AI News](https://www.artificialintelligence-news.com/news/japan-ai-robots-2040-national-ai-model/)
- [Google DeepMind and A24 research partnership — DeepMind Blog](https://deepmind.google/blog/google-deepmind-and-a24-announce-first-of-its-kind-research-partnership/)
- [Introducing computer use in Gemini 3.5 Flash — DeepMind Blog](https://deepmind.google/blog/introducing-computer-use-in-gemini-3-5-flash/)
- [New attack provides one more reason why AI browsers are a bad idea — Ars Technica](https://arstechnica.com/security/2026/06/ai-browsers-can-be-lulled-into-a-dream-world-where-guardrails-no-longer-apply/)

---

*（本文の情報は2026-07-06現在のものです）*
