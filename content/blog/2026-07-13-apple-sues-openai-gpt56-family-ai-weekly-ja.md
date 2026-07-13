# Apple、OpenAIを提訴——今週のAI開発ニュースまとめ（2026年7月第2週）

AppleとOpenAIの間に新たな法廷闘争が浮上した。AppleはOpenAIを秘密情報盗用で提訴し、AI業界に波紋を広げている。一方、OpenAIはGPT-5.6ファミリーを発表し、Microsoft Copilotとの継続的なパートナーシップを強調。MetaはInstagram上の Controversial AI機能を撤回ldb。以下、今週の最重要AI開発ニュースをまとめる。

---

## AppleがOpenAIを秘密情報盗用で提訴

Appleは7月10日、OpenAIを相手取り、**貿易秘密の窃取**を理由とする訴訟を提起した。TechCrunchの報道によれば、Apple側はOpenAIのシニアリーダーを含む幹部、特に長い期間Appleに在籍した元従業員がこの不正行為を指示したと主張している。

この訴訟は、両社間の緊張関係が表面化した象徴的な出来事だ。Appleはかねてより独自のAI戦略（Apple Intelligence）を推進してきたが、ChatGPT統合をめぐるパートナーシップの中で起きた今回の訴訟は、AI技術者の引き抜きや情報管理の問題が企業間対立に発展したケースとして注目される。

**開発者視点でのポイント:**
- Appleの独自AI開発にとって、OpenAIとの法廷闘争は戦略的な判断に影響する可能性
- 秘密情報管理の質がAI企業間の信頼構築においていかに重要かを示す事例
- 今後の企業AI導入において、ベンダー選定のリスク管理が変わる可能性

---

## OpenAI、GPT-5.6ファミリーを発表——Microsoft Copilotとの継続明記

OpenAIは7月9日、**GPT-5.6ファミリー**正式発表した。この新モデルはサイバーセキュリティを含む幅広い領域で改善を果たしたとされている。注目すべきは、Microsoft Copilot 365との継続的なパートナーシップを明確にした点だ。「GPT 5.6はMicrosoft Copilotの『優先モデル』」として位置づけられ、両社の関係が崩れかけたという観測を一掃した。

また、Fidji Simo氏（OpenAI No.2エグゼクティブ）が医療休暇を経て退任を発表し、リーダーシップ真空が生じる敏腕な時期での新モデルファミリー投入となった。

**技術的詳細:**
- セキュリティ強化に重点を置いた新アーキテクチャ
- マルチモーダル能力の拡張
- 推論効率とコスト最適化の改善

---

## Meta、InstagramのControversial AI機能を撤回——ユーザー反発受け

Metaは7月10日、Instagram上で展開していた**Controversial AI機能**を撤回した。同社はブログ投稿において、「公的コンテンツこの機能のために参照されることをユーザーが制御できるツールを提供することが意図だった」と説明。だがユーザーからのフィードバックを受け、「この機能は目標を達成できなかった」として削除を決定した。

**背景:**
- ユーザーのプライバシーとコンテンツ権利への懸念
- AIによるクリエイティブツールの提供に関する倫理的課題
- ソーシャルメディアプラットフォームにおけるAI機能の適切範囲

---

## Hugging Face CEO「オープンソースAIはかつてないほど重要」

TechCrunch Podcast出演したHugging Face CEO **Clem Delangue**氏は、オープンソースAIの重要性について語った。同社は「AIのGitHub」として成長し、現在Fortune 500企業の約半数が利用している。

Delangue氏によると、企業はAIを「レンタル」時代から「所有」時代へと移行しているという。オープンソースモデルの灵活性とコスト効率を踏まえ、エンタープライズにおけるAI導入戦略の見直しが進んでいる。

---

## Import AIから：AIがGPUカーネルを自律開発、RSIループの始まりか

AI研究者向けニュースレターImport AI的最新号では、いくつかの重要な技術的マイルストーンが報告されている。

### FableがGPUカーネルを自律開発——18.71倍高速化

**Fable**はRTX PRO 6000 Blackwell上でCUDAコードを書き、PyTorchベースラインと比較して**18.71倍高速化**を達成した。これは「KernelBench-Mega」で提出された中で最も高速な「メガカーネル」であり、ベンチマーク維持者称する「最初の本格的な成果」という。

重要なのは、このソリューションが「デコードされたトークンごとに厳密に1つの協調カーネルランチ」を使用していること。他のエントリーは4〜14の別カーネルランチを使用していた。

### リモート労働の自動化率が急上昇

Center for AI SafetyとScale Labsの研究によれば、AIシステムのオンラインフリーランスプロジェクト自動化率は2025年10月の launch時の**2.5%**から2026年7月には**16.1%**へと上昇した。評価されたタスクには3D＆CAD、グラフィックデザイン、動画制作、ウェブアプリケーション開発などが含まれる。

### OSWORLD 2.0——長時間のコンピュータ利用タスク

研究者グループは**OSWORLD 2.0**をリリースした。このベンチマークは、AIシステムがマルチステップで複雑なコンピュータタスクをどの程度実行できるかを評価するもの。タスクの複雑さは前版の48倍で，中央値作業時間が2分から**1.6時間**に増加している。

---

##  参考リンク

- [Apple sues OpenAI over alleged trade secret theft (TechCrunch)](https://techcrunch.com/2026/07/10/apple-sues-openai-over-alleged-trade-secret-theft/)
- [OpenAI launches its new family of models with GPT-5.6 (TechCrunch)](https://techcrunch.com/2026/07/09/openai-launches-its-new-family-of-models-with-gpt-5-6/)
- [Meta removes controversial AI feature on Instagram after backlash (TechCrunch)](https://techcrunch.com/2026/07/10/meta-removes-controversial-ai-feature-on-instagram-after-backlash/)
- [Open source AI matters more than ever (TechCrunch)](https://techcrunch.com/podcast/open-source-ai-matters-more-than-ever-according-to-hugging-faces-clem-delangue/)
- [Import AI 464: Fable writes GPU kernels (Import AI)](https://importai.substack.com/p/import-ai-464-fables-writes-gpu-kernels)

---

*本文の情報は2026年7月13日時点のものです。*
