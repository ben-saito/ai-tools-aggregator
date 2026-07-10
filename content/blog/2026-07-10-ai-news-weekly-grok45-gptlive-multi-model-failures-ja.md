# SpaceXがGrok 4.5を発売、OpenAIはGPT-Liveを開始——AI業界沸騰

AI業界で今週、Developer視点を揺るがす動きが2件同時に到着した。SpaceXがGrok 4.5を発売し、OpenAIがGPT-Liveの声をアップグレード版を開始。两个Announcementは、価格、入出力アーキテクチャ、企業向けの採用障壁を変える可能性を秘めている。

---

## Grok 4.5：Cursor買収の成果、价格優位でClaude/OpenAIに挑む

Elon MuskのSpaceXは7月8日（水）、同社が初めて**codingと自律エージェント专用に訓練したAIモデル**「Grok 4.5」を発売した。約600億ドル（約9兆円）でAIコーディングスタートアップのCursorを買収して以来、最初の本格的な成果だ。

### 价格優位：タスク完了コストが90%安い

SpaceXはGrok 4.5についてBenchmarksでは最高ではないが、**経済的な議論**を展開している。同社は、Grok 4.5が競合他社と比較して半分のトークンでタスクを完了させ、throughputが高く、コストは**入力トークン100万個あたり2ドル、出力トークン100万個あたり6ドル**——AnthropicのClaude OpusシリーズやOpenAIのフラッグシップモデルを大幅に下回ると主張する。

Independent評価会社のArtificial Analysisによると、Grok 4.5は**GDPval-AA v2指数で4位**（Eloスコア1543）、タスク完了あたりコストは**0.49ドル**で「Leaderboard上位のモデルより90%安い」。同社は「パフォーマンス対コストのパレート最適トレンドにいる」と評価した。

Musk本人はXに「Grok 4.5は概ねOpus 4.7に匹敵するが、より高速だ。知性、速度、低コストの組み合わせが競争力を生む。Benchmarksではなく、実用性が重要だ」と投稿した。

### Cursor買収が訓練に与えた影響

Grok 4.5は、SpaceXがCursorを買収した際に舞い込んだ**大量の高品質なインタラクションデータ**の力を借りている。CursorのAIファーストコードエディタは、Expertエンジニアが本番環境でコードを書き、編集、レビュー、デバッグする姿を大量に生み出す。MuskはCursorのインタラクションデータが「直接Grokの訓練にフィードされている」と公言していた。

CursorはSpaceXのColossus超級コンピュータ（約20万個のNVIDIA GPUを使用）にアクセスできるようになり、「計算能力のボトルネック」にあった状態から脱した。Cursorの公式アカウントは「SpaceXAIと提携してGrok 4.5を訓練した。それはソフトウェアエンジニアリング以上のために構築された最も強力なモデルだ」と投稿した。

---

## GPT-Live：フル duplexボイスでChatGPTが「話している間も聴く」

OpenAIは7月8日（水）、ChatGPTのボイス技術を一新する**GPT-Live**を発売した。2つのモデル（GPT-Live-1とGPT-Live-1 mini）からなり、iOS、Android、ChatGPT.comでグローバルにロールアウト中。GPT-Live-1はGo、Plus、Pro tiersの有料ユーザーがデフォルトで使い、GPT-Live-1 miniは免费層向け。API公開も予定されている。

### フル duplexアーキテクチャ：電話の同時通話のように

GPT-Liveの決定的な技術的進歩は**「フル duplexアーキテクチャ」**だ。通信でフル duplexとは、電話の両者が同時に話し聆听けることを意味する。AIに適用すると、モデルは自身の出力を生成しながらも継続的に入力オーディオを処理できる——相手がまだ話し終えていないにでも応答できる。

OpenAIのブログによると、「GPT-Liveは入力を連続的に処理しながら出力を生成する。モデルは毎秒何度もインタラクションの決定ができる——しゃべるべきか、聞き続けるべきか、一旦休止するか、干渉するか、ツールを呼び出すか」と解説する。

それにより、AIは相手の話の最中に「うん」「そう」「了解」などの相槌を打て、パフォーマンス демонстрацияでは「walkie-talkie的な話のやり取り」が終わり、より自然な会話が実現する。

### ボイスと知性の分離：バックグラウンドでGPT-5.5が動く

GPT-Live導入の2番目の構造的変化は、**ボイスインタラクション層と推論層の分離**だ。

簡単な質問にはGPT-Liveが直接対応。より複雑な推論やweb検索が必要なら、GPT-Liveはバックグラウンドで別のフラッグシップモデル（現在は4月に発売されたGPT-5.5）に委任しながら、ユーザーとの会話を継続できる。

これはMODULAR設計であり、OpenAIは知性をアップグレードしてもボイスモデルをRETRAINする必要がない。企業にとってこれは、顧客と自然に話しながら、同時にデータベース検索、web検索、複雑な推論を実行できるボイスエージェントを構築できるという意味だ。

---

## マルチモデル構成の失敗率：企業は2.25倍過小評価

另一方面、重要な研究报告が本周明らかにしたのは、複数のAIモデルを組み合わせて使う企業が**失敗率を大幅に過小評価している**という事実だ。

### Co-failure天井：どのモデルも同時に間違う

21のプロバイダーから67のフラッグシップモデルを評価した新しい研究によると、企業が信じていた「モデルの多様化すれば互いの弱点をカバーできる」という仮定は**数学的に欠陥がある**。

この仮定は「pairwise error correlation」（どの程度モデルが別のプロンプトで間違うか）に基づく。例えば、Model AがPythonに強くSQLに弱く、Model BがSQLに強くPythonに弱い場合、両者の錯誤相関は低い。だから路由層の前で組み合わせれば、ずっと失敗しない複合システムが建成できると開発者は考える。

しかし研究によると、**能力の異なるモデルを無造作に組み合わせると、むしろパフォーマンスが低下する**場合がある。「単純な多数投票は負の平均値をもたらした（難しいテストで-10ポイント）。多様だが弱いメンバーが強いものを圧倒する」（論文の著者Josef Chen氏）。

真の限界は「co-failure rate」——すべてのモデルが同時に間違うプロンプトの割合にある。67モデルプール（GPT-5.5、Claude Opus 4.8、Gemini 3.1 Proを含む）をMATH-500数学ベンチマークでテストすると、pairwise相関に基づく統計モデルが「2.3%の問題でしか全モデルが同時に失敗しない」と予測したのに対し、実際のco-failure率は**5.2%**だった。

標準的な相関メトリクスは失敗率を約**2.25倍過小評価**していた。理由は「共有失敗点」——「市場全体が同時に間違う一揃いのクエリ」が 있으며、どのpairwise統計でも見分けられないという。

### 開発者への示唆

- **同じ品質帯のモデルのみを組み合わせる**。品質が一致しないなら、単一モデルのベストバージョンを使用し、予算を最高の単一モデルに振り向ける
- **20番目のモデルを足してもtail coverageは得られない**。Tailは共有されている
- **多様で高品質なモデルは、低相関のSelf-MoAセットアップより優位**

---

## 参考リンク

- [SpaceX's Grok 4.5 launches at half the price of rivals (VentureBeat)](https://venturebeat.com/ai/spacexs-grok-4-5-launches-at-half-the-price-of-rivals-heres-why-that-could-rattle-anthropic-and-openai/)
- [OpenAI launches GPT-Live (VentureBeat)](https://venturebeat.com/ai/openai-launches-gpt-live-a-full-duplex-voice-upgrade-that-lets-chatgpt-talk-more-like-a-person/)
- [Enterprises using multiple AI models are underestimating failure rates by 2.25x (VentureBeat)](https://venturebeat.com/ai/enterprises-using-multiple-ai-models-are-underestimating-failure-rates-by-2-25x/)

---

*本文の情報は2026年7月10日時点のものです。*
