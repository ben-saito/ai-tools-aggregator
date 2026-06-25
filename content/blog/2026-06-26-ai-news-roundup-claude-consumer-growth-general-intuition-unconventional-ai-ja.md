# AI開発ニュースまとめ（2026年6月25日）

AI業界は2026年6月、第三四半期の幕開けとともに複数の重要な動きを見せている。有料消費者市場でのClaudeの急速なシェア拡大、ビデオゲームを活用したAIエージェント訓練への大型投資、そしてAI推論の電力消費を1000分の1に削減する次世代アーキテクチャの登場——本周期的は「AIの実用化」と「基盤技術の両輪」がさらに加速した週となった。

---

## Anthropic Claude、有料消費者市場でChatGPT牙城に近づく

有料AIアシスタント市場で、`ChatGPT`が支配的に君臨してきた状況に変化の兆しが出ている。Credit Card取引データ分析手のIndagariが、約2800万人の米国消費者を対象に行った調査によると、**AnthropicのClaude、有料消費者層で75%増**という急成長を記録している。

### データが生む証拠

Indagariの週間取引データは、2025年から2026年5月10日までの約1年半をカバー。APIトークン購入やサブスクリプション支払いを集計したもので、**Claudeの有料ユーザー数と収益が2026年1月時点で継続的に右肩上がり**であることが確認された。特筆すべきは、3月に米国政府への масс監視 autonomously weaponsへのモデル提供を拒否した一件で起きた成長スパイク後も、この上昇トレンドが持続した点だ。

もう一つの指標が教育プラットフォームDataCamp。同プラットフォーム（約2000万ユーザー）は、「Claude」が「AI」という検索キーワードすら上回り、**サイト内で最も検索されている用語**になったと報告している。企業向け法人研修では依然としてChatGPTコースが優勢だが、個人学習者においては**Claude курсの需要がChatGPTの3倍**に達している。過去30日間でのClaudeコース需要は18倍増加した。

Sensor Towerのプラットフォーム横断データでも、Claudeはすべてのプラットフォームで着実に成長中。ただし、**絶対数では今もChatGPTが大幅リード**を維持している。

### IPO控える両社の基盤強化

OpenAIとAnthropicの両社が上場準備を進める中、有料消費者市場でのシェアは、今後の足元を示す重要な指標となっている。Anthropicはさらに、米国政府との法的対立（最も強力なモデルの政府向け提供禁止）がBrand認知に予想外の効果をもたらしている可能性も見え始めている。

---

## General Intuition、$320Mを調達——ビデオゲームから実世界へ：AIエージェント訓練の常識を変える

纽约に本社を置くスタートアップ**General Intuition**が、2026年6月25日、$320M（推定評価額$2.3B）の資金調達を完了したと発表。同社は「ビデオゲームのプレイデータがAIエージェントの実世界適応能力を訓練できる」という異色の仮説を実証しつつある。

### ゲームデータが.roboticsを訓練する

同社はMedal（ゲーマーがクリップを共有するプラットフォーム）からスピンアウト。Medal用户在上传した**何億時間ものゲームプレイ映像**が、General Intuitionの初期データセットになった。通常の競合が映像からの actions推定（action inference）に頼るのに対し、同社は**プレイヤーが押したボタンの日時を記録したアクションラベル**を活用している点が 차별化。

TechCrunchの記者が出席したデモでは、Fortniteのようなゲーム内で100時間以上自律的にプレイを続けるAIエージェントと、同じ大脑を動かす**四足ロボット**が実演された。ロボットはオフィス内の障害物を自律的に回避しながら移動。たった8分間の実世界ロボティクスデータでfine-tune完了。ゲームで学習した「空間的時間的推論（Spatial-Temporal Reasoning）」が、シミュレーションから物理的身体への転移に成功している。

### 世界モデルとフレーム・バイ・フレーム生成

同社は традиционнаяゲームエンジンに頼らず、**フレーム・バイ・フレームで生成される世界モデル**もデモ公開。壁は壁、梯子は昇降用、影は太陽の位置に応じて伸びる——これらの物理法則を数百万時間のゲームプレイから獲得している。

調達資金は引き続きモデル開発とチーム拡張に投入される見込み。

---

## Databricks元AI責任者、Naveen Raoの新会社——AIの電力消費を1000分の1にする

Databricks元AI責任者の**Naveen Rao**氏が率いる**Unconventional AI**が、2026年6月25日、首个画像生成モデル「Un-0」を公开发表。同社が开発する**発振素子（Oscillator）ベースの计算アーキテクチャ**の「hello world」段階の実証となる。

### 扩散モデルに匹敌する性能——消費電力は1000分の1

Un-0は、Stable DiffusionやOpenAIのGPT Image 1に匹敵する画像生成能力を持つ。だが従来のGPU（NVIDIA A100/H100等）を用いず、**発振素子ベースのまったく新しい演算アーキテクチャ**を採用している。

Rao氏によれば、現在のバージョンは软件シミュレーション上で動作しているが、近く実際のチップ設計図公开发表予定。将来的には推论用チップからネットワーク接続まで垂直統合し、**消費電力99.9%減でのAI推論提供**を目指す。

### 電力——AIスケーリングの根本的ボトルネック

Rao氏が强调するのは「**AIスケーリングの限界はエネルギーにある**」という论点。従来の扩展則（Scaling Law）は計算量とデータ量の増加に伴う性能向上を前提としてきたが、GPU集群の電力消費増大がその拡張の壁になりつつある。Unconventionalのアプローチは、この電力制約に根本的に挑むものだ。

従業員数50人未満の小さなチームながら、同社の目标是 dataセンター全体の電力コスト構造を変える水準の野心的なものとなっている。

---

## その他も気になるAIトピック

### Adobe、Topaz Labsを買収

Adobeが画像・動画品質向上ツールの**Topaz Labs**を取得。Adobe Fireflyなどの生成AI機能強化に向けた戦略的'acquisitionとみる向きが多い。

### Amazon、印度に$13BのAIインフラ投資

Amazonがインド市場に**130億米ドル**の新規AIインフラ投資を表明。AWSのリージョン拡張と生成AIサービス拡大が主軸。

### Netris、a16zから$15Mを調達

AI 네오클라우드（新規クラウド服务商）の开设速度を早めるNetrisがAndreessen Horowitz主導のシリーズAで**1500万米ドル**を調達。

### Cerebras、決算後に股价急落

AI专用チップメーカーのCerebras Systemsが決算発表後、CEOの利益率展望に関する説明が误会されていたとして、**株価急落**を取引后悔した。

---

## 参考リンク

- [Anthropic's Claude is winning over paid consumers, a market owned by ChatGPT - TechCrunch](https://techcrunch.com/2026/06/25/anthropics-claude-is-winning-over-paid-consumers-a-market-owned-by-chatgpt/)
- [General Intuition's $2.3B bet that video games can train AI agents for the real world - TechCrunch](https://techcrunch.com/2026/06/25/general-intuitions-2-3b-bet-that-video-games-can-train-ai-agents-for-the-real-world/)
- [Databricks' former AI chief thinks he can cut AI's power bill by 1,000x - TechCrunch](https://techcrunch.com/2026/06/25/databricks-former-ai-chief-thinks-he-can-cut-ais-power-bill-by-1000x/)
- [Adobe acquires image and video enhancement tool maker Topaz Labs - TechCrunch](https://techcrunch.com/2026/06/25/adobe-acquires-topaz-labs/)
- [Amazon ups India bet with fresh $13B AI infrastructure investment - TechCrunch](https://techcrunch.com/2026/06/25/amazon-india-13b-ai-investment/)
- [Netris raises $15M Series A from a16z to help AI neoclouds go live faster - TechCrunch](https://techcrunch.com/2026/06/25/netris-raises-15m-series-a-a16z/)

---

*（本文の情報は2026年6月26日時点のものです）*
