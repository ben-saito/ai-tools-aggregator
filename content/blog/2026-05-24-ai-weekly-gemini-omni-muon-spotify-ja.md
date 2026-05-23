# AI開発週次レポート：Gemini Omni、Muon最適化問題、Spotify-UMG革新的パートナーシップ

2026年5月23日時点のAI開発ニュースをお届けする。先週はGoogleの動画生成AI「Gemini Omni」のハンズオン、xAIの地球外太陽能計画、オプティマイザの根本的問題、そしてSpotifyとUniversal Music Group（UMG）のAIカバー前例のないパートナーシップなど、波乱に満ちた一周だった。

---

## Google Gemini Omni：AI動画生成の現状と限界

The Verge記者が子ども分の縫いぐるみ（「Buddy the deer」）を使ってGemini Omniの動画を生成する実験を行った結果は、**AI動画生成技術の目覚ましい進歩と、まだ克服されていない根本的な限界**を浮き彫りにした。

### 主な所見

- **良い点**：Veo（5ヶ月前）と比較して大幅に進化。キャラクターの一貫性が向上し、プロンプトへの忠実度が高まっている
- **課題**：クリップ中最中にBuddyの身体的な一貫性が失われる（例：パラシュート降下中の突然の向き変化）。小道具の連続性も完全ではない（蜂蜜瓶がJar→透明容器→ сноваJarに変化）
- **コスト**：15〜40クレジット/クリップ。編集には40クレジット。$20/月プランで月1,000クレジットのため、約20クリップで残高145クレジットに

### 開発者視点からの考察

Omni的最大の問題は**長いクリップでの「一貫性の崩壊」**だ。マルチショットビデオで同じキャラクターを維持するのは依然困難で、生成AIが「バースト」的に要素を再構成するケースも散見される。商用利用にはまだ距離があると言えよう。

---

## xAI、地球上の太陽エネルギーを放棄：宇宙データセンター計画

TechCrunch》报道 따르면、Elon Musk率いるxAIは地球上の太陽パネルのTeslaからの調達を大幅に増加させておらず、代わりにSpaceXの打ち上げ能力を使った**宇宙ベースの太陽光によるデータセンター**計画を本格化している。

### 計画の核心

- **現在のエネルギー源**：天然ガスタービン（Tesla Megapacksでピーク管理）
- **SpaceXの主張**：宇宙ベースの太陽光アレイは「地上の5倍以上」のエネルギーを生成可能（24時間日照）
- **投資額**：xAIは過去2年間でTesla Megapacksに$697 million調達。SpaceXには$131 millionでCybertruckを1,279台調達
- **根本思想**：「Terawatt規模の計算が毎年必要になる」と予測し、地上の制約から宇宙へ

### 批判的視点

地面から宇宙に太陽能パネルを打ち上げるより、太陽電池を輸送する方がエネルギー効率は高いのは明らか。地上の太陽エネルギーはまだ無限の可能性を残しており、「完璧を追求するが故に良いものを逃す」リスクがある。

---

## Spotify × Universal Music Group：AIカバーパートナーシップの前例なき合意

SpotifyとUMGはファン作成のAIカバーとリミックスを合法化する歴史的合意に署名した。これは**事後承認ではなく事前同意**という新しい枠組み、音乐業界におけるAI使用に関する最も先進的な法的枠組みとなる。

### 合意の三本柱

1. **同意（Consent）**：アーティストと権利者はAIツールへの参加を選択できる
2. **クレジット（Credit）**：参加者は適切に報奨される
3. **報酬（Compensation）**：事後的な和解ではなく前程的なライセンス体系

### 技術的意義

このパートナーシップは、Sunoなどの「謝罪事後型」アプローチとは一線を画す。SpotifyのAlex Norström CEOが「音楽に関する難しい問題を解決することはSpotifyの使命」と企業側で表明したように、AI生成物が商利用される前に法的地位を確立した点は画期的である。

---

## 最適化問題の深層：Muon オプティマイザの Neuron Death 問題

Import AIの分析によると、Tilde Researchの研究者が**Muonオプティマイザの致命的な欠陥**を発見した。Muonは「行norm異方性」を継承し、高矩阵で「 значительная portions of neurons in MLP layers to permanently die（ значительная 部分 のニューロンが永久に死亡）」を引き起こす。

### 問題の詳細

- **学習率warmup中に25%以上のニューロンが死亡**
- 一度死亡したニューロンはその後回復しない
- 残り75%が disproportionately大きな更新を受け取る

### 解決策：Aurora オプティマイザ

Tilde Researchは`tild_research/aurora-release`としてAuroraをリリースした。テスト結果：

- **1.1Bパラメータートランスフォーマー（〜100Bトークン）**で評価
- Muon（2.31）およびNorMuon（2.33）を大幅に上回り **2.26**
- **MMLUでMuon比+10ポイント**
- Alexander Doria（Prix Labs）が600Mモデルで独立検証済み

### 開発者への教訓

Auroraは、既存のオプティマイザの「新発見」がいかに困難かを示している。AdamWに勝るものはまだ出現していないが、Muonのような「新発見」の失敗からは、「深い数学的理解を伴わない最適化は危険」という点が明らかになっている。

---

## 「Positive Alignment」研究：安全を超えたAIのあり方

Oxford、Google DeepMind、OpenAI、Anthropicなどの共同研究者が「**Positive Alignment**」 position paperを発表し、AI安全性研究の次の段階提出了。

### 核心論点

従来の「Negative Alignment」（失敗モードの排除）に加え、「**人間の繁栄を積極的に支える**」研究方向の必要性。

### 批判的な問題提起

| 問題 | 説明 |
|------|------|
| **Floor without ceiling** | モデルの安全性を確保しても、平均的または迎合的な回答に終わる |
| **Preference-wellbeing divergence** | ユーザーは媚態や素早い回答を好み、本質的な理解 ост_alpha |
| **Hidden value system** | 「安全性」という言語が価値判断を不明瞭にしている |
| **Scalability** | 陽な否定の列挙よりも、肯定的方向性が新規状況でより汎化 |

### 治理への含意

Positive Alignmentは「トップダウンの中央集権的制御」ではなく、「**分散型・競争的でrevision可能なプロセス**」を通じて実現されるべきという。これは現在のAI安全性議論における主要な論点対立を見せている。

---

## LLMによるLLM訓練：PostTrainBenchの衝撃

Tuebingen大学の研究者がPostTrainBenchを構築し、最先端LLMが他のLLMを微調整する能力を評価した。

### 結果

- **GPT 5.1 Codex Max**: 30%+改善（aggregate）
- **Opus 4.5**: 20%+改善
- **Gemini 3 Pro**: ~18%改善

人間の微調整能力が60%+改善であることを考えると、**現在のAIは人間の〜33〜50%しベルに達している**計算になる。

### 2026年9月予想

研究者らは、このベンチマークで「人間Benchmarkを上回る」を2026年9月と予測している。AI研究の多くの部分は本質的に工学的であり、今日のシステムにとって「今や手が届く」範囲内の作業であることを示唆している。

---

## 参考リンク

- [Gemini Omni Hands-on (The Verge)](https://www.theverge.com/tech/936507/gemini-omni-hands-on-deepfake-ai-video)
- [xAI Solar Power Analysis (TechCrunch)](https://techcrunch.com/2026/05/23/elon-musk-has-given-up-on-solar-power-on-earth/)
- [Spotify-UMG AI Deal (TechCrunch)](https://techcrunch.com/2026/05/21/spotify-and-universal-music-strike-deal-allowing-fan-made-ai-covers-and-remixes/)
- [Aurora Optimizer (Tilde Research)](https://blog.tilderesearch.com/blog/aurora)
- [Positive Alignment Paper (arXiv)](https://arxiv.org/abs/2605.10310)
- [PostTrainBench](https://posttrainbench.com/)

---

*（本文の情報は2026年5月23日時点のものです）*