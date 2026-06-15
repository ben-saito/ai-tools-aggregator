# AI開発週次レポート：HuaweiがAppleのAI空白を埋める、VisaがChatGPT統合、CoinbaseがAIエージェント向け決済APIを公開

2026年6月第2週は、AIエージェントの金融分野への本格展開と、中国市場におけるAI主権の確立という2つの大きな潮流が鮮明になった一週だった。Appleが中国市場でのSiri AI投入を見送った僅か4日後、HuaweiがHarmonyOS 7で2,000個のAIエージェントを投入。米国の輸出規制への対応としてAnthropicが行ったAPIアクセス制限が各国のAI主権政策を加速させる一方で、VisaとCoinbaseはAIエージェントが直接ユーザーの代わりに金融取引を実行できる世界を切り開いた。

---

## Huawei、Appleが的中国撤退の空白をHarmonyOS 7で埋める

**Huawei**は2026年6月11日〜13日にかけてHDC 2026（HarmonyOS Developer Conference）を開催し、**HarmonyOS 7**正式版を発表した。OSの中核には**2,000個のAIエージェント**がプリインストールされ、エージェント原生（agent-native）アーキテクチャを採用した。

Appleは同年6月7日、iOS 27向けSiri AIが中国本土では提供されないことを正式に確認。中国の規制当局はApple Intelligenceに関するデータ処理の要件を満たせず、結果として中国ユーザーはSiri AIのアップデートを受け取れないことが判明した。

Huaweiはこの空白に着実に対処。HarmonyOS 7に統合されたAIエージェントは、与中国本土のアプリ群（WeChat、銀聯、百度など）と深く連携し、ユーザーの日常的なタスクを自律的に実行できる。技術的には、**openPangu**フレームワークを基盤に、Xiaoyiという名称で一貫したエージェント体験を提供する。

開発者にとっては、HarmonyOS Agent FrameworkがMCP（Model Context Protocol）互換のツール呼び出しを標準サポートしている点が注目に値する。既存のAndroid/iOS向けアプリと比較して、エコシステム間の差異は小さくなりつつある。

---

## Anthropicの輸出規制対応が招いた「AI主権」問題

**Anthropic**は米国政府的命令に従い、Claudeに対して特定の国々からのパブリックアクセスを全面的にブロックした。この措置は**Fable 5**および**Mythos 5**モデルに適用され，政府機関や企業ユーザーは個別に監査付きのアクセスを申請する必要がある。

この判断は連鎖反応を引き起こしている。EU加盟国のいくつかは自国データの国内処理義務（GDPR強化版）を、AI規制框架に盛り込む動きを加速。中国はすでにAnthropic APIの代替としてDomestic LLMを使用する方向へ舵を切っており、**AI主権（AI Sovereignty）**という概念が実体を持ち始めている。

技術的に見ると、MCPプロトコルを標準的にサポートするAnthropicの現行モデルは境外配置的SaaSとして提供されるため、各国のデータローカライゼーション要件との整合が今後最大の課題となる。

---

## Visa × ChatGPT：AIエージェントが小売購質を直接実行する時代

**Visa**は2026年6月11日、OpenAIとの戦略的連携を発表。ChatGPT Shopping機能において、AIエージェントがユーザーからの委任を受け取って零售購入を実行できる基盤を構築した。

これは概念的な発表に留まらない。Visaの持つ**x402プロトコル**（認証済み微払い決済規格）とChatGPTのTool Use機能が統合され、以下のフローが可能になる：

- ユーザーが旅行の予約をChatGPTに指示する
- ChatGPTが旅行代理エージェントとして航班・ホテルを検索
- エージェントがVisaのx402経由でユーザーの代わりに決済を実行
- 旅程がカレンダーに自動登録

金融規制の観点からは、VisaはKYC（本人確認）済みユーザーに対してのみエージェント決済を許可する設計としている。PCI DSSに準拠したトークナイゼーションが基盤にあり、エージェントが直接カード情報に触れることはない。

---

## Coinbase for Agents：AIポートフォリオ運用の標準API

**Coinbase**も同年6月12日付けで、AIエージェント向けプラットフォーム「**Coinbase for Agents**」を発表。MCPプロトコルCompatibleのAPIを通じて、ユーザーが委任したAIエージェントが暗号資産ポートフォリオの自動取引・決済を実行できる環境を提供する。

x402 プロトコルをサポートしており、暗号資産の世界でもVisaと同じアプローチ（事前認証済みチャネル経由での自動決済）が採用された。Coinbaseの意図は明確で、Web3金融とAIエージェント経済の間に標準的なinterfacesを設定することにある。

技術的なアーキテクチャは、金融執行チャンネル（トレーディングAPI、決済API）とAI推論レイヤー（OpenAI/Anthropic/Claude等多种LLM）がMCP経由で疎結合する構成。ユーザーが任意のLLMを使いながらCoinbaseの金融機能に、标准的なプロトコルで接続できる。

---

## McDonald's × Google：AI、ドライブスルーに登場

**McDonald's**は2026年6月13日、Googleの技術提供を受けるAI drive-thru ordering systemの実証実験を拡大すると発表。蘭・独・日本の3カ国で展開中のパイロットプログラムが、音声認識精度と処理速度の両面で目標値（受付精度95%以上、平均処理時間90秒以内）を達成した。

Google Cloudの**Conversational AI**技術が音声認識・意図理解・生成AIによるdialog managementを担当。店舗側のPOSシステムとはGoogle Kubernetes Engine経由で連携し、メ뉴推薦と注文確定均由AIが担当する。

注目点は、ドライブスルーという非同期・ノイズ多的環境での音声AI適用が、いかに実運用に耐える精度を実現しているか。これまでの голос assistant技術の課題であった「外的噪音」「同時会話」「多言語対応」がどの程度克服されたかは、検証プログラムの結果待ちである。

---

## 今週のLLM / AI技術動向まとめ

| トピック | 企業 | 技術的内容 |
|---------|------|-----------|
| HarmonyOS 7 | Huawei | 2,000 AI agents、agent-native OS、openPangu |
| Claude輸出規制 | Anthropic | 政府命令に応じたAPIアクセス制限 |
| ChatGPT Shopping | Visa × OpenAI | x402プロトコルによるAIエージェント決済 |
| Coinbase for Agents | Coinbase | MCPCompatibleトレーディング/決済API |
| AI Drive-thru | McDonald's × Google | Conversational AI × GKE |

---

## 参考リンク

- [HarmonyOS 7 steps into the AI gap Apple left open in China](https://www.artificialintelligence-news.com/news/harmonyos-7-china-ai-apple-gap/)
- [Coinbase for Agents: Automating portfolio trading with AI](https://www.artificialintelligence-news.com/news/coinbase-for-agents-automating-portfolio-trading-with-ai/)
- [Visa ChatGPT integration enables AI agent retail purchasing](https://www.artificialintelligence-news.com/news/visa-chatgpt-integration-enables-ai-agent-retail-purchasing/)
- [The AI off switch: How Anthropic's export controls sparked a global AI sovereignty scramble](https://www.artificialintelligence-news.com/news/anthropic-export-controls-ai-sovereignty/)
- [McDonald's tests Google-backed AI drive-thru ordering system](https://www.artificialintelligence-news.com/news/mcdonalds-ai-drive-thru-google-archiq/)
- [Siri AI debuts with Google inside and Asia locked out](https://www.artificialintelligence-news.com/news/siri-ai-google-gemini-rollout/)

---

*（本文の情報は2026年6月16日時点のものです。AI技術の急速な進展に伴い、記載された内容は急速に変化する可能性があります。）*
