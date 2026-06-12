# Googleが25年ぶりに検索ボックスを刷新：キーワードからAI会話への転換

2026年6月、Googleは25年間ほぼ変わらないままでいた検索ボックスの大幅刷新を発表した。キーワード入力欄から、AIとのマルチモーダル会話型インターフェースへの転換である。同時に、AIネイティブインフラの台頭や大規模資金調達のニュースも飛び込み、AI業界は急速な構造変化を迎えている。

---

## 検索ボックスの刷新：25年ぶりのパラダイムシフト

Googleは6月、25年間続いた検索ボックスの大規模刷新を正式に発表した。I/O開発者会議で披露された新設計は、従来の細い白い長方形から、動的に拡張するAI駆動の会話型エントリーへと変わる。

**主な変更点：**

- **動的拡張ボックスの導入**：長い会話型クエリを完全に記述可能に。これまでは2〜3語のキーワードが前提だった入力欄が、完全な質問の表現を受け入れる
- **マルチモーダル入力対応**：テキストだけでなく、画像、PDF、ビデオ、Chromeタブのコンテンツをそのまま検索ボックスにドラッグ＆ドロップ可能に
- **AIクエリサジェスションシステム**：オートコンプリートを超えた、AIが複雑なクエリの構成をガイドする機能
- **AI OverviewsとAI Modeの統合**：AI生成サマりと会話型検索体験がシームレスに融合し、ユーザーは単一インターフェースで両方を活用可能に

Liz Reid Google Search VPは、「25年前のデビュー以来最大のアップグレード」と評した。AI Modeは米国でのローンチから1年で月間10億ユーザー達成し、クエリ数は四半期ごとに倍増している。

### Gemini 3.5 Flashが検索の速度を支える

新検索体験の土台には、I/Oで発表された**Gemini 3.5 Flash**が使われる。Googleによると、このモデルはGemini 3.1 Proよりほぼすべてのベンチマークで優れる一方、出力トークン毎秒で4倍の速度を実現。Artificial Analysisインデックスの「Intelligent × Speed」四象限線で「独自のポジション」を占めるという。

### 「生成的UI」と情報エージェント

刷新された検索ボックスは、リアルタイムでカスタムウィジェットやインタラクティブビジュアルを構築する「生成的UI」へのゲートウェイでもある。例えば「ブラックホールが時空にどのような影響を与えるか」と質問すると、インタラクティブな視覚化がAI Overviewsに直接生成される。

さらに、「情報エージェント」機能も導入される。ユーザーが特定の条件を設定すると、24時間365日ウェブを監視し、条件に合致した時に合成アップデートを配信する。

---

## AIネイティブクラウドの台頭：RailwayがAWSに宣戦布告

AIコーディングアシスタントの普及により、デプロイインフラの遅延が致命的なボトルネックとなりつつある。この問題に取り組むスタートアップ**Railway**が、1億ドルのSeries B調達を発表した。

### AI時代のインフラ何が問題か

従来のインフラツール（Terraform等）を使った標準的なビルド＆デプロイサイクルは2〜3分かかる。AIコーディングアシスタントが数秒で動作するコードを生成できる時代に、この遅延は致命的なボトルネックとなる。

Railwayの主張：
- **デプロイ時間1秒未満**：AI生成コード跟上可能
- **コスト50%削減**：hyperscalers比
- **10分で10倍の開発者速度向上**
- **Fortune 500の31%が導入済み**

### 30人が月間数千万ドル収益

Railwayはまだ従業員30人ながら、月間1,000万デプロイ、1兆リクエストを処理し、数千万ドルの年間収益を上げている。調達理由は「必要性ではなく戦略的」——Jake Cooper最高経営責任者（28歳）は「2026年、世界舞台上てプレーする年」と語る。

2024年、RailwayはGoogle Cloudを完全に捨て собственныеデータセンターを構築するという大胆な意思決定を行った。「HardwareからSoftwareまでフルコントロールがあるからこそ、agentic speedで動ける」とCooperは説明する。

---

## Prometheus：Jeff Bezosが$12Bで「物理世界のための汎用エンジニア」開発へ

Jeff Bezos氏が出資するAIスタートアップ**Prometheus**が、410億ドル評価でンベスター手中12億ドルを調達した。目的は「物理世界のための人工汎用エンジニア（Artificial General Engineer）」の構築——重いエンジニアリング作業や創薬設計の自動化を目指す。

このラウンドにより、Prometheusは物理AIという新しいカテゴリで最大の評価額を得た。Bezos氏以外にも著名投資家が参加している。

---

## Anthropic：Dario Amodei CEOのリーダーシップ構造が話題に

AnthropicのDario Amodei CEOが**直接報告先がわずか1人**という、異例のリーダーシップ構造を採用していることが明らかになった。CEOが戦略・文化・研究方針に時間を集中し、日常的なチーム管理を最小化する方針だ。

AI企業の急成長に伴う組織構造のあり方として、業界の関心を集めている。

---

## オープンソースの逆襲：GooseがClaude Codeの独占を崩す

AnthropicのClaude Code（月額$20〜$200）が抱える料金・レイト制限問題に対し、Block（旧Square）が開発したオープンソースAIエージェント**Goose**が急速に普及している。

- **GitHub星26,100以上**、コントリビューター362人、102リリース
- 完全ローカル実行——オフライン動作可能、データはユーザー元に留まる
- サブスクリプション不要、レート制限なし

Claude Codeの料金構造に対する開発者たちの「反乱」が、Gooseの流行を生み出した形だ。

---

## Niteshift：Datadogの元幹部らがAIコーディングのロックイン回避赌け

Datadogの元幹部らが設立した**Niteshift**が、700万ドルのシードラウンドを調達した。赌けは「Big AIへのロックインではなく、能力掌握」というもの。

- AIコーディングエージェントが特定のモデル厂商にロックインされる問題解決を目指す
- 著名エンジェル投資家が多数参加

---

## まとめ：AI業界構造の三大変化

本周のニュースから、AI業界の構造変化が3つの軸で進んでいることが見える：

| 変化の軸 | 详细内容 |
|---------|---------|
| **インターフェース転換** | キーワード→会話型AIへ。Google検索ボックスの刷新は、25年間の基本単位が変わることの象徴 |
| **インフラ刷新** | AIネイティブクラウドが急成長。デプロイ速度とコストがAIコーディング時代のボトルネックに |
| **ロックイン回避** | オープンソースや中立的なツールへの需要増加。Claude Code対Goose、Big AI対Niteshift |

2026年下半期のAI業界は、パラダイム転換の真っただ中にありそうだ。

---

## 参考リンク

- [Google I/O 2025 Search Redesign - VentureBeat](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)
- [Railway Raises $100M - VentureBeat](https://venturebeat.com/infrastructure/railway-secures-usd100-million-to-challenge-aws-with-ai-native-cloud)
- [Prometheus Raises $12B - TechCrunch](https://techcrunch.com/2026/06/11/jeff-bezoss-prometheus-raises-12b-to-build-an-artificial-general-engineer-for-the-physical-world/)
- [Anthropic Dario Amodei - TechCrunch](https://techcrunch.com/2026/06/10/anthropics-dario-amodei-has-just-one-direct-report/)
- [Goose Open Source - GitHub](https://github.com/block/goose)
- [Niteshift - TechCrunch](https://techcrunch.com/2026/06/10/datadog-veterans-launch-ai-coding-startup-niteshift-on-a-bet-against-big-ai-lock-in/)

---

*（本文の情報は2026年6月12日時点のものです。）*
