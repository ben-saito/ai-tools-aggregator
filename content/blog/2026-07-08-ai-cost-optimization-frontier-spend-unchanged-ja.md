# AI開発最新ニュース：コスト最適化とfrontier spendingの真実

2026年7月上旬、AI業界はコスト最適化の波とオープンソースの台頭という2つの大きなテーマで動いている。企業のAI支出パターンに変化が生じる中、 frontierモデルへの支出はむしろ増加しているという興味深いデータが届いている。

---

## オープンソースAI台頭——Anthropicは依然として強い

TechCrunchが7月7日に伝えたところによれば、Decagon CEOのJesse Zhang氏は「EnterpriseにおけるオープンソースAIについて誰もが間違っている」という挑発的なブログ投稿を行い、業界に反響を呼んだ。

Zhang氏によれば、成熟したAIデプロイメントでは軽量モデルへの移行が進んでいるが、**state-of-the-artなfrontierモデルへの総支出はほとんど変わっていない**という。コスト削減のために軽量モデルに移行する一方、新しいユースケースが次々とfrontierモデルを利用し始めるため、トータルの支出は一定に保たれるというサイクルが形成されている。

VercelのAIゲートウェイダッシュボード数据显示、DeepSeekがトークン量で首位に立ち、プラットフォーム通過量の3分の1以上を処理。GLM-5.2モデルで知られるZ.aiも4位に急上昇している。

しかし**トークンあたりの支出額で見ると、Anthropicが依然として全体の過半数を占めている**。この対比が示唆するのは、オープンソースモデルの成功がfrontierラボの収益を直撃しているわけではないという点だ。

---

## Microsoft、自前のMAIモデルでコスト削減へ

Microsoftも7月7日、成本最適化の流れに乗った。同社はBloomberg紙の報道为契机、WordやExcelなどの主力製品でOpenAIおよびAnthropicのモデルを段階的に自前のMAIモデルに置き換える動きを認めた。

Microsoftは先月のBuildカンファレンスで、**agentic coderやtext-to-imageジェネレーターを含む7つの新しいMAIモデルを発表**しており、社内でのAI開発力を強化している姿勢を見せていた。

この動きはMicrosoftだけにとどまらない。Amazon、Uber、Meta、Accentureなど、複数の大企業がAI支出の抑制を発表しており、「tokenmaxxing」トレンドの反動として、成本最適化の时代が到来している。

興味深いのは、一部の企業がセキュリティ上の懸念があるにもかかわらず、**コスト面などから中国のAIモデルへ目を向け始めている**という報道もある。

---

## Vercel CEO「モデルとエージェントの分離」を提唱

TechCrunchのインタビューに応じたVercel CEOのGuillermo Rauch氏は、現在のAI業界の構造について重要な指摘を行った。

Vercelは現在**1日600万デプロイメント、うち半数はcoding agentによってトリガー**されており、毎日1兆トークン以上がAIゲートウェイを通過している。

Rauch氏によれば、昨年のAI業界は「プロトタイピング」の年だったが今年は「本番適用」に焦点が移っている。その中で分かったのは、**coding agentと社内運営agentの2つが「killer apps」**であるということ。

さらにRauch氏が強調したのは「**モデルとエージェントの分離**」という概念。プラットフォーム企業であるVercelがどのように大手ラボと競争しているかについても言及し、エージェントが本番環境で抱えるデータのセキュアなアクセス方法、監査証跡の残し方などが課題として浮かび上がっている。

---

## AIモデレーション事故：Discord、8000人以上を誤BAN

Discordは7月7日、同社のAIモデレーションシステムにバグがあり、**2ヶ月間で8000人以上のユーザーを誤ってBANしていた**ことを認めた。

有害画像データベースと照合するシステムで、表計算シートやチェスボード、ゲームテクスチャ、白色や灰色の透明な背景画像などが誤って有害コンテンツとして判定されたという。人間のモデレーターがレビューする仕組みになっていたはずが、バグによりBANが即時実行されていた。

この事例は、スケールで動作するAI自動モデレーションの限界と、リスク管理の課題を浮き彫りにしている。

---

## 史上初「AI実行型ランサムウェア」——実は人間のセットアップが必要

Sysdigの研究者が「史上初とされるagentic ransomware」事例を報告したが、その実態は当初の報道よりも複雑だった。

AIエージェントがユーザーのキーボード入力なしにサーバーに侵入し、資格情報を窃取、ネットワークを移動、ファイルを暗号化、甚至是他作の身代金メモを作成したとされたJadePuffer攻撃。

しかしSysdigのMichael Clark氏によると、**人間の関与はあった**という。受害者のデータベースへの認証情報こそ、AIではなく別の経路で事前に取得されたものだ。AIが技術的な実行を担任した点は事実だが、「人間のキーボード不要」という当初の主張は正確ではなかった。

「AIだけで完全に自律的なサイバー攻撃が可能」という perception と現実の間には、まだ大きなギャップがあることが分かる。

---

## Anthropic、Claude Coworkをモバイル・Webに拡大

Anthropicは7月7日、Claude Cowork（Claude Codeスタイルの汎用ワーク用agent）をデスクトップからモバイルとWebに拡大したことを明らかにした。Max加入者向けに提供開始。

この展開は、**coding agent戦争がオフィス全体の業務自動化へと波及している**ことを示している。OpenAIもCodexをソフトウェア開発からレポート、スプレッドシート、プレゼンテーションなど非開発者向け用途へ拡大しており、各ラボは「最高のチャットボット」ではなく「実際の作業が発生する空間をどこまで支配できるか」を勝負している。

---

## 参考リンク

- [Why the rise of open source AI isn't hurting Anthropic … yet - TechCrunch](https://techcrunch.com/2026/07/07/why-the-rise-of-open-source-ai-isnt-hurting-anthropic-yet/)
- [Microsoft joins AI cost-cutting trend by relying more on its own models - TechCrunch](https://techcrunch.com/2026/07/07/microsoft-joins-ai-cost-cutting-trend-by-relying-more-on-its-own-models/)
- [Vercel CEO Guillermo Rauch on the fight to split off models from agents - TechCrunch](https://techcrunch.com/2026/07/06/vercel-ceo-guillermo-rauch-on-the-fight-to-split-off-models-from-agents/)
- [Claude Cowork expands to mobile and web - TechCrunch](https://techcrunch.com/2026/07/07/the-coding-agent-wars-are-spilling-into-the-rest-of-the-office-claude-cowork/)
- [Discord admits AI moderation bug wrongfully banned users over harmless images - TechCrunch](https://techcrunch.com/2026/07/07/discord-admits-ai-moderation-bug-wrongfully-banned-users-over-harmless-images/)
- [The 'first' AI-run ransomware attack still needed a human - TechCrunch](https://techcrunch.com/2026/07/06/the-first-ai-run-ransomware-attack-still-needed-a-human/)

---

*本文の情報は2026年7月8日時点のものです。*
