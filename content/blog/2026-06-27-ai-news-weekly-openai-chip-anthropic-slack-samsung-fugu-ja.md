# AI開発ニュースまとめ（2026年6月第4週）——カスタムAIチップ、Slack統合AI、エージェント指向オーケストレーション

2026年6月下旬、AI業界は**カスタムsiliconの加速**、**Slack統合型AIエージェント**、**マルチプロバイダ依存の解消**という3つの大きな潮流に突入している。本稿では、今週注目を集めた主要ニュース4件を技術的な視点から解説する。

---

## OpenAIが独自AIチップ「Jalapeño」をBroadcomと共同開発——推論特化のASICでインフラコストを削減

OpenAIは2026年6月、Broadcomとの協業で自社初の**カスタム推論チップ「Jalapeño」**（コードネーム）を開発したことを明らかにした。Jalapeñoは「Intelligence Processor」と名付けられたLSIで、TSMCが台湾で製造し、Celesticaがボード・ラックシステムを構築する。

### 背景にある財務的な压力

OpenAIの収益性は?**サービス提供コストが常に利益を圧迫している。Nvidiaが高性能プロセッサで?**推定75%の利益率**を記録する一方、OpenAIは?**収益1ドルあたり約33セントの利益**しか確保できていない。2025年のChatGPTサーバー応答コストは?**推定84億ドル**に達し、2026年には?**約140億ドル**まで上昇が見込まれる。8年間の累積コミットメントは?**約1.4兆ドル**に達する。

### アーキテクチャの创新

Jalapeño的最大な特徴は**LLM推論に特化**したASIC設計である。一般的なアクセラレーターと異なり、**データ移動のボトルネックを最小化**するようにcompute、memory、networkingのバランスが設計されている。Broadcomの**TomahawkネットワーキングLSI**がチップに直接統合され、大規模クラスター環境でのプロセス間通信を可能にする。

OpenAIのHardwareプログラム責任者のRichard Ho氏によれば、**理論性能に実際の利用率を近づける**ことを主眼に置いた設計だという。早期サンプルは未定稿の**GPT-5.3-Codex-Sparkモデル**を目標周波数と消費電力で動作させている。

### 垂直統合のフライホイール

この動きはOpenAIを**単なるソフトウェアレイヤーから垂直統合インフラ企業**へと转变させる。AppleがiOSとproprietary hardwareの密な結合で最適化を図るように、OpenAIも**チップアーキテクチャ→ソフトウェアkernel→メモリシステム→ネットワークスケジューリング→アプリ層**のフルスタックを自社制御下に置く。

コスト効率の改善→訓練・推論コスト削減→より高品質で低価格なサービス→ユーザー数・収益増加→次世代インフラへの再投資、という**好循環のフライホイール**が形成される。

**競合比較:** Googleは2015年からTPUを展開し、Nvidiaサプライチェーン以外で**世界のAIコンピューティング能力の約25%**を制御する。Amazonは**100万個以上**のカスタムチップを出荷済み。MetaとMicrosoftも独自のインフラを拡大中である。OpenAIは**10年近くの先行者優位**を持つ競合に対して、**late-mover disadvantage**を克服する必要がある。

---

## Anthropic、Slackに「Claude Tag」ワークプレースAIエージェントを直接組み込み——@メンションで同時業務が可能に

Anthropicは2026年6月、EnterpriseおよびTeamプラン向けに**Claude Tag**のβ版を発表し、Slackチャンネルに直接AIエージェントを配置できる機能を開発した。従来の**個人チャット形式のAIアシスタント**とは一新し、**@Claude**とメンションすることで、チャンネル内の全員がAIエージェントにアクセスできる。

### 技術的アーキテクチャ

Claude Tagの基盤は**Anthropic Opus 4.8エンジン**である。タスクを割り当てると、モデルはoperationを**逐次実行フェーズ**に分割し、接続された企業データベース、ツール、コードレポジトリを活用して作業を完了する。**非同期実行**に対応し、ネットワーク管理者が「ambient」設定を有効にすると、Claude Tagはスレッドを監視し、未解決のタスクを**複数日にわたって追跡**する。

Claude CodeのProduct責任者Cat Wu氏によれば、**同僚にメンションするのと同じ形式でAIにタグ付けできる**という点が大きい。彼女の私人Claude Tag агентаをメールアーカイブに接続し、受信メッセージを分析して緊急度を分類、Slack内に即時アラートを送信させている。

### 社内開発への影響

Anthropicの社内レポートによれば、同社の**内部プロダクトグループではコードの65%**をprivate版のClaude Tagで自動生成している。早期導入企業の実装例としては、**データベース指標へのクエリ**、**アナリティクスデータのパース**、**社内ITサポートチケットの処理**などが報告されている。

### 市場ポジショニング

Anthropicは**650億ドルのシリーズH資金調達**を実施し、**965億ドル**のポストマネーバリュエーションを記録した（競合OpenAIは852億ドル）。企業採用率も**Anthropic 34.4% vs OpenAI 32.3%**と、初めてAnthropicが上回っている。IPOに向けた**S-1の秘密提出**完了也已確認された。

---

## Samsung、3年間のAI利用制限を経てChatGPT EnterpriseとCodexを全社員に開放

Samsung Electronicsは2026年6月、**ChatGPT Enterprise**と**Codex**へのアクセスを全社員に拡大することを発表した。Device Experience（DX）部門の世界の全社員とKoreaの全Samsung Electronics従業員が対象となる。

### 制限からの転換

2023年、Samsungは**外部AIプラットフォームへの機密情報アップロード**の問題を受け、ChatGPTなどの生成AIツールの使用を制限した。3年間の封印の後、**Enterprise版のデータ保護・アクセス制御機能**が整ったことで、全面的な開放に踏み切った。

対象範囲は**ソフトウェア開発、マーケティング、product開発、製造、業務効率化**まで幅広い。情報検索、文書起草、アイデア創出、データ解釈、コード関連作業など、**技術・非技術の両チーム**に解放された。

### Codexの展開

Codexは software development だけでなく、**内部ツールやWebsites、ソフトウェアプロトタイプ、自動化ワークフロー**の構築にも活用される。OpenAIによれば、Codexの**週次アクティブユーザーは500万人**を超え、韓国では2026年2月1日以降、**約800%成長**している。

Harrison Kim氏（OpenAI Korea）は、**Samsungとの契約はOpenAI最大のエンタープライズ展開の一つ**であり、特定の部門に限られず全社的にAIを活用するのが特点だと述べた。

### OpenAIとの戦略的関係

2025年10月、Samsungは**Stargate AIインフラInitiativeの戦略的memoryパートナー**になることを発表。OpenAIのmemory需要は**月に最大90万枚のDRAMウェハ**に達すると予測されている。またSamsung SDSはOpenAIとの**AIデータセンター共同開発**と**ChatGPT Enterprise再販パートナーシップ**も締結している。

---

## Sakana AI、「Fugu」でマルチエージェントオーケストレーションを発表——ベンダーロックインリスクへの対策

日本のAI企業Sakana AIは2026年6月、**Fugu**と呼ばれるマルチエージェントオーケストレーションツールを発表した。単一のOpenAI互換APIエンドポイントからqueryすると、Fuguが**内部で適切なモデルを選択**し、必要に応じて**専門家モデルのチームを調整**して複雑なタスクを解決する。

### アーキテクチャの创新

Fuguのコアは**完全にswappableなエージェントプール**である。特定のプロバイダが**輸出規制やサービス停止**に見舞われても、Fuguは**トラフィックを動的に迂回**させてサービス継続性を維持する。「**AI主権**（AI sovereignty）」を確保するための設計とされる。

**2つのティア:**
- **Fugu Standard** — 低レイテンシを優先。日常的なタスク向けで、Codexなどの開発ツールに直接統合可能。特定のモデルを routing pool から手動で除外することもできる。
- **Fugu Ultra** — 複雑な多段階分析問題向け。学際的な論文再現、文献調査、特許分析などの**最も正確な処理**が求められるタスクに対応する。

### ベンチマーク結果

Sakana AIによれば、Fugu Ultraは**Fable 5、Mythos Preview**などの先行モデルと**科学、工学、推論ベンチマーク**で競合する性能を達成している。オーケストレーション方式により**閉鎖的な先行モデルの性能にアクセスしながら**、**ベンダーロックインリスクと輸出規制露出**を回避できる。

### サイバーセキュリティへの応用

約500名の早期ユーザーが参加したβテストでは、**サイバーセキュリティ重点**の評価でFugu Ultraを活用して**完全なセキュリティ評価サイクルを自動化**する事例が報告されている。

---

## 参考リンク

- [The math behind the OpenAI Jalapeño chip](https://www.artificialintelligence-news.com/news/openai-jasleno-chip/)
- [Anthropic drops 'workplace AI agents' directly inside Slack](https://www.artificialintelligence-news.com/news/anthropic-slack-workplace-ai-agents/)
- [Samsung opens ChatGPT Enterprise and Codex access after AI restrictions](https://www.artificialintelligence-news.com/news/samsung-chatgpt-enterprise-codex-employee-ai-use/)
- [Mitigating vendor lock-in with Sakana AI Fugu multi-agent models](https://www.artificialintelligence-news.com/news/mitigating-vendor-lock-in-sakanа-ai-fugu-multi-agent-models/)

---

*（本文の情報は2026年6月27日時点のものです）*
