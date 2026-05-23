# Google AI検索の「disregard」バグが示す生成AIの危うさ

GoogleのAI検索機能が「disregard」という検索語に対して通常のサマリーではなく、チャットボット的な応答を返すことが話題となっている。この出来事はAIがプロンプトを読み取る仕組みの根本的な課題を浮き彫りにしている。

---

## 「disregard」で何が発生したのか

5月22日（金）、Googleで「disregard」と検索したユーザーがAI Overviewセクションに典型的なチャットボット応答を受け取る事象が報告された。社交メディアXでの投稿によると、応答内容は「Got it. If you need anything else or have a new question later, just let me know!」という形式で、通常のAIサマリーではなかった。

興味深いことに、午後の段階ではGoogleは「disregard」という検索語に対してAI Overviewを表示しなくなった。代わりに、問題に関するニュース記事のリストを表示している。Googleは現時点でこの問題について公式の声明を発表していない。

このバグは** プロンプトインジェクション（prompt injection）** 脆弱性のリスクを露呈している。AI Overviewが意図せずユーザーの入力そのものをAIへの指示として処理してしまった可能性があるからだ。

---

## 米国政府におけるGrokの低活用実態

一方、Elon Musk氏が率いるxAIのチャットボット「Grok」の活用が米国政府内で極めて限定的であることが明らかになった。Reutersの調査によれば、2024年の米国政府のAI利用に関する400以上の事例のうち、GrokまたはxAIが記載されていたのはわずか3件だった。それら3件も書類作成やソーシャルメディア管理といった基本的な用途のみだった。

政府記録への記載が少ないという現象は、Grokが「truth-seeking」を標榜しながらも実用的でないことを示唆している。Musk氏にとって皮肉なことに、GrokはSpaceXのIPO構想（評価額1.75兆ドル）の中心的存在でありながら、政府機関からの需要はほとんど存在しない。

---

## 文学賞に忍び寄るAI生成テキスト

英国の文芸誌Grantaが主催するCommonwealth Short Story Prizeで、AI生成と疑われる作品が選定される事案が発生した。Jamir Nazir著「The Serpent in the Grove」は、Mix된 Metaphoreやアナフォラ、リスト形式などLLM生成プロットに特有の要素が確認されている。

Grantaは2012年からこの賞の地域優勝者を発表してきたが、今回は初めてAI 生成怀疑が浮上した事例となった。文学業界では、AI検出ツールの精度が依然として不十分であると同時に、受賞作品の真正性を検証するプロセスの整備が急務となっている。

---

## SpotifyとUMG、AIリミックスツールで提携

SpotifyとUniversal Music Group（UMG）は、AIを使用した歌曲のリミックスおよびカバーバージョン生成に関するライセンス契約を締結した。新ツールは「generative AI technology」を中使用するとされているが、具体的な動作仕組みや料金体系はまだ公開されていない。

Spotifyはこの機能をプレミアム会員向けのアドオンとして位置づけている。しかし、AIカバーバージョンは既にSpotify、YouTube、TikTok、Instagram泛滥しており芸術的な観点からは眉唾ものとの声も多い。エ学的には、テキストから音楽生成が可能になったことで、権利処理の複雑性がさらに増大することは避けられない。

---

## Samsung半導体従業員、年間ボーナス34万ドルで妥結

Samsung電子の半导体部門従業員約48,000人がbonuses上限の撤廃を求めてストライキ威胁を行い、最終的に年間平均34万ドルのボーナスで合意に達した。交渉の背景には、AI部品需要の急増に伴うSK Hynixとの報酬格差があった。

新たな合意により、チップ部門の全従業員に出勤率 基本给の50％相当額をregularボーナスとして現金で支給される。Samsungの半导体部門はHBMメモリ不足の中で需要に応えるため、AIチップ需要の恩恵を従業員に還元する形で運営されることになる。

---

## 参考リンク

- [Google's AI search is so broken it can 'disregard' what you're looking for](https://www.theverge.com/tech/936176/google-ai-overviews-search-disregard) - The Verge
- [Elon, stop trying to make Grok happen](https://www.theverge.com/ai-artificial-intelligence/936219/elon-stop-trying-to-make-grok-happen) - The Verge
- [The literary world isn't prepared for AI](https://www.theverge.com/tech/936073/ai-writing-granta-commonwealth-prize) - The Verge
- [Spotify says its AI remix tool is for superfans](https://www.theverge.com/ai-artificial-intelligence/936072/spotify-umg-ai-music-remix-cover-superfan) - The Verge
- [Samsung memory chip employees negotiated $340,000 bonuses](https://www.theverge.com/tech/936002/samsung-memory-chip-employees-deal-strike-bonus) - The Verge
- [OpenAI opens Singapore AI lab as IMDA updates AI framework](https://www.artificialintelligence-news.com/news/openai-singapore-ai-lab-imda-agentic-ai-framework/) - AI News

---

*（本文の情報は2026年5月23日時点のものです）*