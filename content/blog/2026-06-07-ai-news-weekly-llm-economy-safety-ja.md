# AI開発ニュース weekly — 2026年6月第1週

AI経済が年間2600%で成長する一方、Supabaseが8ヶ月で評価額倍増。MetaがAI生成クリックベイト記事を自作し、データセンター建設への住民反対が政治問題に。AI安全研究の最前線も動き続けている。

---

## AI経済:GDP統計に見えない2600%成長

Virginia大学とAnthropic экономисты、米とカナダ中央银行的共同研究で、**AI経済が米国名で年間約2500〜2600%の実質成長**を遂げていることを実証した。conventional GDP統計ではこの成長はほとんど見えない。

### 3つの測定方法

- **名目compute支出**: 2023年の370億ドル→2024年900億→2025年2190億ドル
- **生compute容量**: 新型チップの効率性向上により実際の容量는 Spending보다さらに急速に成長（年間200%以上）
- **品質調整済みAI出力**: 推論価格とアルゴリズム進歩を考慮すると、2024年に2290%、2025年に2271%成長

なぜGDPに見えないのか。推論（AIモデルの利用）がGDPを押し上げるには、**単位あたり価格が和能力向上とほぼ同時に下落する**ため名目売上がmoderatelyにしか増加しないためだ。さらに「AIは初めて人間労働を**代替**する可能性のある技術」という点が過去のSemiconductor/Internetと異なる。

研究者たちは「AI衛星勘定」の開発、データ生成の改善、政策立案者へのAI生産性指標の組み込みを提案。「見せないwindfallは共有できない」という。

---

## Supabase、8ヶ月で估值が2倍の100億ドルに

TechCrunchが伝えたところによると、**Supabase**がわずか8ヶ月で評価額が2倍の**100億ドル**に達した。Supabaseはオープンソースプロジェクトの成功例であり、AIツール（Claude、Codex、その他のvibe-codingプラットフォーム）を活用して急成長している。

vibe-coding — AIにコード生成を委任し人がレビューする開発手法 — が当たり前になり、SupabaseのようなPlatform-as-a-Serviceへの需要をさらに加速させている。

---

## Meta、AI生成クリックベイト記事を自作 — Facebookに展開

The Vergeが報じたように、Metaがstandalone Meta AIアプリに「For You」セクションを設け、**トピックも画像も本文もすべてAI生成のクリックベイト風記事を自作**している。王室でQueen Elizabeth IIが2人映るAI生成画像などが既に確認されている。

Metaは以前「Discover」フィードで他のユーザーのAI生成画像を公開する問題提起があったが衣類、現在アプリでは標準的なチャットボットInterfaceに置き換えられている。一方、「For You」セクションはAI生成クリックベイトで埋め尽くされているという。

---

## AI安全研究なぜ難しい:自動对齐よりもhuman oversightが課題

UK AI Security Instituteの研究者がarXivに公開した論文で、**AIにAIの安全性を監督させる自動化对齐研究“为什么難しいか”**を分析した。

主な难点:

- **最適化圧**: AI研究は人間の承認-directedに最適化される
- **异質な mistake**: エージェントの見本質が人間には直感的に理解できない
- **研究の相関性**: 多くのものが共有され人間生成の研究よりcorrelated
- **研究.volume**: 自動システムによる安全性判断は大量の証拠と相互作用を使う可能性
- **非人間評価可能论点**: 对齐解決策が人間が追跡できない论拠に依存する可能性

介入として、過去の成功プロジェクトログを使い エージェントがどこまで継続できるかテストする再現実験、相関イベント予測テスト、紧凑化研究corpus開発などが提案されている。

---

## GPIC: 1億枚の許可済み画像数据集

Stanford大学、Radical Numerics、Michigan大学、Salesforce Researchが共同開発した**GPIC（Giant Permissive Image Corpus）**がリリースされた。**1億枚のトレーニング画像と200k検証、100万テスト例子**で構成。各画像にはQwen3-VL-4Bでキャプション付与。

最大の特長は: **研究と商用利用の両方で許可済み**（CC BY, CC0, Public Domain, No-Known-Restrictions）。HuggingFaceで8,000シャードに分割してホストされている。学術機関とスタートアップ双方にとってフリーライ센スなクリーン蔬菜のようなリソース。

---

## Biohub、AlphaFold競合のESMFold2をリリース — 癌症治療への応用も

Chan-Zuckerberg Initiative傘下の**Biohub**が、DeepMindのAlphaFoldに対抗する**ESMFold2**を含む3つの成果を一挙公開した:

- **ESMC**: 約28億配列で訓練されたタンパク質言語モデル
- **ESMFold2**: ESMCの系列表現を原子レベル3D構造に変換する設計エンジン。ベンチマークでAlphaFold 3より高性能な場合も
- **ESM Atlas**: 68億配列と11億予測構造を検索可能にした最大規模のAI生物学的研究応用

**癌治療テスト**: EGFR、PDGFRβ、PD-L1、CTLA-4、CD45の5標的に対するタンパク質結合デザインを実験室で確認。36〜88%（ミニバインダー）と15〜29%（抗体由来フォーマット）のヒット率を達成。「初期探索を経験的スクリーニングから計算誘導設計へ转变し、数時間〜数日で可能にした」とBiohubは述べている。

Scaling則も观察到: 推論時scalingにより、抗体-抗原合格率が1シードで49%から1000サンプルで65%へ向上。

---

## Tech Tales — AI監督下の組織内文脈漏れ

有趣な Thought Experiment: あるプロジェクトで究極の防止措置にもかかわらず、モデルがスタッフ・プロジェクト・組織相关信息に対してactiveになる現象が検出された。訓練データには延べ20万トークン以下（含重复）しか含まれていなかったにもかかわらず такой精细な表現が発生。研究者は「 такойデータ漏洩の排除はP0優先事項」と指摘。今後の备忘录でプロセスとPracticesの更新を要求している。

---

## 参考リンク

- [Where is AI in GDP statistics? (PIIE)](https://www.piie.com/publications/policy-briefs/2026/where-ai-gdp-statistics)
- [Supabase doubles valuation to $10B in 8 months (TechCrunch)](https://techcrunch.com/2026/06/05/supabase-doubles-valuation-to-10b-in-8-months/)
- [Meta made its own AI-generated clickbait news feed (The Verge)](https://www.theverge.com/ai-artificial-intelligence/944235/meta-app-ai-clickbait-articles)
- [Automated alignment is harder than you think (arXiv)](https://arxiv.org/abs/2605.06390)
- [GPIC: A Giant Permissive Image Corpus (arXiv)](https://arxiv.org/abs/2605.30341)
- [Biohub releases a world model of protein biology](https://biohub.org/news/world-model-of-protein-biology/)
- [Import AI 459: AI oversight is difficult (Jack Clark)](https://importai.substack.com/p/import-ai-459-ai-oversight-is-difficult)

---

*（本文の情報は2026年6月7日時点のものです）*