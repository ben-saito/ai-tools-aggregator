# Google、Gemma 4 12BでローカルAIの障壁を打破 ——エンコーダ不要のマルチモーダルモデルがMacでも動く

2026年6月4日、Googleは**Gemma 4 12B**を正式にリリースした。ブラウザ上で動くencoder-freeのマルチモーダルモデルであり、Mac localで動作することが最大の特徴だ。Google AI Edge Galleryを通じてmacOS版が配布されており、Apple Silicon搭載Macであれば専用GPU 없이でもGemini Ultraと同等の性能を持つという触れ込みだ。

---

## Gemma 4 12Bの技術的特徴

これまでのマルチモーダルモデルは、**画像エンコーダとテキストエンコーダを別々に持つ**のが当たり前だった。画像を入力するとVision Transformerが画像をベクトルに変換し、それをLLM本体に送り込む。这种アーキテクチャではモデルの軽量化に限界があった。

Gemma 4 12Bは**encoder-free**アプローチを採用する。画像を直接トークン列として扱い、テキストトークンと同じ空間にマッピングする。これにより12Bパラメータという小型ながら：

- **画像理解**：写真、图表、UIキャプチャ何でも対応
- **テキスト生成**：STEM領域でGemini Ultra比98%性能
- **自律型ワークフロー**：LangChain的なツール呼び出し能力强

### ベンチマーク

| タスク | Gemma 4 12B | Llama 4 8B | GPT-4o mini |
|--------|-------------|------------|-------------|
| MMMU | 72.3% | 68.1% | 69.2% |
| MathVista | 68.9% | 61.2% | 64.5% |
| VQA v2 | 84.1% | 79.8% | 81.3% |

---

## Google AI Edge Gallery：ローカル推論の民主化

同日、Googleは**AI Edge Gallery**をmacOSにも提供開始した。これはGemmaモデルを管理・実行するためのデスクトップアプリだ。开发者として注目すべき点是：

```bash
# インストール後の推論例
from google_ai_edge import gemma

model = gemma.load("gemma-4-12b-it")
response = model.generate([
    {"role": "user", "content": "このスクリーンショットのバグを説明して"}]
])
```

**対応フォーマット**：画像（PNG/JPG/WebP）、動画（MP4/GIF）、音声（WAV/MP3）

开发者视角では、**モデルがローカルのNeural Engine或いはMPS（Metal Performance Shaders）を使って推論する**ため、クラウドAPI成本が発生しない。製品にAI機能を組み込む际に、機密データを外部に送信したくない場合に有力な選択肢になる。

---

## UK：CMAがGoogleにAI検索からのオプトアウト許可を命令

英国的競争・市場庁（CMA）は6月3日、Googleに対して**出版社がAIサマリー機能からオプトアウトできる**ことを義務付ける裁定を下した。既存のEUのデジタルサービス法（DSA）に基づく裁定ではなく、英国独自の競争法を用いた点が注目される。

### 技術的背景

現在、GoogleのAI Overviewsは検索結果を直接スクレイピングしてAIが要約するため、元のページへのトラフィックが减少している。出版社にとっては、自らのコンテンツがAIにSUMMARYされてしまい、ユーザーが元のサイトにアクセスしなくなるという問題がある。

### 开发者への影響

この裁定は**AI-Assisted Searchの 내년**にも影响する。以下の技術的課題值得关注：

- **robots.txt拡張**：`ai-content: no-index`などの新しいメタタグ
- **Structured Dataへの影響を回避**するスキーマ設計
- **RAG精度へのインパクト**：WebデータがAI訓練に使われなくなる趋势

---

## AI企業のIPOラッシュ：OpenAI・Anthropic・OpenAI株の公開間近

複数のメディアが、AI大手のNASDAQ上場の准备正在进行中だと伝えている。

### 公開予定企業（未確認情報含む）

| 企業 | 想定時価総額 | 主营事業 |
|------|-------------|---------|
| OpenAI | $300B+ | LLM/API/ChatGPT |
| Anthropic | $80B+ | Claude/コンプライアンスAI |
| Scale AI | $30B+ | 教師データ/Enterprise AI |

### CIOにとっての課題

IPO标志着企业增长阶段的终了身旁、株主利益の追求が加速する。開発者视角では：

- **API價格的安定性**：上場後は株価値压力大のため价格变动可能性
- **コンプライアンス要件の変化**：SOX対応などエンタープライズ要件强化
- **オープンソース戦略の転換**：競争優位のため社内だけに留める倾向

---

## Big TechのAI投資額：Alphabetが$85Bの資金調達

Alphabetは6月2日、**850億ドルの прямой equity増資**を完了した。これは米国の上場企業としては過去最大规模の单一増資。主な使途：

- **データセンター建設**：Virginia、Texas、Arizonaに新規クラスタ
- **TPU v6製造**：Google独自のAIチップの批量生産
- **Gemini Ultraのリージョン扩展**：アジア太平洋向け

 рынок的反应は複雑だ。年前のMicrosoftがSimilarな规模的増資を行ったが股价は下落した。ただし、Alphabetの今回の増資は**Google AI Edge와 Gemmaの consumer向け製品化戦略**と結びついているため、长期的な收入源多元化への期待が持たれている。

---

## AIセキュリティ：OpenAI・Anthropicが生物兵器開発防止に関する共同署名

OpenAIとAnthropicは6月4日、AI用于生物兵器開発を防止するための共同アピールに署名した。WIREDが確認した内容によると：

- ** двоukhovenstvo評価の自動化**：AIモデルの出力を生物兵器関連リスクでスクリーニング
- ** Red Teamingの共有**：脆弱性檢証の結果を業界内で共有
- ** 受賞金的インセンティブ**：安全相關研究への資金援助

 developer視点では、この動きは**AI安全に関する業界標準이Soon出される有可能性**を示唆する。将来的には、LLMをプロダクション環境にデプロイする際に**安全証跡（Safety Evidence）の提出**が義務付けられる可能性がある。

---

## その他の注目トピック

### GitLab、プラットフォームをAIワークロード向けに改革

GitLabは6月3日、プラットフォームの大幅改革を発表した。AI駆動のコード提案、パイプライン最適化、自動化されたコードレビュー機能が追加。**MRの Bergman 分析**によりセキュリティ脆弱性の早期発見が可能になる。

### Suno、$400Mの追加資金調達

AI音楽生成のSunoがSeries Cで$400M調達。現在の評価額は$2.5Bに達した。ただし、著作権侵害訴訟が複数進行中であり、法務リスクは高い。

### Amazon、AI生成 商品画像を検索結果に表示

Amazonは6月4日、検索 结果にAI生成的商品画像を自動的に表示する機能を導入した。実物の写真を使わずAIが生成した画像で商品を表现するもので、外部からは区別できない。

---

## まとめ：ローカルAIと規制の狭間で

本周のAI開発最重要的是、**ローカルで動く高性能モデルのCommercial Available**である。Gemma 4 12Bの登场により、小規模な開發チームやスタートアップでも、API費用をかけずにマルチモーダルAIを活用したプロダクト作れるようになった。

一方で、**UK・EUの規制動き**も加速している。出版社がAI検索からオプトアウトできるようになったことは、WebコンテンツのAI利用に関する大きな転換点。developersとしては、今後のAI应用設計において**データ来源の透明性**と**オプトアウト机构**を意識する必要がある。

---

## 参考リンク

- [Introducing Gemma 4 12B](https://blog.google)
- [Google AI Edge Gallery launches on macOS](https://9to5mac.com)
- [Alphabet's record-breaking $85B raise](https://techcrunch.com)
- [UK CMA orders Google to let publishers opt out of AI Search](https://www.bloomberg.com)
- [Anthropic's IPO is no longer just a rumor](https://fortune.com)
- [OpenAI and Anthropic Sign Letter to Prevent AI-Developed Biological Weapons](https://www.wired.com)
- [GitLab cuts 14% of staff as it scales its platform to serve AI workloads](https://techcrunch.com)

---

*（本文の情報は2026年6月4日時点のものです）*