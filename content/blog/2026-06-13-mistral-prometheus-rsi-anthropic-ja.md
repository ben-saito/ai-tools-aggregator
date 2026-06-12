# AI業界レポート：Mistralの大型調達、Prometheusの$41B評価額、そしてAnthropicのRSI最適化

2026年6月はAI業界にとって途方もない月となっている。Mistral AIが3B eurosの資金調達を検討している新聞、Jeff Bezos支援のPrometheusが$12Bを調達して$41B評価額に達したニュース、そしてAnthropicが社内のリカーシブ・セルフ・インプローブメント（RSI）の初期兆候を公に認めたなど、注目すべき動きが次々と発表されている。本稿ではこれらのニュースを技術的観点から整理する。

---

## Mistral AI、3B eurosの資金調達を検討中 - 評価額20B eurosへ

フランス発のLLM企業**Mistral AI**が、3B euros（約$23.15B）の資金調達を検討していることがTechCrunchの報道で明らかになった。Series Cの評価額11.7B eurosからほぼ**2倍増**となる20B eurosの評価額が見込まれている。

### 技術的ポイント

Mistralは欧州で最も注目されるLLM企業の1つであり、オープンソースモデルの提供で知られる。20B eurosという評価額は、OpenAIやAnthropicといった米国勢には及ばないものの、**Mistral**の市場における位置づけの強さを示している。

### 業界への影響

- **欧州AI主権**の象徴的存在としての役割がさらに強化
- 調達資金はインフラ拡張およびモデル開発に投向されると推測
- 欧州のAI規制環境（AI Act）との絡みでも注目

---

## Prometheus（Jeff Bezos支援）：$12B調達、$41B評価額

Jeff Bezos旗下的物理AIスタートアップ**Prometheus**が$12Bもの大型調達を実施、評価額$41Bに達した。同社は「**artificial general engineer（人工汎用エンジニア）**」と称する、物理世界の自動化を目指す企業である。

### 技術的ポイント

- **物理AI（Physical AI）**：Drug design、重工学の自動化らをターゲット
- $41B評価額はbiotech×AIセクターでの歴史的規模
- Vik Bajaj氏率いるチームによる基盤研究色が濃い

### 業界への影響

- **AI×科学（Science AI）**領域への巨大資本流入の証
- 創薬・新材料探索へのAI適用が商用段階に突入
- 実世界AI（Physical AI）への投資が2026年の主要トレンドに

---

## AnthropicがRSI（リカーシブ・セルフ・インプローブメント）の初期兆候を公言

Anthropicは、同社のコードベースへのマージ数が2024年比で**8倍増**に達したなどと公に認め、「プロザイク版RSI（recursive self-improvement）の開始」を示唆する分析記事を公開した。

### 技術的ポイント

- **コードマージの加速**：2025年から加速し、2026年に8倍増
- **モデル自身の作業改善**：より高性能なモデルが自社エンジニアの研究開発タスクを assist できるようになっている
- **RSIの2段階定義**：
  - **プロザイク版**： laboratory productivityの向上（既に見えている）
  - **マクシム版**： AIが自身の後継者を設計（まだ観測されていない）

### 開発者にとっての意味

Jack Clark（Import AI主宰）は「**RSIは今後世界で最も重要な技術トレンド**」と指摘。AIシステムが自律的に自己的能力向上させる段階に入った場合、以下の 影響が考えられる：

- **開発速度の指数的加速**
- **AI安全性の新たな課題**
- **経済・社会との不整合リスク**

---

## Import AI 460号からの技術的前説

Jack ClarkのImport AI 460号では、3つの重要な研究が紹介されている：

### 1. SocioHack：社会システムの「reward hacking」を評価するベンチマーク

Kings College London、Fudan大学、Alan Turing Instituteによる共同研究。AIに「**社会システムをゲームる**」能力を評価するベンチマークSocioHackが提案された。

- **Historical（32環境）**：SEC Rule 10b5-1など実際の規制から歴史的パッチ除去済みバージョン
- **Synthetic（20環境）**：合成生成の規制脆弱性
- **Fictional（20環境）**：RPG世界にインスパイアされた架空シナリオ

**技術的詳細**：RL訓練済みLLMが「 historically patched戦略」を**61.25%の再現率**で再発見可能であることが判明。**90.85%精度**でコンプライアンスと意図のギャップを突く。

### 2. RL教練ドローンがexpert human pilotを撃退

チューリッヒ大学とGoogle DeepMindの共同研究。**PPO（Proximal Policy Optimization）**と**Perceiverエンコーダ**を用いた多要素強化学習で、ドローンレースにおける超人的パフォーマンスを達成。

- **トレーニング**：200M環境相互作用、27時間（NVIDIA RTX 4090 GPU 1枚）
- **実世界検証**：スイス国内ドローンレース王者Marvin Schaepperを撃退
- **鍵の発見**： エージェントは「**anticipatory blocking**」「**aerodynamic wake accounting**」などを明示的プログラミングなしに自己学習

### 3. 国家管理メディアがLLMの回答に影響

Natureに掲載された研究で、国家管理メディアの訓練データへの混入が、LLMの政治的中立性に与える影響が定量化された。

- 中国語プロンプトでは**80%**の回答が中共に好意的（英語相比）
- CulturaXデータセットの中国語권의**1.64%**が政治的声音と重複
- 「**LLMはプロパガンダの媒体として機能し得る**」との指摘

---

## 米国AI経済：年間2,600%成長

Economists from University of Virginia x Anthropic x Bank of Canadaの論文によれば、米国AI経済は**名目AI GDP約$250B（2025年）**に達し、**品質調整実質値で年間約2,600%成長**している。ただし：

- データセンター建設はGDP統計に十分に反映されていない
- AI inference（使用）の経済効果は価格下落と質向上で相殺されやすい

---

## まとめ：2026年6月のAI業界トピック

| テーマ | ニュース | 技術的意義 |
|--------|---------|-----------|
| **資金調達** | Mistral 3B euros / Prometheus $12B | AIへの資本集中続く |
| **RSI** | AnthropicがRSI初期兆候を公言 | 現代のAIが自ら改善する時代に |
| **評価基準** | SocioHackベンチマーク公開 | AIの灰色能力評価が必要に |
| **実世界AI** | RLドローンがexpertを撃退 | 物理世界での超人的AIが具体的に |
| **メディア影響** | 国家管理メディアがLLMに影響 | 訓練データのガバナンス重要 |

---

## 参考リンク

- [TechCrunch - Mistralが3B euros資金調達を検討](https://techcrunch.com/2026/06/12/mistral-is-rumored-to-be-raising-e3b-at-e20-valuation/)
- [TechCrunch - Prometheusが$12B調達](https://techcrunch.com/2026/06/11/jeff-bezoss-prometheus-raises-12b-to-build-an-artificial-general-engineer-for-the-physical-world/)
- [Anthropic Institute - RSI分析](https://www.anthropic.com/institute/recursive-self-improvement)
- [Import AI 460号](https://jack-clark.net/2026/06/08/import-ai-460-reward-hacking-society-rsi-data-from-anthropic-and-rl-based-quadcopter-racing/)
- [arXiv - SocioHack論文](https://arxiv.org/abs/2606.04075)
- [arXiv - ドローンレース研究](https://arxiv.org/abs/2605.22748)
- [Nature - 国家管理メディアとLLM](https://www.nature.com/articles/s41586-026-10506-7)

---

*（本文の情報は2026年6月13日時点のものです）*
