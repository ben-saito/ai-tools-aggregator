# AI開発週間ニュース（2026年7月第1週）：Microsoftのコスト最適化の波、AI創薬のPhase III到達、DiscordのMOD課題

2026年7月上旬、AI業界はコスト最適化、AI創薬の現実化、そしてAI介在の問題対応という3つの重要なテーマで進展が見られた。本週はMicrosoftが外部AIへの依存を縮小する動きを鮮明にし、Insilico MedicineのAI設計薬がPhase III試験に進むなど、生成AIの実応用が着実に前進している時期だ。

---

## Microsoft、外部AIへの依存を縮小——自社モデルへの移行が加速

TechCrunchの報道によると、MicrosoftはAIコスト削減の流れに追随し、外部AIモデルへの依存を減少させている。MicrosoftはAzure OpenAI Serviceを通じてOpenAIのモデルを提供してきたが、自社の軽いモデル（lightweight models）をより活用する方向に戦略を転換しつつある。

この動きの背景には、**トークンコストの膨大化**がある。大規模言語モデルの推論には多額のAPIコストがかかり、特にCopilotのような大規模ユーザーに提供する際には巨額の費用が発生する。自社モデルの活用により、Microsoftはこれを最適化できる可能性がある。

この傾向はGoogleやAmazonなど他のテックジャイアントでも相似的動きが見られており、**モデル最適化とコスト効率**が2026年下半期の重要テーマになりそうだ。

---

## Insilico Medicine、AI設計薬をPhase III試験に進める

AI創薬の分野において、Insilico Medicineが肺疾患特化薬「rentosertib」をPhase III試験に進めた。idiopathic pulmonary fibrosis（IPF、特発性肺線維症）を対象としたこの薬は、AIのcomputational drug discoveryによって初めて特定されたものだ。

### 臨床データの概要

- **治験デザイン**: 22カ所の中国臨床サイトで71名の患者をランダム化
- **用量**: 1日1回30mgまたは60mgを12週間投与
- **主要評価項目**: 60mg群で平均FVC（努力肺活量）が+98.4mL改善（プラセボ群は-20.3mL）

### 技術的バックグラウンド

Insilico Medicineのproprietary platform「Pharma.AI」は以下で構成される：

- **PandaOmics**: ゲノムクス、臨床試験データ、学術文献、特許情報を処理し、生物学的ネットワークモデルを構成。TNIK（TRAF2- and NCK-interacting kinase）をIPFの主targetとして同定した
- **生成化学エンジン**: 目的の薬力学적性質を満たす分子候補を設計

注目すべきは、この薬が既存の受容体チロシンキナーゼ経路ではなく、Wnt、TGF-β、Hippo/YAP-TAZ、JNK、NF-κB経路をカバーするTNIKを標的としている点だ。

FDAは2023年2月にこの資産に「Orphan Drug Designation」を付与しており、規制当局の関心も高い。

---

## Discord、AIモデレーションのバグで無害なユーザーに誤BAN

Discordは、AIベースのコンテンツモデレーションシステムにバグがあり、2026年5月から無害な画像に基づいてユーザーを誤ってBANしていたことを認めた。週末に追加で200名のユーザーがBANされ、チームが問題を特定・修正するまで被害が広がった。

この事例は、**AIモデレーションの精度と誤判定の影響**について重要な教訓を提供する。Discordのような大規模プラットフォームでは、1つのバグが数万規模のユーザーに影響を及ぼす可能性があり、AI介在のシステム設計における安全性の重要性が再認識された。

---

## Figma、vibe-codingアプリのチームを取得

FigmaはY Combinator支援を受けたvibe-codingプラットフォームのチームを取得した。vibe-codingは自然言語でコードを生成するAI-assisted codingのパラダイムであり、Figmaのデザインシステムとの統合に向けた戦略的動きと見られる。

取得額は開示されていないが、Figmaはエージェント生成productにも進出しており、デザインから実装へのシームレスなAI活用をさらに推進するものと推測される。

---

## Import AI 464より：GPUカーネル自動生成とAI R&D自動化

Jack Clark的责任編集するImport AIの最新号では、以下の注目すべき技術動向が報告された。

### Fable、GPUカーネルを自動生成——18.71倍高速化

Fableは「KernelBench-Mega」で初めて公式リーダーボードで1位を獲得したmegakernelを記述した。CudaコードによりRTX PRO 6000 Blackwellで最適化されたPyTorch baseline比18.71倍の高速化を達成。これはAIシステムがAI R&Dの基本的なタスク（カーネル設計）を自動化し始めていることを示す重要な指標である。

### リモート労働の自動化率が急上昇

Center for AI SafetyとScale Labsの「Remote Labor Index」によれば、AIシステムのオンラインフリーランスプロジェクト自動化率は2025年10月のLaunch時の2.5%から2026年7月は16.1%に上昇した。Fable 5は16.1%、Opus 4.8は8.3%、GPT-5.5は6.3%を達成している。

評価対象のタスクには、3D＆CAD、アーキテクチャ、グラフィックデザイン、動画・アニメーション、オーディオ、ウェブアプリケーション開発などが含まれる。

### OSWORLD 2.0——長時間Computer-Using AIの評価

108の長時系列タスクを含むOSWORLD 2.0がリリースされた。中央値タスクの完了所需時間に約1.6時間（OSWORLD 1.0の2分対比48倍）が必要となるよう設計されている。各タスクはLibreOffice、GIMP、VLC、Thunderbird、VS Code、Chromeだけでなく、Slack、LinkedIn、GitLab、Overleaf、AWSなどの実環境を含む。

最強設定（Claude Opus 4.8 + 最大思考 + batched tool calls）でもbinary精度20.6%に留まり、長時間タスクへのAIの限界が示されている。

---

## 次の注目ポイント

- **Microsoftのモデル最適化戦略**が他の企業にどう波及するか
- Insilico MedicineのPhase III試験結果（2026年下半期予定）
- AI創薬の規制動向（FDA、EMAの各規制動き）
- OSWORLD 2.0でのClaude Opus 4.8以降のスコア改善軌跡

---

## 参考リンク

- [Microsoft joins AI cost-cutting trend by relying more on its own models (TechCrunch)](https://techcrunch.com/2026/07/07/microsoft-joins-ai-cost-cutting-trend-by-relying-more-on-its-own-models/)
- [Discord admits AI moderation bug wrongfully banned users over harmless images (TechCrunch)](https://techcrunch.com/2026/07/07/discord-admits-ai-moderation-bug-wrongfully-banned-users-over-harmless-images/)
- [Figma acquires team behind a vibe-coding app (TechCrunch)](https://techcrunch.com/2026/07/07/figma-acquires-team-behind-a-vibe-coding-app/)
- [Insilico Medicine advances AI drug for IPF to Phase III trials (AI News)](https://www.artificialintelligence-news.com/news/insilico-medicine-advances-ai-drug-for-ipf-to-phase-iii-trials/)
- [Import AI 464: Fable writes GPU kernels; AI automation; and analog computation](https://importai.substack.com/p/import-ai-464-fables-writes-gpu-kernels)
- [KernelBench Mega Leaderboard](https://kernelbench.com/mega)
- [OSWORLD 2.0 Benchmark](https://osworld-v2.xlang.ai/)

---

*（本文の情報は2026年7月7日〜8日時点のものです）*
