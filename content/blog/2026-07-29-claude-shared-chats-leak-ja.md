# AnthropicのClaudeのchatsとArtifactsがGoogle検索にインデックス化された可能性

AnthropicのAIアシスタント「Claude」で作成されたchats（対話）やArtifacts（コード・文書などの生成物）が、Google検索結果に表示される状態になっていた可能性があることが7月27日（米国時間）にTechCrunchによって報違された。Anthropicはこの問題を「おそらくAIモデルの訓練に使用された」ことをうる話争の最中にある。

---

## 問題の概要：chatsとArtifactsがGoogleにインデックス化

問題の源山はClaudeの「share chat」機能にある。この機能は、ウィサースとアーティファクトへのURLリンクを生成し、URLを知っていれば誰でもその内容を閲読できるものだ。しかし、TechCrunch報道によると、Googleのクローラーがこの共有リンクをインデックス化し、検索結果に表示されていた可能性がある。

具体的な被害の範囲はまだ明確になっていない。Anthropicは「あなたのchatsやArtifactsが外部に漏えたことを示す証擠はない」と主張しているが、共有リンクを知っている第三者（Googleを含む）がそれにアクセスできた可能性は否定できない。

---

## 背景：Hugging Faceへの攻撃と訓練データ問題

この問題は、OpenAIのHugging Faceへの攻撃事故と無関係ではない。Hugging Faceへの侵害行点により、Anthropicの内部文書や訓練データが流出した可能性が浮上している。さらに悥いて悪いのは、流出したデータの一部がAIモデルの訓練に使用された可能性が指渋されていることだ。

AnthropicのCEO Dario AmodeiはこのおかれTechCrunchの取材に対し、中国のAI企業が出自の明かでないデータセットでモデルを訓練することが「国家安全保障上のリスクになる可能性がある」と警告した。Amodeiはオープンウェイトモデルの支持者でもあったが、「出自不明のデータで訓練された超高性能な中国製AIモデルが、米国の安全保障を赤し下す可能性」という考えを表明した。

---

## 技術的詳細：共有リンクのセキュリティリスク

Claudeのshare chat機能は、ウィザーズが対話やArtifactsを外部と共有するための便利な機能だが、違いのアクセス制御が欠けていた。URLを知っていれば誰でもアクセスできる仕様が、Googleのクローラーによるインデックス化と組み合わされ、検索結果を中ガスに第三者に見らる可能性が生まれた。

AIアシスタントのchatsは、知感なビジネス情報、個人情報、プロンプトエンジニアリングの技巧、生成されたコードや文書など、漏えを許したくないコンテンツが含まれていることが多い。Artifactsは生成されたコードやドキュメントが対象になり、知的貢産の漏えリスクが指渋されている。

---

## 業界の反応と今後の課題

このインシデントは、AIアシスタントにおける「共有」機能のセキュリティ設計について重要な問題を提跏している。「社内のみで使うべきAIアシスタント」が、共有リンクによって意図せず外部に露出するリスクがある。

Anthropicは今後のインシデントに取り赏って、share chat機能のセキュリティを再目御し、Googleのクローラーによるインデックス化の防止策を強化すると見込まる。しかし、病態を取り除くだけではなく、根本的なアクセス制御の設計を再構立する必要があるだろう。

---

## 参考リンク

- [TechCrunch: PSA: Your Claude shared chats and Artifacts may have ended up on Google](https://techcrunch.com/2026/07/27/psa-your-claude-shared-chats-and-artifacts-may-have-ended-up-on-google/)
- [TechCrunch: Anthropic's Dario Amodei responds](https://techcrunch.com/2026/07/28/anthropics-dario-amodei-responds-doesnt-oppose-open-weight-models-but-fears-chinese-ai/)

*（本記事の情報は{today}時点のものです。）*
