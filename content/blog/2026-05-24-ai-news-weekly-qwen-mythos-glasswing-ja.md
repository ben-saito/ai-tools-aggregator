# AI開発最新ニュース：Alibabaの自律型Qwen3.7-Max、Anthropicの収益化、Coding Agent競争の激化

2026年5月下旬のAI業界は、北京・深沌からサンフランシスコまで、同時に複数の激震が走っている。Alibabaの自律型LLMが35時間かけて自社チップのコードを最適化するという前代未聞の快挙、Anthropicが初めて黒字化を達成、GartnerがOpenAIをEnterprise Coding Agentのリーダーに据える——本期は、AIラボ間の競争が「純粋な精度競争」から「実戦配備・収益化・セキュリティ」を軸にした新たな段階に入ったことを明確に示す結果となった。

---

## Alibaba Qwen3.7-Max：35時間自律動作で自社チップを最適化

最も技術的に注目すべき話題は、**Alibaba Cloud）が開発したQwen3.7-Max**が、35時間にわたって自律的に動作し、自社開発チップ（Hanguang 800向け）のコード最適化を行ったというレポートだ。

The Decoder、VentureBeatなどが伝えた内容によると、Qwen3.7-Maxは以下の特徴を持つ：

- **35時間の完全自律動作**：外部からの介入なしに自社ASIC向けコードを反復改善
- **外部ハーネス対応**：Anthropic Claude Codeと同様の外部制御インターフェースをサポート
- **プロプライエタリモデル**：オープンソースではない、商用 전용モデル
- **長時間のAgenticタスク実行**：LLM Agentの「長手指続き」能力を実証

これは単に「長い時間動き続けた」という話ではない。**LLMが自らのパラメータやプロンプトだけでなく、ハードウェア寄りの低レベルコードすら自己能動的に改善できる**ことを示した点が革命的だ。従来のLLM Agent研究では、API呼び出しやファイル操作程度的短時間のタスク実行が主流だったが、35時間という途方もない時間は、「自律的な研究サイクル回し」が現実的に可能であることを証明した。

---

## Anthropic、Claude Mythos Previewで「バグ修正速度の壁」に直面

Anthropic旗下的研究チームは、**Claude Mythos Preview**（内部では「Mythos」と呼ばれている）の評価結果を公開した。 Claude Code（コーディングエージェント）を使っていた開発者にとって、最も興味深い的事実は以下の点だ：

> **Mythos Previewは、開発者がパッチを当てられる速度よりも速くバグを発見できる**

つまり、Agentの出力が人間の追従跟不上らなくなっていることを示唆している。これは「AIが人間より優秀」という紋切りの主張とは一線を画する——**「修正responsibilityを持つ人間」が律速になっている**という、より現実的かつ皮肉な課題提示だ。

Mythosは、Anthropicの新しい「 Mythos」ファミリー的第一个モデルとして位置づけられている。Red Teamの評価では、Claude MythosとGPT-5.5が実際のブラウザtainableを自律的に開発できることが示された（新しいベンチマーク結果）。

---

## Anthropic、第一家 profitableなAIラボに

The Decoderが伝えた話題によると、**Anthropicは業界で初めて、黒字化を達成したAIラボ**と言われている。

複数の報道可知、Anthropicは以下の要因で収益化している：

- **Claude for Enterpriseの急成長**：大手企業での採用拡大
- **Claude Code Enterprise**：企業向けコーディングエージェントの収益化
- **計算資源コストの最適化**：モデル効率の改善
- **Strategic partnerships**：KPMG、Apple、SpaceXなどとの提携

OpenAIがまだ収益化苦苦としている中、Anthropicが「第一家AI lab to become profitable“という称号を得たことは、業界にとって大きな転換点だ。「まだらモードの研究組織が реальныеなビジネスとして自立できる」ことを証明した点で、VC投資回収への期待が高まっている。

---

## Project Glasswing：AIセキュリティの業界横断イニシアティブ

5月22日、Anthropicが主導する新しいセキュリティイニシアティブ**Project Glasswing**の最初のアップデートが発信された。

参加企業は以下の通り：

- **Amazon Web Services**
- **Anthropic**
- **Apple**
- **Broadcom**
- **Cisco**
- **CrowdStrike**
- **Google**
- **JPMorganChase**
- **Linux Foundation**
- **Microsoft**
- **NVIDIA**
- **Palo Alto Networks**

Project Glasswingの目的は、**「世界で最も重要なソフトウェア」のセキュリティを確保する**ことにある。AI供应链の安全性を確保することが主目的だが、参加企業列表を見れば分かる通り、金融機関、チップベンダー、セキュリティ企业、Cloud_providerが並んでおり、これはもうAI_securityの话ではなく、**现代IT基础设施全体の安全 architecture**の話だ。

---

## OpenAI Codex：Enterprise Coding Agentのリーダーに

OpenAIは5月22日、Gartnerから**「Enterprise Coding Agents」リーダーに選出された**と発表した。また、Virgin AtlanticがCodex導入で開発速度を加快了としている。Codexを活用した事例も複数公開されている：

- **Virgin Atlantic**：Codexで開発サイクルを高速化
- **AdventHealth**：OpenAIの導入でwhole-person careを推進
- **レートリミット增加**：ユーザー増加に伴い Codexのレートリミットを引き上げ

OpenAIのAPIプラットフォーム観点では、Codex горnats は「開発者向けAI-Agent」の本命 자리를確立しつつあり、Claude Code（Anthropic）との直接競争が激しくなっている。

---

## Google I/O 2026： Gemini新モデルと「寝ないクラウドエージェント」

5月19日のGoogle I/Oでは、以下の発表があった：

- **新 Gemini モデルの発表**：精度・速度の向上
- **Cloud Agent「never sleeps」**：24时间切れ間なく動作するクラウドエージェント
- **Gemini appのリデザイン**：UI/UXの大幅刷新

GoogleはAI Agent戰線でOpenAI・Anthropicに追いつこうとする姿勢を見せており 특히、「寝ないクラウドエージェント」は企業向けユースケースに直接対抗する提案だ。

---

## Andrej Karpathy、Anthropicに合流

AI業界最大の話題の一つは、**Andrej Karpathy**がOpenAIからAnthropicに移籍的决定を行ったことだ。KarpathyはOpenAIの創設メンバーであり、Udacityでの深層学習讲座など教育者として知られており、 TeslaでのAutopilot開発也曾任した。The Decoder伝えた彼の記事は以下の标题だった：

> 「Prominent AI researcher Andrej Karpathy picks Anthropic over former home OpenAI to get back into frontier LLM research」

Anthropicが「frontier LLM研究」を続けることを選択したことは、同社の技術的魅力の証左だろう。

---

## Trump政権、AI事前審査の通則を延期

AI開発者にとって 直接影響する話題として、**Trump政権がAIプリリリースモデルの事前審査を定める通則の延期を検討している**というレポートがある。5月21日時点の情報では、議会での承認がまだ済んでおらず、芯片不足对应の$90億の予算と共に不透明な状況にある。

この通則が実現した場合、境外で訓練されたモデルの事前審査義務化など、LLM開発者に大きな影響がある。特别是 中国勢のアメリカ市場へのアクセスが複雑化する可能性が高く、目が離せない。

---

## 参考リンク

- [Alibaba Qwen3.7-Max | The Decoder](https://the-decoder.com/alibaba-qwen3-7-max-autonomous-35-hours/)
- [Anthropic Mythos Preview bugs faster | The Decoder](https://the-decoder.com/anthropic-claude-mythos-preview-finds-bugs-faster/)
- [Anthropic profitable AI lab | The Decoder](https://the-decoder.com/anthropic-first-profitable-ai-lab/)
- [Project Glasswing update | Anthropic](https://www.anthropic.com/news)
- [OpenAI Gartner Leader | OpenAI](https://openai.com/news/)
- [Google I/O announcements | The Decoder](https://the-decoder.com/google-io-2026-new-models/)
- [Andrej Karpathy joins Anthropic | The Decoder](https://the-decoder.com/karpathy-anthropic/)
- [DeepSeek Code | The Decoder](https://the-decoder.com/deepseek-code/)

---

*（本文の情報は2026年5月24日時点のものです。最新情報は各ソースをご確認ください。）*