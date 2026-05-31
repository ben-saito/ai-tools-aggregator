# AI開発ニュース：BadHost脆弱性とホームロボット学習データの最前線

2026年5月下旬から6月初頭にかけて、AIセキュリティとロボット工学の分野において、それぞれ重大な技術的課題が浮かび上がった。1つはPython Webフレームワーク「Starlette」に見つかった「BadHost」脆弱性（CVE-2026-48710）で、もう1つはAIロボットのための学習データ収集方法に関する新たなアプローチだ。本稿では両テーマの技術的詳細を、开发者の視点から整理する。

---

## BadHost（CVE-2026-48710）：FastAPI/MCPエコシステムへの致命的脅威

セキュリティ研究者チームが2026年5月、StarletteフレームワークにBadHost（CVE-2026-48710）と呼ばれる致命的な脆弱性を発見した。StarletteはFastAPIの基盤となっているPython製ASGI（Asynchronous Server Gateway Interface）実装で、週間ダウンロード数が**3億2500万回**に達する大規模なものだ。

FastAPI、LiteLLM、vLLM、Text Generation Inferenceなど、AI開発で広く使われているPythonパッケージがすべて影響を受ける。加えて、MCP（Model Context Protocol）サーバーも脆弱性の対象となる。MCPはOpenAI、Anthropic、Googleを含む主要プロバイダのAIエージェントが外部システム（データベース、メール、カレンダー、認証サービスなど）にアクセスするためのプロトコルだ。

### 影響を受ける主要パッケージ

- **FastAPI**：最も広く使われているPython Webフレームワーク
- **vLLM**：高スループットLLM推論サーバー
- **LiteLLM**：複数のLLMプロバイダへの統一インターフェース
- **Text Generation Inference**：Hugging Faceの推論サーバー
- **MCPサーバー**：認証情報を保存している重要ターゲット

### 攻撃の手口：HTTP Hostヘッダーインジェクション

BadHostは、HTTP Hostヘッダーに1文字を注入するだけでStarletteのルーティングをバイパスできる。path-basedの認可チェックが無効化され、攻撃者がMCPサーバー内の認証情報を窃取できる可能性がある。

「単一の文字をHTTP Hostヘッダーに注入することで、Starletteのパスベース認可をバイパスできる」と研究者らは説明する。この脆弱性はファイアウォールが適切に構成されていない限り、すべてのシステムに適用される。

### 開発者が取るべき対応

修正済みバージョンStarlette 1.0.1が2026年5月にリリースされた。**FastAPI、vLLM、LiteLLM、MCPサーバーを含む全プロジェクト**で、依存パッケージの即時アップデートが必要だ。追加のセキュリティ措置として、ファイアウォールによるHostヘッダーのフィルタリングも推奨される。

```bash
# バージョン確認とアップデート
pip show starlette
# 1.0.1未満の場合は要アップデート
pip install starlette>=1.0.1
```

この脆弱性は、AIエージェントが本番環境に展開される際のセキュリティ管理体制の重要性を再認識させるものとなった。

---

## Shift：「無料ホームクリーニング」でロボット学習データを収集

### 物理世界のデータ収集の難しさ

AI画像やテキストと異なり、ロボットが物理世界を扱うためには空間、運動、力、摩擦、素材感といった[intuition]が必要だ。これが、家事労働（皿洗い、掃除、衣類折り畳みなど）を機械に教え込むのが難しい理由だ。

Web上のテキストや画像、视频は大規模に取得できたが、物理世界はそうはいかない。品質の高いデータへのアクセスが大きくボトルネックとなっている。家事労働は[l]人間の直觉的に执行できるため、明確にコード化するのが困难だ。

### Shiftのアプローチ：Magic Hatによる第一人称映像

AI訓練スタートアップのShiftは2026年5月、ニューヨークの家事労働を無料清掃するサービスを開始した。清掃に来た作業者は「Magic Hat」と呼ぶカメラ付き帽子を被り、実際の動きを第一人称で記録する。録画した[l]映像はロボット訓練に使用される。

ユーザーは無料で[l]公寓を清掃してもらい、Shift側は[l]訓練データを取得する。双方にとってメリットがある[l]仕組みだ。[l]プライバシー保護として、面容、個人情報映り込み、ID映り込みは[l]自動で[l]ぼかしが入る。

この[l]手法は、Motion Primitiveデータを[l]収集するのではなく、実際の家务労働の综 合的な[l]文脈を捉えようとしている。ロボットが[l]清掃[l]人員の手の動きから、清掃[l]顺序の[l]計画、力量の[l]调节、纷乱した[l]环境への[l]適応まで[l]学べる[l]可能性がある。

---

## AIエージェントの信頼性とProduction展開の課題

本周、VentureBeatはAIエージェントがProduction[l]環境[l]での「信頼性[l]問題[l]」に立ち向かっている[l]様子を[l]報道[l]した。LLM[l]の[l]性能 alone Agents[l]が[l]成功[l]する[l]かどうかを[l]判断[l]するには[l]十分[l]ではなく、長時間[l]実行の[l]AI[l]ワーク[l]フローには[l]次[l]が[l]必要[l]だ：

- クラッシュ[l]からの[l]回復[l]能力
- 状態[l]の管理[l]と[l]維持[l]
- 失敗[l]時の[l]自律的[l]恢复[l]
- Inference[l]コスト[l]の[l]制御[l]
- APIや[l]ツール、企业[l]システム[l]間の[l]調整[l]

この[l]問題は[l]、[l]モデル[l]の[l]性能[l]を[l]上げ[l]れば[l]解決[l]できる[l]と[l]考え[l]て[l]いた[l]アプローチ[l]から[l]の[l]転換[l]を[l]迫[l]る[l]もの[l]となって[l]いる[l]。

---

## 参考リンク

- [Millions of AI agents imperiled by critical vulnerability in open source package (Ars Technica)](https://arstechnica.com/information-technology/2026/05/millions-of-ai-agents-imperiled-by-critical-vulnerability-in-open-source-package/)
- [This AI startup will clean your home for free to train future robots (The Verge)](https://www.theverge.com/ai-artificial-intelligence/939765/ai-training-data-startup-shift-free-cleaning)
- [Botnet of more than 17 million devices dismantled (Ars Technica)](https://arstechnica.com/security/2026/05/botnet-of-more-than-17-million-devices-dismantled/)

---

*（本文の情報は2026年6月1日時点のものです）*
