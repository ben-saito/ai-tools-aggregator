# OpenAI「GPT-Red」で安全性追求、Claudeの内部構造解明などAI開発最前線 — 2026年7半月号

2026年7月中旬、AI開発において安全性と実応用が交差する動きが加速している。OpenAIは「GPT-Red」というLMハッカーを構築してモデルの脆弱性検証に活用し、Google DeepMindは生命科学分野でのAI悪用防止プログラムを開始した。またGoogleはAI Modeのアプリ連携機能を拡大し、Yann LeCun率いるAMI Labsは「AGI」呼称自体を否定する立場を明確化した。

---

## OpenAI、GPT-RedでLLMハッキングによる安全対策強化

MIT Technology Reviewが報じたところによると、OpenAIは「GPT-Red」と呼ばれるLLMハッカーを開発し、自社のモデルに対するサイバー攻撃耐性を強化している。GPT-RedはGPT-5.6の訓練に採用され、彼のモデルをより安全にするための「スパーリングパートナー」として機能しているという。

従来、AIモデルの安全評価は人手によるred teaming（侵入テスト）に依存してきたが、GPT-Redの導入により**大規模かつ自動化された脆弱性発見**が可能になった。OpenAIは、GPT-Redとの訓練を通じてGPT-5.6が「史上最安全」と主張しているが、評論家からは「自ら脆弱性を生み出す、自ら検証する」という構造的問題への指摘もある。

AIセーフティの文脈では、**LLMハッキング**（LLMに対する敵対的プロンプト注入やジェAILブレイク）の検出・防止が重要な研究テーマとなっており、GPT-Redはその実践例として注目される。

---

## Anthropic、Claudeの「内部構造.window」に新発見

MIT Tech Reviewの別の記事によれば、AnthropicはClaudeの内部動作に関する新たな発見を公開したばかり。Claudeの「window」（内部表現の可視化手法）がAIの思考過程理解にどのように役立つかについての研究が進行中である。

これはOpenAIのGPT-Redと対照的である。GPT-Redが外部からの攻撃而性を高める研究方向なら、Anthropicは**モデル内部の理解・解釈可能性（interpretability）**に軸足を置いている。安全性アプローチの方向性の違いが、両社の研究戦略の違いを如実に見せている。

---

## Google DeepMind、Isomorphic LabsとAI|bioresilienceプログラム開始

Google DeepMindとIsomorphic Labsは連名で、AIの生物学分野への悪用を防ぐ「bioresilience」プログラムを発表した。AIニュースの報道によると、このプログラムは2つの目的を同時に達成を目指す：

- **悪用防止**: AIを使った生物学的研究（創薬、遺伝子編集など）の誤用リスクを抑制する枠組みの構築
- **アウトブレイク対応**: パンデミックなどの危機发生时にAIを而起える公衆衛生システムの整備

特にDSGV心配的是、AI技術が生物学研究の大衆化により前は專門家のpodcastだった知識がAI辅助で更容易になることで、危险な実験再现が容易になるリスク。Bioresilienceプログラムは、この「門司制御」と「知識普及」のバランスを取る試みとして位置付けられている。

---

## Google AI Mode、アプリ連携でタスク自動化対応

TechCrunchが報じたように、GoogleはAI Mode（新昕AI検索界面）のアップデートを行い、	select appsとのリンク・連携機能を追加した。

この機能により、AI Modeは單純な質疑応答から深化して、ユーザーが日常的に使うアプリ上での**タスク遂行** 가능한になった。具体例としては、メール作成・配送依頼・カレンダー管理などをAI Modeから直接操作できる。Googleは「Software Designed for AI Agents instead of just Humans」という視点を強調しており、笨供的な 소비자アプリではなくAI主体のソフトウェア設計潮流を反映している。

---

## AMI Labs、LeCun監督のWorld Modelsで「AGI」呼称を否定

TechCrunchのインタビューで、AMI Labs CEOのAlexandre LeBrun（同氏）は、同社技術を「AGI」や「超人的知性」と呼ぶことを明確に拒否した。AMI LabsはYann LeCun監督の下で「World Models」（世界モデル）の開発を進めるスタートアップで、LeBrunは「世界中が『超人的知性』と言っているが、私はその言葉を完全に否定する」と述べている。

World Modelsは、AIが世界の構造を理解・予測するための基盤モデルアプローチであり、従来のLLMとは根本的に異なる。阿Perlの主張では、「世界の فهم」を重視するAMI Labsのアプローチは、パターン照合に依存する他のAIとは一線を画すという。

この発言は、OpenAIやGoogleが「AGI」「Superintelligence」を目標として揭げる中、**AI研究の別の潮流**（神経記号AI、World Models、System 2 AIなど）が主流派とは異なるEval基准を持っていることを示している。

---

## DoorDash、CLIツール「dd-cli」でAI agent対応を促進

TechCrunchによると、DoorDashは「dd-cli」というコマンドラインツールの限定ベータ版を開始した。開発者やAI agentがターミナルからDoorDashの店舗検索・カート作成・注文完了までを実行できる。

これは「Software Designed for AI Agents instead of just Humans」を具現化する事例として興味深い。従来のWeb/モバイルUI 대신、APIやCLIを重視する設計により、**AI agentによる自律的なサービス利用**が可能になる。DoorDashだけではないが、Hugging Face Faceも同様のAI agent対応を進めていることが业界の тенденциюを示している。

---

## 参考リンク

- [MIT Tech Review: Meet GPT-Red](https://www.technologyreview.com/feed/)
- [MIT Tech Review: Claude inner workings](https://www.technologyreview.com/feed/)
- [AI News: Google DeepMind bioresilience](https://www.artificialintelligence-news.com/news/examining-google-deepmind-ai-bioresilience-push/)
- [TechCrunch: Google AI Mode apps](https://techcrunch.com/2026/07/16/googles-ai-mode-now-lets-you-link-and-interact-with-select-apps/)
- [TechCrunch: AMI Labs](https://techcrunch.com/2026/07/16/why-ami-labs-alexandre-lebrun-wont-call-his-ai-agi-or-superintelligence/)
- [TechCrunch: DoorDash CLI](https://techcrunch.com/2026/07/16/yes-you-can-now-order-doordash-from-the-command-line/)

---

*（本文の情報は2026年7月16日時点のものです）*
