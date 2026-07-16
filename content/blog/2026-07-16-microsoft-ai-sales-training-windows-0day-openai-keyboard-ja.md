# Microsoft、AI продавцов обучает критиковать OpenAI и Anthropic + Windows 0-day и OpenAI Keyboard

2026年7月15日はAI産業界にとって重要な一日となった。Microsoftが営業社員にOpenAIおよびAnthropicのモデル价比を批判的に説明するよう 훈련を実施していることが判明し、Windowsでは同日にHiveLegacyという新たなゼロデイ脆弱性が公开发表されるという戏剧的な展開があった。さらにOpenAIはAppleとの法的紛争の最中に\$230のライトアップキーボードを発売するなど、多个面条で激動の日となった。

---

## Microsoft теперь обучает AI продавцов критиковать конкурентов

TechCrunchの報道によると、Microsoftは 영업社員向けにOpenAIとAnthropicのモデル价比を比較するトレーニング资料を作成している。资料では、MicrosoftのAzure OpenAI ServiceやCopilot+ PCのAI機能を、競合他社製モデルよりも「効率的」で「コスト効果が高い」として説明する构成になっている。

この情报は、MicrosoftがAI市場での竞争激化に対応するためだけに留まらず、AzureのAIサービス収益拡大に向けた直接的な营业戦略の変化を示している。MicrosoftはAzure AI Studioを通じて各种のモデルを提供しているが、OpenAIのGPTシリーズやAnthropicのClaudeシリーズとは常に竞争关系にある。

**技術的に注目すべき点:** MicrosoftのCopilot+ PC向けSnapdragon X Elite NPUは、ローカルLLM推論において高い電力効率を実現している。Windows 11のCoco IDN（Chromebook-to-Windows）という 文脈で、MicrosoftはWeb Summitの场面でIntelやAMDとの协約を拡大している。

**開発者にとって的意义:** Azure OpenAI Serviceの企业向け套組では、microsoftの营业が竞争对手のモデル보다優れた点数付けを実施している。だが实际のモデルは、任务种类によって性能に差异があるため、API选择は自身のユースケースに最适合なベンチマークを参照することが望ましい。

---

## Windowsに新たなゼロデイ脆弱性「HiveLegacy」が公开发表

Ars Technicaの报道によると、Anonymousの研究者「NightmareEclypse」は7月15日、Windows User Profile Serviceの脆弱性を標的とする「HiveLegacy」という名の権限昇格エクスプロイトを公開した。Microsoftは同日、过去最多となる89件のPatch Tuesdayを更新をリリースしたばかりであり、两社の対応が同日に重なったことは异例となる。

このエクスプロイトは、制限されたシステム権限を持つユーザーが管理者アカウントのレジストリハイブを変更できるもので、Windowsエクスプローラーで特定のファイルタイプを開いたときに起動するアプリケーション связанных с реестром settings を操作される风险がある。NightmareEclypseは过去に9個のゼロデイエクスプロイトを公開しており、这次のHiveLegacyで10個目の公开となる。

**技術的に注目すべき点:** HiveLegacyは「強力なプリミティブ」であり、他の恶意あるアクティビティにも使用可能な可能性がある。 эксплой트コードは恶意な再利用を防止するために精简化された形式で公开されているが、Windowsユーザーは可能な限り早いアップデート適用が推奨される。

**開発者にとって的意义:** レジストリ修改権限の昇格は、コード署名やアプリケーション動作环境的制約の规避につながる。 企业環境では、User Profile Serviceへのアクセス制御の見直しと、Patch Tuesdayの早期適用プロセスの确立が急務となる。

---

## OpenAI、Appleとの法的紛争の最中に\$230のライトアップキーボードを発売

OpenAIは7月15日、Codex向けとする\$230のメカニカルキーボード「OpenAI Codex Keyboard」を発売した。この発売は、AppleがOpenAIを相手取った硬件貿易盗撮指控の訴訟が进行中の最速での新製品投入となる。

Codex Keyboardは、OpenAIのAIコード生成機能を补助する输入デバイスとして设计上されており、 AIの推論プロセス中にリアルタイムでライトアップする機能を탑재している。OpenAIは这次の製品投入について、Codexのecosystem拡大戦略の一環として位置づけている。

**技術的に注目すべき点:** OpenAIのCodexは、API経由でAI代码生成能力を提供するものであるが、ハードウェア перифейрий を手がけることは同社が AIの UX/입출력 の形态多样性を探る实验的な试みとして解读できる。\$230という 가격設定は、 AI辅助入力デバイス市场における价格帯の试探として注目に値する。

**開発者にとって的意义:** AIコード生成辅助デバイスは、IDE内のAI assistantとの連携を补助する 输入層の新しい形态として期待される。 APIとハードウェアの水平分業ではなく、垂直統合型のエコシステム构建试探として、 开发者社区の反応が注目される。

---

## 参考リンク

- [Microsoft AI Sales Training (TechCrunch)](https://techcrunch.com/2026/07/15/microsoft-is-reportedly-training-salespeople-to-talk-down-openai-a)
- [Windows HiveLegacy 0-day (Ars Technica)](https://arstechnica.com/security/2026/07/windows-0-day-drops-the-same-day-microsoft-releases-record)
- [OpenAI Codex Keyboard (TechCrunch)](https://techcrunch.com/2026/07/15/amid-hardware-legal-battle-openai-releases-a-230-keyboard-for-code)

---

*（本文の情報は2026年7月15日時点のものです）*
