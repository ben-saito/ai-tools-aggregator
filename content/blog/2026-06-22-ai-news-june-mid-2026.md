# 2026年6月中旬のAI開発動向：ノーベル賞科学者のDeepMind卒業、GoogleのAI検索刷新、3Bモデルの台頭

2026年6月、第27回誕生日を迎えるiOSにAI機能が本格統合される発表された。米AppleはSiriの大幅強化を含むiOS 27の詳細を明かし、さらにTrump政権がAnthropicへの規制強化を検討していることが明らかになるなどAI業界は目が離せない状況が続いている。

---

## DeepMindからAnthropicへ：AlphaFold開発者の異動

TechCrunchの報道によると、AlphaFoldの開発で知られるDeepMindの科学者John Jumper氏（2024年ノーベル化学賞共同受賞者）がAnthropicへの加入に向けて交渉を進めていることが分かった。Jumper氏の移動は、Google DeepMindにとって重要な人材流出となる。DeepMindからは近年複数の 研究者が離脱しており、AI研究の最前線における人材獲得競争の激化を如実に示している。

---

## Arbor：Claude CodeやCodex比2.5倍の効率を実現する新しいAI最適化フレームワーク

VentureBeatが報じた新しいAI最適化フレームワーク「Arbor」が話題を集めている。Arborは永続的な木構造を用いてすべての実験履歴を管理することで、 실패（失敗）を計算の浪费ではなく制約条件として再利用する。この設計により、同じ計算予算でClaude CodeやCodex都比2.5倍高い性能を達成している。従来のcoding agentsがループの中で学習しないという問題を解決するアプローチとして注目だ。

---

## Stanford大学DeLM：中央オーケストレーター不要でマルチエージェントコストを50%削減

Stanford大学の研究チームが開発した「DeLM（Distributed Language Model）」が、マルチエージェントシステムのコスト削減において革新的な成果を上げている。中央オーケストレーターを必要とせず、共有失敗検証とgistベースの協調により、タスク実行コストを50%削減することに成功した。 orchestrator不要という設計は、エージェント間通信のオーバーヘッド削減に貢献している。

---

## 中国WeiboのVibeThinker-3B：30億パラメータで巨大モデルを挑衅

中国SNS大手Sina Weiboの研究チームがわずか30億パラメータの言語モデル「VibeThinker-3B」を発表し、AI業界で大きな波紋を広げている。14ページのTechnical Reportによると、VibeThinker-3BはGoogle DeepMind、OpenAI、Anthropic、DeepSeekの数百倍大きい旗舰モデルに匹敵するか、それ以上の推論性能を達成しているという。ベンチマークの信頼性を巡る議論も巻き起こっている。

---

## Adobe Creative CloudへのAIエージェント統合：生成から制作 orchestrationへ

AdobeはCreative Cloud全体にAIエージェントベースのワークフローを統合すると発表した。画像・動画生成から、制作工程全体の自動化へとアプローチを転換。システムアーキテクトにとって重要なのは、この機能がAPIとして外部に公開されるかどうか。Adobeの extensiones（拡張性）戦略の行方が注目される。

---

## Anthropic Claude Design：大規模更新とトークン消費問題への対応

Anthropicは「Claude Design」の大幅アップデートをリリースした。4月に مليون（100万）用户突破した同ツールだが、PCWorldのレビュアーが25分でClaude Pro月間利用限度の80%を消費しまう「トークン消費問題」が指摘されていた。Design Systemのインポート対応やコード往返（round-trip）機能の追加など、プロダクション利用に向けた改良が進んでいる。

---

## Z.ai GLM-5.2：オープンウェイトモデルでGPT-5.5超え

Z.aiがリリースしたオープンウェイトモデル「GLM-5.2」が、複数の长視野（long-horizon）コーディングベンチマークでプロプライエタリモデルのGPT-5.5を超え、コストは6分の1に抑えられている。チームにとって主权（sovereign）インフラへの фронтенд（フロントエンド）レベルAI導入を可能にする選択肢として、Enterprise導入を検討する開発者にとって重要な選択肢となりそうだ。

---

## iOS 27のAI機能：Siri刷新とiPhoneへの本格AI統合

Appleは6月21日、iOS 27で導入される実践的なAI機能を多数披露した。Siriの刷新に加え、リアルタイム翻訳、予測入力の大幅強化、デバイス上でのオンデバイスAI処理の拡大が特徴的。開発者にとってApp Intents APIの拡張やCore MLの機能が重要なポイントとなる。

---

## 参考リンク

- [Nobel laureate John Jumper is leaving DeepMind for rival Anthropic - TechCrunch](https://techcrunch.com/2026/06/20/nobel-laureate-john-jumper-is-leaving-deepmind-for-rival-anthropic/)
- [New AI optimization framework beats Claude Code and Codex by 2.5x - VentureBeat](https://venturebeat.com/2026/06/19/new-ai-optimization-framework-beats-claude-code-and-codex-by-2-5x/)
- [Stanford's DeLM cuts multi-agent task costs 50% — without a central orchestrator - VentureBeat](https://venturebeat.com/2026/06/16/stanford-delm-cuts-multi-agent-costs-50/)
- [Why Weibo's tiny VibeThinker-3B has the AI world arguing over benchmarks again - VentureBeat](https://venturebeat.com/2026/06/17/weibo-vibethinker-3b-ai-benchmarks/)
- [Adobe embeds agentic AI workflows across Creative Cloud - VentureBeat](https://venturebeat.com/2026/06/18/adobe-creative-cloud-agentic-ai-workflows/)
- [Anthropic ships major Claude Design overhaul - VentureBeat](https://venturebeat.com/2026/06/17/anthropic-claude-design-overhaul/)
- [Z.ai's open-weights GLM-5.2 beats GPT-5.5 - VentureBeat](https://venturebeat.com/2026/06/16/z-ai-glm-5.2-beats-gpt-5.5/)
- [Beyond Siri: Here are the practical AI features coming to your iPhone in iOS 27 - TechCrunch](https://techcrunch.com/2026/06/21/beyond-siri-here-are-the-practical-ai-features-coming-to-your-iphone-in-ios-27/)

---

*本文の情報は2026年6月21日時点のものです。*
