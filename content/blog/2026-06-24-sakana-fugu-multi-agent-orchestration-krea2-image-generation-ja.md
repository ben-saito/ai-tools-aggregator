# Sakana AIが新世代オーケストレーション「Fugu」を発表　他AI開発最新動向

2026年6月23日、AI開発業界で複数の重要発表が行われた。Sakana AIはマルチエージェントオーケストレーションシステム「Fugu」を正式リリースし、VentureBeatはKrea 2の2秒画像生成モデルを詳しく報じた。一方、好対照な話題として、OpenAI創業者の伝記映画「Artificial」がHollywoodから次々と取引拒否される一方で、SignalのMeredith Whittaker代表が「AIチャットボットは友達ではない」と警鐘を鳴らすなど、AI与社会をめぐる緊張も表面化している。

---

## Sakana AI、Fuguで描く「オーケストレーションの次なる波」

Sakana AIは6月22日、マルチエージェントオーケストレーションシステム「**Fugu**」の正式提供を開始した。Fugu（河豚の意）は、単一の巨大モデルに依存するのではなく、複数の specialized AI エージェントを動的に連携させ複雑なタスクを解決する新一代のアプローチ，标志着「オーケストレーションモデルの夜明け」と同社は位置づける。

**アーキテクチャの革新:**
Fuguは「 master general contractor」のように動作する。複雑なリクエストを受け取ると、タスクを細分化し、適切な基盤モデルにサブタスクを委譲、その結果を検証・統合して最終出力を生成する。「Fugu itself an LLM, trained to call various LLMs in an agent pool, including instances of itself recursively」と同社は説明する。

**ベンチマーク結果:**
- **LiveCodeBench**: Fugu Ultra 93.2 → Anthropic Claude Fable 5 (89.8) を上回る
- **GPQA Diamond**: Fugu Ultra 95.5 → Claude Mythos Preview (94.6) を上回る
- **SWE-Bench Pro**: Fugu Ultra 73.7でClaude Opus 4.8 (69.2)、GPT-5.5 (58.6)を明確に凌駕

ただし、Sakanaの内部ベンチマークでも明らかになった通り、制限付きアクセスモデルのClaude Fable 5 (SWE-Bench 80.0) や特定ベンチマークでは依然としてトップモデルが優位であり、Fuguは「万能薬ではない」ことに注意が必要。

**価格:**
| プラン | 詳細 |
|--------|------|
| Standard | $20/月 |
| Pro | $100/月 |
| Max | $200/月 |
| Fugu Ultra (従量) | $5/百万入力トークン、$30/百万出力トークン |

**課題:**
Prime IntellectのリサーチエンジニアElie Bakouchは「to be clear, this is a closed source orchestrator on top of closed source models. if before you didn't control the models, now you don't even control which ones are used or how much」と指摘し、「AI主権」という主張に疑問を呈している。

---

## Krea 2、2秒生成のオープンウェイト画像生成モデル公開

VentureBeatが6月23日報じたところによれば、AIクリエイティブツールスタートアップのKreaは、12BパラメータのDiffusion Transformerベースの画像生成モデル「**Krea 2**」を2つのバージョンでオープンウェイト公開した。

**アーキテクチャ:**
- 12Bパラメータ Diffusion Transformer をスクラッチから構築
- SwiGLU MLP（4倍拡張係数）、Grouped-Query Attention (GQA)、3D Axial RoPEを採用
-  Timestep conditioning を最適化、ブロック変調パラメータを20〜30%削減

**2つのチェックポイント:**

| モデル | 特徴 | 生成速度 |
|--------|------|----------|
| **Krea 2 Raw** | 訓練中途の未distillベースモデル。LoRA訓練に最適 | 52 steps (bf16) |
| **Krea 2 Turbo** | 知識蒸留済み高速モデル | **約2秒** (8 steps) |

**ライセンス:**
- 50シート未満のビジネスはコミュニティライセンス（無料）
- 50シート以上はエンタープライズライセンス（要相談）
- CSAM、NCII、名誉毀損などの不正利用は全ユーザーが禁止

**「train on Raw, generate with Turbo」ワークフロー:**
Kreaが提唱するこのパターンは、RawモデルでカスタムLoRAを訓練し、Turboで高速描画するプロフェッショナルスタジオ向けの新しい制作パイプラインとなる。

---

## Hollywood、OpenAI Sam Altman伝記映画「Artificial」を次々と取引拒否

The Vergeが6月23日報じたところによれば、Luca Guadagnino監督によるOpenAI CEO Sam Altmanの伝記映画「Artificial」の配給問題が急速に表面化している。

**状況:**
- Netflix、A24、Focus Features、Warner Bros.' Clockworkが配給見送りを表明
- Amazon MGM Studiosも先週、配給取りやめを発表
- NeonとMubiは依然として関心を示しているが、状況は依然不透明

 Guadagnino監督の「Call Me by Your Name」「Challengers」などで知られるイタリアンリズムの映画作家がテック業界の权力構造を描くこの作品は、約束された критических story に対してHollywoodが「勇気がない」と批判されている。

TechCrunchの過去記事によれば、この映画はAltmanの2023年CEO解任事件とその後の復職を描いており、生成AI産業の权力構造を критическиに検証する内容となっている。

---

## AI企業、有権者支援に2700万ドルのPAC支出

The VergeのRegulatorニュースレター（6月23日）が報じたところによれば、AI企業関連の超级政治行動委員会（Super PAC）がニューヨーク第12選挙区の下院補選に2700万ドルの支援を行った。

**背景:**
- 有権者Alex Boresはローカルなテック系候補
- AI企業らはこの選挙区での影響力行使を通じて、AI規制政策への影響力を inúmer попыткаしている
- 「なぜ企業AI PACは地方選举に这么大規模な开支を行うのか」という規制当局への压力の一つと見られている

これは、AI产业が联邦規制のみならず、地方政治レベルでの影响力行使を强化している現状を反映している。

---

## Signal代表「AIチャットボットは友達ではない」

TechCrunchが6月20日報じたところによれば、SignalMessengerのMeredith Whittaker代表がインタビュー市で、AIチャットボットの亲しみやすい设计について警鐘を鳴らした。

**コメントの要点:**
「AIチャットボットは友達ではない。它们は利益を优先する企业が配置したシステムであり、亲しみやすいUIは本质的な関係を表すものではない」

Whittakerの指摘は、特に感情的な依赖关系を形成しやすいAIアシスタントの設計について、根本的な倫理的疑問を投げかけるもの。OpenAIのChatGPT、AnthropicのClaude、AppleのSiriなど、主要AIアシスタントの多くが「親しみやすい会話型UI」を採用している中で、この問題はAI倫理の重要な論点となっている。

---

## まとめ: AI開発市場の動向

本周のAI開発市場は下列の特徴が見える:

| 分野 | 動向 |
|------|------|
| **オーケストレーション** | Sakana Fuguがマルチエージェント連携の商业化加速 |
| **画像生成** | Krea 2が2秒生成とオープンウェイトで新基準 |
| **コンテンツ×Hollywood** | OpenAI傳記映画の取引拒否、技術力と批判の緊張 |
| **政治×AI** | AI企业の地方政治への资金的介入が表面化 |
| **AI倫理** | Signal代表がチャットボットの「伪りの亲しみ」に警鐘 |

---

## 参考リンク

- [Sakana AI Fugu](https://sakana.ai/fugu/)
- [VentureBeat: Sakana Fugu](https://venturebeat.com/orchestration/sakana-ai-launches-fugu-a-frontier-tier-performance-with-new-fugu-multi-model-auto-synthesis-system)
- [VentureBeat: Krea 2](https://venturebeat.com/technology/enterprise-grade-ai-image-generation-in-2-seconds-is-here-krea-2-raw-and-turbo-available-as-open-weights-under-custom-license)
- [The Verge: Artificial movie](https://www.theverge.com/entertainment/954899/luca-guadagnino-artificial-sam-altman-amazon-a24-neon-mubi-chatgpt)
- [The Verge: AI Super PACs](https://www.theverge.com/policy/954970/ai-super-pacs-alex-bores-new-york-12th-district)
- [TechCrunch: Signal Meredith Whittaker](https://techcrunch.com/2026/06/20/signals-meredith-whittaker-wants-you-to-remember-that-ai-chatbots-are-not-your-friends/)

---

*（本文の情報は2026年6月24日時点のものです）*
