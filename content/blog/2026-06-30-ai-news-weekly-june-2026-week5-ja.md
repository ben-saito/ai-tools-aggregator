# AI開発ニュース 週間まとめ — 2026年6月第5週

2026年6月も残すところあとわずか。今週は、中国AIの台頭によるオープンソースモデル競争、米国のAI雇用への影響をめぐるデータ対論、そしてAIエージェントのセキュリティ問題が一気に表面化した一週間だった。

---

## 1. Meituan、LongCat-2.0 をオープンソース化 — 1.6Tパラメータで OpenRouter を席巻

中国：北京市に本店を置く之外売プラットフォーム **Meituan** が、推定 **1.6兆パラメータ**のエージェント向けコード生成モデル **LongCat-2.0** を GitHub・Hugging Face・自有プラットフォームで正式公開した。LongCat-2.0 は匿名操縦モデル「Owl Alpha」の計算エンジンとして、過去2ヶ月間グローバル開発者の OpenRouter チャートで首位を維持していたことが判明。学習は中国のAIチップ（Ascend NPUなど）のみで行われており、米国規制下のH100/H200を一切使用していない。

**注目ポイント:**
- **1.6T パラメータ** — 現行のオープンソースコードモデルの中で最大級
- **中国チップのみで学習** — 輸出規制下のGPU消費なく構築されたケースとして史上最大規模
- **エージェンティックコーディング特化** — エージェントが自律的にコードを書くフローに最適化
- **MIT ライセンス** — 商用利用可，社区が迅速にフォーク多数

「Owl Alpha」は DeepSeek Coder や Qwen2.5-Coder を超えるベンチマークスコアで議論を呼んでおり，米国のAI規制が中国人民族企業への効果を疑わせる事例となっている。

---

## 2. DeepSeek が DSpark をオープンソース化 — LLM 推論を最大 85% 高速化

米国政府和が Anthropic・OpenAI の新モデルを輸出規制対象に追加する中，中国のオープンソースAI企業 **DeepSeek** が新リリース **DSpark** を公開した。MITライセンスのDSparkは，大規模LLM推論を最大 **85% 高速化**するフレームワーク。キーテクノロジーは以下:

- **分散推論最適化** — 複数GPU間でのKVキャッシュ分割
- **動的プロンプト圧縮** — 反復的な生成ステップでのトークン消費削減
- **Continuous Batching拡張** — 推論吞吐量を大幅拡大

DeepSeek はH800を用いており，NVIDIAのデータセンター向け輸出規制対象ではないGPUで学習された。DSparkは既存の下流フレームワーク（vLLM、TensorRT-LLMなど）との統合も発表されており，オープンソースコミュニティからの注目が急速に集中している。

---

## 3. Claude Code Agentjacking 攻撃が暴露される — Sentry の認証不備が主因

セキュリティ企業 **Tenet Security** は，AIエージェントを乗っ取る **Agentjacking** 攻撃の手口を詳細に公表した。攻撃は **Sentry**（アプリケーション監視ツール）の公開認証情報を通じて実行された。

**攻撃の流れ:**
1. 攻撃者がSentryのプロジェクト用認証情報を入手（踏み台割れなし，公開情報のみ）
2. 開発者のClaude Code環境に「偽装エラーイベント」を送信
3. Claude Codeがエラー解決として攻撃者のコードを実行 — 開発者の全権限で動作
4. EDR，WAF，IAM，ファイアウォールすべてが感知せず

Tenet Securityの調査により，**Datadog，PagerDuty，Jira** も同じ種的な認証情報公開問題を抱えており，SIEMやAPMツールの認証情報がAIエージェントへの攻撃経路となる可能性が示された。AnthropicはClaude Codeの安全ガイドライン更新を推奨しているが，`ANTHROPIC_API_KEY` 形式のサーバーキーは本質的にはネットワーク越しにコード実行を委託する設計であり，根本的な解決には至っていない。

---

## 4. AI 雇用統計の対論 — 高密度導入企業で従業員数 10.2% 増

AIが職を奪うという言説に対し，新しいデータが反論を寄せている。**調査レポート**によると，**「高密度AI導入企業」** では従業員数が前年比 **+10.2%** 増加していた。特に注目すべきは，**初心bled 従業員の従業員数も+12%** 増加している点。AIによりタスク自動化が進むことで，逆に出荷する製品・サービスの需要が増え，销售・企画职能の採用も増えた结果だと分析家は見ている。

一方，同レポートでは「AI集約企業」と「低AI企業」の格差は拡大しており，自動化の影響は産業・職種間で大きく偏在することが示唆されている。TechCrunchの報道では，Anthropic自身がgrowthチームにプロダクトマネージャーを大增员するように指示した事実も紹介されており，**Claude Codeによりエンジニアリング生産性が3倍化する一方，意思決定層の不足が新たなボトルネック** になっている。

---

## 5. OKX，AIエージェント間の決済・採用プラットフォームを発表

暗号通貨取引所 **OKX** は，AIエージェントが互いに採用・決済できる **エージェントマーケットプレイス** の計画を明らかにした。以下の3要素を統合:
- **決済** — エージェント間のマイクロトランザクション
- **アイデンティティ** — エージェントの認証と役割管理
- **評判** — 過去の取引履歴にもとづく信用スコア

OKXはこの取り組みを「AI-first な economic infrastructure」と位置付けており，エージェント同士がAPI鍵を介して自律的に契約を結び，支払いを行う世界を構想している。VisaやMastercardが伝統的なP2P決済を構築した歴史との類比が论坛上でも上がっている。

---

## 6. Google Gemini，パーソナライズド画像生成を米国無料ユーザーに開放

Googleは **Gemini** のパーソナライズド画像生成機能を，米国のeligibleな無料ユーザーに拡大提供を開始した。connected Google Apps（Maps，Photos，Gmailなど）のデータにもアクセスし，ユーザーの趣向や履歴に基づいた画像を生成できる。

従来はGemini Advanced（有料）ユーザーのみが利用できた機能だが，Gemini 2.0 Flashモデルのコスト構造改善により無料层次への開放が可能になった。画像生成ではAdobe Firefly，Midjourney，DALL-Eと競合する態勢であり，Googleは特に **Google Maps・Shopping・YouTube** とのネイティブ統合で差別化する。

---

## 7. Anthropic，カリフォルニア州政府と半額Claude利用契約を締結

Anthropicはカリフォルニア州の **Gavin Newsom** 知事と合意し，同州政府機関が **Claude** を市価の半額程度で利用できるようにする契約を結んだ。これは联邦政府のAI安全規制しようとする立場との差異が表面化することになった。連邦政府筋ではAnthropic・OpenAIの新モデルに対する輸出・使用規制が検討される中，カリフォルニア州はむしろCivilian AI開発を進める姿勢を示している。

Anthropicは州政府向けコンプライアンス対応として，**Claude for Government** バンドルを提供。データ主権要件と監査ログ機能を実装しており，他の州への横展開も視野に入れている。

---

## 8. Notion，AIエージェント主流に伴いメールアプリを終了

Notionは，同社のSkiff影響を受けたメールアプリケーションを終了し，代わりに **AIエージェントによる受信箱自動化**に完全に移行すると発表した。「ユーザーの大多数はもうAIエージェントを使って受信箱を管理している」というデータが意思決定の背景にある。

Notionのメールクライアントは2024年に買収したSkiffの技術基盤を用いて構築されていたが，AI-firstな製品潮流の中で既存邮件クライアントの維持 비용が製品アウトプットに匹配しなくなった。これはNotionがAIエージェントへの集中投資の最新例であり，他のSaaS企業にも同じ转移が促されることになる.

---

## 参考リンク

- [Meituan LongCat-2.0 — VentureBeat](https://venturebeat.com/category/ai/)
- [DeepSeek DSpark — VentureBeat](https://venturebeat.com/category/ai/)
- [Claude Code Agentjacking (Tenet Security) — VentureBeat](https://venturebeat.com/category/ai/)
- [AI Jobs debate — TechCrunch](https://techcrunch.com/category/artificial-intelligence/)
- [OKX AI Agent Marketplace — TechCrunch](https://techcrunch.com/2026/06/30/crypto-exchange-okx-wants-ai-agents-to-hire-and-pay-each-other/)
- [Gemini free image gen — TechCrunch](https://techcrunch.com/2026/06/29/geminis-personalized-ai-image-generation-is-now-free-for-us-users/)
- [Import AI 463 — Jack Clark](https://importai.substack.com)
- [Anthropic California deal — TechCrunch](https://techcrunch.com/2026/06/29/anthropic-and-gov-newsom-forge-deal-allowing-california-government-to-use-claude-at-half-price/)

---

*（本文の情報は2026-06-30日時点のものです）*
