# Anthropic Fable 5 米政府 BAN の衝撃 — モデル規制とAI開発競争の行方

2026年6月、生成AI業界は米国政府による**Anthropicの最尖端モデル（Fable 5・Mythos 5）公開停止命令**という前例なき展開に揺れている。米Amazonの研究者がFable 5のガードレールをバイパスする手法を発見したとして、国家安全保障上の懸念から模型的規制が 발효された。本稿ではこの事件の背景、业界の反応、そして同時に進行している**推論速度大革命**（Xiaomi 1000 tokens/s）や**AI安全研究の新規格**（Sequent）など、技術的潮流を総括する。

---

## 事件の経緯：なぜ米国政府はAnthropicモデルを停止したのか

2026年6月19日、米国政府はAnthropicが同日公開予定だった**Fable 5**（推論モデル）および**Mythos 5**（サイバーセキュリティ特化モデル）の提供を強制的に停止させた。Reutersなど複数メディアが伝えた内容によると、Amazonの研究者チームがFable 5に対して「ガードレールのバイパス手法」を発見。それが国家安全保障上のリスクとして政府側に報告されたことが直接の引き金になった。

Anthropicはこれに対して、`same jailbreaks exist in other models`（同じジェイルブレイクは他のモデルにも存在する）との声明を発表。サイバーセキュリティ研究者たちも声を上げ、`open letter`（公開書簡）を通じて「今回の措置は危険であり、AI安全性に対する逆効果である可能性がある」と警告した。

---

## 輸出規制の歴史が証明すること：実績ある手法

TechCrunchが6月19日に報じた分析記事「From PGP to Mythos: a brief history of export controls that didn't stop anyone」で指摘されるように、**過去30年間にわたる暗号化ソフトウェアの輸出管理は効果を上げていない**。1990年代のPGP（Pretty Good Privacy）を始め、スパイウェア規制、暗号技術輸出制限に至るまで、国家安全保障を名目にした技術規制は常に「止めたい技術を止められなかった」という実績を持つ。

AnthropicのMythosはサイバーセキュリティ特化モデルであり、PGPやスパイウェアツールと同じ文脈で輸出規制対象になった。しかし、`MythosがMythosになること`自体が、米国の輸出管理制度がサイバーテクノロジーの流れを止められなかった歴史をまた一歩繰り返すだけかもしれない。

---

## Sequent：AI安全研究の新しいプレイヤー

こうしたモデル規制の動きと並行して、AI安全性を根本から強化しようとする新しい組織があなたも注目している。**Sequent**は、英国AI Security Institute（ASI）のAlignmentチーム出身の研究者と、Timaeus（对准理論スタートアップ）のメンバーを中心に設立された非営利研究組織だ。

### なぜ「今」新しい安全組織が必要か

Sequentの公開資料によると、`Artificial superintelligence (ASI) may be developed in the next few years`（超人的なASIは今後数年間で開発される可能性がある）という前提に立っている。そして`alignment is not on track`（对准はまだ軌道に乗っていない）という問題を正直に認めた上で、`At a minimum, the empirical programs at AI labs are unlikely to deliver a priori confidence, before training ASI, that things will go well`（最低でも、AIラボの経験的プログラムは、ASIの訓練前に物事がうまくいくという事前置信度を提供することはunlikelyである）としている。

### 研究ポートフォリオ：分化されたアプローチ

Sequentは主流AIラボの経験的・反応的な安全手法に対し、`principled reasons`（原則的な理由）を重視したアプローチを取る。具体的な研究方向として以下が挙げられている：

- **Scalable Oversight**：大規模タスクに対する監視手法
- **Learning Theory**：学習理論的枠組み
- **Heuristic Arguments**：ヒューリスティックな議論構造
- **Game Theory**：ゲーム理論的アプローチ
- **Personas**：ペルソナベースのアライメント

Sequentの目標は今後数年間で40〜80名の正社員を抱え、`$100-150M`の初期資金調達を目標に、`one order of magnitude more`（さらに10倍規模）の資金調達を視野に入れる野心的な計画だ。

---

## Xiaomi MiMo：1000 tokens/s時代の幕開け

中国Xiaomiが6月に公開した**MiMo-V2.5-Pro-UltraSpeed**は、標準的な1兆パラメータLLMでありながら**毎秒1000トークンという爆速推論**を実現した。Import AIが伝えた情報によると、Xiaomiは以下リストの技術要素を組み合わせている：

- **FP4量子化**：4ビット浮動小数点によるメモリ効率の最適化
- **DFlash**：ブロックレベルのマスク付き並列予測を使った投機的デコーディング手法
- **TileRT**（Tile AI社開発）：汎用人桌上的ハードウェア上でのLLM推論を高速化するソフトウェアスタック

### 速度の本質的価値

Xiaomiのモデルが「8-GPU commodity node」（汎用人桌上的8GPUノード）で動作し、Cerebrasのような specialized hardware に頼らずに1000 tokens/sを達成した点は重要だ。**推論速度はそれ自体が新しい能力**だ。より速く、より多くのトークンを生成できることは、これまでに考えられなかったタスク（例：リアルタイムでのソフトウェアリファクタリング）を可能にする。

中国企業にとってこの道は特に重要だ。米国による輸出規制が高性能GPUの入手を制限する中で、`squeeze maximum performance and efficiency`（最大性能と効率を絞り出す）努力が加速している。

---

## FrontierCode：Cognitionによる新しいコーディング評価基準

Cognition（Devinの開発元）が公開した**FrontierCode**は、`the benchmark for the next generation of coding agents`を标的とした新しい評価基準だ。SWE-Benchが饱和し始めた今、开发者・企業・研究者が「最强のモデル」の生産準備体制を評価できる指標が求められていた。

### ベンチマークの構成

FrontierCodeは3つの難易度ティアを持つ150タスクで構成される：

| 難易度 | タスク数 | Claude Opus 4.8 | GPT-5.5 | Claude Opus 4.7 |
|--------|----------|-----------------|---------|-----------------|
| Diamond（最难） | 50 | 13.4% | 6.3% | 5.2% |
| Main | 100 | 34.3% | 25.5% | 23.0% |
| Extended | 150 | 51.8% | 44.8% | 43.2% |

これらの数字は今のAIシステムがまだ`reassuringly difficult`（心を安堵させるほど難しい）領域にいることを示している。

### 評価の革新的ポイント

FrontierCodeのユニークな点は**コードの「マージ可能性」を評価する**点だ：

- パッチは問題を本当に解決したか？
- 既存コードベースを壊していないか？
- プロジェクトのbuild、lint、style checkに合格したか？
- エージェントのテストは望む振る舞いをcaptureしているか？
- パッチは本当に 필요한分だけを変更しているか？

SWE-Benchが2023年10月に登場して以来、最も急速に饱和したベンチマークだが、FrontierCodeは今後の数年間有効な「試練」になると予測される。

---

## Import AIが伝えたその他の注目トピック

### AARRI-Bench：AI研究インターンの能力評価

Xi'an Jiaotong大学とXidian大学の研究者が公開した**AARRI-Bench（Act As a Real Research Intern Bench）**は、「AIシステムが科学者の作業をどの程度支援できるか」を評価するベンチマークだ。82タスクで構成され、最高の性能を示したシステムは`Claude-Opus-4.7 + Mini-Swe-Agent harness`で68.3%という結果だった。

特徴的には「False-Guidance-Rebuttal」（上司が実験結果を変更するよう命令し、それが倫理的にどうかを評価）など、**AIの倫理的判断能力**も評価対象にしている点だ。

### サイバー攻撃の産業化

独立研究者のSean Heelanによる実験では、`Opus 4.5`と`GPT-5.2`がQuickJSのゼロデイ脆弱性に対するエクスプロイト生成で「非常に高い性能」を示した。彼の結論：`We should prepare for the industrialisation of many of the constituent parts of offensive cyber security`（サイバー攻撃の構成要素の産業化に備えるべき）。

OpenAI CEO Sam Altman氏が「OpenAIのモデルは間もなく「Cybersecurity High」レベルに到達する」と予測したことも注目される。これは「モデルが合理的に強化されたターゲットに対するエンドツーエンドのサイバー操作を自動化する、または操作的に関連する脆弱性の検出とエクスプロイトを自動化する」ことを意味する。

---

## 総括：規制と技術進歩のいたちごっこ

2026年6月は**AI治理の根本的問い**が露呈した月だった。米政府によるAnthropicモデルBANは、輸出規制の无效歴史を繰り返す可能性が高く、サイバーセキュリティ研究者コミュニティからの強い反発を招いている。

他一方で、Xiaomiの1000 tokens/s、CognitionのFrontierCode、Sequentの 새로운 安全研究アプローチなど、**技術進歩は規制の隙間から生まれる**こともまた確かだ。生成AIの能力は依然として指数関数的に成長しており、開発者としては規制の動向を見守りつつ、最前線の技術動向を追い続ける必要がある。

---

## 参考リンク

- [TechCrunch - US government Anthropic ban coverage](https://techcrunch.com/category/artificial-intelligence/)
- [Sequent Official Launch](https://www.sequent.org/launch)
- [Xiaomi MiMo Blog - 1000 TPS](https://mimo.xiaomi.com/blog/mimo-tilert-1000tps)
- [FrontierCode by Cognition](https://cognition.ai/blog/frontier-code)
- [Import AI Newsletter](https://importai.substack.com)

---

*（本文の情報は2026年6月20日時点のものです）*
