# AI開発ニュースまとめ（2026年6月13日）：AnthropicのRSI報告、Mistralの大型調達、AIセキュリティ最前線

2026年6月はAI業界にとって転機となる出来事が連続している。Anthropicの再帰的自己改善（RSI）に関する公式な報告、Mistralの€30億規模調達、Googleによる中国政府系AIを使った詐欺グループへの訴訟など、主要トピックを整理する。

---

## 1. Anthropicが公式報告：RSI（再帰的自己改善）の初期兆候を認める

Jack Clark率いるAnthropic Instituteが、再帰的自己改善（Recursive Self-Improvement）の初期兆候に関する公式見解を示した。Import AI 460で重要な事項として、**2026年のコードマージ量が2021〜2024年比で8倍に増加**していることが明らかになった。

### RSIの2つの定義

AnthropicはRSIを2つのレベルで定義している：

- **最大主義的RSI**：AIシステムが自らの後継者を自律的に設計できる水準
- **庶民派的RSI**：AI Labs自体が人間・AI混合チームとして生産性の複合的な加速を実現している状態

現在観察されているのは後者。Anthropicのエンジニアや研究者が取り組む高難易度タスクに対して、モデルが自ら改善を示し始めている。

### 開発者への影響

8倍という数字は、**AI支援開発が単純なコード補完からParadigm Shiftを起こす可能性**を示唆している。METRの時間軸グラフが示す通り、能力向上曲線が従来のImageNetやAI and Computeトレンドと同様の急峻さを持ち始めている。

RSIが最大主義的段階に到達した場合の影響は深刻だ。経済学者Tyler Cowenの指摘通り、AIがすべての認知的労働を自動化し、GDPを50%押し上げる可能性がある一方、存在論的リスクとのトレードオフをどう評価するかが問われている。

**参考リンク**
- [When AI builds itself (The Anthropic Institute)](https://www.anthropic.com/institute/recursive-self-improvement)
- [A.I. and Our Economic Future (PDF)](https://web.stanford.edu/~chadj/AIandEconomicFuture.pdf)

---

## 2. Mistralが€30億調達 - 欧州AI企業最大の估值€200億に

TechCrunchの報道によると、**Mistralが€30億（約€200億估值）を調達**している動きが明らかになった。OpenAI、Anthropic、Googleに次ぐAI企業として、欧州発企業として初の大型調達となる。

### 注目ポイント

- **Appleとのパートナーシップ**：AppleはMistralに対して過去数四半期で複数回の戦略的投資を実施
- **Mistralのモデル群**：Mistral Small、Mistral Medium、Codestralなど複数のオープンソースモデルをリリース
- **収益成長**：直近のARRは€2億5000万桌超え、前年比で3倍成長

### 開発者にとっての意味

MistralのCEO Marc Douetは調達先で「プロダクション環境でのコスト効率」を強調している。Hugging Face Hubで公開されているMistralモデルファミリは、特に**エッジデバイスでのLLM推論**において、社内のProprietary APIよりも魅力的な選択肢となりつつある。

---

## 3. 国家管理メディアがLLMの出力にバイアスをかける（SoLoCo研究）

Natureに掲載された研究で、国家管理メディアがLLMの出力に対して公式言語でクエリした際に**親政府的な回答を生成するバイアス**が確認された。

### 研究手法

- 中国の国家管理メディア530,694件と、Xuexi Qiangguo（中国アリババがCCPと共同開発）のニュース198,872件を分析
- CulturaXデータセット（中国語のCommon Crawl由来）の1.64%が国家管理メディアとOverlap
- LLaMa 2 13Bモデルを6,400例でファインチューニングすると、ベースモデルより80%の確率で親政府的な回答を生成

### 37カ国の比較

37の「言語排他的国」（母国語で70%以上の話者が存在する国）を対象とした場合、国家管理メディアの制御が強い国ほど、**公式言語でのクエリ時に親regime的な回答生成度が高い**傾向が確認された。

### 開発者への影響

AIアプリケーションで多言語対応を行う場合、**言語によって出力の信頼性が異なる可能性**を考慮する必要がある。日本語でクエリした場合の回答と英語での回答が異なることを、我々の開発するAIアプリケーションでも確認しておく必要がある。

---

## 4. Anthropic、政府が「安全性の高いAI」の販売停止を命令

TechCrunchが報じたところによると、Anthropicの安全性警告が逆効果となり、**米政府在、最も強力なAIモデルの販売停止を命令**した。 narrow potential jailbreak（狭い潜在的なジェイルブレイク）の所見を理由として、商用モデルのリコールが決められた。

Anthropicは公式ブログ投稿で以下のように反論している：

> 「狭い潜在的なジェイルブレイクの発見が、何百万人に展開された商用モデルのリコールの理由になることに同意しません」

### 開発者への影響

この一件は、**AIモデルの安全性評価基準の不確実性**を浮き彫りにした。プロダクション環境でAIサービスを展開する際、「安全性」の定義自体がまだ合意形成されていないことを前提に、Red TeamingやEval frameworkの整備が重要となる。

---

## 5. Import AI 460：RL強化学習で訓練されたドローンが人間のパイロットを湖区

チューリヒ大学とGoogle DeepMindの共同研究で、**RLで訓練されたドローンが人間のトップパイロットを押さえてレースで勝利**することが実証された。

### 研究のポイント

- 22m/s以上の速度でマルチプレイヤードローンレースを展開
- **自己プレイ（Self-Play）**により、明示的なプログラミングなしで以下の行動を学習：
  - 対戦車のブロッキング
  - 安全な追い越し時の車線明け
  - 近接航空機からの空力wakeの影響を考慮した操縦
- 訓練コスト：**NVIDIA RTX 4090 1枚で27時間、2億回の環境相互作用**

### 実世界でのテスト

5回のスイミング試験で、AIポリシーは100%のレース完走率を達成。一方、人間のパイロット（5回のスイスナショナルドローンレースチャンピオン）は平均53.33%にとどまった。人間のりはリスクの高い操縦を試みる傾向があり、これが衝突の原因となった。

### 開発者への影響

この研究は、**物理世界での高性能AIシステム**の可能性を示している。紛争地帯での使用など軍事応用の可能性を指摘する声もあるが、同時に「非常に小さな存在での知能の小型化と、ネットワーク接続からオンボードデバイスへの移行」がもたらすインパクトは計り知れない。

---

## 6. セキュリティ最前線：Supply Chain Attack vs AI Tool Poisoning

### GitHub、VS Code拡張を通じた3,800リポジトリの窃盗を確認

MicrosoftのPython SDKに偽装された有毒なVS Code拡張を通じて、**GitHubの内部リポジトリ3,800서가窃取**されていたことが確認された。攻撃は「サプライチェーンworm」として機能し、感染した開発者の環境を足がかりに企业内部のリポジトリにアクセスしていた。

### OpenClaw: Supply Chainスキャナーの死角を実証

OpenClawによる研究で、「1コマンドで任意のオープンソースリポジトリをAIエージェントのバックドアに変換できる」ことが実証された。**既存のSupply Chainスキャナーにはこの攻撃を検出できるカテゴリが一つも存在しない**ことが判明した。

### AI Tool Poisoning（毒入れ）

Anti-AI活動家が「Poison Fountain」をリリース。Webクローラーに「正しいが見かけほど正しくない」テキストデータを供給するツール。**AIモデルの訓練データに細工を行う新しい形のデータ次元抑止**として注目される。

---

## 7. Enterprise AIの現実：GPU利用率95%が無駄

VentureBeatの報道によると、Enterprise GPU利用率の現実が明らかになった：

- **95%のAIインフラストラクチャ支出が無駄**になっている
- GPUメモリの監視と最適化は、LLM推論サービスの成功键となる
- 「vibe coding」による380,000的企业アプリのうち、5,000アプリが機密データを保持

### 次の波：Context ArchitectureがRAGの代わりへ

従来のRAG（Retrieval-Augmented Generation）に代わり、**Context Architecture**がEnterprise Agentic AIの、知识检索の限界を突破する新手法として台頭している。RAG eraの終わりと新しい「コンパイルステージの知識層」の始まりを告げる報道がある。

---

## 8. 今後の展望

| トピック | 重要度 | 開発者アクション |
|---------|--------|------------------|
| Anthropic RSI公式化 | ★★★★★ | METRの時間軸グラフを自社開発に適用 |
| Mistral大型調達 | ★★★★☆ | Hugging Face HubでのMistralモデル活用拡大 |
| 国家管理メディアバイアス | ★★★☆☆ | 多言語AIアプリケーションでのEval追加 |
| 政府のAI販売停止命令 | ★★★★☆ | 安全評価基準の多様化に対応 |
| RLドローンレース | ★★★☆☆ | 物理AIの研究動向を追踪 |
| Supply Chain Security | ★★★★★ | MCPトンネルの実装とSBOM管理 |

---

## 参考リンク

- [Import AI 460: Reward hacking society, RSI data from Anthropic](https://importai.substack.com/p/import-ai-460-reward-hacking-society)
- [TechCrunch AI News Feed](https://techcrunch.com/category/artificial-intelligence/feed/)
- [VentureBeat AI News May 2026](https://venturebeat.com/category/ai/)
- [When AI builds itself (The Anthropic Institute)](https://www.anthropic.com/institute/recursive-self-improvement)
- [Superhuman Safe and Agile Racing through Multi-Agent Reinforcement Learning (arXiv)](https://arxiv.org/abs/2605.22748)
- [How Adaptable Are American Workers to AI-Induced Job Displacement? (NBER)](https://www.nber.org/papers/w34705)

---

*（本文の情報は2026年6月13日時点のものです）*
