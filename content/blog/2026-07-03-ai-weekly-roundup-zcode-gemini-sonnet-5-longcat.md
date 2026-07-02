# AI開発週次まとめ：ZCode登場、Gemini Omni Flash API公開、AnthropicがClaude Sonnet 5を投入

2026年7月第1週は、AI業界にとって動きが多い週だった。AIコーディングアシスタントの新規参入、中国産オープンソースモデルの躍進、そしてAIファーストのビジネス統合が本格化するなど、生成AIの活用領域が着実に拡張している。本稿では、特筆すべきニュースを技術的な視点からまとめる。

---

## Z.aiが「ZCode」を正式ローンチ —— AIコーディングツール市場に真っ向勝負

中国発のZ.aiが当地时间7月2日、AI駆動型統合開発環境（IDE）「ZCode」の正式版をmacOS / Windows / Linux向けに公開した。最大の特徴は、**GLM-5.2を公式開発環境としてバンドル**している点だ。

- **主要機能**: コード補完、リファクタリング、自动テスト生成、プロジェクト全体の文脈理解
- **BYOK（Bring Your Own Key）対応**: OpenAI、Anthropic、AWS Bedrockなど、外部モデルキーを持ち込める
- **GLM Coding Plan加入者向け1.5倍の利用枠ボーナス**付き
- **対応OS**: macOS、Windows、Linux

競合となるCursor、Claude Code（Anthropic）、GitHub Copilotとの差別化ポイントとしては、**GLMファミリーとの深い統合**と、BYOKによる柔軟なモデル選択が挙げられる。

---

## Anthropic、Claude Sonnet 5を“大規模値下げ”后に投入

Anthropicは6月30日、新しいベースモデル「Claude Sonnet 5」を公开した。「迄今为止最具代理性的Sonnetモデル」と描述されている。

### 主な特徴

- **デフォルトプラン化**: Free / Pro / Max / Team / Enterpriseの全プランでSonnet 5が默认模型に
- **先行者数**:

| 期間 | 入力（$/M tokens） | 出力（$/M tokens） |
|------|-------------------|-------------------|
| 8月31日まで（キャンペーン） | $2 | $10 |
| 9月以降（通常） | $3 | $15 |
| 上位Opus 4.8（参考） | $5 | $25 |

- **最大コンテキストウィンドウ**: 200Kトークン
- **マルチモーダル対応**: 画像入力、表の理解、文档解析

### なぜ重要か

Opus系列との価格差が拡大する一方で、Sonnet 5は「最も代理的なモデル」という位置づけだ。これは**Agentic AI（自律型AIエージェント）**用途に向けた改良が施されていることを示唆する。

---

## Claude Fable 5が海外にも復活 —— 輸出管理解除後のAnthropic

米国が輸出管理秩序を解除したを受け、**Claude Fable 5がグローバル企業に向け再導入**された。

Fable 5はAnthropicの長編小説・コンテンツ生成特化モデルとして知られ、当初は地政学的な理由から特定地域でのみ提供されていた。这次是美国側の輸出規制緩和再加上Anthropicがエンタープライズグレードの導入套件を提供開始した形で、**欧州やアジア太平洋の企業でも利用可能**になった。

---

## Google、Gemini Omni FlashをAPI公開 —— テキストだけでビデオ制作がここまで簡単に

Googleは6月30日、**Gemini Omni Flash**のAPI提供を開始した。Omniファミリー的第一弾となるこのモデルは、テキスト指示だけでビデオの生成・編集を行うものだ。

### 技術的なポイント

- **Multimodal生成**: テキストプロンプトからビデオを直接生成
- **反復編集**: 自然言語指示でビデオをrevision可能
- **企業ユースケース**: 広告制作、ソーシャルメディアコンテンツ、研修ビデオの内製化
- **API形態**: RESTful API + Python SDKでパイプライン構築に対応

---

## Meituanが「LongCat-2.0」をオープンソース化 —— 1.6Tパラメータ、中国産チップで訓練

中国テックジャイアントのMeituanは6月末、**LongCat-2.0**をオープンソースとして公開した。

### 主要仕様

- **パラメータ数**: 1.6兆（1.6T）トークン
- **性能**: OpenRouter上でトップクラスのスコアを継続的に記録
- **訓練基盤**: **中国産チップ（Huawei Ascend / カスタムASIC）で完全に訓練**
- **ライセンス**: 研究用途免费、商用には要相談

### なぜ重要か

**1.6Tという規模**は、GPT-4（約1.8T）と肩を並べる水准で、中国産では作れないという従来の発想を覆しつつある。

次に、**中国産チップでの完全訓練**が意味するものは、H100などのNVIDIA製GPU依存からの脱却が技术上可行であることを示すものだ。米国制裁下でも中国企業がAIモデル開発を継続できることが实证された格好だ。

---

## Morgan StanleyがAIエージェントでReconciliation業務を半分に

Morgan Stanleyは**金融商品の照合（reconciliation）業務をAIエージェントで半減**させた。しかしその秘诀は、エージェントの自律性を高めたのではなく、**敢えて自律性を抑制した**点にある。

- **probabilistic decisionを減らし、ルールベース処理を拡大**
- **全取引に人間の承認（human-in-the-loop）を必須化**
- **錯誤時のロールバック機能を強化**

Morgan Stanleyのアプローチは、**「AIにすべてを任せる」ではなく「人間の判断を埋め込む」**設計思想の成功例として、他のhigh-risk業界にも参考になろう。

---

## 総括

本周のトレンドをまとめると、以下の3点が浮かび上がる。

1. **AIコーディング戦争の激化**: ZCodeの登場でCursor / Claude Code / Copilotの三者時代に突入
2. **生成AIのビジネス統合が本格化**: SquareによるChatGPT/Claude注文統合、Gemini Omni FlashのAPI公開など
3. **地政学的与技术的分断**: LongCat-2.0の中国産チップ訓練成功、輸出規制解除後のClaude Fable 5グローバル展開

---

## 参考リンク

- [Z.ai launches ZCode - VentureBeat](https://venturebeat.com/category/ai)
- [Anthropic launches Claude Sonnet 5 - VentureBeat](https://venturebeat.com/category/ai)
- [Claude Fable 5 returns globally - VentureBeat](https://venturebeat.com/category/ai)
- [Google Gemini Omni Flash API - VentureBeat](https://venturebeat.com/category/ai)
- [Meituan open sources LongCat-2.0 - VentureBeat](https://venturebeat.com/category/ai)
- [Morgan Stanley AI case study - VentureBeat](https://venturebeat.com/category/ai)

---

*（本文の情報は2026年7月3日時点のものです）*
