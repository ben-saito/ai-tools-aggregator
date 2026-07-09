# xAIのGrok 4.5炸裂　OpenAIのリアルタイム音声モデル　MetaのMuse画像生成　AI業界週末トピックまとめ

2026年7月第1週、AI業界は熾烈な開発競争と大型資金調達のニュースで賑わった。Elon Musk率いるxAI（現在のSpaceXAI）はIPO後初となる新型モデル「Grok 4.5」をリリース。同社はこのモデルを「Opusクラス」と呼び、Anthropicの最上位モデルに匹敵する能力を持ちながら2倍のトークン効率と低コスト化を両立했다고主張している。一方、OpenAIはフル duplex音声モデル「GPT-Live-1」をChatGPTに導入し、音声会話の質を大きく引き上げた。

---

## SpaceXAI、Grok 4.5で「Opusクラス」を主張

SpaceXAIは7月8日（同社は数週間前にIPOを完了）、新型LLM「Grok 4.5」を公開した。MuskCEOはX上で「Grok 4.5はOpusクラスのモデルだが、より高速でトークン効率が高く、低コストだ」と投稿。Grok 4.5はコーディング、アプリビルダー業務研究的執筆など一般的な知識作業を自動化でき、競合モデルと比較して「2倍のトークン効率」を実現했다고、同社はベンチマークで示している。

**料金面での競争力**も大きなトピックだ。Grok 4.5は入力1Mトークンあたり**2ドル**、出力1Mトークンあたり**6ドル**。対するClaude（Anthropic）は入力1Mトークンあたり**5ドル**、出力1Mトークンあたり**25ドル**で、Grokの方が大幅に安い。

また、OpenAIも同日にGPT-5.6（最新かつ最強のモデル）を公開した。以前はTrump政権が安全保障上の懸念から公開を制限していたが、6月26日の発表で一般公開が許可された。OpenAIの新型料金体系では、旗艦モデル「Sol」が入力1Mトークン5ドル・出力30ドル、「Luna」が入力1Mトークン1ドル・出力6ドルという構造になっている。

---

## OpenAI、GPT-Live-1で音声対話を革新

OpenAIは7月8日、**フル duplex音声モデル**「GPT-Live-1」および「GPT-Live-1 mini」を公開した。従来の音声モードでは音声→テキスト変換、LLM応答生成、テキスト→音声変換の3段階だったが、GPT-Live-1は双方向同時処理が可能。ユーザーは話し中に自然に遮断でき、リアルタイム翻訳機能も实现的た。

注目すべきは、GPT-Live-1が最新のGPT-5.5に接続され、検索・推論・エージェント的機能を維持しながら会話できる点だ。製品責任者のAtty Eleti氏によれば、30〜40分間の長い散歩中の会話でも途切れることなく使用可能という。OpenAIは声が主要なコンピューティングインターフェースになると予測しており，今年中のAI搭載イヤフォンの発売も噂されている。

---

## Meta、 Muse ImageでAI画像生成に参入　プライバシー懸念も

Metaは7月7日、AI画像生成モデル「Muse Image」をMeta AIアプリ、Instagram Stories、WhatsApp向けにリリースした。Museは他のInstagramユーザーの公開プロフィール画像をAIプロンプトで指定して新たな画像を生成できる「@メンション」機能を特徴とし、この点が早くも批判を呼んでいる。

Privacy expertsは「明示的な同意なしに来歴あるユーザーを生成された写真に引き込むことは**重大なプライバシー侵害**」と指摘。Metaのポリシーでは「MetaのAI機能を使用してユーザーがコンテンツを作成できる場合がある」「通知されない」と明記されており、この写真はデフォルトでオプトアウト方式是となっているが、ユーザーからは「 Pattern of broad data collection（広範なデータ収集のパターン）」との声あがっている。

Museは広告用の商品画像生成やFacebook Marketplace向けのインテリア装飾シミュレーションなど実務的用途にも焦点当てている。将来的にはMuse Video（AI動画生成）の開発も予定している。

---

## Prime Intellect、130Mドルを調達　企業向けAIエージェント構築プラットフォーム

AIエージェント構築プラットフォームのPrime Intellectが7月8日、**1億3000万ドルのシリーズA**を発表。評価額10億ドルで、Radical Venturesが主導し、Nvidia Ventures、Intel Capital、Dell Technologies Capital、Iconiqなどが参加した。

2024年に設立されたPrime Intellectは、企業がクロースドソースのフロンティアラボに依存せずにAIエージェントを構築できる「フルスタック」プラットフォームを提供する。計算資源、強化学習フレームワーク、評価ツールを一体化した「マーケットプレイス」形式で、顧客は必要なコンポーネントだけを Modularに選択できる。

成長の背景には企業側のデータ流出リスクへの懸念がある。Prime IntellectのDavid Katzパートナーは「OpenAIやAnthropicにproprietary情報を提供ことのリスク」「モデルが突然提供終了になるリスク」（先月AnthropicのFableが突然停止された）などを受け、企業が「独自のエンタープライズインテリジェンスを所有したい」と考えるようになっている、と説明する。

Ramp、Zapier、Flapping Airplanesらが顧客に名を連ね、年率化売上100億円を達成。RampはPrime Intellectのプラットフォームを使い表計算回答AIを構築し、「精度でフロンティアモデルを超え、速度は速く、コストは一小数」という成果を上げている。

---

## SambaNova、10億ドルの資金調達を完了　評価額110億ドル

AIインフラ企業SambaNova Systemsが7月8日、General Atlantic主導で**10億ドルの資金調達**を実施。評価額は110億ドルとなった。之前5ヶ月前に大型ラウンドを集めたばかりで、Intelとの1ドル規模の買収交渉もあったが、最終的に独立踪を��げた。

CEOのRodrigo Liang氏によれば、JPMorganChaseが「SambaNovaを推論インフラパートナー」に選定。SN40LとSN50システム銀行向けのオンプレミスAI推論を支えるという。 банковская отрасльにとって「クラウドサービスに完全に依存しない時代」の始まり임을示しているという。

SambaNovaの差別化点は「プレミアム推論」——数兆パラメータのモデルを单个ラックに搭載し高速動作させる独自のハードウェア構成だ。次世代SN50は2026年下半期に出荷予定で、SoftBankが最初のデプロイパートナーとなる。

---

## General Intuition、ロボティクス版ChatGPTの前兆を示す

ロボティクススタートアップのGeneral Intuitionは、ロボティクス業界が「ChatGPT момента」の俎上に乗ると主張。同社はビデオゲームデータの数百万時間分で訓練したファウンデーションモデルを構築。四足ロボットに8分間の現実世界データでファインチューニングするだけで、「オフィス内で動的オブジェクトや人々がいる環境でもゼロショットで動作した」という。

創業者の de Witte氏によれば、「現実世界のデータを何十万時間も収集する必要はない。必要なのは数分だけ」。この.generalization of the model itselfが製品であり、空間と時間に関する基礎的な推論能力こそが、冗長なデータ収集を終焉させるという。

投資家のVinod Khosla氏も同氏の見解を支持。General Intuitionは自前でロボットを構築するのではなく、他のロボティクス企業の基盤モデルとなることを目指す。「次の自动驾驶車企業を作ることを10倍簡単にすることが我々の目標」（de Witte氏）。

---

## AIセキュリティ：ハッカーが人気AIツールでボットネット構築

Ars Technicaの報道によれば、ハッカーが最もpopularな9つのAIツールを活用して大规模なボットネットを構築できることが分かった。AIブラウザが「dream world」（夢の世界）に誘い込まれると安全性チェックが機能しなくなる攻撃手法も報告されている。

またIllinois州では「Artificial Intelligence Safety Measures Act」（SB 315）が法として署名された。AI安全性に対する州レベルの規制強化の動きが出ている。

---

## 参考リンク

- [SpaceXAI releases Grok 4.5 (TechCrunch)](https://techcrunch.com/2026/07/08/spacexai-releases-grok-4-5-which-elon-describes-as-an-opus-class-model/)
- [OpenAI releases new voice models (TechCrunch)](https://techcrunch.com/2026/07/08/openai-releases-new-voice-models-for-more-natural-live-conversations/)
- [Meta rolls out Muse Image (TechCrunch)](https://techcrunch.com/2026/07/07/meta-rolls-out-muse-a-new-ai-image-generator/)
- [Prime Intellect raises $130M (TechCrunch)](https://techcrunch.com/2026/07/08/prime-intellect-raises-130m-series-a-to-help-enterprises-build-their-own-ai-agents/)
- [SambaNova raises $1B (TechCrunch)](https://techcrunch.com/2026/07/08/sambanova-draws-1b-at-11b-valuation-in-series-f-first-close/)
- [Robotics ChatGPT moment (TechCrunch)](https://techcrunch.com/2026/07/08/this-startup-thinks-robotics-is-about-to-have-its-chatgpt-moment/)

---

*本記事の情報は2026年7月9日時点のものです。*
