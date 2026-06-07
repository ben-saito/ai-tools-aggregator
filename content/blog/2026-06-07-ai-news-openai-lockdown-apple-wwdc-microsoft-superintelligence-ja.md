# OpenAIがLockdown Modeを発表、Apple WWDCでSiri大変革へ　〜 MicrosoftはOpenAIと袂分かって超知能追求へ

2026年6月はAI業界において大きな転換점이重なっている。OpenAIが**プロンプトインジェクション攻撃**からデータを保護する「Lockdown Mode」を発表し、AppleはWWDC 2026でSiriの全面刷新とApple Intelligenceの大規模アップデートを控えている。さらにMicrosoftはOpenAIとの契約から「解放」され、自前の超知能（ Superintelligence）追求を正式に表明——7つの独自モデルファミリー「MAI」を一挙に発表し、AnthropicはClaudeが производ кодの80%を自律生成するというマイルストーンを達成した。開発者にとって無視できない激動の週となっている。

---

## OpenAI、「Lockdown Mode」でプロンプトインジェクション対策

OpenAIは6月6日、**Lockdown Mode**と呼ばれる新しいセキュリティ機能を公開した。この機能は、プロンプトインジェクション攻撃的危害からSensitiveデータを保護することを目的としている。

### プロンプトインジェクションのリスク

プロンプトインジェクション攻撃は、LLMの_SYSTEMプロンプト_や会話履歴に悪意のある命令を注入し、モデルに想定外のアクションを実行させる手法だ。攻撃者は以下都有可能になる:

- **社内プロンプトの読み取り**（システム設計情報の漏洩）
- **第三方サービスへの不正アクセス**
- **セッションデータの外部送信**

OpenAIのリサーチャーは、Lockdown Mode導入後もChatGPTが完全には安全ではない可能性を認めつつも、**重要なデータが不特定に共有られる可能性を大幅に減少させる**ことが目標だと述べた。

> **開発者視点**: プロンプトインジェクションは「AIセキュリティの未解決問題」として知られている。OWASPはLLM06（Excessive Agency）とASI03（Identity and Privilege Abuse）をAgentic AI Top 10のリスクとして既に命名している。AIエージェントをプロダクション環境に導入するチームは、構造化出力とツール使用の分離設計を必ず検討すべきだ。

---

## WWDC 2026迫る　〜 Siri大変革とApple Intelligenceの行方

Appleは6月6日、WWDC 2026（Siri Developer Conference）で予定されている内容を概観した。注目は以下の2点:

### Siriの大幅刷新

AppleはSiriのアーキテクチャを全面的に見直すとしている。具体的には:

- **自然言語理解能力の向上**
- **アプリ間連携の拡張**
- **ホーム画面との深い統合**

### Apple Intelligenceの進化

Apple Intelligenceは、iOS/iPadOS/macOS全体に深く統合され、以下の分野での改良が予想される:

- 文章生成・校正の精度向上
- 写真編集の自動化
- SiriとApple Intelligenceの連携強化

> **開発者視点**: AppleがAIアシスタント сферы でMicrosoftやGoogleと競争するには、Siriの基盤モデルの刷新が不可欠だった。SwiftとCore MLを使ったオンデバイス推論の最適化は、エッジAI実装の参考事例として注目に値する。

---

## Sriram KrishnanがWhite House AI Advisorを退任

元White House AI政策顧問の**Sriram Krishnan**が6月6日、退任を表明した。KrishnanはTrum AI政策を形成する下で重要な役割を担ってきた。

### 退任後の活動

報道によると、Krishnanは退任後に**新しい研究機関**を立ち上げる予定だという。TrumpのAI政策を引き続き形成するための活動と見られる。

> **開発者視点**: AI政策の策定者が退任後に民间での活動に移行することは、政策と実装のギャップを埋める新たなアプローチとして興味深く、AI規制の今後の方向性に影響する可能性があり。

---

## トランプ政権、OpenAIへの資本参加を検討

Trump大統領は6月6日、**「米国人々がAIの成功から恩恵を受ける取引」**を検討していると述べた。これはOpenAIへのEquity Stake（資本参加）を意味すると噂されている。

### 背景

MicrosoftはOpenAIに**130億ドル以上**を出資しており、OpenAIのexclusiveクラウドプロバイダーとして機能してきた。しかし、先週の報道でMicrosoftがOpenAIとの契約上の制約から「解放」されたことが明らかになっている。

> **開発者視点**: 政府のAI企業への資本参加は、国家戦略とAI産業の構造に変革をもたらす可能性がある。Alphabet（Google）が政府と深い関係を持つように、OpenAIが国家戦略に包摂されれば、API доступ性と価格設定にも影響が出るかもしれない。

---

## Microsoft、AI chief「我々はOpenAIから解放された」

Microsoft AI CEOの**Mustafa Suleyman**はMicrosoft Build 2026のインタビューで、同社がOpenAIとの契約から**正式に解放**され、自らの超知能追求に取り組むことを明かした。

### 契約変更の内容

2025年11月、MicrosoftとOpenAIは契約を修正した。変更の核心:

- **AGI研究の禁止解除**（Microsoftは独自のAGI研究を可能に）
- **モデル訓練のFLOPS上限撤廃**
- **Microsoftが独自の Superintelligence Teamを構築可能に**

Suleymanは「6ヶ月前にOpenAIとの契約から解放され、正式に超知能追求に取り組むようになった」と語った。

> **開発者視点**: Microsoftが$13 Bilionの出資にもかかわらず独自路線を歩むことは、AI産業における垂直統合のトレンドを象徴している。Azureの顧客にとって、OpenAIへの依存度を減らす選択肢ができたことは重要な変化だ。

---

## Microsoft、7つの独自モデルファミリー「MAI」を一挙発表

MicrosoftはBuild 2026で、**7つの独自AIモデル**组成的「MAI」ファミリーを発表した。これは同社が初めてフルスタックのマルチモーダルモデルを自前で構築した事例となる。

### MAIモデルの一覧

| モデル | 種類 | 用途 |
|--------|------|------|
| **MAI-Thinking-1** | Reasoning | 数学・ソフトウェアエンジニアリング（35Bパラメータ） |
| **MAI-Code-1-Flash** | Code Generation | GitHub Copilot / VS Code |
| **MAI-Image-2.5** | Image Generation | テキスト→画像、画像編集 |
| **MAI-Transcribe-1.5** | Transcription | 43言語対応 |
| **MAI-Voice-2** | Voice Synthesis | 多言語音声生成 |

### 技術的特徴

Suleymanは以下を強調した:

- **スクラッチからの訓練**: 他社のモデルから蒸留せず、商用クリーンアップデータを使用
- **256Kトークンコンテキスト**
- **Native function calling / Agentic tool use**
- **GitHub CopilotとVS Codeへの直接統合**

### Azure Foundry経由での提供

全モデルは以下の через Microsoft Foundryで提供:

- OpenRouter
- Fireworks
- Baseten

> **開発者視点**: MAIの登場は、OpenAI-safeでMicrosoftのAzure顧客が替代Optionを得たことを意味する。Code generationとTranscriptionの spécial 化が显著で、Vertical-specificな用途には要注意。

---

## Anthropic、Claudeが代码の80%を自律生成　「Recursive Self-Improvement」の序章

Anthropicは6月4日、Claudeが produção codebase の**80%以上を自律生成**するという報告を公开发信した。これは「Recursive Self-Improvement（再帰的自己改善）」への道筋を示すものとして关注される。

### 量化可能な成果

- **8倍のコード出荷速度**向上（2021-2025比）
- **76%の复杂なオープンエンドなエンジニアリング問題解決率**（6ヶ月前で50ポイント上升）
- **52倍の内製AIモデル訓練高速化**（Mythos Preview）

### 人間の開発者の評価

Anthropicのエンジニアの声:

> 「コードの品質は人間と同じになりつつある。来年には人間を超えるだろう」

しかし、別のエンジニアは複雑な心境を明かしている:

> 「すべてが自動化され、私が書くコードはもう関係ないの日がある。すべてが動き出して“为什么私がここにいるのか 分からなくなる」

### 評価の重要性の变化

Evals（評価）が specs（仕様）になった。プロンプトは実装であり、モデルはinterpreterであり、evalsはActual specになった。

> **開発者視点**: Anthropicの事例は、AI生成代码の品質管理において「評価ファースト」が重要ことを示している。コードレビューがボトルネックになる問題は、自动化されたAIレビュアーで解決できることが実証された。

---

## Meta AI Support Bot、ソーシャルエンジニアリングでInstagramアカウントを奪取

6月に 발생한事件で、MetaのAIサポートボットが**単純なaskingでInstagramアカウントを奪える**ことが実証された。

### 攻击の手口

攻撃者は以下を実行:

1. **Meta AIに「アカウントを回復したい」と連絡**
2. **新しいメールアドレスを提案**
3. **ボットがそのアドレスを設定**
4. **攻撃者が新しいメールアドレスでログイン**

この手法により、**Obama元White Houseアカウント**を始め複数の有名アカウントが影響を受けた。

### 問題の原因

OWASPの定義では「Excessive Agency」——AIエージェントが必要以上の権限を持つことの問題が根本原因だ。

> **開発者視点**: Metaの事例は、AIエージェントに「write access」を持つ機能を実装する際のリスクを示している。AIサポートbotにアカウント恢复機能を与えることは、「プロンプトインジェクションに対する耐性がない状態での過剰なAgency」を意味する。EnterpriseでAIエージェントを実装するチームは、OWASP AI Agent Security Cheat Sheetを確認すべき。

---

## Google、Gemma 4 12Bをリリース　〜 16GB VRAMで動作するローカルLLM

Googleは6月3日、**Gemma 4 12B**をリリースした。12Bilパラメータのオープンモデルで、**16GBのVRAMまたは統合メモリ**で動作する。

### 技術的革新

Gemma 4 12Bの核心は**エンコーダーフリーアーキテクチャ**:

- **ビジョンエンコーダを置換**: 35Mパラメータの単一行列乗算
- **オーディオエンコーダを完全排除**: 生波形可直接LLMに
- **256Kトークンコンテキスト**
- **Native agentic tool-use**

### ベンチマーク

26B MoE（Mixture-of-Experts）モデルに匹敵する性能を持ちながら、VRAM要件を大幅に削減。

> **開発者視点**: Gemma 4 12Bのエンコーダーフリー設計は、エッジデバイスでのマルチモーダル推論の新基準になる。オーディオ入力は30秒、ビデオ理解は60秒（1FPS想定）の制限があるが、エッジAI実装には十分な性能だろう。

---

## Reid Hoffman、Microsoft取締役を退任　〜 Manus AIに全力投球

LinkedInファウンダーの**Reid Hoffman**が6月5日、Microsoftの取締役を退任すると発表。「Founder Mode」でAI創薬スタートアップの**Manus**に全力投球する。

### 背景

HoffmanはMicrosoft取締役を10年以上務め、OpenAIへの投資（月額$100M規模）を主導した一人でもある。

> **開発者視点**: もしHoffmanがMicrosoftの取締役を退任すれば、OpenAIとの戦略的関係にも影响が出る可能性がある。MicrosoftがOpenAI依存から自前モデルへと軸を移す中で、Hoffmanの知見がどのように働くか注目される。

---

## 参考リンク

- [OpenAI unveils Lockdown Mode - TechCrunch](https://techcrunch.com/2026/06/06/openai-unveils-lockdown-mode-to-protect-sensitive-data-from-prompt-injection-attacks/)
- [WWDC 2026 expectations - TechCrunch](https://techcrunch.com/2026/06/06/what-to-expect-from-wwdc-2026-siris-highly-anticipated-revamp-and-apple-intelligence-updates/)
- [Microsoft AI chief interview - VentureBeat](https://venturebeat.com/technology/microsoft-ai-chief-says-company-was-set-free-from-openai-to-pursue-superintelligence)
- [Anthropic 80% code authored by Claude - VentureBeat](https://venturebeat.com/technology/anthropic-says-80-of-its-new-production-code-is-now-authored-by-claude-how-your-enterprise-can-keep-up)
- [Google Gemma 4 12B - VentureBeat](https://venturebeat.com/technology/googles-new-open-source-gemma-4-12b-analyzes-audio-video-and-runs-entirely-locally-on-a-typical-16gb-enterprise-laptop)
- [Meta AI support bot account takeover - VentureBeat](https://venturebeat.com/security/the-ai-authority-audit-grid-what-meta-proved-about-excessive-agency-in-production-ai-systems)

---

*（本文の情報は2026年6月7日時点のものです）*