# 2026年7月第3週（7月15日）AI開発ニュースまとめ

OpenAIのキーボード発売、GPT-Redの公開、Thinking Machinesのオープンソースモデル発表など、2026年7月第3週はAI業界において複数の重要トピックが同時多発的に展開された。海外テック企業の攻防激化に加え、データセンター建設に対する規制動きも明らかになり、開発者視点での本周の重要ポイントを整理する。

---

## OpenAI、待望のキーボード「Codex Micro」を230ドルで発売

OpenAIは7月15日、待望の自社ハードウェアとして「Codex Micro」キーボードを230ドルで発売した。このキーボードは、同社のエージェント型コーディングアプリケーション「Codex」と連携して設計されており、複数のエージェントスレッドを一覧できるライトアップ機能を搭載している。

注目すべきは、この発売がAppleとの間に進行中のハードウェア企業秘密盗用訴訟のタイミングと重なることだ。OpenAIはAppleからの訴訟を蹴退けするのではなく、コード完結のワークフローを物理デバイスで補完する新しい試みとして市場投入した。Codex Microは開発者の桌上から離れずに複数のAIエージェントの状態を管理できる点が特徴で、エージェント型编程のワークフロー刷新に挑戦している。

---

## OpenAIが「GPT-Red」公开 —— AI安全対策の「超ハッカー」モデル

MIT Technology Reviewによると、OpenAIは「GPT-Red」と呼ばれる专門的なLLM超ハッカーを公开した。GPT-Redは、OpenAIの他のモデルがサイバー攻撃に対する防御を高めるためのスパーリングパートナーとして活用されている。

先週、发表されたOpenAIの主力LLM「GPT-5.6」において、GPT-Redを使ったトレーニングにより、同モデル史上最大の安全性能向上が実現されたことが明かされた。OpenAIによれば、GPT-Redは実際のハッキングシナリオで他のモデルを試すRed Team役として機能し、发现问题能力を継続的に改善している。

この動きは、AI安全に対するOpenAIのコミットメントの具体例であると同時に、攻击的なAIセキュリティ研究の裏返しとしても注目に値する。AIモデルの「攻撃能力」を磨くことが結果的に防御力の向上につながるというアプローチは、業界内で議論を呼んでいる。

---

## Thinking Machinesが最初期オープンソースモデル「Inkling」を発表

7月15日、Thinking Machines社は設立から1年半ぶりに最初の公開モデル「Inkling」をTechCrunch 통해发表了。Inklingは「一枚板AI」（one-size-fits-all AI）への批判に基づき、特定の用途に最適化された効率的な语言モデルとして注目されている。

Thinking Machinesは企业向けAIインフラの構築を主业としており、Inklingはその的第一弹となるオープンソースモデルだ。同社は公开情报限りでは具体的な技术仕様やベンチマーク数值を示していないが、Llama 4やMistralシリーズとの差別化として、トークン効率と推論速度に注力したとされている。

---

## Suno、YouTubeからの学習データ不正取得疑惑浮上

TechCrunchは7月15日、音楽生成AI「Suno」が従業員の認証情報を悪用してYouTubeから大量のオーディオデータをスクレイピングしていた可能性があると报じた。ハッカーはSuno従業員の认证情報にアクセスし、ソースコード分析により、同社が数十年分のオーディオ数据进行不正取得していたことを明らかにした。

この疑惑は、AI企業の学習データ出典問題に対する業界全体の注目を高める而起こっている。Sunoは現在まで公式声明を出していないが、YouTubeの利用規約上では同種のスクレイピングは明確に禁止されており、Googleが法的措置に出る可能性も取り沙汰されている。

---

## Microsoft、570件の脆弱性をAI活用で一括パッチ —— 過去最多

Microsoftは7月の月次セキュリティ更新（Patch Tuesday）において、史上最多の570件のセキュリティ脆弱性を修正したと发表した。同社は这次的記録的多さの一因として、社内のAI活用を挙げている。

Microsoftのセキュリティチームは、AIモデルを使って脆弱性の自動検出と優先順位付けを実施することで、従来よりも大幅な数の問題を短期间に特定できたという。同社はさらに、AIを活用した自動コード修正功能の一部も公开しており、检测と修正のライフサイクル短縮を進めている。

本周另外には、MicrosoftのSecure Bootが过去10年间にわたり危険な状态だったことも明らかになった。 同社はこの问题についてまだ完全には対応しておらず、 Secure Boot绕越しの古い「shim」を失効させなかった失误が十年近くにわたり放置されてきた。

---

## ニューヨーク州、データセンター建設を1年間停止 —— 全米初

7月14日、ニューヨーク州はAI業界にとって大きな衝撃となるデータセンター мораторий（データセンター建設 мораторий）を发表し、即时生效した。この措置は全米初となり、数据不通への依存性问题に対する世論の高まりを反映している。

同州の判断は、AI企業の電力消費が増大し続ける中で、电力インフラへの負荷増大と環境問題への忧虑が念頭にあり、業界からは「AI排斥の始まり」を心配する声もある。ただし、同措置は単なる反AI感情だけでなく、データセンター立地に関する包括的な政策の見直しとしての一面もある。

---

## Anthropic-backed「Ode」—— 企業AI実装のTrillion Dollar市場への赌け

AnthropicとBlackstone、Goldman Sachsなどが総額10億ドル以上を出資し、企業向けのAI実装特化型企业「Ode」が正式启动した。同社は企业内にAIエンジニアを先行配置し、AIシステムの导入・運用を代行する「Forward Deployed Engineer」モデルを推广している。

従来のコンサルティング会社に比べて、少数のエンジニアで大規模企业的な果を出せるのかが今後の焦点となる。OdeはAnthropicのClaudeを基盤としたAI生態系と組み合わされており、企業内でのAI採用加速を目指すとしている。

---

## 参考リンク

- [OpenAI Codex Keyboard - TechCrunch](https://techcrunch.com/2026/07/15/amid-hardware-legal-battle-openai-releases-a-230-keyboard-for-codex/)
- [GPT-Red - MIT Technology Review](https://www.technologyreview.com/2026/07/15/1140514/meet-gpt-red-an-llm-super-hacker-openai-built-to-make-its-models-safer/)
- [Thinking Machines Inkling - TechCrunch](https://techcrunch.com/2026/07/15/thinking-machines-amps-up-its-bet-against-one-size-fits-all-ai-with-its-first-open-model-inkling/)
- [Suno YouTube Scraping - TechCrunch](https://techcrunch.com/2026/07/15/hack-suggests-ai-music-generator-suno-scraped-youtube-for-training-data/)
- [Microsoft Security Patches - TechCrunch](https://techcrunch.com/2026/07/15/microsoft-patches-record-number-of-security-vulnerabilities-citing-its-use-of-ai/)
- [NY Data Center Moratorium - Ars Technica](https://arstechnica.com/tech-policy/2026/07/new-york-is-the-first-state-to-impose-a-data-center-moratorium/)
- [Anthropic Ode - TechCrunch](https://techcrunch.com/2026/07/15/anthropic-blackstone-bet-the-next-trillion-dollar-ai-business-is-implementation-not-models/)

---

*（本文の情報は2026年7月16日時点のものです）*
