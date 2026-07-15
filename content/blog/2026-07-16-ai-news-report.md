# AI開発ニュース（2026年7月15日）：Suno訓練データ大量流出、OpenAIが$230の物理キーボード発売

2026年7月15日のAI開発ニュースをまとめる。Sunoによる音楽訓練データの大量スクレイピング、OpenAI初の物理デバイス「Codex Micro」、そしてGPT-Redと呼ばれる「LLM超ハッカー」などが話題に上がった。

---

## Suno、YouTube Music・Deezer・Geniusから数百万曲を 무단取得していたことが明らかに

AI音楽生成サービスの**Suno**が、訓練データとしてYouTube Music、Deezer、Geniusなどのプラットフォームから**数百万曲**をスクレイピングしていたことを、ハッキング事件が明らかにしたと複数のメディアが報じた。

### ハッキングの経緯と規模

2025年11月、Sunoはセキュリティインシデントが発生し、内部データが流出した。ハッカーが入手したのは、同社が使用していたソースコードであり、その中に訓練データの詳細が記されていた。

流出したファイルによると、Sunoは以下の規模で訓練データを収集していた：

- **YouTube Music**: 2,013,545クリップ
- **Deezer**: 数千時間のオーディオ
- **Genius**: 歌詞データ
- **IMSLP**: クラシック音楽データ
- **Jamendo**: アーティスト所有のクリエイティブコモンズ音楽
- **Pond5**: サウンドエフェクト

### 著作権侵害訴訟との関連

この訓練データの話は、**RIAA（米国レコード協会）** がSunoを起こした著作権侵害訴訟の存在とも直結する。Sunoは法廷で訓練に著作権のある音楽を使用したことを認めつつも、「パブリックにアクセス可能な音楽ファイルと第三者のウェブサイトからアクセス可能なメタデータ」を使ったと主張している。

Sunoの広報担当者は404 Mediaに対し、次のように声明を出している：

> 「我々は公開Filingおよび開示において、SunoのAIモデルはインターネット上の第三者のウェブサイトからアクセス可能な公開 利用可能な音楽ファイルと関連するメタデータで訓練されていると主張してきた」

### 顧客支払い情報まで流出

さらに深刻なのは、ユーザーの支払い情報にもハッカーがアクセスしていた可能性があることだ。SunoユーザーはStripeの支払い詳細が流出した可能性があり、Sunoは2025年11月の時点で「主に古いソースコードのみが対象で、機密情報は含まれていない」と主張しているが、ユーザーは通知を受けていないケースも報告されている。

---

## OpenAI、Codex向け物理デバイス「Codex Micro」を$230で発売

OpenAIはコード統合プラットフォーム**Codex**向けの物理デバイス**「Codex Micro」** を$230で発売した。Work Louderとの協業による製品で、同社の「Creator Micro 2」を原型としている。

### デバイスの仕様

Codex Microは正方形のメカニカルスイッチ配列で、以下の特徴がある：

- **6つのフロスト付きキースイッチ**: Codexスレッドの状態を色分け表示
  - 緑色: タスク完了
  - 黄色: フィードバック待ち
  - 赤色: エラー
  - その他: 実行中ステータス
- **ジョイスティック**: ナビゲーション
- **ダイヤル・タッチセンサー**: 操作フィードバック
- **Codex agentsの監視・管理用途**

Work Louderの共同創業者は動画の中で、「MicroはCodexスレッドのライブビューを提供し、色でタスクの状態を示す」と説明している。

### Jony Iveとのスマートスピーカープロジェクトとは別

Codex Microは、OpenAIがAppleの元デザイナー**Jony Ive**と開発している主力ハードウェアプロジェクトとは別のもの。そちらの製品はChatGPT対応のスマートスピーカースタイルになると噂されており、2027年の発売が予想されている。現行のCodex MicroはLIMITED RUN製品であり、Supply Coで限定販売となる。

### 訴訟続く中でのデバイス発売

このデバイス発売は、AppleがOpenAIを提訴したハードウェア関連訴訟の最中にも行われている。AppleはOpenAIがハードウェア技術を盗んだとして提訴しており、Codex Microの発売はこの法廷闘争の文脈，也不能解釈される。

---

## OpenAI、「GPT-Red」——モデルの安全性を強化する「LLM超ハッカー」

MIT Technology Reviewによると、OpenAIは社のAIモデルの安全性を高めるために、**「GPT-Red」** と呼ばれる specialized LLMを構築していた。

### GPT-Redの役割

GPT-Redは「LLM超ハッカー」として、他のLLMに対する攻撃役を演じ、そのり返し防御力を引き上げる「スパーリングパートナー」として機能する。これにより、OpenAIの他のモデルはサイバー攻撃に対する耐性を向上させている。

### セーフティ研究的意義

この情報は、LLMの安全性研究における「red teaming」（侵入テスト用のチーム）が、単なる人的資源ではなく、 specialized LLMに移行している現状を示している。GPT-Redのような自動化されたハッキングLLMを使うことで、より継続的かつスケーラブルな安全テストが可能になる。

---

## Thinking Machines、初めてオープ.weightモデルのリリースを発表

AIインフラ企業**Thinking Machines**は、1年半ぶりにPublicで構築してきたAIインフラの最初のオープ.weight（open-weights）モデルをリリースした。

これは「one-size-fits-all」型AIへの批判を反映したもので、特定のタスクに特化したモデルの提供を目指すもの。Thinking Machinesの創設者是、安易な汎用AIに対する批判を繰り返し発信してきた。

---

## Whatnot、AIスタートアップShapedを買収——ライブコマースにリアルタイムレコメンデーション導入

ライブストリーム通贩プラットフォームの**Whatnot**は、リアルタイムレコメンデーション・検索特化のAIスタートアップ**Shaped**を買収した。

リアルタイム推薦引擎をライブコマースに統合することで、視聴者個々の喜好に基づく商品推薦を実現。今後は、AI駆動のレコメンデーションが生配信型のECに深く組み込まれる事例として注目される。

---

## 参考リンク

- [Suno snatched millions of songs from YouTube, Genius, and Deezer (The Verge)](https://www.theverge.com/ai-artificial-intelligence/966072/suno-ai-music-training-scraping-youtube-hack)
- [OpenAI finally launches hardware for Codex (The Verge)](https://www.theverge.com/ai-artificial-intelligence/965901/openai-hardware-codex-micro-launch)
- [Meet GPT-Red: an LLM super-hacker OpenAI built to make its models safer (MIT Tech Review)](https://www.technologyreview.com/2026/07/15/1140514/meet-gpt-red-an-llm-super-hacker-openai-built-to/)
- [Thinking Machines amps up its bet against one-size-fits-all AI (TechCrunch)](https://techcrunch.com/2026/07/15/thinking-machines-amps-up-its-bet-against-one-size-fits-all-ai-with-its-first-open-weights-model/)
- [Whatnot acquires Shaped to power real-time live shopping recommendations (TechCrunch)](https://techcrunch.com/2026/07/15/whatnot-acquires-shaped-to-power-real-time-live-shopping-recommend/)

---

*本記事の情報は2026年7月15日時点のものです。*
