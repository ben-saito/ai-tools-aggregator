# Google、Gemini 3.6 Flashを発表 —— エージェントAIのトークンコスト削減を狙う

Google DeepMindは7月21日、Geminiシリーズの新モデル3兄弟を一挙にリリースした。**Gemini 3.6 Flash**、**Gemini 3.5 Flash-Lite**、**Gemini 3.5 Flash Cyber**の3モデルだ。注目点是間話題になっていた「Gemini 3.5 Pro」が姿を消したことで、GoogleのAI戦略に疑問符が付いている。

---

## 3モデルの違いと位置づけ

3モデルのうち主力となるのは **Gemini 3.6 Flash**。Googleはこれを「高速かつ低コストな推論モデル」として位置づけている。ベンチマークでは前世代の3.5 Flashと比較して推論速度が向上し、トークンあたりのコストも抑制されたという。

**Gemini 3.5 Flash-Lite**はさらに軽量化したモデルで、シンプルなRAG（Retrieval-Augmented Generation）パイプラインやチャットボットなど、深い推論が不要なタスク向け。**Gemini 3.5 Flash Cyber**はサイバーセキュリティ特化のモデルで、脅威インテリジェンスやコード解析などのタスクに最適化するよう調整されている。

3モデル 모두JSON出力や構造化推論に対応しており、**AIエージェント**のツール呼び出しパイプラインへの組み込みを前提とした設計となっている。

---

## エージェントAIの経済性：トークンコストが主戦場に

今回のリリースで特に注目すべきは、**エージェントAI（autonomous AI agents）** の運用コストに対するGoogleの明確な戦略転換だ。

自律型エージェントを本番環境に導入する場合、モデルに求められるのは単なる精度ではない。複雑なタスクを多段階で推理しながら実行する間、モデルが生み出すすべてのトークンがコストと遅延に直結する。1時間あたり数千回も走るワークフローでは、1トークンの節約が巨大なコスト削減につながる。

Gemini 3.6 Flashは、この「**トークン経済性（token economics）**」を最主要の設計目標に据えた。API料金表はまだ未公表だが、Googleは「Flash-Lite系列で業界最安水準のコストを実現できた」と主張している。

---

## Gemini 3.5 Pro不在の真相

一方、間待ち望まれた **Gemini 3.5 Pro** の気配はない。Googleは同日、「3.5 Proは引き続きテスト中」と简短に述べたのみで、詳細なスケジュールは明かされなかった。

この缺席は、GoogleのAIロードマップに対する市場の信頼を揺るがしている。TechCrunchの報道によれば、Gemini 3.5 Proの開発で壁に直面している可能性があり、特に長文脈コンテキストウィンドウ（long context window）のスケールアップに技術的課題残っているという見方がある。

Googleは同時に **Gemini 4** のトレーニングも進行中であることを明かしており、3.5 Proの不在は当面続く可能性が高い。

---

## 米国、中国のオープンソースAIモデルに制裁警告

同日、米国のNVIDIA政策も揺れ動いている。TechCrunchの報道 따르면、StevenMnuchin財務長官（Scott Bessent）は7月21日、中国のオープンソースAIモデルに対する制裁の可能性を示唆した。内容は以下の通り。

- 中国のオープンソースAIモデルが米国の知的財産を不正流用している可能性
- 制裁対象は特定企業の特定モデルではなく、「クラス全体」への広域指定を検討
- 対象にはAlibaba（通義千問）、ByteDance（Doubao）などのモデルが含まれる可能性

この動きは、トランプ大統領の「中国AI発展を遅延させる」施策を継承するものだが、**オープンソースモデルの制裁は技術的に実施困難**との指摘もある。コードが一度ネットに公開されると、制裁の実効性は限定的だからだ。

---

## Anthropic、15億ドルの著作権和解が承認

AI著作権問題の另一の動きとして、**Anthropicの15億ドル和解案**が今週 federally approved となった。

和解の背景にあるのは、米国の裁判所の判断：「本の版权归属的训练はフェアユースにあたるが、海賊版サイトの利用は異なる」。Anthropicは2023年時点でBooks3などの海賊版数据集でClaudeを訓練していたとして、著者側から集団訴訟を起こされていた。

今回の和解では1作品あたり推定3,000ドルの補償だが、350人の著者がこの和解不接受，试图另行訴訟を起こした。しかし、判事はこの/opt-out申請を却下し、和解を最終承認した。

和解金15億ドルはAI業界では过去最大規模の著作権和解금となる。

---

## データセンター、2035年に電力使用量が4倍に

Googleのリリースと合わせ、BloombergNEFの新しい試算も話題を集めている。AI計算需要の急増により、**米国のデータセンターは2035年までに現在比4倍の電力を消費する**可能性があるという。

現在データセンターは米国の発電量の約5%を使用しているが、2035年には20%に達すると予測される。これは現在のインド全体の電力消費量に匹敵する規模だ。

この試算は、Google、Microsoft、AmazonがAIインフラに巨额な投資を行う中、**AIの発展がエネルギー問題と密接に絡み合っている**ことを示している。

---

## まとめ

7月21日はAI業界にとって重要な一日だった。Googleは低成本・高速度なエージェントAI向けモデルでMicrosoft/OpenAIとの競争を激しくし、同時に中国政府系AIモデルへの制裁警告で、政策面の緊張も.Assertion。接下来 Gemini 3.5 Pro の動向、そして Gemini 4 の登場が待つ。

---

## 参考リンク

- [Google releases three new Gemini models — but no 3.5 Pro (TechCrunch)](https://techcrunch.com/2026/07/21/google-releases-three-new-gemini-models-but-no-3-5-pro/)
- [Google's Gemini 3.6 Flash targets enterprise agent token costs (AI News)](https://www.artificialintelligence-news.com/news/googles-gemini-3-6-flash-targets-enterprise-agent-token-costs/)
- [US threatens sanctions against Chinese AI models over IP theft (TechCrunch)](https://techcrunch.com/2026/07/21/us-threatens-sanctions-against-chinese-ai-models-over-ip-theft/)
- [Anthropic's $1.5B copyright settlement approved (Ars Technica)](https://arstechnica.com/tech-policy/2026/07/judge-approves-anthropics-1-5-billion-copyright-settlement-with-authors/)
- [Data centers expected to use 4x more electricity by 2035 (TechCrunch)](https://techcrunch.com/2026/07/21/data-centers-expected-to-use-4x-more-electricity-by-2035/)

---

*（本文の情報は2026年7月21日時点のものです）*
