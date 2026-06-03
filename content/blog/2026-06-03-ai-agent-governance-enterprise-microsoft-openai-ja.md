# AI開発週報：MicrosoftがAgent制御の標準化挑む、OpenAI Codex和白物職場へ進出

2026年6月上旬、AI業界は「エージェントの治理」と「Enterprise導入」の二本を軸に急速な動きを見せている。MicrosoftはAIエージェントの行動制御に関するオープンソース仕様「Agent Control Specification (ACS)」を発表し、OpenAIはCodexに白FCFFF和白物職場特化 plugin詰め合わせを追加した。米政府も而行きのAI規制方針を示し、岐路に立つAI産業の現状浮かび彫りになっている。

---

## Microsoft、ACSでAIエージェントのガバナンス標準化に動き

Microsoftは6月2日、AIエージェントの行動を制御するためのオープンソース仕様「**Agent Control Specification (ACS)**」をGitHubで公開した。LangChain、OpenAI Agents SDK、Anthropic Agents SDK、AutoGen、CrewAI、Semantic Kernelなど主要なエージェントフレームワーク全てに対応するSDKとして提供される。

ACSの核心は、ポリシー駆動型の制御レイヤーだ。開発者やコンプライアンス、セキュリティチームがJSON/YAML形式でポリシーを記述しエージェントに添付することで、異なるフレームワークや環境間で同一のガバナンスを適用できる。

```yaml
# ACSポリシーの例（概念）
policy:
  - action: block
    when:
      tool: "send_email"
      condition: "contains_attachment == true"
      require_human_approval: true
  - action: allow
    when:
      tool: "read_calendar"
      log: true
```

ポリシーはエージェントのワークフローにおける4つの「interception point」でチェックされる：

- **入力受信前**：プロンプトやユーザー入力に対するフィルタリング
- **ツール呼び出し前**：実行されるアクションの許可判断
- **ツール実行後**：外部APIやデータベース操作の結果検証
- **最終応答送信前**：出力内容のaudit trail生成

MicrosoftのOmar Khan VP（Scout担当）は、「今、開発者はシステムプロンプトに指示を書いたり приложенияコードにカスタムチェックを書いたり、分類器を挟んだりと、非効率なやり方でガバナンスをしている。それがフレームワークごとにバラバラで監査も難しい」と語っており、ACSは「共通治理レイヤー」として機能する。

対応プラグイン一覧：
- LangChain / LangGraph
- OpenAI Agents SDK
- Anthropic Agents SDK
- AutoGen / AutoGen Studio
- CrewAI
- Semantic Kernel
- Microsoft.Extensions.AI
- MCP (Model Context Protocol) tools

---

## OpenAI Codex、白物職場へ本格進出：6つの業種pluginとSites機能

OpenAIは6月2日、Codexに対する大型アップデートを行い、白沈阳市労働環境への本格展開を表明した。Codexの週間アクティブユーザーは500万人を超え、昨年のデスクトップアプリ発売時から6倍以上成長している。興味深いのは、开发者之外の「知識労働者」がユーザーの約20%を占め、3倍以上の成長率を示している点だ。

これに合わせ、以下の6つの業種特化pluginが発表された：

| Plugin | ユースケース |
|--------|-------------|
| **Data Analytics** | データセット探索、SQL生成、ビジュアライゼーション |
| **Creative Production** | プレゼンテーション、文書、D&D творЧЕСКИЕ 작업 |
| **Sales** | 客户管理、パイプライン分析、コード生成 |
| **Product Design** | 要件整理、プロトタイピング、Figma連携 |
| **Equity Investing** | 財務分析、SEC文書解析、投资判断支援 |
| **Investment Banking** |  моделинг、M&A分析、pitch deck生成 |

各pluginは業種特有の integration、instructions、contextをバンドルしており、ゼロからのカスタマイズ不要で実用的な起点を提供する。

### Sites機能：Codexの出力をインタラクティブな 웹사이트としてホスティング

Codexの新機能「**Sites**」では、エージェントの作成物を静的ファイルではなくホストされたインタラクティブ网站として出力できる。Wix、Base44、Replit、Lovable、Figma、Emergentとの提携を経て、OpenAIはパートナーエコシステムの拡大を表明している。

Annotations機能 также позволяетユーザーはファイルやドキュメント内の特定部分を明示的に指定でき、コマンドのコンテキスト精度が向上する。

---

## Uber、AI予算を4个月で消化し월 $1,500の个人限额導入

Uberは6月2日、従業員のAI使用に対する月間上限（月额$1,500）を導入したことをBloombergが伝えた。4。同社のCTOが4月に「年間AI予算を4个月で使い切った」と明かしており、さらに従業員は「できるだけ多くAIを使え」と勸められ、内部的leaderboardで競争的に利用状況がランキングされていた。

COOのAndrew Macdonald氏もポッドキャスト出演時、「AI使用と新機能開発の因果関係を描くのは非常に難しい」と述べており、AI投資対効果への疑念が社内で高まっていることを示唆した。

この動きは、科技業界全体のAI ROI問いの潮流と一致する。Enterprise級AI導入のコストは依然として嵩み、実質的な収益貢献の証明が求められている。

---

## Google、Androidにディープフェイク電話検出機能を提供開始

Googleは6月2日、Android 12以上のデバイス向けに「**Fake Call Detection**」功能的を開始すると発表した。Pixelデバイスからを展開し年全球に拡大する。

仕組みは「機器間のデジタルハンドシェイク」。Phone by Googleを使う2つのデバイス間で通话時に相互に確認信号を送り合い、発信元の真正性を検証する。スキャマーがtrusted contactになりすました場合、確認信号が欠落し、リアルタイムで警告が displayedされる。

これはRCS (Rich Communication Services)の上で構築されており、Googleは他のアプリや企業にもこの技術を採用呼びかけている。

---

## 米国AI規制：Trump大統領が30日前の自主的レビュー制度に署名

Trump大統領は6月2日、強力なAIモデルを公開前に政府に提出してレビューを求めるexecutive orderに署名した。過去の草案では90日前レビューが求められていたが、産業からの反発を受け30日前の自主的レビューに変更された。

```
「この節は、新しいAIモデル（コントロールモデルを含む）の開発、公開、配布に対する
義務的な政府のライセンス、事前クリアランス、許可要件を認めるものとして解釈しては
ならない。」
```

つまり、レビューは完全に任意。AI企業と中国政府との競争優位を維持しつつ、多少なりとも安全保障上の懸念に対応する玉突き和政治的な解決策となっている。

---

## 参考リンク

- [Microsoft Scout - OpenClaw-inspired personal assistant](https://techcrunch.com/2026/06/02/microsoft-launches-scout-an-openclaw-inspired-personal-assistant/)
- [Microsoft ACS - Agent Control Specification](https://techcrunch.com/2026/06/02/microsoft-offers-devs-a-better-way-to-control-ai-agent-behavior/)
- [OpenAI Codex enterprise expansion with Sites and role plugins](https://techcrunch.com/2026/06/02/openai-launches-new-codex-tools-for-white-collar-work/)
- [Uber caps employee AI spending after blowing through budget in 4 months](https://techcrunch.com/2026/06/02/uber-caps-employee-ai-spending-after-blowing-through-budget-in-four-months/)
- [Google fake call detection for Android](https://techcrunch.com/2026/06/02/google-rolls-out-fake-call-detection-to-protect-against-ai-deepfake-impersonation-scams/)
- [Trump signs narrower AI executive order after industry objections](https://techcrunch.com/2026/06/02/trump-signs-narrower-executive-order-on-ai-oversight-after-industry-objections/)

---

*（本文の情報は2026年6月2日時点のものです）*