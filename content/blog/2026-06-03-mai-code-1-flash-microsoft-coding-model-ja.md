# Microsoft、MAI-Code-1-Flash を発表 — 開発者向け高效的コーディングモデル

2026年6月2日、Microsoftは新しいコーディング特化モデル **MAI-Code-1-Flash** を正式に発表した。137B-A5B（合計1370億パラメータ、アクティブ約50億）のアーキテクチャで、Claude Haiku 4.5 と比較してより高速かつ高精度なコード生成を実現する。GitHub Copilot（Visual Studio Code）のIndividualプランですぐに利用可能。

---

## アジェンダ

- [開発者視点を優先した設計思想](#開発者視点を優先した設計思想)
- [ベンチマーク結果：より賢く、より軽く](#ベンチマーク結果より賢くより軽く)
- [適応的思考によるトークン効率の最大化](#適応的思考によるトークン効率の最大化)
- [GitHub Copilot 統合の詳細](#github-copilot-統合の詳細)
- [技術的詳細まとめ](#技術的詳細まとめ)

---

## 開発者視点を優先した設計思想

MAI-Code-1-Flash の最大の特徴は、**実際の開発ワークフローでの評価を基盤に設計**された点にある。従来のCodingモデルがベンチマーク問題の解决率ばかりを重視するのに対し、MicrosoftはGitHub Copilotの実運用环境中でのagenticコーディングタスク数据集を使用して训练を実施した。

これにより、周辺のツールやシステムとの連携方を学習し、Copilotワークフロー内での「合い」（fit）を最优化する构造になっている。

> "Coding models are most useful when they perform well in the same environment developers use every day."

同モデルの主な特徴は以下の3点：

- **Agentic Coding対応**: 実際の開発者环境中でのagenticタスクに最适合。GitHub Copilot harnessで直接训练。
- **Adaptive Thinking（適応的思考）**: 简单なリクエストには简洁に、复杂な问题には深度深く思考する。问题の难易度に応じて الداخلي思考长度を自动调整。
- **Strong Instruction Following**: 単一ターン・マルチターン、いずれのシナリオでも高性能を維持。

---

## ベンチマーク結果：より賢く、より軽く

Microsoftが同じproduction harnessを使用して测定した結果、以下のデータが公开されている：

| ベンチマーク | MAI-Code-1-Flash | Claude Haiku 4.5 | 差分 |
|---|---|---|---|
| SWE-Bench Verified | **65.3%** | 54.8% | +10.5 |
| SWE-Bench Pro | **51.2%** | 35.2% | **+16.0** |
| SWE-Bench Multilingual | **59.1%** | 44.7% | +14.4 |
| Terminal Bench 2 | **52.8%** | 41.3% | +11.5 |

注目すべきはpass rate向上に加え、**使用トークン数の大幅な削滅**である。SWE-Bench Verifiedでは最难问題解决時に最大**60%少ないトークン**で同等の结果を実現している。

也就是说、「高品质 × 低コスト × 低レイテンシ」が同時に达成されている。

### SWE-Bench Pro での +16ポイント差

特にSWE-Bench Pro（多样で実際のソフトウェア工学タスクを集めたベンチマーク）での+16ポイントの差は、実用上の大きな優位性を示唆する。Claude Haikuが「小型で安い代わりに精度が牺牲になりやすい」に対して、MAI-Code-1-Flashは轻量化的同时に精度も向上させた。

---

## 適応的思考によるトークン効率の最大化

MAI-Code-1-Flash の Internals には **Adaptive Solution Length Control** と呼ばれる机构が搭载されている。これは问题の复杂度に応じてモデルの思考深度を自动で调整する仕組み。

- **简单なタスク**: 早期に実用的な出力を返开始、冗长な解释を省略
- **复杂なタスク**: より深い分析と広いコード变更を実行

この结果、開発者は**より早く有用な出力**を目にすることになり、インタラクティブなワークフローでの体験が滑らかに感じられる。また、レイテンシとコストの两面での利点があり、API费用的にも开发者个人的にもメリットがある。

---

## GitHub Copilot 統合の詳細

MAI-Code-1-Flash は以下の方法でアクセス可能：

1. **Visual Studio Code（Individualプラン）**: モデルビッカーの「auto」ビッカー时に默认で選択
2. **明示的選択**: モデルビッカーから「MAA-Code-1-Flash」を明示的に选择可能

企业プラン（Copilot Business/Enterprise）への展開は 现時点では未确定。

---

## 技術的詳細まとめ

| 項目 | 値 |
|---|---|
| モデル名 | MAI-Code-1-Flash |
| 种类 | コーディング特化LLM |
| アーキテクチャ | 137B-A5B（总共1370億、アクティブ约50億） |
| 训练データ | clean and appropriately licensed data（Microsoft製） |
| 対応ベンチマーク | SWE-Bench Verified/Pro/Multilingual, Terminal Bench 2 |
| 対応環境 | GitHub Copilot（VS Code Individual） |
| 主な優位点 | 高精度 + 60%低トークン消费 + 低レイテンシ |

---

## 参考リンク

- [Introducing MAI-Code-1-Flash - Microsoft AI](https://microsoft.ai/news/introducingmai-code-1-flash/)
- [MAI-Code-1-Flash Model Card (PDF)](https://microsoft.ai/pdf/MAI-Code-1-Flash-Model-Card.pdf)
- [MAI Models - Microsoft AI](https://microsoft.ai/models/mai-code-1-flash/)
- [MAI-Code-1-Flash | Hacker News](https://news.ycombinator.com/item?id=48374466)

---

*（本文の情報は2026年6月3日時点のものです）*