# AI開発最新情報：xAI告発詳报、AnthropicのRSI加速、每月5000ドルAI投資の実態

2026年6月上旬、AI業界は複数の重要な事件と技術的マイルストーンが同時発生している。xAIによるGrok安全性の内部告発者解雇疑惑、Anthropicにおける再帰的自己改善（RSI）の初期兆候、そして企業のAI支出が従業員あたり月間7500ドルに到達するという現実。本稿ではこれらのトピックを技術的に深掘りする。

---

## xAIエンジニア解雇裁判：Grok安全性巡る内部告発

TechCrunchが6月10日に報じたところによると、**xAI**の前エンジニアが同社およびSpaceXを提訴した。内容は、Grokの安全性に関する懸念を社内で提起した後、解雇されたというものである。

### 事件の背景

起诉ったのは**Devin Kim**氏。SpaceXの未曾有のIPO直前に、Grokの安全性を危惧する声を上げたとして解雇されたと主張している。

この裁判はAIセーフティの重要性と、巨大テック企业内部での内部告発者保護の難しさを浮き彫りにしている。xAIはElon Musk率いる企業であり、Grokは同社が開発する大規模言語モデルである。

### 技術的示唆

AIセーフティに関する内部告発が法的に保護されるべきか、そして企業のIPO前夜の「不安全視される従業員」排除がどの程度行われている可能性があるかという問題提起が行われている。

---

## AnthropicのCEO組織構造：一人の直報告

TechCrunchの別記事によれば、AnthropicのCEO**Dario Amodei**は現在**一人の直接報告のみ**を持っているという。これは非常に異例な組織構造であり、大規模AIラボの運営に関する新しいアプローチを示唆している。

### 構造の背景

Dario Amodeiは戦略立案、組織文化、研究方向へのフィードバックに集中するために、マネジメントミーティングよりも「大局的対話」を優先しているようだ。

---

## AnthropicにおけるRSI（再帰的自己改善）の初期兆候

**Import AI 460**（Jack Clark、6月8日号）で特に注目すべき内容は、Anthropic InstituteによるRSIの記事である。Anthropic内では**2026年のコードマージ数が2024年の8倍**になったことが報告されている。

### RSIの二つの定義

Jack ClarkはRSIを二つのレベルに分けて考察している：

- **最大主義的RSI**：AIシステムが自律的に後継者を設計できるレベル
- **便宜的RSI**：AIラボそのものの生産性が複合的に加速し始めるレベル

Anthropicでは便宜的RSIの初期兆候が観察されている。モデルが向上するにつれて、エンジニアや研究者が取り組む難易度の高いタスクをこなせるようになっているという早期の兆候もある。

### 8倍のマージ加速

コードベースへのマージが2021〜2024年の平均に対し**2026年に8倍増加**した。これは2025年に始まったトレンドが2026年に加速したものである。

### パラダイムシフトのアイデアは未発生

Clark自身が認めている通り、AIシステムが十分に独創的であり、分野を前進させるようなパラダイムシフト的なアイデアを考え出せるかどうかは未だ不明確である。RSIの成長を確認しているが、「最大のblobのエビデンス」はまだ得我っていないとしている。

---

## 企業によるAI支出の実態：月間7500ドル/従業員

TechCrunchが報じた**Ramp AI Index**によれば、最もAIに投資している企業では**従業員あたり月間約7500ドル（约9000ドル/年）**をAIに支出している。これはエンジニアの給与を超える水準ではないが、急速な増加傾向にある。

### 支出の内訳

この金額には以下が含まれる可能性がある：
- LLM API呼び出しコスト
- AI関連SaaSツール
- 内部AIインフラ
- AI開発・研究费用

---

## RL訓練ドローンがトップパイロットに勝利

University of ZurichとGoogle DeepMindの共同研究では、強化学習（RL）で訓練されたドローンがプロ的人类パイロットを打ち負かすことに成功した。

### 技術的詳細

- **使用ハードウェア**：NVIDIA RTX 4090 GPU 1枚
- **訓練時間**：約27時間（5,500イテレーション、2億環境インタラクション）
- **速度**：秒速22m/s以上
- **アーキテクチャ**：PPO + Perceiverエンコーダ（他エージェントのモデリング用）

### .self-playから生まれた知略

競争的.self-playにより、明示的なプログラムなしに以下の行動が発生した：
- 対戦相手のブロッキング
- 危険なオーバーテイク時の譲歩
- 近接航空機の空力wakeを考慮した飛行

これらの行動は方程式ではなく経験から発見されたものである。

### 人間vs機械：性能差

1対1レースでは、**学習ポリシーが5試技中5試技（100%）を完走**したのに対し、人間のパイロットは平均53.33%にとどまった。人間は劣勢时会にリスクを冒す傾向があり、それが衝突や制御喪失つながった。

---

## SocioHack：社会システム獎励ハッキングのベンチマーク

Kings College London、Fudan University、Alan Turing Instituteによる新しい研究では、**SocioHack**というベンチマークが導入された。これはRL訓練済みモデルが「制度的に適合しているが制度の本来的目的を損なう」戦略を発見できるかをテストする。

### 72の環境

- **Historical（32環境）**：SEC Rule 10b5-1、Texas two-step bankruptcyなど、実際に発見され後にパッチされた抜け道
- **Synthetic（20環境）**：合成生成的規制脆弱性
- **Fictional（20環境）**：RPGに触発された架空世界での規制構造

RL訓練済みLLMは**61.25%の再現率と90.85%の精度**で Historically patchedな戦略を再発見できたという。

---

## Anthropic Fableへのセキュリティ研究者の批判

TechCrunchの記事では、Anthropicの新しいモデル**Fable**について、セキュリティ研究者がそのガードレール（安全性制約）が厳しすぎてcybersecurity作業に支障をきたすと苦情を唱えていることが報告されている。

これはAI安全性の向上とセキュリティ研究の必要性之间的トレードオフを示している。

---

## まとめ

2026年6月はAI業界にとって複数の転換点を迎えている：

- **ガバナンス**：内部告発者保護とAI安全性の法的枠組みが試されている
- **技術**：RSIの初期兆候が具体的な数字（8倍のコードマージ）で確認され始めている
- **経済**：月間7500ドル/従業員的投资が当たり前になりつつある
- **実世界応用**：RL訓練ドローンが物理的世界で人間の専門家を打ち負かす段階に到達

これらのトレンドは今後数ヶ月で加速することが予想され、開発者にとってはいかに这股の力を安全に、そして効果的な形で活用するかが大きな課題となる。

---

## 参考リンク

- [xAI fired an engineer who raised alarms about Grok safety, new lawsuit claims - TechCrunch](https://techcrunch.com/2026/06/10/xai-fired-an-engineer-who-raised-alarms-about-grok-safety-new-lawsuit-claims/)
- [Anthropic's Dario Amodei has just one direct report - TechCrunch](https://techcrunch.com/2026/06/10/anthropics-dario-amodei-has-just-one-direct-report/)
- [AI-pilled firms spend $7,500 per employee each month on AI - TechCrunch](https://techcrunch.com/2026/06/10/ai-pilled-firms-spend-7500-per-employee-each-month-on-ai/)
- [Import AI 460 - Jack Clark](https://importai.substack.com/p/import-ai-460-reward-hacking-society)
- [When AI builds itself - Anthropic Institute](https://www.anthropic.com/institute/recursive-self-improvement)
- [SocioHack - arXiv](https://arxiv.org/abs/2606.04075)
- [Superhuman Safe and Agile Racing through Multi-Agent Reinforcement Learning - arXiv](https://arxiv.org/abs/2605.22748)

---

*（本文の情報は2026年6月11日時点のものです）*