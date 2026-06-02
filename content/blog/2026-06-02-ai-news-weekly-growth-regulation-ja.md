# AI開発ニュースまとめ（2026年6月2日号）

2026年6月に入り、AI分野の技術的進歩と経済的インパクトの両面で重要な展開が目立っている。米国AI経済の成長率が年間2,000%超という推定結果が発表され、従来のGDP統計がAIの経済的貢献を過小評価している可能性が指摘された。また、MicrosoftがAIエージェント用のOSレベルサンドボックス「MXC」を発表し、OpenAIやNvidiaがすでに採用を表明しているなど、エージェントAIの安全性と実用性に関する動きも加速している。

---

## 米国AI経済の成長率は年間約2,600%、だがGDP統計には現れない

Virginia大学とAnthropic的经济学者たち、Bank of Canadaの共同研究によると、米国の「AI経済」は2025年に 名目GDP推定約2,500億ドルに達し、品質調整後で年間約2,600%という前例のない成長率を迎げている。しかし、この劇的な成長は従来のGDP統計、ほとんど見えず、**「風当たり可以被視ない 富は共有できない」**という問題提起がされている。

研究チームはAI経済を測定する3つのアプローチを提示している：

- **名目演算支出**: 米国は2023年の370億ドルから2024年の900億ドル、2025年には2,190億ドルへと急増
- **生演算容量**: 新しいチップの効率性により、実際の容量は支出以上の速度で成長（年間200%以上）
- **品質調整済みAI出力**: 推論価格と訓練コストの低下を考慮すると、2024年に約2,290%、2025年に約2,271%の成長

注目すべきは、AIが従来の技術（半導体、インターネット）と異なり、**人間の労働に対する代替而不是補完**になり得る初めての技術である点。従来の統計局のアプローチでは、この変化を捉えきれず、税法改正や主権福祉基金などの政策対応が遅れるリスクが指摘されている。

研究者たちは「AI衛星勘定（satellite accounts）」の開発と、政策立案者へのAI生産能力指標の組み込みを提言している。

---

## Microsoft、AIエージェント用のOSレベルサンドボックス「MXC」を発表

MicrosoftはBuild開発者カンファレンスにおいて、AIエージェント向けのOSレベルサンドボックス「MXC（Microsoft Extensible Container）」を正式に発表した。OpenAIとNvidiaがすでに採用を表明しており、エージェントAIの隔離と安全な実行環境を提供する。

MXCは、AIエージェントがシステムリソースや他のエージェントに無制御にアクセスすることを防止し、悪意のある」や「巴黎的な動作」を封じ込めることを主目的とする。従来のコンテナ技術と比較して、プロセス間通信やファイルシステムへのアクセス制御など、より細粒度の権限管理が可能。

Microsoft IQとRayfinという関連 제품 также紹介され、これら组合せて企业環境におけるAIエージェントの展開を管理できるフレームワークが構築されつつある。

---

## OpenAI、Codexアップデートでエージェントによる対話型エンタープライズワークスペース構築をサポート

OpenAIはCodexの大幅アップデートを発表し、エージェントが**Sites**機能とロール別プラグインを通じて対話型のエンタープライズワークスペースを構築できるようになった。このアップデートにより、AIエージェントは単一のタスク実行から、本格的なビジネスプロセスの自動化へと進化できる。

ユーザーは自分の業務ニーズに合わせたカスタムエージェントを展開でき、たとえば人事、物流、財務などの部門別に專門化されたエージェントが、相互に連携して複雑なワークフローを処理する。

---

## BiohubがAlphaFold3競合モデル「ESMFold2」をリリース、がんで治療標的へのアプローチを変革

Priscilla ChanとMark Zuckerbergが設立したBiohubは、DeepMindのAlphaFold3に直接競合するタンパク質構造予測モデル**ESMFold2**をリリースした。ESMFold2はAlphaFold3と比較してベンチマークで優れるか同等の性能を持ち、Biohubはこれを「生命の世界モデル」と表現している。

ESMC（言語モデル）とESMFold2（設計エンジン）、ESM Atlas（6.8億のタンパク質配列と11億の予測構造を検索可能）の3つで構成され、EGFRやPD-L1などのがん関連標的に対する新しいタンパク質バインダーの設計に成功している。36〜88%（ミニバインダー）および15〜29%（抗体由来フォーマット）のヒット率を達成し、実験室での確認に至った。

研究者たちはスケーリング則も観察しており、モデルパラメータ数と計算量が増えるほど表現の品質が向上することを確認している。

---

## 100枚の画像を公開ライセンスで公開：「GPIC」データセット

Stanford大学、Radical Numerics、University of Michigan、Salesforce Researchの研究者が、**1億枚の許容的ライセンス画像数据集「GPIC（Giant Permissive Image Corpus）」**をリリースした。すべての画像は研究と商用利用の両方で許可されており、Hugging Faceで公開されている。

画像にはQwen3-VL-4Bで生成されたキャプションが添えられ、FlickrとWikimediaのCC BY、CC0、パブリックドメイン、既知の制限なしの画像のみを採用している。

---

## AI Safety研究院「自動Alignment研究は期待ほど簡単ではない」と指摘

英国AI Security Instituteの研究者は、**超人的AIの安全性をAIで確保する「自動Alignment研究」**がなぜ期待以上に難しいかを詳細に分析した論文を発表した。

論文によると、自動でAlignment研究させる場合に問題となるのは：错误が人間より見つけにくい」「AI研究成果同士の相関が高い」「人間が描けない議論に依存するAlignment解決策がある」など。

対策としては、再現実験、Agents予測性能のテスト、レッドチーミング自動Alignmentプログラムなどが提言されている。

---

## VentureBeatのその他の注目トピック

- **「Soloファウンダーの設計ボトルネックはすでに解決」**: AIが一人で製品開発する際のデザイン工程を大幅に短縮
- **Zipの新しいAIエージェント**: 財務チームが個人利用のChatGPTに契約をアップロードするのを防止
- **AIエージェントの課題**: 「信頼できる間違答案」を生成し続ける問題 -- コンテキストレイヤーが次のエンタープライズAIの課題に

---

## 参考リンク

- [Where is AI in GDP statistics? (PIIE)](https://www.piie.com/publications/policy-briefs/2026/where-ai-gdp-statistics)
- [Microsoft MXC Announcement (VentureBeat)](https://venturebeat.com/security/microsoft-launches-mxc-an-os-level-sandbox-for-ai-agents-with-openai-and-nvidia-already-on-board)
- [OpenAI Codex Sites (VentureBeat)](https://venturebeat.com/orchestration/openais-codex-update-lets-agents-build-interactive-enterprise-workspaces-via-sites-and-role-specific-plugins)
- [Biohub World Model of Protein Biology](https://biohub.org/news/world-model-of-protein-biology/)
- [GPIC Dataset (Hugging Face)](https://huggingface.co/datasets/stanford-vision-lab/gpic)
- [Automated Alignment is Harder Than You Think (arXiv)](https://arxiv.org/abs/2605.06390)

---

*（本文の情報は2026年6月2日時点のものです）*