# AI開発ニュース：防御技術としてのスマートグラス、Musk裁判の深層、GoogleのAI設計ツールまで

2026年5月19日、AI業界はGoogle I/O 2026の翌日として、複数の重要トピックが同時進行した。本稿では、前号のまとめではカバーされなかった3つのニュースを技術的視点で深掘りする。

---

## Anduril × Meta：軍事用途スマートグラスの衝撃

MIT Technology Reviewが報じたところによると、 defense-tech企業**Anduril**がMetaと提携し、軍事用途の拡張現実（AR）ヘッドセットの詳細を公开した。注目すべきは、**ドローン攻撃をアイトラッキングと音声コマンドで指示できる**という構想だ。

### 技術的詳細

Andurilの Quay Barnett（米国陸軍特殊作戦コマンド出身）が主導するこのプロジェクトでは、以下の技術が想定されている：

- **アイトラッキング**：視線だけで標的を指定
- **音声コマンド**：自然言語で攻撃指示を発出
- **人間を weapons system（武器システム）として最適化**：兵的オペレーションにおける人間の能力を拡張

Barnett率は「人間を weapons system as optimized」と表述しており、これはAI-Driven Warfare（AI駆動型戦争）の中核的概念を示している。従来の武器システム不同的是、人間の認知的限界をAIと拡張現実で補い、意思決定の速度と精度を向上させるアプローチだ。

### 開発者視点での重要性

この動きは**Physical AI**の応用の一个新境地だ。これまでは物流・製造・農業が期待されていた応用先だったが、Defense sector（防衛産業）へのAI導入が加速している。BMW i Venturesの$300Mファンド衣、Teslaの自律走行、Lognitiveの军事AIなど、Physical AIは民需から軍需へ扩大している。

また、**Metaのスマートグラスの民生技術と軍事技術の境界が曖昧になりつつある**点も見逃せない。Ray-Ban Meta glassesなどの民生デバイスで蓄積された軽量AR技術が、そのまま防衛産業に応用されるフレームが确立されつつある。

---

## Musk裁判の深層：OpenAIからTeslaへの「傾斜」問題

TechCrunchの裁判取材報じたところ、Elon MuskによるOpenAI訴訟の審理中で、意想不到な事実が浮かび上がった。

### Greg Brockmanの証言：OpenAIの研究者がTesla Autopilotを支援

Brockmanの証言によると、2017年、MuskはOpenAIの研究者チームをTeslaの本社に呼び寄せ、Autopilotチームを支援させた。 involvだった研究者は以下の通り：

- **Andrej Karpathy**（後にTeslaのAutopilot負責者に）
- **Ilya Sutskever**（後にOpenAIのChief Scientistに）
- **Scott Gray**

Brockmanは「『No』とは言えない状況だった」と陈述しており、**OpenAIのリソースがTeslaに流用された**可能性が示された。これは、MuskがOpenAIを提訴する際に「非營利性の逸脱」を主張した内容と、直接矛盾する。

### 技術的争点

この裁判の全容は以下の3点に集約される：

1. **時効**：陪審はMuskの請求が時効切れであると判断
2. **Teslaへの利益相反**：Musk自身がOpenAIの研究成果を出資先のTeslaに活用していた可能性
3. **「開放性」の問題**：OpenAIがGPT-4以降、モデルweightsを非公開化したことが「非營利性からの逸脱」かどうか

開発者として注目すべきは、**AI企業の governance 構造が複雑であること**だ。OpenAIの場合、Microsoftからの巨额投資、受給者としてのTesla、AI安全研究という多層的な利害関係が絡み合っている。Muskの訴訟は、この複雑な governance を外部から解体试图するものだったが、法的には失败した。

---

## Google Pics：AI設計ツールの競争开战

TechCrunchが報じたところ、Googleは**Google Pics**という新しいAI駆動型設計・画像生成アプリをGoogle Workspace向けに発表し、CanvaやAnthropicのClaude Designへの挑戦状を突きつけた。

### 技術的特徴

Picsの最大の特徴は、**生成と編集の統合**だ。従来のAI画像生成では、「ほぼ完璧だが一部を変更したい」場合に全新的プロンプトを入力する必要があり、部分的変更が困難だった。Picsでは以下の编辑機能が特徴：

- **部分選択編集**：画像内の任意の部分をクリックして直接変更指示
- **Doc風 Coment**：Google Docsのようにコメントで編集指示を出せる
- **直接編集**：プロンプト 없이手动で編集可能

### 動作基盤

Picsは以下の技術 기반으로動作する：

- **Nano Banana 2**：テキスト描画精度、現実世界の知識、詳細視覚出力に優れたモデル
- **Gemini**：編集レイヤーで各要素の精密な制御を実現

### 競争の影響

GoogleがPicsで戦う相手は以下の2カテゴリ：

| 競合 | タイプ |
|------|--------|
| **Canva** | 传统的设计ツール（テンプレートベース） |
| **Claude Design (Anthropic)** | AIネイティブ設計ツール |
| **Adobe Firefly** | Adobe生態系のAI画像生成 |
| **Midjourney / DALL-E** | プロンプトベース画像生成 |

開発者として注目すべきは、**Google Workspaceとのネイティブ統合**だ。Google Docs、Sheets、Slides既存の продуктаとシームレスに連携することで、Microsoft Officeに対するCopilotの競争相手として位置づけられる。

---

## Gemini Omni：マルチモーダルからの動画生成

Googleは**Gemini Omni**ファミリーも発表した。テキスト、画像、音声、视频任何の組み合わせから、高品質動画を生成できる。

### 技術的詳細

Gemini Omniの革新的点は、 단순히 입력을 연결하는 것이 아니라、**全てのモダリティを統一的に推論する**点にある：

- **物理世界の理解**：生成される動画が物理法則に従う
- **文化・歴史・科学の統合**：単純な動画生成ではなく、实质的な知識，反映
- **編集能力**：生成的動画をテキストコマンドで編集可能

例として、Google DeepMindのKoray Kavukcuoglu CTOは「a claymation explainer of protein folding」というプロンプトを示し、タンバリン風の停止motion動画と科學的なvoiceroverを自动生成した。

### セキュリティ対策

全てのOmni生成動画には以下の対策が適用される：

- **SynthID透かし**：認知不可能なデジタル透かしで、AI生成動画を识别可能に
- **アバター本人確認**：自定义アバター作成時に、通話で数字を読み上げる本人確認流程を実施

### 利用可能な環境

最初のモデル**Gemini Omni Flash**は以下の平台で今週ローンチ：

- Gemini app
- YouTube Shorts
- AI creative studio Flow

現在の最长尺は10秒だが、より長い動画の生成も近いうちに実装予定だ。

---

## 参考リンク

- [Inside Anduril and Meta's smart glasses for warfare - MIT Technology Review](https://www.technologyreview.com/2026/05/19/1137505/the-download-musk-altman-trial-smart-glasses-warfare-google-i-o/)
- [Musk benefited from OpenAI at Tesla - TechCrunch](https://techcrunch.com/2026/05/19/elon-musk-said-sam-altman-stole-a-non-profit-but-the-trial-showed-he-had-similar-aims/)
- [Google Pics - AI design tools - TechCrunch](https://techcrunch.com/2026/05/19/ai-design-tools-are-the-next-big-battleground-and-google-is-going-all-in-at-io-2026/)
- [Gemini Omni multimodal video - TechCrunch](https://techcrunch.com/2026/05/19/googles-gemini-omni-turns-images-audio-and-text-into-video-and-thats-just-the-start/)
- [The Download: Musk v. Altman, smart glasses, Google I/O - MIT Technology Review](https://www.technologyreview.com/2026/05/19/1137505/the-download-musk-altman-trial-smart-glasses-warfare-google-i-o/)

---

*（本文の情報は2026年5月20日時点のものです）*