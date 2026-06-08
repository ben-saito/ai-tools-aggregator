# WWDC 2026で，SiriがGemini搭載で大変身 ― 1Tモデルの1000 tokens/s達成やxAIのデータセンターREIT化も

2026年6月9日，AppleがWWDC 2026でSiriの大幅刷新を発表，Google Geminiベースの新しいアーキテクチャが注目を集めている。また，小米（Xiaomi）は1兆パラメータモデルで1000 tokens/sという推論速度を記録し，xAIはデータセンターREIT（不動産投資信託）のようなビジネスモデルへと変貌しつつある。

---

## Siri AIの全面的オーバーホール：Gemini搭載で生まれ変わるAppleIntelligence

Appleは6月8日（米国時間），WWDC 2026において **Apple Intelligence** の大幅刷新を披露した。最大の特徴は，Google GeminiをベースとしたFoundation Modelsとの連携である。AppleはCraig Federighi上級副社長のプレゼンテーションで「AIにおけるプライバシーは交渉の余地がない」と強調し，データ最小化の原則を改めて打ち出した。

新しい Siri AI の主な機能は以下の通りである：

- **アプリ横断のコンテキスト理解**：Phoneアプリ应用中にもMailやMessages等其他アプリの情報を参照可能
- **ビジュアルインテリジェンス**：画像理解・生成，高度な写真編集，視覚的な質問応答に対応
- **音声生成・自然言語理解の強化**：上位デバイス向けにより高性能なモデルを提供（対象デバイスは未発表）
- **システムオーケストレーター**：常にアクティブなアプリとユーザーの作業を協調的に把握する中心的な制御レイヤー

Siri は **独立型アプリ** としても提供されるようになった。ユーザーは過去の会話履歴をスクロールして参照でき，各セッションの要約も自動生成される。テキスト入力だけでなく画像やドキュメントのアップロード，音声モードにも対応し，iOS・macOS・iPadOS間でiCloud経由のプライバシー保護された同期が行われる。

Apple はまた，去年批判を受けた **Liquid Glass** デザインに対してオプトアウト機能を追加し，ユーザーが視覚要素を控えめにすることも可能にした。

---

## 小米MiMo：1Tパラメータで1000 tokens/sを達成

同日，小米（Xiaomi）は **MiMo-V2.5-Pro-UltraSpeed** のリリースを発表した。TileRTとの協業により，1兆パラメータ（1T）モデルで初めて **約1200 tokens/s** のデコード速度を記録した。

この速度が意味するのは，単により速い応答ということではなく，**パラダイムシフト** である。hard problemに直面した際，従来のモデルでは「1つの回答を待ち，把它当作正解とするしかなかった」が，同一の wall-clock time内で dozens of reasoning paths を並列実行し，自己検証・自己修正できる。速度そのものが知性に変換される体験を提供する。

UltraSpeed API は通常版の約3倍のコストだが，推論速度は約10倍である。2026年6月9日から6月23日（北京时间）の限定期間，申請制で trial access を提供する。

---

## xAI：データセンターREITへの進化

Martin Alderson氏の記事によると，xAIはAnthropicやGoogleとの大規模契約を通じて，純粋なAIラボから **データセンターREIT（不動産投資信託）** 的な存在へと変貌しつつある。

背景にはAnthropicのキャパシティ問題があった。欧州の午後や米国の午前中など，需要が集中する時間帯にClaudeのsubscriptionsに対して使用制限をかけていたが，xAIのMemphisにあるColossus 1データセンター（約220k GPUs，300MW）を提供することでこの問題が解決された。契約単価は **$1.25bn/月** という巨大なものだ。

さらに，先週Googleとも類似の契約を締結し，$920mn/月で110k GPUsを提供している。SpaceXとの2026年2月の合併以降，xAIの収益はSpaceXのIPO控えて親会社に流れる構造になっている。両契約には90日前の通知で解約可能な条款が含まれている。

---

## AI開発者としての着眼点

**1. Apple × Google Gemini の協力関係**
Apple が Gemini を選択したことは，Apple Intelligence が「単一モデルの押し付け」ではなく，多様なモデル活用への舵切りであることを示している。Private Cloud Compute と on-device 処理を組み合わせる点は，エンタープライズ開発者にとって GDPR や各規制下での実装事例として注目に値する。

**2. 推論速度 ≠ コスト節約**
MiMo の事例が示すのは，高速推論は単なる「応答時間の短縮」ではなく，Best-of-N や Tree Search による **品質向上の手段** となりうる点である。アプリケーションレベルでのアーキテクチャ設計が大きく変わる可能性がある。

**3. 計算資源の金融商品化**
xAI の場合，計算資源の提供が収益の柱となりつつある。AIラボが計算資源のbroker/resellerとして機能するこの構造は，今後のAIインフラ投資判断において重要な先行指標となる。

---

## 参考リンク

- [WWDC 2026: Everything announced on Siri AI, iOS 27, Apple Intelligence and more - TechCrunch](https://techcrunch.com/2026/06/08/wwdc-2026-everything-announced-on-siri-ai-os-27-apple-intelligence-and-more/)
- [Apple reveals new AI architecture built around Google Gemini models - MacRumors](https://www.macrumors.com/2026/06/08/apple-reveals-new-ai-architecture/)
- [Apple gives Siri its own dedicated app - TechCrunch](https://techcrunch.com/2026/06/08/apple-gives-siri-its-own-dedicated-app/)
- [MiMo-V2.5-Pro-UltraSpeed - Xiaomi](https://mimo.xiaomi.com/blog/mimo-tilert-1000tps)
- [xAI is looking more like a datacentre REIT than a frontier lab - Martin Alderson](https://martinalderson.com/posts/xais-new-rental-business/)

---

*（本文の情報は2026年6月9日時点のものです）*
