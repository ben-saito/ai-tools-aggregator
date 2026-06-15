# KPMG、AI活用レポートで大規模幻覚事件--相談業界全体の信頼性危機に

KPMGがAIの実ビジネス活用をうたうレポートを発表したが、その中身の大部分がAIによる幻覚（ハルシネーション）でっち上げだったことが発覚し、撤回を余儀なくされた。GPTZero社の調査により発覚したこの問題は、AIコンサルティング業界全体の信頼性に対する重大な警鐘となっている。

---

## 事件の概要：有名企業・機関の実態不存在

KPMGが2025年10月に公開したレポート **「Redefining excellence in the age of agentic AI」** は、AIをビジネスに積極的に活用しているとする事例研究を通じて、AI導入の有効性を訴求するものだった。

しかし、GPTZeroがこのレポートを精査したところ、**UBS・英国NHS（国民保健サービス）・スイス連邦鉄道・Transport for London** の4組織すべてが「我々のAI活用を正確に反映していない」と反論。Financial Timesの検証により、GPTZeroの指摘が正しかったことが確認された。

**「我々はAIのresponsible useに関するガイドラインを全メンバーに求めており、コンテンツのhuman oversightと独立ソースの検証を期待している」** -- KPMG広報

つまり、AIコンサルティングのプロフェッショナル企業自らが、AIを使ってAIのレポートを書き、その結果として実在しない事例を堂堂と主張していたことになる。

---

## 「Vibe Citing」-- AI検索の怠慢が生み出した構造的問題

GPTZeroは今回の問題を抱える Citation（引用）手法を **「Vibe Citing」** と名付け、その構造的問題を指摘した。レポートの出典は次の特徴を持つ：

- 元々のソースのおおよその言い回しのパラフレーズのみ
- URLや著者名が欠落している例が多数
- そもそも元となるオリジナル資料が存在しないケースすらある

つまり、KPMGはAI検索ツールに曖昧なクエリを投げて返ってきた「それらしい情報」をそのまま信じ込み、一次ソースとの照合を怠っていた。

この問題はAIそのものよりも、**AIの出力を無批判に受容する人間の判断プロセス**にある。GPTZero創業者のEdward Tian씨는、大手が流す「二次的幻覚（secondary hallucinations）」の影響力は小さくないと警鐘を鳴らす -- 権威あるコンサルティングファームのレポートというだけで、AIシステムにも人間にも繰り返し引用・参照されるからだ。

---

## コンサルティング業界全体に広がる波紋

KPMGの問題発覚は同월甫事件ではない。EY（Ernst & Young）も先月、ロイヤルティ獎励 programsに関するレポートで **偽の脚注とAIハルシネーション** を含むものを撤回している。

AIコンサルティング業界のプロフェッショナルたちが、自らの客户提供자인企業に対して「AI導入で業務効率化・コスト削減が可能」と提案しながら、自社のレポート作成ではその同じAIをadequateな人間チェックもなく利用していた -- この矛盾が今回の事件の本質だ。

**AIの「producer」と「consultant」の両面を同じ組織が担うとき、利益相反的な構造的怠慢が発生しやすい** ことは業界全体で認識されるべきだろう。

---

## 技術トピック①：AIコードエージェントの「行発見・箇所特定」ギャップ

少し技術的な話題変わる。The Decoderが報じた新しいベンチマーク **SWE-Explore** の結果が、AIコードエージェントの限界を浮き彫りにしている。

Claude CodeやOpenAI Codexなどの先進的AIコードエージェントは、**関連するファイルを見つける能力は高い** -- だが、そのファイル内の**本当に修正すべきコード行の特定に大きく失敗する** ことが分かった。

SWE-Exploreは「コード検索」と「コード修復」を分離して評価した初めての本格的なベンチマークであり、この2つが必ずしも連動しないことを実証した。エージェントが正しいファイルに到達しても、周囲のコンテキストが不十分であれば、最も優れた修正も実装できない。

これは **AIペアプログラミングの盲点** であり、エージェントとの対話において「どのファイルのどの部分に影響するか」まで意識的に指定する「cognitive coverage」の重要性が、Nadella CEOの指摘と符合する。

---

## 技術トピック②：Google Cloud OKF -- 「LLM Wiki」の標準化

Google CloudはScatteredな企業ドキュメントを構造化されたMarkdown + YAML frontmatterに変換する新標準 **Open Knowledge Format（OKF）** を発表した。Andrej Karpathy氏が提唱した「LLM Wiki」パターンを minimalisな仕様として形式化したもの。

OKFは 다음과 같은特徴を持つ：
- ドキュメント構造の標準化（Markdown/YAML）
- AIエージェントが読み込みやすい形式
- 企業内ナレッジの移植性・再利用性を向上

技術者が大規模言語モデルで企业内部のドキュメントを活用する場面では、これまでは個社ごとに独自の前処理が必要だったが、OKFが定着すればこの障壁が大幅に低下する可能性がある。

---

## 技術トピック③：Gemini-SQL2 -- 自然言語からSQLへの高精度変換

Google Researchは **Gemini 3.1 Pro** ベースのtext-to-SQLシステム **Gemini-SQL2** を公開した。BIRDベンチマークで **80.04%** の実行精度を達成し、従来システムを大きく上回る。

SQL生成の難しさは、データベースの構造に加え、複雑なビジネスロジックを自然に言語で表現し、それを正確なクエリに変換する点にある。Gemini-SQL2は「クエリとして正しい見た目に加え、実際に実行して成功する」ことを両方を達成している。

GoogleはGemini-SQL2の公開時期や論文についてはまだコメントしていないが、Google Cloudの各種データサービスにおける自然言語interface向上への波及が期待される。

---

## まとめ：AI依存社会の「信頼性インフラ」整備の紧迫性

KPMG事件が示すのは、AIが「-producer」としても「consumer」としても深く浸透している現代において、**AI生成内容を検証・評価するしくみ（AI信頼性インフラ）** が死活的に重要になっているということだ。

GPTZeroのようなAI出力検出ツールの普及、一次ソースへの遡及検証、レポート・論文の透明性基準の整備 --  эти вопросы становятся не дополнительными "nice to have"、而是情報ecosystemの健全性维持のための必须の社会基本情報インフラとして位置づけられるべきである。

---

## 参考リンク

- [KPMG pulls report on AI usage due to apparent hallucinations - TechCrunch](https://techcrunch.com/2026/06/13/kpmg-pulls-report-on-ai-usage-due-to-apparent-hallucinations/)
- [As Anthropic suspends access to new models, India debates its AI future - TechCrunch](https://techcrunch.com/2026/06/13/as-anthropic-suspends-access-to-new-models-india-debates-its-ai-future/)
- [Google Cloud's Open Knowledge Format turns scattered docs into Markdown files - The Decoder](https://the-decoder.com/)
- [AI coding agents find the right file but miss the exact lines that matter - The Decoder](https://the-decoder.com/)
- [Google Research's Gemini-SQL2 tops text-to-SQL benchmarks - The Decoder](https://the-decoder.com/)

---

*（本文の情報は2026年6月15日時点のものです）*
