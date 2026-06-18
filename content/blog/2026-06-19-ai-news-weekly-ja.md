# AI開発ニュースまとめ（2026年6月18日版）

LeCun警告、Google幹部のOpenAI転出、Anthropic規制議論、Adobeのクリエイティブエージェントなど、2026年6月中旬のAI開発ニュースをまとめてお届けする。

---

## Yann LeCun氏「AIラボは巨大バブルの破裂に直面する」

MetaのAI研究責任者でありAMI Labs創業者のYann LeCun氏が、CNBCの取材に対してAI業界の持続可能性について警告を発した。OpenAIやAnthropicのようなAIラボは、コストの削減または料金引き上げを行わなければ「巨大バブル破裂」に直面する可能性が高いと指摘。AIサービスの価格は上昇続けているものの、運用コストも的比例で増加しており、ビジネスモデルの両立が困難になっている。

LeCun氏の見解は技術的に注目に値する。同氏は現在主流の大規模言語モデル（LLM）ではなく「ワールドモデル」に賭ける立場を取る。ワールドモデルはテキスト予測ではなく、物理世界の構造——空間的関係、力学、身体知覚——を理解するシステムであり、LeCun家は「LLMだけではAGIに到達できない」と長らく主張してきた。

興味深いことに、LeCun家は Elon Musk の xAI を「ある種の失敗」と切り捨てた。xAIの創業チームメンバーが既に退社しており、Musk氏はいまやトップ人材の採用にも苦労している情况和を指摘。「xAIがOpenAIやAnthropicと競争することは期待できない」との見解を示した。

---

## Google Gemini共同責任者がOpenAIに転身——「Attention Is All You Need」共著者

AI史上最も影響力のある論文の一つ「Attention Is All You Need」の共著者であり、GoogleでGeminiの共同責任者を務めたNoam Shazeer氏が、OpenAIに加わった。2000年にGoogleに入り、スペルチェックの改善などに寄与。2021年にGoogleを退社し、AIチャットスタートアップCharacter.AIを共同創業。2024年にGoogleに復帰し、Gemini開発を指揮していた。

Shazeer氏のリーダーシップと技術的|Maybe влияниеを考慮すれば、OpenAIにおける彼の役割は注目に値する。Googleの内部事情に精通した人物が競合他社に移るパターンは、近年のAI人材流動性の高さを如実に示している。

---

## Adobe、PhotoshopとPremiereにAIエージェントを本格導入

AdobeはCreative Cloudアプリの主力製品群に「クリエイティブエージェント」を本格的に展開すると発表した。ユーザーは最終結果を描写するだけで済み、複数のステップを要するワークフローをソフトウェアが自動的にオーケストレーションする。

展開状況は以下の通り：

- **Premiere Pro**: 映像を bins に自動分類、クリップの一括リネーム、インタビュー質問の特定、マーカー設定、ルーター構成
- **Photoshop**: スプレッドシートから50のバージョニングファイルを生成、レイヤーの自動整理、配色モードエラー・欠落フォントのプリフライトチェック
- **Illustrator**: 生产ジョブのマルチステップ自動化
- **InDesign / Frame.io**: パブリックベータとして提供
- **After Effects**: プライベートベータ

AdobeはFirefly AI Assistantにも新機能を追加。ソーシャルコンテンツクリエイター向けのリBrand Kitツールは、ロゴ、ブランドアイデンティティ、SNS用アセットを自動生成。言語によるアセット検索やワークフロー学習機能も含まれており、時間の経過とともに適応する設計になっている。

---

## 米国政府、Anthropicの上位モデル（Mythos 5 / Fable 5）を輸出規制——「危険なAIモデル」議論が加熱

米国務省がAnthropicの上位モデル群Mythos 5およびClaude Fable 5に対する輸出規制を実施した。Trump前大統領の指示に基づく措置であり、Fable 5のセーフティガードを無効化することでMythos 5のフル功能に accès 可能になるとして、国家安全保障上のリスクに該当すると判断された。

Anthropicは当初、Mythos Previewを「Project Glasswing」を構成する限定コンソーシアムにのみプライベートリリースしていた。Mithos 5は 先週、同じグループにプライベートリリースされた。Mythos 5の Capability には%、ソフトウェアの脆弱性を発見してパッチ充当を支援する「ディフェンダー向け」機能と、それを悪用して攻击に轉用する「攻撃者向け」機能の兩面がある。

しかし専門家らは、この規制は「時代に追いついていない」と指摘する。Harvard大学・Toronto大学のBruce Schneier研究员は「一つのモデル一つの話ではない。技術の全体的な趋势だ。より小さく、より安く、オープンソースのモデルが時には単独で、時には組み合わせにより、同様のCapability を既に持っている」と語る。

Cybersecurity企業のCSOであるTarah Wheeler女史は「Anthropicが Similar なCapability を開発していない競合他社が存在しないと考えるのは、极端に短絡的だ。现にOpenAIも4月にサイバーセキュリティ特化モデルをプライベートリリースし、Expanded サイバーセキュリティ戦略を発表している」と述べる。

AI Capability の开放と規制の境界線をどう引くかという根本的な問いが浮き彫りになった。

---

## 新 безопасность スタートアップ Sequent——「 alignment は軌道に乗っていない」

英国AI Security InstituteのAlignmentチーム研究者およびAlignment理論スタートアップTimaeusの研究者が提携し新的非營利研究組織「Sequent」を設立した。「alignment は軌道に乗っていない」という問題意識から出発した。

Sequentの目標は以下の通り：

- **規模**: 2〜3年以内に40〜80名の正社員を確保
- **資金調達目標**: 初期に1億〜1.5億ドル規模で調達成功后、さらに1桁多い資金調達を做好准备
- **研究方向**: 主力AIラボとは異なる原则的なalignment 研究アプローチを採用。「 우리가制御できる状況（例：訓練環境）でのalignment を観察できるとしても、それがDeployment先で保续する理由についての原則的な確信を見つける」ことが目的

この设立は、主流AIラボの内部Alignment研究に対する外部からの補完勢力の必要性を反映している。

---

## FrontierCode——Cognitionが作る新しいコーディングベンチマーク

Cognition（Devinの開発者）が，新的により難しいコーディングベンチマーク「FrontierCode」を発表。既存のベンチマークでは評価できない実際の软件开发能力を測定することが目的。

FrontierCodeの特徴：

- **150タスク**: 3つの難易度層（DIAMOND 50問、MAIN 100問、EXTENDED 150問）
- **対応言語**: Python、Go、TypeScript、JavaScript、Java、C/C++ など
- **評価の厳しさ**: 現時点で最高性能のClaude Opus 4.8でも13.4%しか達成できない

このベンチマークの難しさは「年間持続できるかどうか」という担忧があるほど。既存のコーディング評価が簡単になり過ぎたことを受けての開発だ。

---

## 参考リンク

- [Yann LeCun warns AI labs face big bubble explosion (The Decoder)](https://the-decoder.com/yann-lecun-warns-ai-labs-like-openai-and-anthropic-face-a-big-bubble-explosion/)
- [Adobe adds AI agents to Creative Cloud apps (The Decoder)](https://the-decoder.com/adobe-adds-ai-agents-to-photoshop-premiere-and-more-creative-cloud-apps/)
- [Noam Shazeer joins OpenAI (The Decoder)](https://the-decoder.com/)
- [Dangerous AI models are coming no matter what (Ars Technica / WIRED)](https://www.wired.com/story/dangerous-ai-models-are-coming-no-matter-what/)
- [Sequent safety startup (Import AI 461)](https://jack-clark.net/2026/06/15/import-ai-461-alignment-is-not-on-track-frontiercode-and-synthetic-research-interns/)
- [FrontierCode benchmark (Import AI 461)](https://jack-clark.net/2026/06/15/import-ai-461-alignment-is-not-on-track-frontiercode-and-synthetic-research-interns/)

---

*本文の情報は2026年6月18日時点のものです。*
