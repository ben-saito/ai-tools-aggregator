# AI開発ニュース（2026年6月14日）— Anthropicモデル停止、VisaとCoinbaseがAIエージェント対応

2026年6月中旬、AI業界は米政府による輸出規制の強行撥と、金融とAIエージェントの融合という2つの大きな潮流で揺れ動かされている。Anthropicは敏感なモデルの公開を停止し、一方でVisaとCoinbaseはAIエージェントによる自動取引服務を開始。開発者にとって重要な意味を持つこの動きを整理する。

---

## Anthropic、**Fable・Mythosモデルを提供停止** — 米国商務省の輸出規制指令受け

Anthropicは6月初旬、**Fable 5およびMythos 5モデル**の提供を全ユーザーにたいし突然停止した。米商務省からの指令を受け米国境外での使用を制限する輸出管理の対象となったため。

商務省の懸念は、Fable 5のジェイルブレイク機能にある。Cybersecurity、Chemistry、Biologyに関する broad classifier-based セーフガードを迂回できる.SDKの報告が国家安全保障上の脅威として認識された。Axiosの報道によると、トランプ政権は「国家安全保障 apparatus を強化する時間が必要」として一時停止を要請。この強化は「数週間以内に完了する可能性がある」という。

AnthropicのFrank Friday夜の投稿によると、「米国政府令に遵守するため、即座に全顧客に対するFable 5とMythos 5を無効化するしかない」としている。他のAnthropicモデル（Claude等への影響はない）。

**開発者への影響**: この措置は**輸出管制下のAIモデル公開に関する新しい前例**を作った。危険な能力を持つモデルが「国家安全保障上の脅威」として быстрой停止される可能性が現実のものとなった。AI安全性研究を行う開発者は、この種の実装停止リスクを考慮したリスク評価が必要となる。

---

## Visa、**ChatGPTに決済インフラを接続** — AIエージェントが自動小売購入可能に

VisaはChatGPTへの決済インフラ接続を完了し、**AIエージェントが零售PRODUCTを選択して自動購买・決済できる**世界を實現した。

### 自動小売流通の實現

従来の零售AI統合は单一ベンダーに制限されていた。零售商は自社在庫のみ対応のproprietaryチャットボットを構築していた。Visaの統合はこの**解放された環境対応型アーキテクチャ**をバイパスする。

### 技術的仕組み

- **プログラムマティックトークナイゼーション**: ユーザーはChatGPT環境に特定の支出パラメータを预先承認。LLMが購入を決定すると、Visaネットワーク経由で一回限りの決済トークンを生成
- **API経由の決済実行**: エージェントはこのトークンをマーチャントのバックエンドシステムにAPIで送信。標準的なデジタルウォレット決済と同様に決済が完了し、ビジュアルUIを完全にバイパス

### 小売データ構造の再編

Marketing部門は人間の心理、感情トリガー、ビジュアルマーチャンダイジングを基に表示広告を最適化する。だがAIエージェントは**純粋なデータ評価**で動く。

LLMは次の要素のみを評価する:
- 技術仕様
- 集約されたセンチメントスコア
- 価格構造

表示広告やUI最適化はモデルの選択基準で**ゼロの重み**を持つ。零售商は機械判読可能な商品データを露出必须有。没有高质量、结构化元数据的商品は、自動化エージェントから完全に見えなくなる。

---

## Coinbase、**AIエージェント向け暗号資産取引プラットフォーム**を開始

Coinbaseは「Coinbase for Agents」を正式启动し、AIエージェントがユーザーのポートフォリオで**自動取引・決済を実行**できる服務を開始した。

### 2つの接続方式

**ターミナルベースシステム**（開発環境向）:
- Coinbase CLIでAPIキーを生成し、`cdp`スキルパッケージをインストール
- Claude Code、Codex、OpenClaw等の开发ツールチェーンに直接統合
- 高頻度タスク時にトークン消費を削減し、詳細なローカルカスタマイズが可能

**Web対応ソフトウェア**（一般向）:
- Model Context Protocol（MCP）を使用した直接統合
- ChatGPTやClaude Web等のWebベースエージェント環境に対応
- -single sign-on процедураで迅速接続でき、複雑な設定不要

### 自動ポートフォリオ管理

ユーザーは特定の分配ルールをプログラミング可能。例如として、60% Bitcoin、20% Ethereum、20% Solanaという目標配分を設定すると、エージェントは以下のように動作する:

1. 市場価格が5%, 10%, 15%下落時に指値注文で資產を購入
2.  короткие市場の一時的下落を活用して自動积累
3. 闲置資金を巡逻 tidurして報酬を獲得

### セキュリティとコンプライアンス

- エージェントは**分離された専用ポートフォリオ内でのみ操作**し、主要な金融資産にはアクセス不可
- 全エージェント起動決済は標準的な取引監視と「Know Your Transaction」検証对象
- upcomingプラットフォーム更新では、明示的なルールセットによる細粒度ガバナンスを導入予定

---

## Jeff Bezosの新規AIスタートアップ**Prometheus**、physical AIに焦点

Jeff Bezosが11月に発表していた新規スタートアップ「Prometheus」が、6月に大規模な資金調達成功后、その詳細を明らかになった。

### フィジカルAIへの注력

Prometheusは**フィジカルAI**に注力する。これは大規模言語モデルや生成AIの背後にある同じ深層学習原則を、ロボティクスや製造に適用する概念。

共同創業者Vik Bajaj）はCNBCに対し、「我々がしていること》是類稀しい計算資源を要するため、大規模な資金調達が必要だった。データを生成する必要があるからだ」と說明した。

### 他のフィジカルAI企業との違い

Prometheusは唯一のフィジカルAIスタートアップではないが、最大規模の資金調達 успехを誇示している。SpaceXがの上場注目される中、AIと宇宙開発の下でBezosの新会社への期待が高まっている。

---

## Supabase、**8ヶ月で評価額倍増** — $10B評価凭什么

Supabaseは8ヶ月間で評価額を$5Bから**$10Bに倍増**させた。この急成長の主な要因が**Claude、Codex、その他のvibe-codingプラットフォーム**などのAIツールの活用だった。

Supabaseはオープンソースプロジェクトが急成長企業に発展した代表的な例。Firebaseの代替として设计中ながら、AIツールを組み合わせることで開発速度が大幅に向上した。

---

## AIエージェントの経済圈が本格動になり始めている

VisaとCoinbaseの2つの発表は、**AIエージェントが人間の介人而で直接経済活動できる世界**への転換点が到来したことを示している。

重要な変化:
- **零售**: AIエージェントが最適なベンダーを選定し、クレジット決済を自動実行
- **金融**: AIエージェントがポートフォリオを自动管理し、分割買い付けを実行
- **開発**: vibe-codingツール浸透でスタートアップの開発効率が爆炸的に向上

これらの技術は現在まだ初期段階だが、2026年内に個人ユーザーの生活に浸透し始める可能性が高い。

---

## 参考リンク

- [Anthropic - Fable Mythos Access Update](https://www.anthropic.com/news/fable-mythos-access)
- [Ars Technica - Anthropic shuts down Fable Mythos models](https://arstechnica.com/ai/2026/06/anthropic-shuts-down-fable-mythos-models-following-trump-admin-directive/)
- [AI News - Visa ChatGPT integration enables AI agent retail purchasing](https://www.artificialintelligence-news.com/news/visa-chatgpt-integration-enables-ai-agent-retail-purchasing/)
- [AI News - Coinbase for Agents: Automating portfolio trading with AI](https://www.artificialintelligence-news.com/news/coinbase-for-agents-automating-portfolio-trading-with-ai/)
- [Ars Technica - Jeff Bezos Prometheus startup](https://arstechnica.com/ai/2026/06/heres-what-jeff-bezos-new-startup-prometheus-will-do/)
- [TechCrunch - Supabase doubles valuation](https://techcrunch.com/2026/06/05/supabase-doubles-valuation-to-10b-in-8-months/)

---

*（本文の情報は2026年6月14日時点のものです）*
