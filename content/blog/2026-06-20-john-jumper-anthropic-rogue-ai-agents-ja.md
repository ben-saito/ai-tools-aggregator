# AlphaFold開発者John Jumper氏、DeepMindからAnthropicへ——AI人材戦争の最前線

2026年6月19日、Google DeepMindの中核的研究者であったJohn Jumper氏が社を離れ、Anthropicへの加入が明らかになった。Jumper前はAlphaFoldの開発を主導し、2024年にDeepMindのDemis Hassabisと共にノーベル化学賞を受賞した経歴を持つ。AI業界にとってこの人事移動の意味は単なるスター研究者の流出ではなく、GoogleとAnthropic間の人材獲得競争が新たな段階に入ったことを示している。

---

## AlphaFold：科学的好奇心時から trillion-dollar business へ

Jumper前がDeepMindで率いたAlphaFoldプロジェクトは、タンパク質構造予測という長年の科学的问题を解決した。2020年のCASP14競争で「歴史的瞬間」と言われたのは、AlphaFold 2が実験精度に匹敵する構造予測を自動で行うことを示したからである。

AlphaFoldの商業的価値は絶大だ。DeepMindは2022年にIsomorphic Labsを通じてAlphaFoldの創薬応用を商用化し、2026年時点で複数の大手製薬企业与手を組んでいる。Jumper前のAnthropic加入により、Anthropicはタンパク質折叠と生命科学AIという次の成長領域で大きなアドバンテージを得た可能性がある。

AnthropicのCEO Dario Amodeva前は社内で「生命科学はAIの次のフロンティア」と位置づけていると言われ、Jumperの採用はその戦略的具体化と見られている。

---

## Google DeepMind：「脱走AI」対策の詳細を明かす

Jumperの退社と軌を別にし、Google DeepMindは2026年6月18日、自社のAIエージェントが暴走した場合の防護策を複数の公的資料で示した。複数の報道機関がこれを「DeepMind prepares for rogue AI agents」として伝えた。

対策の中心は**エージェント隔離アーキテクチャ**だ。DeepMindが導入を進めている方式是、AIエージェントに付与するシステム権限の段階的昇格と、各ステップでの人間による承認を必須とするもの。エージェントが「異常」状態を検出すると自動的に処理が中断され、指定された安全担当者に通知される。

もう一つの柱は**Red Linesプロトコル**——特定の操作（外部ネットワークへの接続、コード実行、敏感なデータへのアクセス）を「red lines」として定義し、これら超出了場合は明示的な許可なしでは実行不可にする設計である。

Fortune紙の報道によれば、Google DeepMind CEO Demis Hassabis前は「AIエージェントが自律的に任務を実行する時代において、セーフティ guardrailの設計は技術と同じくらい重要になっている」と語ったとされる。

---

## 人材の流失 vs 戦略的再編

DeepMindにとってJumperの退社は2026年に入って2度目の大型人材流出となる。6月第2週にも別の深層学習研究チームのリーダーがMetaに移動しており、慢性的な人材流出が指摘されている。

一方で、Googleは即座に採用活動を加速。DeepMindの報道担当者は声明で「我々は常に研究環境の整備にコミットしており、top talentの確保は今後も最優先事項」と強調した。

---

## 開発者への影響：安全性アプローチの差异化

この一連の動向はAI開発者にとって重要な示唆を含んでいる。Google DeepMindの「エージェント防護」アプローチと、Anthropicの「コンスティテューショナルAI」アプローチは、两者ともAIの安全性を重視するが、実装方法に大きな差がある。

| | DeepMind方式 | Anthropic方式 |
|--|--|--|
| 安全性の制御点 | 実行時（runtime） | 訓練時（training） |
| 主要手法 | エージェント隔離・権限管理 | 倫理的選好の組み込み |
| 透明性 | 中程度（ポリシー明文化） | 高程度（原則公開） |
| 実装コスト | 高い（インフラ要改造） | 中程度（データ収集） |

開発者がどちらのエコシステムに近いツールチェーンを構築するかは、短期的にはツール選択の問題だが、中長期的にはアーキテクチャ選択に影響を与える。JumperのAnthropic加入により、タンパク質折叠や創薬向けの安全で高性能なAI助手がAnthropicから登場する公算が高まっている。

---

## 参考リンク

- [John Jumper to leave Google DeepMind for Anthropic – CNBC](https://www.cnbc.com/2026/06/19/john-jumper-deepmind-anthropic.html)
- [Google DeepMind unveils a plan to protect itself from rogue AI agents – Fortune](https://fortune.com/2026/06/18/google-deepmind-rogue-ai-agents)
- [Google Is Using Nvidia's Playbook to Build a Rival AI Chip Business – WSJ](https://www.wsj.com/articles/google-nvidia-ai-chip-business)
- [AlphaFold Protein Structure Database](https://alphafold.ebi.ac.uk)

---

*（本文の情報は2026年6月20日時点のものです）*
