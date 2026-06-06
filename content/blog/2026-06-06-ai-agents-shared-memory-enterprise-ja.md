# AIエージェントの「今月の転換点」：チーム全体の文脈共有が次の競争軸に——MicrosoftのIQプラットフォームと.memoryアーキテクチャの課題

2026年6月第2週、AIエージェントの話題は「性能向上」から「協調と治理」という次なる課題へとシフトしている。MicrosoftがBuild 2026で披露したAI FuturistのMarco Casalaina氏への独占インタビューでは、エージェントがエンタープライズ環境に本格浸透するための条件として、**文脈（Context）の共有**と**チーム全体の.memory統合**が重要テーマとして浮かび上がった。同じくVentureBeatが報じたAIエージェントの「学習のサイロ化」問題も、この課題を共有している。

---

## AI Futuristが明かす、Microsoftのエージェント戦略とIQプラットフォームの本当の意味

MicrosoftのVP Products兼AI FuturistであるMarco Casalaina氏は、VentureBeatの独占インタビューに応じて、Microsoftのagent戦略の全体図を語った。

Casalaina氏の説明を整理すると、Microsoftのエージェント基盤は**4層構造**で成り立っている。

**最下層：モデル選択の自由**
OpenAIのGPTフロンティアモデルに加えて、AnthropicのClaudeシリーズ（Azure上でClaude Opus 4.8が提供開始）も選択肢に加わる。そしてBuild 2026では、Microsoftが内製した**MAIモデルファミリー**が加わった。MAIはトークン効率とカスタマイズを目的としており、顧客が自有データセットでファインチューンできる設計になっている。

**第2層：ホスト型エージェント（Foundry上のManaged Agents）**
Microsoft Foundry上で自動スケーリングやコンテナ管理を引き受けてくれる管理型エージェント環境が正式GAを迎えた。開発者はインフラ管理なくエージェントを構築・運用できる。

**第3層：Foundryコントロールプレーン**
エージェントのコスト・トークン・正確性を可視化し、継続的評価（Continuous Evaluation）とインタラクションサンプリングでドリフトを監視するガバナンス層。

**第4層：IQプラットフォーム（今年中のGA）**
この点が最も重要だ。MicrosoftがBuild 2026で大幅に拡張を宣言した**IQシリーズ**は、エージェントが企業データに安全にアクセスするための「顔」となる：

- **Foundry IQ**：非構造化ナレッジ（ドキュメント、Web）に対するエージェント向け検索インターフェース
- **Fabric IQ**：Microsoft Fabric・Power BIに蓄積された構造化ビジネスデータへのエージェントアクセス
- **Work IQ**：Outlook、Teams、Word、SharePointなどのMicrosoft 365アプリ群へのエージェント向けインターフェース
- **Web IQ**（新登場）：Web検索・動画検索・自動ブラウジングをヘッドレスで提供するエージェント向けスタック

Casalaina氏が強調したのは、「IQは人間の顔を想定していない」という点だ。Web IQは特にその傾向が強く、「headless（顔がない）」と表現される。これはMicrosoft 365のGUIに依存しない、エージェント原生（agent-native）の設計思想を反映している。

### Scout：個人向けワークエージェントの登場

Microsoftはまた、**Scout**という個人向けワークエージェントも発表している。これは特定の業務フローに特化した「個人秘書」型エージェントであり、IQプラットフォームと連携して動作する。

Casalaina氏自身の言葉で言えば、「AI Futuristの役割は、社内で最も早く新技術を試すこと」であり、彼自身がMicrosoftの「最初の人柱」になっている。同氏が入手したばかりの新技术在何かは明かされなかったが、Microsoft内部でも急速な技術更新が続いていることが伝わる。

---

## AIエージェントが「チームで学習しない」根本的な問題

Enterprise AIの второй大きな話題は、**AIエージェントがチーム全体の文脈を学習しない**という構造的缺陷だ。VentureBeatが6月5日に伝えた分析記事から、この問題の本質を見る。

### 問題が起きた瞬間

一人のエンジニアがAIエージェントに対してより良いプロンプトやフィードバックを与えると、その改善はその本人だけに留まる。同事が同じツールを開いても、从零开始からのスタートになる。この「修正の非伝播」は、企业的には**Institutional Knowledge（組織的知識）の蓄積が完全に途切れる**状態を意味する。

この問題は**マルチエージェントワークフロー**においてさらに深刻化する。チーム間でエージェントが文脈を共有することが期待されているにもかかわらず、共有.memory層がなければ、各チームメンバーが異なるバージョンのエージェントを訓練することになり、それらは決して同期しない。

### 企業全体の数字が物語る現実

Asanaの調査によると、**75%の知識労働者が業務でAIを使用している**にもかかわらず、**生産性向上効果を報告している企業はわずか5%**しかない。この巨大なギャップの背景には、エージェントが「個人最適化」から「チーム最適化」に移行できないという構造問題がある。

AsanaのChief Product OfficerであるArnab Bose氏はVentureBeatに対して「モデルプロバイダは推論とリトライループの改善に力を入れていますが、企業作業文脈を『チーム成员が皆reasoningできる形で』共有.memoryに組み込むことは得手としていません」と指摘する。

### 解決策：専用.memory層の設計

この課題に対する技術的アプローチは、エージェントの.statelessな設計を前提とした場合、.memoryはコンテキストウィンドウの外に専用層として設けるしかない。

Asanaは**Agentic Work Managementプラットフォーム**の中で、团队成员谁かが一人のエージェントを修正すればそれが全员に適用される「文脈グラフ」を自動構築している。これにより、团队成员は個々にプロンプトエンジニアリングや文脈エンジニアリングの専門家になる必要がなくなる。

Collateの共同創業者兼CTOであるSriharsha Chintalapani氏も、「组织は共享.memoryを单纯なプロンプトエンジニアリングの問題として扱わず、すべての会話に文脈を繰り返し伝えるシステムを構築去想すべき」と指摘する。

Zeta Globalの最高データ責任자인Neej Gore氏も、「共享文脈は組織の知的作業を『複利で増やすliving memory』になる」と語っている。

### 個人エージェント vs チームエージェント

現在のエンタープライズAIの状況を一言で表せば、**「エージェントは蔓延しているが、個人用に作られている」**に近い。MicrosoftのCopilotも现時点では个人単位での.role・语調・作業パターンの学习に留まり、团队全体の共享.memoryには対応していない。

この状況は、技术的に见れば、エージェントの.memory設計が个人単位の.contextで止まっていることを意味する。下一个の課題は、关系性 기반으로関連する文脈を引く「関係性.memory検索（relational memory retrieval）」を企业全体規模で実現することであり、これは 最大手のモデルプロバイダー以外には実装できる组织が无几という现状がある。

---

## 開発者視点からの考察

これらの記事から、开发者にとって重要な示唆が三点ある。

**第一に、エージェントの Memory/Context 管理は、采购要件清单の上位に来る**。单一ユーザーの.agentように个人专用に调整が続く.systemは維持コストが高く、チーム全体の共享.memoryに接続された.agentは自動的に组织的知識を集積する。IQプラットフォームの立场から見ると、「データを哪里に蓄積し、エージェントがどこから引くか」というアーキテクチャ设计が、单纯な性能比较とは別の競争軸になる。

**第二に、IQプラットフォームの「MCPとのすみ分け」**。MicrosoftはMCP（Model Context Protocol）との対比でIQを位置づけているが、MCPが.tool間の标准化プロトコルであるのに対し、IQは企业内データソースへの.agent向けアクセス抽象化レイヤーとして機能する。开发者にとっては两者を使い分ける判断が必要になり、MCPが「方法（How）」の标准化であれば、IQは「データ在哪（Where）」の标准化という役割分担になる。

**第三に、MXCのセキュリティモデル**。OSレベルのサンドボックスは、エージェントの行动範囲を生涯的に定義し、実行時にOSカーネルがポリシーを强制する。OpenAIやNvidiaが早期に参加していることは、エージェントの安全的実行が产业全体の共通课题であることを示している。

---

## 参考リンク

- [Microsoft AI chief says company was "set free" from OpenAI to pursue superintelligence](https://venturebeat.com/ai/microsoft-ai-chief-says-company-was-set-free-from-openai-to-pursue-superintelligence/)
- [Microsoft's AI Futurist explains how he uses Copilot](https://venturebeat.com/ai/microsofts-ai-futurist-explains-how-he-uses-copilot-and-the-real-world-problems-enterprises-are-solving-with-agents/)
- [AI agents are learning on the job — just not for your whole team](https://venturebeat.com/ai/ai-agents-are-learning-on-the-job-just-not-for-your-whole-team/)
- [Microsoft launches MXC, an OS-level sandbox for AI agents](https://venturebeat.com/ai/microsoft-launches-mxc-an-os-level-sandbox-for-ai-agents-with-openai-and-nvidia-already-on-board/)

---

*本文の情報は2026年6月6日時点のものです*