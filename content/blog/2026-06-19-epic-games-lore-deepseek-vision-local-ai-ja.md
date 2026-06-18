# Epic Gamesが「Merkle tree」ベースの新世代バージョン管理「Lore」をOSS公開　〜DeepSeek Vision・、米DeepSeek輸出規制巡り揺れる〜

2026年6月18日（米国時間）、AI・テック業界で複数の注目すべき動きがあった。ゲーム開発者向けに設計された新しいバージョン管理システムのOSS公開、DeepSeekのマルチモーダル機能強化、そして米政府の中国AI企業への対応が注目を集めた。

---

## Epic Games、新世代バージョン管理システム「Lore」をOSS公開

Epic Gamesが6月17日、**Lore** — 次世代オープンソースバージョン管理システムを正式に公開した。GitHubでMITライセンスにて公開されており、**1156ポイント**（HN）と大きな話題を呼んでいる。

### 技術的特徴

Loreは**コンテンツアドレッサブルストレージ**を核としたアーキテクチャを採用。レポジトリの状態を**Merkleツリー**と**不変リビジョン체인**として表現し、バイナリファーストの設計となっている。

**アーキテクチャの主要ポイント：**

- **コンテンツアドレッサブルストレージ**: すべてのリポジトリデータがコンテンツハッシュで参照・存储され、Merkleツリーにより高速な比較・整合性チェックを実現
- **チャンクドストレージ**: 大容量ファイルを再可能なチャンクに分割存储し、効率的な重複排除とバイナリアセットの転送を 实现
- **オンデマンド・ハイドレーション**: スパース・ワークスペース対応で、必要なデータだけを遅延読み込み
- **軽量ブランチ**: ブランチ作成・切り替えのオーバーヘッドが小さく、データの複製を伴わない

### Gitとの決定的な違い

Loreは**テキストファースト**のGitとは設計思想が異なる。ゲーム開発では以下が課題だった：

- Gitは小ファイルを前提としており、大容量バイナリ（3Dモデル，蒙 pp画素材，声音）の管理が非効率
- 大規模チームでのチェックアウト/プッシュが顕著に遅い
- バイナリファイルの差分検出とマージ機能が贫弱

Loreは**UEFN（Unreal Editor for Fortnite）**的实际運用を通じて鍛えられたシステムであり、Epic Games内での実際のプロダクション環境で使用されている。

**SDK対応言語**: C/C++, Rust, Python, JavaScript, C#, Go

- [Lore - GitHub](https://github.com/EpicGames/lore)
- [Lore Documentation](https://epicgames.github.io/lore/)

---

## DeepSeek Vision — マルチモーダルAIの進化

Hacker Newsで173ポイントを獲得した話題として、**DeepSeek Vision**の登場がある。DeepSeekがチャットインタフェースにビジョン機能を導入。これにより、テキストと画像を理解するマルチモーダルなAIアシスタントとして利用できるようになった。

**技術的意義:**

- 中国のAIラボが積極的にマルチモーダル領域に進出
- 画像理解とテキスト生成を組み合わせたプロンプト応答が可能に
- API経由でのVision機能の利用も検討されていると报告

---

## 米国政府、DeepSeekのブラックリスト掲載を見送る

Reutersの報道（465 HNポイント）によると、米 商務省傘下の機関は**DeepSeek**を輸出規制リスト（エンティティリスト）に追加する計画を当面見送ったことが明らかになった。代わって、100社以上の中国企业が「安全保障上のリスク」と認定されている。

**背景事情:**

- DeepSeekは米規制当局にとって难以 profileな存在
- 中国のAI企業に対する輸出管制の強化与件与る技術の流失防止が課題
- 100社以上の中国企业が「監視リスト」として追加される可能性

これは米中AI覇権競争の複雑な側面を浮き彫りにしている。開発者にとっては、DeepSeekのAPIやモデルの利用に関する規制リスクが当面是不会現実に发生的であることを意味する。

- [Reuters: US holds off blacklisting DeepSeek](https://www.reuters.com/world/china/us-holds-off-blacklisting-chinas-deepseek-more-than-100-firms-deemed-security-2026-06-17/)

---

## ローカルLLMの現実 — 「QwenはOpusの代わりに使うもの」

Alex Ellisのブログ記事（240 HNポイント）では、**Qwen3 8B**などのローカルモデルと**Claude Opus 4**などのクラウドベースモデルの比较考察がされている。

**핵 论点:**

- 「Local Qwen isn't a worse Opus, it's a **different tool**」
- オフライン動作、レイテンシ、税理プライバシー確保がローカルモデルの главное 利点
- クラウドモデルの場合は常にネットワーク往返が必要で、機密データにはリスクが伴う
- コスト構造が根本的に異なる（ローカル: 一度のハードウェア投資 / クラウド: API呼び出しごとの従量制）

**实用的な選択基準:**

```python
# ローカルモデルが适しているケース
local_cases = [
    "オフライン環境での開発",
    "機密情報を含むプロンプトの処理",
    "低レイテンシが要求されるアプリケーション",
    "大量リクエストでのコスト最適化"
]

# クラウドモデルが适しているケース
cloud_cases = [
    "最高性能の推論能力が必要",
    "多様な知识ベースへの更新时间",
    "スケーラビリティが重要な producción 環境",
    "モデルの maintenance を内製したくない場合"
]
```

---

## AI Compute Extensions (ACE) — x86向けAI命令セット拡張

Intel/AMDなどのエコシステムが提唱する**AI Compute Extensions (ACE)**の仕様が公開されている。x86アーキテクチャにAI推論向けの专用命令を追加する取り組み。

**技術的意味:**

- CPU上でのAI推論效率向上
- GPU依赖缩小による消費電力削减
- ヘテロジニアス・コンピューティング环境への回帰

---

## AI Weekness 指標と業界の方向性

TechCrunchの报道では、米国の一般市民の**16%ربات AIの社会への肯定的影響を信じている**という惊愕の調査結果が紹介された。これはAIへの信頼性ついての課題を浮き彫りにしている。

一方、**Odyssey**は世界モデル構築で**14.5億ドル**の、評価額を獲得。Amazonなどを始めとする巨大企業のAIへの投资는依然として积极적이다。

---

## AI開発者としての考察

本周の技術トピックから以下の点が注目される：

1. **バイナリファーストのバージョン管理** — ゲームだけでなく、MLモデルのチェックポイント管理や大数据セットの版本管理にも応用可能性がある

2. **中国AI企業の国際展開** — DeepSeekのブレークスルーが続き、米中間のAI規制は複雑化

3. **ローカルvsクラウドのすみ分け** — コスト，性能，プライバシーを天秤にかけた实用的な选择が重要に

---

## 参考リンク

- [Lore - Epic Games OSS Version Control](https://lore.org/)
- [GitHub: EpicGames/lore](https://github.com/EpicGames/lore)
- [DeepSeek Chat](https://chat.deepseek.com/)
- [Reuters: US holds off blacklisting DeepSeek](https://www.reuters.com/world/china/us-holds-off-blacklisting-chinas-deepseek-more-than-100-firms-deemed-security-2026-06-17/)
- [Alex Ellis: Local Qwen isn't a worse Opus](https://alexellis.io/blog/local-ai-is-not-opus/)
- [AI Compute Extensions Specification](https://x86ecosystem.org/resource/ai-compute-extensions-ace-specification/)

---

*（本文の情報は2026年6月18日時点のものです）*
