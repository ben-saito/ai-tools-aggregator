# MicrosoftがOpenAIから独立 — MAIモデル семействаと「共有メモリ」問題

2026年6月第1週、AI業界で複数の重要動向が確認された。MicrosoftがOpenAIとの契約上の制約から解放されて独自AI追求を打ち出し、7モデルの「MAI」ファミリーを発表。同時に企業向けAIエージェントの「共有メモリ」問題が調達要件として浮上している。

---

## Microsoft、OpenAIと「袂分かった」 — MAIファミリー7モデル発表

Microsoft AI責任者Mustafa Suleyman味は、Build 2026の舞台に立ってVentureBeat独占インタビューで明かした。**約6ヶ月前にOpenAIとの契約が改訂され、Microsoft AI部門は「超知能（superintelligence）」追求の正式な権限到手形**を得た。

「我々は6ヶ月前にOpenAIとの契約からようやく解放され、正式に超知能追求に取り組むようになりました」とSuleyman氏。"This is very early days."と付け加えた。

### MAI модель семейства — 7モデル構成

同日、Microsoftは**MAI（Microsoft AI Superintelligence Team）ファミリー7モデル**を完全内製で発表した:

- **MAI-Thinking-1**: 350億パラメータのレゾニングモデル。ソフトウェアエンジニアリングベンチマークで同クラス最高水準、数学的推論も得意。競合から蒸留せず、クリーンな商用ライセンス済みデータでスクラッチから訓練された点が特徴
- **MAI-Code-1-Flash**: 軽量コーディングモデル。GitHub CopilotとVS Code向け
- **MAI-Image-2.5**: テキスト-to-画像と画像編集支持的マルチモーダルモデル
- **MAI-Transcribe-1.5**: 43言語対応。米Microsoftいわく「利用可能な中最正確」な文字起こしモデル
- **MAI-Voice-2**: 多言語音声生成システム

注目点は、**OpenRouter、Fireworks、Baseten**などのthird-partyプラットフォームを通じて開発者が重みを自行 tuneできる点。モデル所有権とカスタマイズ自由度が初めて提供された。

### 契約改訂の意义

2019年からのOpenAI投資契約では、Microsoftは以下を制約されていた:
- AGI研究の禁止
- 一定FLOPS超のモデル訓練禁止
- OpenAIexclusive cloud providerとしての排他関係

Novemberの改訂でこれらの制約が解除された。Suleyman氏はいま「best-of-both environment」を標榜し、OpenAIとの協調と独自超知能追求を並行させる。

---

## AIエージェント навчання на работе — 共有メモリが調達要件に

VentureBeatが報じたもう一つの重要動向は、**AIエージェントが学習してもチームに共有されない問題**が企業調達の判断基準になりつつあること。

### 問題の本质

AIエージェントをチームで使用する場合、一人のエンジニアが是正しても、その改善は次々に消える。別のチームメンバーが同じツールを開くと、ゼロからのスタートになる。複数のエージェントが协作するworkflowではこの問題がさらに深刻化する。

Asana Chief Product OfficerのArnab Bose氏:
> 「Model providersはレゾニングとretry loopsの改善は大きく進んでいますが、エンタープライズの work contextを共有メモリの形で提供することは得意ではありません」

Asana調べでは、**75%の知識労働者が業務でAIを使用しているが、生産性成果を上げたと報告した企業は5%のみ**。このギャップの主な原因が「individual learning vs team learning」にあった。

### 共有メモリ架构の课题

エージェントの裏侧기는ステートレス设计が基本のため、メモリはコンテキストウィンドウ外に専用层として配置される。この领域はまだ未成熟で、以下が未定:
- 何が存储されるべきか
- 誰がそれを管理するか
- 異なるエージェントとユーザーが同時に書き込んだ场合の整合性

Collate共同創業者CTOのSriharsha Chintalapani氏:
> 「エージェントはプロンプトの品質に敏感です。タスクを強く理解している人ほど正確な結果を得られます。それは詳細なプロンプトを構築できるからだけでなく、より良いフィードバックを与えられるからです。エージェントは受け取った修正を覚え、その知識を続けてプロンプトに適用します」

### 企業内の二極化

MicrosoftのCopilotは**個人别アプローチ**を採用。ユーザーの役割、語調の好み、作業パターンを個人メモリとして保存し、Microsoft 365の各サーフェスに適用する。

これに対しAsanaは**チーム全体の文脈グラフ**をエージェントに自動提供。プロンプトエンジニアリングの專門知識がなくてもチームメイト全员に修正が適用される。

Zeta Global最高データ責任者のNeej Gore氏:
> 「共有文脈は企業の Intelligenceを複利する『生きたメモリ』になります」

エンタープライズ向けAIプラットフォーム選定において、共有メモリ问题是もう「技術的なnice-to-have」ではなく、**調達の判断基準**になっている。

---

## WWDC 2026 — Siri大幅改造とApple Intelligenceの进化

TechCrunchが伝えたところでは、Appleは6月に開催予定のWWDC 2026で**Siriの大幅改造**を実施する見込み。

既存の「Siri」は单一クエリ対応の简单なアシスタントだったが、新型は**画面上の内容を把握し、個人のコンテキストを理解し、複数のステップ任务をhandlingできる「視覚的インテリジェンス」**へと进化する予想。

Apple Intelligenceの範囲も拡大され、デバイス上でのAI処理能力向上が图られている。開発者向けセッションでは新しいAPIとフレームワークの発表も予定されているとTechCrunchは報じた。

---

## データセンター建設への住民反対 — 政治問題化

The Vergeによると、Virginia大学とAnthropicの経済学者が共同研究で、AI経済が年間約2500〜2600%の実質成長を遂げていることを実証した。この成長の影で、**AI用データセンター建設に対する住民反対が政治問題**になっている。

Virginia州ではAI処理能力扩大に向けた施設建設に対し、环境影響と消費水量への懸念から地元住民の抵抗起きている。これはGeorgia州でのOpenAI施設計画にも波及している。

---

## 参考リンク

- [Microsoft AI chief says company was "set free" from OpenAI to pursue superintelligence (VentureBeat)](https://venturebeat.com/ai/microsoft-ai-chief-says-company-was-set-free-from-openai-to-pursue-superintelligence/)
- [AI agents are learning on the job — just not for your whole team (VentureBeat)](https://venturebeat.com/ai/ai-agents-are-learning-on-the-job-just-not-for-your-whole-team/)
- [What to expect from WWDC 2026: Siri's highly anticipated revamp and Apple Intelligence updates (TechCrunch)](https://techcrunch.com/2026/06/06/what-to-expect-from-wwdc-2026-siris-highly-anticipated-revamp-and-apple-intelligence-updates/)
- [Microsoft unveils new AI models to lessen reliance on OpenAI and lower costs for developers (CNBC)](https://www.cnbc.com/2026/06/02/microsoft-unveils-new-ai-models-to-lessen-reliance-on-openai-and-lower-costs-for-developers.html)

---

*（本文の情報は2026年6月7日時点のものです）*