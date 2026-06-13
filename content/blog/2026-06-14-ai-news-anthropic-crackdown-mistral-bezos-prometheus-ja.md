# AI開発ニュースまとめ（2026年6月13日）——Anthropicモデル規制、MANGOS IPO、夏のAI投資ラッシュ

2026年6月中旬、AI業界は規制強化・巨大資金調達・企業間の緊張という3つのキーワードで沸いている。Anthropicの最上位モデルへの政府介入、OpenAIに対する州検察総長の調査、そしてMistralやJeff Bezos系Prometheusを含む大規模資金調達ラッシュを振り返る。

---

## Anthropic最強力モデルが政府介入で停止——安全警告が裏目に

Anthropicの最も強力なAIモデルが、政府の方針により世界的な提供を停止に追い込まれた。TechCrunchの報道 따르면、Amazon CEO Andy Jassy씨가 米政府高官との会合でAnthropicモデルのセキュリティ上の懸念を提起したことが、規制対応の引き金になったと見られている。

Anthropicは「この狭いジェイルブレイクの可能性を理由に、何百万人もの人々に展開された商用モデルを回収すべきというのは同意できない」と公式ブログ上で反論。然而，公司の安全警告が結局自社モデルの規制強化を招くという皮肉な結果となった。

**技術的ポイント:**
- 問題のモデルは周五间提供停止
- narrow jailbreak（狭いジェイルブレイク）評価が引き金に
- 米政府：Bureau of Industry and Security（BIS）がモデル輸出規制を強化

---

## OpenAI——州検察総長から調査を受ける

OpenAIは複数の州検察総長（State Attorneys General）から調査を受けている。TechCrunch報道時点で、具体的にどの州が関与しているかは明かされていないが、广告ポリシーから健康データ取り扱いまで幅広い項目で質問が広がっている。

**開発者視点でのポイント:**
- OpenAIの広告ポリシーへの懸念
- 健康データ（health data）の取り扱いに関する調査
- 州レベルの規制対応が企業にとって新たなリスクに

---

## KPMG、AI活用レポートで「幻覚」に見舞われ公開停止

KPMGが社内のAI活用状況に関する法人向けレポート公开を取りやめ的话题。AIが生成した情報がAI自体に関するもので、実際には存在しないデータや誤った結論を含んでいた「幻覚（hallucination）」が発生していたことが原因。

これは「AIはAIについて信頼できる情報を提供できる」という前提本身覆す面白い事例。法人ucheんpingでAIを使う际のもう一つの警鐘となった。

---

## Google、中国系AIサイバー犯罪組織「Outsider Enterprise」を提訴

Googleは「Outsider Enterprise」という中国系のサイバー犯罪組織を提訴した。同グループはAIを使用して「数十万人以上」の被害者を骗し、2週間で250万件のテキストメッセージを送信していたことが判明している。

**技術的詳細:**
- Androidプラットフォーム上での被害
- AI生成のテキスト消息によるフィッシング攻撃
- Googleのセキュリティチームが攻撃の手口を特定・提訴

---

## Mistral、€30億調達で企業価値€200億——欧州AIスタートアップ最大級に

フランスのAIスタートアップMistralが、€30億（约€20億企業価値）を調達する動きを続けている。TechCrunch报道時点で噂の段階だが、European AIスタートアップとしては過去最大級の一調達となる。

**ポイント:**
- Series C valuation（€11.7億）のほぼ倍増
- €20B（約$23.15B）の企業価値評価
- 欧州発AIスタートアップとしての地位確立

---

## Jeff Bezos発起のPrometheus、$120億調達で「物理世界的AGI」目指す

Jeff Bezos氏发起のスタートアップPrometheusが、$120億を調達し企業価値$410億を評価された。目标是「physical AI」——物理世界に特化した「artificial general engineer（ AGE）」构建すること。

具体的な用途として、重的エンジニアリングの自動化や創薬（drug design）への適用が举げられている。Bezos側の代表はVik Bajaj氏。

---

## MetaのAI部門、6,500人規模で「刑務所のような環境」と内部告発

MetaのAI部門构建后わずか数ヶ月で、内部エンジニアから「魂が_serializing gulag（刑務所のような环境）」という酷い評価が漏れている。6,500人が雇用される同部門だが、士気の低さと管理の厳しさが問題視されている。

---

## その他の注目トピック

### GLM 5.2发布——中国系LLMの進化
GLM 5.2がリリースされ、Hacker Newsで225ポイントを獲得。中国系LLMの中で有力な位置づけ。

### OpenAI、Codex for Open Source発表
OpenAIがオープンソースプロジェクト向けのCodex支援プログラムを発表。$7.3Mのシードラウンドを受けてTensorZeroがアーカイブされた对照的に、OSS向けAIツールへの投資が继续。

### Pyodide 314.0——WebAssembly対応PythonパッケージがPyPIから配布
Python packages can now publish WebAssembly wheels to PyPIというPyodideの进步で、ブラウザ内でのPython実行がさらに容易になった。

---

## まとめ：MANGOS時代の高まる規制と投資の两極化

2026年夏、**MANGOS**（Meta (or Microsoft)、Anthropic、Nvidia、Google、OpenAI、SpaceX）という新的頭字語がNASDAQを構成しつつある。一方、Anthropicモデルの政府介入やOpenAIへの調査ように、規制当局のAI企業へ対する監視も強化されている。

**開発者視点での重要ポイント:**
- **Anthropicモデル規制**：輸出規制・モデル提供の地域制限が新たな課題に
- **州レベルの調査**：OpenAIへの州検察総長調査は、法人利用への追加的な法的リスクを示唆
- **AI幻覚の實際例**：KPMGの事例は、法人におけるAI検証プロセスの重要性を再認識させる
- **物理AIへの投資**：Prometheusの$12B調達は、LLMとは異なる物理世界へのAI適用への大きな期待を示す

---

## 参考リンク

- [KPMG pulls report on AI usage due to apparent hallucinations](https://techcrunch.com/2026/06/13/kpmg-pulls-report-on-ai-usage-due-to-apparent-hallucinations/)
- [Amazon CEO raised Anthropic model concerns before government crackdown](https://techcrunch.com/2026/06/13/amazon-ceo-reportedly-raised-anthropic-model-concerns-before-government-crackdown/)
- [OpenAI faces investigation from state attorneys general](https://techcrunch.com/2026/06/13/openai-faces-investigation-from-state-attorneys-general/)
- [Anthropic safety warnings backfire — government pulls plug on most powerful AI](https://techcrunch.com/2026/06/12/anthropics-safety-warnings-may-have-just-backfired-the-government-has-pulled-the-plug-on-its-most-powerful-ai/)
- [Google sues Chinese cybercrime operation that used AI to scam victims](https://techcrunch.com/2026/06/12/chinese-cybercrime-operation-that-used-ai-to-scam-hundreds-of-thousands-of-victims-sued-by-google/)
- [Mistral rumored to be raising €3B at €20B valuation](https://techcrunch.com/2026/06/12/mistral-is-rumored-to-be-raising-e3b-at-e20-valuation/)
- [Jeff Bezos's Prometheus raises $12B to build an 'artificial general engineer'](https://techcrunch.com/2026/06/11/jeff-bezoss-prometheus-raises-12b-to-build-an-artificial-general-engineer-for-the-physical-world/)
- [Meta's months-old AI unit is a soul-crushing gulag](https://techcrunch.com/2026/06/12/metas-months-old-ai-unit-is-a-soul-crushing-gulag-say-the-engineers-stuck-inside-it/)
- [GLM 5.2 Is Out — Hacker News](https://twitter.com/jietang/status/2065784751345287314)
- [Codex for open source — OpenAI](https://openai.com/form/codex-for-oss/)

---

*（本文の情報は2026年6月13日時点のものです）*
