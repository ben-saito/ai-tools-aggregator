# AI開発最新ニュース：Project Glasswing、安全性の危機、DeepSeekのAGI最優先戦略

2026年5月23日、AI開発業界は複数の重要な転換点を迎えた。AnthropicがProject Glasswingを通じてパートナー企業にClaude Mythos Previewを提供し、1万を超える重大な脆弱性を発見しながらも、パッチ適用が追いつかない状態を警告した。また、DeepSeekが100億ドルの資金調達に向けて交渉しており、創業者Liang Wenfeng氏がAGI研究を短期利益より優先する方針を投資家に伝えている。本稿ではこれらの最新動向与技术的な意味合いを整理する。

---

## Anthropic × Project Glasswing：バグ発見速度がパッチ適用速度を上回る

Anthropicは現在、Project Glasswingに参加する約50のパートナー企業向けにClaude Mythos Previewを提供している。この取り組みにより、Claude Mythos Previewはシステムクリティカルなソフトウェアから**1万を超える重大な脆弱性**を発見した。

### 発見速度と修正速度の乖離

注目すべき点は、発見された脆弱性の数そのものよりも、その処理速度である。Anthropicの警告によれば、バグが修正される速度よりも発見される速度の方が早く、**高リスクの移行期間**が発生しているという。

これは実務上の大きな課題だ。発見された脆弱性が放置される期間は、攻撃者にとって都合の良いウィンドウとなる。Anthropicは自らを例外視しておらず、「どの企業も悪用防止に十分なセーフガードを構築していない」と認めている。

### 開発者への影響

**コードセキュリティの前提が変わる。** AI支援開発では、提案されるコードスニペットに潜む脆弱性を人間がすべて検出することは現実的に不可能に近い。AI生成コードに対する自動的な脆弱性スキャンと、従来のワークフローの再见が必要になっている。

プロジェクトGlasswingのパートナー企業という枠組みは、エコシステム全体のセキュリティ評価という意味で興味深い動きであり、Anthropicが单纯なモデル提供者からセキュリティの評価機関へと変わる意图とも解读できる。

---

## DeepSeek：100億ドル資金調達とAGI-firstの投資方針

The Decoderが伝えたところによれば、DeepSeekは約**100億ドル**の資金調達に向けて動いており、企業評価額は約**450億ドル**に達する見込みだ。

### AGI研究優先の経営方針

注目すべきは、創業者Liang Wenfeng氏が投資家に伝えるメッセージの内容だ。同氏は**「AGI研究を短期利益より優先する」** 这一方針を明確にしている。これは、AI企業を取り巻く中で、利益率や収益性での基準が支配的になっている現在の市場環境において、異例なコミットメントだ。

DeepSeekのこの方針は、同社が単なるApplied AI企業ではなく、基礎研究組織としての性格を维持しようとしていることを示唆している。450億ドルの評価額は、研究開発への継続的な投資を正当化するだけの規模であり、投資家の一部はこの長期戦略に同意している。

### 業界に与える影響

DeepSeekのAGI-first姿勢は、同社を取り巻く投資家たちの期待と紧张を生む可能性がある。AGI研究は短期的な収益に反映されにくく、450億ドルという評価額をメンテナンスするには、いずれ商業的な成果を示すことが必要になる。Liang Wenfeng氏のコミットメントがどこまでの期間許容されるかが、次の焦点となる。

---

## OpenAI：新ツール推出と財務報告の落差

### Codex向け「Appshots」機能

OpenAIはMac版のCoding assistant「Codex」に新機能「Appshots」を追加した。これにより、Macの任意のアプリウィンドウの内容をボタン一回でCodexに送り、コンテキストとして利用できる。

この機能は、IDE内のコード片だけでなく、メール、文書、ブラウザの内容などを作成する技術的な上下文を大幅に扩充する。開発者がこれまでは特定のファイルやコードベースだけを共有していたのに対し、アプリケーション全体のコンテキストを渡すことができるため、より正確なコード生成・修正が可能になる。

### PowerPoint用ChatGPTプラグイン

OpenAIはChatGPTのPowerPoint用プラグインも公开发表した。Beta版として、提供されたノートや文書、画像からプレゼンテーションを作成し、既存のスライドも編集できる全球向けサポートを開始する。

注意的是、OpenAIは「重要なデッキは使用する前に保存しておくこと」と警告している。これは生成AIが既存のコンテンツを誤って上書き・削除してしまう危险性があることを示唆している。

### 財務状況：1ドルにつき1.22ドルの損失

OpenAIの2026年第1四半期の財務狀況も明らかになった。収益は約**57億ドル**だが、株酬報酬を除いた調整後でも**1ドルにつき1.22ドルの損失**が発生しており、調整後営業利益率は**-122%**で、依然として巨額の损失を続けている。

この数字は、AI企業の収益化がまだ道半ばであることを示している。57億ドルの収益でも埋められない损失は、Computingコストと研究開発の规模的を示しており、AI商品の収益性を上げるための次の打ち手が待たれる。

---

## Cloudflare：AIによる中間管理層の替代

Cloudflare CEO Matthew Princeは、全従業員の約20%削減を実施しながらも、「AIが中間管理職とコンプライアンス 역할을替代している」と主張した。

### 数字に裏付けられない主張

Cloudflareの収益は過去最高を更新しており、人员削減の正当化として「AIによる替代」を挙げるのは、唐突な印象を与える。同社の収益が最高を更新する一方で、人员を削減する这一行動は、効率性改善のための伝統的なコスト削減の色が濃い。

同会の従業員数は2年間で40%増加しており这次的削減は、その間の採用過多を正規化するものだとの見方もある。「AI」による这一表現は、コスト削減の印象を柔らかくするためのメッセージとして使われている疑いが濃い。

---

## 参考リンク

- [Anthropic warns Claude Mythos Preview finds bugs faster than developers can patch them](https://the-decoder.com/anthropic-warns-claude-mythos-preview-finds-bugs-faster-than-developers-can-patch-them/)
- [Deepseek reportedly prioritizes AGI research over quick profits despite billions in funding](https://the-decoder.com/deepseek-reportedly-prioritizes-agi-research-over-quick-profits-despite-billions-in-funding/)
- [OpenAI Appshots turn any Mac window into context for Codex](https://the-decoder.com/openai-appshots-turn-any-mac-window-into-context-for-codex/)
- [OpenAI launches a ChatGPT Powerpoint plugin](https://the-decoder.com/openai-launches-a-chatgpt-powerpoint-plugin-and-warns-it-might-accidentally-delete-your-content/)
- [OpenAI burned through $1.22 per dollar earned](https://the-decoder.com/openai-burned-through-1-22-per-dollar-earned-even-after-stripping-out-stock-based-compensation/)
- [Cloudflare CEO Prince says builders and sellers are safe but AI is coming for the measurers](https://the-decoder.com/cloudflare-ceo-prince-says-builders-and-sellers-are-safe-but-ai-is-coming-for-the-measurers/)

---

*（本文の情報は2026年5月23日時点のものです）*