# AI開発ニュースまとめ（2026年6月第3週）

AI業界は輸出規制の動き、米国の世論変化、そして高速推論実現という3つの大きな潮流で動いている。今週はAnthropicの輸出規制対応、Midjourneyの医療領域進出、Xiaomiの1000 tokens/s達成など、多面的な展開が印象的だった。

---

## Anthropic、輸出規制によりFable 5とMythos 5へのアクセス遮断

Trump政権が突然、すべての米国籍を持たないユーザーおよび従業員へのアクセス遮断を命じたことを受け、Anthropicは最新のAIモデルである**Fable 5**と**Mythos 5**へのアクセスを遮断せざるを得なくなった。この措置は「国家安全保障上の権限」を根拠としており、米国の輸出管理規制を使用してAIモデルへのアクセスを制限したのは初めてのことだと見られている。

Anthropicはウェブサイト上で、政府が「輸出管理」を正当化理由として引用していると声明を発表した。現時点では、Trump政権がこの措置の法的根拠を公に説明していない情况下、Anthropicはモデルのオンライン復帰に向けて今週大部分を費やしている。

この一件は、AIモデルの国際的な配信における法的不確実性を浮き彫りにした。 frontier AI開発において、米国の輸出規制がどのような影響を与えるかという根本的な問題提起も含んでいる。

---

## Midjourney、医療用、全身超音波スキャナー「The Midjourney Scanner」を発表

MidjourneyのCEO **David Holz**氏は、同社の最初のハードウェア製品である「**The Midjourney Scanner**」をお披露目した。これは「猫画像を生成する」から始まった公司在り方を大幅に変える製品発表となった。

The Midjourney Scannerは、リング状のセンサーを使用した**フルボディ超音波スキャナー**だ。身体の垂直スライスを捉え、筋肉、脂肪、骨、臓器の構成を解析する。Holz氏によれば、年に1回、または毎日でもこのスキャンを受けることが目標であり、「多くの面でMRIに匹敵する画質を達成することを目指す」とのこと。

さらにHolz CEOは 将来的にサンフランシスコにスパを建設する計画も明らかにしたが、「猫画像」から医療器材メーカーへの転換は予想外の事業拡大と言えそうだ。

---

## Pew Research調査：米国の3分の2が「AIは進展速度が速すぎる」と回答

Pew Researchの最新世論調査によると、49%のアメリカ人が少なくとも時々チャットボットを使用していると回答しているが、63%が「AI技術は進展速度が速すぎる」と考えている。

特筆すべきは、AIチャットボットの使用率が2024年の33%から現在では大幅に増加しており、特にChatGPTの使用率は2023年比で2倍となっている。この結果は、**AI導入の急速な拡大と一般市民の間での懸念上昇**が同時に進行していることを示している。

---

## Xiaomi、1000 tokens/秒を達成したMiMo-V2.5-Pro-UltraSpeedを発表

中国Xiaomiは、**1000 tokens/秒**という高速推論を実現したLLM「**MiMo-V2.5-Pro-UltraSpeed**」の詳細を発表した。このモデルはbehind-the-frontierながら、推論速度面では大きな優位性を持つ1兆パラメータモデルだ。

XiaomiはFP4量子化、DFlash（ブロックレベルのマスク付き並列予測を使用した投機的デコーディング手法）、そしてTile AIのスタートアップが開発したTileRTソフトウェアと緊密に連携することで、この高速推論を可能にした。Xiaomiによると、このモデルは「8-GPU commodity node」（ specialized hardwareではなく、Cerebrasのスタートアップと同様のアプローチ）で動作する。

この動きは、**中国企業が輸出規制の影響を受ける中で、hardware性能向上ではなくsoftware/hardware co-designで性能を引き出す方向**に向かっていることを示している。

---

## Sequent、安全性スタートアップ「Scaled Alignment研究所」から誕生

英国AI Security InstituteのAlignmentチームおよびalignment theory startup **Timaeus**の研究者たちが連携し、超知能AIの安全性確保に取り組む新しい非営利研究組織「**Sequent**」を結成した。

Sequentの目標は、「構築前に安全性が確保されるという理論的な証明と一緒に超知能を構築する理想の世界」ではなく、「この理想から大きく離れたところで妥協する必要があるかもしれない現実的な世界で、我々が超知能AIを安全にするalignment技術を開発すること」だと声明で述べた。

Sequentは今後2〜3年で40〜80人の正社員を抱え、最初は1億〜1億5000万ドルの調達を目指す。主な研究方向には、**scalable oversight、learning theory、heuristic arguments、game theory、personas**などが含まれる。再帰的自己改善（RSI）を実現するAIシステムが本当に登場する前に、より良いalignment技術が必要だと主張している。

---

## Cognition、新딩コーディング評価基准「FrontierCode」を発表

Cognition（SWE-Benchを作成した会社）は、新しいハードコーディング評価基准「**FrontierCode**」発表した。最高の結果は、Diamond評価で**Claude Opus 4.8が13.4%**、次いでGPT-5.5が6.3%、Claude Opus 4.7が5.2%という非常に低いスコアだった。

SWE-Benchが2023年10月に導入されて以来、おそらくすでに浸透期に入っており、FrontierCodeがどの程度の期間有用的であり続けるかは不明だ。Jack Clark（Import AI）は、「2027年6月までにDiamondで70%以上を取得するシステムが現れる」と予測している。

FrontierCodeは20人のオープンソース開発者が各タスクに40時間以上を費やして作成した150のタスクで構成されており、Python、Go、TypeScript、JavaScript、Java、C/C++などの言語が含まれる。コードの正確性、テスト品質、スコープ規律、スタイル、コードベースの標準への準拠などを評価する。

---

## Google Cloud、英地方族自治体の計画業務自動化にAIを導入

英国の中央政府は、**Google Cloudの生成AI**を全市町村に展開し、地方計画委員会の業務自動化を進めている。住宅・自治体・地方政府省（MHCLG）および科学・イノベーション・技術省は、2つのMLツール全国展開を確認した。

「**Extract**」アプリケーションは、Gemini基盤モデルを使用して過去のPDF記録からデータを抽出し、市町村ごとに年間約255時間のマニュアルデータ入力を排除する。「**APD（Augmented Planning Decisions）**」プロトタイプは、計画官员の分析助手として4つの主要な行政管理タスクを自動化する：

- Incoming documentationの統合と欠落情報ギャップのフラグ付け
- 関連国家・地方ゾーニング則の特定と政策引用の付与
- Public consultation letterの解析と、利害関係者の異議や過去の判例の要約
- 最終評価レポートのドラフト生成

すべてのアプリケーションにおいて、最終決定は人間の計画官员が就行し、AIはレポートの自動生成のみを行う。

---

## 参考リンク

- [Anthropic got hit by export rules nobody understands - The Verge](https://www.theverge.com/ai-artificial-intelligence/951703/anthropic-shutdown-export-controls)
- [Midjourney Medical goes from generating 'cat images' to full-body ultrasound scans - The Verge](https://www.theverge.com/ai-artificial-intelligence/952011/midjourney-medical-ai-ultrasound-scan)
- [Two-thirds of Americans think AI is advancing too quickly - The Verge](https://www.theverge.com/ai-artificial-intelligence/951653/pew-research-ai-chatbot-usage-advancing-too-quickly)
- [FrontierCode - Cognition](https://cognition.ai/blog/frontier-code)
- [Sequent: Scale and Automation for Higher Confidence in Alignment](https://www.sequent.org/launch)
- [MiMo-V2.5-Pro-UltraSpeed: Pushing 1T-Parameter Model Generation Speed to 1000 TPS - Xiaomi](https://mimo.xiaomi.com/blog/mimo-tilert-1000tps)
- [Google Cloud generative AI automates council planning operations - AI News](https://www.artificialintelligence-news.com/news/google-cloud-generative-ai-automates-council-planning-operations/)

---

*（本文の情報は2026年6月18日時点のものです）*
