# AI開発最新ニュース 2026年6月第1週

AI業界は周末も止まらない。今週はMetaの有料AIエージェント「Hatch」、xAIのClaude学習疑惑、GoogleとSpaceXの920億ドル/月コンピュート契約、BiohubのAlphaFold対抗モデルなど、大型トピックが立て込んだ。開発者視点での注目ポイントをお届けする。

---

## Meta、有料AIエージェント「Hatch」を月200ドルで提供へ

Metaは自然言語で指示するだけでタスクを自動化するAIエージェント「**Hatch**」を開発中で、月額最大200ドルの有料製品として投入する計画を進めている。ユーザーはシンプルな言葉で需求を入力すれば、Hatchが动作するツールを構築し、予定调整やメール送信などを実行する。

Mark ZuckerbergCEOはこの製品を广告意外的収益源の柱と位置付けており、巨額のAI投资を回収する戦略の一環として捉えている。Metaにとって初の有料AI製品となり、従来の「免费＋广告」モデルから大きく方针を转变する可能性がある。

---

## xAI、Anthropic Claudeの出力を用いてCodingモデル训练か

Elon Musk率いるxAIが、AnthropicのClaudeを使って独自のCodingモデルを训练していたと伝えられた。Anthropicがアクセスを打ち切った後もBlackbox AIサービス越しに継続していたとされる。

興味深いのは、xAIのプリトレーニングチームが5人未満に缩小し、複数のリーダーが離脱したという内部状況だ。Muskが調達したcomputingリソースは الآنAnthropicやGoogleにレンシングされており、肝心の自社モデル開発には十分に活用されていない疑惑が浮上している。

---

## 音声モデル每0.4秒で「話すか沉默か」を判断する新OSSモデル

新しいオープンソースの音声処理モデルが注目を集めている。このモデルは**常時リスニング**状態で、0.4秒ごとに「発話するか沉默を維持するか」を判断する。自然な对话흐름を実現しながら、不要な割り込みを減らす设计が特徴だ。

リアクション速度と意图判断の精度のバランスが求められ、エッジデバイス上での動作も视野に入れた轻量化が图られている。音声AIアシスタントのユーザビリティ向上に貢献する可能性のあるアプローチとして、OSSコミュニティでFork や改良が進んでいる。

---

## Google、SpaceXに月9億2000万美元のコンピュート料金

GoogleがSpaceXに対して月額**9億2000万美元**を支払っていることが判明した。これはGoogleのAI製品需求が予想外に高まったことを受けて契約を扩大したもので、Starlinkの地上インフラやSpaceXのデータセンターを活用したcomputing供给が確認されている。

NVIDIA製GPUクラスタの拡充が背景にあり、Google CloudのAI Infra需要逼迫の実態が露呈した形だ。2026年下半期の需要予測も inúmerし、GPU確保競争がさらに激化することが予想される。

---

## Supabase、8ヶ月で評価額10億ドルに倍増

オープンソースFirebase替代のSupabaseが、8ヶ月間で評価額が**2倍の100億ドル**に到达した。B轮資金調達で実現したこの评价額は、AI機能統合による開発者コミュニティの拡大と料金收入の伸びが要因だ。

SupabaseはAI時代のBackend-as-a-Serviceとして位置づけ直し、リアルタイムデータベース、エッジ関数、AI Embeddingsなどの機能を統合している。オープンソースモデルのビジネス転換として、持続可能なSaaS成长の道筋を示している。

---

## NVIDIA、Jensen Huangが韓国訪問 — Vera Rubin本番制造开始

NVIDIA創業者兼CEOのJensen Huangが韓国・ソウルを訪問し、パートナー企業とのAIサプライチェーン戦略を協議した。Taiwan COMPUTEXに続く訪問で、2026年下半期の繁忙期に備えたAI Infra整備がテーマだ。

Huang氏によると、**Grace Blackwell**系统在好评中で、**Vera Rubin**が本番制造に入り、2026年下半期は「非常に忙しい」見通し。ロボティクスとPhysical AIのKorea市場への投资機会も強調された。

---

## Biohub、AlphaFold 3に対抗するESMFold2を发表

Priscilla Chan・Mark Zuckerbergが设立したBiohubが、DeepMindのAlphaFold 3に対抗するタンパク質構造予測モデル**ESMFold2**を发表了。ESMC（言語モデル）、ESMFold2（設計エンジン）、ESM Atlas（6.8億配列のDB）から構成される。

ベンチマークではAlphaFold 3を上回り、抗体設計のヒット率36〜88%を達成。癌研究ではEGFR、PDGFRβ、PD-L1、CTLA-4、CD45など標的に対するミニバインダーの設計に成功した。スケーリング則も確認されており、推論時スケーリングで抗体-抗原通過率が49%から65%に向上する。

---

## Import AI 459: AI経済measurementと自动alignmentの难しさ

Jack Clark率いるImport AIの最新号では、3つの重要論点が扱われた。

**AI経済の成長速度**: Virginia大学とAnthropic、経済学者の共同研究によると、美国のAI経済は名目2500億ドル規模で、质量調整済み实质成長率が**年2600%**に達する。ただし従来のGDP統計では過小評価されており、「AI satellite accounts」の创设が推奨されている。

**自动alignmentの难しさ**: UK AI Security Instituteの論文は、AIにAIの安全性を監視させるアプローチの难しさを分析了。最適化压力、异質なmistakes、researchの相関性、非人间評価可能论点など、複数の根本的課題が特定されている。

**GPICデータセット**: Stanfordなど3000万枚の宽容ライセンス画像数据集（100M訓練画像）がHugging Faceで公开。商用・研究用途に无条件で解放されている。

---

## 参考リンク

- [Meta's Hatch AI agent - The Decoder](https://the-decoder.com/metas-hatch-ai-agent-could-cost-up-to-200-a-month-and-marks-its-first-paid-ai-product/)
- [xAI Claude training report - The Decoder](https://the-decoder.com/elon-musks-xai-reportedly-trained-its-coding-models-on-claude-outputs-for-months-before-getting-cut-off/)
- [Google SpaceX $920M/month - TechCrunch](https://techcrunch.com/2026/06/05/google-will-pay-spacex-920m-per-month-for-compute/)
- [Supabase $10B valuation - TechCrunch](https://techcrunch.com/2026/06/05/supabase-doubles-valuation-to-10b-in-8-months/)
- [NVIDIA Korea visit - NVIDIA Blog](https://blogs.nvidia.com/blog/korea-ecosystem-2026/)
- [ESMFold2 Biohub](https://biohub.org/news/world-model-of-protein-biology/)
- [Import AI 459](https://importai.substack.com/p/import-ai-459-ai-oversight-is-difficult)
- [GPIC Dataset](https://huggingface.co/datasets/stanford-vision-lab/gpic)

---

*（本文の情報は2026年6月6日時点のものです）*
