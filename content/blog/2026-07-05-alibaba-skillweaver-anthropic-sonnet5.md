# AI開発最新ニュース：AlibabaのSkillWeaverとAnthropicのClaude Sonnet 5

AI業界は2026年夏も目が離せない展開が続いている。今週は、中国Alibabaの**SkillWeaver**フレームワークと米Anthropicの**Claude Sonnet 5**という2つの技術革新が同時多発的に発表された。どちらもAIエージェントの実用化を加速させる岐路となるだろう。

---

## Alibaba、ツールルーティングの効率を99%改善するSkillWeaverを発表

### なぜツールルーティングが課題なのか

エンタープライズAIエージェントは、現実のビジネスワークフローで数百から数千のツールを抱える場面が当たり前になりつつある。「データセットをダウンロードして変換し、ビジュアルレポートを作成する」といった複合的なリクエストは、単一のツールでは実現できない。APIクライアント、データプロセッサ、ビジュアライゼーションツールを順番に呼び出す**マルチステップな実行計画**が求められる。

従来の解決策は、エージェントにライブラリ全体を一度に見せる方式だった。しかしこの手法には致命的な限界がある：**コンテキストウィンドウを圧迫し、数十万トークンを消費**してしまう。

### SkillWeaverのアーキテクチャ：Decompose → Retrieve → Compose

Alibabaの研究チームが開発した**SkillWeaver**は、3段階のプロセスでこれに立ち向かう。

**第1段階：Decompose（分解）**
LLMがタスクリクエスターとして機能し、複雑なユーザー問い合わせを「1つのスキルで実行できる粒度のサブタスク」に分割する。

**第2段階：Retrieve（検索）**
埋め込みモデルが各サブタスクとスキルライブラリを比較し、各ステップ向けの候補ツールをショートリスト化する。

**第3段階：Compose（構成）**
プランナーがretrievedされた候補同士を評価。ツール間の互換性をチェックし、依存関係をDirected Acyclic Graph（DAG）としてマッピングして、独立したタスクを並列実行可能な実行計画を生成する。

### SAD（Skill-Aware Decomposition）のフィードバックループ

特に注目すべきは**Iterative Skill-Aware Decomposition（SAD）**という新技術だ。LLMは技術文書とマッチしない抽象的なステップ説明を生み出しがちという課題に対し、SADは：

1. LLMが初期プランを作成
2. 予備検索で緩やかにマッチするスキルをretrieval
3. そのスキルをLLMにhintとしてフィードバック
4. 粒度と語彙が実際のツール群と完璧に一致するようdecompositionを書き直し

この**フィードバックループ**により、従来のone-shotなツール選択フレームワークとは一線を画す精度を実現する。

### 評価結果：トークン消費99%減、精度大幅向上

研究チームは2,209個の現実的なスキル（24カテゴリ：クラウドインフラ、金融、データベース等）を含むライブラリで**CompSkillBench**ベンチマークを構築。300個の多段階クエリで評価した結果：

- **トークン消費：99%以上削減**（ライブラリ全体を露出する従来手法比）
- 精度：**大幅に向上**

「タスク分解の粒度が、准确なツール検索の最大のボトルネックである」——これが実務者への主なtakeawayとなる。

---

## Anthropic、Claude Sonnet 5を発表——フラッグシップに匹敵する性能でIPO前哨戦

### 値付け戦略からの信号

Anthropicは6月30日、**Claude Sonnet 5**を正式リリースした。API pricingは`$2/百万入力トークン`、`$10/百万出力トークン`（8月末まで）——標準価格は`$3/$15`となるが、それでも最高モデル**Opus 4.8**（`$5/$25`）对比すると**約40%安い**（標準）/ **60%安い**（導入期間）。

この値付けは「民主化」と「IPO対策」の二重の意味を持つ。開発者にとって手が届きやすい価格でagentic能力を開放しながら、S-1 filingに向けて幅広いデベロッパー採用というストーリーを構築する戦略だ。

### ベンチマーク結果：ミッドティアがフラッグシップに近づく

Sonnet 5は前任のSonnet 4.6から全方位的改善を達成。Anthropicが開示した主要評価結果：

| ベンチマーク | Sonnet 5 | Sonnet 4.6 | Opus 4.8 |
|-------------|----------|------------|----------|
| SWE-bench Pro（コーディング） | 63.2% | 58.1% | 69.2% |
| Terminal-Bench 2.1 | 80.4% | 67.0% | 82.7% |
| Humanity's Last Exam（ツール使用時） | 57.4% | — | 57.9% |
| OSWorld-Verified（コンピュータ使用） | 81.2% | 78.5% | — |
| GDPval-AA v2（知識作業） | 1,618 | 1,395 | 1,615 |

**Sonnet 5は5大評価指標中1つでOpus 4.8を上回り、agenticコーディングベンチマークではあと6ポイント差**まで迫った。

### 企業ユーザーの反応：タスク完了率が劇的に改善

早期アクセスパートナーの声：

- **Cursor共同創業者Sualeh Asif**：「Claude Sonnet 5では、エージェントがプランに従い、私たちの規約を守り、クリーンな多ステップ変更を効率的なコストでshipする」
- **Zapierの上級エンジニアDaniel Shepard**：「2-part automation job——Salesforceアカウント層の更新と発売アナウンスの送信——は以前モデルでは途中で止まっていたが、今はend-to-endで完了する」

### 技術的注意点：新しいTokenizer

リリースノート脚注に埋もれている技術的詳細として、**Sonnet 5は更新されたTokenizerを使用**している。Opus 4.7で導入された変更と同様のものらしく、ワークロードによってコストが悄悄と上昇する可能性がある。実運用ではトークン使用量の再評価が推奨される。

---

## 業界への影響と展望

本周の2つの発表は、**AIエージェント実用化の針がさらに前進**していることを示している：

- **SkillWeaver**は、エージェントが数千のツールを抱えた環境での**スケーラビリティ問題**に出口を見せる。99%トークン削減は、リアルタイム性が求められる本番環境への大規模導入の障壁を大幅に下げる。
- **Claude Sonnet 5**は、「高价なフラッグシップでしか得られなかったagentic能力」を[mid-tierモデルで実現することで、**エージェントAIの民主化**を加速させる。

2026年下半期のAI業界は、**「動かない」Agentから「動く」Agent**への移行が加速しそうだ。

---

## 参考リンク

- [New Alibaba AI framework skips loading every tool, cutting agent token use 99% | VentureBeat](https://venturebeat.com/ai/new-alibaba-ai-framework-skips-loading-every-tool-cutting-agent-token-use-99)
- [Anthropic launches Claude Sonnet 5 at a steep discount to its top model | VentureBeat](https://venturebeat.com/ai/anthropic-launches-claude-sonnet-5-at-a-steep-discount-to-its-top-model-as-the-company-races-toward-a-blockbuster-ipo)
- [SkillWeaver研究論文 | arXiv](https://arxiv.org/)
- [Claude Sonnet 5 | Anthropic](https://www.anthropic.com/)

---

*本文の情報は2026年7月5日時点のものです*
