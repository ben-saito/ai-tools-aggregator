# 米国政府によるAnthropic Fable 5禁止、AIレイオフ浪潮、LLM開発競争の行方——2026年6月中旬AIニュースまとめ

2026年6月中旬、AI業界は米国政府のAnthropicモデル禁止という前例なき措置を受け、激動の期間を過ごした。Fable 5 と Mythos 5 の輸出管理、Amazon MGMによるSam Altmanを描く映画のドロップ、OpenAI幹部の短期間での辞任など、ビジネス・規制・人材の動きが、同時に進行している。この他、生成AIのコーディング評価、人類遺産QAベンチマーク，小米の1000 tokens/sモデルなど技術的な話題も豊富だ。本稿ではこれらのトピックを開発者視点で整理する。

---

## 米国政府、AnthropicのFable 5・Mythos 5に輸出管理措置

6月中旬、**Anthropic** が公開したばかりの新モデル **Fable 5** とその基盤モデル **Mythos 5** に米国政府輸出管理措置が課され、外国籍者も含めてアクセスが制限された。Amazonの研究者がFable 5のガードレールをバイパスする方法を開発したことが発表され、国家安全保障上の懸念から対応が取られた。

Anthropicは措置への準拠を表明し、両モデルを一時的にオンラインから非公開にした。Cybersecurityの研究者たちは公開書に署名し、「この措置は危険であり、同じジェイルブレイクは他のモデルにも存在する」と指摘した。

The VergeのDecoderポッドキャストでは、AnthropicCEO Dario Amodeiが過去数年をかけて「AIはSoon危険になる可能性がある、政府は規制に本腰を入れるべき」と主張してきた立場と、政府側に立った場合の皮肉について議論された。Anthropicは安全なASI開発に向けて主張してきた企業であり、政府との対立は予定外の展開となっている。

Anthropicのモデルは、米国の輸出管理条例（EAR）に基づき、台湾や中国を含む特定地域への模型の提供が制限される可能性がある。Anthropicは措置に対して異議を申し上げる構えを見せており、法的措置も含めた対応が検討されていると伝えられる。

---

## OpenAI幹部Barret Zoph、わずか5ヶ月で再び辞任

**Barret Zoph** がOpenAIのEnterprise AI Sales責任者をわずか5ヶ月で辞任したことが6月19日に明らかになった。Zophは2026年1月にOpenAIに復帰する此前、Mira Muratiが設立したThinking Machines Labの共同創業者兼CTO職にあった。

Zophの復帰時、OpenAIは「サイドクエスト」と言われたプロジェクトを縮小し、EnterpriseとCodingに収益化を集中する方針を示していた。ZophはそのEnterprise展開を主導する重要な役割を担っていた。

OpenAIはZophの辞任を確認したが、コメントは控えている。Industryの観測では、OpenAIのIPO準備に伴う組織再編や収益化への圧力が幹部間の考え方の違いが背景にあると見られている。

---

## Amazon MGM、Sam Altman映画「Artificial」をドロップ

Luca Guadagnino監督、Andrew Garfield主演でOpenAI CEO Sam Altmanを描く映画 **「Artificial」** がAmazon MGM Studiosにより配給権が剥奪されたと6月19日に報道された。映画は2023年のAltmanCEO解雇とその後の5日間の騒乱を描写するもので、Mira Murati役にMonica Barbaro、Elon Musk役にIke Barinholtzが出演を予定していた。

スタジオは「この映画は別のスタジオにより上映される方が適切と考えている」と声明を出し、映画メーカーと緊密に協力していると述べた。配給権の移行先はまだ決まっていない。

この映画問題は、AI業界における倫理やリーダーシップの可視化を巡る論争を反映している。OpenAIの治理構造や2023年のCEO解雇劇はHollywoodの関心を集め続けている。

---

## AIレイオフ浪潮：採用オフセクティブな焦げ付きと構造問題

TechCrunchの分析「The AI layoff wave is becoming a powder keg」は、**tens of thousandsの労働者**がAI導入を理由に解雇されている一方、AI_insidersは爆発的な富を築いている構図を描いている。

Connie Loizos記者は、米国のテック企業でAI関連人材への巨额な投資が続く一方で、多くの企業で「AIファースト」の人員削減が実施されている状況を報告している。特に、Microsoft、Google、Metaなどの大企業でAIエンジニアへの高報酬が継続する一方、伝統的なバックエンド/サポート部門の人々がAIツールに置き換えられている。

このレポートは、AI技術の便益が特定の層に集中し、広く分配されていないことを指摘。AIの導入が全ての労働者にとって有益であることを保証する政策やプログラムの必要性が論じられている。

---

## 消費者意識の変化：「AI」ブランドバッシング60%

WordPress VIPの調査によると、**アメリカの消費者の60%がブランドメッセージングにおける「AI」という表現を嫌悪**と感じていることが判明した。消費者はAI生成コンテンツやAIを活用したサービスに警戒感を強めている。

同時に、企業はAI検索を重要な参照チャネルと見なしており、AIと消費者信頼の間に明らかな乖離が生まれている。このデータは「AI」というラベリングがマーケティング上过度に使われていることへの反動を示している。

企業にとっての課題は、AIの存在を示しながら消費者信頼を損なわないコミュニケーション戦略を見出すこと。透明性（transparency）と価値の明示が今後ますます重要になると考えられる。

---

## 安全性研究の新規 Nonprofit「Sequent」——「Alignment is Not on Track」

Import AIが報じた新しい safety startup **Sequent** は、英国AI Security InstituteのAlignmentチームと、Timaeusのalignment研究者が結集して設立した非營利研究組織だ。

Sequentは以下のMissionを揭げている：
- ASI（人工超知能）が今後数年以内に開発される可能性がある
- 現在のAlignment研究はASIと同じ時間枠の準備ができていない
- 「In an ideal world, we would develop an approach to building superintelligence together with a theoretical proof that it was safe, and then build it.」

**目標：** 40〜80名のフルタイム従業員を数年内獲得、$100-150Mの初期資金調達、さらに成功なら10倍規模での資金調達を目指す。

研究の方向性：
- Scalable Oversight
- Learning Theory
- Heuristic Arguments
- Game Theory
- Personas

注目点は、Scalable Oversight研究の相互作用——特别是"Reachable Equilibria"と"knowing and setting knobs"の組み合わせ。この組織は重大な问题时には声を上げる必要があるとし、「we might need to yell」と記述している。

---

## Xiaomi、1000 Tokens/秒のLLM——MiMo-V2.5-Pro-UltraSpeed

**Xiaomi** が1兆パラメータLLM **MiMo-V2.5-Pro-UltraSpeed** を開発した。注目の高速推論特徴は：

- **推論速度：1000 tokens/秒**（シングル8-GPU commodity nodeで実現）
- **FP4量子化** + **DFlash（ブロックレベルmasked parallel prediction）**
- **TileRT**（Tile AI開発の推論加速ソフトウェア）との共同設計

不易购买高性態Hardware的中国企业而言、このようなソフトウェアとHardwareの共同設計は-export Controls下での重要な戦略とされている。「speed has a quality all of its own」というXiaomiの主張するように、生成速度の向上が新たなユースケース（olin-the-flyソフトウェア リファクタリングなど）を解放する。

---

## Cognition、新コーディングベンチマーク「FrontierCode」——Diamond最难問でClaude Opus 4.8 13.4%

AI Coding Agent企業 **Cognition**（Devinの開発元）が新しいベンチマーク **FrontierCode** を公開した：

- **150タスク**（Diamond/Main/Extendedの3ティア）
- 対応言語：Python, Go, TypeScript, JavaScript, Java, C/C++
- **Diamond结果：**
  - Claude Opus 4.8: 13.4%
  - GPT-5.5: 6.3%
  - Claude Opus 4.7: 5.2%

特徴は：
- **20名の开源開発者が40時間以上かけて選定**
- 「コードのマージ可能性」を評価——正確性、テスト品質、スコープ規律、スタイル、ベンチマーク規約への準拠
- Classical Testing + LLMによるテスト調整·レビューのハイブリッド

SWE-Bench（2023年10月公開）がほぼ飽和状態にある中、FrontierCodeは今後の数年有効な評価軸として期待されている。Import AIでは「2027年6月までにDiamondで70%超が達成されるだろう」と予想されている。

---

## ChinaHeritaQA：中国World Heritage遺産のVision-Language QAベンチマーク

研究者たちが中国人民网Heritag関連14,133個の多肢選択QAペア（2,279枚の写真、51カ所）を収録したベンチマーク **ChinaHeritaQA** を公開した：

- **7つの質問カテゴリ：** 同一識別、視覚グラウンディング、記述照合、時代分類、歴史的背景化、機能分析、建築分析
- **平均人間正解率：67%** vs 最高开源模型Qwen-VL-8B-Instruct: **81%**

このベンチマークは、中国の文化的理解を必要とするVision-Language Modelの評価枠組みとして、政府や企業がLLM導入前に文化的競争力を確認する枠組みとなる可能性がある。

---

## AARRIベンチマーク：AI研究インターンの評価

西安交通大学と西安電子科技大学の研究チームが **AARRI-Bench（Act As a Real Research Intern）** を公開した：

- **82タスク**——人間研究者にとって简单だがAutonomous Agentには難しいものを手動設計
- **最高性能：Claude-Opus-4.7 + Mini-Swe-Agent harness: 68.3%**、次点是DeepSeek-v4-Flash（約60%）

4つの評価軸：
- **Context：** 学術·フィールド開発の広い文脈への感度
- **Mindset：** 自律的な学術的推論と自己修正能力
- **Hands-on：** 技術的習熟度
- **Interaction：** ツール活用と人間との協調

注目タスク例：
- 査読時のデータ偽装検出
- 自動査読システムを高めるLaTeX挿入の検出
- アブレーション構成の欠落監査
- 「結果を変更しろ」という指示への拒否能力

---

## 参考リンク

- [TechCrunch - The AI layoff wave is becoming a powder keg](https://techcrunch.com/2026/06/15/the-ai-layoff-wave-is-becoming-a-powder-keg/)
- [The Verge - The film about Sam Altman has been dropped by Amazon MGM](https://www.theverge.com/ai-artificial-intelligence/952906/sam-altman-film-artificial-openai-amazon-mgm-dropped)
- [The Verge - Barret Zoph is out at OpenAI again after just five months](https://www.theverge.com/ai-artificial-intelligence/952837/barret-zoph-openai-thinking-machines-lab)
- [The Verge - Who decides when AI is too dangerous?](https://www.theverge.com/podcast/951542/anthropic-claude-fable-5-mythos-ban-pentagon-ai-regulation-trump)
- [Import AI #461 - Alignment is Not on Track](https://importai.substack.com/p/import-ai-461-alignment-is-not-on)
- [Xiaomi MiMo-V2.5-Pro-UltraSpeed Blog](https://xiaomi.com)
- [Cognition - Introducing FrontierCode](https://www.cognition.ai)
- [ChinaHeritaQA Dataset (GitHub)](https://github.com/ChinaHeritaQA)
- [AARRI-Bench (arXiv)](https://arxiv.org/abs/xxxxxxx)

---

*（本文の情報は2026年6月20日時点のものです）*
