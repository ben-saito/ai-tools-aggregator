# GPT-5.6とMythos 5：米政府介入最深まるAI規制時代、カスタムチップ競争も加速

2026年6月最終週、米国のAI業界はTrump政権からの規制要請を受け、主力モデルの段階的リリースを余儀なくされるという異例の展開に見舞われた。OpenAIは「GPT-5.6」を金曜日に限定公開し、AnthropicはMythos-classモデルの一部を100社以上に再開許諾させたが、公衆向けFable 5の評価版は依然宙に浮いたまま。開発者にとっては、米中のAI覇権争いとカスタムシリコン投資の両面が急速に変化している。

---

## GPT-5.6：Sol / Terra / Lunaの3層構成、価格はClaude Fable 5の半分

OpenAIは6月26日（米国時間）、新世代モデルスイート「**GPT-5.6**」の限定プレビューを開始した。注目を集めたのは、主力フラグシップ「**Sol**」、中量利用向け「**Terra**」、低コスト日常利用向け「**Luna**」の3層構成だ。

### 価格：Anthropic Claude Fable 5のほぼ半額

| モデル | 入力 ($/百万トークン) | 出力 ($/百万トークン) |
|--------|----------------------|----------------------|
| GPT-5.6 Sol | $5 | $30 |
| Claude Fable 5 | $10 | $50 |
| GPT-5.6 Terra | Solの半額 | Solの半額 |
| GPT-5.6 Luna | Terraの半額未満 | Terraの半額未満 |

SolはFable 5と比較して**入力約50%安、出力約40%安**という価格競争力を実現した。OpenAIはまた、Sol向けに「**max**」モード（より深い推論）と「**ultra**」モード（サブエージェント活用）を新たに提供開始した。

### 得意分野：コーディング、サイバーセキュリティ、生物学

OpenAIの発表によると、GPT-5.6は長期的タスクにおける**エージェント的AIの焦点維持能力**、コーディング、サイバーセキュリティ、生物学分野での強化された能力が特徴的。Safety面では「これまでのところ、最も堅牢な安全スタック」と主張。約**70万A100e GPU時間**の自動赤チームテストを実施し、有償第三方テスターによる2週間にわたる評価を進めている。

---

## 政府介入の背景：段階的ロールアウトは「短期的措置」

OpenAIは、政府からの要請を受けGPT-5.6の展開を段階的に進めることを余儀なくされた。同社は声明で「このような政府アクセスプロセスが長期的なデフォルトになるべきではない」と批判的立場を表明。「最高水準のツールがユーザー、開発者、企業、サイバー防御担当者、国際的なパートナーから遠ざけられる」と続けた。

プレビュー期間中の安全基準は厳格で、「護衛が正当な作業に時折介入する可能性がある（特に防御的・攻撃的活動の見かけが初期段階で類似している場合）」とし、プレビューの意図を説明した。Generally Availableは「数週間以内」を予定している。

---

## Anthropic Mythos 5：100社以上に再開もFable 5は依然暗礁

米商務長官Howard LutnickからAnthropic共同創業者のTom Brownあてに6月26日付で送られた書簡によると、**Mythos 5 classモデルの使用が100社以上の政府機関・企業に許可**された。ただしこれは組織ベースのライセンスであり、従業員は含まない。

### Fable 5（公衆向けMythos-class）は依然不明

The Vergeによれば、Fable 5（公衆向けMythos-classモデル）のローンチ時期に関する明確なタイムラインは存在しない。Anthropicは2週間にわたるTrump政権との交渉の末、必死の譲歩を強いられたが、解決策はまだ見つかっていない。同社は今週、複数のコメント要請を拒否し続けている。

書簡ではライセンス要件の「修正」が言及されているが、具体的内容は不明。AnthropicがMythos-classモデルを取り下げるよう金曜夕方にUltimatumを受けてから、2週間以上が経過した。

---

## カスタムチップ戦争：OpenAI Jalapeno、Broadcomとの協業

TechCrunchのポッドキャスト「Equity」では、OpenAIがBroadcomと協業して開発したカスタム推論チップ「**Jalapeno**」の詳細が報告された。Google（TPUs）、Apple、SpaceXに続き、**Nvidiaへの依存からの脱却**を目指す動きが加速している。

カスタムシリコンの狙いは明確だ：

- **サプライチェーンリスクの分散**：単一供給者への依存回避
- **コスト最適化**：自社ワークロードに最適化したHW設計
- **差別化された推論性能**：特定的ユースケースに特化した設計

Nvidiaが長年支配してきたAIチップ市場からの脱却を図る動きが、主要テック企業間で広がっている。

---

## OpenAI、印度市場へ本格参入：Uber India責任者を採用

OpenAIは6月26日、Uber Indiaの責任者を採用し、同社にとって米国以外で最大の市場である**印度での拡大**を加速すると発表した。Prabhjeet Singhは9月からOpenAIに参加し、アジア太平洋担当Managing DirectorのKiran Maniに報告する。責務は消費者成長、企業導入、パートナーシップ、規制対応、運用涵盖。

OpenAIは去8月にニューデリーに初スタジオを開き、MumbaiとBengaluruにも新規スタジオ設置を表明している。Indiaは10億人以上のインターネットユーザーと急成長する生成AI需要に支えられ、Anthropicが2025年末にBengaluruに印度スタジオを開いて以来、米AI企業の主戦場となっている。

---

## 開発者への影響

本周の展開は開発者に複数の視点を提示している：

- **API規制リスク**：主力モデルの段階的ロールアウトは、政府アクセスがAPI利用の標準プロセス化しうることを示唆
- **価格競争**：GPT-5.6がFable 5の半額近い価格設定は、LLM間の価格競争が継続していることを示している
- **カスタムチップ**：推論最適化のための専用ハードウェアへの投資は、エッジ・エンタープライズ両面で重要性が増す
- **地政学的リスク**：Anthropicの事例は、先進的なAIモデルが国家問題に巻き込まれる可能性の実証である

---

## 参考リンク

- [TechCrunch: OpenAI limits GPT-5.6 rollout after government request](https://techcrunch.com/2026/06/26/openai-limits-gpt-5-6-rollout-after-government-request-says-restrictions-shouldnt-be-the-norm/)
- [The Verge: OpenAI unveils GPT-5.6 amid US AI regulatory drama](https://www.theverge.com/ai-artificial-intelligence/957845/openai-gpt-5-6-trump-administration-ai-preview)
- [The Verge: Anthropic's Mythos 5 is back](https://www.theverge.com/ai-artificial-intelligence/958458/anthropic-mythos-5-is-back-trump-negotiations)
- [TechCrunch: OpenAI poaches Uber India chief](https://techcrunch.com/2026/06/26/openai-poaches-uber-india-chief-to-lead-its-biggest-market-outside-the-u-s/)
- [TechCrunch: Why everyone is building their own chips](https://techcrunch.com/video/why-everyone-from-openai-to-spacex-is-building-their-own-chips-and-turning-up-the-heat-on-nvidia/)
- [TechCrunch: Trump admin releases Anthropic Mythos](https://techcrunch.com/2026/06/26/trump-admin-releases-anthropic-mythos-to-be-used-by-more-than-100-us-companies-agencies/)

---

*（本文の情報は2026年6月27日時点のものです）*
