# AI開発ニュース 2026年6月19日版：Baseten約15億ドル調達・OpenAI IPO前人事・Amazon Trainium販売計画

AIインフラ領域で大型資金調達が続き、IPO市場に向けたAIラボ間の人材獲得競争が激化している。今週は、AI推論スタートアップのBasetenが$13B評価で大型調達を計画している他、OpenAIがGoogle DeepMindの有力研究者Noam Shazeerを獲得。AmazonはNvidiaに挑む形でTrainiumチップの外販を本格化する意向を示し、Anthropicは輸出規制により最先端モデルの提供を一時停止する展開となっている。

---

## Baseten、わずか5ヶ月で估值160%増——AI推論市場で次にくるもの

AI推論スタートアップの**Baseten**が、Wall Street Journal報道によると約15億ドル（约220億円）の資金調達を最終調整いでいる。評価額は130億ドル（约1.9兆円）に達し、わずか5ヶ月前に実施した3億ドル調達時（評価額50億ドル）から**160%の評価額上昇**を記録した。

この急速な評価額上昇の背景には、Basetenの「スプリットプライスラウンド（分割価格ラウンド）」採用がある。スプリットプライスラウンドとは、優先株と обыкновенных株を組み合わせることで、表面的な評価額を吊り上げつつ実際の資金調達条件を変更する手法。WSJによれば、この手法はスタートアップがメディア受けする数字を演出するために活用されている。

**技術的側面**として注目すべきは、BasetenがAI推論（Inference）特化型企业として、モデル・ホスティングと推論最適化の両面を垂直統合している点。LLMの商用展開が増加する中推論コストの削減是关键課題であり、BasetenのアプローチはvLLMやTensorRTを含む複数の推論エンジンを单一プラットフォームで提供する。

---

## OpenAI、IPO控えてNoam Shazeerを獲得——AI лаборатория間の流動人材獲得

OpenAIがGoogle DeepMindのAI伝説的研究者**Noam Shazeer**を獲得したことが明らかになった。Shazeerは2017年の「Attention Is All You Need」論文の共著者の一人で、現代の生成AIの基础的发明者。彼はGeminiの共同リーダーを務め、3年前にCharacter AIを設立した後、Googleに20億ドル超で復帰した经历を持つ。

さらに元Trump政権のAI政策担当者**Dean Ball**も加わる。両名ともIPO前のOpenAI干部陣の強化 图ると分析されている。OpenAIは今年以来、Microsoft、Google、Anthropic、Metaの間で激化している人材獲得競争の最前線に立っている。

**技術的意思決定への影響**として、Shazeerの加入はOpenAIのモデルアーキテクチャ戦略に直接影响する可能性が高い。彼の以前の研究はTransformerの改进と効率的な推論に焦点を当てており、OpenAIが考える「次の世代モデル」の方向性与件重量級なメッセージとなっている。

---

## Amazon、Nvidia挑う——Trainiumチップの外販を正式検討

Amazon Web ServicesのAI責任者Peter DeSantis씨가Bloombergに対し、AWSが自社開発AIチップ**Trainium**の外販を検討していると明かした。Andy Jassy CEOも4月の株主向け年次手紙で、Trainium事業が独立ビジネスとして成立し得る规模感と収益性について言及していた。

現在AWSはNvidiaのH100/H200 GPUに大きく依存しており、Trainiumの外販実現は**AIチップ市場の構造変化**を示す可能性がある。技術的課題として:

- **ソフトウェアエコシステム**: Trainium要用に最適化されたモデル変換ツール（ Neuron SDK）の成熟度
- **性能要件**: 大規模言語モデルのトレーニングに特化したTrainium2のベンチマーク性能
- **Nest цены**: 顧客企業にとってNvidia GPU相比どの程度のコスト優位性があるか

Microsoftが独自チップ状況を拡大し、GoogleがTPUで既に成功している中で、AmazonのChip戦略はクラウド3社目の垂直統合の動きとして業界から注目を集めている。

---

## Anthropic輸出規制によりClaude Fable 5・Mythos 5を提供停止

Anthropicは米国政府の強制的輸出規制指令に従い、最新モデル**Claude Fable 5**と**Mythos 5**の提供を一時停止した。規制指令は「 любой иностранный националь」（任意の外国国籍者）の利用を禁じるもので、Anthropicはホワイトハウスと交渉中だが、恢复の目途は立っていない。

**Mythos 5の高度な能力**が今回の焦点。同モデルは四月デビュー以降、ソフトウェア脆弱性の発見と对策の両方に活用できる「二重使用」性を会社や当局が認知。Anthropic自身が「サイバーセキュリティ専門家と生物学研究者の手にあれば有益だが、悪意のある actorsの手に委ねれば危険になり得る」と表述していた。

Dario Amodei CEOは「"Dangerous" AI models are coming no matter what」（危険なAIモデルは无论如何迟早やってくる）と語り、技術進歩の不可逆性を強調した。輸出規制とAI安全のバランスは、今後のAIガバナンスにおける重要な论点として浮上している。

---

## YC Demo Day、11の杰出スタートアップを選定——AI过半占据

Y Combinator Demo Dayで投資家たちが选定した11の杰出スタートアップが明らかになった。VC各社の评価を総合すると、**AI関連企業が占据**하는 结构。具体的には:

- **自律型AIエンジニア**: 人間の开发者に代わってコードを書くエージェント
- **AIによる наук данных 自動化**: プロンプトで分析パイプラインを構築するツール
- **企業向けたコンプライアンスAI**: 规制 industry 向けのAI監視・監査システム

これらの選出は、VC資金のAI領域への集中を示しているが、一方で「AIバブル」に対する懸念も同時に浮上している。

---

## 参考リンク

- [AI inference startup Baseten reportedly raising $1.5B](https://techcrunch.com/2026/06/18/ai-inference-startup-baseten-reportedly-raising-1-5b-months-after-its-last-mega-round/)
- [Snap spins off AI video team into Dotmo](https://techcrunch.com/2026/06/18/snap-spins-off-ai-video-team-into-new-company-dotmo-due-to-costs/)
- [OpenAI is bringing on some big guns in the lead-up to its IPO](https://techcrunch.com/2026/06/18/openai-is-bringing-on-some-big-guns-in-the-lead-up-to-its-ipo/)
- [Amazon hopes to challenge Nvidia more directly by selling its AI chips](https://techcrunch.com/2026/06/18/amazon-hopes-to-challenge-nvidia-more-directly-by-selling-its-ai-chips/)
- ["Dangerous" AI models are coming no matter what](https://arstechnica.com/ai/2026/06/dangerous-ai-models-are-coming-no-matter-what/)

---

*（本文の情報は2026年6月19日時点のものです）*
