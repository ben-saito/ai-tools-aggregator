# OpenAI、初オリジナルAIチップ「Jalapeño」をBroadcomと共同開発　他AI開発最新動向

2026年6月24日、AI業界で大きな動きが立て続けに観測された。OpenAIが待望之久しい自社設計のAI推論チップ「**Jalapeño**」をBroadcomとの提携によりついに発表。また、AIが人間の说服能力を上回ることを示す大規模研究や、AnthropicによるSlack常駐AIアシスタントの正式版リリース、SamsungによるChatGPT Enterpriseの全面的再開など、生成AIの社会実装が急速に進展している。

---

## OpenAI、待望之久しい自社チップ「Jalapeño」をBroadcomと共同開発

6月24日、OpenAIは初めて自社設計となるAI推論チップ「**Jalapeño（ハラペーニョ）**」の存在をTechCrunchexclusive interviewを通じて正式認めた。Broadcomとの共同開発パートナーシップにより実現したこのチップは、大規模言語モデルの推論ワークロードに特化して設計されている。

**技術的ポイント:**

- **推論特化型アーキテクチャ**: Jalapeñoは学習（training）ではなく推論（inference）に特化。OpenAIの推論システムに伴う独自の要件に合わせてカスタマイズされている
- **Broadcomとの協業**: BroadcomはGoogleのTPUやAppleのカスタム siliconの設計で知られる半导体大手。OpenAIにとってはNVIDIA之外的パートナーとの協業となる
- **推論コストの削減**: 自社チップへの移行により、API提供コストの削減と利益率の改善が期待される

OpenAIのSam AltmanCEOは此前からNVIDIA依存のリスクを指摘しており、2025年以降AI芯片の垂直統合が主要ラボの戦略的優先事項となっていた。Jalapeñoの登場は、OpenAIが単なるモデル開発会社加らハードウェア까지手がける統合AI企業への転換を示す象徴的な出来事と言える。

---

## Oxford等、米国の有力機関16,978件の会話データで判明：AIは人間の说服專門家を上回る

英国オックスフォード大学、英国AIセキュリティ研究所、スタンフォード大学、ロンドン・スクール・オブ・エコノミクスの共同研究が、**AIシステムがテキストベースの对话において人間の上級说服專門家を明確に上回る**ことを実証した。6月22日のarXivубликаによれば、この研究は4つの実験に合計18,978件の会話データ（六者間話者）を費やし、以下の結果が得られた。

**研究发现:**

- **Study 1（说服力）**: AIはランダムな一般人、者から、エリート弁論家まで、すべてのクラスの人間の说服力を上回った
- **Study 2（人間はAIからコーチング可）**: AIに勝利した经验を持つエリート弁論家に、AIを活用したコーチングツールを提供。结果は改善したが，依旧としてAIに追いつかず
- **Study 3（AIに速度・分量制限）**: AIを「人間の書き込み速度」「人間メッセージ長さに制限」すると、最も強い人間の比較対象と差がなくなった。「AIの強みはより大量的情報を素早く展開する能力にある」ことが示唆された
- **Study 4（現実の募金活動）**: 英国の募金会社AppcoUKの-professionalな canvasserとの対比実験では、AIはSave the Childrenへの募金額で+10.8パーセンテージポイント的优势を示し、人間の約3倍の効果

**特に印象深刻な点是**:

- 最も強い说服モデルはOpus 4.1とOpus 4.6で、以下OpenAI（GPT-4o、GPT-5.4）、Google（Gemini 2.5 Pro）、xAI（Grok 4.20）と続く
- AIの优势の来源は「情報量と速度」——人間並みの速度・分量に制限すると优势が消失
- 研究者たちは「AIがерх-persuadeできるなら、AIを統制する者が社会を変えられる」と警告

この研究は、**AIの说服能力が社会的衡突に影響を及ぼす可能性**を早年級から定量的に示した点で、AI安全性と規制の文脈で重要な議論を呼びそうだ。

---

## Anthropic、「Claude Tag」の正式版をSlackに 도입——組織的知识を学習するAI同僚

6月23日、AnthropicはSlackに常駐するAIチームメイト機能「**Claude Tag**」の正式提供を開始した。単なる生产性アシスタントではなく、Slackのメッセージ履歴を通じて組織の文脈、机构知識、业务フローを継続的に学習する点が特徴。

**Claude Tagの核心的機能:**

- **Slack常駐**: AIアシスタントがチームメンバーと同じSlackチャンネルに参加し、同じ情報にアクセス
- **組織的文脈の学習**: 過去のプロジェクト、決定根拠、部門間の重複領域を理解し、チームへの新規成员の・オンボーディングにも活用可能
- **エンタープライズ戦略**: TechCrunchのRebecca Bellan记事は「生产性向上を超えた、組織的文脈の獲得とエンタープライズワークフローへの戦略的参入」と分析する

Claude Tagは、AnthropicがClaudeのエンタープライズ展開を加速する一環として位置づけられている。競合のMicrosoft（Copilot）、Google（Geminifor Workspace）と同様に、AIアシスタントを職場の日常的な业务流程に深く統合する動きが加速している。

---

## Samsung、3年ぶりにChatGPT EnterpriseとCodexを全面再開

Samsung Electronicsは6月24日、2023年に實施した生成AI使用制限を経て、約3年ぶりに**ChatGPT EnterpriseとCodex**への社員アクセスを全面的に再開した。OpenAI侧の発表によれば、対象はSamsung Electronicsの韓国全社員およびDevice eXperience（DX）部門年全球の社員。

**再開の背景と範囲:**

- **再開の理由**: 2023年、Samsungは敏感な社内情報が外部AIプラットフォームにアップロードされた可能性があるとしてChatGPT等の使用を制限。这次は「ChatGPT Enterprise」バージョン——组织的なデータ保謢、アクセス制御、セキュリティ管理機能を実装——を提供することでリスクを.management
- **活用業務范围**:软件开发（Codex）、マーケティング、制品開発、制造など技術・非技術業務全般
- **DX部門全球展開**:智能手机、消費電子機器、家電を含むDevice eXperience部門が対象

この再開は、生成AIの企業導入における「安全神話」と「生产力向上」の両立を目指すSamsungの戦略的转变を示す。Enterprise版本の導入により、データガバナンスと员工生産性のはざまで揺れ動いてきた企業のAI政策の新たなモデルケースになりそうだ。

---

## 参考リンク

- [OpenAI unveils its first custom chip, built by Broadcom (TechCrunch)](https://techcrunch.com/2026/06/24/openai-unveils-its-first-custom-chip-built-by-broadcom/)
- [AI systems out-persuade expert humans (arXiv)](https://arxiv.org/abs/2606.16475)
- [Anthropic's Claude Tag is learning your company, one Slack message at a time (TechCrunch)](https://techcrunch.com/2026/06/23/anthropics-claude-tag-is-learning-your-company-one-slack-message-at-a-time/)
- [Samsung opens ChatGPT Enterprise and Codex access after AI restrictions (AI News)](https://www.artificialintelligence-news.com/news/samsung-chatgpt-enterprise-codex-employee-ai-use/)
- [From AGI to ASI (Google DeepMind, arXiv)](https://arxiv.org/abs/2606.12683)
- [Designing AI-resistant technical evaluations (Anthropic Engineering)](https://www.anthropic.com/engineering/AI-resistant-technical-evaluations)

---

*（本文の情報は2026年6月25日時点のものです）*
