# AI開発ニュース・週間まとめ（2026年6月18日）

AI業界は米中のトップ企業間での人材争奪戦と、G7を舞台とした国際的なAIガバナンス框架の構築が加速する一週間となった。Google DeepMindからは住宅建設支援AIや気象予測の改良版が、またAI安全性への関心の高まりからコンシャスネス（意識）調査の動きも見える。本稿では本周的最佳ニュースを技術者的視点から整理する。

---

## AI人材動向：Noam Shazeer氏、GoogleからOpenAIへ

**Transformer**の共発明者であり、Google **Gemini**のリーダーを務めた**Noam Shazeer**氏がOpenAIに転籍したことが判明した。The Informationやeciks.orgなど複数のメディアが報じた。

Shazeer氏は2017年のTransformer論文（"Attention Is All You Need"）の共著者の一人で、GoogleではGeminiシリーズの基盤技術に大きく貢献してきた。OpenAIへの転出は、同社にとって重要な基礎研究者の獲得であり、米中のAI人材争奪加速を示す象徴的な出来事といえる。

技術的に注目すべき点として、Shazeer氏の専門は**大規模言語モデルの効率的スケーリング**と**推論最適化**にある。OpenAIの次期モデル開発において、競争力強化の戦略的判断と見るべきだろう。

---

## G7会場：AnthropicとGoogle DeepMindがAI連合を提唱

6月17日、G7タオルミーナ会議において**Anthropic CEO Dario Amodei**氏および**Google DeepMind CEO Demis Hassabis**氏が揃って発言し、米国主導の**国際AIガバナンス連合**の設立を求めた。

CEOたちは以下の3点を柱として提示した：

- **安全基準の国際的统一**：AI安全性評価の共通フレームワーク
- **合成DNAスクリーニング法案の成立**：AI生成によるBiological Risk（生物学的リスク）の防范
- **オープンソースAIガバナンス**：民主主義的価値観に基づくAI発展の共有

Trump米大統領もAnthropicとの交渉継続を表明しており、米国発のAI安全法治が具体化しつつある。

---

## Google DeepMind：住宅建設と気象予測で実社会適用を加速

### UK住宅建設AI

Google DeepMindは6月16日、**英国の住宅建設計画承認をAIで加速**するツールを发表了。従来数ヶ月かかっていた地方議会の計画審査を、AIが関連法令・過去の判例・環境データを综合的に分析し、承認建议を生成する仕組み。

英国政府は2024年以来的住宅不足対策の一環として、この技術の実証実験を開始しており、**計画審査プロセスの90日短縮**を目指す。

### 気象予測改良

DeepMindの気象予測AIも改良版が发布された。大型ハリケーンの軌道予測において、**従来比20%以上の精度向上**を達成、特に72時間以上の長期予測での改善が顕著という。Google DeepMindは「AIが気象科学の限界を押し広げつつある」と評している。

---

## MIT研究：LLM訓練効率を大幅に改善する新手法

MIT Newsが報じた新たな研究では、**LLM訓練効率を大幅に改善する手法**が発表された。详细内容への参加は今後の論文发布待ちだが、MITの研究チームは「同じ計算資源でより高性能なモデルが構築できる」と主張している。

訓練効率の改善は、スケーリング則（Scaling Law）の壁に直面しつつあるLLM業界にとって重要な突破口となる可能性がある。

---

## LLM信頼性評価：過信問題を検出する新手法

MITの研究チーム别報として、**LLMの過信（overconfidence）を検出する新しい評価手法**も公開されている。現在のLLMは、不确定な質問に対しても確信度高く不正确な回答を生成する「**過信問題**」が指摘されている。

この研究では、モデルの予測分布と実際の正解率の差分を体系的に測定するプロトコルが提案されており、**ベンチマークプラットフォームの信頼性向上**にも繋がると期待される。

---

## Google DeepMind、AGI後の世界を4つのシナリオで分析

Google DeepMindは公式ブログおよびMIT Technology Reviewへの寄稿で、**AGI（人工般知性）以降のAI発展パス**について4つのシナリオを提示した：

1. **漸進的飛躍モデル**：人間の制御下でAI能力が徐々に向上
2. **指数的加速モデル**：AIが自らの改良を可能にする「Intelligence Explosion」
3. **多元的分散モデル**：複数のASI（超知性）間の均衡状態
4. **収束モデル**：AIと人間の認知能力の融合

Demis Hassabis CEOは「**AGIは 하나의ドラマ的な跳躍では訪れない**」と caution しながらも、百万単位のAIエージェントが相互に相互作用する時代のリスク管理が必要と強調した。

---

## 参考リンク

- [Star Google AI Researcher Shazeer Joins OpenAI - The Information](https://www.theinformation.com)
- [CEOs of Anthropic and Google DeepMind call for U.S.-led AI coalition - CNBC](https://www.cnbc.com)
- [Google DeepMind maps four ways AI could outgrow humans - Yahoo Tech](https://tech.yahoo.com)
- [New method could increase LLM training efficiency - MIT News](https://news.mit.edu)
- [Hurricanes and AI: Forecasting takes a major step forward with Google DeepMind - Yahoo](https://www.yahoo.com)
- [Measuring Progress Towards AGI: A Cognitive Framework - blog.google](https://blog.google)

---

*本文の情報は2026年6月18日時点のものです。*
