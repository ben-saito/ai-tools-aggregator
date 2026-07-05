# AI開発週次ニュース roundup：Claude Sonnet 5、ZCode、SkillWeaver

2026年7月第1週は、AI業界において複数の重要発表が同時に行われた週となった。AnthropicのClaude Sonnet 5発売、Z.aiのAIコーディングツールZCode正式ローンチ、そしてAlibabaのSkillWeaverフレームワーク公開——本周は開発者にとって注目すべきトピックが揃っている。

---

## AnthropicがClaude Sonnet 5を発売——フラグシップモデルの60%安い価格帯で

Anthropicは6月30日、**Claude Sonnet 5**を正式にリリースした。API価格は1トークンあたり入力2ドル、出力10ドル（8月末までの紹介期間中は1トークンあたり入力3ドル、出力15ドル）——これは同社の最上位モデルOpus 4.8の料金と比べて約60%安い設定だ。

### ベンチマーク結果：mid-tierモデルながらフラグシップに迫る性能

Sonnet 5は前任のSonnet 4.6から全ての評価指標で大幅な改善を見せている。

| ベンチマーク | Sonnet 5 | Sonnet 4.6 | Opus 4.8 |
|------------|----------|-------------|----------|
| SWE-bench Pro（エージェントcoding） | 63.2% | 58.1% | 69.2% |
| Terminal-Bench 2.1 | 80.4% | 67.0% | 82.7% |
| Humanity's Last Exam（ツール使用時） | 57.4% | — | 57.9% |
| OSWorld-Verified（computer use） | 81.2% | 78.5% | — |
| GDPval-AA v2（知識作業） | 1,618 | 1,395 | 1,615 |

特筆すべきは、**GDPval-AA v2ではOpus 4.8のスコア1,615をわずかに上回っている**点だ。SWE-bench Proでも63.2%と、Opus 4.8の69.2%まであと6ポイントしかない。

### エージェント能力の強化

AnthropicはSonnet 5を「これまでで最もエージェント向きなSonnetモデル」と表現している。Cursorの共同創業者Sualeh Asif氏によれば、「Claude Sonnet 5では、エージェントがプランに沿って従い、私たちの規約に従い、クリーンなマルチステップ変更を出力する——すべて効率的なコストで」という。

ZapierのシニアエンジニアDaniel Shepard氏も、二段階の自動化タスク（Salesforceアカウント層の更新とローンチ告知の送信）が「以前的モデルでは途中で止まっていた」が、Sonnet 5ではエンドツーエンドで完了한다고証言している。

### 注意点：トークナイザ変更によるコスト変化

リリースノートに小さく記載されている技術的 detail として、Sonnet 5はOpus 4.7で導入された**更新されたトークナイザ**を使用しており、これがテキスト処理の方法を変更している。ワークロードによっては文字数が同じでもトークン数が変わる可能性があり、意図せずコストが増加する可能性があるため注意が必要だ。

---

## Z.aiがZCodeを正式ローンチ——中国発AIコーディングツールがCursorとClaude Codeに真っ向勝負

北京ベースのAIラボZ.ai（旧Zhipu AI）は7月2日、AIコーディングツール**ZCode**の正式版をmacOS、Windows、Linux向けに免费でリリースした。GLM-5.2大型言語模型公式の開発環境として位置づけられ、Cursor、Claude Code、GitHub Copilotと直接競合する。

### ZCodeの技術的特徴

ZCodeは従来のIDEにAIをチャットサイドバーやオートコンプリート拡張として追加する形式とは異なり、**Agentic Development Environment**（エージェント指向開発環境）として設計されている。核となるコンセプトは「long-horizon tasks」——開発者が結果を描述し、エージェントが仕事を計画し、ファイルを編集し、チェックを実行し、進捗をレビューし、目標が達成されるまで反復を継続する。

注目すべき差別化要因として、**WeChat、Feishu、Telegramから実行中のコーディングエージェントをリモート操作できる**機能がある。長時間の作業が進行中でも、智能手机から進捗を確認し、指示を追加できる。

### GLM-5.2：中西部のチップのみで訓練された7440億パラメータMoE

ZCode的价值主张は、GLM-5.2なしには存在しない。同モデルは6月16日にリリースされ、Hugging FaceでMITライセンスの下でオープンソースweightsとして公开されている。

- **7440億パラメータのMixture-of-Experts（MoE）アーキテクチャ**、アクティブパラメータ400億
- **100万トークンのコンテキストウィンドウ**（前任の200Kから5倍）
- **28.5兆トークンの訓練**
- Code Arenaで全球2位——AnthropicのClaude Fable 5に次ぐ

最も重要な技術的 detail：GLM-5.2は**Huawei製チップのみで訓練**されている。Stability AI創業者のEmad Mostaque氏によれば、訓練コストは合計約2500万美元で、80%がポスト訓練に充てられているという。

### 価格体系

| プラン | 月額料金 | 内容 |
|-------|---------|------|
| Lite | $16.20 | 基本プラン |
| Max | $144 | 最上位プラン |

7月31日まで、 Coding Plan加入者には1.5倍の割増しクォータと、オフピーク時のトークン消費に0.67倍の係数が適用される。Claude CodeやCursorの同等のティアと比較して大幅に安い設定だ。

---

## AlibabaがSkillWeaver公開——エージェントのトークン使用量を99%削減

Alibabaの研究チームは7月2日、**SkillWeaver**フレームワーク公开した。AIエージェントが数千ものツールから適切なものを選択する際に 발생하는コンテキストウィンドウのオーバーロード问题を解決するアプローチで、ツール選択のトークン消費を**99%以上削減**できるとしている。

### 問題の設定：スキルルーティングの課題

 企业AIシステムは、複雑なワークフローを処理するために数百のツールやスキルを持つ。しかし従来の方法では、エージェントに entire tool library全体を知らせると、コンテキスト限界すぐに押し上げられ、何十万ものトークンを消費していた。

実世界のクエリは本質的に「合成的（compositional）」だ。例えば「データセットをダウンロードして、変形して、ビジュアルレポートを作成する」という標準的なビジネスリクエストは、1つのツールでは履行できない。APIクライアント、データプロセッサ、可視化ツールを順序付けて実行する必要がある。

### SkillWeaverのアーキテクチャ：Decompose → Retrieve → Compose

SkillWeaverは3段階で構成される：

1. **Decompose**：LLMが複雑なクエリを1つのスキルで履行できるサブタスクの連番に分解する
2. **Retrieve**：embeddingモデルを使用して各サブタスクをスキルライブラリと比較し、候補ツールのショートリストを作成
3. **Compose**：プランナーがretrieveされた候補を評価し、ツール間の互換性をチェック。依存関係を整理したDAG（Directed Acyclic Graph）を生成

### SAD（Skill-Aware Decomposition）：フィードバックループによる精度向上

LLMは一般的すぎるステップ描述を生成し、実際のスキルの技術的語彙と合わない場合がある。SADはこの問題を解決するため、**反復的なフィードバックループ**を採用。初步的な計画を作成→緩やかに一致するスキルを prelimnary search → retrieved skillsをLLMにフィードバックとして渡し、粒度と語彙を実際のツールに맞게書き换えさせる。

### 評価結果

研究チームは2,209の実際のスキル（24の機能カテゴリにわたる）と300のマルチステップクエリ组成的カスタムベンチマーク**CompSkillBench**で評価。结果、SkillWeaverは99%以上のトークン削減的同时に、ツール選択の精度も向上させた。

---

## その他又気になるトピック

### AlibabaがClaude Codeの使用を禁止

TechCrunchの報道によると、Alibabaは社員に対してClaude Codeの使用を禁止したようだ。中国のテクノロジー大手が米国製AIコーディングツールへのアクセスを制限する動きとして、。地政学的AI分離の正在进行形を示している。

### Google、独立宣言書をAIの力で —— 新コマーシャル

Googleがアメリカ独立250周年祝い向けに、生成AIを使用して独立宣言書をイメージした新コマーシャルを放映開始。AIと歴史の交差点を示す興味深い取り組みだ。

### Meta、エージェントの進捗が期待より遅いことを認める

Mark Zuckerberg CEOは社員に対し、AIエージェントの研究が彼の期待するほど快速に進んでいないことを伝えた。これは最近のエージェントAIへの大きな期待に対して、どこ現実的な冷ややかさが必要であることを示している。

---

## 参考リンク

- [Anthropic launches Claude Sonnet 5 (VentureBeat)](https://venturebeat.com/ai/anthropic-launches-claude-sonnet-5-at-a-steep-discount-to-its-top-model-as-the-company-races-toward-a-blockbuster-ipo)
- [Z.ai launches ZCode (VentureBeat)](https://venturebeat.com/ai/z-ai-launches-zcode-to-challenge-cursor-claude-code-and-github-copilot-in-ai-coding)
- [New Alibaba AI framework SkillWeaver (VentureBeat)](https://venturebeat.com/ai/new-alibaba-ai-framework-skips-loading-every-tool-cutting-agent-token-use-99)
- [Alibaba reportedly bans employees from using Claude Code (TechCrunch)](https://techcrunch.com/category/artificial-intelligence/)

---

*（本文の情報は2026年7月5日時点のものです）*