# AI開発ニュースまとめ（2026年7月12日版）：Apple vs OpenAI訴訟勃発、MetaのMuse Image撤回、Hugging FaceCEOインタビュー

2026年7月はAI業界にとって大きな転機を迎えている。AppleがOpenAIを貿易秘密横領で提訴、MetaがInstagramのAI機能をユーザー反発により撤回、そしてOpenAIはChatGPTを家族層に拡大する戦略を打ち出すなど、主要企業動きが慌ただしい。開発者視点で今週の最重要トピックを整理する。

---

## Apple、OpenAIを貿易秘密横領で提訴：24年在籍の元幹部Tang Tanを指名

7月10日（米国時間）、AppleはOpenAIおよびJony Ive氏が率いるハードウェアスタートアップio Productsを相手に、**貿易秘密横領および契約違反訴訟**を米国カリフォルニア州北部地区裁判所に提起した。TechCrunchが報じた。

**訴訟の核心的指控：**

- **Tang Tan**（OpenAI最高ハードウェア責任者）がApple在職24年の間に知った機密プロジェクトコードネームをOpenAIの採用活動で使用
- 採用候補者にAppleのハードウェア部品を面接に持ち込むよう指示
- Appleを退職する従業員にセキュリティ手順を回避する方法を指導
- 未発表製品に関する详细信息を不正に取得

Tang Tan氏はApple退社直前までiPhoneおよびApple WatchのVP of Product Designを務めていた人物。業界ではOpenAIが「アプリではなくAIエージェントに依存するスマートフォン」の開発を計画していると噂されており、Ming-Chi Kuoアナリストも今年4月に 이를 언급했다.

**開発者への影響**：AppleとOpenAIの統合（Apple Intelligence + ChatGPT）が進行中の中、法廷闘争への発展はiOS/macOS向けChatGPT統合の行方に不透明感を生む。OpenAI側のコメントは現時点で得られていない。

---

## Meta、Instagramの「Muse Image」問題を謝罪し機能撤回

Metaは7月10日、Instagramユーザーに反発されたAI機能**「Muse Image」の特定要素を撤回**した。Meta Superintelligence Labsが開発したこの画像生成機能で、ユーザーは公開アカウントを@-メンションでその人物の写真を参照してAI画像を生成できた。

**問題の本質：**

- 該当ユーザーの写真が使用されても通知される仕組みがなかった
- 「同意なく他人的照片をAI学習・生成に使用可能被にする」としてプライバシー侵害の批判が殺到
- TechCrunchも当機能の無効化ガイドを公開
- Puck NewsのDylan Byers氏によるスクープ後、Metaは正式に撤回を表明

Metaの公式声明：「有用なクリエイティブツールを提供し、公開コンテンツがこうして参照されるかどうかをユーザーが制御できるようにすることが目的でした。フィードバックを開き、この機能は狙いに合わなかったことを確認しました」

**開発者視点での教訓**：AI機能の社会実装において、**インフォームドコンセントの設計**がいかに重要かを示す事例。ユーザーが自分のデータが如何に使われたかを把握できる透明性は今や必須要件。

---

## OpenAI、ChatGPTを「家族層」に拡大：35歳以上のユーザーが31%に成長

OpenAIは7月11日、ChatGPT向け家族向け製品マネージャーを募集開始した。San Francisco勤務で、保護者・家族・高齢者を対象とした信任を要するコンシューマープロダクト構築の経験を求めるポジション。

**ユーザー層の変化（Sensor Tower調べ）：**

- **35歳以上の割合**：Q2時点で31%（前年比26%から上昇）
- **18〜24歳の割合**：29%（前年比34%から低下）
- **米国の親によるChatGPT利用率**：約25人に1人（前年比16%から上昇）

OpenAIは今年5月のFidji Simo COO退任（健康上の理由と長期休養）以降、 leadership transition期中にある。それでもChatGPT Workの発売（7月10日）、GPT-5.6ファミリーの本格展開など製品展開は加速している。

---

## Hugging Face CEO：「企業はAIを「借り物」から卒業し、オープンソースへ」

Hugging Face CEO **Clem Delangue**氏へのTechCrunchインタビューで、同氏が Fortune 500の半分がHugging Faceを利用していると明かした。

**Delangue氏が語る企業AI戦略の転換：**

- 企業最初は фронт API（OpenAI、Anthropicなど）から 시작
- スケールするにつれてコストが問題になり、**オープンソースモデルへ移行**
- AnthropicのFableリリース一時停止問題を例に、「大手IT企業への集中」がもたらすリスクを指針
- オープンソースAIは「AIのGitHub」として、Hugging Face Hubでモデル・数据集の共有・ダウンロードが可能

現在Hugging Faceプラットフォームには数十万のモデルが托管され、オープンソースAIエコシステムの中心的存在となっている。

---

## SK Hynix、265億ドルで米国史上最大の外国人IPOを達成

AIチップ需要の恩恵を受けたSK Hynixが、265億ドルのIPOを米国市場）で実現した。NVIDIAのHBMメモリ主力サプライヤーである同社は、「AIメモリのサムスン」と称され、生成AI向けDRAM需要の急増背景下で成長している。

---

## 参考リンク

- [Apple sues OpenAI over alleged trade secret theft (TechCrunch)](https://techcrunch.com/2026/07/10/apple-sues-openai-over-alleged-trade-secret-theft/)
- [Meta removes controversial AI feature on Instagram after backlash (TechCrunch)](https://techcrunch.com/2026/07/10/meta-removes-controversial-ai-feature-on-instagram-after-backlash/)
- [OpenAI bets on families as ChatGPT goes deeper into households (TechCrunch)](https://techcrunch.com/2026/07/11/openai-bets-on-families-as-chatgpt-goes-deeper-into-households/)
- [Hugging Face's CEO on why companies are done renting their AI (TechCrunch)](https://techcrunch.com/2026/07/10/hugging-faces-ceo-on-why-companies-are-done-renting-their-ai/)
- [SK Hynix raises $26.5B in the biggest foreign IPO in US history (TechCrunch)](https://techcrunch.com/2026/07/10/sk-hynix-raises-26-5b-in-the-biggest-foreign-ipo-in-us-history-is-urged-to-build-new-us-fabs/)

---

*本文の情報は2026年7月12日時点のものです。*
