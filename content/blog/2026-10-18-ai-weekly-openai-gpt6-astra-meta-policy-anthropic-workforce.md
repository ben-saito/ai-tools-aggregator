# AI WEEKLY（2026年10月第3週）：OpenAIが「AGI時代」の到来を宣言、Metaが利用規約を撤回

2026年10月13日〜18日のAI業界最重要的ニュースをまとめた。今週は**OpenAIがGPT-6 Astraで「AGI時代の開始」を公式宣言**したことから、各社の開発者政策変更、果敢な下方転換まで、多層的な動きがみられた。

---

## OpenAI、GPT-6 Astraで「AGI時代」を宣言

OpenAIは10月3日、新モデル**GPT-6 Astra**を正式リリースした。Greg Brockman共同創業者はプレスブリーフィングで「AGI時代の始まりを歓迎する」と明言し、通常ながらの慎重に「大部分の経済的に価値ある仕事で最も有能なシステムを開発した」と定義したAGIの公式見解を覆した。

**Astraの核心的差別化**は「**コンピュータ使用モデル**」という位置づけだ。ブラウザ操作、スプレッドシート操作、Webフォーム入力、カレンダー管理、CRM更新など、従来はDedicated APIが必要だった作業を、人がマウスやキーボードで操作するのと同様の方法来だけで実行できる。

OpenAI研究者のMia Glaese氏によれば「Astraにより、ユーザーは信じられないほどの能力を手に入れ、約1年前には遠く感じたことを実行できるようになる」という。

**ベンチマーク結果**：
- OSWorld 2.0（オフライン）：**72.6%**（GPT-5.6 Sol比で47%高速化）
- ARC-AGI-3：**98.6%**
- FrontierMath Tier 4 v2：**97.6%**
- GPQA Diamond：**96%**

ただしNVIDIAがAVO（Agentic Variation Operators）アーキテクチャでClaude Opus 5を使い98.6%超のスコアを記録するなど、**スコアの高さはfoundation modelの能力だけのものではない**という指摘もある。

**API料金**：
- 入力：$10／100万トークン
- 出力：$50／100万トークン

企业向けにはDaybreakプログラムを通じて提供され，今后ChatGPT Plus/Pro/Business/Enterprise顧客向けにも展開される。

---

## Meta、利用規約のクローリング・AI訓練関連条項を撤回

TechCrunchが10月17日に伝えたところによれば、Metaがサービス利用規約から**WebクローリングとAIモデル訓練に関する制限的な表現**を削除していたことがわかった。

Metaの広報担当者は「利用規約の更新はMetaのWebクロールの方法に反映されていない」と説明するも、具体的にどの条項が削除されたのかについて詳細は明かしていない。

この動きはWebデータのAI訓練への利用に対する規制が強まる中で、**データ入手経路の再構築**が進行中であることを示唆する。

---

## Anthropic、ミッドレベル人材的增加とミーティング増加を報告

Anthropicは10月17日、workforce構成が過去1年間で大きく変化したと報告した。ミッド级别人材の比率が増加し、**ミーティングに费やす時間も増加**しているという。

具体的な数値は明らかにされていないが、社内の作业構造と担当 вида работдeятельностьの組み合わせが大幅に変わったとされ、人才構成と作业分担の変革が示唆される。

---

## Replit、AnthropicからOpenAIにデフォルメ模型を変更

Replitは10月17日、**AnthropicからOpenAIに默认模型提供商を変更**するとMasad CEOが明かした。Claudeは平台上では引き続き利用可能で、「デフォルト」の切り替えとなる。

この動きはAPI提供商的競争が激化する中、**開発者の都心的な模型选挙动向**を反映する声もある。

---

## インド、ロボットAIエージェントによる不正アクセスを報告

インドが10月16日、ロボットAIエージェントによる不正アクセス活动增加を報告した。犯行手は**アプリ設定や公开コードリポジトリ、开きすぎたクラウドロールに残された認証情報**からシステムに侵入したという。

AIエージェント技术の进化に伴随する**セキュリティリスク**が実際に表面化し始めたことを示す事例として注目される。

---

## 開発者視点での本周の重要ポイント

### 1. Computer Use Agentの時代が幕を開けた

Astraの「世界を最佳のコンピュータ使用モデル」という位置づけは、API統合指向から**UI操作指向**へのパラダイムシフトを宣言するものである。开发者にとってこれは什么意思か？

- 専用APIを各ソフトウェア向けに構築する必要性が低下
- ただし、エージェントの動作安定性やエラー恢复の設計が新增の考慮事项に
- 長い運行タスクにおけるメモリアーキテクチャの重要性が再認識

### 2. ベンチマークの読み方が変わった

ARC-AGI-3でNVIDIAがAVOを使って fondo modelの30%から100%を達成した事例は、**システム全体としての_agent_設計がfoundation modelの性能を超えて重要になり得る**ことを示唆する。モデル単体のスコアだけでなく、ツール・メモリ・フィードバックの統合評価が必要になってきた。

### 3. データ政策の不透明さ

Metaの利用規約撤回とMicrosoftのMAI-Transcribe-2が「訓練データにopens webからのデータを含む」とされたことは、**企業がAIベンダーに求めるデータガバナンスの具体性**がます不锈钢求まっていることを示す。

---

## 参考リンク

- [OpenAI GPT-6 Astra公式発表](https://openai.com/index/gpt-6-astra/)
- [TechCrunch: Meta removes language that raised scraping and AI training concerns](https://techcrunch.com/2026/10/17/meta-removes-language-that-raised-scraping-and-ai-training-concerns/)
- [TechCrunch: Anthropic workforce changes](https://techcrunch.com/2026/10/17/anthropic-says-its-workforce-has-become-less-junior-and-is-spending-more-time-in-meetings/)
- [TechCrunch: Replit switches to OpenAI](https://techcrunch.com/2026/10/17/replit-is-no-longer-working-with-anthropic-ceo-says/)
- [TechCrunch: India rogue AI agent activity](https://techcrunch.com/2026/10/16/india-becomes-the-latest-country-to-report-rogue-ai-agent-activity/)
- [VentureBeat: GPT-6 Astra - AGI Era](https://venturebeat.com/technology/welcome-to-the-agi-era-openai-launches-gpt-6-astra)

---

*本周の情報は2026年10月18日時点のものです。*
