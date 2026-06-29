# AI開発ニュース Weekly Report — 2026年6月第4週

2026年6月第4週のAI開発ニュースをまとめる。先週は**AIの実用限界が露呈した事例**と**新たな基盤モデルの競争激化**が二つの大きなテーマだった。

---

## AI導入の後退：Fordが「灰髭」エンジニアを再雇用

Ford Motor Companyが、AIツールの導入を進めていた製造現場で、人間に戻ってエンジニアを呼び戻す措置を取ったことが分かった。

TechCrunchの報道によると、Fordの幹部は「人工衛星を導入するだけで高品質な製品ができると思っていたのは誤りだった」と認めたという。AI駆動の自動化が予想外に品質管理や工場出荷前の調整工程で期待した成果を出せなかったため、现场懂門の「灰髭」エンジニア（経験豊富なベテラ技師）を再雇用した。

**背景にあるのは「AIファースト」設計思想の限界**だ。製造業の繊細な調整工程では、指の感覚や視覚的な微細な変化の読み取りが依然として人間の得意分野であり、大規模言語モデル（LLM）が得意とするパターン認識や文章生成とは異なる種類の知識が求められる。

AIが「製造现场的知識」を完全に取代できるとした楽観論に対する**現実的なフィードバック**として注目を集めている。

---

## 中国Zhipu AIがGLM-5.2を発表 — Mythos対抗を主張

中国大手のZhipu AI（Z.ai）は6月28日、オープンウェイトモデル**GLM-5.2**を公開し、特定のバグ発見・セキュリティ脆弱性検出タスクにおいてAnthropicの**Mythos**に匹敵すると主張した。

The Vergeが伝えるところによれば、研究者らの評価では、GLM-5.2がMythosと比較して**同じ脆弱性タイプに対する検出率が競争可能**な水準にあるという。中国のAI研究機関が、米国の輸出規制下でも自前で高性能モデルを構築できることが示された形だ。

**技術的ポイント:**
- オープンウェイト（商用再構築可能的）
- セキュリティ特化の評価ベンチマークでMythos対抗を主張
- 輸出規制下でも中国本土で训练・提供服务が可能

Anthropic对美国政府への輸出規制強化の動きに対して、中国のAIラボが**「Mythos相当を自前で」**を作成する動きが広がっている。

---

## Suno、獨立アーティスト支援の「Suno Spark」インキュベータープログラムを開始

AI音楽生成プラットフォームのSunoが、獨立アーティスト向けのインキュベータープログラム**「Suno Spark」**を開始した。

Sunoは「AIスラップ製造機」ではなく、**音楽ストリーミング配信の目的地**、そして「新進気鋭のアーティストを発掘するプラットフォーム**」としての地位確立を目指している。Sparkプログラムでは、選出されたアーティストがSunoの生成AIツールを活用した楽曲制作を行い、同プラットフォーム上での配信機会を得る。

AI音楽生成の商業利用に対する音楽業界からの反発がある中で、Sunoは「AIと人間のクリエイターが共存する新しい音楽経済圏」というビジョンを提示している。

---

## AI生成証拠の法的紛争：ChatGPTログが放火罪の証拠に使用

ロサンゼルス、パシフィカディズ火災の裁判で、檢察側が**ChatGPTの会話ログを証拠**として提出していたことが分かった。

The Vergeの報道によると、被告のJonathan Rinderknechtは2025年の新年早々の放火罪に問われており、その審理の中で檢察側がChatGPTでの火災関連の質問・回答履歴を証拠として提出した。

**法的な論点:**
- AIプラットフォームに保存された会話ログは**Fourth Amendment（違法搜索・押収の禁止）**の適用対象か
- ユーザーがAIに送信した情報がどれほどの期間・条件で保存されるか
- 檢察側の証拠取得手续の適法性

AI製品に保存される対話データが**法的証拠として活用される可能性**が現実のものとなった。

---

## Apple Vision Pro責任者がOpenAIに移籍

AppleでVision ProヘッドセットのVP（副社長）を務めていた**Paul Meade**が、OpenAIのハードウェアチームへの参加が決まったことがReutersの報道で分かった。

これはAppleからOpenAIへの**高端人材の移動**として注目される。AppleはVision Proを「空間コンピューティング」の旗艦製品として位置付けており、OpenAIは独自のAIハードウェア（具体的にはadaiのAI Assistant端末）の開発を進めている。

OpenAIがApple产品规格の知見を持つハードウェアリーダーを採用したことで、**AIネイティブのハードウェア製品**開発が加速する可能性が高い。

---

## 米国記憶體メーカーMicron、「次のNvidia」としてWall Streetの注目

Wall Streetの間で、AIインフラ需要に応えるGPU向け高バンド幅メモリ（HBM）の需要拡大から、**Micron Technologyが「次のNvidia」として注目**されている。

MicronはHBM4の筆三期商業化を控え、データセンター向けメモリの売上拡大を見込んでいる。NvidiaのGPU需要に連動してHBMの注文も増加しており、AIチップバリューチェーンの中で**メモリ企業が存在感を强め**ている。

---

## アジアのAIスタートアップがMythos対抗モデルを継続投入

Anthropicの輸出規制強化を受け、台湾・韓国・中国のAIスタートアップが**Mythos同等の性能を持つモデルの商業提供**を始める動きが加速している。

TechCrunchの報道では、「米国AIラボはこの巨大な市場を失うことになるかもしれない」（原文: "U.S. AI labs may never recover this enormous market"）と分析されている。

**事実上の「AI冷战」**が基盤モデルレベルで進行しており、輸出規制の实際的な効果と限界が試されている。

---

## 参考リンク

- [Ford rehires engineers after AI falls short](https://techcrunch.com/2026/06/28/ford-rehires-gray-beard-engineers-after-ai-falls-short/)
- [China's Z.ai GLM-5.2 Mythos cybersecurity](https://www.theverge.com/ai-artificial-intelligence/958804/chinas-z-ai-glm-52-mythos-cybersecurity)
- [Suno Spark incubator program](https://www.theverge.com/ai-artificial-intelligence/958801/suno-launches-spark-incubator-program-to-)
- [Prosecutors used ChatGPT logs as evidence](https://www.theverge.com/ai-artificial-intelligence/958751/prosecutors-chatgpt-palisades-wildfire-ar)
- [Apple Vision Pro exec leaving for OpenAI](https://techcrunch.com/2026/06/27/apple-vision-pro-exec-is-reportedly-leaving-for-openai/)
- [Asian AI startups Mythos-like models](https://techcrunch.com/2026/06/27/asian-ai-startups-launch-mythos-like-models-as-anthropics-export-b)

---

*（本文の情報は2026年06月29日時点のものです）*
