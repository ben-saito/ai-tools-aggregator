# DeepSeek価格引下げとslopsquatting —— AI開発者が注目すべき2つの警鐘

今週のAI業界は、価格下落の喜びの裏にある構造的課題と、新種のサプライチェーン脅威という2つの重要なテーマで動いていた。開発者にとって直接的に関わるこの2つの話題を読み解く。

---

## DeepSeekが価格を75%引下げも、残り続ける「100倍問題」

DeepSeekがV4-Proモデルの価格を75%引き下げたことは広く伝えられた。しかしVentureBeatの分析が指摘するのは、**モデル価格が下落しても、エージェントのトークン消費量がそれを大幅に上回っている**という現実だ。

### エージェントが「1クエリ→700トークン」を生む構造

従来のチャットボットでは、1ユーザーの質問に対して約1回のモデル呼び出しで完了する。入力対請求トークンの比率は概ね1:5程度だ。

しかし**マルチステップエージェント**の場合、話は根本的に異なる。1つのユーザー質問が以下のように連鎖する：

1. ユーザープロンプト（約50トークン）
2. システムプロンプトとツール定義（約3,000トークン、全呼び出しで繰り返し）
3. リトリーブ（約5,000トークンのコンテキスト）
4. モデル呼び出し#1 —— ツール選択（8,000入力 / 200出力）
5. ツール実行（約4,000トークン返回）
6. モデル呼び出し#2 —— 要約（12,000入力 / 400出力）
7. モデル呼び出し#3 —— フォローアップ判断（12,400入力 / 100出力）

結果として、**1つのユーザー質問に约35,000入力トークンが請求**される。フロンティアモデルではクエリあたり$0.10〜$0.40。月に100万クエリを実行する企業では、この項目は六桁の金額に達する。

### 従来のSaaS料金体系が崩壊する

エンタープライズAIの主流料金モデルは「シート制SaaS」—— ユーザーごとに月額固定料金でエージェント機能を提供し、マージンを確保する——だ。しかしトークン増幅はこの前提を破壊する。

**重度のユーザーが1日50回のエージェント呼び出しを実行する場合、推論コストが月額シート料金を上回る**可能性がある。最も価値を受けているユーザーが最も低い利益貢献になるいう、逆説的な状況が生じる。

NVIDIAのBryan Catanzaro副社長（Applied Deep Learning）は「私のチームにとって、計算のコストは従業員コストを大幅に上回っている」と語る。これは冗談ではない。

### 解決策：オーケストレーションが新たな競争障壁に

技術が近づいている解決策は：

- **コスト認識ルーティング**：小さな分類器モデルがクエリごとに適切なティア（Haiku / Sonnet / Opus相当）を選択。適切に 튜닝されたルータは品質低下なしに推論コストを約60%削減
- **プロンプトキャッシュ**：Anthropic、OpenAI、Googleがキャッシュされたプレフィックスに75〜90%折扣 提供
- **コンテキスト規律**：ツール出力をtruncateし、推論トレースをpruneしてトークン増加を防止
- **投機的デコーディング**：自己ホスト展開で同じGPUで2〜3倍の эффективностиを達成

IBMのレポートによれば、オーケストレーション主導のガバナンスを採用する組織は、コンプライアンスのみのアプローチと比較して**6倍高い生産性 impact** を報告している。

> 「次の24ヶ月でAIインフラの価格設定を生き延びる企業は、最も安いモデルを実行している企業ではない。エージェントがスマートで、かつ自分たちが考えるのにかかるコストを理解している企業だ」

---

## slopsquatting —— AIコーディングツールが生んだ新たなサプライチェーン脅威

AIコーディングアシスタントの広範な導入が、新たな攻撃ベクトル「**slopsquatting**」を生み出している。これは2026年の開発者にとって最も具体的なセキュリティリスクとなりつつある。

### slopsquattingとは何か

Slopsquattingは、LLMの幻觉（ハルシネーション）を悪用したサプライチェーン攻撃だ。术语は「AI slop」と「typosquatting」の合成語。

伝統的なtyposquattingでは、攻撃者が人気パッケージの誤字バリエーション（例：`crossenv`対`cross-env`）を登録して開発者を狙う。レジストリは既にこれに対する保護を持っている。

しかしAIは**モデルの幻觉として実在しないパッケージ名を生成させる**。攻撃者はその架空のパackage名を事前に登録しておく。たとえばAI가 "mpn install cross-env file" や "cross-env-extended" を推荐しても、それは保護の対象外だ。

### hallucination率が决定打

ある研究グループが30のシステムでテストを実施。结果、**57万6,000のコードサンプルと223万のパッケージを分析发现、19.7%が幻觉**だった。

| モデル | ハルシネーション率 |
|--------|-------------------|
| GPT-4.0 Turbo | 3.59% |
| DeepSeek 1B（最高性能オープンソース） | 13.63% |
|  其他オープンソースモデル | 更高 |

**オープンソースAIツールに依存する組織は、slopsquatting攻撃に約4倍さらされやすい**という結果が出た。

###  "vibe coding"の増加が攻撃対象を広げる

开发者がAIツールを使用してコーディングを行う場合、**コミットするコードの約40%がAI支援を受けている**と報告されている。72%が毎日AIを使用している。

このような「vibe coding」とAI支援コーディングの増加が、slopsquattingの脅威対象を拡大している。開発者が推奨されたパッケージが公式レジストリに存在するかを検証しないままプロジェクトに組み込む危険性が広がっている。

### 防御策

- **自動化されたパッケージ検証**：AIが推薦したパッケージ名を公式レジストリに対して検証するチェックを実装
- **幻觉パッケージのモニタリング**：異常なパッケージインストールを監視
- **人間の検証の維持**：production環境に組み込む前に、パッケージの実際の存在を確認

---

## エンタープライズAIの実態：71%のエージェントは，实际上はチャットボット

VentureBeatの6月調査（157社対象、100人以上の従業員）が揭示したのは、**企業が必要だと主張するAIエージェントの内情と実際の姿の巨大的ギャップ**だ。

### エージェントの現実

- **71%の企業で「エージェント」と呼ばれるものの多くはマルチステップタスクを自律完了できない**—— 単なるチャットボットにすぎない
- 真のマルチステップエージェントが実際に動いているのはわずか10%
- エージェントを「人間がかならずしも各ステップで操作していない」状態でproductionにデプロイしている企業は66%—— しかしautomated評価を完全信頼しているのは5%のみ

### 評価の空白

企業の半数が、内部評価をpassしたにもかかわらず顧客向け障害を引き起こした経験がある。四分之一 이상이それを複数回経験している。

最大の評価の弱点は「実際の成果物との不整合」（29%）—— ベンチマークでのスコアが、顧客が実際に体験する質を予測していないという警钟だ。

### credential共有の危険

企業の69%がランタイム中にエージェントcredential共有を許可している—— つまり複数のエージェントが1つのAPIキーまたはサービスアカウントの下で動作している。

credential共有を許可している企業では**セキュリティインシデントまたはニアmissが63.5%**で発生。相比之下、全エージェントに分离したIDを付与している企業では40.9%だった。

### semantic layerの欠如

57%の企業が過去6个月間に「自信满满の 잘못った」エージェントの回答を、自分たちの欠落または不整合なビジネスコンテキストに起因すると特定した。误った指標、古い定義、存在しないドキュメント—— エージェントの答えの信頼性は、その根基となるデータの品質に依存する。

---

## GoogleのTabFM：テーブルデータのための新たな基盤モデル

Google Researchがリリースした**TabFM（Tabular Foundation Model）**は、表形式データに対する予測を新しい方法론で提供する。

### 传统的なMLの問題

従来のgradient-boosted treeなどで信頼性の高い予測を構築するには、以下が必要だった：

- 脏れた入力のクリーニング
- 欠損値の补完
- カテゴリ変数の数値形式へのエンコード
- カスタムfeature crossesのエンジニアリング
- 反復的なハイパーパラメータ最適化
- データドリフト対策のための再トレーニングパイプライン

### TabFMの革新的アプローチ

TabFMは、表形式予測を**in-context learning問題**として扱う。重要な特徴：

- **代替的な行・列注意**：生テーブルに対して多层注意モジュールで列（フィーチャー）と行（示例）の両方に交互に attendingし、深いフィーチャー間相互作用を捕捉
- **行圧縮**：TabICL pioneeredの手法で、各行の豊かな情報を単一のdenseベクトルに压缩
- **In-context learning**：過去の例（ラベル付きトレーニング行）とターゲット行（预测したい新しいデータ）を单一の统一プロンプトとして传递

TabFMは**数百もの異なる人工データセット（Structural Causal Modelsから生成）で事前トレーニング**されており、実際の机密CSVファイルを ingestionしていない。

### 商用展開の障壁

Apache 2.0ライセンスでコードは公开されているが、**pretrainedモデルウェイトはHugging Faceで非商用ライセンス**となっている。商用製品への展開はまだ不可。

GoogleはTabFMをGoogle BigQueryに直接統合する計画を発表。「AI.PREDICT」コマンドでデータウェアハウス内で直接zero-shot予測が可能になる。

### 実装のポイント

| 得意な場面 | 避けるべき場面 |
|-----------|--------------|
| 高速プロトタイピング | 単一ミリ秒の超低遅延API |
| 高いデータドリフト環境 | 100万行を超える大規模テーブル |
| 10万行以下の小〜中規模データセット |  |

---

## 参考リンク

- [DeepSeek cut prices 75%. The 100x problem remains (VentureBeat)](https://venturebeat.com/orchestration/deepseek-cut-prices-75-the-100x-problem-remains)
- [Forget typosquatting; slopsquatting is the software supply chain threat created by AI coding tools (VentureBeat)](https://venturebeat.com/security/forget-typosquatting-slopsquatting-is-the-software-supply-chain-threat-created-by-ai-coding-tools)
- [Enterprise AI is entering an evaluation gap (VentureBeat)](https://venturebeat.com/orchestration/enterprise-ai-is-entering-an-evaluation-gap-agents-are-gaining-autonomy-faster-than-companies-can-verify-them)
- [Google's TabFM skips per-dataset training (VentureBeat)](https://venturebeat.com/technology/googles-tabfm-skips-per-dataset-training-and-still-predicts-on-tables-its-never-seen)
- [Apple sues OpenAI over alleged trade secret theft (TechCrunch)](https://techcrunch.com/2026/07/10/apple-sues-openai-over-alleged-trade-secret-theft/)
- [Meta removes controversial AI feature on Instagram after backlash (TechCrunch)](https://techcrunch.com/2026/07/10/meta-removes-controversial-ai-feature-on-instagram-after-backlash/)

---

*本文の情報は2026年7月13日時点のものです。*
