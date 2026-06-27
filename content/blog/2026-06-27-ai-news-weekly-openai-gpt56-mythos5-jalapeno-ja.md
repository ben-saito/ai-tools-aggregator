# AI開発ニュース週間トレンド（2026年6月第4週）：GPT-5.6発売、Mythos 5 政府交渉の結着、OpenAI独自チップ「Jalapeño」

2026年6月第4週、AI業界は**米国政府とAI企業間の規制攻防**を軸に激動の一週間を過ごした。OpenAIはGPT-5.6の限定プレビュー版を発売する一方、Trump政権の要求に対応。AnthropicはMythos 5のライセンス問題を約2週間の交渉の末に部分解決させた。またOpenAIはBroadcomと共同開発した推論チップ「Jalapeño」を発表、Googleは25年ぶりに検索ボックスの大刷新を宣言。開発者視点ではAnthropicのデスクトップAI Agent「Cowork」が非技術ユーザーにもAI Agentの門戸を開き、Patronus AIはデジタル環境を構築してAI Agentを負荷テストするプラットフォームで5,000万ドルの資金調達を実施。

---

## OpenAI、GPT-5.6を限定公開 — コーディング・サイバーセキュリティ・生物学特化

6月26日、OpenAIは新型モデル群**GPT-5.6**の限定プレビューを開始した。Sol（主力）、Terra（中量向け）、Luna（高速・低コスト）の3構成で、特に**コーディング、サイバーセキュリティ、生物学**の3領域と長時間のAgenticタスクにおける注意力強化を打ち出す。

**価格:**
- GPT-5.6 Sol: **$5入力 / $30出力**（Anthropic Claude Fable 5の$10/$50 почти半分）
- Terra、Lunaはさらに低コスト

米商務省Howard Lutnick長官の要請を受け、OpenAIはGPT-5.6の公開展開を制限。企業顧客への段階的ロールアウトとなり、政府がケースバイケースでアクセス承認を行う形式になった。OpenAIは声明で「政府アクセスのプロセスが長期のデフォルトになるべきではない。最高のツールをユーザー、開発者、企業、サイバー防衛担当者全球的なパートナーから遠ざけることになる」と批判した。

**技術的特徴:**
- コード生成・修正能力の向上
- 長いマルチステップタスクでの文脈維持
- エージェント的な自律動作に対応

---

## Anthropic、Mythos 5を部分復活 — 100社以上への授權合意

Anthropicは6月26日、約2週間のTrump政権との交渉を経て、Mythos 5の企業・政府機関向けライセンスを修正版で再開ことで合意した。商務省Lutnick長官からAnthropic共同創業者のTom Brown氏に送られた書簡で確認。

書は「ライセンス要件の修正」を指摘。100社以上の企業・政府機関がMythos 5（および非米国従業員を含む）の利用を承認されたことになる。ただし一般向けフラグシップモデル**Fable 5**の公開展開は依然不透明。Trump政権のFriday夕方の最後通牒から2週間、Anthropicは幹部をWashingtonに多数派遣し対応した。

背後には中国Alibabaによる「Claude史上最大のクローン攻撃」がある。AnthropicはAlibabaがTrump政権の輸出規制を迭してClaudeの能力窃盗を行ったと主張していた。

---

## OpenAI独自チップ「Jalapeño」 — Nvidia依存からの脱却加速

OpenAIはBroadcomと共同開発した推論用カスタムチップ**「Jalapeño」**の詳細を明かした。TechCrunchによると、Google（TPUs）、Apple、SpaceXに続き、OpenAIも独自チップ開発に踏み切った。

背景には**推論コストの劇的な削減**への要請がある。OpenAIは年間約$40億〜50億のGPUコストを支えており、NvidiaのH100/H200への依存が構造的なリスクとなっている。Jalapeñoは訓練用ではなく**推論ワークロード特化**の設計。MetaもLlamaシリーズの開発で知られる独自チップを検討中とされ、Big Tech全体の垂直統合トレンドが加速している。

**技術的ポイント:**
- 訓練済みモデルの推論時のコスト削減为目的
- Broadcomとの協業による設計
- Nvidia H100→Jalapeñoへのワークロード分流

---

## Anthropic Cowork — フォルダベースでAI Agentを非開発者に開放

AnthropicはmacOSデスクトップアプリ向けに新機能**「Cowork」**を開始した。Claude Max契約者（$100〜$200/月）専用の研究プレビューで、フォルダにアクセス権限を付与したAI Agentがファイルの読み書き・編集・作成を行う。

**特徴:**
- フォルダベースのサンドボックス設計で安全性を確保
- レシート画像から経費レポート生成、散らかったDownloadsフォルダの自動整理など
- Claude Codeの技術基盤を共有するが、命令行不要で非技術者も利用可能
- スキル・接続子・Chrome拡張との統合

**開発者視点での意義:** Claude Codeが開発者を中心に爆発的に普及し「ヴァケーション調査にも使う」との声が寄せられたことを受けAnthropicが着想。10日半で構築されたともされ、Claude Code自体がCowork開発に大部分を貢献した可能性がある。

Anthropicは同時に「AI Agentがファイルを削除する可能性もある」として警戒を呼びかけており、プロンプトインジェクション攻撃のリスクにも言及。Windows版とクロスデバイス同期は今後対応予定。

---

## Patronus AIが5,000万美元調達 — 「デジタル世界」でAgent負荷テスト

AI安全性評価のPatronus AIがSeries Bで**5,000万美元**を調達した。デジタル環境を構築し、AI Agentが実際のシナリオでどのように動作するかを体系的にテストするプラットフォームの開発を進める。

**Patronus AIの技術:**
- 金融、法律、コード検証などのドメインでAgent評価
- 合成データ生成で検証済みプロンプトの拡張
- 企業向けの安全性・コンプライアンス評価

---

## Google、25年ぶり検索ボックス大刷新 — AI Mode統合で対話型検索に

Googleは6月25日、25年ぶりに検索ボックスのデザイン刷新を正式発表。以下の新機能を含む:

**新機能:**
- **動的に拡張する検索ボックス**: 長い会話的な質問にも対応
- **マルチモーダル入力**: 画像、PDF、ビデオ、Chromeタブからのドラッグ＆ドロップ
- **AI Overviews + AI Modeの統合**: ユーザーが意識せずに両モードをシームレスに行き来
- **Gemini 3.5 Flash採用**: 高速出力（4倍速）と高品質を両立
- **生成的UI**: 検索結果で動的にカスタムヴィジュアライゼーションを生成
- **情報Agent**: ユーザーが指定した条件をウェブ上で24時間監視し、合致時に通知

AI Modeの月間ユーザーは1億人を突破、クエリ数は四半期ごとに倍増。Googleは2026年の設備投資を約$1,800億〜$1,900億と、過去4年間の約6倍に拡大する。

---

## 参考リンク

- [TechCrunch: OpenAI limits GPT-5.6 rollout after government request](https://techcrunch.com/2026/06/26/openai-limits-gpt-5-6-rollout-after-government-request-says-restrictions-shouldnt-be-the-norm/)
- [The Verge: Anthropic's Mythos 5 is back](https://www.theverge.com/ai-artificial-intelligence/958458/anthropic-mythos-5-is-back-trump-negotiations)
- [TechCrunch: Why everyone from OpenAI to SpaceX is building their own chips](https://techcrunch.com/video/why-everyone-from-openai-to-spacex-is-building-their-own-chips-and-turning-up-the-heat-on-nvidia/)
- [VentureBeat: Railway secures $100 million](https://venturebeat.com/infrastructure/railway-secures-usd100-million-to-challenge-aws-with-ai-native-cloud)
- [VentureBeat: Google redesigned the search box](https://venturebeat.com/technology/google-just-redesigned-the-search-box-for-the-first-time-in-25-years-heres-why-it-matters-more-than-you-think)
- [Ars Technica: Anthropic says Alibaba must be punished](https://arstechnica.com/tech-policy/2026/06/anthropic-claims-alibaba-defied-trump-to-attack-claude-and-steal-capabilities/)

---

*（本文の情報は2026年6月27日時点のものです）*
