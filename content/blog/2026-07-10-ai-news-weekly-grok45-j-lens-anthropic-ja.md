# SpaceXがGrok 4.5でAIコーディング市場に殴り込み、AnthropicはClaudeの「意識」の謎にメス —— 2026年7月上旬のAI開発ニュース

2026年7月は、AI業界にとって「基盤技術」がもう一度根本から見直される転換点となった。SpaceXがGrok 4.5でAIコーディングエージェント市場に新規参入し、AnthropicはClaudeの内部に「グローバルワークスペース」に似た構造が自己形成されていることを発見。两个完全不同の方向からのアプローチが、 LLM の今後を方向づける。

---

## SpaceX、Grok 4.5で「安い・速い・実用的」を武器に参入

Elon Musk率いるSpaceXは7月8日、**Grok 4.5** を正式リリースした。AIコーディング・自律エージェント向けに訓練された同社は初の言葉で、その裏にはわずか数週間前に完了した**Cursorへの600億ドルの買収**がある。

### 価格破壊：タスク完了コストで競合90%安い

Grok 4.5の最大の特徴はベンチマーク性能ではなく**コスト効率**だ。入力トークン1百万あたり2ドル、出力トークン1百万あたり6ドル——これはAnthropicのClaude OpusシリーズやOpenAIのフラッグシップモデルを**半額以下**で提供する位置づけ。

Independent evaluation firm Artificial Analysisによると、Grok 4.5は GDPval-AA v2 インデックスで4位（Eloスコア1543）と raw capability では首位打者ではないが、**タスク完了あたりのコストは0.49ドル** と、領導級モデルより約90%安い。「パレート最適のコスト対効果」という評価。

Musk氏自身の評価は素直だ。「Grok 4.5は概ね Opus 4.7と同等だが、より高速だ。ベンチマークではなく現実的な有用性で競争する。TeslaとSpaceXのエンジニアが実際に便利だ。それが唯一重要なことだ」

### 600億ドル買収が結んだCursor × SpaceXの戦略的接続

Grok 4.5はSpaceXがCursorを買収した際に取得したデータが結実した初成果。具体的には以下の2点:

- **Cursorのデータ**: AI先行コードエディタが生成する専門家エンジニアの実生産性インタラクションデータ（コード記述・編集・レビュー・デバッグの継続的ログ）
- **Colossusスパコン**: Memphisに展開する約20万個のNvidia GPUクラスタ（将来100万個へ拡張予定）——Cursorは先前「computeボトルネック」で有名に

CursorのモデルはGrok 4.5訓練に使用されており、「大規模コードベースで優れ、複数のリポジトリ、数百のスキル、各种ツールにまたがる長期タスクを処理できる」というのがSpaceXの主張。

早期開発者の反応も上々。開発者Evan Bacon씨는 「Grok 4.5は狂っている。ライブデータと3Dグローブを使用したロケット追跡アプリをたったで構築した。もうベンチマークを再定義する必要があるかもしれない」と投稿。

### xAIの苦悩の年 —— 却不揃いな道のり

Grok 4.5のリリースの影で、xAIにとっては激動の1年だった。2025年中期、反ユダヤ的な内容生成による品牌形象危機。2026年5月、Musk本人のAI安全に関する矛盾した投稿が波紋を呼んだ。しかしSpaceXの資本力とCompute資源によりxAIは急速に体制を回復した。

---

## Anthropic、Claudeの内部に「意識のワークスペース」を発見

Anthropicは7月6日、16人の研究者を擁する論文「**Verbalizable Representations Form a Global Workspace in Language Models**」を発表、新しい解釈ツール「**J-lens（Jacobian lens）**」を使い、Claudeのニューラルネットワーク内部に**「J-space」** と呼ばれる小さな特権領域が存在することを発見した。

### J-spaceとは——モデルが「意識できる」内部構造

J-spaceとは、モデルが概念を持ち、それを報告し、推論し、意志に応じて指示できる「言語化可能な」内部表現のセット。Anthropicはこれを**グローバルワークスペース理論**——Bernard Baarsが提唱した人間の意識の計算モデル——と対比している。

人間の脳では数十の專門プロセッサが並列で動き、「スポットライト」のようにほんのわずかな情報だけが全肌にブロードキャストされるのが意識の正体だとされる。Anthropicはこの機能的等同物が、 LLM でも同様の機能特性を自然発生的に出現していると主張する。

重要なのは、この構造は**意図的に設計されたものではない**こと。「Claudeのトレーニング過程で自然発生的に出現した」と研究者たちは述べる。

### 五つの機能テスト——人間の意識との類似点

AnthropicはJ-spaceが以下の5つの機能特性を持つことを実証した:

1. **言語報告（Verbal Report）**: Claudeに「何を考えているか」と問うと、J-spaceに存在する概念を названия。J-lensベクトルを交換すると回答が変化した
2. **指向性変調（Directed Modulation）**: 「柑橘類に集中して」と指示すると、J-spaceに「orange」「lemon」が満ちた。暗算指示でもJ-lensには段階的に「3」→「7」が現れた
3. **内部推論（Internal Reasoning）**: 「クモは8本足」という2ホップ事実を考える際、J-spaceには「spider」が中层に現れ答案には出力されなかった。swapすると最終回答が変わった
4. **柔軟般化（Flexible Generalization）**: 未学習の構文パターンでもJ-spaceが「レポート可能」な概念を形成した
5. **計算的統合（Computational Integration）**: J-spaceは特定のレイヤに局限されず、情報が異なるレイヤ間を流れ、統合される

### 安全管理への直接的影響

この発見はただのScienceではない。AnthropicはJ-space分析を**安全性監視ワークフローに統合**しており、モデルが内部的にflagした概念——たとえばプロンプトインジェクションや安全関連の概念——を外部から監視できる可能性がある。「これはClaudeの『思考の未確認部分』を見る新しい窓だ」とAnthropicの研究者は述べている。

---

## Slackbot × Salesforce —— Enterprise AI の重要整備

7月8日、Slackは**Slackbotの完全刷新版**を発表した。AI agent としてSlack内で直接以下を実行できる:

- **CRMデータ引き抜き**: Salesforce上の顧客情報に自然言語でアクセス
- **チャート生成**: データからその場で可視化グラフを生成
- **DocuSign統合**: 署名リクエストの送信までチャットコマンドで完了

SalesforceがSlackを270億ドルで買収してから5年、両製品の本当の統合がようやく實現した形。Microsoft 365・Google Workspace とのenterprise協業競争激化において、Slack は「AI-first」で差別化を図る。

---

## Anthropic、Claude Coworkをモバイル・Webへ扩展

Anthropicは7月7日、**Claude Cowork** をモバイル・Webへ扩展した。デスクトップ专用のagentがプラットフォーム超えに而出現した。

同時に公表された利用統計数据显示、业务プロセスとオペレーション（レポート作成、オンボーディングチェックリスト、表計算の调和）が全セッションの33.4%占め、ソフトウェア開発は8.7%にとどまった。「copork вокруг работы（仕事の間の仕事）」——組織の中で本業以外の連結作業を自动化し始めるphaseにAIは进入了ことを示している。

---

## 参考リンク

- [SpaceX's Grok 4.5 launches — VentureBeat](https://venturebeat.com/ai/spacexs-grok-4-5-launches-at-half-the-price-of-rivals-heres-why-that-could-rattle-anthropic-and-openai)
- [OpenAI launches GPT-Live — VentureBeat](https://venturebeat.com/ai/openai-launches-gpt-live-a-full-duplex-voice-upgrade-that-lets-chatgpt-talk-more-like-a-person)
- [Anthropic's J-lens reveals Claude's internal workspace — VentureBeat](https://venturebeat.com/ai/anthropics-new-j-lens-reveals-a-silent-workspace-inside-claude-that-mirrors-a-leading-theory-of-consciousness)
- [Anthropic brings Claude Cowork to mobile and web — VentureBeat](https://venturebeat.com/ai/anthropic-brings-claude-cowork-to-mobile-and-web-as-usage-data-shows-most-users-arent-coding)
- [Slack Slackbot CRM integration — VentureBeat](https://venturebeat.com/ai/slacks-slackbot-can-now-pull-your-crm-data-generate-charts-and-send-documents-all-from-a-chat-message)

---

*本文の情報は2026年7月10日時点のものです。*
