# GitHub Copilotが従量制へ：AIコーディング料金の変更を読み解く

2026年6月1日からGitHub Copilotが月額定額制から**トークンベースの従量制（per-token billing）**に変更される。Microsoft_ownedのGitHubはこれまで複雑なタスクも単純な質問も同じ1リクエストとしてカウントしてきたが、新モデルでは入力・出力・モデル種類に応じて_tokensが消費される。

---

## トークン課金の仕組み

**トークン**とはLLMが処理するテキストの最小単位であり、1トークンは約0.75語に相当する。10,000語のコードをCopilotにリファクタリングを頼むと、入力だけで約12,000〜13,000トークンを消費する計算だ。新料金体系では月額料金 대신に「AI Credits」が付与され、1 Credit = 1米セントで現在固定されている。

Copilot Pro（月額10ドル）のユーザーは1,000 Creditsを受け取り、単純なクエリ中心の開発者なら追加購入不要の可能性もある。だが複雑なコードベースに対してマルチエージェントクエリを実行するとクレジットは急速に消費される。最先端モデルほど1 Creditあたりの_tokens数が少なくなる这也是新定价的一个特点。

值得注意的是、**コード補完（Code Completions）** と **Next Edit提案** は引き続き無料提供服务，这是Microsoft为了缓解新收费模式带来的冲击而设置的防护栏。

---

## 業界全体の従量制への流れ

GitHub Copilotの移行はAnthropicとOpenAIがすでに企業顧客をトークンベース請求に切り替えたの流れと一致する。しかし不同的是、Microsoftは全体の利益率高いためにこれまでCopilotを他の製品収益で補助してきた。6月1日以前、利用者は月額料金を3〜8倍 초과してもペナルティがありませんでした。

新たな請求モデルはMicrosoftの経済合理性を改善하지만、新しいユーザーはクエリごとのトークン消費を意識せざるを得ず、試用・探索のハードルが上がる。この変化はAIコーディングツールへの期待値そのものが大变革求めている——単純な月額払いで「何でも利用可能」だった时代が終わる。

Uberの事例が示すように、企业がAIコーディングエージェントを本格導入するとコストインパクトは甚大だ。The Informationによると、UberのCTOは2026年のAI予算をすでに年間内で消化したと发言、11%のコード更新がAIによって記述されている。同社は主としてAnthropicのClaudeコーディングエージェントを利用しているという。

---

## 企業にとっての意味

複雑なタスクをエージェントLLMに長時間にわたり監視なしで実行させる場合、同様のトークン課金が適用される可能性がある。AI自動化から得られる効率性向上と、AIベンダーの請求額上昇を同時に測定する必要があります。

技術メディアの观察では、GitHub Copilotの料金変化は生成AIの経済性が「実験費用」から「運用費用」に移行する転換点として受け止められている。月額定額制はAIを試す阶段では魅力的に見えたが、実際のプロダクション利用ではTokens消費量に応じた請求の方が企業会計には透明性が高い这就是現在の業界の流れだ。

---

## 参考リンク

- [Per-token AI charges come to GitHub Copilot - AI News](https://www.artificialintelligence-news.com/news/per-token-ai-charging-comes-to-github-copilot/)
- [US government increases AI suppliers and rethinks Anthropic's role - AI News](https://www.artificialintelligence-news.com/news/us-government-increases-ai-in-defence-suppliers-roster-and-rethinks-anthropics-role/)
- [Google tests Remy AI agent for Gemini - AI News](https://www.artificialintelligence-news.com/news/google-remy-ai-agent-gemini-user-control/)

---

*（本記事の情報は2026年5月7日時点のものです）*