# AI開発ニュースまとめ（2026年5月7日）

AI開発の世界では、Enterprise AIエージェントの治理強化から、国家間のAI安全保障対話まで、多層的な進化が止まらない。今週は企業間の協業深化、新しいモデルの登場、そしてAIをめぐる地政学的動きが目立った。

---

## NVIDIA × ServiceNow：エンタープライズAIエージェントの「実行統制」を目的に協業強化

NVIDIAとServiceNowは5月5日（米国時間）、ServiceNowの年次イベント「Knowledge 2026」において、**エンタープライズ向け自律型AIエージェント**の実現に向けた全面的協業を発表した。

今回の発表の核となるのは、ServiceNowが展開する新製品 **「Project Arc」** だ。Knowledge Worker（開発者、ITチーム、管理者）向けの長時間にわたる自律型デスクトップエージェントであり、ローカルファイルシステムやターミナル、业务アプリケーションに直接アクセスして、従来のRPAでは困難だった**複雑なマルチステップタスク**を実行できる。

### OpenShellがもたらす「隔離された実行環境」

Enterprise AIエージェントがの本格導入には、セキュリティとガバナンスが不可欠だ。Project Arcは、NVIDIAのオープンソースセキュアランタイム **OpenShell** を基盤に採用した。OpenShellは、沙箱化（sandboxed）かつポリシー統治された環境において、自律型エージェントの開発・実行を可能にする。

ServiceNowはOpenShellへの貢献も続けており、「OpenShellランタイムレイヤー + ServiceNow AI Control Tower + Action Fabric」という構成で、**ガバナンス・監査可能性・ワークフロー統合**の三要素を一体化する。

### Nemotron 3 SuperがEnterpriseOps-GymでNo.1

もう一つ注目すべきはベンチマークの話題だ。NVIDIAはNOWAI-Benchと呼ばれるエンタープライズAIエージェント向けオープンベンチマーク套数を推進しており、その中核である **EnterpriseOps-Gym** において、**Nemotron 3 Super** がオープンソースモデルの中で現在No.1の座についている。エンタープライズワークフローのマルチステップ実行を評価するこのベンチマークは、泛用ベンチマークでは捉えにくい「本番環境での信頼性」を測定する点で意義が大きい。

エンタープライズAIの次の課題は「生成」から「実行」への移行であり、その際に求められるのが今回のような**統制された自律性**である点は、開発者としても注目すべきトレンドだ。

---

## GPT-5.5 Instant：メモリの「視界」は広がったが、「監査可能性」はまだ

OpenAIはChatGPTのデフォルトレベルを **GPT-5.5 Instant**（GPT-5.3 Instantから升级）に切换し、同時に**Memory Sources（メモリソース）**機能を全モデルに導入した。Response下部の「Sources」ボタンをタップすると、どの保存されたメモリや過去のチャットを参照したかが表示されるようになった。

### メモリソースの意義と限界

この機能は企業にとって的方向性として有望だが、**現時点では不完全**である。OpenAI自身が「モデルは回答を形作ったすべての要素を表示するわけではない」と認めており、この「部分的な可視性」が新たな問題を生む。

企業環境では通常、RAG（Retrieval-Augmented Generation）パイプラインを通じて哪nal memoryが参照されたかがログに記録され、エージェントの状態はメモリレイヤーに保存される。しかしGPT-5.5 InstantのMemory Sourcesは、**モデルが自己報告するコンテキスト**であり、既存のエンタープライズログとは 별体系として動作する。

 HiddenLayerのChief Trust & Security OfficerであるMalcolm Harkins氏の見解はこうだ：「企業にとって方向的には有用だが、それだけでは不十分。セキュリティ、ガバナンス、アクセス制御、監査システムとの統合が реальность を左右する」

### 企業は何をすべきか

企業がChatGPTを業務に使用している場合、①エンタープライズメモリ管理の明確な「情報源の单一窓口（Source of Truth）」を定義すること、②Memory Sourcesをエンドユーザーに見せるかどうかのポリシーを決定すること、の2点が当面の対応となる。競合する2つのコンテキストログが存在する狀態は、障害時の原因的追跡を著しく困難にする恐れがある。

---

## Gemma 4：Google、最強のオープンモデルファミリーを刷新

Google DeepMindは、Gemmaシリーズ待望のメジャーバージョンアップとなる **Gemma 4** を公開した。DeepMindブログによれば「Byte for byte, the most capable open models」（バイト単位で史上最速の能力を持つオープンモデル）という位置づけだ。

### 主要な仕様（確認されている範囲）

- **2Bパラメータモデル**を笔頭に複数のサイズを展開
- **コンテキストウィンドウ: 128K**
- **FP8重み**の提供により、-consumer GPUでも高效な推論が可能

Gemmaシリーズは今や、Hugging Face上のコミュニティモデルDownloadsにおいて常に上位に君臨する。Gemma 4では、128Kという|long context windowとFP8重み対応により、**ローカル環境での长文処理**と**メモリ制約の緩和**が同時に実現されたことで、オープンソースLLMの活用シーンがさらに拡大する見込みだ。

---

## NVIDIA × Corning：AIインフラ向け光接続の国内製造を10倍に

NVIDIAは5月6日、Corning Incorporatedとの間で**多年期商業・技術パートナーシップ**を発表し、AIファクトリー向け光接続ソリューションの米国国内製造能力を**10倍**に拡大すると表明した。

### 概要

- Corningは米国における光接続製造能力を10倍に增强
- 米国光ファイバー生産能力を50%以上拡大
- **ノースカロライナ州とテキサス州**に3つの新しい先进製造工場を建設
- **3,000人以上の高薪職種**を創出
- NVIDIA側からは最大**32億ドル**的投资

AIファクトリースケールの拡張において、GPU.Computeだけでなく**光接続（光纤）インフラ**がボトルネックの一つであることが改めて示された。NVIDIAがCorningとの垂直統合を深化させる背景には、Blackwell世代のAIファクトリー建設に向けたサプライチェーンの确保がある。

---

## 米国 × 中国：AI規制めぐる公式対話の開始を検討

Wall Street Journalが5月7日に伝えたところによれば、米中両国は**AI競争の危機的昇華を防ぐため公式協議の開始**を検討している。

米国側は国家安保会議（NSC）が、中国側は外交部・科学技術部がrespectiveに窓口となり、モデル輸出規制やAI軍拡競争への歯止めについて話し合うと見られる。生成AIの軍事応用が加速する中、両大国が「AIの規制グリッド락」を回避するための対話框架を探る動きは、开发者角度からも無関係ではない——モデルの輸出管理や国際API利用規約の变动は、グローバルにサービスを展開する上で直接的な影響を持つからだ。

---

## Anthropic × SpaceX：データセンター契約でClaudeのCompute基盤を拡大

Reuters 등의報道によれば、AnthropicはSpaceXとの間で**データセンターパートナーシップ**を締結した。SpaceXの 대규모データセンターインフラを活用することで、Claudeの利用制限の拡大を目指すとともに、AIコーディング機能（**Claude Code**）の本格展開に向けた基盤强化が려는戦略と見られる。

AnthropicはCompute계약の详细内容については明かしていないが、xAIがTesla/SpaceXのインフラを活用しているのと同様の構図として、AIスタートアップと宇宙産業の infrastructure の交融が進一步に進んでいる。

---

## Scale AI：米国防総省から5億ドルの契約

BloombergとForbesの報道によると、Meta等が出資するAIベンチマーク企業 **Scale AI** が、米国防総省から**5億ドル 규모의契約**を獲得した。前年度の契約規模の約5倍に相当し、防衛分野でのAI導入が加速していることを示す指標となる。

Scale AIはRafaelやSparkCognitionなどと共に、防衛省向けAI評価套数「**JAIC**」のサポート企業で知られており、同社のDefense Prime契約光が увеличился ことで、防衛AI市場における民間企業の役割が拡大している。

---

## 参考リンク

- [NVIDIA and ServiceNow Partner on New Autonomous AI Agents for Enterprises | NVIDIA Blog](https://blogs.nvidia.com/blog/servicenow-autonomous-ai-agents-enterprises/)
- [GPT-5.5 Instant shows you what it remembered — just not all of it | VentureBeat](https://venturebeat.com/ai/gpt-5-5-instant-shows-you-what-it-remembered-just-not-all-of-it/)
- [Gemma 4: Byte for byte, the most capable open models | Google DeepMind](https://deepmind.google/blog/)
- [The Download: seafloor science and military chatbots | MIT Tech Review](https://www.technologyreview.com/2026/05-06/1137861/the-download-seafloor-science-and-military-chatbots/)
- [NVIDIA and Corning Announce Long-Term Partnership to Strengthen US Manufacturing for AI Infrastructure | NVIDIA Newsroom](https://www.nvidia.com/en-us/about-nvidia/corporate-timeline/)
- [U.S. and China Pursue Guardrails to Stop AI Rivalry From Spiraling Into Crisis - WSJ](https://www.wsj.com)
- [Anthropic strikes SpaceX data center deal as it plows ahead on AI coding - Reuters](https://www.reuters.com)
- [Meta-Backed Scale AI Wins $500 Million Defense Department Deal - Bloomberg](https://www.bloomberg.com)
- [Google Chrome Might Have Installed an AI Model Onto Your Device Without You Knowing - CNET](https://www.cnet.com)
- [Hugging Face launches open-source Reachy Mini App Store with 200+ apps | VentureBeat](https://venturebeat.com/ai/the-app-store-for-robots-has-arrived-hugging-face-launches-open-source-reachy-mini-app-store-with-200-apps/)

---

*本文の情報は2026年5月7日時点のものです。*