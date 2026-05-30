# Google DeepMind、テキスト・画像・動画から動画生成する「Gemini Omni Flash」を発表

2026年5月、Google DeepMindは「**Gemini Omni**」ファミリー首款モデル「**Gemini Omni Flash**」を正式発表した。テキスト・画像・動画・音声など任意の組み合わせた入力から動画を生成・編集できるマルチモーダル生成AIで、自然言語による直感的なプロンプトでキャラクターの一貫性を保ちながら動画制作できる。Geminiアプリ、Google Flow、YouTube Shorts向けにロールアウトが開始され，今后は画像・音声出力への対応も予定されている。

---

## Gemini Omni Flashとは

Gemini Omni Flashは、「any inputからany outputを生成できる」をコンセプトに開発された生成AIモデルだ。现時点では動画出力を지원하지만、近い将来画像・音声出力への対応が予定されている。

**主な特徴**:
- **マルチモーダル入力対応**: テキスト、画像、既存動画、音声など任意の組み合わせを入力可能
- **自然言語による動画編集**: 「キャラクターを泡に変えて」「鏡が液体のように波打つように」など日常言語で指示
- **プロンプトの連続性**: 各指示が前の指示の上に積み重なり、一貫性のある動画が生成される
- **キャラクターの一貫性**: 同一人物・キャラクターが複数のシーンでも外観を維持
- **物理法則の理解**: 物理现象のシミュレーションとGeminiの知識ベース（歴史・科学・文化）を組み合わせた「意味あるストーリーテリング的实现

**対応プラットフォーム**:
- Geminiアプリ（一般ユーザー）
- Google Flow（クリエイター向け）
- YouTube Shorts（ショート動画生成）
- API（開発者・エンタープライズ向け — 近日中に対応予定）

---

## 開発者視点での技術的注目点

### 1. テストタイムスケーリングの自动化

Gemini Omniの核となる技术の一つが、推論時の計算資源自動配分だ。従来のLLMでは、テストタイムスケーリング（Test-Time Scaling: TTS）戦略が手動のheuristicに依存していた。Gemini Omniでは、この制御ポリシー自体がAIによって自動設計されている。

これはMetaとGoogleの共同研究であるAutoTTSフレームワークと类似的アプローチでありながら、Gemini固有のスケールと統合されている可能性がある。プロンプトが复杂になるほど、AIが「あきらめ時」を自ら判断してトークン消费を最適化する。

### 2. マルチモーダル腻の分离によるコスト効率

昨今のトレンドとして、PinterestがQwen3-VLからビジョンモジュールを分离して推論コスト90%削減を達成した事例がある。Gemini Omni Flashも、入力腻と生成腻の分离設計を採用しており、单一モデルで多元化な入出力をサポートしながら、计算資源の効率的配分を実現している。

### 3. 物理 simulation と LLM knowledge の統合

単なるフォトリアリズム（写実的画像生成）を超え、Geminiの知識ベースを活用した「意味ある」動画生成が可能になっている点が革新的だ。歴史的文書に基づく復元や、科学概念的説明动画、文化的文脈を踏まえたストーリーテリングなどが自然语言で指示できる。

---

## プロンプト例

DeepMindブログ公开のプロンプト例から、いくつかを紹介する：

```
プロンプト: 「Make the sculpture out of bubbles.」
（彫刻を泡で構成する）

プロンプト: 「When the person touches the mirror, make the mirror ripple 
beautifully like liquid, and the person's arm turns into reflective mirror material.」
（人物が鏡に触れたら、鏡を液体のように波打たせ、
人物的腕を鏡面素材に変換する）

プロンプト: 「A marble rolling fast on a chain reaction style track, 
continuous smooth shot.」
（チェーンリアクション式トラック上を高速転がるビー玉、連続スムーズショット）
```

いずれのプロンプトも、单一の自然语言文で复杂な视频制作指示が完了しており、従来の動画制作ツール那样的专业知识が不要である点が特徴的だ。

---

## API-accessとエンタープライズ展開

目前はGeminiアプリ、Google Flow、YouTube Shorts限定の利用だが、「近い将来」開発者・エンタープライズ顧客向けにAPIが提供される予定だ。Google DeepMindの発表によれば、APIでは以下が予定されている：

- ** Multimodal input/output**のプログラム적利用
- **Custom fine-tuning**（業種・ユースケース合わせたカスタマイズ）
- **Enterprise grade SLA**（大規模業務利用向けの信頼性担保）

APIの詳細な仕様と料金体系は、Google I/O 2026期间的に更なる発表が予定されていると見られる。

---

## 競合との比較

動画生成AI市場は急速に成長しており、以下の主要サービスが競合として挙げられる：

| サービス | 対応モダリティ | 特徴 |
|---------|--------------|------|
| **Sora（OpenAI）** | テキスト→動画 | フォトリアリズム重視 |
| **Veo 2（Google）** | テキスト→動画 | YouTube統合 |
| **Kling（快手）** | テキスト→動画 | 中国市場向け |
| **Runway Gen-3** | テキスト→動画 | フィルム品質追求 |
| **Gemini Omni Flash** | any→動画 | マルチモーダル統合、物理理解 |

Gemini Omni Flashの差別化点は、单一モデルで多元化な入力を处理し、テキスト/画像/视频/音声を统一的APIで扱える点にある。従来の「 специализированныйモデル × パイプライン構成」と異なり、腻の分离設計により计算資源の効率的配分を実現している。

---

## まとめ

Gemini Omni Flashの登场は、「すべてを統合する单一生成AIモデル」という方向性と、「入力腻と出力を分离して资源を効率的に配分する」という設計思想が调和した成果だ。开发者にとって、単一APIでテキスト・画像・视频・音声を統一的に扱える利点は大きく、复合的コンテンツ制作ワークフローの简化が期待される。

API正式 提供开始に伴い、クリエイター泡沫から本格的なプロダクション利用まで、用途扩大が期待される。

---

## 参考リンク

- [Introducing Gemini Omni - Google DeepMind Blog](https://deepmind.google/blog/introducing-gemini-omni/)
- [Google I/O 2026 - AI Mode Updates](https://io.google/2026)
- [Gemini API Documentation](https://ai.google.dev/gemini-api)
- [Google Flow](https://flow.google)
- [AutoTTS: Automated Test-Time Scaling - Meta Research](https://arxiv.org/abs/auto-tts)

---

*本文の情報は2026年5月30日時点のものです。*