# AI最前線：JumperのAnthropic電撃移譲、Sequent安全スタートアップ、 Sakana Fugu挑むFable5

2026年6月中旬のAI業界は、人材の流動化安全性研究の組織改編、そして中国企业の高速推論参入など、複数の構造変化が同時に進行している。本稿では今週注目のトピックを横断的にまとめる。

---

## DeepMindのノーベル賞科学者John Jumper、Anthropicへ電撃移譲

AlphaFoldで2024年にノーベル化学賞を受賞した**John Jumper**が、6月20日にGoogle DeepMindからAnthropicへの跳槽を表明した。JumperはXに投稿し、DeepMind CEO Demis Hassabisが「博士号取得からわずか6週間後にAlphaFoldチームを任せるという本当の賭けに出てくれた」と感謝の手向けている。

Jumperの移動先はAnthropic——米国政府による最新モデル（Fable 5・Mythos 5）へのアクセス制限が施行された直後であり、業界からは「米国規制下で最も価値ある人材を獲得した」という見方が優勢。Google側のコーディングツール事業化が難航する中、Character AI共同創業者のNoam Shazeerも最近の跳槽組と異なる文脈で注目される。

**開発者視点:** AlphaFoldの開発者は生物学的構造予測の产业化に深く関与してきた。Anthropicが生命科学分野でのパートナーシップを拡大する意図があるなら、Jumperの採用は戦略的な一手となる。

---

## 「Alignmentは軌道にない」——SequentがAI安全性研究の新規組織を発足

Jack Clark氏配信の**Import AI 461**號で取り上げられた新たな動きとして、英国AI Security Institute（ASI）のAlignmentチームと、Timaeusが手を組み**Sequent**という非営利研究組織を創設。「人工超知能（ASI）は今後数年内に出るかもしれないが、それを正しくAlignmentする準備が間に合うかは不透明」と公式声明で坦言している。

主な研究方向:
- **Scalable Oversight**: 大規模・長周期タスクで観察されるAlignmentが、制御外の環境に一般化することを principled に確信する方法
- **Learning Theory × Personas**: 訓練中に変えられる変数を知ること（knowing knobs）と、scalable oversightで変更幅を特定すること（setting knobs）の組み合わせ
- **到達可能均衡（Reachable Equilibria）**: Scalable Oversight手法が収束する均衡のタイプ予測

Sequentは今後2〜3年で40〜80名の正職員を採用し、初期 목표로1億〜1.5億ドルの資金調達を目指す。「理想的 世界では安全を理論的に証明してから超知能を構築するが、現実はその理想に遠く及ばない」——組織のCold Startとして印象的な問題設定である。

---

## Samsung、南韓の全社員にChatGPT Enterprise + Codexを展開

The Decoderの報道によれば、Samsung ElectronicsがOpenAIの**ChatGPT Enterprise**と**Codex**を南韓の全社員およびDevice eXperience（DX）部門の世界規模社員に一斉展開。OpenAIによれば、Codexの南韓アクティブユーザーは2026年2月比で**約800%増**という急成長を見せている。

Codexは元来開発者向けコード生成・レビューンツールだったが、OpenAIの分析では非開発者も内部ツール構築やワークフロー自動化に使用途が拡大しており、「週500万人以上がCodexを利用」という規模に成長。SamsungはOpenAIへのメモリチップ供給企業としても関係が深く、LG Electronics・Krafton・Toss・ソウル大学なども既に顧客に名を連ねる。

**開発者視点:** 企業内コード生成ツールの標準化が加速している。Codex EnterpriseのAPI統合や利用料体系の最適化は、日本のSIer/CTO層も注目すべきテーマである。

---

## Sakana AI「Fugu」——複数LLMをOrchestrationしAnthropic Fable5に比肩

東京ベースのAIスタートアップSakana AIが**Fugu**を発表。単一のLLMとしてユーザーからは見えるが、内部では複数のモデル（自身 copias포함）を動的に呼び出すマルチLLMオーケストレータである。

| モデル | 主な用途 | ベンチマーク |
|--------|----------|--------------|
| Fugu Base | 低レイテンシ重視の日常的コーディング・チャット | 汎用 |
| Fugu Ultra | 複雑な多段階問題、AI研究・論文再現・セキュリティ分析 | Anthropic Fable 5 / Mythos Preview と同等 |

Sakanaは以前にもオーケストレータ構成でコーディングタスクに強い結果を残しており这次は「基盤モデルとしてFugu自体がLLMである」点が新機軸。Privacy・コンプライアンス要件向けの Teams バージョンも提供予定。

---

## AWS、AI Agentの「ビジネスコンテキスト欠如」と「セキュリティギャップ」の2問題を解消

AWS Summit New Yorkで、AWSがAI Agent向け2サービスを発表。

**AWS Continuum**（セキュリティ脆弱性対応）:
- コード脆弱性の検出→優先順位付け→検証→修正推奨までフルライフサイクルをカバー
- Anthropic Claude Mythosなどの Specialized Security Model を活用し、攻撃経路の特定を高速化
- オープン脆弱性リストのスキャンと新規脆弱性の自律的発見を組み合わせ、biz context で順位付け

**AWS Context**（ナレッジベース）:
- Agentがビジネスコンテキスト缺乏によりタスクを誤る問題に対処
- 組織固有の業務知識・制約条件をAgentに提供

**開発者視点:** 現行Agent実装の2大ボトルネック（セキュリティ・文脈理解）にAWS公式が対処策を出した意義は大きい。LangChain/LitellM などのOSSフレームワークとの 상호運用性值得关注。

---

## Signal President Meredith Whittaker「AIチャットボットはあなたの友人ではない」

Signal总裁Meredith WhittakerがBloombergインタビューで、AIチャットボットのプライバシー問題について`**These are not your friends. These are not conscious beings. These are not sentient.**`と痛烈に批判。

Microsoft AI CEO Mustafa Suleyman が「Copilotにクリスマスショッピングを全て任せる」時代の到来を予測したことに対し、Whittakerは「それは複数のアプリケーションに渗透的にアクセスできるシステムであり、Signalの文脈では一種のリバースバックドアに相当する」と指摘。AIアシスタント普及とプライバシー保護の緊張関係が繼續している。

---

## Sam Altman「スケーリング軽視和研究者の世代」——LLM懐疑派に反論

OpenAI CEO Sam Altman氏がStanford大学で、LLM懐疑派（Yann LeCun氏など）に向け「ある世代の研究者がスケーリングの可能性を過小評価し、この分野を引きずり続けた」と反論。Altmanは「LLMは既に一部の領域で人間知性を超えている」と主張し、OpenAIのモデルが「長い間数学者を悩ませてきた数学的予想を反証した」事例を挙げた。

---

## FrontierCode——Cognitionが提示した「本当に難しい」コーディング評価

Cognition（Devin開発元）が新たな困難コーディングベンチマーク**FrontierCode**を発表。最大の特徴はその難度——最も難しい「Diamond」ティアでClaude Opus 4.8が**13.4%**、GPT-5.5が6.3%という結果。

| ティア | Claude Opus 4.8 | GPT-5.5 | Claude Opus 4.7 |
|--------|-----------------|---------|-----------------|
| Diamond (最难) | 13.4% | 6.3% | 5.2% |
| Main | 34.3% | 25.5% | 23% |
| Extended | 51.8% | 44.8% | 43.2% |

評価方法が特徴的: 150タスクがオープンソース開發者によって手工的に選ばれ、コードの正確性＋テスト品質＋スタイル＋リント＋ビルдор-checkboxの複合評価を採用。SWE-Bench（2023年10月導入、現在ほぼ飽和）からすると、次の困難評価セットとして期待大。

---

## Xiaomi、1000トークン/秒のLLM推論——8GPUコモディティノードで

中国Xiaomiが**MiMo-V2.5-Pro-UltraSpeed**を発表。1兆パラメータの標準的なビハインド・ザ・フラグモデルだが、FP4量子化＋DFlash（ブロックレベル投機的デコード）＋Tile AIのTileRTと共同設計により、**8GPUコモディティノードで1000トークン/秒**を達成した。

中国側の輸出規制強化背景下、「より少ないハードウェアでより高い効率を引き出す」アプローチが加速しており、米国の専門ASIC依赖からの脱却意图も読み取れる。

---

## 参考リンク

- [John Jumper LinkedIn/X Announcement](https://techcrunch.com/2026/06/20/nobel-laureate-john-jumper-is-leaving-deepmind-for-rival-anthropic/)
- [Sequent: Scale and Automation for Higher Confidence in Alignment](https://sequenti.ai)
- [FrontierCode — Cognition](https://cognition.ai/frontiercode)
- [Sakana AI Fugu](https://the-decoder.com/?p=36887)
- [AWS Continuum & Context — AWS Summit New York](https://the-decoder.com/?p=36867)
- [Samsung ChatGPT Enterprise rollout](https://the-decoder.com/?p=36896)
- [Import AI 461: Alignment is not on track](https://jack-clark.net/2026/06/15/import-ai-461-alignment-is-not-on-track-frontiercode-and-synthetic-research-interns/)
- [Xiaomi MiMo-V2.5-Pro-UltraSpeed](https://xiaomi.ai/mimo)

---

*本文の情報は2026年6月22日時点のものです。*