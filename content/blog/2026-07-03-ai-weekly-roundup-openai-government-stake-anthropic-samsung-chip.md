# AI開発ニュースまとめ（2026年7月2日〜3日）：OpenAIが米国政府に株式提供案、AnthropicがSamsungとカスタムチップ検討

AI業界は久しぶりに米国政府とAI企業の関係が激しく動いた週となった。OpenAIは米国政府に出資を呼びかけ、Anthropicは輸出規制解除を経てClaude Fable 5の復活を報告した。さらにMicrosoftもAI配備企業への参加を表明し、大型投資が続けている。

---

## OpenAI、政府に5%の株式提供を提唱

TechCrunchおよびThe Vergeの報道 따르면、OpenAIのSam Altman CEOは米国政府にOpenAIの株式5%を提供することを提案したことが分かった。OpenAIの企業価値は8520億ドル（約125兆円）と評価されており、政府が受け取る株式の価値は約426億ドルに相当する。

Altman氏の主張は明白だ。AIの発展による経済的メリットを広く米国市民が享受できる仕組みを作れば、AIへの反発を和らげられるというもの。政府がAI企業の株を保有することで、AI収益が国家の歳入に入り、一般市民にも利益が還元される可能性がある。

背景には米国財務省の主権财富基金設立構想がある。AI産業の急成長により、同基金的仕組みでAI時代におけるアメリカの国富を管理하려는議論が加速している。

Anthropicや他のAI企業も輸出規制撤廃に伴い同様の協議を行うとされている。

---

## Anthropic、Claude Fable 5のアクセス復活を発表

AnthropicはTrump財務省との交渉を経て、Claude Fable 5とMythos 5の輸出規制が解除されたことを明らかにした。AnthropicはX（旧Twitter）を通じて、近日中にClaudeプラットフォーム上でグローバルにアクセスを再開すると報告。AWS、Google Cloud、Microsoft Foundry上での復活も予定されている。

Claude Fable 5はApple Vision Pro向けにも提供される予定で、より没入型かつ現実的なシミュレーション体験の提供が期待されている。Anthropicは「多くのユーザーに忍耐していただけたこと、また作業してくれたすべての人々に感謝する」（原文）と述べている。

---

## Anthropic、SamsungとカスタムAIチップ開発で協議

OpenAIがBroadcomとカスタムAIチップ 开发で提携してから約1週間後、AnthropicもSamsung電子とカスタムチップ 开发で協議していることが明らかになった。

現在主流のNVIDIA製GPUに加え、各社が独自のAIハードウェア的开发を進めている。GoogleはTPU、AmazonはTrainium、MicrosoftはMaiaというそれぞれのカスタムチップを持っている。AnthropicのSamsung協議は、こうした流れにおけるもの。

カスタムチップ 开发には莫大なコストと 시간이いるが、自社のワークロードに最適化した効率的な推論が可能になる。Samsungの半导体ファウンドリ能力とAnthropicのAI expertiseの組み合わせは、第四の選択肢として注目に値する。

---

## NVIDIA、ロボット向け自己改善ループ「ENPIRE」を発表

Import AIによると、NVIDIAの研究チームは物理ロボットにAIエージェントのような自己改善ループを実装する「ENPIRE」フレームワークを公开した。

ENPIREは4つのコアモジュールで構成される：

- **Environment（EN）**：自动リセットと検証
- **Policy Improvement（PI）**：ポリシーの改善をlaunch
- **Rollout（R）**：单个または複数の物理ロボットで 정책을評価
- **Evolution（E）**：コーディングエージェントがログを分析し、失敗モードに対応

各工作站には2つのYAMロボットアームとNVIDIA RTX 5090が搭載されている。実験では、PushTタスクやピン配置、GPUのマザーボードへの挿入などで99%の家功率を達成した。

コーディングエージェントとしてはGPT-5.5（Codex内）およびOpus 4.7（Claude Code内）が最高の性能を示し、より大規模なマルチエージェント構成が早くから高いスコア解決策に到達することが確認された。

---

## Microsoft、25億ドルのコミットでAI配備企業をlaunch

Microsoftは独自のAI配備企業をlaunchし、総額25億ドルのコミットメントを表明した。Amazon、OpenAI、Anthropicに続いて四社目の大型AI配備企业参入となる。

MicrosoftはAzureプラットフォームを通じてAIモデルの配備・最適化 услугиを提供しており，这次の動きはさらに直接的なAIインフラへの投資となる。企業向けのAI導入支援を強化することで、Google CloudやAWSとの競争を有利に進める狙いと見られる。

---

## Google、NotebookLMでTikTok風AIクリップ機能を開始

GoogleはNotebookLMに新しい「Short Video Overviews」機能を追加した。Google AI UltraおよびPro加入者は、アップロードした资料に基づいて60秒間の竖型AI動画を生成できるようになる。

Googleが公开した例では、オーストラリアの「エmu戦争」（1932年にAustralian国防軍がエmuを排除试图した失敗した作戦）について、AI生成の切り絵風アートと narrationを組み合わせた教材動画を披露した。

NotebookLMは既にAIポッドキャスト生成、シネマティック動画、ビジュアル解説などの機能を提供しており、研究者和学生にとって効率的な资料整理・理解ツールとして注目が高まっている。

---

## AIの説得力が人間の専門家を上回る

Import AIが伝えたLawrenceのEssaysでは、AIの persuasive ability（説得能力）についても報じた。オックスフォード大学とUK AI Security Instituteの共同研究では、AIシステムが人間の专門家を明確に上回る説得力を持つことが確認された。

18,978件の会話で6,923人を对象にした実験の結果、「AI systems were reliably more persuasive than expert humans（AIシステムは专門家を明確に上回る説得力を持つ）」という結論が得られた。

この能力が広く利用可能になった場合、中小企業や弱势团体も今までにない高度是说得上説得能力を手にすることになる。另一方面、 AIの persuasive abilityをどう管理するかという問いも生じている。

---

## 参考リンク

- [Meta quietly launches vibe-coded gaming app Pocket (TechCrunch)](https://techcrunch.com/2026/07/02/meta-quietly-launches-vibe-coded-gaming-app-pocket/)
- [OpenAI proposed donating 5% of its equity to a US sovereign wealth fund (TechCrunch)](https://techcrunch.com/2026/07/02/openai-proposed-donating-5-of-its-equity-to-a-us-sovereign-wealth-fund/)
- [Anthropic is discussing a new custom chip with Samsung (TechCrunch)](https://techcrunch.com/2026/07/02/anthropic-is-discussing-a-new-custom-chip-with-samsung/)
- [Microsoft launches its own AI deployment company with $2.5 billion commitment (TechCrunch)](https://techcrunch.com/2026/07/02/microsoft-launches-its-own-ai-deployment-company-with-2-5-billion-commitment/)
- [OpenAI floats giving Trump administration 5 percent cut of AI boom (The Verge)](https://www.theverge.com/ai-artificial-intelligence/960588/openai-government-5-percent-stake-trump)
- [Google built a great smart speaker, but Gemini isn't ready for it (The Verge)](https://www.theverge.com/tech/959503/google-home-speaker-review-gemini-for-home)
- [Anthropic's long-sidelined Fable 5 is greenlit to return (The Verge)](https://www.theverge.com/ai-artificial-intelligence/958964/anthropic-claude-fable-5-is-back)
- [Google's NotebookLM can sum up your research in a TikTok-style clip (The Verge)](https://www.theverge.com/tech/959778/google-notebooklm-ai-clips)
- [ENPIRE: Agentic Robot Policy Self-Improvement in the Real World (NVIDIA research)](https://research.nvidia.com/labs/gear/enpire/)
- [Import AI 463: Self-improving robots; a 10k Chinese GPU cluster; and an elegiac essay for the human era](https://jack-clark.net/2026/06/29/import-ai-463-self-improving-robots-a-10k-chinese-gpu-cluster-and-an-elegiac-essay-for-the-human-era/)

---

*（本文の情報は2026年7月3日時点のものです）*
