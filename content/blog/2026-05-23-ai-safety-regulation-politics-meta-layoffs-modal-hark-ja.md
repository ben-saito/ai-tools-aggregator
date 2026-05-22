# AI開発最新ニュース（2026年5月22日）— AI安全規制の政治力学とインフラ投資ラッシュ

2026年5月22日、AI業界は米政府のAI安全規制撤回、業界リーダーによる人員整理、そして複数の大型投資ラウンドが同時に発生するという密度の濃い一日となった。Trump大統領によるAI安全大統領令の突然の取り下げは、政府と業界の関係において象徴的な岐路を示している。本稿ではこれらの動きを技術的・政治的に分析する。

---

## Trump大統領、AI安全大統領令を撤回 — テック大手のロビー活動実る

The Decoderなどの報道によれば、Trump大統領は5月22日（米国時間）、発表直前まで調整が進んでいたAI安全に関する大統領令への署名を突然取り下げた。背景にはElon Musk（SpaceX）、Mark Zuckerberg（Meta）、David Sacks（元AI・暗号通貨顧問）からの直々の電話があったとWashington Postなどが伝えている。

### 何が提案されていたか

撤回された草案の核心は、**前沿AIモデル（frontier model）を民間企業が連邦政府に提出し、セキュリティテストを受ける「自主的な」事前審査システム**だった。具体的には：

- AI企業は最新の前沿モデル公開の**90日前**までに連邦機関に提出
- 政府側はモデルの危険な能力的脆弱性をテスト
- ハッカーや外国勢による悪用の可能性がある欠陥を事前に検出
- **政府ライセンスや事前承認の義務化は明確に否定**——あくまで自主的な仕組み

この草案が浮上した直接の契機は、AnthropicのMythosのようなモデルが**自律的にコードのセキュリティ脆弱性を発見・悪用できる能力**を持つに至ったことへの懸念だった。

### Sacksの「最後の一撃」

興味深いのはDavid Sacksの動きだ。草案はMichael Kratsios（科学顧問）、Will Scharf（スタッフSecretary）、National Cyber DirectorのSean Cairncrossが調整し、Sacksも当初容認姿勢を示していた。しかし水曜日の夜遅く、「この自主的な制度が将来的に強制的なものに変わりうる」「将来の政权に悪用される可能性がある」と立場を翻し、木曜日の朝にTrumpに直接電話して草案全体を撤回させた。Sacks自身のスタッフにも事前連絡せずに行ったという。

### 業界内の分断

この問題はindustry内でも意見が分かれた。**OpenAI**のChris Lehane広報部長は草案を概ね支持した一方、他の企業は**90日の審査期間を14日に短縮**するよう求めた。また、財務省が主導役となる案にも異論が上がり、セキュリティレビューは本来CISAやNISTが 담당すべきだとの声が上がった。

Axiosに対し、政府高官は「あの『ドゥームズ』（AIの存在的リスクを警告し政府安全審査を推進する勢力）を満足させるためだけにこんなことをする必要があるのか」と述べており、規制撤回を支持する立場から批判的に評価している。

---

## Meta、幹部・管理職を10%削減 — Zuckerberg氏「AI競争で成功は保証されていない」

CNBCやFortuneが伝えたところによれば、Metaは5月21日、全社の約10\%にあたる人員を解雇した。これは昨年に続く2度目の大量解雇となる。

Mark ZuckerbergCEOは社員向けメモで、「AIレースで成功することは保証されていない。誰が胜つかわからない。我々はよりリーンで俊敏である必要がある」と警告した。

これはMicrosoft、Google、AnthropicがAIインフラに何百億ドルも投資する中、Metaも例外ではないことを示す動きだ。業界では「AI開発コストが指数関数的に増加する中、スケールのメリットを最大化しないと生き残れない」という認識が広がっている。

---

## Modal Labs、$355M調達で評価額$4.65B — サーバレスAIインフラの勝利

SiliconANGLEやTechCrunchが伝えたところによれば、サーバレスAIインフラスタートアップのModal LabsがSeries Bで$355M（约57億円）を調達し、評価額は$4.65B（约750億円）に達した。

Modal Labsは**AIモデルのトレーニングや推論所需的计算資源をオンデマンドで提供**するプラットフォームだ。特点是：

- ユーザーは自分のコードを持ち込むだけで大規模GPUクラスタにアクセス可能
- 従量課金制で、固定コスト不要
- AI開発者はインフラ管理）から解放され、モデル開発に集中できる

調達した資金は 글로벌展開と研究者向けプログラム拡大に使用される予定だ。

---

## AIチップスタートアップHark、$6B評価で資金調達

BloombergやTechCrunchによれば、AIハードウェアスタートアップのHarkが新たな資金調達ラウンドで**$6B（約970億円）の評価額**を記録した。

HarkはAI推論に特化した半导体チップ 개발하는企業で、学習（training）ではなく**推論（inference）コストの削減**に焦点当てている点が的特点だ。NVIDIAのGPUが學習に適しているのに対し推論任务是より省コストなチップで擔えるという市場要求を受けている。

---

## Illinois州、AI安全・プライバシー条例を成立 — 全国初の包括的AI規制

Illinois上院の民主党议员단이5月21日、全国で初となる包括的な**AI安全・プライバシー条例**を上院可決した。内容には以下が含まれる：

- AIシステムによる個人データの取り扱いに関する透明性要件
- 高リスクAIシステム（雇用、クレジット判断、医療など）への事前評価義務
- 消費者のAI使用に関する知情権
- 規制違反に対する民間提訴権

この条例はColorado州のAI Actと似ていますが、より広範な適用範囲を持つ。テックindustryからの反発が予想されるが、州レベルでAIガバナンスを強化する動きが加速している。

---

## California州、Meta解雇後にAI労働者保護の大統頒令に署名

KQEDなどの報道によれば、Gavin Newsom加州知事はMetaが10%の人員解雇を行った翌日、AIを使用する労働者を守るための**大統頒令**に署名した。

大統頒令の主要内容：

- 州政府機関に対し、AI導入による影響を受けた労働者への再訓練プログラム拡充を指示
- 民间企業に対するAI関連の雇用影響評価の Disclosure 要求
- AIを使用した解雇決定に関する上诉手续の整備

Metaの大量解雇とこの大統頒令署名は、**AIの労働市場への影響を巡り、政府とテック企業の関係が Increasingly tensiongy**になっていることを示している。

---

## 参考リンク

- [Trump pulls AI safety order after last-minute calls from Musk, Zuckerberg, and Sacks (The Decoder)](https://the-decoder.com/trump-pulls-ai-safety-order-after-last-minute-calls-from-musk-zuckerberg-and-sacks/)
- [Serverless AI infrastructure startup Modal Labs seals $355M funding round (SiliconANGLE)](https://siliconangle.com/2026/05/21/serverless-ai-infrastructure-startup-modal-labs-raises-355m/)
- [Meta laid off 10% of its workforce as Mark Zuckerberg warns that in the AI race 'success isn't a given' (Fortune)](https://fortune.com/2026/05/21/meta-layoffs-2026-ai-race-warning/)
- [AI chip startup Hark valued at $6 billion in new funding round (Bloomberg/TechCrunch)](https://techcrunch.com/2026/05/21/ai-chip-startup-hark-raises-funds-at-6-billion-valuation/)
- [Illinois Senate Democrats pass nation-leading AI safety and privacy package (Illinois Senate Democrats)](https://www.illinoissenatedemocrats.com/news/2026/5/21/illinois-senate-democrats-pass-nation-leading-ai-safety-and-privacy-package)
- [After Meta Layoffs, Newsom Signs AI Order to 'Protect Workers' and Jobs (KQED)](https://www.kqed.org/2026/05/21/after-meta-layoffs-newsom-signs-ai-order-to-protect-workers)

---

*（本文の情報は2026年5月22日時点のものです）*