# EU、GoogleにAndroidと検索の開放を命令——DeepMindはAIが生み出す生物学的リスクへの対応策を発表

EUがGoogleに対して、Android端末と検索サービスにおける競合AIプラットフォームへの開放を義務づける裁定を下した。同じ週、Google DeepMindとIsomorphic Labsは фронiert AIの生物学的リスクへの対応长达なる「バイオリリエンス」プログラムの詳細を公表した。AIの安全性と実用性の境界線で動く2つの動きをまとめる。

---

## EU、GoogleにAndroidと検索データの開放を命令

欧州委員会は2026年7月16日、GoogleがEUのデジタル市場法（DMA）に違反しているとする最終裁定を発表した。裁定の対象は **Android端末** と **Google検索** の2領域だ。

### Android：Gemini以外のAIにも対等なアクセスを

現在、Android端末ではGoogleのGeminiがプリインストールされ、システムの深い部分へのアクセスで競合他社に先行している。裁定により、Googleは競合するAIアシスタントにも同じ 수준의システムアクセスを開放する必要がある。Googleはこれについて「ユーザーのプライバシーとセキュリティを危険にさらす」と主張したが、DMAの「ゲートキーパー」指定により法的には従属義務となる。

### 検索：سبوعなインデックス共有

検索サービス面では、競合する検索エンジンがGoogleのインデックスに十分にアクセスできないという苦情に対応した。裁定の詳細はまだ完全には公開されていないが、Googleが独占的な検索インデックスを競合と共有する方向で進むと見られる。

### 開発者への影響

この裁定が実際に生效すれば、Android上で動作するAIアシスタントのエコシステムが 크게変わる可能性がある。Google CloudやGemini APIに依存しない形でAI機能を端末に組み込む選択肢が広がり、開発者にとってはMulti-AI戦略の採用が現実的になる。

---

## DeepMindとIsomorphic、15以上のパートナーとバイオリリエンスプログラム

Google DeepMindとIsomorphic Labsは2026年7月16日、 frontier AIがもたらす生物学的リスクへの対応を目指す共同イニシアチブの進捗報告を公表した。開始から12个月で Lawrence Livermore国立研究所、英国AIセキュリティ研究所、CEPI、Francis Crick Institute など15以上の組織とのパートナーシップを構築している。

### 3本柱のプログラム

プログラムは3つの柱で構成される：

1. **悪用の防止（Prevent）**：どのアクターが最も危険かで威胁モデリングを実施。Expert red-teamingとランダム化対照試験を組み合わせ、Geminiが生物学的脅威のボトルネックを埋めるのに役立つかを評価する
2. **アウトブレイクの早期検出（Detect）**：メタゲノムシークエンシングを使い、既知の病原体リストではなくサンプル中の全微生物を特徴づける。コストが課題
3. **対応（Respond）**：アウトブレイクや攻撃発生時の対応体制構築

### 合成DNAスクリーニングの限界

報告の注目すべき点として、DNA合成スクリーニングの現状がある。現在、International Gene Synthesis Consortiumのメンバーは悪質な病原体・毒素のリスト照合と筛选アルゴリズムで注文をスクリーニングしているが、AIの進化により危険な病原体と配列が異なっても同等の機能を持つDNAを設計できるようになった。既存のリストベースの方法では対応できなくなりつつある。

DeepMindは画像・テキストの透かし技術 **SynthID** を生物学的配列に適用する研究を進めている。また、配列データベース既存のデータベースとの類似性ではなく配列の機能から毒性・病原性を予測する筛选技術の確立を「オープンな技術課題」として掲げている。

### 開発者視点での意義

この報告は、**AI安全性研究の現実的な進捗**を示すものとして注目に値する。DeepMindは「解決済み」とはしておらず、緩和策を継続的に改善するプロセスとして位置づけている。分類器が制御された評価で既知のジェイルブレイクパターンに対して-tunedでも=live使用でNovelな攻撃法に対して同等の性能を示すとは限らないしており、この誠実な姿勢が実運用での信頼性向上につながる。

---

## Linus Torvalds、「AIコーディングに反対ならforkしろ」

Linuxカーネルの創始者Linus Torvaldsは2026年7月15日、カーネルメーリングリストに投稿し、AIコードレビューAidツールの使用に対する批判に対して「Linuxは反AIプロジェクトではない。不同意ならforkするか、さもなくば離れろ」と表明した。

Torvaldsの発言は、`Sashiko`——自律的にLinuxカーネルのバグを検出できる「agentic」コードレビューシステム——をめぐる論争の中で飛び出した。Sashikoの開発者は、テストで人間のコミットで後から修正されるバグの53.6%を自律的に発見できると主張している。一方、誤検知でメンテナの時間を浪費するケースも報告されている。

Torvaldsは「素晴らしいツール」と「Sashikoを使うべき」という両論を受け入れつつも、ツールの品質向上は市場任せとし、カーネル開発におけるAIAid全般の使用を否定しない姿勢を示した。

---

## 参考リンク

- [It's official: EU will force Google to share search data and open up AI on Android (Ars Technica)](https://arstechnica.com/gadgets/2026/07/its-official-eu-will-force-google-to-share-search-data-and-o)
- [Linus Torvalds to critics of AI coding in Linux: "Fork it. Or just walk away." (Ars Technica)](https://arstechnica.com/ai/2026/07/linus-torvalds-to-critics-of-ai-coding-in-linux-fork-it-or-just-w)
- [Examining Google DeepMind's AI bioresilience push (AI News)](https://www.artificialintelligence-news.com/news/examining-google-deepmind-ai-bioresilience-push/)

---

*本文の情報は2026年7月16日時点のものです。*
