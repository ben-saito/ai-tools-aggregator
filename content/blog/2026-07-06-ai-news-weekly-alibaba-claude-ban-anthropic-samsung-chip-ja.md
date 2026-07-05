# AIニュースまとめ（2026年7月第1週）：AlibabaがClaude Codeを禁止 AnthropicがSamsungとカスタムチップ開発を検討

2026年7月上旬、AI業界は複数の重要な動きを見せている。Alibabaが従業員によるClaude Codeの使用を禁止したニュース、AnthropicがSamsungとのカスタムAIチップ開発を検討している報道、NVIDIAのロボット自己改善研究、そしてMidjourneyとHollywoodスタジオ間の法的対立の最新状況までをまとめてお届けする。

---

## Alibaba従業員、Claude Codeの使用を禁止される

TechCrunchの報道によると、AlibabaはClaude Codeを高リスクソフトウェアとして分類し、従業員の使用を禁止した。Anthropicが開発したClaude Codeは、AIを活用したコード編集・生成ツールとして開発者たちの生産性を大幅に向上させてきたが、Alibabaグループにとってはセキュリティ上のリスクと判断されたようだ。

この禁止措置は、中国のテクノロジー企業間でAI開発ツールの利用に関する厳格な規制が強まっていることを示唆している。中国企業にとっては、Claude Codeのような外部AIサービスを活用することが、自社の知的財産やコードベースのセキュリティを外部にさらすことになるため、慎重な対応が求められている。

---

## Anthropic、SamsungとカスタムAIチップ開発で協議中

AnthropicがSamsungと新しいカスタムAIチップの開発について協議していることが明らかになった。この動きは、OpenAIがBroadcomと独自のカスタムAIチップを発表してから約1週間後に、AppleもBroadcomとAI chip開発中と噂される中で、Googleも開発中と噂されるなど、AI企业提供者が自社製のチップを欲しがる傾向が加速していることを示している。

カスタムAIチップの開発は、AI企业提供者がNVIDIAなどのGPU大手への依存を減らし、特定のワークロードに最適化されたハードウェアを求める流れ，反映ている。AnthropicはSamsungの半導体製造能力を活用することで、Claudeモデルの推論效率和向上图っている可能性がある。

---

## Midjourney vs Hollywood：AI使用詳細の開示をめぐる法廷闘争

画像生成AIのMidjourneyが、Disney、Universal、Warner Brosの3つのHollywoodスタジオに対し、相手のAI使用詳細を開示するよう法院に申し立てた。これは進行中の法的紛争の一部として展開されている。

MidjourneyはこれらのスタジオがAIをどのように活用しているのかを明らかにすることを要求しており、これはスタジオ側がMidjourneyに対して提起した著作権侵害訴訟への対抗措置と見られている。Hollywoodスタジオたちは自身がAIを使用しているにもかかわらず、他社のAI利用に対しては批判的な立場を崩していない。

この法廷闘争は、AI生成コンテンツの著作権問題と、AI技術の利用に関する透明性要求が Increasingly 重要になっていることを浮き彫りにしている。

---

## NVIDIA ENPIRE：物理ロボットにAIエージェントの自己改善ループを実現

NVIDIAの研究チームは、物理ロボットがAIエージェントと同じ自律的実験と実行ループを経験できるシステム「ENPIRE」を開発した。ENPIREは「Environment」「Policy Improvement」「Rollout」「Evolution」の4つのコアモジュールで構成されている。

**ENPIREのアーキテクチャ：**

- **Environment（EN）**：自動リセットと検証を担当
- **Policy Improvement（PI）**：ポリシーの改善を実行
- **Rollout（R）**：単数または複数の物理ロボットでポリシーを評価
- **Evolution（E）**：コーディングエージェントがログを分析し、文献をconsultし、訓練インフラとアルゴリズムコードを改善

各ステーションにはI2RTのYAMアーム2本が固定バイマニュアル構成で装備され、NVIDIA RTX 5090が動作している。NVIDIA RTX 5090GPU上で動作し、Frontierコーディングエージェントが реальный мираで99%成功率を達成，特别是在PushT、ピン整理、zip tie切断などの器用な操作タスクで優れた性能を示している。

これは superintelligence がロボットを使用して物理的に自分自身を具現化しようとする试みの始まりを示唆している。

---

## 技術屋たちの視点：AIチップ開発競争

近年では、NVIDIA、Google、Microsoft、Meta、そしてAppleに次いで、OpenAI、Baidu、Tencent、Huaweiなどの中国企业も独自のAI Chip开发に积极的に投资している。Tencentは10,000 GPU以上的クラスタでARGUSという追跡・性能診断システムを6ヶ月以上運用しており、大規模訓練ワークロードの管理能力を示している。

AI Chip开发競争は、訓練效率の向上と推論コストの削減を求める各社の熾烈なあ竞争となりそうだ。

---

## 参考リンク

- [Alibaba reportedly bans employees from using Claude Code - TechCrunch](https://techcrunch.com/2026/07/04/alibaba-reportedly-bans-employees-from-using-claude-code/)
- [Anthropic is discussing a new custom chip with Samsung - TechCrunch](https://techcrunch.com/2026/07/02/anthropic-is-discussing-a-new-custom-chip-with-samsung/)
- [Midjourney wants Hollywood studios to reveal the details of their AI usage - TechCrunch](https://techcrunch.com/2026/07/04/midjourney-wants-hollywood-studios-to-reveal-the-details-of-their-ai-usage/)
- [ENPIRE: Agentic Robot Policy Self-Improvement in the Real World - NVIDIA Research](https://research.nvidia.com/labs/gear/enpire/)
- [Import AI 463: Self-improving robots; a 10k Chinese GPU cluster](https://importai.substack.com/p/import-ai-463-self-improving-robots)

---

*（本文の情報は2026年7月6日時点のものです）*
