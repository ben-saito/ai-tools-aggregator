# Google検索ボックス刷新、検索体験の大変革期 —— AI駆動型検索が主流に：AI週間ニュース（2026年5月第4週）

AI検索体験が文字通り根底から変わろうとしている。Googleが25年間守り続けてきた検索ボックスの設計を刷新し、キーワード入力からマルチモーダルAI会話への移行を世界に宣言した。本稿では2026年5月第4週の最重要AIニュースを整理する。

---

## Google、25年ぶりに検索ボックスを刷新 —— AI OverviewsとAI Modeが統合

Googleは5月20日（米国時間）、同社のI/O開発者会議にて検索ボックスの大規模刷新を発表した。1999年の初版以来、形骸化が進行していたキーワード入力窓が、**動的に拡張するマルチモーダルAI入力装置**に進化する。

**新検索ボックスの主な特徴：**

- **動的拡張**：長い会話的クエリを自動許可し、キーワード入力の制約を撤廃
- **マルチモーダル入力対応**：テキスト、画像、PDF、ビデオ、Chromeタブのドラッグ&ドロップを直接受容
- **AIクエリ提案機能**：単純なオートコンプリートを超え、複雑なクエリ構築をAIが支援
- **AI Overviews + AI Mode統合**：2つの体験がシームレス融合し、シームレスなAI会話継続が可能に

底力となるのは**Gemini 3.5 Flash**だ。GoogleCEO Sundar Pichai氏によれば、このモデルは「Artificial Analysis指数の右上象限（知性 vs 速度）で独立した league」を形成し、従来モデルの4倍の出力トークン速度を達成しながらベンチマークで上回る。

**検索行動データの示す方向性**も重大だ。AI Modeの月間ユーザーはすでに**10億人**を突破。クエリ数は四半期ごとに倍増し続けており、AI Overviewsは**25億人**のユーザーにリーチ。Googleの surfacesは現在月間**3.2 quadrillion（320京）トークン**を処理しており、これは1年前の7倍に相当する。

さらに注目すべきは「**生成UI（Generative UI）**」の発表だ。ユーザーが「ブラックホールが時空にどう影響するか」と質問すると、リアルタイムで生成されたインタラクティブな視覚化がAI Overviewsに表示される。これはGemini 3.5 Flashの上で走る「リアルタイムコード生成システム」によって実現される。

PichaiCEOは2026年の資本支出を**約1800〜1900億ドル**（4年前の約6倍）と予想しており、検索のAI駆動型変革に継続的に投資する姿勢を示している。

---

## Anthropic、Claudeに桌面タスク自動化機能「Cowork」を導入

Anthropicは5月21日、ClaudeのmacOSデスクトップアプリに新機能**「Cowork」**を追加した。Claude Codeの開発チームによって生み出されたこの機能は、AI agentにローカルフォルダへのアクセス権を付与し、領収書整理、スプレッドシート作成、メモのレポート化などを自動実行する。

**技術的背景：**

Claude Codeのリリース後、チームは予想外のトレンドを発見した。開発者たちがコード生成以外の用途——度假研究の自動化、メール整理、サブスク解除、硬碟からの結婚写真復元——にCLIツールを流用していたのだ。Coworkはこの.shadow usage.正規化した製品だ。

**技術仕様：**

- **フォルダベースのサンドボックスアーキテクチャ**：指定フォルダ内でのみファイル読み取り・作成・編集を許可
- **Agentic Loop**：計画立案→並列実行→自己検証→不明点の確認を反復
- **Agent SDKベース**：Claude Codeと同じ基盤アーキテクチャを共有
- **Chrome拡張連携**：Webアクセス・ボタン操作・フォーム入力を自動化
- **Connectors対応**：Asana、Notion、PayPalなど外部サービスと連携

AnthropicのBoris Cherny氏によれば*Coworkは「10日半で構築」*され、その開発にもClaude Code自体が使用された可能性がある。Simon Smith氏（Klik Health）は「Claude CodeがClaude Cowork全体を написал」とXに投稿し*recursive improvement loop*（再帰的改善ループ）の存在を指摘した。

**リスクへの警告**も異例だ。Anthropicはプロンプトインジェクション攻撃の可能性を明示的に認め、「Sophisticated defensesを構築したが、agent safetyは今も業界全体で進行中の開発領域」と記載。ファイル削除といった潜在的破坏的動作のリスクも公開している。

現時点では**Claude Max契約者（macOS限定）**のみアクセス可能。今夏からWindows対応とクロスデバイス同期の追加が予定されている。

---

## Nous Research、NousCoder-14Bを公開 —— 競合の半額以下でトレーニング完了

Nous Researchは1月7日、オープンソースの競合プログラミング特化モデル**NousCoder-14B**をリリースした。48個のNVIDIA B200 GPUで**4日間**のトレーニングを実施し、LiveCodeBench v6で**67.87%**の正答率を達成。これはベースモデルのQwen3-14Bから7.08ポイントの向上だ。

**注目すべき技術的特徴：**

- **完全オープンソース**：モデル重みだけでなく、完全な強化学習環境、ベンチマークスイート、トレーニングハーネス（Atroposフレームワーク）をGitHubで公開
- **DAPO（Dynamic Sampling Policy Optimization）**採用：すべての試行で解決または失敗するサンプルの除外を通じ学習効率を最適化
- **反復的コンテキスト拡張**：32Kトークンから40Kトークンへ段階的に拡張し、評価時は80Kトークンで最高性能
- **検証可能報酬システム**：コード生成→テストケース実行→正誤バイナリフィードバックのループ

興味深い対比がある。研究者Joe Li氏（Nous Research）は、技术レポートで、Coworkよりも控えめな推定ながら、「人間の compétitive programmerが1600-1750レベルから2100-2200に到達するまでにおよそ2年かかったのに対し、モデルは96時間で同じ改善を達成した」と記述。ただし人間は**約1,000問**で到達し、モデルは**24,000問**を要した——サンプルの効率性では依然として人間が優勢だ。

**データ制約の問題**も提起された。技術レポートによれば、「利用可能な検証済み競合プログラミング問題の 상당部分をすでに使い果たしている」可能性があり、「将来最も重要な研究分野は合成データ生成とデータ効率の良いアルゴリズム・アーキテクチャになる」と結論づけている。

モデルはApache 2.0ライセンスでHugging Faceから入手可能。$65Mの支援を受けるNous Researchにとって、Proprietaryモデルに真っ向から挑むオープンソース戦略の継続的実証だ。

---

## VentureBeatが伝えるその他の重要トピック

### Railway、$100M調達でAWS挑戦を加速

クラウドプラットフォームのRailwayがSeries Bで$100Mを調達。年間**10億回以上のデプロイ**、月間**1兆リクエスト**を処理し、「マーケティングに1ドルも使わずに200万人の開発者」を獲得した。28歳のJake CooperCEOは「旧世代クラウドプリミティブは遅く時代遅れで、AIがすべてを加速する中で、チームは追いつけない」と語る。

### Import AI: シンギュラリティ後の世界を覚悟する

Jack Clark（Anthropic共同創業者兼Import AI編集者）は5月26日、オックスフォード大学HAI Labでの Cosmos Lectureの全文を公開。「AIの成功を計画する」ことを主軸に、AIが2023年の бар exam突破から2025年のIOI金賞、2025年の数学的共著証明までたどった道のりを振り返る。

核心の主張：*「AIは通常の技術として扱えないほど強力な技術であり、いずれ自らの後継者を構築できるほど賢くなる可能性がある。このクラス技術はこれまでのところ存在したことがなく、私はこれが今後2年以内に起こると信じている」*。

---

## 参考リンク

- [Google Search redesign - VentureBeat](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)
- [Gemini 3.5 Flash - Google Blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/)
- [Claude Cowork - Anthropic](https://claude.com/blog/cowork-research-preview)
- [NousCoder-14B - Nous Research](https://nousresearch.com/nouscoder-14b-a-competitive-olympiad-programming-model/)
- [Railway $100M - VentureBeat](https://venturebeat.com/infrastructure/railway-secures-usd100-million-to-challenge-aws-with-ai-native-cloud)
- [Import AI 458 - Jack Clark](https://importai.substack.com/p/import-ai-458-reckoning-with-the)
- [OpenRouter $1.3B valuation - TechCrunch](https://techcrunch.com/2026/05/26/openrouter-more-than-doubles-valuation-to-1-3b-in-a-year/)
- [NousCoder on Hugging Face](https://huggingface.co/NousResearch/NousCoder-14B)

---

*（本文の情報は2026年5月27日時点のものです）*
