# AI開発ニュース週間レポート：Claude Coworkのモバイル対応、OSWORLD 2.0公開、GPGPUカーネル自動生成の到達点

2026年7月第1週は、**AIエージェントの日常業務への本格展開**と**ベンチマークの進化**が顕著な週となった。Claude CoworkがモバイルとWebにようやく対応し、経済的に価値あるオンラインタスクの自動化率が4ヶ月で6倍に上昇。さらに長時間のコンピュータ操作を評価するOSWORLD 2.0や、GPUカーネルを自律生成するAIの成果など、開発者にとって重要な進展が立て続けに発表された。

---

## Anthropic、Claude CoworkをモバイルとWebに拡大

TechCrunchが7月7日に伝えたところによると、Anthropicのコーディングエージェント「**Claude Cowork**」がついにモバイルアプリケーションとWeb版に対応した。これまでは主にユーザーのノートPC上で動作していたCoworkが、Max契約者を対象に外出先からも利用可能になった。

### 何を解决的问题か

開発者は外出先でタスクを開始し、モバイル端末で進捗を確認し、ノートPCを閉じたまま完成品を受け取れるようになった。コード生成・修正・レビューといった作業が**ノートPC依存から解放**され、開発ワークフローの柔軟性が大幅に向上する。

### 競合状況

コーディングエージェント市場は激化しており、Coworkのモバイル対応はGitHub Copilot WorkspaceやCursorなど既存プレイヤーに対する**ユーザー体験の強化**と読み取れる。AnthropicはClaudeの推論能力を活かしながら、実務での利用シーンを広げる方針だ。

---

## AIによるオンラインフリーランスタスクの自動化率が急上昇

AI安全研究センター（CAIS）とScale Labsが7月に公开发表した调查结果によると、**Remote Labor Index（RLI）** におけるAIシステムの成功率が2025年10月のlaunch時**2.5%**から2026年7月には**16.1%**まで上昇した。仅仅8个月で**6倍以上**の增长である。

### 评测对象のタスク种类

- 指輪デザイン（CAD/3Dモデル作成＋フォトリアリスティック渲染）
- CM向け2Dアニメーション動画制作
- 建築士向け平面図＋レンダリング作成

### 先进モデルの成绩

| モデル | RLI成功率 |
|--------|----------|
| Fable 5 | 16.1% |
| Opus 4.8 | 8.3% |
| GPT-5.5 | 6.3% |

この上昇傾向が続けば、オンライン雇用構造根本上改变の可能性が浮上。Jack Clark氏（Import AI）は「**AIシステムの経済的自動化能力の拡大速度が、人間の比較優位の拡大速度を上回っている**」と警告する。

---

## OSWORLD 2.0：AIの長時間コンピュータ操作能力を评测

香港大学・UCサンディエゴ・哥伦比亚大学などの共同研究が、**OSWORLD 2.0**を公開した。1.0が平均2分で解けるタスクだったのに対し、2.0の中央値タスクは人間が完了までに**約1.6時間**要する108の長時間タスクで構成される。

### 评测范围の広がり

- **対応ソフトウェア**: Slack、LinkedIn、GitLab、Overleaf、Zotero、AWSコンソール、REAPER、MuseScoreなど
- **自己ホスト型ウェブサイト**: 31件（含め保険請求・ビザ申請・学会管理ポータル風サイト）
- **タスクカテゴリ**: ドキュメント作成、ソフトウェア・データベース作業、財務・運用分析、管理業務営業・顧客サポート、グラフィックプレゼンテーション

### 現在の最高成绩

**Claude Opus 4.8**（maximum thinking＋batched tool calls）で**binary accuracy 20.6%**、**partial-score accuracy 54.8%**。タスクが伸びるほど性能が低下し、「隠し状態の回復」「多数項目の追跡」「矛盾情報への対処」「要件変更への適応」が特に難しい。

### ベンチマーク歴史から見る期待値

OSWORLD 1.0では2025年7月最高スコア约30%→2026年6月MiniMax M3で約75%まで上昇。因此、2.0も类似の学習曲線を描く可能性が高い。

---

## Fable、GPUカーネル自動生成で最速記録樹立

Import AI 464が伝えたところによると、Fableは**KernelBench-Mega**で「**最初の本格的（かつ最速）メガカーネル**」を達成した。NVIDIA RTX PRO 6000 Blackwell上でPyTorch最佳化ベース 대비**18.71倍高速化**を達成。其他の答案是如下：

- **Claude Opus 4.8**（Triton）: 14.4X
- **GLM-5.2**（Triton）: 11.14X
- **GPT 5.5**（Triton）: 4.34X

### 注目すべき技術的特徴

この解法は「**decodeされたトークンごとに正確に1つのcooperative kernel launch**」のみ使用。他のエントリーはトークンごとに4〜14の别々のカーネル起動に分解していた。この効率性により、「カーネル設計」というAI研究開発の根本的な作業をAIが自律的に改善できる可能性が見えてきた。

### なぜ重要か

**再帰的自己改善（RSI）** の観点から、カーネル設計能力を自動化できることは关键的なマイルストーン。ベンチマーク开发者Elliot Arledge氏も「**これはAIが自分を構築する能力の指標**」と評価する。

---

## スマートグラスの主流はカメラレスへ：Solos AirGo A6

The Vergeが7月6/7日に伝えたところによると、Solosが**AirGo A6**を発表。前モデルA5（约36〜40g）に対し、A6は約**19g**を実現。カメラを廃し、音声相互作用主体のAIアシスタント搭載という設計方針転換だ。

Metaの新型メガネが約54〜60gであることを考えると、**19gという軽さは大きな差別化要因**となる。処方レンズへの対応も予定されており、実用性重視の設計思路が際立つ。

---

## セキュリティ動向：最初の「AI実行」ランサムウェア攻撃も人間の関与残る

TechCrunchは7月6日、「最初のAI主体型ランサムウェア攻撃」と題する報道を配信したが、詳細を追くと**AIは技術的実行のみを担当**し、受害者の选定、インフラ構築、窃取credentialの提供は全て人間が担当していた。完全な自律型サイバー犯罪ではなく、「**人間のOperatorがOrchestratorとなり、AIがExecutorとなる分業**」が現在の実態である。

---

## 参考リンク

- [Claude Cowork expands to mobile and web (TechCrunch)](https://techcrunch.com/2026/07/07/the-coding-agent-wars-are-spilling-into-the-rest-of-the-office-claude-cowork/)
- [Savi's app aims to protect consumers from AI scams (TechCrunch)](https://techcrunch.com/2026/07/07/savis-app-aims-to-protect-consumers-from-realistic-ai-scams-like-kidnappers-demanding-ransom/)
- [The first American autonomous ground vehicles are fighting in Ukraine (TechCrunch)](https://techcrunch.com/2026/07/07/the-first-american-autonomous-ground-vehicles-are-fighting-in-ukraine/)
- [The first AI-run ransomware attack still needed a human (TechCrunch)](https://techcrunch.com/2026/06/the-first-ai-run-ransomware-attack-still-needed-a-human/)
- [Import AI 464: Fable writes GPU kernels; AI automation; and analog computation](https://importai.substack.com/p/import-ai-464-fables-writes-gpu-kernels)
- [OSWORLD 2.0 Official](https://osworld-v2.xlang.ai/)
- [KernelBench Mega Leaderboard](https://kernelbench.com/mega)
- [Solos AirGo A6 smart glasses (The Verge)](https://www.theverge.com/tech/961711/solos-airgo-a6-smart-glasses-ai-assistant-privacy)

---

*（本文の情報は2026年7月8日時点のものです）*
