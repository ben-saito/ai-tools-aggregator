# AI開発ニュース週間まとめ（2026年7月第2週）

2026年7月上旬、AI業界は法廷闘争、米大手のエネルギー問題、そしてAIエージェントの急速な能力向上など、複数の重大トピックが同時進行している。今週はAppleがOpenAIを提訴、MetaがInstagramのAI機能を停止、Remote Labor Indexで経済的タスクの自動化率が4ヶ月で4倍に上昇するなど、生成AIを取り巻く状況が急速に変化している。

---

## AppleがOpenAIを提訴 — ハードウェア企業のAI企業への知財攻防

Appleは2026年7月10日、OpenAIおよびJony Ive氏が率いるハードウェアスタートアップIO Products、個人であるTang Tan（OpenAI最高ハードウェア責任者）、Chang Liuを相手取り、貿易的秘密の盗用と契約違反を理由として提訴した。

Appleの主張によれば、OpenAIに跳槽した元Apple従業員が「Appleの貿易的秘密を盗み取るというパターンが確認された」という。訴状では、iPhoneやMacの設計・製造に関する機密情報をOpenAIが不正に入手したと主張している。

注目すべきは、OpenAIが2025年にIO Products（Jony Ive氏のスタートアップ）を買収している点だ。Appleはこの買収を通じて、OpenAIがAppleのハードウェア知見にアクセスしようとしていると警戒しているものと推測される。

**開発者視点**から見ると、この訴訟はAI企業vs従来型テック企業の知的所有権争いが次の段階に入ったことを示唆している。AI企業が高い能力を獲得する一方で、人才の流動化に伴う機密情報管理のあり方が問われている。

---

## Meta、Instagramの「AI深層偽造」機能を停止 — 権利者同意なく公共アカウントの画像をAI生成

Metaは2026年7月10日、Instagramで公開アカウントの投稿に@-mentionすることでAI画像を生成できる機能を停止した。この機能は、同社が同日中に公開したMuse Image AIモデルの中核的な機能として発表されていた。

問題となったのは、公共アカウントのコンテンツを所有者の許可なくAI画像生成に利用できる設計だった点。大きな反発を受け、Metaは機能のを見つめ直しの上で停止を決定。「公共のInstagramアカウントを@-mentionすることでAI画像を生成するという試みだったが、账户所有者の権利を 충분히配慮していなかった」としている。

Adam Mosseri（Instagram責任者）は同日、別のインタビューの中で「AIコンテンツが好きでないなら、フィードに入れるべきではない」と発言しつつも、「フィルタリングではなく、ラベル表示によってユーザーに選択させるべき」と主張した。

**技術的側面**として、Muse ImageはMetaの新しい画像生成モデルであり、 Stability AIのStable Diffusionなどと同様に拡散モデルアーキテクチャを採用していると推測される。公共アカウントの画像をプロンプトとして流用できる点は、スタイル模倣や深層偽造（deepfake）のリスクがあり、EUのAI Act等の規制枠組みでも問題となり得る。

---

## Import AI 464より — AI agentsの急速な経済的自動化とGPUカーネル自動生成

Jack Clark氏配信のImport AI最新号（2026年7月6日号）では、3つの重要な技術動向が報告されている。

### Fable、GPUカーネルを自律生成 — 人の書いた最速カーネルを上回る

AI企業Fableは、KernelBench-Megaにおいて「初めて本物の（かつ最速の）メガカーネルを記述した」とされている。NVIDIA RTX PRO 6000 Blackwell上で、PyTorchの最適化ベースライン 대비**18.71倍の高速化**を達成。比較としてClaude Opus 4.8（Triton使用）が14.4倍、GLM-5.2が11.14倍だった。

特筆すべきは、Fableの解法では「decodeされたトークンごとに正確に1つのcooperativeカーネル起動のみ」で動作している点。他のすべてのエントリーは1トークンあたり4〜14の別カーネル起動に分解していた。この効率的なカーネル設計は、自律的なAI R&D自動化における重要なマイルストーンとされ、**再帰的自己改善（recursive self-improvement）**に近づく兆候として注目される。

### Remote Labor Index — 経済的タスクの自動化率が4ヶ月間で4倍に

Center for AI Safety（CAIS）とScale Labsが主宰するRemote Labor Index（RLI）の7月アップデートによると、**2025年10月のローンチ時2.5%から2026年7月は16.1%** に上昇している。評価対象は3D CAD、アーキテクチャ、グラフィックデザイン、動画制作、アニメーション、オーディオ、データ分析、Webアプリケーションなどだ。

評価対象の具体例：
- **リングデザイン**: 客户的既存の婚約指輪を垫減石からマゼライトカットに交換した3Dモデルとフォトリアリスティックレンダリングを生成
- **広告動画**: 「Skyline Tree Services」の60秒2Dアニメーション広告を制作

Frontierモデルの躍進は著しい：GPT-5.5が6.3%、Opus 4.8が8.3%、**Fable 5が16.1%** を達成している。「8ヶ月足らずで4倍以上」は、経済的に有意なAI agentsの進化速度を示す明確な指標だ。

### OSWORLD 2.0 — 1.6時間かかる長編タスクで最高20.6%

香港大学、UCサンディエゴ、哥伦比亚大学、Alibaba Qwen、Ohio State Universityなどの共同研究で、OSWORLD 2.0がリリースされた。前身の1.0（中央値2分）在りは、中央値**1.6時間**のタスクbéce108の長距離タスクで構成される。69.6%のタスクは人間にとって1時間以上かかると推定される。

サポートソフトウェアはLibreOffice、GIMP、VLC、Thunderbird、VS Code、Chrome뿐とならず、Slack、LinkedIn、GitLab、Overleaf、Zotero、AWS Consoleなど実環境を広範囲に涵盖。

現在の最高性能はClaude Opus 4.8（最大思考＋バッチツール起動使用）で**二値精度20.6%、部分スコア精度54.8%** にとどまる。だがOSWORLD 1.0では2025年7月最高約30%だったが、2026年6月にはMiniMax M3で約75%を達成しており、2.0でも同様の改善傾向が見込まれる。

---

## Sunrun、家庭にAIデータセンター节点を導入 — 分散型AIコンピューティングの試み

エネルギー企業Sunrunは2026年7月10日、家庭にAIコンピュート节点を導入する「分散型AIデータセンター」パイロットプログラムを発表した。太陽光＋蓄電池システムを設置済みの顧客的家庭に、compute nodeを配置し、顧客は参加に対する報酬を受け取る。

Sunrunはこの分散型コンピュート力をAI企業に販売することで収益化する計画だ。データセンター用地と電力の確保が困難を続けるAI産業に対し、家庭の余剰電力とスペースを活用する新たなアプローチとして注目されている。

**インフラ視点**では、GPUクラスタの分散配置におけるネットワーク帯域幅とレイテンシの課題、家庭環境での冷却と 전력保障など、技術的ハードルがまだ多い。深層学習などのワークロード向きなのか推論向きなのかも興味深い観点だ。

---

## MicrosoftのCO2排出量、2025年に25%増加

Microsoftの持続可能性レポート2026によると、同社のCO2排出量は2025年に25%増加した。AIデータセンター向けの電力需要急増が主因とされる。Microsoftは2025年中に1GWの再生可能エネルギー契約を複数締結しているが、データセンター拡大の速度が依然として排出量増加を上回っている状況だ。

これはGoogleも直面する課題であり、Googleは2025年に排出量が32%増加したと報告している。AIの訓練と推論に必要なGPU集群の拡大が、海底光ファイバーからデータセンターの電力構成まで、AI産業のサステナビリティ戦略に疑問を投げかけている。

---

## 参考リンク

- [Meta turns off the Instagram feature that let users make AI deepfakes of public accounts (The Verge)](https://www.theverge.com/tech/964416/meta-instagram-ai-muse-image-deepfakes)
- [Apple sues OpenAI for allegedly stealing hardware secrets (The Verge)](https://www.theverge.com/tech/964350/apple-openai-lawsuit-trade-secrets)
- [Would you host part of an AI data center in your home? (The Verge)](https://www.theverge.com/ai-artificial-intelligence/963930/sunrun-distributed-ai-data-center)
- [Microsoft's carbon emissions went up 25 percent last year (The Verge)](https://www.theverge.com/tech/963728/microsoft-sustainability-report-2026)
- [Import AI 464: Fable writes GPU kernels; AI automation; and analog computation](https://importai.substack.com/p/import-ai-464-fables-writes-gpu-kernels)
- [OSWORLD 2.0 Official](https://osworld-v2.xlang.ai/)
- [KernelBench Mega Leaderboard](https://kernelbench.com/mega)

---

*（本文の情報は2026年7月11日時点のものです）*
