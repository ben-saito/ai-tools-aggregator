# AI開発ニュース週間レポート（2026年7月12日）

OpenAIが「GPT-5.6」を正式リリースし、Microsoft 365 Copilotのデフォルトモデルに採用される一方、AppleがOpenAIを提訴するサプライズ展開があった。今週はAIエージェントの実運用課題 أيضًاセキュリティ脅威も表面化する1週間となった。

---

## OpenAI、GPT-5.6を正式リリース — Microsoft 365 Copilotで主力モデルに

OpenAIは7月9日、新フラグシップモデル「**GPT-5.6**」を正式リリースした。同モデルは「より少ないトークンでより多くの知性」をコンセプトに、パーtoken性能とコスト効率を大幅に改善。翌日MicrosoftはGPT-5.6を**Microsoft 365 Copilotの優先モデル**として採用を発表。Word、Excel、PowerPoint、Chat、Cowork全体）で高品質な作業支援を実現する。

また同日に「**ChatGPT Work**」もローンチ。AIがアプリやファイル横断で自律的にアクションを実行し、プロジェクトを数時間にわたって継続できる「agentic」なワークフローを実現する。

---

## AppleがOpenAIを提訴 — 貿易秘密窃取疑惑

7月10日、AppleはOpenAIを相手取り、**貿易秘密窃取疑惑**で提訴した。TechCrunchの報道によれば、Apple側はOpenAIのシニアリーダシップ、特に長期休暇を取った元Apple従業員がこの不正行為を指示したと主張している。Jony IveのIO Productsも被告として名を連ねる。AppleはOpenAIのハードウェア計画を進める上で、Appleの機密情報を不正に入手したとされている。

---

## Meta、InstagramのAI深掘り画像を撤回 — ユーザーから批判受け

Metaは7月10日、Instagramで公開アカウントのコンテンツを基にAI画像を生成できる機能を撤回した。ユーザーがMetaのAIにInstagramの投稿をタグ付けすることで、その人物の「AIバージョン」を作成できる機能だったが、**深掘り画像生成への懸念**からユーザーから激しい批判が噴出。Metaは「フィードバックを聞いた。この機能は目標を達成できなかった」と謝罪した。

---

## Slopsquatting — AIコーディングアシスタントが生み出す新しいサプライチェーン脅威

VentureBeatは7月11日、**Slopsquatting**という新しいサプライチェーン攻撃手法を報じた。AIコーディングアシスタントが幻覚（hallucination）によって存在しないソフトウェアパッケージ名を生成し、開発者がそれをそのまま使うことで、攻撃者がそのパッケージ名を先に登録してマルウェアを仕込むという手法。従来のtyposquatting（誤字を狙った攻撃）と異なり、AIの「自信」が被害者を欺く点が特徴的。

---

## AIエージェントの実運用課題 — 企業の57%が「確信犯的な誤回答」を経験

VentureBeatの調査によると、**57%の 기업이AIエージェントが「確信犯的に間違った回答」をした経験**がある。原因の多くはモデルの性能ではなく、**コンテキスト層の不整合**にあるという。75%の企業で「agentic context layer」が未実装という衝撃のデータも明らかになった。

また、AIエージェントの**APIキー共有**も深刻な問題。69%の企業で複数エージェントが同じ認証情報を共有しており、1つのエージェントが侵害されると連鎖的な被害が発生する可能性がある。Palo Alto Networks、CrowdStrike、Ciscoはこの分野に**220億ドル以上**を投資している。

---

## 手术治疗四肢連動型ロボット — DeepMind×A24の映画パートナーシップも

Ars Technicaは7月9日、外科医が遠隔操作で四肢連動型ロボットを制御し、豚生体内で**胆嚢摘出術**に成功した世界初の事例を報じた。AIとロボティクスの融合による医療の革新が進んでいる。

またGoogle DeepMindは7月3日、映画スタジオ**A24**との提携を発表。AIとフィルムの融合に向けた「前例のない」研究パートナーシップとなる。

---

## AI Coding Security — HalluSquattingとBrown大学のAIチート問題

Ars TechnicaはAIセキュリティの最前線も報じた。人気のAIツール9つを使った**botnet構築**が可能になる「HalluSquatting」手法や、**Brown大学**でAIチートが横行し、対面試験の実施後にスコアが50%低下した事例も。OpenAIもSWE-Bench Proのベンチマーク信頼性に疑義を呈する分析を発表。AI評価の不正確さが業界全体の課題となっている。

---

## 参考リンク

- [OpenAI、GPT-5.6 リリース](https://openai.com/index/gpt-5-6)
- [ChatGPT Work エージェント](https://openai.com/index/chatgpt-for-your-most-ambitious-work)
- [Apple、OpenAIを提訴 (TechCrunch)](https://techcrunch.com/2026/07/10/apple-sues-openai-over-alleged-trade-secret-theft/)
- [Meta、Instagram AI機能を撤回 (TechCrunch)](https://techcrunch.com/2026/07/10/meta-removes-controversial-ai-feature-on-instagram-after-backlash/)
- [Slopsquatting 脅威 (VentureBeat)](https://venturebeat.com/security/forget-typosquatting-slopsquatting-is-the-software-supply-chain-threat-created-by-ai-coding-tools)
- [AIエージェント コンテキスト課題 (VentureBeat)](https://venturebeat.com/data/57-of-enterprises-have-watched-ai-agents-be-confidently-wrong-the-fix-is-an-agentic-context-layer-but-who-has-one)
- [DeepMind×A24パートナーシップ](https://deepmind.google/blog/google-deepmind-and-a24-announce-first-of-its-kind-research-partnership/)
- [四肢連動型ロボット手術 (Ars Technica)](https://arstechnica.com/ai/2026/07/humanoid-robots-controlled-by-surgeons-did-world-first-operation-on-live-pigs/)

---

*本文の情報は2026年7月12日時点のものです。*
