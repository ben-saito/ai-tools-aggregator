# 中国AIモデルの台頭とChatGPTログ証拠問題——AI開発ニュース（2026年6月第4週後半）

2026年6月第4週のAI開発ニュースでは、米中AI規制の綱引きと生成AIの法廷への進出という2つの大きなテーマが浮かび上がった。AnthropicのMythos輸出禁止が長期化する中、中国のAIスタートアップが「Mythos相当」をうたうモデルを発表する一方、ChatGPTの会話ログが証拠として法廷に提出される事件も起きた。

---

## 中国Zhipu AI、GLM-5.2でMythosのセキュリティ能力を追撃

中国・Zhipu AI（Z.ai）は2026年6月28日、オープンウェイトモデル **GLM-5.2** を公開した。研究者たちの示した、GLM-5.2はバグ発見やサイバーセキュリティタスクにおいてAnthropicの **Mythos** に匹敵する性能を持つという。Generalタスクでは依然としてAnthropicやOpenAIのモデルに後れるものの、米中間のAI能力ギャップは着実に縮小している。

注目すべきは、GLMがオープンウェイトである点だ。誰でも手頃のハードウェアでダウンロードして実行できる。これはpower userに深いアクセスを与えるというメリットの一方で、悪意ある行為者が監督もなく運用できるリスクも指摘されている。Trump政権はMythosやFableのような脆弱性発見能力を持つ先進モデル是国家安全保障上の脅威と位置づけており、中国のアクセスを制限するための輸出規制を強化している。

---

## Sakana AI「Fugu」——輸出規制の空白を突く東京発の国産LLM

Mythos輸出禁止という「好立地」を背景に、東京ベースのAIスタートアップ **Sakana AI** が6月25日、生成AIモデル **「Fugu」** を公開した。Fuguは日本語で「河豚」（ふぐ）を意味し、同社は「AnthropicのFable 5やMythos Previewと肩を並べる先駆的モデル」とうたう。

Sakana AIは2023年設立。共同創業者にはGoogle出身でTransformer論文の共著作者でもある **Llion Jones** 氏、Stable Diffusionの手帖者も安定したAI企業として知られる Mercari の前執行役員 **Ren Ito** 氏が名を連ねる。Fuguはエージェント指向で、他のモデルのAPIへのアクセスをオーケストレーションする能力を持つ。

TechCrunchに対しSakanaの広報担当は「輸出規制リスクのない先駆的能力を提供する」と表述し、公開のタイミングがMythos禁止措置と「完全に偶然一致した」と主張した。

中国では网络安全企業 **360** が同日、**Tulongfeng**（中国語名：途隆峰）と呼ばれるAIを発表。Mythos对面的サイバーセキュリティ能力をうたっている。

輸出禁止長期化の影響は大きい。AnthropicはMythosおよびFable 5を米国外のユーザーからアクセス不能にしてから2週間が経過。100社以上の米企業や政府機関がMythos 5の使用を認可されたという報道もあるが、禁止の全体解除の見通しは立っていない。

---

## ChatGPTログが証拠に——ロスの山火事放火事件

もう一つ注目すべきテーマは、生成AIの法廷利用。2026年6月28日、Los Angelesで最も致命的な山火事の一つを引き起こしたとして放火罪に問われた **Jonathan Rinderknecht** 被告の裁判で、検察側がChatGPTの会話ログを証拠として提出していたことが明らかになった。

検察は位置情報、監視カメラ映像、証言に加え、被告のChatGPT利用履歴を活用した。しかし、Rinderknecht被告はこれに対しては無罪を主張。最终的に陪審感は同意なく、 **mistrial（審理流会）** が宣言された。

この事件は、LLM提供商がユーザーとのの会話をどのような形で保存・記録しているか、またそのデータが令状なしで当局に提出される可能性についての法的議論を呼び起こしている。AI企业提供者が）「安全性を第一」とする姿勢が求められる中、プライバシー保護と法執行の境界線があらためて問われている。

---

## 開発者角度看点

**オープンウェイトモデルの輸出規制突破**は現実になりつつある。GLM-5.2やFuguのように、米国の輸出規制対象にならないクラウドベースのAPIや自家用ハードウェアで動くモデルは、今後さらに登場する可能性がある。開発者にとっては、社内的利用や研究目的でもMythosに匹敵する性能のモデルを比較的容易に入手できる時代になりつつある。

**AI証拠利用の法的枠組み**も急成長領域だ。ChatGPTログが証拠として提出される事例は今後增加迂向にあり、LLM提供者が conversation logs をどの程度の期間・形式で保存するかは、プライバシーと法執行の両面から早急に整理が必要だ。

---

## 参考リンク

- [China's Z.ai claims it can match Mythos on cybersecurity (The Verge)](https://www.theverge.com/ai-artificial-intelligence/958804/chinas-z-ai-glm-52-mythos-cybersecurity)
- [Asian AI startups launch Mythos-like models as Anthropic's export ban drags on (TechCrunch)](https://techcrunch.com/2026/06/27/asian-ai-startups-launch-mythos-like-models-as-anthropics-export-ban-drags-on/)
- [Suno launches Spark incubator program (The Verge)](https://www.theverge.com/ai-artificial-intelligence/958801/suno-launches-spark-incubator-program-to-feed-independent-artists-to-its-ai-machine)
- [Prosecutors used ChatGPT logs as evidence in the Palisades fire trial (The Verge)](https://www.theverge.com/ai-artificial-intelligence/958751/prosecutors-chatgpt-palisades-wildfire-arson-mistrial)

---

*（本文の情報は2026年6月29日時点のものです）*
