# OpenAIが開源セキュリティ支援プログラム「Patch the Planet」を発表 —— エージェントAIの次の焦点は「ループ」構造

2026年6月23日、AI業界で二つの大きな動きがあった。OpenAIが開源プロジェクトのセキュリティ支援に乗り出したかと思えば、同じ日にはAIチップ企業のGroqが6.5億ドルの資金調達を明らかにした。さらにAIエージェントの世界では、「ループ型アーキテクチャ」への注目が急速に立ち込めてきている。

---

## OpenAI、「Patch the Planet」で开源コミュニティのセキュリティ強化を支援

**OpenAI**は6月22日（米国時間）、开源プロジェクトのセキュリティを強化する新プログラム「**Patch the Planet**」を開始した。セキュリティ企業の**Trail of Bits**と提携し、开源プロジェクトのメンテナーに対してコードレビューや脆弱性発見のパッチ適用を支援する。

この名前は1995年の映画「Hackers」のセリフ「Hack the Planet」に由来するとされ、OpenAIらしい遊び心も垣間見える。

**Trail of Bits**のセキュリティ専門家が开源プロジェクトのコードを直接レビューし、潜在的な脆弱性を特定・パッチを当てるという流れ。开源コミュニティの声かけ Security is not an option — は、Log4Shell以降当たり前になった教訓だが、人的リソース不足に悩む开源プロジェクトにとっては朗報だ。

**開発者視点でのポイント**：
- **コードレビューの外部委託**という形は、中小开源プロジェクトのセキュリティ監査コスト問題を解決する可能性がある
- AIを活用した静的解析と人間の専門家の組み合わせは、Log4Shell級脆弱性の早期発見につながるか要注目
- OpenAIのこの動きが、今後のAIセキュリティ製品（Code Agent 보안 등）の布石인지も気になる

---

## Groq、6.5億ドルの資金調達を決定 —— Nvidiaとの「ノットアクイハイヤー」後

AIチップ企業の**Groq**は6月22日、**6.5億ドル（約1,040億円）**の新規資金調達を完了したと正式発表した。ラウンドはDallas拠点のDisruptiveが主導。

背景にあるのは、2025年12月の**Nvidiaによる200億ドルの「ノットアクイハイヤー（not-acqui-hire）」事件**だ。NvidiaはGroqの主要投資家に巨額の「ライセンス料」を支払いながら、人才を引き抜くという異例の取引で、Groqは幹部の多数を失っていた。

調達した資金は以下に使用される：
- **ネオクラウド事業**への本格参入
- 新規幹部の採用（CTO、CFO以及其他経営幹部）
- 推理（Inference）芯片のスケーリング

**開発者視点でのポイント**：
- GroqのLPU（Language Processing Unit）は高速推理に強みがあり、Claude CodeやCodexの替代芯片としての関心が高まっている
- ネオクラウド事業はOpenAIやAnthropicとのGPUクラスタ構築競争に 加わるもの
- Nvidiaの「人才獲得」方式是、AIチップ業界での競争をurther激化させる可能性

---

## エージェントAIの次の潮流：「ループ」型構造への移行

TechCrunchが報じた「The AI world is getting 'loopy'」の記事で、**Boris Cherny**（Claude Code作者）氏がMetaの@Scaleカンファレンスで示唆した内容が話題になっている。

Cherny氏によると、AIエージェント開発のトレンドは以下のように進化している：

1. **第一段階（2年前）**：人間が手でコードを書く
2. **第二段階（現在）**：エージェントがコードを生成
3. **第三段階（今後）**：**エージェントが別のエージェントにタスクを指示し、その先でコードを生成する「ループ」構造**

この「ループ」型アーキテクチャのポイントは、**複数のエージェントがバックグラウンドで継続的に連携し、无限にタスクを処理する**点にある。従来の单一エージェント型からマルチエージェント型への移行期中にある産業にとって、これは大きなパラダイムシフト意味する。

**開発者視点でのポイント**：
- **AutoGen、LangChain**などのマルチエージェントフレーム워크が、标准として定着する可能性が高い
- 「ループ」型構造では、タスクの分割粒度和エージェント間の通信プロトコルが性能を決める
- エージェント間のフィードバックループ設計は、**RAG（Retrieval-Augmented Generation）**と同様の重要课题になるつつある

---

## 参考リンク

- [OpenAI launches new initiative to help find and patch open source bugs (TechCrunch)](https://techcrunch.com/2026/06/22/openai-launches-new-initiative-to-help-find-and-patch-open-source-bugs/)
- [The AI world is getting 'loopy' (TechCrunch)](https://techcrunch.com/2026/06/22/the-ai-world-is-getting-loopy/)
- [AI chipmaker Groq confirms $650M raise, re-staffs after Nvidia's $20B not-acqui-hire deal (TechCrunch)](https://techcrunch.com/2026/06/22/ai-chipmaker-groq-confirms-650m-raise-re-staffs-after-nvidias-20b-not-acqui-hire-deal/)

---

*本文の情報は2026年6月23日時点のものです。*
