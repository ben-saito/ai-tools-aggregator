# OpenAI、ChatGPT Workを発表：クラウド永続VMでメール・Slack・カレンダーを自律管理

OpenAIは2026年7月、待望の自律型AIエージェント「ChatGPT Work」の提供を開始した。GPT-5.6を核に、クラウド上で常時稼働する仮想マシン型のアーキテクチャを採用し、ユーザーにかわって複雑なマルチステップタスクを実行する。対応サービスはGmail、Google Calendar、Slack、GitHubなど多彩で、プレゼンテーションやスプレッドシート、Webサイトの制作すらサポートする。月額20ドルのPlusプラン부터利用可能な点が大きな特徴だ。

---

## 永続クラウドVMという設計思想

ChatGPT Workの最大の特徴は、**クラウド上に常駐する仮想マシン**として動作する点にある。競合他社のエージェントがローカルマシンの電源ONと接続状態を前提とする中、ChatGPT Workはデバイス无关で常に利用可能である。OpenAIのPMであるTy Geri氏みずから「ビーチでスマホからサイトを作成し友人と共有できる」と語るように、モバイルファーストの体験設計が強調されている。

---

## MCPプロトコルによる外部サービス連携

本製品は**Model Context Protocol（MCP）**ベースのプラグインアーキテクチャを採用する。Gmail、Google Calendar、Slack、GitHubなどへの接続はすべてMCP規格に準拠しておりユーザーは外部サービスとの認証情報を連携するだけでよい。例えば「ChatGPT Workに『今日のSlackをキャッチアップして』と指示すれば、過去の投稿を要約し、未回答のスレッドを特定してくれる。

 calendar連携ではスケジュール衝突の検出、会議への必要準備のリストアップ、直接的な日程変更・辞退・承諾也不可能である。

---

## 実際の業務適用例：10個のバグバッシュを同時スケジューリング

Geri氏自身の利用事例によれば、新機能リリース前のテストセッション（.internalでは「bug bashes」）をChatGPT Workに一任したという。手順は以下の通りである：

1. 「ChatGPT Workの全機能についてbug bashを設定し、その機能に貢献した人を全員追加して」と指示
2. Slack・GitHub・Docsを参照し、該当者TOP4を特定
3. 全員の都合の良い時間を自動探索
4. **10個のbug bashすべてを同時調整**

Geri氏によれば「これだけで30分以上かかっていた作業が数分で完了する」という。更に、分析業務への適用では「3ヶ月かかっていた作業が1週間で完了する」事例も紹介されており、ルーティンタスクにとどまらない高度な業務自動化が確認できる。

---

## 企業AI市場の三者戦争

ChatGPT Workの登場は、AnthropicのClaude Cowork（2026年4月にGA化）とMicrosoft Copilot Cowork（2026年6月GA開始）と直接競合する。三者とも「クラウド常駐型エージェント」「MCP/Pluginによる外部連携」「複数デバイス対応」というほぼ同一のビジョンを持つ。

しかしOpenAIの競争優位は**顧客基盤の規模**に存在する。ChatGPTの週間アクティブユーザーは9億人、有料サブscriberは5000万人を越え、Fortune 500企業の92%がChatGPTを導入済みである。Plusプラン（月額20ドル）への開放により下沉市場への浸透が加速する構えだ。

---

## IPO間近のOpenAIにとっての本製品の意味

OpenAIは2026年、通期で140億ドルの損失が見込まれているが、月間収益20億ドルを達成、AlphabetやMeta同時期の4倍の成長率を維持する。企業向け収益は全体の40%以上占め、2026年末までに消費者向けと均衡する見通しである。Draft S-1提出済みで估值730〜850億ドル規模のアーリアーIPOが近づく中、ChatGPT Workは「消費者から企業への収益転換」を証明する旗的商品としての位置づけである。

---

## データプライバシーの課題

Sensitiveなビジネスデータ（Slackメッセージ、メール、カレンダー、GitHub履歴）にアクセスする本製品について、Geri氏は「常にユーザーの制御下にある」と語る。EnterpriseアカウントにはZDR（Zero Data Retention）が適用されモデル訓練へのデータ利用はオプションである。ただし、ユーザーが能動的にプロンプトにテキストを入力する従来のchatbotセッションとは本质上異なるデータ表面積を持つことになるため、Enterpriseセキュリティチームの審査が導入の条件となる。

---

## 参考リンク

- [OpenAI introduces ChatGPT Work, a cloud-based AI agent that manages tasks across email, Slack and calendars (VentureBeat)](https://venturebeat.com/ai/openai-introduces-chatgpt-work-a-cloud-based-ai-agent-that-manages-tasks-across-email-slack-and-calendars)
- [VentureBeat AI Category](https://venturebeat.com/category/ai)

---

*（本文の情報は2026年7月12日時点のものです）*
