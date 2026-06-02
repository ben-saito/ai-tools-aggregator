# AI開発 最新動向 2026年6月 — NVIDIAがエッジAIにAgentic AIを持ち込み、Googleは800億ドル調達

AI経済が従来のGDP統計を突き崩している。米国のAIセクターの名目GDPは約2500億ドルに達し、品質調整後で年間2600%以上成長している——しかし従来の統計はほとんどそれを「見て」いない。2026年6月、生成AIとAgentic AIの開発競争が新たな段階に入った。

---

## NVIDIA、エッジAI向けにAgentic AIを本格展開

NVIDIAはCOMPUTEXにて**JetPack 7.2**と**NemoClaw**をJetsonプラットフォームへ導入すると発表し、エージェントAIをデータセンターから現実の物理世界へ送り出す戦略を加速した。

**JetPack 7.2**の主要機能:
- **Yocto対応OS**: 産業用途向けの軽量Linuxディストリビューション、カスタマイズ性とメモリ効率を両立
- **CUDA 13** on Jetson Orin: 最新計算スタックを既存デバイスへ提供
- **Jetson AGX Orin 32GB**: AI演算性能が241 TOPSへ向上（従来比20%増）
- **MIG（マルチインスタンスGPU）** + リアルタイムカーネルをJetson Thorでサポート: ロボットの知覚システムなど、途切れが許されないワークロードにGPUリソースを分離確保

**NemoClaw**は、エージェントAIフレームワークをJetsonに単一コマンドでデプロイ可能。Solomon（ヒューマノイドロボット）、Advantech（工場向けAI brain）、Rebotnix（スマートシティカメラ）、Spingence（製造欠陥検出）など既に本番採用が始まっている。

SandStarはJetson Orin NX + NemoClawでAI自動販売機を30カ国以上に展開。メモリ最適化により16GBデバイスから8GBデバイスへの移行を実現し、デプロイコストを大幅に削減した。

> 「Agentic AIはここにあり、Jetsonのプログラム可能性と高性能性が、物理AIエージェントをエッジで即座に本番デプロイすることを可能にする」— Deepu Talla、NVIDIAロボティクス＆エッジコンピューティング担当VP

---

## Google、800億ドル調達でAIインフラを大幅拡張

AlphabetがAIインフラ建設のため**800億ドル（約11.5兆円）**の増資計画を表明。米国のcompute支出は2023年の370億ドルから2024年の900億ドル、2025年には2190億ドルへと急成長しており、Googleはその流れの最前線に立つ。

同日、AIセキュリティスタートアップの**ZeroDrift**も1000万ドルの資金調達を発表。AIモデルとエンドユーザーの間に位置し、コンプライアンス違反の可能性のあるメッセージを検出・置換する新しいAIコンプライアンスサービスを展開。AIセキュリティ分野への注目がさらに高まっている。

---

## 米国AI経済の課題——「見せないGDP」

University of VirginiaとAnthropicの経済学者らが共同研究で、米国のAI経済は品質調整後で**年間2271〜2290%成長**しているが、従来のGDP統計ではその大部分が「不可視」になっていると警鐘を鳴らす。

3つの測定アプローチ:
- **名目compute支出**: 2023→2024→2025年で370億→900億→2190億ドルへと急成長
- **生compute容量**: 新型チップの効率向上により、実際の容量は年間200%以上で成長
- **品質調整済みAI出力**: 推論価格の低落とアルゴリズム改善を織り込むと、2024年の成長率は2290%、2025年も2271%

従来の統計では緩やかに成長するセクターに見えるものが、実際のunderlying capacityでは年間2倍以上Doublingしている。この測定問題を放置すれば、10年後の財政計画や税制改正、公共政策の設計が大きく狂う可能性がある。

---

## Anthropic、ClaudeをCritical Infrastructureへ展開

Anthropicは**Claude Mythos**を15カ国以上の重要インフラへスケールさせている。医療、金融、エネルギー、防衛などのcritical sectors涵盖し、Claudeの活用範囲が大きく扩展。Opus 4.8では新たな「動的ワークフロー」機能も導入され、より複雑なタスクを自律的に処理できるようになった。

---

## ヨーロッパのAI戦略——Silicon Valleyとの乖離

TechCrunchの分析によれば、欧洲がAI政策でアメリカとの戦略的分手了明確にしつつある。EUのAI Actに基づく規制枠組みに対し、米国の自由主義的なアプローチと異なるアプローチを採用。技術主権、データローカライゼーション、説明責任の面で大きな差異が生じている。

---

## 参考リンク

- [NVIDIA Jetson Brings Agentic AI to the Physical World](https://blogs.nvidia.com/blog/jetson-agentic-ai-physical-world/)
- [ZeroDrift raises $10M to protect AI models](https://techcrunch.com/2026/06/02/zerodrift-raises-10-million-to-protect-ai-models-from-themselves/)
- [Alphabet plans to raise $80B for AI buildout](https://techcrunch.com/2026/06/01/alphabet-plans-to-raise-80-billion-to-pay-for-ai-buildout/)
- [Anthropic scales Claude Mythos to critical infrastructure](https://techcrunch.com/2026/06/02/anthropic-scales-claude-mythos-to-critical-infrastructure-in-15-countries/)
- [How Europe's AI strategy diverges from Silicon Valley's](https://techcrunch.com/2026/06/02/how-europes-ai-strategy-diverges-from-silicon-valleys/)
- [Import AI 459: AI oversight is difficult](https://jack-clark.net/2026/06/01/import-ai-459-ai-oversight-is-difficult-scaling-laws-for-protein-folding-models-and-pricing-the-extinction-risk-of-ai-systems/)

---

*（本文の情報は2026年6月3日時点のものです）*