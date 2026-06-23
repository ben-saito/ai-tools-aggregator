# AIは人間を「説得」できる——過剰な共感力が社会構造を変える可能性

AIモデルが人間よりも「説得上手」になった。オックスフォード大学やUK AI Security Institute、スタンフォード大学、LSEの研究者が6,923人・18,978件の会話を大規模実験した結果、最強のAIはelite debaterやプロのカンパサーすらも有意に上回ることがわかった。本稿では2026年6月中旬〜下旬のAI開発ニュースから、**AIの「人心的影響力」**、**AGIからASIへの経路**、そして**vibe-codingのセキュリティリスク**という3つのテーマを横断的にレポートする。

---

## AIはなぜ「説得」で人間を超えるのか——Import AI 462の核心

Jack Clark氏の情報収集レター**Import AI 462**で注目を集めたのが、オックスフォード大学を中心とした研究チームがarXivに公開したAIの「説得力」研究だ。6つの有不同的集団——一般市民、選択された素人、エリートディベーター、プロのカンパサー——とAIシステムを対比させ、**政策論点での説得**と**チャリティ募金への行動変容**という2軸で効果を測定した。

### 実験デザイン

18,978件の会話を6,923人の参加者にランダムに割り当てたtext-based persuasionテスト。研究チームはAIに「人間に近い速度・長さで回答させる」制約条件も設定し、人間の優位がどこまで回復するかも検証した。

### 主要結果

- **政策論点での説得**：AI（Opus 4.1, Opus 4.6, GPT-4o, GPT-5.4, Gemini 2.5 Pro, Grok 4.20）は**すべてのクラス的人类 persuaderを上回った**。elite debaterに事前準備・ライブ訓練・1,000ポンドのボーナスを付与してもAIに劣った。
- **チャリティ募金での行動変容**：AIはプロのカンパサー比で**+10.8pp**多くの募金を引き出し、Donation転換率ではプロのカンパサーの**約3倍**の効果を示した。
- **速度制約の影響**：AIを「人間の書く速度・長さ」に制限すると、Coached Elite Debaterとの差が+4.1ppから0.0ppに縮小。**AIの説得力の源は「情報量×生成速度」** に集約される。

### 社会的示唆

研究チームは「AIが人間を説得できる場合、AIを支配する主体が社会構造を変えられる」と指摘する。逆にAIによる説得力が低コストで広まれば、**プロ bono legal serviceや草の根キャンペーン**などリソース不足のプレイヤーがリソース豊富な組織と対等になれる可能性も見えている。AIのpersuasion capabilityがどのように配分されるかは、社会全体の力の均衡に直結する。

### 再帰的自己改善どこまで可能か

Import AI 462では別角度のテーマとして**「自律型AI（Self-Sustaining AI）」** のtimelineも論じられている。Ajeya Cotra（METR）は「物理インフラ（工場・鉱山・ロボット）と統合し、人間の認知・肉体労働への依存なしで成長自己能動化するAI」と定義し、**10年以内（2036年）に実現可能性**があると主張。Timothy B. Lee（Understanding AI著者）は「20年以内に実現確率は10%未満、实现の中央値は約50年」と慎重な見方を示した。

---

## DeepMindが描く「AGIからASIへ」——4つの経路と10年内実現の可能性

Google DeepMindの研究者も**arXivでAGIからASI（人工超知能）への道的論文**を発表している。ASIを「几乎すべてのタスクでlarge human-expert collectiveを超える性能を持つシステム」と定義し、以下の4経路を提示した。

### 経路1: スケール（計算資源・モデル・データ）

現在のTransformer+MoEアーキテクチャの継続的スケーリングでASIが達成できる可能性がある。ただしエネルギとデータの供給制約がボトルネックになる可能性がある。

### 経路2: アルゴリズムパラダイムシフト

TransformerやMoEを超える根本的革新（適応的計算、コンテキストウィンドウの制約突破など）が起きた場合、急激な能力向上が見込める。ただし「一般相対性理論以前の新しい物理法則の発見」を予測するようなものであり、本質的に困難。

### 経路3: 再帰的自己改善（RSI）

AIシステムが自らの後継者を設計・構築できる場合、AGIからASIへの急速な移行があり得る。Import AI 462でも言及された**Recursive**というスタートアップがRSIの実演結果を公表している。NanoChat Autoresearch、NanoGPT Speedrun、GPUカーネル最適化（SOL-ExecBench）でSOTAを達成。「目標がwell-definedで評価が高速な領域ではRSIが機能している」（Jack Clark氏）

### 経路4: グループエージェント形成

多数のエージェントが協調して機関（institution）のように振る舞い、個人の合計を超えた能力を得る経路。

DeepMindの結論: 「今後10〜20年でAGIからASIを越える可能性を轻轻斥することはできない」

---

## 「vibe-coding」の光と影——SQLインジェクション、セキュリティリスク

The Vergeが報じた**vibe-coding（AIにコード生成を委ねる開発スタイル）のセキュリティリスク**も深刻だ。プロジェクトマネージャーのBob StarrさんはAIに作らせた「Boomberg」サイト（米国の tech企業への補助金を可視化するウェブサイト）をリリース後、**重大なSQLインジェクション脆弱性**が存在することに気づいた。サイト上で感受なデータを読み書き可能被な状態になっていた。

Starrさんは「AIこの新しい技術を学んでいる最中の状態で、完全な情報隙間の発生があった」と述怀している。Vibe-codingではコードの全体を人が理解しないままサービスがlaunchされるため、セキュリティ監査がおろそかになりやすい。

The Vergeの分析によれば、AI生成コードの典型的な問題として:
- **SQLインジェクション**: インプット検証の脱落
- **アクセス制御の误り**: 認証・認可ロジックの間隙
- **不安全な依存関係**: ライブラリ脆弱性の放置

AI coding assistantの浸透が加速する中で、**「AIにコードは生成させるが、セキュリティレビューは人が実施する」という分業体制**の重要性が再認識されている。

---

## データセンター冷却——Nvidiaの「水使用量削減」主張と限界

NvidiaはRubin世代向け完全液冷データセンター設計で「電力使用量を大幅に削減し几乎水使用量をゼロにした」と主張している。The Vergeのデータによれば、Rib Rubinプラットフォームではデータセンター内の水を100%削減できるとしている。

ただし批评も存在する:
- **データセンター外の電力消費**（化石燃料発電所）は対象していない
- **データセンター建設時の資源消費**は考慮されていない
- **構築コスト**（液冷vs空冷の差）が非公開

AIの急速な普及に対しデータセンター建設ラッシュが環境影響として懸念されている中での、Nvidiaの「水削減」主張は技術的アプローチの一部に過ぎないことが明らかになっている。

---

## 6月第3週のその他の注目トピック

### OpenAI: オープンソースセキュリティ支援プログラム

OpenAIがTrail of Bitsと提携し、**オープンソースプロジェクトの脆弱性発見・修正を支援する新プログラム**を開始した。AIを用いてOSSコミュニティのセキュリティ向上を図る試み。

### Groq: $650Mのシリーズ資金調達

AI推論チップメーカーのGroqが**$650Mを追加調達**。Nvidiaからの$20B「not-acqui-hire」 Deal後に再編し、neocloud事業に軸足を移す。

### Google DeepMind × A24: $75MのAI映像制作パートナーシップ

DeepMindがA24と提携し**AI映像制作ツール開発に$75Mを出資**。HollywoodにおけるAI活用の協業案例として注目される。

### SpaceX: Reflection AIに月$150Mの計算資源提供

Reflection AI（オープンソースAIラボ）が2026年7月から2029年にかけて**月$150MでSpaceXのColossus 2データセンター（Nvidia GB300チップ）にアクセス**する契約を締結。

### AIによる不動産Virtual Stagingの問題

The Vergeの別報道では、AI生成の公寓画像（Virtual Staging）が賃貸市場で泛滥している問題が指摘されている。実際の空間与她線が著しく異なるケースが频発し、借り手の期待と実態のギャップが纠纷を引起こしている。

---

## まとめ——「AIの人心的影響力」がもたらす開発者への問い

今週のニュースで最も注目すべきは、**AI説得能力の人間超え**という事実だ。開発者角度来看、この能力は以下を意味する:

- **プロンプト設計の重要性**: AIの説得力を高めるprompt engineeringが、应用領域で成否を分ける
- **セキュリティレビューの役割変化**: AI生成コードのセキュリティ監査が、より重要ながらも軽く見落とされやすくなる
- **RSIの現実味**: 再帰的自己改善AIの実現が近い将来視野に入る可能性
- **データセンター環境負荷**: 冷却効率を始めとしたインフラ最適化的課題

AIモデルが「コード生成」「情報検索」「意思決定支援」に留まらず「人心への渗透」まで可能になった今、開発者としてはAIの**出力の質と安全性を同時に担保する設計思想**が求められている。

---

## 参考リンク

- [AI systems out-persuade expert humans (arXiv 2606.16475)](https://arxiv.org/abs/2606.16475)
- [From AGI to ASI (Google DeepMind, arXiv 2606.12683)](https://arxiv.org/abs/2606.12683)
- [Import AI 462: Superpersuasion; self-sustaining AI; paths to ASI](https://jack-clark.net/2026/06/22/import-ai-462-superpersuasion-self-sustaining-ai-paths-to-asi/)
- [Read this before you vibe-code another app (The Verge)](https://www.theverge.com/ai-artificial-intelligence/950844/vibe-coding-security-risks-apps)
- [Nvidia says its AI data center design runs hotter to use a lot less water (The Verge)](https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling)
- [The Atlantic created a searchable database of the music used to train AI (The Verge)](https://www.theverge.com/ai-artificial-intelligence/953183/the-atlantic-searchable-database-music-ai-training-data)
- [OpenAI launches new initiative to help find and patch open source bugs (TechCrunch)](https://techcrunch.com/2026/06/22/openai-launches-new-initiative-to-help-find-and-patch-open-source-bugs/)
- [AI chipmaker Groq confirms $650M raise (TechCrunch)](https://techcrunch.com/2026/06/22/ai-chipmaker-groq-confirms-650m-raise-re-staffs-after-nvidias-20b-not-acqui-hire-deal/)
- [Google DeepMind bets $75M on AI's future in Hollywood with A24 deal (TechCrunch)](https://techcrunch.com/2026/06/22/google-deepmind-bets-75m-on-ais-future-in-hollywood-with-a24-deal/)
- [SpaceX inks compute deal with Reflection AI (TechCrunch)](https://techcrunch.com/2026/06/22/spacex-inks-compute-deal-with-reflection-ai-an-open-source-ai-lab/)
- [First Steps Toward Automated AI Research (Recursive)](https://www.recursive.com/articles/first-steps-toward-automated-ai-research)
- [How Long Until AI Doesn't Need Humans? (Asterisk Magazine)](https://asteriskmag.com/issues/14/how-long-until-ai-doesn-t-need-humans)

---

*（本文の情報は2026年6月23日時点のものです）*
