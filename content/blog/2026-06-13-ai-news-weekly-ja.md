# AI開発ニュースまとめ（2026年6月13日）

6月上旬のAI開発領域は、モデル開発における**透明性への批判**、エージェンティックAIの**セキュリティ基盤整備**、そしてRAGやスキル最適化といった実用化技術の進化が同時進行する興味深い週となった。

---

## Anthropic、安全警告が裏目に——Claude Fable 5の限定解除和政府との関係

Anthropicは6月12日、最新モデル**Claude Fable 5**の公開停止措置を政府に対して行った。これは企業の安全性に関する警告が、政府の判断に影響を与えたことを意味する。Anthropicはブログ投稿で、「狭いジャイルブレイクの可能性を理由に、何百万人ものユーザーが利用する商用モデルの公開を停止すべきするという主張には同意できない」と明示的に反論した。

この一件は、**安全性インプロセスと透明性の境界**について業界全体で再考を促すものとなっている。モデルの能力向上と安全性のバランスをどのように取るかは、規制当局との対話において今後ますます重要な論点になりそうだ。

---

## Kimi K2.7-Code発表——思考トークン30%削減の実態

Moonshot AI（北京）が**Kimi K2.7-Code**をリリースした。K2シリーズ待望のアップデートであり、思考トークン使用量を前バージョンK2.6比で**30%削減**と主張している。OpenAI互換APIで提供されるため、既存のK2.6運用基盤からの移行が容易な点が評価されている。

しかし独立系ベンチマークでは!**KernelBench-Hard**でK2.7-Codeを実行した研究者Elliot Arledge氏の結果によると、「K2.7はより正直だが、能力は向上していない」という結果が出ている。Moonshot AIが自社開発しているプロプライエタリベンチマーク（Kimi Code Bench v2、Program Bench、MLS Bench Lite）での数値と、独立ベンチマークの結果に乖離があることが指摘されており、モデルルーティングの判断材料として**DeepSWE**など中立ベンチマークへの提出が業界から求められている。

---

## Google、「Faithful Uncertainty」発表——ハルシネーションの新フレーミング

Googleの研究者はLLMの**ハルシネーション問題**に対する新しい概念的アプローチ「**Faithful Uncertainty**」を論文として発表した。核となるアイデアは、ハルシネーションを「事実誤認一律」ではなく「確信犯的な誤り（confident errors）」として再定義し、モデルの**内部的信頼度と言語的表現の不一致**是正を目指すものだ。

従来の方法では事実誤認を排除すると「利用可能な回答まで除外してしまう」という**utility tax**が存在した。例として、エラー率25%を5%以下に抑えるだけで、モデルの正しい回答の52%が捨てられるという数値が示されている。Faithful Uncertaintyでは、モデルが内部的確信度に応じて適切にヘッジした回答（「私の最善の推測では...」）を提供することを許容し、ユーザーの信頼を保ちながら有用性を維持することを目指す。

エンタープライズAIの観点からは、**エージェンティックAIにおけるメタ認知レイヤー**としての重要性が増す。外部ツールへの参照タイミングの制御や検索結果の質評価においても、内部的不確実性の認識が中核的な制御機構として機能する。

---

## NanoClaw × JFrog——AIエージェント向け「免疫系」提供

NanoClawの開発者であるNanoCo AIとソフトウェアサプライチェーン管理のJFrogが提携し、AIエージェントが悪意あるコードをダウンロードすることを不能にするセキュリティ統合をリリースした。

NanoClawエージェントは自律的にパッケージをインストールする機能を持つが、それが悪意のあるオープンソースパッケージによる攻撃対象となっている問題を解決する。JFrogのレジストリを通じて承認済みのみをインストールし、脆弱なバージョンを検出した場合は自動的にセキュアな代替案を提案する動的補正ループを形成する。

オープンソースコミュニティ向けは無償提供、エンタープライズ向けは既存の商用JFrog環境に統合する。AIエージェントの**セキュリティガバナンスとコンプライアンス**の基盤として注目される。

---

## PixelRAG——ビジョン言語モデルでRAGの精度とコストを改善

UC Berkeley、Princeton、EPFL、Databricksの研究者が**PixelRAG**論文を公开发表した。既存のテキストベースRAGがHTML解析時に失う情報を、ページをそのままスクリーンショットとしてインデックスすることで解決する。

シンプルな測定結果：6つのベンチマークでテキストベースRAG全てに上回り、精度は最大**18.1%向上**。AIエージェントのトークン使用量は3.6Mトークン（PixelRAG使用時）vs 37.5Mトークン（テキスト検索時）と**約10分の1**に削減できることが示された。

テキストRAGの失敗原因分析が注目に値する：

- **Parser loss（36.6%）**：HTML-to-text変換で文書構造が破壊され、回答がどのチャンクにも含まれなくなる
- **Rank loss（55.2%）**：回答は存在するがキーワード密度の高い infobox に押し出されランク20以下に
- **Reader loss（8.2%）**：正しいコンテンツに到達するが平板化で帰属先が不明確

エンタープライズRAGのビルダーにとっては、テキスト検索とビジュアル検索の**ハイブリッド構成**が最短経路となる。

---

## Microsoft SkillOpt——AIエージェントスキルの自動最適化フレームワーク

Microsoft Research Asiaが**SkillOpt**をオープンスソース（MIT）発表した。エージェントスキル（.mdファイルで記述されたプロシージャルナレッジ）を、深層学習の最適化手法を適用して自動改善するフレームワークだ。

深層学習と同様の数学的統制をテキストに輸入することが核心である。**Edit budget**（学習率相当）、**Validation set**（検証損失に相当）、**Rejected-edit buffer**（負のメモリ）の3要素により、テキスト編集の不安定性を克服する。

評価結果では、GPT-5.5でスキルなし基底線比**+23.5ポイント**向上。GPT-5.4-nanoではマルチモーダル文書QAでスコア約2倍、身体的相互作用と逐次的意思決定で3倍を記録した。Codex CLIで学習したスプレッドシートスキルをClaude Codeに転送したところ、**+59.7ポイント**の基底線超え達成している。

---

## 参考リンク

- [Anthropic、政府のモデル停止措置に反論（TechCrunch）](https://techcrunch.com/2026/06/12/anthropics-safety-warnings-may-have-just-backfired-the-government-has-pulled-the-plug-on-its-most-powerful-ai/)
- [Kimi K2.7-Code（VentureBeat）](https://venturebeat.com/technology/kimi-k2-7-code-cuts-thinking-tokens-30-practitioners-say-benchmarks-dont-check-out)
- [Google Faithful Uncertainty（VentureBeat）](https://venturebeat.com/orchestration/google-researchers-introduce-faithful-uncertainty-allowing-llms-to-offer-best-guesses-instead-of-hallucinations)
- [NanoClaw × JFrog（VentureBeat）](https://venturebeat.com/security/nanoclaw-and-jfrog-launch-immune-system-to-block-ai-agents-from-downloading-malicious-code)
- [PixelRAG（VentureBeat）](https://venturebeat.com/data/pixelrag-beats-text-parsers-on-accuracy-and-cuts-ai-agent-token-costs-10x)
- [Microsoft SkillOpt（VentureBeat）](https://venturebeat.com/orchestration/microsofts-open-source-skillopt-automatically-upgrades-ai-agent-skills-without-touching-model-weights)

---

*本文の情報は2026年6月13日時点のものです。*
