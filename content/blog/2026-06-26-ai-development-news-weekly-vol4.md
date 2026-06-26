# AI開発ニュース週間まとめ（2026年6月第4週）

OpenAIとBroadcomの独自AIチップ「Jalapeño」発表や、AnthropicがAlibabaをClaude複製攻撃で告発など、AI業界は久しぶりに訴訟や規制関連の話題が賑わった週となった。またNotionがメールアプリ「Notion Mail」を終了し、ユーザーがAIエージェントに移行している現状も印象的だ。

---

## OpenAIとBroadcom、LLM推論特化チップ「Jalapeño」を発表

OpenAIとBroadcomは2026年6月、**LLM推論専用のAIチップ「Jalapeño」** を発表した。ASIC（Application-Specific Integrated Circuit）として9ヶ月の開発期間を経て完成し、データセンター向けとして初めての手作りAIチップとなる。

開発の背景には、GPU不足と推論コスト高騰がある。現在のデータセンターはNVIDIAのGPUに大きく依存しているが、需要逼迫により調達が困難かつ高昂だ。BroadcomはOpenAIの研究者との対話を基に、**現在のLLMの要求に最適化された設計** を構築した。

OpenAIは「早期テストでJalapeñoは現状の最良策よりパフォーマンス/ワット比が大幅に優れる」と主張するが、詳細な技術報告は今後数ヶ月以内に公開予定で、まだ具体的な数値は明らかになっていない。

**ポイント**: OpenAIは自社チップ開発でGoogle（TPU）、Amazon（Trainium）、Microsoft（Maia 100）に続き、米大手クラウドベンダー唯一の最後発となる。Jalapeñoは推論タスク特化型であり、Google一样の訓練用ではなく推論用ASICとして位置づけられる。

---

## Anthropic、Alibabaを「最大のClaude複製攻撃」で告発

Anthropicは2026年6月、上院委員会への書簡で**中国:AlibabaがClaudeの能力を複製するための最大規模の攻撃** を実施したと主張した。

攻撃の詳細：
- **期間**: 2026年4月22日〜6月5日（約6週間）
- **規模**: 約25,000の不正アカウントから**2,880万回のClaude利用**
- **ターゲット**: エージェント推論、ソフトウェアエンジニアリング、長周期タスクなど最も価値のあるCapability
- **手口**: 難読化技術とプロキシネットワークによる検出回避

AnthropicはAlibabaとAlibaba Qwen（AI研究部門）が攻撃に関与したと特定し、**Trump政権の対中規制を無視した活動**だと非難した。中国はMythosのリリースと海外市場規制を受け、自国のAI能力確保を急いでいると見られる。

Anthropicは罰則と対抗措置を求めると共に、「信頼性の高い難読化技術への需要が拡大している」と警告した。

---

## Notion、「Notion Mail」を終了へ — ユーザーはAIエージェントに移行

Notionは2026年6月、2025年4月にリリースしたメールクライアント「Notion Mail」を2026年9月22日に終了すると発表した。Skiff買収から始まり、暗号化メール→Notion Mailという変遷を経て、**AIエージェントへの完全移行** を表明した形だ。

驚くべきデータは、**Notion Mailユーザーの過半数以上が inbox を開くことなくメールを管理** しているという点。Notion Agentsが代わりに処理しており、伝統的なメールクライアントを必要とするユーザーが減少している。

同社は「あなたの受信箱はあなたの考え方で動くはずだった。より個人的な仕事の仕掛けになり、AIにより時間とともに有能力になるはずだった」としながらも、「Notion Agentsがもっと有能力になるにつれ、より多くのユーザーがメールワークフローを任せるようになっている」と謝罪代わりに理由を述べた。

**考察**: メールクライアントという古典的なソフトウェアジャンルがAIエージェントに淘汰される先が、AI産業のソフトウェア開発パートナーとしてではなくコンシューマーの日常工作の代替として最初の一歩になる可能性があり、注目に値する。

---

## IBM、世界初のサブ1nmチップ技術を発表 — AIデータセンター向け

IBM Researchは2026年6月、人間の爪大小的サイズに**約1,000億トランジスタ**を集積できる新しいチップアーキテクチャ「**nanostack**」を発表した。これは前世代比でほぼ2倍のトランジスタ密度となる。

「サブ1nm」技術とは、物理的に1nm未満のトランジスタを再現することは現状不可能だが、**理論上の1nmチップが提供する計算性能向上をナノシートアーキテクチャで実現する** という意味。IBMのJay GambettaFellow（IBM Research Director）は「漸進的な一歩ではなく、意味のある飛躍だ」と語った。

AIデータセンターにとって重要な点是、計算性能とエネルギー効率の両方が向上する点。NVIDIAのGPU依存脱却を目指す各社が、より効率的な専用チップを追求する中、IBMは新しいトランジスタ構造で差別化を図る。

---

## Oracle、21,000人を解雇 — AIインフラ投資にDebt加速

OracleはSEC（証券取引委員会）への年次報告書で、2026会計年度に**21,000人（従業者数12.9%）** を解雇したと開示した。2025年5月時点の162,000人から141,000人に減少している。

報告書では「AI技術の導入と展開が workforce 削減につながった」と明記されており、特に「データベース管理からクラウド/AIインフラへの移行」が人員整理の主因として挙げられる。

一方、Oracleは2026年に**450億〜500億ドルの資金調達** を計画しており、その半分を debt で調達し、残りを株式で賄う。資金調達の用途はOpenAI、xAI、AMD、Nvidia、Metaなどの顧客向け **Oracle Cloud Infrastructure（OCI）** の拡張だ。

AIインフラへの大規模投資と人員削減という apparent 矛盾は、「AIで作業は減るが、AI基盤施設を構築するコストは爆発的に増える」という現在のAI産業の構造変化を如実に物語っている。

---

## 参考リンク

- [OpenAI and Broadcom announce chip designed for LLM inference at scale](https://arstechnica.com/gadgets/2026/06/openai-and-broadcom-announce-chip-designed-for-llm-inference-at-scale/)
- [Anthropic says Alibaba must be punished for largest Claude cloning attack](https://arstechnica.com/tech-policy/2026/06/anthropic-claims-alibaba-defied-trump-to-attack-claude-and-steal-capabilities/)
- [Notion killing Skiff-influenced email app since most users use AI agents instead](https://arstechnica.com/gadgets/2026/06/notion-killing-skiff-influenced-email-app-since-most-users-use-ai-agents-instead/)
- [IBM claims world's first sub-1 nanometer chip technology](https://arstechnica.com/gadgets/2026/06/ibm-claims-worlds-first-sub-1-nanometer-chip-technology/)
- [Oracle's 21,000 layoffs help drive its debt-fueled AI investments](https://arstechnica.com/ai/2026/06/oracles-21000-layoffs-help-drive-its-debt-fueled-ai-investments/)

---

*（本文の情報は2026年6月26日時点のものです）*
