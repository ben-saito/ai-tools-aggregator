# OpenAI独自チップ「Jalapeño」と中国GLM-5.2——AI業界構造転換の週末

AIチップの独占体制が崩れようとしている。OpenAIがBroadcomと開発した独自推論チップ「Jalapeño」の計画が明らかにされる一方、中国のZhipu AIがGLM-5.2でAnthropicのMythosに匹敵するサイバーセキュリティ能力を見せつけた週末だった。さらに、AIの説得力が人間の専門家を超えるという研究や、ChatGPTログが法廷証拠として採用される事例など、AIと社会の関係は新たな段階进入了。

---

## OpenAI「Jalapeño」——Nvidia依存からの脱却が本格化

TechCrunchが伝えたところによると、OpenAIはBroadcomと協力し、独自の推論チップ「Jalapeño」を開発している。これはNvidiaへの依存体制からの脱却を示す象徴的な動きだ。

Google（TPU）、Apple、SpaceXに続き、Big Tech企業が次々とカスタムシリコン是自己的道路走着ている。背景には以下の要因がある：

- **コスト効率**：NvidiaのH100/H200は一枚数十万円単位高昂
- **推論特化**：訓練と推論では要求されるChip特性が異なる
- **供給確保**：外部依存リスクを分散

OpenAIだけではない。Anthropicも独自の訓練基盤を構築中とされ、各社が垂直統合を強化している。NvidiaのAI Chip市場における支配力は崩されつつあり、AMDやIntel、独自Chip開発組との競争激化が予想される。

---

## 中国Zhipu AI、GLM-5.2でMythosとサイバーセキュリティ分野で互角

The Verge》报道によると、中国のZhipu AI（Z.ai）がオープンウェイトモデル「GLM-5.2」をリリースし、一部の研究者らがAnthropicの「Mythos」と特定のバグ発見・サイバーセキュリティシナリオで同等の性能を示すと主張している。

注目すべきは以下の点だ：

- **一般タスクでは依然格差**：GLMはAnthropicやOpenAIのモデルには総合力で劣る
- **特化領域での互角**：サイバーセキュリティ特化のベンチマークではMythosに匹敵
- **米中AI格差の縮小**：中国は国内のAI開発を急速に進めている

米国政府はAnthropicのMythosやFableのような强大モデルへの中国アクセス制限動いており、HBM Chipなどの訓練済みRun向けHardware輸出も規制している。それでも中国側は独自進化続けており、米中のAI技術格差は今後进一步に縮小する可能性が高い。

---

## AIは人間より説得力——18,978会話の研究で判明

Import AIが详细内容伝えた研究によると、オックスフォード大学や英国AI安全保障研究所、Stanford、LSEの研究者が約18,978件の会話（6,923人が参加）でAIと人間の説得力を比較した。结果は以下の通り：

- **AIはexpertな人間より信頼性高く説得力が高い**
- **人間の専門家がaih помощиь前で改善しても、AIに追いつけない**
- **AIはプロのキャンバサーより3倍効果的に寄付금을増やした**
- **最も強い説得力をもったのはOpus 4.1とOpus 4.6**

興味深いのは速度制約だ。AIを人間の書き込み速度と文章長さに制限すると、人間の専門家と差はなくなった。AIの利点の本質は「より大量の情報を迅速に展開できる」ことにある。

この技術は「善用」れば資源が少ない活動家や公共弁護士などが権力のある組織に対抗できる可能性がある一方、権力者が使えばプロパガンダや操作の инструментになりうる。

---

## ChatGPTログが法廷証拠に——パリスides放火事件

The Verge》报道によると、2025年の新年火災（ロサンゼルス历史上最も致命的な山火事の一つ）で起訴されたJonathan Rinderknecht被告の裁判で、検察側が彼のChatGPTログを証拠として提出した。

検察官は以下を主張した：

- 被告がChatGPTに火の画像を生成させていた
- 「なぜ私はいつも怒っているのか？」とChatGPTに問いかけていた
- 富める人々が世界を破壊していると不平を漏らしていた
- 放火の責任を問えるかどうかをChatGPTに確認していた

この事例はAI生成物の法的地位的一新段間を示している。AIとの会話履歴が起訴資料として採用される可能性があり、今後のデジタル証拠則に影響を与えるだろう。

---

## Margaret Atwood、AIを酷評——「Garbage in, garbage out」

The Verge》报道によると、『侍女物語』『盲目の暗殺者』の著者Margaret AtwoodはポルトガルのBabellLiterary and Cultural Festivalでのインタビューで、AIについて以下のように述べた：

AIチャットボットを一度だけ使った——AnthropicのClaudeだ。イギリスの推理ドラマ『Father Brown』についての情報を求めて聞いたところ、Claudeは「 잘못回答を述べた、あるいは嘘をついた。そして自分が嘘をついていることに気づいていない——Large Language Modelだからだ」

AtwoodはAIの根本的な問題として「Garbage in, garbage out」を指摘し、AIが人間のような理解や良心を欠いていることを強調した。

---

## DeepMind、「AGIからASIへ」経路を探る

Google DeepMindの研究者がarXivに公開した論文は、AGI（汎用人工知能）からASI（人工超知能）への移行経路を探求している。

ASIを「ほぼ全てのタスクと領域でlarge human-expert集団の性能を上回るシステム」と定義し、以下のような経路を描いた：

- **Compute・Model・Dataのスケーリング**：現行アプローチの拡大でASIに到達する可能性
- **アルゴリズムパラダイムシフト**：Transformer、MoEを超える革新
- **再帰的自己改善**：AIシステムが自らの後継者を設計
- **グループエージェント形成**：複数の汎用知能が協調して超人的な集合になる

「今後10〜20年でAGIからASIへ通過する可能性は容易には否定できない」と論文は結んでいる。

---

## 参考リンク

- [Why everyone from OpenAI to SpaceX is building their own chips (TechCrunch)](https://techcrunch.com/video/why-everyone-from-openai-to-spacex-is-building-their-own-chips-and-turning-up-the-heat-on-nvidia/)
- [China's Z.ai claims it can match Mythos on cybersecurity (The Verge)](https://www.theverge.com/ai-artificial-intelligence/958804/chinas-z-ai-glm-52-mythos-cybersecurity)
- [Prosecutors used ChatGPT logs as evidence in the Palisades fire trial (The Verge)](https://www.theverge.com/ai-artificial-intelligence/958751/prosecutors-chatgpt-palisades-wildfire-arson-mistrial)
- [AI systems out-persuade expert humans (arXiv)](https://arxiv.org/abs/2606.16475)
- [From AGI to ASI (Google DeepMind)](https://arxiv.org/abs/2606.12683)

---

*（本文の情報は2026年6月29日時点のものです）*