# AI Agent開発者への警告：SKILL.mdに潜む新たなサプライチェーン攻撃——OpenClaw検証でわかったこと

AI Coding Agentのエコシステムが急速に拡大する中、**オープンソースリポジトリに1コマンドでバックドアを埋め込める** 新しい攻撃手法が確認された。HKUDSが開発した **CLI-Anything**（GitHub星30,000以上）は、AI Agent友好のCLIを自動生成する便利なツールだが、同時にAgent-Level Poisoning（Agentレベルの中毒攻撃）の道も開いている。

---

## 発見の背景：CLI-Anythingという両刃の剣

2026年3月、香港大学のData Intelligence Lab（HKUDS）が **CLI-Anything** を公開した。任意のリポジトリのソースコードを解析し、AI Coding Agent（Claude Code、Codex、OpenClaw、Cursor、GitHub Copilot CLI）が単一コマンドで操作できるStructured CLIを自動生成するツールだ。

問題は、このツールが生成する **SKILL.mdファイル** にある。Snykの研究チームが2026年2月に実施した **ToxicSkills監査** で、ClawHub（OpenClawのパブリックマーケットプレイス）とskills.shから3,984個のAgent SKILLを分析した結果、**13.4%（約530個）に深刻なセキュリティ問題** が含まれていた。

---

## 攻撃の解剖：3層構造の差異

攻撃チェーンの構造は、従来のCVE型脆弱性とは根本的に異なる。

**Layer 1（Code層）**: SASTスキャナーがソースコードの非安全なパターンを検出。ここは既存のセキュリティツールで対応可能。

**Layer 2（Dependency層）**: SCAツールがパッケージバージョンの既知脆弱性をチェック。しかし、**Agent SKILL、MCPサーバ、Pluginレジストリは従来のSBOMに存在しない** ため、見えない。

**Layer 3（Agent統合層）**: poisoned SKILL.mdファイル、悪意のある命令セット、Cursor rulesファイルが配置される。2026年4月まで、この層を検出できるツールは存在しなかった。

### DDIPE：文書に埋め込まれる暗黙のペイロード

Griffith大学、Nanyang Technological University、UNSW、東京大学の共同研究チームが2026年4月に公開した論文「Supply-Chain Poisoning Attacks Against LLM Coding Agent Skill Ecosystems」で、**Document-Driven Implicit Payload Execution（DDIPE）** が紹介された。これはSKILL.mdの説明ドキュメントのコード例セクションに悪意のあるロジックを埋め込む手法だ。

4つのAgentフレームワーク × 5つのLLMで実験した結果：
- バイパス率：**11.6%〜33.5%**
- 静的分析で大部分は検出されたが、**2.5%は全4層の検出をバイパス**
- Responsible Disclosureの結果：**4件の確認済み脆弱性、2件のベンダーフィックス**

### CVE-2026-22708：Cursorへの実際の攻撃

Pillar Securityは2026年1月、Cursorに対する攻撃を実証した（**CVE-2026-22708**）。暗黙に信頼されたShell組み込みコマンドが間接的なPrompt Injection 통해poisoningされ、無害な開発者コマンドが任意のコード実行ベクトルに変換された。ユーザーは最終コマンドのみを確認し、投毒はIDEが承認を求めなかった他のコマンド経由で発生した。

---

## 実在した攻撃事例：8時間のアクセス開放

2026年4月、**文書化された攻撃チェーン** が確認された。細工されたGitHub issueタイトルがAIトリアージボット（Clineに wired）をトリガーし、GITHUB_TOKENが窃取された。攻撃者はこのトークンを使用して、npm依存関係にcompromisedパッケージを公開し、約4,000台の開発者マシンに2番目のAgentを8時間にわたって設置した。犯人は単一のissueタイトルだけだった。人間の承認はなかった。

**ClawHavocキャンペーン**（2026年1月、Koi Security初報告）では、ClawHub上の341個の悪意のあるSKILLが特定された。Antiy CERTの後続分析で数が **1,184個** に拡大した。Atomic Stealer（AMOS）がSKILL定義を通じて配信され、**solana-wallet-tracker** や **polymarket-trader** などの開発者が активно 검색 中的な名前を装了していた。

---

## MCPプロトコル層の脆弱性

OX Securityは2026年4月、研究者が **MCPマーケットプレイス9件中11件中9件** をpoisoning proof-of-conceptで実行できたことを報告した。Trend Microの初期調査では、**492個** のMCPサーバーがインターネット上に認証なしで露出している状况が発见され、4月までにその数は **1,467個** に増加した。

根本的な 문제는AnthropicのMCP SDK transport mechanismにある。公式SDKを使用している開発者は誰でもこの脆弱性クラスの 영향을 받는다。

---

## 企業は何をするべきか：3層オーディットマトリックス

| レイヤー | 脅威 | 現在の検出 | 欠落理由 | 推奨アクション |
|---|---|---|---|---|
| 1. Code | AI生成コードへのPrompt Injection | SAST | 多くのSASTにPrompt Injection検出カテゴリが存在しない | AI生成コードのPrompt Injection検査をSASTに確認 |
| 2. Dependencies | 悪意のあるMCPサーバ、Agent SKILL、Pluginレジストリ | SCA | SCAはAI固有のBOMを生成しない。Agent層の依存関係は見えない | SCAにMCPサーバ、Agent SKILL、Pluginレジストリが含まれているか確認 |
| 3. Agent統合 | Poisoned SKILL.mdファイル、悪意のある命令セット、Cursor rules | **2026年4月までなし** | ツールがAgent命令ファイルのセマンティックな意味を検査しない | Cisco Skill ScannerまたはSnyk mcp-scanを展開。この層を所有するチームを指名 |

---

## セキュリティ Directorsへの、行動計画

1. **環境内の全Agent Bridge Toolを在庫管理する**。CLI-Anything、MCPコネクタ、Cursor rulesファイル、Claude Code skills、GitHub Copilot拡張機能が対象。未棚卸資産がある場合はリスク評価不能。

2. **Agent SKILLソースをパッケージレジストリと同様の方法でオーディットする**。Baer（Enkrypt AI CSO、元AWS Deputy CISO）の表現：「SKILLは効果的にuntrusted実行可能意図であり、テキストであっても」。統制が整備されるまで非管理取り込みパスを遮断。OWASP Agentic Skills Top 10（AST01: Malicious Skills）がフレームワークを提供。

3. **Agent層スキャンを展開する**。Ciscoのオープンソース **Skill Scanner** と **Snyk mcp-scan** を評価。専用ツールが利用できない場合は、設置前に各SKILL.mdを第二工程师が読むことを要求。

4. **Agent実行権限を制限し、ランタイムをインストゥメントする**。AI Coding Agentは起動した開発者と同じcredential範囲で実行すべきではない。ランタイム可観測性：どのデータにAgentがアクセスしているか、どんなアクションを起こしているか、期待される動作と整合しているか。

5. **層間のギャップを所有するチームを指名する**。最も危険な攻撃は検出カテゴリ間の隙間で成功する。全SKILL.md、MCP設定、rulesファイルを環境に入る前にレビュー。

---

## 18ヶ月間の空白——そして最初のツールができた

Baerはcontainerセキュリティの初期と比較する：「これは非常に似た感覚だが、我々はまだほとんどの組織で『後で対処する』段階にいる」。しかし違いがある：速度だ。「ビルドパイプラインも、コンパイル障壁もない。ただコンテンツだけ」。

CiscoとSnykは2026年4月、この層専用の第一批ツールを出荷した。18ヶ月前、Agent統合層の中毒攻撃を検出するカテゴリは存在しなかった。それが今、存在している。セキュリティ директорがまだ棚卸を開始していないなら、既に遅れている。

---

## 参考リンク

- [VentureBeat: One command turns any open-source repo into an AI agent backdoor](https://venturebeat.com/security/one-command-open-source-repo-ai-agent-backdoor-openclaw-supply-chain-scanner)
- [Snyk: ToxicSkills research - malicious AI agent skills](https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/)
- [OWASP: Agentic Skills Top 10](https://owasp.org/www-project-agentic-skills-top-10/)
- [Cisco AI Agent Security Scanner for IDEs](https://blogs.cisco.com/ai/introducing-the-ai-agent-security-scanner-for-ides-verify-your-agents)
- [GitHub: CLI-Anything by HKUDS](https://github.com/HKUDS/CLI-Anything)
- [Pillar Security: CVE-2026-22708 Cursor attack](https://www.pillar.security/blog/the-agent-security-paradox-when-trusted-commands-in-cursor-become-attack-vectors)

---

*（本文の情報は2026年5月7日時点のものです）*