# AI開発ニュース週間まとめ（2026年7月第2週）：ChatGPT Work衝撃発表、Apple対OpenAIの法廷闘争、メタのMuse Image撤回

2026年7月第2週、AI業界は急速な展開を見せている。OpenAIが新世代の業務自動化ツール「**ChatGPT Work**」を発表し、労働の未来を再定義する動きを加速させる一方、AppleがOpenAIを提訴するという予想外の法廷闘争が展開された。また、MetaがInstagramのAI画像生成機能「Muse Image」をユーザーからの強い反発を受けわずか数日で撤回する波乱もあった。本稿では今週の最重要AIニュースを、開発者視点で整理する。

---

## OpenAI、「ChatGPT Work」で業務自動化の次時代を宣言

OpenAIは7月9日、新ツール「**ChatGPT Work**」の正式リリースを発表した。このツールは、長時間実行可能な自律型ワークフローを実現可能にするとしており、従来の「Agent Mode」が数分で停止していたのに対し、「プロジェクトを数時間にわたって継続し、目標を最終成果物まで完遂する」ことを目指す。

### Scheduled Tasks：新世代のcron jobs

ChatGPT Workの核心的機能の一つが「**Scheduled Tasks**」である。これは強化されたcron jobs形式で、「繰り返しの多いタスクをスケジュールに基づいて自動実行」する。監視対象のイベントトリガーにも対応し、バックグラウンドで継続的に稼働する。

OpenAIは企業ユーザーに対して、「予算分析や営業ミーティングの準備など、自分がよく知っているタスク」をChatGPT Workに与え、その結果を評価するよう呼びかけている。ワークフロー例として、「顧客リサーチ →  кампанияブリーフ作成 → 地域最適化マーケティングアセット生成」という完全自動化のシナリオが紹介された。

重要ポイントとして、同社は「重要なアクションについてはユーザーの承認を待つ」という安全性を強調している。

---

## Apple、OpenAIを提訴——トレードシークレット巡る法廷闘争

7月10日、AppleがOpenAIを提訴した的消息がTechCrunchによって伝えられた。AppleはOpenAIの幹部が、長年の元従業員を通じてトレードシークレットを不正に取得したと主張しており、その行為は**OpenAIのシニアリーダーの指示**によるものとされている。

この訴訟は、AI業界における知的財産権の争いが激化していることを示す象徴的な事例である。AppleとOpenAIはかつてChatGPT統合でパートナーシップを組んでいた過去があり、その関係者が、今度は被告として法廷に向かっている構図は業界に波紋を広げている。

---

## Meta、「Muse Image」をわずか数日で撤回——デフォルトopt-inが問題に

Metaは7月9日（現地時間）、Instagramに導入したばかりの新AI画像生成機能「**Muse Image**」をユーザーからの強い反発を受け、わずか数日で撤回した。

### 問題の概要

Muse Imageは、Meta AIチャットボットからInstagramの公開アカウントのコンテンツをタグ付けし、AI生成・改変画像を素早く作成できる機能だった。最大の問題点は、**ユーザーがデフォルトでopt-in（参加同意）** になっていたことであり、公開アカウントを持つユーザーの肖像が、本人の知識や許可なしにAI生成画像に使用され得ることを意味していた。

SAG-AFTRA（ハリウッド組合）やPrivacy Internationalなどの団体から批判が殺到。Metaは「有用的なクリエイティブツールを提供し、人々が公共のコンテンツがこの方法で参照されるかどうかを制御できるようにするつもりだった」と説明するとしていたが、「的にを外した」という事実を認め、撤回に至った。

この一件は、AI製品における**デフォルトopt-inの危険性と、クリエイティブ産業におけるAI利用に関する法規制の必要性**を浮き彫りにした。

---

## AI医療の最前線：外科医が操作する人型ロボット、初めて生きた豚の手術に成功

UCサンディエゴの研究チームが7月9日、**人型ロボットを外科医が遠隔操作し、生きた豚の胆のう摘出術に成功した**という研究成果をNature誌に发表了。

### 技術的詳細

この研究では、2体の人型ロボットが外科医の命を遠隔操作により、最小侵襲手術（腹腔鏡下胆のう摘出術）を実施した。豚2頭在手势成功后，研究团队认为，此技術は「 special surgical robots」が設置されていない小さな病院やクリニックでの遠隔ロボット手術を可能にする突破口となる。

コスト：「費用がfraction（分数）で、手術室のスペースもfractionで済む」と研究チームは述べており、現在のda Vinciなどの外科用ロボットシステムが数百から数千万ドルするのに対し、大幅なコスト削減が見込める。

---

## OpenAI、NYT訴訟で「隠蔽」の濡れ衣——制裁を求める声

OpenAIは7月9日（現地時間）、The New York Timesを中心としたニュース機関との著作権訴訟で、「serious sanctions（厳重な制裁）」を求める声が上がっている。

### 裁判の争点

問題の核心は、OpenAIがChatGPTのログを検索できなかったという主張虚偽の был のだが、法院が命じた証人、OpenAIプライバシーエンジニアVincent Monacoの宣誓供述で、2年にわたる虚偽が露呈した。Monacoは「ログ検索のコストと負担」についてOpenAIが法院を二年もいいまaltaが、新型 cost ははるか低かったことがternaにより明らかになった。

この隠蔽工作の発覚は、OpenAIの訓練データ使用に関する防御戦略に致命的な打撃を与える可能性があるとされている。

---

## GPT-5.6、Microsoft 365 Copilotの優先モデルに

OpenAIは7月10日、**GPT-5.6がMicrosoft 365 Copilotの優先モデル**として採用されたことを発表した。OpenAIの公式ブログによると、GPT-5.6は「組織の野心に応じてスケールするフロンティアインテリジェンス」をコンセプトに、Microsoft 365環境での生産性向上を目的としている。

GPT-5.6は、Word、Excel、PowerPoint、TeamsなどのMicrosoft 365アプリに深く統合され、文書作成、データ分析、プレゼン資料自動生成などのタスクを支援する。

---

## 参考リンク

- [OpenAI launches ChatGPT Work (Ars Technica)](https://arstechnica.com/ai/2026/07/openai-wants-its-new-tool-to-do-your-work-for-you-and-with-you/)
- [Apple sues OpenAI over alleged trade secret theft (TechCrunch)](https://techcrunch.com/2026/07/10/apple-sues-openai-over-alleged-trade-secret-theft/)
- [Meta removes controversial AI feature on Instagram after backlash (TechCrunch)](https://techcrunch.com/2026/07/10/meta-removes-controversial-ai-feature-on-instagram-after-backlash/)
- [Humanoid robots controlled by surgeons world-first operation (Ars Technica)](https://arstechnica.com/ai/2026/07/humanoid-robots-controlled-by-surgeons-did-world-first-operation-on-live-pigs/)
- [OpenAI may have made a fatal misstep in copyright fight (Ars Technica)](https://arstechnica.com/tech-policy/2026/07/openai-faked-inability-to-search-training-data-hid-billions-of-logs-nyt-says/)
- [GPT-5.6 preferred model in Microsoft 365 Copilot (OpenAI Blog)](https://openai.com/index/gpt-5-6-preferred-model-microsoft-365-copilot)
- [Meta pulls new AI image feature after backlash (BBC)](https://www.bbc.co.uk/news/articles/c2dy6e8klw0o)

---

*（本文の情報は2026年7月13日時点のものです）*
