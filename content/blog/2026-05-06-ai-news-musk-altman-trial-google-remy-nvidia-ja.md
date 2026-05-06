# AI開発者向け最新ニュース（2026年5月6日）

OpenAI創業当事者間の裁判が真っ只中進行する中、Googleは新しいAIエージェント「Remy」のテストを開始。SamsungがAIチップ需要で時価総額1兆ドルを突破し、Genesis AIは105Mドル規模でロボット工学のFoundation Modelを発表。これらのトピックを振り返る。

---

## OpenAI創業者裁判：Musk vs Altman 法廷レポート

The Vergeのリアルタイム報道によると、5月6日にSam AltmanとElon Muskの裁判が進行中。Musk側のチームは**Shivon Zilis**（OpenAIの元理事、Muskとの間に4人の子供がいる）を証人として喚問。ZilisはYale卒業後にIBM入社、Bloomberg Ventures、Bloomberg Betaを経てAI特化の投資家に転身した経歴を語った。「Ray Kurzweilの『The Age of Spiritual Machines』を13歳で読み、10〜15回読み返した」と法廷で述べた。

**Mira Murati**はビデオ証言で。「Altmanが解任された際、OpenAIは崩壊寸前だった」と証言。解任後に問題が継続していたことも認めた。Microsoft CEO **Satya Nadella**の証言は5月6日予定、OpenAI共同創業者の**Ilya Sutskever**も証言予定。

Muskは2024年に提訴。OpenAIが非営利使命を棄却し、利益追求に方針転換したと主張している。求償内容：**AltmanとBrockmanの解任**、OpenAIの公益企業としての操業停止、最大1500億ドルの損害賠償。OpenAI側は「競合を妨害するための根拠のない訴訟」と反論（GrokがChatGPT競合）。

### 技術者として見るべき論点

- **GPT-5以降の収益化と非軍事利用の境界**：OpenAIがMicrosoft Azureに依存する構造
- **非営利→公益企業転換の法的妥当性**：Delaware法との整合性
- **Sutskeverの証言内容**が内部設計の争点を決める可能性

---

## Genesis AI：$105Mシードでロボティクス用Foundation Modelを発表

TechCrunchが伝えたところによると、Genesis AIは**GENE-26.5**という最初のモデルを亮相。Khosla系スタートアップで、105Mドルもの大型シードラウンドを実施。デモでは複数のロボットハンドがルービックキューブ操作などの複雑なタスクを遂行した。

### 技術的ポイント

- **Foundational AI for Robotics**：単一基盤モデルで複数のロボットタスクを扱える可能性
- Demoではルービックキューブソルブを使用 — 器用さと計画性を同時にテストするタスクとして知られている
- フルスタック化した理由は明らかではないが、インフラ→モデル→制御まで垂直統合する戦略と推察

Josh Tobin率いるチームの成果として注目に値する。

---

## Samsung時価総額1兆ドル突破：AI chip需要でAsian企業2社目

Samsung Electronicsが時価総額1兆ドルを突破。TSMCに続きAsian企業として2社目。上昇要因は**AI駆動のchip需要**。HBMメモリやAI ASICへの需要取り込みが背景にある。

開発者視点では：
- **HBM4**のSamsung製採用が増えるか（Micron・SK Hynixとの競合）
- AI accelerator向けカスタムチップ市場でのSamsungのポジショニング
- Samsung Foundry vs TSMCの戦略的行方

---

## Apple、Siri AI機能で$250M和解金

AppleはSiriのAI機能の遅延を理由に集団災害和解金**2億5000万ドル**を支払うことで合意した。Apple Intelligenceの拡大予定としていた機能群が早くも出揃わず、ユーザーが提訴していた。

---

## Google、Remy AIエージェントをテスト中

Business Insider報道によると、Googleは**Remy**という新しいpersonal AI agentをGemini内でテスト中。24/7 personal agentとして定位し、Googleサービス全般と統合するplan。GitHub・Spotify・YouTube Music・WhatsApp・Google Homeなどとの接続を想定。

### 技術的評価

- **Agentic AI + connected apps**の組み合わせはOpenAIのOperatorやAnthropicのComputer Useに近い
- **Least-privilege principle**と**audit logging**を重視するGoogle Cloudのガバナンスガイダンス与自己躍着
- ただし、内部dogfooding段階であり一般公開時期は不明

---

## US政府、Defense AIサプライヤーを拡張

米国 防総省がMicrosoft・Amazon・Nvidia・Reflection AI（未公開モデル）と契約。OpenAI・xAI・Googleに加えて7社目が構成された。「any lawful use」条項で機密レベル6（secret）と7（top secret）での活用が可能に。

**Anthropic**とは対立。CEO Darren Amodeiは監視・自律型致死兵器への利用を懸念し、200Mドル契約を白紙撤回。米政府側を「supply chain risk」と見なす初回ケースに。

興味深いことに、Claude coding modelはまだ米政府組織で使用されている可能性。White Houseは「Anthropic再参加」の道を探索中との情報もある。

---

## NVIDIA Nemotron 3 Nano Omni：Vision + Audio + Language統合

NVIDIAは**Nemotron 3 Nano Omni**を発表。Vision・Audio・Languageの3 Modalitiesを統合し、AI agents用途で従来の最大**9倍能率**向上を達成。

### 企業AI agents方面

- NVIDIA × ServiceNow：**自律型AI agents for enterprises**で提携強化
- OpenAI **GPT-5.5**がNVIDIAインフラ上でCodexを駆動
- Adobe Agents × NVIDIA × WPP：クリエイティブ知性の突破口

FP4精度やLoRA最適化など、推論コスト削減에도 주목할点。

---

## HPのEnterprise AIインフラ

AI & Big Data Expo San Jose（5月18-19日）控えて、HPのJerome Gabryszewski（AI & Data Science BD Manager）へのインタビュー分かったこと：

- **ZGX Nano**：NVIDIA GB10 Grace Blackwell Superchip、128GB unified memory、1000 TOPS FP4。200Bパラメータローカル処理対応。2台接続で405Bパラメータ
- **Z8 Fury**：4x NVIDIA RTX PRO 6000 Blackwell（384GB VRAM）でフルモデル開発サイクルをオンプレmises
- **ZGX Fury**：GB300 Grace Blackwell Ultra、748GB coherent memory、兆パラメータ推論をデスクトップで実現

コスト比較：**5年で1tokenあたり最大18倍コスト優位**という試算。

---

## 参考リンク

- [Musk vs Altman trial - The Verge](https://www.theverge.com/tech/917225/sam-altman-elon-musk-openai-lawsuit)
- [Genesis AI Full-Stack Demo - TechCrunch](https://techcrunch.com/2026/05/06/khosla-backed-robotics-startup-genesis-ai-has-gone-full-stack-demo-shows/)
- [Samsung $1T - TechCrunch](https://techcrunch.com/2026/05/06/ai-boom-pushes-samsung-to-1t/)
- [Google Remy AI Agent - AI News](https://www.artificialintelligence-news.com/news/google-remy-ai-agent-gemini-user-control/)
- [US Government AI Suppliers - AI News](https://www.artificialintelligence-news.com/news/us-government-increases-ai-in-defence-suppliers-roster-and-rethinks-anthropics-role/)
- [Physical AI Governance - AI News](https://www.artificialintelligence-news.com/news/physical-ai-governance-autonomous-systems/)
- [NVIDIA Nemotron 3 Nano Omni - NVIDIA Blog](https://blogs.nvidia.com/blog/nemotron-3-nano-omni-multimodal-ai-agents/)
- [OpenAI Codex on NVIDIA - NVIDIA Blog](https://blogs.nvidia.com/blog/openai-codex-gpt-5-5-ai-agents/)

---

*本文の情報は2026年5月6日時点のものです。*