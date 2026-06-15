# AI開発ニュース週間レポート：Anthropic輸出規制、SalesforceのFin買収、Meta AI Mode、HarmonyOS 7

2026年6月第2週は、AI業界において規制・買収・プラットフォーム戦略が同時進行した週だった。米国政府によるAnthropicの最 мощныеモデル輸出規制はサイバーセキュリティ界の反発を呼び、SalesforceはAI客服プラットフォームのFinを36億ドルで買収、さらにMetaはFacebookにAI Modeを、GoogleはReddit風のForumアプリを開始した。そしてHuaweiはHarmonyOS 7で中国市場におけるAppleのAI空白地帯への参入を宣言した。

---

## Anthropic輸出規制事件：Fable・Mythosモデルが世界に停止

**米国政府は6月13日（現地時間）、AnthropicのFableおよびMythosモデルの輸出を規制する命令を発令した。** 国家安全保障上の懸念を理由として挙げつつも、具体的な根拠は明示されていない。Anthropicはこれを受け全世界のユーザーに対して両モデルへのアクセスを一時停止した。

 cybersecurityの第一人者76名が連名で公開状を発表し、政府に対して規制の解除を求めている。署名者にはAlex Stamos（元Facebook最高セキュリティ責任者）、Casey Ellis（Bugcrowd創業者）、Jon Callas（Appleセキュリティ設計，元 архитектор）、Paul Vixie（ISC創業者）、Katie Moussouris（Luta Security創業者）、Rachel Tobac（SocialProof Security CEO）といった顔触れが並ぶ。

### 問題の核心：Amazon研究者によるジェイルブレイク論文

規制の背景には、Amazonの研究者らが公開したFableの「ジェイルブレイク手法」を示した論文があるとされる。Katie Moussouris氏によると、この論文ではFableに「オープンソースの脆弱なコードを修正させる」という操作DEMOが行われた。Moussouris氏は「これはガードレールのバイパスではなくなっている。防守側が毎日実行しているfind（発見）・fix（修正）・test（テスト）のループをAIに実行させることだ。それが最も価値のある用途だ」と指摘する。

公開状では「Mythosの能力はOpenAIのGPT-5.5、Claude Opus 4.8およびSonnet、中国のKimi 2.7でも再現可能だ」と主張しており、規制の論理的根拠が薄弱であることが示唆されている。

### 開発者への影響

Mythosは当初、約50社仅有に提供され、その後15カ国150社程度に拡大されていた。Fableは「生物・化学・サイバーセキュリティ分野での利用を制限する厳格なガードレール」を搭載した公開版として先週提供開始されたばかりだった。サイバーセキュリティ研究者からは「ガードレールが厳しすぎて、サイバーセキュリティに関連するほぼすべてのプロンプトを拒否する」という報告が上がっていた。

**この事件は、輸出規制がAIの防守側と攻撃側のバランスにどのような影響を与えるかを示す重要なケーススタディとなる。**

---

## Salesforce、Fin（旧Intercom）を36億ドルで買収——Agentforce戦略の加速

**Salesforceは6月15日、AI客服プラットフォームのFin（舊Intercom）を約36億ドルで買収すると発表した。** 取引完了はSalesforceの2027会計年度第4四半期（2027年年初頭予定）。

FinはかつてIntercomとして知られ、AIエージェントを通じてライブチャット、WhatsApp、SMS、電話、Slackなどのマルチチャネルで顧客問い合わせを解決するプラットフォームを提供していた。SalesforceはAgentforce（企業向けAIエージェント構築プラットフォーム）の強化の一環としてFinの技術とチームを取得する。

SalesforceのMarc Benioff CEOは「Finは実証済みのエージェント技術を持ち、Agentforceに強力なサービスエージェント機能を補完する」と声明で述べた。FinのEoghan McCabe CEOは「最近、ブレークスルーモデルApexと社内エージェントOperatorをShippingしたばかり。Salesforceのリソースがあればこれは加速する。しかし практическиには何も変わらない。私は引き続きCEO職に留まる」とXに投稿した。

**この買収は、客服領域におけるAIエージェントの競争がEnterprise市場て本格化したことを示すものだ。** Microsoft（Copilot Studio）、SAP（Joule）、ServiceNowなどのEnterpriseプレイヤーが続々とAIエージェント基盤を発表する中、SalesforceはFinの取得によって「окупаемостьの証明された」客服AIエージェントのユーザーベースと技術を獲得した。

---

## Meta、Facebookに「AI Mode」を導入——パブリックポストから情報を синтезируя

**Metaは6月15日、Facebookに新しい「AI Mode」を導入した。** これはMeta AIを使用してFacebook上のパブリックポスト、Groups、Reelsから情報を検索し、自然言語の質問に対して синтезируя した回答を返す機能。従来のスクロール式の検索結果ではなく、会话的なainterfaceで情報に到達できる。

これは先月MetaがローンチしたReddit風のForumアプリ（Facebook Groupsの Discussionsを活用する「Ask」タブ 포함）と連動している。どちらも「日常ユーザーの投稿を信息来源とするAI回答」という同じ構造的新闻分析 потребуюч 防げない問題を抱えている。

### FacebookのAI機能一覧（2026年加速）

- **AI Mode**（新規）：自然言語検索・回答
- **Forum/Ask Tab**（新規、5月ローンチ）：Reddit風Q&A
- **AI編集機能**（追加）：コラージュカットアウト、ビデオトランジション効果
- **AIフォトプリセット**（新規）：服装・髪型・アクセサリーをAIで変更、「Wear It」でスポーツチームのジャージを試着可能
- **マーケットプレイスAI自動返信**（3月追加）：出品者代わりにAIが購入者メッセージに自動応答
- **クリエイター向けAIアシスタント**（6月追加）：最適な投稿時間の提案、コメント解析

Metaは月額3.99ドルのグローバルサブスクリプション（Facebook、Instagram、WhatsApp）を最近開始しており、更なるAI特化サブスクリプション层的引入が噂されている。

**課題として、「一般ユーザーの投稿を信息来源とするAI回答の信頼性」が挙げられる。** GoogleがReddit上でAI Modeを展開している同样の問題があり、誤情報・古い情報の风险が拭えない。

---

## HarmonyOS 7：中国市場でAppleのAI空白地帯に参入——HarmonyOSがiOSを、初めて中国市场で上回る

**Huaweiは6月11日、HDC 2026にてHarmonyOS 7を正式に発表し、「エージェント時代」の開始を宣言した。** 、Appleが中国市場でのSiri AI提供を見送ることを明かした仅仅4日後の発表だった。

### HarmonyOS 7の技術的詳細

- **HarmonyOS Intelligent Agent Framework 2.0**：「intent-as-service」モデルを採用し、複数のアプリ操作を単一の自然言語コマンドで压缩
- **Xiaoyi（声優）**：従来の音声ツールからシステムレベルのインテリジェンスエージェントに再構築。2,100以上のシステムレベル能力と、2,000社以上のサードパーティAIエージェントを統合
- **openPangu 2.0**（ foundation model）：
  - Pro版：5050億パラメータ、512Kコンテキストウィンドウ
  - Flash版：920億パラメータ、512Kコンテキストウィンドウ
  - デバイス上モデル（30B）：Kirisチップ向けに2026年秋頃提供予定
- **性能向上**：HarmonyOS 6.1比で15％以上の改善（Huawei自社ベンチマーク）

### 市場的位置

Huaweiのリチャード・ユー会長は「2019年にHarmonyOSが誕生。2023年にネイティブHarmonyOSアプリが開始。2026年、HarmonyOSはエージェント時代に入る」と陈述した。

市場シェアの数字が物語るのは、HDC 2026の発表を超えて進行中の構造変化だ。Counterpoint Researchによると、2026年第1四半期にHarmonyOS是中国のスマートフォンOS市場で19％を取得し、iOSの16％を初めて上回った。Androidは65％を維持。HarmonyOSがiOSを中国市场で抜いたのは2025年第2四半期が初めてだった。

Xiaoyiが調整するエージェントネットワークには、Ctrip（旅行計画）やAnt Medical（健康データ分析）とのパートナーシップが含まれ、中国消費者向けサービスに深く根付いている。これはAppleの現在のアーキテクチャが到達できない領域だ。

### 現段階の制約

-  現在デベロッパーベータ段階で、稳定版の消費者向け提供は2026年秋予定
-  400,000以上のアプリケーション和服务に対応するのは、中国のapp ecosystemにおいては重要意义だが、AppleのApp Store相比すればまだ一部
-  HuaweiのHarmonyOS国際展開の野心は「향후の目标」として位置づけられている

**Appleにとって、中国はAI機能を提供できない主要市場であり続ける。HarmonyOS 7は、その空白地帯を埋める专门に設計されたOSとして、中国市場の今後を占う存在となる。**

---

## 参考リンク

- [Cybersecurity vets protest US government ban on Anthropic's most powerful models - TechCrunch](https://techcrunch.com/2026/06/15/cybersecurity-vets-protest-dangerous-us-government-ban-on-anthropics-most-powerful-models/)
- [Salesforce acquires AI customer service platform Fin for $3.6 billion - TechCrunch](https://techcrunch.com/2026/06/15/salesforce-acquires-ai-customer-service-platform-fin-for-3-6b/)
- [Meta's new 'AI Mode' on Facebook pulls from public info across its platforms - TechCrunch](https://techcrunch.com/2026/06/15/metas-new-ai-mode-on-facebook-pulls-from-public-info-across-its-platforms/)
- [HarmonyOS 7 steps into the AI gap Apple left open in China - AI News](https://www.artificialintelligence-news.com/news/harmonyos-7-china-ai-apple-gap/)

---

*（本文の情報は2026年6月15日時点のものです）*
