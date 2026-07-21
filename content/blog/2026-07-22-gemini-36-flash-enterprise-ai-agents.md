# Google、Gemini 3.6 Flashを発表——企業AIエージェントのトークンコスト削減狙う

GoogleがGemini 3.6 Flashと3.5 Flash-Liteを発表し、企業AIエージェントの遅延とトークンコスト削減を狙う。新しいFlashモデルは推論ループの効率性を大幅に改善し、コード生成やマルチモーダル推論に適した設計となっている。

---

## Gemini 3.6 Flashの技術的詳細

Googleの开发者向けドキュメントによると、Gemini 3.6 Flashは旧バージョンのGemini 3.5 Flashと比較して**出力トークンを17%削減**を実現している（Artificial Analysis Index測定）。Datacurve DeepSWEベンチマークではトークン使用量が最大65%減少した事例も報告されている。

**料金体系**は而入力と出力で分別：
- 入力：$1.50/100万トークン
-出力：$7.50/100万トークン

これは継続的に動作する推論ループを想定した価格設計であり、オンデマンドのチャットインターフェース向けとは異なる。

### ベンチマーク結果

| ベンチマーク | Gemini 3.5 Flash | Gemini 3.6 Flash |
|---|---|---|
| DeepSWE成功率 | 37% | 49% |
| MLE Bench | 49.7% | 63.9% |
| GDPval-AA v2 | 1349 | 1421 |

OSWorld-Verifiedスコアは78.4%から83.0%へ向上し、化学・生物・放射性・核（CBRN）悪用に対する安全対策も強化された。

### 企業導入事例

**Figma**はプロトタイピングインフラに3.6 Flashを統合済み。Matt Colyer氏（Figma Director of Product Engineering）によれば、開発者が設計反復をより迅速に実行できるようになったという。

**Harvey**と**Hebbia**は法務・金融ドキュメントのマルチモーダル処理に採用。生的財務報告書の取り込み、ドキュメント構造解析、埋め込みグラフの読み取り、ドラフトレポート生成などを一支で処理する。

またGoogleはGemini APIとGemini Enterpriseプラットフォームに直接クライアントサイドのコンピュータ利用ツールを統合し、従来エンジニアが自作していたOS操作用 intermediary softwareを不要にした。

---

## 米国、中国のAIモデルに対する制裁示唆

もう一つ重要な話題は、美国財務省のScott Bessent長官が中国共产党のAIモデルに対する制裁の可能性を示唆したこと。Intellectual Property（IP） theftを理由に、中国のオープンソースAIモデルへの制裁を拡大する意向で、Trump政権の中国AI技術禁止の動きが継続している。

---

## Deezer、日次アップロードの50%以上がAI生成と報告

音楽ストリーミングサービスのDeezerは、2026年6月時点で**毎日9万件以上のAI生成トラック**がプラットフォームにアップロードされていると明かした。これは同月の日次アップロード全体の50%以上に相当する。

AI生成音楽の洪水はアーティスト収益や版权問題と絡み合い、業界全体の議論を呼びそうだ。

---

## 材料科学が次のAI飞跃を支える

MIT Technology Reviewは материал科学の革新が次世代AIの発展に貢献する可能性について报道。アルゴリズムやcomputing powerだけでなく、半导体製造やデータセンター投資の背後にある材料科学の進化が、AI性能の向上离不开の存在になりつつある。

---

## 参考リンク

- [Google's Gemini 3.6 Flash targets enterprise agent token costs (AI News)](https://www.artificialintelligence-news.com/news/googles-gemini-3-6-flash-targets-enterprise-agent-token-costs/)
- [US threatens sanctions against Chinese AI models over IP theft (TechCrunch)](https://techcrunch.com/2026/07/21/us-threatens-sanctions-against-chinese-ai-models-over-ip-theft/)
- [Music streamer Deezer says more than 50% of daily uploads are AI-generated (TechCrunch)](https://techcrunch.com/2026/07/21/music-streamer-deezer-says-more-than-50-of-daily-uploads-are-ai-generated/)
- [Advancing next-gen AI with materials science innovation (MIT Tech Review)](https://www.technologyreview.com/2026/07/21/1140602/advancing-next-gen-ai-with-materials-science-innovation/)

---

*本記事の情報は2026年7月21日時点のものです。*
