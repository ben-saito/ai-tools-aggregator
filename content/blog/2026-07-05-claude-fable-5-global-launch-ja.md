# Claude Fable 5が輸出規制解除を経て世界復刻——Anthropicと米政府の間で何が起きたのか

6月の輸出規制という予期せぬ嵐を経て、Anthropicの旗艦モデル **Claude Fable 5** が再びグローバルにアクセス可能になった。米商務省が6月30日に輸出管理ライセンス要件を撤回したことで、約3週間ぶりに全世界のユーザーが同モデルを利用できるようになった。

---

## 輸出規制の舞台裏

6月9日、AnthropicはClaude Fable 5とClaude Mythos 5を開始した。StripeはFable 5が5,000万行のRubyコードベース移行を1日で完了したと報告し、大きな話題を呼んだ。しかし、喜びは長続きしなかった。6月12日、米政府は輸出管理命令を発動。外国籍ユーザーへのアクセス禁止が決まり、Anthropicは全顧客へのアクセスの即時遮断を余儀なくされた。

この規制の発動には、Amazon研究者によるレポートが直接のきっかけとなった。AnthropicはFable 5のセーフティをバイパスする手法が含まれており、モデルがソフトウェア脆弱性を特定するだけでなく、関連する脆弱性の悪用方法を示すコードを出力したという報告だった。Anthropicは他の主要モデル（Claude Opus 4.8、OpenAI GPT-5.5、Moonshot Kimi K2.7など）も同じ脆弱性を特定・悪用できたと反論したが、政府は輸出管理という手段を選んだ。

企業にとって、この3週間の遮断は中核的・閉鎖型APIモデルへの依存がもたらす脆弱性を浮き彫りにした。開発者たちはлокальでのオープンウェイトモデルへの投資を拡大し、連邦政府の不安定性からオペレーションを分離することを迫られた。

---

## 規制解除への道：6月26日〜30日

6月26日、米国政府はMythos 5の信頼できる米国組織への部分的なアクセス回復を許可。6月30日には商務省Lutnick長官がFableとMythosの両方の輸出管理ライセンス要件を撤回する書簡を送信し、Fable 5のグローバルアクセスが正式に再開された。

この問題を解消するため、Anthropicは特定のAmazon手法を99%以上阻止できる改良済みClassifierを開発した。商務省のAI標準・安全保障センター（CAISI）でテストされ、Fable 5に実装された。

---

## 企業への展開：7月7日までの特別プラン

Fable 5の全面回復に当たり、Anthropicは7月7日までの時限的な展開プランを実施中。**Pro**、**Max**、**Team**、選択済みEnterpriseサブスクリプションでは、ユーザーの週間tier allowanceの最大50%までFable 5が無償で含まれている。7月7日以降、Fable 5は使用量クレジット制に移行するが、標準EnterpriseシートにはFable 5のAllowanceが設定されていないため、クレジットを有効にする必要がある。

企業にとって、この二週間の遮断は次のような教訓を残した：

- **中核的APIモデルへの依存リスク**：閉鎖型APIへの依存がもたらす脆弱性が浮き彫りに
- **モデル・アジャイル・フォールバック**：プロキシレイヤーでAPIからオープンウェイト代替への動的ルーティングを実現
- **データガバナンス**：Fable 5の30日間データ保持要件（セーフティ調査または法的理由の場合を除外）が、金融・医療・法務グループにとって重要な検討事項

---

## 参考リンク

- [Anthropic - Redeploying Fable 5](https://www.anthropic.com/news/redeploying-fable-5)
- [VentureBeat - Anthropicが輸出規制解除後もたらす企業影響](https://venturebeat.com/technology/anthropic-is-bringing-back-claude-fable-5-globally-after-us-lifts-export-control-order-where-can-enterprises-access-it)
- [WIRED - Trump Administration Lifts Export Controls on Anthropic Models](https://www.wired.com/story/trump-administration-lifts-export-controls-on-anthropics-mythos-and-fable-ai-models/)

---

*本記事の情報は2026年7月5日時点のものです。*
