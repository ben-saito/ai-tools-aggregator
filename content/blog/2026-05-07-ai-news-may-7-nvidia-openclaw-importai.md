# AI開発ニュース最新動向（2026年5月7日版）：自律型AI Agent、NVIDIA Ethernet networking、Import AI 455の衝撃

2026年5月第1週、AI業界は **自律型AI Agent** の実用化が急速に進む一方、「AIがAI自身を作り始める」というJack Clark（Import AI編集者）の予測が話題を集めている。NVIDIAはEnterprise Ethernet網の拡張とServiceNowとの協業でAI Agentのエンタープライズ展開を加速。OpenClawはGitHub star 25万超を記録し、オープンソースAI Agent開発の最前線に立っている。

---

## NVIDIA Spectrum-X + MRC：ギガスケールAIネットワークの標準目指す

NVIDIAは5月6日、**Spectrum-X Ethernet + MRC（Multipath Reliable Connection）** の最新状況を公開した。MRCはRDMA転送プロトコルで、単一RDMA接続からのトラフィックを複数のネットワークパスに分散させ、大規模AIトレーニング Fabric のスループット・ロードバランシング・可用性を向上させる。

 ключевой点是:
- **OpenAI、Microsoft、Oracle** が既にMRCをBlackwell世代に採用
- ギガスケールAIトレーニングにおけるネットワーク起因のボトルネックを大幅に削減
- **Microsoft Fairwater** と **Oracle Cloud Infrastructure（OCI）Abilene** データセンターがMRCを採用
- オープン仕様として **Open Compute Project** に登録済み

Sachin Katti（OpenAI）は「Frontierトレーニング运行的持続に不可欠」と評価。NVIDIAはSpectrum-XをAI-First Ethernetの標準的位置づけで展開しており、2026年のAI Factory設計の基盤としている。

---

## ServiceNow × NVIDIA：エンタープライズ自律型AI Agentの協働深化

5月5日、NVIDIAとServiceNowは **Autonomous AI Agents for Enterprises** で新たな協業を発表した。核となるのはServiceNow AI Control Tower + NVIDIA Agent Skillsの連携。

**技術的詳細:**
- **NVIDIA AI-Q Blueprint** でDeep Research Agentを構築、ServiceNow AI Specialistsがコンテキスト収集・情報統合・意思決定支援を実施
- **NVIDIA Agent Toolkit + Nemotron Open Models** でカスタマイズAI Application開発の柔軟性を確保
- **NOWAI-Bench**（エンタープライズAI Agentベンチマークスイート）を共同開発し、 **EnterpriseOps-Gym** で評価。 **Nemotron 3 Super** がオープンソースモデルの中でNo.1
- ベンチマークはマルチステップワークフローに焦点を当て、エンタープライズAIが実際の運用で直面する課題的真实を評価

**トークン経済性の革新:** BlackwellプラットフォームはHopper比で **50x以上のトークン出力/watt** を実現し、100万トークンあたりのコストを約35倍低減。Enterprise AI Agentを何百万ものワークフローにスケールさせる際の経済性が劇的に改善された。

---

## Nemotron 3 Nano Omni：ビジョン・オーディオ・言語を統合した30B混合 experts モデル

4月28日、NVIDIAは **Nemotron 3 Nano Omni** をリリースした。30B-A3B（活性パラメータ3B）の **Hybrid Mixture-of-Experts** アーキテクチャで、ビジョン・オーディオ・言語を единаяモデルで処理。

**主要ターゲットケース:**
1. **Computer Use Agent**: H Companyの最新のComputer Usage Agentがこのモデルを採用し、 **1920×1080ピクセルのネイティブ入力解像度** で高忠実度視覚推論を実現。OSWorldベンチマークで複雑なGUIナビゲーション|score大幅向上
2. **Document Intelligence**: PDF、スプレッドシート、チャート、スクリーンショットを единообработкаし、視覚構造とテキスト内容を连贯的にreasoning
3. **Audio-Video Reasoning**: コールオーディオ+画面記録+データログ并发処理

**ベンチマーク結果:** 同クラスのインタラクティビティを持つ他のオープンOmniモデルと比較して **最大9x高いスループット** を実現。レイテンシ削減とコスト効率で大規模展開に対応する。

---

## OpenClaw：大規模言語モデルによる自律型Long-Running Agentの衝撃

4月30日のブログによれば、OpenClawは2026年初頭に急速な成長を遂げた:
- 2026年1月にGitHub star **10万超** を達成、わずか60日間で **25万 star** に到達しReactを抜いてGitHub史上最高starプロジェクトに
- **自己ホスト型・永続型AIアシスタント** としてローカルまたはプライベートサーバーで実行可能
- 従来のAI Agentがプロンプトでトリガー→定義タスク完了→停止と異なる点として、 **Heartbeat駆動型自律Agent** を実装（定期間隔でタスクリストを評価し、行動または待機）

**NVIDIAの参加:** NVIDIAはOpenClawのセキュリティ強化のため、Peter Steinberger氏（創設者）と協力。モデル分離強化、ローカルデータアクセスの管理強化、コミュニティコード寄稿の確認プロセス改善に貢献。また **NemoClaw**（リファレンス実装）を提供し、OpenClaw + NVIDIA OpenStack Agentを единыйコマンドでインストール可能。

**課題:** セキュリティ研究者は自己ホスト型AIツールのデータ管理・認証・モデル更新について懸念を表明。ローカルデプロイが未修正サーバーインスタンスや悪意のあるコミュニティフォークへの露出リスクをどう低減するかが議論されている。

---

## OpenAI Codex × GPT-5.5：NVIDIA社内での衝撃的成果

4月23日、OpenAIの **GPT-5.5** がCodexに統合されたとNVIDIAが報告。GB200 NVL72ラックスケールシステムで動作し、NVIDIA社内では既に **10,000人以上のNVIDIA社員** がエンジニアリング・製品・法務・財務・人事・営業・開発プログラムで使用。

**具体的な成果:**
- デバッグサイクルが数日→数時間に短縮
- 週単位の実験がvernightで完了
- 自然言語プロンプトからエンドツーエンドの機能を直接出荷
- 以前のレイヤーより強い信頼性と少ない無駄のサイクル

Jensen Huang CEOは全社メール で「 lightspeedにジャンプしましょう。AIの時代へようこそ！」と呼びかけた。CodexはSSH接続で承認済みクラウドVMに接続し、企業の実際のデータでAgentを動作させつつ外部露出を防ぐ設計。

---

## Import AI 455：Jack Clark氏「AI systems are about to start building themselves」

4月（5月4日公開）のImport AI 455号でJack Clark編集者は **60%以上の確率で、2028年までに人間の介在しないAI R&D（次のAIを自律的に構築できる мощныйAIシステム）が実現する** と主張した。

**Clark氏の主要論点:**

1. **Coding Singularityの到来**: SWE-Bench等のベンチマークでAI Coding能力の向上を示し、AI Codingの自動化がResearch Engineeringを自动化する最初の領域になる
2. **Benchmarksの mosaic的評価**: 個別ベンチマークの欠陥を認めた上で、aggregate trendとしての急速な改善を指摘
3. **モデルが次のモデルを訓練**: 非最前線モデルでの「model end-to-end trains its successor」のPoCが1〜2年内に實現する可能性
4. **スケーリング持続**: トレンドが続けば、モデルが人間の研究者に代わって 새로운研究パスの独創的なアイデアを出す可能性

Clark氏自身の言葉:「私はこの見解を書くのを躊躇しています。なぜなら含意がとても大きくて、私はそれらに圧倒されている感じているからです。そして社会は自動化されたAI R&Dの種類有任何の準備ができているかどうか確かではありません。」

---

## MIT Tech Review：Musk v. Altman裁判、AI民主主義、天文学習

5月第1週のMIT Technology Reviewは以下主题を伝えた:

- **The Download（5月6日）**: 海底科学と军事AIチャットボット。AIが海底地形データの解析自動化を進めている事例
- **Musk v. Altman Trial**: 第1週の姿、Musk自身が「だまされた」と主張しAIが人類を殺す可能性に警告。xAIがOpenAIモデルを蒸留していることを認める
- **AI民主主義強化の青写真（5月5日）**: AI民主主義への適用に関する具体的な政策提言

---

## 参考リンク

- [NVIDIA Spectrum-X Ethernet with MRC](https://blogs.nvidia.com/blog/spectrum-x-ethernet-mrc/)
- [ServiceNow × NVIDIA Autonomous AI Agents](https://blogs.nvidia.com/blog/servicenow-autonomous-ai-agents-enterprises/)
- [Nemotron 3 Nano Omni](https://blogs.nvidia.com/blog/nemotron-3-nano-omni-multimodal-ai-agents/)
- [OpenClaw Agents for Organizations](https://blogs.nvidia.com/blog/what-openclaw-agents-mean-for-every-organization/)
- [OpenAI Codex GPT-5.5](https://blogs.nvidia.com/blog/openai-codex-gpt-5-5-ai-agents/)
- [Manufacturing Simulation-First Era](https://blogs.nvidia.com/blog/manufacturing-simulation-first/)
- [Import AI 455: AI systems are about to start building themselves](https://importai.substack.com/ai-systems-are-about-to-start-building)
- [MIT Tech Review: The Download - seafloor science and military chatbots](https://www.technologyreview.com/2026/05/06/1136917/the-download-seafloor-science-military-ai-chatbots/)
- [MIT Tech Review: AI Democracy Blueprint](https://www.technologyreview.com/2026/05/05/1136843/ai-democracy-blueprint/)

---

*本文の情報は2026年5月7日時点のものです。*
