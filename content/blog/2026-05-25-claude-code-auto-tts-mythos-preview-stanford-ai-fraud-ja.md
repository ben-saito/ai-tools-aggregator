# AI開発最新ニュース（2026年5月25日）—— Claude Code自己発見アルゴリズム、Mythos Preview脆弱性大量発見、そしてAI倫理的問い

2026年5月24日〜25日、AI業界は複数の「内省的」トピックが並行している。Claude Codeが自律的にScalingアルゴリズムを発見し、Anthropicの脆弱性検出が修正速度超過、DeepMindのHassabisはSingularityの「麓」に humanityがいると言いながらLeCunは「現在のAIは知能がない」と断じる。さらにStanford卒業生のNY Times寄稿がAIと学術不正の関係を問いかけ、OpenAIは80年解けなかった幾何予想を反証したと主張する。既存の主流記事を補完する、これらの開発者視点から興味深いトピックを整理する。

---

## Claude Code、自己発見したScalingアルゴリズム——標準手法比70%計算量削減

The Decoderが報じた研究成果によると、**Claude Code**（Anthropicのコーディングエージェント）が、自律的にAI推論の制御アルゴリズムを発見した。これは単純な話ではない。

研究者たち（UMD、Google、Metaなどの共同グループ）は、「Test-time Scaling（TTS）」の制御アルゴリズム探索をClaude Codeに自律的に行わせた。背景にあるのは、LLMの「より難しい問題に使うトークン数を増やす」アプローチを、どう効率的に制御すべきかという問題だ。従来の **self-consistency**（多数投票で答えを導く）はとりわけ計算コストが高い。

Claude Code agentsは報酬関数だけを背負って(simulated environmentの中で)自律的に探索を実行。見つけたアルゴリズムは、self-consistencyと同じ精度を維持しながら**計算量を約70%削減**した。探索の全コストは**$30だけ**（另説として$4という数字も報道されている）。

この発見の意義は二つある。第一に、**AIがAIのアルゴリズムを人間以下に設計できる**可能性が現実になったこと。第二に、この自律的探索が人類の研究者にとって「理解不能なブラックボックス」になるリスクがあること。70%削減のアルゴリズムがなぜ機能するのか、今のところ説明されていない。

開発者にとっての角度看すと、Claude Code agentsの本格的な活用事例がまた一つ増えた。自律的な研究テーマ探索からコード最適化まで、Claude Codeの実用性が広がっている。

---

## Claude Mythos Preview——1ヶ月で1万件の重大脆弱性を検出、修正速度追上にならず

Anthropicの**Claude Mythos Preview**が、1ヶ月で約**1万件的重大脆弱性**をシステム関連ソフトウェアから発見した。Anthropicと約50のパートナー企業が「Project Glasswing」の一環として実施した。

問題の核心は**速度差**にある。AIモデルが脆弱性を検出する速度は、組織がそれを検証・修正する速度を大きく上回っている。言い換えると、**「発見したそばから放置される脆弱性」が膨大にたまっていく状態**が起きている。

Anthropicはこれを「危険な移行期」と警告している。セキュリティ業界のパラダイムが「検出中心」から「検出+修正の自動化」へ転換する必要があるが、まだその準備ができていない。

もう一つの注目点は、Anthropic自身がPentagonから**「supply chainリスク」**に指定されているにもかかわらず、依然としてNSAへのモデル供給を続ける可能性が高いとThe Decoderが伝えたことだ。理由の一つは、NSAを含む情報機関がNvidiaの最新のGrace Blackwellチップ不足していること。そしてAnthropicの「Mythos」モデルが古いハードウェアでも動作する点が、供給継続を可能にしている。White House Chief of Staff Susie Wilesが直接供給承認を与えたとNew York Timesは報じた。

---

## DeepMind Hassabis vs. LeCun——Singularityの麓か、それとも知能がないのか

DeepMind CEOの**Demis Hassabis**は、この数日の間に人類はSingularityの「麓（foothills）」にいるとの見解を示した。これに対しMetaのAI研究リーダー**Yann LeCun**は、「現在のLLMは真の意味での知能がない」と真っ向から反論した。

**Hassabisの主張**：現在のAI発展ペースが続けば、AGI乃至はSuperintelligenceへの到達が可能そうな未来が近づいている。DeepMindの立場からは、Googleの資源と統合された形で更强なAIシステム開発が加速できる。

**LeCunの主張**：本当の知能は「蓄積された知識やスキルの発揮」には現れない。新しい問題を初めて解く能力こそが知能の証であり、現在のLLMはそれを欠いている。訓練データにない問題が新たに登場すると失敗する。

**Gemini共同リード Oriol Vinyals**は両者の間を分ける見解を出し、「現在のモデルは7年前ならAGIに見えただろうが、経験からの学習や真のブレークスルーの生成についてはまだできない」と指摘した。

この議論は単なる研究者間の意見交換ではない。AIの将来に対する投資戦略や規制論争に直結する。Hassabis寄りの立場は「積極的に投資・規制強化が必要」、LeCun寄りの立場は「過度な規制は先進力を損なう」という政策意味を持つ。

---

## ByteDance——LLM訓練で「文字起こし」不如「質問」

ByteDance Seedの研究が、LLMの長いドキュメント訓練方法に関する重要な知見を公开发表した。

**従来の方法**：ドキュメントを文字起こし（transcription）させて、その内容を学ばせる
**ByteDanceの方法**：ドキュメントについて質問し、正しい回答を導く過程で学習

研究发现、**文字起こしを訓練タスクとして使用すると性能が低下**するに対して、Q&Aベースのアプローチは非常に長いドキュメント（訓練時に見た長さの4倍までの長さ）でも正確に回答できる。この知見は、7Bパラメータモデルがそれより大型のモデルよりも長いドキュメント処理能力で良い結果を出すことを可能にした。

開発者にとっての角度看：RAG（Retrieval-Augmented Generation）システムの構築において、「ドキュメントをどの形式で取り込ませるか」は性能に直結する。ByteDanceの結果は、ドキュメントをそのままベクトルデータベースに格納するより、Q&Aペアに変換してからretrieveさせる方が効果的である可能性があることを示している。

---

## Stanford卒業生のNY Times寄稿——「AIが学問不振の文化をデフォルトにした」

Stanford Universityの卒業予定者**Theo Baker**がNew York Timesに寄稿し、ChatGPTが彼の卒業クラス全体に与えた影响を述べた。結論：AIは既に存在していた学問的不正の文化をデフォルトにした。

Bakerは「あるクラスが『ちょっと位不正は当たり前』と思っていたのを、ChatGPTが加速した」と書いている。AIによる課題提出、Essayの自動生成、コードの自動完成——これらが「ありふれた手段」として默殺される状態になった。

The Decoderはこのessayを紹介しており、「Stanfordのような精英的な大学でもこの状況」という点が重要だと指摘する。AIの学術規範への影響は、各大学が個別に policies 作っているが、規範の实质的な拘束力があるとは言えない状態が続いている。

---

## OpenAI——80年解けなかった幾何予想を反証

OpenAIは、自社のReasoningモデルが**1946年以降の未解決だった幾何予想**を反証したと主張した。前回（2024年）の「数学prove」で痛い失敗を経験しているため、今回は事前に数学者たちの検証を依頼している点が特徴的。

現在のところ、検証を担当した数学者たちは「今回は正しい」との見解を示している。ただし、完全な学術的検証にはまだ時間を要する状况。

OpenAIの戦略としては、Reasoning能力向上による「科学的ブレークスルー」への期待が、モデルへの信頼性と投資家の関心を繋ぎ止める手段になっている側面がある。

---

## 参考リンク

- [Researchers let Claude Code discover AI scaling algorithms](https://the-decoder.com/researchers-let-claude-code-discover-ai-scaling-algorithms-that-humans-probably-wouldnt-have-designed/)
- [Anthropic warns Claude Mythos Preview finds bugs faster than developers can patch them](https://the-decoder.com/anthropic-warns-claude-mythos-preview-finds-bugs-faster-than-developers-can-patch-them/)
- [DeepMind's Hassabis sees humanity "in the foothills of the singularity" while LeCun says current AI isn't intelligent](https://the-decoder.com/deepminds-hassabis-sees-humanity-in-the-foothills-of-the-singularity-while-lecun-says-current-ai-isnt-intelligent/)
- [ByteDance study finds that asking LMMs questions beats making it transcribe text](https://the-decoder.com/bytedance-study-finds-that-asking-lmms-questions-beats-making-it-transcribe-text-for-long-document-training/)
- [A Stanford student reflects on his ChatGPT class and a culture of "just a little bit of fraud"](https://the-decoder.com/a-stanford-student-reflects-on-his-chatgpt-class-and-a-culture-of-just-a-little-bit-of-fraud/)
- [OpenAI claims it solved an 80-year-old math problem](https://techcrunch.com/2026/05/20/openai-claims-it-solved-an-80-year-old-math-problem-for-real-this-time/)

---

*（本文の情報は2026年5月25日時点のものです）*