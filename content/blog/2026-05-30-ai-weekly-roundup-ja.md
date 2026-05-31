# AI開発界隈の週末ダイジェスト：Anthropicが史上最大級$650億調達、GitHub Copilotはトークンベース課金を導入

2026年5月最終週、AI業界は大型調達・価格改定・新興勢の台頭と目が離せない展開が続いた。GitHub Copilotの大幅な料金変更に開発者们が反発する一方、Anthropicは評価額$1Tに近づく巨額ラウンドを完了し、SoftBankは欧州AIインフラへの大型投資を表明した。

---

## Anthropicが$650億を調達——評価額$1T目前、IPO前倒しの観測

AI安全性と解釈可能性研究に強みを持つAnthropicが、Series Hで**$650億（約9.7兆円）**を調達した。共同リード投資家はAltimeter Capital、Dragoneer、Greenoaks、Sequoia Capital、Capital Group、Coatue、D1 Capital Partnersなど。Samsung、SK Hynix、Micronといったメモリ大手も戦略的パートナーとして参加している。

注目すべきは、*$15億分はすでにコミット済みの投資*で構成されており、Amazonが4月に表明した$50億のうち$5億が含まれる。TechCrunchの情報によれば、一機関投資家は幹部との面談仅仅ために*$5億のコミット*を行っていたという。

調達資金は**安全研究・解釈可能性の推進**、**Claude需要の高まりに応えるcompute拡張**、**製品と顧客パートナーシップのスケール**に充てられる。評価額$1T，目前で最も高い民间AI企業としての地位を確立しつつある。

---

## SoftBank、欧州AIインフラに最大€750億——フランスに5GWのデータセンター群

SoftBank Groupはフランス国内に**最大€750億（約870億米ドル）**を投資し、最大**5GW（ギガワット）**の追加データセンター容量を構築・運用する計画を表明した。2031年までにHauts-de-France地方に**3.1GW**を першуとして、Dunkirk（Loon-Plage）、Bosquel、Bouchainの3拠点で提供する。

同社はOpenAIの投資家であり顧客でもある。フランス経済相Roland Lescuraはこの発表を「Emmanuel Macron大統領がAIバリューチェーン全体てフランスをリードする国に位置づける野心のtestament」と評した。対照的に米国では環境懸念や電力料金への影響からデータセンター建設への反発が強まっており、Ohioでの9.2GW施設計画など国内投資も並行する。

---

## GitHub Copilot、トークンベース課金への移行に開発者から反発

Microsoft傘下のGitHubは6月1日からGitHub Copilotの課金を変更する。従来の**リクエスト数ベースの定額制**（月額$29など）から、实际に使用した**トークン数に基づく従量制**への移行だ。

RedditやXでは開発者たちの悲鳴が上がっている：

- 「今は$29/月だが、新方式だと**$750/月**に跳ね上がる」
- 「$50から**$3,000**に暴涨——ばかげている」

「新方式是馬鹿げている」「即刻キャンセルする」という声が殺倒しているもよう。Microsoftは2025年にCopilotを月額$19→$39に引き上げていたが、今回は従量制への完全移行的重いユーザーはコストが数十倍に膨らむ可能性がある。

---

## Groq、Nvidiaとの"$20B not-acqui-hire"後、$650Mを追加調達

AI推論特化のチップスタートアップGroqが、既存の主要投資家から**$6.5億**の資金調達を計画している。2025年12月、GroqはNvidiaとの間で総額*$200億の「acquisitionではない協定」*を締結。Groqの上級幹部がNvidiaに移籍し、同社のハードウェア技術がNvidiaにライセンス供与される内容だった。

今回のラウンドはGroqの**推論ネオクラウド事業**の拡大が目的。CEOとCFOはそれぞれAdam Winter（暫定CEO）、Matt Eng（暫定CFO）が務める。backerのDisruptiveとInfinituumは他の投資家がプロラタ望まない場合自身がラウンドを埋めることで合意しており、調達は事実上確定している。

---

## XCenaが$135M調達——「AIの本当のボトルネックはcomputeではなくメモリ」

メモリスタートアップXCena（韓国・米国にオフィス）はSeries Bで**$1.35億**（評価額$5.7億）を調達した。累計調達額は$1.85億に達する。

同社は「**推論はcomputeの問題ではなく、memory scalingの問題**」というthesisの下、GPU VRAMのbandwidth bottleneckに着目したチップアーキテクチャを設計している。CEOのJin KimはSamsungとSK Hynixの元幹部で、CTOのDohun KimもSamsung出身。「CPUもGPUも過去数十年間で知能化されたが、メモリは変わっていない」——XCenaはこの沟埋めることを狙う。

AIインフラコストの山大旦である推論処理の効率化に成功すれば、Nvidia GPU需要にも影响を与える可能出现する。

---

## 参考リンク

- [SoftBank、法国に最大€750億のデータセンター投資を表明（TechCrunch）](https://techcrunch.com/2026/05/30/softbank-says-it-will-invest-up-to-e75-billion-to-build-french-data-centers/)
- [GitHub Copilotのトークンベース課金が開発者から反発（TechCrunch）](https://techcrunch.com/2026/05/30/what-a-joke-github-copilots-new-token-based-billing-spurs-consternation-among-devs/)
- [Anthropicが$650億調達、評価額$1Tに近づく（TechCrunch）](https://techcrunch.com/2026/05/28/anthropic-raises-65-billion-nears-1t-valuation-ahead-of-ipo/)
- [Groq、Nvidiaとの大型协定後$650M調達へ（TechCrunch）](https://techcrunch.com/2026/05/29/after-nvidias-20b-not-acqui-hire-ai-chip-startup-groq-reportedly-raising-650m/)
- [XCenaが$135M調達、メモリこそAIのボトルネックと主張（TechCrunch）](https://techcrunch.com/2026/05/29/xcena-secures-135m-at-570m-valuation-betting-on-memory-as-ais-real-bottleneck/)

---

*本記事の情報は2026年5月30日時点のものです。*
