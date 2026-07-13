# AI開発ニュース（2026年7月第2週）：CloudflareがAIエージェントクローラーを規制、AppleとOpenAIの法廷闘争

2026年7月13日時点で厳選されたAI開発ニュースをお送りする。今週は**Cloudflare**によるAIエージェントクローラーへの新たなアクセス制御、**Apple**と**OpenAI**間の機密情報流出疑惑を巡る訴訟、そして**Microsoft CEO Satya Nadella**氏によるAI活用企業への警告という3本が主な話題だ。

---

## Cloudflare、AIエージェントクローラーの新規則を発表——広告ページは2026年9月からブロック対象

**Cloudflare**は2026年7月1日、AIエージェントクローラーに対する新たな3段階のアクセス制御カテゴリを全ユーザーに公開した。今後は**Search**（検索索引用）、**Agent**（リアルタイムユーザー代理用）、**Training**（モデル学習用）の3つに分類され、2026年9月15日から広告掲載ページでは**Agent**と**Training**がデフォルトでブロックされる。

### なぜ今この変更か

CloudflareのCEO **Matthew Prince**氏によれば、「広告が表示されているページは人間のために作成された証拠」であり、検索クローラーが読者を連れてくるのは参照だが、ページをfetchして誰かに回答を返すクローラーはそうではない、というものだ。

現在のエージェント型AI展開は「オープンブログに表示」という前提の上に構築されている。研究エージェントが競合の料金ページをfetchしたり、カスタマーサービスエージェントがメーカーの仕様シートをpullしたりすることが主流だが、これらの用途はこれまでライセンスを必要としなかった。

### 開発者への影響

この変更は**LangChain**、**AutoGPT**、**Claude Agent**、**ChatGPT fetch bot**などのリアルタイムAIエージェントを活用する開発者に直接的な影響を与える。対応が必要な開発者は以下のパターンだ：

- **WebsitesからデータをpullするAIエージェント**を構築している場合は、publishersから明示的な許可を得る必要がある
- **CloudflareをCDNとしているサイト**を相手にする場合、2026年9月15日以降デフォルトでブロックされる可能性がある
- Cloudflareの**「Pay Per Use」プラン**を利用すると、コンテンツ所有者とのライセンス契約なしにクローリングを継続できる可能性がある

### 技術的な深掘り

Cloudflareの新しい制御は以下のフローで動作する：

1. **Searchカテゴリ**：検索索引用。ユーザーはページを訪問し、後で質問への回答に使用する。到着したユーザーが直接ページを読むため、許可不要（広告ページでもOK）
2. **Agentカテゴリ**：リアルタイムでユーザーの代わりにページをfetchするbot。ChatGPTのfetch bot、ブラウザ駆動型エージェントなど。広告ページではデフォルトブロック
3. **Trainingカテゴリ**：モデルを学習させるためにコンテンツをpullするbot。デフォルトでブロック

開発者にとって重要な点は、自分のエージェントがどのカテゴリに分類されるかを事前に確認し、必要に応じて**Cloudflareのセキュリティ設定からopt-out**を行うか、コンテンツ所有者とのライセンス契約を結んだほうがいい。

---

## Apple、元従業員を提訴——OpenAIへの転職後に機密ファイルを不正ダウンロード

**Apple**は2026年7月13日、Appleを退職後に**OpenAI**へ転職した元従業員が、Appleのネットワークから機密ファイルを不正にダウンロードしていたとして提訴した。この訴訟はAppleのTrade Secrets Act違反および不正競争防止法違反を主張している。

### 訴訟の主な主張

Apple側の主張は以下の通り：

- 元従業員はApple退職後にOpenAIへ入社
- 退職前に「稀なバグ」を悪用し、Appleのネットワークから機密ファイルをダウンロード
- Appleは「セキュリティ侵害が発生した」ことを認めたが、詳細についてはコメントを避けた

### もう一つの注目ポイント：OpenAIの主張

TechCrunchの別報道によれば、Appleは**OpenAIに対する別件の訴訟**も起こしているこちらでは、より興味深い主張が含まれている：

- Appleの従業員が無断でAppleのシステムにアクセスしていたという冗談めかしたやり取りが社内であった
- 採用候補者にAppleのハードウェアを面接に持ち込むよう求めた
- OpenAIがAppleの機密情報を不正に入手しようとした疑い

### 開発者視点からの教訓

この訴訟は**企業のAI人材引き抜きと機密情報管理**の問題を浮き彫りにした。技術企業にとって重要な点は：

- 従業員の退職時における**データアクセス権限の迅速な剥奪**プロセス
- 競合他社への転職前に機密データへのアクセスを一時的に制限する必要性
- AI企業間での**人材獲得競争に伴う情報漏洩リスク**の高まり

---

## Satya Nadella氏、AI活用企業へ警告——「プロプライエタリモデルの信頼性问题」

**Microsoft CEO Satya Nadella**氏水が、2026年7月13日にMicrosoft BUILDでAIに関する衝撃的な警告を発した。*Nadella*氏によれば、大きなAIラボが提供するプロプライエタリモデルが「**Trojan Horse（トロイの木馬）**」のように動作している危険性があると指摘。企業らがAI導入に先立ち果たしていくことを確認していないことを示唆した。

### 警告の詳細

Nadella CEOの言葉は、Silicon ValleyのAI愛好家たちの間で最も議論を呼んでいる「AIの潜在的なデメリット」の一つ——大手AIラボがプロプライエタリモデルを提供する際に、実際にはなにをしているのかわからない——に対するものだ。

### Sam Altmanとの口論

Elon MuskがSam Altman氏を「詐欺師」と非難したことに対し、Altman CEOは「homeboy you're the one selling public market investors on short-term space datacenters」と返答。Nadella CEOの警告は、このAI企業間の舌戦とも無関係ではないと見られている。

### 技術的背景

この警告の裏には、以下のような技術的論点がある：

- **プロプライエタリモデルのブラックボックス性**：基盤となるモデルが実際には何を学習し、どこにデータを送っているかが不明
- **データ主権の問題**：企業の敏感なデータがプロプライエタリモデルの訓練に含まれる可能性
- **監査の困難性**：外部のAIラボのモデル請求書を検証する手段が限られている

Microsoftは**Azure OpenAI Service**を通じてOpenAIモデルのを提供しているが、Nadella CEOの発言はAzure顧客にも警告を与えた可能性がある。

---

## AI薬開発、最前線——Insilico MedicineがIPF治療薬をPhase III試験に進め、Takedaと$600Mの大型契約

補足として、**Insilico Medicine**が、AIを用いて発見された特発性肺線維症（IPF）治療薬をついに**Phase III試験**に進めた。同社は**Takeda**との間で$600M（約90億円）のAI創薬契約も締結しており、AIドラッグディスカバリーの商業化が加速している。

**AWS GraphRAG**を採用することで、創薬サイクルを**87%短縮**した実績もあるという。

---

## 参考リンク

- [Cloudflare、AIエージェントクロールの新ルール（AI News）](https://www.artificialintelligence-news.com/news/ai-agent-crawlers-cloudflare-rules/)
- [Apple、元従業員を提訴（TechCrunch）](https://techcrunch.com/2026/07/13/apple-says-former-employee-exploited-rare-bug-to-download-confidential-files-after-leaving-for-openai/)
- [AppleのOpenAIに対する訴訟（TechCrunch）](https://techcrunch.com/2026/07/13/the-wildest-allegations-in-apples-trade-secrets-lawsuit-against-openai/)
- [Satya Nadellaの警告（TechCrunch）](https://techcrunch.com/2026/07/13/satya-nadella-has-issued-a-shocking-warning-to-companies-using-ai/)
- [Insilico Medicine、IPF治療薬をPhase IIIに進める（AI News）](https://www.artificialintelligence-news.com/news/insilico-medicine-advances-ai-drug-for-ipf-to-phase-iii-trials/)
- [TakedaとInsilicoの$600M契約（AI News）](https://www.artificialintelligence-news.com/news/takeda-insilico-ai-drug-discovery-deal/)
- [AWS GraphRAGで創薬サイクル87%短縮（AI News）](https://www.artificialintelligence-news.com/news/aws-graphrag-deployment-cuts-drug-research-cycles-by-87/)

---

*（本文の情報は2026年7月13日時点のものです）*
