# AI開発ニュース weekly — Claude Sonnet 5推出、AI エージェント制御の実践知、ZCode参入

2026年7月第1週は、**Anthropic が Claude Sonnet 5 を大幅に値下げして提供開始**した週となった。API 输入トークン $2/百万、出力トークン $10/百万という料金設定は、Opus 4.8 の($5/$25)から大幅に引き下げられ、 IPO 前の採用拡大戦略と読み取れる。一方、**Alibaba の新フレームワークがエージェントのトークン使用量を99%削減**、i**BEanese の ZCode が AI コーディングツール市場に参入**など、エージェント効率化と開発者ツール競争も激化している。

---

## Anthropic、Claude Sonnet 5 を発売 — 導入価格 $2/$10でトップモデル都比不上の攻防

Anthropic は6月30日、**Claude Sonnet 5** を Free/Pro/Max/Team/Enterprise 全プラン向けに一斉公開した。、同社はこのモデルを「**これまでで最も agentic な Sonnet**」と表現しており、API call、tool use、multi-step reasoning タスクでの性能向上に重点を置いている。

導入価格は2026年8月31日まで **$2/百万入力トークン、$10/百万出力トークン**。9月以降は $3/$15 に上昇するが、それでも Opus 4.8 の($5/$25)より大幅に安い。企業ユーザーは **Anthropic の IPO 前にClaude 利用を最大化**する戦略と見ている。

業界的には、Claude Sonnet 5 の投入は OpenAI の GPT-5.6 規制問題を横目で見る形での価格戦略碗一曲であり、**IPO 前の Anthropic がいかに素早く市場シェアを巩固するか**が焦点となっている。

---

## Alibaba、新AIフレームワークでエージェントのトークン使用量を99%削減

VentureBeat が7月2日（現地時間）に伝えたところによると、**Alibaba の研究チームがousands のツール到晚问题时トークンバンドル急減な新しいルーティングフレームワーク**を開発した。

現在の AI エージェントは、利用可能なツール一覧を全てプロンプトに载入するため、ツール数が増えるとコンテキストウィンドウを大量消費し、推論コストとレイテンシが跳ね上がる。このフレームワークは、**問題の種類に応じて動的に関連ツールのみを选择性的にロードする**仕組みで、トークン使用量を99%削減できたという。

具体的手法はまだ論文未発表だが、Alibaba の ML チームによれば「ツール选择の段階でEmbedding ベースの類似度检索と、強化学習によるポリシーネットワークを組み合わせた」としている。開発者視点からすると、**MCP プロトコルを活用したツール数の多いエージェント applications でのコスト最適化**issi が大きく見込まれる。

---

## Z.ai が ZCode を発売 — Cursor / Claude Code / GitHub Copilot 挑战

中国発の **Z.ai** が6月末から7月にかけて、GLM-5.2 公式開発環境 「**ZCode**」 を macOS/Windows/Linux 全プラットフォーム向けに免费公开した。

注目点は：
- **GLM-5.2 公式 IDE** として位置付け
- BYOK（Bring Your Own Key）対応で、第三 модели向けにも使用可能
- **GLM Coding Plan 加入者向けの使用量1.5倍ボーナス**付き
- Cursor、Claude Code、GitHub Copilot と直接竞争

GLM-5.2 は中国本土で広く使われている LLM であり、ZCode はその周边エコシステムを強化する戦略的動きとなる。米国市場の Claude Code/Copilot に対する竞争という観点と、中国国内市场での IDE 標準化という両面で展開している。

---

## 企業案例：Morgan Stanley が агент 的自動化で「失败」を反转

Morgan Stanley のリスク最優先業務である ** reconcile（照合） jobs** について、同行が агент 自律性を下げる形で Jobs を半減させたという興味深い事例が VentureBeat で紹介された。

Morgan Stanley のアプローチは以下の通り：
- **確率的判断を減らす**（LLM のランダム性を排除）
- **固定ルールを増やす**（hand-coded guardrails）
- **全コールに人間の承認を義務化**

この「 автоном性を下げる」選択は、金融料理の厳密性要件からの逆算であり、エージェント導入において「自律性が高い = 优秀」とは限らないことを示している。**LlamaIndex や LangChain を使った агент 設計でも、この教訓は適用できる**だろう。

---

## Google、Gemini Omni Flash をAPI公开 — 企業が動画制作を「会話」で

Google は6月末、Gemini Omni Flash を API として提供開始した。**テキスト指示だけで動画を生成・修正・編集できる**このモデルは、従来の映画スタッフ＋エディタ＋リビジョン回合が必要だったプロセ스를單一のマルチモーダルモデルで 대체する。

API としては Google Cloud Vertex AI 経由でアクセス可能で企 图向であり、**プロンプトエンジニアリングだけで動画制作が変わる**可能性が出てきた。Text-to-Video 市場は Runway、Pika、Sora と竞争が激化しているが、Google の場合は YouTube/Blogger との垂直統合が強みとなる。

---

##  参考リンク

- [Anthropic launches Claude Sonnet 5 at a steep discount (VentureBeat)](https://venturebeat.com/category/ai)
- [New Alibaba AI framework skips loading every tool, cutting agent token use 99% (VentureBeat)](https://venturebeat.com/category/ai)
- [Z.ai launches ZCode to challenge Cursor, Claude Code and GitHub Copilot (VentureBeat)](https://venturebeat.com/category/ai)
- [Morgan Stanley cut its riskiest reconciliation job in half — by making its agents less autonomous (VentureBeat)](https://venturebeat.com/category/ai)
- [Google's Gemini Omni Flash hits the API, turning enterprise video production into a conversation (VentureBeat)](https://venturebeat.com/category/ai)
- [Anthropic is bringing back Claude Fable 5 globally after US lifts export control order (VentureBeat)](https://venturebeat.com/category/ai)
- [arXiv cs.AI — July 3, 2026](https://arxiv.org/list/cs.AI/recent)

---

*（本文の情報は2026年7月3日時点のものです）*
