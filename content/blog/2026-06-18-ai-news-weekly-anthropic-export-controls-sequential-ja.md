# AI開発ニュース Weekly Report：Anthropicへの輸出規制、FrontierCodeベンチマーク、Sequent安全スタートアップ

2026年6月中旬のAI開発ニュースをお届けします。今週は**Anthropicのモデル輸出規制問題**、**FrontierCode超硬codingベンチマーク**、**新世代安全スタートアップSequent**など、AIの安全性・治理・技術進歩をめぐる重要な展開がありました。

---

## Anthropic輸出規制問題：Fable 5・Mythos 5へのアクセス遮断

**Anthropic**は6月、Trump政権が突然「全外国人にアクセスを提供してはけない」という命令を下し、最新のAIモデル**Fable 5**と**Mythos 5**へのすべてのユーザーのアクセスを遮断せざるを得ない状況に陥りました。社内スタッフ含め全員が一時的にブロックされたことを、Anthropicが明らかにしました。

### 輸出規制の法的根拠が不明

政府側は「国家安全保障上の権限」を援用したとされていますが、**その法的根拠は公開されていません**。UC BerkeleyのAndrew Reddie教授は「これが輸出規制を使ってAIモデルへのアクセスを制限した初めての事例だと認識している」と語っています。

> *「輸出規制規則や武器規制その他の制度が、特定貨物へのアクセスを制限する広範な権限を与えているのは事実だ。しかし、政府がモデル開発者に何が必要とされているかについて歴代政権が滔々と言い争ってきたことで、企業は期待されていることを理解するのが非常に困難になっている」*

### 輸出規制の先例となりうる「Anthropic-Blackout」

この出来事は**「Anthropic-Blackout」**とも呼ばれ、G7 サミットではMacron仏大統領やModi印度首相が「米国が米国産AIへのアクセスを一晩で遮断する可能性がある」と警戒を強めています。

AI治理の専門家たちは**「不透明で場当たり的な介入を通じてAIを統治することは持続可能ではない」**と警告しています。

---

## Anthropic、Frontier炭素回収同盟にAIスタートアップとして初参加

そんな中、Anthropicは**Frontier carbon removal coalition**に参加することが発表されました。Frontierは次の$9.15億の負担金約束を受け、炭素回収プロジェクトの資金提供を行うCoalitionです。AnthropicはAIスタートアップとしては初めてこの同盟に参加しました。

これはAI開発と環境持続可能性の両立を目指す象形的な動きであり、**AI企業のClimate-Tech投資**として注目されます。

---

## Sequent：AI安全性のための新世代研究開発組織

AI安全性研究院の研究者たちと、TimaeusなどのAlignment理論スタートアップ出身者が結集し、**Sequent**という新しい非營利研究組織が設立されました。

### 設立の動機：「Alignmentは軌道に乗っていない」

Sequentのミッションは**「超知能AIの安全性に対するより高い確信を得るためのAlignment技術を作ること」**です。彼らは不留にこう述べています：

> *「ASI（人工超知能）は今後数年で開発される可能性がある。Alignmentが同じタイムフレーム готовностейになるかどうか不明だ。理想的には、ASIを buildingとともにそれが安全であるという理論的証明を構築したい。しかし、この世界では理想からほど遠い状況を受け入れる必要があるかもしれない。」*

### 資金調達目標：初期$100-150M

Sequentは**40-80人のフルタイム従業員**を数年にわたって擴充し、最終的に**$100-150Mの初期資金調達**を目指していますが、「複数の研究調査的成功例を実証できれば10倍以上の増資做好准备」とのこと。

### 研究方向

- **Scalable Oversight**：拡張可能な監視方法
- **Learning Theory**：学習理論
- **Heuristic Arguments**：発見的議論
- **Game Theory**：ゲーム理論
- **Personas**：ペルソナ分析

これらの異なる研究方向の組み合わせから生まれる**相乗効果**が期待されます。

---

## FrontierCode：Cognitionによる超硬codingベンチマーク

**Cognition**（Devinの開発者）は、新しい超硬codingベンチマーク**FrontierCode**を発表しました。SWE-Benchが2023年10月に導入されて急速に砲和する中、FrontierCodeの設計思想は**「絶対に砲和しないベンチマーク」**です。

### ベンチマーク構成

- **Diamond**：最難関50タスク - 現在の最良成績は**Claude Opus 4.8で13.4%**
- Main：100タスク（含Diamond）
- Extended：150タスク（含Main & Diamond）

対応言語：**Python、Go、TypeScript、JavaScript、Java、C/C++** など

### 評価の特徴

- **20人のオープンソース開発者**が40時間以上かけて選定
- **コードのマージ可能性**を評価：正确性、テスト品質、スコープ規律、スタイル、コードベース標準への遵守
- **敵対的テスト、較正、多段階レビュー**を含むQCパイプライン

### 現時点の成績

| モデル | Diamond | Main | Extended |
|--------|---------|------|----------|
| Claude Opus 4.8 | 13.4% | 34.3% | 51.8% |
| GPT-5.5 | 6.3% | 25.5% | 44.8% |
| Claude Opus 4.7 | 5.2% | 23% | 43.2% |

SWE-Bench衰老候は2023年10月から始まり、おそらく既に有用性を失っています。FrontierCodeは2027年6月までに70%以上をクリアすると予測する声もあります。

---

## Xiaomi MiMo-V2.5-Pro-UltraSpeed：1000 tokens/s

**Xiaomi**が**1兆パラメータLLM**で毎秒1000トークンを生成するモデルを論文公開しました。このモデルは**FP4量子化**と**DFlash（ブロックレベルMasked並列予測を使った投機的デコーディング方式）**、そして**TileRT**（Tile AI開発の推論高速化ソフトウェア）とを組み合わせることで達成されています。

注目すべきは、この高速推論が**8-GPUの汎用ノード**で実現されていることで、Cerebrasのような specialized hardware に依存しません。

**「速度はそれ自体が品質を持つ」** - より高速なトークン生成は、リアルタイムでのソフトウェアリファクタリングなどpreviously unthinkableなタスクを可能にします。

---

## 米国世論：AI肯定的は16%のみ

Pew Researchの新しい調査によると、**米国人のわずか16%**がAIは社会にPositiveな影響をもたらすと考えています。2024年のChatGPT使用率は2023年の2倍になり、44%がChatGPTを利用していますが、**63%が「AIは進むのが速すぎる」**と回答しています。

---

## 他の注目ニュース

- **Midjourney Medical**：David Holz CEOがSFにスパを開くと発表。画像生成AIから**full-body MRI-grade ultrasound scanner**へ事業拡大
- **Google**：Gemini搭載$99.99 Google Home Speaker発売。従来の狭いコマンドから会話的なGemini interactionへ
- **Robot訓練データ**：XDOFがAIラボにデータ収集サービスを提供。Physical AIのデータ問題深刻化

---

## 参考リンク

- [Anthropic、政府のアクセス遮断について](https://www.anthropic.com/news/fable-mythos-access)
- [The Verge: Anthropic got hit by export rules nobody understands](https://www.theverge.com/ai-artificial-intelligence/951703/anthropic-shutdown-export-controls)
- [Sequent: Scale and Automation for Higher Confidence in Alignment](https://www.sequent.org/launch)
- [FrontierCode (Cognition)](https://cognition.ai/blog/frontier-code)
- [Xiaomi MiMo-V2.5-Pro-UltraSpeed](https://mimo.xiaomi.com/blog/mimo-tilert-1000tps)
- [Import AI 461](https://importai.substack.com/p/import-ai-461-alignment-is-not-on)

---

*（本文の情報は2026年6月18日時点のものです）*
