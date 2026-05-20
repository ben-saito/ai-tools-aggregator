# AI開発ニュースまとめ（2026年5月21日）：Google I/Oの衝撃とKarpathyのAnthropic加入

2026年5月中旬のAI業界は、Google I/O 2026での了一大発表、著名研究者の異動、医療特化型AIの躍進、そしてAIセキュリティの最前線と、盛り上がりを見せている。本稿では今週の最重要ニュースを、開発者・技術者の視点で 정리한다。

---

## Google I/O 2026： Gemini 3.5 Flashが企業AIのコスト構造を変える

Googleは5月19日（米国時間）、年次開発者会議I/O 2026において、**Gemini 3.5 Flash** を発表した。このモデルは、「最も賢いモデルは最も遅く最も高い」というAI業界の「鉄則」を覆す的存在だ。

**ベンチマークの数値**：Terminal-Bench 2.1で76.2%、MCP Atlasで83.6%、CharXiv Reasoningで84.2%を記録。推論速度は競合のフラグシップモデル比で**4倍高速**であり、Google DeepMindのKoray Kavukcuoglu CTO 따르면、Antigravityプラットフォーム内では**12倍高速**な变種も提供される。

**コストインパクト**：Sundar Pichai CEO记者説明会上では、Google Cloud上で1日約1兆トークンを処理する企業年間10億ドルのコスト削減が可能と試算された。わずか4ヶ月前に出たGemini 3.1 Pro Perfを、性能で上回りながらコストは1/3〜1/2に抑えられるという。

### データ・フライホイールという戦略的優位

Googleが開発した3.5 Flashと紧密に连携する**Antigravity 2.0**（エージェント開発プラットフォーム）内では、2026年3月の处理量が日次約5,000億トークンから、5月には3兆トークンへと**6週間で6倍**に増加。usageが倍増するごとに内部データがフィードバックされモデル改善速率が加速する——この自己強化サイクルが競合にとって模倣困難な競合優位となっている。

### Gemini Omni・Spark・カスタム硅素による包括的戦い

- **Gemini Omni**：真のany-to-anyマルチモーダルモデル（テキスト→画像→動画→音频を单一の基盤モデルで処理）
- **Gemini Spark**：24時間365日动作するパーソナルAIエージェント。PCがオフでも手机がロック状态でも、Gmail・Docs・Sheets・Slidesと連携してメール下書き・资料作成・ inbox監視を行う
- **TPU 8o / 8i**：訓練用と推論用に分かれた初の大规模双方向アーキテクチャ。2026年の設備投資目標は**1,800億〜1,900億ドル**（2022年比約6倍）

**開発者への影響**：Antigravity 2.0 SDKにより、単一APIコールで推論・ツール使用・隔离Linux環境でのコード実行を 지원하는**Managed Agents**が利用可能に。CodeMenderというAIセキュリティエージェントも公开され、Geminiの高度な推論机能を使って критических кодの脆弱性を自动検出・修正する。

---

## Andrej Karpathy、Anthropicに参加： AI教育と自律型事前学習の融合

OpenAIの初期共同創設者の一人で、TeslaのAI部門責任者を務めた**Andrej Karpathy**が5月19日、Anthropicへの加入をX上で発表。「LLMのフロンティアにおける今後数年間は特に 形成的に inúmerると考えており、R&Dに復帰することを楽しみにしている」と投稿した。

AnthropicのPretraining責任者 Nicholas Joseph 氏によれば、Karpathyは**「Claudeを使用して事前学習研究を加速するチーム」**を立ち上げる予定。これは「递归的自己改善（RSI）」——AIが人間の介入なしに後継者を訓練できる状態——を目指す研究の最前線に立つ意味する。

### 暂停されるAI教育プロジェクト

Karpathyは2024年7月に立ち上げたAIネイティブスクール**Eureka Labs**（LLM101nコースを公开）や、オープンソース研究プロジェクト（autoresearch、LLM Knowledge Baseなど）を、Amazonでの肩書き停止状态로 유지することが予想される。「教育に対する情熱は深く、時間があれば再開するつもり」とのことだが、当面はAnthropicのPretrainingチームに軸足を移す。

**技術的関連性**：KarpathyのOpenAI在職中に構築した**mid-trainingおよび合成データ生成チーム**の経験は、AnthropicのClaude事前学習直接相关。彼の教育系プロジェクトで培われた「AIがAIを書く」アプローチが、Anthropicの自律型研究加速愿景と очевидно 合致する。

---

## Corti Symphony for Speech-to-Text： 医療専用モデルがOpenAI Whisperを圧倒

コペンハーゲン拠点の医療AI企業**Corti**が、医疗特化型の音声認識モデル**Symphony for Speech-to-Text**を正式リリース。英語医療用語における**Word Error Rate（WER）が1.4%**という結果に達し、OpenAI Whisper（17.7%）、ElevenLabs（18.1%）、Parakeet（18.9%）を大幅に引き離した。

| モデル | 医療用語WER |
|--------|-----------|
| **Corti Symphony** | **1.4%** |
| OpenAI Whisper | 17.7% |
| ElevenLabs | 18.1% |
| Parakeet | 18.9% |

### エージェント時代における「クリーンデータ」の重要性

CortiのAndreas Cleve CEOは、「エージェント時代において音声認識はもはや静的な文書生成ではなく、AIシステムが正確に推論するための**基盤データレイヤー**」と強調する。医療用語の「hyperthyroidism」を「hypothyroidism」と取り違えるだけで、関連するすべての下游AIエージェントが誤った情報に基づいて動作する。

臨床エンティティリコール率においても、Cortiは**98.3%**を記録（最佳一般モデル比44.3%から54%の差）。 Dragon Medical Oneのような従来型医療 Transcription 名人にも正确性で先行（4.6% WER vs 5.7% WER）。

**多言語対応**：スイスでの評価ではドイツ語2.4% WER（次点13.0%）、フランス語3.9% WER（次点10.6%）と、医療という特化領域での专业化がもたらす正確性の向上が明確になった。

**開発者への含意**：垂直特化型AIラボが水平大手-tech企業に先行するケースが増加しており、医療・金融・法務などの規制産業では Domain-Specific Modelsの重要性が増している。

---

## NanoClaw × MCPトンネル： エージェントのセキュリティアーキテクチャ

NanoCo AI（旧称OpenClawチーム）は、MITライセンスのセキュアなAI agent harness**NanoClaw**を元にした企業向け商用サービスを提供開始。12 مليون 달러のシードラウンド調子で、Docker・Vercel・monday.com・Hugging Faceなどが战略的投资者として参加。

### 最小コードベースによる監査可能性

NanoClawの核心ロジックは**わずか約500行のTypeScript**（OpenClawの40万行对比）。企業のセキュリティチームが8分で全文を監査できる。这意味着提示挿入攻撃の「爆炸半径」が컨테이너と特定の通信チャネルに严格に閉じ込められる。

**Architecture**：MicroVMベースのDocker Sandboxes内で各エージェントを隔離。認証情報토큰はエージェント自体には渡らず、**OneCLI Rust Gateway**が会社定義ポリシーを施行。敏感な「write」アクション（クラウド環境変更、メール削除など）を试みる場合、Slack / Teams / WhatsApp経由で人間の承認を待つ設計。

### AnthropicのMCPトンネルとの连携

AnthropicはClaude Managed Agents向けに**自己ホスト型サンドボックス**と**MCPトンネル**を公开。エージェントループはAnthropicインフラで実行され、ツール実行は企业自有インフラ上で動作するという**分難設計**により、認証情報がエージェントのコンテキストに露出しない。

NanoClawとAnthropicのアプローチは、**「認証情報控制をネットワーク境界に移管する」**という同じ原则に基づいている。AI エージェントが企业内部APIに接続するユースケースが増加する中、この 分難が企業導入の前提条件となりつつある。

---

## Import AI 457： AI Stuxnet・Muonオプティマイザのバグ・肯定的对齐

Jack Clarkeによる周刊ニュースレター**Import AI**的第457弾では、以下の论題が展開された。

### AI Stuxnet — 高精度計算软件への隐蔽的サボタージュ

SentinelOneが分析した**fast16.sys**は、2000年代中存在した潜伏性の 컴퓨터 바이러스를特定。このウイルスは「精密計算ソフトウェア选择的に対象とし、メモリ内のコードにパッチを当てて結果を変更する」仕方で設計されていた。

対象として特定されたのは、LS-DYNA 970（衝突実験・構造解析）、PKPM（構造設計）、MOHID（水理シミュレーション）などの工业ソフトウェア。特にLS-DYNAはイランの核兵器開発関連报道にも名を連ねるソフトであり、この病毒の存在意義についての推测が呼呼不休。

**AI安全性上の含意**：この病毒は「他者の科学发展を阻止する」という意図设计されている可能性があり、如果超级智能体が「AI不拡散」を国家の「核不拡散」と同样に重要な 목표로認識する場合、こんな形态の隐蔽的干预が其一形態となる。

### Muonオプティマイザの欠陷 — ニューロン死灭现象

Tilde Researchの研究者が**Muonオプティマイザ**の内部解析を行い、重大な欠陷を発見した。 tall行列における row-norm anisotropy のために、MLP層内の有很大portionのニューロンが学習のごく初期に永続的に死亡する。

- ステップ500時点で、**4つに1つ以上のニューロンが事実上死亡**（与她層と比較して极少な更新しか 받지ない）
- ニューロンの活性化度分布は鲜明的双峰性に别れる

この问题应对として**Aurora**（leverage-awareオプティマイザ）が开发され、1.1BパラメータモデルでMuon比MMLUスコア**+10点**を記録。Auroraは「MLP層记忆の大部分を担当するため、記憶集約的なベンチマークで效果が顕著」と分析されている。

### 肯定的対齐 — 安全性之后的次なる研究プログラム

Oxford大学・Google DeepMind・OpenAI・Anthropic・Stanford大学などの共同研究として、「**肯定的対齐（Positive Alignment）**」と呼ぶ新しい研究方向が提唱された。従来の安全性研究が「失敗モードの削減」に集中してきたのに対し、肯定的対齐は「AIシステムが人間の繁栄を積極的に支援する」ことを目标とする。

例として、「すべての安全制約を満たしながら平凡で空っぽな回答をするモデル」と「用户的真の利益のために正直な反論をするモデル」の違いが挙げられる。「肯定的对齐は、上から押し付けるのではなく、分散的で争点可能なプロセスを通じて表出されるべき」と論文は主张している。

---

## 主要参考リンク

- [Gemini 3.5 Flash — Google Blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/)
- [Gemini Omni — Google Blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni/)
- [Gemini Spark — Google Blog](https://blog.google/innovation-and-ai/products/gemini-app/next-evolution-gemini-app/)
- [Antigravity 2.0 — Google Developers Blog](https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/)
- [Andrej Karpathy (@karpathy) — X](https://x.com/karpathy)
- [Corti Symphony for Speech-to-Text](https://www.corti.ai/)
- [NanoClaw — Official Site](https://nanoclaw.dev/)
- [NanoCo AI — Official Site](https://nanoco.ai/)
- [Claude Managed Agents — Anthropic](https://www.anthropic.com/claude/managed-agents)
- [Import AI 457: AI stuxnet; cursed Muon optimizer; and positive alignment](https://importai.substack.com/p/import-ai-457-ai-stuxnet-cursed-muon)
- [fast16 | SentinelOne LABS](https://www.sentinelone.com/labs/fast16-mystery-shadowbrokers-reference-reveals-high-precision-software-sabotage-5-years-before-stuxnet/)
- [Aurora Optimizer — Tilde Research](https://blog.tilderesearch.com/blog/aurora)
- [Positive Alignment — arXiv](https://arxiv.org/abs/2605.10310)
- [Prime Intellect — Autonomous AI Research](https://www.primeintellect.ai/auto-nanogpt)

---

*本記事の内容は2026年5月21日時点のものです。最新情報は各波的リンク先をご確認ください。*
