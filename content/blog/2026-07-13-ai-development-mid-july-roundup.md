# AI開発最新ニュース（2026年7月13日号）— GPT-5.6登場、Apple vs OpenAI、企業AIエージェントのジレンマ

2026年7月第2週、AI業界はGPT-5.6の正式リリース、AppleによるOpenAI提訴、そして企業AIエージェントの「自信犯という病」など、、複数の重要なトピックが同時に展開した。GPT-5.6 семействоがMicrosoft 365 Copilotの標準モデルに採用される一方、AppleがOpenAIを提訴するという前代未聞の展開も生まれた。本稿では本周期の最重要AI開発ニュースを整理する。

---

## GPT-5.6公開 — OpenAIの新世代モデルがMicrosoft 365 Copilotの標準に

OpenAIは7月9日、**GPT-5.6ファミリー**のモデルReleasedを発表、Microsoft 365 Copilot（Word、Excel、PowerPoint、Chat、Cowork）の「優先モデル」として即座に採用された。OpenAIはGPT-5.6について「トークンあたりのインテリジェンス向上、ドルパーパフォーマンスの強化」を主張している。

**技術的ポイント:** GPT-5.6と同時に**GPT-Liveボイスモデル**もLaunchされ、ChatGPT Voiceの自然な会話交互機能を強化した。Microsoftとの協業体制は継続するものの、AppleがOpenAIを提訴するなど複雑な利害関係が絡んでいる。

**参考:**
- [OpenAI launches its new family of models with GPT-5.6 (TechCrunch)](https://techcrunch.com/2026/07/09/openai-launches-its-new-family-of-models-with-gpt-5-6/)

---

## Apple、OpenAIを提訴 — 企業秘密漏洩とIO Products問題が浮上

7月10日、AppleはOpenAIを相手取り、OpenAIエンジニアがAppleの企業秘密を盗んでOpenAIのハードウェア 계획을進めたとして提訴した。訴状にはJony IveのIO Productsも名を連ねる。OpenAI側からは元Apple長期間従業員が-Senior Leadershipとして関与此と見られている。

**技術的ポイント:** 関連の訴訟として、NY TimesはOpenAIがChatGPTのTrainingデータを隠蔽・削除了指を使用し、著作権侵害訴訟の証拠を保全しなかったとして另行提訴している。Ars Technicaの報道によれば、OpenAIはこれらの証拠隠滅を否定している。

**参考:**
- [Apple sues OpenAI over alleged trade secret theft (TechCrunch)](https://techcrunch.com/2026/07/10/apple-sues-openai-over-alleged-trade-secret-theft/)

---

## 企業AIエージェントのジレンマ — 57%が「自信犯の誤答案」を目撃

VentureBeatが7月10日に伝えた調査によれば、**57%의 기업이AIエージェントが「自信を持って完全に間違う」回答を生成するのを目撃した**経験がある。原因の大部分はモデル本身的欠陥ではなく、ビジネスコンテキストの欠落または不整合にあるという。

**技術的ポイント:** 企業の**75%はまだ agentic context layer**（エージェント向けコンテキスト管理レイヤー）を保有しておらず、同じく**69%が共有APIキー**でAIエージェントを運用し続けている。Palo Alto Networks、CrowdStrike、Ciscoの3社は過去1年間でエージェントセキュリティ問題に collectively $22 billion以上を赌けている。

AIエージェントの自律性が拡大する一方で、信頼性の確保とセキュリティの両立が企業にとっての急務となっている。

**参考:**
- [57% of enterprises have watched AI agents be confidently wrong (VentureBeat)](https://venturebeat.com/data/57-of-enterprises-have-watched-ai-agents-be-confidently-wrong-the-fix-is-an-agentic-context-layer-but-who-has-one)

---

## GoogleのTabFM — テーブルデータ向けファウンデーションモデルの革新的アプローチ

Google Researchは**TabFM**を提案。これはテーブルデータ予測をin-context learning問題として再定義したファウンデーションモデルで、**未見のテーブルに対して単一のforward passで予測を生成**できる。

**技術的ポイント:** 従来のテーブルデータMLアプローチではデータセットごとのFine-tuningと設定にweeksを要したが、TabFMは単一のAPI callでtime-to-productionをweeksから数秒に短縮する。テーブルデータ予測のパラダイムシフトとして注目される。

**参考:**
- [Google's TabFM skips per-dataset training and still predicts on tables it's never seen (VentureBeat)](https://venturebeat.com/technology/googles-tabfm-skips-per-dataset-training-and-still-predicts-on-tables-its-never-seen)

---

## Slopsquatting — AIコーディングツールが生む新しいサプライチェーン脅威

「**Slopsquatting**」は、LLMが幻觉的に生成した架空のソフトウェアパッケージ名を悪用する新しい攻撃手法。AI coding assistantが生成したReal存在しないパッケージ名を開発者が採用し、攻撃者がそのパッケージ名了她恶意コードを登録、指せておく。

**技術的ポイント:** Ars Technicaによれば、9つの主要なAIツールが「HalluSquatting」を介して大规模botnetを構築可能被用されている。Brown大学の経済学教授による調査では、AI-assistedから完全監視の試験に切り替えたところ、考试成绩が50%低下したというAIチートの实证もある。

**参考:**
- [Forget typosquatting — slopsquatting is the software supply chain threat created by AI coding tools (VentureBeat)](https://venturebeat.com/security/forget-typosquatting-slopsquatting-is-the-software-supply-chain-threat-created-by-ai-coding-tools)

---

## Meta、InstagramのAI\"Muse\"機能を撤回 — .deepfake作成機能にユーザー反発

Metaは7月10日、Instagramの**\"Muse\"**というAI機能を削除した。この機能は公开アカウントの投稿を参照してディープフェイク画像を生成するもので、プライバシーと同意的重大な问题，引发用户强烈反発。

**技術的ポイント:** Metaは「有用なクリエイティブツールを提供し、人々が公開コンテンツがこの方法で参照されるかどうかを制御できるようにすることを目的としていた」が、「この機能は的を外れていた」との声明を发表し、撤回に至った。

**参考:**
- [Meta removes controversial AI feature on Instagram after backlash (TechCrunch)](https://techcrunch.com/2026/07/10/meta-removes-controversial-ai-feature-on-instagram-after-backlash/)

---

## ChatGPT Work公開 — 独立型エージェントワークフローと定时タスク自动化

OpenAIは7月9日、**ChatGPT Work**をLaunchした。これはAppsとファイルをまたいでActionを実行し、プロジェクトに応じてhours単位で継続的に動き、目标を最终成果物として完成させる自律型エージェントシステム。

**技術的ポイント:** GPT-5.6を基盤とし、OpenAIは，持続的な长時間運行型自律エージェントのEnterprise向け展开を进的ている。Scheduled task automationとIndependent agent workflowsにより、従来のRPA领域にも進出する可能性がある。

**参考:**
- [ChatGPT for your most ambitious work (OpenAI Blog)](https://openai.com/index/chatgpt-for-your-most-ambitious-work)

---

## 参考リンク

- [OpenAI launches its new family of models with GPT-5.6 (TechCrunch)](https://techcrunch.com/2026/07/09/openai-launches-its-new-family-of-models-with-gpt-5-6/)
- [Apple sues OpenAI over alleged trade secret theft (TechCrunch)](https://techcrunch.com/2026/07/10/apple-sues-openai-over-alleged-trade-secret-theft/)
- [57% of enterprises have watched AI agents be confidently wrong (VentureBeat)](https://venturebeat.com/data/57-of-enterprises-have-watched-ai-agents-be-confidently-wrong-the-fix-is-an-agentic-context-layer-but-who-has-one)
- [Google's TabFM skips per-dataset training and still predicts on tables it's never seen (VentureBeat)](https://venturebeat.com/technology/googles-tabfm-skips-per-dataset-training-and-still-predicts-on-tables-its-never-seen)
- [Forget typosquatting — slopsquatting is the software supply chain threat created by AI coding tools (VentureBeat)](https://venturebeat.com/security/forget-typosquatting-slopsquatting-is-the-software-supply-chain-threat-created-by-ai-coding-tools)
- [Meta removes controversial AI feature on Instagram after backlash (TechCrunch)](https://techcrunch.com/2026/07/10/meta-removes-controversial-ai-feature-on-instagram-after-backlash/)
- [ChatGPT for your most ambitious work (OpenAI Blog)](https://openai.com/index/chatgpt-for-your-most-ambitious-work/)

---

*（本文の情報は2026年7月13日時点のものです）*
