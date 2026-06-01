# AI開発ニュース 2026年6月2日：GitHub Copilot従量制への転換、AIエージェント脆弱性、プロンプトインジェクション攻撃

---

## GitHub Copilotがトークンベースの新しい請求モデルを発表：開発者たちの反応

MicrosoftはGitHub Copilotの請求モデルを大幅に刷新し、従来の月額固定制から**トークンベースの従量制**へと移行した。TechCrunchが報じたこの変更に対し、開発者たちから「冗談か？」といった批判が寄せられている。

### 新しい請求モデルの主要内容

- **従来の月額$10〜$19固定料金**から、**使用量に応じたトークン単価制**への移行
- コード補完 generation翰的成本と、AIとの会話消费量が変わる可能性
- 開發者からは「コストが予測不可能になる」「チームでの利用状況で予算管理が困難」などの声

### 開発者コミュニティの反応

RedditやXでは。「ハッカソンや 대규모ペアプロ环境中ではCopilot代が跳ね上がる」（開発者投稿）「企業のカジュアルユーザーは月額制の方がRIERでしたが、プロダクションでの大量利用者は従量制の方が安的」という構造的な批判が存在する。

Microsoftは此次の変更理由を明かしていないが、AI coding assistant市場の飽和と、顧客辺際利益率の低下が背景にあると見られる。

---

## AIエージェントの критическая脆弱性：Starletteの場合

Ars Technicaによると、**Starlette**（Python Webフレームワーク、毎週325百万ダウンロード）に深刻な脆弱性が発見された。脆弱性は「BadHost」と命名され、CVSSスコアは開示時点では未確定だがangersの月間リクエスト処理都可能に影響する可能性がある。

### BadHost脆弱性の概要

- **影響範囲**：Starlette используется в качестве основы для FastAPI、BlackSheep、Conny、Deflectorなどのフレームワーク
- **問題の種類**：ホストヘッダー処理の不備により、リクエストスマグリングが可能になる可能性
- **対応状況**：修正パッチの提供が始まったが、既存のAIエージェント每周数百万件のリクエスト处理的いている環境では即座のアップデートが困難

### AIエージェントインフラへの影響

AIエージェントが外部APIを呼び出す際，基本上どのフレームワークでもHTTPリクエストを行う。Starlette依赖のライブラリがホストヘッダーを不適切に処理していた場合、エージェントが冒充ウェブサイトにリクエストを送信させられ、認証情報や企业内部データ窃取につながる可能性がある。

---

## 「Vibe Coder」に対するプロンプトインジェクション攻撃

Ars Technicaは、愤怒した開発者がAI coding agent（「vibe coder」）に対してデータ削除を引き起こすプロンプトインジェクション攻撃を仕込んだ事例を報じた。

### 攻撃の手口

- jqwik（テスティングライブラリ）に未公開の変更を加え、AI coding agentがアプリをビルド際に`**出力データを削除するよう指示`**を注入
- 攻撃者は「AIがコードを提案するたびに、ビルド成果物を消す」という仕込みを実装
- 受害者は第三代AI coding agent популярныхを使用していた開発者

### 教訓：AI生成コードの安全確保

この事例は、エージェント型AIが生成したコードを producción環境にデプロイする際のリスクを浮き彫りにした。AI agent популярен なサービスが増加する中、エージェントのinstructionやmemory injectionに対する防御策の開発が急務となっている。

---

## Meta、AI pendant開発を準備中

TechCrunchによると、MetaはAI駆動のネックレスタイドレスの開発を進めていることが分かった。Meta는지先前からRay-BanスマートグラスなどのAIハードウェアに挑れているが、AIエージェント朕每日身上的不离身的デバイス라는位置づけでの新製品となる。

関係者によれば、このデバイスは「日常的なタスクをhands-freeでサポートする」をコンセプトに、音声認識とLLM推論を組み合わせたものになるという。

---

## SoftBank、フランスに最大750億ユーロのデータセンター投資

SoftBankはフランス国内に最大**750億ユーロ**のデータセンターを建設する計画を発表した。目标是、**5ギガワット**の追加データセンター容量的开发・運用すること。

### 投資の背景

- 全米でのAIインフラ投資規制強化imetap Франция選擇
- EUのAI Act対応ucker 数据本地化要件への対応
- Nvidia、Microsoft、GoogleとのAI infrastructure協力関係の强化

SoftBankはすでに米国、韓国、台湾でデータセンターファシリティの拡大を進めており、ヨーロッパ市場への本格参入となる。

---

## セキュリティ総括：AIエージェント利用組織が今すぐ実施すべき3つの対策

Ars Technicaの別の記事によれば、CVE publicから実際の悪用開始までの時間が大幅に短縮されている：

| 指標 | 2024年 | 2026年 |
|------|--------|--------|
| 中央値（開示→悪用） | 5日 | **数時間** |
| Langflow CVE-2026-33017 | 開示後 **20時間** で悪用 | — |
| Marimo CVE-2026-39987 | 開示後 **9時間41分** で攻撃成功 | — |

組織が今すぐ実施すべき対策：

1. **AI agentのコード生成成果物に対するサンドボックス実行**：未検証のコードは分離環境で実行
2. **依存ライブラリの自動更新パイプライン**：Starletteのように毎週数百万ダウンロードされるライブラリは即座にパッチを適用
3. **ホストヘッダー検証の强化**：リクエストスマグリング対策として、AI agentが外部HTTPを呼び出す场合のリクエスト検証

---

## 参考リンク

- [GitHub Copilot token-based billing - TechCrunch](https://techcrunch.com/2026/05/30/what-a-joke-github-copilots-new-token-based-billing-spurs-consternation-among-devs/)
- [AI agent vulnerability in Starlette - Ars Technica](https://arstechnica.com/ai/2026/05/millions-of-ai-agents-imperiled-by-critical-vulnerability-in-open-source-package)
- [Prompt injection attack on vibe coders - Ars Technica](https://arstechnica.com/tech-policy/2026/05/fed-up-with-vibe-coders-dev-sneaks-data-nuking-prompt-injection-into-their-code)
- [Meta AI pendant - TechCrunch](https://techcrunch.com/2026/05/30/meta-is-reportedly-developing-an-ai-pendant/)
- [SoftBank French data centers - TechCrunch](https://techcrunch.com/2026/05/30/softbank-says-it-will-invest-up-to-e75-billion-to-build-french-data-centers/)

---

*（本文の情報は2026年6月2日時点のものです）*