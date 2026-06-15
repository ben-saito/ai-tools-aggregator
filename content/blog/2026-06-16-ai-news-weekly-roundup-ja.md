# AI開発ニュース週間まとめ（2026年6月第2週）

2026年6月第2週は，米政府によるAnthropic最強モデルの輸出規制問題を中心に，AIセクターが大きく揺いだ週となった。セキュリティ研究者たちの抗議，SalesforceによるAI客服スタートアップの的大型買収，インドのAIユニコーン誕生など，目が離せない展開が続いた。

---

## Anthropic Fable・Mythosモデル輸出規制問題：セキュリティ専門家が懸念を表明

今週最大のトピックは，**Trump政権がAnthropicの最強モデルFable 5およびMythos 5に対する輸出規制を実施**したことだ。ホワイトハウスはAnthropicに対し，すべてのforeign nationals（外人登録者）へのモデル提供を遮断するよう要求。Anthropicは週末を通じて対応を展開せざるを得なくなった。

The Vergeの分析記事によると这次的規制は「米国がフロンティアAIを支配しているが，政府はその利用者を決定する権時間も行使する」という現実を世界に突きつけた。cybersecurity専門家たちは連名でWhite Houseに抗議，抗議書を提出。Anthropicのモデルはすでに安全保障上のセーフガードが設けてられていたにもかかわらず，規制は「防衛家のサイバーセキュリティ能力を制限するもの」として懸念が示されている。

**開発者視点でのポイント：**

- **モデルアクセスの地政学的リスク**：最強モデルのローカル展開やAPI利用が簡単にできなくなる可能性
- **コンプライアンス要件の変化**：輸出規制への対応のため，モデル選定基準の見直しが必要
- **代替シナリオの検討**：Claude以外のモデル（GPT-5，DeepSeek等）への移行計画も策定すべき

---

## Salesforce，Finを$3.6Bで買収——AIエージェント戦略加速

SalesforceがAI客服プラットフォームの**Finを36億ドルで買収**ことがTechCrunchにより伝えられた。Finは客户服务自動化に特化したAIエージェントを提供しており，Salesforceは既存のエンタープライズプラットフォーム「Agentforce」の強化に活用する方針。

この買収は「AIエージェントが従業員になる」という時代の始まりを印象付ける。AIエージェントにID（アイデンティティ）を付与するスタートアップのNewCoreが同時期に$66Mを調達したことも，このトレンドを裏付けている。

**開発者視点でのポイント：**

- **自律型AIエージェントの企業導入が加速**——LangChainやAutoGenなどのフレームワーク需要拡大
- **AIエージェントの身份管理・権限管理**が新しい課題として浮上
- SalesforceのAgentforceとFinの統合により，CRM×AIエージェントのデファクトが形成されつつある

---

## インドのAIユニコーン：Sarvamが$234Mを調達

インドのAIスタートアップの**Sarvam**が，HCLTech主導の投資ラウンドで2億3400万ドルの資金調達を実施し，印度最新のAIユニコーンとなった。Bessemer Venture Partners，Khosla Ventures，Lightspeed Venture Partnersなど有名VCが名を連ねる。

Sarvamは生成AIソリューションを手掛けており，印度市場特有的課題——多言語対応，方言処理など——にAIを活用している。インドIT最大手のHCLTechが$150Mを出資することで，Enterprise向けAI市場での協業も見込まれる。

**開発者視点でのポイント：**

- **新興市場のAIスタートアップ崛起**——グローバルVCの資金がアジアに流入
- 多言語・多方言対応AIというニッチ分野での競争激化
- Enterprise AIの地域適応（ローカライゼーション）ニーズ拡大

---

## Import AI 461より：AIセーフティ新組織Sequent，Alignment問題の緊急性を指摘

Jack ClarkのImport AIで注目すべきは，英国AI Security InstituteのAlignmentチーム出身者とTimaeusの研究者が手を組み，**新セーフティNPO「Sequent」**を立ち上げたことだ。

Sequentの主張は直接的だ：「**Alignment is not on track（Alignmentは軌道に乗っていない）**」。ASI（超知性AI）が数年以内に開発される可能性がある一方，現在のAIラボのalignmentへの取り組みは「理論的な事前に確証を与えるものではなく反応的なもの」に留まっていると批判する。

Sequentは$100-150Mの初期調達を目指しつつ，40-80名の研究者を雇用し，スケーラブルなオーバーヘッド，learning theory，heuristic arguments，ゲーム理論，パーソナリティなど複数の別アプローチでalignment研究を推進する方針。

**開発者視点でのポイント：**

- **AI安全性研究の産業化**——NPO形式ながらも大規模資金で研究を推進
- 「事前に安全を証明してからASIを構築する」という理想と現実のギャップ
- RSI（再帰的自己改善）前のAlignment確保が急務との認識

---

## 技術ベンチマーク動向：FrontierCodeとMiMo-V2.5-Pro

### FrontierCode：Cognitionが新しいCoding評価基準

Cognition（Devinの開発者）が公開した**FrontierCode**は，LLMのコード品質を評価する新しいベンチマークだ。特徴として：

- **Diamond難易度**でClaude Opus 4.8回答率13.4%，GPT-5.5が6.3%という難解さ
- 150のタスクを3段階の難易度で分级（Diamond / Main / Extended）
- コードの正確性だけでなく，テスト品質，scopeの纪律，スタイル，コンプライアンス準拠度を総合的に評価

SWE-Benchが飽和しつつある中，**来年6月までにDiamondで70%超え予測**されており，コーディング評価基准の進歩が速い。

### Xiaomi MiMo-V2.5-Pro-UltraSpeed：1000トークン/秒の壁

Xiaomiが发布了**MiMo-V2.5-Pro-UltraSpeed**は，FP4量子化，DFlash（投機的デコーディング手法），TileRTとの共同設計により，**8-GPU通常ノードで1000トークン/秒を達成**した。

**開発者視点でのポイント：**

- **推論速度が新しい競争軸に**——1000トークン/秒は実用的なリアルタイム応用を開拓
- 投機的デコーディングとハードウェア 맞춤 최적화組み合わせの有效性
- 中国企業にとっては輸出規制による高端GPUアクセスの制約を受けつつも，ソフトウェア最適化で性能向上を図る動き

---

## AI研究Internの替代：新しい評価基準AARRI

西安交通大学と西安電子科技大学らの研究チームは，**AARR（Act As a Real Researcher）ベンチマークファミリー**を開始した。最初の成果であるAARRI-Benchは，AIシステムが研究Internの仕事をどの程度代替できるかを評価する。

現在の最高性能は**Claude-Opus-4.7 + Mini-Swe-Agentハーネスで68.3%**。DeepSeek-v4-Flashが約60%で続く。研究Internのタスクを「文脈理解」「姿勢（self-awareness）」「Hands-on（実行）」「相互運用」の4カテゴリーに分類し評価している。

**開発者視点でのポイント：**

- **AI研究支援自動化**が現実味を増してきた——68%という数字は印象的
- エージェント評価の细分化（文脈・姿勢・実行・相互運用）は実戦的なフレームワーク
- これからのAI開発では，研究者生産性向上ツールとしてのAIが重要な焦点に

---

## 参考リンク

- [Trump's Anthropic shutdown just made the case for non-American AI - The Verge](https://www.theverge.com/ai-artificial-intelligence/949986/anthropic-fable-mythos-shutdown-sovereign-ai)
- [Salesforce acquires AI customer service platform Fin for $3.6 billion - TechCrunch](https://techcrunch.com/2026/06/15/salesforce-acquires-ai-customer-service-platform-fin-for-3-6b/)
- [Sarvam becomes India's newest AI unicorn with $234 million funding - TechCrunch](https://techcrunch.com/2026/06/15/sarvam-becomes-indias-newest-ai-unicorn-with-234-million-funding-round-led-by-hcltech/)
- [NewCore emerges with $66M to give AI agents identities - TechCrunch](https://techcrunch.com/2026/06/15/ai-agents-are-becoming-employees-newcore-emerges-with-66m-to-give-them-identities/)
- [Import AI 461 - Jack Clark](https://jack-clark.net/2026/06/15/import-ai-461-alignment-is-not-on-track-frontiercode-and-synthetic-research-interns/)
- [FrontierCode - Cognition](https://cognition.ai/blog/frontier-code)
- [MiMo-V2.5-Pro-UltraSpeed: Pushing 1T-Parameter Model Generation Speed to 1000 TPS - Xiaomi](https://mimo.xiaomi.com/blog/mimo-tilert-1000tps)

---

*（本文の情報は2026年6月15日時点のものです）*
