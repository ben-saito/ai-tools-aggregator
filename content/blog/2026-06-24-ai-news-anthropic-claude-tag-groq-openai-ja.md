# Anthropic「Claude Tag」発表、OpenAIはOSSセキュリティ強化へ——AI業界週末の総復習

2026年6月22〜23日、AI業界は週末を通じて複数の重要な発表を行った。**Anthropic**はSlackに常駐する企業向けAI機能「Claude Tag」を発表し、**OpenAI**はオープンソースの脆弱性発見・修正を支援する新プログラムを開始した。**Groq**は$650Mの資金調達を確認、**Google DeepMind**はA24との映画制作AIで$75Mの契約を結んだ。

---

## Anthropic、Claude TagでSlackに「常駐AI同僚」を実現

Anthropicは6月23日、Slackに統合される新機能 **Claude Tag** を発表した。従来のAIアシスタントと異なり、Claude Tagは Slack上の全メッセージを背景に学習し続け、**組織の知識グラフ**を構築する。

### 企業知識の自動獲得という戦略

Claude Tagの真の目的は生産性ではない。**組織コンテキスト（組織的文脈）の掌握**にある。Slack上の会話、定例会議、意思決定の履歴を常時監視することで：

- プロジェクトごとの判断根拠の追跡
- チーム間の，暗黙知（tacit knowledge）の明文化
- 新しいメンバーへのオンボーディング支援

Anthropicにとって、これは **エンタープライズ市場の組織知識獲得競争** における重要な一手である。競合のMicrosoft CopilotやGoogle Workspace AI対抗として、Slackというコラボレーションハブへの深い統合を選んだ。

---

## エージェントAIの次の段階：「Loopy」な_continuous swarm

Russell Brandom（TechCrunch）は6月22日、**「The AI world is getting 'loopy'」** と題た記事を公開した。Boris Cherny氏が率いる新しいアプローチは、従来の**agentic AI**（単一エージェントが自律的にタスク遂行）を一歩進め、**swarm of agentsがバックグラウンドで連続的に無限に動作する**。

### Loopの技術的意味

| 従来のagentic AI | 「Loopy」アプローチ |
|---|---|
| タスク完了後に停止 | 永遠に動作継続 |
| 単一または少数のエージェント | エージェントの群れ（swarm） |
| 人間の起動が必要 | 人間の認可なしに継続 |
| トークン消費が限定的 | 莫大なトークン消費 |

Cherny氏によれば、適切な監視とトークン消費管理があれば、**得られる恩恵はコストを大幅に上回る**可能性があるという。ただし、Anthropic的には「トークン販売ビジネス」であり、他のプレイヤーにとっては高价な笑い事ではないとしている。

---

## OpenAI、Trail of Bitsと提携——OSS脆弱性自動発見・修正プログラム

OpenAIは6月22日、**オープンソースソフトウェアの脆弱性をAIで自動発見・修正**する新プログラムを発表した。Trail of Bitsとの提携で実現したこの取り組みは、AnthropicのSecurity Toolに対する競争的な牽制とも解读できる。

### 背景：AI駆動のサイバー犯罪の自動化

近年のAIセキュリティツールの向上により、**コードベース内の既知の脆弱性を自动的に識別し、エクスプロイトを作成する**ことが可能になった。AIによるサイバー犯罪自动化は新しくないが、AIセキュリティツールの発展是其の手間を大幅に削減している。

OpenAIは的方向を反转し、**AIを使ってオープンソースコミュニティ自分を保護する**支援を行う。これはOSSコミュニティが必要としていたものでありつつも、Anthropicへの競争的な打ち手としても読み取れる。

---

## Groq、$650M資金調達を確認——Nvidiaからの人材引き抜きを経て再出発

AIチップ企業のGroqは6月22日、**$650Mの資金調達**を確認し、Nvidiaからの大規模な「not-acqui-hire」取引（約$20B規模と报道された）を経た後の人員再構築状況を明かした。

### NeoCloudビジネスへの傾注

Groqは調達した資金を以下に活用する方針：

- **NeoCloudサービス**の強化（他社GPUよりも高速な推論を提供）
- 新経営陣の採用
- Nvidia最新のGB300 AIチップを活用したデータセンター扩展

Reflection AIとの$150M/月（约$1.8B/年）の演算力契約（月額$150M × 2029年まで）も命中しており、Groqの顧客としてSpaceX系列との太强い結びつきが注目される。

---

## Google DeepMind × A24、$75MでHollywood AI映画制作

Google DeepMindは6月22日、映画スタジオの **A24** との間で **$75MのAI映画制作パートナーシップ** を結んだとTechCrunchが報じた。

### の内容

このパートナーシップの核心は以下 предположенияできる：

- DeepMindの動画生成・編集AIの研究成果的电影応用
- A24の制作的知識とDeepMindのAI能力の融合
- 従来の кино制作ワークフローの根本的な改革

HollywoodとAIの融合は、Google（Vids）、OpenAI（Sora）、Meta（Movie Gen）と激化しているが、DeepMindの 研究特化型アプローチとA24のインディー映画での実績の組み合わせは、**品質重視のAI映像制作**を示すものとして注目される。

---

## Oracle、21,000人レイオフ——AI投資の債analytics

Ars Technicaは6月23日、Oracleが **21,000人规模的レイオフ** を実施し、これがAI投資の债务进行的的一部分だと報じた。

### レイオフの構造

Oracleのレイオフは以下のように解读されている：

- **借金駆動型AI投資**：莫大な設備投資を借入金でollas、AIへの大规模転換を急促に推进
- **クラウド競合（AWS、Azure、GCP）との差距**からの焦り
- **伝統的なソフトウェアからAIサービスへの移行**の痛苦

これは、AppleがiOS 27でSiriのAI改革を進める中、Oracleが社内の非効率をAIで置き換えようとしている姿势を示している。

---

## Nvidia、水使用量削减の冷却システムを発表——但しAIの真の問題は别

Nvidiaは6月22日、データセンター用の **新しい液冷システム** を発表し、水使用量を削減すると伝えた。しかし、TechCrunchの指摘★★★

 문제는 Nvidiaの冷却システムはデータセンター内部の水使用量は削減できるが、AIの**_最も大きな水使用_**——化石燃料発電所——には何も対策しないことである。

### AI環境問題の構造

| 水消費の発生源 | 规模 |
|---|---|
| データセンター冷却（修正可能的） | 中程度 |
| AI計算を支える化石燃料発電（修正困难） | 大きい |

AIの环境影响については、計算資源の効率化和毛息の方がより根本的な解決策となる。

---

## AIレイオフ透视：2026年、主要Tech企業のAI絡みの人員整理

TechCrunchは6月23日、**2026年にAIを理由にレイオフを实施した主要Tech企業**のリストをまとめ、公正な波紋を示している。

### 注目企業

- Oracle（21,000人）
- その他複数企業（リスト継続更新中）

AI 도입による雇用への影響は、**AI produtivity向上と雇用喪失のトレードオフ**が現実のもとして進行している。SignalのMeredith Whittaker CEOが「AIチャットボットはあなたの友達ではない」と警告したように、AIと労働市場の関係は仍未解決の問題として残る。

---

## 参考リンク

- [Anthropic's Claude Tag is learning your company, one Slack message at a time (TechCrunch)](https://techcrunch.com/2026/06/23/anthropics-claude-tag-is-learning-your-company-one-slack-message-at-a-time/)
- [The AI world is getting 'loopy' (TechCrunch)](https://techcrunch.com/2026/06/22/the-ai-world-is-getting-loopy/)
- [OpenAI launches new initiative to help find and patch open source bugs (TechCrunch)](https://techcrunch.com/2026/06/22/openai-launches-new-initiative-to-help-find-and-patch-open-source-bugs/)
- [AI chipmaker Groq confirms $650M raise, re-staffs after Nvidia's $20B not-acqui-hire deal (TechCrunch)](https://techcrunch.com/2026/06/22/ai-chipmaker-groq-confirms-650m-raise-re-staffs-after-nvidias-20b-not-acqui-hire-deal/)
- [Google DeepMind bets $75M on AI's future in Hollywood with A24 deal (TechCrunch)](https://techcrunch.com/2026/06/22/google-deepmind-bets-75m-on-ais-future-in-hollywood-with-a24-deal/)
- [Oracle's 21,000 layoffs help drive its debt-fueled AI investments (Ars Technica)](https://arstechnica.com/ai/2026/06/oracles-21000-layoffs-help-drive-its-debt-fueled-ai-investments/)
- [Nvidia wants to cut data center water use, but that's not the same as fixing AI's water problem (TechCrunch)](https://techcrunch.com/2026/06/22/nvidia-wants-to-cut-data-center-water-use-but-thats-not-the-same-as-fixing-ais-water-problem/)

---

*（本文の情報は2026年6月24日時点のものです）*
