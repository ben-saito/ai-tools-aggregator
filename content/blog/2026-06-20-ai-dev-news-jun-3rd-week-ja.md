---
title: "AI開発ニュース振り返り（2026年6月第3週）：Baseten $1.5B調達、Claude Code統合強化、米政府によるAnthropic規制の余波"
description: "2026年6月第3週のAI開発関連ニュースを振り返る。Basetenの$1.5B調達（評価額$13B）、新AI最適化フレームワークのClaude Code/Codex 2.5倍性能更新、Adobeのagentic AIワークフロー、Langflow脆弱性、Claude Code Artifacts企業向け拡張など。"
publishedAt: "2026-06-20T00:00:00+09:00"
author: "AI Tools Hub 編集部"
category: "ニュース"
tags: ["Anthropic", "Baseten", "Microsoft", "Adobe", "Langflow", "VentureBeat", "TechCrunch", "AI最適化", "agentic AI", "セキュリティ"]
featured: false
lang: "ja"
---

# AI開発ニュース振り返り（2026年6月第3週）：Baseten $1.5B調達、Claude Code統合強化、米政府によるAnthropic規制の余波

2026年6月第3週、インフラ層での大型資金調達と、エージェント продукн workflowの主流化が同時に進行した。AI推論スタートアップのBasetenが僅か5ヶ月で評価額を2.6倍に伸ばす$1.5B調達を協議utralれば、AdobeはCreative Cloud全体にagentic AIワークフローを組み込み、VentureBeatは新AI最適化フレームワークがClaude Code/Codexを同一計算量で2.5倍性能で塗り替える研究成果を報道した。本周主要なニュースを振り返る。

---

## AI推論スタートアップBaseten、$1.5B調達で評価額$13Bへ

2026年6月18日（米国時間）、AI推論プラットフォームのBasetenが、米Wall Street Journal紙限定で$1.5B（約2400億円）の資金調達を最終調整していることが明らかになった。評価額は$13B（約2.1兆円）に達する。

僅か5ヶ月前の2026年1月、BasetenはSeries Eとして$300Mを調達した際の評価額が$5Bだった。そしてその前回調達から9ヶ月前には$150MのSeries Dをを発表しており、わずか1年半で評価額が約86倍に膨張した計算になる。

**推論コンピューティングの「ゴールドラッシュ」は加速の一途**

BasetenはGPUクラスタベースのLLM推論特化プラットフォームであり、OpenAI、Google、AnthropicなどのAPI経由でモデルを提供するのではなく、ユーザーが持ち込んだモデルの推論を高速化・低コスト化するインフラを提供する。料金体系は秒間トークン数ベースの従量制で、昨年のChatGPT o1-preview推出以降、需要が爆発的に拡大している。

TechCrunchの報道によれば、Basetenの顧客には複数のフォーチュン500企業が含まれており、特に音声認識・画像生成・長文読解タスクでの需要が急増中という。推論に特化したサーバールーム需要有は、GPU価格高騰の受け皿として機能している。

---

## 新AI最適化フレームワーク、Claude CodeおよびCodexを同一計算量で2.5倍性能で塗り替え

2026年6月第3週、VentureBeatは新しいAI最適化フレームワーク研究成果を報道した。このフレームワークは、Claude CodeおよびOpenAI Codexと同一の計算量（compute budget）で、**2.5倍高い性能**を達成すると主張している。

### 「推論スケーリング則」の新しい局面

この成果は、2025年に提唱された「推論時計算量（test-time compute）」の拡張に位置づけられる。従来のスケーリング則が訓練時の計算量（pre-training compute）の増加に頼っていたのに対し、このフレームワークは推論時のトークン生成過程における「探索の効率性」に焦点を当てている。

要点は3つ：

- **戦略的バックトラッキング**：モデルが早期に誤った推論経路を特定し、計算量を再配分するメカニズム
- **暗黙的な思考の枝刈り**：冗長な推論チェーンを生成途中で打ち切り、計算資源を問題解決に直接投入
- **メタ認知による自己評価**：モデル自身に出力品質を評価させ、その結果を基に次のトークン生成に 반영

### 開発者への影響

この研究成果が実用化されれば、既存のClaude CodeやCodexユーザーが、明示的にモデルを変更することなく、**.25倍のコストで同等の出力品質**を得られる可能性がある。ただし、現時点では研究論文（peer-reviewed）が未公開であり、再現性の確認には時間を要する。

---

## Adobe、Creative Cloud全体にagentic AIワークフローを組み込み

2026年6月第3週、AdobeはCreative Cloud製品群に**agentic AIワークフロー**を本格導入すると発表した。単なる画像・動画生成から、制作業務全体のオーケストレーションへのパラダイムシフトとなる。

### 「Generative AI」から「Production Orchestration」への移行

Adobeの発表によれば、従来のFirefly APIによる「メディア生成」（1枚画の生成、テキストトゥイメージなど）から、「制作オーケストレーション」へと機能範囲を拡大する。具体的には：

- **Photoshop / Illustrator**：自然文による反復編集指示を解釈し、複数のレイヤー操作を自律的に実行
- **Premiere Pro**：映像スクリプトから 컷編集、BGM適用、字幕生成、エクスポート設定までを一気通貫で処理
- **After Effects**：敖形的な動画編集を自然文で指示し、キーフレーム設定を自動化

### 開発者視点での評価

Adobeのagentic AIは、**Adobe Sensei GenAI**という社内の推論基盤の上で動作し、各アプリケーションのDOM/オブジェクトモデルに対する自律的な操作能力を持つ。APIを通じて外部システム（PIL、ffmpegなど）との連携も可能で、プロダクションレートの自動化パイプラインを構築できるかが焦点となる。

---

## 7,000以上のLangflowサーバーが攻撃対象——LangGraph・LangChainにも同じ脆弱性

2026年6月第3週、VentureBeatセキュリティ欄は、**Langflow**のサーバールーム推定7,000台以上がサイバー攻撃のリスクに曝されていることを伝えた。攻撃の根本原因是、LangGraphおよびLangChainにも存在する同一の認証・セッション管理の不備に起因する。

### 脆弱性の概要

SecurityJoyと呼ばれるセキュリティ研究チームが特定したのは、**認証バイパスの脆弱性（CVE類似）**。Langflowのデフォルト設定では、GraphQLエンドポイントへの認証が適切に強制されておらず、第三者による任意のツールチェーン実行が可能だった。

VentureBeatの記事によれば、特に次の2点が危険視されている：

- **認証なしのツールチェーン実行**：外部からのAPI呼び出しで、機密情報の読み出しやモデルへの不正プロンプト注入が可能
- **セッション固定攻撃**：ユーザーセッションのトークンが適切にローテーションされず、第三者によるセッションハイジャックが可能

### 開発者への影響と対策

Langflowをプロダクション環境で利用している開発者は、即座に以下の対応を取る必要がある：

- **ネットワーク分離**：LangflowサーバーをDMZまたはVPC内に配置し、直接インターネット露出させない
- **認証の強化**：OAuth 2.0またはAPIキー認証を必须有に設定
- **アップデート適用**：Langflow v1.1.0以降へのアップデート（修正版本への移行）
- **ログ監視**：GraphQLエンドポイントへの不審なリクエストログを監視

LangGraph・LangChainユーザーは、それぞれのライブラリにおけるツール呼び出し時の入力検証を強化するパッチを適用することが推奨される。

---

## Anthropic、Claude Code Artifactsを企業向けに大幅拡張——ライブ共有ダッシュボードと対話型ワークスペース

2026年6月第3週、VentureBeatはAnthropicがClaude Code Artifactsの大型アップデートを发表했다고報道した。企業向け機能として、**ライブ共有ダッシュボード**と**対話型ワークスペース**が追加された。

### 企業向けの新機能

| 機能 | 説明 |
|------|------|
| **ライブ共有ダッシュボード** | コード生成・执行の過程をチーム間でリアルタイム共有。レビュー担当が生成途中に関与可能 |
| **対話型ワークスペース** | 生成された成果物をその場で反復編集でき、IDEとの来回 없이チーム협업が可能 |
| **監査ログ強化** | Compliance要件对应的完整的監査証跡（プロンプト、生成物、実行結果）を録画・エクスポート |
| **SSO / SCIM対応** | 企業ID管理（Okta、Azure ADなど）との統合 |

### 技術的詳細

Claude Code Artifactsは、Claude 3.7 Sonnetをバックエンドに使い、コード生成的中の内部推論過程を中间生成物（Artifacts）として逐次出力する仕組みを持つ。新しい企業向け拡張では、このArtifactsの生成・編集・実行全过程がHTTPSで暗号化されたWebSocket接続 통해リアルタイム同期される。

---

## Anthropic米政府規制の余波——「輸出管理は機能しない」30年の歴史が物語ること

2026年6月19日、TechCrunchはAnthropicのMythosモデルに対する輸出管理問題に関する解説記事を published した。「PGPからMythosへ：誰も止められなかった輸出管理の歴史」というタイトルで、過去30年間のサイバーセキュリティソフトウェアの輸出管理が機能しなかった歴史を梳理し、AnthropicのMythosに対する今の輸出管理が機能する理由がないとの見方を示した。

### 30年間の輸出管理失敗の教訓

| 年 | 対象技術 | 結果 |
|----|----------|------|
| 1990年代 | PGP（暗号化ソフトウェア） | 米国境外へのpreaders数が示す通り、実質的に無力化 |
| 2000年代 | スパイウェア輸出規制 | 民間監視產業のグローバル展開を阻止できず |
| 2010年代 | ゼロデイ exploit市場規制 | ダークウェブによる闇市場が形成される |
| 2026年 | Anthropic Mythos / Fable | 同様の運命辿りの可能性 |

### 開発者への影響

この規制の直接的影響は、**Anthropicのモデルへの米国外からのアクセス**が一時的に困難になっていること。しかし、TechCrunchの分析では、市場は「規制の回避」という形で反応しており、他のLLMプロバイダー（Google Gemini、OpenAI、Meta Llama）への需要が間接的に増加している。

---

## 参考リンク

- [Baseten $1.5B funding report (TechCrunch)](https://techcrunch.com/2026/06/18/ai-inference-startup-baseten-reportedly-raising-1-5b-months-after-its-last-mega-round/)
- [New AI optimization framework beats Claude Code/Codex 2.5x (VentureBeat)](https://venturebeat.com/orchestration/new-ai-optimization-framework-beats-claude-code-and-codex-by-2-5x-on-the-same-compute-budget)
- [Adobe agentic AI workflows across Creative Cloud (VentureBeat)](https://venturebeat.com/orchestration/adobe-embeds-agentic-ai-workflows-across-creative-cloud-shifting-from-media-generation-to-production-orchestration)
- [7,000 Langflow servers under attack, LangGraph/LangChain vulnerabilities (VentureBeat)](https://venturebeat.com/security/7000-langflow-servers-under-attack-langgraph-langchain-same-holes)
- [Anthropic Claude Code Artifacts enterprise update (VentureBeat)](https://venturebeat.com/data/anthropics-claude-code-artifacts-update-brings-live-shared-dashboards-and-interactive-workspaces-to-enterprises)
- [From PGP to Mythos: export controls history (TechCrunch)](https://techcrunch.com/2026/06/19/encryption-spyware-and-now-mythos-history-shows-why-cyber-export-control-doesnt-work/)
- [US government Anthropic ban analysis (TechCrunch)](https://techcrunch.com/podcast/the-us-banned-anthropics-fable-5-release-but-the-numbers-dont-seem-to-care/)

---

*（本文の情報は2026年6月20日時点のものです）*
