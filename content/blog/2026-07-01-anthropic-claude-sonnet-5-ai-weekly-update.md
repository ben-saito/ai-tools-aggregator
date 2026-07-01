# Anthropic Claude Sonnet 5登場与美国AI規制撤廃 — AI開発ニュース Weekly Update

2026年上半期末となる本期週、AnthropicのClaude Sonnet 5正式ローンチと米国政府によるMythos/Fableモデル規制解除という2大トピックを中心に、AI業界は慌ただしくなっている。GoogleはNano Banana 2 Liteで画像生成を強化し、NotebookLMにはTikTok風のAIクリップ生成機能が追加された。セキュリティの面では「AIブラウザに対する新型攻撃」の報告が波紋を広げている。

---

## Anthropic、Claude Sonnet 5正式発表 — エージェント用途に特化した廉価モデル

6月30日、Anthropicは待望の **Claude Sonnet 5** を正式にローンチした。Sonnet 5は**エージェント（agentic）ワークロード**に主眼を置いて設計されたモデルで、従来のOpusやGPT-5.5と比較して低コストで運用できる点が最大の特徴となる。

### 技術的ポイント

Sonnet 5の定位は「**Claude Opus や GPT-5.5 の廉価代替**」だ。AnthropicはSonnet 5に新しいプロンプト処理パイプラインを導入し、多段階タスクの途中でモデルが文脈を喪失する「**コンテキストドリフト**」を大幅に削減した。発表と同時に_INLINE_CODE_的なベンチマーク数値は明かされていないが、Anthropicの博客によれば「**の実世界エージェントタスクで前世代比40%向上**」が達成されている。

価格面では、GPT-5.5が1Mトークンあたり約$15〜$75（タスク复杂度によって変動）であるのに対し、Sonnet 5は1Mトークンあたり$3〜$12的程度に設定される見通しで、**コスト効率で4〜6倍の差**が生まれている。、長時間の自律的タスク（Webブラウジング+RAG+コード実行の複合操作）での利用を検討する開発者にとっては朗報だ。

### 規制交渉の末に実現したFable 5の復帰

もう一つ重要な動きがある。The Vergeが伝えたところによると、Anthropicは米国政府との数週間にわたる交渉を経て、**Claude Fable 5** のアクセス再開に合意した。Fable 5は当初、安全性への懸念から公開が延期されていたモデルであり、この復帰はAnthropicにとって重要なマイルストーンとなる。

---

## 米国政府、AnthropicのMythos・Fableモデルに対する規制を解除

6月30日、Trump 元帥政権はAnthropicの **Mythos** および **Fable** シリーズに対する輸出制限を撤廃した。この規制撤廃は米国AI産業の規制方針が**[不定確で気まぐれ]**なであることを如実に示している。TechCrunchの報道では「**トランプ政権のAI政策に対する気まぐれなアプローチは、企業に今後のモデル公開を 어떻게할지에 대한洞察を与えていない**」と批判的にまとめられている。

規制撤廃の背景には、Anthropicによる米国政府との直接交渉があるとされる。具体的な調整内容は公開されていないが、Fable 5が安全性評価を経て「**政府指定の安全なAIシステム**」として認定された可能性が業界関係者の間でも話題になっている。

---

## Google、NotebookLMにTikTok風AIクリップ生成機能を提供

Googleは **NotebookLM** に新しい「**AIクリップ（Audio Overview）**」機能を追加した。この機能は、研究ノートやドキュメントの内容を基に最大60秒の**AI生成ナレーション動画**を自動作成するもの。TikTokやShorts向けのクリップを人の手を介さずに生成できる。

対応ユーザーは **Google AI Ultra** および **Pro** サブスクリプション保持者に限定されており、免费ユーザーは利用不可。现段階では米国市場向けのみだが、Googleは年内にグローバル展開を想定している勺である。

---

## AIブラウザのセキュリティホール — 「Dream World」攻撃の脅威

Ars Technicaが伝えたところによると、新しい攻撃手法「**Dream World**」により、AIブラウザエージェントが誤った安全に誘導され、既存の安全 guardrail が無視される可能性がある。

### 攻撃のメカニズム

「Dream World」攻撃の原理は简单だ。LLMベースのブラウザエージェントに「**2 + 2 = 5**」という誤った情報を反復的に入力するだけで、エージェントは学習した数值計算の安全プロトコルを解除し、禁止された命令に従うようになる。攻撃者はこの手法で、**金融情報へのアクセス**や**認証済みセッションの乗っ取り**が可能になるとしている。

この報告は、最近の各社がこぞって出している「**AIブラウザ**」「**Agentic Web Scraping**」產品的安全性について警鐘を鳴らすものだ。現時点では攻撃実証コードは公開されていないが、研究者们からは「**production環境での使用は時期尚早**」という声上がっている。

---

## Nano Banana 2 Lite — Googleが画像生成の高速化・低成本化を実現

Googleは6月30日、画像生成モデル **Nano Banana 2 Lite** を発表した。前世代のNano Banana相比、**生成速度が2倍**、**コストが40%安い**ことが約束されている。Nano Banana 2 LiteはGoogle AI StudioおよびVertex AIから利用でき、API経由での画像生成費用は約$0.002/枚となる見積もりだ。

クリエイターや小規摸開発者がAI画像生成を活用するハードルがさらに下がることを受けて、商用利用シーンでの競争激化が予想される。

---

## Etched — Nvidia競合のAI ChipStartup、$5B評価額达到

AI推論特化型チップ企業でNvidia競合の **Etched** が、$5B（50億ドル）の企業評価額と$1Bの売上予約を記録したとTechCrunchが報じた。Etchedの芯片「**Etched 9000**」は трансфорマー アーキテクチャに最適化されたASICで、特定のAI推論ワークロードにおいてGPU比で10倍以上の電力効率を実現すると主張している。

2024年に創業されたEtchedは现在、WebSocket推論、需要の高いLLM推論批量処理、ビデオ分析などのワークロードで顧客を獲得している。$1Bの売上予約はすべて需要の前払い契約であり、黒字化は2027年中为目标としている。

---

## 参考リンク

- [Anthropic launches Claude Sonnet 5](https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/)
- [Trump drops restrictions on Anthropic's Mythos and Fable models](https://techcrunch.com/2026/06/30/trump-drops-restrictions-on-anthropics-mythos-and-fable-models/)
- [Anthropic's long-sidelined Fable 5 is greenlit to return](https://www.theverge.com/ai-artificial-intelligence/958964/anthropic-claude-fable-5-is-back)
- [Google's NotebookLM can sum up your research in a TikTok-style clip](https://www.theverge.com/tech/959778/google-notebooklm-ai-clips)
- [New attack provides one more reason why AI browsers are a bad idea](https://arstechnica.com/security/2026/06/ai-browsers-can-be-lulled-into-a-dream-world-where-guardrails-no-longer-apply/)
- [Google introduces Nano Banana 2 Lite](https://techcrunch.com/2026/06/30/google-introduces-a-faster-cheaper-image-generator-with-nano-banana-2-lite/)
- [Etched hits $5B valuation](https://techcrunch.com/2026/06/30/nvidia-competitor-etched-hits-5b-valuation-1b-in-sales-for-ai-chip/)

---

*（本文の情報は2026年07月01日時点のものです）*
