# OpenAIがGPT-Live-1で音声対話刷新、SpaceXAIはGrok 4.5公開　〜AI一周ニュース（2026年7月第1週）

OpenAIがChatGPTの音声モードをフルモデルチェンジし、SpaceXAIが民間上場後初の大型モデルGrok 4.5をリリース、GoogleはPhotosに動画生成AI機能を追加───2026年7月第1週は、AI業界各社が基盤モデルとエンドユーザー機能の双方で激しい競争を展開した週となった。

---

## OpenAI、GPT-Live-1で「双方向音声」を実現　中断も自然、リアルタイム翻訳にも対応

OpenAIは7月8日、ChatGPTの音声モード刷新となる新モデル**GPT-Live-1**を発表した。同社のKundan Kumar研究リーダーは発表ブリーフィングで、「最もスマートな音声モデル」と表現している。

従来のChatGPT音声モードは「ターン制」───ユーザーが話して止まる → モデルが回答する ───の音声認識→LLM応答→音声合成の3段階.pipelineで構成されていた。質問中に遮ると回答が乱れることがあり、対話的自然さに課題があった。

GPT-Live-1は**フルデュプレックス（full duplex）モデル**と呼ばれ、音声の出力と入力Streamsを同時に処理できる。OpenAI製品リーダーのAtty Eleti氏によると、「モデルを話しながら同時にListeningできる」という。

### 主な新機能

- **同時双方向音声**: モデルが話している最中にユーザーが遮る（interrupt）ことも、モデルがユーザーの沈黙中に相槌（「mhmm」「yeah」「got it」）を打つことも自然に
- **リアルタイム翻訳**: ユーザーが話し終わるまで待たず、話しながら翻訳を実行
- **自動テキストモデル連携**: 推論やWeb検索が必要なクエリはGPT-5.5などの高性能テキストモデルに自動振り分け
- **安全性Safeguards**: 有害応答の抑制、高リスク情况的終話、セルフ-harm会話時の専門家検証済み危機対応ホットライン案内を実装

有料ユーザーはGPT-Live-1（大型モデル）にアクセス可能。無料ユーザーはGPT-Live-1 miniに自動アップグレードされる。

---

## SpaceXAI、Grok 4.5を「Opus並クラス」と称して公開　上場後初リリース

SpaceXAIは7月8日、民間上場後初めての大規模モデル**Grok 4.5**を正式リリースした。Elon Musk氏本人もX上で「Opus-classモデル」と表現している。

Blog投稿によると、Grok 4.5は「ワークホース（主力）」定位のモデルで、**コーディング・アプリ構築`、`事務作業`、`研究`、`執筆`、その他定型知識作業**など、AI業界が自動化を目指してきた幅広いタスクをカバーする。

Architecturalな詳細（パラメータ数、訓練データ、Context Windowなど）は現時点で公開されておらず、TechCrunchはSpaceXAIに詳細確認を求める取材としている。

---

## Meta、Superintelligence Labs初成果「Muse Image」公開　Instagram全投稿を訓練データに活用

Metaは7月7日、Superintelligence Labs divisão初となる画像生成モデル**Muse Image**を発表した。同 Labs責任者のAlexandr Wang氏（Metaが2025年に柳井正CEOの後継として採用）は、ThreadsにてMuse Imageを「agentic（自律的）」と表現。Muse Spark LLMと連携し、プロンプトの推論、Web検索、計画立案を経てから画像生成を行う点が従来のLlama/Emu系列と大きく異なる。

Muse ImageはMeta AI app、Instagram、WhatsAppの画像生成機能をすでに駆動しており、近日中にFacebookとMessengerにも展開予定。

### 技術的特徴

- **Instagram画像Sans Tag活用**: ユーザーは他のInstagramアカウントを@mentionすることで、そのユーザーの公開写真を参照してAI画像を生成できる（Metaは「ユーザーがAI訓練へのコンテンツ再利用を制御可能」と説明）
- **Muse Spark LLM連携**: agenticワークフロー──推論 → Web検索 → 計画 → 生成
- **Muse Video soon**: Muse Videoモデルのリリースも予告済み

MetaはMuseシリーズでLlamaブランドを段階的に置換えていく方針を示している。

---

## Google Photos、 Gemini Omniで動画編集する「Video Remix」追加

Googleは7月8日、Google Photosに新機能**Video Remix**を追加した。Gemini Omni（Googleが最近リリースしたマルチモーダル基盤モデル）が動画を自動編集・変換するTouch。

Gemini Omniは「any inputからanythingを作成可能」をPromiseするモデルで、Googleはこれを突破口としてApple、OpenAI、AdobeとのコンシューマーAI機能競争を加速させている。

Video Remixでは、数Tapで動画ClipにAI変換を加えられる。具体的な編集形式や出力品質についての詳細は限定的だが、Googleは「専用ソフトウェア頼みではなく了一般消費者にもAccessibleに」を方針として打ち出している。

---

## 参考リンク

- [ChatGPT's upgraded voice mode is better at shutting up (The Verge)](https://www.theverge.com/ai-artificial-intelligence/962856/chatgpt-upgraded-voice-mode-gpt-live)
- [OpenAI releases new voice models for more natural live conversations (TechCrunch)](https://techcrunch.com/2026/07/08/openai-releases-new-voice-models-for-more-natural-live-conversations/)
- [SpaceXAI releases Grok 4.5, which Elon describes as an 'Opus-class model' (TechCrunch)](https://techcrunch.com/2026/07/08/spacexai-releases-grok-4-5-which-elon-describes-as-an-opus-class-model/)
- [Meta's new Muse Image model can pull other Instagram users into AI photos (The Verge)](https://www.theverge.com/tech/962485/meta-muse-image-ai-model-instagram)
- [Google Photos adds a new AI 'Video Remix' tool (TechCrunch)](https://techcrunch.com/2026/07/08/google-photos-adds-a-new-ai-video-remix-tool/)

---

*本文の情報は2026年7月9日時点のものです*
