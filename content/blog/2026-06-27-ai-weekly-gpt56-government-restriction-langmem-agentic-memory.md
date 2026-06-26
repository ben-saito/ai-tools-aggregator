# AI開発ニュースまとめ（2026年6月27日）：GPT-5.6政府の制限対応、LangMemのエージェントメモリ、Liquid AIの小型モデル

2026年6月下旬、AI業界は複数の重要な動きを見せている。OpenAIはGPT-5.6の展開を政府要請を受けて制限し、「この種の政府アクセスプロセスが長期的なデフォルトになるべきではない」と声明を発表。またPatronus AIが$50Mを調達し、AIエージェントをテストする「デジタルワールド」構築に進むなど、エージェントAIの安全性と評価注目を集めている。

---

## OpenAI、GPT-5.6のロールアウトを政府要請で制限

OpenAIは6月26日、最新のモデル**GPT-5.6**（Sol、Terra、Lunaを含む）の展開を**Trump政権の要請**を受けて制限したことを明らかにした。同モデルは幅広い公開リリースではなく、限定的なパートナープレビューとしてのみアクセス可能となっている。

OpenAIのコミュニケーション責任者はTechCrunchに対し、次のように述べた：

> 「この種の政府アクセスプロセスが長期的なデフォルトになるべきとは考えていません。最も優れたツールを、ユーザー、開発者、エンタープライズ、サイバー防御者、およびそれらを必要とするグローバルパートナーから遠ざけてしまいます」

### 背景にある安全性への懸念

White Houseは安全性への懸念を理由に、GPT-5.6のフル公開を事実上見送るようOpenAIに求めたと見られる。GPT-5.6は前身のGPT-5.5と比較して大幅な能力向上が報告されており、ショッピング支援、複雑な制約処理、ユーザー意図の理解等功能がAPIですぐに利用可能になっている。

OpenAIはIndia市場への進出も加速しており、Uber IndiaのチーフPrabhjeet Singh氏を招へいして美国国外最大の市場であるインドでの展開を拡大している。

---

## Patronus AI、$50Mを調達——AIエージェント評価の「新境地」

AIベンチマークおよび評価スタートアップの**Patronus AI**が、Greenfield Partners、LightSpeed Venture Partners、Notable Capitalから**$50M（約75億円）**のシリーズラウンドを調達した。

同社はMeta AIの研究者らによって設立され、AIエージェントを「デジタルワールド」で-stress testするプラットフォームを構築している。AIエージェントが現実世界で期待通りに動作することを保証するための評価フレームワークへの需要は、生成AIエージェントの急速な普及に伴い急増している。

Patronus AIのCEO兼共同設立者は、「ほぼ抑制できない需要」が investor の間で見られると述べている。

---

## LangMem：クエリあたり118Kトークンを消費する自律メモリフレームワーク

VentureBeatが報じた新しいエージェントメモリフレームワーク**LangMem**が、注目に値する技術的進歩として話題になっている。

### 技術的詳細

- **トークン消費**: クエリあたり最大**118,000トークン**
- **累積処理**: 3.26Mトークンの burn-through（消費）
- **目的**: AIエージェントがタスク間で**永続的なメモリと文脈保持**を実現
- **アーキテクチャ**: LangChainベースの自律型メモリ管理

従来のエージェントは会話ごとにメモリを喪失していたが、LangMemはエージェントが「学習した」情報を保持し、時間の経過とともにパフォーマンスを向上させることを目指す。118Kトークンという消費量はコスト面での課題も示唆しているが、エージェントの自律性が向上する代償として許容される可能性がある。

---

## Liquid AI、LFM2.5-230Mを発表——4倍サイズモデルを上回る性能

Liquid AIは、同社最小のモデル**LFM2.5-230M**をリリースした。この230Mパラメータという小型モデルは、データ抽出タスクで**自身れの4倍サイズのモデルを上回る性能**を示している。

### LFM（Liquid Foundation Model）の特徴

- **効率的なアーキテクチャ**: リキッドタイム定数（LTC）を活用した動的计算
- **展開の柔軟性**: 「anywhere」で動作可能——エッジデバイス含めた幅広い環境対応
- **パフォーマンス**: 小型ながらも大型モデルに匹敵する精度

これはモデルサイズ競争に対する新たなアプローチであり、すべてのタスクに巨大モデルが必要なわけではないことを示唆している。

---

## カスタムAIチップトレンド：OpenAIのJalapeñoからBig Techの脱Nvidiaへ

TechCrunchの分析記事によれば、**Nvidia依存からの脱却**がBig Tech間のトレンドになりつつある。

### 主要プレイヤーのカスタムチップ開発

| 企業 | チップ名 | パートナー |
|------|----------|------------|
| OpenAI | **Jalapeño** | Broadcom |
| Google | TPU v5/v6 | 自社開発 |
| Apple | M4/A18 Neural Engine | 自社開発 |
| SpaceX | Starlink AI Chip | 自社開発 |
| Anthropic | 不明 | 開発中と噂 |

OpenAIのJalapeñoは推論用カスタムチップであり、Broadcomと共同開発が完了に近づいていると見られる。この動きはAIインフラのコスト構造を変え、NvidiaのGPU需要に対する長期的な影響が議論されている。

---

## Anthropic Claude、有料ユーザー市場で存在感を増す

ChatGPTが有料市場を支配する中、**AnthropicのClaude**が有料消費者の間で着実にシェアを伸ばしている。TechCrunchの分析では、Claudeを選ぶ有料ユーザーの割合が増加傾向にあり、特に開発者コミュニティでの評価が高い。

Claudeの优势として指摘されるのは：
- 長いコンテキストウィンドウ（200Kトークン）
- 安全性への強いコミットメント
- コード生成・技術文書作成での高性能

---

## 其他注目ニュース

- **Adobe、Topaz Labsを買収**: 画像・動画強化ツールのTopaz LabsをAdobeが買収。AIを活用したメディア強化分野での統合が進む。
- **General Intuition、$320Mを調達**: ビデオゲームデータでAIエージェントを訓練するアプローチに投資家が注目。
- **Databricks元AI責任者、電力コスト1000分の1削減を提案**: AI推論のエネルギー効率改善への期待。

---

## 参考リンク

- [OpenAI limits GPT-5.6 rollout after government request (TechCrunch)](https://techcrunch.com/2026/06/26/openai-limits-gpt-5-6-rollout-after-government-request-says-restrictions-shouldnt-be-the-norm/)
- [Patronus AI lands $50M (TechCrunch)](https://techcrunch.com/2026/06/25/patronus-ai-lands-50m-to-build-digital-worlds-that-stress-test-ai-agents/)
- [New agentic memory framework LangMem (VentureBeat)](https://venturebeat.com/orchestration/new-agentic-memory-framework-uses-118k-tokens-per-query-langmem-burns-through-3-26m)
- [Liquid AI LFM2.5-230M (VentureBeat)](https://venturebeat.com/technology/liquid-ais-smallest-model-yet-lfm2-5-230m-beats-models-4x-its-size-at-data-extraction-can-run-anywhere)
- [OpenAI GPT-5.6 Sol/Terra/Luna models (VentureBeat)](https://venturebeat.com/technology/openai-unveils-gpt-5-6-sol-terra-and-luna-models-but-only-accessible-to-limited-preview-partners-for-now-per-us-gov)
- [Why everyone is building their own chips (TechCrunch)](https://techcrunch.com/video/why-everyone-from-openai-to-spacex-are-building-their-own-chips-and-turning-up-the-heat-on-nvidia/)

---

*本文の情報は2026年6月27日時点のものです。*