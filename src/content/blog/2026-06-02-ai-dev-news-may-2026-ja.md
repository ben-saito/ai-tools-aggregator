---
title: "2026年5月AI開発ニュース振り返り：GitHub Copilot新料金体系、Starlette脆弱性「BadHost」、AI依存するコーダーたち"
description: "2026年5月末のAI開発関連ニュースを振り返る。GitHub Copilotのトークンベース請求書をめぐる開発者の不満、Starlette「BadHost」脆弱性问题、AIツールなしでは働きたくないコーダー急増について。"
publishedAt: "2026-06-02T00:00:00+09:00"
author: "AI Tools Hub 編集部"
category: "ニュース"
tags: ["GitHub Copilot", "セキュリティ", "脆弱性", "Starlette", "FastAPI", "AIコーディング"]
featured: false
lang: "ja"
---

# 2026年5月AI開発ニュース振り返り：GitHub Copilot新料金体系、Starlette脆弱性「BadHost」、AI依存するコーダーたち

2026年5月末、AI開発者を取り巻く環境が激変している。Microsoft傘下のGitHub Copilotが新たなトークンベースの料金体系を発表して開発者たちの反発を招く一方、Python Webフレームワーク「Starlette」に深刻な脆弱性「BadHost」が発見され、世界中のAIエージェントが危機にさらされている。さらに、AIツールなしでは働きたくないコーダーが増加を続ける现状について、主要ニュースを振り返る。

---

## GitHub Copilot、新しいトークンベース請求書を巡り開発者と対立

2026年5月30日、GitHub Copilot、従来の月額制からトークンベースの新しい請求書に切り替え。この変更に開発者たちが強く反発している。

### 「冗談だ」：開発者たちの反応

新しい料金体系では、コード補完やチャット機能が消費したトークン数に応じて請求される。従来の月額制に慣れた開発者们からは「What a joke（一体何だよこれ）」「Copilotの黄金時代が終わった」といった声が上がっている。

TechCrunchの報道 따르면、従来の固定月額プラン（Individual $10/月、Business $19/席/月相比べ、使用量に応じた変動制の導入により、月額 costs が大幅に上昇する可能性がある，尤其是高频使用者にとって。

### 開発者への影響

- **コスト予測の困難化**: 使用量に応じた変動制により、月々の請求額を事前に予測しにくくなった
- **利用抑制压力**: コスト管理のため、AI assistance の使用頻度を下げる开发者も出ている
- **代替サービスへの移行検討**: CursorやCodium AIなど代替ツールへの切り替えを検討する声が上がっている

---

## Starlette脆弱性「BadHost」：325億ダウンロードの危機

2026年5月26日、Security研究者のDaniel Goodin家が、Python Webフレームワーク「Starlette」に存在する深刻な脆弱性「BadHost」（CVE-2026-48710）を公开发表した。

### 脆弱性の概要

**Starlette**は、FastAPIやvLLM、LiteLLMなどの広く利用されているPythonフレームワークの基盤となっているOSS。开发者によると、週間ダウンロード数は**3億2500万回**に達する.

BadHostは、ASGI（Asynchronous Server Gateway Interface）実装の脆弱性で、firewall設定が不適切なシステムに対して-trivial（比較的簡単に）な搾取が可能。攻撃者はこの脆弱性を利用し、MCP（Model Context Protocol）サーバーに储存された認証情妇女へアクセスできる。

### 影響を受けるシステム

- **FastAPI**: 世界中で広く利用されているAPIフレームワーク
- **vLLM**: 高性能なLLM推論エンジン
- **LiteLLM**: 大規模言語モデル调用の abstractions レイヤー
- **その他Starletteに依赖する数千のパッケージ**

MCPサーバーは、AI agentsが外部システム（データベース、Email、カレンダーなど）に接続するための認証情報を保存しているため、攻击者にとって特に価値のあるターゲットとなる。

### 应对措施

Starlette **1.0.1以降**へのバージョンアップが推奨されている。また、fir ewall設定の見直しと、MCP 서버へのアクセスの適切な制限も重要。

---

## AIなしでは働きたくない：コーダーの新趋势

2026年5月29日、TechCrunchが伝えたところによれば、AIコーディングツールなしでは働きたくないとするコーダーが増加続けている。

### 研究者の警告

AIがコーダーの生产力向上を支援する一方で、必ずしもコードの品質向上につながらない可能性があると研究者は警告する。AI生成コードをそのまま使用することで、潜在的なバグやセキュリティの問題が入り込むリスクがある。

### 現場の声

- 「AIツールがないと同僚と比較して生産性が30%低下する」
- 「AI assistance なしのコーディングは時代錯誤だ」
- 「AI不使用主义の恢复で自身の市場価値が低下することを忧虑」

### 専門家からの警鐘

の一部研究者や経験豊富な開発者は、AI依存度の増加が、長い目で見程序员のスキル向上を损なう可能性を指摘している。特に基础的なコーディング能力の衰え、AI破绽への感受性の增加が 우려されている。

---

## まとめ

2026年5月は、AI開発者を取り巻く環境が大きく变动した：

| テーマ | 主なポイント |
|--------|-------------|
| **GitHub Copilot新料金** | トークンベース式への転換、开发者たちの不満高まる |
| **BadHost脆弱性** | Starlette系フレームワークに深刻な脆弱性、立即アップデートが必要 |
| **AI依存のコーダー** | AIなしでは働けない现象增加、スキル向上への影響が問題に |

AI技術の発展と並行して、セキュリティリスク、成本管理、开发者スキルへの影響など、様々な課題が浮上している。开发者としては、便捷性の向上と引き換えに、これらの課題にもを意識して行动することが求められそう。

---

## 参考リンク

- [GitHub Copilot pricing changes spark developer backlash (TechCrunch)](https://techcrunch.com/2026/05/30/what-a-joke-github-copilots-new-token-based-billing-spurs-consternation-among-devs/)
- [Millions of AI agents imperiled by critical vulnerability (Ars Technica)](https://arstechnica.com/information-technology/2026/05/millions-of-ai-agents-imperiled-by-critical-vulnerability-in-open-source-package/)
- [Coders refusing to work without AI (TechCrunch)](https://techcrunch.com/2026/05/29/coders-are-refusing-to-work-without-ai-and-that-could-come-back-to-bite-them/)
- [Starlette Security Advisory](https://github.com/encode/starlette/security)
- [CVE-2026-48710 (BadHost)](https://nvd.nist.gov/vuln/detail/CVE-2026-48710)

---

*（本記事の情報は2026年6月2日時点のものです。最新情報は各公式サイトをご確認ください）*
