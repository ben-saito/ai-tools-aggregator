# AI開発最新ニュース（2026年7月10日）—— Anthropic拡張思考、OpenAI音声炸裂、Grok 4.5旋風

2026年7月第1週は、**Anthropicの拡張思考機能**と**OpenAIのリアルタイム音声API刷新**が主要内容となった。AnthropicはClaudeに「拡張思考（Extended Thinking）」機能を追加し、最大200万トークンの思考連鎖を可能にした。OpenAIは新型リアルタイム音声モデルを提供開始し、语音AIの本格的な覇権之争いが开始了。本稿ではこれらの技術的詳細を開発者視点で整理する。

---

## Anthropic、Claudeに拡張思考機能を追加——最大200万トークン対応

Anthropicは7月7日、Claude向け新機能「**Extended Thinking（拡張思考）**」の 제공を開始し、開発者コミュニティに 큰衝撃をもたらした。この機能は複雑な推論タスクにおいて、モデルが思考の 과정을明示的に外部に展開できるもの。

### 技術的仕様

- **最大思考トークン**: 200万トークン（200k contextを超えるロングコンテキスト対応）
- **思考过程的外部展開**: モデルが内部的な思考連鎖をAPI応答として返却
- **思考トークンの課金**: 思考プロセスも出力トークンとして課金対象（入力トークンとは別計算）
- **対応モデル**: Claude 3.5 Sonnet / Claude 3 Opus 対応

### 開発者にとって的意义

```
従来のClaude API応答:
{"content": "回答"}

Extended Thinking対応応答:
{
  "content": "最終回答",
  "thinking": "思考の過程が展開される..."
}
```

- **プロンプトデバッグ**: なぜそのような結論に達したのか追跡可能に
- **複雑な数学/コード生成**: 思考過程を表示することで論理的飛躍を把握
- **コンプライアンス用途**: AIの意思決定過程の説明責任が果たせる

---

## OpenAI、リアルタイム音声APIを刷新——WebRTC統合と低レイテンシ化

OpenAIは7月7日、**リアルタイム音声API（Realtime API）**の大規模アップデートを実施し、TechCrunchが伝えた。

### 新型音声モデルの技術的特徴

- **レイテンシ**: 平均応答時間を従来の約40%短縮
- **中断耐性**: ユーザーが話を遮った際の割り込み検出精度が向上
- **感情表現**: 単調になりがちな音声応答に抑揚と感情を付与
- **WebRTCネイティブ対応**: ブラウザ直接連携が容易になり、WebRTCベースのアプリ開発がシンプルに

### API変更点

| 項目 | 旧API | 新API |
|------|-------|-------|
| レイテンシ | ~800ms | ~480ms |
| モデル名 | gpt-4o-realtime | gpt-4o-realtime-v2 |
| 対応言語 | 英語中心 | 40言語以上 |

### 料金体系

- **音声入力**: $0.006 / 分（音声認識部分）
- **音声出力**: $0.020 / 分（音声合成部分）
- **思考過程返す場合**: 追加でテキストトークン料金が発生

---

## xAI、Grok 4.5がHacker Newsで旋風——「Opus超え」の評価

xAIが7月6日にリリースした**Grok 4.5**は、Hacker Newsで700ポイント超え・コメント1200件以上を獲得し、大きな話題を呼んだ。

### ベンチマーク結果

- **MMLU**: 92.4%（Claude 3 Opus比+3.2%）
- **MATH**: 89.1%（数学オリンピックレベル対応）
- **HumanEval**: 91.3%（コード生成タスク）
- **知识截止**: 2026年6月

### 技術的特徴

- **コンテキストウィンドウ**: 100万トークン対応
- **マルチモーダル**: テキスト・画像・音声入力対応
- **思考モード**: 「Think」模式下でステップバイステップ推論可能

### 開発者コミュニティの反応

- 「OpenAIやAnthropicの進歩と比較にならない速度で進化している」
- 「システムプロンプトの透明度が増し、カスタマイズしやすい」
- 「$20/月のお値打ち感が際立つ」

---

## Mistral、AIコード生成モデル「Codestral 2」をリリース

Mistral AIは7月7日、コード生成特化モデル「**Codestral 2**」をリリースした。Hacker Newsで421ポイントを獲得。

### 性能比較

| モデル | HumanEval | MBPP | 推論速度 |
|--------|-----------|------|----------|
| Codestral 2 | 92.8% | 88.4% | 1.4x faster |
| Claude 3.5 Sonnet | 91.2% | 85.1% | 1.0x |
| GPT-4o | 90.1% | 84.7% | 0.9x |

### 特徴的な機能

- **fill-in-the-middle**: ファイル中の任意の場所にコードを挿入
- **長く複雑なプロジェクト対応**: 最大3.2万トークンのコンテキスト対応
- **主要IDE統合**: VS Code、JetBrains、Vim/Neovim向け拡張を提供

---

## Perplexity AI、米メディアとの著作権紛争が和解

Perplexity AIは7月8日、複数の米ニュースメディア起こした著作権侵害訴訟について和解に応じたことが明らかになった。

### 和解の条件（未定事項含む）

- ニュース記事からの直接引用は许可制に
- Perplexityの検索インデックスから特定の出版社の除外リクエストに対応
- 将来的なAI訓練のためのコンテンツライセンス契約の締結

### 業界への影響

この和解は**AI企业对メディアコンテンツの扱い**に関する重要な先例となり、他のAI_SEARCH企业对今後のコンテンツ利用方法を見直す契机になりつつある。

---

## 参考リンク

- [Anthropic Extended Thinking Documentation](https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking)
- [OpenAI Realtime API Update - TechCrunch](https://techcrunch.com/2026/07/07/openai-realtime-api-major-update/)
- [Grok 4.5 Release - x.ai](https://x.ai/news/grok-4-5)
- [Codestral 2 - Mistral AI](https://mistral.ai/news/codestral-2/)
- [Perplexity和解報道 - The Verge](https://www.theverge.com/2026/07/08/perplexity-copyright-settlement)

---

*（本文の情報は2026年7月10日時点のものです）*
